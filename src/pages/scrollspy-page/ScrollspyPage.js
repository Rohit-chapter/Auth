import React, { useState, useEffect, useRef } from 'react';

import Sidebar from 'components/scrollspy-page/sidebar/Sidebar';

import styles from './ScrollspyPage.module.scss';
import { throttle } from 'utilities';

const step = 100;
const throttleLimit = 500; // throttle limit -> 500ms

const sidebarItems = [
  {
    id: 0,
    label: 'Section 1'
  },
  {
    id: 1,
    label: 'Section 2'
  },
  {
    id: 2,
    label: 'Section 3'
  },
  {
    id: 3,
    label: 'Section 4'
  },
  {
    id: 4,
    label: 'Section 5'
  }
];

function ScrollspyPage() {

  const contentContainerReference = useRef(null);

  const [activeItemIndex, setActiveItemIndex] = useState(0);

  useEffect(() => {

    const unregisterContentScrollEvent = registerContentScrollEvent();

    return () => {
      unregisterContentScrollEvent();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function registerContentScrollEvent() {

    const element = contentContainerReference.current;

    if (element === null) {
      return;
    }

    element.style.transform = 'translateY(0)';

    let scrollDirection;

    function determineScrollDirection(event) {
      if (event.deltaY < 0) {
        scrollDirection = 'down';
      }
      if (event.deltaY > 0) {
        scrollDirection = 'up';
      }
      event.stopPropagation();
    }

    element.addEventListener('wheel', determineScrollDirection);
    element.addEventListener('wheel', throttle(() => handleContentScrollEvent(element, scrollDirection), throttleLimit));

    return () => {
      element.removeEventListener('wheel', determineScrollDirection);
      element.removeEventListener('wheel', handleContentScrollEvent);
    };

  }

  function handleContentScrollEvent(element, scrollDirection) {

    let sectionsLength = Array.from(element.children).length;
    let scrollHeight = parseInt(-element.style.transform.match(/\d+/g)[0]);

    if (scrollDirection === 'up' && scrollHeight !== -((sectionsLength - 1) * step)) {
      scrollHeight = scrollHeight - step;
    } else if (scrollDirection === 'down' && scrollHeight !== 0) {
      scrollHeight = scrollHeight + step;
    }

    element.style.transform = 'translateY(' + scrollHeight + 'vh)';

    setActiveItemIndex(Math.abs(scrollHeight / step));

  }

  function scrollIntoView(index) {

    const element = contentContainerReference.current;

    if (element === null) {
      return;
    }

    const scrollHeight = -(index * step);

    element.style.transform = 'translateY(' + scrollHeight + 'vh)';

    setActiveItemIndex(index);

  }

  function renderSidebar() {

    const sidebarProperties = {
      data: sidebarItems,
      activeIndex: activeItemIndex,
      onClick(index) {
        scrollIntoView(index);
      }
    };

    return <Sidebar {...sidebarProperties} />;

  }

  function renderSectionItem(title, index) {

    const sectionItemAttributes = {
      className: styles.sectionItem
    };

    const nextControlAttributes = {
      className: 'application-themed-button',
      onClick() {
        let _index = index;
        if (_index === 4) {
          _index = -1;
        }
        scrollIntoView(_index + 1); // passing index + 1 to get next element
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
        {renderSectionItem('Section 1', 0)}
        {renderSectionItem('Section 2', 1)}
        {renderSectionItem('Section 3', 2)}
        {renderSectionItem('Section 4', 3)}
        {renderSectionItem('Section 5', 4)}
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