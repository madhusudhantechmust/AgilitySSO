import React from "react";
import './App.css';
import { FaUser } from "react-icons/fa";
import { FiKey } from "react-icons/fi";
import Header from "./Header";
import en_US from './constants/en_US'

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
            <button className="button">{en_US.arrEnglishConstants['STR_LOGIN_WITH_IDENTITY_PROVIDER']}</button> 
            <h5 className="orLabel">{en_US.arrEnglishConstants['STR_OR']}</h5>
            {this.buildUsernameField()}
            {this.buildPasswordField()}
            <div className="buttonsLeftDiv">
                <button className="button" onClick={this.closeExtension.bind(this)}>{en_US.arrEnglishConstants['STR_CANCEL']}</button> 
            </div>
            <div className="buttonsRightDiv">
                <button className="button">{en_US.arrEnglishConstants['STR_LOGIN']}</button>
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