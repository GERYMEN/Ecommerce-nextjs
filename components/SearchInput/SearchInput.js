import Head from 'next/head';
import SearchRounded from '@material-ui/icons/SearchRounded'
import styles from "./SearchInput.module.css";

const SearchInput=()=>{
return(
    <div className={styles.wrapper}>
        <input className={styles.input}/>
        <SearchRounded />
    </div>
)
}

export default SearchInput;