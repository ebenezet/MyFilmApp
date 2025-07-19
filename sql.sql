CREATE TABLE films (
  id INT PRIMARY KEY generated ALWAYS AS IDENTITY,
  title VARCHAR (255) NOT NULL,
  director TEXT NOT NULL,
  year TEXT,
  cover TEXT
)

INSERT INTO films (title, director, year, cover) VALUES 
('E.T.', 'Steven Spielberg', 1982, 'https://m.media-amazon.com/images/I/7190yeHaHeL._UF1000,1000_QL80_.jpg'),
('The Legend Of 1900', 'Giuseppe Tornatore', 1999, 'https://m.media-amazon.com/images/I/71F5c+k4TxL._UF1000,1000_QL80_.jpg'),
('Life Is Beautiful', 'Roberto Benigni', 1997, 'https://m.media-amazon.com/images/I/41NZgF6jOeL._UF1000,1000_QL80_.jpg'),
('Do The Right Thing', 'Spike Lee', 1987, 'https://m.media-amazon.com/images/I/71uBbKOEJ0L._UF1000,1000_QL80_.jpg'),
('The Last Of The Mohicans', 'Michael Mann', 1992, 'https://m.media-amazon.com/images/I/6128NuOOZpL._UF1000,1000_QL80_.jpg'),
('Harry Potter And The Prisoner Of Azkaban', 'Alfonso Cuarón', 2004, 'https://i.ebayimg.com/images/g/XF8AAOSwiW1n75q3/s-l1200.jpg'),
('Men In Black', 'Barry Sonnenfeld,', 1997, 'https://images.genius.com/8278d19bf16a2dae25879da8a2af7081.1000x1000x1.png'),
('Notting Hill', 'Roger Michell', 1999, 'https://lastfm.freetls.fastly.net/i/u/ar0/f8fb396a72484c8accc4eb0f116497b9.jpg'),
('Les Choristes', 'Christophe Barratier,', 2004, 'https://images.genius.com/c67f06f17a1e19858bf4d3fda8ee9c34.1000x1000x1.png'),
('Intouchables', 'Éric Toledano and Olivier Nakache', 2011, 'https://m.media-amazon.com/images/I/81d+tkoB+UL._UF1000,1000_QL80_.jpg'),
('Les Miserables', 'Tom Hooper' , 2012, 'https://images.genius.com/8728c773e2fe88e9f2217e572ab560d0.1000x1000x1.jpg')






CREATE TABLE reviews (
  id INT PRIMARY KEY generated ALWAYS AS IDENTITY,
  name VARCHAR (255) NOT NULL,
  comment TEXT,
  film_id INTEGER
)

INSERT INTO reviews (name, comment, film_id) VALUES 
('Max Fox', 'My favourite film of all time', 1),
('Julie Sissoko', 'I have seen this film four times: simply brilliant!', 9),
('Konate Grace', 'An absolute masterpiece', 2),
('John Bishop', 'A classic that should be seen by anyone', 5),
('Quinn Mary', 'I recommended this album to my niece. She is now an actress', 7),
('Jianli Xiao', 'The first film I saw in the cinema', 10),
('Souba Mohammed', 'I love this Spikes Lee film', 4),
('Ravi Shankar', 'An awesome film!', 2),
('Kodjo Bless', 'This film takes me to places...', 1),
('Juan Gonzalez', 'A gem in the film industry', 6),
('Shams Hafiz', 'My family fell in love with this war film', 3),
('John Campbell', 'Julia Roberts was magnificient in this film!', 8),
('Carolina Guiseppe', 'This movie reminds me of my grandmother!', 11)



CREATE TABLE IF NOT EXISTS films_reviews (
  film_id INTEGER REFERENCES films(id),
  review_id INTEGER REFERENCES reviews(id),
  PRIMARY KEY (film_id, review_id)
)

INSERT INTO films_reviews(film_id, review_id) VALUES(1, 1);
INSERT INTO films_reviews(film_id, review_id) VALUES(2, 3);
INSERT INTO films_reviews(film_id, review_id) VALUES(2, 8);
INSERT INTO films_reviews(film_id, review_id) VALUES(3, 11);
INSERT INTO films_reviews(film_id, review_id) VALUES(4, 7);
INSERT INTO films_reviews(film_id, review_id) VALUES(5, 4);
INSERT INTO films_reviews(film_id, review_id) VALUES(6, 10);
INSERT INTO films_reviews(film_id, review_id) VALUES(7, 5);
INSERT INTO films_reviews(film_id, review_id) VALUES(8, 12);
INSERT INTO films_reviews(film_id, review_id) VALUES(9, 2);
INSERT INTO films_reviews(film_id, review_id) VALUES(10, 6);
INSERT INTO films_reviews(film_id, review_id) VALUES(11, 3);


SELECT reviews.comment,  films.title AS thefilms
FROM reviews
JOIN films ON reviews.film_id = films.id

SELECT reviews.name, films.title AS myfilms
FROM reviews
JOIN films ON reviews.film_id = films.id
WHERE reviews.id = 7 

SELECT films.title,  reviews.comment AS reviewers
FROM films
JOIN reviews ON reviews.film_id = films.id

SELECT films.title, reviews.comment
FROM films INNER JOIN reviews
ON films.id = reviews.film_id

SELECT films.title, reviews.comment
FROM films LEFT JOIN reviews
ON films.id = reviews.film_id

SELECT  films.title, (
  SELECT ARRAY_AGG(comment)   FROM reviews
  WHERE reviews.film_id = films.id
)       as reviews
FROM films 