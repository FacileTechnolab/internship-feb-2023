use student;

create view stu_result
as 
select studentdetail.name, studentdetail.address, studentdetail.subject
from studentdetail
inner join studentmarks
on studentdetail.stu_id = studentmarks.stu_id;

alter view stu_result
as 
select studentdetail.name, studentdetail.address, studentmarks.subject, stu_add.city
from studentdetail
inner join studentmarks
on studentdetail.stu_id = studentmarks.stu_id
inner join stu_add
on stu_add.city = studentdetail.address;

rename table stu_result
to stu_data;

select * from stu_data;