from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

app = Flask(__name__)


app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)

CORS(app)

from app import model
from app.routes import note, user

app.register_blueprint(note)
app.register_blueprint(user)