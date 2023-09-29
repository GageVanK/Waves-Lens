import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ActionIcon, AppShell, Container, Group, MantineProvider, Tooltip } from '@mantine/core';
import { theme } from '../theme';
import { RiArrowRightDoubleLine, RiArrowLeftDoubleLine } from 'react-icons/ri';
import { useDisclosure } from '@mantine/hooks';
import { MantineHeader } from '@/components/MantineAppShell/MantineHeader/MantineHeader';

export default function App({ Component, pageProps }: AppProps) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Mantine Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

       <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'md',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      aside={{
        width: 300,
        breakpoint: 'md',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
    >
      <AppShell.Header>
     <MantineHeader/>
        
      </AppShell.Header>
      <AppShell.Navbar>
        {desktopOpened ? (
        <>
         <Tooltip position="right-start" label="Close Sidebars">
      <ActionIcon onClick={toggleDesktop} visibleFrom="sm"  >
       <RiArrowLeftDoubleLine/>
     </ActionIcon>
     </Tooltip>
     </>
   
    ) : 
    <Tooltip position="right-start" label="Open Sidebars">
    <ActionIcon style={{position: 'fixed'}} onClick={toggleDesktop} visibleFrom="sm">
      <RiArrowRightDoubleLine/>
    </ActionIcon>
    </Tooltip>}
    
    </AppShell.Navbar>
    <AppShell.Aside>
  
 </AppShell.Aside>
 
      <AppShell.Main >
      {!desktopOpened ? (
          <Tooltip position="right-start" label="Open Sidebars">
      <ActionIcon onClick={toggleDesktop} visibleFrom="sm"  >
        <RiArrowRightDoubleLine/>
      </ActionIcon>
      </Tooltip>
    ) : null}
      <Container
    style={{
       
      flexDirection: 'column',
      width: '100%',
      margin: '0 auto',
      overflowX: 'hidden',
    }}
  
    size="responsive"
  >
  
      <Component {...pageProps} />
     
      </Container>
      </AppShell.Main>
   </AppShell>
    </MantineProvider>
  );
}
