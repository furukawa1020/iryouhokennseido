# Netlify deployment

This project is a static site and can be deployed directly to Netlify.

## Option 1: Drag and drop

1. Open the Netlify dashboard.
2. Create a new site with `Deploy manually`.
3. Drag this folder, or a zip of this folder, into Netlify.

## Option 2: Git-based deploy

1. Push this directory to a Git repository.
2. Import the repository into Netlify.
3. Netlify will detect `netlify.toml`.
4. The publish directory is the project root: `.`

## Files to include

- `index.html`
- `styles.css`
- `app.js`
- `pdf-export.html`
- `pdf.css`
- `netlify.toml`

## Files you can exclude

- `chrome-headless-profile/`
- `*.log`
- generated local PDFs and screenshots

## Notes

- The site is fully static, so no build command is required.
- `index.html` is the main entry page.
- `pdf-export.html` is a separate print/export-oriented page.
