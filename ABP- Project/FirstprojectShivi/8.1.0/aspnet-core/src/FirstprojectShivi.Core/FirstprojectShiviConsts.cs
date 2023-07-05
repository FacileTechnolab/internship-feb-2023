using FirstprojectShivi.Debugging;

namespace FirstprojectShivi
{
    public class FirstprojectShiviConsts
    {
        public const string LocalizationSourceName = "FirstprojectShivi";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "9810011807364acd8dd86c90d55b2aae";
    }
}
