import { useState, useEffect } from 'react';
import QuoteBox from './components/QuoteBox';

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [tweetHref, setTweetHref] = useState("");

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const newQuoteIndex = Math.floor(Math.random() * data.quotes.length);
        const newTweetHref =
          "https://twitter.com/intent/tweet?text=" +
          encodeURIComponent(
            '"' +
              data.quotes[newQuoteIndex].quote +
              '" -' +
              data.quotes[newQuoteIndex].author
          );
        setQuotes(data.quotes);
        setQuoteIndex(newQuoteIndex);
        setTweetHref(newTweetHref);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleNewQuoteClick = () => {
    const newQuoteIndex = Math.floor(Math.random() * quotes.length);
    const newTweetHref =
      "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent(
        '"' + quotes[newQuoteIndex].quote + '" -' + quotes[newQuoteIndex].author
      );
    setQuoteIndex(newQuoteIndex);
    setTweetHref(newTweetHref);
  };

  return (
    <div className="app">
      <QuoteBox
        quote={quotes[quoteIndex]}
        error={error}
        loading={loading}
        handleNewQuoteClick={handleNewQuoteClick}
        tweetHref={tweetHref}
      />
    </div>
  );
};

export default App;
