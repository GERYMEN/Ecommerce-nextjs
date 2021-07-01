import HEAD from "next/head";
import Link from "next/link";
// import NextLink from "next/link";
import useSWR from 'swr';


// import styles from "./CountriesTable.module.css";
import { useState } from "react";

const fetcher = url => axios.get(url).then(res => console.log(res.data))

const CountriesTable = ({ countries }) => {
  
  const [direction, setdirection] = useState();
  const [value, setvalue] = useState();
``
    const result =useSWR(`https://restcountries.eu/rest/v2/all`,fetcher)
    console.log(result);

  return (
    <div >
      <p>ten thousand fans.</p>
    </div >
  );
};
export default CountriesTable;
