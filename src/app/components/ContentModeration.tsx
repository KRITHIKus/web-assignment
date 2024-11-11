"use client"
import { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";

// Define the type for the moderation data
interface ModerationData {
    views: number;
    shares: number;
}

export default function ContentModeration() {
    const [moderationData, setModerationData] = useState<ModerationData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchData("/content-moderation")
            .then((data: ModerationData) => {
                setModerationData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading moderation...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section>
            <h2 className="text-xl font-semibold">Content Moderation</h2>
            <p>Views: {moderationData?.views ?? "N/A"}</p>
            <p>Shares: {moderationData?.shares ?? "N/A"}</p>
        </section>
    );
}
