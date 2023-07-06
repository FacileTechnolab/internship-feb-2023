using System.ComponentModel.DataAnnotations;

namespace FirstCrudPoject.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}