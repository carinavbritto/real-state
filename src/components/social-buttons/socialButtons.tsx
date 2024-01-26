import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import Button from '../button/button';

export default function SocialButtons() {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-3">
        <li>
          <Button
            href="#"
            icon={<FaFacebookF className="text-white" />}
            className="text-white focus:outline-none rounded-full bg-gray-40 hover:bg-gray-15 border-none py-1 px-1"
          />
        </li>
        <li>
          <Button
            href="#"
            icon={<FaLinkedinIn className="text-white" />}
            className="text-white focus:outline-none rounded-full bg-gray-40 hover:bg-gray-15 border-none py-1 px-1"
          />
        </li>
        <li>
          <Button
            href="#"
            icon={<RiTwitterXFill className="text-white" />}
            className="text-white focus:outline-none rounded-full bg-gray-40 hover:bg-gray-15 border-none py-1 px-1"
          />
        </li>
        <li>
          <Button
            href="#"
            icon={<FaYoutube className="text-white" />}
            className="text-white focus:outline-none rounded-full bg-gray-40 hover:bg-gray-15 border-none py-1 px-1"
          />
        </li>
      </ul>
    </nav>
  );
}
