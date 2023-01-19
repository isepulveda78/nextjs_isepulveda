import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaLinkedinIn } from "react-icons/fa"
export default function Footer(){
    return (
        <>
            <footer class="text-sky-900">
                <div class="container max-w-6xl py-10 mx-auto">
                    <div class="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
                        <div class="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
                            <div class="h-auto">
                                <Image src="/img/isepulveda.png" alt="" class="w-44 md:ml-3" width={624} height={258} />
                            </div>
                                <div class="flex flex-col items-center space-y-4 font-bold md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                                        <div class="h-10 group">
                                            <Link href="#">Work</Link>
                                            <div class="mx-2 group-hover:border-b group-hover:border-sky-900"></div>
                                        </div>
                                        <div class="h-10 group">
                                            <Link href="#">Side Projects</Link>
                                            <div class="mx-2 group-hover:border-b group-hover:border-sky-900"></div>
                                        </div>
                                        <div class="h-10 group">
                                            <Link href="#">Blog</Link>
                                            <div class="mx-2 group-hover:border-b group-hover:border-sky-900"></div>
                                        </div>
                                </div>
                        
                        </div>
                        <div class="flex flex-col items-start justify-between space-y-4 text-gray-500">
                            <div class="flex items-center justify-center space-x-4 md:justify-end mx-auto md:mx-0 md:mt-8">
                                <div class="h-8 group">
                                    <Link href="#">
                                        <FaFacebook class="h-6 text-sky-900" />
                                    </Link>
                                </div>
                                <div class="h-8 group">
                                    <Link href="#">
                                        <FaLinkedinIn class="h-6 text-sky-900" />
                                    </Link>
                                </div>
                            </div>
                            <div class="font-bold">
                                &copy; 2022 isepulveda. All Rights Reserved
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}