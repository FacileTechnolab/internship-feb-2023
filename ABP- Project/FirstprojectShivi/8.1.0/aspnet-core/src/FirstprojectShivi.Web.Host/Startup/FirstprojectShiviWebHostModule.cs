using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using FirstprojectShivi.Configuration;

namespace FirstprojectShivi.Web.Host.Startup
{
    [DependsOn(
       typeof(FirstprojectShiviWebCoreModule))]
    public class FirstprojectShiviWebHostModule: AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public FirstprojectShiviWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(FirstprojectShiviWebHostModule).GetAssembly());
        }
    }
}
