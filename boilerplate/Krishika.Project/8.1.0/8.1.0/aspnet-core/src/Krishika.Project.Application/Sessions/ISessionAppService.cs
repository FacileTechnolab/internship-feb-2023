using System.Threading.Tasks;
using Abp.Application.Services;
using Krishika.Project.Sessions.Dto;

namespace Krishika.Project.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
