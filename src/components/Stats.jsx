const Stats = ({ champion }) => {
  return (
    <div>
      <h4>STATS</h4>
      <p>Health: {champion.stats.hp}</p>
      <p>Armor: {champion.stats.armor}</p>
      <p>AttackDammage: {champion.stats.attackdamage}</p>
      <p>Range: {champion.stats.attackrange}</p>
      <p>AttackSpeed: {champion.stats.attackspeed}</p>
      <p>MoveSpeed: {champion.stats.movespeed}</p>
    </div>
  );
};

export default Stats;
