import { getElem, checkSlide, checkPress, setSelected, preCharge } from './functions.js';

window.onload = () => {
    preCharge();
    let e = getElem('.selected');
    let ar = getElem('.arrow');
    let list = getElem('li');
    ar.forEach(el => {
        el.addEventListener("click", () => {
            e = getElem('.selected');
            let arrowPress = checkPress(el, 'right');
            checkSlide(e, arrowPress);
        }, false);
    });
    list.forEach((el, i) => {
        el.addEventListener("click", () => {
            e = getElem('.selected');
            setSelected(e, i);
        }, false);
    });
}