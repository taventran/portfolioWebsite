import './App.css';
import logo from './pfp.jpg'

function App() {
  return (
    <div className="font-mono">
      <header className="text-turqoise font-bold text-2xl grid grid-cols-9 mt-[2%] ml-[2%] ">
        <h1 className="hover:text-gold hover:cursor-pointer">About Me</h1>
        <h1 className="hover:text-gold hover:cursor-pointer">Projects</h1>
        <h1 className="hover:text-gold hover:cursor-pointer">Socials</h1>
      </header>
      <hr className="text-gold border-[3px] w-[96%] ml-[2%] my-[2%]"></hr>
      <body>
        <div className="text-center">
          <img
            src={logo}
            alt="Logo"
            className="mt-[4%] w-[18%] h-[18%] border-[5px] border-gold rounded-full mx-auto"
          />
          <h2 className="text-gold mt-[4%] text-4xl">
            Hello, I’m Taven an aspiring software engineer. With previous intern
            experience at Halliburton and JP Morgan & Chase. I hope to keep
            growing in this field and to make a positive impact where ever I am.
          </h2>
        </div>
      </body>
      <footer className="bg-gray-50 box-content h-32 w-full border-2 mt-[8%]">
        <h1 className="text-darkBlue">test</h1>
      </footer>
    </div>
  );
}

export default App;
