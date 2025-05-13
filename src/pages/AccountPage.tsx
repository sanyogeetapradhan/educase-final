import React from 'react';
import { Container } from '../components/ui/Container';
import { ProfileCard } from '../components/ProfileCard';
import { useAuth } from '../context/AuthContext';

const AccountPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <div className="w-full max-w-md mx-auto">
        <h1 className="text-xl font-medium text-gray-700 px-4 py-4 border-b border-gray-200">
          Account Settings
        </h1>
        
        {user && (
          <ProfileCard
            name={user.fullName || 'User'}
            email={user.email}
            imageUrl="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
            description="Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam"
          />
        )}
      </div>
    </Container>
  );
};

export default AccountPage;