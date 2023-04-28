using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Delegates
{
    public class Program
    {
        static void Main(string[] args)
        {
            var processor=new PhotoProcessor();
            var filters=new PhotoFIlters();
            Action<Photo> filterHandler = filters.ApplyBrightness;
            filterHandler += filters.ApplyContrast;
            filterHandler += RemoveRedEyeFilter; 
            processor.Process("photo.jpg", filterHandler);

            //********Practical**************
            Calculoation obj = new Calculoation(DelegatePractice.Addition);
            obj.Invoke(10, 20);
            


        }
        static void RemoveRedEyeFilter(Photo photo)
        {
            Console.WriteLine("Apply RemoveREDEYE");
        }
    }
}
