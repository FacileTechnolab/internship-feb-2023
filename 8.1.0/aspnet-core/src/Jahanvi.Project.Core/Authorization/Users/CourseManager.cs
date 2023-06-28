using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.UI;
using Jahanvi.Project.Courses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jahanvi.Project.Authorization.Users
{
    public class CourseManager : DomainService, ICourseService
    {
        private readonly IRepository<Course> _courseRepository;

     

        public CourseManager(IRepository<Course> courseRepository)
        {
            _courseRepository= courseRepository;
        }

        public async Task<Course> Create(Course cour)
        {
            var course=_courseRepository.FirstOrDefault(x=>x.Id==cour.Id);
            if (course == null)
            {
                throw new UserFriendlyException("Already Exist");
            }
            else
            {
                return await _courseRepository.InsertAsync(cour);
            }
            
        }

        public void Delete(int id)
        {
            var course = _courseRepository.FirstOrDefault(x => x.Id ==id);
            if (course != null)
            {
                throw new UserFriendlyException("No data found");
            }
            else
            {
                _courseRepository.Delete(course);
            }
           
        }

        public IEnumerable<Course> GetAllList()
        {
            return _courseRepository.GetAllIncluding(x=>x.Id);
        }

        public Course GetCourseByID(int id)
        {
            return _courseRepository.Get(id);
        }

        public void Update(Course cour)
        {
          _courseRepository.Update(cour);
        }
    }

   
}
