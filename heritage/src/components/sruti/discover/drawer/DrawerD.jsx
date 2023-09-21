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
// import ViewImage from "../image/ViewImage";
// import { CardMedia } from "@mui/material";
// import Imag from "../Imag";

// const drawerWidth = 170;

export default function DrawerD() {
  const [val, setVal] = React.useState(1);
  let a;
  console.log(a,"a");
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
        image: [
          "https://th.bing.com/th?id=OIP.Bw_xQ5fNIAjXTkIclE4NjAHaE5&w=307&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
          "data:image/jpeg;base64,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",
        ],
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
        <Typography
          sx={{display:"flex"}}
          component="img"
          src="https://th.bing.com/th?id=OIP.Bw_xQ5fNIAjXTkIclE4NjAHaE5&w=307&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
        ></Typography>
      </Box>
    </Box>
  );
}
