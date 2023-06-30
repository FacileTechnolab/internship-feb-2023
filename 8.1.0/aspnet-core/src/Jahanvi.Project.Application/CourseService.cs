using Abp.Domain.Repositories;
using AutoMapper;
using Jahanvi.Project.Authorization.Users;
using Jahanvi.Project.Courses.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Jahanvi.Project
{
    public class CourseService : ProjectAppServiceBase, ICourseService
    {
        private readonly IMapper _mapper;
        private readonly IRepository<Course> _cource1Repository;

        public CourseService(IMapper mapper, IRepository<Course> cource1Repository)
        {
            _mapper = mapper;
            _cource1Repository = cource1Repository;
        }

        public async Task Create(CreateCourseInput input)
        {
            Course cource = _mapper.Map<CreateCourseInput, Course>(input);
            await _cource1Repository.InsertAsync(cource);
        }

        public async Task Delete(DeleteCourseInput input)
        {
            await _cource1Repository.DeleteAsync(input.Id);
        }

        public async Task<GetCourseOutput> GetCourseById(GetCourseInput input)
        {
            var getCourse = await _cource1Repository.GetAsync(input.Id);
            GetCourseOutput output = _mapper.Map<Course, GetCourseOutput>(getCourse);
            return output;
        }

        public async Task<IEnumerable<GetCourseOutput>> ListAll()
        {
            var getAll = await _cource1Repository.GetAllListAsync();
            List<GetCourseOutput> output = _mapper.Map<List<Course>, List<GetCourseOutput>>(getAll);
            return output;
        }

        public async Task Update(UpdateCourseInput input)
        {
            var course = await _cource1Repository.GetAsync(input.Id);
            if (course != null)
            {
                course.Professor = input.Professor;
                course.Name = input.Name;
                course.Description = input.Description;
                course.Sem = input.Sem;
                await _cource1Repository.UpdateAsync(course);
            }
        }
    }
}
