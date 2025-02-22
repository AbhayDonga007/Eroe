"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"

interface EmailFormProps {
  onSubmit: (email: string) => void
}

export function EmailForm({ onSubmit }: EmailFormProps) {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setError("Please enter an email address.")
      return
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.")
      return
    }
    setError("")
    onSubmit(email)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
      <div className="space-y-2">
        <Label htmlFor="email">Enter your email to view your orders</Label>
        <div className="flex space-x-2">
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit">View Orders</Button>
        </div>
      </div>
      {error && (
        <div className="flex items-center space-x-2 text-destructive">
          <AlertCircle className="h-4 w-4" />
          <span className="text-sm">{error}</span>
        </div>
      )}
    </form>
  )
}

