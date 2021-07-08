import React, { useEffect, useState } from "react";
import Quote from './components/Quote';
import Spinner from './components/Spinner';
import FaqFooter from './components/FaqFooter/FaqFooter'

const initialQuote = {
  text: 'Quote',
  author: 'Autor',
}

function App() {
  const [quote, setQuote] = useState(initialQuote)
  const [loading, setLoading] = useState(true)

  const updateQuote = async () => {
    setLoading(true);
    const url = "https://breakingbadapi.com/api/quote/random";
    const res = await fetch(url);
    const [newQuote] = await res.json();
    const { quote: text, author } = newQuote
    setQuote({
      text,
      author,
    });
    setLoading(false);
  }

  useEffect (() => {
    updateQuote();
  }, []);

  return (
    <div className="App">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
        alt="logo"
      />
      <button onClick={() => updateQuote()} > Obtener Otra </button>

      {
        loading
        ?<Spinner />
        :<Quote quote={quote}/>
      }
      <FaqFooter />
    </div>
  );
}

export default App;
