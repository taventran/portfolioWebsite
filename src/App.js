import './App.css';
import logo from './images/pfp.jpg'
import linkedin from './images/linkedin.svg'
import github from './images/github.svg'
import instagram from './images/instagram2.svg'

function App() {
  return (
    <div className="font-mono">
      <header className="text-turqoise font-bold text-2xl grid grid-cols-9 mt-[2%] ml-[2%] ">
        <h1 className="hover:text-gold col-start-2 hover:cursor-pointer">
          About Me
        </h1>
        <h1 className="hover:text-gold hover:cursor-pointer">Projects</h1>
        <h1 className="hover:text-gold hover:cursor-pointer">Socials</h1>
        <div className="text-center col-start-7 border-2 rounded hover:text-darkBlue hover:bg-turqoise hover:cursor-pointer">
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
      </body>
      <footer className="bg-turqoise box-content h-[10%] w-full mt-[8%] grid grid-cols-5 ">
        <h1 className="ml-[10%] text-white">Connect with me on my socials!</h1>

        <img
          className="row-start-2 ml-[10%] hover:cursor-pointer"
          src={linkedin}
        />
        <img
          className="row-start-2 ml-[-70%] hover:cursor-pointer"
          src={github}
        />
        <img className="row-start-2  ml-[-150%] hover:cursor-pointer" 
          src={instagram}
        />

      </footer>
    </div>
  );
}

export default App;
