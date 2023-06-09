import DivSeparator from '@/components/divSeparator';
import TestimonialCard from '@/components/testimonialCard.compo';
import CardsContainer from '@/views/cardsContainer.views';
import FullScreenSection from '@/views/fullScreenSection.views';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    const testimonials = [
        {
            logo: {
                logo: '/vercel-logo.svg',
                width: 115,
                height: 90
            },
            text: "We've been able to focus on building solid user experiences on top of Radix Primitives. With UI components, there are just too many angles and rabbit holes to cover for product teams that wish to move quickly.",
            author_photo: '/avatar-rauno-freiberg.jpg',
            author_name: 'Rauno Freiberg',
            author_position: 'UI Engineer at Vercel'
        },
        {
            logo: {
                logo: '/codesandbox-logo.svg',
                width: 170,
                height: 90
            },
            text: 'Radix has significantly improved the accessibility standard in our components. We spend far less time discussing and implementing keyboard navigation, focus traps, and researching appropriate ARIA techniques for our components.',
            author_photo: '/avatar-scott-hutcheson.png',
            author_name: 'Scott Hutcheson',
            author_position: 'Product Engineer at CodeSandbox'
        }
    ]

    const logos = [
        {
            logo: '/vercel-logo.svg',
            link: '#'
        },
        {
            logo: '/vercel-logo.svg',
            link: '#'
        },
        {
            logo: '/vercel-logo.svg',
            link: '#'
        },
        {
            logo: '/vercel-logo.svg',
            link: '#'
        },
        {
            logo: '/vercel-logo.svg',
            link: '#'
        },
        {
            logo: '/vercel-logo.svg',
            link: '#'
        },
    ]

    return (
        <main className='max-w-[1145px] mx-auto'>
            <FullScreenSection heading='Case Studies' tagLine='World-class teams use Radix to power their products'>
                <CardsContainer>
                    {testimonials.map((testimonial, index) =>
                        <TestimonialCard key={index} logo={testimonial.logo} text={testimonial.text} author_photo={testimonial.author_photo} author_name={testimonial.author_name} author_position={testimonial.author_position} />
                    )}
                </CardsContainer>
                <Link href='#' className='flex gap-[5px] items-center text-gray-400 text-[15px]'>
                    And dozens more companies
                    <i>
                        <svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z' fill='currentColor' fillRule='evenodd' clipRule='evenodd'></path></svg>
                    </i>
                </Link>
                <div className='overflow-y-hidden overflow-x-scroll py-[15px] relative flex items-center gap-[35px] scrollbar-hide'>
                    {logos.map((logo, index) =>
                        <Link href={logo.link} key={index} className='opacity-50 hover:opacity-100 transition-opacity ease duration-100'>
                            <Image src={logo.logo} alt='logo' width={100} height={100} />
                        </Link>
                    )}
                </div>
            </FullScreenSection>
            <DivSeparator className='mx-[25px] !w-[45px]' />
        </main>
    )
}