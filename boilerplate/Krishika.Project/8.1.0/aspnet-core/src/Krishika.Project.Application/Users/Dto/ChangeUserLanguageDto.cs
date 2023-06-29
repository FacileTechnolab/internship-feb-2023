using System.ComponentModel.DataAnnotations;

namespace Krishika.Project.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}