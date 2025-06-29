import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white font-[family-name:var(--font-geist-sans)] p-0" >
      <header className="w-full text-center py-12 bg-gray-600 shadow-lg">
        <h1 className="text-5xl font-extrabold mb-3">Chat with PDF</h1>
        <p className="text-xl text-gray-300">AI SaaS Application for Conversational PDF Analysis</p>
        <div className="mt-6 flex justify-center">
          <Button asChild className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
            <Link href="/dashboard">
              Get Started
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex flex-col md:flex-row items-start justify-center flex-1 w-full max-w-6xl gap-12 px-6 py-12">
        <div className="flex-1 flex flex-col items-center">
          <img
            src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=600"
            alt="AI Chat with PDF"
            className="rounded-xl shadow-2xl mb-8 w-full max-w-md"
          />
          <h2 className="text-3xl font-semibold mb-4">Features</h2>
          <ul className="space-y-4 text-lg text-left max-w-md">
            <li>• <span className="font-bold">Upload PDFs:</span> Instantly start chatting with your documents.</li>
            <li>• <span className="font-bold">AI Insights:</span> Get answers, summaries, and deep insights from your files.</li>
            <li>• <span className="font-bold">Privacy First:</span> Secure, private, and easy-to-use interface.</li>
            <li>• <span className="font-bold">Multilingual:</span> Supports multiple languages and complex documents.</li>
            <li>• <span className="font-bold">Export & Share:</span> Export chat history and share insights with your team.</li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <img
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&w=600"
            alt="PDF Analysis"
            className="rounded-xl shadow-2xl mb-8 w-full max-w-md"
          />
          <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
          <ol className="space-y-4 text-lg text-left max-w-md list-decimal list-inside">
            <li>Upload your PDF document securely.</li>
            <li>Ask questions or request summaries in natural language.</li>
            <li>Receive instant, AI-powered responses and insights.</li>
            <li>Export your chat or share with your team.</li>
          </ol>
        </div>
      </main>
      <section className="w-full bg-gray-800 py-10 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
          <p className="text-lg text-gray-300 mb-6">
            Our platform leverages state-of-the-art AI to make your PDF documents interactive, insightful, and easy to manage. Whether you&apos;re a student, researcher, or business professional, Chat with PDF helps you unlock the full potential of your documents.
          </p>
          <img
            src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=600"
            alt="Team Collaboration"
            className="rounded-xl shadow-xl mx-auto w-full max-w-lg"
          />
        </div>
      </section>
      <footer className="w-full text-center py-6 bg-gray-900 text-gray-400 text-sm mt-auto">
        &copy; {new Date().getFullYear()} Chat with PDF. All rights reserved.
      </footer>
    </div >
  );
}
