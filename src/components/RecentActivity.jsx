
const activities = [
  {
    title: "Solved Two Sum",
    category: "DSA Practice",
    time: "2 hours ago",
    status: "Completed"
  },
  {
    title: "Completed React Basics",
    category: "Learning",
    time: "Yesterday",
    status: "Completed"
  },
  {
    title: "Applied for Full Stack Intern",
    category: "Job Application",
    time: "Yesterday",
    status: "Applied"
  },
  {
    title: "Learn JavaScript ES6",
    category: "Learning",
    time: "2 days ago",
    status: "Completed"
  }
];

function RecentActivity() {
  return (
    <div className="activity-card">
      <div className="section-heading">
        <div>
          <h3>Recent Activity</h3>
          <p>Your latest updates</p>
        </div>
      </div>

      <div className="activity-list">
        {activities.map((activity, index) => (
          <div className="activity-item" key={index}>
            <div className="activity-indicator"></div>

            <div className="activity-info">
              <h4>{activity.title}</h4>
              <p>{activity.category} · {activity.time}</p>
            </div>

            <span className="activity-status">
              {activity.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;
