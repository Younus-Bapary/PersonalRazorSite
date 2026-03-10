# PersonalRazorSite

ASP.NET Core Razor Pages recreation of the Colorlib **Personal** portfolio demo.

## Notes
- This is a Razor Pages conversion with the same overall one-page structure and a very close visual style.
- The original template is published by Colorlib and listed under **CC BY 3.0** on their template page, so keep attribution if you use the original design commercially.
- I used local SVG placeholder artwork instead of the original demo photos/assets.

## Run locally
```bash
dotnet restore
dotnet run
```

Then open the local HTTPS URL shown in the terminal.

## Replace with your content
- `Pages/Index.cshtml` — text, sections, cards, pricing, blog items
- `wwwroot/images/` — hero/about illustrations and portfolio images
- `wwwroot/css/site.css` — visual fine-tuning
- `wwwroot/js/site.js` — counters and portfolio filter behavior
