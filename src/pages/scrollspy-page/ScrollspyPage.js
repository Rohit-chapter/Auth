import React, { useState, useEffect, useRef } from 'react';

import scrollspySectionIds from 'constants/scrollspy-section-ids';

import Sidebar from 'components/scrollspy-page/sidebar/Sidebar';

import { getActiveItemIndex } from './utilities';

import styles from './ScrollspyPage.module.scss';

const sidebarItems = [
  {
    id: scrollspySectionIds.SECTION1,
    label: 'Section 1'
  },
  {
    id: scrollspySectionIds.SECTION2,
    label: 'Section 2'
  },
  {
    id: scrollspySectionIds.SECTION3,
    label: 'Section 3'
  },
  {
    id: scrollspySectionIds.SECTION4,
    label: 'Section 4'
  },
  {
    id: scrollspySectionIds.SECTION5,
    label: 'Section 5'
  }
];

function ScrollspyPage() {

  const contentContainerReference = useRef(null);
  const section1Reference = useRef(null);
  const section2Reference = useRef(null);
  const section3Reference = useRef(null);
  const section4Reference = useRef(null);
  const section5Reference = useRef(null);

  const [activeItemIndex, setActiveItemIndex] = useState(0);

  useEffect(() => {

    const element = contentContainerReference.current;

    if (element === null) {
      return;
    }

    element.addEventListener('scroll', handleScrollingEvent);

    return () => {
      element.removeEventListener('scroll', handleScrollingEvent);
    };

  }, []);

  function handleScrollingEvent() {

    const contentContainerElement = contentContainerReference.current;

    const activeIndex = getActiveItemIndex(contentContainerElement, activeItemIndex);

    setActiveItemIndex(activeIndex);

  }

  function scrollIntoView(elementReference) {

    const element = elementReference.current;

    if (elementReference.current === null) {
      return;
    }

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

  }

  function getElementReferenceById(id) {

    if (id === scrollspySectionIds.SECTION1) {
      return section1Reference;
    }

    if (id === scrollspySectionIds.SECTION2) {
      return section2Reference;
    }

    if (id === scrollspySectionIds.SECTION3) {
      return section3Reference;
    }

    if (id === scrollspySectionIds.SECTION4) {
      return section4Reference;
    }

    if (id === scrollspySectionIds.SECTION5) {
      return section5Reference;
    }

  }

  function handleSidebarItemClick(id) {

    const element = getElementReferenceById(id);

    scrollIntoView(element);
  }

  function renderSidebar() {

    const sidebarProperties = {
      data: sidebarItems,
      activeIndex: activeItemIndex,
      onClick: handleSidebarItemClick
    };

    return <Sidebar {...sidebarProperties} />;

  }

  function renderSectionItem(title, currentReference, nextReference) {

    const sectionItemAttributes = {
      className: styles.sectionItem,
      ref: currentReference
    };

    const nextControlAttributes = {
      className: 'application-themed-button',
      onClick() {
        scrollIntoView(nextReference);
      }
    };

    return (
      <div {...sectionItemAttributes}>
        <h4 className={styles.sectionItemTitle}>{title}</h4>
        <p className={styles.sectionItemDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Tempus urna et pharetra pharetra massa massa ultricies mi. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Dictum at tempor commodo ullamcorper a. Eget felis eget nunc lobortis mattis aliquam. Proin sed libero enim sed faucibus turpis. Sit amet facilisis magna etiam tempor orci eu lobortis. Turpis in eu mi bibendum neque egestas. Odio ut sem nulla pharetra diam sit amet. Sed viverra tellus in hac. Eget egestas purus viverra accumsan. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Vel facilisis volutpat est velit egestas dui id.

          Tincidunt tortor aliquam nulla facilisi. Est sit amet facilisis magna etiam tempor. Bibendum ut tristique et egestas quis ipsum suspendisse. Ullamcorper velit sed ullamcorper morbi. Ipsum dolor sit amet consectetur adipiscing elit. Diam maecenas sed enim ut sem viverra. Auctor neque vitae tempus quam pellentesque nec. Eget gravida cum sociis natoque penatibus. Non odio euismod lacinia at quis risus sed. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Morbi enim nunc faucibus a pellentesque sit amet porttitor.

          Donec adipiscing tristique risus nec feugiat in fermentum. Lectus proin nibh nisl condimentum id. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Nunc sed augue lacus viverra vitae congue. Semper eget duis at tellus at urna. Tortor posuere ac ut consequat semper viverra nam. Sapien eget mi proin sed. In hac habitasse platea dictumst. Faucibus ornare suspendisse sed nisi. Urna neque viverra justo nec ultrices dui. Ipsum dolor sit amet consectetur adipiscing elit. Proin libero nunc consequat interdum varius sit amet mattis vulputate. Felis donec et odio pellentesque diam volutpat commodo sed. Massa tincidunt nunc pulvinar sapien et. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Cursus sit amet dictum sit amet justo.

          Phasellus faucibus scelerisque eleifend donec pretium. Ut faucibus pulvinar elementum integer enim neque volutpat. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Sed elementum tempus egestas sed sed risus pretium. Sed vulputate odio ut enim blandit volutpat maecenas. Cursus sit amet dictum sit amet justo donec. Condimentum id venenatis a condimentum. Massa enim nec dui nunc mattis enim ut tellus elementum. Elementum sagittis vitae et leo duis. Id neque aliquam vestibulum morbi blandit cursus risus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Gravida arcu ac tortor dignissim convallis aenean et. Eget dolor morbi non arcu risus quis varius. Diam quam nulla porttitor massa id neque.

          Egestas dui id ornare arcu odio ut sem nulla. Varius vel pharetra vel turpis nunc eget lorem. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Netus et malesuada fames ac turpis egestas. Sit amet luctus venenatis lectus magna fringilla. Suscipit tellus mauris a diam maecenas sed enim ut sem. Sit amet massa vitae tortor. Sed pulvinar proin gravida hendrerit lectus. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Orci phasellus egestas tellus rutrum tellus pellentesque.
        </p>
        <button {...nextControlAttributes}>Next</button>
      </div>
    );
  }

  function renderContent() {

    const scrollspyPageContentAttributes = {
      id: styles.scrollspyPageContent,
      ref: contentContainerReference
    };

    return (
      <div {...scrollspyPageContentAttributes}>
        {renderSectionItem('Section 1', section1Reference, section2Reference)}
        {renderSectionItem('Section 2', section2Reference, section3Reference)}
        {renderSectionItem('Section 3', section3Reference, section4Reference)}
        {renderSectionItem('Section 4', section4Reference, section5Reference)}
        {renderSectionItem('Section 5', section5Reference, section1Reference)}
      </div>
    );
  }

  return (
    <div id={styles.scrollspyPageMain}>
      {renderSidebar()}
      {renderContent()}
    </div>
  );
}

export default ScrollspyPage;