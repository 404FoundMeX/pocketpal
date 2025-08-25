"use client";

import { Button, Card, CardBody, CardHeader, Divider, Chip } from "@heroui/react";
import { 
  Code, 
  Github, 
  Globe, 
  Zap, 
  Shield, 
  Users, 
  Smartphone,
  Database,
  Lock,
  Palette,
  GitBranch,
  Rocket,
  Heart,
  Star,
  Award,
  TrendingUp,
  Target,
  Eye
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black-900 to-black-100 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            About
            <span className="block text-[hsl(280,100%,70%)]">PocketPal</span>
          </h1>
          <p className="mb-8 text-xl text-gray-300 sm:text-2xl">
            A personal portfolio project that showcases modern web development, 
            financial technology innovation, and open-source collaboration.
          </p>
        </div>
      </section>

      {/* Project Story Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">The Story Behind PocketPal</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                PocketPal was born from a passion for financial technology and a desire to create 
                something meaningful in the open-source community. As a developer, I wanted to build 
                a project that not only demonstrates technical skills but also solves real-world problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                The idea came from seeing how many people struggle with personal finance management 
                and the lack of truly private, open-source solutions. PocketPal aims to change that 
                by providing a powerful, privacy-focused financial tool that puts users in control.
              </p>
              <div className="flex gap-4">
                <Button 
                  as={Link}
                  href="https://github.com/404FoundMeX/pocketpal" 
                  target="_blank"
                  variant="bordered" 
                  className="border-[hsl(280,100%,70%)] text-[hsl(280,100%,70%)] hover:bg-[hsl(280,100%,70%)] hover:text-white transition-colors"
                  startContent={<Github className="h-4 w-4" />}
                >
                  View on GitHub
                </Button>
                <Button 
                  as={Link}
                  href="https://discord.gg/2NssRs2b"
                  target="_blank"
                  variant="flat"
                  className="bg-[hsl(280,100%,70%)] text-white hover:bg-[hsl(280,100%,60%)] transition-colors"
                  startContent={<Heart className="h-4 w-4" />}
                >
                  Get Involved
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="h-96 w-80 rounded-2xl bg-gradient-to-br from-purple-600 via-blue-600 to-green-600 p-8">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center text-white">
                      <Code className="mx-auto mb-4 h-16 w-16" />
                      <h3 className="text-2xl font-bold mb-2">Open Source</h3>
                      <p className="text-sm opacity-90">Built with ❤️ for the community</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-800/30 rounded-lg">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">Mission & Vision</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader className="text-center flex items-center justify-center">
                <div className="mr-4 rounded-full bg-purple-500/20 p-3">
                  <Target className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">Our Mission</h3>
              </CardHeader>
              <CardBody>
                <p className="text-center text-gray-300">
                  To democratize personal finance management by providing a free, open-source, 
                  and privacy-focused solution that empowers users to take control of their 
                  financial future without compromising their data security.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader className="text-center flex items-center justify-center">
                <div className="mr-4 rounded-full bg-blue-500/20 p-3">
                  <Eye className="h-8 w-8   text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Our Vision</h3>
              </CardHeader>
              <CardBody>
                <p className="text-center text-gray-300">
                  A world where everyone has access to powerful financial tools that respect 
                  their privacy, built by a community of developers passionate about 
                  financial inclusion and technological innovation.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">Technology Stack</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardBody className="text-center">
                <div className="mx-auto mb-4 rounded-full bg-blue-500/20 p-3 w-fit">
                  <Code className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Frontend</h3>
                <div className="space-y-2">
                  <Chip size="sm" variant="flat" className="bg-blue-500/20 text-blue-400">Next.js 15</Chip>
                  <Chip size="sm" variant="flat" className="bg-blue-500/20 text-blue-400">React 19</Chip>
                  <Chip size="sm" variant="flat" className="bg-blue-500/20 text-blue-400">TypeScript</Chip>
                  <Chip size="sm" variant="flat" className="bg-blue-500/20 text-blue-400">Tailwind CSS</Chip>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardBody className="text-center">
                <div className="mx-auto mb-4 rounded-full bg-green-500/20 p-3 w-fit">
                  <Database className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Backend</h3>
                <div className="space-y-2">
                  <Chip size="sm" variant="flat" className="bg-green-500/20 text-green-400">tRPC</Chip>
                  <Chip size="sm" variant="flat" className="bg-green-500/20 text-green-400">Drizzle ORM</Chip>
                  <Chip size="sm" variant="flat" className="bg-green-500/20 text-green-400">PostgreSQL</Chip>
                  <Chip size="sm" variant="flat" className="bg-green-500/20 text-green-400">BetterAuth</Chip>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardBody className="text-center">
                <div className="mx-auto mb-4 rounded-full bg-purple-500/20 p-3 w-fit">
                  <Palette className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">UI/UX</h3>
                <div className="space-y-2">
                  <Chip size="sm" variant="flat" className="bg-purple-500/20 text-purple-400">HeroUI</Chip>
                  <Chip size="sm" variant="flat" className="bg-purple-500/20 text-purple-400">Framer Motion</Chip>
                  <Chip size="sm" variant="flat" className="bg-purple-500/20 text-purple-400">Lucide Icons</Chip>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold">Ready to Get Involved?</h2>
          <p className="mb-8 text-xl text-gray-300">
            PocketPal is more than just a project—it's a community of developers, 
            designers, and financial enthusiasts working together to build something amazing.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              as={Link}
              href="https://github.com/404FoundMeX/pocketpal" 
              target="_blank"
              size="lg" 
              color="primary" 
              className="bg-[hsl(280,100%,70%)] text-white hover:bg-[hsl(280,100%,60%)] transition-colors"
              startContent={<Github className="h-4 w-4" />}
            >
              Contribute on GitHub
            </Button>
            <Button 
              as={Link}
              href="https://discord.gg/2NssRs2b"
              target="_blank"
              size="lg" 
              variant="bordered" 
              className="border-white text-white hover:bg-white/10 transition-colors"
              startContent={<Users className="h-4 w-4" />}
            >
              Join the Community
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
