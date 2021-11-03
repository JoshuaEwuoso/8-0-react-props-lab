const RecentDonations = (prompt) => {
  let recent = prompt.donations.map((item) => {
    return (
      <li>
        <span>
          {item.name} donated ${item.amount}
        </span>
          {item.caption}
      </li>
    )
  });
  return (
    <section>
      <h2>Recent Donations</h2>
        <ul>
          {recent}
        </ul>
    </section>
  )
};
export default RecentDonations;
