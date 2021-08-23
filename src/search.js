import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Book from './book'



const searchPage = ({move_to}) =>{

    const[query,setQuery]=useState('');
    const[results,setResults]=useState([]);
    const[searching,setsearching]=useState(false); // flag
    const[not_found,setNotfound]=useState(false); // flag


    const search=(e)=>{

        if(e.target.value === '') {
        
            setResults([]);
            setNotfound(false);
            setsearching(false);
            setQuery(e.target.value);

            return
        };

        setsearching(true);
        setNotfound(false);
        setQuery(e.target.value);
        
        BooksAPI.search(e.target.value).then(result=>{


            if(result!==undefined && !result.error){
              
                setResults(result !== null ? result : []);
                setNotfound(false);
                setsearching(false);
           
            
            }else{

                setResults([]);
                setNotfound(query === '' ? false : true);
                setsearching(false);

            }
            

        })

    }


    return (
        <div className="search-books">
            <div className="search-books-bar">

                <Link to={'/'}>
                   <button className="close-search" style={{textDecoration:'none',border:'none'}} >Close</button>
                </Link> 


              <div className="search-books-input-wrapper">
                
                <input type="text" placeholder="Search by title or author" onChange={(e)=>search(e)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              
                {

                    results.length !== 0 && query !== '' ? (

                            results.map((book,i)=>{

                                return(
    
                                    <Book book={book} shelfName='Search' key={i} />
    
                                );
                            
    
                            })

                    ) : (

                        searching ? <h3>Searching...</h3> : query==='' ? <h3>Search Books</h3> : not_found ? <h3>No Result</h3> : <h3>Search Books</h3>

                    )
                    

                }

              </ol>
            </div>
          </div>
    )

}


export default searchPage;