from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy import MetaData
from sqlalchemy.orm import validates, relationship
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.ext.associationproxy import association_proxy
from datetime import datetime

from config import db, bcrypt

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    username = db.Column(db.String, nullable = False, unique = True)
    email = db.Column(db.String)
    _password_hash = db.Column(db.String, nullable=False)
    approved_user = db.Column(db.Boolean, default=False, index=True)
    img = db.Column(db.String, nullable=True)

    @hybrid_property
    def password_hash(self):
        return self._password_hash

    @password_hash.setter
    def password_hash(self, password):
        # utf-8 encoding and decoding is required in python 3
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))
    
    def __repr__(self):
        return f"<User {self.username}>"
    
    @validates("email")
    def validate_email(self, key, email):
        if "@" not in email:
            raise ValueError("Email invalid")
        if len(email) > 40:
            raise ValueError(
                "Email must be less than 40 characters long"
            )
        return email

    usersession_id=db.Column(db.Integer,db.ForeignKey('user_sessions.id'))
    user_session_relationship = db.relationship('UserSession', back_populates="user_relationship",cascade="all, delete")

class UserSession(db.Model, SerializerMixin):
    __tablename__ ='user_sessions'

    id = db.Column(db.Integer, primary_key=True)
    login_time = db.Column(db.String, nullable=False)
    logout_time = db.Column(db.String, nullable=False)

    user_id=db.Column(db.Integer)

    user_relationship = db.relationship('User', back_populates="user_session_relationship")
    timeframemodel_relationship = db.relationship('TimeframeModel', back_populates="user_session_relationship",cascade="all, delete")

    serialize_rules = ('-user_relationship','-timeframemodel_relationship',)


class TimeframeModel(db.Model):
    __tablename__ = 'timeframes'

    id = db.Column(db.Integer, primary_key=True)
    timeframe = db.Column(db.String(50), nullable=False)
    sales_amount = db.Column(db.Float, nullable=False)
    sales_units = db.Column(db.Integer, nullable=False)

    usersession_id = db.Column(db.Integer, db.ForeignKey('user_sessions.id'))

    user_session_relationship = db.relationship('UserSession', back_populates="timeframemodel_relationship",cascade="all, delete")
    sales_relationship = db.relationship('Sales', back_populates="timeframemodel_relationship",cascade="all, delete")
    # category_relationship = db.relationship('Category', back_populates="timeframemodel_relationship", cascade="all, delete")
    serialize_rules = ('-user_session_relationship',)

class Category(db.Model):
    __tablename__ = 'categories'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=True, nullable=False)

    store_id = db.Column(db.Integer, db.ForeignKey('stores.id'))
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))

    product_relationship = db.relationship('Product', back_populates="category_relationship",cascade="all, delete")
    # store_relationship = db.relationship('Store', back_populates="sales_relationship",foreign_keys=[store_id],cascade="all, delete")
    # store_relationship = db.relationship('Store', back_populates="category_relationship", foreign_keys=[store_id], cascade="all, delete")
    store_relationship = db.relationship('Store', back_populates="categories", foreign_keys=[store_id], cascade="all, delete")
    sales_relationship = db.relationship('Sales', back_populates="category_relationship",cascade="all, delete")

    serialize_rules = ('-product_relationship','-store_relationship','-sales_relationship',)

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    description = db.Column(db.String(255))
    sku = db.Column(db.Integer)
    detail = db.Column(db.String(500))
    color = db.Column(db.String(50))
    size = db.Column(db.String(50))
    price = db.Column(db.Float)
    status = db.Column(db.Boolean, default=False, index=True)
    image = db.Column(db.String)
    category_id = db.Column(db.Integer)

    category_relationship = db.relationship('Category', back_populates="product_relationship", cascade="all, delete")

    @validates("price")
    def validates_price(self,key,price):
        if not price and 0 <= price:
            raise ValueError("Price must exist as a positive number")
        return price
    
class Store(db.Model, SerializerMixin):
    __tablename__ = 'stores'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=True, nullable=False)
    number = db.Column(db.Integer)
    address = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(255), nullable=False)
    state = db.Column(db.String(255), nullable=False)
    zipcode = db.Column(db.String(255), nullable=False)
    market = db.Column(db.String(255), nullable=False)

    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))

    # category_relationship = db.relationship('Category', back_populates="sales_relationship", cascade="all, delete")
    # category_relationship = db.relationship('Category', back_populates="store_relationship", cascade="all, delete")
    # category_relationship = db.relationship('Category', back_populates="store_relationship", foreign_keys=[category_id], cascade="all, delete")
    categories = db.relationship('Category', back_populates="store_relationship", foreign_keys=[category_id], cascade="all, delete", uselist=True)
    sales_relationship = db.relationship('Sales', back_populates="store_relationship",cascade="all, delete")

    serialize_rules = ('-category_relationship','-sales_relationship',)

class Sales(db.Model, SerializerMixin):
    __tablename__ = 'sales'
    id = db.Column(db.Integer, primary_key=True)
    sale_amount = db.Column(db.Float, nullable=False)
    sale_units = db.Column(db.Integer, nullable=False)
   
    timeframemodel_id = db.Column(db.Integer, db.ForeignKey('timeframes.id'), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
    store_id = db.Column(db.Integer, db.ForeignKey('stores.id'), nullable=False)

    timeframemodel_relationship = db.relationship('TimeframeModel', back_populates="sales_relationship", cascade="all, delete")
    category_relationship = db.relationship('Category', back_populates="sales_relationship", cascade="all, delete")
    store_relationship = db.relationship('Store', back_populates="sales_relationship", cascade="all, delete")

    serialize_rules = ('-category_relationship','-store_relationship','-timeframemodel_relationship')






