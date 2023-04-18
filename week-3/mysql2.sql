create table users(
id int(11),
name varchar(50),
email varchar(50),
phone varchar(34),
status int(11),
primary key (id));
delete from users where name='sanjay';
select *from users;
insert into   users values(3, 'niravkumar','nirav@gmail.com',4534567892,3)
(2, 'sanjay kumar','sanjay_123222@gmail.com',9834567892,2),
(3, 'niravkumar','nirav@gmail.com',4534567892,3),
(4, 'jay','jay@gmail.com',1234537892,4),
(5, 'kumar','kumar@gmail.com',2134567892,4);

delete from users where id=2;
delete from users_log where status=2;
create table users_log(
id int(11),
name varchar(50),
email varchar(50),
phone varchar(34),
status int(11)
);
select *from users_log;
drop table users_log

-- before delete triggers
delimiter //
create trigger before_users_delete
before delete
on users for each row
begin
 insert into users_log(name,email,phone,status)values (old.name,old.email,old.phone,old.status);
end // 

-- after insert triggers

create table new_users_id(
id int(11),
new_user int(11)
);
select *from new_users_id
drop table new_users_id
delimiter //
create trigger after_users_insert
after insert
on users for each row
begin
  insert into new_users_id (new_user)values (new.id);
end //
drop trigger after_users_insert

insert into users(name,email,phone,status)values('jaay','ajay@gmail.com','1234567890',1);

-- before update 

delimiter //
create trigger before_users_update
before update
on users 
for each row
begin
  insert into users_log(name,email,phone,status)values(old.name,old.email,old.phone,old.status);
  
end //

UPDATE users

-- transactions 

  
START TRANSACTION;
select @emp_id:=max(emp_id)+1 from employee1;

insert into employee1(emp_id,dep_id,emp_name)
values(@emp_id,2,'hin');
insert into manager(emp_id,dep_id,emp_name)
values(@emp_id,3,'hr');
commit;
set autocommit=1;
set autocommit=0;
start transaction;
delete from employee1;
rollback;
select * from employee1;

update employee1 set emp_name='shiva' where emp_id=2
SET name = 'nirav kumar', email= 'nirav123@gmail.com'
WHERE ID = 3;

select *from users_log

select * from employee1;

begin transaction
update passanger set passanger.name = 'shivgi' where id = 442;
commit;