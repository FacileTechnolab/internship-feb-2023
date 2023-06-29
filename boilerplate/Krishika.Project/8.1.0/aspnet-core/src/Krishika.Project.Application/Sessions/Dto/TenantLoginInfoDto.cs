using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Krishika.Project.MultiTenancy;

namespace Krishika.Project.Sessions.Dto
{
    [AutoMapFrom(typeof(Tenant))]
    public class TenantLoginInfoDto : EntityDto
    {
        public string TenancyName { get; set; }

        public string Name { get; set; }
    }
}
