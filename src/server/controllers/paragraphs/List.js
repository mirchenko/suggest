import jsdom from 'jsdom';
import axios from 'axios';
import mapKeys from 'lodash/mapKeys';
const { JSDOM } = jsdom;


export const List = async ctx => {
  try {
    const { articleURL } = ctx.request.query;
    if (!articleURL) {
      ctx.throw(400, { message: 'articleURL is required query parameter!' });
    }

    try {
      const result = await axios.get(articleURL);
      if (result.status !== 200 || !result.data) {
        ctx.throw(400, { message: 'Invalid articleURL!' });
      }

      try {
        const dom = new JSDOM(result.data);
        const title = dom.window.document.querySelectorAll(`[itemprop="headline"]`)[ 0 ].textContent;
        const paragraphsBuffer = dom.window.document.querySelectorAll(`[itemprop="articleBody"] p`);
        const paragraphs = [];
        mapKeys(paragraphsBuffer, k => paragraphs.push(k.textContent));

        ctx.status = 200;
        ctx.body = {
          data: {
            articleURL,
            title,
            paragraphs
          }
        };
      } catch (e) {
        ctx.throw(400, { message: 'Cannot parse this article!' });
      }


    } catch (e) {
      ctx.throw(400, { message: 'Invalid articleURL!' });
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