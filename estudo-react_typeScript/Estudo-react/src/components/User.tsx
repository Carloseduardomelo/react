type Users = {
    name: string,
    id: string
}


function User({ name , id }  : Users){
    return(
        <>
            <p>{name}</p>
            <p>{id}</p>
        </>
    )
}

export default User