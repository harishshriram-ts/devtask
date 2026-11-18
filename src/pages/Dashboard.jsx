
import {
  CheckCircle2,
  ListTodo,
  Code2,
  BriefcaseBusiness
} from "lucide-react";

import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";
import ActivityChart from "../components/ActivityChart";
import RecentActivity from "../components/RecentActivity";

function Dashboard() {
  return (
    <main className="main-content">
      <Topbar />

      <section className="welcome-section">
        <div>
          <h1>Welcome back, Developer! 👋</h1>
          <p>Here's what's happening with your progress today.</p>
        </div>

        <button className="date-button">
          November 2026
        </button>
      </section>

      <section className="stats-grid">
        <StatCard
          title="Total Tasks"
          value="48"
          change="+12%"
          icon={ListTodo}
          color="purple"
        />

        <StatCard
          title="Completed Tasks"
          value="32"
          change="+8%"
          icon={CheckCircle2}
          color="green"
        />

        <StatCard
          title="DSA Problems Solved"
          value="86"
          change="+15%"
          icon={Code2}
          color="blue"
        />

        <StatCard
          title="Job Applications"
          value="12"
          change="+4%"
          icon={BriefcaseBusiness}
          color="orange"
        />
      </section>

      <section className="dashboard-grid">
        <ActivityChart />
        <RecentActivity />
      </section>
    </main>
  );
}

export default Dashboard;
