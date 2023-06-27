using Abp.Application.Services;
using Jahanvi.Project.MultiTenancy.Dto;

namespace Jahanvi.Project.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

