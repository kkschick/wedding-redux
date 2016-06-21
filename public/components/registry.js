import React from 'react';

export default class Registry extends React.Component {
  render() {
    return (
      <div>
        <h1 className="header-large">Registry</h1>
        <div className="paragraph-text">
          Please know that your love, support, and presence at our wedding<br />
          means more to us than any present. But, if you must get us a gift,<br />
          you can find our registry on Zola here:
        </div>
        <a href="https://www.zola.com/registry/katieandwalter"
           target="_blank">
          <img src="./public/img/zola-logo.png"
               className="zola-image" />
        </a>
      </div>
    );
  }
}
