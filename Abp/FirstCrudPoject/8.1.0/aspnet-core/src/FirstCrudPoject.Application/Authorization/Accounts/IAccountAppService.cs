using System.Threading.Tasks;
using Abp.Application.Services;
using FirstCrudPoject.Authorization.Accounts.Dto;

namespace FirstCrudPoject.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
