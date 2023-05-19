import React, { Component } from 'react';

class ChatButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scriptLoaded: false,
      chatVisible: false
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    const s1 = document.createElement('script');
    const s0 = document.getElementsByTagName('script')[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/646769bdad80445890ede79c/1h0pva3u5';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
    s1.onload = () => {
      this.setState({ scriptLoaded: true });
    };
  }

  handleButtonClick() {
    this.setState((prevState) => ({
      chatVisible: !prevState.chatVisible
    }));
  }

  render() {
    const { scriptLoaded, chatVisible } = this.state;

    return (
      <div>
        {scriptLoaded && chatVisible && (
          <div className="chat-container">
            {/* Render your chat component here */}
            {/* Replace this with your chat implementation */}
            <div style={{ position: 'fixed', bottom: '10px', right: '10px', width: '300px', height: '400px', background: 'white', zIndex: '9999' }}>
                Chat component
                </div>

          </div>
        )}
        <button onClick={this.handleButtonClick} style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
        </button>
      </div>
    );
  }
}

export default ChatButton;
