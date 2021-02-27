import React from 'react';
import en_US from './constants/en_US';

export default class Header extends React.Component
{
    render(){
        return <div className="header">
            <div className="logoDiv">
                <img src="" className="logo"/>
            </div>
            <div className="logoHeader">
                <div className="logoHeaderTitle1">{en_US.arrEnglishConstants['STR_AGILITY']}</div>
                <div className="logoHeaderTitle2">{en_US.arrEnglishConstants['STR_MULTICHANNEL']}</div>
                <div className="logoHeaderTitle3">{en_US.arrEnglishConstants['STR_BY_MAGNITUDE']}</div>
            </div>
        </div>
    }
}