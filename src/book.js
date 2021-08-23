import React from 'react'
import { connect } from 'react-redux'
import {moveToCurrentlyReading,moveToWantToRead,moveToRead,remove} from './actions/moveToActions'

function book({id,shelfName,book,moveToCurrentlyReading,moveToWantToRead,moveToRead,remove}) {


    const getThumbnail=(book)=>{

        if(book.imageLinks){
            return book.imageLinks.thumbnail
        }else{
            return '' //image not found
        }
  
    }


    const moveTo=(e)=>{

        if(e.target.value==='currentlyReading'){

            moveToCurrentlyReading(id,shelfName.replaceAll(' ',''),book)//replacing all spaces from the shelf name.

        }
        else if(e.target.value==='wantToRead'){

            moveToWantToRead(id,shelfName.replaceAll(' ',''),book)

        }
        else if(e.target.value==='read'){

            moveToRead(id,shelfName.replaceAll(' ',''),book)

        }
        else{

            remove(book.id,shelfName.replaceAll(' ',''),book)

        }

    }


    return (
        <li>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+getThumbnail(book)+')' }}></div>
                <div className="book-shelf-changer">
                    <select onChange={(e) => moveTo(e)} value={shelfName==='Currently Reading' ? 'currentlyReading' : shelfName==='Want To Read' ? 'wantToRead' : shelfName==='Read' ? 'read' : 'move' }>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        </li>
    )
}


const mapStateToProps = (state,ownProps) =>{

    const id = ownProps.id;
    const shelfName = ownProps.shelfName;

    if(shelfName==='Currently Reading'){

        return{
            book:state.currentlyReading.find(book => book.id===id)
        }

    }else if(shelfName==='Want To Read'){

        return{
            book:state.wantToRead.find(book => book.id===id)
        }

    }else if (shelfName==='Read'){

        return{
            book:state.read.find(book => book.id===id)
        }

    }else{

        return{}

    }

}

const mapDispatchToProps = (dispatch) =>{
    return{
        moveToCurrentlyReading : (id,from,book) => {dispatch (moveToCurrentlyReading(id,from,book))},
        moveToWantToRead : (id,from,book) => {dispatch (moveToWantToRead(id,from,book))},
        moveToRead : (id,from,book) => {dispatch (moveToRead(id,from,book))},
        remove : (id,from) => {dispatch(remove(id,from))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(book)
