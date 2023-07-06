using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace FirstCrudPoject.Controllers
{
    public abstract class FirstCrudPojectControllerBase: AbpController
    {
        protected FirstCrudPojectControllerBase()
        {
            LocalizationSourceName = FirstCrudPojectConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
