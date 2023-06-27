using System.Threading.Tasks;
using Abp.Application.Services;
using Jahanvi.Project.Sessions.Dto;

namespace Jahanvi.Project.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
