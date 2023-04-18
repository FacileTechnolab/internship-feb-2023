/*use sakila
select*
from country
limit 6,2*/
-- where country  not in ('canada','cameroon','chile');
-- where country='india' or country='pakistan' or country='austraia'
-- select  payment.staff_id,payment.rental_id,amount
--  from payment
--   inner join customer
--  on payment.customer_id=customer.customer_id
-- select *
-- from sakila.rental  r
-- join  staff s 
-- on  r.last_update=s.last_update
-- use world
-- from countrylanguage cl
-- join countrylanguage  m
-- on cl.countrycode=m.percentag
-- use sakila
-- select * 
-- from actor a
-- join city c
--   on a.actor_id = c.city_id
-- join  country co
--  on a.actor_id=co.country_id
-- use sakila 
-- select city.city, country.country
-- from city
-- join country on city.city_id=country.country_id
use sakila
select c.city_id,c.city,co.country
from city c
 right join country co
on c.country_id=co.country_id
-- select * from city  cross join country 
select *
from city c,country co
where c.country_id=co.country_id;
select 
   c.city_id,
   c.city,
   c.country_id,
   co.country
from city c
left   outer join country co
 on c.country_id=co.country_id
 order by c.country_id
 
 
 
 use sakila;
use employee;
create table employee1(
emp_id integer,
dep_id integer,
emp_name varchar(10)
);
insert into employee1 value (1,1,'shdfg');
insert into employee1 value (2,2,'shdg');
insert into employee1 value (3,2,'hdfg');
insert into employee1 value (4,3,'shdf');
insert into employee1 value (5,4,'sfxfv');
select * from employee1;

use employee;
create table employee2(
dep_id integer,
dep_name varchar(10)
);
insert into employee2 value (1,'zxvzxv');
insert into employee2 value (2,'Fszcf');
insert into employee2 value (3,'ADZd');
insert into employee2 value (4,'ADZDCCd');
insert into employee2 value (5,'FZCxfzf');
insert into employee2 value (6,'AZDCCd');
insert into employee2 value (7,'ZCxfzf');
select * from employee2;


select * from employee1
 natural join employee2;

select * from employee1
union 
select * from  manager;

create table emp3 as  select * from manager
 
update manager
set emp_name='shiva'
where emp_id=5;

use sakila
update actor
set last_update='2023-03-07 17:34:46'
where first_name =(select actor_id
				  from actor
				  where  last_update in (2023-03-07 17:34:46, 'hghbg'))
                  
update employee1 
set emp_name='shdfg'
where emp-id=(select emp_id
			  from employee1
              emp_id in (1,2));
SELECT * FROM employee.employee1;	
delete from employee.employee1
where emp_id=1

-- aggregate function 
use sakila
select 
   max(first_name) as highest,
   min(first_name) as lowest,
   avg(first_name) as average,
   sum(first_name) as sum,
   count(first_name) as count
   from staff
   
   -- group by 
   use sakila
select 
     country_id,
   count(country_id)
from city
group by country_id
having  count(country_id) >=60

select 
     country_id,
   count(country_id)
from city
group by country_id with rollup

-- sub query
select *
from payment
 where amount <(
 select amount 
 from payment
 where payment_id=3
 )
 
 -- in operator 
 select *from customer
 where customer_id not in (
              select   distinct customer_id
              from payment
)

select *
from customer
left join payment using(customer_id)
where  payment_id is null
   
select *
from rental 
where rental_id >(
      select max(rental_id)
      from payment
      where customer_id=3
)

select *
from  payment
where rental_id >any(
            select rental_id
            from rental
            where  customer_id=4
)

-- any keyword
use sakila
select *
from rental
where rental_id = any(
         select rental_id
         from rental
         group by rental_id
         having count(*)>= 3
         )
         
select*
 from customer c
 where exists(
    select customer_id
    from payment
    where customer_id=c.customer_id
    )
    
select *
from customer
where customer_id in(
     select distinct customer_id
     from payment
     )
     

select *from city 
where exists (select country_id from  country  where country in ('b tech'))

-- numeric function 
select truncate(5.7345,2)

-- string function 
select length("shivangi")
select upper("shivangi")
select lower("SHIVANGI")

select ltrim("        shivangi")
select trim("     shivangi        ")
select left("shivangi",5)
select right("shivangi",5)
select substring("shivangi",3,5)
select locate('g',"shivangi")
select replace("shivangi",'shivangi','hiren')
select concat("shivangi",' shah')

-- date and time function 
select now() , curdate(),curtime()
select year(now())
select month(now())
select day(now())
select hour(now())
select minute(now())
select dayname(now())
select monthname(now())
select yearname(now())
select extract(day from now())
select extract(month from now())
select extract(year from now())
select year(now())

-- formating date and time
select date_format(now(),'%y')
select date_format(now(),'%Y')
select date_format(now(),'%m %Y')
select date_format(now(),'%M  %Y')
select date_format(now(),'%M %d %Y')
select date_format(now(),'%M %D %Y')
select date_format(now(),'%M %D %Y %T %p %U')
select date_format(now(),'%H :%i: %s')

-- calculating dates and times

select date_add(now(),interval -1 year)
select date_add(now(),interval 1 year)
select date_sub(now(),interval 1 year)
select datediff('2023-01-05','2023-01-01')
select time_to_sec('9:00')- time_to_sec('9:02')

-- if null function 
use sakila

select 
     picture,
      ifnull(password,'not assigned') as shipper
