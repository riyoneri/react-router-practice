import { Fragment } from 'react';

import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  const history = useHistory()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)

  const isSortingAscending = queryParams.get('sort') === 'asc';

  console.log(isSortingAscending)

  const changeSortingHandler = () => {
    isSortingAscending === true ? history.push('/quotes?sort=desc') : history.push('/quotes?sort=asc')
    // history.push('/quotes?sort=asc')
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
      <button onClick={changeSortingHandler} className={classes.button}>Sort {isSortingAscending === true ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
