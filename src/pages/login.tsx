import { type NextPage } from "next";
import LoginForm from "~/components/auth/LoginForm";

const Home: NextPage = () =>{
    return(
        <>
            <LoginForm/>
        </>
    )
}

export default Home;