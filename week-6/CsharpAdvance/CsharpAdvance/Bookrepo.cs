using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CsharpAdvance
{
    public class Bookrepo
    {
        public IEnumerable<Linq> GetLinqs()
        {
            return new List<Linq>
            {
                new Linq() { Title = "ADO.NET STEP BY STEP", Price = 5},
                new Linq() { Title = "ASP.NET MVC", Price = 4.05F },
                new Linq() { Title = "ASP.NET WEP API", Price = 12 },
            };
        }
      
    }
}
