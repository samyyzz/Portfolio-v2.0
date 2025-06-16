export interface TestimonialCard {
  image?: string;
  name: string;
  quote: string;
}

export const TestimonialCard = (data: TestimonialCard) => {
  return (
    <div className="m-4 flex h-60 w-96 flex-col items-center justify-between rounded-4xl border border-neutral-800 p-4 font-sans transition duration-300 hover:border hover:border-neutral-700 hover:shadow-xl">
      <p className="gradient-title from-neutral-300 to-neutral-500 text-center text-lg font-bold">
        {data.quote}
      </p>
      <h2 className="text-para font-mono text-lg font-semibold">{data.name}</h2>
    </div>
  );
};
