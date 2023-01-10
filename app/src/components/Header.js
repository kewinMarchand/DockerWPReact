import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

export function Header(props) {
    const {siteInfos} = props;

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Box sx={{ flexGrow: 1 }}>
                    <a href={siteInfos.url} style={{color: 'inherit', textDecoration: 'unset'}}>
                        <Typography component={"h1"} variant={"h6"}>
                            {siteInfos.name}
                        </Typography>
                    </a>
                    <Typography component={"h2"} variant={"body1"}>
                        {siteInfos.description}
                    </Typography>
                </Box>
                <Box component={'ul'} sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                    {siteInfos.menu.length && siteInfos.menu.map(item => (
                        <li key={item.id}>
                            <a href={item.url} style={{color: 'inherit', textDecoration: 'unset'}}>
                                {item.title}
                            </a>
                        </li>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    )
}