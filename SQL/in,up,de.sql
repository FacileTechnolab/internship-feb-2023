-- inserting a row
insert into studentmarks
(
	stu_id, name, subject, marks
)
values
(
	5 , 'Suraj' , 'Math' , 56
);

-- insert multiple row
insert into studentmarks
(
	stu_id, name, subject, marks
)
values
(6 , 'jay' , 'CN' , 65 ) ,
(7 , 'Aditi' , 'DBMS', 87 ) ,
(8 , 'Raju' , 'SCI' , 82 );

-- Creating a Copy of a Table
create table studentinfo1 as
select * from studentinfo;
select * from studentinfo1;

-- Updating a Single Row
use student;
update studentmarks 
set marks=89 , name= 'shivangi'
where stu_id=4;

-- updating a multiple Row
update studentmarks
set marks=85 , name = 'raju' 
where stu_id in (8 , 6);

-- delete row
delete from studentdetail
where name = 'pappu';



