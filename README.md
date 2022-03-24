> # Employee Vaccination Inventory
---

<div align="center">
    <a href="personal logo"><img src="https://github.com/ricardo1470/ricardo1470/blob/master/img/LogoVideo1.gif" align="middle" width="600" height="600"></a>
</div>

---

> ## Table of Contents

---

* [Introduction](#Introduction)
* [Description](#Description)
* [Requirements](#requirements)
* [Installation](#installation)
* [Compilation](#Compilation)
* [Usage](#usage)
* [Extra Information](#Extra-information)
  * [Install PostgreSQL](#Install-PostgreSQL)
  * [Version Postgresql](#Version-Postgresql)
  * [Start Postgres Shell](#Start-Postgres-Shell)
  * [Create User Postrgres](#create-user-Postrgres)
  * [Set Password Postrgres](#Set-Password-Postrgres)
  * [Solve Error](#Solve-Error)
  * [Basic Postgres Commands](#Basic-Postgres-Commands)
* [Test](#Test)
* [Contact](#Contact)
* [License](#license)

---

> # Description

---

this project uses the `EJS` template engine to render the information coming from the `backend` built with `NodeJS`, the database uses the `postgresql` engine.

by using template rendering with `EJS` you have the possibility to visualize all the information in an easy way, you can interact with the database in the same way by being able to see everything in a web page.

this project has different views: `administrators, users, information`.
in the `admins` view you can create *new users*, all the fields are required, you must have the complete information when creating a *new user*.

in the `users` view you will be able to update the relevant information about the vaccination status.

in the `information` view you can see the status of the users to have a quick control of the information.

---

> # Requirements

---

this project is built with; `nodejs 16.13.0`, `postgresql 12.9`, `EJS 3.1.6`, `Express 4.17.3`.
for more information about the versions of the extensions used see: `package.json`

---

> # Installation

---

to install this project you must clone this repository, using the command `git clone`
when you have the files on your computer go back to the project folder and run the command `npm i`, this will install all the dependencies that are described in the `package.json` file.

---

> # Compilation

---

this project does not require compilation, because it uses the `JavaScript` language.
to run the program you must be in the initial folder of the project and execute the command `npm run dev`

---

> # Usage

---

running the `npm run dev` command will launch the web server, go to `localhost:9000` to view the interface.

---

> # Extra Information

---

describes any extra items you may need to use this project

---

> # <a href="url"><img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" align="middle" width="100" height="60"></a> DataBase

---

## Install PostgreSQL

---

* `sudo apt update`
* `sudo apt install postgresql postgresql-contrib`
* `sudo service postgresql start [stop, status, reload, restart]`

---

## Version Postgresql

---

`sudo -u postgres psql -c "SELECT version();"`

---

## Start Postgres Shell

---

* `sudo -u postgres psql`
* `pass= root`

---

## Create User Postrgres

---

* `sudo -u postgres createuser -s $(whoami); createdb $(whoami)`

---

## Set Password Postrgres

---

* `ALTER USER postgres WITH PASSWORD 'root';`
* `ALTER USER ricardo1470 WITH PASSWORD 'root';`

---

## Solve Error:

---

* `relation "users" does not exist`

* `GRANT ALL PRIVILEGES ON DATABASE <database name> TO postgres;`
* `GRANT ALL PRIVILEGES ON DATABASE inventory TO postgres;`

---

## Basic Postgres Commands

---

* `\q`: Quit
* `\c` __database__: Connect to a database
* `\d` __table__: Show table definition including triggers
* `\dt` *.*: List tables from all schemas (if *.* is omitted will only show SEARCH_PATH ones)
* `\l`: List databases
* `\dn`: List schemas
* `\df`: List functions
* `\dv`: List views
* `\timing`: Show query timing stats

---

> ## Built with

---

this project was built in: `Nodejs`, `ejs`, `Express`, `PostgreSQL`

---

> ## Test

---

to run `unit tests` use the command `npm run test`

---

> ## Contact

---

<div align="center">
<h2>
    Contact with me<img src="https://github.com/ricardo1470/MEVN/blob/main/src/public/images/Handshake.gif"  alt="handshake" height="32px">
</h2>

| [<img src="https://github.com/ricardo1470/MEVN/blob/main/src/public/images/GitHub.png" alt="Github logo" width="34">](https://github.com/ricardo1470/README/blob/master/README.md) | [<img src="https://github.com/ricardo1470/MEVN/blob/main/src/public/images/email.png" alt="email logo" height="32">](mailto:ricardo.alfonso.camayo@gmail.com) | [<img src="https://github.com/ricardo1470/MEVN/blob/main/src/public/images/linkedin-icon.png" alt="Linkedin Logo" width="32">](https://www.linkedin.com/in/ricardo-alfonso-camayo/) | [<img src="https://github.com/ricardo1470/MEVN/blob/main/src/public/images/twitter.png" alt="Twitter Logo" width="30">](https://twitter.com/RICARDO1470) |
|:---:|:---:|:---:|:---:|

</div>

---

> ## License

---

*<a href="url"><img src="https://www.apsl.net/media/apslweb/images/postgresql-logo.width-900.png" align="middle" width="200" height="100"></a>`Employee Vaccination Inventory` is open source and therefore free to download and use without permission.*

<a href="url"><img src="https://static.startuptalky.com/2021/02/Holberton-School-startuptalky.png" align="middle" width="440" height="200"></a>

---
