using Abp.Authorization;
using Jahanvi.Project.Authorization.Roles;
using Jahanvi.Project.Authorization.Users;

namespace Jahanvi.Project.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
