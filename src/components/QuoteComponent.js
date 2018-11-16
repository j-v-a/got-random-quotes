import React from 'react';

class QuoteComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      character: ''
    };
    this.getNewQuote = this.getNewQuote.bind(this);
    this.getNewQuote();
  }
  getNewQuote() {
    fetch('https://got-quotes.herokuapp.com/quotes.json')
      .then(response => response.json())
      .then(quote =>
        this.setState({
          quote: quote.quote,
          character: quote.character
        })
      );
  }
  render() {
    const href = `https://twitter.com/intent/tweet?hastags=GotQuote&text="${
      this.state.quote
    }" - ${this.state.character}`;
    return (
      <div className="quote-box" onClick={this.getNewQuote}>
        <h1 id="new-quote">GOT Quote?</h1>
        <p id="text">"{this.state.quote}"</p>
        <p id="author">- {this.state.character}</p>
        {}
        <a id="tweet-quote" href={href} target="blank" alt="Tweet this quote!">
          <i className="fa fa-twitter" />
        </a>
      </div>
    );
  }
}

export default QuoteComponent;
