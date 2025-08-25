'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

const quotesData: Record<string, string[]> = {
  technology: [
    "Technology is best when it brings people together.",
    "Any sufficiently advanced technology is indistinguishable from magic.",
    "Innovation distinguishes between a leader and a follower.",
  ],
  ai: [
    "AI is not just a tool, it's a revolution.",
    "The future is AI-driven—adapt or fall behind.",
    "Artificial intelligence is the new electricity.",
  ],
  javascript: [
    "JavaScript is the duct tape of the internet.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "The best way to learn JavaScript is to build with it.",
  ],
  'next.js': [
    "Next.js simplifies your React apps—build fast, scale faster.",
    "SSR or SSG? With Next.js, you get the best of both worlds.",
    "Next.js makes React production-ready.",
  ],
  typescript: [
    "TypeScript gives you type safety without giving up JavaScript's flexibility.",
    "Strong types, strong code.",
    "TypeScript: Write once, trust always.",
  ],
  'web development': [
    "A website without a purpose is like a car without a steering wheel.",
    "Great design meets great code on the web.",
    "The web is your canvas, code is your brush.",
  ],
  'open source': [
    "Open source is the heart of innovation.",
    "Collaborate, contribute, create.",
    "With open source, we go further together.",
  ],
  'cloud computing': [
    "The cloud is not just a place, it's a revolution.",
    "Deploy dreams, not just code.",
    "Scalable, secure, and seamless – that's the cloud.",
  ],
}

export default function Home() {
  const [topic, setTopic] = useState('')
  const [quotes, setQuotes] = useState<string[]>([])

  const generateQuotes = () => {
    const selected = quotesData[topic.toLowerCase()]
    setQuotes(selected || [])
  }

  const handleQuickTopic = (t: string) => {
    setTopic(t)
    const selected = quotesData[t.toLowerCase()]
    setQuotes(selected || [])
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-6"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1308415974/photo/office-desktop-with-computer-and-accessories.webp?s=2048x2048&w=is&k=20&c=GU5tL_NT64nD55q2UYiRAXqYX7VhojIUgKuHy5u-vlw=')",
      }}
    >
      <Card className="bg-white/80 backdrop-blur-md shadow-2xl rounded-xl w-full max-w-xl p-8 text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">💡 Tech Quote Generator</CardTitle>
          <CardDescription>
            Generate motivational quotes on your favorite tech topics
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Input */}
          <Input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter a topic (e.g., AI)"
          />

          {/* Generate button */}
          <Button onClick={generateQuotes} className="w-full">
            Generate Quotes
          </Button>

          {/* Quick topic buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Technology',
              'AI',
              'JavaScript',
              'Next.js',
              'TypeScript',
              'Web Development',
              'Open Source',
              'Cloud Computing',
            ].map((t) => (
              <Button
                key={t}
                variant="secondary"
                size="sm"
                onClick={() => handleQuickTopic(t)}
                className="rounded-full"
              >
                {t}
              </Button>
            ))}
          </div>

          {/* Quotes list */}
          <div className="mt-4 text-gray-800 italic space-y-3">
            {quotes.length > 0 ? (
              quotes.map((quote, index) => (
                <Card key={index} className="p-4 text-gray-700 text-sm italic">
                  “{quote}”
                </Card>
              ))
            ) : (
              <p className="text-sm text-gray-500">
                No quotes found. Try a topic above.
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
