create database student;
show databases;
create table studentinfo
(
stu_id int , 
name varchar(10) , 
profe_id int 
);
insert into studentinfo values
( 1 , 'krishika' , 1);
insert into studentinfo values
( 2 , 'Jahanvi' , 2);
insert into studentinfo values
( 3 , 'Dipali' , 3);
insert into studentinfo values
( 4 , 'Shivangi' , 1);
select * from studentinfo;
drop table studentinfo;


use student;
create table studentmarks
(
	stu_id int ,
    name varchar(10),
    subject varchar(10),
    marks int
);
select * from studentmarks;
insert into studentmarks values
( 1 , 'krishika' , 'ux/ui' , 80 );
insert into studentmarks values
( 2 , 'Jahanvi' , 'Python' , 60);
insert into studentmarks values
( 3 , 'Dipali' , 'SQL' , 70);
insert into studentmarks values
( 4 , 'Shivangi' , 'HTML' , 40);
drop table studentmarks;

use student;
create table studentdetail
(
	stu_id int ,
    name varchar(10),
    subject varchar(10),
    marks int,
    address varchar(10),
    Email varchar(20),
	phone int
);
select * from studentdetail;
insert into studentdetail values
( 1 , 'krishika' , 'ux/ui' , 80 , 'Ahmedabad' , 'kisu@gmail.com' , 5484651  );
insert into studentdetail values
insert into studentdetail values
( 3 , 'Dipali' , 'SQL' , 70 , 'Nagpur' , 'dipali@gmail.com' , 515615),
( 4 , 'Shivangi' , 'HTML' , 40 , 'abu' , 'shivangi@gmail.com' , 554135),
( 5 , 'Shiva' , 'JavaScript' , 65 , 'Surat' , 'shiva@gmail.com' , 878564),
( 6 , 'Priya' , '.net' , 87 , 'Ahemdabad' , 'priya@gmail.com' , 4655413);
insert into studentdetail values
( 7 , 'Riddhi' , 'SQL' , 70 , 'Nagpur' , 'dipali@gmail.com' , 515615),
( 8 , 'Siddhi' , 'JavaScript' , 65 , 'Surat' , 'shiva@gmail.com' , 878564);


use student;
select * from studentdetail;
insert into  studentdetail values
( 7 , 'Pappu' , 'hindi' , 32 , 'Ahemdabad' , 'pappu@gmail.com' , 843198);

create table stu_add
(
	stu_id int ,
    city varchar(30),
    address varchar(40)
);
select * from stu_add;
insert into stu_add values
(1, 'Ahemdabad', 'Gujarat' ),
(2, 'surat' , 'Bhopal'),
(3, 'Nagpur',  'MP' ),
(4, 'Abu','Rajsthan' ),
(5, 'Nagpur',  'Maharastra' ),
(6, 'Ahemdabad', 'Gujarat' );




