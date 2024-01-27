import Image from 'next/image';
import NavigationBar from '../navigation-bar/navigationBar';
import logo from '../../../public/assets/images/logo.svg';
import Button from '../button/button';

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 md:px-20 2xl:px-40 bg-gray-10">
      <Image src={logo} width={114} height={34} alt="Estatein Logo" />

      <NavigationBar />

      <Button href="#" buttonText="Contact Us" buttonStyle="secondary" />
    </header>
  );
}
