import { useRef } from 'react';
import { useParams } from 'react-router-dom';

import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api'

import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const params = useParams()
  
  const quoteId = params.quoteId

  const { sendRequest, status, error, data: addedComment } = useHttp(addComment)

  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here

    sendRequest(quoteId)
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
