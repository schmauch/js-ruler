var w = 500;
var h = 36;
var x = 20;
var y = 20;
var dx = 0;
var dy = 0;
var o = 10;

var units = Array('px', 'em', 'vw', 'vh');

var sclPxB = 'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjkiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDkgOSIgPjxsaW5lIHgxPSIxIiB5MT0iNyIgeDI9IjEiIHkyPSI5IiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOiMwMDAwMDA7IiAvPjxsaW5lIHgxPSIzIiB5MT0iNyIgeDI9IjMiIHkyPSI5IiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOiMwMDAwMDA7IiAvPjxsaW5lIHgxPSI0IiB5MT0iNSIgeDI9IjQiIHkyPSI5IiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOiMwMDAwMDA7IiAvPjxsaW5lIHgxPSI2IiB5MT0iNyIgeDI9IjYiIHkyPSI5IiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOiMwMDAwMDA7IiAvPjxsaW5lIHgxPSI4IiB5MT0iNyIgeDI9IjgiIHkyPSI5IiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOiMwMDAwMDA7IiAvPjxsaW5lIHgxPSI5IiB5MT0iMyIgeDI9IjkiIHkyPSI5IiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOiMwMDAwMDA7IiAvPjwvc3ZnPg==)';
var sclPxL = 'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB2aWV3Qm94PSIwIDAgMTAgMTAiID48bGluZSB4MT0iMCIgeTE9IjIiIHgyPSIzIiB5Mj0iMiIgc3R5bGU9InN0cm9rZS13aWR0aDoxO3N0cm9rZTojMDAwMDAwOyIgLz48bGluZSB4MT0iMCIgeTE9IjMiIHgyPSIzIiB5Mj0iNCIgc3R5bGU9InN0cm9rZS13aWR0aDoxO3N0cm9rZTojMDAwMDAwOyIgLz48bGluZSB4MT0iMCIgeTE9IjUiIHgyPSI2IiB5Mj0iNSIgc3R5bGU9InN0cm9rZS13aWR0aDoxO3N0cm9rZTojMDAwMDAwOyIgLz48bGluZSB4MT0iMCIgeTE9IjciIHgyPSIzIiB5Mj0iNyIgc3R5bGU9InN0cm9rZS13aWR0aDoxO3N0cm9rZTojMDAwMDAwOyIgLz48bGluZSB4MT0iMCIgeTE9IjkiIHgyPSIzIiB5Mj0iOSIgc3R5bGU9InN0cm9rZS13aWR0aDoxO3N0cm9rZTojMDAwMDAwOyIgLz48bGluZSB4MT0iMCIgeTE9IjEwIiB4Mj0iMTAiIHkyPSIxMCIgc3R5bGU9InN0cm9rZS13aWR0aDoxO3N0cm9rZTojMDAwMDAwOyIgLz48L3N2Zz4=)';
var sclPxT = 'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIAp3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgPgogICAgPGxpbmUgeDE9IjIiIHkxPSIwIiB4Mj0iMiIgeTI9IjMiIHN0eWxlPSJzdHJva2Utd2lkdGg6MTtzdHJva2U6IzAwMDAwMDsiIC8+CiAgICA8bGluZSB4MT0iNCIgeTE9IjAiIHgyPSI0IiB5Mj0iMyIgc3R5bGU9InN0cm9rZS13aWR0aDoxO3N0cm9rZTojMDAwMDAwOyIgLz4KICAgIDxsaW5lIHgxPSI1IiB5MT0iMCIgeDI9IjUiIHkyPSI2IiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOiMwMDAwMDA7IiAvPgogICAgPGxpbmUgeDE9IjciIHkxPSIwIiB4Mj0iNyIgeTI9IjMiIHN0eWxlPSJzdHJva2Utd2lkdGg6MTtzdHJva2U6IzAwMDAwMDsiIC8+CiAgICA8bGluZSB4MT0iOSIgeTE9IjAiIHgyPSI5IiB5Mj0iMyIgc3R5bGU9InN0cm9rZS13aWR0aDoxO3N0cm9rZTojMDAwMDAwOyIgLz4KICAgIDxsaW5lIHgxPSIxMCIgeTE9IjAiIHgyPSIxMCIgeTI9IjEwIiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOiMwMDAwMDA7IiAvPgo8L3N2Zz4KCg==)';
var sclEmB = 'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB2aWV3Qm94PSIwIDAgMTAgMTAiID48cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSIxMCIgeD0iNSIgeT0iMCIgZmlsbD0iIzAwMDAwMCIgLz48L3N2Zz4=)';
var sclEmL = 'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIAogICAgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB2aWV3Qm94PSIwIDAgMTAgMTAiID4KICAgICAgICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iNSIgeD0iMCIgeT0iNSIgZmlsbD0iIzAwMDAwMCIgLz4KPC9zdmc+)';
var sclEmT = sclEmB;
var sclVwB = sclEmB;
var sclVwL = sclEmL;
var sclVwT = sclVwB;
var sclVhB = sclEmB;
var sclVhL = sclEmL;
var sclVhT = sclVhB;

