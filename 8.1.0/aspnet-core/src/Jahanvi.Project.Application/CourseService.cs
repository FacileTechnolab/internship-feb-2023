using Abp.Application.Services.Dto;
using Abp.Collections.Extensions;
using Abp.Domain.Repositories;
using Abp.Extensions;
using Abp.Linq.Extensions;
using AutoMapper;
using Jahanvi.Project.Authorization.Users;
using Jahanvi.Project.Courses.DTO;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
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

            // return new ListResultDto<RoleListDto>(ObjectMapper.Map<List<RoleListDto>>(roles));
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
        public async Task<PagedResultDto<GetCourseOutput>> GetCourses(GetCoursesInput input)
        {
            var query = _cource1Repository.GetAll().WhereIf(!input.Filter.IsNullOrWhiteSpace(), x => x.Name.Contains(input.Filter)).AsQueryable();

            var courseCount = await query.CountAsync();
            var courses = await query.PageBy(input).ToListAsync();

            return new PagedResultDto<GetCourseOutput>(
                courseCount,
                ObjectMapper.Map<List<GetCourseOutput>>(courses)
                );
        }
    }
}

public class GetCoursesInput : PagedResultRequestDto
{
    public string Filter { get; set; }
}
