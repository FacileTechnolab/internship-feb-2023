using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Text;
using System.Threading.Tasks;

namespace CsharpAdvance
{
    public delegate string demoDelegate(string str1, string str2);
    public class Events
    {
        event demoDelegate Myevent;

        public Events()
        {
            this.Myevent += new demoDelegate(this.Display);
        }
        public string Display(string studentname, string subject)
        {
            return "Student: " + studentname + "\nSubject: " + subject;
        }
    }
}
