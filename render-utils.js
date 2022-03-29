export function renderListItem(item) {
    const listItemEl = document.createElement('div');
    const itemText = document.createElement('p');

    if (item.complete) {
        listItemEl.classList.add('obtained');
    } else {
        listItemEl.classList.add('incomplete');
    }

    listItemEl.classList.add('item');

    itemText.textContent = `${item.qty} ${item.item}`;

    listItemEl.append(itemText);

    return listItemEl;
}