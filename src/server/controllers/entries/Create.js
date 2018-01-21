import sha256 from 'sha256';
import Entry from '../../models/entry';
import uuid from 'uuid/v4';
import entryValidate from '../../../utils/validators/entryValidator';

export const Create = async ctx => {
  try {
    const { articleURL, originalText, usersText } = ctx.request.body;
    const { isValid, errors } = entryValidate({ articleURL, originalText, usersText });
    if (!isValid) {
      ctx.throw(400, { message: errors });
    }

    const id = sha256(`${articleURL}${originalText}`);
    const ext = await Entry.findOne({ id });

    if (!ext) {
      const entry = {
        id,
        articleURL,
        originalText,
        isApproved: false,
        suggestions: [
          {
            id: uuid(),
            text: usersText
          }
        ]
      };

      if (!await Entry(entry).save()) {
        ctx.throw('409', { message: 'Conflict create entry' });
      } else {
        ctx.status = 200;
        ctx.body = {
          data: entry
        };
      }
    } else {
      ext.suggestions.push({ id: uuid(), text: usersText });
      if (!await ext.save()) {
        ctx.throw('409', { message: 'Conflict create entry' });
      } else {
        ctx.status = 200;
        ctx.body = {
          data: ext
        };
      }
    }


  } catch (e) {
    console.log(e);
    const defaultMsg = 'Internal server error';
    ctx.status = e.status || 500;
    ctx.body = {
      error: e.message || defaultMsg
    };
  }
};