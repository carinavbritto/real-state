import Link from 'next/link';

export default function NavigationBar() {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-6 text-white-0 text-sm font-medium">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About Us</Link>
        </li>
        <li>
          <Link href="/">Properties</Link>
        </li>
        <li>
          <Link href="/">Services</Link>
        </li>
      </ul>
    </nav>
  );
}
