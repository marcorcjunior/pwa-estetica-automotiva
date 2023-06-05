import './index.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    AppBar,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography
} from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = ({ title, goBack = false, exit = false }) => {
    let navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const sair = () => {
        localStorage.removeItem('token');
        handleClose();
        navigate('/');
    }

    return (
        <AppBar position="static">
            <Toolbar>
                {
                    goBack ? (
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => navigate(-1)}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                    ) : null
                }
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>
                {
                    exit ? (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircleIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={() => navigate('/perfil')}>
                                    {localStorage.getItem('email')}
                                </MenuItem>
                                <MenuItem onClick={sair}>
                                    Sair
                                </MenuItem>
                            </Menu>
                        </div>
                    ) : null
                }

            </Toolbar>
        </AppBar>
    );
}

export default Header;