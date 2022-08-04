import React, { useContext } from 'react';

import { Link, useLocation } from 'react-router-dom';

import AuthContext from 'context/authentication-context';

import { parseItemLocationPath } from './utilities';

import { ReactComponent as LogoutIcon } from 'assets/images/logout-icon.svg';

import styles from './Sidebar.module.scss';

function Sidebar(props) {

  const { data } = props;

  const authenticationContext = useContext(AuthContext);
  const location = useLocation();

  function logoutHandler() {

    // passing false as to inform logoutHandler that 
    // this logout is called physically not on the clearing of session
    authenticationContext.onLogout(false);

  }

  function renderSidebarItem(item, index) {

    let sidebarItemClass = styles.sidebarItem;
    const itemLocationPath = parseItemLocationPath(item.path);

    if (location.pathname === itemLocationPath) {
      sidebarItemClass += ` ${styles.active}`;
    }

    const sidebarItemProperties = {
      to: item.path,
      className: sidebarItemClass,
      key: index
    };

    return <Link {...sidebarItemProperties}>{item.label}</Link>;
  }

  function renderSidebarContent() {

    return (
      <div className={styles.sidebarContent}>
        {
          data.map((item, index) => (
            renderSidebarItem(item, index)
          ))
        }
      </div>
    );

  }

  function renderLogoutControl() {

    const logoutControlAttributes = {
      className: `application-themed-button ${styles.logoutControl}`,
      onClick: logoutHandler
    };

    return <button {...logoutControlAttributes}>
      Logout
      <LogoutIcon className={styles.logoutIcon} />
    </button>;
  }

  return (
    <div className={styles.sidebarMain}>

      <h2 className={styles.sidebarTitle}>Auth application</h2>

      {renderSidebarContent()}

      {renderLogoutControl()}

    </div>
  );
}

export default Sidebar;