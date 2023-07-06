using Abp.Authorization;
using FirstCrudPoject.Authorization.Roles;
using FirstCrudPoject.Authorization.Users;

namespace FirstCrudPoject.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
