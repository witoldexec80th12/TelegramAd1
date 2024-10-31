'use client';

import { WebAppProvider, useExpand, useWebApp } from '@vkruglikov/react-telegram-web-app';
import { useEffect } from 'react';

const Container = ({ children }: { children: any }) => {
  return (
    <WebAppProvider
      options={{
        smoothButtonsTransition: true,
      }}
    >
      <Wrapper>{children}</Wrapper>
    </WebAppProvider>
  );
};

function Wrapper({ children }: { children: any }) {
  const [isExpanded, expand] = useExpand();
  const WebApp = useWebApp();

  useEffect(() => {
    if (WebApp) {
      expand();
      WebApp.isVerticalSwipesEnabled = false;
      document.body.style.height = `${WebApp.viewportStableHeight}px`;
    } // Set body tag height
  }, []);

  return (
    <div className='bg-white flex w-full h-full text-2xl'>
      {children}
    </div>
  );
}

export default Container;
