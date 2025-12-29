import { Shield, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-display font-bold">CryptoSafe</span>
          </div>

          {/* Message */}
          <p className="text-muted-foreground text-sm text-center">
            Educating and protecting the crypto community from scams.
          </p>

          {/* Made with love */}
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="w-4 h-4 text-danger fill-danger" /> for the crypto community
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CryptoSafe. This is an educational resource. Always do your own research.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
