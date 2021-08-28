const GET_KEY = 'class';

export default function savedMode() {
  return localStorage.getItem(GET_KEY);
}
