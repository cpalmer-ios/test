export default function TableItem({
  item,
  index,
  bookmaker,
  competition,
}: any): any {
  console.log(item);
  return (
    <div key={index}>
      {/* <div>{item.fixture_id}</div> */}
      <h3>{competition}</h3>
      <div className="">
        <p>Country: {item.country_name}</p>
        <p>
          {item.home} vs {item.away}
        </p>
        <p>Start Time:{item.start_time}</p>
      </div>
    </div>
  );
}
