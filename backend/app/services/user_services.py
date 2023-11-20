from app import db
from app.model import User


class UserServices:
    @staticmethod
    def create_user(email, password, role=None):
        user = User(email=email, role=role)
        user.set_password(password)
        db.session.add(user)
        db.session.commit()
        return user
    
    @staticmethod
    def get_user(email):
        return User.query.filter_by(email=email).first()
    
    @staticmethod
    def delete_all_users():
        User.query.filter(User.role != "admin").delete()
        db.session.commit()

    @staticmethod
    def delete_user_by_email(email):
        User.query.filter_by(email=email).delete()
        db.session.commit()

    @staticmethod
    def update_user(oldEmail, newEmail, password):
        user = User.query.filter_by(email=oldEmail).first()
        user.email = newEmail
        user.set_password(password)
        db.session.commit()
        return user

