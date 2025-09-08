# PocketPal 💰

> A modern, privacy-focused personal finance management application built with the T3 Stack

PocketPal is an open-source personal finance management application designed to help you take control of your financial life. Built with modern technologies and a focus on privacy, it provides powerful tools for budgeting, expense tracking, financial planning, and goal setting.

## ✨ Features

### 📊 **Financial Tracking**
- **Expense Management** - Track income and expenses with detailed categorization
- **Budget Planning** - Set monthly budgets with alerts and rollover options
- **Receipt Management** - Upload and organize receipts for tax purposes
- **Credit Tracking** - Monitor credit card usage and debt management

### 🎯 **Goal Setting & Analytics**
- **Financial Goals** - Set and track savings goals with automatic progress monitoring
- **Analytics Dashboard** - Visual insights into spending patterns and trends
- **Monthly Summaries** - Automated financial summaries and reports
- **Category Analysis** - Deep dive into spending by category

### 🔐 **Privacy & Security**
- **Better Auth** - Modern authentication with OAuth support (Google, GitHub)
- **Data Ownership** - Your financial data stays private and secure
- **Open Source** - Full transparency in how your data is handled

### 🏢 **Organization Features**
- **Multi-User Support** - Family or team financial management
- **Organization Management** - Shared budgets and financial planning
- **Invitation System** - Invite family members or financial advisors

## 🚀 Tech Stack

This project uses the [T3 Stack](https://create.t3.gg/) for a modern, type-safe development experience:

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Authentication**: [Better Auth](https://better-auth.com) with OAuth providers
- **Database**: [PostgreSQL](https://postgresql.org) with [Drizzle ORM](https://orm.drizzle.team)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) with custom components
- **API**: [tRPC](https://trpc.io) for type-safe API calls
- **UI Components**: Custom component library with Radix UI primitives
- **Payments**: [Stripe](https://stripe.com) integration for premium features
- **Email**: [Resend](https://resend.com) for transactional emails

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- pnpm (recommended package manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pocketpal.git
   cd pocketpal
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/pocketpal"
   
   # Authentication
   AUTH_SECRET="your-auth-secret"
   NEXT_PUBLIC_GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   
   # Email (optional)
   BETTER_AUTH_EMAIL="your-email@domain.com"
   RESEND_API_KEY="your-resend-api-key"
   
   # Stripe (optional)
   STRIPE_SECRET_KEY="your-stripe-secret-key"
   STRIPE_PUBLISHABLE_KEY="your-stripe-publishable-key"
   ```

4. **Set up the database**
   ```bash
   pnpm db:push
   ```

5. **Start the development server**
   ```bash
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm db:push` - Push database schema changes
- `pnpm db:studio` - Open Drizzle Studio

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   └── public/         # Public page components
├── features/           # Feature-based modules
│   ├── analytics/      # Analytics and reporting
│   ├── categories/     # Expense categories
│   ├── credits/        # Credit card management
│   ├── expenses/       # Income/expense tracking
│   ├── finances/       # Financial summaries
│   ├── goals/          # Financial goals
│   ├── receipts/       # Receipt management
│   └── users/          # User management
├── lib/                # Shared utilities and configurations
└── server/             # Server-side code (tRPC, database)
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](docs/contributing-guide) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with the [T3 Stack](https://create.t3.gg/)
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)

## 📞 Support

- 📖 [Documentation](docs/getting-started)
- 🐛 [Report Issues](https://github.com/yourusername/pocketpal/issues)
- 💬 [Discussions](https://github.com/yourusername/pocketpal/discussions)

---

**PocketPal** - Take control of your financial future, one transaction at a time. 💪
