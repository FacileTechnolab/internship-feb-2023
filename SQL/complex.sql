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
