/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/siLp6H3IFy7
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Newsletter() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-200">
      <div className="container mx-auto max-w-md space-y-6 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Subscribe to our newsletter</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Get the latest updates and exclusive content straight to your inbox.
          </p>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="you@example.com" type="email" />
            </div>
          </div>
          <Button className="w-full" type="submit">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}