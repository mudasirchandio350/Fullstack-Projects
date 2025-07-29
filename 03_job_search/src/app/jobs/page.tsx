"use client";

import { useAuth, RedirectToSignUp } from "@clerk/nextjs";
import { Jobs } from "@/components";
import { FaSpinner } from "react-icons/fa";

const JobsPage = () => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <FaSpinner className="animate-spin text-4xl text-primary" />
      </div>
    );
  }

  if (!isSignedIn) {
    return <RedirectToSignUp />;
  }

  return <Jobs />;
};

export default JobsPage;
