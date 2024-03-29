JSRULER = {

    w: 500,
    h: 36,
    x: 20,
    y: 20,
    dx: 0,
    dy: 0,
    o: 10,
    
    units: Array('px', 'em', 'vw', 'vh'),
    images: {
        sclPxB: 'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjkiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDkgOSIgPjxsaW5lIHgxPSIxIiB5MT0iNyIgeDI9IjEiIHkyPSI5IiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOiMwMDAwMDA7IiAvPjxsaW5lIHgxPSIzIiB5MT0iNyIgeDI9IjMiIHkyPSI5IiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOiMwMDAwMDA7IiAvPjxsaW5lIHgxPSI0IiB5MT0iNSIgeDI9IjQiIHkyPSI5IiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOiMwMDAwMDA7IiAvPjxsaW5lIHgxPSI2IiB5MT0iNyIgeDI9IjYiIHkyPSI5IiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOiMwMDAwMDA7IiAvPjxsaW5lIHgxPSI4IiB5MT0iNyIgeDI9IjgiIHkyPSI5IiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOiMwMDAwMDA7IiAvPjxsaW5lIHgxPSI5IiB5MT0iMyIgeDI9IjkiIHkyPSI5IiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOiMwMDAwMDA7IiAvPjwvc3ZnPg==)',
        sclPxL: 'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB2aWV3Qm94PSIwIDAgMTAgMTAiID48bGluZSB4MT0iMCIgeTE9IjIiIHgyPSIzIiB5Mj0iMiIgc3R5bGU9InN0cm9rZS13aWR0aDoxO3N0cm9rZTojMDAwMDAwOyIgLz48bGluZSB4MT0iMCIgeTE9IjMiIHgyPSIzIiB5Mj0iNCIgc3R5bGU9InN0cm9rZS13aWR0aDoxO3N0cm9rZTojMDAwMDAwOyIgLz48bGluZSB4MT0iMCIgeTE9IjUiIHgyPSI2IiB5Mj0iNSIgc3R5bGU9InN0cm9rZS13aWR0aDoxO3N0cm9rZTojMDAwMDAwOyIgLz48bGluZSB4MT0iMCIgeTE9IjciIHgyPSIzIiB5Mj0iNyIgc3R5bGU9InN0cm9rZS13aWR0aDoxO3N0cm9rZTojMDAwMDAwOyIgLz48bGluZSB4MT0iMCIgeTE9IjkiIHgyPSIzIiB5Mj0iOSIgc3R5bGU9InN0cm9rZS13aWR0aDoxO3N0cm9rZTojMDAwMDAwOyIgLz48bGluZSB4MT0iMCIgeTE9IjEwIiB4Mj0iMTAiIHkyPSIxMCIgc3R5bGU9InN0cm9rZS13aWR0aDoxO3N0cm9rZTojMDAwMDAwOyIgLz48L3N2Zz4=)',
        sclPxT: 'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIAp3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgPgogICAgPGxpbmUgeDE9IjIiIHkxPSIwIiB4Mj0iMiIgeTI9IjMiIHN0eWxlPSJzdHJva2Utd2lkdGg6MTtzdHJva2U6IzAwMDAwMDsiIC8+CiAgICA8bGluZSB4MT0iNCIgeTE9IjAiIHgyPSI0IiB5Mj0iMyIgc3R5bGU9InN0cm9rZS13aWR0aDoxO3N0cm9rZTojMDAwMDAwOyIgLz4KICAgIDxsaW5lIHgxPSI1IiB5MT0iMCIgeDI9IjUiIHkyPSI2IiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOiMwMDAwMDA7IiAvPgogICAgPGxpbmUgeDE9IjciIHkxPSIwIiB4Mj0iNyIgeTI9IjMiIHN0eWxlPSJzdHJva2Utd2lkdGg6MTtzdHJva2U6IzAwMDAwMDsiIC8+CiAgICA8bGluZSB4MT0iOSIgeTE9IjAiIHgyPSI5IiB5Mj0iMyIgc3R5bGU9InN0cm9rZS13aWR0aDoxO3N0cm9rZTojMDAwMDAwOyIgLz4KICAgIDxsaW5lIHgxPSIxMCIgeTE9IjAiIHgyPSIxMCIgeTI9IjEwIiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOiMwMDAwMDA7IiAvPgo8L3N2Zz4KCg==)',
        sclEmB: 'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB2aWV3Qm94PSIwIDAgMTAgMTAiID48cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSIxMCIgeD0iNSIgeT0iMCIgZmlsbD0iIzAwMDAwMCIgLz48L3N2Zz4=)',
        sclEmL: 'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIAogICAgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB2aWV3Qm94PSIwIDAgMTAgMTAiID4KICAgICAgICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iNSIgeD0iMCIgeT0iNSIgZmlsbD0iIzAwMDAwMCIgLz4KPC9zdmc+)',
        get sclEmT() { return this.sclEmB },
        get sclVwB() { return this.sclEmB },
        get sclVwL() { return this.sclEmL },
        get sclVwT() { return this.sclVwB },
        get sclVhB() { return this.sclEmB },
        get sclVhL() { return this.sclEmL },
        get sclVhT() { return this.sclVhB }
    },
    
    rulerIsMoving: false,
    rulerIsResizingX: false,
    rulerIsResizingY: false,
    
    rulerMode: true,
    
    rlr: null,
    rlrl: null,
    rlrt: null,
    nts: null,
    
    
    startMove: function (e) {
        
        if (e.target.id == 'swtc') {
            JSRULER.switchRulerMode();
            return true;
        }
        
        if (e.target.id == 'rttr') {
            JSRULER.rotateRuler();
            return true;
        }
        
        if (e.target.id == 'nts') {
            return true;
        }
        
        if (e.target.id == 'rlr') {
            
            e.preventDefault();
    
            JSRULER.dx = e.offsetX;
            JSRULER.dy = e.offsetY;
            
            if (JSRULER.dx < JSRULER.o || (JSRULER.dx > JSRULER.w - JSRULER.o && JSRULER.dx <= JSRULER.w)) {
                JSRULER.rulerIsResizingX = true;
            } 
            
            if (JSRULER.dy < JSRULER.o || (JSRULER.dy > JSRULER.h - JSRULER.o && JSRULER.dy <= JSRULER.h)) {
                JSRULER.rulerIsResizingY = true;
            }
            
            if( !JSRULER.rulerIsResizingX && !JSRULER.rulerIsResizingY) {
                JSRULER.rulerIsMoving = true;
            }
            
            return true;
        }
        
        if(!JSRULER.rulerMode) {
            
            e.preventDefault();
            
            JSRULER.rulerIsResizingX = true;
            JSRULER.rulerIsResizingY = true;
            
            JSRULER.w = 0;
            JSRULER.h = 0;
            JSRULER.x = e.pageX;
            JSRULER.y = e.pageY;
            JSRULER.dx = 0;
            JSRULER.dy = 0;
            
            JSRULER.rlr.style.left = JSRULER.x.toString() + "px";
            JSRULER.rlr.style.top = JSRULER.y.toString() + "px";
            JSRULER.rlr.style.width = "0px";
            JSRULER.rlr.style.height = "0px";
        }
    },
    
    
    stopMove: function (e) {
        if (JSRULER.w < 0) {
            JSRULER.w = Math.abs(JSRULER.w);
        }
        if (JSRULER.h < 0) {
            JSRULER.h = Math.abs(JSRULER.h);
        }
        JSRULER.rulerIsMoving = false;
        JSRULER.rulerIsResizingX = false;
        JSRULER.rulerIsResizingY = false;
        JSRULER.rlr.style.cursor = 'default';
    },
    
    moveRuler: function (e) {
    
        JSRULER.cx = e.pageX;
        JSRULER.cy = e.pageY;
        
        JSRULER.lft.value = JSRULER.computeValue(JSRULER.cx);
        JSRULER.tp.value = JSRULER.computeValue(JSRULER.cy);
        
        JSRULER.mrkrx.style.left = JSRULER.cx.toString() + "px";
        JSRULER.mrkry.style.top = JSRULER.cy.toString() + "px";
            
        switch (true) {
            case (JSRULER.cx >= JSRULER.x && JSRULER.cx < JSRULER.x + JSRULER.o && JSRULER.cy >= JSRULER.y && JSRULER.cy < JSRULER.y + JSRULER.o):
                JSRULER.rlr.style.cursor = 'nw-resize';
                break;
            case (JSRULER.cx >= JSRULER.x && JSRULER.cx < JSRULER.x + JSRULER.o && JSRULER.cy > JSRULER.y + JSRULER.h - JSRULER.o && JSRULER.cy <= JSRULER.y + JSRULER.h):
                JSRULER.rlr.style.cursor = 'sw-resize';
                break;
            case (JSRULER.cx > JSRULER.x + JSRULER.w - JSRULER.o && JSRULER.cx <= JSRULER.x + JSRULER.w && JSRULER.cy >= JSRULER.y && JSRULER.cy < JSRULER.y + JSRULER.o):
                JSRULER.rlr.style.cursor = 'ne-resize';
                break;
            case (JSRULER.cx > JSRULER.x + JSRULER.w - JSRULER.o && JSRULER.cx <= JSRULER.x + JSRULER.w && JSRULER.cy > JSRULER.y + JSRULER.h - JSRULER.o && JSRULER.cy <= JSRULER.y + JSRULER.h):
                JSRULER.rlr.style.cursor = 'se-resize';
                break;
            case (JSRULER.cx >= JSRULER.x && JSRULER.cx < JSRULER.x + JSRULER.o):
                JSRULER.rlr.style.cursor = 'w-resize';
                break;
            case (JSRULER.cx > JSRULER.x + JSRULER.w - JSRULER.o && JSRULER.cx <= JSRULER.x + JSRULER.w):
                JSRULER.rlr.style.cursor = 'e-resize';
                break;
            case ( JSRULER.cy >= JSRULER.y && JSRULER.cy < JSRULER.y + JSRULER.o):
                JSRULER.rlr.style.cursor = 'n-resize';
                break;
            case (JSRULER.cy > JSRULER.y + JSRULER.h - JSRULER.o && JSRULER.cy <= JSRULER.y + JSRULER.h):
                JSRULER.rlr.style.cursor = 's-resize';
                break;
            default:
                JSRULER.rlr.style.cursor = 'grab';
        }
            
        if (JSRULER.rulerIsMoving == true) {
            JSRULER.rlr.style.cursor = 'grabbing';
            JSRULER.x += e.movementX;
            JSRULER.y += e.movementY;
            JSRULER.rlr.style.left = JSRULER.x.toString() + "px";
            JSRULER.rlr.style.top = JSRULER.y.toString() + "px";
        }  
        
        if (JSRULER.rulerIsResizingX == true) {
            if (JSRULER.dx < JSRULER.o) {
                JSRULER.w -= e.movementX;
                if (JSRULER.w > 0) {
                    JSRULER.x += e.movementX;
                    JSRULER.rlr.style.left = JSRULER.x.toString() + "px";
                }
            } else {
                JSRULER.w += e.movementX;
                if (JSRULER.w < 0) {
                    JSRULER.x += e.movementX;
                    JSRULER.rlr.style.left = JSRULER.x.toString() + "px";
                }
            }
            
            JSRULER.rlr.style.width = Math.abs(JSRULER.w).toString() + "px";
            JSRULER.wdth.value = JSRULER.computeValue(Math.abs(JSRULER.w));
        }
        
        if (JSRULER.rulerIsResizingY == true) {
            if (JSRULER.dy < JSRULER.o) {
                JSRULER.h -= e.movementY;
                if (JSRULER.h > 0) {
                    JSRULER.y += e.movementY;
                    JSRULER.rlr.style.top = JSRULER.y.toString() + "px";
                }
            } else {
                JSRULER.h += e.movementY;            
                if (JSRULER.h < 0) {
                    JSRULER.y += e.movementY;
                    JSRULER.rlr.style.top = JSRULER.y.toString() + "px";
                }
            }
            
            JSRULER.rlr.style.height = Math.abs(JSRULER.h).toString() + "px";
            JSRULER.hght.value = JSRULER.computeValue(Math.abs(JSRULER.h));
        }
        
    },
    
    
    rotateRuler: function() {
        
        t = JSRULER.w;
        JSRULER.w = JSRULER.h;
        JSRULER.h = t;
        
        JSRULER.rlr.style.width = JSRULER.w.toString() + "px";
        JSRULER.rlr.style.height = JSRULER.h.toString() + "px";
        
        scl = 'scl' + JSRULER.nts.value;
    
        if (JSRULER.rlr.style.backgroundPosition == "left bottom") {
            scl += "L";
            JSRULER.rlr.style.backgroundPosition = "left top"
            JSRULER.rlr.style.backgroundRepeat = "repeat-y"
            JSRULER.wdth.style.display = 'block';
            JSRULER.hght.style.display = 'block';
        } else {
            scl += "B";
            JSRULER.rlr.style.backgroundPosition = "left bottom"
            JSRULER.rlr.style.backgroundRepeat = "repeat-x"
            JSRULER.wdth.style.display = 'inline-block';
            JSRULER.hght.style.display = 'inline-block';
        }
        JSRULER.rlr.style.backgroundImage = JSRULER.images[scl];
        
        JSRULER.wdth.value = computeValue(w);
        JSRULER.hght.value = computeValue(h);
    },
    
    switchRulerMode: function(e = null) {
        
        JSRULER.rulerMode = !JSRULER.rulerMode;
        
        if (!JSRULER.rulerMode) {
            x = y = w = h = 0;
            JSRULER.rlr.style.width = JSRULER.w.toString() + "px";
            JSRULER.rlr.style.height = JSRULER.h.toString() + "px";
        }
        
        JSRULER.drawRuler();
    },
    
    
    drawRuler: function() {
    
        
        if (JSRULER.rulerMode == true) {
            JSRULER.rlrt.style.display = 'none';
            JSRULER.rlrl.style.display = 'none';
            
            JSRULER.rlr.style.width = JSRULER.w.toString() + "px";
            JSRULER.rlr.style.height = JSRULER.h.toString() + "px";
            JSRULER.rlr.style.overflow = 'visible';
                   
        } else {
    
            JSRULER.rlrt.style.display = 'block';
            JSRULER.rlrl.style.display = 'block';
            
            JSRULER.rlr.style.width = "0px";
            JSRULER.rlr.style.height = "0px";
            JSRULER.rlr.style.overflow = 'hidden';
            
            JSRULER.rlr.style.zIndex = 1000000;
        }
        
        document.body.appendChild(JSRULER.rlr);
        document.body.appendChild(JSRULER.rlrt);
        document.body.appendChild(JSRULER.rlrl);
        
    },
    
    changeUnit: function(e) {
    
        scl = 'scl' + JSRULER.nts.value;
        
        JSRULER.rlrt.style.backgroundImage = JSRULER.images[scl + 'T'];
        JSRULER.rlrl.style.backgroundImage = JSRULER.images[scl + 'L'];
    
        if (JSRULER.rlr.style.backgroundPosition == "left bottom") {
            scl += "B";
        } else {
            scl += "L";
        }
        
        switch (e.target.value) {
            case 'Em':
                JSRULER.rlr.style.backgroundSize =  '1em 1em';
                JSRULER.rlrt.style.backgroundSize =  '1em 1em';
                JSRULER.rlrl.style.backgroundSize =  '1em 1em';
                break;
            case 'Px':
                JSRULER.rlr.style.backgroundSize =  '10px 10px';
                JSRULER.rlrt.style.backgroundSize =  '10px 10px';
                JSRULER.rlrl.style.backgroundSize =  '10px 10px';
                break;
            case 'Vw':
                JSRULER.rlr.style.backgroundSize =  '1vw 1vw';
                JSRULER.rlrt.style.backgroundSize =  '1vw 1vw';
                JSRULER.rlrl.style.backgroundSize =  '1vw 1vw';
                break;
            case 'Vh':
                JSRULER.rlr.style.backgroundSize =  '1vh 1vh';
                JSRULER.rlrt.style.backgroundSize =  '1vh 1vh';
                JSRULER.rlrl.style.backgroundSize =  '1vh 1vh';
                break;
        }
        
        
        JSRULER.rlr.style.backgroundImage = JSRULER.images[scl];
    
        JSRULER.lft.value = JSRULER.computeValue(JSRULER.cx);
        JSRULER.tp.value = JSRULER.computeValue(JSRULER.cy);
    
        JSRULER.wdth.value = JSRULER.computeValue(JSRULER.w);
        JSRULER.hght.value = JSRULER.computeValue(JSRULER.h);
    },
    
    
    computeValue: function(v) {
        
        switch (JSRULER.nts.value) {
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
    },
    
    init: function() {
    
        JSRULER.rlr = document.createElement('div');
        JSRULER.rlr.id = 'rlr';
        JSRULER.rlr.style.display = 'block';
        JSRULER.rlr.style.position = 'fixed';
        JSRULER.rlr.style.left = JSRULER.x.toString() + "px";
        JSRULER.rlr.style.top = JSRULER.y.toString() + "px";
        JSRULER.rlr.style.width = JSRULER.w.toString() + "px";
        JSRULER.rlr.style.height = JSRULER.h.toString() + "px";
        JSRULER.rlr.style.backgroundColor = '#ffffcc';
        JSRULER.rlr.style.backgroundImage = JSRULER.images['sclPxB'];
        JSRULER.rlr.style.backgroundSize = '10px 10px';
        JSRULER.rlr.style.backgroundPosition = 'left bottom';
        JSRULER.rlr.style.backgroundRepeat = 'repeat-x';
        JSRULER.rlr.style.border = '1px solid black';
        JSRULER.rlr.style.padding = '0';
    
        JSRULER.rlrt = document.createElement('div');
        JSRULER.rlrt.id = 'rlrt';
        JSRULER.rlrt.style.display = 'block';
        JSRULER.rlrt.style.position = 'fixed';
        JSRULER.rlrt.style.left = 0;
        JSRULER.rlrt.style.top = 0;
        JSRULER.rlrt.style.width = '100%';
        JSRULER.rlrt.style.height = '12px';
        JSRULER.rlrt.style.backgroundImage = JSRULER.images['sclPxT'];
        JSRULER.rlrt.style.backgroundSize = '10px 10px';
        JSRULER.rlrt.style.backgroundPosition = 'left top';
        JSRULER.rlrt.style.backgroundRepeat = 'repeat-x';
        
        JSRULER.rlrl = document.createElement('div');
        JSRULER.rlrl.id = 'rlrl';
        JSRULER.rlrl.style.display = 'block';
        JSRULER.rlrl.style.position = 'fixed';
        JSRULER.rlrl.style.left = 0;
        JSRULER.rlrl.style.top = 0;
        JSRULER.rlrl.style.width = '12px';
        JSRULER.rlrl.style.height = '100%';
        JSRULER.rlrl.style.backgroundImage = JSRULER.images['sclPxL'];
        JSRULER.rlrl.style.backgroundSize = '10px 10px';
        JSRULER.rlrl.style.backgroundPosition = 'left top';
        JSRULER.rlrl.style.backgroundRepeat = 'repeat-y';
        
        JSRULER.mrkrx = document.createElement('span');
        JSRULER.mrkrx.id = 'mrkrx';
        JSRULER.mrkrx.style.display = 'block';
        JSRULER.mrkrx.style.position = 'fixed';
        JSRULER.mrkrx.style.width = '0';
        JSRULER.mrkrx.style.height = '100%';
        JSRULER.mrkrx.style.left = '0';
        JSRULER.mrkrx.style.borderLeft = '1px solid rgba(255,0,0,0.5)';
        
        JSRULER.mrkry = document.createElement('span');
        JSRULER.mrkry.id = 'mrkry';
        JSRULER.mrkry.style.display = 'block';
        JSRULER.mrkry.style.position = 'fixed';
        JSRULER.mrkry.style.width = '100%';
        JSRULER.mrkry.style.height = '0';
        JSRULER.mrkry.style.top = '0';
        JSRULER.mrkry.style.borderTop = '1px solid rgba(255,0,0,0.5)';
        
        JSRULER.swtc = document.createElement('span');
        JSRULER.swtc.id = 'swtc';
        JSRULER.swtc.innerHTML = '&#x1f4cf;';
        JSRULER.swtc.style.display = 'inline-block';
        JSRULER.swtc.style.padding = '4px';
        JSRULER.swtc.style.cursor = 'default';
        JSRULER.swtc.style.textDecoration = 'none';
        
        JSRULER.rttr = document.createElement('span');
        JSRULER.rttr.id = 'rttr';
        JSRULER.rttr.innerHTML = '&#x27F3;';
        JSRULER.rttr.style.display = 'inline-block';
        JSRULER.rttr.style.padding = '4px';
        JSRULER.rttr.style.cursor = 'default';
        JSRULER.rttr.style.textDecoration = 'none';
    
        JSRULER.wdth = document.createElement('input');
        JSRULER.wdth.type = 'text';
        JSRULER.wdth.disabled = true;
        JSRULER.wdth.size = 4;
        JSRULER.wdth.value = JSRULER.w;
        JSRULER.wdth.style.display = 'inline-block';
        JSRULER.wdth.style.margin = '5px';
    
    
        JSRULER.hght = document.createElement('input');
        JSRULER.hght.type = 'text';
        JSRULER.hght.disabled = true;
        JSRULER.hght.size = 4;
        JSRULER.hght.value = JSRULER.h;
        JSRULER.hght.style.display = 'inline-block';
        JSRULER.hght.style.margin = '5px';
    
        JSRULER.lft = document.createElement('input');
        JSRULER.lft.type = 'text';
        JSRULER.lft.disabled = true;
        JSRULER.lft.size = 4;
        JSRULER.lft.value = JSRULER.w;
        JSRULER.lft.style.display = 'inline-block';
        JSRULER.lft.style.margin = '5px';
        JSRULER.lft.style.backgroundColor = '#ffffcc';
        
        JSRULER.tp = document.createElement('input');
        JSRULER.tp.type = 'text';
        JSRULER.tp.disabled = true;
        JSRULER.tp.size = 4;
        JSRULER.tp.value = JSRULER.w;
        JSRULER.tp.style.display = 'inline-block';
        JSRULER.tp.style.margin = '25px 5px 5px';
        JSRULER.tp.style.backgroundColor = '#ffffcc';
        
        JSRULER.nts = document.createElement('select');
        JSRULER.nts.id = 'nts';
        JSRULER.nts.size = 1;
        JSRULER.nts.style = 'width: 60px';
        JSRULER.units.forEach((unit) => {
            tmplmt = document.createElement('option');
            tmplmt.value = unit.charAt(0).toUpperCase() + unit.substr(1);
            tmplmt.innerHTML = unit;
            JSRULER.nts.appendChild(tmplmt);
        });
        
        JSRULER.nts.addEventListener('change', JSRULER.changeUnit);
    
        JSRULER.cr = document.createElement('span');
        JSRULER.cr.id = 'cr';
        JSRULER.cr.innerHTML = '&times;';
        JSRULER.cr.style.display = 'inline-block';
        JSRULER.cr.style.position = 'absolute';
        JSRULER.cr.style.right = '4px';
        JSRULER.cr.style.top = '0';
        JSRULER.cr.style.padding = '4px';
        JSRULER.cr.style.cursor = 'default';
        JSRULER.cr.style.textDecoration = 'none';
        JSRULER.cr.addEventListener('click', function() { JSRULER.rlr.remove(); });

        
        JSRULER.rlrt.appendChild(JSRULER.mrkrx);
        JSRULER.rlrt.appendChild(JSRULER.lft);
        
        JSRULER.rlrl.appendChild(JSRULER.mrkry);
        JSRULER.rlrl.appendChild(JSRULER.tp);
        
        JSRULER.rlr.appendChild(JSRULER.swtc);
        JSRULER.rlr.appendChild(JSRULER.rttr);
        JSRULER.rlr.appendChild(JSRULER.wdth);
        JSRULER.rlr.appendChild(JSRULER.hght);
        JSRULER.rlr.appendChild(JSRULER.nts);
        JSRULER.rlr.appendChild(JSRULER.cr);
        
        JSRULER.drawRuler();
        
        document.addEventListener('mousedown', JSRULER.startMove);
        document.addEventListener('mouseup', JSRULER.stopMove);
        document.addEventListener('mousemove', JSRULER.moveRuler);        
    
    },
    
}

JSRULER.init();
