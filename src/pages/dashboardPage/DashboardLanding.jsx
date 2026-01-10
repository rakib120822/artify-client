import { useEffect } from "react";
import {
  FaPalette,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaHeart,
} from "react-icons/fa";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const DashboardHome = () => {
  const { user } = useAuth();
  const [artworks, setArtworks] = useState(0);
  const [pending, setPending] = useState(0);
  const [approved, setApproved] = useState(0);
  const [rejected, setRejected] = useState(0);
  const [favorites, setFavorites] = useState(0);

  // Pie chart data for status distribution
  const pieData = [
    { name: "Approved", value: approved },
    { name: "Pending", value: pending },
    { name: "Rejected", value: rejected },
  ];

  const COLORS = ["#16a34a", "#facc15", "#dc2626"]; // green, yellow, red

  // Bar chart data for overview
  const barData = [
    { name: "Total", count: artworks },
    { name: "Pending", count: pending },
    { name: "Approved", count: approved },
    { name: "Rejected", count: rejected },
    { name: "Favorites", count: favorites },
  ];

  useEffect(() => {
    fetch(`https://artify-server-xi.vercel.app/my-artworks?email=${user?.email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setArtworks(data.totalArtworks);
        setPending(data.pending);
        setApproved(data.approved);
        setRejected(data.rejected);
        setFavorites(data.favorites);
      });
  }, [user]);


  return (
    <div className="p-6 bg-base-200 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-base-content/70">
          Overview of your artwork activity
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 mb-10">
        {/* Total Artworks */}
        <div className="card bg-base-100 shadow">
          <div className="card-body flex flex-row items-center gap-4">
            <div className="p-4 rounded-full bg-primary/10 text-primary">
              <FaPalette size={26} />
            </div>
            <div>
              <p className="text-sm text-base-content/70">Total Artworks</p>
              <h2 className="text-3xl font-bold">{artworks}</h2>
            </div>
          </div>
        </div>

        {/* Pending */}
        <div className="card bg-base-100 shadow">
          <div className="card-body flex flex-row items-center gap-4">
            <div className="p-4 rounded-full bg-warning/10 text-warning">
              <FaClock size={26} />
            </div>
            <div>
              <p className="text-sm text-base-content/70">Pending</p>
              <h2 className="text-3xl font-bold">{pending}</h2>
            </div>
          </div>
        </div>

        {/* Approved */}
        <div className="card bg-base-100 shadow">
          <div className="card-body flex flex-row items-center gap-4">
            <div className="p-4 rounded-full bg-success/10 text-success">
              <FaCheckCircle size={26} />
            </div>
            <div>
              <p className="text-sm text-base-content/70">Approved</p>
              <h2 className="text-3xl font-bold">{approved}</h2>
            </div>
          </div>
        </div>

        {/* Rejected */}
        <div className="card bg-base-100 shadow">
          <div className="card-body flex flex-row items-center gap-4">
            <div className="p-4 rounded-full bg-error/10 text-error">
              <FaTimesCircle size={26} />
            </div>
            <div>
              <p className="text-sm text-base-content/70">Rejected</p>
              <h2 className="text-3xl font-bold">{rejected}</h2>
            </div>
          </div>
        </div>

        {/* Favorites */}
        <div className="card bg-base-100 shadow">
          <div className="card-body flex flex-row items-center gap-4">
            <div className="p-4 rounded-full bg-pink-500/10 text-pink-500">
              <FaHeart size={26} />
            </div>
            <div>
              <p className="text-sm text-base-content/70">Favorites</p>
              <h2 className="text-3xl font-bold">{favorites}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Pie Chart */}
        <div className="card bg-base-100 shadow p-4">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Artwork Status Distribution
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="card bg-base-100 shadow p-4">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Artwork Overview
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
