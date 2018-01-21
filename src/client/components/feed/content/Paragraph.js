import React from 'react';
import Form from './Form';

export default ({ paragraph, articleURL }) => <div className="paragraph">
  <div className="f-col-now">
    <div className="f-col-now">
      <h4>Original Text</h4>
      <p>{paragraph}</p>
    </div>
    <Form paragraph={paragraph} articleURL={articleURL}/>
  </div>
</div>;