var rulerIsMoving = false;
var rulerIsResizingX = false;
var rulerIsResizingY = false;

var rulerMode = true;

var rlr;
var rlrl;
var rlrt;
var nts;


startMove = function (e) {
    
    if (e.target.id == 'swtc') {
        switchRulerMode();
        return true;
    }
    
    if (e.target.id == 'rttr') {
        rotateRuler();
        return true;
    }
    
    if (e.target.id == 'nts') {
        return true;
    }
    
    if (e.target.id == 'rlr') {
        
        e.preventDefault();

        dx = e.offsetX;
        dy = e.offsetY;
        
        if (dx < o || (dx > w - o && dx <= w)) {
            rulerIsResizingX = true;
        } 
        
        if (dy < o || (dy > h - o && dy <= h)) {
            rulerIsResizingY = true;
        }
        
        if( !rulerIsResizingX && !rulerIsResizingY) {
            rulerIsMoving = true;
        }
        
        return true;
    }
    
    if(!rulerMode) {
        
        e.preventDefault();
        
        rulerIsResizingX = true;
        rulerIsResizingY = true;
        
        w = 0;
        h = 0;
        x = e.pageX;
        y = e.pageY;
        dx = 0;
        dy = 0;
        
        rlr.style.left = x.toString() + "px";
        rlr.style.top = y.toString() + "px";
        rlr.style.width = "0px";
        rlr.style.height = "0px";
    }
}


stopMove = function (e) {
    if (w < 0) {
        w = Math.abs(w);
    }
    if (h < 0) {
        h = Math.abs(h);
    }
    rulerIsMoving = false;
    rulerIsResizingX = false;
    rulerIsResizingY = false;
    rlr.style.cursor = 'default';
}

moveRuler = function (e) {

    cx = e.pageX;
    cy = e.pageY;
    
    lft.value = computeValue(cx);
    tp.value = computeValue(cy);
    
    mrkrx.style.left = cx.toString() + "px";
    mrkry.style.top = cy.toString() + "px";
        
    switch (true) {
        case (cx >= x && cx < x + o && cy >= y && cy < y + o):
            rlr.style.cursor = 'nw-resize';
            break;
        case (cx >= x && cx < x + o && cy > y + h - o && cy <= y + h):
            rlr.style.cursor = 'sw-resize';
            break;
        case (cx > x + w - o && cx <= x + w && cy >= y && cy < y + o):
            rlr.style.cursor = 'ne-resize';
            break;
        case (cx > x + w - o && cx <= x + w && cy > y + h - o && cy <= y + h):
            rlr.style.cursor = 'se-resize';
            break;
        case (cx >= x && cx < x + o):
            rlr.style.cursor = 'w-resize';
            break;
        case (cx > x + w - o && cx <= x + w):
            rlr.style.cursor = 'e-resize';
            break;
        case ( cy >= y && cy < y + o):
            rlr.style.cursor = 'n-resize';
            break;
        case (cy > y + h - o && cy <= y + h):
            rlr.style.cursor = 's-resize';
            break;
        default:
            rlr.style.cursor = 'grab';
    }
        
    if (rulerIsMoving == true) {
        rlr.style.cursor = 'grabbing';
        x += e.movementX;
        y += e.movementY;
        rlr.style.left = x.toString() + "px";
        rlr.style.top = y.toString() + "px";
    }  
    
    if (rulerIsResizingX == true) {
        if (dx < o) {
            w -= e.movementX;
            if (w > 0) {
                x += e.movementX;
                rlr.style.left = x.toString() + "px";
            }
        } else {
            w += e.movementX;
            if (w < 0) {
                x += e.movementX;
                rlr.style.left = x.toString() + "px";
            }
        }
        
        rlr.style.width = Math.abs(w).toString() + "px";
        wdth.value = computeValue(Math.abs(w));
    }
    
    if (rulerIsResizingY == true) {
        if (dy < o) {
            h -= e.movementY;
            if (h > 0) {
                y += e.movementY;
                rlr.style.top = y.toString() + "px";
            }
        } else {
            h += e.movementY;            
            if (h < 0) {
                y += e.movementY;
                rlr.style.top = y.toString() + "px";
            }
        }
        
        rlr.style.height = Math.abs(h).toString() + "px";
        hght.value = computeValue(Math.abs(h));
    }
    
}


