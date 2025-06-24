import React from 'react';
import { cn } from '@/lib/utils';

interface LoginPageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * LoginPageLayout provides the main structure for the login page.
 * It creates a full-screen, centered container for the login form.
 *
 * @param {LoginPageLayoutProps} props The component props.
 * @param {React.ReactNode} props.children The content to be rendered and centered.
 * @param {string} [props.className] Optional additional CSS classes to apply to the main container.
 * @returns {React.ReactElement} The rendered layout component.
 */
const LoginPageLayout: React.FC<LoginPageLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex flex-col items-center justify-center min-h-screen bg-background p-4',
        className
      )}
    >
      {children}
    </main>
  );
};

export default LoginPageLayout;
