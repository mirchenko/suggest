import Entry from '../../models/entry';

export const Delete = async ctx => {
  try {
    const { id } = ctx.params;

    if(!await Entry.remove({ id })) {
      ctx.throw(409, { error: { message: 'Conflict remove entry!' } })
    }


    ctx.status = 200;
    ctx.body = {
      message: 'ok'
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