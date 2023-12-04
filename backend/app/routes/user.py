import jwt
import datetime

from app import app
from flask import jsonify, Blueprint, request, g
from app.middlewares.auth import token_required, role_required

from app.services import UserServices
from app.services import NoteServices

user = Blueprint('user', __name__, url_prefix='/user')


@user.route('/getUserByEmail', methods=['GET'])
@token_required
def get_user():
    user = UserServices.get_user(g.email)
    return jsonify({
        "user": user.to_dict()
    }), 200


@user.route('/deleteUser', methods=['DELETE'])
@token_required
def delete_user():
    user = UserServices.get_user(g.email)
    UserServices.delete_user_by_email(g.email)
    NoteServices.delete_notes_by_user_id(user.id)
    return jsonify({'message': 'User deleted successfully'}), 200


@user.route('/all', methods=['DELETE'])
@token_required
@role_required('admin')
def delete_all_users():
    UserServices.delete_all_users()
    return jsonify({'message': 'All users deleted successfully'}), 200


@user.route('/updateUser', methods=['PUT'])
@token_required
def update_user():
    data = request.get_json()

    if "email" not in data or "pin" not in data:
        return jsonify({'message': 'Invalid credentials'}), 422


    user = UserServices.update_user(data["oldEmail"], data['email'], data['pin'])

    return jsonify({
        "message": "User updated successfully",
        "user": user.to_dict()
    }), 200


@user.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    if data['email'] == '' or data['pin'] == '':
        return jsonify({'message': 'Invalid credentials'}), 422

    user = UserServices.get_user(data['email'])

    if user is None:
        return jsonify({'message': 'Invalid credentials'}), 422

    if not user.check_password(data['pin']):
        return jsonify({'message': 'Invalid credentials'}), 422

    token = jwt.encode({
        'email': data['email'],
        'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=5)
    }, str(app.config['SECRET_KEY']))

    return jsonify({'token': token})


@user.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    if "email" not in data or "pin" not in data:
        return jsonify({'message': 'Invalid credentials'}), 422

    if data['email'] == '' or data['pin'] == '':
        return jsonify({'message': 'Invalid credentials'}), 422

    user = UserServices.get_user(data['email'])

    if user is not None:
        return jsonify({'message': 'User already exists'}), 422

    if data["email"] == "admin@admin.com":
        user = UserServices.create_user(
            data['email'],
            data['pin'],
            'admin'
        )
        return jsonify({"message": "Admin created"}), 200

    user = UserServices.create_user(
        data['email'],
        data['pin']
    )

    token = jwt.encode({
        'email': data['email'],
        'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)
    }, str(app.config['SECRET_KEY']))

    return jsonify({
        "message": "User create successfully",
        "token": token
    }), 200
