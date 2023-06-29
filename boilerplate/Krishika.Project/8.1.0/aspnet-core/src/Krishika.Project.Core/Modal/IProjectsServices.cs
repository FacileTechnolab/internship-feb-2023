using Abp.Domain.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Krishika.Project.Modal
{
    public interface IProjectsServices : IDomainService
    {
        IEnumerable<Projects> GetAllList();
        Projects GetProjectsById(int id);
        Task<Projects> Create(Projects entity);
        void Update(Projects entity);
        void Delete(int id);
    }
}
