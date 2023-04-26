﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Classes
{
    public class Point
    {
        public int x; 
        public int y;

        public Point(int x, int y)
        {
            this.x = x;
            this.y = y;
        }
        
        public void Move(int x, int y)
        {
            this.x = x;
            this.y = y;
        }

        public void Move(Point newLocation)
        {
            //this.x= newLocation.x;
            //this.y= newLocation.y;

            if (newLocation == null)
                throw new ArgumentNullException("newLocation");
            Move(newLocation.x, newLocation.y);
        }
    }
}
