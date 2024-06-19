import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 sm:px-6 lg:px-8 bg-gray-300">
      <SignUp />
    </div>
  );
}