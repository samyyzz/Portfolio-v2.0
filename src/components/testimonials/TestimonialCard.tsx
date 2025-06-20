import { Roboto } from "next/font/google";

export interface TestimonialCard {
  image?: string;
  name: string;
  quote: string;
}

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "700", "900"],
});

export const TestimonialCard = (data: TestimonialCard) => {
  return (
    <div className="m-4 flex h-40 w-72 flex-col items-center justify-between rounded-4xl border border-neutral-800 p-4 transition duration-300 hover:border hover:border-neutral-700 hover:shadow-xl md:h-60 md:w-96">
      <p
        className={`${roboto.className} gradient-title md:text-md from-neutral-300 to-neutral-500 text-center text-sm font-semibold`}
      >
        {data.quote}
      </p>
      <h2 className="text-para font-mono text-sm font-semibold md:text-lg">
        {data.name}
      </h2>
    </div>
  );
};
