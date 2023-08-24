import { Link } from "react-router-dom"
const Home = () => {
    return(
        <div color="red">
            ola mundo

            <Link to={`/login`}> login </Link>
        </div>
    )
}

export default Home