using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using FirstCrudPoject.Configuration.Dto;

namespace FirstCrudPoject.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : FirstCrudPojectAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
