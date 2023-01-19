import Image from "next/image"

export default function Hero(){
    return (
        <>
            <section id="hero" class="bg-no-repeat bg-contain bg-bottom">
                <div class="container mx-auto px-6 text-center md:pt-20 pb-52">
                    <Image src="/img/computer.png" alt="" class="mx-auto w-96 h-auto" width={1068} height={1068} />
                    <h1 class="max-w-2xl mx-auto mb-10 text-3xl font-bold font-opensans leading-normal mt-14 md:text-4xl">
                        Portfolio Blog
                    </h1>
                    <p class="max-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg font-opensans">
                    I'm a full stack web developer with experience in .Net, Laravel, WordPress, and React.
                    </p>
                    <button class="p-3 rounded-full w-52 bg-rose-700 text-white hover:scale-95">
                    Checkout my Projects
                    </button>
                </div>
            </section>        
        </>
    )
}