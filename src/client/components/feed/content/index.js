import React from 'react';
import Paragraph from './Paragraph';

export default ({articleURL, title, paragraphs }) => <div className="content">
  <div className="f-col-now">
    <h2>{title}</h2>
    {
      paragraphs.map(paragraph => <Paragraph key={paragraphs.indexOf(paragraph)} paragraph={paragraph} articleURL={articleURL} />)
    }
  </div>
</div>