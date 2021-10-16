import React from "react";
import Logo from "./logo";

function Footer() {
  return (
    <>
        <div className=" light text-light">
          <div className="contact">
            <table>
              <tr>
                <td>
                  <Logo />
                </td>
                <td className="iconText">
                  We are a team of creatives who are
                  <br />
                  thrilled to create, ignite and succeed your
                  <br />
                  business with all the things digital.
                </td>
              </tr>
              <tr className="textYellow">Email</tr>
              <tr className="">priya@iconmediahouse.com</tr>
              <tr className="textYellow">Contact</tr>
              <tr>+1647-627-2546</tr>
            </table>
            <div className="quickLinks">
              <ul>
                <li className="heading">Quick Links</li>
                <li>About</li>
                <li>Careers</li>
                <li>Make Payment</li>
                <li>Reach Us</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="dark text-light">
          <small>Copyright</small>
          <small>Follow us</small>
        </div>
      <style jsx>{`
        .light {
          height: 300px;
          background-color: #333333;
          padding: 50px;
        }
        .dark {
          height: 50px;
          background-color: #191919;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 0 50px 0 50px;
        }
        .iconText {
          font-size: 12px;
          font-weight: normal;
          border-left: 1px solid #ffe462;
          padding-left: 10px;
        }
        .textYellow {
          color: #ffe462;
        }
        .contact {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .contact ul {
          list-style-type: none;
          width: 200px;
        }
        .contact ul li {
          margin-bottom: 20px;
        }
        .heading {
          border-bottom: 1px solid #ffe462;
          color: #ffe462;
        }
        @media screen and (max-width: 800px) {
          .light {
            height: 500px;
            padding: 20px 20px 0 20px;
          }
          .contact {
            display: flex;
            flex-direction: column;
          }
          .quickLinks {
            margin-top: 50px;
          }
          .contact ul {
            width: 100%;
            padding: 0;
          }
        }
      `}</style>
    </>
  );
}

export default Footer;
