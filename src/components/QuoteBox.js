const QuoteBox = (props) => {
    return (
      <div id="quote-box">
        <p className="quote">&ldquo;</p>
        <p id="text">
          {props.loading
            ? "loading quote..."
            : props.error
            ? "Sorry, something went wrong."
            : props.quote.quote}
        </p>
        <p id="author">{!props.loading && !props.error && props.quote.author}</p>
        <button
          id="new-quote"
          className="btn new-quote"
          onClick={props.handleNewQuoteClick}
        >
          New Quote
        </button>
        <a
          id="tweet-quote"
          className="btn tweet-quote"
          title="tweet this quote"
          href={props.tweetHref}
          target="_top"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
    );
  };

  export default QuoteBox;