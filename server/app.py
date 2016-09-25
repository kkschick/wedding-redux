import os
from flask import Flask, send_file, Blueprint
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
db = SQLAlchemy(app)

def create_app():
    from api import wedding_api

    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'postgresql://localhost/wedding')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

    app.register_blueprint(wedding_api.blueprint, url_prefix='/api')

    db.init_app(app)
    return app

app = create_app()

class Party(db.Model):
    __tablename__ = "parties"

    id = db.Column(db.Integer, primary_key=True, index=True)
    name = db.Column(db.String(128))
    street_address = db.Column(db.String(128), nullable=True)
    city = db.Column(db.String(128), nullable=True)
    state = db.Column(db.String(64), nullable=True)
    zip_code = db.Column(db.String(64), nullable=True)
    country = db.Column(db.String(64), nullable=True)
    needs_parking = db.Column(db.Boolean, nullable=True)
    num_parking_spots = db.Column(db.Integer)
    guests = db.relationship('Guest', backref='parties')

    @classmethod
    def get_party_by_id(self, party_id):
        """ Get party object by its id. """

        return self.query.filter_by(id=party_id).first()


class Guest(db.Model):
    __tablename__ = "guests"

    id = db.Column(db.Integer, primary_key=True, index=True)
    party_id = db.Column(db.Integer, db.ForeignKey('parties.id'))
    first_name = db.Column(db.String(64))
    last_name = db.Column(db.String(64))
    email = db.Column(db.String(128), nullable=True)
    age = db.Column(db.Enum('ADULT', 'KID', name='age'))
    food_pref = db.Column(db.String(64))
    dietary_restrictions = db.Column(db.String(64))
    rsvp_received = db.Column(db.Date, nullable=True)
    is_coming_wedding = db.Column(db.Boolean, nullable=True)
    is_coming_brunch = db.Column(db.Boolean, nullable=True)
    is_coming_fri = db.Column(db.Boolean, nullable=True)
    is_coming_picnic = db.Column(db.Boolean, nullable=True)
    comments = db.Column(db.Text, nullable=True)

    @classmethod
    def get_guest_by_id(self, guest_id):
        """ Get guest object by its id. """

        return self.query.filter_by(id=guest_id).first()

    @classmethod
    def get_guests_by_name(self, name):
        """ Get all guests with specified last name. """

        first_name, last_name = name.split('&')
        return self.query.filter(self.first_name.like('%' + first_name.capitalize() + '%'))\
        				 .filter(self.last_name.like('%' + last_name.capitalize() + '%')).all()


with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
