// import { useState } from "react";
import { useParams } from "react-router-dom";
// import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
// import Cal from "../../components/sruti/blogcall/Cal";
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export default function ViewBlog() {
  // const [single, setSingle] = useState({});
  const { id } = useParams();
  console.log(id, "id");
  //   console.log(viewList,"viewList");
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

  return (
    <>
      <div style={{backgroundColor:"ButtonShadow"}}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" color="inherit">
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "black",
                  textDecoration: "none",
                  flexGrow: 1,
                }}
              >
                CARNIVAL
              </Typography>
              <Button color="inherit">
                <a
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    letterSpacing: "1.7px",
                  }}
                  href="/"
                >
                  Write
                </a>
              </Button>
              <Button color="inherit">
                <a
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    letterSpacing: "1.7px",
                  }}
                  href="/"
                >
                  Sign-In
                </a>
              </Button>
              <Button color="inherit">
                <a
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    letterSpacing: "1.7px",
                  }}
                  href="/"
                >
                  Sign-Up
                </a>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Toolbar />
        <Toolbar />
        <div
          className="viewBlog"
          style={{ margin: "0 20%", backgroundColor: "ButtonShadow" }}
        >
          {viewList.map((el) => {
            if (el.id == id) {
              return (
                <>
                  <h1>{el.tittle}</h1>
                  <br />
                  <br />
                  <h3 style={{ fontStyle: "italic" }}>{el.subDes}</h3>
                  <br />
                  <div>
                    <hr></hr>
                    <br />
                    <br />
                    <Avatar
                      sx={{ marginLeft: "20%", width: "60%", height: "60%" }}
                      alt=""
                      src="/static/images/avatar/2.jpg"
                    />
                    <Typography
                      align="right"
                      sx={{ fontFamily: "serif", fontStyle: "oblique" }}
                    >
                      <br></br>~ by {el.userName} <br /> published on **/**/****
                      <br></br>
                      <br />
                      <p>Follow me on:</p>
                      <a href="/" className="cardBlog">
                        <img
                          style={{ width: "2rem", margin: "2px 2px" }}
                          src="data:image/png;base64,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"
                        ></img>
                      </a>
                      <a href="/" className="cardBlog">
                        <img
                          style={{ width: "2rem", margin: "2px 2px" }}
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEX////4+Pi3ubtvcnZNUVU+Q0cpLjLr6+x3en0sMTYkKS59gIORk5aUl5n8/Pzw8PFTV1tbX2Pc3d5DSEzn5+g3PECLjpFKTlKFh4qxs7XCxMUwNTq/wcLh4uPV1tZzd3o/Q0jOz9CmqKpjZ2qfoaSrd37mAAABPUlEQVR4AW3TBZKEMBAF0B8GCHzcnbW5/xm30qEyknklcU/DgQpuYRTHUXgLFHw6SemkmcYrlcd8kRYlnlQ1PU0Fp434Qde75Qd+1FUQKiRZjyGfTGNjKhWMmSQXYO3Ibao3MlqBnSRzADhk/ycAdcqclSSHnEUD+KLt8KalMQMqpl3izU5jKxHQGCq8Ud80fq4VfuFZaIyQO4wVPEre5g+RrIAPJrkQSL8OPjv3htQmH8guU5uwgseeP7ITMYBnpdFgvlJPcx0zoLjjzS/FDrVRvH6xsqDYlLx29huRUaFx6YuI1mhKMbddf9trEzca7rmRk/FxpiRXiJO8FDBURyb4yfO7glC8TOpacmAc4ElMEWlc2oGckjwvYVFEB5wjouE6uLBwquypQym/scKrM4njElYaJy182q15aDj/oQMZkS8JH3IAAAAASUVORK5CYII="
                        ></img>
                      </a>
                      <a href="/" className="cardBlog">
                        <img
                          style={{ width: "2rem", margin: "2px 2px" }}
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACtklEQVR4AeyVA5AkQRREZ862bTMcZ9u2wzrbtm3bWNvmaW3b3rzKRa+NOWVEDoqvqv//LZPtUpoubC2cLIxKMveyku1UmkYAG2EoyFYESFEgQIos346dX7K7YiFyN8iFB17Sxx4NRxzVdcbYO6aotke5cgB42sFXDGDjF4FM+UbGY+5TK9FXKQBKOKTtjNz68CMAdQ+oVjyAXPicoRtyS8M5GA0PqRGwgm9gxxdMf2SBkNhEZCoxORXbVH9CXllBWHOvCla9sQNPbegRit3qDmhyWL1SYkCKA7kIxvoH1MBrr5KZllJ/IWnK3zskZ/SXEIDB1vm0trAO6K5ndNCYN5DRz9tgWxdhfnc8pQ2madXdSmDb7CeWWPfOHite22LoDWMegiDFj4GJ983hFBLD9IOPcEB0AjZ8+S6daIeaAwJFG/v8ouJh4ROB3uf1sFHpB34GRSMmMRlJKalISE5hLEHJIRCjbptAXlyAmY8tEZ2QjOzaK4qSbHs6AItTdhHwvpU3N0ZB+hYQhcGXDTi//AFSUtNPW5SY3lX3KJc7gKSwuESYeIXByDMM4XFJyC1bv0i0PKbJoCx/ALewWMwSwccApZe9skFwTAKyiXEjPYZyBziq48zUlVK09j4VvLL3Q3ZFxCdh/D0z7lG+AHFJKVj03DrHwhxHqOzimjMeWZQ/QKQ42ZQH5jkW5u896o7IJmYJa0T5A/BqJ+S6Wv7eqebwH+A/QOUBTMwHYFdpAaY9tACrVqyYECPMOr9d1UF6Gx7QcgLb2McxfCOOu2uaB2CLyk/EJ6WPo4PEmtOLqgOsZK2Pa4IDSUvPeWKFXud1pRre94Ie5jy1kvqnC+AWxzTYn2Odnud0MSdjDM0i1ObXOvDVBQjNEFciMJrhKHJwH5FmDgIPfNds4DuniO75P3r6HNY9BwATNI1Cu+uNpgAAAABJRU5ErkJggg=="
                        ></img>
                      </a>
                      <br />
                      <br />
                      <hr></hr>
                    </Typography>
                  </div>
                  <br />
                  <br />
                  <br />
                  <p style={{ fontSize: "22px", fontStyle: "oblique" }}>
                    {el.body1}
                  </p>
                  <br />
                  <br />
                  <br />
                  <p style={{ fontSize: "22px", fontStyle: "oblique" }}>
                    {el.body2}
                  </p>
                  <br />
                  <br />
                  <h2
                    style={{
                      fontFamily: "fantasy",
                      letterSpacing: "1px",
                      fontSize: "20px",
                      textAlign: "center",
                    }}
                  >
                    Here are some photos taken:
                  </h2>
                  <br />
                  <img
                    style={{ width: "100%", borderRadius: "16px" }}
                    src={el.src.image}
                  ></img>
                </>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
