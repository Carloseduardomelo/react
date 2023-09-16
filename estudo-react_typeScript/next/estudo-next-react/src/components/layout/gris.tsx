interface IPropsGrid {
    children: any
    cols?: string
    sm?: string
    md?: string
    lg?: string
    xl?: string
    xl2?: string

    //! tipagem que vamos usar como parametro da function do grid.
}


const Grid = (props:IPropsGrid) => {
    //! esse compomemte server para testar um layout com grid
    return(
        // grid-cols-1 ms:grid-cols-2 lg:grid-cols-4
        //! essa parte e literalmente uma responsividade
        <div className={`grid grid-cols-${props.cols ?? 1}
        ${props.sm ?  `sm:grid-cols-${props.sm}` : ''}
        ${props.md ?  `md:grid-cols-${props.md}` : ''}
        ${props.lg ?  `lg:grid-cols-${props.lg}` : ''}
        ${props.xl ?  `xl:grid-cols-${props.xl}` : ''}
        ${props.xl2 ?`2xl:grid-cols-${props.xl2}`: ''}
        gap-4`}>
            {props.children}
        </div>
    )
}

export default Grid