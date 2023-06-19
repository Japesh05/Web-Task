import Logo from "/src/assets/Logo.svg";
import fb from "/src/assets/logos/fb.svg";
import twitter from "/src/assets/logos/twitter.svg";
import insta from "/src/assets/logos/insta.svg";
import dribble from "/src/assets/logos/dribble.svg";
import linkedin from "/src/assets/logos/linkedin.svg";
import { NavLink } from "react-router-dom";

const data = [
  {
    address: {
      number: "+123 654 987",
      street: "877 The Bronx, NY",
      country: "14568, USA",
    },
    copyright: "Copyright ©2020 INWOOD. All Rights Reserved",
    links: [
      { "My Account": ["Sign In", "Register", "Order Status"] },
      { Help: ["Shipping", "Returns", "Sizing"] },
      { Shop: ["All products", "Bedroom", "Dinning Room"] },
      { "Legal Stuff": ["Shipping & Delivery", "Terms & Conditions", "Privacy & Policy"] },
    ],
  },
];

export default function Footer_bottom() {
  return (
    <div className="footer-bottom">
      <div className="footer-logo">
        <div className="company-logo">
          <img src={Logo} alt="company logo" />
        </div>
        <div className="social-links">
          <img src={fb} alt="facebook logo" />
          <img src={insta} alt="insta logo" />
          <img src={linkedin} alt="linkedin logo" />
          <img src={dribble} alt="dribble logo" />
          <img src={twitter} alt="twitter logo" />
        </div>
      </div>
      <div className="footer-address">
        <h2>Address</h2>
        {data.map((el, index) => (
          <div key={index} className="footer-address-content">
            <div className="number">{el.address.number}</div>
            <div className="street">{el.address.street}</div>
            <div className="country">{el.address.country}</div>
          </div>
        ))}
      </div>
      <div className="footer-nav-links">
        {data[0].links.map((el, index) => (
          <div className="links-content" key={index}>
            <h1>{Object.keys(el)[0]}</h1>
            {el[Object.keys(el)[0]].map((el, index) => (
              <div className="three-links" key={index}>
                <NavLink>{el}</NavLink>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="copyright-message">
        {data.map((el, index) => (
          <p key={index}>{el.copyright}</p>
        ))}
      </div>
    </div>
  );
}
