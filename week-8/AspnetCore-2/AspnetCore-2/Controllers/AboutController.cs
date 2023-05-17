using Microsoft.AspNetCore.Mvc;

namespace AspnetCore2.Controllers
{
    //  [Route("about")]
    [Route("[controller]/[action]")]
    public class AboutController
    {
       // [Route("")]
        public string Phone()
        {
            return "1+2222+33333+222";
        }
      //  [Route("address")]
		public string Address()
		{
			return "USA";
		}
	}
}
