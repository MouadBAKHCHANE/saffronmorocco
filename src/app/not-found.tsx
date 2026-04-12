import Link from "next/link";
import Container from "@/components/layout/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="overline mb-4 text-mauve">404</p>
      <h1 className="font-heading text-h1 tracking-heading text-text-primary">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-body-lg text-text-secondary">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-button bg-burgundy px-8 py-4 text-small font-semibold uppercase tracking-button text-off-white transition-colors hover:bg-burgundy-dark"
      >
        Back to Home
      </Link>
    </Container>
  );
}
