using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using AutoMapper;
using FirstCrudPoject.Authorization;

namespace FirstCrudPoject
{
    [DependsOn(
        typeof(FirstCrudPojectCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class FirstCrudPojectApplicationModule : AbpModule
    {
        private object mapper;

        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<FirstCrudPojectAuthorizationProvider>();
            

        }

        public override void Initialize()
        {
            var thisAssembly = typeof(FirstCrudPojectApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
            //ConfigureSwaggerUi();
        }

        //private void ConfigureSwaggerUi()
        //{
        //    Configuration.Modules.AbpModule().HttpConfiguration
        //        .EnableSwagger(c =>
        //        {
        //            c.SingleApiVersion("v1", "SwaggerIntegrationDemo.WebApi");
        //            c.ResolveConflictingActions(apiDescriptions => apiDescriptions.First());
        //        })
        //        .EnableSwaggerUi(c =>
        //        {
        //            c.InjectJavaScript(Assembly.GetAssembly(typeof(AbpProjectNameWebApiModule)), "AbpCompanyName.AbpProjectName.Api.Scripts.Swagger-Custom.js");
        //        });
        //}
    }
}
