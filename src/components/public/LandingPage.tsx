"use client";

import Link from "next/link";
import { Button, Card, CardBody, CardHeader } from "~/app/hero-ui";
import {
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  Smartphone,
  Github,
} from "lucide-react";
import SignedIn from "~/components/signed-in";
import SignedOut from "~/components/signed-out";

export default function LandingPage() {
  return (
    <main className="from-black-900 to-black-100 min-h-screen bg-gradient-to-b text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            PocketPal
            <span className="block text-[hsl(280,100%,70%)]">
              Your Smart Financial Companion
            </span>
          </h1>
          <p className="mb-8 text-xl text-gray-300 sm:text-2xl">
            Open-source personal finance management that puts you in control.
            Track expenses, set budgets, and achieve your financial goals with
            ease.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <SignedOut>
              <Button
                as={Link}
                href="/auth/signup"
                size="lg"
                color="primary"
                className="bg-[hsl(280,100%,70%)] text-white"
                endContent={<ArrowRight className="h-4 w-4" />}
              >
                Get Started Free
              </Button>
            </SignedOut>
            <SignedIn>
              <Button
                as={Link}
                href="/dashboard"
                size="lg"
                color="primary"
                className="bg-[hsl(280,100%,70%)] text-white"
                endContent={<ArrowRight className="h-4 w-4" />}
              >
                Go to Dashboard
              </Button>
            </SignedIn>
            <Button
              as={Link}
              href="/#demo"
              size="lg"
              variant="bordered"
              className="border-white text-white hover:bg-white/10"
            >
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-gray-700 bg-gray-800/50 p-8 backdrop-blur-sm">
            <div className="aspect-video rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 p-8">
              <div className="flex h-full items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="mb-4 text-2xl font-bold">Dashboard Preview</h3>
                  <p className="text-lg opacity-90">
                    Interactive financial dashboard with charts, insights, and
                    real-time data
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is it Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-4xl font-bold">What is PocketPal?</h2>
          <p className="text-xl leading-relaxed text-gray-300">
            PocketPal is an open-source personal finance management application
            designed to help you take control of your financial life. Built with
            modern technologies and a focus on privacy, it provides powerful
            tools for budgeting, expense tracking, and financial planning.
          </p>
        </div>
      </section>

      {/* Value & Product Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Why Choose PocketPal?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border border-gray-700 bg-gray-800/50 backdrop-blur-sm">
              <CardHeader className="flex items-center justify-center text-center">
                <div className="mx-4 rounded-full bg-purple-500/20 p-3">
                  <Shield className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">Privacy First</h3>
              </CardHeader>
              <CardBody>
                <p className="text-center text-gray-300">
                  Your financial data stays on your devices. No cloud storage,
                  no data mining, complete control over your information.
                </p>
              </CardBody>
            </Card>

            <Card className="border border-gray-700 bg-gray-800/50 backdrop-blur-sm">
              <CardHeader className="flex items-center justify-center text-center">
                <div className="mx-4 rounded-full bg-blue-500/20 p-3">
                  <Zap className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Lightning Fast</h3>
              </CardHeader>
              <CardBody>
                <p className="text-center text-gray-300">
                  Built with modern web technologies for instant loading and
                  smooth interactions. No more waiting for your financial data.
                </p>
              </CardBody>
            </Card>

            <Card className="border border-gray-700 bg-gray-800/50 backdrop-blur-sm">
              <CardHeader className="flex items-center justify-center text-center">
                <div className="mx-4 rounded-full bg-green-500/20 p-3">
                  <Users className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold">Community Driven</h3>
              </CardHeader>
              <CardBody>
                <p className="text-center text-gray-300">
                  Open-source development means continuous improvements,
                  community contributions, and transparency in everything we
                  build.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">Key Features</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-400" />
              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Smart Expense Tracking
                </h3>
                <p className="text-gray-300">
                  Automatically categorize expenses and get insights into your
                  spending patterns
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-400" />
              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Budget Management
                </h3>
                <p className="text-gray-300">
                  Set realistic budgets and get alerts when you&apos;re approaching
                  limits
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-400" />
              <div>
                <h3 className="mb-2 text-lg font-semibold">Financial Goals</h3>
                <p className="text-gray-300">
                  Track progress towards savings goals and financial milestones
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-400" />
              <div>
                <h3 className="mb-2 text-lg font-semibold">Data Export</h3>
                <p className="text-gray-300">
                  Export your data in multiple formats for backup and analysis
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-400" />
              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Multi-Currency Support
                </h3>
                <p className="text-gray-300">
                  Handle multiple currencies and exchange rates automatically
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-400" />
              <div>
                <h3 className="mb-2 text-lg font-semibold">Dark Mode</h3>
                <p className="text-gray-300">
                  Beautiful dark theme that&apos;s easy on the eyes in any lighting
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-bold">How It Works</h2>
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 text-lg font-bold text-white">
                1
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  Sign Up & Connect
                </h3>
                <p className="text-gray-300">
                  Create your account and optionally connect your bank accounts
                  for automatic transaction import
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 text-lg font-bold text-white">
                2
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Set Your Budgets</h3>
                <p className="text-gray-300">
                  Define spending categories and set monthly budgets that align
                  with your financial goals
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 text-lg font-bold text-white">
                3
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Track & Analyze</h3>
                <p className="text-gray-300">
                  Monitor your spending, view detailed reports, and get insights
                  to improve your financial habits
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Advantages Section */}
      <section className="container mx-auto rounded-lg bg-gray-800/30 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Open Source Advantages
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-center text-2xl font-semibold lg:text-left">
                Why Open Source?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Star className="h-6 w-6 flex-shrink-0 text-yellow-400" />
                  <span className="text-lg">
                    Completely free to use with no hidden costs
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="h-6 w-6 flex-shrink-0 text-yellow-400" />
                  <span className="text-lg">
                    Transparent codebase you can audit and modify
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="h-6 w-6 flex-shrink-0 text-yellow-400" />
                  <span className="text-lg">
                    Active community of developers and contributors
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="h-6 w-6 flex-shrink-0 text-yellow-400" />
                  <span className="text-lg">
                    Regular updates and new features
                  </span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-center text-2xl font-semibold lg:text-left">
                vs. Proprietary Solutions
              </h3>
              <div className="space-y-4">
                <div className="rounded-lg border border-gray-600 bg-gray-700/50 p-6">
                  <h4 className="mb-3 text-lg font-semibold text-green-400">
                    ✓ PocketPal
                  </h4>
                  <p className="text-gray-300">
                    Free, private, customizable, community-driven
                  </p>
                </div>
                <div className="rounded-lg border border-gray-600 bg-gray-700/30 p-6">
                  <h4 className="mb-3 text-lg font-semibold text-red-400">
                    ✗ Other Apps
                  </h4>
                  <p className="text-gray-300">
                    Subscription fees, data mining, limited customization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Application Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold">Mobile Application</h2>
              <p className="mb-6 text-xl text-gray-300">
                Take PocketPal with you everywhere. Our mobile apps provide the
                same powerful features in a native, optimized experience for iOS
                and Android.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Offline functionality for on-the-go tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Biometric authentication for security</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Push notifications for budget alerts</span>
                </div>
              </div>
              <Button
                className="mt-6 bg-[hsl(280,100%,70%)] text-white"
                startContent={<Smartphone className="h-4 w-4" />}
              >
                Coming Soon
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="h-96 w-64 rounded-3xl bg-gradient-to-b from-purple-600 to-blue-600 p-8">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center text-white">
                      <Smartphone className="mx-auto mb-4 h-16 w-16" />
                      <h3 className="text-xl font-bold">Mobile App</h3>
                      <p className="text-sm opacity-90">Available Q3 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold">Ready to Take Control?</h2>
          <p className="mb-8 text-xl text-gray-300">
            Join thousands of users who are already managing their finances with
            PocketPal. Start your journey to financial freedom today.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              as={Link}
              href="/auth/signup"
              size="lg"
              color="primary"
              className="bg-[hsl(280,100%,70%)] text-white"
              endContent={<ArrowRight className="h-4 w-4" />}
            >
              Get Started Now
            </Button>
            <SignedIn>
              <Button
                as={Link}
                href="/dashboard"
                size="lg"
                color="primary"
                className="bg-[hsl(280,100%,70%)] text-white"
                endContent={<ArrowRight className="h-4 w-4" />}
              >
                Go to Dashboard
              </Button>
            </SignedIn>
            <Button
              as={Link}
              href="https://github.com/404FoundMeX/pocketpal"
              target="_blank"
              size="lg"
              variant="bordered"
              className="border-white text-white hover:bg-white/10"
              startContent={<Github className="h-4 w-4" />}
            >
              View on GitHub
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
