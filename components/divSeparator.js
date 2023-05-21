export default function DivSeparator({ className }) {
    return (
        <div className={`w-full h-[1px] bg-gray-200 dark:bg-gray-700 ${className || ''}`} />
    )
}