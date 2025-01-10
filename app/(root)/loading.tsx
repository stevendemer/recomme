import Spinner from "@/components/spinner";

export default function Loading() {
  return (
    <div className="grid place-items-center h-full w-full">
      <Spinner size="lg" />
    </div>
  );
}
