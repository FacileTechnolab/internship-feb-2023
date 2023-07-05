using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using FirstprojectShivi.Authorization;

namespace FirstprojectShivi
{
    [DependsOn(
        typeof(FirstprojectShiviCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class FirstprojectShiviApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<FirstprojectShiviAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(FirstprojectShiviApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
