import { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from '../components/comments/Comments'
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getSingleQuote } from "../lib/api"

const QuoteDetail = () => {
    const { sendRequest, status, data: quote, error  } = useHttp(getSingleQuote, true)

    const match = useRouteMatch();
    const params = useParams()

    useEffect(() => {
        sendRequest(params.quoteId)
    }, [sendRequest, params])

    if (status === 'pending') {
        return <div className='centered'>
            <LoadingSpinner />
        </div>
    }

    if (error) {
        return <p className='centered focused'>{error}</p>
    }

    if (!quote) {
        return <div className="centered focused">
            <p>No Quote Found</p>
        </div>
    }

    return <Fragment>
        <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path={`${match.path}`} exact>
            <div className="centered">
                <Link className="btn--flat" to={`${match.url}/comments`} >Load comments</Link>
            </div>
        </Route>
        <Route path={`${match.path}/comments`}>
            <Comments />
        </Route>
    </Fragment>
}

export default QuoteDetail;