using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;

namespace CodeToFood
{
    public class Startup
    {
        private readonly IConfiguration Configuration;

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<IGreeter, Greeter>();
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app,
                              IHostingEnvironment env,
                              IGreeter greeter, ILogger<Startup> logger ) 

        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

            }
           app.UseStaticFiles();
           app.UseMvc(ConfigureRoutes);
            //app.UseFileServer();
            //app.UseDefaultFiles();
            //else
            //{
            //    app.UseDeveloperExceptionPage();
            //}
            //app.Use(next =>
            //{
            //    return async context =>
            //    {
            //        logger.LogInformation("Request incoming");
            //        if (context.Request.Path.StartsWithSegments("/mym"))
            //        {
            //            await context.Response.WriteAsync("Hit!");
            //            logger.LogInformation("Request handler");
            //        }
            //        else
            //        {
            //            await next(context);
            //            logger.LogInformation("Response incoming");
            //        }
            //    };
            //});
            //app.UseWelcomePage(new WelcomePageOptions
            //{
            //    Path = "/Wp"
            //});
            //});
            app.Run(async (context) =>
            {
                //throw new Exception("error!");

                var greeting = greeter.GetMessageOfTheDay();
                context.Response.ContentType = "text/plain";
                await context.Response.WriteAsync($"not Found");
            });
        }
        private void ConfigureRoutes(IRouteBuilder routeBuilder)
        {
            routeBuilder.MapRoute("Default",
                       "{controller=Home}/{action=index}/{id?}");
        }
    }
}
