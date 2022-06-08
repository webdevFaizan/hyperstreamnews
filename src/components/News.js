import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


export class News extends Component{

  static defaultProps={
    articlesOnOnePage : 6,
    country : 'in',
    category : 'science'
  }
  static propTypes = {
    articlesOnOnePage : PropTypes.number,
    country : PropTypes.string,
    category : PropTypes.string
  }

  constructor(){
    super();
    this.state={
      articles : [ ],
      loading : true,
      pageNo: 1,
      totalResults : 0,
      maximumPages : 0
    }
  }

  async componentDidMount(){
    this.props.progressBar(0);
    // console.log(this.state.pageNo+"  "+ this.state.totalResults +"  "+ this.state.articlesOnOnePage+"  "+ this.state.maximumPages);    
    this.setState({loading:true});
    let url=`https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&pageSize=${this.props.articlesOnOnePage}&page=1`;
    this.props.progressBar(10);
    let fetchedData = await fetch(url);
    this.props.progressBar(30);
    let parsedData = await fetchedData.json();
    let temp = Math.ceil((parsedData.totalResults)/this.props.articlesOnOnePage)+1;
    this.props.progressBar(50);
    this.setState({
      articles : parsedData.articles, 
      totalResults : parsedData.totalResults,
      maximumPages : temp,
      loading : true,
      pageNo : 1
    })
    this.props.progressBar(99);
    // console.log("Cmponent : "+this.state.pageNo+"  "+ this.state.totalResults +"  "+ this.state.articlesOnOnePage+"  "+ this.state.maximumPages);    
  }

    // handleNextClick= async ()=>{    //This function is inside a class, so we do not need to create this function without the help of function keyword.
    //   // console.log("Next : "+this.state.pageNo+"  "+ this.state.totalResults +"  "+ this.state.articlesOnOnePage+"  "+ this.state.maximumPages);    \
    //   this.setState({loading:true});
    //   let url=`https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=${this.props.country}&apiKey=c2e7fbf6be224c7aa4df54f1f5c7d635&pageSize=${this.props.articlesOnOnePage}&page=${this.state.pageNo+1}`;
    //   let fetchedData = await fetch(url);
    //   let parsedData = await fetchedData.json();
    //   this.setState({articles : parsedData.articles})
    //   this.setState({
    //     pageNo : this.state.pageNo+1,
    //     loading : false
    //   })
    // }
    

    // handlePrevClick= async() =>{
    //   // console.log("Prev : "+this.state.pageNo+"  "+ this.state.totalResults +"  "+ this.state.articlesOnOnePage+"  "+ this.state.maximumPages);
    //   this.setState({loading:true});
    //   let url=`https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=${this.props.country}&apiKey=c2e7fbf6be224c7aa4df54f1f5c7d635&pageSize=${this.props.articlesOnOnePage}&page=${this.state.pageNo-1}`;
    //   let fetchedData = await fetch(url);
    //   let parsedData = await fetchedData.json();
    //   this.setState({articles : parsedData.articles})
    //   this.setState({
    //     pageNo: this.state.pageNo-1,
    //     loading : false
    //   })
    // }


  fetchMoreData = async() =>{
    this.setState({loading:true});
    let url=`https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&pageSize=${this.props.articlesOnOnePage}&page=${this.state.pageNo+1}`;
    let fetchedData = await fetch(url);
    let parsedData = await fetchedData.json();
    // let temp = Math.ceil((parsedData.totalResults)/this.props.articlesOnOnePage)+1;
    setTimeout(()=>{
        let str= 'str';
    },1500);
    this.setState({
      articles : this.state.articles.concat(parsedData.articles), 
      // totalResults : parsedData.totalResults,
      // maximumPages : temp,
      loading : false,
      pageNo : this.state.pageNo+1
    })
  }

  render(){
    return(
      <>
        {/* {!this.state.loading && <h2 className='text-center my-3'>NewsMonkey - Top Headlines.</h2>} */}
        {<h2 className='text-center my-3'>Hyper Stream - Latest News.</h2>}
        <InfiniteScroll
              dataLength={this.state.articles.length}   //This line will not work properly if the API stops responding.
              next={this.fetchMoreData}
              hasMore={this.state.articles.length < this.state.totalResults}
              loader={<Loading/>}
              >
                <div className='container' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                  {this.state.articles.map((element) =>{
                    return <NewsItem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt}  newsSource = {element.source.name}/>
                  })}
                  {/* {this.state.loading && <Loading/>} */}
                </div>
                {/* <div className="container text-center">{
                      this.state.pageNo+1>=this.state.maximumPages && <h4>--- End Of Headlines ---</h4>
                }
                </div> */}
        </InfiniteScroll>

        {/* <div className='container my-3' style={{display:'flex', justifyContent:'space-between'}}>
          <button disabled={this.state.pageNo<=1?true: false} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous </button>
          <button disabled={this.state.pageNo+1<this.state.maximumPages?false: true}  type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
        </div>         */}

      </>
    )
  }
}

export default News