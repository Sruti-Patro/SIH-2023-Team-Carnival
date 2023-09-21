import React from "react";
import "./footer.css";
const TopFooter = () => {
  return (
    <div className="footer" style={{ backgroundColor: "black" }}>
      <div className="sb__footer-section-padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links-div">
            {/* <a href="/">
              <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"></img>
            </a> */}
           
          </div>
          <div className="sb__footer-links-div">
            <a href="/">
              <p>cult.fit for business</p>
            </a>
            <a href="/">
              <p>t&c for business</p>
            </a>
            <a href="/">
              <p>cult.fit franchise</p>
            </a>
            <a href="/">
              <p>corporate partnerships</p>
            </a>
            <a href="/">
              <p>cult pass network</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
            <a href="/">
              <p>MORNING EXERCISES</p>
            </a>
            <a href="/">
              <p>HEALTHY RECEIPES</p>
            </a>
            <a href="/">
              <p>STRESS RELIEF YOGA</p>
            </a>
            <a href="/">
              <p>MIND PEACE MEDITATION</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
            <a href="/">
              <p>partner.fit</p>
            </a>
            <a href="/">
              <p>blogs</p>
            </a>
            <a href="/">
              <p>security</p>
            </a>
            <a href="/">
              <p>careers</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
            <a href="/">
              <p>contact us</p>
            </a>
            <a href="/">
              <p>privacy policy</p>
            </a>
            <a href="/">
              <p>cult bmi calculator</p>
            </a>
            <a href="/">
              <p>terms & conditions</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
            {/* <a href="https://itunes.apple.com/us/app/cure-fit/id1217794588">
              <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/icons/cult/appstore.svg"></img>
            </a>
            <a href="https://play.google.com/store/apps/details?id=fit.cure.android">
              <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/icons/cult/googleplay.svg"></img>
            </a> */}
            <a
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
              href="https://www.youtube.com/channel/UCSE72IaHOL-1Tv-m3JHE4Cg"
            >
              <img
                className="image"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/youtube.svg"
              ></img>
            </a>
            <a
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
              href="https://www.facebook.com/cultfitofficial"
            >
              <img
                className="image"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/fb-page.svg"
              ></img>
            </a>
            <a
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
              href="https://twitter.com/cultfitOfficial"
            >
              <img
                className="image"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/twitter-page.svg"
              ></img>
            </a>
            <a href="https://www.instagram.com/cultfitOfficial/">
              <img
                className="image"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/insta-page.svg"
              ></img>
            </a>
            <a
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
              href="https://www.linkedin.com/company/cult.fit/"
            >
              <img
                className="image"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/linked-in-page.svg"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
