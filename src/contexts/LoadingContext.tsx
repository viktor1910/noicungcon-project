import React, { useContext, useState } from 'react';
import LoadingIndicator from 'src/components/LoadingIndicator';

interface LoadingContextData {
  showLoading: (open: boolean) => void;
}

export const LoadingContext = React.createContext<LoadingContextData>({
  showLoading: () => {},
});

interface LoadingProviderProps {
  children: React.ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <LoadingContext.Provider
        value={{
          showLoading: (open: boolean) => setLoading(open),
        }}
      >
        {children}
      </LoadingContext.Provider>
      <LoadingIndicator open={loading} />
    </>
  );
};

export const useLoading = () => useContext(LoadingContext);
export default LoadingProvider;
