using Abp.Application.Services;
using FirstCrudPoject.Events.DTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstCrudPoject.Events
{
    public interface IEventAppServices:IApplicationService
    {
        IEnumerable<GetEventOutput> ListAll();
        Task Create(CreateEventInput input);
        void Update(UpdateEventInput input);
        void Delete(DeleteEventInput input);
        GetEventOutput GetEventByID(GetEventInput input);
    }

    
}
