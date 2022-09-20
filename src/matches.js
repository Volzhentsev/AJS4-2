export default function herosSort(heros) {
  const result = heros.sort((el1, el2) => (el1.health > el2.health ? -1 : 1));
  return result;
}
