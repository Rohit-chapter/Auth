import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Sidebar from 'components/home-page/sidebar/Sidebar';

import authenticationRoutesData from 'assets/data/authenticated-routes-data';

import styles from './HomePage.module.scss';

function HomePage() {

  function renderSidebar() {

    return <Sidebar data={authenticationRoutesData} />;

  }

  function renderRoute(route, index) {

    const routeProperties = {
      path: route.path,
      key: index,
      element: route.element
    };

    return <Route {...routeProperties} />;
  }

  function renderContent() {

    return (
      <div className={styles.homeContent}>
        <Routes>
          {
            authenticationRoutesData.map((route, index) => (
              renderRoute(route, index)
            ))
          }
        </Routes>
      </div>
    );

  }

  return (
    <div id={styles.homePageMain}>
      {renderSidebar()}
      {renderContent()}
    </div>
  );
}

export default HomePage;