using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspnetCore_2
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
			services.Configure<CookiePolicyOptions>(options =>
			{
				// This lambda determines whether user consent for non-essential cookies is needed for a given request.
				options.CheckConsentNeeded = context => true;
				options.MinimumSameSitePolicy = SameSiteMode.None;
			});

			services.AddSingleton<IGreeter, Greeter>();
		

			services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app,
			                  IHostingEnvironment env,
							  IGreeter greeter, ILogger<Startup> logger)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}
			//else
			//{
			//	app.UseExceptionHandler("/Error");
			//	app.UseHsts();
			//}
			//app.Use(next =>
			//{
			//	return async context =>
			//	{
			//		logger.LogInformation("Request incoming");
			//		if (context.Request.Path.StartsWithSegments("/sms"))
			//		{
			//			await context.Response.WriteAsync("hit me!!!!");
			//			logger.LogInformation("Request Handler");
			//		}
			//		else
			//		{
			//			await next(context);
			//			logger.LogInformation("Response are Outgoing !!!!");
			//		}
			//	};
			//});
			app.UseDefaultFiles();
			//app.UseStaticFiles();
			////app.UseFileServer();
			app.UseMvc(ConfigureRoutes);
			//app.UseMvcWithDefaultRoute();
			app.UseWelcomePage(new WelcomePageOptions
			{
				Path = "/wp"
			});
			app.Run(async (context) =>
			{
			//	throw new Exception("error!");
				var greeting = greeter.GetMessageOfTheDay();

				//await context.Response.WriteAsync($"{greeting}:{env.EnvironmentName}");
				context.Response.ContentType = "text/html";
			   await context.Response.WriteAsync($"Not found");
			});

			app.UseHttpsRedirection();
			app.UseStaticFiles();
			app.UseCookiePolicy();

			app.UseMvc();
		}

		private void ConfigureRoutes(IRouteBuilder obj)
		{
			//throw new NotImplementedException();
			obj.MapRoute("Default",
				"{controller=Home}/{action=Index}/{id?}");
		}
	}
}
