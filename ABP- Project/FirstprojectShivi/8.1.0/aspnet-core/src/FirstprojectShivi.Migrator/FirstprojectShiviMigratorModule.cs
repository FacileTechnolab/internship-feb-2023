using Microsoft.Extensions.Configuration;
using Castle.MicroKernel.Registration;
using Abp.Events.Bus;
using Abp.Modules;
using Abp.Reflection.Extensions;
using FirstprojectShivi.Configuration;
using FirstprojectShivi.EntityFrameworkCore;
using FirstprojectShivi.Migrator.DependencyInjection;

namespace FirstprojectShivi.Migrator
{
    [DependsOn(typeof(FirstprojectShiviEntityFrameworkModule))]
    public class FirstprojectShiviMigratorModule : AbpModule
    {
        private readonly IConfigurationRoot _appConfiguration;

        public FirstprojectShiviMigratorModule(FirstprojectShiviEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbSeed = true;

            _appConfiguration = AppConfigurations.Get(
                typeof(FirstprojectShiviMigratorModule).GetAssembly().GetDirectoryPathOrNull()
            );
        }

        public override void PreInitialize()
        {
            Configuration.DefaultNameOrConnectionString = _appConfiguration.GetConnectionString(
                FirstprojectShiviConsts.ConnectionStringName
            );

            Configuration.BackgroundJobs.IsJobExecutionEnabled = false;
            Configuration.ReplaceService(
                typeof(IEventBus), 
                () => IocManager.IocContainer.Register(
                    Component.For<IEventBus>().Instance(NullEventBus.Instance)
                )
            );
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(FirstprojectShiviMigratorModule).GetAssembly());
            ServiceCollectionRegistrar.Register(IocManager);
        }
    }
}
