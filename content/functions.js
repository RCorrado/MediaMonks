function checkSlide(elem, arrowPress) {
    elem.forEach(e => {
        let id = getAttr(e, 'id');
        if (arrowPress) {
            if (id < 9) {
                checkOtherArrow(!arrowPress);
                changeClass(e, 'selected', 'remove');
                id++;
                let newSelected = document.getElementById(id);
                changeClass(newSelected, 'selected', 'add');
                checkImage(id);
                checkArrows(id);
            }
            if (id == 9) {
                let ar =getElem('.right');
                ar.forEach(a => showOrHide(a, "hidden"));
            }
        } else {
            if (id > 0) {
                checkOtherArrow(!arrowPress);
                changeClass(e, 'selected', 'remove');
                id--;
                let newSelected = document.getElementById(id);
                changeClass(newSelected, 'selected', 'add');
                checkImage(id);
                checkArrows(id);
            }
            if (id == 0) {
                checkImage(id, true);
                let ar = getElem('.left');
                ar.forEach(a => showOrHide(a, "hidden"));
            }
        }
        checkText(id);
    });
}

function getElem(str) {
    let e = document.querySelectorAll(str);
    return e;
}

function getAttr(e, at) {
    return e.getAttribute(at);
}

function changeClass(e, name, action) {
    switch (action) {
        case 'add':
            e.classList.add(name);
            break;
        case 'remove':
            e.classList.remove(name);
            break;
        case 'toggle':
            e.classList.toggle(name);
            break;
    }
}

function showOrHide(e, str) {
    e.style.visibility = str;
}

function checkPress(elem, str) {
    return elem.classList.contains(str);
}

function checkOtherArrow(bool) {
    let ar;
    if (bool) {
        ar = getElem('.right');
        ar.forEach(a => showOrHide(a, "visible"));
    } else {
        ar = getElem('.left');
        ar.forEach(a => showOrHide(a, "visible"));
    }
}

function checkImage(id) {
    const w = [0, 100, 150, 220, 300, 400, 500, 600, 680];
    switch (id) {
        case 0:
            changeWidth('.path', w[0]);
            break;
        case 1:
            changeWidth('.path', w[1], '%', '-');
            break;
        case 2:
            changeWidth('.path', w[2], '%', '-');
            break;
        case 3:
            changeWidth('.path', w[3], '%', '-');
            break;
        case 4:
            changeWidth('.path', w[4], '%', '-');
            break;
        case 5:
            changeWidth('.path', w[5], '%', '-');
            break;
        case 6:
            changeWidth('.path', w[6], '%', '-');
            break;
        case 7:
        case 8:
            changeWidth('.path', w[7], '%', '-');
            break;
        case 9:
            changeWidth('.path', w[8], '%', '-');
            break;
    }
}

function changeWidth(elem, value, unit = "", s = "") {
    let e = document.querySelectorAll(elem);
    if (s != "") {
        e.forEach(el => el.style.left = s + value + unit);
    } else {
        e.forEach(el => el.style.left = value + unit);
    }
    
}

function checkArrows(id) {
    let wleft = [101, 151, 221, 301, 401, 501, 601, 681];
    let wright = [95, 195, 245, 315, 395, 495, 595, 695];
    switch (id) {
        case 0:
            changeWidth('.right', wright[0], 'vw', '');
            break;
        case 1:
            changeWidth('.left', wleft[0], 'vw', '');
            changeWidth('.right', wright[1], 'vw', '');
            break;
        case 2:
            changeWidth('.left', wleft[1], 'vw', '');
            changeWidth('.right', wright[2], 'vw', '');
            break;
        case 3:
            changeWidth('.left', wleft[2], 'vw', '');
            changeWidth('.right', wright[3], 'vw', '');
            break;
        case 4:
            changeWidth('.left', wleft[3], 'vw', '');
            changeWidth('.right', wright[4], 'vw', '');
            break;
        case 5:
            changeWidth('.left', wleft[4], 'vw', '');
            changeWidth('.right', wright[5], 'vw', '');
            break;
        case 6:
            changeWidth('.left', wleft[5], 'vw', '');
            changeWidth('.right', wright[6], 'vw', '');
            break;
        case 7:
            changeWidth('.left', wleft[6], 'vw', '');
            changeWidth('.right', wright[7], 'vw', '');
            break;
        case 8:
            changeWidth('.left', wleft[6], 'vw', '');
            break;
        case 9:
            changeWidth('.left', wleft[7], 'vw', '');
            break;
    }
}

function checkText(id) {
    let textBoxes = getElem('.path > section');
    textBoxes.forEach((t,i) => {
        let index = getElem('.selected');
        index.forEach(e => {
            let ind = getAttr(e, 'id');
            if (i == ind) {
                if (checkPress(t, 'noSelected')) {
                    changeClass(t, 'noSelected', 'remove');
                }
            } else {
                if (!checkPress(t, 'noSelected')) {
                    changeClass(t, 'noSelected', 'add');
                }
            }
        });
    });
}

function setSelected(oldSel, newSel) {
    oldSel.forEach(e => e.classList.remove('selected'));
    let newElem = document.getElementById(newSel);
    newElem.classList.add('selected');
    checkImage(newSel);
    checkArrows(newSel);
    checkText(newSel);
    if (newSel < 9) {
        checkOtherArrow(false);
        if (newSel == 0) {
            let ar = getElem('.left');
            ar.forEach(a => showOrHide(a, "hidden"));
        }
    } else if (newSel == 9){
        let ar = getElem('.right');
        ar.forEach(a => showOrHide(a, "hidden"));
    }
}

function preCharge() {
    let i = 0;
    let sp = getElem('figcaption');
    sp.forEach(e => {
        let ti = setTimeout(() => {
            let oldSpan = getElem('.first');
            oldSpan.forEach(elem => {
                let str = elem.innerHTML;
                str = str.substr(0, str.length - 1);
                elem.innerHTML = str;
            });
            let newSpan = document.createElement('span');
            changeClass(newSpan, 'last', 'add');
            newSpan.innerHTML = ', young padawan...';
            e.appendChild(newSpan);
        }, 2500);
        
    });
    let int = setInterval(() => {
        i++;
        if (i == 5) {
            let pre = getElem('.preCharge');
            pre.forEach(e => changeClass(e, 'fadeOut', 'add'));
            clearInterval(int);
        }
    }, 1000);
    

}

export { getElem, checkSlide, checkPress, setSelected, preCharge }