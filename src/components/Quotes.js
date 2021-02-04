import React, {useState, useEffect} from 'react';


const Quotes = () =>{
    const [quote,setQuote] = useState('');
    const [author,setAuthor] = useState('');
   /// const [color,setColor] = useState('');

    useEffect(()=>{
        getQuote()
    },[]);

    const getQuote= () =>{
       let Url='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
        fetch(Url)
        .then(res => res.json())
        .then(data => {
            let dataQuotes = data.quotes;
            let randomNum = Math.floor(Math.random() * dataQuotes.length);
            let randomQuote = dataQuotes[randomNum];
            let num1 = randomNum + 100;
            let num2 = randomNum + 150;
            let num3 = randomNum + 50;
            let colrs = [num1,num2,num3];
            setQuote(randomQuote.quote)
            setAuthor(randomQuote.author)
            console.log(num1,num2,num3);
        })
    }
        const handleClick = () =>{
            getQuote();
        }
    
    return(
        
       <div id="quote-box">
            <div id="text" >
                 <p> {quote} </p>
             </div>
             <div id="author">
                    <p> {author} </p>
             </div>
             <div id="buttons">
                <div className="social-media">
                <a href="https://twitter.com/home" target="_blank" id="twitter">
                <span><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgNC41NTdjLS44ODMuMzkyLTEuODMyLjY1Ni0yLjgyOC43NzUgMS4wMTctLjYwOSAxLjc5OC0xLjU3NCAyLjE2NS0yLjcyNC0uOTUxLjU2NC0yLjAwNS45NzQtMy4xMjcgMS4xOTUtLjg5Ny0uOTU3LTIuMTc4LTEuNTU1LTMuNTk0LTEuNTU1LTMuMTc5IDAtNS41MTUgMi45NjYtNC43OTcgNi4wNDUtNC4wOTEtLjIwNS03LjcxOS0yLjE2NS0xMC4xNDgtNS4xNDQtMS4yOSAyLjIxMy0uNjY5IDUuMTA4IDEuNTIzIDYuNTc0LS44MDYtLjAyNi0xLjU2Ni0uMjQ3LTIuMjI5LS42MTYtLjA1NCAyLjI4MSAxLjU4MSA0LjQxNSAzLjk0OSA0Ljg5LS42OTMuMTg4LTEuNDUyLjIzMi0yLjIyNC4wODQuNjI2IDEuOTU2IDIuNDQ0IDMuMzc5IDQuNiAzLjQxOS0yLjA3IDEuNjIzLTQuNjc4IDIuMzQ4LTcuMjkgMi4wNCAyLjE3OSAxLjM5NyA0Ljc2OCAyLjIxMiA3LjU0OCAyLjIxMiA5LjE0MiAwIDE0LjMwNy03LjcyMSAxMy45OTUtMTQuNjQ2Ljk2Mi0uNjk1IDEuNzk3LTEuNTYyIDIuNDU3LTIuNTQ5eiIvPjwvc3ZnPg==" alt=""/></span></a>        
                
            </div>
            <button onClick={handleClick} id="new-quote">New quote</button>
       </div>  
    </div> 
    )
}
export default Quotes;