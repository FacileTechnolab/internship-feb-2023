﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace classes
{
    internal class Point
    {
        public int X;
        public int Y ;

        public Point(int x,int y)
        {
            this.X = x;
            this.Y = y;

        }
        public void Move(int x,int y)
        {
            this.X = x; 
            this.Y = y;
        
        }
        public void Move(Point newLocation)
        {
            //this.X=newLocation.X;
            //this.Y=newLocation.Y;
            if (newLocation == null)
                throw new ArgumentNullException("newLocation");
            Move(newLocation.X,newLocation.Y);
        }
    }
}
