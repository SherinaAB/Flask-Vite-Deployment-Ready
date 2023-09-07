#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, UserSession, TimeframeModel, Category, Product, Store, Sales 

def create_database():
 with app.app_context():
        db.create_all()

def create_users():
    users = []
    for _ in range(50):
        is_approved = fake.boolean(chance_of_getting_true = 50)
        u = User(
            first_name = fake.first_name(),
            last_name = fake.last_name(),
            username = fake.user_name(),
            email = fake.email(),
            password_hash = "123abc", 
            approved_user = is_approved,
            img = fake.emoji(),
        )
        users.append(u)
    return users

def create_user_sessions():
    user_sessions = []
    for _ in range(50):
        user_sessions.append(
            UserSession(
                # session_token = fake.session_token,
                login_time = fake.date_time_between("-1week", "now"),
                logout_time= fake.date_time_between("now", "now"),
                user_id = randint(1, 50),
            )
        )
    return user_sessions

def create_timeframes():
    timeframes = []
    for _ in range(50):
        timeframes.append(
            TimeframeModel(
                timeframe = fake.month_name(),
                sales_amount = randint(10000, 100000),
                sales_units = randint(200, 2000),
                usersession_id = randint(1, 50),
            )
        )
    return timeframes

def create_categories():
    categories = []
    for _ in range(50):
        categories.append(
            Category(
                name = fake.text(max_nb_chars = 20),
                store_id = randint(1, 50),
                product_id = randint(1, 50),
            )
        )
    return categories

def create_products():
    products = []
    for _ in range(50):
        is_approved = fake.boolean(chance_of_getting_true = 50)
        products.append(
            Product(
                name = fake.text(max_nb_chars = 20),
                description = fake.text(max_nb_chars = 200),
                sku = fake.ean(length=13),
                detail = fake.text(max_nb_chars = 200),
                color = fake.text(max_nb_chars = 20),
                size = fake.text(max_nb_chars = 20),
                price = randint(25, 100),
                status = is_approved,
                image = fake.image_url(),                
                category_id = randint(1, 50),
            )
        )
    return products

def create_stores():
    stores = []
    for _ in range(50):
        stores.append(
            Store(
                name = fake.text(max_nb_chars = 20),
                number = randint(111, 2500),
                address = fake.text(max_nb_chars = 20),
                city = fake.text(max_nb_chars = 20),
                state = fake.state(),
                zipcode = fake.zipcode(),
                market = fake.text(max_nb_chars = 20),
                category_id = randint(1, 50),
            )
        )
    return stores

def create_sales():
    sales = []
    for _ in range(50):
        sales.append(
            Sales(
                sale_amount = randint(10000, 100000),
                sale_units = randint(200, 2000),
                category_id = randint(1, 50),
                store_id = randint(1, 50),   
            )
        )
    return sales

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # create_database()
        print("Clearing database...")
        User.query.delete()
        UserSession.query.delete()
        TimeframeModel.query.delete()
        Category.query.delete()
        Product.query.delete()
        Store.query.delete()
        Sales.query.delete()

        print("Seeding users...")
        users = create_users()
        db.session.add_all(users)
        db.session.commit()

        print("Creating user sessions...")
        user_sessions = create_user_sessions()
        db.session.add_all(user_sessions)
        db.session.commit()

        print("Creating timeframes...")
        timeframes = create_timeframes()
        db.session.add_all(timeframes)
        db.session.commit()

        print("Creating categories...")
        categories = create_categories()
        db.session.add_all(categories)
        db.session.commit()

        print("Creating products...")
        products = create_products()
        db.session.add_all(products)
        db.session.commit()

        print("Creating stores...")
        stores = create_stores()
        db.session.add_all(stores)
        db.session.commit()

        print("Creating sales...")
        sales = create_sales()
        db.session.add_all(sales)
        db.session.commit()

        print("Done seeding!")