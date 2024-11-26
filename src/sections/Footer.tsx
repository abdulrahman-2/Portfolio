import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100013012951638&mibextid=ZbWKwL",
  },
  {
    title: "Twitter",
    href: "https://x.com/abdulrahmaan_40?s=21&t=UcUU__rMJXUKXMUwFp1R8A",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/abdulrahman__attallah/profilecard/?igsh=YjhxdjdzbjFyM3o1",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/abdulrahman-attallah-052888241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    title: "Github",
    href: "https://github.com/abdulrahman-2",
  },
];

const Footer = () => {
  return (
    <footer className="pt-4 relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div
          className="border-t border-white/15 text-sm flex flex-col 
            md:flex-row md:justify-between items-center justify-center gap-8 py-6"
        >
          <div className="text-white/40">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </div>
          <nav className="flex flex-col items-center md:flex-row gap-8 md:gap-4 lg:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRight className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
