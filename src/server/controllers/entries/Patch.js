import Entry from '../../models/entry';
import findIndex from 'lodash/findIndex';

export const Patch = async ctx => {
  try {
    const { id } = ctx.params;
    const { suggestionId } = ctx.request.body;
    if(!id || !suggestionId) {
      ctx.throw(400, { message: 'You must specify an entryId and suggestionId' });
    }

    const entry = await Entry.findOne({ id });
    if(!entry) {
      ctx.throw(404, { message: 'Entry not found!' });
    }

    const newSuggestions = entry.suggestions.map(({id, text}) => ({id, text}));
    const index = findIndex(newSuggestions, suggestion => suggestion.id === suggestionId);
    if(index < 0) {
      ctx.throw(404, { message: 'Suggestion not found in db!' });
    }


    newSuggestions[index].isApproved = true;
    entry.suggestions = newSuggestions;
    entry.isApproved = true;
    if(!await entry.save()) {
      ctx.throw(409, { message: 'Conflict save entry!' });
    }

    ctx.status = 200;
    ctx.body = {
      data: entry
    };


  } catch(e) {
    console.log(e);
    const defaultMsg = 'Internal server error';
    ctx.status = e.status || 500;
    ctx.body = {
      error: e.message || defaultMsg
    };
  }
};