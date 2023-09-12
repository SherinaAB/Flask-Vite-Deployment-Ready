#!/usr/bin/env python3

# Standard library imports
from flask import Flask
# Remote library imports
from flask import request, render_template, make_response, jsonify, session
from flask_restful import Api, Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import db, User, TimeframeModel, Category, Product, Store, Sales

@app.route('/')
def index():
    return '<h1>Phase 5 Project Server</h1>'

# # ===================== USERS ===================== #
class Users(Resource):
    def get(self):
        users = [u.to_dict() for u in User.query.all()]
        return make_response(users, 200)
        # approved_user = User.query.filter_by(approved_user=True).all()
        # user_list = [{'id': user.id, 'username': user.username, 'email': user.email} for user in approved_user]
        # return jsonify(user_list), 200
    
    def post(self):

        fields = request.get_json()

        try:
            first_name = fields['first_name']
            last_name = fields['last_name']
            email = fields['email']
            username = fields['username']
            password_hash = fields['password']
            approved_user = fields['approved_user']
            img = fields['img']

            if approved_user == True:
                new_user = User(
                    first_name=first_name, 
                    last_name=last_name, 
                    email=email, 
                    username=username, 
                    password_hash=password_hash, 
                    approved_user=approved_user, 
                    img=img)
                
                db.session.add(new_user)
                db.session.commit()
                session['user_id'] = new_user.id
                return make_response(new_user.to_dict(), 201)
        except ValueError:
            return make_response({'error': 'Must be authorized to create an account'}, 422)
            
class UserById(Resource):
    def get(self, id):
        user_by_id = User.query.filter_by(id=id).first()
  
        if user_by_id == None:
            user_by_id_dict = {"errors": ["user not found"]}
            return make_response(user_by_id_dict, 404)
        else:
            return make_response(user_by_id.to_dict(), 200)
      
    def patch(self, id):
        user_by_id = User.query.filter_by(id=id).first()

        if user_by_id == None:
            user_by_id_dict = {"errors": ["user not found"]}

            return make_response(user_by_id_dict, 404)
        else: 
            fields = request.get_json()
            try:
                for attr in fields:
                    setattr(user_by_id, attr, fields[attr])
                    db.session.add(user_by_id)
                    db.session.commit()
                return make_response(user_by_id.to_dict(), 200)
            except ValueError:
                return make_response({"errors": ["validation errors"]}, 422)
            
    def delete(self, id):
        user_by_id = User.query.filter_by(id=id).first()

        if user_by_id == None:
            user_by_id_dict = {"errors": ["user not found"]}

            return make_response(user_by_id_dict, 404)
        else:
            db.session.delete(user_by_id)
            db.session.commit()
            user_by_id_dict = {}
            return make_response(user_by_id.to_dict(), 200)        
# # ===================== LOGIN, CHECK SESION, AND LOGOUT ===================== #
class Login(Resource):
    def post(self):
        login = request.get_json()
        username = login['username']
        password = login['password']
        user = User.query.filter(User.username == username).first()
        if user:
            if user.authenticate(password):
                session['user_id'] = user.id
                return user.to_dict(), 200
        return {'error': 'Unauthorized'}, 401
    
class CheckSession(Resource):
    def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if user:
            return user.to_dict()
        else:
            return {'message': '401: Not Authorized'}, 401

class Logout(Resource):
    def delete(self):
        session['user_id'] = None
        return {'message':'204: No Content'}
         
# # ===================== TIMEFRAMES ===================== #
class Timeframes(Resource):
    def get(self):
        timeframes = [t.to_dict() for t in TimeframeModel.query.all()]
        return make_response(timeframes, 200)
    def post(self):
        fields = request.get_json()
        try:
            timeframe = fields['timeframe']
            # sales_amount = fields['sales_amount']
            # sales_units = fields['sales units']
            if timeframe:
                new_timeframe = TimeframeModel(
                    timeframe=timeframe, 
                    # sales_amount = sales_amount, 
                    # sales_units = sales_units
                    )
                db.session.add(new_timeframe)
                db.session.commit()
                return make_response(new_timeframe.to_dict(), 201)
        except ValueError:
            return make_response({'error': 'validation error'}, 422)
        
