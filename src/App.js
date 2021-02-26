import React from "react";
import './App.css';
import { FaUser } from "react-icons/fa";
import { FiKey } from "react-icons/fi";
import Header from "./Header";

class App extends React.Component
{
    render()
    {
        return <div className="content">
            <Header/>
            <div className="hostDropdownDiv">
                <label className="hostDropdownLabel">Host: </label>
                <select className="hostDropdown" type="select">
                </select>
            </div>
            <hr className="horizantalRule"/>
            <button className="button">Log in with 'Identity provider Name'</button> 
            <h5 className="orLabel">OR</h5>
            {this.buildUsernameField()}
            {this.buildPasswordField()}
            <div className="buttonsLeftDiv">
                <button className="button" onClick={this.closeExtension.bind(this)}>Cancel</button> 
            </div>
            <div className="buttonsRightDiv">
                <button className="button">Login</button>
            </div>
        </div>
    }

    buildUsernameField()
    {
        return <div className="textboxfield">
            <FaUser className="textboxIcon"/>
            <input classname="textbox" type="text"/>
        </div>
    }

    buildPasswordField()
    {
        return <div className="textboxfield">
            <FiKey className="textboxIcon"/>
            <input classname="textbox" type="text"/>
        </div>
    }

    closeExtension()
    {
        var oCSInterface = new CSInterface();
        oCSInterface.closeExtension();
    }
    
}
export default App;