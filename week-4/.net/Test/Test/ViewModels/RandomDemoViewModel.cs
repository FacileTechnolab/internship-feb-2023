using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Test.Models;

namespace Test.ViewModels
{
    public class RandomDemoViewModel
    {
        public Demo Demo { get; set; }
        public List<Customer> Customers { get; set;}
    }
}