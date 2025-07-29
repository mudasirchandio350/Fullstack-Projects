"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaSpinner } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const url = `https://jsearch.p.rapidapi.com/job-details?job_id=${id}&country=us&language=en`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "de6ad08770msh67634f70b2362a9p1a4bfajsn6eb9564a149b",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setJob(data.data?.[0] || null);
      } catch (err) {
        console.error("Error fetching job details:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchJobDetails();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <FaSpinner className="text-4xl text-primary animate-spin" />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="text-center py-20 text-red-500">
        Job not found or failed to load.
      </div>
    );
  }

  return (
    <div className="min-h-screen py-40  px-4 md:px-10 max-w-4xl mx-auto">
      <div className="p-20 bg-gray-900 text-white rounded-lg flex flex-col  justify-center">
        <h1 className="text-3xl font-bold text-center mb-6">{job.job_title}</h1>
        <div className="text-start font-bold text-muted-foreground mb-8 ">
          <p>{job.employer_name}</p>
          {job.job_location && <p>{job.job_location}</p>}
          <p>{job.job_employment_type}</p>
        </div>
        <div className="prose max-w-none prose-sm md:prose-base prose-p:text-md font-semibold mb-10 ">
          <div dangerouslySetInnerHTML={{ __html: job.job_description }} />
        </div>
      </div>
      <div className="text-center my-10">
        <Button asChild>
          <Link
            href={job.job_apply_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default JobDetails;
