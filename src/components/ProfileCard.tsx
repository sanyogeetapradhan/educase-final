import React from 'react';
import { Camera } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  email: string;
  imageUrl: string;
  description: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  email,
  imageUrl,
  description,
}) => {
  return (
    <div className="p-4">
      <div className="flex items-start mb-4">
        <div className="relative mr-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src={imageUrl}
              alt={`${name}'s profile`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-1">
            <Camera size={12} className="text-white" />
          </div>
        </div>
        
        <div>
          <h2 className="font-medium text-gray-900">{name}</h2>
          <p className="text-gray-500 text-sm">{email}</p>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm leading-relaxed border-t border-b border-gray-200 py-4">
        {description}
      </p>
    </div>
  );
};