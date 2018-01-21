import Entry from '../../models/entry';

export const List = async ctx => {
  try {
    const { showApproved } = ctx.request.query;
    const entries = await Entry.find({ isApproved: !!showApproved });
    if(!entries) {
      ctx.throw(409, { message: 'Conflict fetch entries!' })
    }

    ctx.status = 200;
    ctx.body = {
      data: entries
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