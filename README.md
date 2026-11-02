# Rana Zaman Qamar — Portfolio

Editorial personal portfolio built with Next.js, TypeScript, Tailwind CSS, Geist, and Motion.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Add your portrait

Replace the grey placeholder with your photo:

1. Copy your image to `public/images/profile.jpg`
2. Keep the filename `profile.jpg` (or update `portrait` in `data/site.ts`)
3. Refresh the browser — CSS applies the muted grey treatment automatically

## Add real projects later

Edit `data/projects.ts` and swap the three placeholder entries:

```ts
{
  title: "Your Project",
  description: "Short description.",
  year: "2026",
  type: "Web app",
  image: "/images/your-project.jpg",
  link: "https://...", // optional
}
```

## Contact & socials

Configured in `data/site.ts` (email, GitHub, LinkedIn).
