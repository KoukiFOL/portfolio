import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Content.js';

function App() {
  const contentRef = useRef(null); // Content部分を参照するためのref

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' }); // スムーズにスクロール
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>上山航輝</code>
        </p>
        <a
          className="App-link"
          href="#!"
          onClick={scrollToContent} // クリックでスクロール
        >
          Learn Ueyama
        </a>
      </header>
      <div ref={contentRef}> {/* refを設定 */}
        <Content />
      </div>
    </div>
  );
}

export default App;
