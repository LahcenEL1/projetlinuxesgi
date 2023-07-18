import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Divider, Drawer, Slide, useScrollTrigger } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import config from '../style/config';


interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

const pages = [
    { label: 'Home', route: '/' },
    { label: 'Create User', route: '/createuser' },
    { label: 'View User', route: '/viewusers' },

    { label: 'Create Articles', route: '/createarticles' },
    { label: 'View Articles', route: '/viewarticles' },

    { label: 'Create Comments', route: '/createcomments' },
    { label: 'View Comments', route: '/viewcomments' },

    { label: 'Compte', route: '/login' },
];

export default function CenteredTabs() {
    const [value, setValue] = React.useState(0);
    let navigate = useNavigate()
    return (
        <>
            <AppBar position='sticky' id="appbar"  enableColorOnDark sx={{ width: '100%', bgcolor: `${config.mainColor}` , zIndex: 100000, opacity: 1, borderBottom: `0.1px solid ${config.secondaryColor}` }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ padding: '0.7em 8px', display: 'flex', alignItems: 'center' }} onClick={() => navigate('/')}>
                            <img src={config.logo} alt="appBarlogo" style={{ width: "2.8em" }} />
                        </Box>
                        <Box sx={{ flexGrow: 1, justifyContent: 'end', display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.label}
                                    onClick={() => navigate(page.route)}
                                    sx={{ my: 2, color: `${config.thirdColor}`, display: 'block', m: 2 }}
                                >
                                    {page.label}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}