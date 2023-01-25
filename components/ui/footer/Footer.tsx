import { cls } from "@/lib/classnames";
import Link from "next/link";

type Props = {
  className?: string;
};

const links: { href: string; name: string }[] = [
  {
    href: "/about",
    name: "About TMDB",
  },
  {
    href: "/about/staying-in-touch",
    name: "Contact us",
  },
  {
    href: "/privacy-policy",
    name: "Privacy policy",
  },
];

const Footer = (props: Props) => {
  const { className } = props;
  const footerClassnames = cls(["bg-dark-blue py-10 text-white", className]);

  return (
    <footer className={footerClassnames}>
      <div className="padded-section block sm:flex justify-between items-center">
        <span className="font-bold text-xl block mb-5">MoviesDBs</span>
        <div className="links flex flex-col sm:flex-row gap-4">
          {links.map((link) => (
            <Link
              className="hover:text-gray-400 block duration-300"
              key={link.href}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
