using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using FirstCrudPoject.Configuration;

namespace FirstCrudPoject.Web.Host.Startup
{
    [DependsOn(
       typeof(FirstCrudPojectWebCoreModule))]
    public class FirstCrudPojectWebHostModule: AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public FirstCrudPojectWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(FirstCrudPojectWebHostModule).GetAssembly());
        }
    }
}
