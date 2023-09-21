import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { CardMedia } from "@mui/material";
// import Imag from "../Imag";

// const drawerWidth = 170;

export default function DrawerD() {
  const [val, setVal] = React.useState(1);
  let list = [
    {
      title: "East",
      id: 1,
      head: [
        "Meghalaya",
        "Manipur",
        "Arunacha Pradesh",
        "Assam",
        "Mizoram",
        "Sikkim",
        "Nagaland",
        "West Bengal",
        "Bihar",
        "Jharkhand",
        "Odisha",
        "Andaman and Nicobar Islands",
      ],
    },
    {
      title: "West",
      id: 2,
      head: [
        "Goa",
        "Gujarat",
        "Maharashtra",
        "Daman and Diu",
        "Dadra",
        "Nagar Haveli",
      ],
    },
    {
      title: "North",
      id: 3,
      head: [
        "Punjab",
        "Rajasthan",
        "Haryana",
        "Himachal Pradesh",
        "Delhi",
        "Chandigarh",
        "Ladakh",
        "Jammu and Kashmir",
      ],
    },
    {
      title: "South",
      id: 4,
      head: [
        "Andhra Pradesh",
        "Karnataka",
        "Kerala",
        "Tamil Nadu",
        "Telangana",
      ],
    },
  ];
  let viewList = [
    {
      id: 1,
      userName: "UserId1",
      tittle: "Konark Temple",
      subDes:
        "Konark Temle Aka The Sun Temple is situated 36 kms from Puri in Odisha. The present Sun temple in Konark is also known as 'Black pagoda'. Kona means corner and arka means Sun . ",
      //   body3:"The Konark Sun Temple, also known as the Black Pagoda, was constructed during the 13th century under the reign of King Narasimhadeva I of the Eastern Ganga Dynasty. The temple was built to honor the sun god, Surya, and served as a place of worship and a center for astronomical and astrological studies.",
      body2:
        "The height of the temple is 228 feet . The temple is fitted with 24 wheels and 7 horses in the form of a chariot of Sun God . Its architecture and sculptures are a sheer poetry on stone . The Bengali poet Rabindranath Tagore was so moved by its beauty and said “Here the language of man is defeated by the language of the stone There are 3 forms of Sun God . The Southern side God called ” Mithra ” is described as the Rising sun is in 8’3″ in height . The western side is called ” Punsan ” is described as Mid ‐ day Sun its height is 9’6″ and the Northern side God is described as ” Haritasva ” is described as setting Sun , its height is 3.58 metres .The Sun temple was constructed as Chariot of Sun God . 24 wheels have been affixed to the platform. Each wheel 9’9″ in diameter having 8 spokes . The entire wheel is full of fine art works. The 24 wheels signifies 24 hours and 8 spokes signifies 8 Prahars ( 3 hour period ) of a day .There are 2 gorgeously caparisoned War Horses in front of the Southern side of Konark temple . They are each 10 feet long and 7 feet high . The sculptures depicts each of them with its massive strength and vigour tramping down a warrior. The figure of War Horse of Konark has been accepted as the symbol of the Odisha state government and her erstwhile martial glory .There are 2 majestic Lions in front of the Eastern door which is the main gate of the Konark Sun temple. The Lion is seen pressing down a big elephant which has caught hold of a man in its trunk . The entire block is made up of a single stone . The image is of 8’4″ length 4’9″ in breadth and its height is of 9’2″ and its said to weigh 27 .48 tonnes .Though this temple is not under worship now it has worshipped as Lord Suryanarayana temple in ancient times and the main deity is now installed in Jaganath temple Puri in the pragharas .They collect Rs. 40 as tickets per person and a garden is maintained within the complex and some renovation works are being done. Our vehicles are stopped at the parallel road itself and we had to walk both sides are shops with Odishan art works pipli applique and miniature of Jaganath idol and Konark",
      body1:
        "It takes about 2 hours to see the complete structure and steps are too high for old peoples , they could not climb , wheel chair are provided for them for that they charge extra . We as a group spent almost 3 hours and took as much as photos we could . Photography is allowed inside .The archeological department of India has taken this place . They are collecting funds to renovate . Light and sound shows are exhibited in the evening section and they collect a certain amount for tickets per head ",
      src: {
        image:
          "https://th.bing.com/th?id=OIP.Bw_xQ5fNIAjXTkIclE4NjAHaE5&w=307&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        video: ["", "", "", "", "", "", "", ""],
      },
    },
    {
      id: 2,
      userName: "UserId2",
      tittle: "",
      subDes: "",
      body1: "",
      body2: "",
      src: { image: "", video: "" },
    },
    {
      id: 3,
      userName: "UserId3",
      tittle: "",
      subDes: "",
      body1: "",
      body2: "",
      src: { image: "", video: "" },
    },
    {
      id: 4,
      userName: "UserId4",
      tittle: "",
      subDes: "",
      body1: "",
      body2: "",
      src: { image: "", video: "" },
    },
    {
      id: 5,
      userName: "UserId5",
      tittle: "",
      subDes: "",
      body1: "",
      body2: "",
      src: { image: "", video: "" },
    },
  ];
  // function display(para) {
  //   console.log(para, "which para");
  //   ret(<Imag {...para}/>)
  // }
  console.log(val, "which key");
  // console.log(e, "which e");
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: { xs: 100, md: 150 },
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: { xs: 120, md: 170 },
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
                  <ListItemButton onClick={() => setVal(el.id)}>
                    <Typography>{el.title}</Typography>
                  </ListItemButton>
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography noWrap component="img" src="https://th.bing.com/th?id=OIP.Bw_xQ5fNIAjXTkIclE4NjAHaE5&w=307&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"></Typography>
        {/* <CardMedia  /> */}
      </Box>
    </Box>
  );
}
