interface IPropsGrid {
    chider: any
}


const Grid = (props:IPropsGrid) => {
    return(
        <div>
            {props.chider}
        </div>
    )
}

export default Grid