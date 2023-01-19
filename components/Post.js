import Link from "next/link"
import Image from "next/image"

export default function Post({post, cats}){
    return (
        <>
       <div className="shadow-lg w-full min-h-7 p-5 rounded text-center">
          <Link href={`/blog/${post.slug}`}><h2 className="text-3xl font-bold p-2">{post.title.rendered}</h2></Link>
            <p>By Israel Sepulveda on December 1, 2022</p>
            <hr/>
            <div className="p-2 text-white uppercase">
              {cats}
            </div>
        </div>
        </>
    )
}