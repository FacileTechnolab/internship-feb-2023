using System.Threading.Tasks;
using FirstCrudPoject.Models.TokenAuth;
using FirstCrudPoject.Web.Controllers;
using Shouldly;
using Xunit;

namespace FirstCrudPoject.Web.Tests.Controllers
{
    public class HomeController_Tests: FirstCrudPojectWebTestBase
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