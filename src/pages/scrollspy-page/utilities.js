const sectionItemMargin = 200;

export function getActiveItemIndex(container) {

  const items = Array.from(container.children);

  const index = getIndex(container, items);

  const current = items.length - index - 1;

  return current;

}

function getIndex(container, items) {

  const reversedItems = items.reverse();

  const index = reversedItems.findIndex((item) => {
    return container.scrollTop >= item.offsetTop - sectionItemMargin;
  });

  return index;

}