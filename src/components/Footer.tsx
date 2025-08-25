import Link from "next/link";
import { Divider } from "@heroui/react";
import { 
  Github,
  Mail,
  Linkedin,
  MessageCircle
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-700 bg-gray-900/30 backdrop-blur-sm">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <h3 className="mb-4 text-xl font-bold">PocketPal</h3>
          <p className="text-gray-300">
            Your smart financial companion. Open-source, private, and powerful.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Product</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Resources</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-of-services" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Connect</h4>
          <div className="flex space-x-4">
            <Link href="mailto:david.web.dev73@gmail.com" className="text-gray-300 hover:text-white transition-colors" target="_blank">
              <Mail className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/404foundme/" className="text-gray-300 hover:text-white transition-colors" target="_blank">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://github.com/404FoundMeX" className="text-gray-300 hover:text-white transition-colors" target="_blank">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://discord.gg/2NssRs2b" className="text-gray-300 hover:text-white transition-colors" target="_blank">
              <MessageCircle className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <Divider className="my-8" />
      <div className="text-center text-gray-300">
        <p>&copy; 2025 PocketPal. Open source and free to use.</p>
      </div>
    </div>
  </footer>
  );
}