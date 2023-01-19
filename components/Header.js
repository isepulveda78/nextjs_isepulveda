import Link from "next/link"
import Image from 'next/image'

export default function Header(){
    return (
        <header id="hero" className="container max-w-6xl mx-auto px-6 py-12">
        <div className="mx-auto md:mx-0 md:absolute top-10 left-10">
               <Link href="/">
                    <Image src="/img/isepulveda.png" alt="isepulveda" className="w-auto h-24" width={624} height={258}/>
               </Link>
         </div>
            <div className="flex space-x-4 items-center justify-center uppercase md:space-x-10 md:absolute top-12 right-10 text-sky-900 font-bold">
                <div className="group">
                    <Link href="/" className="text-sky-900">Work</Link>
                    <div className="mx-2 group-hover:border-b group-hover:border-sky-900"></div>
                </div>

                <div className="group">
                    <Link href="/" className="text-sky-900">Side Projects</Link>
                    <div className="mx-2 group-hover:border-b group-hover:border-sky-900"></div>
                </div>

                <div className="group">
                    <Link href="/blog" class="text-sky-900">Blog</Link>
                    <div className="mx-2 group-hover:border-b group-hover:border-sky-900"></div>
                </div>
            </div>
        </header>
    )
}