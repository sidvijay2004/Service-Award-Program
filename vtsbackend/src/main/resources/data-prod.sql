CREATE TABLE student(
   id serial PRIMARY KEY,
   first_name VARCHAR (50) NOT NULL,
   last_name VARCHAR (50) NOT NULL,
   student_num VARCHAR (50) NOT NULL,
   email VARCHAR (355) UNIQUE NOT NULL,
   password VARCHAR (50) NOT NULL,
   age integer NOT NULL,
   grade integer NOT NULL,
   created_on TIMESTAMP NOT NULL,
   last_login TIMESTAMP
);

CREATE TABLE student_log(
   id serial PRIMARY KEY,
   student_id integer NOT NULL,
   activity_date DATE NOT NULL,
   description VARCHAR (500) NOT NULL,
   logged_hours integer NOT NULL,
   category VARCHAR (500) NOT NULL
);