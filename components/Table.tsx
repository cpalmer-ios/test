import TableItem from "./TableItem";
import styles from "./table.module.css"

export default function Table({ data }: any): any {

  return (
    <table className={styles.table}>
        <tbody className={styles.tbody}>
      {data &&
        data.map((item: any, index: number) => (
          <TableItem item={item} key={index} competition={item.competition}/>
        )).sort((item: any) => item.competition === item.competition)}
        </tbody>
    </table>
  );
}
