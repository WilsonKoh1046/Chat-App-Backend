-- superuser: to use gen_random_uuid()
CREATE EXTENSION pgcrypto

CREATE TABLE users
(
    id uuid NOT NULL,
    name character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    PRIMARY KEY (id)
);