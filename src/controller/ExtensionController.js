import React from 'react';
export default class ExtensionController extends React.Component
{
    static sendEventToPlugin(strEventName, strEventData)
    {
        console.log("ExtensionController :: sendEventToPlugin() strEventName : " + strEventName);
        console.log("ExtensionController :: sendEventToPlugin() strEventData : " + strEventData);
        var oCsInterface = new CSInterface();
        var oEvent = new CSEvent(strEventName, "APPLICATION","IDSN", "com.adobe.indesign.scriptingcomms.html");
        oEvent.data = strEventData;
        oCsInterface.dispatchEvent(oEvent);
    }
}