rotateRuler = function() {
    
    t = w;
    w = h;
    h = t;
    
    rlr.style.width = w.toString() + "px";
    rlr.style.height = h.toString() + "px";
    
    scl = 'scl' + nts.value;

    if (rlr.style.backgroundPosition == "left bottom") {
        scl += "L";
        rlr.style.backgroundPosition = "left top"
        rlr.style.backgroundRepeat = "repeat-y"
        wdth.style.display = 'block';
        hght.style.display = 'block';
    } else {
        scl += "B";
        rlr.style.backgroundPosition = "left bottom"
        rlr.style.backgroundRepeat = "repeat-x"
        wdth.style.display = 'inline-block';
        hght.style.display = 'inline-block';
    }
    rlr.style.backgroundImage = window[scl];
    
    wdth.value = computeValue(w);
    hght.value = computeValue(h);
}

switchRulerMode = function(e = null) {
    
    rulerMode = !rulerMode;
    
    if (!rulerMode) {
        x = y = w = h = 0;
        rlr.style.width = w.toString() + "px";
        rlr.style.height = h.toString() + "px";
    }
    
    drawRuler();
}


drawRuler = function() {

    
    if (rulerMode == true) {
        rlrt.style.display = 'none';
        rlrl.style.display = 'none';
        
        rlr.style.width = w.toString() + "px";
        rlr.style.height = h.toString() + "px";
        rlr.style.overflow = 'visible';
               
    } else {

        rlrt.style.display = 'block';
        rlrl.style.display = 'block';
        
        rlr.style.width = "0px";
        rlr.style.height = "0px";
        rlr.style.overflow = 'hidden';
        
        rlr.style.zIndex = 1000000;
    }
    
    document.body.appendChild(rlr);
    document.body.appendChild(rlrt);
    document.body.appendChild(rlrl);
    
}

changeUnit = function(e) {

    scl = 'scl' + nts.value;
    
    rlrt.style.backgroundImage = window[scl + 'T'];
    rlrl.style.backgroundImage = window[scl + 'L'];

    if (rlr.style.backgroundPosition == "left bottom") {
        scl += "B";
    } else {
        scl += "L";
    }
    
    switch (e.target.value) {
        case 'Em':
            rlr.style.backgroundSize =  '1em 1em';
            rlrt.style.backgroundSize =  '1em 1em';
            rlrl.style.backgroundSize =  '1em 1em';
            break;
        case 'Px':
            rlr.style.backgroundSize =  '10px 10px';
            rlrt.style.backgroundSize =  '10px 10px';
            rlrl.style.backgroundSize =  '10px 10px';
            break;
        case 'Vw':
            rlr.style.backgroundSize =  '1vw 1vw';
            rlrt.style.backgroundSize =  '1vw 1vw';
            rlrl.style.backgroundSize =  '1vw 1vw';
            break;
        case 'Vh':
            rlr.style.backgroundSize =  '1vh 1vh';
            rlrt.style.backgroundSize =  '1vh 1vh';
            rlrl.style.backgroundSize =  '1vh 1vh';
            break;
    }
    
    
    rlr.style.backgroundImage = window[scl];

    lft.value = computeValue(cx);
    tp.value = computeValue(cy);

    wdth.value = computeValue(w);
    hght.value = computeValue(h);
}


computeValue = function(v) {
    
    switch (nts.value) {
        case 'Px':
            return v;
            break;
        case 'Em':
            return v / parseFloat(window.getComputedStyle(document.body)['font-size']);
            break;
        case 'Vw':
            return v / (parseFloat(window.innerWidth) / 100);
        case 'Vh':
            return v / (parseFloat(window.innerHeight) / 100);
    }
    
    

} 

