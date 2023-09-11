# from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, Table
# from sqlalchemy.orm import relationship, sessionmaker
# from sqlalchemy.ext.declarative import declarative_base

# from config import db, bcrypt

# Base = declarative_base()

# # Define the join table explicitly
# sales_category = Table(
#     'sales_category',
#     Base.metadata,
#     Column('sales_id', Integer, ForeignKey('sales.id')),
#     Column('category_id', Integer, ForeignKey('categories.id'))
# )

# sales_store = Table(
#     'sales_store',
#     Base.metadata,
#     Column('sales_id', Integer, ForeignKey('sales.id')),
#     Column('store_id', Integer, ForeignKey('stores.id'))
# )

# class Sales(Base):
#     __tablename__ = 'sales'

#     id = db.Column(db.Integer, primary_key=True)
#     sale_amount = db.Column(db.Float, nullable=False)
#     sale_units = db.Column(db.Integer, nullable=False)

#     categories = relationship('Category', secondary=sales_category, back_populates='sales')
#     stores = relationship('Store', secondary=sales_store, back_populates='sales')

# class Category(Base):
#     __tablename__ = 'categories'

#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(255), unique=True, nullable=False)

#     sales = relationship('Sales', secondary=sales_category, back_populates='categories')

# class store(Base):
#     __tablename__ = 'stores'

#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(255), unique=True, nullable=False)
#     number = db.Column(db.Integer)
#     address = db.Column(db.String(255), nullable=False)
#     city = db.Column(db.String(255), nullable=False)
#     state = db.Column(db.String(255), nullable=False)
#     zipcode = db.Column(db.String(255), nullable=False)
#     market = db.Column(db.String(255), nullable=False)

#     sales = relationship('Sales', secondary=sales_store, back_populates='stores')

# # # Create an SQLite database in memory for demonstration purposes
# # engine = create_engine('sqlite:///:memory:')
# # Base.metadata.create_all(engine)

# # # Create a session
# # Session = sessionmaker(bind=engine)
# # session = Session()

# # # Create instances of Book, category, and Genre
# # book1 = Book(title='Book 1')
# # book2 = Book(title='Book 2')
# # author1 = Author(name='Author 1')
# # author2 = Author(name='Author 2')
# # genre1 = Genre(name='Genre 1')
# # genre2 = Genre(name='Genre 2')

# # # Establish relationships
# # book1.authors.append(author1)
# # book1.authors.append(author2)
# # book1.genres.append(genre1)
# # book2.genres.append(genre2)

# # # Add instances to the session and commit
# # session.add_all([book1, book2, author1, author2, genre1, genre2])
# # session.commit()

# # # Query and print relationships
# # book = session.query(Book).filter_by(title='Book 1').first()
# # print(f"Book: {book.title}")
# # print(f"Authors: {[author.name for author in book.authors]}")
# # print(f"Genres: {[genre.name for genre in book.genres]}")

