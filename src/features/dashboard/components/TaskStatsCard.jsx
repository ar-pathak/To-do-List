const TaskStatsCard = ({ label, value, gradient }) => (
  <div
    className={`rounded-2xl p-4 text-white bg-gradient-to-br ${gradient} shadow-md hover:shadow-lg transition-all`}
  >
    <p className="text-sm opacity-90">{label}</p>
    <h2 className="text-2xl sm:text-3xl font-semibold mt-1">{value}</h2>
  </div>
);

export default TaskStatsCard;
