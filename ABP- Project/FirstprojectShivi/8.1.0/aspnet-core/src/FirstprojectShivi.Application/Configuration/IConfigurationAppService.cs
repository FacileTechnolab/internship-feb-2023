using System.Threading.Tasks;
using FirstprojectShivi.Configuration.Dto;

namespace FirstprojectShivi.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
