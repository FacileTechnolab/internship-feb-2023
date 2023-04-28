
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Delegates
{
    public  class Program
    {
        private static PhotoProcessor.PhotoFilterHandler RemovedRedEyeFilter;

        static void Main(string[] args)
        {
            var processor = new PhotoProcessor();
            var filter = new PhotoFilters();

            Action<Photo> filterHandler = filter.ApplyBrightness;
            filterHandler += filter.ApplyContrast;
            filterHandler += RemoveRedEyeFilter;

            processor.Process("photo.jpg",filterHandler);


        }
         static void RemoveRedEyeFilter(Photo photo)
        {
            Console.WriteLine("Apply RemoveRedEye");
            Console.ReadLine();
        }
    }
}
