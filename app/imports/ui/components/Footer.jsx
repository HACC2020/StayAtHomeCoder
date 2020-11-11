import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px' };
    return (
        <footer>
          <div style={divStyle} className="ui center aligned container">
            <a href="https://github.com/HACC2020/StayAtHomeCoder">Link to our Github page</a>
          </div>
        </footer>
    );
  }
}

export default Footer;
