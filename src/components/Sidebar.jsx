
import {
  LayoutDashboard,
  ListTodo,
  Code2,
  BriefcaseBusiness,
  Settings,
  Zap
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Tasks", icon: ListTodo },
  { name: "DSA Tracker", icon: Code2 },
  { name: "Job Tracker", icon: BriefcaseBusiness },
  { name: "Settings", icon: Settings }
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-icon">
          <Zap size={22} />
        </div>
        <h2>DevTrack</h2>
      </div>

      <p className="menu-label">MENU</p>

      <nav className="nav-menu">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.name}
              className={`nav-item ${index === 0 ? "active" : ""}`}
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </div>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <p>Keep building. Keep growing.</p>
        <span>DevTrack v1.0</span>
      </div>
    </aside>
  );
}

export default Sidebar;
