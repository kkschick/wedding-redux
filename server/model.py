from app import db

class Party(db.Model):
    __tablename__ = "parties"

    id = db.Column(db.Integer, primary_key=True, index=True)
    name = db.Column(db.String(128))
    street_address = db.Column(db.String(128), nullable=True)
    city = db.Column(db.String(128), nullable=True)
    state = db.Column(db.String(64), nullable=True)
    zip_code = db.Column(db.String(64), nullable=True)
    country = db.Column(db.String(64), nullable=True)
    notify_early = db.Column(db.Boolean, nullable=True)
    std_sent = db.Column(db.Date, nullable=True)
    invitation_sent = db.Column(db.Date, nullable=True)
    gift_received = db.Column(db.Date, nullable=True)
    gift = db.Column(db.Text, nullable=True)
    thank_you_sent = db.Column(db.Date, nullable=True)
    guests = db.relationship('Guest', backref='parties')

class Guest(db.Model):
    __tablename__ = "guests"

    id = db.Column(db.Integer, primary_key=True, index=True)
    party_id = db.Column(db.Integer, db.ForeignKey('parties.id'))
    first_name = db.Column(db.String(64))
    last_name = db.Column(db.String(64))
    email = db.Column(db.String(128), nullable=True)
    age = db.Column(db.Enum('ADULT', 'KID', name='age'))
    tier = db.Column(db.Enum('A', 'B', 'C', name='tier'))
    category = db.Column(db.String(128))
    side = db.Column(db.Enum('Bride', 'Groom', 'Both', name='side'))
    dietary_pref = db.Column(db.String(64))
    rsvp_received = db.Column(db.Date, nullable=True)
    is_coming = db.Column(db.Boolean, nullable=True)
    comments = db.Column(db.Text, nullable=True)

    @classmethod
    def get_guest_by_id(self, guest_id):
        """ Get event object by its id. """

        return self.query.filter_by(id=guest_id).first()
