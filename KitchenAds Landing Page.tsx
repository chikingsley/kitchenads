import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Bitcoin, BarChart, MessageCircle, CreditCard, Mail, Send } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f0faf9]">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white">
        <Link className="flex items-center justify-center" href="#">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-09-26%2017.29.15-rKfRTrAU99YqoBypRxkNB8gpeAZcNd.jpg" alt="KitchenAds Logo" className="h-10 w-10" />
          <span className="ml-2 text-2xl font-bold text-[#00a086]">KitchenAds</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-[#00a086]" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-[#00a086]" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:text-[#00a086]" href="#signup">
            Sign Up
          </Link>
          <Link className="text-sm font-medium hover:text-[#00a086]" href="/events">
            Events
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#00a086]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Premium Crypto Traffic, Served Fresh
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-100 md:text-xl">
                  KitchenAds delivers high-quality, real-time traffic for your cryptocurrency trading platforms. Blend your ROI to perfection.
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="secondary" size="lg" className="bg-white text-black hover:bg-gray-100">
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="bg-[#00a086] text-white border-white hover:bg-[#008c75]">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#00a086]">Why Choose KitchenAds?</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg border">
                <Bitcoin className="w-12 h-12 text-[#00a086]" />
                <h3 className="text-xl font-bold">High Quality Crypto-Focused Traffic</h3>
                <p className="text-zinc-500 text-center">Premium traffic sources tailored for cryptocurrency platforms, ensuring high conversion rates and engaged users.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg border">
                <BarChart className="w-12 h-12 text-[#00a086]" />
                <h3 className="text-xl font-bold">Real-Time Management</h3>
                <p className="text-zinc-500 text-center">TrackBox integration for instant traffic monitoring and optimization, allowing you to adjust campaigns on the fly for maximum performance.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg border">
                <MessageCircle className="w-12 h-12 text-[#00a086]" />
                <h3 className="text-xl font-bold">24/7 Support</h3>
                <p className="text-zinc-500 text-center">Round-the-clock communication via Telegram for immediate assistance, ensuring your campaigns never miss a beat in the fast-paced crypto market.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg border">
                <CreditCard className="w-12 h-12 text-[#00a086]" />
                <h3 className="text-xl font-bold">Crypto Payment Options</h3>
                <p className="text-zinc-500 text-center">Flexible payment methods including cryptocurrency, aligning with your preferred financial ecosystem and providing seamless transactions.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-[#f0faf9]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#00a086]">How KitchenAds Works</h2>
                <p className="max-w-[600px] text-zinc-700 md:text-xl">
                  Our recipe for success combines premium crypto traffic, cutting-edge technology, and dedicated support.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Bitcoin className="w-5 h-5 text-[#00a086]" />
                    <span>Curate high-quality, crypto-focused traffic sources</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <BarChart className="w-5 h-5 text-[#00a086]" />
                    <span>Monitor and optimize campaigns in real-time with TrackBox</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-[#00a086]" />
                    <span>Provide instant support and communication via Telegram</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img src="/placeholder.svg?height=400&width=400" alt="KitchenAds Process" className="rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </section>
        <section id="signup" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#00a086]">Start Cooking with Crypto Traffic</h2>
                <p className="max-w-[900px] text-zinc-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We'll Serve You Soon! Sign up now and our team will reach out within 24 hours.
                </p>
              </div>
              <div className="w-full max-w-md space-y-4">
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
                <div className="flex justify-center space-x-4">
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
                <p className="text-xs text-zinc-500">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2 hover:text-[#00a086]" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-zinc-500">© 2024 KitchenAds. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-zinc-500 hover:text-[#00a086]" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-zinc-500 hover:text-[#00a086]" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}