import Layout from "../../layouts";
import RacingBars from "racing-bars/react";

export default function DataVisualization() {
  /** @type {import('racing-bars').Options} */
  const options = {
    dataUrl: "https://racing-bars.hatemhosny.dev/data/brands.json",
  };

  return (
    <Layout>
      <div className="w-full min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-zinc-50">数据可视化</h1>
          <div className="bg-zinc-900/50 rounded-lg p-6">
            <RacingBars className="race" {...options}>
              Loading...
            </RacingBars>
          </div>
        </div>
      </div>
    </Layout>
  );
}

