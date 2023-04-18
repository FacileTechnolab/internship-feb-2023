use student;
select * from main;
create table main
(
	id int,
    salary int
);

 insert into main values
 (1 , 200),
 (2 , 500);

create table backup
(
	id int,
    salary int
);
select * from backup;

delete from main where id=1;

show triggers like 'main%'; 
show events like 'main%';

