using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RelationShip_Between_Classes
{
    class Program
    {
        static void Main(string[] args)
        {
            var text = new Text();
            text.AddHyperLink("sdfbzjnbvjsdb");
            text.Dublicate();

            text.Copy();

            text.fontsize = 12;
            Console.WriteLine(text.fontsize);

            text.width = 100;
            Console.WriteLine(text.width);

            text.height = 100;
            Console.WriteLine(text.height);

            text.FontName = "Italic";
            Console.WriteLine(text.FontName);



            var dbMigrator= new DbMigrator(new Logger());

            var logger= new Logger();
            var installer = new Installer(logger);

            installer.Install();
            dbMigrator.Migrate();

         Console.ReadLine();
        }
    }
}
