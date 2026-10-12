import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col items-center px-4 py-28 text-center">
      <p className="font-heading text-7xl font-black text-ember">404</p>
      <h1 className="mt-4 font-heading text-2xl font-bold">Αυτή η κάρτα δεν υπάρχει στην τράπουλα</h1>
      <p className="mt-2 text-muted">Η σελίδα που ψάχνεις δεν βρέθηκε.</p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-ember px-5 py-3 font-semibold text-background transition hover:brightness-110"
      >
        Πίσω στην αρχική
      </Link>
    </div>
  );
}
