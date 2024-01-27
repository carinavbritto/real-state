import Link from 'next/link';
import SocialButtons from '../social-buttons/socialButtons';

export default function FooterRights() {
  return (
    <div className="flex flex-row justify-between items-center py-6 md:px-20 2xl:px-40 bg-gray-10 text-white-0">
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
  );
}
