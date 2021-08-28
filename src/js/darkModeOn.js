import refs from './refs';

const { switchAccess, bodyAccess, LIGHT, DARK } = refs;

const GET_KEY = 'class';

export default function darkModeOn() {
  localStorage.removeItem(GET_KEY);
  localStorage.setItem(GET_KEY, DARK);
  bodyAccess.classList.remove(LIGHT);
  bodyAccess.classList.add(DARK);
}
