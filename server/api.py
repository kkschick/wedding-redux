from flask import Blueprint, jsonify
from flask_restful import Api, Resource

wedding_api = Api(Blueprint('wedding_api', __name__))

@wedding_api.resource('/guests')
class Guests(Resource):
    @staticmethod
    def get():
        """ Get list of all guests. 
        """
        from model import Guest

        guest = Guest.get_guest_by_id(1)

        return jsonify({
            'first_name': guest.first_name,
            'last_name': guest.last_name,
            'email': guest.email,
            'age': guest.age,
            'tier': guest.tier,
            'category': guest.category,
            'side': guest.side,
            'dietary_pref': guest.dietary_pref,
            'rsvp_received': guest.rsvp_received,
            'is_coming': guest.is_coming,
            'party_name': guest.party
        })
