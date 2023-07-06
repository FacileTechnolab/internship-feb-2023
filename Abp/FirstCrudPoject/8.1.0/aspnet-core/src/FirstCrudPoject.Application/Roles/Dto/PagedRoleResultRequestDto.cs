using Abp.Application.Services.Dto;

namespace FirstCrudPoject.Roles.Dto
{
    public class PagedRoleResultRequestDto : PagedResultRequestDto
    {
        public string Keyword { get; set; }
    }
}

