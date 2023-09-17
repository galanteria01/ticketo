'use client'

import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function Auth() {

  const router = useRouter()
  const handleLogin = () => { router.push('/') }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <Card className="w-[640px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials</CardDescription>
        </CardHeader>
        <CardContent>
          <Input placeholder="something@nothing.in" className="my-6" />
          <Input placeholder="********" className="my-6" />
        </CardContent>
        <CardFooter>
          <Button onClick={handleLogin}>Login</Button>
        </CardFooter>
      </Card>
    </main>
  )
}