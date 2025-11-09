import { PropsWithChildren, useState } from 'react';
import { CustomerContext } from './CustomerContext';

export function CustomerProvider({ children }: PropsWithChildren) {
  const [hasClosedEmailModal, setHasClosedEmailModal] = useState(false);

  return (
    <CustomerContext.Provider
      value={{
        hasClosedEmailModal,
        setHasClosedEmailModal
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}
