import React, {Component} from 'react';
import "./NavBar.css";
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button"
import { AppBar, Toolbar, IconButton, Typography, Avatar, withStyles, Menu, MenuItem, ListItemText, ListItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
}));

const StyledMenu = withStyles({
    paper:{
        border: '1px solid #d3d4d5',
        width: '100%',
        
    },
})(props => (
    <Menu
        elevation={5}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
))

const StyledMenuItem = withStyles(theme => ({
    root:{
        '&:focus':{
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-Root, & .MuiListItemText-primary':{
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem)

export default function NavBar(){

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography varient="h6" className={classes.title}>
                        <Link to="/">
                            <Avatar variant="rounded" id="logo" src={require("./images/avocado.png")} alt="avocado logo"/>
                        </Link>
                    </Typography>
                    <IconButton edge="end" className={classes.menuButton} color="inherit" onClick={handleClick}>
                            <MenuIcon/>
                    </IconButton>
                    <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                        <StyledMenuItem>
                            <ListItemText primary="Resources" />
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <ListItemText primary="Mission" />
                        </StyledMenuItem>
                        <Link to="/aboutUs">
                            <StyledMenuItem>
                                <ListItemText primary="About Us" />
                            </StyledMenuItem>
                        </Link>
                    </StyledMenu>
                </Toolbar>
            </AppBar>
        </div>
    );
}


/*

            <div className="NavBarContainer">
                <div id="logoContainer">
                    <Link to="/" className="topLinks">
                        <img id="logo" src={require("./images/avocado.png")} alt="avocado logo"/>
                    </Link>
                </div>

                <div id="links">
                    <Link className="topLinks" to="#">
                        <Button variant="outlined">
                            Resources<FaAngleDown/>
                        </Button>
                    </Link>
                    <Link className="topLinks" to="#">Mission</Link>         
                    <Link className="topLinks" to="/aboutUs">About Us</Link>
                </div>
            </div>
*/