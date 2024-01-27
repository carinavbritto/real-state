import Card from '@/components/card/card';
import ProductInfo from '@/components/product-info/product-info';
import Hero from '../components/hero/hero';
import Button from '@/components/button/button';
import { IoBed, IoHome } from 'react-icons/io5';
import { PiBathtubFill } from 'react-icons/pi';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <Hero />
      <Card
        title="Seaside Serenity Villa"
        subtitle="A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More"
        image={
          <img
            src="/public/assets/properties/propertie1.png"
            alt="Seaside Serenity Villa"
          />
        }
        infoComponent={
          <ProductInfo
            tags={[
              { icon: <IoBed />, text: '4-Bedroom' },
              { icon: <PiBathtubFill />, text: '3-Bathroom' },
              { icon: <IoHome />, text: 'Villa' }
            ]}
            price="$550,000"
            button={
              <Button
                buttonText="View Property Details"
                buttonStyle="primary"
              />
            }
          />
        }
      />
    </main>
  );
}
