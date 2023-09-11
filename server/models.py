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

Base = declarative_base()

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

    sales = db.relationship('Sales', back_populates='user', cascade='all, delete')
# ========================== monday, 9/11/23 test =======================
    # usersession_id = db.Column(db.Integer, db.ForeignKey('user_sessions.id'))
    # user_session_relationship = db.relationship('UserSession', back_populates="user_relationship", cascade="all, delete")
# ========================== monday, 9/11/23 test =======================
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

class UserSession(db.Model, SerializerMixin):
    __tablename__ ='user_sessions'

    id = db.Column(db.Integer, primary_key=True)
    login_time = db.Column(db.String, nullable=False)
    logout_time = db.Column(db.String, nullable=False)

    # ======user_id=db.Column(db.Integer, db.ForeignKey('user.id'))======
## ========================== monday, 9/11/23 test =======================
    # user_relationship = db.relationship('User', back_populates="user_session_relationship")
    # timeframemodel = db.relationship('TimeframeModel', back_populates="user_session_relationship",cascade="all, delete") 
    # # ====== comment out, per Stephen's example =======

    # serialize_rules = ('-user_relationship','-timeframemodel',)
# ========================== monday, 9/11/23 test =======================
class TimeframeModel(db.Model):
    __tablename__ = 'timeframes'

    id = db.Column(db.Integer, primary_key=True)
    timeframe = db.Column(db.String(50), nullable=False)
    sales_amount = db.Column(db.Float, nullable=False)
    sales_units = db.Column(db.Integer, nullable=False)

    sales = db.relationship('Sales', back_populates='timeframemodel', cascade='all, delete')

# ========================== monday, 9/11/23 test =======================
    # usersession_id = db.Column(db.Integer, db.ForeignKey('user_sessions.id'))

    # user_session_relationship = db.relationship('UserSession', back_populates="timeframemodel",cascade="all, delete")
    # # sales = db.relationship('Sales', back_populates="timeframemodel",cascade="all, delete")  
    # sales = db.relationship('Sales', secondary=timeframemodel_sales, back_populates='timeframes',cascade="all, delete")

    # # ====== comment out, per Stephen's example =======
    # # category_relationship = db.relationship('Category', back_populates="timeframemodel_relationship", cascade="all, delete")  ====== per Stephen's example =======
    # serialize_rules = ('-user_session_relationship',)
# ========================== monday, 9/11/23 test =======================

class Sales(db.Model):
    __tablename__ = 'sales'

    id = db.Column(db.Integer, primary_key=True)
    sale_amount = db.Column(db.Float, nullable=False)
    sale_units = db.Column(db.Integer, nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    timeframemodel_id = db.Column(db.Integer, db.ForeignKey('timeframes.id'), nullable=False)

    user = db.relationship('User', back_populates='sales', cascade='all, delete')
    timeframemodel = db.relationship('TimeframeModel', back_populates='sales', cascade='all, delete')
    categories = db.relationship('Category', secondary='sales_categories', back_populates='sales', cascade='all, delete')
    stores = db.relationship('Store', secondary='sales_stores', back_populates='sales', cascade='all, delete')

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)  # Define the foreign key to User and relationship to User
    user = db.relationship('User', back_populates='sales', cascade='all, delete')


# ========================== monday, 9/11/23 test =======================
    # ====================== secondary relationships below from 9/10/23 =
    # categories = db.relationship('Category', secondary=sales_category, back_populates='sales')
    # stores = db.relationship('Store', secondary=sales_store, back_populates='sales')
    # timeframes = db.relationship('TimeframeModel', secondary=timeframemodel_sales, back_populates='sales')
# ========================== monday, 9/11/23 test =======================

class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=True, nullable=False)

    sales  = db.relationship('Sales', secondary='sales_categories', back_populates='categories', cascade='all, delete')
    products = db.relationship('Product', back_populates="category", cascade="all, delete")
# ========================== monday, 9/11/23 test =======================
#     sales = db.relationship('Sales', secondary=sales_category, back_populates='categories')

# sales_category = Table(
#     'sales_category',
#     Base.metadata,
#     Column('sales_id', Integer, ForeignKey('sales.id')),
#     Column('category_id', Integer, ForeignKey('categories.id'))
# )
# ========================== monday, 9/11/23 test =======================
class Store(db.Model):
    __tablename__ = 'stores'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=True, nullable=False)
    number = db.Column(db.Integer)
    address = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(255), nullable=False)
    state = db.Column(db.String(255), nullable=False)
    zipcode = db.Column(db.String(255), nullable=False)
    market = db.Column(db.String(255), nullable=False)

    sales = db.relationship('Sales', secondary='sales_stores', back_populates='stores', cascade='all, delete')

# ========================== monday, 9/11/23 test =======================
    # sales = db.relationship('Sales', secondary=sales_store, back_populates='stores')
# ========================== monday, 9/11/23 test =======================

sales_categories = db.Table('sales_categories',
    db.Column('sales_id', db.Integer, db.ForeignKey('sales.id'), primary_key=True),
    db.Column('category_id', db.Integer, db.ForeignKey('categories.id'), primary_key=True)
)

sales_stores = db.Table('sales_stores',
    db.Column('sales_id', db.Integer, db.ForeignKey('sales.id'), primary_key=True),
    db.Column('store_id', db.Integer, db.ForeignKey('stores.id'), primary_key=True)
)
# class Category(db.Model):
#     __tablename__ = 'categories'
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(255), unique=True, nullable=False)

