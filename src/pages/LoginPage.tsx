import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { FormField } from '../components/ui/FormField';
import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) return;
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      login({ email });
      navigate('/account');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="flex flex-col justify-start bg-white">
      <div className="px-6 py-12 w-full max-w-md mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Signin to your PopX account
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            id="email"
            label="Email Address*"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            required
            aria-required="true"
          />
          
          <FormField
            id="password"
            label="Password*"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
            aria-required="true"
          />
          
          <Button 
            type="submit" 
            variant="neutral" 
            className="w-full mt-6 text-base font-normal"
            disabled={isSubmitting || !email || !password}
          >
            {isSubmitting ? 'Signing in...' : 'Login'}
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;