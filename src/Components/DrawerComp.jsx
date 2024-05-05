import * as React from 'react';
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, ListItem} from '@mui/material';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

export default function CustomDrawer(){
    const [open, setOpen] = React.useState(false);
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{width: "250px"}} onClick={toggleDrawer(false)}>
            <List>
                {settings.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {/* Add an icon here if needed */}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <React.Fragment>
            <Button onClick={toggleDrawer(true)}><MenuIcon/></Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </React.Fragment>
    );
}
