import { useState } from "react";
import classes from './calendar.module.css';
export default function CalendarMDY() {
    
    return <fieldset>
        <CalendarDays year={2024} month={11} />
    </fieldset>
}

function CalendarDays() {
    const
        [value, setValue] = useState('2000-01'),
        [year, month] = value.split('-'),
        date = new Date(year, month)
        ;
        
    

    return <><fieldset className={classes.calen}>
        <input type="month" value={value} onInput={event => {setValue(event.currentTarget.value)}} />
        <CalendarOut date={date} />
    </fieldset>
    </>
}

// function week(monday, days){
//     let str = '';
//     for(let i = monday; i < monday+7; i++){
//         let cell = String(i);
//         if(i < 1) cell = '<';
//         if(i > days) cell ='>';
//         str += " " + cell.padStart(2, '_');
//     }
// }

function CalendarOut({date}){
    const year = date.getFullYear(), 
    firstDayOfWeek = date.getDay(),
    month = date.getMonth(),
    lastDay = (new Date(year, month, 0)).getDate();
    
    return<>{lastDay}</>
    

    
}


// function month({shift, days}) {
//     for(let m = 1 - shift; m <= days; m+=7){week(m,days)}
    
// }
//const firstDayWeek = (new Date(year, month, 1)).getDay(),
  //      lastDayWeek = (new Date(year, month + 1, 0).getDay()),
    //    lastDayNum = new Date(year, month + 1, 0);