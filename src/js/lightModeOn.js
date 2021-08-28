import refs from './refs';

const { switchAccess, bodyAccess, LIGHT, DARK } = refs;

const GET_KEY = 'class';

export default function lightModeOn() {
  localStorage.removeItem(GET_KEY);
  localStorage.setItem(GET_KEY, LIGHT);
  bodyAccess.classList.remove(DARK);
  bodyAccess.classList.add(LIGHT);
}
