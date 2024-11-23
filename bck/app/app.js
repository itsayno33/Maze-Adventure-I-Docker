/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../mai/src/d_mdl/C_GoodsItem.ts":
/*!***************************************!*\
  !*** ../mai/src/d_mdl/C_GoodsItem.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_GoodsItem = exports.T_GoodsKind = void 0;
var F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "../mai/src/d_utl/F_Rand.ts");
exports.T_GoodsKind = {
    Unkn: 0,
    Chst: 1,
    Gold: 2,
    Arms: 3,
    Shld: 5,
    Drug: 6,
    Item: 7,
};
function T_GoodsKind_key(gdkd) {
    var _a;
    return (_a = Object.keys(exports.T_GoodsKind).find(function (key) { return exports.T_GoodsKind[key] === gdkd; })) !== null && _a !== void 0 ? _a : "Unkn";
}
var GoodsKind_mb_name = {
    0: 'バグ',
    1: '宝箱',
    2: '金銭',
    3: '武器',
    5: '装備',
    6: '薬',
    7: '物品',
};
var C_GoodsItem = /** @class */ (function () {
    function C_GoodsItem(j) {
        this.uniq_id = 'goods_' + (0, F_Rand_1._get_uuid)();
        this.kind = exports.T_GoodsKind.Unkn;
        this.is_confirmed = false;
        this.ambiguous_name = '';
        this.confirmed_name = '';
        this.original_name = undefined;
        this.name = this.ambiguous_name;
        this.ambiguous_value = 0;
        this.confirmed_value = 0;
        this.original_value = undefined;
        this.value = this.ambiguous_value;
        if (j !== undefined)
            this.decode(j);
    }
    C_GoodsItem.newObj = function (j) {
        if (j === undefined)
            return undefined;
        if (j.kind === undefined)
            return undefined;
        if (j.kind in exports.T_GoodsKind)
            return new C_GoodsItem(j);
        return undefined;
        /*
                const kind = T_GoodsKind[j.kind];
                switch (kind) {
                    case T_GoodsKind.Gold:
                    case T_GoodsKind.Arms:
                    case T_GoodsKind.Shld:
                    case T_GoodsKind.Drug:
                    case T_GoodsKind.Item:
                        return new C_GoodsItem(j);
                    default:
                        return undefined;
                }
        */
    };
    C_GoodsItem.prototype.uid = function () { return this.uniq_id; };
    ;
    C_GoodsItem.prototype.get_kind = function () { return this.kind; };
    ;
    C_GoodsItem.prototype.get_name = function () { return this.name; };
    ;
    C_GoodsItem.prototype.get_gold = function () { return this.value; };
    ;
    C_GoodsItem.prototype.get_kind_name = function () {
        return GoodsKind_mb_name[this.kind];
    };
    C_GoodsItem.prototype.do_confirme = function () {
        var _a, _b;
        this.is_confirmed = true;
        this.name = (_a = this.original_name) !== null && _a !== void 0 ? _a : this.confirmed_name;
        this.value = (_b = this.original_value) !== null && _b !== void 0 ? _b : this.confirmed_value;
        return this.name;
    };
    C_GoodsItem.prototype.set_own_name = function (original_name) {
        this.original_name = original_name;
        this.name = original_name;
        return this.name;
    };
    C_GoodsItem.prototype.set_own_value = function (original_value) {
        this.original_value = original_value;
        this.value = original_value;
        return this.value;
    };
    C_GoodsItem.prototype.random_make = function (kind) {
        this.kind = kind;
        if (kind === exports.T_GoodsKind.Gold)
            this.value = (0, F_Rand_1._irand)(100, 1000);
        return this;
    };
    C_GoodsItem.prototype.encode = function () {
        var _a, _b;
        return {
            uniq_id: this.uniq_id,
            kind: T_GoodsKind_key(this.kind),
            ambiguous_name: this.ambiguous_name,
            confirmed_name: this.confirmed_name,
            original_name: (_a = this.original_name) !== null && _a !== void 0 ? _a : '',
            ambiguous_value: this.ambiguous_value,
            confirmed_value: this.confirmed_value,
            original_value: (_b = this.original_value) !== null && _b !== void 0 ? _b : 0,
            is_confirmed: this.is_confirmed ? '1' : '0',
        };
    };
    C_GoodsItem.prototype.decode = function (j) {
        if (j === undefined)
            return this;
        if (j.uniq_id !== undefined)
            this.uniq_id = j.uniq_id;
        if (j.kind !== undefined)
            this.kind = exports.T_GoodsKind[j.kind];
        if (j.ambiguous_name !== undefined)
            this.ambiguous_name = j.ambiguous_name;
        if (j.confirmed_name !== undefined)
            this.confirmed_name = j.confirmed_name;
        if (j.original_name !== undefined)
            this.original_name = j.original_name !== '' ? j.original_name : undefined;
        if (j.ambiguous_value !== undefined)
            this.ambiguous_value = j.ambiguous_value;
        if (j.confirmed_value !== undefined)
            this.confirmed_value = j.confirmed_value;
        if (j.original_value !== undefined)
            this.original_value = j.original_value !== 0 ? j.original_value : undefined;
        if (j.is_confirmed !== undefined)
            this.is_confirmed = j.is_confirmed != '0' ? true : false;
        if (this.original_name !== undefined)
            this.name = this.original_name;
        else
            this.name = this.is_confirmed ? this.confirmed_name : this.ambiguous_name;
        if (this.original_value !== undefined)
            this.value = this.original_value;
        else
            this.value = this.is_confirmed ? this.confirmed_value : this.ambiguous_value;
        return this;
    };
    return C_GoodsItem;
}());
exports.C_GoodsItem = C_GoodsItem;


/***/ }),

/***/ "../mai/src/d_mdl/C_Guild.ts":
/*!***********************************!*\
  !*** ../mai/src/d_mdl/C_Guild.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Guild = void 0;
exports.alert_guld_info = alert_guld_info;
var C_Location_1 = __webpack_require__(/*! ./C_Location */ "../mai/src/d_mdl/C_Location.ts");
var C_Hero_1 = __webpack_require__(/*! ./C_Hero */ "../mai/src/d_mdl/C_Hero.ts");
var F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "../mai/src/d_utl/F_Rand.ts");
var C_GoodsItem_1 = __webpack_require__(/*! ./C_GoodsItem */ "../mai/src/d_mdl/C_GoodsItem.ts");
function alert_guld_info(a) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (a === undefined)
        return;
    alert("Guild Info:"
        + "\nid:       " + ((_a = a.id) !== null && _a !== void 0 ? _a : '?')
        + "\nuniq_id:  " + ((_b = a.uniq_id) !== null && _b !== void 0 ? _b : '?')
        + "\nsave_id:  " + ((_c = a.save_id) !== null && _c !== void 0 ? _c : '?')
        + "\nname:     " + ((_d = a.name) !== null && _d !== void 0 ? _d : '?')
        + "\ngold:     " + (Object.keys((_e = a.gold) !== null && _e !== void 0 ? _e : 0).length)
        + "\nheroes:   " + ((_g = (_f = a.heroes) === null || _f === void 0 ? void 0 : _f.length) !== null && _g !== void 0 ? _g : '?')
        + "\n");
}
var C_Guild = /** @class */ (function () {
    function C_Guild(a) {
        this.id = -1;
        this.uniq_id = 'mai_guld#' + (0, F_Rand_1._get_uuid)();
        this.save_id = -1;
        this.name = '';
        this.gold = new C_GoodsItem_1.C_GoodsItem({ gkind: C_GoodsItem_1.T_GoodsKind.Gold, value: 0 });
        this.heroes = {};
        if (a !== undefined)
            this.decode(a);
    }
    C_Guild.prototype.uid = function () { return this.uniq_id; };
    C_Guild.prototype.get_lckd = function () { return C_Location_1.T_Lckd.Maze; };
    C_Guild.prototype.get_name = function () { return this.name; };
    C_Guild.prototype.hres = function () {
        var hres = [];
        for (var ii in this.heroes)
            hres.push(this.heroes[ii]);
        return hres;
    };
    C_Guild.prototype.clear_hres = function () {
        this.heroes = {};
    };
    C_Guild.prototype.add_hero = function (hero) {
        this.heroes[hero.uid()] = hero;
    };
    C_Guild.prototype.rmv_hero = function (hero) {
        delete this.heroes[hero.uid()];
    };
    C_Guild.from_obj_to_string = function (oa) {
        return JSON.stringify(oa, null, "\t");
    };
    C_Guild.from_objArray_to_string = function (oaa) {
        var oa = [];
        for (var ii in oaa)
            oa.push(oaa[ii]);
        return JSON.stringify(oa, null, "\t");
    };
    C_Guild.from_string_to_obj = function (txt) {
        try {
            var j = JSON.parse(txt);
            return new C_Guild(j);
        }
        catch (err) {
            return new C_Guild();
        }
        ;
    };
    C_Guild.from_string_to_objArray = function (txt) {
        try {
            var j = JSON.parse(txt);
            var mpa = {};
            for (var _i = 0, j_1 = j; _i < j_1.length; _i++) {
                var jj = j_1[_i];
                var aaa = new C_Guild().decode(jj);
                mpa[aaa.uid()] = aaa;
            }
            return mpa;
        }
        catch (err) {
            return {};
        }
        ;
    };
    C_Guild.prototype.encode = function () {
        var json_heroes = [];
        for (var ii in this.heroes)
            json_heroes.push(this.heroes[ii].encode());
        return {
            id: this.id,
            uniq_id: this.uniq_id,
            save_id: this.save_id,
            gold: this.gold.encode(),
            heroes: json_heroes,
            name: this.name,
        };
    };
    C_Guild.prototype.decode = function (a) {
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
            this.gold.decode(a.gold);
        if (a.heroes !== undefined) {
            this.heroes = {};
            for (var _i = 0, _a = a.heroes; _i < _a.length; _i++) {
                var json_hero = _a[_i];
                var hero = new C_Hero_1.C_Hero(json_hero);
                this.heroes[hero.uid()] = hero;
            }
        }
        return this;
    };
    C_Guild.encode_all = function (all_guld) {
        var all_guld_data = [];
        for (var _i = 0, all_guld_1 = all_guld; _i < all_guld_1.length; _i++) {
            var guld = all_guld_1[_i];
            all_guld_data.push(guld.encode());
        }
        return all_guld_data;
    };
    C_Guild.decode_all = function (all_guld_data) {
        var all_guld = [];
        for (var _i = 0, all_guld_data_1 = all_guld_data; _i < all_guld_data_1.length; _i++) {
            var guld_data = all_guld_data_1[_i];
            all_guld.push((new C_Guild()).decode(guld_data));
        }
        return all_guld;
    };
    C_Guild.prototype.alert = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        alert("Guild Info:"
            + "\nid:       " + ((_a = this.id) !== null && _a !== void 0 ? _a : '?')
            + "\nuniq_id:  " + ((_b = this.uniq_id) !== null && _b !== void 0 ? _b : '?')
            + "\nsave_id:  " + ((_c = this.save_id) !== null && _c !== void 0 ? _c : '?')
            + "\nname:     " + ((_d = this.name) !== null && _d !== void 0 ? _d : '?')
            + "\ngold:     " + (Object.keys((_e = this.gold) !== null && _e !== void 0 ? _e : 0).length)
            + "\nheroes:   " + ((_g = (_f = this.heroes) === null || _f === void 0 ? void 0 : _f.length) !== null && _g !== void 0 ? _g : '?')
            + "\n");
    };
    return C_Guild;
}());
exports.C_Guild = C_Guild;


/***/ }),

/***/ "../mai/src/d_mdl/C_Hero.ts":
/*!**********************************!*\
  !*** ../mai/src/d_mdl/C_Hero.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Hero = void 0;
exports.alert_hres_info = alert_hres_info;
exports.alert_hero_info = alert_hero_info;
var C_HeroAbility_1 = __webpack_require__(/*! ./C_HeroAbility */ "../mai/src/d_mdl/C_HeroAbility.ts");
var F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "../mai/src/d_utl/F_Rand.ts");
var C_GoodsItem_1 = __webpack_require__(/*! ./C_GoodsItem */ "../mai/src/d_mdl/C_GoodsItem.ts");
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
var C_Hero = /** @class */ (function () {
    function C_Hero(a) {
        this.my_id = 0;
        this.my_name = 'No Name Hero';
        this.uniq_id = 'mai_hero#' + (0, F_Rand_1._get_uuid)();
        this.save_id = 0;
        this.sex = 0;
        this.age = 0;
        this.gold = new C_GoodsItem_1.C_GoodsItem({ gkind: C_GoodsItem_1.T_GoodsKind.Gold, value: 0 });
        this.state = 0;
        this.lv = 0;
        this.val = {};
        this.abi_p = { bsc: new C_HeroAbility_1.C_HeroAbility(), ttl: new C_HeroAbility_1.C_HeroAbility(), now: new C_HeroAbility_1.C_HeroAbility() };
        this.abi_m = { bsc: new C_HeroAbility_1.C_HeroAbility(), ttl: new C_HeroAbility_1.C_HeroAbility(), now: new C_HeroAbility_1.C_HeroAbility() };
        this.is_alive = true;
        if (a !== undefined)
            this.decode(a);
    }
    C_Hero.prototype.set_prp = function (arg) {
        this.decode(arg);
    };
    C_Hero.prototype.get_uniq_id = function () { return this.uniq_id; };
    C_Hero.prototype.id = function () {
        return 'Hero_' + this.my_id.toString(16).padStart(5, '0');
    };
    C_Hero.prototype.uid = function () { return this.uniq_id; };
    C_Hero.prototype.name = function () {
        return this.my_name;
    };
    C_Hero.prototype.set_name = function (name) {
        this.my_name = name;
    };
    C_Hero.prototype.encode = function () {
        var ret = {
            id: this.my_id,
            uniq_id: this.uniq_id,
            name: this.my_name,
            save_id: this.save_id,
            sex: this.sex,
            age: this.age,
            state: this.state,
            lv: this.lv,
            goods: this.gold.encode(),
            val: this.val,
            abi_p_bsc: this.abi_p.bsc.encode(),
            abi_m_bsc: this.abi_m.bsc.encode(),
            is_alive: (this.is_alive) ? 'Y' : 'N',
        };
        return ret;
    };
    C_Hero.prototype.decode = function (a) {
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
        if (a.is_alive !== undefined) {
            if (typeof a.is_alive === "boolean") {
                this.is_alive = a.is_alive;
            }
            else {
                this.is_alive = (a.is_alive != 'N') ? true : false;
            }
        }
        if (a.goods !== undefined)
            this.gold.decode(a.goods);
        if (a.val !== undefined) {
            this.__decode_val(this.val, a.val);
        }
        if (a.abi_p_bsc !== undefined) {
            this.abi_p.bsc.decode(a.abi_p_bsc);
            // 暫定
            this.abi_p.ttl = this.abi_p.now = this.abi_p.bsc;
        }
        if (a.abi_m_bsc !== undefined) {
            this.abi_m.bsc.decode(a.abi_m_bsc);
            // 暫定
            this.abi_m.ttl = this.abi_m.now = this.abi_m.bsc;
        }
        return this;
    };
    C_Hero.prototype.__decode_val = function (d, s) {
        if (s.skp !== undefined)
            d.skp = this.__decode_skex(d.skp, s.skp);
        if (s.exp !== undefined)
            d.exp = this.__decode_skex(d.exp, s.exp);
        if (s.nxe !== undefined)
            d.nxe = s.nxe;
    };
    C_Hero.prototype.__decode_skex = function (a, s) {
        var _a, _b, _c, _d, _e;
        var d;
        if (a === undefined)
            d = { ttl: 0, now: 0 };
        else
            d = { ttl: (_a = a === null || a === void 0 ? void 0 : a.ttl) !== null && _a !== void 0 ? _a : 0, now: (_b = a === null || a === void 0 ? void 0 : a.now) !== null && _b !== void 0 ? _b : 0 };
        d.ttl = (_c = s.ttl) !== null && _c !== void 0 ? _c : d.ttl;
        d.now = (_e = (_d = s.now) !== null && _d !== void 0 ? _d : s.ttl) !== null && _e !== void 0 ? _e : d.now;
        return d;
    };
    C_Hero.create_hero = function () {
        var new_hero = new C_Hero();
        new_hero.set_prp({ id: Math.floor(-1000.0 * Math.random()) });
        new_hero.set_prp({ name: new_hero.id() });
        return new_hero;
    };
    C_Hero.prototype.random_make = function () {
        this.my_id = 0; // --Hero::$max_id;
        this.my_name = "冒険者 " + (0, F_Rand_1._random_str)(5);
        this.sex = (0, F_Rand_1._irand)(0, 1);
        this.age = (0, F_Rand_1._irand)(15, 25);
        this.state = 0;
        this.lv = 0;
        this.val = {
            skp: { ttl: 0, now: 0 },
            exp: { ttl: 0, now: 0 },
            'nxe': 1000
        };
        this.gold.random_make(C_GoodsItem_1.T_GoodsKind.Gold);
        var abi_p_bsc = this.abi_p.bsc;
        abi_p_bsc.random_make();
        abi_p_bsc.add_xp_bonus((this.age - 15) * 10);
        abi_p_bsc.add_el_bonus((this.age - 15) * 5);
        abi_p_bsc.add_pr_bonus((this.age - 15) * 2);
        this.abi_p.bsc = abi_p_bsc;
        var abi_m_bsc = this.abi_m.bsc;
        abi_m_bsc.random_make();
        abi_m_bsc.add_xp_bonus((this.age - 15) * 10);
        abi_m_bsc.add_el_bonus((this.age - 15) * 5);
        abi_m_bsc.add_pr_bonus((this.age - 15) * 2);
        this.abi_m.bsc = abi_m_bsc;
        return this;
    };
    C_Hero.encode_heroes = function (heroes) {
        var heroes_data = [];
        for (var _i = 0, heroes_1 = heroes; _i < heroes_1.length; _i++) {
            var hero = heroes_1[_i];
            heroes_data.push(hero.encode());
        }
        return heroes_data;
    };
    C_Hero.decode_heroes = function (heroes_data) {
        var heroes = [];
        if (heroes_data !== undefined) {
            for (var _i = 0, heroes_data_1 = heroes_data; _i < heroes_data_1.length; _i++) {
                var hero_data = heroes_data_1[_i];
                if (hero_data !== undefined)
                    heroes.push(new C_Hero().decode(hero_data));
            }
        }
        return heroes;
    };
    C_Hero.prototype.alert = function () {
        var _a, _b, _c, _d, _e;
        alert("Hero Info:\n"
            + "\nid:       " + ((_a = this.id) !== null && _a !== void 0 ? _a : '?')
            + "\nuniq_id   " + ((_b = this.uniq_id) !== null && _b !== void 0 ? _b : '?')
            + "\nname:     " + ((_c = this.name) !== null && _c !== void 0 ? _c : '?')
            + "\nsave_id:  " + ((_d = this.save_id) !== null && _d !== void 0 ? _d : '?')
            + "\nis_alive: " + ((_e = this.is_alive) !== null && _e !== void 0 ? _e : '?')
            + "\n");
    };
    C_Hero.alert_hres = function (a) {
        var _a;
        if (a === undefined)
            return;
        alert('Number of Hero = ' + a.length.toString());
        for (var i in a)
            (_a = a[i]) === null || _a === void 0 ? void 0 : _a.alert();
    };
    return C_Hero;
}());
exports.C_Hero = C_Hero;


/***/ }),

/***/ "../mai/src/d_mdl/C_HeroAbility.ts":
/*!*****************************************!*\
  !*** ../mai/src/d_mdl/C_HeroAbility.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_HeroAbility = void 0;
var F_Math_1 = __webpack_require__(/*! ../d_utl/F_Math */ "../mai/src/d_utl/F_Math.ts");
var F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "../mai/src/d_utl/F_Rand.ts");
var C_HeroAbility = /** @class */ (function () {
    function C_HeroAbility(a) {
        this.v = {
            xp: 0, // p:HP、m:MP
            // 以下、戦闘能力の基本値(p:物理、m:魔法)。ヒーローレベルやステータスアップで加算 
            atk: 0, // 攻撃値
            def: 0, // 防御値
            quc: 0, // 瞬発力
            cnc: 0, // 機運値(チャンス)
            // 以下、いわゆるステータス。上記の計算に影響。ヒーローレベルやステータスアップで加算
            str: 0, // 根性。攻撃/防御力にも影響。HP/MP回復やアイテムの最大所持重量にボーナス
            pwr: 0, // 基本的強さ。攻撃力に影響
            vit: 0, // 耐久力。HP/MPの最大値や防御力に影響を与える
            dex: 0, // 器用さ。命中率に影響を与える。飛び道具や長距離魔法では特に影響。罠解除にも影響
            agi: 0, // 素早さ。行動速度や回避率に影響を与える。命中率にも影響
            tec: 0, // 技術力。経験で向上して能力値(quc/cnc)にボーナスを与える
            luk: 0, // 幸運値。cncに大きく影響する
        };
        for (var idx in this.v) {
            this.v[idx] = 0;
        }
        if (a !== undefined)
            this.decode(a);
    }
    C_HeroAbility.prototype.set_prp = function (a) {
        this.decode(a);
    };
    C_HeroAbility.prototype.get = function (key) {
        if (!(key in this.v))
            return undefined;
        return this.v[key];
    };
    C_HeroAbility.prototype.set = function (key, s) {
        if (!(key in this.v))
            return undefined;
        this.v[key] = s[key];
        return s[key];
    };
    C_HeroAbility.prototype.xp_ttladd = function () {
        return (0, F_Math_1._round)(Math.floor(this.v.str + this.v.vit * 10.0), 0);
    };
    C_HeroAbility.prototype.atk_ttladd = function () {
        return (0, F_Math_1._round)(Math.floor(this.v.str + this.v.pwr + this.v.tec) / 10.0, 0);
    };
    C_HeroAbility.prototype.def_ttladd = function () {
        return (0, F_Math_1._round)(Math.floor(this.v.str + this.v.vit + this.v.tec) / 10.0, 0);
    };
    C_HeroAbility.prototype.quc_ttladd = function () {
        return (0, F_Math_1._round)(Math.floor(this.v.agi + this.v.luk + this.v.tec) / 10.0, 0);
    };
    C_HeroAbility.prototype.cnc_ttladd = function () {
        return (0, F_Math_1._round)(Math.floor(2.0 * this.v.luk + this.v.tec) / 10.0, 0);
    };
    C_HeroAbility.prototype.bonus = function (key) {
        if (!(key in this.v))
            return 0;
        if (key === 'xp')
            return (0, F_Math_1._round)(Math.floor(this.v.xp / 100), 0);
        return (0, F_Math_1._round)(Math.floor(this.v[key] / 10.0), 0);
    };
    C_HeroAbility.prototype.add = function (a) {
        for (var key in a) {
            this.v[key] += a[key];
        }
    };
    C_HeroAbility.prototype.add_xp_bonus = function (bonus) {
        this.v.xp += bonus;
    };
    C_HeroAbility.prototype.add_el_bonus = function (bonus) {
        this.v.atk += bonus;
        this.v.def += bonus;
        this.v.quc += bonus;
        this.v.cnc += bonus;
    };
    C_HeroAbility.prototype.add_pr_bonus = function (bonus) {
        this.v.str += bonus;
        this.v.pwr += bonus;
        this.v.vit += bonus;
        this.v.dex += bonus;
        this.v.agi += bonus;
        this.v.tec += bonus;
        this.v.luk += bonus;
    };
    C_HeroAbility.prototype.random_make = function () {
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
    };
    C_HeroAbility.prototype.encode = function () {
        var a = {};
        for (var key in this.v)
            a[key] = this.v[key];
        return a;
    };
    C_HeroAbility.prototype.decode = function (a) {
        for (var key in a) {
            if (key in this.v && a[key] !== undefined)
                this.v[key] = a[key];
        }
        return this;
    };
    C_HeroAbility.clone = function (s) {
        return new C_HeroAbility(s.encode());
    };
    return C_HeroAbility;
}());
exports.C_HeroAbility = C_HeroAbility;


/***/ }),

/***/ "../mai/src/d_mdl/C_Location.ts":
/*!**************************************!*\
  !*** ../mai/src/d_mdl/C_Location.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Location = exports.T_Lckd = void 0;
var C_PointDir_1 = __webpack_require__(/*! ./C_PointDir */ "../mai/src/d_mdl/C_PointDir.ts");
exports.T_Lckd = {
    Unkn: 0,
    Maze: 1,
    Guld: 2,
};
function _lckd_key(lckd) {
    var _a;
    return (_a = Object.keys(exports.T_Lckd).find(function (key) { return exports.T_Lckd[key] === lckd; })) !== null && _a !== void 0 ? _a : "????";
}
var C_Location = /** @class */ (function () {
    function C_Location(json) {
        this.loc_kind = exports.T_Lckd.Unkn;
        this.loc_name = '';
        this.loc_uid = '';
        this.loc_pos = new C_PointDir_1.C_PointDir();
        if (json !== undefined)
            this.decode(json);
    }
    C_Location.prototype.get_lckd_str = function () { return _lckd_key(this.loc_kind); };
    C_Location.prototype.get_lckd = function () { return this.loc_kind; };
    C_Location.prototype.get_name = function () { return this.loc_name; };
    C_Location.prototype.get_uid = function () { return this.loc_uid; };
    C_Location.prototype.set_lckd = function (lckd) {
        if (!(_lckd_key(lckd) in exports.T_Lckd))
            return undefined;
        this.loc_kind = lckd;
        return this;
    };
    C_Location.prototype.set_name = function (name) { this.loc_name = name; };
    C_Location.prototype.set_uid = function (uid) { this.loc_uid = uid; };
    C_Location.prototype.set_lckd_str = function (lckd) {
        if (!(lckd in exports.T_Lckd))
            return undefined;
        this.loc_kind = exports.T_Lckd[lckd];
        return this;
    };
    C_Location.prototype.get_p = function () {
        //        if (this.loc_kind != T_Lckd.Maze) return undefined;
        return this.loc_pos.get_p();
    };
    C_Location.prototype.get_d = function () {
        //        if (this.loc_kind != T_Lckd.Maze) return undefined;
        return this.loc_pos.get_d();
    };
    C_Location.prototype.get_pd = function () {
        //        if (this.loc_kind != T_Lckd.Maze) return undefined;
        return this.loc_pos.get_pd();
    };
    C_Location.prototype.set_p = function (p) {
        if (this.loc_kind !== exports.T_Lckd.Maze)
            return undefined;
        if (this.loc_pos.set_p(p) === undefined)
            return undefined;
        return this.loc_pos;
    };
    C_Location.prototype.set_d = function (d) {
        if (this.loc_kind !== exports.T_Lckd.Maze)
            return undefined;
        if (this.loc_pos.set_d(d) === undefined)
            return undefined;
        return this.loc_pos.d;
    };
    C_Location.prototype.set_pd = function (pd) {
        if (this.loc_kind !== exports.T_Lckd.Maze)
            return undefined;
        if (this.loc_pos.set_pd(pd) === undefined)
            return undefined;
        return this.loc_pos;
    };
    C_Location.prototype.encode = function () {
        return {
            kind: _lckd_key(this.loc_kind),
            name: this.loc_name,
            loc_uid: this.loc_uid,
            loc_pos: this.loc_pos.encode(),
        };
    };
    C_Location.prototype.decode = function (j) {
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
    };
    return C_Location;
}());
exports.C_Location = C_Location;


/***/ }),

/***/ "../mai/src/d_mdl/C_Maze.ts":
/*!**********************************!*\
  !*** ../mai/src/d_mdl/C_Maze.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Maze = void 0;
exports.alert_maze_info = alert_maze_info;
var T_MzKind_1 = __webpack_require__(/*! ./T_MzKind */ "../mai/src/d_mdl/T_MzKind.ts");
var C_MazeCell_1 = __webpack_require__(/*! ./C_MazeCell */ "../mai/src/d_mdl/C_MazeCell.ts");
var C_MazeObj_1 = __webpack_require__(/*! ./C_MazeObj */ "../mai/src/d_mdl/C_MazeObj.ts");
var C_Point_1 = __webpack_require__(/*! ./C_Point */ "../mai/src/d_mdl/C_Point.ts");
var C_Location_1 = __webpack_require__(/*! ./C_Location */ "../mai/src/d_mdl/C_Location.ts");
var C_Range_1 = __webpack_require__(/*! ./C_Range */ "../mai/src/d_mdl/C_Range.ts");
var F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "../mai/src/d_utl/F_Rand.ts");
var F_Math_1 = __webpack_require__(/*! ../d_utl/F_Math */ "../mai/src/d_utl/F_Math.ts");
var C_PointDir_1 = __webpack_require__(/*! ./C_PointDir */ "../mai/src/d_mdl/C_PointDir.ts");
var T_Direction_1 = __webpack_require__(/*! ./T_Direction */ "../mai/src/d_mdl/T_Direction.ts");
var C_PointSet2D_1 = __webpack_require__(/*! ./C_PointSet2D */ "../mai/src/d_mdl/C_PointSet2D.ts");
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
var C_Maze = /** @class */ (function () {
    function C_Maze(a) {
        this.my_layer = 0;
        this.num_of_room = 5; /* ランダム生成の際の部屋の数の最大数 */
        this.max_size_of_room = 3; /* ランダム生成の際の部屋の大きさ */
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
    C_Maze.prototype.__init_maze = function (kind) {
        if (kind === void 0) { kind = T_MzKind_1.T_MzKind.Stone; }
        var size_x = this.size.size_x();
        var size_y = this.size.size_y();
        var size_z = this.size.size_z();
        var cells = Array(size_z);
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
    };
    C_Maze.prototype.__init_mask = function (YN) {
        var size_x = this.size.size_x();
        var size_y = this.size.size_y();
        var size_z = this.size.size_z();
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
    };
    C_Maze.prototype.__init_unclear = function () {
        var size_x = this.size.size_x();
        var size_y = this.size.size_y();
        var size_z = this.size.size_z();
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
    };
    C_Maze.prototype.uid = function () { return this.uniq_id; };
    C_Maze.prototype.get_lckd = function () { return C_Location_1.T_Lckd.Maze; };
    C_Maze.prototype.get_name = function () { return this.name; };
    C_Maze.prototype.within = function (p) {
        return this.size.within(p);
    };
    // メイズ内のオブジェクトやモンスター等の配置
    C_Maze.prototype.add_obj = function (obj) {
        this.objs[obj.uid()] = obj;
    };
    C_Maze.prototype.rmv_obj = function (obj) {
        delete this.objs[obj.uid()];
    };
    C_Maze.prototype.get_obj_xyz = function (x, y, z) {
        return this.get_obj(new C_Point_1.C_Point(x, y, z));
    };
    C_Maze.prototype.get_obj = function (p) {
        var _a, _b, _c, _d, _e;
        var layer = -1;
        var obj = null;
        for (var id in this.objs) {
            var exist = this.objs[id];
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
    };
    C_Maze.prototype.exist_obj = function (p) {
        var _a;
        for (var id in this.objs) {
            var exist = this.objs[id];
            if (exist.within(p) && ((_a = exist.view()) === null || _a === void 0 ? void 0 : _a.letter()) !== null)
                return true;
        }
        return false;
    };
    // Teamが来たポイントが未踏地だったらただの床に変える
    C_Maze.prototype.change_unexp_to_floor = function (p) {
        if (this.get_kind(p) == T_MzKind_1.T_MzKind.Unexp) {
            this.set_cell(p, T_MzKind_1.T_MzKind.Floor);
        }
    };
    // 2Dマップのマスク外し関連
    C_Maze.prototype.clear_mask_around_the_team = function (team) {
        // 現在地と真横は自動的に見える
        this.__clear_mask(team.walk().get_around(0, -1));
        this.__clear_mask(team.walk().get_around(0, 0));
        this.__clear_mask(team.walk().get_around(0, 1));
        var depth = 5; // 2Dマップ用の奥行き限界
        // 前方の見通しをチェックしながら見えるところは解放する
        for (var d = 1; d < depth; d++) {
            var front_pos = team.walk().get_around(d, 0);
            if (this.is_movable(front_pos)) {
                // 正面に障害物が無ければ、その両側も見える
                this.__clear_mask(team.walk().get_around(d, -1));
                this.__clear_mask(team.walk().get_around(d, 0));
                this.__clear_mask(team.walk().get_around(d, 1));
            }
            else {
                // 正面が障害物でもその手前まで見えてたなら、その壁と両側は見える
                this.__clear_mask(team.walk().get_around(d, -1));
                this.__clear_mask(team.walk().get_around(d, 0));
                this.__clear_mask(team.walk().get_around(d, 1));
                // 正面に障害物が有ったらその奥は見えないので探索終了
                break;
            }
        }
    };
    C_Maze.prototype.__clear_mask = function (clr_pos) {
        if (!this.size.within(clr_pos))
            return;
        if (this.masks[clr_pos.z][clr_pos.y][clr_pos.x]) {
            this.masks[clr_pos.z][clr_pos.y][clr_pos.x] = false;
            this.unclear[clr_pos.z]--;
        }
    };
    C_Maze.prototype.is_cleared = function (clr_pos) {
        return this.unclear[clr_pos.z] < 1;
    };
    C_Maze.prototype.is_masked = function (p) { return this.is_masked_xyz(p.x, p.y, p.z); };
    C_Maze.prototype.is_masked_xyz = function (x, y, z) {
        return this.masks[z][y][x];
    };
    C_Maze.prototype.is_movable = function (p) {
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
    };
    C_Maze.prototype.get_x_max = function () { return this.size.size_x(); };
    C_Maze.prototype.get_y_max = function () { return this.size.size_y(); };
    C_Maze.prototype.get_z_max = function () { return this.size.size_z(); };
    C_Maze.prototype.get_kind = function (p) {
        if (this.size.within(p))
            return this.cells[p.z][p.y][p.x].getKind();
        return T_MzKind_1.T_MzKind.NoDef;
    };
    C_Maze.prototype.get_kind_xyz = function (x, y, z) {
        if (this.size.within(x, y, z))
            return this.cells[z][y][x].getKind();
        return T_MzKind_1.T_MzKind.NoDef;
    };
    C_Maze.prototype.get_cell_xyz = function (x, y, z) {
        if (this.size.within(x, y, z))
            return this.cells[z][y][x];
        return undefined;
    };
    C_Maze.prototype.get_cell = function (p) {
        if (this.size.within(p))
            return this.cells[p.z][p.y][p.x];
        return undefined;
    };
    C_Maze.prototype.set_cell = function (p, k) {
        if (this.size.within(p)) {
            this.cells[p.z][p.y][p.x] = C_MazeCell_1.C_MazeCell.newObj({ kind: k, pos: p });
        }
    };
    C_Maze.prototype.set_cell_xyz = function (x, y, z, k) {
        if (this.size.within(x, y, z)) {
            this.cells[z][y][x] = C_MazeCell_1.C_MazeCell.newObj({ kind: k, pos: { x: x, y: y, z: z } });
        }
    };
    C_Maze.prototype.can_move = function (p) {
        return this.size.within(p);
    };
    C_Maze.prototype.can_UD = function (p) {
        return this.is_movable(p);
    };
    C_Maze.prototype.fill_cell = function (kind, floor) {
        for (var h = 0; h < this.size.size_y(); h++)
            for (var w = 0; w < this.size.size_x(); w++)
                this.set_cell_xyz(w, h, floor, kind);
        return;
    };
    C_Maze.prototype.set_box = function (kind, top_x, top_y, size_x, size_y, floor) {
        if (top_x + size_x > this.size.size_x())
            size_x = this.size.size_x() - top_x + 1;
        if (top_y + size_y > this.size.size_y())
            size_y = this.size.size_y() - top_y + 1;
        var top = top_y;
        var btm = top + size_y - 1;
        var lft = top_x;
        var rgt = lft + size_x - 1;
        // 北側(上)と南側(下)を石壁に
        for (var x = 0; x < size_x; x++) {
            this.set_cell_xyz(x, top, floor, kind);
            this.set_cell_xyz(x, btm, floor, kind);
        }
        // 東側(右)と西側(左)を石壁に
        for (var y = 0; y < size_y; y++) {
            this.set_cell_xyz(lft, y, floor, kind);
            this.set_cell_xyz(rgt, y, floor, kind);
        }
        return;
    };
    // 階上と階下に階段を設置する
    C_Maze.prototype.create_stair = function (floor) {
        var _a, _b;
        var H_size_x = (this.size.size_x() - 1) / 2;
        var H_size_y = (this.size.size_y() - 1) / 2;
        var pos_x = 2 * (0, F_Rand_1._irand)(0, H_size_x - 1) + 1;
        var pos_y = 2 * (0, F_Rand_1._irand)(0, H_size_y - 1) + 1;
        var pos_d = 1 * (0, F_Rand_1._irand)(0, T_Direction_1.T_Direction.MAX);
        // 乱数で得た座標に階段を置く
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
    };
    C_Maze.prototype.create_maze = function (floor) {
        var _a, _b;
        var size_x = this.size.size_x();
        var size_y = this.size.size_y();
        // ダンジョンで$floorで指定された階を未踏地にする 
        this.fill_cell(T_MzKind_1.T_MzKind.Unexp, floor);
        // ダンジョンの輪郭を石壁にする
        this.set_box(T_MzKind_1.T_MzKind.Stone, 0, 0, size_x, size_y, floor);
        // 通路に一つ置きに壁が成長するポイントを設定する
        // ポイントから壁を伸ばす方向をランダムに決める
        var points = new C_PointSet2D_1.C_PointSet2D();
        for (var h = 2; h < size_y - 2; h += 2) {
            for (var w = 2; w < size_x - 2; w += 2) {
                var di = (0, F_Rand_1._irand)(0, T_Direction_1.T_Direction.MAX);
                points.push(new C_PointSet2D_1.C_PointLink2D(w, h, di));
            }
        }
        // 乱数でいくつか部屋を作る
        var rooms_array = [];
        var num_of_room = (0, F_Rand_1._irand)(0, this.num_of_room);
        for (var cnt = 0; cnt < num_of_room; cnt++) {
            var leng_x = (0, F_Rand_1._irand)(1, this.max_size_of_room) * 2 + 1;
            var leng_y = (0, F_Rand_1._irand)(1, this.max_size_of_room) * 2 + 1;
            var room_x = (0, F_Rand_1._irand)(0, (size_x - leng_x) / 2) * 2;
            var room_y = (0, F_Rand_1._irand)(0, (size_y - leng_y) / 2) * 2;
            rooms_array.push({ tx: room_x, ty: room_y, sx: leng_x, sy: leng_y });
        }
        // 部屋の中のポイントを削除する
        for (var _i = 0, rooms_array_1 = rooms_array; _i < rooms_array_1.length; _i++) {
            var room = rooms_array_1[_i];
            for (var ii = 0; ii < points.set.length; ii++) {
                var p = points.set[ii];
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
        // ポイントから壁を成長させて迷路を作る
        for (var _c = 0, _d = points.set; _c < _d.length; _c++) {
            var p = _d[_c];
            if (p === undefined)
                continue;
            // ポイントの位置に石壁を置く
            this.set_cell_xyz(p.x, p.y, floor, T_MzKind_1.T_MzKind.Stone);
            // 柱の東西南北のいずれかにも石壁を置く
            var direction = [0, 0, 0, 0];
            var di = (_b = (_a = C_PointSet2D_1.C_PointLink2D.cast(p)) === null || _a === void 0 ? void 0 : _a.di) !== null && _b !== void 0 ? _b : T_Direction_1.T_Direction.X;
            if (di === T_Direction_1.T_Direction.X)
                continue;
            direction[di] = 1;
            this.set_cell_xyz(p.x - direction[T_Direction_1.T_Direction.W] + direction[T_Direction_1.T_Direction.E], p.y - direction[T_Direction_1.T_Direction.N] + direction[T_Direction_1.T_Direction.S], floor, T_MzKind_1.T_MzKind.Stone);
        }
        // 閉鎖空間が出来ていたら出口を作る
        // ポイントをトレースして、既出のポイントに繋がっていたら閉鎖空間
        for (var _e = 0, _f = points.set; _e < _f.length; _e++) {
            var set = _f[_e];
            if (set === undefined)
                continue;
            var _g = this.check_close(set.x, set.y, points, new C_PointSet2D_1.C_PointSet2D()), yn = _g[0], trace_set = _g[1];
            if (yn) {
                this.open_exit(trace_set, T_MzKind_1.T_MzKind.Unexp, floor);
                if (trace_set !== undefined)
                    for (var _h = 0, _j = trace_set.set; _h < _j.length; _h++) {
                        var t = _j[_h];
                        points.remove(t);
                    }
            }
        }
        return;
    };
    C_Maze.prototype.check_close = function (x, y, point_set, trace_set) {
        var _a, _b;
        if (x < 2 || y < 2 || x > this.size.size_x() - 2 || y > this.size.size_y() - 2)
            return [false, undefined];
        if (point_set === undefined)
            return [false, undefined];
        if ((point_set === null || point_set === void 0 ? void 0 : point_set.is_exist(x, y)) === false)
            return [false, undefined];
        if (trace_set !== undefined && (trace_set === null || trace_set === void 0 ? void 0 : trace_set.is_exist(x, y)) === true)
            return [true, trace_set];
        var p = point_set.get_point(x, y);
        trace_set !== null && trace_set !== void 0 ? trace_set : (trace_set = new C_PointSet2D_1.C_PointSet2D());
        trace_set === null || trace_set === void 0 ? void 0 : trace_set.push(new C_PointSet2D_1.C_PointLink2D(x, y, (_a = C_PointSet2D_1.C_PointLink2D.cast(p)) === null || _a === void 0 ? void 0 : _a.di));
        var next_x = 0, next_y = 0;
        switch ((_b = C_PointSet2D_1.C_PointLink2D.cast(p)) === null || _b === void 0 ? void 0 : _b.di) {
            case T_Direction_1.T_Direction.N: // 北
                next_x = x;
                next_y = y - 2;
                break;
            case T_Direction_1.T_Direction.E: // 東
                next_x = x + 2;
                next_y = y;
                break;
            case T_Direction_1.T_Direction.S: // 南
                next_x = x;
                next_y = y + 2;
                break;
            case T_Direction_1.T_Direction.W: // 西
                next_x = x - 2;
                next_y = y;
                break;
        }
        return this.check_close(next_x, next_y, point_set, trace_set);
    };
    C_Maze.prototype.open_exit = function (p, kind, floor) {
        var _a, _b;
        if (p === undefined)
            return;
        var cnt = (0, F_Rand_1._irand)(0, p.set.length - 1);
        var pp = p.set[cnt];
        var direction = [0, 0, 0, 0];
        var di = (_b = (_a = C_PointSet2D_1.C_PointLink2D.cast(pp)) === null || _a === void 0 ? void 0 : _a.di) !== null && _b !== void 0 ? _b : T_Direction_1.T_Direction.N;
        direction[di] = 1;
        this.set_cell_xyz(pp.x - direction[T_Direction_1.T_Direction.W] + direction[T_Direction_1.T_Direction.E], pp.y - direction[T_Direction_1.T_Direction.N] + direction[T_Direction_1.T_Direction.S], floor, kind);
        return;
    };
    C_Maze.from_obj_to_string = function (oa) {
        return JSON.stringify(oa, null, "\t");
    };
    C_Maze.from_objArray_to_string = function (oaa) {
        var oa = [];
        for (var ii in oaa)
            oa.push(oaa[ii]);
        return JSON.stringify(oa, null, "\t");
    };
    C_Maze.from_string_to_obj = function (txt) {
        try {
            var j = JSON.parse(txt);
            return new C_Maze().decode(j);
        }
        catch (err) {
            return new C_Maze();
        }
        ;
    };
    C_Maze.from_string_to_objArray = function (txt) {
        try {
            var j = JSON.parse(txt);
            var mpa = {};
            for (var _i = 0, j_1 = j; _i < j_1.length; _i++) {
                var jj = j_1[_i];
                var aaa = new C_Maze().decode(jj);
                mpa[aaa.uid()] = aaa;
            }
            return mpa;
        }
        catch (err) {
            return {};
        }
        ;
    };
    C_Maze.prototype.to_letter = function (p) {
        return this.cells[p.z][p.y][p.x].to_letter();
    };
    C_Maze.prototype.to_string = function (floor, debug_mode) {
        var _a, _b;
        if (floor === void 0) { floor = 0; }
        if (debug_mode === void 0) { debug_mode = false; }
        var size_x = this.size.size_x();
        var size_y = this.size.size_y();
        var ret_str = '';
        for (var y = 0; y < size_y; y++) {
            for (var x = 0; x < size_x; x++) {
                var obj = this.get_obj_xyz(x, y, floor);
                if (!debug_mode && this.masks[floor][y][x]) {
                    ret_str += 'Ｘ';
                }
                else {
                    var obj_c = (_b = (_a = obj === null || obj === void 0 ? void 0 : obj.view()) === null || _a === void 0 ? void 0 : _a.letter()) !== null && _b !== void 0 ? _b : null;
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
    };
    C_Maze.prototype.encode = function () {
        var size_x = this.size.size_x();
        var size_y = this.size.size_y();
        var size_z = this.size.size_z();
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
        var maze_str = z_array.join('Z');
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
        var mask_str = z_array.join('Z');
        var objs = [];
        for (var ii in this.objs)
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
    };
    C_Maze.prototype.decode = function (a) {
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
            for (var _i = 0, _a = a.objs; _i < _a.length; _i++) {
                var json_obj = _a[_i];
                var new_obj = C_MazeObj_1.C_MazeObj.newObj(json_obj);
                this.objs[new_obj.uid()] = new_obj;
            }
        }
        if (a.size_x !== undefined && a.size_y !== undefined && a.size_z !== undefined) {
            this.size = new C_Range_1.C_Range(new C_Point_1.C_Point(0, 0, 0), new C_Point_1.C_Point(a.size_x - 1, a.size_y - 1, a.size_z - 1));
            this.cells = this.__init_maze(T_MzKind_1.T_MzKind.Stone);
            this.masks = this.__init_mask(true);
            this.__init_unclear();
        }
        var size_x = this.size.size_x();
        var size_y = this.size.size_y();
        var size_z = this.size.size_z();
        if (a.maze !== undefined) {
            /*
                        for (var z = 0; z < size_z; z++)
                        for (var y = 0; y < size_y; y++)
                        for (var x = 0; x < size_x; x++) {
                            this.cells[z][y][x].set(T_MzKind.Stone);
                        }
            */
            var z_array = a.maze.split('Z');
            var z_max = (0, F_Math_1._min)([size_z, z_array.length]);
            for (var z = 0; z < z_max; z++) {
                var y_array = z_array[z].split('Y');
                var y_max = (0, F_Math_1._min)([size_y, y_array.length]);
                for (var y = 0; y < y_max; y++) {
                    var x_array = y_array[y].split('X');
                    var x_max = (0, F_Math_1._min)([size_x, x_array.length]);
                    for (var x = 0; x < x_max; x++) {
                        var kind = parseInt(x_array[x], 16);
                        this.cells[z][y][x] = C_MazeCell_1.C_MazeCell.newObj({ kind: kind, pos: { x: x, y: y, z: z } });
                    }
                }
            }
        }
        if (a.mask !== undefined) {
            this.__init_mask(true);
            var z_array = a.mask.split('Z');
            var z_max = (0, F_Math_1._min)([size_z, z_array.length]);
            for (var z = 0; z < z_max; z++) {
                var y_array = z_array[z].split('Y');
                var y_max = (0, F_Math_1._min)([size_y, y_array.length]);
                for (var y = 0; y < y_max; y++) {
                    var x_array = y_array[y].split('X');
                    var x_max = (0, F_Math_1._min)([size_x, x_array.length]);
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
    };
    C_Maze.encode_all = function (all_maze) {
        var all_maze_data = [];
        for (var _i = 0, all_maze_1 = all_maze; _i < all_maze_1.length; _i++) {
            var maze = all_maze_1[_i];
            all_maze_data.push(maze.encode());
        }
        return all_maze_data;
    };
    C_Maze.decode_all = function (all_maze_data) {
        var all_maze = [];
        for (var _i = 0, all_maze_data_1 = all_maze_data; _i < all_maze_data_1.length; _i++) {
            var maze_data = all_maze_data_1[_i];
            all_maze.push((new C_Maze({})).decode(maze_data));
        }
        return all_maze;
    };
    C_Maze.prototype.alert = function () {
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
    };
    C_Maze.prototype.alert_maze = function (floor) {
        var _a;
        if (floor === void 0) { floor = 0; }
        alert("Maze Map:"
            + "maze:\n" + ((_a = this.to_string(floor, true)) !== null && _a !== void 0 ? _a : '?')
            + "\n");
    };
    C_Maze.prototype.alert_mask = function (floor) {
        var _a;
        if (floor === void 0) { floor = 0; }
        alert("Mask Map:"
            + "mask:\n" + ((_a = this.to_string(floor, false)) !== null && _a !== void 0 ? _a : '?')
            + "\n");
    };
    return C_Maze;
}());
exports.C_Maze = C_Maze;


/***/ }),

/***/ "../mai/src/d_mdl/C_MazeCell.ts":
/*!**************************************!*\
  !*** ../mai/src/d_mdl/C_MazeCell.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_MazeCell = void 0;
var T_MzKind_1 = __webpack_require__(/*! ./T_MzKind */ "../mai/src/d_mdl/T_MzKind.ts");
var C_MazeObj_1 = __webpack_require__(/*! ./C_MazeObj */ "../mai/src/d_mdl/C_MazeObj.ts");
var C_MazeCell = /** @class */ (function () {
    function C_MazeCell(j) {
        var _a, _b, _c;
        var _d;
        (_a = j.obj) !== null && _a !== void 0 ? _a : (j.obj = {});
        (_b = (_d = j.obj).clname) !== null && _b !== void 0 ? _b : (_d.clname = this.constructor.name);
        this.kind = (_c = j.kind) !== null && _c !== void 0 ? _c : T_MzKind_1.T_MzKind.NoDef;
        this.my_obj = C_MazeObj_1.C_MazeObj.newObj(j.obj);
    }
    C_MazeCell.newObj = function (j) {
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
    };
    C_MazeCell.prototype.getObj = function () { return this.my_obj; };
    C_MazeCell.prototype.getKind = function () {
        return this.kind;
    };
    C_MazeCell.prototype.to_letter = function () {
        var _a, _b;
        return (_b = (_a = this.my_obj.view()) === null || _a === void 0 ? void 0 : _a.letter()) !== null && _b !== void 0 ? _b : 'Ｘ';
    };
    C_MazeCell.from_letter = function (letter) {
        for (var _i = 0, _a = Object.keys(T_MzKind_1.T_MzKind); _i < _a.length; _i++) {
            var key = _a[_i];
            if (letter === key)
                return T_MzKind_1.T_MzKind[key];
        }
        return T_MzKind_1.T_MzKind.NoDef;
    };
    C_MazeCell.prototype.drow3D = function (frot, back) {
        var _a;
        (_a = this.my_obj.view()) === null || _a === void 0 ? void 0 : _a.drow3D(frot, back);
    };
    C_MazeCell.prototype.encode = function () {
        return this.kind.toString(16).padStart(2, "0");
    };
    C_MazeCell.decode = function (str, j) {
        var kind = parseInt(str, 16);
        return C_MazeCell.newObj({ kind: kind, pos: j === null || j === void 0 ? void 0 : j.pos });
    };
    return C_MazeCell;
}());
exports.C_MazeCell = C_MazeCell;
var C_MazeCellNoDef = /** @class */ (function (_super) {
    __extends(C_MazeCellNoDef, _super);
    function C_MazeCellNoDef(j) {
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
            col_l: '',
        };
        return _super.call(this, j) || this;
    }
    return C_MazeCellNoDef;
}(C_MazeCell));
var C_MazeCellUnkwn = /** @class */ (function (_super) {
    __extends(C_MazeCellUnkwn, _super);
    function C_MazeCellUnkwn(j) {
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
            col_l: '',
        };
        return _super.call(this, j) || this;
    }
    return C_MazeCellUnkwn;
}(C_MazeCell));
var C_MazeCellEmpty = /** @class */ (function (_super) {
    __extends(C_MazeCellEmpty, _super);
    function C_MazeCellEmpty(j) {
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
            col_l: '',
        };
        return _super.call(this, j) || this;
    }
    return C_MazeCellEmpty;
}(C_MazeCell));
var C_MazeCellFloor = /** @class */ (function (_super) {
    __extends(C_MazeCellFloor, _super);
    function C_MazeCellFloor(j) {
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
            col_l: '#9999ff',
        };
        return _super.call(this, j) || this;
    }
    return C_MazeCellFloor;
}(C_MazeCell));
var C_MazeCellUnexp = /** @class */ (function (_super) {
    __extends(C_MazeCellUnexp, _super);
    function C_MazeCellUnexp(j) {
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
            col_l: '#9999ff',
        };
        return _super.call(this, j) || this;
    }
    return C_MazeCellUnexp;
}(C_MazeCell));
var C_MazeCellStone = /** @class */ (function (_super) {
    __extends(C_MazeCellStone, _super);
    function C_MazeCellStone(j) {
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
            col_l: '#0000ff',
        };
        return _super.call(this, j) || this;
    }
    return C_MazeCellStone;
}(C_MazeCell));
var C_MazeCellStrUp = /** @class */ (function (_super) {
    __extends(C_MazeCellStrUp, _super);
    function C_MazeCellStrUp(j) {
        var _a;
        j !== null && j !== void 0 ? j : (j = { kind: T_MzKind_1.T_MzKind.StrUp });
        (_a = j.obj) !== null && _a !== void 0 ? _a : (j.obj = {});
        j.obj.can_thr = '1';
        j.obj.pos = { x: j.x, y: j.y, z: j.z };
        j.obj.view = {
            layer: 0, letter: '上',
            show3D: '1',
            pad_t: 0.0, pad_d: 0.0, pad_s: 0.0,
            col_f: '', col_b: '', col_s: '', col_t: '#ffffcc', col_d: '#ffffcc',
            col_l: '#0000ff',
        };
        return _super.call(this, j) || this;
    }
    return C_MazeCellStrUp;
}(C_MazeCell));
var C_MazeCellStrDn = /** @class */ (function (_super) {
    __extends(C_MazeCellStrDn, _super);
    function C_MazeCellStrDn(j) {
        var _a;
        j !== null && j !== void 0 ? j : (j = { kind: T_MzKind_1.T_MzKind.StrDn });
        (_a = j.obj) !== null && _a !== void 0 ? _a : (j.obj = {});
        j.obj.can_thr = '1';
        j.obj.pos = { x: j.x, y: j.y, z: j.z };
        j.obj.view = {
            layer: 0, letter: '下',
            show3D: '1',
            pad_t: 0.0, pad_d: 0.0, pad_s: 0.0,
            col_f: '', col_b: '', col_s: '', col_t: '#ffffcc', col_d: '#ffffcc',
            col_l: '#0000ff',
        };
        return _super.call(this, j) || this;
    }
    return C_MazeCellStrDn;
}(C_MazeCell));
var C_MazeCellStrUD = /** @class */ (function (_super) {
    __extends(C_MazeCellStrUD, _super);
    function C_MazeCellStrUD(j) {
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
            col_l: '#0000ff',
        };
        return _super.call(this, j) || this;
    }
    return C_MazeCellStrUD;
}(C_MazeCell));


/***/ }),

/***/ "../mai/src/d_mdl/C_MazeInfo.ts":
/*!**************************************!*\
  !*** ../mai/src/d_mdl/C_MazeInfo.ts ***!
  \**************************************/
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
var C_MazeInfo = /** @class */ (function () {
    function C_MazeInfo(j) {
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
    C_MazeInfo.get_tbl_all = function () {
        var mazeinfo = [];
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
    };
    C_MazeInfo.prototype.encode = function () {
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
    };
    C_MazeInfo.prototype.decode = function (j) {
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
    };
    C_MazeInfo.prototype.alert = function () {
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
    };
    return C_MazeInfo;
}());
exports.C_MazeInfo = C_MazeInfo;


/***/ }),

/***/ "../mai/src/d_mdl/C_MazeObj.ts":
/*!*************************************!*\
  !*** ../mai/src/d_mdl/C_MazeObj.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_MazeObj = void 0;
var C_PointDir_1 = __webpack_require__(/*! ./C_PointDir */ "../mai/src/d_mdl/C_PointDir.ts");
var F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "../mai/src/d_utl/F_Rand.ts");
var C_MazeObjView_1 = __webpack_require__(/*! ./C_MazeObjView */ "../mai/src/d_mdl/C_MazeObjView.ts");
var C_MazeObj = /** @class */ (function () {
    function C_MazeObj(j) {
        this.clname = 'C_MazeObj';
        this.uniq_id = 'mazeobj_' + (0, F_Rand_1._get_uuid)();
        this.clname = C_MazeObj.constructor.name;
        this.pos = new C_PointDir_1.C_PointDir({ x: 0, y: 0, z: 0, d: 0 });
        this.my_view = undefined;
        this.can_thr = true;
        if (j !== undefined)
            this.__init(j);
    }
    C_MazeObj.newObj = function (j) {
        var _a;
        j !== null && j !== void 0 ? j : (j = {});
        (_a = j.clname) !== null && _a !== void 0 ? _a : (j.clname = C_MazeObj.constructor.name);
        switch (j.clname) {
            case C_MazeObj.constructor.name: return new C_MazeObj(j);
        }
        return new C_MazeObj(j);
    };
    C_MazeObj.prototype.newObj = function (j) {
        return C_MazeObj.newObj(j);
    };
    C_MazeObj.prototype.__init = function (j) {
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
    };
    C_MazeObj.prototype.uid = function () { return this.uniq_id; };
    C_MazeObj.prototype.view = function () { return this.my_view; };
    C_MazeObj.prototype.setView = function (view) { this.my_view = view; };
    C_MazeObj.prototype.canThrough = function () { return this.can_thr; };
    C_MazeObj.prototype.setThrough = function (thr) { return this.can_thr = thr; };
    C_MazeObj.prototype.get_pd = function () {
        return new C_PointDir_1.C_PointDir(this.pos);
    };
    C_MazeObj.prototype.set_pd = function (p) {
        this.pos = p;
    };
    C_MazeObj.prototype.within = function (p) {
        return this.pos.within(p);
    };
    C_MazeObj.prototype.encode = function () {
        var _a, _b;
        return {
            uniq_id: this.uniq_id,
            clname: this.clname,
            pos: this.pos.encode(),
            view: (_b = (_a = this.my_view) === null || _a === void 0 ? void 0 : _a.encode()) !== null && _b !== void 0 ? _b : {},
            can_thr: this.can_thr ? '1' : '0',
        };
    };
    C_MazeObj.prototype.decode = function (j) {
        return this.__init(j);
    };
    C_MazeObj.decode = function (j) {
        return C_MazeObj.newObj(j);
    };
    return C_MazeObj;
}());
exports.C_MazeObj = C_MazeObj;


/***/ }),

/***/ "../mai/src/d_mdl/C_MazeObjView.ts":
/*!*****************************************!*\
  !*** ../mai/src/d_mdl/C_MazeObjView.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_MazeObjView = void 0;
var C_MazeObjView = /** @class */ (function () {
    function C_MazeObjView(j) {
        this.clname = 'C_MazeObjView';
        this.clname = this.constructor.name;
        this.my_layer = -2;
        this.my_letter = null;
        this.my_pad_t = 0.0;
        this.my_pad_d = 0.0;
        this.my_pad_s = 0.0;
        this.my_show3D = true;
        this.my_col_f = '#f8f8f8';
        this.my_col_b = '#aaaaaa';
        this.my_col_s = '#dddddd';
        this.my_col_t = '#ffffff';
        this.my_col_d = '#cccccc';
        this.my_col_l = '#333333';
        if (j !== undefined)
            this.__init(j);
    }
    C_MazeObjView.get_context3D = function () { return this === null || this === void 0 ? void 0 : this.con3D; };
    C_MazeObjView.set_context3D = function (con3D) { this.con3D = con3D; };
    C_MazeObjView.newObj = function (j) {
        var _a;
        j !== null && j !== void 0 ? j : (j = {});
        (_a = j.clname) !== null && _a !== void 0 ? _a : (j.clname = C_MazeObjView.constructor.name);
        switch (j.clname) {
            case C_MazeObjView.constructor.name: return new C_MazeObjView(j);
        }
        return new C_MazeObjView(j);
    };
    C_MazeObjView.prototype.newObj = function (j) {
        return C_MazeObjView.newObj(j);
    };
    C_MazeObjView.prototype.__init = function (j) {
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
        if (j.show3D !== undefined)
            this.my_show3D = j.show3D !== '0' ? true : false;
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
        return this;
    };
    C_MazeObjView.prototype.layer = function () { return this.my_layer; };
    C_MazeObjView.prototype.set_layer = function (layer) { this.my_layer = layer; };
    C_MazeObjView.prototype.letter = function () { return this.my_letter; };
    C_MazeObjView.prototype.set_letter = function (letter) { return this.my_letter = letter; };
    C_MazeObjView.prototype.canShow = function () { return this.my_show3D; };
    ;
    C_MazeObjView.prototype.setShow = function (can_show) { return this.my_show3D = can_show; };
    ;
    C_MazeObjView.prototype.pad_t = function () { return this.my_pad_t; };
    C_MazeObjView.prototype.pad_d = function () { return this.my_pad_d; };
    C_MazeObjView.prototype.pad_s = function () { return this.my_pad_s; };
    C_MazeObjView.prototype.set_pad_t = function (pad_t) { return this.my_pad_t = this.my_pad_d + pad_t < 1.0 ? pad_t : 0.99 - this.my_pad_d; };
    C_MazeObjView.prototype.set_pad_d = function (pad_d) { return this.my_pad_d = this.my_pad_t + pad_d < 1.0 ? pad_d : 0.99 - this.my_pad_t; };
    C_MazeObjView.prototype.set_pad_s = function (pad_s) { return this.my_pad_s = pad_s; };
    C_MazeObjView.prototype.col_f = function () { return this.my_col_f; };
    C_MazeObjView.prototype.col_b = function () { return this.my_col_b; };
    C_MazeObjView.prototype.col_s = function () { return this.my_col_s; };
    C_MazeObjView.prototype.col_t = function () { return this.my_col_t; };
    C_MazeObjView.prototype.col_d = function () { return this.my_col_d; };
    C_MazeObjView.prototype.col_l = function () { return this.my_col_l; };
    C_MazeObjView.prototype.set_col_f = function (col_f) { return this.my_col_f = col_f; };
    C_MazeObjView.prototype.set_col_b = function (col_b) { return this.my_col_b = col_b; };
    C_MazeObjView.prototype.set_col_s = function (col_s) { return this.my_col_s = col_s; };
    C_MazeObjView.prototype.set_col_t = function (col_t) { return this.my_col_t = col_t; };
    C_MazeObjView.prototype.set_col_d = function (col_d) { return this.my_col_d = col_d; };
    C_MazeObjView.prototype.set_col_l = function (col_l) { return this.my_col_l = col_l; };
    C_MazeObjView.prototype.drow3D = function (frot, back) {
        this.drow_obj_back(frot, back);
        this.drow_obj_down(frot, back);
        this.drow_obj_top(frot, back);
        this.drow_obj_right_side(frot, back);
        this.drow_obj_left_side(frot, back);
        this.drow_obj_front(frot, back);
    };
    C_MazeObjView.prototype.drow_obj_down = function (frot, back) {
        var _a, _b;
        if (!this.canShow() || this.col_t() === null)
            return;
        if (this.pad_s() <= 0.0 && this.pad_t() >= 1.0) {
            drow_cell_floor(frot, back, (_a = this.col_t()) !== null && _a !== void 0 ? _a : '#6666ff', (_b = this.col_l()) !== null && _b !== void 0 ? _b : '#9999ff');
            return;
        }
        var o = __calc_padding_obj(this, frot, back);
        var rect = {
            tl: o.fdl,
            tr: o.fdr,
            dr: o.bdr,
            dl: o.bdl,
        };
        drow_cell(rect, this.col_t(), this.col_l());
    };
    C_MazeObjView.prototype.drow_obj_top = function (frot, back) {
        var _a, _b;
        if (!this.canShow() || this.col_d() === null)
            return;
        if (this.pad_s() <= 0.0 && this.pad_d() >= 1.0) {
            drow_cell_ceiling(frot, back, (_a = this.col_d()) !== null && _a !== void 0 ? _a : '#aaaaaa', (_b = this.col_l()) !== null && _b !== void 0 ? _b : '#9999ff');
            return;
        }
        var o = __calc_padding_obj(this, frot, back);
        var rect = {
            tl: o.ftl,
            tr: o.ftr,
            dr: o.btr,
            dl: o.btl,
        };
        drow_cell(rect, this.col_d(), this.col_l());
    };
    C_MazeObjView.prototype.drow_obj_front = function (frot, back) {
        if (!this.canShow() || this.col_f() === null)
            return;
        var o = __calc_padding_obj(this, frot, back);
        var rect = {
            tl: o.ftl,
            tr: o.ftr,
            dr: o.fdr,
            dl: o.fdl,
        };
        drow_cell(rect, this.col_f(), this.col_l());
    };
    C_MazeObjView.prototype.drow_obj_back = function (frot, back) {
        if (!this.canShow() || this.col_b() === null)
            return;
        var o = __calc_padding_obj(this, frot, back);
        var rect = {
            tl: o.btl,
            tr: o.btr,
            dr: o.bdr,
            dl: o.bdl,
        };
        drow_cell(rect, this.col_b(), this.col_l());
    };
    C_MazeObjView.prototype.drow_obj_left_side = function (frot, back) {
        if (!this.canShow() || this.col_s() === null)
            return;
        var o = __calc_padding_obj(this, frot, back);
        var rect = {
            tl: o.btl,
            tr: o.ftl,
            dr: o.fdl,
            dl: o.bdl,
        };
        drow_cell(rect, this.col_s(), this.col_l());
    };
    C_MazeObjView.prototype.drow_obj_right_side = function (frot, back) {
        if (!this.canShow() || this.col_s() === null)
            return;
        var o = __calc_padding_obj(this, frot, back);
        var rect = {
            tl: o.ftr,
            tr: o.btr,
            dr: o.bdr,
            dl: o.fdr,
        };
        drow_cell(rect, this.col_s(), this.col_l());
    };
    C_MazeObjView.prototype.encode = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        return {
            cname: this.clname,
            layer: this.my_layer,
            letter: (_a = this.my_letter) !== null && _a !== void 0 ? _a : '',
            pad_t: this.my_pad_t,
            pad_d: this.my_pad_d,
            pad_s: this.my_pad_s,
            show3D: this.canShow() ? '1' : '0',
            col_f: (_b = this.my_col_f) !== null && _b !== void 0 ? _b : '',
            col_b: (_c = this.my_col_b) !== null && _c !== void 0 ? _c : '',
            col_s: (_d = this.my_col_s) !== null && _d !== void 0 ? _d : '',
            col_t: (_e = this.my_col_t) !== null && _e !== void 0 ? _e : '',
            col_d: (_f = this.my_col_d) !== null && _f !== void 0 ? _f : '',
            col_l: (_g = this.my_col_l) !== null && _g !== void 0 ? _g : '',
        };
    };
    C_MazeObjView.prototype.decode = function (j) {
        return this.__init(j);
    };
    C_MazeObjView.decode = function (j) {
        return C_MazeObjView.newObj(j);
    };
    return C_MazeObjView;
}());
exports.C_MazeObjView = C_MazeObjView;
function __calc_padding_obj(obj, frot, back) {
    var rect_frot = frot;
    var rect_back = back;
    var ratio_X = obj.pad_s() / 2.0;
    var ratio_T = obj.pad_t();
    var ratio_D = obj.pad_d();
    var frot_pad_X = Math.abs(rect_frot.max_x - rect_frot.min_x) * ratio_X;
    var back_pad_X = Math.abs(rect_back.max_x - rect_back.min_x) * ratio_X;
    var frot_pad_T = Math.abs(rect_frot.max_y - rect_frot.min_y) * ratio_T;
    var back_pad_T = Math.abs(rect_back.max_y - rect_back.min_y) * ratio_T;
    var frot_pad_D = Math.abs(rect_frot.max_y - rect_frot.min_y) * ratio_D;
    var back_pad_D = Math.abs(rect_back.max_y - rect_back.min_y) * ratio_D;
    // パディング設定後のXY座標を計算するために
    // 必要な線分の位置決めをする
    var frot_top_lft = { x: rect_frot.min_x + frot_pad_X, y: rect_frot.min_y + frot_pad_T };
    var frot_top_rgt = { x: rect_frot.max_x - frot_pad_X, y: rect_frot.min_y + frot_pad_T };
    var frot_dwn_lft = { x: rect_frot.min_x + frot_pad_X, y: rect_frot.max_y - frot_pad_D };
    var frot_dwn_rgt = { x: rect_frot.max_x - frot_pad_X, y: rect_frot.max_y - frot_pad_D };
    var back_top_lft = { x: rect_back.min_x + back_pad_X, y: rect_back.min_y + back_pad_T };
    var back_top_rgt = { x: rect_back.max_x - back_pad_X, y: rect_back.min_y + back_pad_T };
    var back_dwn_lft = { x: rect_back.min_x + back_pad_X, y: rect_back.max_y - back_pad_D };
    var back_dwn_rgt = { x: rect_back.max_x - back_pad_X, y: rect_back.max_y - back_pad_D };
    var ftl = __calc_padding_xy(frot_top_lft, back_top_lft, ratio_X);
    var ftr = __calc_padding_xy(frot_top_rgt, back_top_rgt, ratio_X);
    var fdl = __calc_padding_xy(frot_dwn_lft, back_dwn_lft, ratio_X);
    var fdr = __calc_padding_xy(frot_dwn_rgt, back_dwn_rgt, ratio_X);
    var btl = __calc_padding_xy(back_top_lft, frot_top_lft, ratio_X);
    var btr = __calc_padding_xy(back_top_rgt, frot_top_rgt, ratio_X);
    var bdl = __calc_padding_xy(back_dwn_lft, frot_dwn_lft, ratio_X);
    var bdr = __calc_padding_xy(back_dwn_rgt, frot_dwn_rgt, ratio_X);
    return {
        ftl: ftl, ftr: ftr,
        fdl: fdl, fdr: fdr,
        btl: btl, btr: btr,
        bdl: bdl, bdr: bdr,
    };
}
function __calc_padding_xy(frot, back, ratio) {
    // 線分(Ax + B = y)の方程式の係数を求める
    var A = (frot.y - back.y) / (frot.x - back.x);
    var B = frot.y - A * frot.x;
    // パディング調整後のXY座標の計算
    var p_frot_x = frot.x + (back.x - frot.x) * ratio;
    var p_frot_y = A * p_frot_x + B;
    return { x: p_frot_x, y: p_frot_y };
}
function drow_cell_floor(rect_frot, rect_back, fill, line) {
    if (fill === void 0) { fill = '#6666ff'; }
    if (line === void 0) { line = '#9999ff'; }
    var rect = {
        tl: { x: rect_frot.min_x, y: rect_frot.max_y },
        tr: { x: rect_frot.max_x, y: rect_frot.max_y },
        dr: { x: rect_back.max_x, y: rect_back.max_y },
        dl: { x: rect_back.min_x, y: rect_back.max_y }
    };
    drow_cell(rect, fill, line);
}
function drow_cell_ceiling(rect_frot, rect_back, fill, line) {
    if (fill === void 0) { fill = '#aaaaaa'; }
    if (line === void 0) { line = '#9999ff'; }
    var rect = {
        tl: { x: rect_frot.min_x, y: rect_frot.min_y },
        tr: { x: rect_frot.max_x, y: rect_frot.min_y },
        dr: { x: rect_back.max_x, y: rect_back.min_y },
        dl: { x: rect_back.min_x, y: rect_back.min_y }
    };
    drow_cell(rect, fill, line);
}
function drow_cell(r, fill, line) {
    if (C_MazeObjView.con3D === undefined)
        return;
    var con = C_MazeObjView.con3D;
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

/***/ "../mai/src/d_mdl/C_MovablePoint.ts":
/*!******************************************!*\
  !*** ../mai/src/d_mdl/C_MovablePoint.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_MovablePoint = void 0;
exports.alert_mvpt_info = alert_mvpt_info;
var C_Location_1 = __webpack_require__(/*! ./C_Location */ "../mai/src/d_mdl/C_Location.ts");
var F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "../mai/src/d_utl/F_Rand.ts");
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
var C_MovablePoint = /** @class */ (function (_super) {
    __extends(C_MovablePoint, _super);
    function C_MovablePoint(json) {
        var _this = _super.call(this, json) || this;
        _this.uniq_id = 'MvPoint#' + (0, F_Rand_1._get_uuid)();
        _this.cur_url = '';
        _this.team_uid = undefined;
        if (json !== undefined && json !== null)
            _this.decode(json);
        return _this;
    }
    C_MovablePoint.prototype.uid = function () { return this.uniq_id; };
    C_MovablePoint.prototype.url = function () { return this.cur_url; };
    C_MovablePoint.prototype.tid = function () { return this.team_uid; };
    C_MovablePoint.prototype.new_uid = function () { this.uniq_id = 'MvPoint#' + (0, F_Rand_1._get_uuid)(); };
    C_MovablePoint.prototype.set_url = function (url) { this.cur_url = url; };
    C_MovablePoint.prototype.set_tid = function (tid) { this.team_uid = tid; };
    C_MovablePoint.prototype.clone = function () {
        var mvpt = new C_MovablePoint(this.encode());
        mvpt.new_uid();
        return mvpt;
    };
    C_MovablePoint.prototype.fromJSON = function (txt) {
        try {
            var j = JSON.parse(txt);
            return this.decode(j);
        }
        catch (err) {
            return this;
        }
        ;
    };
    C_MovablePoint.prototype.toJSON = function () {
        return JSON.stringify(this.encode(), null, "\t");
    };
    C_MovablePoint.from_obj_to_string = function (oa) {
        return JSON.stringify(oa, null, "\t");
    };
    C_MovablePoint.from_objArray_to_string = function (oaa) {
        var oa = [];
        for (var ii in oaa)
            oa.push(oaa[ii]);
        return JSON.stringify(oa, null, "\t");
    };
    C_MovablePoint.from_string_to_obj = function (txt) {
        try {
            var j = JSON.parse(txt);
            return new C_MovablePoint(j);
        }
        catch (err) {
            return new C_MovablePoint();
        }
        ;
    };
    C_MovablePoint.from_string_to_objArray = function (txt) {
        try {
            var j = JSON.parse(txt);
            var mpa = {};
            for (var _i = 0, j_1 = j; _i < j_1.length; _i++) {
                var jj = j_1[_i];
                var aaa = new C_MovablePoint().decode(jj);
                mpa[aaa.uid()] = aaa;
            }
            return mpa;
        }
        catch (err) {
            return {};
        }
        ;
    };
    C_MovablePoint.prototype.encode = function () {
        var _a;
        var j = _super.prototype.encode.call(this);
        j.uniq_id = this.uniq_id;
        j.cur_url = this.cur_url;
        j.team_uid = (_a = this.team_uid) !== null && _a !== void 0 ? _a : '';
        return j;
    };
    C_MovablePoint.prototype.decode = function (j) {
        _super.prototype.decode.call(this, j);
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
    };
    C_MovablePoint.prototype.alert = function () {
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
    };
    return C_MovablePoint;
}(C_Location_1.C_Location));
exports.C_MovablePoint = C_MovablePoint;


/***/ }),

/***/ "../mai/src/d_mdl/C_Point.ts":
/*!***********************************!*\
  !*** ../mai/src/d_mdl/C_Point.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Point = void 0;
var C_Point = /** @class */ (function () {
    function C_Point(x, y, z) {
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
    C_Point.prototype.get_p = function () { return new C_Point(this); };
    C_Point.prototype.set_p = function (p) {
        this.x = p.x;
        this.y = p.y;
        this.z = p.z;
        return this;
    };
    C_Point.prototype.is_exist = function (x, y, z) {
        return (x == this.x && y == this.y && z == this.z);
    };
    C_Point.prototype.within = function (p) {
        return (p.x == this.x && p.y == this.y && p.z == this.z);
    };
    C_Point.prototype.encode = function () {
        return { x: this.x, y: this.y, z: this.z };
    };
    C_Point.prototype.decode = function (a) {
        if (a === undefined)
            return this;
        if (a.x === undefined || a.y === undefined || a.z === undefined)
            return this;
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        return this;
    };
    return C_Point;
}());
exports.C_Point = C_Point;


/***/ }),

/***/ "../mai/src/d_mdl/C_PointDir.ts":
/*!**************************************!*\
  !*** ../mai/src/d_mdl/C_PointDir.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_PointDir = exports.T_Direction = void 0;
exports.alert_PD_info = alert_PD_info;
var C_Point_1 = __webpack_require__(/*! ./C_Point */ "../mai/src/d_mdl/C_Point.ts");
exports.T_Direction = {
    N: 0,
    E: 1,
    S: 2,
    W: 3,
    X: 99
};
function _dir_key(dir) {
    var _a;
    return (_a = Object.keys(exports.T_Direction).find(function (key) { return exports.T_Direction[key] === dir; })) !== null && _a !== void 0 ? _a : "????";
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
var C_PointDir = /** @class */ (function (_super) {
    __extends(C_PointDir, _super);
    function C_PointDir(d) {
        var _this = _super.call(this, d) || this;
        _this.d = exports.T_Direction.X;
        if (d === undefined) {
            return _this;
        }
        if (typeof d === "number") {
            _this.d = d;
            return _this;
        }
        if (typeof d === "object") {
            if (d instanceof C_PointDir) {
                _this.d = d.d;
            }
            else {
                _this.decode(d);
            }
            return _this;
        }
        _this.d = exports.T_Direction.X;
        return _this;
    }
    C_PointDir.prototype.get_d_mb_name = function () {
        switch (this.d) {
            case 0: return '北';
            case 1: return '東';
            case 2: return '南';
            case 3: return '西';
            default: return '謎';
        }
    };
    C_PointDir.prototype.get_d = function () {
        return this.d;
    };
    C_PointDir.prototype.set_d = function (d) {
        if (!(_dir_key(d) in exports.T_Direction))
            return undefined;
        this.d = d;
        return this;
    };
    C_PointDir.prototype.get_pd = function () {
        return this;
    };
    C_PointDir.prototype.set_pd = function (d) {
        if (d instanceof C_PointDir) {
            if (!(_dir_key(d.d) in exports.T_Direction))
                return undefined;
            _super.prototype.set_p.call(this, d);
            this.d = d.d;
            return this;
        }
        if (!(_dir_key(d.d) in exports.T_Direction))
            return undefined;
        this.decode(d);
        return this;
    };
    C_PointDir.prototype.encode = function () {
        var j = _super.prototype.encode.call(this);
        j.d = this.d;
        return j;
    };
    C_PointDir.prototype.decode = function (j) {
        if (j === undefined)
            return this;
        if (!(_dir_key(j.d) in exports.T_Direction))
            return this;
        _super.prototype.decode.call(this, j);
        this.d = j.d;
        return this;
    };
    C_PointDir.prototype.alert = function () {
        var _a, _b, _c, _d;
        alert("PointData Info:"
            + "\nx: " + ((_a = this.x) !== null && _a !== void 0 ? _a : '?')
            + "\ny: " + ((_b = this.y) !== null && _b !== void 0 ? _b : '?')
            + "\nz: " + ((_c = this.z) !== null && _c !== void 0 ? _c : '?')
            + "\nd: " + ((_d = this.d) !== null && _d !== void 0 ? _d : '?')
            + "\n");
    };
    return C_PointDir;
}(C_Point_1.C_Point));
exports.C_PointDir = C_PointDir;


/***/ }),

/***/ "../mai/src/d_mdl/C_PointSet2D.ts":
/*!****************************************!*\
  !*** ../mai/src/d_mdl/C_PointSet2D.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_PointSet2D = exports.C_PointLink2D = void 0;
var C_Point2D = /** @class */ (function () {
    function C_Point2D(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    C_Point2D.prototype.is_exist = function (x, y) {
        return (this.x == x) && (this.y == y);
    };
    return C_Point2D;
}());
var C_PointLink2D = /** @class */ (function (_super) {
    __extends(C_PointLink2D, _super);
    function C_PointLink2D(x, y, di) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (di === void 0) { di = -1; }
        var _this = _super.call(this, x, y) || this;
        _this.di = di;
        return _this;
    }
    C_PointLink2D.cast = function (p) {
        if ((p === null || p === void 0 ? void 0 : p.x) === undefined)
            return undefined;
        if ((p === null || p === void 0 ? void 0 : p.y) === undefined)
            return undefined;
        return p instanceof C_PointLink2D ? p : new C_PointLink2D(p.x, p.y);
    };
    return C_PointLink2D;
}(C_Point2D));
exports.C_PointLink2D = C_PointLink2D;
var C_PointSet2D = /** @class */ (function () {
    function C_PointSet2D() {
        this.set = [];
    }
    C_PointSet2D.prototype.push = function (p) {
        this.set.push(p);
        return;
    };
    C_PointSet2D.prototype.get_point = function (x, y) {
        for (var _i = 0, _a = this.set; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p === null || p === void 0 ? void 0 : p.is_exist(x, y))
                return p;
        }
        return undefined;
    };
    C_PointSet2D.prototype.remove = function (p) {
        this.remove_xy(p.x, p.y);
        return;
    };
    C_PointSet2D.prototype.remove_xy = function (x, y) {
        var _a;
        for (var i in this.set) {
            if ((_a = this.set[i]) === null || _a === void 0 ? void 0 : _a.is_exist(x, y)) {
                delete this.set[i];
                this.set = __spreadArray([], this.set, true);
                break;
            }
        }
        return;
    };
    C_PointSet2D.prototype.is_exist = function (x, y) {
        for (var _i = 0, _a = this.set; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p === null || p === void 0 ? void 0 : p.is_exist(x, y))
                return true;
        }
        return false;
    };
    return C_PointSet2D;
}());
exports.C_PointSet2D = C_PointSet2D;
/*
class Point3D {
    public int $x;
    public int $y;
    public int $z;
    public function __construct(int $x = 0, int $y = 0, int $z = 0)
    {
        $this->x  = $x;
        $this->y  = $y;
        $this->z  = $z;
    }
    public function is_exist(int $x, int $y, int $z): bool {
        return ($this->x == $x) && ($this->y == $y) && ($this->z == $z);
    }
    public function within(Point3D $p): bool {
        return $this->is_exist($p->x, $p->y, $p->z);
    }
    public function encode(): array {
        $a = [];
        $a['x'] = $this->x;
        $a['y'] = $this->y;
        $a['z'] = $this->z;

        return $a;
    }
    public function decode(array $a): Point3D {
        if (!is_null($a) && is_array($a)) {
            if (
                array_key_exists('x', $a) && (is_numeric($a['x']) && $a['x'] >  0)
            &&  array_key_exists('y', $a) && (is_numeric($a['y']) && $a['y'] >  0)
            &&  array_key_exists('z', $a) && (is_numeric($a['z']) && $a['z'] >= 0)
            ) {
                $this->x = $a['x'];
                $this->y = $a['y'];
                $this->z = $a['z'];
            }
        }
        return $this;
    }
    public static function decode_and_new(array $a): Point3D {
        if (!is_null($a) && is_array($a)) {
            if (
                array_key_exists('x', $a) && (is_numeric($a['x']) && $a['x'] >  0)
            &&  array_key_exists('y', $a) && (is_numeric($a['y']) && $a['y'] >  0)
            &&  array_key_exists('z', $a) && (is_numeric($a['z']) && $a['z'] >= 0)
            ) {
                return new Point3D($a['x'], $a['y'], $a['z']);
            }
        }
        return new Point3D(-1, -1, -1);
    }
}
*/


/***/ }),

/***/ "../mai/src/d_mdl/C_Range.ts":
/*!***********************************!*\
  !*** ../mai/src/d_mdl/C_Range.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Range = void 0;
var F_Math_1 = __webpack_require__(/*! ../d_utl/F_Math */ "../mai/src/d_utl/F_Math.ts");
var C_Point_1 = __webpack_require__(/*! ./C_Point */ "../mai/src/d_mdl/C_Point.ts");
var C_Range = /** @class */ (function () {
    function C_Range(p1, p2) {
        this.min = new C_Point_1.C_Point(0, 0, 0);
        this.max = new C_Point_1.C_Point(0, 0, 0);
        this._init(p1, p2);
    }
    C_Range.prototype._init = function (p1, p2) {
        var min_x = (0, F_Math_1._min)([p1.x, p2.x]);
        var max_x = (0, F_Math_1._max)([p1.x, p2.x]);
        var min_y = (0, F_Math_1._min)([p1.y, p2.y]);
        var max_y = (0, F_Math_1._max)([p1.y, p2.y]);
        var min_z = (0, F_Math_1._min)([p1.z, p2.z]);
        var max_z = (0, F_Math_1._max)([p1.z, p2.z]);
        this.min = new C_Point_1.C_Point(min_x, min_y, min_z);
        this.max = new C_Point_1.C_Point(max_x, max_y, max_z);
        return this;
    };
    C_Range.prototype.within = function (a, y, z) {
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
            var p = a;
            if (p.x < this.min.x || p.x > this.max.x)
                return false;
            if (p.y < this.min.y || p.y > this.max.y)
                return false;
            if (p.z < this.min.z || p.z > this.max.z)
                return false;
            return true;
        }
        if (typeof a === "object" && a instanceof C_Range) {
            var p = a;
            if (p.min_x() < this.min.x || p.max_x() > this.max.x)
                return false;
            if (p.min_y() < this.min.y || p.max_y() > this.max.y)
                return false;
            if (p.min_z() < this.min.z || p.max_z() > this.max.z)
                return false;
            return true;
        }
        return false;
    };
    C_Range.prototype.min_x = function () { return this.min.x; };
    C_Range.prototype.max_x = function () { return this.max.x; };
    C_Range.prototype.min_y = function () { return this.min.y; };
    C_Range.prototype.max_y = function () { return this.max.y; };
    C_Range.prototype.min_z = function () { return this.min.z; };
    C_Range.prototype.max_z = function () { return this.max.z; };
    C_Range.prototype.size_x = function () {
        return this.max.x - this.min.x + 1;
    };
    C_Range.prototype.size_y = function () {
        return this.max.y - this.min.y + 1;
    };
    C_Range.prototype.size_z = function () {
        return this.max.z - this.min.z + 1;
    };
    C_Range.prototype.do_all_xyz = function (fn) {
        for (var z = this.min.z; z <= this.max.z; z++) {
            for (var y = this.min.y; y <= this.max.y; y++) {
                for (var x = this.min.x; y <= this.max.x; x++) {
                    if (!fn(x, y, z))
                        return false;
                }
            }
        }
        return true;
    };
    C_Range.prototype.do_all_p = function (fn) {
        for (var z = this.min.z; z <= this.max.z; z++) {
            for (var y = this.min.y; y <= this.max.y; y++) {
                for (var x = this.min.x; y <= this.max.x; x++) {
                    if (!fn(new C_Point_1.C_Point(x, y, z)))
                        return false;
                }
            }
        }
        return true;
    };
    C_Range.prototype.encode = function () {
        return {
            min: this.min.encode(),
            max: this.min.encode(),
        };
    };
    C_Range.prototype.decode = function (j) {
        if (j === undefined)
            return this;
        if (j.min === undefined)
            return this;
        if (j.max === undefined)
            return this;
        var p1 = new C_Point_1.C_Point(j.min);
        var p2 = new C_Point_1.C_Point(j.max);
        return this._init(p1, p2);
    };
    return C_Range;
}());
exports.C_Range = C_Range;


/***/ }),

/***/ "../mai/src/d_mdl/C_SaveData.ts":
/*!**************************************!*\
  !*** ../mai/src/d_mdl/C_SaveData.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_SaveData = void 0;
exports.alert_save_info = alert_save_info;
exports.alert_save_detail = alert_save_detail;
var C_Maze_1 = __webpack_require__(/*! ./C_Maze */ "../mai/src/d_mdl/C_Maze.ts");
var C_Guild_1 = __webpack_require__(/*! ./C_Guild */ "../mai/src/d_mdl/C_Guild.ts");
var C_MovablePoint_1 = __webpack_require__(/*! ./C_MovablePoint */ "../mai/src/d_mdl/C_MovablePoint.ts");
var C_Team_1 = __webpack_require__(/*! ./C_Team */ "../mai/src/d_mdl/C_Team.ts");
var C_SaveInfo_1 = __webpack_require__(/*! ./C_SaveInfo */ "../mai/src/d_mdl/C_SaveInfo.ts");
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
        //        alert("Save Detail(mvpt):");
        for (var _i = 0, _e = (_a = a.all_mvpt) !== null && _a !== void 0 ? _a : []; _i < _e.length; _i++) {
            var mvpt = _e[_i];
            (0, C_MovablePoint_1.alert_mvpt_info)(mvpt);
        }
    }
    catch (err) {
        alert('alert mvpt error: ' + err);
    }
    try {
        //        alert("Save Detail(team):");
        for (var _f = 0, _g = (_b = a.all_team) !== null && _b !== void 0 ? _b : []; _f < _g.length; _f++) {
            var team = _g[_f];
            (0, C_Team_1.alert_team_info)(team);
        }
    }
    catch (err) {
        alert('alert team error: ' + err);
    }
    try {
        //        alert("Save Detail(maze):");
        for (var _h = 0, _j = (_c = a.all_maze) !== null && _c !== void 0 ? _c : []; _h < _j.length; _h++) {
            var maze = _j[_h];
            (0, C_Maze_1.alert_maze_info)(maze);
        }
    }
    catch (err) {
        alert('alert maze error: ' + err);
    }
    try {
        //        alert("Save Detail(guld):");
        for (var _k = 0, _l = (_d = a.all_guld) !== null && _d !== void 0 ? _d : []; _k < _l.length; _k++) {
            var guld = _l[_k];
            (0, C_Guild_1.alert_guld_info)(guld);
        }
    }
    catch (err) {
        alert('alert guld error: ' + err);
    }
}
var C_SaveData = /** @class */ (function (_super) {
    __extends(C_SaveData, _super);
    function C_SaveData(a) {
        var _this = _super.call(this, a) || this;
        _this.all_mvpt = {};
        _this.all_maze = {};
        _this.all_team = {};
        _this.all_guld = {};
        if (a !== undefined)
            _this.decode(a);
        return _this;
    }
    C_SaveData.new = function (a) {
        return new C_SaveData(a);
    };
    C_SaveData.prototype.encode = function () {
        var save_date;
        try {
            var save_data = _super.prototype.encode.call(this);
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
    };
    C_SaveData.prototype._encode_all_data = function (all_data) {
        var all_JSON = [];
        for (var i in all_data)
            all_JSON.push(all_data[i].encode());
        return all_JSON;
    };
    C_SaveData.prototype.decode = function (s) {
        _super.prototype.decode.call(this, s);
        if (s.all_mvpt !== undefined) {
            this.all_mvpt = {};
            for (var _i = 0, _a = s.all_mvpt; _i < _a.length; _i++) {
                var json_mvpt = _a[_i];
                var mvpt = (new C_MovablePoint_1.C_MovablePoint()).decode(json_mvpt);
                this.all_mvpt[mvpt.uid()] = mvpt;
            }
        }
        if (s.all_maze !== undefined) {
            this.all_maze = {};
            for (var _b = 0, _c = s.all_maze; _b < _c.length; _b++) {
                var json_maze = _c[_b];
                var maze = (new C_Maze_1.C_Maze()).decode(json_maze);
                this.all_maze[maze.uid()] = maze;
            }
        }
        if (s.all_team !== undefined) {
            this.all_team = {};
            for (var _d = 0, _e = s.all_team; _d < _e.length; _d++) {
                var json_team = _e[_d];
                var team = (new C_Team_1.C_Team()).decode(json_team);
                this.all_team[team.uid()] = team;
            }
        }
        if (s.all_guld !== undefined) {
            this.all_guld = {};
            for (var _f = 0, _g = s.all_guld; _f < _g.length; _f++) {
                var json_guld = _g[_f];
                var guld = (new C_Guild_1.C_Guild()).decode(json_guld);
                this.all_guld[guld.uid()] = guld;
            }
        }
        return this;
    };
    C_SaveData.prototype.alert = function () {
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
    };
    C_SaveData.prototype.alert_detail = function () {
        try {
            //            alert("Save Detail(mvpt):");
            for (var ii in this.all_mvpt)
                this.all_mvpt[ii].alert();
        }
        catch (err) {
            alert('alert mvpt error: ' + err);
        }
        try {
            //            alert("Save Detail(team):");
            for (var ii in this.all_team)
                this.all_team[ii].alert();
        }
        catch (err) {
            alert('alert team error: ' + err);
        }
        try {
            //            alert("Save Detail(maze):");
            for (var ii in this.all_maze)
                this.all_maze[ii].alert();
        }
        catch (err) {
            alert('alert maze error: ' + err);
        }
        try {
            //            alert("Save Detail(guld):");
            for (var ii in this.all_guld)
                this.all_guld[ii].alert();
        }
        catch (err) {
            alert('alert guld error: ' + err);
        }
    };
    return C_SaveData;
}(C_SaveInfo_1.C_SaveInfo));
exports.C_SaveData = C_SaveData;


/***/ }),

/***/ "../mai/src/d_mdl/C_SaveInfo.ts":
/*!**************************************!*\
  !*** ../mai/src/d_mdl/C_SaveInfo.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_SaveInfo = void 0;
exports.alert_saveinfo_info = alert_saveinfo_info;
var C_MovablePoint_1 = __webpack_require__(/*! ./C_MovablePoint */ "../mai/src/d_mdl/C_MovablePoint.ts");
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
var C_SaveInfo = /** @class */ (function () {
    function C_SaveInfo(a) {
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
    C_SaveInfo.new = function (a) {
        return new C_SaveInfo(a);
    };
    C_SaveInfo.prototype.encode = function () {
        var save_date;
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
    };
    C_SaveInfo.prototype.decode = function (s) {
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
    };
    C_SaveInfo.prototype.alert = function () {
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
    };
    return C_SaveInfo;
}());
exports.C_SaveInfo = C_SaveInfo;


/***/ }),

/***/ "../mai/src/d_mdl/C_Team.ts":
/*!**********************************!*\
  !*** ../mai/src/d_mdl/C_Team.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Team = void 0;
exports.alert_team_info = alert_team_info;
var C_Walker_1 = __webpack_require__(/*! ./C_Walker */ "../mai/src/d_mdl/C_Walker.ts");
var C_Hero_1 = __webpack_require__(/*! ./C_Hero */ "../mai/src/d_mdl/C_Hero.ts");
var C_TeamView_1 = __webpack_require__(/*! ./C_TeamView */ "../mai/src/d_mdl/C_TeamView.ts");
var F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "../mai/src/d_utl/F_Rand.ts");
var C_GoodsItem_1 = __webpack_require__(/*! ./C_GoodsItem */ "../mai/src/d_mdl/C_GoodsItem.ts");
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
        + "\ngoods: " + (Object.keys((_0 = a.goods) !== null && _0 !== void 0 ? _0 : []).length)
        + "\nheroes: " + ((_2 = (_1 = a.heroes) === null || _1 === void 0 ? void 0 : _1.length) !== null && _2 !== void 0 ? _2 : '?')
        + "\n");
    //    if (a.heroes !== undefined) alert_heroes_info(a.heroes);
}
var C_Team = /** @class */ (function () {
    function C_Team(j) {
        this.my_id = 0;
        this.my_name = 'Neo Team?';
        this.uniq_id = 'mai_team#' + (0, F_Rand_1._get_uuid)();
        this.save_id = 0;
        this.myView = new C_TeamView_1.C_CurrentTeamView(this);
        this.walker = new C_Walker_1.C_Walker();
        this.walker.set_tid(this.uid());
        this.gold = new C_GoodsItem_1.C_GoodsItem({ gkind: C_GoodsItem_1.T_GoodsKind.Gold, value: 0 });
        this.heroes = {};
        this.hope_motion = 'NOP';
        if (j !== undefined)
            this.decode(j);
    }
    C_Team.newObj = function (j) {
        return new C_Team(j);
    };
    C_Team.prototype.newObj = function (j) { return C_Team.newObj(j); };
    C_Team.prototype.set_prp = function (arg) {
        this.decode(arg);
    };
    C_Team.prototype.uid = function () { return this.uniq_id; };
    C_Team.prototype.within = function (p) {
        var _a, _b;
        var here = (_a = this.walker) === null || _a === void 0 ? void 0 : _a.get_p();
        return (_b = here === null || here === void 0 ? void 0 : here.within(p)) !== null && _b !== void 0 ? _b : false;
    };
    C_Team.prototype.view = function () { return this.myView; };
    C_Team.prototype.walk = function () {
        return this.walker;
    };
    C_Team.prototype.canThrough = function () { return true; };
    C_Team.prototype.hres = function () {
        var hres = [];
        for (var ii in this.heroes)
            hres.push(this.heroes[ii]);
        return hres;
    };
    C_Team.prototype.clear_hres = function () {
        this.heroes = {};
    };
    C_Team.prototype.add_hero = function (hero) {
        this.heroes[hero.uid()] = hero;
    };
    C_Team.prototype.rmv_hero = function (hero) {
        delete this.heroes[hero.uid()];
    };
    C_Team.prototype.get_loc = function () {
        return this.walker;
    };
    C_Team.prototype.set_loc = function (loc) {
        var _a;
        ((_a = this.walker) !== null && _a !== void 0 ? _a : (this.walker = new C_Walker_1.C_Walker())).decode(loc.encode());
    };
    C_Team.prototype.get_pd = function () {
        return this.walker.get_pd();
    };
    C_Team.from_obj_to_string = function (oa) {
        return JSON.stringify(oa, null, "\t");
    };
    C_Team.from_objArray_to_string = function (oaa) {
        var oa = [];
        for (var ii in oaa)
            oa.push(oaa[ii]);
        return JSON.stringify(oa, null, "\t");
    };
    C_Team.from_string_to_obj = function (txt) {
        try {
            var j = JSON.parse(txt);
            return new C_Team(j);
        }
        catch (err) {
            return new C_Team();
        }
        ;
    };
    C_Team.from_string_to_objArray = function (txt) {
        try {
            var j = JSON.parse(txt);
            var mpa = {};
            for (var _i = 0, j_1 = j; _i < j_1.length; _i++) {
                var jj = j_1[_i];
                var aaa = new C_Team().decode(jj);
                mpa[aaa.uid()] = aaa;
            }
            return mpa;
        }
        catch (err) {
            return {};
        }
        ;
    };
    C_Team.prototype.encode = function () {
        var _a, _b;
        this.get_loc(); // Location情報を最新に更新
        var json_heroes = [];
        for (var ii in this.heroes)
            json_heroes.push(this.heroes[ii].encode());
        return {
            id: this.my_id,
            name: this.my_name,
            uniq_id: this.uniq_id,
            save_id: this.save_id,
            locate: this.walker.encode(),
            gold: this.gold.encode(),
            heroes: json_heroes,
            motion: this.hope_motion,
            view: (_b = (_a = this.myView) === null || _a === void 0 ? void 0 : _a.encode()) !== null && _b !== void 0 ? _b : {},
        };
    };
    C_Team.prototype.decode = function (a) {
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
            this.gold.decode(a.gold);
        if (a.heroes !== undefined) {
            this.heroes = {};
            for (var _i = 0, _a = a.heroes; _i < _a.length; _i++) {
                var json_hero = _a[_i];
                var hero = new C_Hero_1.C_Hero(json_hero);
                this.heroes[hero.uid()] = hero;
            }
        }
        /*
                if (a.view    !== undefined) {
                    if (Object.keys(a.view).length > 0) this.myView = C_MazeObjView.newObj(a.view);
                    else this.myView = new C_CurrentTeamView(this) as I_MazeObjView;
                }
        */
        return this;
    };
    C_Team.encode_all = function (all_team) {
        var all_team_data = [];
        for (var _i = 0, all_team_1 = all_team; _i < all_team_1.length; _i++) {
            var team = all_team_1[_i];
            all_team_data.push(team.encode());
        }
        return all_team_data;
    };
    C_Team.decode_all = function (all_team_data) {
        var all_team = [];
        for (var _i = 0, all_team_data_1 = all_team_data; _i < all_team_data_1.length; _i++) {
            var team_data = all_team_data_1[_i];
            all_team.push((new C_Team()).decode(team_data));
        }
        return all_team;
    };
    C_Team.prototype.alert = function () {
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
    };
    C_Team.prototype.alert_hres = function () {
        //        alert("Team Info:");
        for (var ii in this.heroes)
            this.heroes[ii].alert();
    };
    return C_Team;
}());
exports.C_Team = C_Team;


/***/ }),

/***/ "../mai/src/d_mdl/C_TeamView.ts":
/*!**************************************!*\
  !*** ../mai/src/d_mdl/C_TeamView.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_CurrentTeamView = void 0;
var C_PointDir_1 = __webpack_require__(/*! ./C_PointDir */ "../mai/src/d_mdl/C_PointDir.ts");
var C_Team_1 = __webpack_require__(/*! ./C_Team */ "../mai/src/d_mdl/C_Team.ts");
var C_CurrentTeamView = /** @class */ (function () {
    function C_CurrentTeamView(team) {
        this.my_layer = 99;
        this.my_team = team;
    }
    C_CurrentTeamView.newObj = function (j) {
        var team = new C_Team_1.C_Team(j);
        return new C_CurrentTeamView(team);
    };
    C_CurrentTeamView.prototype.newObj = function (j) { return C_CurrentTeamView.newObj(j); };
    C_CurrentTeamView.prototype.layer = function () { return this.my_layer; };
    C_CurrentTeamView.prototype.set_layer = function (layer) { this.my_layer = layer; };
    C_CurrentTeamView.prototype.letter = function () {
        switch (this.my_team.walk().get_d()) {
            case C_PointDir_1.T_Direction.N: return '↑';
            case C_PointDir_1.T_Direction.E: return '→';
            case C_PointDir_1.T_Direction.S: return '↓';
            case C_PointDir_1.T_Direction.W: return '←';
            default: return '🌀';
        }
    };
    C_CurrentTeamView.prototype.canShow = function () { return false; };
    C_CurrentTeamView.prototype.drow3D = function (frot, back) { };
    C_CurrentTeamView.prototype.pad_t = function () { return 0.0; };
    C_CurrentTeamView.prototype.pad_d = function () { return 0.0; };
    C_CurrentTeamView.prototype.pad_s = function () { return 0.0; };
    C_CurrentTeamView.prototype.col_f = function () { return null; };
    C_CurrentTeamView.prototype.col_b = function () { return null; };
    C_CurrentTeamView.prototype.col_s = function () { return null; };
    C_CurrentTeamView.prototype.col_t = function () { return null; };
    C_CurrentTeamView.prototype.col_d = function () { return null; };
    C_CurrentTeamView.prototype.col_l = function () { return null; };
    C_CurrentTeamView.prototype.encode = function () { return { cname: 'CurrentTeamView' }; };
    C_CurrentTeamView.prototype.decode = function (j) { return this; };
    return C_CurrentTeamView;
}());
exports.C_CurrentTeamView = C_CurrentTeamView;


/***/ }),

/***/ "../mai/src/d_mdl/C_Walker.ts":
/*!************************************!*\
  !*** ../mai/src/d_mdl/C_Walker.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Walker = void 0;
var C_PointDir_1 = __webpack_require__(/*! ./C_PointDir */ "../mai/src/d_mdl/C_PointDir.ts");
var C_MovablePoint_1 = __webpack_require__(/*! ./C_MovablePoint */ "../mai/src/d_mdl/C_MovablePoint.ts");
var C_Walker = /** @class */ (function (_super) {
    __extends(C_Walker, _super);
    function C_Walker(j) {
        return _super.call(this, j) || this;
    }
    C_Walker.prototype.get_x = function () { return this.loc_pos.x; };
    C_Walker.prototype.get_y = function () { return this.loc_pos.y; };
    C_Walker.prototype.get_z = function () { return this.loc_pos.z; };
    C_Walker.prototype.set_x = function (x) { this.loc_pos.x = x; };
    C_Walker.prototype.set_y = function (y) { this.loc_pos.y = y; };
    C_Walker.prototype.set_z = function (z) { this.loc_pos.z = z; };
    C_Walker.prototype.set_place = function (place, url, pos) {
        this.set_uid(place.uid());
        this.set_lckd(place.get_lckd());
        this.set_name(place.get_name());
        if (url !== undefined)
            this.set_url(url);
        if (pos !== undefined) {
            this.set_pd(pos);
        }
    };
    C_Walker.prototype.hope_p_fwd = function () {
        var _this = this;
        return {
            has_hope: true,
            hope: "Move",
            subj: this.get_p_fwd(),
            doOK: function () { _this.set_p_fwd(); },
            doNG: function () { _this.isNG(); },
        };
    };
    C_Walker.prototype.hope_p_bak = function () {
        var _this = this;
        return {
            has_hope: true,
            hope: "Move",
            subj: this.get_p_bak(),
            doOK: function () { _this.set_p_bak(); },
            doNG: function () { _this.isNG(); },
        };
    };
    C_Walker.prototype.hope_p_lft = function () {
        var _this = this;
        return {
            has_hope: true,
            hope: "Move",
            subj: this.get_p_lft(),
            doOK: function () { _this.set_p_lft(); },
            doNG: function () { _this.isNG(); },
        };
    };
    C_Walker.prototype.hope_p_rgt = function () {
        var _this = this;
        return {
            has_hope: true,
            hope: "Move",
            subj: this.get_p_rgt(),
            doOK: function () { _this.set_p_rgt(); },
            doNG: function () { _this.isNG(); },
        };
    };
    C_Walker.prototype.hope_turn_r = function () {
        var _this = this;
        return {
            has_hope: true,
            hope: "Turn",
            subj: this.get_pd(),
            doOK: function () { _this.turn_r(); },
            doNG: function () { _this.isNG(); },
        };
    };
    C_Walker.prototype.hope_turn_l = function () {
        var _this = this;
        return {
            has_hope: true,
            hope: "Turn",
            subj: this.get_pd(),
            doOK: function () { _this.turn_l(); },
            doNG: function () { _this.isNG(); },
        };
    };
    C_Walker.prototype.hope_p_up = function () {
        var _this = this;
        return {
            has_hope: true,
            hope: "Up",
            subj: this.get_p_up(),
            doOK: function () { _this.move_p_up(); },
            doNG: function () { _this.isNG(); },
        };
    };
    C_Walker.prototype.hope_p_down = function () {
        var _this = this;
        return {
            has_hope: true,
            hope: "Down",
            subj: this.get_p_down(),
            doOK: function () { _this.move_p_down(); },
            doNG: function () { _this.isNG(); },
        };
    };
    C_Walker.prototype.move_p_up = function () {
        this.set_p_up();
    };
    C_Walker.prototype.move_p_down = function () {
        this.set_p_down();
    };
    C_Walker.prototype.isNG = function () {
        return;
    };
    C_Walker.prototype.get_p_fwd = function () {
        return this.__get_p_move(1, 0);
    };
    C_Walker.prototype.set_p_fwd = function () {
        this.set_pd(this.get_p_fwd());
    };
    C_Walker.prototype.get_p_bak = function () {
        return this.__get_p_move(-1, 0);
    };
    C_Walker.prototype.set_p_bak = function () {
        this.set_pd(this.get_p_bak());
    };
    C_Walker.prototype.get_p_lft = function () {
        return this.__get_p_move(0, -1);
    };
    C_Walker.prototype.set_p_lft = function () {
        this.set_pd(this.get_p_lft());
    };
    C_Walker.prototype.get_p_rgt = function () {
        return this.__get_p_move(0, 1);
    };
    C_Walker.prototype.set_p_rgt = function () {
        this.set_pd(this.get_p_rgt());
    };
    C_Walker.prototype.get_p_up = function () {
        var p = new C_PointDir_1.C_PointDir(this.loc_pos);
        p.z--;
        return p;
    };
    C_Walker.prototype.set_p_up = function () {
        this.set_pd(this.get_p_up());
    };
    C_Walker.prototype.get_p_down = function () {
        var p = new C_PointDir_1.C_PointDir(this.loc_pos);
        p.z++;
        return p;
    };
    C_Walker.prototype.set_p_down = function () {
        this.set_pd(this.get_p_down());
    };
    C_Walker.prototype.__get_p_move = function (offsetFB, offsetLR) {
        var p = new C_PointDir_1.C_PointDir(this.loc_pos);
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
    };
    C_Walker.prototype.get_around = function (front, right, up) {
        if (up === void 0) { up = 0; }
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
    };
    C_Walker.prototype.turn_r = function () {
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
    };
    C_Walker.prototype.turn_l = function () {
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
    };
    C_Walker.prototype.turn_b = function () {
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
    };
    C_Walker.prototype.encode = function () {
        var j = _super.prototype.encode.call(this);
        return j;
    };
    C_Walker.prototype.decode = function (a) {
        if (a === undefined)
            return this;
        _super.prototype.decode.call(this, a);
        return this;
    };
    return C_Walker;
}(C_MovablePoint_1.C_MovablePoint));
exports.C_Walker = C_Walker;


/***/ }),

/***/ "../mai/src/d_mdl/T_Direction.ts":
/*!***************************************!*\
  !*** ../mai/src/d_mdl/T_Direction.ts ***!
  \***************************************/
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

/***/ "../mai/src/d_mdl/T_MzKind.ts":
/*!************************************!*\
  !*** ../mai/src/d_mdl/T_MzKind.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.T_RvMzKind = exports.T_MzKind = void 0;
// ダンジョンマップのセルの種類を表す列挙型
// NoDef: 未定義・不明
// Floor: 床
// Unexp: 未踏地
// Stone: 石壁
// StrUp: 上り階段
// StrDn: 下り階段
// Empty: 初期状態・何もなし
// 
// function to_int(MzKind):      int        列挙型に対応する値(整数値)を返す
// function from_int(int):       T_MzKind     整数値に対応する列挙型を返す(クラスメソッド)
// function to_letter(MzKind):   string     列挙型に対応する文字を返す(ダンジョンの2D表示用)
// function from_letter(string): T_MzKind     文字に対応する列挙型を返す(クラスメソッド)
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

/***/ "../mai/src/d_utl/C_DspMessage.ts":
/*!****************************************!*\
  !*** ../mai/src/d_utl/C_DspMessage.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports) {


var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_DspMessage = void 0;
// 画面表示用メッセージ(通常用とエラー用)のカプセル化
var C_DspMessage = /** @class */ (function () {
    function C_DspMessage(isHTML) {
        if (isHTML === void 0) { isHTML = false; }
        this.isHTML = isHTML;
        this.nor_message = [];
        this.err_message = [];
    }
    C_DspMessage.prototype.set_nor_message = function (msg) {
        this.nor_message.push(msg);
        return;
    };
    C_DspMessage.prototype.set_err_message = function (msg) {
        this.err_message.push(msg);
        return;
    };
    C_DspMessage.prototype.display_nor_message = function () {
        if (this.nor_message.length < 1)
            return;
        if (this.isHTML) {
            var all_msg = "<p class='normal_message'>\n";
            for (var _i = 0, _a = this.nor_message; _i < _a.length; _i++) {
                var msg = _a[_i];
                all_msg += "".concat(msg, "</br>\n");
            }
            all_msg += "</p>\n";
            alert(all_msg);
        }
        else {
            for (var _b = 0, _c = this.nor_message; _b < _c.length; _b++) {
                var msg = _c[_b];
                console.log(msg);
            }
        }
        return;
    };
    C_DspMessage.prototype.display_err_message = function () {
        if (this.err_message.length < 1)
            return;
        if (this.isHTML) {
            var all_msg = "<p class='error_message'>\n";
            for (var _i = 0, _a = this.err_message; _i < _a.length; _i++) {
                var msg = _a[_i];
                all_msg += "".concat(msg, "</br>\n");
            }
            all_msg += "</p>\n";
            alert(all_msg);
        }
        else {
            console.error("\n\n\n###\n### ERROR Occuerd.\n###\n");
            for (var _b = 0, _c = this.err_message; _b < _c.length; _b++) {
                var msg = _c[_b];
                console.error("### ".concat(msg));
            }
            console.error("###\n");
        }
        return;
    };
    C_DspMessage.prototype.pdo_error = function (e, errmsg) {
        var _a, _b;
        var ecode = (_a = e === null || e === void 0 ? void 0 : e.getCode()) !== null && _a !== void 0 ? _a : '99999';
        var emess = (_b = e === null || e === void 0 ? void 0 : e.getMessage()) !== null && _b !== void 0 ? _b : '???';
        this.set_err_message(errmsg);
        this.set_err_message("code: ".concat(ecode));
        this.set_err_message("message: ".concat(emess));
        return;
    };
    C_DspMessage.prototype.get_nor_messages = function () {
        return __spreadArray([], this.nor_message, true);
    };
    C_DspMessage.prototype.get_err_messages = function () {
        return __spreadArray([], this.err_message, true);
    };
    C_DspMessage.prototype.is_err = function () {
        return this.err_message.length !== 0;
    };
    return C_DspMessage;
}());
exports.C_DspMessage = C_DspMessage;


/***/ }),

/***/ "../mai/src/d_utl/F_Math.ts":
/*!**********************************!*\
  !*** ../mai/src/d_utl/F_Math.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._isNum = _isNum;
exports._getNum = _getNum;
exports._round = _round;
exports._ceil = _ceil;
exports._floor = _floor;
exports._min = _min;
exports._max = _max;
// 数値チェック
function _isNum(numVal) {
    // チェック条件パターン
    var pattern = /^[-+]?([1-9]\d*|0)(\.\d+)?$/;
    // 数値チェック
    return pattern.test(numVal);
}
// 数値取り出し
function _getNum(numVal) {
    // チェック条件パターン
    //    const pattern = /[-]?([1-9]\d*|0)(\.\d+)?/;
    var pattern = /([^0-9])/g;
    var valstr = numVal.replace(pattern, '');
    // 数値チェック
    return Number(valstr);
}
// 四捨五入
function _round(num, digit) {
    var multiplier = Math.pow(10, digit);
    return Math.round(num * multiplier) / multiplier;
}
// 切り上げ
function _ceil(num, digit) {
    var multiplier = Math.pow(10, digit);
    return Math.ceil(num * multiplier) / multiplier;
}
// 切り下げ
function _floor(num, digit) {
    var multiplier = Math.pow(10, digit);
    return Math.floor(num * multiplier) / multiplier;
}
function _min(a) {
    return a.reduce(function (n1, n2) { return Math.min(n1, n2); });
}
function _max(a) {
    return a.reduce(function (n1, n2) { return Math.max(n1, n2); });
}


/***/ }),

/***/ "../mai/src/d_utl/F_Rand.ts":
/*!**********************************!*\
  !*** ../mai/src/d_utl/F_Rand.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var F_Math_1 = __webpack_require__(/*! ./F_Math */ "../mai/src/d_utl/F_Math.ts");
var frand = function () { return Math.random(); };
// 一様乱数(整数)
function _irand(min, max, rand) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 1; }
    if (rand === void 0) { rand = frand; }
    var f_rand = Math.floor(rand() * (max - min + 1) + min);
    return (0, F_Math_1._round)(f_rand, 0);
}
// 正規分布もどき乱数(整数)
function _igrand(min, max, rand) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 1; }
    if (rand === void 0) { rand = frand; }
    return _irand(min, max, function () { return _grand(0, 1, rand); });
}
// 正規分布もどき乱数(実数)
function _grand(min, max, rand) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 1; }
    if (rand === void 0) { rand = frand; }
    return Math.floor(___gaussianRand(rand) * (max - min + 1) + min);
}
function ___gaussianRand(rand) {
    if (rand === void 0) { rand = frand; }
    var sum = 0;
    for (var i = 0; i < 6; i += 1) {
        sum += rand();
    }
    return sum / 6;
}
// 少し真面目な正規分布乱数(整数)
function _inrand(min, max, dd, rand) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 1; }
    if (dd === void 0) { dd = 3.0; }
    if (rand === void 0) { rand = frand; }
    return Math.floor(_nrand(min, max, dd, rand));
}
// 少し真面目な正規分布乱数(実数)
// 一様確率変数a,bを変数関数を用いて x=f(a,b), y=g(a,b)として2つの正規分布乱数x,yを得る
// x = f(a,b) = sqrt(-2*log(a)) * sin(2*π*b) 
// y = g(a,b) = sqrt(-2*log(a)) * cos(2*π*b) 
function _nrand(min, max, dd, rand) {
    if (min === void 0) { min = 0.0; }
    if (max === void 0) { max = 1.0; }
    if (dd === void 0) { dd = 3.0; }
    if (rand === void 0) { rand = frand; }
    var ave = 0.5;
    var a = rand();
    var b = rand();
    var x = ave + _fab(a, b) / (2.0 * dd); // ここまで、N(0,1)の正規分布乱数の作成
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
// シード値を用いた乱数
var C_SeededRand = /** @class */ (function () {
    function C_SeededRand(seed) {
        this.seed = seed;
        this.first_seed = seed;
    }
    C_SeededRand.prototype.reset = function () {
        this.seed = this.first_seed;
    };
    // 乱数生成メソッド
    C_SeededRand.prototype.random = function () {
        this.seed = (this.seed * 9301 + 49297) % 233280;
        return this.seed / 233280.0;
    };
    return C_SeededRand;
}());
exports.C_SeededRand = C_SeededRand;
//ユニークID(uuid)の生成
function _get_uuid(len, rand) {
    if (len === void 0) { len = 20; }
    if (rand === void 0) { rand = frand; }
    var lft = (new Date()).getTime().toString(16); // たぶん13桁
    var rgt_len = (0, F_Math_1._max)([len - lft.length, 1]);
    var rgt = Math.floor(Math.pow(10, rgt_len) * rand()).toString(16);
    return lft + rgt;
}
function _selectItem(items, rand) {
    if (rand === void 0) { rand = frand; }
    var ttl = 0;
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        ttl += item.ratio;
    }
    var target = _irand(0, ttl, rand);
    var sum = 0;
    for (var _a = 0, items_2 = items; _a < items_2.length; _a++) {
        var item = items_2[_a];
        sum += item.ratio;
        if (target < sum) {
            return item;
        }
    }
    return undefined;
}
// 配列のシャッフル
function _shuffleArray(array, rand) {
    var _a;
    if (rand === void 0) { rand = frand; }
    var shuffledArray = __spreadArray([], array, true); // 元の配列を変更しないようにコピーする
    for (var i = shuffledArray.length - 1; i > 0; i--) {
        // ランダムな位置を決定
        var j = _irand(0, i, rand);
        // 要素の入れ替え
        _a = [shuffledArray[j], shuffledArray[i]], shuffledArray[i] = _a[0], shuffledArray[j] = _a[1];
    }
    return shuffledArray; // シャッフルされた配列を返す
}
// 乱数による文字列生成
function _random_str(length) {
    var str = '';
    for (var i = 0; i < length; i++)
        str += _random_Char();
    return str;
}
function _random_UpperStr(length) {
    var str = '';
    for (var i = 0; i < length; i++)
        str += _random_UpperChar();
    return str;
}
function _random_LowerStr(length) {
    var str = '';
    for (var i = 0; i < length; i++)
        str += _random_LowerChar();
    return str;
}
function _random_UpperChar() {
    var val = _irand(0, 26);
    return String.fromCharCode(65 + val);
}
function _random_LowerChar() {
    var val = _irand(0, 26);
    return String.fromCharCode(95 + val);
}
function _random_NumChar() {
    var val = _irand(0, 9);
    return String.fromCharCode(48 + val);
}
function _random_Char() {
    var val = _irand(0, 61);
    if (val < 26)
        return String.fromCharCode(65 + val);
    if (val < 52)
        return String.fromCharCode(97 + val - 26);
    return String.fromCharCode(48 + val - 52);
}


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
var http_errors_1 = __importDefault(__webpack_require__(/*! http-errors */ "http-errors"));
var path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
var usersRouter = __webpack_require__(/*! ./routes/users */ "./src/routes/users.ts");
var maiexRouter = __webpack_require__(/*! ./routes/maiex */ "./src/routes/maiex.ts");
var cookieParser = __webpack_require__(/*! cookie-parser */ "cookie-parser");
var logger = __webpack_require__(/*! morgan */ "morgan");
var app = (0, express_1.default)();
// view engine setup
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(cookieParser());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
var rootRouter = express_1.default.Router();
rootRouter.get("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send("Welcome to the Mai world! :-)");
        return [2 /*return*/];
    });
}); });
app.use("/", rootRouter);
app.use("/users", usersRouter);
app.use("/maiex", maiexRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
var port = normalizePort(process.env.PORT || '3000');
app.listen(port, function () {
    console.log("listening on port ".concat(port));
});
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
exports["default"] = app;


/***/ }),

/***/ "./src/lib/_JSON_mai_guld.ts":
/*!***********************************!*\
  !*** ./src/lib/_JSON_mai_guld.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.newGuld = newGuld;
exports.allHres = allHres;
var db_host = 'sql';
// 利用クラス等の読み込み
// エラーメッセージ等を保存・表示するクラス
var C_DspMessage_1 = __webpack_require__(/*! ../../../mai/src/d_utl/C_DspMessage */ "../mai/src/d_utl/C_DspMessage.ts");
// 位置と方向を表すクラス
var C_PointDir_1 = __webpack_require__(/*! ../../../mai/src/d_mdl/C_PointDir */ "../mai/src/d_mdl/C_PointDir.ts");
// 滞在位置を示すクラス
var C_MovablePoint_1 = __webpack_require__(/*! ../../../mai/src/d_mdl/C_MovablePoint */ "../mai/src/d_mdl/C_MovablePoint.ts");
// ギルドクラス全般
var C_Guild_1 = __webpack_require__(/*! ../../../mai/src/d_mdl/C_Guild */ "../mai/src/d_mdl/C_Guild.ts");
// パーティークラス全般
var C_Team_1 = __webpack_require__(/*! ../../../mai/src/d_mdl/C_Team */ "../mai/src/d_mdl/C_Team.ts");
// ヒーロークラス全般
var C_Hero_1 = __webpack_require__(/*! ../../../mai/src/d_mdl/C_Hero */ "../mai/src/d_mdl/C_Hero.ts");
// セーブデータ(クライアントとの連携)全般
var C_SaveData_1 = __webpack_require__(/*! ../../../mai/src/d_mdl/C_SaveData */ "../mai/src/d_mdl/C_SaveData.ts");
// Getting New Game startiing from Guld
function newGuld(arg) {
    init(arg);
    var guld = new_guld();
    var team = new_team(guld);
    var save = new_save(guld, team);
    return save_encode(0, save);
}
// Getting Any New Heores data
function allHres(arg) {
    init(arg);
    var hres = new_hres();
    return hres_encode(0, hres);
}
//////////////////////////////////////////////
///   サブルーチン
//////////////////////////////////////////////
function err_encode(code, msgs) {
    var ret_assoc = { ecode: code, emsg: '' };
    for (var _i = 0, msgs_1 = msgs; _i < msgs_1.length; _i++) {
        var msg = msgs_1[_i];
        ret_assoc.emsg += msg;
    }
    return ret_assoc;
}
function save_encode(code, save) {
    var ret_assoc = { ecode: 0, emsg: '' };
    if (code !== 0 || gv.mes.is_err()) {
        return err_encode(code, gv.mes.get_err_messages());
    }
    else {
        ret_assoc.ecode = 0;
        ret_assoc.emsg = 'Status OK';
        ret_assoc.save = save.encode();
    }
    return ret_assoc;
}
function hres_encode(code, hres) {
    var ret_assoc = { ecode: 0, emsg: '' };
    if (code !== 0 || gv.mes.is_err()) {
        return err_encode(code, gv.mes.get_err_messages());
    }
    else {
        ret_assoc.ecode = 0;
        ret_assoc.emsg = 'Status OK';
        var hres_array = [];
        for (var _i = 0, hres_1 = hres; _i < hres_1.length; _i++) {
            var hero = hres_1[_i];
            hres_array.push(hero.encode());
        }
        ret_assoc.data = { hres: hres_array };
        return ret_assoc;
    }
}
function new_hres() {
    var heroes = [];
    for (var i = 0; i < ga.nmbr; i++) {
        heroes.push((new C_Hero_1.C_Hero()).random_make());
    }
    return heroes;
}
function new_save(guld, team) {
    return new C_SaveData_1.C_SaveData({
        player_id: ga.pid,
        auto_mode: '0',
        is_active: '1',
        is_delete: '0',
        all_mvpt: [],
        all_maze: [],
        all_guld: [guld.encode()],
        all_team: [team.encode()],
        //loc
        mypos: team.get_loc().encode(),
    });
}
function new_guld() {
    var guld = new C_Guild_1.C_Guild();
    guld.decode({ name: '始まりの街の冒険者ギルド' });
    for (var i = 0; i < 12; i++) {
        guld.add_hero((new C_Hero_1.C_Hero()).random_make());
    }
    return guld;
}
function new_team(guld) {
    var team = new C_Team_1.C_Team();
    //loc
    var loc = new C_MovablePoint_1.C_MovablePoint();
    loc.decode({
        kind: 'Guld',
        name: guld.get_name(),
        loc_uid: guld.uid(),
        loc_pos: new C_PointDir_1.C_PointDir({
            'x': 0,
            'y': 0,
            'z': 0,
            'd': 0,
        }),
        team_uid: team.uid(),
    });
    team.set_prp({ name: 'ひよこさんチーム' });
    //loc
    team.set_loc(loc);
    //    team.set_loc((new C_MovablePoint()).decode(loc.encode()));
    for (var i = 0; i <= 3; i++) {
        team.add_hero((new C_Hero_1.C_Hero()).random_make());
    }
    return team;
}
/*******************************************************************************/
/*                                                                             */
/*                                初　期　設　定                                */
/*                                                                             */
/*******************************************************************************/
var gv;
var ga;
function init(obj) {
    gv = new C_GlobalVar();
    ga = new C_GlobalArguments(obj);
    return;
}
//////////////////////////////////////////////
/////
/////     クラス宣言
/////
//////////////////////////////////////////////
// 大域変数の設定
var C_GlobalVar = /** @class */ (function () {
    function C_GlobalVar() {
        this.Maze_size_x = 21;
        this.Maze_size_y = 21;
        this.Limit_of_room = 5;
        this.Max_size_of_room = 3;
        this.Max_of_Maze_Floor = 3;
        this.team_assoc = [];
        this.guld_assoc = [];
        this.heroes = [];
        this.mes = new C_DspMessage_1.C_DspMessage(/* isHTML = */ false);
        this.team = new C_Team_1.C_Team();
        this.guld = new C_Guild_1.C_Guild();
    }
    return C_GlobalVar;
}());
// POST引数の設定
var C_GlobalArguments = /** @class */ (function () {
    function C_GlobalArguments(obj) {
        var _a, _b;
        this.nmbr = 1;
        this.pid = 1;
        this.hres_JSON = '';
        this.mode = (_a = obj === null || obj === void 0 ? void 0 : obj.mode) !== null && _a !== void 0 ? _a : 'unknown';
        this.nmbr = (obj === null || obj === void 0 ? void 0 : obj.nmbr) !== undefined && !isNaN(obj.nmbr) ? Number(obj.nmbr) : 1;
        this.pid = (obj === null || obj === void 0 ? void 0 : obj.pid) !== undefined && !isNaN(obj.pid) ? Number(obj.pid) : 1;
        this.hres_JSON = (_b = obj === null || obj === void 0 ? void 0 : obj.hres_JSON) !== null && _b !== void 0 ? _b : undefined;
        //debug        console.log(`mode=${this.mode}, nmbr=${this.nmbr}, pid = ${this.pid}`);
    }
    return C_GlobalArguments;
}());
/*
module.exports = newGame;
module.exports = newHero;
*/ 


/***/ }),

/***/ "./src/lib/_JSON_mai_ldsv_test.ts":
/*!****************************************!*\
  !*** ./src/lib/_JSON_mai_ldsv_test.ts ***!
  \****************************************/
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.test = test;
var db_host = 'sql';
// 利用クラス等の読み込み
// エラーメッセージ等を保存・表示するクラス
var C_DspMessage_1 = __webpack_require__(/*! ../../../mai/src/d_utl/C_DspMessage */ "../mai/src/d_utl/C_DspMessage.ts");
// MySqlを扱うクラス
var promise_1 = __importDefault(__webpack_require__(/*! mysql2/promise */ "mysql2/promise"));
var C_NorReturn = /** @class */ (function () {
    function C_NorReturn(pid, name, mbname) {
        this.ecode = 0;
        this.emsg = '';
        this.pid = -1;
        this.name = '';
        this.mbname = '';
        this.pid = pid;
        this.name = name;
        this.mbname = mbname;
    }
    return C_NorReturn;
}());
var C_ErrReturn = /** @class */ (function () {
    function C_ErrReturn(ecode, emsg) {
        this.ecode = 1000;
        this.emsg = 'error';
        this.pid = -1;
        this.name = '';
        this.mbname = '';
        this.ecode = ecode;
        this.emsg = emsg;
    }
    return C_ErrReturn;
}());
// Getting New Game startiing from Guld
function test(arg) {
    return __awaiter(this, void 0, void 0, function () {
        var return_val;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    init(arg);
                    if (!gv.mes.is_err()) return [3 /*break*/, 1];
                    gv.mes.display_err_message();
                    return_val = new C_ErrReturn(100, 'db_mai OPEN ERROR ');
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, get_player()];
                case 2:
                    return_val = _a.sent();
                    _a.label = 3;
                case 3:
                    finl();
                    return [2 /*return*/, return_val];
            }
        });
    });
}
//////////////////////////////////////////////
///   サブルーチン
//////////////////////////////////////////////
function get_player() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (ga.pid === undefined)
                return [2 /*return*/, new C_ErrReturn(999, 'Pid Undefined')];
            return [2 /*return*/, select_users().then(function (rslt_users) {
                    if (rslt_users === undefined || gv.mes.is_err()) {
                        gv.mes.display_err_message();
                        return new C_ErrReturn(200, 'SQL ERROR ');
                    }
                    if (rslt_users.length < 1)
                        return new C_ErrReturn(900, "No data exist on pid=".concat(ga.pid));
                    return new C_NorReturn(rslt_users[0].id, rslt_users[0].name, rslt_users[0].mbname);
                }).catch(function (err) {
                    return new C_ErrReturn(100, 'SQL ERROR: ' + err);
                })];
        });
    });
}
function select_users() {
    return __awaiter(this, void 0, void 0, function () {
        var sql, rsltRowSet, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sql = "\n        SELECT id, name, passwd, mbname, email FROM tbl_player\n            WHERE  id = :id\n    ";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, gv.db_pool.query(sql, { id: ga.pid })];
                case 2:
                    rsltRowSet = (_a.sent())[0];
                    return [2 /*return*/, rsltRowSet];
                case 3:
                    err_1 = _a.sent();
                    gv.mes.set_err_message('SQL ERROR SELECT FROM tbl_player: ' + err_1);
                    return [2 /*return*/, undefined];
                case 4: return [2 /*return*/];
            }
        });
    });
}
/*******************************************************************************/
/*                                                                             */
/*                                初　期　設　定                                */
/*                                                                             */
/*******************************************************************************/
var gv;
var ga;
function init(obj) {
    gv = new C_GlobalVar();
    ga = new C_GlobalArguments(obj);
    return;
}
function finl() {
    gv.finl();
}
//////////////////////////////////////////////
/////
/////     クラス宣言
/////
//////////////////////////////////////////////
// 大域変数の設定
var C_GlobalVar = /** @class */ (function () {
    function C_GlobalVar() {
        this.db_host = "sql";
        this.db_port = 3306;
        this.db_name = "db_mai";
        this.db_user = "itsayno33";
        this.db_pass = "PE333833";
        this.mes = new C_DspMessage_1.C_DspMessage(/* isHTML = */ false);
        this.db_pool = promise_1.default.createPool({
            host: this.db_host,
            port: this.db_port,
            user: this.db_user,
            password: this.db_pass,
            database: this.db_name,
            connectionLimit: 10, // 接続を張り続ける数
            waitForConnections: true,
            namedPlaceholders: true,
            jsonStrings: true,
        });
    }
    C_GlobalVar.prototype.finl = function () {
        this.db_pool.end();
    };
    return C_GlobalVar;
}());
// POST引数の設定
var C_GlobalArguments = /** @class */ (function () {
    function C_GlobalArguments(obj) {
        var _a;
        this.pid = -1;
        this.mode = (_a = obj === null || obj === void 0 ? void 0 : obj.mode) !== null && _a !== void 0 ? _a : 'unknown';
        this.pid = (obj === null || obj === void 0 ? void 0 : obj.pid) !== undefined && !isNaN(obj.pid) ? Number(obj.pid) : -1;
        //debug        console.log(`mode=${this.mode}, pid = ${this.pid}`);
    }
    return C_GlobalArguments;
}());
/*
module.exports = newGame;
module.exports = newHero;
*/ 


/***/ }),

/***/ "./src/lib/_JSON_mai_maze.ts":
/*!***********************************!*\
  !*** ./src/lib/_JSON_mai_maze.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// 利用クラス等の読み込み
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.allMaze = allMaze;
exports.getMaze = getMaze;
exports.newMaze = newMaze;
// エラーメッセージ等を保存・表示するクラス
var C_DspMessage_1 = __webpack_require__(/*! ../../../mai/src/d_utl/C_DspMessage */ "../mai/src/d_utl/C_DspMessage.ts");
// 方向を表すクラス
var C_PointDir_1 = __webpack_require__(/*! ../../../mai/src/d_mdl/C_PointDir */ "../mai/src/d_mdl/C_PointDir.ts");
// 位置・経路を表すクラス全般
var C_MovablePoint_1 = __webpack_require__(/*! ../../../mai/src/d_mdl/C_MovablePoint */ "../mai/src/d_mdl/C_MovablePoint.ts");
// MAZE関係クラス全般
var C_Maze_1 = __webpack_require__(/*! ../../../mai/src/d_mdl/C_Maze */ "../mai/src/d_mdl/C_Maze.ts");
var C_MazeInfo_1 = __webpack_require__(/*! ../../../mai/src/d_mdl/C_MazeInfo */ "../mai/src/d_mdl/C_MazeInfo.ts"); // Maze作成のテンプレート情報
// パーティークラス全般
var C_Team_1 = __webpack_require__(/*! ../../../mai/src/d_mdl/C_Team */ "../mai/src/d_mdl/C_Team.ts");
// ヒーロークラス全般
var C_Hero_1 = __webpack_require__(/*! ../../../mai/src/d_mdl/C_Hero */ "../mai/src/d_mdl/C_Hero.ts");
// セーブデータ(クライアントとの連携)全般
var C_SaveData_1 = __webpack_require__(/*! ../../../mai/src/d_mdl/C_SaveData */ "../mai/src/d_mdl/C_SaveData.ts");
/*******************************************************************************/
/*                                                                             */
/*                                 主　処　理                                   */
/*                                                                             */
/*******************************************************************************/
var gv;
var ga;
// Getting Information of All Maze
function allMaze(obj) {
    init(obj);
    var maze_info_array = [];
    for (var name_1 in gv.mazeinfo)
        maze_info_array.push(gv.mazeinfo[name_1].encode());
    return all_encode(0, { mazeinfo: maze_info_array });
}
// Getting New Maze
function getMaze(obj) {
    init(obj);
    var _a = create_maze(ga.maze_name), new_maze = _a[0], new_pos = _a[1];
    return all_encode(0, {
        maze: new_maze.encode(),
        pos: new_pos,
    });
}
// Getting New Game startiing from Maze
function newMaze(obj) {
    init(obj);
    var _a = create_maze(''), new_maze = _a[0], new_pos = _a[1];
    var new_team = create_team(new_maze, new_pos);
    var new_save = create_save(new_maze, new_team);
    var ret_JSON = save_encode(0, new_save);
    return ret_JSON;
}
//////////////////////////////////////////////
///   サブルーチン
//////////////////////////////////////////////
function err_encode(code, msgs) {
    var ret_assoc = { ecode: code, emsg: '' };
    for (var _i = 0, msgs_1 = msgs; _i < msgs_1.length; _i++) {
        var msg = msgs_1[_i];
        ret_assoc.emsg += msg;
    }
    return ret_assoc;
}
function all_encode(code, data) {
    var ret_assoc = { ecode: code, emsg: '' };
    ret_assoc.ecode = code;
    if (code !== 0 || gv.mes.is_err()) {
        return err_encode(code, gv.mes.get_err_messages());
    }
    ret_assoc.emsg = 'Status OK';
    ret_assoc.data = data;
    return ret_assoc;
}
function save_encode(code, save) {
    var ret_assoc = { ecode: code, emsg: '' };
    if (code !== 0 || gv.mes.is_err()) {
        return err_encode(code, gv.mes.get_err_messages());
    }
    ret_assoc.emsg = 'Status OK';
    ret_assoc.save = save.encode();
    return ret_assoc;
}
function create_save(maze, team) {
    return new C_SaveData_1.C_SaveData({
        player_id: ga.pid,
        auto_mode: '0',
        is_active: '1',
        is_delete: '0',
        all_team: [team.encode()],
        all_maze: [maze.encode()],
        all_guld: [],
        all_mvpt: [],
        mypos: team.get_loc().encode(),
    });
}
function create_maze(maze_name) {
    if (maze_name === void 0) { maze_name = ''; }
    var maze;
    if (maze_name == '') {
        maze = new C_Maze_1.C_Maze({
            'name': '始まりの迷宮',
            'size_x': 21,
            'size_y': 21,
            'size_z': gv.Max_of_Maze_Floor
        });
    }
    else {
        var mazeinfo = gv.mazeinfo[maze_name];
        maze = new C_Maze_1.C_Maze({
            'name': mazeinfo.mbname,
            'size_x': mazeinfo.size_x,
            'size_y': mazeinfo.size_y,
            'size_z': mazeinfo.size_z
        });
    }
    for (var i = 0; i < maze.get_z_max(); i++) {
        maze.create_maze(i);
    }
    for (var i = 1; i < maze.get_z_max(); i++) {
        maze.create_stair(i);
    }
    var pos = maze.create_stair(0);
    return [maze, pos];
}
// 迷宮探索 新規ゲーム用の暫定版処置。その二
function create_hres() {
    var hres = [];
    for (var i = 0; i <= 3; i++) {
        hres.push(new C_Hero_1.C_Hero().random_make());
    }
    return hres;
}
function create_team(maze, pos) {
    /*
        $x = 2 * random_int(0, (($maze->get_size_x() - 1) / 2) - 1) + 1;
        $y = 2 * random_int(0, (($maze->get_size_y() - 1) / 2) - 1) + 1;
        $z = 0;  //    $z = 1 * random_int(0,  ($gv->maze->get_size_z() - 1));
    
        $d = random_int(0, Direct::MAX);
    */
    var team = new C_Team_1.C_Team();
    var loc = new C_MovablePoint_1.C_MovablePoint().decode({
        'kind': 'Maze',
        'name': maze.get_name(),
        'loc_uid': maze.uid(),
        'loc_pos': pos,
        'team_uid': team.uid(),
        /*
        'loc_pos' => [
            'x'   => $x,
            'y'   => $y,
            'z'   => $z,
            'd'   => $d,
        ],
*/
    });
    team.set_prp({ 'name': 'ひよこさんチーム' });
    team.set_loc(loc);
    for (var i = 0; i <= 3; i++) {
        team.add_hero(new C_Hero_1.C_Hero().random_make());
    }
    return team;
}
/*******************************************************************************/
/*                                                                             */
/*                                初　期　設　定                                */
/*                                                                             */
/*******************************************************************************/
function init(obj) {
    gv = new C_GlobalVar();
    ga = new C_GlobalArguments(obj);
    return;
}
//////////////////////////////////////////////
/////
/////     クラス宣言
/////
//////////////////////////////////////////////
// 大域変数の設定
var C_GlobalVar = /** @class */ (function () {
    function C_GlobalVar() {
        this.mazeinfo = {};
        this.heroes = [];
        this.Maze_size_x = 21;
        this.Maze_size_y = 21;
        this.Limit_of_room = 5;
        this.Max_size_of_room = 3;
        this.Max_of_Maze_Floor = 3;
        this.mes = new C_DspMessage_1.C_DspMessage(/* isHTML = */ false);
        var mazeinfo = C_MazeInfo_1.C_MazeInfo.get_tbl_all();
        for (var _i = 0, mazeinfo_1 = mazeinfo; _i < mazeinfo_1.length; _i++) {
            var mi = mazeinfo_1[_i];
            this.mazeinfo[mi.name] = mi;
        }
        /*
                const [rslt, mazeinfo]  = C_MazeInfo.get_tbl_all();
                this.mazeinfo = (rslt !== undefined) ? mazeinfo : [];
        */
        /*
                this.maze        = new C_Maze().create_make({
                    size_x:    this.Maze_size_x,
                    size_y:    this.Maze_size_y,
                    size_z:    this.Max_of_Maze_Floor,
                    fill_kind: T_MzKind.Empty,
                    max_room:  this.Limit_of_room,
                    room_size: this.Max_size_of_room,
            });
        */
        this.team = new C_Team_1.C_Team({ name: 'New Team', x: 1, y: 1, z: 1, d: C_PointDir_1.T_Direction.N });
    }
    return C_GlobalVar;
}());
// POST引数の設定
var C_GlobalArguments = /** @class */ (function () {
    /*
        public team_JSON: string   = '';
        public maze_JSON: string   = '';
    */
    function C_GlobalArguments(obj) {
        var _a, _b;
        this.pid = 1;
        this.maze_name = '';
        this.mode = (_a = obj === null || obj === void 0 ? void 0 : obj.mode) !== null && _a !== void 0 ? _a : 'unknown';
        this.pid = (obj === null || obj === void 0 ? void 0 : obj.pid) !== undefined && !isNaN(obj.pid) ? Number(obj.pid) : 1;
        this.maze_name = (_b = obj === null || obj === void 0 ? void 0 : obj.maze_name) !== null && _b !== void 0 ? _b : '';
        /*
                this.team_JSON = obj?.team      ?? '';
                this.maze_JSON = obj?.maze      ?? '';
        */
    }
    return C_GlobalArguments;
}());


/***/ }),

/***/ "./src/routes/maiGuld.ts":
/*!*******************************!*\
  !*** ./src/routes/maiGuld.ts ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var _JSON_mai_guld_1 = __webpack_require__(/*! ../lib/_JSON_mai_guld */ "./src/lib/_JSON_mai_guld.ts");
var http_errors_1 = __importDefault(__webpack_require__(/*! http-errors */ "http-errors"));
var express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
var router = express_1.default.Router();
/* GET users listing. */
router.get('/', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send('respond with a maiGuld');
        return [2 /*return*/];
    });
}); });
router.post('/newGuld', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var ret;
    return __generator(this, function (_a) {
        try {
            ret = (0, _JSON_mai_guld_1.newGuld)(req.body);
            res.status(200);
            res.send(JSON.stringify(ret, null, "\t"));
        }
        catch (err) {
            console.log("newGame POST error: ".concat(err));
            next((0, http_errors_1.default)(406));
        }
        return [2 /*return*/];
    });
}); });
router.get('/newGuld', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send('respond with a New Game To Guld of mai');
        return [2 /*return*/];
    });
}); });
router.post('/allHres', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var ret;
    return __generator(this, function (_a) {
        try {
            ret = (0, _JSON_mai_guld_1.allHres)(req.body);
            res.status(200);
            res.send(JSON.stringify(ret, null, "\t"));
        }
        catch (err) {
            console.log("newHres POST error: ".concat(err));
            next((0, http_errors_1.default)(406));
        }
        return [2 /*return*/];
    });
}); });
router.get('/allHres', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send('respond with Getting All Hres data of mai');
        return [2 /*return*/];
    });
}); });
module.exports = router;


/***/ }),

/***/ "./src/routes/maiLdSv.ts":
/*!*******************************!*\
  !*** ./src/routes/maiLdSv.ts ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var _JSON_mai_ldsv_test_1 = __webpack_require__(/*! ../lib/_JSON_mai_ldsv_test */ "./src/lib/_JSON_mai_ldsv_test.ts");
var http_errors_1 = __importDefault(__webpack_require__(/*! http-errors */ "http-errors"));
var express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
var router = express_1.default.Router();
/* GET users listing. */
router.get('/', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send('respond with a maiLoadSave');
        return [2 /*return*/];
    });
}); });
/*
** For Test Function
*/
router.post('/test', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var key, rslt, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                //debug
                for (key in req.body)
                    console.error("req.".concat(key, ": ").concat(req.body[key]));
                return [4 /*yield*/, (0, _JSON_mai_ldsv_test_1.test)(req.body)];
            case 1:
                rslt = _a.sent();
                if (rslt.ecode !== 0) {
                    console.error("*** error: ".concat(rslt.ecode, ": ").concat(rslt.emsg, " ***"));
                    next((0, http_errors_1.default)(406));
                }
                res.render('pages/test', rslt);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.error("newLoad POST error: ".concat(err_1));
                next((0, http_errors_1.default)(406));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get('/test', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var key;
    return __generator(this, function (_a) {
        try {
            //debug
            for (key in req.body)
                console.error("req.".concat(key, ": ").concat(req.body[key]));
            res.render('pages/test', { pid: -1 });
        }
        catch (err) {
            console.log("newLoad POST error: ".concat(err));
            next((0, http_errors_1.default)(406));
        }
        return [2 /*return*/];
    });
}); });
module.exports = router;


/***/ }),

/***/ "./src/routes/maiMaze.ts":
/*!*******************************!*\
  !*** ./src/routes/maiMaze.ts ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var _JSON_mai_maze_1 = __webpack_require__(/*! ../lib/_JSON_mai_maze */ "./src/lib/_JSON_mai_maze.ts");
var http_errors_1 = __importDefault(__webpack_require__(/*! http-errors */ "http-errors"));
var express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
var router = express_1.default.Router();
/* GET users listing. */
router.get('/', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send('respond with a maiMaze');
        return [2 /*return*/];
    });
}); });
router.post('/newMaze', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var ret;
    return __generator(this, function (_a) {
        try {
            ret = (0, _JSON_mai_maze_1.newMaze)(req.body);
            res.status(200);
            res.send(JSON.stringify(ret, null, "\t"));
        }
        catch (err) {
            console.log("newGame POST error: ".concat(err));
            next((0, http_errors_1.default)(406));
        }
        return [2 /*return*/];
    });
}); });
router.get('/newMaze', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send('respond with a New Game To Maze of mai');
        return [2 /*return*/];
    });
}); });
router.post('/getMaze', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var ret;
    return __generator(this, function (_a) {
        try {
            ret = (0, _JSON_mai_maze_1.getMaze)(req.body);
            res.status(200);
            res.send(JSON.stringify(ret, null, "\t"));
        }
        catch (err) {
            console.log("newMaze POST error: ".concat(err));
            next((0, http_errors_1.default)(406));
        }
        return [2 /*return*/];
    });
}); });
router.get('/getMaze', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send('respond with Getting New Maze data of mai');
        return [2 /*return*/];
    });
}); });
router.post('/allMaze', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var ret;
    return __generator(this, function (_a) {
        try {
            ret = (0, _JSON_mai_maze_1.allMaze)(req.body);
            res.status(200);
            res.send(JSON.stringify(ret, null, "\t"));
        }
        catch (err) {
            console.log("mazeInfo POST error: ".concat(err));
            next((0, http_errors_1.default)(406));
        }
        return [2 /*return*/];
    });
}); });
router.get('/allMaze', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send('respond with All Maze Infomation of mai');
        return [2 /*return*/];
    });
}); });
module.exports = router;


/***/ }),

/***/ "./src/routes/maiex.ts":
/*!*****************************!*\
  !*** ./src/routes/maiex.ts ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
var router = express_1.default.Router();
var maiGuldRouter = __webpack_require__(/*! ./maiGuld */ "./src/routes/maiGuld.ts");
var maiMazeRouter = __webpack_require__(/*! ./maiMaze */ "./src/routes/maiMaze.ts");
var maiLdSvRouter = __webpack_require__(/*! ./maiLdSv */ "./src/routes/maiLdSv.ts");
// router setup
router.use('/guld', maiGuldRouter);
router.use('/maze', maiMazeRouter);
router.use('/ldsv', maiLdSvRouter);
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a maiex');
});
module.exports = router;


/***/ }),

/***/ "./src/routes/users.ts":
/*!*****************************!*\
  !*** ./src/routes/users.ts ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
var router = express_1.default.Router();
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a user resource');
});
module.exports = router;


/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("http-errors");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBRyxHQUFWLFVBQVcsR0FBVyxFQUFFLENBQW9CO1FBQ3hDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQUUsT0FBTyxTQUFTLENBQUM7UUFDdkMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVNLGlDQUFTLEdBQWhCO1FBQ0ksT0FBTyxtQkFBTSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNNLGtDQUFVLEdBQWpCO1FBQ0ksT0FBTyxtQkFBTSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUNNLGtDQUFVLEdBQWpCO1FBQ0ksT0FBTyxtQkFBTSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUNNLGtDQUFVLEdBQWpCO1FBQ0ksT0FBTyxtQkFBTSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMs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QyxNQUFNLEdBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUN2RCxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN0RCxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQU0sU0FBUztZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN0RCxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN0RCxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN0RCxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQU0sU0FBUztZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBTyxTQUFTO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBSSxDQUFDLENBQUMsS0FBSyxLQUFNLEVBQUUsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2pGLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBTyxTQUFTO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBSSxDQUFDLENBQUMsS0FBSyxLQUFNLEVBQUUsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBRSxDQUFDLENBQUMs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LElBQU0sWUFBWSxHQUFHLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBQztJQUN2RixJQUFNLFlBQVksR0FBRyxFQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUM7SUFDdkYsSUFBTSxZQUFZLEdBQUcsRUFBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFDO0lBQ3ZGLElBQU0sWUFBWSxHQUFHLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBQztJQUV2RixJQUFNLFlBQVksR0FBRyxFQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUM7SUFDdkYsSUFBTSxZQUFZLEdBQUcsRUFBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFDO0lBQ3ZGLElBQU0sWUFBWSxHQUFHLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBQztJQUN2RixJQUFNLFlBQVksR0FBRyxFQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUM7SUFFdkYsSUFBSSxHQUFHLEdBQUcsaUJBQWlCLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxPQUFP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Q0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUM7UUFDNUMsRUFBRSxFQUFFLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUM7UUFDNUMsRUFBRSxFQUFFLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUM7UUFDNUMsRUFBRSxFQUFFLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUM7S0FDL0M7SUFDRCxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsQ0FBUyxFQUFFLElBQWlCLEVBQUUsSUFBaUI7SUFDOUQsSUFBSSxhQUFhLENBQUMsS0FBSyxLQUFLLFNBQVM7UUFBRSxPQUFPO0lBQzlDLElBQU0sR0FBRyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFFaEMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJ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QUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOzs7Ozs7Ozs7OztBQ1J4Qjs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX0dvb2RzSXRlbS50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX0d1aWxkLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfSGVyby50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX0hlcm9BYmlsaXR5LnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfTG9jYXRpb24udHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19NYXplLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfTWF6ZUNlbGwudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19NYXplSW5mby50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX01hemVPYmoudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19NYXplT2JqVmlldy50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX01vdmFibGVQb2ludC50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX1BvaW50LnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfUG9pbnREaXIudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19Qb2ludFNldDJELnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfUmFuZ2UudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19TYXZlRGF0YS50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX1NhdmVJbmZvLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfVGVhbS50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX1RlYW1WaWV3LnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfV2Fsa2VyLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL1RfRGlyZWN0aW9uLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL1RfTXpLaW5kLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfdXRsL0NfRHNwTWVzc2FnZS50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX3V0bC9GX01hdGgudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF91dGwvRl9SYW5kLnRzIiwid2VicGFjazovL21haS8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2xpYi9fSlNPTl9tYWlfZ3VsZC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvbGliL19KU09OX21haV9sZHN2X3Rlc3QudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2xpYi9fSlNPTl9tYWlfbWF6ZS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvcm91dGVzL21haUd1bGQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL3JvdXRlcy9tYWlMZFN2LnRzIiwid2VicGFjazovL21haS8uL3NyYy9yb3V0ZXMvbWFpTWF6ZS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvcm91dGVzL21haWV4LnRzIiwid2VicGFjazovL21haS8uL3NyYy9yb3V0ZXMvdXNlcnMudHMiLCJ3ZWJwYWNrOi8vbWFpL2V4dGVybmFsIGNvbW1vbmpzIFwiY29va2llLXBhcnNlclwiIiwid2VicGFjazovL21haS9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9tYWkvZXh0ZXJuYWwgY29tbW9uanMgXCJodHRwLWVycm9yc1wiIiwid2VicGFjazovL21haS9leHRlcm5hbCBjb21tb25qcyBcIm1vcmdhblwiIiwid2VicGFjazovL21haS9leHRlcm5hbCBjb21tb25qcyBcIm15c3FsMi9wcm9taXNlXCIiLCJ3ZWJwYWNrOi8vbWFpL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vbWFpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21haS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL21haS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbWFpL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUX01ha2VFbnVtVHlwZSB9ICAgZnJvbSBcIi4uL2RfdXRsL1RfTWFrZUVudW1UeXBlXCI7XHJcbmltcG9ydCB7IF9nZXRfdXVpZCwgX2lyYW5kIH0gICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuaW1wb3J0IHsgSV9KU09OLCBKU09OX0FueSB9IGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUX0dvb2RzS2luZDp7W2xja2Q6IHN0cmluZ106IG51bWJlcn0gID0ge1xyXG4gICAgVW5rbjogIDAsXHJcbiAgICBDaHN0OiAgMSwgIFxyXG4gICAgR29sZDogIDIsXHJcbiAgICBBcm1zOiAgMyxcclxuICAgIFNobGQ6ICA1LFxyXG4gICAgRHJ1ZzogIDYsXHJcbiAgICBJdGVtOiAgNyxcclxufSBhcyBjb25zdDtcclxuZXhwb3J0IHR5cGUgVF9Hb29kc0tpbmQgPSBUX01ha2VFbnVtVHlwZTx0eXBlb2YgVF9Hb29kc0tpbmQ+O1xyXG5cclxuZnVuY3Rpb24gVF9Hb29kc0tpbmRfa2V5KGdka2Q6IFRfR29vZHNLaW5kKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhUX0dvb2RzS2luZCkuZmluZChrZXkgPT4gVF9Hb29kc0tpbmRba2V5XSA9PT0gZ2RrZCkgPz8gXCJVbmtuXCI7XHJcbn1cclxuXHJcbmNvbnN0IEdvb2RzS2luZF9tYl9uYW1lOiB7W2tpbmQ6IG51bWJlcl06IHN0cmluZ30gPSB7XHJcbiAgICAwOiAgJ+ODkOOCsCcsXHJcbiAgICAxOiAgJ+WuneeusScsXHJcbiAgICAyOiAgJ+mHkemKrScsXHJcbiAgICAzOiAgJ+atpuWZqCcsXHJcbiAgICA1OiAgJ+ijheWCmScsXHJcbiAgICA2OiAgJ+iWrCcsXHJcbiAgICA3OiAgJ+eJqeWTgScsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9Hb29kc0l0ZW0gZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICB1bmlxX2lkPzogICAgICAgICBzdHJpbmcsXHJcbiAgICBraW5kPzogICAgICAgICAgICBzdHJpbmcsXHJcbiAgICBuYW1lPzogICAgICAgICAgICBzdHJpbmcsXHJcbiAgICBhbWJpZ3VvdXNfbmFtZT86ICBzdHJpbmcsXHJcbiAgICBjb25maXJtZWRfbmFtZT86ICBzdHJpbmcsXHJcbiAgICBvd25fbmFtZT86ICAgICAgICBzdHJpbmcsXHJcbiAgICBhbWJpZ3VvdXNfdmFsdWU/OiBudW1iZXIsXHJcbiAgICBjb25maXJtZWRfdmFsdWU/OiBudW1iZXIsXHJcbiAgICBvd25fdmFsdWU/OiAgICAgICBudW1iZXIsXHJcbiAgICBpc19jb25maXJtZWQ/OiAgICBzdHJpbmcsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX0dvb2RzSXRlbSBpbXBsZW1lbnRzIElfSlNPTiB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBuZXdPYmooaj86IEpTT05fR29vZHNJdGVtKTogQ19Hb29kc0l0ZW18dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAoaiAgICAgID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKGoua2luZCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBpZiAoai5raW5kIGluIFRfR29vZHNLaW5kKSByZXR1cm4gbmV3IENfR29vZHNJdGVtKGopO1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbi8qICAgICAgICBcclxuICAgICAgICBjb25zdCBraW5kID0gVF9Hb29kc0tpbmRbai5raW5kXTtcclxuICAgICAgICBzd2l0Y2ggKGtpbmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0dvb2RzS2luZC5Hb2xkOlxyXG4gICAgICAgICAgICBjYXNlIFRfR29vZHNLaW5kLkFybXM6XHJcbiAgICAgICAgICAgIGNhc2UgVF9Hb29kc0tpbmQuU2hsZDpcclxuICAgICAgICAgICAgY2FzZSBUX0dvb2RzS2luZC5EcnVnOlxyXG4gICAgICAgICAgICBjYXNlIFRfR29vZHNLaW5kLkl0ZW06XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENfR29vZHNJdGVtKGopO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiovXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVuaXFfaWQ6ICAgICAgICAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIGtpbmQ6ICAgICAgICAgICAgVF9Hb29kc0tpbmQ7XHJcbiAgICBwcm90ZWN0ZWQgbmFtZTogICAgICAgICAgICBzdHJpbmc7ICAgLy8g5LiL6KiY44Gu5ZCN5YmN44Gu44GG44Gh44CB5pyA5paw44Gu44KC44GuXHJcbiAgICBwcm90ZWN0ZWQgYW1iaWd1b3VzX25hbWU6ICBzdHJpbmc7ICAgLy8g6ZGR5a6a44G+44Gn44Gu5ZCN5YmNXHJcbiAgICBwcm90ZWN0ZWQgY29uZmlybWVkX25hbWU6ICBzdHJpbmc7ICAgLy8g6ZGR5a6a44Gn56K65a6a44GX44Gf5ZCN5YmNXHJcbiAgICBwcm90ZWN0ZWQgb3JpZ2luYWxfbmFtZTogICBzdHJpbmd8dW5kZWZpbmVkOyAgLy8g6Ieq5YiG44Gn5ZG95ZCN44GX44Gf44Kq44Oq44K444OK44Or44Gu5ZCN5YmNXHJcbiAgICBwcm90ZWN0ZWQgdmFsdWU6ICAgICAgICAgICBudW1iZXI7ICAvLyDph5Hpiq3nmoTkvqHlgKQoR29sZCDjgarjgonjgZ3jga7kvqHmoLzjgIHjgZ3jga7ku5bjga/lo7LosrfkvqHmoLzjga7ln7rnpI7lgKQpXHJcbiAgICBwcm90ZWN0ZWQgYW1iaWd1b3VzX3ZhbHVlOiBudW1iZXI7ICAvLyDpkZHlrprjgb7jgafjga7kvqHlgKRcclxuICAgIHByb3RlY3RlZCBjb25maXJtZWRfdmFsdWU6IG51bWJlcjsgIC8vIOmRkeWumuOBp+eiuuWumuOBl+OBn+S+oeWApFxyXG4gICAgcHJvdGVjdGVkIG9yaWdpbmFsX3ZhbHVlOiAgbnVtYmVyfHVuZGVmaW5lZDsgIC8vIOOCquODquOCuOODiuODq+WMluOBl+OBn+W+jOOBruS+oeWApFxyXG4gICAgcHJvdGVjdGVkIGlzX2NvbmZpcm1lZDogICAgYm9vbGVhbjsgLy8g6ZGR5a6a44Gn56K65a6aKFRydWUp44GX44Gf44GL5ZCmKEZhbHNlKeOBi1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9Hb29kc0l0ZW0pIHtcclxuICAgICAgICB0aGlzLnVuaXFfaWQgICAgICAgID0gICdnb29kc18nICsgX2dldF91dWlkKCk7XHJcbiAgICAgICAgdGhpcy5raW5kICAgICAgICAgICA9IFRfR29vZHNLaW5kLlVua247XHJcbiAgICAgICAgdGhpcy5pc19jb25maXJtZWQgICA9IGZhbHNlOyBcclxuXHJcbiAgICAgICAgdGhpcy5hbWJpZ3VvdXNfbmFtZSA9ICcnOyBcclxuICAgICAgICB0aGlzLmNvbmZpcm1lZF9uYW1lID0gJyc7IFxyXG4gICAgICAgIHRoaXMub3JpZ2luYWxfbmFtZSAgPSB1bmRlZmluZWQ7IFxyXG4gICAgICAgIHRoaXMubmFtZSAgICAgICAgICAgPSB0aGlzLmFtYmlndW91c19uYW1lOyBcclxuXHJcbiAgICAgICAgdGhpcy5hbWJpZ3VvdXNfdmFsdWUgPSAwOyBcclxuICAgICAgICB0aGlzLmNvbmZpcm1lZF92YWx1ZSA9IDA7IFxyXG4gICAgICAgIHRoaXMub3JpZ2luYWxfdmFsdWUgID0gdW5kZWZpbmVkOyBcclxuICAgICAgICB0aGlzLnZhbHVlICAgICAgICAgICA9IHRoaXMuYW1iaWd1b3VzX3ZhbHVlOyBcclxuXHJcbiAgICAgICAgaWYgKGogIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoaik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVpZCgpOiBzdHJpbmcge3JldHVybiB0aGlzLnVuaXFfaWQ7fTtcclxuICAgIHB1YmxpYyBnZXRfa2luZCgpOiBUX0dvb2RzS2luZCB7cmV0dXJuIHRoaXMua2luZDt9O1xyXG4gICAgcHVibGljIGdldF9uYW1lKCk6IHN0cmluZyB7cmV0dXJuIHRoaXMubmFtZX07XHJcbiAgICBwdWJsaWMgZ2V0X2dvbGQoKTogbnVtYmVyIHtyZXR1cm4gdGhpcy52YWx1ZX07XHJcblxyXG4gICAgcHVibGljIGdldF9raW5kX25hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gR29vZHNLaW5kX21iX25hbWVbdGhpcy5raW5kXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZG9fY29uZmlybWUoKTogc3RyaW5nIHtcclxuICAgICAgICB0aGlzLmlzX2NvbmZpcm1lZCAgID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5hbWUgID0gdGhpcy5vcmlnaW5hbF9uYW1lICA/PyB0aGlzLmNvbmZpcm1lZF9uYW1lO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm9yaWdpbmFsX3ZhbHVlID8/IHRoaXMuY29uZmlybWVkX3ZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X293bl9uYW1lKG9yaWdpbmFsX25hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbF9uYW1lID0gb3JpZ2luYWxfbmFtZTtcclxuICAgICAgICB0aGlzLm5hbWUgICAgICAgICAgPSBvcmlnaW5hbF9uYW1lO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X293bl92YWx1ZShvcmlnaW5hbF92YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsX3ZhbHVlID0gb3JpZ2luYWxfdmFsdWU7XHJcbiAgICAgICAgdGhpcy52YWx1ZSAgICAgICAgICA9IG9yaWdpbmFsX3ZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByYW5kb21fbWFrZShraW5kOiBUX0dvb2RzS2luZCk6IENfR29vZHNJdGVtIHtcclxuICAgICAgICB0aGlzLmtpbmQgPSBraW5kO1xyXG4gICAgICAgIGlmIChraW5kID09PSBUX0dvb2RzS2luZC5Hb2xkKSAgdGhpcy52YWx1ZSA9IF9pcmFuZCgxMDAsMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX0dvb2RzSXRlbSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdW5pcV9pZDogICAgICAgICB0aGlzLnVuaXFfaWQsXHJcbiAgICAgICAgICAgIGtpbmQ6ICAgICAgICAgICAgVF9Hb29kc0tpbmRfa2V5KHRoaXMua2luZCksXHJcbiAgICAgICAgICAgIGFtYmlndW91c19uYW1lOiAgdGhpcy5hbWJpZ3VvdXNfbmFtZSxcclxuICAgICAgICAgICAgY29uZmlybWVkX25hbWU6ICB0aGlzLmNvbmZpcm1lZF9uYW1lLFxyXG4gICAgICAgICAgICBvcmlnaW5hbF9uYW1lOiAgIHRoaXMub3JpZ2luYWxfbmFtZSA/PyAnJyxcclxuICAgICAgICAgICAgYW1iaWd1b3VzX3ZhbHVlOiB0aGlzLmFtYmlndW91c192YWx1ZSxcclxuICAgICAgICAgICAgY29uZmlybWVkX3ZhbHVlOiB0aGlzLmNvbmZpcm1lZF92YWx1ZSxcclxuICAgICAgICAgICAgb3JpZ2luYWxfdmFsdWU6ICB0aGlzLm9yaWdpbmFsX3ZhbHVlID8/IDAsXHJcbiAgICAgICAgICAgIGlzX2NvbmZpcm1lZDogICAgdGhpcy5pc19jb25maXJtZWQgPyAnMScgOiAnMCcsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShqOiBKU09OX0dvb2RzSXRlbSk6IENfR29vZHNJdGVtIHtcclxuICAgICAgICBpZiAoaiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGoudW5pcV9pZCAgICAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMudW5pcV9pZCAgICAgICAgICA9IGoudW5pcV9pZDtcclxuICAgICAgICBpZiAoai5raW5kICAgICAgICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5raW5kICAgICAgICAgICAgID0gVF9Hb29kc0tpbmRbai5raW5kXTtcclxuICAgICAgICBpZiAoai5hbWJpZ3VvdXNfbmFtZSAgIT09IHVuZGVmaW5lZCkgdGhpcy5hbWJpZ3VvdXNfbmFtZSAgID0gai5hbWJpZ3VvdXNfbmFtZTtcclxuICAgICAgICBpZiAoai5jb25maXJtZWRfbmFtZSAgIT09IHVuZGVmaW5lZCkgdGhpcy5jb25maXJtZWRfbmFtZSAgID0gai5jb25maXJtZWRfbmFtZTtcclxuICAgICAgICBpZiAoai5vcmlnaW5hbF9uYW1lICAgIT09IHVuZGVmaW5lZCkgdGhpcy5vcmlnaW5hbF9uYW1lICAgID0gai5vcmlnaW5hbF9uYW1lICE9PSAnJyA/IGoub3JpZ2luYWxfbmFtZSA6IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAoai5hbWJpZ3VvdXNfdmFsdWUgIT09IHVuZGVmaW5lZCkgdGhpcy5hbWJpZ3VvdXNfdmFsdWUgID0gai5hbWJpZ3VvdXNfdmFsdWU7XHJcbiAgICAgICAgaWYgKGouY29uZmlybWVkX3ZhbHVlICE9PSB1bmRlZmluZWQpIHRoaXMuY29uZmlybWVkX3ZhbHVlICA9IGouY29uZmlybWVkX3ZhbHVlO1xyXG4gICAgICAgIGlmIChqLm9yaWdpbmFsX3ZhbHVlICAhPT0gdW5kZWZpbmVkKSB0aGlzLm9yaWdpbmFsX3ZhbHVlICAgPSBqLm9yaWdpbmFsX3ZhbHVlICE9PSAwID8gai5vcmlnaW5hbF92YWx1ZSA6IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAoai5pc19jb25maXJtZWQgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5pc19jb25maXJtZWQgICAgID0gai5pc19jb25maXJtZWQgIT0gJzAnID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5vcmlnaW5hbF9uYW1lICE9PSB1bmRlZmluZWQpIHRoaXMubmFtZSA9IHRoaXMub3JpZ2luYWxfbmFtZTtcclxuICAgICAgICBlbHNlIHRoaXMubmFtZSA9IHRoaXMuaXNfY29uZmlybWVkID8gdGhpcy5jb25maXJtZWRfbmFtZSA6IHRoaXMuYW1iaWd1b3VzX25hbWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9yaWdpbmFsX3ZhbHVlICE9PSB1bmRlZmluZWQpIHRoaXMudmFsdWUgPSB0aGlzLm9yaWdpbmFsX3ZhbHVlO1xyXG4gICAgICAgIGVsc2UgdGhpcy52YWx1ZSA9IHRoaXMuaXNfY29uZmlybWVkID8gdGhpcy5jb25maXJtZWRfdmFsdWUgOiB0aGlzLmFtYmlndW91c192YWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgSV9Mb2NhdGUsIFRfTGNrZCB9ICAgICAgZnJvbSBcIi4vQ19Mb2NhdGlvblwiO1xyXG5pbXBvcnQgeyBJX0pTT05fVW5pcSwgSlNPTl9BbnkgfSBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcbmltcG9ydCB7IENfSGVybywgSlNPTl9IZXJvIH0gICAgIGZyb20gXCIuL0NfSGVyb1wiO1xyXG5pbXBvcnQgeyBDX0dvb2RzLCBKU09OX0dvb2RzIH0gICBmcm9tIFwiLi9DX0dvb2RzXCI7XHJcbmltcG9ydCB7IF9nZXRfdXVpZCB9ICAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuaW1wb3J0IHsgQ19Hb29kc0l0ZW0sIEpTT05fR29vZHNJdGVtLCBUX0dvb2RzS2luZCB9IGZyb20gXCIuL0NfR29vZHNJdGVtXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fR3VpbGQgZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBpZD86ICAgICAgIG51bWJlcixcclxuICAgIHVuaXFfaWQ/OiAgc3RyaW5nLFxyXG4gICAgc2F2ZV9pZD86ICBudW1iZXIsXHJcbiAgICBuYW1lPzogICAgIHN0cmluZyxcclxuICAgIGdvbGQ/OiAgICAgSlNPTl9Hb29kc0l0ZW0sXHJcbiAgICBoZXJvZXM/OiAgIEpTT05fSGVyb1tdLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfZ3VsZF9pbmZvKGE6IEpTT05fR3VpbGR8dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydChcIkd1aWxkIEluZm86XCIgXHJcbiAgICAgICAgKyBcIlxcbmlkOiAgICAgICBcIiArIChhLmlkICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnVuaXFfaWQ6ICBcIiArIChhLnVuaXFfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNhdmVfaWQ6ICBcIiArIChhLnNhdmVfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbm5hbWU6ICAgICBcIiArIChhLm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmdvbGQ6ICAgICBcIiArIChPYmplY3Qua2V5cyhhLmdvbGQ/PzApLmxlbmd0aClcclxuICAgICAgICArIFwiXFxuaGVyb2VzOiAgIFwiICsgKGEuaGVyb2VzPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfR3VpbGQgaW1wbGVtZW50cyBJX0xvY2F0ZSwgSV9KU09OX1VuaXEge1xyXG4gICAgcHJvdGVjdGVkIGlkOiAgICAgICAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCB1bmlxX2lkOiAgICBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgc2F2ZV9pZDogICAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIG5hbWU6ICAgICAgIHN0cmluZztcclxuICAgIHB1YmxpYyAgICBnb2xkOiAgICAgICBDX0dvb2RzSXRlbTtcclxuICAgIHByb3RlY3RlZCBoZXJvZXM6ICAgICB7W3VpZDogc3RyaW5nXTogQ19IZXJvfTtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihhPzogSlNPTl9HdWlsZCkge1xyXG4gICAgICAgIHRoaXMuaWQgICAgICAgICA9IC0xO1xyXG4gICAgICAgIHRoaXMudW5pcV9pZCAgICA9ICdtYWlfZ3VsZCMnICsgX2dldF91dWlkKCk7XHJcbiAgICAgICAgdGhpcy5zYXZlX2lkICAgID0gLTE7XHJcbiAgICAgICAgdGhpcy5uYW1lICAgICAgID0gJyc7XHJcbiAgICAgICAgdGhpcy5nb2xkICAgICAgID0gbmV3IENfR29vZHNJdGVtKHtna2luZDogVF9Hb29kc0tpbmQuR29sZCwgdmFsdWU6IDB9KTtcclxuICAgICAgICB0aGlzLmhlcm9lcyAgICAgPSB7fTtcclxuICAgICAgICBpZiAoYSAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdWlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnVuaXFfaWR9XHJcbiAgICBwdWJsaWMgZ2V0X2xja2QoKTogVF9MY2tkIHtyZXR1cm4gVF9MY2tkLk1hemV9XHJcbiAgICBwdWJsaWMgZ2V0X25hbWUoKTogc3RyaW5nIHtyZXR1cm4gdGhpcy5uYW1lfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgaHJlcygpOiAgQ19IZXJvW10ge1xyXG4gICAgICAgIGNvbnN0IGhyZXM6IENfSGVyb1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaWkgaW4gdGhpcy5oZXJvZXMpIGhyZXMucHVzaCh0aGlzLmhlcm9lc1tpaV0pO1xyXG4gICAgICAgIHJldHVybiBocmVzO1xyXG4gICAgfSBcclxuICAgIHB1YmxpYyBjbGVhcl9ocmVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGVyb2VzID0ge307XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRkX2hlcm8oaGVybzogQ19IZXJvKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZXJvZXNbaGVyby51aWQoKV0gPSBoZXJvO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJtdl9oZXJvKGhlcm86IENfSGVybyk6IHZvaWQge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmhlcm9lc1toZXJvLnVpZCgpXTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX29ial90b19zdHJpbmcob2E6IENfR3VpbGQpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYSwgbnVsbCwgXCJcXHRcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fb2JqQXJyYXlfdG9fc3RyaW5nKG9hYToge1t1aWQ6IHN0cmluZ106IENfR3VpbGR9KTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBvYSA9IFtdIGFzIENfR3VpbGRbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGlpIGluIG9hYSkgb2EucHVzaChvYWFbaWldKTtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2EsIG51bGwsIFwiXFx0XCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ190b19vYmoodHh0OiBzdHJpbmcpOiBDX0d1aWxkIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqICAgPSBKU09OLnBhcnNlKHR4dCkgYXMgSlNPTl9HdWlsZFtdO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENfR3VpbGQoaik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ19HdWlsZCgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fc3RyaW5nX3RvX29iakFycmF5KHR4dDogc3RyaW5nKToge1t1aWQ6IHN0cmluZ106IENfR3VpbGR9IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqICAgPSBKU09OLnBhcnNlKHR4dCkgYXMgSlNPTl9HdWlsZFtdO1xyXG4gICAgICAgICAgICBjb25zdCBtcGEgPSB7fSBhcyB7W2lkOiBzdHJpbmddOiBDX0d1aWxkfTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqaiBvZiBqKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhYWEgPSBuZXcgQ19HdWlsZCgpLmRlY29kZShqaik7XHJcbiAgICAgICAgICAgICAgICBtcGFbYWFhLnVpZCgpXSA9IGFhYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbXBhO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX0d1aWxkIHtcclxuICAgICAgICBjb25zdCBqc29uX2hlcm9lczogSlNPTl9IZXJvW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpaSBpbiB0aGlzLmhlcm9lcykganNvbl9oZXJvZXMucHVzaCh0aGlzLmhlcm9lc1tpaV0uZW5jb2RlKCkpOyAgXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgIHRoaXMuaWQsXHJcbiAgICAgICAgICAgIHVuaXFfaWQ6IHRoaXMudW5pcV9pZCxcclxuICAgICAgICAgICAgc2F2ZV9pZDogdGhpcy5zYXZlX2lkLFxyXG4gICAgICAgICAgICBnb2xkOiAgICB0aGlzLmdvbGQuZW5jb2RlKCksXHJcbiAgICAgICAgICAgIGhlcm9lczogIGpzb25faGVyb2VzLFxyXG4gICAgICAgICAgICBuYW1lOiAgICB0aGlzLm5hbWUsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX0d1aWxkfHVuZGVmaW5lZCk6IENfR3VpbGQge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChhLmlkICAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMuaWQgICAgICAgICA9IGEuaWQ7XHJcbiAgICAgICAgaWYgKGEudW5pcV9pZCAgIT09IHVuZGVmaW5lZCkgdGhpcy51bmlxX2lkICAgID0gYS51bmlxX2lkO1xyXG4gICAgICAgIGlmIChhLnNhdmVfaWQgICE9PSB1bmRlZmluZWQpIHRoaXMuc2F2ZV9pZCAgICA9IGEuc2F2ZV9pZDtcclxuICAgICAgICBpZiAoYS5uYW1lICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm5hbWUgICAgICAgPSBhLm5hbWU7XHJcbiAgICAgICAgaWYgKGEuZ29sZCAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5nb2xkLmRlY29kZSAoYS5nb2xkKTtcclxuXHJcbiAgICAgICAgaWYgKGEuaGVyb2VzICE9PSB1bmRlZmluZWQpICB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVyb2VzID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl9oZXJvIG9mIGEuaGVyb2VzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZXJvID0gbmV3IENfSGVybyhqc29uX2hlcm8pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZXJvZXNbaGVyby51aWQoKV0gPSBoZXJvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBlbmNvZGVfYWxsKGFsbF9ndWxkOiBDX0d1aWxkW10pOiBKU09OX0d1aWxkW10ge1xyXG4gICAgICAgIGNvbnN0IGFsbF9ndWxkX2RhdGE6IEpTT05fR3VpbGRbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGd1bGQgb2YgYWxsX2d1bGQpIHtcclxuICAgICAgICAgICAgYWxsX2d1bGRfZGF0YS5wdXNoKGd1bGQuZW5jb2RlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsX2d1bGRfZGF0YTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVjb2RlX2FsbChhbGxfZ3VsZF9kYXRhOiBKU09OX0d1aWxkW10pOiBDX0d1aWxkW10ge1xyXG4gICAgICAgIGNvbnN0IGFsbF9ndWxkOiBDX0d1aWxkW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBndWxkX2RhdGEgb2YgYWxsX2d1bGRfZGF0YSkge1xyXG4gICAgICAgICAgICBhbGxfZ3VsZC5wdXNoKChuZXcgQ19HdWlsZCgpKS5kZWNvZGUoZ3VsZF9kYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxfZ3VsZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGFsZXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiR3VpbGQgSW5mbzpcIiBcclxuICAgICAgICAgICAgKyBcIlxcbmlkOiAgICAgICBcIiArICh0aGlzLmlkICAgICAgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnVuaXFfaWQ6ICBcIiArICh0aGlzLnVuaXFfaWQgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNhdmVfaWQ6ICBcIiArICh0aGlzLnNhdmVfaWQgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbm5hbWU6ICAgICBcIiArICh0aGlzLm5hbWUgICAgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmdvbGQ6ICAgICBcIiArIChPYmplY3Qua2V5cyh0aGlzLmdvbGQ/PzApLmxlbmd0aClcclxuICAgICAgICAgICAgKyBcIlxcbmhlcm9lczogICBcIiArICh0aGlzLmhlcm9lcz8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfR29vZHMsIEpTT05fR29vZHMgfSAgICAgICAgICAgICBmcm9tIFwiLi9DX0dvb2RzXCI7XHJcbmltcG9ydCB7IENfSGVyb0FiaWxpdHksIEpTT05fSGVyb19BYmlsaXR5fSBmcm9tIFwiLi9DX0hlcm9BYmlsaXR5XCI7XHJcbmltcG9ydCB7IElfSlNPTl9VbmlxLCAgIEpTT05fQW55IH0gICAgICAgICBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcbmltcG9ydCB7IF9nZXRfdXVpZCwgX2lyYW5kLCBfcmFuZG9tX3N0ciB9ICBmcm9tIFwiLi4vZF91dGwvRl9SYW5kXCI7XHJcbmltcG9ydCB7IENfR29vZHNJdGVtLCBKU09OX0dvb2RzSXRlbSwgVF9Hb29kc0tpbmQgfSBmcm9tIFwiLi9DX0dvb2RzSXRlbVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX0hlcm8gZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBpZD86ICAgICAgICBudW1iZXIsIFxyXG4gICAgdW5pcV9pZD86ICAgc3RyaW5nLCBcclxuICAgIHNhdmVfaWQ/OiAgIG51bWJlciwgXHJcbiAgICBuYW1lPzogICAgICBzdHJpbmcsIFxyXG4gICAgc2V4PzogICAgICAgbnVtYmVyOyBcclxuICAgIGFnZT86ICAgICAgIG51bWJlcjsgXHJcbiAgICBnb2xkPzogICAgICBKU09OX0dvb2RzSXRlbTsgXHJcbiAgICBzdGF0ZT86ICAgICBudW1iZXI7IFxyXG4gICAgbHY/OiAgICAgICAgbnVtYmVyOyBcclxuICAgIHZhbD86ICAgICAgIEpTT05fSGVyb19WYWx1ZTtcclxuICAgIGFiaV9wPzogICAgICAge2JzYz86IEpTT05fSGVyb19BYmlsaXR5LCB0dGw/OiBKU09OX0hlcm9fQWJpbGl0eSwgbm93PzogSlNPTl9IZXJvX0FiaWxpdHl9O1xyXG4gICAgYWJpX20/OiAgICAgICB7YnNjPzogSlNPTl9IZXJvX0FiaWxpdHksIHR0bD86IEpTT05fSGVyb19BYmlsaXR5LCBub3c/OiBKU09OX0hlcm9fQWJpbGl0eX07XHJcbiAgICBpc19hbGl2ZT86ICBzdHJpbmd8Ym9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX0hlcm9fVmFsdWUgZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBza3A/OiB7dHRsOiBudW1iZXIsICBub3c6IG51bWJlcn0sIFxyXG4gICAgZXhwPzoge3R0bDogbnVtYmVyLCAgbm93OiBudW1iZXJ9LFxyXG4gICAgbnhlPzogbnVtYmVyLCAgICAgICAgICAgICAgICAgICAvLyDmrKHlm57jga7jg5Ljg7zjg63jg7zjg6zjg5njg6vjgqLjg4Pjg5fjgavlv4XopoHjgarntYzpqJPlgKRcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X2hyZXNfaW5mbyhhOiAoSlNPTl9IZXJvfHVuZGVmaW5lZClbXXx1bmRlZmluZWQpOiB2b2lkIHsgXHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydCgnTnVtYmVyIG9mIEhlcm8gPSAnICsgYS5sZW5ndGgudG9TdHJpbmcoKSk7XHJcbiAgICBmb3IgKHZhciBpIGluIGEpIHtcclxuICAgICAgICBpZiAoYVtpXSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuICAgICAgICBhbGVydF9oZXJvX2luZm8oYVtpXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9oZXJvX2luZm8oYTogSlNPTl9IZXJvfHVuZGVmaW5lZCk6IHZvaWQgeyBcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGFsZXJ0KFwiSGVybyBJbmZvOlxcblwiIFxyXG4gICAgICAgICsgXCJcXG5pZDogICAgICAgXCIgICAgICsgKGE/LmlkICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnVuaXFfaWQgICBcIiAgICAgKyAoYT8udW5pcV9pZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubmFtZTogICAgIFwiICAgICArIChhPy5uYW1lICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zYXZlX2lkOiAgXCIgICAgICsgKGE/LnNhdmVfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmlzX2FsaXZlOiBcIiAgICAgKyAoYT8uaXNfYWxpdmUgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX0hlcm8gaW1wbGVtZW50cyBJX0pTT05fVW5pcSB7XHJcbiAgICBwcm90ZWN0ZWQgbXlfaWQ6ICAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBteV9uYW1lOiAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHVuaXFfaWQ6ICBzdHJpbmc7IFxyXG4gICAgcHJvdGVjdGVkIHNhdmVfaWQ6ICBudW1iZXI7IFxyXG4gICAgcHJvdGVjdGVkIHNleDogICAgICBudW1iZXI7IFxyXG4gICAgcHJvdGVjdGVkIGFnZTogICAgICBudW1iZXI7IFxyXG4gICAgcHJvdGVjdGVkIHN0YXRlOiAgICBudW1iZXI7IFxyXG4gICAgcHJvdGVjdGVkIGx2OiAgICAgICBudW1iZXI7IFxyXG4gICAgLy8gYnNjKEJhc2ljKeOBr+W9k+S6uuOBruWfuuacrOWApOOAgnR0bChUb3RhbCnjga/oo4XlgpnnrYnjgpLliqDmuJvnrpfjgZfjgZ/jgoLjga7jgIJub3fjga/jg5Djg5XnrYnjga7jgr/jg7zjg7PliLbjga7jgoLliqDmuJvnrpfjgZfjgZ/jgoLjga5cclxuICAgIHByb3RlY3RlZCBnb2xkOiAgICAgQ19Hb29kc0l0ZW07IFxyXG4gICAgcHJvdGVjdGVkIHZhbDogICAgICBKU09OX0hlcm9fVmFsdWU7XHJcbiAgICBwcm90ZWN0ZWQgYWJpX3A6ICAgICAge2JzYzogQ19IZXJvQWJpbGl0eSwgdHRsOiBDX0hlcm9BYmlsaXR5LCBub3c6IENfSGVyb0FiaWxpdHl9O1xyXG4gICAgcHJvdGVjdGVkIGFiaV9tOiAgICAgIHtic2M6IENfSGVyb0FiaWxpdHksIHR0bDogQ19IZXJvQWJpbGl0eSwgbm93OiBDX0hlcm9BYmlsaXR5fTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgaXNfYWxpdmU6IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGE/OiBKU09OX0hlcm8pIHtcclxuICAgICAgICB0aGlzLm15X2lkICAgICAgPSAwO1xyXG4gICAgICAgIHRoaXMubXlfbmFtZSAgICA9ICdObyBOYW1lIEhlcm8nO1xyXG4gICAgICAgIHRoaXMudW5pcV9pZCAgICA9ICdtYWlfaGVybyMnICsgX2dldF91dWlkKCk7XHJcbiAgICAgICAgdGhpcy5zYXZlX2lkICAgID0gMDtcclxuICAgICAgICB0aGlzLnNleCAgICAgICAgPSAwOyBcclxuICAgICAgICB0aGlzLmFnZSAgICAgICAgPSAwOyBcclxuICAgICAgICB0aGlzLmdvbGQgICAgICA9IG5ldyBDX0dvb2RzSXRlbSh7Z2tpbmQ6IFRfR29vZHNLaW5kLkdvbGQsIHZhbHVlOiAwfSk7IFxyXG4gICAgICAgIHRoaXMuc3RhdGUgICAgICA9IDA7IFxyXG4gICAgICAgIHRoaXMubHYgICAgICAgICA9IDA7XHJcbiAgICAgICAgdGhpcy52YWwgICAgICAgID0ge307XHJcbiAgICAgICAgdGhpcy5hYmlfcCAgICAgID0ge2JzYzogbmV3IENfSGVyb0FiaWxpdHkoKSwgdHRsOiBuZXcgQ19IZXJvQWJpbGl0eSgpLCBub3c6IG5ldyBDX0hlcm9BYmlsaXR5KCl9O1xyXG4gICAgICAgIHRoaXMuYWJpX20gICAgICA9IHtic2M6IG5ldyBDX0hlcm9BYmlsaXR5KCksIHR0bDogbmV3IENfSGVyb0FiaWxpdHkoKSwgbm93OiBuZXcgQ19IZXJvQWJpbGl0eSgpfTtcclxuICAgICAgICB0aGlzLmlzX2FsaXZlICAgPSB0cnVlO1xyXG4gICAgICAgIGlmIChhICE9PSB1bmRlZmluZWQpIHRoaXMuZGVjb2RlKGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRfcHJwKGFyZyA6IEpTT05fSGVybykge1xyXG4gICAgICAgIHRoaXMuZGVjb2RlKGFyZyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3VuaXFfaWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudW5pcV9pZH1cclxuXHJcbiAgICBwdWJsaWMgaWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0hlcm9fJyArIHRoaXMubXlfaWQudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDUsICcwJyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdWlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnVuaXFfaWQ7fVxyXG4gICAgcHVibGljIG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5teV9uYW1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9uYW1lKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubXlfbmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9IZXJvIHtcclxuICAgICAgICBjb25zdCByZXQ6IEpTT05fSGVybyA9IHtcclxuICAgICAgICAgICAgaWQ6ICAgICAgICB0aGlzLm15X2lkLFxyXG4gICAgICAgICAgICB1bmlxX2lkOiAgIHRoaXMudW5pcV9pZCxcclxuICAgICAgICAgICAgbmFtZTogICAgICB0aGlzLm15X25hbWUsXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6ICAgdGhpcy5zYXZlX2lkLFxyXG4gICAgICAgICAgICBzZXg6ICAgICAgIHRoaXMuc2V4LCBcclxuICAgICAgICAgICAgYWdlOiAgICAgICB0aGlzLmFnZSwgXHJcbiAgICAgICAgICAgIHN0YXRlOiAgICAgdGhpcy5zdGF0ZSwgXHJcbiAgICAgICAgICAgIGx2OiAgICAgICAgdGhpcy5sdiwgXHJcbiAgICAgICAgICAgIGdvb2RzOiAgICAgdGhpcy5nb2xkLmVuY29kZSgpLCBcclxuICAgICAgICAgICAgdmFsOiAgICAgICB0aGlzLnZhbCxcclxuICAgICAgICAgICAgYWJpX3BfYnNjOiB0aGlzLmFiaV9wLmJzYy5lbmNvZGUoKSxcclxuICAgICAgICAgICAgYWJpX21fYnNjOiB0aGlzLmFiaV9tLmJzYy5lbmNvZGUoKSxcclxuICAgICAgICAgICAgaXNfYWxpdmU6ICh0aGlzLmlzX2FsaXZlKSA/ICdZJyA6ICdOJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IEpTT05fSGVyb3x1bmRlZmluZWQpOiBDX0hlcm8ge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChhLmlkICAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfaWQgICAgPSBhLmlkO1xyXG4gICAgICAgIGlmIChhLm5hbWUgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfbmFtZSAgPSBhLm5hbWU7XHJcbiAgICAgICAgaWYgKGEudW5pcV9pZCAgIT09IHVuZGVmaW5lZCkgdGhpcy51bmlxX2lkICA9IGEudW5pcV9pZDtcclxuICAgICAgICBpZiAoYS5zYXZlX2lkICAhPT0gdW5kZWZpbmVkKSB0aGlzLnNhdmVfaWQgID0gYS5zYXZlX2lkO1xyXG4gICAgICAgIGlmIChhLnNleCAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMuc2V4ICAgICAgPSBhLnNleDtcclxuICAgICAgICBpZiAoYS5hZ2UgICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmFnZSAgICAgID0gYS5hZ2U7XHJcbiAgICAgICAgaWYgKGEuc3RhdGUgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5zdGF0ZSAgICA9IGEuc3RhdGU7XHJcbiAgICAgICAgaWYgKGEubHYgICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5sdiAgICAgICA9IGEubHY7XHJcbiAgICAgICAgaWYgKGEuaXNfYWxpdmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGEuaXNfYWxpdmUgPT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzX2FsaXZlID0gYS5pc19hbGl2ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNfYWxpdmUgPSAoYS5pc19hbGl2ZSAhPSAnTicpID8gdHJ1ZTogZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEuZ29vZHMgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmdvbGQuZGVjb2RlKGEuZ29vZHMpO1xyXG4gICAgICAgIGlmIChhLnZhbCAgICAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9fZGVjb2RlX3ZhbCh0aGlzLnZhbCwgYS52YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYS5hYmlfcF9ic2MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFiaV9wLmJzYy5kZWNvZGUoYS5hYmlfcF9ic2MpO1xyXG4gICAgICAgICAgICAvLyDmmqvlrppcclxuICAgICAgICAgICAgdGhpcy5hYmlfcC50dGwgPSB0aGlzLmFiaV9wLm5vdyA9IHRoaXMuYWJpX3AuYnNjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYS5hYmlfbV9ic2MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFiaV9tLmJzYy5kZWNvZGUoYS5hYmlfbV9ic2MpO1xyXG4gICAgICAgICAgICAvLyDmmqvlrppcclxuICAgICAgICAgICAgdGhpcy5hYmlfbS50dGwgPSB0aGlzLmFiaV9tLm5vdyA9IHRoaXMuYWJpX20uYnNjO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX19kZWNvZGVfdmFsKGQ6IEpTT05fSGVyb19WYWx1ZSwgczogSlNPTl9IZXJvX1ZhbHVlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHMuc2twICE9PSB1bmRlZmluZWQpIGQuc2twID0gdGhpcy5fX2RlY29kZV9za2V4KGQuc2twLCBzLnNrcCk7XHJcbiAgICAgICAgaWYgKHMuZXhwICE9PSB1bmRlZmluZWQpIGQuZXhwID0gdGhpcy5fX2RlY29kZV9za2V4KGQuZXhwLCBzLmV4cCk7XHJcbiAgICAgICAgaWYgKHMubnhlICE9PSB1bmRlZmluZWQpIGQubnhlID0gcy5ueGU7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX19kZWNvZGVfc2tleChhOiB7dHRsPzogbnVtYmVyLCBub3c/OiBudW1iZXJ9IHwgdW5kZWZpbmVkLCBzOiB7dHRsPzogbnVtYmVyLCBub3c/OiBudW1iZXJ9KToge3R0bDogbnVtYmVyLCBub3c6IG51bWJlcn0ge1xyXG4gICAgICAgIHZhciBkOiB7dHRsOiBudW1iZXIsIG5vdzogbnVtYmVyfTtcclxuICAgICAgICBpZiAgICAgKGEgPT09IHVuZGVmaW5lZCkgZCA9IHt0dGw6IDAsIG5vdzogMH07XHJcbiAgICAgICAgZWxzZSAgICBkID0ge3R0bDogYT8udHRsID8/IDAsIG5vdzogYT8ubm93ID8/IDB9O1xyXG5cclxuICAgICAgICBkLnR0bCA9IHMudHRsID8/IGQudHRsO1xyXG4gICAgICAgIGQubm93ID0gcy5ub3cgPz8gcy50dGwgPz8gZC5ub3c7XHJcbiAgICAgICAgcmV0dXJuIGQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVfaGVybygpOiBDX0hlcm8ge1xyXG4gICAgICAgIGNvbnN0IG5ld19oZXJvID0gbmV3IENfSGVybygpO1xyXG4gICAgICAgIG5ld19oZXJvLnNldF9wcnAoe2lkOiAgICBNYXRoLmZsb29yKC0xMDAwLjAgKiBNYXRoLnJhbmRvbSgpKX0pO1xyXG4gICAgICAgIG5ld19oZXJvLnNldF9wcnAoe25hbWU6ICBuZXdfaGVyby5pZCgpfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld19oZXJvO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByYW5kb21fbWFrZSgpOiBDX0hlcm8ge1xyXG4gICAgICAgIHRoaXMubXlfaWQgICAgPSAwOyAvLyAtLUhlcm86OiRtYXhfaWQ7XHJcbiAgICAgICAgdGhpcy5teV9uYW1lICA9IFwi5YaS6Zm66ICFIFwiICsgX3JhbmRvbV9zdHIoNSk7XHJcbiAgICAgICAgdGhpcy5zZXggICAgICA9IF9pcmFuZCggMCwgICAgIDEpOyBcclxuICAgICAgICB0aGlzLmFnZSAgICAgID0gX2lyYW5kKCAxNSwgICAyNSk7IFxyXG4gICAgICAgIHRoaXMuc3RhdGUgICAgPSAwOyBcclxuICAgICAgICB0aGlzLmx2ICAgICAgID0gMDsgXHJcbiAgICAgICAgdGhpcy52YWwgICAgICA9IHtcclxuICAgICAgICAgICAgc2twOiB7dHRsOiAwLCBub3c6IDB9LCBcclxuICAgICAgICAgICAgZXhwOiB7dHRsOiAwLCBub3c6IDB9LFxyXG4gICAgICAgICAgICAnbnhlJzogMTAwMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZ29sZC5yYW5kb21fbWFrZShUX0dvb2RzS2luZC5Hb2xkKTsgXHJcblxyXG4gICAgICAgIGNvbnN0IGFiaV9wX2JzYyA9IHRoaXMuYWJpX3AuYnNjO1xyXG4gICAgICAgIGFiaV9wX2JzYy5yYW5kb21fbWFrZSgpO1xyXG4gICAgICAgIGFiaV9wX2JzYy5hZGRfeHBfYm9udXMoKHRoaXMuYWdlIC0gMTUpICogMTApO1xyXG4gICAgICAgIGFiaV9wX2JzYy5hZGRfZWxfYm9udXMoKHRoaXMuYWdlIC0gMTUpICogIDUpO1xyXG4gICAgICAgIGFiaV9wX2JzYy5hZGRfcHJfYm9udXMoKHRoaXMuYWdlIC0gMTUpICogIDIpO1xyXG4gICAgICAgIHRoaXMuYWJpX3AuYnNjID0gYWJpX3BfYnNjO1xyXG5cclxuICAgICAgICBjb25zdCBhYmlfbV9ic2MgPSB0aGlzLmFiaV9tLmJzYztcclxuICAgICAgICBhYmlfbV9ic2MucmFuZG9tX21ha2UoKTtcclxuICAgICAgICBhYmlfbV9ic2MuYWRkX3hwX2JvbnVzKCh0aGlzLmFnZSAtIDE1KSAqIDEwKTtcclxuICAgICAgICBhYmlfbV9ic2MuYWRkX2VsX2JvbnVzKCh0aGlzLmFnZSAtIDE1KSAqICA1KTtcclxuICAgICAgICBhYmlfbV9ic2MuYWRkX3ByX2JvbnVzKCh0aGlzLmFnZSAtIDE1KSAqICAyKTtcclxuICAgICAgICB0aGlzLmFiaV9tLmJzYyA9IGFiaV9tX2JzYztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBlbmNvZGVfaGVyb2VzKGhlcm9lczogQ19IZXJvW10pOiBKU09OX0hlcm9bXSB7XHJcbiAgICAgICAgY29uc3QgaGVyb2VzX2RhdGEgPSBbXSBhcyBKU09OX0hlcm9bXTtcclxuICAgICAgICBmb3IgKHZhciBoZXJvIG9mIGhlcm9lcykge1xyXG4gICAgICAgICAgICBoZXJvZXNfZGF0YS5wdXNoKGhlcm8uZW5jb2RlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGVyb2VzX2RhdGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZV9oZXJvZXMoaGVyb2VzX2RhdGE6IChKU09OX0hlcm98dW5kZWZpbmVkKVtdfHVuZGVmaW5lZCk6IENfSGVyb1tdIHtcclxuICAgICAgICBjb25zdCBoZXJvZXMgPSBbXSBhcyBDX0hlcm9bXTtcclxuICAgICAgICBpZiAoaGVyb2VzX2RhdGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBoZXJvX2RhdGEgb2YgaGVyb2VzX2RhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoZXJvX2RhdGEgIT09IHVuZGVmaW5lZCkgaGVyb2VzLnB1c2gobmV3IENfSGVybygpLmRlY29kZShoZXJvX2RhdGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGVyb2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHsgXHJcbiAgICAgICAgYWxlcnQoXCJIZXJvIEluZm86XFxuXCIgXHJcbiAgICAgICAgICAgICsgXCJcXG5pZDogICAgICAgXCIgICAgICsgKHRoaXMuaWQgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnVuaXFfaWQgICBcIiAgICAgKyAodGhpcy51bmlxX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubmFtZTogICAgIFwiICAgICArICh0aGlzLm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zYXZlX2lkOiAgXCIgICAgICsgKHRoaXMuc2F2ZV9pZCAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmlzX2FsaXZlOiBcIiAgICAgKyAodGhpcy5pc19hbGl2ZSAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBhbGVydF9ocmVzKGE6IChDX0hlcm98dW5kZWZpbmVkKVtdfHVuZGVmaW5lZCk6IHZvaWQgeyBcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgYWxlcnQoJ051bWJlciBvZiBIZXJvID0gJyArIGEubGVuZ3RoLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gYSkgYVtpXT8uYWxlcnQoKTtcclxuICAgIH1cclxufSIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgSV9KU09OLCBKU09OX0FueSB9IGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuaW1wb3J0IHsgX3JvdW5kIH0gICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX01hdGhcIjtcclxuaW1wb3J0IHsgX2lucmFuZCB9IGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuXHJcbi8vIOS4gOiIrOOBq+S9v+OBiOOCi+ODpuODvOODhuOCo+ODquODhuOCo+OBquWRquaWh1xyXG4vLyDjgqrjg5bjgrjjgqfjgq/jg4jjgpLliJfmjJnlnovjgajjgZfjgablnovljJbjgZnjgovjga7jgavliKnnlKhcclxudHlwZSBUX0hlcm9BYmlsaXR5ID0ge1trZXk6IHN0cmluZ106IG51bWJlcn07XHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9IZXJvX0FiaWxpdHkgZXh0ZW5kcyBKU09OX0FueSB7W2tleTogc3RyaW5nXTogbnVtYmVyfVxyXG5cclxuZXhwb3J0IGNsYXNzIENfSGVyb0FiaWxpdHkgaW1wbGVtZW50cyBJX0pTT04ge1xyXG4gICAgcHJvdGVjdGVkIHY6IFRfSGVyb0FiaWxpdHkgPSB7XHJcbiAgICAgICAgeHA6ICAwLCAgLy8gcDpIUOOAgW06TVBcclxuXHJcbiAgICAgICAgLy8g5Lul5LiL44CB5oim6ZeY6IO95Yqb44Gu5Z+65pys5YCkKHA654mp55CG44CBbTrprZTms5Up44CC44OS44O844Ot44O844Os44OZ44Or44KE44K544OG44O844K/44K544Ki44OD44OX44Gn5Yqg566XIFxyXG4gICAgICAgIGF0azogMCwgIC8vIOaUu+aSg+WApFxyXG4gICAgICAgIGRlZjogMCwgIC8vIOmYsuW+oeWApFxyXG4gICAgICAgIHF1YzogMCwgIC8vIOeerOeZuuWKm1xyXG4gICAgICAgIGNuYzogMCwgIC8vIOapn+mBi+WApCjjg4Hjg6Pjg7PjgrkpXHJcbiAgICBcclxuICAgICAgICAvLyDku6XkuIvjgIHjgYTjgo/jgobjgovjgrnjg4bjg7zjgr/jgrnjgILkuIroqJjjga7oqIjnrpfjgavlvbHpn7/jgILjg5Ljg7zjg63jg7zjg6zjg5njg6vjgoTjgrnjg4bjg7zjgr/jgrnjgqLjg4Pjg5fjgafliqDnrpdcclxuICAgICAgICBzdHI6IDAsICAvLyDmoLnmgKfjgILmlLvmkoMv6Ziy5b6h5Yqb44Gr44KC5b2x6Z+/44CCSFAvTVDlm57lvqnjgoTjgqLjgqTjg4bjg6Djga7mnIDlpKfmiYDmjIHph43ph4/jgavjg5zjg7zjg4rjgrlcclxuICAgICAgICBwd3I6IDAsICAvLyDln7rmnKznmoTlvLfjgZXjgILmlLvmkoPlipvjgavlvbHpn79cclxuICAgICAgICB2aXQ6IDAsICAvLyDogJDkuYXlipvjgIJIUC9NUOOBruacgOWkp+WApOOChOmYsuW+oeWKm+OBq+W9semfv+OCkuS4juOBiOOCi1xyXG4gICAgICAgIGRleDogMCwgIC8vIOWZqOeUqOOBleOAguWRveS4reeOh+OBq+W9semfv+OCkuS4juOBiOOCi+OAgumjm+OBs+mBk+WFt+OChOmVt+i3nemboumtlOazleOBp+OBr+eJueOBq+W9semfv+OAgue9oOino+mZpOOBq+OCguW9semfv1xyXG4gICAgICAgIGFnaTogMCwgIC8vIOe0oOaXqeOBleOAguihjOWLlemAn+W6puOChOWbnumBv+eOh+OBq+W9semfv+OCkuS4juOBiOOCi+OAguWRveS4reeOh+OBq+OCguW9semfv1xyXG4gICAgICAgIHRlYzogMCwgIC8vIOaKgOihk+WKm+OAgue1jOmok+OBp+WQkeS4iuOBl+OBpuiDveWKm+WApChxdWMvY25jKeOBq+ODnOODvOODiuOCueOCkuS4juOBiOOCi1xyXG4gICAgICAgIGx1azogMCwgIC8vIOW5uOmBi+WApOOAgmNuY+OBq+Wkp+OBjeOBj+W9semfv+OBmeOCi1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYT86IEpTT05fSGVyb19BYmlsaXR5KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaWR4IGluIHRoaXMudikge3RoaXMudltpZHhdID0gMDt9XHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoYSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BycChhOiBKU09OX0hlcm9fQWJpbGl0eSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGVjb2RlKGEpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldChrZXk6IHN0cmluZyk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKCEoa2V5IGluIHRoaXMudikpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudltrZXldO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldChrZXk6IHN0cmluZywgczogSlNPTl9IZXJvX0FiaWxpdHkpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICghKGtleSBpbiB0aGlzLnYpKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMudltrZXldID0gc1trZXldO1xyXG4gICAgICAgIHJldHVybiBzW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHhwX3R0bGFkZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBfcm91bmQoTWF0aC5mbG9vcih0aGlzLnYuc3RyICsgdGhpcy52LnZpdCAqIDEwLjApLCAwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhdGtfdHRsYWRkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIF9yb3VuZChNYXRoLmZsb29yKHRoaXMudi5zdHIgKyB0aGlzLnYucHdyICsgdGhpcy52LnRlYykgLyAxMC4wLCAwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWZfdHRsYWRkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIF9yb3VuZChNYXRoLmZsb29yKHRoaXMudi5zdHIgKyB0aGlzLnYudml0ICsgdGhpcy52LnRlYykgLyAxMC4wLCAwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBxdWNfdHRsYWRkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIF9yb3VuZChNYXRoLmZsb29yKHRoaXMudi5hZ2kgKyB0aGlzLnYubHVrICsgdGhpcy52LnRlYykgLyAxMC4wLCAwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjbmNfdHRsYWRkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIF9yb3VuZChNYXRoLmZsb29yKDIuMCAqIHRoaXMudi5sdWsgKyB0aGlzLnYudGVjKSAvIDEwLjAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBib251cyhrZXkgOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICghKGtleSBpbiB0aGlzLnYpKSByZXR1cm4gMDtcclxuICAgICAgICBpZiAoa2V5ID09PSAneHAnKSByZXR1cm4gX3JvdW5kKE1hdGguZmxvb3IodGhpcy52LnhwIC8gMTAwKSwgMCk7XHJcbiAgICAgICAgcmV0dXJuIF9yb3VuZChNYXRoLmZsb29yKHRoaXMudltrZXldIC8gMTAuMCksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQoYTogSlNPTl9IZXJvX0FiaWxpdHkpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYSkge1xyXG4gICAgICAgICAgICB0aGlzLnZba2V5XSArPSBhW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICBwdWJsaWMgYWRkX3hwX2JvbnVzKGJvbnVzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnYueHAgICs9ICBib251cztcclxuICAgIH1cclxuICAgIHB1YmxpYyBhZGRfZWxfYm9udXMoYm9udXM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudi5hdGsgKz0gIGJvbnVzO1xyXG4gICAgICAgIHRoaXMudi5kZWYgKz0gIGJvbnVzO1xyXG4gICAgICAgIHRoaXMudi5xdWMgKz0gIGJvbnVzO1xyXG4gICAgICAgIHRoaXMudi5jbmMgKz0gIGJvbnVzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFkZF9wcl9ib251cyhib251czogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52LnN0ciArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LnB3ciArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LnZpdCArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LmRleCArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LmFnaSArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LnRlYyArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52Lmx1ayArPSAgYm9udXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJhbmRvbV9tYWtlKCk6IENfSGVyb0FiaWxpdHkge1xyXG4gICAgICAgIHRoaXMudi54cCAgPSAgX2lucmFuZCgwLCAxMDAwLCAzLjApO1xyXG5cclxuICAgICAgICB0aGlzLnYuYXRrID0gIF9pbnJhbmQoMCwgIDEwMCwgMi41KTtcclxuICAgICAgICB0aGlzLnYuZGVmID0gIF9pbnJhbmQoMCwgIDEwMCwgMi41KTtcclxuICAgICAgICB0aGlzLnYucXVjID0gIF9pbnJhbmQoMCwgIDEwMCwgMi41KTtcclxuICAgICAgICB0aGlzLnYuY25jID0gIF9pbnJhbmQoMCwgIDEwMCwgMi41KTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMudi5zdHIgPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG4gICAgICAgIHRoaXMudi5wd3IgPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG4gICAgICAgIHRoaXMudi52aXQgPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG4gICAgICAgIHRoaXMudi5kZXggPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG4gICAgICAgIHRoaXMudi5hZ2kgPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG4gICAgICAgIHRoaXMudi50ZWMgPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG4gICAgICAgIHRoaXMudi5sdWsgPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fSGVyb19BYmlsaXR5IHtcclxuICAgICAgICBjb25zdCBhOiBKU09OX0hlcm9fQWJpbGl0eSA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnYpIGFba2V5XSA9IHRoaXMudltrZXldO1xyXG4gICAgICAgIHJldHVybiBhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX0hlcm9fQWJpbGl0eSk6IENfSGVyb0FiaWxpdHkge1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgaW4gdGhpcy52ICYmIGFba2V5XSAhPT0gdW5kZWZpbmVkKSB0aGlzLnZba2V5XSA9IGFba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjbG9uZShzOiBDX0hlcm9BYmlsaXR5KTogQ19IZXJvQWJpbGl0eSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX0hlcm9BYmlsaXR5KHMuZW5jb2RlKCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX1BvaW50IH0gICAgICAgICAgICAgICAgICAgZnJvbSAnLi9DX1BvaW50JztcclxuaW1wb3J0IHsgQ19Qb2ludERpciwgSlNPTl9Qb2ludERpciB9IGZyb20gJy4vQ19Qb2ludERpcic7XHJcbmltcG9ydCB7IFRfRGlyZWN0aW9uIH0gICAgICAgICAgICAgICBmcm9tICcuL0NfUG9pbnREaXInO1xyXG5pbXBvcnQgeyBJX0pTT04sIEpTT05fQW55IH0gICAgICAgICAgZnJvbSAnLi9DX1NhdmVJbmZvJztcclxuaW1wb3J0IHsgVF9NYWtlRW51bVR5cGUgfSAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9UX01ha2VFbnVtVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRfTGNrZDp7W2xja2Q6IHN0cmluZ106IG51bWJlcn0gID0ge1xyXG4gICAgVW5rbjogMCxcclxuICAgIE1hemU6IDEsXHJcbiAgICBHdWxkOiAyLFxyXG59IGFzIGNvbnN0O1xyXG5leHBvcnQgdHlwZSBUX0xja2QgICA9IFRfTWFrZUVudW1UeXBlPHR5cGVvZiBUX0xja2Q+O1xyXG5cclxuZnVuY3Rpb24gX2xja2Rfa2V5KGxja2Q6IFRfTGNrZCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoVF9MY2tkKS5maW5kKGtleSA9PiBUX0xja2Rba2V5XSA9PT0gbGNrZCkgPz8gXCI/Pz8/XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9Mb2NhdGlvbiBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGtpbmQ/OiAgICBzdHJpbmcsXHJcbiAgICBuYW1lPzogICAgc3RyaW5nLFxyXG4gICAgbG9jX3VpZD86IHN0cmluZyxcclxuICAgIGxvY19wb3M/OiBKU09OX1BvaW50RGlyLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElfTG9jYXRlIHtcclxuICAgIHVpZDogICAgICAoKT0+c3RyaW5nO1xyXG4gICAgZ2V0X2xja2Q6ICgpPT5UX0xja2Q7XHJcbiAgICBnZXRfbmFtZTogKCk9PnN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfTG9jYXRpb24gaW1wbGVtZW50cyBJX0pTT04ge1xyXG4gICAgcHJvdGVjdGVkIGxvY19raW5kOiBUX0xja2QgPSBUX0xja2QuVW5rbjtcclxuICAgIHByb3RlY3RlZCBsb2NfbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBwcm90ZWN0ZWQgbG9jX3VpZDogIHN0cmluZyA9ICcnO1xyXG4gICAgcHJvdGVjdGVkIGxvY19wb3M6ICBDX1BvaW50RGlyID0gbmV3IENfUG9pbnREaXIoKTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoanNvbj86IEpTT05fTG9jYXRpb24pIHtcclxuICAgICAgICBpZiAoanNvbiAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShqc29uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X2xja2Rfc3RyKCk6IHN0cmluZyAge3JldHVybiBfbGNrZF9rZXkodGhpcy5sb2Nfa2luZCk7fVxyXG4gICAgcHVibGljIGdldF9sY2tkKCk6IFRfTGNrZCAgICAgIHtyZXR1cm4gdGhpcy5sb2Nfa2luZDt9XHJcbiAgICBwdWJsaWMgZ2V0X25hbWUoKTogc3RyaW5nICAgICAge3JldHVybiB0aGlzLmxvY19uYW1lO31cclxuICAgIHB1YmxpYyBnZXRfdWlkKCk6ICBzdHJpbmcgICAgICB7cmV0dXJuIHRoaXMubG9jX3VpZDt9XHJcblxyXG4gICAgcHVibGljIHNldF9sY2tkKGxja2Q6IFRfTGNrZCk6IENfTG9jYXRpb258dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAoIShfbGNrZF9rZXkobGNrZCkgaW4gVF9MY2tkKSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmxvY19raW5kID0gbGNrZDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfbmFtZShuYW1lOiBzdHJpbmcpOiAgIHZvaWQge3RoaXMubG9jX25hbWUgPSBuYW1lO31cclxuICAgIHB1YmxpYyBzZXRfdWlkICh1aWQ6IHN0cmluZyk6ICAgIHZvaWQge3RoaXMubG9jX3VpZCAgPSB1aWQ7fVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc2V0X2xja2Rfc3RyKGxja2Q6IHN0cmluZyk6IENfTG9jYXRpb258dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAoIShsY2tkIGluIFRfTGNrZCkpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5sb2Nfa2luZCA9IFRfTGNrZFtsY2tkXTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldF9wKCk6IENfUG9pbnQgICAgIHtcclxuLy8gICAgICAgIGlmICh0aGlzLmxvY19raW5kICE9IFRfTGNrZC5NYXplKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY19wb3MuZ2V0X3AoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfZCgpOiBUX0RpcmVjdGlvbiB7XHJcbi8vICAgICAgICBpZiAodGhpcy5sb2Nfa2luZCAhPSBUX0xja2QuTWF6ZSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NfcG9zLmdldF9kKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BkKCk6IENfUG9pbnREaXIge1xyXG4vLyAgICAgICAgaWYgKHRoaXMubG9jX2tpbmQgIT0gVF9MY2tkLk1hemUpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jX3Bvcy5nZXRfcGQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0X3AgICAocDogQ19Qb2ludERpcik6IENfUG9pbnREaXJ8dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAodGhpcy5sb2Nfa2luZCAhPT0gVF9MY2tkLk1hemUpICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAodGhpcy5sb2NfcG9zLnNldF9wKHApID09PSB1bmRlZmluZWQpICByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NfcG9zO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9kICAgKGQ6IFRfRGlyZWN0aW9uKTogVF9EaXJlY3Rpb258dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAodGhpcy5sb2Nfa2luZCAhPT0gVF9MY2tkLk1hemUpICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAodGhpcy5sb2NfcG9zLnNldF9kKGQpID09PSB1bmRlZmluZWQpICByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NfcG9zLmQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BkICAocGQ6IENfUG9pbnREaXIpOiBDX1BvaW50RGlyfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jX2tpbmQgIT09IFRfTGNrZC5NYXplKSAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICh0aGlzLmxvY19wb3Muc2V0X3BkKHBkKSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NfcG9zO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTG9jYXRpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGtpbmQ6ICAgICBfbGNrZF9rZXkodGhpcy5sb2Nfa2luZCksXHJcbiAgICAgICAgICAgIG5hbWU6ICAgICB0aGlzLmxvY19uYW1lLFxyXG4gICAgICAgICAgICBsb2NfdWlkOiAgdGhpcy5sb2NfdWlkLFxyXG4gICAgICAgICAgICBsb2NfcG9zOiAgdGhpcy5sb2NfcG9zLmVuY29kZSgpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo/OiBKU09OX0xvY2F0aW9uKTogQ19Mb2NhdGlvbiB7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKGoua2luZCA9PT0gdW5kZWZpbmVkIHx8ICEoai5raW5kIGluIFRfTGNrZCkpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoai5raW5kICAgICE9PSB1bmRlZmluZWQpIHRoaXMubG9jX2tpbmQgPSBUX0xja2Rbai5raW5kXTtcclxuICAgICAgICBpZiAoai5uYW1lICAgICE9PSB1bmRlZmluZWQpIHRoaXMubG9jX25hbWUgPSBqLm5hbWU7XHJcbiAgICAgICAgaWYgKGoubG9jX3VpZCAhPT0gdW5kZWZpbmVkKSB0aGlzLmxvY191aWQgID0gai5sb2NfdWlkO1xyXG4gICAgICAgIGlmIChqLmxvY19wb3MgIT09IHVuZGVmaW5lZCkgdGhpcy5sb2NfcG9zLmRlY29kZShqLmxvY19wb3MpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IFRfTXpLaW5kIH0gICAgICAgICAgICAgIGZyb20gXCIuL1RfTXpLaW5kXCI7XHJcbmltcG9ydCB7IENfTWF6ZUNlbGwgfSAgICAgICAgICAgIGZyb20gXCIuL0NfTWF6ZUNlbGxcIjtcclxuaW1wb3J0IHsgQ19NYXplT2JqLCBJX01hemVPYmosIEpTT05fTWF6ZU9iaiB9IGZyb20gXCIuL0NfTWF6ZU9ialwiO1xyXG5pbXBvcnQgeyBDX1BvaW50IH0gICAgICAgICAgICAgICBmcm9tIFwiLi9DX1BvaW50XCI7XHJcbmltcG9ydCB7IElfTG9jYXRlLCBUX0xja2QgfSAgICAgIGZyb20gXCIuL0NfTG9jYXRpb25cIjtcclxuaW1wb3J0IHsgQ19SYW5nZSB9ICAgICAgICAgICAgICAgZnJvbSBcIi4vQ19SYW5nZVwiO1xyXG5pbXBvcnQgeyBDX1RlYW0sIEpTT05fVGVhbSB9ICAgICBmcm9tIFwiLi9DX1RlYW1cIjtcclxuaW1wb3J0IHsgSV9KU09OX1VuaXEsIEpTT05fQW55IH0gZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5pbXBvcnQgeyBfZ2V0X3V1aWQsIF9pZ3JhbmQsIF9pcmFuZCB9ICAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuaW1wb3J0IHsgX21pbiB9IGZyb20gXCIuLi9kX3V0bC9GX01hdGhcIjtcclxuaW1wb3J0IHsgQ19Qb2ludERpciB9IGZyb20gXCIuL0NfUG9pbnREaXJcIjtcclxuaW1wb3J0IHsgVF9EaXJlY3Rpb24gfSBmcm9tIFwiLi9UX0RpcmVjdGlvblwiO1xyXG5pbXBvcnQgeyBDX1BvaW50TGluazJELCBDX1BvaW50U2V0MkQgfSBmcm9tIFwiLi9DX1BvaW50U2V0MkRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9NYXplIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgaWQ/OiAgICAgIG51bWJlcixcclxuICAgIHVuaXFfaWQ/OiBzdHJpbmcsXHJcbiAgICBzYXZlX2lkPzogbnVtYmVyLFxyXG4gICAgZmxvb3I/OiAgIG51bWJlcixcclxuICAgIG5hbWU/OiAgICBzdHJpbmcsXHJcbiAgICBzaXplX3g/OiAgbnVtYmVyLFxyXG4gICAgc2l6ZV95PzogIG51bWJlcixcclxuICAgIHNpemVfej86ICBudW1iZXIsXHJcbiAgICBtYXplPzogICAgc3RyaW5nLCBcclxuICAgIG1hc2s/OiAgICBzdHJpbmcsIFxyXG4gICAgbXl0ZWFtPzogIEpTT05fVGVhbSwgXHJcbiAgICBvYmpzPzogICAgSlNPTl9NYXplT2JqW10sXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfbWF6ZV9pbmZvKGE6IEpTT05fTWF6ZXx1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICBhbGVydChcIk1hemUgSW5mbzpcIlxyXG4gICAgICAgICsgXCJcXG5tYXplIGlkIDpcIiArIChhLmlkICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5mbG9vcjogXCIgICArIChhLmZsb29yICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG51bmlxIGlkIDpcIiArIChhLnVuaXFfaWQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zYXZlIGlkIDpcIiArIChhLnNhdmVfaWQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5uYW1lOiAgIFwiICArIChhLm5hbWUgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3g6IFwiICArIChhLnNpemVfeCAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3k6IFwiICArIChhLnNpemVfeSAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3o6IFwiICArIChhLnNpemVfeiAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJtYXplOlxcblwiICAgICArIChhLm1hemUgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJtYXNrOlxcblwiICAgICArIChhLm1hc2sgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbnR5cGUgX2luaXRfYXJnID0ge1xyXG4gICAgbWF6ZV9pZD86IG51bWJlcixcclxuICAgIHNhdmVfaWQ/OiBudW1iZXIsXHJcbiAgICBmbG9vcj86ICAgbnVtYmVyLFxyXG4gICAgbmFtZT86ICAgIHN0cmluZyxcclxuICAgIHNpemVfeD86ICBudW1iZXIsXHJcbiAgICBzaXplX3k/OiAgbnVtYmVyLFxyXG4gICAgc2l6ZV96PzogIG51bWJlcixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfTWF6ZSBpbXBsZW1lbnRzIElfTG9jYXRlLCBJX0pTT05fVW5pcSB7XHJcbiAgICBwcm90ZWN0ZWQgbWF6ZV9pZDogIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCB1bmlxX2lkOiAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHNhdmVfaWQ6ICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgZmxvb3I6ICAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBuYW1lOiAgICAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIG15X2xheWVyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJvdGVjdGVkIHNpemU6ICAgICBDX1JhbmdlO1xyXG4gICAgcHJvdGVjdGVkIGNlbGxzOiAgICBDX01hemVDZWxsW11bXVtdO1xyXG4gICAgcHJvdGVjdGVkIG1hc2tzOiAgICBib29sZWFuW11bXVtdO1xyXG4gICAgcHJvdGVjdGVkIHVuY2xlYXI6ICBudW1iZXJbXTtcclxuICAgIHByb3RlY3RlZCBvYmpzOiAgICAge1t1aWQ6IHN0cmluZ106IElfTWF6ZU9ian07XHJcbiAgICBwcm90ZWN0ZWQgbnVtX29mX3Jvb206ICAgICAgbnVtYmVyID0gNTsgLyog44Op44Oz44OA44Og55Sf5oiQ44Gu6Zqb44Gu6YOo5bGL44Gu5pWw44Gu5pyA5aSn5pWwICovXHJcbiAgICBwcm90ZWN0ZWQgbWF4X3NpemVfb2Zfcm9vbTogbnVtYmVyID0gMzsgLyog44Op44Oz44OA44Og55Sf5oiQ44Gu6Zqb44Gu6YOo5bGL44Gu5aSn44GN44GVICovXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGE/OiBfaW5pdF9hcmcpIHtcclxuICAgICAgICB0aGlzLm1hemVfaWQgPSAtMTtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgPSAtMTtcclxuICAgICAgICB0aGlzLnVuaXFfaWQgPSAnbWFpX21hemUjJyArIF9nZXRfdXVpZCgpO1xyXG4gICAgICAgIHRoaXMuZmxvb3IgICA9IDA7XHJcbiAgICAgICAgdGhpcy5uYW1lICAgID0gJyc7XHJcbiAgICAgICAgdGhpcy5zaXplICAgID0gbmV3IENfUmFuZ2UoXHJcbiAgICAgICAgICAgIG5ldyBDX1BvaW50KDAsIDAsIDApLCBcclxuICAgICAgICAgICAgbmV3IENfUG9pbnQoMiwgMiwgMikpO1xyXG4gICAgICAgIHRoaXMuY2VsbHMgICA9IHRoaXMuX19pbml0X21hemUoVF9NektpbmQuU3RvbmUpO1xyXG5cclxuICAgICAgICB0aGlzLm1hc2tzICAgPSB0aGlzLl9faW5pdF9tYXNrKHRydWUpO1xyXG4gICAgICAgIHRoaXMudW5jbGVhciA9IFtdO1xyXG4gICAgICAgIHRoaXMuX19pbml0X3VuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5vYmpzICAgID0ge307XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9faW5pdF9tYXplKGtpbmQ6IFRfTXpLaW5kID0gVF9NektpbmQuU3RvbmUpOiBDX01hemVDZWxsW11bXVtdIHtcclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeiA9IHRoaXMuc2l6ZS5zaXplX3ooKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2VsbHM6IENfTWF6ZUNlbGxbXVtdW10gPSBBcnJheShzaXplX3opIGFzIENfTWF6ZUNlbGxbXVtdW107XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBzaXplX3o7IHorKykge1xyXG4gICAgICAgICAgICBjZWxsc1t6XSA9IEFycmF5KHNpemVfeSkgYXMgQ19NYXplQ2VsbFtdW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGNlbGxzW3pdW3ldICA9IEFycmF5KHNpemVfeCkgYXMgQ19NYXplQ2VsbFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxzW3pdW3ldW3hdID0gQ19NYXplQ2VsbC5uZXdPYmooe2tpbmQ6a2luZCwgcG9zOiB7eDp4LCB5OnksIHo6en19KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2VsbHM7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX19pbml0X21hc2soWU46IGJvb2xlYW4pOiBib29sZWFuW11bXVtdIHtcclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeiA9IHRoaXMuc2l6ZS5zaXplX3ooKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXNrcyAgID0gQXJyYXkoc2l6ZV96KSBhcyBib29sZWFuW11bXVtdO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgdGhpcy5tYXNrc1t6XSA9IEFycmF5KHNpemVfeSkgYXMgYm9vbGVhbltdW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFza3Nbel1beV0gID0gQXJyYXkoc2l6ZV94KSBhcyBib29sZWFuW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrc1t6XVt5XVt4XSA9IFlOO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLm1hc2tzO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9faW5pdF91bmNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgICAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV96ID0gdGhpcy5zaXplLnNpemVfeigpO1xyXG5cclxuICAgICAgICB0aGlzLnVuY2xlYXIgPSBBcnJheShzaXplX3opO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgdGhpcy51bmNsZWFyW3pdPTA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXNrc1t6XVt5XVt4XSkgdGhpcy51bmNsZWFyW3pdKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHVpZCgpOiBzdHJpbmcgICAgICB7cmV0dXJuIHRoaXMudW5pcV9pZH1cclxuICAgIHB1YmxpYyBnZXRfbGNrZCgpOiBUX0xja2Qge3JldHVybiBUX0xja2QuTWF6ZX1cclxuICAgIHB1YmxpYyBnZXRfbmFtZSgpOiBzdHJpbmcge3JldHVybiB0aGlzLm5hbWV9XHJcblxyXG4gICAgcHVibGljIHdpdGhpbihwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZS53aXRoaW4ocCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIOODoeOCpOOCuuWGheOBruOCquODluOCuOOCp+OCr+ODiOOChOODouODs+OCueOCv+ODvOetieOBrumFjee9rlxyXG4gICAgcHVibGljIGFkZF9vYmoob2JqOiBJX01hemVPYmopOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9ianNbb2JqLnVpZCgpXSA9IG9iajtcclxuICAgIH1cclxuICAgIHB1YmxpYyBybXZfb2JqKG9iajogSV9NYXplT2JqKTogdm9pZCB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMub2Jqc1tvYmoudWlkKCldO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9vYmpfeHl6KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpOiBJX01hemVPYmp8bnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0X29iaihuZXcgQ19Qb2ludCh4LCB5LCB6KSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X29iaihwOiBDX1BvaW50KTogSV9NYXplT2JqfG51bGwge1xyXG4gICAgICAgIHZhciBsYXllciA9IC0xO1xyXG4gICAgICAgIHZhciBvYmo6IElfTWF6ZU9ianxudWxsICAgPSBudWxsO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGlkIGluIHRoaXMub2Jqcykge1xyXG4gICAgICAgICAgICBjb25zdCBleGlzdCA9IHRoaXMub2Jqc1tpZF07XHJcblxyXG4gICAgICAgICAgICBpZiAoZXhpc3QudmlldygpID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoZXhpc3Qud2l0aGluKHApICYmIGV4aXN0LnZpZXcoKT8ubGV0dGVyKCkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChleGlzdC52aWV3KCk/LmxheWVyKCk/Py05OSA+IGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXIgPSBleGlzdC52aWV3KCk/LmxheWVyKCk/Py05OTtcclxuICAgICAgICAgICAgICAgICAgICBvYmogICA9IGV4aXN0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGV4aXN0X29iaihwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpZCBpbiB0aGlzLm9ianMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3QgPSB0aGlzLm9ianNbaWRdO1xyXG4gICAgICAgICAgICBpZiAoZXhpc3Qud2l0aGluKHApICYmIGV4aXN0LnZpZXcoKT8ubGV0dGVyKCkgIT09IG51bGwpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGVhbeOBjOadpeOBn+ODneOCpOODs+ODiOOBjOacqui4j+WcsOOBoOOBo+OBn+OCieOBn+OBoOOBruW6iuOBq+WkieOBiOOCi1xyXG4gICAgcHVibGljIGNoYW5nZV91bmV4cF90b19mbG9vcihwOiBDX1BvaW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0X2tpbmQocCkgPT0gVF9NektpbmQuVW5leHApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRfY2VsbChwLCBUX016S2luZC5GbG9vcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIDJE44Oe44OD44OX44Gu44Oe44K544Kv5aSW44GX6Zai6YCjXHJcbiAgICBwdWJsaWMgY2xlYXJfbWFza19hcm91bmRfdGhlX3RlYW0odGVhbTogQ19UZWFtKTogdm9pZCB7XHJcbiAgICAgICAgLy8g54++5Zyo5Zyw44Go55yf5qiq44Gv6Ieq5YuV55qE44Gr6KaL44GI44KLXHJcbiAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZCgwLCAtMSkpO1xyXG4gICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoMCwgIDApKTtcclxuICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayh0ZWFtLndhbGsoKS5nZXRfYXJvdW5kKDAsICAxKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlcHRoICAgPSAgNTsgLy8gMkTjg57jg4Pjg5fnlKjjga7lpaXooYzjgY3pmZDnlYxcclxuXHJcbiAgICAgICAgLy8g5YmN5pa544Gu6KaL6YCa44GX44KS44OB44Kn44OD44Kv44GX44Gq44GM44KJ6KaL44GI44KL44Go44GT44KN44Gv6Kej5pS+44GZ44KLXHJcbiAgICAgICAgZm9yICh2YXIgZCA9IDE7IGQgPCBkZXB0aDsgZCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyb250X3BvcyA9IHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgMClcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNfbW92YWJsZShmcm9udF9wb3MpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmraPpnaLjgavpmpzlrrPnianjgYznhKHjgZHjgozjgbDjgIHjgZ3jga7kuKHlgbTjgoLopovjgYjjgotcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgLTEpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgIDApKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgIDEpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOato+mdouOBjOmanOWus+eJqeOBp+OCguOBneOBruaJi+WJjeOBvuOBp+imi+OBiOOBpuOBn+OBquOCieOAgeOBneOBruWjgeOBqOS4oeWBtOOBr+imi+OBiOOCi1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAtMSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAgMCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAgMSkpO1xyXG4gICAgICAgICAgICAgICAgLy8g5q2j6Z2i44Gr6Zqc5a6z54mp44GM5pyJ44Gj44Gf44KJ44Gd44Gu5aWl44Gv6KaL44GI44Gq44GE44Gu44Gn5o6i57Si57WC5LqGXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2NsZWFyX21hc2soY2xyX3BvczogQ19Qb2ludCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5zaXplLndpdGhpbihjbHJfcG9zKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tYXNrc1tjbHJfcG9zLnpdW2Nscl9wb3MueV1bY2xyX3Bvcy54XSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hc2tzW2Nscl9wb3Muel1bY2xyX3Bvcy55XVtjbHJfcG9zLnhdID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudW5jbGVhcltjbHJfcG9zLnpdLS07ICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc19jbGVhcmVkKGNscl9wb3M6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51bmNsZWFyW2Nscl9wb3Muel0gPCAxO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc19tYXNrZWQocDogQ19Qb2ludCk6IGJvb2xlYW4ge3JldHVybiB0aGlzLmlzX21hc2tlZF94eXoocC54LCBwLnksIHAueil9XHJcbiAgICBwdWJsaWMgaXNfbWFza2VkX3h5eih4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFza3Nbel1beV1beF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzX21vdmFibGUocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghdGhpcy5zaXplLndpdGhpbihwKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5nZXRfa2luZChwKSkge1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLkZsb29yOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlVuZXhwOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVwOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0ckRuOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVEOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gICAgXHJcblxyXG4gICAgcHVibGljIGdldF94X21heCgpOiBudW1iZXIge3JldHVybiB0aGlzLnNpemUuc2l6ZV94KCk7fVxyXG4gICAgcHVibGljIGdldF95X21heCgpOiBudW1iZXIge3JldHVybiB0aGlzLnNpemUuc2l6ZV95KCk7fVxyXG4gICAgcHVibGljIGdldF96X21heCgpOiBudW1iZXIge3JldHVybiB0aGlzLnNpemUuc2l6ZV96KCk7fVxyXG4gICAgcHVibGljIGdldF9raW5kIChwOiBDX1BvaW50KTogVF9NektpbmQge1xyXG4gICAgICAgIGlmICh0aGlzLnNpemUud2l0aGluKHApKSByZXR1cm4gdGhpcy5jZWxsc1twLnpdW3AueV1bcC54XS5nZXRLaW5kKCk7XHJcbiAgICAgICAgcmV0dXJuIFRfTXpLaW5kLk5vRGVmO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9raW5kX3h5eiAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcik6IFRfTXpLaW5kIHtcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbih4LCB5LCB6KSkgcmV0dXJuIHRoaXMuY2VsbHNbel1beV1beF0uZ2V0S2luZCgpO1xyXG4gICAgICAgIHJldHVybiBUX016S2luZC5Ob0RlZjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X2NlbGxfeHl6ICh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKTogQ19NYXplQ2VsbHx1bmRlZmluZWQgeyBcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbih4LCB5LCB6KSkgcmV0dXJuIHRoaXMuY2VsbHNbel1beV1beF07XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfY2VsbCAocDogQ19Qb2ludCk6IENfTWF6ZUNlbGx8dW5kZWZpbmVkIHsgXHJcbiAgICAgICAgaWYgKHRoaXMuc2l6ZS53aXRoaW4ocCkpIHJldHVybiB0aGlzLmNlbGxzW3Auel1bcC55XVtwLnhdO1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X2NlbGwocDogQ19Qb2ludCwgazogVF9NektpbmQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbihwKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNlbGxzW3Auel1bcC55XVtwLnhdID0gQ19NYXplQ2VsbC5uZXdPYmooe2tpbmQ6IGssIHBvczogcH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfY2VsbF94eXooeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgazogVF9NektpbmQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbih4LCB5LCB6KSkge1xyXG4gICAgICAgICAgICB0aGlzLmNlbGxzW3pdW3ldW3hdID0gQ19NYXplQ2VsbC5uZXdPYmooe2tpbmQ6IGssIHBvczoge3g6eCwgeTp5LCB6Onp9fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGNhbl9tb3ZlKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaXplLndpdGhpbihwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjYW5fVUQocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzX21vdmFibGUocCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbnB1YmxpYyBmaWxsX2NlbGwoa2luZDogVF9NektpbmQsIGZsb29yOm51bWJlcik6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgaCA9IDA7IGggPCB0aGlzLnNpemUuc2l6ZV95KCk7IGgrKylcclxuICAgIGZvciAobGV0IHcgPSAwOyB3IDwgdGhpcy5zaXplLnNpemVfeCgpOyB3KyspXHJcbiAgICAgICAgdGhpcy5zZXRfY2VsbF94eXoodywgaCwgZmxvb3IsIGtpbmQpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxyXG5wdWJsaWMgc2V0X2JveChraW5kOiBUX016S2luZCwgdG9wX3g6bnVtYmVyLCB0b3BfeTogbnVtYmVyLCBzaXplX3g6IG51bWJlciwgc2l6ZV95OiBudW1iZXIsIGZsb29yOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICh0b3BfeCArIHNpemVfeCA+IHRoaXMuc2l6ZS5zaXplX3goKSkgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpIC0gdG9wX3ggKyAxOyBcclxuICAgIGlmICh0b3BfeSArIHNpemVfeSA+IHRoaXMuc2l6ZS5zaXplX3koKSkgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpIC0gdG9wX3kgKyAxO1xyXG4gICAgXHJcbiAgICBjb25zdCB0b3AgPSB0b3BfeTtcclxuICAgIGNvbnN0IGJ0bSA9IHRvcCAgICArIHNpemVfeSAtIDE7XHJcbiAgICBjb25zdCBsZnQgPSB0b3BfeDtcclxuICAgIGNvbnN0IHJndCA9IGxmdCAgICArIHNpemVfeCAtIDE7XHJcbiAgICBcclxuICAgIC8vIOWMl+WBtCjkuIop44Go5Y2X5YG0KOS4iynjgpLnn7Plo4HjgatcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eih4LCB0b3AsIGZsb29yLCBraW5kKTtcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eih4LCBidG0sIGZsb29yLCBraW5kKTtcclxuICAgIH1cclxuICAgIC8vIOadseWBtCjlj7Mp44Go6KW/5YG0KOW3pinjgpLnn7Plo4HjgatcclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihsZnQsIHksIGZsb29yLCBraW5kKTtcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihyZ3QsIHksIGZsb29yLCBraW5kKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5cclxuLy8g6ZqO5LiK44Go6ZqO5LiL44Gr6ZqO5q6144KS6Kit572u44GZ44KLXHJcbnB1YmxpYyBjcmVhdGVfc3RhaXIoZmxvb3I6bnVtYmVyKTogQ19Qb2ludERpciB7XHJcbiAgICBjb25zdCBIX3NpemVfeCA9ICh0aGlzLnNpemUuc2l6ZV94KCkgLSAxKSAvIDI7XHJcbiAgICBjb25zdCBIX3NpemVfeSA9ICh0aGlzLnNpemUuc2l6ZV95KCkgLSAxKSAvIDI7XHJcbiAgICBjb25zdCBwb3NfeCAgICA9IDIgKiBfaXJhbmQoMCwgSF9zaXplX3ggLSAxKSArIDE7XHJcbiAgICBjb25zdCBwb3NfeSAgICA9IDIgKiBfaXJhbmQoMCwgSF9zaXplX3kgLSAxKSArIDE7XHJcbiAgICBjb25zdCBwb3NfZCAgICA9IDEgKiBfaXJhbmQoMCwgVF9EaXJlY3Rpb24uTUFYKTtcclxuXHJcbiAgICAvLyDkubHmlbDjgaflvpfjgZ/luqfmqJnjgavpmo7mrrXjgpLnva7jgY9cclxuICAgIGlmIChmbG9vciA+PSAxKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0X2NlbGxfeHl6KHBvc194LCBwb3NfeSwgZmxvb3IgLSAxKT8uZ2V0S2luZCgpICE9PSBUX016S2luZC5TdHJVcCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihwb3NfeCwgcG9zX3ksIGZsb29yIC0gMSwgIFRfTXpLaW5kLlN0ckRuKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihwb3NfeCwgcG9zX3ksIGZsb29yIC0gMSwgIFRfTXpLaW5kLlN0clVEKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5nZXRfY2VsbF94eXoocG9zX3gsIHBvc195LCBmbG9vcik/LmdldEtpbmQoKSAhPT0gVF9NektpbmQuU3RyRG4pIHtcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihwb3NfeCwgcG9zX3ksIGZsb29yLCAgVF9NektpbmQuU3RyVXApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihwb3NfeCwgcG9zX3ksIGZsb29yLCAgVF9NektpbmQuU3RyVUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgQ19Qb2ludERpcih7eDogcG9zX3gsIHk6IHBvc195LCB6OiBmbG9vciwgZDogcG9zX2R9KTtcclxufVxyXG5cclxucHVibGljIGNyZWF0ZV9tYXplKGZsb29yOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgIGNvbnN0IHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKTtcclxuXHJcblxyXG4gICAgLy8g44OA44Oz44K444On44Oz44GnJGZsb29y44Gn5oyH5a6a44GV44KM44Gf6ZqO44KS5pyq6LiP5Zyw44Gr44GZ44KLIFxyXG4gICAgdGhpcy5maWxsX2NlbGwoVF9NektpbmQuVW5leHAsIGZsb29yKTtcclxuXHJcbiAgICAvLyDjg4Djg7Pjgrjjg6fjg7Pjga7ovKrpg63jgpLnn7Plo4HjgavjgZnjgotcclxuICAgIHRoaXMuc2V0X2JveChUX016S2luZC5TdG9uZSwgMCwgMCwgc2l6ZV94LCBzaXplX3ksIGZsb29yKTtcclxuXHJcbiAgICAvLyDpgJrot6/jgavkuIDjgaTnva7jgY3jgavlo4HjgYzmiJDplbfjgZnjgovjg53jgqTjg7Pjg4jjgpLoqK3lrprjgZnjgotcclxuICAgIC8vIOODneOCpOODs+ODiOOBi+OCieWjgeOCkuS8uOOBsOOBmeaWueWQkeOCkuODqeODs+ODgOODoOOBq+axuuOCgeOCi1xyXG4gICAgY29uc3QgcG9pbnRzID0gbmV3IENfUG9pbnRTZXQyRCgpO1xyXG4gICAgZm9yIChsZXQgaCA9IDI7IGggPCBzaXplX3kgLSAyOyBoICs9IDIpe1xyXG4gICAgICAgIGZvciAobGV0IHcgPSAyOyB3IDwgc2l6ZV94IC0gMjsgdyArPSAyKXtcclxuICAgICAgICAgICAgY29uc3QgZGkgPSBfaXJhbmQoMCwgVF9EaXJlY3Rpb24uTUFYKTtcclxuICAgICAgICAgICAgcG9pbnRzLnB1c2gobmV3IENfUG9pbnRMaW5rMkQodywgaCwgZGkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Lmx5pWw44Gn44GE44GP44Gk44GL6YOo5bGL44KS5L2c44KLXHJcbiAgICBjb25zdCByb29tc19hcnJheSA9IFtdO1xyXG4gICAgY29uc3QgbnVtX29mX3Jvb20gPSBfaXJhbmQoMCwgdGhpcy5udW1fb2Zfcm9vbSk7XHJcbiAgICBmb3IgKGxldCBjbnQgPSAwOyBjbnQgPCBudW1fb2Zfcm9vbTsgY250KyspIHtcclxuICAgICAgICBjb25zdCBsZW5nX3ggPSBfaXJhbmQoMSwgIHRoaXMubWF4X3NpemVfb2Zfcm9vbSkgKiAyICsgMTtcclxuICAgICAgICBjb25zdCBsZW5nX3kgPSBfaXJhbmQoMSwgIHRoaXMubWF4X3NpemVfb2Zfcm9vbSkgKiAyICsgMTtcclxuICAgICAgICBjb25zdCByb29tX3ggPSBfaXJhbmQoMCwgKHNpemVfeCAtIGxlbmdfeCkgLyAyKSAqIDI7XHJcbiAgICAgICAgY29uc3Qgcm9vbV95ID0gX2lyYW5kKDAsIChzaXplX3kgLSBsZW5nX3kpIC8gMikgKiAyO1xyXG4gICAgICAgIHJvb21zX2FycmF5LnB1c2goe3R4OiByb29tX3gsIHR5OiByb29tX3ksIHN4OiBsZW5nX3gsIHN5OiBsZW5nX3l9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDpg6jlsYvjga7kuK3jga7jg53jgqTjg7Pjg4jjgpLliYrpmaTjgZnjgotcclxuICAgIGZvciAoY29uc3Qgcm9vbSBvZiByb29tc19hcnJheSkge1xyXG4gICAgICAgIGZvciAobGV0IGlpID0gMDsgaWkgPCBwb2ludHMuc2V0Lmxlbmd0aDsgaWkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBwID0gIHBvaW50cy5zZXRbaWldO1xyXG4gICAgICAgICAgICBpZiAocCA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGlmICggICAgKHAueCA+PSByb29tLnR4KSBcclxuICAgICAgICAgICAgICAgICYmICAocC54IDw9IHJvb20udHggKyByb29tLnN4KVxyXG4gICAgICAgICAgICAgICAgJiYgIChwLnkgPj0gcm9vbS50eSlcclxuICAgICAgICAgICAgICAgICYmICAocC55IDw9IHJvb20udHkgKyByb29tLnN5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50cy5yZW1vdmUocCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyDjg53jgqTjg7Pjg4jjgYvjgonlo4HjgpLmiJDplbfjgZXjgZvjgabov7fot6/jgpLkvZzjgotcclxuICAgIGZvciAoY29uc3QgcCBvZiBwb2ludHMuc2V0KSB7XHJcbiAgICAgICAgaWYgKHAgPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g44Od44Kk44Oz44OI44Gu5L2N572u44Gr55+z5aOB44KS572u44GPXHJcbiAgICAgICAgdGhpcy5zZXRfY2VsbF94eXoocC54LCBwLnksIGZsb29yLCBUX016S2luZC5TdG9uZSk7XHJcblxyXG4gICAgICAgIC8vIOafseOBruadseilv+WNl+WMl+OBruOBhOOBmuOCjOOBi+OBq+OCguefs+WjgeOCkue9ruOBj1xyXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IFswLCAwLCAwLCAwXTtcclxuICAgICAgICBjb25zdCBkaSA9IENfUG9pbnRMaW5rMkQuY2FzdChwKT8uZGkgPz8gVF9EaXJlY3Rpb24uWDtcclxuICAgICAgICBpZiAoZGkgPT09IFRfRGlyZWN0aW9uLlgpIGNvbnRpbnVlO1xyXG4gICAgICAgIGRpcmVjdGlvbltkaV0gPSAxO1xyXG5cclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihcclxuICAgICAgICAgICAgcC54IC0gZGlyZWN0aW9uW1RfRGlyZWN0aW9uLlddICsgZGlyZWN0aW9uW1RfRGlyZWN0aW9uLkVdLCBcclxuICAgICAgICAgICAgcC55IC0gZGlyZWN0aW9uW1RfRGlyZWN0aW9uLk5dICsgZGlyZWN0aW9uW1RfRGlyZWN0aW9uLlNdLCBcclxuICAgICAgICAgICAgZmxvb3IsXHJcbiAgICAgICAgICAgIFRfTXpLaW5kLlN0b25lXHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyDplonpjpbnqbrplpPjgYzlh7rmnaXjgabjgYTjgZ/jgonlh7rlj6PjgpLkvZzjgotcclxuICAgIC8vIOODneOCpOODs+ODiOOCkuODiOODrOODvOOCueOBl+OBpuOAgeaXouWHuuOBruODneOCpOODs+ODiOOBq+e5i+OBjOOBo+OBpuOBhOOBn+OCiemWiemOluepuumWk1xyXG4gICAgZm9yIChjb25zdCBzZXQgb2YgcG9pbnRzLnNldCkge1xyXG4gICAgICAgIGlmIChzZXQgPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcblxyXG4gICAgICAgIGNvbnN0IFt5biwgdHJhY2Vfc2V0XSA9IHRoaXMuY2hlY2tfY2xvc2Uoc2V0LngsIHNldC55LCBwb2ludHMsIG5ldyBDX1BvaW50U2V0MkQoKSk7XHJcbiAgICAgICAgaWYgKHluKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3Blbl9leGl0KHRyYWNlX3NldCwgVF9NektpbmQuVW5leHAsIGZsb29yKTtcclxuICAgICAgICAgICAgaWYgKHRyYWNlX3NldCAhPT0gdW5kZWZpbmVkKSBmb3IgKGNvbnN0IHQgb2YgdHJhY2Vfc2V0LnNldCkgcG9pbnRzLnJlbW92ZSh0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuXHJcbnByb3RlY3RlZCBjaGVja19jbG9zZSh4OiBudW1iZXIsIHk6IG51bWJlciwgcG9pbnRfc2V0OiBDX1BvaW50U2V0MkQsIHRyYWNlX3NldDogQ19Qb2ludFNldDJEfHVuZGVmaW5lZCk6IFtib29sZWFuLCBDX1BvaW50U2V0MkR8dW5kZWZpbmVkXSB7XHJcbiAgICBpZiAoeCA8IDIgfHwgeSA8IDIgfHwgeCA+IHRoaXMuc2l6ZS5zaXplX3goKSAtIDIgfHwgeSA+IHRoaXMuc2l6ZS5zaXplX3koKSAtIDIpIHJldHVybiBbZmFsc2UsIHVuZGVmaW5lZF07XHJcblxyXG4gICAgaWYgKHBvaW50X3NldCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gW2ZhbHNlLCB1bmRlZmluZWRdO1xyXG4gICAgaWYgKHBvaW50X3NldD8uaXNfZXhpc3QoeCwgeSkgPT09IGZhbHNlKSByZXR1cm4gW2ZhbHNlLCB1bmRlZmluZWRdO1xyXG5cclxuICAgIGlmICh0cmFjZV9zZXQgIT09IHVuZGVmaW5lZCAmJiB0cmFjZV9zZXQ/LmlzX2V4aXN0KHgsIHkpID09PSB0cnVlKSAgcmV0dXJuIFt0cnVlLCAgdHJhY2Vfc2V0XTtcclxuXHJcbiAgICBjb25zdCBwID0gcG9pbnRfc2V0LmdldF9wb2ludCh4LCB5KTtcclxuICAgIHRyYWNlX3NldCA/Pz0gbmV3IENfUG9pbnRTZXQyRCgpO1xyXG4gICAgdHJhY2Vfc2V0Py5wdXNoKG5ldyBDX1BvaW50TGluazJEKHgsIHksIENfUG9pbnRMaW5rMkQuY2FzdChwKT8uZGkpKTtcclxuXHJcbiAgICBsZXQgbmV4dF94OiBudW1iZXIgPSAwLCBuZXh0X3k6IG51bWJlciA9IDA7XHJcbiAgICBzd2l0Y2ggKENfUG9pbnRMaW5rMkQuY2FzdChwKT8uZGkpIHtcclxuICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46ICAvLyDljJdcclxuICAgICAgICAgICAgbmV4dF94ID0geDtcclxuICAgICAgICAgICAgbmV4dF95ID0geSAtIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogIC8vIOadsVxyXG4gICAgICAgICAgICBuZXh0X3ggPSB4ICsgMjtcclxuICAgICAgICAgICAgbmV4dF95ID0geTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiAgLy8g5Y2XXHJcbiAgICAgICAgICAgIG5leHRfeCA9IHg7XHJcbiAgICAgICAgICAgIG5leHRfeSA9IHkgKyAyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6ICAvLyDopb9cclxuICAgICAgICAgICAgbmV4dF94ID0geCAtIDI7XHJcbiAgICAgICAgICAgIG5leHRfeSA9IHk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja19jbG9zZShuZXh0X3gsIG5leHRfeSwgcG9pbnRfc2V0LCB0cmFjZV9zZXQpO1xyXG59XHJcblxyXG5wcm90ZWN0ZWQgb3Blbl9leGl0KHA6IENfUG9pbnRTZXQyRHx1bmRlZmluZWQsIGtpbmQ6IFRfTXpLaW5kLCBmbG9vcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAocCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgY250ID0gX2lyYW5kKDAsIHAuc2V0Lmxlbmd0aCAtIDEpO1xyXG4gICAgY29uc3QgcHAgID0gIHAuc2V0W2NudF07XHJcblxyXG4gICAgbGV0IGRpcmVjdGlvbiA9IFswLCAwLCAwLCAwXTtcclxuICAgIGNvbnN0IGRpID0gQ19Qb2ludExpbmsyRC5jYXN0KHBwKT8uZGkgPz8gVF9EaXJlY3Rpb24uTlxyXG4gICAgZGlyZWN0aW9uW2RpXSA9IDE7XHJcblxyXG4gICAgdGhpcy5zZXRfY2VsbF94eXooXHJcbiAgICAgICAgcHAueCAtIGRpcmVjdGlvbltUX0RpcmVjdGlvbi5XXSArIGRpcmVjdGlvbltUX0RpcmVjdGlvbi5FXSwgXHJcbiAgICAgICAgcHAueSAtIGRpcmVjdGlvbltUX0RpcmVjdGlvbi5OXSArIGRpcmVjdGlvbltUX0RpcmVjdGlvbi5TXSwgXHJcbiAgICAgICAgZmxvb3IsXHJcbiAgICAgICAga2luZCBcclxuICAgICk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgc3RhdGljIGZyb21fb2JqX3RvX3N0cmluZyhvYTogQ19NYXplKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYSwgbnVsbCwgXCJcXHRcIik7XHJcbn1cclxucHVibGljIHN0YXRpYyBmcm9tX29iakFycmF5X3RvX3N0cmluZyhvYWE6IHtbdWlkOiBzdHJpbmddOiBDX01hemV9KTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG9hID0gW10gYXMgQ19NYXplW107XHJcbiAgICBmb3IgKGNvbnN0IGlpIGluIG9hYSkgb2EucHVzaChvYWFbaWldKTtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYSwgbnVsbCwgXCJcXHRcIik7XHJcbn1cclxucHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ190b19vYmoodHh0OiBzdHJpbmcpOiBDX01hemUge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBqICAgPSBKU09OLnBhcnNlKHR4dCkgYXMgSlNPTl9NYXplW107XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX01hemUoKS5kZWNvZGUoaik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IENfTWF6ZSgpO1xyXG4gICAgfTtcclxufVxyXG5wdWJsaWMgc3RhdGljIGZyb21fc3RyaW5nX3RvX29iakFycmF5KHR4dDogc3RyaW5nKToge1t1aWQ6IHN0cmluZ106IENfTWF6ZX0ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBqICAgPSBKU09OLnBhcnNlKHR4dCkgYXMgSlNPTl9NYXplW107XHJcbiAgICAgICAgY29uc3QgbXBhID0ge30gYXMge1tpZDogc3RyaW5nXTogQ19NYXplfTtcclxuICAgICAgICBmb3IgKGNvbnN0IGpqIG9mIGopIHtcclxuICAgICAgICAgICAgY29uc3QgYWFhID0gbmV3IENfTWF6ZSgpLmRlY29kZShqaik7XHJcbiAgICAgICAgICAgIG1wYVthYWEudWlkKCldID0gYWFhO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbXBhO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfTtcclxufVxyXG5cclxuXHJcbiAgICBwdWJsaWMgdG9fbGV0dGVyKHA6IENfUG9pbnQpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNlbGxzW3Auel1bcC55XVtwLnhdLnRvX2xldHRlcigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHRvX3N0cmluZyhmbG9vcjogbnVtYmVyID0gMCwgZGVidWdfbW9kZTogYm9vbGVhbiA9IGZhbHNlKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG5cclxuICAgICAgICB2YXIgcmV0X3N0cjogc3RyaW5nID0gJyc7XHJcbiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBzaXplX3k7IHkrKykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB0aGlzLmdldF9vYmpfeHl6KHgsIHksIGZsb29yKTtcclxuICAgICAgICAgICAgICAgIGlmICghZGVidWdfbW9kZSAmJiB0aGlzLm1hc2tzW2Zsb29yXVt5XVt4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldF9zdHIgKz0gJ++8uCc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9ial9jID0gb2JqPy52aWV3KCk/LmxldHRlcigpID8/IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iaiA9PT0gbnVsbCB8fCBvYmpfYyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRfc3RyICs9IHRoaXMuY2VsbHNbZmxvb3JdW3ldW3hdLnRvX2xldHRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldF9zdHIgKz0gb2JqX2M7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldF9zdHIgKz0gXCJcXG5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldF9zdHI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTWF6ZSB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKTtcclxuICAgICAgICBjb25zdCBzaXplX3ogPSB0aGlzLnNpemUuc2l6ZV96KCk7XHJcblxyXG4gICAgICAgIHZhciB6X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgdmFyIHlfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIHZhciB4X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHhfYXJyYXkucHVzaCh0aGlzLmNlbGxzW3pdW3ldW3hdLmVuY29kZSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHlfYXJyYXkucHVzaCh4X2FycmF5LmpvaW4oJ1gnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgel9hcnJheS5wdXNoKHlfYXJyYXkuam9pbignWScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWF6ZV9zdHIgPSB6X2FycmF5LmpvaW4oJ1onKTtcclxuXHJcbiAgICAgICAgdmFyIHpfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBzaXplX3o7IHorKykge1xyXG4gICAgICAgICAgICB2YXIgeV9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBzaXplX3k7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHhfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeF9hcnJheS5wdXNoKHRoaXMubWFza3Nbel1beV1beF0gPyAnMScgOiAnMCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeV9hcnJheS5wdXNoKHhfYXJyYXkuam9pbignWCcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB6X2FycmF5LnB1c2goeV9hcnJheS5qb2luKCdZJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtYXNrX3N0ciA9IHpfYXJyYXkuam9pbignWicpO1xyXG5cclxuICAgICAgICBsZXQgb2JqcyA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gdGhpcy5vYmpzKSBvYmpzLnB1c2godGhpcy5vYmpzW2lpXS5lbmNvZGUoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgIHRoaXMubWF6ZV9pZCxcclxuICAgICAgICAgICAgdW5pcV9pZDogdGhpcy51bmlxX2lkLFxyXG4gICAgICAgICAgICBzYXZlX2lkOiB0aGlzLnNhdmVfaWQsXHJcbiAgICAgICAgICAgIGZsb29yOiAgIHRoaXMuZmxvb3IsXHJcbiAgICAgICAgICAgIG5hbWU6ICAgIHRoaXMubmFtZSxcclxuICAgICAgICAgICAgb2JqczogICAgb2JqcyxcclxuICAgICAgICAgICAgc2l6ZV94OiAgdGhpcy5zaXplLnNpemVfeCgpLFxyXG4gICAgICAgICAgICBzaXplX3k6ICB0aGlzLnNpemUuc2l6ZV95KCksXHJcbiAgICAgICAgICAgIHNpemVfejogIHRoaXMuc2l6ZS5zaXplX3ooKSxcclxuICAgICAgICAgICAgbWF6ZTogICAgbWF6ZV9zdHIsXHJcbiAgICAgICAgICAgIG1hc2s6ICAgIG1hc2tfc3RyLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoYTogSlNPTl9NYXplfHVuZGVmaW5lZCk6IENfTWF6ZSB7XHJcbiAgICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChhLmlkICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5tYXplX2lkID0gYS5pZDtcclxuICAgICAgICBpZiAoYS51bmlxX2lkICE9PSB1bmRlZmluZWQpIHRoaXMudW5pcV9pZCA9IGEudW5pcV9pZDtcclxuICAgICAgICBpZiAoYS5zYXZlX2lkICE9PSB1bmRlZmluZWQpIHRoaXMuc2F2ZV9pZCA9IGEuc2F2ZV9pZDtcclxuICAgICAgICBpZiAoYS5mbG9vciAgICE9PSB1bmRlZmluZWQpIHRoaXMuZmxvb3IgICA9IGEuZmxvb3I7XHJcbiAgICAgICAgaWYgKGEubmFtZSAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm5hbWUgICAgPSBhLm5hbWU7XHJcblxyXG4gICAgICAgIGlmIChhLm9ianMgICAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9ianMgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqc29uX29iaiBvZiBhLm9ianMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld19vYmogPSBDX01hemVPYmoubmV3T2JqKGpzb25fb2JqKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub2Jqc1tuZXdfb2JqLnVpZCgpXSA9IG5ld19vYmo7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhLnNpemVfeCAhPT0gdW5kZWZpbmVkICYmIGEuc2l6ZV95ICE9PSB1bmRlZmluZWQgJiYgYS5zaXplX3ogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNpemUgID0gbmV3IENfUmFuZ2UoXHJcbiAgICAgICAgICAgICAgICBuZXcgQ19Qb2ludCgwLCAwLCAwKSwgXHJcbiAgICAgICAgICAgICAgICBuZXcgQ19Qb2ludChhLnNpemVfeCAtIDEsIGEuc2l6ZV95IC0gMSwgYS5zaXplX3ogLSAxKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5jZWxscyAgID0gdGhpcy5fX2luaXRfbWF6ZShUX016S2luZC5TdG9uZSk7XHJcbiAgICAgICAgICAgIHRoaXMubWFza3MgICA9IHRoaXMuX19pbml0X21hc2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX19pbml0X3VuY2xlYXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgICAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV96ID0gdGhpcy5zaXplLnNpemVfeigpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGEubWF6ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbi8qXHJcbiAgICAgICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspXHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspXHJcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbel1beV1beF0uc2V0KFRfTXpLaW5kLlN0b25lKTtcclxuICAgICAgICAgICAgfVxyXG4qL1xyXG4gICAgICAgICAgICBjb25zdCB6X2FycmF5OiBzdHJpbmdbXSA9IGEubWF6ZS5zcGxpdCgnWicpO1xyXG4gICAgICAgICAgICBjb25zdCB6X21heCA9IF9taW4oW3NpemVfeiwgel9hcnJheS5sZW5ndGhdKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCB6X21heDsgeisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5X2FycmF5OiBzdHJpbmdbXSA9IHpfYXJyYXlbel0uc3BsaXQoJ1knKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHlfbWF4ID0gIF9taW4oW3NpemVfeSwgeV9hcnJheS5sZW5ndGhdKTsgXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHlfbWF4OyB5KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4X2FycmF5OiBzdHJpbmdbXSA9IHlfYXJyYXlbeV0uc3BsaXQoJ1gnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4X21heCA9ICBfbWluKFtzaXplX3gsIHhfYXJyYXkubGVuZ3RoXSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgeF9tYXg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga2luZCA9IHBhcnNlSW50KHhfYXJyYXlbeF0sIDE2KTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbel1beV1beF0gPSBDX01hemVDZWxsLm5ld09iaih7a2luZDoga2luZCwgcG9zOiB7eDp4LCB5OnksIHo6en19KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYS5tYXNrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fX2luaXRfbWFzayh0cnVlKTtcclxuICAgICAgICAgICAgY29uc3Qgel9hcnJheTogc3RyaW5nW10gPSBhLm1hc2suc3BsaXQoJ1onKTtcclxuICAgICAgICAgICAgY29uc3Qgel9tYXggPSBfbWluKFtzaXplX3osIHpfYXJyYXkubGVuZ3RoXSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgel9tYXg7IHorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeV9hcnJheTogc3RyaW5nW10gPSB6X2FycmF5W3pdLnNwbGl0KCdZJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5X21heCA9ICBfbWluKFtzaXplX3ksIHlfYXJyYXkubGVuZ3RoXSk7IFxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB5X21heDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeF9hcnJheTogc3RyaW5nW10gPSB5X2FycmF5W3ldLnNwbGl0KCdYJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeF9tYXggPSAgX21pbihbc2l6ZV94LCB4X2FycmF5Lmxlbmd0aF0pOyBcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHhfbWF4OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhfYXJyYXlbeF0gIT09ICcwJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrc1t6XVt5XVt4XSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc2tzW3pdW3ldW3hdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fX2luaXRfdW5jbGVhcigpOyAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZW5jb2RlX2FsbChhbGxfbWF6ZTogQ19NYXplW10pOiBKU09OX01hemVbXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX21hemVfZGF0YTogSlNPTl9NYXplW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBtYXplIG9mIGFsbF9tYXplKSB7XHJcbiAgICAgICAgICAgIGFsbF9tYXplX2RhdGEucHVzaChtYXplLmVuY29kZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbF9tYXplX2RhdGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZV9hbGwoYWxsX21hemVfZGF0YTogSlNPTl9NYXplW10pOiBDX01hemVbXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX21hemU6IENfTWF6ZVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgbWF6ZV9kYXRhIG9mIGFsbF9tYXplX2RhdGEpIHtcclxuICAgICAgICAgICAgYWxsX21hemUucHVzaCgobmV3IENfTWF6ZSh7fSkpLmRlY29kZShtYXplX2RhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbF9tYXplO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWxlcnQoKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJNYXplIEluZm86XCJcclxuICAgICAgICAgICAgKyBcIlxcbm1hemUgaWQgOlwiICsgKHRoaXMubWF6ZV9pZCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5mbG9vcjogXCIgICArICh0aGlzLmZsb29yICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudW5pcSBpZCA6XCIgKyAodGhpcy51bmlxX2lkID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNhdmUgaWQgOlwiICsgKHRoaXMuc2F2ZV9pZCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5uYW1lOiAgIFwiICArICh0aGlzLm5hbWUgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2l6ZV94OiBcIiAgKyAodGhpcy5zaXplLnNpemVfeCgpID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNpemVfeTogXCIgICsgKHRoaXMuc2l6ZS5zaXplX3koKSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zaXplX3o6IFwiICArICh0aGlzLnNpemUuc2l6ZV96KCkgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFsZXJ0X21hemUoZmxvb3I6IG51bWJlciA9IDApOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIk1hemUgTWFwOlwiXHJcbiAgICAgICAgICAgICsgXCJtYXplOlxcblwiICAgICArICh0aGlzLnRvX3N0cmluZyhmbG9vciwgdHJ1ZSkgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhbGVydF9tYXNrKGZsb29yOiBudW1iZXIgPSAwKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJNYXNrIE1hcDpcIlxyXG4gICAgICAgICAgICArIFwibWFzazpcXG5cIiAgICAgKyAodGhpcy50b19zdHJpbmcoZmxvb3IsIGZhbHNlKSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBfZ2V0X3V1aWQgfSBmcm9tIFwiLi4vZF91dGwvRl9SYW5kXCI7XHJcbmltcG9ydCB7IFRfTXpLaW5kIH0gIGZyb20gXCIuL1RfTXpLaW5kXCI7XHJcbmltcG9ydCB7IEpTT05fQW55IH0gIGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuaW1wb3J0IHsgQ19NYXplT2JqLCBJX01hemVPYmosIEpTT05fTWF6ZU9iaiB9IGZyb20gXCIuL0NfTWF6ZU9ialwiO1xyXG5pbXBvcnQgeyBUX1dhbGwgfSAgICBmcm9tICcuL0NfV2FsbCc7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX01hemVDZWxsIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAga2luZD86IFRfTXpLaW5kXHJcbiAgICBvYmo/OiAgSlNPTl9NYXplT2JqLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19NYXplQ2VsbCAge1xyXG4gICAgcHJvdGVjdGVkIGtpbmQ6ICAgVF9NektpbmQ7XHJcbiAgICBwcm90ZWN0ZWQgbXlfb2JqOiBJX01hemVPYmo7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBuZXdPYmooajogSlNPTl9NYXplQ2VsbCk6IENfTWF6ZUNlbGwge1xyXG4gICAgICAgIHN3aXRjaCAoai5raW5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuTm9EZWY6IHJldHVybiBuZXcgQ19NYXplQ2VsbE5vRGVmKGopOyBcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5Vbmt3bjogcmV0dXJuIG5ldyBDX01hemVDZWxsVW5rd24oaik7IFxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLkVtcHR5OiByZXR1cm4gbmV3IENfTWF6ZUNlbGxFbXB0eShqKTsgXHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuRmxvb3I6IHJldHVybiBuZXcgQ19NYXplQ2VsbEZsb29yKGopO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlVuZXhwOiByZXR1cm4gbmV3IENfTWF6ZUNlbGxVbmV4cChqKTtcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdG9uZTogcmV0dXJuIG5ldyBDX01hemVDZWxsU3RvbmUoaik7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyVXA6IHJldHVybiBuZXcgQ19NYXplQ2VsbFN0clVwKGopO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0ckRuOiByZXR1cm4gbmV3IENfTWF6ZUNlbGxTdHJEbihqKTsgXHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyVUQ6IHJldHVybiBuZXcgQ19NYXplQ2VsbFN0clVEKGopO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IENfTWF6ZUNlbGxOb0RlZihqKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoajogSlNPTl9NYXplQ2VsbCkge1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuICAgICAgICBqLm9iai5jbG5hbWUgPz89IHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5raW5kICAgPSBqLmtpbmQgPz8gVF9NektpbmQuTm9EZWY7XHJcbiAgICAgICAgdGhpcy5teV9vYmogPSBDX01hemVPYmoubmV3T2JqKGoub2JqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRPYmooKTogIElfTWF6ZU9iaiB7cmV0dXJuIHRoaXMubXlfb2JqfVxyXG4gICAgcHVibGljIGdldEtpbmQoKTogVF9NektpbmQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtpbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvX2xldHRlcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm15X29iai52aWV3KCk/LmxldHRlcigpID8/ICfvvLgnO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX2xldHRlcihsZXR0ZXI6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoVF9NektpbmQpKSB7XHJcbiAgICAgICAgICAgIGlmIChsZXR0ZXIgPT09IGtleSkgcmV0dXJuIFRfTXpLaW5kW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBUX016S2luZC5Ob0RlZjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJvdzNEKGZyb3Q6IFRfV2FsbCwgYmFjazogVF9XYWxsKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5teV9vYmoudmlldygpPy5kcm93M0QoZnJvdCwgYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtpbmQudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsXCIwXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBkZWNvZGUoc3RyOiBzdHJpbmcsIGo/OiBKU09OX01hemVDZWxsKTogQ19NYXplQ2VsbHx1bmRlZmluZWQge1xyXG4gICAgICAgICBjb25zdCBraW5kID0gcGFyc2VJbnQoc3RyLCAxNikgYXMgVF9NektpbmQ7XHJcbiAgICAgICAgIHJldHVybiBDX01hemVDZWxsLm5ld09iaih7a2luZDoga2luZCwgcG9zOiBqPy5wb3N9KTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbE5vRGVmIGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLk5vRGVmfTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMCc7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ+eWkScsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMCcsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbiAgICAgICAgICAgIGNvbF9mOiAnJywgY29sX2I6ICcnLCBjb2xfczogJycsIGNvbF90OiAnJywgY29sX2Q6ICcnLCBcclxuICAgICAgICAgICAgY29sX2w6ICcnLCBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGxVbmt3biBleHRlbmRzIENfTWF6ZUNlbGwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVDZWxsfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGogPz89IHtraW5kOiBUX016S2luZC5Vbmt3bn07XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG5cclxuICAgICAgICBqLm9iai5jYW5fdGhyID0gJzAnO1xyXG4gICAgICAgIGoub2JqLnBvcyAgICAgPSB7eDpqLngsIHk6ai55LCB6Omouen07XHJcbiAgICAgICAgai5vYmoudmlldyAgICA9ICB7XHJcbiAgICAgICAgICAgIGxheWVyOiAwLCBsZXR0ZXI6ICforI4nLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgJzAnLFxyXG4gICAgICAgICAgICBwYWRfdDogMC4wLCBwYWRfZDogMC4wLCBwYWRfczogMC4wLFxyXG4gICAgICAgICAgICBjb2xfZjogJycsIGNvbF9iOiAnJywgY29sX3M6ICcnLCBjb2xfdDogJycsIGNvbF9kOiAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnJywgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbEVtcHR5IGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLkVtcHR5fTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMSc7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ+eEoScsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMCcsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbiAgICAgICAgICAgIGNvbF9mOiAnJywgY29sX2I6ICcnLCBjb2xfczogJycsIGNvbF90OiAnJywgY29sX2Q6ICcnLCBcclxuICAgICAgICAgICAgY29sX2w6ICcnLCBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsRmxvb3IgZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuRmxvb3J9O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcxJztcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn44CAJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcxJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcjNjY2NmZmJywgY29sX2Q6ICcnLCBcclxuICAgICAgICAgICAgY29sX2w6ICcjOTk5OWZmJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsVW5leHAgZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuVW5leHB9O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcxJztcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn44O7JywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcxJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcjNjZmZmZmJywgY29sX2Q6ICcnLCBcclxuICAgICAgICAgICAgY29sX2w6ICcjOTk5OWZmJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsU3RvbmUgZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuU3RvbmV9O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcwJztcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn77yDJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcxJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcjMDBmZjAwJywgY29sX2I6ICcnLCBjb2xfczogJyMwMGVlMDAnLCBjb2xfdDogJycsIGNvbF9kOiAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnIzAwMDBmZicsIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbFN0clVwIGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLlN0clVwfTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMSc7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ+S4iicsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMScsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbiAgICAgICAgICAgIGNvbF9mOiAnJywgY29sX2I6ICcnLCBjb2xfczogJycsIGNvbF90OiAnI2ZmZmZjYycsIGNvbF9kOiAnI2ZmZmZjYycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJyMwMDAwZmYnLCBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGxTdHJEbiBleHRlbmRzIENfTWF6ZUNlbGwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVDZWxsfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGogPz89IHtraW5kOiBUX016S2luZC5TdHJEbn07XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG5cclxuICAgICAgICBqLm9iai5jYW5fdGhyID0gJzEnO1xyXG4gICAgICAgIGoub2JqLnBvcyAgICAgPSB7eDpqLngsIHk6ai55LCB6Omouen07XHJcbiAgICAgICAgai5vYmoudmlldyAgICA9ICB7XHJcbiAgICAgICAgICAgIGxheWVyOiAwLCBsZXR0ZXI6ICfkuIsnLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgJzEnLFxyXG4gICAgICAgICAgICBwYWRfdDogMC4wLCBwYWRfZDogMC4wLCBwYWRfczogMC4wLFxyXG4gICAgICAgICAgICBjb2xfZjogJycsIGNvbF9iOiAnJywgY29sX3M6ICcnLCBjb2xfdDogJyNmZmZmY2MnLCBjb2xfZDogJyNmZmZmY2MnLCBcclxuICAgICAgICAgICAgY29sX2w6ICcjMDAwMGZmJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsU3RyVUQgZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuU3RyVUR9O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcxJztcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn5q61JywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcxJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcjZmZmZmNjJywgY29sX2Q6ICcjZmZmZmNjJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnIzAwMDBmZicsIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IF9hbGVydCB9IGZyb20gXCIuLi9kX2Ntbi9nbG9iYWxcIjtcclxuaW1wb3J0IHsgQ19Ec3BNZXNzYWdlIH0gZnJvbSBcIi4uL2RfdXRsL0NfRHNwTWVzc2FnZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX01hemVJbmZvIHtcclxuICAgIG5hbWU6ICAgICAgc3RyaW5nO1xyXG4gICAgbWJuYW1lOiAgICBzdHJpbmc7XHJcbiAgICBsdjogICAgICAgIG51bWJlcjtcclxuICAgIHNpemVfeDogICAgbnVtYmVyO1xyXG4gICAgc2l6ZV95OiAgICBudW1iZXI7XHJcbiAgICBzaXplX3o6ICAgIG51bWJlcjtcclxuICAgIG1heF9yb29tOiAgbnVtYmVyO1xyXG4gICAgcm9vbV9zaXplOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9tYXplaW5mb19pbmZvKGE/OiBKU09OX01hemVJbmZvKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgYWxlcnQoXCJNYXplSW5mbyBEYXRhOlwiXHJcbiAgICAgICAgKyBcIlxcbm5hbWUgOiBcIiAgICAgICArIChhLm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbm1ibmFtZTogXCIgICAgICArIChhLm1ibmFtZSAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmx2IDpcIiAgICAgICAgICArIChhLmx2ICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNpemVfeDogXCIgICAgICArIChhLnNpemVfeCAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNpemVfeTogXCIgICAgICArIChhLnNpemVfeSAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNpemVfejogXCIgICAgICArIChhLnNpemVfeiAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbm1heF9vZl9yb29tOiBcIiArIChhLm1heF9yb29tICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnJvb21fc2l6ZTogXCIgICArIChhLnJvb21fc2l6ZSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19NYXplSW5mbyB7XHJcbiAgICBwdWJsaWMgbmFtZTogICAgICBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBtYm5hbWU6ICAgIHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIGx2OiAgICAgICAgbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBzaXplX3g6ICAgIG51bWJlciA9IDM7XHJcbiAgICBwdWJsaWMgc2l6ZV95OiAgICBudW1iZXIgPSAzO1xyXG4gICAgcHVibGljIHNpemVfejogICAgbnVtYmVyID0gMztcclxuICAgIHB1YmxpYyBtYXhfcm9vbTogIG51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgcm9vbV9zaXplOiBudW1iZXIgPSAxO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRfdGJsX2FsbCgpOiBDX01hemVJbmZvW10ge1xyXG4gICAgICAgIGNvbnN0IG1hemVpbmZvOiBDX01hemVJbmZvW10gPSBbXTtcclxuICAgICAgICBtYXplaW5mby5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgQ19NYXplSW5mbygpLmRlY29kZSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAgIFx0J21hemUwMTAnLCBcclxuICAgICAgICAgICAgICAgIG1ibmFtZTogXHQn5pWZ57e05aC0JywgXHJcbiAgICAgICAgICAgICAgICBsdjogICAgIFx0IDEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV94OiBcdDExLCBcclxuICAgICAgICAgICAgICAgIHNpemVfeTogXHQxMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3o6IFx0IDMsIFxyXG4gICAgICAgICAgICAgICAgbWF4X3Jvb206IFx0IDIsIFxyXG4gICAgICAgICAgICAgICAgcm9vbV9zaXplOiBcdCAzIFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1hemVpbmZvLnB1c2goXHJcbiAgICAgICAgICAgIG5ldyBDX01hemVJbmZvKCkuZGVjb2RlKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICAgXHQnbWF6ZTAxMScsIFxyXG4gICAgICAgICAgICAgICAgbWJuYW1lOiBcdCflp4vjgb7jgorjga7ov7flrq4nLCBcclxuICAgICAgICAgICAgICAgIGx2OiAgICAgXHQgMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3g6IFx0MjEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV95OiBcdDIxLCBcclxuICAgICAgICAgICAgICAgIHNpemVfejogXHQgNSwgXHJcbiAgICAgICAgICAgICAgICBtYXhfcm9vbTogXHQgMywgXHJcbiAgICAgICAgICAgICAgICByb29tX3NpemU6IFx0IDMgXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWF6ZWluZm8ucHVzaChcclxuICAgICAgICAgICAgbmV3IENfTWF6ZUluZm8oKS5kZWNvZGUoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogICBcdCdtYXplMDEyJywgXHJcbiAgICAgICAgICAgICAgICBtYm5hbWU6IFx0J+aal+OBjeajruOBrui/t+WuricsIFxyXG4gICAgICAgICAgICAgICAgbHY6ICAgICBcdCAxLCBcclxuICAgICAgICAgICAgICAgIHNpemVfeDogXHQyNSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3k6IFx0MjUsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV96OiBcdCA3LCBcclxuICAgICAgICAgICAgICAgIG1heF9yb29tOiBcdCA1LCBcclxuICAgICAgICAgICAgICAgIHJvb21fc2l6ZTogXHQgMyBcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKVxyXG4gICAgICAgIG1hemVpbmZvLnB1c2goXHJcbiAgICAgICAgICAgIG5ldyBDX01hemVJbmZvKCkuZGVjb2RlKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICAgXHQnbWF6ZTAxMycsIFxyXG4gICAgICAgICAgICAgICAgbWJuYW1lOiBcdCfpu5LprZTjga7lnLDkuIvlopPlnLAnLCBcclxuICAgICAgICAgICAgICAgIGx2OiAgICAgXHQgMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3g6IFx0MzEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV95OiBcdDMxLCBcclxuICAgICAgICAgICAgICAgIHNpemVfejogXHQxMCwgXHJcbiAgICAgICAgICAgICAgICBtYXhfcm9vbTogXHQgNSwgXHJcbiAgICAgICAgICAgICAgICByb29tX3NpemU6IFx0IDUgXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgcmV0dXJuIG1hemVpbmZvO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yIChqPzogSlNPTl9NYXplSW5mbykge1xyXG4gICAgICAgIGlmIChqICE9PSB1bmRlZmluZWQpIHRoaXMuZGVjb2RlKGopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX01hemVJbmZvIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiAgICAgIHRoaXMubmFtZSxcclxuICAgICAgICAgICAgbWJuYW1lOiAgICB0aGlzLm1ibmFtZSxcclxuICAgICAgICAgICAgbHY6ICAgICAgICB0aGlzLmx2LFxyXG4gICAgICAgICAgICBzaXplX3g6ICAgIHRoaXMuc2l6ZV94LFxyXG4gICAgICAgICAgICBzaXplX3k6ICAgIHRoaXMuc2l6ZV95LFxyXG4gICAgICAgICAgICBzaXplX3o6ICAgIHRoaXMuc2l6ZV96LFxyXG4gICAgICAgICAgICBtYXhfcm9vbTogIHRoaXMubWF4X3Jvb20sXHJcbiAgICAgICAgICAgIHJvb21fc2l6ZTogdGhpcy5yb29tX3NpemUsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShqPzogSlNPTl9NYXplSW5mbyk6IENfTWF6ZUluZm8ge1xyXG4gICAgICAgIGlmIChqID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoai5uYW1lICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5uYW1lICAgICAgPSBqLm5hbWU7XHJcbiAgICAgICAgaWYgKGoubWJuYW1lICAgICE9PSB1bmRlZmluZWQpIHRoaXMubWJuYW1lICAgID0gai5tYm5hbWU7XHJcbiAgICAgICAgaWYgKGoubHYgICAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubHYgICAgICAgID0gai5sdjtcclxuICAgICAgICBpZiAoai5zaXplX3ggICAgIT09IHVuZGVmaW5lZCkgdGhpcy5zaXplX3ggICAgPSBqLnNpemVfeDtcclxuICAgICAgICBpZiAoai5zaXplX3kgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5zaXplX3kgICAgPSBqLnNpemVfeTtcclxuICAgICAgICBpZiAoai5zaXplX3ogICAgIT09IHVuZGVmaW5lZCkgdGhpcy5zaXplX3ogICAgPSBqLnNpemVfejtcclxuICAgICAgICBpZiAoai5tYXhfcm9vbSAgIT09IHVuZGVmaW5lZCkgdGhpcy5tYXhfcm9vbSAgPSBqLm1heF9yb29tO1xyXG4gICAgICAgIGlmIChqLnJvb21fc2l6ZSAhPT0gdW5kZWZpbmVkKSB0aGlzLnJvb21fc2l6ZSA9IGoucm9vbV9zaXplO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGFsZXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiTWF6ZUluZm8gRGF0YTpcIlxyXG4gICAgICAgICAgICArIFwiXFxubmFtZSA6IFwiICAgICAgICsgKHRoaXMubmFtZSAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbm1ibmFtZTogXCIgICAgICArICh0aGlzLm1ibmFtZSAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sdiA6XCIgICAgICAgICAgKyAodGhpcy5sdiAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2l6ZV94OiBcIiAgICAgICsgKHRoaXMuc2l6ZV94ICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNpemVfeTogXCIgICAgICArICh0aGlzLnNpemVfeSAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zaXplX3o6IFwiICAgICAgKyAodGhpcy5zaXplX3ogICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubWF4X29mX3Jvb206IFwiICsgKHRoaXMubWF4X3Jvb20gID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnJvb21fc2l6ZTogXCIgICArICh0aGlzLnJvb21fc2l6ZSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfUG9pbnQgfSAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9DX1BvaW50XCI7XHJcbmltcG9ydCB7IENfUG9pbnREaXIsIEpTT05fUG9pbnREaXIgfSBmcm9tIFwiLi9DX1BvaW50RGlyXCI7XHJcbmltcG9ydCB7IElfQWJzdHJhY3QsIElfSlNPTl9VbmlxLCBKU09OX0FueSB9ICAgICBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcbmltcG9ydCB7IF9nZXRfdXVpZCB9ICAgICAgICAgICAgICAgICBmcm9tIFwiLi4vZF91dGwvRl9SYW5kXCI7XHJcbmltcG9ydCB7IFxyXG4gICAgQ19NYXplT2JqVmlldywgXHJcbiAgICBJX01hemVPYmpWaWV3LCBcclxuICAgIEpTT05fTWF6ZU9ialZpZXcgXHJcbn0gZnJvbSBcIi4vQ19NYXplT2JqVmlld1wiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9NYXplT2JqIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgY2xuYW1lPzogICAgc3RyaW5nLFxyXG4gICAgdW5pcV9pZD86ICAgc3RyaW5nLCBcclxuICAgIHBvcz86ICAgICAgIEpTT05fUG9pbnREaXIsXHJcbiAgICB2aWV3PzogICAgICBKU09OX01hemVPYmpWaWV3fHVuZGVmaW5lZCxcclxuICAgIHRocj86ICAgICAgIHN0cmluZywgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElfTWF6ZU9iaiBleHRlbmRzIElfSlNPTl9VbmlxLCBJX0Fic3RyYWN0IHtcclxuICAgIGdldF9wZDogICAgICgpPT5DX1BvaW50RGlyO1xyXG4gICAgd2l0aGluOiAgICAgKHA6IENfUG9pbnQpPT5ib29sZWFuO1xyXG4gICAgdmlldzogICAgICAgKCk9PklfTWF6ZU9ialZpZXd8dW5kZWZpbmVkO1xyXG4gICAgY2FuVGhyb3VnaDogKCk9PmJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX01hemVPYmogaW1wbGVtZW50cyBJX01hemVPYmoge1xyXG4gICAgcHJvdGVjdGVkIGNsbmFtZTogICAgc3RyaW5nID0gJ0NfTWF6ZU9iaic7XHJcblxyXG4gICAgcHJpdmF0ZSAgIHVuaXFfaWQ6ICAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHBvczogICAgICAgQ19Qb2ludERpcjtcclxuICAgIHByb3RlY3RlZCBteV92aWV3OiAgIElfTWF6ZU9ialZpZXd8dW5kZWZpbmVkO1xyXG4gICAgcHJvdGVjdGVkIGNhbl90aHI6ICAgYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5ld09iaihqPzogSlNPTl9NYXplT2JqfHVuZGVmaW5lZCk6IElfTWF6ZU9iaiB7XHJcbiAgICAgICAgaiA/Pz0ge307XHJcbiAgICAgICAgai5jbG5hbWUgPz89IENfTWF6ZU9iai5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgICAgIHN3aXRjaCAoai5jbG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBDX01hemVPYmouY29uc3RydWN0b3IubmFtZTogcmV0dXJuIG5ldyBDX01hemVPYmooaik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQ19NYXplT2JqKGopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG5ld09iaihqPzogSlNPTl9NYXplT2JqfHVuZGVmaW5lZCk6IElfTWF6ZU9iaiB7XHJcbiAgICAgICAgcmV0dXJuIENfTWF6ZU9iai5uZXdPYmooaik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVPYmp8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy51bmlxX2lkICAgID0gJ21hemVvYmpfJyArIF9nZXRfdXVpZCgpO1xyXG4gICAgICAgIHRoaXMuY2xuYW1lICAgICA9ICBDX01hemVPYmouY29uc3RydWN0b3IubmFtZTtcclxuICAgICAgICB0aGlzLnBvcyAgICAgICAgPSAgbmV3IENfUG9pbnREaXIoe3g6MCwgeTowLCB6OjAsIGQ6MH0pO1xyXG4gICAgICAgIHRoaXMubXlfdmlldyAgICA9ICB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5jYW5fdGhyICAgID0gIHRydWU7XHJcblxyXG4gICAgICAgIGlmIChqICE9PSB1bmRlZmluZWQpIHRoaXMuX19pbml0KGopO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX19pbml0KGo6IEpTT05fTWF6ZU9ianx1bmRlZmluZWQpOiBDX01hemVPYmoge1xyXG4gICAgICAgIGlmIChqID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoai51bmlxX2lkICE9PSB1bmRlZmluZWQpIHRoaXMudW5pcV9pZCAgID0gai51bmlxX2lkO1xyXG4gICAgICAgIGlmIChqLmNsbmFtZSAgIT09IHVuZGVmaW5lZCkgdGhpcy5jbG5hbWUgICAgPSBqLmNsbmFtZTtcclxuICAgICAgICBpZiAoai5wb3MgICAgICE9PSB1bmRlZmluZWQpIHRoaXMucG9zLmRlY29kZShqLnBvcyk7XHJcbiAgICAgICAgaWYgKGoudmlldyAgICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhqLnZpZXcpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubXlfdmlldyA/Pz0gQ19NYXplT2JqVmlldy5uZXdPYmooai52aWV3KTsgXHJcbiAgICAgICAgICAgIH0gZWxzZSB0aGlzLm15X3ZpZXcgID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoai5jYW5fdGhyICE9PSB1bmRlZmluZWQpIHRoaXMuY2FuX3RociA9IGouY2FuX3RociAhPT0gJzAnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG59XHJcblxyXG4gICAgcHVibGljIHVpZCgpOiBzdHJpbmcge3JldHVybiB0aGlzLnVuaXFfaWR9XHJcblxyXG4gICAgcHVibGljIHZpZXcoKTogSV9NYXplT2JqVmlld3x1bmRlZmluZWQge3JldHVybiB0aGlzLm15X3ZpZXd9XHJcbiAgICBwdWJsaWMgc2V0Vmlldyh2aWV3OiBJX01hemVPYmpWaWV3fHVuZGVmaW5lZCk6IHZvaWQge3RoaXMubXlfdmlldyA9IHZpZXd9XHJcblxyXG4gICAgcHVibGljIGNhblRocm91Z2goKTogYm9vbGVhbiB7cmV0dXJuIHRoaXMuY2FuX3Rocn1cclxuICAgIHB1YmxpYyBzZXRUaHJvdWdoKHRocjogYm9vbGVhbik6IGJvb2xlYW4ge3JldHVybiB0aGlzLmNhbl90aHIgPSB0aHJ9XHJcblxyXG4gICAgcHVibGljIGdldF9wZCgpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICByZXR1cm4gbmV3IENfUG9pbnREaXIodGhpcy5wb3MpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wZChwOiBDX1BvaW50RGlyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBwO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHdpdGhpbihwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zLndpdGhpbihwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTWF6ZU9iaiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdW5pcV9pZDogdGhpcy51bmlxX2lkLFxyXG4gICAgICAgICAgICBjbG5hbWU6ICB0aGlzLmNsbmFtZSxcclxuICAgICAgICAgICAgcG9zOiAgICAgdGhpcy5wb3MuZW5jb2RlKCksXHJcbiAgICAgICAgICAgIHZpZXc6ICAgIHRoaXMubXlfdmlldz8uZW5jb2RlKCkgPz8ge30sXHJcbiAgICAgICAgICAgIGNhbl90aHI6IHRoaXMuY2FuX3RociA/ICcxJyA6ICcwJyxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlY29kZShqOiBKU09OX01hemVPYmp8dW5kZWZpbmVkKTogSV9NYXplT2JqIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX2luaXQoaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZShqOiBKU09OX01hemVPYmp8dW5kZWZpbmVkKTogSV9NYXplT2JqIHtcclxuICAgICAgICByZXR1cm4gQ19NYXplT2JqLm5ld09iaihqKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBJX0Fic3RyYWN0LCBKU09OX0FueSB9IGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuaW1wb3J0IHsgVF9XYWxsIH0gICAgICAgICAgICAgICBmcm9tIFwiLi4vZF9tZGwvQ19XYWxsXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJX01hemVPYmpWaWV3IGV4dGVuZHMgSV9BYnN0cmFjdCB7XHJcbiAgICAvLyDooajnpLrplqLkv4IoMkRwcmUpLi9DX1dhbGxcclxuICAgIGxheWVyOiAgICgpPT5udW1iZXI7XHJcbiAgICBsZXR0ZXI6ICAoKT0+c3RyaW5nfG51bGw7IC8vIG51bGw6IOimi+OBiOOBquOBhOOAgeS9leOCguOBquOBhFxyXG5cclxuICAgIC8vIOihqOekuumWouS/gigzRClcclxuICAgIGNhblNob3c6ICgpPT5ib29sZWFuO1xyXG4gICAgZHJvdzNEOiAgKGZyb3Q6IFRfV2FsbCwgYmFjazogVF9XYWxsKT0+dm9pZDtcclxuXHJcbiAgICBwYWRfdDogICAoKT0+bnVtYmVyOyAvL+S4iuWBtOOBruepuuOBjSjlibLlkIg6IDDjgYvjgokxKSBcclxuICAgIHBhZF9kOiAgICgpPT5udW1iZXI7IC8v5bqK5YG044Gu56m644GNKOWJsuWQiDogMOOBi+OCiTEpIFxyXG4gICAgcGFkX3M6ICAgKCk9Pm51bWJlcjsgLy/mqKrlgbTjga7nqbrjgY0o5Ymy5ZCIOiAw44GL44KJMSkgXHJcbiAgICBjb2xfZjogICAoKT0+c3RyaW5nfG51bGw7IC8v5q2j6Z2i44Gu6ImyKENTU+OCq+ODqeODvCnjgIJudWxs44Gv6YCP5piOXHJcbiAgICBjb2xfYjogICAoKT0+c3RyaW5nfG51bGw7IC8v6IOM6Z2i44Gu6ImyKENTU+OCq+ODqeODvCnjgIJudWxs44Gv6YCP5piOXHJcbiAgICBjb2xfczogICAoKT0+c3RyaW5nfG51bGw7IC8v5qiq5YG044Gu6ImyKENTU+OCq+ODqeODvCnjgIJudWxs44Gv6YCP5piOXHJcbiAgICBjb2xfdDogICAoKT0+c3RyaW5nfG51bGw7IC8v5LiK6YOo44Gu6ImyKENTU+OCq+ODqeODvCnjgIJudWxs44Gv6YCP5piO44CC44KE44KE44GT44GX44GE44GM44CB54mp5L2T44Gu5bqV6Z2i44Gr5b2T44Gf44KLXHJcbiAgICBjb2xfZDogICAoKT0+c3RyaW5nfG51bGw7IC8v5LiL6YOo44Gu6ImyKENTU+OCq+ODqeODvCnjgIJudWxs44Gv6YCP5piO44CC44KE44KE44GT44GX44GE44GM44CB54mp5L2T44Gu5aSp5LqV44Gr5b2T44Gf44KLXHJcbiAgICBjb2xfbDogICAoKT0+c3RyaW5nfG51bGw7IC8v44Op44Kk44Oz44Gu6ImyKENTU+OCq+ODqeODvClcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX01hemVPYmpWaWV3IGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgY2xuYW1lPzogc3RyaW5nLFxyXG4gICAgbGF5ZXI/OiAgbnVtYmVyLFxyXG4gICAgbGV0dGVyPzogc3RyaW5nLFxyXG4gICAgc2hvdzNEPzogc3RyaW5nLFxyXG4gICAgcGFkX3Q/OiAgbnVtYmVyLCAvLyDjgqrjg5bjgrjjgqfjgq/jg4jkuIrpg6jjga7pmpnplpPjga7libLlkIgoMC4wIOOBi+OCiSAxLjApIFxyXG4gICAgcGFkX2Q/OiAgbnVtYmVyLCAvLyDjgqrjg5bjgrjjgqfjgq/jg4jkuIvpg6jjga7pmpnplpPjga7libLlkIgoMC4wIOOBi+OCiSAxLjApIFxyXG4gICAgcGFkX3M/OiAgbnVtYmVyLCAvLyDjgqrjg5bjgrjjgqfjgq/jg4jlkajlm7Ljga7pmpnplpPjga7libLlkIgoMC4wIOOBi+OCiSAxLjApIFxyXG4gICAgY29sX2Y/OiAgc3RyaW5nfG51bGwsIC8vIOOCquODluOCuOOCp+OCr+ODiOato+mdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIGNvbF9iPzogIHN0cmluZ3xudWxsLCAvLyDjgqrjg5bjgrjjgqfjgq/jg4jmraPpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBjb2xfcz86ICBzdHJpbmd8bnVsbCwgLy8g44Kq44OW44K444Kn44Kv44OI5YG06Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgY29sX3Q/OiAgc3RyaW5nfG51bGwsIC8vIOOCquODluOCuOOCp+OCr+ODiOS4iumdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIGNvbF9kPzogIHN0cmluZ3xudWxsLCAvLyDjgqrjg5bjgrjjgqfjgq/jg4jlupXpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBjb2xfbD86ICBzdHJpbmd8bnVsbCwgLy8g44Kq44OW44K444Kn44Kv44OI44Gu57ea44GuQ1NT44Kr44Op44O8IFxyXG59XHJcblxyXG50eXBlIFRfeHkgICA9IHt4OiBudW1iZXIsIHk6IG51bWJlcn1cclxudHlwZSBUX1JlY3QgPSB7dGw6IFRfeHksIHRyOiBUX3h5LCBkbDogVF94eSwgZHI6IFRfeHl9O1xyXG5cclxuZXhwb3J0IGNsYXNzIENfTWF6ZU9ialZpZXcgaW1wbGVtZW50cyBJX01hemVPYmpWaWV3IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgY29uM0Q/OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldF9jb250ZXh0M0QoKTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfHVuZGVmaW5lZCB7cmV0dXJuIHRoaXM/LmNvbjNEfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRfY29udGV4dDNEKGNvbjNEPzogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7dGhpcy5jb24zRCA9IGNvbjNEfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbmV3T2JqKGo/OiBKU09OX01hemVPYmpWaWV3fHVuZGVmaW5lZCk6IElfTWF6ZU9ialZpZXcge1xyXG4gICAgICAgIGogPz89IHt9O1xyXG4gICAgICAgIGouY2xuYW1lID8/PSBDX01hemVPYmpWaWV3LmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICAgICAgc3dpdGNoIChqLmNsbmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIENfTWF6ZU9ialZpZXcuY29uc3RydWN0b3IubmFtZTogICAgIHJldHVybiBuZXcgQ19NYXplT2JqVmlldyhqKTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybiBuZXcgQ19NYXplT2JqVmlldyhqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBuZXdPYmooaj86IEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkKTogSV9NYXplT2JqVmlldyB7XHJcbiAgICAgICAgcmV0dXJuIENfTWF6ZU9ialZpZXcubmV3T2JqKGopO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNsbmFtZTogICAgc3RyaW5nID0gJ0NfTWF6ZU9ialZpZXcnO1xyXG5cclxuICAgIHByaXZhdGUgbXlfbGF5ZXI6ICBudW1iZXI7ICAgICAgLy8gMkTooajnpLrjga7mmYLjga5DU1Pjg6zjgqTjg6Tjg7zjgILlkIzkvY3nva7jga7jgqrjg5bjgrjjgqfjga7lhoXjgZPjga7lgKTjgYzlpKfjgY3jgYTnianjgYzooajnpLrjgZXjgozjgotcclxuICAgIHByaXZhdGUgbXlfbGV0dGVyOiBzdHJpbmd8bnVsbDsgLy8gMkTooajnpLrjga7mmYLjga7lhajop5LmloflrZfjgIJudWxs44Gq44KJ6YCP5piOXHJcblxyXG4gICAgcHJpdmF0ZSBteV9zaG93M0Q6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIG15X3BhZF90OiAgbnVtYmVyOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jkuIrpg6jjga7pmpnplpPjga7libLlkIgoMC4wIOOBi+OCiSAxLjApIFxyXG4gICAgcHJpdmF0ZSBteV9wYWRfZDogIG51bWJlcjsgLy8g44Kq44OW44K444Kn44Kv44OI5LiL6YOo44Gu6ZqZ6ZaT44Gu5Ymy5ZCIKDAuMCDjgYvjgokgMS4wKSBcclxuICAgIHByaXZhdGUgbXlfcGFkX3M6ICBudW1iZXI7IC8vIOOCquODluOCuOOCp+OCr+ODiOWRqOWbsuOBrumamemWk+OBruWJsuWQiCgwLjAg44GL44KJIDEuMCkgXHJcblxyXG4gICAgcHJpdmF0ZSBteV9jb2xfZjogIHN0cmluZ3xudWxsOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jmraPpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBwcml2YXRlIG15X2NvbF9iOiAgc3RyaW5nfG51bGw7IC8vIOOCquODluOCuOOCp+OCr+ODiOato+mdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIHByaXZhdGUgbXlfY29sX3M6ICBzdHJpbmd8bnVsbDsgLy8g44Kq44OW44K444Kn44Kv44OI5YG06Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgcHJpdmF0ZSBteV9jb2xfdDogIHN0cmluZ3xudWxsOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jkuIrpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBwcml2YXRlIG15X2NvbF9kOiAgc3RyaW5nfG51bGw7IC8vIOOCquODluOCuOOCp+OCr+ODiOW6lemdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIHByaXZhdGUgbXlfY29sX2w6ICBzdHJpbmd8bnVsbDsgLy8g44Kq44OW44K444Kn44Kv44OI44Gu57ea44GuQ1NT44Kr44Op44O8IFxyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmNsbmFtZSAgICAgPSAgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG5cclxuICAgICAgICB0aGlzLm15X2xheWVyICAgPSAgLTI7XHJcbiAgICAgICAgdGhpcy5teV9sZXR0ZXIgID0gIG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMubXlfcGFkX3QgICA9ICAwLjA7XHJcbiAgICAgICAgdGhpcy5teV9wYWRfZCAgID0gIDAuMDtcclxuICAgICAgICB0aGlzLm15X3BhZF9zICAgPSAgMC4wO1xyXG5cclxuICAgICAgICB0aGlzLm15X3Nob3czRCAgPSAgdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5teV9jb2xfZiAgID0gJyNmOGY4ZjgnOyBcclxuICAgICAgICB0aGlzLm15X2NvbF9iICAgPSAnI2FhYWFhYSc7IFxyXG4gICAgICAgIHRoaXMubXlfY29sX3MgICA9ICcjZGRkZGRkJzsgXHJcbiAgICAgICAgdGhpcy5teV9jb2xfdCAgID0gJyNmZmZmZmYnOyBcclxuICAgICAgICB0aGlzLm15X2NvbF9kICAgPSAnI2NjY2NjYyc7IFxyXG4gICAgICAgIHRoaXMubXlfY29sX2wgICA9ICcjMzMzMzMzJzsgXHJcblxyXG4gICAgICAgIGlmIChqICE9PSB1bmRlZmluZWQpIHRoaXMuX19pbml0KGopO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfX2luaXQoajogSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQpOiBJX01hemVPYmpWaWV3IHtcclxuICAgICAgICBpZiAoaiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGouY2xuYW1lICAhPT0gdW5kZWZpbmVkKSB0aGlzLmNsbmFtZSAgICA9IGouY2xuYW1lO1xyXG4gICAgICAgIGlmIChqLmxheWVyICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9sYXllciAgPSBqLmxheWVyO1xyXG4gICAgICAgIGlmIChqLmxldHRlciAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9sZXR0ZXIgPSBqLmxldHRlciAhPT0gJycgID8gai5sZXR0ZXIgOiBudWxsOyBcclxuICAgICAgICBpZiAoai5wYWRfdCAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfcGFkX3QgID0gai5wYWRfdDsgXHJcbiAgICAgICAgaWYgKGoucGFkX2QgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X3BhZF9kICA9IGoucGFkX2Q7IFxyXG4gICAgICAgIGlmIChqLnBhZF9zICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9wYWRfcyAgPSBqLnBhZF9zOyBcclxuICAgICAgICBpZiAoai5zaG93M0QgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfc2hvdzNEID0gai5zaG93M0QgIT09ICcwJyA/IHRydWUgICAgIDogZmFsc2U7IFxyXG4gICAgICAgIGlmIChqLmNvbF9mICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9jb2xfZiAgPSBqLmNvbF9mICAhPT0gJycgID8gai5jb2xfZiAgOiBudWxsOyBcclxuICAgICAgICBpZiAoai5jb2xfYiAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfY29sX2IgID0gai5jb2xfYiAgIT09ICcnICA/IGouY29sX2IgIDogbnVsbDsgXHJcbiAgICAgICAgaWYgKGouY29sX3MgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2NvbF9zICA9IGouY29sX3MgICE9PSAnJyAgPyBqLmNvbF9zICA6IG51bGw7IFxyXG4gICAgICAgIGlmIChqLmNvbF90ICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9jb2xfdCAgPSBqLmNvbF90ICAhPT0gJycgID8gai5jb2xfdCAgOiBudWxsOyBcclxuICAgICAgICBpZiAoai5jb2xfZCAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfY29sX2QgID0gai5jb2xfZCAgIT09ICcnICA/IGouY29sX2QgIDogbnVsbDsgXHJcbiAgICAgICAgaWYgKGouY29sX2wgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2NvbF9sICA9IGouY29sX2wgICE9PSAnJyAgPyBqLmNvbF9sICA6IG51bGw7IFxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGF5ZXIoKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5teV9sYXllcjt9XHJcbiAgICBwdWJsaWMgc2V0X2xheWVyKGxheWVyOiBudW1iZXIpIHt0aGlzLm15X2xheWVyID0gbGF5ZXJ9XHJcblxyXG4gICAgcHVibGljIGxldHRlcigpOiAgc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2xldHRlcn1cclxuICAgIHB1YmxpYyBzZXRfbGV0dGVyKGxldHRlcjogc3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfbGV0dGVyID0gbGV0dGVyfVxyXG5cclxuICAgIHB1YmxpYyBjYW5TaG93KCk6IGJvb2xlYW4ge3JldHVybiB0aGlzLm15X3Nob3czRH07XHJcbiAgICBwdWJsaWMgc2V0U2hvdyhjYW5fc2hvdzogYm9vbGVhbik6IGJvb2xlYW4ge3JldHVybiB0aGlzLm15X3Nob3czRCA9IGNhbl9zaG93fTtcclxuXHJcbiAgICBwdWJsaWMgcGFkX3QoKTogIG51bWJlciB7cmV0dXJuIHRoaXMubXlfcGFkX3R9XHJcbiAgICBwdWJsaWMgcGFkX2QoKTogIG51bWJlciB7cmV0dXJuIHRoaXMubXlfcGFkX2R9XHJcbiAgICBwdWJsaWMgcGFkX3MoKTogIG51bWJlciB7cmV0dXJuIHRoaXMubXlfcGFkX3N9XHJcbiAgICBwdWJsaWMgc2V0X3BhZF90KHBhZF90OiBudW1iZXIpOiBudW1iZXIge3JldHVybiB0aGlzLm15X3BhZF90ID0gdGhpcy5teV9wYWRfZCArIHBhZF90IDwgMS4wID8gcGFkX3QgOiAwLjk5IC0gdGhpcy5teV9wYWRfZH1cclxuICAgIHB1YmxpYyBzZXRfcGFkX2QocGFkX2Q6IG51bWJlcik6IG51bWJlciB7cmV0dXJuIHRoaXMubXlfcGFkX2QgPSB0aGlzLm15X3BhZF90ICsgcGFkX2QgPCAxLjAgPyBwYWRfZCA6IDAuOTkgLSB0aGlzLm15X3BhZF90fVxyXG4gICAgcHVibGljIHNldF9wYWRfcyhwYWRfczogbnVtYmVyKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5teV9wYWRfcyA9IHBhZF9zfVxyXG5cclxuICAgIHB1YmxpYyBjb2xfZigpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX2Z9IFxyXG4gICAgcHVibGljIGNvbF9iKCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfYn0gXHJcbiAgICBwdWJsaWMgY29sX3MoKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9zfSBcclxuICAgIHB1YmxpYyBjb2xfdCgpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX3R9IFxyXG4gICAgcHVibGljIGNvbF9kKCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfZH0gXHJcbiAgICBwdWJsaWMgY29sX2woKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9sfSBcclxuICAgIHB1YmxpYyBzZXRfY29sX2YoY29sX2Y6IHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9mID0gY29sX2Z9IFxyXG4gICAgcHVibGljIHNldF9jb2xfYihjb2xfYjogc3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX2IgPSBjb2xfYn0gXHJcbiAgICBwdWJsaWMgc2V0X2NvbF9zKGNvbF9zOiBzdHJpbmd8bnVsbCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfcyA9IGNvbF9zfSBcclxuICAgIHB1YmxpYyBzZXRfY29sX3QoY29sX3Q6IHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF90ID0gY29sX3R9IFxyXG4gICAgcHVibGljIHNldF9jb2xfZChjb2xfZDogc3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX2QgPSBjb2xfZH0gXHJcbiAgICBwdWJsaWMgc2V0X2NvbF9sKGNvbF9sOiBzdHJpbmd8bnVsbCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfbCA9IGNvbF9sfSBcclxuXHJcblxyXG4gICAgcHVibGljIGRyb3czRChmcm90OiBUX1dhbGwsIGJhY2s6IFRfV2FsbCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZHJvd19vYmpfYmFjayAgICAgIChmcm90LCBiYWNrKTtcclxuICAgICAgICB0aGlzLmRyb3dfb2JqX2Rvd24gICAgICAoZnJvdCwgYmFjayk7XHJcbiAgICAgICAgdGhpcy5kcm93X29ial90b3AgICAgICAgKGZyb3QsIGJhY2spO1xyXG4gICAgICAgIHRoaXMuZHJvd19vYmpfcmlnaHRfc2lkZShmcm90LCBiYWNrKTtcclxuICAgICAgICB0aGlzLmRyb3dfb2JqX2xlZnRfc2lkZSAoZnJvdCwgYmFjayk7XHJcbiAgICAgICAgdGhpcy5kcm93X29ial9mcm9udCAgICAgKGZyb3QsIGJhY2spO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkcm93X29ial9kb3duKFxyXG4gICAgICAgIGZyb3Q6ICBUX1dhbGwsIFxyXG4gICAgICAgIGJhY2s6ICBUX1dhbGwsIFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblNob3coKSB8fCB0aGlzLmNvbF90KCkgPT09IG51bGwpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5wYWRfcygpIDw9IDAuMCAmJiB0aGlzLnBhZF90KCkgPj0gMS4wKSB7XHJcbiAgICAgICAgICAgIGRyb3dfY2VsbF9mbG9vcihmcm90LCBiYWNrLCB0aGlzLmNvbF90KCkgPz8gJyM2NjY2ZmYnLCB0aGlzLmNvbF9sKCkgPz8gJyM5OTk5ZmYnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IG8gPSBfX2NhbGNfcGFkZGluZ19vYmoodGhpcywgZnJvdCwgYmFjayk7XHJcbiAgICAgICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgICAgICB0bDogby5mZGwsXHJcbiAgICAgICAgICAgIHRyOiBvLmZkcixcclxuICAgICAgICAgICAgZHI6IG8uYmRyLFxyXG4gICAgICAgICAgICBkbDogby5iZGwsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRyb3dfY2VsbChyZWN0LCB0aGlzLmNvbF90KCksIHRoaXMuY29sX2woKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcm93X29ial90b3AoXHJcbiAgICAgICAgZnJvdDogIFRfV2FsbCwgXHJcbiAgICAgICAgYmFjazogIFRfV2FsbCwgXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuU2hvdygpIHx8IHRoaXMuY29sX2QoKSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnBhZF9zKCkgPD0gMC4wICYmIHRoaXMucGFkX2QoKSA+PSAxLjApIHtcclxuICAgICAgICAgICAgZHJvd19jZWxsX2NlaWxpbmcoZnJvdCwgYmFjaywgdGhpcy5jb2xfZCgpID8/ICcjYWFhYWFhJywgdGhpcy5jb2xfbCgpID8/ICcjOTk5OWZmJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjb25zdCBvID0gX19jYWxjX3BhZGRpbmdfb2JqKHRoaXMsIGZyb3QsIGJhY2spO1xyXG4gICAgICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICAgICAgdGw6IG8uZnRsLFxyXG4gICAgICAgICAgICB0cjogby5mdHIsXHJcbiAgICAgICAgICAgIGRyOiBvLmJ0cixcclxuICAgICAgICAgICAgZGw6IG8uYnRsLFxyXG4gICAgICAgIH1cclxuICAgICAgICBkcm93X2NlbGwocmVjdCwgdGhpcy5jb2xfZCgpLCB0aGlzLmNvbF9sKCkpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkcm93X29ial9mcm9udChcclxuICAgICAgICBmcm90OiAgVF9XYWxsLCBcclxuICAgICAgICBiYWNrOiAgVF9XYWxsLCBcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5TaG93KCkgfHwgdGhpcy5jb2xfZigpID09PSBudWxsKSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBjb25zdCBvID0gX19jYWxjX3BhZGRpbmdfb2JqKHRoaXMsIGZyb3QsIGJhY2spO1xyXG4gICAgICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICAgICAgdGw6IG8uZnRsLCBcclxuICAgICAgICAgICAgdHI6IG8uZnRyLCBcclxuICAgICAgICAgICAgZHI6IG8uZmRyLCBcclxuICAgICAgICAgICAgZGw6IG8uZmRsLCBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBkcm93X2NlbGwocmVjdCwgdGhpcy5jb2xfZigpLCB0aGlzLmNvbF9sKCkpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkcm93X29ial9iYWNrKFxyXG4gICAgICAgIGZyb3Q6ICBUX1dhbGwsIFxyXG4gICAgICAgIGJhY2s6ICBUX1dhbGwsIFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblNob3coKSB8fCB0aGlzLmNvbF9iKCkgPT09IG51bGwpIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IG8gPSBfX2NhbGNfcGFkZGluZ19vYmoodGhpcywgZnJvdCwgYmFjayk7XHJcbiAgICAgICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgICAgICB0bDogby5idGwsIFxyXG4gICAgICAgICAgICB0cjogby5idHIsIFxyXG4gICAgICAgICAgICBkcjogby5iZHIsIFxyXG4gICAgICAgICAgICBkbDogby5iZGwsIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGRyb3dfY2VsbChyZWN0LCB0aGlzLmNvbF9iKCksIHRoaXMuY29sX2woKSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRyb3dfb2JqX2xlZnRfc2lkZShcclxuICAgICAgICBmcm90OiAgVF9XYWxsLCBcclxuICAgICAgICBiYWNrOiAgVF9XYWxsLCBcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5TaG93KCkgfHwgdGhpcy5jb2xfcygpID09PSBudWxsKSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBjb25zdCBvID0gX19jYWxjX3BhZGRpbmdfb2JqKHRoaXMsIGZyb3QsIGJhY2spO1xyXG4gICAgICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICAgICAgdGw6IG8uYnRsLFxyXG4gICAgICAgICAgICB0cjogby5mdGwsXHJcbiAgICAgICAgICAgIGRyOiBvLmZkbCxcclxuICAgICAgICAgICAgZGw6IG8uYmRsLFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGRyb3dfY2VsbChyZWN0LCB0aGlzLmNvbF9zKCksIHRoaXMuY29sX2woKSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRyb3dfb2JqX3JpZ2h0X3NpZGUoXHJcbiAgICAgICAgZnJvdDogIFRfV2FsbCwgXHJcbiAgICAgICAgYmFjazogIFRfV2FsbCwgXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuU2hvdygpIHx8IHRoaXMuY29sX3MoKSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbyA9IF9fY2FsY19wYWRkaW5nX29iaih0aGlzLCBmcm90LCBiYWNrKTtcclxuICAgICAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgICAgIHRsOiBvLmZ0cixcclxuICAgICAgICAgICAgdHI6IG8uYnRyLFxyXG4gICAgICAgICAgICBkcjogby5iZHIsXHJcbiAgICAgICAgICAgIGRsOiBvLmZkcixcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBkcm93X2NlbGwocmVjdCwgdGhpcy5jb2xfcygpLCB0aGlzLmNvbF9sKCkpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX01hemVPYmpWaWV3IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjbmFtZTogICB0aGlzLmNsbmFtZSxcclxuICAgICAgICAgICAgbGF5ZXI6ICAgdGhpcy5teV9sYXllcixcclxuICAgICAgICAgICAgbGV0dGVyOiAgdGhpcy5teV9sZXR0ZXIgPz8gJycsXHJcbiAgICAgICAgICAgIHBhZF90OiAgIHRoaXMubXlfcGFkX3QsIFxyXG4gICAgICAgICAgICBwYWRfZDogICB0aGlzLm15X3BhZF9kLCBcclxuICAgICAgICAgICAgcGFkX3M6ICAgdGhpcy5teV9wYWRfcywgXHJcbiAgICAgICAgICAgIHNob3czRDogIHRoaXMuY2FuU2hvdygpID8gJzEnIDogJzAnLFxyXG4gICAgICAgICAgICBjb2xfZjogICB0aGlzLm15X2NvbF9mID8/ICcnLCAgXHJcbiAgICAgICAgICAgIGNvbF9iOiAgIHRoaXMubXlfY29sX2IgPz8gJycsICBcclxuICAgICAgICAgICAgY29sX3M6ICAgdGhpcy5teV9jb2xfcyA/PyAnJywgXHJcbiAgICAgICAgICAgIGNvbF90OiAgIHRoaXMubXlfY29sX3QgPz8gJycsIFxyXG4gICAgICAgICAgICBjb2xfZDogICB0aGlzLm15X2NvbF9kID8/ICcnLCBcclxuICAgICAgICAgICAgY29sX2w6ICAgdGhpcy5teV9jb2xfbCA/PyAnJywgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShqOiBKU09OX01hemVPYmpWaWV3fHVuZGVmaW5lZCk6IElfTWF6ZU9ialZpZXcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9faW5pdChqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVjb2RlKGo6IEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkKTogSV9NYXplT2JqVmlldyB7XHJcbiAgICAgICAgcmV0dXJuIENfTWF6ZU9ialZpZXcubmV3T2JqKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIF9fY2FsY19wYWRkaW5nX29iaihcclxuICAgIG9iajogICBJX01hemVPYmpWaWV3LFxyXG4gICAgZnJvdDogIFRfV2FsbCwgXHJcbiAgICBiYWNrOiAgVF9XYWxsLCBcclxuKToge1xyXG4gICAgLy8g6K2Y5Yil5a2Q44Gu5oSP5ZGzXHJcbiAgICAvLyDlt6bnq6/vvJrliY3lvozjga7ljLrliKXjgIBmOuWJjemdouOAgGI66IOM6Z2iXHJcbiAgICAvLyDkuK3lpK7vvJrkuIrkuIvjga7ljLrliKXjgIB0OuS4iui+uuOAgGQ65LiL6L66XHJcbiAgICAvLyDlj7Pnq6/vvJrlt6blj7Pjga7ljLrliKXjgIBsOuW3puWBtOOAgHI65Y+z5YG0XHJcbiAgICBmdGw6VF94eSwgZnRyOlRfeHksIGZkcjpUX3h5LCBmZGw6VF94eSwgXHJcbiAgICBidGw6VF94eSwgYnRyOlRfeHksIGJkcjpUX3h5LCBiZGw6VF94eSwgXHJcbn0ge1xyXG4gICAgY29uc3QgcmVjdF9mcm90ID0gZnJvdDtcclxuICAgIGNvbnN0IHJlY3RfYmFjayA9IGJhY2s7XHJcblxyXG4gICAgY29uc3QgcmF0aW9fWCAgID0gb2JqLnBhZF9zKCkgLyAyLjA7XHJcbiAgICBjb25zdCByYXRpb19UICAgPSBvYmoucGFkX3QoKTtcclxuICAgIGNvbnN0IHJhdGlvX0QgICA9IG9iai5wYWRfZCgpO1xyXG5cclxuICAgIGNvbnN0IGZyb3RfcGFkX1ggID0gTWF0aC5hYnMocmVjdF9mcm90Lm1heF94IC0gcmVjdF9mcm90Lm1pbl94KSAqIHJhdGlvX1g7XHJcbiAgICBjb25zdCBiYWNrX3BhZF9YICA9IE1hdGguYWJzKHJlY3RfYmFjay5tYXhfeCAtIHJlY3RfYmFjay5taW5feCkgKiByYXRpb19YO1xyXG5cclxuICAgIGNvbnN0IGZyb3RfcGFkX1QgID0gTWF0aC5hYnMocmVjdF9mcm90Lm1heF95IC0gcmVjdF9mcm90Lm1pbl95KSAqIHJhdGlvX1Q7XHJcbiAgICBjb25zdCBiYWNrX3BhZF9UICA9IE1hdGguYWJzKHJlY3RfYmFjay5tYXhfeSAtIHJlY3RfYmFjay5taW5feSkgKiByYXRpb19UO1xyXG5cclxuICAgIGNvbnN0IGZyb3RfcGFkX0QgID0gTWF0aC5hYnMocmVjdF9mcm90Lm1heF95IC0gcmVjdF9mcm90Lm1pbl95KSAqIHJhdGlvX0Q7XHJcbiAgICBjb25zdCBiYWNrX3BhZF9EICA9IE1hdGguYWJzKHJlY3RfYmFjay5tYXhfeSAtIHJlY3RfYmFjay5taW5feSkgKiByYXRpb19EO1xyXG5cclxuICAgIC8vIOODkeODh+OCo+ODs+OCsOioreWumuW+jOOBrlhZ5bqn5qiZ44KS6KiI566X44GZ44KL44Gf44KB44GrXHJcbiAgICAvLyDlv4XopoHjgarnt5rliIbjga7kvY3nva7msbrjgoHjgpLjgZnjgotcclxuICAgIGNvbnN0IGZyb3RfdG9wX2xmdCA9IHt4OiByZWN0X2Zyb3QubWluX3ggKyBmcm90X3BhZF9YLCB5OiByZWN0X2Zyb3QubWluX3kgKyBmcm90X3BhZF9UfVxyXG4gICAgY29uc3QgZnJvdF90b3Bfcmd0ID0ge3g6IHJlY3RfZnJvdC5tYXhfeCAtIGZyb3RfcGFkX1gsIHk6IHJlY3RfZnJvdC5taW5feSArIGZyb3RfcGFkX1R9XHJcbiAgICBjb25zdCBmcm90X2R3bl9sZnQgPSB7eDogcmVjdF9mcm90Lm1pbl94ICsgZnJvdF9wYWRfWCwgeTogcmVjdF9mcm90Lm1heF95IC0gZnJvdF9wYWRfRH1cclxuICAgIGNvbnN0IGZyb3RfZHduX3JndCA9IHt4OiByZWN0X2Zyb3QubWF4X3ggLSBmcm90X3BhZF9YLCB5OiByZWN0X2Zyb3QubWF4X3kgLSBmcm90X3BhZF9EfVxyXG5cclxuICAgIGNvbnN0IGJhY2tfdG9wX2xmdCA9IHt4OiByZWN0X2JhY2subWluX3ggKyBiYWNrX3BhZF9YLCB5OiByZWN0X2JhY2subWluX3kgKyBiYWNrX3BhZF9UfVxyXG4gICAgY29uc3QgYmFja190b3Bfcmd0ID0ge3g6IHJlY3RfYmFjay5tYXhfeCAtIGJhY2tfcGFkX1gsIHk6IHJlY3RfYmFjay5taW5feSArIGJhY2tfcGFkX1R9XHJcbiAgICBjb25zdCBiYWNrX2R3bl9sZnQgPSB7eDogcmVjdF9iYWNrLm1pbl94ICsgYmFja19wYWRfWCwgeTogcmVjdF9iYWNrLm1heF95IC0gYmFja19wYWRfRH1cclxuICAgIGNvbnN0IGJhY2tfZHduX3JndCA9IHt4OiByZWN0X2JhY2subWF4X3ggLSBiYWNrX3BhZF9YLCB5OiByZWN0X2JhY2subWF4X3kgLSBiYWNrX3BhZF9EfVxyXG5cclxuICAgIGxldCBmdGwgPSBfX2NhbGNfcGFkZGluZ194eShmcm90X3RvcF9sZnQsIGJhY2tfdG9wX2xmdCwgcmF0aW9fWCk7XHJcbiAgICBsZXQgZnRyID0gX19jYWxjX3BhZGRpbmdfeHkoZnJvdF90b3Bfcmd0LCBiYWNrX3RvcF9yZ3QsIHJhdGlvX1gpO1xyXG4gICAgbGV0IGZkbCA9IF9fY2FsY19wYWRkaW5nX3h5KGZyb3RfZHduX2xmdCwgYmFja19kd25fbGZ0LCByYXRpb19YKTtcclxuICAgIGxldCBmZHIgPSBfX2NhbGNfcGFkZGluZ194eShmcm90X2R3bl9yZ3QsIGJhY2tfZHduX3JndCwgcmF0aW9fWCk7XHJcblxyXG4gICAgbGV0IGJ0bCA9IF9fY2FsY19wYWRkaW5nX3h5KGJhY2tfdG9wX2xmdCwgZnJvdF90b3BfbGZ0LCByYXRpb19YKTtcclxuICAgIGxldCBidHIgPSBfX2NhbGNfcGFkZGluZ194eShiYWNrX3RvcF9yZ3QsIGZyb3RfdG9wX3JndCwgcmF0aW9fWCk7XHJcbiAgICBsZXQgYmRsID0gX19jYWxjX3BhZGRpbmdfeHkoYmFja19kd25fbGZ0LCBmcm90X2R3bl9sZnQsIHJhdGlvX1gpO1xyXG4gICAgbGV0IGJkciA9IF9fY2FsY19wYWRkaW5nX3h5KGJhY2tfZHduX3JndCwgZnJvdF9kd25fcmd0LCByYXRpb19YKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZ0bDogZnRsLCBmdHI6IGZ0cixcclxuICAgICAgICBmZGw6IGZkbCwgZmRyOiBmZHIsXHJcbiAgICAgICAgYnRsOiBidGwsIGJ0cjogYnRyLFxyXG4gICAgICAgIGJkbDogYmRsLCBiZHI6IGJkcixcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBfX2NhbGNfcGFkZGluZ194eShmcm90OiBUX3h5LCBiYWNrOiBUX3h5LCByYXRpbzogbnVtYmVyKTogVF94eSB7XHJcbiAgICAgICAgLy8g57ea5YiGKEF4ICsgQiA9IHkp44Gu5pa556iL5byP44Gu5L+C5pWw44KS5rGC44KB44KLXHJcbiAgICAgICAgY29uc3QgQSA9IChmcm90LnkgLSBiYWNrLnkpIC8gKGZyb3QueCAtIGJhY2sueCk7XHJcbiAgICAgICAgY29uc3QgQiA9ICBmcm90LnkgLSBBICogZnJvdC54O1xyXG4gICAgXHJcbiAgICAgICAgLy8g44OR44OH44Kj44Oz44Kw6Kq/5pW05b6M44GuWFnluqfmqJnjga7oqIjnrpdcclxuICAgICAgICBjb25zdCBwX2Zyb3RfeCA9IGZyb3QueCArIChiYWNrLnggLSBmcm90LngpICogcmF0aW87XHJcbiAgICAgICAgY29uc3QgcF9mcm90X3kgPSBBICogcF9mcm90X3ggKyBCO1xyXG5cclxuICAgICAgICByZXR1cm4ge3g6IHBfZnJvdF94LCB5OiBwX2Zyb3RfeX07XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkcm93X2NlbGxfZmxvb3IoXHJcbiAgICAgICAgcmVjdF9mcm90OiBUX1dhbGwsIFxyXG4gICAgICAgIHJlY3RfYmFjazogVF9XYWxsLCBcclxuICAgICAgICBmaWxsOiBzdHJpbmcgPSAnIzY2NjZmZicsIFxyXG4gICAgICAgIGxpbmU6IHN0cmluZyA9ICcjOTk5OWZmJ1xyXG4gICAgKTogdm9pZCB7XHJcblxyXG4gICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgIHRsOiB7eDogcmVjdF9mcm90Lm1pbl94LCB5OiByZWN0X2Zyb3QubWF4X3l9LFxyXG4gICAgICAgIHRyOiB7eDogcmVjdF9mcm90Lm1heF94LCB5OiByZWN0X2Zyb3QubWF4X3l9LFxyXG4gICAgICAgIGRyOiB7eDogcmVjdF9iYWNrLm1heF94LCB5OiByZWN0X2JhY2subWF4X3l9LFxyXG4gICAgICAgIGRsOiB7eDogcmVjdF9iYWNrLm1pbl94LCB5OiByZWN0X2JhY2subWF4X3l9XHJcbiAgICB9XHJcbiAgICBkcm93X2NlbGwocmVjdCwgZmlsbCwgbGluZSk7XHJcbn1cclxuZnVuY3Rpb24gZHJvd19jZWxsX2NlaWxpbmcoXHJcbiAgICAgICAgcmVjdF9mcm90OiBUX1dhbGwsIFxyXG4gICAgICAgIHJlY3RfYmFjazogVF9XYWxsLCBcclxuICAgICAgICBmaWxsOiBzdHJpbmcgPSAnI2FhYWFhYScsIFxyXG4gICAgICAgIGxpbmU6IHN0cmluZyA9ICcjOTk5OWZmJ1xyXG4gICAgKTogdm9pZCB7XHJcblxyXG4gICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgIHRsOiB7eDogcmVjdF9mcm90Lm1pbl94LCB5OiByZWN0X2Zyb3QubWluX3l9LFxyXG4gICAgICAgIHRyOiB7eDogcmVjdF9mcm90Lm1heF94LCB5OiByZWN0X2Zyb3QubWluX3l9LFxyXG4gICAgICAgIGRyOiB7eDogcmVjdF9iYWNrLm1heF94LCB5OiByZWN0X2JhY2subWluX3l9LFxyXG4gICAgICAgIGRsOiB7eDogcmVjdF9iYWNrLm1pbl94LCB5OiByZWN0X2JhY2subWluX3l9XHJcbiAgICB9XHJcbiAgICBkcm93X2NlbGwocmVjdCwgZmlsbCwgbGluZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyb3dfY2VsbChyOiBUX1JlY3QsIGZpbGw6IHN0cmluZ3xudWxsLCBsaW5lOiBzdHJpbmd8bnVsbCk6IHZvaWQge1xyXG4gICAgaWYgKENfTWF6ZU9ialZpZXcuY29uM0QgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgY29uc3QgY29uID0gQ19NYXplT2JqVmlldy5jb24zRDtcclxuXHJcbiAgICBjb24uYmVnaW5QYXRoKCk7XHJcbiAgICBjb24ubW92ZVRvKHIudGwueCwgci50bC55KTtcclxuICAgIGNvbi5saW5lVG8oci50ci54LCByLnRyLnkpO1xyXG4gICAgY29uLmxpbmVUbyhyLmRyLngsIHIuZHIueSk7XHJcbiAgICBjb24ubGluZVRvKHIuZGwueCwgci5kbC55KTtcclxuICAgIGNvbi5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICBpZiAoZmlsbCAhPSBudWxsKSB7XHJcbiAgICAgICAgY29uLmZpbGxTdHlsZSAgID0gZmlsbDtcclxuICAgICAgICBjb24uZmlsbCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxpbmUgIT09IG51bGwpIHtcclxuICAgICAgICBjb24uc3Ryb2tlU3R5bGUgPSBsaW5lO1xyXG4gICAgICAgIGNvbi5saW5lV2lkdGggICA9IDE7XHJcbiAgICAgICAgY29uLnN0cm9rZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ19Mb2NhdGlvbiwgSlNPTl9Mb2NhdGlvbiB9IGZyb20gXCIuL0NfTG9jYXRpb25cIjtcclxuaW1wb3J0IHsgSV9KU09OX1VuaXEgfSAgICAgICAgICAgICAgIGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuaW1wb3J0IHsgX2dldF91dWlkIH0gICAgICAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9Nb3ZhYmxlUG9pbnQgZXh0ZW5kcyBKU09OX0xvY2F0aW9uIHtcclxuICAgIHVuaXFfaWQ/OiAgc3RyaW5nLFxyXG4gICAgY3VyX3VybD86ICBzdHJpbmcsXHJcbiAgICB0ZWFtX3VpZD86IHN0cmluZyxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9tdnB0X2luZm8oYTogSlNPTl9Nb3ZhYmxlUG9pbnR8dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydChcIk12UHQgSW5mbzpcIiBcclxuICAgICAgICArIFwiXFxudW5pcV9pZDogIFwiICArIChhLnVuaXFfaWQgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfdXJsOiAgXCIgICsgKGEuY3VyX3VybCAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnRlYW1fdWlkOiBcIiAgKyAoYS50ZWFtX3VpZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubGNrZDogXCIgICAgICArIChhLmtpbmQgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sY25tOiBcIiAgICAgICsgKGEubmFtZSAgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxjaWQ6IFwiICAgICAgKyAoYS5sb2NfdWlkICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3g6IFwiICAgICArIChhLmxvY19wb3M/LnggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfeTogXCIgICAgICsgKGEubG9jX3Bvcz8ueSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl96OiBcIiAgICAgKyAoYS5sb2NfcG9zPy56ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX2Q6IFwiICAgICArIChhLmxvY19wb3M/LmQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDX01vdmFibGVQb2ludCBleHRlbmRzIENfTG9jYXRpb24gaW1wbGVtZW50cyBJX0pTT05fVW5pcSB7XHJcbiAgICBwcm90ZWN0ZWQgdW5pcV9pZDogIHN0cmluZztcclxuICAgIHByb3RlY3RlZCBjdXJfdXJsOiAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHRlYW1fdWlkOiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGpzb24/OiBKU09OX01vdmFibGVQb2ludCkge1xyXG4gICAgICAgIHN1cGVyKGpzb24pO1xyXG4gICAgICAgIHRoaXMudW5pcV9pZCAgPSAnTXZQb2ludCMnICsgX2dldF91dWlkKCk7XHJcbiAgICAgICAgdGhpcy5jdXJfdXJsICA9ICcnO1xyXG4gICAgICAgIHRoaXMudGVhbV91aWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmIChqc29uICE9PSB1bmRlZmluZWQgJiYganNvbiAhPT0gbnVsbCkgdGhpcy5kZWNvZGUoanNvbik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdWlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnVuaXFfaWR9XHJcbiAgICBwdWJsaWMgdXJsKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmN1cl91cmx9XHJcbiAgICBwdWJsaWMgdGlkKCk6IHN0cmluZ3x1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50ZWFtX3VpZH1cclxuXHJcbiAgICBwdWJsaWMgbmV3X3VpZCgpOiB2b2lkIHt0aGlzLnVuaXFfaWQgPSAnTXZQb2ludCMnICsgX2dldF91dWlkKCk7fVxyXG4gICAgcHVibGljIHNldF91cmwodXJsOiBzdHJpbmcpOiB2b2lkIHsgdGhpcy5jdXJfdXJsICA9IHVybDt9XHJcbiAgICBwdWJsaWMgc2V0X3RpZCh0aWQ6IHN0cmluZyk6IHZvaWQgeyB0aGlzLnRlYW1fdWlkID0gdGlkO31cclxuXHJcbiAgICBwdWJsaWMgY2xvbmUoKTogQ19Nb3ZhYmxlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0IG12cHQgPSBuZXcgQ19Nb3ZhYmxlUG9pbnQodGhpcy5lbmNvZGUoKSk7XHJcbiAgICAgICAgbXZwdC5uZXdfdWlkKCk7XHJcbiAgICAgICAgcmV0dXJuIG12cHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZyb21KU09OKHR4dDogc3RyaW5nKTogQ19Nb3ZhYmxlUG9pbnQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGogPSBKU09OLnBhcnNlKHR4dCkgYXMgSlNPTl9Nb3ZhYmxlUG9pbnQ7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlY29kZShqKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB0b0pTT04oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5lbmNvZGUoKSwgbnVsbCwgXCJcXHRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX29ial90b19zdHJpbmcob2E6IENfTW92YWJsZVBvaW50KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2EsIG51bGwsIFwiXFx0XCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX29iakFycmF5X3RvX3N0cmluZyhvYWE6IHtbdWlkOiBzdHJpbmddOiBDX01vdmFibGVQb2ludH0pOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IG9hID0gW10gYXMgQ19Nb3ZhYmxlUG9pbnRbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGlpIGluIG9hYSkgb2EucHVzaChvYWFbaWldKTtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2EsIG51bGwsIFwiXFx0XCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ190b19vYmoodHh0OiBzdHJpbmcpOiBDX01vdmFibGVQb2ludCB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaiAgID0gSlNPTi5wYXJzZSh0eHQpIGFzIEpTT05fTW92YWJsZVBvaW50W107XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ19Nb3ZhYmxlUG9pbnQoaik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ19Nb3ZhYmxlUG9pbnQoKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ190b19vYmpBcnJheSh0eHQ6IHN0cmluZyk6IHtbdWlkOiBzdHJpbmddOiBDX01vdmFibGVQb2ludH0ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGogICA9IEpTT04ucGFyc2UodHh0KSBhcyBKU09OX01vdmFibGVQb2ludFtdO1xyXG4gICAgICAgICAgICBjb25zdCBtcGEgPSB7fSBhcyB7W2lkOiBzdHJpbmddOiBDX01vdmFibGVQb2ludH07XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgamogb2Ygaikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWFhID0gbmV3IENfTW92YWJsZVBvaW50KCkuZGVjb2RlKGpqKTtcclxuICAgICAgICAgICAgICAgIG1wYVthYWEudWlkKCldID0gYWFhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtcGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9Nb3ZhYmxlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0IGogPSBzdXBlci5lbmNvZGUoKSBhcyBKU09OX01vdmFibGVQb2ludDtcclxuICAgICAgICBqLnVuaXFfaWQgID0gdGhpcy51bmlxX2lkO1xyXG4gICAgICAgIGouY3VyX3VybCAgPSB0aGlzLmN1cl91cmw7XHJcbiAgICAgICAgai50ZWFtX3VpZCA9IHRoaXMudGVhbV91aWQgPz8gJyc7XHJcbiAgICAgICAgcmV0dXJuIGo7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo/OiBKU09OX01vdmFibGVQb2ludCk6IENfTW92YWJsZVBvaW50IHtcclxuICAgICAgICBzdXBlci5kZWNvZGUoaik7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKGoudW5pcV9pZCAgIT09IHVuZGVmaW5lZCkgdGhpcy51bmlxX2lkICA9IGoudW5pcV9pZDtcclxuICAgICAgICBpZiAoai5jdXJfdXJsICAhPT0gdW5kZWZpbmVkKSB0aGlzLmN1cl91cmwgID0gai5jdXJfdXJsO1xyXG4gICAgICAgIGlmIChqLnRlYW1fdWlkICE9PSB1bmRlZmluZWQpIHRoaXMudGVhbV91aWQgPSBqLnRlYW1fdWlkO1xyXG5cclxuICAgICAgICBpZiAodGhpcy50ZWFtX3VpZCA9PT0gJycpIHRoaXMudGVhbV91aWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIk12UHQgSW5mbzpcIiBcclxuICAgICAgICAgICAgKyBcIlxcbnVuaXFfaWQ6ICBcIiAgKyAodGhpcy51bmlxX2lkICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl91cmw6ICBcIiAgKyAodGhpcy5jdXJfdXJsICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnRlYW1fdWlkOiBcIiAgKyAodGhpcy50ZWFtX3VpZCAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxja2Q6IFwiICAgICAgKyAodGhpcy5sb2Nfa2luZCAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxjbm06IFwiICAgICAgKyAodGhpcy5sb2NfbmFtZSAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxjaWQ6IFwiICAgICAgKyAodGhpcy5sb2NfdWlkICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl94OiBcIiAgICAgKyAodGhpcy5sb2NfcG9zPy54ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl95OiBcIiAgICAgKyAodGhpcy5sb2NfcG9zPy55ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl96OiBcIiAgICAgKyAodGhpcy5sb2NfcG9zPy56ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl9kOiBcIiAgICAgKyAodGhpcy5sb2NfcG9zPy5kID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IElfSlNPTiwgSlNPTl9BbnkgfSBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fUG9pbnQgZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICB4PzogbnVtYmVyLFxyXG4gICAgeT86IG51bWJlcixcclxuICAgIHo/OiBudW1iZXIsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1BvaW50IGltcGxlbWVudHMgSV9KU09Oe1xyXG4gICAgcHVibGljIHg6IG51bWJlcjtcclxuICAgIHB1YmxpYyB5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgejogbnVtYmVyO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg/OiBudW1iZXJ8Q19Qb2ludHxKU09OX1BvaW50fHVuZGVmaW5lZCwgeT86IG51bWJlciwgej86IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHRoaXMueSA9IHRoaXMueiA9IC0zO1xyXG5cclxuICAgICAgICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IDA7IHRoaXMueSA9IDA7IHRoaXMueiA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB5ID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB6ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHg7IHRoaXMueSA9IHk7IHRoaXMueiA9IHo7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcIm9iamVjdFwiKSB7IFxyXG4gICAgICAgICAgICBpZiAoeCBpbnN0YW5jZW9mIENfUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMueCA9IHgueDsgdGhpcy55ID0geC55OyB0aGlzLnogPSB4Lno7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlY29kZSh4KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnggPSB0aGlzLnkgPSB0aGlzLnogPSAtMjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldF9wKCk6IENfUG9pbnQge3JldHVybiBuZXcgQ19Qb2ludCh0aGlzKX0gXHJcbiAgICBwdWJsaWMgc2V0X3AocDogQ19Qb2ludCk6IENfUG9pbnR8dW5kZWZpbmVkIHtcclxuICAgICAgICB0aGlzLnggPSBwLng7IHRoaXMueSA9IHAueTsgdGhpcy56ID0gcC56O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc19leGlzdCh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICh4ID09IHRoaXMueCAmJiB5ID09IHRoaXMueSAmJiB6ID09IHRoaXMueik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgd2l0aGluKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHAueCA9PSB0aGlzLnggJiYgcC55ID09IHRoaXMueSAmJiBwLnogPT0gdGhpcy56KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1BvaW50IHtcclxuICAgICAgICByZXR1cm4ge3g6IHRoaXMueCwgeTogdGhpcy55LCB6OiB0aGlzLnp9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhPzogSlNPTl9Qb2ludCk6IENfUG9pbnQge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChhLnggPT09IHVuZGVmaW5lZCB8fCBhLnkgPT09IHVuZGVmaW5lZCB8fCBhLnogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgdGhpcy54ID0gYS54OyB0aGlzLnkgPSBhLnk7IHRoaXMueiA9IGEuejtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfUG9pbnQsIEpTT05fUG9pbnQgfSBmcm9tICcuL0NfUG9pbnQnO1xyXG5pbXBvcnQge1RfTWFrZUVudW1UeXBlfSAgICAgICAgZnJvbSBcIi4uL2RfdXRsL1RfTWFrZUVudW1UeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVF9EaXJlY3Rpb246e1tkaXI6IHN0cmluZ106IG51bWJlcn0gPSB7XHJcbiAgICBOOiAwLFxyXG4gICAgRTogMSxcclxuICAgIFM6IDIsXHJcbiAgICBXOiAzLFxyXG4gICAgWDogOTlcclxufSBhcyBjb25zdDtcclxuZXhwb3J0IHR5cGUgVF9EaXJlY3Rpb24gPSBUX01ha2VFbnVtVHlwZTx0eXBlb2YgVF9EaXJlY3Rpb24+O1xyXG5cclxuZnVuY3Rpb24gX2Rpcl9rZXkoZGlyOiBUX0RpcmVjdGlvbiB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoVF9EaXJlY3Rpb24pLmZpbmQoa2V5ID0+IFRfRGlyZWN0aW9uW2tleV0gPT09IGRpcikgPz8gXCI/Pz8/XCI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fUG9pbnREaXIgZXh0ZW5kcyBKU09OX1BvaW50IHtcclxuICAgIGQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9QRF9pbmZvKGE6IEpTT05fUG9pbnREaXJ8dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydChcIlBvaW50RGF0YSBJbmZvOlwiIFxyXG4gICAgICAgICsgXCJcXG54OiBcIiAgICAgKyAoYT8ueCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnk6IFwiICAgICArIChhPy55ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuejogXCIgICAgICsgKGE/LnogPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5kOiBcIiAgICAgKyAoYT8uZCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgIENfUG9pbnREaXIgZXh0ZW5kcyBDX1BvaW50IHtcclxuICAgIHB1YmxpYyBkOiBUX0RpcmVjdGlvbjtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihkPzogbnVtYmVyfFRfRGlyZWN0aW9ufENfUG9pbnREaXJ8SlNPTl9Qb2ludERpcikge1xyXG4gICAgICAgIHN1cGVyKGQpO1xyXG4gICAgICAgIHRoaXMuZCA9IFRfRGlyZWN0aW9uLlg7XHJcblxyXG4gICAgICAgIGlmIChkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGQgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5kID0gZCBhcyBUX0RpcmVjdGlvbjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGQgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgaWYgKGQgaW5zdGFuY2VvZiBDX1BvaW50RGlyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmQgPSBkLmQgYXMgVF9EaXJlY3Rpb247XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlY29kZShkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZCA9IFRfRGlyZWN0aW9uLlg7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9kX21iX25hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6ICByZXR1cm4gJ+WMlyc7XHJcbiAgICAgICAgICAgIGNhc2UgMTogIHJldHVybiAn5p2xJztcclxuICAgICAgICAgICAgY2FzZSAyOiAgcmV0dXJuICfljZcnO1xyXG4gICAgICAgICAgICBjYXNlIDM6ICByZXR1cm4gJ+ilvyc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAn6KyOJztcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X2QoKTogVF9EaXJlY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X2QoZDogVF9EaXJlY3Rpb24pOiBDX1BvaW50RGlyfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKCEoX2Rpcl9rZXkoZCkgaW4gVF9EaXJlY3Rpb24pKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZCA9IGQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BkKCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wZChkOiBDX1BvaW50RGlyfEpTT05fUG9pbnREaXIpOiBDX1BvaW50RGlyfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKGQgaW5zdGFuY2VvZiBDX1BvaW50RGlyKSB7XHJcbiAgICAgICAgICAgIGlmICghKF9kaXJfa2V5KGQuZCkgaW4gVF9EaXJlY3Rpb24pKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBzdXBlci5zZXRfcChkKTtcclxuICAgICAgICAgICAgdGhpcy5kID0gZC5kO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEoX2Rpcl9rZXkoZC5kKSBpbiBUX0RpcmVjdGlvbikpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5kZWNvZGUoZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1BvaW50RGlyIHtcclxuICAgICAgICBjb25zdCBqID0gc3VwZXIuZW5jb2RlKCkgYXMgSlNPTl9Qb2ludERpcjtcclxuICAgICAgICBqLmQgICAgID0gdGhpcy5kIGFzIG51bWJlcjtcclxuICAgICAgICByZXR1cm4gajtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoaj86IEpTT05fUG9pbnREaXIpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICBpZiAoaiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAoIShfZGlyX2tleShqLmQpIGluIFRfRGlyZWN0aW9uKSkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIHN1cGVyLmRlY29kZShqKTtcclxuICAgICAgICB0aGlzLmQgPSBqLmQgYXMgVF9EaXJlY3Rpb247XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIlBvaW50RGF0YSBJbmZvOlwiIFxyXG4gICAgICAgICAgICArIFwiXFxueDogXCIgICAgICsgKHRoaXMueCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG55OiBcIiAgICAgKyAodGhpcy55ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbno6IFwiICAgICArICh0aGlzLnogPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuZDogXCIgICAgICsgKHRoaXMuZCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiY2xhc3MgQ19Qb2ludDJEIHtcclxuICAgIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54ICA9IHg7XHJcbiAgICAgICAgdGhpcy55ICA9IHk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaXNfZXhpc3QoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMueCA9PSB4KSAmJiAodGhpcy55ID09IHkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19Qb2ludExpbmsyRCBleHRlbmRzIENfUG9pbnQyRCB7XHJcbiAgICBwdWJsaWMgZGk6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBkaTogbnVtYmVyID0gLTEpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSk7XHJcbiAgICAgICAgdGhpcy5kaSA9IGRpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBjYXN0KHA6IENfUG9pbnQyRHx1bmRlZmluZWQpOiBDX1BvaW50TGluazJEfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKHA/LnggPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAocD8ueSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybiBwIGluc3RhbmNlb2YgQ19Qb2ludExpbmsyRCA/IHAgOiBuZXcgQ19Qb2ludExpbmsyRChwLngsIHAueSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ19Qb2ludFNldDJEIHtcclxuICAgIHB1YmxpYyBzZXQ6IENfUG9pbnQyRFtdID1bXTtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgcHVibGljIHB1c2gocDogQ19Qb2ludDJEKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXQucHVzaChwKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BvaW50KHg6IG51bWJlciwgeTogbnVtYmVyKTogQ19Qb2ludDJEfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwIG9mIHRoaXMuc2V0KSB7XHJcbiAgICAgICAgICAgIGlmIChwPy5pc19leGlzdCh4LCB5KSkgcmV0dXJuIHA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7ICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVtb3ZlKHA6IENfUG9pbnQyRCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlX3h5KHAueCwgcC55KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVtb3ZlX3h5KHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpIGluIHRoaXMuc2V0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNldFtpXT8uaXNfZXhpc3QoeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNldFtpXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0ID0gWy4uLnRoaXMuc2V0XTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBpc19leGlzdCh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgcCBvZiB0aGlzLnNldCkgaWYgKHA/LmlzX2V4aXN0KHgsIHkpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbmNsYXNzIFBvaW50M0Qge1xyXG4gICAgcHVibGljIGludCAkeDtcclxuICAgIHB1YmxpYyBpbnQgJHk7XHJcbiAgICBwdWJsaWMgaW50ICR6O1xyXG4gICAgcHVibGljIGZ1bmN0aW9uIF9fY29uc3RydWN0KGludCAkeCA9IDAsIGludCAkeSA9IDAsIGludCAkeiA9IDApXHJcbiAgICB7XHJcbiAgICAgICAgJHRoaXMtPnggID0gJHg7XHJcbiAgICAgICAgJHRoaXMtPnkgID0gJHk7XHJcbiAgICAgICAgJHRoaXMtPnogID0gJHo7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZnVuY3Rpb24gaXNfZXhpc3QoaW50ICR4LCBpbnQgJHksIGludCAkeik6IGJvb2wge1xyXG4gICAgICAgIHJldHVybiAoJHRoaXMtPnggPT0gJHgpICYmICgkdGhpcy0+eSA9PSAkeSkgJiYgKCR0aGlzLT56ID09ICR6KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBmdW5jdGlvbiB3aXRoaW4oUG9pbnQzRCAkcCk6IGJvb2wge1xyXG4gICAgICAgIHJldHVybiAkdGhpcy0+aXNfZXhpc3QoJHAtPngsICRwLT55LCAkcC0+eik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZnVuY3Rpb24gZW5jb2RlKCk6IGFycmF5IHtcclxuICAgICAgICAkYSA9IFtdO1xyXG4gICAgICAgICRhWyd4J10gPSAkdGhpcy0+eDtcclxuICAgICAgICAkYVsneSddID0gJHRoaXMtPnk7XHJcbiAgICAgICAgJGFbJ3onXSA9ICR0aGlzLT56O1xyXG5cclxuICAgICAgICByZXR1cm4gJGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZnVuY3Rpb24gZGVjb2RlKGFycmF5ICRhKTogUG9pbnQzRCB7XHJcbiAgICAgICAgaWYgKCFpc19udWxsKCRhKSAmJiBpc19hcnJheSgkYSkpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgYXJyYXlfa2V5X2V4aXN0cygneCcsICRhKSAmJiAoaXNfbnVtZXJpYygkYVsneCddKSAmJiAkYVsneCddID4gIDApXHJcbiAgICAgICAgICAgICYmICBhcnJheV9rZXlfZXhpc3RzKCd5JywgJGEpICYmIChpc19udW1lcmljKCRhWyd5J10pICYmICRhWyd5J10gPiAgMClcclxuICAgICAgICAgICAgJiYgIGFycmF5X2tleV9leGlzdHMoJ3onLCAkYSkgJiYgKGlzX251bWVyaWMoJGFbJ3onXSkgJiYgJGFbJ3onXSA+PSAwKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICR0aGlzLT54ID0gJGFbJ3gnXTtcclxuICAgICAgICAgICAgICAgICR0aGlzLT55ID0gJGFbJ3knXTtcclxuICAgICAgICAgICAgICAgICR0aGlzLT56ID0gJGFbJ3onXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJHRoaXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGZ1bmN0aW9uIGRlY29kZV9hbmRfbmV3KGFycmF5ICRhKTogUG9pbnQzRCB7XHJcbiAgICAgICAgaWYgKCFpc19udWxsKCRhKSAmJiBpc19hcnJheSgkYSkpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgYXJyYXlfa2V5X2V4aXN0cygneCcsICRhKSAmJiAoaXNfbnVtZXJpYygkYVsneCddKSAmJiAkYVsneCddID4gIDApXHJcbiAgICAgICAgICAgICYmICBhcnJheV9rZXlfZXhpc3RzKCd5JywgJGEpICYmIChpc19udW1lcmljKCRhWyd5J10pICYmICRhWyd5J10gPiAgMClcclxuICAgICAgICAgICAgJiYgIGFycmF5X2tleV9leGlzdHMoJ3onLCAkYSkgJiYgKGlzX251bWVyaWMoJGFbJ3onXSkgJiYgJGFbJ3onXSA+PSAwKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQzRCgkYVsneCddLCAkYVsneSddLCAkYVsneiddKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFBvaW50M0QoLTEsIC0xLCAtMSk7XHJcbiAgICB9XHJcbn1cclxuKi9cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBfbWF4LCBfbWluIH0gICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX01hdGhcIjtcclxuaW1wb3J0IHsgQ19Qb2ludCwgSlNPTl9Qb2ludCB9ICBmcm9tIFwiLi9DX1BvaW50XCI7XHJcbmltcG9ydCB7IEpTT05fQW55IH0gICAgICAgICAgICAgZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX1JhbmdlIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgbWluPzogICBKU09OX1BvaW50LCBcclxuICAgIG1heD86ICAgSlNPTl9Qb2ludCwgXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1JhbmdlIHtcclxuICAgIHByb3RlY3RlZCBtaW46IENfUG9pbnQ7XHJcbiAgICBwcm90ZWN0ZWQgbWF4OiBDX1BvaW50O1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHAxOiBDX1BvaW50LCBwMjogQ19Qb2ludCkge1xyXG4gICAgICAgIHRoaXMubWluICA9IG5ldyBDX1BvaW50KDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMubWF4ICA9IG5ldyBDX1BvaW50KDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuX2luaXQocDEsIHAyKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfaW5pdChwMTogQ19Qb2ludCwgcDI6IENfUG9pbnQpOiBDX1JhbmdlIHtcclxuICAgICAgICBjb25zdCBtaW5feCA9IF9taW4oW3AxLngsIHAyLnhdKTtcclxuICAgICAgICBjb25zdCBtYXhfeCA9IF9tYXgoW3AxLngsIHAyLnhdKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWluX3kgPSBfbWluKFtwMS55LCBwMi55XSk7XHJcbiAgICAgICAgY29uc3QgbWF4X3kgPSBfbWF4KFtwMS55LCBwMi55XSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1pbl96ID0gX21pbihbcDEueiwgcDIuel0pO1xyXG4gICAgICAgIGNvbnN0IG1heF96ID0gX21heChbcDEueiwgcDIuel0pO1xyXG5cclxuICAgICAgICB0aGlzLm1pbiAgPSBuZXcgQ19Qb2ludChtaW5feCwgbWluX3ksIG1pbl96KTtcclxuICAgICAgICB0aGlzLm1heCAgPSBuZXcgQ19Qb2ludChtYXhfeCwgbWF4X3ksIG1heF96KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdpdGhpbihhOiBDX1JhbmdlfENfUG9pbnR8bnVtYmVyLCB5PzogbnVtYmVyLCB6PzogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB5ID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB6ID09PSBcIm51bWJlclwiKSB7IFxyXG4gICAgICAgICAgICBpZiAoIGEgPCB0aGlzLm1pbi54IHx8IGEgPiB0aGlzLm1heC54ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIHkgPCB0aGlzLm1pbi55IHx8IHkgPiB0aGlzLm1heC55ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIHogPCB0aGlzLm1pbi56IHx8IHogPiB0aGlzLm1heC56ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhID09PSBcIm9iamVjdFwiICYmIGEgaW5zdGFuY2VvZiBDX1BvaW50KSB7IFxyXG4gICAgICAgICAgICBjb25zdCBwID0gYSBhcyBDX1BvaW50O1xyXG4gICAgICAgICAgICBpZiAoIHAueCA8IHRoaXMubWluLnggfHwgcC54ID4gdGhpcy5tYXgueCApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCBwLnkgPCB0aGlzLm1pbi55IHx8IHAueSA+IHRoaXMubWF4LnkgKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggcC56IDwgdGhpcy5taW4ueiB8fCBwLnogPiB0aGlzLm1heC56ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhID09PSBcIm9iamVjdFwiICYmIGEgaW5zdGFuY2VvZiBDX1JhbmdlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBhIGFzIENfUmFuZ2U7XHJcbiAgICAgICAgICAgIGlmICggcC5taW5feCgpIDwgdGhpcy5taW4ueCB8fCBwLm1heF94KCkgPiB0aGlzLm1heC54ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIHAubWluX3koKSA8IHRoaXMubWluLnkgfHwgcC5tYXhfeSgpID4gdGhpcy5tYXgueSApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCBwLm1pbl96KCkgPCB0aGlzLm1pbi56IHx8IHAubWF4X3ooKSA+IHRoaXMubWF4LnogKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbWluX3goKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWluLng7fVxyXG4gICAgcHVibGljIG1heF94KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1heC54O31cclxuICAgIHB1YmxpYyBtaW5feSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5taW4ueTt9XHJcbiAgICBwdWJsaWMgbWF4X3koKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWF4Lnk7fVxyXG4gICAgcHVibGljIG1pbl96KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1pbi56O31cclxuICAgIHB1YmxpYyBtYXhfeigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tYXguejt9XHJcbiAgICBwdWJsaWMgc2l6ZV94KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4LnggLSB0aGlzLm1pbi54ICsgMTtcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgc2l6ZV95KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4LnkgLSB0aGlzLm1pbi55ICsgMTtcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgc2l6ZV96KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4LnogLSB0aGlzLm1pbi56ICsgMTtcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgZG9fYWxsX3h5eihmbjogKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpID0+IGJvb2xlYW4pIHtcclxuICAgICAgICBmb3IgKHZhciB6ID0gdGhpcy5taW4uejsgeiA8PSB0aGlzLm1heC56OyB6KysgKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSB0aGlzLm1pbi55OyB5IDw9IHRoaXMubWF4Lnk7IHkrKyApIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSB0aGlzLm1pbi54OyB5IDw9IHRoaXMubWF4Lng7IHgrKyApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZuKHgsIHksIHopKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZG9fYWxsX3AoZm46IChwOiBDX1BvaW50KSA9PiBib29sZWFuKSB7XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IHRoaXMubWluLno7IHogPD0gdGhpcy5tYXguejsgeisrICkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gdGhpcy5taW4ueTsgeSA8PSB0aGlzLm1heC55OyB5KysgKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gdGhpcy5taW4ueDsgeSA8PSB0aGlzLm1heC54OyB4KysgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmbihuZXcgQ19Qb2ludCh4LCB5LCB6KSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9SYW5nZSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbWluOiB0aGlzLm1pbi5lbmNvZGUoKSxcclxuICAgICAgICAgICAgbWF4OiB0aGlzLm1pbi5lbmNvZGUoKSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo6IEpTT05fUmFuZ2UpOiBDX1JhbmdlIHtcclxuICAgICAgICBpZiAoaiA9PT0gdW5kZWZpbmVkKSAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKGoubWluID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChqLm1heCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBjb25zdCBwMSA9IG5ldyBDX1BvaW50KGoubWluKTtcclxuICAgICAgICBjb25zdCBwMiA9IG5ldyBDX1BvaW50KGoubWF4KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5pdChwMSwgcDIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfTWF6ZSwgSlNPTl9NYXplLCBhbGVydF9tYXplX2luZm8gIH0gIGZyb20gXCIuL0NfTWF6ZVwiO1xyXG5pbXBvcnQgeyBDX0d1aWxkLCBKU09OX0d1aWxkLCBhbGVydF9ndWxkX2luZm8gfSBmcm9tIFwiLi9DX0d1aWxkXCI7XHJcbmltcG9ydCB7IENfTW92YWJsZVBvaW50LCBKU09OX01vdmFibGVQb2ludCwgYWxlcnRfbXZwdF9pbmZvIH0gZnJvbSBcIi4vQ19Nb3ZhYmxlUG9pbnRcIjtcclxuaW1wb3J0IHsgQ19UZWFtLCBKU09OX1RlYW0sIGFsZXJ0X3RlYW1faW5mbyAgfSAgZnJvbSBcIi4vQ19UZWFtXCI7XHJcbmltcG9ydCB7IENfU2F2ZUluZm8sIElfSlNPTiwgSlNPTl9BbnksIEpTT05fU2F2ZUluZm8gfSBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fU2F2ZURhdGEgZXh0ZW5kcyBKU09OX1NhdmVJbmZvIHtcclxuICAgIHNhdmVfaWQ/OiAgIG51bWJlcixcclxuICAgIHBsYXllcl9pZD86IG51bWJlciwgXHJcbiAgICB1bmlxX25vPzogICBudW1iZXIsXHJcbiAgICB0aXRsZT86ICAgICBzdHJpbmcsXHJcbiAgICBkZXRhaWw/OiAgICBzdHJpbmcsXHJcbiAgICBwb2ludD86ICAgICBzdHJpbmcsXHJcbiAgICBhdXRvX21vZGU/OiBzdHJpbmcsXHJcbiAgICBpc19hY3RpdmU/OiBzdHJpbmcsXHJcbiAgICBpc19kZWxldGU/OiBzdHJpbmcsXHJcbiAgICBzYXZlX3RpbWU/OiBzdHJpbmcsXHJcblxyXG4gICAgYWxsX212cHQ/OiAgSlNPTl9Nb3ZhYmxlUG9pbnRbXSxcclxuICAgIGFsbF9tYXplPzogIEpTT05fTWF6ZVtdLFxyXG4gICAgYWxsX3RlYW0/OiAgSlNPTl9UZWFtW10sXHJcbiAgICBhbGxfZ3VsZD86ICBKU09OX0d1aWxkW10sXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9zYXZlX2luZm8oYTogSlNPTl9TYXZlRGF0YXx1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGFsZXJ0KFwiU2F2ZSBJbmZvOlwiIFxyXG4gICAgICAgICsgXCJcXG5zYXZlX2lkOiAgICBcIiArIChhLnNhdmVfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnBsYXllcl9pZDogIFwiICsgKGEucGxheWVyX2lkID8/ICc/JylcclxuICAgICAgICArIFwiXFxudW5pcV9ubzogICAgXCIgKyAoYS51bmlxX25vICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG50aXRsZTogICAgICBcIiArIChhLnRpdGxlICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmRldGFpbDogICAgIFwiICsgKGEuZGV0YWlsICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxucG9pbnQ6ICAgICAgXCIgKyAoYS5wb2ludCAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5hdXRvX21vZGU6ICBcIiArIChhLmF1dG9fbW9kZSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmlzX2FjdGl2ZTogIFwiICsgKGEuaXNfYWN0aXZlID8/ICc/JylcclxuICAgICAgICArIFwiXFxuaXNfZGVsZXRlOiAgXCIgKyAoYS5pc19kZWxldGUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5tdnB0X2NvdW50OiBcIiArIChhLmFsbF9tdnB0Py5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5tYXplX2NvdW50OiBcIiArIChhLmFsbF9tYXplPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5ndWxkX2NvdW50OiBcIiArIChhLmFsbF9ndWxkPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG50ZWFtX2NvdW50OiBcIiArIChhLmFsbF90ZWFtPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X3NhdmVfZGV0YWlsKGE6IEpTT05fU2F2ZURhdGF8dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgdHJ5IHsgXHJcbi8vICAgICAgICBhbGVydChcIlNhdmUgRGV0YWlsKG12cHQpOlwiKTtcclxuICAgICAgICBmb3IgKGNvbnN0IG12cHQgb2YgYS5hbGxfbXZwdD8/W10pIGFsZXJ0X212cHRfaW5mbyhtdnB0KTtcclxuICAgIH0gY2F0Y2ggKGVycikge2FsZXJ0KCdhbGVydCBtdnB0IGVycm9yOiAnICsgZXJyKX1cclxuXHJcbiAgICB0cnkgeyBcclxuLy8gICAgICAgIGFsZXJ0KFwiU2F2ZSBEZXRhaWwodGVhbSk6XCIpO1xyXG4gICAgICAgIGZvciAoY29uc3QgdGVhbSBvZiBhLmFsbF90ZWFtPz9bXSkgYWxlcnRfdGVhbV9pbmZvKHRlYW0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7YWxlcnQoJ2FsZXJ0IHRlYW0gZXJyb3I6ICcgKyBlcnIpfVxyXG5cclxuICAgIHRyeSB7IFxyXG4vLyAgICAgICAgYWxlcnQoXCJTYXZlIERldGFpbChtYXplKTpcIik7XHJcbiAgICAgICAgZm9yIChjb25zdCBtYXplIG9mIGEuYWxsX21hemU/P1tdKSBhbGVydF9tYXplX2luZm8obWF6ZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHthbGVydCgnYWxlcnQgbWF6ZSBlcnJvcjogJyArIGVycil9XHJcblxyXG4gICAgdHJ5IHsgXHJcbi8vICAgICAgICBhbGVydChcIlNhdmUgRGV0YWlsKGd1bGQpOlwiKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGd1bGQgb2YgYS5hbGxfZ3VsZD8/W10pIGFsZXJ0X2d1bGRfaW5mbyhndWxkKTtcclxuICAgIH0gY2F0Y2ggKGVycikge2FsZXJ0KCdhbGVydCBndWxkIGVycm9yOiAnICsgZXJyKX1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1NhdmVEYXRhIGV4dGVuZHMgQ19TYXZlSW5mbyBpbXBsZW1lbnRzIElfSlNPTiB7XHJcblxyXG4vKlxyXG4gICAgcHVibGljIHNhdmVfaWQ6ICAgbnVtYmVyO1xyXG4gICAgcHVibGljIHBsYXllcl9pZDogbnVtYmVyOyBcclxuICAgIHB1YmxpYyB1bmlxX25vOiAgIG51bWJlcjtcclxuICAgIHB1YmxpYyB0aXRsZTogICAgIHN0cmluZztcclxuICAgIHB1YmxpYyBkZXRhaWw6ICAgIHN0cmluZztcclxuICAgIHB1YmxpYyBwb2ludDogICAgIHN0cmluZztcclxuICAgIHB1YmxpYyBhdXRvX21vZGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaXNfYWN0aXZlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlzX2RlbGV0ZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBzYXZlX3RpbWU6IERhdGU7XHJcbiAgICBwdWJsaWMgbXlwb3M6ICAgICBDX01vdmFibGVQb2ludDtcclxuKi9cclxuXHJcbiAgICBwdWJsaWMgYWxsX212cHQ6ICB7W3VpZDogc3RyaW5nXTogQ19Nb3ZhYmxlUG9pbnR9O1xyXG4gICAgcHVibGljIGFsbF9tYXplOiAge1t1aWQ6IHN0cmluZ106IENfTWF6ZX07XHJcbiAgICBwdWJsaWMgYWxsX3RlYW06ICB7W3VpZDogc3RyaW5nXTogQ19UZWFtfTtcclxuICAgIHB1YmxpYyBhbGxfZ3VsZDogIHtbdWlkOiBzdHJpbmddOiBDX0d1aWxkfTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYT86IEpTT05fU2F2ZURhdGEpIHtcclxuICAgICAgICBzdXBlcihhKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbGxfbXZwdCAgPSB7fTtcclxuICAgICAgICB0aGlzLmFsbF9tYXplICA9IHt9O1xyXG4gICAgICAgIHRoaXMuYWxsX3RlYW0gID0ge31cclxuICAgICAgICB0aGlzLmFsbF9ndWxkICA9IHt9O1xyXG5cclxuICAgICAgICBpZiAoYSAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5ldyhhPzogSlNPTl9TYXZlRGF0YSk6IENfU2F2ZURhdGEge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ19TYXZlRGF0YShhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fU2F2ZURhdGEge1xyXG4gICAgICAgIGxldCBzYXZlX2RhdGU6IHN0cmluZztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBzYXZlX2RhdGEgICAgPSBzdXBlci5lbmNvZGUoKSBhcyBKU09OX1NhdmVEYXRhO1xyXG5cclxuICAgICAgICAgICAgc2F2ZV9kYXRhLmFsbF9tdnB0ID0gdGhpcy5fZW5jb2RlX2FsbF9kYXRhKHRoaXMuYWxsX212cHQpOyBcclxuICAgICAgICAgICAgc2F2ZV9kYXRhLmFsbF9tYXplID0gdGhpcy5fZW5jb2RlX2FsbF9kYXRhKHRoaXMuYWxsX21hemUpOyBcclxuICAgICAgICAgICAgc2F2ZV9kYXRhLmFsbF90ZWFtID0gdGhpcy5fZW5jb2RlX2FsbF9kYXRhKHRoaXMuYWxsX3RlYW0pOyBcclxuICAgICAgICAgICAgc2F2ZV9kYXRhLmFsbF9ndWxkID0gdGhpcy5fZW5jb2RlX2FsbF9kYXRhKHRoaXMuYWxsX2d1bGQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNhdmVfZGF0YTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1NhdmVEYXRhIEVuY29kZSBFcnJvcjogJyArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX2VuY29kZV9hbGxfZGF0YShhbGxfZGF0YToge1t1aWQ6c3RyaW5nXTpJX0pTT059KTogSlNPTl9BbnlbXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX0pTT046IEpTT05fQW55W10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIGFsbF9kYXRhKSBhbGxfSlNPTi5wdXNoKGFsbF9kYXRhW2ldLmVuY29kZSgpKTtcclxuICAgICAgICByZXR1cm4gYWxsX0pTT047XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlY29kZShzOiBKU09OX1NhdmVEYXRhKTogQ19TYXZlRGF0YSB7XHJcbiAgICAgICAgc3VwZXIuZGVjb2RlKHMpO1xyXG5cclxuICAgICAgICBpZiAocy5hbGxfbXZwdCAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsbF9tdnB0ID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl9tdnB0IG9mIHMuYWxsX212cHQpIHtcclxuICAgICAgICAgICAgICAgICBjb25zdCBtdnB0ID0gKG5ldyBDX01vdmFibGVQb2ludCgpKS5kZWNvZGUoanNvbl9tdnB0KTsgXHJcbiAgICAgICAgICAgICAgICAgdGhpcy5hbGxfbXZwdFttdnB0LnVpZCgpXSA9IG12cHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIGlmIChzLmFsbF9tYXplICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsX21hemUgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqc29uX21hemUgb2Ygcy5hbGxfbWF6ZSkge1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IG1hemUgPSAobmV3IENfTWF6ZSgpKS5kZWNvZGUoanNvbl9tYXplKTsgXHJcbiAgICAgICAgICAgICAgICAgdGhpcy5hbGxfbWF6ZVttYXplLnVpZCgpXSA9IG1hemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIGlmIChzLmFsbF90ZWFtICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsX3RlYW0gPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqc29uX3RlYW0gb2Ygcy5hbGxfdGVhbSkge1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IHRlYW0gPSAobmV3IENfVGVhbSgpKS5kZWNvZGUoanNvbl90ZWFtKTsgXHJcbiAgICAgICAgICAgICAgICAgdGhpcy5hbGxfdGVhbVt0ZWFtLnVpZCgpXSA9IHRlYW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIGlmIChzLmFsbF9ndWxkICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsX2d1bGQgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqc29uX2d1bGQgb2Ygcy5hbGxfZ3VsZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3VsZCA9IChuZXcgQ19HdWlsZCgpKS5kZWNvZGUoanNvbl9ndWxkKTsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbF9ndWxkW2d1bGQudWlkKCldID0gZ3VsZDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGFsZXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiU2F2ZSBJbmZvOlwiIFxyXG4gICAgICAgICAgICArIFwiXFxuc2F2ZV9pZDogICAgXCIgKyAodGhpcy5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxucGxheWVyX2lkOiAgXCIgKyAodGhpcy5wbGF5ZXJfaWQgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudW5pcV9ubzogICAgXCIgKyAodGhpcy51bmlxX25vICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudGl0bGU6ICAgICAgXCIgKyAodGhpcy50aXRsZSAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuZGV0YWlsOiAgICAgXCIgKyAodGhpcy5kZXRhaWwgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxucG9pbnQ6ICAgICAgXCIgKyAodGhpcy5wb2ludCAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuYXV0b19tb2RlOiAgXCIgKyAodGhpcy5hdXRvX21vZGU/J1knOidOJylcclxuICAgICAgICAgICAgKyBcIlxcbmlzX2FjdGl2ZTogIFwiICsgKHRoaXMuaXNfYWN0aXZlPydZJzonTicpXHJcbiAgICAgICAgICAgICsgXCJcXG5pc19kZWxldGU6ICBcIiArICh0aGlzLmlzX2RlbGV0ZT8nWSc6J04nKVxyXG4gICAgICAgICAgICArIFwiXFxubXZwdF9jb3VudDogXCIgKyAodGhpcy5hbGxfbXZwdD8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbm1hemVfY291bnQ6IFwiICsgKHRoaXMuYWxsX21hemU/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5ndWxkX2NvdW50OiBcIiArICh0aGlzLmFsbF9ndWxkPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudGVhbV9jb3VudDogXCIgKyAodGhpcy5hbGxfdGVhbT8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWxlcnRfZGV0YWlsKCk6IHZvaWQge1xyXG4gICAgICAgIHRyeSB7IFxyXG4vLyAgICAgICAgICAgIGFsZXJ0KFwiU2F2ZSBEZXRhaWwobXZwdCk6XCIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHRoaXMuYWxsX212cHQpIHRoaXMuYWxsX212cHRbaWldLmFsZXJ0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7YWxlcnQoJ2FsZXJ0IG12cHQgZXJyb3I6ICcgKyBlcnIpfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB0cnkgeyBcclxuLy8gICAgICAgICAgICBhbGVydChcIlNhdmUgRGV0YWlsKHRlYW0pOlwiKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpaSBpbiB0aGlzLmFsbF90ZWFtKSB0aGlzLmFsbF90ZWFtW2lpXS5hbGVydCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge2FsZXJ0KCdhbGVydCB0ZWFtIGVycm9yOiAnICsgZXJyKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgdHJ5IHsgXHJcbi8vICAgICAgICAgICAgYWxlcnQoXCJTYXZlIERldGFpbChtYXplKTpcIik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWkgaW4gdGhpcy5hbGxfbWF6ZSkgdGhpcy5hbGxfbWF6ZVtpaV0uYWxlcnQoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHthbGVydCgnYWxlcnQgbWF6ZSBlcnJvcjogJyArIGVycil9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHRyeSB7IFxyXG4vLyAgICAgICAgICAgIGFsZXJ0KFwiU2F2ZSBEZXRhaWwoZ3VsZCk6XCIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHRoaXMuYWxsX2d1bGQpIHRoaXMuYWxsX2d1bGRbaWldLmFsZXJ0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7YWxlcnQoJ2FsZXJ0IGd1bGQgZXJyb3I6ICcgKyBlcnIpfVxyXG4gICAgICAgICAgICBcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfTW92YWJsZVBvaW50LCBKU09OX01vdmFibGVQb2ludCB9IGZyb20gXCIuL0NfTW92YWJsZVBvaW50XCI7XHJcblxyXG4vLyDjgrXjg7zjg5Djg7zlgbTjgajjgoTjgorjgajjgorjgZnjgotKU09O5b2i5byP44OH44O844K/44Gu44OG44Oz44OX44Os44O844OIXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9Bbnkge1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55XHJcbn1cclxuXHJcbi8vIOOCteODvOODkOODvOWBtOOBqOOChOOCiuOBqOOCiuOBmeOCi+OCr+ODqeOCueOBq+W/heimgeOBquODoeOCveODg+ODiVxyXG5leHBvcnQgaW50ZXJmYWNlIElfSlNPTiB7XHJcbiAgICBlbmNvZGU6ICgpPT5KU09OX0FueSxcclxuICAgIGRlY29kZTogKGo6SlNPTl9BbnkpPT5JX0pTT04sXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSV9KU09OX1VuaXEgZXh0ZW5kcyBJX0pTT04ge1xyXG4gICAgdWlkOiAoKT0+c3RyaW5nLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElfQWJzdHJhY3Qge1xyXG4gICAgbmV3T2JqOiAoaj86SlNPTl9BbnkpPT5JX0Fic3RyYWN0fHVuZGVmaW5lZCxcclxuICAgIGVuY29kZTogKCk9PkpTT05fQW55LFxyXG4vLyAgc3RhdGljIGRlY29kZTogKGo6SlNPTl9BbnkpPT5JX0pTT04sXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSV9KU09OX0NsYXNzIHtcclxuICAgIG5ldzogKGo/OiBKU09OX0FueSk9PklfSlNPTixcclxufVxyXG5cclxuLy8g44K144O844OQ44O85YG044Go44KE44KK5Y+W44KK44GZ44KL6Zqb44Gr6Ieq6Lqr44KS5paH5a2X5YiX5YyW44GZ44KL44Kv44Op44K544Gu44Oh44K944OD44OJXHJcbmV4cG9ydCBpbnRlcmZhY2UgSV9KU09OVmFsdWUgZXh0ZW5kcyBJX0pTT057XHJcbiAgICBmcm9tSlNPTjogKCk9PnZvaWQsXHJcbiAgICB0b0pTT046ICAgKCk9PnZvaWQsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9TYXZlSW5mbyBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIHNhdmVfaWQ/OiAgIG51bWJlcixcclxuICAgIHBsYXllcl9pZD86IG51bWJlciwgXHJcbiAgICB1bmlxX25vPzogICBudW1iZXIsXHJcbiAgICB0aXRsZT86ICAgICBzdHJpbmcsXHJcbiAgICBkZXRhaWw/OiAgICBzdHJpbmcsXHJcbiAgICBwb2ludD86ICAgICBzdHJpbmcsXHJcbiAgICBhdXRvX21vZGU/OiBzdHJpbmcsXHJcbiAgICBpc19hY3RpdmU/OiBzdHJpbmcsXHJcbiAgICBpc19kZWxldGU/OiBzdHJpbmcsXHJcbiAgICBzYXZlX3RpbWU/OiBzdHJpbmcsXHJcbiAgICBteXBvcz86ICAgICBKU09OX01vdmFibGVQb2ludCxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X3NhdmVpbmZvX2luZm8oYTogSlNPTl9TYXZlSW5mb3x1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGFsZXJ0KFwiU2F2ZSBJbmZvOlwiIFxyXG4gICAgICAgICsgXCJcXG5zYXZlX2lkOiAgICBcIiArIChhLnNhdmVfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnBsYXllcl9pZDogIFwiICsgKGEucGxheWVyX2lkID8/ICc/JylcclxuICAgICAgICArIFwiXFxudW5pcV9ubzogICAgXCIgKyAoYS51bmlxX25vICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG50aXRsZTogICAgICBcIiArIChhLnRpdGxlICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmRldGFpbDogICAgIFwiICsgKGEuZGV0YWlsICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxucG9pbnQ6ICAgICAgXCIgKyAoYS5wb2ludCAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5hdXRvX21vZGU6ICBcIiArIChhLmF1dG9fbW9kZSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmlzX2FjdGl2ZTogIFwiICsgKGEuaXNfYWN0aXZlID8/ICc/JylcclxuICAgICAgICArIFwiXFxuaXNfZGVsZXRlOiAgXCIgKyAoYS5pc19kZWxldGUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zYXZlX3RpbWU6ICBcIiArIChhLnNhdmVfdGltZSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbm15dXJsOiAgICAgIFwiICsgKGEubXlwb3M/LmN1cl91cmwgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnRlYW1fdWlkOiAgIFwiICsgKGEubXlwb3M/LnRlYW1fdWlkICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxvY19raW5kOiAgIFwiICsgKGEubXlwb3M/LmtpbmQgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxvY19uYW1lOiAgIFwiICsgKGEubXlwb3M/Lm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxvY191aWQ6ICAgIFwiICsgKGEubXlwb3M/LmxvY191aWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19TYXZlSW5mbyBpbXBsZW1lbnRzIElfSlNPTiB7XHJcbiAgICBwdWJsaWMgc2F2ZV9pZDogICBudW1iZXI7XHJcbiAgICBwdWJsaWMgcGxheWVyX2lkOiBudW1iZXI7IFxyXG4gICAgcHVibGljIHVuaXFfbm86ICAgbnVtYmVyO1xyXG4gICAgcHVibGljIHRpdGxlOiAgICAgc3RyaW5nO1xyXG4gICAgcHVibGljIGRldGFpbDogICAgc3RyaW5nO1xyXG4gICAgcHVibGljIHBvaW50OiAgICAgc3RyaW5nO1xyXG4gICAgcHVibGljIGF1dG9fbW9kZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc19hY3RpdmU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaXNfZGVsZXRlOiBib29sZWFuO1xyXG4gICAgcHVibGljIHNhdmVfdGltZTogRGF0ZTtcclxuICAgIHB1YmxpYyBteXBvczogICAgIENfTW92YWJsZVBvaW50O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihhPzogSlNPTl9TYXZlSW5mbykge1xyXG4gICAgICAgIHRoaXMuc2F2ZV9pZCAgID0gLTE7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJfaWQgPSAtMTsgXHJcbiAgICAgICAgdGhpcy51bmlxX25vICAgPSAtMTtcclxuICAgICAgICB0aGlzLnRpdGxlICAgICA9ICcnO1xyXG4gICAgICAgIHRoaXMuZGV0YWlsICAgID0gJyc7XHJcbiAgICAgICAgdGhpcy5wb2ludCAgICAgPSAnJztcclxuICAgICAgICB0aGlzLmF1dG9fbW9kZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNfYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzX2RlbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2F2ZV90aW1lID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5teXBvcyAgICAgPSBuZXcgQ19Nb3ZhYmxlUG9pbnQoKTtcclxuXHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBuZXcoYT86IEpTT05fU2F2ZUluZm8pOiBDX1NhdmVJbmZvIHtcclxuICAgICAgICByZXR1cm4gbmV3IENfU2F2ZUluZm8oYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1NhdmVJbmZvIHtcclxuICAgICAgICBsZXQgc2F2ZV9kYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc2F2ZV9kYXRlID0gdGhpcy5zYXZlX3RpbWUudG9JU09TdHJpbmcoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgc2F2ZV9kYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNhdmVfaWQ6ICAgdGhpcy5zYXZlX2lkLCBcclxuICAgICAgICAgICAgICAgIHBsYXllcl9pZDogdGhpcy5wbGF5ZXJfaWQsICBcclxuICAgICAgICAgICAgICAgIHVuaXFfbm86ICAgdGhpcy51bmlxX25vLCBcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAgICAgdGhpcy50aXRsZSwgXHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6ICAgIHRoaXMuZGV0YWlsLCBcclxuICAgICAgICAgICAgICAgIHBvaW50OiAgICAgdGhpcy5wb2ludCwgXHJcbiAgICAgICAgICAgICAgICBhdXRvX21vZGU6IHRoaXMuYXV0b19tb2RlID8gJzEnIDogJzAnLCBcclxuICAgICAgICAgICAgICAgIGlzX2FjdGl2ZTogdGhpcy5pc19hY3RpdmUgPyAnMScgOiAnMCcsIFxyXG4gICAgICAgICAgICAgICAgaXNfZGVsZXRlOiB0aGlzLmlzX2RlbGV0ZSA/ICcxJyA6ICcwJywgXHJcbiAgICAgICAgICAgICAgICBzYXZlX3RpbWU6IHNhdmVfZGF0ZSwgXHJcbiAgICAgICAgICAgICAgICBteXBvczogICAgIHRoaXMubXlwb3MuZW5jb2RlKCksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1NhdmVEYXRhIEVuY29kZSBFcnJvcjogJyArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlY29kZShzOiBKU09OX1NhdmVJbmZvKTogQ19TYXZlSW5mbyB7XHJcbiAgICAgICAgdGhpcy5zYXZlX2lkICAgPSBzLnNhdmVfaWQgICA/PyB0aGlzLnNhdmVfaWQ7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJfaWQgPSBzLnBsYXllcl9pZCA/PyB0aGlzLnBsYXllcl9pZDsgXHJcbiAgICAgICAgdGhpcy51bmlxX25vICAgPSBzLnVuaXFfbm8gICA/PyB0aGlzLnVuaXFfbm87XHJcbiAgICAgICAgdGhpcy50aXRsZSAgICAgPSBzLnRpdGxlICAgICA/PyB0aGlzLnRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGV0YWlsICAgID0gcy5kZXRhaWwgICAgPz8gdGhpcy5kZXRhaWw7XHJcbiAgICAgICAgdGhpcy5wb2ludCAgICAgPSBzLnBvaW50ICAgICA/PyB0aGlzLnBvaW50O1xyXG4gICAgICAgIGlmIChzLmF1dG9fbW9kZSA9PT0gdW5kZWZpbmVkKSB0aGlzLmF1dG9fbW9kZTsgZWxzZSBzLmF1dG9fbW9kZSAhPT0gJzAnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGlmIChzLmlzX2FjdGl2ZSA9PT0gdW5kZWZpbmVkKSB0aGlzLmlzX2FjdGl2ZTsgZWxzZSBzLmlzX2FjdGl2ZSAhPT0gJzAnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGlmIChzLmlzX2RlbGV0ZSA9PT0gdW5kZWZpbmVkKSB0aGlzLmlzX2RlbGV0ZTsgZWxzZSBzLmlzX2RlbGV0ZSAhPT0gJzAnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGlmIChzLnNhdmVfdGltZSAhPT0gdW5kZWZpbmVkKSB0aGlzLnNhdmVfdGltZSA9IG5ldyBEYXRlKHMuc2F2ZV90aW1lKTsgXHJcblxyXG4gICAgICAgIGlmIChzLm15cG9zICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15cG9zLmRlY29kZShzLm15cG9zKTsgXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWxlcnQoKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJTYXZlSW5mbyBEQVRBOlwiIFxyXG4gICAgICAgICAgICArIFwiXFxuc2F2ZV9pZDogICAgXCIgKyAodGhpcy5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxucGxheWVyX2lkOiAgXCIgKyAodGhpcy5wbGF5ZXJfaWQgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudW5pcV9ubzogICAgXCIgKyAodGhpcy51bmlxX25vICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudGl0bGU6ICAgICAgXCIgKyAodGhpcy50aXRsZSAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuZGV0YWlsOiAgICAgXCIgKyAodGhpcy5kZXRhaWwgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxucG9pbnQ6ICAgICAgXCIgKyAodGhpcy5wb2ludCAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuYXV0b19tb2RlOiAgXCIgKyAodGhpcy5hdXRvX21vZGU/J1knOidOJylcclxuICAgICAgICAgICAgKyBcIlxcbmlzX2FjdGl2ZTogIFwiICsgKHRoaXMuaXNfYWN0aXZlPydZJzonTicpXHJcbiAgICAgICAgICAgICsgXCJcXG5pc19kZWxldGU6ICBcIiArICh0aGlzLmlzX2RlbGV0ZT8nWSc6J04nKVxyXG4gICAgICAgICAgICArIFwiXFxubXl1cmw6ICAgICAgXCIgKyAodGhpcy5teXBvcy51cmwoKSAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnRlYW1fdWlkOiAgIFwiICsgKHRoaXMubXlwb3MudGlkKCkgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sb2Nfa2luZDogICBcIiArICh0aGlzLm15cG9zLmdldF9sY2tkKCkgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubG9jX25hbWU6ICAgXCIgKyAodGhpcy5teXBvcy5nZXRfbmFtZSgpID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxvY191aWQ6ICAgIFwiICsgKHRoaXMubXlwb3MuZ2V0X3VpZCgpICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX1BvaW50IH0gICAgICAgICAgICAgICBmcm9tIFwiLi9DX1BvaW50XCI7XHJcbmltcG9ydCB7IENfUG9pbnREaXIgfSAgICAgICAgICAgIGZyb20gJy4vQ19Qb2ludERpcic7XHJcbmltcG9ydCB7IENfTW92YWJsZVBvaW50IH0gICAgICAgIGZyb20gXCIuL0NfTW92YWJsZVBvaW50XCI7XHJcbmltcG9ydCB7IENfV2Fsa2VyLCBKU09OX1dhbGtlciB9IGZyb20gXCIuL0NfV2Fsa2VyXCI7XHJcbmltcG9ydCB7IENfR29vZHMsICBKU09OX0dvb2RzIH0gIGZyb20gJy4vQ19Hb29kcyc7XHJcbmltcG9ydCB7IENfSGVybywgSlNPTl9IZXJvIH0gICAgIGZyb20gXCIuL0NfSGVyb1wiO1xyXG5pbXBvcnQgeyBJX01hemVPYmogfSAgICAgICAgICAgICBmcm9tIFwiLi9DX01hemVPYmpcIjtcclxuaW1wb3J0IHsgSlNPTl9BbnkgfSAgICAgICAgICAgICAgZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5pbXBvcnQgeyBDX0N1cnJlbnRUZWFtVmlldyB9ICAgICBmcm9tIFwiLi9DX1RlYW1WaWV3XCI7XHJcbmltcG9ydCB7IENfTWF6ZU9ialZpZXcsIElfTWF6ZU9ialZpZXcsIEpTT05fTWF6ZU9ialZpZXcgfSAgZnJvbSBcIi4vQ19NYXplT2JqVmlld1wiO1xyXG5pbXBvcnQgeyBfZ2V0X3V1aWQgfSAgICAgICAgICAgICBmcm9tIFwiLi4vZF91dGwvRl9SYW5kXCI7XHJcbmltcG9ydCB7IENfR29vZHNJdGVtLCBUX0dvb2RzS2luZCB9IGZyb20gXCIuL0NfR29vZHNJdGVtXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fVGVhbSBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGlkPzogICAgICAgIG51bWJlciwgXHJcbiAgICB1bmlxX2lkPzogICBzdHJpbmcsIFxyXG4gICAgc2F2ZV9pZD86ICAgbnVtYmVyLCBcclxuICAgIG5hbWU/OiAgICAgIHN0cmluZywgXHJcbiAgICBsb2NhdGU/OiAgICBKU09OX1dhbGtlcixcclxuICAgIGdvb2RzPzogICAgIEpTT05fR29vZHMsXHJcbiAgICBoZXJvZXM/OiAgICBKU09OX0hlcm9bXSwgXHJcbiAgICBtb3Rpb24/OiAgICBzdHJpbmcsXHJcbiAgICB2aWV3PzogICAgICBKU09OX01hemVPYmpWaWV3fHVuZGVmaW5lZCxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X3RlYW1faW5mbyhhOiBKU09OX1RlYW18dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydChcIlRlYW0gSW5mbzpcIiBcclxuICAgICAgICArIFwiXFxuaWQ6ICAgIFwiICAgICArIChhLmlkICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnVuaXFfaWQ6ICBcIiAgKyAoYS51bmlxX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5uYW1lOiAgXCIgICAgICsgKGEubmFtZSAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2F2ZV9pZDogXCIgICArIChhLnNhdmVfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnVybDogIFwiICAgICAgKyAoYS5sb2NhdGU/LmN1cl91cmwgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sY2tkOiBcIiAgICAgICsgKGEubG9jYXRlPy5raW5kICAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubGNubTogXCIgICAgICArIChhLmxvY2F0ZT8ubmFtZSAgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxjaWQ6IFwiICAgICAgKyAoYS5sb2NhdGU/LmxvY191aWQgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfeDogXCIgICAgICsgKGEubG9jYXRlPy5sb2NfcG9zPy54ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3k6IFwiICAgICArIChhLmxvY2F0ZT8ubG9jX3Bvcz8ueSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl96OiBcIiAgICAgKyAoYS5sb2NhdGU/LmxvY19wb3M/LnogPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfZDogXCIgICAgICsgKGEubG9jYXRlPy5sb2NfcG9zPy5kID8/ICc/JylcclxuICAgICAgICArIFwiXFxuZ29vZHM6IFwiICAgICArIChPYmplY3Qua2V5cyhhLmdvb2RzPz9bXSkubGVuZ3RoKVxyXG4gICAgICAgICsgXCJcXG5oZXJvZXM6IFwiICAgICsgKGEuaGVyb2VzPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxuXHJcbi8vICAgIGlmIChhLmhlcm9lcyAhPT0gdW5kZWZpbmVkKSBhbGVydF9oZXJvZXNfaW5mbyhhLmhlcm9lcyk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ19UZWFtIGltcGxlbWVudHMgSV9NYXplT2JqIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgbmV3T2JqKGo/OiBKU09OX1RlYW0pOiBDX1RlYW0ge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ19UZWFtKGopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG5ld09iaihqPzogSlNPTl9UZWFtKTogQ19UZWFtIHtyZXR1cm4gQ19UZWFtLm5ld09iaihqKTt9XHJcblxyXG4gICAgcHJvdGVjdGVkIG15X2lkOiAgICAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIG15X25hbWU6ICAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHVuaXFfaWQ6ICAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHNhdmVfaWQ6ICAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIHdhbGtlcjogICAgQ19XYWxrZXI7XHJcbiAgICBwcm90ZWN0ZWQgZ29sZDogICAgICBDX0dvb2RzSXRlbTtcclxuICAgIHByb3RlY3RlZCBoZXJvZXM6ICAgIHtbdWlkOiBzdHJpbmddOiBDX0hlcm99O1xyXG5cclxuICAgIHByb3RlY3RlZCBteVZpZXc6ICAgIElfTWF6ZU9ialZpZXd8dW5kZWZpbmVkO1xyXG4gICAgcHJvdGVjdGVkIGhvcGVfbW90aW9uOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX1RlYW0pIHtcclxuXHJcbiAgICAgICAgdGhpcy5teV9pZCAgICAgPSAgMDtcclxuICAgICAgICB0aGlzLm15X25hbWUgICA9ICdOZW8gVGVhbT8nO1xyXG4gICAgICAgIHRoaXMudW5pcV9pZCAgID0gJ21haV90ZWFtIycgKyBfZ2V0X3V1aWQoKTtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgICA9ICAwO1xyXG5cclxuICAgICAgICB0aGlzLm15VmlldyA9IG5ldyBDX0N1cnJlbnRUZWFtVmlldyh0aGlzKSBhcyBJX01hemVPYmpWaWV3O1xyXG4gICAgICAgIHRoaXMud2Fsa2VyID0gbmV3IENfV2Fsa2VyKCk7XHJcbiAgICAgICAgdGhpcy53YWxrZXIuc2V0X3RpZCh0aGlzLnVpZCgpKTtcclxuXHJcbiAgICAgICAgdGhpcy5nb2xkICAgPSBuZXcgQ19Hb29kc0l0ZW0oe2draW5kOiBUX0dvb2RzS2luZC5Hb2xkLCB2YWx1ZTogMH0pO1xyXG4gICAgICAgIHRoaXMuaGVyb2VzID0ge307XHJcbiAgICAgICAgdGhpcy5ob3BlX21vdGlvbiA9ICdOT1AnOyAgICBcclxuICAgICAgICBpZiAoaiAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcHJwKGFyZyA6IEpTT05fVGVhbSkge1xyXG4gICAgICAgIHRoaXMuZGVjb2RlKGFyZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy51bmlxX2lkfVxyXG5cclxuICAgIHB1YmxpYyB3aXRoaW4ocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGhlcmUgPSB0aGlzLndhbGtlcj8uZ2V0X3AoKTtcclxuICAgICAgICByZXR1cm4gaGVyZT8ud2l0aGluKHApID8/IGZhbHNlOyBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlldygpOiAgSV9NYXplT2JqVmlld3x1bmRlZmluZWQge3JldHVybiB0aGlzLm15Vmlld31cclxuICAgIHB1YmxpYyB3YWxrKCk6ICBDX1dhbGtlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2Fsa2VyXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBjYW5UaHJvdWdoKCk6IGJvb2xlYW4ge3JldHVybiB0cnVlfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaHJlcygpOiAgQ19IZXJvW10ge1xyXG4gICAgICAgIGNvbnN0IGhyZXM6IENfSGVyb1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaWkgaW4gdGhpcy5oZXJvZXMpIGhyZXMucHVzaCh0aGlzLmhlcm9lc1tpaV0pO1xyXG4gICAgICAgIHJldHVybiBocmVzO1xyXG4gICAgfSBcclxuICAgIHB1YmxpYyBjbGVhcl9ocmVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGVyb2VzID0ge307XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRkX2hlcm8oaGVybzogQ19IZXJvKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZXJvZXNbaGVyby51aWQoKV0gPSBoZXJvO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJtdl9oZXJvKGhlcm86IENfSGVybyk6IHZvaWQge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmhlcm9lc1toZXJvLnVpZCgpXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X2xvYygpOiBDX01vdmFibGVQb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2Fsa2VyO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9sb2MobG9jOiBDX01vdmFibGVQb2ludCk6IHZvaWQge1xyXG4gICAgICAgICh0aGlzLndhbGtlciA/Pz0gbmV3IENfV2Fsa2VyKCkpLmRlY29kZShsb2MuZW5jb2RlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRfcGQoKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2Fsa2VyLmdldF9wZCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fb2JqX3RvX3N0cmluZyhvYTogQ19UZWFtKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2EsIG51bGwsIFwiXFx0XCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX29iakFycmF5X3RvX3N0cmluZyhvYWE6IHtbdWlkOiBzdHJpbmddOiBDX1RlYW19KTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBvYSA9IFtdIGFzIENfVGVhbVtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gb2FhKSBvYS5wdXNoKG9hYVtpaV0pO1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYSwgbnVsbCwgXCJcXHRcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fc3RyaW5nX3RvX29iaih0eHQ6IHN0cmluZyk6IENfVGVhbSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaiAgID0gSlNPTi5wYXJzZSh0eHQpIGFzIENfVGVhbVtdO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENfVGVhbShqKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDX1RlYW0oKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ190b19vYmpBcnJheSh0eHQ6IHN0cmluZyk6IHtbdWlkOiBzdHJpbmddOiBDX1RlYW19IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqICAgPSBKU09OLnBhcnNlKHR4dCkgYXMgSlNPTl9UZWFtW107XHJcbiAgICAgICAgICAgIGNvbnN0IG1wYSA9IHt9IGFzIHtbaWQ6IHN0cmluZ106IENfVGVhbX07XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgamogb2Ygaikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWFhID0gbmV3IENfVGVhbSgpLmRlY29kZShqaik7XHJcbiAgICAgICAgICAgICAgICBtcGFbYWFhLnVpZCgpXSA9IGFhYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbXBhO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9UZWFtIHtcclxuICAgICAgICB0aGlzLmdldF9sb2MoKTsgLy8gTG9jYXRpb27mg4XloLHjgpLmnIDmlrDjgavmm7TmlrBcclxuXHJcbiAgICAgICAgY29uc3QganNvbl9oZXJvZXM6IEpTT05fSGVyb1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaWkgaW4gdGhpcy5oZXJvZXMpIGpzb25faGVyb2VzLnB1c2godGhpcy5oZXJvZXNbaWldLmVuY29kZSgpKTsgIFxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogICAgICAgIHRoaXMubXlfaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICAgICAgdGhpcy5teV9uYW1lLFxyXG4gICAgICAgICAgICB1bmlxX2lkOiAgIHRoaXMudW5pcV9pZCxcclxuICAgICAgICAgICAgc2F2ZV9pZDogICB0aGlzLnNhdmVfaWQsXHJcbiAgICAgICAgICAgIGxvY2F0ZTogICAgdGhpcy53YWxrZXIuZW5jb2RlKCksXHJcbiAgICAgICAgICAgIGdvbGQ6ICAgICAgdGhpcy5nb2xkLmVuY29kZSgpLFxyXG4gICAgICAgICAgICBoZXJvZXM6ICAgIGpzb25faGVyb2VzLFxyXG4gICAgICAgICAgICBtb3Rpb246ICAgIHRoaXMuaG9wZV9tb3Rpb24sXHJcbiAgICAgICAgICAgIHZpZXc6ICAgICAgdGhpcy5teVZpZXc/LmVuY29kZSgpID8/IHt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IEpTT05fVGVhbXx1bmRlZmluZWQpOiBDX1RlYW0ge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpICByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGEuaWQgICAhPT0gdW5kZWZpbmVkKSAgICB0aGlzLm15X2lkICAgICAgID0gYS5pZDtcclxuICAgICAgICBpZiAoYS5uYW1lICE9PSB1bmRlZmluZWQpICAgIHRoaXMubXlfbmFtZSAgICAgPSBhLm5hbWU7XHJcbiAgICAgICAgaWYgKGEudW5pcV9pZCAhPT0gdW5kZWZpbmVkKSB0aGlzLnVuaXFfaWQgICAgID0gYS51bmlxX2lkO1xyXG4gICAgICAgIGlmIChhLnNhdmVfaWQgIT09IHVuZGVmaW5lZCkgdGhpcy5zYXZlX2lkICAgICA9IGEuc2F2ZV9pZDtcclxuICAgICAgICBpZiAoYS5tb3Rpb24gIT09IHVuZGVmaW5lZCkgIHRoaXMuaG9wZV9tb3Rpb24gPSBhLm1vdGlvbjtcclxuXHJcbiAgICAgICAgaWYgKGEubG9jYXRlICE9PSB1bmRlZmluZWQpICB0aGlzLndhbGtlci5kZWNvZGUoYS5sb2NhdGUpO1xyXG4gICAgICAgIGlmIChhLmdvbGQgICAhPT0gdW5kZWZpbmVkKSAgdGhpcy5nb2xkLmRlY29kZShhLmdvbGQpO1xyXG5cclxuICAgICAgICBpZiAoYS5oZXJvZXMgIT09IHVuZGVmaW5lZCkgIHtcclxuICAgICAgICAgICAgdGhpcy5oZXJvZXMgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqc29uX2hlcm8gb2YgYS5oZXJvZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlcm8gPSBuZXcgQ19IZXJvKGpzb25faGVybyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlcm9lc1toZXJvLnVpZCgpXSA9IGhlcm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbi8qXHJcbiAgICAgICAgaWYgKGEudmlldyAgICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhhLnZpZXcpLmxlbmd0aCA+IDApIHRoaXMubXlWaWV3ID0gQ19NYXplT2JqVmlldy5uZXdPYmooYS52aWV3KTsgXHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5teVZpZXcgPSBuZXcgQ19DdXJyZW50VGVhbVZpZXcodGhpcykgYXMgSV9NYXplT2JqVmlldzsgXHJcbiAgICAgICAgfVxyXG4qL1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBlbmNvZGVfYWxsKGFsbF90ZWFtOiBDX1RlYW1bXSk6IEpTT05fVGVhbVtdIHtcclxuICAgICAgICBjb25zdCBhbGxfdGVhbV9kYXRhOiBKU09OX1RlYW1bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHRlYW0gb2YgYWxsX3RlYW0pIHtcclxuICAgICAgICAgICAgYWxsX3RlYW1fZGF0YS5wdXNoKHRlYW0uZW5jb2RlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsX3RlYW1fZGF0YTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVjb2RlX2FsbChhbGxfdGVhbV9kYXRhOiBKU09OX1RlYW1bXSk6IENfVGVhbVtdIHtcclxuICAgICAgICBjb25zdCBhbGxfdGVhbTogQ19UZWFtW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB0ZWFtX2RhdGEgb2YgYWxsX3RlYW1fZGF0YSkge1xyXG4gICAgICAgICAgICBhbGxfdGVhbS5wdXNoKChuZXcgQ19UZWFtKCkpLmRlY29kZSh0ZWFtX2RhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbF90ZWFtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWxlcnQoKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJUZWFtIEluZm86XCIgXHJcbiAgICAgICAgICAgICsgXCJcXG5pZDogICAgXCIgICAgICsgKHRoaXMubXlfaWQgICAgICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG51bmlxX2lkOiAgXCIgICsgKHRoaXMudW5pcV9pZCAgICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5uYW1lOiAgXCIgICAgICsgKHRoaXMubXlfbmFtZSAgICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zYXZlX2lkOiBcIiAgICsgKHRoaXMuc2F2ZV9pZCAgICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG51cmw6ICBcIiAgICAgICsgKHRoaXMud2Fsa2VyLnVybCgpICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sY2tkOiBcIiAgICAgICsgKHRoaXMud2Fsa2VyLmdldF9sY2tkX3N0cigpID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxjbm06IFwiICAgICAgKyAodGhpcy53YWxrZXIuZ2V0X25hbWUoKSAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubGNpZDogXCIgICAgICArICh0aGlzLndhbGtlci5nZXRfdWlkKCkgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfeDogXCIgICAgICsgKHRoaXMud2Fsa2VyLmdldF9wKCkueCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfeTogXCIgICAgICsgKHRoaXMud2Fsa2VyLmdldF9wKCkueSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfejogXCIgICAgICsgKHRoaXMud2Fsa2VyLmdldF9wKCkueiA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfZDogXCIgICAgICsgKHRoaXMud2Fsa2VyLmdldF9kKCkgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5nb2xkOiBcIiAgICAgICsgKE9iamVjdC5rZXlzKHRoaXMuZ29sZCA/PyB7fSkubGVuZ3RoKVxyXG4gICAgICAgICAgICArIFwiXFxuaGVyb2VzOiBcIiAgICArICh0aGlzLmhlcm9lcz8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhbGVydF9ocmVzKCk6IHZvaWQge1xyXG4vLyAgICAgICAgYWxlcnQoXCJUZWFtIEluZm86XCIpO1xyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gdGhpcy5oZXJvZXMpIHRoaXMuaGVyb2VzW2lpXS5hbGVydCgpO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgVF9EaXJlY3Rpb24gfSAgICAgICBmcm9tICcuL0NfUG9pbnREaXInO1xyXG5pbXBvcnQgeyBDX1RlYW0sIEpTT05fVGVhbSB9IGZyb20gXCIuL0NfVGVhbVwiO1xyXG5pbXBvcnQgeyBUX1dhbGwgfSAgICAgICAgICAgIGZyb20gXCIuLi9kX21kbC9DX1dhbGxcIjtcclxuaW1wb3J0IHsgSV9NYXplT2JqVmlldywgSlNPTl9NYXplT2JqVmlldyB9ICBmcm9tIFwiLi9DX01hemVPYmpWaWV3XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ19DdXJyZW50VGVhbVZpZXcgIGltcGxlbWVudHMgSV9NYXplT2JqVmlldyB7XHJcbiAgICBwdWJsaWMgIHN0YXRpYyBuZXdPYmooaj86IEpTT05fVGVhbSk6IElfTWF6ZU9ialZpZXcge1xyXG4gICAgICAgIGNvbnN0IHRlYW0gPSBuZXcgQ19UZWFtKGopO1xyXG4gICAgICAgIHJldHVybiBuZXcgQ19DdXJyZW50VGVhbVZpZXcodGVhbSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgIG5ld09iaihqPzogSlNPTl9UZWFtKTogSV9NYXplT2JqVmlldyB7cmV0dXJuIENfQ3VycmVudFRlYW1WaWV3Lm5ld09iaihqKX1cclxuXHJcbiAgICBcclxuICAgIHByaXZhdGUgbXlfdGVhbTogQ19UZWFtO1xyXG4gICAgcHJpdmF0ZSBteV9sYXllcjogIG51bWJlciA9IDk5O1xyXG4gICAgcHVibGljICBjb25zdHJ1Y3Rvcih0ZWFtOiBDX1RlYW0pIHtcclxuICAgICAgICB0aGlzLm15X3RlYW0gPSB0ZWFtO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsYXllcigpOiBudW1iZXIgICAgICAgICB7cmV0dXJuIHRoaXMubXlfbGF5ZXI7fVxyXG4gICAgcHVibGljIHNldF9sYXllcihsYXllcjogbnVtYmVyKTogdm9pZCB7dGhpcy5teV9sYXllciA9IGxheWVyO31cclxuICAgIHB1YmxpYyBsZXR0ZXIoKTogc3RyaW5nfG51bGwge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5teV90ZWFtLndhbGsoKS5nZXRfZCgpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjogcmV0dXJuICfihpEnO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHJldHVybiAn4oaSJztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiByZXR1cm4gJ+KGkyc7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogcmV0dXJuICfihpAnO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gJ/CfjIAnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBjYW5TaG93KCk6IGJvb2xlYW57cmV0dXJuIGZhbHNlfVxyXG4gICAgcHVibGljIGRyb3czRChmcm90OiBUX1dhbGwsIGJhY2s6IFRfV2FsbCk6IHZvaWQge31cclxuICAgIHB1YmxpYyBwYWRfdCgpOiAgIG51bWJlciB7cmV0dXJuIDAuMH0gXHJcbiAgICBwdWJsaWMgcGFkX2QoKTogICBudW1iZXIge3JldHVybiAwLjB9IFxyXG4gICAgcHVibGljIHBhZF9zKCk6ICAgbnVtYmVyIHtyZXR1cm4gMC4wfSBcclxuICAgIHB1YmxpYyBjb2xfZigpOiAgIHN0cmluZ3xudWxsIHtyZXR1cm4gbnVsbH0gXHJcbiAgICBwdWJsaWMgY29sX2IoKTogICBzdHJpbmd8bnVsbCB7cmV0dXJuIG51bGx9IFxyXG4gICAgcHVibGljIGNvbF9zKCk6ICAgc3RyaW5nfG51bGwge3JldHVybiBudWxsfSBcclxuICAgIHB1YmxpYyBjb2xfdCgpOiAgIHN0cmluZ3xudWxsIHtyZXR1cm4gbnVsbH0gXHJcbiAgICBwdWJsaWMgY29sX2QoKTogICBzdHJpbmd8bnVsbCB7cmV0dXJuIG51bGx9IFxyXG4gICAgcHVibGljIGNvbF9sKCk6ICAgc3RyaW5nfG51bGwge3JldHVybiBudWxsfSBcclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTWF6ZU9ialZpZXcge3JldHVybiB7Y25hbWU6ICdDdXJyZW50VGVhbVZpZXcnfX1cclxuICAgIHB1YmxpYyBkZWNvZGUoajogSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQpOiBJX01hemVPYmpWaWV3IHtyZXR1cm4gdGhpcyBhcyBJX01hemVPYmpWaWV3fVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ19Qb2ludERpciwgVF9EaXJlY3Rpb24gfSAgICAgICAgICAgZnJvbSBcIi4vQ19Qb2ludERpclwiO1xyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCwgSlNPTl9Nb3ZhYmxlUG9pbnQgfSBmcm9tIFwiLi9DX01vdmFibGVQb2ludFwiO1xyXG5pbXBvcnQgeyBJX0xvY2F0ZSB9ICAgICBmcm9tIFwiLi9DX0xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IElfSG9wZUFjdGlvbiB9IGZyb20gXCIuL0lfQ29tbW9uXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX1dhbGtlciBleHRlbmRzIEpTT05fTW92YWJsZVBvaW50IHtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfV2Fsa2VyIGV4dGVuZHMgQ19Nb3ZhYmxlUG9pbnQge1xyXG4gICAgY29uc3RydWN0b3Ioaj86IEpTT05fV2Fsa2VyKSB7XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3goKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5sb2NfcG9zLnh9XHJcbiAgICBwdWJsaWMgZ2V0X3koKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5sb2NfcG9zLnl9XHJcbiAgICBwdWJsaWMgZ2V0X3ooKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5sb2NfcG9zLnp9XHJcblxyXG4gICAgcHVibGljIHNldF94KHg6IG51bWJlcik6IHZvaWQge3RoaXMubG9jX3Bvcy54ID0geH1cclxuICAgIHB1YmxpYyBzZXRfeSh5OiBudW1iZXIpOiB2b2lkIHt0aGlzLmxvY19wb3MueSA9IHl9XHJcbiAgICBwdWJsaWMgc2V0X3ooejogbnVtYmVyKTogdm9pZCB7dGhpcy5sb2NfcG9zLnogPSB6fVxyXG5cclxuICAgIHB1YmxpYyBzZXRfcGxhY2UoXHJcbiAgICAgICAgcGxhY2U6IElfTG9jYXRlLCBcclxuICAgICAgICB1cmw/OiAgc3RyaW5nLCBcclxuICAgICAgICBwb3M/OiAgQ19Qb2ludERpcikge1xyXG5cclxuICAgICAgICB0aGlzLnNldF91aWQgKHBsYWNlLnVpZCgpKTtcclxuICAgICAgICB0aGlzLnNldF9sY2tkKHBsYWNlLmdldF9sY2tkKCkpO1xyXG4gICAgICAgIHRoaXMuc2V0X25hbWUocGxhY2UuZ2V0X25hbWUoKSk7XHJcblxyXG4gICAgICAgIGlmICh1cmwgIT09IHVuZGVmaW5lZCkgdGhpcy5zZXRfdXJsKHVybCk7XHJcbiAgICAgICAgaWYgKHBvcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0X3BkKHBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIGhvcGVfcF9md2QoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiTW92ZVwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wX2Z3ZCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMuc2V0X3BfZndkKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9wZV9wX2JhaygpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJNb3ZlXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMuZ2V0X3BfYmFrKCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy5zZXRfcF9iYWsoKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGhvcGVfcF9sZnQoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiTW92ZVwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wX2xmdCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMuc2V0X3BfbGZ0KCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9wZV9wX3JndCgpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJNb3ZlXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMuZ2V0X3Bfcmd0KCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy5zZXRfcF9yZ3QoKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBob3BlX3R1cm5fcigpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJUdXJuXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMuZ2V0X3BkKCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy50dXJuX3IoKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBob3BlX3R1cm5fbCgpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJUdXJuXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMuZ2V0X3BkKCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy50dXJuX2woKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaG9wZV9wX3VwKCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIlVwXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMuZ2V0X3BfdXAoKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLm1vdmVfcF91cCgpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhvcGVfcF9kb3duKCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIkRvd25cIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy5nZXRfcF9kb3duKCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy5tb3ZlX3BfZG93bigpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlX3BfdXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRfcF91cCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG1vdmVfcF9kb3duKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3BfZG93bigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc05HKCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldF9wX2Z3ZCgpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX2dldF9wX21vdmUoMSwgMCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BfZndkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3BkKHRoaXMuZ2V0X3BfZndkKCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wX2JhaygpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX2dldF9wX21vdmUoLTEsIDApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wX2JhaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldF9wZCh0aGlzLmdldF9wX2JhaygpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfcF9sZnQoKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19nZXRfcF9tb3ZlKDAsIC0xKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcF9sZnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRfcGQodGhpcy5nZXRfcF9sZnQoKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3Bfcmd0KCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9fZ2V0X3BfbW92ZSgwLCAxKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcF9yZ3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRfcGQodGhpcy5nZXRfcF9yZ3QoKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BfdXAoKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgY29uc3QgcCA9IG5ldyBDX1BvaW50RGlyKHRoaXMubG9jX3Bvcyk7XHJcbiAgICAgICAgcC56LS07XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BfdXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRfcGQodGhpcy5nZXRfcF91cCgpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfcF9kb3duKCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIGNvbnN0IHAgPSBuZXcgQ19Qb2ludERpcih0aGlzLmxvY19wb3MpO1xyXG4gICAgICAgIHAueisrO1xyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wX2Rvd24oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRfcGQodGhpcy5nZXRfcF9kb3duKCkpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9fZ2V0X3BfbW92ZShvZmZzZXRGQjogbnVtYmVyLCBvZmZzZXRMUjogbnVtYmVyKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgY29uc3QgcCA9IG5ldyBDX1BvaW50RGlyKHRoaXMubG9jX3Bvcyk7XHJcbiAgICAgICAgaWYgKG9mZnNldEZCICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5sb2NfcG9zLmQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjogcC55IC09IG9mZnNldEZCO2JyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOiBwLnggKz0gb2Zmc2V0RkI7YnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6IHAueSArPSBvZmZzZXRGQjticmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogcC54IC09IG9mZnNldEZCO2JyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvZmZzZXRMUiAhPT0gMCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMubG9jX3Bvcy5kKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHAueCArPSBvZmZzZXRMUjticmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogcC55ICs9IG9mZnNldExSO2JyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiBwLnggLT0gb2Zmc2V0TFI7YnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHAueSAtPSBvZmZzZXRMUjticmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfYXJvdW5kKGZyb250OiBudW1iZXIsIHJpZ2h0Om51bWJlciwgdXA6IG51bWJlciA9IDApOiBDX1BvaW50RGlyIHtcclxuICAgICAgICB2YXIgdGFyZ2V0X3ggID0gdGhpcy5sb2NfcG9zLng7XHJcbiAgICAgICAgdmFyIHRhcmdldF95ICA9IHRoaXMubG9jX3Bvcy55O1xyXG4gICAgICAgIHZhciB0YXJnZXRfeiAgPSB0aGlzLmxvY19wb3MueiAtIHVwO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5sb2NfcG9zLmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3ggKz0gcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeSAtPSBmcm9udDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeCArPSBmcm9udDtcclxuICAgICAgICAgICAgICAgIHRhcmdldF95ICs9IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzpcclxuICAgICAgICAgICAgICAgIHRhcmdldF94IC09IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3kgKz0gZnJvbnQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3ggLT0gZnJvbnQ7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeSAtPSByaWdodDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IENfUG9pbnREaXIoe3g6IHRhcmdldF94LCB5OiB0YXJnZXRfeSwgejogdGFyZ2V0X3osIGQ6IHRoaXMubG9jX3Bvcy5kfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdHVybl9yKCk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5sb2NfcG9zLmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLkU7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5TO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uVzticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLk47YnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHR1cm5fbCgpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubG9jX3Bvcy5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5XO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uTjticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLkU7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5TO2JyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyB0dXJuX2IoKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmxvY19wb3MuZCkge1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uUzticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLlc7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5OO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uVzticmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fV2Fsa2VyIHtcclxuICAgICAgICBjb25zdCBqID0gc3VwZXIuZW5jb2RlKCkgYXMgSlNPTl9XYWxrZXI7XHJcbiAgICAgICAgcmV0dXJuIGo7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IEpTT05fV2Fsa2VyKTogQ19XYWxrZXIge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHN1cGVyLmRlY29kZShhKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQge1RfTWFrZUVudW1UeXBlfSBmcm9tIFwiLi4vZF91dGwvVF9NYWtlRW51bVR5cGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUX0RpcmVjdGlvbiA9IHtcclxuICAgIE46ICAgMCxcclxuICAgIEU6ICAgMSxcclxuICAgIFM6ICAgMixcclxuICAgIFc6ICAgMyxcclxuICAgIFg6ICA5OSxcclxuICAgIE1BWDogM1xyXG59IGFzIGNvbnN0O1xyXG5leHBvcnQgdHlwZSBUX0RpcmVjdGlvbiA9IFRfTWFrZUVudW1UeXBlPHR5cGVvZiBUX0RpcmVjdGlvbj47XHJcblxyXG5leHBvcnQgdmFyICREaXJlY3Rpb25OYW1lID0ge1xyXG4gICAgMDogICfljJcnLFxyXG4gICAgMTogICfmnbEnLFxyXG4gICAgMjogICfljZcnLFxyXG4gICAgMzogICfopb8nLFxyXG4gICAgOTk6ICforI4nXHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgLy8g5LiA6Iis44Gr5L2/44GI44KL44Om44O844OG44Kj44Oq44OG44Kj44Gq5ZGq5paHXHJcbiAgICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jjgpLliJfmjJnlnovjgajjgZfjgablnovljJbjgZnjgovjga7jgavliKnnlKhcclxuICAgIGltcG9ydCB7VF9NYWtlRW51bVR5cGV9IGZyb20gXCIuLi9kX3V0bC9UX01ha2VFbnVtVHlwZVwiO1xyXG5cclxuICAgIC8vIOODgOODs+OCuOODp+ODs+ODnuODg+ODl+OBruOCu+ODq+OBrueorumhnuOCkuihqOOBmeWIl+aMmeWei1xyXG4gICAgLy8gTm9EZWY6IOacquWumue+qeODu+S4jeaYjlxyXG4gICAgLy8gRmxvb3I6IOW6ilxyXG4gICAgLy8gVW5leHA6IOacqui4j+WcsFxyXG4gICAgLy8gU3RvbmU6IOefs+WjgVxyXG4gICAgLy8gU3RyVXA6IOS4iuOCiumajuautVxyXG4gICAgLy8gU3RyRG46IOS4i+OCiumajuautVxyXG4gICAgLy8gRW1wdHk6IOWIneacn+eKtuaFi+ODu+S9leOCguOBquOBl1xyXG4gICAgLy8gXHJcbiAgICAvLyBmdW5jdGlvbiB0b19pbnQoTXpLaW5kKTogICAgICBpbnQgICAgICAgIOWIl+aMmeWei+OBq+WvvuW/nOOBmeOCi+WApCjmlbTmlbDlgKQp44KS6L+U44GZXHJcbiAgICAvLyBmdW5jdGlvbiBmcm9tX2ludChpbnQpOiAgICAgICBUX016S2luZCAgICAg5pW05pWw5YCk44Gr5a++5b+c44GZ44KL5YiX5oyZ5Z6L44KS6L+U44GZKOOCr+ODqeOCueODoeOCveODg+ODiSlcclxuICAgIC8vIGZ1bmN0aW9uIHRvX2xldHRlcihNektpbmQpOiAgIHN0cmluZyAgICAg5YiX5oyZ5Z6L44Gr5a++5b+c44GZ44KL5paH5a2X44KS6L+U44GZKOODgOODs+OCuOODp+ODs+OBrjJE6KGo56S655SoKVxyXG4gICAgLy8gZnVuY3Rpb24gZnJvbV9sZXR0ZXIoc3RyaW5nKTogVF9NektpbmQgICAgIOaWh+Wtl+OBq+WvvuW/nOOBmeOCi+WIl+aMmeWei+OCkui/lOOBmSjjgq/jg6njgrnjg6Hjgr3jg4Pjg4kpXHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IFRfTXpLaW5kOntba2V5OiBzdHJpbmddOiBudW1iZXJ9ICA9IHtcclxuICAgICAgICBOb0RlZjogICAwLFxyXG4gICAgICAgIEZsb29yOiAgIDEsXHJcbiAgICAgICAgVW5leHA6ICAgMixcclxuICAgICAgICBTdG9uZTogICAzLFxyXG4gICAgICAgIFVua3duOiAgIDQsXHJcbiAgICAgICAgU3RyVXA6ICAgNSxcclxuICAgICAgICBTdHJEbjogICA2LFxyXG4gICAgICAgIFN0clVEOiAgIDcsXHJcbiAgICAgICAgRW1wdHk6IDI1NSxcclxuICAgIH0gYXMgY29uc3Q7XHJcbiAgICBleHBvcnQgdHlwZSBUX016S2luZCAgID0gVF9NYWtlRW51bVR5cGU8dHlwZW9mIFRfTXpLaW5kPjtcclxuXHJcbiAgICBleHBvcnQgY29uc3QgVF9Sdk16S2luZDp7W2tleTogbnVtYmVyXTogVF9NektpbmR9ICA9IHtcclxuICAgICAgICAwOiAgIFRfTXpLaW5kLk5vRGVmLFxyXG4gICAgICAgIDE6ICAgVF9NektpbmQuRmxvb3IsXHJcbiAgICAgICAgMjogICBUX016S2luZC5VbmV4cCxcclxuICAgICAgICAzOiAgIFRfTXpLaW5kLlN0b25lLFxyXG4gICAgICAgIDQ6ICAgVF9NektpbmQuVW5rd24sXHJcbiAgICAgICAgNTogICBUX016S2luZC5TdHJVcCxcclxuICAgICAgICA2OiAgIFRfTXpLaW5kLlN0ckRuLFxyXG4gICAgICAgIDc6ICAgVF9NektpbmQuU3RyVUQsXHJcbiAgICAgICAgMjU1OiBUX016S2luZC5FbXB0eSxcclxuICAgIH0gYXMgY29uc3Q7XHJcbiAgICBleHBvcnQgdHlwZSBUX1J2TXpLaW5kID0gVF9NYWtlRW51bVR5cGU8dHlwZW9mIFRfUnZNektpbmQ+O1xyXG5cclxuIiwiLy8g55S76Z2i6KGo56S655So44Oh44OD44K744O844K4KOmAmuW4uOeUqOOBqOOCqOODqeODvOeUqCnjga7jgqvjg5fjgrvjg6vljJZcclxuZXhwb3J0IGNsYXNzIENfRHNwTWVzc2FnZSB7XHJcbiAgICBwcml2YXRlIGlzSFRNTDogYm9vbGVhbjsgICAgICAgLy8g6KGo56S65YWI44GMSFRNTOOBiyh0cnVlKeOAgeOCs+ODs+OCveODvOODq+OBiyhmYWxzZSnjga7mjIflrppcclxuICAgIHByaXZhdGUgbm9yX21lc3NhZ2U6IHN0cmluZ1tdOyAvLyDpgJrluLjjga7jg6Hjg4Pjgrvjg7zjgrjjgpLmoLzntI3jgZnjgovmloflrZfliJfphY3liJdcclxuICAgIHByaXZhdGUgZXJyX21lc3NhZ2U6IHN0cmluZ1tdOyAvLyDjgqjjg6njg7zjg6Hjg4Pjgrvjg7zjgrjjgpLmoLzntI3jgZnjgovmloflrZfliJfphY3liJdcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoaXNIVE1MOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLmlzSFRNTCAgICAgID0gaXNIVE1MO1xyXG4gICAgICAgIHRoaXMubm9yX21lc3NhZ2UgPSBbXTtcclxuICAgICAgICB0aGlzLmVycl9tZXNzYWdlID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldF9ub3JfbWVzc2FnZShtc2c6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9yX21lc3NhZ2UucHVzaChtc2cpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0X2Vycl9tZXNzYWdlKG1zZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lcnJfbWVzc2FnZS5wdXNoKG1zZyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwbGF5X25vcl9tZXNzYWdlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm5vcl9tZXNzYWdlLmxlbmd0aCA8IDEpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNIVE1MKSB7XHJcbiAgICAgICAgICAgIGxldCBhbGxfbXNnID0gXCI8cCBjbGFzcz0nbm9ybWFsX21lc3NhZ2UnPlxcblwiO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1zZyBvZiB0aGlzLm5vcl9tZXNzYWdlKSBhbGxfbXNnICs9IGAke21zZ308L2JyPlxcbmA7XHJcbiAgICAgICAgICAgIGFsbF9tc2cgKz0gIFwiPC9wPlxcblwiO1xyXG4gICAgICAgICAgICBhbGVydChhbGxfbXNnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1zZyBvZiB0aGlzLm5vcl9tZXNzYWdlKSBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3BsYXlfZXJyX21lc3NhZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXJyX21lc3NhZ2UubGVuZ3RoIDwgMSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0hUTUwpIHtcclxuICAgICAgICAgICAgbGV0IGFsbF9tc2cgPSBcIjxwIGNsYXNzPSdlcnJvcl9tZXNzYWdlJz5cXG5cIjtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBtc2cgb2YgdGhpcy5lcnJfbWVzc2FnZSkgYWxsX21zZyArPSBgJHttc2d9PC9icj5cXG5gO1xyXG4gICAgICAgICAgICBhbGxfbXNnICs9ICBcIjwvcD5cXG5cIjtcclxuICAgICAgICAgICAgYWxlcnQoYWxsX21zZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlxcblxcblxcbiMjI1xcbiMjIyBFUlJPUiBPY2N1ZXJkLlxcbiMjI1xcblwiKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBtc2cgb2YgdGhpcy5lcnJfbWVzc2FnZSkgY29uc29sZS5lcnJvcihgIyMjICR7bXNnfWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiIyMjXFxuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwdWJsaWMgcGRvX2Vycm9yKGU6IGFueSwgZXJybXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBlY29kZSA9IGU/LmdldENvZGUoKSAgICA/PyAnOTk5OTknO1xyXG4gICAgICAgIGNvbnN0IGVtZXNzID0gZT8uZ2V0TWVzc2FnZSgpID8/ICc/Pz8nO1xyXG4gICAgICAgIHRoaXMuc2V0X2Vycl9tZXNzYWdlKGVycm1zZyk7XHJcbiAgICAgICAgdGhpcy5zZXRfZXJyX21lc3NhZ2UoYGNvZGU6ICR7ZWNvZGV9YCk7XHJcbiAgICAgICAgdGhpcy5zZXRfZXJyX21lc3NhZ2UoYG1lc3NhZ2U6ICR7ZW1lc3N9YCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0X25vcl9tZXNzYWdlcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLm5vcl9tZXNzYWdlXTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfZXJyX21lc3NhZ2VzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gWy4uLnRoaXMuZXJyX21lc3NhZ2VdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc19lcnIoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICB0aGlzLmVycl9tZXNzYWdlLmxlbmd0aCAhPT0gMDtcclxuICAgIH1cclxufVxyXG4iLCIvLyDmlbDlgKTjg4Hjgqfjg4Pjgq9cclxuZXhwb3J0IGZ1bmN0aW9uIF9pc051bShudW1WYWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgLy8g44OB44Kn44OD44Kv5p2h5Lu244OR44K/44O844OzXHJcbiAgICBjb25zdCBwYXR0ZXJuID0gL15bLStdPyhbMS05XVxcZCp8MCkoXFwuXFxkKyk/JC87XHJcbiAgICAvLyDmlbDlgKTjg4Hjgqfjg4Pjgq9cclxuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobnVtVmFsKTtcclxufVxyXG5cclxuLy8g5pWw5YCk5Y+W44KK5Ye644GXXHJcbmV4cG9ydCBmdW5jdGlvbiBfZ2V0TnVtKG51bVZhbDogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIC8vIOODgeOCp+ODg+OCr+adoeS7tuODkeOCv+ODvOODs1xyXG4vLyAgICBjb25zdCBwYXR0ZXJuID0gL1stXT8oWzEtOV1cXGQqfDApKFxcLlxcZCspPy87XHJcbiAgICBjb25zdCBwYXR0ZXJuID0gLyhbXjAtOV0pL2c7XHJcbiAgICBjb25zdCB2YWxzdHIgID0gbnVtVmFsLnJlcGxhY2UocGF0dGVybiwnJyk7XHJcbiAgICAvLyDmlbDlgKTjg4Hjgqfjg4Pjgq9cclxuICAgIHJldHVybiBOdW1iZXIodmFsc3RyKTtcclxufVxyXG5cclxuLy8g5Zub5o2o5LqU5YWlXHJcbmV4cG9ydCBmdW5jdGlvbiBfcm91bmQobnVtOiBudW1iZXIsIGRpZ2l0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgbXVsdGlwbGllciA9IE1hdGgucG93KDEwLCBkaWdpdCk7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBtdWx0aXBsaWVyKSAvIG11bHRpcGxpZXI7XHJcbn1cclxuXHJcbi8vIOWIh+OCiuS4iuOBklxyXG5leHBvcnQgZnVuY3Rpb24gX2NlaWwobnVtOiBudW1iZXIsIGRpZ2l0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgbXVsdGlwbGllciA9IE1hdGgucG93KDEwLCBkaWdpdCk7XHJcbiAgICByZXR1cm4gTWF0aC5jZWlsKG51bSAqIG11bHRpcGxpZXIpIC8gbXVsdGlwbGllcjtcclxufVxyXG5cclxuXHJcbi8vIOWIh+OCiuS4i+OBklxyXG5leHBvcnQgZnVuY3Rpb24gX2Zsb29yKG51bTogbnVtYmVyLCBkaWdpdDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IG11bHRpcGxpZXIgPSBNYXRoLnBvdygxMCwgZGlnaXQpO1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IobnVtICogbXVsdGlwbGllcikgLyBtdWx0aXBsaWVyO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9taW4oYTogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGEucmVkdWNlKChuMTogbnVtYmVyLCBuMjogbnVtYmVyKSA9PiBNYXRoLm1pbihuMSwgbjIpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9tYXgoYTogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGEucmVkdWNlKChuMTogbnVtYmVyLCBuMjogbnVtYmVyKSA9PiBNYXRoLm1heChuMSwgbjIpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBfbWF4LCBfbWluLCBfcm91bmQgfSBmcm9tIFwiLi9GX01hdGhcIjtcclxuXHJcbi8vIOS5seaVsOmWouaVsOWRvOOBs+WHuuOBl+eUqOOBruWei+Wuo+iogFxyXG50eXBlIFRfZnJhbmQgPSAoKT0+bnVtYmVyXHJcbmNvbnN0IGZyYW5kOiBUX2ZyYW5kID0gICgpPT57cmV0dXJuIE1hdGgucmFuZG9tKCl9XHJcblxyXG4vLyDkuIDmp5jkubHmlbAo5pW05pWwKVxyXG5leHBvcnQgZnVuY3Rpb24gX2lyYW5kKG1pbjogbnVtYmVyID0gMCwgbWF4OiBudW1iZXIgPSAxLCByYW5kOiBUX2ZyYW5kID0gZnJhbmQpOiBudW1iZXIge1xyXG4gICAgY29uc3QgZl9yYW5kID0gTWF0aC5mbG9vcihyYW5kKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gICAgcmV0dXJuIF9yb3VuZChmX3JhbmQsIDApO1xyXG59XHJcblxyXG4vLyDmraPopo/liIbluIPjgoLjganjgY3kubHmlbAo5pW05pWwKVxyXG5leHBvcnQgZnVuY3Rpb24gX2lncmFuZChtaW46IG51bWJlciA9IDAsIG1heDogbnVtYmVyID0gMSwgcmFuZDogVF9mcmFuZCA9IGZyYW5kKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBfaXJhbmQobWluLCBtYXgsICgpPT57cmV0dXJuIF9ncmFuZCgwLCAxLCByYW5kKX0pXHJcbn1cclxuXHJcbi8vIOato+imj+WIhuW4g+OCguOBqeOBjeS5seaVsCjlrp/mlbApXHJcbmV4cG9ydCBmdW5jdGlvbiBfZ3JhbmQobWluOiBudW1iZXIgPSAwLCBtYXg6IG51bWJlciA9IDEsIHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihfX19nYXVzc2lhblJhbmQocmFuZCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG59XHJcbmZ1bmN0aW9uIF9fX2dhdXNzaWFuUmFuZChyYW5kOiBUX2ZyYW5kID0gZnJhbmQpIHtcclxuICAgIGxldCBzdW0gPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpICs9IDEpIHtcclxuICAgICAgICBzdW0gKz0gcmFuZCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN1bSAvIDY7XHJcbn1cclxuXHJcbi8vIOWwkeOBl+ecn+mdouebruOBquato+imj+WIhuW4g+S5seaVsCjmlbTmlbApXHJcbmV4cG9ydCBmdW5jdGlvbiBfaW5yYW5kKG1pbjogbnVtYmVyID0gMCwgbWF4OiBudW1iZXIgPSAxLCBkZDogbnVtYmVyID0gMy4wLCByYW5kOiBUX2ZyYW5kID0gZnJhbmQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoX25yYW5kKG1pbiwgbWF4LCBkZCwgcmFuZCkpO1xyXG59XHJcblxyXG4vLyDlsJHjgZfnnJ/pnaLnm67jgarmraPopo/liIbluIPkubHmlbAo5a6f5pWwKVxyXG4vLyDkuIDmp5jnorrnjoflpInmlbBhLGLjgpLlpInmlbDplqLmlbDjgpLnlKjjgYTjgaYgeD1mKGEsYiksIHk9ZyhhLGIp44Go44GX44GmMuOBpOOBruato+imj+WIhuW4g+S5seaVsHgseeOCkuW+l+OCi1xyXG4vLyB4ID0gZihhLGIpID0gc3FydCgtMipsb2coYSkpICogc2luKDIqz4AqYikgXHJcbi8vIHkgPSBnKGEsYikgPSBzcXJ0KC0yKmxvZyhhKSkgKiBjb3MoMirPgCpiKSBcclxuZXhwb3J0IGZ1bmN0aW9uIF9ucmFuZChtaW46IG51bWJlciA9IDAuMCwgbWF4OiBudW1iZXIgPSAxLjAsIGRkOiBudW1iZXIgPSAzLjAsIHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCk6IG51bWJlciB7XHJcbiAgICBjb25zdCBhdmUgPSAwLjU7XHJcbiAgICBjb25zdCBhID0gcmFuZCgpO1xyXG4gICAgY29uc3QgYiA9IHJhbmQoKTtcclxuICAgIGxldCB4ID0gYXZlICsgX2ZhYihhLCBiKSAvICgyLjAgKiBkZCk7IC8vIOOBk+OBk+OBvuOBp+OAgU4oMCwxKeOBruato+imj+WIhuW4g+S5seaVsOOBruS9nOaIkFxyXG5cclxuICAgIHggPSBtaW4gKyB4ICogKG1heCAtIG1pbik7XHJcbiAgICB4ID0gX21heChbbWluLCB4XSk7XHJcbiAgICB4ID0gX21pbihbbWF4LCB4XSk7XHJcbiAgICByZXR1cm4geDtcclxufVxyXG5mdW5jdGlvbiBfZmFiKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoLTIuMCAqIE1hdGgubG9nKGEpKSAqIE1hdGguc2luKDIuMCAqIE1hdGguUEkgKiBiKTtcclxufVxyXG5mdW5jdGlvbiBfZ2FiKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoLTIuMCAqIE1hdGgubG9nKGEpKSAqIE1hdGguY29zKDIuMCAqIE1hdGguUEkgKiBiKTtcclxufVxyXG5cclxuXHJcbi8vIOOCt+ODvOODieWApOOCkueUqOOBhOOBn+S5seaVsFxyXG5leHBvcnQgY2xhc3MgQ19TZWVkZWRSYW5kIHtcclxuICAgIHByb3RlY3RlZCBzZWVkOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgZmlyc3Rfc2VlZDogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzZWVkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNlZWQgPSBzZWVkO1xyXG4gICAgICAgIHRoaXMuZmlyc3Rfc2VlZCA9IHNlZWQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZWVkID0gdGhpcy5maXJzdF9zZWVkO1xyXG4gICAgfVxyXG4gICAgLy8g5Lmx5pWw55Sf5oiQ44Oh44K944OD44OJXHJcbiAgICBwdWJsaWMgcmFuZG9tKCk6IG51bWJlciB7XHJcbiAgICAgICAgdGhpcy5zZWVkID0gKHRoaXMuc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VlZCAvIDIzMzI4MC4wO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+ODpuODi+ODvOOCr0lEKHV1aWQp44Gu55Sf5oiQXHJcbmV4cG9ydCBmdW5jdGlvbiBfZ2V0X3V1aWQobGVuOiBudW1iZXIgPSAyMCwgcmFuZDogVF9mcmFuZCA9IGZyYW5kKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGxmdCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkudG9TdHJpbmcoMTYpOyAvLyDjgZ/jgbbjgpMxM+ahgVxyXG4gICAgY29uc3Qgcmd0X2xlbiA9IF9tYXgoW2xlbiAtIGxmdC5sZW5ndGgsIDFdKTtcclxuXHJcbiAgICBjb25zdCByZ3QgPSBNYXRoLmZsb29yKE1hdGgucG93KDEwLCByZ3RfbGVuKSAqIHJhbmQoKSkudG9TdHJpbmcoMTYpO1xyXG4gICAgcmV0dXJuIGxmdCArIHJndDtcclxufVxyXG5cclxuLy8g56K6546H44Gr5Z+644Gl44GP6KaB57Sg6YG45oqeXHJcbmV4cG9ydCB0eXBlIFRfU2VsZWN0SXRlbSA9IHtcclxuICAgIHJhdGlvOiBudW1iZXIsXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9zZWxlY3RJdGVtKGl0ZW1zOiBUX1NlbGVjdEl0ZW1bXSwgcmFuZDogVF9mcmFuZCA9IGZyYW5kKTogVF9TZWxlY3RJdGVtIHwgdW5kZWZpbmVkIHtcclxuICAgIHZhciB0dGw6bnVtYmVyID0gMDtcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgaXRlbXMpIHR0bCArPSBpdGVtLnJhdGlvO1xyXG5cclxuICAgIGNvbnN0IHRhcmdldCA9IF9pcmFuZCgwLCB0dGwsIHJhbmQpO1xyXG4gICAgdmFyIHN1bSA9IDA7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcclxuICAgICAgICBzdW0gKz0gaXRlbS5yYXRpbztcclxuICAgICAgICBpZiAodGFyZ2V0IDwgc3VtKSB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuLy8g6YWN5YiX44Gu44K344Oj44OD44OV44OrXHJcbmV4cG9ydCBmdW5jdGlvbiBfc2h1ZmZsZUFycmF5PFQ+KGFycmF5OiBUW10sIHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCk6IFRbXSB7XHJcbiAgICBsZXQgc2h1ZmZsZWRBcnJheSA9IFsuLi5hcnJheV07IC8vIOWFg+OBrumFjeWIl+OCkuWkieabtOOBl+OBquOBhOOCiOOBhuOBq+OCs+ODlOODvOOBmeOCi1xyXG4gICAgZm9yIChsZXQgaSA9IHNodWZmbGVkQXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgIC8vIOODqeODs+ODgOODoOOBquS9jee9ruOCkuaxuuWumlxyXG4gICAgICAgIGNvbnN0IGogPSBfaXJhbmQoMCwgaSwgcmFuZCk7XHJcbiAgICAgICAgLy8g6KaB57Sg44Gu5YWl44KM5pu/44GIXHJcbiAgICAgICAgW3NodWZmbGVkQXJyYXlbaV0sIHNodWZmbGVkQXJyYXlbal1dID0gW3NodWZmbGVkQXJyYXlbal0sIHNodWZmbGVkQXJyYXlbaV1dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNodWZmbGVkQXJyYXk7IC8vIOOCt+ODo+ODg+ODleODq+OBleOCjOOBn+mFjeWIl+OCkui/lOOBmVxyXG59XHJcblxyXG4vLyDkubHmlbDjgavjgojjgovmloflrZfliJfnlJ/miJBcclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fc3RyKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGxldCBzdHIgPSAnJztcclxuICAgIGZvciAobGV0IGk9MDsgaSA8IGxlbmd0aDsgaSsrKSBzdHIgKz0gX3JhbmRvbV9DaGFyKCk7XHJcbiAgICByZXR1cm4gc3RyO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBfcmFuZG9tX1VwcGVyU3RyKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGxldCBzdHIgPSAnJztcclxuICAgIGZvciAobGV0IGk9MDsgaSA8IGxlbmd0aDsgaSsrKSBzdHIgKz0gX3JhbmRvbV9VcHBlckNoYXIoKTtcclxuICAgIHJldHVybiBzdHI7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fTG93ZXJTdHIobGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgbGVuZ3RoOyBpKyspIHN0ciArPSBfcmFuZG9tX0xvd2VyQ2hhcigpO1xyXG4gICAgcmV0dXJuIHN0cjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gX3JhbmRvbV9VcHBlckNoYXIoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHZhbCA9IF9pcmFuZCgwLDI2KVxyXG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoNjUrdmFsKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gX3JhbmRvbV9Mb3dlckNoYXIoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHZhbCA9IF9pcmFuZCgwLDI2KVxyXG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoOTUrdmFsKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gX3JhbmRvbV9OdW1DaGFyKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB2YWwgPSBfaXJhbmQoMCw5KVxyXG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoNDgrdmFsKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gX3JhbmRvbV9DaGFyKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB2YWwgPSBfaXJhbmQoMCw2MSlcclxuICAgIGlmICh2YWwgPCAyNikgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoNjUrdmFsKTtcclxuICAgIGlmICh2YWwgPCA1MikgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoOTcrdmFsLTI2KTtcclxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDQ4K3ZhbC01Mik7XHJcbn1cclxuIiwiaW1wb3J0IGV4cHJlc3MgICAgICBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgY3JlYXRlRXJyb3IgIGZyb20gJ2h0dHAtZXJyb3JzJztcclxuaW1wb3J0IHBhdGggICAgICAgICBmcm9tIFwicGF0aFwiO1xyXG5cclxudmFyIHVzZXJzUm91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXMvdXNlcnMnKTtcclxudmFyIG1haWV4Um91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXMvbWFpZXgnKTtcclxuXHJcbnZhciBjb29raWVQYXJzZXIgPSByZXF1aXJlKCdjb29raWUtcGFyc2VyJyk7XHJcbnZhciBsb2dnZXIgPSByZXF1aXJlKCdtb3JnYW4nKTtcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbi8vIHZpZXcgZW5naW5lIHNldHVwXHJcbmFwcC5zZXQoJ3ZpZXdzJywgcGF0aC5qb2luKF9fZGlybmFtZSwgJ3ZpZXdzJykpO1xyXG5hcHAuc2V0KCd2aWV3IGVuZ2luZScsICdlanMnKTtcclxuXHJcbmFwcC51c2UobG9nZ2VyKCdkZXYnKSk7XHJcbmFwcC51c2UoY29va2llUGFyc2VyKCkpO1xyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICdwdWJsaWMnKSkpO1xyXG5cclxuLy9hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcclxuLy9hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XHJcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xyXG5hcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcclxuXHJcbmNvbnN0IHJvb3RSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5yb290Um91dGVyLmdldChcclxuICBcIi9cIixcclxuICBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgcmVzLnNlbmQoXCJXZWxjb21lIHRvIHRoZSBNYWkgd29ybGQhIDotKVwiKTtcclxuICB9XHJcbik7XHJcbmFwcC51c2UoXCIvXCIsICAgICAgcm9vdFJvdXRlcik7XHJcbmFwcC51c2UoXCIvdXNlcnNcIiwgdXNlcnNSb3V0ZXIpO1xyXG5hcHAudXNlKFwiL21haWV4XCIsIG1haWV4Um91dGVyKTtcclxuXHJcbi8vIGNhdGNoIDQwNCBhbmQgZm9yd2FyZCB0byBlcnJvciBoYW5kbGVyXHJcbmFwcC51c2UoZnVuY3Rpb24ocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pIHtcclxuICBuZXh0KGNyZWF0ZUVycm9yKDQwNCkpO1xyXG59KTtcclxuXHJcbi8vIGVycm9yIGhhbmRsZXJcclxuYXBwLnVzZShmdW5jdGlvbihlcnI6IGFueSwgcmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pIHtcclxuICAvLyBzZXQgbG9jYWxzLCBvbmx5IHByb3ZpZGluZyBlcnJvciBpbiBkZXZlbG9wbWVudFxyXG4gIHJlcy5sb2NhbHMubWVzc2FnZSA9IGVyci5tZXNzYWdlO1xyXG4gIHJlcy5sb2NhbHMuZXJyb3IgPSByZXEuYXBwLmdldCgnZW52JykgPT09ICdkZXZlbG9wbWVudCcgPyBlcnIgOiB7fTtcclxuXHJcbiAgLy8gcmVuZGVyIHRoZSBlcnJvciBwYWdlXHJcbiAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzIHx8IDUwMCk7XHJcbiAgcmVzLnJlbmRlcignZXJyb3InKTtcclxufSk7XHJcblxyXG5jb25zdCBwb3J0ID0gbm9ybWFsaXplUG9ydChwcm9jZXNzLmVudi5QT1JUIHx8ICczMDAwJyk7XHJcbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIE5vcm1hbGl6ZSBhIHBvcnQgaW50byBhIG51bWJlciwgc3RyaW5nLCBvciBmYWxzZS5cclxuICovXHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVQb3J0KHZhbDogYW55KSB7XHJcbiAgdmFyIHBvcnQgPSBwYXJzZUludCh2YWwsIDEwKTtcclxuXHJcbiAgaWYgKGlzTmFOKHBvcnQpKSB7XHJcbiAgICAvLyBuYW1lZCBwaXBlXHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH1cclxuXHJcbiAgaWYgKHBvcnQgPj0gMCkge1xyXG4gICAgLy8gcG9ydCBudW1iZXJcclxuICAgIHJldHVybiBwb3J0O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHA7XHJcbiIsIlxyXG5jb25zdCBkYl9ob3N0ID0gJ3NxbCc7XHJcbi8vIOWIqeeUqOOCr+ODqeOCueetieOBruiqreOBv+i+vOOBv1xyXG5cclxuLy8g44Ko44Op44O844Oh44OD44K744O844K4562J44KS5L+d5a2Y44O76KGo56S644GZ44KL44Kv44Op44K5XHJcbmltcG9ydCB7Q19Ec3BNZXNzYWdlIH0gICAgIGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF91dGwvQ19Ec3BNZXNzYWdlJztcclxuXHJcbi8vIOS9jee9ruOBqOaWueWQkeOCkuihqOOBmeOCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX1BvaW50RGlyIH0gICAgICBmcm9tICcuLi8uLi8uLi9tYWkvc3JjL2RfbWRsL0NfUG9pbnREaXInO1xyXG5cclxuLy8g5rue5Zyo5L2N572u44KS56S644GZ44Kv44Op44K5XHJcbmltcG9ydCB7IENfTW92YWJsZVBvaW50IH0gIGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF9tZGwvQ19Nb3ZhYmxlUG9pbnQnO1xyXG5cclxuLy8g44Ku44Or44OJ44Kv44Op44K55YWo6IisXHJcbmltcG9ydCB7Q19HdWlsZH0gICAgICAgICAgIGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF9tZGwvQ19HdWlsZCc7XHJcblxyXG4vLyDjg5Hjg7zjg4bjgqPjg7zjgq/jg6njgrnlhajoiKxcclxuaW1wb3J0IHtDX1RlYW19ICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbWFpL3NyYy9kX21kbC9DX1RlYW0nO1xyXG5cclxuLy8g44OS44O844Ot44O844Kv44Op44K55YWo6IisXHJcbmltcG9ydCB7Q19IZXJvLCBKU09OX0hlcm99IGZyb20gICcuLi8uLi8uLi9tYWkvc3JjL2RfbWRsL0NfSGVybyc7XHJcblxyXG4vLyDjgrvjg7zjg5bjg4fjg7zjgr8o44Kv44Op44Kk44Ki44Oz44OI44Go44Gu6YCj5pC6KeWFqOiIrFxyXG5pbXBvcnQge0NfU2F2ZURhdGEsIEpTT05fU2F2ZURhdGF9IGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF9tZGwvQ19TYXZlRGF0YSc7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Li744CA5Yem44CA55CGICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbnRlcmZhY2UgSV9HbG9iYWxBcmd1bWVudHMge1xyXG4gICAgbW9kZT86IHN0cmluZztcclxuICAgIG5tYnI/OiBudW1iZXI7XHJcbiAgICBwaWQ/OiAgbnVtYmVyO1xyXG4gICAgaHJlc19KU09OPzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSV9SZXR1cm4ge1xyXG4gICAgZWNvZGU6IG51bWJlcjtcclxuICAgIGVtc2c6ICBzdHJpbmc7XHJcbiAgICBzYXZlPzogSlNPTl9TYXZlRGF0YTtcclxuICAgIGRhdGE/OiB7XHJcbiAgICAgICAgaHJlczpKU09OX0hlcm9bXTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gR2V0dGluZyBOZXcgR2FtZSBzdGFydGlpbmcgZnJvbSBHdWxkXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXdHdWxkKGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBJX1JldHVybiB7XHJcbiAgICBpbml0KGFyZyk7XHJcbiAgICBjb25zdCAgZ3VsZCA9IG5ld19ndWxkKCk7XHJcbiAgICBjb25zdCAgdGVhbSA9IG5ld190ZWFtKGd1bGQpO1xyXG4gICAgY29uc3QgIHNhdmUgPSBuZXdfc2F2ZShndWxkLCB0ZWFtKTtcclxuICAgIHJldHVybiBzYXZlX2VuY29kZSgwLCBzYXZlKTtcclxufVxyXG5cclxuLy8gR2V0dGluZyBBbnkgTmV3IEhlb3JlcyBkYXRhXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGxIcmVzKGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBJX1JldHVybiB7XHJcbiAgICBpbml0KGFyZyk7XHJcbiAgICBjb25zdCAgaHJlcyA9IG5ld19ocmVzKCk7XHJcbiAgICByZXR1cm4gaHJlc19lbmNvZGUoMCwgIGhyZXMpO1xyXG59XHJcblxyXG4gXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vICAg44K144OW44Or44O844OB44OzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmZ1bmN0aW9uIGVycl9lbmNvZGUoY29kZTogbnVtYmVyLCBtc2dzOiBzdHJpbmdbXSk6IElfUmV0dXJuIHtcclxuICAgIGNvbnN0IHJldF9hc3NvYzogSV9SZXR1cm4gPSB7ZWNvZGU6Y29kZSwgZW1zZzogJyd9O1xyXG4gICAgZm9yIChjb25zdCBtc2cgb2YgbXNncykgcmV0X2Fzc29jLmVtc2cgKz0gbXNnOyBcclxuICAgIHJldHVybiByZXRfYXNzb2M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVfZW5jb2RlKGNvZGU6IG51bWJlciwgc2F2ZTogQ19TYXZlRGF0YSk6IElfUmV0dXJuIHtcclxuICAgIGNvbnN0IHJldF9hc3NvYzogSV9SZXR1cm4gPSB7ZWNvZGU6MCwgZW1zZzogJyd9O1xyXG5cclxuICAgIGlmIChjb2RlICE9PSAwIHx8IGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIHJldHVybiBlcnJfZW5jb2RlKGNvZGUsIGd2Lm1lcy5nZXRfZXJyX21lc3NhZ2VzKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXRfYXNzb2MuZWNvZGUgPSAwO1xyXG4gICAgICAgIHJldF9hc3NvYy5lbXNnICA9ICdTdGF0dXMgT0snO1xyXG4gICAgICAgIHJldF9hc3NvYy5zYXZlICA9IHNhdmUuZW5jb2RlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJldF9hc3NvYztcclxufVxyXG5cclxuZnVuY3Rpb24gaHJlc19lbmNvZGUoY29kZTogbnVtYmVyLCBocmVzOiBDX0hlcm9bXSk6IElfUmV0dXJuIHtcclxuICAgIGNvbnN0IHJldF9hc3NvYzogSV9SZXR1cm4gPSB7ZWNvZGU6MCwgZW1zZzogJyd9O1xyXG5cclxuICAgIGlmIChjb2RlICE9PSAwIHx8IGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIHJldHVybiBlcnJfZW5jb2RlKGNvZGUsIGd2Lm1lcy5nZXRfZXJyX21lc3NhZ2VzKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXRfYXNzb2MuZWNvZGUgPSAwO1xyXG4gICAgICAgIHJldF9hc3NvYy5lbXNnICA9ICdTdGF0dXMgT0snO1xyXG5cclxuICAgICAgICBjb25zdCBocmVzX2FycmF5OiBKU09OX0hlcm9bXSA9IFtdO1xyXG4gICAgICAgIGZvcihjb25zdCBoZXJvIG9mIGhyZXMpIHtcclxuICAgICAgICAgICAgaHJlc19hcnJheS5wdXNoKGhlcm8uZW5jb2RlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXRfYXNzb2MuZGF0YSAgPSB7aHJlczogaHJlc19hcnJheX07XHJcbiAgICAgICAgcmV0dXJuIHJldF9hc3NvYztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbmV3X2hyZXMoKTogQ19IZXJvW10ge1xyXG4gICAgY29uc3QgaGVyb2VzOiBDX0hlcm9bXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYS5ubWJyOyBpKyspIHtcclxuICAgICAgICBoZXJvZXMucHVzaCgobmV3IENfSGVybygpKS5yYW5kb21fbWFrZSgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBoZXJvZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld19zYXZlKGd1bGQ6IENfR3VpbGQsIHRlYW06IENfVGVhbSk6IENfU2F2ZURhdGEge1xyXG4gICAgcmV0dXJuIG5ldyBDX1NhdmVEYXRhKHtcclxuICAgICAgICBwbGF5ZXJfaWQ6IGdhLnBpZCxcclxuICAgICAgICBhdXRvX21vZGU6ICcwJyxcclxuICAgICAgICBpc19hY3RpdmU6ICcxJyxcclxuICAgICAgICBpc19kZWxldGU6ICcwJyxcclxuXHJcbiAgICAgICAgYWxsX212cHQ6ICAgW10sXHJcbiAgICAgICAgYWxsX21hemU6ICAgW10sXHJcbiAgICAgICAgYWxsX2d1bGQ6ICAgW2d1bGQuZW5jb2RlKCldLCBcclxuICAgICAgICBhbGxfdGVhbTogICBbdGVhbS5lbmNvZGUoKV0sXHJcblxyXG4vL2xvY1xyXG4gICAgICAgIG15cG9zOiAgICAgIHRlYW0uZ2V0X2xvYygpLmVuY29kZSgpLCBcclxufSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld19ndWxkKCk6IENfR3VpbGQge1xyXG4gICAgY29uc3QgZ3VsZCA9IG5ldyBDX0d1aWxkKCk7XHJcbiAgICBndWxkLmRlY29kZSh7bmFtZTogJ+Wni+OBvuOCiuOBruihl+OBruWGkumZuuiAheOCruODq+ODiSd9KTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICBndWxkLmFkZF9oZXJvKChuZXcgQ19IZXJvKCkpLnJhbmRvbV9tYWtlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBndWxkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdfdGVhbShndWxkOiBDX0d1aWxkKTogQ19UZWFtIHtcclxuICAgIGNvbnN0IHRlYW0gPSBuZXcgQ19UZWFtKCk7XHJcbi8vbG9jXHJcbiAgICBjb25zdCBsb2MgPSBuZXcgQ19Nb3ZhYmxlUG9pbnQoKTtcclxuICAgIGxvYy5kZWNvZGUoe1xyXG4gICAgICAgIGtpbmQ6ICAgJ0d1bGQnLFxyXG4gICAgICAgIG5hbWU6ICAgIGd1bGQuZ2V0X25hbWUoKSxcclxuICAgICAgICBsb2NfdWlkOiBndWxkLnVpZCgpLFxyXG4gICAgICAgIGxvY19wb3M6IG5ldyBDX1BvaW50RGlyKHtcclxuICAgICAgICAgICAgJ3gnOiAwLFxyXG4gICAgICAgICAgICAneSc6IDAsXHJcbiAgICAgICAgICAgICd6JzogMCxcclxuICAgICAgICAgICAgJ2QnOiAwLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHRlYW1fdWlkOiB0ZWFtLnVpZCgpLFxyXG4gICAgfSk7XHJcbiAgICB0ZWFtLnNldF9wcnAoe25hbWU6J+OBsuOCiOOBk+OBleOCk+ODgeODvOODoCd9KTtcclxuLy9sb2NcclxuICAgIHRlYW0uc2V0X2xvYyhsb2MpO1xyXG5cclxuICAgIC8vICAgIHRlYW0uc2V0X2xvYygobmV3IENfTW92YWJsZVBvaW50KCkpLmRlY29kZShsb2MuZW5jb2RlKCkpKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDM7IGkrKykgeyBcclxuICAgICAgICB0ZWFtLmFkZF9oZXJvKChuZXcgQ19IZXJvKCkpLnJhbmRvbV9tYWtlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZWFtO1xyXG59XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Yid44CA5pyf44CA6Kit44CA5a6aICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5sZXQgZ3Y6IENfR2xvYmFsVmFyO1xyXG5sZXQgZ2E6IENfR2xvYmFsQXJndW1lbnRzO1xyXG5cclxuZnVuY3Rpb24gaW5pdChvYmo6IElfR2xvYmFsQXJndW1lbnRzKTogdm9pZCB7XHJcbiAgICBndiA9IG5ldyBDX0dsb2JhbFZhcigpO1xyXG4gICAgZ2EgPSBuZXcgQ19HbG9iYWxBcmd1bWVudHMob2JqKTtcclxuICAgIHJldHVybjtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vL1xyXG4vLy8vLyAgICAg44Kv44Op44K55a6j6KiAXHJcbi8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIOWkp+Wfn+WkieaVsOOBruioreWumlxyXG5jbGFzcyBDX0dsb2JhbFZhciB7XHJcbiAgICBwdWJsaWMgbWVzOiBDX0RzcE1lc3NhZ2U7XHJcblxyXG4gICAgcHVibGljIE1hemVfc2l6ZV94ID0gMjE7XHJcbiAgICBwdWJsaWMgTWF6ZV9zaXplX3kgPSAyMTtcclxuICAgIHB1YmxpYyBMaW1pdF9vZl9yb29tICAgICA9IDU7XHJcbiAgICBwdWJsaWMgTWF4X3NpemVfb2Zfcm9vbSAgPSAzO1xyXG4gICAgcHVibGljIE1heF9vZl9NYXplX0Zsb29yID0gMztcclxuXHJcbiAgICBwdWJsaWMgdGVhbV9hc3NvYzogQ19UZWFtW10gID0gW107XHJcbiAgICBwdWJsaWMgdGVhbTogICAgICAgQ19UZWFtO1xyXG4gICAgcHVibGljIGd1bGRfYXNzb2M6IENfR3VpbGRbXSA9IFtdO1xyXG4gICAgcHVibGljIGd1bGQ6ICAgICAgIENfR3VpbGQ7XHJcbiAgICBwdWJsaWMgaGVyb2VzOiAgICAgQ19IZXJvW10gID0gW107XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubWVzICA9IG5ldyBDX0RzcE1lc3NhZ2UoIC8qIGlzSFRNTCA9ICovIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnRlYW0gPSBuZXcgQ19UZWFtKCk7XHJcbiAgICAgICAgdGhpcy5ndWxkID0gbmV3IENfR3VpbGQoKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gUE9TVOW8leaVsOOBruioreWumlxyXG5jbGFzcyBDX0dsb2JhbEFyZ3VtZW50cyB7XHJcbiAgICBwdWJsaWMgbW9kZTogc3RyaW5nO1xyXG4gICAgcHVibGljIG5tYnI6IG51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgcGlkOiAgbnVtYmVyID0gMTtcclxuICAgIHB1YmxpYyBocmVzX0pTT046IHN0cmluZ3x1bmRlZmluZWQgPSAnJztcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob2JqOiBJX0dsb2JhbEFyZ3VtZW50c3x1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLm1vZGUgPSBvYmo/Lm1vZGUgPz8gJ3Vua25vd24nO1xyXG4gICAgICAgIHRoaXMubm1iciA9IG9iaj8ubm1iciAhPT0gdW5kZWZpbmVkICYmICFpc05hTihvYmoubm1icikgPyBOdW1iZXIob2JqLm5tYnIpIDogMTtcclxuICAgICAgICB0aGlzLnBpZCAgPSBvYmo/LnBpZCAgIT09IHVuZGVmaW5lZCAmJiAhaXNOYU4ob2JqLnBpZCkgID8gTnVtYmVyKG9iai5waWQpICA6IDE7XHJcbiAgICAgICAgdGhpcy5ocmVzX0pTT04gPSBvYmo/LmhyZXNfSlNPTiA/PyB1bmRlZmluZWQ7XHJcbi8vZGVidWcgICAgICAgIGNvbnNvbGUubG9nKGBtb2RlPSR7dGhpcy5tb2RlfSwgbm1icj0ke3RoaXMubm1icn0sIHBpZCA9ICR7dGhpcy5waWR9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbm1vZHVsZS5leHBvcnRzID0gbmV3R2FtZTtcclxubW9kdWxlLmV4cG9ydHMgPSBuZXdIZXJvO1xyXG4qLyIsIlxyXG5jb25zdCBkYl9ob3N0ID0gJ3NxbCc7XHJcbi8vIOWIqeeUqOOCr+ODqeOCueetieOBruiqreOBv+i+vOOBv1xyXG5cclxuLy8g44Ko44Op44O844Oh44OD44K744O844K4562J44KS5L+d5a2Y44O76KGo56S644GZ44KL44Kv44Op44K5XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9ICAgICBmcm9tICcuLi8uLi8uLi9tYWkvc3JjL2RfdXRsL0NfRHNwTWVzc2FnZSc7XHJcblxyXG4vLyBNeVNxbOOCkuaJseOBhuOCr+ODqeOCuVxyXG5pbXBvcnQgbXlzcWwgZnJvbSBcIm15c3FsMi9wcm9taXNlXCI7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Li744CA5Yem44CA55CGICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbnRlcmZhY2UgSV9HbG9iYWxBcmd1bWVudHMge1xyXG4gICAgbW9kZT86IHN0cmluZztcclxuICAgIHBpZDogICBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJX1JldHVybiB7XHJcbiAgICBlY29kZTogICBudW1iZXI7XHJcbiAgICBlbXNnOiAgICBzdHJpbmc7XHJcbiAgICBwaWQ6ICAgICBudW1iZXI7XHJcbiAgICBuYW1lOiAgICBzdHJpbmc7XHJcbiAgICBtYm5hbWU6ICBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIENfTm9yUmV0dXJuIGltcGxlbWVudHMgSV9SZXR1cm4ge1xyXG4gICAgcHVibGljIGVjb2RlOiAgIG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgZW1zZzogICAgc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgcGlkOiAgICAgbnVtYmVyID0gLTE7XHJcbiAgICBwdWJsaWMgbmFtZTogICAgc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgbWJuYW1lOiAgc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgbWJuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnBpZCAgICA9IHBpZDtcclxuICAgICAgICB0aGlzLm5hbWUgICA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5tYm5hbWUgPSBtYm5hbWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfRXJyUmV0dXJuIGltcGxlbWVudHMgSV9SZXR1cm4ge1xyXG4gICAgcHVibGljIGVjb2RlOiAgIG51bWJlciA9IDEwMDA7XHJcbiAgICBwdWJsaWMgZW1zZzogICAgc3RyaW5nID0gJ2Vycm9yJztcclxuICAgIHB1YmxpYyBwaWQ6ICAgICBudW1iZXIgPSAtMTtcclxuICAgIHB1YmxpYyBuYW1lOiAgICBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBtYm5hbWU6ICBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihlY29kZTogbnVtYmVyLCBlbXNnOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVjb2RlICA9IGVjb2RlO1xyXG4gICAgICAgIHRoaXMuZW1zZyAgID0gZW1zZztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIEdldHRpbmcgTmV3IEdhbWUgc3RhcnRpaW5nIGZyb20gR3VsZFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdGVzdChhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgbGV0IHJldHVybl92YWw6IElfUmV0dXJuO1xyXG5cclxuICAgIGluaXQoYXJnKTtcclxuXHJcbiAgICBpZiAoZ3YubWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgZ3YubWVzLmRpc3BsYXlfZXJyX21lc3NhZ2UoKTtcclxuICAgICAgICByZXR1cm5fdmFsID0gbmV3IENfRXJyUmV0dXJuKDEwMCwgJ2RiX21haSBPUEVOIEVSUk9SICcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm5fdmFsID0gYXdhaXQgZ2V0X3BsYXllcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXR1cm5fdmFsO1xyXG59XHJcblxyXG4gXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vICAg44K144OW44Or44O844OB44OzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldF9wbGF5ZXIoKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgaWYgKGdhLnBpZCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbmV3IENfRXJyUmV0dXJuKDk5OSwgJ1BpZCBVbmRlZmluZWQnKTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0X3VzZXJzKCkudGhlbihyc2x0X3VzZXJzID0+IHtcclxuICAgICAgICBpZiAocnNsdF91c2VycyA9PT0gdW5kZWZpbmVkIHx8IGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICBndi5tZXMuZGlzcGxheV9lcnJfbWVzc2FnZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENfRXJyUmV0dXJuKDIwMCwgJ1NRTCBFUlJPUiAnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJzbHRfdXNlcnMubGVuZ3RoIDwgMSkgcmV0dXJuIG5ldyBDX0VyclJldHVybig5MDAsIGBObyBkYXRhIGV4aXN0IG9uIHBpZD0ke2dhLnBpZH1gKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX05vclJldHVybihcclxuICAgICAgICAgICAgcnNsdF91c2Vyc1swXS5pZCwgXHJcbiAgICAgICAgICAgIHJzbHRfdXNlcnNbMF0ubmFtZSwgXHJcbiAgICAgICAgICAgIHJzbHRfdXNlcnNbMF0ubWJuYW1lXHJcbiAgICAgICAgKTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX0VyclJldHVybigxMDAsICdTUUwgRVJST1I6ICcgKyBlcnIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJX3RibF9wbGF5ZXIgZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0e1xyXG4gICAgaWQ6ICAgICAgbnVtYmVyO1xyXG4gICAgbmFtZTogICAgc3RyaW5nO1xyXG4gICAgcGFzc3dkOiAgc3RyaW5nO1xyXG4gICAgbWJuYW1lOiAgc3RyaW5nO1xyXG4gICAgZW1haWw6ICAgc3RyaW5nO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZWxlY3RfdXNlcnMoKTogUHJvbWlzZTxJX3RibF9wbGF5ZXJbXXx1bmRlZmluZWQ+IHtcclxuICAgIGNvbnN0IHNxbCA9IGBcclxuICAgICAgICBTRUxFQ1QgaWQsIG5hbWUsIHBhc3N3ZCwgbWJuYW1lLCBlbWFpbCBGUk9NIHRibF9wbGF5ZXJcclxuICAgICAgICAgICAgV0hFUkUgIGlkID0gOmlkXHJcbiAgICBgO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgW3JzbHRSb3dTZXRdID0gYXdhaXQgZ3YuZGJfcG9vbC5xdWVyeTxJX3RibF9wbGF5ZXJbXT4oc3FsLCB7aWQ6IGdhLnBpZH0pO1xyXG4gICAgICAgIHJldHVybiByc2x0Um93U2V0O1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgZ3YubWVzLnNldF9lcnJfbWVzc2FnZSgnU1FMIEVSUk9SIFNFTEVDVCBGUk9NIHRibF9wbGF5ZXI6ICcgKyBlcnIpO1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDliJ3jgIDmnJ/jgIDoqK3jgIDlrpogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmxldCBndjogQ19HbG9iYWxWYXI7XHJcbmxldCBnYTogQ19HbG9iYWxBcmd1bWVudHM7XHJcblxyXG5mdW5jdGlvbiBpbml0KG9iajogSV9HbG9iYWxBcmd1bWVudHMpOiB2b2lkIHtcclxuICAgIGd2ID0gbmV3IENfR2xvYmFsVmFyKCk7XHJcbiAgICBnYSA9IG5ldyBDX0dsb2JhbEFyZ3VtZW50cyhvYmopO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIGZpbmwoKTogdm9pZCB7XHJcbiAgICBndi5maW5sKCk7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy9cclxuLy8vLy8gICAgIOOCr+ODqeOCueWuo+iogFxyXG4vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyDlpKfln5/lpInmlbDjga7oqK3lrppcclxuY2xhc3MgQ19HbG9iYWxWYXIge1xyXG4gICAgcHVibGljIG1lczogQ19Ec3BNZXNzYWdlO1xyXG5cclxuICAgIHB1YmxpYyBkYl9ob3N0OiAgIHN0cmluZyA9IFwic3FsXCI7XHJcbiAgICBwdWJsaWMgZGJfcG9ydDogICBudW1iZXIgPSAgMzMwNjtcclxuICAgIHB1YmxpYyBkYl9uYW1lOiAgIHN0cmluZyA9IFwiZGJfbWFpXCI7XHJcbiAgICBwdWJsaWMgZGJfdXNlcjogICBzdHJpbmcgPSBcIml0c2F5bm8zM1wiO1xyXG4gICAgcHVibGljIGRiX3Bhc3M6ICAgc3RyaW5nID0gXCJQRTMzMzgzM1wiO1xyXG5cclxuICAgIHB1YmxpYyBkYl9wb29sOiAgIG15c3FsLlBvb2w7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubWVzICAgICA9IG5ldyBDX0RzcE1lc3NhZ2UoIC8qIGlzSFRNTCA9ICovIGZhbHNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYl9wb29sID0gbXlzcWwuY3JlYXRlUG9vbCh7XHJcbiAgICAgICAgICAgIGhvc3Q6ICAgICAgdGhpcy5kYl9ob3N0LFxyXG4gICAgICAgICAgICBwb3J0OiAgICAgIHRoaXMuZGJfcG9ydCxcclxuICAgICAgICAgICAgdXNlcjogICAgICB0aGlzLmRiX3VzZXIsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAgdGhpcy5kYl9wYXNzLFxyXG4gICAgICAgICAgICBkYXRhYmFzZTogIHRoaXMuZGJfbmFtZSxcclxuICAgICAgICAgICAgY29ubmVjdGlvbkxpbWl0OiAgICAgMTAsIC8vIOaOpee2muOCkuW8teOCiue2muOBkeOCi+aVsFxyXG4gICAgICAgICAgICB3YWl0Rm9yQ29ubmVjdGlvbnM6IHRydWUsXHJcbiAgICAgICAgICAgIG5hbWVkUGxhY2Vob2xkZXJzOiB0cnVlLFxyXG4gICAgICAgICAgICBqc29uU3RyaW5nczogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBmaW5sKCkge1xyXG4gICAgICAgIHRoaXMuZGJfcG9vbC5lbmQoKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gUE9TVOW8leaVsOOBruioreWumlxyXG5jbGFzcyBDX0dsb2JhbEFyZ3VtZW50cyB7XHJcbiAgICBwdWJsaWMgbW9kZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHBpZDogIG51bWJlciA9IC0xO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvYmo6IElfR2xvYmFsQXJndW1lbnRzfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMubW9kZSA9IG9iaj8ubW9kZSA/PyAndW5rbm93bic7XHJcbiAgICAgICAgdGhpcy5waWQgID0gb2JqPy5waWQgICE9PSB1bmRlZmluZWQgJiYgIWlzTmFOKG9iai5waWQpICA/IE51bWJlcihvYmoucGlkKSAgOiAtMTtcclxuLy9kZWJ1ZyAgICAgICAgY29uc29sZS5sb2coYG1vZGU9JHt0aGlzLm1vZGV9LCBwaWQgPSAke3RoaXMucGlkfWApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKlxyXG5tb2R1bGUuZXhwb3J0cyA9IG5ld0dhbWU7XHJcbm1vZHVsZS5leHBvcnRzID0gbmV3SGVybztcclxuKi8iLCIvLyDliKnnlKjjgq/jg6njgrnnrYnjga7oqq3jgb/ovrzjgb9cclxuXHJcbi8vIOOCqOODqeODvOODoeODg+OCu+ODvOOCuOetieOCkuS/neWtmOODu+ihqOekuuOBmeOCi+OCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX0RzcE1lc3NhZ2UgfSAgIGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF91dGwvQ19Ec3BNZXNzYWdlJztcclxuXHJcbi8vIOODgOODs+OCuOODp+ODs+ODnuODg+ODl+OBruOCu+ODq+OBrueorumhnuOCkuihqOOBmeWIl+aMmeWei1xyXG5pbXBvcnQgeyBUX016S2luZCB9ICAgICAgIGZyb20gICcuLi8uLi8uLi9tYWkvc3JjL2RfbWRsL1RfTXpLaW5kJztcclxuXHJcbi8vIOaWueWQkeOCkuihqOOBmeOCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX1BvaW50RGlyLCBUX0RpcmVjdGlvbiB9ICAgZnJvbSAgJy4uLy4uLy4uL21haS9zcmMvZF9tZGwvQ19Qb2ludERpcic7XHJcblxyXG4vLyDkvY3nva7jg7vntYzot6/jgpLooajjgZnjgq/jg6njgrnlhajoiKxcclxuaW1wb3J0IHsgQ19Nb3ZhYmxlUG9pbnQgfSAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF9tZGwvQ19Nb3ZhYmxlUG9pbnQnO1xyXG5cclxuLy8gTUFaRemWouS/guOCr+ODqeOCueWFqOiIrFxyXG5pbXBvcnQgeyBDX01hemUgfSAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbWFpL3NyYy9kX21kbC9DX01hemUnO1xyXG5pbXBvcnQgeyBDX01hemVJbmZvLCBKU09OX01hemVJbmZvIH0gZnJvbSAnLi4vLi4vLi4vbWFpL3NyYy9kX21kbC9DX01hemVJbmZvJzsgLy8gTWF6ZeS9nOaIkOOBruODhuODs+ODl+ODrOODvOODiOaDheWgsVxyXG5cclxuLy8g44OR44O844OG44Kj44O844Kv44Op44K55YWo6IisXHJcbmltcG9ydCB7IENfVGVhbSB9ICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbWFpL3NyYy9kX21kbC9DX1RlYW0nO1xyXG5cclxuLy8g44OS44O844Ot44O844Kv44Op44K55YWo6IisXHJcbmltcG9ydCB7IENfSGVybyB9ICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbWFpL3NyYy9kX21kbC9DX0hlcm8nO1xyXG5cclxuLy8g44K744O844OW44OH44O844K/KOOCr+ODqeOCpOOCouODs+ODiOOBqOOBrumAo+aQuinlhajoiKxcclxuaW1wb3J0IHsgQ19TYXZlRGF0YSwgSlNPTl9TYXZlRGF0YSB9IGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF9tZGwvQ19TYXZlRGF0YSc7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Li744CA5Yem44CA55CGICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5sZXQgZ3Y6IENfR2xvYmFsVmFyO1xyXG5sZXQgZ2E6IENfR2xvYmFsQXJndW1lbnRzO1xyXG5cclxuaW50ZXJmYWNlIElfR2xvYmFsQXJndW1lbnRzIHtcclxuICAgIG1vZGU/OiBzdHJpbmc7XHJcbiAgICBubWJyPzogbnVtYmVyO1xyXG4gICAgcGlkPzogIG51bWJlcjtcclxuICAgIHRlYW0/OiBzdHJpbmc7XHJcbiAgICBtYXplPzogc3RyaW5nO1xyXG4gICAgbWF6ZV9uYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSV9SZXR1cm4ge1xyXG4gICAgZWNvZGU6IG51bWJlcjtcclxuICAgIGVtc2c6ICBzdHJpbmc7XHJcbiAgICBzYXZlPzogSlNPTl9TYXZlRGF0YTtcclxuICAgIGRhdGE/OiBvYmplY3Q7XHJcbn1cclxuXHJcbi8vIEdldHRpbmcgSW5mb3JtYXRpb24gb2YgQWxsIE1hemVcclxuZXhwb3J0IGZ1bmN0aW9uIGFsbE1hemUob2JqOiBJX0dsb2JhbEFyZ3VtZW50cyk6IElfUmV0dXJuIHtcclxuICAgIGluaXQob2JqKTtcclxuXHJcbiAgICBjb25zdCBtYXplX2luZm9fYXJyYXk6IEpTT05fTWF6ZUluZm9bXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBuYW1lIGluIGd2Lm1hemVpbmZvKSBtYXplX2luZm9fYXJyYXkucHVzaChndi5tYXplaW5mb1tuYW1lXS5lbmNvZGUoKSk7XHJcbiAgICByZXR1cm4gYWxsX2VuY29kZShcclxuICAgICAgICAwLCBcclxuICAgICAgICB7bWF6ZWluZm86IG1hemVfaW5mb19hcnJheX0sXHJcbiAgICApO1xyXG59XHJcblxyXG4vLyBHZXR0aW5nIE5ldyBNYXplXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXplKG9iajogSV9HbG9iYWxBcmd1bWVudHMpOiBJX1JldHVybiB7XHJcbiAgICBpbml0KG9iaik7XHJcblxyXG4gICAgY29uc3QgW25ld19tYXplLCBuZXdfcG9zXSA9IGNyZWF0ZV9tYXplKGdhLm1hemVfbmFtZSk7IFxyXG4gICAgcmV0dXJuIGFsbF9lbmNvZGUoXHJcbiAgICAgICAgMCwgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtYXplOiBuZXdfbWF6ZS5lbmNvZGUoKSxcclxuICAgICAgICAgICAgcG9zOiAgbmV3X3BvcyxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxufVxyXG5cclxuLy8gR2V0dGluZyBOZXcgR2FtZSBzdGFydGlpbmcgZnJvbSBNYXplXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXdNYXplKG9iajogSV9HbG9iYWxBcmd1bWVudHMpOiBJX1JldHVybiB7XHJcbiAgICBpbml0KG9iaik7XHJcblxyXG4gICAgY29uc3QgW25ld19tYXplLCBuZXdfcG9zXSA9IGNyZWF0ZV9tYXplKCcnKTsgXHJcbiAgICBjb25zdCAgbmV3X3RlYW0gPSBjcmVhdGVfdGVhbShuZXdfbWF6ZSwgbmV3X3Bvcyk7IFxyXG4gICAgY29uc3QgIG5ld19zYXZlID0gY3JlYXRlX3NhdmUobmV3X21hemUsIG5ld190ZWFtKTtcclxuICAgIGNvbnN0ICByZXRfSlNPTiA9IHNhdmVfZW5jb2RlKDAsIG5ld19zYXZlKTtcclxuICAgIHJldHVybiByZXRfSlNPTjtcclxufVxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vICAg44K144OW44Or44O844OB44OzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmZ1bmN0aW9uIGVycl9lbmNvZGUoY29kZTogbnVtYmVyLCBtc2dzOiBzdHJpbmdbXSk6IElfUmV0dXJuIHtcclxuICAgIGNvbnN0IHJldF9hc3NvYzogSV9SZXR1cm4gPSB7ZWNvZGU6Y29kZSwgZW1zZzogJyd9O1xyXG4gICAgZm9yIChjb25zdCBtc2cgb2YgbXNncykgcmV0X2Fzc29jLmVtc2cgKz0gbXNnOyBcclxuICAgIHJldHVybiByZXRfYXNzb2M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFsbF9lbmNvZGUoY29kZTogbnVtYmVyLCBkYXRhOiBvYmplY3QpOiBJX1JldHVybiB7XHJcbiAgICBjb25zdCByZXRfYXNzb2M6IElfUmV0dXJuID0ge2Vjb2RlOmNvZGUsIGVtc2c6ICcnfTtcclxuXHJcbiAgICByZXRfYXNzb2MuZWNvZGUgPSBjb2RlO1xyXG4gICAgaWYgKGNvZGUgIT09IDAgfHwgZ3YubWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgcmV0dXJuIGVycl9lbmNvZGUoY29kZSwgZ3YubWVzLmdldF9lcnJfbWVzc2FnZXMoKSk7XHJcbiAgICB9XHJcbiAgICByZXRfYXNzb2MuZW1zZyA9ICdTdGF0dXMgT0snO1xyXG4gICAgcmV0X2Fzc29jLmRhdGEgPSAgZGF0YTtcclxuXHJcbiAgICByZXR1cm4gcmV0X2Fzc29jO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlX2VuY29kZShjb2RlOiBudW1iZXIsIHNhdmU6IENfU2F2ZURhdGEpOiBJX1JldHVybiB7XHJcbiAgICBjb25zdCByZXRfYXNzb2M6IElfUmV0dXJuID0ge2Vjb2RlOmNvZGUsIGVtc2c6ICcnfTtcclxuXHJcbiAgICBpZiAoY29kZSAhPT0gMCB8fCBndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICByZXR1cm4gZXJyX2VuY29kZShjb2RlLCBndi5tZXMuZ2V0X2Vycl9tZXNzYWdlcygpKTtcclxuICAgIH1cclxuICAgIHJldF9hc3NvYy5lbXNnID0gJ1N0YXR1cyBPSyc7XHJcbiAgICByZXRfYXNzb2Muc2F2ZSA9IHNhdmUuZW5jb2RlKCk7XHJcblxyXG4gICAgcmV0dXJuIHJldF9hc3NvYztcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZV9zYXZlKG1hemU6IENfTWF6ZSwgdGVhbTogQ19UZWFtKTogQ19TYXZlRGF0YSB7XHJcbiAgICByZXR1cm4gbmV3IENfU2F2ZURhdGEoe1xyXG4gICAgICAgIHBsYXllcl9pZDogZ2EucGlkLFxyXG4gICAgICAgIGF1dG9fbW9kZTogJzAnLFxyXG4gICAgICAgIGlzX2FjdGl2ZTogJzEnLFxyXG4gICAgICAgIGlzX2RlbGV0ZTogJzAnLFxyXG5cclxuICAgICAgICBhbGxfdGVhbTogIFt0ZWFtLmVuY29kZSgpXSxcclxuICAgICAgICBhbGxfbWF6ZTogIFttYXplLmVuY29kZSgpXSxcclxuICAgICAgICBhbGxfZ3VsZDogIFtdLCBcclxuICAgICAgICBhbGxfbXZwdDogIFtdLCBcclxuXHJcbiAgICAgICAgbXlwb3M6ICAgICB0ZWFtLmdldF9sb2MoKS5lbmNvZGUoKSxcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVfbWF6ZShtYXplX25hbWU6IHN0cmluZyA9ICcnKTogW0NfTWF6ZSwgQ19Qb2ludERpcl0ge1xyXG4gICAgbGV0IG1hemU6IENfTWF6ZTtcclxuICAgIGlmIChtYXplX25hbWUgPT0gJycpIHtcclxuICAgICAgICBtYXplID0gbmV3IENfTWF6ZSh7XHJcbiAgICAgICAgICAgICduYW1lJyAgOiAn5aeL44G+44KK44Gu6L+35a6uJywgXHJcbiAgICAgICAgICAgICdzaXplX3gnOiAyMSwgXHJcbiAgICAgICAgICAgICdzaXplX3knOiAyMSwgXHJcbiAgICAgICAgICAgICdzaXplX3onOiBndi5NYXhfb2ZfTWF6ZV9GbG9vclxyXG4gICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG1hemVpbmZvID0gZ3YubWF6ZWluZm9bbWF6ZV9uYW1lXTtcclxuICAgICAgICBtYXplID0gbmV3IENfTWF6ZSh7XHJcbiAgICAgICAgICAgICduYW1lJzogICBtYXplaW5mby5tYm5hbWUsIFxyXG4gICAgICAgICAgICAnc2l6ZV94JzogbWF6ZWluZm8uc2l6ZV94LCBcclxuICAgICAgICAgICAgJ3NpemVfeSc6IG1hemVpbmZvLnNpemVfeSwgXHJcbiAgICAgICAgICAgICdzaXplX3onOiBtYXplaW5mby5zaXplX3pcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF6ZS5nZXRfel9tYXgoKTsgaSsrKSB7XHJcbiAgICAgICAgbWF6ZS5jcmVhdGVfbWF6ZShpKTtcclxuICAgIH0gXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG1hemUuZ2V0X3pfbWF4KCk7IGkrKykge1xyXG4gICAgICAgIG1hemUuY3JlYXRlX3N0YWlyKGkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcG9zID0gbWF6ZS5jcmVhdGVfc3RhaXIoMCk7XHJcbiAgICByZXR1cm4gW21hemUsIHBvc107XHJcbn1cclxuXHJcbi8vIOi/t+WuruaOoue0oiDmlrDopo/jgrLjg7zjg6DnlKjjga7mmqvlrprniYjlh6bnva7jgILjgZ3jga7kuoxcclxuZnVuY3Rpb24gY3JlYXRlX2hyZXMoKTogQ19IZXJvW10ge1xyXG4gICAgY29uc3QgaHJlczogQ19IZXJvW10gPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDM7IGkrKykge1xyXG4gICAgICAgIGhyZXMucHVzaChuZXcgQ19IZXJvKCkucmFuZG9tX21ha2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhyZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZV90ZWFtKG1hemU6IENfTWF6ZSwgcG9zOiBDX1BvaW50RGlyKTogQ19UZWFtIHtcclxuLypcclxuICAgICR4ID0gMiAqIHJhbmRvbV9pbnQoMCwgKCgkbWF6ZS0+Z2V0X3NpemVfeCgpIC0gMSkgLyAyKSAtIDEpICsgMTtcclxuICAgICR5ID0gMiAqIHJhbmRvbV9pbnQoMCwgKCgkbWF6ZS0+Z2V0X3NpemVfeSgpIC0gMSkgLyAyKSAtIDEpICsgMTtcclxuICAgICR6ID0gMDsgIC8vICAgICR6ID0gMSAqIHJhbmRvbV9pbnQoMCwgICgkZ3YtPm1hemUtPmdldF9zaXplX3ooKSAtIDEpKTtcclxuXHJcbiAgICAkZCA9IHJhbmRvbV9pbnQoMCwgRGlyZWN0OjpNQVgpO1xyXG4qL1xyXG5jb25zdCB0ZWFtID0gbmV3IENfVGVhbSgpO1xyXG5jb25zdCBsb2MgID0gbmV3IENfTW92YWJsZVBvaW50KCkuZGVjb2RlKHtcclxuICAgICAgICAna2luZCcgICA6ICdNYXplJyxcclxuICAgICAgICAnbmFtZScgICA6ICBtYXplLmdldF9uYW1lKCksXHJcbiAgICAgICAgJ2xvY191aWQnOiAgbWF6ZS51aWQoKSxcclxuICAgICAgICAnbG9jX3Bvcyc6ICBwb3MsXHJcbiAgICAgICAgJ3RlYW1fdWlkJzogdGVhbS51aWQoKSxcclxuICAgICAgICAvKlxyXG4gICAgICAgICdsb2NfcG9zJyA9PiBbXHJcbiAgICAgICAgICAgICd4JyAgID0+ICR4LFxyXG4gICAgICAgICAgICAneScgICA9PiAkeSxcclxuICAgICAgICAgICAgJ3onICAgPT4gJHosXHJcbiAgICAgICAgICAgICdkJyAgID0+ICRkLFxyXG4gICAgICAgIF0sXHJcbiovXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdGVhbS5zZXRfcHJwKHsnbmFtZSc6ICfjgbLjgojjgZPjgZXjgpPjg4Hjg7zjg6AnfSk7XHJcbiAgICB0ZWFtLnNldF9sb2MobG9jKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDM7IGkrKykge1xyXG4gICAgICAgIHRlYW0uYWRkX2hlcm8obmV3IENfSGVybygpLnJhbmRvbV9tYWtlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZWFtO1xyXG59XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Yid44CA5pyf44CA6Kit44CA5a6aICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5mdW5jdGlvbiBpbml0KG9iajogSV9HbG9iYWxBcmd1bWVudHMpOiB2b2lkIHtcclxuICAgIGd2ID0gbmV3IENfR2xvYmFsVmFyKCk7XHJcbiAgICBnYSA9IG5ldyBDX0dsb2JhbEFyZ3VtZW50cyhvYmopO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vXHJcbi8vLy8vICAgICDjgq/jg6njgrnlrqPoqIBcclxuLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8g5aSn5Z+f5aSJ5pWw44Gu6Kit5a6aXHJcbmNsYXNzIENfR2xvYmFsVmFyIHtcclxuICAgIHB1YmxpYyBtZXM6IENfRHNwTWVzc2FnZTtcclxuXHJcbiAgICBwdWJsaWMgbWF6ZWluZm86IHtbbWF6ZV9uYW1lOiBzdHJpbmddOiBDX01hemVJbmZvfSA9IHt9O1xyXG4vLyAgICBwdWJsaWMgbWF6ZTogICAgIENfTWF6ZTtcclxuICAgIHB1YmxpYyB0ZWFtOiAgICAgQ19UZWFtO1xyXG4gICAgcHVibGljIGhlcm9lczogICBDX0hlcm9bXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBNYXplX3NpemVfeCAgICAgICA9IDIxO1xyXG4gICAgcHVibGljIE1hemVfc2l6ZV95ICAgICAgID0gMjE7XHJcbiAgICBwdWJsaWMgTGltaXRfb2Zfcm9vbSAgICAgPSA1O1xyXG4gICAgcHVibGljIE1heF9zaXplX29mX3Jvb20gID0gMztcclxuICAgIHB1YmxpYyBNYXhfb2ZfTWF6ZV9GbG9vciA9IDM7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubWVzID0gbmV3IENfRHNwTWVzc2FnZSggLyogaXNIVE1MID0gKi8gZmFsc2UpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXplaW5mbyA9IENfTWF6ZUluZm8uZ2V0X3RibF9hbGwoKTsgXHJcbiAgICAgICAgZm9yIChjb25zdCBtaSBvZiBtYXplaW5mbykgdGhpcy5tYXplaW5mb1ttaS5uYW1lXSA9IG1pOyBcclxuLypcclxuICAgICAgICBjb25zdCBbcnNsdCwgbWF6ZWluZm9dICA9IENfTWF6ZUluZm8uZ2V0X3RibF9hbGwoKTtcclxuICAgICAgICB0aGlzLm1hemVpbmZvID0gKHJzbHQgIT09IHVuZGVmaW5lZCkgPyBtYXplaW5mbyA6IFtdOyBcclxuKi9cclxuLypcclxuICAgICAgICB0aGlzLm1hemUgICAgICAgID0gbmV3IENfTWF6ZSgpLmNyZWF0ZV9tYWtlKHtcclxuICAgICAgICAgICAgc2l6ZV94OiAgICB0aGlzLk1hemVfc2l6ZV94LFxyXG4gICAgICAgICAgICBzaXplX3k6ICAgIHRoaXMuTWF6ZV9zaXplX3ksXHJcbiAgICAgICAgICAgIHNpemVfejogICAgdGhpcy5NYXhfb2ZfTWF6ZV9GbG9vciwgXHJcbiAgICAgICAgICAgIGZpbGxfa2luZDogVF9NektpbmQuRW1wdHksXHJcbiAgICAgICAgICAgIG1heF9yb29tOiAgdGhpcy5MaW1pdF9vZl9yb29tLFxyXG4gICAgICAgICAgICByb29tX3NpemU6IHRoaXMuTWF4X3NpemVfb2Zfcm9vbSxcclxuICAgIH0pO1xyXG4qL1xyXG4gICAgICAgIHRoaXMudGVhbSAgICAgICAgPSAgbmV3IENfVGVhbSh7bmFtZTogJ05ldyBUZWFtJywgeDoxLCB5OjEsIHo6MSwgZDpUX0RpcmVjdGlvbi5OfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBQT1NU5byV5pWw44Gu6Kit5a6aXHJcbmNsYXNzIENfR2xvYmFsQXJndW1lbnRzIHtcclxuICAgIHB1YmxpYyBtb2RlOiAgICAgIHN0cmluZztcclxuICAgIHB1YmxpYyBwaWQ6ICAgICAgIG51bWJlciAgID0gIDE7XHJcbiAgICBwdWJsaWMgbWF6ZV9uYW1lOiBzdHJpbmcgICA9ICcnO1xyXG5cclxuLypcclxuICAgIHB1YmxpYyB0ZWFtX0pTT046IHN0cmluZyAgID0gJyc7XHJcbiAgICBwdWJsaWMgbWF6ZV9KU09OOiBzdHJpbmcgICA9ICcnO1xyXG4qL1xyXG5cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob2JqOiBJX0dsb2JhbEFyZ3VtZW50cykge1xyXG4gICAgICAgIHRoaXMubW9kZSAgICAgID0gb2JqPy5tb2RlID8/ICd1bmtub3duJztcclxuICAgICAgICB0aGlzLnBpZCAgICAgICA9IG9iaj8ucGlkICAhPT0gdW5kZWZpbmVkICYmICFpc05hTihvYmoucGlkKSA/IE51bWJlcihvYmoucGlkKSA6IDE7XHJcbiAgICAgICAgdGhpcy5tYXplX25hbWUgPSBvYmo/Lm1hemVfbmFtZSA/PyAnJztcclxuLypcclxuICAgICAgICB0aGlzLnRlYW1fSlNPTiA9IG9iaj8udGVhbSAgICAgID8/ICcnO1xyXG4gICAgICAgIHRoaXMubWF6ZV9KU09OID0gb2JqPy5tYXplICAgICAgPz8gJyc7XHJcbiovXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW50ZXJmYWNlIH0gZnJvbSAncmVhZGxpbmUnO1xuaW1wb3J0IHtuZXdHdWxkLCBhbGxIcmVzfSBmcm9tICcuLi9saWIvX0pTT05fbWFpX2d1bGQnXG5pbXBvcnQgY3JlYXRlRXJyb3IgIGZyb20gJ2h0dHAtZXJyb3JzJztcblxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG52YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuLyogR0VUIHVzZXJzIGxpc3RpbmcuICovXG5yb3V0ZXIuZ2V0ICgnLycsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgbWFpR3VsZCcpO1xufSk7XG5cbnJvdXRlci5wb3N0KCcvbmV3R3VsZCcsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICB0cnkge1xuLy9kZWJ1ZyAgICBmb3IgKGNvbnN0IGtleSBpbiByZXEuYm9keSkgY29uc29sZS5lcnJvcihgcmVxLiR7a2V5fTogJHtyZXEuYm9keVtrZXldfWApO1xuXG4gICAgY29uc3QgcmV0ID0gbmV3R3VsZChyZXEuYm9keSk7XG4gICAgcmVzLnN0YXR1cygyMDApO1xuICAgIHJlcy5zZW5kKEpTT04uc3RyaW5naWZ5KHJldCwgbnVsbCwgXCJcXHRcIikpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhgbmV3R2FtZSBQT1NUIGVycm9yOiAke2Vycn1gKTtcbiAgICBuZXh0KGNyZWF0ZUVycm9yKDQwNikpO1xuICB9XG59KTtcbnJvdXRlci5nZXQgKCcvbmV3R3VsZCcsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgTmV3IEdhbWUgVG8gR3VsZCBvZiBtYWknKTtcbn0pO1xuXG5yb3V0ZXIucG9zdCgnL2FsbEhyZXMnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgdHJ5IHtcbi8vZGVidWcgICAgZm9yIChjb25zdCBrZXkgaW4gcmVxLmJvZHkpIGNvbnNvbGUuZXJyb3IoYHJlcS4ke2tleX06ICR7cmVxLmJvZHlba2V5XX1gKTtcblxuICAgIGNvbnN0IHJldCA9IGFsbEhyZXMocmVxLmJvZHkpO1xuICAgIHJlcy5zdGF0dXMoMjAwKTtcbiAgICByZXMuc2VuZChKU09OLnN0cmluZ2lmeShyZXQsIG51bGwsIFwiXFx0XCIpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coYG5ld0hyZXMgUE9TVCBlcnJvcjogJHtlcnJ9YCk7XG4gICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcbiAgfVxufSk7XG5cbnJvdXRlci5nZXQgKCcvYWxsSHJlcycsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIEdldHRpbmcgQWxsIEhyZXMgZGF0YSBvZiBtYWknKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcbiIsImltcG9ydCB7dGVzdH0gZnJvbSAnLi4vbGliL19KU09OX21haV9sZHN2X3Rlc3QnXG5pbXBvcnQgY3JlYXRlRXJyb3IgIGZyb20gJ2h0dHAtZXJyb3JzJztcblxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG52YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuLyogR0VUIHVzZXJzIGxpc3RpbmcuICovXG5yb3V0ZXIuZ2V0ICgnLycsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgbWFpTG9hZFNhdmUnKTtcbn0pO1xuXG4vKlxuKiogRm9yIFRlc3QgRnVuY3Rpb25cbiovXG5yb3V0ZXIucG9zdCgnL3Rlc3QnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgdHJ5IHtcbi8vZGVidWdcbiAgICBmb3IgKGNvbnN0IGtleSBpbiByZXEuYm9keSkgY29uc29sZS5lcnJvcihgcmVxLiR7a2V5fTogJHtyZXEuYm9keVtrZXldfWApO1xuXG4gICAgY29uc3QgcnNsdCA9IGF3YWl0IHRlc3QocmVxLmJvZHkpO1xuICAgIGlmIChyc2x0LmVjb2RlICE9PSAwKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGAqKiogZXJyb3I6ICR7cnNsdC5lY29kZX06ICR7cnNsdC5lbXNnfSAqKipgKTtcbiAgICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XG4gICAgfVxuXG4gICAgcmVzLnJlbmRlcigncGFnZXMvdGVzdCcsIHJzbHQpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGBuZXdMb2FkIFBPU1QgZXJyb3I6ICR7ZXJyfWApO1xuICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XG4gIH1cbn0pO1xucm91dGVyLmdldCAoJy90ZXN0JywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHRyeSB7XG4vL2RlYnVnXG4gICAgZm9yIChjb25zdCBrZXkgaW4gcmVxLmJvZHkpIGNvbnNvbGUuZXJyb3IoYHJlcS4ke2tleX06ICR7cmVxLmJvZHlba2V5XX1gKTtcblxuICAgIHJlcy5yZW5kZXIoJ3BhZ2VzL3Rlc3QnLHtwaWQ6IC0xfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGBuZXdMb2FkIFBPU1QgZXJyb3I6ICR7ZXJyfWApO1xuICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XG4gIH1cbi8vICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgTG9hZCBUZXN0ICBvZiBtYWknKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcbiIsImltcG9ydCB7IGFsbE1hemUsIGdldE1hemUsIG5ld01hemUgfSAgZnJvbSAnLi4vbGliL19KU09OX21haV9tYXplJztcbmltcG9ydCBjcmVhdGVFcnJvciAgZnJvbSAnaHR0cC1lcnJvcnMnO1xuXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbnZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4vKiBHRVQgdXNlcnMgbGlzdGluZy4gKi9cbnJvdXRlci5nZXQgKCcvJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSBtYWlNYXplJyk7XG59KTtcblxucm91dGVyLnBvc3QoJy9uZXdNYXplJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHRyeSB7XG4vL2RlYnVnICAgIGZvciAoY29uc3Qga2V5IGluIHJlcS5ib2R5KSBjb25zb2xlLmVycm9yKGByZXEuJHtrZXl9OiAke3JlcS5ib2R5W2tleV19YCk7XG5cbiAgICBjb25zdCByZXQgPSBuZXdNYXplKHJlcS5ib2R5KTtcbiAgICByZXMuc3RhdHVzKDIwMCk7XG4gICAgcmVzLnNlbmQoSlNPTi5zdHJpbmdpZnkocmV0LCBudWxsLCBcIlxcdFwiKSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGBuZXdHYW1lIFBPU1QgZXJyb3I6ICR7ZXJyfWApO1xuICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XG4gIH1cbn0pO1xuXG5yb3V0ZXIuZ2V0ICgnL25ld01hemUnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIE5ldyBHYW1lIFRvIE1hemUgb2YgbWFpJyk7XG59KTtcblxucm91dGVyLnBvc3QoJy9nZXRNYXplJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHRyeSB7XG4vL2RlYnVnICAgIGZvciAoY29uc3Qga2V5IGluIHJlcS5ib2R5KSBjb25zb2xlLmVycm9yKGByZXEuJHtrZXl9OiAke3JlcS5ib2R5W2tleV19YCk7XG5cbiAgICBjb25zdCByZXQgPSBnZXRNYXplKHJlcS5ib2R5KTtcbiAgICByZXMuc3RhdHVzKDIwMCk7XG4gICAgcmVzLnNlbmQoSlNPTi5zdHJpbmdpZnkocmV0LCBudWxsLCBcIlxcdFwiKSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGBuZXdNYXplIFBPU1QgZXJyb3I6ICR7ZXJyfWApO1xuICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XG4gIH1cbn0pO1xuXG5yb3V0ZXIuZ2V0ICgnL2dldE1hemUnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBHZXR0aW5nIE5ldyBNYXplIGRhdGEgb2YgbWFpJyk7XG59KTtcblxuXG5yb3V0ZXIucG9zdCgnL2FsbE1hemUnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgdHJ5IHtcbi8vZGVidWcgICAgZm9yIChjb25zdCBrZXkgaW4gcmVxLmJvZHkpIGNvbnNvbGUuZXJyb3IoYHJlcS4ke2tleX06ICR7cmVxLmJvZHlba2V5XX1gKTtcblxuICAgIGNvbnN0IHJldCA9IGFsbE1hemUocmVxLmJvZHkpO1xuICAgIHJlcy5zdGF0dXMoMjAwKTtcbiAgICByZXMuc2VuZChKU09OLnN0cmluZ2lmeShyZXQsIG51bGwsIFwiXFx0XCIpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coYG1hemVJbmZvIFBPU1QgZXJyb3I6ICR7ZXJyfWApO1xuICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XG4gIH1cbn0pO1xuXG5yb3V0ZXIuZ2V0ICgnL2FsbE1hemUnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBBbGwgTWF6ZSBJbmZvbWF0aW9uIG9mIG1haScpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5cbnZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xudmFyIG1haUd1bGRSb3V0ZXIgPSByZXF1aXJlKCcuL21haUd1bGQnKTtcbnZhciBtYWlNYXplUm91dGVyID0gcmVxdWlyZSgnLi9tYWlNYXplJyk7XG52YXIgbWFpTGRTdlJvdXRlciA9IHJlcXVpcmUoJy4vbWFpTGRTdicpO1xuXG4vLyByb3V0ZXIgc2V0dXBcbnJvdXRlci51c2UoJy9ndWxkJywgICBtYWlHdWxkUm91dGVyKTtcbnJvdXRlci51c2UoJy9tYXplJywgICBtYWlNYXplUm91dGVyKTtcbnJvdXRlci51c2UoJy9sZHN2JywgICBtYWlMZFN2Um91dGVyKTtcblxuLyogR0VUIHVzZXJzIGxpc3RpbmcuICovXG5yb3V0ZXIuZ2V0KCcvJywgZnVuY3Rpb24ocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pIHtcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIG1haWV4Jyk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbnZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4vKiBHRVQgdXNlcnMgbGlzdGluZy4gKi9cbnJvdXRlci5nZXQoJy8nLCBmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgdXNlciByZXNvdXJjZScpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHAtZXJyb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJteXNxbDIvcHJvbWlzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=