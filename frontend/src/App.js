import SignUpReq from "./signUp";
import './App.css';
import SignIn from "./auth";
import {getCookie} from "./cookieScr/cookieUtils.js";
import {useState} from "react";
import {useEffect} from "react";
import {HomePage} from "./home";

function App() {
  const [isAuth, setAuth] = useState(false)

  useEffect(() => {
    if(getCookie("user")){
      setAuth(true);
    }
  });

  return (
    <div className="Background">
      {
        isAuth ? <div className="App"><HomePage auth={setAuth}/></div> : <div className="App">
          <SignUpReq/>
          <SignIn auth={setAuth}/>
        </div>
      }
    </div>
  );
}

export default App;
