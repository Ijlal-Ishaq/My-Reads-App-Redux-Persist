const initState={
    currentlyReading: [] ,
    wantToRead: [],
    read: [],
}

const rootReducer = (state=initState , action) =>{

    if(action.type==='MOVE_TO'){

        let book = null;

        //Removing from the current shelf and searching book with the id. 

        let newCurrentlyReading=state.currentlyReading.filter(book=>book.id!==action.book.id);
        let newwantToRead=state.wantToRead.filter(book=>book.id!==action.book.id);
        let newread=state.read.filter(book=>book.id!==action.book.id);
          
        if(action.from==='CurrentlyReading'){
            book = state.currentlyReading.find(book=>book.id===action.id);
        }
        
        else if(action.from==='WantToRead'){
            book = state.wantToRead.find(book=>book.id===action.id);           
        }

        else if(action.from==='Read'){
            book = state.read.find(book=>book.id===action.id);            
        }

        else if(action.from==='Search'){
            book=action.book;
        }


        //adding book to the new shelf. 

        if(action.to==='CurrentlyReading'){

            newCurrentlyReading.push(book);

        }else if(action.to==='WantToRead'){

            newwantToRead.push(book);

        }else if(action.to==='Read'){

            newread.push(book);

        }

        return{
            ...state,
            currentlyReading:newCurrentlyReading,
            wantToRead:newwantToRead,
            read:newread,
        }

    }

    if(action.type==='REMOVE'){


        if(action.from==='CurrentlyReading'){
            let newCurrentlyReading = state.currentlyReading.filter(book=>book.id!==action.id);
            return{
                ...state,
                currentlyReading:newCurrentlyReading,
            }
        }
        
        else if(action.from==='WantToRead'){
            let newwantToRead = state.wantToRead.filter(book=>book.id!==action.id);
            return{
                ...state,
                wantToRead:newwantToRead,
            }
        }

        else if(action.from==='Read'){
            let newread = state.read.filter(book=>book.id!==action.id);
            return{
                ...state,
                read:newread,
            }
        }

        else if(action.from==='Search'){
            let newCurrentlyReading = state.currentlyReading.filter(book=>book.id!==action.id);
            let newwantToRead = state.wantToRead.filter(book=>book.id!==action.id);
            let newread = state.read.filter(book=>book.id!==action.id);
            return{
                ...state,
                currentlyReading:newCurrentlyReading,
                wantToRead:newwantToRead,
                read:newread,
            }
        }


    }

    return state;


}

export default rootReducer;