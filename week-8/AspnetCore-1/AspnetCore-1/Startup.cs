using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspnetCore_1
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
            services.AddSingleton<IGreeter,Greeter>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, 
                              IWebHostEnvironment env,
                              IGreeter greeter, ILogger<Startup>logger)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            // Using-IApplicationBuilder
            //app.UseWelcomePage(new WelcomePageOptions
            //{
            //    Path = "/wp"
            //}) ;
            //app.Use(next=>
            //{
            //    return async context =>
            //    {
            //        logger.LogInformation("Request incoming");
            //        if(context.Request.Path.StartsWithSegments("/sms"))
            //        {
            //            await context.Response.WriteAsync("hit me!!!!");
            //            logger.LogInformation("Request Handler");
            //        }
            //        else
            //        {
            //            await next(context);
            //            logger.LogInformation("Response are Outgoing !!!!");
            //        }
            //    };
            //});
            app.Run(async (context) =>
                {
                    //throw new Exception("error!");
                    var greeting = greeter.GetMessageOfTheDay();
                    await context.Response.WriteAsync($"{greeting}:{env.EnvironmentName}");
                    });
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
