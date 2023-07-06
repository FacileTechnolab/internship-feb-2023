using AutoMapper;
using FirstCrudPoject.Models;
using FirstCrudPoject.Tickets.DTO;

namespace FirstCrudPoject.Ticket
{
    public class TicketMapPrpfile : Profile
    {
        public TicketMapPrpfile()
        {
            CreateMap<CreateTicketInput, FirstCrudPoject.Models.Ticket>().ReverseMap();
            CreateMap<Event, GetTicketOutput>().ReverseMap();
            CreateMap<GetTicketOutput, FirstCrudPoject.Models.Ticket>().ReverseMap();
            CreateMap<UpdateTicketInput, FirstCrudPoject.Models.Ticket>().ReverseMap();
        }
    }
}
