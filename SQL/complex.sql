use student;

-- subquery 
select * from studentmarks
where marks > 
( select marks 
from studentmarks 
where stu_id  = 5 );

-- In operator 
select * from studentmarks 
where stu_id in
( select stu_id 
from studentdetail 
where marks > 50);
 
-- ALL keyword
select * from studentmarks where marks > all
(select marks
from studentmarks 
where marks <  80);

-- ANY keyword
select * from studentmarks where marks > any
(select marks
from studentmarks 
where marks <  70 and stu_id >1);

-- Correlated subqueries
select marks, name from  studentmarks p where 1 =
( select count(marks)
from studentmarks q where p.marks <= q.marks);

-- The EXISTS operator 
select * from studentmarks
where  EXISTS
( select name
from studentdetail
where studentmarks.name = studentdetail.name);

-- Subqueries in the FROM Clause
select * from (
select Email , avg(marks) as avg
from studentdetail 
group by email ) as tb1
where avg > 85;

-- Subqueries in the SELECT Clause
select profe_id, stu_id ,
(
	select count(*)
    from studentdetail
    where studentdetail.stu_id = studentinfo.profe_id
) as id
  from studentinfo; 


