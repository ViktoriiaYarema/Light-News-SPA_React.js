import React, {Component} from 'react';
import './App.scss';
import Button from './Button/Button';
import Advertising from './Advertising/Advertising';
import Games from './Games/Games';
import Politics from './Politics/Politics';
import Hobby from './Hobby/Hobby';
import Sport from './Sport/Sport';

class App extends  Component { 
  state = {
    component : {
        block : <Advertising/>
    },

    component1 : {
        id : 0,
        block : <Advertising/>,
        title : "Advertising",
        showBlock : function () {
            return this.block
        }
    },

    component2 : {
        id : 1,
        block :  <Sport/>,
        title : "Sport",
        showBlock : function () {
            return this.block
        }
    },
    component3 : {
        id : 2,
        block :  <Games/>,
        title : "Games",
        showBlock : function () {
            return this.block
        }
    },
    component4 :{
        id : 3,
        block :  <Politics/>,
        title : "Politics",
        showBlock : function () {
            return this.block
        }
    },
    component5 :{
        id : 4,
        block :  <Hobby/>,
        title : "Hobby",
        showBlock : function () {
            return this.block
        }
    }      
}   

componentHandler = newComponent => {
    this.setState({
        component: {
            block : newComponent
        }
    })
}
    render() {
        return (
            <div className="app">
              <div className="container">
                  <h1>News Portal</h1>
                  <div className = "btns__wrapper"> 
                    <Button 
                            title = {this.state.component1.title}
                            show = {() => this.componentHandler(this.state.component1.block)}
                            id = {this.state.component1.id}
                            key = {this.state.component1.id}
                    />
                    <Button 
                        title = {this.state.component2.title}
                        show = {() => this.componentHandler(this.state.component2.block)}
                        id = {this.state.component2.id}
                        key = {this.state.component2.id}
                    />
                    <Button 
                            title = {this.state.component3.title}
                            show = {() => this.componentHandler(this.state.component3.block)}
                            id = {this.state.component3.id}
                            key = {this.state.component3.id}
                    />
                    <Button 
                            title = {this.state.component4.title}
                            show = {() => this.componentHandler(this.state.component4.block)}
                            id = {this.state.component4.id}
                            key = {this.state.component4.id}
                    />
                    <Button 
                            title = {this.state.component5.title}
                            show = {() => this.componentHandler(this.state.component5.block)}
                            id = {this.state.component5.id}
                            key = {this.state.component5.id}
                    />
                  </div>                  
                  <div className="container__news">
                      {this.state.component.block}
                  </div>
        
              </div>
            </div>
          );
    }  
}

export default App;
