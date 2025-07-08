import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

// Example server action (you should implement this in your actions file)
import { deleteInvoice } from "@/app/lib/actions"; // <-- Make sure this is a server action

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

// Server Component for DeleteInvoice
export function DeleteInvoice({ id }: { id: string }) {
  // The deleteInvoice function must be a server action marked with "use server"
  return (
    <form
      action={async () => {
        "use server";
        await deleteInvoice(id);
      }}
    >
      <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
