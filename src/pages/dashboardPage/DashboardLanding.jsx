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

const DashboardHome = () => {
  // stats (replace with API data later)
  const stats = {
    totalArtworks: 128,
    pending: 12,
    approved: 96,
    rejected: 20,
    favorites: 34,
  };

  // Pie chart data for status distribution
  const pieData = [
    { name: "Approved", value: stats.approved },
    { name: "Pending", value: stats.pending },
    { name: "Rejected", value: stats.rejected },
  ];

  const COLORS = ["#16a34a", "#facc15", "#dc2626"]; // green, yellow, red

  // Bar chart data for overview
  const barData = [
    { name: "Total", count: stats.totalArtworks },
    { name: "Pending", count: stats.pending },
    { name: "Approved", count: stats.approved },
    { name: "Rejected", count: stats.rejected },
    { name: "Favorites", count: stats.favorites },
  ];

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
              <h2 className="text-3xl font-bold">{stats.totalArtworks}</h2>
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
              <h2 className="text-3xl font-bold">{stats.pending}</h2>
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
              <h2 className="text-3xl font-bold">{stats.approved}</h2>
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
              <h2 className="text-3xl font-bold">{stats.rejected}</h2>
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
              <h2 className="text-3xl font-bold">{stats.favorites}</h2>
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
