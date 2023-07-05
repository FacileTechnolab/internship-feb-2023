using Abp.Application.Services;
using FirstprojectShivi.MultiTenancy.Dto;

namespace FirstprojectShivi.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

