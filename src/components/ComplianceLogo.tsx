interface ComplianceLogoProps {
  name: string;
  imageSrc?: string;
  className?: string;
}

const ComplianceLogo = ({ name, imageSrc, className = "" }: ComplianceLogoProps) => {
  return (
    <div className={`compliance-logo w-24 h-16 rounded-lg flex items-center justify-center text-xs font-bold text-muted-foreground ${className}`}>
      {imageSrc ? (
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-contain opacity-70"
        />
      ) : (
        name
      )}
    </div>
  );
};

export default ComplianceLogo;