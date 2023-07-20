import TableItem from "./TableItem";

export default function Table({ data }: any): any {

  return (
    <div>
      {data &&
        data.map((item: any, index: number) => (
          <TableItem item={item} key={index} competition={item.competition}/>
        )).sort((item: any) => item.competition === item.competition)}
    </div>
  );
}
