import { useState } from 'react';
import { Toaster } from '../toaster/Toaster';
import EmailSignUpModal from '../emailSignupModal/EmailSignupModal';

const EmailSignUpToaster = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Toaster
        type='custom'
        image='/image/ToasterImage.png'
        message='Keep In Touch'
        onClick={handleOpenModal}
      />
      <EmailSignUpModal isOpen={isModalOpen} setIsOpen={handleCloseModal} />
    </>
  );
};

export default EmailSignUpToaster;
