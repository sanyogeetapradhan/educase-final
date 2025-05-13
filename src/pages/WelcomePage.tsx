import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

const WelcomePage: React.FC = () => {
  return (
    <Container className="flex flex-col justify-start bg-white">
      <div className="px-6 py-12 w-full max-w-md mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Welcome to PopX
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
        <div className="space-y-3">
          <Link to="/register" className="block w-full">
            <Button variant="primary" className="w-full text-base font-normal">
              Create Account
            </Button>
          </Link>
          
          <Link to="/login" className="block w-full">
            <Button variant="secondary" className="w-full text-base font-normal">
              Already Registered? Login
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default WelcomePage;