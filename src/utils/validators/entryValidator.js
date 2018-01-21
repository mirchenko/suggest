import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default ({ articleURL, originalText, usersText }) => {
  const errors = {};

  if(!articleURL) {
    errors.articleURL = {
      title: 'Article Url error',
      message: 'Article Url must be type of url!'
    };
  }


  if(!originalText || originalText.length === 0) {
    errors.originalText = {
      title: 'Original Text',
      message: 'Original Text must be specified!'
    };
  }

  if(!usersText || usersText.length === 0) {
    errors.usersText = {
      title: 'Users Text',
      message: 'Users Text must be specified!'
    };
  }

  return {
    isValid: isEmpty(errors),
    errors
  };
};