export const save = (e,book,key,setCurrentlyReading,setWantToRead,setRead) =>{

    if(e.target.value==='currentlyReading'){

        // checking if the currently reading is present in local storage if not then creating it otherwise 
        // checking if the book is alreading present in "currently reading" if not then adding it.
        // then checking other two sections "want to read" and "read" if they have the book then removing it from their.
        if(window.localStorage.getItem('currently_reading')===null){
          
            let currently_reading=[book];
            window.localStorage.setItem('currently_reading',JSON.stringify(currently_reading));
            // alert('Book Added to "Currently Reading" Successfully.')


        }else{

            let currently_reading=JSON.parse(window.localStorage.getItem('currently_reading'));
            let flag=false;

            currently_reading.forEach(obj => {
                if(obj.title===book.title){
                    flag=true;
                }
            });


            if(!flag){
              
                currently_reading.push(book);
                window.localStorage.setItem('currently_reading',JSON.stringify(currently_reading))
                // alert('Book Added to "Currently Reading" Successfully.')

            }else{

                // alert('Book is Already Added to "Currently Reading".')

            }
           

        }

        let want_to_read=JSON.parse(window.localStorage.getItem('want_to_read'));
        let read=JSON.parse(window.localStorage.getItem('read'));

        if(want_to_read!==null){
          
            want_to_read.forEach((element,i) => {
                
                if(element.id===book.id){

                    want_to_read.splice(i,1);
                    window.localStorage.setItem('want_to_read',JSON.stringify(want_to_read));

                }

            });
          
          
        }
        
        if(read!==null){

            read.forEach((element,i) => {
                
                if(element.id===book.id){

                    read.splice(i,1);
                    window.localStorage.setItem('read',JSON.stringify(read));

                }

            });


        }



    }else if(e.target.value==='wantToRead'){
      
      
        if(window.localStorage.getItem('want_to_read')===null){
          
            let want_to_read=[book];
            window.localStorage.setItem('want_to_read',JSON.stringify(want_to_read));
            // alert('Book Added to "Want to Read" Successfully.')


        }else{

            let want_to_read=JSON.parse(window.localStorage.getItem('want_to_read'));
            let flag=false;

            want_to_read.forEach(obj =>{

                if(obj.title===book.title){
                    flag=true;
                }

            })

            if(!flag){
              
                want_to_read.push(book);
                window.localStorage.setItem('want_to_read',JSON.stringify(want_to_read))
                // alert('Book Added to "Want to Read" Successfully.')

            }else{

                // alert('Book is Already Added to "Want to Read".')

            }
           

        }

        let currently_reading=JSON.parse(window.localStorage.getItem('currently_reading'));
        let read=JSON.parse(window.localStorage.getItem('read'));

        if(currently_reading!==null){

            currently_reading.forEach((element,i) => {
                
                if(element.id===book.id){

                    currently_reading.splice(i,1);
                    window.localStorage.setItem('currently_reading',JSON.stringify(currently_reading));

                }

            });

        }
        
        if(read!==null){

            read.forEach((element,i) => {
                
                if(element.id===book.id){

                    read.splice(i,1);
                    window.localStorage.setItem('read',JSON.stringify(read));

                }

            });


        }


    }else if(e.target.value==='read'){

        if(window.localStorage.getItem('read')===null){
          
            let read=[book];
            window.localStorage.setItem('read',JSON.stringify(read));
            // alert('Book Added to "Read" Successfully.')


        }else{

            let read=JSON.parse(window.localStorage.getItem('read'));
            let flag=false;

            read.forEach(obj =>{

                if(obj.title===book.title){
                    flag=true;
                }

            })

            if(!flag){
              
                read.push(book);
                window.localStorage.setItem('read',JSON.stringify(read))
                // alert('Book Added to "Read" Successfully.')

            }else{

                // alert('Book is Already Added to "Read".')

            }
           

        }

        let want_to_read=JSON.parse(window.localStorage.getItem('want_to_read'));
        let currently_reading=JSON.parse(window.localStorage.getItem('currently_reading'));

        if(want_to_read!==null){
          
            want_to_read.forEach((element,i) => {
                
                if(element.id===book.id){

                    want_to_read.splice(i,1);
                    window.localStorage.setItem('want_to_read',JSON.stringify(want_to_read));

                }

            });
          
          
        }
        
        if(currently_reading!==null){

            currently_reading.forEach((element,i) => {
                
                if(element.id===book.id){

                    currently_reading.splice(i,1);
                    window.localStorage.setItem('currently_reading',JSON.stringify(currently_reading));

                }

            });

        }

    }else if(e.target.value==='none'){


        let read=JSON.parse(window.localStorage.getItem('read'));
        let want_to_read=JSON.parse(window.localStorage.getItem('want_to_read'));
        let currently_reading=JSON.parse(window.localStorage.getItem('currently_reading'));

        //searching the book in "want to read" and removing it...
        if(want_to_read!==null){
          
            want_to_read.forEach((element,i) => {
                
                if(element.id===book.id){

                    want_to_read.splice(i,1);
                    window.localStorage.setItem('want_to_read',JSON.stringify(want_to_read));

                }

            });
          
          
        }

        //searching the book in "currently reading" and removing it...
        if(currently_reading!==null){

            currently_reading.forEach((element,i) => {
                
                if(element.id===book.id){

                    currently_reading.splice(i,1);
                    window.localStorage.setItem('currently_reading',JSON.stringify(currently_reading));

                }

            });

        }

        //searching the book in "read" and removing it...
        if(read!==null){

            read.forEach((element,i) => {
                
                if(element.id===book.id){

                    read.splice(i,1);
                    window.localStorage.setItem('read',JSON.stringify(read));

                }

            });


        }

        // alert('Book has been removed Successfully.')


    }


    setCurrentlyReading(window.localStorage.getItem('currently_reading') !==null ? JSON.parse(window.localStorage.getItem('currently_reading')) : [])
    setWantToRead(window.localStorage.getItem('want_to_read') !==null ? JSON.parse(window.localStorage.getItem('want_to_read')) : [])
    setRead(window.localStorage.getItem('read') !==null ? JSON.parse(window.localStorage.getItem('read')) : [])
    


}


