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
                .ForMember(x => x.Events, y => y.MapFrom(z => z.Events))
                .ReverseMap();
            CreateMap<GetTicketOutput, FirstCrudPoject.Models.Ticket>().ReverseMap();
            CreateMap<UpdateTicketInput, FirstCrudPoject.Models.Ticket>().ReverseMap();
        }
    }
}
