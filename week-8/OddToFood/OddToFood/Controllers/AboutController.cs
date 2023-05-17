using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OddToFood.Controllers
{
    //[Route("company/[controller]/[action]")]
    public class AboutController
    {
       
        //[Route("")]
        public string Phone()
        {
            return "1+55555+55+444";
        }
        //[Route("address")]
        public string Address()
        {
            return "usa";
        }
    }
}
