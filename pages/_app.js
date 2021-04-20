import Head from 'next/head';

import 'styles/globals.css';
import { Nav, Alert } from 'components';

export default App;

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Next.js 10 - CRUD Example with React Hook Form</title>

                {/* bootstrap css */}
                <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
            </Head>

            <div className="app-container bg-light">
                <Nav />
                <Alert />
                <div className="container pt-4 pb-4">
                    <Component {...pageProps} />
                </div>
            </div>

            {/* credits */}
            <div className="text-center mt-4">
                <p>
                    <a href="https://jasonwatmore.com/post/2021/04/20/next-js-10-crud-example-with-react-hook-form" target="_top">Next.js 10 - CRUD Example with React Hook Form</a>
                </p>
                <p>
                    <a href="https://jasonwatmore.com" target="_top">JasonWatmore.com</a>
                </p>
            </div>
        </>
    );
}
