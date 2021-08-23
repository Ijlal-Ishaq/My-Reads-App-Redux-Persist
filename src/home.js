import React from 'react'
import './App.css'
import {Link} from 'react-router-dom';
import BookShelf from './bookShelf';



const home = () =>{

    
    return (
        <div className="app">
          
          <div className="list-books">
          <div className="list-books-title">
              <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
             
              <div>
             
                  <BookShelf shelfName='Currently Reading'/>
                  <BookShelf shelfName='Want To Read'/>
                  <BookShelf shelfName='Read'/>
                  

              </div>
          
          </div>
       
       
       
          <div className="open-search">
                  <Link to={'/search'}>
                      <button style={{textDecoration:'none',border:'none'}}>Add a book</button>
                  </Link>
          </div>
          </div>
          
        </div>
      )

}



export default (home)