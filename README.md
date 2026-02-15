# Benjamin Caine – Digital Portfolio (Bootstrap)

This folder contains a personalised version of the BootstrapMade **Kelly** template, edited to meet typical digital portfolio requirements:

- Clear navigation (Home, About, Resume, Portfolio, Capabilities, Contact)
- Portfolio section with **featured projects** and visual previews
- Each project has a **case study page** that explains:
  - what the project is,
  - your role/involvement,
  - the process/approach,
  - the outcome/results.

## Quick Start (Local)

1. Open `index.html` in your browser, or run a simple local server:
   - VS Code: **Live Server**
   - Python: `python -m http.server` (then open `http://localhost:8000`)

## Customise Your Details

Search and replace these placeholders across the site:

- `your.email@example.com`
- `github.com/your-username`
- `linkedin.com/in/your-handle`

Update your resume PDF:

- Place it at: `assets/docs/Benjamin_Caine_Resume.pdf`
- Or update the link in `resume.html`

## Replace Screenshots

Current images are placeholders from the template. Replace with your own:

- `assets/img/masonry-portfolio/` (portfolio grid)
- `assets/img/portfolio/` (project sliders)

Keep filenames the same for the easiest swap.

## Deploy (No Password)

To meet “accessible without a password”, deploy publicly:

### Option A: GitHub Pages
1. Create a repo and upload these files.
2. In GitHub: **Settings → Pages**
3. Choose branch: `main` and folder: `/ (root)` or `/docs` (depending on your setup).
4. Use the provided public URL in your resume.

### Option B: Netlify
1. Drag-and-drop the folder into Netlify.
2. Use the public URL in your resume.

## Notes

- The contact form is configured for **Formspree**. Replace `your-form-id` in `contact.html`.
- If you do not need a form, you can remove it and keep email + links.
