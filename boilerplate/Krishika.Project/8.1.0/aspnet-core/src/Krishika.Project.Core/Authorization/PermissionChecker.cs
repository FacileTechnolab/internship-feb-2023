using Abp.Authorization;
using Krishika.Project.Authorization.Roles;
using Krishika.Project.Authorization.Users;

namespace Krishika.Project.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
