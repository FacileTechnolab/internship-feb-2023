using Abp.Application.Services;
using FirstCrudPoject.MultiTenancy.Dto;

namespace FirstCrudPoject.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

