using Abp.Application.Services;
using AutoMapper;
using Jahanvi.Project.Authorization.Roles;
using Jahanvi.Project.Courses.DTO;
using Nest;
using System;

using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;

namespace Jahanvi.Project.Courses
{
    public class CourseService : ApplicationService, ICourseService
    {
        private readonly ICourseService _courseAppService;
        private readonly IMapper _mapper;

        public CourseService(ICourseService courseAppService, IMapper mapper)
        {
            _courseAppService = courseAppService;
            _mapper= mapper;
        }

        public async Task Create(CreateCourseInput input)
        {
            Course output = _mapper.Map<CreateCourseInput, Course>(input);
            await _courseAppService.Create(output);
        }

        public void Delete(DeleteCourseInput input)
        {
            _courseAppService.Delete(input.Id);
        }

        public GetCourseOutput GetCourseById(GetCourseInput input)
        {
            var getCourse = _courseAppService.GetCourseByID(input.Id);
            GetCourseOutput output = _mapper.Map<Course, GetCourseOutput>(getCourse);
            return output;

        }

        public IEnumerable<GetCourseOutput> ListAll()
        {
            var getAll= _courseAppService.GetAllList().ToList();
            List<GetCourseOutput> output = _mapper.Map<List<Course>, List<GetCourseOutput>>(getAll);
            return output;
        }

        public void Update(UpdateCourseInput input)
        {
            Course output = _mapper.Map<UpdateCourseInput, Course>(input);
            _courseAppService.Update(output);
         }
    }
    
}
