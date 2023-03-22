use student;
-- aggregated function
select 
max( marks ) as highest,
min( marks ) as lowest,
avg( marks) as Aveg,
sum(marks) as sum
from studentmarks
where marks > 60; 

-- group by 
select name , count(stu_id) as id
from studentmarks
where marks > 70
group by name;

-- Having clause
use student;

select subject, sum(marks) as mk
from studentdetail 
group by subject
having mk > 80;

-- Roll up
select subject, sum(marks)
from studentmarks
group by (subject) with rollup;













 
