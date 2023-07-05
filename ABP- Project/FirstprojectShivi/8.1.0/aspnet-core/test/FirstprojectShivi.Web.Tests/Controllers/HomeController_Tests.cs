using System.Threading.Tasks;
using FirstprojectShivi.Models.TokenAuth;
using FirstprojectShivi.Web.Controllers;
using Shouldly;
using Xunit;

namespace FirstprojectShivi.Web.Tests.Controllers
{
    public class HomeController_Tests: FirstprojectShiviWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}