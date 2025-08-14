interface ComplianceLogoProps {
  name: string;
  className?: string;
}

const ComplianceLogo = ({ name, className = "" }: ComplianceLogoProps) => {
  return (
    <div className={`compliance-logo w-24 h-16 bg-muted/20 rounded-lg flex items-center justify-center text-xs font-bold text-muted-foreground border border-muted/30 ${className}`}>
      {name}
    </div>
  );
};

export default ComplianceLogo;