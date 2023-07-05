using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace FirstprojectShivi.Localization
{
    public static class FirstprojectShiviLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(FirstprojectShiviConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(FirstprojectShiviLocalizationConfigurer).GetAssembly(),
                        "FirstprojectShivi.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}
