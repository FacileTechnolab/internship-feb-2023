using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_IntermediateClass
{

    public class HttpCookie
    {
        private Dictionary<string, string> _dictionary;

        public HttpCookie()
        {
            _dictionary = new Dictionary<string, string>();
        }

        public string this[string key]
        {
            get { return _dictionary[key]; }
            set { _dictionary[key] = value; }

        }
    }
    internal class Indexers
    {
        public void Index()
        {
            var cookie = new HttpCookie();
            cookie["name"] = "shivangi";
            Console.WriteLine(cookie["name"]);
            Console.ReadLine();

        }
    }
}
