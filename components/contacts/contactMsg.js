import React, { useEffect, useState } from "react";

async function sendContactData(contactDetails) {
    console.log(contactDetails)
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contactDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Something wrong!!!");
    }
  }



function ContactMsg() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
      setEnteredMessage("");
      setEnteredName("");
      setEnteredEmail("");
    } catch (error) {
      setRequestStatus("error");
    }
    //add client side validation
  }

  return (

    <div className="card">
      <div className="card-body">
          <form onSubmit={sendMessageHandler}>
        <div className="form-header blue accent-1">
          <h3>
            <i className="fas fa-envelope"></i> Susisiekite su mumis:
          </h3>
        </div>

        <br />
        <div className="md-form">
          <i className="fas fa-envelope prefix grey-text"></i>
          <label htmlFor="email">El.paštas</label>
          <input
            type="text"
            id="email"
            required
            value={enteredEmail}
            className="form-control"
            onChange={(event)=>setEnteredEmail(event.target.value)}
          />
        </div>
        <div className="md-form">
          <i className="fas fa-user prefix grey-text"></i>
          <label htmlFor="name">Vardas</label>
          <input
            type="text"
            id="name"
            required
            value={enteredName}
            onChange={(event) => setEnteredName(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="md-form">
          <i className="fas fa-pencil-alt prefix grey-text"></i>
          <label htmlFor="message"> Tekstas</label>
          <textarea
            id="message"
            className="form-control md-textarea"
            required
            rows="3"
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-light-blue">Siųsti pranešimą</button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default ContactMsg;
