import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component{ 
  apiKey=process.env.REACT_APP_NEWS_API;
  // apiKey='c2e7fbf6be224c7aa4df54f1f5c7d635';
  state={
    progress : 1
  }

  setProgress= (p)=>{
    this.setState({progress :p})
  }

  render() {
    let cards =6;
    // let apiKey=REACT_APP_NEWS_API;
    return (
      <div>
        <Router>
            <LoadingBar
            color='#00FFFF'
            progress={this.state.progress}
            shadow = 'false'
            height={2}
            // add(4)
            // style = {{position : 'static'}}
            // onLoaderFinished={() => this.setProgress(100)}
          />
            <NavBar/>
            <Routes>
              <Route exact path='/entertainment' element={<News progressBar={this.setProgress} apiKey={this.apiKey} key='entertainment' articlesOnOnePage={cards} country="in" category='entertainment'/>}/>
              <Route exact path='/business' element={<News progressBar={this.setProgress} apiKey={this.apiKey} key='business' articlesOnOnePage={cards} country="in" category='business'/>}/>
              <Route exact path='/' element={<News progressBar={this.setProgress} apiKey={this.apiKey} key='home' articlesOnOnePage={cards} country="in" category='science'/>}/>
              <Route exact path='/general' element={<News progressBar={this.setProgress} apiKey={this.apiKey} key='general' articlesOnOnePage={cards} country="in" category='general'/>}/>
              <Route exact path='/health' element={<News progressBar={this.setProgress} apiKey={this.apiKey} key='health' articlesOnOnePage={cards} country="in" category='health'/>}/>
              <Route exact path='/science' element={<News progressBar={this.setProgress} apiKey={this.apiKey} key='science' articlesOnOnePage={cards} country="in" category='science'/>}/>
              <Route exact path='/sports' element={<News progressBar={this.setProgress} apiKey={this.apiKey} key='sports' articlesOnOnePage={cards} country="in" category='sports'/>}/>
              <Route exact path='/technology' element={<News progressBar={this.setProgress} apiKey={this.apiKey} key='technology' articlesOnOnePage={cards} country="in" category='technology'/>}/>
            </Routes>
        </Router>
      </div>
    )
  }
}