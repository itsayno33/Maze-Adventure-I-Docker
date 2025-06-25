/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/d_cmn/C_AlertLog.ts":
/*!*********************************!*\
  !*** ./src/d_cmn/C_AlertLog.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_AlertLog = void 0;
const F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "./src/d_utl/F_Rand.ts");
const C_Dialog_1 = __webpack_require__(/*! ./C_Dialog */ "./src/d_cmn/C_Dialog.ts");
class C_AlertLog extends C_Dialog_1.C_Dialog {
    static getObj(target) {
        var _a, _b;
        var _c, _d;
        (_a = this.me) !== null && _a !== void 0 ? _a : (this.me = {});
        if (target === undefined) {
            target = document.createElement('dialog');
            target.id = 'dialog_' + (0, F_Rand_1._get_uuid)();
            document.body.appendChild(target);
        }
        return (_b = (_c = this.me)[_d = target.id]) !== null && _b !== void 0 ? _b : (_c[_d] = new C_AlertLog(target));
    }
    constructor(target) {
        super(target);
        this.msg = {};
        this.__clearDialog();
        this.__makeDialog();
    }
    __clearDialog() {
        const ctx = super.getWindow();
        while (ctx.firstChild)
            ctx.removeChild(ctx.firstChild);
    }
    __makeDialog() {
        const ctx = super.getWindow();
        try {
            this.pane = this.__makeWindow('pane');
            this.logs = this.__makePanel('logs', this.pane);
            this.btns = this.__makePanel('btns', this.pane);
            this.upd = this.__makeButton('update', '更新', this.btns);
            this.clr = this.__makeButton('clear', '消去', this.btns);
            this.cls = this.__makeButton('close', '閉じる', this.btns);
            this.upd.addEventListener('click', () => { this.update(); }, false);
            this.clr.addEventListener('click', () => { this.clear(); }, false);
            this.cls.addEventListener('click', () => { this.hide(); }, false);
            this.logs.style.setProperty('user-select', 'text');
            this.logs.style.setProperty('max-width', '90dvw');
            this.logs.style.setProperty('min-height', '3.0rem');
            this.logs.style.setProperty('max-height', '80dvh');
            this.logs.style.setProperty('overflow-x', 'auto');
            this.logs.style.setProperty('overflow-y', 'auto');
            this.setZoomElm(this.logs);
        }
        catch (err) { }
    }
    __makeWindow(id) {
        const div = document.createElement('div');
        div.id = `${this.id}_${id}`;
        this.setWindow(div);
        return div;
    }
    __makePanel(id, parent) {
        const div = document.createElement('div');
        div.id = `${this.id}_${id}`;
        parent.appendChild(div);
        return div;
    }
    __makeButton(id, name, parent) {
        const btn = document.createElement('button');
        btn.id = `${this.id}_${id}`;
        btn.innerHTML = name;
        parent.appendChild(btn);
        return btn;
    }
    set_message(ttl, msg) {
        var _a;
        var _b;
        ((_a = (_b = this.msg)[ttl]) !== null && _a !== void 0 ? _a : (_b[ttl] = [])).push(msg);
        this.__dom_update();
    }
    clr_message(ttl) {
        if (ttl !== undefined) {
            this.msg[ttl] = [];
            return;
        }
        for (const ii in this.msg)
            this.msg[ii] = [];
        this.__dom_clear();
        return;
    }
    update() { this.__dom_update(); }
    __dom_update() {
        var _a;
        this.__dom_clear();
        for (const title in this.msg) {
            for (let msg of this.msg[title]) {
                const fs = document.createElement('fieldset');
                const lg = document.createElement('legend');
                lg.innerHTML = `${title} (${Date.now().toString()})`;
                fs.appendChild(lg);
                const pr = document.createElement('pre');
                fs.appendChild(pr);
                const pg = document.createElement('p');
                pg.innerHTML = msg;
                pr.appendChild(pg);
                (_a = this.logs) === null || _a === void 0 ? void 0 : _a.appendChild(fs);
            }
        }
    }
    clear() { this.clr_message(); }
    __dom_clear() {
        var _a;
        while ((_a = this.logs) === null || _a === void 0 ? void 0 : _a.firstChild)
            this.logs.removeChild(this.logs.firstChild);
    }
    show() {
        this.update();
        try {
            super.show();
        }
        catch (err) { }
    }
    hide() {
        try {
            super.hide();
        }
        catch (err) { }
    }
    display(yn) {
        yn ? this.show() : this.hide();
    }
}
exports.C_AlertLog = C_AlertLog;


/***/ }),

/***/ "./src/d_cmn/C_Dialog.ts":
/*!*******************************!*\
  !*** ./src/d_cmn/C_Dialog.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Dialog = void 0;
const F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "./src/d_utl/F_Rand.ts");
class C_Dialog {
    constructor(target) {
        this.__mop = { x: 0, y: 0 };
        if (target === undefined) {
            target = document.createElement('dialog');
            document.body.appendChild(target);
        }
        if (target.id === undefined || target.id === '')
            target.id = 'dialog_' + (0, F_Rand_1._get_uuid)();
        this.id = target.id;
        target.style.margin = '0';
        target.style.padding = '0';
        this.__dia = target;
        this.__pan = document.createElement('div');
        this.__set_dialog_style();
        this.__ctx = document.createElement('div');
        this.__ctx.style.gridArea = 'mm';
        this.__pan.appendChild(this.__ctx);
        this.__rsz = {};
        this.__set_bar_style('tm');
        this.__set_bar_style('ml');
        this.__set_bar_style('mr');
        this.__set_bar_style('bm');
        this.__set_corner_style('tl');
        this.__set_corner_style('tr');
        this.__set_corner_style('bl');
        this.__set_corner_style('br');
        this.__dia.appendChild(this.__pan);
    }
    __set_dialog_style() {
        this.__dia.style.border = 'none';
        this.__dia.style.borderRadius = '10px';
        this.__dia.style.userSelect = 'auto';
        this.__dia.style.margin = '0';
        this.__dia.style.padding = '0';
        this.__pan.style.display = 'grid';
        this.__pan.style.gridTemplateColumns = `
            [tl-start ml-start bl-start]
            20px
            [tl-end ml-end bl-end tm-start mm-start bm-start]
            1fr
            [tm-end mm-end bm-end tr-start mr-start br-start]
            20px
            [tr-end mr-end br-end]
        `;
        this.__pan.style.gridTemplateRows = `
            [tl-start tm-start tr-start]
            20px
            [tl-end tm-end tr-end ml-start mm-start mr-start]
            1fr
            [ml-end mm-end mr-end bl-start bm-start br-start]
            20px
            [bl-end bm-end br-end]
        `;
    }
    __set_bar_style(area) {
        const elm = document.createElement('div');
        elm.style.backgroundColor = 'lightcyan';
        elm.style.userSelect = 'none';
        elm.style.gridArea = area;
        this.__set_move_dialog(elm);
        this.__pan.appendChild(elm);
        return elm;
    }
    __set_corner_style(area) {
        const elm = document.createElement('div');
        elm.style.backgroundColor = 'cyan';
        elm.style.userSelect = 'none';
        elm.style.gridArea = area;
        if (elm.id === undefined || elm.id === '')
            elm.id = area;
        this.__rsz[elm.id] = new resizeDom(elm, this.__dia);
        this.__set_zoom_dialog(elm);
        this.__pan.appendChild(elm);
        return elm;
    }
    __set_zoom_dialog(elm) {
        elm.setAttribute('draggable', 'true');
        elm.addEventListener('dragstart', (ev) => {
            this.__mop = { x: 0, y: 0 };
            this.__mop.x = ev.pageX;
            this.__mop.y = ev.pageY;
            if (elm.id in this.__rsz)
                this.__rsz[elm.id].reset();
        });
        elm.addEventListener('drag', (ev) => {
            if (ev.pageX === this.__mop.x && ev.pageY === this.__mop.y)
                return;
            const resizeX = ev.pageX - this.__mop.x;
            const resizeY = ev.pageY - this.__mop.y;
            if (elm.id in this.__rsz)
                this.__rsz[elm.id].resize(resizeX, resizeY);
        });
        elm.addEventListener('dragend', (ev) => {
            const resizeX = ev.pageX - this.__mop.x;
            const resizeY = ev.pageY - this.__mop.y;
            if (elm.id in this.__rsz)
                this.__rsz[elm.id].resize(resizeX, resizeY);
        });
    }
    __set_move_dialog(elm) {
        elm.setAttribute('draggable', 'true');
        elm.addEventListener('dragstart', (ev) => {
            this.__mop = { x: 0, y: 0 };
            this.__mop.y = this.__dia.offsetTop - ev.pageY;
            this.__mop.x = this.__dia.offsetLeft - ev.pageX;
        });
        elm.addEventListener('drag', (ev) => {
            if (ev.x === 0 && ev.y === 0)
                return;
            const top = ev.pageY + this.__mop.y;
            const left = ev.pageX + this.__mop.x;
            this.__dia.style.top = top + 'px';
            this.__dia.style.left = left + 'px';
        });
        elm.addEventListener('dragend', (ev) => {
            this.__mop = { x: 0, y: 0 };
        });
    }
    getWindow() {
        return this.__ctx;
    }
    setWindow(ctx) {
        try {
            this.__pan.removeChild(this.__ctx);
            this.__pan.appendChild(ctx);
            return this.__ctx = ctx;
        }
        catch (err) { }
        return ctx;
    }
    setZoomElm(elm) {
        for (const ii in this.__rsz)
            this.__rsz[ii].setZoomElm(elm);
    }
    clrZoom() {
        for (const ii in this.__rsz)
            this.__rsz[ii].clrZoomElm();
    }
    show() {
        try {
            this.__dia.show();
        }
        catch (err) { }
    }
    hide() {
        try {
            this.__dia.close();
        }
        catch (err) { }
    }
    display(yn) {
        yn ? this.show() : this.hide();
    }
}
exports.C_Dialog = C_Dialog;
class resizeDom {
    constructor(cnr, dia) {
        this.__dia = dia;
        this.__cnr = cnr;
        this.__can = { x: false, y: false };
        this.__top = { x: 0, y: 0 };
        this.__siz = { x: 0, y: 0 };
    }
    setZoomElm(trg) {
        this.__trg = trg;
    }
    clrZoomElm() {
        this.__trg = undefined;
    }
    reset() {
        if (this.__trg === undefined)
            return;
        try {
            const parent = this.__cnr.offsetParent;
            this.__can.x = this.__cnr.offsetLeft < ((parent === null || parent === void 0 ? void 0 : parent.offsetWidth) / 2);
            this.__can.y = this.__cnr.offsetTop < ((parent === null || parent === void 0 ? void 0 : parent.offsetHeight) / 2);
        }
        catch (err) {
            this.__can.x = this.__can.y = false;
        }
        this.__top.x = this.__dia.offsetLeft;
        this.__top.y = this.__dia.offsetTop;
        this.__siz.x = this.__trg.offsetWidth;
        this.__siz.y = this.__trg.offsetHeight;
    }
    resize(resizeX, resizeY) {
        if (this.__trg === undefined)
            return;
        if (this.__can.x) {
            resizeX = -resizeX;
            this.__dia.style.left = this.__top.x - resizeX + 'px';
        }
        if (this.__can.y) {
            resizeY = -resizeY;
            this.__dia.style.top = this.__top.y - resizeY + 'px';
        }
        this.__trg.style.width = this.__siz.x + resizeX + 'px';
        this.__trg.style.height = this.__siz.y + resizeY + 'px';
    }
}


/***/ }),

/***/ "./src/d_cmn/F_POST.ts":
/*!*****************************!*\
  !*** ./src/d_cmn/F_POST.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.POST_and_get_JSON = POST_and_get_JSON;
exports.POST_and_get_JSON3 = POST_and_get_JSON3;
exports.POST_and_get_JSON2 = POST_and_get_JSON2;
exports.POST_and_move_page = POST_and_move_page;
const global_1 = __webpack_require__(/*! ../d_cmn/global */ "./src/d_cmn/global.ts");
function POST_and_get_JSON(url, opt) {
    return __awaiter(this, void 0, void 0, function* () {
        const form_data = opt.toFormData();
        if (form_data === undefined)
            return undefined;
        var res;
        try {
            res = yield fetch(url, {
                method: 'POST',
                cache: 'no-cache',
                headers: {},
                body: opt.toFormData()
            });
            if (!res.ok) {
                throw new Error(`レスポンスステータス (${res.status})`);
            }
        }
        catch (err) {
            global_1.g_mes.warning_message('通信エラー: ' + err);
            return undefined;
        }
        const monitor = true;
        return res.text()
            .then(txt => {
            const tx = txt.slice();
            if (monitor) {
                global_1.g_alert.set_message(`POST URL:`, url);
                global_1.g_alert.set_message(`POST OPT:`, opt.toString());
                global_1.g_alert.set_message(`POST DATA:`, tx);
            }
            try {
                return JSON.parse(txt);
            }
            catch (err) {
                global_1.g_mes.warning_message('JSON形式のデコードエラー');
                (0, global_1._alert)(tx);
                return undefined;
            }
        });
    });
}
function POST_and_get_JSON3(url, opt) {
    return __awaiter(this, void 0, void 0, function* () {
        const form_data = opt.toFormData();
        if (form_data === undefined)
            return undefined;
        var res;
        try {
            res = yield fetch(url, {
                method: 'POST',
                cache: 'no-cache',
                headers: {
                    "Content-Type": "application/json"
                },
                body: opt.toJSON()
            });
            if (!res.ok) {
                throw new Error(`レスポンスステータス (${res.status})`);
            }
        }
        catch (err) {
            global_1.g_mes.warning_message('通信エラー: ' + err);
            return undefined;
        }
        const monitor = true;
        return res.text()
            .then(txt => {
            const tx = txt.slice();
            if (monitor) {
                global_1.g_alert.set_message(`POST URL:`, url);
                global_1.g_alert.set_message(`POST OPT:`, opt.toString());
                global_1.g_alert.set_message(`POST DATA:`, tx);
            }
            try {
                return JSON.parse(txt);
            }
            catch (err) {
                global_1.g_mes.warning_message('JSON形式のデコードエラー');
                (0, global_1._alert)(tx);
                return undefined;
            }
        });
    });
}
function POST_and_get_JSON2(url, opt) {
    return __awaiter(this, void 0, void 0, function* () {
        const reqObj = new XMLHttpRequest();
        try {
            reqObj.open("POST", url, false);
            reqObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            reqObj.send(opt.toFormData());
        }
        catch (err) {
            global_1.g_mes.warning_message(`通信エラー: ${reqObj.status}`);
            return undefined;
        }
        const txt = reqObj.responseText;
        const monitor = true;
        if (monitor) {
            global_1.g_alert.set_message(`POST URL:`, url);
            global_1.g_alert.set_message(`POST OPT:`, opt.toString());
            global_1.g_alert.set_message(`POST DATA:`, txt);
        }
        if (Number(reqObj.status) > 399) {
            global_1.g_mes.warning_message(`レスポンスステータス: ${reqObj.status}`);
            return undefined;
        }
        try {
            return JSON.parse(txt);
        }
        catch (err) {
            global_1.g_mes.warning_message('JSON形式のデコードエラー: ' + err);
            (0, global_1._alert)(txt);
            return undefined;
        }
    });
}
function POST_and_move_page(url, opt) {
    create_form(url, opt).submit();
}
function create_form(url, opt) {
    const form = document.createElement('form');
    form.id = 'dummy_form_' + new Date().valueOf().toString();
    form.method = 'POST';
    form.action = url;
    form.style.display = 'none';
    for (var key of opt.get_keys()) {
        create_input(form, form.id, key, opt.get(key));
    }
    document.body.appendChild(form);
    return form;
}
function create_input(form, fid, name, value) {
    const i = document.createElement('input');
    i.type = 'hidden';
    i.name = name;
    i.value = value;
    i.style.display = 'none';
    i.setAttribute('for', fid);
    form.appendChild(i);
    return i;
}


/***/ }),

/***/ "./src/d_cmn/F_load_and_save.ts":
/*!**************************************!*\
  !*** ./src/d_cmn/F_load_and_save.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.get_mai_maze = get_mai_maze;
exports.get_mai_guld = get_mai_guld;
exports.get_new_maze = get_new_maze;
exports.get_save_info = get_save_info;
exports.get_maze_info = get_maze_info;
exports.get_new_hero = get_new_hero;
exports.tmp_load = tmp_load;
exports.instant_load = instant_load;
exports.UD_load = UD_load;
exports.before_load = before_load;
exports.general_load = general_load;
exports.tmp_save = tmp_save;
exports.instant_save = instant_save;
exports.UD_save = UD_save;
exports.before_save = before_save;
exports.general_save = general_save;
const C_SaveData_1 = __webpack_require__(/*! ../d_mdl/C_SaveData */ "./src/d_mdl/C_SaveData.ts");
const C_Maze_1 = __webpack_require__(/*! ../d_mdl/C_Maze */ "./src/d_mdl/C_Maze.ts");
const C_Hero_1 = __webpack_require__(/*! ../d_mdl/C_Hero */ "./src/d_mdl/C_Hero.ts");
const C_PointDir_1 = __webpack_require__(/*! ../d_mdl/C_PointDir */ "./src/d_mdl/C_PointDir.ts");
const C_MazeInfo_1 = __webpack_require__(/*! ../d_mdl/C_MazeInfo */ "./src/d_mdl/C_MazeInfo.ts");
const C_UrlOpt_1 = __webpack_require__(/*! ../d_utl/C_UrlOpt */ "./src/d_utl/C_UrlOpt.ts");
const F_POST_1 = __webpack_require__(/*! ../d_cmn/F_POST */ "./src/d_cmn/F_POST.ts");
const global_1 = __webpack_require__(/*! ../d_cmn/global */ "./src/d_cmn/global.ts");
function get_mai_maze(callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const opt = new C_UrlOpt_1.C_UrlOpt();
        opt.set('mode', 'new_game');
        opt.set('pid', global_1.g_start_env.pid);
        return yield _get_new_game(global_1.g_url[global_1.g_url_new_maze], opt, callback);
    });
}
function get_mai_guld(callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const opt = new C_UrlOpt_1.C_UrlOpt();
        opt.set('mode', 'new_game');
        opt.set('pid', global_1.g_start_env.pid.toString());
        return yield _get_new_game(global_1.g_url[global_1.g_url_new_guld], opt, callback);
    });
}
function _get_new_game(url, opt, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        return yield ((_a = (0, F_POST_1.POST_and_get_JSON3)(url, opt)) === null || _a === void 0 ? void 0 : _a.then(jsonObj => {
            if (jsonObj.ecode === 0) {
                global_1.g_mes.normal_message('正常にロードされました');
                if (jsonObj.save === undefined) {
                    global_1.g_mes.warning_message("保存データが不正な形式でした\n" + jsonObj.emsg);
                    (0, global_1._alert)(jsonObj.emsg);
                    return undefined;
                }
                const monitor = false;
                if (monitor) {
                    if ((jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.save) !== undefined) {
                        (0, C_SaveData_1.alert_save_info)(jsonObj.save);
                        (0, C_SaveData_1.alert_save_detail)(jsonObj.save);
                    }
                }
                if (callback !== undefined)
                    callback(jsonObj);
                return jsonObj;
            }
            else {
                global_1.g_mes.warning_message("ロードできませんでした\n" + jsonObj.emsg);
                (0, global_1._alert)(jsonObj.emsg);
                return undefined;
            }
        }));
    });
}
function get_new_maze(maze_name, callback) {
    var _a;
    const opt = new C_UrlOpt_1.C_UrlOpt();
    opt.set('mode', 'new_maze');
    opt.set('pid', global_1.g_start_env.pid);
    opt.set('maze_name', maze_name);
    return (_a = (0, F_POST_1.POST_and_get_JSON3)(global_1.g_url[global_1.g_url_get_maze], opt)) === null || _a === void 0 ? void 0 : _a.then(jsonObj => {
        var _a, _b, _c, _d;
        if (jsonObj.ecode !== 0) {
            global_1.g_mes.warning_message("新迷宮データを受信できませんでした\n" + jsonObj.emsg);
            (0, global_1._alert)(jsonObj.emsg);
            return undefined;
        }
        if ((jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.data) === undefined) {
            global_1.g_mes.warning_message("受信データが不正な形式でした\n" + jsonObj.emsg);
            (0, global_1._alert)(jsonObj.emsg);
            return undefined;
        }
        if (((_a = jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.data) === null || _a === void 0 ? void 0 : _a.maze) === undefined) {
            global_1.g_mes.warning_message("新迷宮データが不正な形式でした\n" + jsonObj.emsg);
            (0, global_1._alert)(jsonObj.emsg);
            return undefined;
        }
        if (((_b = jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.data) === null || _b === void 0 ? void 0 : _b.pos) === undefined) {
            global_1.g_mes.warning_message("新迷宮の位置データが不正な形式でした\n" + jsonObj.emsg);
            (0, global_1._alert)(jsonObj.emsg);
            return undefined;
        }
        const monitor = false;
        if (monitor) {
            if (((_c = jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.data) === null || _c === void 0 ? void 0 : _c.maze) !== undefined)
                (0, C_Maze_1.alert_maze_info)(jsonObj.data.maze);
            if (((_d = jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.data) === null || _d === void 0 ? void 0 : _d.pos) !== undefined)
                (0, C_PointDir_1.alert_PD_info)(jsonObj.data.pos);
        }
        if (callback !== undefined)
            callback(jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.data);
        return jsonObj;
    });
}
function get_save_info(callback) {
    var _a;
    const opt = new C_UrlOpt_1.C_UrlOpt();
    opt.set('mode', 'save_info');
    opt.set('pid', global_1.g_start_env.pid);
    return (_a = (0, F_POST_1.POST_and_get_JSON3)(global_1.g_url[global_1.g_url_get_info], opt)) === null || _a === void 0 ? void 0 : _a.then(jsonObj => {
        if (jsonObj.ecode === 0) {
            global_1.g_mes.normal_message('正常にロードされました');
            if (jsonObj.save_info === undefined) {
                global_1.g_mes.warning_message("保存データが不正な形式でした\n" + jsonObj.emsg);
                (0, global_1._alert)(jsonObj.emsg);
                return undefined;
            }
            const monitor = false;
            if (monitor) {
                for (let save of jsonObj.save_info) {
                    if (save !== undefined) {
                        (0, C_SaveData_1.alert_save_info)(save);
                    }
                }
            }
            if (callback !== undefined)
                callback(jsonObj);
            return jsonObj;
        }
        else {
            global_1.g_mes.warning_message("ロードできませんでした\n" + jsonObj.emsg);
            (0, global_1._alert)(jsonObj.emsg);
            return undefined;
        }
    });
}
function get_maze_info(callback) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const opt = new C_UrlOpt_1.C_UrlOpt();
        opt.set('mode', 'maze_info');
        return yield ((_a = (0, F_POST_1.POST_and_get_JSON3)(global_1.g_url[global_1.g_url_all_maze], opt)) === null || _a === void 0 ? void 0 : _a.then(jsonObj => {
            var _a, _b, _c, _d;
            if (jsonObj.ecode === 0) {
                global_1.g_mes.normal_message('正常にロードされました');
                if (((_a = jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.data) === null || _a === void 0 ? void 0 : _a.mazeinfo) === undefined) {
                    global_1.g_mes.warning_message("迷宮情報が不正な形式でした\n" + jsonObj.emsg);
                    (0, global_1._alert)(jsonObj.emsg);
                    return undefined;
                }
                const monitor = false;
                if (monitor) {
                    if (((_b = jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.data) === null || _b === void 0 ? void 0 : _b.mazeinfo) !== undefined) {
                        for (const mazeinfo of jsonObj.data.mazeinfo) {
                            (0, C_MazeInfo_1.alert_mazeinfo_info)(mazeinfo);
                        }
                    }
                }
                if (callback !== undefined)
                    callback((_c = jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.data) === null || _c === void 0 ? void 0 : _c.mazeinfo);
                return (_d = jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.data) === null || _d === void 0 ? void 0 : _d.mazeinfo;
            }
            else {
                global_1.g_mes.warning_message("ロードできませんでした\n" + jsonObj.emsg);
                (0, global_1._alert)(jsonObj.emsg);
                return undefined;
            }
        }));
    });
}
function get_new_hero() {
    return __awaiter(this, arguments, void 0, function* (num = 20, callback) {
        var _a;
        const opt = new C_UrlOpt_1.C_UrlOpt();
        opt.set('mode', 'new_hero');
        opt.set('nmbr', num.toString());
        return yield ((_a = (0, F_POST_1.POST_and_get_JSON3)(global_1.g_url[global_1.g_url_all_hres], opt)) === null || _a === void 0 ? void 0 : _a.then(jsonObj => {
            var _a, _b;
            if (jsonObj.ecode === 0) {
                global_1.g_mes.normal_message('正常にロードされました');
                if (((_a = jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.data) === null || _a === void 0 ? void 0 : _a.hres) === undefined) {
                    global_1.g_mes.warning_message("ヒーロー・データが不正な形式でした\n" + jsonObj.emsg);
                    (0, global_1._alert)(jsonObj.emsg);
                    return;
                }
                const monitor = false;
                if (monitor) {
                    if (((_b = jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.data) === null || _b === void 0 ? void 0 : _b.hres) !== undefined)
                        (0, C_Hero_1.alert_hres_info)(jsonObj.data.hres);
                }
                if (callback !== undefined)
                    callback(jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.data);
                return jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.data;
            }
            else {
                global_1.g_mes.warning_message("ロードできませんでした\n" + jsonObj.emsg);
                (0, global_1._alert)(jsonObj.emsg);
                return undefined;
            }
        }));
    });
}
function tmp_load(opt, callback) {
    opt !== null && opt !== void 0 ? opt : (opt = new C_UrlOpt_1.C_UrlOpt());
    opt.set('mode', 'tmp_load');
    opt.set('pid', global_1.g_start_env.pid);
    opt.set('uno', 100);
    return __auto_load(opt, callback);
}
function instant_load(opt, callback) {
    opt !== null && opt !== void 0 ? opt : (opt = new C_UrlOpt_1.C_UrlOpt());
    opt.set('mode', 'instant_load');
    opt.set('pid', global_1.g_start_env.pid);
    opt.set('uno', 101);
    return __auto_load(opt, callback);
}
function UD_load(opt, callback) {
    opt !== null && opt !== void 0 ? opt : (opt = new C_UrlOpt_1.C_UrlOpt());
    opt.set('mode', 'UD_load');
    opt.set('pid', global_1.g_start_env.pid);
    opt.set('uno', 102);
    return __auto_load(opt, callback);
}
function before_load(opt, callback) {
    opt !== null && opt !== void 0 ? opt : (opt = new C_UrlOpt_1.C_UrlOpt());
    opt.set('mode', 'before_load');
    opt.set('pid', global_1.g_start_env.pid);
    opt.set('uno', 103);
    return __auto_load(opt, callback);
}
function general_load(uniq_no, opt, callback) {
    opt !== null && opt !== void 0 ? opt : (opt = new C_UrlOpt_1.C_UrlOpt());
    opt.set('mode', 'general_load');
    opt.set('pid', global_1.g_start_env.pid);
    opt.set('uno', uniq_no);
    return __auto_load(opt, callback);
}
function __auto_load(opt, callback) {
    var _a;
    return (_a = (0, F_POST_1.POST_and_get_JSON3)(global_1.g_url[global_1.g_url_get_data], opt)) === null || _a === void 0 ? void 0 : _a.then(jsonObj => {
        if (jsonObj.ecode === 0) {
            global_1.g_mes.normal_message('正常にロードされました');
            if ((jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.save) === undefined) {
                global_1.g_mes.warning_message("受信した保存データが不正な形式でした\n" + jsonObj.emsg);
                (0, global_1._alert)(jsonObj.emsg);
                return undefined;
            }
            const monitor = false;
            if (monitor) {
                if ((jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.save) !== undefined) {
                    (0, C_SaveData_1.alert_save_info)(jsonObj.save);
                    (0, C_SaveData_1.alert_save_detail)(jsonObj.save);
                }
            }
            if (callback !== undefined)
                callback(jsonObj);
            return jsonObj;
        }
        else {
            global_1.g_mes.warning_message(`ロードできませんでした${jsonObj.ecode}\n` + jsonObj.emsg);
            (0, global_1._alert)(jsonObj.emsg);
            return undefined;
        }
    });
}
function tmp_save(opt, callback) {
    opt !== null && opt !== void 0 ? opt : (opt = new C_UrlOpt_1.C_UrlOpt());
    opt.set('mode', 'tmp_save');
    opt.set('pid', global_1.g_start_env.pid);
    opt.set('uno', 100);
    return __auto_save(opt, callback);
}
function instant_save(opt, callback) {
    opt !== null && opt !== void 0 ? opt : (opt = new C_UrlOpt_1.C_UrlOpt());
    opt.set('mode', 'instant_save');
    opt.set('pid', global_1.g_start_env.pid);
    opt.set('uno', 101);
    return __auto_save(opt, callback);
}
function UD_save(opt, callback) {
    opt !== null && opt !== void 0 ? opt : (opt = new C_UrlOpt_1.C_UrlOpt());
    opt.set('mode', 'UD_save');
    opt.set('pid', global_1.g_start_env.pid);
    opt.set('uno', 102);
    return __auto_save(opt, callback);
}
function before_save(opt, callback) {
    opt !== null && opt !== void 0 ? opt : (opt = new C_UrlOpt_1.C_UrlOpt());
    opt.set('mode', 'before_save');
    opt.set('pid', global_1.g_start_env.pid);
    opt.set('uno', 103);
    return __auto_save(opt, callback);
}
function general_save(opt, callback) {
    global_1.g_save.auto_mode = false;
    opt !== null && opt !== void 0 ? opt : (opt = new C_UrlOpt_1.C_UrlOpt());
    opt.set('mode', 'general_save');
    opt.set('pid', global_1.g_start_env.pid);
    return __save(opt, callback);
}
function __auto_save(opt, callback) {
    global_1.g_save.auto_mode = true;
    return __save(opt, callback);
}
function __save(opt, callback) {
    var _a;
    if (!opt.isset('save')) {
        opt.set('save', JSON.stringify(global_1.g_save.encode(), null, "\t"));
    }
    const move_page = false;
    if (move_page) {
        (0, F_POST_1.POST_and_move_page)(global_1.g_url[global_1.g_url_check_JSON], opt);
    }
    return (_a = (0, F_POST_1.POST_and_get_JSON3)(global_1.g_url[global_1.g_url_put_data], opt)) === null || _a === void 0 ? void 0 : _a.then(jsonObj => {
        if ((jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.ecode) === 0) {
            if ((jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.save) === undefined) {
                global_1.g_mes.warning_message("受信した保存データが不正な形式でした\n" + jsonObj.emsg);
                (0, global_1._alert)(jsonObj.emsg);
                return undefined;
            }
            const monitor = false;
            if (monitor) {
                if ((jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.save) !== undefined) {
                    (0, C_SaveData_1.alert_save_info)(jsonObj.save);
                    (0, C_SaveData_1.alert_save_detail)(jsonObj.save);
                }
            }
            if (callback !== undefined)
                callback(jsonObj);
            global_1.g_mes.normal_message('正常にセーブされました');
            return jsonObj;
        }
        else {
            global_1.g_mes.warning_message("セーブできませんでした\n" + jsonObj.emsg);
            (0, global_1._alert)(jsonObj.emsg);
            return undefined;
        }
    }).catch(err => {
        global_1.g_mes.warning_message('POST読み込みに失敗しました(POST_AND_JSON3)');
        return undefined;
    });
}


/***/ }),

/***/ "./src/d_cmn/global.ts":
/*!*****************************!*\
  !*** ./src/d_cmn/global.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.g_save = exports.g_mes = exports.g_start_env = exports.g_ready_games = exports.g_alert = exports.g_debug = exports.g_my_url = exports.g_url = exports.g_url_gt2_save = exports.g_url_gt2_maze = exports.g_url_gt2_guld = exports.g_url_rcd_save = exports.g_url_rcd_load = exports.g_url_rcd_list = exports.g_url_check_JSON = exports.g_url_put_data = exports.g_url_get_data = exports.g_url_get_info = exports.g_url_mai_guld = exports.g_url_mai_maze = exports.g_url_all_save = exports.g_url_put_save = exports.g_url_get_save = exports.g_url_all_hres = exports.g_url_new_guld = exports.g_url_all_maze = exports.g_url_new_maze = exports.g_url_get_maze = void 0;
exports.init_after_loaded_DOM_in_common = init_after_loaded_DOM_in_common;
exports._alert = _alert;
exports.g_url_get_maze = 0;
exports.g_url_new_maze = 1;
exports.g_url_all_maze = 2;
exports.g_url_new_guld = 5;
exports.g_url_all_hres = 6;
exports.g_url_get_save = 7;
exports.g_url_put_save = 8;
exports.g_url_all_save = 9;
exports.g_url_mai_maze = 10;
exports.g_url_mai_guld = 11;
exports.g_url_get_info = 12;
exports.g_url_get_data = 13;
exports.g_url_put_data = 15;
exports.g_url_check_JSON = 16;
exports.g_url_rcd_list = 17;
exports.g_url_rcd_load = 18;
exports.g_url_rcd_save = 19;
exports.g_url_gt2_guld = 20;
exports.g_url_gt2_maze = 21;
exports.g_url_gt2_save = 22;
exports.g_url = new Array(23);
const C_OnOffButton_1 = __webpack_require__(/*! ../d_ctl/C_OnOffButton */ "./src/d_ctl/C_OnOffButton.ts");
const C_AlertLog_1 = __webpack_require__(/*! ../d_cmn/C_AlertLog */ "./src/d_cmn/C_AlertLog.ts");
class C_ReadyGames {
    constructor() {
        this.flgs = {};
        this.flgs.loadedDOM = false;
        this.flgs.getWindow = false;
        this.func = () => { };
    }
    setLoadedDOM() {
        this.flgs.loadedDOM = true;
        this.check_and_do();
    }
    setGetWindow() {
        this.flgs.getWindow = true;
        this.check_and_do();
    }
    setFunction(func) {
        this.func = func;
        this.check_and_do();
    }
    check_and_do() {
        if (this.func === undefined)
            return;
        for (let ii in this.flgs)
            if (!this.flgs[ii])
                return;
        this.func();
    }
}
exports.g_ready_games = new C_ReadyGames();
exports.g_start_env = { mode: '', pid: -1, opt: '' };
const C_DisplayMessage_1 = __webpack_require__(/*! ../d_vie/C_DisplayMessage */ "./src/d_vie/C_DisplayMessage.ts");
const C_SaveData_1 = __webpack_require__(/*! ../d_mdl/C_SaveData */ "./src/d_mdl/C_SaveData.ts");
exports.g_save = new C_SaveData_1.C_SaveData();
function init_after_loaded_DOM_in_common(debug_id = 'debug_mode', msg_id = 'pane_sytm_logs') {
    const con = document.getElementById(msg_id);
    exports.g_mes = C_DisplayMessage_1.C_DisplayMessage.getObj(con, 'client_message');
    exports.g_alert = C_AlertLog_1.C_AlertLog.getObj();
    const btn = document.getElementById(debug_id);
    exports.g_debug = C_OnOffButton_1.C_OnOffButton.getObj(btn, {});
}
function _alert(txt, page_size = 250) {
    for (let i = 0; i < txt.length; i += page_size) {
        if (!window.confirm(txt.substring(i, i + page_size)))
            break;
    }
}
const tsCaller = (() => {
    return {
        get_init_data: (my_url) => {
            exports.g_my_url = my_url;
            const url_top = parent_url(my_url);
            const exp_top = parent_url(url_top) + "/maiex";
            exports.g_url[exports.g_url_gt2_save] = url_top + "/_JSON_mai_save.php";
            exports.g_url[exports.g_url_gt2_maze] = url_top + "/_JSON_mai_maze.php";
            exports.g_url[exports.g_url_gt2_guld] = url_top + "/_JSON_mai_guld.php";
            exports.g_url[exports.g_url_mai_maze] = url_top + "/mai_maze.php";
            exports.g_url[exports.g_url_mai_guld] = url_top + "/mai_guld.php";
            exports.g_url[exports.g_url_new_maze] = exp_top + "/maze/newMaze";
            exports.g_url[exports.g_url_get_maze] = exp_top + "/maze/getMaze";
            exports.g_url[exports.g_url_all_maze] = exp_top + "/maze/allMaze";
            exports.g_url[exports.g_url_new_guld] = exp_top + "/guld/newGuld";
            exports.g_url[exports.g_url_all_hres] = exp_top + "/guld/allHres";
            exports.g_url[exports.g_url_get_info] = exp_top + "/ldsv/_info";
            exports.g_url[exports.g_url_get_data] = exp_top + "/ldsv/_load";
            exports.g_url[exports.g_url_put_data] = exp_top + "/ldsv/_save";
            exports.g_url[exports.g_url_check_JSON] = url_top + "/check_JSON.php";
        },
        start_game: (mode, my_url, player_id, opt) => {
            tsCaller.get_init_data(my_url);
            exports.g_start_env.mode = mode;
            exports.g_start_env.pid = player_id;
            exports.g_start_env.opt = opt;
            exports.g_ready_games.setGetWindow();
        }
    };
})();
function parent_url(url) {
    let re = /\/[^\/]+?$/;
    return url.replace(re, '');
}
window.tsCall = tsCaller;


/***/ }),

/***/ "./src/d_ctl/C_CtlCursor.ts":
/*!**********************************!*\
  !*** ./src/d_ctl/C_CtlCursor.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_CtlCursor = void 0;
const F_Math_1 = __webpack_require__(/*! ../d_utl/F_Math */ "./src/d_utl/F_Math.ts");
const global_1 = __webpack_require__(/*! ../d_cmn/global */ "./src/d_cmn/global.ts");
class C_CtlCursor {
    constructor(list) {
        var _a;
        (_a = C_CtlCursor.me) !== null && _a !== void 0 ? _a : (C_CtlCursor.me = {});
        this._id = '__dmy__';
        this._list = undefined;
        this._leng = 0;
        this._cols = 1;
        this._indx = 0;
        C_CtlCursor.me[this._id] = this;
    }
    static getObj(list) {
        var _a, _b;
        var _c;
        (_a = this.me) !== null && _a !== void 0 ? _a : (this.me = {});
        const id = list !== undefined ? list.id : '__dmy__';
        (_b = (_c = this.me)[id]) !== null && _b !== void 0 ? _b : (_c[id] = new C_CtlCursor(list));
        if (list !== undefined)
            this.me[id].set(list);
        return this.me[id];
    }
    set(list) {
        this._id = list.id;
        this._list = list;
        this._leng = this.__get_leng();
        this._cols = this.__get_cols();
        this._indx = 0;
        this.high_light_on();
        return this;
    }
    uid() {
        return this._id;
    }
    leng() {
        return this._leng;
    }
    rows() {
        return this.__get_rows();
    }
    cols() {
        return this._cols;
    }
    pos() {
        return this._indx;
    }
    set_pos(indx) {
        if (indx < 0)
            indx = 0;
        if (indx >= this._leng)
            indx = this._leng - 1;
        this._indx = indx;
        this.high_light_on();
        return this;
    }
    pos_U() {
        if (this._list === undefined)
            return 0;
        let indx = this._indx;
        const rows = this.__get_rows();
        const cur_row = indx % rows;
        if (cur_row !== 0) {
            --indx;
        }
        else {
            indx += rows - 1;
            while (indx > this._leng - 1) {
                --indx;
            }
        }
        this._indx = indx;
        this.high_light_on();
        return this._indx;
    }
    pos_D() {
        if (this._list === undefined)
            return 0;
        let indx = this._indx;
        const rows = this.__get_rows();
        const cur_row = indx % rows;
        if (cur_row !== rows - 1 && indx !== this._leng - 1) {
            ++indx;
        }
        else {
            indx -= rows - 1;
            while (indx % rows !== 0 && indx < this._leng - 1) {
                ++indx;
            }
        }
        this._indx = indx;
        this.high_light_on();
        return this._indx;
    }
    pos_L() {
        if (this._list === undefined)
            return 0;
        let indx = this._indx;
        const rows = this.__get_rows();
        if (indx > rows - 1) {
            indx -= rows;
        }
        else {
            const vurtual_list_leng = this._cols * rows;
            indx += vurtual_list_leng - rows;
            while (indx > this._leng - 1) {
                indx -= rows;
                if (indx < 0) {
                    indx = 0;
                    break;
                }
            }
        }
        this._indx = indx;
        this.high_light_on();
        return this._indx;
    }
    pos_R() {
        if (this._list === undefined)
            return 0;
        let indx = this._indx;
        const rows = this.__get_rows();
        if (indx < this._leng - rows) {
            indx += rows;
        }
        else {
            const old_indx = indx;
            const vurtual_list_leng = this._cols * rows;
            indx -= vurtual_list_leng - rows;
            if (indx < 0) {
                indx += rows;
                if (indx < 0 || indx > this._leng - 1)
                    indx = (0, F_Math_1._floor)((old_indx + 1) / this._cols, 0);
            }
        }
        this._indx = indx;
        this.high_light_on();
        return this._indx;
    }
    __get_rows() {
        return (0, F_Math_1._ceil)(this._leng / this._cols, 0);
    }
    __get_leng() {
        if (this._list === undefined)
            return 0;
        try {
            return this._list.children.length;
        }
        catch (err) {
            return 1;
        }
    }
    __get_cols() {
        if (this._list === undefined)
            return 0;
        try {
            let cols = window.getComputedStyle(this._list).columnCount;
            return (0, F_Math_1._isNum)(cols) ? Number(cols) : 1;
        }
        catch (err) {
            return 1;
        }
    }
    high_light_on() {
        if (this._list === undefined)
            return;
        const children = this._list.children;
        const len = children.length;
        if (this._indx < 0 || this._indx > len - 1)
            return;
        for (let i = 0; i < len; i++) {
            const li = children.item(i);
            this.__high_light_on(li, false);
        }
        const li = children.item(this._indx);
        this.__high_light_on(li, true);
    }
    high_light_off() {
        if (this._list === undefined)
            return;
        const children = this._list.children;
        const len = children.length;
        for (var i = 0; i < len; i++) {
            const li = children.item(i);
            this.__high_light_on(li, false);
        }
    }
    __high_light_on(elm, isOn) {
        var _a;
        if (elm === null)
            return;
        const perentStyle = window.getComputedStyle((_a = elm.parentElement) !== null && _a !== void 0 ? _a : elm);
        const fw_color = perentStyle.color;
        const bg_color = perentStyle.backgroundColor;
        elm.style.color = isOn ? bg_color : fw_color;
        elm.style.backgroundColor = isOn ? fw_color : bg_color;
        elm.style.fontWeight = isOn ? 'bold' : 'normal';
        for (var j = 0; j < elm.children.length; j++) {
            const p = elm.children.item(j);
            if (isOn) {
                p.style.fontWeight = 'normal';
                p.style.color = fw_color;
                p.style.backgroundColor = bg_color;
                p.style.display = 'block';
            }
            else {
                p.style.display = 'none';
            }
        }
    }
    alert() {
        (0, global_1._alert)("CtlCursor: "
            + "\nid   = " + this._id
            + "\nindx = " + this._indx
            + "\nleng = " + this._leng
            + "\ncols = " + this._cols);
    }
    ;
}
exports.C_CtlCursor = C_CtlCursor;


/***/ }),

/***/ "./src/d_ctl/C_OnOffButton.ts":
/*!************************************!*\
  !*** ./src/d_ctl/C_OnOffButton.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_OnOffButton = void 0;
const F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "./src/d_utl/F_Rand.ts");
class C_OnOffButton {
    static getObj(elm, ooo) {
        var _a, _b;
        var _c, _d;
        (_a = this.me) !== null && _a !== void 0 ? _a : (this.me = {});
        (_b = (_c = this.me)[_d = elm.id]) !== null && _b !== void 0 ? _b : (_c[_d] = new C_OnOffButton(elm, ooo));
        return this.me[elm.id];
    }
    constructor(elm, ooo) {
        this.def_ooo = {
            onName: 'ON',
            offName: 'off',
            onClass: '_toggle_on',
            offClass: '_toggle_off',
        };
        this.fnc = {};
        this.ooo = this.def_ooo;
        this.yn = false;
        if (elm.name === undefined || elm.name === '')
            elm.name = elm.id;
        this.elm = elm;
        this.elm.addEventListener("click", (event) => { this.toggle(); }, false);
        if (ooo !== undefined)
            this.setObj(ooo);
    }
    setObj(ooo) {
        var _a, _b, _c, _d, _e;
        var _f, _g, _h, _j;
        try {
            this.yn = (_a = ooo.yn) !== null && _a !== void 0 ? _a : false;
            this.ooo = ooo;
            (_b = (_f = this.ooo).onName) !== null && _b !== void 0 ? _b : (_f.onName = this.def_ooo.onName);
            (_c = (_g = this.ooo).offName) !== null && _c !== void 0 ? _c : (_g.offName = this.def_ooo.offName);
            (_d = (_h = this.ooo).onClass) !== null && _d !== void 0 ? _d : (_h.onClass = this.def_ooo.onClass);
            (_e = (_j = this.ooo).offClass) !== null && _e !== void 0 ? _e : (_j.offClass = this.def_ooo.offClass);
            this._setStyle(this.yn);
        }
        catch (_k) { }
        return this;
    }
    _setStyle(yn) {
        this.yn = yn;
        const ooo = this.ooo;
        this.elm.value = yn ? 'on' : 'off';
        this.elm.innerHTML = yn ? ooo.onName : ooo.offName;
        this.elm.classList.remove(yn ? ooo.offClass : ooo.onClass);
        this.elm.classList.add(yn ? ooo.onClass : ooo.offClass);
    }
    setON() { var _a; return (_a = this._setYN(true)) !== null && _a !== void 0 ? _a : false; }
    ;
    setOFF() { var _a; return (_a = this._setYN(false)) !== null && _a !== void 0 ? _a : false; }
    ;
    toggle() { var _a; return (_a = this._setYN(!this.yn)) !== null && _a !== void 0 ? _a : false; }
    _setYN(yn) {
        this._setStyle(yn);
        let tf = true;
        for (const i in this.fnc)
            tf && (tf = this.fnc[i](yn));
        return tf;
    }
    id() { return this.elm.id; }
    ;
    isON() { return this.yn; }
    addFnc(fnc) {
        const id = 'oofunc_' + (0, F_Rand_1._get_uuid)();
        this.fnc[id] = fnc;
        return id;
    }
    rmvFnc(fnc) {
        if (typeof fnc === 'string') {
            try {
                delete this.fnc[fnc];
                return true;
            }
            catch (err) {
                return false;
            }
        }
        for (const i in this.fnc)
            if (fnc === this.fnc[i]) {
                delete this.fnc[i];
                return true;
            }
        return false;
    }
}
exports.C_OnOffButton = C_OnOffButton;


/***/ }),

/***/ "./src/d_mdl/C_Guild.ts":
/*!******************************!*\
  !*** ./src/d_mdl/C_Guild.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Guild = void 0;
exports.alert_guld_info = alert_guld_info;
const C_Location_1 = __webpack_require__(/*! ./C_Location */ "./src/d_mdl/C_Location.ts");
const C_Hero_1 = __webpack_require__(/*! ./C_Hero */ "./src/d_mdl/C_Hero.ts");
const F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "./src/d_utl/F_Rand.ts");
function alert_guld_info(a) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (a === undefined)
        return;
    alert("Guild Info:"
        + "\nid:       " + ((_a = a.id) !== null && _a !== void 0 ? _a : '?')
        + "\nuniq_id:  " + ((_b = a.uniq_id) !== null && _b !== void 0 ? _b : '?')
        + "\nsave_id:  " + ((_c = a.save_id) !== null && _c !== void 0 ? _c : '?')
        + "\nname:     " + ((_d = a.name) !== null && _d !== void 0 ? _d : '?')
        + "\ngold:     " + ((_e = a.gold) !== null && _e !== void 0 ? _e : 0)
        + "\nheroes:   " + ((_g = (_f = a.heroes) === null || _f === void 0 ? void 0 : _f.length) !== null && _g !== void 0 ? _g : '?')
        + "\n");
}
class C_Guild {
    constructor(a) {
        this.id = -1;
        this.uniq_id = 'mai_guld#' + (0, F_Rand_1._get_uuid)();
        this.save_id = -1;
        this.name = '';
        this.gold = 0;
        this.heroes = {};
        if (a !== undefined)
            this.decode(a);
    }
    uid() { return this.uniq_id; }
    get_lckd() { return C_Location_1.T_Lckd.Maze; }
    get_name() { return this.name; }
    hres() {
        const hres = [];
        for (let ii in this.heroes)
            hres.push(this.heroes[ii]);
        return hres;
    }
    clear_hres() {
        this.heroes = {};
    }
    add_hero(hero) {
        this.heroes[hero.uid()] = hero;
    }
    rmv_hero(hero) {
        delete this.heroes[hero.uid()];
    }
    encode() {
        const json_heroes = [];
        for (let ii in this.heroes)
            json_heroes.push(this.heroes[ii].encode());
        return {
            id: this.id,
            uniq_id: this.uniq_id,
            save_id: this.save_id,
            gold: this.gold,
            heroes: json_heroes,
            name: this.name,
        };
    }
    decode(a) {
        if (a === undefined)
            return this;
        if (a.id !== undefined)
            this.id = a.id;
        if (a.uniq_id !== undefined)
            this.uniq_id = a.uniq_id;
        if (a.save_id !== undefined)
            this.save_id = a.save_id;
        if (a.name !== undefined)
            this.name = a.name;
        if (a.gold !== undefined)
            this.gold;
        if (a.heroes !== undefined) {
            this.heroes = {};
            for (const json_hero of a.heroes) {
                const hero = new C_Hero_1.C_Hero(json_hero);
                this.heroes[hero.uid()] = hero;
            }
        }
        return this;
    }
    static encode_all(all_guld) {
        const all_guld_data = [];
        for (let guld of all_guld) {
            all_guld_data.push(guld.encode());
        }
        return all_guld_data;
    }
    static decode_all(all_guld_data) {
        const all_guld = [];
        for (let guld_data of all_guld_data) {
            all_guld.push((new C_Guild()).decode(guld_data));
        }
        return all_guld;
    }
    alert() {
        var _a, _b, _c, _d, _e, _f, _g;
        alert("Guild Info:"
            + "\nid:       " + ((_a = this.id) !== null && _a !== void 0 ? _a : '?')
            + "\nuniq_id:  " + ((_b = this.uniq_id) !== null && _b !== void 0 ? _b : '?')
            + "\nsave_id:  " + ((_c = this.save_id) !== null && _c !== void 0 ? _c : '?')
            + "\nname:     " + ((_d = this.name) !== null && _d !== void 0 ? _d : '?')
            + "\ngold:     " + ((_e = this.gold) !== null && _e !== void 0 ? _e : 0)
            + "\nheroes:   " + ((_g = (_f = this.heroes) === null || _f === void 0 ? void 0 : _f.length) !== null && _g !== void 0 ? _g : '?')
            + "\n");
    }
}
exports.C_Guild = C_Guild;


/***/ }),

/***/ "./src/d_mdl/C_Hero.ts":
/*!*****************************!*\
  !*** ./src/d_mdl/C_Hero.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Hero = void 0;
exports.alert_hres_info = alert_hres_info;
exports.alert_hero_info = alert_hero_info;
const C_HeroAbility_1 = __webpack_require__(/*! ./C_HeroAbility */ "./src/d_mdl/C_HeroAbility.ts");
const F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "./src/d_utl/F_Rand.ts");
function alert_hres_info(a) {
    if (a === undefined)
        return;
    alert('Number of Hero = ' + a.length.toString());
    for (var i in a) {
        if (a[i] === undefined)
            continue;
        alert_hero_info(a[i]);
    }
}
function alert_hero_info(a) {
    var _a, _b, _c, _d, _e;
    if (a === undefined)
        return;
    alert("Hero Info:\n"
        + "\nid:       " + ((_a = a === null || a === void 0 ? void 0 : a.id) !== null && _a !== void 0 ? _a : '?')
        + "\nuniq_id   " + ((_b = a === null || a === void 0 ? void 0 : a.uniq_id) !== null && _b !== void 0 ? _b : '?')
        + "\nname:     " + ((_c = a === null || a === void 0 ? void 0 : a.name) !== null && _c !== void 0 ? _c : '?')
        + "\nsave_id:  " + ((_d = a === null || a === void 0 ? void 0 : a.save_id) !== null && _d !== void 0 ? _d : '?')
        + "\nis_alive: " + ((_e = a === null || a === void 0 ? void 0 : a.is_alive) !== null && _e !== void 0 ? _e : '?')
        + "\n");
}
class C_Hero {
    constructor(a) {
        this.my_id = 0;
        this.my_name = 'No Name Hero';
        this.uniq_id = 'mai_hero#' + (0, F_Rand_1._get_uuid)();
        this.save_id = 0;
        this.sex = 0;
        this.age = 0;
        this.gold = 0;
        this.state = 0;
        this.lv = 0;
        this.val = {};
        this.abi_p = { bsc: new C_HeroAbility_1.C_HeroAbility(), ttl: new C_HeroAbility_1.C_HeroAbility(), now: new C_HeroAbility_1.C_HeroAbility() };
        this.abi_m = { bsc: new C_HeroAbility_1.C_HeroAbility(), ttl: new C_HeroAbility_1.C_HeroAbility(), now: new C_HeroAbility_1.C_HeroAbility() };
        this.is_alive = true;
        if (a !== undefined)
            this.decode(a);
    }
    set_prp(arg) {
        this.decode(arg);
    }
    get_uniq_id() { return this.uniq_id; }
    id() {
        return 'Hero_' + this.my_id.toString(16).padStart(5, '0');
    }
    uid() { return this.uniq_id; }
    name() {
        return this.my_name;
    }
    set_name(name) {
        this.my_name = name;
    }
    encode() {
        const ret = {
            id: this.my_id,
            uniq_id: this.uniq_id,
            name: this.my_name,
            save_id: this.save_id,
            sex: this.sex,
            age: this.age,
            state: this.state,
            lv: this.lv,
            gold: this.gold,
            val: this.val,
            abi_p_bsc: this.abi_p.bsc.encode(),
            abi_m_bsc: this.abi_m.bsc.encode(),
            is_alive: (this.is_alive) ? 'Y' : 'N',
        };
        return ret;
    }
    decode(a) {
        if (a === undefined)
            return this;
        if (a.id !== undefined)
            this.my_id = a.id;
        if (a.name !== undefined)
            this.my_name = a.name;
        if (a.uniq_id !== undefined)
            this.uniq_id = a.uniq_id;
        if (a.save_id !== undefined)
            this.save_id = a.save_id;
        if (a.sex !== undefined)
            this.sex = a.sex;
        if (a.age !== undefined)
            this.age = a.age;
        if (a.state !== undefined)
            this.state = a.state;
        if (a.lv !== undefined)
            this.lv = a.lv;
        if (a.gold !== undefined)
            this.gold = a.gold;
        if (a.is_alive !== undefined) {
            if (typeof a.is_alive === "boolean") {
                this.is_alive = a.is_alive;
            }
            else {
                this.is_alive = (a.is_alive != 'N') ? true : false;
            }
        }
        if (a.val !== undefined) {
            this.__decode_val(this.val, a.val);
        }
        if (a.abi_p_bsc !== undefined) {
            this.abi_p.bsc.decode(a.abi_p_bsc);
            this.abi_p.ttl = this.abi_p.now = this.abi_p.bsc;
        }
        if (a.abi_m_bsc !== undefined) {
            this.abi_m.bsc.decode(a.abi_m_bsc);
            this.abi_m.ttl = this.abi_m.now = this.abi_m.bsc;
        }
        return this;
    }
    __decode_val(d, s) {
        if (s.skp !== undefined)
            d.skp = this.__decode_skex(d.skp, s.skp);
        if (s.exp !== undefined)
            d.exp = this.__decode_skex(d.exp, s.exp);
        if (s.nxe !== undefined)
            d.nxe = s.nxe;
    }
    __decode_skex(a, s) {
        var _a, _b, _c, _d, _e;
        var d;
        if (a === undefined)
            d = { ttl: 0, now: 0 };
        else
            d = { ttl: (_a = a === null || a === void 0 ? void 0 : a.ttl) !== null && _a !== void 0 ? _a : 0, now: (_b = a === null || a === void 0 ? void 0 : a.now) !== null && _b !== void 0 ? _b : 0 };
        d.ttl = (_c = s.ttl) !== null && _c !== void 0 ? _c : d.ttl;
        d.now = (_e = (_d = s.now) !== null && _d !== void 0 ? _d : s.ttl) !== null && _e !== void 0 ? _e : d.now;
        return d;
    }
    static create_hero() {
        const new_hero = new C_Hero();
        new_hero.set_prp({ id: Math.floor(-1000.0 * Math.random()) });
        new_hero.set_prp({ name: new_hero.id() });
        return new_hero;
    }
    random_make() {
        this.my_id = 0;
        this.my_name = "冒険者 " + (0, F_Rand_1._random_str)(5);
        this.sex = (0, F_Rand_1._irand)(0, 1);
        this.age = (0, F_Rand_1._irand)(15, 25);
        this.state = 0;
        this.lv = 0;
        this.gold = (0, F_Rand_1._irand)(500, 1000);
        this.val = {
            skp: { ttl: 0, now: 0 },
            exp: { ttl: 0, now: 0 },
            'nxe': 1000
        };
        const abi_p_bsc = this.abi_p.bsc;
        abi_p_bsc.random_make();
        abi_p_bsc.add_xp_bonus((this.age - 15) * 10);
        abi_p_bsc.add_el_bonus((this.age - 15) * 5);
        abi_p_bsc.add_pr_bonus((this.age - 15) * 2);
        this.abi_p.bsc = abi_p_bsc;
        const abi_m_bsc = this.abi_m.bsc;
        abi_m_bsc.random_make();
        abi_m_bsc.add_xp_bonus((this.age - 15) * 10);
        abi_m_bsc.add_el_bonus((this.age - 15) * 5);
        abi_m_bsc.add_pr_bonus((this.age - 15) * 2);
        this.abi_m.bsc = abi_m_bsc;
        return this;
    }
    static encode_heroes(heroes) {
        const heroes_data = [];
        for (var hero of heroes) {
            heroes_data.push(hero.encode());
        }
        return heroes_data;
    }
    static decode_heroes(heroes_data) {
        const heroes = [];
        if (heroes_data !== undefined) {
            for (var hero_data of heroes_data) {
                if (hero_data !== undefined)
                    heroes.push(new C_Hero().decode(hero_data));
            }
        }
        return heroes;
    }
    alert() {
        var _a, _b, _c, _d, _e;
        alert("Hero Info:\n"
            + "\nid:       " + ((_a = this.id) !== null && _a !== void 0 ? _a : '?')
            + "\nuniq_id   " + ((_b = this.uniq_id) !== null && _b !== void 0 ? _b : '?')
            + "\nname:     " + ((_c = this.name) !== null && _c !== void 0 ? _c : '?')
            + "\nsave_id:  " + ((_d = this.save_id) !== null && _d !== void 0 ? _d : '?')
            + "\nis_alive: " + ((_e = this.is_alive) !== null && _e !== void 0 ? _e : '?')
            + "\n");
    }
    static alert_hres(a) {
        var _a;
        if (a === undefined)
            return;
        alert('Number of Hero = ' + a.length.toString());
        for (var i in a)
            (_a = a[i]) === null || _a === void 0 ? void 0 : _a.alert();
    }
}
exports.C_Hero = C_Hero;


/***/ }),

/***/ "./src/d_mdl/C_HeroAbility.ts":
/*!************************************!*\
  !*** ./src/d_mdl/C_HeroAbility.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_HeroAbility = void 0;
const F_Math_1 = __webpack_require__(/*! ../d_utl/F_Math */ "./src/d_utl/F_Math.ts");
const F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "./src/d_utl/F_Rand.ts");
class C_HeroAbility {
    constructor(a) {
        this.v = {
            xp: 0,
            atk: 0,
            def: 0,
            quc: 0,
            cnc: 0,
            str: 0,
            pwr: 0,
            vit: 0,
            dex: 0,
            agi: 0,
            tec: 0,
            luk: 0,
        };
        for (let idx in this.v) {
            this.v[idx] = 0;
        }
        if (a !== undefined)
            this.decode(a);
    }
    set_prp(a) {
        this.decode(a);
    }
    get(key) {
        if (!(key in this.v))
            return undefined;
        return this.v[key];
    }
    set(key, s) {
        if (!(key in this.v))
            return undefined;
        this.v[key] = s[key];
        return s[key];
    }
    xp_ttladd() {
        return (0, F_Math_1._round)(Math.floor(this.v.str + this.v.vit * 10.0), 0);
    }
    atk_ttladd() {
        return (0, F_Math_1._round)(Math.floor(this.v.str + this.v.pwr + this.v.tec) / 10.0, 0);
    }
    def_ttladd() {
        return (0, F_Math_1._round)(Math.floor(this.v.str + this.v.vit + this.v.tec) / 10.0, 0);
    }
    quc_ttladd() {
        return (0, F_Math_1._round)(Math.floor(this.v.agi + this.v.luk + this.v.tec) / 10.0, 0);
    }
    cnc_ttladd() {
        return (0, F_Math_1._round)(Math.floor(2.0 * this.v.luk + this.v.tec) / 10.0, 0);
    }
    bonus(key) {
        if (!(key in this.v))
            return 0;
        if (key === 'xp')
            return (0, F_Math_1._round)(Math.floor(this.v.xp / 100), 0);
        return (0, F_Math_1._round)(Math.floor(this.v[key] / 10.0), 0);
    }
    add(a) {
        for (let key in a) {
            this.v[key] += a[key];
        }
    }
    add_xp_bonus(bonus) {
        this.v.xp += bonus;
    }
    add_el_bonus(bonus) {
        this.v.atk += bonus;
        this.v.def += bonus;
        this.v.quc += bonus;
        this.v.cnc += bonus;
    }
    add_pr_bonus(bonus) {
        this.v.str += bonus;
        this.v.pwr += bonus;
        this.v.vit += bonus;
        this.v.dex += bonus;
        this.v.agi += bonus;
        this.v.tec += bonus;
        this.v.luk += bonus;
    }
    random_make() {
        this.v.xp = (0, F_Rand_1._inrand)(0, 1000, 3.0);
        this.v.atk = (0, F_Rand_1._inrand)(0, 100, 2.5);
        this.v.def = (0, F_Rand_1._inrand)(0, 100, 2.5);
        this.v.quc = (0, F_Rand_1._inrand)(0, 100, 2.5);
        this.v.cnc = (0, F_Rand_1._inrand)(0, 100, 2.5);
        this.v.str = (0, F_Rand_1._inrand)(0, 20, 2.0);
        this.v.pwr = (0, F_Rand_1._inrand)(0, 20, 2.0);
        this.v.vit = (0, F_Rand_1._inrand)(0, 20, 2.0);
        this.v.dex = (0, F_Rand_1._inrand)(0, 20, 2.0);
        this.v.agi = (0, F_Rand_1._inrand)(0, 20, 2.0);
        this.v.tec = (0, F_Rand_1._inrand)(0, 20, 2.0);
        this.v.luk = (0, F_Rand_1._inrand)(0, 20, 2.0);
        return this;
    }
    encode() {
        const a = {};
        for (let key in this.v)
            a[key] = this.v[key];
        return a;
    }
    decode(a) {
        for (let key in a) {
            if (key in this.v && a[key] !== undefined)
                this.v[key] = a[key];
        }
        return this;
    }
    static clone(s) {
        return new C_HeroAbility(s.encode());
    }
}
exports.C_HeroAbility = C_HeroAbility;


/***/ }),

/***/ "./src/d_mdl/C_Location.ts":
/*!*********************************!*\
  !*** ./src/d_mdl/C_Location.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Location = exports.T_Lckd = void 0;
const C_PointDir_1 = __webpack_require__(/*! ./C_PointDir */ "./src/d_mdl/C_PointDir.ts");
exports.T_Lckd = {
    Unkn: 0,
    Maze: 1,
    Guld: 2,
};
function _lckd_key(lckd) {
    var _a;
    return (_a = Object.keys(exports.T_Lckd).find(key => exports.T_Lckd[key] === lckd)) !== null && _a !== void 0 ? _a : "????";
}
class C_Location {
    constructor(json) {
        this.loc_kind = exports.T_Lckd.Unkn;
        this.loc_name = '';
        this.loc_uid = '';
        this.loc_pos = new C_PointDir_1.C_PointDir();
        if (json !== undefined)
            this.decode(json);
    }
    get_lckd_str() { return _lckd_key(this.loc_kind); }
    get_lckd() { return this.loc_kind; }
    get_name() { return this.loc_name; }
    get_uid() { return this.loc_uid; }
    set_lckd(lckd) {
        if (!(_lckd_key(lckd) in exports.T_Lckd))
            return undefined;
        this.loc_kind = lckd;
        return this;
    }
    set_name(name) { this.loc_name = name; }
    set_uid(uid) { this.loc_uid = uid; }
    set_lckd_str(lckd) {
        if (!(lckd in exports.T_Lckd))
            return undefined;
        this.loc_kind = exports.T_Lckd[lckd];
        return this;
    }
    get_p() {
        return this.loc_pos.get_p();
    }
    get_d() {
        return this.loc_pos.get_d();
    }
    get_pd() {
        return this.loc_pos.get_pd();
    }
    set_p(p) {
        if (this.loc_kind !== exports.T_Lckd.Maze)
            return undefined;
        if (this.loc_pos.set_p(p) === undefined)
            return undefined;
        return this.loc_pos;
    }
    set_d(d) {
        if (this.loc_kind !== exports.T_Lckd.Maze)
            return undefined;
        if (this.loc_pos.set_d(d) === undefined)
            return undefined;
        return this.loc_pos.d;
    }
    set_pd(pd) {
        if (this.loc_kind !== exports.T_Lckd.Maze)
            return undefined;
        if (this.loc_pos.set_pd(pd) === undefined)
            return undefined;
        return this.loc_pos;
    }
    encode() {
        return {
            kind: _lckd_key(this.loc_kind),
            name: this.loc_name,
            loc_uid: this.loc_uid,
            loc_pos: this.loc_pos.encode(),
        };
    }
    decode(j) {
        if (j === undefined)
            return this;
        if (j.kind === undefined || !(j.kind in exports.T_Lckd))
            return this;
        if (j.kind !== undefined)
            this.loc_kind = exports.T_Lckd[j.kind];
        if (j.name !== undefined)
            this.loc_name = j.name;
        if (j.loc_uid !== undefined)
            this.loc_uid = j.loc_uid;
        if (j.loc_pos !== undefined)
            this.loc_pos.decode(j.loc_pos);
        return this;
    }
}
exports.C_Location = C_Location;


/***/ }),

/***/ "./src/d_mdl/C_Maze.ts":
/*!*****************************!*\
  !*** ./src/d_mdl/C_Maze.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Maze = void 0;
exports.alert_maze_info = alert_maze_info;
const T_MzKind_1 = __webpack_require__(/*! ./T_MzKind */ "./src/d_mdl/T_MzKind.ts");
const C_MazeCell_1 = __webpack_require__(/*! ./C_MazeCell */ "./src/d_mdl/C_MazeCell.ts");
const C_MazeObj_1 = __webpack_require__(/*! ./C_MazeObj */ "./src/d_mdl/C_MazeObj.ts");
const C_Point_1 = __webpack_require__(/*! ./C_Point */ "./src/d_mdl/C_Point.ts");
const C_Location_1 = __webpack_require__(/*! ./C_Location */ "./src/d_mdl/C_Location.ts");
const C_Range_1 = __webpack_require__(/*! ./C_Range */ "./src/d_mdl/C_Range.ts");
const F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "./src/d_utl/F_Rand.ts");
const F_Math_1 = __webpack_require__(/*! ../d_utl/F_Math */ "./src/d_utl/F_Math.ts");
const C_PointDir_1 = __webpack_require__(/*! ./C_PointDir */ "./src/d_mdl/C_PointDir.ts");
const T_Direction_1 = __webpack_require__(/*! ./T_Direction */ "./src/d_mdl/T_Direction.ts");
const C_PointSet2D_1 = __webpack_require__(/*! ./C_PointSet2D */ "./src/d_mdl/C_PointSet2D.ts");
function alert_maze_info(a) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    if (a === undefined)
        return;
    alert("Maze Info:"
        + "\nmaze id :" + ((_a = a.id) !== null && _a !== void 0 ? _a : '?')
        + "\nfloor: " + ((_b = a.floor) !== null && _b !== void 0 ? _b : '?')
        + "\nuniq id :" + ((_c = a.uniq_id) !== null && _c !== void 0 ? _c : '?')
        + "\nsave id :" + ((_d = a.save_id) !== null && _d !== void 0 ? _d : '?')
        + "\nname:   " + ((_e = a.name) !== null && _e !== void 0 ? _e : '?')
        + "\nsize_x: " + ((_f = a.size_x) !== null && _f !== void 0 ? _f : '?')
        + "\nsize_y: " + ((_g = a.size_y) !== null && _g !== void 0 ? _g : '?')
        + "\nsize_z: " + ((_h = a.size_z) !== null && _h !== void 0 ? _h : '?')
        + "maze:\n" + ((_j = a.maze) !== null && _j !== void 0 ? _j : '?')
        + "mask:\n" + ((_k = a.mask) !== null && _k !== void 0 ? _k : '?')
        + "\n");
}
class C_Maze {
    constructor(a) {
        this.my_layer = 0;
        this.num_of_room = 5;
        this.max_size_of_room = 3;
        this.maze_id = -1;
        this.save_id = -1;
        this.uniq_id = 'mai_maze#' + (0, F_Rand_1._get_uuid)();
        this.floor = 0;
        this.name = '';
        this.size = new C_Range_1.C_Range(new C_Point_1.C_Point(0, 0, 0), new C_Point_1.C_Point(2, 2, 2));
        this.cells = this.__init_maze(T_MzKind_1.T_MzKind.Stone);
        this.masks = this.__init_mask(true);
        this.unclear = [];
        this.__init_unclear();
        this.objs = {};
        if (a !== undefined)
            this.decode(a);
    }
    __init_maze(kind = T_MzKind_1.T_MzKind.Stone) {
        const size_x = this.size.size_x();
        const size_y = this.size.size_y();
        const size_z = this.size.size_z();
        const cells = Array(size_z);
        for (var z = 0; z < size_z; z++) {
            cells[z] = Array(size_y);
            for (var y = 0; y < size_y; y++) {
                cells[z][y] = Array(size_x);
                for (var x = 0; x < size_x; x++) {
                    cells[z][y][x] = C_MazeCell_1.C_MazeCell.newObj({ kind: kind, pos: { x: x, y: y, z: z } });
                }
            }
        }
        return cells;
    }
    __init_mask(YN) {
        const size_x = this.size.size_x();
        const size_y = this.size.size_y();
        const size_z = this.size.size_z();
        this.masks = Array(size_z);
        for (var z = 0; z < size_z; z++) {
            this.masks[z] = Array(size_y);
            for (var y = 0; y < size_y; y++) {
                this.masks[z][y] = Array(size_x);
                for (var x = 0; x < size_x; x++) {
                    this.masks[z][y][x] = YN;
                }
            }
        }
        return this.masks;
    }
    __init_unclear() {
        const size_x = this.size.size_x();
        const size_y = this.size.size_y();
        const size_z = this.size.size_z();
        this.unclear = Array(size_z);
        for (var z = 0; z < size_z; z++) {
            this.unclear[z] = 0;
            for (var y = 0; y < size_y; y++) {
                for (var x = 0; x < size_x; x++) {
                    if (this.masks[z][y][x])
                        this.unclear[z]++;
                }
            }
        }
        return;
    }
    uid() { return this.uniq_id; }
    get_lckd() { return C_Location_1.T_Lckd.Maze; }
    get_name() { return this.name; }
    within(p) {
        return this.size.within(p);
    }
    add_obj(obj) {
        this.objs[obj.uid()] = obj;
    }
    rmv_obj(obj) {
        delete this.objs[obj.uid()];
    }
    get_obj_xyz(x, y, z) {
        return this.get_obj(new C_Point_1.C_Point(x, y, z));
    }
    get_obj(p) {
        var _a, _b, _c, _d, _e;
        var layer = -1;
        var obj = null;
        for (const id in this.objs) {
            const exist = this.objs[id];
            if (exist.view() === undefined)
                continue;
            if (exist.within(p) && ((_a = exist.view()) === null || _a === void 0 ? void 0 : _a.letter()) !== null) {
                if ((_c = (_b = exist.view()) === null || _b === void 0 ? void 0 : _b.layer()) !== null && _c !== void 0 ? _c : -99 > layer) {
                    layer = (_e = (_d = exist.view()) === null || _d === void 0 ? void 0 : _d.layer()) !== null && _e !== void 0 ? _e : -99;
                    obj = exist;
                }
            }
        }
        return obj;
    }
    exist_obj(p) {
        var _a;
        for (const id in this.objs) {
            const exist = this.objs[id];
            if (exist.within(p) && ((_a = exist.view()) === null || _a === void 0 ? void 0 : _a.letter()) !== null)
                return true;
        }
        return false;
    }
    change_unexp_to_floor(p) {
        if (this.get_kind(p) == T_MzKind_1.T_MzKind.Unexp) {
            this.set_cell(p, T_MzKind_1.T_MzKind.Floor);
        }
    }
    clear_mask_around_the_team(team) {
        this.__clear_mask(team.walk().get_around(0, -1));
        this.__clear_mask(team.walk().get_around(0, 0));
        this.__clear_mask(team.walk().get_around(0, 1));
        const depth = 5;
        for (var d = 1; d < depth; d++) {
            const front_pos = team.walk().get_around(d, 0);
            if (this.is_movable(front_pos)) {
                this.__clear_mask(team.walk().get_around(d, -1));
                this.__clear_mask(team.walk().get_around(d, 0));
                this.__clear_mask(team.walk().get_around(d, 1));
            }
            else {
                this.__clear_mask(team.walk().get_around(d, -1));
                this.__clear_mask(team.walk().get_around(d, 0));
                this.__clear_mask(team.walk().get_around(d, 1));
                break;
            }
        }
    }
    __clear_mask(clr_pos) {
        if (!this.size.within(clr_pos))
            return;
        if (this.masks[clr_pos.z][clr_pos.y][clr_pos.x]) {
            this.masks[clr_pos.z][clr_pos.y][clr_pos.x] = false;
            this.unclear[clr_pos.z]--;
        }
    }
    is_cleared(clr_pos) {
        return this.unclear[clr_pos.z] < 1;
    }
    is_masked(p) { return this.is_masked_xyz(p.x, p.y, p.z); }
    is_masked_xyz(x, y, z) {
        return this.masks[z][y][x];
    }
    is_movable(p) {
        if (!this.size.within(p))
            return false;
        switch (this.get_kind(p)) {
            case T_MzKind_1.T_MzKind.Floor:
            case T_MzKind_1.T_MzKind.Unexp:
            case T_MzKind_1.T_MzKind.StrUp:
            case T_MzKind_1.T_MzKind.StrDn:
            case T_MzKind_1.T_MzKind.StrUD:
                return true;
        }
        return false;
    }
    get_x_max() { return this.size.size_x(); }
    get_y_max() { return this.size.size_y(); }
    get_z_max() { return this.size.size_z(); }
    get_kind(p) {
        if (this.size.within(p))
            return this.cells[p.z][p.y][p.x].getKind();
        return T_MzKind_1.T_MzKind.NoDef;
    }
    get_kind_xyz(x, y, z) {
        if (this.size.within(x, y, z))
            return this.cells[z][y][x].getKind();
        return T_MzKind_1.T_MzKind.NoDef;
    }
    get_cell_xyz(x, y, z) {
        if (this.size.within(x, y, z))
            return this.cells[z][y][x];
        return undefined;
    }
    get_cell(p) {
        if (this.size.within(p))
            return this.cells[p.z][p.y][p.x];
        return undefined;
    }
    set_cell(p, k) {
        if (this.size.within(p)) {
            this.cells[p.z][p.y][p.x] = C_MazeCell_1.C_MazeCell.newObj({ kind: k, pos: p });
        }
    }
    set_cell_xyz(x, y, z, k) {
        if (this.size.within(x, y, z)) {
            this.cells[z][y][x] = C_MazeCell_1.C_MazeCell.newObj({ kind: k, pos: { x: x, y: y, z: z } });
        }
    }
    can_move(p) {
        return this.size.within(p);
    }
    can_UD(p) {
        return this.is_movable(p);
    }
    fill_cell(kind, floor) {
        for (let h = 0; h < this.size.size_y(); h++)
            for (let w = 0; w < this.size.size_x(); w++)
                this.set_cell_xyz(w, h, floor, kind);
        return;
    }
    set_box(kind, top_x, top_y, size_x, size_y, floor) {
        if (top_x + size_x > this.size.size_x())
            size_x = this.size.size_x() - top_x + 1;
        if (top_y + size_y > this.size.size_y())
            size_y = this.size.size_y() - top_y + 1;
        const top = top_y;
        const btm = top + size_y - 1;
        const lft = top_x;
        const rgt = lft + size_x - 1;
        for (let x = 0; x < size_x; x++) {
            this.set_cell_xyz(x, top, floor, kind);
            this.set_cell_xyz(x, btm, floor, kind);
        }
        for (let y = 0; y < size_y; y++) {
            this.set_cell_xyz(lft, y, floor, kind);
            this.set_cell_xyz(rgt, y, floor, kind);
        }
        return;
    }
    create_stair(floor) {
        var _a, _b;
        const H_size_x = (this.size.size_x() - 1) / 2;
        const H_size_y = (this.size.size_y() - 1) / 2;
        const pos_x = 2 * (0, F_Rand_1._irand)(0, H_size_x - 1) + 1;
        const pos_y = 2 * (0, F_Rand_1._irand)(0, H_size_y - 1) + 1;
        const pos_d = 1 * (0, F_Rand_1._irand)(0, T_Direction_1.T_Direction.MAX);
        if (floor >= 1) {
            if (((_a = this.get_cell_xyz(pos_x, pos_y, floor - 1)) === null || _a === void 0 ? void 0 : _a.getKind()) !== T_MzKind_1.T_MzKind.StrUp) {
                this.set_cell_xyz(pos_x, pos_y, floor - 1, T_MzKind_1.T_MzKind.StrDn);
            }
            else {
                this.set_cell_xyz(pos_x, pos_y, floor - 1, T_MzKind_1.T_MzKind.StrUD);
            }
        }
        if (((_b = this.get_cell_xyz(pos_x, pos_y, floor)) === null || _b === void 0 ? void 0 : _b.getKind()) !== T_MzKind_1.T_MzKind.StrDn) {
            this.set_cell_xyz(pos_x, pos_y, floor, T_MzKind_1.T_MzKind.StrUp);
        }
        else {
            this.set_cell_xyz(pos_x, pos_y, floor, T_MzKind_1.T_MzKind.StrUD);
        }
        return new C_PointDir_1.C_PointDir({ x: pos_x, y: pos_y, z: floor, d: pos_d });
    }
    create_maze(floor) {
        var _a, _b;
        const size_x = this.size.size_x();
        const size_y = this.size.size_y();
        this.fill_cell(T_MzKind_1.T_MzKind.Unexp, floor);
        this.set_box(T_MzKind_1.T_MzKind.Stone, 0, 0, size_x, size_y, floor);
        const points = new C_PointSet2D_1.C_PointSet2D();
        for (let h = 2; h < size_y - 2; h += 2) {
            for (let w = 2; w < size_x - 2; w += 2) {
                const di = (0, F_Rand_1._irand)(0, T_Direction_1.T_Direction.MAX);
                points.push(new C_PointSet2D_1.C_PointLink2D(w, h, di));
            }
        }
        const rooms_array = [];
        const num_of_room = (0, F_Rand_1._irand)(0, this.num_of_room);
        for (let cnt = 0; cnt < num_of_room; cnt++) {
            const leng_x = (0, F_Rand_1._irand)(1, this.max_size_of_room) * 2 + 1;
            const leng_y = (0, F_Rand_1._irand)(1, this.max_size_of_room) * 2 + 1;
            const room_x = (0, F_Rand_1._irand)(0, (size_x - leng_x) / 2) * 2;
            const room_y = (0, F_Rand_1._irand)(0, (size_y - leng_y) / 2) * 2;
            rooms_array.push({ tx: room_x, ty: room_y, sx: leng_x, sy: leng_y });
        }
        for (const room of rooms_array) {
            for (let ii = 0; ii < points.set.length; ii++) {
                const p = points.set[ii];
                if (p === undefined)
                    continue;
                if ((p.x >= room.tx)
                    && (p.x <= room.tx + room.sx)
                    && (p.y >= room.ty)
                    && (p.y <= room.ty + room.sy)) {
                    points.remove(p);
                }
            }
        }
        for (const p of points.set) {
            if (p === undefined)
                continue;
            this.set_cell_xyz(p.x, p.y, floor, T_MzKind_1.T_MzKind.Stone);
            const direction = [0, 0, 0, 0];
            const di = (_b = (_a = C_PointSet2D_1.C_PointLink2D.cast(p)) === null || _a === void 0 ? void 0 : _a.di) !== null && _b !== void 0 ? _b : T_Direction_1.T_Direction.X;
            if (di === T_Direction_1.T_Direction.X)
                continue;
            direction[di] = 1;
            this.set_cell_xyz(p.x - direction[T_Direction_1.T_Direction.W] + direction[T_Direction_1.T_Direction.E], p.y - direction[T_Direction_1.T_Direction.N] + direction[T_Direction_1.T_Direction.S], floor, T_MzKind_1.T_MzKind.Stone);
        }
        for (const set of points.set) {
            if (set === undefined)
                continue;
            const [yn, trace_set] = this.check_close(set.x, set.y, points, new C_PointSet2D_1.C_PointSet2D());
            if (yn) {
                this.open_exit(trace_set, T_MzKind_1.T_MzKind.Unexp, floor);
                if (trace_set !== undefined)
                    for (const t of trace_set.set)
                        points.remove(t);
            }
        }
        return;
    }
    check_close(x, y, point_set, trace_set) {
        var _a, _b;
        if (x < 2 || y < 2 || x > this.size.size_x() - 2 || y > this.size.size_y() - 2)
            return [false, undefined];
        if (point_set === undefined)
            return [false, undefined];
        if ((point_set === null || point_set === void 0 ? void 0 : point_set.is_exist(x, y)) === false)
            return [false, undefined];
        if (trace_set !== undefined && (trace_set === null || trace_set === void 0 ? void 0 : trace_set.is_exist(x, y)) === true)
            return [true, trace_set];
        const p = point_set.get_point(x, y);
        trace_set !== null && trace_set !== void 0 ? trace_set : (trace_set = new C_PointSet2D_1.C_PointSet2D());
        trace_set === null || trace_set === void 0 ? void 0 : trace_set.push(new C_PointSet2D_1.C_PointLink2D(x, y, (_a = C_PointSet2D_1.C_PointLink2D.cast(p)) === null || _a === void 0 ? void 0 : _a.di));
        let next_x = 0, next_y = 0;
        switch ((_b = C_PointSet2D_1.C_PointLink2D.cast(p)) === null || _b === void 0 ? void 0 : _b.di) {
            case T_Direction_1.T_Direction.N:
                next_x = x;
                next_y = y - 2;
                break;
            case T_Direction_1.T_Direction.E:
                next_x = x + 2;
                next_y = y;
                break;
            case T_Direction_1.T_Direction.S:
                next_x = x;
                next_y = y + 2;
                break;
            case T_Direction_1.T_Direction.W:
                next_x = x - 2;
                next_y = y;
                break;
        }
        return this.check_close(next_x, next_y, point_set, trace_set);
    }
    open_exit(p, kind, floor) {
        var _a, _b;
        if (p === undefined)
            return;
        const cnt = (0, F_Rand_1._irand)(0, p.set.length - 1);
        const pp = p.set[cnt];
        let direction = [0, 0, 0, 0];
        const di = (_b = (_a = C_PointSet2D_1.C_PointLink2D.cast(pp)) === null || _a === void 0 ? void 0 : _a.di) !== null && _b !== void 0 ? _b : T_Direction_1.T_Direction.N;
        direction[di] = 1;
        this.set_cell_xyz(pp.x - direction[T_Direction_1.T_Direction.W] + direction[T_Direction_1.T_Direction.E], pp.y - direction[T_Direction_1.T_Direction.N] + direction[T_Direction_1.T_Direction.S], floor, kind);
        return;
    }
    to_letter(p) {
        return this.cells[p.z][p.y][p.x].to_letter();
    }
    to_string(floor = 0, debug_mode = false) {
        var _a, _b;
        const size_x = this.size.size_x();
        const size_y = this.size.size_y();
        var ret_str = '';
        for (var y = 0; y < size_y; y++) {
            for (var x = 0; x < size_x; x++) {
                const obj = this.get_obj_xyz(x, y, floor);
                if (!debug_mode && this.masks[floor][y][x]) {
                    ret_str += 'Ｘ';
                }
                else {
                    const obj_c = (_b = (_a = obj === null || obj === void 0 ? void 0 : obj.view()) === null || _a === void 0 ? void 0 : _a.letter()) !== null && _b !== void 0 ? _b : null;
                    if (obj === null || obj_c === null) {
                        ret_str += this.cells[floor][y][x].to_letter();
                    }
                    else {
                        ret_str += obj_c;
                    }
                }
            }
            ret_str += "\n";
        }
        return ret_str;
    }
    encode() {
        const size_x = this.size.size_x();
        const size_y = this.size.size_y();
        const size_z = this.size.size_z();
        var z_array = [];
        for (var z = 0; z < size_z; z++) {
            var y_array = [];
            for (var y = 0; y < size_y; y++) {
                var x_array = [];
                for (var x = 0; x < size_x; x++) {
                    x_array.push(this.cells[z][y][x].encode());
                }
                y_array.push(x_array.join('X'));
            }
            z_array.push(y_array.join('Y'));
        }
        const maze_str = z_array.join('Z');
        var z_array = [];
        for (var z = 0; z < size_z; z++) {
            var y_array = [];
            for (var y = 0; y < size_y; y++) {
                var x_array = [];
                for (var x = 0; x < size_x; x++) {
                    x_array.push(this.masks[z][y][x] ? '1' : '0');
                }
                y_array.push(x_array.join('X'));
            }
            z_array.push(y_array.join('Y'));
        }
        const mask_str = z_array.join('Z');
        let objs = [];
        for (const ii in this.objs)
            objs.push(this.objs[ii].encode());
        return {
            id: this.maze_id,
            uniq_id: this.uniq_id,
            save_id: this.save_id,
            floor: this.floor,
            name: this.name,
            objs: objs,
            size_x: this.size.size_x(),
            size_y: this.size.size_y(),
            size_z: this.size.size_z(),
            maze: maze_str,
            mask: mask_str,
        };
    }
    decode(a) {
        if (a === undefined)
            return this;
        if (a.id !== undefined)
            this.maze_id = a.id;
        if (a.uniq_id !== undefined)
            this.uniq_id = a.uniq_id;
        if (a.save_id !== undefined)
            this.save_id = a.save_id;
        if (a.floor !== undefined)
            this.floor = a.floor;
        if (a.name !== undefined)
            this.name = a.name;
        if (a.objs !== undefined) {
            this.objs = {};
            for (const json_obj of a.objs) {
                const new_obj = C_MazeObj_1.C_MazeObj.newObj(json_obj);
                this.objs[new_obj.uid()] = new_obj;
            }
        }
        if (a.size_x !== undefined && a.size_y !== undefined && a.size_z !== undefined) {
            this.size = new C_Range_1.C_Range(new C_Point_1.C_Point(0, 0, 0), new C_Point_1.C_Point(a.size_x - 1, a.size_y - 1, a.size_z - 1));
            this.cells = this.__init_maze(T_MzKind_1.T_MzKind.Stone);
            this.masks = this.__init_mask(true);
            this.__init_unclear();
        }
        const size_x = this.size.size_x();
        const size_y = this.size.size_y();
        const size_z = this.size.size_z();
        if (a.maze !== undefined) {
            const z_array = a.maze.split('Z');
            const z_max = (0, F_Math_1._min)([size_z, z_array.length]);
            for (var z = 0; z < z_max; z++) {
                const y_array = z_array[z].split('Y');
                const y_max = (0, F_Math_1._min)([size_y, y_array.length]);
                for (var y = 0; y < y_max; y++) {
                    const x_array = y_array[y].split('X');
                    const x_max = (0, F_Math_1._min)([size_x, x_array.length]);
                    for (var x = 0; x < x_max; x++) {
                        let kind = parseInt(x_array[x], 16);
                        this.cells[z][y][x] = C_MazeCell_1.C_MazeCell.newObj({ kind: kind, pos: { x: x, y: y, z: z } });
                    }
                }
            }
        }
        if (a.mask !== undefined) {
            this.__init_mask(true);
            const z_array = a.mask.split('Z');
            const z_max = (0, F_Math_1._min)([size_z, z_array.length]);
            for (var z = 0; z < z_max; z++) {
                const y_array = z_array[z].split('Y');
                const y_max = (0, F_Math_1._min)([size_y, y_array.length]);
                for (var y = 0; y < y_max; y++) {
                    const x_array = y_array[y].split('X');
                    const x_max = (0, F_Math_1._min)([size_x, x_array.length]);
                    for (var x = 0; x < x_max; x++) {
                        if (x_array[x] !== '0') {
                            this.masks[z][y][x] = true;
                        }
                        else {
                            this.masks[z][y][x] = false;
                        }
                    }
                }
            }
            this.__init_unclear();
        }
        return this;
    }
    static encode_all(all_maze) {
        const all_maze_data = [];
        for (let maze of all_maze) {
            all_maze_data.push(maze.encode());
        }
        return all_maze_data;
    }
    static decode_all(all_maze_data) {
        const all_maze = [];
        for (let maze_data of all_maze_data) {
            all_maze.push((new C_Maze({})).decode(maze_data));
        }
        return all_maze;
    }
    alert() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        alert("Maze Info:"
            + "\nmaze id :" + ((_a = this.maze_id) !== null && _a !== void 0 ? _a : '?')
            + "\nfloor: " + ((_b = this.floor) !== null && _b !== void 0 ? _b : '?')
            + "\nuniq id :" + ((_c = this.uniq_id) !== null && _c !== void 0 ? _c : '?')
            + "\nsave id :" + ((_d = this.save_id) !== null && _d !== void 0 ? _d : '?')
            + "\nname:   " + ((_e = this.name) !== null && _e !== void 0 ? _e : '?')
            + "\nsize_x: " + ((_f = this.size.size_x()) !== null && _f !== void 0 ? _f : '?')
            + "\nsize_y: " + ((_g = this.size.size_y()) !== null && _g !== void 0 ? _g : '?')
            + "\nsize_z: " + ((_h = this.size.size_z()) !== null && _h !== void 0 ? _h : '?')
            + "\n");
    }
    alert_maze(floor = 0) {
        var _a;
        alert("Maze Map:"
            + "maze:\n" + ((_a = this.to_string(floor, true)) !== null && _a !== void 0 ? _a : '?')
            + "\n");
    }
    alert_mask(floor = 0) {
        var _a;
        alert("Mask Map:"
            + "mask:\n" + ((_a = this.to_string(floor, false)) !== null && _a !== void 0 ? _a : '?')
            + "\n");
    }
}
exports.C_Maze = C_Maze;


/***/ }),

/***/ "./src/d_mdl/C_MazeCell.ts":
/*!*********************************!*\
  !*** ./src/d_mdl/C_MazeCell.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_MazeCell = void 0;
const T_MzKind_1 = __webpack_require__(/*! ./T_MzKind */ "./src/d_mdl/T_MzKind.ts");
const C_MazeObj_1 = __webpack_require__(/*! ./C_MazeObj */ "./src/d_mdl/C_MazeObj.ts");
class C_MazeCell {
    static newObj(j) {
        switch (j.kind) {
            case T_MzKind_1.T_MzKind.NoDef: return new C_MazeCellNoDef(j);
            case T_MzKind_1.T_MzKind.Unkwn: return new C_MazeCellUnkwn(j);
            case T_MzKind_1.T_MzKind.Empty: return new C_MazeCellEmpty(j);
            case T_MzKind_1.T_MzKind.Floor: return new C_MazeCellFloor(j);
            case T_MzKind_1.T_MzKind.Unexp: return new C_MazeCellUnexp(j);
            case T_MzKind_1.T_MzKind.Stone: return new C_MazeCellStone(j);
            case T_MzKind_1.T_MzKind.StrUp: return new C_MazeCellStrUp(j);
            case T_MzKind_1.T_MzKind.StrDn: return new C_MazeCellStrDn(j);
            case T_MzKind_1.T_MzKind.StrUD: return new C_MazeCellStrUD(j);
        }
        return new C_MazeCellNoDef(j);
    }
    constructor(j) {
        var _a, _b, _c;
        var _d;
        (_a = j.obj) !== null && _a !== void 0 ? _a : (j.obj = {});
        (_b = (_d = j.obj).clname) !== null && _b !== void 0 ? _b : (_d.clname = this.constructor.name);
        this.kind = (_c = j.kind) !== null && _c !== void 0 ? _c : T_MzKind_1.T_MzKind.NoDef;
        this.my_obj = C_MazeObj_1.C_MazeObj.newObj(j.obj);
    }
    getObj() { return this.my_obj; }
    getKind() {
        return this.kind;
    }
    to_letter() {
        var _a, _b;
        return (_b = (_a = this.my_obj.view()) === null || _a === void 0 ? void 0 : _a.letter()) !== null && _b !== void 0 ? _b : 'Ｘ';
    }
    static from_letter(letter) {
        for (const key of Object.keys(T_MzKind_1.T_MzKind)) {
            if (letter === key)
                return T_MzKind_1.T_MzKind[key];
        }
        return T_MzKind_1.T_MzKind.NoDef;
    }
    drow2D(rect) {
        var _a;
        (_a = this.my_obj.view()) === null || _a === void 0 ? void 0 : _a.drow2D(rect);
    }
    drow3D(frot, back) {
        var _a;
        (_a = this.my_obj.view()) === null || _a === void 0 ? void 0 : _a.drow3D(frot, back);
    }
    encode() {
        return this.kind.toString(16).padStart(2, "0");
    }
    static decode(str, j) {
        const kind = parseInt(str, 16);
        return C_MazeCell.newObj({ kind: kind, pos: j === null || j === void 0 ? void 0 : j.pos });
    }
}
exports.C_MazeCell = C_MazeCell;
class C_MazeCellNoDef extends C_MazeCell {
    constructor(j) {
        var _a;
        j !== null && j !== void 0 ? j : (j = { kind: T_MzKind_1.T_MzKind.NoDef });
        (_a = j.obj) !== null && _a !== void 0 ? _a : (j.obj = {});
        j.obj.can_thr = '0';
        j.obj.pos = { x: j.x, y: j.y, z: j.z };
        j.obj.view = {
            layer: 0, letter: '疑',
            show3D: '0',
            pad_t: 0.0, pad_d: 0.0, pad_s: 0.0,
            col_f: '', col_b: '', col_s: '', col_t: '', col_d: '',
            col_l: '', col_2: '',
        };
        super(j);
    }
}
class C_MazeCellUnkwn extends C_MazeCell {
    constructor(j) {
        var _a;
        j !== null && j !== void 0 ? j : (j = { kind: T_MzKind_1.T_MzKind.Unkwn });
        (_a = j.obj) !== null && _a !== void 0 ? _a : (j.obj = {});
        j.obj.can_thr = '0';
        j.obj.pos = { x: j.x, y: j.y, z: j.z };
        j.obj.view = {
            layer: 0, letter: '謎',
            show3D: '0',
            pad_t: 0.0, pad_d: 0.0, pad_s: 0.0,
            col_f: '', col_b: '', col_s: '', col_t: '', col_d: '',
            col_l: '', col_2: '',
        };
        super(j);
    }
}
class C_MazeCellEmpty extends C_MazeCell {
    constructor(j) {
        var _a;
        j !== null && j !== void 0 ? j : (j = { kind: T_MzKind_1.T_MzKind.Empty });
        (_a = j.obj) !== null && _a !== void 0 ? _a : (j.obj = {});
        j.obj.can_thr = '1';
        j.obj.pos = { x: j.x, y: j.y, z: j.z };
        j.obj.view = {
            layer: 0, letter: '無',
            show3D: '0',
            pad_t: 0.0, pad_d: 0.0, pad_s: 0.0,
            col_f: '', col_b: '', col_s: '', col_t: '', col_d: '',
            col_l: '', col_2: '',
        };
        super(j);
    }
}
class C_MazeCellFloor extends C_MazeCell {
    constructor(j) {
        var _a;
        j !== null && j !== void 0 ? j : (j = { kind: T_MzKind_1.T_MzKind.Floor });
        (_a = j.obj) !== null && _a !== void 0 ? _a : (j.obj = {});
        j.obj.can_thr = '1';
        j.obj.pos = { x: j.x, y: j.y, z: j.z };
        j.obj.view = {
            layer: 0, letter: '　',
            show3D: '1',
            pad_t: 0.0, pad_d: 0.0, pad_s: 0.0,
            col_f: '', col_b: '', col_s: '', col_t: '#6666ff', col_d: '',
            col_l: '#9999ff', col_2: '#3333ff',
        };
        super(j);
    }
}
class C_MazeCellUnexp extends C_MazeCell {
    constructor(j) {
        var _a;
        j !== null && j !== void 0 ? j : (j = { kind: T_MzKind_1.T_MzKind.Unexp });
        (_a = j.obj) !== null && _a !== void 0 ? _a : (j.obj = {});
        j.obj.can_thr = '1';
        j.obj.pos = { x: j.x, y: j.y, z: j.z };
        j.obj.view = {
            layer: 0, letter: '・',
            show3D: '1',
            pad_t: 0.0, pad_d: 0.0, pad_s: 0.0,
            col_f: '', col_b: '', col_s: '', col_t: '#66ffff', col_d: '',
            col_l: '#9999ff', col_2: '#66ffff',
        };
        super(j);
    }
}
class C_MazeCellStone extends C_MazeCell {
    constructor(j) {
        var _a;
        j !== null && j !== void 0 ? j : (j = { kind: T_MzKind_1.T_MzKind.Stone });
        (_a = j.obj) !== null && _a !== void 0 ? _a : (j.obj = {});
        j.obj.can_thr = '0';
        j.obj.pos = { x: j.x, y: j.y, z: j.z };
        j.obj.view = {
            layer: 0, letter: '＃',
            show3D: '1',
            pad_t: 0.0, pad_d: 0.0, pad_s: 0.0,
            col_f: '#00ff00', col_b: '', col_s: '#00ee00', col_t: '', col_d: '',
            col_l: '#0000ff', col_2: '#00ee00',
        };
        super(j);
    }
}
class C_MazeCellStrUp extends C_MazeCell {
    constructor(j) {
        var _a;
        j !== null && j !== void 0 ? j : (j = { kind: T_MzKind_1.T_MzKind.StrUp });
        (_a = j.obj) !== null && _a !== void 0 ? _a : (j.obj = {});
        j.obj.can_thr = '1';
        j.obj.pos = { x: j.x, y: j.y, z: j.z };
        j.obj.view = {
            layer: 0, letter: '上',
            show3D: '1',
            pad_t: 0.0, pad_d: 0.0, pad_s: 0.0,
            col_f: '', col_b: '', col_s: '', col_t: '', col_d: '#ffffcc',
            col_l: '#0000ff', col_2: '#ffff66',
        };
        super(j);
    }
}
class C_MazeCellStrDn extends C_MazeCell {
    constructor(j) {
        var _a;
        j !== null && j !== void 0 ? j : (j = { kind: T_MzKind_1.T_MzKind.StrDn });
        (_a = j.obj) !== null && _a !== void 0 ? _a : (j.obj = {});
        j.obj.can_thr = '1';
        j.obj.pos = { x: j.x, y: j.y, z: j.z };
        j.obj.view = {
            layer: 0, letter: '下',
            show3D: '1',
            pad_t: 0.0, pad_d: 0.0, pad_s: 0.0,
            col_f: '', col_b: '', col_s: '', col_t: '#ffffcc', col_d: '',
            col_l: '#0000ff', col_2: '#ffff66',
        };
        super(j);
    }
}
class C_MazeCellStrUD extends C_MazeCell {
    constructor(j) {
        var _a;
        j !== null && j !== void 0 ? j : (j = { kind: T_MzKind_1.T_MzKind.StrUD });
        (_a = j.obj) !== null && _a !== void 0 ? _a : (j.obj = {});
        j.obj.can_thr = '1';
        j.obj.pos = { x: j.x, y: j.y, z: j.z };
        j.obj.view = {
            layer: 0, letter: '段',
            show3D: '1',
            pad_t: 0.0, pad_d: 0.0, pad_s: 0.0,
            col_f: '', col_b: '', col_s: '', col_t: '#ffffcc', col_d: '#ffffcc',
            col_l: '#0000ff', col_2: '#ffff66',
        };
        super(j);
    }
}


/***/ }),

/***/ "./src/d_mdl/C_MazeInfo.ts":
/*!*********************************!*\
  !*** ./src/d_mdl/C_MazeInfo.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_MazeInfo = void 0;
exports.alert_mazeinfo_info = alert_mazeinfo_info;
function alert_mazeinfo_info(a) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (a === undefined)
        return;
    alert("MazeInfo Data:"
        + "\nname : " + ((_a = a.name) !== null && _a !== void 0 ? _a : '?')
        + "\nmbname: " + ((_b = a.mbname) !== null && _b !== void 0 ? _b : '?')
        + "\nlv :" + ((_c = a.lv) !== null && _c !== void 0 ? _c : '?')
        + "\nsize_x: " + ((_d = a.size_x) !== null && _d !== void 0 ? _d : '?')
        + "\nsize_y: " + ((_e = a.size_y) !== null && _e !== void 0 ? _e : '?')
        + "\nsize_z: " + ((_f = a.size_z) !== null && _f !== void 0 ? _f : '?')
        + "\nmax_of_room: " + ((_g = a.max_room) !== null && _g !== void 0 ? _g : '?')
        + "\nroom_size: " + ((_h = a.room_size) !== null && _h !== void 0 ? _h : '?')
        + "\n");
}
class C_MazeInfo {
    static get_tbl_all() {
        const mazeinfo = [];
        mazeinfo.push(new C_MazeInfo().decode({
            name: 'maze010',
            mbname: '教練場',
            lv: 1,
            size_x: 11,
            size_y: 11,
            size_z: 3,
            max_room: 2,
            room_size: 3
        }));
        mazeinfo.push(new C_MazeInfo().decode({
            name: 'maze011',
            mbname: '始まりの迷宮',
            lv: 1,
            size_x: 21,
            size_y: 21,
            size_z: 5,
            max_room: 3,
            room_size: 3
        }));
        mazeinfo.push(new C_MazeInfo().decode({
            name: 'maze012',
            mbname: '暗き森の迷宮',
            lv: 1,
            size_x: 25,
            size_y: 25,
            size_z: 7,
            max_room: 5,
            room_size: 3
        }));
        mazeinfo.push(new C_MazeInfo().decode({
            name: 'maze013',
            mbname: '黒魔の地下墓地',
            lv: 1,
            size_x: 31,
            size_y: 31,
            size_z: 10,
            max_room: 5,
            room_size: 5
        }));
        return mazeinfo;
    }
    constructor(j) {
        this.name = '';
        this.mbname = '';
        this.lv = 0;
        this.size_x = 3;
        this.size_y = 3;
        this.size_z = 3;
        this.max_room = 1;
        this.room_size = 1;
        if (j !== undefined)
            this.decode(j);
    }
    encode() {
        return {
            name: this.name,
            mbname: this.mbname,
            lv: this.lv,
            size_x: this.size_x,
            size_y: this.size_y,
            size_z: this.size_z,
            max_room: this.max_room,
            room_size: this.room_size,
        };
    }
    decode(j) {
        if (j === undefined)
            return this;
        if (j.name !== undefined)
            this.name = j.name;
        if (j.mbname !== undefined)
            this.mbname = j.mbname;
        if (j.lv !== undefined)
            this.lv = j.lv;
        if (j.size_x !== undefined)
            this.size_x = j.size_x;
        if (j.size_y !== undefined)
            this.size_y = j.size_y;
        if (j.size_z !== undefined)
            this.size_z = j.size_z;
        if (j.max_room !== undefined)
            this.max_room = j.max_room;
        if (j.room_size !== undefined)
            this.room_size = j.room_size;
        return this;
    }
    alert() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        alert("MazeInfo Data:"
            + "\nname : " + ((_a = this.name) !== null && _a !== void 0 ? _a : '?')
            + "\nmbname: " + ((_b = this.mbname) !== null && _b !== void 0 ? _b : '?')
            + "\nlv :" + ((_c = this.lv) !== null && _c !== void 0 ? _c : '?')
            + "\nsize_x: " + ((_d = this.size_x) !== null && _d !== void 0 ? _d : '?')
            + "\nsize_y: " + ((_e = this.size_y) !== null && _e !== void 0 ? _e : '?')
            + "\nsize_z: " + ((_f = this.size_z) !== null && _f !== void 0 ? _f : '?')
            + "\nmax_of_room: " + ((_g = this.max_room) !== null && _g !== void 0 ? _g : '?')
            + "\nroom_size: " + ((_h = this.room_size) !== null && _h !== void 0 ? _h : '?')
            + "\n");
    }
}
exports.C_MazeInfo = C_MazeInfo;


/***/ }),

/***/ "./src/d_mdl/C_MazeObj.ts":
/*!********************************!*\
  !*** ./src/d_mdl/C_MazeObj.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_MazeObj = void 0;
const C_PointDir_1 = __webpack_require__(/*! ./C_PointDir */ "./src/d_mdl/C_PointDir.ts");
const F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "./src/d_utl/F_Rand.ts");
const C_MazeObjView_1 = __webpack_require__(/*! ./C_MazeObjView */ "./src/d_mdl/C_MazeObjView.ts");
class C_MazeObj {
    static newObj(j) {
        var _a;
        j !== null && j !== void 0 ? j : (j = {});
        (_a = j.clname) !== null && _a !== void 0 ? _a : (j.clname = C_MazeObj.constructor.name);
        switch (j.clname) {
            case C_MazeObj.constructor.name: return new C_MazeObj(j);
        }
        return new C_MazeObj(j);
    }
    newObj(j) {
        return C_MazeObj.newObj(j);
    }
    constructor(j) {
        this.clname = 'C_MazeObj';
        this.uniq_id = 'mazeobj_' + (0, F_Rand_1._get_uuid)();
        this.clname = C_MazeObj.constructor.name;
        this.pos = new C_PointDir_1.C_PointDir({ x: 0, y: 0, z: 0, d: 0 });
        this.my_view = undefined;
        this.can_thr = true;
        if (j !== undefined)
            this.__init(j);
    }
    __init(j) {
        var _a;
        if (j === undefined)
            return this;
        if (j.uniq_id !== undefined)
            this.uniq_id = j.uniq_id;
        if (j.clname !== undefined)
            this.clname = j.clname;
        if (j.pos !== undefined)
            this.pos.decode(j.pos);
        if (j.view !== undefined) {
            if (Object.keys(j.view).length > 0) {
                (_a = this.my_view) !== null && _a !== void 0 ? _a : (this.my_view = C_MazeObjView_1.C_MazeObjView.newObj(j.view));
            }
            else
                this.my_view = undefined;
        }
        if (j.can_thr !== undefined)
            this.can_thr = j.can_thr !== '0' ? true : false;
        return this;
    }
    uid() { return this.uniq_id; }
    view() { return this.my_view; }
    setView(view) { this.my_view = view; }
    canThrough() { return this.can_thr; }
    setThrough(thr) { return this.can_thr = thr; }
    get_pd() {
        return new C_PointDir_1.C_PointDir(this.pos);
    }
    set_pd(p) {
        this.pos = p;
    }
    within(p) {
        return this.pos.within(p);
    }
    encode() {
        var _a, _b;
        return {
            uniq_id: this.uniq_id,
            clname: this.clname,
            pos: this.pos.encode(),
            view: (_b = (_a = this.my_view) === null || _a === void 0 ? void 0 : _a.encode()) !== null && _b !== void 0 ? _b : {},
            can_thr: this.can_thr ? '1' : '0',
        };
    }
    decode(j) {
        return this.__init(j);
    }
    static decode(j) {
        return C_MazeObj.newObj(j);
    }
}
exports.C_MazeObj = C_MazeObj;


/***/ }),

/***/ "./src/d_mdl/C_MazeObjView.ts":
/*!************************************!*\
  !*** ./src/d_mdl/C_MazeObjView.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_MazeObjView = void 0;
class C_MazeObjView {
    static get_context3D() { return this === null || this === void 0 ? void 0 : this.con3D; }
    static set_context3D(con3D) { this.con3D = con3D; }
    static get_context2D() { return this === null || this === void 0 ? void 0 : this.con2D; }
    static set_context2D(con2D) { this.con2D = con2D; }
    static newObj(j) {
        var _a;
        j !== null && j !== void 0 ? j : (j = {});
        (_a = j.clname) !== null && _a !== void 0 ? _a : (j.clname = C_MazeObjView.constructor.name);
        switch (j.clname) {
            case C_MazeObjView.constructor.name: return new C_MazeObjView(j);
        }
        return new C_MazeObjView(j);
    }
    newObj(j) {
        return C_MazeObjView.newObj(j);
    }
    constructor(j) {
        this.clname = 'C_MazeObjView';
        this.clname = this.constructor.name;
        this.my_layer = -2;
        this.my_letter = null;
        this.my_pad_t = 0.0;
        this.my_pad_d = 0.0;
        this.my_pad_s = 0.0;
        this.my_show = true;
        this.my_col_f = '#f8f8f8';
        this.my_col_b = '#aaaaaa';
        this.my_col_s = '#dddddd';
        this.my_col_t = '#ffffff';
        this.my_col_d = '#cccccc';
        this.my_col_l = '#333333';
        this.my_col_2 = '#cccccc';
        if (j !== undefined)
            this.__init(j);
    }
    __init(j) {
        if (j === undefined)
            return this;
        if (j.clname !== undefined)
            this.clname = j.clname;
        if (j.layer !== undefined)
            this.my_layer = j.layer;
        if (j.letter !== undefined)
            this.my_letter = j.letter !== '' ? j.letter : null;
        if (j.pad_t !== undefined)
            this.my_pad_t = j.pad_t;
        if (j.pad_d !== undefined)
            this.my_pad_d = j.pad_d;
        if (j.pad_s !== undefined)
            this.my_pad_s = j.pad_s;
        if (j.show !== undefined)
            this.my_show = j.show !== '0' ? true : false;
        if (j.col_f !== undefined)
            this.my_col_f = j.col_f !== '' ? j.col_f : null;
        if (j.col_b !== undefined)
            this.my_col_b = j.col_b !== '' ? j.col_b : null;
        if (j.col_s !== undefined)
            this.my_col_s = j.col_s !== '' ? j.col_s : null;
        if (j.col_t !== undefined)
            this.my_col_t = j.col_t !== '' ? j.col_t : null;
        if (j.col_d !== undefined)
            this.my_col_d = j.col_d !== '' ? j.col_d : null;
        if (j.col_l !== undefined)
            this.my_col_l = j.col_l !== '' ? j.col_l : null;
        if (j.col_2 !== undefined)
            this.my_col_2 = j.col_2 !== '' ? j.col_2 : null;
        return this;
    }
    layer() { return this.my_layer; }
    set_layer(layer) { this.my_layer = layer; }
    letter() { return this.my_letter; }
    set_letter(letter) { return this.my_letter = letter; }
    canShow() { return this.my_show; }
    ;
    setShow(can_show) { return this.my_show = can_show; }
    ;
    pad_t() { return this.my_pad_t; }
    pad_d() { return this.my_pad_d; }
    pad_s() { return this.my_pad_s; }
    set_pad_t(pad_t) { return this.my_pad_t = this.my_pad_d + pad_t < 1.0 ? pad_t : 0.99 - this.my_pad_d; }
    set_pad_d(pad_d) { return this.my_pad_d = this.my_pad_t + pad_d < 1.0 ? pad_d : 0.99 - this.my_pad_t; }
    set_pad_s(pad_s) { return this.my_pad_s = pad_s; }
    col_f() { return this.my_col_f; }
    col_b() { return this.my_col_b; }
    col_s() { return this.my_col_s; }
    col_t() { return this.my_col_t; }
    col_d() { return this.my_col_d; }
    col_l() { return this.my_col_l; }
    set_col_f(col_f) { return this.my_col_f = col_f; }
    set_col_b(col_b) { return this.my_col_b = col_b; }
    set_col_s(col_s) { return this.my_col_s = col_s; }
    set_col_t(col_t) { return this.my_col_t = col_t; }
    set_col_d(col_d) { return this.my_col_d = col_d; }
    set_col_l(col_l) { return this.my_col_l = col_l; }
    col_2() { return this.my_col_2; }
    set_col_2(col_2) { return this.my_col_2 = col_2; }
    drow2D(rect) {
        var _a, _b;
        drow2D_cell(rect, (_a = this.col_2()) !== null && _a !== void 0 ? _a : '#cccccc', (_b = this.col_l()) !== null && _b !== void 0 ? _b : '#9999ff');
    }
    drow3D(frot, back) {
        this.drow3D_obj_back(frot, back);
        this.drow3D_obj_down(frot, back);
        this.drow3D_obj_top(frot, back);
        this.drow3D_obj_right_side(frot, back);
        this.drow3D_obj_left_side(frot, back);
        this.drow3D_obj_front(frot, back);
    }
    drow3D_obj_down(frot, back) {
        var _a, _b;
        if (!this.canShow() || this.col_t() === null)
            return;
        if (this.pad_s() <= 0.0 && this.pad_t() >= 1.0) {
            drow3D_cell_floor(frot, back, (_a = this.col_t()) !== null && _a !== void 0 ? _a : '#6666ff', (_b = this.col_l()) !== null && _b !== void 0 ? _b : '#9999ff');
            return;
        }
        const o = __calc_padding_obj(this, frot, back);
        const rect = {
            tl: o.fdl,
            tr: o.fdr,
            dr: o.bdr,
            dl: o.bdl,
        };
        drow3D_cell(rect, this.col_t(), this.col_l());
    }
    drow3D_obj_top(frot, back) {
        var _a, _b;
        if (!this.canShow() || this.col_d() === null)
            return;
        if (this.pad_s() <= 0.0 && this.pad_d() >= 1.0) {
            drow3D_cell_ceiling(frot, back, (_a = this.col_d()) !== null && _a !== void 0 ? _a : '#aaaaaa', (_b = this.col_l()) !== null && _b !== void 0 ? _b : '#9999ff');
            return;
        }
        const o = __calc_padding_obj(this, frot, back);
        const rect = {
            tl: o.ftl,
            tr: o.ftr,
            dr: o.btr,
            dl: o.btl,
        };
        drow3D_cell(rect, this.col_d(), this.col_l());
    }
    drow3D_obj_front(frot, back) {
        if (!this.canShow() || this.col_f() === null)
            return;
        const o = __calc_padding_obj(this, frot, back);
        const rect = {
            tl: o.ftl,
            tr: o.ftr,
            dr: o.fdr,
            dl: o.fdl,
        };
        drow3D_cell(rect, this.col_f(), this.col_l());
    }
    drow3D_obj_back(frot, back) {
        if (!this.canShow() || this.col_b() === null)
            return;
        const o = __calc_padding_obj(this, frot, back);
        const rect = {
            tl: o.btl,
            tr: o.btr,
            dr: o.bdr,
            dl: o.bdl,
        };
        drow3D_cell(rect, this.col_b(), this.col_l());
    }
    drow3D_obj_left_side(frot, back) {
        if (!this.canShow() || this.col_s() === null)
            return;
        const o = __calc_padding_obj(this, frot, back);
        const rect = {
            tl: o.btl,
            tr: o.ftl,
            dr: o.fdl,
            dl: o.bdl,
        };
        drow3D_cell(rect, this.col_s(), this.col_l());
    }
    drow3D_obj_right_side(frot, back) {
        if (!this.canShow() || this.col_s() === null)
            return;
        const o = __calc_padding_obj(this, frot, back);
        const rect = {
            tl: o.ftr,
            tr: o.btr,
            dr: o.bdr,
            dl: o.fdr,
        };
        drow3D_cell(rect, this.col_s(), this.col_l());
    }
    encode() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return {
            cname: this.clname,
            layer: this.my_layer,
            letter: (_a = this.my_letter) !== null && _a !== void 0 ? _a : '',
            pad_t: this.my_pad_t,
            pad_d: this.my_pad_d,
            pad_s: this.my_pad_s,
            show: this.canShow() ? '1' : '0',
            col_f: (_b = this.my_col_f) !== null && _b !== void 0 ? _b : '',
            col_b: (_c = this.my_col_b) !== null && _c !== void 0 ? _c : '',
            col_s: (_d = this.my_col_s) !== null && _d !== void 0 ? _d : '',
            col_t: (_e = this.my_col_t) !== null && _e !== void 0 ? _e : '',
            col_d: (_f = this.my_col_d) !== null && _f !== void 0 ? _f : '',
            col_l: (_g = this.my_col_l) !== null && _g !== void 0 ? _g : '',
            col_2: (_h = this.my_col_2) !== null && _h !== void 0 ? _h : '',
        };
    }
    decode(j) {
        return this.__init(j);
    }
    static decode(j) {
        return C_MazeObjView.newObj(j);
    }
}
exports.C_MazeObjView = C_MazeObjView;
function __calc_padding_obj(obj, frot, back) {
    const rect_frot = frot;
    const rect_back = back;
    const ratio_X = obj.pad_s() / 2.0;
    const ratio_T = obj.pad_t();
    const ratio_D = obj.pad_d();
    const frot_pad_X = Math.abs(rect_frot.max_x - rect_frot.min_x) * ratio_X;
    const back_pad_X = Math.abs(rect_back.max_x - rect_back.min_x) * ratio_X;
    const frot_pad_T = Math.abs(rect_frot.max_y - rect_frot.min_y) * ratio_T;
    const back_pad_T = Math.abs(rect_back.max_y - rect_back.min_y) * ratio_T;
    const frot_pad_D = Math.abs(rect_frot.max_y - rect_frot.min_y) * ratio_D;
    const back_pad_D = Math.abs(rect_back.max_y - rect_back.min_y) * ratio_D;
    const frot_top_lft = { x: rect_frot.min_x + frot_pad_X, y: rect_frot.min_y + frot_pad_T };
    const frot_top_rgt = { x: rect_frot.max_x - frot_pad_X, y: rect_frot.min_y + frot_pad_T };
    const frot_dwn_lft = { x: rect_frot.min_x + frot_pad_X, y: rect_frot.max_y - frot_pad_D };
    const frot_dwn_rgt = { x: rect_frot.max_x - frot_pad_X, y: rect_frot.max_y - frot_pad_D };
    const back_top_lft = { x: rect_back.min_x + back_pad_X, y: rect_back.min_y + back_pad_T };
    const back_top_rgt = { x: rect_back.max_x - back_pad_X, y: rect_back.min_y + back_pad_T };
    const back_dwn_lft = { x: rect_back.min_x + back_pad_X, y: rect_back.max_y - back_pad_D };
    const back_dwn_rgt = { x: rect_back.max_x - back_pad_X, y: rect_back.max_y - back_pad_D };
    let ftl = __calc_padding_xy(frot_top_lft, back_top_lft, ratio_X);
    let ftr = __calc_padding_xy(frot_top_rgt, back_top_rgt, ratio_X);
    let fdl = __calc_padding_xy(frot_dwn_lft, back_dwn_lft, ratio_X);
    let fdr = __calc_padding_xy(frot_dwn_rgt, back_dwn_rgt, ratio_X);
    let btl = __calc_padding_xy(back_top_lft, frot_top_lft, ratio_X);
    let btr = __calc_padding_xy(back_top_rgt, frot_top_rgt, ratio_X);
    let bdl = __calc_padding_xy(back_dwn_lft, frot_dwn_lft, ratio_X);
    let bdr = __calc_padding_xy(back_dwn_rgt, frot_dwn_rgt, ratio_X);
    return {
        ftl: ftl, ftr: ftr,
        fdl: fdl, fdr: fdr,
        btl: btl, btr: btr,
        bdl: bdl, bdr: bdr,
    };
}
function __calc_padding_xy(frot, back, ratio) {
    const A = (frot.y - back.y) / (frot.x - back.x);
    const B = frot.y - A * frot.x;
    const p_frot_x = frot.x + (back.x - frot.x) * ratio;
    const p_frot_y = A * p_frot_x + B;
    return { x: p_frot_x, y: p_frot_y };
}
function drow3D_cell_floor(rect_frot, rect_back, fill = '#6666ff', line = '#9999ff') {
    const rect = {
        tl: { x: rect_frot.min_x, y: rect_frot.max_y },
        tr: { x: rect_frot.max_x, y: rect_frot.max_y },
        dr: { x: rect_back.max_x, y: rect_back.max_y },
        dl: { x: rect_back.min_x, y: rect_back.max_y }
    };
    drow3D_cell(rect, fill, line);
}
function drow3D_cell_ceiling(rect_frot, rect_back, fill = '#aaaaaa', line = '#9999ff') {
    const rect = {
        tl: { x: rect_frot.min_x, y: rect_frot.min_y },
        tr: { x: rect_frot.max_x, y: rect_frot.min_y },
        dr: { x: rect_back.max_x, y: rect_back.min_y },
        dl: { x: rect_back.min_x, y: rect_back.min_y }
    };
    drow3D_cell(rect, fill, line);
}
function drow2D_cell(r, fill, line) {
    const con = C_MazeObjView.get_context2D();
    if (con === undefined)
        return;
    con.beginPath();
    con.moveTo(r.tl.x, r.tl.y);
    con.lineTo(r.tr.x, r.tr.y);
    con.lineTo(r.dr.x, r.dr.y);
    con.lineTo(r.dl.x, r.dl.y);
    con.closePath();
    if (fill != null) {
        con.fillStyle = fill;
        con.fill();
    }
    if (line !== null) {
        con.strokeStyle = line;
        con.lineWidth = 1;
        con.stroke();
    }
}
function drow3D_cell(r, fill, line) {
    const con = C_MazeObjView.get_context3D();
    if (con === undefined)
        return;
    con.beginPath();
    con.moveTo(r.tl.x, r.tl.y);
    con.lineTo(r.tr.x, r.tr.y);
    con.lineTo(r.dr.x, r.dr.y);
    con.lineTo(r.dl.x, r.dl.y);
    con.closePath();
    if (fill != null) {
        con.fillStyle = fill;
        con.fill();
    }
    if (line !== null) {
        con.strokeStyle = line;
        con.lineWidth = 1;
        con.stroke();
    }
}


/***/ }),

/***/ "./src/d_mdl/C_MovablePoint.ts":
/*!*************************************!*\
  !*** ./src/d_mdl/C_MovablePoint.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_MovablePoint = void 0;
exports.alert_mvpt_info = alert_mvpt_info;
const C_Location_1 = __webpack_require__(/*! ./C_Location */ "./src/d_mdl/C_Location.ts");
const F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "./src/d_utl/F_Rand.ts");
function alert_mvpt_info(a) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    if (a === undefined)
        return;
    alert("MvPt Info:"
        + "\nuniq_id:  " + ((_a = a.uniq_id) !== null && _a !== void 0 ? _a : '?')
        + "\ncur_url:  " + ((_b = a.cur_url) !== null && _b !== void 0 ? _b : '?')
        + "\nteam_uid: " + ((_c = a.team_uid) !== null && _c !== void 0 ? _c : '?')
        + "\nlckd: " + ((_d = a.kind) !== null && _d !== void 0 ? _d : '?')
        + "\nlcnm: " + ((_e = a.name) !== null && _e !== void 0 ? _e : '?')
        + "\nlcid: " + ((_f = a.loc_uid) !== null && _f !== void 0 ? _f : '?')
        + "\ncur_x: " + ((_h = (_g = a.loc_pos) === null || _g === void 0 ? void 0 : _g.x) !== null && _h !== void 0 ? _h : '?')
        + "\ncur_y: " + ((_k = (_j = a.loc_pos) === null || _j === void 0 ? void 0 : _j.y) !== null && _k !== void 0 ? _k : '?')
        + "\ncur_z: " + ((_m = (_l = a.loc_pos) === null || _l === void 0 ? void 0 : _l.z) !== null && _m !== void 0 ? _m : '?')
        + "\ncur_d: " + ((_p = (_o = a.loc_pos) === null || _o === void 0 ? void 0 : _o.d) !== null && _p !== void 0 ? _p : '?')
        + "\n");
}
class C_MovablePoint extends C_Location_1.C_Location {
    constructor(json) {
        super(json);
        this.uniq_id = 'MvPoint#' + (0, F_Rand_1._get_uuid)();
        this.cur_url = '';
        this.team_uid = undefined;
        if (json !== undefined && json !== null)
            this.decode(json);
    }
    uid() { return this.uniq_id; }
    url() { return this.cur_url; }
    tid() { return this.team_uid; }
    new_uid() { this.uniq_id = 'MvPoint#' + (0, F_Rand_1._get_uuid)(); }
    set_url(url) { this.cur_url = url; }
    set_tid(tid) { this.team_uid = tid; }
    clone() {
        const mvpt = new C_MovablePoint(this.encode());
        mvpt.new_uid();
        return mvpt;
    }
    fromJSON(txt) {
        try {
            const j = JSON.parse(txt);
            return this.decode(j);
        }
        catch (err) {
            return this;
        }
        // removed by dead control flow
{}
    }
    toJSON() {
        return JSON.stringify(this.encode(), null, "\t");
    }
    static from_obj_to_string(oa) {
        return JSON.stringify(oa.encode());
    }
    static from_objArray_to_string(oaa) {
        const oa = [];
        for (const ii in oaa)
            oa.push(oaa[ii].encode());
        return JSON.stringify(oa);
    }
    static from_string_to_obj(txt) {
        try {
            const j = JSON.parse(txt);
            return new C_MovablePoint().decode(j);
        }
        catch (err) {
            return new C_MovablePoint();
        }
        // removed by dead control flow
{}
    }
    static from_string_to_objArray(txt) {
        try {
            const j = JSON.parse(txt);
            const mpa = {};
            for (const jj of j) {
                const aaa = new C_MovablePoint().decode(jj);
                mpa[aaa.uid()] = aaa;
            }
            return mpa;
        }
        catch (err) {
            return {};
        }
        // removed by dead control flow
{}
    }
    encode() {
        var _a;
        const j = super.encode();
        j.uniq_id = this.uniq_id;
        j.cur_url = this.cur_url;
        j.team_uid = (_a = this.team_uid) !== null && _a !== void 0 ? _a : '';
        return j;
    }
    decode(j) {
        super.decode(j);
        if (j === undefined)
            return this;
        if (j.uniq_id !== undefined)
            this.uniq_id = j.uniq_id;
        if (j.cur_url !== undefined)
            this.cur_url = j.cur_url;
        if (j.team_uid !== undefined)
            this.team_uid = j.team_uid;
        if (this.team_uid === '')
            this.team_uid = undefined;
        return this;
    }
    alert() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        alert("MvPt Info:"
            + "\nuniq_id:  " + ((_a = this.uniq_id) !== null && _a !== void 0 ? _a : '?')
            + "\ncur_url:  " + ((_b = this.cur_url) !== null && _b !== void 0 ? _b : '?')
            + "\nteam_uid: " + ((_c = this.team_uid) !== null && _c !== void 0 ? _c : '?')
            + "\nlckd: " + ((_d = this.loc_kind) !== null && _d !== void 0 ? _d : '?')
            + "\nlcnm: " + ((_e = this.loc_name) !== null && _e !== void 0 ? _e : '?')
            + "\nlcid: " + ((_f = this.loc_uid) !== null && _f !== void 0 ? _f : '?')
            + "\ncur_x: " + ((_h = (_g = this.loc_pos) === null || _g === void 0 ? void 0 : _g.x) !== null && _h !== void 0 ? _h : '?')
            + "\ncur_y: " + ((_k = (_j = this.loc_pos) === null || _j === void 0 ? void 0 : _j.y) !== null && _k !== void 0 ? _k : '?')
            + "\ncur_z: " + ((_m = (_l = this.loc_pos) === null || _l === void 0 ? void 0 : _l.z) !== null && _m !== void 0 ? _m : '?')
            + "\ncur_d: " + ((_p = (_o = this.loc_pos) === null || _o === void 0 ? void 0 : _o.d) !== null && _p !== void 0 ? _p : '?')
            + "\n");
    }
}
exports.C_MovablePoint = C_MovablePoint;


/***/ }),

/***/ "./src/d_mdl/C_Point.ts":
/*!******************************!*\
  !*** ./src/d_mdl/C_Point.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Point = void 0;
class C_Point {
    constructor(x, y, z) {
        this.x = this.y = this.z = -3;
        if (x === undefined) {
            this.x = 0;
            this.y = 0;
            this.z = 0;
            return;
        }
        if (typeof x === "number" && typeof y === "number" && typeof z === "number") {
            this.x = x;
            this.y = y;
            this.z = z;
            return;
        }
        if (typeof x === "object") {
            if (x instanceof C_Point) {
                this.x = x.x;
                this.y = x.y;
                this.z = x.z;
                return;
            }
            else {
                this.decode(x);
                return;
            }
        }
        this.x = this.y = this.z = -2;
        return;
    }
    get_p() { return new C_Point(this); }
    set_p(p) {
        this.x = p.x;
        this.y = p.y;
        this.z = p.z;
        return this;
    }
    is_exist(x, y, z) {
        return (x == this.x && y == this.y && z == this.z);
    }
    within(p) {
        return (p.x == this.x && p.y == this.y && p.z == this.z);
    }
    encode() {
        return { x: this.x, y: this.y, z: this.z };
    }
    decode(a) {
        if (a === undefined)
            return this;
        if (a.x === undefined || a.y === undefined || a.z === undefined)
            return this;
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        return this;
    }
}
exports.C_Point = C_Point;


/***/ }),

/***/ "./src/d_mdl/C_PointDir.ts":
/*!*********************************!*\
  !*** ./src/d_mdl/C_PointDir.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_PointDir = exports.T_Direction = void 0;
exports.alert_PD_info = alert_PD_info;
const C_Point_1 = __webpack_require__(/*! ./C_Point */ "./src/d_mdl/C_Point.ts");
exports.T_Direction = {
    N: 0,
    E: 1,
    S: 2,
    W: 3,
    X: 99
};
function _dir_key(dir) {
    var _a;
    return (_a = Object.keys(exports.T_Direction).find(key => exports.T_Direction[key] === dir)) !== null && _a !== void 0 ? _a : "????";
}
function alert_PD_info(a) {
    var _a, _b, _c, _d;
    if (a === undefined)
        return;
    alert("PointData Info:"
        + "\nx: " + ((_a = a === null || a === void 0 ? void 0 : a.x) !== null && _a !== void 0 ? _a : '?')
        + "\ny: " + ((_b = a === null || a === void 0 ? void 0 : a.y) !== null && _b !== void 0 ? _b : '?')
        + "\nz: " + ((_c = a === null || a === void 0 ? void 0 : a.z) !== null && _c !== void 0 ? _c : '?')
        + "\nd: " + ((_d = a === null || a === void 0 ? void 0 : a.d) !== null && _d !== void 0 ? _d : '?')
        + "\n");
}
class C_PointDir extends C_Point_1.C_Point {
    constructor(d) {
        super(d);
        this.d = exports.T_Direction.X;
        if (d === undefined) {
            return;
        }
        if (typeof d === "number") {
            this.d = d;
            return;
        }
        if (typeof d === "object") {
            if (d instanceof C_PointDir) {
                this.d = d.d;
            }
            else {
                this.decode(d);
            }
            return;
        }
        this.d = exports.T_Direction.X;
        return;
    }
    get_d_mb_name() {
        switch (this.d) {
            case 0: return '北';
            case 1: return '東';
            case 2: return '南';
            case 3: return '西';
            default: return '謎';
        }
    }
    get_d() {
        return this.d;
    }
    set_d(d) {
        if (!(_dir_key(d) in exports.T_Direction))
            return undefined;
        this.d = d;
        return this;
    }
    get_pd() {
        return this;
    }
    set_pd(d) {
        if (d instanceof C_PointDir) {
            if (!(_dir_key(d.d) in exports.T_Direction))
                return undefined;
            super.set_p(d);
            this.d = d.d;
            return this;
        }
        if (!(_dir_key(d.d) in exports.T_Direction))
            return undefined;
        this.decode(d);
        return this;
    }
    encode() {
        const j = super.encode();
        j.d = this.d;
        return j;
    }
    decode(j) {
        if (j === undefined)
            return this;
        if (!(_dir_key(j.d) in exports.T_Direction))
            return this;
        super.decode(j);
        this.d = j.d;
        return this;
    }
    alert() {
        var _a, _b, _c, _d;
        alert("PointData Info:"
            + "\nx: " + ((_a = this.x) !== null && _a !== void 0 ? _a : '?')
            + "\ny: " + ((_b = this.y) !== null && _b !== void 0 ? _b : '?')
            + "\nz: " + ((_c = this.z) !== null && _c !== void 0 ? _c : '?')
            + "\nd: " + ((_d = this.d) !== null && _d !== void 0 ? _d : '?')
            + "\n");
    }
}
exports.C_PointDir = C_PointDir;


/***/ }),

/***/ "./src/d_mdl/C_PointSet2D.ts":
/*!***********************************!*\
  !*** ./src/d_mdl/C_PointSet2D.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_PointSet2D = exports.C_PointLink2D = void 0;
class C_Point2D {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    is_exist(x, y) {
        return (this.x == x) && (this.y == y);
    }
}
class C_PointLink2D extends C_Point2D {
    constructor(x = 0, y = 0, di = -1) {
        super(x, y);
        this.di = di;
    }
    static cast(p) {
        if ((p === null || p === void 0 ? void 0 : p.x) === undefined)
            return undefined;
        if ((p === null || p === void 0 ? void 0 : p.y) === undefined)
            return undefined;
        return p instanceof C_PointLink2D ? p : new C_PointLink2D(p.x, p.y);
    }
}
exports.C_PointLink2D = C_PointLink2D;
class C_PointSet2D {
    constructor() {
        this.set = [];
    }
    push(p) {
        this.set.push(p);
        return;
    }
    get_point(x, y) {
        for (const p of this.set) {
            if (p === null || p === void 0 ? void 0 : p.is_exist(x, y))
                return p;
        }
        return undefined;
    }
    remove(p) {
        this.remove_xy(p.x, p.y);
        return;
    }
    remove_xy(x, y) {
        var _a;
        for (const i in this.set) {
            if ((_a = this.set[i]) === null || _a === void 0 ? void 0 : _a.is_exist(x, y)) {
                delete this.set[i];
                this.set = [...this.set];
                break;
            }
        }
        return;
    }
    is_exist(x, y) {
        for (const p of this.set)
            if (p === null || p === void 0 ? void 0 : p.is_exist(x, y))
                return true;
        return false;
    }
}
exports.C_PointSet2D = C_PointSet2D;


/***/ }),

/***/ "./src/d_mdl/C_Range.ts":
/*!******************************!*\
  !*** ./src/d_mdl/C_Range.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Range = void 0;
const F_Math_1 = __webpack_require__(/*! ../d_utl/F_Math */ "./src/d_utl/F_Math.ts");
const C_Point_1 = __webpack_require__(/*! ./C_Point */ "./src/d_mdl/C_Point.ts");
class C_Range {
    constructor(p1, p2) {
        this.min = new C_Point_1.C_Point(0, 0, 0);
        this.max = new C_Point_1.C_Point(0, 0, 0);
        this._init(p1, p2);
    }
    _init(p1, p2) {
        const min_x = (0, F_Math_1._min)([p1.x, p2.x]);
        const max_x = (0, F_Math_1._max)([p1.x, p2.x]);
        const min_y = (0, F_Math_1._min)([p1.y, p2.y]);
        const max_y = (0, F_Math_1._max)([p1.y, p2.y]);
        const min_z = (0, F_Math_1._min)([p1.z, p2.z]);
        const max_z = (0, F_Math_1._max)([p1.z, p2.z]);
        this.min = new C_Point_1.C_Point(min_x, min_y, min_z);
        this.max = new C_Point_1.C_Point(max_x, max_y, max_z);
        return this;
    }
    within(a, y, z) {
        if (typeof a === "number" && typeof y === "number" && typeof z === "number") {
            if (a < this.min.x || a > this.max.x)
                return false;
            if (y < this.min.y || y > this.max.y)
                return false;
            if (z < this.min.z || z > this.max.z)
                return false;
            return true;
        }
        if (typeof a === "object" && a instanceof C_Point_1.C_Point) {
            const p = a;
            if (p.x < this.min.x || p.x > this.max.x)
                return false;
            if (p.y < this.min.y || p.y > this.max.y)
                return false;
            if (p.z < this.min.z || p.z > this.max.z)
                return false;
            return true;
        }
        if (typeof a === "object" && a instanceof C_Range) {
            const p = a;
            if (p.min_x() < this.min.x || p.max_x() > this.max.x)
                return false;
            if (p.min_y() < this.min.y || p.max_y() > this.max.y)
                return false;
            if (p.min_z() < this.min.z || p.max_z() > this.max.z)
                return false;
            return true;
        }
        return false;
    }
    min_x() { return this.min.x; }
    max_x() { return this.max.x; }
    min_y() { return this.min.y; }
    max_y() { return this.max.y; }
    min_z() { return this.min.z; }
    max_z() { return this.max.z; }
    size_x() {
        return this.max.x - this.min.x + 1;
    }
    size_y() {
        return this.max.y - this.min.y + 1;
    }
    size_z() {
        return this.max.z - this.min.z + 1;
    }
    do_all_xyz(fn) {
        for (var z = this.min.z; z <= this.max.z; z++) {
            for (var y = this.min.y; y <= this.max.y; y++) {
                for (var x = this.min.x; y <= this.max.x; x++) {
                    if (!fn(x, y, z))
                        return false;
                }
            }
        }
        return true;
    }
    do_all_p(fn) {
        for (var z = this.min.z; z <= this.max.z; z++) {
            for (var y = this.min.y; y <= this.max.y; y++) {
                for (var x = this.min.x; y <= this.max.x; x++) {
                    if (!fn(new C_Point_1.C_Point(x, y, z)))
                        return false;
                }
            }
        }
        return true;
    }
    encode() {
        return {
            min: this.min.encode(),
            max: this.min.encode(),
        };
    }
    decode(j) {
        if (j === undefined)
            return this;
        if (j.min === undefined)
            return this;
        if (j.max === undefined)
            return this;
        const p1 = new C_Point_1.C_Point(j.min);
        const p2 = new C_Point_1.C_Point(j.max);
        return this._init(p1, p2);
    }
}
exports.C_Range = C_Range;


/***/ }),

/***/ "./src/d_mdl/C_SaveData.ts":
/*!*********************************!*\
  !*** ./src/d_mdl/C_SaveData.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_SaveData = void 0;
exports.alert_save_info = alert_save_info;
exports.alert_save_detail = alert_save_detail;
const C_Maze_1 = __webpack_require__(/*! ./C_Maze */ "./src/d_mdl/C_Maze.ts");
const C_Guild_1 = __webpack_require__(/*! ./C_Guild */ "./src/d_mdl/C_Guild.ts");
const C_MovablePoint_1 = __webpack_require__(/*! ./C_MovablePoint */ "./src/d_mdl/C_MovablePoint.ts");
const C_Team_1 = __webpack_require__(/*! ./C_Team */ "./src/d_mdl/C_Team.ts");
const C_SaveInfo_1 = __webpack_require__(/*! ./C_SaveInfo */ "./src/d_mdl/C_SaveInfo.ts");
function alert_save_info(a) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    if (a === undefined)
        return;
    alert("Save Info:"
        + "\nsave_id:    " + ((_a = a.save_id) !== null && _a !== void 0 ? _a : '?')
        + "\nplayer_id:  " + ((_b = a.player_id) !== null && _b !== void 0 ? _b : '?')
        + "\nuniq_no:    " + ((_c = a.uniq_no) !== null && _c !== void 0 ? _c : '?')
        + "\ntitle:      " + ((_d = a.title) !== null && _d !== void 0 ? _d : '?')
        + "\ndetail:     " + ((_e = a.detail) !== null && _e !== void 0 ? _e : '?')
        + "\npoint:      " + ((_f = a.point) !== null && _f !== void 0 ? _f : '?')
        + "\nauto_mode:  " + ((_g = a.auto_mode) !== null && _g !== void 0 ? _g : '?')
        + "\nis_active:  " + ((_h = a.is_active) !== null && _h !== void 0 ? _h : '?')
        + "\nis_delete:  " + ((_j = a.is_delete) !== null && _j !== void 0 ? _j : '?')
        + "\nmvpt_count: " + ((_l = (_k = a.all_mvpt) === null || _k === void 0 ? void 0 : _k.length) !== null && _l !== void 0 ? _l : '?')
        + "\nmaze_count: " + ((_o = (_m = a.all_maze) === null || _m === void 0 ? void 0 : _m.length) !== null && _o !== void 0 ? _o : '?')
        + "\nguld_count: " + ((_q = (_p = a.all_guld) === null || _p === void 0 ? void 0 : _p.length) !== null && _q !== void 0 ? _q : '?')
        + "\nteam_count: " + ((_s = (_r = a.all_team) === null || _r === void 0 ? void 0 : _r.length) !== null && _s !== void 0 ? _s : '?')
        + "\n");
}
function alert_save_detail(a) {
    var _a, _b, _c, _d;
    if (a === undefined)
        return;
    try {
        for (const mvpt of (_a = a.all_mvpt) !== null && _a !== void 0 ? _a : [])
            (0, C_MovablePoint_1.alert_mvpt_info)(mvpt);
    }
    catch (err) {
        alert('alert mvpt error: ' + err);
    }
    try {
        for (const team of (_b = a.all_team) !== null && _b !== void 0 ? _b : [])
            (0, C_Team_1.alert_team_info)(team);
    }
    catch (err) {
        alert('alert team error: ' + err);
    }
    try {
        for (const maze of (_c = a.all_maze) !== null && _c !== void 0 ? _c : [])
            (0, C_Maze_1.alert_maze_info)(maze);
    }
    catch (err) {
        alert('alert maze error: ' + err);
    }
    try {
        for (const guld of (_d = a.all_guld) !== null && _d !== void 0 ? _d : [])
            (0, C_Guild_1.alert_guld_info)(guld);
    }
    catch (err) {
        alert('alert guld error: ' + err);
    }
}
class C_SaveData extends C_SaveInfo_1.C_SaveInfo {
    constructor(a) {
        super(a);
        this.all_mvpt = {};
        this.all_maze = {};
        this.all_team = {};
        this.all_guld = {};
        if (a !== undefined)
            this.decode(a);
    }
    static new(a) {
        return new C_SaveData(a);
    }
    encode() {
        let save_date;
        try {
            const save_data = super.encode();
            save_data.all_mvpt = this._encode_all_data(this.all_mvpt);
            save_data.all_maze = this._encode_all_data(this.all_maze);
            save_data.all_team = this._encode_all_data(this.all_team);
            save_data.all_guld = this._encode_all_data(this.all_guld);
            return save_data;
        }
        catch (err) {
            alert('SaveData Encode Error: ' + err);
            return {};
        }
    }
    _encode_all_data(all_data) {
        const all_JSON = [];
        for (let i in all_data)
            all_JSON.push(all_data[i].encode());
        return all_JSON;
    }
    decode(s) {
        super.decode(s);
        if (s.all_mvpt !== undefined) {
            this.all_mvpt = {};
            for (const json_mvpt of s.all_mvpt) {
                const mvpt = (new C_MovablePoint_1.C_MovablePoint()).decode(json_mvpt);
                this.all_mvpt[mvpt.uid()] = mvpt;
            }
        }
        if (s.all_maze !== undefined) {
            this.all_maze = {};
            for (const json_maze of s.all_maze) {
                const maze = (new C_Maze_1.C_Maze()).decode(json_maze);
                this.all_maze[maze.uid()] = maze;
            }
        }
        if (s.all_team !== undefined) {
            this.all_team = {};
            for (const json_team of s.all_team) {
                const team = (new C_Team_1.C_Team()).decode(json_team);
                this.all_team[team.uid()] = team;
            }
        }
        if (s.all_guld !== undefined) {
            this.all_guld = {};
            for (const json_guld of s.all_guld) {
                const guld = (new C_Guild_1.C_Guild()).decode(json_guld);
                this.all_guld[guld.uid()] = guld;
            }
        }
        return this;
    }
    alert() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        alert("Save Info:"
            + "\nsave_id:    " + ((_a = this.save_id) !== null && _a !== void 0 ? _a : '?')
            + "\nplayer_id:  " + ((_b = this.player_id) !== null && _b !== void 0 ? _b : '?')
            + "\nuniq_no:    " + ((_c = this.uniq_no) !== null && _c !== void 0 ? _c : '?')
            + "\ntitle:      " + ((_d = this.title) !== null && _d !== void 0 ? _d : '?')
            + "\ndetail:     " + ((_e = this.detail) !== null && _e !== void 0 ? _e : '?')
            + "\npoint:      " + ((_f = this.point) !== null && _f !== void 0 ? _f : '?')
            + "\nauto_mode:  " + (this.auto_mode ? 'Y' : 'N')
            + "\nis_active:  " + (this.is_active ? 'Y' : 'N')
            + "\nis_delete:  " + (this.is_delete ? 'Y' : 'N')
            + "\nmvpt_count: " + ((_h = (_g = this.all_mvpt) === null || _g === void 0 ? void 0 : _g.length) !== null && _h !== void 0 ? _h : '?')
            + "\nmaze_count: " + ((_k = (_j = this.all_maze) === null || _j === void 0 ? void 0 : _j.length) !== null && _k !== void 0 ? _k : '?')
            + "\nguld_count: " + ((_m = (_l = this.all_guld) === null || _l === void 0 ? void 0 : _l.length) !== null && _m !== void 0 ? _m : '?')
            + "\nteam_count: " + ((_p = (_o = this.all_team) === null || _o === void 0 ? void 0 : _o.length) !== null && _p !== void 0 ? _p : '?')
            + "\n");
    }
    alert_detail() {
        try {
            for (const ii in this.all_mvpt)
                this.all_mvpt[ii].alert();
        }
        catch (err) {
            alert('alert mvpt error: ' + err);
        }
        try {
            for (const ii in this.all_team)
                this.all_team[ii].alert();
        }
        catch (err) {
            alert('alert team error: ' + err);
        }
        try {
            for (const ii in this.all_maze)
                this.all_maze[ii].alert();
        }
        catch (err) {
            alert('alert maze error: ' + err);
        }
        try {
            for (const ii in this.all_guld)
                this.all_guld[ii].alert();
        }
        catch (err) {
            alert('alert guld error: ' + err);
        }
    }
}
exports.C_SaveData = C_SaveData;


/***/ }),

/***/ "./src/d_mdl/C_SaveInfo.ts":
/*!*********************************!*\
  !*** ./src/d_mdl/C_SaveInfo.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_SaveInfo = void 0;
exports.alert_saveinfo_info = alert_saveinfo_info;
const C_MovablePoint_1 = __webpack_require__(/*! ./C_MovablePoint */ "./src/d_mdl/C_MovablePoint.ts");
function alert_saveinfo_info(a) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
    if (a === undefined)
        return;
    alert("Save Info:"
        + "\nsave_id:    " + ((_a = a.save_id) !== null && _a !== void 0 ? _a : '?')
        + "\nplayer_id:  " + ((_b = a.player_id) !== null && _b !== void 0 ? _b : '?')
        + "\nuniq_no:    " + ((_c = a.uniq_no) !== null && _c !== void 0 ? _c : '?')
        + "\ntitle:      " + ((_d = a.title) !== null && _d !== void 0 ? _d : '?')
        + "\ndetail:     " + ((_e = a.detail) !== null && _e !== void 0 ? _e : '?')
        + "\npoint:      " + ((_f = a.point) !== null && _f !== void 0 ? _f : '?')
        + "\nauto_mode:  " + ((_g = a.auto_mode) !== null && _g !== void 0 ? _g : '?')
        + "\nis_active:  " + ((_h = a.is_active) !== null && _h !== void 0 ? _h : '?')
        + "\nis_delete:  " + ((_j = a.is_delete) !== null && _j !== void 0 ? _j : '?')
        + "\nsave_time:  " + ((_k = a.save_time) !== null && _k !== void 0 ? _k : '?')
        + "\nmyurl:      " + ((_m = (_l = a.mypos) === null || _l === void 0 ? void 0 : _l.cur_url) !== null && _m !== void 0 ? _m : '?')
        + "\nteam_uid:   " + ((_p = (_o = a.mypos) === null || _o === void 0 ? void 0 : _o.team_uid) !== null && _p !== void 0 ? _p : '?')
        + "\nloc_kind:   " + ((_r = (_q = a.mypos) === null || _q === void 0 ? void 0 : _q.kind) !== null && _r !== void 0 ? _r : '?')
        + "\nloc_name:   " + ((_t = (_s = a.mypos) === null || _s === void 0 ? void 0 : _s.name) !== null && _t !== void 0 ? _t : '?')
        + "\nloc_uid:    " + ((_v = (_u = a.mypos) === null || _u === void 0 ? void 0 : _u.loc_uid) !== null && _v !== void 0 ? _v : '?')
        + "\n");
}
class C_SaveInfo {
    constructor(a) {
        this.save_id = -1;
        this.player_id = -1;
        this.uniq_no = -1;
        this.title = '';
        this.detail = '';
        this.point = '';
        this.auto_mode = false;
        this.is_active = true;
        this.is_delete = false;
        this.save_time = new Date();
        this.mypos = new C_MovablePoint_1.C_MovablePoint();
        if (a !== undefined)
            this.decode(a);
    }
    static new(a) {
        return new C_SaveInfo(a);
    }
    encode() {
        let save_date;
        try {
            save_date = this.save_time.toISOString();
        }
        catch (err) {
            save_date = new Date().toISOString();
        }
        try {
            return {
                save_id: this.save_id,
                player_id: this.player_id,
                uniq_no: this.uniq_no,
                title: this.title,
                detail: this.detail,
                point: this.point,
                auto_mode: this.auto_mode ? '1' : '0',
                is_active: this.is_active ? '1' : '0',
                is_delete: this.is_delete ? '1' : '0',
                save_time: save_date,
                mypos: this.mypos.encode(),
            };
        }
        catch (err) {
            alert('SaveData Encode Error: ' + err);
            return {};
        }
    }
    decode(s) {
        var _a, _b, _c, _d, _e, _f;
        this.save_id = (_a = s.save_id) !== null && _a !== void 0 ? _a : this.save_id;
        this.player_id = (_b = s.player_id) !== null && _b !== void 0 ? _b : this.player_id;
        this.uniq_no = (_c = s.uniq_no) !== null && _c !== void 0 ? _c : this.uniq_no;
        this.title = (_d = s.title) !== null && _d !== void 0 ? _d : this.title;
        this.detail = (_e = s.detail) !== null && _e !== void 0 ? _e : this.detail;
        this.point = (_f = s.point) !== null && _f !== void 0 ? _f : this.point;
        if (s.auto_mode === undefined)
            this.auto_mode;
        else
            s.auto_mode !== '0' ? true : false;
        if (s.is_active === undefined)
            this.is_active;
        else
            s.is_active !== '0' ? true : false;
        if (s.is_delete === undefined)
            this.is_delete;
        else
            s.is_delete !== '0' ? true : false;
        if (s.save_time !== undefined)
            this.save_time = new Date(s.save_time);
        if (s.mypos !== undefined)
            this.mypos.decode(s.mypos);
        return this;
    }
    alert() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        alert("SaveInfo DATA:"
            + "\nsave_id:    " + ((_a = this.save_id) !== null && _a !== void 0 ? _a : '?')
            + "\nplayer_id:  " + ((_b = this.player_id) !== null && _b !== void 0 ? _b : '?')
            + "\nuniq_no:    " + ((_c = this.uniq_no) !== null && _c !== void 0 ? _c : '?')
            + "\ntitle:      " + ((_d = this.title) !== null && _d !== void 0 ? _d : '?')
            + "\ndetail:     " + ((_e = this.detail) !== null && _e !== void 0 ? _e : '?')
            + "\npoint:      " + ((_f = this.point) !== null && _f !== void 0 ? _f : '?')
            + "\nauto_mode:  " + (this.auto_mode ? 'Y' : 'N')
            + "\nis_active:  " + (this.is_active ? 'Y' : 'N')
            + "\nis_delete:  " + (this.is_delete ? 'Y' : 'N')
            + "\nmyurl:      " + ((_g = this.mypos.url()) !== null && _g !== void 0 ? _g : '?')
            + "\nteam_uid:   " + ((_h = this.mypos.tid()) !== null && _h !== void 0 ? _h : '?')
            + "\nloc_kind:   " + ((_j = this.mypos.get_lckd()) !== null && _j !== void 0 ? _j : '?')
            + "\nloc_name:   " + ((_k = this.mypos.get_name()) !== null && _k !== void 0 ? _k : '?')
            + "\nloc_uid:    " + ((_l = this.mypos.get_uid()) !== null && _l !== void 0 ? _l : '?')
            + "\n");
    }
}
exports.C_SaveInfo = C_SaveInfo;


/***/ }),

/***/ "./src/d_mdl/C_Team.ts":
/*!*****************************!*\
  !*** ./src/d_mdl/C_Team.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Team = void 0;
exports.alert_team_info = alert_team_info;
const C_Walker_1 = __webpack_require__(/*! ./C_Walker */ "./src/d_mdl/C_Walker.ts");
const C_Hero_1 = __webpack_require__(/*! ./C_Hero */ "./src/d_mdl/C_Hero.ts");
const C_TeamView_1 = __webpack_require__(/*! ./C_TeamView */ "./src/d_mdl/C_TeamView.ts");
const F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "./src/d_utl/F_Rand.ts");
function alert_team_info(a) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2;
    if (a === undefined)
        return;
    alert("Team Info:"
        + "\nid:    " + ((_a = a.id) !== null && _a !== void 0 ? _a : '?')
        + "\nuniq_id:  " + ((_b = a.uniq_id) !== null && _b !== void 0 ? _b : '?')
        + "\nname:  " + ((_c = a.name) !== null && _c !== void 0 ? _c : '?')
        + "\nsave_id: " + ((_d = a.save_id) !== null && _d !== void 0 ? _d : '?')
        + "\nurl:  " + ((_f = (_e = a.locate) === null || _e === void 0 ? void 0 : _e.cur_url) !== null && _f !== void 0 ? _f : '?')
        + "\nlckd: " + ((_h = (_g = a.locate) === null || _g === void 0 ? void 0 : _g.kind) !== null && _h !== void 0 ? _h : '?')
        + "\nlcnm: " + ((_k = (_j = a.locate) === null || _j === void 0 ? void 0 : _j.name) !== null && _k !== void 0 ? _k : '?')
        + "\nlcid: " + ((_m = (_l = a.locate) === null || _l === void 0 ? void 0 : _l.loc_uid) !== null && _m !== void 0 ? _m : '?')
        + "\ncur_x: " + ((_q = (_p = (_o = a.locate) === null || _o === void 0 ? void 0 : _o.loc_pos) === null || _p === void 0 ? void 0 : _p.x) !== null && _q !== void 0 ? _q : '?')
        + "\ncur_y: " + ((_t = (_s = (_r = a.locate) === null || _r === void 0 ? void 0 : _r.loc_pos) === null || _s === void 0 ? void 0 : _s.y) !== null && _t !== void 0 ? _t : '?')
        + "\ncur_z: " + ((_w = (_v = (_u = a.locate) === null || _u === void 0 ? void 0 : _u.loc_pos) === null || _v === void 0 ? void 0 : _v.z) !== null && _w !== void 0 ? _w : '?')
        + "\ncur_d: " + ((_z = (_y = (_x = a.locate) === null || _x === void 0 ? void 0 : _x.loc_pos) === null || _y === void 0 ? void 0 : _y.d) !== null && _z !== void 0 ? _z : '?')
        + "\ngold: " + ((_0 = a.gold) !== null && _0 !== void 0 ? _0 : 0)
        + "\nheroes: " + ((_2 = (_1 = a.heroes) === null || _1 === void 0 ? void 0 : _1.length) !== null && _2 !== void 0 ? _2 : '?')
        + "\n");
}
class C_Team {
    static newObj(j) {
        return new C_Team(j);
    }
    newObj(j) { return C_Team.newObj(j); }
    constructor(j) {
        this.my_id = 0;
        this.my_name = 'Neo Team?';
        this.uniq_id = 'mai_team#' + (0, F_Rand_1._get_uuid)();
        this.save_id = 0;
        this.myView = new C_TeamView_1.C_CurrentTeamView(this);
        this.walker = new C_Walker_1.C_Walker();
        this.walker.set_tid(this.uid());
        this.gold = 0;
        this.heroes = {};
        this.hope_motion = 'NOP';
        if (j !== undefined)
            this.decode(j);
    }
    set_prp(arg) {
        this.decode(arg);
    }
    uid() { return this.uniq_id; }
    within(p) {
        var _a, _b;
        const here = (_a = this.walker) === null || _a === void 0 ? void 0 : _a.get_p();
        return (_b = here === null || here === void 0 ? void 0 : here.within(p)) !== null && _b !== void 0 ? _b : false;
    }
    view() { return this.myView; }
    walk() {
        return this.walker;
    }
    canThrough() { return true; }
    hres() {
        const hres = [];
        for (let ii in this.heroes)
            hres.push(this.heroes[ii]);
        return hres;
    }
    clear_hres() {
        this.heroes = {};
    }
    add_hero(hero) {
        this.heroes[hero.uid()] = hero;
    }
    rmv_hero(hero) {
        delete this.heroes[hero.uid()];
    }
    get_loc() {
        return this.walker;
    }
    set_loc(loc) {
        var _a;
        ((_a = this.walker) !== null && _a !== void 0 ? _a : (this.walker = new C_Walker_1.C_Walker())).decode(loc.encode());
    }
    get_pd() {
        return this.walker.get_pd();
    }
    encode() {
        var _a, _b;
        this.get_loc();
        const json_heroes = [];
        for (let ii in this.heroes)
            json_heroes.push(this.heroes[ii].encode());
        return {
            id: this.my_id,
            name: this.my_name,
            uniq_id: this.uniq_id,
            save_id: this.save_id,
            locate: this.walker.encode(),
            gold: this.gold,
            heroes: json_heroes,
            motion: this.hope_motion,
            view: (_b = (_a = this.myView) === null || _a === void 0 ? void 0 : _a.encode()) !== null && _b !== void 0 ? _b : {},
        };
    }
    decode(a) {
        if (a === undefined)
            return this;
        if (a.id !== undefined)
            this.my_id = a.id;
        if (a.name !== undefined)
            this.my_name = a.name;
        if (a.uniq_id !== undefined)
            this.uniq_id = a.uniq_id;
        if (a.save_id !== undefined)
            this.save_id = a.save_id;
        if (a.motion !== undefined)
            this.hope_motion = a.motion;
        if (a.locate !== undefined)
            this.walker.decode(a.locate);
        if (a.gold !== undefined)
            this.gold = a.gold;
        if (a.heroes !== undefined) {
            this.heroes = {};
            for (const json_hero of a.heroes) {
                const hero = new C_Hero_1.C_Hero(json_hero);
                this.heroes[hero.uid()] = hero;
            }
        }
        return this;
    }
    static encode_all(all_team) {
        const all_team_data = [];
        for (let team of all_team) {
            all_team_data.push(team.encode());
        }
        return all_team_data;
    }
    static decode_all(all_team_data) {
        const all_team = [];
        for (let team_data of all_team_data) {
            all_team.push((new C_Team()).decode(team_data));
        }
        return all_team;
    }
    alert() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        alert("Team Info:"
            + "\nid:    " + ((_a = this.my_id) !== null && _a !== void 0 ? _a : '?')
            + "\nuniq_id:  " + ((_b = this.uniq_id) !== null && _b !== void 0 ? _b : '?')
            + "\nname:  " + ((_c = this.my_name) !== null && _c !== void 0 ? _c : '?')
            + "\nsave_id: " + ((_d = this.save_id) !== null && _d !== void 0 ? _d : '?')
            + "\nurl:  " + ((_e = this.walker.url()) !== null && _e !== void 0 ? _e : '?')
            + "\nlckd: " + ((_f = this.walker.get_lckd_str()) !== null && _f !== void 0 ? _f : '?')
            + "\nlcnm: " + ((_g = this.walker.get_name()) !== null && _g !== void 0 ? _g : '?')
            + "\nlcid: " + ((_h = this.walker.get_uid()) !== null && _h !== void 0 ? _h : '?')
            + "\ncur_x: " + ((_j = this.walker.get_p().x) !== null && _j !== void 0 ? _j : '?')
            + "\ncur_y: " + ((_k = this.walker.get_p().y) !== null && _k !== void 0 ? _k : '?')
            + "\ncur_z: " + ((_l = this.walker.get_p().z) !== null && _l !== void 0 ? _l : '?')
            + "\ncur_d: " + ((_m = this.walker.get_d()) !== null && _m !== void 0 ? _m : '?')
            + "\ngold: " + (Object.keys((_o = this.gold) !== null && _o !== void 0 ? _o : {}).length)
            + "\nheroes: " + ((_q = (_p = this.heroes) === null || _p === void 0 ? void 0 : _p.length) !== null && _q !== void 0 ? _q : '?')
            + "\n");
    }
    alert_hres() {
        for (const ii in this.heroes)
            this.heroes[ii].alert();
    }
}
exports.C_Team = C_Team;


/***/ }),

/***/ "./src/d_mdl/C_TeamView.ts":
/*!*********************************!*\
  !*** ./src/d_mdl/C_TeamView.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_CurrentTeamView = void 0;
const C_PointDir_1 = __webpack_require__(/*! ./C_PointDir */ "./src/d_mdl/C_PointDir.ts");
const C_Team_1 = __webpack_require__(/*! ./C_Team */ "./src/d_mdl/C_Team.ts");
const C_MazeObjView_1 = __webpack_require__(/*! ./C_MazeObjView */ "./src/d_mdl/C_MazeObjView.ts");
class C_CurrentTeamView {
    static newObj(j) {
        const team = new C_Team_1.C_Team(j);
        return new C_CurrentTeamView(team);
    }
    newObj(j) { return C_CurrentTeamView.newObj(j); }
    constructor(team) {
        this.my_layer = 99;
        this.my_team = team;
    }
    layer() { return this.my_layer; }
    set_layer(layer) { this.my_layer = layer; }
    letter() {
        switch (this.my_team.walk().get_d()) {
            case C_PointDir_1.T_Direction.N: return '↑';
            case C_PointDir_1.T_Direction.E: return '→';
            case C_PointDir_1.T_Direction.S: return '↓';
            case C_PointDir_1.T_Direction.W: return '←';
            default: return '🌀';
        }
    }
    canShow() { return false; }
    pad_t() { return 0.0; }
    pad_d() { return 0.0; }
    pad_s() { return 0.0; }
    col_f() { return null; }
    col_b() { return null; }
    col_s() { return null; }
    col_t() { return null; }
    col_d() { return null; }
    col_l() { return null; }
    col_2() { return null; }
    drow3D(frot, back) { }
    drow2D(r) {
        const con = C_MazeObjView_1.C_MazeObjView.get_context2D();
        if (con === undefined)
            return;
        con.beginPath();
        con.moveTo(r.tl.x, r.tl.y);
        con.lineTo(r.tr.x, r.tr.y);
        con.lineTo(r.dr.x, r.dr.y);
        con.lineTo(r.dl.x, r.dl.y);
        con.closePath();
        con.fillStyle = "#ff3333";
        con.fill();
        switch (this.my_team.walk().get_d()) {
            case C_PointDir_1.T_Direction.N:
                this.drow2D_arrow({ x: (r.tl.x + r.tr.x) / 2, y: r.tl.y }, r.dl, r.dr);
                break;
            case C_PointDir_1.T_Direction.E:
                this.drow2D_arrow({ y: (r.tr.y + r.dr.y) / 2, x: r.tr.x }, r.tl, r.dl);
                break;
            case C_PointDir_1.T_Direction.S:
                this.drow2D_arrow({ x: (r.dl.x + r.dr.x) / 2, y: r.dl.y }, r.tr, r.tl);
                break;
            case C_PointDir_1.T_Direction.W:
                this.drow2D_arrow({ y: (r.tl.y + r.dl.y) / 2, x: r.tl.x }, r.dr, r.tr);
                break;
        }
    }
    drow2D_arrow(top, left, right) {
        const con = C_MazeObjView_1.C_MazeObjView.get_context2D();
        if (con === undefined)
            return;
        con.beginPath();
        con.moveTo(top.x, top.y);
        con.lineTo(right.x, right.y);
        con.lineTo(left.x, left.y);
        con.closePath();
        con.fillStyle = "#ff6666";
        con.fill();
        con.strokeStyle = "#ff9999";
        con.lineWidth = 3;
        con.stroke();
    }
    encode() { return { cname: 'CurrentTeamView' }; }
    decode(j) { return this; }
}
exports.C_CurrentTeamView = C_CurrentTeamView;


/***/ }),

/***/ "./src/d_mdl/C_Walker.ts":
/*!*******************************!*\
  !*** ./src/d_mdl/C_Walker.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Walker = void 0;
const C_PointDir_1 = __webpack_require__(/*! ./C_PointDir */ "./src/d_mdl/C_PointDir.ts");
const C_MovablePoint_1 = __webpack_require__(/*! ./C_MovablePoint */ "./src/d_mdl/C_MovablePoint.ts");
class C_Walker extends C_MovablePoint_1.C_MovablePoint {
    constructor(j) {
        super(j);
    }
    get_x() { return this.loc_pos.x; }
    get_y() { return this.loc_pos.y; }
    get_z() { return this.loc_pos.z; }
    set_x(x) { this.loc_pos.x = x; }
    set_y(y) { this.loc_pos.y = y; }
    set_z(z) { this.loc_pos.z = z; }
    set_place(place, url, pos) {
        this.set_uid(place.uid());
        this.set_lckd(place.get_lckd());
        this.set_name(place.get_name());
        if (url !== undefined)
            this.set_url(url);
        if (pos !== undefined) {
            this.set_pd(pos);
        }
    }
    hope_p_fwd() {
        return {
            has_hope: true,
            hope: "Move",
            subj: this.get_p_fwd(),
            doOK: () => { this.set_p_fwd(); },
            doNG: () => { this.isNG(); },
        };
    }
    hope_p_bak() {
        return {
            has_hope: true,
            hope: "Move",
            subj: this.get_p_bak(),
            doOK: () => { this.set_p_bak(); },
            doNG: () => { this.isNG(); },
        };
    }
    hope_p_lft() {
        return {
            has_hope: true,
            hope: "Move",
            subj: this.get_p_lft(),
            doOK: () => { this.set_p_lft(); },
            doNG: () => { this.isNG(); },
        };
    }
    hope_p_rgt() {
        return {
            has_hope: true,
            hope: "Move",
            subj: this.get_p_rgt(),
            doOK: () => { this.set_p_rgt(); },
            doNG: () => { this.isNG(); },
        };
    }
    hope_turn_r() {
        return {
            has_hope: true,
            hope: "Turn",
            subj: this.get_pd(),
            doOK: () => { this.turn_r(); },
            doNG: () => { this.isNG(); },
        };
    }
    hope_turn_l() {
        return {
            has_hope: true,
            hope: "Turn",
            subj: this.get_pd(),
            doOK: () => { this.turn_l(); },
            doNG: () => { this.isNG(); },
        };
    }
    hope_p_up() {
        return {
            has_hope: true,
            hope: "Up",
            subj: this.get_p_up(),
            doOK: () => { this.move_p_up(); },
            doNG: () => { this.isNG(); },
        };
    }
    hope_p_down() {
        return {
            has_hope: true,
            hope: "Down",
            subj: this.get_p_down(),
            doOK: () => { this.move_p_down(); },
            doNG: () => { this.isNG(); },
        };
    }
    move_p_up() {
        this.set_p_up();
    }
    move_p_down() {
        this.set_p_down();
    }
    isNG() {
        return;
    }
    get_p_fwd() {
        return this.__get_p_move(1, 0);
    }
    set_p_fwd() {
        this.set_pd(this.get_p_fwd());
    }
    get_p_bak() {
        return this.__get_p_move(-1, 0);
    }
    set_p_bak() {
        this.set_pd(this.get_p_bak());
    }
    get_p_lft() {
        return this.__get_p_move(0, -1);
    }
    set_p_lft() {
        this.set_pd(this.get_p_lft());
    }
    get_p_rgt() {
        return this.__get_p_move(0, 1);
    }
    set_p_rgt() {
        this.set_pd(this.get_p_rgt());
    }
    get_p_up() {
        const p = new C_PointDir_1.C_PointDir(this.loc_pos);
        p.z--;
        return p;
    }
    set_p_up() {
        this.set_pd(this.get_p_up());
    }
    get_p_down() {
        const p = new C_PointDir_1.C_PointDir(this.loc_pos);
        p.z++;
        return p;
    }
    set_p_down() {
        this.set_pd(this.get_p_down());
    }
    __get_p_move(offsetFB, offsetLR) {
        const p = new C_PointDir_1.C_PointDir(this.loc_pos);
        if (offsetFB !== 0) {
            switch (this.loc_pos.d) {
                case C_PointDir_1.T_Direction.N:
                    p.y -= offsetFB;
                    break;
                case C_PointDir_1.T_Direction.E:
                    p.x += offsetFB;
                    break;
                case C_PointDir_1.T_Direction.S:
                    p.y += offsetFB;
                    break;
                case C_PointDir_1.T_Direction.W:
                    p.x -= offsetFB;
                    break;
            }
        }
        if (offsetLR !== 0) {
            switch (this.loc_pos.d) {
                case C_PointDir_1.T_Direction.N:
                    p.x += offsetLR;
                    break;
                case C_PointDir_1.T_Direction.E:
                    p.y += offsetLR;
                    break;
                case C_PointDir_1.T_Direction.S:
                    p.x -= offsetLR;
                    break;
                case C_PointDir_1.T_Direction.W:
                    p.y -= offsetLR;
                    break;
            }
        }
        return p;
    }
    get_around(front, right, up = 0) {
        var target_x = this.loc_pos.x;
        var target_y = this.loc_pos.y;
        var target_z = this.loc_pos.z - up;
        switch (this.loc_pos.d) {
            case C_PointDir_1.T_Direction.N:
                target_x += right;
                target_y -= front;
                break;
            case C_PointDir_1.T_Direction.E:
                target_x += front;
                target_y += right;
                break;
            case C_PointDir_1.T_Direction.S:
                target_x -= right;
                target_y += front;
                break;
            case C_PointDir_1.T_Direction.W:
                target_x -= front;
                target_y -= right;
                break;
        }
        return new C_PointDir_1.C_PointDir({ x: target_x, y: target_y, z: target_z, d: this.loc_pos.d });
    }
    turn_r() {
        switch (this.loc_pos.d) {
            case C_PointDir_1.T_Direction.N:
                this.loc_pos.d = C_PointDir_1.T_Direction.E;
                break;
            case C_PointDir_1.T_Direction.E:
                this.loc_pos.d = C_PointDir_1.T_Direction.S;
                break;
            case C_PointDir_1.T_Direction.S:
                this.loc_pos.d = C_PointDir_1.T_Direction.W;
                break;
            case C_PointDir_1.T_Direction.W:
                this.loc_pos.d = C_PointDir_1.T_Direction.N;
                break;
        }
    }
    turn_l() {
        switch (this.loc_pos.d) {
            case C_PointDir_1.T_Direction.N:
                this.loc_pos.d = C_PointDir_1.T_Direction.W;
                break;
            case C_PointDir_1.T_Direction.E:
                this.loc_pos.d = C_PointDir_1.T_Direction.N;
                break;
            case C_PointDir_1.T_Direction.S:
                this.loc_pos.d = C_PointDir_1.T_Direction.E;
                break;
            case C_PointDir_1.T_Direction.W:
                this.loc_pos.d = C_PointDir_1.T_Direction.S;
                break;
        }
    }
    turn_b() {
        switch (this.loc_pos.d) {
            case C_PointDir_1.T_Direction.N:
                this.loc_pos.d = C_PointDir_1.T_Direction.S;
                break;
            case C_PointDir_1.T_Direction.E:
                this.loc_pos.d = C_PointDir_1.T_Direction.W;
                break;
            case C_PointDir_1.T_Direction.S:
                this.loc_pos.d = C_PointDir_1.T_Direction.N;
                break;
            case C_PointDir_1.T_Direction.W:
                this.loc_pos.d = C_PointDir_1.T_Direction.W;
                break;
        }
    }
    encode() {
        const j = super.encode();
        return j;
    }
    decode(a) {
        if (a === undefined)
            return this;
        super.decode(a);
        return this;
    }
}
exports.C_Walker = C_Walker;


/***/ }),

/***/ "./src/d_mdl/C_Wall.ts":
/*!*****************************!*\
  !*** ./src/d_mdl/C_Wall.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Wall = void 0;
const F_Math_1 = __webpack_require__(/*! ../d_utl/F_Math */ "./src/d_utl/F_Math.ts");
class C_Wall {
    constructor(depth = 5, size) {
        if (depth < 3)
            depth = 5;
        if (depth % 2 !== 1)
            depth++;
        const min_x = size.min_x();
        const min_y = size.min_y();
        const max_x = size.max_x();
        const max_y = size.max_y();
        const center_x = (max_x - min_x) / 2;
        const front_wall_size_x = (max_x - min_x) / depth;
        const side_wall_size_x = (center_x - front_wall_size_x / 2) / depth;
        const front_wall_H_size_x = new Array(depth + 1);
        front_wall_H_size_x[depth] = front_wall_size_x / 2;
        for (let i = depth - 1; i >= 0; i--) {
            front_wall_H_size_x[i] = front_wall_H_size_x[i + 1] + side_wall_size_x;
        }
        const front_wall_size_y = (max_y - min_y) / depth;
        const side_wall_size_T = (max_y - min_y - front_wall_size_y) / (depth * 2);
        const side_wall_size_B = (max_y - min_y - front_wall_size_y) / (depth * 2);
        const wall = new Array(depth + 1);
        for (let j = 0; j < depth + 1; j++) {
            wall[j] = new Array(depth + 1);
            for (let k = 0; k < depth + 1; k++) {
                const wk_x = center_x - front_wall_H_size_x[j] * (depth - 2 * k);
                wall[j][k] = {
                    min_x: (0, F_Math_1._round)(wk_x, 0),
                    max_x: (0, F_Math_1._round)(wk_x + front_wall_H_size_x[j] * 2, 0),
                    min_y: (0, F_Math_1._round)(min_y + side_wall_size_T * j, 0),
                    max_y: (0, F_Math_1._round)(max_y - side_wall_size_B * j, 0),
                };
            }
        }
        this.d = depth;
        this.w = wall;
    }
    get_depth() {
        return this.d;
    }
    get(depth, offset) {
        const H_dept = (this.d - 1) / 2;
        return this.w[depth][H_dept + offset];
    }
}
exports.C_Wall = C_Wall;


/***/ }),

/***/ "./src/d_mdl/T_Direction.ts":
/*!**********************************!*\
  !*** ./src/d_mdl/T_Direction.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.$DirectionName = exports.T_Direction = void 0;
exports.T_Direction = {
    N: 0,
    E: 1,
    S: 2,
    W: 3,
    X: 99,
    MAX: 3
};
exports.$DirectionName = {
    0: '北',
    1: '東',
    2: '南',
    3: '西',
    99: '謎'
};


/***/ }),

/***/ "./src/d_mdl/T_MzKind.ts":
/*!*******************************!*\
  !*** ./src/d_mdl/T_MzKind.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.T_RvMzKind = exports.T_MzKind = void 0;
exports.T_MzKind = {
    NoDef: 0,
    Floor: 1,
    Unexp: 2,
    Stone: 3,
    Unkwn: 4,
    StrUp: 5,
    StrDn: 6,
    StrUD: 7,
    Empty: 255,
};
exports.T_RvMzKind = {
    0: exports.T_MzKind.NoDef,
    1: exports.T_MzKind.Floor,
    2: exports.T_MzKind.Unexp,
    3: exports.T_MzKind.Stone,
    4: exports.T_MzKind.Unkwn,
    5: exports.T_MzKind.StrUp,
    6: exports.T_MzKind.StrDn,
    7: exports.T_MzKind.StrUD,
    255: exports.T_MzKind.Empty,
};


/***/ }),

/***/ "./src/d_utl/C_UrlOpt.ts":
/*!*******************************!*\
  !*** ./src/d_utl/C_UrlOpt.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_UrlOpt = void 0;
class C_UrlOpt {
    constructor(a) {
        if (typeof a === "undefined") {
            this.v = {};
            return;
        }
        if (typeof a === "string") {
            this.set_from_string(a);
        }
        if (typeof a === "object") {
            this.v = a;
            return;
        }
        this.v = {};
        return;
    }
    get_keys() {
        const key_list = new Array;
        for (var key in this.v) {
            key_list.push(key);
        }
        return key_list;
    }
    get(key) {
        if (key in this.v) {
            if (typeof this.v[key] === "number") {
                return this.v[key].toString();
            }
            if (typeof this.v[key] === "object") {
                return JSON.stringify(this.v[key]);
            }
            return this.v[key];
        }
        else {
            return "";
        }
    }
    set(ukn, val) {
        if (typeof ukn === "string") {
            if (typeof val === "undefined") {
                this.add_from_string(ukn);
                return;
            }
            else if (typeof val === "string") {
                this.v[ukn] = val;
                return;
            }
            else if (typeof val === "number") {
                this.v[ukn] = val;
                return;
            }
            else if (typeof val === "object") {
                this.v[ukn] = val;
                return;
            }
            else {
                this.v[ukn] = "";
                return;
            }
        }
        if (typeof ukn === "object") {
            const attr = ukn;
            for (const item in attr) {
                this.v[item] = attr[item];
            }
            return;
        }
        return;
    }
    isset(key) {
        return (key in this.v);
    }
    remove(key) {
        if (key in this.v) {
            delete this.v[key];
        }
    }
    clear() {
        this.v = {};
    }
    toString() {
        const len = Object.keys(this.v).length;
        if (len < 1)
            return "";
        var str_array = [];
        for (const key in this.v) {
            str_array.push(key + "=" + this.v[key]);
        }
        return str_array.join("&");
    }
    toJSON() {
        return JSON.stringify(this.v);
    }
    toFormData() {
        const len = Object.keys(this.v).length;
        if (len < 1)
            return undefined;
        var form_data = new FormData();
        for (const key in this.v) {
            const value = this.v[key];
            if (typeof value === "string")
                form_data.append(key, value);
            if (typeof value === "object")
                form_data.append(key, JSON.stringify(value));
            else
                form_data.append(key, value.toString());
        }
        return form_data;
    }
    set_from_string(s) {
        this.clear();
        this.add_from_string(s);
    }
    add_from_string(s) {
        const str = s.replace(/^(\??)(.*)$/, '$2');
        const str_array = str.split("&");
        str_array.forEach((item) => {
            const key_value = item.split("=");
            if (key_value.length < 2) {
                this.v[key_value[0]] = '';
            }
            else {
                this.v[key_value[0]] = key_value[1];
            }
        });
    }
}
exports.C_UrlOpt = C_UrlOpt;


/***/ }),

/***/ "./src/d_utl/F_Math.ts":
/*!*****************************!*\
  !*** ./src/d_utl/F_Math.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._isNum = _isNum;
exports._getNum = _getNum;
exports._round = _round;
exports._ceil = _ceil;
exports._floor = _floor;
exports._min = _min;
exports._max = _max;
function _isNum(numVal) {
    const pattern = /^[-+]?([1-9]\d*|0)(\.\d+)?$/;
    return pattern.test(numVal);
}
function _getNum(numVal) {
    const pattern = /([^0-9])/g;
    const valstr = numVal.replace(pattern, '');
    return Number(valstr);
}
function _round(num, digit) {
    const multiplier = Math.pow(10, digit);
    return Math.round(num * multiplier) / multiplier;
}
function _ceil(num, digit) {
    const multiplier = Math.pow(10, digit);
    return Math.ceil(num * multiplier) / multiplier;
}
function _floor(num, digit) {
    const multiplier = Math.pow(10, digit);
    return Math.floor(num * multiplier) / multiplier;
}
function _min(a) {
    return a.reduce((n1, n2) => Math.min(n1, n2));
}
function _max(a) {
    return a.reduce((n1, n2) => Math.max(n1, n2));
}


/***/ }),

/***/ "./src/d_utl/F_Rand.ts":
/*!*****************************!*\
  !*** ./src/d_utl/F_Rand.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_SeededRand = void 0;
exports._irand = _irand;
exports._igrand = _igrand;
exports._grand = _grand;
exports._inrand = _inrand;
exports._nrand = _nrand;
exports._get_uuid = _get_uuid;
exports._selectItem = _selectItem;
exports._shuffleArray = _shuffleArray;
exports._random_str = _random_str;
exports._random_UpperStr = _random_UpperStr;
exports._random_LowerStr = _random_LowerStr;
exports._random_UpperChar = _random_UpperChar;
exports._random_LowerChar = _random_LowerChar;
exports._random_NumChar = _random_NumChar;
exports._random_Char = _random_Char;
const F_Math_1 = __webpack_require__(/*! ./F_Math */ "./src/d_utl/F_Math.ts");
const frand = () => { return Math.random(); };
function _irand(min = 0, max = 1, rand = frand) {
    const f_rand = Math.floor(rand() * (max - min + 1) + min);
    return (0, F_Math_1._round)(f_rand, 0);
}
function _igrand(min = 0, max = 1, rand = frand) {
    return _irand(min, max, () => { return _grand(0, 1, rand); });
}
function _grand(min = 0, max = 1, rand = frand) {
    return Math.floor(___gaussianRand(rand) * (max - min + 1) + min);
}
function ___gaussianRand(rand = frand) {
    let sum = 0;
    for (let i = 0; i < 6; i += 1) {
        sum += rand();
    }
    return sum / 6;
}
function _inrand(min = 0, max = 1, dd = 3.0, rand = frand) {
    return Math.floor(_nrand(min, max, dd, rand));
}
function _nrand(min = 0.0, max = 1.0, dd = 3.0, rand = frand) {
    const ave = 0.5;
    const a = rand();
    const b = rand();
    let x = ave + _fab(a, b) / (2.0 * dd);
    x = min + x * (max - min);
    x = (0, F_Math_1._max)([min, x]);
    x = (0, F_Math_1._min)([max, x]);
    return x;
}
function _fab(a, b) {
    return Math.sqrt(-2.0 * Math.log(a)) * Math.sin(2.0 * Math.PI * b);
}
function _gab(a, b) {
    return Math.sqrt(-2.0 * Math.log(a)) * Math.cos(2.0 * Math.PI * b);
}
class C_SeededRand {
    constructor(seed) {
        this.seed = seed;
        this.first_seed = seed;
    }
    reset() {
        this.seed = this.first_seed;
    }
    random() {
        this.seed = (this.seed * 9301 + 49297) % 233280;
        return this.seed / 233280.0;
    }
}
exports.C_SeededRand = C_SeededRand;
function _get_uuid(len = 20, rand = frand) {
    const lft = (new Date()).getTime().toString(16);
    const rgt_len = (0, F_Math_1._max)([len - lft.length, 1]);
    const rgt = Math.floor(Math.pow(10, rgt_len) * rand()).toString(16);
    return lft + rgt;
}
function _selectItem(items, rand = frand) {
    var ttl = 0;
    for (let item of items)
        ttl += item.ratio;
    const target = _irand(0, ttl, rand);
    var sum = 0;
    for (const item of items) {
        sum += item.ratio;
        if (target < sum) {
            return item;
        }
    }
    return undefined;
}
function _shuffleArray(array, rand = frand) {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = _irand(0, i, rand);
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}
function _random_str(length) {
    let str = '';
    for (let i = 0; i < length; i++)
        str += _random_Char();
    return str;
}
function _random_UpperStr(length) {
    let str = '';
    for (let i = 0; i < length; i++)
        str += _random_UpperChar();
    return str;
}
function _random_LowerStr(length) {
    let str = '';
    for (let i = 0; i < length; i++)
        str += _random_LowerChar();
    return str;
}
function _random_UpperChar() {
    const val = _irand(0, 26);
    return String.fromCharCode(65 + val);
}
function _random_LowerChar() {
    const val = _irand(0, 26);
    return String.fromCharCode(95 + val);
}
function _random_NumChar() {
    const val = _irand(0, 9);
    return String.fromCharCode(48 + val);
}
function _random_Char() {
    const val = _irand(0, 61);
    if (val < 26)
        return String.fromCharCode(65 + val);
    if (val < 52)
        return String.fromCharCode(97 + val - 26);
    return String.fromCharCode(48 + val - 52);
}


/***/ }),

/***/ "./src/d_vie/C_DisplayMessage.ts":
/*!***************************************!*\
  !*** ./src/d_vie/C_DisplayMessage.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_DisplayMessage = void 0;
class C_DisplayMessage {
    constructor(con, id = 'client_message') {
        C_DisplayMessage.me = this;
        this.id = id;
        this.div = document.createElement('div');
        if (this.div === null)
            alert('Can not founnd Div#client_message!');
        this.div.setAttribute('id', this.id);
        con.insertBefore(this.div, con.firstChild);
        C_DisplayMessage.me.clear_message();
    }
    static getObj(con = null, id = 'client_message') {
        if (typeof this.me !== "object" || !(this.me instanceof C_DisplayMessage)) {
            if (con === null) {
                con = document.createElement('div');
                document.body.appendChild(con);
            }
            this.me = new C_DisplayMessage(con, id);
        }
        return this.me;
    }
    display_message(mes, fr_color = 'inherit', bg_color = 'inherit') {
        const p = document.createElement('p');
        p.style.setProperty('color', fr_color);
        p.style.setProperty('background-color', bg_color);
        p.innerHTML = mes;
        this.div.insertBefore(p, this.div.firstChild);
    }
    clear_message() {
        while (this.div.firstChild) {
            this.div.removeChild(this.div.firstChild);
        }
        ;
    }
    normal_message(mes) {
        this.display_message(mes);
    }
    notice_message(mes) {
        this.display_message(mes, '#006600', '#ccffcc');
    }
    warning_message(mes) {
        this.display_message(mes, '#ffffff', '#ff0000');
    }
}
exports.C_DisplayMessage = C_DisplayMessage;


/***/ }),

/***/ "./src/d_vie/C_OneLineViewMessage.ts":
/*!*******************************************!*\
  !*** ./src/d_vie/C_OneLineViewMessage.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_OneLineViewMessage = void 0;
class C_OneLineViewMessage {
    constructor(id, parent) {
        var _a;
        (_a = C_OneLineViewMessage.me) !== null && _a !== void 0 ? _a : (C_OneLineViewMessage.me = {});
        C_OneLineViewMessage.me[id] = this;
        try {
            this.p = document.getElementById(id);
        }
        catch (err) {
            this.p = document.createElement('p');
            this.p.id = id;
            parent !== null && parent !== void 0 ? parent : (parent = document.body);
            parent.appendChild(this.p);
        }
        C_OneLineViewMessage.me[id].clear_message();
    }
    static getObj(id, parent) {
        var _a, _b;
        var _c;
        (_a = C_OneLineViewMessage.me) !== null && _a !== void 0 ? _a : (C_OneLineViewMessage.me = {});
        (_b = (_c = this.me)[id]) !== null && _b !== void 0 ? _b : (_c[id] = new C_OneLineViewMessage(id, parent));
        return this.me[id];
    }
    display_message(mes, fr_color = 'inherit', bg_color = 'inherit') {
        this.p.style.setProperty('color', fr_color);
        this.p.style.setProperty('background-color', bg_color);
        this.p.innerHTML = mes;
    }
    clear_message() {
        this.display_message('　');
    }
    normal_message(mes) {
        this.display_message(mes);
    }
    notice_message(mes) {
        this.display_message(mes, '#006600', '#ccffcc');
    }
    warning_message(mes) {
        this.display_message(mes, '#ffffff', '#ff0000');
    }
}
exports.C_OneLineViewMessage = C_OneLineViewMessage;


/***/ }),

/***/ "./src/mai_maze/C_DefaultCtls.ts":
/*!***************************************!*\
  !*** ./src/mai_maze/C_DefaultCtls.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_DefaultCtls = void 0;
const global_1 = __webpack_require__(/*! ../d_cmn/global */ "./src/d_cmn/global.ts");
const global_for_maze_1 = __webpack_require__(/*! ./global_for_maze */ "./src/mai_maze/global_for_maze.ts");
const F_set_move_mode_1 = __webpack_require__(/*! ./F_set_move_mode */ "./src/mai_maze/F_set_move_mode.ts");
class C_DefaultCtls {
    constructor() {
        this.ctls = {};
        this.flgs = {};
        this.u_arr = document.getElementById('u_arr');
        this.d_arr = document.getElementById('d_arr');
        this.l_arr = document.getElementById('l_arr');
        this.r_arr = document.getElementById('r_arr');
        this.y_btn = document.getElementById('y_btn');
        this.n_btn = document.getElementById('n_btn');
        this.s_btn = document.getElementById('s_btn');
        this.r_btn = document.getElementById('r_btn');
        this.m_btn = document.getElementById('m_btn');
        this.y_cp1 = document.getElementById('y_cp1');
        this.n_cp1 = document.getElementById('n_cp1');
        this.s_cp1 = document.getElementById('s_cp1');
        this.r_cp1 = document.getElementById('r_cp1');
        this.u_arr.style.display = 'none';
        this.d_arr.style.display = 'none';
        this.l_arr.style.display = 'none';
        this.r_arr.style.display = 'none';
        this.y_btn.style.display = 'none';
        this.n_btn.style.display = 'none';
        this.s_btn.style.display = 'none';
        this.r_btn.style.display = 'none';
        this.m_btn.style.display = 'none';
        this.y_cp1.style.display = 'none';
        this.n_cp1.style.display = 'none';
        this.s_cp1.style.display = 'none';
        this.r_cp1.style.display = 'none';
    }
    static getObj() {
        var _a;
        (_a = this.me) !== null && _a !== void 0 ? _a : (this.me = new C_DefaultCtls());
        return this.me;
    }
    clr() {
        this.ctls = {};
        this.flgs = {};
        return true;
    }
    set(name, ctls) {
        try {
            if (typeof name === 'string' && ctls !== undefined) {
                this.ctls[name] = ctls;
                this.flgs[name] = false;
            }
            else {
                const c = name;
                this.ctls[c.name] = c;
                this.flgs[c.name] = false;
            }
            return true;
        }
        catch (err) {
            return false;
        }
    }
    rmv(ctls) {
        try {
            const name = typeof ctls === 'string' ? ctls : ctls.name;
            delete this.ctls[name];
            delete this.flgs[name];
            return true;
        }
        catch (err) {
            return false;
        }
    }
    deact() {
        for (const ii in this.ctls) {
            if (this.ctls[ii].name === undefined)
                continue;
            if (!this._rmv_default_ctls(this.ctls[ii].name))
                return false;
        }
        return true;
    }
    act(ctls) {
        try {
            if (!this.deact())
                return false;
            const name = typeof ctls === 'string' ? ctls : ctls.name;
            return this._add_default_ctls(name);
        }
        catch (err) {
            return false;
        }
    }
    is_act(ctls) {
        var _a;
        try {
            const name = typeof ctls === 'string' ? ctls : ctls.name;
            return (_a = this.flgs[name]) !== null && _a !== void 0 ? _a : false;
        }
        catch (err) {
            return false;
        }
    }
    keys_of_add() {
        const key_list = [];
        for (const name in this.ctls)
            key_list.push(name);
        return key_list;
    }
    keys_of_act() {
        const key_list = [];
        for (const name in this.flgs)
            if (this.flgs[name])
                key_list.push(name);
        return key_list;
    }
    _rmv_default_ctls(name) {
        var _a;
        var _b;
        (_a = (_b = this.flgs)[name]) !== null && _a !== void 0 ? _a : (_b[name] = false);
        if (!this.flgs[name])
            return true;
        this.flgs[name] = false;
        const c = this.ctls[name];
        try {
            if (_c(c === null || c === void 0 ? void 0 : c.do_U))
                this.u_arr.removeEventListener("click", c.do_U, false);
            if (_c(c === null || c === void 0 ? void 0 : c.do_D))
                this.d_arr.removeEventListener("click", c.do_D, false);
            if (_c(c === null || c === void 0 ? void 0 : c.do_L))
                this.l_arr.removeEventListener("click", c.do_L, false);
            if (_c(c === null || c === void 0 ? void 0 : c.do_R))
                this.r_arr.removeEventListener("click", c.do_R, false);
            if (_c(c === null || c === void 0 ? void 0 : c.isOK))
                this.y_btn.removeEventListener("click", c.isOK, false);
            if (_c(c === null || c === void 0 ? void 0 : c.isNG))
                this.n_btn.removeEventListener("click", c.isNG, false);
            if (_c(c === null || c === void 0 ? void 0 : c.isSL))
                this.s_btn.removeEventListener("click", c.isSL, false);
            if (_c(c === null || c === void 0 ? void 0 : c.isRT))
                this.r_btn.removeEventListener("click", c.isRT, false);
            if (_c(c === null || c === void 0 ? void 0 : c.menu))
                this.m_btn.removeEventListener("click", c.menu, false);
            if (_c(c === null || c === void 0 ? void 0 : c.cpOK))
                this.y_cp1.removeEventListener("click", c.cpOK, false);
            if (_c(c === null || c === void 0 ? void 0 : c.cpNG))
                this.n_cp1.removeEventListener("click", c.cpNG, false);
            if (_c(c === null || c === void 0 ? void 0 : c.cpSL))
                this.s_cp1.removeEventListener("click", c.cpSL, false);
            if (_c(c === null || c === void 0 ? void 0 : c.cpRT))
                this.r_cp1.removeEventListener("click", c.cpRT, false);
            if ((c === null || c === void 0 ? void 0 : c.keyEvent) !== undefined) {
                window.removeEventListener('keydown', c.keyEvent);
            }
            else {
                window.removeEventListener('keydown', key_press_function);
            }
            this.u_arr.style.display = 'none';
            this.d_arr.style.display = 'none';
            this.l_arr.style.display = 'none';
            this.r_arr.style.display = 'none';
            this.y_btn.style.display = 'none';
            this.n_btn.style.display = 'none';
            this.s_btn.style.display = 'none';
            this.r_btn.style.display = 'none';
            this.m_btn.style.display = 'none';
            this.y_cp1.style.display = 'none';
            this.n_cp1.style.display = 'none';
            this.s_cp1.style.display = 'none';
            this.r_cp1.style.display = 'none';
        }
        catch (err) {
            alert('Error Occuerd at Remove Default Ctls.');
            alert('' + err);
            return false;
        }
        return true;
    }
    _add_default_ctls(name) {
        var _a;
        var _b;
        (_a = (_b = this.flgs)[name]) !== null && _a !== void 0 ? _a : (_b[name] = false);
        if (this.flgs[name])
            return true;
        this.flgs[name] = true;
        const c = this.ctls[name];
        try {
            if (_c(c === null || c === void 0 ? void 0 : c.do_U))
                this.u_arr.addEventListener("click", c.do_U, false);
            if (_c(c === null || c === void 0 ? void 0 : c.do_D))
                this.d_arr.addEventListener("click", c.do_D, false);
            if (_c(c === null || c === void 0 ? void 0 : c.do_L))
                this.l_arr.addEventListener("click", c.do_L, false);
            if (_c(c === null || c === void 0 ? void 0 : c.do_R))
                this.r_arr.addEventListener("click", c.do_R, false);
            if (_c(c === null || c === void 0 ? void 0 : c.isOK))
                this.y_btn.addEventListener("click", c.isOK, false);
            if (_c(c === null || c === void 0 ? void 0 : c.isNG))
                this.n_btn.addEventListener("click", c.isNG, false);
            if (_c(c === null || c === void 0 ? void 0 : c.isSL))
                this.s_btn.addEventListener("click", c.isSL, false);
            if (_c(c === null || c === void 0 ? void 0 : c.isRT))
                this.r_btn.addEventListener("click", c.isRT, false);
            if (_c(c === null || c === void 0 ? void 0 : c.menu))
                this.m_btn.addEventListener("click", c.menu, false);
            if (_c(c === null || c === void 0 ? void 0 : c.cpOK))
                this.y_cp1.addEventListener("click", c.cpOK, false);
            if (_c(c === null || c === void 0 ? void 0 : c.cpNG))
                this.n_cp1.addEventListener("click", c.cpNG, false);
            if (_c(c === null || c === void 0 ? void 0 : c.cpSL))
                this.s_cp1.addEventListener("click", c.cpSL, false);
            if (_c(c === null || c === void 0 ? void 0 : c.cpRT))
                this.r_cp1.addEventListener("click", c.cpRT, false);
            if ((c === null || c === void 0 ? void 0 : c.keyEvent) !== undefined) {
                window.addEventListener('keydown', c.keyEvent);
            }
            else {
                window.addEventListener('keydown', key_press_function);
            }
            this.u_arr.style.display = _c(c === null || c === void 0 ? void 0 : c.do_U) ? 'block' : 'none';
            this.d_arr.style.display = _c(c === null || c === void 0 ? void 0 : c.do_D) ? 'block' : 'none';
            this.l_arr.style.display = _c(c === null || c === void 0 ? void 0 : c.do_L) ? 'block' : 'none';
            this.r_arr.style.display = _c(c === null || c === void 0 ? void 0 : c.do_R) ? 'block' : 'none';
            this.y_btn.style.display = _c(c === null || c === void 0 ? void 0 : c.isOK) ? 'block' : 'none';
            this.n_btn.style.display = _c(c === null || c === void 0 ? void 0 : c.isNG) ? 'block' : 'none';
            this.s_btn.style.display = _c(c === null || c === void 0 ? void 0 : c.isSL) ? 'block' : 'none';
            this.r_btn.style.display = _c(c === null || c === void 0 ? void 0 : c.isRT) ? 'block' : 'none';
            this.m_btn.style.display = _c(c === null || c === void 0 ? void 0 : c.menu) ? 'block' : 'none';
            this.y_cp1.style.display = _c(c === null || c === void 0 ? void 0 : c.cpOK) ? 'block' : 'none';
            this.n_cp1.style.display = _c(c === null || c === void 0 ? void 0 : c.cpNG) ? 'block' : 'none';
            this.s_cp1.style.display = _c(c === null || c === void 0 ? void 0 : c.cpSL) ? 'block' : 'none';
            this.r_cp1.style.display = _c(c === null || c === void 0 ? void 0 : c.cpRT) ? 'block' : 'none';
        }
        catch (err) {
            alert('Error Occuerd at Append Default Ctls.');
            alert('' + err);
            return false;
        }
        return true;
    }
}
exports.C_DefaultCtls = C_DefaultCtls;
function _c(c) {
    if (c === undefined)
        return false;
    if (c === null)
        return false;
    return true;
}
function key_press_function(e) {
    var _a, _b, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    const ne = ((_a = e.target) === null || _a === void 0 ? void 0 : _a.value) === undefined;
    switch (e.code) {
        case 'ArrowUp':
        case 'Numpad5':
            e.preventDefault();
            (_b = document.getElementById('u_arr')) === null || _b === void 0 ? void 0 : _b.click();
            break;
        case 'KeyO':
            if (ne)
                (_d = document.getElementById('u_arr')) === null || _d === void 0 ? void 0 : _d.click();
            break;
        case 'ArrowDown':
            e.preventDefault();
            (_e = document.getElementById('d_arr')) === null || _e === void 0 ? void 0 : _e.click();
            break;
        case 'Numpad2':
            (_f = document.getElementById('d_arr')) === null || _f === void 0 ? void 0 : _f.click();
            break;
        case 'KeyL':
            if (!ne)
                break;
            if (global_1.g_debug.isON()) {
                (0, F_set_move_mode_1.do_instant_load)();
            }
            else {
                (_g = document.getElementById('d_arr')) === null || _g === void 0 ? void 0 : _g.click();
            }
            break;
        case 'ArrowLeft':
        case 'Numpad1':
            e.preventDefault();
            (_h = document.getElementById('l_arr')) === null || _h === void 0 ? void 0 : _h.click();
            break;
        case 'KeyK':
            if (ne)
                (_j = document.getElementById('l_arr')) === null || _j === void 0 ? void 0 : _j.click();
            break;
        case 'ArrowRight':
        case 'Numpad3':
            e.preventDefault();
            (_k = document.getElementById('r_arr')) === null || _k === void 0 ? void 0 : _k.click();
            break;
        case 'Semicolon':
            if (ne)
                (_l = document.getElementById('r_arr')) === null || _l === void 0 ? void 0 : _l.click();
            break;
        case 'Enter':
        case 'NumpadEnter':
        case 'F10':
            e.preventDefault();
            if (e.shiftKey)
                (_m = document.getElementById('n_btn')) === null || _m === void 0 ? void 0 : _m.click();
            else
                (_o = document.getElementById('y_btn')) === null || _o === void 0 ? void 0 : _o.click();
            break;
        case 'KeyY':
        case 'KeyP':
        case 'Digit0':
            if (ne)
                (_p = document.getElementById('y_btn')) === null || _p === void 0 ? void 0 : _p.click();
            break;
        case 'F1':
        case 'Numpad0':
        case 'NumpadAdd':
            e.preventDefault();
            (_q = document.getElementById('n_btn')) === null || _q === void 0 ? void 0 : _q.click();
            break;
        case 'KeyN':
        case 'KeyI':
        case 'Digit8':
            if (ne)
                (_r = document.getElementById('n_btn')) === null || _r === void 0 ? void 0 : _r.click();
            break;
        case 'KeyU':
            if (!ne)
                break;
            if (global_1.g_debug.isON()) {
                const z = global_for_maze_1.g_team.walk().get_z();
                if (z > 0)
                    global_for_maze_1.g_team.walk().set_z(z - 1);
                (0, F_set_move_mode_1.do_move_bottom_half)('blink_off');
            }
            break;
        case 'KeyD':
            if (!ne)
                break;
            if (global_1.g_debug.isON()) {
                const z = global_for_maze_1.g_team.walk().get_z();
                if (z < global_for_maze_1.g_maze.get_z_max() - 1)
                    global_for_maze_1.g_team.walk().set_z(z + 1);
                (0, F_set_move_mode_1.do_move_bottom_half)('blink_off');
            }
            break;
        case 'KeyM':
        case 'Numpad7':
            if (ne)
                (_s = document.getElementById('m_btn')) === null || _s === void 0 ? void 0 : _s.click();
            break;
        case 'F7':
            e.preventDefault();
            (_t = document.getElementById('s_btn')) === null || _t === void 0 ? void 0 : _t.click();
            break;
        case 'Comma':
            if (ne)
                (_u = document.getElementById('s_btn')) === null || _u === void 0 ? void 0 : _u.click();
            break;
        case 'KeyS':
            if (!ne)
                break;
            if (global_1.g_debug.isON()) {
                (0, F_set_move_mode_1.do_instant_save)();
                (0, F_set_move_mode_1.do_move_bottom_half)('blink_off');
            }
            else {
                (_v = document.getElementById('s_btn')) === null || _v === void 0 ? void 0 : _v.click();
            }
            break;
        case 'F3':
        case 'Numpad8':
            e.preventDefault();
            (_w = document.getElementById('r_btn')) === null || _w === void 0 ? void 0 : _w.click();
            break;
        case 'KeyR':
        case 'Period':
            if (ne)
                (_x = document.getElementById('r_btn')) === null || _x === void 0 ? void 0 : _x.click();
            break;
    }
}


/***/ }),

/***/ "./src/mai_maze/C_SwitchView.ts":
/*!**************************************!*\
  !*** ./src/mai_maze/C_SwitchView.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_SwitchView = exports.T_ViewMode = void 0;
const global_1 = __webpack_require__(/*! ../d_cmn/global */ "./src/d_cmn/global.ts");
exports.T_ViewMode = {
    Move: 'move',
    Batt: 'batt',
    Menu: 'menu',
    LdSv: 'ldsv',
};
class C_SwitchView {
    Move() { return exports.T_ViewMode.Move; }
    Batt() { return exports.T_ViewMode.Batt; }
    Menu() { return exports.T_ViewMode.Menu; }
    MvPt() { return exports.T_ViewMode.Menu; }
    LdSv() { return exports.T_ViewMode.LdSv; }
    constructor() {
        C_SwitchView.all_class = Object.values(exports.T_ViewMode);
        C_SwitchView.article = {};
        try {
            C_SwitchView.body = document.body;
            C_SwitchView.article.view3d = document.getElementById('pane_maze_vw3D');
            C_SwitchView.article.view2d = document.getElementById('pane_maze_vw2D');
            C_SwitchView.article.menu_l = document.getElementById('pane_menu_list');
            C_SwitchView.article.ldsv_l = document.getElementById('pane_ldsv_list');
            C_SwitchView.article.ldsv_d = document.getElementById('pane_ldsv_data');
            C_SwitchView.article.menu_m = document.getElementById('pane_menu_mesg');
            C_SwitchView.article.game_m = document.getElementById('pane_maze_mesg');
            C_SwitchView.article.contls = document.getElementById('pane_ctls_boad');
            C_SwitchView.article.messag = document.getElementById('pane_sytm_mesg');
        }
        catch (err) {
            (0, global_1._alert)('Layout Get Error: ' + err);
        }
        this.view('move');
    }
    static getObj() {
        var _a;
        (_a = this.me) !== null && _a !== void 0 ? _a : (this.me = new C_SwitchView());
        return this.me;
    }
    view(mode) {
        this.__set_class(mode);
        return true;
    }
    __set_class(c) {
        var _a, _b, _c, _d;
        try {
            (_a = C_SwitchView.body) === null || _a === void 0 ? void 0 : _a.classList.remove(...C_SwitchView.all_class);
            (_b = C_SwitchView.body) === null || _b === void 0 ? void 0 : _b.classList.add(c);
            for (const ii in C_SwitchView.article) {
                if (C_SwitchView.article[ii] === null)
                    continue;
                (_c = C_SwitchView.article[ii]) === null || _c === void 0 ? void 0 : _c.classList.remove(...C_SwitchView.all_class);
                (_d = C_SwitchView.article[ii]) === null || _d === void 0 ? void 0 : _d.classList.add(c);
            }
        }
        catch (err) {
            (0, global_1._alert)('Layout Set Error: ' + err);
        }
    }
}
exports.C_SwitchView = C_SwitchView;


/***/ }),

/***/ "./src/mai_maze/F_display_maze2D.ts":
/*!******************************************!*\
  !*** ./src/mai_maze/F_display_maze2D.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init_maze2D = init_maze2D;
exports.display_maze2D = display_maze2D;
const global_1 = __webpack_require__(/*! ../d_cmn/global */ "./src/d_cmn/global.ts");
const C_MazeObjView_1 = __webpack_require__(/*! ../d_mdl/C_MazeObjView */ "./src/d_mdl/C_MazeObjView.ts");
const F_Math_1 = __webpack_require__(/*! ../d_utl/F_Math */ "./src/d_utl/F_Math.ts");
const global_for_maze_1 = __webpack_require__(/*! ./global_for_maze */ "./src/mai_maze/global_for_maze.ts");
let div;
let cvs;
let view_wdth = 0;
let view_hght = 0;
let map_wdth = 0;
let map_hght = 0;
let c_size_x = 0;
let c_size_y = 0;
function init_maze2D() {
    div = document.getElementById('div_maze_vw2D');
    cvs = document.getElementById('maze_view2D_canvas');
    let cxt = cvs.getContext('2d');
    if (cxt === null) {
        cxt = undefined;
    }
    C_MazeObjView_1.C_MazeObjView.set_context2D(cxt);
    calc_view2D_width();
}
function calc_view2D_width() {
    view_wdth = div.clientWidth;
    view_hght = div.clientHeight;
    const col = global_for_maze_1.g_maze.get_x_max() + 0;
    const col_px = cvs.width / col;
    const row = global_for_maze_1.g_maze.get_y_max() + 0;
    const row_px = cvs.height / row;
    c_size_x = (0, F_Math_1._max)([20.0, (0, F_Math_1._round)(1.00 * (0, F_Math_1._min)([col_px, row_px]), 2)]);
    c_size_y = (0, F_Math_1._max)([20.0, (0, F_Math_1._round)(1.00 * (0, F_Math_1._min)([col_px, row_px]), 2)]);
    map_wdth = c_size_x * col;
    map_hght = c_size_y * col;
    cvs.setAttribute('width', map_wdth.toString());
    cvs.setAttribute('height', map_hght.toString());
}
function calc_view2D_top() {
    view_wdth = div.clientWidth;
    view_hght = div.clientHeight;
    const pd = global_for_maze_1.g_team.get_pd();
    let top_x = view_wdth / 2 - pd.x * c_size_x;
    if (top_x > 0)
        top_x = 0;
    if (top_x < view_wdth - map_wdth)
        top_x = view_wdth - map_wdth;
    let top_y = view_hght / 2 - pd.y * c_size_y;
    if (top_y > 0)
        top_y = 0;
    if (top_y < view_hght - map_hght)
        top_y = view_hght - map_hght;
    cvs.style.setProperty('left', `${top_x}px`);
    cvs.style.setProperty('top', `${top_y}px`);
}
function display_maze2D() {
    if (cvs !== null) {
        to_2D();
        calc_view2D_top();
    }
    else {
        global_1.g_mes.warning_message('Can not found pre#Maze_view2D');
    }
}
function to_2D() {
    var _a, _b, _c;
    const size_x = global_for_maze_1.g_maze.get_x_max();
    const size_y = global_for_maze_1.g_maze.get_y_max();
    const floor = global_for_maze_1.g_team.get_pd().z;
    const cell_masks = C_MazeObjView_1.C_MazeObjView.newObj({
        layer: 0, letter: 'Ｘ',
        show3D: '1',
        pad_t: 0.0, pad_d: 0.0, pad_s: 0.0,
        col_f: '', col_b: '', col_s: '', col_t: '', col_d: '',
        col_l: '#0000ff', col_2: '#333333',
    });
    const cell_unexp = C_MazeObjView_1.C_MazeObjView.newObj({
        layer: 0, letter: '謎',
        show3D: '1',
        pad_t: 0.0, pad_d: 0.0, pad_s: 0.0,
        col_f: '', col_b: '', col_s: '', col_t: '', col_d: '',
        col_l: '#0000ff', col_2: '#ff00ff',
    });
    for (let y = 0; y < size_y; y++) {
        for (let x = 0; x < size_x; x++) {
            let rect_2d = {
                tl: { x: (x) * c_size_x, y: (y) * c_size_y },
                tr: { x: (x + 1) * c_size_x, y: (y) * c_size_y },
                dl: { x: (x) * c_size_x, y: (y + 1) * c_size_y },
                dr: { x: (x + 1) * c_size_x, y: (y + 1) * c_size_y },
            };
            if (!global_1.g_debug.isON() && global_for_maze_1.g_maze.is_masked_xyz(x, y, floor)) {
                cell_masks.drow2D(rect_2d);
            }
            else {
                const obj_view = (_a = global_for_maze_1.g_maze.get_obj_xyz(x, y, floor)) === null || _a === void 0 ? void 0 : _a.view();
                if (obj_view !== undefined)
                    obj_view === null || obj_view === void 0 ? void 0 : obj_view.drow2D(rect_2d);
                else {
                    const flr_view = (_c = (_b = global_for_maze_1.g_maze.get_cell_xyz(x, y, floor)) === null || _b === void 0 ? void 0 : _b.getObj()) === null || _c === void 0 ? void 0 : _c.view();
                    if (flr_view !== undefined)
                        flr_view === null || flr_view === void 0 ? void 0 : flr_view.drow2D(rect_2d);
                    else
                        cell_unexp.drow2D(rect_2d);
                }
            }
        }
    }
    return;
}


/***/ }),

/***/ "./src/mai_maze/F_display_maze3D.ts":
/*!******************************************!*\
  !*** ./src/mai_maze/F_display_maze3D.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init_maze3D = init_maze3D;
exports.display_maze3D = display_maze3D;
exports.displey_mase3D_direction = displey_mase3D_direction;
exports.maze3D_blink_on_direction = maze3D_blink_on_direction;
exports.maze3D_blink_off_direction = maze3D_blink_off_direction;
const C_Point_1 = __webpack_require__(/*! ../d_mdl/C_Point */ "./src/d_mdl/C_Point.ts");
const C_Range_1 = __webpack_require__(/*! ../d_mdl/C_Range */ "./src/d_mdl/C_Range.ts");
const C_MazeObjView_1 = __webpack_require__(/*! ../d_mdl/C_MazeObjView */ "./src/d_mdl/C_MazeObjView.ts");
const T_Direction_1 = __webpack_require__(/*! ../d_mdl/T_Direction */ "./src/d_mdl/T_Direction.ts");
const C_Wall_1 = __webpack_require__(/*! ../d_mdl/C_Wall */ "./src/d_mdl/C_Wall.ts");
const global_1 = __webpack_require__(/*! ../d_cmn/global */ "./src/d_cmn/global.ts");
const global_for_maze_1 = __webpack_require__(/*! ./global_for_maze */ "./src/mai_maze/global_for_maze.ts");
function init_maze3D() {
    const canvas = document.getElementById('maze_view3D_canvas');
    if (canvas === null) {
        global_1.g_mes.warning_message('Canvas isnt found! id=Maze_view3D_canvas');
        return { canvas: null, con: null, depth: 0, wall: null };
    }
    const con = canvas.getContext('2d');
    if (con === null) {
        global_1.g_mes.warning_message('Browser dont surpport 2D graphics!');
        return { canvas: null, con: null, depth: 0, wall: null };
    }
    C_MazeObjView_1.C_MazeObjView.set_context3D(con);
    init_mazeCell3D();
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    const depth = 5;
    const top_p = new C_Point_1.C_Point(0, 0, 0);
    const btm_p = new C_Point_1.C_Point(canvas.width - 1, canvas.height - 1, 0);
    const wall = new C_Wall_1.C_Wall(depth, new C_Range_1.C_Range(top_p, btm_p));
    return { canvas: canvas, con: con, depth: depth, wall: wall };
}
function init_mazeCell3D() { }
function draw_init_maze3D() {
    if (global_for_maze_1.g_ds.canvas === null || global_for_maze_1.g_ds.con === null)
        return;
    global_for_maze_1.g_ds.con.fillStyle = '#aaaaaa';
    global_for_maze_1.g_ds.con.fillRect(0, 0, global_for_maze_1.g_ds.canvas.width - 1, get_holizon_line());
    global_for_maze_1.g_ds.con.fillStyle = '#6666ff';
    global_for_maze_1.g_ds.con.fillRect(0, get_holizon_line(), global_for_maze_1.g_ds.canvas.width - 1, global_for_maze_1.g_ds.canvas.height - 1);
    drow_floor_line();
}
function get_holizon_line() {
    if (global_for_maze_1.g_ds.wall === null)
        return -1;
    return global_for_maze_1.g_ds.wall.get(global_for_maze_1.g_ds.depth, 0).max_y;
}
function drow_floor_line() {
    if (global_for_maze_1.g_ds.canvas === null || global_for_maze_1.g_ds.con === null || global_for_maze_1.g_ds.wall === null)
        return;
    const con = global_for_maze_1.g_ds.con;
    const wall = global_for_maze_1.g_ds.wall;
    const depth = global_for_maze_1.g_ds.depth;
    const H_dept = (depth - 1) / 2;
    const left_x = 0;
    const right_x = global_for_maze_1.g_ds.canvas.width - 1;
    const front_y = global_for_maze_1.g_ds.canvas.height - 1;
    const back_y = get_holizon_line();
    con.strokeStyle = '#9999ff';
    con.lineWidth = 1;
    for (var y = 0; y < depth + 1; y++) {
        con.beginPath();
        con.moveTo(left_x, wall.get(y, 0).max_y);
        con.lineTo(right_x, wall.get(y, 0).max_y);
        con.stroke();
    }
    for (var x = -H_dept; x < H_dept + 1; x++) {
        con.beginPath();
        con.moveTo(wall.get(0, x).min_x, front_y);
        con.lineTo(wall.get(depth, x).min_x, back_y);
        con.stroke();
    }
}
function display_maze3D() {
    if (global_for_maze_1.g_ds.canvas === null || global_for_maze_1.g_ds.con === null || global_for_maze_1.g_ds.wall === null)
        return;
    draw_init_maze3D();
    displey_mase3D_direction();
    const depth = global_for_maze_1.g_ds.depth;
    const H_depth = (depth - 1) / 2;
    for (var j = global_for_maze_1.g_ds.depth - 1; j >= 0; j--) {
        for (var k = -H_depth; k < 0; k++)
            drowMazeCell(j, k);
        for (var k = H_depth; k > 0; k--)
            drowMazeCell(j, k);
        drowMazeCell(j, 0);
    }
}
function drowMazeCell(d, w) {
    var _a, _b;
    if (global_for_maze_1.g_ds.wall === null)
        return;
    const around_j_k = global_for_maze_1.g_team.walk().get_around(d, w, 0);
    const frot_wall = global_for_maze_1.g_ds.wall.get(d, w);
    const back_wall = global_for_maze_1.g_ds.wall.get(d + 1, w);
    const mz_kind = global_for_maze_1.g_maze.get_kind(around_j_k);
    (_a = global_for_maze_1.g_maze === null || global_for_maze_1.g_maze === void 0 ? void 0 : global_for_maze_1.g_maze.get_cell(around_j_k)) === null || _a === void 0 ? void 0 : _a.drow3D(frot_wall, back_wall);
    if (global_for_maze_1.g_maze.exist_obj(around_j_k)) {
        const obj = global_for_maze_1.g_maze.get_obj(around_j_k);
        if (obj !== null)
            (_b = obj.view()) === null || _b === void 0 ? void 0 : _b.drow3D(frot_wall, back_wall);
    }
}
function displey_mase3D_direction() {
    const p_dir = document.getElementById('maze_view3D_direction_info');
    if (p_dir === null) {
        global_1.g_mes.warning_message('P element isnt found! id=Maze_view3D_direction_info');
        return;
    }
    var direction;
    const p = global_for_maze_1.g_team.get_pd();
    switch (p.d) {
        case T_Direction_1.T_Direction.N:
            direction = '<span class="direction_N">《北》</span>';
            break;
        case T_Direction_1.T_Direction.E:
            direction = '<span class="direction_E">《東》</span>';
            break;
        case T_Direction_1.T_Direction.S:
            direction = '<span class="direction_S">《南》</span>';
            break;
        case T_Direction_1.T_Direction.W:
            direction = '<span class="direction_W">《西》</span>';
            break;
        default:
            direction = '<span class="direction_D">《謎》</span>';
            break;
    }
    const mes = '地下 ' + (p.z + 1) + '階　' + direction + '　(x = <span id="direction_X">' + p.x + '</span>, y = <span id="direction_Y">' + p.y + '</span>)';
    p_dir.innerHTML = mes;
}
function maze3D_blink_on_direction() {
    const dir_x = document.getElementById('direction_X');
    if (dir_x === null)
        return;
    const dir_y = document.getElementById('direction_Y');
    if (dir_y === null)
        return;
    switch (global_for_maze_1.g_team.walk().get_d()) {
        case T_Direction_1.T_Direction.N:
        case T_Direction_1.T_Direction.S:
            dir_x.classList.remove('blink');
            dir_y.classList.add('blink');
            return;
        case T_Direction_1.T_Direction.E:
        case T_Direction_1.T_Direction.W:
            dir_x.classList.add('blink');
            dir_y.classList.remove('blink');
            return;
    }
}
function maze3D_blink_off_direction() {
    const dir_x = document.getElementById('direction_X');
    if (dir_x === null)
        return;
    dir_x.classList.remove('blink');
    const dir_y = document.getElementById('direction_Y');
    if (dir_y === null)
        return;
    dir_y.classList.remove('blink');
}


/***/ }),

/***/ "./src/mai_maze/F_display_mazeCh.ts":
/*!******************************************!*\
  !*** ./src/mai_maze/F_display_mazeCh.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init_mazeCh = init_mazeCh;
exports.display_mazeCh = display_mazeCh;
const global_1 = __webpack_require__(/*! ../d_cmn/global */ "./src/d_cmn/global.ts");
const F_Math_1 = __webpack_require__(/*! ../d_utl/F_Math */ "./src/d_utl/F_Math.ts");
const global_for_maze_1 = __webpack_require__(/*! ./global_for_maze */ "./src/mai_maze/global_for_maze.ts");
let div;
let pre;
let view_wdth = 0;
let view_hght = 0;
let map_wdth = 0;
let map_hght = 0;
let font_size = 0;
let line_hght = 0;
function init_mazeCh() {
    div = document.getElementById('div_maze_vwCh');
    pre = document.getElementById('maze_viewCh_pre');
    calc_viewCh_width();
}
function calc_viewCh_width() {
    view_wdth = div.clientWidth;
    view_hght = div.clientHeight;
    const col = global_for_maze_1.g_maze.get_x_max() + 1;
    const col_px = pre.clientWidth / col;
    const row = global_for_maze_1.g_maze.get_y_max() + 1;
    const row_px = pre.clientHeight / row;
    font_size = (0, F_Math_1._round)((0, F_Math_1._max)([15.0, (0, F_Math_1._round)(1.00 * (0, F_Math_1._min)([col_px, row_px]), 2)]), 0);
    line_hght = (0, F_Math_1._round)((0, F_Math_1._max)([15.0, (0, F_Math_1._round)(1.00 * (0, F_Math_1._min)([col_px, row_px]), 2)]), 0);
    map_wdth = font_size * col;
    map_hght = line_hght * col;
    pre.setAttribute('width', map_wdth.toString());
    pre.setAttribute('height', map_hght.toString());
    pre.style.setProperty('font-size', `${font_size}px`);
    pre.style.setProperty('line-height', `${line_hght}px`);
}
function calc_viewCh_top() {
    view_wdth = div.clientWidth;
    view_hght = div.clientHeight;
    const pd = global_for_maze_1.g_team.get_pd();
    let top_x = view_wdth / 2 - (pd.x + 1) * font_size;
    if (top_x > 0)
        top_x = 0;
    let top_y = view_hght / 2 - (pd.y + 1) * line_hght;
    if (top_y > 0)
        top_y = 0;
    pre.style.setProperty('left', `${top_x}px`);
    pre.style.setProperty('top', `${top_y}px`);
}
function display_mazeCh() {
    if (pre !== null) {
        pre.innerText = to_string();
        calc_viewCh_top();
    }
    else
        global_1.g_mes.warning_message('Can not found pre#Maze_viewCh_pre!!');
}
function to_string() {
    var _a, _b, _c;
    const size_x = global_for_maze_1.g_maze.get_x_max();
    const size_y = global_for_maze_1.g_maze.get_y_max();
    const floor = global_for_maze_1.g_team.get_pd().z;
    let ret_str = '';
    for (let y = 0; y < size_y; y++) {
        for (let x = 0; x < size_x; x++) {
            if (!global_1.g_debug.isON() && global_for_maze_1.g_maze.is_masked_xyz(x, y, floor)) {
                ret_str += 'Ｘ';
            }
            else {
                const obj = global_for_maze_1.g_maze.get_obj_xyz(x, y, floor);
                if (obj === null || obj.view() === undefined) {
                    ret_str += (_a = global_for_maze_1.g_maze.get_cell_xyz(x, y, floor)) === null || _a === void 0 ? void 0 : _a.to_letter();
                }
                else {
                    const obj_c = (_c = (_b = obj.view()) === null || _b === void 0 ? void 0 : _b.letter()) !== null && _c !== void 0 ? _c : '謎';
                    ret_str += obj_c;
                }
            }
        }
        ret_str += "\n";
    }
    return ret_str;
}


/***/ }),

/***/ "./src/mai_maze/F_set_UD_mode.ts":
/*!***************************************!*\
  !*** ./src/mai_maze/F_set_UD_mode.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init_UD_mode = init_UD_mode;
exports.act_Up_mode = act_Up_mode;
exports.act_Dn_mode = act_Dn_mode;
exports.act_UD_mode = act_UD_mode;
const C_UrlOpt_1 = __webpack_require__(/*! ../d_utl/C_UrlOpt */ "./src/d_utl/C_UrlOpt.ts");
const F_load_and_save_1 = __webpack_require__(/*! ../d_cmn/F_load_and_save */ "./src/d_cmn/F_load_and_save.ts");
const F_POST_1 = __webpack_require__(/*! ../d_cmn/F_POST */ "./src/d_cmn/F_POST.ts");
const global_1 = __webpack_require__(/*! ../d_cmn/global */ "./src/d_cmn/global.ts");
const F_set_save_mode_1 = __webpack_require__(/*! ./F_set_save_mode */ "./src/mai_maze/F_set_save_mode.ts");
const F_set_move_mode_1 = __webpack_require__(/*! ./F_set_move_mode */ "./src/mai_maze/F_set_move_mode.ts");
const global_for_maze_1 = __webpack_require__(/*! ./global_for_maze */ "./src/mai_maze/global_for_maze.ts");
var canUp = false;
var canDn = false;
var isUp = false;
const ctls_updn_up = {
    name: 'updn_up',
    isOK: do_up,
    isNG: do_cancel,
};
const ctls_updn_dn = {
    name: 'updn_dn',
    isOK: do_down,
    isNG: do_cancel,
};
const ctls_updn_ud_hpup = {
    name: 'updn_ud_hpup',
    do_U: do_up,
    do_D: do_down,
    isNG: do_cancel,
};
const ctls_updn_ud_hpdn = {
    name: 'updn_ud_hpdn',
    do_U: do_up,
    do_D: do_down,
    isNG: do_cancel,
};
function init_UD_mode() {
    global_for_maze_1.g_ctls.set(ctls_updn_up);
    global_for_maze_1.g_ctls.set(ctls_updn_dn);
    global_for_maze_1.g_ctls.set(ctls_updn_ud_hpup);
    global_for_maze_1.g_ctls.set(ctls_updn_ud_hpdn);
}
function act_Up_mode() {
    if (global_for_maze_1.g_team.walk().get_z() > 0) {
        global_for_maze_1.g_mvm.notice_message('上りテレポーターが有ります。登りますか？登る ⇒ 〇 登らない ⇒ ✖');
    }
    else {
        global_for_maze_1.g_mvm.notice_message('街に戻りますか？戻る ⇒ 〇 戻らない ⇒ ✖');
    }
    canUp = true;
    canDn = false;
    global_for_maze_1.g_ctls.act(ctls_updn_up);
    global_for_maze_1.g_vsw.view(global_for_maze_1.g_vsw.Move());
    setCanvas3DClick();
}
function act_Dn_mode() {
    global_for_maze_1.g_mvm.notice_message('下りテレポーターが有ります。降りますか？降りる ⇒ 〇 降りない ⇒ ✖');
    canUp = false;
    canDn = true;
    global_for_maze_1.g_ctls.act(ctls_updn_dn);
    global_for_maze_1.g_vsw.view(global_for_maze_1.g_vsw.Move());
}
function act_UD_mode() {
    global_for_maze_1.g_mvm.notice_message('上下テレポーターが有ります。登りますか？登る⇒ 〇 降りる ⇒ (↓キー) 移動しない ⇒ ✖');
    canUp = true;
    canDn = true;
    if (!isUp)
        global_for_maze_1.g_ctls.act(ctls_updn_ud_hpup);
    else
        global_for_maze_1.g_ctls.act(ctls_updn_ud_hpdn);
    global_for_maze_1.g_vsw.view(global_for_maze_1.g_vsw.Move());
}
function do_cancel() {
    global_for_maze_1.g_mvm.clear_message();
    (0, F_set_move_mode_1.act_move_mode)();
}
function do_up() {
    const rslt = global_for_maze_1.g_team.walk().hope_p_up();
    if (rslt.has_hope && rslt.subj.z < 0) {
        do_UD_save().then(() => __awaiter(this, void 0, void 0, function* () {
            return yield (0, F_load_and_save_1.tmp_save)();
        })).then(() => {
            const opt = new C_UrlOpt_1.C_UrlOpt();
            opt.set('mode', 'load');
            opt.set('pid', global_1.g_start_env.pid);
            opt.set('opt', 100);
            (0, F_POST_1.POST_and_move_page)(global_1.g_url[global_1.g_url_mai_guld], opt);
            return;
        });
        return;
    }
    if (!rslt.has_hope || !global_for_maze_1.g_maze.within(rslt.subj)) {
        rslt.doNG();
        global_for_maze_1.g_mvm.clear_message();
        (0, F_set_move_mode_1.act_move_mode)();
        (0, F_set_move_mode_1.do_move_bottom_half)('blink_off');
    }
    else {
        do_UD_save().then(() => {
            rslt.doOK();
            global_for_maze_1.g_mvm.clear_message();
            (0, F_set_move_mode_1.act_move_mode)();
            (0, F_set_move_mode_1.do_move_bottom_half)('blink_off');
        });
    }
}
function do_down() {
    const rslt = global_for_maze_1.g_team.walk().hope_p_down();
    if (!rslt.has_hope || !global_for_maze_1.g_maze.within(rslt.subj)) {
        rslt.doNG();
        global_for_maze_1.g_mvm.clear_message();
        (0, F_set_move_mode_1.act_move_mode)();
        (0, F_set_move_mode_1.do_move_bottom_half)('blink_off');
    }
    else {
        do_UD_save().then(() => {
            rslt.doOK();
            global_for_maze_1.g_mvm.clear_message();
            (0, F_set_move_mode_1.act_move_mode)();
            (0, F_set_move_mode_1.do_move_bottom_half)('blink_off');
        });
    }
}
function do_UD() {
    if (!canUp || !canDn)
        return;
    if (isUp)
        do_up();
    else
        do_down();
}
function hope_Up() {
    if (!canUp || !canDn)
        return;
    isUp = true;
    global_for_maze_1.g_ctls.act(ctls_updn_ud_hpdn);
    if (global_for_maze_1.g_team.walk().get_z() > 0) {
        global_for_maze_1.g_mvm.notice_message('登りますか？登る⇒ 〇 降りる ⇒ (↓キー) 移動しない ⇒ ✖');
    }
    else {
        global_for_maze_1.g_mvm.notice_message('街に戻りますか？戻る⇒ 〇 降りる ⇒ (↓キー) 移動しない ⇒ ✖');
    }
    ;
}
function hope_Down() {
    if (!canUp || !canDn)
        return;
    isUp = false;
    global_for_maze_1.g_ctls.act(ctls_updn_ud_hpup);
    global_for_maze_1.g_mvm.notice_message('降りますか？降りる⇒ 〇 登る ⇒ (↑キー) 移動しない ⇒ ✖');
}
function do_UD_save() {
    return __awaiter(this, void 0, void 0, function* () {
        (0, F_set_save_mode_1.set_g_save)(-1, -1, '自動保存データ', '', `『${global_for_maze_1.g_maze.get_name()}』 `
            + `地下 ${global_for_maze_1.g_team.walk().get_pd().z + 1}階層 `
            + `(X: ${global_for_maze_1.g_team.walk().get_pd().x}, Y: ${global_for_maze_1.g_team.get_pd().y})`, true);
        return (0, F_load_and_save_1.UD_save)();
    });
}
function setCanvas3DClick() {
    if ((global_for_maze_1.g_ds === null || global_for_maze_1.g_ds === void 0 ? void 0 : global_for_maze_1.g_ds.canvas) === null)
        return;
    global_for_maze_1.g_ds.canvas.onclick = canvas3Dclick;
}
function clrCanvas3DClick() {
    if ((global_for_maze_1.g_ds === null || global_for_maze_1.g_ds === void 0 ? void 0 : global_for_maze_1.g_ds.canvas) === null)
        return;
    global_for_maze_1.g_ds.canvas.onclick = () => { };
}
function canvas3Dclick(ev) {
    var _a, _b, _c, _d;
    if ((global_for_maze_1.g_ds === null || global_for_maze_1.g_ds === void 0 ? void 0 : global_for_maze_1.g_ds.canvas) === null)
        return;
    if (ev.target !== global_for_maze_1.g_ds.canvas)
        return;
    const cvs = global_for_maze_1.g_ds.canvas;
    const left_pane_r = cvs.clientWidth * 0.35;
    const rght_pane_l = cvs.clientWidth * 0.65;
    const back_pane_u = cvs.clientHeight * 0.50;
    if (ev.offsetX < left_pane_r) {
        (_a = document.getElementById('n_btn')) === null || _a === void 0 ? void 0 : _a.click();
        return;
    }
    if (ev.offsetX > rght_pane_l) {
        (_b = document.getElementById('y_btn')) === null || _b === void 0 ? void 0 : _b.click();
        return;
    }
    if (ev.offsetY < back_pane_u) {
        (_c = document.getElementById('u_arr')) === null || _c === void 0 ? void 0 : _c.click();
        return;
    }
    (_d = document.getElementById('d_arr')) === null || _d === void 0 ? void 0 : _d.click();
    return;
}


/***/ }),

/***/ "./src/mai_maze/F_set_menu_mode.ts":
/*!*****************************************!*\
  !*** ./src/mai_maze/F_set_menu_mode.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init_menu_mode = init_menu_mode;
exports.act_menu_mode = act_menu_mode;
const C_CtlCursor_1 = __webpack_require__(/*! ../d_ctl/C_CtlCursor */ "./src/d_ctl/C_CtlCursor.ts");
const F_set_move_mode_1 = __webpack_require__(/*! ./F_set_move_mode */ "./src/mai_maze/F_set_move_mode.ts");
const F_set_save_mode_1 = __webpack_require__(/*! ./F_set_save_mode */ "./src/mai_maze/F_set_save_mode.ts");
const F_set_mvpt_mode_1 = __webpack_require__(/*! ./F_set_mvpt_mode */ "./src/mai_maze/F_set_mvpt_mode.ts");
const global_for_maze_1 = __webpack_require__(/*! ./global_for_maze */ "./src/mai_maze/global_for_maze.ts");
let dom_menu_list;
let menu_list_crsr;
let idx = 0;
const ctls_menu_nor = {
    name: 'menu_nor',
    do_U: do_U,
    do_D: do_D,
    isOK: isOK,
    isNG: isNG,
    isRT: isNG,
    cpRT: isNG,
};
function init_menu_mode() {
    init_view();
    init_ctls();
}
function act_menu_mode() {
    idx = 0;
    menu_list_crsr.set_pos(idx);
    global_for_maze_1.g_ctls.act(ctls_menu_nor);
    global_for_maze_1.g_vsw.view(global_for_maze_1.g_vsw.Menu());
}
function init_view() {
    try {
        const menu_list = document.getElementById('menu_list');
        for (var i = 0; i < menu_list.children.length; i++) {
            const item = menu_list.children[i];
            item.addEventListener("click", _OK_menu_Fnc, false);
        }
        dom_menu_list = document.getElementById('menu_list');
        menu_list_crsr = C_CtlCursor_1.C_CtlCursor.getObj(dom_menu_list);
    }
    catch (err) {
        alert('Error: ' + err);
        return false;
    }
    return true;
}
function _OK_menu_Fnc(e) {
    __isOK(this.id);
}
function init_ctls() {
    global_for_maze_1.g_ctls.set(ctls_menu_nor);
}
function isOK() {
    const menu_list = document.getElementById('menu_list');
    if (menu_list === null)
        return;
    const children = menu_list.children;
    if (idx < 0 || idx > children.length - 1)
        return;
    const li = children.item(idx);
    __isOK(li.id);
}
function __isOK(id) {
    switch (id) {
        case 'menu_load':
            do_load();
            return;
        case 'menu_save':
            do_save();
            return;
        case 'menu_mvpt':
            do_mvpt();
            return;
    }
}
function isNG() {
    global_for_maze_1.g_cvm.clear_message();
    (0, F_set_move_mode_1.act_move_mode)();
    (0, F_set_move_mode_1.do_move_bottom_half)('blink_off');
}
function do_U() {
    global_for_maze_1.g_cvm.clear_message();
    idx = menu_list_crsr.pos_U();
}
function do_D() {
    global_for_maze_1.g_cvm.clear_message();
    idx = menu_list_crsr.pos_D();
}
function do_load() {
    (0, F_set_save_mode_1.act_load_mode)();
}
function do_save() {
    (0, F_set_save_mode_1.act_save_mode)();
}
function do_mvpt() {
    (0, F_set_mvpt_mode_1.act_mvpt_mode)();
}


/***/ }),

/***/ "./src/mai_maze/F_set_mode.ts":
/*!************************************!*\
  !*** ./src/mai_maze/F_set_mode.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init_all_mode = init_all_mode;
exports.hide_controlles = hide_controlles;
const F_set_move_mode_1 = __webpack_require__(/*! ./F_set_move_mode */ "./src/mai_maze/F_set_move_mode.ts");
const F_set_menu_mode_1 = __webpack_require__(/*! ./F_set_menu_mode */ "./src/mai_maze/F_set_menu_mode.ts");
const F_set_mvpt_mode_1 = __webpack_require__(/*! ./F_set_mvpt_mode */ "./src/mai_maze/F_set_mvpt_mode.ts");
const F_set_save_mode_1 = __webpack_require__(/*! ./F_set_save_mode */ "./src/mai_maze/F_set_save_mode.ts");
const F_set_UD_mode_1 = __webpack_require__(/*! ./F_set_UD_mode */ "./src/mai_maze/F_set_UD_mode.ts");
const global_for_maze_1 = __webpack_require__(/*! ./global_for_maze */ "./src/mai_maze/global_for_maze.ts");
function init_all_mode() {
    global_for_maze_1.g_ctls.deact();
    (0, F_set_move_mode_1.init_move_mode)();
    (0, F_set_menu_mode_1.init_menu_mode)();
    (0, F_set_mvpt_mode_1.init_mvpt_mode)();
    (0, F_set_save_mode_1.init_SL_mode)();
    (0, F_set_UD_mode_1.init_UD_mode)();
}
function hide_controlles() {
    global_for_maze_1.g_ctls.deact();
    const move_ctl_view = document.getElementById('pane_ctls_boad');
    move_ctl_view === null || move_ctl_view === void 0 ? void 0 : move_ctl_view.style.setProperty('display', 'none');
}


/***/ }),

/***/ "./src/mai_maze/F_set_move_mode.ts":
/*!*****************************************!*\
  !*** ./src/mai_maze/F_set_move_mode.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init_move_mode = init_move_mode;
exports.act_move_mode = act_move_mode;
exports.do_instant_load = do_instant_load;
exports.do_instant_save = do_instant_save;
exports.do_move_bottom_half = do_move_bottom_half;
const T_MzKind_1 = __webpack_require__(/*! ../d_mdl/T_MzKind */ "./src/d_mdl/T_MzKind.ts");
const F_load_and_save_1 = __webpack_require__(/*! ../d_cmn/F_load_and_save */ "./src/d_cmn/F_load_and_save.ts");
const F_set_menu_mode_1 = __webpack_require__(/*! ./F_set_menu_mode */ "./src/mai_maze/F_set_menu_mode.ts");
const F_set_UD_mode_1 = __webpack_require__(/*! ./F_set_UD_mode */ "./src/mai_maze/F_set_UD_mode.ts");
const F_set_save_mode_1 = __webpack_require__(/*! ./F_set_save_mode */ "./src/mai_maze/F_set_save_mode.ts");
const F_display_mazeCh_1 = __webpack_require__(/*! ./F_display_mazeCh */ "./src/mai_maze/F_display_mazeCh.ts");
const F_display_maze3D_1 = __webpack_require__(/*! ./F_display_maze3D */ "./src/mai_maze/F_display_maze3D.ts");
const global_for_maze_1 = __webpack_require__(/*! ./global_for_maze */ "./src/mai_maze/global_for_maze.ts");
const F_display_maze2D_1 = __webpack_require__(/*! ./F_display_maze2D */ "./src/mai_maze/F_display_maze2D.ts");
const ctls_move_nor = {
    name: 'move_nor',
    do_U: go_F,
    do_D: go_B,
    doUL: go_L,
    doUR: go_R,
    do_L: tr_L,
    do_R: tr_R,
    menu: menu,
};
function init_move_mode() {
    global_for_maze_1.g_ctls.set(ctls_move_nor);
}
function act_move_mode() {
    global_for_maze_1.g_ctls.act(ctls_move_nor);
    global_for_maze_1.g_vsw.view(global_for_maze_1.g_vsw.Move());
    setCanvas3DClick();
}
function do_instant_load() {
    (0, F_load_and_save_1.instant_load)().then((jsonObj) => {
        (0, F_set_save_mode_1.decode_all)(jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.save);
        (0, global_for_maze_1.do_load_bottom_half)('ロードしました');
    });
}
function do_instant_save() {
    (0, F_set_save_mode_1.set_g_save)(-1, -1, '簡易保存データ', '', `『${global_for_maze_1.g_maze.get_name()}』 `
        + `地下 ${global_for_maze_1.g_team.get_pd().z + 1}階層 `
        + `(X: ${global_for_maze_1.g_team.get_pd().x}, Y: ${global_for_maze_1.g_team.get_pd().y})`, true);
    (0, F_load_and_save_1.instant_save)();
}
function clear_mask_around_the_team() {
    global_for_maze_1.g_maze.clear_mask_around_the_team(global_for_maze_1.g_team);
}
function change_unexp_to_floor(p) {
    global_for_maze_1.g_maze.change_unexp_to_floor(p);
}
function go_F() {
    const rslt = global_for_maze_1.g_team.walk().hope_p_fwd();
    move_check(rslt);
    do_move_bottom_half('blink_on');
}
function go_B() {
    const rslt = global_for_maze_1.g_team.walk().hope_p_bak();
    move_check(rslt);
    do_move_bottom_half('blink_on');
}
function go_L() {
    const rslt = global_for_maze_1.g_team.walk().hope_p_lft();
    move_check(rslt);
    do_move_bottom_half('blink_on');
}
function go_R() {
    const rslt = global_for_maze_1.g_team.walk().hope_p_rgt();
    move_check(rslt);
    do_move_bottom_half('blink_on');
}
function tr_R() {
    const rslt = global_for_maze_1.g_team.walk().hope_turn_r();
    move_check(rslt);
    do_move_bottom_half('blink_off');
}
function tr_L() {
    const rslt = global_for_maze_1.g_team.walk().hope_turn_l();
    move_check(rslt);
    do_move_bottom_half('blink_off');
}
function move_check(r) {
    global_for_maze_1.g_mvm.clear_message();
    around_obj(r);
    if (!r.has_hope)
        return;
    if (r.hope == 'Turn') {
        r.doOK();
        return;
    }
    if (r.hope == 'Move') {
        const cell = global_for_maze_1.g_maze.get_cell(r.subj);
        if (!(cell === null || cell === void 0 ? void 0 : cell.getObj().canThrough())) {
            dont_move(r);
            return;
        }
        const obj = global_for_maze_1.g_maze.get_obj(r.subj);
        if (obj !== null) {
            if (obj.canThrough()) {
                r.doOK();
                action_obj();
            }
            else {
                dont_move(r);
                around_obj(r);
                return;
            }
        }
        else {
            r.doOK();
        }
        const kind = cell === null || cell === void 0 ? void 0 : cell.getKind();
        switch (kind) {
            case T_MzKind_1.T_MzKind.StrUp:
            case T_MzKind_1.T_MzKind.StrDn:
            case T_MzKind_1.T_MzKind.StrUD:
                do_stairs_motion(kind);
        }
        return;
    }
}
function dont_move(r) {
    global_for_maze_1.g_mvm.normal_message('進めない！（笑）');
    r.doNG();
    return;
}
function around_obj(r) { }
function action_obj() { }
function do_move_bottom_half(blink_mode) {
    change_unexp_to_floor(global_for_maze_1.g_team.get_pd());
    (0, F_display_maze3D_1.display_maze3D)();
    display_maze_name();
    if (blink_mode === 'blink_on')
        (0, F_display_maze3D_1.maze3D_blink_on_direction)();
    else
        (0, F_display_maze3D_1.maze3D_blink_off_direction)();
    if (!mask_cleared()) {
        clear_mask_around_the_team();
        if (mask_cleared())
            alert('この階を制覇しました！！');
    }
    (0, F_display_maze2D_1.display_maze2D)();
    (0, F_display_mazeCh_1.display_mazeCh)();
}
function mask_cleared() { return global_for_maze_1.g_maze.is_cleared(global_for_maze_1.g_team.get_pd()); }
function display_maze_name() {
    try {
        const p = document.getElementById('maze_view3D_maze_name_info');
        p.innerHTML = global_for_maze_1.g_maze.get_name();
    }
    catch (err) { }
    ;
}
function setCanvas3DClick() {
    if ((global_for_maze_1.g_ds === null || global_for_maze_1.g_ds === void 0 ? void 0 : global_for_maze_1.g_ds.canvas) === null)
        return;
    global_for_maze_1.g_ds.canvas.onclick = canvas3Dclick;
}
function clrCanvas3DClick() {
    if ((global_for_maze_1.g_ds === null || global_for_maze_1.g_ds === void 0 ? void 0 : global_for_maze_1.g_ds.canvas) === null)
        return;
    global_for_maze_1.g_ds.canvas.onclick = () => { };
}
function canvas3Dclick(ev) {
    var _a, _b, _c, _d;
    if ((global_for_maze_1.g_ds === null || global_for_maze_1.g_ds === void 0 ? void 0 : global_for_maze_1.g_ds.canvas) === null)
        return;
    if (ev.target !== global_for_maze_1.g_ds.canvas)
        return;
    const cvs = global_for_maze_1.g_ds.canvas;
    const left_pane_r = cvs.clientWidth * 0.25;
    const rght_pane_l = cvs.clientWidth * 0.75;
    const back_pane_u = cvs.clientHeight * 0.80;
    if (ev.offsetX < left_pane_r) {
        (_a = document.getElementById('l_arr')) === null || _a === void 0 ? void 0 : _a.click();
        return;
    }
    if (ev.offsetX > rght_pane_l) {
        (_b = document.getElementById('r_arr')) === null || _b === void 0 ? void 0 : _b.click();
        return;
    }
    if (ev.offsetY < back_pane_u) {
        (_c = document.getElementById('u_arr')) === null || _c === void 0 ? void 0 : _c.click();
        return;
    }
    (_d = document.getElementById('d_arr')) === null || _d === void 0 ? void 0 : _d.click();
    return;
}
function do_stairs_motion(kind) {
    switch (kind) {
        case T_MzKind_1.T_MzKind.StrUp:
            clrCanvas3DClick();
            (0, F_set_UD_mode_1.act_Up_mode)();
            break;
        case T_MzKind_1.T_MzKind.StrDn:
            clrCanvas3DClick();
            (0, F_set_UD_mode_1.act_Dn_mode)();
            break;
        case T_MzKind_1.T_MzKind.StrUD:
            clrCanvas3DClick();
            (0, F_set_UD_mode_1.act_UD_mode)();
            break;
    }
}
function menu() {
    clrCanvas3DClick();
    global_for_maze_1.g_mvm.clear_message();
    (0, F_set_menu_mode_1.act_menu_mode)();
}


/***/ }),

/***/ "./src/mai_maze/F_set_mvpt_mode.ts":
/*!*****************************************!*\
  !*** ./src/mai_maze/F_set_mvpt_mode.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init_mvpt_mode = init_mvpt_mode;
exports.act_mvpt_mode = act_mvpt_mode;
const F_set_menu_mode_1 = __webpack_require__(/*! ./F_set_menu_mode */ "./src/mai_maze/F_set_menu_mode.ts");
const global_for_maze_1 = __webpack_require__(/*! ./global_for_maze */ "./src/mai_maze/global_for_maze.ts");
const C_UrlOpt_1 = __webpack_require__(/*! ../d_utl/C_UrlOpt */ "./src/d_utl/C_UrlOpt.ts");
const F_load_and_save_1 = __webpack_require__(/*! ../d_cmn/F_load_and_save */ "./src/d_cmn/F_load_and_save.ts");
const F_POST_1 = __webpack_require__(/*! ../d_cmn/F_POST */ "./src/d_cmn/F_POST.ts");
const global_1 = __webpack_require__(/*! ../d_cmn/global */ "./src/d_cmn/global.ts");
let mode;
const ctls_mvpt_nor = {
    name: 'mvpt_nor',
    isOK: isOK,
    isNG: isNG,
    cpOK: isOK,
    cpNG: isNG,
};
function init_mvpt_mode() {
    global_for_maze_1.g_ctls.set(ctls_mvpt_nor);
}
function act_mvpt_mode() {
    mode = 'chek';
    global_for_maze_1.g_cvm.notice_message('本当に街へ戻りますか？この場所にはギルドから復帰できます');
    global_for_maze_1.g_ctls.act(ctls_mvpt_nor);
    global_for_maze_1.g_vsw.view(global_for_maze_1.g_vsw.MvPt());
}
function isOK() {
    switch (mode) {
        case 'view':
            global_for_maze_1.g_cvm.notice_message('本当に街へ戻りますか？この場所にはギルドから復帰できます');
            mode = 'chek';
            break;
        case 'chek':
            global_for_maze_1.g_cvm.notice_message('街へ戻りました');
            mode = 'view';
            const mvpt = global_for_maze_1.g_team.get_loc().clone();
            mvpt.set_url(global_1.g_my_url);
            mvpt.set_tid(global_for_maze_1.g_team.uid());
            mvpt.set_uid(global_for_maze_1.g_maze.uid());
            global_1.g_save.all_mvpt[mvpt.uid()] = mvpt;
            global_1.g_save.all_maze[global_for_maze_1.g_maze.uid()] = global_for_maze_1.g_maze;
            (0, F_load_and_save_1.tmp_save)().then(() => {
                const opt = new C_UrlOpt_1.C_UrlOpt();
                opt.set('mode', 'load');
                opt.set('pid', global_1.g_start_env.pid);
                opt.set('opt', 100);
                (0, F_POST_1.POST_and_move_page)(global_1.g_url[global_1.g_url_mai_guld], opt);
                return;
            });
            break;
    }
}
function isNG() {
    switch (mode) {
        case 'chek':
            global_for_maze_1.g_cvm.clear_message();
            (0, F_set_menu_mode_1.act_menu_mode)();
            break;
    }
}


/***/ }),

/***/ "./src/mai_maze/F_set_save_mode.ts":
/*!*****************************************!*\
  !*** ./src/mai_maze/F_set_save_mode.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init_SL_mode = init_SL_mode;
exports.act_load_mode = act_load_mode;
exports.act_save_mode = act_save_mode;
exports.display_save_list = display_save_list;
exports.decode_all = decode_all;
exports.decode_maze = decode_maze;
exports.set_g_save = set_g_save;
const C_UrlOpt_1 = __webpack_require__(/*! ../d_utl/C_UrlOpt */ "./src/d_utl/C_UrlOpt.ts");
const C_Location_1 = __webpack_require__(/*! ../d_mdl/C_Location */ "./src/d_mdl/C_Location.ts");
const C_PointDir_1 = __webpack_require__(/*! ../d_mdl/C_PointDir */ "./src/d_mdl/C_PointDir.ts");
const C_CtlCursor_1 = __webpack_require__(/*! ../d_ctl/C_CtlCursor */ "./src/d_ctl/C_CtlCursor.ts");
const F_POST_1 = __webpack_require__(/*! ../d_cmn/F_POST */ "./src/d_cmn/F_POST.ts");
const F_load_and_save_1 = __webpack_require__(/*! ../d_cmn/F_load_and_save */ "./src/d_cmn/F_load_and_save.ts");
const global_1 = __webpack_require__(/*! ../d_cmn/global */ "./src/d_cmn/global.ts");
const F_set_menu_mode_1 = __webpack_require__(/*! ./F_set_menu_mode */ "./src/mai_maze/F_set_menu_mode.ts");
const F_set_move_mode_1 = __webpack_require__(/*! ./F_set_move_mode */ "./src/mai_maze/F_set_move_mode.ts");
const global_for_maze_1 = __webpack_require__(/*! ./global_for_maze */ "./src/mai_maze/global_for_maze.ts");
const C_SaveInfo_1 = __webpack_require__(/*! ../d_mdl/C_SaveInfo */ "./src/d_mdl/C_SaveInfo.ts");
let for_save = false;
let UL_idx = 0;
let UL_bak = 999;
let save_UL_list;
let UL_list_crsr;
let UL_list_leng;
let UL_to_Data;
let form_id;
let form_time;
let form_detail;
let form_point;
let is_kakunin = false;
let save_list;
const save_list_max = 20;
const ctls_load_rtn = {
    name: 'load_rtn',
    isNG: go_back_menu_mode,
    isRT: go_back_menu_mode,
    cpRT: go_back_menu_mode,
};
const ctls_load_nor = {
    name: 'load_nor',
    do_U: do_U,
    do_D: do_D,
    do_L: do_L,
    do_R: do_R,
    isOK: check_load,
    cpOK: check_load,
    isNG: go_back_menu_mode,
    isRT: go_back_menu_mode,
    cpRT: go_back_menu_mode,
};
const ctls_load_chk = {
    name: 'load_chk',
    do_U: do_U,
    do_D: do_D,
    do_L: do_L,
    do_R: do_R,
    isOK: isOK_for_load,
    cpOK: isOK_for_load,
    isNG: isNG_for_load,
    cpNG: isNG_for_load,
    isRT: go_back_menu_mode,
    cpRT: go_back_menu_mode,
};
const ctls_save_nor = {
    name: 'save_nor',
    do_U: do_U,
    do_D: do_D,
    do_L: do_L,
    do_R: do_R,
    isOK: check_save,
    cpOK: check_save,
    isNG: go_back_menu_mode,
    isRT: go_back_menu_mode,
    cpRT: go_back_menu_mode,
};
const ctls_save_chk = {
    name: 'save_chk',
    do_U: do_U,
    do_D: do_D,
    do_L: do_L,
    do_R: do_R,
    isOK: isOK_for_save,
    cpOK: isOK_for_save,
    isNG: isNG_for_save,
    cpNG: isNG_for_save,
    isRT: go_back_menu_mode,
    cpRT: go_back_menu_mode,
};
function init_SL_mode() {
    init_view();
    init_ctls();
}
function act_load_mode() {
    __set_data(false).then(() => {
        if (!exist_save_list()) {
            hide_load_fields();
            global_for_maze_1.g_cvm.notice_message('ロードできるデータが有りません');
            global_for_maze_1.g_ctls.act(ctls_load_rtn);
            global_for_maze_1.g_vsw.view(global_for_maze_1.g_vsw.Move());
            return;
        }
        else {
            show_load_fields();
            display_message();
            global_for_maze_1.g_ctls.act(ctls_load_nor);
            global_for_maze_1.g_vsw.view(global_for_maze_1.g_vsw.LdSv());
        }
    });
}
function act_save_mode() {
    __set_data(true).then(() => {
        display_message();
        global_for_maze_1.g_ctls.act(ctls_save_nor);
        global_for_maze_1.g_vsw.view(global_for_maze_1.g_vsw.LdSv());
    });
}
function __set_data(_for_save) {
    return __awaiter(this, void 0, void 0, function* () {
        for_save = _for_save;
        global_for_maze_1.g_cvm.clear_message();
        is_kakunin = false;
        yield display_save_list();
    });
}
function hide_load_fields() {
    var _a, _b;
    (_a = document.getElementById('ldsv_data_list')) === null || _a === void 0 ? void 0 : _a.style.setProperty('display', 'none');
    (_b = document.getElementById('ldsv_data_fields')) === null || _b === void 0 ? void 0 : _b.style.setProperty('display', 'none');
}
function show_load_fields() {
    var _a, _b;
    (_a = document.getElementById('ldsv_data_list')) === null || _a === void 0 ? void 0 : _a.style.setProperty('display', 'block');
    (_b = document.getElementById('ldsv_data_fields')) === null || _b === void 0 ? void 0 : _b.style.setProperty('display', 'block');
}
function init_data() { }
function init_view() { }
function init_ctls() {
    is_kakunin = false;
    UL_bak = 999;
    global_for_maze_1.g_ctls.set(ctls_load_rtn);
    global_for_maze_1.g_ctls.set(ctls_load_nor);
    global_for_maze_1.g_ctls.set(ctls_load_chk);
    global_for_maze_1.g_ctls.set(ctls_save_nor);
    global_for_maze_1.g_ctls.set(ctls_save_chk);
}
function isOK_for_load() {
    if (save_UL_list === null)
        return;
    if (UL_idx < 0 || UL_idx > UL_list_leng - 1)
        return;
    load();
}
function isOK_for_save() {
    if (save_UL_list === null)
        return;
    if (UL_idx < 0 || UL_idx > UL_list_leng - 1)
        return;
    save();
}
function isNG_for_load() {
    _isNG_(ctls_load_nor);
}
function isNG_for_save() {
    _isNG_(ctls_save_nor);
}
function _isNG_(ctls) {
    if (!is_kakunin) {
        global_for_maze_1.g_cvm.clear_message();
        go_back_menu_mode();
    }
    else {
        is_kakunin = false;
        global_for_maze_1.g_ctls.act(ctls);
        display_message();
    }
}
function go_back_menu_mode() {
    global_for_maze_1.g_cvm.clear_message();
    (0, F_set_menu_mode_1.act_menu_mode)();
}
function go_back_move_mode() {
    (0, F_set_move_mode_1.act_move_mode)();
    (0, F_set_move_mode_1.do_move_bottom_half)('blink_off');
}
function do_U() {
    display_message();
    UL_idx = UL_list_crsr.pos_U();
    form_set();
}
function do_D() {
    display_message();
    UL_idx = UL_list_crsr.pos_D();
    form_set();
}
function do_L() {
    display_message();
    UL_idx = UL_list_crsr.pos_L();
    form_set();
}
function do_R() {
    display_message();
    UL_idx = UL_list_crsr.pos_R();
    form_set();
}
function form_clr() {
    if (UL_idx < 0 || UL_idx > UL_list_leng - 1)
        return;
    form_id.value = '-1';
    form_time.innerText = '';
    form_point.innerText = '';
    if (form_detail.hasAttribute('readonly')) {
        form_detail.removeAttribute('readonly');
        form_detail.value = '';
        form_detail.setAttribute('readonly', 'readonly');
    }
    else {
        form_detail.value = '';
    }
}
function form_set() {
    var _a;
    if (UL_idx < 0 || UL_idx > UL_list_leng - 1)
        return;
    form_clr();
    const data_idx = UL_to_Data[UL_idx];
    form_id.value = save_list[data_idx].save_id.toString();
    form_time.innerText = (_a = save_list[data_idx].save_time) === null || _a === void 0 ? void 0 : _a.toISOString();
    form_point.innerText = save_list[data_idx].point;
    if (form_detail.hasAttribute('readonly')) {
        form_detail.removeAttribute('readonly');
        form_detail.value = save_list[data_idx].detail;
        form_detail.setAttribute('readonly', 'readonly');
    }
    else {
        form_detail.value = save_list[data_idx].detail;
    }
}
function display_save_list() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const data_list = 'ldsv_data_list';
        const data_id = 'ldsv_data_id';
        const data_time = 'ldsv_data_time';
        const data_detail = 'ldsv_data_detail';
        const data_point = 'ldsv_data_point';
        yield ((_a = (0, F_load_and_save_1.get_save_info)()) === null || _a === void 0 ? void 0 : _a.then(jsonObj => {
            if (jsonObj === null || jsonObj === undefined) {
                global_1.g_mes.warning_message('セーブ情報の受信に失敗しました。【受信データ無し】');
                return undefined;
            }
            if (jsonObj.ecode !== 0) {
                global_1.g_mes.warning_message(`『${jsonObj.emsg}』(${jsonObj.ecode})`);
                global_1.g_mes.warning_message('セーブ情報の受信に失敗しました。');
                return undefined;
            }
            try {
                save_list = {};
                for (let save_info of jsonObj.save_info) {
                    save_list[save_info.uniq_no] = new C_SaveInfo_1.C_SaveInfo(save_info);
                }
                if (for_save) {
                    for (let uniq_no_cnt = 0; uniq_no_cnt < save_list_max; uniq_no_cnt++) {
                        if (uniq_no_cnt in save_list)
                            continue;
                        save_list[uniq_no_cnt] = new C_SaveInfo_1.C_SaveInfo({
                            save_id: -1,
                            uniq_no: uniq_no_cnt,
                            title: `新規保存#${uniq_no_cnt.toString().padStart(2, '0')}`,
                            detail: '',
                            point: '',
                            save_time: undefined,
                            auto_mode: '0',
                        });
                    }
                }
                save_UL_list = document.getElementById(data_list);
                if (save_UL_list === null) {
                    alert('Can not find the Dom of Save List!');
                    return;
                }
                while (save_UL_list.firstChild !== null) {
                    save_UL_list.removeChild(save_UL_list.firstChild);
                }
                let UL_list_idx = 0;
                UL_to_Data = {};
                for (let data_idx in save_list) {
                    if (save_list[data_idx].auto_mode) {
                        if (for_save)
                            continue;
                        switch (save_list[data_idx].uniq_no) {
                            case 100:
                                save_list[data_idx].title = '自動保存分';
                                save_list[data_idx].detail = '作業用に簡易保存したデータです';
                                continue;
                            case 101:
                                save_list[data_idx].title = '簡易保存分';
                                save_list[data_idx].detail = 'デバッグモードで簡易保存したデータです';
                                break;
                            case 102:
                                save_list[data_idx].title = '階段直前分';
                                save_list[data_idx].detail = '一番最近のフロア移動直前に自動保存したデータです';
                                break;
                            case 103:
                                save_list[data_idx].title = 'ｲﾍﾞﾝﾄ直前分';
                                save_list[data_idx].detail = 'イベント(失敗)直前に簡易保存したデータです';
                                break;
                        }
                    }
                    const li = document.createElement('li');
                    li.innerHTML = `『${save_list[data_idx].title}』`;
                    li.id = UL_list_idx.toString();
                    li.addEventListener("click", for_save ? _OK_save_Fnc : _OK_load_Fnc, false);
                    save_UL_list.appendChild(li);
                    UL_to_Data[UL_list_idx++] = Number(data_idx);
                }
                UL_list_crsr = C_CtlCursor_1.C_CtlCursor.getObj(save_UL_list);
                UL_list_leng = save_UL_list.children.length;
                form_id = document.getElementById(data_id);
                form_time = document.getElementById(data_time);
                form_detail = document.getElementById(data_detail);
                form_point = document.getElementById(data_point);
                if (!exist_save_list())
                    return;
                UL_idx = 0;
                UL_list_crsr.set_pos(UL_idx);
                form_set();
                return;
            }
            catch (err) {
                global_1.g_mes.warning_message(err);
                global_1.g_mes.warning_message('セーブ情報の受信に失敗しました。【データ不一致】');
                return;
            }
        }));
    });
}
function _OK_load_Fnc(e) {
    UL_idx = Number(this.id);
    if (UL_idx !== UL_bak) {
        UL_bak = UL_idx;
        is_kakunin = false;
    }
    if (is_kakunin)
        isOK_for_load();
    else
        check_load();
    UL_list_crsr.set_pos(UL_idx);
    form_set();
}
function _OK_save_Fnc(e) {
    UL_idx = Number(this.id);
    if (UL_idx !== UL_bak) {
        UL_bak = UL_idx;
        is_kakunin = false;
    }
    if (is_kakunin)
        isOK_for_save();
    else
        check_save();
    UL_list_crsr.set_pos(UL_idx);
    form_set();
}
function exist_save_list() {
    return save_UL_list.children.length > 0;
}
function check_load() {
    const data_idx = UL_to_Data[UL_idx];
    if (UL_idx < 0 || UL_idx > UL_list_leng - 1) {
        global_1.g_mes.warning_message(`check!! No longer access idx!『${save_list[data_idx].title}』(save_id: ${save_list[data_idx].save_id})`);
    }
    is_kakunin = true;
    global_for_maze_1.g_ctls.act(ctls_load_chk);
    display_message();
}
function check_save() {
    const data_idx = UL_to_Data[UL_idx];
    if (UL_idx < 0 || UL_idx > UL_list_leng - 1) {
        global_1.g_mes.warning_message(`check!! No longer access idx!『${save_list[data_idx].title}』(save_id: ${save_list[data_idx].save_id})`);
    }
    if (save_list[data_idx].auto_mode) {
        global_1.g_mes.warning_message(`check!! This is Auto Mode!『${save_list[data_idx].title}』(save_id: ${save_list[data_idx].save_id})`);
    }
    is_kakunin = true;
    global_for_maze_1.g_ctls.act(ctls_save_chk);
    display_message();
}
function display_message() {
    if (for_save) {
        if (is_kakunin) {
            if (UL_to_Data[UL_idx] === undefined) {
                global_for_maze_1.g_cvm.notice_message('これに保存しますか？');
            }
            else {
                global_for_maze_1.g_cvm.notice_message('これに上書保存しますか？以前のデータは消去されます');
            }
        }
        else {
            global_for_maze_1.g_cvm.normal_message('どれに保存しますか？');
        }
    }
    else {
        if (is_kakunin) {
            global_for_maze_1.g_cvm.notice_message('ロードしますか？');
        }
        else {
            global_for_maze_1.g_cvm.normal_message('どれをロードしますか？');
        }
    }
}
function load() {
    const data_idx = UL_to_Data[UL_idx];
    if (save_list[data_idx].mypos.url() !== '' && save_list[data_idx].mypos.url() != global_1.g_my_url) {
        _load_other(data_idx);
        return;
    }
    _load_here(data_idx);
    return;
}
function _load_other(data_idx) {
    const opt = new C_UrlOpt_1.C_UrlOpt();
    opt.set('mode', 'load');
    opt.set('pid', global_1.g_start_env.pid);
    opt.set('opt', save_list[data_idx].uniq_no.toString());
    (0, F_POST_1.POST_and_move_page)(save_list[data_idx].mypos.url(), opt);
    return;
}
function _load_here(data_idx) {
    global_1.g_start_env.pid = save_list[data_idx].player_id;
    (0, F_load_and_save_1.general_load)(save_list[data_idx].uniq_no).then((jsonObj) => {
        is_kakunin = false;
        decode_all(jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.save);
        global_for_maze_1.g_mvm.notice_message('ロードしました');
        go_back_move_mode();
    });
}
function save() {
    return __awaiter(this, void 0, void 0, function* () {
        const data_idx = UL_to_Data[UL_idx];
        set_g_save(save_list[data_idx].save_id, save_list[data_idx].uniq_no, `保存済: #${data_idx.toString().padStart(2, '0')}`, form_detail.value, `『${global_for_maze_1.g_maze.get_name()}』 `
            + `地下 ${global_for_maze_1.g_team.get_pd().z + 1}階層 `
            + `(X: ${global_for_maze_1.g_team.get_pd().x}, Y: ${global_for_maze_1.g_team.get_pd().y})`, false);
        (0, F_load_and_save_1.general_save)().then((jsonObj) => {
            decode_all(jsonObj);
            is_kakunin = false;
            global_for_maze_1.g_mvm.notice_message('保存しました');
            go_back_move_mode();
        });
    });
}
function decode_all(jsonObj) {
    var _a;
    if (jsonObj === undefined)
        return;
    global_1.g_save.decode(jsonObj);
    global_1.g_save.mypos.set_url(global_1.g_my_url);
    global_for_maze_1.g_team.decode(global_1.g_save.all_team[(_a = global_1.g_save.mypos.tid()) !== null && _a !== void 0 ? _a : ''].encode());
    global_for_maze_1.g_team.set_loc(global_1.g_save.mypos);
    const loc = global_for_maze_1.g_team.get_loc();
    if (loc.get_lckd() == C_Location_1.T_Lckd.Maze) {
        global_for_maze_1.g_maze.decode(global_1.g_save.all_maze[loc.get_uid()].encode());
    }
    for (const i in global_for_maze_1.g_hres)
        delete global_for_maze_1.g_hres[i];
    for (const hero of global_for_maze_1.g_team.hres())
        global_for_maze_1.g_hres.push(hero);
    global_for_maze_1.g_maze.add_obj(global_for_maze_1.g_team);
}
function decode_maze(jsonObj) {
    var _a, _b, _c, _d;
    if ((jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.maze) !== undefined)
        global_for_maze_1.g_maze.decode(jsonObj.maze);
    if ((jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.pos) !== undefined) {
        let pos = new C_PointDir_1.C_PointDir({
            x: (_a = jsonObj.pos) === null || _a === void 0 ? void 0 : _a.x,
            y: (_b = jsonObj.pos) === null || _b === void 0 ? void 0 : _b.y,
            z: (_c = jsonObj.pos) === null || _c === void 0 ? void 0 : _c.z,
            d: (_d = jsonObj.pos) === null || _d === void 0 ? void 0 : _d.d,
        });
        global_for_maze_1.g_team.walk().set_place(global_for_maze_1.g_maze, global_1.g_my_url, pos);
        global_1.g_save.mypos = global_for_maze_1.g_team.get_loc();
    }
    for (const i in global_for_maze_1.g_hres)
        delete global_for_maze_1.g_hres[i];
    for (const hero of global_for_maze_1.g_team.hres())
        global_for_maze_1.g_hres.push(hero);
    global_for_maze_1.g_maze.add_obj(global_for_maze_1.g_team);
    global_1.g_save.mypos = global_for_maze_1.g_team.get_loc();
    global_1.g_save.all_maze[global_for_maze_1.g_maze.uid()] = global_for_maze_1.g_maze;
    global_1.g_save.all_team[global_for_maze_1.g_team.uid()] = global_for_maze_1.g_team;
}
function set_g_save(save_id, uniq_no, title, detail, point, auto_mode) {
    global_1.g_save.mypos = global_for_maze_1.g_team.get_loc();
    global_1.g_save.all_team[global_for_maze_1.g_team.uid()] = global_for_maze_1.g_team;
    global_1.g_save.all_maze[global_for_maze_1.g_maze.uid()] = global_for_maze_1.g_maze;
    global_1.g_save.decode({
        save_id: save_id,
        player_id: global_1.g_start_env.pid,
        uniq_no: uniq_no,
        title: title,
        detail: detail,
        point: point,
        auto_mode: auto_mode ? '1' : '0',
        is_active: '1',
        is_delete: '0',
    });
}


/***/ }),

/***/ "./src/mai_maze/global_for_maze.ts":
/*!*****************************************!*\
  !*** ./src/mai_maze/global_for_maze.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.g_ctls = exports.g_guld = exports.g_team = exports.g_maze = exports.g_hres = exports.g_cvm = exports.g_mvm = exports.g_vsw = exports.g_ds = exports.g_ctls_mode = void 0;
exports.init_before_games = init_before_games;
exports.init_before_new_games = init_before_new_games;
exports.do_load_bottom_half = do_load_bottom_half;
exports.init_after_loaded_DOM = init_after_loaded_DOM;
exports.init_debug_mode = init_debug_mode;
exports.g_ctls_mode = new Array(1);
const F_display_mazeCh_1 = __webpack_require__(/*! ./F_display_mazeCh */ "./src/mai_maze/F_display_mazeCh.ts");
const F_display_maze2D_1 = __webpack_require__(/*! ./F_display_maze2D */ "./src/mai_maze/F_display_maze2D.ts");
const F_display_maze3D_1 = __webpack_require__(/*! ./F_display_maze3D */ "./src/mai_maze/F_display_maze3D.ts");
exports.g_ds = { canvas: null, con: null, depth: 0, wall: null };
const C_SwitchView_1 = __webpack_require__(/*! ./C_SwitchView */ "./src/mai_maze/C_SwitchView.ts");
const C_OneLineViewMessage_1 = __webpack_require__(/*! ../d_vie/C_OneLineViewMessage */ "./src/d_vie/C_OneLineViewMessage.ts");
exports.g_hres = [];
const C_Maze_1 = __webpack_require__(/*! ../d_mdl/C_Maze */ "./src/d_mdl/C_Maze.ts");
exports.g_maze = new C_Maze_1.C_Maze();
const C_Team_1 = __webpack_require__(/*! ../d_mdl/C_Team */ "./src/d_mdl/C_Team.ts");
exports.g_team = new C_Team_1.C_Team();
const C_Guild_1 = __webpack_require__(/*! ../d_mdl/C_Guild */ "./src/d_mdl/C_Guild.ts");
exports.g_guld = new C_Guild_1.C_Guild();
const C_DefaultCtls_1 = __webpack_require__(/*! ./C_DefaultCtls */ "./src/mai_maze/C_DefaultCtls.ts");
const F_set_mode_1 = __webpack_require__(/*! ./F_set_mode */ "./src/mai_maze/F_set_mode.ts");
const F_set_save_mode_1 = __webpack_require__(/*! ./F_set_save_mode */ "./src/mai_maze/F_set_save_mode.ts");
const F_set_move_mode_1 = __webpack_require__(/*! ./F_set_move_mode */ "./src/mai_maze/F_set_move_mode.ts");
const F_load_and_save_1 = __webpack_require__(/*! ../d_cmn/F_load_and_save */ "./src/d_cmn/F_load_and_save.ts");
const global_1 = __webpack_require__(/*! ../d_cmn/global */ "./src/d_cmn/global.ts");
const F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "./src/d_utl/F_Rand.ts");
const C_MazeObj_1 = __webpack_require__(/*! ../d_mdl/C_MazeObj */ "./src/d_mdl/C_MazeObj.ts");
function init_before_games() {
    switch (global_1.g_start_env.mode) {
        case 'new':
            init_before_new_games();
            return;
        case 'load':
            init_before_load_games();
            return;
        case 'start':
            init_before_start_games();
            return;
        case 'mvpt':
            init_before_mvpt_games();
            return;
    }
}
function init_before_new_games() {
    (0, F_load_and_save_1.get_mai_maze)().then((jsonObj) => {
        (0, F_set_save_mode_1.decode_all)(jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.save);
        install_objs(5);
        do_load_bottom_half('');
    });
}
function init_before_load_games() {
    const uno = Number(global_1.g_start_env.opt);
    (0, F_load_and_save_1.general_load)(uno).then((jsonObj) => {
        (0, F_set_save_mode_1.decode_all)(jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.save);
        do_load_bottom_half('ロードしました');
    });
}
function init_before_start_games() {
    const maze_name = global_1.g_start_env.opt;
    (0, F_load_and_save_1.tmp_load)().then((jsonObj) => {
        (0, F_set_save_mode_1.decode_all)(jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.save);
        (0, F_load_and_save_1.get_new_maze)(maze_name).then((jsonObj) => {
            (0, F_set_save_mode_1.decode_maze)(jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.data);
            do_load_bottom_half('冒険を始めましょう！');
        });
    });
}
function init_before_mvpt_games() {
    (0, F_load_and_save_1.tmp_load)().then((jsonObj) => {
        (0, F_set_save_mode_1.decode_all)(jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.save);
        do_load_bottom_half('冒険を再開しましょう！！');
    });
}
function do_load_bottom_half(msg) {
    (0, F_display_mazeCh_1.init_mazeCh)();
    (0, F_display_maze2D_1.init_maze2D)();
    exports.g_ds = (0, F_display_maze3D_1.init_maze3D)();
    exports.g_mvm.notice_message(msg);
    global_1.g_mes.notice_message(msg);
    (0, F_set_move_mode_1.act_move_mode)();
    (0, F_set_move_mode_1.do_move_bottom_half)('blink_off');
}
function init_after_loaded_DOM() {
    (0, global_1.init_after_loaded_DOM_in_common)('debug_mode', 'pane_sytm_logs');
    exports.g_mvm = C_OneLineViewMessage_1.C_OneLineViewMessage.getObj('maze_mesg');
    exports.g_cvm = C_OneLineViewMessage_1.C_OneLineViewMessage.getObj('menu_mesg');
    exports.g_ctls = C_DefaultCtls_1.C_DefaultCtls.getObj();
    exports.g_vsw = C_SwitchView_1.C_SwitchView.getObj();
    init_debug_mode();
    stop_double_click();
    (0, F_set_mode_1.init_all_mode)();
    global_1.g_ready_games.setFunction(init_before_games);
    global_1.g_ready_games.setLoadedDOM();
}
function init_debug_mode() {
    try {
        const alert = document.getElementById('alert_mode');
        alert === null || alert === void 0 ? void 0 : alert.style.setProperty('display', 'none');
        alert === null || alert === void 0 ? void 0 : alert.addEventListener("click", (event) => {
            try {
                global_1.g_alert.show();
            }
            catch (err) { }
            ;
        });
        global_1.g_debug.setObj({
            yn: false,
            onName: 'DEBUG',
            offName: '通常',
            onClass: 'debug',
            offClass: 'normal',
        });
        global_1.g_debug.addFnc(toggle_debug_mode);
        const btn = document.getElementById('debug_mode');
        window.addEventListener("keydown", (event) => {
            switch (event.code) {
                case "NumpadMultiply":
                case "Escape":
                    btn.click();
            }
        });
    }
    catch (err) {
        return;
    }
    ;
}
function toggle_debug_mode(yn) {
    (0, F_display_mazeCh_1.display_mazeCh)();
    (0, F_display_maze2D_1.display_maze2D)();
    const alert = document.getElementById('alert_mode');
    const display = yn ? 'block' : 'none';
    alert === null || alert === void 0 ? void 0 : alert.style.setProperty('display', display);
}
function stop_double_click() {
    window.addEventListener('dblclick', (evt) => { evt.preventDefault(); });
}
function install_objs(num = 1) {
    for (let i = 0; i < num; i++) {
        const x = (0, F_Rand_1._irand)(1, (exports.g_maze.get_x_max() - 1) / 2) * 2 + 1;
        const y = (0, F_Rand_1._irand)(1, (exports.g_maze.get_y_max() - 1) / 2) * 2 + 1;
        const obj = C_MazeObj_1.C_MazeObj.newObj({
            pos: { x: x, y: y, z: 0, d: 0 },
            view: {
                layer: 2,
                letter: '物',
            },
        });
        exports.g_maze.add_obj(obj);
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************************!*\
  !*** ./src/mai_maze/mai_maze.ts ***!
  \**********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const global_for_maze_1 = __webpack_require__(/*! ./global_for_maze */ "./src/mai_maze/global_for_maze.ts");
window.addEventListener('DOMContentLoaded', function () {
    (0, global_for_maze_1.init_after_loaded_DOM)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDLENBQUMsRUFBRSxHQUFLLG9CQUFPLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBSSxvQkFBTyxFQUFDLENBQUMsRUFBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUksb0JBQU8sRUFBQyxDQUFDLEVBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFJLG9CQUFPLEVBQUMsQ0FBQyxFQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBSSxvQkFBTyxFQUFDLENBQUMsRUFBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUksb0JBQU8sRUFBQyxDQUFDLEVBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFJLG9CQUFPLEVBQUMsQ0FBQyxFQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBSSxvQkFBTyxFQUFDLENBQUMsRUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUksb0JBQU8sRUFBQyxDQUFDLEVBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFJLG9CQUFPLEVBQUMsQ0FBQyxFQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBSSxvQkFBTyxFQUFDLENBQUMsRUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUksb0JBQU8sRUFBQyxDQUFDLEVBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXBDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxNQUFNO1FBQ1QsTUFBTSxDQUFDLEdBQXNCLEVBQUUsQ0FBQztRQUNoQyxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDO1lBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ00sTUFBTSxDQUFDLENBQW9CO1FBQzlCLEtBQUssSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDaEIsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUztnQkFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwRSxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBZ0I7UUFDaEMsT0FBTyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0o7QUF0SEQsc0NBc0hDOzs7Ozs7Ozs7OztBQ2pJWTs7O0FBR2IsMEZBQXlEO0FBSzVDLGNBQU0sR0FBNkI7SUFDNUMsSUFBSSxFQUFFLENBQUM7SUFDUCxJQUFJLEVBQUUsQ0FBQztJQUNQLElBQUksRUFBRSxDQUFDO0NBQ0QsQ0FBQztBQUdYLFNBQVMsU0FBUyxDQUFDLElBQVk7O0lBQzNCLE9BQU8sWUFBTSxDQUFDLElBQUksQ0FBQyxjQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxjQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLG1DQUFJLE1BQU0sQ0FBQztBQUMzRSxDQUFDO0FBZUQsTUFBYSxVQUFVO0lBTW5CLFlBQW1CLElBQW9CO1FBTDdCLGFBQVEsR0FBVyxjQUFNLENBQUMsSUFBSSxDQUFDO1FBQy9CLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsWUFBTyxHQUFZLEVBQUUsQ0FBQztRQUN0QixZQUFPLEdBQWdCLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBRzlDLElBQUksSUFBSSxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTSxZQUFZLEtBQWEsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUM7SUFDMUQsUUFBUSxLQUFpQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQztJQUMvQyxRQUFRLEtBQWlCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDO0lBQy9DLE9BQU8sS0FBa0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUM7SUFFOUMsUUFBUSxDQUFDLElBQVk7UUFDeEIsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLGNBQU0sQ0FBQztZQUFFLE9BQU8sU0FBUyxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTSxRQUFRLENBQUMsSUFBWSxJQUFXLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUM7SUFDdEQsT0FBTyxDQUFFLEdBQVcsSUFBWSxJQUFJLENBQUMsT0FBTyxHQUFJLEdBQUcsQ0FBQyxFQUFDO0lBRXJELFlBQVksQ0FBQyxJQUFZO1FBQzVCLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxjQUFNLENBQUM7WUFBRSxPQUFPLFNBQVMsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLGNBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBR00sS0FBSztRQUVSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBQ00sS0FBSztRQUVSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBQ00sTUFBTTtRQUVULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRU0sS0FBSyxDQUFJLENBQWE7UUFDekIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLGNBQU0sQ0FBQyxJQUFJO1lBQUksT0FBTyxTQUFTLENBQUM7UUFDdEQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTO1lBQUcsT0FBTyxTQUFTLENBQUM7UUFFM0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFDTSxLQUFLLENBQUksQ0FBYztRQUMxQixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssY0FBTSxDQUFDLElBQUk7WUFBSSxPQUFPLFNBQVMsQ0FBQztRQUN0RCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVM7WUFBRyxPQUFPLFNBQVMsQ0FBQztRQUUzRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDTSxNQUFNLENBQUcsRUFBYztRQUMxQixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssY0FBTSxDQUFDLElBQUk7WUFBSyxPQUFPLFNBQVMsQ0FBQztRQUN2RCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQztRQUU1RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUdNLE1BQU07UUFDVCxPQUFPO1lBQ0gsSUFBSSxFQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2xDLElBQUksRUFBTSxJQUFJLENBQUMsUUFBUTtZQUN2QixPQUFPLEVBQUcsSUFBSSxDQUFDLE9BQU87WUFDdEIsT0FBTyxFQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1NBQ2xDLENBQUM7SUFDTixDQUFDO0lBQ00sTUFBTSxDQUFDLENBQWlCO1FBQzNCLElBQUksQ0FBQyxLQUFLLFNBQVM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLGNBQU0sQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRTdELElBQUksQ0FBQyxDQUFDLElBQUksS0FBUSxTQUFTO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxDQUFDLElBQUksS0FBUSxTQUFTO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3BELElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBSSxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FDSjtBQWpGRCxnQ0FpRkM7Ozs7Ozs7Ozs7O0FDakhZOzs7QUFnQ2IsMENBZ0JDO0FBOUNELG9GQUFtRDtBQUNuRCwwRkFBcUQ7QUFDckQsdUZBQWlFO0FBQ2pFLGlGQUFrRDtBQUNsRCwwRkFBcUQ7QUFDckQsaUZBQWtEO0FBR2xELHFGQUF5RTtBQUN6RSxxRkFBdUM7QUFDdkMsMEZBQTBDO0FBQzFDLDZGQUE0QztBQUM1QyxnR0FBNkQ7QUFrQjdELFNBQWdCLGVBQWUsQ0FBQyxDQUFzQjs7SUFDbEQsSUFBSSxDQUFDLEtBQUssU0FBUztRQUFFLE9BQU87SUFFNUIsS0FBSyxDQUFDLFlBQVk7VUFDWixhQUFhLEdBQUcsQ0FBQyxPQUFDLENBQUMsRUFBRSxtQ0FBUyxHQUFHLENBQUM7VUFDbEMsV0FBVyxHQUFLLENBQUMsT0FBQyxDQUFDLEtBQUssbUNBQU0sR0FBRyxDQUFDO1VBQ2xDLGFBQWEsR0FBRyxDQUFDLE9BQUMsQ0FBQyxPQUFPLG1DQUFJLEdBQUcsQ0FBQztVQUNsQyxhQUFhLEdBQUcsQ0FBQyxPQUFDLENBQUMsT0FBTyxtQ0FBSSxHQUFHLENBQUM7VUFDbEMsWUFBWSxHQUFJLENBQUMsT0FBQyxDQUFDLElBQUksbUNBQU8sR0FBRyxDQUFDO1VBQ2xDLFlBQVksR0FBSSxDQUFDLE9BQUMsQ0FBQyxNQUFNLG1DQUFLLEdBQUcsQ0FBQztVQUNsQyxZQUFZLEdBQUksQ0FBQyxPQUFDLENBQUMsTUFBTSxtQ0FBSyxHQUFHLENBQUM7VUFDbEMsWUFBWSxHQUFJLENBQUMsT0FBQyxDQUFDLE1BQU0sbUNBQUssR0FBRyxDQUFDO1VBQ2xDLFNBQVMsR0FBTyxDQUFDLE9BQUMsQ0FBQyxJQUFJLG1DQUFPLEdBQUcsQ0FBQztVQUNsQyxTQUFTLEdBQU8sQ0FBQyxPQUFDLENBQUMsSUFBSSxtQ0FBTyxHQUFHLENBQUM7VUFDbEMsSUFBSSxDQUNULENBQUM7QUFDTixDQUFDO0FBYUQsTUFBYSxNQUFNO0lBZWYsWUFBbUIsQ0FBYTtRQVR0QixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBTXJCLGdCQUFXLEdBQWdCLENBQUMsQ0FBQztRQUM3QixxQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFHbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxHQUFHLHNCQUFTLEdBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFLLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFNLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFNLElBQUksaUJBQU8sQ0FDdEIsSUFBSSxpQkFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3BCLElBQUksaUJBQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLEtBQUssR0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixJQUFJLENBQUMsSUFBSSxHQUFNLEVBQUUsQ0FBQztRQUVsQixJQUFJLENBQUMsS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRVMsV0FBVyxDQUFDLE9BQWlCLG1CQUFRLENBQUMsS0FBSztRQUNqRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVsQyxNQUFNLEtBQUssR0FBcUIsS0FBSyxDQUFDLE1BQU0sQ0FBcUIsQ0FBQztRQUNsRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDOUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQW1CLENBQUM7WUFDM0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM5QixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUksS0FBSyxDQUFDLE1BQU0sQ0FBaUIsQ0FBQztnQkFDN0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUM5QixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsdUJBQVUsQ0FBQyxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxDQUFDO2dCQUMxRSxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ1MsV0FBVyxDQUFDLEVBQVc7UUFDN0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFbEMsSUFBSSxDQUFDLEtBQUssR0FBSyxLQUFLLENBQUMsTUFBTSxDQUFrQixDQUFDO1FBQzlDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQWdCLENBQUM7WUFDN0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFJLEtBQUssQ0FBQyxNQUFNLENBQWMsQ0FBQztnQkFDL0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDN0IsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDUyxjQUFjO1FBQ3BCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWxDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztZQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDOUIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQy9DLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUNELE9BQU87SUFDWCxDQUFDO0lBQ00sR0FBRyxLQUFpQixPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUM7SUFDeEMsUUFBUSxLQUFZLE9BQU8sbUJBQU0sQ0FBQyxJQUFJLEdBQUM7SUFDdkMsUUFBUSxLQUFZLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBQztJQUVyQyxNQUFNLENBQUMsQ0FBVTtRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFHTSxPQUFPLENBQUMsR0FBYztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUMvQixDQUFDO0lBQ00sT0FBTyxDQUFDLEdBQWM7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDTSxXQUFXLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1FBQzlDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLGlCQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDTSxPQUFPLENBQUMsQ0FBVTs7UUFDckIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLEdBQUcsR0FBcUIsSUFBSSxDQUFDO1FBRWpDLEtBQUssTUFBTSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3pCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFNUIsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssU0FBUztnQkFBRSxTQUFTO1lBQ3pDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxZQUFLLENBQUMsSUFBSSxFQUFFLDBDQUFFLE1BQU0sRUFBRSxNQUFLLElBQUksRUFBRSxDQUFDO2dCQUNyRCxJQUFJLGlCQUFLLENBQUMsSUFBSSxFQUFFLDBDQUFFLEtBQUssRUFBRSxtQ0FBRSxDQUFDLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQztvQkFDckMsS0FBSyxHQUFHLGlCQUFLLENBQUMsSUFBSSxFQUFFLDBDQUFFLEtBQUssRUFBRSxtQ0FBRSxDQUFDLEVBQUUsQ0FBQztvQkFDbkMsR0FBRyxHQUFLLEtBQUssQ0FBQztnQkFDbEIsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBQ00sU0FBUyxDQUFDLENBQVU7O1FBQ3ZCLEtBQUssTUFBTSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3pCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDNUIsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLFlBQUssQ0FBQyxJQUFJLEVBQUUsMENBQUUsTUFBTSxFQUFFLE1BQUssSUFBSTtnQkFBRSxPQUFPLElBQUksQ0FBQztRQUN4RSxDQUFDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUdNLHFCQUFxQixDQUFDLENBQVU7UUFDbkMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLG1CQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsbUJBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxDQUFDO0lBQ0wsQ0FBQztJQUdNLDBCQUEwQixDQUFDLElBQVk7UUFFMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVqRCxNQUFNLEtBQUssR0FBTSxDQUFDLENBQUM7UUFHbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzdCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztnQkFFN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELENBQUM7aUJBQU0sQ0FBQztnQkFFSixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRWpELE1BQU07WUFDVixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFDUyxZQUFZLENBQUMsT0FBZ0I7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUFFLE9BQU87UUFFdkMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM5QixDQUFDO0lBQ0wsQ0FBQztJQUVNLFVBQVUsQ0FBQyxPQUFnQjtRQUM5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sU0FBUyxDQUFDLENBQVUsSUFBWSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQztJQUN6RSxhQUFhLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1FBQ2hELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sVUFBVSxDQUFDLENBQVU7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ3ZDLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssbUJBQVEsQ0FBQyxLQUFLLENBQUM7WUFDcEIsS0FBSyxtQkFBUSxDQUFDLEtBQUssQ0FBQztZQUNwQixLQUFLLG1CQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3BCLEtBQUssbUJBQVEsQ0FBQyxLQUFLLENBQUM7WUFDcEIsS0FBSyxtQkFBUSxDQUFDLEtBQUs7Z0JBQ2YsT0FBTyxJQUFJLENBQUM7UUFDcEIsQ0FBQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxTQUFTLEtBQVksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUM7SUFDaEQsU0FBUyxLQUFZLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDO0lBQ2hELFNBQVMsS0FBWSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBQztJQUNoRCxRQUFRLENBQUUsQ0FBVTtRQUN2QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwRSxPQUFPLG1CQUFRLENBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDTSxZQUFZLENBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1FBQ2hELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEUsT0FBTyxtQkFBUSxDQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRU0sWUFBWSxDQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUNoRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFDTSxRQUFRLENBQUUsQ0FBVTtRQUN2QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBQ00sUUFBUSxDQUFDLENBQVUsRUFBRSxDQUFXO1FBQ25DLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLHVCQUFVLENBQUMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUNyRSxDQUFDO0lBQ0wsQ0FBQztJQUNNLFlBQVksQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFXO1FBQzVELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsdUJBQVUsQ0FBQyxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQzdFLENBQUM7SUFDTCxDQUFDO0lBQ00sUUFBUSxDQUFDLENBQVU7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ00sTUFBTSxDQUFDLENBQVU7UUFDcEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFhRSxTQUFTLENBQUMsSUFBYyxFQUFFLEtBQVk7UUFDekMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQzNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxPQUFPO0lBQ1gsQ0FBQztJQUVNLE9BQU8sQ0FBQyxJQUFjLEVBQUUsS0FBWSxFQUFFLEtBQWEsRUFBRSxNQUFjLEVBQUUsTUFBYyxFQUFFLEtBQWE7UUFDckcsSUFBSSxLQUFLLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNqRixJQUFJLEtBQUssR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRWpGLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNsQixNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDbEIsTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFNLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFHaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBQ0QsT0FBTztJQUNYLENBQUM7SUFHTSxZQUFZLENBQUMsS0FBWTs7UUFDNUIsTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QyxNQUFNLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sS0FBSyxHQUFNLENBQUMsR0FBRyxtQkFBTSxFQUFDLENBQUMsRUFBRSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sS0FBSyxHQUFNLENBQUMsR0FBRyxtQkFBTSxFQUFDLENBQUMsRUFBRSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sS0FBSyxHQUFNLENBQUMsR0FBRyxtQkFBTSxFQUFDLENBQUMsRUFBRSx5QkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBR2hELElBQUksS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ2IsSUFBSSxXQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQywwQ0FBRSxPQUFPLEVBQUUsTUFBSyxtQkFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUMzRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRyxtQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hFLENBQUM7aUJBQU0sQ0FBQztnQkFDSixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRyxtQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hFLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxXQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLDBDQUFFLE9BQU8sRUFBRSxNQUFLLG1CQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRyxtQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVELENBQUM7YUFBTSxDQUFDO1lBQ0osSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRyxtQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFFRCxPQUFPLElBQUksdUJBQVUsQ0FBQyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTSxXQUFXLENBQUMsS0FBYTs7UUFDNUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBSWxDLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFHdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFJMUQsTUFBTSxNQUFNLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7UUFDbEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO1lBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztnQkFDcEMsTUFBTSxFQUFFLEdBQUcsbUJBQU0sRUFBQyxDQUFDLEVBQUUseUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLDRCQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdDLENBQUM7UUFDTCxDQUFDO1FBR0QsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sV0FBVyxHQUFHLG1CQUFNLEVBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoRCxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsV0FBVyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7WUFDekMsTUFBTSxNQUFNLEdBQUcsbUJBQU0sRUFBQyxDQUFDLEVBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6RCxNQUFNLE1BQU0sR0FBRyxtQkFBTSxFQUFDLENBQUMsRUFBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pELE1BQU0sTUFBTSxHQUFHLG1CQUFNLEVBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwRCxNQUFNLE1BQU0sR0FBRyxtQkFBTSxFQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEQsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7UUFHRCxLQUFLLE1BQU0sSUFBSSxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQzdCLEtBQUssSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUM1QyxNQUFNLENBQUMsR0FBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLENBQUMsS0FBSyxTQUFTO29CQUFFLFNBQVM7Z0JBRTlCLElBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUM7dUJBQ2hCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7dUJBQzFCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO3VCQUNoQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsQ0FBQztZQUNULENBQUM7UUFDTCxDQUFDO1FBSUQsS0FBSyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssU0FBUztnQkFBRSxTQUFTO1lBRzlCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxtQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBR25ELE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0IsTUFBTSxFQUFFLEdBQUcsd0NBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLDBDQUFFLEVBQUUsbUNBQUkseUJBQVcsQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBSSxFQUFFLEtBQUsseUJBQVcsQ0FBQyxDQUFDO2dCQUFFLFNBQVM7WUFDbkMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVsQixJQUFJLENBQUMsWUFBWSxDQUNiLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLHlCQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLHlCQUFXLENBQUMsQ0FBQyxDQUFDLEVBQ3pELENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLHlCQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLHlCQUFXLENBQUMsQ0FBQyxDQUFDLEVBQ3pELEtBQUssRUFDTCxtQkFBUSxDQUFDLEtBQUssQ0FDakIsQ0FBQztRQUVOLENBQUM7UUFJRCxLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUMzQixJQUFJLEdBQUcsS0FBSyxTQUFTO2dCQUFFLFNBQVM7WUFFaEMsTUFBTSxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSwyQkFBWSxFQUFFLENBQUMsQ0FBQztZQUNuRixJQUFJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLG1CQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLFNBQVMsS0FBSyxTQUFTO29CQUFFLEtBQUssTUFBTSxDQUFDLElBQUksU0FBUyxDQUFDLEdBQUc7d0JBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRixDQUFDO1FBQ0wsQ0FBQztRQUNELE9BQU87SUFDWCxDQUFDO0lBRVMsV0FBVyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsU0FBdUIsRUFBRSxTQUFpQzs7UUFDbEcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7WUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRTFHLElBQUksU0FBUyxLQUFLLFNBQVM7WUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksVUFBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQUssS0FBSztZQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFbkUsSUFBSSxTQUFTLEtBQUssU0FBUyxJQUFJLFVBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFLLElBQUk7WUFBRyxPQUFPLENBQUMsSUFBSSxFQUFHLFNBQVMsQ0FBQyxDQUFDO1FBRTlGLE1BQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLFNBQVMsYUFBVCxTQUFTLGNBQVQsU0FBUyxJQUFULFNBQVMsR0FBSyxJQUFJLDJCQUFZLEVBQUUsRUFBQztRQUNqQyxTQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsSUFBSSxDQUFDLElBQUksNEJBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLGtDQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQywwQ0FBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXBFLElBQUksTUFBTSxHQUFXLENBQUMsRUFBRSxNQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQzNDLFFBQVEsa0NBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLDBDQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2hDLEtBQUsseUJBQVcsQ0FBQyxDQUFDO2dCQUNkLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ1gsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsTUFBTTtZQUNWLEtBQUsseUJBQVcsQ0FBQyxDQUFDO2dCQUNkLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ1gsTUFBTTtZQUNWLEtBQUsseUJBQVcsQ0FBQyxDQUFDO2dCQUNkLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ1gsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsTUFBTTtZQUNWLEtBQUsseUJBQVcsQ0FBQyxDQUFDO2dCQUNkLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ1gsTUFBTTtRQUNWLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVTLFNBQVMsQ0FBQyxDQUF5QixFQUFFLElBQWMsRUFBRSxLQUFhOztRQUN4RSxJQUFJLENBQUMsS0FBSyxTQUFTO1lBQUUsT0FBTztRQUU1QixNQUFNLEdBQUcsR0FBRyxtQkFBTSxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4QyxNQUFNLEVBQUUsR0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXhCLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0IsTUFBTSxFQUFFLEdBQUcsd0NBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLDBDQUFFLEVBQUUsbUNBQUkseUJBQVcsQ0FBQyxDQUFDO1FBQ3RELFNBQVMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbEIsSUFBSSxDQUFDLFlBQVksQ0FDYixFQUFFLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyx5QkFBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyx5QkFBVyxDQUFDLENBQUMsQ0FBQyxFQUMxRCxFQUFFLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyx5QkFBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyx5QkFBVyxDQUFDLENBQUMsQ0FBQyxFQUMxRCxLQUFLLEVBQ0wsSUFBSSxDQUNQLENBQUM7UUFDRixPQUFPO0lBQ1gsQ0FBQztJQWtDVSxTQUFTLENBQUMsQ0FBVTtRQUN2QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUNNLFNBQVMsQ0FBQyxRQUFnQixDQUFDLEVBQUUsYUFBc0IsS0FBSzs7UUFDM0QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWxDLElBQUksT0FBTyxHQUFXLEVBQUUsQ0FBQztRQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM5QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUN6QyxPQUFPLElBQUksR0FBRyxDQUFDO2dCQUNuQixDQUFDO3FCQUFNLENBQUM7b0JBQ0osTUFBTSxLQUFLLEdBQUcsZUFBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLElBQUksRUFBRSwwQ0FBRSxNQUFNLEVBQUUsbUNBQUksSUFBSSxDQUFDO29CQUM1QyxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLElBQUksRUFBRSxDQUFDO3dCQUNqQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDbkQsQ0FBQzt5QkFBTSxDQUFDO3dCQUNKLE9BQU8sSUFBSSxLQUFLLENBQUM7b0JBQ3JCLENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUM7WUFDRCxPQUFPLElBQUksSUFBSSxDQUFDO1FBQ3BCLENBQUM7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBQ00sTUFBTTtRQUNULE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWxDLElBQUksT0FBTyxHQUFhLEVBQUUsQ0FBQztRQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDOUIsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO1lBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO2dCQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQzlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLENBQUM7WUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBQ0QsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVuQyxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7UUFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzlCLElBQUksT0FBTyxHQUFhLEVBQUUsQ0FBQztZQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzlCLElBQUksT0FBTyxHQUFhLEVBQUUsQ0FBQztnQkFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xELENBQUM7Z0JBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEMsQ0FBQztZQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFDRCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRW5DLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLEtBQUssTUFBTSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUU5RCxPQUFPO1lBQ0gsRUFBRSxFQUFPLElBQUksQ0FBQyxPQUFPO1lBQ3JCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsS0FBSyxFQUFJLElBQUksQ0FBQyxLQUFLO1lBQ25CLElBQUksRUFBSyxJQUFJLENBQUMsSUFBSTtZQUNsQixJQUFJLEVBQUssSUFBSTtZQUNiLE1BQU0sRUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUMzQixNQUFNLEVBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDM0IsTUFBTSxFQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzNCLElBQUksRUFBSyxRQUFRO1lBQ2pCLElBQUksRUFBSyxRQUFRO1NBQ3BCO0lBQ0wsQ0FBQztJQUNNLE1BQU0sQ0FBQyxDQUFzQjtRQUNoQyxJQUFJLENBQUMsS0FBSyxTQUFTO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFakMsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFVLFNBQVM7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDdEQsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDdEQsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFLLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDcEQsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFRLFNBQVM7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFNLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFbkQsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFRLFNBQVMsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsS0FBSyxNQUFNLFFBQVEsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzVCLE1BQU0sT0FBTyxHQUFHLHFCQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztZQUN2QyxDQUFDO1FBQ0wsQ0FBQztRQUVELElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUM3RSxJQUFJLENBQUMsSUFBSSxHQUFJLElBQUksaUJBQU8sQ0FDcEIsSUFBSSxpQkFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3BCLElBQUksaUJBQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUNwRCxDQUFDO1lBQ04sSUFBSSxDQUFDLEtBQUssR0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLEtBQUssR0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMxQixDQUFDO1FBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFHbEMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBUXZCLE1BQU0sT0FBTyxHQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLE1BQU0sS0FBSyxHQUFHLGlCQUFJLEVBQUMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDN0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM3QixNQUFNLE9BQU8sR0FBYSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoRCxNQUFNLEtBQUssR0FBSSxpQkFBSSxFQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQzdCLE1BQU0sT0FBTyxHQUFhLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2hELE1BQU0sS0FBSyxHQUFJLGlCQUFJLEVBQUMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQzlDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDN0IsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLENBQUM7b0JBQ2hGLENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsTUFBTSxPQUFPLEdBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUMsTUFBTSxLQUFLLEdBQUcsaUJBQUksRUFBQyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM3QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzdCLE1BQU0sT0FBTyxHQUFhLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hELE1BQU0sS0FBSyxHQUFJLGlCQUFJLEVBQUMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDN0IsTUFBTSxPQUFPLEdBQWEsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDaEQsTUFBTSxLQUFLLEdBQUksaUJBQUksRUFBQyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDOUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUM3QixJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzs0QkFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7d0JBQy9CLENBQUM7NkJBQU0sQ0FBQzs0QkFDSixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQzt3QkFDaEMsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO1lBQ0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzFCLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ00sTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFrQjtRQUN2QyxNQUFNLGFBQWEsR0FBZ0IsRUFBRSxDQUFDO1FBQ3RDLEtBQUssSUFBSSxJQUFJLElBQUksUUFBUSxFQUFFLENBQUM7WUFDeEIsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsT0FBTyxhQUFhLENBQUM7SUFDekIsQ0FBQztJQUNNLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBMEI7UUFDL0MsTUFBTSxRQUFRLEdBQWEsRUFBRSxDQUFDO1FBQzlCLEtBQUssSUFBSSxTQUFTLElBQUksYUFBYSxFQUFFLENBQUM7WUFDbEMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxLQUFLOztRQUNSLEtBQUssQ0FBQyxZQUFZO2NBQ1osYUFBYSxHQUFHLENBQUMsVUFBSSxDQUFDLE9BQU8sbUNBQUksR0FBRyxDQUFDO2NBQ3JDLFdBQVcsR0FBSyxDQUFDLFVBQUksQ0FBQyxLQUFLLG1DQUFNLEdBQUcsQ0FBQztjQUNyQyxhQUFhLEdBQUcsQ0FBQyxVQUFJLENBQUMsT0FBTyxtQ0FBSSxHQUFHLENBQUM7Y0FDckMsYUFBYSxHQUFHLENBQUMsVUFBSSxDQUFDLE9BQU8sbUNBQUksR0FBRyxDQUFDO2NBQ3JDLFlBQVksR0FBSSxDQUFDLFVBQUksQ0FBQyxJQUFJLG1DQUFPLEdBQUcsQ0FBQztjQUNyQyxZQUFZLEdBQUksQ0FBQyxVQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxtQ0FBSSxHQUFHLENBQUM7Y0FDM0MsWUFBWSxHQUFJLENBQUMsVUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsbUNBQUksR0FBRyxDQUFDO2NBQzNDLFlBQVksR0FBSSxDQUFDLFVBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLG1DQUFJLEdBQUcsQ0FBQztjQUMzQyxJQUFJLENBQ1QsQ0FBQztJQUNOLENBQUM7SUFDTSxVQUFVLENBQUMsUUFBZ0IsQ0FBQzs7UUFDL0IsS0FBSyxDQUFDLFdBQVc7Y0FDWCxTQUFTLEdBQU8sQ0FBQyxVQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsbUNBQUssR0FBRyxDQUFDO2NBQ3JELElBQUksQ0FDVCxDQUFDO0lBQ04sQ0FBQztJQUNNLFVBQVUsQ0FBQyxRQUFnQixDQUFDOztRQUMvQixLQUFLLENBQUMsV0FBVztjQUNYLFNBQVMsR0FBTyxDQUFDLFVBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxtQ0FBSSxHQUFHLENBQUM7Y0FDckQsSUFBSSxDQUNULENBQUM7SUFDTixDQUFDO0NBQ0o7QUFscEJELHdCQWtwQkM7Ozs7Ozs7Ozs7O0FDL3NCWTs7O0FBR2Isb0ZBQXVDO0FBRXZDLHVGQUFpRTtBQVVqRSxNQUFhLFVBQVU7SUFJWixNQUFNLENBQUMsTUFBTSxDQUFDLENBQWdCO1FBQ2pDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2IsS0FBSyxtQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsS0FBSyxtQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsS0FBSyxtQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsS0FBSyxtQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsS0FBSyxtQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsS0FBSyxtQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsS0FBSyxtQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsS0FBSyxtQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsS0FBSyxtQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUNELE9BQU8sSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELFlBQXNCLENBQWdCOzs7UUFDbEMsT0FBQyxDQUFDLEdBQUcsb0NBQUwsQ0FBQyxDQUFDLEdBQUcsR0FBSyxFQUFFLEVBQUM7UUFDYixhQUFDLENBQUMsR0FBRyxFQUFDLE1BQU0sdUNBQU4sTUFBTSxHQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFDO1FBRXZDLElBQUksQ0FBQyxJQUFJLEdBQUssT0FBQyxDQUFDLElBQUksbUNBQUksbUJBQVEsQ0FBQyxLQUFLLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNNLE1BQU0sS0FBZ0IsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFDO0lBQ3pDLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLFNBQVM7O1FBQ1osT0FBTyxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsMENBQUUsTUFBTSxFQUFFLG1DQUFJLEdBQUcsQ0FBQztJQUMvQyxDQUFDO0lBQ00sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFjO1FBQ3BDLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBUSxDQUFDLEVBQUUsQ0FBQztZQUN0QyxJQUFJLE1BQU0sS0FBSyxHQUFHO2dCQUFFLE9BQU8sbUJBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBQ0QsT0FBTyxtQkFBUSxDQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRU0sTUFBTSxDQUFDLElBQVk7O1FBQ3RCLFVBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLDBDQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sTUFBTSxDQUFDLElBQVksRUFBRSxJQUFZOztRQUNwQyxVQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSwwQ0FBRSxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSxNQUFNO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDTSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQVcsRUFBRSxDQUFpQjtRQUM5QyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBYSxDQUFDO1FBQzNDLE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FDSjtBQXhERCxnQ0F3REM7QUFFRCxNQUFNLGVBQWdCLFNBQVEsVUFBVTtJQUNwQyxZQUFtQixDQUEyQjs7UUFDMUMsQ0FBQyxhQUFELENBQUMsY0FBRCxDQUFDLElBQUQsQ0FBQyxHQUFLLEVBQUMsSUFBSSxFQUFFLG1CQUFRLENBQUMsS0FBSyxFQUFDLEVBQUM7UUFDN0IsT0FBQyxDQUFDLEdBQUcsb0NBQUwsQ0FBQyxDQUFDLEdBQUcsR0FBSyxFQUFFLEVBQUM7UUFFYixDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQU8sRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFPO1lBQ2IsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRztZQUNyQixNQUFNLEVBQUcsR0FBRztZQUNaLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRztZQUNsQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3JELEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUU7U0FDdkI7UUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDYixDQUFDO0NBQ0o7QUFFRCxNQUFNLGVBQWdCLFNBQVEsVUFBVTtJQUNwQyxZQUFtQixDQUEyQjs7UUFDMUMsQ0FBQyxhQUFELENBQUMsY0FBRCxDQUFDLElBQUQsQ0FBQyxHQUFLLEVBQUMsSUFBSSxFQUFFLG1CQUFRLENBQUMsS0FBSyxFQUFDLEVBQUM7UUFDN0IsT0FBQyxDQUFDLEdBQUcsb0NBQUwsQ0FBQyxDQUFDLEdBQUcsR0FBSyxFQUFFLEVBQUM7UUFFYixDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQU8sRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFPO1lBQ2IsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRztZQUNyQixNQUFNLEVBQUcsR0FBRztZQUNaLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRztZQUNsQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3JELEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUU7U0FDbkI7UUFDTCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDYixDQUFDO0NBQ0o7QUFFRCxNQUFNLGVBQWdCLFNBQVEsVUFBVTtJQUNwQyxZQUFtQixDQUEyQjs7UUFDMUMsQ0FBQyxhQUFELENBQUMsY0FBRCxDQUFDLElBQUQsQ0FBQyxHQUFLLEVBQUMsSUFBSSxFQUFFLG1CQUFRLENBQUMsS0FBSyxFQUFDLEVBQUM7UUFDN0IsT0FBQyxDQUFDLEdBQUcsb0NBQUwsQ0FBQyxDQUFDLEdBQUcsR0FBSyxFQUFFLEVBQUM7UUFFYixDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQU8sRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFPO1lBQ2IsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRztZQUNyQixNQUFNLEVBQUcsR0FBRztZQUNaLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRztZQUNsQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3JELEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUU7U0FDbkI7UUFDTCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDYixDQUFDO0NBQ0o7QUFFRCxNQUFNLGVBQWdCLFNBQVEsVUFBVTtJQUNwQyxZQUFtQixDQUEyQjs7UUFDMUMsQ0FBQyxhQUFELENBQUMsY0FBRCxDQUFDLElBQUQsQ0FBQyxHQUFLLEVBQUMsSUFBSSxFQUFFLG1CQUFRLENBQUMsS0FBSyxFQUFDLEVBQUM7UUFDN0IsT0FBQyxDQUFDLEdBQUcsb0NBQUwsQ0FBQyxDQUFDLEdBQUcsR0FBSyxFQUFFLEVBQUM7UUFFYixDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQU8sRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFPO1lBQ2IsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRztZQUNyQixNQUFNLEVBQUcsR0FBRztZQUNaLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRztZQUNsQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzVELEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVM7U0FDckM7UUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDYixDQUFDO0NBQ0o7QUFFRCxNQUFNLGVBQWdCLFNBQVEsVUFBVTtJQUNwQyxZQUFtQixDQUEyQjs7UUFDMUMsQ0FBQyxhQUFELENBQUMsY0FBRCxDQUFDLElBQUQsQ0FBQyxHQUFLLEVBQUMsSUFBSSxFQUFFLG1CQUFRLENBQUMsS0FBSyxFQUFDLEVBQUM7UUFDN0IsT0FBQyxDQUFDLEdBQUcsb0NBQUwsQ0FBQyxDQUFDLEdBQUcsR0FBSyxFQUFFLEVBQUM7UUFFYixDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQU8sRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFPO1lBQ2IsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRztZQUNyQixNQUFNLEVBQUcsR0FBRztZQUNaLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRztZQUNsQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzVELEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVM7U0FDckM7UUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDYixDQUFDO0NBQ0o7QUFFRCxNQUFNLGVBQWdCLFNBQVEsVUFBVTtJQUNwQyxZQUFtQixDQUEyQjs7UUFDMUMsQ0FBQyxhQUFELENBQUMsY0FBRCxDQUFDLElBQUQsQ0FBQyxHQUFLLEVBQUMsSUFBSSxFQUFFLG1CQUFRLENBQUMsS0FBSyxFQUFDLEVBQUM7UUFDN0IsT0FBQyxDQUFDLEdBQUcsb0NBQUwsQ0FBQyxDQUFDLEdBQUcsR0FBSyxFQUFFLEVBQUM7UUFFYixDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQU8sRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFPO1lBQ2IsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRztZQUNyQixNQUFNLEVBQUcsR0FBRztZQUNaLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRztZQUNsQyxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ25FLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVM7U0FDckM7UUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDYixDQUFDO0NBQ0o7QUFFRCxNQUFNLGVBQWdCLFNBQVEsVUFBVTtJQUNwQyxZQUFtQixDQUEyQjs7UUFDMUMsQ0FBQyxhQUFELENBQUMsY0FBRCxDQUFDLElBQUQsQ0FBQyxHQUFLLEVBQUMsSUFBSSxFQUFFLG1CQUFRLENBQUMsS0FBSyxFQUFDLEVBQUM7UUFDN0IsT0FBQyxDQUFDLEdBQUcsb0NBQUwsQ0FBQyxDQUFDLEdBQUcsR0FBSyxFQUFFLEVBQUM7UUFFYixDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQU8sRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFPO1lBQ2IsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRztZQUNyQixNQUFNLEVBQUcsR0FBRztZQUNaLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRztZQUNsQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTO1lBQzVELEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVM7U0FDckM7UUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDYixDQUFDO0NBQ0o7QUFFRCxNQUFNLGVBQWdCLFNBQVEsVUFBVTtJQUNwQyxZQUFtQixDQUEyQjs7UUFDMUMsQ0FBQyxhQUFELENBQUMsY0FBRCxDQUFDLElBQUQsQ0FBQyxHQUFLLEVBQUMsSUFBSSxFQUFFLG1CQUFRLENBQUMsS0FBSyxFQUFDLEVBQUM7UUFDN0IsT0FBQyxDQUFDLEdBQUcsb0NBQUwsQ0FBQyxDQUFDLEdBQUcsR0FBSyxFQUFFLEVBQUM7UUFFYixDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQU8sRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFPO1lBQ2IsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRztZQUNyQixNQUFNLEVBQUcsR0FBRztZQUNaLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRztZQUNsQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzVELEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVM7U0FDckM7UUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDYixDQUFDO0NBQ0o7QUFFRCxNQUFNLGVBQWdCLFNBQVEsVUFBVTtJQUNwQyxZQUFtQixDQUEyQjs7UUFDMUMsQ0FBQyxhQUFELENBQUMsY0FBRCxDQUFDLElBQUQsQ0FBQyxHQUFLLEVBQUMsSUFBSSxFQUFFLG1CQUFRLENBQUMsS0FBSyxFQUFDLEVBQUM7UUFDN0IsT0FBQyxDQUFDLEdBQUcsb0NBQUwsQ0FBQyxDQUFDLEdBQUcsR0FBSyxFQUFFLEVBQUM7UUFFYixDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQU8sRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFPO1lBQ2IsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRztZQUNyQixNQUFNLEVBQUcsR0FBRztZQUNaLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRztZQUNsQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTO1lBQ25FLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVM7U0FDckM7UUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDYixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7O0FDek9ZOzs7QUFnQmIsa0RBY0M7QUFkRCxTQUFnQixtQkFBbUIsQ0FBQyxDQUFpQjs7SUFDakQsSUFBSSxDQUFDLEtBQUssU0FBUztRQUFFLE9BQU87SUFFNUIsS0FBSyxDQUFDLGdCQUFnQjtVQUNoQixXQUFXLEdBQVMsQ0FBQyxPQUFDLENBQUMsSUFBSSxtQ0FBUyxHQUFHLENBQUM7VUFDeEMsWUFBWSxHQUFRLENBQUMsT0FBQyxDQUFDLE1BQU0sbUNBQU8sR0FBRyxDQUFDO1VBQ3hDLFFBQVEsR0FBWSxDQUFDLE9BQUMsQ0FBQyxFQUFFLG1DQUFXLEdBQUcsQ0FBQztVQUN4QyxZQUFZLEdBQVEsQ0FBQyxPQUFDLENBQUMsTUFBTSxtQ0FBTyxHQUFHLENBQUM7VUFDeEMsWUFBWSxHQUFRLENBQUMsT0FBQyxDQUFDLE1BQU0sbUNBQU8sR0FBRyxDQUFDO1VBQ3hDLFlBQVksR0FBUSxDQUFDLE9BQUMsQ0FBQyxNQUFNLG1DQUFPLEdBQUcsQ0FBQztVQUN4QyxpQkFBaUIsR0FBRyxDQUFDLE9BQUMsQ0FBQyxRQUFRLG1DQUFLLEdBQUcsQ0FBQztVQUN4QyxlQUFlLEdBQUssQ0FBQyxPQUFDLENBQUMsU0FBUyxtQ0FBSSxHQUFHLENBQUM7VUFDeEMsSUFBSSxDQUNULENBQUM7QUFDTixDQUFDO0FBRUQsTUFBYSxVQUFVO0lBU1osTUFBTSxDQUFDLFdBQVc7UUFDckIsTUFBTSxRQUFRLEdBQWlCLEVBQUUsQ0FBQztRQUNsQyxRQUFRLENBQUMsSUFBSSxDQUNULElBQUksVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ3BCLElBQUksRUFBSyxTQUFTO1lBQ2xCLE1BQU0sRUFBRyxLQUFLO1lBQ2QsRUFBRSxFQUFRLENBQUM7WUFDWCxNQUFNLEVBQUcsRUFBRTtZQUNYLE1BQU0sRUFBRyxFQUFFO1lBQ1gsTUFBTSxFQUFJLENBQUM7WUFDWCxRQUFRLEVBQUksQ0FBQztZQUNiLFNBQVMsRUFBSSxDQUFDO1NBQ2pCLENBQUMsQ0FDTCxDQUFDO1FBQ0YsUUFBUSxDQUFDLElBQUksQ0FDVCxJQUFJLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNwQixJQUFJLEVBQUssU0FBUztZQUNsQixNQUFNLEVBQUcsUUFBUTtZQUNqQixFQUFFLEVBQVEsQ0FBQztZQUNYLE1BQU0sRUFBRyxFQUFFO1lBQ1gsTUFBTSxFQUFHLEVBQUU7WUFDWCxNQUFNLEVBQUksQ0FBQztZQUNYLFFBQVEsRUFBSSxDQUFDO1lBQ2IsU0FBUyxFQUFJLENBQUM7U0FDakIsQ0FBQyxDQUNMLENBQUM7UUFDRixRQUFRLENBQUMsSUFBSSxDQUNULElBQUksVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ3BCLElBQUksRUFBSyxTQUFTO1lBQ2xCLE1BQU0sRUFBRyxRQUFRO1lBQ2pCLEVBQUUsRUFBUSxDQUFDO1lBQ1gsTUFBTSxFQUFHLEVBQUU7WUFDWCxNQUFNLEVBQUcsRUFBRTtZQUNYLE1BQU0sRUFBSSxDQUFDO1lBQ1gsUUFBUSxFQUFJLENBQUM7WUFDYixTQUFTLEVBQUksQ0FBQztTQUNqQixDQUFDLENBQ0w7UUFDRCxRQUFRLENBQUMsSUFBSSxDQUNULElBQUksVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ3BCLElBQUksRUFBSyxTQUFTO1lBQ2xCLE1BQU0sRUFBRyxTQUFTO1lBQ2xCLEVBQUUsRUFBUSxDQUFDO1lBQ1gsTUFBTSxFQUFHLEVBQUU7WUFDWCxNQUFNLEVBQUcsRUFBRTtZQUNYLE1BQU0sRUFBRyxFQUFFO1lBQ1gsUUFBUSxFQUFJLENBQUM7WUFDYixTQUFTLEVBQUksQ0FBQztTQUNqQixDQUFDLENBQ0w7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBQ0QsWUFBb0IsQ0FBaUI7UUE3RDlCLFNBQUksR0FBZ0IsRUFBRSxDQUFDO1FBQ3ZCLFdBQU0sR0FBYyxFQUFFLENBQUM7UUFDdkIsT0FBRSxHQUFrQixDQUFDLENBQUM7UUFDdEIsV0FBTSxHQUFjLENBQUMsQ0FBQztRQUN0QixXQUFNLEdBQWMsQ0FBQyxDQUFDO1FBQ3RCLFdBQU0sR0FBYyxDQUFDLENBQUM7UUFDdEIsYUFBUSxHQUFZLENBQUMsQ0FBQztRQUN0QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBdUR6QixJQUFJLENBQUMsS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ00sTUFBTTtRQUNULE9BQU87WUFDSCxJQUFJLEVBQU8sSUFBSSxDQUFDLElBQUk7WUFDcEIsTUFBTSxFQUFLLElBQUksQ0FBQyxNQUFNO1lBQ3RCLEVBQUUsRUFBUyxJQUFJLENBQUMsRUFBRTtZQUNsQixNQUFNLEVBQUssSUFBSSxDQUFDLE1BQU07WUFDdEIsTUFBTSxFQUFLLElBQUksQ0FBQyxNQUFNO1lBQ3RCLE1BQU0sRUFBSyxJQUFJLENBQUMsTUFBTTtZQUN0QixRQUFRLEVBQUcsSUFBSSxDQUFDLFFBQVE7WUFDeEIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzVCO0lBQ0wsQ0FBQztJQUNNLE1BQU0sQ0FBQyxDQUFpQjtRQUMzQixJQUFJLENBQUMsS0FBSyxTQUFTO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFakMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFVLFNBQVM7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFRLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdkQsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFRLFNBQVM7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDekQsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFZLFNBQVM7WUFBRSxJQUFJLENBQUMsRUFBRSxHQUFVLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFRLFNBQVM7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDekQsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFRLFNBQVM7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDekQsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFRLFNBQVM7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDekQsSUFBSSxDQUFDLENBQUMsUUFBUSxLQUFNLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDM0QsSUFBSSxDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFNUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLEtBQUs7O1FBQ1IsS0FBSyxDQUFDLGdCQUFnQjtjQUNoQixXQUFXLEdBQVMsQ0FBQyxVQUFJLENBQUMsSUFBSSxtQ0FBUyxHQUFHLENBQUM7Y0FDM0MsWUFBWSxHQUFRLENBQUMsVUFBSSxDQUFDLE1BQU0sbUNBQU8sR0FBRyxDQUFDO2NBQzNDLFFBQVEsR0FBWSxDQUFDLFVBQUksQ0FBQyxFQUFFLG1DQUFXLEdBQUcsQ0FBQztjQUMzQyxZQUFZLEdBQVEsQ0FBQyxVQUFJLENBQUMsTUFBTSxtQ0FBTyxHQUFHLENBQUM7Y0FDM0MsWUFBWSxHQUFRLENBQUMsVUFBSSxDQUFDLE1BQU0sbUNBQU8sR0FBRyxDQUFDO2NBQzNDLFlBQVksR0FBUSxDQUFDLFVBQUksQ0FBQyxNQUFNLG1DQUFPLEdBQUcsQ0FBQztjQUMzQyxpQkFBaUIsR0FBRyxDQUFDLFVBQUksQ0FBQyxRQUFRLG1DQUFLLEdBQUcsQ0FBQztjQUMzQyxlQUFlLEdBQUssQ0FBQyxVQUFJLENBQUMsU0FBUyxtQ0FBSSxHQUFHLENBQUM7Y0FDM0MsSUFBSSxDQUNULENBQUM7SUFDTixDQUFDO0NBQ0o7QUF6R0QsZ0NBeUdDOzs7Ozs7Ozs7OztBQ3pJWTs7O0FBR2IsMEZBQXlEO0FBRXpELHFGQUE0RDtBQUM1RCxtR0FJeUI7QUFtQnpCLE1BQWEsU0FBUztJQVFYLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBMEI7O1FBQzNDLENBQUMsYUFBRCxDQUFDLGNBQUQsQ0FBQyxJQUFELENBQUMsR0FBSyxFQUFFLEVBQUM7UUFDVCxPQUFDLENBQUMsTUFBTSxvQ0FBUixDQUFDLENBQUMsTUFBTSxHQUFLLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFDO1FBQ3hDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2YsS0FBSyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsQ0FBQztRQUNELE9BQU8sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNNLE1BQU0sQ0FBQyxDQUEwQjtRQUNwQyxPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELFlBQXNCLENBQTBCO1FBbkJ0QyxXQUFNLEdBQWMsV0FBVyxDQUFDO1FBb0J0QyxJQUFJLENBQUMsT0FBTyxHQUFNLFVBQVUsR0FBRyxzQkFBUyxHQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBUSxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztRQUM5QyxJQUFJLENBQUMsR0FBRyxHQUFXLElBQUksdUJBQVUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxPQUFPLEdBQU8sU0FBUyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQU8sSUFBSSxDQUFDO1FBRXhCLElBQUksQ0FBQyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTyxNQUFNLENBQUMsQ0FBeUI7O1FBQ3BDLElBQUksQ0FBQyxLQUFLLFNBQVM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUVqQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUN4RCxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQU0sU0FBUztZQUFFLElBQUksQ0FBQyxNQUFNLEdBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUN2RCxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQVMsU0FBUztZQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQVEsU0FBUyxFQUFFLENBQUM7WUFDMUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ2pDLFVBQUksQ0FBQyxPQUFPLG9DQUFaLElBQUksQ0FBQyxPQUFPLEdBQUssNkJBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDO1lBQ2xELENBQUM7O2dCQUFNLElBQUksQ0FBQyxPQUFPLEdBQUksU0FBUyxDQUFDO1FBQ3JDLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzdFLE9BQU8sSUFBSSxDQUFDO0lBQ3BCLENBQUM7SUFFVSxHQUFHLEtBQVksT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFDO0lBRW5DLElBQUksS0FBNkIsT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFDO0lBQ3JELE9BQU8sQ0FBQyxJQUE2QixJQUFTLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFDO0lBRWxFLFVBQVUsS0FBYSxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUM7SUFDM0MsVUFBVSxDQUFDLEdBQVksSUFBWSxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFDO0lBRTdELE1BQU07UUFDVCxPQUFPLElBQUksdUJBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNNLE1BQU0sQ0FBQyxDQUFhO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFDTSxNQUFNLENBQUMsQ0FBVTtRQUNwQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSxNQUFNOztRQUNULE9BQU87WUFDSCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsTUFBTSxFQUFHLElBQUksQ0FBQyxNQUFNO1lBQ3BCLEdBQUcsRUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUMxQixJQUFJLEVBQUssZ0JBQUksQ0FBQyxPQUFPLDBDQUFFLE1BQU0sRUFBRSxtQ0FBSSxFQUFFO1lBQ3JDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUc7U0FDcEM7SUFDTCxDQUFDO0lBRU0sTUFBTSxDQUFDLENBQTBCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ00sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUEwQjtRQUMzQyxPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUNKO0FBL0VELDhCQStFQzs7Ozs7Ozs7Ozs7QUM1R1k7OztBQWlEYixNQUFhLGFBQWE7SUFFZixNQUFNLENBQUMsYUFBYSxLQUF3QyxPQUFPLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxLQUFLLEdBQUM7SUFDL0UsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFnQyxJQUFTLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFDO0lBR2pGLE1BQU0sQ0FBQyxhQUFhLEtBQXdDLE9BQU8sSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLEtBQUssR0FBQztJQUMvRSxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQWdDLElBQVMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUM7SUFFakYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUE4Qjs7UUFDL0MsQ0FBQyxhQUFELENBQUMsY0FBRCxDQUFDLElBQUQsQ0FBQyxHQUFLLEVBQUUsRUFBQztRQUNULE9BQUMsQ0FBQyxNQUFNLG9DQUFSLENBQUMsQ0FBQyxNQUFNLEdBQUssYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUM7UUFDNUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZixLQUFLLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUssT0FBTyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxDQUFDO1FBQ0QsT0FBTyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ00sTUFBTSxDQUFDLENBQThCO1FBQ3hDLE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBc0JELFlBQXNCLENBQThCO1FBbkI1QyxXQUFNLEdBQWMsZUFBZSxDQUFDO1FBb0J4QyxJQUFJLENBQUMsTUFBTSxHQUFRLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBRXpDLElBQUksQ0FBQyxRQUFRLEdBQU0sQ0FBQyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBSyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLFFBQVEsR0FBTSxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBTSxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBTSxHQUFHLENBQUM7UUFFdkIsSUFBSSxDQUFDLE9BQU8sR0FBTyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLFFBQVEsR0FBSyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBSyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBSyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBSyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBSyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBSyxTQUFTLENBQUM7UUFFNUIsSUFBSSxDQUFDLFFBQVEsR0FBSyxTQUFTLENBQUM7UUFFNUIsSUFBSSxDQUFDLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNPLE1BQU0sQ0FBQyxDQUE2QjtRQUN4QyxJQUFJLENBQUMsS0FBSyxTQUFTO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFakMsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFNLFNBQVM7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDdkQsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdEQsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFNLFNBQVM7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdEQsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdEQsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdEQsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFRLFNBQVM7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFLLENBQUMsQ0FBQyxJQUFJLEtBQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNsRixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDLEtBQUssS0FBTSxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDLEtBQUssS0FBTSxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDLEtBQUssS0FBTSxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDLEtBQUssS0FBTSxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDLEtBQUssS0FBTSxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDLEtBQUssS0FBTSxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDLEtBQUssS0FBTSxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUVqRixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sS0FBSyxLQUFZLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDO0lBQ3ZDLFNBQVMsQ0FBQyxLQUFhLElBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUM7SUFFaEQsTUFBTSxLQUFrQixPQUFPLElBQUksQ0FBQyxTQUFTLEdBQUM7SUFDOUMsVUFBVSxDQUFDLE1BQW1CLElBQWdCLE9BQU8sSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLEdBQUM7SUFFN0UsT0FBTyxLQUFhLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBQztJQUFBLENBQUM7SUFDekMsT0FBTyxDQUFDLFFBQWlCLElBQVksT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsR0FBQztJQUFBLENBQUM7SUFFckUsS0FBSyxLQUFhLE9BQU8sSUFBSSxDQUFDLFFBQVEsR0FBQztJQUN2QyxLQUFLLEtBQWEsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFDO0lBQ3ZDLEtBQUssS0FBYSxPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUM7SUFDdkMsU0FBUyxDQUFDLEtBQWEsSUFBVyxPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFDO0lBQ3BILFNBQVMsQ0FBQyxLQUFhLElBQVcsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBQztJQUNwSCxTQUFTLENBQUMsS0FBYSxJQUFXLE9BQU8sSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUM7SUFFL0QsS0FBSyxLQUFpQixPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUM7SUFDM0MsS0FBSyxLQUFpQixPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUM7SUFDM0MsS0FBSyxLQUFpQixPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUM7SUFDM0MsS0FBSyxLQUFpQixPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUM7SUFDM0MsS0FBSyxLQUFpQixPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUM7SUFDM0MsS0FBSyxLQUFpQixPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUM7SUFDM0MsU0FBUyxDQUFDLEtBQWtCLElBQWdCLE9BQU8sSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUM7SUFDekUsU0FBUyxDQUFDLEtBQWtCLElBQWdCLE9BQU8sSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUM7SUFDekUsU0FBUyxDQUFDLEtBQWtCLElBQWdCLE9BQU8sSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUM7SUFDekUsU0FBUyxDQUFDLEtBQWtCLElBQWdCLE9BQU8sSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUM7SUFDekUsU0FBUyxDQUFDLEtBQWtCLElBQWdCLE9BQU8sSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUM7SUFDekUsU0FBUyxDQUFDLEtBQWtCLElBQWdCLE9BQU8sSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUM7SUFFekUsS0FBSyxLQUFpQixPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUM7SUFDM0MsU0FBUyxDQUFDLEtBQWtCLElBQWdCLE9BQU8sSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUM7SUFFekUsTUFBTSxDQUFDLElBQVk7O1FBQ3RCLFdBQVcsQ0FBQyxJQUFJLEVBQUUsVUFBSSxDQUFDLEtBQUssRUFBRSxtQ0FBSSxTQUFTLEVBQUUsVUFBSSxDQUFDLEtBQUssRUFBRSxtQ0FBSSxTQUFTLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRU0sTUFBTSxDQUFDLElBQVksRUFBRSxJQUFZO1FBQ3BDLElBQUksQ0FBQyxlQUFlLENBQU8sSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxlQUFlLENBQU8sSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQVEsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFD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Q0FBQztJQUUxRSxNQUFNLFVBQVUsR0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUMxRSxNQUFNLFVBQVUsR0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUkxRSxNQUFNLFlBQVksR0FBRyxFQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUM7SUFDdkYsTUFBTSxZQUFZLEdBQUcsRUFBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFDO0lBQ3ZGLE1BQU0sWUFBWSxHQUFHLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBQztJQUN2RixNQUFNLFlBQVksR0FBRyxFQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUM7SUFFdkYsTUFBTSxZQUFZLEdBQUcsRUFBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFDO0lBQ3ZGLE1BQU0sWUFBWSxHQUFHLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBQztJQUN2RixNQUFNLFlBQVksR0FBRyxFQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBRSxD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QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFBQSxNQUFLO1lBQzNFLEtBQUssd0JBQVcsQ0FBQyxDQUFDO2dCQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFBQSxNQUFNO1lBQzVFLEtBQUssd0JBQVcsQ0FBQyxDQUFDO2dCQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFBQSxNQUFNO1lBQzVFLEtBQUssd0JBQVcsQ0FBQyxDQUFDO2dCQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxF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LENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUMxRCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQzFELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUMxRCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQzFELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxhQUFELENB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QUFNLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxRCxNQUFNLEdBQUcsR0FBRyxxQkFBUyxDQUFDLE1BQU0sQ0FBQztZQUN6QixHQUFHLEVBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDO1lBQzVCLElBQUksRUFBRTtnQkFDRixLQUFLLEVBQUksQ0FBQztnQkFDVixNQUFNLEVBQUUsR0FBRzthQUNkO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsY0FBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0FBQ0wsQ0FBQzs7Ozs7OztVQ3hMRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7QUNsQkEsNEdBQTBEO0FBRTFELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtJQUN4QywyQ0FBcUIsR0FBRSxDQUFDO0FBQzVCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2RfY21uL0NfQWxlcnRMb2cudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2RfY21uL0NfRGlhbG9nLnRzIiwid2VicGFjazovL21haS8uL3NyYy9kX2Ntbi9GX1BPU1QudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2RfY21uL0ZfbG9hZF9hbmRfc2F2ZS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvZF9jbW4vZ2xvYmFsLnRzIiwid2VicGFjazovL21haS8uL3NyYy9kX2N0bC9DX0N0bEN1cnNvci50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvZF9jdGwvQ19Pbk9mZkJ1dHRvbi50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvZF9tZGwvQ19HdWlsZC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvZF9tZGwvQ19IZXJvLnRzIiwid2VicGFjazovL21haS8uL3NyYy9kX21kbC9DX0hlcm9BYmlsaXR5LnRzIiwid2VicGFjazovL21haS8uL3NyYy9kX21kbC9DX0xvY2F0aW9uLnRzIiwid2VicGFjazovL21haS8uL3NyYy9kX21kbC9DX01hemUudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2RfbWRsL0NfTWF6ZUNlbGwudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2RfbWRsL0NfTWF6ZUluZm8udHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2RfbWRsL0NfTWF6ZU9iai50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvZF9tZGwvQ19NYXplT2JqVmlldy50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvZF9tZGwvQ19Nb3ZhYmxlUG9pbnQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2RfbWRsL0NfUG9pbnQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2RfbWRsL0NfUG9pbnREaXIudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2RfbWRsL0NfUG9pbnRTZXQyRC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvZF9tZGwvQ19SYW5nZS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvZF9tZGwvQ19TYXZlRGF0YS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvZF9tZGwvQ19TYXZlSW5mby50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvZF9tZGwvQ19UZWFtLnRzIiwid2VicGFjazovL21haS8uL3NyYy9kX21kbC9DX1RlYW1WaWV3LnRzIiwid2VicGFjazovL21haS8uL3NyYy9kX21kbC9DX1dhbGtlci50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvZF9tZGwvQ19XYWxsLnRzIiwid2VicGFjazovL21haS8uL3NyYy9kX21kbC9UX0RpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvZF9tZGwvVF9NektpbmQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2RfdXRsL0NfVXJsT3B0LnRzIiwid2VicGFjazovL21haS8uL3NyYy9kX3V0bC9GX01hdGgudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2RfdXRsL0ZfUmFuZC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvZF92aWUvQ19EaXNwbGF5TWVzc2FnZS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvZF92aWUvQ19PbmVMaW5lVmlld01lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL21haV9tYXplL0NfRGVmYXVsdEN0bHMudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL21haV9tYXplL0NfU3dpdGNoVmlldy50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvbWFpX21hemUvRl9kaXNwbGF5X21hemUyRC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvbWFpX21hemUvRl9kaXNwbGF5X21hemUzRC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvbWFpX21hemUvRl9kaXNwbGF5X21hemVDaC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvbWFpX21hemUvRl9zZXRfVURfbW9kZS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvbWFpX21hemUvRl9zZXRfbWVudV9tb2RlLnRzIiwid2VicGFjazovL21haS8uL3NyYy9tYWlfbWF6ZS9GX3NldF9tb2RlLnRzIiwid2VicGFjazovL21haS8uL3NyYy9tYWlfbWF6ZS9GX3NldF9tb3ZlX21vZGUudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL21haV9tYXplL0Zfc2V0X212cHRfbW9kZS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvbWFpX21hemUvRl9zZXRfc2F2ZV9tb2RlLnRzIiwid2VicGFjazovL21haS8uL3NyYy9tYWlfbWF6ZS9nbG9iYWxfZm9yX21hemUudHMiLCJ3ZWJwYWNrOi8vbWFpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21haS8uL3NyYy9tYWlfbWF6ZS9tYWlfbWF6ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZ2V0X3V1aWQgfSBmcm9tIFwiLi4vZF91dGwvRl9SYW5kXCI7XHJcbmltcG9ydCB7IENfRGlhbG9nIH0gIGZyb20gXCIuL0NfRGlhbG9nXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENfQWxlcnRMb2cgZXh0ZW5kcyBDX0RpYWxvZyB7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIG1lOiB7W2lkOiBzdHJpbmddOiBDX0FsZXJ0TG9nfTtcclxuICAgIHB1YmxpYyAgICBzdGF0aWMgZ2V0T2JqKHRhcmdldD86IEhUTUxEaWFsb2dFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5tZSA/Pz0ge307XHJcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRhcmdldCAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpIGFzIEhUTUxEaWFsb2dFbGVtZW50O1xyXG4gICAgICAgICAgICB0YXJnZXQuaWQgPSAnZGlhbG9nXycgKyBfZ2V0X3V1aWQoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YXJnZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVbdGFyZ2V0LmlkXSA/Pz0gbmV3IENfQWxlcnRMb2codGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgbXNnOiB7W3R0bDogc3RyaW5nXTogc3RyaW5nW119O1xyXG5cclxuICAgIHByb3RlY3RlZCBwYW5lOiBIVE1MRGl2RWxlbWVudHx1bmRlZmluZWQ7XHJcbiAgICBwcm90ZWN0ZWQgbG9nczogSFRNTERpdkVsZW1lbnR8dW5kZWZpbmVkO1xyXG4gICAgcHJvdGVjdGVkIGJ0bnM6IEhUTUxEaXZFbGVtZW50fHVuZGVmaW5lZDtcclxuICAgIHByb3RlY3RlZCB1cGQ6ICBIVE1MQnV0dG9uRWxlbWVudHx1bmRlZmluZWQ7XHJcbiAgICBwcm90ZWN0ZWQgY2xyOiAgSFRNTEJ1dHRvbkVsZW1lbnR8dW5kZWZpbmVkO1xyXG4gICAgcHJvdGVjdGVkIGNsczogIEhUTUxCdXR0b25FbGVtZW50fHVuZGVmaW5lZDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IodGFyZ2V0OiBIVE1MRGlhbG9nRWxlbWVudCkge1xyXG4gICAgICAgIHN1cGVyKHRhcmdldCk7XHJcbiAgICAgICAgdGhpcy5tc2cgPSB7fTtcclxuXHJcbiAgICAgICAgdGhpcy5fX2NsZWFyRGlhbG9nKCk7XHJcbiAgICAgICAgdGhpcy5fX21ha2VEaWFsb2coKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2NsZWFyRGlhbG9nKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGN0eCA9IHN1cGVyLmdldFdpbmRvdygpO1xyXG4gICAgICAgIHdoaWxlIChjdHguZmlyc3RDaGlsZCkgY3R4LnJlbW92ZUNoaWxkKGN0eC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX21ha2VEaWFsb2coKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY3R4ID0gc3VwZXIuZ2V0V2luZG93KCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5wYW5lID0gdGhpcy5fX21ha2VXaW5kb3cgKCdwYW5lJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxvZ3MgPSB0aGlzLl9fbWFrZVBhbmVsICgnbG9ncycsICAgdGhpcy5wYW5lKTtcclxuICAgICAgICAgICAgdGhpcy5idG5zID0gdGhpcy5fX21ha2VQYW5lbCAoJ2J0bnMnLCAgIHRoaXMucGFuZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZCAgPSB0aGlzLl9fbWFrZUJ1dHRvbigndXBkYXRlJywgJ+abtOaWsCcsICAgdGhpcy5idG5zKTtcclxuICAgICAgICAgICAgdGhpcy5jbHIgID0gdGhpcy5fX21ha2VCdXR0b24oJ2NsZWFyJywgICfmtojljrsnLCAgIHRoaXMuYnRucyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xzICA9IHRoaXMuX19tYWtlQnV0dG9uKCdjbG9zZScsICAn6ZaJ44GY44KLJywgdGhpcy5idG5zKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9Pnt0aGlzLnVwZGF0ZSgpfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmNsci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57dGhpcy5jbGVhciAoKX0sIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5jbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e3RoaXMuaGlkZSAgKCl9LCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxvZ3Muc3R5bGUuc2V0UHJvcGVydHkoJ3VzZXItc2VsZWN0JywgJ3RleHQnKTtcclxuICAgICAgICAgICAgdGhpcy5sb2dzLnN0eWxlLnNldFByb3BlcnR5KCdtYXgtd2lkdGgnLCAgICc5MGR2dycpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ3Muc3R5bGUuc2V0UHJvcGVydHkoJ21pbi1oZWlnaHQnLCAgJzMuMHJlbScpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ3Muc3R5bGUuc2V0UHJvcGVydHkoJ21heC1oZWlnaHQnLCAgJzgwZHZoJyk7XHJcbiAgICAgICAgICAgIHRoaXMubG9ncy5zdHlsZS5zZXRQcm9wZXJ0eSgnb3ZlcmZsb3cteCcsICAnYXV0bycpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ3Muc3R5bGUuc2V0UHJvcGVydHkoJ292ZXJmbG93LXknLCAgJ2F1dG8nKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRab29tRWxtKHRoaXMubG9ncyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9fbWFrZVdpbmRvdyhpZDogc3RyaW5nKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGRpdiAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBkaXYuaWQgICAgID0gYCR7dGhpcy5pZH1fJHtpZH1gO1xyXG4gICAgICAgIHRoaXMuc2V0V2luZG93KGRpdik7XHJcbiAgICAgICAgcmV0dXJuIGRpdjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX21ha2VQYW5lbChpZDogc3RyaW5nLCBwYXJlbnQ6IEhUTUxFbGVtZW50KTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGRpdiAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBkaXYuaWQgICAgID0gYCR7dGhpcy5pZH1fJHtpZH1gO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIHJldHVybiBkaXY7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX19tYWtlQnV0dG9uKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgcGFyZW50OiBIVE1MRWxlbWVudCk6IEhUTUxCdXR0b25FbGVtZW50IHtcclxuICAgICAgICBjb25zdCBidG4gID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgYnRuLmlkICAgICAgICAgPSBgJHt0aGlzLmlkfV8ke2lkfWA7XHJcbiAgICAgICAgYnRuLmlubmVySFRNTCAgPSBuYW1lO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgICAgIHJldHVybiBidG47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldF9tZXNzYWdlKHR0bDogc3RyaW5nLCBtc2c6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgICh0aGlzLm1zZ1t0dGxdID8/PSBbXSkucHVzaChtc2cpO1xyXG4gICAgICAgIHRoaXMuX19kb21fdXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNscl9tZXNzYWdlKHR0bD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0dGwgIT09IHVuZGVmaW5lZCkge3RoaXMubXNnW3R0bF0gPSBbXTtyZXR1cm47fVxyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gdGhpcy5tc2cpIHRoaXMubXNnW2lpXSA9IFtdO1xyXG4gICAgICAgIHRoaXMuX19kb21fY2xlYXIoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHt0aGlzLl9fZG9tX3VwZGF0ZSgpfVxyXG4gICAgcHJvdGVjdGVkIF9fZG9tX3VwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9fZG9tX2NsZWFyKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCB0aXRsZSBpbiB0aGlzLm1zZykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBtc2cgb2YgdGhpcy5tc2dbdGl0bGVdKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JykgYXMgSFRNTEZpZWxkU2V0RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpICAgYXMgSFRNTExlZ2VuZEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBsZy5pbm5lckhUTUwgPSBgJHt0aXRsZX0gKCR7RGF0ZS5ub3coKS50b1N0cmluZygpfSlgO1xyXG4gICAgICAgICAgICAgICAgZnMuYXBwZW5kQ2hpbGQobGcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJykgICAgICBhcyBIVE1MUHJlRWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGZzLmFwcGVuZENoaWxkKHByKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpICAgIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgcGcuaW5uZXJIVE1MID0gbXNnO1xyXG4gICAgICAgICAgICAgICAgcHIuYXBwZW5kQ2hpbGQocGcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubG9ncz8uYXBwZW5kQ2hpbGQoZnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHt0aGlzLmNscl9tZXNzYWdlKCl9XHJcbiAgICBwcm90ZWN0ZWQgX19kb21fY2xlYXIoKTogdm9pZCB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMubG9ncz8uZmlyc3RDaGlsZCkgdGhpcy5sb2dzLnJlbW92ZUNoaWxkKHRoaXMubG9ncy5maXJzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvdygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRyeSB7c3VwZXIuc2hvdygpO30gY2F0Y2ggKGVycikge31cclxuICAgIH1cclxuICAgIHB1YmxpYyBoaWRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRyeSB7c3VwZXIuaGlkZSgpO30gY2F0Y2ggKGVycikge31cclxuICAgIH1cclxuICAgIHB1YmxpYyBkaXNwbGF5KHluOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgeW4/dGhpcy5zaG93KCk6dGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IF9nZXROdW0gfSBmcm9tIFwiLi4vZF91dGwvRl9NYXRoXCI7XHJcbmltcG9ydCB7IF9nZXRfdXVpZCB9IGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxudHlwZSB4eSA9IHt4OiBudW1iZXIsIHk6IG51bWJlcn07XHJcblxyXG5leHBvcnQgY2xhc3MgQ19EaWFsb2cge1xyXG4gICAgcHJvdGVjdGVkIGlkOiAgc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSAgIF9fZGlhOiBIVE1MRGlhbG9nRWxlbWVudDtcclxuICAgIHByaXZhdGUgICBfX3BhbjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlICAgX19jdHg6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSAgIF9fbW9wOiB4eSA9IHt4OjAsIHk6MH07XHJcbiAgICBwcml2YXRlICAgX19yc3o6IHtbaWQ6IHN0cmluZ106IHJlc2l6ZURvbX07XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHRhcmdldD86IEhUTUxEaWFsb2dFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpIGFzIEhUTUxEaWFsb2dFbGVtZW50O1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRhcmdldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0YXJnZXQuaWQgPT09IHVuZGVmaW5lZCB8fCB0YXJnZXQuaWQgPT09ICcnKSB0YXJnZXQuaWQgPSAnZGlhbG9nXycgKyBfZ2V0X3V1aWQoKTtcclxuICAgICAgICB0aGlzLmlkID0gdGFyZ2V0LmlkO1xyXG5cclxuICAgICAgICB0YXJnZXQuc3R5bGUubWFyZ2luICA9ICcwJztcclxuICAgICAgICB0YXJnZXQuc3R5bGUucGFkZGluZyA9ICcwJztcclxuICAgICAgICB0aGlzLl9fZGlhID0gdGFyZ2V0O1xyXG5cclxuICAgICAgICB0aGlzLl9fcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5fX3NldF9kaWFsb2dfc3R5bGUoKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuX19jdHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLl9fY3R4LnN0eWxlLmdyaWRBcmVhID0gJ21tJztcclxuICAgICAgICB0aGlzLl9fcGFuLmFwcGVuZENoaWxkKHRoaXMuX19jdHgpO1xyXG5cclxuICAgICAgICB0aGlzLl9fcnN6ID0ge307XHJcblxyXG4gICAgICAgIHRoaXMuX19zZXRfYmFyX3N0eWxlKCd0bScpO1xyXG4gICAgICAgIHRoaXMuX19zZXRfYmFyX3N0eWxlKCdtbCcpO1xyXG4gICAgICAgIHRoaXMuX19zZXRfYmFyX3N0eWxlKCdtcicpO1xyXG4gICAgICAgIHRoaXMuX19zZXRfYmFyX3N0eWxlKCdibScpO1xyXG5cclxuICAgICAgICB0aGlzLl9fc2V0X2Nvcm5lcl9zdHlsZSgndGwnKTtcclxuICAgICAgICB0aGlzLl9fc2V0X2Nvcm5lcl9zdHlsZSgndHInKTtcclxuICAgICAgICB0aGlzLl9fc2V0X2Nvcm5lcl9zdHlsZSgnYmwnKTtcclxuICAgICAgICB0aGlzLl9fc2V0X2Nvcm5lcl9zdHlsZSgnYnInKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuX19kaWEuYXBwZW5kQ2hpbGQodGhpcy5fX3Bhbik7XHJcbiAgICB9IFxyXG4gICAgcHJpdmF0ZSBfX3NldF9kaWFsb2dfc3R5bGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fX2RpYS5zdHlsZS5ib3JkZXIgICAgICAgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5fX2RpYS5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnMTBweCc7XHJcbiAgICAgICAgdGhpcy5fX2RpYS5zdHlsZS51c2VyU2VsZWN0ICAgPSAnYXV0byc7XHJcbiAgICAgICAgdGhpcy5fX2RpYS5zdHlsZS5tYXJnaW4gICAgICAgPSAnMCc7XHJcbiAgICAgICAgdGhpcy5fX2RpYS5zdHlsZS5wYWRkaW5nICAgICAgPSAnMCc7XHJcblxyXG4gICAgICAgIHRoaXMuX19wYW4uc3R5bGUuZGlzcGxheSAgICAgID0gJ2dyaWQnO1xyXG4gICAgICAgIHRoaXMuX19wYW4uc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGBcclxuICAgICAgICAgICAgW3RsLXN0YXJ0IG1sLXN0YXJ0IGJsLXN0YXJ0XVxyXG4gICAgICAgICAgICAyMHB4XHJcbiAgICAgICAgICAgIFt0bC1lbmQgbWwtZW5kIGJsLWVuZCB0bS1zdGFydCBtbS1zdGFydCBibS1zdGFydF1cclxuICAgICAgICAgICAgMWZyXHJcbiAgICAgICAgICAgIFt0bS1lbmQgbW0tZW5kIGJtLWVuZCB0ci1zdGFydCBtci1zdGFydCBici1zdGFydF1cclxuICAgICAgICAgICAgMjBweFxyXG4gICAgICAgICAgICBbdHItZW5kIG1yLWVuZCBici1lbmRdXHJcbiAgICAgICAgYDtcclxuICAgICAgICB0aGlzLl9fcGFuLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBgXHJcbiAgICAgICAgICAgIFt0bC1zdGFydCB0bS1zdGFydCB0ci1zdGFydF1cclxuICAgICAgICAgICAgMjBweFxyXG4gICAgICAgICAgICBbdGwtZW5kIHRtLWVuZCB0ci1lbmQgbWwtc3RhcnQgbW0tc3RhcnQgbXItc3RhcnRdXHJcbiAgICAgICAgICAgIDFmclxyXG4gICAgICAgICAgICBbbWwtZW5kIG1tLWVuZCBtci1lbmQgYmwtc3RhcnQgYm0tc3RhcnQgYnItc3RhcnRdXHJcbiAgICAgICAgICAgIDIwcHhcclxuICAgICAgICAgICAgW2JsLWVuZCBibS1lbmQgYnItZW5kXVxyXG4gICAgICAgIGA7XHJcblxyXG4vLyAgICAgICAgdGhpcy5fX3Bhbi5zdHlsZS5ncmlkVGVtcGxhdGVBcmVhcyA9ICdcInRsIHRtIHRyXCIgXCJtbCBtbSBtclwiIFwiYmwgYm0gYnJcIic7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9fc2V0X2Jhcl9zdHlsZShhcmVhOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgZWxtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdsaWdodGN5YW4nO1xyXG4gICAgICAgIGVsbS5zdHlsZS51c2VyU2VsZWN0ICAgICAgPSAnbm9uZSc7XHJcbiAgICAgICAgZWxtLnN0eWxlLmdyaWRBcmVhID0gYXJlYTtcclxuICAgICAgICB0aGlzLl9fc2V0X21vdmVfZGlhbG9nKGVsbSk7XHJcbiAgICAgICAgdGhpcy5fX3Bhbi5hcHBlbmRDaGlsZChlbG0pO1xyXG4gICAgICAgIHJldHVybiBlbG07XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9fc2V0X2Nvcm5lcl9zdHlsZShhcmVhOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgZWxtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdjeWFuJztcclxuICAgICAgICBlbG0uc3R5bGUudXNlclNlbGVjdCAgICAgID0gJ25vbmUnO1xyXG4gICAgICAgIGVsbS5zdHlsZS5ncmlkQXJlYSA9IGFyZWE7XHJcblxyXG4gICAgICAgIGlmIChlbG0uaWQgPT09IHVuZGVmaW5lZCB8fCBlbG0uaWQgPT09ICcnKSBlbG0uaWQgPSBhcmVhO1xyXG4gICAgICAgIHRoaXMuX19yc3pbZWxtLmlkXSA9IG5ldyByZXNpemVEb20oZWxtLCB0aGlzLl9fZGlhKTtcclxuXHJcbiAgICAgICAgdGhpcy5fX3NldF96b29tX2RpYWxvZyhlbG0pO1xyXG4gICAgICAgIHRoaXMuX19wYW4uYXBwZW5kQ2hpbGQoZWxtKTtcclxuICAgICAgICByZXR1cm4gZWxtO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfX3NldF96b29tX2RpYWxvZyhlbG06IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgZWxtLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcclxuICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGV2OkRyYWdFdmVudCk9PnsgXHJcbiAgICAgICAgICAgIHRoaXMuX19tb3AgPSB7eDowLCB5OjB9O1xyXG4gICAgICAgICAgICB0aGlzLl9fbW9wLnggPSBldi5wYWdlWDtcclxuICAgICAgICAgICAgdGhpcy5fX21vcC55ID0gZXYucGFnZVk7XHJcbiAgICAgICAgICAgIGlmIChlbG0uaWQgaW4gdGhpcy5fX3JzeikgdGhpcy5fX3JzeltlbG0uaWRdLnJlc2V0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWcnLCAoZXY6RHJhZ0V2ZW50KT0+e1xyXG4gICAgICAgICAgICBpZiAoZXYucGFnZVggPT09IHRoaXMuX19tb3AueCAmJiBldi5wYWdlWSA9PT0gdGhpcy5fX21vcC55KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNpemVYICA9IGV2LnBhZ2VYIC0gdGhpcy5fX21vcC54O1xyXG4gICAgICAgICAgICBjb25zdCByZXNpemVZICA9IGV2LnBhZ2VZIC0gdGhpcy5fX21vcC55O1xyXG4gICAgICAgICAgICBpZiAoZWxtLmlkIGluIHRoaXMuX19yc3opIHRoaXMuX19yc3pbZWxtLmlkXS5yZXNpemUocmVzaXplWCwgcmVzaXplWSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoZXY6RHJhZ0V2ZW50KT0+eyBcclxuICAgICAgICAgICAgY29uc3QgcmVzaXplWCAgPSBldi5wYWdlWCAtIHRoaXMuX19tb3AueDtcclxuICAgICAgICAgICAgY29uc3QgcmVzaXplWSAgPSBldi5wYWdlWSAtIHRoaXMuX19tb3AueTtcclxuICAgICAgICAgICAgaWYgKGVsbS5pZCBpbiB0aGlzLl9fcnN6KSB0aGlzLl9fcnN6W2VsbS5pZF0ucmVzaXplKHJlc2l6ZVgsIHJlc2l6ZVkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfX3NldF9tb3ZlX2RpYWxvZyhlbG06IEhUTUxFbGVtZW50KTogdm9pZCB7IFxyXG4gICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XHJcbiAgICAgICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChldjpEcmFnRXZlbnQpPT57IFxyXG4gICAgICAgICAgICB0aGlzLl9fbW9wID0ge3g6MCwgeTowfTtcclxuICAgICAgICAgICAgdGhpcy5fX21vcC55ID0gdGhpcy5fX2RpYS5vZmZzZXRUb3AgIC0gZXYucGFnZVk7XHJcbiAgICAgICAgICAgIHRoaXMuX19tb3AueCA9IHRoaXMuX19kaWEub2Zmc2V0TGVmdCAtIGV2LnBhZ2VYO1xyXG4vLyAgICAgICAgICAgIGV2LmRhdGFUcmFuc2Zlcj8uc2V0RHJhZ0ltYWdlKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAwLCAwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZycsIChldjpEcmFnRXZlbnQpPT57XHJcbiAgICAgICAgICAgIGlmIChldi54ID09PSAwICYmIGV2LnkgPT09IDApIHJldHVybjtcclxuICAgICAgICAgICAgY29uc3QgdG9wICA9IGV2LnBhZ2VZICsgdGhpcy5fX21vcC55O1xyXG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gZXYucGFnZVggKyB0aGlzLl9fbW9wLng7XHJcbi8vICAgICAgICAgICAgY29uc3QgcmlnaHQgPSB3aW5kb3cub3V0ZXJXaWR0aCAtIGV2LnBhZ2VYO1xyXG4gICAgICAgICAgICB0aGlzLl9fZGlhLnN0eWxlLnRvcCAgID0gdG9wICAgKyAncHgnO1xyXG4gICAgICAgICAgICB0aGlzLl9fZGlhLnN0eWxlLmxlZnQgID0gbGVmdCAgKyAncHgnO1xyXG4vLyAgICAgICAgICAgIHRoaXMuX19kaWEuc3R5bGUucmlnaHQgPSByaWdodCArICdweCc7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoZXY6RHJhZ0V2ZW50KT0+eyBcclxuICAgICAgICAgICAgdGhpcy5fX21vcCA9IHt4OjAsIHk6MH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0V2luZG93KCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX2N0eDtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBzZXRXaW5kb3coY3R4OiBIVE1MRGl2RWxlbWVudCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLl9fcGFuLnJlbW92ZUNoaWxkKHRoaXMuX19jdHgpO1xyXG4gICAgICAgICAgICB0aGlzLl9fcGFuLmFwcGVuZENoaWxkKGN0eCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fY3R4ID0gY3R4O1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge31cclxuICAgICAgICByZXR1cm4gY3R4O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRab29tRWxtKGVsbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHRoaXMuX19yc3opIHRoaXMuX19yc3pbaWldLnNldFpvb21FbG0oZWxtKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjbHJab29tKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gdGhpcy5fX3JzeikgdGhpcy5fX3JzeltpaV0uY2xyWm9vbUVsbSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc2hvdygpOiB2b2lkIHsgXHJcbiAgICAgICAgdHJ5IHt0aGlzLl9fZGlhLnNob3coKX0gY2F0Y2ggKGVycikge31cclxuICAgIH1cclxuICAgIHB1YmxpYyBoaWRlKCk6IHZvaWQgeyBcclxuICAgICAgICB0cnkge3RoaXMuX19kaWEuY2xvc2UoKX0gY2F0Y2ggKGVycikge31cclxuICAgIH1cclxuICAgIHB1YmxpYyBkaXNwbGF5KHluOiBib29sZWFuKTogdm9pZCB7IFxyXG4gICAgICAgIHluP3RoaXMuc2hvdygpOnRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyByZXNpemVEb20ge1xyXG4gICAgcHJpdmF0ZSBfX2RpYTogIEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfX2NucjogIEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfX3RyZzogIEhUTUxFbGVtZW50fHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgX19jYW46IHt4OiBib29sZWFuLCB5OiBib29sZWFufTtcclxuICAgIHByaXZhdGUgX190b3A6ICB4eTtcclxuICAgIHByaXZhdGUgX19zaXo6ICB4eTtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihjbnI6IEhUTUxFbGVtZW50LCBkaWE6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5fX2RpYSA9IGRpYTsgdGhpcy5fX2NuciA9IGNucjtcclxuICAgICAgICB0aGlzLl9fY2FuID0ge3g6ZmFsc2UsIHk6IGZhbHNlfTtcclxuICAgICAgICB0aGlzLl9fdG9wID0ge3g6MCwgeTowfTtcclxuICAgICAgICB0aGlzLl9fc2l6ID0ge3g6MCwgeTowfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRab29tRWxtKHRyZzogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9fdHJnICAgPSB0cmc7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2xyWm9vbUVsbSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9fdHJnICAgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gWm9vbeWvvuixoeOBjOioreWumuOBleOCjOOBpuOBhOOBquOBkeOCjOOBsOS9leOCguOBl+OBquOBhFxyXG4gICAgICAgIGlmICh0aGlzLl9fdHJnID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gRGlhbG9n44Gu5bem5Y2K5YiG44Gr5a++6LGh44Kz44O844OK44O844GM5pyJ44KM44Gw44K144Kk44K65aSJ5pu044Gu6Zqb44Gr5bem6L6644KS5YuV44GL44GZ44Gu44Gn44Gd44Gu44OV44Op44Kw6Kit5a6aKHgpXHJcbiAgICAgICAgICAgIC8vIERpYWxvZ+OBruS4iuWNiuWIhuOBq+WvvuixoeOCs+ODvOODiuODvOOBjOacieOCjOOBsOOCteOCpOOCuuWkieabtOOBrumam+OBq+S4iui+uuOCkuWLleOBi+OBmeOBruOBp+OBneOBruODleODqeOCsOioreWumih5KVxyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgID0gIHRoaXMuX19jbnIub2Zmc2V0UGFyZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICB0aGlzLl9fY2FuLnggID0gIHRoaXMuX19jbnIub2Zmc2V0TGVmdCA8IChwYXJlbnQ/Lm9mZnNldFdpZHRoICAvIDIpO1xyXG4gICAgICAgICAgICB0aGlzLl9fY2FuLnkgID0gIHRoaXMuX19jbnIub2Zmc2V0VG9wICA8IChwYXJlbnQ/Lm9mZnNldEhlaWdodCAvIDIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICB0aGlzLl9fY2FuLnggID0gIHRoaXMuX19jYW4ueSAgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRGlhbG9n44Gu5bem5LiK44Gu5bqn5qiZ44KS5L+d5a2YXHJcbiAgICAgICAgdGhpcy5fX3RvcC54ID0gdGhpcy5fX2RpYS5vZmZzZXRMZWZ0OyBcclxuICAgICAgICB0aGlzLl9fdG9wLnkgPSB0aGlzLl9fZGlhLm9mZnNldFRvcDsgXHJcblxyXG4gICAgICAgIC8vIFpvb23lr77osaHjgajjgZnjgovopoHntKDjga7luYXjgajpq5jjgZXjgpLkv53lrZhcclxuICAgICAgICB0aGlzLl9fc2l6LnggPSB0aGlzLl9fdHJnLm9mZnNldFdpZHRoOyBcclxuICAgICAgICB0aGlzLl9fc2l6LnkgPSB0aGlzLl9fdHJnLm9mZnNldEhlaWdodDsgXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVzaXplKHJlc2l6ZVg6IG51bWJlciwgcmVzaXplWTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgLy8gWm9vbeWvvuixoeOBjOioreWumuOBleOCjOOBpuOBhOOBquOBkeOCjOOBsOS9leOCguOBl+OBquOBhFxyXG4gICAgICAgIGlmICh0aGlzLl9fdHJnID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gRGlhbG9n44Gu5bem5Y2K5YiG44Gr5a++6LGh44Kz44O844OK44O844GM5pyJ44KM44Gw5bem6L6644KS5YuV44GL44GZXHJcbiAgICAgICAgLy8g5bem6L6644KS5Ly444Gw44GZ44Gu44Gn44Oq44K144Kk44K66YeP44Gv5Y+N6Lui44GV44Gb44KLXHJcbiAgICAgICAgaWYgKHRoaXMuX19jYW4ueCkge1xyXG4gICAgICAgICAgICByZXNpemVYID0gLXJlc2l6ZVg7XHJcbiAgICAgICAgICAgIHRoaXMuX19kaWEuc3R5bGUubGVmdCAgPSB0aGlzLl9fdG9wLnggLSByZXNpemVYICArICdweCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERpYWxvZ+OBruS4iuWNiuWIhuOBq+WvvuixoeOCs+ODvOODiuODvOOBjOacieOCjOOBsOS4iui+uuOCkuWLleOBi+OBmVxyXG4gICAgICAgIC8vIOS4iui+uuOCkuS8uOOBsOOBmeOBruOBp+ODquOCteOCpOOCuumHj+OBr+WPjei7ouOBleOBm+OCi1xyXG4gICAgICAgIGlmICh0aGlzLl9fY2FuLnkpIHtcclxuICAgICAgICAgICAgcmVzaXplWSA9IC1yZXNpemVZO1xyXG4gICAgICAgICAgICB0aGlzLl9fZGlhLnN0eWxlLnRvcCAgID0gdGhpcy5fX3RvcC55IC0gcmVzaXplWSAgICsgJ3B4JztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gWm9vbeWvvuixoeOCkuOCteOCpOOCuuWkieabtOOBmeOCi1xyXG4gICAgICAgIHRoaXMuX190cmcuc3R5bGUud2lkdGggID0gdGhpcy5fX3Npei54ICsgcmVzaXplWCArICdweCc7XHJcbiAgICAgICAgdGhpcy5fX3RyZy5zdHlsZS5oZWlnaHQgPSB0aGlzLl9fc2l6LnkgKyByZXNpemVZICsgJ3B4JztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfbWluIH0gICAgICAgICAgZnJvbSBcIi4uL2RfdXRsL0ZfTWF0aFwiO1xyXG5pbXBvcnQgeyBDX1VybE9wdCB9ICAgICAgZnJvbSBcIi4uL2RfdXRsL0NfVXJsT3B0XCI7XHJcbmltcG9ydCB7IGdfbWVzLCBfYWxlcnQsIGdfZGVidWcsIGdfYWxlcnQgfSBmcm9tIFwiLi4vZF9jbW4vZ2xvYmFsXCI7XHJcblxyXG5cclxuLy8g6Z2e5ZCM5pyf6YCa5L+h54mIIFBPU1QoU3RyaW5nKSAmIEdFVCBKU09OXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUX2FuZF9nZXRfSlNPTihcclxuICAgIHVybDogc3RyaW5nLCBcclxuICAgIG9wdDogQ19VcmxPcHQsIFxyXG4pOiBQcm9taXNlPGFueXx1bmRlZmluZWQ+IHtcclxuICAgIGNvbnN0IGZvcm1fZGF0YSA9IG9wdC50b0Zvcm1EYXRhKCk7XHJcblxyXG4gICAgaWYgKGZvcm1fZGF0YSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgdmFyIHJlczogUmVzcG9uc2U7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgY2FjaGU6ICAnbm8tY2FjaGUnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXHJcbi8vICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJcclxuLy8gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxufSxcclxuICAgICAgICAgICAgYm9keTogb3B0LnRvRm9ybURhdGEoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihg44Os44K544Od44Oz44K544K544OG44O844K/44K5ICgke3Jlcy5zdGF0dXN9KWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICBnX21lcy53YXJuaW5nX21lc3NhZ2UoJ+mAmuS/oeOCqOODqeODvDogJyArIGVycik7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb25pdG9yID0gdHJ1ZTsgIC8vIGFsZXJ044Gn5Y+X5L+h44GX44Gf44OG44Kt44K544OI44KS6KGo56S644GZ44KL44Go44GN44GrdHJ1ZeOBq+OBmeOCi1xyXG5cclxuICAgIHJldHVybiByZXMudGV4dCgpXHJcbiAgICAgICAgLnRoZW4odHh0PT57XHJcbiAgICAgICAgICAgIGNvbnN0IHR4ID0gdHh0LnNsaWNlKCk7XHJcblxyXG4vLyAgICAgICAgICAgIGlmIChtb25pdG9yKSBfYWxlcnQodHgpO1xyXG4gICAgICAgICAgICBpZiAobW9uaXRvcikge1xyXG4gICAgICAgICAgICAgICAgZ19hbGVydC5zZXRfbWVzc2FnZShgUE9TVCBVUkw6YCwgdXJsKTtcclxuICAgICAgICAgICAgICAgIGdfYWxlcnQuc2V0X21lc3NhZ2UoYFBPU1QgT1BUOmAsIG9wdC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGdfYWxlcnQuc2V0X21lc3NhZ2UoYFBPU1QgREFUQTpgLCB0eCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0eHQpO1xyXG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICAgICAgZ19tZXMud2FybmluZ19tZXNzYWdlKCdKU09O5b2i5byP44Gu44OH44Kz44O844OJ44Ko44Op44O8Jyk7XHJcbiAgICAgICAgICAgICAgICBfYWxlcnQodHgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG4vLyDpnZ7lkIzmnJ/pgJrkv6HniYggUE9TVChKU09OKSAmIEdFVCBKU09OXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUX2FuZF9nZXRfSlNPTjMoXHJcbiAgICB1cmw6IHN0cmluZywgXHJcbiAgICBvcHQ6IENfVXJsT3B0LCBcclxuKTogUHJvbWlzZTxhbnl8dW5kZWZpbmVkPiB7XHJcbiAgICBjb25zdCBmb3JtX2RhdGEgPSBvcHQudG9Gb3JtRGF0YSgpO1xyXG5cclxuICAgIGlmIChmb3JtX2RhdGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIHZhciByZXM6IFJlc3BvbnNlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGNhY2hlOiAgJ25vLWNhY2hlJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4vLyAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIlxyXG4vLyAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG59LFxyXG4gICAgICAgICAgICBib2R5OiBvcHQudG9KU09OKClcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYOODrOOCueODneODs+OCueOCueODhuODvOOCv+OCuSAoJHtyZXMuc3RhdHVzfSlgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgZ19tZXMud2FybmluZ19tZXNzYWdlKCfpgJrkv6Hjgqjjg6njg7w6ICcgKyBlcnIpO1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW9uaXRvciA9IHRydWU7ICAvLyBhbGVydOOBp+WPl+S/oeOBl+OBn+ODhuOCreOCueODiOOCkuihqOekuuOBmeOCi+OBqOOBjeOBq3RydWXjgavjgZnjgotcclxuXHJcbiAgICByZXR1cm4gcmVzLnRleHQoKVxyXG4gICAgICAgIC50aGVuKHR4dD0+e1xyXG4gICAgICAgICAgICBjb25zdCB0eCA9IHR4dC5zbGljZSgpO1xyXG5cclxuLy8gICAgICAgICAgICBpZiAobW9uaXRvcikgX2FsZXJ0KHR4KTtcclxuICAgICAgICAgICAgaWYgKG1vbml0b3IpIHtcclxuICAgICAgICAgICAgICAgIGdfYWxlcnQuc2V0X21lc3NhZ2UoYFBPU1QgVVJMOmAsIHVybCk7XHJcbiAgICAgICAgICAgICAgICBnX2FsZXJ0LnNldF9tZXNzYWdlKGBQT1NUIE9QVDpgLCBvcHQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBnX2FsZXJ0LnNldF9tZXNzYWdlKGBQT1NUIERBVEE6YCwgdHgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodHh0KTtcclxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGdfbWVzLndhcm5pbmdfbWVzc2FnZSgnSlNPTuW9ouW8j+OBruODh+OCs+ODvOODieOCqOODqeODvCcpO1xyXG4gICAgICAgICAgICAgICAgX2FsZXJ0KHR4KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8g5ZCM5pyf6YCa5L+h54mIIFBPU1QgJiBHRVQgSlNPTlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVF9hbmRfZ2V0X0pTT04yKFxyXG4gICAgdXJsOiBzdHJpbmcsIFxyXG4gICAgb3B0OiBDX1VybE9wdCwgXHJcbik6IFByb21pc2U8YW55fHVuZGVmaW5lZD4ge1xyXG4gICAgY29uc3QgcmVxT2JqID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7IC8vIG9iamVjdCBvZiByZXF1ZXN0XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXFPYmoub3BlbihcIlBPU1RcIiwgdXJsLCBmYWxzZSk7IC8vIFN5bmMgbW9kZVxyXG4gICAgICAgIHJlcU9iai5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpOyAvLyBzZXR0aW5nIG9mIGhlYWRlcnMgIGluIHJlcXVlc3RcclxuICAgICAgICByZXFPYmouc2VuZChvcHQudG9Gb3JtRGF0YSgpKTsgLy8gZGF0YSB0byBzZW5kIGluIHJlcXVlc3RcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGdfbWVzLndhcm5pbmdfbWVzc2FnZShg6YCa5L+h44Ko44Op44O8OiAke3JlcU9iai5zdGF0dXN9YCk7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0eHQgPSByZXFPYmoucmVzcG9uc2VUZXh0OyAvLyBkaXNwbGF5aW5nIHJlc3BvbnNlIHRleHQgaW4gcGFyYWdyYXBoIHRhZ1xyXG5cclxuICAgIGNvbnN0IG1vbml0b3IgPSB0cnVlOyAgLy8gYWxlcnTjgaflj5fkv6HjgZfjgZ/jg4bjgq3jgrnjg4jjgpLooajnpLrjgZnjgovjgajjgY3jgat0cnVl44Gr44GZ44KLXHJcbiAgICBpZiAobW9uaXRvcikge1xyXG4gICAgICAgIGdfYWxlcnQuc2V0X21lc3NhZ2UoYFBPU1QgVVJMOmAsICB1cmwpO1xyXG4gICAgICAgIGdfYWxlcnQuc2V0X21lc3NhZ2UoYFBPU1QgT1BUOmAsICBvcHQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgZ19hbGVydC5zZXRfbWVzc2FnZShgUE9TVCBEQVRBOmAsIHR4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE51bWJlcihyZXFPYmouc3RhdHVzKSA+IDM5OSkge1xyXG4gICAgICAgIGdfbWVzLndhcm5pbmdfbWVzc2FnZShg44Os44K544Od44Oz44K544K544OG44O844K/44K5OiAke3JlcU9iai5zdGF0dXN9YCk7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHR4dCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBnX21lcy53YXJuaW5nX21lc3NhZ2UoJ0pTT07lvaLlvI/jga7jg4fjgrPjg7zjg4njgqjjg6njg7w6ICcgKyBlcnIpO1xyXG4gICAgICAgIF9hbGVydCh0eHQpO1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQT1NUX2FuZF9tb3ZlX3BhZ2UodXJsOiBzdHJpbmcsIG9wdDogQ19VcmxPcHQpOiB2b2lkIHtcclxuICAgIGNyZWF0ZV9mb3JtKHVybCwgb3B0KS5zdWJtaXQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlX2Zvcm0odXJsOiBzdHJpbmcsIG9wdDogQ19VcmxPcHQpOiBIVE1MRm9ybUVsZW1lbnQge1xyXG4gICAgY29uc3QgZm9ybSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xyXG5cclxuICAgIGZvcm0uaWQgICAgID0gJ2R1bW15X2Zvcm1fJyArIG5ldyBEYXRlKCkudmFsdWVPZigpLnRvU3RyaW5nKCk7XHJcbiAgICBmb3JtLm1ldGhvZCA9ICdQT1NUJztcclxuICAgIGZvcm0uYWN0aW9uID0gIHVybDtcclxuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICBmb3IgKHZhciBrZXkgb2Ygb3B0LmdldF9rZXlzKCkpIHtcclxuICAgICAgICBjcmVhdGVfaW5wdXQoZm9ybSwgZm9ybS5pZCwga2V5LCBvcHQuZ2V0KGtleSkpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgIHJldHVybiBmb3JtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVfaW5wdXQoZm9ybTogSFRNTEZvcm1FbGVtZW50LCBmaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogSFRNTElucHV0RWxlbWVudCB7XHJcbiAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIGkudHlwZSAgPSAnaGlkZGVuJztcclxuICAgIGkubmFtZSAgPSBuYW1lO1xyXG4gICAgaS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgaS5zdHlsZS5kaXNwbGF5ID0nbm9uZSc7XHJcbiAgICBpLnNldEF0dHJpYnV0ZSgnZm9yJywgICBmaWQpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpKTtcclxuXHJcbiAgICByZXR1cm4gaTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGVydF9zYXZlX2RldGFpbCwgYWxlcnRfc2F2ZV9pbmZvIH0gZnJvbSAnLi4vZF9tZGwvQ19TYXZlRGF0YSc7IFxyXG5pbXBvcnQgeyBhbGVydF90ZWFtX2luZm8gfSAgICAgZnJvbSBcIi4uL2RfbWRsL0NfVGVhbVwiOyBcclxuaW1wb3J0IHsgYWxlcnRfbWF6ZV9pbmZvIH0gICAgIGZyb20gXCIuLi9kX21kbC9DX01hemVcIjsgXHJcbmltcG9ydCB7IGFsZXJ0X2d1bGRfaW5mbyB9ICAgICBmcm9tIFwiLi4vZF9tZGwvQ19HdWlsZFwiOyBcclxuaW1wb3J0IHsgYWxlcnRfbXZwdF9pbmZvIH0gICAgIGZyb20gXCIuLi9kX21kbC9DX01vdmFibGVQb2ludFwiO1xyXG5pbXBvcnQgeyBhbGVydF9ocmVzX2luZm8gfSAgICAgZnJvbSBcIi4uL2RfbWRsL0NfSGVyb1wiOyBcclxuaW1wb3J0IHsgYWxlcnRfUERfaW5mbyB9ICAgICAgIGZyb20gXCIuLi9kX21kbC9DX1BvaW50RGlyXCI7XHJcbmltcG9ydCB7IGFsZXJ0X21hemVpbmZvX2luZm8gfSBmcm9tICcuLi9kX21kbC9DX01hemVJbmZvJztcclxuXHJcbmltcG9ydCB7IF9yb3VuZCwgX21pbiwgX21heCAgfSBmcm9tIFwiLi4vZF91dGwvRl9NYXRoXCI7XHJcbmltcG9ydCB7IENfVXJsT3B0IH0gICAgICAgICAgICBmcm9tIFwiLi4vZF91dGwvQ19VcmxPcHRcIjsgIFxyXG5pbXBvcnQgeyBQT1NUX2FuZF9nZXRfSlNPTiwgIFBPU1RfYW5kX2dldF9KU09OMywgUE9TVF9hbmRfbW92ZV9wYWdlIH0gZnJvbSBcIi4uL2RfY21uL0ZfUE9TVFwiO1xyXG5pbXBvcnQgeyBcclxuICAgIF9hbGVydCwgZ19tZXMsIGdfc3RhcnRfZW52LCBcclxuICAgIGdfdXJsLCAgZ191cmxfZ3QyX21hemUsIGdfdXJsX2dldF9zYXZlLCBnX3VybF9ndDJfZ3VsZCwgXHJcbiAgICBnX3NhdmUsXHJcbiAgICBnX3VybF9hbGxfbWF6ZSxcclxuICAgIGdfdXJsX2dldF9tYXplLCBcclxuICAgIGdfdXJsX25ld19tYXplLFxyXG4gICAgZ191cmxfbmV3X2d1bGQsXHJcbiAgICBnX3VybF9hbGxfaHJlcyxcclxuICAgIGdfdXJsX2NoZWNrX0pTT04sXHJcbiAgICBnX3VybF9ndDJfc2F2ZSxcclxuICAgIGdfdXJsX2dldF9pbmZvLFxyXG4gICAgZ191cmxfZ2V0X2RhdGEsXHJcbiAgICBnX3VybF9wdXRfZGF0YSxcclxufSBmcm9tIFwiLi4vZF9jbW4vZ2xvYmFsXCI7XHJcblxyXG5cclxudHlwZSBUX2NhbGxiYWNrID0gKGpzb25PYmo6YW55KT0+KGJvb2xlYW58dm9pZCk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0X21haV9tYXplKGNhbGxiYWNrPzogVF9jYWxsYmFjayk6IFByb21pc2U8YW55fHVuZGVmaW5lZD4ge1xyXG4gICAgY29uc3Qgb3B0ID0gbmV3IENfVXJsT3B0KCk7XHJcbiAgICBvcHQuc2V0KCdtb2RlJywgJ25ld19nYW1lJyk7IFxyXG4gICAgb3B0LnNldCgncGlkJywgICBnX3N0YXJ0X2Vudi5waWQpO1xyXG4vLyAgICByZXR1cm4gYXdhaXQgX2dldF9uZXdfZ2FtZShnX3VybFtnX3VybF9ndDJfbWF6ZV0sIG9wdCwgY2FsbGJhY2spO1xyXG4gICAgcmV0dXJuIGF3YWl0IF9nZXRfbmV3X2dhbWUoZ191cmxbZ191cmxfbmV3X21hemVdLCBvcHQsIGNhbGxiYWNrKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRfbWFpX2d1bGQoY2FsbGJhY2s/OiBUX2NhbGxiYWNrKTogUHJvbWlzZTxhbnl8dW5kZWZpbmVkPiB7XHJcbiAgICBjb25zdCBvcHQgPSBuZXcgQ19VcmxPcHQoKTtcclxuICAgIG9wdC5zZXQoJ21vZGUnLCAnbmV3X2dhbWUnKTsgXHJcbiAgICBvcHQuc2V0KCdwaWQnLCAgIGdfc3RhcnRfZW52LnBpZC50b1N0cmluZygpKTtcclxuLy8gICAgcmV0dXJuIGF3YWl0IF9nZXRfbmV3X2dhbWUoZ191cmxbZ191cmxfZ3QyX2d1bGRdLCBvcHQsIGNhbGxiYWNrKTtcclxuICAgIHJldHVybiBhd2FpdCBfZ2V0X25ld19nYW1lKGdfdXJsW2dfdXJsX25ld19ndWxkXSwgb3B0LCBjYWxsYmFjayk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIF9nZXRfbmV3X2dhbWUodXJsOiBzdHJpbmcsIG9wdDogQ19VcmxPcHQsIGNhbGxiYWNrPzogVF9jYWxsYmFjayk6IFByb21pc2U8YW55fHVuZGVmaW5lZD4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IFBPU1RfYW5kX2dldF9KU09OMyh1cmwsIG9wdCk/LnRoZW4oanNvbk9iaj0+e1xyXG4gICAgICAgIGlmIChqc29uT2JqLmVjb2RlID09PSAwKSB7XHJcbiAgICAgICAgICAgIGdfbWVzLm5vcm1hbF9tZXNzYWdlKCfmraPluLjjgavjg63jg7zjg4njgZXjgozjgb7jgZfjgZ8nKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGpzb25PYmouc2F2ZSAgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZ19tZXMud2FybmluZ19tZXNzYWdlKFwi5L+d5a2Y44OH44O844K/44GM5LiN5q2j44Gq5b2i5byP44Gn44GX44GfXFxuXCIgKyBqc29uT2JqLmVtc2cpO1xyXG4gICAgICAgICAgICAgICAgX2FsZXJ0KGpzb25PYmouZW1zZyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtb25pdG9yID0gZmFsc2U7ICAvLyBhbGVydOOBp+WPl+S/oeOBl+OBn+ODhuOCreOCueODiOOCkuihqOekuuOBmeOCi+OBqOOBjeOBq3RydWXjgavjgZnjgotcclxuICAgICAgICAgICAgaWYgKG1vbml0b3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChqc29uT2JqPy5zYXZlICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnRfc2F2ZV9pbmZvKGpzb25PYmouc2F2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnRfc2F2ZV9kZXRhaWwoanNvbk9iai5zYXZlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgIT09IHVuZGVmaW5lZCkgY2FsbGJhY2soanNvbk9iaik7XHJcbiAgICAgICAgICAgIHJldHVybiBqc29uT2JqO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGdfbWVzLndhcm5pbmdfbWVzc2FnZShcIuODreODvOODieOBp+OBjeOBvuOBm+OCk+OBp+OBl+OBn1xcblwiICsganNvbk9iai5lbXNnKTtcclxuICAgICAgICAgICAgX2FsZXJ0KGpzb25PYmouZW1zZyk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRfbmV3X21hemUobWF6ZV9uYW1lOiBzdHJpbmcsIGNhbGxiYWNrPzogVF9jYWxsYmFjayk6IFByb21pc2U8YW55fHVuZGVmaW5lZD4ge1xyXG4gICAgY29uc3Qgb3B0ID0gbmV3IENfVXJsT3B0KCk7XHJcbiAgICBvcHQuc2V0KCdtb2RlJywgICAgICAnbmV3X21hemUnKTtcclxuICAgIG9wdC5zZXQoJ3BpZCcsICAgICAgICBnX3N0YXJ0X2Vudi5waWQpO1xyXG4gICAgb3B0LnNldCgnbWF6ZV9uYW1lJywgIG1hemVfbmFtZSk7XHJcblxyXG4vLyAgICByZXR1cm4gUE9TVF9hbmRfZ2V0X0pTT04oZ191cmxbZ191cmxfZ3QyX21hemVdLCBvcHQpPy50aGVuKGpzb25PYmo9PntcclxuICAgIHJldHVybiBQT1NUX2FuZF9nZXRfSlNPTjMoZ191cmxbZ191cmxfZ2V0X21hemVdLCBvcHQpPy50aGVuKGpzb25PYmo9PntcclxuICAgICAgICBpZiAoanNvbk9iai5lY29kZSAhPT0gMCkge1xyXG4gICAgICAgICAgICBnX21lcy53YXJuaW5nX21lc3NhZ2UoXCLmlrDov7flrq7jg4fjg7zjgr/jgpLlj5fkv6HjgafjgY3jgb7jgZvjgpPjgafjgZfjgZ9cXG5cIiArIGpzb25PYmouZW1zZyk7XHJcbiAgICAgICAgICAgIF9hbGVydChqc29uT2JqLmVtc2cpO1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoanNvbk9iaj8uZGF0YSAgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBnX21lcy53YXJuaW5nX21lc3NhZ2UoXCLlj5fkv6Hjg4fjg7zjgr/jgYzkuI3mraPjgarlvaLlvI/jgafjgZfjgZ9cXG5cIiArIGpzb25PYmouZW1zZyk7XHJcbiAgICAgICAgICAgIF9hbGVydChqc29uT2JqLmVtc2cpO1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoanNvbk9iaj8uZGF0YT8ubWF6ZSAgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBnX21lcy53YXJuaW5nX21lc3NhZ2UoXCLmlrDov7flrq7jg4fjg7zjgr/jgYzkuI3mraPjgarlvaLlvI/jgafjgZfjgZ9cXG5cIiArIGpzb25PYmouZW1zZyk7XHJcbiAgICAgICAgICAgIF9hbGVydChqc29uT2JqLmVtc2cpO1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoanNvbk9iaj8uZGF0YT8ucG9zICAgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBnX21lcy53YXJuaW5nX21lc3NhZ2UoXCLmlrDov7flrq7jga7kvY3nva7jg4fjg7zjgr/jgYzkuI3mraPjgarlvaLlvI/jgafjgZfjgZ9cXG5cIiArIGpzb25PYmouZW1zZyk7XHJcbiAgICAgICAgICAgIF9hbGVydChqc29uT2JqLmVtc2cpO1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbW9uaXRvciA9IGZhbHNlICAvLyBhbGVydOOBp+WPl+S/oeOBl+OBn+ODhuOCreOCueODiOOCkuihqOekuuOBmeOCi+OBqOOBjeOBq3RydWXjgavjgZnjgotcclxuICAgICAgICBpZiAobW9uaXRvcikge1xyXG4gICAgICAgICAgICBpZiAoanNvbk9iaj8uZGF0YT8ubWF6ZSAgIT09IHVuZGVmaW5lZCkgYWxlcnRfbWF6ZV9pbmZvKGpzb25PYmouZGF0YS5tYXplKTtcclxuICAgICAgICAgICAgaWYgKGpzb25PYmo/LmRhdGE/LnBvcyAgICE9PSB1bmRlZmluZWQpIGFsZXJ0X1BEX2luZm8gIChqc29uT2JqLmRhdGEucG9zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQpIGNhbGxiYWNrKGpzb25PYmo/LmRhdGEpO1xyXG5cclxuICAgICAgICByZXR1cm4ganNvbk9iajtcclxuICAgIH0pOyBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldF9zYXZlX2luZm8oY2FsbGJhY2s/OiBUX2NhbGxiYWNrKTogUHJvbWlzZTxhbnl8dW5kZWZpbmVkPiB7XHJcbiAgICBjb25zdCBvcHQgPSBuZXcgQ19VcmxPcHQoKTtcclxuICAgIG9wdC5zZXQoJ21vZGUnLCAgICAgICAnc2F2ZV9pbmZvJyk7IFxyXG4gICAgb3B0LnNldCgncGlkJywgICAgICAgICBnX3N0YXJ0X2Vudi5waWQpO1xyXG5cclxuLy8gICAgcmV0dXJuIFBPU1RfYW5kX2dldF9KU09OKGdfdXJsW2dfdXJsX2d0Ml9zYXZlXSwgb3B0KT8udGhlbihqc29uT2JqPT57XHJcbiAgICByZXR1cm4gUE9TVF9hbmRfZ2V0X0pTT04zKGdfdXJsW2dfdXJsX2dldF9pbmZvXSwgb3B0KT8udGhlbihqc29uT2JqPT57XHJcbiAgICAgICAgaWYgKGpzb25PYmouZWNvZGUgPT09IDApIHtcclxuICAgICAgICAgICAgZ19tZXMubm9ybWFsX21lc3NhZ2UoJ+ato+W4uOOBq+ODreODvOODieOBleOCjOOBvuOBl+OBnycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGpzb25PYmouc2F2ZV9pbmZvICA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBnX21lcy53YXJuaW5nX21lc3NhZ2UoXCLkv53lrZjjg4fjg7zjgr/jgYzkuI3mraPjgarlvaLlvI/jgafjgZfjgZ9cXG5cIiArIGpzb25PYmouZW1zZyk7XHJcbiAgICAgICAgICAgICAgICBfYWxlcnQoanNvbk9iai5lbXNnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG1vbml0b3IgPSBmYWxzZTsgIC8vIGFsZXJ044Gn5Y+X5L+h44GX44Gf44OG44Kt44K544OI44KS6KGo56S644GZ44KL44Go44GN44GrdHJ1ZeOBq+OBmeOCi1xyXG4gICAgICAgICAgICBpZiAobW9uaXRvcikge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc2F2ZSBvZiBqc29uT2JqLnNhdmVfaW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzYXZlICAgICAgICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnRfc2F2ZV9pbmZvKHNhdmUpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0X3NhdmVfZGV0YWlsKHNhdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQpIGNhbGxiYWNrKGpzb25PYmopO1xyXG4gICAgICAgICAgICByZXR1cm4ganNvbk9iajtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnX21lcy53YXJuaW5nX21lc3NhZ2UoXCLjg63jg7zjg4njgafjgY3jgb7jgZvjgpPjgafjgZfjgZ9cXG5cIiArIGpzb25PYmouZW1zZyk7XHJcbiAgICAgICAgICAgIF9hbGVydChqc29uT2JqLmVtc2cpO1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0X21hemVfaW5mbyhjYWxsYmFjaz86IFRfY2FsbGJhY2spOiBQcm9taXNlPGFueXx1bmRlZmluZWQ+IHtcclxuICAgIGNvbnN0IG9wdCA9IG5ldyBDX1VybE9wdCgpO1xyXG4gICAgb3B0LnNldCgnbW9kZScsICAgICAgICAnbWF6ZV9pbmZvJyk7IFxyXG4vLyAgICByZXR1cm4gYXdhaXQgUE9TVF9hbmRfZ2V0X0pTT04oZ191cmxbZ191cmxfZ3QyX21hemVdLCBvcHQpPy50aGVuKGpzb25PYmo9PntcclxuICAgIHJldHVybiBhd2FpdCBQT1NUX2FuZF9nZXRfSlNPTjMoZ191cmxbZ191cmxfYWxsX21hemVdLCBvcHQpPy50aGVuKGpzb25PYmo9PntcclxuICAgICAgICBpZiAoanNvbk9iai5lY29kZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBnX21lcy5ub3JtYWxfbWVzc2FnZSgn5q2j5bi444Gr44Ot44O844OJ44GV44KM44G+44GX44GfJyk7XHJcbiAgICAgICAgICAgIGlmIChqc29uT2JqPy5kYXRhPy5tYXplaW5mbyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBnX21lcy53YXJuaW5nX21lc3NhZ2UoXCLov7flrq7mg4XloLHjgYzkuI3mraPjgarlvaLlvI/jgafjgZfjgZ9cXG5cIiArIGpzb25PYmouZW1zZyk7XHJcbiAgICAgICAgICAgICAgICBfYWxlcnQoanNvbk9iai5lbXNnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgbW9uaXRvciA9IGZhbHNlOyAgLy8gYWxlcnTjgaflj5fkv6HjgZfjgZ/jg4bjgq3jgrnjg4jjgpLooajnpLrjgZnjgovjgajjgY3jgat0cnVl44Gr44GZ44KLXHJcbiAgICAgICAgICAgIGlmIChtb25pdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoanNvbk9iaj8uZGF0YT8ubWF6ZWluZm8gICE9PSB1bmRlZmluZWQpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBtYXplaW5mbyBvZiBqc29uT2JqLmRhdGEubWF6ZWluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnRfbWF6ZWluZm9faW5mbyhtYXplaW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPT0gdW5kZWZpbmVkKSBjYWxsYmFjayhqc29uT2JqPy5kYXRhPy5tYXplaW5mbyk7XHJcbiAgICAgICAgICAgIHJldHVybiBqc29uT2JqPy5kYXRhPy5tYXplaW5mbztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnX21lcy53YXJuaW5nX21lc3NhZ2UoXCLjg63jg7zjg4njgafjgY3jgb7jgZvjgpPjgafjgZfjgZ9cXG5cIiArIGpzb25PYmouZW1zZyk7XHJcbiAgICAgICAgICAgIF9hbGVydChqc29uT2JqLmVtc2cpO1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0X25ld19oZXJvKG51bTogbnVtYmVyID0gMjAsIGNhbGxiYWNrPzogVF9jYWxsYmFjayk6IFByb21pc2U8YW55fHVuZGVmaW5lZD4ge1xyXG4gICAgY29uc3Qgb3B0ID0gbmV3IENfVXJsT3B0KCk7XHJcbiAgICBvcHQuc2V0KCdtb2RlJywgICAgICAgICduZXdfaGVybycpOyBcclxuLy8gICAgb3B0LnNldCgnbnVtYmVyJywgICAgICAgbnVtLnRvU3RyaW5nKCkpO1xyXG4vLyAgICByZXR1cm4gYXdhaXQgUE9TVF9hbmRfZ2V0X0pTT04oZ191cmxbZ191cmxfZ3QyX2d1bGRdLCBvcHQpPy50aGVuKGpzb25PYmo9PntcclxuICAgIG9wdC5zZXQoJ25tYnInLCAgICAgICAgIG51bS50b1N0cmluZygpKTtcclxuICAgIHJldHVybiBhd2FpdCBQT1NUX2FuZF9nZXRfSlNPTjMoZ191cmxbZ191cmxfYWxsX2hyZXNdLCBvcHQpPy50aGVuKGpzb25PYmo9PntcclxuICAgICAgICBpZiAoanNvbk9iai5lY29kZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBnX21lcy5ub3JtYWxfbWVzc2FnZSgn5q2j5bi444Gr44Ot44O844OJ44GV44KM44G+44GX44GfJyk7XHJcbiAgICAgICAgICAgIGlmIChqc29uT2JqPy5kYXRhPy5ocmVzICA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBnX21lcy53YXJuaW5nX21lc3NhZ2UoXCLjg5Ljg7zjg63jg7zjg7vjg4fjg7zjgr/jgYzkuI3mraPjgarlvaLlvI/jgafjgZfjgZ9cXG5cIiArIGpzb25PYmouZW1zZyk7XHJcbiAgICAgICAgICAgICAgICBfYWxlcnQoanNvbk9iai5lbXNnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBtb25pdG9yID0gZmFsc2U7ICAvLyBhbGVydOOBp+WPl+S/oeOBl+OBn+ODhuOCreOCueODiOOCkuihqOekuuOBmeOCi+OBqOOBjeOBq3RydWXjgavjgZnjgotcclxuICAgICAgICAgICAgaWYgKG1vbml0b3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChqc29uT2JqPy5kYXRhPy5ocmVzICAhPT0gdW5kZWZpbmVkKSBhbGVydF9ocmVzX2luZm8oanNvbk9iai5kYXRhLmhyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPT0gdW5kZWZpbmVkKSBjYWxsYmFjayhqc29uT2JqPy5kYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIGpzb25PYmo/LmRhdGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZ19tZXMud2FybmluZ19tZXNzYWdlKFwi44Ot44O844OJ44Gn44GN44G+44Gb44KT44Gn44GX44GfXFxuXCIgKyBqc29uT2JqLmVtc2cpO1xyXG4gICAgICAgICAgICBfYWxlcnQoanNvbk9iai5lbXNnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0bXBfbG9hZChvcHQ/OiBDX1VybE9wdCwgY2FsbGJhY2s/OiBUX2NhbGxiYWNrKTogUHJvbWlzZTxhbnl8dW5kZWZpbmVkPiB7XHJcbiAgICBvcHQgPz89IG5ldyBDX1VybE9wdCgpO1xyXG4gICAgb3B0LnNldCgnbW9kZScsICAgICAgICd0bXBfbG9hZCcpOyBcclxuICAgIG9wdC5zZXQoJ3BpZCcsICAgZ19zdGFydF9lbnYucGlkKTsgXHJcbiAgICBvcHQuc2V0KCd1bm8nLCAgICAgICAgICAgICAgIDEwMCk7IFxyXG4gICAgcmV0dXJuIF9fYXV0b19sb2FkKG9wdCwgY2FsbGJhY2spO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudF9sb2FkKG9wdD86IENfVXJsT3B0LCBjYWxsYmFjaz86IFRfY2FsbGJhY2spOiBQcm9taXNlPGFueXx1bmRlZmluZWQ+IHtcclxuICAgIG9wdCA/Pz0gbmV3IENfVXJsT3B0KCk7XHJcbiAgICBvcHQuc2V0KCdtb2RlJywgICAnaW5zdGFudF9sb2FkJyk7IFxyXG4gICAgb3B0LnNldCgncGlkJywgICBnX3N0YXJ0X2Vudi5waWQpOyBcclxuICAgIG9wdC5zZXQoJ3VubycsICAgICAgICAgICAgICAgMTAxKTsgXHJcbiAgICByZXR1cm4gX19hdXRvX2xvYWQob3B0LCBjYWxsYmFjayk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVRF9sb2FkKG9wdD86IENfVXJsT3B0LCBjYWxsYmFjaz86IFRfY2FsbGJhY2spOiBQcm9taXNlPGFueXx1bmRlZmluZWQ+IHtcclxuICAgIG9wdCA/Pz0gbmV3IENfVXJsT3B0KCk7XHJcbiAgICBvcHQuc2V0KCdtb2RlJywgICAgICAgICdVRF9sb2FkJyk7IFxyXG4gICAgb3B0LnNldCgncGlkJywgICBnX3N0YXJ0X2Vudi5waWQpOyBcclxuICAgIG9wdC5zZXQoJ3VubycsICAgICAgICAgICAgICAgMTAyKTsgXHJcbiAgICByZXR1cm4gX19hdXRvX2xvYWQob3B0LCBjYWxsYmFjayk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiZWZvcmVfbG9hZChvcHQ/OiBDX1VybE9wdCwgY2FsbGJhY2s/OiBUX2NhbGxiYWNrKTogUHJvbWlzZTxhbnl8dW5kZWZpbmVkPiB7XHJcbiAgICBvcHQgPz89IG5ldyBDX1VybE9wdCgpO1xyXG4gICAgb3B0LnNldCgnbW9kZScsICAgICdiZWZvcmVfbG9hZCcpOyBcclxuICAgIG9wdC5zZXQoJ3BpZCcsICAgZ19zdGFydF9lbnYucGlkKTsgXHJcbiAgICBvcHQuc2V0KCd1bm8nLCAgICAgICAgICAgICAgIDEwMyk7IFxyXG4gICAgcmV0dXJuIF9fYXV0b19sb2FkKG9wdCwgY2FsbGJhY2spO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhbF9sb2FkKHVuaXFfbm86IG51bWJlciwgb3B0PzogQ19VcmxPcHQsIGNhbGxiYWNrPzogVF9jYWxsYmFjayk6IFByb21pc2U8YW55fHVuZGVmaW5lZD4ge1xyXG4gICAgb3B0ID8/PSBuZXcgQ19VcmxPcHQoKTtcclxuICAgIG9wdC5zZXQoJ21vZGUnLCAgICdnZW5lcmFsX2xvYWQnKTsgXHJcbiAgICBvcHQuc2V0KCdwaWQnLCAgIGdfc3RhcnRfZW52LnBpZCk7IFxyXG4gICAgb3B0LnNldCgndW5vJywgICAgICAgICAgIHVuaXFfbm8pOyBcclxuICAgIHJldHVybiBfX2F1dG9fbG9hZChvcHQsIGNhbGxiYWNrKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX19hdXRvX2xvYWQob3B0OiBDX1VybE9wdCwgY2FsbGJhY2s/OiBUX2NhbGxiYWNrKTogUHJvbWlzZTxhbnl8dW5kZWZpbmVkPiB7XHJcblxyXG4vLyAgICByZXR1cm4gUE9TVF9hbmRfZ2V0X0pTT04oZ191cmxbZ191cmxfZ3QyX3NhdmVdLCBvcHQpPy50aGVuKGpzb25PYmo9PntcclxuICAgIHJldHVybiBQT1NUX2FuZF9nZXRfSlNPTjMoZ191cmxbZ191cmxfZ2V0X2RhdGFdLCBvcHQpPy50aGVuKGpzb25PYmo9PntcclxuICAgICAgICBpZiAoanNvbk9iai5lY29kZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBnX21lcy5ub3JtYWxfbWVzc2FnZSgn5q2j5bi444Gr44Ot44O844OJ44GV44KM44G+44GX44GfJyk7XHJcbiBcclxuICAgICAgICAgICAgaWYgKGpzb25PYmo/LnNhdmUgID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGdfbWVzLndhcm5pbmdfbWVzc2FnZShcIuWPl+S/oeOBl+OBn+S/neWtmOODh+ODvOOCv+OBjOS4jeato+OBquW9ouW8j+OBp+OBl+OBn1xcblwiICsganNvbk9iai5lbXNnKTtcclxuICAgICAgICAgICAgICAgIF9hbGVydChqc29uT2JqLmVtc2cpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG1vbml0b3IgPSBmYWxzZTsgIC8vIGFsZXJ044Gn5Y+X5L+h44GX44Gf44OG44Kt44K544OI44KS6KGo56S644GZ44KL44Go44GN44GrdHJ1ZeOBq+OBmeOCi1xyXG4gICAgICAgICAgICBpZiAobW9uaXRvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGpzb25PYmo/LnNhdmUgICAgICAgICAgICAgICAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0X3NhdmVfaW5mbyhqc29uT2JqLnNhdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0X3NhdmVfZGV0YWlsKGpzb25PYmouc2F2ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQpIGNhbGxiYWNrKGpzb25PYmopO1xyXG4gICAgICAgICAgICByZXR1cm4ganNvbk9iajtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnX21lcy53YXJuaW5nX21lc3NhZ2UoYOODreODvOODieOBp+OBjeOBvuOBm+OCk+OBp+OBl+OBnyR7anNvbk9iai5lY29kZX1cXG5gICsganNvbk9iai5lbXNnKTtcclxuICAgICAgICAgICAgX2FsZXJ0KGpzb25PYmouZW1zZyk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG1wX3NhdmUob3B0PzogQ19VcmxPcHQsIGNhbGxiYWNrPzogVF9jYWxsYmFjayk6IFByb21pc2U8YW55fHVuZGVmaW5lZD4geyBcclxuICAgIG9wdCA/Pz0gbmV3IENfVXJsT3B0KCk7XHJcbiAgICBvcHQuc2V0KCdtb2RlJywgICAgICAgJ3RtcF9zYXZlJyk7IFxyXG4gICAgb3B0LnNldCgncGlkJywgICBnX3N0YXJ0X2Vudi5waWQpOyBcclxuICAgIG9wdC5zZXQoJ3VubycsICAgICAgICAgICAgICAgMTAwKTsgXHJcbiAgICByZXR1cm4gX19hdXRvX3NhdmUob3B0LCBjYWxsYmFjayk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50X3NhdmUob3B0PzogQ19VcmxPcHQsIGNhbGxiYWNrPzogVF9jYWxsYmFjayk6IFByb21pc2U8YW55fHVuZGVmaW5lZD4geyBcclxuICAgIG9wdCA/Pz0gbmV3IENfVXJsT3B0KCk7XHJcbiAgICBvcHQuc2V0KCdtb2RlJywgICAnaW5zdGFudF9zYXZlJyk7IFxyXG4gICAgb3B0LnNldCgncGlkJywgICBnX3N0YXJ0X2Vudi5waWQpOyBcclxuICAgIG9wdC5zZXQoJ3VubycsICAgICAgICAgICAgICAgMTAxKTsgXHJcbiAgICByZXR1cm4gX19hdXRvX3NhdmUob3B0LCBjYWxsYmFjayk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVRF9zYXZlKG9wdD86IENfVXJsT3B0LCBjYWxsYmFjaz86IFRfY2FsbGJhY2spOiBQcm9taXNlPGFueXx1bmRlZmluZWQ+IHsgXHJcbiAgICBvcHQgPz89IG5ldyBDX1VybE9wdCgpO1xyXG4gICAgb3B0LnNldCgnbW9kZScsICAgICAgICAnVURfc2F2ZScpOyBcclxuICAgIG9wdC5zZXQoJ3BpZCcsICAgZ19zdGFydF9lbnYucGlkKTsgXHJcbiAgICBvcHQuc2V0KCd1bm8nLCAgICAgICAgICAgICAgIDEwMik7IFxyXG4gICAgcmV0dXJuIF9fYXV0b19zYXZlKG9wdCwgY2FsbGJhY2spO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmVmb3JlX3NhdmUob3B0PzogQ19VcmxPcHQsIGNhbGxiYWNrPzogVF9jYWxsYmFjayk6IFByb21pc2U8YW55fHVuZGVmaW5lZD4geyBcclxuICAgIG9wdCA/Pz0gbmV3IENfVXJsT3B0KCk7XHJcbiAgICBvcHQuc2V0KCdtb2RlJywgICAgJ2JlZm9yZV9zYXZlJyk7IFxyXG4gICAgb3B0LnNldCgncGlkJywgICBnX3N0YXJ0X2Vudi5waWQpOyBcclxuICAgIG9wdC5zZXQoJ3VubycsICAgICAgICAgICAgICAgMTAzKTsgXHJcbiAgICByZXR1cm4gX19hdXRvX3NhdmUob3B0LCBjYWxsYmFjayk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmFsX3NhdmUob3B0PzogQ19VcmxPcHQsIGNhbGxiYWNrPzogVF9jYWxsYmFjayk6IFByb21pc2U8YW55fHVuZGVmaW5lZD4ge1xyXG4gICAgZ19zYXZlLmF1dG9fbW9kZSA9IGZhbHNlO1xyXG5cclxuICAgIG9wdCA/Pz0gbmV3IENfVXJsT3B0KCk7XHJcbiAgICBvcHQuc2V0KCdtb2RlJywgICAnZ2VuZXJhbF9zYXZlJyk7IFxyXG4gICAgb3B0LnNldCgncGlkJywgICBnX3N0YXJ0X2Vudi5waWQpOyBcclxuICAgIHJldHVybiBfX3NhdmUob3B0LCBjYWxsYmFjayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9fYXV0b19zYXZlKG9wdDogQ19VcmxPcHQsIGNhbGxiYWNrPzogVF9jYWxsYmFjayk6IFByb21pc2U8YW55fHVuZGVmaW5lZD4ge1xyXG4gICAgZ19zYXZlLmF1dG9fbW9kZSA9IHRydWU7XHJcbiAgICByZXR1cm4gX19zYXZlKG9wdCwgY2FsbGJhY2spO1xyXG59IFxyXG5mdW5jdGlvbiBfX3NhdmUob3B0OiBDX1VybE9wdCwgY2FsbGJhY2s/OiBUX2NhbGxiYWNrKTogUHJvbWlzZTxhbnl8dW5kZWZpbmVkPiB7IFxyXG4gICAgaWYgKCFvcHQuaXNzZXQoJ3NhdmUnKSkge1xyXG4gICAgICAgIG9wdC5zZXQoJ3NhdmUnLCBKU09OLnN0cmluZ2lmeShnX3NhdmUuZW5jb2RlKCksIG51bGwsIFwiXFx0XCIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDpgIHkv6Hjg4fjg7zjgr/jgpJjaGVja19KU09OLnBocOOBq+mAgeOBo+OBpuODgeOCp+ODg+OCr+OBmeOCi+OBqOOBjeOBq3RydWXjgavjgZnjgovjgIJcclxuICAgIGNvbnN0IG1vdmVfcGFnZSA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChtb3ZlX3BhZ2UpIHtcclxuICAgICAgICBQT1NUX2FuZF9tb3ZlX3BhZ2UoZ191cmxbZ191cmxfY2hlY2tfSlNPTl0sIG9wdCk7XHJcbiAgICB9XHJcblxyXG4vLyAgICByZXR1cm4gUE9TVF9hbmRfZ2V0X0pTT04oZ191cmxbZ191cmxfZ3QyX3NhdmVdLCBvcHQpPy50aGVuKGpzb25PYmo9PntcclxuICAgIHJldHVybiBQT1NUX2FuZF9nZXRfSlNPTjMoZ191cmxbZ191cmxfcHV0X2RhdGFdLCBvcHQpPy50aGVuKGpzb25PYmo9PntcclxuICAgICAgICBpZiAoanNvbk9iaj8uZWNvZGUgPT09IDApIHtcclxuIFxyXG4gICAgICAgICAgICBpZiAoanNvbk9iaj8uc2F2ZSAgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZ19tZXMud2FybmluZ19tZXNzYWdlKFwi5Y+X5L+h44GX44Gf5L+d5a2Y44OH44O844K/44GM5LiN5q2j44Gq5b2i5byP44Gn44GX44GfXFxuXCIgKyBqc29uT2JqLmVtc2cpO1xyXG4gICAgICAgICAgICAgICAgX2FsZXJ0KGpzb25PYmouZW1zZyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgY29uc3QgbW9uaXRvciA9IGZhbHNlOyAgLy8gYWxlcnTjgaflj5fkv6HjgZfjgZ/jg4bjgq3jgrnjg4jjgpLooajnpLrjgZnjgovjgajjgY3jgat0cnVl44Gr44GZ44KLXHJcbiAgICAgICAgICAgIGlmIChtb25pdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoanNvbk9iaj8uc2F2ZSAgICAgICAgICAgICAgICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnRfc2F2ZV9pbmZvKGpzb25PYmouc2F2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnRfc2F2ZV9kZXRhaWwoanNvbk9iai5zYXZlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgIT09IHVuZGVmaW5lZCkgY2FsbGJhY2soanNvbk9iaik7XHJcbiAgICAgICAgICAgIGdfbWVzLm5vcm1hbF9tZXNzYWdlKCfmraPluLjjgavjgrvjg7zjg5bjgZXjgozjgb7jgZfjgZ8nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGpzb25PYmo7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZ19tZXMud2FybmluZ19tZXNzYWdlKFwi44K744O844OW44Gn44GN44G+44Gb44KT44Gn44GX44GfXFxuXCIgKyBqc29uT2JqLmVtc2cpO1xyXG4gICAgICAgICAgICBfYWxlcnQoanNvbk9iai5lbXNnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KS4gY2F0Y2goZXJyPT57XHJcbiAgICAgICAgZ19tZXMud2FybmluZ19tZXNzYWdlKCdQT1NU6Kqt44G/6L6844G/44Gr5aSx5pWX44GX44G+44GX44GfKFBPU1RfQU5EX0pTT04zKScpO1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9KTtcclxuXHJcbi8vICAgIFBPU1RfYW5kX21vdmVfcGFnZShnX3VybFtnX3VybF9jaGVja19KU09OXSwgb3B0KTsgcmV0dXJuIHtlY29kZTogMH07XHJcbn1cclxuXHJcbiIsImV4cG9ydCBjb25zdCBnX3VybF9nZXRfbWF6ZSAgICA9ICAwO1xyXG5leHBvcnQgY29uc3QgZ191cmxfbmV3X21hemUgICAgPSAgMTtcclxuXHJcbmV4cG9ydCBjb25zdCBnX3VybF9hbGxfbWF6ZSAgICA9ICAyO1xyXG5leHBvcnQgY29uc3QgZ191cmxfbmV3X2d1bGQgICAgPSAgNTtcclxuZXhwb3J0IGNvbnN0IGdfdXJsX2FsbF9ocmVzICAgID0gIDY7XHJcbmV4cG9ydCBjb25zdCBnX3VybF9nZXRfc2F2ZSAgICA9ICA3O1xyXG5leHBvcnQgY29uc3QgZ191cmxfcHV0X3NhdmUgICAgPSAgODtcclxuZXhwb3J0IGNvbnN0IGdfdXJsX2FsbF9zYXZlICAgID0gIDk7XHJcbmV4cG9ydCBjb25zdCBnX3VybF9tYWlfbWF6ZSAgICA9IDEwO1xyXG5leHBvcnQgY29uc3QgZ191cmxfbWFpX2d1bGQgICAgPSAxMTtcclxuZXhwb3J0IGNvbnN0IGdfdXJsX2dldF9pbmZvICAgID0gMTI7XHJcbmV4cG9ydCBjb25zdCBnX3VybF9nZXRfZGF0YSAgICA9IDEzO1xyXG5leHBvcnQgY29uc3QgZ191cmxfcHV0X2RhdGEgICAgPSAxNTtcclxuXHJcbmV4cG9ydCBjb25zdCBnX3VybF9jaGVja19KU09OICA9IDE2O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdfdXJsX3JjZF9saXN0ICAgID0gMTc7XHJcbmV4cG9ydCBjb25zdCBnX3VybF9yY2RfbG9hZCAgICA9IDE4O1xyXG5leHBvcnQgY29uc3QgZ191cmxfcmNkX3NhdmUgICAgPSAxOTtcclxuXHJcbmV4cG9ydCBjb25zdCBnX3VybF9ndDJfZ3VsZCAgICA9IDIwO1xyXG5leHBvcnQgY29uc3QgZ191cmxfZ3QyX21hemUgICAgPSAyMTtcclxuZXhwb3J0IGNvbnN0IGdfdXJsX2d0Ml9zYXZlICAgID0gMjI7XHJcbmV4cG9ydCBjb25zdCBnX3VybDogc3RyaW5nW10gPSBuZXcgQXJyYXkoMjMpO1xyXG5cclxuZXhwb3J0IGxldCAgIGdfbXlfdXJsOiBzdHJpbmc7XHJcblxyXG5pbXBvcnQgeyBDX09uT2ZmQnV0dG9uIH0gZnJvbSAnLi4vZF9jdGwvQ19Pbk9mZkJ1dHRvbidcclxuZXhwb3J0IHZhciBnX2RlYnVnOiBDX09uT2ZmQnV0dG9uO1xyXG5cclxuaW1wb3J0IHsgQ19BbGVydExvZyB9ICAgIGZyb20gXCIuLi9kX2Ntbi9DX0FsZXJ0TG9nXCI7XHJcbmV4cG9ydCBsZXQgZ19hbGVydDogQ19BbGVydExvZztcclxuXHJcbi8vZXhwb3J0IHZhciBnX3BpZDogbnVtYmVyW10gPSBuZXcgQXJyYXkoMSkgYXMgbnVtYmVyW107XHJcblxyXG5jbGFzcyBDX1JlYWR5R2FtZXMgIHtcclxuICAgIHByb3RlY3RlZCBmbGdzOiB7W2lkOiBzdHJpbmddOiBib29sZWFufTsgXHJcbiAgICBwcm90ZWN0ZWQgZnVuYzogKCk9PnZvaWQ7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5mbGdzID0ge307XHJcbiAgICAgICAgdGhpcy5mbGdzLmxvYWRlZERPTSA9IGZhbHNlOyBcclxuICAgICAgICB0aGlzLmZsZ3MuZ2V0V2luZG93ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5mdW5jID0gKCk9Pnt9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldExvYWRlZERPTSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZsZ3MubG9hZGVkRE9NID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNoZWNrX2FuZF9kbygpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldEdldFdpbmRvdygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZsZ3MuZ2V0V2luZG93ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNoZWNrX2FuZF9kbygpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldEZ1bmN0aW9uKGZ1bmM6ICgpPT52b2lkKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5mdW5jID0gZnVuYztcclxuICAgICAgICB0aGlzLmNoZWNrX2FuZF9kbygpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGNoZWNrX2FuZF9kbygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5mdW5jID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICBmb3IgKGxldCBpaSBpbiB0aGlzLmZsZ3MpIGlmICghdGhpcy5mbGdzW2lpXSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuZnVuYygpOyBcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgZ19yZWFkeV9nYW1lcyA9IG5ldyBDX1JlYWR5R2FtZXMoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnX3N0YXJ0X2VudiA9IHttb2RlOiAnJywgcGlkOiAtMSwgb3B0OiAnJ307XHJcblxyXG5pbXBvcnQgeyBDX0Rpc3BsYXlNZXNzYWdlIH0gZnJvbSBcIi4uL2RfdmllL0NfRGlzcGxheU1lc3NhZ2VcIjtcclxuZXhwb3J0IHZhciBnX21lczogQ19EaXNwbGF5TWVzc2FnZTtcclxuXHJcbmltcG9ydCB7IENfU2F2ZURhdGEgfSAgICAgICAgIGZyb20gXCIuLi9kX21kbC9DX1NhdmVEYXRhXCI7XHJcbmV4cG9ydCBjb25zdCBnX3NhdmUgPSBuZXcgQ19TYXZlRGF0YSgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRfYWZ0ZXJfbG9hZGVkX0RPTV9pbl9jb21tb24oZGVidWdfaWQ6IHN0cmluZyA9ICdkZWJ1Z19tb2RlJywgbXNnX2lkOiBzdHJpbmcgPSAncGFuZV9zeXRtX2xvZ3MnKTogdm9pZCB7XHJcbiAgICBjb25zdCAgY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobXNnX2lkKTtcclxuICAgIGdfbWVzICA9IENfRGlzcGxheU1lc3NhZ2UuZ2V0T2JqKGNvbiwgJ2NsaWVudF9tZXNzYWdlJyk7XHJcbiAgICBnX2FsZXJ0ID0gQ19BbGVydExvZy5nZXRPYmooKTtcclxuXHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWJ1Z19pZCkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBnX2RlYnVnID0gQ19Pbk9mZkJ1dHRvbi5nZXRPYmooYnRuLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfYWxlcnQodHh0OiBzdHJpbmcsIHBhZ2Vfc2l6ZSA9IDI1MCk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0eHQubGVuZ3RoOyBpICs9IHBhZ2Vfc2l6ZSkge1xyXG4gICAgICAgIGlmICghd2luZG93LmNvbmZpcm0odHh0LnN1YnN0cmluZyhpLCBpK3BhZ2Vfc2l6ZSkpKSBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyDku6XkuIvjgIFIVE1M5YG044GL44KJ5ZG844Gz5Ye644Gb44KL6Zai5pWw44Gu5a6a576pXHJcbi8vIHdpbmRvd+OCquODluOCuOOCp+OCr+ODiOOBq+a4oeOBmeOCpOODs+OCv+ODvOODleOCp+ODvOOCueOCkuWumue+qVxyXG5pbnRlcmZhY2UgSV9Uc0NhbGwge1xyXG4gICAgZ2V0X2luaXRfZGF0YTogKHVybF9iYXNlOiBzdHJpbmcpPT52b2lkLFxyXG4gICAgc3RhcnRfZ2FtZTogICAgKG1vZGU6IHN0cmluZywgdXJsX2Jhc2U6IHN0cmluZywgcGxheWVyX2lkOiBudW1iZXIsIG9wdGlvbjogc3RyaW5nKT0+dm9pZCwgXHJcbn1cclxuLy8gd2luZG9344Kq44OW44K444Kn44Kv44OI44Gr44Kk44Oz44K/44O844OV44Kn44O844K544Gu5a6a576p44KS6L+95YqgXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgICAgIHRzQ2FsbDogSV9Uc0NhbGw7XHJcbiAgICB9XHJcbn1cclxuLy8g44Kk44Oz44K/44O844OV44Kn44O844K544Gu5a6f6KOFXHJcbi8v77yI44Gp44GG44KE44KJ44Kk44Oz44K/44O844OV44Kn44O844K544Gv44OX44Ot44OR44OG44Kj5a6a576p44Gu44Kq44OW44K444Kn44Kv44OI44Gr44Gq44Gj44Gm44KL44KJ44GX44GE77yJXHJcbmNvbnN0IHRzQ2FsbGVyOiBJX1RzQ2FsbCA9ICgoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldF9pbml0X2RhdGE6IChteV91cmw6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICBnX215X3VybCA9IG15X3VybDtcclxuICAgICAgICAgICAgY29uc3QgdXJsX3RvcCA9IHBhcmVudF91cmwobXlfdXJsKTtcclxuICAgICAgICAgICAgY29uc3QgZXhwX3RvcCA9IHBhcmVudF91cmwodXJsX3RvcCkgKyBcIi9tYWlleFwiO1xyXG5cclxuICAgICAgICAgICAgZ191cmxbZ191cmxfZ3QyX3NhdmVdICAgPSB1cmxfdG9wICsgXCIvX0pTT05fbWFpX3NhdmUucGhwXCI7XHJcbiAgICAgICAgICAgIGdfdXJsW2dfdXJsX2d0Ml9tYXplXSAgID0gdXJsX3RvcCArIFwiL19KU09OX21haV9tYXplLnBocFwiO1xyXG4gICAgICAgICAgICBnX3VybFtnX3VybF9ndDJfZ3VsZF0gICA9IHVybF90b3AgKyBcIi9fSlNPTl9tYWlfZ3VsZC5waHBcIjtcclxuXHJcbiAgICAgICAgICAgIGdfdXJsW2dfdXJsX21haV9tYXplXSAgID0gdXJsX3RvcCArIFwiL21haV9tYXplLnBocFwiO1xyXG4gICAgICAgICAgICBnX3VybFtnX3VybF9tYWlfZ3VsZF0gICA9IHVybF90b3AgKyBcIi9tYWlfZ3VsZC5waHBcIjtcclxuXHJcbiAgICAgICAgICAgIGdfdXJsW2dfdXJsX25ld19tYXplXSAgID0gZXhwX3RvcCArIFwiL21hemUvbmV3TWF6ZVwiO1xyXG4gICAgICAgICAgICBnX3VybFtnX3VybF9nZXRfbWF6ZV0gICA9IGV4cF90b3AgKyBcIi9tYXplL2dldE1hemVcIjtcclxuICAgICAgICAgICAgZ191cmxbZ191cmxfYWxsX21hemVdICAgPSBleHBfdG9wICsgXCIvbWF6ZS9hbGxNYXplXCI7XHJcbiAgICAgICAgICAgIGdfdXJsW2dfdXJsX25ld19ndWxkXSAgID0gZXhwX3RvcCArIFwiL2d1bGQvbmV3R3VsZFwiO1xyXG4gICAgICAgICAgICBnX3VybFtnX3VybF9hbGxfaHJlc10gICA9IGV4cF90b3AgKyBcIi9ndWxkL2FsbEhyZXNcIjtcclxuXHJcbiAgICAgICAgICAgIGdfdXJsW2dfdXJsX2dldF9pbmZvXSAgID0gZXhwX3RvcCArIFwiL2xkc3YvX2luZm9cIjtcclxuICAgICAgICAgICAgZ191cmxbZ191cmxfZ2V0X2RhdGFdICAgPSBleHBfdG9wICsgXCIvbGRzdi9fbG9hZFwiO1xyXG4gICAgICAgICAgICBnX3VybFtnX3VybF9wdXRfZGF0YV0gICA9IGV4cF90b3AgKyBcIi9sZHN2L19zYXZlXCI7XHJcblxyXG4gICAgICAgICAgICBnX3VybFtnX3VybF9jaGVja19KU09OXSA9IHVybF90b3AgKyBcIi9jaGVja19KU09OLnBocFwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5pqr5a6a54mI6ZaL5aeL5Yem55CGXHJcbiAgICAgICAgc3RhcnRfZ2FtZTogKG1vZGU6IHN0cmluZywgbXlfdXJsOiBzdHJpbmcsIHBsYXllcl9pZDogbnVtYmVyLCBvcHQ6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICB0c0NhbGxlci5nZXRfaW5pdF9kYXRhKG15X3VybCk7IFxyXG4gICAgICAgICAgICBnX3N0YXJ0X2Vudi5tb2RlID0gbW9kZTsgXHJcbiAgICAgICAgICAgIGdfc3RhcnRfZW52LnBpZCAgPSBwbGF5ZXJfaWQ7IFxyXG4gICAgICAgICAgICBnX3N0YXJ0X2Vudi5vcHQgID0gb3B0OyBcclxuXHJcbiAgICAgICAgICAgIGdfcmVhZHlfZ2FtZXMuc2V0R2V0V2luZG93KCk7IFxyXG4gICAgICAgIH0gXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gcGFyZW50X3VybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBsZXQgcmUgPSAvXFwvW15cXC9dKz8kLztcclxuICAgIHJldHVybiB1cmwucmVwbGFjZShyZSwgJycpO1xyXG59XHJcblxyXG4vLyB3aW5kb3fjgqrjg5bjgrjjgqfjgq/jg4jjgavov73liqDjgZfjgZ/jgqTjg7Pjgr/jg7zjg5Xjgqfjg7zjgrnjgavkuIroqJjjga7lrp/oo4XjgpLku6PlhaVcclxud2luZG93LnRzQ2FsbCA9IHRzQ2FsbGVyO1xyXG5cclxuLy8g44GT44KM44GnSFRNTOWBtOOBrnNjcmlwdOOCv+OCsOWGheOBi+OCiSA8c2NyaXB0PndpbmRvd3MudHNDYWxsLmdldHBsYXllcigxKTs8L3NjcmlwdD5cclxuLy8g44G/44Gf44GE44Gr5ZG844Gz5Ye644Gb44KL44CC44Gf44Gg44GX44CBYnVuZGxlLmpz44Guc2NyaXB044K/44Kw44GndHlwZeWxnuaAp+OCkm1vZHVsZeOBq+OBl+OBpuOBhOOCi+OBqOWkseaVl+OBmeOCi+OAglxyXG5cclxuXHJcbiIsImltcG9ydCB7IF9jZWlsLCBfZmxvb3IsIF9pc051bSB9IGZyb20gXCIuLi9kX3V0bC9GX01hdGhcIjtcclxuaW1wb3J0IHsgX2FsZXJ0IH0gICAgICAgICAgICAgICAgZnJvbSBcIi4uL2RfY21uL2dsb2JhbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENfQ3RsQ3Vyc29yIHtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgbWU6IHtbaWQ6IHN0cmluZ106IENfQ3RsQ3Vyc29yfTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX2lkOiAgIHN0cmluZztcclxuICAgIHByb3RlY3RlZCBfbGlzdDogSFRNTEVsZW1lbnR8dW5kZWZpbmVkO1xyXG4gICAgcHJvdGVjdGVkIF9sZW5nOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgX2NvbHM6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBfaW5keDogbnVtYmVyO1xyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihsaXN0PzogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBDX0N0bEN1cnNvci5tZSA/Pz0ge31cclxuXHJcbiAgICAgICAgdGhpcy5faWQgICA9ICdfX2RteV9fJztcclxuICAgICAgICB0aGlzLl9saXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuX2xlbmcgPSAwO1xyXG4gICAgICAgIHRoaXMuX2NvbHMgPSAxO1xyXG4gICAgICAgIHRoaXMuX2luZHggPSAwO1xyXG4gICAgICAgIENfQ3RsQ3Vyc29yLm1lW3RoaXMuX2lkXSA9IHRoaXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE9iaihsaXN0PzogSFRNTEVsZW1lbnQpOiBDX0N0bEN1cnNvciAge1xyXG4gICAgICAgIHRoaXMubWUgPz89IHt9XHJcblxyXG4gICAgICAgIGNvbnN0IGlkID0gbGlzdCAhPT0gdW5kZWZpbmVkID8gbGlzdC5pZCA6ICdfX2RteV9fJztcclxuICAgICAgICB0aGlzLm1lW2lkXSA/Pz0gbmV3IENfQ3RsQ3Vyc29yKGxpc3QpO1xyXG5cclxuICAgICAgICBpZiAobGlzdCAhPT0gdW5kZWZpbmVkKSB0aGlzLm1lW2lkXS5zZXQobGlzdCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVbaWRdO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldChsaXN0OiBIVE1MRWxlbWVudCk6IENfQ3RsQ3Vyc29yIHtcclxuICAgICAgICB0aGlzLl9pZCAgID0gbGlzdC5pZDtcclxuICAgICAgICB0aGlzLl9saXN0ID0gbGlzdDtcclxuICAgICAgICB0aGlzLl9sZW5nID0gdGhpcy5fX2dldF9sZW5nKCk7XHJcbiAgICAgICAgdGhpcy5fY29scyA9IHRoaXMuX19nZXRfY29scygpO1xyXG4gICAgICAgIHRoaXMuX2luZHggPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmhpZ2hfbGlnaHRfb24oKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdWlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGxlbmcoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGVuZztcclxuICAgIH1cclxuICAgIHB1YmxpYyByb3dzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19nZXRfcm93cygpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNvbHMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29scztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZHg7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BvcyhpbmR4OiBudW1iZXIpOiBDX0N0bEN1cnNvciB7XHJcbiAgICAgICAgaWYgKGluZHggPCAgMCkgaW5keCA9IDA7XHJcbiAgICAgICAgaWYgKGluZHggPj0gdGhpcy5fbGVuZykgaW5keCA9IHRoaXMuX2xlbmcgLSAxO1xyXG5cclxuICAgICAgICB0aGlzLl9pbmR4ID0gaW5keDsgdGhpcy5oaWdoX2xpZ2h0X29uKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvc19VKCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xpc3QgPT09IHVuZGVmaW5lZCkgcmV0dXJuIDA7XHJcblxyXG4gICAgICAgIGxldCAgIGluZHggPSB0aGlzLl9pbmR4O1xyXG4gICAgICAgIGNvbnN0IHJvd3MgPSB0aGlzLl9fZ2V0X3Jvd3MoKTtcclxuICAgICAgICBjb25zdCBjdXJfcm93ICAgPSBpbmR4ICUgcm93cztcclxuICAgICAgICBpZiAoY3VyX3JvdyAhPT0gMCkge1xyXG4gICAgICAgICAgICAvLyDmnIDkuIrmrrUo5LiK56uvKeS7peWkllxyXG4gICAgICAgICAgICAtLWluZHg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g5pyA5LiK5q61KOS4iuerrylcclxuICAgICAgICAgICAgaW5keCArPSByb3dzIC0gMTtcclxuICAgICAgICAgICAgd2hpbGUgKGluZHggPiB0aGlzLl9sZW5nIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgLS1pbmR4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICB0aGlzLl9pbmR4ID0gaW5keDsgdGhpcy5oaWdoX2xpZ2h0X29uKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZHg7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcG9zX0QoKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAodGhpcy5fbGlzdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gMDtcclxuXHJcbiAgICAgICAgbGV0ICAgaW5keCA9IHRoaXMuX2luZHg7XHJcbiAgICAgICAgY29uc3Qgcm93cyA9IHRoaXMuX19nZXRfcm93cygpO1xyXG4gICAgICAgIGNvbnN0IGN1cl9yb3cgPSBpbmR4ICUgcm93cztcclxuICAgICAgICBpZiAoY3VyX3JvdyAhPT0gcm93cyAtIDEgJiYgaW5keCAhPT0gdGhpcy5fbGVuZyAtIDEpIHtcclxuICAgICAgICAgICAgLy8g5pyA5LiL5q61KOS4i+errynku6XlpJZcclxuICAgICAgICAgICAgKytpbmR4O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOacgOS4i+autSjkuIvnq68pXHJcbiAgICAgICAgICAgIGluZHggLT0gcm93cyAtIDE7XHJcbiAgICAgICAgICAgIHdoaWxlIChpbmR4ICUgcm93cyAhPT0gMCAmJiBpbmR4IDwgdGhpcy5fbGVuZyAtIDEpIHtcclxuICAgICAgICAgICAgICAgICsraW5keDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgdGhpcy5faW5keCA9IGluZHg7IHRoaXMuaGlnaF9saWdodF9vbigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbmR4O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHBvc19MKCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xpc3QgPT09IHVuZGVmaW5lZCkgcmV0dXJuIDA7XHJcblxyXG4gICAgICAgIGxldCAgIGluZHggPSB0aGlzLl9pbmR4O1xyXG4gICAgICAgIGNvbnN0IHJvd3MgPSB0aGlzLl9fZ2V0X3Jvd3MoKTtcclxuICAgICAgICBpZiAoaW5keCAgPiByb3dzIC0gMSkge1xyXG4gICAgICAgICAgICAvLyDmnIDliY3liJco5bem56uvKeS7peWkllxyXG4gICAgICAgICAgICBpbmR4IC09IHJvd3M7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g5pyA5YmN5YiXKOW3puerrylcclxuICAgICAgICAgICAgY29uc3QgICB2dXJ0dWFsX2xpc3RfbGVuZyA9IHRoaXMuX2NvbHMgKiByb3dzO1xyXG4gICAgICAgICAgICBpbmR4ICs9IHZ1cnR1YWxfbGlzdF9sZW5nIC0gcm93cztcclxuICAgICAgICAgICAgd2hpbGUgKGluZHggPiB0aGlzLl9sZW5nIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgaW5keCAtPSByb3dzO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZHggPCAwKSB7aW5keCA9IDA7IGJyZWFrO31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgdGhpcy5faW5keCA9IGluZHg7IHRoaXMuaGlnaF9saWdodF9vbigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbmR4O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHBvc19SKCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xpc3QgPT09IHVuZGVmaW5lZCkgcmV0dXJuIDA7XHJcblxyXG4gICAgICAgIGxldCAgIGluZHggPSB0aGlzLl9pbmR4O1xyXG4gICAgICAgIGNvbnN0IHJvd3MgPSB0aGlzLl9fZ2V0X3Jvd3MoKTtcclxuICAgICAgICBpZiAoaW5keCAgPCB0aGlzLl9sZW5nIC0gcm93cykgeyBcclxuICAgICAgICAgICAgLy8g5pyA57WC5YiXKOWPs+errynku6XlpJZcclxuICAgICAgICAgICAgaW5keCArPSByb3dzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOacgOe1guWIlyjlj7Pnq68pXHJcbiAgICAgICAgICAgIGNvbnN0ICAgb2xkX2luZHggPSBpbmR4O1xyXG4gICAgICAgICAgICBjb25zdCAgIHZ1cnR1YWxfbGlzdF9sZW5nID0gdGhpcy5fY29scyAqIHJvd3M7XHJcbiAgICAgICAgICAgIGluZHggLT0gdnVydHVhbF9saXN0X2xlbmcgLSByb3dzO1xyXG4gICAgICAgICAgICBpZiAoaW5keCA8IDApIHtcclxuICAgICAgICAgICAgICAgIGluZHggKz0gcm93cztcclxuICAgICAgICAgICAgICAgIGlmIChpbmR4IDwgMCB8fCBpbmR4ID4gdGhpcy5fbGVuZyAtIDEpIGluZHggPSBfZmxvb3IoKG9sZF9pbmR4ICsgMSkgLyB0aGlzLl9jb2xzLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgdGhpcy5faW5keCA9IGluZHg7IHRoaXMuaGlnaF9saWdodF9vbigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbmR4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcm90ZWN0ZWQgX19nZXRfcm93cygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBfY2VpbCh0aGlzLl9sZW5nIC8gdGhpcy5fY29scywgMCk7XHJcbiAgICB9XHJcbiAgICAvLyBET03jg6rjgrnjg4jkuIDopqfjga7ooYzmlbDjga7lj5blvpdcclxuICAgIHByb3RlY3RlZCBfX2dldF9sZW5nKCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xpc3QgPT09IHVuZGVmaW5lZCkgcmV0dXJuIDA7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3QuY2hpbGRyZW4ubGVuZ3RoOyBcclxuICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBET03jg6rjgrnjg4jkuIDopqfjga7liJfmlbAoQ1NT44GL44KJ5Y+W5b6XKeOBruWPluW+l1xyXG4gICAgcHJvdGVjdGVkICBfX2dldF9jb2xzKCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xpc3QgPT09IHVuZGVmaW5lZCkgcmV0dXJuIDA7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGNvbHMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9saXN0KS5jb2x1bW5Db3VudDtcclxuICAgICAgICAgICAgcmV0dXJuIF9pc051bShjb2xzKSA/IE51bWJlcihjb2xzKSA6IDE7IFxyXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDjg6Hjg4vjg6Xjg7zjga7jg4fjg5Xjgqnjg6vjg4jmk43kvZwo44OP44Kk44Op44Kk44OI44Go6Kmz57Sw6KGo56S65Yi25b6hKVxyXG4gICAgcHVibGljIGhpZ2hfbGlnaHRfb24oKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xpc3QgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2xpc3QuY2hpbGRyZW47XHJcbiAgICAgICAgY29uc3QgbGVuICAgICAgPSBjaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luZHggPCAwIHx8IHRoaXMuX2luZHggPiBsZW4gLSAxKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbGkgPSBjaGlsZHJlbi5pdGVtKGkpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICB0aGlzLl9faGlnaF9saWdodF9vbihsaSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsaSA9IGNoaWxkcmVuLml0ZW0odGhpcy5faW5keCkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5fX2hpZ2hfbGlnaHRfb24obGksIHRydWUpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhpZ2hfbGlnaHRfb2ZmKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9saXN0ID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLl9saXN0LmNoaWxkcmVuO1xyXG4gICAgICAgIGNvbnN0IGxlbiAgICAgID0gY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbGkgPSBjaGlsZHJlbi5pdGVtKGkpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICB0aGlzLl9faGlnaF9saWdodF9vbihsaSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2hpZ2hfbGlnaHRfb24oZWxtOiBIVE1MRWxlbWVudCB8IG51bGwsIGlzT246IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBpZiAoZWxtID09PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgcGVyZW50U3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbG0ucGFyZW50RWxlbWVudCA/PyBlbG0pO1xyXG5cclxuICAgICAgICBjb25zdCBmd19jb2xvciA9IHBlcmVudFN0eWxlLmNvbG9yO1xyXG4gICAgICAgIGNvbnN0IGJnX2NvbG9yID0gcGVyZW50U3R5bGUuYmFja2dyb3VuZENvbG9yO1xyXG5cclxuICAgICAgICBlbG0uc3R5bGUuY29sb3IgICAgICAgICAgID0gaXNPbiA/IGJnX2NvbG9yIDogZndfY29sb3I7XHJcbiAgICAgICAgZWxtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGlzT24gPyBmd19jb2xvciA6IGJnX2NvbG9yO1xyXG5cclxuICAgICAgICBlbG0uc3R5bGUuZm9udFdlaWdodCA9ICBpc09uID8gJ2JvbGQnIDogJ25vcm1hbCc7XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBlbG0uY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcCA9IGVsbS5jaGlsZHJlbi5pdGVtKGopIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoaXNPbikge1xyXG4gICAgICAgICAgICAgICAgcC5zdHlsZS5mb250V2VpZ2h0ICAgICAgPSAnbm9ybWFsJztcclxuICAgICAgICAgICAgICAgIHAuc3R5bGUuY29sb3IgICAgICAgICAgID0gZndfY29sb3I7XHJcbiAgICAgICAgICAgICAgICBwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJnX2NvbG9yO1xyXG4gICAgICAgICAgICAgICAgcC5zdHlsZS5kaXNwbGF5ICAgICAgICAgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcC5zdHlsZS5kaXNwbGF5ICAgICAgICAgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWxlcnQoKTogdm9pZCB7XHJcbiAgICAgICAgX2FsZXJ0KFxyXG4gICAgICAgICAgICAgIFwiQ3RsQ3Vyc29yOiBcIlxyXG4gICAgICAgICAgICArIFwiXFxuaWQgICA9IFwiICsgdGhpcy5faWRcclxuICAgICAgICAgICAgKyBcIlxcbmluZHggPSBcIiArIHRoaXMuX2luZHhcclxuICAgICAgICAgICAgKyBcIlxcbmxlbmcgPSBcIiArIHRoaXMuX2xlbmdcclxuICAgICAgICAgICAgKyBcIlxcbmNvbHMgPSBcIiArIHRoaXMuX2NvbHNcclxuICAgICAgICApXHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7IF9nZXRfdXVpZCB9IGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuXHJcbnR5cGUgIFRfT25PZmZPcHRpb24gPSB7XHJcbiAgICB5bj86ICAgICAgIGJvb2xlYW4sXHJcbiAgICBvbk5hbWU/OiAgIHN0cmluZyxcclxuICAgIG9mZk5hbWU/OiAgc3RyaW5nLFxyXG4gICAgb25DbGFzcz86ICBzdHJpbmcsXHJcbiAgICBvZmZDbGFzcz86IHN0cmluZyxcclxuICAgIGZuYz86ICAgICAgX1RfRm5jLFxyXG59XHJcblxyXG50eXBlICBfVF9Pbk9mZk9wdGlvbiA9IHtcclxuICAgIG9uTmFtZTogICAgc3RyaW5nLFxyXG4gICAgb2ZmTmFtZTogICBzdHJpbmcsXHJcbiAgICBvbkNsYXNzOiAgIHN0cmluZyxcclxuICAgIG9mZkNsYXNzOiAgc3RyaW5nLFxyXG4gICAgZm5jPzogICAgICBfVF9GbmMsXHJcbn1cclxuXHJcbnR5cGUgX1RfRm5jID0gKHluOiBib29sZWFuKT0+KHZvaWR8Ym9vbGVhbik7XHJcblxyXG5leHBvcnQgY2xhc3MgQ19Pbk9mZkJ1dHRvbiB7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIG1lOiB7W2lkOiBzdHJpbmddOiBDX09uT2ZmQnV0dG9ufTtcclxuXHJcbiAgICBwdWJsaWMgICAgc3RhdGljIGdldE9iaihlbG06IEhUTUxCdXR0b25FbGVtZW50LCBvb28/OiBUX09uT2ZmT3B0aW9uKTogQ19Pbk9mZkJ1dHRvbiB7XHJcbiAgICAgICAgdGhpcy5tZSA/Pz0ge307XHJcbiAgICAgICAgdGhpcy5tZVtlbG0uaWRdID8/PSBuZXcgQ19Pbk9mZkJ1dHRvbihlbG0sIG9vbyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVbZWxtLmlkXTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgeW46ICBib29sZWFuO1xyXG4gICAgcHJvdGVjdGVkIGVsbTogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBwcm90ZWN0ZWQgb29vOiBfVF9Pbk9mZk9wdGlvbjtcclxuICAgIHByb3RlY3RlZCBkZWZfb29vOiBfVF9Pbk9mZk9wdGlvbiA9IHtcclxuICAgICAgICBvbk5hbWU6ICAgJ09OJyxcclxuICAgICAgICBvZmZOYW1lOiAgJ29mZicsXHJcbiAgICAgICAgb25DbGFzczogICdfdG9nZ2xlX29uJyxcclxuICAgICAgICBvZmZDbGFzczogJ190b2dnbGVfb2ZmJyxcclxuICAgIH07XHJcbiAgICBwcm90ZWN0ZWQgZm5jOiB7W2lkOiBzdHJpbmddOiBfVF9GbmN9O1xyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihlbG06IEhUTUxCdXR0b25FbGVtZW50LCBvb28/OiBUX09uT2ZmT3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5mbmMgPSB7fTtcclxuICAgICAgICB0aGlzLm9vbyA9IHRoaXMuZGVmX29vbztcclxuICAgICAgICB0aGlzLnluICA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoZWxtLm5hbWUgPT09IHVuZGVmaW5lZCB8fCBlbG0ubmFtZSA9PT0gJycpIGVsbS5uYW1lID0gZWxtLmlkO1xyXG4gICAgICAgIHRoaXMuZWxtID0gZWxtO1xyXG4gICAgICAgIHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQ6TW91c2VFdmVudCk9Pnt0aGlzLnRvZ2dsZSgpO30sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgaWYgKG9vbyAhPT0gdW5kZWZpbmVkKSB0aGlzLnNldE9iaihvb28pOyBcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRPYmoob29vOiBUX09uT2ZmT3B0aW9uKTogQ19Pbk9mZkJ1dHRvbiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy55biAgPSBvb28ueW4gPz8gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9vbyA9IG9vbyBhcyBfVF9Pbk9mZk9wdGlvbjsgXHJcbiAgICAgICAgICAgIHRoaXMub29vLm9uTmFtZSAgID8/PSB0aGlzLmRlZl9vb28ub25OYW1lOyBcclxuICAgICAgICAgICAgdGhpcy5vb28ub2ZmTmFtZSAgPz89IHRoaXMuZGVmX29vby5vZmZOYW1lOyBcclxuICAgICAgICAgICAgdGhpcy5vb28ub25DbGFzcyAgPz89IHRoaXMuZGVmX29vby5vbkNsYXNzOyBcclxuICAgICAgICAgICAgdGhpcy5vb28ub2ZmQ2xhc3MgPz89IHRoaXMuZGVmX29vby5vZmZDbGFzczsgXHJcbiAgICAgICAgICAgIHRoaXMuX3NldFN0eWxlKHRoaXMueW4pO1xyXG4gICAgICAgIH0gY2F0Y2gge31cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfc2V0U3R5bGUoeW46IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnluICAgPSB5bjtcclxuICAgICAgICBjb25zdCBvb28gPSB0aGlzLm9vbztcclxuICAgICAgICB0aGlzLmVsbS52YWx1ZSA9IHluPydvbic6J29mZic7XHJcbiAgICAgICAgdGhpcy5lbG0uaW5uZXJIVE1MID0geW4gPyBvb28ub25OYW1lIDogb29vLm9mZk5hbWU7XHJcbiAgICAgICAgdGhpcy5lbG0uY2xhc3NMaXN0LnJlbW92ZSh5bj8gb29vLm9mZkNsYXNzIDogb29vLm9uQ2xhc3MpO1xyXG4gICAgICAgIHRoaXMuZWxtLmNsYXNzTGlzdC5hZGQgICAoeW4/IG9vby5vbkNsYXNzICA6IG9vby5vZmZDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE9OKCk6ICAgYm9vbGVhbiB7cmV0dXJuIHRoaXMuX3NldFlOKHRydWUpID8/IGZhbHNlfTtcclxuICAgIHB1YmxpYyBzZXRPRkYoKTogIGJvb2xlYW4ge3JldHVybiB0aGlzLl9zZXRZTihmYWxzZSkgPz8gZmFsc2V9O1xyXG4gICAgcHVibGljIHRvZ2dsZSgpOiAgYm9vbGVhbiB7cmV0dXJuIHRoaXMuX3NldFlOKCF0aGlzLnluKSA/PyBmYWxzZX1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX3NldFlOKHluOiBib29sZWFuKTogYm9vbGVhbnx2b2lkIHtcclxuICAgICAgICB0aGlzLl9zZXRTdHlsZSh5bik7XHJcblxyXG4gICAgICAgIGxldCB0Zjpib29sZWFufHZvaWQgID0gdHJ1ZTsgXHJcbiAgICAgICAgZm9yIChjb25zdCBpIGluIHRoaXMuZm5jKSB0ZiAmJj0gdGhpcy5mbmNbaV0oeW4pOyBcclxuICAgICAgICByZXR1cm4gdGY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlkKCk6ICAgICAgc3RyaW5nICB7cmV0dXJuIHRoaXMuZWxtLmlkfTtcclxuICAgIHB1YmxpYyBpc09OKCk6ICAgIGJvb2xlYW4ge3JldHVybiB0aGlzLnluO31cclxuXHJcbiAgICBwdWJsaWMgYWRkRm5jKGZuYzogX1RfRm5jKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBpZCA9ICdvb2Z1bmNfJyArIF9nZXRfdXVpZCgpO1xyXG4gICAgICAgIHRoaXMuZm5jW2lkXSA9IGZuYztcclxuICAgICAgICByZXR1cm4gaWQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcm12Rm5jKGZuYzogX1RfRm5jfHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZm5jID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5mbmNbZm5jXTsgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfWNhdGNoKGVycil7cmV0dXJuIGZhbHNlfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5mbmMpIGlmIChmbmMgPT09IHRoaXMuZm5jW2ldKSB7ZGVsZXRlIHRoaXMuZm5jW2ldOyByZXR1cm4gdHJ1ZX1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBJX0xvY2F0ZSwgVF9MY2tkIH0gICAgICBmcm9tIFwiLi9DX0xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IElfSlNPTl9VbmlxLCBKU09OX0FueSB9IGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuaW1wb3J0IHsgQ19IZXJvLCBKU09OX0hlcm8gfSAgICAgZnJvbSBcIi4vQ19IZXJvXCI7XHJcbmltcG9ydCB7IF9nZXRfdXVpZCB9ICAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuaW1wb3J0IHsgQ19Hb29kc0xpc3QsIEpTT05fR29vZHNMaXN0IH0gZnJvbSBcIi4vQ19Hb29kc0xpc3ROR1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX0d1aWxkIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgaWQ/OiAgICAgICBudW1iZXIsXHJcbiAgICB1bmlxX2lkPzogIHN0cmluZyxcclxuICAgIHNhdmVfaWQ/OiAgbnVtYmVyLFxyXG4gICAgbmFtZT86ICAgICBzdHJpbmcsXHJcbiAgICBnb2xkPzogICAgIG51bWJlcixcclxuICAgIGdvb2RzPzogICAgSlNPTl9Hb29kc0xpc3QsXHJcbiAgICBoZXJvZXM/OiAgIEpTT05fSGVyb1tdLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfZ3VsZF9pbmZvKGE6IEpTT05fR3VpbGR8dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydChcIkd1aWxkIEluZm86XCIgXHJcbiAgICAgICAgKyBcIlxcbmlkOiAgICAgICBcIiArIChhLmlkICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnVuaXFfaWQ6ICBcIiArIChhLnVuaXFfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNhdmVfaWQ6ICBcIiArIChhLnNhdmVfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbm5hbWU6ICAgICBcIiArIChhLm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmdvbGQ6ICAgICBcIiArIChhLmdvbGQgICAgICA/PyAgMCApXHJcbi8vICAgICAgICArIFwiXFxuZ29vZHM6ICAgIFwiICsgKE9iamVjdC5rZXlzKGEuZ29vZHM/PzApLmxlbmd0aClcclxuICAgICAgICArIFwiXFxuaGVyb2VzOiAgIFwiICsgKGEuaGVyb2VzPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfR3VpbGQgaW1wbGVtZW50cyBJX0xvY2F0ZSwgSV9KU09OX1VuaXEge1xyXG4gICAgcHJvdGVjdGVkIGlkOiAgICAgICAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCB1bmlxX2lkOiAgICBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgc2F2ZV9pZDogICAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIG5hbWU6ICAgICAgIHN0cmluZztcclxuICAgIHB1YmxpYyAgICBnb2xkOiAgICAgICBudW1iZXI7XHJcbi8vICAgIHB1YmxpYyAgICBnb29kczogICAgICBDX0dvb2RzTGlzdDtcclxuICAgIHByb3RlY3RlZCBoZXJvZXM6ICAgICB7W3VpZDogc3RyaW5nXTogQ19IZXJvfTtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihhPzogSlNPTl9HdWlsZCkge1xyXG4gICAgICAgIHRoaXMuaWQgICAgICAgICA9IC0xO1xyXG4gICAgICAgIHRoaXMudW5pcV9pZCAgICA9ICdtYWlfZ3VsZCMnICsgX2dldF91dWlkKCk7XHJcbiAgICAgICAgdGhpcy5zYXZlX2lkICAgID0gLTE7XHJcbiAgICAgICAgdGhpcy5uYW1lICAgICAgID0gJyc7XHJcbiAgICAgICAgdGhpcy5nb2xkICAgICAgID0gIDA7XHJcbi8vICAgICAgICB0aGlzLmdvb2RzICAgICAgPSBuZXcgQ19Hb29kc0xpc3QoKTtcclxuICAgICAgICB0aGlzLmhlcm9lcyAgICAgPSB7fTtcclxuICAgICAgICBpZiAoYSAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdWlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnVuaXFfaWR9XHJcbiAgICBwdWJsaWMgZ2V0X2xja2QoKTogVF9MY2tkIHtyZXR1cm4gVF9MY2tkLk1hemV9XHJcbiAgICBwdWJsaWMgZ2V0X25hbWUoKTogc3RyaW5nIHtyZXR1cm4gdGhpcy5uYW1lfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgaHJlcygpOiAgQ19IZXJvW10ge1xyXG4gICAgICAgIGNvbnN0IGhyZXM6IENfSGVyb1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaWkgaW4gdGhpcy5oZXJvZXMpIGhyZXMucHVzaCh0aGlzLmhlcm9lc1tpaV0pO1xyXG4gICAgICAgIHJldHVybiBocmVzO1xyXG4gICAgfSBcclxuICAgIHB1YmxpYyBjbGVhcl9ocmVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGVyb2VzID0ge307XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRkX2hlcm8oaGVybzogQ19IZXJvKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZXJvZXNbaGVyby51aWQoKV0gPSBoZXJvO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJtdl9oZXJvKGhlcm86IENfSGVybyk6IHZvaWQge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmhlcm9lc1toZXJvLnVpZCgpXTtcclxuICAgIH1cclxuXHJcbi8qXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fb2JqX3RvX3N0cmluZyhvYTogQ19HdWlsZCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9hLCBudWxsLCBcIlxcdFwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9vYmpBcnJheV90b19zdHJpbmcob2FhOiB7W3VpZDogc3RyaW5nXTogQ19HdWlsZH0pOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IG9hID0gW10gYXMgQ19HdWlsZFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gb2FhKSBvYS5wdXNoKG9hYVtpaV0pO1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYSwgbnVsbCwgXCJcXHRcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fc3RyaW5nX3RvX29iaih0eHQ6IHN0cmluZyk6IENfR3VpbGQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGogICA9IEpTT04ucGFyc2UodHh0KSBhcyBKU09OX0d1aWxkW107XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ19HdWlsZChqKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDX0d1aWxkKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdfdG9fb2JqQXJyYXkodHh0OiBzdHJpbmcpOiB7W3VpZDogc3RyaW5nXTogQ19HdWlsZH0ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGogICA9IEpTT04ucGFyc2UodHh0KSBhcyBKU09OX0d1aWxkW107XHJcbiAgICAgICAgICAgIGNvbnN0IG1wYSA9IHt9IGFzIHtbaWQ6IHN0cmluZ106IENfR3VpbGR9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGpqIG9mIGopIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFhYSA9IG5ldyBDX0d1aWxkKCkuZGVjb2RlKGpqKTtcclxuICAgICAgICAgICAgICAgIG1wYVthYWEudWlkKCldID0gYWFhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtcGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4qL1xyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9HdWlsZCB7XHJcbiAgICAgICAgY29uc3QganNvbl9oZXJvZXM6IEpTT05fSGVyb1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaWkgaW4gdGhpcy5oZXJvZXMpIGpzb25faGVyb2VzLnB1c2godGhpcy5oZXJvZXNbaWldLmVuY29kZSgpKTsgIFxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogICAgICB0aGlzLmlkLFxyXG4gICAgICAgICAgICB1bmlxX2lkOiB0aGlzLnVuaXFfaWQsXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6IHRoaXMuc2F2ZV9pZCxcclxuICAgICAgICAgICAgZ29sZDogICAgdGhpcy5nb2xkLFxyXG4vLyAgICAgICAgICAgIGdvb2RzOiAgIHRoaXMuZ29vZHMuZW5jb2RlKCksXHJcbiAgICAgICAgICAgIGhlcm9lczogIGpzb25faGVyb2VzLFxyXG4gICAgICAgICAgICBuYW1lOiAgICB0aGlzLm5hbWUsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX0d1aWxkfHVuZGVmaW5lZCk6IENfR3VpbGQge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChhLmlkICAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMuaWQgICAgICAgICA9IGEuaWQ7XHJcbiAgICAgICAgaWYgKGEudW5pcV9pZCAgIT09IHVuZGVmaW5lZCkgdGhpcy51bmlxX2lkICAgID0gYS51bmlxX2lkO1xyXG4gICAgICAgIGlmIChhLnNhdmVfaWQgICE9PSB1bmRlZmluZWQpIHRoaXMuc2F2ZV9pZCAgICA9IGEuc2F2ZV9pZDtcclxuICAgICAgICBpZiAoYS5uYW1lICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm5hbWUgICAgICAgPSBhLm5hbWU7XHJcbiAgICAgICAgaWYgKGEuZ29sZCAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5nb2xkO1xyXG4vLyAgICAgICAgaWYgKGEuZ29vZHMgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5nb29kcy5kZWNvZGUgKGEuZ29vZHMpO1xyXG5cclxuICAgICAgICBpZiAoYS5oZXJvZXMgIT09IHVuZGVmaW5lZCkgIHtcclxuICAgICAgICAgICAgdGhpcy5oZXJvZXMgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqc29uX2hlcm8gb2YgYS5oZXJvZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlcm8gPSBuZXcgQ19IZXJvKGpzb25faGVybyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlcm9lc1toZXJvLnVpZCgpXSA9IGhlcm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGVuY29kZV9hbGwoYWxsX2d1bGQ6IENfR3VpbGRbXSk6IEpTT05fR3VpbGRbXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX2d1bGRfZGF0YTogSlNPTl9HdWlsZFtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgZ3VsZCBvZiBhbGxfZ3VsZCkge1xyXG4gICAgICAgICAgICBhbGxfZ3VsZF9kYXRhLnB1c2goZ3VsZC5lbmNvZGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxfZ3VsZF9kYXRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBkZWNvZGVfYWxsKGFsbF9ndWxkX2RhdGE6IEpTT05fR3VpbGRbXSk6IENfR3VpbGRbXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX2d1bGQ6IENfR3VpbGRbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGd1bGRfZGF0YSBvZiBhbGxfZ3VsZF9kYXRhKSB7XHJcbiAgICAgICAgICAgIGFsbF9ndWxkLnB1c2goKG5ldyBDX0d1aWxkKCkpLmRlY29kZShndWxkX2RhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbF9ndWxkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWxlcnQoKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJHdWlsZCBJbmZvOlwiIFxyXG4gICAgICAgICAgICArIFwiXFxuaWQ6ICAgICAgIFwiICsgKHRoaXMuaWQgICAgICAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudW5pcV9pZDogIFwiICsgKHRoaXMudW5pcV9pZCAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2F2ZV9pZDogIFwiICsgKHRoaXMuc2F2ZV9pZCAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubmFtZTogICAgIFwiICsgKHRoaXMubmFtZSAgICAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuZ29sZDogICAgIFwiICsgKHRoaXMuZ29sZCAgICAgICAgICAgPz8gIDApXHJcbi8vICAgICAgICAgICAgKyBcIlxcbmdvb2RzOiAgICBcIiArIChPYmplY3Qua2V5cyh0aGlzLmdvb2RzPz8wKS5sZW5ndGgpXHJcbiAgICAgICAgICAgICsgXCJcXG5oZXJvZXM6ICAgXCIgKyAodGhpcy5oZXJvZXM/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX0hlcm9BYmlsaXR5LCBKU09OX0hlcm9fQWJpbGl0eX0gZnJvbSBcIi4vQ19IZXJvQWJpbGl0eVwiO1xyXG5pbXBvcnQgeyBJX0pTT05fVW5pcSwgICBKU09OX0FueSB9ICAgICAgICAgZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5pbXBvcnQgeyBfZ2V0X3V1aWQsIF9pbnJhbmQsIF9pcmFuZCwgX3JhbmRvbV9zdHIgfSAgZnJvbSBcIi4uL2RfdXRsL0ZfUmFuZFwiO1xyXG5pbXBvcnQgeyBDX0dvb2RzTGlzdCwgSlNPTl9Hb29kc0xpc3QgfSBmcm9tIFwiLi9DX0dvb2RzTGlzdE5HXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fSGVybyBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGlkPzogICAgICAgIG51bWJlciwgXHJcbiAgICB1bmlxX2lkPzogICBzdHJpbmcsIFxyXG4gICAgc2F2ZV9pZD86ICAgbnVtYmVyLCBcclxuICAgIG5hbWU/OiAgICAgIHN0cmluZywgXHJcbiAgICBzZXg/OiAgICAgICBudW1iZXI7IFxyXG4gICAgYWdlPzogICAgICAgbnVtYmVyOyBcclxuICAgIGdvbGQ/OiAgICAgIG51bWJlcjsgXHJcbi8vICAgIGdvb2RzPzogICAgIEpTT05fR29vZHNMaXN0OyBcclxuICAgIHN0YXRlPzogICAgIG51bWJlcjsgXHJcbiAgICBsdj86ICAgICAgICBudW1iZXI7IFxyXG4gICAgdmFsPzogICAgICAgSlNPTl9IZXJvX1ZhbHVlO1xyXG4gICAgYWJpX3A/OiAgICAgICB7YnNjPzogSlNPTl9IZXJvX0FiaWxpdHksIHR0bD86IEpTT05fSGVyb19BYmlsaXR5LCBub3c/OiBKU09OX0hlcm9fQWJpbGl0eX07XHJcbiAgICBhYmlfbT86ICAgICAgIHtic2M/OiBKU09OX0hlcm9fQWJpbGl0eSwgdHRsPzogSlNPTl9IZXJvX0FiaWxpdHksIG5vdz86IEpTT05fSGVyb19BYmlsaXR5fTtcclxuICAgIGlzX2FsaXZlPzogIHN0cmluZ3xib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fSGVyb19WYWx1ZSBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIHNrcD86IHt0dGw6IG51bWJlciwgIG5vdzogbnVtYmVyfSwgXHJcbiAgICBleHA/OiB7dHRsOiBudW1iZXIsICBub3c6IG51bWJlcn0sXHJcbiAgICBueGU/OiBudW1iZXIsICAgICAgICAgICAgICAgICAgIC8vIOasoeWbnuOBruODkuODvOODreODvOODrOODmeODq+OCouODg+ODl+OBq+W/heimgeOBque1jOmok+WApFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfaHJlc19pbmZvKGE6IChKU09OX0hlcm98dW5kZWZpbmVkKVtdfHVuZGVmaW5lZCk6IHZvaWQgeyBcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGFsZXJ0KCdOdW1iZXIgb2YgSGVybyA9ICcgKyBhLmxlbmd0aC50b1N0cmluZygpKTtcclxuICAgIGZvciAodmFyIGkgaW4gYSkge1xyXG4gICAgICAgIGlmIChhW2ldID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG4gICAgICAgIGFsZXJ0X2hlcm9faW5mbyhhW2ldKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X2hlcm9faW5mbyhhOiBKU09OX0hlcm98dW5kZWZpbmVkKTogdm9pZCB7IFxyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoXCJIZXJvIEluZm86XFxuXCIgXHJcbiAgICAgICAgKyBcIlxcbmlkOiAgICAgICBcIiAgICAgKyAoYT8uaWQgICAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxudW5pcV9pZCAgIFwiICAgICArIChhPy51bmlxX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5uYW1lOiAgICAgXCIgICAgICsgKGE/Lm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNhdmVfaWQ6ICBcIiAgICAgKyAoYT8uc2F2ZV9pZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuaXNfYWxpdmU6IFwiICAgICArIChhPy5pc19hbGl2ZSAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfSGVybyBpbXBsZW1lbnRzIElfSlNPTl9VbmlxIHtcclxuICAgIHByb3RlY3RlZCBteV9pZDogICAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIG15X25hbWU6ICBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgdW5pcV9pZDogIHN0cmluZzsgXHJcbiAgICBwcm90ZWN0ZWQgc2F2ZV9pZDogIG51bWJlcjsgXHJcbiAgICBwcm90ZWN0ZWQgc2V4OiAgICAgIG51bWJlcjsgXHJcbiAgICBwcm90ZWN0ZWQgYWdlOiAgICAgIG51bWJlcjsgXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGU6ICAgIG51bWJlcjsgXHJcbiAgICBwcm90ZWN0ZWQgbHY6ICAgICAgIG51bWJlcjsgXHJcbiAgICAvLyBic2MoQmFzaWMp44Gv5b2T5Lq644Gu5Z+65pys5YCk44CCdHRsKFRvdGFsKeOBr+ijheWCmeetieOCkuWKoOa4m+eul+OBl+OBn+OCguOBruOAgm5vd+OBr+ODkOODleetieOBruOCv+ODvOODs+WItuOBruOCguWKoOa4m+eul+OBl+OBn+OCguOBrlxyXG4gICAgcHJvdGVjdGVkIGdvbGQ6ICAgICBudW1iZXI7IFxyXG4vLyAgICBwcm90ZWN0ZWQgZ29vZHM6ICAgIENfR29vZHNMaXN0OyBcclxuICAgIHByb3RlY3RlZCB2YWw6ICAgICAgSlNPTl9IZXJvX1ZhbHVlO1xyXG4gICAgcHJvdGVjdGVkIGFiaV9wOiAgICAgIHtic2M6IENfSGVyb0FiaWxpdHksIHR0bDogQ19IZXJvQWJpbGl0eSwgbm93OiBDX0hlcm9BYmlsaXR5fTtcclxuICAgIHByb3RlY3RlZCBhYmlfbTogICAgICB7YnNjOiBDX0hlcm9BYmlsaXR5LCB0dGw6IENfSGVyb0FiaWxpdHksIG5vdzogQ19IZXJvQWJpbGl0eX07XHJcblxyXG4gICAgcHJvdGVjdGVkIGlzX2FsaXZlOiBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihhPzogSlNPTl9IZXJvKSB7XHJcbiAgICAgICAgdGhpcy5teV9pZCAgICAgID0gMDtcclxuICAgICAgICB0aGlzLm15X25hbWUgICAgPSAnTm8gTmFtZSBIZXJvJztcclxuICAgICAgICB0aGlzLnVuaXFfaWQgICAgPSAnbWFpX2hlcm8jJyArIF9nZXRfdXVpZCgpO1xyXG4gICAgICAgIHRoaXMuc2F2ZV9pZCAgICA9IDA7XHJcbiAgICAgICAgdGhpcy5zZXggICAgICAgID0gMDsgXHJcbiAgICAgICAgdGhpcy5hZ2UgICAgICAgID0gMDsgXHJcbiAgICAgICAgdGhpcy5nb2xkICAgICAgID0gMDsgXHJcbi8vICAgICAgICB0aGlzLmdvb2RzICAgICAgPSBuZXcgQ19Hb29kc0xpc3QoKTsgXHJcbiAgICAgICAgdGhpcy5zdGF0ZSAgICAgID0gMDsgXHJcbiAgICAgICAgdGhpcy5sdiAgICAgICAgID0gMDtcclxuICAgICAgICB0aGlzLnZhbCAgICAgICAgPSB7fTtcclxuICAgICAgICB0aGlzLmFiaV9wICAgICAgPSB7YnNjOiBuZXcgQ19IZXJvQWJpbGl0eSgpLCB0dGw6IG5ldyBDX0hlcm9BYmlsaXR5KCksIG5vdzogbmV3IENfSGVyb0FiaWxpdHkoKX07XHJcbiAgICAgICAgdGhpcy5hYmlfbSAgICAgID0ge2JzYzogbmV3IENfSGVyb0FiaWxpdHkoKSwgdHRsOiBuZXcgQ19IZXJvQWJpbGl0eSgpLCBub3c6IG5ldyBDX0hlcm9BYmlsaXR5KCl9O1xyXG4gICAgICAgIHRoaXMuaXNfYWxpdmUgICA9IHRydWU7XHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldF9wcnAoYXJnIDogSlNPTl9IZXJvKSB7XHJcbiAgICAgICAgdGhpcy5kZWNvZGUoYXJnKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfdW5pcV9pZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy51bmlxX2lkfVxyXG5cclxuICAgIHB1YmxpYyBpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnSGVyb18nICsgdGhpcy5teV9pZC50b1N0cmluZygxNikucGFkU3RhcnQoNSwgJzAnKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB1aWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudW5pcV9pZDt9XHJcbiAgICBwdWJsaWMgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm15X25hbWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X25hbWUobmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5teV9uYW1lID0gbmFtZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX0hlcm8ge1xyXG4gICAgICAgIGNvbnN0IHJldDogSlNPTl9IZXJvID0ge1xyXG4gICAgICAgICAgICBpZDogICAgICAgIHRoaXMubXlfaWQsXHJcbiAgICAgICAgICAgIHVuaXFfaWQ6ICAgdGhpcy51bmlxX2lkLFxyXG4gICAgICAgICAgICBuYW1lOiAgICAgIHRoaXMubXlfbmFtZSxcclxuICAgICAgICAgICAgc2F2ZV9pZDogICB0aGlzLnNhdmVfaWQsXHJcbiAgICAgICAgICAgIHNleDogICAgICAgdGhpcy5zZXgsIFxyXG4gICAgICAgICAgICBhZ2U6ICAgICAgIHRoaXMuYWdlLCBcclxuICAgICAgICAgICAgc3RhdGU6ICAgICB0aGlzLnN0YXRlLCBcclxuICAgICAgICAgICAgbHY6ICAgICAgICB0aGlzLmx2LCBcclxuICAgICAgICAgICAgZ29sZDogICAgICB0aGlzLmdvbGQsIFxyXG4vLyAgICAgICAgICAgIGdvb2RzOiAgICAgdGhpcy5nb29kcy5lbmNvZGUoKSwgXHJcbiAgICAgICAgICAgIHZhbDogICAgICAgdGhpcy52YWwsXHJcbiAgICAgICAgICAgIGFiaV9wX2JzYzogdGhpcy5hYmlfcC5ic2MuZW5jb2RlKCksXHJcbiAgICAgICAgICAgIGFiaV9tX2JzYzogdGhpcy5hYmlfbS5ic2MuZW5jb2RlKCksXHJcbiAgICAgICAgICAgIGlzX2FsaXZlOiAodGhpcy5pc19hbGl2ZSkgPyAnWScgOiAnTicsIFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX0hlcm98dW5kZWZpbmVkKTogQ19IZXJvIHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAoYS5pZCAgICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2lkICAgID0gYS5pZDtcclxuICAgICAgICBpZiAoYS5uYW1lICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X25hbWUgID0gYS5uYW1lO1xyXG4gICAgICAgIGlmIChhLnVuaXFfaWQgICE9PSB1bmRlZmluZWQpIHRoaXMudW5pcV9pZCAgPSBhLnVuaXFfaWQ7XHJcbiAgICAgICAgaWYgKGEuc2F2ZV9pZCAgIT09IHVuZGVmaW5lZCkgdGhpcy5zYXZlX2lkICA9IGEuc2F2ZV9pZDtcclxuICAgICAgICBpZiAoYS5zZXggICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLnNleCAgICAgID0gYS5zZXg7XHJcbiAgICAgICAgaWYgKGEuYWdlICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5hZ2UgICAgICA9IGEuYWdlO1xyXG4gICAgICAgIGlmIChhLnN0YXRlICAgICE9PSB1bmRlZmluZWQpIHRoaXMuc3RhdGUgICAgPSBhLnN0YXRlO1xyXG4gICAgICAgIGlmIChhLmx2ICAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubHYgICAgICAgPSBhLmx2O1xyXG4gICAgICAgIGlmIChhLmdvbGQgICAgICE9PSB1bmRlZmluZWQpIHRoaXMuZ29sZCAgICAgPSBhLmdvbGQ7XHJcbiAgICAgICAgaWYgKGEuaXNfYWxpdmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGEuaXNfYWxpdmUgPT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzX2FsaXZlID0gYS5pc19hbGl2ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNfYWxpdmUgPSAoYS5pc19hbGl2ZSAhPSAnTicpID8gdHJ1ZTogZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbi8vICAgICAgICBpZiAoYS5nb29kcyAgICE9PSB1bmRlZmluZWQpIHRoaXMuZ29vZHMuZGVjb2RlKGEuZ29vZHMpO1xyXG4gICAgICAgIGlmIChhLnZhbCAgICAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9fZGVjb2RlX3ZhbCh0aGlzLnZhbCwgYS52YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYS5hYmlfcF9ic2MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFiaV9wLmJzYy5kZWNvZGUoYS5hYmlfcF9ic2MpO1xyXG4gICAgICAgICAgICAvLyDmmqvlrppcclxuICAgICAgICAgICAgdGhpcy5hYmlfcC50dGwgPSB0aGlzLmFiaV9wLm5vdyA9IHRoaXMuYWJpX3AuYnNjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYS5hYmlfbV9ic2MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFiaV9tLmJzYy5kZWNvZGUoYS5hYmlfbV9ic2MpO1xyXG4gICAgICAgICAgICAvLyDmmqvlrppcclxuICAgICAgICAgICAgdGhpcy5hYmlfbS50dGwgPSB0aGlzLmFiaV9tLm5vdyA9IHRoaXMuYWJpX20uYnNjO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX19kZWNvZGVfdmFsKGQ6IEpTT05fSGVyb19WYWx1ZSwgczogSlNPTl9IZXJvX1ZhbHVlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHMuc2twICE9PSB1bmRlZmluZWQpIGQuc2twID0gdGhpcy5fX2RlY29kZV9za2V4KGQuc2twLCBzLnNrcCk7XHJcbiAgICAgICAgaWYgKHMuZXhwICE9PSB1bmRlZmluZWQpIGQuZXhwID0gdGhpcy5fX2RlY29kZV9za2V4KGQuZXhwLCBzLmV4cCk7XHJcbiAgICAgICAgaWYgKHMubnhlICE9PSB1bmRlZmluZWQpIGQubnhlID0gcy5ueGU7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX19kZWNvZGVfc2tleChhOiB7dHRsPzogbnVtYmVyLCBub3c/OiBudW1iZXJ9IHwgdW5kZWZpbmVkLCBzOiB7dHRsPzogbnVtYmVyLCBub3c/OiBudW1iZXJ9KToge3R0bDogbnVtYmVyLCBub3c6IG51bWJlcn0ge1xyXG4gICAgICAgIHZhciBkOiB7dHRsOiBudW1iZXIsIG5vdzogbnVtYmVyfTtcclxuICAgICAgICBpZiAgICAgKGEgPT09IHVuZGVmaW5lZCkgZCA9IHt0dGw6IDAsIG5vdzogMH07XHJcbiAgICAgICAgZWxzZSAgICBkID0ge3R0bDogYT8udHRsID8/IDAsIG5vdzogYT8ubm93ID8/IDB9O1xyXG5cclxuICAgICAgICBkLnR0bCA9IHMudHRsID8/IGQudHRsO1xyXG4gICAgICAgIGQubm93ID0gcy5ub3cgPz8gcy50dGwgPz8gZC5ub3c7XHJcbiAgICAgICAgcmV0dXJuIGQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVfaGVybygpOiBDX0hlcm8ge1xyXG4gICAgICAgIGNvbnN0IG5ld19oZXJvID0gbmV3IENfSGVybygpO1xyXG4gICAgICAgIG5ld19oZXJvLnNldF9wcnAoe2lkOiAgICBNYXRoLmZsb29yKC0xMDAwLjAgKiBNYXRoLnJhbmRvbSgpKX0pO1xyXG4gICAgICAgIG5ld19oZXJvLnNldF9wcnAoe25hbWU6ICBuZXdfaGVyby5pZCgpfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld19oZXJvO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByYW5kb21fbWFrZSgpOiBDX0hlcm8ge1xyXG4gICAgICAgIHRoaXMubXlfaWQgICAgPSAwOyAvLyAtLUhlcm86OiRtYXhfaWQ7XHJcbiAgICAgICAgdGhpcy5teV9uYW1lICA9IFwi5YaS6Zm66ICFIFwiICsgX3JhbmRvbV9zdHIoNSk7XHJcbiAgICAgICAgdGhpcy5zZXggICAgICA9IF9pcmFuZCggMCwgICAgIDEpOyBcclxuICAgICAgICB0aGlzLmFnZSAgICAgID0gX2lyYW5kKCAxNSwgICAyNSk7IFxyXG4gICAgICAgIHRoaXMuc3RhdGUgICAgPSAwOyBcclxuICAgICAgICB0aGlzLmx2ICAgICAgID0gMDsgXHJcbiAgICAgICAgdGhpcy5nb2xkICAgICA9IF9pcmFuZCggNTAwLCAxMDAwKTsgXHJcbiAgICAgICAgdGhpcy52YWwgICAgICA9IHtcclxuICAgICAgICAgICAgc2twOiB7dHRsOiAwLCBub3c6IDB9LCBcclxuICAgICAgICAgICAgZXhwOiB7dHRsOiAwLCBub3c6IDB9LFxyXG4gICAgICAgICAgICAnbnhlJzogMTAwMFxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICBjb25zdCBhYmlfcF9ic2MgPSB0aGlzLmFiaV9wLmJzYztcclxuICAgICAgICBhYmlfcF9ic2MucmFuZG9tX21ha2UoKTtcclxuICAgICAgICBhYmlfcF9ic2MuYWRkX3hwX2JvbnVzKCh0aGlzLmFnZSAtIDE1KSAqIDEwKTtcclxuICAgICAgICBhYmlfcF9ic2MuYWRkX2VsX2JvbnVzKCh0aGlzLmFnZSAtIDE1KSAqICA1KTtcclxuICAgICAgICBhYmlfcF9ic2MuYWRkX3ByX2JvbnVzKCh0aGlzLmFnZSAtIDE1KSAqICAyKTtcclxuICAgICAgICB0aGlzLmFiaV9wLmJzYyA9IGFiaV9wX2JzYztcclxuXHJcbiAgICAgICAgY29uc3QgYWJpX21fYnNjID0gdGhpcy5hYmlfbS5ic2M7XHJcbiAgICAgICAgYWJpX21fYnNjLnJhbmRvbV9tYWtlKCk7XHJcbiAgICAgICAgYWJpX21fYnNjLmFkZF94cF9ib251cygodGhpcy5hZ2UgLSAxNSkgKiAxMCk7XHJcbiAgICAgICAgYWJpX21fYnNjLmFkZF9lbF9ib251cygodGhpcy5hZ2UgLSAxNSkgKiAgNSk7XHJcbiAgICAgICAgYWJpX21fYnNjLmFkZF9wcl9ib251cygodGhpcy5hZ2UgLSAxNSkgKiAgMik7XHJcbiAgICAgICAgdGhpcy5hYmlfbS5ic2MgPSBhYmlfbV9ic2M7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZW5jb2RlX2hlcm9lcyhoZXJvZXM6IENfSGVyb1tdKTogSlNPTl9IZXJvW10ge1xyXG4gICAgICAgIGNvbnN0IGhlcm9lc19kYXRhID0gW10gYXMgSlNPTl9IZXJvW107XHJcbiAgICAgICAgZm9yICh2YXIgaGVybyBvZiBoZXJvZXMpIHtcclxuICAgICAgICAgICAgaGVyb2VzX2RhdGEucHVzaChoZXJvLmVuY29kZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhlcm9lc19kYXRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBkZWNvZGVfaGVyb2VzKGhlcm9lc19kYXRhOiAoSlNPTl9IZXJvfHVuZGVmaW5lZClbXXx1bmRlZmluZWQpOiBDX0hlcm9bXSB7XHJcbiAgICAgICAgY29uc3QgaGVyb2VzID0gW10gYXMgQ19IZXJvW107XHJcbiAgICAgICAgaWYgKGhlcm9lc19kYXRhICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaGVyb19kYXRhIG9mIGhlcm9lc19kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGVyb19kYXRhICE9PSB1bmRlZmluZWQpIGhlcm9lcy5wdXNoKG5ldyBDX0hlcm8oKS5kZWNvZGUoaGVyb19kYXRhKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhlcm9lcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWxlcnQoKTogdm9pZCB7IFxyXG4gICAgICAgIGFsZXJ0KFwiSGVybyBJbmZvOlxcblwiIFxyXG4gICAgICAgICAgICArIFwiXFxuaWQ6ICAgICAgIFwiICAgICArICh0aGlzLmlkICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG51bmlxX2lkICAgXCIgICAgICsgKHRoaXMudW5pcV9pZCAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbm5hbWU6ICAgICBcIiAgICAgKyAodGhpcy5uYW1lICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2F2ZV9pZDogIFwiICAgICArICh0aGlzLnNhdmVfaWQgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5pc19hbGl2ZTogXCIgICAgICsgKHRoaXMuaXNfYWxpdmUgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgYWxlcnRfaHJlcyhhOiAoQ19IZXJvfHVuZGVmaW5lZClbXXx1bmRlZmluZWQpOiB2b2lkIHsgXHJcbiAgICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICAgIGFsZXJ0KCdOdW1iZXIgb2YgSGVybyA9ICcgKyBhLmxlbmd0aC50b1N0cmluZygpKTtcclxuICAgICAgICBmb3IgKHZhciBpIGluIGEpIGFbaV0/LmFsZXJ0KCk7XHJcbiAgICB9XHJcbn0iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IElfSlNPTiwgSlNPTl9BbnkgfSBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcbmltcG9ydCB7IF9yb3VuZCB9ICAgICAgICAgICBmcm9tIFwiLi4vZF91dGwvRl9NYXRoXCI7XHJcbmltcG9ydCB7IF9pbnJhbmQgfSBmcm9tIFwiLi4vZF91dGwvRl9SYW5kXCI7XHJcblxyXG4vLyDkuIDoiKzjgavkvb/jgYjjgovjg6bjg7zjg4bjgqPjg6rjg4bjgqPjgarlkarmlodcclxuLy8g44Kq44OW44K444Kn44Kv44OI44KS5YiX5oyZ5Z6L44Go44GX44Gm5Z6L5YyW44GZ44KL44Gu44Gr5Yip55SoXHJcbnR5cGUgVF9IZXJvQWJpbGl0eSA9IHtba2V5OiBzdHJpbmddOiBudW1iZXJ9O1xyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fSGVyb19BYmlsaXR5IGV4dGVuZHMgSlNPTl9Bbnkge1trZXk6IHN0cmluZ106IG51bWJlcn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX0hlcm9BYmlsaXR5IGltcGxlbWVudHMgSV9KU09OIHtcclxuICAgIHByb3RlY3RlZCB2OiBUX0hlcm9BYmlsaXR5ID0ge1xyXG4gICAgICAgIHhwOiAgMCwgIC8vIHA6SFDjgIFtOk1QXHJcblxyXG4gICAgICAgIC8vIOS7peS4i+OAgeaIpumXmOiDveWKm+OBruWfuuacrOWApChwOueJqeeQhuOAgW066a2U5rOVKeOAguODkuODvOODreODvOODrOODmeODq+OChOOCueODhuODvOOCv+OCueOCouODg+ODl+OBp+WKoOeulyBcclxuICAgICAgICBhdGs6IDAsICAvLyDmlLvmkoPlgKRcclxuICAgICAgICBkZWY6IDAsICAvLyDpmLLlvqHlgKRcclxuICAgICAgICBxdWM6IDAsICAvLyDnnqznmbrliptcclxuICAgICAgICBjbmM6IDAsICAvLyDmqZ/pgYvlgKQo44OB44Oj44Oz44K5KVxyXG4gICAgXHJcbiAgICAgICAgLy8g5Lul5LiL44CB44GE44KP44KG44KL44K544OG44O844K/44K544CC5LiK6KiY44Gu6KiI566X44Gr5b2x6Z+/44CC44OS44O844Ot44O844Os44OZ44Or44KE44K544OG44O844K/44K544Ki44OD44OX44Gn5Yqg566XXHJcbiAgICAgICAgc3RyOiAwLCAgLy8g5qC55oCn44CC5pS75pKDL+mYsuW+oeWKm+OBq+OCguW9semfv+OAgkhQL01Q5Zue5b6p44KE44Ki44Kk44OG44Og44Gu5pyA5aSn5omA5oyB6YeN6YeP44Gr44Oc44O844OK44K5XHJcbiAgICAgICAgcHdyOiAwLCAgLy8g5Z+65pys55qE5by344GV44CC5pS75pKD5Yqb44Gr5b2x6Z+/XHJcbiAgICAgICAgdml0OiAwLCAgLy8g6ICQ5LmF5Yqb44CCSFAvTVDjga7mnIDlpKflgKTjgoTpmLLlvqHlipvjgavlvbHpn7/jgpLkuI7jgYjjgotcclxuICAgICAgICBkZXg6IDAsICAvLyDlmajnlKjjgZXjgILlkb3kuK3njofjgavlvbHpn7/jgpLkuI7jgYjjgovjgILpo5vjgbPpgZPlhbfjgoTplbfot53pm6LprZTms5Xjgafjga/nibnjgavlvbHpn7/jgILnvaDop6PpmaTjgavjgoLlvbHpn79cclxuICAgICAgICBhZ2k6IDAsICAvLyDntKDml6njgZXjgILooYzli5XpgJ/luqbjgoTlm57pgb/njofjgavlvbHpn7/jgpLkuI7jgYjjgovjgILlkb3kuK3njofjgavjgoLlvbHpn79cclxuICAgICAgICB0ZWM6IDAsICAvLyDmioDooZPlipvjgILntYzpqJPjgaflkJHkuIrjgZfjgabog73lipvlgKQocXVjL2NuYynjgavjg5zjg7zjg4rjgrnjgpLkuI7jgYjjgotcclxuICAgICAgICBsdWs6IDAsICAvLyDlubjpgYvlgKTjgIJjbmPjgavlpKfjgY3jgY/lvbHpn7/jgZnjgotcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGE/OiBKU09OX0hlcm9fQWJpbGl0eSkge1xyXG4gICAgICAgIGZvciAobGV0IGlkeCBpbiB0aGlzLnYpIHt0aGlzLnZbaWR4XSA9IDA7fVxyXG4gICAgICAgIGlmIChhICE9PSB1bmRlZmluZWQpIHRoaXMuZGVjb2RlKGEpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wcnAoYTogSlNPTl9IZXJvX0FiaWxpdHkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRlY29kZShhKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICghKGtleSBpbiB0aGlzLnYpKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZba2V5XTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHM6IEpTT05fSGVyb19BYmlsaXR5KTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAoIShrZXkgaW4gdGhpcy52KSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnZba2V5XSA9IHNba2V5XTtcclxuICAgICAgICByZXR1cm4gc1trZXldO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB4cF90dGxhZGQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gX3JvdW5kKE1hdGguZmxvb3IodGhpcy52LnN0ciArIHRoaXMudi52aXQgKiAxMC4wKSwgMCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYXRrX3R0bGFkZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBfcm91bmQoTWF0aC5mbG9vcih0aGlzLnYuc3RyICsgdGhpcy52LnB3ciArIHRoaXMudi50ZWMpIC8gMTAuMCwgMCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVmX3R0bGFkZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBfcm91bmQoTWF0aC5mbG9vcih0aGlzLnYuc3RyICsgdGhpcy52LnZpdCArIHRoaXMudi50ZWMpIC8gMTAuMCwgMCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcXVjX3R0bGFkZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBfcm91bmQoTWF0aC5mbG9vcih0aGlzLnYuYWdpICsgdGhpcy52Lmx1ayArIHRoaXMudi50ZWMpIC8gMTAuMCwgMCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY25jX3R0bGFkZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBfcm91bmQoTWF0aC5mbG9vcigyLjAgKiB0aGlzLnYubHVrICsgdGhpcy52LnRlYykgLyAxMC4wLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYm9udXMoa2V5IDogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoIShrZXkgaW4gdGhpcy52KSkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKGtleSA9PT0gJ3hwJykgcmV0dXJuIF9yb3VuZChNYXRoLmZsb29yKHRoaXMudi54cCAvIDEwMCksIDApO1xyXG4gICAgICAgIHJldHVybiBfcm91bmQoTWF0aC5mbG9vcih0aGlzLnZba2V5XSAvIDEwLjApLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKGE6IEpTT05fSGVyb19BYmlsaXR5KTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGEpIHtcclxuICAgICAgICAgICAgdGhpcy52W2tleV0gKz0gYVtrZXldO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcblxyXG4gICAgcHVibGljIGFkZF94cF9ib251cyhib251czogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52LnhwICArPSAgYm9udXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRkX2VsX2JvbnVzKGJvbnVzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnYuYXRrICs9ICBib251cztcclxuICAgICAgICB0aGlzLnYuZGVmICs9ICBib251cztcclxuICAgICAgICB0aGlzLnYucXVjICs9ICBib251cztcclxuICAgICAgICB0aGlzLnYuY25jICs9ICBib251cztcclxuICAgIH1cclxuICAgIHB1YmxpYyBhZGRfcHJfYm9udXMoYm9udXM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudi5zdHIgKz0gIGJvbnVzO1xyXG4gICAgICAgIHRoaXMudi5wd3IgKz0gIGJvbnVzO1xyXG4gICAgICAgIHRoaXMudi52aXQgKz0gIGJvbnVzO1xyXG4gICAgICAgIHRoaXMudi5kZXggKz0gIGJvbnVzO1xyXG4gICAgICAgIHRoaXMudi5hZ2kgKz0gIGJvbnVzO1xyXG4gICAgICAgIHRoaXMudi50ZWMgKz0gIGJvbnVzO1xyXG4gICAgICAgIHRoaXMudi5sdWsgKz0gIGJvbnVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByYW5kb21fbWFrZSgpOiBDX0hlcm9BYmlsaXR5IHtcclxuICAgICAgICB0aGlzLnYueHAgID0gIF9pbnJhbmQoMCwgMTAwMCwgMy4wKTtcclxuXHJcbiAgICAgICAgdGhpcy52LmF0ayA9ICBfaW5yYW5kKDAsICAxMDAsIDIuNSk7XHJcbiAgICAgICAgdGhpcy52LmRlZiA9ICBfaW5yYW5kKDAsICAxMDAsIDIuNSk7XHJcbiAgICAgICAgdGhpcy52LnF1YyA9ICBfaW5yYW5kKDAsICAxMDAsIDIuNSk7XHJcbiAgICAgICAgdGhpcy52LmNuYyA9ICBfaW5yYW5kKDAsICAxMDAsIDIuNSk7XHJcbiAgICBcclxuICAgICAgICB0aGlzLnYuc3RyID0gIF9pbnJhbmQoMCwgICAyMCwgMi4wKTtcclxuICAgICAgICB0aGlzLnYucHdyID0gIF9pbnJhbmQoMCwgICAyMCwgMi4wKTtcclxuICAgICAgICB0aGlzLnYudml0ID0gIF9pbnJhbmQoMCwgICAyMCwgMi4wKTtcclxuICAgICAgICB0aGlzLnYuZGV4ID0gIF9pbnJhbmQoMCwgICAyMCwgMi4wKTtcclxuICAgICAgICB0aGlzLnYuYWdpID0gIF9pbnJhbmQoMCwgICAyMCwgMi4wKTtcclxuICAgICAgICB0aGlzLnYudGVjID0gIF9pbnJhbmQoMCwgICAyMCwgMi4wKTtcclxuICAgICAgICB0aGlzLnYubHVrID0gIF9pbnJhbmQoMCwgICAyMCwgMi4wKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX0hlcm9fQWJpbGl0eSB7XHJcbiAgICAgICAgY29uc3QgYTogSlNPTl9IZXJvX0FiaWxpdHkgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy52KSBhW2tleV0gPSB0aGlzLnZba2V5XTtcclxuICAgICAgICByZXR1cm4gYTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoYTogSlNPTl9IZXJvX0FiaWxpdHkpOiBDX0hlcm9BYmlsaXR5IHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYSkge1xyXG4gICAgICAgICAgICBpZiAoa2V5IGluIHRoaXMudiAmJiBhW2tleV0gIT09IHVuZGVmaW5lZCkgdGhpcy52W2tleV0gPSBhW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2xvbmUoczogQ19IZXJvQWJpbGl0eSk6IENfSGVyb0FiaWxpdHkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ19IZXJvQWJpbGl0eShzLmVuY29kZSgpKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ19Qb2ludCB9ICAgICAgICAgICAgICAgICAgIGZyb20gJy4vQ19Qb2ludCc7XHJcbmltcG9ydCB7IENfUG9pbnREaXIsIEpTT05fUG9pbnREaXIgfSBmcm9tICcuL0NfUG9pbnREaXInO1xyXG5pbXBvcnQgeyBUX0RpcmVjdGlvbiB9ICAgICAgICAgICAgICAgZnJvbSAnLi9DX1BvaW50RGlyJztcclxuaW1wb3J0IHsgSV9KU09OLCBKU09OX0FueSB9ICAgICAgICAgIGZyb20gJy4vQ19TYXZlSW5mbyc7XHJcbmltcG9ydCB7IFRfTWFrZUVudW1UeXBlIH0gICAgICAgICAgICBmcm9tIFwiLi4vZF91dGwvVF9NYWtlRW51bVR5cGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUX0xja2Q6e1tsY2tkOiBzdHJpbmddOiBudW1iZXJ9ICA9IHtcclxuICAgIFVua246IDAsXHJcbiAgICBNYXplOiAxLFxyXG4gICAgR3VsZDogMixcclxufSBhcyBjb25zdDtcclxuZXhwb3J0IHR5cGUgVF9MY2tkICAgPSBUX01ha2VFbnVtVHlwZTx0eXBlb2YgVF9MY2tkPjtcclxuXHJcbmZ1bmN0aW9uIF9sY2tkX2tleShsY2tkOiBUX0xja2QpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKFRfTGNrZCkuZmluZChrZXkgPT4gVF9MY2tkW2tleV0gPT09IGxja2QpID8/IFwiPz8/P1wiO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fTG9jYXRpb24gZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBraW5kPzogICAgc3RyaW5nLFxyXG4gICAgbmFtZT86ICAgIHN0cmluZyxcclxuICAgIGxvY191aWQ/OiBzdHJpbmcsXHJcbiAgICBsb2NfcG9zPzogSlNPTl9Qb2ludERpcixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJX0xvY2F0ZSB7XHJcbiAgICB1aWQ6ICAgICAgKCk9PnN0cmluZztcclxuICAgIGdldF9sY2tkOiAoKT0+VF9MY2tkO1xyXG4gICAgZ2V0X25hbWU6ICgpPT5zdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX0xvY2F0aW9uIGltcGxlbWVudHMgSV9KU09OIHtcclxuICAgIHByb3RlY3RlZCBsb2Nfa2luZDogVF9MY2tkID0gVF9MY2tkLlVua247XHJcbiAgICBwcm90ZWN0ZWQgbG9jX25hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgcHJvdGVjdGVkIGxvY191aWQ6ICBzdHJpbmcgPSAnJztcclxuICAgIHByb3RlY3RlZCBsb2NfcG9zOiAgQ19Qb2ludERpciA9IG5ldyBDX1BvaW50RGlyKCk7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGpzb24/OiBKU09OX0xvY2F0aW9uKSB7XHJcbiAgICAgICAgaWYgKGpzb24gIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoanNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldF9sY2tkX3N0cigpOiBzdHJpbmcgIHtyZXR1cm4gX2xja2Rfa2V5KHRoaXMubG9jX2tpbmQpO31cclxuICAgIHB1YmxpYyBnZXRfbGNrZCgpOiBUX0xja2QgICAgICB7cmV0dXJuIHRoaXMubG9jX2tpbmQ7fVxyXG4gICAgcHVibGljIGdldF9uYW1lKCk6IHN0cmluZyAgICAgIHtyZXR1cm4gdGhpcy5sb2NfbmFtZTt9XHJcbiAgICBwdWJsaWMgZ2V0X3VpZCgpOiAgc3RyaW5nICAgICAge3JldHVybiB0aGlzLmxvY191aWQ7fVxyXG5cclxuICAgIHB1YmxpYyBzZXRfbGNrZChsY2tkOiBUX0xja2QpOiBDX0xvY2F0aW9ufHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKCEoX2xja2Rfa2V5KGxja2QpIGluIFRfTGNrZCkpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5sb2Nfa2luZCA9IGxja2Q7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X25hbWUobmFtZTogc3RyaW5nKTogICB2b2lkIHt0aGlzLmxvY19uYW1lID0gbmFtZTt9XHJcbiAgICBwdWJsaWMgc2V0X3VpZCAodWlkOiBzdHJpbmcpOiAgICB2b2lkIHt0aGlzLmxvY191aWQgID0gdWlkO31cclxuICAgIFxyXG4gICAgcHVibGljIHNldF9sY2tkX3N0cihsY2tkOiBzdHJpbmcpOiBDX0xvY2F0aW9ufHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKCEobGNrZCBpbiBUX0xja2QpKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMubG9jX2tpbmQgPSBUX0xja2RbbGNrZF07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXRfcCgpOiBDX1BvaW50ICAgICB7XHJcbi8vICAgICAgICBpZiAodGhpcy5sb2Nfa2luZCAhPSBUX0xja2QuTWF6ZSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NfcG9zLmdldF9wKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X2QoKTogVF9EaXJlY3Rpb24ge1xyXG4vLyAgICAgICAgaWYgKHRoaXMubG9jX2tpbmQgIT0gVF9MY2tkLk1hemUpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jX3Bvcy5nZXRfZCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wZCgpOiBDX1BvaW50RGlyIHtcclxuLy8gICAgICAgIGlmICh0aGlzLmxvY19raW5kICE9IFRfTGNrZC5NYXplKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY19wb3MuZ2V0X3BkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldF9wICAgKHA6IENfUG9pbnREaXIpOiBDX1BvaW50RGlyfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jX2tpbmQgIT09IFRfTGNrZC5NYXplKSAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jX3Bvcy5zZXRfcChwKSA9PT0gdW5kZWZpbmVkKSAgcmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jX3BvcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfZCAgIChkOiBUX0RpcmVjdGlvbik6IFRfRGlyZWN0aW9ufHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jX2tpbmQgIT09IFRfTGNrZC5NYXplKSAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jX3Bvcy5zZXRfZChkKSA9PT0gdW5kZWZpbmVkKSAgcmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jX3Bvcy5kO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wZCAgKHBkOiBDX1BvaW50RGlyKTogQ19Qb2ludERpcnx1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY19raW5kICE9PSBUX0xja2QuTWF6ZSkgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAodGhpcy5sb2NfcG9zLnNldF9wZChwZCkgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jX3BvcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX0xvY2F0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBraW5kOiAgICAgX2xja2Rfa2V5KHRoaXMubG9jX2tpbmQpLFxyXG4gICAgICAgICAgICBuYW1lOiAgICAgdGhpcy5sb2NfbmFtZSxcclxuICAgICAgICAgICAgbG9jX3VpZDogIHRoaXMubG9jX3VpZCxcclxuICAgICAgICAgICAgbG9jX3BvczogIHRoaXMubG9jX3Bvcy5lbmNvZGUoKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShqPzogSlNPTl9Mb2NhdGlvbik6IENfTG9jYXRpb24ge1xyXG4gICAgICAgIGlmIChqID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChqLmtpbmQgPT09IHVuZGVmaW5lZCB8fCAhKGoua2luZCBpbiBUX0xja2QpKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGoua2luZCAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmxvY19raW5kID0gVF9MY2tkW2oua2luZF07XHJcbiAgICAgICAgaWYgKGoubmFtZSAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmxvY19uYW1lID0gai5uYW1lO1xyXG4gICAgICAgIGlmIChqLmxvY191aWQgIT09IHVuZGVmaW5lZCkgdGhpcy5sb2NfdWlkICA9IGoubG9jX3VpZDtcclxuICAgICAgICBpZiAoai5sb2NfcG9zICE9PSB1bmRlZmluZWQpIHRoaXMubG9jX3Bvcy5kZWNvZGUoai5sb2NfcG9zKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBUX016S2luZCB9ICAgICAgICAgICAgICBmcm9tIFwiLi9UX016S2luZFwiO1xyXG5pbXBvcnQgeyBDX01hemVDZWxsIH0gICAgICAgICAgICBmcm9tIFwiLi9DX01hemVDZWxsXCI7XHJcbmltcG9ydCB7IENfTWF6ZU9iaiwgSV9NYXplT2JqLCBKU09OX01hemVPYmogfSBmcm9tIFwiLi9DX01hemVPYmpcIjtcclxuaW1wb3J0IHsgQ19Qb2ludCB9ICAgICAgICAgICAgICAgZnJvbSBcIi4vQ19Qb2ludFwiO1xyXG5pbXBvcnQgeyBJX0xvY2F0ZSwgVF9MY2tkIH0gICAgICBmcm9tIFwiLi9DX0xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IENfUmFuZ2UgfSAgICAgICAgICAgICAgIGZyb20gXCIuL0NfUmFuZ2VcIjtcclxuaW1wb3J0IHsgQ19UZWFtLCBKU09OX1RlYW0gfSAgICAgZnJvbSBcIi4vQ19UZWFtXCI7XHJcbmltcG9ydCB7IElfSlNPTl9VbmlxLCBKU09OX0FueSB9IGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuaW1wb3J0IHsgX2dldF91dWlkLCBfaWdyYW5kLCBfaXJhbmQgfSAgICAgICAgICAgICBmcm9tIFwiLi4vZF91dGwvRl9SYW5kXCI7XHJcbmltcG9ydCB7IF9taW4gfSBmcm9tIFwiLi4vZF91dGwvRl9NYXRoXCI7XHJcbmltcG9ydCB7IENfUG9pbnREaXIgfSBmcm9tIFwiLi9DX1BvaW50RGlyXCI7XHJcbmltcG9ydCB7IFRfRGlyZWN0aW9uIH0gZnJvbSBcIi4vVF9EaXJlY3Rpb25cIjtcclxuaW1wb3J0IHsgQ19Qb2ludExpbmsyRCwgQ19Qb2ludFNldDJEIH0gZnJvbSBcIi4vQ19Qb2ludFNldDJEXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fTWF6ZSBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGlkPzogICAgICBudW1iZXIsXHJcbiAgICB1bmlxX2lkPzogc3RyaW5nLFxyXG4gICAgc2F2ZV9pZD86IG51bWJlcixcclxuICAgIGZsb29yPzogICBudW1iZXIsXHJcbiAgICBuYW1lPzogICAgc3RyaW5nLFxyXG4gICAgc2l6ZV94PzogIG51bWJlcixcclxuICAgIHNpemVfeT86ICBudW1iZXIsXHJcbiAgICBzaXplX3o/OiAgbnVtYmVyLFxyXG4gICAgbWF6ZT86ICAgIHN0cmluZywgXHJcbiAgICBtYXNrPzogICAgc3RyaW5nLCBcclxuICAgIG15dGVhbT86ICBKU09OX1RlYW0sIFxyXG4gICAgb2Jqcz86ICAgIEpTT05fTWF6ZU9ialtdLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X21hemVfaW5mbyhhOiBKU09OX01hemV8dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgYWxlcnQoXCJNYXplIEluZm86XCJcclxuICAgICAgICArIFwiXFxubWF6ZSBpZCA6XCIgKyAoYS5pZCAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuZmxvb3I6IFwiICAgKyAoYS5mbG9vciAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxudW5pcSBpZCA6XCIgKyAoYS51bmlxX2lkID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2F2ZSBpZCA6XCIgKyAoYS5zYXZlX2lkID8/ICc/JylcclxuICAgICAgICArIFwiXFxubmFtZTogICBcIiAgKyAoYS5uYW1lICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2l6ZV94OiBcIiAgKyAoYS5zaXplX3ggID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2l6ZV95OiBcIiAgKyAoYS5zaXplX3kgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2l6ZV96OiBcIiAgKyAoYS5zaXplX3ogID8/ICc/JylcclxuICAgICAgICArIFwibWF6ZTpcXG5cIiAgICAgKyAoYS5tYXplICAgID8/ICc/JylcclxuICAgICAgICArIFwibWFzazpcXG5cIiAgICAgKyAoYS5tYXNrICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcbn1cclxuXHJcblxyXG50eXBlIF9pbml0X2FyZyA9IHtcclxuICAgIG1hemVfaWQ/OiBudW1iZXIsXHJcbiAgICBzYXZlX2lkPzogbnVtYmVyLFxyXG4gICAgZmxvb3I/OiAgIG51bWJlcixcclxuICAgIG5hbWU/OiAgICBzdHJpbmcsXHJcbiAgICBzaXplX3g/OiAgbnVtYmVyLFxyXG4gICAgc2l6ZV95PzogIG51bWJlcixcclxuICAgIHNpemVfej86ICBudW1iZXIsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX01hemUgaW1wbGVtZW50cyBJX0xvY2F0ZSwgSV9KU09OX1VuaXEge1xyXG4gICAgcHJvdGVjdGVkIG1hemVfaWQ6ICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgdW5pcV9pZDogIHN0cmluZztcclxuICAgIHByb3RlY3RlZCBzYXZlX2lkOiAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIGZsb29yOiAgICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgbmFtZTogICAgIHN0cmluZztcclxuICAgIHByb3RlY3RlZCBteV9sYXllcjogbnVtYmVyID0gMDtcclxuICAgIHByb3RlY3RlZCBzaXplOiAgICAgQ19SYW5nZTtcclxuICAgIHByb3RlY3RlZCBjZWxsczogICAgQ19NYXplQ2VsbFtdW11bXTtcclxuICAgIHByb3RlY3RlZCBtYXNrczogICAgYm9vbGVhbltdW11bXTtcclxuICAgIHByb3RlY3RlZCB1bmNsZWFyOiAgbnVtYmVyW107XHJcbiAgICBwcm90ZWN0ZWQgb2JqczogICAgIHtbdWlkOiBzdHJpbmddOiBJX01hemVPYmp9O1xyXG4gICAgcHJvdGVjdGVkIG51bV9vZl9yb29tOiAgICAgIG51bWJlciA9IDU7IC8qIOODqeODs+ODgOODoOeUn+aIkOOBrumam+OBrumDqOWxi+OBruaVsOOBruacgOWkp+aVsCAqL1xyXG4gICAgcHJvdGVjdGVkIG1heF9zaXplX29mX3Jvb206IG51bWJlciA9IDM7IC8qIOODqeODs+ODgOODoOeUn+aIkOOBrumam+OBrumDqOWxi+OBruWkp+OBjeOBlSAqL1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihhPzogX2luaXRfYXJnKSB7XHJcbiAgICAgICAgdGhpcy5tYXplX2lkID0gLTE7XHJcbiAgICAgICAgdGhpcy5zYXZlX2lkID0gLTE7XHJcbiAgICAgICAgdGhpcy51bmlxX2lkID0gJ21haV9tYXplIycgKyBfZ2V0X3V1aWQoKTtcclxuICAgICAgICB0aGlzLmZsb29yICAgPSAwO1xyXG4gICAgICAgIHRoaXMubmFtZSAgICA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2l6ZSAgICA9IG5ldyBDX1JhbmdlKFxyXG4gICAgICAgICAgICBuZXcgQ19Qb2ludCgwLCAwLCAwKSwgXHJcbiAgICAgICAgICAgIG5ldyBDX1BvaW50KDIsIDIsIDIpKTtcclxuICAgICAgICB0aGlzLmNlbGxzICAgPSB0aGlzLl9faW5pdF9tYXplKFRfTXpLaW5kLlN0b25lKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXNrcyAgID0gdGhpcy5fX2luaXRfbWFzayh0cnVlKTtcclxuICAgICAgICB0aGlzLnVuY2xlYXIgPSBbXTtcclxuICAgICAgICB0aGlzLl9faW5pdF91bmNsZWFyKCk7XHJcblxyXG4gICAgICAgIHRoaXMub2JqcyAgICA9IHt9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChhICE9PSB1bmRlZmluZWQpIHRoaXMuZGVjb2RlKGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfX2luaXRfbWF6ZShraW5kOiBUX016S2luZCA9IFRfTXpLaW5kLlN0b25lKTogQ19NYXplQ2VsbFtdW11bXSB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKTtcclxuICAgICAgICBjb25zdCBzaXplX3ogPSB0aGlzLnNpemUuc2l6ZV96KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNlbGxzOiBDX01hemVDZWxsW11bXVtdID0gQXJyYXkoc2l6ZV96KSBhcyBDX01hemVDZWxsW11bXVtdO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgY2VsbHNbel0gPSBBcnJheShzaXplX3kpIGFzIENfTWF6ZUNlbGxbXVtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsc1t6XVt5XSAgPSBBcnJheShzaXplX3gpIGFzIENfTWF6ZUNlbGxbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsc1t6XVt5XVt4XSA9IENfTWF6ZUNlbGwubmV3T2JqKHtraW5kOmtpbmQsIHBvczoge3g6eCwgeTp5LCB6Onp9fSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNlbGxzO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9faW5pdF9tYXNrKFlOOiBib29sZWFuKTogYm9vbGVhbltdW11bXSB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKTtcclxuICAgICAgICBjb25zdCBzaXplX3ogPSB0aGlzLnNpemUuc2l6ZV96KCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFza3MgICA9IEFycmF5KHNpemVfeikgYXMgYm9vbGVhbltdW11bXTtcclxuICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHNpemVfejsgeisrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFza3Nbel0gPSBBcnJheShzaXplX3kpIGFzIGJvb2xlYW5bXVtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hc2tzW3pdW3ldICA9IEFycmF5KHNpemVfeCkgYXMgYm9vbGVhbltdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFza3Nbel1beV1beF0gPSBZTjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5tYXNrcztcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2luaXRfdW5jbGVhcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeiA9IHRoaXMuc2l6ZS5zaXplX3ooKTtcclxuXHJcbiAgICAgICAgdGhpcy51bmNsZWFyID0gQXJyYXkoc2l6ZV96KTtcclxuICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHNpemVfejsgeisrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5jbGVhclt6XT0wO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFza3Nbel1beV1beF0pIHRoaXMudW5jbGVhclt6XSsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHB1YmxpYyB1aWQoKTogc3RyaW5nICAgICAge3JldHVybiB0aGlzLnVuaXFfaWR9XHJcbiAgICBwdWJsaWMgZ2V0X2xja2QoKTogVF9MY2tkIHtyZXR1cm4gVF9MY2tkLk1hemV9XHJcbiAgICBwdWJsaWMgZ2V0X25hbWUoKTogc3RyaW5nIHtyZXR1cm4gdGhpcy5uYW1lfVxyXG5cclxuICAgIHB1YmxpYyB3aXRoaW4ocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemUud2l0aGluKHApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyDjg6HjgqTjgrrlhoXjga7jgqrjg5bjgrjjgqfjgq/jg4jjgoTjg6Ljg7Pjgrnjgr/jg7znrYnjga7phY3nva5cclxuICAgIHB1YmxpYyBhZGRfb2JqKG9iajogSV9NYXplT2JqKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vYmpzW29iai51aWQoKV0gPSBvYmo7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcm12X29iaihvYmo6IElfTWF6ZU9iaik6IHZvaWQge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLm9ianNbb2JqLnVpZCgpXTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfb2JqX3h5eih4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKTogSV9NYXplT2JqfG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldF9vYmoobmV3IENfUG9pbnQoeCwgeSwgeikpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9vYmoocDogQ19Qb2ludCk6IElfTWF6ZU9ianxudWxsIHtcclxuICAgICAgICB2YXIgbGF5ZXIgPSAtMTtcclxuICAgICAgICB2YXIgb2JqOiBJX01hemVPYmp8bnVsbCAgID0gbnVsbDtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBpZCBpbiB0aGlzLm9ianMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3QgPSB0aGlzLm9ianNbaWRdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGV4aXN0LnZpZXcoKSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKGV4aXN0LndpdGhpbihwKSAmJiBleGlzdC52aWV3KCk/LmxldHRlcigpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3QudmlldygpPy5sYXllcigpPz8tOTkgPiBsYXllcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxheWVyID0gZXhpc3QudmlldygpPy5sYXllcigpPz8tOTk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqICAgPSBleGlzdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuICAgIHB1YmxpYyBleGlzdF9vYmoocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgaWQgaW4gdGhpcy5vYmpzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0ID0gdGhpcy5vYmpzW2lkXTtcclxuICAgICAgICAgICAgaWYgKGV4aXN0LndpdGhpbihwKSAmJiBleGlzdC52aWV3KCk/LmxldHRlcigpICE9PSBudWxsKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRlYW3jgYzmnaXjgZ/jg53jgqTjg7Pjg4jjgYzmnKrouI/lnLDjgaDjgaPjgZ/jgonjgZ/jgaDjga7luorjgavlpInjgYjjgotcclxuICAgIHB1YmxpYyBjaGFuZ2VfdW5leHBfdG9fZmxvb3IocDogQ19Qb2ludCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdldF9raW5kKHApID09IFRfTXpLaW5kLlVuZXhwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0X2NlbGwocCwgVF9NektpbmQuRmxvb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAyROODnuODg+ODl+OBruODnuOCueOCr+WkluOBl+mWoumAo1xyXG4gICAgcHVibGljIGNsZWFyX21hc2tfYXJvdW5kX3RoZV90ZWFtKHRlYW06IENfVGVhbSk6IHZvaWQge1xyXG4gICAgICAgIC8vIOePvuWcqOWcsOOBqOecn+aoquOBr+iHquWLleeahOOBq+imi+OBiOOCi1xyXG4gICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoMCwgLTEpKTtcclxuICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayh0ZWFtLndhbGsoKS5nZXRfYXJvdW5kKDAsICAwKSk7XHJcbiAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZCgwLCAgMSkpO1xyXG5cclxuICAgICAgICBjb25zdCBkZXB0aCAgID0gIDU7IC8vIDJE44Oe44OD44OX55So44Gu5aWl6KGM44GN6ZmQ55WMXHJcblxyXG4gICAgICAgIC8vIOWJjeaWueOBruimi+mAmuOBl+OCkuODgeOCp+ODg+OCr+OBl+OBquOBjOOCieimi+OBiOOCi+OBqOOBk+OCjeOBr+ino+aUvuOBmeOCi1xyXG4gICAgICAgIGZvciAodmFyIGQgPSAxOyBkIDwgZGVwdGg7IGQrKykge1xyXG4gICAgICAgICAgICBjb25zdCBmcm9udF9wb3MgPSB0ZWFtLndhbGsoKS5nZXRfYXJvdW5kKGQsIDApXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzX21vdmFibGUoZnJvbnRfcG9zKSkge1xyXG4gICAgICAgICAgICAgICAgLy8g5q2j6Z2i44Gr6Zqc5a6z54mp44GM54Sh44GR44KM44Gw44CB44Gd44Gu5Lih5YG044KC6KaL44GI44KLXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayh0ZWFtLndhbGsoKS5nZXRfYXJvdW5kKGQsIC0xKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayh0ZWFtLndhbGsoKS5nZXRfYXJvdW5kKGQsICAwKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayh0ZWFtLndhbGsoKS5nZXRfYXJvdW5kKGQsICAxKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmraPpnaLjgYzpmpzlrrPnianjgafjgoLjgZ3jga7miYvliY3jgb7jgafopovjgYjjgabjgZ/jgarjgonjgIHjgZ3jga7lo4HjgajkuKHlgbTjga/opovjgYjjgotcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgLTEpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgIDApKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgIDEpKTtcclxuICAgICAgICAgICAgICAgIC8vIOato+mdouOBq+manOWus+eJqeOBjOacieOBo+OBn+OCieOBneOBruWlpeOBr+imi+OBiOOBquOBhOOBruOBp+aOoue0oue1guS6hlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX19jbGVhcl9tYXNrKGNscl9wb3M6IENfUG9pbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2l6ZS53aXRoaW4oY2xyX3BvcykpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWFza3NbY2xyX3Bvcy56XVtjbHJfcG9zLnldW2Nscl9wb3MueF0pIHtcclxuICAgICAgICAgICAgdGhpcy5tYXNrc1tjbHJfcG9zLnpdW2Nscl9wb3MueV1bY2xyX3Bvcy54XSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVuY2xlYXJbY2xyX3Bvcy56XS0tO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzX2NsZWFyZWQoY2xyX3BvczogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVuY2xlYXJbY2xyX3Bvcy56XSA8IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzX21hc2tlZChwOiBDX1BvaW50KTogYm9vbGVhbiB7cmV0dXJuIHRoaXMuaXNfbWFza2VkX3h5eihwLngsIHAueSwgcC56KX1cclxuICAgIHB1YmxpYyBpc19tYXNrZWRfeHl6KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXNrc1t6XVt5XVt4XTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNfbW92YWJsZShwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNpemUud2l0aGluKHApKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmdldF9raW5kKHApKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuRmxvb3I6XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuVW5leHA6XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyVXA6XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyRG46XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyVUQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICBwdWJsaWMgZ2V0X3hfbWF4KCk6IG51bWJlciB7cmV0dXJuIHRoaXMuc2l6ZS5zaXplX3goKTt9XHJcbiAgICBwdWJsaWMgZ2V0X3lfbWF4KCk6IG51bWJlciB7cmV0dXJuIHRoaXMuc2l6ZS5zaXplX3koKTt9XHJcbiAgICBwdWJsaWMgZ2V0X3pfbWF4KCk6IG51bWJlciB7cmV0dXJuIHRoaXMuc2l6ZS5zaXplX3ooKTt9XHJcbiAgICBwdWJsaWMgZ2V0X2tpbmQgKHA6IENfUG9pbnQpOiBUX016S2luZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2l6ZS53aXRoaW4ocCkpIHJldHVybiB0aGlzLmNlbGxzW3Auel1bcC55XVtwLnhdLmdldEtpbmQoKTtcclxuICAgICAgICByZXR1cm4gVF9NektpbmQuTm9EZWY7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X2tpbmRfeHl6ICh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKTogVF9NektpbmQge1xyXG4gICAgICAgIGlmICh0aGlzLnNpemUud2l0aGluKHgsIHksIHopKSByZXR1cm4gdGhpcy5jZWxsc1t6XVt5XVt4XS5nZXRLaW5kKCk7XHJcbiAgICAgICAgcmV0dXJuIFRfTXpLaW5kLk5vRGVmO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRfY2VsbF94eXogKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpOiBDX01hemVDZWxsfHVuZGVmaW5lZCB7IFxyXG4gICAgICAgIGlmICh0aGlzLnNpemUud2l0aGluKHgsIHksIHopKSByZXR1cm4gdGhpcy5jZWxsc1t6XVt5XVt4XTtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9jZWxsIChwOiBDX1BvaW50KTogQ19NYXplQ2VsbHx1bmRlZmluZWQgeyBcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbihwKSkgcmV0dXJuIHRoaXMuY2VsbHNbcC56XVtwLnldW3AueF07XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfY2VsbChwOiBDX1BvaW50LCBrOiBUX016S2luZCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNpemUud2l0aGluKHApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2VsbHNbcC56XVtwLnldW3AueF0gPSBDX01hemVDZWxsLm5ld09iaih7a2luZDogaywgcG9zOiBwfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9jZWxsX3h5eih4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyLCBrOiBUX016S2luZCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNpemUud2l0aGluKHgsIHksIHopKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2VsbHNbel1beV1beF0gPSBDX01hemVDZWxsLm5ld09iaih7a2luZDogaywgcG9zOiB7eDp4LCB5OnksIHo6en19KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2FuX21vdmUocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemUud2l0aGluKHApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNhbl9VRChwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNfbW92YWJsZShwKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxucHVibGljIGZpbGxfY2VsbChraW5kOiBUX016S2luZCwgZmxvb3I6bnVtYmVyKTogdm9pZCB7XHJcbiAgICBmb3IgKGxldCBoID0gMDsgaCA8IHRoaXMuc2l6ZS5zaXplX3koKTsgaCsrKVxyXG4gICAgZm9yIChsZXQgdyA9IDA7IHcgPCB0aGlzLnNpemUuc2l6ZV94KCk7IHcrKylcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eih3LCBoLCBmbG9vciwga2luZCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuXHJcbnB1YmxpYyBzZXRfYm94KGtpbmQ6IFRfTXpLaW5kLCB0b3BfeDpudW1iZXIsIHRvcF95OiBudW1iZXIsIHNpemVfeDogbnVtYmVyLCBzaXplX3k6IG51bWJlciwgZmxvb3I6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKHRvcF94ICsgc2l6ZV94ID4gdGhpcy5zaXplLnNpemVfeCgpKSBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCkgLSB0b3BfeCArIDE7IFxyXG4gICAgaWYgKHRvcF95ICsgc2l6ZV95ID4gdGhpcy5zaXplLnNpemVfeSgpKSBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCkgLSB0b3BfeSArIDE7XHJcbiAgICBcclxuICAgIGNvbnN0IHRvcCA9IHRvcF95O1xyXG4gICAgY29uc3QgYnRtID0gdG9wICAgICsgc2l6ZV95IC0gMTtcclxuICAgIGNvbnN0IGxmdCA9IHRvcF94O1xyXG4gICAgY29uc3Qgcmd0ID0gbGZ0ICAgICsgc2l6ZV94IC0gMTtcclxuICAgIFxyXG4gICAgLy8g5YyX5YG0KOS4iinjgajljZflgbQo5LiLKeOCkuefs+WjgeOBq1xyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgIHRoaXMuc2V0X2NlbGxfeHl6KHgsIHRvcCwgZmxvb3IsIGtpbmQpO1xyXG4gICAgICAgIHRoaXMuc2V0X2NlbGxfeHl6KHgsIGJ0bSwgZmxvb3IsIGtpbmQpO1xyXG4gICAgfVxyXG4gICAgLy8g5p2x5YG0KOWPsynjgajopb/lgbQo5bemKeOCkuefs+WjgeOBq1xyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzaXplX3k7IHkrKykge1xyXG4gICAgICAgIHRoaXMuc2V0X2NlbGxfeHl6KGxmdCwgeSwgZmxvb3IsIGtpbmQpO1xyXG4gICAgICAgIHRoaXMuc2V0X2NlbGxfeHl6KHJndCwgeSwgZmxvb3IsIGtpbmQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG59XHJcblxyXG4vLyDpmo7kuIrjgajpmo7kuIvjgavpmo7mrrXjgpLoqK3nva7jgZnjgotcclxucHVibGljIGNyZWF0ZV9zdGFpcihmbG9vcjpudW1iZXIpOiBDX1BvaW50RGlyIHtcclxuICAgIGNvbnN0IEhfc2l6ZV94ID0gKHRoaXMuc2l6ZS5zaXplX3goKSAtIDEpIC8gMjtcclxuICAgIGNvbnN0IEhfc2l6ZV95ID0gKHRoaXMuc2l6ZS5zaXplX3koKSAtIDEpIC8gMjtcclxuICAgIGNvbnN0IHBvc194ICAgID0gMiAqIF9pcmFuZCgwLCBIX3NpemVfeCAtIDEpICsgMTtcclxuICAgIGNvbnN0IHBvc195ICAgID0gMiAqIF9pcmFuZCgwLCBIX3NpemVfeSAtIDEpICsgMTtcclxuICAgIGNvbnN0IHBvc19kICAgID0gMSAqIF9pcmFuZCgwLCBUX0RpcmVjdGlvbi5NQVgpO1xyXG5cclxuICAgIC8vIOS5seaVsOOBp+W+l+OBn+W6p+aomeOBq+majuauteOCkue9ruOBj1xyXG4gICAgaWYgKGZsb29yID49IDEpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRfY2VsbF94eXoocG9zX3gsIHBvc195LCBmbG9vciAtIDEpPy5nZXRLaW5kKCkgIT09IFRfTXpLaW5kLlN0clVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0X2NlbGxfeHl6KHBvc194LCBwb3NfeSwgZmxvb3IgLSAxLCAgVF9NektpbmQuU3RyRG4pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0X2NlbGxfeHl6KHBvc194LCBwb3NfeSwgZmxvb3IgLSAxLCAgVF9NektpbmQuU3RyVUQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmdldF9jZWxsX3h5eihwb3NfeCwgcG9zX3ksIGZsb29yKT8uZ2V0S2luZCgpICE9PSBUX016S2luZC5TdHJEbikge1xyXG4gICAgICAgIHRoaXMuc2V0X2NlbGxfeHl6KHBvc194LCBwb3NfeSwgZmxvb3IsICBUX016S2luZC5TdHJVcCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0X2NlbGxfeHl6KHBvc194LCBwb3NfeSwgZmxvb3IsICBUX016S2luZC5TdHJVRCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBDX1BvaW50RGlyKHt4OiBwb3NfeCwgeTogcG9zX3ksIHo6IGZsb29yLCBkOiBwb3NfZH0pO1xyXG59XHJcblxyXG5wdWJsaWMgY3JlYXRlX21hemUoZmxvb3I6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3Qgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpO1xyXG4gICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG5cclxuXHJcbiAgICAvLyDjg4Djg7Pjgrjjg6fjg7PjgackZmxvb3LjgafmjIflrprjgZXjgozjgZ/pmo7jgpLmnKrouI/lnLDjgavjgZnjgosgXHJcbiAgICB0aGlzLmZpbGxfY2VsbChUX016S2luZC5VbmV4cCwgZmxvb3IpO1xyXG5cclxuICAgIC8vIOODgOODs+OCuOODp+ODs+OBrui8qumDreOCkuefs+WjgeOBq+OBmeOCi1xyXG4gICAgdGhpcy5zZXRfYm94KFRfTXpLaW5kLlN0b25lLCAwLCAwLCBzaXplX3gsIHNpemVfeSwgZmxvb3IpO1xyXG5cclxuICAgIC8vIOmAmui3r+OBq+S4gOOBpOe9ruOBjeOBq+WjgeOBjOaIkOmVt+OBmeOCi+ODneOCpOODs+ODiOOCkuioreWumuOBmeOCi1xyXG4gICAgLy8g44Od44Kk44Oz44OI44GL44KJ5aOB44KS5Ly444Gw44GZ5pa55ZCR44KS44Op44Oz44OA44Og44Gr5rG644KB44KLXHJcbiAgICBjb25zdCBwb2ludHMgPSBuZXcgQ19Qb2ludFNldDJEKCk7XHJcbiAgICBmb3IgKGxldCBoID0gMjsgaCA8IHNpemVfeSAtIDI7IGggKz0gMil7XHJcbiAgICAgICAgZm9yIChsZXQgdyA9IDI7IHcgPCBzaXplX3ggLSAyOyB3ICs9IDIpe1xyXG4gICAgICAgICAgICBjb25zdCBkaSA9IF9pcmFuZCgwLCBUX0RpcmVjdGlvbi5NQVgpO1xyXG4gICAgICAgICAgICBwb2ludHMucHVzaChuZXcgQ19Qb2ludExpbmsyRCh3LCBoLCBkaSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDkubHmlbDjgafjgYTjgY/jgaTjgYvpg6jlsYvjgpLkvZzjgotcclxuICAgIGNvbnN0IHJvb21zX2FycmF5ID0gW107XHJcbiAgICBjb25zdCBudW1fb2Zfcm9vbSA9IF9pcmFuZCgwLCB0aGlzLm51bV9vZl9yb29tKTtcclxuICAgIGZvciAobGV0IGNudCA9IDA7IGNudCA8IG51bV9vZl9yb29tOyBjbnQrKykge1xyXG4gICAgICAgIGNvbnN0IGxlbmdfeCA9IF9pcmFuZCgxLCAgdGhpcy5tYXhfc2l6ZV9vZl9yb29tKSAqIDIgKyAxO1xyXG4gICAgICAgIGNvbnN0IGxlbmdfeSA9IF9pcmFuZCgxLCAgdGhpcy5tYXhfc2l6ZV9vZl9yb29tKSAqIDIgKyAxO1xyXG4gICAgICAgIGNvbnN0IHJvb21feCA9IF9pcmFuZCgwLCAoc2l6ZV94IC0gbGVuZ194KSAvIDIpICogMjtcclxuICAgICAgICBjb25zdCByb29tX3kgPSBfaXJhbmQoMCwgKHNpemVfeSAtIGxlbmdfeSkgLyAyKSAqIDI7XHJcbiAgICAgICAgcm9vbXNfYXJyYXkucHVzaCh7dHg6IHJvb21feCwgdHk6IHJvb21feSwgc3g6IGxlbmdfeCwgc3k6IGxlbmdfeX0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOmDqOWxi+OBruS4reOBruODneOCpOODs+ODiOOCkuWJiumZpOOBmeOCi1xyXG4gICAgZm9yIChjb25zdCByb29tIG9mIHJvb21zX2FycmF5KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IHBvaW50cy5zZXQubGVuZ3RoOyBpaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSAgcG9pbnRzLnNldFtpaV07XHJcbiAgICAgICAgICAgIGlmIChwID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKCAgICAocC54ID49IHJvb20udHgpIFxyXG4gICAgICAgICAgICAgICAgJiYgIChwLnggPD0gcm9vbS50eCArIHJvb20uc3gpXHJcbiAgICAgICAgICAgICAgICAmJiAgKHAueSA+PSByb29tLnR5KVxyXG4gICAgICAgICAgICAgICAgJiYgIChwLnkgPD0gcm9vbS50eSArIHJvb20uc3kpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzLnJlbW92ZShwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIOODneOCpOODs+ODiOOBi+OCieWjgeOCkuaIkOmVt+OBleOBm+OBpui/t+i3r+OCkuS9nOOCi1xyXG4gICAgZm9yIChjb25zdCBwIG9mIHBvaW50cy5zZXQpIHtcclxuICAgICAgICBpZiAocCA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDjg53jgqTjg7Pjg4jjga7kvY3nva7jgavnn7Plo4HjgpLnva7jgY9cclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihwLngsIHAueSwgZmxvb3IsIFRfTXpLaW5kLlN0b25lKTtcclxuXHJcbiAgICAgICAgLy8g5p+x44Gu5p2x6KW/5Y2X5YyX44Gu44GE44Ga44KM44GL44Gr44KC55+z5aOB44KS572u44GPXHJcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gWzAsIDAsIDAsIDBdO1xyXG4gICAgICAgIGNvbnN0IGRpID0gQ19Qb2ludExpbmsyRC5jYXN0KHApPy5kaSA/PyBUX0RpcmVjdGlvbi5YO1xyXG4gICAgICAgIGlmIChkaSA9PT0gVF9EaXJlY3Rpb24uWCkgY29udGludWU7XHJcbiAgICAgICAgZGlyZWN0aW9uW2RpXSA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0X2NlbGxfeHl6KFxyXG4gICAgICAgICAgICBwLnggLSBkaXJlY3Rpb25bVF9EaXJlY3Rpb24uV10gKyBkaXJlY3Rpb25bVF9EaXJlY3Rpb24uRV0sIFxyXG4gICAgICAgICAgICBwLnkgLSBkaXJlY3Rpb25bVF9EaXJlY3Rpb24uTl0gKyBkaXJlY3Rpb25bVF9EaXJlY3Rpb24uU10sIFxyXG4gICAgICAgICAgICBmbG9vcixcclxuICAgICAgICAgICAgVF9NektpbmQuU3RvbmVcclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIOmWiemOluepuumWk+OBjOWHuuadpeOBpuOBhOOBn+OCieWHuuWPo+OCkuS9nOOCi1xyXG4gICAgLy8g44Od44Kk44Oz44OI44KS44OI44Os44O844K544GX44Gm44CB5pei5Ye644Gu44Od44Kk44Oz44OI44Gr57mL44GM44Gj44Gm44GE44Gf44KJ6ZaJ6Y6W56m66ZaTXHJcbiAgICBmb3IgKGNvbnN0IHNldCBvZiBwb2ludHMuc2V0KSB7XHJcbiAgICAgICAgaWYgKHNldCA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgY29uc3QgW3luLCB0cmFjZV9zZXRdID0gdGhpcy5jaGVja19jbG9zZShzZXQueCwgc2V0LnksIHBvaW50cywgbmV3IENfUG9pbnRTZXQyRCgpKTtcclxuICAgICAgICBpZiAoeW4pIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuX2V4aXQodHJhY2Vfc2V0LCBUX016S2luZC5VbmV4cCwgZmxvb3IpO1xyXG4gICAgICAgICAgICBpZiAodHJhY2Vfc2V0ICE9PSB1bmRlZmluZWQpIGZvciAoY29uc3QgdCBvZiB0cmFjZV9zZXQuc2V0KSBwb2ludHMucmVtb3ZlKHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5cclxucHJvdGVjdGVkIGNoZWNrX2Nsb3NlKHg6IG51bWJlciwgeTogbnVtYmVyLCBwb2ludF9zZXQ6IENfUG9pbnRTZXQyRCwgdHJhY2Vfc2V0OiBDX1BvaW50U2V0MkR8dW5kZWZpbmVkKTogW2Jvb2xlYW4sIENfUG9pbnRTZXQyRHx1bmRlZmluZWRdIHtcclxuICAgIGlmICh4IDwgMiB8fCB5IDwgMiB8fCB4ID4gdGhpcy5zaXplLnNpemVfeCgpIC0gMiB8fCB5ID4gdGhpcy5zaXplLnNpemVfeSgpIC0gMikgcmV0dXJuIFtmYWxzZSwgdW5kZWZpbmVkXTtcclxuXHJcbiAgICBpZiAocG9pbnRfc2V0ID09PSB1bmRlZmluZWQpIHJldHVybiBbZmFsc2UsIHVuZGVmaW5lZF07XHJcbiAgICBpZiAocG9pbnRfc2V0Py5pc19leGlzdCh4LCB5KSA9PT0gZmFsc2UpIHJldHVybiBbZmFsc2UsIHVuZGVmaW5lZF07XHJcblxyXG4gICAgaWYgKHRyYWNlX3NldCAhPT0gdW5kZWZpbmVkICYmIHRyYWNlX3NldD8uaXNfZXhpc3QoeCwgeSkgPT09IHRydWUpICByZXR1cm4gW3RydWUsICB0cmFjZV9zZXRdO1xyXG5cclxuICAgIGNvbnN0IHAgPSBwb2ludF9zZXQuZ2V0X3BvaW50KHgsIHkpO1xyXG4gICAgdHJhY2Vfc2V0ID8/PSBuZXcgQ19Qb2ludFNldDJEKCk7XHJcbiAgICB0cmFjZV9zZXQ/LnB1c2gobmV3IENfUG9pbnRMaW5rMkQoeCwgeSwgQ19Qb2ludExpbmsyRC5jYXN0KHApPy5kaSkpO1xyXG5cclxuICAgIGxldCBuZXh0X3g6IG51bWJlciA9IDAsIG5leHRfeTogbnVtYmVyID0gMDtcclxuICAgIHN3aXRjaCAoQ19Qb2ludExpbmsyRC5jYXN0KHApPy5kaSkge1xyXG4gICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjogIC8vIOWMl1xyXG4gICAgICAgICAgICBuZXh0X3ggPSB4O1xyXG4gICAgICAgICAgICBuZXh0X3kgPSB5IC0gMjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOiAgLy8g5p2xXHJcbiAgICAgICAgICAgIG5leHRfeCA9IHggKyAyO1xyXG4gICAgICAgICAgICBuZXh0X3kgPSB5O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6ICAvLyDljZdcclxuICAgICAgICAgICAgbmV4dF94ID0geDtcclxuICAgICAgICAgICAgbmV4dF95ID0geSArIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogIC8vIOilv1xyXG4gICAgICAgICAgICBuZXh0X3ggPSB4IC0gMjtcclxuICAgICAgICAgICAgbmV4dF95ID0geTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrX2Nsb3NlKG5leHRfeCwgbmV4dF95LCBwb2ludF9zZXQsIHRyYWNlX3NldCk7XHJcbn1cclxuXHJcbnByb3RlY3RlZCBvcGVuX2V4aXQocDogQ19Qb2ludFNldDJEfHVuZGVmaW5lZCwga2luZDogVF9NektpbmQsIGZsb29yOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChwID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBjbnQgPSBfaXJhbmQoMCwgcC5zZXQubGVuZ3RoIC0gMSk7XHJcbiAgICBjb25zdCBwcCAgPSAgcC5zZXRbY250XTtcclxuXHJcbiAgICBsZXQgZGlyZWN0aW9uID0gWzAsIDAsIDAsIDBdO1xyXG4gICAgY29uc3QgZGkgPSBDX1BvaW50TGluazJELmNhc3QocHApPy5kaSA/PyBUX0RpcmVjdGlvbi5OXHJcbiAgICBkaXJlY3Rpb25bZGldID0gMTtcclxuXHJcbiAgICB0aGlzLnNldF9jZWxsX3h5eihcclxuICAgICAgICBwcC54IC0gZGlyZWN0aW9uW1RfRGlyZWN0aW9uLlddICsgZGlyZWN0aW9uW1RfRGlyZWN0aW9uLkVdLCBcclxuICAgICAgICBwcC55IC0gZGlyZWN0aW9uW1RfRGlyZWN0aW9uLk5dICsgZGlyZWN0aW9uW1RfRGlyZWN0aW9uLlNdLCBcclxuICAgICAgICBmbG9vcixcclxuICAgICAgICBraW5kIFxyXG4gICAgKTtcclxuICAgIHJldHVybjtcclxufVxyXG5cclxuLypcclxucHVibGljIHN0YXRpYyBmcm9tX29ial90b19zdHJpbmcob2E6IENfTWF6ZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2EsIG51bGwsIFwiXFx0XCIpO1xyXG59XHJcbnB1YmxpYyBzdGF0aWMgZnJvbV9vYmpBcnJheV90b19zdHJpbmcob2FhOiB7W3VpZDogc3RyaW5nXTogQ19NYXplfSk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBvYSA9IFtdIGFzIENfTWF6ZVtdO1xyXG4gICAgZm9yIChjb25zdCBpaSBpbiBvYWEpIG9hLnB1c2gob2FhW2lpXSk7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2EsIG51bGwsIFwiXFx0XCIpO1xyXG59XHJcbnB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdfdG9fb2JqKHR4dDogc3RyaW5nKTogQ19NYXplIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaiAgID0gSlNPTi5wYXJzZSh0eHQpIGFzIEpTT05fTWF6ZVtdO1xyXG4gICAgICAgIHJldHVybiBuZXcgQ19NYXplKCkuZGVjb2RlKGopO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX01hemUoKTtcclxuICAgIH07XHJcbn1cclxucHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ190b19vYmpBcnJheSh0eHQ6IHN0cmluZyk6IHtbdWlkOiBzdHJpbmddOiBDX01hemV9IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaiAgID0gSlNPTi5wYXJzZSh0eHQpIGFzIEpTT05fTWF6ZVtdO1xyXG4gICAgICAgIGNvbnN0IG1wYSA9IHt9IGFzIHtbaWQ6IHN0cmluZ106IENfTWF6ZX07XHJcbiAgICAgICAgZm9yIChjb25zdCBqaiBvZiBqKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFhYSA9IG5ldyBDX01hemUoKS5kZWNvZGUoamopO1xyXG4gICAgICAgICAgICBtcGFbYWFhLnVpZCgpXSA9IGFhYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1wYTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH07XHJcbn1cclxuKi9cclxuXHJcbiAgICBwdWJsaWMgdG9fbGV0dGVyKHA6IENfUG9pbnQpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNlbGxzW3Auel1bcC55XVtwLnhdLnRvX2xldHRlcigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHRvX3N0cmluZyhmbG9vcjogbnVtYmVyID0gMCwgZGVidWdfbW9kZTogYm9vbGVhbiA9IGZhbHNlKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG5cclxuICAgICAgICB2YXIgcmV0X3N0cjogc3RyaW5nID0gJyc7XHJcbiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBzaXplX3k7IHkrKykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB0aGlzLmdldF9vYmpfeHl6KHgsIHksIGZsb29yKTtcclxuICAgICAgICAgICAgICAgIGlmICghZGVidWdfbW9kZSAmJiB0aGlzLm1hc2tzW2Zsb29yXVt5XVt4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldF9zdHIgKz0gJ++8uCc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9ial9jID0gb2JqPy52aWV3KCk/LmxldHRlcigpID8/IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iaiA9PT0gbnVsbCB8fCBvYmpfYyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRfc3RyICs9IHRoaXMuY2VsbHNbZmxvb3JdW3ldW3hdLnRvX2xldHRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldF9zdHIgKz0gb2JqX2M7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldF9zdHIgKz0gXCJcXG5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldF9zdHI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTWF6ZSB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKTtcclxuICAgICAgICBjb25zdCBzaXplX3ogPSB0aGlzLnNpemUuc2l6ZV96KCk7XHJcblxyXG4gICAgICAgIHZhciB6X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgdmFyIHlfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIHZhciB4X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHhfYXJyYXkucHVzaCh0aGlzLmNlbGxzW3pdW3ldW3hdLmVuY29kZSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHlfYXJyYXkucHVzaCh4X2FycmF5LmpvaW4oJ1gnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgel9hcnJheS5wdXNoKHlfYXJyYXkuam9pbignWScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWF6ZV9zdHIgPSB6X2FycmF5LmpvaW4oJ1onKTtcclxuXHJcbiAgICAgICAgdmFyIHpfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBzaXplX3o7IHorKykge1xyXG4gICAgICAgICAgICB2YXIgeV9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBzaXplX3k7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHhfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeF9hcnJheS5wdXNoKHRoaXMubWFza3Nbel1beV1beF0gPyAnMScgOiAnMCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeV9hcnJheS5wdXNoKHhfYXJyYXkuam9pbignWCcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB6X2FycmF5LnB1c2goeV9hcnJheS5qb2luKCdZJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtYXNrX3N0ciA9IHpfYXJyYXkuam9pbignWicpO1xyXG5cclxuICAgICAgICBsZXQgb2JqcyA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gdGhpcy5vYmpzKSBvYmpzLnB1c2godGhpcy5vYmpzW2lpXS5lbmNvZGUoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgIHRoaXMubWF6ZV9pZCxcclxuICAgICAgICAgICAgdW5pcV9pZDogdGhpcy51bmlxX2lkLFxyXG4gICAgICAgICAgICBzYXZlX2lkOiB0aGlzLnNhdmVfaWQsXHJcbiAgICAgICAgICAgIGZsb29yOiAgIHRoaXMuZmxvb3IsXHJcbiAgICAgICAgICAgIG5hbWU6ICAgIHRoaXMubmFtZSxcclxuICAgICAgICAgICAgb2JqczogICAgb2JqcyxcclxuICAgICAgICAgICAgc2l6ZV94OiAgdGhpcy5zaXplLnNpemVfeCgpLFxyXG4gICAgICAgICAgICBzaXplX3k6ICB0aGlzLnNpemUuc2l6ZV95KCksXHJcbiAgICAgICAgICAgIHNpemVfejogIHRoaXMuc2l6ZS5zaXplX3ooKSxcclxuICAgICAgICAgICAgbWF6ZTogICAgbWF6ZV9zdHIsXHJcbiAgICAgICAgICAgIG1hc2s6ICAgIG1hc2tfc3RyLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoYTogSlNPTl9NYXplfHVuZGVmaW5lZCk6IENfTWF6ZSB7XHJcbiAgICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChhLmlkICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5tYXplX2lkID0gYS5pZDtcclxuICAgICAgICBpZiAoYS51bmlxX2lkICE9PSB1bmRlZmluZWQpIHRoaXMudW5pcV9pZCA9IGEudW5pcV9pZDtcclxuICAgICAgICBpZiAoYS5zYXZlX2lkICE9PSB1bmRlZmluZWQpIHRoaXMuc2F2ZV9pZCA9IGEuc2F2ZV9pZDtcclxuICAgICAgICBpZiAoYS5mbG9vciAgICE9PSB1bmRlZmluZWQpIHRoaXMuZmxvb3IgICA9IGEuZmxvb3I7XHJcbiAgICAgICAgaWYgKGEubmFtZSAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm5hbWUgICAgPSBhLm5hbWU7XHJcblxyXG4gICAgICAgIGlmIChhLm9ianMgICAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9ianMgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqc29uX29iaiBvZiBhLm9ianMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld19vYmogPSBDX01hemVPYmoubmV3T2JqKGpzb25fb2JqKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub2Jqc1tuZXdfb2JqLnVpZCgpXSA9IG5ld19vYmo7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhLnNpemVfeCAhPT0gdW5kZWZpbmVkICYmIGEuc2l6ZV95ICE9PSB1bmRlZmluZWQgJiYgYS5zaXplX3ogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNpemUgID0gbmV3IENfUmFuZ2UoXHJcbiAgICAgICAgICAgICAgICBuZXcgQ19Qb2ludCgwLCAwLCAwKSwgXHJcbiAgICAgICAgICAgICAgICBuZXcgQ19Qb2ludChhLnNpemVfeCAtIDEsIGEuc2l6ZV95IC0gMSwgYS5zaXplX3ogLSAxKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5jZWxscyAgID0gdGhpcy5fX2luaXRfbWF6ZShUX016S2luZC5TdG9uZSk7XHJcbiAgICAgICAgICAgIHRoaXMubWFza3MgICA9IHRoaXMuX19pbml0X21hc2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX19pbml0X3VuY2xlYXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgICAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV96ID0gdGhpcy5zaXplLnNpemVfeigpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGEubWF6ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbi8qXHJcbiAgICAgICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspXHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspXHJcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbel1beV1beF0uc2V0KFRfTXpLaW5kLlN0b25lKTtcclxuICAgICAgICAgICAgfVxyXG4qL1xyXG4gICAgICAgICAgICBjb25zdCB6X2FycmF5OiBzdHJpbmdbXSA9IGEubWF6ZS5zcGxpdCgnWicpO1xyXG4gICAgICAgICAgICBjb25zdCB6X21heCA9IF9taW4oW3NpemVfeiwgel9hcnJheS5sZW5ndGhdKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCB6X21heDsgeisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5X2FycmF5OiBzdHJpbmdbXSA9IHpfYXJyYXlbel0uc3BsaXQoJ1knKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHlfbWF4ID0gIF9taW4oW3NpemVfeSwgeV9hcnJheS5sZW5ndGhdKTsgXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHlfbWF4OyB5KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4X2FycmF5OiBzdHJpbmdbXSA9IHlfYXJyYXlbeV0uc3BsaXQoJ1gnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4X21heCA9ICBfbWluKFtzaXplX3gsIHhfYXJyYXkubGVuZ3RoXSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgeF9tYXg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga2luZCA9IHBhcnNlSW50KHhfYXJyYXlbeF0sIDE2KTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbel1beV1beF0gPSBDX01hemVDZWxsLm5ld09iaih7a2luZDoga2luZCwgcG9zOiB7eDp4LCB5OnksIHo6en19KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYS5tYXNrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fX2luaXRfbWFzayh0cnVlKTtcclxuICAgICAgICAgICAgY29uc3Qgel9hcnJheTogc3RyaW5nW10gPSBhLm1hc2suc3BsaXQoJ1onKTtcclxuICAgICAgICAgICAgY29uc3Qgel9tYXggPSBfbWluKFtzaXplX3osIHpfYXJyYXkubGVuZ3RoXSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgel9tYXg7IHorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeV9hcnJheTogc3RyaW5nW10gPSB6X2FycmF5W3pdLnNwbGl0KCdZJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5X21heCA9ICBfbWluKFtzaXplX3ksIHlfYXJyYXkubGVuZ3RoXSk7IFxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB5X21heDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeF9hcnJheTogc3RyaW5nW10gPSB5X2FycmF5W3ldLnNwbGl0KCdYJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeF9tYXggPSAgX21pbihbc2l6ZV94LCB4X2FycmF5Lmxlbmd0aF0pOyBcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHhfbWF4OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhfYXJyYXlbeF0gIT09ICcwJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrc1t6XVt5XVt4XSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc2tzW3pdW3ldW3hdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fX2luaXRfdW5jbGVhcigpOyAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZW5jb2RlX2FsbChhbGxfbWF6ZTogQ19NYXplW10pOiBKU09OX01hemVbXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX21hemVfZGF0YTogSlNPTl9NYXplW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBtYXplIG9mIGFsbF9tYXplKSB7XHJcbiAgICAgICAgICAgIGFsbF9tYXplX2RhdGEucHVzaChtYXplLmVuY29kZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbF9tYXplX2RhdGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZV9hbGwoYWxsX21hemVfZGF0YTogSlNPTl9NYXplW10pOiBDX01hemVbXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX21hemU6IENfTWF6ZVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgbWF6ZV9kYXRhIG9mIGFsbF9tYXplX2RhdGEpIHtcclxuICAgICAgICAgICAgYWxsX21hemUucHVzaCgobmV3IENfTWF6ZSh7fSkpLmRlY29kZShtYXplX2RhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbF9tYXplO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWxlcnQoKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJNYXplIEluZm86XCJcclxuICAgICAgICAgICAgKyBcIlxcbm1hemUgaWQgOlwiICsgKHRoaXMubWF6ZV9pZCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5mbG9vcjogXCIgICArICh0aGlzLmZsb29yICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudW5pcSBpZCA6XCIgKyAodGhpcy51bmlxX2lkID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNhdmUgaWQgOlwiICsgKHRoaXMuc2F2ZV9pZCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5uYW1lOiAgIFwiICArICh0aGlzLm5hbWUgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2l6ZV94OiBcIiAgKyAodGhpcy5zaXplLnNpemVfeCgpID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNpemVfeTogXCIgICsgKHRoaXMuc2l6ZS5zaXplX3koKSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zaXplX3o6IFwiICArICh0aGlzLnNpemUuc2l6ZV96KCkgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFsZXJ0X21hemUoZmxvb3I6IG51bWJlciA9IDApOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIk1hemUgTWFwOlwiXHJcbiAgICAgICAgICAgICsgXCJtYXplOlxcblwiICAgICArICh0aGlzLnRvX3N0cmluZyhmbG9vciwgdHJ1ZSkgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhbGVydF9tYXNrKGZsb29yOiBudW1iZXIgPSAwKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJNYXNrIE1hcDpcIlxyXG4gICAgICAgICAgICArIFwibWFzazpcXG5cIiAgICAgKyAodGhpcy50b19zdHJpbmcoZmxvb3IsIGZhbHNlKSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBfZ2V0X3V1aWQgfSBmcm9tIFwiLi4vZF91dGwvRl9SYW5kXCI7XHJcbmltcG9ydCB7IFRfTXpLaW5kIH0gIGZyb20gXCIuL1RfTXpLaW5kXCI7XHJcbmltcG9ydCB7IEpTT05fQW55IH0gIGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuaW1wb3J0IHsgQ19NYXplT2JqLCBJX01hemVPYmosIEpTT05fTWF6ZU9iaiB9IGZyb20gXCIuL0NfTWF6ZU9ialwiO1xyXG5pbXBvcnQgeyBUX1dhbGwgfSAgICBmcm9tICcuL0NfV2FsbCc7XHJcbmltcG9ydCB7IFRfUmVjdCB9IGZyb20gXCIuL0NfTWF6ZU9ialZpZXdcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fTWF6ZUNlbGwgZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBraW5kPzogVF9NektpbmRcclxuICAgIG9iaj86ICBKU09OX01hemVPYmosXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX01hemVDZWxsICB7XHJcbiAgICBwcm90ZWN0ZWQga2luZDogICBUX016S2luZDtcclxuICAgIHByb3RlY3RlZCBteV9vYmo6IElfTWF6ZU9iajtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5ld09iaihqOiBKU09OX01hemVDZWxsKTogQ19NYXplQ2VsbCB7XHJcbiAgICAgICAgc3dpdGNoIChqLmtpbmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5Ob0RlZjogcmV0dXJuIG5ldyBDX01hemVDZWxsTm9EZWYoaik7IFxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlVua3duOiByZXR1cm4gbmV3IENfTWF6ZUNlbGxVbmt3bihqKTsgXHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuRW1wdHk6IHJldHVybiBuZXcgQ19NYXplQ2VsbEVtcHR5KGopOyBcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5GbG9vcjogcmV0dXJuIG5ldyBDX01hemVDZWxsRmxvb3Ioaik7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuVW5leHA6IHJldHVybiBuZXcgQ19NYXplQ2VsbFVuZXhwKGopO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0b25lOiByZXR1cm4gbmV3IENfTWF6ZUNlbGxTdG9uZShqKTtcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVcDogcmV0dXJuIG5ldyBDX01hemVDZWxsU3RyVXAoaik7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyRG46IHJldHVybiBuZXcgQ19NYXplQ2VsbFN0ckRuKGopOyBcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVRDogcmV0dXJuIG5ldyBDX01hemVDZWxsU3RyVUQoaik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQ19NYXplQ2VsbE5vRGVmKGopO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihqOiBKU09OX01hemVDZWxsKSB7XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG4gICAgICAgIGoub2JqLmNsbmFtZSA/Pz0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG5cclxuICAgICAgICB0aGlzLmtpbmQgICA9IGoua2luZCA/PyBUX016S2luZC5Ob0RlZjtcclxuICAgICAgICB0aGlzLm15X29iaiA9IENfTWF6ZU9iai5uZXdPYmooai5vYmopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldE9iaigpOiAgSV9NYXplT2JqIHtyZXR1cm4gdGhpcy5teV9vYmp9XHJcbiAgICBwdWJsaWMgZ2V0S2luZCgpOiBUX016S2luZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2luZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9fbGV0dGVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubXlfb2JqLnZpZXcoKT8ubGV0dGVyKCkgPz8gJ++8uCc7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fbGV0dGVyKGxldHRlcjogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhUX016S2luZCkpIHtcclxuICAgICAgICAgICAgaWYgKGxldHRlciA9PT0ga2V5KSByZXR1cm4gVF9NektpbmRba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFRfTXpLaW5kLk5vRGVmO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcm93MkQocmVjdDogVF9SZWN0KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5teV9vYmoudmlldygpPy5kcm93MkQocmVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyb3czRChmcm90OiBUX1dhbGwsIGJhY2s6IFRfV2FsbCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubXlfb2JqLnZpZXcoKT8uZHJvdzNEKGZyb3QsIGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5raW5kLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLFwiMFwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVjb2RlKHN0cjogc3RyaW5nLCBqPzogSlNPTl9NYXplQ2VsbCk6IENfTWF6ZUNlbGx8dW5kZWZpbmVkIHtcclxuICAgICAgICAgY29uc3Qga2luZCA9IHBhcnNlSW50KHN0ciwgMTYpIGFzIFRfTXpLaW5kO1xyXG4gICAgICAgICByZXR1cm4gQ19NYXplQ2VsbC5uZXdPYmooe2tpbmQ6IGtpbmQsIHBvczogaj8ucG9zfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGxOb0RlZiBleHRlbmRzIENfTWF6ZUNlbGwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVDZWxsfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGogPz89IHtraW5kOiBUX016S2luZC5Ob0RlZn07XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG5cclxuICAgICAgICBqLm9iai5jYW5fdGhyID0gJzAnO1xyXG4gICAgICAgIGoub2JqLnBvcyAgICAgPSB7eDpqLngsIHk6ai55LCB6Omouen07XHJcbiAgICAgICAgai5vYmoudmlldyAgICA9ICB7XHJcbiAgICAgICAgICAgIGxheWVyOiAwLCBsZXR0ZXI6ICfnlpEnLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgJzAnLFxyXG4gICAgICAgICAgICBwYWRfdDogMC4wLCBwYWRfZDogMC4wLCBwYWRfczogMC4wLFxyXG4gICAgICAgICAgICBjb2xfZjogJycsIGNvbF9iOiAnJywgY29sX3M6ICcnLCBjb2xfdDogJycsIGNvbF9kOiAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnJywgY29sXzI6ICcnLCBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGxVbmt3biBleHRlbmRzIENfTWF6ZUNlbGwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVDZWxsfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGogPz89IHtraW5kOiBUX016S2luZC5Vbmt3bn07XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG5cclxuICAgICAgICBqLm9iai5jYW5fdGhyID0gJzAnO1xyXG4gICAgICAgIGoub2JqLnBvcyAgICAgPSB7eDpqLngsIHk6ai55LCB6Omouen07XHJcbiAgICAgICAgai5vYmoudmlldyAgICA9ICB7XHJcbiAgICAgICAgICAgIGxheWVyOiAwLCBsZXR0ZXI6ICforI4nLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgJzAnLFxyXG4gICAgICAgICAgICBwYWRfdDogMC4wLCBwYWRfZDogMC4wLCBwYWRfczogMC4wLFxyXG4gICAgICAgICAgICBjb2xfZjogJycsIGNvbF9iOiAnJywgY29sX3M6ICcnLCBjb2xfdDogJycsIGNvbF9kOiAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnJywgY29sXzI6ICcnLCBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsRW1wdHkgZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuRW1wdHl9O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcxJztcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn54ShJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcwJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcnLCBjb2xfZDogJycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJycsIGNvbF8yOiAnJywgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbEZsb29yIGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLkZsb29yfTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMSc7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ+OAgCcsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMScsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbiAgICAgICAgICAgIGNvbF9mOiAnJywgY29sX2I6ICcnLCBjb2xfczogJycsIGNvbF90OiAnIzY2NjZmZicsIGNvbF9kOiAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnIzk5OTlmZicsIGNvbF8yOiAnIzMzMzNmZicsIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbFVuZXhwIGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLlVuZXhwfTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMSc7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ+ODuycsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMScsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbiAgICAgICAgICAgIGNvbF9mOiAnJywgY29sX2I6ICcnLCBjb2xfczogJycsIGNvbF90OiAnIzY2ZmZmZicsIGNvbF9kOiAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnIzk5OTlmZicsIGNvbF8yOiAnIzY2ZmZmZicsIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbFN0b25lIGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLlN0b25lfTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMCc7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ++8gycsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMScsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbiAgICAgICAgICAgIGNvbF9mOiAnIzAwZmYwMCcsIGNvbF9iOiAnJywgY29sX3M6ICcjMDBlZTAwJywgY29sX3Q6ICcnLCBjb2xfZDogJycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJyMwMDAwZmYnLCBjb2xfMjogJyMwMGVlMDAnLCBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGxTdHJVcCBleHRlbmRzIENfTWF6ZUNlbGwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVDZWxsfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGogPz89IHtraW5kOiBUX016S2luZC5TdHJVcH07XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG5cclxuICAgICAgICBqLm9iai5jYW5fdGhyID0gJzEnO1xyXG4gICAgICAgIGoub2JqLnBvcyAgICAgPSB7eDpqLngsIHk6ai55LCB6Omouen07XHJcbiAgICAgICAgai5vYmoudmlldyAgICA9ICB7XHJcbiAgICAgICAgICAgIGxheWVyOiAwLCBsZXR0ZXI6ICfkuIonLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgJzEnLFxyXG4gICAgICAgICAgICBwYWRfdDogMC4wLCBwYWRfZDogMC4wLCBwYWRfczogMC4wLFxyXG4gICAgICAgICAgICBjb2xfZjogJycsIGNvbF9iOiAnJywgY29sX3M6ICcnLCBjb2xfdDogJycsIGNvbF9kOiAnI2ZmZmZjYycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJyMwMDAwZmYnLCBjb2xfMjogJyNmZmZmNjYnLCBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGxTdHJEbiBleHRlbmRzIENfTWF6ZUNlbGwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVDZWxsfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGogPz89IHtraW5kOiBUX016S2luZC5TdHJEbn07XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG5cclxuICAgICAgICBqLm9iai5jYW5fdGhyID0gJzEnO1xyXG4gICAgICAgIGoub2JqLnBvcyAgICAgPSB7eDpqLngsIHk6ai55LCB6Omouen07XHJcbiAgICAgICAgai5vYmoudmlldyAgICA9ICB7XHJcbiAgICAgICAgICAgIGxheWVyOiAwLCBsZXR0ZXI6ICfkuIsnLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgJzEnLFxyXG4gICAgICAgICAgICBwYWRfdDogMC4wLCBwYWRfZDogMC4wLCBwYWRfczogMC4wLFxyXG4gICAgICAgICAgICBjb2xfZjogJycsIGNvbF9iOiAnJywgY29sX3M6ICcnLCBjb2xfdDogJyNmZmZmY2MnLCBjb2xfZDogJycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJyMwMDAwZmYnLCBjb2xfMjogJyNmZmZmNjYnLCBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGxTdHJVRCBleHRlbmRzIENfTWF6ZUNlbGwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVDZWxsfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGogPz89IHtraW5kOiBUX016S2luZC5TdHJVRH07XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG5cclxuICAgICAgICBqLm9iai5jYW5fdGhyID0gJzEnO1xyXG4gICAgICAgIGoub2JqLnBvcyAgICAgPSB7eDpqLngsIHk6ai55LCB6Omouen07XHJcbiAgICAgICAgai5vYmoudmlldyAgICA9ICB7XHJcbiAgICAgICAgICAgIGxheWVyOiAwLCBsZXR0ZXI6ICfmrrUnLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgJzEnLFxyXG4gICAgICAgICAgICBwYWRfdDogMC4wLCBwYWRfZDogMC4wLCBwYWRfczogMC4wLFxyXG4gICAgICAgICAgICBjb2xfZjogJycsIGNvbF9iOiAnJywgY29sX3M6ICcnLCBjb2xfdDogJyNmZmZmY2MnLCBjb2xfZDogJyNmZmZmY2MnLCBcclxuICAgICAgICAgICAgY29sX2w6ICcjMDAwMGZmJywgY29sXzI6ICcjZmZmZjY2JywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgX2FsZXJ0IH0gZnJvbSBcIi4uL2RfY21uL2dsb2JhbFwiO1xyXG5pbXBvcnQgeyBDX0RzcE1lc3NhZ2UgfSBmcm9tIFwiLi4vZF91dGwvQ19Ec3BNZXNzYWdlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fTWF6ZUluZm8ge1xyXG4gICAgbmFtZTogICAgICBzdHJpbmc7XHJcbiAgICBtYm5hbWU6ICAgIHN0cmluZztcclxuICAgIGx2OiAgICAgICAgbnVtYmVyO1xyXG4gICAgc2l6ZV94OiAgICBudW1iZXI7XHJcbiAgICBzaXplX3k6ICAgIG51bWJlcjtcclxuICAgIHNpemVfejogICAgbnVtYmVyO1xyXG4gICAgbWF4X3Jvb206ICBudW1iZXI7XHJcbiAgICByb29tX3NpemU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X21hemVpbmZvX2luZm8oYT86IEpTT05fTWF6ZUluZm8pOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICBhbGVydChcIk1hemVJbmZvIERhdGE6XCJcclxuICAgICAgICArIFwiXFxubmFtZSA6IFwiICAgICAgICsgKGEubmFtZSAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubWJuYW1lOiBcIiAgICAgICsgKGEubWJuYW1lICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubHYgOlwiICAgICAgICAgICsgKGEubHYgICAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2l6ZV94OiBcIiAgICAgICsgKGEuc2l6ZV94ICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2l6ZV95OiBcIiAgICAgICsgKGEuc2l6ZV95ICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2l6ZV96OiBcIiAgICAgICsgKGEuc2l6ZV96ICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubWF4X29mX3Jvb206IFwiICsgKGEubWF4X3Jvb20gID8/ICc/JylcclxuICAgICAgICArIFwiXFxucm9vbV9zaXplOiBcIiAgICsgKGEucm9vbV9zaXplID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX01hemVJbmZvIHtcclxuICAgIHB1YmxpYyBuYW1lOiAgICAgIHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIG1ibmFtZTogICAgc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgbHY6ICAgICAgICBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHNpemVfeDogICAgbnVtYmVyID0gMztcclxuICAgIHB1YmxpYyBzaXplX3k6ICAgIG51bWJlciA9IDM7XHJcbiAgICBwdWJsaWMgc2l6ZV96OiAgICBudW1iZXIgPSAzO1xyXG4gICAgcHVibGljIG1heF9yb29tOiAgbnVtYmVyID0gMTtcclxuICAgIHB1YmxpYyByb29tX3NpemU6IG51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldF90YmxfYWxsKCk6IENfTWF6ZUluZm9bXSB7XHJcbiAgICAgICAgY29uc3QgbWF6ZWluZm86IENfTWF6ZUluZm9bXSA9IFtdO1xyXG4gICAgICAgIG1hemVpbmZvLnB1c2goXHJcbiAgICAgICAgICAgIG5ldyBDX01hemVJbmZvKCkuZGVjb2RlKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICAgXHQnbWF6ZTAxMCcsIFxyXG4gICAgICAgICAgICAgICAgbWJuYW1lOiBcdCfmlZnnt7TloLQnLCBcclxuICAgICAgICAgICAgICAgIGx2OiAgICAgXHQgMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3g6IFx0MTEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV95OiBcdDExLCBcclxuICAgICAgICAgICAgICAgIHNpemVfejogXHQgMywgXHJcbiAgICAgICAgICAgICAgICBtYXhfcm9vbTogXHQgMiwgXHJcbiAgICAgICAgICAgICAgICByb29tX3NpemU6IFx0IDMgXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWF6ZWluZm8ucHVzaChcclxuICAgICAgICAgICAgbmV3IENfTWF6ZUluZm8oKS5kZWNvZGUoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogICBcdCdtYXplMDExJywgXHJcbiAgICAgICAgICAgICAgICBtYm5hbWU6IFx0J+Wni+OBvuOCiuOBrui/t+WuricsIFxyXG4gICAgICAgICAgICAgICAgbHY6ICAgICBcdCAxLCBcclxuICAgICAgICAgICAgICAgIHNpemVfeDogXHQyMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3k6IFx0MjEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV96OiBcdCA1LCBcclxuICAgICAgICAgICAgICAgIG1heF9yb29tOiBcdCAzLCBcclxuICAgICAgICAgICAgICAgIHJvb21fc2l6ZTogXHQgMyBcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBtYXplaW5mby5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgQ19NYXplSW5mbygpLmRlY29kZSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAgIFx0J21hemUwMTInLCBcclxuICAgICAgICAgICAgICAgIG1ibmFtZTogXHQn5pqX44GN5qOu44Gu6L+35a6uJywgXHJcbiAgICAgICAgICAgICAgICBsdjogICAgIFx0IDEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV94OiBcdDI1LCBcclxuICAgICAgICAgICAgICAgIHNpemVfeTogXHQyNSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3o6IFx0IDcsIFxyXG4gICAgICAgICAgICAgICAgbWF4X3Jvb206IFx0IDUsIFxyXG4gICAgICAgICAgICAgICAgcm9vbV9zaXplOiBcdCAzIFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICApXHJcbiAgICAgICAgbWF6ZWluZm8ucHVzaChcclxuICAgICAgICAgICAgbmV3IENfTWF6ZUluZm8oKS5kZWNvZGUoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogICBcdCdtYXplMDEzJywgXHJcbiAgICAgICAgICAgICAgICBtYm5hbWU6IFx0J+m7kumtlOOBruWcsOS4i+Wik+WcsCcsIFxyXG4gICAgICAgICAgICAgICAgbHY6ICAgICBcdCAxLCBcclxuICAgICAgICAgICAgICAgIHNpemVfeDogXHQzMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3k6IFx0MzEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV96OiBcdDEwLCBcclxuICAgICAgICAgICAgICAgIG1heF9yb29tOiBcdCA1LCBcclxuICAgICAgICAgICAgICAgIHJvb21fc2l6ZTogXHQgNSBcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICByZXR1cm4gbWF6ZWluZm87XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKGo/OiBKU09OX01hemVJbmZvKSB7XHJcbiAgICAgICAgaWYgKGogIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTWF6ZUluZm8ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICAgICAgdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICBtYm5hbWU6ICAgIHRoaXMubWJuYW1lLFxyXG4gICAgICAgICAgICBsdjogICAgICAgIHRoaXMubHYsXHJcbiAgICAgICAgICAgIHNpemVfeDogICAgdGhpcy5zaXplX3gsXHJcbiAgICAgICAgICAgIHNpemVfeTogICAgdGhpcy5zaXplX3ksXHJcbiAgICAgICAgICAgIHNpemVfejogICAgdGhpcy5zaXplX3osXHJcbiAgICAgICAgICAgIG1heF9yb29tOiAgdGhpcy5tYXhfcm9vbSxcclxuICAgICAgICAgICAgcm9vbV9zaXplOiB0aGlzLnJvb21fc2l6ZSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo/OiBKU09OX01hemVJbmZvKTogQ19NYXplSW5mbyB7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChqLm5hbWUgICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm5hbWUgICAgICA9IGoubmFtZTtcclxuICAgICAgICBpZiAoai5tYm5hbWUgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5tYm5hbWUgICAgPSBqLm1ibmFtZTtcclxuICAgICAgICBpZiAoai5sdiAgICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5sdiAgICAgICAgPSBqLmx2O1xyXG4gICAgICAgIGlmIChqLnNpemVfeCAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLnNpemVfeCAgICA9IGouc2l6ZV94O1xyXG4gICAgICAgIGlmIChqLnNpemVfeSAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLnNpemVfeSAgICA9IGouc2l6ZV95O1xyXG4gICAgICAgIGlmIChqLnNpemVfeiAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLnNpemVfeiAgICA9IGouc2l6ZV96O1xyXG4gICAgICAgIGlmIChqLm1heF9yb29tICAhPT0gdW5kZWZpbmVkKSB0aGlzLm1heF9yb29tICA9IGoubWF4X3Jvb207XHJcbiAgICAgICAgaWYgKGoucm9vbV9zaXplICE9PSB1bmRlZmluZWQpIHRoaXMucm9vbV9zaXplID0gai5yb29tX3NpemU7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWxlcnQoKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJNYXplSW5mbyBEYXRhOlwiXHJcbiAgICAgICAgICAgICsgXCJcXG5uYW1lIDogXCIgICAgICAgKyAodGhpcy5uYW1lICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubWJuYW1lOiBcIiAgICAgICsgKHRoaXMubWJuYW1lICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmx2IDpcIiAgICAgICAgICArICh0aGlzLmx2ICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zaXplX3g6IFwiICAgICAgKyAodGhpcy5zaXplX3ggICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2l6ZV95OiBcIiAgICAgICsgKHRoaXMuc2l6ZV95ICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNpemVfejogXCIgICAgICArICh0aGlzLnNpemVfeiAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5tYXhfb2Zfcm9vbTogXCIgKyAodGhpcy5tYXhfcm9vbSAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxucm9vbV9zaXplOiBcIiAgICsgKHRoaXMucm9vbV9zaXplID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ19Qb2ludCB9ICAgICAgICAgICAgICAgICAgIGZyb20gXCIuL0NfUG9pbnRcIjtcclxuaW1wb3J0IHsgQ19Qb2ludERpciwgSlNPTl9Qb2ludERpciB9IGZyb20gXCIuL0NfUG9pbnREaXJcIjtcclxuaW1wb3J0IHsgSV9BYnN0cmFjdCwgSV9KU09OX1VuaXEsIEpTT05fQW55IH0gICAgIGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuaW1wb3J0IHsgX2dldF91dWlkIH0gICAgICAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuaW1wb3J0IHsgXHJcbiAgICBDX01hemVPYmpWaWV3LCBcclxuICAgIElfTWF6ZU9ialZpZXcsIFxyXG4gICAgSlNPTl9NYXplT2JqVmlldyBcclxufSBmcm9tIFwiLi9DX01hemVPYmpWaWV3XCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX01hemVPYmogZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBjbG5hbWU/OiAgICBzdHJpbmcsXHJcbiAgICB1bmlxX2lkPzogICBzdHJpbmcsIFxyXG4gICAgcG9zPzogICAgICAgSlNPTl9Qb2ludERpcixcclxuICAgIHZpZXc/OiAgICAgIEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkLFxyXG4gICAgdGhyPzogICAgICAgc3RyaW5nLCBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSV9NYXplT2JqIGV4dGVuZHMgSV9KU09OX1VuaXEsIElfQWJzdHJhY3Qge1xyXG4gICAgZ2V0X3BkOiAgICAgKCk9PkNfUG9pbnREaXI7XHJcbiAgICB3aXRoaW46ICAgICAocDogQ19Qb2ludCk9PmJvb2xlYW47XHJcbiAgICB2aWV3OiAgICAgICAoKT0+SV9NYXplT2JqVmlld3x1bmRlZmluZWQ7XHJcbiAgICBjYW5UaHJvdWdoOiAoKT0+Ym9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfTWF6ZU9iaiBpbXBsZW1lbnRzIElfTWF6ZU9iaiB7XHJcbiAgICBwcm90ZWN0ZWQgY2xuYW1lOiAgICBzdHJpbmcgPSAnQ19NYXplT2JqJztcclxuXHJcbiAgICBwcml2YXRlICAgdW5pcV9pZDogICBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgcG9zOiAgICAgICBDX1BvaW50RGlyO1xyXG4gICAgcHJvdGVjdGVkIG15X3ZpZXc6ICAgSV9NYXplT2JqVmlld3x1bmRlZmluZWQ7XHJcbiAgICBwcm90ZWN0ZWQgY2FuX3RocjogICBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbmV3T2JqKGo/OiBKU09OX01hemVPYmp8dW5kZWZpbmVkKTogSV9NYXplT2JqIHtcclxuICAgICAgICBqID8/PSB7fTtcclxuICAgICAgICBqLmNsbmFtZSA/Pz0gQ19NYXplT2JqLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICAgICAgc3dpdGNoIChqLmNsbmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIENfTWF6ZU9iai5jb25zdHJ1Y3Rvci5uYW1lOiByZXR1cm4gbmV3IENfTWF6ZU9iaihqKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX01hemVPYmooaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbmV3T2JqKGo/OiBKU09OX01hemVPYmp8dW5kZWZpbmVkKTogSV9NYXplT2JqIHtcclxuICAgICAgICByZXR1cm4gQ19NYXplT2JqLm5ld09iaihqKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZU9ianx1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnVuaXFfaWQgICAgPSAnbWF6ZW9ial8nICsgX2dldF91dWlkKCk7XHJcbiAgICAgICAgdGhpcy5jbG5hbWUgICAgID0gIENfTWF6ZU9iai5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgICAgIHRoaXMucG9zICAgICAgICA9ICBuZXcgQ19Qb2ludERpcih7eDowLCB5OjAsIHo6MCwgZDowfSk7XHJcbiAgICAgICAgdGhpcy5teV92aWV3ICAgID0gIHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmNhbl90aHIgICAgPSAgdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKGogIT09IHVuZGVmaW5lZCkgdGhpcy5fX2luaXQoaik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfX2luaXQoajogSlNPTl9NYXplT2JqfHVuZGVmaW5lZCk6IENfTWF6ZU9iaiB7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChqLnVuaXFfaWQgIT09IHVuZGVmaW5lZCkgdGhpcy51bmlxX2lkICAgPSBqLnVuaXFfaWQ7XHJcbiAgICAgICAgaWYgKGouY2xuYW1lICAhPT0gdW5kZWZpbmVkKSB0aGlzLmNsbmFtZSAgICA9IGouY2xuYW1lO1xyXG4gICAgICAgIGlmIChqLnBvcyAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5wb3MuZGVjb2RlKGoucG9zKTtcclxuICAgICAgICBpZiAoai52aWV3ICAgICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGoudmlldykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5teV92aWV3ID8/PSBDX01hemVPYmpWaWV3Lm5ld09iaihqLnZpZXcpOyBcclxuICAgICAgICAgICAgfSBlbHNlIHRoaXMubXlfdmlldyAgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChqLmNhbl90aHIgIT09IHVuZGVmaW5lZCkgdGhpcy5jYW5fdGhyID0gai5jYW5fdGhyICE9PSAnMCcgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcbiAgICBwdWJsaWMgdWlkKCk6IHN0cmluZyB7cmV0dXJuIHRoaXMudW5pcV9pZH1cclxuXHJcbiAgICBwdWJsaWMgdmlldygpOiBJX01hemVPYmpWaWV3fHVuZGVmaW5lZCB7cmV0dXJuIHRoaXMubXlfdmlld31cclxuICAgIHB1YmxpYyBzZXRWaWV3KHZpZXc6IElfTWF6ZU9ialZpZXd8dW5kZWZpbmVkKTogdm9pZCB7dGhpcy5teV92aWV3ID0gdmlld31cclxuXHJcbiAgICBwdWJsaWMgY2FuVGhyb3VnaCgpOiBib29sZWFuIHtyZXR1cm4gdGhpcy5jYW5fdGhyfVxyXG4gICAgcHVibGljIHNldFRocm91Z2godGhyOiBib29sZWFuKTogYm9vbGVhbiB7cmV0dXJuIHRoaXMuY2FuX3RociA9IHRocn1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X3BkKCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ19Qb2ludERpcih0aGlzLnBvcyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BkKHA6IENfUG9pbnREaXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBvcyA9IHA7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgd2l0aGluKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3Mud2l0aGluKHApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9NYXplT2JqIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1bmlxX2lkOiB0aGlzLnVuaXFfaWQsXHJcbiAgICAgICAgICAgIGNsbmFtZTogIHRoaXMuY2xuYW1lLFxyXG4gICAgICAgICAgICBwb3M6ICAgICB0aGlzLnBvcy5lbmNvZGUoKSxcclxuICAgICAgICAgICAgdmlldzogICAgdGhpcy5teV92aWV3Py5lbmNvZGUoKSA/PyB7fSxcclxuICAgICAgICAgICAgY2FuX3RocjogdGhpcy5jYW5fdGhyID8gJzEnIDogJzAnLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVjb2RlKGo/OiBKU09OX01hemVPYmp8dW5kZWZpbmVkKTogSV9NYXplT2JqIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX2luaXQoaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZShqPzogSlNPTl9NYXplT2JqfHVuZGVmaW5lZCk6IElfTWF6ZU9iaiB7XHJcbiAgICAgICAgcmV0dXJuIENfTWF6ZU9iai5uZXdPYmooaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgSV9BYnN0cmFjdCwgSlNPTl9BbnkgfSBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcbmltcG9ydCB7IFRfV2FsbCB9ICAgICAgICAgICAgICAgZnJvbSBcIi4uL2RfbWRsL0NfV2FsbFwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSV9NYXplT2JqVmlldyBleHRlbmRzIElfQWJzdHJhY3Qge1xyXG4gICAgLy8g6KGo56S66Zai5L+CKDJEcHJlKS4vQ19XYWxsXHJcbiAgICBsYXllcjogICAoKT0+bnVtYmVyO1xyXG4gICAgbGV0dGVyOiAgKCk9PnN0cmluZ3xudWxsOyAvLyBudWxsOiDopovjgYjjgarjgYTjgIHkvZXjgoLjgarjgYRcclxuXHJcbiAgICAvLyDooajnpLrplqLkv4IoM0QpXHJcbiAgICBjYW5TaG93OiAoKT0+Ym9vbGVhbjtcclxuICAgIGRyb3cyRDogIChmbG9vcjogVF9SZWN0KT0+dm9pZDtcclxuICAgIGRyb3czRDogIChmcm90OiAgVF9XYWxsLCBiYWNrOiBUX1dhbGwpPT52b2lkO1xyXG5cclxuICAgIHBhZF90OiAgICgpPT5udW1iZXI7IC8v5LiK5YG044Gu56m644GNKOWJsuWQiDogMOOBi+OCiTEpIFxyXG4gICAgcGFkX2Q6ICAgKCk9Pm51bWJlcjsgLy/luorlgbTjga7nqbrjgY0o5Ymy5ZCIOiAw44GL44KJMSkgXHJcbiAgICBwYWRfczogICAoKT0+bnVtYmVyOyAvL+aoquWBtOOBruepuuOBjSjlibLlkIg6IDDjgYvjgokxKSBcclxuICAgIGNvbF9mOiAgICgpPT5zdHJpbmd8bnVsbDsgLy/mraPpnaLjga7oibIoQ1NT44Kr44Op44O8KeOAgm51bGzjga/pgI/mmI5cclxuICAgIGNvbF9iOiAgICgpPT5zdHJpbmd8bnVsbDsgLy/og4zpnaLjga7oibIoQ1NT44Kr44Op44O8KeOAgm51bGzjga/pgI/mmI5cclxuICAgIGNvbF9zOiAgICgpPT5zdHJpbmd8bnVsbDsgLy/mqKrlgbTjga7oibIoQ1NT44Kr44Op44O8KeOAgm51bGzjga/pgI/mmI5cclxuICAgIGNvbF90OiAgICgpPT5zdHJpbmd8bnVsbDsgLy/kuIrpg6jjga7oibIoQ1NT44Kr44Op44O8KeOAgm51bGzjga/pgI/mmI7jgILjgoTjgoTjgZPjgZfjgYTjgYzjgIHniankvZPjga7lupXpnaLjgavlvZPjgZ/jgotcclxuICAgIGNvbF9kOiAgICgpPT5zdHJpbmd8bnVsbDsgLy/kuIvpg6jjga7oibIoQ1NT44Kr44Op44O8KeOAgm51bGzjga/pgI/mmI7jgILjgoTjgoTjgZPjgZfjgYTjgYzjgIHniankvZPjga7lpKnkupXjgavlvZPjgZ/jgotcclxuICAgIGNvbF9sOiAgICgpPT5zdHJpbmd8bnVsbDsgLy/jg6njgqTjg7Pjga7oibIoQ1NT44Kr44Op44O8KVxyXG5cclxuICAgIGNvbF8yOiAgICgpPT5zdHJpbmd8bnVsbDsgLy8yROODnuODg+ODl+OBruiJsihDU1Pjgqvjg6njg7wpXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9NYXplT2JqVmlldyBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGNsbmFtZT86IHN0cmluZyxcclxuICAgIGxheWVyPzogIG51bWJlcixcclxuICAgIGxldHRlcj86IHN0cmluZyxcclxuICAgIHNob3c/OiAgIHN0cmluZyxcclxuICAgIHBhZF90PzogIG51bWJlciwgLy8g44Kq44OW44K444Kn44Kv44OI5LiK6YOo44Gu6ZqZ6ZaT44Gu5Ymy5ZCIKDAuMCDjgYvjgokgMS4wKSBcclxuICAgIHBhZF9kPzogIG51bWJlciwgLy8g44Kq44OW44K444Kn44Kv44OI5LiL6YOo44Gu6ZqZ6ZaT44Gu5Ymy5ZCIKDAuMCDjgYvjgokgMS4wKSBcclxuICAgIHBhZF9zPzogIG51bWJlciwgLy8g44Kq44OW44K444Kn44Kv44OI5ZGo5Zuy44Gu6ZqZ6ZaT44Gu5Ymy5ZCIKDAuMCDjgYvjgokgMS4wKSBcclxuICAgIGNvbF9mPzogIHN0cmluZ3xudWxsLCAvLyDjgqrjg5bjgrjjgqfjgq/jg4jmraPpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBjb2xfYj86ICBzdHJpbmd8bnVsbCwgLy8g44Kq44OW44K444Kn44Kv44OI5q2j6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgY29sX3M/OiAgc3RyaW5nfG51bGwsIC8vIOOCquODluOCuOOCp+OCr+ODiOWBtOmdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIGNvbF90PzogIHN0cmluZ3xudWxsLCAvLyDjgqrjg5bjgrjjgqfjgq/jg4jkuIrpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBjb2xfZD86ICBzdHJpbmd8bnVsbCwgLy8g44Kq44OW44K444Kn44Kv44OI5bqV6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgY29sX2w/OiAgc3RyaW5nfG51bGwsIC8vIOOCquODluOCuOOCp+OCr+ODiOOBrue3muOBrkNTU+OCq+ODqeODvCBcclxuICAgIGNvbF8yPzogIHN0cmluZ3xudWxsLCAvLyAyROODnuODg+ODl+OBrumdouOBrkNTU+OCq+ODqeODvFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBUX3h5ICAgPSB7eDogbnVtYmVyLCB5OiBudW1iZXJ9XHJcbmV4cG9ydCB0eXBlIFRfUmVjdCA9IHt0bDogVF94eSwgdHI6IFRfeHksIGRsOiBUX3h5LCBkcjogVF94eX07XHJcblxyXG5leHBvcnQgY2xhc3MgQ19NYXplT2JqVmlldyBpbXBsZW1lbnRzIElfTWF6ZU9ialZpZXcge1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBjb24zRDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfHVuZGVmaW5lZDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0X2NvbnRleHQzRCgpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR8dW5kZWZpbmVkIHtyZXR1cm4gdGhpcz8uY29uM0R9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldF9jb250ZXh0M0QoY29uM0Q/OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHt0aGlzLmNvbjNEID0gY29uM0R9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBjb24yRDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfHVuZGVmaW5lZDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0X2NvbnRleHQyRCgpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR8dW5kZWZpbmVkIHtyZXR1cm4gdGhpcz8uY29uMkR9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldF9jb250ZXh0MkQoY29uMkQ/OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHt0aGlzLmNvbjJEID0gY29uMkR9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBuZXdPYmooaj86IEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkKTogSV9NYXplT2JqVmlldyB7XHJcbiAgICAgICAgaiA/Pz0ge307XHJcbiAgICAgICAgai5jbG5hbWUgPz89IENfTWF6ZU9ialZpZXcuY29uc3RydWN0b3IubmFtZTtcclxuICAgICAgICBzd2l0Y2ggKGouY2xuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ19NYXplT2JqVmlldy5jb25zdHJ1Y3Rvci5uYW1lOiAgICAgcmV0dXJuIG5ldyBDX01hemVPYmpWaWV3KGopO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX01hemVPYmpWaWV3KGopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG5ld09iaihqPzogSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQpOiBJX01hemVPYmpWaWV3IHtcclxuICAgICAgICByZXR1cm4gQ19NYXplT2JqVmlldy5uZXdPYmooaik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2xuYW1lOiAgICBzdHJpbmcgPSAnQ19NYXplT2JqVmlldyc7XHJcblxyXG4gICAgcHJpdmF0ZSBteV9sYXllcjogIG51bWJlcjsgICAgICAvLyAyROihqOekuuOBruaZguOBrkNTU+ODrOOCpOODpOODvOOAguWQjOS9jee9ruOBruOCquODluOCuOOCp+OBruWGheOBk+OBruWApOOBjOWkp+OBjeOBhOeJqeOBjOihqOekuuOBleOCjOOCi1xyXG4gICAgcHJpdmF0ZSBteV9sZXR0ZXI6IHN0cmluZ3xudWxsOyAvLyAyROihqOekuuOBruaZguOBruWFqOinkuaWh+Wtl+OAgm51bGzjgarjgonpgI/mmI5cclxuXHJcbiAgICBwcml2YXRlIG15X3Nob3c6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIG15X3BhZF90OiAgbnVtYmVyOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jkuIrpg6jjga7pmpnplpPjga7libLlkIgoMC4wIOOBi+OCiSAxLjApIFxyXG4gICAgcHJpdmF0ZSBteV9wYWRfZDogIG51bWJlcjsgLy8g44Kq44OW44K444Kn44Kv44OI5LiL6YOo44Gu6ZqZ6ZaT44Gu5Ymy5ZCIKDAuMCDjgYvjgokgMS4wKSBcclxuICAgIHByaXZhdGUgbXlfcGFkX3M6ICBudW1iZXI7IC8vIOOCquODluOCuOOCp+OCr+ODiOWRqOWbsuOBrumamemWk+OBruWJsuWQiCgwLjAg44GL44KJIDEuMCkgXHJcblxyXG4gICAgcHJpdmF0ZSBteV9jb2xfZjogIHN0cmluZ3xudWxsOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jmraPpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBwcml2YXRlIG15X2NvbF9iOiAgc3RyaW5nfG51bGw7IC8vIOOCquODluOCuOOCp+OCr+ODiOato+mdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIHByaXZhdGUgbXlfY29sX3M6ICBzdHJpbmd8bnVsbDsgLy8g44Kq44OW44K444Kn44Kv44OI5YG06Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgcHJpdmF0ZSBteV9jb2xfdDogIHN0cmluZ3xudWxsOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jkuIrpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBwcml2YXRlIG15X2NvbF9kOiAgc3RyaW5nfG51bGw7IC8vIOOCquODluOCuOOCp+OCr+ODiOW6lemdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIHByaXZhdGUgbXlfY29sX2w6ICBzdHJpbmd8bnVsbDsgLy8g44Kq44OW44K444Kn44Kv44OI44Gu57ea44GuQ1NT44Kr44Op44O8IFxyXG5cclxuICAgIHByaXZhdGUgbXlfY29sXzI6ICBzdHJpbmd8bnVsbDsgLy8gMkTjg57jg4Pjg5fjga7pnaLjga5DU1Pjgqvjg6njg7wgXHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVPYmpWaWV3fHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuY2xuYW1lICAgICA9ICB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMubXlfbGF5ZXIgICA9ICAtMjtcclxuICAgICAgICB0aGlzLm15X2xldHRlciAgPSAgbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5teV9wYWRfdCAgID0gIDAuMDtcclxuICAgICAgICB0aGlzLm15X3BhZF9kICAgPSAgMC4wO1xyXG4gICAgICAgIHRoaXMubXlfcGFkX3MgICA9ICAwLjA7XHJcblxyXG4gICAgICAgIHRoaXMubXlfc2hvdyAgICA9ICB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLm15X2NvbF9mICAgPSAnI2Y4ZjhmOCc7IFxyXG4gICAgICAgIHRoaXMubXlfY29sX2IgICA9ICcjYWFhYWFhJzsgXHJcbiAgICAgICAgdGhpcy5teV9jb2xfcyAgID0gJyNkZGRkZGQnOyBcclxuICAgICAgICB0aGlzLm15X2NvbF90ICAgPSAnI2ZmZmZmZic7IFxyXG4gICAgICAgIHRoaXMubXlfY29sX2QgICA9ICcjY2NjY2NjJzsgXHJcbiAgICAgICAgdGhpcy5teV9jb2xfbCAgID0gJyMzMzMzMzMnOyBcclxuXHJcbiAgICAgICAgdGhpcy5teV9jb2xfMiAgID0gJyNjY2NjY2MnOyBcclxuXHJcbiAgICAgICAgaWYgKGogIT09IHVuZGVmaW5lZCkgdGhpcy5fX2luaXQoaik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9faW5pdChqOiBKU09OX01hemVPYmpWaWV3fHVuZGVmaW5lZCk6IElfTWF6ZU9ialZpZXcge1xyXG4gICAgICAgIGlmIChqID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoai5jbG5hbWUgICE9PSB1bmRlZmluZWQpIHRoaXMuY2xuYW1lICAgID0gai5jbG5hbWU7XHJcbiAgICAgICAgaWYgKGoubGF5ZXIgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2xheWVyICA9IGoubGF5ZXI7XHJcbiAgICAgICAgaWYgKGoubGV0dGVyICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2xldHRlciA9IGoubGV0dGVyICE9PSAnJyAgPyBqLmxldHRlciA6IG51bGw7IFxyXG4gICAgICAgIGlmIChqLnBhZF90ICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9wYWRfdCAgPSBqLnBhZF90OyBcclxuICAgICAgICBpZiAoai5wYWRfZCAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfcGFkX2QgID0gai5wYWRfZDsgXHJcbiAgICAgICAgaWYgKGoucGFkX3MgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X3BhZF9zICA9IGoucGFkX3M7IFxyXG4gICAgICAgIGlmIChqLnNob3cgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9zaG93ICAgPSBqLnNob3cgICAhPT0gJzAnID8gdHJ1ZSAgICAgOiBmYWxzZTsgXHJcbiAgICAgICAgaWYgKGouY29sX2YgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2NvbF9mICA9IGouY29sX2YgICE9PSAnJyAgPyBqLmNvbF9mICA6IG51bGw7IFxyXG4gICAgICAgIGlmIChqLmNvbF9iICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9jb2xfYiAgPSBqLmNvbF9iICAhPT0gJycgID8gai5jb2xfYiAgOiBudWxsOyBcclxuICAgICAgICBpZiAoai5jb2xfcyAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfY29sX3MgID0gai5jb2xfcyAgIT09ICcnICA/IGouY29sX3MgIDogbnVsbDsgXHJcbiAgICAgICAgaWYgKGouY29sX3QgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2NvbF90ICA9IGouY29sX3QgICE9PSAnJyAgPyBqLmNvbF90ICA6IG51bGw7IFxyXG4gICAgICAgIGlmIChqLmNvbF9kICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9jb2xfZCAgPSBqLmNvbF9kICAhPT0gJycgID8gai5jb2xfZCAgOiBudWxsOyBcclxuICAgICAgICBpZiAoai5jb2xfbCAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfY29sX2wgID0gai5jb2xfbCAgIT09ICcnICA/IGouY29sX2wgIDogbnVsbDsgXHJcbiAgICAgICAgaWYgKGouY29sXzIgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2NvbF8yICA9IGouY29sXzIgICE9PSAnJyAgPyBqLmNvbF8yICA6IG51bGw7IFxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGF5ZXIoKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5teV9sYXllcjt9XHJcbiAgICBwdWJsaWMgc2V0X2xheWVyKGxheWVyOiBudW1iZXIpIHt0aGlzLm15X2xheWVyID0gbGF5ZXJ9XHJcblxyXG4gICAgcHVibGljIGxldHRlcigpOiAgc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2xldHRlcn1cclxuICAgIHB1YmxpYyBzZXRfbGV0dGVyKGxldHRlcjogc3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfbGV0dGVyID0gbGV0dGVyfVxyXG5cclxuICAgIHB1YmxpYyBjYW5TaG93KCk6IGJvb2xlYW4ge3JldHVybiB0aGlzLm15X3Nob3d9O1xyXG4gICAgcHVibGljIHNldFNob3coY2FuX3Nob3c6IGJvb2xlYW4pOiBib29sZWFuIHtyZXR1cm4gdGhpcy5teV9zaG93ID0gY2FuX3Nob3d9O1xyXG5cclxuICAgIHB1YmxpYyBwYWRfdCgpOiAgbnVtYmVyIHtyZXR1cm4gdGhpcy5teV9wYWRfdH1cclxuICAgIHB1YmxpYyBwYWRfZCgpOiAgbnVtYmVyIHtyZXR1cm4gdGhpcy5teV9wYWRfZH1cclxuICAgIHB1YmxpYyBwYWRfcygpOiAgbnVtYmVyIHtyZXR1cm4gdGhpcy5teV9wYWRfc31cclxuICAgIHB1YmxpYyBzZXRfcGFkX3QocGFkX3Q6IG51bWJlcik6IG51bWJlciB7cmV0dXJuIHRoaXMubXlfcGFkX3QgPSB0aGlzLm15X3BhZF9kICsgcGFkX3QgPCAxLjAgPyBwYWRfdCA6IDAuOTkgLSB0aGlzLm15X3BhZF9kfVxyXG4gICAgcHVibGljIHNldF9wYWRfZChwYWRfZDogbnVtYmVyKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5teV9wYWRfZCA9IHRoaXMubXlfcGFkX3QgKyBwYWRfZCA8IDEuMCA/IHBhZF9kIDogMC45OSAtIHRoaXMubXlfcGFkX3R9XHJcbiAgICBwdWJsaWMgc2V0X3BhZF9zKHBhZF9zOiBudW1iZXIpOiBudW1iZXIge3JldHVybiB0aGlzLm15X3BhZF9zID0gcGFkX3N9XHJcblxyXG4gICAgcHVibGljIGNvbF9mKCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfZn0gXHJcbiAgICBwdWJsaWMgY29sX2IoKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9ifSBcclxuICAgIHB1YmxpYyBjb2xfcygpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX3N9IFxyXG4gICAgcHVibGljIGNvbF90KCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfdH0gXHJcbiAgICBwdWJsaWMgY29sX2QoKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9kfSBcclxuICAgIHB1YmxpYyBjb2xfbCgpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX2x9IFxyXG4gICAgcHVibGljIHNldF9jb2xfZihjb2xfZjogc3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX2YgPSBjb2xfZn0gXHJcbiAgICBwdWJsaWMgc2V0X2NvbF9iKGNvbF9iOiBzdHJpbmd8bnVsbCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfYiA9IGNvbF9ifSBcclxuICAgIHB1YmxpYyBzZXRfY29sX3MoY29sX3M6IHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9zID0gY29sX3N9IFxyXG4gICAgcHVibGljIHNldF9jb2xfdChjb2xfdDogc3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX3QgPSBjb2xfdH0gXHJcbiAgICBwdWJsaWMgc2V0X2NvbF9kKGNvbF9kOiBzdHJpbmd8bnVsbCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfZCA9IGNvbF9kfSBcclxuICAgIHB1YmxpYyBzZXRfY29sX2woY29sX2w6IHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9sID0gY29sX2x9IFxyXG5cclxuICAgIHB1YmxpYyBjb2xfMigpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sXzJ9XHJcbiAgICBwdWJsaWMgc2V0X2NvbF8yKGNvbF8yOiBzdHJpbmd8bnVsbCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfMiA9IGNvbF8yfSBcclxuXHJcbiAgICBwdWJsaWMgZHJvdzJEKHJlY3Q6IFRfUmVjdCk6IHZvaWQge1xyXG4gICAgICAgIGRyb3cyRF9jZWxsKHJlY3QsIHRoaXMuY29sXzIoKSA/PyAnI2NjY2NjYycsIHRoaXMuY29sX2woKSA/PyAnIzk5OTlmZicpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcm93M0QoZnJvdDogVF9XYWxsLCBiYWNrOiBUX1dhbGwpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRyb3czRF9vYmpfYmFjayAgICAgIChmcm90LCBiYWNrKTtcclxuICAgICAgICB0aGlzLmRyb3czRF9vYmpfZG93biAgICAgIChmcm90LCBiYWNrKTtcclxuICAgICAgICB0aGlzLmRyb3czRF9vYmpfdG9wICAgICAgIChmcm90LCBiYWNrKTtcclxuICAgICAgICB0aGlzLmRyb3czRF9vYmpfcmlnaHRfc2lkZShmcm90LCBiYWNrKTtcclxuICAgICAgICB0aGlzLmRyb3czRF9vYmpfbGVmdF9zaWRlIChmcm90LCBiYWNrKTtcclxuICAgICAgICB0aGlzLmRyb3czRF9vYmpfZnJvbnQgICAgIChmcm90LCBiYWNrKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZHJvdzNEX29ial9kb3duKFxyXG4gICAgICAgIGZyb3Q6ICBUX1dhbGwsIFxyXG4gICAgICAgIGJhY2s6ICBUX1dhbGwsIFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblNob3coKSB8fCB0aGlzLmNvbF90KCkgPT09IG51bGwpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5wYWRfcygpIDw9IDAuMCAmJiB0aGlzLnBhZF90KCkgPj0gMS4wKSB7XHJcbiAgICAgICAgICAgIGRyb3czRF9jZWxsX2Zsb29yKGZyb3QsIGJhY2ssIHRoaXMuY29sX3QoKSA/PyAnIzY2NjZmZicsIHRoaXMuY29sX2woKSA/PyAnIzk5OTlmZicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbyA9IF9fY2FsY19wYWRkaW5nX29iaih0aGlzLCBmcm90LCBiYWNrKTtcclxuICAgICAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgICAgIHRsOiBvLmZkbCxcclxuICAgICAgICAgICAgdHI6IG8uZmRyLFxyXG4gICAgICAgICAgICBkcjogby5iZHIsXHJcbiAgICAgICAgICAgIGRsOiBvLmJkbCxcclxuICAgICAgICB9XHJcbiAgICAgICAgZHJvdzNEX2NlbGwocmVjdCwgdGhpcy5jb2xfdCgpLCB0aGlzLmNvbF9sKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJvdzNEX29ial90b3AoXHJcbiAgICAgICAgZnJvdDogIFRfV2FsbCwgXHJcbiAgICAgICAgYmFjazogIFRfV2FsbCwgXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuU2hvdygpIHx8IHRoaXMuY29sX2QoKSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnBhZF9zKCkgPD0gMC4wICYmIHRoaXMucGFkX2QoKSA+PSAxLjApIHtcclxuICAgICAgICAgICAgZHJvdzNEX2NlbGxfY2VpbGluZyhmcm90LCBiYWNrLCB0aGlzLmNvbF9kKCkgPz8gJyNhYWFhYWEnLCB0aGlzLmNvbF9sKCkgPz8gJyM5OTk5ZmYnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IG8gPSBfX2NhbGNfcGFkZGluZ19vYmoodGhpcywgZnJvdCwgYmFjayk7XHJcbiAgICAgICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgICAgICB0bDogby5mdGwsXHJcbiAgICAgICAgICAgIHRyOiBvLmZ0cixcclxuICAgICAgICAgICAgZHI6IG8uYnRyLFxyXG4gICAgICAgICAgICBkbDogby5idGwsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRyb3czRF9jZWxsKHJlY3QsIHRoaXMuY29sX2QoKSwgdGhpcy5jb2xfbCgpKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZHJvdzNEX29ial9mcm9udChcclxuICAgICAgICBmcm90OiAgVF9XYWxsLCBcclxuICAgICAgICBiYWNrOiAgVF9XYWxsLCBcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5TaG93KCkgfHwgdGhpcy5jb2xfZigpID09PSBudWxsKSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBjb25zdCBvID0gX19jYWxjX3BhZGRpbmdfb2JqKHRoaXMsIGZyb3QsIGJhY2spO1xyXG4gICAgICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICAgICAgdGw6IG8uZnRsLCBcclxuICAgICAgICAgICAgdHI6IG8uZnRyLCBcclxuICAgICAgICAgICAgZHI6IG8uZmRyLCBcclxuICAgICAgICAgICAgZGw6IG8uZmRsLCBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBkcm93M0RfY2VsbChyZWN0LCB0aGlzLmNvbF9mKCksIHRoaXMuY29sX2woKSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRyb3czRF9vYmpfYmFjayhcclxuICAgICAgICBmcm90OiAgVF9XYWxsLCBcclxuICAgICAgICBiYWNrOiAgVF9XYWxsLCBcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5TaG93KCkgfHwgdGhpcy5jb2xfYigpID09PSBudWxsKSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBjb25zdCBvID0gX19jYWxjX3BhZGRpbmdfb2JqKHRoaXMsIGZyb3QsIGJhY2spO1xyXG4gICAgICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICAgICAgdGw6IG8uYnRsLCBcclxuICAgICAgICAgICAgdHI6IG8uYnRyLCBcclxuICAgICAgICAgICAgZHI6IG8uYmRyLCBcclxuICAgICAgICAgICAgZGw6IG8uYmRsLCBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBkcm93M0RfY2VsbChyZWN0LCB0aGlzLmNvbF9iKCksIHRoaXMuY29sX2woKSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRyb3czRF9vYmpfbGVmdF9zaWRlKFxyXG4gICAgICAgIGZyb3Q6ICBUX1dhbGwsIFxyXG4gICAgICAgIGJhY2s6ICBUX1dhbGwsIFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblNob3coKSB8fCB0aGlzLmNvbF9zKCkgPT09IG51bGwpIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IG8gPSBfX2NhbGNfcGFkZGluZ19vYmoodGhpcywgZnJvdCwgYmFjayk7XHJcbiAgICAgICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgICAgICB0bDogby5idGwsXHJcbiAgICAgICAgICAgIHRyOiBvLmZ0bCxcclxuICAgICAgICAgICAgZHI6IG8uZmRsLFxyXG4gICAgICAgICAgICBkbDogby5iZGwsXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZHJvdzNEX2NlbGwocmVjdCwgdGhpcy5jb2xfcygpLCB0aGlzLmNvbF9sKCkpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkcm93M0Rfb2JqX3JpZ2h0X3NpZGUoXHJcbiAgICAgICAgZnJvdDogIFRfV2FsbCwgXHJcbiAgICAgICAgYmFjazogIFRfV2FsbCwgXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuU2hvdygpIHx8IHRoaXMuY29sX3MoKSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbyA9IF9fY2FsY19wYWRkaW5nX29iaih0aGlzLCBmcm90LCBiYWNrKTtcclxuICAgICAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgICAgIHRsOiBvLmZ0cixcclxuICAgICAgICAgICAgdHI6IG8uYnRyLFxyXG4gICAgICAgICAgICBkcjogby5iZHIsXHJcbiAgICAgICAgICAgIGRsOiBvLmZkcixcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBkcm93M0RfY2VsbChyZWN0LCB0aGlzLmNvbF9zKCksIHRoaXMuY29sX2woKSk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTWF6ZU9ialZpZXcge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNuYW1lOiAgIHRoaXMuY2xuYW1lLFxyXG4gICAgICAgICAgICBsYXllcjogICB0aGlzLm15X2xheWVyLFxyXG4gICAgICAgICAgICBsZXR0ZXI6ICB0aGlzLm15X2xldHRlciA/PyAnJyxcclxuICAgICAgICAgICAgcGFkX3Q6ICAgdGhpcy5teV9wYWRfdCwgXHJcbiAgICAgICAgICAgIHBhZF9kOiAgIHRoaXMubXlfcGFkX2QsIFxyXG4gICAgICAgICAgICBwYWRfczogICB0aGlzLm15X3BhZF9zLCBcclxuICAgICAgICAgICAgc2hvdzogICAgdGhpcy5jYW5TaG93KCkgPyAnMScgOiAnMCcsXHJcbiAgICAgICAgICAgIGNvbF9mOiAgIHRoaXMubXlfY29sX2YgPz8gJycsICBcclxuICAgICAgICAgICAgY29sX2I6ICAgdGhpcy5teV9jb2xfYiA/PyAnJywgIFxyXG4gICAgICAgICAgICBjb2xfczogICB0aGlzLm15X2NvbF9zID8/ICcnLCBcclxuICAgICAgICAgICAgY29sX3Q6ICAgdGhpcy5teV9jb2xfdCA/PyAnJywgXHJcbiAgICAgICAgICAgIGNvbF9kOiAgIHRoaXMubXlfY29sX2QgPz8gJycsIFxyXG4gICAgICAgICAgICBjb2xfbDogICB0aGlzLm15X2NvbF9sID8/ICcnLCBcclxuICAgICAgICAgICAgY29sXzI6ICAgdGhpcy5teV9jb2xfMiA/PyAnJywgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShqOiBKU09OX01hemVPYmpWaWV3fHVuZGVmaW5lZCk6IElfTWF6ZU9ialZpZXcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9faW5pdChqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVjb2RlKGo6IEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkKTogSV9NYXplT2JqVmlldyB7XHJcbiAgICAgICAgcmV0dXJuIENfTWF6ZU9ialZpZXcubmV3T2JqKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIF9fY2FsY19wYWRkaW5nX29iaihcclxuICAgIG9iajogICBJX01hemVPYmpWaWV3LFxyXG4gICAgZnJvdDogIFRfV2FsbCwgXHJcbiAgICBiYWNrOiAgVF9XYWxsLCBcclxuKToge1xyXG4gICAgLy8g6K2Y5Yil5a2Q44Gu5oSP5ZGzXHJcbiAgICAvLyDlt6bnq6/vvJrliY3lvozjga7ljLrliKXjgIBmOuWJjemdouOAgGI66IOM6Z2iXHJcbiAgICAvLyDkuK3lpK7vvJrkuIrkuIvjga7ljLrliKXjgIB0OuS4iui+uuOAgGQ65LiL6L66XHJcbiAgICAvLyDlj7Pnq6/vvJrlt6blj7Pjga7ljLrliKXjgIBsOuW3puWBtOOAgHI65Y+z5YG0XHJcbiAgICBmdGw6VF94eSwgZnRyOlRfeHksIGZkcjpUX3h5LCBmZGw6VF94eSwgXHJcbiAgICBidGw6VF94eSwgYnRyOlRfeHksIGJkcjpUX3h5LCBiZGw6VF94eSwgXHJcbn0ge1xyXG4gICAgY29uc3QgcmVjdF9mcm90ID0gZnJvdDtcclxuICAgIGNvbnN0IHJlY3RfYmFjayA9IGJhY2s7XHJcblxyXG4gICAgY29uc3QgcmF0aW9fWCAgID0gb2JqLnBhZF9zKCkgLyAyLjA7XHJcbiAgICBjb25zdCByYXRpb19UICAgPSBvYmoucGFkX3QoKTtcclxuICAgIGNvbnN0IHJhdGlvX0QgICA9IG9iai5wYWRfZCgpO1xyXG5cclxuICAgIGNvbnN0IGZyb3RfcGFkX1ggID0gTWF0aC5hYnMocmVjdF9mcm90Lm1heF94IC0gcmVjdF9mcm90Lm1pbl94KSAqIHJhdGlvX1g7XHJcbiAgICBjb25zdCBiYWNrX3BhZF9YICA9IE1hdGguYWJzKHJlY3RfYmFjay5tYXhfeCAtIHJlY3RfYmFjay5taW5feCkgKiByYXRpb19YO1xyXG5cclxuICAgIGNvbnN0IGZyb3RfcGFkX1QgID0gTWF0aC5hYnMocmVjdF9mcm90Lm1heF95IC0gcmVjdF9mcm90Lm1pbl95KSAqIHJhdGlvX1Q7XHJcbiAgICBjb25zdCBiYWNrX3BhZF9UICA9IE1hdGguYWJzKHJlY3RfYmFjay5tYXhfeSAtIHJlY3RfYmFjay5taW5feSkgKiByYXRpb19UO1xyXG5cclxuICAgIGNvbnN0IGZyb3RfcGFkX0QgID0gTWF0aC5hYnMocmVjdF9mcm90Lm1heF95IC0gcmVjdF9mcm90Lm1pbl95KSAqIHJhdGlvX0Q7XHJcbiAgICBjb25zdCBiYWNrX3BhZF9EICA9IE1hdGguYWJzKHJlY3RfYmFjay5tYXhfeSAtIHJlY3RfYmFjay5taW5feSkgKiByYXRpb19EO1xyXG5cclxuICAgIC8vIOODkeODh+OCo+ODs+OCsOioreWumuW+jOOBrlhZ5bqn5qiZ44KS6KiI566X44GZ44KL44Gf44KB44GrXHJcbiAgICAvLyDlv4XopoHjgarnt5rliIbjga7kvY3nva7msbrjgoHjgpLjgZnjgotcclxuICAgIGNvbnN0IGZyb3RfdG9wX2xmdCA9IHt4OiByZWN0X2Zyb3QubWluX3ggKyBmcm90X3BhZF9YLCB5OiByZWN0X2Zyb3QubWluX3kgKyBmcm90X3BhZF9UfVxyXG4gICAgY29uc3QgZnJvdF90b3Bfcmd0ID0ge3g6IHJlY3RfZnJvdC5tYXhfeCAtIGZyb3RfcGFkX1gsIHk6IHJlY3RfZnJvdC5taW5feSArIGZyb3RfcGFkX1R9XHJcbiAgICBjb25zdCBmcm90X2R3bl9sZnQgPSB7eDogcmVjdF9mcm90Lm1pbl94ICsgZnJvdF9wYWRfWCwgeTogcmVjdF9mcm90Lm1heF95IC0gZnJvdF9wYWRfRH1cclxuICAgIGNvbnN0IGZyb3RfZHduX3JndCA9IHt4OiByZWN0X2Zyb3QubWF4X3ggLSBmcm90X3BhZF9YLCB5OiByZWN0X2Zyb3QubWF4X3kgLSBmcm90X3BhZF9EfVxyXG5cclxuICAgIGNvbnN0IGJhY2tfdG9wX2xmdCA9IHt4OiByZWN0X2JhY2subWluX3ggKyBiYWNrX3BhZF9YLCB5OiByZWN0X2JhY2subWluX3kgKyBiYWNrX3BhZF9UfVxyXG4gICAgY29uc3QgYmFja190b3Bfcmd0ID0ge3g6IHJlY3RfYmFjay5tYXhfeCAtIGJhY2tfcGFkX1gsIHk6IHJlY3RfYmFjay5taW5feSArIGJhY2tfcGFkX1R9XHJcbiAgICBjb25zdCBiYWNrX2R3bl9sZnQgPSB7eDogcmVjdF9iYWNrLm1pbl94ICsgYmFja19wYWRfWCwgeTogcmVjdF9iYWNrLm1heF95IC0gYmFja19wYWRfRH1cclxuICAgIGNvbnN0IGJhY2tfZHduX3JndCA9IHt4OiByZWN0X2JhY2subWF4X3ggLSBiYWNrX3BhZF9YLCB5OiByZWN0X2JhY2subWF4X3kgLSBiYWNrX3BhZF9EfVxyXG5cclxuICAgIGxldCBmdGwgPSBfX2NhbGNfcGFkZGluZ194eShmcm90X3RvcF9sZnQsIGJhY2tfdG9wX2xmdCwgcmF0aW9fWCk7XHJcbiAgICBsZXQgZnRyID0gX19jYWxjX3BhZGRpbmdfeHkoZnJvdF90b3Bfcmd0LCBiYWNrX3RvcF9yZ3QsIHJhdGlvX1gpO1xyXG4gICAgbGV0IGZkbCA9IF9fY2FsY19wYWRkaW5nX3h5KGZyb3RfZHduX2xmdCwgYmFja19kd25fbGZ0LCByYXRpb19YKTtcclxuICAgIGxldCBmZHIgPSBfX2NhbGNfcGFkZGluZ194eShmcm90X2R3bl9yZ3QsIGJhY2tfZHduX3JndCwgcmF0aW9fWCk7XHJcblxyXG4gICAgbGV0IGJ0bCA9IF9fY2FsY19wYWRkaW5nX3h5KGJhY2tfdG9wX2xmdCwgZnJvdF90b3BfbGZ0LCByYXRpb19YKTtcclxuICAgIGxldCBidHIgPSBfX2NhbGNfcGFkZGluZ194eShiYWNrX3RvcF9yZ3QsIGZyb3RfdG9wX3JndCwgcmF0aW9fWCk7XHJcbiAgICBsZXQgYmRsID0gX19jYWxjX3BhZGRpbmdfeHkoYmFja19kd25fbGZ0LCBmcm90X2R3bl9sZnQsIHJhdGlvX1gpO1xyXG4gICAgbGV0IGJkciA9IF9fY2FsY19wYWRkaW5nX3h5KGJhY2tfZHduX3JndCwgZnJvdF9kd25fcmd0LCByYXRpb19YKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZ0bDogZnRsLCBmdHI6IGZ0cixcclxuICAgICAgICBmZGw6IGZkbCwgZmRyOiBmZHIsXHJcbiAgICAgICAgYnRsOiBidGwsIGJ0cjogYnRyLFxyXG4gICAgICAgIGJkbDogYmRsLCBiZHI6IGJkcixcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBfX2NhbGNfcGFkZGluZ194eShmcm90OiBUX3h5LCBiYWNrOiBUX3h5LCByYXRpbzogbnVtYmVyKTogVF94eSB7XHJcbiAgICAgICAgLy8g57ea5YiGKEF4ICsgQiA9IHkp44Gu5pa556iL5byP44Gu5L+C5pWw44KS5rGC44KB44KLXHJcbiAgICAgICAgY29uc3QgQSA9IChmcm90LnkgLSBiYWNrLnkpIC8gKGZyb3QueCAtIGJhY2sueCk7XHJcbiAgICAgICAgY29uc3QgQiA9ICBmcm90LnkgLSBBICogZnJvdC54O1xyXG4gICAgXHJcbiAgICAgICAgLy8g44OR44OH44Kj44Oz44Kw6Kq/5pW05b6M44GuWFnluqfmqJnjga7oqIjnrpdcclxuICAgICAgICBjb25zdCBwX2Zyb3RfeCA9IGZyb3QueCArIChiYWNrLnggLSBmcm90LngpICogcmF0aW87XHJcbiAgICAgICAgY29uc3QgcF9mcm90X3kgPSBBICogcF9mcm90X3ggKyBCO1xyXG5cclxuICAgICAgICByZXR1cm4ge3g6IHBfZnJvdF94LCB5OiBwX2Zyb3RfeX07XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkcm93M0RfY2VsbF9mbG9vcihcclxuICAgICAgICByZWN0X2Zyb3Q6IFRfV2FsbCwgXHJcbiAgICAgICAgcmVjdF9iYWNrOiBUX1dhbGwsIFxyXG4gICAgICAgIGZpbGw6IHN0cmluZyA9ICcjNjY2NmZmJywgXHJcbiAgICAgICAgbGluZTogc3RyaW5nID0gJyM5OTk5ZmYnXHJcbiAgICApOiB2b2lkIHtcclxuXHJcbiAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgdGw6IHt4OiByZWN0X2Zyb3QubWluX3gsIHk6IHJlY3RfZnJvdC5tYXhfeX0sXHJcbiAgICAgICAgdHI6IHt4OiByZWN0X2Zyb3QubWF4X3gsIHk6IHJlY3RfZnJvdC5tYXhfeX0sXHJcbiAgICAgICAgZHI6IHt4OiByZWN0X2JhY2subWF4X3gsIHk6IHJlY3RfYmFjay5tYXhfeX0sXHJcbiAgICAgICAgZGw6IHt4OiByZWN0X2JhY2subWluX3gsIHk6IHJlY3RfYmFjay5tYXhfeX1cclxuICAgIH1cclxuICAgIGRyb3czRF9jZWxsKHJlY3QsIGZpbGwsIGxpbmUpO1xyXG59XHJcbmZ1bmN0aW9uIGRyb3czRF9jZWxsX2NlaWxpbmcoXHJcbiAgICAgICAgcmVjdF9mcm90OiBUX1dhbGwsIFxyXG4gICAgICAgIHJlY3RfYmFjazogVF9XYWxsLCBcclxuICAgICAgICBmaWxsOiBzdHJpbmcgPSAnI2FhYWFhYScsIFxyXG4gICAgICAgIGxpbmU6IHN0cmluZyA9ICcjOTk5OWZmJ1xyXG4gICAgKTogdm9pZCB7XHJcblxyXG4gICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgIHRsOiB7eDogcmVjdF9mcm90Lm1pbl94LCB5OiByZWN0X2Zyb3QubWluX3l9LFxyXG4gICAgICAgIHRyOiB7eDogcmVjdF9mcm90Lm1heF94LCB5OiByZWN0X2Zyb3QubWluX3l9LFxyXG4gICAgICAgIGRyOiB7eDogcmVjdF9iYWNrLm1heF94LCB5OiByZWN0X2JhY2subWluX3l9LFxyXG4gICAgICAgIGRsOiB7eDogcmVjdF9iYWNrLm1pbl94LCB5OiByZWN0X2JhY2subWluX3l9XHJcbiAgICB9XHJcbiAgICBkcm93M0RfY2VsbChyZWN0LCBmaWxsLCBsaW5lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJvdzJEX2NlbGwocjogVF9SZWN0LCBmaWxsOiBzdHJpbmd8bnVsbCwgbGluZTogc3RyaW5nfG51bGwpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbiA9IENfTWF6ZU9ialZpZXcuZ2V0X2NvbnRleHQyRCgpOyAgIC8vISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXHJcbiAgICBpZiAoY29uID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICBjb24uYmVnaW5QYXRoKCk7XHJcbiAgICBjb24ubW92ZVRvKHIudGwueCwgci50bC55KTtcclxuICAgIGNvbi5saW5lVG8oci50ci54LCByLnRyLnkpO1xyXG4gICAgY29uLmxpbmVUbyhyLmRyLngsIHIuZHIueSk7XHJcbiAgICBjb24ubGluZVRvKHIuZGwueCwgci5kbC55KTtcclxuICAgIGNvbi5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICBpZiAoZmlsbCAhPSBudWxsKSB7XHJcbiAgICAgICAgY29uLmZpbGxTdHlsZSAgID0gZmlsbDtcclxuICAgICAgICBjb24uZmlsbCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxpbmUgIT09IG51bGwpIHtcclxuICAgICAgICBjb24uc3Ryb2tlU3R5bGUgPSBsaW5lO1xyXG4gICAgICAgIGNvbi5saW5lV2lkdGggICA9IDE7XHJcbiAgICAgICAgY29uLnN0cm9rZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkcm93M0RfY2VsbChyOiBUX1JlY3QsIGZpbGw6IHN0cmluZ3xudWxsLCBsaW5lOiBzdHJpbmd8bnVsbCk6IHZvaWQge1xyXG4gICAgY29uc3QgY29uID0gQ19NYXplT2JqVmlldy5nZXRfY29udGV4dDNEKCk7XHJcbiAgICBpZiAoY29uID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICBjb24uYmVnaW5QYXRoKCk7XHJcbiAgICBjb24ubW92ZVRvKHIudGwueCwgci50bC55KTtcclxuICAgIGNvbi5saW5lVG8oci50ci54LCByLnRyLnkpO1xyXG4gICAgY29uLmxpbmVUbyhyLmRyLngsIHIuZHIueSk7XHJcbiAgICBjb24ubGluZVRvKHIuZGwueCwgci5kbC55KTtcclxuICAgIGNvbi5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICBpZiAoZmlsbCAhPSBudWxsKSB7XHJcbiAgICAgICAgY29uLmZpbGxTdHlsZSAgID0gZmlsbDtcclxuICAgICAgICBjb24uZmlsbCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxpbmUgIT09IG51bGwpIHtcclxuICAgICAgICBjb24uc3Ryb2tlU3R5bGUgPSBsaW5lO1xyXG4gICAgICAgIGNvbi5saW5lV2lkdGggICA9IDE7XHJcbiAgICAgICAgY29uLnN0cm9rZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ19Mb2NhdGlvbiwgSlNPTl9Mb2NhdGlvbiB9IGZyb20gXCIuL0NfTG9jYXRpb25cIjtcclxuaW1wb3J0IHsgSV9KU09OX1VuaXEgfSAgICAgICAgICAgICAgIGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuaW1wb3J0IHsgX2dldF91dWlkIH0gICAgICAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9Nb3ZhYmxlUG9pbnQgZXh0ZW5kcyBKU09OX0xvY2F0aW9uIHtcclxuICAgIHVuaXFfaWQ/OiAgc3RyaW5nLFxyXG4gICAgY3VyX3VybD86ICBzdHJpbmcsXHJcbiAgICB0ZWFtX3VpZD86IHN0cmluZyxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9tdnB0X2luZm8oYTogSlNPTl9Nb3ZhYmxlUG9pbnR8dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydChcIk12UHQgSW5mbzpcIiBcclxuICAgICAgICArIFwiXFxudW5pcV9pZDogIFwiICArIChhLnVuaXFfaWQgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfdXJsOiAgXCIgICsgKGEuY3VyX3VybCAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnRlYW1fdWlkOiBcIiAgKyAoYS50ZWFtX3VpZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubGNrZDogXCIgICAgICArIChhLmtpbmQgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sY25tOiBcIiAgICAgICsgKGEubmFtZSAgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxjaWQ6IFwiICAgICAgKyAoYS5sb2NfdWlkICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3g6IFwiICAgICArIChhLmxvY19wb3M/LnggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfeTogXCIgICAgICsgKGEubG9jX3Bvcz8ueSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl96OiBcIiAgICAgKyAoYS5sb2NfcG9zPy56ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX2Q6IFwiICAgICArIChhLmxvY19wb3M/LmQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDX01vdmFibGVQb2ludCBleHRlbmRzIENfTG9jYXRpb24gaW1wbGVtZW50cyBJX0pTT05fVW5pcSB7XHJcbiAgICBwcm90ZWN0ZWQgdW5pcV9pZDogIHN0cmluZztcclxuICAgIHByb3RlY3RlZCBjdXJfdXJsOiAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHRlYW1fdWlkOiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGpzb24/OiBKU09OX01vdmFibGVQb2ludCkge1xyXG4gICAgICAgIHN1cGVyKGpzb24pO1xyXG4gICAgICAgIHRoaXMudW5pcV9pZCAgPSAnTXZQb2ludCMnICsgX2dldF91dWlkKCk7XHJcbiAgICAgICAgdGhpcy5jdXJfdXJsICA9ICcnO1xyXG4gICAgICAgIHRoaXMudGVhbV91aWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmIChqc29uICE9PSB1bmRlZmluZWQgJiYganNvbiAhPT0gbnVsbCkgdGhpcy5kZWNvZGUoanNvbik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdWlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnVuaXFfaWR9XHJcbiAgICBwdWJsaWMgdXJsKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmN1cl91cmx9XHJcbiAgICBwdWJsaWMgdGlkKCk6IHN0cmluZ3x1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50ZWFtX3VpZH1cclxuXHJcbiAgICBwdWJsaWMgbmV3X3VpZCgpOiB2b2lkIHt0aGlzLnVuaXFfaWQgPSAnTXZQb2ludCMnICsgX2dldF91dWlkKCk7fVxyXG4gICAgcHVibGljIHNldF91cmwodXJsOiBzdHJpbmcpOiB2b2lkIHsgdGhpcy5jdXJfdXJsICA9IHVybDt9XHJcbiAgICBwdWJsaWMgc2V0X3RpZCh0aWQ6IHN0cmluZyk6IHZvaWQgeyB0aGlzLnRlYW1fdWlkID0gdGlkO31cclxuXHJcbiAgICBwdWJsaWMgY2xvbmUoKTogQ19Nb3ZhYmxlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0IG12cHQgPSBuZXcgQ19Nb3ZhYmxlUG9pbnQodGhpcy5lbmNvZGUoKSk7XHJcbiAgICAgICAgbXZwdC5uZXdfdWlkKCk7XHJcbiAgICAgICAgcmV0dXJuIG12cHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZyb21KU09OKHR4dDogc3RyaW5nKTogQ19Nb3ZhYmxlUG9pbnQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGogPSBKU09OLnBhcnNlKHR4dCkgYXMgSlNPTl9Nb3ZhYmxlUG9pbnQ7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlY29kZShqKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB0b0pTT04oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5lbmNvZGUoKSwgbnVsbCwgXCJcXHRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX29ial90b19zdHJpbmcob2E6IENfTW92YWJsZVBvaW50KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2EuZW5jb2RlKCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX29iakFycmF5X3RvX3N0cmluZyhvYWE6IHtbdWlkOiBzdHJpbmddOiBDX01vdmFibGVQb2ludH0pOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IG9hID0gW10gYXMgSlNPTl9Nb3ZhYmxlUG9pbnRbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGlpIGluIG9hYSkgb2EucHVzaChvYWFbaWldLmVuY29kZSgpKTtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2EpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ190b19vYmoodHh0OiBzdHJpbmcpOiBDX01vdmFibGVQb2ludCB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaiAgID0gSlNPTi5wYXJzZSh0eHQpIGFzIEpTT05fTW92YWJsZVBvaW50W107XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ19Nb3ZhYmxlUG9pbnQoKS5kZWNvZGUoaik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ19Nb3ZhYmxlUG9pbnQoKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ190b19vYmpBcnJheSh0eHQ6IHN0cmluZyk6IHtbdWlkOiBzdHJpbmddOiBDX01vdmFibGVQb2ludH0ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGogICA9IEpTT04ucGFyc2UodHh0KSBhcyBKU09OX01vdmFibGVQb2ludFtdO1xyXG4gICAgICAgICAgICBjb25zdCBtcGEgPSB7fSBhcyB7W2lkOiBzdHJpbmddOiBDX01vdmFibGVQb2ludH07XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgamogb2Ygaikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWFhID0gbmV3IENfTW92YWJsZVBvaW50KCkuZGVjb2RlKGpqKTtcclxuICAgICAgICAgICAgICAgIG1wYVthYWEudWlkKCldID0gYWFhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtcGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9Nb3ZhYmxlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0IGogPSBzdXBlci5lbmNvZGUoKSBhcyBKU09OX01vdmFibGVQb2ludDtcclxuICAgICAgICBqLnVuaXFfaWQgID0gdGhpcy51bmlxX2lkO1xyXG4gICAgICAgIGouY3VyX3VybCAgPSB0aGlzLmN1cl91cmw7XHJcbiAgICAgICAgai50ZWFtX3VpZCA9IHRoaXMudGVhbV91aWQgPz8gJyc7XHJcbiAgICAgICAgcmV0dXJuIGo7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo/OiBKU09OX01vdmFibGVQb2ludCk6IENfTW92YWJsZVBvaW50IHtcclxuICAgICAgICBzdXBlci5kZWNvZGUoaik7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKGoudW5pcV9pZCAgIT09IHVuZGVmaW5lZCkgdGhpcy51bmlxX2lkICA9IGoudW5pcV9pZDtcclxuICAgICAgICBpZiAoai5jdXJfdXJsICAhPT0gdW5kZWZpbmVkKSB0aGlzLmN1cl91cmwgID0gai5jdXJfdXJsO1xyXG4gICAgICAgIGlmIChqLnRlYW1fdWlkICE9PSB1bmRlZmluZWQpIHRoaXMudGVhbV91aWQgPSBqLnRlYW1fdWlkO1xyXG5cclxuICAgICAgICBpZiAodGhpcy50ZWFtX3VpZCA9PT0gJycpIHRoaXMudGVhbV91aWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIk12UHQgSW5mbzpcIiBcclxuICAgICAgICAgICAgKyBcIlxcbnVuaXFfaWQ6ICBcIiAgKyAodGhpcy51bmlxX2lkICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl91cmw6ICBcIiAgKyAodGhpcy5jdXJfdXJsICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnRlYW1fdWlkOiBcIiAgKyAodGhpcy50ZWFtX3VpZCAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxja2Q6IFwiICAgICAgKyAodGhpcy5sb2Nfa2luZCAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxjbm06IFwiICAgICAgKyAodGhpcy5sb2NfbmFtZSAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxjaWQ6IFwiICAgICAgKyAodGhpcy5sb2NfdWlkICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl94OiBcIiAgICAgKyAodGhpcy5sb2NfcG9zPy54ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl95OiBcIiAgICAgKyAodGhpcy5sb2NfcG9zPy55ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl96OiBcIiAgICAgKyAodGhpcy5sb2NfcG9zPy56ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl9kOiBcIiAgICAgKyAodGhpcy5sb2NfcG9zPy5kID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IElfSlNPTiwgSlNPTl9BbnkgfSBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fUG9pbnQgZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICB4PzogbnVtYmVyLFxyXG4gICAgeT86IG51bWJlcixcclxuICAgIHo/OiBudW1iZXIsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1BvaW50IGltcGxlbWVudHMgSV9KU09Oe1xyXG4gICAgcHVibGljIHg6IG51bWJlcjtcclxuICAgIHB1YmxpYyB5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgejogbnVtYmVyO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg/OiBudW1iZXJ8Q19Qb2ludHxKU09OX1BvaW50fHVuZGVmaW5lZCwgeT86IG51bWJlciwgej86IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHRoaXMueSA9IHRoaXMueiA9IC0zO1xyXG5cclxuICAgICAgICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IDA7IHRoaXMueSA9IDA7IHRoaXMueiA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB5ID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB6ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHg7IHRoaXMueSA9IHk7IHRoaXMueiA9IHo7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcIm9iamVjdFwiKSB7IFxyXG4gICAgICAgICAgICBpZiAoeCBpbnN0YW5jZW9mIENfUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMueCA9IHgueDsgdGhpcy55ID0geC55OyB0aGlzLnogPSB4Lno7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlY29kZSh4KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnggPSB0aGlzLnkgPSB0aGlzLnogPSAtMjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldF9wKCk6IENfUG9pbnQge3JldHVybiBuZXcgQ19Qb2ludCh0aGlzKX0gXHJcbiAgICBwdWJsaWMgc2V0X3AocDogQ19Qb2ludCk6IENfUG9pbnR8dW5kZWZpbmVkIHtcclxuICAgICAgICB0aGlzLnggPSBwLng7IHRoaXMueSA9IHAueTsgdGhpcy56ID0gcC56O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc19leGlzdCh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICh4ID09IHRoaXMueCAmJiB5ID09IHRoaXMueSAmJiB6ID09IHRoaXMueik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgd2l0aGluKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHAueCA9PSB0aGlzLnggJiYgcC55ID09IHRoaXMueSAmJiBwLnogPT0gdGhpcy56KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1BvaW50IHtcclxuICAgICAgICByZXR1cm4ge3g6IHRoaXMueCwgeTogdGhpcy55LCB6OiB0aGlzLnp9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhPzogSlNPTl9Qb2ludCk6IENfUG9pbnQge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChhLnggPT09IHVuZGVmaW5lZCB8fCBhLnkgPT09IHVuZGVmaW5lZCB8fCBhLnogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgdGhpcy54ID0gYS54OyB0aGlzLnkgPSBhLnk7IHRoaXMueiA9IGEuejtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfUG9pbnQsIEpTT05fUG9pbnQgfSBmcm9tICcuL0NfUG9pbnQnO1xyXG5pbXBvcnQge1RfTWFrZUVudW1UeXBlfSAgICAgICAgZnJvbSBcIi4uL2RfdXRsL1RfTWFrZUVudW1UeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVF9EaXJlY3Rpb246e1tkaXI6IHN0cmluZ106IG51bWJlcn0gPSB7XHJcbiAgICBOOiAwLFxyXG4gICAgRTogMSxcclxuICAgIFM6IDIsXHJcbiAgICBXOiAzLFxyXG4gICAgWDogOTlcclxufSBhcyBjb25zdDtcclxuZXhwb3J0IHR5cGUgVF9EaXJlY3Rpb24gPSBUX01ha2VFbnVtVHlwZTx0eXBlb2YgVF9EaXJlY3Rpb24+O1xyXG5cclxuZnVuY3Rpb24gX2Rpcl9rZXkoZGlyOiBUX0RpcmVjdGlvbiB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoVF9EaXJlY3Rpb24pLmZpbmQoa2V5ID0+IFRfRGlyZWN0aW9uW2tleV0gPT09IGRpcikgPz8gXCI/Pz8/XCI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fUG9pbnREaXIgZXh0ZW5kcyBKU09OX1BvaW50IHtcclxuICAgIGQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9QRF9pbmZvKGE6IEpTT05fUG9pbnREaXJ8dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydChcIlBvaW50RGF0YSBJbmZvOlwiIFxyXG4gICAgICAgICsgXCJcXG54OiBcIiAgICAgKyAoYT8ueCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnk6IFwiICAgICArIChhPy55ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuejogXCIgICAgICsgKGE/LnogPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5kOiBcIiAgICAgKyAoYT8uZCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgIENfUG9pbnREaXIgZXh0ZW5kcyBDX1BvaW50IHtcclxuICAgIHB1YmxpYyBkOiBUX0RpcmVjdGlvbjtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihkPzogbnVtYmVyfFRfRGlyZWN0aW9ufENfUG9pbnREaXJ8SlNPTl9Qb2ludERpcikge1xyXG4gICAgICAgIHN1cGVyKGQpO1xyXG4gICAgICAgIHRoaXMuZCA9IFRfRGlyZWN0aW9uLlg7XHJcblxyXG4gICAgICAgIGlmIChkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGQgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5kID0gZCBhcyBUX0RpcmVjdGlvbjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGQgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgaWYgKGQgaW5zdGFuY2VvZiBDX1BvaW50RGlyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmQgPSBkLmQgYXMgVF9EaXJlY3Rpb247XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlY29kZShkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZCA9IFRfRGlyZWN0aW9uLlg7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9kX21iX25hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6ICByZXR1cm4gJ+WMlyc7XHJcbiAgICAgICAgICAgIGNhc2UgMTogIHJldHVybiAn5p2xJztcclxuICAgICAgICAgICAgY2FzZSAyOiAgcmV0dXJuICfljZcnO1xyXG4gICAgICAgICAgICBjYXNlIDM6ICByZXR1cm4gJ+ilvyc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAn6KyOJztcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X2QoKTogVF9EaXJlY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X2QoZDogVF9EaXJlY3Rpb24pOiBDX1BvaW50RGlyfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKCEoX2Rpcl9rZXkoZCkgaW4gVF9EaXJlY3Rpb24pKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZCA9IGQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BkKCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wZChkOiBDX1BvaW50RGlyfEpTT05fUG9pbnREaXIpOiBDX1BvaW50RGlyfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKGQgaW5zdGFuY2VvZiBDX1BvaW50RGlyKSB7XHJcbiAgICAgICAgICAgIGlmICghKF9kaXJfa2V5KGQuZCkgaW4gVF9EaXJlY3Rpb24pKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBzdXBlci5zZXRfcChkKTtcclxuICAgICAgICAgICAgdGhpcy5kID0gZC5kO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEoX2Rpcl9rZXkoZC5kKSBpbiBUX0RpcmVjdGlvbikpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5kZWNvZGUoZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1BvaW50RGlyIHtcclxuICAgICAgICBjb25zdCBqID0gc3VwZXIuZW5jb2RlKCkgYXMgSlNPTl9Qb2ludERpcjtcclxuICAgICAgICBqLmQgICAgID0gdGhpcy5kIGFzIG51bWJlcjtcclxuICAgICAgICByZXR1cm4gajtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoaj86IEpTT05fUG9pbnREaXIpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICBpZiAoaiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAoIShfZGlyX2tleShqLmQpIGluIFRfRGlyZWN0aW9uKSkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIHN1cGVyLmRlY29kZShqKTtcclxuICAgICAgICB0aGlzLmQgPSBqLmQgYXMgVF9EaXJlY3Rpb247XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIlBvaW50RGF0YSBJbmZvOlwiIFxyXG4gICAgICAgICAgICArIFwiXFxueDogXCIgICAgICsgKHRoaXMueCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG55OiBcIiAgICAgKyAodGhpcy55ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbno6IFwiICAgICArICh0aGlzLnogPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuZDogXCIgICAgICsgKHRoaXMuZCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiY2xhc3MgQ19Qb2ludDJEIHtcclxuICAgIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54ICA9IHg7XHJcbiAgICAgICAgdGhpcy55ICA9IHk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaXNfZXhpc3QoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMueCA9PSB4KSAmJiAodGhpcy55ID09IHkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19Qb2ludExpbmsyRCBleHRlbmRzIENfUG9pbnQyRCB7XHJcbiAgICBwdWJsaWMgZGk6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBkaTogbnVtYmVyID0gLTEpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSk7XHJcbiAgICAgICAgdGhpcy5kaSA9IGRpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBjYXN0KHA6IENfUG9pbnQyRHx1bmRlZmluZWQpOiBDX1BvaW50TGluazJEfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKHA/LnggPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAocD8ueSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybiBwIGluc3RhbmNlb2YgQ19Qb2ludExpbmsyRCA/IHAgOiBuZXcgQ19Qb2ludExpbmsyRChwLngsIHAueSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ19Qb2ludFNldDJEIHtcclxuICAgIHB1YmxpYyBzZXQ6IENfUG9pbnQyRFtdID1bXTtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgcHVibGljIHB1c2gocDogQ19Qb2ludDJEKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXQucHVzaChwKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BvaW50KHg6IG51bWJlciwgeTogbnVtYmVyKTogQ19Qb2ludDJEfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwIG9mIHRoaXMuc2V0KSB7XHJcbiAgICAgICAgICAgIGlmIChwPy5pc19leGlzdCh4LCB5KSkgcmV0dXJuIHA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7ICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVtb3ZlKHA6IENfUG9pbnQyRCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlX3h5KHAueCwgcC55KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVtb3ZlX3h5KHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpIGluIHRoaXMuc2V0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNldFtpXT8uaXNfZXhpc3QoeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNldFtpXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0ID0gWy4uLnRoaXMuc2V0XTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBpc19leGlzdCh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgcCBvZiB0aGlzLnNldCkgaWYgKHA/LmlzX2V4aXN0KHgsIHkpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbmNsYXNzIFBvaW50M0Qge1xyXG4gICAgcHVibGljIGludCAkeDtcclxuICAgIHB1YmxpYyBpbnQgJHk7XHJcbiAgICBwdWJsaWMgaW50ICR6O1xyXG4gICAgcHVibGljIGZ1bmN0aW9uIF9fY29uc3RydWN0KGludCAkeCA9IDAsIGludCAkeSA9IDAsIGludCAkeiA9IDApXHJcbiAgICB7XHJcbiAgICAgICAgJHRoaXMtPnggID0gJHg7XHJcbiAgICAgICAgJHRoaXMtPnkgID0gJHk7XHJcbiAgICAgICAgJHRoaXMtPnogID0gJHo7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZnVuY3Rpb24gaXNfZXhpc3QoaW50ICR4LCBpbnQgJHksIGludCAkeik6IGJvb2wge1xyXG4gICAgICAgIHJldHVybiAoJHRoaXMtPnggPT0gJHgpICYmICgkdGhpcy0+eSA9PSAkeSkgJiYgKCR0aGlzLT56ID09ICR6KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBmdW5jdGlvbiB3aXRoaW4oUG9pbnQzRCAkcCk6IGJvb2wge1xyXG4gICAgICAgIHJldHVybiAkdGhpcy0+aXNfZXhpc3QoJHAtPngsICRwLT55LCAkcC0+eik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZnVuY3Rpb24gZW5jb2RlKCk6IGFycmF5IHtcclxuICAgICAgICAkYSA9IFtdO1xyXG4gICAgICAgICRhWyd4J10gPSAkdGhpcy0+eDtcclxuICAgICAgICAkYVsneSddID0gJHRoaXMtPnk7XHJcbiAgICAgICAgJGFbJ3onXSA9ICR0aGlzLT56O1xyXG5cclxuICAgICAgICByZXR1cm4gJGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZnVuY3Rpb24gZGVjb2RlKGFycmF5ICRhKTogUG9pbnQzRCB7XHJcbiAgICAgICAgaWYgKCFpc19udWxsKCRhKSAmJiBpc19hcnJheSgkYSkpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgYXJyYXlfa2V5X2V4aXN0cygneCcsICRhKSAmJiAoaXNfbnVtZXJpYygkYVsneCddKSAmJiAkYVsneCddID4gIDApXHJcbiAgICAgICAgICAgICYmICBhcnJheV9rZXlfZXhpc3RzKCd5JywgJGEpICYmIChpc19udW1lcmljKCRhWyd5J10pICYmICRhWyd5J10gPiAgMClcclxuICAgICAgICAgICAgJiYgIGFycmF5X2tleV9leGlzdHMoJ3onLCAkYSkgJiYgKGlzX251bWVyaWMoJGFbJ3onXSkgJiYgJGFbJ3onXSA+PSAwKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICR0aGlzLT54ID0gJGFbJ3gnXTtcclxuICAgICAgICAgICAgICAgICR0aGlzLT55ID0gJGFbJ3knXTtcclxuICAgICAgICAgICAgICAgICR0aGlzLT56ID0gJGFbJ3onXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJHRoaXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGZ1bmN0aW9uIGRlY29kZV9hbmRfbmV3KGFycmF5ICRhKTogUG9pbnQzRCB7XHJcbiAgICAgICAgaWYgKCFpc19udWxsKCRhKSAmJiBpc19hcnJheSgkYSkpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgYXJyYXlfa2V5X2V4aXN0cygneCcsICRhKSAmJiAoaXNfbnVtZXJpYygkYVsneCddKSAmJiAkYVsneCddID4gIDApXHJcbiAgICAgICAgICAgICYmICBhcnJheV9rZXlfZXhpc3RzKCd5JywgJGEpICYmIChpc19udW1lcmljKCRhWyd5J10pICYmICRhWyd5J10gPiAgMClcclxuICAgICAgICAgICAgJiYgIGFycmF5X2tleV9leGlzdHMoJ3onLCAkYSkgJiYgKGlzX251bWVyaWMoJGFbJ3onXSkgJiYgJGFbJ3onXSA+PSAwKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQzRCgkYVsneCddLCAkYVsneSddLCAkYVsneiddKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFBvaW50M0QoLTEsIC0xLCAtMSk7XHJcbiAgICB9XHJcbn1cclxuKi9cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBfbWF4LCBfbWluIH0gICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX01hdGhcIjtcclxuaW1wb3J0IHsgQ19Qb2ludCwgSlNPTl9Qb2ludCB9ICBmcm9tIFwiLi9DX1BvaW50XCI7XHJcbmltcG9ydCB7IEpTT05fQW55IH0gICAgICAgICAgICAgZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX1JhbmdlIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgbWluPzogICBKU09OX1BvaW50LCBcclxuICAgIG1heD86ICAgSlNPTl9Qb2ludCwgXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1JhbmdlIHtcclxuICAgIHByb3RlY3RlZCBtaW46IENfUG9pbnQ7XHJcbiAgICBwcm90ZWN0ZWQgbWF4OiBDX1BvaW50O1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHAxOiBDX1BvaW50LCBwMjogQ19Qb2ludCkge1xyXG4gICAgICAgIHRoaXMubWluICA9IG5ldyBDX1BvaW50KDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMubWF4ICA9IG5ldyBDX1BvaW50KDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuX2luaXQocDEsIHAyKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfaW5pdChwMTogQ19Qb2ludCwgcDI6IENfUG9pbnQpOiBDX1JhbmdlIHtcclxuICAgICAgICBjb25zdCBtaW5feCA9IF9taW4oW3AxLngsIHAyLnhdKTtcclxuICAgICAgICBjb25zdCBtYXhfeCA9IF9tYXgoW3AxLngsIHAyLnhdKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWluX3kgPSBfbWluKFtwMS55LCBwMi55XSk7XHJcbiAgICAgICAgY29uc3QgbWF4X3kgPSBfbWF4KFtwMS55LCBwMi55XSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1pbl96ID0gX21pbihbcDEueiwgcDIuel0pO1xyXG4gICAgICAgIGNvbnN0IG1heF96ID0gX21heChbcDEueiwgcDIuel0pO1xyXG5cclxuICAgICAgICB0aGlzLm1pbiAgPSBuZXcgQ19Qb2ludChtaW5feCwgbWluX3ksIG1pbl96KTtcclxuICAgICAgICB0aGlzLm1heCAgPSBuZXcgQ19Qb2ludChtYXhfeCwgbWF4X3ksIG1heF96KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdpdGhpbihhOiBDX1JhbmdlfENfUG9pbnR8bnVtYmVyLCB5PzogbnVtYmVyLCB6PzogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB5ID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB6ID09PSBcIm51bWJlclwiKSB7IFxyXG4gICAgICAgICAgICBpZiAoIGEgPCB0aGlzLm1pbi54IHx8IGEgPiB0aGlzLm1heC54ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIHkgPCB0aGlzLm1pbi55IHx8IHkgPiB0aGlzLm1heC55ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIHogPCB0aGlzLm1pbi56IHx8IHogPiB0aGlzLm1heC56ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhID09PSBcIm9iamVjdFwiICYmIGEgaW5zdGFuY2VvZiBDX1BvaW50KSB7IFxyXG4gICAgICAgICAgICBjb25zdCBwID0gYSBhcyBDX1BvaW50O1xyXG4gICAgICAgICAgICBpZiAoIHAueCA8IHRoaXMubWluLnggfHwgcC54ID4gdGhpcy5tYXgueCApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCBwLnkgPCB0aGlzLm1pbi55IHx8IHAueSA+IHRoaXMubWF4LnkgKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggcC56IDwgdGhpcy5taW4ueiB8fCBwLnogPiB0aGlzLm1heC56ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhID09PSBcIm9iamVjdFwiICYmIGEgaW5zdGFuY2VvZiBDX1JhbmdlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBhIGFzIENfUmFuZ2U7XHJcbiAgICAgICAgICAgIGlmICggcC5taW5feCgpIDwgdGhpcy5taW4ueCB8fCBwLm1heF94KCkgPiB0aGlzLm1heC54ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIHAubWluX3koKSA8IHRoaXMubWluLnkgfHwgcC5tYXhfeSgpID4gdGhpcy5tYXgueSApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCBwLm1pbl96KCkgPCB0aGlzLm1pbi56IHx8IHAubWF4X3ooKSA+IHRoaXMubWF4LnogKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbWluX3goKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWluLng7fVxyXG4gICAgcHVibGljIG1heF94KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1heC54O31cclxuICAgIHB1YmxpYyBtaW5feSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5taW4ueTt9XHJcbiAgICBwdWJsaWMgbWF4X3koKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWF4Lnk7fVxyXG4gICAgcHVibGljIG1pbl96KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1pbi56O31cclxuICAgIHB1YmxpYyBtYXhfeigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tYXguejt9XHJcbiAgICBwdWJsaWMgc2l6ZV94KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4LnggLSB0aGlzLm1pbi54ICsgMTtcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgc2l6ZV95KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4LnkgLSB0aGlzLm1pbi55ICsgMTtcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgc2l6ZV96KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4LnogLSB0aGlzLm1pbi56ICsgMTtcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgZG9fYWxsX3h5eihmbjogKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpID0+IGJvb2xlYW4pIHtcclxuICAgICAgICBmb3IgKHZhciB6ID0gdGhpcy5taW4uejsgeiA8PSB0aGlzLm1heC56OyB6KysgKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSB0aGlzLm1pbi55OyB5IDw9IHRoaXMubWF4Lnk7IHkrKyApIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSB0aGlzLm1pbi54OyB5IDw9IHRoaXMubWF4Lng7IHgrKyApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZuKHgsIHksIHopKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZG9fYWxsX3AoZm46IChwOiBDX1BvaW50KSA9PiBib29sZWFuKSB7XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IHRoaXMubWluLno7IHogPD0gdGhpcy5tYXguejsgeisrICkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gdGhpcy5taW4ueTsgeSA8PSB0aGlzLm1heC55OyB5KysgKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gdGhpcy5taW4ueDsgeSA8PSB0aGlzLm1heC54OyB4KysgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmbihuZXcgQ19Qb2ludCh4LCB5LCB6KSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9SYW5nZSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbWluOiB0aGlzLm1pbi5lbmNvZGUoKSxcclxuICAgICAgICAgICAgbWF4OiB0aGlzLm1pbi5lbmNvZGUoKSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo6IEpTT05fUmFuZ2UpOiBDX1JhbmdlIHtcclxuICAgICAgICBpZiAoaiA9PT0gdW5kZWZpbmVkKSAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKGoubWluID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChqLm1heCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBjb25zdCBwMSA9IG5ldyBDX1BvaW50KGoubWluKTtcclxuICAgICAgICBjb25zdCBwMiA9IG5ldyBDX1BvaW50KGoubWF4KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5pdChwMSwgcDIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfTWF6ZSwgSlNPTl9NYXplLCBhbGVydF9tYXplX2luZm8gIH0gIGZyb20gXCIuL0NfTWF6ZVwiO1xyXG5pbXBvcnQgeyBDX0d1aWxkLCBKU09OX0d1aWxkLCBhbGVydF9ndWxkX2luZm8gfSBmcm9tIFwiLi9DX0d1aWxkXCI7XHJcbmltcG9ydCB7IENfTW92YWJsZVBvaW50LCBKU09OX01vdmFibGVQb2ludCwgYWxlcnRfbXZwdF9pbmZvIH0gZnJvbSBcIi4vQ19Nb3ZhYmxlUG9pbnRcIjtcclxuaW1wb3J0IHsgQ19UZWFtLCBKU09OX1RlYW0sIGFsZXJ0X3RlYW1faW5mbyAgfSAgZnJvbSBcIi4vQ19UZWFtXCI7XHJcbmltcG9ydCB7IENfU2F2ZUluZm8sIElfSlNPTiwgSlNPTl9BbnksIEpTT05fU2F2ZUluZm8gfSBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fU2F2ZURhdGEgZXh0ZW5kcyBKU09OX1NhdmVJbmZvIHtcclxuICAgIHNhdmVfaWQ/OiAgIG51bWJlcixcclxuICAgIHBsYXllcl9pZD86IG51bWJlciwgXHJcbiAgICB1bmlxX25vPzogICBudW1iZXIsXHJcbiAgICB0aXRsZT86ICAgICBzdHJpbmcsXHJcbiAgICBkZXRhaWw/OiAgICBzdHJpbmcsXHJcbiAgICBwb2ludD86ICAgICBzdHJpbmcsXHJcbiAgICBhdXRvX21vZGU/OiBzdHJpbmcsXHJcbiAgICBpc19hY3RpdmU/OiBzdHJpbmcsXHJcbiAgICBpc19kZWxldGU/OiBzdHJpbmcsXHJcbiAgICBzYXZlX3RpbWU/OiBzdHJpbmcsXHJcblxyXG4gICAgYWxsX212cHQ/OiAgSlNPTl9Nb3ZhYmxlUG9pbnRbXSxcclxuICAgIGFsbF9tYXplPzogIEpTT05fTWF6ZVtdLFxyXG4gICAgYWxsX3RlYW0/OiAgSlNPTl9UZWFtW10sXHJcbiAgICBhbGxfZ3VsZD86ICBKU09OX0d1aWxkW10sXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9zYXZlX2luZm8oYTogSlNPTl9TYXZlRGF0YXx1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGFsZXJ0KFwiU2F2ZSBJbmZvOlwiIFxyXG4gICAgICAgICsgXCJcXG5zYXZlX2lkOiAgICBcIiArIChhLnNhdmVfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnBsYXllcl9pZDogIFwiICsgKGEucGxheWVyX2lkID8/ICc/JylcclxuICAgICAgICArIFwiXFxudW5pcV9ubzogICAgXCIgKyAoYS51bmlxX25vICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG50aXRsZTogICAgICBcIiArIChhLnRpdGxlICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmRldGFpbDogICAgIFwiICsgKGEuZGV0YWlsICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxucG9pbnQ6ICAgICAgXCIgKyAoYS5wb2ludCAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5hdXRvX21vZGU6ICBcIiArIChhLmF1dG9fbW9kZSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmlzX2FjdGl2ZTogIFwiICsgKGEuaXNfYWN0aXZlID8/ICc/JylcclxuICAgICAgICArIFwiXFxuaXNfZGVsZXRlOiAgXCIgKyAoYS5pc19kZWxldGUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5tdnB0X2NvdW50OiBcIiArIChhLmFsbF9tdnB0Py5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5tYXplX2NvdW50OiBcIiArIChhLmFsbF9tYXplPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5ndWxkX2NvdW50OiBcIiArIChhLmFsbF9ndWxkPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG50ZWFtX2NvdW50OiBcIiArIChhLmFsbF90ZWFtPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X3NhdmVfZGV0YWlsKGE6IEpTT05fU2F2ZURhdGF8dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgdHJ5IHsgXHJcbi8vICAgICAgICBhbGVydChcIlNhdmUgRGV0YWlsKG12cHQpOlwiKTtcclxuICAgICAgICBmb3IgKGNvbnN0IG12cHQgb2YgYS5hbGxfbXZwdD8/W10pIGFsZXJ0X212cHRfaW5mbyhtdnB0KTtcclxuICAgIH0gY2F0Y2ggKGVycikge2FsZXJ0KCdhbGVydCBtdnB0IGVycm9yOiAnICsgZXJyKX1cclxuXHJcbiAgICB0cnkgeyBcclxuLy8gICAgICAgIGFsZXJ0KFwiU2F2ZSBEZXRhaWwodGVhbSk6XCIpO1xyXG4gICAgICAgIGZvciAoY29uc3QgdGVhbSBvZiBhLmFsbF90ZWFtPz9bXSkgYWxlcnRfdGVhbV9pbmZvKHRlYW0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7YWxlcnQoJ2FsZXJ0IHRlYW0gZXJyb3I6ICcgKyBlcnIpfVxyXG5cclxuICAgIHRyeSB7IFxyXG4vLyAgICAgICAgYWxlcnQoXCJTYXZlIERldGFpbChtYXplKTpcIik7XHJcbiAgICAgICAgZm9yIChjb25zdCBtYXplIG9mIGEuYWxsX21hemU/P1tdKSBhbGVydF9tYXplX2luZm8obWF6ZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHthbGVydCgnYWxlcnQgbWF6ZSBlcnJvcjogJyArIGVycil9XHJcblxyXG4gICAgdHJ5IHsgXHJcbi8vICAgICAgICBhbGVydChcIlNhdmUgRGV0YWlsKGd1bGQpOlwiKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGd1bGQgb2YgYS5hbGxfZ3VsZD8/W10pIGFsZXJ0X2d1bGRfaW5mbyhndWxkKTtcclxuICAgIH0gY2F0Y2ggKGVycikge2FsZXJ0KCdhbGVydCBndWxkIGVycm9yOiAnICsgZXJyKX1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1NhdmVEYXRhIGV4dGVuZHMgQ19TYXZlSW5mbyBpbXBsZW1lbnRzIElfSlNPTiB7XHJcblxyXG4vKlxyXG4gICAgcHVibGljIHNhdmVfaWQ6ICAgbnVtYmVyO1xyXG4gICAgcHVibGljIHBsYXllcl9pZDogbnVtYmVyOyBcclxuICAgIHB1YmxpYyB1bmlxX25vOiAgIG51bWJlcjtcclxuICAgIHB1YmxpYyB0aXRsZTogICAgIHN0cmluZztcclxuICAgIHB1YmxpYyBkZXRhaWw6ICAgIHN0cmluZztcclxuICAgIHB1YmxpYyBwb2ludDogICAgIHN0cmluZztcclxuICAgIHB1YmxpYyBhdXRvX21vZGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaXNfYWN0aXZlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlzX2RlbGV0ZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBzYXZlX3RpbWU6IERhdGU7XHJcbiAgICBwdWJsaWMgbXlwb3M6ICAgICBDX01vdmFibGVQb2ludDtcclxuKi9cclxuXHJcbiAgICBwdWJsaWMgYWxsX212cHQ6ICB7W3VpZDogc3RyaW5nXTogQ19Nb3ZhYmxlUG9pbnR9O1xyXG4gICAgcHVibGljIGFsbF9tYXplOiAge1t1aWQ6IHN0cmluZ106IENfTWF6ZX07XHJcbiAgICBwdWJsaWMgYWxsX3RlYW06ICB7W3VpZDogc3RyaW5nXTogQ19UZWFtfTtcclxuICAgIHB1YmxpYyBhbGxfZ3VsZDogIHtbdWlkOiBzdHJpbmddOiBDX0d1aWxkfTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYT86IEpTT05fU2F2ZURhdGEpIHtcclxuICAgICAgICBzdXBlcihhKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbGxfbXZwdCAgPSB7fTtcclxuICAgICAgICB0aGlzLmFsbF9tYXplICA9IHt9O1xyXG4gICAgICAgIHRoaXMuYWxsX3RlYW0gID0ge31cclxuICAgICAgICB0aGlzLmFsbF9ndWxkICA9IHt9O1xyXG5cclxuICAgICAgICBpZiAoYSAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5ldyhhPzogSlNPTl9TYXZlRGF0YSk6IENfU2F2ZURhdGEge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ19TYXZlRGF0YShhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fU2F2ZURhdGEge1xyXG4gICAgICAgIGxldCBzYXZlX2RhdGU6IHN0cmluZztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBzYXZlX2RhdGEgICAgPSBzdXBlci5lbmNvZGUoKSBhcyBKU09OX1NhdmVEYXRhO1xyXG5cclxuICAgICAgICAgICAgc2F2ZV9kYXRhLmFsbF9tdnB0ID0gdGhpcy5fZW5jb2RlX2FsbF9kYXRhKHRoaXMuYWxsX212cHQpOyBcclxuICAgICAgICAgICAgc2F2ZV9kYXRhLmFsbF9tYXplID0gdGhpcy5fZW5jb2RlX2FsbF9kYXRhKHRoaXMuYWxsX21hemUpOyBcclxuICAgICAgICAgICAgc2F2ZV9kYXRhLmFsbF90ZWFtID0gdGhpcy5fZW5jb2RlX2FsbF9kYXRhKHRoaXMuYWxsX3RlYW0pOyBcclxuICAgICAgICAgICAgc2F2ZV9kYXRhLmFsbF9ndWxkID0gdGhpcy5fZW5jb2RlX2FsbF9kYXRhKHRoaXMuYWxsX2d1bGQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNhdmVfZGF0YTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1NhdmVEYXRhIEVuY29kZSBFcnJvcjogJyArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX2VuY29kZV9hbGxfZGF0YShhbGxfZGF0YToge1t1aWQ6c3RyaW5nXTpJX0pTT059KTogSlNPTl9BbnlbXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX0pTT046IEpTT05fQW55W10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIGFsbF9kYXRhKSBhbGxfSlNPTi5wdXNoKGFsbF9kYXRhW2ldLmVuY29kZSgpKTtcclxuICAgICAgICByZXR1cm4gYWxsX0pTT047XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlY29kZShzOiBKU09OX1NhdmVEYXRhKTogQ19TYXZlRGF0YSB7XHJcbiAgICAgICAgc3VwZXIuZGVjb2RlKHMpO1xyXG5cclxuICAgICAgICBpZiAocy5hbGxfbXZwdCAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsbF9tdnB0ID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl9tdnB0IG9mIHMuYWxsX212cHQpIHtcclxuICAgICAgICAgICAgICAgICBjb25zdCBtdnB0ID0gKG5ldyBDX01vdmFibGVQb2ludCgpKS5kZWNvZGUoanNvbl9tdnB0KTsgXHJcbiAgICAgICAgICAgICAgICAgdGhpcy5hbGxfbXZwdFttdnB0LnVpZCgpXSA9IG12cHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIGlmIChzLmFsbF9tYXplICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsX21hemUgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqc29uX21hemUgb2Ygcy5hbGxfbWF6ZSkge1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IG1hemUgPSAobmV3IENfTWF6ZSgpKS5kZWNvZGUoanNvbl9tYXplKTsgXHJcbiAgICAgICAgICAgICAgICAgdGhpcy5hbGxfbWF6ZVttYXplLnVpZCgpXSA9IG1hemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIGlmIChzLmFsbF90ZWFtICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsX3RlYW0gPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqc29uX3RlYW0gb2Ygcy5hbGxfdGVhbSkge1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IHRlYW0gPSAobmV3IENfVGVhbSgpKS5kZWNvZGUoanNvbl90ZWFtKTsgXHJcbiAgICAgICAgICAgICAgICAgdGhpcy5hbGxfdGVhbVt0ZWFtLnVpZCgpXSA9IHRlYW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIGlmIChzLmFsbF9ndWxkICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsX2d1bGQgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqc29uX2d1bGQgb2Ygcy5hbGxfZ3VsZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3VsZCA9IChuZXcgQ19HdWlsZCgpKS5kZWNvZGUoanNvbl9ndWxkKTsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbF9ndWxkW2d1bGQudWlkKCldID0gZ3VsZDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGFsZXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiU2F2ZSBJbmZvOlwiIFxyXG4gICAgICAgICAgICArIFwiXFxuc2F2ZV9pZDogICAgXCIgKyAodGhpcy5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxucGxheWVyX2lkOiAgXCIgKyAodGhpcy5wbGF5ZXJfaWQgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudW5pcV9ubzogICAgXCIgKyAodGhpcy51bmlxX25vICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudGl0bGU6ICAgICAgXCIgKyAodGhpcy50aXRsZSAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuZGV0YWlsOiAgICAgXCIgKyAodGhpcy5kZXRhaWwgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxucG9pbnQ6ICAgICAgXCIgKyAodGhpcy5wb2ludCAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuYXV0b19tb2RlOiAgXCIgKyAodGhpcy5hdXRvX21vZGU/J1knOidOJylcclxuICAgICAgICAgICAgKyBcIlxcbmlzX2FjdGl2ZTogIFwiICsgKHRoaXMuaXNfYWN0aXZlPydZJzonTicpXHJcbiAgICAgICAgICAgICsgXCJcXG5pc19kZWxldGU6ICBcIiArICh0aGlzLmlzX2RlbGV0ZT8nWSc6J04nKVxyXG4gICAgICAgICAgICArIFwiXFxubXZwdF9jb3VudDogXCIgKyAodGhpcy5hbGxfbXZwdD8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbm1hemVfY291bnQ6IFwiICsgKHRoaXMuYWxsX21hemU/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5ndWxkX2NvdW50OiBcIiArICh0aGlzLmFsbF9ndWxkPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudGVhbV9jb3VudDogXCIgKyAodGhpcy5hbGxfdGVhbT8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWxlcnRfZGV0YWlsKCk6IHZvaWQge1xyXG4gICAgICAgIHRyeSB7IFxyXG4vLyAgICAgICAgICAgIGFsZXJ0KFwiU2F2ZSBEZXRhaWwobXZwdCk6XCIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHRoaXMuYWxsX212cHQpIHRoaXMuYWxsX212cHRbaWldLmFsZXJ0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7YWxlcnQoJ2FsZXJ0IG12cHQgZXJyb3I6ICcgKyBlcnIpfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB0cnkgeyBcclxuLy8gICAgICAgICAgICBhbGVydChcIlNhdmUgRGV0YWlsKHRlYW0pOlwiKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpaSBpbiB0aGlzLmFsbF90ZWFtKSB0aGlzLmFsbF90ZWFtW2lpXS5hbGVydCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge2FsZXJ0KCdhbGVydCB0ZWFtIGVycm9yOiAnICsgZXJyKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgdHJ5IHsgXHJcbi8vICAgICAgICAgICAgYWxlcnQoXCJTYXZlIERldGFpbChtYXplKTpcIik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWkgaW4gdGhpcy5hbGxfbWF6ZSkgdGhpcy5hbGxfbWF6ZVtpaV0uYWxlcnQoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHthbGVydCgnYWxlcnQgbWF6ZSBlcnJvcjogJyArIGVycil9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHRyeSB7IFxyXG4vLyAgICAgICAgICAgIGFsZXJ0KFwiU2F2ZSBEZXRhaWwoZ3VsZCk6XCIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHRoaXMuYWxsX2d1bGQpIHRoaXMuYWxsX2d1bGRbaWldLmFsZXJ0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7YWxlcnQoJ2FsZXJ0IGd1bGQgZXJyb3I6ICcgKyBlcnIpfVxyXG4gICAgICAgICAgICBcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfTW92YWJsZVBvaW50LCBKU09OX01vdmFibGVQb2ludCB9IGZyb20gXCIuL0NfTW92YWJsZVBvaW50XCI7XHJcblxyXG4vLyDjgrXjg7zjg5Djg7zlgbTjgajjgoTjgorjgajjgorjgZnjgotKU09O5b2i5byP44OH44O844K/44Gu44OG44Oz44OX44Os44O844OIXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9Bbnkge1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55XHJcbn1cclxuXHJcbi8vIOOCteODvOODkOODvOWBtOOBqOOChOOCiuOBqOOCiuOBmeOCi+OCr+ODqeOCueOBq+W/heimgeOBquODoeOCveODg+ODiVxyXG5leHBvcnQgaW50ZXJmYWNlIElfSlNPTiB7XHJcbiAgICBlbmNvZGU6ICgpPT5KU09OX0FueSxcclxuICAgIGRlY29kZTogKGo6SlNPTl9BbnkpPT5JX0pTT04sXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSV9KU09OX1VuaXEgZXh0ZW5kcyBJX0pTT04ge1xyXG4gICAgdWlkOiAoKT0+c3RyaW5nLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElfQWJzdHJhY3Qge1xyXG4gICAgbmV3T2JqOiAoaj86SlNPTl9BbnkpPT5JX0Fic3RyYWN0fHVuZGVmaW5lZCxcclxuICAgIGVuY29kZTogKCk9PkpTT05fQW55LFxyXG4vLyAgc3RhdGljIGRlY29kZTogKGo6SlNPTl9BbnkpPT5JX0pTT04sXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSV9KU09OX0NsYXNzIHtcclxuICAgIG5ldzogKGo/OiBKU09OX0FueSk9PklfSlNPTixcclxufVxyXG5cclxuLy8g44K144O844OQ44O85YG044Go44KE44KK5Y+W44KK44GZ44KL6Zqb44Gr6Ieq6Lqr44KS5paH5a2X5YiX5YyW44GZ44KL44Kv44Op44K544Gu44Oh44K944OD44OJXHJcbmV4cG9ydCBpbnRlcmZhY2UgSV9KU09OVmFsdWUgZXh0ZW5kcyBJX0pTT057XHJcbiAgICBmcm9tSlNPTjogKCk9PnZvaWQsXHJcbiAgICB0b0pTT046ICAgKCk9PnZvaWQsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9TYXZlSW5mbyBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIHNhdmVfaWQ/OiAgIG51bWJlcixcclxuICAgIHBsYXllcl9pZD86IG51bWJlciwgXHJcbiAgICB1bmlxX25vPzogICBudW1iZXIsXHJcbiAgICB0aXRsZT86ICAgICBzdHJpbmcsXHJcbiAgICBkZXRhaWw/OiAgICBzdHJpbmcsXHJcbiAgICBwb2ludD86ICAgICBzdHJpbmcsXHJcbiAgICBhdXRvX21vZGU/OiBzdHJpbmcsXHJcbiAgICBpc19hY3RpdmU/OiBzdHJpbmcsXHJcbiAgICBpc19kZWxldGU/OiBzdHJpbmcsXHJcbiAgICBzYXZlX3RpbWU/OiBzdHJpbmcsXHJcbiAgICBteXBvcz86ICAgICBKU09OX01vdmFibGVQb2ludCxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X3NhdmVpbmZvX2luZm8oYTogSlNPTl9TYXZlSW5mb3x1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGFsZXJ0KFwiU2F2ZSBJbmZvOlwiIFxyXG4gICAgICAgICsgXCJcXG5zYXZlX2lkOiAgICBcIiArIChhLnNhdmVfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnBsYXllcl9pZDogIFwiICsgKGEucGxheWVyX2lkID8/ICc/JylcclxuICAgICAgICArIFwiXFxudW5pcV9ubzogICAgXCIgKyAoYS51bmlxX25vICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG50aXRsZTogICAgICBcIiArIChhLnRpdGxlICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmRldGFpbDogICAgIFwiICsgKGEuZGV0YWlsICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxucG9pbnQ6ICAgICAgXCIgKyAoYS5wb2ludCAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5hdXRvX21vZGU6ICBcIiArIChhLmF1dG9fbW9kZSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmlzX2FjdGl2ZTogIFwiICsgKGEuaXNfYWN0aXZlID8/ICc/JylcclxuICAgICAgICArIFwiXFxuaXNfZGVsZXRlOiAgXCIgKyAoYS5pc19kZWxldGUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zYXZlX3RpbWU6ICBcIiArIChhLnNhdmVfdGltZSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbm15dXJsOiAgICAgIFwiICsgKGEubXlwb3M/LmN1cl91cmwgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnRlYW1fdWlkOiAgIFwiICsgKGEubXlwb3M/LnRlYW1fdWlkICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxvY19raW5kOiAgIFwiICsgKGEubXlwb3M/LmtpbmQgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxvY19uYW1lOiAgIFwiICsgKGEubXlwb3M/Lm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxvY191aWQ6ICAgIFwiICsgKGEubXlwb3M/LmxvY191aWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19TYXZlSW5mbyBpbXBsZW1lbnRzIElfSlNPTiB7XHJcbiAgICBwdWJsaWMgc2F2ZV9pZDogICBudW1iZXI7XHJcbiAgICBwdWJsaWMgcGxheWVyX2lkOiBudW1iZXI7IFxyXG4gICAgcHVibGljIHVuaXFfbm86ICAgbnVtYmVyO1xyXG4gICAgcHVibGljIHRpdGxlOiAgICAgc3RyaW5nO1xyXG4gICAgcHVibGljIGRldGFpbDogICAgc3RyaW5nO1xyXG4gICAgcHVibGljIHBvaW50OiAgICAgc3RyaW5nO1xyXG4gICAgcHVibGljIGF1dG9fbW9kZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc19hY3RpdmU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaXNfZGVsZXRlOiBib29sZWFuO1xyXG4gICAgcHVibGljIHNhdmVfdGltZTogRGF0ZTtcclxuICAgIHB1YmxpYyBteXBvczogICAgIENfTW92YWJsZVBvaW50O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihhPzogSlNPTl9TYXZlSW5mbykge1xyXG4gICAgICAgIHRoaXMuc2F2ZV9pZCAgID0gLTE7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJfaWQgPSAtMTsgXHJcbiAgICAgICAgdGhpcy51bmlxX25vICAgPSAtMTtcclxuICAgICAgICB0aGlzLnRpdGxlICAgICA9ICcnO1xyXG4gICAgICAgIHRoaXMuZGV0YWlsICAgID0gJyc7XHJcbiAgICAgICAgdGhpcy5wb2ludCAgICAgPSAnJztcclxuICAgICAgICB0aGlzLmF1dG9fbW9kZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNfYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzX2RlbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2F2ZV90aW1lID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5teXBvcyAgICAgPSBuZXcgQ19Nb3ZhYmxlUG9pbnQoKTtcclxuXHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBuZXcoYT86IEpTT05fU2F2ZUluZm8pOiBDX1NhdmVJbmZvIHtcclxuICAgICAgICByZXR1cm4gbmV3IENfU2F2ZUluZm8oYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1NhdmVJbmZvIHtcclxuICAgICAgICBsZXQgc2F2ZV9kYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc2F2ZV9kYXRlID0gdGhpcy5zYXZlX3RpbWUudG9JU09TdHJpbmcoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgc2F2ZV9kYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNhdmVfaWQ6ICAgdGhpcy5zYXZlX2lkLCBcclxuICAgICAgICAgICAgICAgIHBsYXllcl9pZDogdGhpcy5wbGF5ZXJfaWQsICBcclxuICAgICAgICAgICAgICAgIHVuaXFfbm86ICAgdGhpcy51bmlxX25vLCBcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAgICAgdGhpcy50aXRsZSwgXHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6ICAgIHRoaXMuZGV0YWlsLCBcclxuICAgICAgICAgICAgICAgIHBvaW50OiAgICAgdGhpcy5wb2ludCwgXHJcbiAgICAgICAgICAgICAgICBhdXRvX21vZGU6IHRoaXMuYXV0b19tb2RlID8gJzEnIDogJzAnLCBcclxuICAgICAgICAgICAgICAgIGlzX2FjdGl2ZTogdGhpcy5pc19hY3RpdmUgPyAnMScgOiAnMCcsIFxyXG4gICAgICAgICAgICAgICAgaXNfZGVsZXRlOiB0aGlzLmlzX2RlbGV0ZSA/ICcxJyA6ICcwJywgXHJcbiAgICAgICAgICAgICAgICBzYXZlX3RpbWU6IHNhdmVfZGF0ZSwgXHJcbiAgICAgICAgICAgICAgICBteXBvczogICAgIHRoaXMubXlwb3MuZW5jb2RlKCksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1NhdmVEYXRhIEVuY29kZSBFcnJvcjogJyArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlY29kZShzOiBKU09OX1NhdmVJbmZvKTogQ19TYXZlSW5mbyB7XHJcbiAgICAgICAgdGhpcy5zYXZlX2lkICAgPSBzLnNhdmVfaWQgICA/PyB0aGlzLnNhdmVfaWQ7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJfaWQgPSBzLnBsYXllcl9pZCA/PyB0aGlzLnBsYXllcl9pZDsgXHJcbiAgICAgICAgdGhpcy51bmlxX25vICAgPSBzLnVuaXFfbm8gICA/PyB0aGlzLnVuaXFfbm87XHJcbiAgICAgICAgdGhpcy50aXRsZSAgICAgPSBzLnRpdGxlICAgICA/PyB0aGlzLnRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGV0YWlsICAgID0gcy5kZXRhaWwgICAgPz8gdGhpcy5kZXRhaWw7XHJcbiAgICAgICAgdGhpcy5wb2ludCAgICAgPSBzLnBvaW50ICAgICA/PyB0aGlzLnBvaW50O1xyXG4gICAgICAgIGlmIChzLmF1dG9fbW9kZSA9PT0gdW5kZWZpbmVkKSB0aGlzLmF1dG9fbW9kZTsgZWxzZSBzLmF1dG9fbW9kZSAhPT0gJzAnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGlmIChzLmlzX2FjdGl2ZSA9PT0gdW5kZWZpbmVkKSB0aGlzLmlzX2FjdGl2ZTsgZWxzZSBzLmlzX2FjdGl2ZSAhPT0gJzAnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGlmIChzLmlzX2RlbGV0ZSA9PT0gdW5kZWZpbmVkKSB0aGlzLmlzX2RlbGV0ZTsgZWxzZSBzLmlzX2RlbGV0ZSAhPT0gJzAnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGlmIChzLnNhdmVfdGltZSAhPT0gdW5kZWZpbmVkKSB0aGlzLnNhdmVfdGltZSA9IG5ldyBEYXRlKHMuc2F2ZV90aW1lKTsgXHJcblxyXG4gICAgICAgIGlmIChzLm15cG9zICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15cG9zLmRlY29kZShzLm15cG9zKTsgXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWxlcnQoKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJTYXZlSW5mbyBEQVRBOlwiIFxyXG4gICAgICAgICAgICArIFwiXFxuc2F2ZV9pZDogICAgXCIgKyAodGhpcy5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxucGxheWVyX2lkOiAgXCIgKyAodGhpcy5wbGF5ZXJfaWQgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudW5pcV9ubzogICAgXCIgKyAodGhpcy51bmlxX25vICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudGl0bGU6ICAgICAgXCIgKyAodGhpcy50aXRsZSAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuZGV0YWlsOiAgICAgXCIgKyAodGhpcy5kZXRhaWwgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxucG9pbnQ6ICAgICAgXCIgKyAodGhpcy5wb2ludCAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuYXV0b19tb2RlOiAgXCIgKyAodGhpcy5hdXRvX21vZGU/J1knOidOJylcclxuICAgICAgICAgICAgKyBcIlxcbmlzX2FjdGl2ZTogIFwiICsgKHRoaXMuaXNfYWN0aXZlPydZJzonTicpXHJcbiAgICAgICAgICAgICsgXCJcXG5pc19kZWxldGU6ICBcIiArICh0aGlzLmlzX2RlbGV0ZT8nWSc6J04nKVxyXG4gICAgICAgICAgICArIFwiXFxubXl1cmw6ICAgICAgXCIgKyAodGhpcy5teXBvcy51cmwoKSAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnRlYW1fdWlkOiAgIFwiICsgKHRoaXMubXlwb3MudGlkKCkgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sb2Nfa2luZDogICBcIiArICh0aGlzLm15cG9zLmdldF9sY2tkKCkgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubG9jX25hbWU6ICAgXCIgKyAodGhpcy5teXBvcy5nZXRfbmFtZSgpID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxvY191aWQ6ICAgIFwiICsgKHRoaXMubXlwb3MuZ2V0X3VpZCgpICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX1BvaW50IH0gICAgICAgICAgICAgICBmcm9tIFwiLi9DX1BvaW50XCI7XHJcbmltcG9ydCB7IENfUG9pbnREaXIgfSAgICAgICAgICAgIGZyb20gJy4vQ19Qb2ludERpcic7XHJcbmltcG9ydCB7IENfTW92YWJsZVBvaW50IH0gICAgICAgIGZyb20gXCIuL0NfTW92YWJsZVBvaW50XCI7XHJcbmltcG9ydCB7IENfV2Fsa2VyLCBKU09OX1dhbGtlciB9IGZyb20gXCIuL0NfV2Fsa2VyXCI7XHJcbmltcG9ydCB7IENfSGVybywgSlNPTl9IZXJvIH0gICAgIGZyb20gXCIuL0NfSGVyb1wiO1xyXG5pbXBvcnQgeyBJX01hemVPYmogfSAgICAgICAgICAgICBmcm9tIFwiLi9DX01hemVPYmpcIjtcclxuaW1wb3J0IHsgSlNPTl9BbnkgfSAgICAgICAgICAgICAgZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5pbXBvcnQgeyBDX0N1cnJlbnRUZWFtVmlldyB9ICAgICBmcm9tIFwiLi9DX1RlYW1WaWV3XCI7XHJcbmltcG9ydCB7IElfTWF6ZU9ialZpZXcsIEpTT05fTWF6ZU9ialZpZXcgfSAgZnJvbSBcIi4vQ19NYXplT2JqVmlld1wiO1xyXG5pbXBvcnQgeyBDX0dvb2QsICBUX0dvb2RLaW5kIH0gICBmcm9tIFwiLi9DX0dvb2RcIjtcclxuaW1wb3J0IHsgQ19Hb29kc0xpc3QsIEpTT05fR29vZHNMaXN0IH0gZnJvbSBcIi4vQ19Hb29kc0xpc3ROR1wiO1xyXG5pbXBvcnQgeyBfZ2V0X3V1aWQgfSAgICAgICAgICAgICBmcm9tIFwiLi4vZF91dGwvRl9SYW5kXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fVGVhbSBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGlkPzogICAgICAgIG51bWJlciwgXHJcbiAgICB1bmlxX2lkPzogICBzdHJpbmcsIFxyXG4gICAgc2F2ZV9pZD86ICAgbnVtYmVyLCBcclxuICAgIG5hbWU/OiAgICAgIHN0cmluZywgXHJcbiAgICBsb2NhdGU/OiAgICBKU09OX1dhbGtlcixcclxuICAgIGdvbGQ/OiAgICAgIG51bWJlcixcclxuLy8gICAgZ29vZHM/OiAgICAgSlNPTl9Hb29kc0xpc3QsXHJcbiAgICBoZXJvZXM/OiAgICBKU09OX0hlcm9bXSwgXHJcbiAgICBtb3Rpb24/OiAgICBzdHJpbmcsXHJcbiAgICB2aWV3PzogICAgICBKU09OX01hemVPYmpWaWV3fHVuZGVmaW5lZCxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X3RlYW1faW5mbyhhOiBKU09OX1RlYW18dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydChcIlRlYW0gSW5mbzpcIiBcclxuICAgICAgICArIFwiXFxuaWQ6ICAgIFwiICAgICArIChhLmlkICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnVuaXFfaWQ6ICBcIiAgKyAoYS51bmlxX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5uYW1lOiAgXCIgICAgICsgKGEubmFtZSAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2F2ZV9pZDogXCIgICArIChhLnNhdmVfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnVybDogIFwiICAgICAgKyAoYS5sb2NhdGU/LmN1cl91cmwgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sY2tkOiBcIiAgICAgICsgKGEubG9jYXRlPy5raW5kICAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubGNubTogXCIgICAgICArIChhLmxvY2F0ZT8ubmFtZSAgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxjaWQ6IFwiICAgICAgKyAoYS5sb2NhdGU/LmxvY191aWQgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfeDogXCIgICAgICsgKGEubG9jYXRlPy5sb2NfcG9zPy54ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3k6IFwiICAgICArIChhLmxvY2F0ZT8ubG9jX3Bvcz8ueSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl96OiBcIiAgICAgKyAoYS5sb2NhdGU/LmxvY19wb3M/LnogPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfZDogXCIgICAgICsgKGEubG9jYXRlPy5sb2NfcG9zPy5kID8/ICc/JylcclxuICAgICAgICArIFwiXFxuZ29sZDogXCIgICAgICArIChhLmdvbGQgICAgICA/PyAgMCApXHJcbi8vICAgICAgICArIFwiXFxuZ29vZHM6IFwiICAgICArIChPYmplY3Qua2V5cyhhLmdvb2RzPz9bXSkubGVuZ3RoKVxyXG4gICAgICAgICsgXCJcXG5oZXJvZXM6IFwiICAgICsgKGEuaGVyb2VzPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxuXHJcbi8vICAgIGlmIChhLmhlcm9lcyAhPT0gdW5kZWZpbmVkKSBhbGVydF9oZXJvZXNfaW5mbyhhLmhlcm9lcyk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ19UZWFtIGltcGxlbWVudHMgSV9NYXplT2JqIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgbmV3T2JqKGo/OiBKU09OX1RlYW0pOiBDX1RlYW0ge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ19UZWFtKGopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG5ld09iaihqPzogSlNPTl9UZWFtKTogQ19UZWFtIHtyZXR1cm4gQ19UZWFtLm5ld09iaihqKTt9XHJcblxyXG4gICAgcHJvdGVjdGVkIG15X2lkOiAgICAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIG15X25hbWU6ICAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHVuaXFfaWQ6ICAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHNhdmVfaWQ6ICAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIHdhbGtlcjogICAgQ19XYWxrZXI7XHJcbiAgICBwcm90ZWN0ZWQgZ29sZDogICAgICBudW1iZXI7XHJcbi8vICAgIHByb3RlY3RlZCBnb29kczogICAgIENfR29vZHNMaXN0O1xyXG4gICAgcHJvdGVjdGVkIGhlcm9lczogICAge1t1aWQ6IHN0cmluZ106IENfSGVyb307XHJcblxyXG4gICAgcHJvdGVjdGVkIG15VmlldzogICAgSV9NYXplT2JqVmlld3x1bmRlZmluZWQ7XHJcbiAgICBwcm90ZWN0ZWQgaG9wZV9tb3Rpb246IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fVGVhbSkge1xyXG5cclxuICAgICAgICB0aGlzLm15X2lkICAgICA9ICAwO1xyXG4gICAgICAgIHRoaXMubXlfbmFtZSAgID0gJ05lbyBUZWFtPyc7XHJcbiAgICAgICAgdGhpcy51bmlxX2lkICAgPSAnbWFpX3RlYW0jJyArIF9nZXRfdXVpZCgpO1xyXG4gICAgICAgIHRoaXMuc2F2ZV9pZCAgID0gIDA7XHJcblxyXG4gICAgICAgIHRoaXMubXlWaWV3ID0gbmV3IENfQ3VycmVudFRlYW1WaWV3KHRoaXMpIGFzIElfTWF6ZU9ialZpZXc7XHJcbiAgICAgICAgdGhpcy53YWxrZXIgPSBuZXcgQ19XYWxrZXIoKTtcclxuICAgICAgICB0aGlzLndhbGtlci5zZXRfdGlkKHRoaXMudWlkKCkpO1xyXG5cclxuICAgICAgICB0aGlzLmdvbGQgICA9IDA7XHJcbi8vICAgICAgICB0aGlzLmdvb2RzICA9IG5ldyBDX0dvb2RzTGlzdCgpO1xyXG4gICAgICAgIHRoaXMuaGVyb2VzID0ge307XHJcbiAgICAgICAgdGhpcy5ob3BlX21vdGlvbiA9ICdOT1AnOyAgICBcclxuICAgICAgICBpZiAoaiAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcHJwKGFyZyA6IEpTT05fVGVhbSkge1xyXG4gICAgICAgIHRoaXMuZGVjb2RlKGFyZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy51bmlxX2lkfVxyXG5cclxuICAgIHB1YmxpYyB3aXRoaW4ocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGhlcmUgPSB0aGlzLndhbGtlcj8uZ2V0X3AoKTtcclxuICAgICAgICByZXR1cm4gaGVyZT8ud2l0aGluKHApID8/IGZhbHNlOyBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlldygpOiAgSV9NYXplT2JqVmlld3x1bmRlZmluZWQge3JldHVybiB0aGlzLm15Vmlld31cclxuICAgIHB1YmxpYyB3YWxrKCk6ICBDX1dhbGtlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2Fsa2VyXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBjYW5UaHJvdWdoKCk6IGJvb2xlYW4ge3JldHVybiB0cnVlfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaHJlcygpOiAgQ19IZXJvW10ge1xyXG4gICAgICAgIGNvbnN0IGhyZXM6IENfSGVyb1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaWkgaW4gdGhpcy5oZXJvZXMpIGhyZXMucHVzaCh0aGlzLmhlcm9lc1tpaV0pO1xyXG4gICAgICAgIHJldHVybiBocmVzO1xyXG4gICAgfSBcclxuICAgIHB1YmxpYyBjbGVhcl9ocmVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGVyb2VzID0ge307XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRkX2hlcm8oaGVybzogQ19IZXJvKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZXJvZXNbaGVyby51aWQoKV0gPSBoZXJvO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJtdl9oZXJvKGhlcm86IENfSGVybyk6IHZvaWQge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmhlcm9lc1toZXJvLnVpZCgpXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X2xvYygpOiBDX01vdmFibGVQb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2Fsa2VyO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9sb2MobG9jOiBDX01vdmFibGVQb2ludCk6IHZvaWQge1xyXG4gICAgICAgICh0aGlzLndhbGtlciA/Pz0gbmV3IENfV2Fsa2VyKCkpLmRlY29kZShsb2MuZW5jb2RlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRfcGQoKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2Fsa2VyLmdldF9wZCgpO1xyXG4gICAgfVxyXG5cclxuLypcclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9vYmpfdG9fc3RyaW5nKG9hOiBDX1RlYW0pOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYSwgbnVsbCwgXCJcXHRcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fb2JqQXJyYXlfdG9fc3RyaW5nKG9hYToge1t1aWQ6IHN0cmluZ106IENfVGVhbX0pOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IG9hID0gW10gYXMgQ19UZWFtW107XHJcbiAgICAgICAgZm9yIChjb25zdCBpaSBpbiBvYWEpIG9hLnB1c2gob2FhW2lpXSk7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9hLCBudWxsLCBcIlxcdFwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdfdG9fb2JqKHR4dDogc3RyaW5nKTogQ19UZWFtIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqICAgPSBKU09OLnBhcnNlKHR4dCkgYXMgQ19UZWFtW107XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ19UZWFtKGopO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENfVGVhbSgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fc3RyaW5nX3RvX29iakFycmF5KHR4dDogc3RyaW5nKToge1t1aWQ6IHN0cmluZ106IENfVGVhbX0ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGogICA9IEpTT04ucGFyc2UodHh0KSBhcyBKU09OX1RlYW1bXTtcclxuICAgICAgICAgICAgY29uc3QgbXBhID0ge30gYXMge1tpZDogc3RyaW5nXTogQ19UZWFtfTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqaiBvZiBqKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhYWEgPSBuZXcgQ19UZWFtKCkuZGVjb2RlKGpqKTtcclxuICAgICAgICAgICAgICAgIG1wYVthYWEudWlkKCldID0gYWFhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtcGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4qL1xyXG4gICAgXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fVGVhbSB7XHJcbiAgICAgICAgdGhpcy5nZXRfbG9jKCk7IC8vIExvY2F0aW9u5oOF5aCx44KS5pyA5paw44Gr5pu05pawXHJcblxyXG4gICAgICAgIGNvbnN0IGpzb25faGVyb2VzOiBKU09OX0hlcm9bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGlpIGluIHRoaXMuaGVyb2VzKSBqc29uX2hlcm9lcy5wdXNoKHRoaXMuaGVyb2VzW2lpXS5lbmNvZGUoKSk7ICBcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6ICAgICAgICB0aGlzLm15X2lkLFxyXG4gICAgICAgICAgICBuYW1lOiAgICAgIHRoaXMubXlfbmFtZSxcclxuICAgICAgICAgICAgdW5pcV9pZDogICB0aGlzLnVuaXFfaWQsXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6ICAgdGhpcy5zYXZlX2lkLFxyXG4gICAgICAgICAgICBsb2NhdGU6ICAgIHRoaXMud2Fsa2VyLmVuY29kZSgpLFxyXG4gICAgICAgICAgICBnb2xkOiAgICAgIHRoaXMuZ29sZCxcclxuLy8gICAgICAgICAgICBnb29kczogICAgIHRoaXMuZ29vZHMuZW5jb2RlKCksXHJcbiAgICAgICAgICAgIGhlcm9lczogICAganNvbl9oZXJvZXMsXHJcbiAgICAgICAgICAgIG1vdGlvbjogICAgdGhpcy5ob3BlX21vdGlvbixcclxuICAgICAgICAgICAgdmlldzogICAgICB0aGlzLm15Vmlldz8uZW5jb2RlKCkgPz8ge30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoYTogSlNPTl9UZWFtfHVuZGVmaW5lZCk6IENfVGVhbSB7XHJcbiAgICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoYS5pZCAgICE9PSB1bmRlZmluZWQpICAgIHRoaXMubXlfaWQgICAgICAgPSBhLmlkO1xyXG4gICAgICAgIGlmIChhLm5hbWUgIT09IHVuZGVmaW5lZCkgICAgdGhpcy5teV9uYW1lICAgICA9IGEubmFtZTtcclxuICAgICAgICBpZiAoYS51bmlxX2lkICE9PSB1bmRlZmluZWQpIHRoaXMudW5pcV9pZCAgICAgPSBhLnVuaXFfaWQ7XHJcbiAgICAgICAgaWYgKGEuc2F2ZV9pZCAhPT0gdW5kZWZpbmVkKSB0aGlzLnNhdmVfaWQgICAgID0gYS5zYXZlX2lkO1xyXG4gICAgICAgIGlmIChhLm1vdGlvbiAhPT0gdW5kZWZpbmVkKSAgdGhpcy5ob3BlX21vdGlvbiA9IGEubW90aW9uO1xyXG5cclxuICAgICAgICBpZiAoYS5sb2NhdGUgIT09IHVuZGVmaW5lZCkgIHRoaXMud2Fsa2VyLmRlY29kZShhLmxvY2F0ZSk7XHJcbiAgICAgICAgaWYgKGEuZ29sZCAgICE9PSB1bmRlZmluZWQpICB0aGlzLmdvbGQgPSBhLmdvbGQ7XHJcbi8vICAgICAgICBpZiAoYS5nb29kcyAgIT09IHVuZGVmaW5lZCkgIHRoaXMuZ29vZHMuZGVjb2RlKGEuZ29vZHMpO1xyXG5cclxuICAgICAgICBpZiAoYS5oZXJvZXMgIT09IHVuZGVmaW5lZCkgIHtcclxuICAgICAgICAgICAgdGhpcy5oZXJvZXMgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqc29uX2hlcm8gb2YgYS5oZXJvZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlcm8gPSBuZXcgQ19IZXJvKGpzb25faGVybyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlcm9lc1toZXJvLnVpZCgpXSA9IGhlcm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbi8qXHJcbiAgICAgICAgaWYgKGEudmlldyAgICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhhLnZpZXcpLmxlbmd0aCA+IDApIHRoaXMubXlWaWV3ID0gQ19NYXplT2JqVmlldy5uZXdPYmooYS52aWV3KTsgXHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5teVZpZXcgPSBuZXcgQ19DdXJyZW50VGVhbVZpZXcodGhpcykgYXMgSV9NYXplT2JqVmlldzsgXHJcbiAgICAgICAgfVxyXG4qL1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBlbmNvZGVfYWxsKGFsbF90ZWFtOiBDX1RlYW1bXSk6IEpTT05fVGVhbVtdIHtcclxuICAgICAgICBjb25zdCBhbGxfdGVhbV9kYXRhOiBKU09OX1RlYW1bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHRlYW0gb2YgYWxsX3RlYW0pIHtcclxuICAgICAgICAgICAgYWxsX3RlYW1fZGF0YS5wdXNoKHRlYW0uZW5jb2RlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsX3RlYW1fZGF0YTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVjb2RlX2FsbChhbGxfdGVhbV9kYXRhOiBKU09OX1RlYW1bXSk6IENfVGVhbVtdIHtcclxuICAgICAgICBjb25zdCBhbGxfdGVhbTogQ19UZWFtW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB0ZWFtX2RhdGEgb2YgYWxsX3RlYW1fZGF0YSkge1xyXG4gICAgICAgICAgICBhbGxfdGVhbS5wdXNoKChuZXcgQ19UZWFtKCkpLmRlY29kZSh0ZWFtX2RhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbF90ZWFtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWxlcnQoKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJUZWFtIEluZm86XCIgXHJcbiAgICAgICAgICAgICsgXCJcXG5pZDogICAgXCIgICAgICsgKHRoaXMubXlfaWQgICAgICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG51bmlxX2lkOiAgXCIgICsgKHRoaXMudW5pcV9pZCAgICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5uYW1lOiAgXCIgICAgICsgKHRoaXMubXlfbmFtZSAgICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zYXZlX2lkOiBcIiAgICsgKHRoaXMuc2F2ZV9pZCAgICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG51cmw6ICBcIiAgICAgICsgKHRoaXMud2Fsa2VyLnVybCgpICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sY2tkOiBcIiAgICAgICsgKHRoaXMud2Fsa2VyLmdldF9sY2tkX3N0cigpID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxjbm06IFwiICAgICAgKyAodGhpcy53YWxrZXIuZ2V0X25hbWUoKSAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubGNpZDogXCIgICAgICArICh0aGlzLndhbGtlci5nZXRfdWlkKCkgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfeDogXCIgICAgICsgKHRoaXMud2Fsa2VyLmdldF9wKCkueCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfeTogXCIgICAgICsgKHRoaXMud2Fsa2VyLmdldF9wKCkueSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfejogXCIgICAgICsgKHRoaXMud2Fsa2VyLmdldF9wKCkueiA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfZDogXCIgICAgICsgKHRoaXMud2Fsa2VyLmdldF9kKCkgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5nb2xkOiBcIiAgICAgICsgKE9iamVjdC5rZXlzKHRoaXMuZ29sZCA/PyB7fSkubGVuZ3RoKVxyXG4gICAgICAgICAgICArIFwiXFxuaGVyb2VzOiBcIiAgICArICh0aGlzLmhlcm9lcz8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhbGVydF9ocmVzKCk6IHZvaWQge1xyXG4vLyAgICAgICAgYWxlcnQoXCJUZWFtIEluZm86XCIpO1xyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gdGhpcy5oZXJvZXMpIHRoaXMuaGVyb2VzW2lpXS5hbGVydCgpO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgVF9EaXJlY3Rpb24gfSAgICAgICBmcm9tICcuL0NfUG9pbnREaXInO1xyXG5pbXBvcnQgeyBDX1RlYW0sIEpTT05fVGVhbSB9IGZyb20gXCIuL0NfVGVhbVwiO1xyXG5pbXBvcnQgeyBUX1dhbGwgfSAgICAgICAgICAgIGZyb20gXCIuLi9kX21kbC9DX1dhbGxcIjtcclxuaW1wb3J0IHsgQ19NYXplT2JqVmlldywgSV9NYXplT2JqVmlldywgSlNPTl9NYXplT2JqVmlldywgVF9SZWN0IH0gIGZyb20gXCIuL0NfTWF6ZU9ialZpZXdcIjtcclxuXHJcbnR5cGUgVF94eSA9IHt4OiBudW1iZXIsIHk6IG51bWJlcn07XHJcblxyXG5leHBvcnQgY2xhc3MgQ19DdXJyZW50VGVhbVZpZXcgIGltcGxlbWVudHMgSV9NYXplT2JqVmlldyB7XHJcbiAgICBwdWJsaWMgIHN0YXRpYyBuZXdPYmooaj86IEpTT05fVGVhbSk6IElfTWF6ZU9ialZpZXcge1xyXG4gICAgICAgIGNvbnN0IHRlYW0gPSBuZXcgQ19UZWFtKGopO1xyXG4gICAgICAgIHJldHVybiBuZXcgQ19DdXJyZW50VGVhbVZpZXcodGVhbSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgIG5ld09iaihqPzogSlNPTl9UZWFtKTogSV9NYXplT2JqVmlldyB7cmV0dXJuIENfQ3VycmVudFRlYW1WaWV3Lm5ld09iaihqKX1cclxuXHJcbiAgICBwcml2YXRlIG15X3RlYW06IENfVGVhbTtcclxuICAgIHByaXZhdGUgbXlfbGF5ZXI6ICBudW1iZXIgPSA5OTtcclxuICAgIHB1YmxpYyAgY29uc3RydWN0b3IodGVhbTogQ19UZWFtKSB7XHJcbiAgICAgICAgdGhpcy5teV90ZWFtID0gdGVhbTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGF5ZXIoKTogbnVtYmVyICAgICAgICAge3JldHVybiB0aGlzLm15X2xheWVyO31cclxuICAgIHB1YmxpYyBzZXRfbGF5ZXIobGF5ZXI6IG51bWJlcik6IHZvaWQge3RoaXMubXlfbGF5ZXIgPSBsYXllcjt9XHJcbiAgICBwdWJsaWMgbGV0dGVyKCk6IHN0cmluZ3xudWxsIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubXlfdGVhbS53YWxrKCkuZ2V0X2QoKSkge1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHJldHVybiAn4oaRJztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOiByZXR1cm4gJ+KGkic7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogcmV0dXJuICfihpMnO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHJldHVybiAn4oaQJztcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuICfwn4yAJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2FuU2hvdygpOiBib29sZWFue3JldHVybiBmYWxzZX1cclxuICAgIHB1YmxpYyBwYWRfdCgpOiAgIG51bWJlciB7cmV0dXJuIDAuMH0gXHJcbiAgICBwdWJsaWMgcGFkX2QoKTogICBudW1iZXIge3JldHVybiAwLjB9IFxyXG4gICAgcHVibGljIHBhZF9zKCk6ICAgbnVtYmVyIHtyZXR1cm4gMC4wfSBcclxuICAgIHB1YmxpYyBjb2xfZigpOiAgIHN0cmluZ3xudWxsIHtyZXR1cm4gbnVsbH0gXHJcbiAgICBwdWJsaWMgY29sX2IoKTogICBzdHJpbmd8bnVsbCB7cmV0dXJuIG51bGx9IFxyXG4gICAgcHVibGljIGNvbF9zKCk6ICAgc3RyaW5nfG51bGwge3JldHVybiBudWxsfSBcclxuICAgIHB1YmxpYyBjb2xfdCgpOiAgIHN0cmluZ3xudWxsIHtyZXR1cm4gbnVsbH0gXHJcbiAgICBwdWJsaWMgY29sX2QoKTogICBzdHJpbmd8bnVsbCB7cmV0dXJuIG51bGx9IFxyXG4gICAgcHVibGljIGNvbF9sKCk6ICAgc3RyaW5nfG51bGwge3JldHVybiBudWxsfSBcclxuICAgIHB1YmxpYyBjb2xfMigpOiAgIHN0cmluZ3xudWxsIHtyZXR1cm4gbnVsbH0gXHJcblxyXG4gICAgcHVibGljIGRyb3czRChmcm90OiBUX1dhbGwsIGJhY2s6IFRfV2FsbCk6IHZvaWQge31cclxuXHJcbiAgICBwdWJsaWMgZHJvdzJEKHI6ICBUX1JlY3QpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3QgY29uID0gQ19NYXplT2JqVmlldy5nZXRfY29udGV4dDJEKCk7XHJcbiAgICAgICAgaWYgKGNvbiA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBjb24uYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY29uLm1vdmVUbyhyLnRsLngsIHIudGwueSk7XHJcbiAgICAgICAgY29uLmxpbmVUbyhyLnRyLngsIHIudHIueSk7XHJcbiAgICAgICAgY29uLmxpbmVUbyhyLmRyLngsIHIuZHIueSk7XHJcbiAgICAgICAgY29uLmxpbmVUbyhyLmRsLngsIHIuZGwueSk7XHJcbiAgICAgICAgY29uLmNsb3NlUGF0aCgpO1xyXG4gICAgXHJcbiAgICAgICAgY29uLmZpbGxTdHlsZSAgID0gXCIjZmYzMzMzXCI7XHJcbiAgICAgICAgY29uLmZpbGwoKTtcclxuICAgIFxyXG4gICAgICAgIC8vIERyYXcgdGhlIGFycm93XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLm15X3RlYW0ud2FsaygpLmdldF9kKCkpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiAgLy8g4oaRXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3cyRF9hcnJvdyh7eDogKHIudGwueCArIHIudHIueCkvMiwgeTpyLnRsLnl9LCByLmRsLCByLmRyKTticmVha1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6ICAvLyDihpJcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJvdzJEX2Fycm93KHt5OiAoci50ci55ICsgci5kci55KS8yLCB4OnIudHIueH0sIHIudGwsIHIuZGwpO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6IC8vIOKGk1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcm93MkRfYXJyb3coe3g6IChyLmRsLnggKyByLmRyLngpLzIsIHk6ci5kbC55fSwgci50ciwgci50bCk7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogLy8g4oaQXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3cyRF9hcnJvdyh7eTogKHIudGwueSArIHIuZGwueSkvMiwgeDpyLnRsLnh9LCByLmRyLCByLnRyKTticmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgZHJvdzJEX2Fycm93KHRvcDogVF94eSwgbGVmdDogVF94eSwgcmlnaHQ6IFRfeHkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjb24gPSBDX01hemVPYmpWaWV3LmdldF9jb250ZXh0MkQoKTtcclxuICAgICAgICBpZiAoY29uID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbi5tb3ZlVG8odG9wLngsIHRvcC55KTtcclxuICAgICAgICBjb24ubGluZVRvKHJpZ2h0LngsIHJpZ2h0LnkpO1xyXG4gICAgICAgIGNvbi5saW5lVG8obGVmdC54LCBsZWZ0LnkpO1xyXG4gICAgICAgIGNvbi5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgY29uLmZpbGxTdHlsZSAgID0gXCIjZmY2NjY2XCI7XHJcbiAgICAgICAgY29uLmZpbGwoKTtcclxuXHJcbiAgICAgICAgY29uLnN0cm9rZVN0eWxlID0gXCIjZmY5OTk5XCI7XHJcbiAgICAgICAgY29uLmxpbmVXaWR0aCAgID0gMztcclxuICAgICAgICBjb24uc3Ryb2tlKCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX01hemVPYmpWaWV3IHtyZXR1cm4ge2NuYW1lOiAnQ3VycmVudFRlYW1WaWV3J319XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo6IEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkKTogSV9NYXplT2JqVmlldyB7cmV0dXJuIHRoaXMgYXMgSV9NYXplT2JqVmlld31cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfUG9pbnREaXIsIFRfRGlyZWN0aW9uIH0gICAgICAgICAgIGZyb20gXCIuL0NfUG9pbnREaXJcIjtcclxuaW1wb3J0IHsgQ19Nb3ZhYmxlUG9pbnQsIEpTT05fTW92YWJsZVBvaW50IH0gZnJvbSBcIi4vQ19Nb3ZhYmxlUG9pbnRcIjtcclxuaW1wb3J0IHsgSV9Mb2NhdGUgfSAgICAgZnJvbSBcIi4vQ19Mb2NhdGlvblwiO1xyXG5pbXBvcnQgeyBJX0hvcGVBY3Rpb24gfSBmcm9tIFwiLi9JX0NvbW1vblwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9XYWxrZXIgZXh0ZW5kcyBKU09OX01vdmFibGVQb2ludCB7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1dhbGtlciBleHRlbmRzIENfTW92YWJsZVBvaW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGo/OiBKU09OX1dhbGtlcikge1xyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF94KCk6IG51bWJlciB7cmV0dXJuIHRoaXMubG9jX3Bvcy54fVxyXG4gICAgcHVibGljIGdldF95KCk6IG51bWJlciB7cmV0dXJuIHRoaXMubG9jX3Bvcy55fVxyXG4gICAgcHVibGljIGdldF96KCk6IG51bWJlciB7cmV0dXJuIHRoaXMubG9jX3Bvcy56fVxyXG5cclxuICAgIHB1YmxpYyBzZXRfeCh4OiBudW1iZXIpOiB2b2lkIHt0aGlzLmxvY19wb3MueCA9IHh9XHJcbiAgICBwdWJsaWMgc2V0X3koeTogbnVtYmVyKTogdm9pZCB7dGhpcy5sb2NfcG9zLnkgPSB5fVxyXG4gICAgcHVibGljIHNldF96KHo6IG51bWJlcik6IHZvaWQge3RoaXMubG9jX3Bvcy56ID0gen1cclxuXHJcbiAgICBwdWJsaWMgc2V0X3BsYWNlKFxyXG4gICAgICAgIHBsYWNlOiBJX0xvY2F0ZSwgXHJcbiAgICAgICAgdXJsPzogIHN0cmluZywgXHJcbiAgICAgICAgcG9zPzogIENfUG9pbnREaXIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRfdWlkIChwbGFjZS51aWQoKSk7XHJcbiAgICAgICAgdGhpcy5zZXRfbGNrZChwbGFjZS5nZXRfbGNrZCgpKTtcclxuICAgICAgICB0aGlzLnNldF9uYW1lKHBsYWNlLmdldF9uYW1lKCkpO1xyXG5cclxuICAgICAgICBpZiAodXJsICE9PSB1bmRlZmluZWQpIHRoaXMuc2V0X3VybCh1cmwpO1xyXG4gICAgICAgIGlmIChwb3MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldF9wZChwb3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBob3BlX3BfZndkKCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIk1vdmVcIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy5nZXRfcF9md2QoKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLnNldF9wX2Z3ZCgpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhvcGVfcF9iYWsoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiTW92ZVwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wX2JhaygpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMuc2V0X3BfYmFrKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBob3BlX3BfbGZ0KCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIk1vdmVcIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy5nZXRfcF9sZnQoKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLnNldF9wX2xmdCgpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhvcGVfcF9yZ3QoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiTW92ZVwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wX3JndCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMuc2V0X3Bfcmd0KCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9wZV90dXJuX3IoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiVHVyblwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wZCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMudHVybl9yKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9wZV90dXJuX2woKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiVHVyblwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wZCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMudHVybl9sKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhvcGVfcF91cCgpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJVcFwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wX3VwKCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy5tb3ZlX3BfdXAoKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBob3BlX3BfZG93bigpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJEb3duXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMuZ2V0X3BfZG93bigpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMubW92ZV9wX2Rvd24oKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZV9wX3VwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3BfdXAoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBtb3ZlX3BfZG93bigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldF9wX2Rvd24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNORygpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXRfcF9md2QoKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19nZXRfcF9tb3ZlKDEsIDApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wX2Z3ZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldF9wZCh0aGlzLmdldF9wX2Z3ZCgpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfcF9iYWsoKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19nZXRfcF9tb3ZlKC0xLCAwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcF9iYWsoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRfcGQodGhpcy5nZXRfcF9iYWsoKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BfbGZ0KCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9fZ2V0X3BfbW92ZSgwLCAtMSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BfbGZ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3BkKHRoaXMuZ2V0X3BfbGZ0KCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wX3JndCgpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX2dldF9wX21vdmUoMCwgMSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3Bfcmd0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3BkKHRoaXMuZ2V0X3Bfcmd0KCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wX3VwKCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIGNvbnN0IHAgPSBuZXcgQ19Qb2ludERpcih0aGlzLmxvY19wb3MpO1xyXG4gICAgICAgIHAuei0tO1xyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wX3VwKCkge1xyXG4gICAgICAgIHRoaXMuc2V0X3BkKHRoaXMuZ2V0X3BfdXAoKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BfZG93bigpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICBjb25zdCBwID0gbmV3IENfUG9pbnREaXIodGhpcy5sb2NfcG9zKTtcclxuICAgICAgICBwLnorKztcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcF9kb3duKCkge1xyXG4gICAgICAgIHRoaXMuc2V0X3BkKHRoaXMuZ2V0X3BfZG93bigpKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2dldF9wX21vdmUob2Zmc2V0RkI6IG51bWJlciwgb2Zmc2V0TFI6IG51bWJlcik6IENfUG9pbnREaXIge1xyXG4gICAgICAgIGNvbnN0IHAgPSBuZXcgQ19Qb2ludERpcih0aGlzLmxvY19wb3MpO1xyXG4gICAgICAgIGlmIChvZmZzZXRGQiAhPT0gMCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMubG9jX3Bvcy5kKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHAueSAtPSBvZmZzZXRGQjticmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogcC54ICs9IG9mZnNldEZCO2JyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiBwLnkgKz0gb2Zmc2V0RkI7YnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHAueCAtPSBvZmZzZXRGQjticmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2Zmc2V0TFIgIT09IDApIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmxvY19wb3MuZCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiBwLnggKz0gb2Zmc2V0TFI7YnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHAueSArPSBvZmZzZXRMUjticmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogcC54IC09IG9mZnNldExSO2JyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiBwLnkgLT0gb2Zmc2V0TFI7YnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X2Fyb3VuZChmcm9udDogbnVtYmVyLCByaWdodDpudW1iZXIsIHVwOiBudW1iZXIgPSAwKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgdmFyIHRhcmdldF94ICA9IHRoaXMubG9jX3Bvcy54O1xyXG4gICAgICAgIHZhciB0YXJnZXRfeSAgPSB0aGlzLmxvY19wb3MueTtcclxuICAgICAgICB2YXIgdGFyZ2V0X3ogID0gdGhpcy5sb2NfcG9zLnogLSB1cDtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubG9jX3Bvcy5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjpcclxuICAgICAgICAgICAgICAgIHRhcmdldF94ICs9IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3kgLT0gZnJvbnQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3ggKz0gZnJvbnQ7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeSArPSByaWdodDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeCAtPSByaWdodDtcclxuICAgICAgICAgICAgICAgIHRhcmdldF95ICs9IGZyb250O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzpcclxuICAgICAgICAgICAgICAgIHRhcmdldF94IC09IGZyb250O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3kgLT0gcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX1BvaW50RGlyKHt4OiB0YXJnZXRfeCwgeTogdGFyZ2V0X3ksIHo6IHRhcmdldF96LCBkOiB0aGlzLmxvY19wb3MuZH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHR1cm5fcigpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubG9jX3Bvcy5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5FO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uUzticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLlc7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5OO2JyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyB0dXJuX2woKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmxvY19wb3MuZCkge1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uVzticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLk47YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5FO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uUzticmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdHVybl9iKCk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5sb2NfcG9zLmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLlM7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5XO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uTjticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLlc7YnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1dhbGtlciB7XHJcbiAgICAgICAgY29uc3QgaiA9IHN1cGVyLmVuY29kZSgpIGFzIEpTT05fV2Fsa2VyO1xyXG4gICAgICAgIHJldHVybiBqO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX1dhbGtlcik6IENfV2Fsa2VyIHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBzdXBlci5kZWNvZGUoYSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgX3JvdW5kIH0gIGZyb20gXCIuLi9kX3V0bC9GX01hdGhcIjtcclxuaW1wb3J0IHsgQ19SYW5nZSB9IGZyb20gXCIuL0NfUmFuZ2VcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFRfV2FsbCA9IHtcclxuICAgIG1pbl94OiBudW1iZXIsXHJcbiAgICBtYXhfeDogbnVtYmVyLFxyXG4gICAgbWluX3k6IG51bWJlcixcclxuICAgIG1heF95OiBudW1iZXIsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1dhbGwge1xyXG4gICAgcHJvdGVjdGVkIHc6IFRfV2FsbFtdW107XHJcbiAgICBwcm90ZWN0ZWQgZDogbnVtYmVyXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZGVwdGg6IG51bWJlciA9IDUsIHNpemU6IENfUmFuZ2UpIHtcclxuICAgICAgICBpZiAoZGVwdGggPCAzKSBkZXB0aCA9IDU7XHJcbiAgICAgICAgaWYgKGRlcHRoICUgMiAhPT0gMSkgZGVwdGgrKzsgIC8vIOWlh+aVsOOBruOBv+WvvuW/nOOAglxyXG5cclxuICAgICAgICBjb25zdCBtaW5feDogbnVtYmVyID0gc2l6ZS5taW5feCgpO1xyXG4gICAgICAgIGNvbnN0IG1pbl95OiBudW1iZXIgPSBzaXplLm1pbl95KCk7XHJcbiAgICAgICAgY29uc3QgbWF4X3g6IG51bWJlciA9IHNpemUubWF4X3goKTtcclxuICAgICAgICBjb25zdCBtYXhfeTogbnVtYmVyID0gc2l6ZS5tYXhfeSgpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgY2VudGVyX3g6IG51bWJlciA9IChtYXhfeCAtIG1pbl94KSAvIDI7XHJcbiAgICBcclxuICAgICAgICAvLyDln7rmupbjgajjgarjgovlo4Eo5LiA55Wq6YGg44GP44Gu5aOBKeOBruato+mdouOCteOCpOOCuijmqKrluYUp44KS5rGC44KB44KLXHJcbiAgICAgICAgLy8g5LiA55Wq6YGg44GPKGRlcHRoIC0gMSnjga7lo4Hjga7mlbDjgYxkZXB0aOWAi+OBq+OBquOCi+OCiOOBhuOBq+iqv+aVtOOBmeOCi1xyXG4gICAgICAgIGNvbnN0IGZyb250X3dhbGxfc2l6ZV94OiBudW1iZXIgPSAobWF4X3ggLSBtaW5feCkgLyBkZXB0aDtcclxuXHJcbiAgICAgICAgLy8g5Z+65rqW44Go44Gq44KL5YG05aOB44Gu44K144Kk44K6KOaoquW5hSnjgpLmsYLjgoHjgotcclxuICAgICAgICAvLyDkuIDnlarpgaDjgY/jga7lo4Eo5Lit5aSuKeOBruW3puerr+OBi+OCiWRlcHRo5YCL44Gu5YG05aOB44KS5Y+W44KM44KL44KI44GG44Gr44K144Kk44K66Kq/5pW044GZ44KLXHJcbiAgICAgICAgY29uc3Qgc2lkZV93YWxsX3NpemVfeDogIG51bWJlciA9IChjZW50ZXJfeCAtIGZyb250X3dhbGxfc2l6ZV94IC8gMikgLyBkZXB0aDtcclxuICAgIFxyXG4gICAgICAgIC8vIOWQhGRlcHRo5Yil44Gu5q2j6Z2i5aOB44Gu5qiq5bmF44KS5rGC44KB44KL44CCXHJcbiAgICAgICAgLy8g6KiI566X44Gu5Yip5L6/5oCn44KS6ICD5oWu44GX44Gm44CB44OP44O844OV44K144Kk44K644KS5rGC44KB44KLXHJcbiAgICAgICAgY29uc3QgZnJvbnRfd2FsbF9IX3NpemVfeDogbnVtYmVyW10gPSBuZXcgQXJyYXkoZGVwdGggKyAxKTtcclxuICAgIFxyXG4gICAgICAgIGZyb250X3dhbGxfSF9zaXplX3hbZGVwdGhdID0gZnJvbnRfd2FsbF9zaXplX3ggLyAyO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBkZXB0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGZyb250X3dhbGxfSF9zaXplX3hbaV0gPSBmcm9udF93YWxsX0hfc2l6ZV94W2kgKyAxXSArIHNpZGVfd2FsbF9zaXplX3g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDln7rmupbjgajjgarjgovlo4Eo5LiA55Wq6YGg44GP44Gu5aOBKeOBruato+mdouOCteOCpOOCuijnuKbluYUp44KS5rGC44KB44KLXHJcbiAgICAgICAgLy8g5LiA55Wq6YGg44GPKGRlcHRoIC0gMSnjga7lo4Hjga7mlbDjgYxkZXB0aOWAi+OBq+OBquOCi+OCiOOBhuOBq+iqv+aVtOOBmeOCi1xyXG4gICAgICAgIGNvbnN0IGZyb250X3dhbGxfc2l6ZV95OiBudW1iZXIgPSAobWF4X3kgLSBtaW5feSkgLyBkZXB0aDtcclxuXHJcbiAgICAgICAgLy8g5aSp5LqV44Gu57im5bmF44Gu5aKX5YiG44KS5rGC44KB44KL44CC5Ymy5ZCI44Gv6YGp5b2T77yI56yR77yJXHJcbiAgICAgICAgLy8g44Kt44Oj44Oz44OQ44K544Gu6auY44GVKG1heF95IC0gbWluX3kp44GL44KJ5LiA55Wq6YGg44GP44Gu5aOB44Gu6auY44GV44KS5byV44GE44GmXHJcbiAgICAgICAgLy8g5rex44GVKGRlcHRoICsgMSnjgaflibLjgovjgZPjgajjgavjgojjgorlopfliIbjgajjgZfjgZ9cclxuICAgICAgICBjb25zdCBzaWRlX3dhbGxfc2l6ZV9UID0gIChtYXhfeSAtIG1pbl95IC0gZnJvbnRfd2FsbF9zaXplX3kpIC8gKGRlcHRoICogMik7XHJcblxyXG4gICAgICAgIC8vIOW6iuOBruWil+WIhuOCkuaxguOCgeOCi+OAguaxguOCgeaWueOBr+S4iuiomOOBqOWQjOOBmFxyXG4gICAgICAgIGNvbnN0IHNpZGVfd2FsbF9zaXplX0IgPSAgKG1heF95IC0gbWluX3kgLSBmcm9udF93YWxsX3NpemVfeSkgLyAoZGVwdGggKiAyKTtcclxuXHJcbiAgICAgICAgLy8g5Lul5LiK44Gu5YCk44KS55So44GE44Gm5ZCE6Led6ZuiKGRlcHRoKeOBruato+mdouWjgeOBruS9jee9ruaxuuOCgeOCkuOBmeOCi1xyXG4gICAgICAgIC8vIHdhbGzjga7nrKzkuIDlvJXmlbDjga/ot53pm6LjgIHnrKzkuozlvJXmlbDjga/lt6blj7Pjga7kvY3nva7vvIjkuIDnlarlt6bjgYww44CB5LiA55Wq5Y+z44GMZGVwdGgtMSlcclxuICAgICAgICBjb25zdCB3YWxsOiBUX1dhbGxbXVtdID0gbmV3IEFycmF5KGRlcHRoICsgMSk7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkZXB0aCArIDE7IGorKykge1xyXG4gICAgICAgICAgICB3YWxsW2pdID0gbmV3IEFycmF5KGRlcHRoICsgMSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZGVwdGggKyAxOyBrKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdrX3ggPSBjZW50ZXJfeCAtIGZyb250X3dhbGxfSF9zaXplX3hbal0gKiAoZGVwdGggLSAyICogayk7XHJcbiAgICAgICAgICAgICAgICB3YWxsW2pdW2tdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbl94OiBfcm91bmQod2tfeCwgMCksXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4X3g6IF9yb3VuZCh3a194ICArIGZyb250X3dhbGxfSF9zaXplX3hbal0gKiAyLCAwKSxcclxuICAgICAgICAgICAgICAgICAgICBtaW5feTogX3JvdW5kKG1pbl95ICsgc2lkZV93YWxsX3NpemVfVCAqIGosIDApLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heF95OiBfcm91bmQobWF4X3kgLSBzaWRlX3dhbGxfc2l6ZV9CICogaiwgMCksXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5kID0gZGVwdGg7XHJcbiAgICAgICAgdGhpcy53ID0gd2FsbDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfZGVwdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldChkZXB0aDogbnVtYmVyLCBvZmZzZXQ6IG51bWJlcik6IFRfV2FsbCB7XHJcbiAgICAgICAgY29uc3QgSF9kZXB0ID0gKHRoaXMuZCAtIDEpIC8gMjtcclxuICAgICAgICByZXR1cm4gdGhpcy53W2RlcHRoXVtIX2RlcHQgKyBvZmZzZXRdO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7VF9NYWtlRW51bVR5cGV9IGZyb20gXCIuLi9kX3V0bC9UX01ha2VFbnVtVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRfRGlyZWN0aW9uID0ge1xyXG4gICAgTjogICAwLFxyXG4gICAgRTogICAxLFxyXG4gICAgUzogICAyLFxyXG4gICAgVzogICAzLFxyXG4gICAgWDogIDk5LFxyXG4gICAgTUFYOiAzXHJcbn0gYXMgY29uc3Q7XHJcbmV4cG9ydCB0eXBlIFRfRGlyZWN0aW9uID0gVF9NYWtlRW51bVR5cGU8dHlwZW9mIFRfRGlyZWN0aW9uPjtcclxuXHJcbmV4cG9ydCB2YXIgJERpcmVjdGlvbk5hbWUgPSB7XHJcbiAgICAwOiAgJ+WMlycsXHJcbiAgICAxOiAgJ+adsScsXHJcbiAgICAyOiAgJ+WNlycsXHJcbiAgICAzOiAgJ+ilvycsXHJcbiAgICA5OTogJ+isjidcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAvLyDkuIDoiKzjgavkvb/jgYjjgovjg6bjg7zjg4bjgqPjg6rjg4bjgqPjgarlkarmlodcclxuICAgIC8vIOOCquODluOCuOOCp+OCr+ODiOOCkuWIl+aMmeWei+OBqOOBl+OBpuWei+WMluOBmeOCi+OBruOBq+WIqeeUqFxyXG4gICAgaW1wb3J0IHtUX01ha2VFbnVtVHlwZX0gZnJvbSBcIi4uL2RfdXRsL1RfTWFrZUVudW1UeXBlXCI7XHJcblxyXG4gICAgLy8g44OA44Oz44K444On44Oz44Oe44OD44OX44Gu44K744Or44Gu56iu6aGe44KS6KGo44GZ5YiX5oyZ5Z6LXHJcbiAgICAvLyBOb0RlZjog5pyq5a6a576p44O75LiN5piOXHJcbiAgICAvLyBGbG9vcjog5bqKXHJcbiAgICAvLyBVbmV4cDog5pyq6LiP5ZywXHJcbiAgICAvLyBTdG9uZTog55+z5aOBXHJcbiAgICAvLyBTdHJVcDog5LiK44KK6ZqO5q61XHJcbiAgICAvLyBTdHJEbjog5LiL44KK6ZqO5q61XHJcbiAgICAvLyBFbXB0eTog5Yid5pyf54q25oWL44O75L2V44KC44Gq44GXXHJcbiAgICAvLyBcclxuICAgIC8vIGZ1bmN0aW9uIHRvX2ludChNektpbmQpOiAgICAgIGludCAgICAgICAg5YiX5oyZ5Z6L44Gr5a++5b+c44GZ44KL5YCkKOaVtOaVsOWApCnjgpLov5TjgZlcclxuICAgIC8vIGZ1bmN0aW9uIGZyb21faW50KGludCk6ICAgICAgIFRfTXpLaW5kICAgICDmlbTmlbDlgKTjgavlr77lv5zjgZnjgovliJfmjJnlnovjgpLov5TjgZko44Kv44Op44K544Oh44K944OD44OJKVxyXG4gICAgLy8gZnVuY3Rpb24gdG9fbGV0dGVyKE16S2luZCk6ICAgc3RyaW5nICAgICDliJfmjJnlnovjgavlr77lv5zjgZnjgovmloflrZfjgpLov5TjgZko44OA44Oz44K444On44Oz44GuMkTooajnpLrnlKgpXHJcbiAgICAvLyBmdW5jdGlvbiBmcm9tX2xldHRlcihzdHJpbmcpOiBUX016S2luZCAgICAg5paH5a2X44Gr5a++5b+c44GZ44KL5YiX5oyZ5Z6L44KS6L+U44GZKOOCr+ODqeOCueODoeOCveODg+ODiSlcclxuXHJcbiAgICBleHBvcnQgY29uc3QgVF9NektpbmQ6e1trZXk6IHN0cmluZ106IG51bWJlcn0gID0ge1xyXG4gICAgICAgIE5vRGVmOiAgIDAsXHJcbiAgICAgICAgRmxvb3I6ICAgMSxcclxuICAgICAgICBVbmV4cDogICAyLFxyXG4gICAgICAgIFN0b25lOiAgIDMsXHJcbiAgICAgICAgVW5rd246ICAgNCxcclxuICAgICAgICBTdHJVcDogICA1LFxyXG4gICAgICAgIFN0ckRuOiAgIDYsXHJcbiAgICAgICAgU3RyVUQ6ICAgNyxcclxuICAgICAgICBFbXB0eTogMjU1LFxyXG4gICAgfSBhcyBjb25zdDtcclxuICAgIGV4cG9ydCB0eXBlIFRfTXpLaW5kICAgPSBUX01ha2VFbnVtVHlwZTx0eXBlb2YgVF9NektpbmQ+O1xyXG5cclxuICAgIGV4cG9ydCBjb25zdCBUX1J2TXpLaW5kOntba2V5OiBudW1iZXJdOiBUX016S2luZH0gID0ge1xyXG4gICAgICAgIDA6ICAgVF9NektpbmQuTm9EZWYsXHJcbiAgICAgICAgMTogICBUX016S2luZC5GbG9vcixcclxuICAgICAgICAyOiAgIFRfTXpLaW5kLlVuZXhwLFxyXG4gICAgICAgIDM6ICAgVF9NektpbmQuU3RvbmUsXHJcbiAgICAgICAgNDogICBUX016S2luZC5Vbmt3bixcclxuICAgICAgICA1OiAgIFRfTXpLaW5kLlN0clVwLFxyXG4gICAgICAgIDY6ICAgVF9NektpbmQuU3RyRG4sXHJcbiAgICAgICAgNzogICBUX016S2luZC5TdHJVRCxcclxuICAgICAgICAyNTU6IFRfTXpLaW5kLkVtcHR5LFxyXG4gICAgfSBhcyBjb25zdDtcclxuICAgIGV4cG9ydCB0eXBlIFRfUnZNektpbmQgPSBUX01ha2VFbnVtVHlwZTx0eXBlb2YgVF9Sdk16S2luZD47XHJcblxyXG4iLCJpbnRlcmZhY2UgSlNPTkFibGUge1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55XHJcbn1cclxuZXhwb3J0IHR5cGUgVF9BdHRyID0ge1trZXk6IHN0cmluZ106IHN0cmluZ3xudW1iZXJ8b2JqZWN0fTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDX1VybE9wdCB7XHJcbiAgICBwcm90ZWN0ZWQgdjogVF9BdHRyO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHM/OiBzdHJpbmcpO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHQ/OiBUX0F0dHIpO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGE/OiBhbnkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGEgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgdGhpcy52ID0ge30gYXMgVF9BdHRyO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNldF9mcm9tX3N0cmluZyhhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudiA9IGEgYXMgVF9BdHRyO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudiA9IHt9IGFzIFRfQXR0cjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X2tleXMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGNvbnN0IGtleV9saXN0OiBzdHJpbmdbXSA9IG5ldyBBcnJheSBhcyBzdHJpbmdbXTtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy52KSB7XHJcbiAgICAgICAgICAgIGtleV9saXN0LnB1c2goa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGtleV9saXN0O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCAoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChrZXkgaW4gdGhpcy52KSB7XHJcbiAgICAgICAgICAgIGlmICAodHlwZW9mIHRoaXMudltrZXldID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52W2tleV0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAgKHR5cGVvZiB0aGlzLnZba2V5XSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMudltrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52W2tleV0gYXMgc3RyaW5nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQoc3RyOiBzdHJpbmcpOiAgdm9pZDtcclxuICAgIHB1YmxpYyBzZXQoYXRyOiBUX0F0dHIpOiAgdm9pZDtcclxuICAgIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbD86IHN0cmluZyk6IHZvaWQ7XHJcbiAgICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCB2YWw/OiBudW1iZXIpOiB2b2lkO1xyXG4gICAgcHVibGljIHNldChrZXk6IHN0cmluZywgdmFsPzogb2JqZWN0KTogdm9pZDtcclxuICAgIHB1YmxpYyBzZXQodWtuOiBhbnksICAgIHZhbD86IHN0cmluZ3xudW1iZXJ8b2JqZWN0KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1a24gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkX2Zyb21fc3RyaW5nKHVrbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52W3Vrbl0gPSB2YWw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIiApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy52W3Vrbl0gPSB2YWw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIiApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy52W3Vrbl0gPSB2YWw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZbdWtuXSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1a24gPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHI6IFRfQXR0ciA9IHVrbiBhcyBUX0F0dHI7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBpbiBhdHRyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZbaXRlbV0gPSBhdHRyW2l0ZW1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGlzc2V0KGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChrZXkgaW4gdGhpcy52KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZW1vdmUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoa2V5IGluIHRoaXMudikge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy52W2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudiA9IHt9IGFzIFRfQXR0cjtcclxuICAgIH1cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGxlbjogbnVtYmVyID0gIE9iamVjdC5rZXlzKHRoaXMudikubGVuZ3RoO1xyXG4gICAgICAgIGlmIChsZW4gPCAxKSAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgICAgIHZhciBzdHJfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy52KSB7XHJcbiAgICAgICAgICAgIHN0cl9hcnJheS5wdXNoKGtleSArIFwiPVwiICsgdGhpcy52W2tleV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0cl9hcnJheS5qb2luKFwiJlwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB0b0pTT04oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy52KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB0b0Zvcm1EYXRhKCk6IEZvcm1EYXRhfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgY29uc3QgbGVuOiBudW1iZXIgPSAgT2JqZWN0LmtleXModGhpcy52KS5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGxlbiA8IDEpICByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICB2YXIgZm9ybV9kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy52KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlOiBzdHJpbmd8bnVtYmVyfG9iamVjdCA9IHRoaXMudltrZXldO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgZm9ybV9kYXRhLmFwcGVuZChrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIilcclxuICAgICAgICAgICAgICAgIGZvcm1fZGF0YS5hcHBlbmQoa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBmb3JtX2RhdGEuYXBwZW5kKGtleSwgdmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZm9ybV9kYXRhO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHNldF9mcm9tX3N0cmluZyhzOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5hZGRfZnJvbV9zdHJpbmcocyk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgYWRkX2Zyb21fc3RyaW5nKHM6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IHMucmVwbGFjZSgvXihcXD8/KSguKikkLywgJyQyJyk7XHJcbiAgICAgICAgY29uc3Qgc3RyX2FycmF5OiBzdHJpbmdbXSA9IHN0ci5zcGxpdChcIiZcIik7XHJcbiAgICAgICAgc3RyX2FycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgY29uc3Qga2V5X3ZhbHVlID0gaXRlbS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgICAgIGlmIChrZXlfdmFsdWUubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52W2tleV92YWx1ZVswXV0gPSAnJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudltrZXlfdmFsdWVbMF1dID0ga2V5X3ZhbHVlWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8g5pWw5YCk44OB44Kn44OD44KvXHJcbmV4cG9ydCBmdW5jdGlvbiBfaXNOdW0obnVtVmFsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIC8vIOODgeOCp+ODg+OCr+adoeS7tuODkeOCv+ODvOODs1xyXG4gICAgY29uc3QgcGF0dGVybiA9IC9eWy0rXT8oWzEtOV1cXGQqfDApKFxcLlxcZCspPyQvO1xyXG4gICAgLy8g5pWw5YCk44OB44Kn44OD44KvXHJcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KG51bVZhbCk7XHJcbn1cclxuXHJcbi8vIOaVsOWApOWPluOCiuWHuuOBl1xyXG5leHBvcnQgZnVuY3Rpb24gX2dldE51bShudW1WYWw6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAvLyDjg4Hjgqfjg4Pjgq/mnaHku7bjg5Hjgr/jg7zjg7NcclxuLy8gICAgY29uc3QgcGF0dGVybiA9IC9bLV0/KFsxLTldXFxkKnwwKShcXC5cXGQrKT8vO1xyXG4gICAgY29uc3QgcGF0dGVybiA9IC8oW14wLTldKS9nO1xyXG4gICAgY29uc3QgdmFsc3RyICA9IG51bVZhbC5yZXBsYWNlKHBhdHRlcm4sJycpO1xyXG4gICAgLy8g5pWw5YCk44OB44Kn44OD44KvXHJcbiAgICByZXR1cm4gTnVtYmVyKHZhbHN0cik7XHJcbn1cclxuXHJcbi8vIOWbm+aNqOS6lOWFpVxyXG5leHBvcnQgZnVuY3Rpb24gX3JvdW5kKG51bTogbnVtYmVyLCBkaWdpdDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IG11bHRpcGxpZXIgPSBNYXRoLnBvdygxMCwgZGlnaXQpO1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogbXVsdGlwbGllcikgLyBtdWx0aXBsaWVyO1xyXG59XHJcblxyXG4vLyDliIfjgorkuIrjgZJcclxuZXhwb3J0IGZ1bmN0aW9uIF9jZWlsKG51bTogbnVtYmVyLCBkaWdpdDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IG11bHRpcGxpZXIgPSBNYXRoLnBvdygxMCwgZGlnaXQpO1xyXG4gICAgcmV0dXJuIE1hdGguY2VpbChudW0gKiBtdWx0aXBsaWVyKSAvIG11bHRpcGxpZXI7XHJcbn1cclxuXHJcblxyXG4vLyDliIfjgorkuIvjgZJcclxuZXhwb3J0IGZ1bmN0aW9uIF9mbG9vcihudW06IG51bWJlciwgZGlnaXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBtdWx0aXBsaWVyID0gTWF0aC5wb3coMTAsIGRpZ2l0KTtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKG51bSAqIG11bHRpcGxpZXIpIC8gbXVsdGlwbGllcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfbWluKGE6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBhLnJlZHVjZSgobjE6IG51bWJlciwgbjI6IG51bWJlcikgPT4gTWF0aC5taW4objEsIG4yKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfbWF4KGE6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBhLnJlZHVjZSgobjE6IG51bWJlciwgbjI6IG51bWJlcikgPT4gTWF0aC5tYXgobjEsIG4yKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX21heCwgX21pbiwgX3JvdW5kIH0gZnJvbSBcIi4vRl9NYXRoXCI7XHJcblxyXG4vLyDkubHmlbDplqLmlbDlkbzjgbPlh7rjgZfnlKjjga7lnovlrqPoqIBcclxudHlwZSBUX2ZyYW5kID0gKCk9Pm51bWJlclxyXG5jb25zdCBmcmFuZDogVF9mcmFuZCA9ICAoKT0+e3JldHVybiBNYXRoLnJhbmRvbSgpfVxyXG5cclxuLy8g5LiA5qeY5Lmx5pWwKOaVtOaVsClcclxuZXhwb3J0IGZ1bmN0aW9uIF9pcmFuZChtaW46IG51bWJlciA9IDAsIG1heDogbnVtYmVyID0gMSwgcmFuZDogVF9mcmFuZCA9IGZyYW5kKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGZfcmFuZCA9IE1hdGguZmxvb3IocmFuZCgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICAgIHJldHVybiBfcm91bmQoZl9yYW5kLCAwKTtcclxufVxyXG5cclxuLy8g5q2j6KaP5YiG5biD44KC44Gp44GN5Lmx5pWwKOaVtOaVsClcclxuZXhwb3J0IGZ1bmN0aW9uIF9pZ3JhbmQobWluOiBudW1iZXIgPSAwLCBtYXg6IG51bWJlciA9IDEsIHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gX2lyYW5kKG1pbiwgbWF4LCAoKT0+e3JldHVybiBfZ3JhbmQoMCwgMSwgcmFuZCl9KVxyXG59XHJcblxyXG4vLyDmraPopo/liIbluIPjgoLjganjgY3kubHmlbAo5a6f5pWwKVxyXG5leHBvcnQgZnVuY3Rpb24gX2dyYW5kKG1pbjogbnVtYmVyID0gMCwgbWF4OiBudW1iZXIgPSAxLCByYW5kOiBUX2ZyYW5kID0gZnJhbmQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoX19fZ2F1c3NpYW5SYW5kKHJhbmQpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxufVxyXG5mdW5jdGlvbiBfX19nYXVzc2lhblJhbmQocmFuZDogVF9mcmFuZCA9IGZyYW5kKSB7XHJcbiAgICBsZXQgc3VtID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSArPSAxKSB7XHJcbiAgICAgICAgc3VtICs9IHJhbmQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdW0gLyA2O1xyXG59XHJcblxyXG4vLyDlsJHjgZfnnJ/pnaLnm67jgarmraPopo/liIbluIPkubHmlbAo5pW05pWwKVxyXG5leHBvcnQgZnVuY3Rpb24gX2lucmFuZChtaW46IG51bWJlciA9IDAsIG1heDogbnVtYmVyID0gMSwgZGQ6IG51bWJlciA9IDMuMCwgcmFuZDogVF9mcmFuZCA9IGZyYW5kKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKF9ucmFuZChtaW4sIG1heCwgZGQsIHJhbmQpKTtcclxufVxyXG5cclxuLy8g5bCR44GX55yf6Z2i55uu44Gq5q2j6KaP5YiG5biD5Lmx5pWwKOWun+aVsClcclxuLy8g5LiA5qeY56K6546H5aSJ5pWwYSxi44KS5aSJ5pWw6Zai5pWw44KS55So44GE44GmIHg9ZihhLGIpLCB5PWcoYSxiKeOBqOOBl+OBpjLjgaTjga7mraPopo/liIbluIPkubHmlbB4LHnjgpLlvpfjgotcclxuLy8geCA9IGYoYSxiKSA9IHNxcnQoLTIqbG9nKGEpKSAqIHNpbigyKs+AKmIpIFxyXG4vLyB5ID0gZyhhLGIpID0gc3FydCgtMipsb2coYSkpICogY29zKDIqz4AqYikgXHJcbmV4cG9ydCBmdW5jdGlvbiBfbnJhbmQobWluOiBudW1iZXIgPSAwLjAsIG1heDogbnVtYmVyID0gMS4wLCBkZDogbnVtYmVyID0gMy4wLCByYW5kOiBUX2ZyYW5kID0gZnJhbmQpOiBudW1iZXIge1xyXG4gICAgY29uc3QgYXZlID0gMC41O1xyXG4gICAgY29uc3QgYSA9IHJhbmQoKTtcclxuICAgIGNvbnN0IGIgPSByYW5kKCk7XHJcbiAgICBsZXQgeCA9IGF2ZSArIF9mYWIoYSwgYikgLyAoMi4wICogZGQpOyAvLyDjgZPjgZPjgb7jgafjgIFOKDAsMSnjga7mraPopo/liIbluIPkubHmlbDjga7kvZzmiJBcclxuXHJcbiAgICB4ID0gbWluICsgeCAqIChtYXggLSBtaW4pO1xyXG4gICAgeCA9IF9tYXgoW21pbiwgeF0pO1xyXG4gICAgeCA9IF9taW4oW21heCwgeF0pO1xyXG4gICAgcmV0dXJuIHg7XHJcbn1cclxuZnVuY3Rpb24gX2ZhYihhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KC0yLjAgKiBNYXRoLmxvZyhhKSkgKiBNYXRoLnNpbigyLjAgKiBNYXRoLlBJICogYik7XHJcbn1cclxuZnVuY3Rpb24gX2dhYihhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KC0yLjAgKiBNYXRoLmxvZyhhKSkgKiBNYXRoLmNvcygyLjAgKiBNYXRoLlBJICogYik7XHJcbn1cclxuXHJcblxyXG4vLyDjgrfjg7zjg4nlgKTjgpLnlKjjgYTjgZ/kubHmlbBcclxuZXhwb3J0IGNsYXNzIENfU2VlZGVkUmFuZCB7XHJcbiAgICBwcm90ZWN0ZWQgc2VlZDogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIGZpcnN0X3NlZWQ6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc2VlZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZWVkID0gc2VlZDtcclxuICAgICAgICB0aGlzLmZpcnN0X3NlZWQgPSBzZWVkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuc2VlZCA9IHRoaXMuZmlyc3Rfc2VlZDtcclxuICAgIH1cclxuICAgIC8vIOS5seaVsOeUn+aIkOODoeOCveODg+ODiVxyXG4gICAgcHVibGljIHJhbmRvbSgpOiBudW1iZXIge1xyXG4gICAgICAgIHRoaXMuc2VlZCA9ICh0aGlzLnNlZWQgKiA5MzAxICsgNDkyOTcpICUgMjMzMjgwO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlZWQgLyAyMzMyODAuMDtcclxuICAgIH1cclxufVxyXG5cclxuLy/jg6bjg4vjg7zjgq9JRCh1dWlkKeOBrueUn+aIkFxyXG5leHBvcnQgZnVuY3Rpb24gX2dldF91dWlkKGxlbjogbnVtYmVyID0gMjAsIHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBsZnQgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpLnRvU3RyaW5nKDE2KTsgLy8g44Gf44G244KTMTPmoYFcclxuICAgIGNvbnN0IHJndF9sZW4gPSBfbWF4KFtsZW4gLSBsZnQubGVuZ3RoLCAxXSk7XHJcblxyXG4gICAgY29uc3Qgcmd0ID0gTWF0aC5mbG9vcihNYXRoLnBvdygxMCwgcmd0X2xlbikgKiByYW5kKCkpLnRvU3RyaW5nKDE2KTtcclxuICAgIHJldHVybiBsZnQgKyByZ3Q7XHJcbn1cclxuXHJcbi8vIOeiuueOh+OBq+WfuuOBpeOBj+imgee0oOmBuOaKnlxyXG5leHBvcnQgdHlwZSBUX1NlbGVjdEl0ZW0gPSB7XHJcbiAgICByYXRpbzogbnVtYmVyLFxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBfc2VsZWN0SXRlbShpdGVtczogVF9TZWxlY3RJdGVtW10sIHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCk6IFRfU2VsZWN0SXRlbSB8IHVuZGVmaW5lZCB7XHJcbiAgICB2YXIgdHRsOm51bWJlciA9IDA7XHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zKSB0dGwgKz0gaXRlbS5yYXRpbztcclxuXHJcbiAgICBjb25zdCB0YXJnZXQgPSBfaXJhbmQoMCwgdHRsLCByYW5kKTtcclxuICAgIHZhciBzdW0gPSAwO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgICAgc3VtICs9IGl0ZW0ucmF0aW87XHJcbiAgICAgICAgaWYgKHRhcmdldCA8IHN1bSkge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8vIOmFjeWIl+OBruOCt+ODo+ODg+ODleODq1xyXG5leHBvcnQgZnVuY3Rpb24gX3NodWZmbGVBcnJheTxUPihhcnJheTogVFtdLCByYW5kOiBUX2ZyYW5kID0gZnJhbmQpOiBUW10ge1xyXG4gICAgbGV0IHNodWZmbGVkQXJyYXkgPSBbLi4uYXJyYXldOyAvLyDlhYPjga7phY3liJfjgpLlpInmm7TjgZfjgarjgYTjgojjgYbjgavjgrPjg5Tjg7zjgZnjgotcclxuICAgIGZvciAobGV0IGkgPSBzaHVmZmxlZEFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICAvLyDjg6njg7Pjg4Djg6DjgarkvY3nva7jgpLmsbrlrppcclxuICAgICAgICBjb25zdCBqID0gX2lyYW5kKDAsIGksIHJhbmQpO1xyXG4gICAgICAgIC8vIOimgee0oOOBruWFpeOCjOabv+OBiFxyXG4gICAgICAgIFtzaHVmZmxlZEFycmF5W2ldLCBzaHVmZmxlZEFycmF5W2pdXSA9IFtzaHVmZmxlZEFycmF5W2pdLCBzaHVmZmxlZEFycmF5W2ldXTtcclxuICAgIH1cclxuICAgIHJldHVybiBzaHVmZmxlZEFycmF5OyAvLyDjgrfjg6Pjg4Pjg5Xjg6vjgZXjgozjgZ/phY3liJfjgpLov5TjgZlcclxufVxyXG5cclxuLy8g5Lmx5pWw44Gr44KI44KL5paH5a2X5YiX55Sf5oiQXHJcbmV4cG9ydCBmdW5jdGlvbiBfcmFuZG9tX3N0cihsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZXQgc3RyID0gJyc7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBsZW5ndGg7IGkrKykgc3RyICs9IF9yYW5kb21fQ2hhcigpO1xyXG4gICAgcmV0dXJuIHN0cjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gX3JhbmRvbV9VcHBlclN0cihsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZXQgc3RyID0gJyc7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBsZW5ndGg7IGkrKykgc3RyICs9IF9yYW5kb21fVXBwZXJDaGFyKCk7XHJcbiAgICByZXR1cm4gc3RyO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBfcmFuZG9tX0xvd2VyU3RyKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGxldCBzdHIgPSAnJztcclxuICAgIGZvciAobGV0IGk9MDsgaSA8IGxlbmd0aDsgaSsrKSBzdHIgKz0gX3JhbmRvbV9Mb3dlckNoYXIoKTtcclxuICAgIHJldHVybiBzdHI7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fVXBwZXJDaGFyKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB2YWwgPSBfaXJhbmQoMCwyNilcclxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1K3ZhbCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fTG93ZXJDaGFyKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB2YWwgPSBfaXJhbmQoMCwyNilcclxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDk1K3ZhbCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fTnVtQ2hhcigpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdmFsID0gX2lyYW5kKDAsOSlcclxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDQ4K3ZhbCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fQ2hhcigpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdmFsID0gX2lyYW5kKDAsNjEpXHJcbiAgICBpZiAodmFsIDwgMjYpIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1K3ZhbCk7XHJcbiAgICBpZiAodmFsIDwgNTIpIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDk3K3ZhbC0yNik7XHJcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg0OCt2YWwtNTIpO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBDX0Rpc3BsYXlNZXNzYWdlIHtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgIG1lOiBDX0Rpc3BsYXlNZXNzYWdlO1xyXG4gICAgcHJvdGVjdGVkIGlkOiAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIGRpdjogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGNvbjogSFRNTEVsZW1lbnQsIGlkOiBzdHJpbmcgPSAnY2xpZW50X21lc3NhZ2UnKSB7XHJcbiAgICAgICAgQ19EaXNwbGF5TWVzc2FnZS5tZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuaWQgICA9IGlkO1xyXG4gICAgICAgIHRoaXMuZGl2ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIGlmICh0aGlzLmRpdiA9PT0gbnVsbCkgYWxlcnQoJ0NhbiBub3QgZm91bm5kIERpdiNjbGllbnRfbWVzc2FnZSEnKTtcclxuICAgICAgICB0aGlzLmRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5pZCk7XHJcblxyXG4gICAgICAgIGNvbi5pbnNlcnRCZWZvcmUodGhpcy5kaXYsIGNvbi5maXJzdENoaWxkKTtcclxuICAgICAgICBDX0Rpc3BsYXlNZXNzYWdlLm1lLmNsZWFyX21lc3NhZ2UoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0T2JqKGNvbjogSFRNTEVsZW1lbnR8bnVsbCA9IG51bGwsIGlkOiBzdHJpbmcgPSAnY2xpZW50X21lc3NhZ2UnKVxyXG4gICAgICAgICAgICAgICAgOiBDX0Rpc3BsYXlNZXNzYWdlICB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm1lICE9PSBcIm9iamVjdFwiIHx8ICEodGhpcy5tZSBpbnN0YW5jZW9mIENfRGlzcGxheU1lc3NhZ2UpKSB7IFxyXG4gICAgICAgICAgICBpZiAoY29uID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1lID0gbmV3IENfRGlzcGxheU1lc3NhZ2UoY29uLCBpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLm1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRpc3BsYXlfbWVzc2FnZShtZXM6IHN0cmluZywgZnJfY29sb3IgPSAnaW5oZXJpdCcsIGJnX2NvbG9yOiBzdHJpbmcgPSAnaW5oZXJpdCcpIHtcclxuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgICAgIHAuc3R5bGUuc2V0UHJvcGVydHkoJ2NvbG9yJywgICAgICAgICAgICBmcl9jb2xvcik7XHJcbiAgICAgICAgcC5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsIGJnX2NvbG9yKTtcclxuICAgICAgICBwLmlubmVySFRNTCA9IG1lcztcclxuICAgICAgICAvLyDoqJjpjLLlnovjg6Hjg4Pjgrvjg7zjgrjjgarjga7jgaflhYjpoK3jgavov73liqDjgZfjgabjgYTjgY9cclxuICAgICAgICB0aGlzLmRpdi5pbnNlcnRCZWZvcmUocCwgdGhpcy5kaXYuZmlyc3RDaGlsZCk7IFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcl9tZXNzYWdlKCkge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmRpdi5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGl2LnJlbW92ZUNoaWxkKHRoaXMuZGl2LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbm9ybWFsX21lc3NhZ2UobWVzOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmRpc3BsYXlfbWVzc2FnZShtZXMpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG5vdGljZV9tZXNzYWdlKG1lczogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5X21lc3NhZ2UobWVzLCAnIzAwNjYwMCcsICcjY2NmZmNjJyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgd2FybmluZ19tZXNzYWdlKG1lczogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5X21lc3NhZ2UobWVzLCAnI2ZmZmZmZicsICcjZmYwMDAwJyk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIENfT25lTGluZVZpZXdNZXNzYWdlIHtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgIG1lIDoge1tpZDogc3RyaW5nXTogQ19PbmVMaW5lVmlld01lc3NhZ2V9O1xyXG4gICAgcHJvdGVjdGVkIHAgIDogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIHBhcmVudD86IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgQ19PbmVMaW5lVmlld01lc3NhZ2UubWUgPz89IHt9XHJcbiAgICAgICAgQ19PbmVMaW5lVmlld01lc3NhZ2UubWVbaWRdID0gdGhpcztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLnAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgdGhpcy5wLmlkID0gaWQ7XHJcblxyXG4gICAgICAgICAgICBwYXJlbnQgPz89IGRvY3VtZW50LmJvZHk7XHJcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLnApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBDX09uZUxpbmVWaWV3TWVzc2FnZS5tZVtpZF0uY2xlYXJfbWVzc2FnZSgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRPYmooaWQ6IHN0cmluZywgcGFyZW50PzogSFRNTEVsZW1lbnQpOiBDX09uZUxpbmVWaWV3TWVzc2FnZSAge1xyXG4gICAgICAgIENfT25lTGluZVZpZXdNZXNzYWdlLm1lID8/PSB7fVxyXG4gICAgICAgIHRoaXMubWVbaWRdID8/PSBuZXcgQ19PbmVMaW5lVmlld01lc3NhZ2UoaWQsIHBhcmVudCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVbaWRdO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRpc3BsYXlfbWVzc2FnZShtZXM6IHN0cmluZywgZnJfY29sb3IgPSAnaW5oZXJpdCcsIGJnX2NvbG9yOiBzdHJpbmcgPSAnaW5oZXJpdCcpIHtcclxuICAgICAgICB0aGlzLnAuc3R5bGUuc2V0UHJvcGVydHkoJ2NvbG9yJywgICAgICAgICAgICBmcl9jb2xvcik7XHJcbiAgICAgICAgdGhpcy5wLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgYmdfY29sb3IpO1xyXG4gICAgICAgIHRoaXMucC5pbm5lckhUTUwgPSBtZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyX21lc3NhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5X21lc3NhZ2UoJ+OAgCcpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG5vcm1hbF9tZXNzYWdlKG1lczogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5X21lc3NhZ2UobWVzKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBub3RpY2VfbWVzc2FnZShtZXM6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZGlzcGxheV9tZXNzYWdlKG1lcywgJyMwMDY2MDAnLCAnI2NjZmZjYycpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHdhcm5pbmdfbWVzc2FnZShtZXM6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZGlzcGxheV9tZXNzYWdlKG1lcywgJyNmZmZmZmYnLCAnI2ZmMDAwMCcpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdfZGVidWcgfSAgICAgICAgZnJvbSBcIi4uL2RfY21uL2dsb2JhbFwiO1xyXG5pbXBvcnQgeyBnX21hemUsIGdfdGVhbSB9IGZyb20gXCIuL2dsb2JhbF9mb3JfbWF6ZVwiO1xyXG5pbXBvcnQgeyBcclxuICAgIGRvX2luc3RhbnRfbG9hZCwgXHJcbiAgICBkb19pbnN0YW50X3NhdmUsIFxyXG4gICAgZG9fbW92ZV9ib3R0b21faGFsZiBcclxufSAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9GX3NldF9tb3ZlX21vZGVcIjtcclxuXHJcblxyXG5leHBvcnQgdHlwZSBUX0N0bHM9IHtcclxuICAgIG5hbWU6ICBzdHJpbmcsXHJcbiAgICBkb19VPzogVF9tYXJnLCBcclxuICAgIGRvX0Q/OiBUX21hcmcsIFxyXG4gICAgZG9fTD86IFRfbWFyZywgXHJcbiAgICBkb19SPzogVF9tYXJnLCBcclxuICAgIGlzT0s/OiBUX21hcmcsIFxyXG4gICAgaXNORz86IFRfbWFyZywgXHJcbiAgICBpc1NMPzogVF9tYXJnLCBcclxuICAgIGlzUlQ/OiBUX21hcmcsIFxyXG4gICAgbWVudT86IFRfbWFyZywgXHJcbiAgICBjcE9LPzogVF9tYXJnLCBcclxuICAgIGNwTkc/OiBUX21hcmcsIFxyXG4gICAgY3BTTD86IFRfbWFyZywgXHJcbiAgICBjcFJUPzogVF9tYXJnLCBcclxuICAgIGtleUV2ZW50PzogVF9rYXJnLFxyXG59XHJcbnR5cGUgVF9tZm5jID0gKGU/OiBNb3VzZUV2ZW50KT0+KHZvaWR8Ym9vbGVhbik7XHJcbnR5cGUgVF9tYXJnID0gVF9tZm5jIHwgdW5kZWZpbmVkO1xyXG4gXHJcbnR5cGUgVF9rZm5jID0gKGU6IEtleWJvYXJkRXZlbnQpPT4odm9pZHxib29sZWFuKTtcclxudHlwZSBUX2thcmcgPSBUX2tmbmMgfCB1bmRlZmluZWQ7XHJcblxyXG5leHBvcnQgY2xhc3MgQ19EZWZhdWx0Q3RscyB7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIG1lOiBDX0RlZmF1bHRDdGxzO1xyXG4gICAgcHJvdGVjdGVkIGN0bHM6IHtbbmFtZTogc3RyaW5nXTogVF9DdGxzfTtcclxuICAgIHByb3RlY3RlZCBmbGdzOiB7W25hbWU6IHN0cmluZ106IGJvb2xlYW59O1xyXG5cclxuICAgIHByb3RlY3RlZCB1X2FycjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBwcm90ZWN0ZWQgZF9hcnI6IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgcHJvdGVjdGVkIGxfYXJyOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIHByb3RlY3RlZCByX2FycjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBwcm90ZWN0ZWQgeV9idG46IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgcHJvdGVjdGVkIG5fYnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIHByb3RlY3RlZCBzX2J0bjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBwcm90ZWN0ZWQgcl9idG46IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgcHJvdGVjdGVkIG1fYnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIHByb3RlY3RlZCB5X2NwMTogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBwcm90ZWN0ZWQgbl9jcDE6IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgcHJvdGVjdGVkIHNfY3AxOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIHByb3RlY3RlZCByX2NwMTogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY3RscyA9IHt9O1xyXG4gICAgICAgIHRoaXMuZmxncyA9IHt9O1xyXG5cclxuICAgICAgICB0aGlzLnVfYXJyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VfYXJyJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5kX2FyciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkX2FycicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgIHRoaXMubF9hcnIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbF9hcnInKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICB0aGlzLnJfYXJyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JfYXJyJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy55X2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5X2J0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgIHRoaXMubl9idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbl9idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICB0aGlzLnNfYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NfYnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5yX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyX2J0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgIHRoaXMubV9idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbV9idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICB0aGlzLnlfY3AxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3lfY3AxJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5uX2NwMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduX2NwMScpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc19jcDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc19jcDEnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICB0aGlzLnJfY3AxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JfY3AxJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gICAgICAgIHRoaXMudV9hcnIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzLmRfYXJyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5sX2Fyci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMucl9hcnIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzLnlfYnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5uX2J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMuc19idG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzLnJfYnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5tX2J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMueV9jcDEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzLm5fY3AxLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5zX2NwMS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMucl9jcDEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0T2JqKCk6IENfRGVmYXVsdEN0bHMge1xyXG4gICAgICAgIHRoaXMubWUgPz89ICBuZXcgQ19EZWZhdWx0Q3RscygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNscigpOiBib29sZWFuIHtcclxuICAgICAgICB0aGlzLmN0bHMgPSB7fTtcclxuICAgICAgICB0aGlzLmZsZ3MgPSB7fTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQobmFtZTogc3RyaW5nfFRfQ3RscywgY3Rscz86VF9DdGxzKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJyAmJiBjdGxzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3Rsc1tuYW1lXSA9IGN0bHM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZsZ3NbbmFtZV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBuYW1lIGFzIFRfQ3RscztcclxuICAgICAgICAgICAgICAgIHRoaXMuY3Rsc1tjLm5hbWVdID0gYztcclxuICAgICAgICAgICAgICAgIHRoaXMuZmxnc1tjLm5hbWVdID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcm12KGN0bHM6IHN0cmluZ3xUX0N0bHMpOiBib29sZWFuIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdHlwZW9mIGN0bHMgPT09ICdzdHJpbmcnID8gY3RscyA6IGN0bHMubmFtZTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuY3Rsc1tuYW1lXTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZmxnc1tuYW1lXTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWFjdCgpOiBib29sZWFuIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHRoaXMuY3Rscykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdGxzW2lpXS5uYW1lID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3Jtdl9kZWZhdWx0X2N0bHModGhpcy5jdGxzW2lpXS5uYW1lIGFzIHN0cmluZykpIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWN0KGN0bHM6IHN0cmluZ3xUX0N0bHMpOiBib29sZWFuIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5kZWFjdCgpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0eXBlb2YgY3RscyA9PT0gJ3N0cmluZycgPyBjdGxzIDogY3Rscy5uYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWRkX2RlZmF1bHRfY3RscyhuYW1lKTtcclxuICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc19hY3QoY3Rsczogc3RyaW5nfFRfQ3Rscyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0eXBlb2YgY3RscyA9PT0gJ3N0cmluZycgPyBjdGxzIDogY3Rscy5uYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gIHRoaXMuZmxnc1tuYW1lXSA/PyBmYWxzZTtcclxuICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBrZXlzX29mX2FkZCgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgY29uc3Qga2V5X2xpc3QgPSBbXSBhcyBzdHJpbmdbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gdGhpcy5jdGxzKSBrZXlfbGlzdC5wdXNoKG5hbWUpO1xyXG4gICAgICAgIHJldHVybiBrZXlfbGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMga2V5c19vZl9hY3QoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGNvbnN0IGtleV9saXN0ID0gW10gYXMgc3RyaW5nW107XHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIHRoaXMuZmxncykgaWYgKHRoaXMuZmxnc1tuYW1lXSkga2V5X2xpc3QucHVzaChuYW1lKTtcclxuICAgICAgICByZXR1cm4ga2V5X2xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9ybXZfZGVmYXVsdF9jdGxzKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIGZsZ3NbbmFtZV3jgYzlrprnvqnjgZXjgozjgabjgYTjgarjgYRcclxuICAgICAgICAvLyDjgaTjgb7jgopfYWRkX2RlZmF1bHRfY3Rsc+OBjOOBvuOBoOWRvOOBsOOCjOOBpuOBquOBhChjdGxz44GMYWRk44GV44KM44Gm44Gq44GEKeOBi+OAgVxyXG4gICAgICAgIC8vIF9hbGxfY3Rsc19uYW1lW2NhbGwubmFtZV3jgYxmYWxzZSjml6LjgatjdGxsc+OBjHJlbW92ZeOBleOCjOOBpuOBhOOCiynjgarjgonjgIFcclxuICAgICAgICAvLyDkvZXjgoLjgZfjgarjgYTjgIJcclxuICAgICAgICB0aGlzLmZsZ3NbbmFtZV0gPz89IGZhbHNlOyBcclxuICAgIFxyXG4gICAgICAgIGlmICghdGhpcy5mbGdzW25hbWVdKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZsZ3NbbmFtZV0gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgYyA9IHRoaXMuY3Rsc1tuYW1lXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoX2MoYz8uZG9fVSkpIHRoaXMudV9hcnIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGMuZG9fVSBhcyBUX21mbmMsIGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKF9jKGM/LmRvX0QpKSB0aGlzLmRfYXJyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjLmRvX0QgYXMgVF9tZm5jLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChfYyhjPy5kb19MKSkgdGhpcy5sX2Fyci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYy5kb19MIGFzIFRfbWZuYywgZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAoX2MoYz8uZG9fUikpIHRoaXMucl9hcnIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGMuZG9fUiBhcyBUX21mbmMsIGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKF9jKGM/LmlzT0spKSB0aGlzLnlfYnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjLmlzT0sgYXMgVF9tZm5jLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChfYyhjPy5pc05HKSkgdGhpcy5uX2J0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYy5pc05HIGFzIFRfbWZuYywgZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAoX2MoYz8uaXNTTCkpIHRoaXMuc19idG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGMuaXNTTCBhcyBUX21mbmMsIGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKF9jKGM/LmlzUlQpKSB0aGlzLnJfYnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjLmlzUlQgYXMgVF9tZm5jLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChfYyhjPy5tZW51KSkgdGhpcy5tX2J0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYy5tZW51IGFzIFRfbWZuYywgZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAoX2MoYz8uY3BPSykpIHRoaXMueV9jcDEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGMuY3BPSyBhcyBUX21mbmMsIGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKF9jKGM/LmNwTkcpKSB0aGlzLm5fY3AxLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjLmNwTkcgYXMgVF9tZm5jLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChfYyhjPy5jcFNMKSkgdGhpcy5zX2NwMS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYy5jcFNMIGFzIFRfbWZuYywgZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAoX2MoYz8uY3BSVCkpIHRoaXMucl9jcDEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGMuY3BSVCBhcyBUX21mbmMsIGZhbHNlKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGM/LmtleUV2ZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYy5rZXlFdmVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleV9wcmVzc19mdW5jdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy51X2Fyci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB0aGlzLmRfYXJyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHRoaXMubF9hcnIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgdGhpcy5yX2Fyci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB0aGlzLnlfYnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHRoaXMubl9idG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgdGhpcy5zX2J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB0aGlzLnJfYnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHRoaXMubV9idG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgdGhpcy55X2NwMS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB0aGlzLm5fY3AxLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHRoaXMuc19jcDEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgdGhpcy5yX2NwMS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBhbGVydCgnRXJyb3IgT2NjdWVyZCBhdCBSZW1vdmUgRGVmYXVsdCBDdGxzLicpO1xyXG4gICAgICAgICAgICBhbGVydCgnJyArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9hZGRfZGVmYXVsdF9jdGxzKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRoaXMuZmxnc1tuYW1lXSA/Pz0gZmFsc2U7IFxyXG4gICAgXHJcbiAgICAgICAgaWYgKHRoaXMuZmxnc1tuYW1lXSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgdGhpcy5mbGdzW25hbWVdID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLmN0bHNbbmFtZV07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKF9jKGM/LmRvX1UpKSB0aGlzLnVfYXJyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjLmRvX1UgYXMgVF9tZm5jLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChfYyhjPy5kb19EKSkgdGhpcy5kX2Fyci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYy5kb19EIGFzIFRfbWZuYywgZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAoX2MoYz8uZG9fTCkpIHRoaXMubF9hcnIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGMuZG9fTCBhcyBUX21mbmMsIGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKF9jKGM/LmRvX1IpKSB0aGlzLnJfYXJyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjLmRvX1IgYXMgVF9tZm5jLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChfYyhjPy5pc09LKSkgdGhpcy55X2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYy5pc09LIGFzIFRfbWZuYywgZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAoX2MoYz8uaXNORykpIHRoaXMubl9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGMuaXNORyBhcyBUX21mbmMsIGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKF9jKGM/LmlzU0wpKSB0aGlzLnNfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjLmlzU0wgYXMgVF9tZm5jLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChfYyhjPy5pc1JUKSkgdGhpcy5yX2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYy5pc1JUIGFzIFRfbWZuYywgZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAoX2MoYz8ubWVudSkpIHRoaXMubV9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGMubWVudSBhcyBUX21mbmMsIGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKF9jKGM/LmNwT0spKSB0aGlzLnlfY3AxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjLmNwT0sgYXMgVF9tZm5jLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChfYyhjPy5jcE5HKSkgdGhpcy5uX2NwMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYy5jcE5HIGFzIFRfbWZuYywgZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAoX2MoYz8uY3BTTCkpIHRoaXMuc19jcDEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGMuY3BTTCBhcyBUX21mbmMsIGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKF9jKGM/LmNwUlQpKSB0aGlzLnJfY3AxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjLmNwUlQgYXMgVF9tZm5jLCBmYWxzZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChjPy5rZXlFdmVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGMua2V5RXZlbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlfcHJlc3NfZnVuY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMudV9hcnIuc3R5bGUuZGlzcGxheSA9IF9jKGM/LmRvX1UpID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICAgICAgICAgICAgdGhpcy5kX2Fyci5zdHlsZS5kaXNwbGF5ID0gX2MoYz8uZG9fRCkgPyAnYmxvY2snIDogJ25vbmUnO1xyXG4gICAgICAgICAgICB0aGlzLmxfYXJyLnN0eWxlLmRpc3BsYXkgPSBfYyhjPy5kb19MKSA/ICdibG9jaycgOiAnbm9uZSc7XHJcbiAgICAgICAgICAgIHRoaXMucl9hcnIuc3R5bGUuZGlzcGxheSA9IF9jKGM/LmRvX1IpID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICAgICAgICAgICAgdGhpcy55X2J0bi5zdHlsZS5kaXNwbGF5ID0gX2MoYz8uaXNPSykgPyAnYmxvY2snIDogJ25vbmUnO1xyXG4gICAgICAgICAgICB0aGlzLm5fYnRuLnN0eWxlLmRpc3BsYXkgPSBfYyhjPy5pc05HKSA/ICdibG9jaycgOiAnbm9uZSc7XHJcbiAgICAgICAgICAgIHRoaXMuc19idG4uc3R5bGUuZGlzcGxheSA9IF9jKGM/LmlzU0wpID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICAgICAgICAgICAgdGhpcy5yX2J0bi5zdHlsZS5kaXNwbGF5ID0gX2MoYz8uaXNSVCkgPyAnYmxvY2snIDogJ25vbmUnO1xyXG4gICAgICAgICAgICB0aGlzLm1fYnRuLnN0eWxlLmRpc3BsYXkgPSBfYyhjPy5tZW51KSA/ICdibG9jaycgOiAnbm9uZSc7XHJcbiAgICAgICAgICAgIHRoaXMueV9jcDEuc3R5bGUuZGlzcGxheSA9IF9jKGM/LmNwT0spID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICAgICAgICAgICAgdGhpcy5uX2NwMS5zdHlsZS5kaXNwbGF5ID0gX2MoYz8uY3BORykgPyAnYmxvY2snIDogJ25vbmUnO1xyXG4gICAgICAgICAgICB0aGlzLnNfY3AxLnN0eWxlLmRpc3BsYXkgPSBfYyhjPy5jcFNMKSA/ICdibG9jaycgOiAnbm9uZSc7XHJcbiAgICAgICAgICAgIHRoaXMucl9jcDEuc3R5bGUuZGlzcGxheSA9IF9jKGM/LmNwUlQpID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0Vycm9yIE9jY3VlcmQgYXQgQXBwZW5kIERlZmF1bHQgQ3Rscy4nKTtcclxuICAgICAgICAgICAgYWxlcnQoJycgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBfYyhjOiBUX21hcmcpOiBib29sZWFuIHtcclxuICAgIGlmIChjID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcclxuICAgIGlmIChjID09PSBudWxsKSAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBrZXlfcHJlc3NfZnVuY3Rpb24oZTogS2V5Ym9hcmRFdmVudCk6dm9pZCAge1xyXG4gICAgY29uc3QgbmUgPSAoZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCk/LnZhbHVlID09PSB1bmRlZmluZWQgLy8gTm90IEVkaXR0aW5nIElucHV0RWxlbWVudFxyXG5cclxuICAgIHN3aXRjaChlLmNvZGUpIHsgLy8gQXJyb3fjga/lj43lv5zjgZvjgZoo44Kk44OZ44Oz44OI6Ieq5L2T44GM55m655Sf44Gb44GaKVxyXG4gICAgICAgIGNhc2UgJ0Fycm93VXAnOiBcclxuICAgICAgICBjYXNlICdOdW1wYWQ1JzogXHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VfYXJyJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpPy5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnS2V5Tyc6XHJcbiAgICAgICAgICAgICAgICBpZiAobmUpIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndV9hcnInKSBhcyBIVE1MQnV0dG9uRWxlbWVudCk/LmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOiBcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZF9hcnInKSBhcyBIVE1MQnV0dG9uRWxlbWVudCk/LmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdOdW1wYWQyJzogXHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RfYXJyJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpPy5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnS2V5TCc6XHJcbiAgICAgICAgICAgICAgICBpZiAoIW5lKSBicmVhazsgXHJcbiAgICAgICAgICAgICAgICBpZiAoZ19kZWJ1Zy5pc09OKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb19pbnN0YW50X2xvYWQoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkX2FycicpIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzogXHJcbiAgICAgICAgY2FzZSAnTnVtcGFkMSc6IFxyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsX2FycicpIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0tleUsnOlxyXG4gICAgICAgICAgICAgICAgaWYgKG5lKSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xfYXJyJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpPy5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6IFxyXG4gICAgICAgIGNhc2UgJ051bXBhZDMnOiBcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncl9hcnInKSBhcyBIVE1MQnV0dG9uRWxlbWVudCk/LmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdTZW1pY29sb24nOlxyXG4gICAgICAgICAgICAgICAgaWYgKG5lKSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JfYXJyJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpPy5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnRW50ZXInOlxyXG4gICAgICAgIGNhc2UgJ051bXBhZEVudGVyJzpcclxuICAgICAgICBjYXNlICdGMTAnOlxyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkpIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbl9idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudCk/LmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5X2J0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0tleVknOlxyXG4gICAgICAgIGNhc2UgJ0tleVAnOlxyXG4gICAgICAgIGNhc2UgJ0RpZ2l0MCc6XHJcbiAgICAgICAgICAgICAgICBpZiAobmUpIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneV9idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudCk/LmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdGMSc6XHJcbiAgICAgICAgY2FzZSAnTnVtcGFkMCc6XHJcbiAgICAgICAgY2FzZSAnTnVtcGFkQWRkJzpcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbl9idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudCk/LmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdLZXlOJzpcclxuICAgICAgICBjYXNlICdLZXlJJzpcclxuICAgICAgICBjYXNlICdEaWdpdDgnOlxyXG4gICAgICAgICAgICAgICAgaWYgKG5lKSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25fYnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpPy5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnS2V5VSc6XHJcbiAgICAgICAgICAgICAgICBpZiAoIW5lKSBicmVhaztcclxuICAgICAgICAgICAgICAgIGlmIChnX2RlYnVnLmlzT04oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHogPSBnX3RlYW0ud2FsaygpLmdldF96KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHogPiAwKSBnX3RlYW0ud2FsaygpLnNldF96KHogLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBkb19tb3ZlX2JvdHRvbV9oYWxmKCdibGlua19vZmYnKTtcclxuLy8gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1X2FycicpIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0tleUQnOlxyXG4gICAgICAgICAgICAgICAgaWYgKCFuZSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ19kZWJ1Zy5pc09OKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB6ID0gZ190ZWFtLndhbGsoKS5nZXRfeigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh6IDwgZ19tYXplLmdldF96X21heCgpLTEpIGdfdGVhbS53YWxrKCkuc2V0X3ooeiArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvX21vdmVfYm90dG9tX2hhbGYoJ2JsaW5rX29mZicpO1xyXG4vLyAgICAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VfYXJyJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpPy5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnS2V5TSc6XHJcbiAgICAgICAgY2FzZSAnTnVtcGFkNyc6XHJcbiAgICAgICAgICAgICAgICBpZiAobmUpIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbV9idG4nKSAgIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0Y3JzpcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc19idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudCk/LmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdDb21tYSc6XHJcbiAgICAgICAgICAgICAgICBpZiAobmUpIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc19idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudCk/LmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdLZXlTJzpcclxuICAgICAgICAgICAgICAgIGlmICghbmUpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGdfZGVidWcuaXNPTigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9faW5zdGFudF9zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9fbW92ZV9ib3R0b21faGFsZignYmxpbmtfb2ZmJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc19idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudCk/LmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdGMyc6XHJcbiAgICAgICAgY2FzZSAnTnVtcGFkOCc6XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JfYnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpPy5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnS2V5Uic6XHJcbiAgICAgICAgY2FzZSAnUGVyaW9kJzpcclxuICAgICAgICAgICAgICAgIGlmIChuZSkgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyX2J0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9hbGVydCB9ICAgICAgIGZyb20gXCIuLi9kX2Ntbi9nbG9iYWxcIjtcclxuaW1wb3J0IHtUX01ha2VFbnVtVHlwZX0gZnJvbSBcIi4uL2RfdXRsL1RfTWFrZUVudW1UeXBlXCI7XHJcbmV4cG9ydCBjb25zdCBUX1ZpZXdNb2RlOntbbW9kZTogc3RyaW5nXTogc3RyaW5nfSA9IHtcclxuICAgIE1vdmU6ICAgICAnbW92ZScsXHJcbiAgICBCYXR0OiAgICAgJ2JhdHQnLFxyXG4gICAgTWVudTogICAgICdtZW51JyxcclxuICAgIExkU3Y6ICAgICAnbGRzdicsXHJcbn0gYXMgY29uc3Q7XHJcbmV4cG9ydCB0eXBlIFRfVmlld01vZGUgPSBUX01ha2VFbnVtVHlwZTx0eXBlb2YgVF9WaWV3TW9kZT47XHJcblxyXG5leHBvcnQgY2xhc3MgQ19Td2l0Y2hWaWV3IHtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgbWU6ICAgQ19Td2l0Y2hWaWV3O1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBib2R5OiBIVE1MRWxlbWVudDtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXJ0aWNsZTogICB7W25hbWU6IHN0cmluZ106IEhUTUxFbGVtZW50fG51bGx9O1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhbGxfY2xhc3M6IHN0cmluZ1tdO1xyXG5cclxuICAgIHB1YmxpYyBNb3ZlKCk6IHN0cmluZyB7cmV0dXJuIFRfVmlld01vZGUuTW92ZTt9XHJcbiAgICBwdWJsaWMgQmF0dCgpOiBzdHJpbmcge3JldHVybiBUX1ZpZXdNb2RlLkJhdHQ7fVxyXG4gICAgcHVibGljIE1lbnUoKTogc3RyaW5nIHtyZXR1cm4gVF9WaWV3TW9kZS5NZW51O31cclxuICAgIHB1YmxpYyBNdlB0KCk6IHN0cmluZyB7cmV0dXJuIFRfVmlld01vZGUuTWVudTt9XHJcbiAgICBwdWJsaWMgTGRTdigpOiBzdHJpbmcge3JldHVybiBUX1ZpZXdNb2RlLkxkU3Y7fVxyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBDX1N3aXRjaFZpZXcuYWxsX2NsYXNzID0gT2JqZWN0LnZhbHVlcyhUX1ZpZXdNb2RlKTtcclxuICAgICAgICBDX1N3aXRjaFZpZXcuYXJ0aWNsZSA9IHt9O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIENfU3dpdGNoVmlldy5ib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgICAgICAgICAgIENfU3dpdGNoVmlldy5hcnRpY2xlLnZpZXczZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYW5lX21hemVfdnczRCcpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBDX1N3aXRjaFZpZXcuYXJ0aWNsZS52aWV3MmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFuZV9tYXplX3Z3MkQnKSBhcyBIVE1MRWxlbWVudDtcclxuLy8gICAgICAgICAgICBDX1N3aXRjaFZpZXcuYXJ0aWNsZS52aWV3Q2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFuZV9tYXplX3Z3Q2gnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgQ19Td2l0Y2hWaWV3LmFydGljbGUubWVudV9sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhbmVfbWVudV9saXN0JykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIENfU3dpdGNoVmlldy5hcnRpY2xlLmxkc3ZfbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYW5lX2xkc3ZfbGlzdCcpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBDX1N3aXRjaFZpZXcuYXJ0aWNsZS5sZHN2X2QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFuZV9sZHN2X2RhdGEnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgQ19Td2l0Y2hWaWV3LmFydGljbGUubWVudV9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhbmVfbWVudV9tZXNnJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIENfU3dpdGNoVmlldy5hcnRpY2xlLmdhbWVfbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYW5lX21hemVfbWVzZycpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBDX1N3aXRjaFZpZXcuYXJ0aWNsZS5jb250bHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFuZV9jdGxzX2JvYWQnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgQ19Td2l0Y2hWaWV3LmFydGljbGUubWVzc2FnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhbmVfc3l0bV9tZXNnJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIF9hbGVydCgnTGF5b3V0IEdldCBFcnJvcjogJyArIGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudmlldygnbW92ZScpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRPYmooKTogQ19Td2l0Y2hWaWV3IHtcclxuICAgICAgICB0aGlzLm1lID8/PSAgbmV3IENfU3dpdGNoVmlldygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHZpZXcobW9kZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy5fX3NldF9jbGFzcyhtb2RlKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX3NldF9jbGFzcyhjOiBzdHJpbmcpOiB2b2lkIHsgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgQ19Td2l0Y2hWaWV3LmJvZHk/LmNsYXNzTGlzdC5yZW1vdmUoLi4uQ19Td2l0Y2hWaWV3LmFsbF9jbGFzcyk7XHJcbiAgICAgICAgICAgIENfU3dpdGNoVmlldy5ib2R5Py5jbGFzc0xpc3QuYWRkKGMpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlpIGluIENfU3dpdGNoVmlldy5hcnRpY2xlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQ19Td2l0Y2hWaWV3LmFydGljbGVbaWldID09PSBudWxsKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIENfU3dpdGNoVmlldy5hcnRpY2xlW2lpXT8uY2xhc3NMaXN0LnJlbW92ZSguLi5DX1N3aXRjaFZpZXcuYWxsX2NsYXNzKTtcclxuICAgICAgICAgICAgICAgIENfU3dpdGNoVmlldy5hcnRpY2xlW2lpXT8uY2xhc3NMaXN0LmFkZChjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBfYWxlcnQoJ0xheW91dCBTZXQgRXJyb3I6ICcgKyBlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnX2RlYnVnLCBnX21lcyB9IGZyb20gXCIuLi9kX2Ntbi9nbG9iYWxcIjtcclxuaW1wb3J0IHsgQ19NYXplT2JqVmlldywgVF9SZWN0IH0gZnJvbSBcIi4uL2RfbWRsL0NfTWF6ZU9ialZpZXdcIjtcclxuaW1wb3J0IHsgX21pbiwgX3JvdW5kLCBfbWF4IH0gZnJvbSAnLi4vZF91dGwvRl9NYXRoJztcclxuaW1wb3J0IHsgZ19tYXplLCBnX3RlYW0gfSBmcm9tIFwiLi9nbG9iYWxfZm9yX21hemVcIjtcclxuXHJcbmxldCBkaXY6IEhUTUxEaXZFbGVtZW50O1xyXG5sZXQgY3ZzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbmxldCB2aWV3X3dkdGggICAgICAgID0gMDtcclxubGV0IHZpZXdfaGdodCAgICAgICAgPSAwO1xyXG5sZXQgbWFwX3dkdGggICAgICAgICA9IDA7XHJcbmxldCBtYXBfaGdodCAgICAgICAgID0gMDtcclxubGV0IGNfc2l6ZV94OiBudW1iZXIgPSAwO1xyXG5sZXQgY19zaXplX3k6IG51bWJlciA9IDA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdF9tYXplMkQoKTogdm9pZCB7XHJcbiAgICBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2X21hemVfdncyRCcpICAgICAgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBjdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF6ZV92aWV3MkRfY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICAgbGV0IGN4dCA9IGN2cy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgaWYgKGN4dCA9PT0gbnVsbCkge1xyXG4gICAgICAgIGN4dCA9IHVuZGVmaW5lZCBhcyB1bmtub3duIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIH1cclxuICAgIENfTWF6ZU9ialZpZXcuc2V0X2NvbnRleHQyRChjeHQpO1xyXG4gICAgY2FsY192aWV3MkRfd2lkdGgoKTtcclxufVxyXG5cclxuLy8g44CQ5Yid5pyf6Kit5a6a44CRVmlld0No44Gu5qiq5bmF44KSQ1NT44GL44KJ6Kqt44G/6L6844KT44Gn6YGp5ZCI44GZ44KL5paH5a2X44Gu44K144Kk44K644KS6KiI566X44GX44Gm44K744OD44OI44GZ44KLXHJcbmZ1bmN0aW9uIGNhbGNfdmlldzJEX3dpZHRoKCk6IHZvaWQge1xyXG5cclxuICAgIHZpZXdfd2R0aCAgPSBkaXYuY2xpZW50V2lkdGg7XHJcbiAgICB2aWV3X2hnaHQgID0gZGl2LmNsaWVudEhlaWdodDtcclxuXHJcbiAgICBjb25zdCBjb2wgICAgPSBnX21hemUuZ2V0X3hfbWF4KCkgKyAwO1xyXG4gICAgY29uc3QgY29sX3B4ID0gY3ZzLndpZHRoICAvIGNvbDtcclxuLy8gICAgY29uc3QgY29sX3B4ID0gdmlld193ZHRoICAvIGNvbDtcclxuXHJcbiAgICBjb25zdCByb3cgICAgPSBnX21hemUuZ2V0X3lfbWF4KCkgKyAwO1xyXG4gICAgY29uc3Qgcm93X3B4ID0gY3ZzLmhlaWdodCAvIHJvdztcclxuLy8gICAgY29uc3Qgcm93X3B4ID0gdmlld19oZ2h0IC8gcm93O1xyXG5cclxuICAgIGNfc2l6ZV94ICAgICA9IF9tYXgoWzIwLjAsIF9yb3VuZCgxLjAwICogIF9taW4oW2NvbF9weCwgcm93X3B4XSksIDIpXSk7XHJcbiAgICBjX3NpemVfeSAgICAgPSBfbWF4KFsyMC4wLCBfcm91bmQoMS4wMCAqICBfbWluKFtjb2xfcHgsIHJvd19weF0pLCAyKV0pO1xyXG5cclxuICAgIFxyXG4gICAgbWFwX3dkdGggICAgID0gY19zaXplX3ggKiBjb2w7XHJcbiAgICBtYXBfaGdodCAgICAgPSBjX3NpemVfeSAqIGNvbDtcclxuXHJcbiAgICBjdnMuc2V0QXR0cmlidXRlKCd3aWR0aCcsICBtYXBfd2R0aC50b1N0cmluZygpKTtcclxuICAgIGN2cy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIG1hcF9oZ2h0LnRvU3RyaW5nKCkpO1xyXG4vKlxyXG4gICAgY3ZzLnN0eWxlLnNldFByb3BlcnR5KCdmb250LXNpemUnLCAgYCR7Zm9udF9zaXplfXB4YCk7XHJcbiAgICBjdnMuc3R5bGUuc2V0UHJvcGVydHkoJ2xpbmUtaGVpZ2h0JyxgJHtsaW5lX2hnaHR9cHhgKTtcclxuKi9cclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY192aWV3MkRfdG9wKCk6IHZvaWQge1xyXG5cclxuICAgIHZpZXdfd2R0aCAgPSBkaXYuY2xpZW50V2lkdGg7XHJcbiAgICB2aWV3X2hnaHQgID0gZGl2LmNsaWVudEhlaWdodDtcclxuXHJcbiAgICBjb25zdCBwZCA9IGdfdGVhbS5nZXRfcGQoKTtcclxuXHJcbiAgICBsZXQgdG9wX3ggPSAgdmlld193ZHRoIC8gMiAtIHBkLnggKiBjX3NpemVfeDtcclxuICAgIGlmICh0b3BfeCA+IDApIHRvcF94ID0gMDsgLy8g5bem56uv5Yi26ZmQXHJcbiAgICBpZiAodG9wX3ggPCB2aWV3X3dkdGggLSBtYXBfd2R0aCkgdG9wX3ggPSB2aWV3X3dkdGggLSBtYXBfd2R0aDsgLy8g5Y+z56uv5Yi26ZmQXHJcbi8vICAgIGlmICh0b3BfeCA8IC12aWV3X3dkdGggLyAyKSB0b3BfeCA9IC12aWV3X3dkdGggLyAyO1xyXG4vLyAgICBpZiAodG9wX3ggPCBtYXBfd2R0aCAtIHZpZXdfd2R0aCkgdG9wX3ggPSBtYXBfd2R0aCAtIHZpZXdfd2R0aDsgLy8g5Y+z56uv5Yi26ZmQXHJcblxyXG4gICAgbGV0IHRvcF95ID0gIHZpZXdfaGdodCAvIDIgLSBwZC55ICogY19zaXplX3k7XHJcbiAgICBpZiAodG9wX3kgPiAwKSB0b3BfeSA9IDA7IC8vIOS4iuerr+WItumZkFxyXG4gICAgaWYgKHRvcF95IDwgdmlld19oZ2h0IC0gbWFwX2hnaHQpIHRvcF95ID0gdmlld19oZ2h0IC0gbWFwX2hnaHQ7IC8vIOS4iuerr+WItumZkFxyXG4vLyAgICBpZiAodG9wX3kgPCAtdmlld19oZ2h0IC8gMikgdG9wX3kgPSAtdmlld19oZ2h0IC8gMjsgLy8g44OQ44Kw5a++562W44Gu6YGp5b2T5L+u5q2jXHJcbi8vICAgIGlmICh0b3BfeSA8IG1hcF9oZ2h0IC0gdmlld19oZ2h0KSB0b3BfeSA9IG1hcF9oZ2h0IC0gdmlld19oZ2h0OyAvLyDkuIvnq6/liLbpmZBcclxuXHJcbiAgICBjdnMuc3R5bGUuc2V0UHJvcGVydHkoJ2xlZnQnLCAgICAgIGAke3RvcF94fXB4YCk7XHJcbiAgICBjdnMuc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcsICAgICAgIGAke3RvcF95fXB4YCk7XHJcblxyXG4vLyAgICAgICAgYWxlcnQoYFZpZXcyRDogJHt2aWV3X3dkdGh9eCR7dmlld19oZ2h0fSBweCwgQ2VsbDogJHtjX3NpemVfeH14JHtjX3NpemVfeX0gcHhgKTtcclxuLy8gICAgICAgIGFsZXJ0KGBWaWV3MkQ6ICR7dG9wX3h9cHggKiAke3RvcF95fXB4LCBQRDogJHtwZC54fSwke3BkLnl9LCR7cGQuen1gKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlfbWF6ZTJEKCk6IHZvaWQgeyBcclxuICAgIGlmIChjdnMgIT09IG51bGwpIHt0b18yRCgpO2NhbGNfdmlldzJEX3RvcCgpfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZ19tZXMud2FybmluZ19tZXNzYWdlKCdDYW4gbm90IGZvdW5kIHByZSNNYXplX3ZpZXcyRCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b18yRCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNpemVfeCA9IGdfbWF6ZS5nZXRfeF9tYXgoKTtcclxuICAgIGNvbnN0IHNpemVfeSA9IGdfbWF6ZS5nZXRfeV9tYXgoKTtcclxuICAgIGNvbnN0IGZsb29yICA9IGdfdGVhbS5nZXRfcGQoKS56XHJcblxyXG4gICAgY29uc3QgY2VsbF9tYXNrcyA9IENfTWF6ZU9ialZpZXcubmV3T2JqKHtcclxuICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn77y4JywgXHJcbiAgICAgICAgc2hvdzNEOiAnMScsXHJcbiAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICBjb2xfZjogJycsIGNvbF9iOiAnJywgY29sX3M6ICcnLCBjb2xfdDogJycsIGNvbF9kOiAnJywgXHJcbiAgICAgICAgY29sX2w6ICcjMDAwMGZmJywgY29sXzI6ICcjMzMzMzMzJyxcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgY2VsbF91bmV4cCA9IENfTWF6ZU9ialZpZXcubmV3T2JqKHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ+isjicsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMScsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbiAgICAgICAgICAgIGNvbF9mOiAnJywgY29sX2I6ICcnLCBjb2xfczogJycsIGNvbF90OiAnJywgY29sX2Q6ICcnLCBcclxuICAgICAgICAgICAgY29sX2w6ICcjMDAwMGZmJywgY29sXzI6ICcjZmYwMGZmJywgXHJcbiAgICB9KVxyXG5cclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCByZWN0XzJkOiBUX1JlY3QgPSB7XHJcbiAgICAgICAgICAgICAgICB0bDogeyB4OiAoIHggICAgICkgKiBjX3NpemVfeCwgeTogKCB5ICAgICApICogY19zaXplX3kgfSxcclxuICAgICAgICAgICAgICAgIHRyOiB7IHg6ICggeCArIDEgKSAqIGNfc2l6ZV94LCB5OiAoIHkgICAgICkgKiBjX3NpemVfeSB9LFxyXG4gICAgICAgICAgICAgICAgZGw6IHsgeDogKCB4ICAgICApICogY19zaXplX3gsIHk6ICggeSArIDEgKSAqIGNfc2l6ZV95IH0sXHJcbiAgICAgICAgICAgICAgICBkcjogeyB4OiAoIHggKyAxICkgKiBjX3NpemVfeCwgeTogKCB5ICsgMSApICogY19zaXplX3kgfSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZ19kZWJ1Zy5pc09OKCkgJiYgZ19tYXplLmlzX21hc2tlZF94eXooeCwgeSwgZmxvb3IpKSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsX21hc2tzLmRyb3cyRChyZWN0XzJkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9ial92aWV3ID0gZ19tYXplLmdldF9vYmpfeHl6KHgsIHksIGZsb29yKT8udmlldygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9ial92aWV3ICE9PSB1bmRlZmluZWQpIG9ial92aWV3Py5kcm93MkQocmVjdF8yZCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmbHJfdmlldyA9IGdfbWF6ZS5nZXRfY2VsbF94eXooeCwgeSwgZmxvb3IpPy5nZXRPYmooKT8udmlldygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmbHJfdmlldyAhPT0gdW5kZWZpbmVkKSBmbHJfdmlldz8uZHJvdzJEKHJlY3RfMmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgY2VsbF91bmV4cC5kcm93MkQocmVjdF8yZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IF9taW4sIF9yb3VuZCB9ICAgZnJvbSBcIi4uL2RfdXRsL0ZfTWF0aFwiO1xyXG5pbXBvcnQgeyBDX1BvaW50IH0gICAgICAgIGZyb20gXCIuLi9kX21kbC9DX1BvaW50XCJcclxuaW1wb3J0IHsgQ19SYW5nZSB9ICAgICAgICBmcm9tIFwiLi4vZF9tZGwvQ19SYW5nZVwiO1xyXG5pbXBvcnQgeyBDX01hemVPYmpWaWV3IH0gIGZyb20gXCIuLi9kX21kbC9DX01hemVPYmpWaWV3XCI7XHJcbmltcG9ydCB7IFRfRGlyZWN0aW9uIH0gICAgZnJvbSBcIi4uL2RfbWRsL1RfRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IENfV2FsbCB9ICAgICAgICAgZnJvbSBcIi4uL2RfbWRsL0NfV2FsbFwiO1xyXG5pbXBvcnQgeyBnX21lcyB9ICAgICAgICAgIGZyb20gXCIuLi9kX2Ntbi9nbG9iYWxcIjtcclxuaW1wb3J0IHsgZ19tYXplLCBnX3RlYW0sIGdfZHMgfSAgZnJvbSBcIi4vZ2xvYmFsX2Zvcl9tYXplXCI7XHJcblxyXG5leHBvcnQgdHlwZSBUX0Ryb3dTZXQgPSB7XHJcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50fG51bGwsXHJcbiAgICBjb246ICAgIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRHxudWxsLFxyXG4gICAgZGVwdGg6ICBudW1iZXIsXHJcbiAgICB3YWxsOiAgIENfV2FsbHxudWxsLFxyXG59XHJcblxyXG5cclxuLy8gM0Tmj4/lhpnmmYLjgavkvb/nlKjjgZnjgovlpKfln5/lpInmlbDjga7mupblgplcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRfbWF6ZTNEKCk6IFRfRHJvd1NldCB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF6ZV92aWV3M0RfY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBpZiAoY2FudmFzID09PSBudWxsKSB7XHJcbiAgICAgICAgZ19tZXMud2FybmluZ19tZXNzYWdlKCdDYW52YXMgaXNudCBmb3VuZCEgaWQ9TWF6ZV92aWV3M0RfY2FudmFzJyk7XHJcbiAgICAgICAgcmV0dXJuIHtjYW52YXM6IG51bGwsIGNvbjogbnVsbCwgZGVwdGg6IDAsIHdhbGw6IG51bGx9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgY29uOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR8bnVsbCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgaWYgKGNvbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIGdfbWVzLndhcm5pbmdfbWVzc2FnZSgnQnJvd3NlciBkb250IHN1cnBwb3J0IDJEIGdyYXBoaWNzIScpO1xyXG4gICAgICAgIHJldHVybiB7Y2FudmFzOiBudWxsLCBjb246IG51bGwsIGRlcHRoOiAwLCB3YWxsOiBudWxsfTtcclxuICAgIH1cclxuXHJcbiAgICBDX01hemVPYmpWaWV3LnNldF9jb250ZXh0M0QoY29uKTtcclxuICAgIGluaXRfbWF6ZUNlbGwzRCgpO1xyXG5cclxuICAgIC8vIDNE44Oh44Kk44K644KS5o+P5YaZ44GZ44KL44Kt44Oj44Oz44OQ44K56KaB57Sg44Gu44K144Kk44K644KSQ1NT5LiK44Gu44CO6KaL44Gf55uu44CP44Gu44K144Kk44K644Gr5ZCI44KP44Gb44KLXHJcbiAgICBjYW52YXMud2lkdGggID0gY2FudmFzLmNsaWVudFdpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgY29uc3QgZGVwdGggPSA1OyAvLyDlpYfmlbDjga7jgb/lr77lv5zjgILjg4Djg7Pjgrjjg6fjg7Pjga7opovpgJrjgZfjgpLoia/jgY/jgZnjgovjgarjgokgNSDjgYvjgoLjgZfjgozjgarjgYRcclxuXHJcbiAgICBjb25zdCB0b3BfcCA9IG5ldyBDX1BvaW50KDAsIDAsIDApO1xyXG4gICAgY29uc3QgYnRtX3AgPSBuZXcgQ19Qb2ludChjYW52YXMud2lkdGggIC0gMSwgY2FudmFzLmhlaWdodCAtIDEsIDApO1xyXG4gICAgY29uc3Qgd2FsbCAgPSBuZXcgQ19XYWxsKGRlcHRoLCBuZXcgQ19SYW5nZSh0b3BfcCwgYnRtX3ApKTtcclxuICAgIHJldHVybiB7Y2FudmFzOiBjYW52YXMsIGNvbjogY29uLCBkZXB0aDogZGVwdGgsIHdhbGw6IHdhbGx9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0X21hemVDZWxsM0QoKTogdm9pZCB7fVxyXG5cclxuXHJcbi8vIDNE5o+P5YaZ5pmC44Gu55S76Z2i5Yid5pyf5YyW44CC44Go44KK44GC44GI44Ga5aSp5LqV44Go5bqK44KS5o+P44GPXHJcbmZ1bmN0aW9uIGRyYXdfaW5pdF9tYXplM0QoKTogdm9pZCB7XHJcbiAgICBpZiAoZ19kcy5jYW52YXMgPT09IG51bGwgfHwgZ19kcy5jb24gPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBnX2RzLmNvbi5maWxsU3R5bGUgPSAnI2FhYWFhYSc7XHJcbiAgICBnX2RzLmNvbi5maWxsUmVjdChcclxuICAgICAgICAwLCBcclxuICAgICAgICAwLCBcclxuICAgICAgICBnX2RzLmNhbnZhcy53aWR0aCAtIDEsIFxyXG4gICAgICAgIGdldF9ob2xpem9uX2xpbmUoKSxcclxuICAgICk7XHJcblxyXG4gICAgZ19kcy5jb24uZmlsbFN0eWxlID0gJyM2NjY2ZmYnO1xyXG4gICAgZ19kcy5jb24uZmlsbFJlY3QoXHJcbiAgICAgICAgMCwgXHJcbiAgICAgICAgZ2V0X2hvbGl6b25fbGluZSgpLCBcclxuICAgICAgICBnX2RzLmNhbnZhcy53aWR0aCAgIC0gMSwgXHJcbiAgICAgICAgZ19kcy5jYW52YXMuaGVpZ2h0ICAtIDEsXHJcbiAgICApO1xyXG5cclxuICAgIGRyb3dfZmxvb3JfbGluZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRfaG9saXpvbl9saW5lKCk6IG51bWJlciB7XHJcbiAgICBpZiAoZ19kcy53YWxsID09PSBudWxsKSByZXR1cm4gLTE7XHJcbiAgICByZXR1cm4gZ19kcy53YWxsLmdldChnX2RzLmRlcHRoLCAwKS5tYXhfeTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJvd19mbG9vcl9saW5lKCk6IHZvaWQge1xyXG4gICAgaWYgKGdfZHMuY2FudmFzID09PSBudWxsIHx8IGdfZHMuY29uID09PSBudWxsIHx8IGdfZHMud2FsbCA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgY29uc3QgY29uICAgPSBnX2RzLmNvbjtcclxuICAgIGNvbnN0IHdhbGwgID0gZ19kcy53YWxsO1xyXG4gICAgY29uc3QgZGVwdGggPSBnX2RzLmRlcHRoO1xyXG4gICAgY29uc3QgSF9kZXB0ID0gKGRlcHRoIC0gMSkgLyAyO1xyXG5cclxuICAgIGNvbnN0IGxlZnRfeCAgPSAwO1xyXG4gICAgY29uc3QgcmlnaHRfeCA9IGdfZHMuY2FudmFzLndpZHRoICAtIDE7XHJcbiAgICBjb25zdCBmcm9udF95ID0gZ19kcy5jYW52YXMuaGVpZ2h0IC0gMTtcclxuICAgIGNvbnN0IGJhY2tfeSAgPSBnZXRfaG9saXpvbl9saW5lKCk7XHJcblxyXG4gICAgY29uLnN0cm9rZVN0eWxlID0gJyM5OTk5ZmYnO1xyXG4gICAgY29uLmxpbmVXaWR0aCAgID0gMTtcclxuXHJcbiAgICAvLyDmqKrnt5oo55S76Z2i44Gr5a++44GX44Gm5rC05bmzKeOCkuW8leOBj1xyXG4gICAgZm9yICh2YXIgeSA9IDA7IHkgPCBkZXB0aCArIDE7IHkrKykge1xyXG4gICAgICAgIGNvbi5iZWdpblBhdGgoKTtcclxuICAgICAgICBjb24ubW92ZVRvKGxlZnRfeCAsIHdhbGwuZ2V0KHksIDApLm1heF95KTtcclxuICAgICAgICBjb24ubGluZVRvKHJpZ2h0X3gsIHdhbGwuZ2V0KHksIDApLm1heF95KTtcclxuICAgICAgICBjb24uc3Ryb2tlKCk7IFxyXG4gICAgfVxyXG5cclxuICAgIC8vIOe4pue3muOCkuW8leOBj1xyXG4gICAgZm9yICh2YXIgeCA9IC1IX2RlcHQ7IHggPCBIX2RlcHQgKyAxOyB4KyspIHtcclxuICAgICAgICBjb24uYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY29uLm1vdmVUbyh3YWxsLmdldCgwLCAgICAgeCkubWluX3gsIGZyb250X3kpO1xyXG4gICAgICAgIGNvbi5saW5lVG8od2FsbC5nZXQoZGVwdGgsIHgpLm1pbl94LCBiYWNrX3kgKTtcclxuICAgICAgICBjb24uc3Ryb2tlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5X21hemUzRCgpOiB2b2lkIHtcclxuICAgIGlmIChnX2RzLmNhbnZhcyA9PT0gbnVsbCB8fCBnX2RzLmNvbiA9PT0gbnVsbCB8fCBnX2RzLndhbGwgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBkcmF3X2luaXRfbWF6ZTNEKCk7XHJcbiAgICBkaXNwbGV5X21hc2UzRF9kaXJlY3Rpb24oKTtcclxuXHJcbiAgICBjb25zdCBkZXB0aCAgID0gIGdfZHMuZGVwdGg7XHJcbiAgICBjb25zdCBIX2RlcHRoID0gKGRlcHRoIC0gMSkgLyAyO1xyXG4gICAgZm9yICh2YXIgaiA9IGdfZHMuZGVwdGggLSAxOyBqID49IDA7IGotLSkge1xyXG4gICAgICAgIC8vIOWPs+WBtOOBjOimi+OBiOOBpuOBhOOCi+WjgeOBruaPj+WGmSAo5bem5YG044GL44KJ5o+P5YaZKVxyXG4gICAgICAgIGZvciAodmFyIGsgPSAtSF9kZXB0aDsgayA8IDA7IGsrKykgZHJvd01hemVDZWxsKGosIGspO1xyXG4gICAgICAgIC8vIOW3puWBtOOBjOimi+OBiOOBpuOBhOOCi+WjgeOBruaPj+WGmSAo5Y+z5YG044GL44KJ5o+P5YaZKVxyXG4gICAgICAgIGZvciAodmFyIGsgPSBIX2RlcHRoOyBrID4gMDsgay0tKSAgZHJvd01hemVDZWxsKGosIGspO1xyXG4gICAgICAgIC8vIOato+mdouOBruWjgeOBruaPj+WGmVxyXG4gICAgICAgIGRyb3dNYXplQ2VsbChqLCAwKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJvd01hemVDZWxsKGQ6IG51bWJlciwgdzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoZ19kcy53YWxsID09PSBudWxsKSByZXR1cm47XHJcbiAgICBjb25zdCBhcm91bmRfal9rID0gZ190ZWFtLndhbGsoKS5nZXRfYXJvdW5kKGQsIHcsIDApO1xyXG4gICAgY29uc3QgZnJvdF93YWxsICA9IGdfZHMud2FsbC5nZXQoZCwgdyk7XHJcbiAgICBjb25zdCBiYWNrX3dhbGwgID0gZ19kcy53YWxsLmdldChkICsgMSwgdyk7XHJcbiAgICBjb25zdCBtel9raW5kICAgID0gZ19tYXplLmdldF9raW5kKGFyb3VuZF9qX2spO1xyXG5cclxuICAgIGdfbWF6ZT8uZ2V0X2NlbGwoYXJvdW5kX2pfayk/LmRyb3czRChmcm90X3dhbGwsIGJhY2tfd2FsbCk7XHJcbiAgICBpZiAoZ19tYXplLmV4aXN0X29iaihhcm91bmRfal9rKSkge1xyXG4gICAgICAgIGNvbnN0IG9iaiA9IGdfbWF6ZS5nZXRfb2JqKGFyb3VuZF9qX2spO1xyXG4gICAgICAgIGlmIChvYmogIT09IG51bGwpIG9iai52aWV3KCk/LmRyb3czRChmcm90X3dhbGwsIGJhY2tfd2FsbCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGV5X21hc2UzRF9kaXJlY3Rpb24oKTogdm9pZCB7XHJcbiAgICBjb25zdCBwX2RpciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXplX3ZpZXczRF9kaXJlY3Rpb25faW5mbycpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgaWYgKHBfZGlyID09PSBudWxsKSB7XHJcbiAgICAgICAgZ19tZXMud2FybmluZ19tZXNzYWdlKCdQIGVsZW1lbnQgaXNudCBmb3VuZCEgaWQ9TWF6ZV92aWV3M0RfZGlyZWN0aW9uX2luZm8nKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgZGlyZWN0aW9uOiBzdHJpbmc7XHJcbiAgICBjb25zdCBwID0gZ190ZWFtLmdldF9wZCgpO1xyXG4gICAgc3dpdGNoIChwLmQpIHtcclxuICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9ICc8c3BhbiBjbGFzcz1cImRpcmVjdGlvbl9OXCI+44CK5YyX44CLPC9zcGFuPic7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTpcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gJzxzcGFuIGNsYXNzPVwiZGlyZWN0aW9uX0VcIj7jgIrmnbHjgIs8L3NwYW4+JztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOlxyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAnPHNwYW4gY2xhc3M9XCJkaXJlY3Rpb25fU1wiPuOAiuWNl+OAizwvc3Bhbj4nO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9ICc8c3BhbiBjbGFzcz1cImRpcmVjdGlvbl9XXCI+44CK6KW/44CLPC9zcGFuPic7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9ICc8c3BhbiBjbGFzcz1cImRpcmVjdGlvbl9EXCI+44CK6KyO44CLPC9zcGFuPic7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1lcyA9ICflnLDkuIsgJyArIChwLnogKyAxKSArICfpmo7jgIAnICsgZGlyZWN0aW9uICsgJ+OAgCh4ID0gPHNwYW4gaWQ9XCJkaXJlY3Rpb25fWFwiPicgKyBwLnggKyAnPC9zcGFuPiwgeSA9IDxzcGFuIGlkPVwiZGlyZWN0aW9uX1lcIj4nICsgcC55ICsgJzwvc3Bhbj4pJztcclxuICAgIHBfZGlyLmlubmVySFRNTCA9IG1lcztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXplM0RfYmxpbmtfb25fZGlyZWN0aW9uKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZGlyX3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlyZWN0aW9uX1gnKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICBpZiAoZGlyX3ggPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBkaXJfeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXJlY3Rpb25fWScpIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuICAgIGlmIChkaXJfeSA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIHN3aXRjaCAoZ190ZWFtLndhbGsoKS5nZXRfZCgpKSB7XHJcbiAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOlxyXG4gICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzpcclxuICAgICAgICAgICAgZGlyX3guY2xhc3NMaXN0LnJlbW92ZSgnYmxpbmsnKTtcclxuICAgICAgICAgICAgZGlyX3kuY2xhc3NMaXN0LmFkZCAgICgnYmxpbmsnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTpcclxuICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6XHJcbiAgICAgICAgICAgIGRpcl94LmNsYXNzTGlzdC5hZGQgICAoJ2JsaW5rJyk7XHJcbiAgICAgICAgICAgIGRpcl95LmNsYXNzTGlzdC5yZW1vdmUoJ2JsaW5rJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbWF6ZTNEX2JsaW5rX29mZl9kaXJlY3Rpb24oKTogdm9pZCB7XHJcbiAgICBjb25zdCBkaXJfeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXJlY3Rpb25fWCcpIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuICAgIGlmIChkaXJfeCA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgZGlyX3guY2xhc3NMaXN0LnJlbW92ZSgnYmxpbmsnKTtcclxuXHJcbiAgICBjb25zdCBkaXJfeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXJlY3Rpb25fWScpIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuICAgIGlmIChkaXJfeSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgZGlyX3kuY2xhc3NMaXN0LnJlbW92ZSgnYmxpbmsnKTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgZ19kZWJ1ZywgZ19tZXMgfSBmcm9tIFwiLi4vZF9jbW4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7IF9taW4sIF9yb3VuZCwgX21heCB9IGZyb20gJy4uL2RfdXRsL0ZfTWF0aCc7XHJcbmltcG9ydCB7IGdfbWF6ZSwgZ190ZWFtIH0gZnJvbSBcIi4vZ2xvYmFsX2Zvcl9tYXplXCI7XHJcblxyXG5sZXQgZGl2OiBIVE1MRGl2RWxlbWVudDtcclxubGV0IHByZTogSFRNTFByZUVsZW1lbnQ7XHJcblxyXG5sZXQgdmlld193ZHRoICAgICAgICA9IDA7XHJcbmxldCB2aWV3X2hnaHQgICAgICAgID0gMDtcclxubGV0IG1hcF93ZHRoICAgICAgICAgPSAwO1xyXG5sZXQgbWFwX2hnaHQgICAgICAgICA9IDA7XHJcbmxldCBmb250X3NpemU6bnVtYmVyID0gMDtcclxubGV0IGxpbmVfaGdodDpudW1iZXIgPSAwO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRfbWF6ZUNoKCk6IHZvaWQge1xyXG4gICAgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpdl9tYXplX3Z3Q2gnKSAgIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgcHJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hemVfdmlld0NoX3ByZScpIGFzIEhUTUxQcmVFbGVtZW50O1xyXG4gICAgY2FsY192aWV3Q2hfd2lkdGgoKTtcclxufVxyXG5cclxuLy8g44CQ5Yid5pyf6Kit5a6a44CRVmlld0No44Gu5qiq5bmF44KSQ1NT44GL44KJ6Kqt44G/6L6844KT44Gn6YGp5ZCI44GZ44KL5paH5a2X44Gu44K144Kk44K644KS6KiI566X44GX44Gm44K744OD44OI44GZ44KLXHJcbmZ1bmN0aW9uIGNhbGNfdmlld0NoX3dpZHRoKCk6IHZvaWQge1xyXG5cclxuICAgIHZpZXdfd2R0aCAgPSBkaXYuY2xpZW50V2lkdGg7XHJcbiAgICB2aWV3X2hnaHQgID0gZGl2LmNsaWVudEhlaWdodDtcclxuXHJcbiAgICBjb25zdCBjb2wgICAgPSBnX21hemUuZ2V0X3hfbWF4KCkgKyAxO1xyXG4gICAgY29uc3QgY29sX3B4ID0gcHJlLmNsaWVudFdpZHRoICAvIGNvbDtcclxuXHJcbiAgICBjb25zdCByb3cgICAgPSBnX21hemUuZ2V0X3lfbWF4KCkgKyAxO1xyXG4gICAgY29uc3Qgcm93X3B4ID0gcHJlLmNsaWVudEhlaWdodCAvIHJvdztcclxuXHJcbiAgICBmb250X3NpemUgICA9IF9yb3VuZChfbWF4KFsxNS4wLCBfcm91bmQoMS4wMCAqICBfbWluKFtjb2xfcHgsIHJvd19weF0pLCAyKV0pLCAwKTtcclxuICAgIGxpbmVfaGdodCAgID0gX3JvdW5kKF9tYXgoWzE1LjAsIF9yb3VuZCgxLjAwICogIF9taW4oW2NvbF9weCwgcm93X3B4XSksIDIpXSksIDApO1xyXG5cclxuICAgIG1hcF93ZHRoICAgID0gZm9udF9zaXplICogY29sO1xyXG4gICAgbWFwX2hnaHQgICAgPSBsaW5lX2hnaHQgKiBjb2w7XHJcblxyXG4gICAgcHJlLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAgbWFwX3dkdGgudG9TdHJpbmcoKSk7XHJcbiAgICBwcmUuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBtYXBfaGdodC50b1N0cmluZygpKTtcclxuICAgIHByZS5zdHlsZS5zZXRQcm9wZXJ0eSgnZm9udC1zaXplJywgIGAke2ZvbnRfc2l6ZX1weGApO1xyXG4gICAgcHJlLnN0eWxlLnNldFByb3BlcnR5KCdsaW5lLWhlaWdodCcsYCR7bGluZV9oZ2h0fXB4YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGNfdmlld0NoX3RvcCgpOiB2b2lkIHtcclxuXHJcbiAgICB2aWV3X3dkdGggID0gZGl2LmNsaWVudFdpZHRoO1xyXG4gICAgdmlld19oZ2h0ICA9IGRpdi5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgY29uc3QgcGQgPSBnX3RlYW0uZ2V0X3BkKCk7XHJcblxyXG4gICAgbGV0IHRvcF94ID0gIHZpZXdfd2R0aCAvIDIgLSAocGQueCArIDEpICogZm9udF9zaXplO1xyXG4gICAgaWYgKHRvcF94ID4gMCkgdG9wX3ggPSAwOyAvLyDlt6bnq6/liLbpmZBcclxuLy8gICAgaWYgKHRvcF94IDwgLXZpZXdfd2R0aCAvIDIpIHRvcF94ID0gLXZpZXdfd2R0aCAvIDI7XHJcbi8vICAgIGlmICh0b3BfeCA+IG1hcF93ZHRoIC0gdmlld193ZHRoKSB0b3BfeCA9IG1hcF93ZHRoIC0gdmlld193ZHRoO1xyXG5cclxuICAgIGxldCB0b3BfeSA9ICB2aWV3X2hnaHQgLyAyIC0gKHBkLnkgKyAxKSAqIGxpbmVfaGdodDtcclxuICAgIGlmICh0b3BfeSA+IDApIHRvcF95ID0gMDsgLy8g5LiK56uv5Yi26ZmQXHJcbi8vICAgIGlmICh0b3BfeSA8IC12aWV3X2hnaHQgLyAyKSB0b3BfeSA9IC12aWV3X2hnaHQgLyAyOyAvLyDjg5DjgrDlr77nrZbjga7pganlvZPkv67mraNcclxuLy8gICAgaWYgKHRvcF95ID4gbWFwX2hnaHQgLSB2aWV3X2hnaHQpIHRvcF95ID0gbWFwX2hnaHQgLSB2aWV3X2hnaHQ7XHJcblxyXG4gICAgcHJlLnN0eWxlLnNldFByb3BlcnR5KCdsZWZ0JywgICAgICBgJHt0b3BfeH1weGApO1xyXG4gICAgcHJlLnN0eWxlLnNldFByb3BlcnR5KCd0b3AnLCAgICAgICBgJHt0b3BfeX1weGApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheV9tYXplQ2goKTogdm9pZCB7IFxyXG4gICAgaWYgKHByZSAhPT0gbnVsbCkge3ByZS5pbm5lclRleHQgPSB0b19zdHJpbmcoKTtjYWxjX3ZpZXdDaF90b3AoKX1cclxuICAgIGVsc2UgZ19tZXMud2FybmluZ19tZXNzYWdlKCdDYW4gbm90IGZvdW5kIHByZSNNYXplX3ZpZXdDaF9wcmUhIScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b19zdHJpbmcoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHNpemVfeCA9IGdfbWF6ZS5nZXRfeF9tYXgoKTtcclxuICAgIGNvbnN0IHNpemVfeSA9IGdfbWF6ZS5nZXRfeV9tYXgoKTtcclxuICAgIGNvbnN0IGZsb29yICA9IGdfdGVhbS5nZXRfcGQoKS56XHJcblxyXG4gICAgbGV0IHJldF9zdHIgPSAnJztcclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICghZ19kZWJ1Zy5pc09OKCkgJiYgZ19tYXplLmlzX21hc2tlZF94eXooeCwgeSwgZmxvb3IpKSB7XHJcbiAgICAgICAgICAgICAgICByZXRfc3RyICs9ICfvvLgnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqID0gZ19tYXplLmdldF9vYmpfeHl6KHgsIHksIGZsb29yKTtcclxuICAgICAgICAgICAgICAgIGlmIChvYmogPT09IG51bGwgfHwgb2JqLnZpZXcoKSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0X3N0ciArPSBnX21hemUuZ2V0X2NlbGxfeHl6KHgsIHksIGZsb29yKT8udG9fbGV0dGVyKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9ial9jID0gb2JqLnZpZXcoKT8ubGV0dGVyKCkgPz8gJ+isjic7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0X3N0ciArPSBvYmpfYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXRfc3RyICs9IFwiXFxuXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0X3N0cjtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQ19VcmxPcHQgfSAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi4vZF91dGwvQ19VcmxPcHRcIjtcclxuaW1wb3J0IHsgVURfc2F2ZSwgdG1wX3NhdmUgfSAgICAgICAgICBmcm9tIFwiLi4vZF9jbW4vRl9sb2FkX2FuZF9zYXZlXCI7XHJcbmltcG9ydCB7IFBPU1RfYW5kX21vdmVfcGFnZSB9ICAgICAgICAgZnJvbSBcIi4uL2RfY21uL0ZfUE9TVFwiO1xyXG5pbXBvcnQgeyBnX3N0YXJ0X2VudiwgZ191cmwsIGdfdXJsX21haV9ndWxkIH0gZnJvbSBcIi4uL2RfY21uL2dsb2JhbFwiO1xyXG5cclxuaW1wb3J0IHsgc2V0X2dfc2F2ZSB9IGZyb20gXCIuL0Zfc2V0X3NhdmVfbW9kZVwiO1xyXG5pbXBvcnQgeyBhY3RfbW92ZV9tb2RlLCBkb19tb3ZlX2JvdHRvbV9oYWxmIH0gZnJvbSBcIi4vRl9zZXRfbW92ZV9tb2RlXCI7XHJcbmltcG9ydCB7IFxyXG4gICAgZ19tdm0sIFxyXG4gICAgZ19tYXplLCBcclxuICAgIGdfdGVhbSxcclxuICAgIGdfY3RscyxcclxuICAgIGdfdnN3LFxyXG4gICAgZ19kcywgXHJcbn0gICBmcm9tIFwiLi9nbG9iYWxfZm9yX21hemVcIjtcclxuXHJcblxyXG52YXIgY2FuVXA6IGJvb2xlYW4gID0gIGZhbHNlO1xyXG52YXIgY2FuRG46IGJvb2xlYW4gID0gIGZhbHNlO1xyXG5cclxudmFyIGlzVXA6ICBib29sZWFuICA9ICBmYWxzZTtcclxuXHJcbmNvbnN0IGN0bHNfdXBkbl91cCA9IHtcclxuICAgIG5hbWU6ICd1cGRuX3VwJywgXHJcbi8vICAgIGRvX1U6ICBkb191cCxcclxuICAgIGlzT0s6ICBkb191cCxcclxuICAgIGlzTkc6ICBkb19jYW5jZWwsXHJcbn1cclxuY29uc3QgY3Rsc191cGRuX2RuID0ge1xyXG4gICAgbmFtZTogJ3VwZG5fZG4nLCBcclxuLy8gICAgZG9fRDogIGRvX2Rvd24sXHJcbiAgICBpc09LOiAgZG9fZG93bixcclxuICAgIGlzTkc6ICBkb19jYW5jZWwsXHJcbn1cclxuY29uc3QgY3Rsc191cGRuX3VkX2hwdXAgPSB7XHJcbiAgICBuYW1lOiAndXBkbl91ZF9ocHVwJywgXHJcbi8vICAgIGRvX1U6ICBob3BlX1VwLFxyXG4vLyAgICBpc09LOiAgZG9fVUQsXHJcbiAgICBkb19VOiAgZG9fdXAsXHJcbiAgICBkb19EOiAgZG9fZG93bixcclxuICAgIGlzTkc6ICBkb19jYW5jZWwsXHJcbn1cclxuY29uc3QgY3Rsc191cGRuX3VkX2hwZG4gPSB7XHJcbiAgICBuYW1lOiAndXBkbl91ZF9ocGRuJywgXHJcbi8vICAgIGRvX0Q6ICBob3BlX0Rvd24sXHJcbi8vICAgIGlzT0s6ICBkb19VRCxcclxuICAgIGRvX1U6ICBkb191cCxcclxuICAgIGRvX0Q6ICBkb19kb3duLFxyXG4gICAgaXNORzogIGRvX2NhbmNlbCxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRfVURfbW9kZSgpOiB2b2lkIHtcclxuICAgIGdfY3Rscy5zZXQoY3Rsc191cGRuX3VwKTtcclxuICAgIGdfY3Rscy5zZXQoY3Rsc191cGRuX2RuKTtcclxuICAgIGdfY3Rscy5zZXQoY3Rsc191cGRuX3VkX2hwdXApO1xyXG4gICAgZ19jdGxzLnNldChjdGxzX3VwZG5fdWRfaHBkbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3RfVXBfbW9kZSgpOiB2b2lkIHtcclxuICAgIGlmIChnX3RlYW0ud2FsaygpLmdldF96KCkgPiAwKSB7XHJcbiAgICAgICAgZ19tdm0ubm90aWNlX21lc3NhZ2UoJ+S4iuOCiuODhuODrOODneODvOOCv+ODvOOBjOacieOCiuOBvuOBmeOAgueZu+OCiuOBvuOBmeOBi++8n+eZu+OCiyDih5Ig44CHIOeZu+OCieOBquOBhCDih5Ig4pyWJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdfbXZtLm5vdGljZV9tZXNzYWdlKCfooZfjgavmiLvjgorjgb7jgZnjgYvvvJ/miLvjgosg4oeSIOOAhyDmiLvjgonjgarjgYQg4oeSIOKclicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhblVwID0gdHJ1ZTtcclxuICAgIGNhbkRuID0gZmFsc2U7XHJcbiAgICBnX2N0bHMuYWN0KGN0bHNfdXBkbl91cCk7XHJcbiAgICBnX3Zzdy52aWV3KGdfdnN3Lk1vdmUoKSk7XHJcbiAgICBzZXRDYW52YXMzRENsaWNrKClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdF9Ebl9tb2RlKCk6IHZvaWQge1xyXG4gICAgZ19tdm0ubm90aWNlX21lc3NhZ2UoJ+S4i+OCiuODhuODrOODneODvOOCv+ODvOOBjOacieOCiuOBvuOBmeOAgumZjeOCiuOBvuOBmeOBi++8n+mZjeOCiuOCiyDih5Ig44CHIOmZjeOCiuOBquOBhCDih5Ig4pyWJyk7XHJcblxyXG4gICAgY2FuVXAgPSBmYWxzZTtcclxuICAgIGNhbkRuID0gdHJ1ZTtcclxuICAgIGdfY3Rscy5hY3QoY3Rsc191cGRuX2RuKTtcclxuICAgIGdfdnN3LnZpZXcoZ192c3cuTW92ZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdF9VRF9tb2RlKCk6IHZvaWQge1xyXG4gICAgZ19tdm0ubm90aWNlX21lc3NhZ2UoJ+S4iuS4i+ODhuODrOODneODvOOCv+ODvOOBjOacieOCiuOBvuOBmeOAgueZu+OCiuOBvuOBmeOBi++8n+eZu+OCi+KHkiDjgIcg6ZmN44KK44KLIOKHkiAo4oaT44Kt44O8KSDnp7vli5XjgZfjgarjgYQg4oeSIOKclicpO1xyXG5cclxuICAgIGNhblVwID0gdHJ1ZTtcclxuICAgIGNhbkRuID0gdHJ1ZTtcclxuICAgIGlmICghaXNVcCkgIGdfY3Rscy5hY3QoY3Rsc191cGRuX3VkX2hwdXApO1xyXG4gICAgZWxzZSAgICAgICAgZ19jdGxzLmFjdChjdGxzX3VwZG5fdWRfaHBkbik7XHJcbiAgICBnX3Zzdy52aWV3KGdfdnN3Lk1vdmUoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvX2NhbmNlbCgpOiB2b2lkIHtcclxuICAgIGdfbXZtLmNsZWFyX21lc3NhZ2UoKTtcclxuICAgIGFjdF9tb3ZlX21vZGUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZG9fdXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCByc2x0ID0gZ190ZWFtLndhbGsoKS5ob3BlX3BfdXAoKTtcclxuXHJcbiAgICAvL+OAgOS4iuOCiumajuauteOBjOWcsOS4i+S4gOmajuOBruWgtOWQiOOBr+OCu+ODvOODluOBl+OBpuOBi+OCieihlyjlhpLpmbrogIXjgq7jg6vjg4kp44G456e75YuV44GZ44KLXHJcbiAgICBpZiAocnNsdC5oYXNfaG9wZSAmJiByc2x0LnN1YmoueiA8IDApIHtcclxuICAgICAgICBkb19VRF9zYXZlKCkudGhlbihhc3luYyAoKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdG1wX3NhdmUoKTtcclxuICAgICAgICB9KS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdCA9IG5ldyBDX1VybE9wdCgpO1xyXG4gICAgICAgICAgICBvcHQuc2V0KCdtb2RlJywgJ2xvYWQnKTtcclxuICAgICAgICAgICAgb3B0LnNldCgncGlkJywgICBnX3N0YXJ0X2Vudi5waWQpO1xyXG4gICAgICAgICAgICBvcHQuc2V0KCdvcHQnLCAgIDEwMCk7XHJcbiAgICAgICAgICAgIFBPU1RfYW5kX21vdmVfcGFnZShnX3VybFtnX3VybF9tYWlfZ3VsZF0sIG9wdCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5LiK44KK6ZqO5q6144GM5Zyw5LiL5LqM6ZqO5Lul5LiL44Gu5aC05ZCI44Gv44K744O844OW44GX44Gm44GL44KJ5LiK44Gu6ZqO44Gr56e75YuV44GZ44KLXHJcbiAgICBpZiAoIXJzbHQuaGFzX2hvcGUgfHwgIWdfbWF6ZS53aXRoaW4ocnNsdC5zdWJqKSkge1xyXG4gICAgICAgIHJzbHQuZG9ORygpO1xyXG4gICAgICAgIGdfbXZtLmNsZWFyX21lc3NhZ2UoKTtcclxuICAgICAgICBhY3RfbW92ZV9tb2RlKCk7XHJcbiAgICAgICAgZG9fbW92ZV9ib3R0b21faGFsZignYmxpbmtfb2ZmJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvX1VEX3NhdmUoKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgIHJzbHQuZG9PSygpO1xyXG4gICAgICAgICAgICBnX212bS5jbGVhcl9tZXNzYWdlKCk7XHJcbiAgICAgICAgICAgIGFjdF9tb3ZlX21vZGUoKTtcclxuICAgICAgICAgICAgZG9fbW92ZV9ib3R0b21faGFsZignYmxpbmtfb2ZmJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvX2Rvd24oKTogdm9pZCB7XHJcbiAgICBjb25zdCByc2x0ID0gZ190ZWFtLndhbGsoKS5ob3BlX3BfZG93bigpO1xyXG4gICAgaWYgKCFyc2x0Lmhhc19ob3BlIHx8ICFnX21hemUud2l0aGluKHJzbHQuc3ViaikpIHtcclxuICAgICAgICByc2x0LmRvTkcoKTtcclxuICAgICAgICBnX212bS5jbGVhcl9tZXNzYWdlKCk7XHJcbiAgICAgICAgYWN0X21vdmVfbW9kZSgpO1xyXG4gICAgICAgIGRvX21vdmVfYm90dG9tX2hhbGYoJ2JsaW5rX29mZicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb19VRF9zYXZlKCkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICByc2x0LmRvT0soKTtcclxuICAgICAgICAgICAgZ19tdm0uY2xlYXJfbWVzc2FnZSgpO1xyXG4gICAgICAgICAgICBhY3RfbW92ZV9tb2RlKCk7XHJcbiAgICAgICAgICAgIGRvX21vdmVfYm90dG9tX2hhbGYoJ2JsaW5rX29mZicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkb19VRCgpOiB2b2lkIHtcclxuICAgIGlmICghY2FuVXAgfHwgIWNhbkRuKSByZXR1cm47XHJcbiAgICBcclxuICAgIGlmIChpc1VwKSBkb191cCgpO1xyXG4gICAgZWxzZSAgICAgIGRvX2Rvd24oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaG9wZV9VcCgpOiB2b2lkIHtcclxuICAgIGlmICghY2FuVXAgfHwgIWNhbkRuKSByZXR1cm47XHJcbiAgICBpc1VwID0gdHJ1ZTtcclxuICAgIGdfY3Rscy5hY3QoY3Rsc191cGRuX3VkX2hwZG4pO1xyXG5cclxuICAgIGlmIChnX3RlYW0ud2FsaygpLmdldF96KCkgPiAwKSB7XHJcbiAgICAgICAgZ19tdm0ubm90aWNlX21lc3NhZ2UoJ+eZu+OCiuOBvuOBmeOBi++8n+eZu+OCi+KHkiDjgIcg6ZmN44KK44KLIOKHkiAo4oaT44Kt44O8KSDnp7vli5XjgZfjgarjgYQg4oeSIOKclicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBnX212bS5ub3RpY2VfbWVzc2FnZSgn6KGX44Gr5oi744KK44G+44GZ44GL77yf5oi744KL4oeSIOOAhyDpmY3jgorjgosg4oeSICjihpPjgq3jg7wpIOenu+WLleOBl+OBquOBhCDih5Ig4pyWJyk7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGhvcGVfRG93bigpOiB2b2lkIHtcclxuICAgIGlmICghY2FuVXAgfHwgIWNhbkRuKSByZXR1cm47XHJcbiAgICBpc1VwID0gZmFsc2U7XHJcbiAgICBnX2N0bHMuYWN0KGN0bHNfdXBkbl91ZF9ocHVwKTtcclxuXHJcbiAgICBnX212bS5ub3RpY2VfbWVzc2FnZSgn6ZmN44KK44G+44GZ44GL77yf6ZmN44KK44KL4oeSIOOAhyDnmbvjgosg4oeSICjihpHjgq3jg7wpIOenu+WLleOBl+OBquOBhCDih5Ig4pyWJyk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRvX1VEX3NhdmUoKTogUHJvbWlzZTxhbnl8dW5kZWZpbmVkPiB7XHJcbiAgICBzZXRfZ19zYXZlKFxyXG4gICAgICAgIC8qIHNhdmVfaWQ6ICovICAgLTEsXHJcbiAgICAgICAgLyogdW5pcV9ubzogKi8gICAtMSxcclxuICAgICAgICAvKiB0aXRsZTogKi8gICAgICfoh6rli5Xkv53lrZjjg4fjg7zjgr8nLCBcclxuICAgICAgICAvKiBkZXRhaWw6ICovICAgICcnLFxyXG4gICAgICAgIC8qIHBvaW50OiAqLyAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYOOAjiR7Z19tYXplLmdldF9uYW1lKCl944CPIGAgXHJcbiAgICAgICAgICAgICAgICAgICAgKyBg5Zyw5LiLICR7Z190ZWFtLndhbGsoKS5nZXRfcGQoKS56ICsgMX3pmo7lsaQgYCBcclxuICAgICAgICAgICAgICAgICAgICArIGAoWDogJHtnX3RlYW0ud2FsaygpLmdldF9wZCgpLnh9LCBZOiAke2dfdGVhbS5nZXRfcGQoKS55fSlgLFxyXG4gICAgICAgIC8qIGF1dG9fbW9kZTogKi8gdHJ1ZSxcclxuICAgICk7XHJcbiAgICByZXR1cm4gVURfc2F2ZSgpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2V0Q2FudmFzM0RDbGljaygpOiB2b2lkIHtcclxuICAgIGlmIChnX2RzPy5jYW52YXMgPT09IG51bGwpICAgICByZXR1cm47XHJcbiAgICBnX2RzLmNhbnZhcy5vbmNsaWNrID0gY2FudmFzM0RjbGljaztcclxufVxyXG5mdW5jdGlvbiBjbHJDYW52YXMzRENsaWNrKCk6IHZvaWQge1xyXG4gICAgaWYgKGdfZHM/LmNhbnZhcyA9PT0gbnVsbCkgICAgIHJldHVybjtcclxuICAgIGdfZHMuY2FudmFzLm9uY2xpY2sgPSAoKT0+e307XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbnZhczNEY2xpY2soZXY6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChnX2RzPy5jYW52YXMgPT09IG51bGwpICAgICByZXR1cm47XHJcbiAgICBpZiAoZXYudGFyZ2V0ICE9PSBnX2RzLmNhbnZhcykgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGN2cyA9IGdfZHMuY2FudmFzO1xyXG4vL2RlYnVnICAgIGFsZXJ0KGB4PSR7KGV2Lm9mZnNldFg/Py0xKX0sIHk9JHsoZXYub2Zmc2V0WT8/LTEpfWApO1xyXG5cclxuICAgIGNvbnN0IGxlZnRfcGFuZV9yICA9IGN2cy5jbGllbnRXaWR0aCAgKiAwLjM1O1xyXG4gICAgY29uc3QgcmdodF9wYW5lX2wgID0gY3ZzLmNsaWVudFdpZHRoICAqIDAuNjU7XHJcbiAgICBjb25zdCBiYWNrX3BhbmVfdSAgPSBjdnMuY2xpZW50SGVpZ2h0ICogMC41MDtcclxuXHJcbiAgICAvLyDjgq3jg6Pjg7Pjg5Djgrnjga7lt6blgbRcclxuICAgIGlmIChldi5vZmZzZXRYIDwgbGVmdF9wYW5lX3IpIHsoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25fYnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpPy5jbGljaygpOyByZXR1cm47fVxyXG4gICAgLy8g44Kt44Oj44Oz44OQ44K544Gu5Y+z5YG0XHJcbiAgICBpZiAoZXYub2Zmc2V0WCA+IHJnaHRfcGFuZV9sKSB7KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5X2J0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTsgcmV0dXJuO31cclxuICAgIC8v44Kt44Oj44Oz44OQ44K544Gu5Lit5aSu5LiKKOWJjemAsilcclxuICAgIGlmIChldi5vZmZzZXRZIDwgYmFja19wYW5lX3UpIHsoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VfYXJyJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpPy5jbGljaygpOyByZXR1cm47fVxyXG4gICAgLy8g44Kt44Oj44Oz44OQ44K544Gu5Lit5aSu5LiLKOW+jOmAgClcclxuICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZF9hcnInKSBhcyBIVE1MQnV0dG9uRWxlbWVudCk/LmNsaWNrKCk7IHJldHVybjtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBfaXNOdW0gfSAgICAgICAgICBmcm9tIFwiLi4vZF91dGwvRl9NYXRoXCI7XHJcbmltcG9ydCB7IENfQ3RsQ3Vyc29yIH0gICAgIGZyb20gXCIuLi9kX2N0bC9DX0N0bEN1cnNvclwiO1xyXG5pbXBvcnQgeyBkb19tb3ZlX2JvdHRvbV9oYWxmLCBhY3RfbW92ZV9tb2RlIH0gZnJvbSBcIi4vRl9zZXRfbW92ZV9tb2RlXCI7XHJcbmltcG9ydCB7IGFjdF9sb2FkX21vZGUsIGFjdF9zYXZlX21vZGUgICB9ICAgICBmcm9tIFwiLi9GX3NldF9zYXZlX21vZGVcIjtcclxuaW1wb3J0IHsgYWN0X212cHRfbW9kZX0gICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCIuL0Zfc2V0X212cHRfbW9kZVwiO1xyXG5pbXBvcnQgeyBnX2N0bHMsIGdfY3ZtLCBnX3ZzdyB9ICAgICAgICAgICAgICAgZnJvbSBcIi4vZ2xvYmFsX2Zvcl9tYXplXCI7XHJcblxyXG5sZXQgICBkb21fbWVudV9saXN0OiAgSFRNTFVMaXN0RWxlbWVudDtcclxubGV0ICAgbWVudV9saXN0X2Nyc3I6IENfQ3RsQ3Vyc29yO1xyXG5sZXQgICBpZHg6ICAgbnVtYmVyICAgPSAgIDA7XHJcblxyXG5jb25zdCBjdGxzX21lbnVfbm9yID0ge1xyXG4gICAgbmFtZTogJ21lbnVfbm9yJywgXHJcbiAgICBkb19VOiAgZG9fVSxcclxuICAgIGRvX0Q6ICBkb19ELFxyXG4gICAgaXNPSzogIGlzT0ssXHJcbiAgICBpc05HOiAgaXNORyxcclxuICAgIGlzUlQ6ICBpc05HLFxyXG4gICAgY3BSVDogIGlzTkcsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0X21lbnVfbW9kZSgpOiB2b2lkIHtcclxuICAgIGluaXRfdmlldygpO1xyXG4gICAgaW5pdF9jdGxzKCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdF9tZW51X21vZGUoKTogdm9pZCB7XHJcbiAgICBpZHggPSAwO1xyXG4gICAgbWVudV9saXN0X2Nyc3Iuc2V0X3BvcyhpZHgpO1xyXG4gICAgZ19jdGxzLmFjdChjdGxzX21lbnVfbm9yKTtcclxuICAgIGdfdnN3LnZpZXcoZ192c3cuTWVudSgpKTsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRfdmlldygpOiBib29sZWFuIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbWVudV9saXN0ICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudV9saXN0JykgYXMgSFRNTFVMaXN0RWxlbWVudDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1lbnVfbGlzdC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gbWVudV9saXN0LmNoaWxkcmVuW2ldIGFzIEhUTUxMSUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9PS19tZW51X0ZuYywgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9tX21lbnVfbGlzdCAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudV9saXN0JykgYXMgSFRNTFVMaXN0RWxlbWVudDtcclxuICAgICAgICBtZW51X2xpc3RfY3JzciA9IENfQ3RsQ3Vyc29yLmdldE9iaihkb21fbWVudV9saXN0KTtcclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgYWxlcnQoJ0Vycm9yOiAnICsgZXJyKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5mdW5jdGlvbiBfT0tfbWVudV9GbmModGhpczogSFRNTExJRWxlbWVudCwgZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgX19pc09LKHRoaXMuaWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0X2N0bHMoKTogdm9pZCB7XHJcbiAgICBnX2N0bHMuc2V0KGN0bHNfbWVudV9ub3IpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaXNPSygpOiB2b2lkIHtcclxuICAgIGNvbnN0IG1lbnVfbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51X2xpc3QnKSBhcyBIVE1MVUxpc3RFbGVtZW50O1xyXG4gICAgaWYgKG1lbnVfbGlzdCA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGNoaWxkcmVuID0gbWVudV9saXN0LmNoaWxkcmVuO1xyXG4gICAgaWYgKGlkeCA8IDAgfHwgaWR4ID4gY2hpbGRyZW4ubGVuZ3RoIC0gMSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGxpID0gY2hpbGRyZW4uaXRlbShpZHgpIGFzIEhUTUxMSUVsZW1lbnQ7XHJcbiAgICBfX2lzT0sobGkuaWQpO1xyXG59XHJcbmZ1bmN0aW9uIF9faXNPSyhpZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKGlkKSB7XHJcbiAgICAgICAgY2FzZSAnbWVudV9sb2FkJzogZG9fbG9hZCgpO3JldHVybjtcclxuICAgICAgICBjYXNlICdtZW51X3NhdmUnOiBkb19zYXZlKCk7cmV0dXJuO1xyXG4gICAgICAgIGNhc2UgJ21lbnVfbXZwdCc6IGRvX212cHQoKTtyZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTkcoKTogdm9pZCB7XHJcbiAgICBnX2N2bS5jbGVhcl9tZXNzYWdlKCk7XHJcbiAgICBhY3RfbW92ZV9tb2RlKCk7XHJcbiAgICBkb19tb3ZlX2JvdHRvbV9oYWxmKCdibGlua19vZmYnKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGRvX1UoKTogdm9pZCB7XHJcbiAgICBnX2N2bS5jbGVhcl9tZXNzYWdlKCk7XHJcbiAgICBpZHggPSBtZW51X2xpc3RfY3Jzci5wb3NfVSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkb19EKCk6IHZvaWQge1xyXG4gICAgZ19jdm0uY2xlYXJfbWVzc2FnZSgpO1xyXG4gICAgaWR4ID0gbWVudV9saXN0X2Nyc3IucG9zX0QoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZG9fbG9hZCgpOiB2b2lkIHtcclxuICAgIGFjdF9sb2FkX21vZGUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZG9fc2F2ZSgpOiB2b2lkIHtcclxuICAgIGFjdF9zYXZlX21vZGUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZG9fbXZwdCgpOiB2b2lkIHtcclxuICAgIGFjdF9tdnB0X21vZGUoKTtcclxufVxyXG4iLCJcclxuICAgIC8qKioqKioqKioqKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqICoqKioqKioqKioqKioqL1xyXG4gICAgLyogIEhUTUxQcmVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7ICAgICovXHJcbiAgICAvKiAgSFRNTEVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnaWQnLCAndV9hcnJhdycpOyAgICAgICAgKi9cclxuICAgIC8qICBIVE1MRWxlbWVudD8uc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnZ3JpZCcpOyAqL1xyXG4gICAgLyogIEhUTUxFbGVtZW50Py5hcHBlbmRDaGlsZChIVE1MRWxlbWVudCk7ICAgICAgICAgICAgICovXHJcbiAgICAvKioqKioqKioqKioqICoqKioqKioqKioqKioqKioqKioqKioqKioqKiAqKioqKioqKioqKioqKi9cclxuXHJcbmltcG9ydCB7IGluaXRfbW92ZV9tb2RlIH0gZnJvbSBcIi4vRl9zZXRfbW92ZV9tb2RlXCI7XHJcbmltcG9ydCB7IGluaXRfbWVudV9tb2RlIH0gZnJvbSBcIi4vRl9zZXRfbWVudV9tb2RlXCI7XHJcbmltcG9ydCB7IGluaXRfbXZwdF9tb2RlIH0gZnJvbSBcIi4vRl9zZXRfbXZwdF9tb2RlXCI7XHJcbmltcG9ydCB7IGluaXRfU0xfbW9kZSB9ICAgZnJvbSBcIi4vRl9zZXRfc2F2ZV9tb2RlXCI7XHJcbmltcG9ydCB7IGluaXRfVURfbW9kZSB9ICAgZnJvbSBcIi4vRl9zZXRfVURfbW9kZVwiO1xyXG5pbXBvcnQgeyBUX0N0bHNNb2RlIH0gICAgICAgICAgZnJvbSBcIi4vVF9DdGxzTW9kZVwiO1xyXG5pbXBvcnQgeyBnX2N0bHMsIGdfY3Rsc19tb2RlIH0gZnJvbSBcIi4vZ2xvYmFsX2Zvcl9tYXplXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdF9hbGxfbW9kZSgpOiB2b2lkIHtcclxuICAgIGdfY3Rscy5kZWFjdCgpO1xyXG4gICAgaW5pdF9tb3ZlX21vZGUoKTtcclxuICAgIGluaXRfbWVudV9tb2RlKCk7XHJcbiAgICBpbml0X212cHRfbW9kZSgpO1xyXG4gICAgaW5pdF9TTF9tb2RlKCk7XHJcbiAgICBpbml0X1VEX21vZGUoKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlX2NvbnRyb2xsZXMoKTogdm9pZCB7XHJcbi8vICAgIGdfY3Rsc19tb2RlWzBdID0gVF9DdGxzTW9kZS5Ob3A7XHJcbiAgICBnX2N0bHMuZGVhY3QoKTtcclxuICAgIGNvbnN0IG1vdmVfY3RsX3ZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFuZV9jdGxzX2JvYWQnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIG1vdmVfY3RsX3ZpZXc/LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcclxufVxyXG4iLCJpbXBvcnQgeyBUX016S2luZCB9ICAgICAgICAgICAgICAgICAgIGZyb20gXCIuLi9kX21kbC9UX016S2luZFwiO1xyXG5pbXBvcnQgeyBJX0hvcGVBY3Rpb24gfSAgICAgICAgICAgICAgIGZyb20gXCIuLi9kX21kbC9JX0NvbW1vblwiO1xyXG5pbXBvcnQgeyBDX1BvaW50IH0gICAgICAgICAgICAgICAgICAgIGZyb20gXCIuLi9kX21kbC9DX1BvaW50XCI7XHJcbmltcG9ydCB7IGdfZGVidWcgfSAgICAgICAgICAgICAgICAgICAgZnJvbSBcIi4uL2RfY21uL2dsb2JhbFwiO1xyXG5pbXBvcnQgeyBpbnN0YW50X2xvYWQsIGluc3RhbnRfc2F2ZSB9IGZyb20gXCIuLi9kX2Ntbi9GX2xvYWRfYW5kX3NhdmVcIjtcclxuaW1wb3J0IHsgYWN0X21lbnVfbW9kZSB9ICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCIuL0Zfc2V0X21lbnVfbW9kZVwiO1xyXG5pbXBvcnQgeyBhY3RfVXBfbW9kZSwgYWN0X0RuX21vZGUsIGFjdF9VRF9tb2RlIH0gZnJvbSBcIi4vRl9zZXRfVURfbW9kZVwiO1xyXG5pbXBvcnQgeyBkZWNvZGVfYWxsLCBzZXRfZ19zYXZlIH0gICAgICAgICAgICAgICAgZnJvbSBcIi4vRl9zZXRfc2F2ZV9tb2RlXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlfbWF6ZUNofSAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9GX2Rpc3BsYXlfbWF6ZUNoXCI7IFxyXG5pbXBvcnQgeyBkaXNwbGF5X21hemUzRCwgXHJcbiAgICAgICAgIG1hemUzRF9ibGlua19vbl9kaXJlY3Rpb24sIG1hemUzRF9ibGlua19vZmZfZGlyZWN0aW9uIH0gICBmcm9tIFwiLi9GX2Rpc3BsYXlfbWF6ZTNEXCI7XHJcbmltcG9ydCB7IFxyXG4gICAgZ19tdm0sIFxyXG4gICAgZ192c3csIFxyXG4gICAgZ19tYXplLCBcclxuICAgIGdfdGVhbSxcclxuICAgIGRvX2xvYWRfYm90dG9tX2hhbGYsXHJcbiAgICBnX2N0bHMsXHJcbiAgICBnX2RzLCBcclxufSBmcm9tIFwiLi9nbG9iYWxfZm9yX21hemVcIjtcclxuaW1wb3J0IHsgZGlzcGxheV9tYXplMkQgfSBmcm9tIFwiLi9GX2Rpc3BsYXlfbWF6ZTJEXCI7XHJcblxyXG5jb25zdCBjdGxzX21vdmVfbm9yID0ge1xyXG4gICAgbmFtZTogJ21vdmVfbm9yJywgXHJcbiAgICBkb19VOiAgZ29fRixcclxuICAgIGRvX0Q6ICBnb19CLFxyXG4gICAgZG9VTDogIGdvX0wsXHJcbiAgICBkb1VSOiAgZ29fUixcclxuICAgIGRvX0w6ICB0cl9MLFxyXG4gICAgZG9fUjogIHRyX1IsXHJcbiAgICBtZW51OiAgbWVudSxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRfbW92ZV9tb2RlKCk6IHZvaWQge1xyXG4gICAgZ19jdGxzLnNldChjdGxzX21vdmVfbm9yKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdF9tb3ZlX21vZGUoKTogdm9pZCB7XHJcbiAgICBnX2N0bHMuYWN0KGN0bHNfbW92ZV9ub3IpO1xyXG4gICAgZ192c3cudmlldyhnX3Zzdy5Nb3ZlKCkpO1xyXG4gICAgc2V0Q2FudmFzM0RDbGljaygpO1xyXG59XHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqICoqKioqKioqKioqKioqL1xyXG4gICAgLyogIEhUTUxQcmVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7ICAgICovXHJcbiAgICAvKiAgSFRNTEVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnaWQnLCAndV9hcnJhdycpOyAgICAgICAgKi9cclxuICAgIC8qICBIVE1MRWxlbWVudD8uc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnZ3JpZCcpOyAqL1xyXG4gICAgLyogIEhUTUxFbGVtZW50Py5hcHBlbmRDaGlsZChIVE1MRWxlbWVudCk7ICAgICAgICAgICAgICovXHJcbiAgICAvKioqKioqKioqKioqICoqKioqKioqKioqKioqKioqKioqKioqKioqKiAqKioqKioqKioqKioqKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkb19pbnN0YW50X2xvYWQoKTogdm9pZCB7XHJcbiAgICBpbnN0YW50X2xvYWQoKS50aGVuKChqc29uT2JqOmFueSk9PnsgIFxyXG4gICAgICAgIGRlY29kZV9hbGwoanNvbk9iaj8uc2F2ZSk7XHJcbiAgICAgICAgZG9fbG9hZF9ib3R0b21faGFsZign44Ot44O844OJ44GX44G+44GX44GfJyk7ICBcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZG9faW5zdGFudF9zYXZlKCk6IHZvaWQge1xyXG4gICAgc2V0X2dfc2F2ZShcclxuICAgICAgICAvKiBzYXZlX2lkOiAqLyAgIC0xLFxyXG4gICAgICAgIC8qIHVuaXFfbm86ICovICAgLTEsXHJcbiAgICAgICAgLyogdGl0bGU6ICovICAgICAn57Ch5piT5L+d5a2Y44OH44O844K/JywgXHJcbiAgICAgICAgLyogZGV0YWlsOiAqLyAgICAnJywgXHJcbiAgICAgICAgICAgICAgICAgICAgYOOAjiR7Z19tYXplLmdldF9uYW1lKCl944CPIGAgXHJcbiAgICAgICAgICAgICAgICAgICAgKyBg5Zyw5LiLICR7Z190ZWFtLmdldF9wZCgpLnogKyAxfemajuWxpCBgIFxyXG4gICAgICAgICAgICAgICAgICAgICsgYChYOiAke2dfdGVhbS5nZXRfcGQoKS54fSwgWTogJHtnX3RlYW0uZ2V0X3BkKCkueX0pYCxcclxuICAgICAgICAvKiBhdXRvX21vZGU6ICovIHRydWUsXHJcbiAgICApO1xyXG4gICAgaW5zdGFudF9zYXZlKCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjbGVhcl9tYXNrX2Fyb3VuZF90aGVfdGVhbSgpOiB2b2lkIHtcclxuICAgIGdfbWF6ZS5jbGVhcl9tYXNrX2Fyb3VuZF90aGVfdGVhbShnX3RlYW0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VfdW5leHBfdG9fZmxvb3IocDogQ19Qb2ludCk6IHZvaWQge1xyXG4gICAgZ19tYXplLmNoYW5nZV91bmV4cF90b19mbG9vcihwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ29fRigpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJzbHQgPSBnX3RlYW0ud2FsaygpLmhvcGVfcF9md2QoKTtcclxuICAgIG1vdmVfY2hlY2socnNsdCk7XHJcbiAgICBkb19tb3ZlX2JvdHRvbV9oYWxmKCdibGlua19vbicpO1xyXG59XHJcbmZ1bmN0aW9uIGdvX0IoKTogdm9pZCB7XHJcbiAgICBjb25zdCByc2x0ID0gZ190ZWFtLndhbGsoKS5ob3BlX3BfYmFrKCk7XHJcbiAgICBtb3ZlX2NoZWNrKHJzbHQpO1xyXG4gICAgZG9fbW92ZV9ib3R0b21faGFsZignYmxpbmtfb24nKTtcclxufVxyXG5mdW5jdGlvbiBnb19MKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcnNsdCA9IGdfdGVhbS53YWxrKCkuaG9wZV9wX2xmdCgpO1xyXG4gICAgbW92ZV9jaGVjayhyc2x0KTtcclxuICAgIGRvX21vdmVfYm90dG9tX2hhbGYoJ2JsaW5rX29uJyk7XHJcbn1cclxuZnVuY3Rpb24gZ29fUigpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJzbHQgPSBnX3RlYW0ud2FsaygpLmhvcGVfcF9yZ3QoKTtcclxuICAgIG1vdmVfY2hlY2socnNsdCk7XHJcbiAgICBkb19tb3ZlX2JvdHRvbV9oYWxmKCdibGlua19vbicpO1xyXG59XHJcbmZ1bmN0aW9uIHRyX1IoKTogdm9pZCB7XHJcbiAgICBjb25zdCByc2x0ID0gZ190ZWFtLndhbGsoKS5ob3BlX3R1cm5fcigpO1xyXG4gICAgbW92ZV9jaGVjayhyc2x0KTtcclxuICAgIGRvX21vdmVfYm90dG9tX2hhbGYoJ2JsaW5rX29mZicpO1xyXG59XHJcbmZ1bmN0aW9uIHRyX0woKTogdm9pZCB7XHJcbiAgICBjb25zdCByc2x0ID0gZ190ZWFtLndhbGsoKS5ob3BlX3R1cm5fbCgpO1xyXG4gICAgbW92ZV9jaGVjayhyc2x0KTtcclxuICAgIGRvX21vdmVfYm90dG9tX2hhbGYoJ2JsaW5rX29mZicpO1xyXG59XHJcbmZ1bmN0aW9uIG1vdmVfY2hlY2socjogSV9Ib3BlQWN0aW9uKTogdm9pZCB7XHJcbiAgICBnX212bS5jbGVhcl9tZXNzYWdlKCk7XHJcbiAgICAvLyDlkajlm7Ljgavjgqrjg5bjgrjjgqfjgYzmnInjgozjgbDjgqrjg5bjgrjjgqfmjqXov5Hlh6bnkIZcclxuICAgIGFyb3VuZF9vYmoocik7XHJcblxyXG4gICAgaWYgKCFyLmhhc19ob3BlKSByZXR1cm47XHJcbiAgICBpZiAoci5ob3BlID09ICdUdXJuJykge1xyXG4gICAgICAgIHIuZG9PSygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChyLmhvcGUgPT0gJ01vdmUnKSB7XHJcbiAgICAgICAgY29uc3QgY2VsbCA9IGdfbWF6ZS5nZXRfY2VsbChyLnN1YmopO1xyXG5cclxuICAgICAgICAvLyDpgLLooYzmlrnlkJHjgYzlo4HnrYnjgarjgonnp7vli5XkuI3lj69cclxuICAgICAgICBpZiAoIWNlbGw/LmdldE9iaigpLmNhblRocm91Z2goKSkge1xyXG4gICAgICAgICAgICBkb250X21vdmUocik7cmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvYmogPSBnX21hemUuZ2V0X29iaihyLnN1YmopO1xyXG4gICAgICAgIGlmIChvYmogIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKG9iai5jYW5UaHJvdWdoKCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIOmAsuihjOaWueWQkeOBq+OCquODluOCuOOCp+OBjOacieOCiumAmuOCiuaKnOOBkeWPr+iDveOBquOCiVxyXG4gICAgICAgICAgICAgICAgLy8g56e75YuV44GX44Gm44Kq44OW44K444Kn5Yem55CGXHJcbiAgICAgICAgICAgICAgICByLmRvT0soKTtcclxuICAgICAgICAgICAgICAgIGFjdGlvbl9vYmooKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOmAsuihjOaWueWQkeOBq+OCquODluOCuOOCp+OBjOacieOCiumAmuOCiuaKnOOBkeS4jeiDveOBquOCiVxyXG4gICAgICAgICAgICAgICAgLy8g56e75YuV44Gb44Ga44Gr44Kq44OW44K444Kn5o6l6L+R5Yem55CGKOS7pemZjeOBrumajuauteWHpueQhuetieOBr+OCueODq+ODvClcclxuICAgICAgICAgICAgICAgIGRvbnRfbW92ZShyKTtcclxuICAgICAgICAgICAgICAgIGFyb3VuZF9vYmoocik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDpgLLooYzmlrnlkJHjgavjgqrjg5bjgrjjgqfjgYznhKHjgZHjgozjgbDnp7vli5VcclxuICAgICAgICAgICAgci5kb09LKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOenu+WLleWFiOOBjOmajuauteOBquOCiemajuauteOBruWHpueQhlxyXG4gICAgICAgIGNvbnN0IGtpbmQgPSBjZWxsPy5nZXRLaW5kKCk7XHJcbiAgICAgICAgc3dpdGNoIChraW5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyVXA6XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyRG46XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyVUQ6XHJcbiAgICAgICAgICAgICAgICBkb19zdGFpcnNfbW90aW9uKGtpbmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn0gXHJcbmZ1bmN0aW9uIGRvbnRfbW92ZShyOiBJX0hvcGVBY3Rpb24pOiB2b2lkIHtcclxuICAgIGdfbXZtLm5vcm1hbF9tZXNzYWdlKCfpgLLjgoHjgarjgYTvvIHvvIjnrJHvvIknKTtcclxuICAgIHIuZG9ORygpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbi8vIOOCquODluOCuOOCp+aOpei/keWHpueQhlxyXG5mdW5jdGlvbiBhcm91bmRfb2JqKHI6IElfSG9wZUFjdGlvbik6IHZvaWQge30gXHJcbi8vIOOCquODluOCuOOCp+WHpueQhlxyXG5mdW5jdGlvbiBhY3Rpb25fb2JqKCk6IHZvaWQge31cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkb19tb3ZlX2JvdHRvbV9oYWxmKGJsaW5rX21vZGU6IHN0cmluZyk6IHZvaWQgeyAgIC8vYWxlcnQoJ0Zsb29yPyA9ICcgKyBnX3RlYW0uZ2V0X3AoKS56KTtcclxuICAgIGNoYW5nZV91bmV4cF90b19mbG9vcihnX3RlYW0uZ2V0X3BkKCkpO1xyXG4gICAgZGlzcGxheV9tYXplM0QoKTtcclxuICAgIGRpc3BsYXlfbWF6ZV9uYW1lKCk7XHJcbiAgICBpZiAoYmxpbmtfbW9kZSA9PT0gJ2JsaW5rX29uJykgbWF6ZTNEX2JsaW5rX29uX2RpcmVjdGlvbigpO1xyXG4gICAgZWxzZSBtYXplM0RfYmxpbmtfb2ZmX2RpcmVjdGlvbigpO1xyXG4gICAgaWYgKCFtYXNrX2NsZWFyZWQoKSkge1xyXG4gICAgICAgIGNsZWFyX21hc2tfYXJvdW5kX3RoZV90ZWFtKCk7IFxyXG4gICAgICAgIGlmIChtYXNrX2NsZWFyZWQoKSkgYWxlcnQoJ+OBk+OBrumajuOCkuWItuimh+OBl+OBvuOBl+OBn++8ge+8gScpIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuICAgIH1cclxuICAgIGRpc3BsYXlfbWF6ZTJEKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKioqKioqKioqKiDkvZzmiJDkuK0gKioqKioqKioqKioqKlxyXG4gICAgZGlzcGxheV9tYXplQ2goKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFza19jbGVhcmVkKCk6IGJvb2xlYW4ge3JldHVybiBnX21hemUuaXNfY2xlYXJlZChnX3RlYW0uZ2V0X3BkKCkpfVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheV9tYXplX25hbWUoKTogdm9pZCB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF6ZV92aWV3M0RfbWF6ZV9uYW1lX2luZm8nKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICBwLmlubmVySFRNTCA9IGdfbWF6ZS5nZXRfbmFtZSgpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7fTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldENhbnZhczNEQ2xpY2soKTogdm9pZCB7XHJcbiAgICBpZiAoZ19kcz8uY2FudmFzID09PSBudWxsKSAgICAgcmV0dXJuO1xyXG4gICAgZ19kcy5jYW52YXMub25jbGljayA9IGNhbnZhczNEY2xpY2s7XHJcbn1cclxuZnVuY3Rpb24gY2xyQ2FudmFzM0RDbGljaygpOiB2b2lkIHtcclxuICAgIGlmIChnX2RzPy5jYW52YXMgPT09IG51bGwpICAgICByZXR1cm47XHJcbiAgICBnX2RzLmNhbnZhcy5vbmNsaWNrID0gKCk9Pnt9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYW52YXMzRGNsaWNrKGV2OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZ19kcz8uY2FudmFzID09PSBudWxsKSAgICAgcmV0dXJuO1xyXG4gICAgaWYgKGV2LnRhcmdldCAhPT0gZ19kcy5jYW52YXMpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBjdnMgPSBnX2RzLmNhbnZhcztcclxuLy9kZWJ1ZyAgICBhbGVydChgeD0keyhldi5vZmZzZXRYPz8tMSl9LCB5PSR7KGV2Lm9mZnNldFk/Py0xKX1gKTtcclxuXHJcbiAgICBjb25zdCBsZWZ0X3BhbmVfciAgPSBjdnMuY2xpZW50V2lkdGggICogMC4yNTtcclxuICAgIGNvbnN0IHJnaHRfcGFuZV9sICA9IGN2cy5jbGllbnRXaWR0aCAgKiAwLjc1O1xyXG4gICAgY29uc3QgYmFja19wYW5lX3UgID0gY3ZzLmNsaWVudEhlaWdodCAqIDAuODA7XHJcblxyXG4gICAgLy8g44Kt44Oj44Oz44OQ44K544Gu5bem5YG0XHJcbiAgICBpZiAoZXYub2Zmc2V0WCA8IGxlZnRfcGFuZV9yKSB7KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsX2FycicpIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTsgcmV0dXJuO31cclxuICAgIC8vIOOCreODo+ODs+ODkOOCueOBruWPs+WBtFxyXG4gICAgaWYgKGV2Lm9mZnNldFggPiByZ2h0X3BhbmVfbCkgeyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncl9hcnInKSBhcyBIVE1MQnV0dG9uRWxlbWVudCk/LmNsaWNrKCk7IHJldHVybjt9XHJcbiAgICAvL+OCreODo+ODs+ODkOOCueOBruS4reWkruS4iijliY3pgLIpXHJcbiAgICBpZiAoZXYub2Zmc2V0WSA8IGJhY2tfcGFuZV91KSB7KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1X2FycicpIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTsgcmV0dXJuO31cclxuICAgIC8vIOOCreODo+ODs+ODkOOCueOBruS4reWkruS4iyjlvozpgIApXHJcbiAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RfYXJyJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpPy5jbGljaygpOyByZXR1cm47XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZG9fc3RhaXJzX21vdGlvbihraW5kOiBUX016S2luZCk6IHZvaWQge1xyXG4gICAgc3dpdGNoIChraW5kKSB7XHJcbiAgICAgICAgY2FzZSBUX016S2luZC5TdHJVcDpcclxuICAgICAgICAgICAgY2xyQ2FudmFzM0RDbGljaygpO1xyXG4gICAgICAgICAgICBhY3RfVXBfbW9kZSgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFRfTXpLaW5kLlN0ckRuOlxyXG4gICAgICAgICAgICBjbHJDYW52YXMzRENsaWNrKCk7XHJcbiAgICAgICAgICAgIGFjdF9Ebl9tb2RlKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVF9NektpbmQuU3RyVUQ6XHJcbiAgICAgICAgICAgIGNsckNhbnZhczNEQ2xpY2soKTtcclxuICAgICAgICAgICAgYWN0X1VEX21vZGUoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtZW51KCk6IHZvaWQge1xyXG4gICAgY2xyQ2FudmFzM0RDbGljaygpO1xyXG4gICAgZ19tdm0uY2xlYXJfbWVzc2FnZSgpO1xyXG4gICAgYWN0X21lbnVfbW9kZSgpO1xyXG59XHJcbiIsImltcG9ydCB7IGFjdF9tZW51X21vZGUgfSAgICAgICBmcm9tIFwiLi9GX3NldF9tZW51X21vZGVcIjtcclxuaW1wb3J0IHsgZ19jdGxzLCBnX21hemUsIGdfY3ZtLCBnX3RlYW0sIGdfdnN3IH0gZnJvbSBcIi4vZ2xvYmFsX2Zvcl9tYXplXCI7XHJcblxyXG5pbXBvcnQgeyBDX1VybE9wdCB9ICAgICAgICAgICAgZnJvbSBcIi4uL2RfdXRsL0NfVXJsT3B0XCI7XHJcbmltcG9ydCB7IHRtcF9zYXZlIH0gICAgICAgICAgICBmcm9tIFwiLi4vZF9jbW4vRl9sb2FkX2FuZF9zYXZlXCI7XHJcbmltcG9ydCB7IFBPU1RfYW5kX21vdmVfcGFnZSB9ICBmcm9tIFwiLi4vZF9jbW4vRl9QT1NUXCI7XHJcbmltcG9ydCB7IGdfbXlfdXJsLCBnX3NhdmUsIGdfc3RhcnRfZW52LCBnX3VybCwgZ191cmxfbWFpX2d1bGQgfSBmcm9tIFwiLi4vZF9jbW4vZ2xvYmFsXCI7XHJcblxyXG5sZXQgbW9kZTogc3RyaW5nO1xyXG5cclxuY29uc3QgY3Rsc19tdnB0X25vciA9IHtcclxuICAgIG5hbWU6ICdtdnB0X25vcicsIFxyXG4gICAgaXNPSzogIGlzT0ssXHJcbiAgICBpc05HOiAgaXNORyxcclxuICAgIGNwT0s6ICBpc09LLFxyXG4gICAgY3BORzogIGlzTkcsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0X212cHRfbW9kZSgpOiB2b2lkIHtcclxuICAgIGdfY3Rscy5zZXQoY3Rsc19tdnB0X25vcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3RfbXZwdF9tb2RlKCk6IHZvaWQge1xyXG4gICAgbW9kZSA9ICdjaGVrJztcclxuICAgIGdfY3ZtLm5vdGljZV9tZXNzYWdlKCfmnKzlvZPjgavooZfjgbjmiLvjgorjgb7jgZnjgYvvvJ/jgZPjga7loLTmiYDjgavjga/jgq7jg6vjg4njgYvjgonlvqnluLDjgafjgY3jgb7jgZknKTtcclxuICAgIGdfY3Rscy5hY3QoY3Rsc19tdnB0X25vcik7XHJcbiAgICBnX3Zzdy52aWV3KGdfdnN3Lk12UHQoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT0soKTogdm9pZCB7XHJcbiAgICBzd2l0Y2gobW9kZSkge1xyXG4gICAgICAgIGNhc2UgJ3ZpZXcnOlxyXG4gICAgICAgICAgICBnX2N2bS5ub3RpY2VfbWVzc2FnZSgn5pys5b2T44Gr6KGX44G45oi744KK44G+44GZ44GL77yf44GT44Gu5aC05omA44Gr44Gv44Ku44Or44OJ44GL44KJ5b6p5biw44Gn44GN44G+44GZJyk7XHJcbiAgICAgICAgICAgIG1vZGUgPSAnY2hlayc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2NoZWsnOlxyXG4gICAgICAgICAgICBnX2N2bS5ub3RpY2VfbWVzc2FnZSgn6KGX44G45oi744KK44G+44GX44GfJyk7XHJcbiAgICAgICAgICAgIG1vZGUgPSAndmlldyc7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtdnB0ID0gZ190ZWFtLmdldF9sb2MoKS5jbG9uZSgpO1xyXG4gICAgICAgICAgICBtdnB0LnNldF91cmwoZ19teV91cmwpO1xyXG4gICAgICAgICAgICBtdnB0LnNldF90aWQoZ190ZWFtLnVpZCgpKTtcclxuICAgICAgICAgICAgbXZwdC5zZXRfdWlkKGdfbWF6ZS51aWQoKSk7XHJcblxyXG4gICAgICAgICAgICBnX3NhdmUuYWxsX212cHRbbXZwdC51aWQoKV0gICA9IG12cHQ7XHJcbiAgICAgICAgICAgIGdfc2F2ZS5hbGxfbWF6ZVtnX21hemUudWlkKCldID0gZ19tYXplO1xyXG5cclxuICAgICAgICAgICAgdG1wX3NhdmUoKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcHQgPSBuZXcgQ19VcmxPcHQoKTtcclxuICAgICAgICAgICAgICAgIG9wdC5zZXQoJ21vZGUnLCAnbG9hZCcpO1xyXG4gICAgICAgICAgICAgICAgb3B0LnNldCgncGlkJywgICBnX3N0YXJ0X2Vudi5waWQpO1xyXG4gICAgICAgICAgICAgICAgb3B0LnNldCgnb3B0JywgICAxMDApO1xyXG4gICAgICAgICAgICAgICAgUE9TVF9hbmRfbW92ZV9wYWdlKGdfdXJsW2dfdXJsX21haV9ndWxkXSwgb3B0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTkcoKTogdm9pZCB7XHJcbiAgICBzd2l0Y2gobW9kZSkge1xyXG4gICAgICAgIGNhc2UgJ2NoZWsnOlxyXG4gICAgICAgICAgICBnX2N2bS5jbGVhcl9tZXNzYWdlKCk7XHJcbiAgICAgICAgICAgIGFjdF9tZW51X21vZGUoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX3JvdW5kIH0gICAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX01hdGhcIjtcclxuaW1wb3J0IHsgQ19VcmxPcHQgfSAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9DX1VybE9wdFwiO1xyXG5pbXBvcnQgeyBUX0xja2QgfSAgICAgICAgICAgICAgZnJvbSBcIi4uL2RfbWRsL0NfTG9jYXRpb25cIjtcclxuaW1wb3J0IHsgQ19Qb2ludERpciB9ICAgICAgICAgIGZyb20gXCIuLi9kX21kbC9DX1BvaW50RGlyXCI7XHJcbmltcG9ydCB7IElfTWF6ZU9iaiAgfSAgICAgICAgICBmcm9tIFwiLi4vZF9tZGwvQ19NYXplT2JqXCI7XHJcbmltcG9ydCB7IENfU2F2ZURhdGEgfSAgICAgICAgICBmcm9tIFwiLi4vZF9tZGwvQ19TYXZlRGF0YVwiO1xyXG5pbXBvcnQgeyBDX0N0bEN1cnNvciB9ICAgICAgICAgZnJvbSBcIi4uL2RfY3RsL0NfQ3RsQ3Vyc29yXCI7XHJcbmltcG9ydCB7IFBPU1RfYW5kX21vdmVfcGFnZSB9ICBmcm9tIFwiLi4vZF9jbW4vRl9QT1NUXCI7XHJcbmltcG9ydCB7IGdlbmVyYWxfbG9hZCwgZ2VuZXJhbF9zYXZlLCBnZXRfc2F2ZV9pbmZvIH0gICAgZnJvbSBcIi4uL2RfY21uL0ZfbG9hZF9hbmRfc2F2ZVwiO1xyXG5pbXBvcnQgeyBfYWxlcnQsIGdfbWVzLCBnX215X3VybCwgZ19zYXZlLCBnX3N0YXJ0X2VudiB9IGZyb20gXCIuLi9kX2Ntbi9nbG9iYWxcIjtcclxuaW1wb3J0IHsgYWN0X21lbnVfbW9kZSB9ICAgICAgIGZyb20gXCIuL0Zfc2V0X21lbnVfbW9kZVwiO1xyXG5pbXBvcnQgeyBhY3RfbW92ZV9tb2RlLCBkb19tb3ZlX2JvdHRvbV9oYWxmIH0gZnJvbSBcIi4vRl9zZXRfbW92ZV9tb2RlXCI7XHJcbmltcG9ydCB7IFxyXG4gICAgZ19jdGxzLFxyXG4gICAgZ19jdm0sIFxyXG4gICAgZ19tdm0sIFxyXG4gICAgZ192c3csIFxyXG4gICAgZ19tYXplLCBcclxuICAgIGdfdGVhbSwgXHJcbiAgICBnX2hyZXMsIFxyXG59IGZyb20gXCIuL2dsb2JhbF9mb3JfbWF6ZVwiO1xyXG5pbXBvcnQgeyBUX0N0bHMgfSBmcm9tIFwiLi9DX0RlZmF1bHRDdGxzXCI7XHJcbmltcG9ydCB7IENfU2F2ZUluZm8gfSBmcm9tIFwiLi4vZF9tZGwvQ19TYXZlSW5mb1wiO1xyXG5cclxubGV0ICAgZm9yX3NhdmU6IGJvb2xlYW4gID0gZmFsc2U7XHJcblxyXG5sZXQgICBVTF9pZHg6IG51bWJlciA9ICAgMDtcclxubGV0ICAgVUxfYmFrOiBudW1iZXIgPSA5OTk7XHJcblxyXG5sZXQgICBzYXZlX1VMX2xpc3Q6ICBIVE1MVUxpc3RFbGVtZW50O1xyXG5sZXQgICBVTF9saXN0X2Nyc3I6ICBDX0N0bEN1cnNvcjtcclxubGV0ICAgVUxfbGlzdF9sZW5nOiAgbnVtYmVyO1xyXG5cclxubGV0ICAgVUxfdG9fRGF0YTogICAgICAge1tVTF9pZHg6IG51bWJlcl06IC8qIGRhdGFfaWR4OiAqLyBudW1iZXJ9XHJcblxyXG5sZXQgICBmb3JtX2lkOiAgICAgICAgICBIVE1MSW5wdXRFbGVtZW50O1xyXG5sZXQgICBmb3JtX3RpbWU6ICAgICAgICBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxubGV0ICAgZm9ybV9kZXRhaWw6ICAgICAgSFRNTFRleHRBcmVhRWxlbWVudDtcclxubGV0ICAgZm9ybV9wb2ludDogICAgICAgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcblxyXG5sZXQgICBpc19rYWt1bmluID0gZmFsc2U7XHJcblxyXG5leHBvcnQgdHlwZSBUX3NhdmVfbGlzdCA9IHtcclxuICAgIHNhdmVfaWQ6ICAgbnVtYmVyLFxyXG4gICAgdW5pcV9ubzogICBudW1iZXIsXHJcbiAgICB0aXRsZTogICAgIHN0cmluZyxcclxuICAgIGRldGFpbDogICAgc3RyaW5nLFxyXG4gICAgc2NlbmU6ICAgICBzdHJpbmcsXHJcbiAgICBwb2ludDogICAgIHN0cmluZyxcclxuICAgIHNhdmVfdGltZTogc3RyaW5nLFxyXG4gICAgYXV0b19tb2RlOiBzdHJpbmcsXHJcbiAgICBfX2lzX25ldzogIGJvb2xlYW4sXHJcbn1cclxuXHJcbmxldCAgIHNhdmVfbGlzdDogICAgICAgIHtbdW5pcV9ubzogbnVtYmVyXTogQ19TYXZlSW5mb307XHJcbmNvbnN0IHNhdmVfbGlzdF9tYXggPSAyMDtcclxuXHJcbmNvbnN0IGN0bHNfbG9hZF9ydG4gPSB7XHJcbiAgICBuYW1lOiAnbG9hZF9ydG4nLCBcclxuICAgIGlzTkc6ICBnb19iYWNrX21lbnVfbW9kZSxcclxuICAgIGlzUlQ6ICBnb19iYWNrX21lbnVfbW9kZSxcclxuICAgIGNwUlQ6ICBnb19iYWNrX21lbnVfbW9kZSxcclxufVxyXG5jb25zdCBjdGxzX2xvYWRfbm9yID0ge1xyXG4gICAgbmFtZTogJ2xvYWRfbm9yJywgXHJcbiAgICBkb19VOiAgZG9fVSxcclxuICAgIGRvX0Q6ICBkb19ELFxyXG4gICAgZG9fTDogIGRvX0wsXHJcbiAgICBkb19SOiAgZG9fUixcclxuICAgIGlzT0s6ICBjaGVja19sb2FkLFxyXG4gICAgY3BPSzogIGNoZWNrX2xvYWQsXHJcbiAgICBpc05HOiAgZ29fYmFja19tZW51X21vZGUsXHJcbiAgICBpc1JUOiAgZ29fYmFja19tZW51X21vZGUsXHJcbiAgICBjcFJUOiAgZ29fYmFja19tZW51X21vZGUsXHJcbn1cclxuY29uc3QgY3Rsc19sb2FkX2NoayA9IHtcclxuICAgIG5hbWU6ICdsb2FkX2NoaycsIFxyXG4gICAgZG9fVTogIGRvX1UsXHJcbiAgICBkb19EOiAgZG9fRCxcclxuICAgIGRvX0w6ICBkb19MLFxyXG4gICAgZG9fUjogIGRvX1IsXHJcbiAgICBpc09LOiAgaXNPS19mb3JfbG9hZCxcclxuICAgIGNwT0s6ICBpc09LX2Zvcl9sb2FkLFxyXG4gICAgaXNORzogIGlzTkdfZm9yX2xvYWQsXHJcbiAgICBjcE5HOiAgaXNOR19mb3JfbG9hZCxcclxuICAgIGlzUlQ6ICBnb19iYWNrX21lbnVfbW9kZSxcclxuICAgIGNwUlQ6ICBnb19iYWNrX21lbnVfbW9kZSxcclxufVxyXG5jb25zdCBjdGxzX3NhdmVfbm9yID0ge1xyXG4gICAgbmFtZTogJ3NhdmVfbm9yJywgXHJcbiAgICBkb19VOiAgZG9fVSxcclxuICAgIGRvX0Q6ICBkb19ELFxyXG4gICAgZG9fTDogIGRvX0wsXHJcbiAgICBkb19SOiAgZG9fUixcclxuICAgIGlzT0s6ICBjaGVja19zYXZlLFxyXG4gICAgY3BPSzogIGNoZWNrX3NhdmUsXHJcbiAgICBpc05HOiAgZ29fYmFja19tZW51X21vZGUsXHJcbiAgICBpc1JUOiAgZ29fYmFja19tZW51X21vZGUsXHJcbiAgICBjcFJUOiAgZ29fYmFja19tZW51X21vZGUsXHJcbn1cclxuY29uc3QgY3Rsc19zYXZlX2NoayA9IHtcclxuICAgIG5hbWU6ICdzYXZlX2NoaycsIFxyXG4gICAgZG9fVTogIGRvX1UsXHJcbiAgICBkb19EOiAgZG9fRCxcclxuICAgIGRvX0w6ICBkb19MLFxyXG4gICAgZG9fUjogIGRvX1IsXHJcbiAgICBpc09LOiAgaXNPS19mb3Jfc2F2ZSxcclxuICAgIGNwT0s6ICBpc09LX2Zvcl9zYXZlLFxyXG4gICAgaXNORzogIGlzTkdfZm9yX3NhdmUsXHJcbiAgICBjcE5HOiAgaXNOR19mb3Jfc2F2ZSxcclxuICAgIGlzUlQ6ICBnb19iYWNrX21lbnVfbW9kZSxcclxuICAgIGNwUlQ6ICBnb19iYWNrX21lbnVfbW9kZSxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRfU0xfbW9kZSgpOiB2b2lkIHtcclxuICAgIGluaXRfdmlldygpO1xyXG4gICAgaW5pdF9jdGxzKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3RfbG9hZF9tb2RlKCk6IHZvaWQge1xyXG4gICAgX19zZXRfZGF0YShmYWxzZSkudGhlbigoKT0+e1xyXG4gICAgICAgIGlmICghZXhpc3Rfc2F2ZV9saXN0KCkpIHtcclxuICAgICAgICAgICAgaGlkZV9sb2FkX2ZpZWxkcygpO1xyXG4gICAgICAgICAgICBnX2N2bS5ub3RpY2VfbWVzc2FnZSgn44Ot44O844OJ44Gn44GN44KL44OH44O844K/44GM5pyJ44KK44G+44Gb44KTJyk7XHJcbiAgICAgICAgICAgIGdfY3Rscy5hY3QoY3Rsc19sb2FkX3J0bik7XHJcbiAgICAgICAgICAgIGdfdnN3LnZpZXcoZ192c3cuTW92ZSgpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dfbG9hZF9maWVsZHMoKTtcclxuICAgICAgICAgICAgZGlzcGxheV9tZXNzYWdlKCk7XHJcbiAgICAgICAgICAgIGdfY3Rscy5hY3QoY3Rsc19sb2FkX25vcik7XHJcbiAgICAgICAgICAgIGdfdnN3LnZpZXcoZ192c3cuTGRTdigpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYWN0X3NhdmVfbW9kZSgpOiB2b2lkIHtcclxuICAgX19zZXRfZGF0YSh0cnVlKS50aGVuKCgpPT57XHJcbiAgICAgICAgZGlzcGxheV9tZXNzYWdlKCk7XHJcbiAgICAgICAgZ19jdGxzLmFjdChjdGxzX3NhdmVfbm9yKTtcclxuICAgICAgICBnX3Zzdy52aWV3KGdfdnN3LkxkU3YoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gX19zZXRfZGF0YShfZm9yX3NhdmU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGZvcl9zYXZlID0gX2Zvcl9zYXZlOyAvLyB0cnVlOiBGb3IgU2F2ZS5cclxuXHJcbiAgICBnX2N2bS5jbGVhcl9tZXNzYWdlKCk7XHJcbiAgICBpc19rYWt1bmluID0gZmFsc2U7XHJcbiAgICBhd2FpdCBkaXNwbGF5X3NhdmVfbGlzdCgpOyBcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZV9sb2FkX2ZpZWxkcygpOiB2b2lkIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZHN2X2RhdGFfbGlzdCcpICA/LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZHN2X2RhdGFfZmllbGRzJyk/LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd19sb2FkX2ZpZWxkcygpOiB2b2lkIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZHN2X2RhdGFfbGlzdCcpICA/LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGRzdl9kYXRhX2ZpZWxkcycpPy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdibG9jaycpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaW5pdF9kYXRhKCk6IHZvaWQge31cclxuZnVuY3Rpb24gaW5pdF92aWV3KCk6IHZvaWQge31cclxuZnVuY3Rpb24gaW5pdF9jdGxzKCk6IHZvaWQge1xyXG4gICAgaXNfa2FrdW5pbiA9IGZhbHNlO1xyXG4gICAgVUxfYmFrID0gOTk5O1xyXG5cclxuICAgIGdfY3Rscy5zZXQoY3Rsc19sb2FkX3J0bik7XHJcbiAgICBnX2N0bHMuc2V0KGN0bHNfbG9hZF9ub3IpO1xyXG4gICAgZ19jdGxzLnNldChjdGxzX2xvYWRfY2hrKTtcclxuICAgIGdfY3Rscy5zZXQoY3Rsc19zYXZlX25vcik7XHJcbiAgICBnX2N0bHMuc2V0KGN0bHNfc2F2ZV9jaGspO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc09LX2Zvcl9sb2FkKCk6IHZvaWQge1xyXG4gICAgaWYgKHNhdmVfVUxfbGlzdCA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgaWYgKFVMX2lkeCA8IDAgfHwgVUxfaWR4ID4gVUxfbGlzdF9sZW5nIC0gMSkgcmV0dXJuO1xyXG5cclxuLy8gICAgaWYgKCFpc19rYWt1bmluKSBjaGVja19sb2FkKCk7IGVsc2UgbG9hZCgpO1xyXG4gICAgbG9hZCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc09LX2Zvcl9zYXZlKCk6IHZvaWQge1xyXG4gICAgaWYgKHNhdmVfVUxfbGlzdCA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgaWYgKFVMX2lkeCA8IDAgfHwgVUxfaWR4ID4gVUxfbGlzdF9sZW5nIC0gMSkgcmV0dXJuO1xyXG5cclxuLy8gICAgaWYgKCFpc19rYWt1bmluKSBjaGVja19zYXZlKCk7IGVsc2Ugc2F2ZSgpO1xyXG4gICAgc2F2ZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc05HX2Zvcl9sb2FkKCk6IHZvaWQge1xyXG4gICAgX2lzTkdfKGN0bHNfbG9hZF9ub3IpO1xyXG59XHJcbmZ1bmN0aW9uIGlzTkdfZm9yX3NhdmUoKTogdm9pZCB7XHJcbiAgICBfaXNOR18oY3Rsc19zYXZlX25vcik7XHJcbn1cclxuZnVuY3Rpb24gX2lzTkdfKGN0bHM6IFRfQ3Rscyk6IHZvaWQge1xyXG4gICAgaWYgKCFpc19rYWt1bmluKSB7XHJcbiAgICAgICAgZ19jdm0uY2xlYXJfbWVzc2FnZSgpO1xyXG4gICAgICAgIGdvX2JhY2tfbWVudV9tb2RlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlzX2tha3VuaW4gPSBmYWxzZTtcclxuICAgICAgICBnX2N0bHMuYWN0KGN0bHMpO1xyXG4gICAgICAgIGRpc3BsYXlfbWVzc2FnZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnb19iYWNrX21lbnVfbW9kZSgpOiB2b2lkIHtcclxuICAgIGdfY3ZtLmNsZWFyX21lc3NhZ2UoKTtcclxuICAgIGFjdF9tZW51X21vZGUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ29fYmFja19tb3ZlX21vZGUoKTogdm9pZCB7XHJcbiAgICBhY3RfbW92ZV9tb2RlKCk7XHJcbiAgICBkb19tb3ZlX2JvdHRvbV9oYWxmKCdibGlua19vZmYnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZG9fVSgpOiB2b2lkIHtcclxuICAgIGRpc3BsYXlfbWVzc2FnZSgpO1xyXG4gICAgVUxfaWR4ID0gVUxfbGlzdF9jcnNyLnBvc19VKCk7XHJcbiAgICBmb3JtX3NldCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkb19EKCk6IHZvaWQgeyBcclxuICAgIGRpc3BsYXlfbWVzc2FnZSgpO1xyXG4gICAgVUxfaWR4ID0gVUxfbGlzdF9jcnNyLnBvc19EKCk7XHJcbiAgICBmb3JtX3NldCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkb19MKCk6IHZvaWQge1xyXG4gICAgZGlzcGxheV9tZXNzYWdlKCk7XHJcbiAgICBVTF9pZHggPSBVTF9saXN0X2Nyc3IucG9zX0woKTtcclxuICAgIGZvcm1fc2V0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvX1IoKTogdm9pZCB7XHJcbiAgICBkaXNwbGF5X21lc3NhZ2UoKTtcclxuICAgIFVMX2lkeCA9IFVMX2xpc3RfY3Jzci5wb3NfUigpO1xyXG4gICAgZm9ybV9zZXQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybV9jbHIoKTp2b2lkIHtcclxuICAgIGlmIChVTF9pZHggPCAwIHx8IFVMX2lkeCA+IFVMX2xpc3RfbGVuZyAtIDEpIHJldHVybjtcclxuXHJcbiAgICBmb3JtX2lkICAgLnZhbHVlICAgICAgPSAnLTEnO1xyXG4gICAgZm9ybV90aW1lIC5pbm5lclRleHQgID0gJyc7XHJcbiAgICBmb3JtX3BvaW50LmlubmVyVGV4dCAgPSAnJztcclxuXHJcbiAgICBpZiAoZm9ybV9kZXRhaWwuaGFzQXR0cmlidXRlKCdyZWFkb25seScpKSB7XHJcbiAgICAgICAgZm9ybV9kZXRhaWwucmVtb3ZlQXR0cmlidXRlKCdyZWFkb25seScpO1xyXG4gICAgICAgIGZvcm1fZGV0YWlsLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZm9ybV9kZXRhaWwuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICdyZWFkb25seScpO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIGZvcm1fZGV0YWlsLnZhbHVlID0gJyc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1fc2V0KCk6dm9pZCB7XHJcbiAgICBpZiAoVUxfaWR4IDwgMCB8fCBVTF9pZHggPiBVTF9saXN0X2xlbmcgLSAxKSByZXR1cm47XHJcblxyXG4gICAgZm9ybV9jbHIoKTtcclxuICAgIGNvbnN0IGRhdGFfaWR4ID0gVUxfdG9fRGF0YVtVTF9pZHhdO1xyXG5cclxuICAgIGZvcm1faWQgICAudmFsdWUgICAgICA9IHNhdmVfbGlzdFtkYXRhX2lkeF0uc2F2ZV9pZC50b1N0cmluZygpO1xyXG4gICAgZm9ybV90aW1lIC5pbm5lclRleHQgID0gc2F2ZV9saXN0W2RhdGFfaWR4XS5zYXZlX3RpbWU/LnRvSVNPU3RyaW5nKCk7XHJcbiAgICBmb3JtX3BvaW50LmlubmVyVGV4dCAgPSBzYXZlX2xpc3RbZGF0YV9pZHhdLnBvaW50O1xyXG5cclxuICAgIGlmIChmb3JtX2RldGFpbC5oYXNBdHRyaWJ1dGUoJ3JlYWRvbmx5JykpIHtcclxuICAgICAgICBmb3JtX2RldGFpbC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XHJcbiAgICAgICAgZm9ybV9kZXRhaWwudmFsdWUgPSBzYXZlX2xpc3RbZGF0YV9pZHhdLmRldGFpbDtcclxuICAgICAgICBmb3JtX2RldGFpbC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgZm9ybV9kZXRhaWwudmFsdWUgPSBzYXZlX2xpc3RbZGF0YV9pZHhdLmRldGFpbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlfc2F2ZV9saXN0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgZGF0YV9saXN0ICAgPSAnbGRzdl9kYXRhX2xpc3QnO1xyXG4gICAgY29uc3QgZGF0YV9pZCAgICAgPSAnbGRzdl9kYXRhX2lkJztcclxuICAgIGNvbnN0IGRhdGFfdGltZSAgID0gJ2xkc3ZfZGF0YV90aW1lJztcclxuICAgIGNvbnN0IGRhdGFfZGV0YWlsID0gJ2xkc3ZfZGF0YV9kZXRhaWwnO1xyXG4gICAgY29uc3QgZGF0YV9wb2ludCAgPSAnbGRzdl9kYXRhX3BvaW50JztcclxuXHJcbiAgICBhd2FpdCBnZXRfc2F2ZV9pbmZvKCk/LnRoZW4oanNvbk9iaiA9PiB7XHJcbiAgICAgICAgaWYgKGpzb25PYmogPT09IG51bGwgfHwganNvbk9iaiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGdfbWVzLndhcm5pbmdfbWVzc2FnZSgn44K744O844OW5oOF5aCx44Gu5Y+X5L+h44Gr5aSx5pWX44GX44G+44GX44Gf44CC44CQ5Y+X5L+h44OH44O844K/54Sh44GX44CRJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChqc29uT2JqLmVjb2RlICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGdfbWVzLndhcm5pbmdfbWVzc2FnZShg44COJHtqc29uT2JqLmVtc2d944CPKCR7anNvbk9iai5lY29kZX0pYCk7XHJcbiAgICAgICAgICAgIGdfbWVzLndhcm5pbmdfbWVzc2FnZSgn44K744O844OW5oOF5aCx44Gu5Y+X5L+h44Gr5aSx5pWX44GX44G+44GX44Gf44CCJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHNhdmVfbGlzdCA9IHt9OyBcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHNhdmVfaW5mbyBvZiBqc29uT2JqLnNhdmVfaW5mbykge1xyXG4gICAgICAgICAgICAgICAgc2F2ZV9saXN0W3NhdmVfaW5mby51bmlxX25vXSA9IG5ldyBDX1NhdmVJbmZvKHNhdmVfaW5mbyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZvcl9zYXZlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB1bmlxX25vX2NudCA9IDA7IHVuaXFfbm9fY250IDwgc2F2ZV9saXN0X21heDsgdW5pcV9ub19jbnQrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1bmlxX25vX2NudCBpbiBzYXZlX2xpc3QpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmVfbGlzdFt1bmlxX25vX2NudF0gPSBuZXcgQ19TYXZlSW5mbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVfaWQ6ICAgIC0xLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmlxX25vOiAgICAgdW5pcV9ub19jbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAgICAgIGDmlrDopo/kv53lrZgjJHt1bmlxX25vX2NudC50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiAgICAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnQ6ICAgICAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZV90aW1lOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9fbW9kZTogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzYXZlX1VMX2xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhX2xpc3QpIGFzIEhUTUxVTGlzdEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChzYXZlX1VMX2xpc3QgPT09IG51bGwpIHthbGVydCgnQ2FuIG5vdCBmaW5kIHRoZSBEb20gb2YgU2F2ZSBMaXN0IScpO3JldHVybjt9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHdoaWxlIChzYXZlX1VMX2xpc3QuZmlyc3RDaGlsZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc2F2ZV9VTF9saXN0LnJlbW92ZUNoaWxkKHNhdmVfVUxfbGlzdC5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IFVMX2xpc3RfaWR4ID0gMDsgVUxfdG9fRGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBkYXRhX2lkeCBpbiBzYXZlX2xpc3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzYXZlX2xpc3RbZGF0YV9pZHhdLmF1dG9fbW9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3Jfc2F2ZSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc2F2ZV9saXN0W2RhdGFfaWR4XS51bmlxX25vKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwMDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlX2xpc3RbZGF0YV9pZHhdLnRpdGxlICA9ICfoh6rli5Xkv53lrZjliIYnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZV9saXN0W2RhdGFfaWR4XS5kZXRhaWwgPSAn5L2c5qWt55So44Gr57Ch5piT5L+d5a2Y44GX44Gf44OH44O844K/44Gn44GZJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlX2xpc3RbZGF0YV9pZHhdLnRpdGxlICA9ICfnsKHmmJPkv53lrZjliIYnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZV9saXN0W2RhdGFfaWR4XS5kZXRhaWwgPSAn44OH44OQ44OD44Kw44Oi44O844OJ44Gn57Ch5piT5L+d5a2Y44GX44Gf44OH44O844K/44Gn44GZJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVfbGlzdFtkYXRhX2lkeF0udGl0bGUgID0gJ+majuauteebtOWJjeWIhic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlX2xpc3RbZGF0YV9pZHhdLmRldGFpbCA9ICfkuIDnlarmnIDov5Hjga7jg5Xjg63jgqLnp7vli5Xnm7TliY3jgavoh6rli5Xkv53lrZjjgZfjgZ/jg4fjg7zjgr/jgafjgZknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZV9saXN0W2RhdGFfaWR4XS50aXRsZSAgPSAn772y776N776e776d776E55u05YmN5YiGJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVfbGlzdFtkYXRhX2lkeF0uZGV0YWlsID0gJ+OCpOODmeODs+ODiCjlpLHmlZcp55u05YmN44Gr57Ch5piT5L+d5a2Y44GX44Gf44OH44O844K/44Gn44GZJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykgYXMgSFRNTExJRWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGDjgI4ke3NhdmVfbGlzdFtkYXRhX2lkeF0udGl0bGV944CPYDtcclxuXHJcbiAgICAgICAgICAgICAgICBsaS5pZCA9IFVMX2xpc3RfaWR4LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZm9yX3NhdmU/X09LX3NhdmVfRm5jOl9PS19sb2FkX0ZuYywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNhdmVfVUxfbGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICAgICAgICAgICAgICBVTF90b19EYXRhW1VMX2xpc3RfaWR4KytdID0gTnVtYmVyKGRhdGFfaWR4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBVTF9saXN0X2Nyc3IgPSBDX0N0bEN1cnNvci5nZXRPYmooc2F2ZV9VTF9saXN0KTtcclxuICAgICAgICAgICAgVUxfbGlzdF9sZW5nID0gc2F2ZV9VTF9saXN0LmNoaWxkcmVuLmxlbmd0aDtcclxuICAgIFxyXG4gICAgICAgICAgICBmb3JtX2lkICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGFfaWQpICAgICBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBmb3JtX3RpbWUgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGFfdGltZSkgICBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICAgICAgZm9ybV9kZXRhaWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhX2RldGFpbCkgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgICAgICAgICAgZm9ybV9wb2ludCAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhX3BvaW50KSAgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7IFxyXG5cclxuICAgICAgICAgICAgaWYgKCFleGlzdF9zYXZlX2xpc3QoKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBVTF9pZHggPSAwOyAgVUxfbGlzdF9jcnNyLnNldF9wb3MoVUxfaWR4KTsgXHJcbiAgICAgICAgICAgIGZvcm1fc2V0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgZ19tZXMud2FybmluZ19tZXNzYWdlKGVyciBhcyB1bmtub3duIGFzIHN0cmluZyk7XHJcbiAgICAgICAgICAgIGdfbWVzLndhcm5pbmdfbWVzc2FnZSgn44K744O844OW5oOF5aCx44Gu5Y+X5L+h44Gr5aSx5pWX44GX44G+44GX44Gf44CC44CQ44OH44O844K/5LiN5LiA6Ie044CRJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBfT0tfbG9hZF9GbmModGhpczogSFRNTExJRWxlbWVudCwgZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgVUxfaWR4ID0gTnVtYmVyKHRoaXMuaWQpO1xyXG4gICAgXHJcbiAgICBpZiAoVUxfaWR4ICE9PSBVTF9iYWspIHtcclxuICAgICAgICBVTF9iYWsgPSAgIFVMX2lkeDtcclxuICAgICAgICBpc19rYWt1bmluID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNfa2FrdW5pbikgaXNPS19mb3JfbG9hZCgpOyBlbHNlIGNoZWNrX2xvYWQoKTtcclxuICAgIFVMX2xpc3RfY3Jzci5zZXRfcG9zKFVMX2lkeCk7IGZvcm1fc2V0KCk7XHJcbn1cclxuZnVuY3Rpb24gX09LX3NhdmVfRm5jKHRoaXM6IEhUTUxMSUVsZW1lbnQsIGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIFVMX2lkeCA9IE51bWJlcih0aGlzLmlkKTtcclxuICAgIFxyXG4gICAgaWYgKFVMX2lkeCAhPT0gVUxfYmFrKSB7XHJcbiAgICAgICAgVUxfYmFrID0gICBVTF9pZHg7XHJcbiAgICAgICAgaXNfa2FrdW5pbiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzX2tha3VuaW4pIGlzT0tfZm9yX3NhdmUoKTsgZWxzZSBjaGVja19zYXZlKCk7XHJcbiAgICBVTF9saXN0X2Nyc3Iuc2V0X3BvcyhVTF9pZHgpOyBmb3JtX3NldCgpO1xyXG59XHJcbmZ1bmN0aW9uIGV4aXN0X3NhdmVfbGlzdCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBzYXZlX1VMX2xpc3QuY2hpbGRyZW4ubGVuZ3RoID4gMDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tfbG9hZCgpOiB2b2lkIHsgLy8g5YWl5Yqb44OB44Kn44OD44Kv44Go5pei5a2Y44OH44O844K/5LiK5pu444GN44Gu56K66KqNXHJcbiAgICBjb25zdCBkYXRhX2lkeCA9IFVMX3RvX0RhdGFbVUxfaWR4XTtcclxuICAgIGlmIChVTF9pZHggPCAwIHx8IFVMX2lkeCA+IFVMX2xpc3RfbGVuZyAtIDEpIHtcclxuICAgICAgICBnX21lcy53YXJuaW5nX21lc3NhZ2UoYGNoZWNrISEgTm8gbG9uZ2VyIGFjY2VzcyBpZHgh44COJHtzYXZlX2xpc3RbZGF0YV9pZHhdLnRpdGxlfeOAjyhzYXZlX2lkOiAke3NhdmVfbGlzdFtkYXRhX2lkeF0uc2F2ZV9pZH0pYCk7XHJcbiAgICB9XHJcbiAgICBpc19rYWt1bmluID0gdHJ1ZTtcclxuICAgIGdfY3Rscy5hY3QoY3Rsc19sb2FkX2Noayk7XHJcbiAgICBkaXNwbGF5X21lc3NhZ2UoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tfc2F2ZSgpOiB2b2lkIHsgLy8g5YWl5Yqb44OB44Kn44OD44Kv44Go5pei5a2Y44OH44O844K/5LiK5pu444GN44Gu56K66KqNXHJcbiAgICBjb25zdCBkYXRhX2lkeCA9IFVMX3RvX0RhdGFbVUxfaWR4XTtcclxuICAgIGlmIChVTF9pZHggPCAwIHx8IFVMX2lkeCA+IFVMX2xpc3RfbGVuZyAtIDEpIHtcclxuICAgICAgICBnX21lcy53YXJuaW5nX21lc3NhZ2UoYGNoZWNrISEgTm8gbG9uZ2VyIGFjY2VzcyBpZHgh44COJHtzYXZlX2xpc3RbZGF0YV9pZHhdLnRpdGxlfeOAjyhzYXZlX2lkOiAke3NhdmVfbGlzdFtkYXRhX2lkeF0uc2F2ZV9pZH0pYCk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2F2ZV9saXN0W2RhdGFfaWR4XS5hdXRvX21vZGUpIHtcclxuICAgICAgICBnX21lcy53YXJuaW5nX21lc3NhZ2UoYGNoZWNrISEgVGhpcyBpcyBBdXRvIE1vZGUh44COJHtzYXZlX2xpc3RbZGF0YV9pZHhdLnRpdGxlfeOAjyhzYXZlX2lkOiAke3NhdmVfbGlzdFtkYXRhX2lkeF0uc2F2ZV9pZH0pYCk7XHJcbiAgICB9XHJcbiAgICBpc19rYWt1bmluID0gdHJ1ZTtcclxuICAgIGdfY3Rscy5hY3QoY3Rsc19zYXZlX2Noayk7XHJcbiAgICBkaXNwbGF5X21lc3NhZ2UoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheV9tZXNzYWdlKCkge1xyXG4gICAgaWYgKGZvcl9zYXZlKSB7XHJcbiAgICAgICAgaWYgKGlzX2tha3VuaW4pIHtcclxuICAgICAgICAgICAgaWYgKFVMX3RvX0RhdGFbVUxfaWR4XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBnX2N2bS5ub3RpY2VfbWVzc2FnZSgn44GT44KM44Gr5L+d5a2Y44GX44G+44GZ44GL77yfJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBnX2N2bS5ub3RpY2VfbWVzc2FnZSgn44GT44KM44Gr5LiK5pu45L+d5a2Y44GX44G+44GZ44GL77yf5Lul5YmN44Gu44OH44O844K/44Gv5raI5Y6744GV44KM44G+44GZJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnX2N2bS5ub3JtYWxfbWVzc2FnZSgn44Gp44KM44Gr5L+d5a2Y44GX44G+44GZ44GL77yfJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoaXNfa2FrdW5pbikge1xyXG4gICAgICAgICAgICBnX2N2bS5ub3RpY2VfbWVzc2FnZSgn44Ot44O844OJ44GX44G+44GZ44GL77yfJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZ19jdm0ubm9ybWFsX21lc3NhZ2UoJ+OBqeOCjOOCkuODreODvOODieOBl+OBvuOBmeOBi++8nycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbG9hZCgpOiB2b2lkIHsgXHJcbiAgICBjb25zdCBkYXRhX2lkeCA9IFVMX3RvX0RhdGFbVUxfaWR4XTtcclxuICAgIGlmIChzYXZlX2xpc3RbZGF0YV9pZHhdLm15cG9zLnVybCgpICE9PSAnJyAmJiBzYXZlX2xpc3RbZGF0YV9pZHhdLm15cG9zLnVybCgpICE9IGdfbXlfdXJsKSB7XHJcbiAgICAgICAgX2xvYWRfb3RoZXIoZGF0YV9pZHgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIF9sb2FkX2hlcmUoZGF0YV9pZHgpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIF9sb2FkX290aGVyKGRhdGFfaWR4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IG9wdCA9IG5ldyBDX1VybE9wdCgpO1xyXG4gICAgb3B0LnNldCgnbW9kZScsICdsb2FkJyk7XHJcbiAgICBvcHQuc2V0KCdwaWQnLCAgIGdfc3RhcnRfZW52LnBpZCk7XHJcbiAgICBvcHQuc2V0KCdvcHQnLCAgIHNhdmVfbGlzdFtkYXRhX2lkeF0udW5pcV9uby50b1N0cmluZygpKTtcclxuICAgIFBPU1RfYW5kX21vdmVfcGFnZShzYXZlX2xpc3RbZGF0YV9pZHhdLm15cG9zLnVybCgpLCBvcHQpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfbG9hZF9oZXJlKGRhdGFfaWR4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGdfc3RhcnRfZW52LnBpZCA9IHNhdmVfbGlzdFtkYXRhX2lkeF0ucGxheWVyX2lkO1xyXG5cclxuICAgIGdlbmVyYWxfbG9hZChzYXZlX2xpc3RbZGF0YV9pZHhdLnVuaXFfbm8pLnRoZW4oKGpzb25PYmo6YW55KT0+eyAgXHJcbiAgICAgICAgaXNfa2FrdW5pbiA9IGZhbHNlO1xyXG4gICAgICAgIGRlY29kZV9hbGwoanNvbk9iaj8uc2F2ZSk7XHJcbiAgICAgICAgZ19tdm0ubm90aWNlX21lc3NhZ2UoJ+ODreODvOODieOBl+OBvuOBl+OBnycpO1xyXG4gICAgICAgIGdvX2JhY2tfbW92ZV9tb2RlKCk7ICAgICAgICBcclxuICAgIH0pO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzYXZlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgZGF0YV9pZHggPSBVTF90b19EYXRhW1VMX2lkeF07XHJcbiAgICBzZXRfZ19zYXZlKFxyXG4gICAgICAgIC8qIHNhdmVfaWQ6ICovICAgc2F2ZV9saXN0W2RhdGFfaWR4XS5zYXZlX2lkLCAvL051bWJlcihmb3JtX2lkLnZhbHVlKSxcclxuICAgICAgICAvKiB1bmlxX25vOiAqLyAgIHNhdmVfbGlzdFtkYXRhX2lkeF0udW5pcV9ubyxcclxuICAgICAgICAvKiB0aXRsZTogKi8gICAgIGDkv53lrZjmuIg6ICMke2RhdGFfaWR4LnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1gLCAvL3NhdmVfbGlzdFtkYXRhX2lkeF0udGl0bGUsIFxyXG4gICAgICAgIC8qIGRldGFpbDogKi8gICAgZm9ybV9kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgLyogcG9pbnQ6ICovICAgICBcclxuICAgICAgICAgICAgICAgICAgICBg44COJHtnX21hemUuZ2V0X25hbWUoKX3jgI8gYCBcclxuICAgICAgICAgICAgICAgICAgICArIGDlnLDkuIsgJHtnX3RlYW0uZ2V0X3BkKCkueiArIDF96ZqO5bGkIGAgXHJcbiAgICAgICAgICAgICAgICAgICAgKyBgKFg6ICR7Z190ZWFtLmdldF9wZCgpLnh9LCBZOiAke2dfdGVhbS5nZXRfcGQoKS55fSlgLFxyXG4gICAgICAgIC8qIGF1dG9fbW9kZTogKi8gZmFsc2UsXHJcbiAgICApO1xyXG4gICAgZ2VuZXJhbF9zYXZlKCkudGhlbigoanNvbk9iaik9PntcclxuICAgICAgICBkZWNvZGVfYWxsKGpzb25PYmopO1xyXG5cclxuICAgICAgICBpc19rYWt1bmluID0gZmFsc2U7XHJcbiAgICAgICAgZ19tdm0ubm90aWNlX21lc3NhZ2UoJ+S/neWtmOOBl+OBvuOBl+OBnycpO1xyXG4gICAgICAgIGdvX2JhY2tfbW92ZV9tb2RlKCk7ICAgICAgICBcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlX2FsbChqc29uT2JqOiBhbnkpOiB2b2lkIHsgXHJcbiAgICAvLyBTYXZlRGF0YemWoumAo+OBruODh+OCs+ODvOODiVxyXG4gICAgaWYgKGpzb25PYmogPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgZ19zYXZlLmRlY29kZShqc29uT2JqKTsgXHJcbiAgICBnX3NhdmUubXlwb3Muc2V0X3VybChnX215X3VybCk7XHJcblxyXG4gICAgLy9UZWFt6Zai6YCj44Gu44OH44Kz44O844OJXHJcbiAgICBnX3RlYW0uZGVjb2RlKGdfc2F2ZS5hbGxfdGVhbVtnX3NhdmUubXlwb3MudGlkKCk/PycnXS5lbmNvZGUoKSk7IFxyXG4gICAgZ190ZWFtLnNldF9sb2MoZ19zYXZlLm15cG9zKTtcclxuXHJcbiAgICAvLyBNYXpl6Zai6YCj44Gu44OH44Kz44O844OJXHJcbiAgICBjb25zdCBsb2MgPSBnX3RlYW0uZ2V0X2xvYygpOyBcclxuICAgIGlmIChsb2MuZ2V0X2xja2QoKSA9PSBUX0xja2QuTWF6ZSkge1xyXG4gICAgICAgIGdfbWF6ZS5kZWNvZGUoZ19zYXZlLmFsbF9tYXplW2xvYy5nZXRfdWlkKCldLmVuY29kZSgpKTsgXHJcbiAgICB9XHJcblxyXG4gICAgLy9IZXJv6Zai6YCj44Gu44OH44Kz44O844OJXHJcbiAgICBmb3IgKGNvbnN0IGkgaW4gZ19ocmVzKSBkZWxldGUgZ19ocmVzW2ldOyBcclxuICAgIGZvciAoY29uc3QgaGVybyBvZiBnX3RlYW0uaHJlcygpKSAgZ19ocmVzLnB1c2goaGVybyk7IFxyXG5cclxuICAgIC8vIE1hemXjgatUZWFt44KS6L+95YqgXHJcbiAgICBnX21hemUuYWRkX29iaihnX3RlYW0gYXMgSV9NYXplT2JqKTsgXHJcbn1cclxuXHJcbi8vIOaWsOimj+OCsuODvOODoOOBruWIneacn+ODh+ODvOOCv+OBruiqreOBv+i+vOOBvyjmmqvlrpopXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVfbWF6ZShqc29uT2JqOiBhbnkpOiB2b2lkIHtcclxuICAgIC8vIE1hemXplqLpgKPjga7jg4fjgrPjg7zjg4lcclxuICAgIGlmIChqc29uT2JqPy5tYXplICE9PSB1bmRlZmluZWQpIGdfbWF6ZS5kZWNvZGUoanNvbk9iai5tYXplKTtcclxuXHJcbiAgICAvL+OAgFRlYW3plqLpgKMo54++5Zyo5ZywKeOBruODh+OCs+ODvOODiVxyXG4gICAgaWYgKGpzb25PYmo/LnBvcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IG5ldyBDX1BvaW50RGlyKHtcclxuICAgICAgICAgICAgeDoganNvbk9iai5wb3M/LngsIFxyXG4gICAgICAgICAgICB5OiBqc29uT2JqLnBvcz8ueSwgXHJcbiAgICAgICAgICAgIHo6IGpzb25PYmoucG9zPy56LCBcclxuICAgICAgICAgICAgZDoganNvbk9iai5wb3M/LmQsIFxyXG4gICAgICAgIH0pOyBcclxuICAgICAgICBnX3RlYW0ud2FsaygpLnNldF9wbGFjZShnX21hemUsIGdfbXlfdXJsLCBwb3MpO1xyXG4gICAgICAgIGdfc2F2ZS5teXBvcyA9IGdfdGVhbS5nZXRfbG9jKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGVyb+mWoumAo+OBruODh+OCs+ODvOODiVxyXG4gICAgZm9yIChjb25zdCBpIGluIGdfaHJlcykgZGVsZXRlIGdfaHJlc1tpXTtcclxuICAgIGZvciAoY29uc3QgaGVybyBvZiBnX3RlYW0uaHJlcygpKSBnX2hyZXMucHVzaChoZXJvKTtcclxuXHJcbiAgICAvLyBNYXpl44GrVGVhbeOCkui/veWKoFxyXG4gICAgZ19tYXplLmFkZF9vYmooZ190ZWFtIGFzIElfTWF6ZU9iaik7XHJcblxyXG4gICAgLy8gU2F2ZURhdGHjga7jg5njg7zjgrnjga7kvZzmiJBcclxuICAgIGdfc2F2ZS5teXBvcyA9IGdfdGVhbS5nZXRfbG9jKCk7XHJcbiAgICBnX3NhdmUuYWxsX21hemVbZ19tYXplLnVpZCgpXSA9IGdfbWF6ZTtcclxuICAgIGdfc2F2ZS5hbGxfdGVhbVtnX3RlYW0udWlkKCldID0gZ190ZWFtO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0X2dfc2F2ZSAoXHJcbiAgICAgICAgc2F2ZV9pZDogICBudW1iZXIsXHJcbiAgICAgICAgdW5pcV9ubzogICBudW1iZXIsIFxyXG4gICAgICAgIHRpdGxlOiAgICAgc3RyaW5nLCBcclxuICAgICAgICBkZXRhaWw6ICAgIHN0cmluZywgXHJcbiAgICAgICAgcG9pbnQ6ICAgICBzdHJpbmcsXHJcbiAgICAgICAgYXV0b19tb2RlOiBib29sZWFuLFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgZ19zYXZlLm15cG9zID0gZ190ZWFtLmdldF9sb2MoKTtcclxuXHJcbiAgICAgICAgZ19zYXZlLmFsbF90ZWFtW2dfdGVhbS51aWQoKV0gPSBnX3RlYW07XHJcbiAgICAgICAgZ19zYXZlLmFsbF9tYXplW2dfbWF6ZS51aWQoKV0gPSBnX21hemU7IC8vXHJcblxyXG4gICAgICAgIGdfc2F2ZS5kZWNvZGUoe1xyXG4gICAgICAgICAgICBzYXZlX2lkOiAgIHNhdmVfaWQsIFxyXG4gICAgICAgICAgICBwbGF5ZXJfaWQ6IGdfc3RhcnRfZW52LnBpZCxcclxuICAgICAgICAgICAgdW5pcV9ubzogICB1bmlxX25vLCBcclxuICAgICAgICAgICAgdGl0bGU6ICAgICB0aXRsZSwgXHJcbiAgICAgICAgICAgIGRldGFpbDogICAgZGV0YWlsLFxyXG4gICAgICAgICAgICBwb2ludDogICAgIHBvaW50LCBcclxuICAgICAgICAgICAgYXV0b19tb2RlOiBhdXRvX21vZGUgPyAnMScgOiAnMCcsXHJcbiAgICAgICAgICAgIGlzX2FjdGl2ZTogJzEnLFxyXG4gICAgICAgICAgICBpc19kZWxldGU6ICcwJyxcclxuICAgIFxyXG4vLyDliJ3mnJ/oqK3lrprjgYvjg63jg7zjg4njga7mmYLngrnjgafoqK3lrprjgZXjgozjgabjgYTjgovjga/jgZpcclxuLy8gICAgICAgICAgICBhbGxfbXZwdDogYWxsX212cHQsXHJcbi8vICAgICAgICAgICAgYWxsX21hemU6IGFsbF9tYXplLFxyXG4vLyAgICAgICAgICAgIGFsbF90ZWFtOiBhbGxfdGVhbSxcclxuLy8gICAgICAgICAgICBhbGxfZ3VsZDogYWxsX2d1bGQsXHJcbiAgICAgICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgVF9DdGxzTW9kZSB9ICAgIGZyb20gXCIuL1RfQ3Rsc01vZGVcIjtcclxuZXhwb3J0IGNvbnN0IGdfY3Rsc19tb2RlOiBUX0N0bHNNb2RlW10gPSBuZXcgQXJyYXkoMSkgYXMgVF9DdGxzTW9kZVtdO1xyXG5cclxuaW1wb3J0IHsgaW5pdF9tYXplQ2gsIGRpc3BsYXlfbWF6ZUNoIH0gZnJvbSBcIi4vRl9kaXNwbGF5X21hemVDaFwiO1xyXG5pbXBvcnQgeyBpbml0X21hemUyRCwgZGlzcGxheV9tYXplMkQgfSBmcm9tIFwiLi9GX2Rpc3BsYXlfbWF6ZTJEXCI7XHJcbmltcG9ydCB7IGluaXRfbWF6ZTNELCBUX0Ryb3dTZXQgfSAgICAgICAgICAgIGZyb20gXCIuL0ZfZGlzcGxheV9tYXplM0RcIjtcclxuZXhwb3J0IHZhciBnX2RzOiBUX0Ryb3dTZXQgICA9IHtjYW52YXM6IG51bGwsIGNvbjogbnVsbCwgZGVwdGg6IDAsIHdhbGw6IG51bGx9O1xyXG5cclxuaW1wb3J0IHsgQ19Td2l0Y2hWaWV3IH0gICAgICAgICAgZnJvbSBcIi4vQ19Td2l0Y2hWaWV3XCI7XHJcbmV4cG9ydCB2YXIgZ192c3c6IENfU3dpdGNoVmlldztcclxuXHJcbmltcG9ydCB7IENfT25lTGluZVZpZXdNZXNzYWdlIH0gIGZyb20gXCIuLi9kX3ZpZS9DX09uZUxpbmVWaWV3TWVzc2FnZVwiO1xyXG5leHBvcnQgdmFyIGdfbXZtOiBDX09uZUxpbmVWaWV3TWVzc2FnZTtcclxuZXhwb3J0IHZhciBnX2N2bTogQ19PbmVMaW5lVmlld01lc3NhZ2U7XHJcblxyXG5pbXBvcnQgeyBDX0hlcm8gfSBmcm9tIFwiLi4vZF9tZGwvQ19IZXJvXCI7XHJcbmV4cG9ydCBjb25zdCBnX2hyZXM6IENfSGVyb1tdID0gW107XHJcblxyXG5pbXBvcnQgeyBDX01hemUgfSBmcm9tIFwiLi4vZF9tZGwvQ19NYXplXCI7XHJcbmV4cG9ydCBjb25zdCBnX21hemUgPSBuZXcgQ19NYXplKCk7XHJcblxyXG5pbXBvcnQgeyBDX1RlYW0gfSBmcm9tIFwiLi4vZF9tZGwvQ19UZWFtXCI7XHJcbmV4cG9ydCBjb25zdCBnX3RlYW0gPSBuZXcgQ19UZWFtKCk7XHJcblxyXG5pbXBvcnQgeyBDX0d1aWxkIH0gZnJvbSBcIi4uL2RfbWRsL0NfR3VpbGRcIjtcclxuZXhwb3J0IGNvbnN0IGdfZ3VsZCA9IG5ldyBDX0d1aWxkKCk7XHJcblxyXG5cclxuaW1wb3J0IHsgQ19EZWZhdWx0Q3RscyB9ICAgICAgICAgICAgZnJvbSAnLi9DX0RlZmF1bHRDdGxzJztcclxuZXhwb3J0IGxldCBnX2N0bHM6IENfRGVmYXVsdEN0bHM7XHJcblxyXG5pbXBvcnQgeyBpbml0X2FsbF9tb2RlIH0gICAgICAgICAgICBmcm9tIFwiLi9GX3NldF9tb2RlXCI7XHJcbmltcG9ydCB7IGRlY29kZV9hbGwsIGRlY29kZV9tYXplIH0gIGZyb20gXCIuL0Zfc2V0X3NhdmVfbW9kZVwiO1xyXG5pbXBvcnQgeyBkb19tb3ZlX2JvdHRvbV9oYWxmLCBhY3RfbW92ZV9tb2RlIH0gZnJvbSBcIi4vRl9zZXRfbW92ZV9tb2RlXCI7XHJcblxyXG5pbXBvcnQgeyBcclxuICAgIGdlbmVyYWxfbG9hZCwgXHJcbiAgICBnZXRfbWFpX21hemUsIFxyXG4gICAgZ2V0X25ld19tYXplLCBcclxuICAgIHRtcF9sb2FkIFxyXG59IGZyb20gXCIuLi9kX2Ntbi9GX2xvYWRfYW5kX3NhdmVcIjtcclxuXHJcbmltcG9ydCB7IFxyXG4gICAgZ19hbGVydCxcclxuICAgIGdfZGVidWcsXHJcbiAgICBnX21lcywgXHJcbiAgICBnX3JlYWR5X2dhbWVzLCBcclxuICAgIGdfc3RhcnRfZW52LCBcclxuICAgIGluaXRfYWZ0ZXJfbG9hZGVkX0RPTV9pbl9jb21tb24gXHJcbn0gZnJvbSBcIi4uL2RfY21uL2dsb2JhbFwiO1xyXG5pbXBvcnQgeyBfaXJhbmQgfSBmcm9tIFwiLi4vZF91dGwvRl9SYW5kXCI7XHJcbmltcG9ydCB7IENfTWF6ZU9iaiB9IGZyb20gXCIuLi9kX21kbC9DX01hemVPYmpcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0X2JlZm9yZV9nYW1lcygpOiB2b2lkIHtcclxuICAgIHN3aXRjaCAoZ19zdGFydF9lbnYubW9kZSkge1xyXG4gICAgICAgIGNhc2UgJ25ldyc6XHJcbiAgICAgICAgICAgIGluaXRfYmVmb3JlX25ld19nYW1lcygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY2FzZSAnbG9hZCc6XHJcbiAgICAgICAgICAgIGluaXRfYmVmb3JlX2xvYWRfZ2FtZXMoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNhc2UgJ3N0YXJ0JzpcclxuICAgICAgICAgICAgaW5pdF9iZWZvcmVfc3RhcnRfZ2FtZXMoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNhc2UgJ212cHQnOlxyXG4gICAgICAgICAgICBpbml0X2JlZm9yZV9tdnB0X2dhbWVzKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdF9iZWZvcmVfbmV3X2dhbWVzKCk6IHZvaWQge1xyXG4gICAgZ2V0X21haV9tYXplKCkudGhlbigoanNvbk9iajphbnkpPT57XHJcbiAgICAgICAgZGVjb2RlX2FsbChqc29uT2JqPy5zYXZlKTtcclxuICAgICAgICBpbnN0YWxsX29ianMoNSk7ICAgICAgICAgICAgICAgICAgIC8vIOaaq+WumihDX29ianPjga7jg4bjgrnjg4jnlKgpXHJcbiAgICAgICAgZG9fbG9hZF9ib3R0b21faGFsZignJyk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBpbml0X2JlZm9yZV9sb2FkX2dhbWVzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdW5vID0gTnVtYmVyKGdfc3RhcnRfZW52Lm9wdCk7XHJcbiAgICBnZW5lcmFsX2xvYWQodW5vKS50aGVuKChqc29uT2JqOmFueSk9PnsgIFxyXG4gICAgICAgIGRlY29kZV9hbGwoanNvbk9iaj8uc2F2ZSk7XHJcbiAgICAgICAgZG9fbG9hZF9ib3R0b21faGFsZign44Ot44O844OJ44GX44G+44GX44GfJyk7IFxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gaW5pdF9iZWZvcmVfc3RhcnRfZ2FtZXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBtYXplX25hbWUgPSBnX3N0YXJ0X2Vudi5vcHQ7XHJcbiAgICB0bXBfbG9hZCgpLnRoZW4oKGpzb25PYmo6YW55KT0+e1xyXG4gICAgICAgIGRlY29kZV9hbGwoanNvbk9iaj8uc2F2ZSk7XHJcbiAgICAgICAgZ2V0X25ld19tYXplKG1hemVfbmFtZSkudGhlbigoanNvbk9iajphbnkpPT57IFxyXG4gICAgICAgICAgICBkZWNvZGVfbWF6ZShqc29uT2JqPy5kYXRhKTtcclxuICAgICAgICAgICAgZG9fbG9hZF9ib3R0b21faGFsZign5YaS6Zm644KS5aeL44KB44G+44GX44KH44GG77yBJyk7IFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gaW5pdF9iZWZvcmVfbXZwdF9nYW1lcygpOiB2b2lkIHtcclxuICAgIHRtcF9sb2FkKCkudGhlbigoanNvbk9iajphbnkpPT57ICBcclxuICAgICAgICBkZWNvZGVfYWxsKGpzb25PYmo/LnNhdmUpO1xyXG4gICAgICAgIGRvX2xvYWRfYm90dG9tX2hhbGYoJ+WGkumZuuOCkuWGjemWi+OBl+OBvuOBl+OCh+OBhu+8ge+8gScpOyBcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZG9fbG9hZF9ib3R0b21faGFsZihtc2c6IHN0cmluZyk6IHZvaWR7XHJcbiAgICBpbml0X21hemVDaCgpO1xyXG4gICAgaW5pdF9tYXplMkQoKTsgICAgICAgICAgICAgICAgICAgICAgIC8vICoqKioqKioqKioqKioqKiogIOS9nOaIkOS4rSAgKioqKioqKioqKioqKioqKipcclxuICAgIGdfZHMgPSBpbml0X21hemUzRCgpOyBcclxuXHJcbiAgICBnX212bS5ub3RpY2VfbWVzc2FnZShtc2cpOyBcclxuICAgIGdfbWVzLm5vdGljZV9tZXNzYWdlKG1zZyk7IFxyXG4gICAgYWN0X21vdmVfbW9kZSgpOyAgXHJcbiAgICBkb19tb3ZlX2JvdHRvbV9oYWxmKCdibGlua19vZmYnKTsgXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0X2FmdGVyX2xvYWRlZF9ET00oKTogdm9pZCB7IFxyXG4gICAgaW5pdF9hZnRlcl9sb2FkZWRfRE9NX2luX2NvbW1vbignZGVidWdfbW9kZScsICdwYW5lX3N5dG1fbG9ncycpOyBcclxuXHJcbiAgICBnX212bSAgPSBDX09uZUxpbmVWaWV3TWVzc2FnZS5nZXRPYmooJ21hemVfbWVzZycpOyBcclxuICAgIGdfY3ZtICA9IENfT25lTGluZVZpZXdNZXNzYWdlLmdldE9iaignbWVudV9tZXNnJyk7IFxyXG4gICAgZ19jdGxzID0gQ19EZWZhdWx0Q3Rscy5nZXRPYmooKTsgXHJcbiAgICBnX3ZzdyAgPSBDX1N3aXRjaFZpZXcuZ2V0T2JqKCk7IFxyXG5cclxuICAgIGluaXRfZGVidWdfbW9kZSgpO1xyXG4gICAgc3RvcF9kb3VibGVfY2xpY2soKTsgXHJcblxyXG4gICAgaW5pdF9hbGxfbW9kZSgpO1xyXG4gICAgZ19yZWFkeV9nYW1lcy5zZXRGdW5jdGlvbihpbml0X2JlZm9yZV9nYW1lcyk7IFxyXG4gICAgZ19yZWFkeV9nYW1lcy5zZXRMb2FkZWRET00oKTsgXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0X2RlYnVnX21vZGUoKTogdm9pZCB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsZXJ0X21vZGUnKTtcclxuICAgICAgICBhbGVydD8uc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIGFsZXJ0Py5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZXZlbnQ6TW91c2VFdmVudCk9PntcclxuICAgICAgICAgICAgdHJ5e2dfYWxlcnQuc2hvdygpO30gY2F0Y2goZXJyKXt9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBnX2RlYnVnLnNldE9iaih7XHJcbiAgICAgICAgICAgIHluOiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIG9uTmFtZTogICAnREVCVUcnLFxyXG4gICAgICAgICAgICBvZmZOYW1lOiAgJ+mAmuW4uCcsXHJcbiAgICAgICAgICAgIG9uQ2xhc3M6ICAnZGVidWcnLFxyXG4gICAgICAgICAgICBvZmZDbGFzczogJ25vcm1hbCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ19kZWJ1Zy5hZGRGbmModG9nZ2xlX2RlYnVnX21vZGUpOy8vZ19kZWJ1Zy5zZXRPTigpO1xyXG5cclxuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVidWdfbW9kZScpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLChldmVudCk9PntcclxuICAgICAgICAgICAgc3dpdGNoIChldmVudC5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiTnVtcGFkTXVsdGlwbHlcIjpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJFc2NhcGVcIjpcclxuICAgICAgICAgICAgICAgICAgICBidG4uY2xpY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnIpIHtyZXR1cm59O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVfZGVidWdfbW9kZSh5bjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgZGlzcGxheV9tYXplQ2goKTtcclxuICAgIGRpc3BsYXlfbWF6ZTJEKCk7XHJcblxyXG4gICAgY29uc3QgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxlcnRfbW9kZScpO1xyXG4gICAgY29uc3QgZGlzcGxheSA9IHluID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICAgIGFsZXJ0Py5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsIGRpc3BsYXkpO1xyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHN0b3BfZG91YmxlX2NsaWNrKCk6IHZvaWQge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywoZXZ0OiBNb3VzZUV2ZW50KSA9PntldnQucHJldmVudERlZmF1bHQoKTt9KVxyXG59XHJcblxyXG4vLyDmmqvlrpooQ19NYXplT2Jq44Gu44OG44K544OI55SoKVxyXG5mdW5jdGlvbiBpbnN0YWxsX29ianMobnVtOiBudW1iZXIgPSAxKTogdm9pZCB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IF9pcmFuZCgxLCAoZ19tYXplLmdldF94X21heCgpIC0gMSkgLyAyKSAqIDIgKyAxOyBcclxuICAgICAgICBjb25zdCB5ID0gX2lyYW5kKDEsIChnX21hemUuZ2V0X3lfbWF4KCkgLSAxKSAvIDIpICogMiArIDE7IFxyXG4gICAgICAgIGNvbnN0IG9iaiA9IENfTWF6ZU9iai5uZXdPYmooe1xyXG4gICAgICAgICAgICBwb3M6ICAgIHt4OngsIHk6eSwgejowLCBkOjB9LFxyXG4gICAgICAgICAgICB2aWV3OiB7XHJcbiAgICAgICAgICAgICAgICBsYXllcjogICAyLFxyXG4gICAgICAgICAgICAgICAgbGV0dGVyOiAn54mpJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBnX21hemUuYWRkX29iaihvYmopO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLy9cclxuLy8vICAg5Li75Yem55CGXHJcbi8vL1xyXG5cclxuaW1wb3J0IHsgaW5pdF9hZnRlcl9sb2FkZWRfRE9NIH0gZnJvbSBcIi4vZ2xvYmFsX2Zvcl9tYXplXCI7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkgeyBcclxuICAgIGluaXRfYWZ0ZXJfbG9hZGVkX0RPTSgpOyBcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==