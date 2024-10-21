import { useEffect } from 'react';

const ContactForm: React.FC = () => {
  useEffect(() => {
    // Dynamically add the script
    const script = document.createElement('script');
    script.src = 'https://noteforms.com/widgets/iframe.min.js';
    script.type = 'text/javascript';
    script.async = true; // Load the script asynchronously
    script.onload = () => {
      // Initialize the embedded form after the script loads
      if (typeof window !== 'undefined' && (window as any).initEmbed) {
        (window as any).initEmbed('contact-form-lk0nt1');
      }
    };

    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      style={{ border: 'none', width: '100%' }}
      className='min-h-screen'
      id="contact-form-lk0nt1"
      src="https://noteforms.com/forms/contact-form-l0znps"
      title="Contact Form"
    />
  );
};

export default ContactForm;
