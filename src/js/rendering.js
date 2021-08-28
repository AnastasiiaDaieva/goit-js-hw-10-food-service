// import menu

import menu from '../menu.json';

// create refs for: 1. ul; 2. switch

// import and destructure refs

import refs from './refs';

const { menuAccess } = refs;

// console.log(menuAccess);

// create template

// import template
import menuTemplate from '../templates/menu.hbs';

// add function
const items = menuTemplate(menu);

// attach HTML
menuAccess.insertAdjacentHTML('beforeend', items);
