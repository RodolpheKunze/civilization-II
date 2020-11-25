import React, { useEffect, ReactElement } from 'react';
import ReactGA from 'react-ga';

function WithAnalytics<P>(WrappedComponent: React.ComponentType<P>): React.ComponentType<P> {
  const ComponentWithHoc = (props: P): ReactElement => {
    useEffect(() => {
      // Inicializa o Google Analytics
      ReactGA.initialize('G-C5BDMKCQ31');

      // Avisa o Google Anaylytics
      ReactGA.set({ page: window.location.pathname });
      ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithHoc;
}

export default WithAnalytics;
