﻿using System.Threading.Tasks;
using Abp.Application.Services;
using Krishika.Project.Authorization.Accounts.Dto;

namespace Krishika.Project.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
