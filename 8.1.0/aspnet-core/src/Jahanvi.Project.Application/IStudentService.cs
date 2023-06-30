
using Abp.Application.Services;
using Jahanvi.Project.Student.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Jahanvi.Project
{
    public interface IStudentService : IApplicationService
    {
        Task<IEnumerable<GetStudentOutput>> ListAll();
        Task Create(CreateStudentInput input);
        Task Update(UpdateStudentInput input);
        Task Delete(DeleteStudentInput input);
        Task<GetStudentOutput> GetStudentById(GetStudentInput input);
        //Task<IEnumerable<Student.DTO.GetStudentOutput>> ListAll();
    }
}
