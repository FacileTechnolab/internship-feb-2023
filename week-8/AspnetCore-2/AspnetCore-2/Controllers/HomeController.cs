using Microsoft.AspNetCore.Mvc;


namespace AspnetCore2.Controllers 
{
	public class HomeController :Controller
	{
		public string Indx()
		{
			
			return "this is controller";
		}
		public IActionResult Index()
		{
			var model= new Restaurant { Id = 1 ,Name="Dipali"};
			return new ObjectResult(model);
		}
	}
}
