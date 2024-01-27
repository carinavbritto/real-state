import React from 'react';

interface UserInfoProps {
  name: string;
  city: string;
  imageUrl: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, city, imageUrl }) => {
  return (
    <div className="flex items-center gap-4">
      <img
        src={imageUrl}
        alt={`Profile picture of ${name}`}
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{city}</p>
      </div>
    </div>
  );
};

export default UserInfo;
