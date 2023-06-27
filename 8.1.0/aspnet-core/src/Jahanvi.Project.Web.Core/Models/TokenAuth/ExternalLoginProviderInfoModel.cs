using Abp.AutoMapper;
using Jahanvi.Project.Authentication.External;

namespace Jahanvi.Project.Models.TokenAuth
{
    [AutoMapFrom(typeof(ExternalLoginProviderInfo))]
    public class ExternalLoginProviderInfoModel
    {
        public string Name { get; set; }

        public string ClientId { get; set; }
    }
}
