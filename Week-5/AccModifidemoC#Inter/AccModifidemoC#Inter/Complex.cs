using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccModifidemoC_Inter
{
    internal class Complex
    {
        int real;
        int image;

        public void setData(int r, int i)
        {
            real = r;
            image = i;
        }
        public void displayData()
        {
            Console.WriteLine("Real :" + real);
            Console.WriteLine("Image :" + image);

        }

    }
}
