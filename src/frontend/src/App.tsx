import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Copy,
  Globe,
  HardHat,
  Lock,
  Mail,
  Menu,
  Music,
  Play,
  Star,
  Upload,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type Page = "main" | "terms" | "privacy" | "policy" | "support";

const APP_LINK = "https://xocial-stream-oz9.caffeine.xyz";
const XOCIAL_LOGO =
  "/assets/uploads/image-019d21a3-cf07-74ab-8a2c-14e2df8649bf-1.png";
const CHURDALOVE_LOGO =
  "/assets/uploads/image-019d21a3-d6d2-744b-b91b-c71cd7f9ea3a-3.png";

const features = [
  {
    icon: Upload,
    title: "Upload Studio",
    desc: "Upload videos to your private library with ease. Fast, secure, and straightforward.",
  },
  {
    icon: Play,
    title: "12-Feature Player",
    desc: "A powerful player with 12 features built for real viewers — not just content consumers.",
  },
  {
    icon: Lock,
    title: "Private Library",
    desc: "Your videos, your space. Fully private and in your control, always.",
  },
  {
    icon: Globe,
    title: "Public Videos",
    desc: "Share what you love with the world, on your terms. No algorithm deciding for you.",
  },
  {
    icon: Music,
    title: "ChurDalove Music",
    desc: "Stream and build your music library inside the app. Fully integrated with your account.",
  },
  {
    icon: HardHat,
    title: "Worker Categories",
    desc: "Music organised by trade and profession — for workers everywhere around the world.",
  },
];

const plans = [
  {
    id: "free",
    badge: "START HERE",
    name: "Free Promo",
    price: null,
    sub: "ChurDalove Special",
    featured: false,
    perks: [
      "Upload 100 songs to ChurDalove",
      "Get 2 months Advanced free",
      "Full Xocial.Stream access",
      "Full ChurDalove access",
    ],
    cta: "Get Started Free",
  },
  {
    id: "standard",
    badge: "MOST POPULAR",
    name: "Standard",
    price: "$4.99",
    sub: "per month",
    featured: true,
    perks: [
      "Unlimited uploads",
      "Improved video clarity",
      "Extended storage",
      "ChurDalove access",
    ],
    cta: "Get Standard",
  },
  {
    id: "advanced",
    badge: "FULL POWER",
    name: "Advanced",
    price: "$9.99",
    sub: "per month",
    featured: false,
    perks: [
      "Everything in Standard",
      "Enhanced audio & colour",
      "Priority support",
      "Early feature access",
    ],
    cta: "Get Advanced",
  },
];

const workerCategories = [
  "The Shearer",
  "The Rousie",
  "The Truckie",
  "The Farmer",
  "The Tradie",
  "The Miner",
  "The Fisho",
  "The Fencer",
  "The Landscaper",
  "The Sparky",
  "The Builder",
  "The Driver",
  "The Nurse",
  "The Chef",
  "The Mechanic",
  "+ More",
];

