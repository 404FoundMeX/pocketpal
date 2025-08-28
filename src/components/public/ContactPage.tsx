"use client";

import {
  Button,
  Input,
  Textarea,
  Card,
  CardBody,
} from "@heroui/react";
import {
  Mail,
  Github,
  Linkedin,
  MessageCircle,
  Send,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="from-black-900 to-black-100 min-h-screen bg-gradient-to-b text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Get in
            <span className="block text-[hsl(280,100%,70%)]">Touch</span>
          </h1>
          <p className="mb-8 text-xl text-gray-300 sm:text-2xl">
            Have questions about PocketPal? Want to contribute? Need support?
            I&apos;d love to hear from you and help with anything you need.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-3xl font-bold">Send a Message</h2>
                <p className="mb-8 text-gray-300">
                  Fill out the form below and I&apos;ll get back to you as soon as
                  possible.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Input
                    type="text"
                    label="First Name"
                    placeholder="John"
                    variant="bordered"
                    classNames={{
                      input: "text-white",
                      inputWrapper:
                        "bg-gray-800/50 border-gray-600 hover:border-gray-500 focus-within:border-[hsl(280,100%,70%)]",
                      label: "text-gray-300",
                    }}
                  />
                  <Input
                    type="text"
                    label="Last Name"
                    placeholder="Doe"
                    variant="bordered"
                    classNames={{
                      input: "text-white",
                      inputWrapper:
                        "bg-gray-800/50 border-gray-600 hover:border-gray-500 focus-within:border-[hsl(280,100%,70%)]",
                      label: "text-gray-300",
                    }}
                  />
                </div>

                <Input
                  type="email"
                  label="Email"
                  placeholder="john.doe@example.com"
                  variant="bordered"
                  classNames={{
                    input: "text-white",
                    inputWrapper:
                      "bg-gray-800/50 border-gray-600 hover:border-gray-500 focus-within:border-[hsl(280,100%,70%)]",
                    label: "text-gray-300",
                  }}
                />

                <Input
                  type="text"
                  label="Subject"
                  placeholder="How can I help you?"
                  variant="bordered"
                  classNames={{
                    input: "text-white",
                    inputWrapper:
                      "bg-gray-800/50 border-gray-600 hover:border-gray-500 focus-within:border-[hsl(280,100%,70%)]",
                    label: "text-gray-300",
                  }}
                />

                <Textarea
                  label="Message"
                  placeholder="Tell me more about your inquiry..."
                  variant="bordered"
                  minRows={4}
                  classNames={{
                    input: "text-white",
                    inputWrapper:
                      "bg-gray-800/50 border-gray-600 hover:border-gray-500 focus-within:border-[hsl(280,100%,70%)]",
                    label: "text-gray-300",
                  }}
                />

                <Button
                  type="submit"
                  size="lg"
                  color="primary"
                  className="w-full bg-[hsl(280,100%,70%)] text-white transition-colors hover:bg-[hsl(280,100%,60%)]"
                  endContent={<Send className="h-4 w-4" />}
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-3xl font-bold">Contact Information</h2>
                <p className="mb-8 text-gray-300">
                  Feel free to reach out through any of these channels. I&apos;m
                  always open to discussing new opportunities, collaborations,
                  or just having a chat about tech.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <Link
                  href="mailto:david.web.dev73@gmail.com"
                  className="block"
                  target="_blank"
                >
                  <Card className="border border-gray-700 bg-gray-800/50 backdrop-blur-sm transition-colors hover:border-[hsl(280,100%,70%)]">
                    <CardBody className="flex flex-row items-center gap-4">
                      <div className="rounded-full bg-purple-500/20 p-3">
                        <Mail className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-sm text-gray-300 underline">
                          david.web.dev73@gmail.com
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/404foundme/"
                  className="block"
                  target="_blank"
                >
                  <Card className="border border-gray-700 bg-gray-800/50 backdrop-blur-sm transition-colors hover:border-[hsl(280,100%,70%)]">
                    <CardBody className="flex flex-row items-center gap-4">
                      <div className="rounded-full bg-blue-500/20 p-3">
                        <Linkedin className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">LinkedIn</h3>
                        <p className="text-sm text-gray-300">
                          Connect professionally
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </Link>

                <Link
                  href="https://discord.gg/2NssRs2b"
                  className="block"
                  target="_blank"
                >
                  <Card className="border border-gray-700 bg-gray-800/50 backdrop-blur-sm transition-colors hover:border-[hsl(280,100%,70%)]">
                    <CardBody className="flex flex-row items-center gap-4">
                      <div className="rounded-full bg-indigo-500/20 p-3">
                        <MessageCircle className="h-6 w-6 text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Discord</h3>
                        <p className="text-sm text-gray-300">
                          Join our community
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </Link>

                <Link
                  href="https://github.com/404FoundMeX"
                  className="block"
                  target="_blank"
                >
                  <Card className="border border-gray-700 bg-gray-800/50 backdrop-blur-sm transition-colors hover:border-[hsl(280,100%,70%)]">
                    <CardBody className="flex flex-row items-center gap-4">
                      <div className="rounded-full bg-gray-500/20 p-3">
                        <Github className="h-6 w-6 text-gray-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">GitHub</h3>
                        <p className="text-sm text-gray-300">
                          View my projects
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
