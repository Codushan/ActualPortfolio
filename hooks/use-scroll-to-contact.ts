import { useCallback } from 'react';

export function useScrollToContact() {
  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  }, []);

  return scrollToContact;
}