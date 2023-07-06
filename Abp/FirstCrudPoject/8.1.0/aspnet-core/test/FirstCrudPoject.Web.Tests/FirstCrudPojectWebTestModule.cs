using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using FirstCrudPoject.EntityFrameworkCore;
using FirstCrudPoject.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace FirstCrudPoject.Web.Tests
{
    [DependsOn(
        typeof(FirstCrudPojectWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class FirstCrudPojectWebTestModule : AbpModule
    {
        public FirstCrudPojectWebTestModule(FirstCrudPojectEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(FirstCrudPojectWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(FirstCrudPojectWebMvcModule).Assembly);
        }
    }
}