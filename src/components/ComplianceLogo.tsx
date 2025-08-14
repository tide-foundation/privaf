interface ComplianceLogoProps {
  name: string;
  imageSrc?: string;
  className?: string;
}

const ComplianceLogo = ({ name, imageSrc, className = "" }: ComplianceLogoProps) => {
  return (
    <div className={`compliance-logo w-24 h-16 bg-muted/20 rounded-lg flex items-center justify-center text-xs font-bold text-muted-foreground border border-muted/30 ${className}`}>
      {imageSrc ? (
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-contain opacity-60"
        />
      ) : (
        name
      )}
    </div>
  );
};

export default ComplianceLogo;