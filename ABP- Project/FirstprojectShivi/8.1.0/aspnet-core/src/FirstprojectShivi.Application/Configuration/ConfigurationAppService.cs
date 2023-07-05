using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using FirstprojectShivi.Configuration.Dto;

namespace FirstprojectShivi.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : FirstprojectShiviAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
