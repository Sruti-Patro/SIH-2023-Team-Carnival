// import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// import AppBar from '@mui/material/AppBar';
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { ListItemText } from "@mui/material";
// import React from 'react';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 170;

export default function DrawerD() {
  // const [val, setVal] = React.useState("0");
  let list=[{
    title:"East",
    id:1,
    head:["Meghalaya", "Manipur","Arunacha Pradesh","Assam","Mizoram","Sikkim","Nagaland","West Bengal","Bihar","Jharkhand","Odisha"]
  },
  {
    title:"West",
    id:2,
    head:["Meghalaya", "Manipur","Arunacha Pradesh","Assam","Mizoram","Sikkim","Nagaland","West Bengal","Bihar","Jharkhand","Odisha"]
  },
  {
    title:"North",
    id:3,
    head:["Meghalaya", "Manipur","Arunacha Pradesh","Assam","Mizoram","Sikkim","Nagaland","West Bengal","Bihar","Jharkhand","Odisha"]
  },
  {
    title:"South",
    id:4,
    head:["Meghalaya", "Manipur","Arunacha Pradesh","Assam","Mizoram","Sikkim","Nagaland","West Bengal","Bihar","Jharkhand","Odisha"]
  },
  ];
  // console.log(val,"which key");
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {list.map((el) => (
              <>
              <ListItem key={el.title}>
                <ListItemButton>
                  {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> */}
                  <Typography>{el.title}</Typography>
                </ListItemButton>
              </ListItem>
               <Divider />
                 {el.head.map((el) => (
                   <ListItem key={el} disablePadding>
                     <ListItemButton>
                       <ListItemText primary={el} />
                     </ListItemButton>
                   </ListItem>
                 ))}
                  </> 
            ))}
          </List>
         
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph></Typography>
      </Box>
    </Box>
  );
}
