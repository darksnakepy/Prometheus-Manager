import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar/NavBar"
import { useRouter } from "next/router";
import LoginForm from "~/components/auth/LoginForm";
import MainPage from "~/components/MainPage/MainPage"
import { Main } from "next/document";

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
