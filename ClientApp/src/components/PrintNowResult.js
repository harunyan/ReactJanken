import React, { Component } from 'react';
import { JankenTri } from './JankenButton';
import { WinKind } from './WinKind';

export class PrintNowResult extends Component{
    render(){
        const Output = this.props.value === JankenTri.gu ? "グー" :
            this.props.value === JankenTri.choki ? "チョキ" :
            this.props.value === JankenTri.pa ? "パー" : "";

        const result = this.props.value === WinKind.win ? "じゃんけんぽん やったね" :
            this.props.value === WinKind.lose ? "じゃんけんぽん ずこー" :
            this.props.value === WinKind.draw ? "じゃんけんぽん あいこでしょ" : "";

        return(
            <div>{Output} {result}<br/>
            </div>
        );
    }
}
