using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Routing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OddToFood.Services;
using OddToFood.Data;
using Microsoft.EntityFrameworkCore;

namespace OddToFood
{
    public class Startup
    {
        private IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<IGreeter, Greeter>();
            services.AddDbContext<OddToFoodDbContext>(options => options.UseSqlServer(_configuration.GetConnectionString("OddToFood")));
            services.AddScoped<IRestaurantData, SqlRestaurantData>();
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app,
                              IHostingEnvironment env,
                              IGreeter greeter, ILogger<Startup> logger)
        //IConfiguration configuration
        {

            //app.Use(next =>
            //{
            //    return async context =>
            //    {
            //        logger.LogInformation("Request Comming");
            //        if (context.Request.Path.StartsWithSegments("/mym"))
            //        {
            //            await context.Response.WriteAsync("Hit!!!");
            //            logger.LogInformation("Request Handled");
            //        }
            //        else
            //        {
            //            await next(context);
            //            logger.LogInformation("Request Outgoing");

            //        }
            //    };
            //});
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            //else
            //{
            //    app.UseExceptionHandler("/Error");
            //}
            app.UseStaticFiles();
            //app.UseMvcWithDefaultRoute();
            app.UseMvc(ConfigureRoutes);

            //app.UseDefaultFiles();
            //app.UseWelcomePage(new WelcomePageOptions
            //{
            //    Path = "/wp"
            //});
           
            app.Run(async (context) =>
            {
                //throw new Exception("error");
                var greeting = greeter.GetMessageOfTheDay();
                context.Response.ContentType= "text/plain";
                await context.Response.WriteAsync($"Not found");
                //await context.Response.WriteAsync($"{greeting} : {env.EnvironmentName}");
                //add-config
                //var greeting = configuration["Greeting"];
                //    await context.Response.WriteAsync(greeting);
            });

            //app.UseStaticFiles();

           // app.UseMvc(routes =>
           //{
           //     routes.MapRoute(
           //         name: "default",
           //        template: "{controller}/{action=Index}/{id?}");
           //});
        }

        private void ConfigureRoutes(IRouteBuilder routeBuilder)
        {
            routeBuilder.MapRoute("Default",
               "{controller}/{action}/{id?}");
        }
    }
}
