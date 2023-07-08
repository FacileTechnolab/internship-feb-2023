using AutoMapper;
using FirstCrudPoject.Tickets.DTO;

namespace FirstCrudPoject.Ticket
{
    public class TicketMapPrpfile : Profile
    {
        public TicketMapPrpfile()
        {
            CreateMap<CreateTicketInput, FirstCrudPoject.Models.Ticket>().ReverseMap();
            CreateMap<FirstCrudPoject.Models.Ticket, GetTicketOutput>()
                .ForMember(x => x.EventName, y => y.MapFrom(z => z.Events.Name))
                .ReverseMap();
            CreateMap<UpdateTicketInput, FirstCrudPoject.Models.Ticket>().ReverseMap();
        }
    }
}
