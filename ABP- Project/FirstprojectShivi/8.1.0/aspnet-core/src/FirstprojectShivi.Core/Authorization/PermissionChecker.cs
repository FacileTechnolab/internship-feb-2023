using Abp.Authorization;
using FirstprojectShivi.Authorization.Roles;
using FirstprojectShivi.Authorization.Users;

namespace FirstprojectShivi.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
