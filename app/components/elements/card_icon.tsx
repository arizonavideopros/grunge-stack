interface IconCardProps {
    iconSrc: string;  // changed from ReactNode to string
    title: string;
    description: string;
    bgColor: string;
  }
  
  const IconCard: React.FC<IconCardProps> = ({ iconSrc, title, description, bgColor }) => {
    return (
      <div className={`flex items-center p-4 h-full ${bgColor}`}>
        <img src={iconSrc} alt={title} className="mr-4 w-10 h-10" />  {/* Updated this line */}
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    );
  };
  
  export default IconCard;
  