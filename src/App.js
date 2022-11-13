import './App.scss';
import { useEffect, useState } from 'react';

function App() {

  const [quoteInfo, setQuoteInfo] = useState({});

  useEffect(() => {

  }, [])

  const getQuote = () => {
    fetch(`https://api.quotable.io/random`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setQuoteInfo({
        text: data.content,
        author: data.author,
      });
     
    })}

  return (

    <div className="App">



      <div id='quote-box' className=' card rounded  mt-5' >
        <p id='text' className='pt-3'>{quoteInfo.text}</p>
        <p id='author'> -  {quoteInfo.author} </p>

      <div className='btn-container'>
        <div className='item'>
        <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + quoteInfo.text + ' ' + '-'+quoteInfo.author} target="_blank" id='tweet-quote' className='btn btn-info'>
        <i class="bi bi-twitter"></i>
        </a>
        </div>

        <div className='item'>
        <button id='new-quote' onClick={getQuote} className='btn btn-dark'>
          New Quote
        </button>
     
        </div>

      </div>


      </div>

    </div>
  )
}


export default App;
