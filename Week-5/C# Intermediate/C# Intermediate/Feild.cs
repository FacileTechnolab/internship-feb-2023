using System.Collections.Generic;

namespace C__Intermediate
{
    
    
      

        //field
        public class Feild 
        { 
            public int Id { get; set; }
            public string Name { get; set; }
            public readonly List<Order> Orders = new List<Order>();

          

            public Feild(int id) 
            {
                this.Id = id;
            }
            public Feild(int id, string name) 
                :this(id)
            {
                 this.Name = name;
            }

            public void Promote()
            {
                
            }
        }

    }

