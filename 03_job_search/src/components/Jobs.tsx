"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaSpinner } from "react-icons/fa";
import Link from "next/link";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const url =
    "https://jsearch.p.rapidapi.com/search?query=developer%20jobs%20in%20chicago&page=1&num_pages=1&country=us&date_posted=all&language=en";

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "de6ad08770msh67634f70b2362a9p1a4bfajsn6eb9564a149b",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setJobs(data.data || []);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="py-40 px-4 md:px-10 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
        Find Your Job
      </h2>

      {loading ? (
        <div className="flex items-center justify-center h-40">
          <FaSpinner className="text-4xl text-primary animate-spin" />
        </div>
      ) : (
        <div className="my-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
          {jobs.map((job: any) => (
            <Card
              key={job.job_id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-lg">{job.job_title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {job.employer_name}
                </p>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-sm">
                  Type:{" "}
                  <span className="font-medium">
                    {job.job_employment_type || "N/A"}
                  </span>
                </p>
                <p className="mb-4 text-sm">
                  Publisher:{" "}
                  <span className="font-medium">{job.job_publisher}</span>
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link
                      href={job.job_apply_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply Now
                    </Link>
                  </Button>
                  <Button variant="secondary" asChild>
                    <Link href={`/jobs/${job.job_id}`}>View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Jobs;