class TimeframesById(Resource):
    def get(self, id):
        timeframes = TimeframeModel.query.filter_by(id=id).first()
  
        if timeframes == None:
            timeframes_dict = {"errors": ["user not found"]}
            return make_response(timeframes_dict, 404)
        else:
            return make_response(timeframes.to_dict(), 200)
      
    def patch(self, id):
        timeframes = TimeframeModel.query.filter_by(id=id).first()

        if timeframes == None:
            timeframes_dict = {"errors": ["user not found"]}

            return make_response(timeframes_dict, 404)
        else: 
            fields = request.get_json()
            try:
                for attr in fields:
                    setattr(timeframes, attr, fields[attr])
                    db.session.add(timeframes)
                    db.session.commit()
                return make_response(timeframes.to_dict(), 200)
            except ValueError:
                return make_response({"errors": ["validation errors"]}, 422)
            
    def delete(self, id):
        timeframes = TimeframeModel.query.filter_by(id=id).first()

        if timeframes == None:
            timeframes_dict = {"errors": ["user not found"]}

            return make_response(timeframes_dict, 404)
        else:
            db.session.delete(timeframes)
            db.session.commit()
            timeframes_dict = {}
            return make_response(timeframes.to_dict(), 200) 
# # ===================== CATEGORY ===================== #
class Categories(Resource):
    def get(self):
        cats = [c.to_dict() for c in Category.query.all()]
        return make_response(cats, 200)
    def post(self):
        fields = request.get_json()
        try:
            name = fields['name']
            # store_id = fields['store_id']
            # product_id = fields['product_id']
            if name:
                new_cat = Category(name = name)
                db.session.add(new_cat)
                db.session.commit()
                return make_response(new_cat.to_dict(), 201)
        except ValueError:
            return make_response({'error': 'validation error'}, 422)
        
class CategoriesById(Resource):
    def get(self, id):
        cats = Category.query.filter_by(id=id).first()
        if cats == None:
            cats_dict = {"errors": ["cat not found"]}
            return make_response(cats_dict, 404)
        else:
            return make_response(cats.to_dict(), 200)
      
    def patch(self, id):
        cats = Category.query.filter_by(id=id).first()
        if cats == None:
            cats_dict = {"errors": ["user not found"]}

            return make_response(cats_dict, 404)
        else: 
            fields = request.get_json()
            try:
                for attr in fields:
                    setattr(cats, attr, fields[attr])
                    db.session.add(cats)
                    db.session.commit()
                return make_response(cats.to_dict(), 200)
            except ValueError:
                return make_response({"errors": ["validation errors"]}, 422)
            
    def delete(self, id):
        cats = Category.query.filter_by(id=id).first()
        if cats == None:
            cats_dict = {"errors": ["cat not found"]}

            return make_response(cats_dict, 404)
        else:
            db.session.delete(cats)
            db.session.commit()
            cats_dict = {}
            return make_response(cats.to_dict(), 200) 
# # ===================== PRODUCT ===================== #
class Products(Resource):
    def get(self):
        products = [p.to_dict() for p in Product.query.all()]
        return make_response(products, 200)
    
    def post(self):
        fields = request.get_json()

        try:
            name = fields['name']
            description = fields['description']
            sku = fields['sku']
            detail = fields['detail']
            color = fields['color']
            size = fields['size']
            price = fields['price']
            status = fields['status']
            image = fields['image']
            category_id = fields['category_id']
            if name and description and sku and price:
                new_product = Product(name = name, description = description, sku = sku, detail = detail, color = color, size = size, price = price, status = status, image = image, category_id = category_id)
                db.session.add(new_product)
                db.session.commit()
                return make_response(new_product.to_dict(), 201)
        except ValueError:
            return make_response({'error': 'validation error'}, 422)
        
class ProductsById(Resource):
    def get(self, id):
        products = Product.query.filter_by(id=id).first()
  
        if products == None:
            products_dict = {"errors": ["user not found"]}
            return make_response(products_dict, 404)
        else:
            return make_response(products.to_dict(), 200)
      
    def patch(self, id):
        products = Product.query.filter_by(id=id).first()

        if products == None:
            products_dict = {"errors": ["user not found"]}

            return make_response(products_dict, 404)
        else: 
            fields = request.get_json()
            try:
                for attr in fields:
                    setattr(products, attr, fields[attr])
                    db.session.add(products)
                    db.session.commit()
                return make_response(products.to_dict(), 200)
            except ValueError:
                return make_response({"errors": ["validation errors"]}, 422)
            
    def delete(self, id):
        products = Product.query.filter_by(id=id).first()

        if products == None:
            products_dict = {"errors": ["product not found"]}

            return make_response(products_dict, 404)
        else:
            db.session.delete(products)
            db.session.commit()
            products_dict = {}
            return make_response(products.to_dict(), 200) 
