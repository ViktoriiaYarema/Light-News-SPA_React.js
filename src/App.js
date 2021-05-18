import React, {useState} from 'react';
import './App.scss';
import Button from './Button/Button';
import Advertising from './Advertising/Advertising';
import Games from './Games/Games';
import Politics from './Politics/Politics';
import Hobby from './Hobby/Hobby';
import Sport from './Sport/Sport';


const App = () =>  { 
    const news = {
        advertising : "Advertising",
        sport : "Sport",
        games : "Games",
        politics : "Politics",
        hobby : "Hobby"
    }  

    const [defaultNews, setNews] = useState(news.advertising);

    const changeNews = (value) => {    
        setNews(value);
    }
    
    return (
        <div className="app">
            <div className="container">
                <h1>News Portal</h1>
                <div className = "btns__wrapper"> 
                    <Button 
                        title = {news.advertising}
                        getNews = {() => changeNews(news.advertising)}                       
                    />
                    <Button 
                        title = {news.sport}
                        getNews = {() => changeNews(news.sport)}
                    />
                    <Button 
                        title = {news.games}
                        getNews = {() => changeNews(news.games)}
                    />
                    <Button 
                        title = {news.politics}
                        getNews = {() => changeNews(news.politics)}
                    />
                    <Button 
                        title = {news.hobby}
                        getNews = {() => changeNews(news.hobby)} 
                    />
                </div>                  
                <div className="container__news">
                   {    
                        defaultNews === news.advertising ? <Advertising/> :                                
                        defaultNews === news.sport ? <Sport/> :
                        defaultNews === news.games ? <Games/> : 
                        defaultNews === news.politics ? <Politics/> : <Hobby/>                      
                    }
                    
                </div>        
            </div>
        </div>
    );     
}

export default App;
