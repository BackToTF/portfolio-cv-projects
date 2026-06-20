# Anonymous Data & Analytics Portfolio

Static portfolio website for presenting anonymized projects in Data Engineering, Business Intelligence, CRM, Analytics and AI-driven operations.

## Repository Structure

```text
portfolio-cv-projects/
├─ index.html
├─ style.css
├─ script.js
├─ README.md
└─ assets/
```

## Privacy Rules

This portfolio intentionally avoids:

- real company or client names;
- real logos;
- real datasets;
- confidential metrics;
- proprietary architecture details;
- sensitive business information.

All case studies are generalized and anonymized.

## Local Preview

Open `index.html` directly in a browser.

Optional local server:

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Publish on GitHub Pages

GitHub Pages usually requires the repository to be public unless your GitHub plan supports Pages from private repositories.

1. Create a GitHub repository.
2. Push these files to the `main` branch.
3. Open the repository on GitHub.
4. Go to `Settings` → `Pages`.
5. Under `Build and deployment`, choose `Deploy from a branch`.
6. Select branch `main` and folder `/root`.
7. Save.
8. GitHub will provide a URL similar to:

```text
https://your-username.github.io/portfolio-cv-projects/
```

## Publish on Netlify

Recommended if you want to keep the GitHub repository private.

1. Go to Netlify.
2. Choose `Add new site` → `Import an existing project`.
3. Connect GitHub.
4. Select this repository.
5. Build command: leave empty.
6. Publish directory: `.`.
7. Deploy.

Netlify will provide a public URL. You can later add a custom domain.

## Publish on Vercel

Recommended if you want fast deployment from a private GitHub repository.

1. Go to Vercel.
2. Choose `Add New` → `Project`.
3. Import this GitHub repository.
4. Framework preset: `Other`.
5. Build command: leave empty.
6. Output directory: `.`.
7. Deploy.

Vercel will provide a public URL. You can later add a custom domain.

## LinkedIn Custom Button

Suggested button text:

```text
Portfolio Progetti
```

Alternative:

```text
Project Portfolio
```

## Update Contact Links

Before publishing, edit the contact placeholders in `index.html`:

- LinkedIn URL;
- email address.
