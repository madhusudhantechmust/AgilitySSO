//The following runs on startup. It's just safer that way.
debugger;
$.appEncoding = "UTF-8";
hostApplication = app.name;

function getHostList()
{
    return app.hostList;
}

function getIDPList(strHostName)
{
    var strIDPList = "KO"
    try{
        strIDPList = app.getIDPList(strHostName);
    }
    catch(error){
        alert(error)
    }
    return strIDPList;
}

function handleLogin(strUserName, strPassword, strHost)
{
    return app.handleLogin(strUserName, strPassword, strHost);
}

function handleSAMLlogin(strResponse)
{
    return app.handleSAMLLogin(strResponse);
}