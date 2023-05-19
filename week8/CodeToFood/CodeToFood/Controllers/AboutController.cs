using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace CodeToFood.Controllers
{
    [Route("[controller]/[action]")]
    public class AboutController
    {
          
        public string Phone()
        {
            return "3+545322345834";
        }
     
        public string Address()
        { 
            return "Canada";
        }
    }
}
