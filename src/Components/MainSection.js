import React, { useState } from "react";
import logoIcon from "../Assets/logoIcon.png";
import Inputs from "./Inputs";

function MainSection() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  return (
    <main>
      <div className="form-main">
        <form>
        <div className="image-logo"><img src = {logoIcon} alt="Logo Sarc" /></div>
          <h1>Login</h1>

          <fieldset>
          <Inputs 
            title="User Login" 
            type="text" 
            state = {login}
            setState = {e =>setLogin(e.target.value) }
          />

          <Inputs 
            title="Password" 
            type="password"
            state = {password}
            setState = {e =>setPassword(e.target.value) } 
          />  
            
          </fieldset>
          <button>Sign in</button>
          <label>Don't have accont? <a href="/sarc/user">Sign up</a> </label>
        </form>
      </div>
    </main>
  );
}

export default MainSection;
