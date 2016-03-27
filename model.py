from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy import Column, Integer, String, Date, Text, Boolean, Enum
from sqlalchemy.orm import sessionmaker, scoped_session
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship, backref
import config

engine = create_engine(config.DB_URI, echo=False)
session = scoped_session(sessionmaker(bind=engine, autocommit=False, autoflush=False))

Base = declarative_base()
Base.query = session.query_property()


class Party(Base):
    __tablename__ = "parties"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(128))
    street_address = Column(String(128), nullable=True)
    city = Column(String(128), nullable=True)
    state = Column(String(64), nullable=True)
    zip_code = Column(String(64), nullable=True)
    country = Column(String(64), nullable=True)
    notify_early = Column(Boolean, nullable=True)
    std_sent = Column(Date, nullable=True)
    invitation_sent = Column(Date, nullable=True)
    gift_received = Column(Date, nullable=True)
    gift = Column(Text, nullable=True)
    thank_you_sent = Column(Date, nullable=True)

class Guest(Base):
    __tablename__ = "guests"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(64))
    last_name = Column(String(64))
    email = Column(String(128), nullable=True)
    age = Column(Enum('ADULT', 'KID', name='age'))
    tier = Column(Enum('A', 'B', 'C', name='tier'))
    category = Column(String(128))
    side = Column(Enum('Bride', 'Groom', 'Both', name='side'))
    dietary_pref = Column(String(64))
    rsvp_received = Column(Date, nullable=True)
    is_coming = Column(Boolean, nullable=True)
    comments = Column(Text, nullable=True)
    party = relationship("Party", backref=backref("guests", order_by=id))

def create_tables():
    Base.metadata.create_all(engine)

def main():
    create_tables()

if __name__ == "__main__":
    main()
