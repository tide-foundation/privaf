import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ComplianceLogo from "@/components/ComplianceLogo";
import SocialLinks from "@/components/SocialLinks";
import { ExternalLink, Shield, Lock, Eye } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen text-foreground">
      {/* Header */}
      <header className="container mx-auto px-6 py-8 text-center">
        <div className="flex justify-center mb-6">
          <img 
            src="/lovable-uploads/cf4f2343-7bb9-4a97-bc94-e82564e67e1b.png" 
            alt="PrivAF - Padlock with sunglasses" 
            className="h-32 w-auto"
          />
        </div>
        <p className="text-xl font-semibold mb-8 text-neon-cyan">
          Vibe Coded. Provably Secure.
        </p>
        <Button 
          variant="neon" 
          size="lg" 
          className="text-lg px-8 py-4 mb-4"
        >
          <Eye className="mr-2" />
          Login & See for Yourself
        </Button>
        <p className="text-sm text-muted-foreground">
          Because nobody else can. Not even us.
        </p>
      </header>

      {/* What is PrivAF? */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            What is <span className="neon-text">PrivAF</span>?
          </h2>
          <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
            <p className="text-lg leading-relaxed text-center">
              A personal vault for notes and files, vibe coded. Locked by{" "}
              <a 
                href="https://tidecloak.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neon-blue hover:text-neon-cyan transition-colors underline"
              >
                TideCloak
              </a>{" "}
              with keys nobody will ever hold and zero knowledge password authentication.
            </p>
          </Card>
        </div>
      </section>

      {/* Trust me bro */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Trust me <span className="neon-text">bro</span>
          </h2>
          
          <div className="grid gap-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="flex items-center gap-3">
                <Shield className="text-neon-cyan" size={24} />
                <span className="font-semibold">Zero knowledge architecture</span>
              </div>
              <div className="flex items-center gap-3">
                <Lock className="text-neon-blue" size={24} />
                <span className="font-semibold">Zero Trust principles</span>
              </div>
              <div className="flex items-center gap-3">
                <Eye className="text-neon-pink" size={24} />
                <span className="font-semibold">Zero quality assurance</span>
              </div>
            </div>

            <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
              <h3 className="font-semibold mb-4 flex items-center justify-center gap-2">
                PrivAF is not certified with any of these
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <ComplianceLogo name="ISO27001:2022" imageSrc="/lovable-uploads/cf4f2343-7bb9-4a97-bc94-e82564e67e1b.png" />
                <ComplianceLogo name="HIPAA" imageSrc="/lovable-uploads/cf4f2343-7bb9-4a97-bc94-e82564e67e1b.png" />
                <ComplianceLogo name="SOC 2" imageSrc="/lovable-uploads/cf4f2343-7bb9-4a97-bc94-e82564e67e1b.png" />
                <ComplianceLogo name="GDPR" imageSrc="/lovable-uploads/cf4f2343-7bb9-4a97-bc94-e82564e67e1b.png" />
              </div>
              <p className="text-sm text-muted-foreground italic text-center">
                Because compliance isn't security. Math is.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Try TideCloak */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-gradient-to-r from-card/80 to-accent/10 backdrop-blur border-neon-purple/30 border-2">
            <h3 className="text-2xl font-bold mb-4 text-center text-neon-purple">
              Try TideCloak
            </h3>
            <p className="text-center mb-6 text-muted-foreground">
              Use TideCloak to secure whatever you're building. Even if it's bad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="neonBlue" 
                className="flex items-center gap-2"
                onClick={() => window.open('https://github.com/tide-foundation/tidecloak-gettingstarted', '_blank')}
              >
                <ExternalLink size={16} />
                React Starter
              </Button>
              <Button 
                variant="neonBlue" 
                className="flex items-center gap-2"
                onClick={() => window.open('https://github.com/tide-foundation/tidecloak-js/blob/main/packages/tidecloak-create-nextjs/README.md', '_blank')}
              >
                <ExternalLink size={16} />
                Next.JS Starter
              </Button>
              <Button 
                variant="neonPurple" 
                className="flex items-center gap-2"
                onClick={() => window.open('https://github.com/tide-foundation/tidecloak-playground', '_blank')}
              >
                <ExternalLink size={16} />
                GitHub Codespaces Demo
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-16 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="https://tidecloak.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon-cyan transition-colors flex items-center gap-2"
              >
                <Shield size={16} />
                Secured by TideCloak
              </a>
              <a 
                href="https://tide.org/alpha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon-pink transition-colors flex items-center gap-2"
              >
                <ExternalLink size={16} />
                Join the Alpha
              </a>
            </div>
            <SocialLinks />
          </div>
          <div className="text-center mt-8 text-xs text-muted-foreground">
            <p>PrivAF © 2024 - Because your data deserves better than "trust me bro"</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;