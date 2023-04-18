-- update trigger
create table workers(
id int(10),
name varchar(10),
income int(10),
primary key(id));

insert into workers values(1,'manish',10000);

create table emp_audit1
( id int(10),
audit_description varchar(100),
primary key (id));
select *from emp_audit1;

select *from workers;
-- before 
delimiter //
create trigger bref_upd
before update
on workers
for each row
begin 
if new.income <12000 then 
set new.income=12000;
end if;
end//

update workers set income=11000 where id=1;
-- after

create trigger after_up
after update
on workers
for each row
insert into emp_audit1 values(1, concat("updated row at ",date_format(now(),'%d %m %y %h:%i:%s %p')));

insert into workers values(3,'ashish',20000);
select *from workers;
update workers set income=25000 where id=3;
select *from emp_audit1;

-- show triggers
show triggers like 'bref%'

-- drop triggers
drop trigger if exists after_up;

-- show vbariables

show variables like 'event%'

-- event

create event yearly_delete
on schedule 
   --  at '2019-05-01'
every 1 year starts '2019-01-01' ends '2029-01-01'
do begin
      delete  from payment_audit
      where action_date<now()- interval 1 year
     --  datesub(now(),interval 1 year)
     create table messages(
     id int primary key auto_increment,
     message varchar(343) not null,
     created_at datetime not null);
     
     create event if not exists test_event_01
     on schedule at current_timestamp
     do
      insert into messages( message,created_at)
      values('test mysql event 1',now());
      select *from messages;
      
delimiter //
create event monthly_delete_invoices
on schedule every 1 month starts '2022-10-10' ends '2022-12-10'
do begin
  delete from employee 
  where emp_id <4;
end //
show events;
 