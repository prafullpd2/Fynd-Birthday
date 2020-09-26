
import React, { PureComponent } from 'react';
import classes from './style.module.scss'
import { Block } from '../block';
import { Info } from '../../models/info.model';
type Props = {
  title: string;
  info: Info[];
  
};
type State = {
  rows: number;
  columns: number;
  
};
export class Card extends PureComponent<Props, State>{
  state: State = {
    columns: 1,
    rows: 1
  }
  
  render() {
    // let arr: any[] = [1,1,1,1,1,1,1,1,1];
    let arr = this.props.info.map((val, i) => <Block name={val.name} key={i}/>);    
    let sqr = arr.length === 1 ? 1 : (Math.sqrt(arr.length) | 0) + 1;
    return (
      <div className={"my-3 mx-1 d-flex flex-column "+classes.Card}>
          <div className={"p-2 h6 text-right text-white mb-0 w-100 "+ classes.Header}>{this.props.title}</div>
          <div 
            style={{gridTemplateColumns:`repeat(${sqr}, ${200/sqr}px)`, gridTemplateRows: `repeat(${sqr}, ${200/sqr}px)`}} 
            className={"w-100 d-flex flex-wrap "+classes.Content}>
            {arr.length > 0 ?  arr :  <div className={" align-items-center d-flex flex-column justify-content-center"}> No Birthday</div>}


          </div>

        
      </div>
    );
  };
};