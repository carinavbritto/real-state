import Image from 'next/image';
import NavigationBar from '../navigation-bar/navigationBar';
import Link from 'next/link';
import logo from '../../../public/assets/images/logo.svg';

export default function Header() {
  return (
    <header className="flex items-center justify-between py-5 md:px-20 2xl:px-40">
      <Image src={logo} width={160} height={48} alt="Estatein Logo" />

      <NavigationBar />

      <Link href="#">Contact Us</Link>
    </header>
  );
}
