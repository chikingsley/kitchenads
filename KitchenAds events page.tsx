import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar } from "lucide-react"

const events = [
  {
    name: "Crypto Expo Dubai",
    logo: "/placeholder.svg?height=100&width=100",
    date: "15 October, 2024",
    location: "Dubai, UAE",
    investment: "Sponsor"
  },
  {
    name: "Bitcoin 2024",
    logo: "/placeholder.svg?height=100&width=100",
    date: "20 May, 2024",
    location: "Miami, USA",
    investment: "Speaker"
  },
  {
    name: "European Blockchain Convention",
    logo: "/placeholder.svg?height=100&width=100",
    date: "10 June, 2024",
    location: "Barcelona, Spain",
    investment: "Attendee"
  }
]

export default function EventsPage() {
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
          <Link className="text-sm font-medium hover:text-[#00a086]" href="/signup">
            Sign Up
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#00a086] mb-8 text-center">
            Upcoming Events
          </h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <img src={event.logo} alt={`${event.name} logo`} className="w-24 h-24 mx-auto mb-4" />
                  <CardTitle className="text-xl font-bold text-center">{event.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-[#00a086]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-[#00a086]" />
                    <span>{event.location}</span>
                  </div>
                  <div className="font-semibold">
                    KitchenAds Investment: {event.investment}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#00a086] hover:bg-[#008c75] text-white">Let's Meet</Button>
                </CardFooter>
              </Card>
            ))}
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