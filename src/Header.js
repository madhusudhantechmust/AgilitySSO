import React from 'react';
export default class Header extends React.Component
{
    render(){
        return <div className="header">
            <div className="logoDiv">
                <img src="" className="logo"/>
            </div>
            <div className="logoHeader">
                <div className="logoHeaderTitle1">AGILITY</div>
                <div className="logoHeaderTitle2">MultiChannel</div>
                <div className="logoHeaderTitle3">BY MAGNITUDE</div>
            </div>
        </div>
    }
}