import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom'

import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api'
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const params = useParams()
  const quoteId = params.quoteId

  const { sendRequest, error, data: loadedComments } = useHttp(getAllComments)

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  let displayComments;

  if (error) {
    displayComments = <p className='centered focused'>
      Some error occured!
    </p>
  }

  if (!loadedComments || loadedComments.length === 0) {
    displayComments = <p className='centered'>
      No Available commets for this quote
    </p>
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      <div>
        {displayComments}
      </div>
    </section>
  );
};

export default Comments;
