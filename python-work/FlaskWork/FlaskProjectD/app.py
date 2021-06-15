from flask import (Flask, request, url_for, render_template,
make_response)
from flask_cors import CORS
from flask_restful import Resource, Api
from flask_jwt_extended import (JWTManager, create_access_token, get_jwt_identity, 
create_refresh_token, jwt_required, jwt_refresh_token_required)
from db import db
from werkzeug.security import safe_str_cmp
import os
from datetime import timedelta
from models import Exotic

#Initialize everything
app = Flask(__name__)
api = Api(app)
app.secret_key = "EbubeAsoYoungCloudPro2021!!"
jwt = JWTManager(app)
# setup CORS
CORS(app)
db_passwd = os.environ["EXOTIC_USER_PASS"]
# Configurations and connecting to databases
app.config["JWT_EXPIRATION_DELTA"] = timedelta(seconds=1200)
app.config["SQLALCHEMY_DATABASE_URI"] = f"mysql://exoticUser:{db_passwd}@localhost:33606/Cars"
#turns off the flask SQLAlchemy tracker to save resources
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

# This is the header that we will use for rendering HTML
the_header = {'Content Type': 'text/html'}

if __name__ == "__main__":
    app.run()