import QuoteList from '../components/quotes/QuoteList'

import Layout from '../components/layout/Layout'

const Quotes = props => {
    return <div>
        <Layout>
            <QuoteList quotes={props.allQuotes} />
        </Layout>
    </div>
}

export default Quotes