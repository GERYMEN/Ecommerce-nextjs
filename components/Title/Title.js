import HEAD from "next/head";
import Link from "next/link";
import styles from "./CountriesTable.module.css";
import { useState } from "react";

const CountriesTable = ({ countries }) => {
  const [direction, setdirection] = useState();
  const [value, setvalue] = useState();
  const orderedCountries = orderBy(countries, value, direction);
  console.log("pakathe", countries.name);



  return (
    <div>
      <div className={styles.heading}>
        <button className={styles.heading_name} onClick={() => setValueandDirection("name")}>
          <div>Name</div>

          {value ==="name" && <SortArrow direction={direction}/>}


        </button>
        <button className={styles.population} onClick={() => setValueandDirection("population")}>
          <div>Populations</div>
          {value==="population" &&<SortArrow direction={direction} />}
        </button>

        <button className={styles.heading_area}
        onClick={() => setValueandDirection("area")}
        >
          <div>
            Area (km<sup style={{fontSize:"0.5rem"}}>2</sup>)
          </div>
          {value ==="area" && <SortArrow direction={direction}/>}
        </button>


        <button 
        className={styles.heading_gini}
        onClick={()=> setValueandDirection("gini")}>
          <div>Gini</div>
          {value ==="population" && <SortArrow direction={direction}/>}

        </button>
      </div>

      {orderedCountries.map((countries) => (
        <Link href={`/country/${countries.alpha3Code}`}>
        <div className={styles.row}>
          <div className={styles.flag}>
            <img src={countries.flag} alt={countries.name}/>
          </div>


          <div className={styles.name}>{countries.name}</div>
          <div className={styles.population}>{countries.population}</div>
          <div className={styles.area}>{countries.area || 0}</div>
          <div className={styles.gini}>{countries.gini || 0}%</div>
        </div>
        </Link>
      ))}
    </div>
  );
};
export default CountriesTable;
