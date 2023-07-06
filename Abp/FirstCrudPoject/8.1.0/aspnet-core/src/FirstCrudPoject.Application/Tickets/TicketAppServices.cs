using Abp.Application.Services;
using Abp.Domain.Repositories;
using AutoMapper;
using FirstCrudPoject.Tickets.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FirstCrudPoject.Tickets
{
    public class TicketAppServices : ApplicationService
    {
        private readonly IRepository<FirstCrudPoject.Models.Ticket> _ticketServices;
        private readonly IMapper _mapperticket;

        public TicketAppServices(IRepository<FirstCrudPoject.Models.Ticket> ticketServices, IMapper mapperticket)
        {
            _ticketServices = ticketServices;
            _mapperticket = mapperticket;
        }
        public async Task Create(CreateTicketInput inputticket)
        {
            FirstCrudPoject.Models.Ticket outticket = _mapperticket.Map<FirstCrudPoject.Models.Ticket>(inputticket);
            await _ticketServices.InsertAsync(outticket);
        }

        public async Task Delete(DeleteTicketeInput inputticket)
        {
            _ticketServices.Delete(inputticket.Id);
        }

        public async Task<GetTicketOutput> GetTicketById(GetTicketInput inputticket)
        {
            var getTicket = await _ticketServices.GetAsync(inputticket.Id);
            GetTicketOutput outticket = _mapperticket.Map<FirstCrudPoject.Models.Ticket, GetTicketOutput>(getTicket);
            return outticket;
        }

        public async Task<IEnumerable<GetTicketOutput>> ListAll()
        {
            var getticketAll = await _ticketServices.GetAllListAsync();
            List<GetTicketOutput> outticket = _mapperticket.Map<List<FirstCrudPoject.Models.Ticket>, List<GetTicketOutput>>(getticketAll);
            return outticket;

        }

        public async Task Update(UpdateTicketInput inputticket)
        {
            var outticket = await _ticketServices.GetAsync(inputticket.Id);
            if (outticket != null)
            {
                outticket.EventId = inputticket.EventId;
                outticket.TicketHolderName = inputticket.TicketHolderName;
                outticket.Discount = inputticket.Discount;

                await _ticketServices.UpdateAsync(outticket);
            }

        }
    }
}