function MusicBars() {
  return (
    <div className="flex gap-0.5 items-end">
      <div
        className="w-1 rounded-full bg-[#00E5FF]"
        style={{ height: "8px", opacity: 0.6 }}
      />
      <div
        className="w-1 rounded-full bg-[#00E5FF]"
        style={{ height: "14px", opacity: 0.65 }}
      />
      <div
        className="w-1 rounded-full bg-[#00E5FF]"
        style={{ height: "10px", opacity: 0.7 }}
      />
      <div
        className="w-1 rounded-full bg-[#00E5FF]"
        style={{ height: "16px", opacity: 0.75 }}
      />
      <div
        className="w-1 rounded-full bg-[#00E5FF]"
        style={{ height: "12px", opacity: 0.8 }}
      />
      <div
        className="w-1 rounded-full bg-[#00E5FF]"
        style={{ height: "18px", opacity: 0.85 }}
      />
      <div
        className="w-1 rounded-full bg-[#00E5FF]"
        style={{ height: "8px", opacity: 0.9 }}
      />
    </div>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/95 backdrop-blur-md border-b border-[#1a2830]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <img
              src={XOCIAL_LOGO}
              alt="Xocial.Stream"
              className="h-10 md:h-12 w-auto object-contain"
              style={{ filter: "drop-shadow(0 0 8px rgba(0,229,255,0.5))" }}
            />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              type="button"
              data-ocid="nav.features.link"
              onClick={() => scrollTo("features")}
              className="text-sm font-medium text-[#B3EFFF] hover:text-[#00E5FF] transition-colors"
            >
              Features
            </button>
            <button
              type="button"
              data-ocid="nav.music.link"
              onClick={() => scrollTo("music")}
              className="text-sm font-medium text-[#B3EFFF] hover:text-[#00E5FF] transition-colors"
            >
              Music
            </button>
            <button
              type="button"
              data-ocid="nav.pricing.link"
              onClick={() => scrollTo("pricing")}
              className="text-sm font-medium text-[#B3EFFF] hover:text-[#00E5FF] transition-colors"
            >
              Pricing
            </button>
            <a
              data-ocid="nav.join.button"
              href={APP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00E5FF] text-[#050505] font-bold text-sm hover:bg-[#00B8D4] transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,229,255,0.5)]"
            >
              Join for Free
            </a>
          </nav>

          <button
            type="button"
            data-ocid="nav.mobile_menu.toggle"
            className="md:hidden text-[#00E5FF] p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#0f1518] border-b border-[#1a2830] px-4 py-6 flex flex-col gap-4"
          >
            {["features", "music", "pricing"].map((id) => (
              <button
                type="button"
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left text-[#B3EFFF] font-medium capitalize py-1"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
            <a
              href={APP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center items-center px-5 py-3 rounded-lg bg-[#00E5FF] text-[#050505] font-bold text-sm"
            >
              Join for Free
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function SubPageHeader({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <header className="bg-[#050505]/95 backdrop-blur-md border-b border-[#1a2830] sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <img
            src={XOCIAL_LOGO}
            alt="Xocial.Stream"
            className="h-8 w-auto object-contain"
            style={{ filter: "drop-shadow(0 0 6px rgba(0,229,255,0.5))" }}
          />
          <button
            type="button"
            data-ocid="subpage.back.button"
            onClick={() => setPage("main")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1a2830] text-[#B3EFFF] hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-colors text-sm font-medium"
          >
            <ArrowLeft size={14} />
            Back
          </button>
        </div>
      </div>
    </header>
  );
}

function PageContainer({
  children,
  setPage,
}: { children: React.ReactNode; setPage: (p: Page) => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] font-sans">
      <SubPageHeader setPage={setPage} />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {children}
      </main>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[#00E5FF] font-bold text-sm uppercase tracking-widest mt-8 mb-2">
      {children}
    </h2>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return <p className="text-[#B3EFFF] text-base leading-relaxed">{children}</p>;
}

function TermsPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <PageContainer setPage={setPage}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[#00E5FF] text-xs font-bold tracking-[0.3em] uppercase mb-2">
          Legal
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
          Terms of Use
        </h1>
        <p className="text-[#6b8a95] text-base mb-8">Using Xocial.Stream</p>

        <div className="bg-[#0f1518] border border-[#1a2830] rounded-2xl p-6 md:p-8 space-y-2">
          <BodyText>
            Xocial.Stream is a platform for uploading, storing, and streaming
            your own content. By creating an account or using the service, you
            agree to follow these terms.
          </BodyText>

          <SectionTitle>Your Content</SectionTitle>
          <BodyText>
            You are responsible for the content you upload. You must only upload
            content that you own or have permission to use. You must not upload
            anything illegal, harmful, or infringing on someone else's rights.
          </BodyText>

          <SectionTitle>Our Platform</SectionTitle>
          <BodyText>
            We provide the platform "as is." We work to keep the service stable
            and available, but we do not guarantee uninterrupted access. We may
            update or improve the service at any time.
          </BodyText>

          <SectionTitle>Accounts</SectionTitle>
          <BodyText>
            You are responsible for keeping your account secure. If you believe
            your account has been accessed without permission, please contact
            us.
          </BodyText>

          <SectionTitle>Fair Use</SectionTitle>
          <BodyText>
            Do not misuse the platform, attempt to break it, overload it, or
            interfere with other users.
          </BodyText>

          <SectionTitle>Liability</SectionTitle>
          <BodyText>
            TuoraSystems is not responsible for any loss of data, downtime, or
            issues caused by misuse of the platform.
          </BodyText>

          <SectionTitle>Changes to These Terms</SectionTitle>
          <BodyText>
            We may update these terms from time to time. Continued use of the
            service means you accept the updated terms.
          </BodyText>

          <SectionTitle>Contact</SectionTitle>
          <BodyText>
            If you have questions about these terms, reach out through our{" "}
            <button
              type="button"
              onClick={() => setPage("support")}
              className="text-[#00E5FF] hover:underline font-medium"
            >
              Support page
            </button>
            .
          </BodyText>
        </div>
      </motion.div>
    </PageContainer>
  );
}

function PrivacyPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <PageContainer setPage={setPage}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[#00E5FF] text-xs font-bold tracking-[0.3em] uppercase mb-2">
          Legal
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
          Privacy Policy
        </h1>

        <div className="bg-[#0f1518] border border-[#1a2830] rounded-2xl p-6 md:p-8 space-y-2">
          <SectionTitle>Information We Collect</SectionTitle>
          <BodyText>
            We collect basic information you provide when creating an account,
            such as your email address. We also collect usage data to help
            improve the platform.
          </BodyText>

          <SectionTitle>How Your Data Is Used</SectionTitle>
          <BodyText>
            We use your information to: operate the platform, improve
            performance, provide support, keep your account secure. We do not
            sell your data.
          </BodyText>

          <SectionTitle>Your Content</SectionTitle>
          <BodyText>
            Your uploaded content is stored securely and is only accessible to
            you unless you choose to share it.
          </BodyText>

          <SectionTitle>Cookies & Analytics</SectionTitle>
          <BodyText>
            We may use simple analytics tools to understand how the platform is
            used. This helps us improve reliability and performance.
          </BodyText>

          <SectionTitle>Data Security</SectionTitle>
          <BodyText>
            We take reasonable steps to protect your information and your
            content. No system is perfect, but we work to keep your data safe.
          </BodyText>

          <SectionTitle>Your Choices</SectionTitle>
          <BodyText>
            You can update or delete your account at any time. You can also
            request removal of your data.
          </BodyText>

          <SectionTitle>Updates to This Policy</SectionTitle>
          <BodyText>
            We may update this policy as the platform grows. We will post
            changes on this page.
          </BodyText>

          <SectionTitle>Contact</SectionTitle>
          <BodyText>
            If you have privacy questions, reach out through our{" "}
            <button
              type="button"
              onClick={() => setPage("support")}
              className="text-[#00E5FF] hover:underline font-medium"
            >
              Support page
            </button>
            .
          </BodyText>
        </div>
      </motion.div>
    </PageContainer>
  );
}

function PolicyPage({ setPage }: { setPage: (p: Page) => void }) {
  const prohibited = [
    "Violent or graphic content intended to shock or disgust",
    "Hate speech or content that promotes discrimination",
    "Sexually explicit or pornographic material",
    "Content that exploits or endangers minors",
    "Promotion of terrorism, extremism, or illegal activities",
    "Spam, scams, or fraudulent content",
    "Content that infringes on intellectual property rights",
    "Malware, viruses, or other harmful software",
  ];

  const pledge = [
    "Treat all community members with respect and kindness",
    "Share only authentic, legal, and appropriate content",
    "Protect the privacy and safety of yourself and others",
    "Engage constructively and contribute positively to the community",
    "Report violations and help maintain a safe environment",
  ];

  const guidelines = [
    {
      num: 1,
      title: "Respect and Dignity",
      desc: "Treat all community members with respect. Harassment, hate speech, discrimination, or bullying will not be tolerated.",
    },
    {
      num: 2,
      title: "Authentic and Legal Content",
      desc: "Upload only content you have created or have the right to share. Respect intellectual property rights.",
    },
    {
      num: 3,
      title: "Safety First",
      desc: "Do not post content that promotes violence, self-harm, dangerous activities, or illegal behavior.",
    },
    {
      num: 4,
      title: "Privacy Protection",
      desc: "Respect the privacy of others. Do not share personal information without consent.",
    },
    {
      num: 5,
      title: "Truthfulness and Transparency",
      desc: "Be honest in your content and interactions. Do not spread misinformation.",
    },
    {
      num: 6,
      title: "Constructive Engagement",
      desc: "Engage constructively. Spam, excessive self-promotion, and disruptive behavior are not permitted.",
    },
  ];

  return (
    <PageContainer setPage={setPage}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[#00E5FF] text-xs font-bold tracking-[0.3em] uppercase mb-2">
          Community
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
          Community & Ethics Policy
        </h1>
        <p className="text-[#6b8a95] text-base mb-8">
          Building a respectful and inclusive video-sharing community
        </p>

        <div className="space-y-6">
          <div className="bg-[#0f1518] border border-[#1a2830] rounded-2xl p-6 md:p-8">
            <SectionTitle>Our Commitment</SectionTitle>
            <BodyText>
              Xocial.Stream is committed to fostering a safe, respectful, and
              inclusive environment for all users. We believe in the power of
              video to educate, inspire, and connect people across the globe.
              This policy outlines the standards we expect from our community
              members.
            </BodyText>

            <SectionTitle>Community Guidelines</SectionTitle>
            <div className="space-y-4 mt-3">
              {guidelines.map((g) => (
                <div key={g.num} className="flex gap-3">
                  <span className="text-[#00E5FF] font-extrabold text-sm w-5 flex-shrink-0 mt-0.5">
                    {g.num}.
                  </span>
                  <div>
                    <span className="text-white font-bold text-sm">
                      {g.title}
                    </span>
                    <span className="text-[#B3EFFF] text-sm"> — {g.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0f1518] border border-[#1a2830] rounded-2xl p-6 md:p-8">
            <SectionTitle>Prohibited Content</SectionTitle>
            <ul className="space-y-2 mt-3">
              {prohibited.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <X size={14} className="text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-[#B3EFFF] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0f1518] border border-[#1a2830] rounded-2xl p-6 md:p-8">
            <SectionTitle>Enforcement and Consequences</SectionTitle>
            <BodyText>
              Violations may result in content removal, account suspension, or
              permanent ban. We review reports promptly and take appropriate
              action.
            </BodyText>

            <SectionTitle>Community Pledge</SectionTitle>
            <p className="text-[#6b8a95] text-sm mb-3">
              By using Xocial.Stream, you pledge to:
            </p>
            <ul className="space-y-2">
              {pledge.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check
                    size={14}
                    className="text-[#00E5FF] mt-0.5 flex-shrink-0"
                  />
                  <span className="text-[#B3EFFF] text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-[#6b8a95] text-xs mt-6">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </motion.div>
    </PageContainer>
  );
}

function SupportPage({ setPage }: { setPage: (p: Page) => void }) {
  const [copied, setCopied] = useState(false);
  const helpTopics = [
    "Account issues",
    "Upload or playback problems",
    "General questions",
    "Reporting bugs",
    "Feedback and suggestions",
  ];

  const browserSteps = [
    { label: "Refresh the page", desc: "Click the refresh button or press F5" },
    {
      label: "Hard refresh",
      desc: "Press Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)",
    },
    {
      label: "Use incognito/private window",
      desc: "This always loads the latest version",
    },
  ];

  const troubleTips = [
    "Try another device or browser",
    "Check your internet connection",
    "Re-upload the file if it failed",
    "If the issue continues, contact us and we'll take a look.",
  ];

  return (
    <PageContainer setPage={setPage}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[#00E5FF] text-xs font-bold tracking-[0.3em] uppercase mb-2">
          Help
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
          Support
        </h1>
        <p className="text-[#6b8a95] text-base mb-8">
          Need help? We're here to assist with any issues related to your
          account or the platform.
        </p>

        <div className="space-y-6">
          <div className="bg-[#0f1518] border border-[#00E5FF]/30 rounded-2xl p-6 md:p-8">
            <SectionTitle>Contact Us</SectionTitle>
            <p className="text-[#B3EFFF] text-base mb-3">
              You can reach us at:
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <a
                data-ocid="support.email.link"
                href="mailto:support@tuorasystems.com"
                className="inline-flex items-center gap-2 text-[#00E5FF] font-bold text-lg hover:underline"
              >
                <Mail size={18} />
                support@tuorasystems.com
              </a>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText("support@tuorasystems.com");
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-sm font-medium hover:bg-[#00E5FF]/20 transition-colors"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "Copied!" : "Copy Email"}
              </button>
            </div>
          </div>

          <div className="bg-[#0f1518] border border-[#1a2830] rounded-2xl p-6 md:p-8">
            <SectionTitle>What We Can Help With</SectionTitle>
            <ul className="space-y-2 mt-3">
              {helpTopics.map((topic) => (
                <li key={topic} className="flex items-center gap-2.5">
                  <Check size={14} className="text-[#00E5FF] flex-shrink-0" />
                  <span className="text-[#B3EFFF] text-sm">{topic}</span>
                </li>
              ))}
            </ul>

            <SectionTitle>Response Time</SectionTitle>
            <BodyText>
              We aim to respond as soon as possible. If we're experiencing high
              volume, replies may take a little longer.
            </BodyText>
          </div>

          <div className="bg-[#0f1518] border border-[#1a2830] rounded-2xl p-6 md:p-8">
            <SectionTitle>Seeing Old Content After Updates?</SectionTitle>
            <BodyText>
              Sometimes your browser keeps older versions of the site
              temporarily stored (called "caching"). This app includes automatic
              cache-busting to load the newest version, but if you still see
              outdated content, try these steps:
            </BodyText>
            <ul className="space-y-3 mt-4">
              {browserSteps.map((step) => (
                <li key={step.label} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00E5FF]/20 border border-[#00E5FF]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                  </div>
                  <div>
                    <span className="text-white font-semibold text-sm">
                      {step.label}
                    </span>
                    <span className="text-[#6b8a95] text-sm">
                      {" "}
                      — {step.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0f1518] border border-[#1a2830] rounded-2xl p-6 md:p-8">
            <SectionTitle>Other Troubleshooting Tips</SectionTitle>
            <ul className="space-y-2 mt-3">
              {troubleTips.map((tip) => (
                <li key={tip} className="flex items-start gap-2.5">
                  <Check
                    size={14}
                    className="text-[#00E5FF] mt-0.5 flex-shrink-0"
                  />
                  <span className="text-[#B3EFFF] text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </PageContainer>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#00E5FF]/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#00B8D4]/4 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="mb-8"
            >
              <img
                src={XOCIAL_LOGO}
                alt="Xocial.Stream"
                className="w-48 md:w-64 h-auto object-contain"
                style={{
                  filter:
                    "drop-shadow(0 0 30px rgba(0,229,255,0.6)) drop-shadow(0 0 60px rgba(0,229,255,0.3))",
                }}
              />
            </motion.div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1a2830] bg-[#0f1518] text-[#00E5FF] text-xs font-semibold tracking-widest uppercase mb-6">
              <Zap size={12} />
              No Ads. No Algorithms. No Big Tech.
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
              <span className="text-white">YOUR</span>
              <br />
              <span className="text-white">VIDEOS.</span>
              <br />
              <span className="text-gradient-cyan">YOUR SPACE.</span>
            </h1>
            <p className="text-lg text-[#B3EFFF] leading-relaxed mb-8 max-w-lg">
              A warm space for everyday people worldwide — share videos, build
              your music library, and stay in control. No big tech. Just you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                data-ocid="hero.join.primary_button"
                href={APP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00E5FF] text-[#050505] font-extrabold text-base hover:bg-[#00B8D4] transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:-translate-y-0.5"
              >
                Join for Free
                <ArrowRight size={18} />
              </a>
            </div>
            <p className="mt-4 text-sm text-[#6b8a95]">
              10 free uploads every month · No credit card needed
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <HeroVisual />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <div className="flex flex-col items-center gap-2 text-[#6b8a95] text-xs">
            <span className="tracking-widest uppercase">Scroll</span>
            <ChevronDown size={16} className="animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroVisual() {
  const videoTiles = [
    { label: "Sheep Shearing", tag: "Agriculture", views: "2.4K" },
    { label: "Family Moments", tag: "Children & Family", views: "1.1K" },
    { label: "Road Stories", tag: "Transport", views: "3.7K" },
  ];

  return (
    <div className="relative w-full max-w-md">
      <div className="relative bg-[#0f1518] border border-[#1a2830] rounded-2xl p-5 shadow-[0_0_60px_rgba(0,229,255,0.08)]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
            <span className="text-[#00E5FF] text-xs font-bold tracking-wider">
              XOCIAL.STREAM
            </span>
          </div>
          <span className="text-[#6b8a95] text-xs">Your Library</span>
        </div>

        <div className="space-y-3">
          {videoTiles.map((tile, i) => (
            <motion.div
              key={tile.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15 }}
              className="flex items-center gap-3 bg-[#050505] rounded-xl p-3 border border-[#1a2830]"
            >
              <div className="w-12 h-10 rounded-lg bg-gradient-to-br from-[#00E5FF]/20 to-[#00B8D4]/10 flex items-center justify-center flex-shrink-0">
                <Play size={14} className="text-[#00E5FF]" fill="#00E5FF" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-semibold truncate">
                  {tile.label}
                </p>
                <p className="text-[#6b8a95] text-xs">{tile.tag}</p>
              </div>
              <span className="text-[#00E5FF] text-xs font-medium">
                {tile.views}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-4 bg-gradient-to-r from-[#00E5FF]/10 to-[#00B8D4]/10 border border-[#00E5FF]/20 rounded-xl p-3 flex items-center gap-3"
        >
          <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/20 flex items-center justify-center">
            <Music size={14} className="text-[#00E5FF]" />
          </div>
          <div className="flex-1">
            <p className="text-white text-xs font-semibold">ChurDalove</p>
            <p className="text-[#6b8a95] text-xs">Music for every worker</p>
          </div>
          <MusicBars />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute -top-4 -right-4 bg-[#00E5FF] text-[#050505] text-xs font-extrabold px-3 py-1.5 rounded-full shadow-[0_0_20px_rgba(0,229,255,0.4)]"
      >
        No Ads Ever
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute -bottom-4 -left-4 bg-[#0f1518] border border-[#1a2830] text-[#B3EFFF] text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5"
      >
        <Lock size={10} className="text-[#00E5FF]" /> Private by default
      </motion.div>
    </div>
  );
}

function PromoBanner() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-gradient-to-r from-[#00B8D4] via-[#00E5FF] to-[#00B8D4] py-5"
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"
        style={{ backgroundSize: "200% 100%" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <p className="text-[#050505] font-extrabold text-base sm:text-lg md:text-xl tracking-tight">
          🎵 Upload 100 Songs to ChurDalove — Get 2 Months Advanced Free!
        </p>
        <p className="text-[#050505]/75 text-sm mt-1 font-medium">
          Build your music library and unlock full platform access.
        </p>
      </div>
    </motion.section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00E5FF]/3 blur-[150px] rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#00E5FF] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Platform
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            EVERYTHING YOU NEED
          </h2>
          <p className="mt-4 text-[#B3EFFF] text-lg max-w-xl mx-auto">
            One app, two powerful services — video sharing and music, built for
            everyday people worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              data-ocid={`features.item.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#0f1518] border border-[#1a2830] rounded-2xl p-6 card-hover"
            >
              <div className="w-11 h-11 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center mb-4">
                <f.icon size={20} className="text-[#00E5FF]" />
              </div>
              <h3 className="text-white font-bold text-base uppercase tracking-wide mb-2">
                {f.title}
              </h3>
              <p className="text-[#6b8a95] text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChurDaloveSection() {
  return (
    <section id="music" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00B8D4]/5 blur-[120px] rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <img
                src={CHURDALOVE_LOGO}
                alt="ChurDalove"
                className="h-24 md:h-32 w-auto object-contain rounded-2xl"
                style={{
                  filter:
                    "drop-shadow(0 0 20px rgba(255,60,60,0.5)) drop-shadow(0 0 40px rgba(255,60,60,0.2))",
                }}
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              MEET <span className="text-gradient-cyan">CHURDALOVE</span>
            </h2>
            <p className="text-[#00E5FF] text-sm font-bold tracking-widest uppercase mb-4">
              The music app built into Xocial.Stream
            </p>
            <p className="text-[#B3EFFF] text-base leading-relaxed mb-8">
              ChurDalove is more than a music player — it's a space for workers
              from every trade and profession around the world to upload,
              organise, and enjoy music. It comes included with your
              Xocial.Stream account.
            </p>

            <div className="bg-[#00E5FF]/10 border border-[#00E5FF]/30 rounded-2xl p-5 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Star size={14} className="text-[#00E5FF]" fill="#00E5FF" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">
                    Exclusive Launch Offer
                  </p>
                  <p className="text-[#B3EFFF] text-sm">
                    Upload 100 songs and unlock{" "}
                    <span className="text-[#00E5FF] font-bold">
                      2 months Advanced free
                    </span>{" "}
                    — full access to everything.
                  </p>
                </div>
              </div>
            </div>

            <a
              data-ocid="music.cta.primary_button"
              href={APP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00E5FF] text-[#050505] font-extrabold text-base hover:bg-[#00B8D4] transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:-translate-y-0.5"
            >
              Get Started Free
              <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-[#0f1518] border border-[#1a2830] rounded-2xl p-6"
          >
            <p className="text-[#00E5FF] text-xs font-bold tracking-widest uppercase mb-5">
              Worker Categories
            </p>
            <div className="flex flex-wrap gap-2">
              {workerCategories.map((cat) => (
                <span
                  key={cat}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${
                    cat === "+ More"
                      ? "border-[#00E5FF]/40 text-[#00E5FF] bg-[#00E5FF]/10"
                      : "border-[#1a2830] text-[#B3EFFF] bg-[#050505] hover:border-[#00E5FF]/40 hover:text-[#00E5FF] transition-colors cursor-default"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
            <div className="mt-6 bg-[#050505] rounded-xl p-4 border border-[#1a2830]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white text-sm font-bold">
                  Promo Progress
                </span>
                <span className="text-[#00E5FF] text-xs font-bold">
                  0 / 100 songs
                </span>
              </div>
              <div className="w-full bg-[#1a2830] rounded-full h-2">
                <div className="h-2 rounded-full bg-gradient-to-r from-[#00B8D4] to-[#00E5FF] w-0" />
              </div>
              <p className="text-[#6b8a95] text-xs mt-2">
                Upload 100 songs → 2 months Advanced free
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00E5FF]/4 blur-[100px] rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#00E5FF] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            SIMPLE PRICING
          </h2>
          <p className="mt-4 text-[#B3EFFF] text-lg">
            Start free. Upgrade when you're ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              data-ocid={`pricing.${plan.id}.card`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 flex flex-col gap-6 ${
                plan.featured
                  ? "bg-[#0f1518] border-2 border-[#00E5FF] shadow-[0_0_40px_rgba(0,229,255,0.2)] md:-mt-4 md:mb-4"
                  : "bg-[#0f1518] border border-[#1a2830]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-extrabold tracking-widest px-3 py-1 rounded-full ${
                    plan.featured
                      ? "bg-[#00E5FF] text-[#050505]"
                      : "bg-[#1a2830] text-[#00E5FF]"
                  }`}
                >
                  {plan.badge}
                </span>
                {plan.featured && (
                  <Star size={16} className="text-[#00E5FF]" fill="#00E5FF" />
                )}
              </div>

              <div>
                <h3 className="text-white font-extrabold text-xl mb-1">
                  {plan.name}
                </h3>
                {plan.price ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-[#00E5FF]">
                      {plan.price}
                    </span>
                    <span className="text-[#6b8a95] text-sm">{plan.sub}</span>
                  </div>
                ) : (
                  <div>
                    <span className="text-2xl font-extrabold text-[#00E5FF]">
                      Free
                    </span>
                    <p className="text-[#6b8a95] text-xs mt-0.5">{plan.sub}</p>
                  </div>
                )}
              </div>

              <ul className="space-y-3 flex-1">
                {plan.perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-start gap-2.5 text-sm text-[#B3EFFF]"
                  >
                    <Check
                      size={15}
                      className="text-[#00E5FF] mt-0.5 flex-shrink-0"
                    />
                    {perk}
                  </li>
                ))}
              </ul>

              <div
                data-ocid={`pricing.${plan.id}.button`}
                className={`inline-flex justify-center items-center w-full py-3.5 rounded-xl font-bold text-sm ${
                  plan.featured
                    ? "bg-[#00E5FF] text-[#050505]"
                    : "bg-[#1a2830] text-white border border-[#1a2830]"
                }`}
              >
                {plan.cta}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00E5FF]/3 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00E5FF]/6 blur-[150px] rounded-full" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            READY TO TAKE BACK
            <br />
            <span className="text-gradient-cyan">YOUR SPACE?</span>
          </h2>
          <p className="text-[#B3EFFF] text-lg max-w-xl mx-auto mb-10">
            Join everyday people sharing videos and music — without ads,
            algorithms, or big tech getting in the way.
          </p>
          <a
            data-ocid="cta.join.primary_button"
            href={APP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-[#00E5FF] text-[#050505] font-extrabold text-lg hover:bg-[#00B8D4] transition-all duration-200 hover:shadow-[0_0_40px_rgba(0,229,255,0.6)] hover:-translate-y-1"
          >
            Join for Free
            <ArrowRight size={20} />
          </a>
          <p className="mt-5 text-sm text-[#6b8a95]">
            10 free uploads/month · No credit card needed
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer({
  setPage,
  currentPage,
}: {
  setPage: (p: Page) => void;
  currentPage: Page;
}) {
  const _hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const handlePricing = () => {
    if (currentPage === "main") {
      document
        .getElementById("pricing")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      setPage("main");
      setTimeout(() => {
        document
          .getElementById("pricing")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <footer className="border-t border-[#1a2830] bg-[#050505] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <img
              src={XOCIAL_LOGO}
              alt="Xocial.Stream"
              className="h-14 w-auto object-contain mb-2"
              style={{ filter: "drop-shadow(0 0 10px rgba(0,229,255,0.4))" }}
            />
            <p className="text-[#6b8a95] text-sm">
              Your Videos. Your Music. Your Space.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-[#6b8a95]">
            <button
              type="button"
              data-ocid="footer.pricing.link"
              onClick={handlePricing}
              className="hover:text-[#00E5FF] transition-colors"
            >
              Pricing
            </button>
            <button
              type="button"
              data-ocid="footer.terms.link"
              onClick={() => setPage("terms")}
              className="hover:text-[#00E5FF] transition-colors"
            >
              Terms
            </button>
            <button
              type="button"
              data-ocid="footer.privacy.link"
              onClick={() => setPage("privacy")}
              className="hover:text-[#00E5FF] transition-colors"
            >
              Privacy
            </button>
            <button
              type="button"
              data-ocid="footer.policy.link"
              onClick={() => setPage("policy")}
              className="hover:text-[#00E5FF] transition-colors"
            >
              Policy
            </button>
            <button
              type="button"
              data-ocid="footer.support.link"
              onClick={() => setPage("support")}
              className="hover:text-[#00E5FF] transition-colors"
            >
              Support
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#1a2830] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6b8a95]">
          <p>© {new Date().getFullYear()} TuoraSystems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("main");

  useEffect(() => {
    document.title = "Xocial.Stream — Your Videos. Your Music. Your Space.";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "No ads. No algorithms. No big tech. A warm space for everyday people worldwide to share videos and music.",
      );
    }
  }, []);

  if (page === "terms") return <TermsPage setPage={setPage} />;
  if (page === "privacy") return <PrivacyPage setPage={setPage} />;
  if (page === "policy") return <PolicyPage setPage={setPage} />;
  if (page === "support") return <SupportPage setPage={setPage} />;

  return (
    <div className="min-h-screen bg-[#050505] font-sans">
      <NavBar />
      <main>
        <HeroSection />
        <PromoBanner />
        <FeaturesSection />
        <ChurDaloveSection />
        <PricingSection />
        <FinalCTA />
      </main>
      <Footer setPage={setPage} currentPage={page} />
    </div>
  );
}
