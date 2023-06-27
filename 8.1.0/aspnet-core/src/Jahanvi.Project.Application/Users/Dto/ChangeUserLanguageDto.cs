using System.ComponentModel.DataAnnotations;

namespace Jahanvi.Project.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}