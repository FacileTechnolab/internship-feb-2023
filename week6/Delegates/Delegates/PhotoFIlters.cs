using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Delegates
{
    public class PhotoFIlters
    {
        public void ApplyBrightness(Photo photo)
        {
            Console.WriteLine("Apply Brightness");
        }
        public void ApplyContrast(Photo photo)
        {
            Console.WriteLine("Apply contrast");
        }
        public void Resize(Photo photo)
        {
            Console.WriteLine("Resize photo");
        }
    }
}
