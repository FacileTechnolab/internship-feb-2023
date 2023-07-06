using AutoMapper;
using FirstCrudPoject.Events.DTO;
using FirstCrudPoject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstCrudPoject.Events
{
    public class TicketMapPrpfile:Profile
    {
        public TicketMapPrpfile()
        {
            CreateMap<CreateEventInput, Event>().ReverseMap();
            CreateMap<Event, GetEventOutput>().ReverseMap();
            CreateMap<GetEventOutput, Event>().ReverseMap();
            CreateMap<UpdateEventInput, Event>().ReverseMap();
        }
    }
}
