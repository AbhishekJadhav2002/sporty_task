export default function CardsContainer({ children, classNames }) {
    return (
        <div className={`grid md:grid-cols-2 grid-cols-1 gap-[25px] mb-[26px] ${classNames || ''}`}>
            {children}
        </div>
    )
}