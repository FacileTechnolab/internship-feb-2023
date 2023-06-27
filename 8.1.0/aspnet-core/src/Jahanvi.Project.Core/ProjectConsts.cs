using Jahanvi.Project.Debugging;

namespace Jahanvi.Project
{
    public class ProjectConsts
    {
        public const string LocalizationSourceName = "Project";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "38de93331ecd4e43a1f354220a966f36";
    }
}
