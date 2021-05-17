import React, {useState} from 'react';
import './App.scss';
import Button from './Button/Button';
import Advertising from './Advertising/Advertising';
import Games from './Games/Games';
import Politics from './Politics/Politics';
import Hobby from './Hobby/Hobby';
import Sport from './Sport/Sport';


const App = () =>  { 
 const obj = {
    component1 : {
        id : 0,
        block : <Advertising/>,
        title : "Advertising"
    },

    component2 : {
        id : 1,
        block :  <Sport/>,
        title : "Sport"
    },
    component3 : {
        id : 2,
        block :  <Games/>,
        title : "Games"
    },
    component4 :{
        id : 3,
        block :  <Politics/>,
        title : "Politics"
    },
    component5 :{
        id : 4,
        block :  <Hobby/>,
        title : "Hobby"
    }      
}  

const [state, setState] = useState("Advertising");
let mainComponent = currentState => {
    if(currentState === obj.component1.title){
        return obj.component1.block
    }  else if (currentState === obj.component2.title) {
        return obj.component2.block
    }
    else if (currentState === obj.component3.title) {
        return obj.component3.block
    }
    else if (currentState === obj.component4.title) {
        return obj.component4.block
    }
    else if (currentState === obj.component5.title) {
        return obj.component5.block
    }
};
const change = (value) => {    
    setState(value);
}
    return (
        <div className="app">
            <div className="container">
                <h1>News Portal</h1>
                <div className = "btns__wrapper"> 
                    <Button 
                        title = {obj.component1.title}
                        show = {() => change(obj.component1.title)}                       
                    />
                    <Button 
                        title = {obj.component2.title}
                        show = {() => change(obj.component2.title)}
                    />
                    <Button 
                        title = {obj.component3.title}
                        show = {() => change(obj.component3.title)}
                    />
                    <Button 
                        title = {obj.component4.title}
                        show = {() => change(obj.component4.title)}
                    />
                    <Button 
                        title = {obj.component5.title}
                        show = {() => change(obj.component5.title)} 
                    />
                </div>                  
                <div className="container__news">
                    {mainComponent(state)}
                </div>        
            </div>
        </div>
    );     
}

export default App;
