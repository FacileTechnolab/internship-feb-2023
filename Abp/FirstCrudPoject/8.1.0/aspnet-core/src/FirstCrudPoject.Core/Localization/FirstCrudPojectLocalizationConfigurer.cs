using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace FirstCrudPoject.Localization
{
    public static class FirstCrudPojectLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(FirstCrudPojectConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(FirstCrudPojectLocalizationConfigurer).GetAssembly(),
                        "FirstCrudPoject.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}
