// See https://aka.ms/new-console-template for more information

namespace Csharp.Math
{
    public class Person
    {
        public string name;
        public string lname;

        public void Introduction()
        {
            Console.WriteLine("my name is " + name + " " + lname);

        }

    }


    class Class
    {
        static void Main(string[] args)
        {
            /*var john=new Person();
            
            john.name = "shivangi";
            john.lname = "shah";
            john.Introduction();
            Calculator calc = new Calculator();
             var results =calc.Add(1, 2);
            Console.WriteLine(results);
            var numbers = new int[3];
            numbers[0] = 1;
            Console.WriteLine(numbers[0]);
            Console.WriteLine(numbers[1]);
                Console.WriteLine(numbers[2]);

            var flag=new bool[3];
            flag[0] = true;
            Console.WriteLine(flag[0]);
            Console.WriteLine(flag[1]);
            Console.WriteLine(flag[2]);

            var names = new string[3] { "jack", "jonny", "mary" };

            Console.WriteLine(names[0]);

            var firstname = "krishika";

            var fullname=firstname+" "+ sername;
             var myfullname=string.Format("my name is {0}{1}",firstname, sername);
            var name = new string[4] { "shivangi", "janhvi", "krishika", "dipali" };
            var formatted =string.Join(",", name);
            Console.WriteLine(formatted);
            var names = @"hi john
can youn find the documents
C:\folder1\folder2
C:\folder3\folder4";
            Console.WriteLine(names);*/
            var Method = Shipping.Express;
            Console.WriteLine((int)Method);
            var id = 2;
            Console.WriteLine((Shipping)id);
            Console.WriteLine(Method.ToString());
            var Methodname = "Express";
            var Mod = (Shipping)Enum.Parse(typeof(Shipping), Methodname);

            
            Console.WriteLine(Math.Sqrt(144));

        }
    }
}
