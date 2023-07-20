import styles from "./table.module.css";

export default function TableItem({
  item,
  index,
  competition,
}: any): any {
  
  const handleViewClick = (e: any) => {
    e.preventDefault();
    console.log(e.target.value)
  }

  return (
    <td className={styles.tableContainer} key={index}>
      <h4 className={styles.tableTitle}>{competition}</h4>
      <tr className={styles.td}>
        <td>
          <p>
            <strong>{item.home}</strong> vs <strong>{item.away}</strong> -{" "}
            {item.country_name}
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p>
            {new Date(item.start_time).toLocaleDateString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </td>
      </tr>
      <tr>
        <button value={item.fixture_id} onClick={(e) => handleViewClick(e)} className={styles.tableButton}>VIEW</button>
      </tr>
    </td>
  );
}
