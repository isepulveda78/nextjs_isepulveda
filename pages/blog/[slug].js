import Layout from "@/components/Layout"
import Footer from "@/components/Footer"
import { getPost, getSlugs } from "utls/wordpress"
import Image from "next/image"

export default function PostPage({post}){
   return (
    <Layout>
            <div className="flex md:justify-between px-4 mx-auto max-w-screen-xl">
                <article className="mx-auto md:w-full md:max-w-2xl md:mt-20 sm:mt-10">
                    <header className="mb-4 lg:mb-6">
                        <address className="flex items-center mb-6 not-italic">
                            <div className="inline-flex items-center text-gray-900 dark:text-white">
                                <div className="mr-4 w-16 h-16 rounded-full" alt="Jese Leos" dangerouslySetInnerHTML={{ __html: post.author_image}}></div>
                                <div>
                                    <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">{post.author}</a>
                                    <p className="text-base font-light text-gray-500 dark:text-gray-400">{post.author_bio}</p>
                                    <p className="text-base font-light text-gray-500 dark:text-gray-400"></p>
                                </div>
                            </div>
                        </address>
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h1>
                    </header>
                    <div className="post" dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
                    </article>
            </div>
            <Footer /> 
    </Layout>
   )
}

export async function getStaticPaths(){
    const paths = await getSlugs('posts')

    return {
        paths,
        fallback: 'blocking',
    }
}

export async function getStaticProps({ params }){
    const post = await getPost(params.slug)
    return{
        props: {
            post
        },
        revalidate: 10,
    }
}