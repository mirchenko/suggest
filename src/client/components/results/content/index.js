import React from 'react';
import EntryItem from './EntryItem';

export default ({ data, patchEntry, deleteEntry, approved }) => <div className="f-col-now">
  {
    data.map(item => {
      if(approved && !item.isApproved) {
        return null;
      }

      if(!approved && item.isApproved) {
        return null;
      }

      return <EntryItem key={item.id} {...item} patchEntry={patchEntry} deleteEntry={deleteEntry}/>;
    })
  }
</div>;