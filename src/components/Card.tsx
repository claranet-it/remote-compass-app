import { ReactNode } from "react"

type PropsCard = {
    title?: string
    children: ReactNode,
    className: string
    onTransitionEnd: () => void

}
export const Card: React.FC<PropsCard> = ({
    title,
    children,
    className,
    onTransitionEnd
}) => {

    return (
        <div onTransitionEnd={onTransitionEnd} className={`${className} bg-white p-10 rounded-lg shadow-xl md:auto mx-auto lg:w-2/3`}>
            <h1>{title}</h1>
            {children}
        </div>
    )
}
