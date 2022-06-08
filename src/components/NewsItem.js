import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import newsImage from './static/media/news.7990419d71ffb0bfe583.jpg'
export class NewsItem extends Component{
  render(){
    let {title, description, imageUrl, newsUrl, publishedAt, newsSource} = this.props;
    function dateDisplay(){
      let s = publishedAt.slice(0,publishedAt.length-1).split("T");
      // "Published On :  "+ 
      let str = "Published On : "+ s[0];
      return str;
    }

    function timeDisplay(){
      let s = publishedAt.slice(0,publishedAt.length-1).split("T");
      // "Published On :  "+ 
      let str = "Time : "+ s[1];
      return str;
    }

    return(
      <>
        <div className='mx-4 my-4'>
          <div className="card" style={{width: "18rem"}}>
              <img src={!imageUrl?newsImage:imageUrl} className="card-img-top" alt='...'/>
              
              <div className="card-body" style={{position : 'relative'}}>   
              <span className="position-absolute translate-middle badge rounded bg-primary" style={{left : '50%', top : '0%', fontSize : 18, zIndex: 1}}>{newsSource}
                    </span>           
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}
                    </p>
                  <p className="card-text" style={{marginBottom: 0, color : 'darkgrey'}}>{dateDisplay()}</p>
                  <p className="card-text" style={{color : 'darkgrey'}}>{timeDisplay()}</p>
                  <a rel='noreferrer' href = {`${newsUrl}`} target="_blank" className="btn btn-primary">Read More</a>
              </div>
          </div>
        </div>      
      </>
    )
  }
}

export default NewsItem