import Link from 'next/link';

interface FooterNavigationBarProps {
  title?: string;
  otherLinks: { title: string; href: string; }[];
}

const FooterNavigationBar: React.FC<FooterNavigationBarProps> = ({
  title,
  otherLinks
}) => {
  return (
    <nav className="flex flex-col items-start justify-between gap-6">
      <h6 className="text-gray-60 text-lg">{title}</h6>

      <ul className="flex flex-col items-start justify-between gap-5 text-white-0">
        {otherLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.href} passHref className="hover:text-purple-60">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNavigationBar;
