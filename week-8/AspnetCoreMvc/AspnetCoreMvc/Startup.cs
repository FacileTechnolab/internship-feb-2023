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

namespace AspnetCoreMvc
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
            services.AddSingleton<IGreeter, Greeter>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app,
                              IWebHostEnvironment env,
                              IGreeter greeter, ILogger<Startup> logger

            )
            //IConfiguration configuration,
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

            //service-file
                //app.UseDefaultFiles();
                //app.UseStaticFiles();
                app.UseFileServer();

            app.Use(next =>
            {
                return async context =>
                {
                    logger.LogInformation("Request Comming");
                    if (context.Request.Path.StartsWithSegments("/mym"))
                    {
                        await context.Response.WriteAsync("Hit!!!");
                        logger.LogInformation("Request Handled");
                    }
                    else 
                    {
                        await next(context);
                        logger.LogInformation("Request Outgoing");

                    }
                };
            });
            app.UseWelcomePage(new WelcomePageOptions
            {
                Path = "/wp"
            });
            app.Run(async (context) =>
            {
               // throw new Exception("error");
                //gret-ser
                var greetingser = greeter.GetMessageOfTheDay();
                await context.Response.WriteAsync($"{greetingser} : {env.EnvironmentName}");
                //add-config
                //var greeting = configuration["Greeting"];
                //    await context.Response.WriteAsync(greeting);
            }
            );
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
