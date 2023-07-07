using Abp.Application.Services.Dto;
using Abp.Collections.Extensions;
using Abp.Domain.Repositories;
using Abp.Extensions;
using Abp.Linq.Extensions;
using AutoMapper;
using Jahanvi.Project.Student.DTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Jahanvi.Project
{
    public class StudentService : ProjectAppServiceBase, IStudentService
    {
        private readonly IMapper _mapper;
        private readonly IRepository<Authorization.Users.Student> _studentRepository;
        public StudentService(IMapper mapper, IRepository<Authorization.Users.Student> studentRepository)
        {
            _mapper = mapper;
            _studentRepository = studentRepository;
        }

        public async Task Create(CreateStudentInput input)
        {
            Authorization.Users.Student student = _mapper.Map<CreateStudentInput, Authorization.Users.Student>(input);
            student.Age = (int)((DateTime.Now - input.DateOfBirth).TotalDays / 365.242199);
            await _studentRepository.InsertAsync(student);
        }

        public async Task Delete(DeleteStudentInput input)
        {
            await _studentRepository.DeleteAsync(input.Id);
        }

        public async Task<GetStudentOutput> GetStudentById(int id)
        {
            var getCourse = await _studentRepository.GetAsync(id);
            GetStudentOutput outputs = _mapper.Map<Authorization.Users.Student, GetStudentOutput>(getCourse);
            return outputs;
        }

        public async Task<IEnumerable<GetStudentOutput>> ListAll()
        {
            var getAll = await _studentRepository.GetAllListAsync();
            List<GetStudentOutput> outputs = _mapper.Map<List<Authorization.Users.Student>, List<GetStudentOutput>>(getAll);
            return outputs;
        }

        public async Task Update(UpdateStudentInput input)
        {

            var student = await _studentRepository.GetAsync(input.Id);
            if (student != null)
            {

                int age =
                student.CourseId = input.CourseId;
                student.FirstName = input.FirstName;
                student.LastName = input.LastName;
                student.DateOfBirth = input.DateOfBirth;

                student.Age = (int)((DateTime.Now - input.DateOfBirth).TotalDays / 365.242199);
                await _studentRepository.UpdateAsync(student);
            }
        }
        public async Task<PagedResultDto<GetStudentOutput>> GetStudents(GetStudentInput input)
        {
            var query = _studentRepository.GetAll().Include(x => x.Course).WhereIf(!input.Filter.IsNullOrWhiteSpace(), x => x.FirstName.Contains(input.Filter) || x.LastName.ToString() == (input.Filter)).AsQueryable();

            var studentcount = query.Count();
            var student = query.PageBy(input).ToList();
            return new PagedResultDto<GetStudentOutput>(
            studentcount,
                ObjectMapper.Map<List<GetStudentOutput>>(student)
                );
        }

    }
}

public class GetStudentInput : PagedResultRequestDto
{
    public string Filter { get; set; }
    public int Id { get; set; }
}