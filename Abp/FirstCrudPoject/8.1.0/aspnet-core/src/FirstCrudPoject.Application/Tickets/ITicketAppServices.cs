using Abp.Application.Services;
using FirstCrudPoject.Tickets.DTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace FirstCrudPoject.Tickets
{
    public interface ITicketAppServices:IApplicationService
    {
        IEnumerable<GetTicketOutput> ListAll();
        Task Create(CreateTicketInput inputticket);
        Task Update(UpdateTicketInput inputticket);
        Task Delete(DeleteTicketeInput inputticket);
        GetTicketOutput GetTicketById(GetTicketInput inputticket);
    }
}
