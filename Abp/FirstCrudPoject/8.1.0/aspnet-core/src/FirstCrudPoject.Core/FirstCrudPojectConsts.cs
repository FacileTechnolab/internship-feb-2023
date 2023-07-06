using FirstCrudPoject.Debugging;

namespace FirstCrudPoject
{
    public class FirstCrudPojectConsts
    {
        public const string LocalizationSourceName = "FirstCrudPoject";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "54f30a5f5e08487092166f797caf6cb4";
    }
}
