import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Bitcoin, Send, Mail } from "lucide-react"

export default function SignUpPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f0faf9]">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white">
        <Link className="flex items-center justify-center" href="/">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-09-26%2017.29.15-rKfRTrAU99YqoBypRxkNB8gpeAZcNd.jpg" alt="KitchenAds Logo" className="h-10 w-10" />
          <span className="ml-2 text-2xl font-bold text-[#00a086]">KitchenAds</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-[#00a086]" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:text-[#00a086]" href="/events">
            Events
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Bitcoin className="w-16 h-16 text-[#00a086]" />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#00a086]">
              Start Cooking with Crypto Traffic
            </h1>
            <p className="max-w-[600px] text-zinc-700 md:text-xl">
              We'll Serve You Soon! Sign up now and our team will reach out within 24 hours.
            </p>
          </div>
          <div className="mt-12 max-w-md mx-auto">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Full Name" type="text" required />
                <Input placeholder="Company" type="text" required />
              </div>
              <Select required>
                <option value="">Select Role</option>
                <option value="affiliate">Affiliate</option>
                <option value="advertiser">Advertiser</option>
                <option value="brand">Brand</option>
              </Select>
              <Input placeholder="Vertical" type="text" required />
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Phone" type="tel" />
                <Input placeholder="Telegram" type="text" required />
              </div>
              <Input placeholder="Email" type="email" required />
              <Textarea placeholder="Message" />
              <Button type="submit" className="w-full bg-[#00a086] hover:bg-[#008c75] text-white">Submit</Button>
            </form>
          </div>
        </div>
      </main>
      <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t bg-white">
        <div className="container flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-zinc-500">© 2024 KitchenAds. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="#" aria-label="Telegram">
              <Send className="h-6 w-6 text-zinc-500 hover:text-[#00a086]" />
            </Link>
            <Link href="#" aria-label="Email">
              <Mail className="h-6 w-6 text-zinc-500 hover:text-[#00a086]" />
            </Link>
            <Link href="#" aria-label="Skype">
              <svg className="h-6 w-6 text-zinc-500 hover:text-[#00a086]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6l-6 6-6-6" />
                <path d="M12 12v6" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}