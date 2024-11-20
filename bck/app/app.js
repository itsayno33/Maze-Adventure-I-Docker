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
        + "\ngoods:    " + (Object.keys((_e = a.goods) !== null && _e !== void 0 ? _e : 0).length)
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_SaveData = void 0;
exports.alert_save_info = alert_save_info;
exports.alert_save_detail = alert_save_detail;
var C_Maze_1 = __webpack_require__(/*! ./C_Maze */ "../mai/src/d_mdl/C_Maze.ts");
var C_Guild_1 = __webpack_require__(/*! ./C_Guild */ "../mai/src/d_mdl/C_Guild.ts");
var C_MovablePoint_1 = __webpack_require__(/*! ./C_MovablePoint */ "../mai/src/d_mdl/C_MovablePoint.ts");
var C_Team_1 = __webpack_require__(/*! ./C_Team */ "../mai/src/d_mdl/C_Team.ts");
function alert_save_info(a) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2;
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
        + "\nmyurl:      " + ((_l = (_k = a.mypos) === null || _k === void 0 ? void 0 : _k.cur_url) !== null && _l !== void 0 ? _l : '?')
        + "\nteam_uid:   " + ((_o = (_m = a.mypos) === null || _m === void 0 ? void 0 : _m.team_uid) !== null && _o !== void 0 ? _o : '?')
        + "\nloc_kind:   " + ((_q = (_p = a.mypos) === null || _p === void 0 ? void 0 : _p.kind) !== null && _q !== void 0 ? _q : '?')
        + "\nloc_name:   " + ((_s = (_r = a.mypos) === null || _r === void 0 ? void 0 : _r.name) !== null && _s !== void 0 ? _s : '?')
        + "\nloc_uid:    " + ((_u = (_t = a.mypos) === null || _t === void 0 ? void 0 : _t.loc_uid) !== null && _u !== void 0 ? _u : '?')
        + "\nmvpt_count: " + ((_w = (_v = a.all_mvpt) === null || _v === void 0 ? void 0 : _v.length) !== null && _w !== void 0 ? _w : '?')
        + "\nmaze_count: " + ((_y = (_x = a.all_maze) === null || _x === void 0 ? void 0 : _x.length) !== null && _y !== void 0 ? _y : '?')
        + "\nguld_count: " + ((_0 = (_z = a.all_guld) === null || _z === void 0 ? void 0 : _z.length) !== null && _0 !== void 0 ? _0 : '?')
        + "\nteam_count: " + ((_2 = (_1 = a.all_team) === null || _1 === void 0 ? void 0 : _1.length) !== null && _2 !== void 0 ? _2 : '?')
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
var C_SaveData = /** @class */ (function () {
    function C_SaveData(a) {
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
        this.all_mvpt = {};
        this.all_maze = {};
        this.all_team = {};
        this.all_guld = {};
        if (a !== undefined)
            this.decode(a);
    }
    C_SaveData.new = function (a) {
        return new C_SaveData(a);
    };
    C_SaveData.prototype.encode = function () {
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
                all_mvpt: this._encode_all_data(this.all_mvpt),
                all_maze: this._encode_all_data(this.all_maze),
                all_team: this._encode_all_data(this.all_team),
                all_guld: this._encode_all_data(this.all_guld),
            };
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
        if (s.all_mvpt !== undefined) {
            this.all_mvpt = {};
            for (var _i = 0, _g = s.all_mvpt; _i < _g.length; _i++) {
                var json_mvpt = _g[_i];
                var mvpt = (new C_MovablePoint_1.C_MovablePoint()).decode(json_mvpt);
                this.all_mvpt[mvpt.uid()] = mvpt;
            }
        }
        if (s.all_maze !== undefined) {
            this.all_maze = {};
            for (var _h = 0, _j = s.all_maze; _h < _j.length; _h++) {
                var json_maze = _j[_h];
                var maze = (new C_Maze_1.C_Maze()).decode(json_maze);
                this.all_maze[maze.uid()] = maze;
            }
        }
        if (s.all_team !== undefined) {
            this.all_team = {};
            for (var _k = 0, _l = s.all_team; _k < _l.length; _k++) {
                var json_team = _l[_k];
                var team = (new C_Team_1.C_Team()).decode(json_team);
                this.all_team[team.uid()] = team;
            }
        }
        if (s.all_guld !== undefined) {
            this.all_guld = {};
            for (var _m = 0, _o = s.all_guld; _m < _o.length; _m++) {
                var json_guld = _o[_m];
                var guld = (new C_Guild_1.C_Guild()).decode(json_guld);
                this.all_guld[guld.uid()] = guld;
            }
        }
        return this;
    };
    C_SaveData.prototype.alert = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
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
            + "\nmyurl:      " + ((_g = this.mypos.url()) !== null && _g !== void 0 ? _g : '?')
            + "\nteam_uid:   " + ((_h = this.mypos.tid()) !== null && _h !== void 0 ? _h : '?')
            + "\nloc_kind:   " + ((_j = this.mypos.get_lckd()) !== null && _j !== void 0 ? _j : '?')
            + "\nloc_name:   " + ((_k = this.mypos.get_name()) !== null && _k !== void 0 ? _k : '?')
            + "\nloc_uid:    " + ((_l = this.mypos.get_uid()) !== null && _l !== void 0 ? _l : '?')
            + "\nmvpt_count: " + ((_o = (_m = this.all_mvpt) === null || _m === void 0 ? void 0 : _m.length) !== null && _o !== void 0 ? _o : '?')
            + "\nmaze_count: " + ((_q = (_p = this.all_maze) === null || _p === void 0 ? void 0 : _p.length) !== null && _q !== void 0 ? _q : '?')
            + "\nguld_count: " + ((_s = (_r = this.all_guld) === null || _r === void 0 ? void 0 : _r.length) !== null && _s !== void 0 ? _s : '?')
            + "\nteam_count: " + ((_u = (_t = this.all_team) === null || _t === void 0 ? void 0 : _t.length) !== null && _u !== void 0 ? _u : '?')
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
}());
exports.C_SaveData = C_SaveData;


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
    for (var msg in msgs)
        ret_assoc.emsg += msg;
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

/***/ "./src/lib/_JSON_mai_ldsv.ts":
/*!***********************************!*\
  !*** ./src/lib/_JSON_mai_ldsv.ts ***!
  \***********************************/
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
    for (var msg in msgs)
        ret_assoc.emsg += msg;
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
var _JSON_mai_ldsv_1 = __webpack_require__(/*! ../lib/_JSON_mai_ldsv */ "./src/lib/_JSON_mai_ldsv.ts");
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
router.post('/test', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var key, rslt, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                //debug
                for (key in req.body)
                    console.error("req.".concat(key, ": ").concat(req.body[key]));
                return [4 /*yield*/, (0, _JSON_mai_ldsv_1.test)(req.body)];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRU0saUNBQVMsR0FBaEI7UUFDSSxPQUFPLG1CQUFNLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ00sa0NBQVUsR0FBakI7UUFDSSxPQUFPLG1CQUFNLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBQ00sa0NBQVUsR0FBakI7UUFDSSxPQUFPLG1CQUFNLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBQ00sa0NBQVUsR0FBakI7UUFDSSxPQUFPLG1CQUFNLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBQ00sa0NBQVUsR0FBakI7UUFDSSxPQUFPLG1CQUFNLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxD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QUFJLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdEQsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdEQsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdEQsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFNLFNBQVM7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNsRixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDLEtBQUssS0FBTSxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDLEtBQUssS0FBTSxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDLEtBQUssS0FBTSxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDLEtBQUssS0FBTSxFQUFFLENBQUUsQ0FB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QUFDLE1BQU0sRUFBRSxDQUFDO0FBRTlCLHdCQUF3QjtBQUN4QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFTLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtJQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7QUNSeEI7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19Hb29kc0l0ZW0udHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19HdWlsZC50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX0hlcm8udHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19IZXJvQWJpbGl0eS50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX0xvY2F0aW9uLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfTWF6ZS50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX01hemVDZWxsLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfTWF6ZUluZm8udHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19NYXplT2JqLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfTWF6ZU9ialZpZXcudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19Nb3ZhYmxlUG9pbnQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19Qb2ludC50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX1BvaW50RGlyLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfUG9pbnRTZXQyRC50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX1JhbmdlLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfU2F2ZURhdGEudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19UZWFtLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfVGVhbVZpZXcudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19XYWxrZXIudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvVF9EaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvVF9NektpbmQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF91dGwvQ19Ec3BNZXNzYWdlLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfdXRsL0ZfTWF0aC50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX3V0bC9GX1JhbmQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvbGliL19KU09OX21haV9ndWxkLnRzIiwid2VicGFjazovL21haS8uL3NyYy9saWIvX0pTT05fbWFpX2xkc3YudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2xpYi9fSlNPTl9tYWlfbWF6ZS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvcm91dGVzL21haUd1bGQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL3JvdXRlcy9tYWlMZFN2LnRzIiwid2VicGFjazovL21haS8uL3NyYy9yb3V0ZXMvbWFpTWF6ZS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvcm91dGVzL21haWV4LnRzIiwid2VicGFjazovL21haS8uL3NyYy9yb3V0ZXMvdXNlcnMudHMiLCJ3ZWJwYWNrOi8vbWFpL2V4dGVybmFsIGNvbW1vbmpzIFwiY29va2llLXBhcnNlclwiIiwid2VicGFjazovL21haS9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9tYWkvZXh0ZXJuYWwgY29tbW9uanMgXCJodHRwLWVycm9yc1wiIiwid2VicGFjazovL21haS9leHRlcm5hbCBjb21tb25qcyBcIm1vcmdhblwiIiwid2VicGFjazovL21haS9leHRlcm5hbCBjb21tb25qcyBcIm15c3FsMi9wcm9taXNlXCIiLCJ3ZWJwYWNrOi8vbWFpL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vbWFpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21haS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL21haS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbWFpL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUX01ha2VFbnVtVHlwZSB9ICAgZnJvbSBcIi4uL2RfdXRsL1RfTWFrZUVudW1UeXBlXCI7XHJcbmltcG9ydCB7IF9nZXRfdXVpZCwgX2lyYW5kIH0gICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuaW1wb3J0IHsgSV9KU09OLCBKU09OX0FueSB9IGZyb20gXCIuL0NfU2F2ZURhdGFcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUX0dvb2RzS2luZDp7W2xja2Q6IHN0cmluZ106IG51bWJlcn0gID0ge1xyXG4gICAgVW5rbjogIDAsXHJcbiAgICBDaHN0OiAgMSwgIFxyXG4gICAgR29sZDogIDIsXHJcbiAgICBBcm1zOiAgMyxcclxuICAgIFNobGQ6ICA1LFxyXG4gICAgRHJ1ZzogIDYsXHJcbiAgICBJdGVtOiAgNyxcclxufSBhcyBjb25zdDtcclxuZXhwb3J0IHR5cGUgVF9Hb29kc0tpbmQgPSBUX01ha2VFbnVtVHlwZTx0eXBlb2YgVF9Hb29kc0tpbmQ+O1xyXG5cclxuZnVuY3Rpb24gVF9Hb29kc0tpbmRfa2V5KGdka2Q6IFRfR29vZHNLaW5kKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhUX0dvb2RzS2luZCkuZmluZChrZXkgPT4gVF9Hb29kc0tpbmRba2V5XSA9PT0gZ2RrZCkgPz8gXCJVbmtuXCI7XHJcbn1cclxuXHJcbmNvbnN0IEdvb2RzS2luZF9tYl9uYW1lOiB7W2tpbmQ6IG51bWJlcl06IHN0cmluZ30gPSB7XHJcbiAgICAwOiAgJ+ODkOOCsCcsXHJcbiAgICAxOiAgJ+WuneeusScsXHJcbiAgICAyOiAgJ+mHkemKrScsXHJcbiAgICAzOiAgJ+atpuWZqCcsXHJcbiAgICA1OiAgJ+ijheWCmScsXHJcbiAgICA2OiAgJ+iWrCcsXHJcbiAgICA3OiAgJ+eJqeWTgScsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9Hb29kc0l0ZW0gZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICB1bmlxX2lkPzogICAgICAgICBzdHJpbmcsXHJcbiAgICBraW5kPzogICAgICAgICAgICBzdHJpbmcsXHJcbiAgICBuYW1lPzogICAgICAgICAgICBzdHJpbmcsXHJcbiAgICBhbWJpZ3VvdXNfbmFtZT86ICBzdHJpbmcsXHJcbiAgICBjb25maXJtZWRfbmFtZT86ICBzdHJpbmcsXHJcbiAgICBvd25fbmFtZT86ICAgICAgICBzdHJpbmcsXHJcbiAgICBhbWJpZ3VvdXNfdmFsdWU/OiBudW1iZXIsXHJcbiAgICBjb25maXJtZWRfdmFsdWU/OiBudW1iZXIsXHJcbiAgICBvd25fdmFsdWU/OiAgICAgICBudW1iZXIsXHJcbiAgICBpc19jb25maXJtZWQ/OiAgICBzdHJpbmcsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX0dvb2RzSXRlbSBpbXBsZW1lbnRzIElfSlNPTiB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBuZXdPYmooaj86IEpTT05fR29vZHNJdGVtKTogQ19Hb29kc0l0ZW18dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAoaiAgICAgID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKGoua2luZCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBpZiAoai5raW5kIGluIFRfR29vZHNLaW5kKSByZXR1cm4gbmV3IENfR29vZHNJdGVtKGopO1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbi8qICAgICAgICBcclxuICAgICAgICBjb25zdCBraW5kID0gVF9Hb29kc0tpbmRbai5raW5kXTtcclxuICAgICAgICBzd2l0Y2ggKGtpbmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0dvb2RzS2luZC5Hb2xkOlxyXG4gICAgICAgICAgICBjYXNlIFRfR29vZHNLaW5kLkFybXM6XHJcbiAgICAgICAgICAgIGNhc2UgVF9Hb29kc0tpbmQuU2hsZDpcclxuICAgICAgICAgICAgY2FzZSBUX0dvb2RzS2luZC5EcnVnOlxyXG4gICAgICAgICAgICBjYXNlIFRfR29vZHNLaW5kLkl0ZW06XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENfR29vZHNJdGVtKGopO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiovXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVuaXFfaWQ6ICAgICAgICAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIGtpbmQ6ICAgICAgICAgICAgVF9Hb29kc0tpbmQ7XHJcbiAgICBwcm90ZWN0ZWQgbmFtZTogICAgICAgICAgICBzdHJpbmc7ICAgLy8g5LiL6KiY44Gu5ZCN5YmN44Gu44GG44Gh44CB5pyA5paw44Gu44KC44GuXHJcbiAgICBwcm90ZWN0ZWQgYW1iaWd1b3VzX25hbWU6ICBzdHJpbmc7ICAgLy8g6ZGR5a6a44G+44Gn44Gu5ZCN5YmNXHJcbiAgICBwcm90ZWN0ZWQgY29uZmlybWVkX25hbWU6ICBzdHJpbmc7ICAgLy8g6ZGR5a6a44Gn56K65a6a44GX44Gf5ZCN5YmNXHJcbiAgICBwcm90ZWN0ZWQgb3JpZ2luYWxfbmFtZTogICBzdHJpbmd8dW5kZWZpbmVkOyAgLy8g6Ieq5YiG44Gn5ZG95ZCN44GX44Gf44Kq44Oq44K444OK44Or44Gu5ZCN5YmNXHJcbiAgICBwcm90ZWN0ZWQgdmFsdWU6ICAgICAgICAgICBudW1iZXI7ICAvLyDph5Hpiq3nmoTkvqHlgKQoR29sZCDjgarjgonjgZ3jga7kvqHmoLzjgIHjgZ3jga7ku5bjga/lo7LosrfkvqHmoLzjga7ln7rnpI7lgKQpXHJcbiAgICBwcm90ZWN0ZWQgYW1iaWd1b3VzX3ZhbHVlOiBudW1iZXI7ICAvLyDpkZHlrprjgb7jgafjga7kvqHlgKRcclxuICAgIHByb3RlY3RlZCBjb25maXJtZWRfdmFsdWU6IG51bWJlcjsgIC8vIOmRkeWumuOBp+eiuuWumuOBl+OBn+S+oeWApFxyXG4gICAgcHJvdGVjdGVkIG9yaWdpbmFsX3ZhbHVlOiAgbnVtYmVyfHVuZGVmaW5lZDsgIC8vIOOCquODquOCuOODiuODq+WMluOBl+OBn+W+jOOBruS+oeWApFxyXG4gICAgcHJvdGVjdGVkIGlzX2NvbmZpcm1lZDogICAgYm9vbGVhbjsgLy8g6ZGR5a6a44Gn56K65a6aKFRydWUp44GX44Gf44GL5ZCmKEZhbHNlKeOBi1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9Hb29kc0l0ZW0pIHtcclxuICAgICAgICB0aGlzLnVuaXFfaWQgICAgICAgID0gICdnb29kc18nICsgX2dldF91dWlkKCk7XHJcbiAgICAgICAgdGhpcy5raW5kICAgICAgICAgICA9IFRfR29vZHNLaW5kLlVua247XHJcbiAgICAgICAgdGhpcy5pc19jb25maXJtZWQgICA9IGZhbHNlOyBcclxuXHJcbiAgICAgICAgdGhpcy5hbWJpZ3VvdXNfbmFtZSA9ICcnOyBcclxuICAgICAgICB0aGlzLmNvbmZpcm1lZF9uYW1lID0gJyc7IFxyXG4gICAgICAgIHRoaXMub3JpZ2luYWxfbmFtZSAgPSB1bmRlZmluZWQ7IFxyXG4gICAgICAgIHRoaXMubmFtZSAgICAgICAgICAgPSB0aGlzLmFtYmlndW91c19uYW1lOyBcclxuXHJcbiAgICAgICAgdGhpcy5hbWJpZ3VvdXNfdmFsdWUgPSAwOyBcclxuICAgICAgICB0aGlzLmNvbmZpcm1lZF92YWx1ZSA9IDA7IFxyXG4gICAgICAgIHRoaXMub3JpZ2luYWxfdmFsdWUgID0gdW5kZWZpbmVkOyBcclxuICAgICAgICB0aGlzLnZhbHVlICAgICAgICAgICA9IHRoaXMuYW1iaWd1b3VzX3ZhbHVlOyBcclxuXHJcbiAgICAgICAgaWYgKGogIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoaik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVpZCgpOiBzdHJpbmcge3JldHVybiB0aGlzLnVuaXFfaWQ7fTtcclxuICAgIHB1YmxpYyBnZXRfa2luZCgpOiBUX0dvb2RzS2luZCB7cmV0dXJuIHRoaXMua2luZDt9O1xyXG4gICAgcHVibGljIGdldF9uYW1lKCk6IHN0cmluZyB7cmV0dXJuIHRoaXMubmFtZX07XHJcbiAgICBwdWJsaWMgZ2V0X2dvbGQoKTogbnVtYmVyIHtyZXR1cm4gdGhpcy52YWx1ZX07XHJcblxyXG4gICAgcHVibGljIGdldF9raW5kX25hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gR29vZHNLaW5kX21iX25hbWVbdGhpcy5raW5kXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZG9fY29uZmlybWUoKTogc3RyaW5nIHtcclxuICAgICAgICB0aGlzLmlzX2NvbmZpcm1lZCAgID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5hbWUgID0gdGhpcy5vcmlnaW5hbF9uYW1lICA/PyB0aGlzLmNvbmZpcm1lZF9uYW1lO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm9yaWdpbmFsX3ZhbHVlID8/IHRoaXMuY29uZmlybWVkX3ZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X293bl9uYW1lKG9yaWdpbmFsX25hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbF9uYW1lID0gb3JpZ2luYWxfbmFtZTtcclxuICAgICAgICB0aGlzLm5hbWUgICAgICAgICAgPSBvcmlnaW5hbF9uYW1lO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X293bl92YWx1ZShvcmlnaW5hbF92YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsX3ZhbHVlID0gb3JpZ2luYWxfdmFsdWU7XHJcbiAgICAgICAgdGhpcy52YWx1ZSAgICAgICAgICA9IG9yaWdpbmFsX3ZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByYW5kb21fbWFrZShraW5kOiBUX0dvb2RzS2luZCk6IENfR29vZHNJdGVtIHtcclxuICAgICAgICB0aGlzLmtpbmQgPSBraW5kO1xyXG4gICAgICAgIGlmIChraW5kID09PSBUX0dvb2RzS2luZC5Hb2xkKSAgdGhpcy52YWx1ZSA9IF9pcmFuZCgxMDAsMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX0dvb2RzSXRlbSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdW5pcV9pZDogICAgICAgICB0aGlzLnVuaXFfaWQsXHJcbiAgICAgICAgICAgIGtpbmQ6ICAgICAgICAgICAgVF9Hb29kc0tpbmRfa2V5KHRoaXMua2luZCksXHJcbiAgICAgICAgICAgIGFtYmlndW91c19uYW1lOiAgdGhpcy5hbWJpZ3VvdXNfbmFtZSxcclxuICAgICAgICAgICAgY29uZmlybWVkX25hbWU6ICB0aGlzLmNvbmZpcm1lZF9uYW1lLFxyXG4gICAgICAgICAgICBvcmlnaW5hbF9uYW1lOiAgIHRoaXMub3JpZ2luYWxfbmFtZSA/PyAnJyxcclxuICAgICAgICAgICAgYW1iaWd1b3VzX3ZhbHVlOiB0aGlzLmFtYmlndW91c192YWx1ZSxcclxuICAgICAgICAgICAgY29uZmlybWVkX3ZhbHVlOiB0aGlzLmNvbmZpcm1lZF92YWx1ZSxcclxuICAgICAgICAgICAgb3JpZ2luYWxfdmFsdWU6ICB0aGlzLm9yaWdpbmFsX3ZhbHVlID8/IDAsXHJcbiAgICAgICAgICAgIGlzX2NvbmZpcm1lZDogICAgdGhpcy5pc19jb25maXJtZWQgPyAnMScgOiAnMCcsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShqOiBKU09OX0dvb2RzSXRlbSk6IENfR29vZHNJdGVtIHtcclxuICAgICAgICBpZiAoaiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGoudW5pcV9pZCAgICAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMudW5pcV9pZCAgICAgICAgICA9IGoudW5pcV9pZDtcclxuICAgICAgICBpZiAoai5raW5kICAgICAgICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5raW5kICAgICAgICAgICAgID0gVF9Hb29kc0tpbmRbai5raW5kXTtcclxuICAgICAgICBpZiAoai5hbWJpZ3VvdXNfbmFtZSAgIT09IHVuZGVmaW5lZCkgdGhpcy5hbWJpZ3VvdXNfbmFtZSAgID0gai5hbWJpZ3VvdXNfbmFtZTtcclxuICAgICAgICBpZiAoai5jb25maXJtZWRfbmFtZSAgIT09IHVuZGVmaW5lZCkgdGhpcy5jb25maXJtZWRfbmFtZSAgID0gai5jb25maXJtZWRfbmFtZTtcclxuICAgICAgICBpZiAoai5vcmlnaW5hbF9uYW1lICAgIT09IHVuZGVmaW5lZCkgdGhpcy5vcmlnaW5hbF9uYW1lICAgID0gai5vcmlnaW5hbF9uYW1lICE9PSAnJyA/IGoub3JpZ2luYWxfbmFtZSA6IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAoai5hbWJpZ3VvdXNfdmFsdWUgIT09IHVuZGVmaW5lZCkgdGhpcy5hbWJpZ3VvdXNfdmFsdWUgID0gai5hbWJpZ3VvdXNfdmFsdWU7XHJcbiAgICAgICAgaWYgKGouY29uZmlybWVkX3ZhbHVlICE9PSB1bmRlZmluZWQpIHRoaXMuY29uZmlybWVkX3ZhbHVlICA9IGouY29uZmlybWVkX3ZhbHVlO1xyXG4gICAgICAgIGlmIChqLm9yaWdpbmFsX3ZhbHVlICAhPT0gdW5kZWZpbmVkKSB0aGlzLm9yaWdpbmFsX3ZhbHVlICAgPSBqLm9yaWdpbmFsX3ZhbHVlICE9PSAwID8gai5vcmlnaW5hbF92YWx1ZSA6IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAoai5pc19jb25maXJtZWQgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5pc19jb25maXJtZWQgICAgID0gai5pc19jb25maXJtZWQgIT0gJzAnID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5vcmlnaW5hbF9uYW1lICE9PSB1bmRlZmluZWQpIHRoaXMubmFtZSA9IHRoaXMub3JpZ2luYWxfbmFtZTtcclxuICAgICAgICBlbHNlIHRoaXMubmFtZSA9IHRoaXMuaXNfY29uZmlybWVkID8gdGhpcy5jb25maXJtZWRfbmFtZSA6IHRoaXMuYW1iaWd1b3VzX25hbWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9yaWdpbmFsX3ZhbHVlICE9PSB1bmRlZmluZWQpIHRoaXMudmFsdWUgPSB0aGlzLm9yaWdpbmFsX3ZhbHVlO1xyXG4gICAgICAgIGVsc2UgdGhpcy52YWx1ZSA9IHRoaXMuaXNfY29uZmlybWVkID8gdGhpcy5jb25maXJtZWRfdmFsdWUgOiB0aGlzLmFtYmlndW91c192YWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgSV9Mb2NhdGUsIFRfTGNrZCB9ICAgICAgZnJvbSBcIi4vQ19Mb2NhdGlvblwiO1xyXG5pbXBvcnQgeyBJX0pTT05fVW5pcSwgSlNPTl9BbnkgfSBmcm9tIFwiLi9DX1NhdmVEYXRhXCI7XHJcbmltcG9ydCB7IENfSGVybywgSlNPTl9IZXJvIH0gICAgIGZyb20gXCIuL0NfSGVyb1wiO1xyXG5pbXBvcnQgeyBDX0dvb2RzLCBKU09OX0dvb2RzIH0gICBmcm9tIFwiLi9DX0dvb2RzXCI7XHJcbmltcG9ydCB7IF9nZXRfdXVpZCB9ICAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuaW1wb3J0IHsgQ19Hb29kc0l0ZW0sIFRfR29vZHNLaW5kIH0gZnJvbSBcIi4vQ19Hb29kc0l0ZW1cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9HdWlsZCBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGlkPzogICAgICAgbnVtYmVyLFxyXG4gICAgdW5pcV9pZD86ICBzdHJpbmcsXHJcbiAgICBzYXZlX2lkPzogIG51bWJlcixcclxuICAgIG5hbWU/OiAgICAgc3RyaW5nLFxyXG4gICAgZ29vZHM/OiAgICBKU09OX0dvb2RzLFxyXG4gICAgaGVyb2VzPzogICBKU09OX0hlcm9bXSxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X2d1bGRfaW5mbyhhOiBKU09OX0d1aWxkfHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoXCJHdWlsZCBJbmZvOlwiIFxyXG4gICAgICAgICsgXCJcXG5pZDogICAgICAgXCIgKyAoYS5pZCAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG51bmlxX2lkOiAgXCIgKyAoYS51bmlxX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zYXZlX2lkOiAgXCIgKyAoYS5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5uYW1lOiAgICAgXCIgKyAoYS5uYW1lICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5nb29kczogICAgXCIgKyAoT2JqZWN0LmtleXMoYS5nb29kcz8/MCkubGVuZ3RoKVxyXG4gICAgICAgICsgXCJcXG5oZXJvZXM6ICAgXCIgKyAoYS5oZXJvZXM/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19HdWlsZCBpbXBsZW1lbnRzIElfTG9jYXRlLCBJX0pTT05fVW5pcSB7XHJcbiAgICBwcm90ZWN0ZWQgaWQ6ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIHVuaXFfaWQ6ICAgIHN0cmluZztcclxuICAgIHByb3RlY3RlZCBzYXZlX2lkOiAgICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgbmFtZTogICAgICAgc3RyaW5nO1xyXG4gICAgcHVibGljICAgIGdvbGQ6ICAgICAgIENfR29vZHNJdGVtO1xyXG4gICAgcHJvdGVjdGVkIGhlcm9lczogICAgIHtbdWlkOiBzdHJpbmddOiBDX0hlcm99O1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGE/OiBKU09OX0d1aWxkKSB7XHJcbiAgICAgICAgdGhpcy5pZCAgICAgICAgID0gLTE7XHJcbiAgICAgICAgdGhpcy51bmlxX2lkICAgID0gJ21haV9ndWxkIycgKyBfZ2V0X3V1aWQoKTtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgICAgPSAtMTtcclxuICAgICAgICB0aGlzLm5hbWUgICAgICAgPSAnJztcclxuICAgICAgICB0aGlzLmdvbGQgICAgICAgPSBuZXcgQ19Hb29kc0l0ZW0oe2draW5kOiBUX0dvb2RzS2luZC5Hb2xkLCB2YWx1ZTogMH0pO1xyXG4gICAgICAgIHRoaXMuaGVyb2VzICAgICA9IHt9O1xyXG4gICAgICAgIGlmIChhICE9PSB1bmRlZmluZWQpIHRoaXMuZGVjb2RlKGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1aWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudW5pcV9pZH1cclxuICAgIHB1YmxpYyBnZXRfbGNrZCgpOiBUX0xja2Qge3JldHVybiBUX0xja2QuTWF6ZX1cclxuICAgIHB1YmxpYyBnZXRfbmFtZSgpOiBzdHJpbmcge3JldHVybiB0aGlzLm5hbWV9XHJcbiAgICBcclxuICAgIHB1YmxpYyBocmVzKCk6ICBDX0hlcm9bXSB7XHJcbiAgICAgICAgY29uc3QgaHJlczogQ19IZXJvW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpaSBpbiB0aGlzLmhlcm9lcykgaHJlcy5wdXNoKHRoaXMuaGVyb2VzW2lpXSk7XHJcbiAgICAgICAgcmV0dXJuIGhyZXM7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIGNsZWFyX2hyZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZXJvZXMgPSB7fTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhZGRfaGVybyhoZXJvOiBDX0hlcm8pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlcm9lc1toZXJvLnVpZCgpXSA9IGhlcm87XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcm12X2hlcm8oaGVybzogQ19IZXJvKTogdm9pZCB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuaGVyb2VzW2hlcm8udWlkKCldO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fR3VpbGQge1xyXG4gICAgICAgIGNvbnN0IGpzb25faGVyb2VzOiBKU09OX0hlcm9bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGlpIGluIHRoaXMuaGVyb2VzKSBqc29uX2hlcm9lcy5wdXNoKHRoaXMuaGVyb2VzW2lpXS5lbmNvZGUoKSk7ICBcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6ICAgICAgdGhpcy5pZCxcclxuICAgICAgICAgICAgdW5pcV9pZDogdGhpcy51bmlxX2lkLFxyXG4gICAgICAgICAgICBzYXZlX2lkOiB0aGlzLnNhdmVfaWQsXHJcbiAgICAgICAgICAgIGdvbGQ6ICAgIHRoaXMuZ29sZC5lbmNvZGUoKSxcclxuICAgICAgICAgICAgaGVyb2VzOiAganNvbl9oZXJvZXMsXHJcbiAgICAgICAgICAgIG5hbWU6ICAgIHRoaXMubmFtZSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IEpTT05fR3VpbGR8dW5kZWZpbmVkKTogQ19HdWlsZCB7XHJcbiAgICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGEuaWQgICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5pZCAgICAgICAgID0gYS5pZDtcclxuICAgICAgICBpZiAoYS51bmlxX2lkICAhPT0gdW5kZWZpbmVkKSB0aGlzLnVuaXFfaWQgICAgPSBhLnVuaXFfaWQ7XHJcbiAgICAgICAgaWYgKGEuc2F2ZV9pZCAgIT09IHVuZGVmaW5lZCkgdGhpcy5zYXZlX2lkICAgID0gYS5zYXZlX2lkO1xyXG4gICAgICAgIGlmIChhLm5hbWUgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubmFtZSAgICAgICA9IGEubmFtZTtcclxuICAgICAgICBpZiAoYS5nb2xkICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmdvbGQuZGVjb2RlIChhLmdvbGQpO1xyXG5cclxuICAgICAgICBpZiAoYS5oZXJvZXMgIT09IHVuZGVmaW5lZCkgIHtcclxuICAgICAgICAgICAgdGhpcy5oZXJvZXMgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqc29uX2hlcm8gb2YgYS5oZXJvZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlcm8gPSBuZXcgQ19IZXJvKGpzb25faGVybyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlcm9lc1toZXJvLnVpZCgpXSA9IGhlcm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGVuY29kZV9hbGwoYWxsX2d1bGQ6IENfR3VpbGRbXSk6IEpTT05fR3VpbGRbXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX2d1bGRfZGF0YTogSlNPTl9HdWlsZFtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgZ3VsZCBvZiBhbGxfZ3VsZCkge1xyXG4gICAgICAgICAgICBhbGxfZ3VsZF9kYXRhLnB1c2goZ3VsZC5lbmNvZGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxfZ3VsZF9kYXRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBkZWNvZGVfYWxsKGFsbF9ndWxkX2RhdGE6IEpTT05fR3VpbGRbXSk6IENfR3VpbGRbXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX2d1bGQ6IENfR3VpbGRbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGd1bGRfZGF0YSBvZiBhbGxfZ3VsZF9kYXRhKSB7XHJcbiAgICAgICAgICAgIGFsbF9ndWxkLnB1c2goKG5ldyBDX0d1aWxkKCkpLmRlY29kZShndWxkX2RhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbF9ndWxkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWxlcnQoKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJHdWlsZCBJbmZvOlwiIFxyXG4gICAgICAgICAgICArIFwiXFxuaWQ6ICAgICAgIFwiICsgKHRoaXMuaWQgICAgICAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudW5pcV9pZDogIFwiICsgKHRoaXMudW5pcV9pZCAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2F2ZV9pZDogIFwiICsgKHRoaXMuc2F2ZV9pZCAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubmFtZTogICAgIFwiICsgKHRoaXMubmFtZSAgICAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuZ29sZDogICAgIFwiICsgKE9iamVjdC5rZXlzKHRoaXMuZ29sZD8/MCkubGVuZ3RoKVxyXG4gICAgICAgICAgICArIFwiXFxuaGVyb2VzOiAgIFwiICsgKHRoaXMuaGVyb2VzPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ19Hb29kcywgSlNPTl9Hb29kcyB9ICAgICAgICAgICAgIGZyb20gXCIuL0NfR29vZHNcIjtcclxuaW1wb3J0IHsgQ19IZXJvQWJpbGl0eSwgSlNPTl9IZXJvX0FiaWxpdHl9IGZyb20gXCIuL0NfSGVyb0FiaWxpdHlcIjtcclxuaW1wb3J0IHsgSV9KU09OX1VuaXEsICAgSlNPTl9BbnkgfSAgICAgICAgIGZyb20gXCIuL0NfU2F2ZURhdGFcIjtcclxuaW1wb3J0IHsgX2dldF91dWlkLCBfaXJhbmQsIF9yYW5kb21fc3RyIH0gIGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuaW1wb3J0IHsgQ19Hb29kc0l0ZW0sIEpTT05fR29vZHNJdGVtLCBUX0dvb2RzS2luZCB9IGZyb20gXCIuL0NfR29vZHNJdGVtXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fSGVybyBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGlkPzogICAgICAgIG51bWJlciwgXHJcbiAgICB1bmlxX2lkPzogICBzdHJpbmcsIFxyXG4gICAgc2F2ZV9pZD86ICAgbnVtYmVyLCBcclxuICAgIG5hbWU/OiAgICAgIHN0cmluZywgXHJcbiAgICBzZXg/OiAgICAgICBudW1iZXI7IFxyXG4gICAgYWdlPzogICAgICAgbnVtYmVyOyBcclxuICAgIGdvbGQ/OiAgICAgSlNPTl9Hb29kc0l0ZW07IFxyXG4gICAgc3RhdGU/OiAgICAgbnVtYmVyOyBcclxuICAgIGx2PzogICAgICAgIG51bWJlcjsgXHJcbiAgICB2YWw/OiAgICAgICBKU09OX0hlcm9fVmFsdWU7XHJcbiAgICBhYmlfcD86ICAgICAgIHtic2M/OiBKU09OX0hlcm9fQWJpbGl0eSwgdHRsPzogSlNPTl9IZXJvX0FiaWxpdHksIG5vdz86IEpTT05fSGVyb19BYmlsaXR5fTtcclxuICAgIGFiaV9tPzogICAgICAge2JzYz86IEpTT05fSGVyb19BYmlsaXR5LCB0dGw/OiBKU09OX0hlcm9fQWJpbGl0eSwgbm93PzogSlNPTl9IZXJvX0FiaWxpdHl9O1xyXG4gICAgaXNfYWxpdmU/OiAgc3RyaW5nfGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9IZXJvX1ZhbHVlIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgc2twPzoge3R0bDogbnVtYmVyLCAgbm93OiBudW1iZXJ9LCBcclxuICAgIGV4cD86IHt0dGw6IG51bWJlciwgIG5vdzogbnVtYmVyfSxcclxuICAgIG54ZT86IG51bWJlciwgICAgICAgICAgICAgICAgICAgLy8g5qyh5Zue44Gu44OS44O844Ot44O844Os44OZ44Or44Ki44OD44OX44Gr5b+F6KaB44Gq57WM6aiT5YCkXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9ocmVzX2luZm8oYTogKEpTT05fSGVyb3x1bmRlZmluZWQpW118dW5kZWZpbmVkKTogdm9pZCB7IFxyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoJ051bWJlciBvZiBIZXJvID0gJyArIGEubGVuZ3RoLnRvU3RyaW5nKCkpO1xyXG4gICAgZm9yICh2YXIgaSBpbiBhKSB7XHJcbiAgICAgICAgaWYgKGFbaV0gPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICAgICAgYWxlcnRfaGVyb19pbmZvKGFbaV0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfaGVyb19pbmZvKGE6IEpTT05fSGVyb3x1bmRlZmluZWQpOiB2b2lkIHsgXHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydChcIkhlcm8gSW5mbzpcXG5cIiBcclxuICAgICAgICArIFwiXFxuaWQ6ICAgICAgIFwiICAgICArIChhPy5pZCAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG51bmlxX2lkICAgXCIgICAgICsgKGE/LnVuaXFfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbm5hbWU6ICAgICBcIiAgICAgKyAoYT8ubmFtZSAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2F2ZV9pZDogIFwiICAgICArIChhPy5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5pc19hbGl2ZTogXCIgICAgICsgKGE/LmlzX2FsaXZlICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19IZXJvIGltcGxlbWVudHMgSV9KU09OX1VuaXEge1xyXG4gICAgcHJvdGVjdGVkIG15X2lkOiAgICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgbXlfbmFtZTogIHN0cmluZztcclxuICAgIHByb3RlY3RlZCB1bmlxX2lkOiAgc3RyaW5nOyBcclxuICAgIHByb3RlY3RlZCBzYXZlX2lkOiAgbnVtYmVyOyBcclxuICAgIHByb3RlY3RlZCBzZXg6ICAgICAgbnVtYmVyOyBcclxuICAgIHByb3RlY3RlZCBhZ2U6ICAgICAgbnVtYmVyOyBcclxuICAgIHByb3RlY3RlZCBzdGF0ZTogICAgbnVtYmVyOyBcclxuICAgIHByb3RlY3RlZCBsdjogICAgICAgbnVtYmVyOyBcclxuICAgIC8vIGJzYyhCYXNpYynjga/lvZPkurrjga7ln7rmnKzlgKTjgIJ0dGwoVG90YWwp44Gv6KOF5YKZ562J44KS5Yqg5rib566X44GX44Gf44KC44Gu44CCbm9344Gv44OQ44OV562J44Gu44K/44O844Oz5Yi244Gu44KC5Yqg5rib566X44GX44Gf44KC44GuXHJcbiAgICBwcm90ZWN0ZWQgZ29sZDogICAgQ19Hb29kc0l0ZW07IFxyXG4gICAgcHJvdGVjdGVkIHZhbDogICAgICBKU09OX0hlcm9fVmFsdWU7XHJcbiAgICBwcm90ZWN0ZWQgYWJpX3A6ICAgICAge2JzYzogQ19IZXJvQWJpbGl0eSwgdHRsOiBDX0hlcm9BYmlsaXR5LCBub3c6IENfSGVyb0FiaWxpdHl9O1xyXG4gICAgcHJvdGVjdGVkIGFiaV9tOiAgICAgIHtic2M6IENfSGVyb0FiaWxpdHksIHR0bDogQ19IZXJvQWJpbGl0eSwgbm93OiBDX0hlcm9BYmlsaXR5fTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgaXNfYWxpdmU6IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGE/OiBKU09OX0hlcm8pIHtcclxuICAgICAgICB0aGlzLm15X2lkICAgICAgPSAwO1xyXG4gICAgICAgIHRoaXMubXlfbmFtZSAgICA9ICdObyBOYW1lIEhlcm8nO1xyXG4gICAgICAgIHRoaXMudW5pcV9pZCAgICA9ICdtYWlfaGVybyMnICsgX2dldF91dWlkKCk7XHJcbiAgICAgICAgdGhpcy5zYXZlX2lkICAgID0gMDtcclxuICAgICAgICB0aGlzLnNleCAgICAgICAgPSAwOyBcclxuICAgICAgICB0aGlzLmFnZSAgICAgICAgPSAwOyBcclxuICAgICAgICB0aGlzLmdvbGQgICAgICA9IG5ldyBDX0dvb2RzSXRlbSh7Z2tpbmQ6IFRfR29vZHNLaW5kLkdvbGQsIHZhbHVlOiAwfSk7IFxyXG4gICAgICAgIHRoaXMuc3RhdGUgICAgICA9IDA7IFxyXG4gICAgICAgIHRoaXMubHYgICAgICAgICA9IDA7XHJcbiAgICAgICAgdGhpcy52YWwgICAgICAgID0ge307XHJcbiAgICAgICAgdGhpcy5hYmlfcCAgICAgID0ge2JzYzogbmV3IENfSGVyb0FiaWxpdHkoKSwgdHRsOiBuZXcgQ19IZXJvQWJpbGl0eSgpLCBub3c6IG5ldyBDX0hlcm9BYmlsaXR5KCl9O1xyXG4gICAgICAgIHRoaXMuYWJpX20gICAgICA9IHtic2M6IG5ldyBDX0hlcm9BYmlsaXR5KCksIHR0bDogbmV3IENfSGVyb0FiaWxpdHkoKSwgbm93OiBuZXcgQ19IZXJvQWJpbGl0eSgpfTtcclxuICAgICAgICB0aGlzLmlzX2FsaXZlICAgPSB0cnVlO1xyXG4gICAgICAgIGlmIChhICE9PSB1bmRlZmluZWQpIHRoaXMuZGVjb2RlKGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRfcHJwKGFyZyA6IEpTT05fSGVybykge1xyXG4gICAgICAgIHRoaXMuZGVjb2RlKGFyZyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3VuaXFfaWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudW5pcV9pZH1cclxuXHJcbiAgICBwdWJsaWMgaWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0hlcm9fJyArIHRoaXMubXlfaWQudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDUsICcwJyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdWlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnVuaXFfaWQ7fVxyXG4gICAgcHVibGljIG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5teV9uYW1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9uYW1lKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubXlfbmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9IZXJvIHtcclxuICAgICAgICBjb25zdCByZXQ6IEpTT05fSGVybyA9IHtcclxuICAgICAgICAgICAgaWQ6ICAgICAgICB0aGlzLm15X2lkLFxyXG4gICAgICAgICAgICB1bmlxX2lkOiAgIHRoaXMudW5pcV9pZCxcclxuICAgICAgICAgICAgbmFtZTogICAgICB0aGlzLm15X25hbWUsXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6ICAgdGhpcy5zYXZlX2lkLFxyXG4gICAgICAgICAgICBzZXg6ICAgICAgIHRoaXMuc2V4LCBcclxuICAgICAgICAgICAgYWdlOiAgICAgICB0aGlzLmFnZSwgXHJcbiAgICAgICAgICAgIHN0YXRlOiAgICAgdGhpcy5zdGF0ZSwgXHJcbiAgICAgICAgICAgIGx2OiAgICAgICAgdGhpcy5sdiwgXHJcbiAgICAgICAgICAgIGdvb2RzOiAgICAgdGhpcy5nb2xkLmVuY29kZSgpLCBcclxuICAgICAgICAgICAgdmFsOiAgICAgICB0aGlzLnZhbCxcclxuICAgICAgICAgICAgYWJpX3BfYnNjOiB0aGlzLmFiaV9wLmJzYy5lbmNvZGUoKSxcclxuICAgICAgICAgICAgYWJpX21fYnNjOiB0aGlzLmFiaV9tLmJzYy5lbmNvZGUoKSxcclxuICAgICAgICAgICAgaXNfYWxpdmU6ICh0aGlzLmlzX2FsaXZlKSA/ICdZJyA6ICdOJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IEpTT05fSGVyb3x1bmRlZmluZWQpOiBDX0hlcm8ge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChhLmlkICAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfaWQgICAgPSBhLmlkO1xyXG4gICAgICAgIGlmIChhLm5hbWUgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfbmFtZSAgPSBhLm5hbWU7XHJcbiAgICAgICAgaWYgKGEudW5pcV9pZCAgIT09IHVuZGVmaW5lZCkgdGhpcy51bmlxX2lkICA9IGEudW5pcV9pZDtcclxuICAgICAgICBpZiAoYS5zYXZlX2lkICAhPT0gdW5kZWZpbmVkKSB0aGlzLnNhdmVfaWQgID0gYS5zYXZlX2lkO1xyXG4gICAgICAgIGlmIChhLnNleCAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMuc2V4ICAgICAgPSBhLnNleDtcclxuICAgICAgICBpZiAoYS5hZ2UgICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmFnZSAgICAgID0gYS5hZ2U7XHJcbiAgICAgICAgaWYgKGEuc3RhdGUgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5zdGF0ZSAgICA9IGEuc3RhdGU7XHJcbiAgICAgICAgaWYgKGEubHYgICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5sdiAgICAgICA9IGEubHY7XHJcbiAgICAgICAgaWYgKGEuaXNfYWxpdmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGEuaXNfYWxpdmUgPT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzX2FsaXZlID0gYS5pc19hbGl2ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNfYWxpdmUgPSAoYS5pc19hbGl2ZSAhPSAnTicpID8gdHJ1ZTogZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEuZ29vZHMgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmdvbGQuZGVjb2RlKGEuZ29vZHMpO1xyXG4gICAgICAgIGlmIChhLnZhbCAgICAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9fZGVjb2RlX3ZhbCh0aGlzLnZhbCwgYS52YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYS5hYmlfcF9ic2MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFiaV9wLmJzYy5kZWNvZGUoYS5hYmlfcF9ic2MpO1xyXG4gICAgICAgICAgICAvLyDmmqvlrppcclxuICAgICAgICAgICAgdGhpcy5hYmlfcC50dGwgPSB0aGlzLmFiaV9wLm5vdyA9IHRoaXMuYWJpX3AuYnNjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYS5hYmlfbV9ic2MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFiaV9tLmJzYy5kZWNvZGUoYS5hYmlfbV9ic2MpO1xyXG4gICAgICAgICAgICAvLyDmmqvlrppcclxuICAgICAgICAgICAgdGhpcy5hYmlfbS50dGwgPSB0aGlzLmFiaV9tLm5vdyA9IHRoaXMuYWJpX20uYnNjO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX19kZWNvZGVfdmFsKGQ6IEpTT05fSGVyb19WYWx1ZSwgczogSlNPTl9IZXJvX1ZhbHVlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHMuc2twICE9PSB1bmRlZmluZWQpIGQuc2twID0gdGhpcy5fX2RlY29kZV9za2V4KGQuc2twLCBzLnNrcCk7XHJcbiAgICAgICAgaWYgKHMuZXhwICE9PSB1bmRlZmluZWQpIGQuZXhwID0gdGhpcy5fX2RlY29kZV9za2V4KGQuZXhwLCBzLmV4cCk7XHJcbiAgICAgICAgaWYgKHMubnhlICE9PSB1bmRlZmluZWQpIGQubnhlID0gcy5ueGU7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX19kZWNvZGVfc2tleChhOiB7dHRsPzogbnVtYmVyLCBub3c/OiBudW1iZXJ9IHwgdW5kZWZpbmVkLCBzOiB7dHRsPzogbnVtYmVyLCBub3c/OiBudW1iZXJ9KToge3R0bDogbnVtYmVyLCBub3c6IG51bWJlcn0ge1xyXG4gICAgICAgIHZhciBkOiB7dHRsOiBudW1iZXIsIG5vdzogbnVtYmVyfTtcclxuICAgICAgICBpZiAgICAgKGEgPT09IHVuZGVmaW5lZCkgZCA9IHt0dGw6IDAsIG5vdzogMH07XHJcbiAgICAgICAgZWxzZSAgICBkID0ge3R0bDogYT8udHRsID8/IDAsIG5vdzogYT8ubm93ID8/IDB9O1xyXG5cclxuICAgICAgICBkLnR0bCA9IHMudHRsID8/IGQudHRsO1xyXG4gICAgICAgIGQubm93ID0gcy5ub3cgPz8gcy50dGwgPz8gZC5ub3c7XHJcbiAgICAgICAgcmV0dXJuIGQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVfaGVybygpOiBDX0hlcm8ge1xyXG4gICAgICAgIGNvbnN0IG5ld19oZXJvID0gbmV3IENfSGVybygpO1xyXG4gICAgICAgIG5ld19oZXJvLnNldF9wcnAoe2lkOiAgICBNYXRoLmZsb29yKC0xMDAwLjAgKiBNYXRoLnJhbmRvbSgpKX0pO1xyXG4gICAgICAgIG5ld19oZXJvLnNldF9wcnAoe25hbWU6ICBuZXdfaGVyby5pZCgpfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld19oZXJvO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByYW5kb21fbWFrZSgpOiBDX0hlcm8ge1xyXG4gICAgICAgIHRoaXMubXlfaWQgICAgPSAwOyAvLyAtLUhlcm86OiRtYXhfaWQ7XHJcbiAgICAgICAgdGhpcy5teV9uYW1lICA9IFwi5YaS6Zm66ICFIFwiICsgX3JhbmRvbV9zdHIoNSk7XHJcbiAgICAgICAgdGhpcy5zZXggICAgICA9IF9pcmFuZCggMCwgICAgIDEpOyBcclxuICAgICAgICB0aGlzLmFnZSAgICAgID0gX2lyYW5kKCAxNSwgICAyNSk7IFxyXG4gICAgICAgIHRoaXMuc3RhdGUgICAgPSAwOyBcclxuICAgICAgICB0aGlzLmx2ICAgICAgID0gMDsgXHJcbiAgICAgICAgdGhpcy52YWwgICAgICA9IHtcclxuICAgICAgICAgICAgc2twOiB7dHRsOiAwLCBub3c6IDB9LCBcclxuICAgICAgICAgICAgZXhwOiB7dHRsOiAwLCBub3c6IDB9LFxyXG4gICAgICAgICAgICAnbnhlJzogMTAwMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZ29sZC5yYW5kb21fbWFrZShUX0dvb2RzS2luZC5Hb2xkKTsgXHJcblxyXG4gICAgICAgIGNvbnN0IGFiaV9wX2JzYyA9IHRoaXMuYWJpX3AuYnNjO1xyXG4gICAgICAgIGFiaV9wX2JzYy5yYW5kb21fbWFrZSgpO1xyXG4gICAgICAgIGFiaV9wX2JzYy5hZGRfeHBfYm9udXMoKHRoaXMuYWdlIC0gMTUpICogMTApO1xyXG4gICAgICAgIGFiaV9wX2JzYy5hZGRfZWxfYm9udXMoKHRoaXMuYWdlIC0gMTUpICogIDUpO1xyXG4gICAgICAgIGFiaV9wX2JzYy5hZGRfcHJfYm9udXMoKHRoaXMuYWdlIC0gMTUpICogIDIpO1xyXG4gICAgICAgIHRoaXMuYWJpX3AuYnNjID0gYWJpX3BfYnNjO1xyXG5cclxuICAgICAgICBjb25zdCBhYmlfbV9ic2MgPSB0aGlzLmFiaV9tLmJzYztcclxuICAgICAgICBhYmlfbV9ic2MucmFuZG9tX21ha2UoKTtcclxuICAgICAgICBhYmlfbV9ic2MuYWRkX3hwX2JvbnVzKCh0aGlzLmFnZSAtIDE1KSAqIDEwKTtcclxuICAgICAgICBhYmlfbV9ic2MuYWRkX2VsX2JvbnVzKCh0aGlzLmFnZSAtIDE1KSAqICA1KTtcclxuICAgICAgICBhYmlfbV9ic2MuYWRkX3ByX2JvbnVzKCh0aGlzLmFnZSAtIDE1KSAqICAyKTtcclxuICAgICAgICB0aGlzLmFiaV9tLmJzYyA9IGFiaV9tX2JzYztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBlbmNvZGVfaGVyb2VzKGhlcm9lczogQ19IZXJvW10pOiBKU09OX0hlcm9bXSB7XHJcbiAgICAgICAgY29uc3QgaGVyb2VzX2RhdGEgPSBbXSBhcyBKU09OX0hlcm9bXTtcclxuICAgICAgICBmb3IgKHZhciBoZXJvIG9mIGhlcm9lcykge1xyXG4gICAgICAgICAgICBoZXJvZXNfZGF0YS5wdXNoKGhlcm8uZW5jb2RlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGVyb2VzX2RhdGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZV9oZXJvZXMoaGVyb2VzX2RhdGE6IChKU09OX0hlcm98dW5kZWZpbmVkKVtdfHVuZGVmaW5lZCk6IENfSGVyb1tdIHtcclxuICAgICAgICBjb25zdCBoZXJvZXMgPSBbXSBhcyBDX0hlcm9bXTtcclxuICAgICAgICBpZiAoaGVyb2VzX2RhdGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBoZXJvX2RhdGEgb2YgaGVyb2VzX2RhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoZXJvX2RhdGEgIT09IHVuZGVmaW5lZCkgaGVyb2VzLnB1c2gobmV3IENfSGVybygpLmRlY29kZShoZXJvX2RhdGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGVyb2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHsgXHJcbiAgICAgICAgYWxlcnQoXCJIZXJvIEluZm86XFxuXCIgXHJcbiAgICAgICAgICAgICsgXCJcXG5pZDogICAgICAgXCIgICAgICsgKHRoaXMuaWQgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnVuaXFfaWQgICBcIiAgICAgKyAodGhpcy51bmlxX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubmFtZTogICAgIFwiICAgICArICh0aGlzLm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zYXZlX2lkOiAgXCIgICAgICsgKHRoaXMuc2F2ZV9pZCAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmlzX2FsaXZlOiBcIiAgICAgKyAodGhpcy5pc19hbGl2ZSAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBhbGVydF9ocmVzKGE6IChDX0hlcm98dW5kZWZpbmVkKVtdfHVuZGVmaW5lZCk6IHZvaWQgeyBcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgYWxlcnQoJ051bWJlciBvZiBIZXJvID0gJyArIGEubGVuZ3RoLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gYSkgYVtpXT8uYWxlcnQoKTtcclxuICAgIH1cclxufSIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgSV9KU09OLCBKU09OX0FueSB9IGZyb20gXCIuL0NfU2F2ZURhdGFcIjtcclxuaW1wb3J0IHsgX3JvdW5kIH0gICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX01hdGhcIjtcclxuaW1wb3J0IHsgX2lucmFuZCB9IGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuXHJcbi8vIOS4gOiIrOOBq+S9v+OBiOOCi+ODpuODvOODhuOCo+ODquODhuOCo+OBquWRquaWh1xyXG4vLyDjgqrjg5bjgrjjgqfjgq/jg4jjgpLliJfmjJnlnovjgajjgZfjgablnovljJbjgZnjgovjga7jgavliKnnlKhcclxudHlwZSBUX0hlcm9BYmlsaXR5ID0ge1trZXk6IHN0cmluZ106IG51bWJlcn07XHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9IZXJvX0FiaWxpdHkgZXh0ZW5kcyBKU09OX0FueSB7W2tleTogc3RyaW5nXTogbnVtYmVyfVxyXG5cclxuZXhwb3J0IGNsYXNzIENfSGVyb0FiaWxpdHkgaW1wbGVtZW50cyBJX0pTT04ge1xyXG4gICAgcHJvdGVjdGVkIHY6IFRfSGVyb0FiaWxpdHkgPSB7XHJcbiAgICAgICAgeHA6ICAwLCAgLy8gcDpIUOOAgW06TVBcclxuXHJcbiAgICAgICAgLy8g5Lul5LiL44CB5oim6ZeY6IO95Yqb44Gu5Z+65pys5YCkKHA654mp55CG44CBbTrprZTms5Up44CC44OS44O844Ot44O844Os44OZ44Or44KE44K544OG44O844K/44K544Ki44OD44OX44Gn5Yqg566XIFxyXG4gICAgICAgIGF0azogMCwgIC8vIOaUu+aSg+WApFxyXG4gICAgICAgIGRlZjogMCwgIC8vIOmYsuW+oeWApFxyXG4gICAgICAgIHF1YzogMCwgIC8vIOeerOeZuuWKm1xyXG4gICAgICAgIGNuYzogMCwgIC8vIOapn+mBi+WApCjjg4Hjg6Pjg7PjgrkpXHJcbiAgICBcclxuICAgICAgICAvLyDku6XkuIvjgIHjgYTjgo/jgobjgovjgrnjg4bjg7zjgr/jgrnjgILkuIroqJjjga7oqIjnrpfjgavlvbHpn7/jgILjg5Ljg7zjg63jg7zjg6zjg5njg6vjgoTjgrnjg4bjg7zjgr/jgrnjgqLjg4Pjg5fjgafliqDnrpdcclxuICAgICAgICBzdHI6IDAsICAvLyDmoLnmgKfjgILmlLvmkoMv6Ziy5b6h5Yqb44Gr44KC5b2x6Z+/44CCSFAvTVDlm57lvqnjgoTjgqLjgqTjg4bjg6Djga7mnIDlpKfmiYDmjIHph43ph4/jgavjg5zjg7zjg4rjgrlcclxuICAgICAgICBwd3I6IDAsICAvLyDln7rmnKznmoTlvLfjgZXjgILmlLvmkoPlipvjgavlvbHpn79cclxuICAgICAgICB2aXQ6IDAsICAvLyDogJDkuYXlipvjgIJIUC9NUOOBruacgOWkp+WApOOChOmYsuW+oeWKm+OBq+W9semfv+OCkuS4juOBiOOCi1xyXG4gICAgICAgIGRleDogMCwgIC8vIOWZqOeUqOOBleOAguWRveS4reeOh+OBq+W9semfv+OCkuS4juOBiOOCi+OAgumjm+OBs+mBk+WFt+OChOmVt+i3nemboumtlOazleOBp+OBr+eJueOBq+W9semfv+OAgue9oOino+mZpOOBq+OCguW9semfv1xyXG4gICAgICAgIGFnaTogMCwgIC8vIOe0oOaXqeOBleOAguihjOWLlemAn+W6puOChOWbnumBv+eOh+OBq+W9semfv+OCkuS4juOBiOOCi+OAguWRveS4reeOh+OBq+OCguW9semfv1xyXG4gICAgICAgIHRlYzogMCwgIC8vIOaKgOihk+WKm+OAgue1jOmok+OBp+WQkeS4iuOBl+OBpuiDveWKm+WApChxdWMvY25jKeOBq+ODnOODvOODiuOCueOCkuS4juOBiOOCi1xyXG4gICAgICAgIGx1azogMCwgIC8vIOW5uOmBi+WApOOAgmNuY+OBq+Wkp+OBjeOBj+W9semfv+OBmeOCi1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYT86IEpTT05fSGVyb19BYmlsaXR5KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaWR4IGluIHRoaXMudikge3RoaXMudltpZHhdID0gMDt9XHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoYSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BycChhOiBKU09OX0hlcm9fQWJpbGl0eSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGVjb2RlKGEpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldChrZXk6IHN0cmluZyk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKCEoa2V5IGluIHRoaXMudikpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudltrZXldO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldChrZXk6IHN0cmluZywgczogSlNPTl9IZXJvX0FiaWxpdHkpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICghKGtleSBpbiB0aGlzLnYpKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMudltrZXldID0gc1trZXldO1xyXG4gICAgICAgIHJldHVybiBzW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHhwX3R0bGFkZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBfcm91bmQoTWF0aC5mbG9vcih0aGlzLnYuc3RyICsgdGhpcy52LnZpdCAqIDEwLjApLCAwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhdGtfdHRsYWRkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIF9yb3VuZChNYXRoLmZsb29yKHRoaXMudi5zdHIgKyB0aGlzLnYucHdyICsgdGhpcy52LnRlYykgLyAxMC4wLCAwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWZfdHRsYWRkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIF9yb3VuZChNYXRoLmZsb29yKHRoaXMudi5zdHIgKyB0aGlzLnYudml0ICsgdGhpcy52LnRlYykgLyAxMC4wLCAwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBxdWNfdHRsYWRkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIF9yb3VuZChNYXRoLmZsb29yKHRoaXMudi5hZ2kgKyB0aGlzLnYubHVrICsgdGhpcy52LnRlYykgLyAxMC4wLCAwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjbmNfdHRsYWRkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIF9yb3VuZChNYXRoLmZsb29yKDIuMCAqIHRoaXMudi5sdWsgKyB0aGlzLnYudGVjKSAvIDEwLjAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBib251cyhrZXkgOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICghKGtleSBpbiB0aGlzLnYpKSByZXR1cm4gMDtcclxuICAgICAgICBpZiAoa2V5ID09PSAneHAnKSByZXR1cm4gX3JvdW5kKE1hdGguZmxvb3IodGhpcy52LnhwIC8gMTAwKSwgMCk7XHJcbiAgICAgICAgcmV0dXJuIF9yb3VuZChNYXRoLmZsb29yKHRoaXMudltrZXldIC8gMTAuMCksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQoYTogSlNPTl9IZXJvX0FiaWxpdHkpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYSkge1xyXG4gICAgICAgICAgICB0aGlzLnZba2V5XSArPSBhW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICBwdWJsaWMgYWRkX3hwX2JvbnVzKGJvbnVzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnYueHAgICs9ICBib251cztcclxuICAgIH1cclxuICAgIHB1YmxpYyBhZGRfZWxfYm9udXMoYm9udXM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudi5hdGsgKz0gIGJvbnVzO1xyXG4gICAgICAgIHRoaXMudi5kZWYgKz0gIGJvbnVzO1xyXG4gICAgICAgIHRoaXMudi5xdWMgKz0gIGJvbnVzO1xyXG4gICAgICAgIHRoaXMudi5jbmMgKz0gIGJvbnVzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFkZF9wcl9ib251cyhib251czogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52LnN0ciArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LnB3ciArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LnZpdCArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LmRleCArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LmFnaSArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LnRlYyArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52Lmx1ayArPSAgYm9udXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJhbmRvbV9tYWtlKCk6IENfSGVyb0FiaWxpdHkge1xyXG4gICAgICAgIHRoaXMudi54cCAgPSAgX2lucmFuZCgwLCAxMDAwLCAzLjApO1xyXG5cclxuICAgICAgICB0aGlzLnYuYXRrID0gIF9pbnJhbmQoMCwgIDEwMCwgMi41KTtcclxuICAgICAgICB0aGlzLnYuZGVmID0gIF9pbnJhbmQoMCwgIDEwMCwgMi41KTtcclxuICAgICAgICB0aGlzLnYucXVjID0gIF9pbnJhbmQoMCwgIDEwMCwgMi41KTtcclxuICAgICAgICB0aGlzLnYuY25jID0gIF9pbnJhbmQoMCwgIDEwMCwgMi41KTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMudi5zdHIgPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG4gICAgICAgIHRoaXMudi5wd3IgPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG4gICAgICAgIHRoaXMudi52aXQgPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG4gICAgICAgIHRoaXMudi5kZXggPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG4gICAgICAgIHRoaXMudi5hZ2kgPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG4gICAgICAgIHRoaXMudi50ZWMgPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG4gICAgICAgIHRoaXMudi5sdWsgPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fSGVyb19BYmlsaXR5IHtcclxuICAgICAgICBjb25zdCBhOiBKU09OX0hlcm9fQWJpbGl0eSA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnYpIGFba2V5XSA9IHRoaXMudltrZXldO1xyXG4gICAgICAgIHJldHVybiBhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX0hlcm9fQWJpbGl0eSk6IENfSGVyb0FiaWxpdHkge1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgaW4gdGhpcy52ICYmIGFba2V5XSAhPT0gdW5kZWZpbmVkKSB0aGlzLnZba2V5XSA9IGFba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjbG9uZShzOiBDX0hlcm9BYmlsaXR5KTogQ19IZXJvQWJpbGl0eSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX0hlcm9BYmlsaXR5KHMuZW5jb2RlKCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX1BvaW50IH0gICAgICAgICAgICAgICAgICAgZnJvbSAnLi9DX1BvaW50JztcclxuaW1wb3J0IHsgQ19Qb2ludERpciwgSlNPTl9Qb2ludERpciB9IGZyb20gJy4vQ19Qb2ludERpcic7XHJcbmltcG9ydCB7IFRfRGlyZWN0aW9uIH0gICAgICAgICAgICAgICBmcm9tICcuL0NfUG9pbnREaXInO1xyXG5pbXBvcnQgeyBJX0pTT04sIEpTT05fQW55IH0gICAgICAgICAgZnJvbSAnLi9DX1NhdmVEYXRhJztcclxuaW1wb3J0IHsgVF9NYWtlRW51bVR5cGUgfSAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9UX01ha2VFbnVtVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRfTGNrZDp7W2xja2Q6IHN0cmluZ106IG51bWJlcn0gID0ge1xyXG4gICAgVW5rbjogMCxcclxuICAgIE1hemU6IDEsXHJcbiAgICBHdWxkOiAyLFxyXG59IGFzIGNvbnN0O1xyXG5leHBvcnQgdHlwZSBUX0xja2QgICA9IFRfTWFrZUVudW1UeXBlPHR5cGVvZiBUX0xja2Q+O1xyXG5cclxuZnVuY3Rpb24gX2xja2Rfa2V5KGxja2Q6IFRfTGNrZCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoVF9MY2tkKS5maW5kKGtleSA9PiBUX0xja2Rba2V5XSA9PT0gbGNrZCkgPz8gXCI/Pz8/XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9Mb2NhdGlvbiBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGtpbmQ/OiAgICBzdHJpbmcsXHJcbiAgICBuYW1lPzogICAgc3RyaW5nLFxyXG4gICAgbG9jX3VpZD86IHN0cmluZyxcclxuICAgIGxvY19wb3M/OiBKU09OX1BvaW50RGlyLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElfTG9jYXRlIHtcclxuICAgIHVpZDogICAgICAoKT0+c3RyaW5nO1xyXG4gICAgZ2V0X2xja2Q6ICgpPT5UX0xja2Q7XHJcbiAgICBnZXRfbmFtZTogKCk9PnN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfTG9jYXRpb24gaW1wbGVtZW50cyBJX0pTT04ge1xyXG4gICAgcHJvdGVjdGVkIGxvY19raW5kOiBUX0xja2QgPSBUX0xja2QuVW5rbjtcclxuICAgIHByb3RlY3RlZCBsb2NfbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBwcm90ZWN0ZWQgbG9jX3VpZDogIHN0cmluZyA9ICcnO1xyXG4gICAgcHJvdGVjdGVkIGxvY19wb3M6ICBDX1BvaW50RGlyID0gbmV3IENfUG9pbnREaXIoKTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoanNvbj86IEpTT05fTG9jYXRpb24pIHtcclxuICAgICAgICBpZiAoanNvbiAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShqc29uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X2xja2Rfc3RyKCk6IHN0cmluZyAge3JldHVybiBfbGNrZF9rZXkodGhpcy5sb2Nfa2luZCk7fVxyXG4gICAgcHVibGljIGdldF9sY2tkKCk6IFRfTGNrZCAgICAgIHtyZXR1cm4gdGhpcy5sb2Nfa2luZDt9XHJcbiAgICBwdWJsaWMgZ2V0X25hbWUoKTogc3RyaW5nICAgICAge3JldHVybiB0aGlzLmxvY19uYW1lO31cclxuICAgIHB1YmxpYyBnZXRfdWlkKCk6ICBzdHJpbmcgICAgICB7cmV0dXJuIHRoaXMubG9jX3VpZDt9XHJcblxyXG4gICAgcHVibGljIHNldF9sY2tkKGxja2Q6IFRfTGNrZCk6IENfTG9jYXRpb258dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAoIShfbGNrZF9rZXkobGNrZCkgaW4gVF9MY2tkKSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmxvY19raW5kID0gbGNrZDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfbmFtZShuYW1lOiBzdHJpbmcpOiAgIHZvaWQge3RoaXMubG9jX25hbWUgPSBuYW1lO31cclxuICAgIHB1YmxpYyBzZXRfdWlkICh1aWQ6IHN0cmluZyk6ICAgIHZvaWQge3RoaXMubG9jX3VpZCAgPSB1aWQ7fVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc2V0X2xja2Rfc3RyKGxja2Q6IHN0cmluZyk6IENfTG9jYXRpb258dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAoIShsY2tkIGluIFRfTGNrZCkpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5sb2Nfa2luZCA9IFRfTGNrZFtsY2tkXTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldF9wKCk6IENfUG9pbnQgICAgIHtcclxuLy8gICAgICAgIGlmICh0aGlzLmxvY19raW5kICE9IFRfTGNrZC5NYXplKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY19wb3MuZ2V0X3AoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfZCgpOiBUX0RpcmVjdGlvbiB7XHJcbi8vICAgICAgICBpZiAodGhpcy5sb2Nfa2luZCAhPSBUX0xja2QuTWF6ZSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NfcG9zLmdldF9kKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BkKCk6IENfUG9pbnREaXIge1xyXG4vLyAgICAgICAgaWYgKHRoaXMubG9jX2tpbmQgIT0gVF9MY2tkLk1hemUpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jX3Bvcy5nZXRfcGQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0X3AgICAocDogQ19Qb2ludERpcik6IENfUG9pbnREaXJ8dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAodGhpcy5sb2Nfa2luZCAhPT0gVF9MY2tkLk1hemUpICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAodGhpcy5sb2NfcG9zLnNldF9wKHApID09PSB1bmRlZmluZWQpICByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NfcG9zO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9kICAgKGQ6IFRfRGlyZWN0aW9uKTogVF9EaXJlY3Rpb258dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAodGhpcy5sb2Nfa2luZCAhPT0gVF9MY2tkLk1hemUpICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAodGhpcy5sb2NfcG9zLnNldF9kKGQpID09PSB1bmRlZmluZWQpICByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NfcG9zLmQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BkICAocGQ6IENfUG9pbnREaXIpOiBDX1BvaW50RGlyfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jX2tpbmQgIT09IFRfTGNrZC5NYXplKSAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICh0aGlzLmxvY19wb3Muc2V0X3BkKHBkKSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NfcG9zO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTG9jYXRpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGtpbmQ6ICAgICBfbGNrZF9rZXkodGhpcy5sb2Nfa2luZCksXHJcbiAgICAgICAgICAgIG5hbWU6ICAgICB0aGlzLmxvY19uYW1lLFxyXG4gICAgICAgICAgICBsb2NfdWlkOiAgdGhpcy5sb2NfdWlkLFxyXG4gICAgICAgICAgICBsb2NfcG9zOiAgdGhpcy5sb2NfcG9zLmVuY29kZSgpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo/OiBKU09OX0xvY2F0aW9uKTogQ19Mb2NhdGlvbiB7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKGoua2luZCA9PT0gdW5kZWZpbmVkIHx8ICEoai5raW5kIGluIFRfTGNrZCkpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoai5raW5kICAgICE9PSB1bmRlZmluZWQpIHRoaXMubG9jX2tpbmQgPSBUX0xja2Rbai5raW5kXTtcclxuICAgICAgICBpZiAoai5uYW1lICAgICE9PSB1bmRlZmluZWQpIHRoaXMubG9jX25hbWUgPSBqLm5hbWU7XHJcbiAgICAgICAgaWYgKGoubG9jX3VpZCAhPT0gdW5kZWZpbmVkKSB0aGlzLmxvY191aWQgID0gai5sb2NfdWlkO1xyXG4gICAgICAgIGlmIChqLmxvY19wb3MgIT09IHVuZGVmaW5lZCkgdGhpcy5sb2NfcG9zLmRlY29kZShqLmxvY19wb3MpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IFRfTXpLaW5kIH0gICAgICAgICAgICAgIGZyb20gXCIuL1RfTXpLaW5kXCI7XHJcbmltcG9ydCB7IENfTWF6ZUNlbGwgfSAgICAgICAgICAgIGZyb20gXCIuL0NfTWF6ZUNlbGxcIjtcclxuaW1wb3J0IHsgQ19NYXplT2JqLCBJX01hemVPYmosIEpTT05fTWF6ZU9iaiB9IGZyb20gXCIuL0NfTWF6ZU9ialwiO1xyXG5pbXBvcnQgeyBDX1BvaW50IH0gICAgICAgICAgICAgICBmcm9tIFwiLi9DX1BvaW50XCI7XHJcbmltcG9ydCB7IElfTG9jYXRlLCBUX0xja2QgfSAgICAgIGZyb20gXCIuL0NfTG9jYXRpb25cIjtcclxuaW1wb3J0IHsgQ19SYW5nZSB9ICAgICAgICAgICAgICAgZnJvbSBcIi4vQ19SYW5nZVwiO1xyXG5pbXBvcnQgeyBDX1RlYW0sIEpTT05fVGVhbSB9ICAgICBmcm9tIFwiLi9DX1RlYW1cIjtcclxuaW1wb3J0IHsgSV9KU09OX1VuaXEsIEpTT05fQW55IH0gZnJvbSBcIi4vQ19TYXZlRGF0YVwiO1xyXG5pbXBvcnQgeyBfZ2V0X3V1aWQsIF9pZ3JhbmQsIF9pcmFuZCB9ICAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuaW1wb3J0IHsgX21pbiB9IGZyb20gXCIuLi9kX3V0bC9GX01hdGhcIjtcclxuaW1wb3J0IHsgQ19Qb2ludERpciB9IGZyb20gXCIuL0NfUG9pbnREaXJcIjtcclxuaW1wb3J0IHsgVF9EaXJlY3Rpb24gfSBmcm9tIFwiLi9UX0RpcmVjdGlvblwiO1xyXG5pbXBvcnQgeyBDX1BvaW50TGluazJELCBDX1BvaW50U2V0MkQgfSBmcm9tIFwiLi9DX1BvaW50U2V0MkRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9NYXplIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgaWQ/OiAgICAgIG51bWJlcixcclxuICAgIHVuaXFfaWQ/OiBzdHJpbmcsXHJcbiAgICBzYXZlX2lkPzogbnVtYmVyLFxyXG4gICAgZmxvb3I/OiAgIG51bWJlcixcclxuICAgIG5hbWU/OiAgICBzdHJpbmcsXHJcbiAgICBzaXplX3g/OiAgbnVtYmVyLFxyXG4gICAgc2l6ZV95PzogIG51bWJlcixcclxuICAgIHNpemVfej86ICBudW1iZXIsXHJcbiAgICBtYXplPzogICAgc3RyaW5nLCBcclxuICAgIG1hc2s/OiAgICBzdHJpbmcsIFxyXG4gICAgbXl0ZWFtPzogIEpTT05fVGVhbSwgXHJcbiAgICBvYmpzPzogICAgSlNPTl9NYXplT2JqW10sXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfbWF6ZV9pbmZvKGE6IEpTT05fTWF6ZXx1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICBhbGVydChcIk1hemUgSW5mbzpcIlxyXG4gICAgICAgICsgXCJcXG5tYXplIGlkIDpcIiArIChhLmlkICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5mbG9vcjogXCIgICArIChhLmZsb29yICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG51bmlxIGlkIDpcIiArIChhLnVuaXFfaWQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zYXZlIGlkIDpcIiArIChhLnNhdmVfaWQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5uYW1lOiAgIFwiICArIChhLm5hbWUgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3g6IFwiICArIChhLnNpemVfeCAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3k6IFwiICArIChhLnNpemVfeSAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3o6IFwiICArIChhLnNpemVfeiAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJtYXplOlxcblwiICAgICArIChhLm1hemUgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJtYXNrOlxcblwiICAgICArIChhLm1hc2sgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbnR5cGUgX2luaXRfYXJnID0ge1xyXG4gICAgbWF6ZV9pZD86IG51bWJlcixcclxuICAgIHNhdmVfaWQ/OiBudW1iZXIsXHJcbiAgICBmbG9vcj86ICAgbnVtYmVyLFxyXG4gICAgbmFtZT86ICAgIHN0cmluZyxcclxuICAgIHNpemVfeD86ICBudW1iZXIsXHJcbiAgICBzaXplX3k/OiAgbnVtYmVyLFxyXG4gICAgc2l6ZV96PzogIG51bWJlcixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfTWF6ZSBpbXBsZW1lbnRzIElfTG9jYXRlLCBJX0pTT05fVW5pcSB7XHJcbiAgICBwcm90ZWN0ZWQgbWF6ZV9pZDogIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCB1bmlxX2lkOiAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHNhdmVfaWQ6ICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgZmxvb3I6ICAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBuYW1lOiAgICAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIG15X2xheWVyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJvdGVjdGVkIHNpemU6ICAgICBDX1JhbmdlO1xyXG4gICAgcHJvdGVjdGVkIGNlbGxzOiAgICBDX01hemVDZWxsW11bXVtdO1xyXG4gICAgcHJvdGVjdGVkIG1hc2tzOiAgICBib29sZWFuW11bXVtdO1xyXG4gICAgcHJvdGVjdGVkIHVuY2xlYXI6ICBudW1iZXJbXTtcclxuICAgIHByb3RlY3RlZCBvYmpzOiAgICAge1t1aWQ6IHN0cmluZ106IElfTWF6ZU9ian07XHJcbiAgICBwcm90ZWN0ZWQgbnVtX29mX3Jvb206ICAgICAgbnVtYmVyID0gNTsgLyog44Op44Oz44OA44Og55Sf5oiQ44Gu6Zqb44Gu6YOo5bGL44Gu5pWw44Gu5pyA5aSn5pWwICovXHJcbiAgICBwcm90ZWN0ZWQgbWF4X3NpemVfb2Zfcm9vbTogbnVtYmVyID0gMzsgLyog44Op44Oz44OA44Og55Sf5oiQ44Gu6Zqb44Gu6YOo5bGL44Gu5aSn44GN44GVICovXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGE/OiBfaW5pdF9hcmcpIHtcclxuICAgICAgICB0aGlzLm1hemVfaWQgPSAtMTtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgPSAtMTtcclxuICAgICAgICB0aGlzLnVuaXFfaWQgPSAnbWFpX21hemUjJyArIF9nZXRfdXVpZCgpO1xyXG4gICAgICAgIHRoaXMuZmxvb3IgICA9IDA7XHJcbiAgICAgICAgdGhpcy5uYW1lICAgID0gJyc7XHJcbiAgICAgICAgdGhpcy5zaXplICAgID0gbmV3IENfUmFuZ2UoXHJcbiAgICAgICAgICAgIG5ldyBDX1BvaW50KDAsIDAsIDApLCBcclxuICAgICAgICAgICAgbmV3IENfUG9pbnQoMiwgMiwgMikpO1xyXG4gICAgICAgIHRoaXMuY2VsbHMgICA9IHRoaXMuX19pbml0X21hemUoVF9NektpbmQuU3RvbmUpO1xyXG5cclxuICAgICAgICB0aGlzLm1hc2tzICAgPSB0aGlzLl9faW5pdF9tYXNrKHRydWUpO1xyXG4gICAgICAgIHRoaXMudW5jbGVhciA9IFtdO1xyXG4gICAgICAgIHRoaXMuX19pbml0X3VuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5vYmpzICAgID0ge307XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9faW5pdF9tYXplKGtpbmQ6IFRfTXpLaW5kID0gVF9NektpbmQuU3RvbmUpOiBDX01hemVDZWxsW11bXVtdIHtcclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeiA9IHRoaXMuc2l6ZS5zaXplX3ooKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2VsbHM6IENfTWF6ZUNlbGxbXVtdW10gPSBBcnJheShzaXplX3opIGFzIENfTWF6ZUNlbGxbXVtdW107XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBzaXplX3o7IHorKykge1xyXG4gICAgICAgICAgICBjZWxsc1t6XSA9IEFycmF5KHNpemVfeSkgYXMgQ19NYXplQ2VsbFtdW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGNlbGxzW3pdW3ldICA9IEFycmF5KHNpemVfeCkgYXMgQ19NYXplQ2VsbFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxzW3pdW3ldW3hdID0gQ19NYXplQ2VsbC5uZXdPYmooe2tpbmQ6a2luZCwgcG9zOiB7eDp4LCB5OnksIHo6en19KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2VsbHM7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX19pbml0X21hc2soWU46IGJvb2xlYW4pOiBib29sZWFuW11bXVtdIHtcclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeiA9IHRoaXMuc2l6ZS5zaXplX3ooKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXNrcyAgID0gQXJyYXkoc2l6ZV96KSBhcyBib29sZWFuW11bXVtdO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgdGhpcy5tYXNrc1t6XSA9IEFycmF5KHNpemVfeSkgYXMgYm9vbGVhbltdW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFza3Nbel1beV0gID0gQXJyYXkoc2l6ZV94KSBhcyBib29sZWFuW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrc1t6XVt5XVt4XSA9IFlOO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLm1hc2tzO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9faW5pdF91bmNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgICAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV96ID0gdGhpcy5zaXplLnNpemVfeigpO1xyXG5cclxuICAgICAgICB0aGlzLnVuY2xlYXIgPSBBcnJheShzaXplX3opO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgdGhpcy51bmNsZWFyW3pdPTA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXNrc1t6XVt5XVt4XSkgdGhpcy51bmNsZWFyW3pdKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHVpZCgpOiBzdHJpbmcgICAgICB7cmV0dXJuIHRoaXMudW5pcV9pZH1cclxuICAgIHB1YmxpYyBnZXRfbGNrZCgpOiBUX0xja2Qge3JldHVybiBUX0xja2QuTWF6ZX1cclxuICAgIHB1YmxpYyBnZXRfbmFtZSgpOiBzdHJpbmcge3JldHVybiB0aGlzLm5hbWV9XHJcblxyXG4gICAgcHVibGljIHdpdGhpbihwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZS53aXRoaW4ocCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIOODoeOCpOOCuuWGheOBruOCquODluOCuOOCp+OCr+ODiOOChOODouODs+OCueOCv+ODvOetieOBrumFjee9rlxyXG4gICAgcHVibGljIGFkZF9vYmoob2JqOiBJX01hemVPYmopOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9ianNbb2JqLnVpZCgpXSA9IG9iajtcclxuICAgIH1cclxuICAgIHB1YmxpYyBybXZfb2JqKG9iajogSV9NYXplT2JqKTogdm9pZCB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMub2Jqc1tvYmoudWlkKCldO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9vYmpfeHl6KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpOiBJX01hemVPYmp8bnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0X29iaihuZXcgQ19Qb2ludCh4LCB5LCB6KSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X29iaihwOiBDX1BvaW50KTogSV9NYXplT2JqfG51bGwge1xyXG4gICAgICAgIHZhciBsYXllciA9IC0xO1xyXG4gICAgICAgIHZhciBvYmo6IElfTWF6ZU9ianxudWxsICAgPSBudWxsO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGlkIGluIHRoaXMub2Jqcykge1xyXG4gICAgICAgICAgICBjb25zdCBleGlzdCA9IHRoaXMub2Jqc1tpZF07XHJcblxyXG4gICAgICAgICAgICBpZiAoZXhpc3QudmlldygpID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoZXhpc3Qud2l0aGluKHApICYmIGV4aXN0LnZpZXcoKT8ubGV0dGVyKCkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChleGlzdC52aWV3KCk/LmxheWVyKCk/Py05OSA+IGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXIgPSBleGlzdC52aWV3KCk/LmxheWVyKCk/Py05OTtcclxuICAgICAgICAgICAgICAgICAgICBvYmogICA9IGV4aXN0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGV4aXN0X29iaihwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpZCBpbiB0aGlzLm9ianMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3QgPSB0aGlzLm9ianNbaWRdO1xyXG4gICAgICAgICAgICBpZiAoZXhpc3Qud2l0aGluKHApICYmIGV4aXN0LnZpZXcoKT8ubGV0dGVyKCkgIT09IG51bGwpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGVhbeOBjOadpeOBn+ODneOCpOODs+ODiOOBjOacqui4j+WcsOOBoOOBo+OBn+OCieOBn+OBoOOBruW6iuOBq+WkieOBiOOCi1xyXG4gICAgcHVibGljIGNoYW5nZV91bmV4cF90b19mbG9vcihwOiBDX1BvaW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0X2tpbmQocCkgPT0gVF9NektpbmQuVW5leHApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRfY2VsbChwLCBUX016S2luZC5GbG9vcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIDJE44Oe44OD44OX44Gu44Oe44K544Kv5aSW44GX6Zai6YCjXHJcbiAgICBwdWJsaWMgY2xlYXJfbWFza19hcm91bmRfdGhlX3RlYW0odGVhbTogQ19UZWFtKTogdm9pZCB7XHJcbiAgICAgICAgLy8g54++5Zyo5Zyw44Go55yf5qiq44Gv6Ieq5YuV55qE44Gr6KaL44GI44KLXHJcbiAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZCgwLCAtMSkpO1xyXG4gICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoMCwgIDApKTtcclxuICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayh0ZWFtLndhbGsoKS5nZXRfYXJvdW5kKDAsICAxKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlcHRoICAgPSAgNTsgLy8gMkTjg57jg4Pjg5fnlKjjga7lpaXooYzjgY3pmZDnlYxcclxuXHJcbiAgICAgICAgLy8g5YmN5pa544Gu6KaL6YCa44GX44KS44OB44Kn44OD44Kv44GX44Gq44GM44KJ6KaL44GI44KL44Go44GT44KN44Gv6Kej5pS+44GZ44KLXHJcbiAgICAgICAgZm9yICh2YXIgZCA9IDE7IGQgPCBkZXB0aDsgZCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyb250X3BvcyA9IHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgMClcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNfbW92YWJsZShmcm9udF9wb3MpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmraPpnaLjgavpmpzlrrPnianjgYznhKHjgZHjgozjgbDjgIHjgZ3jga7kuKHlgbTjgoLopovjgYjjgotcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgLTEpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgIDApKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgIDEpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOato+mdouOBjOmanOWus+eJqeOBp+OCguOBneOBruaJi+WJjeOBvuOBp+imi+OBiOOBpuOBn+OBquOCieOAgeOBneOBruWjgeOBqOS4oeWBtOOBr+imi+OBiOOCi1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAtMSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAgMCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAgMSkpO1xyXG4gICAgICAgICAgICAgICAgLy8g5q2j6Z2i44Gr6Zqc5a6z54mp44GM5pyJ44Gj44Gf44KJ44Gd44Gu5aWl44Gv6KaL44GI44Gq44GE44Gu44Gn5o6i57Si57WC5LqGXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2NsZWFyX21hc2soY2xyX3BvczogQ19Qb2ludCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5zaXplLndpdGhpbihjbHJfcG9zKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tYXNrc1tjbHJfcG9zLnpdW2Nscl9wb3MueV1bY2xyX3Bvcy54XSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hc2tzW2Nscl9wb3Muel1bY2xyX3Bvcy55XVtjbHJfcG9zLnhdID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudW5jbGVhcltjbHJfcG9zLnpdLS07ICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc19jbGVhcmVkKGNscl9wb3M6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51bmNsZWFyW2Nscl9wb3Muel0gPCAxO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc19tYXNrZWQocDogQ19Qb2ludCk6IGJvb2xlYW4ge3JldHVybiB0aGlzLmlzX21hc2tlZF94eXoocC54LCBwLnksIHAueil9XHJcbiAgICBwdWJsaWMgaXNfbWFza2VkX3h5eih4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFza3Nbel1beV1beF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzX21vdmFibGUocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghdGhpcy5zaXplLndpdGhpbihwKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5nZXRfa2luZChwKSkge1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLkZsb29yOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlVuZXhwOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVwOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0ckRuOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVEOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gICAgXHJcblxyXG4gICAgcHVibGljIGdldF94X21heCgpOiBudW1iZXIge3JldHVybiB0aGlzLnNpemUuc2l6ZV94KCk7fVxyXG4gICAgcHVibGljIGdldF95X21heCgpOiBudW1iZXIge3JldHVybiB0aGlzLnNpemUuc2l6ZV95KCk7fVxyXG4gICAgcHVibGljIGdldF96X21heCgpOiBudW1iZXIge3JldHVybiB0aGlzLnNpemUuc2l6ZV96KCk7fVxyXG4gICAgcHVibGljIGdldF9raW5kIChwOiBDX1BvaW50KTogVF9NektpbmQge1xyXG4gICAgICAgIGlmICh0aGlzLnNpemUud2l0aGluKHApKSByZXR1cm4gdGhpcy5jZWxsc1twLnpdW3AueV1bcC54XS5nZXRLaW5kKCk7XHJcbiAgICAgICAgcmV0dXJuIFRfTXpLaW5kLk5vRGVmO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9raW5kX3h5eiAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcik6IFRfTXpLaW5kIHtcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbih4LCB5LCB6KSkgcmV0dXJuIHRoaXMuY2VsbHNbel1beV1beF0uZ2V0S2luZCgpO1xyXG4gICAgICAgIHJldHVybiBUX016S2luZC5Ob0RlZjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X2NlbGxfeHl6ICh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKTogQ19NYXplQ2VsbHx1bmRlZmluZWQgeyBcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbih4LCB5LCB6KSkgcmV0dXJuIHRoaXMuY2VsbHNbel1beV1beF07XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfY2VsbCAocDogQ19Qb2ludCk6IENfTWF6ZUNlbGx8dW5kZWZpbmVkIHsgXHJcbiAgICAgICAgaWYgKHRoaXMuc2l6ZS53aXRoaW4ocCkpIHJldHVybiB0aGlzLmNlbGxzW3Auel1bcC55XVtwLnhdO1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X2NlbGwocDogQ19Qb2ludCwgazogVF9NektpbmQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbihwKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNlbGxzW3Auel1bcC55XVtwLnhdID0gQ19NYXplQ2VsbC5uZXdPYmooe2tpbmQ6IGssIHBvczogcH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfY2VsbF94eXooeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgazogVF9NektpbmQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbih4LCB5LCB6KSkge1xyXG4gICAgICAgICAgICB0aGlzLmNlbGxzW3pdW3ldW3hdID0gQ19NYXplQ2VsbC5uZXdPYmooe2tpbmQ6IGssIHBvczoge3g6eCwgeTp5LCB6Onp9fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGNhbl9tb3ZlKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaXplLndpdGhpbihwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjYW5fVUQocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzX21vdmFibGUocCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbnB1YmxpYyBmaWxsX2NlbGwoa2luZDogVF9NektpbmQsIGZsb29yOm51bWJlcik6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgaCA9IDA7IGggPCB0aGlzLnNpemUuc2l6ZV95KCk7IGgrKylcclxuICAgIGZvciAobGV0IHcgPSAwOyB3IDwgdGhpcy5zaXplLnNpemVfeCgpOyB3KyspXHJcbiAgICAgICAgdGhpcy5zZXRfY2VsbF94eXoodywgaCwgZmxvb3IsIGtpbmQpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxyXG5wdWJsaWMgc2V0X2JveChraW5kOiBUX016S2luZCwgdG9wX3g6bnVtYmVyLCB0b3BfeTogbnVtYmVyLCBzaXplX3g6IG51bWJlciwgc2l6ZV95OiBudW1iZXIsIGZsb29yOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICh0b3BfeCArIHNpemVfeCA+IHRoaXMuc2l6ZS5zaXplX3goKSkgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpIC0gdG9wX3ggKyAxOyBcclxuICAgIGlmICh0b3BfeSArIHNpemVfeSA+IHRoaXMuc2l6ZS5zaXplX3koKSkgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpIC0gdG9wX3kgKyAxO1xyXG4gICAgXHJcbiAgICBjb25zdCB0b3AgPSB0b3BfeTtcclxuICAgIGNvbnN0IGJ0bSA9IHRvcCAgICArIHNpemVfeSAtIDE7XHJcbiAgICBjb25zdCBsZnQgPSB0b3BfeDtcclxuICAgIGNvbnN0IHJndCA9IGxmdCAgICArIHNpemVfeCAtIDE7XHJcbiAgICBcclxuICAgIC8vIOWMl+WBtCjkuIop44Go5Y2X5YG0KOS4iynjgpLnn7Plo4HjgatcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eih4LCB0b3AsIGZsb29yLCBraW5kKTtcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eih4LCBidG0sIGZsb29yLCBraW5kKTtcclxuICAgIH1cclxuICAgIC8vIOadseWBtCjlj7Mp44Go6KW/5YG0KOW3pinjgpLnn7Plo4HjgatcclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihsZnQsIHksIGZsb29yLCBraW5kKTtcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihyZ3QsIHksIGZsb29yLCBraW5kKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5cclxuLy8g6ZqO5LiK44Go6ZqO5LiL44Gr6ZqO5q6144KS6Kit572u44GZ44KLXHJcbnB1YmxpYyBjcmVhdGVfc3RhaXIoZmxvb3I6bnVtYmVyKTogQ19Qb2ludERpciB7XHJcbiAgICBjb25zdCBIX3NpemVfeCA9ICh0aGlzLnNpemUuc2l6ZV94KCkgLSAxKSAvIDI7XHJcbiAgICBjb25zdCBIX3NpemVfeSA9ICh0aGlzLnNpemUuc2l6ZV95KCkgLSAxKSAvIDI7XHJcbiAgICBjb25zdCBwb3NfeCAgICA9IDIgKiBfaXJhbmQoMCwgSF9zaXplX3ggLSAxKSArIDE7XHJcbiAgICBjb25zdCBwb3NfeSAgICA9IDIgKiBfaXJhbmQoMCwgSF9zaXplX3kgLSAxKSArIDE7XHJcbiAgICBjb25zdCBwb3NfZCAgICA9IDEgKiBfaXJhbmQoMCwgVF9EaXJlY3Rpb24uTUFYKTtcclxuXHJcbiAgICAvLyDkubHmlbDjgaflvpfjgZ/luqfmqJnjgavpmo7mrrXjgpLnva7jgY9cclxuICAgIGlmIChmbG9vciA+PSAxKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0X2NlbGxfeHl6KHBvc194LCBwb3NfeSwgZmxvb3IgLSAxKT8uZ2V0S2luZCgpICE9PSBUX016S2luZC5TdHJVcCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihwb3NfeCwgcG9zX3ksIGZsb29yIC0gMSwgIFRfTXpLaW5kLlN0ckRuKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihwb3NfeCwgcG9zX3ksIGZsb29yIC0gMSwgIFRfTXpLaW5kLlN0clVEKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5nZXRfY2VsbF94eXoocG9zX3gsIHBvc195LCBmbG9vcik/LmdldEtpbmQoKSAhPT0gVF9NektpbmQuU3RyRG4pIHtcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihwb3NfeCwgcG9zX3ksIGZsb29yLCAgVF9NektpbmQuU3RyVXApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihwb3NfeCwgcG9zX3ksIGZsb29yLCAgVF9NektpbmQuU3RyVUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgQ19Qb2ludERpcih7eDogcG9zX3gsIHk6IHBvc195LCB6OiBmbG9vciwgZDogcG9zX2R9KTtcclxufVxyXG5cclxucHVibGljIGNyZWF0ZV9tYXplKGZsb29yOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgIGNvbnN0IHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKTtcclxuXHJcblxyXG4gICAgLy8g44OA44Oz44K444On44Oz44GnJGZsb29y44Gn5oyH5a6a44GV44KM44Gf6ZqO44KS5pyq6LiP5Zyw44Gr44GZ44KLIFxyXG4gICAgdGhpcy5maWxsX2NlbGwoVF9NektpbmQuVW5leHAsIGZsb29yKTtcclxuXHJcbiAgICAvLyDjg4Djg7Pjgrjjg6fjg7Pjga7ovKrpg63jgpLnn7Plo4HjgavjgZnjgotcclxuICAgIHRoaXMuc2V0X2JveChUX016S2luZC5TdG9uZSwgMCwgMCwgc2l6ZV94LCBzaXplX3ksIGZsb29yKTtcclxuXHJcbiAgICAvLyDpgJrot6/jgavkuIDjgaTnva7jgY3jgavlo4HjgYzmiJDplbfjgZnjgovjg53jgqTjg7Pjg4jjgpLoqK3lrprjgZnjgotcclxuICAgIC8vIOODneOCpOODs+ODiOOBi+OCieWjgeOCkuS8uOOBsOOBmeaWueWQkeOCkuODqeODs+ODgOODoOOBq+axuuOCgeOCi1xyXG4gICAgY29uc3QgcG9pbnRzID0gbmV3IENfUG9pbnRTZXQyRCgpO1xyXG4gICAgZm9yIChsZXQgaCA9IDI7IGggPCBzaXplX3kgLSAyOyBoICs9IDIpe1xyXG4gICAgICAgIGZvciAobGV0IHcgPSAyOyB3IDwgc2l6ZV94IC0gMjsgdyArPSAyKXtcclxuICAgICAgICAgICAgY29uc3QgZGkgPSBfaXJhbmQoMCwgVF9EaXJlY3Rpb24uTUFYKTtcclxuICAgICAgICAgICAgcG9pbnRzLnB1c2gobmV3IENfUG9pbnRMaW5rMkQodywgaCwgZGkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Lmx5pWw44Gn44GE44GP44Gk44GL6YOo5bGL44KS5L2c44KLXHJcbiAgICBjb25zdCByb29tc19hcnJheSA9IFtdO1xyXG4gICAgY29uc3QgbnVtX29mX3Jvb20gPSBfaXJhbmQoMCwgdGhpcy5udW1fb2Zfcm9vbSk7XHJcbiAgICBmb3IgKGxldCBjbnQgPSAwOyBjbnQgPCBudW1fb2Zfcm9vbTsgY250KyspIHtcclxuICAgICAgICBjb25zdCBsZW5nX3ggPSBfaXJhbmQoMSwgIHRoaXMubWF4X3NpemVfb2Zfcm9vbSkgKiAyICsgMTtcclxuICAgICAgICBjb25zdCBsZW5nX3kgPSBfaXJhbmQoMSwgIHRoaXMubWF4X3NpemVfb2Zfcm9vbSkgKiAyICsgMTtcclxuICAgICAgICBjb25zdCByb29tX3ggPSBfaXJhbmQoMCwgKHNpemVfeCAtIGxlbmdfeCkgLyAyKSAqIDI7XHJcbiAgICAgICAgY29uc3Qgcm9vbV95ID0gX2lyYW5kKDAsIChzaXplX3kgLSBsZW5nX3kpIC8gMikgKiAyO1xyXG4gICAgICAgIHJvb21zX2FycmF5LnB1c2goe3R4OiByb29tX3gsIHR5OiByb29tX3ksIHN4OiBsZW5nX3gsIHN5OiBsZW5nX3l9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDpg6jlsYvjga7kuK3jga7jg53jgqTjg7Pjg4jjgpLliYrpmaTjgZnjgotcclxuICAgIGZvciAoY29uc3Qgcm9vbSBvZiByb29tc19hcnJheSkge1xyXG4gICAgICAgIGZvciAobGV0IGlpID0gMDsgaWkgPCBwb2ludHMuc2V0Lmxlbmd0aDsgaWkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBwID0gIHBvaW50cy5zZXRbaWldO1xyXG4gICAgICAgICAgICBpZiAocCA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGlmICggICAgKHAueCA+PSByb29tLnR4KSBcclxuICAgICAgICAgICAgICAgICYmICAocC54IDw9IHJvb20udHggKyByb29tLnN4KVxyXG4gICAgICAgICAgICAgICAgJiYgIChwLnkgPj0gcm9vbS50eSlcclxuICAgICAgICAgICAgICAgICYmICAocC55IDw9IHJvb20udHkgKyByb29tLnN5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50cy5yZW1vdmUocCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyDjg53jgqTjg7Pjg4jjgYvjgonlo4HjgpLmiJDplbfjgZXjgZvjgabov7fot6/jgpLkvZzjgotcclxuICAgIGZvciAoY29uc3QgcCBvZiBwb2ludHMuc2V0KSB7XHJcbiAgICAgICAgaWYgKHAgPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g44Od44Kk44Oz44OI44Gu5L2N572u44Gr55+z5aOB44KS572u44GPXHJcbiAgICAgICAgdGhpcy5zZXRfY2VsbF94eXoocC54LCBwLnksIGZsb29yLCBUX016S2luZC5TdG9uZSk7XHJcblxyXG4gICAgICAgIC8vIOafseOBruadseilv+WNl+WMl+OBruOBhOOBmuOCjOOBi+OBq+OCguefs+WjgeOCkue9ruOBj1xyXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IFswLCAwLCAwLCAwXTtcclxuICAgICAgICBjb25zdCBkaSA9IENfUG9pbnRMaW5rMkQuY2FzdChwKT8uZGkgPz8gVF9EaXJlY3Rpb24uWDtcclxuICAgICAgICBpZiAoZGkgPT09IFRfRGlyZWN0aW9uLlgpIGNvbnRpbnVlO1xyXG4gICAgICAgIGRpcmVjdGlvbltkaV0gPSAxO1xyXG5cclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihcclxuICAgICAgICAgICAgcC54IC0gZGlyZWN0aW9uW1RfRGlyZWN0aW9uLlddICsgZGlyZWN0aW9uW1RfRGlyZWN0aW9uLkVdLCBcclxuICAgICAgICAgICAgcC55IC0gZGlyZWN0aW9uW1RfRGlyZWN0aW9uLk5dICsgZGlyZWN0aW9uW1RfRGlyZWN0aW9uLlNdLCBcclxuICAgICAgICAgICAgZmxvb3IsXHJcbiAgICAgICAgICAgIFRfTXpLaW5kLlN0b25lXHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyDplonpjpbnqbrplpPjgYzlh7rmnaXjgabjgYTjgZ/jgonlh7rlj6PjgpLkvZzjgotcclxuICAgIC8vIOODneOCpOODs+ODiOOCkuODiOODrOODvOOCueOBl+OBpuOAgeaXouWHuuOBruODneOCpOODs+ODiOOBq+e5i+OBjOOBo+OBpuOBhOOBn+OCiemWiemOluepuumWk1xyXG4gICAgZm9yIChjb25zdCBzZXQgb2YgcG9pbnRzLnNldCkge1xyXG4gICAgICAgIGlmIChzZXQgPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcblxyXG4gICAgICAgIGNvbnN0IFt5biwgdHJhY2Vfc2V0XSA9IHRoaXMuY2hlY2tfY2xvc2Uoc2V0LngsIHNldC55LCBwb2ludHMsIG5ldyBDX1BvaW50U2V0MkQoKSk7XHJcbiAgICAgICAgaWYgKHluKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3Blbl9leGl0KHRyYWNlX3NldCwgVF9NektpbmQuVW5leHAsIGZsb29yKTtcclxuICAgICAgICAgICAgaWYgKHRyYWNlX3NldCAhPT0gdW5kZWZpbmVkKSBmb3IgKGNvbnN0IHQgb2YgdHJhY2Vfc2V0LnNldCkgcG9pbnRzLnJlbW92ZSh0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuXHJcbnByb3RlY3RlZCBjaGVja19jbG9zZSh4OiBudW1iZXIsIHk6IG51bWJlciwgcG9pbnRfc2V0OiBDX1BvaW50U2V0MkQsIHRyYWNlX3NldDogQ19Qb2ludFNldDJEfHVuZGVmaW5lZCk6IFtib29sZWFuLCBDX1BvaW50U2V0MkR8dW5kZWZpbmVkXSB7XHJcbiAgICBpZiAoeCA8IDIgfHwgeSA8IDIgfHwgeCA+IHRoaXMuc2l6ZS5zaXplX3goKSAtIDIgfHwgeSA+IHRoaXMuc2l6ZS5zaXplX3koKSAtIDIpIHJldHVybiBbZmFsc2UsIHVuZGVmaW5lZF07XHJcblxyXG4gICAgaWYgKHBvaW50X3NldCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gW2ZhbHNlLCB1bmRlZmluZWRdO1xyXG4gICAgaWYgKHBvaW50X3NldD8uaXNfZXhpc3QoeCwgeSkgPT09IGZhbHNlKSByZXR1cm4gW2ZhbHNlLCB1bmRlZmluZWRdO1xyXG5cclxuICAgIGlmICh0cmFjZV9zZXQgIT09IHVuZGVmaW5lZCAmJiB0cmFjZV9zZXQ/LmlzX2V4aXN0KHgsIHkpID09PSB0cnVlKSAgcmV0dXJuIFt0cnVlLCAgdHJhY2Vfc2V0XTtcclxuXHJcbiAgICBjb25zdCBwID0gcG9pbnRfc2V0LmdldF9wb2ludCh4LCB5KTtcclxuICAgIHRyYWNlX3NldCA/Pz0gbmV3IENfUG9pbnRTZXQyRCgpO1xyXG4gICAgdHJhY2Vfc2V0Py5wdXNoKG5ldyBDX1BvaW50TGluazJEKHgsIHksIENfUG9pbnRMaW5rMkQuY2FzdChwKT8uZGkpKTtcclxuXHJcbiAgICBsZXQgbmV4dF94OiBudW1iZXIgPSAwLCBuZXh0X3k6IG51bWJlciA9IDA7XHJcbiAgICBzd2l0Y2ggKENfUG9pbnRMaW5rMkQuY2FzdChwKT8uZGkpIHtcclxuICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46ICAvLyDljJdcclxuICAgICAgICAgICAgbmV4dF94ID0geDtcclxuICAgICAgICAgICAgbmV4dF95ID0geSAtIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogIC8vIOadsVxyXG4gICAgICAgICAgICBuZXh0X3ggPSB4ICsgMjtcclxuICAgICAgICAgICAgbmV4dF95ID0geTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiAgLy8g5Y2XXHJcbiAgICAgICAgICAgIG5leHRfeCA9IHg7XHJcbiAgICAgICAgICAgIG5leHRfeSA9IHkgKyAyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6ICAvLyDopb9cclxuICAgICAgICAgICAgbmV4dF94ID0geCAtIDI7XHJcbiAgICAgICAgICAgIG5leHRfeSA9IHk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja19jbG9zZShuZXh0X3gsIG5leHRfeSwgcG9pbnRfc2V0LCB0cmFjZV9zZXQpO1xyXG59XHJcblxyXG5wcm90ZWN0ZWQgb3Blbl9leGl0KHA6IENfUG9pbnRTZXQyRHx1bmRlZmluZWQsIGtpbmQ6IFRfTXpLaW5kLCBmbG9vcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAocCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgY250ID0gX2lyYW5kKDAsIHAuc2V0Lmxlbmd0aCAtIDEpO1xyXG4gICAgY29uc3QgcHAgID0gIHAuc2V0W2NudF07XHJcblxyXG4gICAgbGV0IGRpcmVjdGlvbiA9IFswLCAwLCAwLCAwXTtcclxuICAgIGNvbnN0IGRpID0gQ19Qb2ludExpbmsyRC5jYXN0KHBwKT8uZGkgPz8gVF9EaXJlY3Rpb24uTlxyXG4gICAgZGlyZWN0aW9uW2RpXSA9IDE7XHJcblxyXG4gICAgdGhpcy5zZXRfY2VsbF94eXooXHJcbiAgICAgICAgcHAueCAtIGRpcmVjdGlvbltUX0RpcmVjdGlvbi5XXSArIGRpcmVjdGlvbltUX0RpcmVjdGlvbi5FXSwgXHJcbiAgICAgICAgcHAueSAtIGRpcmVjdGlvbltUX0RpcmVjdGlvbi5OXSArIGRpcmVjdGlvbltUX0RpcmVjdGlvbi5TXSwgXHJcbiAgICAgICAgZmxvb3IsXHJcbiAgICAgICAga2luZCBcclxuICAgICk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyB0b19sZXR0ZXIocDogQ19Qb2ludCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2VsbHNbcC56XVtwLnldW3AueF0udG9fbGV0dGVyKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdG9fc3RyaW5nKGZsb29yOiBudW1iZXIgPSAwLCBkZWJ1Z19tb2RlOiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgICAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcblxyXG4gICAgICAgIHZhciByZXRfc3RyOiBzdHJpbmcgPSAnJztcclxuICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHRoaXMuZ2V0X29ial94eXooeCwgeSwgZmxvb3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkZWJ1Z19tb2RlICYmIHRoaXMubWFza3NbZmxvb3JdW3ldW3hdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0X3N0ciArPSAn77y4JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqX2MgPSBvYmo/LnZpZXcoKT8ubGV0dGVyKCkgPz8gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqID09PSBudWxsIHx8IG9ial9jID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldF9zdHIgKz0gdGhpcy5jZWxsc1tmbG9vcl1beV1beF0udG9fbGV0dGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0X3N0ciArPSBvYmpfYztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0X3N0ciArPSBcIlxcblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0X3N0cjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9NYXplIHtcclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeiA9IHRoaXMuc2l6ZS5zaXplX3ooKTtcclxuXHJcbiAgICAgICAgdmFyIHpfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBzaXplX3o7IHorKykge1xyXG4gICAgICAgICAgICB2YXIgeV9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBzaXplX3k7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHhfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeF9hcnJheS5wdXNoKHRoaXMuY2VsbHNbel1beV1beF0uZW5jb2RlKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeV9hcnJheS5wdXNoKHhfYXJyYXkuam9pbignWCcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB6X2FycmF5LnB1c2goeV9hcnJheS5qb2luKCdZJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtYXplX3N0ciA9IHpfYXJyYXkuam9pbignWicpO1xyXG5cclxuICAgICAgICB2YXIgel9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHNpemVfejsgeisrKSB7XHJcbiAgICAgICAgICAgIHZhciB5X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeF9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICB4X2FycmF5LnB1c2godGhpcy5tYXNrc1t6XVt5XVt4XSA/ICcxJyA6ICcwJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB5X2FycmF5LnB1c2goeF9hcnJheS5qb2luKCdYJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHpfYXJyYXkucHVzaCh5X2FycmF5LmpvaW4oJ1knKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1hc2tfc3RyID0gel9hcnJheS5qb2luKCdaJyk7XHJcblxyXG4gICAgICAgIGxldCBvYmpzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBpaSBpbiB0aGlzLm9ianMpIG9ianMucHVzaCh0aGlzLm9ianNbaWldLmVuY29kZSgpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6ICAgICAgdGhpcy5tYXplX2lkLFxyXG4gICAgICAgICAgICB1bmlxX2lkOiB0aGlzLnVuaXFfaWQsXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6IHRoaXMuc2F2ZV9pZCxcclxuICAgICAgICAgICAgZmxvb3I6ICAgdGhpcy5mbG9vcixcclxuICAgICAgICAgICAgbmFtZTogICAgdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICBvYmpzOiAgICBvYmpzLFxyXG4gICAgICAgICAgICBzaXplX3g6ICB0aGlzLnNpemUuc2l6ZV94KCksXHJcbiAgICAgICAgICAgIHNpemVfeTogIHRoaXMuc2l6ZS5zaXplX3koKSxcclxuICAgICAgICAgICAgc2l6ZV96OiAgdGhpcy5zaXplLnNpemVfeigpLFxyXG4gICAgICAgICAgICBtYXplOiAgICBtYXplX3N0cixcclxuICAgICAgICAgICAgbWFzazogICAgbWFza19zdHIsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX01hemV8dW5kZWZpbmVkKTogQ19NYXplIHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGEuaWQgICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm1hemVfaWQgPSBhLmlkO1xyXG4gICAgICAgIGlmIChhLnVuaXFfaWQgIT09IHVuZGVmaW5lZCkgdGhpcy51bmlxX2lkID0gYS51bmlxX2lkO1xyXG4gICAgICAgIGlmIChhLnNhdmVfaWQgIT09IHVuZGVmaW5lZCkgdGhpcy5zYXZlX2lkID0gYS5zYXZlX2lkO1xyXG4gICAgICAgIGlmIChhLmZsb29yICAgIT09IHVuZGVmaW5lZCkgdGhpcy5mbG9vciAgID0gYS5mbG9vcjtcclxuICAgICAgICBpZiAoYS5uYW1lICAgICE9PSB1bmRlZmluZWQpIHRoaXMubmFtZSAgICA9IGEubmFtZTtcclxuXHJcbiAgICAgICAgaWYgKGEub2JqcyAgICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqcyA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGpzb25fb2JqIG9mIGEub2Jqcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3X29iaiA9IENfTWF6ZU9iai5uZXdPYmooanNvbl9vYmopO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmpzW25ld19vYmoudWlkKCldID0gbmV3X29iajtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGEuc2l6ZV94ICE9PSB1bmRlZmluZWQgJiYgYS5zaXplX3kgIT09IHVuZGVmaW5lZCAmJiBhLnNpemVfeiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZSAgPSBuZXcgQ19SYW5nZShcclxuICAgICAgICAgICAgICAgIG5ldyBDX1BvaW50KDAsIDAsIDApLCBcclxuICAgICAgICAgICAgICAgIG5ldyBDX1BvaW50KGEuc2l6ZV94IC0gMSwgYS5zaXplX3kgLSAxLCBhLnNpemVfeiAtIDEpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmNlbGxzICAgPSB0aGlzLl9faW5pdF9tYXplKFRfTXpLaW5kLlN0b25lKTtcclxuICAgICAgICAgICAgdGhpcy5tYXNrcyAgID0gdGhpcy5fX2luaXRfbWFzayh0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5fX2luaXRfdW5jbGVhcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKTtcclxuICAgICAgICBjb25zdCBzaXplX3ogPSB0aGlzLnNpemUuc2l6ZV96KCk7XHJcblxyXG5cclxuICAgICAgICBpZiAoYS5tYXplICE9PSB1bmRlZmluZWQpIHtcclxuLypcclxuICAgICAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBzaXplX3o7IHorKylcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBzaXplX3k7IHkrKylcclxuICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxsc1t6XVt5XVt4XS5zZXQoVF9NektpbmQuU3RvbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiovXHJcbiAgICAgICAgICAgIGNvbnN0IHpfYXJyYXk6IHN0cmluZ1tdID0gYS5tYXplLnNwbGl0KCdaJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHpfbWF4ID0gX21pbihbc2l6ZV96LCB6X2FycmF5Lmxlbmd0aF0pO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHpfbWF4OyB6KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHlfYXJyYXk6IHN0cmluZ1tdID0gel9hcnJheVt6XS5zcGxpdCgnWScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeV9tYXggPSAgX21pbihbc2l6ZV95LCB5X2FycmF5Lmxlbmd0aF0pOyBcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgeV9tYXg7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhfYXJyYXk6IHN0cmluZ1tdID0geV9hcnJheVt5XS5zcGxpdCgnWCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhfbWF4ID0gIF9taW4oW3NpemVfeCwgeF9hcnJheS5sZW5ndGhdKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB4X21heDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBraW5kID0gcGFyc2VJbnQoeF9hcnJheVt4XSwgMTYpOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jZWxsc1t6XVt5XVt4XSA9IENfTWF6ZUNlbGwubmV3T2JqKHtraW5kOiBraW5kLCBwb3M6IHt4OngsIHk6eSwgejp6fX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhLm1hc2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9faW5pdF9tYXNrKHRydWUpO1xyXG4gICAgICAgICAgICBjb25zdCB6X2FycmF5OiBzdHJpbmdbXSA9IGEubWFzay5zcGxpdCgnWicpO1xyXG4gICAgICAgICAgICBjb25zdCB6X21heCA9IF9taW4oW3NpemVfeiwgel9hcnJheS5sZW5ndGhdKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCB6X21heDsgeisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5X2FycmF5OiBzdHJpbmdbXSA9IHpfYXJyYXlbel0uc3BsaXQoJ1knKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHlfbWF4ID0gIF9taW4oW3NpemVfeSwgeV9hcnJheS5sZW5ndGhdKTsgXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHlfbWF4OyB5KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4X2FycmF5OiBzdHJpbmdbXSA9IHlfYXJyYXlbeV0uc3BsaXQoJ1gnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4X21heCA9ICBfbWluKFtzaXplX3gsIHhfYXJyYXkubGVuZ3RoXSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgeF9tYXg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeF9hcnJheVt4XSAhPT0gJzAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc2tzW3pdW3ldW3hdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFza3Nbel1beV1beF0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9faW5pdF91bmNsZWFyKCk7ICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBlbmNvZGVfYWxsKGFsbF9tYXplOiBDX01hemVbXSk6IEpTT05fTWF6ZVtdIHtcclxuICAgICAgICBjb25zdCBhbGxfbWF6ZV9kYXRhOiBKU09OX01hemVbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IG1hemUgb2YgYWxsX21hemUpIHtcclxuICAgICAgICAgICAgYWxsX21hemVfZGF0YS5wdXNoKG1hemUuZW5jb2RlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsX21hemVfZGF0YTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVjb2RlX2FsbChhbGxfbWF6ZV9kYXRhOiBKU09OX01hemVbXSk6IENfTWF6ZVtdIHtcclxuICAgICAgICBjb25zdCBhbGxfbWF6ZTogQ19NYXplW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBtYXplX2RhdGEgb2YgYWxsX21hemVfZGF0YSkge1xyXG4gICAgICAgICAgICBhbGxfbWF6ZS5wdXNoKChuZXcgQ19NYXplKHt9KSkuZGVjb2RlKG1hemVfZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsX21hemU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIk1hemUgSW5mbzpcIlxyXG4gICAgICAgICAgICArIFwiXFxubWF6ZSBpZCA6XCIgKyAodGhpcy5tYXplX2lkID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmZsb29yOiBcIiAgICsgKHRoaXMuZmxvb3IgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG51bmlxIGlkIDpcIiArICh0aGlzLnVuaXFfaWQgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2F2ZSBpZCA6XCIgKyAodGhpcy5zYXZlX2lkID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbm5hbWU6ICAgXCIgICsgKHRoaXMubmFtZSAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zaXplX3g6IFwiICArICh0aGlzLnNpemUuc2l6ZV94KCkgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2l6ZV95OiBcIiAgKyAodGhpcy5zaXplLnNpemVfeSgpID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNpemVfejogXCIgICsgKHRoaXMuc2l6ZS5zaXplX3ooKSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWxlcnRfbWF6ZShmbG9vcjogbnVtYmVyID0gMCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiTWF6ZSBNYXA6XCJcclxuICAgICAgICAgICAgKyBcIm1hemU6XFxuXCIgICAgICsgKHRoaXMudG9fc3RyaW5nKGZsb29yLCB0cnVlKSAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFsZXJ0X21hc2soZmxvb3I6IG51bWJlciA9IDApOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIk1hc2sgTWFwOlwiXHJcbiAgICAgICAgICAgICsgXCJtYXNrOlxcblwiICAgICArICh0aGlzLnRvX3N0cmluZyhmbG9vciwgZmFsc2UpID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IF9nZXRfdXVpZCB9IGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuaW1wb3J0IHsgVF9NektpbmQgfSAgZnJvbSBcIi4vVF9NektpbmRcIjtcclxuaW1wb3J0IHsgSlNPTl9BbnkgfSAgZnJvbSBcIi4vQ19TYXZlRGF0YVwiO1xyXG5pbXBvcnQgeyBDX01hemVPYmosIElfTWF6ZU9iaiwgSlNPTl9NYXplT2JqIH0gZnJvbSBcIi4vQ19NYXplT2JqXCI7XHJcbmltcG9ydCB7IFRfV2FsbCB9ICAgIGZyb20gJy4vQ19XYWxsJztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fTWF6ZUNlbGwgZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBraW5kPzogVF9NektpbmRcclxuICAgIG9iaj86ICBKU09OX01hemVPYmosXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX01hemVDZWxsICB7XHJcbiAgICBwcm90ZWN0ZWQga2luZDogICBUX016S2luZDtcclxuICAgIHByb3RlY3RlZCBteV9vYmo6IElfTWF6ZU9iajtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5ld09iaihqOiBKU09OX01hemVDZWxsKTogQ19NYXplQ2VsbCB7XHJcbiAgICAgICAgc3dpdGNoIChqLmtpbmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5Ob0RlZjogcmV0dXJuIG5ldyBDX01hemVDZWxsTm9EZWYoaik7IFxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlVua3duOiByZXR1cm4gbmV3IENfTWF6ZUNlbGxVbmt3bihqKTsgXHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuRW1wdHk6IHJldHVybiBuZXcgQ19NYXplQ2VsbEVtcHR5KGopOyBcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5GbG9vcjogcmV0dXJuIG5ldyBDX01hemVDZWxsRmxvb3Ioaik7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuVW5leHA6IHJldHVybiBuZXcgQ19NYXplQ2VsbFVuZXhwKGopO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0b25lOiByZXR1cm4gbmV3IENfTWF6ZUNlbGxTdG9uZShqKTtcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVcDogcmV0dXJuIG5ldyBDX01hemVDZWxsU3RyVXAoaik7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyRG46IHJldHVybiBuZXcgQ19NYXplQ2VsbFN0ckRuKGopOyBcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVRDogcmV0dXJuIG5ldyBDX01hemVDZWxsU3RyVUQoaik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQ19NYXplQ2VsbE5vRGVmKGopO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihqOiBKU09OX01hemVDZWxsKSB7XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG4gICAgICAgIGoub2JqLmNsbmFtZSA/Pz0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG5cclxuICAgICAgICB0aGlzLmtpbmQgICA9IGoua2luZCA/PyBUX016S2luZC5Ob0RlZjtcclxuICAgICAgICB0aGlzLm15X29iaiA9IENfTWF6ZU9iai5uZXdPYmooai5vYmopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldE9iaigpOiAgSV9NYXplT2JqIHtyZXR1cm4gdGhpcy5teV9vYmp9XHJcbiAgICBwdWJsaWMgZ2V0S2luZCgpOiBUX016S2luZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2luZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9fbGV0dGVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubXlfb2JqLnZpZXcoKT8ubGV0dGVyKCkgPz8gJ++8uCc7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fbGV0dGVyKGxldHRlcjogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhUX016S2luZCkpIHtcclxuICAgICAgICAgICAgaWYgKGxldHRlciA9PT0ga2V5KSByZXR1cm4gVF9NektpbmRba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFRfTXpLaW5kLk5vRGVmO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcm93M0QoZnJvdDogVF9XYWxsLCBiYWNrOiBUX1dhbGwpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm15X29iai52aWV3KCk/LmRyb3czRChmcm90LCBiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2luZC50b1N0cmluZygxNikucGFkU3RhcnQoMixcIjBcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZShzdHI6IHN0cmluZywgaj86IEpTT05fTWF6ZUNlbGwpOiBDX01hemVDZWxsfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgIGNvbnN0IGtpbmQgPSBwYXJzZUludChzdHIsIDE2KSBhcyBUX016S2luZDtcclxuICAgICAgICAgcmV0dXJuIENfTWF6ZUNlbGwubmV3T2JqKHtraW5kOiBraW5kLCBwb3M6IGo/LnBvc30pO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsTm9EZWYgZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuTm9EZWZ9O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcwJztcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn55aRJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcwJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcnLCBjb2xfZDogJycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJycsIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbFVua3duIGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLlVua3dufTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMCc7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ+isjicsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMCcsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbiAgICAgICAgICAgIGNvbF9mOiAnJywgY29sX2I6ICcnLCBjb2xfczogJycsIGNvbF90OiAnJywgY29sX2Q6ICcnLCBcclxuICAgICAgICAgICAgY29sX2w6ICcnLCBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsRW1wdHkgZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuRW1wdHl9O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcxJztcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn54ShJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcwJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcnLCBjb2xfZDogJycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJycsIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGxGbG9vciBleHRlbmRzIENfTWF6ZUNlbGwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVDZWxsfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGogPz89IHtraW5kOiBUX016S2luZC5GbG9vcn07XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG5cclxuICAgICAgICBqLm9iai5jYW5fdGhyID0gJzEnO1xyXG4gICAgICAgIGoub2JqLnBvcyAgICAgPSB7eDpqLngsIHk6ai55LCB6Omouen07XHJcbiAgICAgICAgai5vYmoudmlldyAgICA9ICB7XHJcbiAgICAgICAgICAgIGxheWVyOiAwLCBsZXR0ZXI6ICfjgIAnLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgJzEnLFxyXG4gICAgICAgICAgICBwYWRfdDogMC4wLCBwYWRfZDogMC4wLCBwYWRfczogMC4wLFxyXG4gICAgICAgICAgICBjb2xfZjogJycsIGNvbF9iOiAnJywgY29sX3M6ICcnLCBjb2xfdDogJyM2NjY2ZmYnLCBjb2xfZDogJycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJyM5OTk5ZmYnLCBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGxVbmV4cCBleHRlbmRzIENfTWF6ZUNlbGwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVDZWxsfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGogPz89IHtraW5kOiBUX016S2luZC5VbmV4cH07XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG5cclxuICAgICAgICBqLm9iai5jYW5fdGhyID0gJzEnO1xyXG4gICAgICAgIGoub2JqLnBvcyAgICAgPSB7eDpqLngsIHk6ai55LCB6Omouen07XHJcbiAgICAgICAgai5vYmoudmlldyAgICA9ICB7XHJcbiAgICAgICAgICAgIGxheWVyOiAwLCBsZXR0ZXI6ICfjg7snLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgJzEnLFxyXG4gICAgICAgICAgICBwYWRfdDogMC4wLCBwYWRfZDogMC4wLCBwYWRfczogMC4wLFxyXG4gICAgICAgICAgICBjb2xfZjogJycsIGNvbF9iOiAnJywgY29sX3M6ICcnLCBjb2xfdDogJyM2NmZmZmYnLCBjb2xfZDogJycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJyM5OTk5ZmYnLCBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGxTdG9uZSBleHRlbmRzIENfTWF6ZUNlbGwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVDZWxsfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGogPz89IHtraW5kOiBUX016S2luZC5TdG9uZX07XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG5cclxuICAgICAgICBqLm9iai5jYW5fdGhyID0gJzAnO1xyXG4gICAgICAgIGoub2JqLnBvcyAgICAgPSB7eDpqLngsIHk6ai55LCB6Omouen07XHJcbiAgICAgICAgai5vYmoudmlldyAgICA9ICB7XHJcbiAgICAgICAgICAgIGxheWVyOiAwLCBsZXR0ZXI6ICfvvIMnLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgJzEnLFxyXG4gICAgICAgICAgICBwYWRfdDogMC4wLCBwYWRfZDogMC4wLCBwYWRfczogMC4wLFxyXG4gICAgICAgICAgICBjb2xfZjogJyMwMGZmMDAnLCBjb2xfYjogJycsIGNvbF9zOiAnIzAwZWUwMCcsIGNvbF90OiAnJywgY29sX2Q6ICcnLCBcclxuICAgICAgICAgICAgY29sX2w6ICcjMDAwMGZmJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsU3RyVXAgZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuU3RyVXB9O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcxJztcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn5LiKJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcxJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcjZmZmZmNjJywgY29sX2Q6ICcjZmZmZmNjJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnIzAwMDBmZicsIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbFN0ckRuIGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLlN0ckRufTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMSc7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ+S4iycsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMScsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbiAgICAgICAgICAgIGNvbF9mOiAnJywgY29sX2I6ICcnLCBjb2xfczogJycsIGNvbF90OiAnI2ZmZmZjYycsIGNvbF9kOiAnI2ZmZmZjYycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJyMwMDAwZmYnLCBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGxTdHJVRCBleHRlbmRzIENfTWF6ZUNlbGwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVDZWxsfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGogPz89IHtraW5kOiBUX016S2luZC5TdHJVRH07XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG5cclxuICAgICAgICBqLm9iai5jYW5fdGhyID0gJzEnO1xyXG4gICAgICAgIGoub2JqLnBvcyAgICAgPSB7eDpqLngsIHk6ai55LCB6Omouen07XHJcbiAgICAgICAgai5vYmoudmlldyAgICA9ICB7XHJcbiAgICAgICAgICAgIGxheWVyOiAwLCBsZXR0ZXI6ICfmrrUnLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgJzEnLFxyXG4gICAgICAgICAgICBwYWRfdDogMC4wLCBwYWRfZDogMC4wLCBwYWRfczogMC4wLFxyXG4gICAgICAgICAgICBjb2xfZjogJycsIGNvbF9iOiAnJywgY29sX3M6ICcnLCBjb2xfdDogJyNmZmZmY2MnLCBjb2xfZDogJyNmZmZmY2MnLCBcclxuICAgICAgICAgICAgY29sX2w6ICcjMDAwMGZmJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgX2FsZXJ0IH0gZnJvbSBcIi4uL2RfY21uL2dsb2JhbFwiO1xyXG5pbXBvcnQgeyBDX0RzcE1lc3NhZ2UgfSBmcm9tIFwiLi4vZF91dGwvQ19Ec3BNZXNzYWdlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fTWF6ZUluZm8ge1xyXG4gICAgbmFtZTogICAgICBzdHJpbmc7XHJcbiAgICBtYm5hbWU6ICAgIHN0cmluZztcclxuICAgIGx2OiAgICAgICAgbnVtYmVyO1xyXG4gICAgc2l6ZV94OiAgICBudW1iZXI7XHJcbiAgICBzaXplX3k6ICAgIG51bWJlcjtcclxuICAgIHNpemVfejogICAgbnVtYmVyO1xyXG4gICAgbWF4X3Jvb206ICBudW1iZXI7XHJcbiAgICByb29tX3NpemU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X21hemVpbmZvX2luZm8oYT86IEpTT05fTWF6ZUluZm8pOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICBhbGVydChcIk1hemVJbmZvIERhdGE6XCJcclxuICAgICAgICArIFwiXFxubmFtZSA6IFwiICAgICAgICsgKGEubmFtZSAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubWJuYW1lOiBcIiAgICAgICsgKGEubWJuYW1lICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubHYgOlwiICAgICAgICAgICsgKGEubHYgICAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2l6ZV94OiBcIiAgICAgICsgKGEuc2l6ZV94ICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2l6ZV95OiBcIiAgICAgICsgKGEuc2l6ZV95ICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2l6ZV96OiBcIiAgICAgICsgKGEuc2l6ZV96ICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubWF4X29mX3Jvb206IFwiICsgKGEubWF4X3Jvb20gID8/ICc/JylcclxuICAgICAgICArIFwiXFxucm9vbV9zaXplOiBcIiAgICsgKGEucm9vbV9zaXplID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX01hemVJbmZvIHtcclxuICAgIHB1YmxpYyBuYW1lOiAgICAgIHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIG1ibmFtZTogICAgc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgbHY6ICAgICAgICBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHNpemVfeDogICAgbnVtYmVyID0gMztcclxuICAgIHB1YmxpYyBzaXplX3k6ICAgIG51bWJlciA9IDM7XHJcbiAgICBwdWJsaWMgc2l6ZV96OiAgICBudW1iZXIgPSAzO1xyXG4gICAgcHVibGljIG1heF9yb29tOiAgbnVtYmVyID0gMTtcclxuICAgIHB1YmxpYyByb29tX3NpemU6IG51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldF90YmxfYWxsKCk6IENfTWF6ZUluZm9bXSB7XHJcbiAgICAgICAgY29uc3QgbWF6ZWluZm86IENfTWF6ZUluZm9bXSA9IFtdO1xyXG4gICAgICAgIG1hemVpbmZvLnB1c2goXHJcbiAgICAgICAgICAgIG5ldyBDX01hemVJbmZvKCkuZGVjb2RlKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICAgXHQnbWF6ZTAxMCcsIFxyXG4gICAgICAgICAgICAgICAgbWJuYW1lOiBcdCfmlZnnt7TloLQnLCBcclxuICAgICAgICAgICAgICAgIGx2OiAgICAgXHQgMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3g6IFx0MTEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV95OiBcdDExLCBcclxuICAgICAgICAgICAgICAgIHNpemVfejogXHQgMywgXHJcbiAgICAgICAgICAgICAgICBtYXhfcm9vbTogXHQgMiwgXHJcbiAgICAgICAgICAgICAgICByb29tX3NpemU6IFx0IDMgXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWF6ZWluZm8ucHVzaChcclxuICAgICAgICAgICAgbmV3IENfTWF6ZUluZm8oKS5kZWNvZGUoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogICBcdCdtYXplMDExJywgXHJcbiAgICAgICAgICAgICAgICBtYm5hbWU6IFx0J+Wni+OBvuOCiuOBrui/t+WuricsIFxyXG4gICAgICAgICAgICAgICAgbHY6ICAgICBcdCAxLCBcclxuICAgICAgICAgICAgICAgIHNpemVfeDogXHQyMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3k6IFx0MjEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV96OiBcdCA1LCBcclxuICAgICAgICAgICAgICAgIG1heF9yb29tOiBcdCAzLCBcclxuICAgICAgICAgICAgICAgIHJvb21fc2l6ZTogXHQgMyBcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBtYXplaW5mby5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgQ19NYXplSW5mbygpLmRlY29kZSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAgIFx0J21hemUwMTInLCBcclxuICAgICAgICAgICAgICAgIG1ibmFtZTogXHQn5pqX44GN5qOu44Gu6L+35a6uJywgXHJcbiAgICAgICAgICAgICAgICBsdjogICAgIFx0IDEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV94OiBcdDI1LCBcclxuICAgICAgICAgICAgICAgIHNpemVfeTogXHQyNSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3o6IFx0IDcsIFxyXG4gICAgICAgICAgICAgICAgbWF4X3Jvb206IFx0IDUsIFxyXG4gICAgICAgICAgICAgICAgcm9vbV9zaXplOiBcdCAzIFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICApXHJcbiAgICAgICAgbWF6ZWluZm8ucHVzaChcclxuICAgICAgICAgICAgbmV3IENfTWF6ZUluZm8oKS5kZWNvZGUoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogICBcdCdtYXplMDEzJywgXHJcbiAgICAgICAgICAgICAgICBtYm5hbWU6IFx0J+m7kumtlOOBruWcsOS4i+Wik+WcsCcsIFxyXG4gICAgICAgICAgICAgICAgbHY6ICAgICBcdCAxLCBcclxuICAgICAgICAgICAgICAgIHNpemVfeDogXHQzMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3k6IFx0MzEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV96OiBcdDEwLCBcclxuICAgICAgICAgICAgICAgIG1heF9yb29tOiBcdCA1LCBcclxuICAgICAgICAgICAgICAgIHJvb21fc2l6ZTogXHQgNSBcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICByZXR1cm4gbWF6ZWluZm87XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKGo/OiBKU09OX01hemVJbmZvKSB7XHJcbiAgICAgICAgaWYgKGogIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTWF6ZUluZm8ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICAgICAgdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICBtYm5hbWU6ICAgIHRoaXMubWJuYW1lLFxyXG4gICAgICAgICAgICBsdjogICAgICAgIHRoaXMubHYsXHJcbiAgICAgICAgICAgIHNpemVfeDogICAgdGhpcy5zaXplX3gsXHJcbiAgICAgICAgICAgIHNpemVfeTogICAgdGhpcy5zaXplX3ksXHJcbiAgICAgICAgICAgIHNpemVfejogICAgdGhpcy5zaXplX3osXHJcbiAgICAgICAgICAgIG1heF9yb29tOiAgdGhpcy5tYXhfcm9vbSxcclxuICAgICAgICAgICAgcm9vbV9zaXplOiB0aGlzLnJvb21fc2l6ZSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo/OiBKU09OX01hemVJbmZvKTogQ19NYXplSW5mbyB7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChqLm5hbWUgICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm5hbWUgICAgICA9IGoubmFtZTtcclxuICAgICAgICBpZiAoai5tYm5hbWUgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5tYm5hbWUgICAgPSBqLm1ibmFtZTtcclxuICAgICAgICBpZiAoai5sdiAgICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5sdiAgICAgICAgPSBqLmx2O1xyXG4gICAgICAgIGlmIChqLnNpemVfeCAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLnNpemVfeCAgICA9IGouc2l6ZV94O1xyXG4gICAgICAgIGlmIChqLnNpemVfeSAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLnNpemVfeSAgICA9IGouc2l6ZV95O1xyXG4gICAgICAgIGlmIChqLnNpemVfeiAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLnNpemVfeiAgICA9IGouc2l6ZV96O1xyXG4gICAgICAgIGlmIChqLm1heF9yb29tICAhPT0gdW5kZWZpbmVkKSB0aGlzLm1heF9yb29tICA9IGoubWF4X3Jvb207XHJcbiAgICAgICAgaWYgKGoucm9vbV9zaXplICE9PSB1bmRlZmluZWQpIHRoaXMucm9vbV9zaXplID0gai5yb29tX3NpemU7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWxlcnQoKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJNYXplSW5mbyBEYXRhOlwiXHJcbiAgICAgICAgICAgICsgXCJcXG5uYW1lIDogXCIgICAgICAgKyAodGhpcy5uYW1lICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubWJuYW1lOiBcIiAgICAgICsgKHRoaXMubWJuYW1lICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmx2IDpcIiAgICAgICAgICArICh0aGlzLmx2ICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zaXplX3g6IFwiICAgICAgKyAodGhpcy5zaXplX3ggICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2l6ZV95OiBcIiAgICAgICsgKHRoaXMuc2l6ZV95ICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNpemVfejogXCIgICAgICArICh0aGlzLnNpemVfeiAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5tYXhfb2Zfcm9vbTogXCIgKyAodGhpcy5tYXhfcm9vbSAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxucm9vbV9zaXplOiBcIiAgICsgKHRoaXMucm9vbV9zaXplID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ19Qb2ludCB9ICAgICAgICAgICAgICAgICAgIGZyb20gXCIuL0NfUG9pbnRcIjtcclxuaW1wb3J0IHsgQ19Qb2ludERpciwgSlNPTl9Qb2ludERpciB9IGZyb20gXCIuL0NfUG9pbnREaXJcIjtcclxuaW1wb3J0IHsgSV9BYnN0cmFjdCwgSV9KU09OX1VuaXEsIEpTT05fQW55IH0gICAgIGZyb20gXCIuL0NfU2F2ZURhdGFcIjtcclxuaW1wb3J0IHsgX2dldF91dWlkIH0gICAgICAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuaW1wb3J0IHsgXHJcbiAgICBDX01hemVPYmpWaWV3LCBcclxuICAgIElfTWF6ZU9ialZpZXcsIFxyXG4gICAgSlNPTl9NYXplT2JqVmlldyBcclxufSBmcm9tIFwiLi9DX01hemVPYmpWaWV3XCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX01hemVPYmogZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBjbG5hbWU/OiAgICBzdHJpbmcsXHJcbiAgICB1bmlxX2lkPzogICBzdHJpbmcsIFxyXG4gICAgcG9zPzogICAgICAgSlNPTl9Qb2ludERpcixcclxuICAgIHZpZXc/OiAgICAgIEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkLFxyXG4gICAgdGhyPzogICAgICAgc3RyaW5nLCBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSV9NYXplT2JqIGV4dGVuZHMgSV9KU09OX1VuaXEsIElfQWJzdHJhY3Qge1xyXG4gICAgZ2V0X3BkOiAgICAgKCk9PkNfUG9pbnREaXI7XHJcbiAgICB3aXRoaW46ICAgICAocDogQ19Qb2ludCk9PmJvb2xlYW47XHJcbiAgICB2aWV3OiAgICAgICAoKT0+SV9NYXplT2JqVmlld3x1bmRlZmluZWQ7XHJcbiAgICBjYW5UaHJvdWdoOiAoKT0+Ym9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfTWF6ZU9iaiBpbXBsZW1lbnRzIElfTWF6ZU9iaiB7XHJcbiAgICBwcm90ZWN0ZWQgY2xuYW1lOiAgICBzdHJpbmcgPSAnQ19NYXplT2JqJztcclxuXHJcbiAgICBwcml2YXRlICAgdW5pcV9pZDogICBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgcG9zOiAgICAgICBDX1BvaW50RGlyO1xyXG4gICAgcHJvdGVjdGVkIG15X3ZpZXc6ICAgSV9NYXplT2JqVmlld3x1bmRlZmluZWQ7XHJcbiAgICBwcm90ZWN0ZWQgY2FuX3RocjogICBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbmV3T2JqKGo/OiBKU09OX01hemVPYmp8dW5kZWZpbmVkKTogSV9NYXplT2JqIHtcclxuICAgICAgICBqID8/PSB7fTtcclxuICAgICAgICBqLmNsbmFtZSA/Pz0gQ19NYXplT2JqLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICAgICAgc3dpdGNoIChqLmNsbmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIENfTWF6ZU9iai5jb25zdHJ1Y3Rvci5uYW1lOiByZXR1cm4gbmV3IENfTWF6ZU9iaihqKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX01hemVPYmooaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbmV3T2JqKGo/OiBKU09OX01hemVPYmp8dW5kZWZpbmVkKTogSV9NYXplT2JqIHtcclxuICAgICAgICByZXR1cm4gQ19NYXplT2JqLm5ld09iaihqKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZU9ianx1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnVuaXFfaWQgICAgPSAnbWF6ZW9ial8nICsgX2dldF91dWlkKCk7XHJcbiAgICAgICAgdGhpcy5jbG5hbWUgICAgID0gIENfTWF6ZU9iai5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgICAgIHRoaXMucG9zICAgICAgICA9ICBuZXcgQ19Qb2ludERpcih7eDowLCB5OjAsIHo6MCwgZDowfSk7XHJcbiAgICAgICAgdGhpcy5teV92aWV3ICAgID0gIHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmNhbl90aHIgICAgPSAgdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKGogIT09IHVuZGVmaW5lZCkgdGhpcy5fX2luaXQoaik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfX2luaXQoajogSlNPTl9NYXplT2JqfHVuZGVmaW5lZCk6IENfTWF6ZU9iaiB7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChqLnVuaXFfaWQgIT09IHVuZGVmaW5lZCkgdGhpcy51bmlxX2lkICAgPSBqLnVuaXFfaWQ7XHJcbiAgICAgICAgaWYgKGouY2xuYW1lICAhPT0gdW5kZWZpbmVkKSB0aGlzLmNsbmFtZSAgICA9IGouY2xuYW1lO1xyXG4gICAgICAgIGlmIChqLnBvcyAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5wb3MuZGVjb2RlKGoucG9zKTtcclxuICAgICAgICBpZiAoai52aWV3ICAgICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGoudmlldykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5teV92aWV3ID8/PSBDX01hemVPYmpWaWV3Lm5ld09iaihqLnZpZXcpOyBcclxuICAgICAgICAgICAgfSBlbHNlIHRoaXMubXlfdmlldyAgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChqLmNhbl90aHIgIT09IHVuZGVmaW5lZCkgdGhpcy5jYW5fdGhyID0gai5jYW5fdGhyICE9PSAnMCcgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcbiAgICBwdWJsaWMgdWlkKCk6IHN0cmluZyB7cmV0dXJuIHRoaXMudW5pcV9pZH1cclxuXHJcbiAgICBwdWJsaWMgdmlldygpOiBJX01hemVPYmpWaWV3fHVuZGVmaW5lZCB7cmV0dXJuIHRoaXMubXlfdmlld31cclxuICAgIHB1YmxpYyBzZXRWaWV3KHZpZXc6IElfTWF6ZU9ialZpZXd8dW5kZWZpbmVkKTogdm9pZCB7dGhpcy5teV92aWV3ID0gdmlld31cclxuXHJcbiAgICBwdWJsaWMgY2FuVGhyb3VnaCgpOiBib29sZWFuIHtyZXR1cm4gdGhpcy5jYW5fdGhyfVxyXG4gICAgcHVibGljIHNldFRocm91Z2godGhyOiBib29sZWFuKTogYm9vbGVhbiB7cmV0dXJuIHRoaXMuY2FuX3RociA9IHRocn1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X3BkKCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ19Qb2ludERpcih0aGlzLnBvcyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BkKHA6IENfUG9pbnREaXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBvcyA9IHA7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgd2l0aGluKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3Mud2l0aGluKHApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9NYXplT2JqIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1bmlxX2lkOiB0aGlzLnVuaXFfaWQsXHJcbiAgICAgICAgICAgIGNsbmFtZTogIHRoaXMuY2xuYW1lLFxyXG4gICAgICAgICAgICBwb3M6ICAgICB0aGlzLnBvcy5lbmNvZGUoKSxcclxuICAgICAgICAgICAgdmlldzogICAgdGhpcy5teV92aWV3Py5lbmNvZGUoKSA/PyB7fSxcclxuICAgICAgICAgICAgY2FuX3RocjogdGhpcy5jYW5fdGhyID8gJzEnIDogJzAnLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVjb2RlKGo6IEpTT05fTWF6ZU9ianx1bmRlZmluZWQpOiBJX01hemVPYmoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9faW5pdChqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVjb2RlKGo6IEpTT05fTWF6ZU9ianx1bmRlZmluZWQpOiBJX01hemVPYmoge1xyXG4gICAgICAgIHJldHVybiBDX01hemVPYmoubmV3T2JqKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IElfQWJzdHJhY3QsIEpTT05fQW55IH0gZnJvbSBcIi4vQ19TYXZlRGF0YVwiO1xyXG5pbXBvcnQgeyBUX1dhbGwgfSAgICAgICAgICAgICAgIGZyb20gXCIuLi9kX21kbC9DX1dhbGxcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElfTWF6ZU9ialZpZXcgZXh0ZW5kcyBJX0Fic3RyYWN0IHtcclxuICAgIC8vIOihqOekuumWouS/gigyRHByZSkuL0NfV2FsbFxyXG4gICAgbGF5ZXI6ICAgKCk9Pm51bWJlcjtcclxuICAgIGxldHRlcjogICgpPT5zdHJpbmd8bnVsbDsgLy8gbnVsbDog6KaL44GI44Gq44GE44CB5L2V44KC44Gq44GEXHJcblxyXG4gICAgLy8g6KGo56S66Zai5L+CKDNEKVxyXG4gICAgY2FuU2hvdzogKCk9PmJvb2xlYW47XHJcbiAgICBkcm93M0Q6ICAoZnJvdDogVF9XYWxsLCBiYWNrOiBUX1dhbGwpPT52b2lkO1xyXG5cclxuICAgIHBhZF90OiAgICgpPT5udW1iZXI7IC8v5LiK5YG044Gu56m644GNKOWJsuWQiDogMOOBi+OCiTEpIFxyXG4gICAgcGFkX2Q6ICAgKCk9Pm51bWJlcjsgLy/luorlgbTjga7nqbrjgY0o5Ymy5ZCIOiAw44GL44KJMSkgXHJcbiAgICBwYWRfczogICAoKT0+bnVtYmVyOyAvL+aoquWBtOOBruepuuOBjSjlibLlkIg6IDDjgYvjgokxKSBcclxuICAgIGNvbF9mOiAgICgpPT5zdHJpbmd8bnVsbDsgLy/mraPpnaLjga7oibIoQ1NT44Kr44Op44O8KeOAgm51bGzjga/pgI/mmI5cclxuICAgIGNvbF9iOiAgICgpPT5zdHJpbmd8bnVsbDsgLy/og4zpnaLjga7oibIoQ1NT44Kr44Op44O8KeOAgm51bGzjga/pgI/mmI5cclxuICAgIGNvbF9zOiAgICgpPT5zdHJpbmd8bnVsbDsgLy/mqKrlgbTjga7oibIoQ1NT44Kr44Op44O8KeOAgm51bGzjga/pgI/mmI5cclxuICAgIGNvbF90OiAgICgpPT5zdHJpbmd8bnVsbDsgLy/kuIrpg6jjga7oibIoQ1NT44Kr44Op44O8KeOAgm51bGzjga/pgI/mmI7jgILjgoTjgoTjgZPjgZfjgYTjgYzjgIHniankvZPjga7lupXpnaLjgavlvZPjgZ/jgotcclxuICAgIGNvbF9kOiAgICgpPT5zdHJpbmd8bnVsbDsgLy/kuIvpg6jjga7oibIoQ1NT44Kr44Op44O8KeOAgm51bGzjga/pgI/mmI7jgILjgoTjgoTjgZPjgZfjgYTjgYzjgIHniankvZPjga7lpKnkupXjgavlvZPjgZ/jgotcclxuICAgIGNvbF9sOiAgICgpPT5zdHJpbmd8bnVsbDsgLy/jg6njgqTjg7Pjga7oibIoQ1NT44Kr44Op44O8KVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fTWF6ZU9ialZpZXcgZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBjbG5hbWU/OiBzdHJpbmcsXHJcbiAgICBsYXllcj86ICBudW1iZXIsXHJcbiAgICBsZXR0ZXI/OiBzdHJpbmcsXHJcbiAgICBzaG93M0Q/OiBzdHJpbmcsXHJcbiAgICBwYWRfdD86ICBudW1iZXIsIC8vIOOCquODluOCuOOCp+OCr+ODiOS4iumDqOOBrumamemWk+OBruWJsuWQiCgwLjAg44GL44KJIDEuMCkgXHJcbiAgICBwYWRfZD86ICBudW1iZXIsIC8vIOOCquODluOCuOOCp+OCr+ODiOS4i+mDqOOBrumamemWk+OBruWJsuWQiCgwLjAg44GL44KJIDEuMCkgXHJcbiAgICBwYWRfcz86ICBudW1iZXIsIC8vIOOCquODluOCuOOCp+OCr+ODiOWRqOWbsuOBrumamemWk+OBruWJsuWQiCgwLjAg44GL44KJIDEuMCkgXHJcbiAgICBjb2xfZj86ICBzdHJpbmd8bnVsbCwgLy8g44Kq44OW44K444Kn44Kv44OI5q2j6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgY29sX2I/OiAgc3RyaW5nfG51bGwsIC8vIOOCquODluOCuOOCp+OCr+ODiOato+mdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIGNvbF9zPzogIHN0cmluZ3xudWxsLCAvLyDjgqrjg5bjgrjjgqfjgq/jg4jlgbTpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBjb2xfdD86ICBzdHJpbmd8bnVsbCwgLy8g44Kq44OW44K444Kn44Kv44OI5LiK6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgY29sX2Q/OiAgc3RyaW5nfG51bGwsIC8vIOOCquODluOCuOOCp+OCr+ODiOW6lemdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIGNvbF9sPzogIHN0cmluZ3xudWxsLCAvLyDjgqrjg5bjgrjjgqfjgq/jg4jjga7nt5rjga5DU1Pjgqvjg6njg7wgXHJcbn1cclxuXHJcbnR5cGUgVF94eSAgID0ge3g6IG51bWJlciwgeTogbnVtYmVyfVxyXG50eXBlIFRfUmVjdCA9IHt0bDogVF94eSwgdHI6IFRfeHksIGRsOiBUX3h5LCBkcjogVF94eX07XHJcblxyXG5leHBvcnQgY2xhc3MgQ19NYXplT2JqVmlldyBpbXBsZW1lbnRzIElfTWF6ZU9ialZpZXcge1xyXG4gICAgcHVibGljIHN0YXRpYyBjb24zRD86IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0X2NvbnRleHQzRCgpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR8dW5kZWZpbmVkIHtyZXR1cm4gdGhpcz8uY29uM0R9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldF9jb250ZXh0M0QoY29uM0Q/OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHt0aGlzLmNvbjNEID0gY29uM0R9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBuZXdPYmooaj86IEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkKTogSV9NYXplT2JqVmlldyB7XHJcbiAgICAgICAgaiA/Pz0ge307XHJcbiAgICAgICAgai5jbG5hbWUgPz89IENfTWF6ZU9ialZpZXcuY29uc3RydWN0b3IubmFtZTtcclxuICAgICAgICBzd2l0Y2ggKGouY2xuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ19NYXplT2JqVmlldy5jb25zdHJ1Y3Rvci5uYW1lOiAgICAgcmV0dXJuIG5ldyBDX01hemVPYmpWaWV3KGopO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX01hemVPYmpWaWV3KGopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG5ld09iaihqPzogSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQpOiBJX01hemVPYmpWaWV3IHtcclxuICAgICAgICByZXR1cm4gQ19NYXplT2JqVmlldy5uZXdPYmooaik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2xuYW1lOiAgICBzdHJpbmcgPSAnQ19NYXplT2JqVmlldyc7XHJcblxyXG4gICAgcHJpdmF0ZSBteV9sYXllcjogIG51bWJlcjsgICAgICAvLyAyROihqOekuuOBruaZguOBrkNTU+ODrOOCpOODpOODvOOAguWQjOS9jee9ruOBruOCquODluOCuOOCp+OBruWGheOBk+OBruWApOOBjOWkp+OBjeOBhOeJqeOBjOihqOekuuOBleOCjOOCi1xyXG4gICAgcHJpdmF0ZSBteV9sZXR0ZXI6IHN0cmluZ3xudWxsOyAvLyAyROihqOekuuOBruaZguOBruWFqOinkuaWh+Wtl+OAgm51bGzjgarjgonpgI/mmI5cclxuXHJcbiAgICBwcml2YXRlIG15X3Nob3czRDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgbXlfcGFkX3Q6ICBudW1iZXI7IC8vIOOCquODluOCuOOCp+OCr+ODiOS4iumDqOOBrumamemWk+OBruWJsuWQiCgwLjAg44GL44KJIDEuMCkgXHJcbiAgICBwcml2YXRlIG15X3BhZF9kOiAgbnVtYmVyOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jkuIvpg6jjga7pmpnplpPjga7libLlkIgoMC4wIOOBi+OCiSAxLjApIFxyXG4gICAgcHJpdmF0ZSBteV9wYWRfczogIG51bWJlcjsgLy8g44Kq44OW44K444Kn44Kv44OI5ZGo5Zuy44Gu6ZqZ6ZaT44Gu5Ymy5ZCIKDAuMCDjgYvjgokgMS4wKSBcclxuXHJcbiAgICBwcml2YXRlIG15X2NvbF9mOiAgc3RyaW5nfG51bGw7IC8vIOOCquODluOCuOOCp+OCr+ODiOato+mdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIHByaXZhdGUgbXlfY29sX2I6ICBzdHJpbmd8bnVsbDsgLy8g44Kq44OW44K444Kn44Kv44OI5q2j6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgcHJpdmF0ZSBteV9jb2xfczogIHN0cmluZ3xudWxsOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jlgbTpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBwcml2YXRlIG15X2NvbF90OiAgc3RyaW5nfG51bGw7IC8vIOOCquODluOCuOOCp+OCr+ODiOS4iumdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIHByaXZhdGUgbXlfY29sX2Q6ICBzdHJpbmd8bnVsbDsgLy8g44Kq44OW44K444Kn44Kv44OI5bqV6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgcHJpdmF0ZSBteV9jb2xfbDogIHN0cmluZ3xudWxsOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jjga7nt5rjga5DU1Pjgqvjg6njg7wgXHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVPYmpWaWV3fHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuY2xuYW1lICAgICA9ICB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMubXlfbGF5ZXIgICA9ICAtMjtcclxuICAgICAgICB0aGlzLm15X2xldHRlciAgPSAgbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5teV9wYWRfdCAgID0gIDAuMDtcclxuICAgICAgICB0aGlzLm15X3BhZF9kICAgPSAgMC4wO1xyXG4gICAgICAgIHRoaXMubXlfcGFkX3MgICA9ICAwLjA7XHJcblxyXG4gICAgICAgIHRoaXMubXlfc2hvdzNEICA9ICB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLm15X2NvbF9mICAgPSAnI2Y4ZjhmOCc7IFxyXG4gICAgICAgIHRoaXMubXlfY29sX2IgICA9ICcjYWFhYWFhJzsgXHJcbiAgICAgICAgdGhpcy5teV9jb2xfcyAgID0gJyNkZGRkZGQnOyBcclxuICAgICAgICB0aGlzLm15X2NvbF90ICAgPSAnI2ZmZmZmZic7IFxyXG4gICAgICAgIHRoaXMubXlfY29sX2QgICA9ICcjY2NjY2NjJzsgXHJcbiAgICAgICAgdGhpcy5teV9jb2xfbCAgID0gJyMzMzMzMzMnOyBcclxuXHJcbiAgICAgICAgaWYgKGogIT09IHVuZGVmaW5lZCkgdGhpcy5fX2luaXQoaik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9faW5pdChqOiBKU09OX01hemVPYmpWaWV3fHVuZGVmaW5lZCk6IElfTWF6ZU9ialZpZXcge1xyXG4gICAgICAgIGlmIChqID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoai5jbG5hbWUgICE9PSB1bmRlZmluZWQpIHRoaXMuY2xuYW1lICAgID0gai5jbG5hbWU7XHJcbiAgICAgICAgaWYgKGoubGF5ZXIgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2xheWVyICA9IGoubGF5ZXI7XHJcbiAgICAgICAgaWYgKGoubGV0dGVyICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2xldHRlciA9IGoubGV0dGVyICE9PSAnJyAgPyBqLmxldHRlciA6IG51bGw7IFxyXG4gICAgICAgIGlmIChqLnBhZF90ICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9wYWRfdCAgPSBqLnBhZF90OyBcclxuICAgICAgICBpZiAoai5wYWRfZCAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfcGFkX2QgID0gai5wYWRfZDsgXHJcbiAgICAgICAgaWYgKGoucGFkX3MgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X3BhZF9zICA9IGoucGFkX3M7IFxyXG4gICAgICAgIGlmIChqLnNob3czRCAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9zaG93M0QgPSBqLnNob3czRCAhPT0gJzAnID8gdHJ1ZSAgICAgOiBmYWxzZTsgXHJcbiAgICAgICAgaWYgKGouY29sX2YgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2NvbF9mICA9IGouY29sX2YgICE9PSAnJyAgPyBqLmNvbF9mICA6IG51bGw7IFxyXG4gICAgICAgIGlmIChqLmNvbF9iICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9jb2xfYiAgPSBqLmNvbF9iICAhPT0gJycgID8gai5jb2xfYiAgOiBudWxsOyBcclxuICAgICAgICBpZiAoai5jb2xfcyAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfY29sX3MgID0gai5jb2xfcyAgIT09ICcnICA/IGouY29sX3MgIDogbnVsbDsgXHJcbiAgICAgICAgaWYgKGouY29sX3QgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2NvbF90ICA9IGouY29sX3QgICE9PSAnJyAgPyBqLmNvbF90ICA6IG51bGw7IFxyXG4gICAgICAgIGlmIChqLmNvbF9kICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9jb2xfZCAgPSBqLmNvbF9kICAhPT0gJycgID8gai5jb2xfZCAgOiBudWxsOyBcclxuICAgICAgICBpZiAoai5jb2xfbCAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfY29sX2wgID0gai5jb2xfbCAgIT09ICcnICA/IGouY29sX2wgIDogbnVsbDsgXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsYXllcigpOiBudW1iZXIge3JldHVybiB0aGlzLm15X2xheWVyO31cclxuICAgIHB1YmxpYyBzZXRfbGF5ZXIobGF5ZXI6IG51bWJlcikge3RoaXMubXlfbGF5ZXIgPSBsYXllcn1cclxuXHJcbiAgICBwdWJsaWMgbGV0dGVyKCk6ICBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfbGV0dGVyfVxyXG4gICAgcHVibGljIHNldF9sZXR0ZXIobGV0dGVyOiBzdHJpbmd8bnVsbCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9sZXR0ZXIgPSBsZXR0ZXJ9XHJcblxyXG4gICAgcHVibGljIGNhblNob3coKTogYm9vbGVhbiB7cmV0dXJuIHRoaXMubXlfc2hvdzNEfTtcclxuICAgIHB1YmxpYyBzZXRTaG93KGNhbl9zaG93OiBib29sZWFuKTogYm9vbGVhbiB7cmV0dXJuIHRoaXMubXlfc2hvdzNEID0gY2FuX3Nob3d9O1xyXG5cclxuICAgIHB1YmxpYyBwYWRfdCgpOiAgbnVtYmVyIHtyZXR1cm4gdGhpcy5teV9wYWRfdH1cclxuICAgIHB1YmxpYyBwYWRfZCgpOiAgbnVtYmVyIHtyZXR1cm4gdGhpcy5teV9wYWRfZH1cclxuICAgIHB1YmxpYyBwYWRfcygpOiAgbnVtYmVyIHtyZXR1cm4gdGhpcy5teV9wYWRfc31cclxuICAgIHB1YmxpYyBzZXRfcGFkX3QocGFkX3Q6IG51bWJlcik6IG51bWJlciB7cmV0dXJuIHRoaXMubXlfcGFkX3QgPSB0aGlzLm15X3BhZF9kICsgcGFkX3QgPCAxLjAgPyBwYWRfdCA6IDAuOTkgLSB0aGlzLm15X3BhZF9kfVxyXG4gICAgcHVibGljIHNldF9wYWRfZChwYWRfZDogbnVtYmVyKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5teV9wYWRfZCA9IHRoaXMubXlfcGFkX3QgKyBwYWRfZCA8IDEuMCA/IHBhZF9kIDogMC45OSAtIHRoaXMubXlfcGFkX3R9XHJcbiAgICBwdWJsaWMgc2V0X3BhZF9zKHBhZF9zOiBudW1iZXIpOiBudW1iZXIge3JldHVybiB0aGlzLm15X3BhZF9zID0gcGFkX3N9XHJcblxyXG4gICAgcHVibGljIGNvbF9mKCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfZn0gXHJcbiAgICBwdWJsaWMgY29sX2IoKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9ifSBcclxuICAgIHB1YmxpYyBjb2xfcygpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX3N9IFxyXG4gICAgcHVibGljIGNvbF90KCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfdH0gXHJcbiAgICBwdWJsaWMgY29sX2QoKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9kfSBcclxuICAgIHB1YmxpYyBjb2xfbCgpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX2x9IFxyXG4gICAgcHVibGljIHNldF9jb2xfZihjb2xfZjogc3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX2YgPSBjb2xfZn0gXHJcbiAgICBwdWJsaWMgc2V0X2NvbF9iKGNvbF9iOiBzdHJpbmd8bnVsbCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfYiA9IGNvbF9ifSBcclxuICAgIHB1YmxpYyBzZXRfY29sX3MoY29sX3M6IHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9zID0gY29sX3N9IFxyXG4gICAgcHVibGljIHNldF9jb2xfdChjb2xfdDogc3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX3QgPSBjb2xfdH0gXHJcbiAgICBwdWJsaWMgc2V0X2NvbF9kKGNvbF9kOiBzdHJpbmd8bnVsbCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfZCA9IGNvbF9kfSBcclxuICAgIHB1YmxpYyBzZXRfY29sX2woY29sX2w6IHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9sID0gY29sX2x9IFxyXG5cclxuXHJcbiAgICBwdWJsaWMgZHJvdzNEKGZyb3Q6IFRfV2FsbCwgYmFjazogVF9XYWxsKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcm93X29ial9iYWNrICAgICAgKGZyb3QsIGJhY2spO1xyXG4gICAgICAgIHRoaXMuZHJvd19vYmpfZG93biAgICAgIChmcm90LCBiYWNrKTtcclxuICAgICAgICB0aGlzLmRyb3dfb2JqX3RvcCAgICAgICAoZnJvdCwgYmFjayk7XHJcbiAgICAgICAgdGhpcy5kcm93X29ial9yaWdodF9zaWRlKGZyb3QsIGJhY2spO1xyXG4gICAgICAgIHRoaXMuZHJvd19vYmpfbGVmdF9zaWRlIChmcm90LCBiYWNrKTtcclxuICAgICAgICB0aGlzLmRyb3dfb2JqX2Zyb250ICAgICAoZnJvdCwgYmFjayk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRyb3dfb2JqX2Rvd24oXHJcbiAgICAgICAgZnJvdDogIFRfV2FsbCwgXHJcbiAgICAgICAgYmFjazogIFRfV2FsbCwgXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuU2hvdygpIHx8IHRoaXMuY29sX3QoKSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnBhZF9zKCkgPD0gMC4wICYmIHRoaXMucGFkX3QoKSA+PSAxLjApIHtcclxuICAgICAgICAgICAgZHJvd19jZWxsX2Zsb29yKGZyb3QsIGJhY2ssIHRoaXMuY29sX3QoKSA/PyAnIzY2NjZmZicsIHRoaXMuY29sX2woKSA/PyAnIzk5OTlmZicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbyA9IF9fY2FsY19wYWRkaW5nX29iaih0aGlzLCBmcm90LCBiYWNrKTtcclxuICAgICAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgICAgIHRsOiBvLmZkbCxcclxuICAgICAgICAgICAgdHI6IG8uZmRyLFxyXG4gICAgICAgICAgICBkcjogby5iZHIsXHJcbiAgICAgICAgICAgIGRsOiBvLmJkbCxcclxuICAgICAgICB9XHJcbiAgICAgICAgZHJvd19jZWxsKHJlY3QsIHRoaXMuY29sX3QoKSwgdGhpcy5jb2xfbCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRyb3dfb2JqX3RvcChcclxuICAgICAgICBmcm90OiAgVF9XYWxsLCBcclxuICAgICAgICBiYWNrOiAgVF9XYWxsLCBcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5TaG93KCkgfHwgdGhpcy5jb2xfZCgpID09PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMucGFkX3MoKSA8PSAwLjAgJiYgdGhpcy5wYWRfZCgpID49IDEuMCkge1xyXG4gICAgICAgICAgICBkcm93X2NlbGxfY2VpbGluZyhmcm90LCBiYWNrLCB0aGlzLmNvbF9kKCkgPz8gJyNhYWFhYWEnLCB0aGlzLmNvbF9sKCkgPz8gJyM5OTk5ZmYnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IG8gPSBfX2NhbGNfcGFkZGluZ19vYmoodGhpcywgZnJvdCwgYmFjayk7XHJcbiAgICAgICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgICAgICB0bDogby5mdGwsXHJcbiAgICAgICAgICAgIHRyOiBvLmZ0cixcclxuICAgICAgICAgICAgZHI6IG8uYnRyLFxyXG4gICAgICAgICAgICBkbDogby5idGwsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRyb3dfY2VsbChyZWN0LCB0aGlzLmNvbF9kKCksIHRoaXMuY29sX2woKSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRyb3dfb2JqX2Zyb250KFxyXG4gICAgICAgIGZyb3Q6ICBUX1dhbGwsIFxyXG4gICAgICAgIGJhY2s6ICBUX1dhbGwsIFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblNob3coKSB8fCB0aGlzLmNvbF9mKCkgPT09IG51bGwpIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IG8gPSBfX2NhbGNfcGFkZGluZ19vYmoodGhpcywgZnJvdCwgYmFjayk7XHJcbiAgICAgICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgICAgICB0bDogby5mdGwsIFxyXG4gICAgICAgICAgICB0cjogby5mdHIsIFxyXG4gICAgICAgICAgICBkcjogby5mZHIsIFxyXG4gICAgICAgICAgICBkbDogby5mZGwsIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGRyb3dfY2VsbChyZWN0LCB0aGlzLmNvbF9mKCksIHRoaXMuY29sX2woKSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRyb3dfb2JqX2JhY2soXHJcbiAgICAgICAgZnJvdDogIFRfV2FsbCwgXHJcbiAgICAgICAgYmFjazogIFRfV2FsbCwgXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuU2hvdygpIHx8IHRoaXMuY29sX2IoKSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbyA9IF9fY2FsY19wYWRkaW5nX29iaih0aGlzLCBmcm90LCBiYWNrKTtcclxuICAgICAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgICAgIHRsOiBvLmJ0bCwgXHJcbiAgICAgICAgICAgIHRyOiBvLmJ0ciwgXHJcbiAgICAgICAgICAgIGRyOiBvLmJkciwgXHJcbiAgICAgICAgICAgIGRsOiBvLmJkbCwgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZHJvd19jZWxsKHJlY3QsIHRoaXMuY29sX2IoKSwgdGhpcy5jb2xfbCgpKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZHJvd19vYmpfbGVmdF9zaWRlKFxyXG4gICAgICAgIGZyb3Q6ICBUX1dhbGwsIFxyXG4gICAgICAgIGJhY2s6ICBUX1dhbGwsIFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblNob3coKSB8fCB0aGlzLmNvbF9zKCkgPT09IG51bGwpIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IG8gPSBfX2NhbGNfcGFkZGluZ19vYmoodGhpcywgZnJvdCwgYmFjayk7XHJcbiAgICAgICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgICAgICB0bDogby5idGwsXHJcbiAgICAgICAgICAgIHRyOiBvLmZ0bCxcclxuICAgICAgICAgICAgZHI6IG8uZmRsLFxyXG4gICAgICAgICAgICBkbDogby5iZGwsXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZHJvd19jZWxsKHJlY3QsIHRoaXMuY29sX3MoKSwgdGhpcy5jb2xfbCgpKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZHJvd19vYmpfcmlnaHRfc2lkZShcclxuICAgICAgICBmcm90OiAgVF9XYWxsLCBcclxuICAgICAgICBiYWNrOiAgVF9XYWxsLCBcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5TaG93KCkgfHwgdGhpcy5jb2xfcygpID09PSBudWxsKSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBjb25zdCBvID0gX19jYWxjX3BhZGRpbmdfb2JqKHRoaXMsIGZyb3QsIGJhY2spO1xyXG4gICAgICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICAgICAgdGw6IG8uZnRyLFxyXG4gICAgICAgICAgICB0cjogby5idHIsXHJcbiAgICAgICAgICAgIGRyOiBvLmJkcixcclxuICAgICAgICAgICAgZGw6IG8uZmRyLFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGRyb3dfY2VsbChyZWN0LCB0aGlzLmNvbF9zKCksIHRoaXMuY29sX2woKSk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTWF6ZU9ialZpZXcge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNuYW1lOiAgIHRoaXMuY2xuYW1lLFxyXG4gICAgICAgICAgICBsYXllcjogICB0aGlzLm15X2xheWVyLFxyXG4gICAgICAgICAgICBsZXR0ZXI6ICB0aGlzLm15X2xldHRlciA/PyAnJyxcclxuICAgICAgICAgICAgcGFkX3Q6ICAgdGhpcy5teV9wYWRfdCwgXHJcbiAgICAgICAgICAgIHBhZF9kOiAgIHRoaXMubXlfcGFkX2QsIFxyXG4gICAgICAgICAgICBwYWRfczogICB0aGlzLm15X3BhZF9zLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgdGhpcy5jYW5TaG93KCkgPyAnMScgOiAnMCcsXHJcbiAgICAgICAgICAgIGNvbF9mOiAgIHRoaXMubXlfY29sX2YgPz8gJycsICBcclxuICAgICAgICAgICAgY29sX2I6ICAgdGhpcy5teV9jb2xfYiA/PyAnJywgIFxyXG4gICAgICAgICAgICBjb2xfczogICB0aGlzLm15X2NvbF9zID8/ICcnLCBcclxuICAgICAgICAgICAgY29sX3Q6ICAgdGhpcy5teV9jb2xfdCA/PyAnJywgXHJcbiAgICAgICAgICAgIGNvbF9kOiAgIHRoaXMubXlfY29sX2QgPz8gJycsIFxyXG4gICAgICAgICAgICBjb2xfbDogICB0aGlzLm15X2NvbF9sID8/ICcnLCBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo6IEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkKTogSV9NYXplT2JqVmlldyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19pbml0KGopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBkZWNvZGUoajogSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQpOiBJX01hemVPYmpWaWV3IHtcclxuICAgICAgICByZXR1cm4gQ19NYXplT2JqVmlldy5uZXdPYmooaik7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gX19jYWxjX3BhZGRpbmdfb2JqKFxyXG4gICAgb2JqOiAgIElfTWF6ZU9ialZpZXcsXHJcbiAgICBmcm90OiAgVF9XYWxsLCBcclxuICAgIGJhY2s6ICBUX1dhbGwsIFxyXG4pOiB7XHJcbiAgICAvLyDorZjliKXlrZDjga7mhI/lkbNcclxuICAgIC8vIOW3puerr++8muWJjeW+jOOBruWMuuWIpeOAgGY65YmN6Z2i44CAYjrog4zpnaJcclxuICAgIC8vIOS4reWkru+8muS4iuS4i+OBruWMuuWIpeOAgHQ65LiK6L6644CAZDrkuIvovrpcclxuICAgIC8vIOWPs+err++8muW3puWPs+OBruWMuuWIpeOAgGw65bem5YG044CAcjrlj7PlgbRcclxuICAgIGZ0bDpUX3h5LCBmdHI6VF94eSwgZmRyOlRfeHksIGZkbDpUX3h5LCBcclxuICAgIGJ0bDpUX3h5LCBidHI6VF94eSwgYmRyOlRfeHksIGJkbDpUX3h5LCBcclxufSB7XHJcbiAgICBjb25zdCByZWN0X2Zyb3QgPSBmcm90O1xyXG4gICAgY29uc3QgcmVjdF9iYWNrID0gYmFjaztcclxuXHJcbiAgICBjb25zdCByYXRpb19YICAgPSBvYmoucGFkX3MoKSAvIDIuMDtcclxuICAgIGNvbnN0IHJhdGlvX1QgICA9IG9iai5wYWRfdCgpO1xyXG4gICAgY29uc3QgcmF0aW9fRCAgID0gb2JqLnBhZF9kKCk7XHJcblxyXG4gICAgY29uc3QgZnJvdF9wYWRfWCAgPSBNYXRoLmFicyhyZWN0X2Zyb3QubWF4X3ggLSByZWN0X2Zyb3QubWluX3gpICogcmF0aW9fWDtcclxuICAgIGNvbnN0IGJhY2tfcGFkX1ggID0gTWF0aC5hYnMocmVjdF9iYWNrLm1heF94IC0gcmVjdF9iYWNrLm1pbl94KSAqIHJhdGlvX1g7XHJcblxyXG4gICAgY29uc3QgZnJvdF9wYWRfVCAgPSBNYXRoLmFicyhyZWN0X2Zyb3QubWF4X3kgLSByZWN0X2Zyb3QubWluX3kpICogcmF0aW9fVDtcclxuICAgIGNvbnN0IGJhY2tfcGFkX1QgID0gTWF0aC5hYnMocmVjdF9iYWNrLm1heF95IC0gcmVjdF9iYWNrLm1pbl95KSAqIHJhdGlvX1Q7XHJcblxyXG4gICAgY29uc3QgZnJvdF9wYWRfRCAgPSBNYXRoLmFicyhyZWN0X2Zyb3QubWF4X3kgLSByZWN0X2Zyb3QubWluX3kpICogcmF0aW9fRDtcclxuICAgIGNvbnN0IGJhY2tfcGFkX0QgID0gTWF0aC5hYnMocmVjdF9iYWNrLm1heF95IC0gcmVjdF9iYWNrLm1pbl95KSAqIHJhdGlvX0Q7XHJcblxyXG4gICAgLy8g44OR44OH44Kj44Oz44Kw6Kit5a6a5b6M44GuWFnluqfmqJnjgpLoqIjnrpfjgZnjgovjgZ/jgoHjgatcclxuICAgIC8vIOW/heimgeOBque3muWIhuOBruS9jee9ruaxuuOCgeOCkuOBmeOCi1xyXG4gICAgY29uc3QgZnJvdF90b3BfbGZ0ID0ge3g6IHJlY3RfZnJvdC5taW5feCArIGZyb3RfcGFkX1gsIHk6IHJlY3RfZnJvdC5taW5feSArIGZyb3RfcGFkX1R9XHJcbiAgICBjb25zdCBmcm90X3RvcF9yZ3QgPSB7eDogcmVjdF9mcm90Lm1heF94IC0gZnJvdF9wYWRfWCwgeTogcmVjdF9mcm90Lm1pbl95ICsgZnJvdF9wYWRfVH1cclxuICAgIGNvbnN0IGZyb3RfZHduX2xmdCA9IHt4OiByZWN0X2Zyb3QubWluX3ggKyBmcm90X3BhZF9YLCB5OiByZWN0X2Zyb3QubWF4X3kgLSBmcm90X3BhZF9EfVxyXG4gICAgY29uc3QgZnJvdF9kd25fcmd0ID0ge3g6IHJlY3RfZnJvdC5tYXhfeCAtIGZyb3RfcGFkX1gsIHk6IHJlY3RfZnJvdC5tYXhfeSAtIGZyb3RfcGFkX0R9XHJcblxyXG4gICAgY29uc3QgYmFja190b3BfbGZ0ID0ge3g6IHJlY3RfYmFjay5taW5feCArIGJhY2tfcGFkX1gsIHk6IHJlY3RfYmFjay5taW5feSArIGJhY2tfcGFkX1R9XHJcbiAgICBjb25zdCBiYWNrX3RvcF9yZ3QgPSB7eDogcmVjdF9iYWNrLm1heF94IC0gYmFja19wYWRfWCwgeTogcmVjdF9iYWNrLm1pbl95ICsgYmFja19wYWRfVH1cclxuICAgIGNvbnN0IGJhY2tfZHduX2xmdCA9IHt4OiByZWN0X2JhY2subWluX3ggKyBiYWNrX3BhZF9YLCB5OiByZWN0X2JhY2subWF4X3kgLSBiYWNrX3BhZF9EfVxyXG4gICAgY29uc3QgYmFja19kd25fcmd0ID0ge3g6IHJlY3RfYmFjay5tYXhfeCAtIGJhY2tfcGFkX1gsIHk6IHJlY3RfYmFjay5tYXhfeSAtIGJhY2tfcGFkX0R9XHJcblxyXG4gICAgbGV0IGZ0bCA9IF9fY2FsY19wYWRkaW5nX3h5KGZyb3RfdG9wX2xmdCwgYmFja190b3BfbGZ0LCByYXRpb19YKTtcclxuICAgIGxldCBmdHIgPSBfX2NhbGNfcGFkZGluZ194eShmcm90X3RvcF9yZ3QsIGJhY2tfdG9wX3JndCwgcmF0aW9fWCk7XHJcbiAgICBsZXQgZmRsID0gX19jYWxjX3BhZGRpbmdfeHkoZnJvdF9kd25fbGZ0LCBiYWNrX2R3bl9sZnQsIHJhdGlvX1gpO1xyXG4gICAgbGV0IGZkciA9IF9fY2FsY19wYWRkaW5nX3h5KGZyb3RfZHduX3JndCwgYmFja19kd25fcmd0LCByYXRpb19YKTtcclxuXHJcbiAgICBsZXQgYnRsID0gX19jYWxjX3BhZGRpbmdfeHkoYmFja190b3BfbGZ0LCBmcm90X3RvcF9sZnQsIHJhdGlvX1gpO1xyXG4gICAgbGV0IGJ0ciA9IF9fY2FsY19wYWRkaW5nX3h5KGJhY2tfdG9wX3JndCwgZnJvdF90b3Bfcmd0LCByYXRpb19YKTtcclxuICAgIGxldCBiZGwgPSBfX2NhbGNfcGFkZGluZ194eShiYWNrX2R3bl9sZnQsIGZyb3RfZHduX2xmdCwgcmF0aW9fWCk7XHJcbiAgICBsZXQgYmRyID0gX19jYWxjX3BhZGRpbmdfeHkoYmFja19kd25fcmd0LCBmcm90X2R3bl9yZ3QsIHJhdGlvX1gpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZnRsOiBmdGwsIGZ0cjogZnRyLFxyXG4gICAgICAgIGZkbDogZmRsLCBmZHI6IGZkcixcclxuICAgICAgICBidGw6IGJ0bCwgYnRyOiBidHIsXHJcbiAgICAgICAgYmRsOiBiZGwsIGJkcjogYmRyLFxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIF9fY2FsY19wYWRkaW5nX3h5KGZyb3Q6IFRfeHksIGJhY2s6IFRfeHksIHJhdGlvOiBudW1iZXIpOiBUX3h5IHtcclxuICAgICAgICAvLyDnt5rliIYoQXggKyBCID0geSnjga7mlrnnqIvlvI/jga7kv4LmlbDjgpLmsYLjgoHjgotcclxuICAgICAgICBjb25zdCBBID0gKGZyb3QueSAtIGJhY2sueSkgLyAoZnJvdC54IC0gYmFjay54KTtcclxuICAgICAgICBjb25zdCBCID0gIGZyb3QueSAtIEEgKiBmcm90Lng7XHJcbiAgICBcclxuICAgICAgICAvLyDjg5Hjg4fjgqPjg7PjgrDoqr/mlbTlvozjga5YWeW6p+aomeOBruioiOeul1xyXG4gICAgICAgIGNvbnN0IHBfZnJvdF94ID0gZnJvdC54ICsgKGJhY2sueCAtIGZyb3QueCkgKiByYXRpbztcclxuICAgICAgICBjb25zdCBwX2Zyb3RfeSA9IEEgKiBwX2Zyb3RfeCArIEI7XHJcblxyXG4gICAgICAgIHJldHVybiB7eDogcF9mcm90X3gsIHk6IHBfZnJvdF95fTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGRyb3dfY2VsbF9mbG9vcihcclxuICAgICAgICByZWN0X2Zyb3Q6IFRfV2FsbCwgXHJcbiAgICAgICAgcmVjdF9iYWNrOiBUX1dhbGwsIFxyXG4gICAgICAgIGZpbGw6IHN0cmluZyA9ICcjNjY2NmZmJywgXHJcbiAgICAgICAgbGluZTogc3RyaW5nID0gJyM5OTk5ZmYnXHJcbiAgICApOiB2b2lkIHtcclxuXHJcbiAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgdGw6IHt4OiByZWN0X2Zyb3QubWluX3gsIHk6IHJlY3RfZnJvdC5tYXhfeX0sXHJcbiAgICAgICAgdHI6IHt4OiByZWN0X2Zyb3QubWF4X3gsIHk6IHJlY3RfZnJvdC5tYXhfeX0sXHJcbiAgICAgICAgZHI6IHt4OiByZWN0X2JhY2subWF4X3gsIHk6IHJlY3RfYmFjay5tYXhfeX0sXHJcbiAgICAgICAgZGw6IHt4OiByZWN0X2JhY2subWluX3gsIHk6IHJlY3RfYmFjay5tYXhfeX1cclxuICAgIH1cclxuICAgIGRyb3dfY2VsbChyZWN0LCBmaWxsLCBsaW5lKTtcclxufVxyXG5mdW5jdGlvbiBkcm93X2NlbGxfY2VpbGluZyhcclxuICAgICAgICByZWN0X2Zyb3Q6IFRfV2FsbCwgXHJcbiAgICAgICAgcmVjdF9iYWNrOiBUX1dhbGwsIFxyXG4gICAgICAgIGZpbGw6IHN0cmluZyA9ICcjYWFhYWFhJywgXHJcbiAgICAgICAgbGluZTogc3RyaW5nID0gJyM5OTk5ZmYnXHJcbiAgICApOiB2b2lkIHtcclxuXHJcbiAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgdGw6IHt4OiByZWN0X2Zyb3QubWluX3gsIHk6IHJlY3RfZnJvdC5taW5feX0sXHJcbiAgICAgICAgdHI6IHt4OiByZWN0X2Zyb3QubWF4X3gsIHk6IHJlY3RfZnJvdC5taW5feX0sXHJcbiAgICAgICAgZHI6IHt4OiByZWN0X2JhY2subWF4X3gsIHk6IHJlY3RfYmFjay5taW5feX0sXHJcbiAgICAgICAgZGw6IHt4OiByZWN0X2JhY2subWluX3gsIHk6IHJlY3RfYmFjay5taW5feX1cclxuICAgIH1cclxuICAgIGRyb3dfY2VsbChyZWN0LCBmaWxsLCBsaW5lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJvd19jZWxsKHI6IFRfUmVjdCwgZmlsbDogc3RyaW5nfG51bGwsIGxpbmU6IHN0cmluZ3xudWxsKTogdm9pZCB7XHJcbiAgICBpZiAoQ19NYXplT2JqVmlldy5jb24zRCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBjb25zdCBjb24gPSBDX01hemVPYmpWaWV3LmNvbjNEO1xyXG5cclxuICAgIGNvbi5iZWdpblBhdGgoKTtcclxuICAgIGNvbi5tb3ZlVG8oci50bC54LCByLnRsLnkpO1xyXG4gICAgY29uLmxpbmVUbyhyLnRyLngsIHIudHIueSk7XHJcbiAgICBjb24ubGluZVRvKHIuZHIueCwgci5kci55KTtcclxuICAgIGNvbi5saW5lVG8oci5kbC54LCByLmRsLnkpO1xyXG4gICAgY29uLmNsb3NlUGF0aCgpO1xyXG5cclxuICAgIGlmIChmaWxsICE9IG51bGwpIHtcclxuICAgICAgICBjb24uZmlsbFN0eWxlICAgPSBmaWxsO1xyXG4gICAgICAgIGNvbi5maWxsKCk7XHJcbiAgICB9XHJcbiAgICBpZiAobGluZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbi5zdHJva2VTdHlsZSA9IGxpbmU7XHJcbiAgICAgICAgY29uLmxpbmVXaWR0aCAgID0gMTtcclxuICAgICAgICBjb24uc3Ryb2tlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX0xvY2F0aW9uLCBKU09OX0xvY2F0aW9uIH0gZnJvbSBcIi4vQ19Mb2NhdGlvblwiO1xyXG5pbXBvcnQgeyBJX0pTT05fVW5pcSB9ICAgICAgICAgICAgICAgZnJvbSBcIi4vQ19TYXZlRGF0YVwiO1xyXG5pbXBvcnQgeyBfZ2V0X3V1aWQgfSAgICAgICAgICAgICAgICAgZnJvbSBcIi4uL2RfdXRsL0ZfUmFuZFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX01vdmFibGVQb2ludCBleHRlbmRzIEpTT05fTG9jYXRpb24ge1xyXG4gICAgdW5pcV9pZD86ICBzdHJpbmcsXHJcbiAgICBjdXJfdXJsPzogIHN0cmluZyxcclxuICAgIHRlYW1fdWlkPzogc3RyaW5nLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X212cHRfaW5mbyhhOiBKU09OX01vdmFibGVQb2ludHx1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGFsZXJ0KFwiTXZQdCBJbmZvOlwiIFxyXG4gICAgICAgICsgXCJcXG51bmlxX2lkOiAgXCIgICsgKGEudW5pcV9pZCAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl91cmw6ICBcIiAgKyAoYS5jdXJfdXJsICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxudGVhbV91aWQ6IFwiICArIChhLnRlYW1fdWlkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sY2tkOiBcIiAgICAgICsgKGEua2luZCAgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxjbm06IFwiICAgICAgKyAoYS5uYW1lICAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubGNpZDogXCIgICAgICArIChhLmxvY191aWQgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfeDogXCIgICAgICsgKGEubG9jX3Bvcz8ueCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl95OiBcIiAgICAgKyAoYS5sb2NfcG9zPy55ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3o6IFwiICAgICArIChhLmxvY19wb3M/LnogPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfZDogXCIgICAgICsgKGEubG9jX3Bvcz8uZCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENfTW92YWJsZVBvaW50IGV4dGVuZHMgQ19Mb2NhdGlvbiBpbXBsZW1lbnRzIElfSlNPTl9VbmlxIHtcclxuICAgIHByb3RlY3RlZCB1bmlxX2lkOiAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIGN1cl91cmw6ICBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgdGVhbV91aWQ6IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoanNvbj86IEpTT05fTW92YWJsZVBvaW50KSB7XHJcbiAgICAgICAgc3VwZXIoanNvbik7XHJcbiAgICAgICAgdGhpcy51bmlxX2lkICA9ICdNdlBvaW50IycgKyBfZ2V0X3V1aWQoKTtcclxuICAgICAgICB0aGlzLmN1cl91cmwgID0gJyc7XHJcbiAgICAgICAgdGhpcy50ZWFtX3VpZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgaWYgKGpzb24gIT09IHVuZGVmaW5lZCAmJiBqc29uICE9PSBudWxsKSB0aGlzLmRlY29kZShqc29uKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB1aWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudW5pcV9pZH1cclxuICAgIHB1YmxpYyB1cmwoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY3VyX3VybH1cclxuICAgIHB1YmxpYyB0aWQoKTogc3RyaW5nfHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRlYW1fdWlkfVxyXG5cclxuICAgIHB1YmxpYyBuZXdfdWlkKCk6IHZvaWQge3RoaXMudW5pcV9pZCA9ICdNdlBvaW50IycgKyBfZ2V0X3V1aWQoKTt9XHJcbiAgICBwdWJsaWMgc2V0X3VybCh1cmw6IHN0cmluZyk6IHZvaWQgeyB0aGlzLmN1cl91cmwgID0gdXJsO31cclxuICAgIHB1YmxpYyBzZXRfdGlkKHRpZDogc3RyaW5nKTogdm9pZCB7IHRoaXMudGVhbV91aWQgPSB0aWQ7fVxyXG5cclxuICAgIHB1YmxpYyBjbG9uZSgpOiBDX01vdmFibGVQb2ludCB7XHJcbiAgICAgICAgY29uc3QgbXZwdCA9IG5ldyBDX01vdmFibGVQb2ludCh0aGlzLmVuY29kZSgpKTtcclxuICAgICAgICBtdnB0Lm5ld191aWQoKTtcclxuICAgICAgICByZXR1cm4gbXZwdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZnJvbUpTT04odHh0OiBzdHJpbmcpOiBDX01vdmFibGVQb2ludCB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaiA9IEpTT04ucGFyc2UodHh0KSBhcyBKU09OX01vdmFibGVQb2ludDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlKGopO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHRvSlNPTigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmVuY29kZSgpLCBudWxsLCBcIlxcdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTW92YWJsZVBvaW50IHtcclxuICAgICAgICBjb25zdCBqID0gc3VwZXIuZW5jb2RlKCkgYXMgSlNPTl9Nb3ZhYmxlUG9pbnQ7XHJcbiAgICAgICAgai51bmlxX2lkICA9IHRoaXMudW5pcV9pZDtcclxuICAgICAgICBqLmN1cl91cmwgID0gdGhpcy5jdXJfdXJsO1xyXG4gICAgICAgIGoudGVhbV91aWQgPSB0aGlzLnRlYW1fdWlkID8/ICcnO1xyXG4gICAgICAgIHJldHVybiBqO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShqPzogSlNPTl9Nb3ZhYmxlUG9pbnQpOiBDX01vdmFibGVQb2ludCB7XHJcbiAgICAgICAgc3VwZXIuZGVjb2RlKGopO1xyXG4gICAgICAgIGlmIChqID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChqLnVuaXFfaWQgICE9PSB1bmRlZmluZWQpIHRoaXMudW5pcV9pZCAgPSBqLnVuaXFfaWQ7XHJcbiAgICAgICAgaWYgKGouY3VyX3VybCAgIT09IHVuZGVmaW5lZCkgdGhpcy5jdXJfdXJsICA9IGouY3VyX3VybDtcclxuICAgICAgICBpZiAoai50ZWFtX3VpZCAhPT0gdW5kZWZpbmVkKSB0aGlzLnRlYW1fdWlkID0gai50ZWFtX3VpZDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudGVhbV91aWQgPT09ICcnKSB0aGlzLnRlYW1fdWlkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWxlcnQoKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJNdlB0IEluZm86XCIgXHJcbiAgICAgICAgICAgICsgXCJcXG51bmlxX2lkOiAgXCIgICsgKHRoaXMudW5pcV9pZCAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfdXJsOiAgXCIgICsgKHRoaXMuY3VyX3VybCAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG50ZWFtX3VpZDogXCIgICsgKHRoaXMudGVhbV91aWQgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sY2tkOiBcIiAgICAgICsgKHRoaXMubG9jX2tpbmQgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sY25tOiBcIiAgICAgICsgKHRoaXMubG9jX25hbWUgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sY2lkOiBcIiAgICAgICsgKHRoaXMubG9jX3VpZCAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfeDogXCIgICAgICsgKHRoaXMubG9jX3Bvcz8ueCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfeTogXCIgICAgICsgKHRoaXMubG9jX3Bvcz8ueSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfejogXCIgICAgICsgKHRoaXMubG9jX3Bvcz8ueiA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfZDogXCIgICAgICsgKHRoaXMubG9jX3Bvcz8uZCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBJX0pTT04sIEpTT05fQW55IH0gZnJvbSBcIi4vQ19TYXZlRGF0YVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX1BvaW50IGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgeD86IG51bWJlcixcclxuICAgIHk/OiBudW1iZXIsXHJcbiAgICB6PzogbnVtYmVyLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19Qb2ludCBpbXBsZW1lbnRzIElfSlNPTntcclxuICAgIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xyXG4gICAgcHVibGljIHo6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4PzogbnVtYmVyfENfUG9pbnR8SlNPTl9Qb2ludHx1bmRlZmluZWQsIHk/OiBudW1iZXIsIHo/OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB0aGlzLnkgPSB0aGlzLnogPSAtMztcclxuXHJcbiAgICAgICAgaWYgKHggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnggPSAwOyB0aGlzLnkgPSAwOyB0aGlzLnogPSAwO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgeSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgeiA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB4OyB0aGlzLnkgPSB5OyB0aGlzLnogPSB6O1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJvYmplY3RcIikgeyBcclxuICAgICAgICAgICAgaWYgKHggaW5zdGFuY2VvZiBDX1BvaW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSB4Lng7IHRoaXMueSA9IHgueTsgdGhpcy56ID0geC56O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWNvZGUoeCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy55ID0gdGhpcy56ID0gLTI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRfcCgpOiBDX1BvaW50IHtyZXR1cm4gbmV3IENfUG9pbnQodGhpcyl9IFxyXG4gICAgcHVibGljIHNldF9wKHA6IENfUG9pbnQpOiBDX1BvaW50fHVuZGVmaW5lZCB7XHJcbiAgICAgICAgdGhpcy54ID0gcC54OyB0aGlzLnkgPSBwLnk7IHRoaXMueiA9IHAuejtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNfZXhpc3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoeCA9PSB0aGlzLnggJiYgeSA9PSB0aGlzLnkgJiYgeiA9PSB0aGlzLnopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHdpdGhpbihwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChwLnggPT0gdGhpcy54ICYmIHAueSA9PSB0aGlzLnkgJiYgcC56ID09IHRoaXMueik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9Qb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHt4OiB0aGlzLngsIHk6IHRoaXMueSwgejogdGhpcy56fTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoYT86IEpTT05fUG9pbnQpOiBDX1BvaW50IHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAoYS54ID09PSB1bmRlZmluZWQgfHwgYS55ID09PSB1bmRlZmluZWQgfHwgYS56ID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHRoaXMueCA9IGEueDsgdGhpcy55ID0gYS55OyB0aGlzLnogPSBhLno7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX1BvaW50LCBKU09OX1BvaW50IH0gZnJvbSAnLi9DX1BvaW50JztcclxuaW1wb3J0IHtUX01ha2VFbnVtVHlwZX0gICAgICAgIGZyb20gXCIuLi9kX3V0bC9UX01ha2VFbnVtVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRfRGlyZWN0aW9uOntbZGlyOiBzdHJpbmddOiBudW1iZXJ9ID0ge1xyXG4gICAgTjogMCxcclxuICAgIEU6IDEsXHJcbiAgICBTOiAyLFxyXG4gICAgVzogMyxcclxuICAgIFg6IDk5XHJcbn0gYXMgY29uc3Q7XHJcbmV4cG9ydCB0eXBlIFRfRGlyZWN0aW9uID0gVF9NYWtlRW51bVR5cGU8dHlwZW9mIFRfRGlyZWN0aW9uPjtcclxuXHJcbmZ1bmN0aW9uIF9kaXJfa2V5KGRpcjogVF9EaXJlY3Rpb24gfCB1bmRlZmluZWQpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKFRfRGlyZWN0aW9uKS5maW5kKGtleSA9PiBUX0RpcmVjdGlvbltrZXldID09PSBkaXIpID8/IFwiPz8/P1wiO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX1BvaW50RGlyIGV4dGVuZHMgSlNPTl9Qb2ludCB7XHJcbiAgICBkPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfUERfaW5mbyhhOiBKU09OX1BvaW50RGlyfHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoXCJQb2ludERhdGEgSW5mbzpcIiBcclxuICAgICAgICArIFwiXFxueDogXCIgICAgICsgKGE/LnggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG55OiBcIiAgICAgKyAoYT8ueSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbno6IFwiICAgICArIChhPy56ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuZDogXCIgICAgICsgKGE/LmQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzICBDX1BvaW50RGlyIGV4dGVuZHMgQ19Qb2ludCB7XHJcbiAgICBwdWJsaWMgZDogVF9EaXJlY3Rpb247XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZD86IG51bWJlcnxUX0RpcmVjdGlvbnxDX1BvaW50RGlyfEpTT05fUG9pbnREaXIpIHtcclxuICAgICAgICBzdXBlcihkKTtcclxuICAgICAgICB0aGlzLmQgPSBUX0RpcmVjdGlvbi5YO1xyXG5cclxuICAgICAgICBpZiAoZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZCA9IGQgYXMgVF9EaXJlY3Rpb247XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChkIGluc3RhbmNlb2YgQ19Qb2ludERpcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kID0gZC5kIGFzIFRfRGlyZWN0aW9uO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWNvZGUoZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmQgPSBUX0RpcmVjdGlvbi5YO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfZF9tYl9uYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmQpIHtcclxuICAgICAgICAgICAgY2FzZSAwOiAgcmV0dXJuICfljJcnO1xyXG4gICAgICAgICAgICBjYXNlIDE6ICByZXR1cm4gJ+adsSc7XHJcbiAgICAgICAgICAgIGNhc2UgMjogIHJldHVybiAn5Y2XJztcclxuICAgICAgICAgICAgY2FzZSAzOiAgcmV0dXJuICfopb8nO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gJ+isjic7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldF9kKCk6IFRfRGlyZWN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9kKGQ6IFRfRGlyZWN0aW9uKTogQ19Qb2ludERpcnx1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICghKF9kaXJfa2V5KGQpIGluIFRfRGlyZWN0aW9uKSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmQgPSBkO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wZCgpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcGQoZDogQ19Qb2ludERpcnxKU09OX1BvaW50RGlyKTogQ19Qb2ludERpcnx1bmRlZmluZWQge1xyXG4gICAgICAgIGlmIChkIGluc3RhbmNlb2YgQ19Qb2ludERpcikge1xyXG4gICAgICAgICAgICBpZiAoIShfZGlyX2tleShkLmQpIGluIFRfRGlyZWN0aW9uKSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgc3VwZXIuc2V0X3AoZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZCA9IGQuZDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghKF9kaXJfa2V5KGQuZCkgaW4gVF9EaXJlY3Rpb24pKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZGVjb2RlKGQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9Qb2ludERpciB7XHJcbiAgICAgICAgY29uc3QgaiA9IHN1cGVyLmVuY29kZSgpIGFzIEpTT05fUG9pbnREaXI7XHJcbiAgICAgICAgai5kICAgICA9IHRoaXMuZCBhcyBudW1iZXI7XHJcbiAgICAgICAgcmV0dXJuIGo7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo/OiBKU09OX1BvaW50RGlyKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKCEoX2Rpcl9rZXkoai5kKSBpbiBUX0RpcmVjdGlvbikpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICBzdXBlci5kZWNvZGUoaik7XHJcbiAgICAgICAgdGhpcy5kID0gai5kIGFzIFRfRGlyZWN0aW9uO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWxlcnQoKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJQb2ludERhdGEgSW5mbzpcIiBcclxuICAgICAgICAgICAgKyBcIlxcbng6IFwiICAgICArICh0aGlzLnggPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxueTogXCIgICAgICsgKHRoaXMueSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG56OiBcIiAgICAgKyAodGhpcy56ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmQ6IFwiICAgICArICh0aGlzLmQgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImNsYXNzIENfUG9pbnQyRCB7XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gICAgcHVibGljIHk6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMueCAgPSB4O1xyXG4gICAgICAgIHRoaXMueSAgPSB5O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGlzX2V4aXN0KHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnggPT0geCkgJiYgKHRoaXMueSA9PSB5KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfUG9pbnRMaW5rMkQgZXh0ZW5kcyBDX1BvaW50MkQge1xyXG4gICAgcHVibGljIGRpOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgZGk6IG51bWJlciA9IC0xKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKHgsIHkpO1xyXG4gICAgICAgIHRoaXMuZGkgPSBkaTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgY2FzdChwOiBDX1BvaW50MkR8dW5kZWZpbmVkKTogQ19Qb2ludExpbmsyRHx1bmRlZmluZWQge1xyXG4gICAgICAgIGlmIChwPy54ID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKHA/LnkgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gcCBpbnN0YW5jZW9mIENfUG9pbnRMaW5rMkQgPyBwIDogbmV3IENfUG9pbnRMaW5rMkQocC54LCBwLnkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENfUG9pbnRTZXQyRCB7XHJcbiAgICBwdWJsaWMgc2V0OiBDX1BvaW50MkRbXSA9W107XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHB1YmxpYyBwdXNoKHA6IENfUG9pbnQyRCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0LnB1c2gocCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wb2ludCh4OiBudW1iZXIsIHk6IG51bWJlcik6IENfUG9pbnQyRHx1bmRlZmluZWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgcCBvZiB0aGlzLnNldCkge1xyXG4gICAgICAgICAgICBpZiAocD8uaXNfZXhpc3QoeCwgeSkpIHJldHVybiBwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkOyAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbW92ZShwOiBDX1BvaW50MkQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlbW92ZV94eShwLngsIHAueSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbW92ZV94eSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLnNldCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXRbaV0/LmlzX2V4aXN0KHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5zZXRbaV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldCA9IFsuLi50aGlzLnNldF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaXNfZXhpc3QoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHAgb2YgdGhpcy5zZXQpIGlmIChwPy5pc19leGlzdCh4LCB5KSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKlxyXG5jbGFzcyBQb2ludDNEIHtcclxuICAgIHB1YmxpYyBpbnQgJHg7XHJcbiAgICBwdWJsaWMgaW50ICR5O1xyXG4gICAgcHVibGljIGludCAkejtcclxuICAgIHB1YmxpYyBmdW5jdGlvbiBfX2NvbnN0cnVjdChpbnQgJHggPSAwLCBpbnQgJHkgPSAwLCBpbnQgJHogPSAwKVxyXG4gICAge1xyXG4gICAgICAgICR0aGlzLT54ICA9ICR4O1xyXG4gICAgICAgICR0aGlzLT55ICA9ICR5O1xyXG4gICAgICAgICR0aGlzLT56ICA9ICR6O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZ1bmN0aW9uIGlzX2V4aXN0KGludCAkeCwgaW50ICR5LCBpbnQgJHopOiBib29sIHtcclxuICAgICAgICByZXR1cm4gKCR0aGlzLT54ID09ICR4KSAmJiAoJHRoaXMtPnkgPT0gJHkpICYmICgkdGhpcy0+eiA9PSAkeik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZnVuY3Rpb24gd2l0aGluKFBvaW50M0QgJHApOiBib29sIHtcclxuICAgICAgICByZXR1cm4gJHRoaXMtPmlzX2V4aXN0KCRwLT54LCAkcC0+eSwgJHAtPnopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZ1bmN0aW9uIGVuY29kZSgpOiBhcnJheSB7XHJcbiAgICAgICAgJGEgPSBbXTtcclxuICAgICAgICAkYVsneCddID0gJHRoaXMtPng7XHJcbiAgICAgICAgJGFbJ3knXSA9ICR0aGlzLT55O1xyXG4gICAgICAgICRhWyd6J10gPSAkdGhpcy0+ejtcclxuXHJcbiAgICAgICAgcmV0dXJuICRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZ1bmN0aW9uIGRlY29kZShhcnJheSAkYSk6IFBvaW50M0Qge1xyXG4gICAgICAgIGlmICghaXNfbnVsbCgkYSkgJiYgaXNfYXJyYXkoJGEpKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGFycmF5X2tleV9leGlzdHMoJ3gnLCAkYSkgJiYgKGlzX251bWVyaWMoJGFbJ3gnXSkgJiYgJGFbJ3gnXSA+ICAwKVxyXG4gICAgICAgICAgICAmJiAgYXJyYXlfa2V5X2V4aXN0cygneScsICRhKSAmJiAoaXNfbnVtZXJpYygkYVsneSddKSAmJiAkYVsneSddID4gIDApXHJcbiAgICAgICAgICAgICYmICBhcnJheV9rZXlfZXhpc3RzKCd6JywgJGEpICYmIChpc19udW1lcmljKCRhWyd6J10pICYmICRhWyd6J10gPj0gMClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy0+eCA9ICRhWyd4J107XHJcbiAgICAgICAgICAgICAgICAkdGhpcy0+eSA9ICRhWyd5J107XHJcbiAgICAgICAgICAgICAgICAkdGhpcy0+eiA9ICRhWyd6J107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICR0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmdW5jdGlvbiBkZWNvZGVfYW5kX25ldyhhcnJheSAkYSk6IFBvaW50M0Qge1xyXG4gICAgICAgIGlmICghaXNfbnVsbCgkYSkgJiYgaXNfYXJyYXkoJGEpKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGFycmF5X2tleV9leGlzdHMoJ3gnLCAkYSkgJiYgKGlzX251bWVyaWMoJGFbJ3gnXSkgJiYgJGFbJ3gnXSA+ICAwKVxyXG4gICAgICAgICAgICAmJiAgYXJyYXlfa2V5X2V4aXN0cygneScsICRhKSAmJiAoaXNfbnVtZXJpYygkYVsneSddKSAmJiAkYVsneSddID4gIDApXHJcbiAgICAgICAgICAgICYmICBhcnJheV9rZXlfZXhpc3RzKCd6JywgJGEpICYmIChpc19udW1lcmljKCRhWyd6J10pICYmICRhWyd6J10gPj0gMClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50M0QoJGFbJ3gnXSwgJGFbJ3knXSwgJGFbJ3onXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludDNEKC0xLCAtMSwgLTEpO1xyXG4gICAgfVxyXG59XHJcbiovXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgX21heCwgX21pbiB9ICAgICAgICAgICBmcm9tIFwiLi4vZF91dGwvRl9NYXRoXCI7XHJcbmltcG9ydCB7IENfUG9pbnQsIEpTT05fUG9pbnQgfSAgZnJvbSBcIi4vQ19Qb2ludFwiO1xyXG5pbXBvcnQgeyBKU09OX0FueSB9ICAgICAgICAgICAgIGZyb20gXCIuL0NfU2F2ZURhdGFcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9SYW5nZSBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIG1pbj86ICAgSlNPTl9Qb2ludCwgXHJcbiAgICBtYXg/OiAgIEpTT05fUG9pbnQsIFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19SYW5nZSB7XHJcbiAgICBwcm90ZWN0ZWQgbWluOiBDX1BvaW50O1xyXG4gICAgcHJvdGVjdGVkIG1heDogQ19Qb2ludDtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwMTogQ19Qb2ludCwgcDI6IENfUG9pbnQpIHtcclxuICAgICAgICB0aGlzLm1pbiAgPSBuZXcgQ19Qb2ludCgwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLm1heCAgPSBuZXcgQ19Qb2ludCgwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLl9pbml0KHAxLCBwMik7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX2luaXQocDE6IENfUG9pbnQsIHAyOiBDX1BvaW50KTogQ19SYW5nZSB7XHJcbiAgICAgICAgY29uc3QgbWluX3ggPSBfbWluKFtwMS54LCBwMi54XSk7XHJcbiAgICAgICAgY29uc3QgbWF4X3ggPSBfbWF4KFtwMS54LCBwMi54XSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1pbl95ID0gX21pbihbcDEueSwgcDIueV0pO1xyXG4gICAgICAgIGNvbnN0IG1heF95ID0gX21heChbcDEueSwgcDIueV0pO1xyXG5cclxuICAgICAgICBjb25zdCBtaW5feiA9IF9taW4oW3AxLnosIHAyLnpdKTtcclxuICAgICAgICBjb25zdCBtYXhfeiA9IF9tYXgoW3AxLnosIHAyLnpdKTtcclxuXHJcbiAgICAgICAgdGhpcy5taW4gID0gbmV3IENfUG9pbnQobWluX3gsIG1pbl95LCBtaW5feik7XHJcbiAgICAgICAgdGhpcy5tYXggID0gbmV3IENfUG9pbnQobWF4X3gsIG1heF95LCBtYXhfeik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3aXRoaW4oYTogQ19SYW5nZXxDX1BvaW50fG51bWJlciwgeT86IG51bWJlciwgej86IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgeSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgeiA9PT0gXCJudW1iZXJcIikgeyBcclxuICAgICAgICAgICAgaWYgKCBhIDwgdGhpcy5taW4ueCB8fCBhID4gdGhpcy5tYXgueCApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCB5IDwgdGhpcy5taW4ueSB8fCB5ID4gdGhpcy5tYXgueSApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCB6IDwgdGhpcy5taW4ueiB8fCB6ID4gdGhpcy5tYXgueiApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJvYmplY3RcIiAmJiBhIGluc3RhbmNlb2YgQ19Qb2ludCkgeyBcclxuICAgICAgICAgICAgY29uc3QgcCA9IGEgYXMgQ19Qb2ludDtcclxuICAgICAgICAgICAgaWYgKCBwLnggPCB0aGlzLm1pbi54IHx8IHAueCA+IHRoaXMubWF4LnggKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggcC55IDwgdGhpcy5taW4ueSB8fCBwLnkgPiB0aGlzLm1heC55ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIHAueiA8IHRoaXMubWluLnogfHwgcC56ID4gdGhpcy5tYXgueiApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJvYmplY3RcIiAmJiBhIGluc3RhbmNlb2YgQ19SYW5nZSkge1xyXG4gICAgICAgICAgICBjb25zdCBwID0gYSBhcyBDX1JhbmdlO1xyXG4gICAgICAgICAgICBpZiAoIHAubWluX3goKSA8IHRoaXMubWluLnggfHwgcC5tYXhfeCgpID4gdGhpcy5tYXgueCApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCBwLm1pbl95KCkgPCB0aGlzLm1pbi55IHx8IHAubWF4X3koKSA+IHRoaXMubWF4LnkgKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggcC5taW5feigpIDwgdGhpcy5taW4ueiB8fCBwLm1heF96KCkgPiB0aGlzLm1heC56ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG1pbl94KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1pbi54O31cclxuICAgIHB1YmxpYyBtYXhfeCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tYXgueDt9XHJcbiAgICBwdWJsaWMgbWluX3koKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWluLnk7fVxyXG4gICAgcHVibGljIG1heF95KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1heC55O31cclxuICAgIHB1YmxpYyBtaW5feigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5taW4uejt9XHJcbiAgICBwdWJsaWMgbWF4X3ooKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWF4Lno7fVxyXG4gICAgcHVibGljIHNpemVfeCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heC54IC0gdGhpcy5taW4ueCArIDE7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIHNpemVfeSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heC55IC0gdGhpcy5taW4ueSArIDE7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIHNpemVfeigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heC56IC0gdGhpcy5taW4ueiArIDE7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIGRvX2FsbF94eXooZm46ICh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKSA9PiBib29sZWFuKSB7XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IHRoaXMubWluLno7IHogPD0gdGhpcy5tYXguejsgeisrICkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gdGhpcy5taW4ueTsgeSA8PSB0aGlzLm1heC55OyB5KysgKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gdGhpcy5taW4ueDsgeSA8PSB0aGlzLm1heC54OyB4KysgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmbih4LCB5LCB6KSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRvX2FsbF9wKGZuOiAocDogQ19Qb2ludCkgPT4gYm9vbGVhbikge1xyXG4gICAgICAgIGZvciAodmFyIHogPSB0aGlzLm1pbi56OyB6IDw9IHRoaXMubWF4Lno7IHorKyApIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IHRoaXMubWluLnk7IHkgPD0gdGhpcy5tYXgueTsgeSsrICkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IHRoaXMubWluLng7IHkgPD0gdGhpcy5tYXgueDsgeCsrICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZm4obmV3IENfUG9pbnQoeCwgeSwgeikpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fUmFuZ2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1pbjogdGhpcy5taW4uZW5jb2RlKCksXHJcbiAgICAgICAgICAgIG1heDogdGhpcy5taW4uZW5jb2RlKCksXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShqOiBKU09OX1JhbmdlKTogQ19SYW5nZSB7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChqLm1pbiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAoai5tYXggPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgY29uc3QgcDEgPSBuZXcgQ19Qb2ludChqLm1pbik7XHJcbiAgICAgICAgY29uc3QgcDIgPSBuZXcgQ19Qb2ludChqLm1heCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luaXQocDEsIHAyKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX01hemUsIEpTT05fTWF6ZSwgYWxlcnRfbWF6ZV9pbmZvICB9ICBmcm9tIFwiLi9DX01hemVcIjtcclxuaW1wb3J0IHsgQ19HdWlsZCwgSlNPTl9HdWlsZCwgYWxlcnRfZ3VsZF9pbmZvIH0gZnJvbSBcIi4vQ19HdWlsZFwiO1xyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCwgSlNPTl9Nb3ZhYmxlUG9pbnQsIGFsZXJ0X212cHRfaW5mbyB9IGZyb20gXCIuL0NfTW92YWJsZVBvaW50XCI7XHJcbmltcG9ydCB7IENfVGVhbSwgSlNPTl9UZWFtLCBhbGVydF90ZWFtX2luZm8gIH0gIGZyb20gXCIuL0NfVGVhbVwiO1xyXG5cclxuLy8g44K144O844OQ44O85YG044Go44KE44KK44Go44KK44GZ44KLSlNPTuW9ouW8j+ODh+ODvOOCv+OBruODhuODs+ODl+ODrOODvOODiFxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fQW55IHtcclxuICAgIFtrZXk6IHN0cmluZ106IGFueVxyXG59XHJcblxyXG4vLyDjgrXjg7zjg5Djg7zlgbTjgajjgoTjgorjgajjgorjgZnjgovjgq/jg6njgrnjgavlv4XopoHjgarjg6Hjgr3jg4Pjg4lcclxuZXhwb3J0IGludGVyZmFjZSBJX0pTT04ge1xyXG4gICAgZW5jb2RlOiAoKT0+SlNPTl9BbnksXHJcbiAgICBkZWNvZGU6IChqOkpTT05fQW55KT0+SV9KU09OLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElfSlNPTl9VbmlxIGV4dGVuZHMgSV9KU09OIHtcclxuICAgIHVpZDogKCk9PnN0cmluZyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJX0Fic3RyYWN0IHtcclxuICAgIG5ld09iajogKGo/OkpTT05fQW55KT0+SV9BYnN0cmFjdHx1bmRlZmluZWQsXHJcbiAgICBlbmNvZGU6ICgpPT5KU09OX0FueSxcclxuLy8gIHN0YXRpYyBkZWNvZGU6IChqOkpTT05fQW55KT0+SV9KU09OLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElfSlNPTl9DbGFzcyB7XHJcbiAgICBuZXc6IChqPzogSlNPTl9BbnkpPT5JX0pTT04sXHJcbn1cclxuXHJcbi8vIOOCteODvOODkOODvOWBtOOBqOOChOOCiuWPluOCiuOBmeOCi+mam+OBq+iHqui6q+OCkuaWh+Wtl+WIl+WMluOBmeOCi+OCr+ODqeOCueOBruODoeOCveODg+ODiVxyXG5leHBvcnQgaW50ZXJmYWNlIElfSlNPTlZhbHVlIGV4dGVuZHMgSV9KU09Oe1xyXG4gICAgZnJvbUpTT046ICgpPT52b2lkLFxyXG4gICAgdG9KU09OOiAgICgpPT52b2lkLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fU2F2ZURhdGEgZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBzYXZlX2lkPzogICBudW1iZXIsXHJcbiAgICBwbGF5ZXJfaWQ/OiBudW1iZXIsIFxyXG4gICAgdW5pcV9ubz86ICAgbnVtYmVyLFxyXG4gICAgdGl0bGU/OiAgICAgc3RyaW5nLFxyXG4gICAgZGV0YWlsPzogICAgc3RyaW5nLFxyXG4gICAgcG9pbnQ/OiAgICAgc3RyaW5nLFxyXG4gICAgYXV0b19tb2RlPzogc3RyaW5nLFxyXG4gICAgaXNfYWN0aXZlPzogc3RyaW5nLFxyXG4gICAgaXNfZGVsZXRlPzogc3RyaW5nLFxyXG4gICAgc2F2ZV90aW1lPzogc3RyaW5nLFxyXG4gICAgbXlwb3M/OiAgICAgSlNPTl9Nb3ZhYmxlUG9pbnQsXHJcblxyXG4gICAgYWxsX212cHQ/OiAgSlNPTl9Nb3ZhYmxlUG9pbnRbXSxcclxuICAgIGFsbF9tYXplPzogIEpTT05fTWF6ZVtdLFxyXG4gICAgYWxsX3RlYW0/OiAgSlNPTl9UZWFtW10sXHJcbiAgICBhbGxfZ3VsZD86ICBKU09OX0d1aWxkW10sXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9zYXZlX2luZm8oYTogSlNPTl9TYXZlRGF0YXx1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGFsZXJ0KFwiU2F2ZSBJbmZvOlwiIFxyXG4gICAgICAgICsgXCJcXG5zYXZlX2lkOiAgICBcIiArIChhLnNhdmVfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnBsYXllcl9pZDogIFwiICsgKGEucGxheWVyX2lkID8/ICc/JylcclxuICAgICAgICArIFwiXFxudW5pcV9ubzogICAgXCIgKyAoYS51bmlxX25vICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG50aXRsZTogICAgICBcIiArIChhLnRpdGxlICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmRldGFpbDogICAgIFwiICsgKGEuZGV0YWlsICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxucG9pbnQ6ICAgICAgXCIgKyAoYS5wb2ludCAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5hdXRvX21vZGU6ICBcIiArIChhLmF1dG9fbW9kZSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmlzX2FjdGl2ZTogIFwiICsgKGEuaXNfYWN0aXZlID8/ICc/JylcclxuICAgICAgICArIFwiXFxuaXNfZGVsZXRlOiAgXCIgKyAoYS5pc19kZWxldGUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5teXVybDogICAgICBcIiArIChhLm15cG9zPy5jdXJfdXJsICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG50ZWFtX3VpZDogICBcIiArIChhLm15cG9zPy50ZWFtX3VpZCAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sb2Nfa2luZDogICBcIiArIChhLm15cG9zPy5raW5kICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sb2NfbmFtZTogICBcIiArIChhLm15cG9zPy5uYW1lICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sb2NfdWlkOiAgICBcIiArIChhLm15cG9zPy5sb2NfdWlkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5tdnB0X2NvdW50OiBcIiArIChhLmFsbF9tdnB0Py5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5tYXplX2NvdW50OiBcIiArIChhLmFsbF9tYXplPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5ndWxkX2NvdW50OiBcIiArIChhLmFsbF9ndWxkPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG50ZWFtX2NvdW50OiBcIiArIChhLmFsbF90ZWFtPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X3NhdmVfZGV0YWlsKGE6IEpTT05fU2F2ZURhdGF8dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgdHJ5IHsgXHJcbi8vICAgICAgICBhbGVydChcIlNhdmUgRGV0YWlsKG12cHQpOlwiKTtcclxuICAgICAgICBmb3IgKGNvbnN0IG12cHQgb2YgYS5hbGxfbXZwdD8/W10pIGFsZXJ0X212cHRfaW5mbyhtdnB0KTtcclxuICAgIH0gY2F0Y2ggKGVycikge2FsZXJ0KCdhbGVydCBtdnB0IGVycm9yOiAnICsgZXJyKX1cclxuXHJcbiAgICB0cnkgeyBcclxuLy8gICAgICAgIGFsZXJ0KFwiU2F2ZSBEZXRhaWwodGVhbSk6XCIpO1xyXG4gICAgICAgIGZvciAoY29uc3QgdGVhbSBvZiBhLmFsbF90ZWFtPz9bXSkgYWxlcnRfdGVhbV9pbmZvKHRlYW0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7YWxlcnQoJ2FsZXJ0IHRlYW0gZXJyb3I6ICcgKyBlcnIpfVxyXG5cclxuICAgIHRyeSB7IFxyXG4vLyAgICAgICAgYWxlcnQoXCJTYXZlIERldGFpbChtYXplKTpcIik7XHJcbiAgICAgICAgZm9yIChjb25zdCBtYXplIG9mIGEuYWxsX21hemU/P1tdKSBhbGVydF9tYXplX2luZm8obWF6ZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHthbGVydCgnYWxlcnQgbWF6ZSBlcnJvcjogJyArIGVycil9XHJcblxyXG4gICAgdHJ5IHsgXHJcbi8vICAgICAgICBhbGVydChcIlNhdmUgRGV0YWlsKGd1bGQpOlwiKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGd1bGQgb2YgYS5hbGxfZ3VsZD8/W10pIGFsZXJ0X2d1bGRfaW5mbyhndWxkKTtcclxuICAgIH0gY2F0Y2ggKGVycikge2FsZXJ0KCdhbGVydCBndWxkIGVycm9yOiAnICsgZXJyKX1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1NhdmVEYXRhIGltcGxlbWVudHMgSV9KU09OIHtcclxuICAgIHB1YmxpYyBzYXZlX2lkOiAgIG51bWJlcjtcclxuICAgIHB1YmxpYyBwbGF5ZXJfaWQ6IG51bWJlcjsgXHJcbiAgICBwdWJsaWMgdW5pcV9ubzogICBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGl0bGU6ICAgICBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGV0YWlsOiAgICBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcG9pbnQ6ICAgICBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYXV0b19tb2RlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlzX2FjdGl2ZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc19kZWxldGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgc2F2ZV90aW1lOiBEYXRlO1xyXG4gICAgcHVibGljIG15cG9zOiAgICAgQ19Nb3ZhYmxlUG9pbnQ7XHJcblxyXG4gICAgcHVibGljIGFsbF9tdnB0OiAge1t1aWQ6IHN0cmluZ106IENfTW92YWJsZVBvaW50fTtcclxuICAgIHB1YmxpYyBhbGxfbWF6ZTogIHtbdWlkOiBzdHJpbmddOiBDX01hemV9O1xyXG4gICAgcHVibGljIGFsbF90ZWFtOiAge1t1aWQ6IHN0cmluZ106IENfVGVhbX07XHJcbiAgICBwdWJsaWMgYWxsX2d1bGQ6ICB7W3VpZDogc3RyaW5nXTogQ19HdWlsZH07XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGE/OiBKU09OX1NhdmVEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5zYXZlX2lkICAgPSAtMTtcclxuICAgICAgICB0aGlzLnBsYXllcl9pZCA9IC0xOyBcclxuICAgICAgICB0aGlzLnVuaXFfbm8gICA9IC0xO1xyXG4gICAgICAgIHRoaXMudGl0bGUgICAgID0gJyc7XHJcbiAgICAgICAgdGhpcy5kZXRhaWwgICAgPSAnJztcclxuICAgICAgICB0aGlzLnBvaW50ICAgICA9ICcnO1xyXG4gICAgICAgIHRoaXMuYXV0b19tb2RlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc19hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNfZGVsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zYXZlX3RpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHRoaXMubXlwb3MgICAgID0gbmV3IENfTW92YWJsZVBvaW50KCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWxsX212cHQgID0ge307XHJcbiAgICAgICAgdGhpcy5hbGxfbWF6ZSAgPSB7fTtcclxuICAgICAgICB0aGlzLmFsbF90ZWFtICA9IHt9XHJcbiAgICAgICAgdGhpcy5hbGxfZ3VsZCAgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBuZXcoYT86IEpTT05fU2F2ZURhdGEpOiBDX1NhdmVEYXRhIHtcclxuICAgICAgICByZXR1cm4gbmV3IENfU2F2ZURhdGEoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1NhdmVEYXRhIHtcclxuICAgICAgICBsZXQgc2F2ZV9kYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc2F2ZV9kYXRlID0gdGhpcy5zYXZlX3RpbWUudG9JU09TdHJpbmcoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgc2F2ZV9kYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNhdmVfaWQ6ICAgdGhpcy5zYXZlX2lkLCBcclxuICAgICAgICAgICAgICAgIHBsYXllcl9pZDogdGhpcy5wbGF5ZXJfaWQsICBcclxuICAgICAgICAgICAgICAgIHVuaXFfbm86ICAgdGhpcy51bmlxX25vLCBcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAgICAgdGhpcy50aXRsZSwgXHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6ICAgIHRoaXMuZGV0YWlsLCBcclxuICAgICAgICAgICAgICAgIHBvaW50OiAgICAgdGhpcy5wb2ludCwgXHJcbiAgICAgICAgICAgICAgICBhdXRvX21vZGU6IHRoaXMuYXV0b19tb2RlID8gJzEnIDogJzAnLCBcclxuICAgICAgICAgICAgICAgIGlzX2FjdGl2ZTogdGhpcy5pc19hY3RpdmUgPyAnMScgOiAnMCcsIFxyXG4gICAgICAgICAgICAgICAgaXNfZGVsZXRlOiB0aGlzLmlzX2RlbGV0ZSA/ICcxJyA6ICcwJywgXHJcbiAgICAgICAgICAgICAgICBzYXZlX3RpbWU6IHNhdmVfZGF0ZSwgXHJcbiAgICAgICAgICAgICAgICBteXBvczogICAgIHRoaXMubXlwb3MuZW5jb2RlKCksXHJcblxyXG4gICAgICAgICAgICAgICAgYWxsX212cHQ6ICB0aGlzLl9lbmNvZGVfYWxsX2RhdGEodGhpcy5hbGxfbXZwdCksIFxyXG4gICAgICAgICAgICAgICAgYWxsX21hemU6ICB0aGlzLl9lbmNvZGVfYWxsX2RhdGEodGhpcy5hbGxfbWF6ZSksIFxyXG4gICAgICAgICAgICAgICAgYWxsX3RlYW06ICB0aGlzLl9lbmNvZGVfYWxsX2RhdGEodGhpcy5hbGxfdGVhbSksIFxyXG4gICAgICAgICAgICAgICAgYWxsX2d1bGQ6ICB0aGlzLl9lbmNvZGVfYWxsX2RhdGEodGhpcy5hbGxfZ3VsZCksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1NhdmVEYXRhIEVuY29kZSBFcnJvcjogJyArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX2VuY29kZV9hbGxfZGF0YShhbGxfZGF0YToge1t1aWQ6c3RyaW5nXTpJX0pTT059KTogSlNPTl9BbnlbXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX0pTT046IEpTT05fQW55W10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIGFsbF9kYXRhKSBhbGxfSlNPTi5wdXNoKGFsbF9kYXRhW2ldLmVuY29kZSgpKTtcclxuICAgICAgICByZXR1cm4gYWxsX0pTT047XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlY29kZShzOiBKU09OX1NhdmVEYXRhKTogQ19TYXZlRGF0YSB7XHJcbiAgICAgICAgdGhpcy5zYXZlX2lkICAgPSBzLnNhdmVfaWQgICA/PyB0aGlzLnNhdmVfaWQ7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJfaWQgPSBzLnBsYXllcl9pZCA/PyB0aGlzLnBsYXllcl9pZDsgXHJcbiAgICAgICAgdGhpcy51bmlxX25vICAgPSBzLnVuaXFfbm8gICA/PyB0aGlzLnVuaXFfbm87XHJcbiAgICAgICAgdGhpcy50aXRsZSAgICAgPSBzLnRpdGxlICAgICA/PyB0aGlzLnRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGV0YWlsICAgID0gcy5kZXRhaWwgICAgPz8gdGhpcy5kZXRhaWw7XHJcbiAgICAgICAgdGhpcy5wb2ludCAgICAgPSBzLnBvaW50ICAgICA/PyB0aGlzLnBvaW50O1xyXG4gICAgICAgIGlmIChzLmF1dG9fbW9kZSA9PT0gdW5kZWZpbmVkKSB0aGlzLmF1dG9fbW9kZTsgZWxzZSBzLmF1dG9fbW9kZSAhPT0gJzAnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGlmIChzLmlzX2FjdGl2ZSA9PT0gdW5kZWZpbmVkKSB0aGlzLmlzX2FjdGl2ZTsgZWxzZSBzLmlzX2FjdGl2ZSAhPT0gJzAnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGlmIChzLmlzX2RlbGV0ZSA9PT0gdW5kZWZpbmVkKSB0aGlzLmlzX2RlbGV0ZTsgZWxzZSBzLmlzX2RlbGV0ZSAhPT0gJzAnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGlmIChzLnNhdmVfdGltZSAhPT0gdW5kZWZpbmVkKSB0aGlzLnNhdmVfdGltZSA9IG5ldyBEYXRlKHMuc2F2ZV90aW1lKTsgXHJcbiAgICAgICAgaWYgKHMubXlwb3MgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlwb3MuZGVjb2RlKHMubXlwb3MpOyBcclxuXHJcbiAgICAgICAgaWYgKHMuYWxsX212cHQgICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxfbXZwdCA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGpzb25fbXZwdCBvZiBzLmFsbF9tdnB0KSB7XHJcbiAgICAgICAgICAgICAgICAgY29uc3QgbXZwdCA9IChuZXcgQ19Nb3ZhYmxlUG9pbnQoKSkuZGVjb2RlKGpzb25fbXZwdCk7IFxyXG4gICAgICAgICAgICAgICAgIHRoaXMuYWxsX212cHRbbXZwdC51aWQoKV0gPSBtdnB0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZiAocy5hbGxfbWF6ZSAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsbF9tYXplID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl9tYXplIG9mIHMuYWxsX21hemUpIHtcclxuICAgICAgICAgICAgICAgICBjb25zdCBtYXplID0gKG5ldyBDX01hemUoKSkuZGVjb2RlKGpzb25fbWF6ZSk7IFxyXG4gICAgICAgICAgICAgICAgIHRoaXMuYWxsX21hemVbbWF6ZS51aWQoKV0gPSBtYXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZiAocy5hbGxfdGVhbSAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsbF90ZWFtID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl90ZWFtIG9mIHMuYWxsX3RlYW0pIHtcclxuICAgICAgICAgICAgICAgICBjb25zdCB0ZWFtID0gKG5ldyBDX1RlYW0oKSkuZGVjb2RlKGpzb25fdGVhbSk7IFxyXG4gICAgICAgICAgICAgICAgIHRoaXMuYWxsX3RlYW1bdGVhbS51aWQoKV0gPSB0ZWFtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZiAocy5hbGxfZ3VsZCAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsbF9ndWxkID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl9ndWxkIG9mIHMuYWxsX2d1bGQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGd1bGQgPSAobmV3IENfR3VpbGQoKSkuZGVjb2RlKGpzb25fZ3VsZCk7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxfZ3VsZFtndWxkLnVpZCgpXSA9IGd1bGQ7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIlNhdmUgSW5mbzpcIiBcclxuICAgICAgICAgICAgKyBcIlxcbnNhdmVfaWQ6ICAgIFwiICsgKHRoaXMuc2F2ZV9pZCAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnBsYXllcl9pZDogIFwiICsgKHRoaXMucGxheWVyX2lkID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnVuaXFfbm86ICAgIFwiICsgKHRoaXMudW5pcV9ubyAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnRpdGxlOiAgICAgIFwiICsgKHRoaXMudGl0bGUgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmRldGFpbDogICAgIFwiICsgKHRoaXMuZGV0YWlsICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnBvaW50OiAgICAgIFwiICsgKHRoaXMucG9pbnQgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmF1dG9fbW9kZTogIFwiICsgKHRoaXMuYXV0b19tb2RlPydZJzonTicpXHJcbiAgICAgICAgICAgICsgXCJcXG5pc19hY3RpdmU6ICBcIiArICh0aGlzLmlzX2FjdGl2ZT8nWSc6J04nKVxyXG4gICAgICAgICAgICArIFwiXFxuaXNfZGVsZXRlOiAgXCIgKyAodGhpcy5pc19kZWxldGU/J1knOidOJylcclxuICAgICAgICAgICAgKyBcIlxcbm15dXJsOiAgICAgIFwiICsgKHRoaXMubXlwb3MudXJsKCkgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG50ZWFtX3VpZDogICBcIiArICh0aGlzLm15cG9zLnRpZCgpICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubG9jX2tpbmQ6ICAgXCIgKyAodGhpcy5teXBvcy5nZXRfbGNrZCgpID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxvY19uYW1lOiAgIFwiICsgKHRoaXMubXlwb3MuZ2V0X25hbWUoKSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sb2NfdWlkOiAgICBcIiArICh0aGlzLm15cG9zLmdldF91aWQoKSAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubXZwdF9jb3VudDogXCIgKyAodGhpcy5hbGxfbXZwdD8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbm1hemVfY291bnQ6IFwiICsgKHRoaXMuYWxsX21hemU/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5ndWxkX2NvdW50OiBcIiArICh0aGlzLmFsbF9ndWxkPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudGVhbV9jb3VudDogXCIgKyAodGhpcy5hbGxfdGVhbT8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWxlcnRfZGV0YWlsKCk6IHZvaWQge1xyXG4gICAgICAgIHRyeSB7IFxyXG4vLyAgICAgICAgICAgIGFsZXJ0KFwiU2F2ZSBEZXRhaWwobXZwdCk6XCIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHRoaXMuYWxsX212cHQpIHRoaXMuYWxsX212cHRbaWldLmFsZXJ0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7YWxlcnQoJ2FsZXJ0IG12cHQgZXJyb3I6ICcgKyBlcnIpfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB0cnkgeyBcclxuLy8gICAgICAgICAgICBhbGVydChcIlNhdmUgRGV0YWlsKHRlYW0pOlwiKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpaSBpbiB0aGlzLmFsbF90ZWFtKSB0aGlzLmFsbF90ZWFtW2lpXS5hbGVydCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge2FsZXJ0KCdhbGVydCB0ZWFtIGVycm9yOiAnICsgZXJyKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgdHJ5IHsgXHJcbi8vICAgICAgICAgICAgYWxlcnQoXCJTYXZlIERldGFpbChtYXplKTpcIik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWkgaW4gdGhpcy5hbGxfbWF6ZSkgdGhpcy5hbGxfbWF6ZVtpaV0uYWxlcnQoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHthbGVydCgnYWxlcnQgbWF6ZSBlcnJvcjogJyArIGVycil9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHRyeSB7IFxyXG4vLyAgICAgICAgICAgIGFsZXJ0KFwiU2F2ZSBEZXRhaWwoZ3VsZCk6XCIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHRoaXMuYWxsX2d1bGQpIHRoaXMuYWxsX2d1bGRbaWldLmFsZXJ0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7YWxlcnQoJ2FsZXJ0IGd1bGQgZXJyb3I6ICcgKyBlcnIpfVxyXG4gICAgICAgICAgICBcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfUG9pbnQgfSAgICAgICAgICAgICAgIGZyb20gXCIuL0NfUG9pbnRcIjtcclxuaW1wb3J0IHsgQ19Qb2ludERpciB9ICAgICAgICAgICAgZnJvbSAnLi9DX1BvaW50RGlyJztcclxuaW1wb3J0IHsgQ19Nb3ZhYmxlUG9pbnQgfSAgICAgICAgZnJvbSBcIi4vQ19Nb3ZhYmxlUG9pbnRcIjtcclxuaW1wb3J0IHsgQ19XYWxrZXIsIEpTT05fV2Fsa2VyIH0gZnJvbSBcIi4vQ19XYWxrZXJcIjtcclxuaW1wb3J0IHsgQ19Hb29kcywgIEpTT05fR29vZHMgfSAgZnJvbSAnLi9DX0dvb2RzJztcclxuaW1wb3J0IHsgQ19IZXJvLCBKU09OX0hlcm8gfSAgICAgZnJvbSBcIi4vQ19IZXJvXCI7XHJcbmltcG9ydCB7IElfTWF6ZU9iaiB9ICAgICAgICAgICAgIGZyb20gXCIuL0NfTWF6ZU9ialwiO1xyXG5pbXBvcnQgeyBKU09OX0FueSB9ICAgICAgICAgICAgICBmcm9tIFwiLi9DX1NhdmVEYXRhXCI7XHJcbmltcG9ydCB7IENfQ3VycmVudFRlYW1WaWV3IH0gICAgIGZyb20gXCIuL0NfVGVhbVZpZXdcIjtcclxuaW1wb3J0IHsgQ19NYXplT2JqVmlldywgSV9NYXplT2JqVmlldywgSlNPTl9NYXplT2JqVmlldyB9ICBmcm9tIFwiLi9DX01hemVPYmpWaWV3XCI7XHJcbmltcG9ydCB7IF9nZXRfdXVpZCB9ICAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuaW1wb3J0IHsgQ19Hb29kc0l0ZW0sIFRfR29vZHNLaW5kIH0gZnJvbSBcIi4vQ19Hb29kc0l0ZW1cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9UZWFtIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgaWQ/OiAgICAgICAgbnVtYmVyLCBcclxuICAgIHVuaXFfaWQ/OiAgIHN0cmluZywgXHJcbiAgICBzYXZlX2lkPzogICBudW1iZXIsIFxyXG4gICAgbmFtZT86ICAgICAgc3RyaW5nLCBcclxuICAgIGxvY2F0ZT86ICAgIEpTT05fV2Fsa2VyLFxyXG4gICAgZ29vZHM/OiAgICAgSlNPTl9Hb29kcyxcclxuICAgIGhlcm9lcz86ICAgIEpTT05fSGVyb1tdLCBcclxuICAgIG1vdGlvbj86ICAgIHN0cmluZyxcclxuICAgIHZpZXc/OiAgICAgIEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfdGVhbV9pbmZvKGE6IEpTT05fVGVhbXx1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGFsZXJ0KFwiVGVhbSBJbmZvOlwiIFxyXG4gICAgICAgICsgXCJcXG5pZDogICAgXCIgICAgICsgKGEuaWQgICAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxudW5pcV9pZDogIFwiICArIChhLnVuaXFfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbm5hbWU6ICBcIiAgICAgKyAoYS5uYW1lICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zYXZlX2lkOiBcIiAgICsgKGEuc2F2ZV9pZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxudXJsOiAgXCIgICAgICArIChhLmxvY2F0ZT8uY3VyX3VybCAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxja2Q6IFwiICAgICAgKyAoYS5sb2NhdGU/LmtpbmQgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sY25tOiBcIiAgICAgICsgKGEubG9jYXRlPy5uYW1lICAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubGNpZDogXCIgICAgICArIChhLmxvY2F0ZT8ubG9jX3VpZCAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl94OiBcIiAgICAgKyAoYS5sb2NhdGU/LmxvY19wb3M/LnggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfeTogXCIgICAgICsgKGEubG9jYXRlPy5sb2NfcG9zPy55ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3o6IFwiICAgICArIChhLmxvY2F0ZT8ubG9jX3Bvcz8ueiA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl9kOiBcIiAgICAgKyAoYS5sb2NhdGU/LmxvY19wb3M/LmQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5nb29kczogXCIgICAgICsgKE9iamVjdC5rZXlzKGEuZ29vZHM/P1tdKS5sZW5ndGgpXHJcbiAgICAgICAgKyBcIlxcbmhlcm9lczogXCIgICAgKyAoYS5oZXJvZXM/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG5cclxuLy8gICAgaWYgKGEuaGVyb2VzICE9PSB1bmRlZmluZWQpIGFsZXJ0X2hlcm9lc19pbmZvKGEuaGVyb2VzKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1RlYW0gaW1wbGVtZW50cyBJX01hemVPYmoge1xyXG4gICAgcHVibGljIHN0YXRpYyBuZXdPYmooaj86IEpTT05fVGVhbSk6IENfVGVhbSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX1RlYW0oaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbmV3T2JqKGo/OiBKU09OX1RlYW0pOiBDX1RlYW0ge3JldHVybiBDX1RlYW0ubmV3T2JqKGopO31cclxuXHJcbiAgICBwcm90ZWN0ZWQgbXlfaWQ6ICAgICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgbXlfbmFtZTogICBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgdW5pcV9pZDogICBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgc2F2ZV9pZDogICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgd2Fsa2VyOiAgICBDX1dhbGtlcjtcclxuICAgIHByb3RlY3RlZCBnb2xkOiAgICAgIENfR29vZHNJdGVtO1xyXG4gICAgcHJvdGVjdGVkIGhlcm9lczogICAge1t1aWQ6IHN0cmluZ106IENfSGVyb307XHJcblxyXG4gICAgcHJvdGVjdGVkIG15VmlldzogICAgSV9NYXplT2JqVmlld3x1bmRlZmluZWQ7XHJcbiAgICBwcm90ZWN0ZWQgaG9wZV9tb3Rpb246IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fVGVhbSkge1xyXG5cclxuICAgICAgICB0aGlzLm15X2lkICAgICA9ICAwO1xyXG4gICAgICAgIHRoaXMubXlfbmFtZSAgID0gJ05lbyBUZWFtPyc7XHJcbiAgICAgICAgdGhpcy51bmlxX2lkICAgPSAnbWFpX3RlYW0jJyArIF9nZXRfdXVpZCgpO1xyXG4gICAgICAgIHRoaXMuc2F2ZV9pZCAgID0gIDA7XHJcblxyXG4gICAgICAgIHRoaXMubXlWaWV3ID0gbmV3IENfQ3VycmVudFRlYW1WaWV3KHRoaXMpIGFzIElfTWF6ZU9ialZpZXc7XHJcbiAgICAgICAgdGhpcy53YWxrZXIgPSBuZXcgQ19XYWxrZXIoKTtcclxuICAgICAgICB0aGlzLndhbGtlci5zZXRfdGlkKHRoaXMudWlkKCkpO1xyXG5cclxuICAgICAgICB0aGlzLmdvbGQgICA9IG5ldyBDX0dvb2RzSXRlbSh7Z2tpbmQ6IFRfR29vZHNLaW5kLkdvbGQsIHZhbHVlOiAwfSk7XHJcbiAgICAgICAgdGhpcy5oZXJvZXMgPSB7fTtcclxuICAgICAgICB0aGlzLmhvcGVfbW90aW9uID0gJ05PUCc7ICAgIFxyXG4gICAgICAgIGlmIChqICE9PSB1bmRlZmluZWQpIHRoaXMuZGVjb2RlKGopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wcnAoYXJnIDogSlNPTl9UZWFtKSB7XHJcbiAgICAgICAgdGhpcy5kZWNvZGUoYXJnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdWlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnVuaXFfaWR9XHJcblxyXG4gICAgcHVibGljIHdpdGhpbihwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgaGVyZSA9IHRoaXMud2Fsa2VyPy5nZXRfcCgpO1xyXG4gICAgICAgIHJldHVybiBoZXJlPy53aXRoaW4ocCkgPz8gZmFsc2U7IFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aWV3KCk6ICBJX01hemVPYmpWaWV3fHVuZGVmaW5lZCB7cmV0dXJuIHRoaXMubXlWaWV3fVxyXG4gICAgcHVibGljIHdhbGsoKTogIENfV2Fsa2VyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53YWxrZXJcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGNhblRocm91Z2goKTogYm9vbGVhbiB7cmV0dXJuIHRydWV9XHJcblxyXG5cclxuICAgIHB1YmxpYyBocmVzKCk6ICBDX0hlcm9bXSB7XHJcbiAgICAgICAgY29uc3QgaHJlczogQ19IZXJvW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpaSBpbiB0aGlzLmhlcm9lcykgaHJlcy5wdXNoKHRoaXMuaGVyb2VzW2lpXSk7XHJcbiAgICAgICAgcmV0dXJuIGhyZXM7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIGNsZWFyX2hyZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZXJvZXMgPSB7fTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhZGRfaGVybyhoZXJvOiBDX0hlcm8pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlcm9lc1toZXJvLnVpZCgpXSA9IGhlcm87XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcm12X2hlcm8oaGVybzogQ19IZXJvKTogdm9pZCB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuaGVyb2VzW2hlcm8udWlkKCldO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRfbG9jKCk6IENfTW92YWJsZVBvaW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy53YWxrZXI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X2xvYyhsb2M6IENfTW92YWJsZVBvaW50KTogdm9pZCB7XHJcbiAgICAgICAgKHRoaXMud2Fsa2VyID8/PSBuZXcgQ19XYWxrZXIoKSkuZGVjb2RlKGxvYy5lbmNvZGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldF9wZCgpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53YWxrZXIuZ2V0X3BkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fVGVhbSB7XHJcbiAgICAgICAgdGhpcy5nZXRfbG9jKCk7IC8vIExvY2F0aW9u5oOF5aCx44KS5pyA5paw44Gr5pu05pawXHJcblxyXG4gICAgICAgIGNvbnN0IGpzb25faGVyb2VzOiBKU09OX0hlcm9bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGlpIGluIHRoaXMuaGVyb2VzKSBqc29uX2hlcm9lcy5wdXNoKHRoaXMuaGVyb2VzW2lpXS5lbmNvZGUoKSk7ICBcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6ICAgICAgICB0aGlzLm15X2lkLFxyXG4gICAgICAgICAgICBuYW1lOiAgICAgIHRoaXMubXlfbmFtZSxcclxuICAgICAgICAgICAgdW5pcV9pZDogICB0aGlzLnVuaXFfaWQsXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6ICAgdGhpcy5zYXZlX2lkLFxyXG4gICAgICAgICAgICBsb2NhdGU6ICAgIHRoaXMud2Fsa2VyLmVuY29kZSgpLFxyXG4gICAgICAgICAgICBnb2xkOiAgICAgIHRoaXMuZ29sZC5lbmNvZGUoKSxcclxuICAgICAgICAgICAgaGVyb2VzOiAgICBqc29uX2hlcm9lcyxcclxuICAgICAgICAgICAgbW90aW9uOiAgICB0aGlzLmhvcGVfbW90aW9uLFxyXG4gICAgICAgICAgICB2aWV3OiAgICAgIHRoaXMubXlWaWV3Py5lbmNvZGUoKSA/PyB7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX1RlYW18dW5kZWZpbmVkKTogQ19UZWFtIHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSAgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChhLmlkICAgIT09IHVuZGVmaW5lZCkgICAgdGhpcy5teV9pZCAgICAgICA9IGEuaWQ7XHJcbiAgICAgICAgaWYgKGEubmFtZSAhPT0gdW5kZWZpbmVkKSAgICB0aGlzLm15X25hbWUgICAgID0gYS5uYW1lO1xyXG4gICAgICAgIGlmIChhLnVuaXFfaWQgIT09IHVuZGVmaW5lZCkgdGhpcy51bmlxX2lkICAgICA9IGEudW5pcV9pZDtcclxuICAgICAgICBpZiAoYS5zYXZlX2lkICE9PSB1bmRlZmluZWQpIHRoaXMuc2F2ZV9pZCAgICAgPSBhLnNhdmVfaWQ7XHJcbiAgICAgICAgaWYgKGEubW90aW9uICE9PSB1bmRlZmluZWQpICB0aGlzLmhvcGVfbW90aW9uID0gYS5tb3Rpb247XHJcblxyXG4gICAgICAgIGlmIChhLmxvY2F0ZSAhPT0gdW5kZWZpbmVkKSAgdGhpcy53YWxrZXIuZGVjb2RlKGEubG9jYXRlKTtcclxuICAgICAgICBpZiAoYS5nb2xkICAgIT09IHVuZGVmaW5lZCkgIHRoaXMuZ29sZC5kZWNvZGUoYS5nb2xkKTtcclxuXHJcbiAgICAgICAgaWYgKGEuaGVyb2VzICE9PSB1bmRlZmluZWQpICB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVyb2VzID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl9oZXJvIG9mIGEuaGVyb2VzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZXJvID0gbmV3IENfSGVybyhqc29uX2hlcm8pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZXJvZXNbaGVyby51aWQoKV0gPSBoZXJvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4vKlxyXG4gICAgICAgIGlmIChhLnZpZXcgICAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoYS52aWV3KS5sZW5ndGggPiAwKSB0aGlzLm15VmlldyA9IENfTWF6ZU9ialZpZXcubmV3T2JqKGEudmlldyk7IFxyXG4gICAgICAgICAgICBlbHNlIHRoaXMubXlWaWV3ID0gbmV3IENfQ3VycmVudFRlYW1WaWV3KHRoaXMpIGFzIElfTWF6ZU9ialZpZXc7IFxyXG4gICAgICAgIH1cclxuKi9cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZW5jb2RlX2FsbChhbGxfdGVhbTogQ19UZWFtW10pOiBKU09OX1RlYW1bXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX3RlYW1fZGF0YTogSlNPTl9UZWFtW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB0ZWFtIG9mIGFsbF90ZWFtKSB7XHJcbiAgICAgICAgICAgIGFsbF90ZWFtX2RhdGEucHVzaCh0ZWFtLmVuY29kZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbF90ZWFtX2RhdGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZV9hbGwoYWxsX3RlYW1fZGF0YTogSlNPTl9UZWFtW10pOiBDX1RlYW1bXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX3RlYW06IENfVGVhbVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgdGVhbV9kYXRhIG9mIGFsbF90ZWFtX2RhdGEpIHtcclxuICAgICAgICAgICAgYWxsX3RlYW0ucHVzaCgobmV3IENfVGVhbSgpKS5kZWNvZGUodGVhbV9kYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxfdGVhbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGFsZXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiVGVhbSBJbmZvOlwiIFxyXG4gICAgICAgICAgICArIFwiXFxuaWQ6ICAgIFwiICAgICArICh0aGlzLm15X2lkICAgICAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudW5pcV9pZDogIFwiICArICh0aGlzLnVuaXFfaWQgICAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubmFtZTogIFwiICAgICArICh0aGlzLm15X25hbWUgICAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2F2ZV9pZDogXCIgICArICh0aGlzLnNhdmVfaWQgICAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudXJsOiAgXCIgICAgICArICh0aGlzLndhbGtlci51cmwoKSAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubGNrZDogXCIgICAgICArICh0aGlzLndhbGtlci5nZXRfbGNrZF9zdHIoKSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sY25tOiBcIiAgICAgICsgKHRoaXMud2Fsa2VyLmdldF9uYW1lKCkgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxjaWQ6IFwiICAgICAgKyAodGhpcy53YWxrZXIuZ2V0X3VpZCgpICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuY3VyX3g6IFwiICAgICArICh0aGlzLndhbGtlci5nZXRfcCgpLnggPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuY3VyX3k6IFwiICAgICArICh0aGlzLndhbGtlci5nZXRfcCgpLnkgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuY3VyX3o6IFwiICAgICArICh0aGlzLndhbGtlci5nZXRfcCgpLnogPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuY3VyX2Q6IFwiICAgICArICh0aGlzLndhbGtlci5nZXRfZCgpICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuZ29sZDogXCIgICAgICArIChPYmplY3Qua2V5cyh0aGlzLmdvbGQgPz8ge30pLmxlbmd0aClcclxuICAgICAgICAgICAgKyBcIlxcbmhlcm9lczogXCIgICAgKyAodGhpcy5oZXJvZXM/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWxlcnRfaHJlcygpOiB2b2lkIHtcclxuLy8gICAgICAgIGFsZXJ0KFwiVGVhbSBJbmZvOlwiKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHRoaXMuaGVyb2VzKSB0aGlzLmhlcm9lc1tpaV0uYWxlcnQoKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IFRfRGlyZWN0aW9uIH0gICAgICAgZnJvbSAnLi9DX1BvaW50RGlyJztcclxuaW1wb3J0IHsgQ19UZWFtLCBKU09OX1RlYW0gfSBmcm9tIFwiLi9DX1RlYW1cIjtcclxuaW1wb3J0IHsgVF9XYWxsIH0gICAgICAgICAgICBmcm9tIFwiLi4vZF9tZGwvQ19XYWxsXCI7XHJcbmltcG9ydCB7IElfTWF6ZU9ialZpZXcsIEpTT05fTWF6ZU9ialZpZXcgfSAgZnJvbSBcIi4vQ19NYXplT2JqVmlld1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENfQ3VycmVudFRlYW1WaWV3ICBpbXBsZW1lbnRzIElfTWF6ZU9ialZpZXcge1xyXG4gICAgcHVibGljICBzdGF0aWMgbmV3T2JqKGo/OiBKU09OX1RlYW0pOiBJX01hemVPYmpWaWV3IHtcclxuICAgICAgICBjb25zdCB0ZWFtID0gbmV3IENfVGVhbShqKTtcclxuICAgICAgICByZXR1cm4gbmV3IENfQ3VycmVudFRlYW1WaWV3KHRlYW0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljICBuZXdPYmooaj86IEpTT05fVGVhbSk6IElfTWF6ZU9ialZpZXcge3JldHVybiBDX0N1cnJlbnRUZWFtVmlldy5uZXdPYmooail9XHJcblxyXG4gICAgXHJcbiAgICBwcml2YXRlIG15X3RlYW06IENfVGVhbTtcclxuICAgIHByaXZhdGUgbXlfbGF5ZXI6ICBudW1iZXIgPSA5OTtcclxuICAgIHB1YmxpYyAgY29uc3RydWN0b3IodGVhbTogQ19UZWFtKSB7XHJcbiAgICAgICAgdGhpcy5teV90ZWFtID0gdGVhbTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGF5ZXIoKTogbnVtYmVyICAgICAgICAge3JldHVybiB0aGlzLm15X2xheWVyO31cclxuICAgIHB1YmxpYyBzZXRfbGF5ZXIobGF5ZXI6IG51bWJlcik6IHZvaWQge3RoaXMubXlfbGF5ZXIgPSBsYXllcjt9XHJcbiAgICBwdWJsaWMgbGV0dGVyKCk6IHN0cmluZ3xudWxsIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubXlfdGVhbS53YWxrKCkuZ2V0X2QoKSkge1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHJldHVybiAn4oaRJztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOiByZXR1cm4gJ+KGkic7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogcmV0dXJuICfihpMnO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHJldHVybiAn4oaQJztcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuICfwn4yAJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2FuU2hvdygpOiBib29sZWFue3JldHVybiBmYWxzZX1cclxuICAgIHB1YmxpYyBkcm93M0QoZnJvdDogVF9XYWxsLCBiYWNrOiBUX1dhbGwpOiB2b2lkIHt9XHJcbiAgICBwdWJsaWMgcGFkX3QoKTogICBudW1iZXIge3JldHVybiAwLjB9IFxyXG4gICAgcHVibGljIHBhZF9kKCk6ICAgbnVtYmVyIHtyZXR1cm4gMC4wfSBcclxuICAgIHB1YmxpYyBwYWRfcygpOiAgIG51bWJlciB7cmV0dXJuIDAuMH0gXHJcbiAgICBwdWJsaWMgY29sX2YoKTogICBzdHJpbmd8bnVsbCB7cmV0dXJuIG51bGx9IFxyXG4gICAgcHVibGljIGNvbF9iKCk6ICAgc3RyaW5nfG51bGwge3JldHVybiBudWxsfSBcclxuICAgIHB1YmxpYyBjb2xfcygpOiAgIHN0cmluZ3xudWxsIHtyZXR1cm4gbnVsbH0gXHJcbiAgICBwdWJsaWMgY29sX3QoKTogICBzdHJpbmd8bnVsbCB7cmV0dXJuIG51bGx9IFxyXG4gICAgcHVibGljIGNvbF9kKCk6ICAgc3RyaW5nfG51bGwge3JldHVybiBudWxsfSBcclxuICAgIHB1YmxpYyBjb2xfbCgpOiAgIHN0cmluZ3xudWxsIHtyZXR1cm4gbnVsbH0gXHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX01hemVPYmpWaWV3IHtyZXR1cm4ge2NuYW1lOiAnQ3VycmVudFRlYW1WaWV3J319XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo6IEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkKTogSV9NYXplT2JqVmlldyB7cmV0dXJuIHRoaXMgYXMgSV9NYXplT2JqVmlld31cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfUG9pbnREaXIsIFRfRGlyZWN0aW9uIH0gICAgICAgICAgIGZyb20gXCIuL0NfUG9pbnREaXJcIjtcclxuaW1wb3J0IHsgQ19Nb3ZhYmxlUG9pbnQsIEpTT05fTW92YWJsZVBvaW50IH0gZnJvbSBcIi4vQ19Nb3ZhYmxlUG9pbnRcIjtcclxuaW1wb3J0IHsgSV9Mb2NhdGUgfSAgICAgZnJvbSBcIi4vQ19Mb2NhdGlvblwiO1xyXG5pbXBvcnQgeyBJX0hvcGVBY3Rpb24gfSBmcm9tIFwiLi9JX0NvbW1vblwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9XYWxrZXIgZXh0ZW5kcyBKU09OX01vdmFibGVQb2ludCB7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1dhbGtlciBleHRlbmRzIENfTW92YWJsZVBvaW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGo/OiBKU09OX1dhbGtlcikge1xyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF94KCk6IG51bWJlciB7cmV0dXJuIHRoaXMubG9jX3Bvcy54fVxyXG4gICAgcHVibGljIGdldF95KCk6IG51bWJlciB7cmV0dXJuIHRoaXMubG9jX3Bvcy55fVxyXG4gICAgcHVibGljIGdldF96KCk6IG51bWJlciB7cmV0dXJuIHRoaXMubG9jX3Bvcy56fVxyXG5cclxuICAgIHB1YmxpYyBzZXRfeCh4OiBudW1iZXIpOiB2b2lkIHt0aGlzLmxvY19wb3MueCA9IHh9XHJcbiAgICBwdWJsaWMgc2V0X3koeTogbnVtYmVyKTogdm9pZCB7dGhpcy5sb2NfcG9zLnkgPSB5fVxyXG4gICAgcHVibGljIHNldF96KHo6IG51bWJlcik6IHZvaWQge3RoaXMubG9jX3Bvcy56ID0gen1cclxuXHJcbiAgICBwdWJsaWMgc2V0X3BsYWNlKFxyXG4gICAgICAgIHBsYWNlOiBJX0xvY2F0ZSwgXHJcbiAgICAgICAgdXJsPzogIHN0cmluZywgXHJcbiAgICAgICAgcG9zPzogIENfUG9pbnREaXIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRfdWlkIChwbGFjZS51aWQoKSk7XHJcbiAgICAgICAgdGhpcy5zZXRfbGNrZChwbGFjZS5nZXRfbGNrZCgpKTtcclxuICAgICAgICB0aGlzLnNldF9uYW1lKHBsYWNlLmdldF9uYW1lKCkpO1xyXG5cclxuICAgICAgICBpZiAodXJsICE9PSB1bmRlZmluZWQpIHRoaXMuc2V0X3VybCh1cmwpO1xyXG4gICAgICAgIGlmIChwb3MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldF9wZChwb3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBob3BlX3BfZndkKCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIk1vdmVcIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy5nZXRfcF9md2QoKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLnNldF9wX2Z3ZCgpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhvcGVfcF9iYWsoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiTW92ZVwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wX2JhaygpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMuc2V0X3BfYmFrKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBob3BlX3BfbGZ0KCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIk1vdmVcIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy5nZXRfcF9sZnQoKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLnNldF9wX2xmdCgpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhvcGVfcF9yZ3QoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiTW92ZVwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wX3JndCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMuc2V0X3Bfcmd0KCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9wZV90dXJuX3IoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiVHVyblwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wZCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMudHVybl9yKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9wZV90dXJuX2woKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiVHVyblwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wZCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMudHVybl9sKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhvcGVfcF91cCgpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJVcFwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wX3VwKCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy5tb3ZlX3BfdXAoKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBob3BlX3BfZG93bigpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJEb3duXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMuZ2V0X3BfZG93bigpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMubW92ZV9wX2Rvd24oKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZV9wX3VwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3BfdXAoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBtb3ZlX3BfZG93bigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldF9wX2Rvd24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNORygpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXRfcF9md2QoKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19nZXRfcF9tb3ZlKDEsIDApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wX2Z3ZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldF9wZCh0aGlzLmdldF9wX2Z3ZCgpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfcF9iYWsoKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19nZXRfcF9tb3ZlKC0xLCAwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcF9iYWsoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRfcGQodGhpcy5nZXRfcF9iYWsoKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BfbGZ0KCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9fZ2V0X3BfbW92ZSgwLCAtMSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BfbGZ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3BkKHRoaXMuZ2V0X3BfbGZ0KCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wX3JndCgpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX2dldF9wX21vdmUoMCwgMSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3Bfcmd0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3BkKHRoaXMuZ2V0X3Bfcmd0KCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wX3VwKCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIGNvbnN0IHAgPSBuZXcgQ19Qb2ludERpcih0aGlzLmxvY19wb3MpO1xyXG4gICAgICAgIHAuei0tO1xyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wX3VwKCkge1xyXG4gICAgICAgIHRoaXMuc2V0X3BkKHRoaXMuZ2V0X3BfdXAoKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BfZG93bigpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICBjb25zdCBwID0gbmV3IENfUG9pbnREaXIodGhpcy5sb2NfcG9zKTtcclxuICAgICAgICBwLnorKztcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcF9kb3duKCkge1xyXG4gICAgICAgIHRoaXMuc2V0X3BkKHRoaXMuZ2V0X3BfZG93bigpKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2dldF9wX21vdmUob2Zmc2V0RkI6IG51bWJlciwgb2Zmc2V0TFI6IG51bWJlcik6IENfUG9pbnREaXIge1xyXG4gICAgICAgIGNvbnN0IHAgPSBuZXcgQ19Qb2ludERpcih0aGlzLmxvY19wb3MpO1xyXG4gICAgICAgIGlmIChvZmZzZXRGQiAhPT0gMCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMubG9jX3Bvcy5kKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHAueSAtPSBvZmZzZXRGQjticmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogcC54ICs9IG9mZnNldEZCO2JyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiBwLnkgKz0gb2Zmc2V0RkI7YnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHAueCAtPSBvZmZzZXRGQjticmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2Zmc2V0TFIgIT09IDApIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmxvY19wb3MuZCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiBwLnggKz0gb2Zmc2V0TFI7YnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHAueSArPSBvZmZzZXRMUjticmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogcC54IC09IG9mZnNldExSO2JyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiBwLnkgLT0gb2Zmc2V0TFI7YnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X2Fyb3VuZChmcm9udDogbnVtYmVyLCByaWdodDpudW1iZXIsIHVwOiBudW1iZXIgPSAwKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgdmFyIHRhcmdldF94ICA9IHRoaXMubG9jX3Bvcy54O1xyXG4gICAgICAgIHZhciB0YXJnZXRfeSAgPSB0aGlzLmxvY19wb3MueTtcclxuICAgICAgICB2YXIgdGFyZ2V0X3ogID0gdGhpcy5sb2NfcG9zLnogLSB1cDtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubG9jX3Bvcy5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjpcclxuICAgICAgICAgICAgICAgIHRhcmdldF94ICs9IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3kgLT0gZnJvbnQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3ggKz0gZnJvbnQ7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeSArPSByaWdodDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeCAtPSByaWdodDtcclxuICAgICAgICAgICAgICAgIHRhcmdldF95ICs9IGZyb250O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzpcclxuICAgICAgICAgICAgICAgIHRhcmdldF94IC09IGZyb250O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3kgLT0gcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX1BvaW50RGlyKHt4OiB0YXJnZXRfeCwgeTogdGFyZ2V0X3ksIHo6IHRhcmdldF96LCBkOiB0aGlzLmxvY19wb3MuZH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHR1cm5fcigpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubG9jX3Bvcy5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5FO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uUzticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLlc7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5OO2JyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyB0dXJuX2woKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmxvY19wb3MuZCkge1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uVzticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLk47YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5FO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uUzticmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdHVybl9iKCk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5sb2NfcG9zLmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLlM7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5XO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uTjticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLlc7YnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1dhbGtlciB7XHJcbiAgICAgICAgY29uc3QgaiA9IHN1cGVyLmVuY29kZSgpIGFzIEpTT05fV2Fsa2VyO1xyXG4gICAgICAgIHJldHVybiBqO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX1dhbGtlcik6IENfV2Fsa2VyIHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBzdXBlci5kZWNvZGUoYSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHtUX01ha2VFbnVtVHlwZX0gZnJvbSBcIi4uL2RfdXRsL1RfTWFrZUVudW1UeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVF9EaXJlY3Rpb24gPSB7XHJcbiAgICBOOiAgIDAsXHJcbiAgICBFOiAgIDEsXHJcbiAgICBTOiAgIDIsXHJcbiAgICBXOiAgIDMsXHJcbiAgICBYOiAgOTksXHJcbiAgICBNQVg6IDNcclxufSBhcyBjb25zdDtcclxuZXhwb3J0IHR5cGUgVF9EaXJlY3Rpb24gPSBUX01ha2VFbnVtVHlwZTx0eXBlb2YgVF9EaXJlY3Rpb24+O1xyXG5cclxuZXhwb3J0IHZhciAkRGlyZWN0aW9uTmFtZSA9IHtcclxuICAgIDA6ICAn5YyXJyxcclxuICAgIDE6ICAn5p2xJyxcclxuICAgIDI6ICAn5Y2XJyxcclxuICAgIDM6ICAn6KW/JyxcclxuICAgIDk5OiAn6KyOJ1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIC8vIOS4gOiIrOOBq+S9v+OBiOOCi+ODpuODvOODhuOCo+ODquODhuOCo+OBquWRquaWh1xyXG4gICAgLy8g44Kq44OW44K444Kn44Kv44OI44KS5YiX5oyZ5Z6L44Go44GX44Gm5Z6L5YyW44GZ44KL44Gu44Gr5Yip55SoXHJcbiAgICBpbXBvcnQge1RfTWFrZUVudW1UeXBlfSBmcm9tIFwiLi4vZF91dGwvVF9NYWtlRW51bVR5cGVcIjtcclxuXHJcbiAgICAvLyDjg4Djg7Pjgrjjg6fjg7Pjg57jg4Pjg5fjga7jgrvjg6vjga7nqK7poZ7jgpLooajjgZnliJfmjJnlnotcclxuICAgIC8vIE5vRGVmOiDmnKrlrprnvqnjg7vkuI3mmI5cclxuICAgIC8vIEZsb29yOiDluopcclxuICAgIC8vIFVuZXhwOiDmnKrouI/lnLBcclxuICAgIC8vIFN0b25lOiDnn7Plo4FcclxuICAgIC8vIFN0clVwOiDkuIrjgorpmo7mrrVcclxuICAgIC8vIFN0ckRuOiDkuIvjgorpmo7mrrVcclxuICAgIC8vIEVtcHR5OiDliJ3mnJ/nirbmhYvjg7vkvZXjgoLjgarjgZdcclxuICAgIC8vIFxyXG4gICAgLy8gZnVuY3Rpb24gdG9faW50KE16S2luZCk6ICAgICAgaW50ICAgICAgICDliJfmjJnlnovjgavlr77lv5zjgZnjgovlgKQo5pW05pWw5YCkKeOCkui/lOOBmVxyXG4gICAgLy8gZnVuY3Rpb24gZnJvbV9pbnQoaW50KTogICAgICAgVF9NektpbmQgICAgIOaVtOaVsOWApOOBq+WvvuW/nOOBmeOCi+WIl+aMmeWei+OCkui/lOOBmSjjgq/jg6njgrnjg6Hjgr3jg4Pjg4kpXHJcbiAgICAvLyBmdW5jdGlvbiB0b19sZXR0ZXIoTXpLaW5kKTogICBzdHJpbmcgICAgIOWIl+aMmeWei+OBq+WvvuW/nOOBmeOCi+aWh+Wtl+OCkui/lOOBmSjjg4Djg7Pjgrjjg6fjg7Pjga4yROihqOekuueUqClcclxuICAgIC8vIGZ1bmN0aW9uIGZyb21fbGV0dGVyKHN0cmluZyk6IFRfTXpLaW5kICAgICDmloflrZfjgavlr77lv5zjgZnjgovliJfmjJnlnovjgpLov5TjgZko44Kv44Op44K544Oh44K944OD44OJKVxyXG5cclxuICAgIGV4cG9ydCBjb25zdCBUX016S2luZDp7W2tleTogc3RyaW5nXTogbnVtYmVyfSAgPSB7XHJcbiAgICAgICAgTm9EZWY6ICAgMCxcclxuICAgICAgICBGbG9vcjogICAxLFxyXG4gICAgICAgIFVuZXhwOiAgIDIsXHJcbiAgICAgICAgU3RvbmU6ICAgMyxcclxuICAgICAgICBVbmt3bjogICA0LFxyXG4gICAgICAgIFN0clVwOiAgIDUsXHJcbiAgICAgICAgU3RyRG46ICAgNixcclxuICAgICAgICBTdHJVRDogICA3LFxyXG4gICAgICAgIEVtcHR5OiAyNTUsXHJcbiAgICB9IGFzIGNvbnN0O1xyXG4gICAgZXhwb3J0IHR5cGUgVF9NektpbmQgICA9IFRfTWFrZUVudW1UeXBlPHR5cGVvZiBUX016S2luZD47XHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IFRfUnZNektpbmQ6e1trZXk6IG51bWJlcl06IFRfTXpLaW5kfSAgPSB7XHJcbiAgICAgICAgMDogICBUX016S2luZC5Ob0RlZixcclxuICAgICAgICAxOiAgIFRfTXpLaW5kLkZsb29yLFxyXG4gICAgICAgIDI6ICAgVF9NektpbmQuVW5leHAsXHJcbiAgICAgICAgMzogICBUX016S2luZC5TdG9uZSxcclxuICAgICAgICA0OiAgIFRfTXpLaW5kLlVua3duLFxyXG4gICAgICAgIDU6ICAgVF9NektpbmQuU3RyVXAsXHJcbiAgICAgICAgNjogICBUX016S2luZC5TdHJEbixcclxuICAgICAgICA3OiAgIFRfTXpLaW5kLlN0clVELFxyXG4gICAgICAgIDI1NTogVF9NektpbmQuRW1wdHksXHJcbiAgICB9IGFzIGNvbnN0O1xyXG4gICAgZXhwb3J0IHR5cGUgVF9Sdk16S2luZCA9IFRfTWFrZUVudW1UeXBlPHR5cGVvZiBUX1J2TXpLaW5kPjtcclxuXHJcbiIsIi8vIOeUu+mdouihqOekuueUqOODoeODg+OCu+ODvOOCuCjpgJrluLjnlKjjgajjgqjjg6njg7znlKgp44Gu44Kr44OX44K744Or5YyWXHJcbmV4cG9ydCBjbGFzcyBDX0RzcE1lc3NhZ2Uge1xyXG4gICAgcHJpdmF0ZSBpc0hUTUw6IGJvb2xlYW47ICAgICAgIC8vIOihqOekuuWFiOOBjEhUTUzjgYsodHJ1ZSnjgIHjgrPjg7Pjgr3jg7zjg6vjgYsoZmFsc2Up44Gu5oyH5a6aXHJcbiAgICBwcml2YXRlIG5vcl9tZXNzYWdlOiBzdHJpbmdbXTsgLy8g6YCa5bi444Gu44Oh44OD44K744O844K444KS5qC857SN44GZ44KL5paH5a2X5YiX6YWN5YiXXHJcbiAgICBwcml2YXRlIGVycl9tZXNzYWdlOiBzdHJpbmdbXTsgLy8g44Ko44Op44O844Oh44OD44K744O844K444KS5qC857SN44GZ44KL5paH5a2X5YiX6YWN5YiXXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGlzSFRNTDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5pc0hUTUwgICAgICA9IGlzSFRNTDtcclxuICAgICAgICB0aGlzLm5vcl9tZXNzYWdlID0gW107XHJcbiAgICAgICAgdGhpcy5lcnJfbWVzc2FnZSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRfbm9yX21lc3NhZ2UobXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vcl9tZXNzYWdlLnB1c2gobXNnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldF9lcnJfbWVzc2FnZShtc2c6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXJyX21lc3NhZ2UucHVzaChtc2cpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcGxheV9ub3JfbWVzc2FnZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5ub3JfbWVzc2FnZS5sZW5ndGggPCAxKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzSFRNTCkge1xyXG4gICAgICAgICAgICBsZXQgYWxsX21zZyA9IFwiPHAgY2xhc3M9J25vcm1hbF9tZXNzYWdlJz5cXG5cIjtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBtc2cgb2YgdGhpcy5ub3JfbWVzc2FnZSkgYWxsX21zZyArPSBgJHttc2d9PC9icj5cXG5gO1xyXG4gICAgICAgICAgICBhbGxfbXNnICs9ICBcIjwvcD5cXG5cIjtcclxuICAgICAgICAgICAgYWxlcnQoYWxsX21zZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBtc2cgb2YgdGhpcy5ub3JfbWVzc2FnZSkgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwbGF5X2Vycl9tZXNzYWdlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmVycl9tZXNzYWdlLmxlbmd0aCA8IDEpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNIVE1MKSB7XHJcbiAgICAgICAgICAgIGxldCBhbGxfbXNnID0gXCI8cCBjbGFzcz0nZXJyb3JfbWVzc2FnZSc+XFxuXCI7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXNnIG9mIHRoaXMuZXJyX21lc3NhZ2UpIGFsbF9tc2cgKz0gYCR7bXNnfTwvYnI+XFxuYDtcclxuICAgICAgICAgICAgYWxsX21zZyArPSAgXCI8L3A+XFxuXCI7XHJcbiAgICAgICAgICAgIGFsZXJ0KGFsbF9tc2cpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJcXG5cXG5cXG4jIyNcXG4jIyMgRVJST1IgT2NjdWVyZC5cXG4jIyNcXG5cIik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXNnIG9mIHRoaXMuZXJyX21lc3NhZ2UpIGNvbnNvbGUuZXJyb3IoYCMjIyAke21zZ31gKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIiMjI1xcblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIHBkb19lcnJvcihlOiBhbnksIGVycm1zZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZWNvZGUgPSBlPy5nZXRDb2RlKCkgICAgPz8gJzk5OTk5JztcclxuICAgICAgICBjb25zdCBlbWVzcyA9IGU/LmdldE1lc3NhZ2UoKSA/PyAnPz8/JztcclxuICAgICAgICB0aGlzLnNldF9lcnJfbWVzc2FnZShlcnJtc2cpO1xyXG4gICAgICAgIHRoaXMuc2V0X2Vycl9tZXNzYWdlKGBjb2RlOiAke2Vjb2RlfWApO1xyXG4gICAgICAgIHRoaXMuc2V0X2Vycl9tZXNzYWdlKGBtZXNzYWdlOiAke2VtZXNzfWApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldF9ub3JfbWVzc2FnZXMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy5ub3JfbWVzc2FnZV07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X2Vycl9tZXNzYWdlcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLmVycl9tZXNzYWdlXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNfZXJyKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAgdGhpcy5lcnJfbWVzc2FnZS5sZW5ndGggIT09IDA7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8g5pWw5YCk44OB44Kn44OD44KvXHJcbmV4cG9ydCBmdW5jdGlvbiBfaXNOdW0obnVtVmFsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIC8vIOODgeOCp+ODg+OCr+adoeS7tuODkeOCv+ODvOODs1xyXG4gICAgY29uc3QgcGF0dGVybiA9IC9eWy0rXT8oWzEtOV1cXGQqfDApKFxcLlxcZCspPyQvO1xyXG4gICAgLy8g5pWw5YCk44OB44Kn44OD44KvXHJcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KG51bVZhbCk7XHJcbn1cclxuXHJcbi8vIOaVsOWApOWPluOCiuWHuuOBl1xyXG5leHBvcnQgZnVuY3Rpb24gX2dldE51bShudW1WYWw6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAvLyDjg4Hjgqfjg4Pjgq/mnaHku7bjg5Hjgr/jg7zjg7NcclxuLy8gICAgY29uc3QgcGF0dGVybiA9IC9bLV0/KFsxLTldXFxkKnwwKShcXC5cXGQrKT8vO1xyXG4gICAgY29uc3QgcGF0dGVybiA9IC8oW14wLTldKS9nO1xyXG4gICAgY29uc3QgdmFsc3RyICA9IG51bVZhbC5yZXBsYWNlKHBhdHRlcm4sJycpO1xyXG4gICAgLy8g5pWw5YCk44OB44Kn44OD44KvXHJcbiAgICByZXR1cm4gTnVtYmVyKHZhbHN0cik7XHJcbn1cclxuXHJcbi8vIOWbm+aNqOS6lOWFpVxyXG5leHBvcnQgZnVuY3Rpb24gX3JvdW5kKG51bTogbnVtYmVyLCBkaWdpdDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IG11bHRpcGxpZXIgPSBNYXRoLnBvdygxMCwgZGlnaXQpO1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogbXVsdGlwbGllcikgLyBtdWx0aXBsaWVyO1xyXG59XHJcblxyXG4vLyDliIfjgorkuIrjgZJcclxuZXhwb3J0IGZ1bmN0aW9uIF9jZWlsKG51bTogbnVtYmVyLCBkaWdpdDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IG11bHRpcGxpZXIgPSBNYXRoLnBvdygxMCwgZGlnaXQpO1xyXG4gICAgcmV0dXJuIE1hdGguY2VpbChudW0gKiBtdWx0aXBsaWVyKSAvIG11bHRpcGxpZXI7XHJcbn1cclxuXHJcblxyXG4vLyDliIfjgorkuIvjgZJcclxuZXhwb3J0IGZ1bmN0aW9uIF9mbG9vcihudW06IG51bWJlciwgZGlnaXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBtdWx0aXBsaWVyID0gTWF0aC5wb3coMTAsIGRpZ2l0KTtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKG51bSAqIG11bHRpcGxpZXIpIC8gbXVsdGlwbGllcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfbWluKGE6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBhLnJlZHVjZSgobjE6IG51bWJlciwgbjI6IG51bWJlcikgPT4gTWF0aC5taW4objEsIG4yKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfbWF4KGE6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBhLnJlZHVjZSgobjE6IG51bWJlciwgbjI6IG51bWJlcikgPT4gTWF0aC5tYXgobjEsIG4yKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX21heCwgX21pbiwgX3JvdW5kIH0gZnJvbSBcIi4vRl9NYXRoXCI7XHJcblxyXG4vLyDkubHmlbDplqLmlbDlkbzjgbPlh7rjgZfnlKjjga7lnovlrqPoqIBcclxudHlwZSBUX2ZyYW5kID0gKCk9Pm51bWJlclxyXG5jb25zdCBmcmFuZDogVF9mcmFuZCA9ICAoKT0+e3JldHVybiBNYXRoLnJhbmRvbSgpfVxyXG5cclxuLy8g5LiA5qeY5Lmx5pWwKOaVtOaVsClcclxuZXhwb3J0IGZ1bmN0aW9uIF9pcmFuZChtaW46IG51bWJlciA9IDAsIG1heDogbnVtYmVyID0gMSwgcmFuZDogVF9mcmFuZCA9IGZyYW5kKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGZfcmFuZCA9IE1hdGguZmxvb3IocmFuZCgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICAgIHJldHVybiBfcm91bmQoZl9yYW5kLCAwKTtcclxufVxyXG5cclxuLy8g5q2j6KaP5YiG5biD44KC44Gp44GN5Lmx5pWwKOaVtOaVsClcclxuZXhwb3J0IGZ1bmN0aW9uIF9pZ3JhbmQobWluOiBudW1iZXIgPSAwLCBtYXg6IG51bWJlciA9IDEsIHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gX2lyYW5kKG1pbiwgbWF4LCAoKT0+e3JldHVybiBfZ3JhbmQoMCwgMSwgcmFuZCl9KVxyXG59XHJcblxyXG4vLyDmraPopo/liIbluIPjgoLjganjgY3kubHmlbAo5a6f5pWwKVxyXG5leHBvcnQgZnVuY3Rpb24gX2dyYW5kKG1pbjogbnVtYmVyID0gMCwgbWF4OiBudW1iZXIgPSAxLCByYW5kOiBUX2ZyYW5kID0gZnJhbmQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoX19fZ2F1c3NpYW5SYW5kKHJhbmQpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxufVxyXG5mdW5jdGlvbiBfX19nYXVzc2lhblJhbmQocmFuZDogVF9mcmFuZCA9IGZyYW5kKSB7XHJcbiAgICBsZXQgc3VtID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSArPSAxKSB7XHJcbiAgICAgICAgc3VtICs9IHJhbmQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdW0gLyA2O1xyXG59XHJcblxyXG4vLyDlsJHjgZfnnJ/pnaLnm67jgarmraPopo/liIbluIPkubHmlbAo5pW05pWwKVxyXG5leHBvcnQgZnVuY3Rpb24gX2lucmFuZChtaW46IG51bWJlciA9IDAsIG1heDogbnVtYmVyID0gMSwgZGQ6IG51bWJlciA9IDMuMCwgcmFuZDogVF9mcmFuZCA9IGZyYW5kKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKF9ucmFuZChtaW4sIG1heCwgZGQsIHJhbmQpKTtcclxufVxyXG5cclxuLy8g5bCR44GX55yf6Z2i55uu44Gq5q2j6KaP5YiG5biD5Lmx5pWwKOWun+aVsClcclxuLy8g5LiA5qeY56K6546H5aSJ5pWwYSxi44KS5aSJ5pWw6Zai5pWw44KS55So44GE44GmIHg9ZihhLGIpLCB5PWcoYSxiKeOBqOOBl+OBpjLjgaTjga7mraPopo/liIbluIPkubHmlbB4LHnjgpLlvpfjgotcclxuLy8geCA9IGYoYSxiKSA9IHNxcnQoLTIqbG9nKGEpKSAqIHNpbigyKs+AKmIpIFxyXG4vLyB5ID0gZyhhLGIpID0gc3FydCgtMipsb2coYSkpICogY29zKDIqz4AqYikgXHJcbmV4cG9ydCBmdW5jdGlvbiBfbnJhbmQobWluOiBudW1iZXIgPSAwLjAsIG1heDogbnVtYmVyID0gMS4wLCBkZDogbnVtYmVyID0gMy4wLCByYW5kOiBUX2ZyYW5kID0gZnJhbmQpOiBudW1iZXIge1xyXG4gICAgY29uc3QgYXZlID0gMC41O1xyXG4gICAgY29uc3QgYSA9IHJhbmQoKTtcclxuICAgIGNvbnN0IGIgPSByYW5kKCk7XHJcbiAgICBsZXQgeCA9IGF2ZSArIF9mYWIoYSwgYikgLyAoMi4wICogZGQpOyAvLyDjgZPjgZPjgb7jgafjgIFOKDAsMSnjga7mraPopo/liIbluIPkubHmlbDjga7kvZzmiJBcclxuXHJcbiAgICB4ID0gbWluICsgeCAqIChtYXggLSBtaW4pO1xyXG4gICAgeCA9IF9tYXgoW21pbiwgeF0pO1xyXG4gICAgeCA9IF9taW4oW21heCwgeF0pO1xyXG4gICAgcmV0dXJuIHg7XHJcbn1cclxuZnVuY3Rpb24gX2ZhYihhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KC0yLjAgKiBNYXRoLmxvZyhhKSkgKiBNYXRoLnNpbigyLjAgKiBNYXRoLlBJICogYik7XHJcbn1cclxuZnVuY3Rpb24gX2dhYihhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KC0yLjAgKiBNYXRoLmxvZyhhKSkgKiBNYXRoLmNvcygyLjAgKiBNYXRoLlBJICogYik7XHJcbn1cclxuXHJcblxyXG4vLyDjgrfjg7zjg4nlgKTjgpLnlKjjgYTjgZ/kubHmlbBcclxuZXhwb3J0IGNsYXNzIENfU2VlZGVkUmFuZCB7XHJcbiAgICBwcm90ZWN0ZWQgc2VlZDogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIGZpcnN0X3NlZWQ6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc2VlZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZWVkID0gc2VlZDtcclxuICAgICAgICB0aGlzLmZpcnN0X3NlZWQgPSBzZWVkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuc2VlZCA9IHRoaXMuZmlyc3Rfc2VlZDtcclxuICAgIH1cclxuICAgIC8vIOS5seaVsOeUn+aIkOODoeOCveODg+ODiVxyXG4gICAgcHVibGljIHJhbmRvbSgpOiBudW1iZXIge1xyXG4gICAgICAgIHRoaXMuc2VlZCA9ICh0aGlzLnNlZWQgKiA5MzAxICsgNDkyOTcpICUgMjMzMjgwO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlZWQgLyAyMzMyODAuMDtcclxuICAgIH1cclxufVxyXG5cclxuLy/jg6bjg4vjg7zjgq9JRCh1dWlkKeOBrueUn+aIkFxyXG5leHBvcnQgZnVuY3Rpb24gX2dldF91dWlkKGxlbjogbnVtYmVyID0gMjAsIHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBsZnQgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpLnRvU3RyaW5nKDE2KTsgLy8g44Gf44G244KTMTPmoYFcclxuICAgIGNvbnN0IHJndF9sZW4gPSBfbWF4KFtsZW4gLSBsZnQubGVuZ3RoLCAxXSk7XHJcblxyXG4gICAgY29uc3Qgcmd0ID0gTWF0aC5mbG9vcihNYXRoLnBvdygxMCwgcmd0X2xlbikgKiByYW5kKCkpLnRvU3RyaW5nKDE2KTtcclxuICAgIHJldHVybiBsZnQgKyByZ3Q7XHJcbn1cclxuXHJcbi8vIOeiuueOh+OBq+WfuuOBpeOBj+imgee0oOmBuOaKnlxyXG5leHBvcnQgdHlwZSBUX1NlbGVjdEl0ZW0gPSB7XHJcbiAgICByYXRpbzogbnVtYmVyLFxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBfc2VsZWN0SXRlbShpdGVtczogVF9TZWxlY3RJdGVtW10sIHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCk6IFRfU2VsZWN0SXRlbSB8IHVuZGVmaW5lZCB7XHJcbiAgICB2YXIgdHRsOm51bWJlciA9IDA7XHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zKSB0dGwgKz0gaXRlbS5yYXRpbztcclxuXHJcbiAgICBjb25zdCB0YXJnZXQgPSBfaXJhbmQoMCwgdHRsLCByYW5kKTtcclxuICAgIHZhciBzdW0gPSAwO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgICAgc3VtICs9IGl0ZW0ucmF0aW87XHJcbiAgICAgICAgaWYgKHRhcmdldCA8IHN1bSkge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8vIOmFjeWIl+OBruOCt+ODo+ODg+ODleODq1xyXG5leHBvcnQgZnVuY3Rpb24gX3NodWZmbGVBcnJheTxUPihhcnJheTogVFtdLCByYW5kOiBUX2ZyYW5kID0gZnJhbmQpOiBUW10ge1xyXG4gICAgbGV0IHNodWZmbGVkQXJyYXkgPSBbLi4uYXJyYXldOyAvLyDlhYPjga7phY3liJfjgpLlpInmm7TjgZfjgarjgYTjgojjgYbjgavjgrPjg5Tjg7zjgZnjgotcclxuICAgIGZvciAobGV0IGkgPSBzaHVmZmxlZEFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICAvLyDjg6njg7Pjg4Djg6DjgarkvY3nva7jgpLmsbrlrppcclxuICAgICAgICBjb25zdCBqID0gX2lyYW5kKDAsIGksIHJhbmQpO1xyXG4gICAgICAgIC8vIOimgee0oOOBruWFpeOCjOabv+OBiFxyXG4gICAgICAgIFtzaHVmZmxlZEFycmF5W2ldLCBzaHVmZmxlZEFycmF5W2pdXSA9IFtzaHVmZmxlZEFycmF5W2pdLCBzaHVmZmxlZEFycmF5W2ldXTtcclxuICAgIH1cclxuICAgIHJldHVybiBzaHVmZmxlZEFycmF5OyAvLyDjgrfjg6Pjg4Pjg5Xjg6vjgZXjgozjgZ/phY3liJfjgpLov5TjgZlcclxufVxyXG5cclxuLy8g5Lmx5pWw44Gr44KI44KL5paH5a2X5YiX55Sf5oiQXHJcbmV4cG9ydCBmdW5jdGlvbiBfcmFuZG9tX3N0cihsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZXQgc3RyID0gJyc7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBsZW5ndGg7IGkrKykgc3RyICs9IF9yYW5kb21fQ2hhcigpO1xyXG4gICAgcmV0dXJuIHN0cjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gX3JhbmRvbV9VcHBlclN0cihsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZXQgc3RyID0gJyc7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBsZW5ndGg7IGkrKykgc3RyICs9IF9yYW5kb21fVXBwZXJDaGFyKCk7XHJcbiAgICByZXR1cm4gc3RyO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBfcmFuZG9tX0xvd2VyU3RyKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGxldCBzdHIgPSAnJztcclxuICAgIGZvciAobGV0IGk9MDsgaSA8IGxlbmd0aDsgaSsrKSBzdHIgKz0gX3JhbmRvbV9Mb3dlckNoYXIoKTtcclxuICAgIHJldHVybiBzdHI7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fVXBwZXJDaGFyKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB2YWwgPSBfaXJhbmQoMCwyNilcclxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1K3ZhbCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fTG93ZXJDaGFyKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB2YWwgPSBfaXJhbmQoMCwyNilcclxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDk1K3ZhbCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fTnVtQ2hhcigpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdmFsID0gX2lyYW5kKDAsOSlcclxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDQ4K3ZhbCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fQ2hhcigpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdmFsID0gX2lyYW5kKDAsNjEpXHJcbiAgICBpZiAodmFsIDwgMjYpIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1K3ZhbCk7XHJcbiAgICBpZiAodmFsIDwgNTIpIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDk3K3ZhbC0yNik7XHJcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg0OCt2YWwtNTIpO1xyXG59XHJcbiIsImltcG9ydCBleHByZXNzICAgICAgZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IGNyZWF0ZUVycm9yICBmcm9tICdodHRwLWVycm9ycyc7XHJcbmltcG9ydCBwYXRoICAgICAgICAgZnJvbSBcInBhdGhcIjtcclxuXHJcbnZhciB1c2Vyc1JvdXRlciA9IHJlcXVpcmUoJy4vcm91dGVzL3VzZXJzJyk7XHJcbnZhciBtYWlleFJvdXRlciA9IHJlcXVpcmUoJy4vcm91dGVzL21haWV4Jyk7XHJcblxyXG52YXIgY29va2llUGFyc2VyID0gcmVxdWlyZSgnY29va2llLXBhcnNlcicpO1xyXG52YXIgbG9nZ2VyID0gcmVxdWlyZSgnbW9yZ2FuJyk7XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG4vLyB2aWV3IGVuZ2luZSBzZXR1cFxyXG5hcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihfX2Rpcm5hbWUsICd2aWV3cycpKTtcclxuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnZWpzJyk7XHJcblxyXG5hcHAudXNlKGxvZ2dlcignZGV2JykpO1xyXG5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcclxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAncHVibGljJykpKTtcclxuXHJcbi8vYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbi8vYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcclxuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XHJcblxyXG5jb25zdCByb290Um91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxucm9vdFJvdXRlci5nZXQoXHJcbiAgXCIvXCIsXHJcbiAgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIHJlcy5zZW5kKFwiV2VsY29tZSB0byB0aGUgTWFpIHdvcmxkISA6LSlcIik7XHJcbiAgfVxyXG4pO1xyXG5hcHAudXNlKFwiL1wiLCAgICAgIHJvb3RSb3V0ZXIpO1xyXG5hcHAudXNlKFwiL3VzZXJzXCIsIHVzZXJzUm91dGVyKTtcclxuYXBwLnVzZShcIi9tYWlleFwiLCBtYWlleFJvdXRlcik7XHJcblxyXG4vLyBjYXRjaCA0MDQgYW5kIGZvcndhcmQgdG8gZXJyb3IgaGFuZGxlclxyXG5hcHAudXNlKGZ1bmN0aW9uKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSB7XHJcbiAgbmV4dChjcmVhdGVFcnJvcig0MDQpKTtcclxufSk7XHJcblxyXG4vLyBlcnJvciBoYW5kbGVyXHJcbmFwcC51c2UoZnVuY3Rpb24oZXJyOiBhbnksIHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSB7XHJcbiAgLy8gc2V0IGxvY2Fscywgb25seSBwcm92aWRpbmcgZXJyb3IgaW4gZGV2ZWxvcG1lbnRcclxuICByZXMubG9jYWxzLm1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcclxuICByZXMubG9jYWxzLmVycm9yID0gcmVxLmFwcC5nZXQoJ2VudicpID09PSAnZGV2ZWxvcG1lbnQnID8gZXJyIDoge307XHJcblxyXG4gIC8vIHJlbmRlciB0aGUgZXJyb3IgcGFnZVxyXG4gIHJlcy5zdGF0dXMoZXJyLnN0YXR1cyB8fCA1MDApO1xyXG4gIHJlcy5yZW5kZXIoJ2Vycm9yJyk7XHJcbn0pO1xyXG5cclxuY29uc3QgcG9ydCA9IG5vcm1hbGl6ZVBvcnQocHJvY2Vzcy5lbnYuUE9SVCB8fCAnMzAwMCcpO1xyXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBOb3JtYWxpemUgYSBwb3J0IGludG8gYSBudW1iZXIsIHN0cmluZywgb3IgZmFsc2UuXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplUG9ydCh2YWw6IGFueSkge1xyXG4gIHZhciBwb3J0ID0gcGFyc2VJbnQodmFsLCAxMCk7XHJcblxyXG4gIGlmIChpc05hTihwb3J0KSkge1xyXG4gICAgLy8gbmFtZWQgcGlwZVxyXG4gICAgcmV0dXJuIHZhbDtcclxuICB9XHJcblxyXG4gIGlmIChwb3J0ID49IDApIHtcclxuICAgIC8vIHBvcnQgbnVtYmVyXHJcbiAgICByZXR1cm4gcG9ydDtcclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwO1xyXG4iLCJcclxuY29uc3QgZGJfaG9zdCA9ICdzcWwnO1xyXG4vLyDliKnnlKjjgq/jg6njgrnnrYnjga7oqq3jgb/ovrzjgb9cclxuXHJcbi8vIOOCqOODqeODvOODoeODg+OCu+ODvOOCuOetieOCkuS/neWtmOODu+ihqOekuuOBmeOCi+OCr+ODqeOCuVxyXG5pbXBvcnQge0NfRHNwTWVzc2FnZSB9ICAgICBmcm9tICcuLi8uLi8uLi9tYWkvc3JjL2RfdXRsL0NfRHNwTWVzc2FnZSc7XHJcblxyXG4vLyDkvY3nva7jgajmlrnlkJHjgpLooajjgZnjgq/jg6njgrlcclxuaW1wb3J0IHsgQ19Qb2ludERpciB9ICAgICAgZnJvbSAnLi4vLi4vLi4vbWFpL3NyYy9kX21kbC9DX1BvaW50RGlyJztcclxuXHJcbi8vIOa7nuWcqOS9jee9ruOCkuekuuOBmeOCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCB9ICBmcm9tICcuLi8uLi8uLi9tYWkvc3JjL2RfbWRsL0NfTW92YWJsZVBvaW50JztcclxuXHJcbi8vIOOCruODq+ODieOCr+ODqeOCueWFqOiIrFxyXG5pbXBvcnQge0NfR3VpbGR9ICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9tYWkvc3JjL2RfbWRsL0NfR3VpbGQnO1xyXG5cclxuLy8g44OR44O844OG44Kj44O844Kv44Op44K55YWo6IisXHJcbmltcG9ydCB7Q19UZWFtfSAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF9tZGwvQ19UZWFtJztcclxuXHJcbi8vIOODkuODvOODreODvOOCr+ODqeOCueWFqOiIrFxyXG5pbXBvcnQge0NfSGVybywgSlNPTl9IZXJvfSBmcm9tICAnLi4vLi4vLi4vbWFpL3NyYy9kX21kbC9DX0hlcm8nO1xyXG5cclxuLy8g44K744O844OW44OH44O844K/KOOCr+ODqeOCpOOCouODs+ODiOOBqOOBrumAo+aQuinlhajoiKxcclxuaW1wb3J0IHtDX1NhdmVEYXRhLCBKU09OX1NhdmVEYXRhfSBmcm9tICcuLi8uLi8uLi9tYWkvc3JjL2RfbWRsL0NfU2F2ZURhdGEnO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOS4u+OAgOWHpuOAgOeQhiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuaW50ZXJmYWNlIElfR2xvYmFsQXJndW1lbnRzIHtcclxuICAgIG1vZGU/OiBzdHJpbmc7XHJcbiAgICBubWJyPzogbnVtYmVyO1xyXG4gICAgcGlkPzogIG51bWJlcjtcclxuICAgIGhyZXNfSlNPTj86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIElfUmV0dXJuIHtcclxuICAgIGVjb2RlOiBudW1iZXI7XHJcbiAgICBlbXNnOiAgc3RyaW5nO1xyXG4gICAgc2F2ZT86IEpTT05fU2F2ZURhdGE7XHJcbiAgICBkYXRhPzoge1xyXG4gICAgICAgIGhyZXM6SlNPTl9IZXJvW107XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEdldHRpbmcgTmV3IEdhbWUgc3RhcnRpaW5nIGZyb20gR3VsZFxyXG5leHBvcnQgZnVuY3Rpb24gbmV3R3VsZChhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogSV9SZXR1cm4ge1xyXG4gICAgaW5pdChhcmcpO1xyXG4gICAgY29uc3QgIGd1bGQgPSBuZXdfZ3VsZCgpO1xyXG4gICAgY29uc3QgIHRlYW0gPSBuZXdfdGVhbShndWxkKTtcclxuICAgIGNvbnN0ICBzYXZlID0gbmV3X3NhdmUoZ3VsZCwgdGVhbSk7XHJcbiAgICByZXR1cm4gc2F2ZV9lbmNvZGUoMCwgc2F2ZSk7XHJcbn1cclxuXHJcbi8vIEdldHRpbmcgQW55IE5ldyBIZW9yZXMgZGF0YVxyXG5leHBvcnQgZnVuY3Rpb24gYWxsSHJlcyhhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogSV9SZXR1cm4ge1xyXG4gICAgaW5pdChhcmcpO1xyXG4gICAgY29uc3QgIGhyZXMgPSBuZXdfaHJlcygpO1xyXG4gICAgcmV0dXJuIGhyZXNfZW5jb2RlKDAsICBocmVzKTtcclxufVxyXG5cclxuIFxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLyAgIOOCteODluODq+ODvOODgeODs1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5mdW5jdGlvbiBlcnJfZW5jb2RlKGNvZGU6IG51bWJlciwgbXNnczogc3RyaW5nW10pOiBJX1JldHVybiB7XHJcbiAgICBjb25zdCByZXRfYXNzb2M6IElfUmV0dXJuID0ge2Vjb2RlOmNvZGUsIGVtc2c6ICcnfTtcclxuICAgIGZvciAoY29uc3QgbXNnIGluIG1zZ3MpIHJldF9hc3NvYy5lbXNnICs9IG1zZzsgXHJcbiAgICByZXR1cm4gcmV0X2Fzc29jO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlX2VuY29kZShjb2RlOiBudW1iZXIsIHNhdmU6IENfU2F2ZURhdGEpOiBJX1JldHVybiB7XHJcbiAgICBjb25zdCByZXRfYXNzb2M6IElfUmV0dXJuID0ge2Vjb2RlOjAsIGVtc2c6ICcnfTtcclxuXHJcbiAgICBpZiAoY29kZSAhPT0gMCB8fCBndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICByZXR1cm4gZXJyX2VuY29kZShjb2RlLCBndi5tZXMuZ2V0X2Vycl9tZXNzYWdlcygpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0X2Fzc29jLmVjb2RlID0gMDtcclxuICAgICAgICByZXRfYXNzb2MuZW1zZyAgPSAnU3RhdHVzIE9LJztcclxuICAgICAgICByZXRfYXNzb2Muc2F2ZSAgPSBzYXZlLmVuY29kZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXRfYXNzb2M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhyZXNfZW5jb2RlKGNvZGU6IG51bWJlciwgaHJlczogQ19IZXJvW10pOiBJX1JldHVybiB7XHJcbiAgICBjb25zdCByZXRfYXNzb2M6IElfUmV0dXJuID0ge2Vjb2RlOjAsIGVtc2c6ICcnfTtcclxuXHJcbiAgICBpZiAoY29kZSAhPT0gMCB8fCBndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICByZXR1cm4gZXJyX2VuY29kZShjb2RlLCBndi5tZXMuZ2V0X2Vycl9tZXNzYWdlcygpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0X2Fzc29jLmVjb2RlID0gMDtcclxuICAgICAgICByZXRfYXNzb2MuZW1zZyAgPSAnU3RhdHVzIE9LJztcclxuXHJcbiAgICAgICAgY29uc3QgaHJlc19hcnJheTogSlNPTl9IZXJvW10gPSBbXTtcclxuICAgICAgICBmb3IoY29uc3QgaGVybyBvZiBocmVzKSB7XHJcbiAgICAgICAgICAgIGhyZXNfYXJyYXkucHVzaChoZXJvLmVuY29kZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0X2Fzc29jLmRhdGEgID0ge2hyZXM6IGhyZXNfYXJyYXl9O1xyXG4gICAgICAgIHJldHVybiByZXRfYXNzb2M7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld19ocmVzKCk6IENfSGVyb1tdIHtcclxuICAgIGNvbnN0IGhlcm9lczogQ19IZXJvW10gPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2Eubm1icjsgaSsrKSB7XHJcbiAgICAgICAgaGVyb2VzLnB1c2goKG5ldyBDX0hlcm8oKSkucmFuZG9tX21ha2UoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGVyb2VzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdfc2F2ZShndWxkOiBDX0d1aWxkLCB0ZWFtOiBDX1RlYW0pOiBDX1NhdmVEYXRhIHtcclxuICAgIHJldHVybiBuZXcgQ19TYXZlRGF0YSh7XHJcbiAgICAgICAgcGxheWVyX2lkOiBnYS5waWQsXHJcbiAgICAgICAgYXV0b19tb2RlOiAnMCcsXHJcbiAgICAgICAgaXNfYWN0aXZlOiAnMScsXHJcbiAgICAgICAgaXNfZGVsZXRlOiAnMCcsXHJcblxyXG4gICAgICAgIGFsbF9tdnB0OiAgIFtdLFxyXG4gICAgICAgIGFsbF9tYXplOiAgIFtdLFxyXG4gICAgICAgIGFsbF9ndWxkOiAgIFtndWxkLmVuY29kZSgpXSwgXHJcbiAgICAgICAgYWxsX3RlYW06ICAgW3RlYW0uZW5jb2RlKCldLFxyXG5cclxuLy9sb2NcclxuICAgICAgICBteXBvczogICAgICB0ZWFtLmdldF9sb2MoKS5lbmNvZGUoKSwgXHJcbn0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdfZ3VsZCgpOiBDX0d1aWxkIHtcclxuICAgIGNvbnN0IGd1bGQgPSBuZXcgQ19HdWlsZCgpO1xyXG4gICAgZ3VsZC5kZWNvZGUoe25hbWU6ICflp4vjgb7jgorjga7ooZfjga7lhpLpmbrogIXjgq7jg6vjg4knfSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgICAgZ3VsZC5hZGRfaGVybygobmV3IENfSGVybygpKS5yYW5kb21fbWFrZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZ3VsZDtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV3X3RlYW0oZ3VsZDogQ19HdWlsZCk6IENfVGVhbSB7XHJcbiAgICBjb25zdCB0ZWFtID0gbmV3IENfVGVhbSgpO1xyXG4vL2xvY1xyXG4gICAgY29uc3QgbG9jID0gbmV3IENfTW92YWJsZVBvaW50KCk7XHJcbiAgICBsb2MuZGVjb2RlKHtcclxuICAgICAgICBraW5kOiAgICdHdWxkJyxcclxuICAgICAgICBuYW1lOiAgICBndWxkLmdldF9uYW1lKCksXHJcbiAgICAgICAgbG9jX3VpZDogZ3VsZC51aWQoKSxcclxuICAgICAgICBsb2NfcG9zOiBuZXcgQ19Qb2ludERpcih7XHJcbiAgICAgICAgICAgICd4JzogMCxcclxuICAgICAgICAgICAgJ3knOiAwLFxyXG4gICAgICAgICAgICAneic6IDAsXHJcbiAgICAgICAgICAgICdkJzogMCxcclxuICAgICAgICB9KSxcclxuICAgICAgICB0ZWFtX3VpZDogdGVhbS51aWQoKSxcclxuICAgIH0pO1xyXG4gICAgdGVhbS5zZXRfcHJwKHtuYW1lOifjgbLjgojjgZPjgZXjgpPjg4Hjg7zjg6AnfSk7XHJcbi8vbG9jXHJcbiAgICB0ZWFtLnNldF9sb2MobG9jKTtcclxuXHJcbiAgICAvLyAgICB0ZWFtLnNldF9sb2MoKG5ldyBDX01vdmFibGVQb2ludCgpKS5kZWNvZGUobG9jLmVuY29kZSgpKSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAzOyBpKyspIHsgXHJcbiAgICAgICAgdGVhbS5hZGRfaGVybygobmV3IENfSGVybygpKS5yYW5kb21fbWFrZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGVhbTtcclxufVxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWIneOAgOacn+OAgOioreOAgOWumiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxubGV0IGd2OiBDX0dsb2JhbFZhcjtcclxubGV0IGdhOiBDX0dsb2JhbEFyZ3VtZW50cztcclxuXHJcbmZ1bmN0aW9uIGluaXQob2JqOiBJX0dsb2JhbEFyZ3VtZW50cyk6IHZvaWQge1xyXG4gICAgZ3YgPSBuZXcgQ19HbG9iYWxWYXIoKTtcclxuICAgIGdhID0gbmV3IENfR2xvYmFsQXJndW1lbnRzKG9iaik7XHJcbiAgICByZXR1cm47XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy9cclxuLy8vLy8gICAgIOOCr+ODqeOCueWuo+iogFxyXG4vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyDlpKfln5/lpInmlbDjga7oqK3lrppcclxuY2xhc3MgQ19HbG9iYWxWYXIge1xyXG4gICAgcHVibGljIG1lczogQ19Ec3BNZXNzYWdlO1xyXG5cclxuICAgIHB1YmxpYyBNYXplX3NpemVfeCA9IDIxO1xyXG4gICAgcHVibGljIE1hemVfc2l6ZV95ID0gMjE7XHJcbiAgICBwdWJsaWMgTGltaXRfb2Zfcm9vbSAgICAgPSA1O1xyXG4gICAgcHVibGljIE1heF9zaXplX29mX3Jvb20gID0gMztcclxuICAgIHB1YmxpYyBNYXhfb2ZfTWF6ZV9GbG9vciA9IDM7XHJcblxyXG4gICAgcHVibGljIHRlYW1fYXNzb2M6IENfVGVhbVtdICA9IFtdO1xyXG4gICAgcHVibGljIHRlYW06ICAgICAgIENfVGVhbTtcclxuICAgIHB1YmxpYyBndWxkX2Fzc29jOiBDX0d1aWxkW10gPSBbXTtcclxuICAgIHB1YmxpYyBndWxkOiAgICAgICBDX0d1aWxkO1xyXG4gICAgcHVibGljIGhlcm9lczogICAgIENfSGVyb1tdICA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm1lcyAgPSBuZXcgQ19Ec3BNZXNzYWdlKCAvKiBpc0hUTUwgPSAqLyBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy50ZWFtID0gbmV3IENfVGVhbSgpO1xyXG4gICAgICAgIHRoaXMuZ3VsZCA9IG5ldyBDX0d1aWxkKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFBPU1TlvJXmlbDjga7oqK3lrppcclxuY2xhc3MgQ19HbG9iYWxBcmd1bWVudHMge1xyXG4gICAgcHVibGljIG1vZGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBubWJyOiBudW1iZXIgPSAxO1xyXG4gICAgcHVibGljIHBpZDogIG51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgaHJlc19KU09OOiBzdHJpbmd8dW5kZWZpbmVkID0gJyc7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9iajogSV9HbG9iYWxBcmd1bWVudHN8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlID0gb2JqPy5tb2RlID8/ICd1bmtub3duJztcclxuICAgICAgICB0aGlzLm5tYnIgPSBvYmo/Lm5tYnIgIT09IHVuZGVmaW5lZCAmJiAhaXNOYU4ob2JqLm5tYnIpID8gTnVtYmVyKG9iai5ubWJyKSA6IDE7XHJcbiAgICAgICAgdGhpcy5waWQgID0gb2JqPy5waWQgICE9PSB1bmRlZmluZWQgJiYgIWlzTmFOKG9iai5waWQpICA/IE51bWJlcihvYmoucGlkKSAgOiAxO1xyXG4gICAgICAgIHRoaXMuaHJlc19KU09OID0gb2JqPy5ocmVzX0pTT04gPz8gdW5kZWZpbmVkO1xyXG4vL2RlYnVnICAgICAgICBjb25zb2xlLmxvZyhgbW9kZT0ke3RoaXMubW9kZX0sIG5tYnI9JHt0aGlzLm5tYnJ9LCBwaWQgPSAke3RoaXMucGlkfWApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKlxyXG5tb2R1bGUuZXhwb3J0cyA9IG5ld0dhbWU7XHJcbm1vZHVsZS5leHBvcnRzID0gbmV3SGVybztcclxuKi8iLCJcclxuY29uc3QgZGJfaG9zdCA9ICdzcWwnO1xyXG4vLyDliKnnlKjjgq/jg6njgrnnrYnjga7oqq3jgb/ovrzjgb9cclxuXHJcbi8vIOOCqOODqeODvOODoeODg+OCu+ODvOOCuOetieOCkuS/neWtmOODu+ihqOekuuOBmeOCi+OCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX0RzcE1lc3NhZ2UgfSAgICAgZnJvbSAnLi4vLi4vLi4vbWFpL3NyYy9kX3V0bC9DX0RzcE1lc3NhZ2UnO1xyXG5cclxuLy8gTXlTcWzjgpLmibHjgYbjgq/jg6njgrlcclxuaW1wb3J0IG15c3FsIGZyb20gXCJteXNxbDIvcHJvbWlzZVwiO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOS4u+OAgOWHpuOAgOeQhiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuaW50ZXJmYWNlIElfR2xvYmFsQXJndW1lbnRzIHtcclxuICAgIG1vZGU/OiBzdHJpbmc7XHJcbiAgICBwaWQ6ICAgbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSV9SZXR1cm4ge1xyXG4gICAgZWNvZGU6ICAgbnVtYmVyO1xyXG4gICAgZW1zZzogICAgc3RyaW5nO1xyXG4gICAgcGlkOiAgICAgbnVtYmVyO1xyXG4gICAgbmFtZTogICAgc3RyaW5nO1xyXG4gICAgbWJuYW1lOiAgc3RyaW5nO1xyXG59XHJcblxyXG5jbGFzcyBDX05vclJldHVybiBpbXBsZW1lbnRzIElfUmV0dXJuIHtcclxuICAgIHB1YmxpYyBlY29kZTogICBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGVtc2c6ICAgIHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIHBpZDogICAgIG51bWJlciA9IC0xO1xyXG4gICAgcHVibGljIG5hbWU6ICAgIHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIG1ibmFtZTogIHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHBpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIG1ibmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5waWQgICAgPSBwaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lICAgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMubWJuYW1lID0gbWJuYW1lO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX0VyclJldHVybiBpbXBsZW1lbnRzIElfUmV0dXJuIHtcclxuICAgIHB1YmxpYyBlY29kZTogICBudW1iZXIgPSAxMDAwO1xyXG4gICAgcHVibGljIGVtc2c6ICAgIHN0cmluZyA9ICdlcnJvcic7XHJcbiAgICBwdWJsaWMgcGlkOiAgICAgbnVtYmVyID0gLTE7XHJcbiAgICBwdWJsaWMgbmFtZTogICAgc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgbWJuYW1lOiAgc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZWNvZGU6IG51bWJlciwgZW1zZzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lY29kZSAgPSBlY29kZTtcclxuICAgICAgICB0aGlzLmVtc2cgICA9IGVtc2c7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBHZXR0aW5nIE5ldyBHYW1lIHN0YXJ0aWluZyBmcm9tIEd1bGRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRlc3QoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGxldCByZXR1cm5fdmFsOiBJX1JldHVybjtcclxuXHJcbiAgICBpbml0KGFyZyk7XHJcblxyXG4gICAgaWYgKGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIGd2Lm1lcy5kaXNwbGF5X2Vycl9tZXNzYWdlKCk7XHJcbiAgICAgICAgcmV0dXJuX3ZhbCA9IG5ldyBDX0VyclJldHVybigxMDAsICdkYl9tYWkgT1BFTiBFUlJPUiAnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuX3ZhbCA9IGF3YWl0IGdldF9wbGF5ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5sKCk7XHJcbiAgICByZXR1cm4gcmV0dXJuX3ZhbDtcclxufVxyXG5cclxuIFxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLyAgIOOCteODluODq+ODvOODgeODs1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRfcGxheWVyKCk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGlmIChnYS5waWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG5ldyBDX0VyclJldHVybig5OTksICdQaWQgVW5kZWZpbmVkJyk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdF91c2VycygpLnRoZW4ocnNsdF91c2VycyA9PiB7XHJcbiAgICAgICAgaWYgKHJzbHRfdXNlcnMgPT09IHVuZGVmaW5lZCB8fCBndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgZ3YubWVzLmRpc3BsYXlfZXJyX21lc3NhZ2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDX0VyclJldHVybigyMDAsICdTUUwgRVJST1IgJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyc2x0X3VzZXJzLmxlbmd0aCA8IDEpIHJldHVybiBuZXcgQ19FcnJSZXR1cm4oOTAwLCBgTm8gZGF0YSBleGlzdCBvbiBwaWQ9JHtnYS5waWR9YCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgQ19Ob3JSZXR1cm4oXHJcbiAgICAgICAgICAgIHJzbHRfdXNlcnNbMF0uaWQsIFxyXG4gICAgICAgICAgICByc2x0X3VzZXJzWzBdLm5hbWUsIFxyXG4gICAgICAgICAgICByc2x0X3VzZXJzWzBdLm1ibmFtZVxyXG4gICAgICAgICk7XHJcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ19FcnJSZXR1cm4oMTAwLCAnU1FMIEVSUk9SOiAnICsgZXJyKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSV90YmxfcGxheWVyIGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldHtcclxuICAgIGlkOiAgICAgIG51bWJlcjtcclxuICAgIG5hbWU6ICAgIHN0cmluZztcclxuICAgIHBhc3N3ZDogIHN0cmluZztcclxuICAgIG1ibmFtZTogIHN0cmluZztcclxuICAgIGVtYWlsOiAgIHN0cmluZztcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2VsZWN0X3VzZXJzKCk6IFByb21pc2U8SV90YmxfcGxheWVyW118dW5kZWZpbmVkPiB7XHJcbiAgICBjb25zdCBzcWwgPSBgXHJcbiAgICAgICAgU0VMRUNUIGlkLCBuYW1lLCBwYXNzd2QsIG1ibmFtZSwgZW1haWwgRlJPTSB0YmxfcGxheWVyXHJcbiAgICAgICAgICAgIFdIRVJFICBpZCA9IDppZFxyXG4gICAgYDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IFtyc2x0Um93U2V0XSA9IGF3YWl0IGd2LmRiX3Bvb2wucXVlcnk8SV90YmxfcGxheWVyW10+KHNxbCwge2lkOiBnYS5waWR9KTtcclxuICAgICAgICByZXR1cm4gcnNsdFJvd1NldDtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGd2Lm1lcy5zZXRfZXJyX21lc3NhZ2UoJ1NRTCBFUlJPUiBTRUxFQ1QgRlJPTSB0YmxfcGxheWVyOiAnICsgZXJyKTtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Yid44CA5pyf44CA6Kit44CA5a6aICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5sZXQgZ3Y6IENfR2xvYmFsVmFyO1xyXG5sZXQgZ2E6IENfR2xvYmFsQXJndW1lbnRzO1xyXG5cclxuZnVuY3Rpb24gaW5pdChvYmo6IElfR2xvYmFsQXJndW1lbnRzKTogdm9pZCB7XHJcbiAgICBndiA9IG5ldyBDX0dsb2JhbFZhcigpO1xyXG4gICAgZ2EgPSBuZXcgQ19HbG9iYWxBcmd1bWVudHMob2JqKTtcclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBmaW5sKCk6IHZvaWQge1xyXG4gICAgZ3YuZmlubCgpO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vXHJcbi8vLy8vICAgICDjgq/jg6njgrnlrqPoqIBcclxuLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8g5aSn5Z+f5aSJ5pWw44Gu6Kit5a6aXHJcbmNsYXNzIENfR2xvYmFsVmFyIHtcclxuICAgIHB1YmxpYyBtZXM6IENfRHNwTWVzc2FnZTtcclxuXHJcbiAgICBwdWJsaWMgZGJfaG9zdDogICBzdHJpbmcgPSBcInNxbFwiO1xyXG4gICAgcHVibGljIGRiX3BvcnQ6ICAgbnVtYmVyID0gIDMzMDY7XHJcbiAgICBwdWJsaWMgZGJfbmFtZTogICBzdHJpbmcgPSBcImRiX21haVwiO1xyXG4gICAgcHVibGljIGRiX3VzZXI6ICAgc3RyaW5nID0gXCJpdHNheW5vMzNcIjtcclxuICAgIHB1YmxpYyBkYl9wYXNzOiAgIHN0cmluZyA9IFwiUEUzMzM4MzNcIjtcclxuXHJcbiAgICBwdWJsaWMgZGJfcG9vbDogICBteXNxbC5Qb29sO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm1lcyAgICAgPSBuZXcgQ19Ec3BNZXNzYWdlKCAvKiBpc0hUTUwgPSAqLyBmYWxzZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZGJfcG9vbCA9IG15c3FsLmNyZWF0ZVBvb2woe1xyXG4gICAgICAgICAgICBob3N0OiAgICAgIHRoaXMuZGJfaG9zdCxcclxuICAgICAgICAgICAgcG9ydDogICAgICB0aGlzLmRiX3BvcnQsXHJcbiAgICAgICAgICAgIHVzZXI6ICAgICAgdGhpcy5kYl91c2VyLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogIHRoaXMuZGJfcGFzcyxcclxuICAgICAgICAgICAgZGF0YWJhc2U6ICB0aGlzLmRiX25hbWUsXHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb25MaW1pdDogICAgIDEwLCAvLyDmjqXntprjgpLlvLXjgorntprjgZHjgovmlbBcclxuICAgICAgICAgICAgd2FpdEZvckNvbm5lY3Rpb25zOiB0cnVlLFxyXG4gICAgICAgICAgICBuYW1lZFBsYWNlaG9sZGVyczogdHJ1ZSxcclxuICAgICAgICAgICAganNvblN0cmluZ3M6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZmlubCgpIHtcclxuICAgICAgICB0aGlzLmRiX3Bvb2wuZW5kKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFBPU1TlvJXmlbDjga7oqK3lrppcclxuY2xhc3MgQ19HbG9iYWxBcmd1bWVudHMge1xyXG4gICAgcHVibGljIG1vZGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBwaWQ6ICBudW1iZXIgPSAtMTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob2JqOiBJX0dsb2JhbEFyZ3VtZW50c3x1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLm1vZGUgPSBvYmo/Lm1vZGUgPz8gJ3Vua25vd24nO1xyXG4gICAgICAgIHRoaXMucGlkICA9IG9iaj8ucGlkICAhPT0gdW5kZWZpbmVkICYmICFpc05hTihvYmoucGlkKSAgPyBOdW1iZXIob2JqLnBpZCkgIDogLTE7XHJcbi8vZGVidWcgICAgICAgIGNvbnNvbGUubG9nKGBtb2RlPSR7dGhpcy5tb2RlfSwgcGlkID0gJHt0aGlzLnBpZH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuLypcclxubW9kdWxlLmV4cG9ydHMgPSBuZXdHYW1lO1xyXG5tb2R1bGUuZXhwb3J0cyA9IG5ld0hlcm87XHJcbiovIiwiLy8g5Yip55So44Kv44Op44K5562J44Gu6Kqt44G/6L6844G/XHJcblxyXG4vLyDjgqjjg6njg7zjg6Hjg4Pjgrvjg7zjgrjnrYnjgpLkv53lrZjjg7vooajnpLrjgZnjgovjgq/jg6njgrlcclxuaW1wb3J0IHsgQ19Ec3BNZXNzYWdlIH0gICBmcm9tICcuLi8uLi8uLi9tYWkvc3JjL2RfdXRsL0NfRHNwTWVzc2FnZSc7XHJcblxyXG4vLyDjg4Djg7Pjgrjjg6fjg7Pjg57jg4Pjg5fjga7jgrvjg6vjga7nqK7poZ7jgpLooajjgZnliJfmjJnlnotcclxuaW1wb3J0IHsgVF9NektpbmQgfSAgICAgICBmcm9tICAnLi4vLi4vLi4vbWFpL3NyYy9kX21kbC9UX016S2luZCc7XHJcblxyXG4vLyDmlrnlkJHjgpLooajjgZnjgq/jg6njgrlcclxuaW1wb3J0IHsgQ19Qb2ludERpciwgVF9EaXJlY3Rpb24gfSAgIGZyb20gICcuLi8uLi8uLi9tYWkvc3JjL2RfbWRsL0NfUG9pbnREaXInO1xyXG5cclxuLy8g5L2N572u44O757WM6Lev44KS6KGo44GZ44Kv44Op44K55YWo6IisXHJcbmltcG9ydCB7IENfTW92YWJsZVBvaW50IH0gICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9tYWkvc3JjL2RfbWRsL0NfTW92YWJsZVBvaW50JztcclxuXHJcbi8vIE1BWkXplqLkv4Ljgq/jg6njgrnlhajoiKxcclxuaW1wb3J0IHsgQ19NYXplIH0gICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF9tZGwvQ19NYXplJztcclxuaW1wb3J0IHsgQ19NYXplSW5mbywgSlNPTl9NYXplSW5mbyB9IGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF9tZGwvQ19NYXplSW5mbyc7IC8vIE1hemXkvZzmiJDjga7jg4bjg7Pjg5fjg6zjg7zjg4jmg4XloLFcclxuXHJcbi8vIOODkeODvOODhuOCo+ODvOOCr+ODqeOCueWFqOiIrFxyXG5pbXBvcnQgeyBDX1RlYW0gfSAgICAgICAgIGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF9tZGwvQ19UZWFtJztcclxuXHJcbi8vIOODkuODvOODreODvOOCr+ODqeOCueWFqOiIrFxyXG5pbXBvcnQgeyBDX0hlcm8gfSAgICAgICAgIGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF9tZGwvQ19IZXJvJztcclxuXHJcbi8vIOOCu+ODvOODluODh+ODvOOCvyjjgq/jg6njgqTjgqLjg7Pjg4jjgajjga7pgKPmkLop5YWo6IisXHJcbmltcG9ydCB7IENfU2F2ZURhdGEsIEpTT05fU2F2ZURhdGEgfSBmcm9tICcuLi8uLi8uLi9tYWkvc3JjL2RfbWRsL0NfU2F2ZURhdGEnO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOS4u+OAgOWHpuOAgOeQhiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxubGV0IGd2OiBDX0dsb2JhbFZhcjtcclxubGV0IGdhOiBDX0dsb2JhbEFyZ3VtZW50cztcclxuXHJcbmludGVyZmFjZSBJX0dsb2JhbEFyZ3VtZW50cyB7XHJcbiAgICBtb2RlPzogc3RyaW5nO1xyXG4gICAgbm1icj86IG51bWJlcjtcclxuICAgIHBpZD86ICBudW1iZXI7XHJcbiAgICB0ZWFtPzogc3RyaW5nO1xyXG4gICAgbWF6ZT86IHN0cmluZztcclxuICAgIG1hemVfbmFtZT86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIElfUmV0dXJuIHtcclxuICAgIGVjb2RlOiBudW1iZXI7XHJcbiAgICBlbXNnOiAgc3RyaW5nO1xyXG4gICAgc2F2ZT86IEpTT05fU2F2ZURhdGE7XHJcbiAgICBkYXRhPzogb2JqZWN0O1xyXG59XHJcblxyXG4vLyBHZXR0aW5nIEluZm9ybWF0aW9uIG9mIEFsbCBNYXplXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGxNYXplKG9iajogSV9HbG9iYWxBcmd1bWVudHMpOiBJX1JldHVybiB7XHJcbiAgICBpbml0KG9iaik7XHJcblxyXG4gICAgY29uc3QgbWF6ZV9pbmZvX2FycmF5OiBKU09OX01hemVJbmZvW10gPSBbXTtcclxuICAgIGZvciAoY29uc3QgbmFtZSBpbiBndi5tYXplaW5mbykgbWF6ZV9pbmZvX2FycmF5LnB1c2goZ3YubWF6ZWluZm9bbmFtZV0uZW5jb2RlKCkpO1xyXG4gICAgcmV0dXJuIGFsbF9lbmNvZGUoXHJcbiAgICAgICAgMCwgXHJcbiAgICAgICAge21hemVpbmZvOiBtYXplX2luZm9fYXJyYXl9LFxyXG4gICAgKTtcclxufVxyXG5cclxuLy8gR2V0dGluZyBOZXcgTWF6ZVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWF6ZShvYmo6IElfR2xvYmFsQXJndW1lbnRzKTogSV9SZXR1cm4ge1xyXG4gICAgaW5pdChvYmopO1xyXG5cclxuICAgIGNvbnN0IFtuZXdfbWF6ZSwgbmV3X3Bvc10gPSBjcmVhdGVfbWF6ZShnYS5tYXplX25hbWUpOyBcclxuICAgIHJldHVybiBhbGxfZW5jb2RlKFxyXG4gICAgICAgIDAsIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWF6ZTogbmV3X21hemUuZW5jb2RlKCksXHJcbiAgICAgICAgICAgIHBvczogIG5ld19wb3MsXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcbn1cclxuXHJcbi8vIEdldHRpbmcgTmV3IEdhbWUgc3RhcnRpaW5nIGZyb20gTWF6ZVxyXG5leHBvcnQgZnVuY3Rpb24gbmV3TWF6ZShvYmo6IElfR2xvYmFsQXJndW1lbnRzKTogSV9SZXR1cm4ge1xyXG4gICAgaW5pdChvYmopO1xyXG5cclxuICAgIGNvbnN0IFtuZXdfbWF6ZSwgbmV3X3Bvc10gPSBjcmVhdGVfbWF6ZSgnJyk7IFxyXG4gICAgY29uc3QgIG5ld190ZWFtID0gY3JlYXRlX3RlYW0obmV3X21hemUsIG5ld19wb3MpOyBcclxuICAgIGNvbnN0ICBuZXdfc2F2ZSA9IGNyZWF0ZV9zYXZlKG5ld19tYXplLCBuZXdfdGVhbSk7XHJcbiAgICBjb25zdCAgcmV0X0pTT04gPSBzYXZlX2VuY29kZSgwLCBuZXdfc2F2ZSk7XHJcbiAgICByZXR1cm4gcmV0X0pTT047XHJcbn1cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLyAgIOOCteODluODq+ODvOODgeODs1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5mdW5jdGlvbiBlcnJfZW5jb2RlKGNvZGU6IG51bWJlciwgbXNnczogc3RyaW5nW10pOiBJX1JldHVybiB7XHJcbiAgICBjb25zdCByZXRfYXNzb2M6IElfUmV0dXJuID0ge2Vjb2RlOmNvZGUsIGVtc2c6ICcnfTtcclxuICAgIGZvciAoY29uc3QgbXNnIGluIG1zZ3MpIHJldF9hc3NvYy5lbXNnICs9IG1zZzsgXHJcbiAgICByZXR1cm4gcmV0X2Fzc29jO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbGxfZW5jb2RlKGNvZGU6IG51bWJlciwgZGF0YTogb2JqZWN0KTogSV9SZXR1cm4ge1xyXG4gICAgY29uc3QgcmV0X2Fzc29jOiBJX1JldHVybiA9IHtlY29kZTpjb2RlLCBlbXNnOiAnJ307XHJcblxyXG4gICAgcmV0X2Fzc29jLmVjb2RlID0gY29kZTtcclxuICAgIGlmIChjb2RlICE9PSAwIHx8IGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIHJldHVybiBlcnJfZW5jb2RlKGNvZGUsIGd2Lm1lcy5nZXRfZXJyX21lc3NhZ2VzKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0X2Fzc29jLmVtc2cgPSAnU3RhdHVzIE9LJztcclxuICAgIHJldF9hc3NvYy5kYXRhID0gIGRhdGE7XHJcblxyXG4gICAgcmV0dXJuIHJldF9hc3NvYztcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZV9lbmNvZGUoY29kZTogbnVtYmVyLCBzYXZlOiBDX1NhdmVEYXRhKTogSV9SZXR1cm4ge1xyXG4gICAgY29uc3QgcmV0X2Fzc29jOiBJX1JldHVybiA9IHtlY29kZTpjb2RlLCBlbXNnOiAnJ307XHJcblxyXG4gICAgaWYgKGNvZGUgIT09IDAgfHwgZ3YubWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgcmV0dXJuIGVycl9lbmNvZGUoY29kZSwgZ3YubWVzLmdldF9lcnJfbWVzc2FnZXMoKSk7XHJcbiAgICB9XHJcbiAgICByZXRfYXNzb2MuZW1zZyA9ICdTdGF0dXMgT0snO1xyXG4gICAgcmV0X2Fzc29jLnNhdmUgPSBzYXZlLmVuY29kZSgpO1xyXG5cclxuICAgIHJldHVybiByZXRfYXNzb2M7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVfc2F2ZShtYXplOiBDX01hemUsIHRlYW06IENfVGVhbSk6IENfU2F2ZURhdGEge1xyXG4gICAgcmV0dXJuIG5ldyBDX1NhdmVEYXRhKHtcclxuICAgICAgICBwbGF5ZXJfaWQ6IGdhLnBpZCxcclxuICAgICAgICBhdXRvX21vZGU6ICcwJyxcclxuICAgICAgICBpc19hY3RpdmU6ICcxJyxcclxuICAgICAgICBpc19kZWxldGU6ICcwJyxcclxuXHJcbiAgICAgICAgYWxsX3RlYW06ICBbdGVhbS5lbmNvZGUoKV0sXHJcbiAgICAgICAgYWxsX21hemU6ICBbbWF6ZS5lbmNvZGUoKV0sXHJcbiAgICAgICAgYWxsX2d1bGQ6ICBbXSwgXHJcbiAgICAgICAgYWxsX212cHQ6ICBbXSwgXHJcblxyXG4gICAgICAgIG15cG9zOiAgICAgdGVhbS5nZXRfbG9jKCkuZW5jb2RlKCksXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlX21hemUobWF6ZV9uYW1lOiBzdHJpbmcgPSAnJyk6IFtDX01hemUsIENfUG9pbnREaXJdIHtcclxuICAgIGxldCBtYXplOiBDX01hemU7XHJcbiAgICBpZiAobWF6ZV9uYW1lID09ICcnKSB7XHJcbiAgICAgICAgbWF6ZSA9IG5ldyBDX01hemUoe1xyXG4gICAgICAgICAgICAnbmFtZScgIDogJ+Wni+OBvuOCiuOBrui/t+WuricsIFxyXG4gICAgICAgICAgICAnc2l6ZV94JzogMjEsIFxyXG4gICAgICAgICAgICAnc2l6ZV95JzogMjEsIFxyXG4gICAgICAgICAgICAnc2l6ZV96JzogZ3YuTWF4X29mX01hemVfRmxvb3JcclxuICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBtYXplaW5mbyA9IGd2Lm1hemVpbmZvW21hemVfbmFtZV07XHJcbiAgICAgICAgbWF6ZSA9IG5ldyBDX01hemUoe1xyXG4gICAgICAgICAgICAnbmFtZSc6ICAgbWF6ZWluZm8ubWJuYW1lLCBcclxuICAgICAgICAgICAgJ3NpemVfeCc6IG1hemVpbmZvLnNpemVfeCwgXHJcbiAgICAgICAgICAgICdzaXplX3knOiBtYXplaW5mby5zaXplX3ksIFxyXG4gICAgICAgICAgICAnc2l6ZV96JzogbWF6ZWluZm8uc2l6ZV96XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hemUuZ2V0X3pfbWF4KCk7IGkrKykge1xyXG4gICAgICAgIG1hemUuY3JlYXRlX21hemUoaSk7XHJcbiAgICB9IFxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBtYXplLmdldF96X21heCgpOyBpKyspIHtcclxuICAgICAgICBtYXplLmNyZWF0ZV9zdGFpcihpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHBvcyA9IG1hemUuY3JlYXRlX3N0YWlyKDApO1xyXG4gICAgcmV0dXJuIFttYXplLCBwb3NdO1xyXG59XHJcblxyXG4vLyDov7flrq7mjqLntKIg5paw6KaP44Ky44O844Og55So44Gu5pqr5a6a54mI5Yem572u44CC44Gd44Gu5LqMXHJcbmZ1bmN0aW9uIGNyZWF0ZV9ocmVzKCk6IENfSGVyb1tdIHtcclxuICAgIGNvbnN0IGhyZXM6IENfSGVyb1tdID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAzOyBpKyspIHtcclxuICAgICAgICBocmVzLnB1c2gobmV3IENfSGVybygpLnJhbmRvbV9tYWtlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBocmVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVfdGVhbShtYXplOiBDX01hemUsIHBvczogQ19Qb2ludERpcik6IENfVGVhbSB7XHJcbi8qXHJcbiAgICAkeCA9IDIgKiByYW5kb21faW50KDAsICgoJG1hemUtPmdldF9zaXplX3goKSAtIDEpIC8gMikgLSAxKSArIDE7XHJcbiAgICAkeSA9IDIgKiByYW5kb21faW50KDAsICgoJG1hemUtPmdldF9zaXplX3koKSAtIDEpIC8gMikgLSAxKSArIDE7XHJcbiAgICAkeiA9IDA7ICAvLyAgICAkeiA9IDEgKiByYW5kb21faW50KDAsICAoJGd2LT5tYXplLT5nZXRfc2l6ZV96KCkgLSAxKSk7XHJcblxyXG4gICAgJGQgPSByYW5kb21faW50KDAsIERpcmVjdDo6TUFYKTtcclxuKi9cclxuY29uc3QgdGVhbSA9IG5ldyBDX1RlYW0oKTtcclxuY29uc3QgbG9jICA9IG5ldyBDX01vdmFibGVQb2ludCgpLmRlY29kZSh7XHJcbiAgICAgICAgJ2tpbmQnICAgOiAnTWF6ZScsXHJcbiAgICAgICAgJ25hbWUnICAgOiAgbWF6ZS5nZXRfbmFtZSgpLFxyXG4gICAgICAgICdsb2NfdWlkJzogIG1hemUudWlkKCksXHJcbiAgICAgICAgJ2xvY19wb3MnOiAgcG9zLFxyXG4gICAgICAgICd0ZWFtX3VpZCc6IHRlYW0udWlkKCksXHJcbiAgICAgICAgLypcclxuICAgICAgICAnbG9jX3BvcycgPT4gW1xyXG4gICAgICAgICAgICAneCcgICA9PiAkeCxcclxuICAgICAgICAgICAgJ3knICAgPT4gJHksXHJcbiAgICAgICAgICAgICd6JyAgID0+ICR6LFxyXG4gICAgICAgICAgICAnZCcgICA9PiAkZCxcclxuICAgICAgICBdLFxyXG4qL1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHRlYW0uc2V0X3BycCh7J25hbWUnOiAn44Gy44KI44GT44GV44KT44OB44O844OgJ30pO1xyXG4gICAgdGVhbS5zZXRfbG9jKGxvYyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAzOyBpKyspIHtcclxuICAgICAgICB0ZWFtLmFkZF9oZXJvKG5ldyBDX0hlcm8oKS5yYW5kb21fbWFrZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGVhbTtcclxufVxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWIneOAgOacn+OAgOioreOAgOWumiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuZnVuY3Rpb24gaW5pdChvYmo6IElfR2xvYmFsQXJndW1lbnRzKTogdm9pZCB7XHJcbiAgICBndiA9IG5ldyBDX0dsb2JhbFZhcigpO1xyXG4gICAgZ2EgPSBuZXcgQ19HbG9iYWxBcmd1bWVudHMob2JqKTtcclxuICAgIHJldHVybjtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vL1xyXG4vLy8vLyAgICAg44Kv44Op44K55a6j6KiAXHJcbi8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIOWkp+Wfn+WkieaVsOOBruioreWumlxyXG5jbGFzcyBDX0dsb2JhbFZhciB7XHJcbiAgICBwdWJsaWMgbWVzOiBDX0RzcE1lc3NhZ2U7XHJcblxyXG4gICAgcHVibGljIG1hemVpbmZvOiB7W21hemVfbmFtZTogc3RyaW5nXTogQ19NYXplSW5mb30gPSB7fTtcclxuLy8gICAgcHVibGljIG1hemU6ICAgICBDX01hemU7XHJcbiAgICBwdWJsaWMgdGVhbTogICAgIENfVGVhbTtcclxuICAgIHB1YmxpYyBoZXJvZXM6ICAgQ19IZXJvW10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgTWF6ZV9zaXplX3ggICAgICAgPSAyMTtcclxuICAgIHB1YmxpYyBNYXplX3NpemVfeSAgICAgICA9IDIxO1xyXG4gICAgcHVibGljIExpbWl0X29mX3Jvb20gICAgID0gNTtcclxuICAgIHB1YmxpYyBNYXhfc2l6ZV9vZl9yb29tICA9IDM7XHJcbiAgICBwdWJsaWMgTWF4X29mX01hemVfRmxvb3IgPSAzO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm1lcyA9IG5ldyBDX0RzcE1lc3NhZ2UoIC8qIGlzSFRNTCA9ICovIGZhbHNlKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWF6ZWluZm8gPSBDX01hemVJbmZvLmdldF90YmxfYWxsKCk7IFxyXG4gICAgICAgIGZvciAoY29uc3QgbWkgb2YgbWF6ZWluZm8pIHRoaXMubWF6ZWluZm9bbWkubmFtZV0gPSBtaTsgXHJcbi8qXHJcbiAgICAgICAgY29uc3QgW3JzbHQsIG1hemVpbmZvXSAgPSBDX01hemVJbmZvLmdldF90YmxfYWxsKCk7XHJcbiAgICAgICAgdGhpcy5tYXplaW5mbyA9IChyc2x0ICE9PSB1bmRlZmluZWQpID8gbWF6ZWluZm8gOiBbXTsgXHJcbiovXHJcbi8qXHJcbiAgICAgICAgdGhpcy5tYXplICAgICAgICA9IG5ldyBDX01hemUoKS5jcmVhdGVfbWFrZSh7XHJcbiAgICAgICAgICAgIHNpemVfeDogICAgdGhpcy5NYXplX3NpemVfeCxcclxuICAgICAgICAgICAgc2l6ZV95OiAgICB0aGlzLk1hemVfc2l6ZV95LFxyXG4gICAgICAgICAgICBzaXplX3o6ICAgIHRoaXMuTWF4X29mX01hemVfRmxvb3IsIFxyXG4gICAgICAgICAgICBmaWxsX2tpbmQ6IFRfTXpLaW5kLkVtcHR5LFxyXG4gICAgICAgICAgICBtYXhfcm9vbTogIHRoaXMuTGltaXRfb2Zfcm9vbSxcclxuICAgICAgICAgICAgcm9vbV9zaXplOiB0aGlzLk1heF9zaXplX29mX3Jvb20sXHJcbiAgICB9KTtcclxuKi9cclxuICAgICAgICB0aGlzLnRlYW0gICAgICAgID0gIG5ldyBDX1RlYW0oe25hbWU6ICdOZXcgVGVhbScsIHg6MSwgeToxLCB6OjEsIGQ6VF9EaXJlY3Rpb24uTn0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gUE9TVOW8leaVsOOBruioreWumlxyXG5jbGFzcyBDX0dsb2JhbEFyZ3VtZW50cyB7XHJcbiAgICBwdWJsaWMgbW9kZTogICAgICBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGlkOiAgICAgICBudW1iZXIgICA9ICAxO1xyXG4gICAgcHVibGljIG1hemVfbmFtZTogc3RyaW5nICAgPSAnJztcclxuXHJcbi8qXHJcbiAgICBwdWJsaWMgdGVhbV9KU09OOiBzdHJpbmcgICA9ICcnO1xyXG4gICAgcHVibGljIG1hemVfSlNPTjogc3RyaW5nICAgPSAnJztcclxuKi9cclxuXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9iajogSV9HbG9iYWxBcmd1bWVudHMpIHtcclxuICAgICAgICB0aGlzLm1vZGUgICAgICA9IG9iaj8ubW9kZSA/PyAndW5rbm93bic7XHJcbiAgICAgICAgdGhpcy5waWQgICAgICAgPSBvYmo/LnBpZCAgIT09IHVuZGVmaW5lZCAmJiAhaXNOYU4ob2JqLnBpZCkgPyBOdW1iZXIob2JqLnBpZCkgOiAxO1xyXG4gICAgICAgIHRoaXMubWF6ZV9uYW1lID0gb2JqPy5tYXplX25hbWUgPz8gJyc7XHJcbi8qXHJcbiAgICAgICAgdGhpcy50ZWFtX0pTT04gPSBvYmo/LnRlYW0gICAgICA/PyAnJztcclxuICAgICAgICB0aGlzLm1hemVfSlNPTiA9IG9iaj8ubWF6ZSAgICAgID8/ICcnO1xyXG4qL1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEludGVyZmFjZSB9IGZyb20gJ3JlYWRsaW5lJztcbmltcG9ydCB7bmV3R3VsZCwgYWxsSHJlc30gZnJvbSAnLi4vbGliL19KU09OX21haV9ndWxkJ1xuaW1wb3J0IGNyZWF0ZUVycm9yICBmcm9tICdodHRwLWVycm9ycyc7XG5cbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbi8qIEdFVCB1c2VycyBsaXN0aW5nLiAqL1xucm91dGVyLmdldCAoJy8nLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIG1haUd1bGQnKTtcbn0pO1xuXG5yb3V0ZXIucG9zdCgnL25ld0d1bGQnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgdHJ5IHtcbi8vZGVidWcgICAgZm9yIChjb25zdCBrZXkgaW4gcmVxLmJvZHkpIGNvbnNvbGUuZXJyb3IoYHJlcS4ke2tleX06ICR7cmVxLmJvZHlba2V5XX1gKTtcblxuICAgIGNvbnN0IHJldCA9IG5ld0d1bGQocmVxLmJvZHkpO1xuICAgIHJlcy5zdGF0dXMoMjAwKTtcbiAgICByZXMuc2VuZChKU09OLnN0cmluZ2lmeShyZXQsIG51bGwsIFwiXFx0XCIpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coYG5ld0dhbWUgUE9TVCBlcnJvcjogJHtlcnJ9YCk7XG4gICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcbiAgfVxufSk7XG5yb3V0ZXIuZ2V0ICgnL25ld0d1bGQnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIE5ldyBHYW1lIFRvIEd1bGQgb2YgbWFpJyk7XG59KTtcblxucm91dGVyLnBvc3QoJy9hbGxIcmVzJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHRyeSB7XG4vL2RlYnVnICAgIGZvciAoY29uc3Qga2V5IGluIHJlcS5ib2R5KSBjb25zb2xlLmVycm9yKGByZXEuJHtrZXl9OiAke3JlcS5ib2R5W2tleV19YCk7XG5cbiAgICBjb25zdCByZXQgPSBhbGxIcmVzKHJlcS5ib2R5KTtcbiAgICByZXMuc3RhdHVzKDIwMCk7XG4gICAgcmVzLnNlbmQoSlNPTi5zdHJpbmdpZnkocmV0LCBudWxsLCBcIlxcdFwiKSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGBuZXdIcmVzIFBPU1QgZXJyb3I6ICR7ZXJyfWApO1xuICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XG4gIH1cbn0pO1xuXG5yb3V0ZXIuZ2V0ICgnL2FsbEhyZXMnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBHZXR0aW5nIEFsbCBIcmVzIGRhdGEgb2YgbWFpJyk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG4iLCJpbXBvcnQge3Rlc3R9IGZyb20gJy4uL2xpYi9fSlNPTl9tYWlfbGRzdidcbmltcG9ydCBjcmVhdGVFcnJvciAgZnJvbSAnaHR0cC1lcnJvcnMnO1xuXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbnZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4vKiBHRVQgdXNlcnMgbGlzdGluZy4gKi9cbnJvdXRlci5nZXQgKCcvJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSBtYWlMb2FkU2F2ZScpO1xufSk7XG5cbnJvdXRlci5wb3N0KCcvdGVzdCcsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICB0cnkge1xuLy9kZWJ1Z1xuICAgIGZvciAoY29uc3Qga2V5IGluIHJlcS5ib2R5KSBjb25zb2xlLmVycm9yKGByZXEuJHtrZXl9OiAke3JlcS5ib2R5W2tleV19YCk7XG5cbiAgICBjb25zdCByc2x0ID0gYXdhaXQgdGVzdChyZXEuYm9keSk7XG4gICAgaWYgKHJzbHQuZWNvZGUgIT09IDApIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYCoqKiBlcnJvcjogJHtyc2x0LmVjb2RlfTogJHtyc2x0LmVtc2d9ICoqKmApO1xuICAgICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcbiAgICB9XG5cbiAgICByZXMucmVuZGVyKCdwYWdlcy90ZXN0JywgcnNsdCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoYG5ld0xvYWQgUE9TVCBlcnJvcjogJHtlcnJ9YCk7XG4gICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcbiAgfVxufSk7XG5yb3V0ZXIuZ2V0ICgnL3Rlc3QnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgdHJ5IHtcbi8vZGVidWdcbiAgICBmb3IgKGNvbnN0IGtleSBpbiByZXEuYm9keSkgY29uc29sZS5lcnJvcihgcmVxLiR7a2V5fTogJHtyZXEuYm9keVtrZXldfWApO1xuXG4gICAgcmVzLnJlbmRlcigncGFnZXMvdGVzdCcse3BpZDogLTF9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coYG5ld0xvYWQgUE9TVCBlcnJvcjogJHtlcnJ9YCk7XG4gICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcbiAgfVxuLy8gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSBMb2FkIFRlc3QgIG9mIG1haScpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xuIiwiaW1wb3J0IHsgYWxsTWF6ZSwgZ2V0TWF6ZSwgbmV3TWF6ZSB9ICBmcm9tICcuLi9saWIvX0pTT05fbWFpX21hemUnO1xuaW1wb3J0IGNyZWF0ZUVycm9yICBmcm9tICdodHRwLWVycm9ycyc7XG5cbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbi8qIEdFVCB1c2VycyBsaXN0aW5nLiAqL1xucm91dGVyLmdldCAoJy8nLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIG1haU1hemUnKTtcbn0pO1xuXG5yb3V0ZXIucG9zdCgnL25ld01hemUnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgdHJ5IHtcbi8vZGVidWcgICAgZm9yIChjb25zdCBrZXkgaW4gcmVxLmJvZHkpIGNvbnNvbGUuZXJyb3IoYHJlcS4ke2tleX06ICR7cmVxLmJvZHlba2V5XX1gKTtcblxuICAgIGNvbnN0IHJldCA9IG5ld01hemUocmVxLmJvZHkpO1xuICAgIHJlcy5zdGF0dXMoMjAwKTtcbiAgICByZXMuc2VuZChKU09OLnN0cmluZ2lmeShyZXQsIG51bGwsIFwiXFx0XCIpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coYG5ld0dhbWUgUE9TVCBlcnJvcjogJHtlcnJ9YCk7XG4gICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcbiAgfVxufSk7XG5cbnJvdXRlci5nZXQgKCcvbmV3TWF6ZScsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgTmV3IEdhbWUgVG8gTWF6ZSBvZiBtYWknKTtcbn0pO1xuXG5yb3V0ZXIucG9zdCgnL2dldE1hemUnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgdHJ5IHtcbi8vZGVidWcgICAgZm9yIChjb25zdCBrZXkgaW4gcmVxLmJvZHkpIGNvbnNvbGUuZXJyb3IoYHJlcS4ke2tleX06ICR7cmVxLmJvZHlba2V5XX1gKTtcblxuICAgIGNvbnN0IHJldCA9IGdldE1hemUocmVxLmJvZHkpO1xuICAgIHJlcy5zdGF0dXMoMjAwKTtcbiAgICByZXMuc2VuZChKU09OLnN0cmluZ2lmeShyZXQsIG51bGwsIFwiXFx0XCIpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coYG5ld01hemUgUE9TVCBlcnJvcjogJHtlcnJ9YCk7XG4gICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcbiAgfVxufSk7XG5cbnJvdXRlci5nZXQgKCcvZ2V0TWF6ZScsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIEdldHRpbmcgTmV3IE1hemUgZGF0YSBvZiBtYWknKTtcbn0pO1xuXG5cbnJvdXRlci5wb3N0KCcvYWxsTWF6ZScsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICB0cnkge1xuLy9kZWJ1ZyAgICBmb3IgKGNvbnN0IGtleSBpbiByZXEuYm9keSkgY29uc29sZS5lcnJvcihgcmVxLiR7a2V5fTogJHtyZXEuYm9keVtrZXldfWApO1xuXG4gICAgY29uc3QgcmV0ID0gYWxsTWF6ZShyZXEuYm9keSk7XG4gICAgcmVzLnN0YXR1cygyMDApO1xuICAgIHJlcy5zZW5kKEpTT04uc3RyaW5naWZ5KHJldCwgbnVsbCwgXCJcXHRcIikpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhgbWF6ZUluZm8gUE9TVCBlcnJvcjogJHtlcnJ9YCk7XG4gICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcbiAgfVxufSk7XG5cbnJvdXRlci5nZXQgKCcvYWxsTWF6ZScsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIEFsbCBNYXplIEluZm9tYXRpb24gb2YgbWFpJyk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcblxudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG52YXIgbWFpR3VsZFJvdXRlciA9IHJlcXVpcmUoJy4vbWFpR3VsZCcpO1xudmFyIG1haU1hemVSb3V0ZXIgPSByZXF1aXJlKCcuL21haU1hemUnKTtcbnZhciBtYWlMZFN2Um91dGVyID0gcmVxdWlyZSgnLi9tYWlMZFN2Jyk7XG5cbi8vIHJvdXRlciBzZXR1cFxucm91dGVyLnVzZSgnL2d1bGQnLCAgIG1haUd1bGRSb3V0ZXIpO1xucm91dGVyLnVzZSgnL21hemUnLCAgIG1haU1hemVSb3V0ZXIpO1xucm91dGVyLnVzZSgnL2xkc3YnLCAgIG1haUxkU3ZSb3V0ZXIpO1xuXG4vKiBHRVQgdXNlcnMgbGlzdGluZy4gKi9cbnJvdXRlci5nZXQoJy8nLCBmdW5jdGlvbihyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikge1xuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgbWFpZXgnKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbi8qIEdFVCB1c2VycyBsaXN0aW5nLiAqL1xucm91dGVyLmdldCgnLycsIGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSB1c2VyIHJlc291cmNlJyk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWUtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cC1lcnJvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm15c3FsMi9wcm9taXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==