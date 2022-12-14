import QuoteList from '../components/quotes/QuoteList'

import Layout from '../components/layout/Layout'

const DUMMY_QUOTES = [
    {
        id: '1',
        author: 'Lion',
        text: 'Test quote 1'
    },
    {
        id: '2',
        author: 'test2',
        text: 'Test quote 2'
    },
]

const Quotes = () => {
    return <div>
        <Layout>
            <QuoteList quotes={DUMMY_QUOTES} />
        </Layout>
    </div>
}

export default Quotes