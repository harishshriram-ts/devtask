
import { Search, Bell } from "lucide-react";

function Topbar() {
  return (
    <header className="topbar">
      <div className="search-box">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search anything..."
        />
      </div>

      <div className="topbar-right">
        <button className="notification-btn">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        <div className="profile">
          <div className="avatar">H</div>
          <div>
            <h4>Developer</h4>
            <p>Student</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
