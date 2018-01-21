import React  from 'react';
import { Button } from '../../../elements';


export default ({ id, originalText, suggestions, isApproved, patchEntry, deleteEntry }) =>
  <div className="f-col-now entry">
    <div className="f-row-now j-content-space-between entry-header">
      <h4>original text</h4>
      <Button title="delete" type="danger" handler={() => deleteEntry(id)}/>
    </div>
    <p>{originalText}</p>


    <div className="f-col-now suggestions">
      <h4>Users suggestions</h4>
      {
        suggestions.map(item => <div key={item.id} className="f-row-now a-i-center j-content-space-between">
          <p>{item.text}</p>
          <Button
            type="primary"
            handler={() => patchEntry(id, { suggestionId: item.id })}
            title={`${ isApproved
              ? item.isApproved ? 'Approved' : 'Reapprove'
              : 'Approve'
              }`}
            disabled={item.isApproved}/>
        </div>)
      }
    </div>
  </div>;