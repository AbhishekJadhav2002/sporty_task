export default function FullScreenSection({ children, heading, tagLine, classNames }) {
    return (
        <section className={`mx-auto py-[80px] px-[25px] ${classNames || ''}`}>
            <p className='text-[15px] font-medium text-cyan-400 mb-1'>{heading}</p>
            <h2 className='max-w-[500px] mb-[25px] text-[35px] font-medium text-white-400 -tracking-[0.035em] leading-8 md:leading-[40px]'>{tagLine}</h2>
            {children}
        </section>
    )
}