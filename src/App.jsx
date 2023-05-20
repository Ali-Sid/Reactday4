import frontend from "./assets/frontend_technologies.png";
import "./App.css";
import HexaColor from "./HexaColor";
import Usercard from "./usercard";

function App() {
  return (
    <>
      <div>
        <img src={frontend} className="frontend" alt="Frontend technologies" />
      </div>
      <div>
        <h1>Subscribe</h1>
        <p>Sign up with your email address to receive news and updates.</p>
        <div className="input-container">
          <input type="text" className="input" placeholder="First Name" />
          <input type="text" className="input" placeholder="Last Name" />
          <input type="text" className="input" placeholder="Email" />
        </div>
        <button>Submit</button>
        <div style={{ marginTop: "50px" }}>
          <HexaColor />
          <HexaColor />
          <HexaColor />
          <div style={{ marginTop: "50px" }}>
            <Usercard />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
