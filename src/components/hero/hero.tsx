import BackgroundImage from '../background-image/backgroundImage';
import Button from '../button/button';
import Card from '../card/card';
import bg from '../../../public/assets/images/build.svg';

export default function Hero() {
  return (
    <div className="w-full h-full flex flex-row-reverse md:gap-12 2xl:gap-20">
      <BackgroundImage imageUrl={bg} className="w-1/2" />

      <div className="w-1/2 flex-1 flex flex-col items-start md:gap-12 2xl:gap-14 md:py-24 2xl:py-36 md:pl-20 2xl:pl-40">
        <div className="flex flex-col items-start justify-center gap-6">
          <h1 className="sm:text-3xl md:text-4xl 2xl:text-5xl font-semibold pr-40 2xl:pr-5">
            Discover Your Dream Property with Estatein
          </h1>
          <h2 className="sm:text-base md:text-md 2xl:text-lg text-gray-600">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </h2>
        </div>

        <div className="flex justify-center gap-4 2xl:gap-5">
          <Button href="#" buttonText="Learn More" buttonStyle="secondary" />
          <Button href="#" buttonText="Browse Properties" />
        </div>

        <div className="flex justify-center gap-5">
          <Card title="200+" subtitle="Happy Customers" />
          <Card title="10k+" subtitle="Properties For Clients" />
          <Card title="16+" subtitle="Years of Experience" />
        </div>
      </div>
    </div>
  );
}
