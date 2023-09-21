import * as React from "react";
import { useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Avatar, Link } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import BookIcon from "@mui/icons-material/Book";
import "./css.css";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const navigate = useNavigate();
  const navigatetoHome = () => {
    navigate("/");
  };
  const navigatetoTravel = () => {
    navigate("/");
  };
  const navigatetoCalendar = () => {
    navigate("/");
  };
  const navigatetoDrafts = () => {
    navigate("/");
  };
  const navigatetoUpgrade = () => {
    navigate("/");
  };
  const navigatetoBlog = () => {
    navigate("/blog");
  };
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ background: "orange" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Profile
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ backgroundColor: "orange" }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ backgroundColor: "orange" }}>
          {["Home", "Travel", "Calendar", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? (
                    <Link onClick={navigatetoHome}>
                      <HomeIcon />
                    </Link>
                  ) : (
                    ""
                  )}
                  {index === 1 ? (
                    <Link onClick={navigatetoTravel}>
                      <FlightTakeoffIcon />
                    </Link>
                  ) : (
                    ""
                  )}
                  {index === 2 ? (
                    <Link onClick={navigatetoCalendar}>
                      <CalendarMonthIcon />
                    </Link>
                  ) : (
                    ""
                  )}
                  {index === 3 ? (
                    <Link onClick={navigatetoDrafts}>
                      <MailIcon />
                    </Link>
                  ) : (
                    ""
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List sx={{ backgroundColor: "orange" }}>
          {["Upgrade", "Blog"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => {
                  `navigateto${text}`;
                }}
              >
                <ListItemIcon>
                  {index === 0 ? (
                    <Link onClick={navigatetoUpgrade}>
                      <WorkspacePremiumIcon />
                    </Link>
                  ) : (
                    <Link onClick={navigatetoBlog}>
                      <BookIcon />
                    </Link>
                  )}
                </ListItemIcon>

                {index === 0 ? (
                  <Link
                    onClick={navigatetoUpgrade}
                    sx={{ textDecoration: "none", color: "black" }}
                  >
                    <ListItemText primary={text} />
                  </Link>
                ) : (
                  <Link
                    onClick={navigatetoBlog}
                    sx={{ textDecoration: "none", color: "black" }}
                  >
                    <ListItemText primary={text} />
                  </Link>
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <div className="mainDiv">
          <div className="upperDiv">
            <div className="profile">
              <Typography variant="h5" sx={{ fontFamily: "initial" }}>
                Name
              </Typography>
              <Divider />
              <Typography variant="h6" sx={{ fontFamily: "initial" }}>
                Team_Carnival
              </Typography>

              <br />
              <Typography variant="h5" sx={{ fontFamily: "initial" }}>
                Username
              </Typography>
              <Divider />
              <Typography variant="h6" sx={{ fontFamily: "initial" }}>
                Team Carnival
              </Typography>

              <br />
              <Typography variant="h5" sx={{ fontFamily: "initial" }}>
                E-mail
              </Typography>
              <Divider />
              <Typography variant="h6" sx={{ fontFamily: "initial" }}>
                teamcarnival@gmail.com
              </Typography>

              <br />
              <Typography variant="h5" sx={{ fontFamily: "initial" }}>
                Created on
              </Typography>
              <Divider />
              <Typography variant="h6" sx={{ fontFamily: "initial" }}>
                **/**/2023
              </Typography>

              <br />
              <Typography variant="h5" sx={{ fontFamily: "initial" }}>
                BioGraphy
              </Typography>
              <Divider />
              <Typography variant="h6" sx={{ fontFamily: "initial" }}>
                Team Carnival is a website where you can explore the beauty of
                India and get to know better about its heritage, culture and
                traditions.
              </Typography>
              <br />
            </div>
            <div className="avatar">
              <Avatar
                alt=""
                src="/static/images/avatar/2.jpg"
                sx={{ width: "20vw", height: "30vh" }}
              />
            </div>
          </div>
          <div className="lowerDiv">
            <Typography variant="h4">Statistical report</Typography>
          </div>
        </div>
      </Main>
    </Box>
  );
}