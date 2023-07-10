import { type NextPage } from "next";
import NavBar from "~/components/NavBar/NavBar";
import LoginForm from "~/components/auth/LoginForm";

const Home: NextPage = () =>{
    return(
        <>
            <LoginForm/>
        </>
    )
}

export default Home;