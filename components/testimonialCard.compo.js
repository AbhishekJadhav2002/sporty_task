import Image from "next/image";
import Link from "next/link";

export default function TestimonialCard({ logo, text, author_photo, author_name, author_position }) {
    return (
        <Link className='block p-[25px] bg-gray-800/50 align-middle border-0 outline-0 rounded-[8px] cursor-pointer no-underline' href="#">
            <Image src={logo.logo} alt='logo' width={logo.width} height={logo.height} />
            <p className='text-[17px] leading-[27px] my-[20px] -tracking-[0.01em] hyphens-auto before:content-["“"] after:content-["”"]'>
                {text}
            </p>
            <figure className='flex items-center gap-[10px]'>
                <Image src={author_photo} alt='author_photo' width={35} height={35} className='rounded-full' />
                <cite className='text-gray-400 text-[15px] leading-snug -tracking-[0.01em] not-italic'>
                    {`${author_name}, ${author_position}`}
                </cite>
            </figure>
        </Link>
    )
}