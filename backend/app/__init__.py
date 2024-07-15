from flask import Flask
from .routes import main as main_blueprint
from .mal import api_bp as api_bp
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)

    app.register_blueprint(main_blueprint)
    app.register_blueprint(api_bp)

    return app
