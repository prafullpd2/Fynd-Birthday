import React, { Fragment, useState, useEffect } from 'react';
import './App.scss';
import {Card} from './components/card'
import {Info} from './models/info.model';

function App() {


  let def: Info[] = [
    {
      name: "Tyrion Lannister",
      birthday: "12/02/1978"
    }, {
      name: "Cersei Lannister",
      birthday: "11/30/1975"
    }, {
      name: "Daenerys Targaryen",
      birthday: "11/24/1991"
    }, {
      name: "Arya Stark",
      birthday: "11/25/1996"
    }, {
      name: "Jon Snow",
      birthday: "12/03/1989"
    }, {
      name: "Sansa Stark",
      birthday: "15/08/1992"
    }, {
      name: "Jorah Mormont",
      birthday: "12/16/1968"
    }, {
      name: "Jaime Lannister",
      birthday: "12/06/1975"
    }, {
      name: "Sandor Clegane",
      birthday: "11/07/1969"
    }, {
      name: "Tywin Lannister",
      birthday: "10/12/1951"
    }, {
      name: "Theon Greyjoy",
      birthday: "12/31/1989"
    }, {
      name: "Samwell Tarly",
      birthday: "12/07/1990"
    }, {
      name: "Joffrey Baratheon",
      birthday: "06/12/1992"
    }, {
      name: "Catelyn Stark",
      birthday: "12/03/1962"
    }, {
      name: "Bran Stark",
      birthday: "12/02/1995"
    }, {
      name: "Petyr Baelish",
      birthday: "11/20/1974"
    }, {
      name: "Robb Stark",
      birthday: "11/28/1986"
    }, {
      name: "Brienne of Tarth",
      birthday: "11/27/1985"
    }, {
      name: "Margaery Tyrell",
      birthday: "12/02/1989"
    }, {
      name: "Stannis Baratheon",
      birthday: "09/14/1971"
    }, {
      name: "Davos Seaworth",
      birthday: "02/13/1973"
    }, {
      name: "Tormund Giantsbane",
      birthday: "12/14/1974"
    }, {
      name: "Jeor Mormont",
      birthday: "11/01/1955"
    }, {
      name: "Eddard Stark",
      birthday: "12/02/1963"
    }, {
      name: "Khal Drogo",
      birthday: "12/05/1980"
    }, {
      name: "Ramsay Bolton",
      birthday: "12/05/1976"
    }, {
      name: "Robert Baratheon",
      birthday: "12/02/1965"
    }, {
      name: "Daario Naharis",
      birthday: "12/02/1985"
    }, {
      name: "Viserys Targaryen",
      birthday: "12/06/1984"
    },
    {
      name: "Gandalf White",
      birthday: "11/30/1991"
    },
    {
      name: "Saruman",
      birthday: "11/23/1991"
    },
    {
      name: "Sauron",
      birthday: "11/20/1991"
    },
    {
      name: "Grey Wizard",
      birthday: "11/30/1991"
    }
];
type T = { [n: string]: Info[]}
let filtered2: T = {
  '0':[] as Info[],
  '1':[] as Info[],
  '2':[] as Info[],
  '3':[] as Info[],
  '4':[] as Info[],
  '5':[] as Info[],
  '6':[] as Info[]
}
const [val, setVal] = useState<Info[]>(def);
const [year, setYear] = useState<number>(1991);
const [filtered, setFiltered] = useState<T>(filtered2);
const [changed, setChanged] = useState<boolean>(false);

const parseInfo = ( arr: Info[], year: number) => {

  let tempfiltered = {
    '0':[] as Info[],
    '1':[] as Info[],
    '2':[] as Info[],
    '3':[] as Info[],
    '4':[] as Info[],
    '5':[] as Info[],
    '6':[] as Info[]
  };
  let res =  arr.map((info) => {  
    let date = new Date( `${info.birthday}`);
    let day  =   date.getDay();
    if(date.getFullYear() === year)
      tempfiltered[(day as  0|1|2|3|4|5|6)].push(info);
    return {...info, day: day}
  });
  
  setFiltered(tempfiltered);
  return res;
}
const onYearChange = (year: number) => {
  setYear(year);
  setChanged(true);
}


const onTextChange = (info:string) => {
  try{
    setVal(JSON.parse(info));
  } catch(e){
    setVal(eval(info));
  }
  setChanged(true)
}
const update = () => {
  if(changed){
    parseInfo(val,year)
    setChanged(false);
  }
}

useEffect(() => {
  parseInfo(val,year);
  
}, [])


  return (
    <Fragment>
      <div className="d-flex flex-wrap justify-content-center ">
        <Card title="SUN" info={filtered[0]} />
        <Card title="MON" info={filtered[1]} />
        <Card title="TUE" info={filtered[2]} />
        <Card title="WED" info={filtered[3]} />
        <Card title="THU" info={filtered[4]} />
        <Card title="FRI" info={filtered[5]} />
        <Card title="SAT" info={filtered[6]} />
      </div>
      <div className="d-flex  px-4">
        <div className="flex-grow-1 d-flex justify-content-start">
          <textarea onChange={(e) => {onTextChange(e.target.value)}} defaultValue={JSON.stringify(val)} style={{height: '200px'}} className="rounded w-100 my-5"></textarea>
        </div>
        <div className="flex-grow-1 d-flex flex-column  p-3">
          <label className="mt-5" htmlFor="year">Year</label>
          <input defaultValue={year} onChange={(e) => {onYearChange(+e.target.value)}} style={{width: '120px'}} type="number"/>

          <button style={{width: '120px'}} onClick={() => {update()}} className="mt-2 btn-primary rounded p-1">UPDATE</button>

        </div>
      </div>
    </Fragment>

  );
}

export default App;
