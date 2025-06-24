import React from 'react';
import LoginPageLayout from '@/components/layout/LoginPageLayout';
import LoginForm from '@/components/LoginPage/LoginForm';

/**
 * IndexPage serves as the main entry point for the application, 
 * displaying the login interface.
 * It utilizes the LoginPageLayout to center the LoginForm component.
 */
const IndexPage: React.FC = () => {
  return (
    <LoginPageLayout>
      <LoginForm />
    </LoginPageLayout>
  );
};

export default IndexPage;
