import Link from 'next/link';

export default function SocialButtons() {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-3">
        <li>
          <Link href="/">Facebook</Link>
        </li>
        <li>
          <Link href="/">LinkedIn</Link>
        </li>
        <li>
          <Link href="/">X</Link>
        </li>
        <li>
          <Link href="/">Instagram</Link>
        </li>
      </ul>
    </nav>
  );
}
