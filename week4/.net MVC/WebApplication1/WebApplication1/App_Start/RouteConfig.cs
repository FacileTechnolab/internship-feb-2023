using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace WebApplication1
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            //routes.MapMvcAttributeRoutes();
            //routes.MapRoute(
            //    name: "ByReleaseDate",
            //    "Attribute/Release/{year}/{month}",
            //    new { Controller = "Attribute", Action = "ByReleaseDate" }
            //    //new { Year = @"\d{2}", Month = @"\d{2}" }
            //    );
          
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
