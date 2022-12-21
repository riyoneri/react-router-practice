import { useState } from 'react'
import QuoteList from '../components/quotes/QuoteList'

import Layout from '../components/layout/Layout'

const Quotes = props => {
    const [allQuotes, setAllQuotes] = useState(props.allQuotes)

    const sortingFunctionHandler = (order) => {
        let quotesContainer = allQuotes
        if(order === 'ascending') {
            quotesContainer.sort((a, b) => a.id - b.id)
            setAllQuotes(quotesContainer)
        } else {
            quotesContainer.sort((a, b) => b.id - a.id)
            setAllQuotes(quotesContainer)
        }
    }

    return <div>
        <Layout>
            <QuoteList onSort={sortingFunctionHandler} quotes={allQuotes} />
        </Layout>
    </div>
}

export default Quotes