from staff

SELECT ISNULL(NULL);

select
  picture,
      coalesce(password,comments,'not assigned') as shipper
from staff

-- if condition in sql 
select 
    store_id,
    if(
        customer_id <=60,
        'active',
        'not'
        )as  shipper
from customer

-- case operators
select 
   store_id,
   first_name,
   last_name,
   case
     when customer_id< 50 then 'active'
     when customer_id<200 then 'last'
     when customer_id<300 then 'first'
     else 'default'
   end as category
from customer

-- creating views 
use employee
create  or replace view emp_name as 
select
  e.emp_id,
  e.emp_name,
  sum(dep_id) as total 
from employee1 e
join emp3 em using(dep_id)
group by emp_id , emp_name

select *
 from emp_name
 order by emp_id desc
 
 -- drop view 
 drop view emp_name
 
 create or replace view dep_id as
 select 
    emp_id,

    emp_name,
	emp_id-dep_id as balance
 from employee1
 where (emp_id-dep_id)>0

-- option check view 

 create view dep7 as
 select *
from manager
where dep_id=2;

alter view dep7 AS 
     select * from manager
     where dep_id=2;
     with check option;  

 select * from dep7;
 insert into  dep7 value(6,3,'shivangi');
 
 CREATE VIEW storeage 
AS
  select * from manager
where imp_id <5
  WITH CHECK OPTION;
  
  -- STORE PROCEDURE 
  
DELIMITER $$
CREATE PROCEDURE GET_EMPLOYEE ()
BEGIN 
	SELECT * FROM EMPLOYEE1;
END$$

 -- in operator
 DELIMITER $$
CREATE  PROCEDURE `GET_EMPLOYEE`(in emp_id int)
BEGIN 
	SELECT * FROM EMPLOYEE1 WHERE employee1.emp_id=emp_id;
END$$

CALL GET_EMPLOYEE(4);

-- out operator
DELIMITER $$
CREATE PROCEDURE `get_film`(out records int)
BEGIN
 select count(*) into records from film where film.rental_duration=3;
END$$

call get_film(@records);
select @record as totalrecords;

-- inout operator
DELIMITER $$
CREATE PROCEDURE `get_payment`(inout records int ,in dep_id int)
BEGIN
 select count(*)into records from manager where manager.dep_id=2;
END$$

 call get_payment(@record, 2);
select @record as totalrecords;

-- drop store procedure
drop procedure new_employee;

-- parameter in store procedure 
use employee
drop procedure if exists get_employee1_by_state;
DELIMITER $$
CREATE PROCEDURE GET_EMPLOYEE1_by_state 
(
emp_name varchar(20)
)
BEGIN 
	SELECT * FROM EMPLOYEE1 where employee1.emp_name=emp_name;
END$$
 
 call get_employee1_by_state('hdfg');
 
 -- triggers 
 
 create database department;
use department;
show tables;

# before insert trigger

create table customers
( c_id int , age int, name varchar(30));

delimiter //
create trigger age_verify
before insert on customers 
for each row
if new.age<0 then set new.age=0;
end if; //

insert into customers 
values(101,27,"james"),
(102,45,"hiren"),
(103,42,"jyoti"),
(104,54,"jitendra"),
(105,-45,"jitendra");

select * from customers;

# after insert trigger

create table customer1(
id int auto_increment primary key,
name varchar(20) not null,
email varchar(30), birthdate date);

create table message (
id int auto_increment,
messageid int,
message varchar(300) not null,
primary key (id,messageid));


delimiter //
create trigger
check_null_dob
after insert 
on customer1
for each row
begin
if new.birthdate is null then 
insert into message(messageid,message)
values (new.id,concat('hi',new.name, ' please update your date of birth.'));
end if;
end //

insert into customer1(name, email, birthdate)
values('nancy','nancy@abc.com',null),
("ronald","ronal@xyz.com","1998-11-16"),
("charis","charis@sss.com","1992-2-21"),
("alices","alice@www.com",null);
select * from message;

-- triggers
use employee
delimiter //
create trigger payment_after_insert
 after insert on emp_name
 for each row
begin 
   update employee2
   set  emp_id=emp_id+new.dep_id
   where emp_id=new.emp_id;
   end //
   
   -- trigger
   
   create table passanger(
   name varchar(20),
   id int(20),
   address varchar(20),
   charges int(30),
   primary key(id));
   
   select * from passanger;
   
insert into passanger values('gaurav',44,'bang',5000);
insert into passanger values('ashtha',447,'ahm',3000);
insert into passanger values('value',445,'ahm',2000);
insert into passanger values('krishika',444,'bang',6000);
insert into passanger values('dipali',442,'bang',1000);
insert into passanger values('hiren',443,'raipur',8000);

create trigger cheable
before insert 
on passanger
for each row 
set new.charges=new.charges-2000;

insert into passanger values('atheerth',497,'ahm',10000);
 select * from passanger;
 
 create table student_college(
 name varchar(45),
 id int(8),
 age int(24),
 primary key(id));
 
 select * from student_college;
 
 insert into value 
 create table  college_audit(
 id int(56),
 audit_description varchar(200),
 primary key(id));
 select * from college_audit
 
 create trigger  afterinsertcoll
 after insert on student_college
 for each row
 insert into college_audit values(1,concat('a new row is insert',date_format(now(),'%d %m %y %h:%i:%s %p')));
 
 insert into student_college values('manish',250,23);
 select *from student_college;
 select *from college_audit;