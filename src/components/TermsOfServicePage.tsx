"use client";

import { Card, CardBody, CardHeader, Divider, Chip, Button } from "@heroui/react";
import { 
  FileText, 
  Shield, 
  Users, 
  Globe, 
  Database, 
  Lock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  Download,
  Mail,
  Clock,
  Scale,
  UserCheck,
  Server
} from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black-900 to-black-100 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Terms of
            <span className="block text-[hsl(280,100%,70%)]">Service</span>
          </h1>
          <p className="mb-8 text-xl text-gray-300 sm:text-2xl">
            Please read these terms carefully before using PocketPal. By using our service, 
            you agree to these terms and conditions.
          </p>
          <div className="flex justify-center">
            <Chip 
              size="lg" 
              variant="flat" 
              className="bg-blue-500/20 text-blue-400 border border-blue-500/30"
              startContent={<FileText className="h-4 w-4" />}
            >
              Last Updated: December 2025
            </Chip>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Service Overview</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                PocketPal is a financial management application that helps users track expenses, 
                manage budgets, and achieve financial goals. We offer both hosted and self-hosted 
                versions of our service.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                These terms govern your use of our hosted service, website, and any related 
                services. For self-hosted deployments, these terms apply to the software 
                license and support services.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-sm">Financial management tools</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-sm">Hosted & self-hosted options</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-sm">Open source software</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="h-96 w-80 rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 p-8">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center text-white">
                      <Scale className="mx-auto mb-4 h-16 w-16" />
                      <h3 className="text-2xl font-bold mb-2">Terms & Conditions</h3>
                      <p className="text-sm opacity-90">Clear and fair service terms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acceptance & Eligibility Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-800/30 rounded-lg">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">Acceptance & Eligibility</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader className="text-center flex items-center justify-center">
                <div className="mr-4 rounded-full bg-green-500/20 p-3">
                  <UserCheck className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold">Age Requirement</h3>
              </CardHeader>
              <CardBody>
                <p className="text-center text-gray-300">
                  You must be at least 18 years old to use our service, or have parental 
                  consent if you are between 13-17 years old.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader className="text-center flex items-center justify-center">
                <div className="mr-4 rounded-full bg-blue-500/20 p-3">
                  <Globe className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Geographic Availability</h3>
              </CardHeader>
              <CardBody>
                <p className="text-center text-gray-300">
                  Our service is available worldwide, subject to local laws and regulations 
                  that may restrict financial services.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader className="text-center flex items-center justify-center">
                <div className="mr-4 rounded-full bg-purple-500/20 p-3">
                  <CheckCircle className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">Acceptance</h3>
              </CardHeader>
              <CardBody>
                <p className="text-center text-gray-300">
                  By using our service, you acknowledge that you have read, understood, 
                  and agree to be bound by these terms.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* User Responsibilities Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">User Responsibilities</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-green-400">What You Must Do</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-green-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Provide Accurate Information</h4>
                    <p className="text-gray-300 text-sm">Use real, accurate information when creating your account and using our services</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-green-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Maintain Account Security</h4>
                    <p className="text-gray-300 text-sm">Keep your login credentials secure and notify us of any unauthorized access</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-green-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Comply with Laws</h4>
                    <p className="text-gray-300 text-sm">Use our service in compliance with all applicable laws and regulations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-green-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Respect Intellectual Property</h4>
                    <p className="text-gray-300 text-sm">Respect our intellectual property rights and those of third parties</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-red-400">What You Must NOT Do</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="mt-1 h-5 w-5 text-red-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Misuse the Service</h4>
                    <p className="text-gray-300 text-sm">Don't use our service for illegal activities or to harm others</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="mt-1 h-5 w-5 text-red-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Share Account Access</h4>
                    <p className="text-gray-300 text-sm">Don't share your account credentials with others</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="mt-1 h-5 w-5 text-red-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Reverse Engineer</h4>
                    <p className="text-gray-300 text-sm">Don't attempt to reverse engineer or hack our systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="mt-1 h-5 w-5 text-red-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Spam or Abuse</h4>
                    <p className="text-gray-300 text-sm">Don't send spam or abuse our communication systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Limitations Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-800/30 rounded-t-lg">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">Service Limitations & Disclaimers</h2>
          <div className="space-y-8">
            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader>
                <h3 className="text-xl font-semibold text-yellow-400">Not Financial Advice</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-300 mb-4">
                  PocketPal is a financial management tool, not a financial advisor. The information 
                  provided through our service is for informational purposes only and should not be 
                  considered as financial, investment, or legal advice.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <AlertTriangle className="h-4 w-4 text-yellow-400" />
                    <span>Always consult qualified professionals for financial decisions</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <AlertTriangle className="h-4 w-4 text-yellow-400" />
                    <span>Past performance doesn't guarantee future results</span>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader>
                <h3 className="text-xl font-semibold text-blue-400">Service Availability</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-300 mb-4">
                  We strive to provide reliable service but cannot guarantee 100% uptime. 
                  Our service may be temporarily unavailable due to maintenance, updates, 
                  or circumstances beyond our control.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Server className="h-4 w-4 text-blue-400" />
                    <span>We aim for 99.9% uptime but don't guarantee it</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Server className="h-4 w-4 text-blue-400" />
                    <span>Scheduled maintenance will be announced in advance</span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Data & Privacy Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-800/30">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">Data & Privacy</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center space-y-4">
              <div className="mx-auto rounded-full bg-green-500/20 p-4 w-fit">
                <Lock className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold">Data Security</h3>
              <p className="text-gray-300">
                We implement industry-standard security measures to protect your data 
                from unauthorized access, alteration, or destruction.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto rounded-full bg-blue-500/20 p-4 w-fit">
                <Shield className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold">Privacy Protection</h3>
              <p className="text-gray-300">
                Your privacy is protected by our comprehensive privacy policy. We never 
                sell, rent, or share your personal information with third parties.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto rounded-full bg-purple-500/20 p-4 w-fit">
                <Database className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold">Data Ownership</h3>
              <p className="text-gray-300">
                You retain ownership of all data you input into our service. We only 
                process it to provide our services to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intellectual Property Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-800/30 rounded-b-lg">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-bold">Intellectual Property</h2>
          <div className="space-y-8">
            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader>
                <h3 className="text-xl font-semibold text-purple-400">Open Source License</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-300 mb-4">
                  PocketPal is released under the MIT License, which means you are free to use, 
                  modify, and distribute the software, subject to the license terms.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Use the software for any purpose</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Modify and distribute the software</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Must include the original license and copyright notice</span>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader>
                <h3 className="text-xl font-semibold text-blue-400">Our Rights</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-300 mb-4">
                  We retain rights to our trademarks, service marks, and other proprietary 
                  materials. The PocketPal name and logo are our intellectual property.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Info className="h-4 w-4 text-blue-400" />
                    <span>PocketPal name and logo are trademarks</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Info className="h-4 w-4 text-blue-400" />
                    <span>Website design and content are copyrighted</span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Termination Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-bold">Account Termination</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader className="text-center flex items-center justify-center">
                <div className="mr-4 rounded-full bg-green-500/20 p-3">
                  <UserCheck className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold">You Can Terminate</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-300 mb-4">
                  You may terminate your account at any time by contacting us or using 
                  the account deletion feature in your settings.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Delete your account anytime</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Export your data before deletion</span>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader className="text-center flex items-center justify-center">
                <div className="mr-4 rounded-full bg-red-500/20 p-3">
                  <AlertTriangle className="h-8 w-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold">We May Terminate</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-300 mb-4">
                  We may terminate or suspend your account if you violate these terms, 
                  engage in fraudulent activity, or for other legitimate business reasons.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <XCircle className="h-4 w-4 text-red-400" />
                    <span>Terms of service violations</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <XCircle className="h-4 w-4 text-red-400" />
                    <span>Fraudulent or illegal activity</span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Changes & Updates Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-800/30 rounded-lg">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold">Changes to Terms</h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              We may update these terms from time to time to reflect changes in our services, 
              legal requirements, or business practices. We will notify you of any material 
              changes before they take effect.
            </p>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                <CardBody className="text-center">
                  <div className="mx-auto mb-4 rounded-full bg-blue-500/20 p-3 w-fit">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Notification</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    We'll notify you of changes via email or in-app notification
                  </p>
                  <span className="text-gray-400 text-sm">
                    Check your email regularly
                  </span>
                </CardBody>
              </Card>

              <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                <CardBody className="text-center">
                  <div className="mx-auto mb-4 rounded-full bg-green-500/20 p-3 w-fit">
                    <Clock className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Effective Date</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Changes become effective 30 days after notification
                  </p>
                  <span className="text-gray-400 text-sm">
                    Last updated: December 2025
                  </span>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Legal Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold">Questions & Legal Information</h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              If you have questions about these terms or need legal clarification, 
              please don't hesitate to reach out. We're here to help ensure you 
              understand your rights and obligations.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button 
                as={Link}
                href="/contact" 
                size="lg" 
                variant="bordered" 
                className="border-[hsl(280,100%,70%)] text-[hsl(280,100%,70%)] hover:bg-[hsl(280,100%,70%)] hover:text-white transition-colors"
                startContent={<Mail className="h-4 w-4" />}
              >
                Contact Us
              </Button>
              <Button 
                as={Link}
                href="/privacy-policy" 
                size="lg" 
                variant="flat"
                className="bg-[hsl(280,100%,70%)] text-white hover:bg-[hsl(280,100%,60%)] transition-colors"
                startContent={<Shield className="h-4 w-4" />}
              >
                Privacy Policy
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-lg bg-gray-800/50 p-6 border border-gray-700">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Info className="h-6 w-6 text-[hsl(280,100%,70%)]" />
              <h3 className="text-lg font-semibold">Important Legal Notice</h3>
            </div>
            <p className="text-gray-300">
              These terms constitute a legally binding agreement between you and PocketPal. 
              By using our service, you acknowledge that you have read, understood, and 
              agree to be bound by these terms. If you do not agree to these terms, 
              please do not use our service.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
