using Krishika.Project.Debugging;

namespace Krishika.Project
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
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "bd95288e7eae4fd6a0f737b0eb22c83a";
    }
}
