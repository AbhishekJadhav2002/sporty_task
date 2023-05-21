export default function CardsContainer({ children, classNames }) {
    return (
        <div className={`grid grid-cols-2 gap-[25px] mb-[26px] ${classNames}`}>
            {children}
        </div>
    )
}