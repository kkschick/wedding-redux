import React from 'react';

export default class Registry extends React.Component {
  render() {
    return (
      <div className="outer-wrapper">
        <div className="paragraph-text">
          Please know that your love, support, and presence at our wedding<br />
          mean more to us than any present. But, if you would like to get us a gift,<br />
          you can find our registry here:
        </div>
        <a href="https://www.zola.com/registry/katieandwalter"
           target="_blank">
          <img src="https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_500/v1477838783/zola-logo_gzh20z.png"
               className="zola-image" />
        </a>
      </div>
    );
  }
}