# # ===================== STORE ===================== #
class Stores(Resource):
    def get(self):
        stores = [stores.to_dict() for stores in Store.query.all()]
        return make_response(stores, 200)
    def post(self):
        fields = request.get_json()
        try:
            name = fields['name']
            number = fields['number']
            address = fields['address']
            city = fields['city']
            state = fields['state']
            zipcode = fields['zipcode']
            market = fields['market']
            # category_id = fields['category_id']
            if name and number:
                new_store = Store(name = name, number = number, address = address, city = city, state = state, zipcode = zipcode, market = market) 
                db.session.add(new_store)
                db.session.commit()
                return make_response(new_store.to_dict(), 201)
        except ValueError:
            return make_response({'error': 'validation error'}, 422)
        
class StoresById(Resource):
    def get(self, id):
        stores = Store.query.filter_by(id=id).first()
  
        if stores == None:
            stores_dict = {"errors": ["store not found"]}
            return make_response(stores_dict, 404)
        else:
            return make_response(stores.to_dict(), 200)
      
    def patch(self, id):
        stores = Store.query.filter_by(id=id).first()

        if stores == None:
            stores_dict = {"errors": ["user not found"]}

            return make_response(stores_dict, 404)
        else: 
            fields = request.get_json()
            try:
                for attr in fields:
                    setattr(stores, attr, fields[attr])
                    db.session.add(stores)
                    db.session.commit()
                return make_response(stores.to_dict(), 200)
            except ValueError:
                return make_response({"errors": ["validation errors"]}, 422)
            
    def delete(self, id):
        stores = Store.query.filter_by(id=id).first()

        if stores == None:
            stores_dict = {"errors": ["store not found"]}

            return make_response(stores_dict, 404)
        else:
            db.session.delete(stores)
            db.session.commit()
            stores_dict = {}
            return make_response(stores.to_dict(), 200) 
# # ===================== SALES ===================== #
class Sale(Resource):
    def get(self):
        sale = [s.to_dict() for s in Sales.query.all()]
        return make_response(sale, 200)
    
    def post(self):
        fields = request.get_json()
        try:
            sale_amount = fields['sales_amount']
            sale_units = fields['sales units']
            # category_id = fields['category_id']
            # store_id = fields['store_id']
            if sale_amount and sale_units:
                new_sale = Sales(
                    sale_amount = sale_amount, 
                    sale_units = sale_units, 
                    # category_id = category_id, 
                    # store_id = store_id
                    )
                db.session.add(new_sale)
                db.session.commit()
                return make_response(new_sale.to_dict(), 201)
        except ValueError:
            return make_response({'error': 'validation error'}, 422)
        
class SaleById(Resource):
    def get(self, id):
        sale = Sales.query.filter_by(id=id).first()
  
        if sale == None:
            sale_dict = {"errors": ["sales not found"]}
            return make_response(sale_dict, 404)
        else:
            return make_response(sale.to_dict(), 200)
      
    def patch(self, id):
        sale = Sales.query.filter_by(id=id).first()

        if sale == None:
            sale_dict = {"errors": ["sales not found"]}

            return make_response(sale_dict, 404)
        else: 
            fields = request.get_json()
            try:
                for attr in fields:
                    setattr(sale, attr, fields[attr])
                    db.session.add(sale)
                    db.session.commit()
                return make_response(sale.to_dict(), 200)
            except ValueError:
                return make_response({"errors": ["validation errors"]}, 422)
            
    def delete(self, id):
        sale = Sales.query.filter_by(id=id).first()

        if sale == None:
            sale_dict = {"errors": ["user not found"]}

            return make_response(sale_dict, 404)
        else:
            db.session.delete(sale)
            db.session.commit()
            sales_dict = {}
            return make_response(sale.to_dict(), 200)

api.add_resource(Users, '/users')
api.add_resource(UserById, '/users/<int:id>')
api.add_resource(Login, '/login')
api.add_resource(CheckSession, '/check_session')
api.add_resource(Logout, '/logout')
# api.add_resource(UserSessions, '/timeframes')
# api.add_resource(UserSessionsById, '/timeframes/<int:id>')
api.add_resource(Timeframes, '/timeframes')
api.add_resource(TimeframesById, '/timeframes/<int:id>')
api.add_resource(Categories, '/categories')
api.add_resource(CategoriesById, '/categories/<int:id>')
api.add_resource(Products, '/products')
api.add_resource(ProductsById, '/products/<int:id>')
api.add_resource(Stores, '/stores')
api.add_resource(StoresById, '/stores/<int:id>')
api.add_resource(Sale, '/sale')
api.add_resource(SaleById, '/sale/<int:id>')


# Views go here! use either route!
# @app.errorhandler(404)
# def not_found(e):
#     return render_template("index.html")

# @app.route('/', defaults={'path': ''})
# @app.route('/<path:path>')
# def catch_all(path):
#     return render_template("index.html")

if __name__ == '__main__':
    app.run(port=5555, debug=True)

