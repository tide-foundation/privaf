import ComplianceLogo from "@/components/ComplianceLogo";
import SocialLinks from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTideCloak, Authenticated, Unauthenticated } from '@tidecloak/react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, Database, ExternalLink, Eye } from 'lucide-react';

export default function Index() {
  const { login, logout } = useTideCloak();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <header className="container mx-auto px-6 py-8 text-center">
        <div className="flex justify-center mb-6">
          <img 
            src="/lovable-uploads/ce72950e-ea40-4444-bc38-4e938049df7b.png" 
            alt="PrivAF - Neon logo with padlock and sunglasses" 
            className="h-48 w-auto"
          />
        </div>
        <h2 className="text-3xl font-bold mb-8 text-center">
              Vibe <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Coded.</span> Provably <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Secure.</span>
            </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
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

        <Unauthenticated>
          <div className="space-y-6 mb-12">
            <Button 
          onClick={login}
              variant="neon" 
          size="lg" 
          className="text-lg px-8 py-4 mb-4"
        >
          <Eye className="mr-2" />
          Enter your vault
        </Button>

            <p className="text-sm text-muted-foreground">
              Because no-one else can
            </p>
          </div>
        </Unauthenticated>

        <Authenticated>
          <div className="space-y-6 mb-12">
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={() => navigate('/vault')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4"
              >
                <Database className="w-5 h-5 mr-2" />
                Open Vault
              </Button>
              <Button 
                onClick={logout}
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-4"
              >
                Logout
              </Button>
            </div>
          </div>
        </Authenticated>
      </header>

      <main className="container mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Zero</h3>
            <p className="text-muted-foreground">Military-grade encryption ensures your data remains private and secure, even from us.</p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Database className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Local-First Storage</h3>
            <p className="text-muted-foreground">Your data is stored locally on your device with IndexedDB, no cloud servers required.</p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Zero Knowledge</h3>
            <p className="text-muted-foreground">We can't see your data, and neither can anyone else. True privacy by design.</p>
          </div>
        </div>

        {/* What is PrivAF? */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              What is <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">PrivAF</span>?
            </h2>
            <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
              <p className="text-lg leading-relaxed text-center">
                A personal vault for notes and files, vibe coded. Locked by{" "}
                <a 
                  href="https://tidecloak.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors underline"
                >
                  TideCloak
                </a>{" "}
                with keys nobody will ever hold and zero knowledge password authentication.
              </p>
            </Card>
          </div>
        </section>

        {/* Trust me bro */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Trust me <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">bro</span>
            </h2>
            
            <div className="grid gap-8 mb-12">
              <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-12">
                <div className="flex items-center gap-3 md:justify-start">
                  <Shield className="text-primary" size={24} />
                  <span className="font-semibold">Zero knowledge architecture</span>
                </div>
                <div className="flex items-center gap-3 md:justify-center">
                  <Lock className="text-primary" size={24} />
                  <span className="font-semibold">Zero Trust principles</span>
                </div>
                <div className="flex items-center gap-3 md:justify-end">
                  <Eye className="text-primary" size={24} />
                  <span className="font-semibold">Zero quality assurance</span>
                </div>
              </div>

              <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
                <h3 className="font-semibold mb-4 flex items-center justify-center gap-2">
                  Not certified with:
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
                  <ComplianceLogo name="ISO27001:2022" imageSrc="/lovable-uploads/556a1445-7570-4178-90d8-44351d2125a0.png" />
                  <ComplianceLogo name="HIPAA" imageSrc="/lovable-uploads/373a52d7-7db5-4d14-9b9b-f9d1f638110a.png" />
                  <ComplianceLogo name="SOC 2" imageSrc="/lovable-uploads/81c16bd4-6177-4650-80f7-7619a0195b20.png" />
                  <ComplianceLogo name="GDPR" imageSrc="/lovable-uploads/5b6a3904-e36c-4ff2-84f7-bb1c6f11e947.png" />
                  <ComplianceLogo name="PCI DSS" imageSrc="/lovable-uploads/6396ad59-1c05-46e6-9a8d-315015d0c67d.png" />
                  <ComplianceLogo name="FedRAMP" imageSrc="/lovable-uploads/e8de0929-f1ff-4653-9a55-33b985b0fda8.png" />
                </div>
                <p className="text-sm text-muted-foreground italic text-center">
                  Because compliance isn't security. Math is.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Try TideCloak */}
        <section className="py-16">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-gradient-to-r from-card/80 to-accent/10 backdrop-blur border-primary/30 border-2">
              <h3 className="text-2xl font-bold mb-4 text-center text-primary">
                Try TideCloak
              </h3>
              <p className="text-center mb-6 text-muted-foreground">
                Use TideCloak to secure whatever you're building. Even if it's bad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 border-primary text-primary hover:bg-primary/10"
                  onClick={() => window.open('https://github.com/tide-foundation/tidecloak-gettingstarted', '_blank')}
                >
                  <ExternalLink size={16} />
                  React Starter
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 border-primary text-primary hover:bg-primary/10"
                  onClick={() => window.open('https://github.com/tide-foundation/tidecloak-js/blob/main/packages/tidecloak-create-nextjs/README.md', '_blank')}
                >
                  <ExternalLink size={16} />
                  Next.JS Starter
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 border-primary text-primary hover:bg-primary/10"
                  onClick={() => window.open('https://github.com/tide-foundation/tidecloak-playground', '_blank')}
                >
                  <ExternalLink size={16} />
                  GitHub Codespaces Demo
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-16 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="https://tidecloak.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Shield size={16} />
                Secured by TideCloak
              </a>
              <a 
                href="https://tide.org/alpha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <ExternalLink size={16} />
                Join the Alpha
              </a>
            </div>
            <SocialLinks />
          </div>
          <div className="text-center mt-8 text-xs text-muted-foreground">
            <p>Because your data deserves better than "trust me bro"</p>
          </div>
        </div>
      </footer>
    </div>
  );
}