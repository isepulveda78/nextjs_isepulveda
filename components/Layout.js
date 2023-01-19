import Head from "next/head"
import Header from './Header'

export default function Layout({title, children, keywords, description }){
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='keywords' content={keywords} />
                <meta name='description' content={description} />
                <link rel='icon' href='favicon.ico'></link>
            </Head>
            <main>
            <Header />
           
                {children}
            </main>
        </>
    )
}

Layout.defaultProps = {
    title: 'isepulveda | Portfolio',
    keywords: 'Greensboro, NC full stack web developer',
    description: 'WordPress, Laravel, ASP.Net, and React developer'
}