using System.Threading.Tasks;
using Krishika.Project.Configuration.Dto;

namespace Krishika.Project.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
