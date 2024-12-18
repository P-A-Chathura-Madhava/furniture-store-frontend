function FeaturesCard({...props}) {
    const {icon, title} = props;
    const titleParts = title.split(" ");
  return (
    <div className="flex justify-center items-center gap-3">
      <div className="text-[70px]">
        {icon}
      </div>
      <span className="text-xl font-bold">
        {titleParts[0]} <br />
        {titleParts[1]}
      </span>
    </div>
  );
}

export default FeaturesCard;
