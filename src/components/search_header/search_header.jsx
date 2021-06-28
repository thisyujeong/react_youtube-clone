import React, { memo, useRef, useState } from 'react';
import styles from './search_header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faSearch, faTh } from '@fortawesome/free-solid-svg-icons';
import { faCaretSquareUp } from '@fortawesome/free-regular-svg-icons';
import DropDown from '../dropdown/dropdown';
import logo from '../../images/logo.png';
import user from '../../images/user.svg';

const SearchHeader = memo(({ onSearch, clickLogo, handleMenu }) => {
  const [dropdown, setDropdown] = useState(false);
  // const [navOpen, setNavOpen] = useState(true);

  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = (e) => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const onClickLogo = () => {
    clickLogo();
  };
  const onDropdown = (e) => {
    dropdown ? setDropdown(false) : setDropdown(true);
  };

  const onClickMenu = () => {
    handleMenu();
  };
  return (
    <header className={styles.header}>
      <button className={styles.menuBtn} onClick={onClickMenu}>
        <FontAwesomeIcon icon={faBars} className={styles.menuIcon} />
      </button>

      <div className={styles.logo} onClick={onClickLogo}>
        <img className={styles.logoImg} src={logo} alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>

      <div className={styles.search}>
        <input
          ref={inputRef}
          className={styles.searchInput}
          type="search"
          placeholder="Search..."
          onKeyPress={onKeyPress}
        />
        <button className={styles.searchBtn} type="submit" onClick={onClick}>
          <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
        </button>
      </div>

      <div className={styles.headerOptions}>
        <button
          className={`${styles.upload} ${styles.optionBtn} ${dropdown && styles.active}`}
          onClick={onDropdown}
        >
          <FontAwesomeIcon
            icon={faCaretSquareUp}
            className={`${styles.uploadIcon} ${styles.optionIcon}`}
          />
        </button>
        <button className={`${styles.etcBtn} ${styles.optionBtn}`}>
          <FontAwesomeIcon icon={faTh} className={`${styles.etcIcon} ${styles.optionIcon}`} />
        </button>
        <button className={`${styles.bellBtn} ${styles.optionBtn}`}>
          <FontAwesomeIcon icon={faBell} className={`${styles.bellIcon} ${styles.optionIcon}`} />
        </button>
        <div className={styles.profile}>
          <img className={styles.profileImg} src={user} alt="user profile" />
        </div>
      </div>

      <DropDown isActive={dropdown} />
      {dropdown && (
        <div className={styles.dropdownBG} onClick={() => dropdown && setDropdown(false)}></div>
      )}
    </header>
  );
});

export default SearchHeader;
