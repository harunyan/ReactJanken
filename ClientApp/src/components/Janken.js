import React, { Component } from 'react';
import { PrintJanken } from './PrintJaken';
import { JankenButton, JankenTri } from './JankenButton';

export class Janken extends Component {
  static displayName = Janken.name;

  constructor(props){
    super(props);

    this.state = {
      result:{
        win:3,
        lose:1,
        draw:2,
        count:6
      }
    };
  }

    Button_onClickG(a, b, c){
        const result2 = this.state.result;
        result2.win = result2.win + 1;
        this.setState({result: result2});
    }
    
    Button_onClickC(a, b, c){
        const result2 = this.state.result;
        result2.lose = result2.lose + 1;
        this.setState({result: result2});
    }

    Button_onClickP(a, b, c){
        const result2 = this.state.result;
        result2.draw = result2.draw + 1;
        this.setState({result: result2});
    }

    Button_onClick(a, b, c){
      let result2 = this.state.result;
      const jan = parseInt(((Math.random() * 3)));
      if(jan === a){
        // 引き分け
        result2.draw = result2.draw + 1;
      } else if(jan === a + 1){
        // 負け
        // 0=グー+1=>チョキ === a=0グー 負け
        result2.lose = result2.lose + 1;
      } else if(jan === 2 && a === 0){
        // 負け
        // jan=2 パー a=0 グー
        result2.lose = result2.lose + 1;
      } else if(jan === 2 && a === 1){
        // 勝ち
        // jan=2 パー a=1 チョキ
        result2.win = result2.win + 1;
      }
      this.setState({result: result2});
    }

    render () {
      return (
        <div>
          <PrintJanken value={this.state.result}/>
          <JankenButton tri={JankenTri.gu} onClick={this.Button_onClickG.bind(this, JankenTri.gu)}/>
          <JankenButton tri={JankenTri.choki} onClick={this.Button_onClickC.bind(this, JankenTri.choki)}/>
          <JankenButton tri={JankenTri.pa} onClick={this.Button_onClickP.bind(this, JankenTri.pa)}/>
        </div>
      );
    }
}
