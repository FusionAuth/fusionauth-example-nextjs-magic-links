import { useSession, getSession } from "next-auth/react"
import LoginButton from "./components/login-btn"

export default function Protected() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    return (
      <>
      <p>Access Denied</p>
      <p>Sign in to view this page</p>
      <hr/>
      <LoginButton />
      </>
    )
  }

  return (
    <>
      <h1>Protected Page</h1>
      <p>You can view this page because you are signed in.</p>
      <hr/>
      <LoginButton />
    </>
  )
}