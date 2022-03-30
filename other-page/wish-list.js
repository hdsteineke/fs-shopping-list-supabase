import { checkAuth, createItem, deleteListItems, getListItems, logout, obtainListItems } from '../fetch-utils.js';
import { renderItem } from '../render-utils.js';

checkAuth();

const form = document.querySelector('form');
const listContainer = document.querySelector('.list-container');
const resetButton = document.querySelector('.reset');
const logoutButton = document.getElementById('logout');
const loadingEl = document.querySelector('.loading-spinner');


logoutButton.addEventListener('click', () => {
    logout();
});


window.addEventListener('load', () => {
    fetchAndDisplayList();
})

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const item = data.get('item');
    const quantity = data.get('quantity');

    await createItem(quantity, item);

    form.reset();
    
    //insert fetchAndDisplayFunction
    fetchAndDisplayList();

});

function toggleLoadingSpinner() {
    loadingEl.classList.toggle('invisible');
}

async function fetchAndDisplayList() {
    //insert loading spinner here
    toggleLoadingSpinner();

    listContainer.textContent = '';

    const items = await getListItems();

    for (let item of items) {
        const itemEl = renderItem(item);

        if (item.obtained === false) {
            itemEl.addEventListener('click', async () => {
                await obtainListItems(item.id);
                fetchAndDisplayList();
            });
        }
        listContainer.append(itemEl);
    }
    //insert loading spinner
    toggleLoadingSpinner();
}

resetButton.addEventListener('click', async () => {
    await deleteListItems();
    await fetchAndDisplayList();
});