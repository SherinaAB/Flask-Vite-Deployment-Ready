from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy import MetaData, Column, Integer, ForeignKey, Table
from sqlalchemy.orm import validates, relationship
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

from config import db, bcrypt

# Base = declarative_base()

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    username = db.Column(db.String, nullable = False, unique = True)
    email = db.Column(db.String)
    _password_hash = db.Column(db.String, nullable=False)
    approved_user = db.Column(db.Boolean, default=False, index=True)
    img = db.Column(db.String, nullable=True)

    sales = db.relationship('Sales', back_populates='user')

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
    

class TimeframeModel(db.Model, SerializerMixin):
    __tablename__ = 'timeframes'

    id = db.Column(db.Integer, primary_key=True)
    timeframe = db.Column(db.String(50), nullable=False)
    sales_amount = db.Column(db.Float, nullable=False)
    sales_units = db.Column(db.Integer, nullable=False)

    sales = db.relationship('Sales', back_populates='timeframemodel')


class Sales(db.Model, SerializerMixin):
    __tablename__ = 'sales'

    id = db.Column(db.Integer, primary_key=True)
    sale_amount = db.Column(db.Float, nullable=False)
    sale_units = db.Column(db.Integer, nullable=False)

    # sales_categories = db.Table('sales_categories',
    #     db.Column('sales_id', db.Integer, db.ForeignKey('sales.id'), primary_key=True),
    #     db.Column('category_id', db.Integer, db.ForeignKey('categories.id'), primary_key=True)
    # )

    # sales_stores = db.Table('sales_stores',
    #     db.Column('sales_id', db.Integer, db.ForeignKey('sales.id'), primary_key=True),
    #     db.Column('store_id', db.Integer, db.ForeignKey('stores.id'), primary_key=True)
    # )
    category_id = db.Column(db.Integer,db.ForeignKey('categories.id'))
    store_id = db.Column(db.Integer,db.ForeignKey('stores.id'))

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    timeframemodel_id = db.Column(db.Integer, db.ForeignKey('timeframes.id'))

    user = db.relationship('User', back_populates='sales')
    timeframemodel = db.relationship('TimeframeModel', back_populates='sales')

    categories = db.relationship('Category', back_populates='sales')
    stores = db.relationship('Store', back_populates='sales')

    serialize_rules = ('-categories', '-stores','-user', '-timeframemodel',)


class Category(db.Model, SerializerMixin):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=True, nullable=False)

    sales  = db.relationship('Sales', back_populates='categories')
    products = db.relationship('Product', back_populates="category")

    serialize_rules = ('-sales', '-products',)


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

    sales = db.relationship('Sales', back_populates='stores')

    serialize_rules = ('-sales',)


class Product(db.Model, SerializerMixin):
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

    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))

    category = db.relationship('Category', back_populates='products')

    @validates("price")
    def validates_price(self,key,price):
        if not price and 0 <= price:
            raise ValueError("Price must exist as a positive number")
        return price