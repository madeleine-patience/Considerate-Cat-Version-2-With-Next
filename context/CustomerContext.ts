import { createContext } from 'react';

export interface CustomerContextType {
  hasClosedEmailModal: boolean;
  setHasClosedEmailModal: () => void;
}

export const defaultCustomerContext: CustomerContextType = {
  hasClosedEmailModal: false,
  setHasClosedEmailModal: () => {
    throw new Error(
      'setHasClosedEmailModal called outside of CustomerProvider'
    );
  }
};

export const CustomerContext = createContext<CustomerContextType>(
  defaultCustomerContext
);
