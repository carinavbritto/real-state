import Link from 'next/link';

export default function NavigationBar() {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-3">
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
