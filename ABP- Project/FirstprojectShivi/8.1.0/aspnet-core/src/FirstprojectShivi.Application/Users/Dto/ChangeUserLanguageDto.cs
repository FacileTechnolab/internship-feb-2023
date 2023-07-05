using System.ComponentModel.DataAnnotations;

namespace FirstprojectShivi.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}