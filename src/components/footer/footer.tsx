import Image from 'next/image';
import FooterNavigationBar from '../footer-navigation-bar/footerNavigationBar';
import logo from '../../../public/assets/images/logo.svg';
import FooterRights from '../footer-rights/footer-rights';
import FooterForm from '../footer-form/footer-form';

export default function Footer() {
  const homeLinks = {
    title: 'Home',
    otherLinks: [
      { title: 'Hero Section', href: '#' },
      { title: 'Features', href: '#' },
      { title: 'Properties', href: '#' },
      { title: 'Testimonials', href: '#' },
      { title: 'FAQ’s', href: '#' }
    ]
  };

  const aboutUsLinks = {
    title: 'About Us',
    otherLinks: [
      { title: 'Our Story', href: '#' },
      { title: 'Our Works', href: '#' },
      { title: 'How It Works', href: '#' },
      { title: 'Our Team', href: '#' },
      { title: 'Our Clients', href: '#' }
    ]
  };

  const propertiesLinks = {
    title: 'Properties',
    otherLinks: [
      { title: 'Portfolio', href: '/portfolio' },
      { title: 'Categories', href: '/categories' }
    ]
  };

  const servicesLinks = {
    title: 'Services',
    otherLinks: [
      { title: 'Valuation Mastery', href: '/valuation-mastery' },
      { title: 'Strategic Marketing', href: '/strategic-marketing' },
      { title: 'Negotiation Wizardry', href: '/negotiation-wizardry' },
      { title: 'Closing Success', href: '/closing-success' },
      { title: 'Property Management', href: '/property-management' }
    ]
  };

  const contactUsLinks = {
    title: 'Contact Us',
    otherLinks: [
      { title: 'Contact Form', href: '/contact-form' },
      { title: 'Our Offices', href: '/our-offices' }
    ]
  };

  return (
    <footer>
      <div className="py-20 bg-gray-08 md:px-20 2xl:px-40">
        <div className="flex justify-between items-start gap-20">
          <div className="flex flex-col items-between justify-center gap-7">
            <Image src={logo} width={114} height={34} alt="Estatein Logo" />

            <FooterForm />
          </div>

          <FooterNavigationBar {...homeLinks} />
          <FooterNavigationBar {...aboutUsLinks} />
          <FooterNavigationBar {...propertiesLinks} />
          <FooterNavigationBar {...servicesLinks} />
          <FooterNavigationBar {...contactUsLinks} />
        </div>
      </div>
      <FooterRights />
    </footer>
  );
}
