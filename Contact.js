import React, { useState } from "react";
import "./contact.css";

const Form = () => {
  //     const [info, setinfo] = useState({
  //       name: "",
  //       phone: "",
  //       email: "",
  //       subject: "",
  //       message: ""
  //     });

  //     const InputChnage = (event) => {
  //       console.log(event.target.value);
  //       console.log(event.target.name);

  //       const { value, name } = event.target;

  //       setinfo((preValue) => {
  //         return {
  //           ...preValue,
  //           [name]: value
  //         };
  //       });

  //       const onChange =() =>{
  //           event.preventDefault();
  //       }

  return (
    <>
      {/* <p>Hello, {}</p> */}
      <div className="container">
        <div className="contact-box">
          <div className="contact-left">
        </div>
          <div className="contact-right">
            <h3>Reach Us</h3>
            <table>
              <tr className="data1">
                <td>Email</td>
                <td>interiror333@gmail.com</td>
              </tr>
              <tr className="data2">
                <td>Phone</td>
                <td>+91 9440988370</td>
              </tr>
              <tr className="data3">
                <td>Adress</td>
                <td>
                K L Deemed to be University,
                  <br />
                  Green Fields, Vaddeswaram, 
                  Guntur District,
                  <br />
                 A.P., INDIA. {" "}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
