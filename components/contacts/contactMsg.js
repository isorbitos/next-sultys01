import React, { useEffect, useState } from "react";
import Notification from "../ui/notification";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEnvelope, faUser, faPencilAlt} from "@fortawesome/free-solid-svg-icons"


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

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "sending message...",
      message: "Your message flying to db!!!",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!!!",
      message: "Your message in db!!!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Oppppsss",
      message: "Your message gone!!!",
    };
  }

  return (

    <div className="card">
      <div className="card-body">
          <form onSubmit={sendMessageHandler}>
        <div className="form-header blue accent-1">
          <h3>
            <FontAwesomeIcon icon={faEnvelope}/> Susisiekite su mumis:
          </h3>
        </div>

        <br />
        <div className="md-form">
        <FontAwesomeIcon icon={faEnvelope}/>
          <label htmlFor="email"> &nbsp;El.paštas</label>
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
        <FontAwesomeIcon icon={faUser}/>
          <label htmlFor="name">&nbsp;Vardas</label>
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
          <FontAwesomeIcon icon={faPencilAlt}/>
          <label htmlFor="message">&nbsp;Tekstas</label>
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
        {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      </div>
    </div>
  );
}

export default ContactMsg;
