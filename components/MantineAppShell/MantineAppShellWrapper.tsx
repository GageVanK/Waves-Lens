import { ActionIcon, AppShell, Container, Group, MantineProvider, Tooltip } from '@mantine/core';
import { RiArrowRightDoubleLine, RiArrowLeftDoubleLine } from 'react-icons/ri';
import { useDisclosure } from '@mantine/hooks';
import { MantineHeader } from '@/components/MantineAppShell/MantineHeader/MantineHeader';

export function MantineAppShell({ children }: any) {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  
    return (
 
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
    
       {children}
       
        </Container>
        </AppShell.Main>
     </AppShell>
   
    );
  }