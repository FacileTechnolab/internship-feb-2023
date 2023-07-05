using Abp.Application.Services;
using Krishika.Project.MultiTenancy.Dto;

namespace Krishika.Project.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

