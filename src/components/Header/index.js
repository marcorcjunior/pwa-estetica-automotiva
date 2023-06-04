import './index.css';

import {
    AppBar,
    Toolbar,
    Typography
} from '@mui/material';

const Header = ({ title, icon }) => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {title}
            </Typography>
        </Toolbar>
    </AppBar>
);

export default Header;