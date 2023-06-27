using System.Threading.Tasks;
using Jahanvi.Project.Configuration.Dto;

namespace Jahanvi.Project.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
