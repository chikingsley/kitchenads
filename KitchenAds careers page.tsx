import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChefHat, Users, BarChart, MapPin } from "lucide-react"

const jobs = [
  {
    title: "Brand Account Manager",
    icon: <ChefHat className="w-10 h-10 text-[#00a086]" />,
    description: "Spice up our traffic monetization! We're seeking a passionate Customer Success/Account Manager to join our KitchenAds team. You'll be the secret ingredient in cultivating partnerships and optimizing campaign performance.",
    responsibilities: [
      "Develop and maintain strong client relationships",
      "Optimize campaign performance to maximize ROI",
      "Analyze traffic data and refine monetization strategies",
    ],
    requirements: [
      "Excellent communication and interpersonal skills",
      "Analytical mindset with a focus on performance metrics",
      "Adaptability in the fast-paced digital advertising landscape",
    ],
    locations: ["Tel-Aviv, Israel", "Limassol, Cyprus", "Moscow, Russia"],
    experience: "No prior experience required, though some experience is advantageous."
  },
  {
    title: "Affiliate Manager - Account Manager",
    icon: <Users className="w-10 h-10 text-[#00a086]" />,
    description: "Join our Horka team as an Affiliate Manager and become the master chef of partnerships! You'll be instrumental in managing our affiliates and cooking up strategies to enhance campaign performance.",
    responsibilities: [
      "Recruit and onboard new affiliates",
      "Develop and implement affiliate marketing strategies",
      "Monitor and optimize affiliate program performance",
    ],
    requirements: [
      "Strong networking and relationship-building skills",
      "Understanding of affiliate marketing principles",
      "Ability to analyze performance data and make data-driven decisions",
    ],
    locations: ["Tel-Aviv, Israel", "Limassol, Cyprus", "Moscow, Russia"],
    experience: "No prior experience required, though some experience is advantageous."
  },
  {
    title: "Data Analyst - CRM Manager",
    icon: <BarChart className="w-10 h-10 text-[#00a086]" />,
    description: "Become our data chef! We're looking for a Data Analyst with a knack for turning complex datasets into a feast of actionable insights. You'll be the master of data visualization and statistical analysis, driving our business performance to new heights.",
    responsibilities: [
      "Interpret complex datasets and identify meaningful patterns",
      "Generate actionable insights to inform business strategies",
      "Create compelling data visualizations for stakeholders",
    ],
    requirements: [
      "Strong analytical and problem-solving skills",
      "Proficiency in data analysis tools and programming languages",
      "Excellent communication skills to present findings effectively",
    ],
    locations: ["Limassol, Cyprus", "Moscow, Russia"],
    experience: "Experience in data analysis and CRM management preferred"
  },
]

export default function CareersPage() {
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
          <Link className="text-sm font-medium hover:text-[#00a086]" href="/signup">
            Sign Up
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#00a086] mb-8 text-center">
            Join the KitchenAds Team
          </h1>
          <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
            We're cooking up something special in the world of crypto advertising, and we need talented individuals like you to help us serve up success!
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    {job.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-center">{job.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-zinc-600">{job.description}</p>
                  <div>
                    <h3 className="font-semibold mb-2">Key Responsibilities:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i} className="text-sm text-zinc-600">{resp}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Requirements:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="text-sm text-zinc-600">{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-[#00a086]" />
                    <span className="text-sm text-zinc-600">{job.locations.join(" | ")}</span>
                  </div>
                  <p className="text-sm text-zinc-600 italic">{job.experience}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#00a086] hover:bg-[#008c75] text-white">
                    Read More & Apply
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#00a086] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Cook with KitchenAds?
            </h2>
            <p className="max-w-[700px] text-zinc-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a dynamic work environment, competitive salaries, and the opportunity to grow in the exciting world of crypto advertising.
            </p>
            <ul className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
              <li className="flex flex-col items-center space-y-2">
                <ChefHat className="w-12 h-12" />
                <h3 className="text-xl font-semibold">Innovative Environment</h3>
                <p className="text-zinc-200 text-sm">Be at the forefront of crypto advertising technology</p>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <Users className="w-12 h-12" />
                <h3 className="text-xl font-semibold">Collaborative Team</h3>
                <p className="text-zinc-200 text-sm">Work with passionate professionals from diverse backgrounds</p>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <BarChart className="w-12 h-12" />
                <h3 className="text-xl font-semibold">Growth Opportunities</h3>
                <p className="text-zinc-200 text-sm">Develop your skills and advance your career in a rapidly evolving industry</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t bg-white">
        <div className="container flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-zinc-500">© 2024 KitchenAds. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-xs hover:underline underline-offset-4 text-zinc-500 hover:text-[#00a086]" href="#">
              Privacy Policy
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-zinc-500 hover:text-[#00a086]" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-zinc-500 hover:text-[#00a086]" href="#">
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}