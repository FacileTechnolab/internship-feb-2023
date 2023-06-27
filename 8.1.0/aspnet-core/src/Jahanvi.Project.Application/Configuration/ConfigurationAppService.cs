using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using Jahanvi.Project.Configuration.Dto;

namespace Jahanvi.Project.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : ProjectAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
