from flask import request, jsonify, g
from functools import wraps
import jwt
from app import app
from app.services import UserServices

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'Authorization' in request.headers:
            token = request.headers['Authorization'].split(' ')[1]

        if not token:
            return jsonify({'message': 'Token is missing !!'}), 401
        
        try:
            data = jwt.decode(token, str(app.config['SECRET_KEY']), algorithms=["HS256"])
            g.email = data['email']
            
        except Exception as e:
            print(e)
            return jsonify({
                'message': 'Token is invalid !!'
            }), 401
        return f(*args, **kwargs)
    return decorated


def role_required(role):

    def decorator(f):

        @wraps(f)
        def wrappers(*args, **kwargs):
            user = UserServices.get_user(g.email)

            if user.role != role:
                return jsonify({
                    'message': 'You are not authorized to access this resource'
                }), 403
            
            return f(*args, **kwargs)
        
        return wrappers
    
    return decorator

