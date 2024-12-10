from app import create_app
from flask import Flask, send_from_directory
import os

def create_app():
    app = Flask(__name__, static_folder='build/static', template_folder='build')
    
    @app.route('/')
    def index():
        return send_from_directory(os.path.join(app.root_path, 'build'), 'index.html')

    @app.route('/<path:path>')
    def catch_all(path):
        return send_from_directory(os.path.join(app.root_path, 'build'), 'index.html')

    return app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)