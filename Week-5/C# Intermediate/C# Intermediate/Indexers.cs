using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C__Intermediate
{
    public class Indexers
    {   
        //meth-1
        //private readonly Dictionary<string, string> _dictionary;
        //public Indexers() 
        //{
        //    _dictionary = new Dictionary<string, string>();
        //}
        //public string this[string key]
        //{
        //    get 
        //    { 
        //        return _dictionary[key]; 
        //    } 
        //    set
        //    { 
        //        _dictionary[key] = value; 
        //    }
        //}
        //

        //meth-2
        private string[] name = new string[5];

        public string this[int i]
        {
             get { return name[i]; }
            set { name[i] = value; }
        }

        //
    }
}
