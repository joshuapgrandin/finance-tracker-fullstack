const FeatureCard = ({
  icon: Icon,
  title,
  description,
  iconBgColor,
  iconColor,
}) => {
  return (
    <div className="flex flex-col items-start space-y-2">
      <div className={`${iconBgColor} rounded-lg p-2`}>
        <Icon className={iconColor} size={24} />
      </div>
      <h3 className="font-bold text-neutral-900">{title}</h3>
      <p className="font-thin text-sm text-neutral-400">{description}</p>
    </div>
  );
};

export default FeatureCard;
