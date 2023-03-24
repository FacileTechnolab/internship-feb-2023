use student;

-- nullif function
select nullif(city , 'abu') as c
from stu_add;

-- ifnull funtion
 select ifnull(marks,45)
 from studentmarks;
 
-- coalesce function 
select coalesce(subject, marks) as c
from studentmarks;

-- if function
select stu_id, marks ,
if (marks > 60, "pass", "fail" )
from studentmarks; 

-- CASE function 
select stu_id, marks,
case
	when  marks > 70  then 'This student is pass '
    when marks < 70 then 'This student is fail'
    else 'This student is normal'
 end as result
 from studentmarks;
   
   