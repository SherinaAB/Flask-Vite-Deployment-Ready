#!/usr/bin/env python3

# Standard library imports
from flask import Flask
# Remote library imports
from flask import request, render_template, make_response, jsonify, session
from flask_restful import Api, Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import db, User, UserSession, TimeframeModel, Category, Product, Store, Sales

@app.route('/')
def index():
    return '<h1>Phase 5 Project Server</h1>'

class Users(Resource):
    def get(self):
        users = [u for u in User.query.all()]
        return make_response(users, 200)
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
            if approved_user == 'true':
                new_user = User(first_name, last_name, email, username, password_hash, img)
                db.session.add(new_user)
                db.session.commit()
                session['user_id'] = new_user.id
                return make_response(new_user.to_dict(), 201)
        except ValueError:
            return make_response({'error': 'Must be authorized to create an account'}, 422)
            
class UserSessions(Resource):
    def get(self):
        user_sessions = [u for u in UserSession.query.all()]
        return make_response(user_sessions, 200)
    def post(self):
        fields = request.get_json()
        try:
            user_id = fields['user_id']
            login_time = fields['login_time']
            logout_time = fields['logout_time']
            if user_id:
                new_user_session = UserSession(user_id, login_time, logout_time)
                db.session.add(new_user_session)
                db.session.commit()
                # session['user_session_id'] = new_user_session.id
                return make_response(new_user_session.to_dict(), 201)
        except ValueError:
            return make_response({'error': 'Error at Session Post'}, 422)

class UserSessionsById(Resource):
    def get(self, id):
        user_session = UserSession.query.filter_by(id=id).first()
  
        if user_session == None:
            user_session_dict = {"errors": ["user not found"]}
            return make_response(user_session_dict, 404)
        else:
            return make_response(user_session.to_dict(), 200)
      
    def patch(self, id):
        user_session = UserSession.query.filter_by(id=id).first()

        if user_session == None:
            user_session_dict = {"errors": ["user not found"]}

            return make_response(user_session_dict, 404)
        else: 
            fields = request.get_json()
            try:
                for attr in fields:
                    setattr(user_session, attr, fields[attr])
                    db.session.add(user_session)
                    db.session.commit()
                return make_response(user_session.to_dict(), 200)
            except ValueError:
                return make_response({"errors": ["validation errors"]}, 422)
            
    def delete(self, id):
        user_session = UserSession.query.filter_by(id=id).first()

        if user_session == None:
            user_session_dict = {"errors": ["user not found"]}

            return make_response(user_session_dict, 404)
        else:
            db.session.delete(user_session)
            db.session.commit()
            user_session_dict = {}
            return make_response(user_session.to_dict(), 200)        

api.add_resource(Users, '/users')
api.add_resource(UserSessions, '/user_sessions')
api.add_resource(UserSessionsById, '/user_sessions/<int:id>')


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

