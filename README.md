# Washougal Football Boosters Golf Tournament

Event website with Decap CMS for easy content editing.

## How It Works

- **11ty** builds the HTML from a data file (`src/_data/event.json`)
- **Decap CMS** provides a visual editor at `/admin` to update content
- **Netlify** hosts the site and rebuilds automatically on every edit

## Setup (One-Time)

### 1. Push to GitHub
```bash
cd golf-cms
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/washougal-golf.git
git push -u origin main
```

### 2. Connect to Netlify
- Go to [app.netlify.com](https://app.netlify.com)
- Click **"Add new site" → "Import an existing project"**
- Select the GitHub repo
- Build settings:
  - **Build command:** `npm run build`
  - **Publish directory:** `_site`
- Click **Deploy**

### 3. Enable Netlify Identity (for CMS login)
- In Netlify dashboard → **Site settings → Identity → Enable Identity**
- Under **Registration**, set to **Invite only**
- Under **Services → Git Gateway**, click **Enable Git Gateway**
- Go to **Identity** tab → **Invite users** → add email addresses for anyone who needs CMS access

### 4. Set your custom domain (optional)
- **Site settings → Domain management → Add custom domain**
- Or rename the Netlify subdomain to `washougalfootballgolftournament2026.netlify.app`

## Editing Content

1. Go to `yoursite.netlify.app/admin`
2. Log in with your Netlify Identity credentials
3. Click **"Golf Tournament"** under Event Settings
4. Edit any field — text, prices, images, included items, sponsorship tiers
5. Click **Publish** — the site rebuilds automatically in ~30 seconds

## Editable Fields

| Field | What it controls |
|-------|-----------------|
| Event Title | "Golf Tournament" headline |
| Organization Name | "Washougal Football Boosters" |
| Date / Time / Location | Event details section |
| Team Price / Individual Price | Pricing cards |
| What's Included | Bullet list of inclusions |
| Sponsorship Tiers | Bronze/Silver/Gold/Platinum amounts |
| Hero Image | Background player image |
| Logo Image | Top-left school logo |
| QR Code Image | Registration QR code |
| Registration URL | Where QR codes and links point |

## Local Development

```bash
npm install
npm run serve
```
Opens at `http://localhost:8080`

## File Structure

```
golf-cms/
├── eleventy.config.js    # Build config
├── package.json
├── src/
│   ├── _data/
│   │   └── event.json    # ← All editable content lives here
│   ├── admin/
│   │   ├── index.html    # CMS dashboard
│   │   └── config.yml    # CMS field definitions
│   ├── images/
│   │   ├── hero.jpg
│   │   ├── logo.png
│   │   └── qr-code.jpg
│   └── index.njk         # Page template
└── _site/                # Built output (auto-generated)
```
