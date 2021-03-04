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
    }

    componentDidUpdate()
    {
        var oCSInterface = new CSInterface();
        oCSInterface.resizeContent(290, 107);
    }

    handleLoadUrl(oEvent)
    {
        var oCSInterface = new CSInterface();
        oCSInterface.setWindowTitle(oEvent.data)
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
        return <div className="content">
            {this.buildTextBox()}
            {this.buildSendEventToPluginButton()}
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