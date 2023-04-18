use student;
start transaction ;
update stu_add set city = 'vadodra' where stu_id=1;
update studentdetail  set marks = 50 where stu_id=4;
commit;
