import React from "react";
import './App.css';
import { FaUser } from "react-icons/fa";
import { FiKey } from "react-icons/fi";
import Header from "./Header";
import en_US from './constants/en_US';

class App extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            m_arrHostList : [],
            m_arrIDPList : [],
            
        }
    }

    componentDidMount()
    {
        this.getHostList();
    }

    async getHostList()
    {
        var oCSInterface = new CSInterface();
        var that = this;
        await oCSInterface.evalScript('getHostList()', async function(strHostList) 
        {
            console.log("App :: getHostList() - strHostList : " + strHostList);
            var oJSONResponse = JSON.parse(strHostList);
            console.log("App :: getHostList() - arrHostList : " + oJSONResponse['hostlist']);
            that.setState({
               m_arrHostList : oJSONResponse['hostlist'],
            })
        }); 
    }

    async getIDPList(oEvent)
    {
        var oCSInterface = new CSInterface();
        var that = this;
        var strHostName = oEvent.target.value;
        await oCSInterface.evalScript('getIDPList("'+ strHostName +'")', async function(strIDPList) 
        {
            console.log("App :: getIDPList() - strIDPList : " + strIDPList);
            var oJSONResponse = JSON.parse(strIDPList);
            console.log("App :: getIDPList() - arrHostList : " + oJSONResponse['IDPlist']);
            that.setState({
                m_arrIDPList : oJSONResponse['IDPlist']
            })
        }); 
    }

    async handleLogin()
    {
        var strUserName = document.getElementById('username').value;
        var strPassword = document.getElementById('password').value;
        var strHost = document.getElementById('host').value;
        
        var oCSInterface = new CSInterface();
        await oCSInterface.evalScript('handleLogin("'+ strUserName +'", "'+ strPassword +'", "' + strHost + '")', async function(strResult)
        {
            console.log(strResult);
        })
    }

    buildDropDown()
    {
        console.log("App :: buildDropDown() -  m_arrHostList : " + this.state.m_arrHostList);
        return <select id="host" className="hostDropdown" type="select" onChange={this.getIDPList.bind(this)}>
        {
            this.state.m_arrHostList.map(strHost => (
                <option key={strHost}  value={strHost}>{strHost}</option>))
        }
        </select>
    }

    render()
    {
        return <div className="content">
            <Header/>
            <form onSubmit={this.handleLogin.bind(this)}>
                <div className="hostDropdownDiv">
                    <label className="hostDropdownLabel">Host: </label>
                    {this.buildDropDown()}
                </div>
                <hr className="horizantalRule"/>
                {this.buildIPDButtons()}
                <h5 className="orLabel">{en_US.arrEnglishConstants['STR_OR']}</h5>
                {this.buildUsernameField()}
                {this.buildPasswordField()}
                <div className="buttonsLeftDiv">
                    <button className="button" onClick={this.closeExtension.bind(this)}>{en_US.arrEnglishConstants['STR_CANCEL']}</button> 
                </div>
                <div className="buttonsRightDiv">
                    <input type="submit" className="button" name={en_US.arrEnglishConstants['STR_LOGIN']}/>
                </div>
            </form>
        </div>
    }

    buildIPDButtons()
    {
        if(this.state.m_arrIDPList.length > 0)
            return this.state.m_arrIDPList.map(strIDP => (<button className="button">{ en_US.arrEnglishConstants['STR_LOGIN_WITH_IDENTITY_PROVIDER'] + strIDP}</button> ))
        else
        {
            return "";
        }
    }


    buildUsernameField()
    {
        return <div className="textboxfield">
            <FaUser className="textboxIcon"/>
            <input id="username" classname="textbox" type="text" required/>
        </div>
    }

    buildPasswordField()
    {
        return <div className="textboxfield">
            <FiKey className="textboxIcon"/>
            <input id="password" classname="textbox" type="password" required/>
        </div>
    }

    closeExtension()
    {
        var oCSInterface = new CSInterface();
        oCSInterface.closeExtension();
    }
    
}
export default App;