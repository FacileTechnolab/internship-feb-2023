using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Collections.Extensions;
using Abp.Domain.Repositories;
using Abp.Extensions;
using Abp.Linq.Extensions;
using AutoMapper;
using FirstCrudPoject.Tickets.DTO;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
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

        public async Task<GetTicketOutput> GetTicketById(EntityDto inputticket)
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

        public async Task<PagedResultDto<GetTicketOutput>> GetTicket(GetTicketInput inputticket)
        {
            var query = _ticketServices.GetAll().Include(x => x.Events).WhereIf(!inputticket.Filter.IsNullOrWhiteSpace(), x => x.TicketHolderName.Contains(inputticket.Filter) || x.Discount.ToString() == inputticket.Filter || x.Events.Name.Contains(inputticket.Filter)).AsQueryable();
            var ticketcount = query.Count();
            var tickets = query.PageBy(inputticket).ToList();
            var result = ObjectMapper.Map<List<GetTicketOutput>>(tickets);
            return new PagedResultDto<GetTicketOutput>(
            ticketcount, result);
        }


    }
}
public class GetTicketInput : PagedResultRequestDto
{
    public string Filter { get; set; }
}
