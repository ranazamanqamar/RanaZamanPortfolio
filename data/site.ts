export const site = {
  name: "Rana Zaman",
  fullName: "Rana Zaman Qamar",
  role: "AI Web Designer & Developer",
  location: "Gujranwala, PK",
  locationFull: "Gujranwala, Pakistan",
  status: "Computer Science Student",
  email: "ranazamanqamar13@gmail.com",
  github: "https://github.com/ranazamanqamar",
  linkedin: "https://www.linkedin.com/in/rana-zaman-qamar-b6b3b8328/",
  portrait: "/images/profile.png",
  aboutPortrait: "/images/about-portrait.png",
  heroMockup: "/images/hero-mockup-ux.png",
  heroHeadline: [
    { text: "AI Web Designer", tone: "dark" as const },
    { text: "& Developer", tone: "dark" as const },
    { text: "crafting modern", tone: "muted" as const },
    { text: "digital experiences", tone: "muted" as const },
    { text: "with design, code", tone: "dark" as const },
    { text: "& AI.", tone: "dark" as const },
  ],
  heroSupport:
    "Computer Science student exploring the intersection of design, development and artificial intelligence — building modern digital experiences with clean interfaces and subtle motion.",
  intro:
    "I'm Rana, a Computer Science student exploring the intersection of design, development and artificial intelligence. I enjoy creating digital experiences that feel simple, modern and interactive.",
  aboutParagraphs: [
    "I'm Rana Zaman Qamar, an aspiring AI web designer and developer based in Gujranwala, Pakistan — focused on creating modern, interactive websites where design, code and artificial intelligence meet.",
    "I'm currently studying BS Computer Science at UCP Gujranwala, building my skills through personal projects, university work and hands-on experimentation with AI-assisted development.",
    "My craft sits between visual design and frontend development: clean layouts, thoughtful typography, responsive interfaces and subtle motion that make digital experiences feel simple and alive.",
    "Alongside design and development, I've studied guest blogging and work with SEO fundamentals — so sites can look sharp and still be discoverable.",
    "I'm driven by curiosity and clarity — learning in public, experimenting honestly and improving how things look and work for the people who use them.",
  ],
  contactHeading: "Let's build something interesting.",
  contactSupport:
    "Have an idea, experiment or project in mind? Let's create something thoughtful together.",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "#contact" },
] as const;
