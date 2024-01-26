import Image from 'next/image';
import FooterNavigationBar from '../footer-navigation-bar/footerNavigationBar';
import Link from 'next/link';
import SocialButtons from '../social-buttons/socialButtons';
import logo from '../../../public/assets/images/logo.svg';

export default function Footer() {
  return (
    <footer className="pt-28 md:px-20 2xl:px-40 py-4">
      <div className="flex justify-between items-start p-5">
        <div className="flex flex-col items-between justify-center gap-7">
          <Image src={logo} width={160} height={48} alt="Estatein Logo" />

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
          />
        </div>

        <FooterNavigationBar />
        <FooterNavigationBar />
        <FooterNavigationBar />
        <FooterNavigationBar />
        <FooterNavigationBar />
      </div>

      <div className="flex flex-row justify-between items-center pt-28">
        <div className="flex items-center justify-center gap-3">
          <p className="sm:text-sm md:text-sm 2xl:text-lg">
            @2023 Estatein. All Rights Reserved.
          </p>
          <Link
            href="#"
            className="sm:text-sm md:text-sm 2xl:text-lg underline text-white"
          >
            Terms & Condition
          </Link>
        </div>
        <SocialButtons />
      </div>
    </footer>
  );
}
