import { useParams } from 'react-router-dom'

import HighlightedQuote from "../components/quotes/HighlightedQuote"
import NoQuotesFound from '../components/quotes/NoQuotesFound'

const QuoteDetail = props => {
    const params = useParams()

    const quoteIndex = props.allQuotes.findIndex(quote => quote.id === params.quoteId)

    let quoteDisplay = <NoQuotesFound />

    if (quoteIndex > -1) {
        quoteDisplay = <HighlightedQuote
            text={props.allQuotes[quoteIndex].text}
            author={props.allQuotes[quoteIndex].author}
        />
    }

    return <div>
        {quoteDisplay}
    </div>
}

export default QuoteDetail