import TableItem from "./TableItem";
import styles from "./table.module.css";

export default function Table({ data }: any): any {
  return (
    <div className={styles.table}>
        <div>
          {data &&
            data
              .map((item: any, index: number) => (
                <TableItem
                  item={item}
                  key={index}
                  competition={item.competition}
                  id={item.fixture_id}
                />
              ))
              .sort((item: any) => item.competition === item.competition)}
        </div>
    </div>
  );
}
