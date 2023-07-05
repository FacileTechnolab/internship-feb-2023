using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace FirstprojectShivi.Controllers
{
    public abstract class FirstprojectShiviControllerBase: AbpController
    {
        protected FirstprojectShiviControllerBase()
        {
            LocalizationSourceName = FirstprojectShiviConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
