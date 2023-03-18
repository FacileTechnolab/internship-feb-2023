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


