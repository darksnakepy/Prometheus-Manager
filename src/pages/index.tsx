import NavBar from "../components/NavBar/NavBar"
import { useRouter } from "next/router";
import MainPage from "~/components/MainPage/MainPage"
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { DataRequest } from "~/pages/api/data/getName";
import postData from "~/utils/fetcher";

export default function Home() {

  const router = useRouter();

  const [cookies, setCookies, removeCookies] = useCookies(["token", "email"])
  const [userName, setUserName] = useState("")
  const [userLogged, setUserLogged] = useState(false)

  useEffect(() => {
      async function getUserName(token: string){
          const req: DataRequest = {
              sessionId: token
          }
          const res = JSON.parse(await postData("/api/data/getName", req));
          setUserName(res.email)
          setUserLogged(true)
      }
      if(cookies.email != undefined) {
        setUserName(cookies.email)
        setUserLogged(true)
        return;
      }
      if(cookies.token != undefined) {
        getUserName(cookies.token)
      }
  }, [])

  return (
    <>
      <NavBar
        onAccountClick={async () => {
          await router.push("/register");
        }}
        userName={userName}
        isLogged={userLogged}
      />
        <MainPage />
    </>

  );
}