#     # =====store_id = db.Column(db.Integer, db.ForeignKey('stores.id'))  ===== per Stephen's example =====
#     product_id = db.Column(db.Integer, db.ForeignKey('products.id'))

#     product_relationship = db.relationship('Product', back_populates="category_relationship",cascade="all, delete")
#     # ======store_relationship = db.relationship('Store', back_populates="sales_relationship",foreign_keys=[store_id],cascade="all, delete")
#     # store_relationship = db.relationship('Store', back_populates="category_relationship", foreign_keys=[store_id], cascade="all, delete")
#     # store_relationship = db.relationship('Store', back_populates="categories", foreign_keys=[store_id], cascade="all, delete")   ===== per Stephen's example ===== =====
#     sales_relationship = db.relationship('Sales', back_populates="category_relationship",cascade="all, delete")

#     serialize_rules = ('-product_relationship','-store_relationship','-sales_relationship',)

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

    # category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))

    # categories = db.relationship('Category', back_populates="product_relationship", cascade="all, delete")

    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))

    # Define the 'category' relationship
    category = db.relationship('Category', back_populates='products', cascade="all, delete")

    @validates("price")
    def validates_price(self,key,price):
        if not price and 0 <= price:
            raise ValueError("Price must exist as a positive number")
        return price
# ========================== monday, 9/11/23 test =======================
# timeframemodel_sales = Table(
#     'timeframes_sales',
#     Base.metadata,
#     Column('sales_id', Integer, ForeignKey('sales.id')),
#     Column('timeframemodel_id', Integer, ForeignKey('timeframes.id'))
# )
# ========================== monday, 9/11/23 test =======================
# 
#     
# class Store(db.Model, SerializerMixin):
#     __tablename__ = 'stores'
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(255), unique=True, nullable=False)
#     number = db.Column(db.Integer)
#     address = db.Column(db.String(255), nullable=False)
#     city = db.Column(db.String(255), nullable=False)
#     state = db.Column(db.String(255), nullable=False)
#     zipcode = db.Column(db.String(255), nullable=False)
#     market = db.Column(db.String(255), nullable=False)

#     # ========category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))

#     # category_relationship = db.relationship('Category', back_populates="sales_relationship", cascade="all, delete")
#     # category_relationship = db.relationship('Category', back_populates="store_relationship", cascade="all, delete")
#     # category_relationship = db.relationship('Category', back_populates="store_relationship", foreign_keys=[category_id], cascade="all, delete")
#     # categories = db.relationship('Category', back_populates="store_relationship", foreign_keys=[category_id], cascade="all, delete", uselist=True)  =========
#     sales_relationship = db.relationship('Sales', back_populates="store_relationship",cascade="all, delete")

#     serialize_rules = ('-sales_relationship',)

# class Sales(db.Model, SerializerMixin):
#     __tablename__ = 'sales'
#     id = db.Column(db.Integer, primary_key=True)
#     sale_amount = db.Column(db.Float, nullable=False)
#     sale_units = db.Column(db.Integer, nullable=False)
   
#     timeframemodel_id = db.Column(db.Integer, db.ForeignKey('timeframes.id'))
#     category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
#     store_id = db.Column(db.Integer, db.ForeignKey('stores.id'))

#     timeframemodel_relationship = db.relationship('TimeframeModel', back_populates="sales_relationship", cascade="all, delete")
#     category_relationship = db.relationship('Category', back_populates="sales_relationship", cascade="all, delete")
#     store_relationship = db.relationship('Store', back_populates="sales_relationship", cascade="all, delete")

#     serialize_rules = ('-category_relationship','-store_relationship','-timeframemodel_relationship')



# # Define the join table explicitly
# sales_category = Table(
#     'sales_category',
#     Base.metadata,
#     Column('sales_id', Integer, ForeignKey('sales.id')),
#     Column('category_id', Integer, ForeignKey('categories.id'))
# )

# sales_store = Table(
#     'sales_store',
#     Base.metadata,
#     Column('sales_id', Integer, ForeignKey('sales.id')),
#     Column('store_id', Integer, ForeignKey('stores.id'))
# )


# class Sales(db.Model):
#     __tablename__ = 'sales'

#     id = db.Column(db.Integer, primary_key=True)
#     sale_amount = db.Column(db.Float, nullable=False)
#     sale_units = db.Column(db.Integer, nullable=False)

#     categories = db.relationship('Category', secondary=sales_category, back_populates='sales')
#     stores = db.relationship('Store', secondary=sales_store, back_populates='sales')
#     timeframes = db.relationship('TimeframeModel', secondary=timeframes_sales, back_populates='sales')

# class Category(db.Model):
#     __tablename__ = 'categories'

#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(255), unique=True, nullable=False)

#     sales = db.relationship('Sales', secondary=sales_category, back_populates='categories')

# class Store(db.Model):
#     __tablename__ = 'stores'

#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(255), unique=True, nullable=False)
#     number = db.Column(db.Integer)
#     address = db.Column(db.String(255), nullable=False)
#     city = db.Column(db.String(255), nullable=False)
#     state = db.Column(db.String(255), nullable=False)
#     zipcode = db.Column(db.String(255), nullable=False)
#     market = db.Column(db.String(255), nullable=False)

#     sales = db.relationship('Sales', secondary=sales_store, back_populates='stores')

