import React from 'react';

import styles from './Sidebar.module.scss';

function Sidebar(props) {

  const { data, activeIndex, onClick } = props;

  function renderItem(item, index) {

    let sidebarItemClassName = styles.sidebarItem;

    if (index === activeIndex) {
      sidebarItemClassName += ` ${styles.active}`;
    }

    const sidebarItemAttributes = {
      className: sidebarItemClassName,
      key: index,
      onClick() {
        onClick(item.id);
      }
    };

    return (
      <div {...sidebarItemAttributes}>
        <label>{item.label}</label>
      </div>
    );
  }

  return (
    <div id={styles.sidebarMain}>

      <h3 className={styles.sidebarTitle}>Scrollspy Demo</h3>

      <div className={styles.sidebarContent}>
        {
          data.map((item, index) => (
            renderItem(item, index)
          ))
        }
      </div>

    </div>
  );
}

export default Sidebar;