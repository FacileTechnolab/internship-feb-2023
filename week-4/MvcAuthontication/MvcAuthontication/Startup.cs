using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MvcAuthontication.Startup))]
namespace MvcAuthontication
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
