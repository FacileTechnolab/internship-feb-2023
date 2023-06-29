using Abp.Domain.Entities;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace Krishika.Project.Modal
{
    public class ProjectsServices: DomainService, IProjectsServices
    {
        private readonly IRepository<Projects> _repositoryProjects;
        public ProjectsServices(IRepository<Projects> repositoryProjects)
        {
            _repositoryProjects = repositoryProjects;
        }

        public async Task<Projects> Create(Projects entity)
        {
            var projects = _repositoryProjects.FirstOrDefault(x => x.Id == entity.Id);
            if (projects != null)
            {
                throw new UserFriendlyException("Already Exist");
            }
            else
            {
                 return await _repositoryProjects.InsertAsync(entity);
            }
        }

        
        public void Delete(int id)
        {
            var projects= _repositoryProjects.FirstOrDefault(x => x.Id == id);
            if (projects == null)
            {
                throw new UserFriendlyException("No Data Found");
            }
            else
            {
                _repositoryProjects.Delete(projects);
            }
        }

        public IEnumerable<Projects> GetAllList()
        {
            return _repositoryProjects.GetAllIncluding(x => x.Id );
        }

        public Projects GetProjectsById(int id)
        {
            return _repositoryProjects.Get(id);
        }

       

        public void Update(Projects entity)
        {
            _repositoryProjects.Update(entity);
        }
    }
}
