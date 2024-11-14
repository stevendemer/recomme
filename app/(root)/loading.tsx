import Spinner from "@/components/spinner";

export default function Loading() {
    return (
        <div className="flex justify-center h-screen items-center w-full">
            <Spinner size="lg"/>
        </div>
    );
}
