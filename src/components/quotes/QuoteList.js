import { useState } from 'react';
import { Fragment } from 'react';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  const [sortingOrder, setSortingOrder] = useState({
    state: false,
    type: 'default'
  })

  const sortHandler = () => {
    if (!sortingOrder.state || sortingOrder.type === 'descending') {
      props.onSort('ascending')
      setSortingOrder({state: true, type: 'ascending'})
    } else {
      props.onSort('descending')
      setSortingOrder({state: true, type: 'descending'})
    }
  }

  let sortingButton;
  if (sortingOrder.state === false || sortingOrder.type === 'descending') {
    sortingButton = <button onClick={sortHandler}>Sort Ascending</button>
  } else {
    sortingButton = <button onClick={sortHandler}>Sort Descending</button>
  }

  return (
    <Fragment>
      <div className={classes.sorting} >
        {sortingButton}
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
