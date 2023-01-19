import Layout from "@/components/Layout"
import Post from "@/components/Post"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { getPosts, getCategories } from "utls/wordpress"
export default function Blog({ posts, categories }){
    const jsxPost = posts.map((post)=> {
        const cat = post.cats.map((cat)=> {
            return <button class="rounded-full bg-rose-700 px-3 m-2" key={cat.id}>{cat.name}</button>
        })
        return <Post key={post.id} post={post} cats={cat} />
    })
    return (
        <Layout>
                <section id="hero" class="bg-curvy-mode dark:bg-curvy-dark-mode bg-no-repeat bg-contain bg-bottom">
                    <div class="container mx-auto px-6 text-center md:pt-20">
                        <h1 class="max-w-2xl mx-auto mb-10 text-3xl font-bold font-opensans leading-normal mt-14 md:text-4xl">
                            Blog
                        </h1>
                            <input type="text" class="p-2 border-2 border-sky-900 hover:border-sky-700 rounded-full shadow- placeholder:p-1 md:w-80" placeholder="Search" />
                    </div>
                </section>

                <section id="blog" class="container mx-auto p-10">
                    <div class="md:grid md:grid-cols-3 md:gap-3">
                        {jsxPost}
                    </div>
                </section>
                <Footer />
        </Layout>
    )
}

export async function getStaticProps(){
    const posts = await getPosts()
    const categories = await getCategories() 
    return {
        props: {
            posts,
            categories
        },
        revalidate: 10,
    }
}