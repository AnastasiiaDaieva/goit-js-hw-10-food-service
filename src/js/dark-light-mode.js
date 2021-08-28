import refs from './refs';

// import of functions
import darkModeOn from './darkModeOn';
import lightModeOn from './lightModeOn';
import setUpSavedMode from './setUpSavedMode';

const { switchAccess, bodyAccess, LIGHT } = refs;

setUpSavedMode();

function toggleFunction() {
  if (bodyAccess.classList.contains(LIGHT)) {
    darkModeOn();
  } else {
    lightModeOn();
  }
}

switchAccess.addEventListener('change', toggleFunction);
