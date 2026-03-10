using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace PersonalRazorSite.Pages;

public class ContactModel : PageModel
{
    [BindProperty]
    public ContactInputModel Input { get; set; } = new();

    public string? SuccessMessage { get; set; }

    public void OnGet()
    {
    }

    public IActionResult OnPost()
    {
        if (!ModelState.IsValid)
        {
            return Page();
        }

        SuccessMessage = "Your message has been captured in the demo form. Connect it to email or database storage next.";
        ModelState.Clear();
        Input = new ContactInputModel();
        return Page();
    }

    public class ContactInputModel
    {
        [Required]
        [StringLength(100)]
        [Display(Name = "Full Name")]
        public string Name { get; set; } = string.Empty;

        [Required]
        [EmailAddress]
        [Display(Name = "Email Address")]
        public string Email { get; set; } = string.Empty;

        [Required]
        [StringLength(150)]
        public string Subject { get; set; } = string.Empty;

        [Required]
        [StringLength(2000, MinimumLength = 10)]
        public string Message { get; set; } = string.Empty;
    }
}
