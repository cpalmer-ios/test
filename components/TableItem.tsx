import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import styles from "./table.module.css";

export default function TableItem({ item, index, competition, id }: any): any {
  const { data: session } = useSession();
  const [content, setContent] = useState();
  const [odds, setOdds] = useState<any[]>([]);
  const [filteredOdds, setFilteredOdds] = useState<any[]>([]);
  const [hidden, setHidden] = useState<Boolean>(true);
  const [bookMakers, setBookMakers] = useState<any[]>([]);
  const [message, setMessage] = useState<string>("");

  const fetchData = async () => {
    const res = await fetch("/api/odds/odds");
    const json = await res.json();
    if (json.content) {
      setContent(json.content);
    }
    if (json.data) {
      setOdds(json.data);
      setHidden(false)
    }
  };

  // const fetchBookMakers = async () => {
  //   const res = await fetch("/api/odds/bookmakers");
  //   const json = await res.json();
  //   if (json.data) {
  //     // filter the bookmakers as per id request
  //     setBookMakers(json.data);
  //   }
  // };

  const handleViewClick = async () => {
    let res = odds.filter((item: any) => item.fixture_id.includes(id));
    console.log(res)
    if(res.length > 1) {
      setFilteredOdds(res);
      setMessage('Matches Found')
    }
      if (res.length === 0) {
        setMessage('No Matches Found')
      }
    
  };

  const handleCollapseClick = async () => {
    setHidden(true)
    setMessage('')
  };

  // Fetch content from protected route
  useEffect(() => {
    fetchData();
  }, [session]);

  return (
    <div className={styles.tableContainer} key={index}>
      <h4 className={styles.tableTitle}>{competition}</h4>
      <div className={styles.td}>
        <div>
          <p>
            <strong>{item.home}</strong> vs <strong>{item.away}</strong> -{" "}
            {item.country_name}
          </p>
        </div>
      </div>
      <div>
        <div>
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
        </div>
        <p>Fixture ID: {item.fixture_id}</p>
      </div>
      <br></br>
      <button
        value={item.fixture_id}
        onClick={() => handleViewClick()}
        className={styles.tableButton}
      >
        VIEW
      </button>
      <div className={styles.tableWrapper}>
        <p>{message != "" && filteredOdds.length > 0 ? `${filteredOdds.length -1} ${message}` : message}</p>
        {!hidden &&
          filteredOdds &&
          filteredOdds.map((item, index) => (
            <div key={index} className={styles.tableContainer}>
              <p>FIxture ID: {item.fixture_id}</p>
              <div>Bookmaker ID: &nbsp; {item.bookmaker_id}</div>
              {/* <div>Bookmakers: &nbsp;{bookMakers.map((bm: {bookmaker_id: string, name: string}, index) => {
               let res = '';
              //  includes currently is also including the numbers with any match to the consecutive digits
               if(bm.bookmaker_id === item.bookmaker_id) { 
                res = bm.name
                return (<p key={index}><strong>{res}</strong></p>)
              }
              return null;
            })}</div> */}
              {/* <p>ODD TYPE:&nbsp;{item.odds_type}</p> */}
            {/* <p>Market Parameters:&nbsp;{item.market_parameters}</p> */}
            <ul>Price Names: &nbsp;{item.price_names && JSON.parse(item.price_names).map((item:any[], index:number) => (<li key={index}>{item}</li>))}</ul>
            <ul>Prices: &nbsp;{item.prices && JSON.parse(item.prices).map((item:any[], index:number) => (<li key={index}>{item}</li>))}</ul>
            </div>
          ))}
      </div>
      <button
        onClick={() => handleCollapseClick()}
        className={styles.tableButton}
      >
        HIDE
      </button>
    </div>
  );
}
