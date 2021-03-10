import React from "react";
import './App.css';
import en_US from './constants/en_US';
import ExtensionController from "./controller/ExtensionController";
import EventConstants from "./constants/EventConstants";

class App extends React.Component
{
    componentDidMount()
    {
        console.log("App :: componentDidMount()");
        var oCSInterface = new CSInterface();
        oCSInterface.addEventListener(EventConstants.STR_LOAD_URL, this.handleLoadUrl.bind(this));

        var oParams = new URLSearchParams(window.location.search);
        var strToken = oParams.get("token");
        var strIDPUrl = oParams.get("idp");
        if(strToken !== null && strToken !== "")
        {
            ExtensionController.sendEventToPlugin("com.magnitude.agility.token", strToken);
            oCSInterface.closeExtension();
        }
        else
        {
            var oCSEvent = new CSEvent(EventConstants.STR_LOAD_URL, "APPLICATION", "IDSN", "com.magnitude.agility.sso");
            oCSEvent.data = "https://magnitudesoftware.okta.com";
            oCSInterface.dispatchEvent(oCSEvent);
        }
    }

    handleLoadUrl(oEvent)
    {
        var oCSInterface = new CSInterface();
        oCSInterface.resizeContent((screen.width * 3/4), (screen.height * 3/4));
        window.location = "https://agilitysso.s3-ap-southeast-1.amazonaws.com/index.html?idp=" + oEvent.data + "&ext=" + window.location.href;
    }

    sendEventToPlugin()
    {
        var strInputValue = document.getElementById("inputText").value;
        ExtensionController.sendEventToPlugin(EventConstants.STR_SIGN_IN_EVENT, strInputValue);
        var oCSInterface = new CSInterface();
        oCSInterface.closeExtension(); 
    }

    render()
    {
        return <div className="centerDiv">
            <progress/>
        </div>
    }

    buildTextBox()
    {
        return <input id="inputText" classname="textbox" type="text" placeholder="Message" required/>
    }

    buildSendEventToPluginButton()
    {
        return <button 
            className="button" 
            onClick={this.sendEventToPlugin.bind(this)}>
            {en_US.arrEnglishConstants['STR_SEND_EVENT_TO_PLUGIN']}
        </button>
    } 
}
export default App;