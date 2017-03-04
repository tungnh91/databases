CREATE DATABASE chat;

USE chat;


-- need to add auto increment to id keys
CREATE TABLE messages (
  id int(4) not null auto_increment primary key, 
  messageBody varchar(140),
  users_Id int(4),
  rooms_Id int(4)
);

CREATE TABLE rooms (
  id int(4) primary key,
  room varchar(50)
);

CREATE TABLE users (
  id 
  int(4) not null auto_increment primary key,
  user varchar(50)
);

-- foreign key messages.users_Id references rooms.id;

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

