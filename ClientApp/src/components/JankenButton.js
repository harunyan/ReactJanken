import React, { Component } from 'react';
import { PrintJanken } from './PrintJaken';

export const JankenTri ={
  gu:0,
  choki:1,
  pa:2,

}

export  class JankenButton extends Component {
    constructor(props){
        super(props);
    }


    render () {
        const disp = this.props.tri === JankenTri.gu ? "グー":
            this.props.tri === JankenTri.choki ? "チョキ":
            this.props.tri === JankenTri.pa ? "パー" : "";
        return (
            <button onClick={this.props.onClick}>{disp}</button>
        );
    }
}
