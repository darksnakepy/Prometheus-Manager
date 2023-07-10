import { NextPage } from "next";
import NavBar from "~/components/NavBar/NavBar";
import SignUpForm from "~/components/auth/SignUpForm";

const Signup : NextPage = () =>{
    return(
        <>
            <SignUpForm />
        </>
    )
}

export default Signup;