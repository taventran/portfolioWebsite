import React, {useState} from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';
import Contact from './components/contact'
import logo from './images/pfp.jpg';
import linkedin from './images/linkedin.svg';
import github from './images/github.svg';

function App() {
  const [showContact, setShowContact] = useState(false);
  
 const handleContactClick = () => {
   try {
     setShowContact(!showContact);
   } catch (error) {
     console.error("Error updating contact form state:", error);
   }
 };

  return (
    <div className="font-mono">
      <header className="text-turqoise font-bold text-2xl grid grid-cols-9 mt-[2%] ml-[2%] ">
        <h1 className="hover:text-gold col-start-2 hover:cursor-pointer">
          About Me
        </h1>
        <h1 className="hover:text-gold hover:cursor-pointer">Projects</h1>
        <h1 className="hover:text-gold hover:cursor-pointer">Socials</h1>
        <div
          className="text-center col-start-7 border-2 rounded hover:text-darkBlue hover:bg-turqoise hover:cursor-pointer"
          onClick={handleContactClick}
        >
          Contact Me
        </div>
      </header>
      <hr className="text-gold border-[3px] w-[96%] ml-[2%] my-[2%]"></hr>
      <body>
        <div className="text-center">
          <img
            src={logo}
            alt="Logo"
            className="mt-[4%] w-[16%] h-[16%] border-[5px] border-gold rounded-full mx-auto"
          />
          <h2 className="text-gold mt-[4%] text-4xl ">
            Hello, I’m Taven an aspiring software engineer. With previous intern
            experience at Halliburton and JP Morgan & Chase. I hope to keep
            growing in this field and to make a positive impact where ever I am.
          </h2>
        </div>
        <CSSTransition
          in={showContact}
          timeout={500} // Adjust the duration of the animation as needed
          classNames="contact"
          unmountOnExit
        >
        {showContact && <Contact />}
        </CSSTransition>
      </body>
      <footer className="sticky bg-turqoise box-content  w-full  grid grid-cols-5 ">
        <h1 className="ml-[10%] text-white">Connect with me on my socials!</h1>
        <img
          className="row-start-2 ml-[10%] hover:cursor-pointer"
          src={linkedin}
        />
        <img
          className="row-start-2 ml-[-70%] hover:cursor-pointer"
          src={github}
        />
      </footer>
    </div>
  );
}

export default App;
