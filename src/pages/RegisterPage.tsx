import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { FormField } from '../components/ui/FormField';
import { RadioGroup } from '../components/ui/RadioGroup';
import { useAuth } from '../context/AuthContext';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, isAgency: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phoneNumber || !formData.email || !formData.password || !formData.companyName) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      register({
        fullName: formData.fullName,
        email: formData.email,
      });
      navigate('/account');
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    return (
      formData.fullName &&
      formData.phoneNumber &&
      formData.email &&
      formData.password &&
      formData.companyName
    );
  };

  return (
    <Container className="flex flex-col justify-start bg-white">
      <div className="px-6 py-12 w-full max-w-md mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Create your PopX account
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          <FormField
            id="fullName"
            name="fullName"
            label="Full Name*"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            required
            aria-required="true"
            placeholder="Enter your full name"
          />
          
          <FormField
            id="phoneNumber"
            name="phoneNumber"
            label="Phone number*"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            aria-required="true"
            placeholder="Enter your phone number"
          />
          
          <FormField
            id="email"
            name="email"
            label="Email address*"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
            placeholder="Enter your email address"
          />
          
          <FormField
            id="password"
            name="password"
            label="Password*"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            aria-required="true"
            placeholder="Enter your password"
          />
          
          <FormField
            id="companyName"
            name="companyName"
            label="Company name*"
            type="text"
            value={formData.companyName}
            onChange={handleChange}
            required
            aria-required="true"
            placeholder="Enter company name"
          />
          
          <div className="mt-4">
            <p className="text-sm font-medium text-purple-600 mb-3">
              Are you an Agency?*
            </p>
            <RadioGroup
              name="isAgency"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
              selected={formData.isAgency}
              onChange={handleRadioChange}
            />
          </div>
          
          <Button 
            type="submit" 
            variant="primary" 
            className="w-full mt-8 text-base font-normal"
            disabled={isSubmitting || !isFormValid()}
          >
            {isSubmitting ? 'Creating...' : 'Create Account'}
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default RegisterPage;