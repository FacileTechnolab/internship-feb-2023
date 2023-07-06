using System.Threading.Tasks;
using Abp.Application.Services;
using FirstCrudPoject.Sessions.Dto;

namespace FirstCrudPoject.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
