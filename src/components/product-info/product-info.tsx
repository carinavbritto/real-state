import React from 'react';

interface ProductInfoProps {
  tags: { icon: React.ReactNode; text: string; }[];
  price: string;
  button?: React.ReactNode;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ tags, price, button }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center gap-1 bg-gray-200 rounded-full px-2 py-1 text-white-0 bg-gray-10 border border-solid border-gray-15 hover:bg-purple-75 rounded-3xl px-3 py-2 text-sm font-medium"
          >
            {tag.icon}
            <span>{tag.text}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-10">
        <div className="flex flex-col items-start gap-1">
          <div className="text-gray-600 text-gray-60">Price</div>
          <div className="text-lg font-semibold text-white-0">{price}</div>
        </div>
        {button && <div>{button}</div>}
      </div>
    </div>
  );
};

export default ProductInfo;
