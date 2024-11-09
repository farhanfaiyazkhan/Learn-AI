import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10">
      {/* Hero Section */}
      <section className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Site</h1>
        <p className="text-lg text-gray-700 mb-6">
          <ul>
            <li>Learn Smarter</li>
            <li>Step by Step—Structured Videos</li>
            <li>Tailored Quizzes</li>
            <li>Unleash Your Potential</li>
          </ul>
        </p>
        <Link href="/" passHref>
          <Button>Explore More</Button>
        </Link>
      </section>

      {/* Featured Section */}
      <section className="mt-10 w-full max-w-4xl px-4">
        <h2 className="text-2xl font-semibold mb-4">Featured Content</h2>
        <p className="text-gray-600 mb-6">
          Here’s some of the featured content or services we provide. Explore to find more!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="font-semibold text-xl mb-2">Feature 1</h3>
            <p className="text-gray-600">Description of the feature or service.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="font-semibold text-xl mb-2">Feature 2</h3>
            <p className="text-gray-600">Description of the feature or service.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="font-semibold text-xl mb-2">Feature 3</h3>
            <p className="text-gray-600">Description of the feature or service.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="mt-16 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}