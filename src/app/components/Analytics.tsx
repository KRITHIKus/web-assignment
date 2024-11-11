"use client";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";
import { ChartData } from "chart.js";

export default function Analytics() {
    const [chartData, setChartData] = useState<ChartData<"bar">>({
        labels: [],
        datasets: [
            {
                label: "Engagement",
                data: [],
                backgroundColor: "rgba(75,192,192,0.4)",
            },
        ],
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchData("/analytics")
            .then((data) => {
                setChartData({
                    labels: data.labels,
                    datasets: [
                        {
                            label: "Engagement",
                            data: data.values,
                            backgroundColor: "rgba(75,192,192,0.4)",
                        },
                    ],
                });
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading analytics...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section>
            <h2 className="text-xl font-semibold">Analytics</h2>
            <Bar data={chartData} />
        </section>
    );
}
