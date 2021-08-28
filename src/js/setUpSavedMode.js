import lightModeOn from './lightModeOn';
import darkModeOn from './darkModeOn';
import savedMode from './savedMode';

import refs from './refs';

const { LIGHT } = refs;

const checkModeFunc = savedMode();

export default function setUpSavedMode() {
  if (checkModeFunc === null || checkModeFunc === LIGHT) {
    lightModeOn();
  } else {
    switchAccess.checked = true;
    darkModeOn();
  }
}
