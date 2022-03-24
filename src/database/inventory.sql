-- create database
DROP DATABASE IF EXISTS inventory;
CREATE DATABASE inventory WITH OWNER postgres;

--show databases
\l

-- connect or use the database
\c inventory

-- create table admins
DROP table IF EXISTS admins;
CREATE TABLE admins (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    cedula INTEGER NOT NULL UNIQUE,
    nombre TEXT NOT NULL,
    apellido TEXT NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE);

-- list tables
\dt

-- describe table
\d admins

-- insert data
INSERT INTO admins (cedula, nombre, apellido, email) VALUES (123456709, 'Juan', 'Perez', 'test@test.com');
INSERT INTO admins (cedula, nombre, apellido, email) VALUES (543456543, 'Sandra', 'Perez', 'test2@test.com');

-- view table
SELECT * FROM admins;

-- create table users
DROP table IF EXISTS users;
CREATE TABLE users (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    fecha_de_nacimiento DATE NOT NULL,
    dirección_de_domicilio VARCHAR(100) NOT NULL,
    teléfono_móvil VARCHAR(50) NOT NULL UNIQUE,
    estado_de_vacunación BOOLEAN NOT NULL);

-- list tables
\dt

-- describe table
\d users

INSERT INTO users (fecha_de_nacimiento, dirección_de_domicilio, teléfono_móvil, estado_de_vacunación) VALUES ('2020/03/23', '742 de Evergreen Terrace', '525-344-7030', 'TRUE');
INSERT INTO users (fecha_de_nacimiento, dirección_de_domicilio, teléfono_móvil, estado_de_vacunación) VALUES ('2020/03/23', '123 fake street', '(518) 755-3198', 'FALSE');
INSERT INTO users (fecha_de_nacimiento, dirección_de_domicilio, teléfono_móvil, estado_de_vacunación) VALUES ('2020/03/20', '742 de Evergreen Terrace', '555-344-7030', 'FALSE');
-- view table
SELECT * FROM users;

-- create table vaccine
DROP table IF EXISTS vaccine;
CREATE TABLE vaccine (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    tipo_de_vacuna TEXT NOT NULL,
    fecha_de_vacunación DATE NOT NULL,
    número_de_dosis INTEGER NOT NULL);

-- list tables
\dt

-- describe table
\d vaccine

INSERT INTO vaccine (tipo_de_vacuna, fecha_de_vacunación, número_de_dosis) VALUES ('Sputnik', '2020/03/23', '2'), ('AstraZeneca', '2020/02/02', '2'), ('Pfizer', '2020/03/23', '2'), ('Jhonson&Jhonson', '2020/02/02', '3');

-- view table
SELECT * FROM vaccine;
