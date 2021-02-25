import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, Setmessage] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const DataObj = {
      name,
      email,
      subject,
      message,
    };
    alert(DataObj.message);
  };

  return (
    <div className="main contact-form">
      <section id="four">
        <div className="container">
          <h3>Contact Me</h3>
          <p>
            Integer eu ante ornare amet commetus vestibulum blandit integer in
            curae ac faucibus integer non. Adipiscing cubilia elementum integer.
            Integer eu ante ornare amet commetus.
          </p>
          <form id="form" onSubmit={onSubmit}>
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows="6"
                  value={message}
                  onChange={(e) => Setmessage(e.target.value)}
                ></textarea>
              </div>
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      className="primary"
                      value="Send Message"
                      onClick={() => onSubmit}
                    />
                  </li>
                  <li>
                    <input type="reset" value="Reset Form" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
          {/* <div id="error" className="display">
            <h1 id="error_msg"></h1>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Contact;
