import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import Button from '../button/button';

export default function SocialButtons() {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-3">
        <li>
          <Button
            href="https://www.facebook.com/"
            icon={<FaFacebookF className="text-white" />}
            className="p-2 bg-gray-08"
            buttonStyle="rounded"
          />
        </li>
        <li>
          <Button
            href="https://www.instagram.com/"
            icon={<FaLinkedinIn className="text-white" />}
            className="p-2 bg-gray-08"
            buttonStyle="rounded"
          />
        </li>
        <li>
          <Button
            href="https://www.x.com/"
            icon={<RiTwitterXFill className="text-white" />}
            className="p-2 bg-gray-08"
            buttonStyle="rounded"
          />
        </li>
        <li>
          <Button
            href="https://www.youtube.com/"
            icon={<FaYoutube className="text-white" />}
            className="p-2 bg-gray-08"
            buttonStyle="rounded"
          />
        </li>
      </ul>
    </nav>
  );
}
