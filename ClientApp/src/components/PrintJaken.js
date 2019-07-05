import React, { Component } from 'react';

export class PrintJanken extends Component{

    render(){
        return(
            <div>しゃんけんぽんずこー<br/>
                勝ち{this.props.value.win}負け：{this.props.value.lose}引き分け：{this.props.value.draw}(勝率：{this.props.value.win/(this.props.value.win + this.props.value.lose)*100}％)
            </div>
        );
    }
}
