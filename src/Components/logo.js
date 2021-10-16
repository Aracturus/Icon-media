import React from "react";

function Logo() {
  return (
    <>
      <table>
        <tr>
          <td className="icon">Icon</td>
          <td className="logotext">
            Media
            <br />
            House
          </td>
        </tr>
      </table>
      <style jsx>{`
        .icon {
          font-size: 40px;
          text-transform: uppercase;
          font-weight: normal;
        }
        .logotext td {
            font-weight: bold;
            color:white !important;
          }
      `}</style>
    </>
  );
}

export default Logo;
