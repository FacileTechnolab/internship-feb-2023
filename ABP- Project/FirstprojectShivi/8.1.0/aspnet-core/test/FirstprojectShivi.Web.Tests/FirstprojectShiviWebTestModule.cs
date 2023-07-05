using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using FirstprojectShivi.EntityFrameworkCore;
using FirstprojectShivi.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace FirstprojectShivi.Web.Tests
{
    [DependsOn(
        typeof(FirstprojectShiviWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class FirstprojectShiviWebTestModule : AbpModule
    {
        public FirstprojectShiviWebTestModule(FirstprojectShiviEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(FirstprojectShiviWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(FirstprojectShiviWebMvcModule).Assembly);
        }
    }
}