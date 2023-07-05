using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using FirstprojectShivi.MultiTenancy;

namespace FirstprojectShivi.Sessions.Dto
{
    [AutoMapFrom(typeof(Tenant))]
    public class TenantLoginInfoDto : EntityDto
    {
        public string TenancyName { get; set; }

        public string Name { get; set; }
    }
}
