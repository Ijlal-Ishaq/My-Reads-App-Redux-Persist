import React from 'react'
import Book from './book'
import { connect } from 'react-redux'

function bookShelf({shelfName,books}) {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>

            {

                books.length !== 0 ? (

                  <div className="bookshelf-books">
                      <ol className="books-grid">{

                          books.map((book,i)=>{

                              return(
                                    
                                      <Book id={book.id} shelfName={shelfName} key={i} />                                
  
                              );
                          
  
                          })


                      }

                      </ol>
                  </div>
                    

                ) : <h3 style={{textAlign:'center'}}>No Books</h3>
                

            }
        
        </div>
    )
}

const mapStateToProp = (state, ownProps) =>{

    const shelfName=ownProps.shelfName;

    return{
        books: shelfName === 'Currently Reading' ? state.currentlyReading : shelfName==='Want To Read' ? state.wantToRead : state.read,
    }

}

export default connect(mapStateToProp)(bookShelf)
