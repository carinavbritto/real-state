import Link from 'next/link';

export default function FooterNavigationBar() {
  return (
    <nav className="flex flex-col items-start justify-between gap-7">
      <h6>Home</h6>
      <ul className="flex flex-col items-start justify-between gap-5">
        <li>
          <Link href="/">Hero Section</Link>
        </li>
        <li>
          <Link href="/">Features</Link>
        </li>
        <li>
          <Link href="/">Properties</Link>
        </li>
        <li>
          <Link href="/">Testimonials</Link>
        </li>
        <li>
          <Link href="/">FAQ’s</Link>
        </li>
      </ul>
    </nav>
  );
}
