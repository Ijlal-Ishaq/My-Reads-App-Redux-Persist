export const moveToCurrentlyReading = (id,from,book) =>{

    return{
        type : 'MOVE_TO',
        id,
        to: 'CurrentlyReading',
        from,
        book,
    }

} 

export const moveToWantToRead = (id,from,book) =>{

    return{
        type : 'MOVE_TO',
        id,
        to: 'WantToRead',
        from,
        book,
    }

} 

export const moveToRead = (id,from,book) =>{

    return{
        type : 'MOVE_TO',
        id,
        to: 'Read',
        from,
        book,
    }

} 

export const remove = (id,from,book)=>{
    return{
        type : 'REMOVE',
        id,
        from,
        book,
    }
}