'use client';

import React, { PropsWithChildren } from 'react';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { Alfajores, Celo } from '@celo/rainbowkit-celo/chains';
import celoGroups from '@celo/rainbowkit-celo/lists';
import { RainbowKitProvider, lightTheme } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { ApolloClientProvider } from './apollo_provider';

// import '@celo/react-celo/lib/styles.css';

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID as string; // get one at https://cloud.walletconnect.com/app

const { chains, publicClient } = configureChains([Celo], [publicProvider()]);

const connectors = celoGroups({
  chains,
  projectId,
  appName: (typeof document === 'object' && document.title) || 'Chamaa',
});

const appInfo = {
  appName: 'Chamaa',
};

const wagmiConfig = createConfig({
  connectors,
  publicClient: publicClient,
});
export default function Providers({ children }: PropsWithChildren) {
  return (

    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        appInfo={appInfo}
        coolMode={true}
        theme={lightTheme({
          accentColor: '#35F1CE',
          accentColorForeground: '#000',
          borderRadius: 'large',
        })}
      >
        <ApolloClientProvider>
        {children}

        </ApolloClientProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
