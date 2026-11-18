
function StatCard({ title, value, change, icon: Icon, color }) {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <div className={`stat-icon ${color}`}>
          <Icon size={21} />
        </div>

        <span className="stat-change">{change}</span>
      </div>

      <h2>{value}</h2>
      <p>{title}</p>
    </div>
  );
}

export default StatCard;
