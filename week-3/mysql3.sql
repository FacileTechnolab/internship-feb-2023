create database if not exists student
use student
drop table if exists student_details
create table if not exists student_details(
s_id int primary key auto_increment,
first_name varchar(45) not null,
points int not null default 0,
email varchar(33)not null unique);
select *from student_details
alter table student_details
add last_name varchar(78) not null after first_name
create fulltext index idx_first_name on customer(first_name,last_name);
select * from customer where match(first_name,last_name) against('%m');

use sakila
show indexes in country 


-- users
SELECT * FROM sakila.city;
explain  select country_id from  city
 where country_id=44 and city_id >400;
 select * from mysql.user;
 create user bob@codewithmosh.com identified  by '1234';
 drop user  bob@codewithmosh.com
 use sakila
 explain
   select customer_id from customer
    where store_id=1
    union 
    select customer_id from customer
    where active= 1;