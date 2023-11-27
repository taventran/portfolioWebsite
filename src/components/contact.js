import React from 'react'
import './contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    return (
      <div id="contact-me-pane"
        className=" ease rounded-t-xl rounded-md border-[2px] border-gold  
        grid grid-cols-3 grid-rows-9 bg-white w-11/12 auto shadow-xl"
      >
        <h2 className="ml-[3%] font-bold text-2xl mt-[1%]">CONTACT ME</h2>
        <FontAwesomeIcon
          icon={faXmark}
          className="text-red mt-[3%] col-start-3 row-start-1 ml-[90%] hover:cursor-pointer"
        />
        <div className="mt-[3%] ml-[3%] row-start-2">
          <h3 className="text-xl"> Name:</h3>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="border-[2px] ml-[2%] rounded-md"
          ></input>
        </div>

        <div className="mt-[3%] ml-[3%] row-start-3">
          <h3 className="text-xl"> Email:</h3>
          <input
            type="text"
            id="email"
            name="email"
            required
            className="border-[2px] ml-[2%] rounded-md"
          ></input>
        </div>
        <div className="mt-[3%] ml-[3%] row-start-4 row-span-2">
          <h3 className="text-xl"> Message:</h3>
          <textarea
            type="text"
            id="message"
            name="message"
            required
            className="border-[2px] ml-[2%] rounded-md w-[200%] col-span-3"
          />
        </div>
        <button
          type="submit"
          class="ml-[3%] mb-[2%] row-start-7 col-start-1 bg-gold hover:bg-turqoise text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    );
}

export default Contact;