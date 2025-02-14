"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";

export default function DashboardPage() {
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const testApi = async () => {
    setApiResponse(null);
    setError(null);

    try {
      const response = await axios.get("http://localhost:8000/hello");
      setApiResponse(response.data?.message || "No response message.");
    } catch (err) {
      setError("Failed to fetch API response.");
      console.error(err);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">
        (EARS) Emergency AI Response System
      </h1>
      <div className="border p-4 bg-gray-100 rounded">
        <pre className="whitespace-pre-wrap text-sm">Hi this is EARS</pre>
      </div>
      <Button onClick={testApi}>Test Server Connection</Button>
      {apiResponse && (
        <p className="text-green-600">API Response: {apiResponse}</p>
      )}
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}
