using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AuthonticationMvc.Startup))]
namespace AuthonticationMvc
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
