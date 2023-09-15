interface IPropsGrid {
    children: any
    cols?: string

    //! tipagem que vamos usar como parametro da function do grid.
}


const Grid = (props:IPropsGrid) => {
    //! esse compomemte server para testar um layout com grid
    return(
        // grid-cols-1 ms:grid-cols-2 lg:grid-cols-4
        <div className={`grid grid-cols-${props.cols ?? 1} gap-4`}>
            {props.children}
        </div>
    )
}

export default Grid