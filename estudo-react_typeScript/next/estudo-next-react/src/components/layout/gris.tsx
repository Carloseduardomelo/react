interface IPropsGrid {
    children: any
    cols?: string
}


const Grid = (props:IPropsGrid) => {
    return(
        // grid-cols-1 ms:grid-cols-2 lg:grid-cols-4
        <div className={`grid grid-cols-${props.cols ?? 1} gap-4`}>
            {props.children}
        </div>
    )
}

export default Grid