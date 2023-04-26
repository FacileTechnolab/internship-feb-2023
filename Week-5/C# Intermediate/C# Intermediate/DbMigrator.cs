using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C__Intermediate
{
    public class DbMigrator
    {
        private readonly Composition _logger;

        public DbMigrator(Composition logger)
        {

            _logger = logger;
        }
        public void Migrate()
        {
            _logger.Log("We are migrating blah blah..");
        }
    }
    
}