init = function() {

    rlr = document.createElement('div');
    rlr.id = 'rlr';
    rlr.style.display = 'block';
    rlr.style.position = 'fixed';
    rlr.style.left = x.toString() + "px";
    rlr.style.top = y.toString() + "px";
    rlr.style.width = w.toString() + "px";
    rlr.style.height = h.toString() + "px";
    rlr.style.backgroundColor = '#ffffcc';
    rlr.style.backgroundImage = sclPxB;
    rlr.style.backgroundSize = '10px 10px';
    rlr.style.backgroundPosition = 'left bottom';
    rlr.style.backgroundRepeat = 'repeat-x';
    rlr.style.border = '1px solid black';
    rlr.style.padding = '0';

    rlrt = document.createElement('div');
    rlrt.id = 'rlrt';
    rlrt.style.display = 'block';
    rlrt.style.position = 'fixed';
    rlrt.style.left = 0;
    rlrt.style.top = 0;
    rlrt.style.width = '100%';
    rlrt.style.height = '12px';
    rlrt.style.backgroundImage = sclPxT;
    rlrt.style.backgroundSize = '10px 10px';
    rlrt.style.backgroundPosition = 'left top';
    rlrt.style.backgroundRepeat = 'repeat-x';
    
    rlrl = document.createElement('div');
    rlrl.id = 'rlrl';
    rlrl.style.display = 'block';
    rlrl.style.position = 'fixed';
    rlrl.style.left = 0;
    rlrl.style.top = 0;
    rlrl.style.width = '12px';
    rlrl.style.height = '100%';
    rlrl.style.backgroundImage = sclPxL;
    rlrl.style.backgroundSize = '10px 10px';
    rlrl.style.backgroundPosition = 'left top';
    rlrl.style.backgroundRepeat = 'repeat-y';
    
    mrkrx = document.createElement('span');
    mrkrx.id = 'mrkrx';
    mrkrx.style.display = 'block';
    mrkrx.style.position = 'fixed';
    mrkrx.style.width = '0';
    mrkrx.style.height = '100%';
    mrkrx.style.left = '0';
    mrkrx.style.borderLeft = '1px solid rgba(255,0,0,0.5)';
    
    mrkry = document.createElement('span');
    mrkry.id = 'mrkry';
    mrkry.style.display = 'block';
    mrkry.style.position = 'fixed';
    mrkry.style.width = '100%';
    mrkry.style.height = '0';
    mrkry.style.top = '0';
    mrkry.style.borderTop = '1px solid rgba(255,0,0,0.5)';
    
    swtc = document.createElement('span');
    swtc.id = 'swtc';
    swtc.innerHTML = '&#x1f4cf;';
    swtc.style.display = 'inline-block';
    swtc.style.padding = '4px';
    swtc.style.cursor = 'default';
    swtc.style.textDecoration = 'none';
    
    rttr = document.createElement('span');
    rttr.id = 'rttr';
    rttr.innerHTML = '&#x27F3;';
    rttr.style.display = 'inline-block';
    rttr.style.padding = '4px';
    rttr.style.cursor = 'default';
    rttr.style.textDecoration = 'none';

    wdth = document.createElement('input');
    wdth.type = 'text';
    wdth.disabled = true;
    wdth.size = 4;
    wdth.value = w;
    wdth.style.display = 'inline-block';
    wdth.style.margin = '5px';


    hght = document.createElement('input');
    hght.type = 'text';
    hght.disabled = true;
    hght.size = 4;
    hght.value = h;
    hght.style.display = 'inline-block';
    hght.style.margin = '5px';

    lft = document.createElement('input');
    lft.type = 'text';
    lft.disabled = true;
    lft.size = 4;
    lft.value = w;
    lft.style.display = 'inline-block';
    lft.style.margin = '5px';
    lft.style.backgroundColor = '#ffffcc';
    
    tp = document.createElement('input');
    tp.type = 'text';
    tp.disabled = true;
    tp.size = 4;
    tp.value = w;
    tp.style.display = 'inline-block';
    tp.style.margin = '25px 5px 5px';
    tp.style.backgroundColor = '#ffffcc';
    
    
    nts = document.createElement('select');
    nts.id = 'nts';
    nts.size = 1;
    nts.style = 'width: 60px';
    units.forEach((unit) => {
        tmplmt = document.createElement('option');
        tmplmt.value = unit.charAt(0).toUpperCase() + unit.substr(1);
        tmplmt.innerHTML = unit;
        nts.appendChild(tmplmt);
    });

    nts.addEventListener('change', changeUnit);
    
    rlrt.appendChild(mrkrx);
    rlrt.appendChild(lft);
    
    rlrl.appendChild(mrkry);
    rlrl.appendChild(tp);
    
    rlr.appendChild(swtc);
    rlr.appendChild(rttr);
    rlr.appendChild(wdth);
    rlr.appendChild(hght);
    rlr.appendChild(nts);
        
    drawRuler();
    
    document.addEventListener('mousedown', startMove);
    document.addEventListener('mouseup', stopMove);
    document.addEventListener('mousemove', moveRuler);

}

init();
