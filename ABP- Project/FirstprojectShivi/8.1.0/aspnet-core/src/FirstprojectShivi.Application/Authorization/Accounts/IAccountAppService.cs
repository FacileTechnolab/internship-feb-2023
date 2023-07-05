using System.Threading.Tasks;
using Abp.Application.Services;
using FirstprojectShivi.Authorization.Accounts.Dto;

namespace FirstprojectShivi.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
