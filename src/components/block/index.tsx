import React, { Component } from 'react';
import classes from './style.module.scss';

type Props = {
  name: string;  
};
type State = {
  
};
export class Block extends Component<Props, State>{
  render() {
    let init: any = this.props.name.trim().split(' ').map(val => val[0].toUpperCase());
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    

    
    return (
      <div style={{backgroundColor: '#'+randomColor}} className={classes.Block+" align-items-center d-flex flex-column justify-content-center"}>
        {init}
        
      </div>
    );
  };
};