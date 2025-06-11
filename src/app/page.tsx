import Container from "@/components/Container";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-center">
      <Container className="flex min-h-screen flex-col gap-2 p-4 md:p-10">
        <h1 className="text-secondary text-2xl font-bold tracking-tighter md:text-4xl">
          Hello, there !
        </h1>
        <p className="text-para md:text-md max-w-lg pt-4 text-sm">
          We are an agency with some highly skilled people. We do
          content-creation for brands, video-editing, software services with
          development, deployment and monitoring.{" "}
        </p>
      </Container>
    </div>
  );
}
