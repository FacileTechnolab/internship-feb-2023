use student;

create view stu_result
as 
select studentdetail.name, studentdetail.address, studentdetail.subject
from studentdetail
inner join studentmarks
on studentdetail.stu_id = studentmarks.stu_id;

select * from stu_result;