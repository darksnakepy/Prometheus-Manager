import NavBar from "../components/NavBar/NavBar"
import { useRouter } from "next/router";
import MainPage from "~/components/MainPage/MainPage"


export default function Home() {

  const router = useRouter();

  return (
    <>
      <NavBar onAccountClick={async () =>{
        await router.push("/register")
      }}/>
      <MainPage />
    </>

  );
}
