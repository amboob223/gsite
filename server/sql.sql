ALTER TABLE readings
ADD COLUMN money BOOLEAN NOT NULL DEFAULT FALSE,
ADD COLUMN other BOOLEAN NOT NULL DEFAULT FALSE,
ADD COLUMN love BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE readings ADD COLUMN email VARCHAR(255);




ALTER TABLE readings ALTER COLUMN money TYPE BOOLEAN USING money::boolean;
ALTER TABLE readings ALTER COLUMN other TYPE BOOLEAN USING other::boolean;

ALTER TABLE readings ALTER COLUMN love TYPE BOOLEAN USING love::boolean;



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

SELECT schema_name
FROM information_schema.schemata;


SELECT reading
FROM information_schema.tables
WHERE table_schema = 'schema_name';