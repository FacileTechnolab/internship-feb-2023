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
-- select address, count(city)
-- from stu_add inner join studentdetail
-- where name = 'Dipali'
-- group by city
-- -- having count(city) > 1
-- -- order by count(city) desc; 



 
