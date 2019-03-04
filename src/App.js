import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="header">
          <h1>Jeremy Carlsten</h1>
          <h3>Developer, Woodworker, Geek.</h3>

          <nav className="fill">
              <ul>
                  <li><a className="active" href="#">Home</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Portfolio</a></li>
              </ul>
          </nav>
      </div>
      <div className="clear"></div>
      <div className="page-wrap">
          <div className="masonry">
            <div className="item">foo</div>
            <div className="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ducimus alias animi suscipit perspiciatis! Impedit, veritatis suscipit fuga blanditiis vero quos placeat provident debitis, ab sed numquam soluta pariatur eveniet?</div>
            <div className="item">lorem</div>
            <div className="item">lorem</div>
            <div className="item">lorem</div>
            <div className="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ducimus alias animi suscipit perspiciatis! Impedit, veritatis suscipit fuga blanditiis vero quos placeat provident debitis, ab sed numquam soluta pariatur eveniet?</div>
            <div className="item">lorem</div>
            <div className="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ducimus alias animi suscipit perspiciatis! Impedit, veritatis suscipit fuga blanditiis vero quos placeat provident debitis, ab sed numquam soluta pariatur eveniet?</div>
          </div>
      </div>

      </div>
    );
  }
}

export default App;
