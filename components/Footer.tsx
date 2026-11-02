import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-gray-100 pb-10 md:pb-12">
      <div className="container-site border-t border-gray-200 pt-10 md:pt-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[clamp(17px,1.5vw,20px)] font-medium tracking-tight text-[#111]">
              {site.name}
            </p>
            <p className="mt-2 text-[15px] text-muted-nav">{site.location}</p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex gap-6 text-[15px]">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-nav transition-colors duration-300 hover:text-[#111]"
              >
                GitHub
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-nav transition-colors duration-300 hover:text-[#111]"
              >
                LinkedIn
              </a>
            </div>
            <p className="text-[14px] text-muted-nav">
              © 2026 {site.fullName.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
