using System.Threading.Tasks;
using FirstCrudPoject.Configuration.Dto;

namespace FirstCrudPoject.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
