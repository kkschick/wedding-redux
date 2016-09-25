from flask import Blueprint
from flask_restful import Api, Resource

wedding_api = Api(Blueprint('wedding_api', __name__))

@wedding_api.resource('/search/<name>')
class SearchForGuests(Resource):
    def get(self, name):
        """ Get list of guests with specified name. """ 

        from app import Guest
        guests = Guest.get_guests_by_name(name)

        return [{
            'id': guest.id,
            'first_name': guest.first_name,
            'last_name': guest.last_name,
            'email': guest.email
        } for guest in guests]

@wedding_api.resource('/guest/<int:guest_id>')
class Guest(Resource):
    def get(self, guest_id):
        """ Get guest with a specific id, plus their
            party information.
        """ 

        from app import Guest, Party
        guest = Guest.get_guest_by_id(guest_id)
        party = Party.get_party_by_id(guest.party_id)

        return [{
                'first_name': guest.first_name,
                'last_name': guest.last_name,
                'is_coming': guest.is_coming,
                'food_pref': guest.food_pref,
                'dietary_restrictions': guest.dietary_restrictions,
                'needs_parking': party.needs_parking,
                'num_parking_spots': party.num_parking_spots,
                'comments': guest.comments,
                'party_id': guest.party_id
            } for guest in party.guests]
