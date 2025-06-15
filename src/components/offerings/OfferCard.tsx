import Image from "next/image";

export interface CardList {
  iconSrc: string;
  title: string;
  description: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => null;
}

export const OfferCard = ({
  iconSrc,
  title,
  description,
  icon,
  onClick,
}: CardList) => {
  return (
    <div
      onClick={onClick}
      className="bg-secondary grid cursor-pointer grid-cols-3 rounded-t-lg p-4 shadow-lg md:min-w-80"
    >
      <Image
        src={iconSrc}
        width={80}
        height={30}
        alt="Img"
        className="col-span-1"
      />
      <div className="col-span-2 col-start-2 grid grid-rows-2 place-content-start font-bold">
        <h1 className="text-md font-mono font-extrabold md:text-xl">{title}</h1>
        <h2 className="flex gap-2 tracking-wide text-lime-600 text-shadow-2xs text-shadow-lime-500">
          {description} <span className="animate-pulse">{icon}</span>
        </h2>
      </div>
    </div>
  );
};
