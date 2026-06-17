export const LEGAL_FOOTER_LINKS = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/politique-confidentialite" },
  { label: "CGU", href: "/conditions-utilisation" },
  { label: "CGV", href: "/conditions-generales-vente" },
  { label: "Cookies", href: "/politique-cookies" },
  { label: "Contact", href: "/contact" },
] as const;

interface LegalFooterLinksProps {
  className?: string;
  linkClassName?: string;
  separatorClassName?: string;
}

export default function LegalFooterLinks({
  className = "",
  linkClassName = "",
  separatorClassName = "text-gray-300",
}: LegalFooterLinksProps) {
  return (
    <nav aria-label="Liens légaux" className={`flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 ${className}`}>
      {LEGAL_FOOTER_LINKS.map((link, index) => (
        <span key={link.href} className="flex items-center gap-x-3">
          {index > 0 && <span aria-hidden="true" className={separatorClassName}>•</span>}
          <a href={link.href} className={linkClassName}>
            {link.label}
          </a>
        </span>
      ))}
    </nav>
  );
}
