import { Toolbar } from "@mui/material";
import Footer from "../footer/footer";
import TopFooter from "../footer/TopFooter";
import NavBar from "../NavBar";
import Body from "../Body";
import "./Main.css"

function MainPage() {
   
   return(
      <div className="body">
         <>
         <NavBar/>
         </>
         <Toolbar/>
         <>
         <Body/>
         </>
         <TopFooter/>
         <Footer/>
      </div>
   
   )
}
export default MainPage;
