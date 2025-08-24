"use client";

import { Card, CardBody, CardHeader, Divider, Chip } from "@heroui/react";
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  User, 
  Globe, 
  Mail,
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info
} from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black-900 to-black-100 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Privacy
            <span className="block text-[hsl(280,100%,70%)]">Policy</span>
          </h1>
          <p className="mb-8 text-xl text-gray-300 sm:text-2xl">
            Your privacy is our priority. Learn how PocketPal protects your financial data 
            and maintains complete transparency in our data practices.
          </p>
          <div className="flex justify-center">
            <Chip 
              size="lg" 
              variant="flat" 
              className="bg-green-500/20 text-green-400 border border-green-500/30"
              startContent={<Shield className="h-4 w-4" />}
            >
              Last Updated: December 2025
            </Chip>
          </div>
        </div>
      </section>

      {/* Privacy Commitment Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Our Privacy Commitment</h2>
                             <p className="text-lg text-gray-300 leading-relaxed">
                 At PocketPal, we believe that financial privacy is a fundamental human right. 
                 We've built this application from the ground up with privacy-first principles, 
                 offering both a hosted version for convenience and the ability to self-host for complete control.
               </p>
               <p className="text-lg text-gray-300 leading-relaxed">
                 This privacy policy explains how we handle your information, what data we collect, 
                 and most importantly, what we don't do with your personal financial information.
               </p>
               <div className="flex gap-4">
                 <div className="flex items-center gap-2 text-green-400">
                   <CheckCircle className="h-5 w-5" />
                   <span className="text-sm">No data mining</span>
                 </div>
                 <div className="flex items-center gap-2 text-green-400">
                   <CheckCircle className="h-5 w-5" />
                   <span className="text-sm">Secure cloud storage</span>
                 </div>
                 <div className="flex items-center gap-2 text-green-400">
                   <CheckCircle className="h-5 w-5" />
                   <span className="text-sm">No tracking</span>
                 </div>
               </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="h-96 w-80 rounded-2xl bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 p-8">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center text-white">
                      <Shield className="mx-auto mb-4 h-16 w-16" />
                      <h3 className="text-2xl font-bold mb-2">Privacy First</h3>
                      <p className="text-sm opacity-90">Your data, your control</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Privacy Principles */}
      <section className="container mx-auto px-4 py-16 bg-gray-800/30 rounded-lg">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">Key Privacy Principles</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                         <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
               <CardHeader className="text-center flex items-center justify-center">
                 <div className="mr-4 rounded-full bg-green-500/20 p-3">
                   <Lock className="h-8 w-8 text-green-400" />
                 </div>
                 <h3 className="text-xl font-semibold">Secure Data Storage</h3>
               </CardHeader>
               <CardBody>
                 <p className="text-center text-gray-300">
                   Your financial data is stored securely on our servers with end-to-end encryption, 
                   or you can choose to self-host for complete local control.
                 </p>
               </CardBody>
             </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader className="text-center flex items-center justify-center">
                <div className="mr-4 rounded-full bg-blue-500/20 p-3">
                  <Eye className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Zero Tracking</h3>
              </CardHeader>
              <CardBody>
                <p className="text-center text-gray-300">
                  We don't track your usage, collect analytics, or monitor your behavior. 
                  Your financial activities remain completely private.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader className="text-center flex items-center justify-center">
                <div className="mr-4 rounded-full bg-purple-500/20 p-3">
                  <Database className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">Open Source</h3>
              </CardHeader>
              <CardBody>
                <p className="text-center text-gray-300">
                  Our entire codebase is open source, so you can verify exactly how we handle 
                  your data and even modify it if needed.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
             </section>

       {/* Hosting Options Section */}
       <section className="container mx-auto px-4 py-16">
         <div className="mx-auto max-w-6xl">
           <h2 className="mb-12 text-center text-4xl font-bold">Hosting Options</h2>
           <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
             <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
               <CardHeader className="text-center flex items-center justify-center">
                 <div className="mr-4 rounded-full bg-blue-500/20 p-3">
                   <Globe className="h-8 w-8 text-blue-400" />
                 </div>
                 <h3 className="text-xl font-semibold">Hosted Version</h3>
               </CardHeader>
               <CardBody>
                 <p className="text-gray-300 mb-4">
                   Use our hosted version for convenience and accessibility. Your data is stored 
                   securely on our servers with enterprise-grade security and encryption.
                 </p>
                 <div className="space-y-2">
                   <div className="flex items-center gap-2 text-gray-300">
                     <CheckCircle className="h-4 w-4 text-green-400" />
                     <span className="text-sm">Automatic backups and updates</span>
                   </div>
                   <div className="flex items-center gap-2 text-gray-300">
                     <CheckCircle className="h-4 w-4 text-green-400" />
                     <span className="text-sm">Access from any device</span>
                   </div>
                   <div className="flex items-center gap-2 text-gray-300">
                     <CheckCircle className="h-4 w-4 text-green-400" />
                     <span className="text-sm">Professional security infrastructure</span>
                   </div>
                 </div>
               </CardBody>
             </Card>

             <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
               <CardHeader className="text-center flex items-center justify-center">
                 <div className="mr-4 rounded-full bg-green-500/20 p-3">
                   <Database className="h-8 w-8 text-green-400" />
                 </div>
                 <h3 className="text-xl font-semibold">Self-Hosted</h3>
               </CardHeader>
               <CardBody>
                 <p className="text-gray-300 mb-4">
                   Deploy your own instance for complete control and privacy. All data stays 
                   on your infrastructure with no external dependencies.
                 </p>
                 <div className="space-y-2">
                   <div className="flex items-center gap-2 text-gray-300">
                     <CheckCircle className="h-4 w-4 text-green-400" />
                     <span className="text-sm">Complete data sovereignty</span>
                   </div>
                   <div className="flex items-center gap-2 text-gray-300">
                     <CheckCircle className="h-4 w-4 text-green-400" />
                     <span className="text-sm">Customizable and extensible</span>
                   </div>
                   <div className="flex items-center gap-2 text-gray-300">
                     <CheckCircle className="h-4 w-4 text-green-400" />
                     <span className="text-sm">No external data transmission</span>
                   </div>
                 </div>
               </CardBody>
             </Card>
           </div>
         </div>
       </section>

       {/* Data Collection Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">What Data We Collect</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-green-400">Data We DO Collect</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-green-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Account Information</h4>
                    <p className="text-gray-300 text-sm">Basic account details like email and username for authentication</p>
                  </div>
                </div>
                                 <div className="flex items-start gap-3">
                   <CheckCircle className="mt-1 h-5 w-5 text-green-400 flex-shrink-0" />
                   <div>
                     <h4 className="font-semibold">Financial Data</h4>
                     <p className="text-gray-300 text-sm">Your expenses, budgets, and financial goals (stored securely on our servers or locally if self-hosted)</p>
                   </div>
                 </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-green-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">App Preferences</h4>
                    <p className="text-gray-300 text-sm">Settings and customization options you choose</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-red-400">Data We DON'T Collect</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="mt-1 h-5 w-5 text-red-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Personal Identifiers</h4>
                    <p className="text-gray-300 text-sm">No real names, addresses, or personal identification</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="mt-1 h-5 w-5 text-red-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Banking Details</h4>
                    <p className="text-gray-300 text-sm">No access to your actual bank accounts or credentials</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="mt-1 h-5 w-5 text-red-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Usage Analytics</h4>
                    <p className="text-gray-300 text-sm">No tracking of how you use the application</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Security Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-800/30 rounded-lg">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">How We Protect Your Data</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                         <div className="text-center space-y-4">
               <div className="mx-auto rounded-full bg-blue-500/20 p-4 w-fit">
                 <Lock className="h-8 w-8 text-blue-400" />
               </div>
               <h3 className="text-xl font-semibold">Secure Infrastructure</h3>
               <p className="text-gray-300">
                 Data is stored on secure, encrypted servers with industry-standard security protocols
               </p>
             </div>

            <div className="text-center space-y-4">
              <div className="mx-auto rounded-full bg-green-500/20 p-4 w-fit">
                <Shield className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold">End-to-End Encryption</h3>
              <p className="text-gray-300">
                Data is encrypted both at rest and in transit using industry-standard protocols
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto rounded-full bg-purple-500/20 p-4 w-fit">
                <User className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold">User Control</h3>
              <p className="text-gray-300">
                You have complete control over your data and can delete it at any time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sharing Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-bold">Data Sharing & Third Parties</h2>
          <div className="space-y-8">
            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader>
                <h3 className="text-xl font-semibold text-red-400">We Never Share Your Data</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-300 mb-4">
                  PocketPal is committed to never sharing, selling, or renting your personal 
                  information to third parties. Your financial data remains completely private.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <XCircle className="h-4 w-4 text-red-400" />
                    <span>No data brokers or advertisers</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <XCircle className="h-4 w-4 text-red-400" />
                    <span>No government surveillance cooperation</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <XCircle className="h-4 w-4 text-red-400" />
                    <span>No third-party analytics services</span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* User Rights Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-800/30 rounded-lg">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">Your Rights & Control</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardBody className="text-center">
                <div className="mx-auto mb-4 rounded-full bg-blue-500/20 p-3 w-fit">
                  <Eye className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Right to Access</h3>
                <p className="text-gray-300 text-sm">
                  View all your data stored in the application at any time
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardBody className="text-center">
                <div className="mx-auto mb-4 rounded-full bg-green-500/20 p-3 w-fit">
                  <Database className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Right to Export</h3>
                <p className="text-gray-300 text-sm">
                  Download your data in multiple formats for backup or transfer
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardBody className="text-center">
                <div className="mx-auto mb-4 rounded-full bg-red-500/20 p-3 w-fit">
                  <XCircle className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Right to Delete</h3>
                <p className="text-gray-300 text-sm">
                  Permanently remove your data and account at any time
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Updates Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold">Questions & Updates</h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              If you have any questions about this privacy policy or how we handle your data, 
              please don't hesitate to reach out. We're committed to transparency and will 
              always be honest about our data practices.
            </p>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                <CardBody className="text-center">
                  <div className="mx-auto mb-4 rounded-full bg-blue-500/20 p-3 w-fit">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Contact Us</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Have privacy concerns or questions?
                  </p>
                  <Link 
                    href="/contact" 
                    className="text-[hsl(280,100%,70%)] hover:text-[hsl(280,100%,60%)] transition-colors"
                  >
                    Get in Touch →
                  </Link>
                </CardBody>
              </Card>

              <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                <CardBody className="text-center">
                  <div className="mx-auto mb-4 rounded-full bg-green-500/20 p-3 w-fit">
                    <Clock className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Policy Updates</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    We'll notify you of any changes to this policy
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

      {/* Footer Note */}
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-lg bg-gray-800/50 p-6 border border-gray-700">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Info className="h-6 w-6 text-[hsl(280,100%,70%)]" />
              <h3 className="text-lg font-semibold">Important Note</h3>
            </div>
                         <p className="text-gray-300">
               This privacy policy applies to PocketPal as both a hosted service and an open-source project. 
               You can use our hosted version for convenience or deploy your own instance for complete control 
               over your data and privacy practices.
             </p>
          </div>
        </div>
      </section>
    </main>
  );
}
