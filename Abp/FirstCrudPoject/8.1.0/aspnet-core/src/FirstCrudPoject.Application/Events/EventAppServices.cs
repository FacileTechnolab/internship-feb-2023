using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Collections.Extensions;
using Abp.Domain.Repositories;
using Abp.Extensions;
using Abp.Linq.Extensions;
using AutoMapper;
using FirstCrudPoject.Events.DTO;
using FirstCrudPoject.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstCrudPoject.Events
{
    public class EventAppServices : ApplicationService
    {
        //public EventAppServices(IMapper mapper)
        //{
        //    _mapper = mapper;
        //}
        private readonly IMapper _mapper;
        private readonly IRepository<Event> _eventServices;
        public EventAppServices(IRepository<Event> eventServices, IMapper mapper)
        {
            _eventServices = eventServices;
            _mapper = mapper;
        }

        public async Task Create(CreateEventInput input)
        {
            Event output = _mapper.Map<CreateEventInput, Event>(input);
            await _eventServices.InsertAsync(output);
        }

        public void Delete(DeleteEventInput input)
        {
            _eventServices.Delete(input.Id);
        }

        public async Task<GetEventOutput> GetEventByID(GetEventInput input)
        {
            var getEvent = await _eventServices.GetAsync(input.Id);
            GetEventOutput output = _mapper.Map<Event, GetEventOutput>(getEvent);
            return output;
        }

        public async Task<IEnumerable<GetEventOutput>> ListAll()
        {
            var getAll = await _eventServices.GetAllListAsync();
            List<GetEventOutput> output = _mapper.Map<List<Event>, List<GetEventOutput>>(getAll);
            return output;
        }

        public async Task Update(UpdateEventInput input)
        {
            var output = await _eventServices.GetAsync(input.Id);
            if (output != null)
            {
                output.Description = input.Description;
                output.EventDate = input.EventDate;
                output.EntryFees = input.EntryFees;
                output.Name = input.Name;
                await _eventServices.UpdateAsync(output);
            }
        }
        public async Task<PagedResultDto<GetEventOutput>> GetEvent(GetCoursesInput input)
        {
            var query = _eventServices.GetAll().WhereIf(!input.Filter.IsNullOrWhiteSpace(), x => x.Name.Contains(input.Filter)).AsQueryable();

            var eventCount = await query.CountAsync();
            var events = await query.PageBy(input).ToListAsync();

            return new PagedResultDto<GetEventOutput>(
                eventCount,
                ObjectMapper.Map<List<GetEventOutput>>(events)
                );
        }
    }
}
public class GetCoursesInput : PagedResultRequestDto
{
    public string Filter { get; set; }
}
