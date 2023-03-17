-- Inner join
select   b.name from studentinfo a
 inner join studentmarks b
 on a.profe_id = b.stu_id ;
 
-- self join
 select a.name as profe , b.name as student from studentinfo as a
 join studentinfo b
 on b.stu_id = a.profe_id;
 
 -- Implicit join
 select * 
 from studentinfo o , studentmarks s   
 where s.stu_id = o.profe_id;
 
 -- outer join
 select * 
 from studentdetail l left join studentmarks s 
 on l.stu_id = s.stu_id;
 
 select * 
 from studentdetail l right join studentmarks s 
 on l.stu_id = s.stu_id;
 
 

 
 
 
 