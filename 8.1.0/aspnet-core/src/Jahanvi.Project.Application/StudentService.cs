using Abp.Domain.Repositories;
using AutoMapper;
using Jahanvi.Project.Student.DTO;
using System.Collections.Generic;
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
            await _studentRepository.InsertAsync(student);
        }

        public async Task Delete(DeleteStudentInput input)
        {
            await _studentRepository.DeleteAsync(input.Id);
        }

        public async Task<GetStudentOutput> GetStudentById(GetStudentInput input)
        {
            var getCourse = await _studentRepository.GetAsync(input.Id);
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

                student.FirstName = input.FirstName;
                student.LastName = input.LastName;
                student.DateOfBirth = input.DateOfBirth;
                student.Age = input.Age;
                await _studentRepository.UpdateAsync(student);
            }
        }

    }
}

