CREATE DATABASE gsite;

CREATE TABLE readings(
    id SERIAL PRIMARY KEY,
    first VARCHAR(255),
    last VARCHAR(255),
    phone VARCHAR(255),
    email VARCHAR (255),
    birthdate VARCHAR (255),
    target VARCHAR(255)
);

ALTER TABLE readings
ADD COLUMN money BOOLEAN NOT NULL DEFAULT FALSE
ADD COLUMN other BOOLEAN NOT NULL DEFAULT FALSE
ADD COLUMN love BOOLEAN NOT NULL DEFAULT FALSE;


CREATE SEQUENCE readings_id_seq;

ALTER TABLE readings 
ALTER COLUMN id SET DEFAULT nextval('readings_id_seq');

ALTER TABLE readings  
ADD PRIMARY KEY (id);

