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
    C_Maze.prototype.can_move = function (p) {
        return this.size.within(p);
    };
    C_Maze.prototype.can_UD = function (p) {
        return this.is_movable(p);
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
            for (var msg in this.nor_message)
                all_msg += "{$msg}</br>\n";
            all_msg += "</p>\n";
            alert(all_msg);
        }
        else {
            for (var msg in this.nor_message)
                console.log(msg);
        }
        return;
    };
    C_DspMessage.prototype.display_err_message = function () {
        if (this.err_message.length < 1)
            return;
        if (this.isHTML) {
            var all_msg = "<p class='error_message'>\n";
            for (var msg in this.err_message)
                all_msg += "{$msg}</br>\n";
            all_msg += "</p>\n";
            alert(all_msg);
        }
        else {
            console.log("\n\n\n###\n### ERROR Occuerd.\n###\n");
            for (var msg in this.err_message)
                console.log("### ".concat(msg));
            console.log("###\n");
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
exports.newGame = newGame;
exports.newHres = newHres;
var db_host = 'sql';
// 利用クラス等の読み込み
// エラーメッセージ等を保存・表示するクラス
var C_DspMessage_1 = __webpack_require__(/*! ../../../mai/src/d_utl/C_DspMessage */ "../mai/src/d_utl/C_DspMessage.ts");
// ギルドクラス全般
var C_Guild_1 = __webpack_require__(/*! ../../../mai/src/d_mdl/C_Guild */ "../mai/src/d_mdl/C_Guild.ts");
// パーティークラス全般
var C_Team_1 = __webpack_require__(/*! ../../../mai/src/d_mdl/C_Team */ "../mai/src/d_mdl/C_Team.ts");
// ヒーロークラス全般
var C_Hero_1 = __webpack_require__(/*! ../../../mai/src/d_mdl/C_Hero */ "../mai/src/d_mdl/C_Hero.ts");
// セーブデータ(クライアントとの連携)全般
var C_SaveData_1 = __webpack_require__(/*! ../../../mai/src/d_mdl/C_SaveData */ "../mai/src/d_mdl/C_SaveData.ts");
function newGame(arg) {
    init(arg);
    var guld = new_guld();
    var team = new_team(guld);
    var save = new_save(guld, team);
    return save_encode(0, save);
}
function newHres(arg) {
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
    for (var i = 0; i < ga.num; i++) {
        heroes.push((new C_Hero_1.C_Hero()).random_make());
    }
    return heroes;
}
function new_save(guld, team) {
    return new C_SaveData_1.C_SaveData({
        auto_mode: '0',
        is_active: '1',
        is_delete: '0',
        all_mvpt: [],
        all_maze: [],
        all_guld: [guld.encode()],
        all_team: [team.encode()],
        //loc        mypos:      team.get_loc().encode(), 
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
    /*
        const loc = new C_MovablePoint();
        loc.decode({
            kind:   'Guld',
            name:    guld.get_name(),
            loc_uid: guld.uid(),
            loc_pos: new C_PointDir({
                'x': 0,
                'y': 0,
                'z': 0,
                'd': 0,
            }),
            team_uid: team.uid(),
        });
    */
    team.set_prp({ name: 'ひよこさんチーム' });
    //loc    team.set_loc(loc);
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
        var _a, _b, _c, _d;
        this.num = 1;
        this.pid = 1;
        this.hres_JSON = '';
        this.mode = (_a = obj === null || obj === void 0 ? void 0 : obj.mode) !== null && _a !== void 0 ? _a : 'unknown';
        this.num = (_b = obj === null || obj === void 0 ? void 0 : obj.num) !== null && _b !== void 0 ? _b : 1;
        this.pid = (_c = obj === null || obj === void 0 ? void 0 : obj.pid) !== null && _c !== void 0 ? _c : 1;
        this.hres_JSON = (_d = obj === null || obj === void 0 ? void 0 : obj.hres_JSON) !== null && _d !== void 0 ? _d : undefined;
    }
    return C_GlobalArguments;
}());
/*
module.exports = newGame;
module.exports = newHero;
*/ 


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
router.post('/newGame', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var ret;
    return __generator(this, function (_a) {
        try {
            ret = (0, _JSON_mai_guld_1.newGame)(req.body);
            res.status(200);
            res.json(ret);
        }
        catch (err) {
            console.log("newGame POST error: ".concat(err));
            next((0, http_errors_1.default)(406));
        }
        return [2 /*return*/];
    });
}); });
router.get('/newGame', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send('respond with a maiNewGame');
        return [2 /*return*/];
    });
}); });
router.post('/newHres', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var ret;
    return __generator(this, function (_a) {
        try {
            ret = (0, _JSON_mai_guld_1.newHres)(req.body);
            res.status(200);
            res.json(ret);
        }
        catch (err) {
            console.log("newHres POST error: ".concat(err));
            next((0, http_errors_1.default)(406));
        }
        return [2 /*return*/];
    });
}); });
router.get('/newHres', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send('respond with a maiNewHres');
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
// view engine setup
router.use('/guld', maiGuldRouter);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSx3RkFBMkQ7QUFHOUMsbUJBQVcsR0FBNkI7SUFDakQsSUFBSSxFQUFHLENBQUM7SUFDUixJQUFJLEVBQUcsQ0FBQztJQUNSLElBQUksRUFBRyxDQUFDO0lBQ1IsSUFBSSxFQUFHLENBQUM7SUFDUixJQUFJLEVBQUcsQ0FBQztJQUNSLElBQUksRUFBRyxDQUFDO0lBQ1IsSUFBSSxFQUFHLENBQUM7Q0FDRixDQUFDO0FBR1gsU0FBUyxlQUFlLENBQUMsSUFBaUI7O0lBQ3RDLE9BQU8sWUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBVyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQUcsSUFBSSwwQkFBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFBekIsQ0FBeUIsQ0FBQyxtQ0FBSSxNQUFNLENBQUM7QUFDckYsQ0FBQztBQUVELElBQU0saUJBQWlCLEdBQTZCO0lBQ2hELENBQUMsRUFBRyxJQUFJO0lBQ1IsQ0FBQyxFQUFHLElBQUk7SUFDUixDQUFDLEVBQUcsSUFBSTtJQUNSLENBQUMsRUFBRyxJQUFJO0lBQ1IsQ0FBQyxFQUFHLElBQUk7SUFDUixDQUFDLEVBQUcsR0FBRztJQUNQLENBQUMsRUFBRyxJQUFJO0NBQ0YsQ0FBQztBQWlCWDtJQW1DSSxxQkFBbUIsQ0FBa0I7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBVyxRQUFRLEdBQUcsc0JBQVMsR0FBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxJQUFJLEdBQWEsbUJBQVcsQ0FBQyxJQUFJLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBSyxLQUFLLENBQUM7UUFFNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBSSxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBYSxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRTFDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUksU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQWEsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUU1QyxJQUFJLENBQUMsS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBakRhLGtCQUFNLEdBQXBCLFVBQXFCLENBQWtCO1FBQ25DLElBQUksQ0FBQyxLQUFVLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQztRQUMzQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFDO1FBRTNDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxtQkFBVztZQUFFLE9BQU8sSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsT0FBTyxTQUFTLENBQUM7UUFDekI7Ozs7Ozs7Ozs7OztVQVlFO0lBQ0UsQ0FBQztJQWdDTSx5QkFBRyxHQUFWLGNBQXNCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDO0lBQUEsQ0FBQztJQUNyQyw4QkFBUSxHQUFmLGNBQWdDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDO0lBQUEsQ0FBQztJQUM1Qyw4QkFBUSxHQUFmLGNBQTJCLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBQztJQUFBLENBQUM7SUFDdEMsOEJBQVEsR0FBZixjQUEyQixPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUM7SUFBQSxDQUFDO0lBRXZDLG1DQUFhLEdBQXBCO1FBQ0ksT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLGlDQUFXLEdBQWxCOztRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUssSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUksVUFBSSxDQUFDLGFBQWEsbUNBQUssSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUN4RCxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQUksQ0FBQyxjQUFjLG1DQUFJLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDekQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDTSxrQ0FBWSxHQUFuQixVQUFvQixhQUFxQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFZLGFBQWEsQ0FBQztRQUNuQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNNLG1DQUFhLEdBQXBCLFVBQXFCLGNBQXNCO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQVksY0FBYyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRU0saUNBQVcsR0FBbEIsVUFBbUIsSUFBaUI7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxJQUFJLEtBQUssbUJBQVcsQ0FBQyxJQUFJO1lBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBTSxFQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUM5RCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sNEJBQU0sR0FBYjs7UUFDSSxPQUFPO1lBQ0gsT0FBTyxFQUFVLElBQUksQ0FBQyxPQUFPO1lBQzdCLElBQUksRUFBYSxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUMzQyxjQUFjLEVBQUcsSUFBSSxDQUFDLGNBQWM7WUFDcEMsY0FBYyxFQUFHLElBQUksQ0FBQyxjQUFjO1lBQ3BDLGFBQWEsRUFBSSxVQUFJLENBQUMsYUFBYSxtQ0FBSSxFQUFFO1lBQ3pDLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsY0FBYyxFQUFHLFVBQUksQ0FBQyxjQUFjLG1DQUFJLENBQUM7WUFDekMsWUFBWSxFQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRztTQUNqRDtJQUNMLENBQUM7SUFDTSw0QkFBTSxHQUFiLFVBQWMsQ0FBaUI7UUFDM0IsSUFBSSxDQUFDLEtBQUssU0FBUztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRWpDLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBYSxTQUFTO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBWSxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxDQUFDLElBQUksS0FBZ0IsU0FBUztZQUFFLElBQUksQ0FBQyxJQUFJLEdBQWUsbUJBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUMsY0FBYyxLQUFNLFNBQVM7WUFBRSxJQUFJLENBQUMsY0FBYyxHQUFLLENBQUMsQ0FBQyxjQUFjLENBQUM7UUFDOUUsSUFBSSxDQUFDLENBQUMsY0FBYyxLQUFNLFNBQVM7WUFBRSxJQUFJLENBQUMsY0FBYyxHQUFLLENBQUMsQ0FBQyxjQUFjLENBQUM7UUFDOUUsSUFBSSxDQUFDLENBQUMsYUFBYSxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsYUFBYSxHQUFNLENBQUMsQ0FBQyxhQUFhLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDbEgsSUFBSSxDQUFDLENBQUMsZUFBZSxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsZUFBZSxHQUFJLENBQUMsQ0FBQyxlQUFlLENBQUM7UUFDL0UsSUFBSSxDQUFDLENBQUMsZUFBZSxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsZUFBZSxHQUFJLENBQUMsQ0FBQyxlQUFlLENBQUM7UUFDL0UsSUFBSSxDQUFDLENBQUMsY0FBYyxLQUFNLFNBQVM7WUFBRSxJQUFJLENBQUMsY0FBYyxHQUFLLENBQUMsQ0FBQyxjQUFjLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDbkgsSUFBSSxDQUFDLENBQUMsWUFBWSxLQUFRLFNBQVM7WUFBRSxJQUFJLENBQUMsWUFBWSxHQUFPLENBQUMsQ0FBQyxZQUFZLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUVsRyxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzs7WUFDaEUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRS9FLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDOztZQUNuRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFFbEYsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQztBQXZIWSxrQ0FBVzs7Ozs7Ozs7Ozs7QUM1Q1g7OztBQWtCYiwwQ0FXQztBQTNCRCw2RkFBcUQ7QUFFckQsaUZBQWlEO0FBRWpELHdGQUF3RDtBQUN4RCxnR0FBeUQ7QUFXekQsU0FBZ0IsZUFBZSxDQUFDLENBQXVCOztJQUNuRCxJQUFJLENBQUMsS0FBSyxTQUFTO1FBQUUsT0FBTztJQUM1QixLQUFLLENBQUMsYUFBYTtVQUNiLGNBQWMsR0FBRyxDQUFDLE9BQUMsQ0FBQyxFQUFFLG1DQUFXLEdBQUcsQ0FBQztVQUNyQyxjQUFjLEdBQUcsQ0FBQyxPQUFDLENBQUMsT0FBTyxtQ0FBTSxHQUFHLENBQUM7VUFDckMsY0FBYyxHQUFHLENBQUMsT0FBQyxDQUFDLE9BQU8sbUNBQU0sR0FBRyxDQUFDO1VBQ3JDLGNBQWMsR0FBRyxDQUFDLE9BQUMsQ0FBQyxJQUFJLG1DQUFTLEdBQUcsQ0FBQztVQUNyQyxjQUFjLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQUMsQ0FBQyxLQUFLLG1DQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztVQUNqRCxjQUFjLEdBQUcsQ0FBQyxhQUFDLENBQUMsTUFBTSwwQ0FBRSxNQUFNLG1DQUFJLEdBQUcsQ0FBQztVQUMxQyxJQUFJLENBQ1QsQ0FBQztBQUNOLENBQUM7QUFFRDtJQU9JLGlCQUFtQixDQUFjO1FBQzdCLElBQUksQ0FBQyxFQUFFLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBTSxXQUFXLEdBQUcsc0JBQVMsR0FBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQU0sQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBUyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBUyxJQUFJLHlCQUFXLENBQUMsRUFBQyxLQUFLLEVBQUUseUJBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLE1BQU0sR0FBTyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLHFCQUFHLEdBQVYsY0FBdUIsT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFDO0lBQ3BDLDBCQUFRLEdBQWYsY0FBMkIsT0FBTyxtQkFBTSxDQUFDLElBQUksR0FBQztJQUN2QywwQkFBUSxHQUFmLGNBQTJCLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBQztJQUVyQyxzQkFBSSxHQUFYO1FBQ0ksSUFBTSxJQUFJLEdBQWEsRUFBRSxDQUFDO1FBQzFCLEtBQUssSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2RCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ00sNEJBQVUsR0FBakI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ00sMEJBQVEsR0FBZixVQUFnQixJQUFZO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFDTSwwQkFBUSxHQUFmLFVBQWdCLElBQVk7UUFDeEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFHTSx3QkFBTSxHQUFiO1FBQ0ksSUFBTSxXQUFXLEdBQWdCLEVBQUUsQ0FBQztRQUNwQyxLQUFLLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNO1lBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFdkUsT0FBTztZQUNILEVBQUUsRUFBTyxJQUFJLENBQUMsRUFBRTtZQUNoQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLElBQUksRUFBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUMzQixNQUFNLEVBQUcsV0FBVztZQUNwQixJQUFJLEVBQUssSUFBSSxDQUFDLElBQUk7U0FDckI7SUFDTCxDQUFDO0lBQ00sd0JBQU0sR0FBYixVQUFjLENBQXVCO1FBQ2pDLElBQUksQ0FBQyxLQUFLLFNBQVM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUVqQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQVcsU0FBUztZQUFFLElBQUksQ0FBQyxFQUFFLEdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQU0sU0FBUztZQUFFLElBQUksQ0FBQyxPQUFPLEdBQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUMxRCxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQU0sU0FBUztZQUFFLElBQUksQ0FBQyxPQUFPLEdBQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUMxRCxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQVMsU0FBUztZQUFFLElBQUksQ0FBQyxJQUFJLEdBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN2RCxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQVMsU0FBUztZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4RCxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFHLENBQUM7WUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDakIsS0FBd0IsVUFBUSxFQUFSLE1BQUMsQ0FBQyxNQUFNLEVBQVIsY0FBUSxFQUFSLElBQVEsRUFBRSxDQUFDO2dCQUE5QixJQUFNLFNBQVM7Z0JBQ2hCLElBQU0sSUFBSSxHQUFHLElBQUksZUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNuQyxDQUFDO1FBQ0wsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDYSxrQkFBVSxHQUF4QixVQUF5QixRQUFtQjtRQUN4QyxJQUFNLGFBQWEsR0FBaUIsRUFBRSxDQUFDO1FBQ3ZDLEtBQWlCLFVBQVEsRUFBUixxQkFBUSxFQUFSLHNCQUFRLEVBQVIsSUFBUSxFQUFFLENBQUM7WUFBdkIsSUFBSSxJQUFJO1lBQ1QsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsT0FBTyxhQUFhLENBQUM7SUFDekIsQ0FBQztJQUNhLGtCQUFVLEdBQXhCLFVBQXlCLGFBQTJCO1FBQ2hELElBQU0sUUFBUSxHQUFjLEVBQUUsQ0FBQztRQUMvQixLQUFzQixVQUFhLEVBQWIsK0JBQWEsRUFBYiwyQkFBYSxFQUFiLElBQWEsRUFBRSxDQUFDO1lBQWpDLElBQUksU0FBUztZQUNkLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFTSx1QkFBSyxHQUFaOztRQUNJLEtBQUssQ0FBQyxhQUFhO2NBQ2IsY0FBYyxHQUFHLENBQUMsVUFBSSxDQUFDLEVBQUUsbUNBQWdCLEdBQUcsQ0FBQztjQUM3QyxjQUFjLEdBQUcsQ0FBQyxVQUFJLENBQUMsT0FBTyxtQ0FBVyxHQUFHLENBQUM7Y0FDN0MsY0FBYyxHQUFHLENBQUMsVUFBSSxDQUFDLE9BQU8sbUNBQVcsR0FBRyxDQUFDO2NBQzdDLGNBQWMsR0FBRyxDQUFDLFVBQUksQ0FBQyxJQUFJLG1DQUFjLEdBQUcsQ0FBQztjQUM3QyxjQUFjLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUksQ0FBQyxJQUFJLG1DQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztjQUNuRCxjQUFjLEdBQUcsQ0FBQyxnQkFBSSxDQUFDLE1BQU0sMENBQUUsTUFBTSxtQ0FBSSxHQUFHLENBQUM7Y0FDN0MsSUFBSSxDQUNULENBQUM7SUFDTixDQUFDO0lBQ0wsY0FBQztBQUFELENBQUM7QUE5RlksMEJBQU87Ozs7Ozs7Ozs7O0FDL0JQOzs7QUE4QmIsMENBT0M7QUFFRCwwQ0FVQztBQTlDRCxzR0FBa0U7QUFFbEUsd0ZBQWtFO0FBQ2xFLGdHQUF5RTtBQXdCekUsU0FBZ0IsZUFBZSxDQUFDLENBQW9DO0lBQ2hFLElBQUksQ0FBQyxLQUFLLFNBQVM7UUFBRSxPQUFPO0lBQzVCLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVM7WUFBRSxTQUFTO1FBQ2pDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQWdCLGVBQWUsQ0FBQyxDQUFzQjs7SUFDbEQsSUFBSSxDQUFDLEtBQUssU0FBUztRQUFFLE9BQU87SUFDNUIsS0FBSyxDQUFDLGNBQWM7VUFDZCxjQUFjLEdBQU8sQ0FBQyxPQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsRUFBRSxtQ0FBVyxHQUFHLENBQUM7VUFDMUMsY0FBYyxHQUFPLENBQUMsT0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLE9BQU8sbUNBQU0sR0FBRyxDQUFDO1VBQzFDLGNBQWMsR0FBTyxDQUFDLE9BQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxJQUFJLG1DQUFTLEdBQUcsQ0FBQztVQUMxQyxjQUFjLEdBQU8sQ0FBQyxPQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsT0FBTyxtQ0FBTSxHQUFHLENBQUM7VUFDMUMsY0FBYyxHQUFPLENBQUMsT0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLFFBQVEsbUNBQUssR0FBRyxDQUFDO1VBQzFDLElBQUksQ0FDVCxDQUFDO0FBQ04sQ0FBQztBQUVEO0lBaUJJLGdCQUFtQixDQUFhO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQVEsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQU0sY0FBYyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQU0sV0FBVyxHQUFHLHNCQUFTLEdBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxHQUFVLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxHQUFVLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFRLElBQUkseUJBQVcsQ0FBQyxFQUFDLEtBQUssRUFBRSx5QkFBVyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsS0FBSyxHQUFRLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsRUFBRSxHQUFXLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxHQUFVLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFRLEVBQUMsR0FBRyxFQUFFLElBQUksNkJBQWEsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLDZCQUFhLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSw2QkFBYSxFQUFFLEVBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsS0FBSyxHQUFRLEVBQUMsR0FBRyxFQUFFLElBQUksNkJBQWEsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLDZCQUFhLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSw2QkFBYSxFQUFFLEVBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsUUFBUSxHQUFLLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sd0JBQU8sR0FBZCxVQUFlLEdBQWU7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ00sNEJBQVcsR0FBbEIsY0FBK0IsT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFDO0lBRTVDLG1CQUFFLEdBQVQ7UUFDSSxPQUFPLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFDTSxvQkFBRyxHQUFWLGNBQXVCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDO0lBQ3JDLHFCQUFJLEdBQVg7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUNNLHlCQUFRLEdBQWYsVUFBZ0IsSUFBWTtRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRU0sdUJBQU0sR0FBYjtRQUNJLElBQU0sR0FBRyxHQUFjO1lBQ25CLEVBQUUsRUFBUyxJQUFJLENBQUMsS0FBSztZQUNyQixPQUFPLEVBQUksSUFBSSxDQUFDLE9BQU87WUFDdkIsSUFBSSxFQUFPLElBQUksQ0FBQyxPQUFPO1lBQ3ZCLE9BQU8sRUFBSSxJQUFJLENBQUMsT0FBTztZQUN2QixHQUFHLEVBQVEsSUFBSSxDQUFDLEdBQUc7WUFDbkIsR0FBRyxFQUFRLElBQUksQ0FBQyxHQUFHO1lBQ25CLEtBQUssRUFBTSxJQUFJLENBQUMsS0FBSztZQUNyQixFQUFFLEVBQVMsSUFBSSxDQUFDLEVBQUU7WUFDbEIsS0FBSyxFQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzdCLEdBQUcsRUFBUSxJQUFJLENBQUMsR0FBRztZQUNuQixTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ2xDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDbEMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUc7U0FDeEM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFDTSx1QkFBTSxHQUFiLFVBQWMsQ0FBc0I7UUFDaEMsSUFBSSxDQUFDLEtBQUssU0FBUztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBVyxTQUFTO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBTSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxDQUFDLElBQUksS0FBUyxTQUFTO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBTSxTQUFTO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBSSxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3hELElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBTSxTQUFTO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBSSxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3hELElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBVSxTQUFTO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBUSxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3BELElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBVSxTQUFTO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBUSxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3BELElBQUksQ0FBQyxDQUFDLEtBQUssS0FBUSxTQUFTO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBTSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3RELElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBVyxTQUFTO1lBQUUsSUFBSSxDQUFDLEVBQUUsR0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUMzQixJQUFJLE9BQU8sQ0FBQyxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUUsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQy9CLENBQUM7aUJBQU0sQ0FBQztnQkFDSixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3RELENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFTLFNBQVMsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25DLEtBQUs7WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNyRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbkMsS0FBSztZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3JELENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRVMsNkJBQVksR0FBdEIsVUFBdUIsQ0FBa0IsRUFBRSxDQUFrQjtRQUN6RCxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssU0FBUztZQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssU0FBUztZQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssU0FBUztZQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUMzQyxDQUFDO0lBQ1MsOEJBQWEsR0FBdkIsVUFBd0IsQ0FBMkMsRUFBRSxDQUErQjs7UUFDaEcsSUFBSSxDQUE2QixDQUFDO1FBQ2xDLElBQVEsQ0FBQyxLQUFLLFNBQVM7WUFBRSxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUMsQ0FBQzs7WUFDdEMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFFLE9BQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxHQUFHLG1DQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsT0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLEdBQUcsbUNBQUksQ0FBQyxFQUFDLENBQUM7UUFFakQsQ0FBQyxDQUFDLEdBQUcsR0FBRyxPQUFDLENBQUMsR0FBRyxtQ0FBSSxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxHQUFHLEdBQUcsYUFBQyxDQUFDLEdBQUcsbUNBQUksQ0FBQyxDQUFDLEdBQUcsbUNBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNoQyxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFYSxrQkFBVyxHQUF6QjtRQUNJLElBQU0sUUFBUSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7UUFDOUIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEVBQUUsRUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUMvRCxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUMsSUFBSSxFQUFHLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFDekMsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVNLDRCQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBTSxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBSSxNQUFNLEdBQUcsd0JBQVcsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRyxHQUFRLG1CQUFNLEVBQUUsQ0FBQyxFQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxHQUFHLEdBQVEsbUJBQU0sRUFBRSxFQUFFLEVBQUksRUFBRSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBTSxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLEVBQUUsR0FBUyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsR0FBUTtZQUNaLEdBQUcsRUFBRSxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQztZQUNyQixHQUFHLEVBQUUsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUM7WUFDckIsS0FBSyxFQUFFLElBQUk7U0FDZCxDQUFDO1FBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMseUJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4QyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNqQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEIsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDN0MsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUksQ0FBQyxDQUFDLENBQUM7UUFDN0MsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUksQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO1FBRTNCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ2pDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QixTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM3QyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBSSxDQUFDLENBQUMsQ0FBQztRQUM3QyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBSSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7UUFFM0IsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVhLG9CQUFhLEdBQTNCLFVBQTRCLE1BQWdCO1FBQ3hDLElBQU0sV0FBVyxHQUFHLEVBQWlCLENBQUM7UUFDdEMsS0FBaUIsVUFBTSxFQUFOLGlCQUFNLEVBQU4sb0JBQU0sRUFBTixJQUFNLEVBQUUsQ0FBQztZQUFyQixJQUFJLElBQUk7WUFDVCxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFDRCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBQ2Esb0JBQWEsR0FBM0IsVUFBNEIsV0FBOEM7UUFDdEUsSUFBTSxNQUFNLEdBQUcsRUFBYyxDQUFDO1FBQzlCLElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzVCLEtBQXNCLFVBQVcsRUFBWCwyQkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVyxFQUFFLENBQUM7Z0JBQS9CLElBQUksU0FBUztnQkFDZCxJQUFJLFNBQVMsS0FBSyxTQUFTO29CQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM3RSxDQUFDO1FBQ0wsQ0FBQztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFTSxzQkFBSyxHQUFaOztRQUNJLEtBQUssQ0FBQyxjQUFjO2NBQ2QsY0FBYyxHQUFPLENBQUMsVUFBSSxDQUFDLEVBQUUsbUNBQVcsR0FBRyxDQUFDO2NBQzVDLGNBQWMsR0FBTyxDQUFDLFVBQUksQ0FBQyxPQUFPLG1DQUFNLEdBQUcsQ0FBQztjQUM1QyxjQUFjLEdBQU8sQ0FBQyxVQUFJLENBQUMsSUFBSSxtQ0FBUyxHQUFHLENBQUM7Y0FDNUMsY0FBYyxHQUFPLENBQUMsVUFBSSxDQUFDLE9BQU8sbUNBQU0sR0FBRyxDQUFDO2NBQzVDLGNBQWMsR0FBTyxDQUFDLFVBQUksQ0FBQyxRQUFRLG1DQUFLLEdBQUcsQ0FBQztjQUM1QyxJQUFJLENBQ1QsQ0FBQztJQUNOLENBQUM7SUFDYSxpQkFBVSxHQUF4QixVQUF5QixDQUFpQzs7UUFDdEQsSUFBSSxDQUFDLEtBQUssU0FBUztZQUFFLE9BQU87UUFDNUIsS0FBSyxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNqRCxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFDLENBQUMsQ0FBQyxDQUFDLDBDQUFFLEtBQUssRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQztBQTVMWSx3QkFBTTs7Ozs7Ozs7Ozs7QUNuRE47OztBQUdiLHdGQUFtRDtBQUNuRCx3RkFBMEM7QUFPMUM7SUFvQkksdUJBQW1CLENBQXFCO1FBbkI5QixNQUFDLEdBQWtCO1lBQ3pCLEVBQUUsRUFBRyxDQUFDLEVBQUcsWUFBWTtZQUVyQiw4Q0FBOEM7WUFDOUMsR0FBRyxFQUFFLENBQUMsRUFBRyxNQUFNO1lBQ2YsR0FBRyxFQUFFLENBQUMsRUFBRyxNQUFNO1lBQ2YsR0FBRyxFQUFFLENBQUMsRUFBRyxNQUFNO1lBQ2YsR0FBRyxFQUFFLENBQUMsRUFBRyxZQUFZO1lBRXJCLDRDQUE0QztZQUM1QyxHQUFHLEVBQUUsQ0FBQyxFQUFHLHlDQUF5QztZQUNsRCxHQUFHLEVBQUUsQ0FBQyxFQUFHLGVBQWU7WUFDeEIsR0FBRyxFQUFFLENBQUMsRUFBRywyQkFBMkI7WUFDcEMsR0FBRyxFQUFFLENBQUMsRUFBRywwQ0FBMEM7WUFDbkQsR0FBRyxFQUFFLENBQUMsRUFBRyw4QkFBOEI7WUFDdkMsR0FBRyxFQUFFLENBQUMsRUFBRyxtQ0FBbUM7WUFDNUMsR0FBRyxFQUFFLENBQUMsRUFBRyxrQkFBa0I7U0FDOUIsQ0FBQztRQUdFLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFBQSxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDTSwrQkFBTyxHQUFkLFVBQWUsQ0FBb0I7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBQ00sMkJBQUcsR0FBVixVQUFXLEdBQVc7UUFDbEIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFBRSxPQUFPLFNBQVMsQ0FBQztRQUN2QyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNNLDJCQUFHLEdBQVYsVUFBVyxHQUFXLEVBQUUsQ0FBb0I7UUFDeEMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFBRSxPQUFPLFNBQVMsQ0FBQztRQUN2QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRU0saUNBQVMsR0FBaEI7UUFDSSxPQUFPLG1CQUFNLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ00sa0NBQVUsR0FBakI7UUFDSSxPQUFPLG1CQUFNLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBQ00sa0NBQVUsR0FBakI7UUFDSSxPQUFPLG1CQUFNLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBQ00sa0NBQVUsR0FBakI7UUFDSSxPQUFPLG1CQUFNLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBQ00sa0NBQVUsR0FBakI7UUFDSSxPQUFPLG1CQUFNLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxD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QyxLQUFLLEtBQU0sRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU0sRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU0sRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU0sRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU0sRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU0sRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFakYsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLDZCQUFLLEdBQVosY0FBd0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUM7SUFDdkMsaUNBQVMsR0FBaEIsVUFBaUIsS0FBYSxJQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxHQUFDO0lBRWhELDhCQUFNLEdBQWIsY0FBK0IsT0FBTyxJQUFJLENBQUMsU0FBUyxHQUFDO0lBQzlDLGtDQUFVLEdBQWpCLFVBQWtCLE1BQW1CLElBQWdCLE9BQU8sSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLEdBQUM7SUFFN0UsK0JBQU8sR0FBZCxjQUEyQixPQUFPLElBQUksQ0FBQyxTQUFTLEdBQUM7SUFBQSxDQUFDO0lBQzNDLCtCQUFPLEdBQWQsVUFBZSxRQUFpQixJQUFZLE9BQU8sSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLEdBQUM7SUFBQSxDQUFDO0lBRXZFLDZCQUFLLEdBQVosY0FBeUIsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFDO0lBQ3ZDLDZCQUFLLEdBQVosY0FBeUIsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFDO0lBQ3ZDLDZCQUFLLEdBQVosY0FBeUIsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFDO0lBQ3ZDLGlDQUFTLEdBQWhCLFVBQWlCLEtBQWEsSUFBVyxPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFDO0lBQ3BILGlDQUFTLEdBQWhCLFVBQWlCLEtBQWEsSUFBVyxPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFDO0lBQ3BILGlDQUFTLEdBQWhCLFVBQWlCLEtBQWEsSUFBVyxPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxHQUFDO0lBRS9ELDZCQUFLLEdBQVosY0FBNkIsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFDO0lBQzNDLDZCQUFLLEdBQVosY0FBNkIsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFDO0lBQzNDLDZCQUFLLEdBQVosY0FBNkIsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFDO0lBQzNDLDZCQUFLLEdBQVosY0FBNkIsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFDO0lBQzNDLDZCQUFLLEdBQVosY0FBNkIsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFDO0lBQzNDLDZCQUFLLEdBQVosY0FBNkIsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFDO0lBQzNDLGlDQUFTLEdBQWhCLFVBQWlCLEtBQWtCLElBQWdCLE9BQU8sSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUM7SUFDekUsaUNBQVMsR0FBaEIsVUFBaUIsS0FBa0IsSUFBZ0IsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBQztJQUN6RSxpQ0FBUyxHQUFoQixVQUFpQixLQUFrQixJQUFnQixPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxHQUFDO0lBQ3pFLGlDQUFTLEdBQWhCLFVBQWlCLEtBQWtCLElBQWdCLE9BQU8sSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUM7SUFDekUsaUNBQVMsR0FBaEIsVUFBaUIsS0FBa0IsSUFBZ0IsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBQztJQUN6RSxpQ0FBUyxHQUFoQixVQUFpQixLQUFrQixJQUFnQixPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxHQUFDO0lBR3pFLDhCQUFNLEdBQWIsVUFBYyxJQUFZLEVBQUUsSUFBWTtRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFPLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFPLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFRLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxrQkFBa0IsQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBTSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNPLHFDQUFhLEdBQXJCLFVBQ0ksSUFBYSxFQUNiLElBQWE7O1FBRWIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssSUFBSTtZQUFFLE9BQU87UUFDckQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUM3QyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFJLENBQUMsS0FBSyxFQUFFLG1DQUFJLFNBQVMsRUFBRSxVQUFJLENBQUMsS0FBSyxFQUFFLG1DQUFJLFNBQVMsQ0FBQyxDQUFDO1lBQ2xGLE9BQU87UUFDWCxDQUFDO1FBRUQsSUFBTSxDQUFDLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFNLElBQUksR0FBVztZQUNqQixFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUc7WUFDVCxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUc7WUFDVCxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUc7WUFDVCxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUc7U0FDWjtRQUNELFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTyxvQ0FBWSxHQUFwQixVQUNJLElBQWEsRUFDYixJQUFhOztRQUViLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLElBQUk7WUFBRSxPQUFPO1FBQ3JELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUM7WUFDN0MsaUJBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFJLENBQUMsS0FBSyxFQUFFLG1DQUFJLFNBQVMsRUFBRSxVQUFJLENBQUMsS0FBSyxFQUFFLG1DQUFJLFNBQVMsQ0FBQyxDQUFDO1lBQ3BGLE9BQU87UUFDWCxDQUFDO1FBRUQsSUFBTSxDQUFDLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFNLElBQUksR0FBVztZQUNqQixFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUc7WUFDVCxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUc7WUFDVCxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUc7WUFDVCxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUc7U0FDWjtRQUNELFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDTyxzQ0FBYyxHQUF0QixVQUNJLElBQWEsRUFDYixJQUFhO1FBRWIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssSUFBSTtZQUFFLE9BQU87UUFFckQsSUFBTSxDQUFDLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFNLElBQUksR0FBVztZQUNqQixFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUc7WUFDVCxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUc7WUFDVCxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUc7WUFDVCxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUc7U0FDWjtRQUVELFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDTyxxQ0FBYSxHQUFyQixVQUNJLElBQWEsRUFDYixJQUFhO1FBRWIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssSUFBSTtZQUFFLE9BQU87UUFFckQsSUFBTSxDQUFDLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFNLElBQUksR0FBVztZQUNqQixFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUc7WUFDVCxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUc7WUFDVCxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUc7WUFDVCxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUc7U0FDWjtRQUVELFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDTywwQ0FBa0IsR0FBMUIsVUFDSSxJQUFhLEVBQ2IsSUFBYTtRQUViLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLElBQUk7WUFBRSxPQUFPO1FBRXJELElBQU0sQ0FBQyxHQUFHLGtCQUFrQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBTSxJQUFJLEdBQVc7WUFDakIsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHO1lBQ1QsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHO1lBQ1QsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHO1lBQ1QsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHO1NBQ1o7UUFFRCxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ08sMkNBQW1CLEdBQTNCLFVBQ0ksSUFBYSxFQUNiLElBQWE7UUFFYixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxJQUFJO1lBQUUsT0FBTztRQUVyRCxJQUFNLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQU0sSUFBSSxHQUFXO1lBQ2pCLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRztZQUNULEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRztZQUNULEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRztZQUNULEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRztTQUNaO1FBRUQsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUdNLDhCQUFNLEdBQWI7O1FBQ0ksT0FBTztZQUNILEtBQUssRUFBSSxJQUFJLENBQUMsTUFBTTtZQUNwQixLQUFLLEVBQUksSUFBSSxDQUFDLFFBQVE7WUFDdEIsTUFBTSxFQUFHLFVBQUksQ0FBQyxTQUFTLG1DQUFJLEVBQUU7WUFDN0IsS0FBSyxFQUFJLElBQUksQ0FBQyxRQUFRO1lBQ3RCLEtBQUssRUFBSSxJQUFJLENBQUMsUUFBUTtZQUN0QixLQUFLLEVBQUksSUFBSSxDQUFDLFFBQVE7WUFDdEIsTUFBTSxFQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQ25DLEtBQUssRUFBSSxVQUFJLENBQUMsUUFBUSxtQ0FBSSxFQUFFO1lBQzVCLEtBQUssRUFBSSxVQUFJLENBQUMsUUFBUSxtQ0FBSSxFQUFFO1lBQzVCLEtBQUssRUFBSSxVQUFJLENBQUMsUUFBUSxtQ0FBSSxFQUFFO1lBQzVCLEtBQUssRUFBSSxVQUFJLENBQUMsUUFBUSxtQ0FBSSxFQUFFO1lBQzVCLEtBQUssRUFBSSxVQUFJLENBQUMsUUFBUSxtQ0FBSSxFQUFFO1lBQzVCLEtBQUssRUFBSSxVQUFJLENBQUMsUUFBUSxtQ0FBSSxFQUFFO1NBQy9CO0lBQ0wsQ0FBQztJQUNNLDhCQUFNLEdBQWIsVUFBYyxDQUE2QjtRQUN2QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNhLG9CQUFNLEdBQXBCLFVBQXFCLENBQTZCO1FBQzlDLE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDO0FBbFBZLHNDQUFhO0FBc1AxQixTQUFTLGtCQUFrQixDQUN2QixHQUFvQixFQUNwQixJQUFhLEVBQ2IsSUFBYTtJQVNiLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQztJQUN2QixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFFdkIsSUFBTSxPQUFPLEdBQUssR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUNwQyxJQUFNLE9BQU8sR0FBSyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUIsSUFBTSxPQUFPLEdBQUssR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRTlCLElBQU0sVUFBVSxHQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQzFFLElBQU0sVUFBVSxHQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBRTFFLElBQU0sVUFBVSxHQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQzFFLElBQU0sVUFBVSxHQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBRTFFLElBQU0sVUFBVSxHQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQzFFLElBQU0sVUFBVSxHQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBRTFFLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsSUFBTSxZQUFZLEdBQUcsRUFBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFDO0lBQ3ZGLElBQU0sWUFBWSxHQUFHLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBQztJQUN2RixJQUFNLFlBQVksR0FBRyxFQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUM7SUFDdkYsSUFBTSxZQUFZLEdBQUcsRUFBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFDO0lBRXZGLElBQU0sWUFBWSxHQUFHLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBQztJQUN2RixJQUFNLFlBQVksR0FBRyxFQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUM7SUFDdkYsSUFBTSxZQUFZLEdBQUcsRUFBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFDO0lBQ3ZGLElBQU0sWUFBWSxHQUFHLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBQztJQUV2RixJQUFJLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pFLElBQUksR0FBRyxHQUFHLGlCQUFpQixDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakUsSUFBSSxHQUFHLEdBQUcsaUJBQWlCLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqRSxJQUFJLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRWpFLElBQUksR0FBRyxHQUFHLGlCQUFpQixDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakUsSUFBSSxHQUFHLEdBQUcsaUJBQWlCLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqRSxJQUFJLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pFLElBQUksR0FBRyxHQUFHLGlCQUFpQixDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFakUsT0FBTztRQUNILEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDbEIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUNsQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQ2xCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7S0FDckI7QUFDTCxDQUFDO0FBQ0QsU0FBUyxpQkFBaUIsQ0FBQyxJQUFVLEVBQUUsSUFBVSxFQUFFLEtBQWE7SUFDeEQsNEJBQTRCO0lBQzVCLElBQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxJQUFNLENBQUMsR0FBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRS9CLG1CQUFtQjtJQUNuQixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ3BELElBQU0sUUFBUSxHQUFHLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBRWxDLE9BQU8sRUFBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUMsQ0FBQztBQUMxQyxDQUFDO0FBR0QsU0FBUyxlQUFlLENBQ2hCLFNBQWlCLEVBQ2pCLFNBQWlCLEVBQ2pCLElBQXdCLEVBQ3hCLElBQXdCO0lBRHhCLHVDQUF3QjtJQUN4Qix1Q0FBd0I7SUFHNUIsSUFBTSxJQUFJLEdBQVc7UUFDakIsRUFBRSxFQUFFLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUM7UUFDNUMsRUFBRSxFQUFFLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUM7UUFDNUMsRUFBRSxFQUFFLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUM7UUFDNUMsRUFBRSxFQUFFLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUM7S0FDL0M7SUFDRCxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBQ0QsU0FBUyxpQkFBaUIsQ0FDbEIsU0FBaUIsRUFDakIsU0FBaUIsRUFDakIsSUFBd0IsRUFDeEIsSUFBd0I7SUFEeEIsdUNBQXdCO0lBQ3hCLHVDQUF3QjtJQUc1QixJQUFNLElBQUksR0FBVztRQUNqQixFQUFFLEVBQUUsRUFBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBQztRQUM1QyxFQUFFLEVBQUUsRUFBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBQztRQUM1QyxFQUFFLEVBQUUsRUFBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBQztRQUM1QyxFQUFFLEVBQUUsRUFBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBQztLQUMvQztJQUNELFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxDQUFTLEVBQUUsSUFBaUIsRUFBRSxJQUFpQjtJQUM5RCxJQUFJLGFBQWEsQ0FBQyxLQUFLLEtBQUssU0FBUztRQUFFLE9BQU87SUFDOUMsSUFBTSxHQUFHLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUVoQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUVoQixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNmLEdBQUcsQ0FBQyxTQUFTLEdBQUssSUFBSSxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFDRCxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN2QixHQUFHLENBQUMsU0FBUyxHQUFLLENBQUMsQ0FBQztRQUNwQixHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakIsQ0FBQztBQUNMLENBQUM7Ozs7Ozs7Ozs7O0FDNVpZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhYiwwQ0FlQztBQTFCRCw2RkFBeUQ7QUFFekQsd0ZBQTREO0FBUzVELFNBQWdCLGVBQWUsQ0FBQyxDQUE4Qjs7SUFDMUQsSUFBSSxDQUFDLEtBQUssU0FBUztRQUFFLE9BQU87SUFDNUIsS0FBSyxDQUFDLFlBQVk7VUFDWixjQUFjLEdBQUksQ0FBQyxPQUFDLENBQUMsT0FBTyxtQ0FBTyxHQUFHLENBQUM7VUFDdkMsY0FBYyxHQUFJLENBQUMsT0FBQyxDQUFDLE9BQU8sbUNBQU8sR0FBRyxDQUFDO1VBQ3ZDLGNBQWMsR0FBSSxDQUFDLE9BQUMsQ0FBQyxRQUFRLG1DQUFNLEdBQUcsQ0FBQztVQUN2QyxVQUFVLEdBQVEsQ0FBQyxPQUFDLENBQUMsSUFBSSxtQ0FBVSxHQUFHLENBQUM7VUFDdkMsVUFBVSxHQUFRLENBQUMsT0FBQyxDQUFDLElBQUksbUNBQVUsR0FBRyxDQUFDO1VBQ3ZDLFVBQVUsR0FBUSxDQUFDLE9BQUMsQ0FBQyxPQUFPLG1DQUFPLEdBQUcsQ0FBQztVQUN2QyxXQUFXLEdBQU8sQ0FBQyxhQUFDLENBQUMsT0FBTywwQ0FBRSxDQUFDLG1DQUFJLEdBQUcsQ0FBQztVQUN2QyxXQUFXLEdBQU8sQ0FBQyxhQUFDLENBQUMsT0FBTywwQ0FBRSxDQUFDLG1DQUFJLEdBQUcsQ0FBQztVQUN2QyxXQUFXLEdBQU8sQ0FBQyxhQUFDLENBQUMsT0FBTywwQ0FBRSxDQUFDLG1DQUFJLEdBQUcsQ0FBQztVQUN2QyxXQUFXLEdBQU8sQ0FBQyxhQUFDLENBQUMsT0FBTywwQ0FBRSxDQUFDLG1DQUFJLEdBQUcsQ0FBQztVQUN2QyxJQUFJLENBQ1QsQ0FBQztBQUNOLENBQUM7QUFHRDtJQUFvQyxrQ0FBVTtJQUkxQyx3QkFBbUIsSUFBd0I7UUFDdkMsa0JBQUssWUFBQyxJQUFJLENBQUMsU0FBQztRQUNaLEtBQUksQ0FBQyxPQUFPLEdBQUksVUFBVSxHQUFHLHNCQUFTLEdBQUUsQ0FBQztRQUN6QyxLQUFJLENBQUMsT0FBTyxHQUFJLEVBQUUsQ0FBQztRQUNuQixLQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUUxQixJQUFJLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLElBQUk7WUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDOztJQUMvRCxDQUFDO0lBQ00sNEJBQUcsR0FBVixjQUF1QixPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUM7SUFDcEMsNEJBQUcsR0FBVixjQUF1QixPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUM7SUFDcEMsNEJBQUcsR0FBVixjQUFpQyxPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUM7SUFFL0MsZ0NBQU8sR0FBZCxjQUF3QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsR0FBRyxzQkFBUyxHQUFFLENBQUMsRUFBQztJQUMxRCxnQ0FBTyxHQUFkLFVBQWUsR0FBVyxJQUFVLElBQUksQ0FBQyxPQUFPLEdBQUksR0FBRyxDQUFDLEVBQUM7SUFDbEQsZ0NBQU8sR0FBZCxVQUFlLEdBQVcsSUFBVSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxFQUFDO0lBRWxELDhCQUFLLEdBQVo7UUFDSSxJQUFNLElBQUksR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0saUNBQVEsR0FBZixVQUFnQixHQUFXO1FBQ3ZCLElBQUksQ0FBQztZQUNELElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFzQixDQUFDO1lBQy9DLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNYLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFBQSxDQUFDO0lBQ04sQ0FBQztJQUNNLCtCQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0sK0JBQU0sR0FBYjs7UUFDSSxJQUFNLENBQUMsR0FBRyxnQkFBSyxDQUFDLE1BQU0sV0FBdUIsQ0FBQztRQUM5QyxDQUFDLENBQUMsT0FBTyxHQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDMUIsQ0FBQyxDQUFDLE9BQU8sR0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxRQUFRLEdBQUcsVUFBSSxDQUFDLFFBQVEsbUNBQUksRUFBRSxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNNLCtCQUFNLEdBQWIsVUFBYyxDQUFxQjtRQUMvQixnQkFBSyxDQUFDLE1BQU0sWUFBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxTQUFTO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFNLFNBQVM7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFJLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDeEQsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFNLFNBQVM7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFJLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDeEQsSUFBSSxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFFekQsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUNwRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sOEJBQUssR0FBWjs7UUFDSSxLQUFLLENBQUMsWUFBWTtjQUNaLGNBQWMsR0FBSSxDQUFDLFVBQUksQ0FBQyxPQUFPLG1DQUFPLEdBQUcsQ0FBQztjQUMxQyxjQUFjLEdBQUksQ0FBQyxVQUFJLENBQUMsT0FBTyxtQ0FBTyxHQUFHLENBQUM7Y0FDMUMsY0FBYyxHQUFJLENBQUMsVUFBSSxDQUFDLFFBQVEsbUNBQU0sR0FBRyxDQUFDO2NBQzFDLFVBQVUsR0FBUSxDQUFDLFVBQUksQ0FBQyxRQUFRLG1DQUFNLEdBQUcsQ0FBQztjQUMxQyxVQUFVLEdBQVEsQ0FBQyxVQUFJLENBQUMsUUFBUSxtQ0FBTSxHQUFHLENBQUM7Y0FDMUMsVUFBVSxHQUFRLENBQUMsVUFBSSxDQUFDLE9BQU8sbUNBQU8sR0FBRyxDQUFDO2NBQzFDLFdBQVcsR0FBTyxDQUFDLGdCQUFJLENBQUMsT0FBTywwQ0FBRSxDQUFDLG1DQUFJLEdBQUcsQ0FBQztjQUMxQyxXQUFXLEdBQU8sQ0FBQyxnQkFBSSxDQUFDLE9BQU8sMENBQUUsQ0FBQyxtQ0FBSSxHQUFHLENBQUM7Y0FDMUMsV0FBVyxHQUFPLENBQUMsZ0JBQUksQ0FBQyxPQUFPLDBDQUFFLENBQUMsbUNBQUksR0FBRyxDQUFDO2NBQzFDLFdBQVcsR0FBTyxDQUFDLGdCQUFJLENBQUMsT0FBTywwQ0FBRSxDQUFDLG1DQUFJLEdBQUcsQ0FBQztjQUMxQyxJQUFJLENBQ1QsQ0FBQztJQUNOLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQ0F2RW1DLHVCQUFVLEdBdUU3QztBQXZFWSx3Q0FBYzs7Ozs7Ozs7Ozs7QUMvQmQ7OztBQVViO0lBSUksaUJBQW1CLENBQXVDLEVBQUUsQ0FBVSxFQUFFLENBQVU7UUFDOUUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFOUIsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLE9BQU87UUFDWCxDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQzFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQyxPQUFPO1FBQ1gsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLFlBQVksT0FBTyxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxPQUFPO1lBQ1gsQ0FBQztpQkFBTSxDQUFDO2dCQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsT0FBTztZQUNYLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUIsT0FBTztJQUNYLENBQUM7SUFFTSx1QkFBSyxHQUFaLGNBQXlCLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUM7SUFDM0MsdUJBQUssR0FBWixVQUFhLENBQVU7UUFDbkIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSx3QkFBTSxHQUFiLFVBQWMsQ0FBVTtRQUNwQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ00sd0JBQU0sR0FBYjtRQUNJLE9BQU8sRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQzdDLENBQUM7SUFDTSx3QkFBTSxHQUFiLFVBQWMsQ0FBYztRQUN4QixJQUFJLENBQUMsS0FBSyxTQUFTO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUM3RSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDO0FBOUNZLDBCQUFPOzs7Ozs7Ozs7OztBQ1ZQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QmIsc0NBU0M7QUE5QkQsb0ZBQWdEO0FBR25DLG1CQUFXLEdBQTJCO0lBQy9DLENBQUMsRUFBRSxDQUFDO0lBQ0osQ0FBQyxFQUFFLENBQUM7SUFDSixDQUFDLEVBQUUsQ0FBQztJQUNKLENBQUMsRUFBRSxDQUFDO0lBQ0osQ0FBQyxFQUFFLEVBQUU7Q0FDQyxDQUFDO0FBR1gsU0FBUyxRQUFRLENBQUMsR0FBNEI7O0lBQzFDLE9BQU8sWUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBVyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQUcsSUFBSSwwQkFBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsRUFBeEIsQ0FBd0IsQ0FBQyxtQ0FBSSxNQUFNLENBQUM7QUFDcEYsQ0FBQztBQU9ELFNBQWdCLGFBQWEsQ0FBQyxDQUEwQjs7SUFDcEQsSUFBSSxDQUFDLEtBQUssU0FBUztRQUFFLE9BQU87SUFDNUIsS0FBSyxDQUFDLGlCQUFpQjtVQUNqQixPQUFPLEdBQU8sQ0FBQyxPQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsQ0FBQyxtQ0FBSSxHQUFHLENBQUM7VUFDM0IsT0FBTyxHQUFPLENBQUMsT0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLENBQUMsbUNBQUksR0FBRyxDQUFDO1VBQzNCLE9BQU8sR0FBTyxDQUFDLE9BQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxDQUFDLG1DQUFJLEdBQUcsQ0FBQztVQUMzQixPQUFPLEdBQU8sQ0FBQyxPQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsQ0FBQyxtQ0FBSSxHQUFHLENBQUM7VUFDM0IsSUFBSSxDQUNULENBQUM7QUFDTixDQUFDO0FBRUQ7SUFBaUMsOEJBQU87SUFFcEMsb0JBQW1CLENBQStDO1FBQzlELGtCQUFLLFlBQUMsQ0FBQyxDQUFDLFNBQUM7UUFDVCxLQUFJLENBQUMsQ0FBQyxHQUFHLG1CQUFXLENBQUMsQ0FBQyxDQUFDO1FBRXZCLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRSxDQUFDOztRQUV0QixDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUN4QixLQUFJLENBQUMsQ0FBQyxHQUFHLENBQWdCLENBQUM7O1FBRTlCLENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxZQUFZLFVBQVUsRUFBRSxDQUFDO2dCQUMxQixLQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFnQixDQUFDO1lBQ2hDLENBQUM7aUJBQU0sQ0FBQztnQkFDSixLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLENBQUM7O1FBRUwsQ0FBQztRQUNELEtBQUksQ0FBQyxDQUFDLEdBQUcsbUJBQVcsQ0FBQyxDQUFDLENBQUM7O0lBRTNCLENBQUM7SUFDTSxrQ0FBYSxHQUFwQjtRQUNJLFFBQVEsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2IsS0FBSyxDQUFDLENBQUMsQ0FBRSxPQUFPLEdBQUcsQ0FBQztZQUNwQixLQUFLLENBQUMsQ0FBQyxDQUFFLE9BQU8sR0FBRyxDQUFDO1lBQ3BCLEtBQUssQ0FBQyxDQUFDLENBQUUsT0FBTyxHQUFHLENBQUM7WUFDcEIsS0FBSyxDQUFDLENBQUMsQ0FBRSxPQUFPLEdBQUcsQ0FBQztZQUNwQixPQUFPLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQztRQUN4QixDQUFDO0lBQ0wsQ0FBQztJQUVNLDBCQUFLLEdBQVo7UUFDSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUNNLDBCQUFLLEdBQVosVUFBYSxDQUFjO1FBQ3ZCLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxtQkFBVyxDQUFDO1lBQUUsT0FBTyxTQUFTLENBQUM7UUFDcEQsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ00sMkJBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTSwyQkFBTSxHQUFiLFVBQWMsQ0FBMkI7UUFDckMsSUFBSSxDQUFDLFlBQVksVUFBVSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxtQkFBVyxDQUFDO2dCQUFFLE9BQU8sU0FBUyxDQUFDO1lBQ3RELGdCQUFLLENBQUMsS0FBSyxZQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksbUJBQVcsQ0FBQztZQUFFLE9BQU8sU0FBUyxDQUFDO1FBQ3RELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sMkJBQU0sR0FBYjtRQUNJLElBQU0sQ0FBQyxHQUFHLGdCQUFLLENBQUMsTUFBTSxXQUFtQixDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDLEdBQU8sSUFBSSxDQUFDLENBQVcsQ0FBQztRQUMzQixPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFDTSwyQkFBTSxHQUFiLFVBQWMsQ0FBaUI7UUFDM0IsSUFBSSxDQUFDLEtBQUssU0FBUztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksbUJBQVcsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRWpELGdCQUFLLENBQUMsTUFBTSxZQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQWdCLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLDBCQUFLLEdBQVo7O1FBQ0ksS0FBSyxDQUFDLGlCQUFpQjtjQUNqQixPQUFPLEdBQU8sQ0FBQyxVQUFJLENBQUMsQ0FBQyxtQ0FBSSxHQUFHLENBQUM7Y0FDN0IsT0FBTyxHQUFPLENBQUMsVUFBSSxDQUFDLENBQUMsbUNBQUksR0FBRyxDQUFDO2NBQzdCLE9BQU8sR0FBTyxDQUFDLFVBQUksQ0FBQyxDQUFDLG1DQUFJLEdBQUcsQ0FBQztjQUM3QixPQUFPLEdBQU8sQ0FBQyxVQUFJLENBQUMsQ0FBQyxtQ0FBSSxHQUFHLENBQUM7Y0FDN0IsSUFBSSxDQUNULENBQUM7SUFDTixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLENBaEZnQyxpQkFBTyxHQWdGdkM7QUFoRmEsZ0NBQVU7Ozs7Ozs7Ozs7O0FDbENYOzs7QUFFYix3RkFBdUQ7QUFDdkQsb0ZBQWlEO0FBUWpEO0lBR0ksaUJBQW1CLEVBQVcsRUFBRSxFQUFXO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLEdBQUksSUFBSSxpQkFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsR0FBSSxJQUFJLGlCQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ1MsdUJBQUssR0FBZixVQUFnQixFQUFXLEVBQUUsRUFBVztRQUNwQyxJQUFNLEtBQUssR0FBRyxpQkFBSSxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFNLEtBQUssR0FBRyxpQkFBSSxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVqQyxJQUFNLEtBQUssR0FBRyxpQkFBSSxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFNLEtBQUssR0FBRyxpQkFBSSxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVqQyxJQUFNLEtBQUssR0FBRyxpQkFBSSxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFNLEtBQUssR0FBRyxpQkFBSSxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsR0FBRyxHQUFJLElBQUksaUJBQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxHQUFHLEdBQUksSUFBSSxpQkFBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFN0MsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLHdCQUFNLEdBQWIsVUFBYyxDQUF5QixFQUFFLENBQVUsRUFBRSxDQUFVO1FBQzNELElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUMxRSxJQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFHLE9BQU8sS0FBSyxDQUFDO1lBQ3JELElBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQUcsT0FBTyxLQUFLLENBQUM7WUFDckQsSUFBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFBRyxPQUFPLEtBQUssQ0FBQztZQUNyRCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksQ0FBQyxZQUFZLGlCQUFPLEVBQUUsQ0FBQztZQUNoRCxJQUFNLENBQUMsR0FBRyxDQUFZLENBQUM7WUFDdkIsSUFBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFHLE9BQU8sS0FBSyxDQUFDO1lBQ3pELElBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFBRyxPQUFPLEtBQUssQ0FBQztZQUN6RCxJQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQUcsT0FBTyxLQUFLLENBQUM7WUFDekQsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxJQUFJLENBQUMsWUFBWSxPQUFPLEVBQUUsQ0FBQztZQUNoRCxJQUFNLENBQUMsR0FBRyxDQUFZLENBQUM7WUFDdkIsSUFBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFBRyxPQUFPLEtBQUssQ0FBQztZQUNyRSxJQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFHLE9BQU8sS0FBSyxDQUFDO1lBQ3JFLElBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQUcsT0FBTyxLQUFLLENBQUM7WUFDckUsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDTSx1QkFBSyxHQUFaLGNBQXlCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQztJQUNyQyx1QkFBSyxHQUFaLGNBQXlCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQztJQUNyQyx1QkFBSyxHQUFaLGNBQXlCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQztJQUNyQyx1QkFBSyxHQUFaLGNBQXlCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQztJQUNyQyx1QkFBSyxHQUFaLGNBQXlCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQztJQUNyQyx1QkFBSyxHQUFaLGNBQXlCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQztJQUNyQyx3QkFBTSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNNLHdCQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ00sd0JBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDTSw0QkFBVSxHQUFqQixVQUFrQixFQUFnRDtRQUM5RCxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRyxDQUFDO1lBQzdDLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFHLENBQUM7Z0JBQzdDLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFHLENBQUM7b0JBQzdDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQUUsT0FBTyxLQUFLLENBQUM7Z0JBQ25DLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTSwwQkFBUSxHQUFmLFVBQWdCLEVBQTJCO1FBQ3ZDLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFHLENBQUM7WUFDN0MsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUcsQ0FBQztnQkFDN0MsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUcsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLGlCQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFBRSxPQUFPLEtBQUssQ0FBQztnQkFDaEQsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNNLHdCQUFNLEdBQWI7UUFDSSxPQUFPO1lBQ0gsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ3RCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtTQUN6QjtJQUNMLENBQUM7SUFDTSx3QkFBTSxHQUFiLFVBQWMsQ0FBYTtRQUN2QixJQUFJLENBQUMsS0FBSyxTQUFTO1lBQU0sT0FBTyxJQUFJLENBQUM7UUFDckMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLFNBQVM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUNyQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssU0FBUztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3JDLElBQU0sRUFBRSxHQUFHLElBQUksaUJBQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBTSxFQUFFLEdBQUcsSUFBSSxpQkFBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQztBQWhHWSwwQkFBTzs7Ozs7Ozs7Ozs7QUNYUDs7O0FBeURiLDBDQXVCQztBQUVELDhDQXNCQztBQXRHRCxpRkFBZ0U7QUFDaEUsb0ZBQWlFO0FBQ2pFLHlHQUFzRjtBQUN0RixpRkFBZ0U7QUFvRGhFLFNBQWdCLGVBQWUsQ0FBQyxDQUEwQjs7SUFDdEQsSUFBSSxDQUFDLEtBQUssU0FBUztRQUFFLE9BQU87SUFDNUIsS0FBSyxDQUFDLFlBQVk7VUFDWixnQkFBZ0IsR0FBRyxDQUFDLE9BQUMsQ0FBQyxPQUFPLG1DQUFNLEdBQUcsQ0FBQztVQUN2QyxnQkFBZ0IsR0FBRyxDQUFDLE9BQUMsQ0FBQyxTQUFTLG1DQUFJLEdBQUcsQ0FBQztVQUN2QyxnQkFBZ0IsR0FBRyxDQUFDLE9BQUMsQ0FBQyxPQUFPLG1DQUFNLEdBQUcsQ0FBQztVQUN2QyxnQkFBZ0IsR0FBRyxDQUFDLE9BQUMsQ0FBQyxLQUFLLG1DQUFRLEdBQUcsQ0FBQztVQUN2QyxnQkFBZ0IsR0FBRyxDQUFDLE9BQUMsQ0FBQyxNQUFNLG1DQUFPLEdBQUcsQ0FBQztVQUN2QyxnQkFBZ0IsR0FBRyxDQUFDLE9BQUMsQ0FBQyxLQUFLLG1DQUFRLEdBQUcsQ0FBQztVQUN2QyxnQkFBZ0IsR0FBRyxDQUFDLE9BQUMsQ0FBQyxTQUFTLG1DQUFJLEdBQUcsQ0FBQztVQUN2QyxnQkFBZ0IsR0FBRyxDQUFDLE9BQUMsQ0FBQyxTQUFTLG1DQUFJLEdBQUcsQ0FBQztVQUN2QyxnQkFBZ0IsR0FBRyxDQUFDLE9BQUMsQ0FBQyxTQUFTLG1DQUFJLEdBQUcsQ0FBQztVQUN2QyxnQkFBZ0IsR0FBRyxDQUFDLGFBQUMsQ0FBQyxLQUFLLDBDQUFFLE9BQU8sbUNBQU0sR0FBRyxDQUFDO1VBQzlDLGdCQUFnQixHQUFHLENBQUMsYUFBQyxDQUFDLEtBQUssMENBQUUsUUFBUSxtQ0FBSyxHQUFHLENBQUM7VUFDOUMsZ0JBQWdCLEdBQUcsQ0FBQyxhQUFDLENBQUMsS0FBSywwQ0FBRSxJQUFJLG1DQUFTLEdBQUcsQ0FBQztVQUM5QyxnQkFBZ0IsR0FBRyxDQUFDLGFBQUMsQ0FBQyxLQUFLLDBDQUFFLElBQUksbUNBQVMsR0FBRyxDQUFDO1VBQzlDLGdCQUFnQixHQUFHLENBQUMsYUFBQyxDQUFDLEtBQUssMENBQUUsT0FBTyxtQ0FBTSxHQUFHLENBQUM7VUFDOUMsZ0JBQWdCLEdBQUcsQ0FBQyxhQUFDLENBQUMsUUFBUSwwQ0FBRSxNQUFNLG1DQUFJLEdBQUcsQ0FBQztVQUM5QyxnQkFBZ0IsR0FBRyxDQUFDLGFBQUMsQ0FBQyxRQUFRLDBDQUFFLE1BQU0sbUNBQUksR0FBRyxDQUFDO1VBQzlDLGdCQUFnQixHQUFHLENBQUMsYUFBQyxDQUFDLFFBQVEsMENBQUUsTUFBTSxtQ0FBSSxHQUFHLENBQUM7VUFDOUMsZ0JBQWdCLEdBQUcsQ0FBQyxhQUFDLENBQUMsUUFBUSwwQ0FBRSxNQUFNLG1DQUFJLEdBQUcsQ0FBQztVQUM5QyxJQUFJLENBQ1QsQ0FBQztBQUNOLENBQUM7QUFFRCxTQUFnQixpQkFBaUIsQ0FBQyxDQUEwQjs7SUFDeEQsSUFBSSxDQUFDLEtBQUssU0FBUztRQUFFLE9BQU87SUFFNUIsSUFBSSxDQUFDO1FBQ1Qsc0NBQXNDO1FBQzlCLEtBQW1CLFVBQWMsRUFBZCxZQUFDLENBQUMsUUFBUSxtQ0FBRSxFQUFFLEVBQWQsY0FBYyxFQUFkLElBQWM7WUFBNUIsSUFBTSxJQUFJO1lBQW9CLG9DQUFlLEVBQUMsSUFBSSxDQUFDLENBQUM7U0FBQTtJQUM3RCxDQUFDO0lBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUFBLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLENBQUM7SUFBQSxDQUFDO0lBRWpELElBQUksQ0FBQztRQUNULHNDQUFzQztRQUM5QixLQUFtQixVQUFjLEVBQWQsWUFBQyxDQUFDLFFBQVEsbUNBQUUsRUFBRSxFQUFkLGNBQWMsRUFBZCxJQUFjO1lBQTVCLElBQU0sSUFBSTtZQUFvQiw0QkFBZSxFQUFDLElBQUksQ0FBQyxDQUFDO1NBQUE7SUFDN0QsQ0FBQztJQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFBQSxLQUFLLENBQUMsb0JBQW9CLEdBQUcsR0FBRyxDQUFDO0lBQUEsQ0FBQztJQUVqRCxJQUFJLENBQUM7UUFDVCxzQ0FBc0M7UUFDOUIsS0FBbUIsVUFBYyxFQUFkLFlBQUMsQ0FBQyxRQUFRLG1DQUFFLEVBQUUsRUFBZCxjQUFjLEVBQWQsSUFBYztZQUE1QixJQUFNLElBQUk7WUFBb0IsNEJBQWUsRUFBQyxJQUFJLENBQUMsQ0FBQztTQUFBO0lBQzdELENBQUM7SUFBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQUEsS0FBSyxDQUFDLG9CQUFvQixHQUFHLEdBQUcsQ0FBQztJQUFBLENBQUM7SUFFakQsSUFBSSxDQUFDO1FBQ1Qsc0NBQXNDO1FBQzlCLEtBQW1CLFVBQWMsRUFBZCxZQUFDLENBQUMsUUFBUSxtQ0FBRSxFQUFFLEVBQWQsY0FBYyxFQUFkLElBQWM7WUFBNUIsSUFBTSxJQUFJO1lBQW9CLDZCQUFlLEVBQUMsSUFBSSxDQUFDLENBQUM7U0FBQTtJQUM3RCxDQUFDO0lBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUFBLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLENBQUM7SUFBQSxDQUFDO0FBQ3JELENBQUM7QUFHRDtJQWtCSSxvQkFBbUIsQ0FBaUI7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBSyxDQUFDLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUssQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBTyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBTSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBTyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQU8sSUFBSSwrQkFBYyxFQUFFLENBQUM7UUFFdEMsSUFBSSxDQUFDLFFBQVEsR0FBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBSSxFQUFFO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUksRUFBRSxDQUFDO1FBRXBCLElBQUksQ0FBQyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFYSxjQUFHLEdBQWpCLFVBQWtCLENBQWlCO1FBQy9CLE9BQU8sSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLDJCQUFNLEdBQWI7UUFDSSxJQUFJLFNBQWlCLENBQUM7UUFDdEIsSUFBSSxDQUFDO1lBQ0QsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0MsQ0FBQztRQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDWCxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN6QyxDQUFDO1FBRUQsSUFBSSxDQUFDO1lBQ0QsT0FBTztnQkFDSCxPQUFPLEVBQUksSUFBSSxDQUFDLE9BQU87Z0JBQ3ZCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDekIsT0FBTyxFQUFJLElBQUksQ0FBQyxPQUFPO2dCQUN2QixLQUFLLEVBQU0sSUFBSSxDQUFDLEtBQUs7Z0JBQ3JCLE1BQU0sRUFBSyxJQUFJLENBQUMsTUFBTTtnQkFDdEIsS0FBSyxFQUFNLElBQUksQ0FBQyxLQUFLO2dCQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHO2dCQUNyQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHO2dCQUNyQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHO2dCQUNyQyxTQUFTLEVBQUUsU0FBUztnQkFDcEIsS0FBSyxFQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUU5QixRQUFRLEVBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQy9DLFFBQVEsRUFBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDL0MsUUFBUSxFQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUMvQyxRQUFRLEVBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDbEQ7UUFDTCxDQUFDO1FBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNYLEtBQUssQ0FBQyx5QkFBeUIsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUN2QyxPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUM7SUFDTCxDQUFDO0lBQ1MscUNBQWdCLEdBQTFCLFVBQTJCLFFBQStCO1FBQ3RELElBQU0sUUFBUSxHQUFlLEVBQUUsQ0FBQztRQUNoQyxLQUFLLElBQUksQ0FBQyxJQUFJLFFBQVE7WUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzVELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFTSwyQkFBTSxHQUFiLFVBQWMsQ0FBZ0I7O1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUssT0FBQyxDQUFDLE9BQU8sbUNBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQUMsQ0FBQyxTQUFTLG1DQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBSyxPQUFDLENBQUMsT0FBTyxtQ0FBTSxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdDLElBQUksQ0FBQyxLQUFLLEdBQU8sT0FBQyxDQUFDLEtBQUssbUNBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFNLE9BQUMsQ0FBQyxNQUFNLG1DQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUMsSUFBSSxDQUFDLEtBQUssR0FBTyxPQUFDLENBQUMsS0FBSyxtQ0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7WUFBTSxDQUFDLENBQUMsU0FBUyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdkYsSUFBSSxDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDOztZQUFNLENBQUMsQ0FBQyxTQUFTLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN2RixJQUFJLENBQUMsQ0FBQyxTQUFTLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7O1lBQU0sQ0FBQyxDQUFDLFNBQVMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFTLFNBQVM7WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENB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YUFBYSxDQUFDLENBQUM7QUFFckMsd0JBQXdCO0FBQ3hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO0lBQzlGLEdBQUcsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDYnhCLCtFQUE4QjtBQUM5QixJQUFJLE1BQU0sR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTlCLHdCQUF3QjtBQUN4QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFTLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtJQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7QUNSeEI7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfR29vZHNJdGVtLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfR3VpbGQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19IZXJvLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfSGVyb0FiaWxpdHkudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19Mb2NhdGlvbi50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX01hemUudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19NYXplQ2VsbC50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX01hemVPYmoudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19NYXplT2JqVmlldy50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX01vdmFibGVQb2ludC50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX1BvaW50LnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfUG9pbnREaXIudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19SYW5nZS50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX1NhdmVEYXRhLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfVGVhbS50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX1RlYW1WaWV3LnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfV2Fsa2VyLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL1RfTXpLaW5kLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfdXRsL0NfRHNwTWVzc2FnZS50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX3V0bC9GX01hdGgudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF91dGwvRl9SYW5kLnRzIiwid2VicGFjazovL21haS8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2xpYi9fSlNPTl9tYWlfZ3VsZC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvcm91dGVzL21haUd1bGQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL3JvdXRlcy9tYWlleC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvcm91dGVzL3VzZXJzLnRzIiwid2VicGFjazovL21haS9leHRlcm5hbCBjb21tb25qcyBcImNvb2tpZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9tYWkvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vbWFpL2V4dGVybmFsIGNvbW1vbmpzIFwiaHR0cC1lcnJvcnNcIiIsIndlYnBhY2s6Ly9tYWkvZXh0ZXJuYWwgY29tbW9uanMgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly9tYWkvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly9tYWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFpL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbWFpL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9tYWkvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRfTWFrZUVudW1UeXBlIH0gICBmcm9tIFwiLi4vZF91dGwvVF9NYWtlRW51bVR5cGVcIjtcclxuaW1wb3J0IHsgX2dldF91dWlkLCBfaXJhbmQgfSAgICAgICAgZnJvbSBcIi4uL2RfdXRsL0ZfUmFuZFwiO1xyXG5pbXBvcnQgeyBJX0pTT04sIEpTT05fQW55IH0gZnJvbSBcIi4vQ19TYXZlRGF0YVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRfR29vZHNLaW5kOntbbGNrZDogc3RyaW5nXTogbnVtYmVyfSAgPSB7XHJcbiAgICBVbmtuOiAgMCxcclxuICAgIENoc3Q6ICAxLCAgXHJcbiAgICBHb2xkOiAgMixcclxuICAgIEFybXM6ICAzLFxyXG4gICAgU2hsZDogIDUsXHJcbiAgICBEcnVnOiAgNixcclxuICAgIEl0ZW06ICA3LFxyXG59IGFzIGNvbnN0O1xyXG5leHBvcnQgdHlwZSBUX0dvb2RzS2luZCA9IFRfTWFrZUVudW1UeXBlPHR5cGVvZiBUX0dvb2RzS2luZD47XHJcblxyXG5mdW5jdGlvbiBUX0dvb2RzS2luZF9rZXkoZ2RrZDogVF9Hb29kc0tpbmQpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKFRfR29vZHNLaW5kKS5maW5kKGtleSA9PiBUX0dvb2RzS2luZFtrZXldID09PSBnZGtkKSA/PyBcIlVua25cIjtcclxufVxyXG5cclxuY29uc3QgR29vZHNLaW5kX21iX25hbWU6IHtba2luZDogbnVtYmVyXTogc3RyaW5nfSA9IHtcclxuICAgIDA6ICAn44OQ44KwJyxcclxuICAgIDE6ICAn5a6d566xJyxcclxuICAgIDI6ICAn6YeR6YqtJyxcclxuICAgIDM6ICAn5q2m5ZmoJyxcclxuICAgIDU6ICAn6KOF5YKZJyxcclxuICAgIDY6ICAn6JasJyxcclxuICAgIDc6ICAn54mp5ZOBJyxcclxufSBhcyBjb25zdDtcclxuXHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX0dvb2RzSXRlbSBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIHVuaXFfaWQ/OiAgICAgICAgIHN0cmluZyxcclxuICAgIGtpbmQ/OiAgICAgICAgICAgIHN0cmluZyxcclxuICAgIG5hbWU/OiAgICAgICAgICAgIHN0cmluZyxcclxuICAgIGFtYmlndW91c19uYW1lPzogIHN0cmluZyxcclxuICAgIGNvbmZpcm1lZF9uYW1lPzogIHN0cmluZyxcclxuICAgIG93bl9uYW1lPzogICAgICAgIHN0cmluZyxcclxuICAgIGFtYmlndW91c192YWx1ZT86IG51bWJlcixcclxuICAgIGNvbmZpcm1lZF92YWx1ZT86IG51bWJlcixcclxuICAgIG93bl92YWx1ZT86ICAgICAgIG51bWJlcixcclxuICAgIGlzX2NvbmZpcm1lZD86ICAgIHN0cmluZyxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfR29vZHNJdGVtIGltcGxlbWVudHMgSV9KU09OIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5ld09iaihqPzogSlNPTl9Hb29kc0l0ZW0pOiBDX0dvb2RzSXRlbXx1bmRlZmluZWQge1xyXG4gICAgICAgIGlmIChqICAgICAgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAoai5raW5kID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmIChqLmtpbmQgaW4gVF9Hb29kc0tpbmQpIHJldHVybiBuZXcgQ19Hb29kc0l0ZW0oaik7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuLyogICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGtpbmQgPSBUX0dvb2RzS2luZFtqLmtpbmRdO1xyXG4gICAgICAgIHN3aXRjaCAoa2luZCkge1xyXG4gICAgICAgICAgICBjYXNlIFRfR29vZHNLaW5kLkdvbGQ6XHJcbiAgICAgICAgICAgIGNhc2UgVF9Hb29kc0tpbmQuQXJtczpcclxuICAgICAgICAgICAgY2FzZSBUX0dvb2RzS2luZC5TaGxkOlxyXG4gICAgICAgICAgICBjYXNlIFRfR29vZHNLaW5kLkRydWc6XHJcbiAgICAgICAgICAgIGNhc2UgVF9Hb29kc0tpbmQuSXRlbTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ19Hb29kc0l0ZW0oaik7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuKi9cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgdW5pcV9pZDogICAgICAgICBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQga2luZDogICAgICAgICAgICBUX0dvb2RzS2luZDtcclxuICAgIHByb3RlY3RlZCBuYW1lOiAgICAgICAgICAgIHN0cmluZzsgICAvLyDkuIvoqJjjga7lkI3liY3jga7jgYbjgaHjgIHmnIDmlrDjga7jgoLjga5cclxuICAgIHByb3RlY3RlZCBhbWJpZ3VvdXNfbmFtZTogIHN0cmluZzsgICAvLyDpkZHlrprjgb7jgafjga7lkI3liY1cclxuICAgIHByb3RlY3RlZCBjb25maXJtZWRfbmFtZTogIHN0cmluZzsgICAvLyDpkZHlrprjgafnorrlrprjgZfjgZ/lkI3liY1cclxuICAgIHByb3RlY3RlZCBvcmlnaW5hbF9uYW1lOiAgIHN0cmluZ3x1bmRlZmluZWQ7ICAvLyDoh6rliIbjgaflkb3lkI3jgZfjgZ/jgqrjg6rjgrjjg4rjg6vjga7lkI3liY1cclxuICAgIHByb3RlY3RlZCB2YWx1ZTogICAgICAgICAgIG51bWJlcjsgIC8vIOmHkemKreeahOS+oeWApChHb2xkIOOBquOCieOBneOBruS+oeagvOOAgeOBneOBruS7luOBr+Wjsuiyt+S+oeagvOOBruWfuuekjuWApClcclxuICAgIHByb3RlY3RlZCBhbWJpZ3VvdXNfdmFsdWU6IG51bWJlcjsgIC8vIOmRkeWumuOBvuOBp+OBruS+oeWApFxyXG4gICAgcHJvdGVjdGVkIGNvbmZpcm1lZF92YWx1ZTogbnVtYmVyOyAgLy8g6ZGR5a6a44Gn56K65a6a44GX44Gf5L6h5YCkXHJcbiAgICBwcm90ZWN0ZWQgb3JpZ2luYWxfdmFsdWU6ICBudW1iZXJ8dW5kZWZpbmVkOyAgLy8g44Kq44Oq44K444OK44Or5YyW44GX44Gf5b6M44Gu5L6h5YCkXHJcbiAgICBwcm90ZWN0ZWQgaXNfY29uZmlybWVkOiAgICBib29sZWFuOyAvLyDpkZHlrprjgafnorrlrpooVHJ1ZSnjgZfjgZ/jgYvlkKYoRmFsc2Up44GLXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX0dvb2RzSXRlbSkge1xyXG4gICAgICAgIHRoaXMudW5pcV9pZCAgICAgICAgPSAgJ2dvb2RzXycgKyBfZ2V0X3V1aWQoKTtcclxuICAgICAgICB0aGlzLmtpbmQgICAgICAgICAgID0gVF9Hb29kc0tpbmQuVW5rbjtcclxuICAgICAgICB0aGlzLmlzX2NvbmZpcm1lZCAgID0gZmFsc2U7IFxyXG5cclxuICAgICAgICB0aGlzLmFtYmlndW91c19uYW1lID0gJyc7IFxyXG4gICAgICAgIHRoaXMuY29uZmlybWVkX25hbWUgPSAnJzsgXHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbF9uYW1lICA9IHVuZGVmaW5lZDsgXHJcbiAgICAgICAgdGhpcy5uYW1lICAgICAgICAgICA9IHRoaXMuYW1iaWd1b3VzX25hbWU7IFxyXG5cclxuICAgICAgICB0aGlzLmFtYmlndW91c192YWx1ZSA9IDA7IFxyXG4gICAgICAgIHRoaXMuY29uZmlybWVkX3ZhbHVlID0gMDsgXHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbF92YWx1ZSAgPSB1bmRlZmluZWQ7IFxyXG4gICAgICAgIHRoaXMudmFsdWUgICAgICAgICAgID0gdGhpcy5hbWJpZ3VvdXNfdmFsdWU7IFxyXG5cclxuICAgICAgICBpZiAoaiAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShqKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdWlkKCk6IHN0cmluZyB7cmV0dXJuIHRoaXMudW5pcV9pZDt9O1xyXG4gICAgcHVibGljIGdldF9raW5kKCk6IFRfR29vZHNLaW5kIHtyZXR1cm4gdGhpcy5raW5kO307XHJcbiAgICBwdWJsaWMgZ2V0X25hbWUoKTogc3RyaW5nIHtyZXR1cm4gdGhpcy5uYW1lfTtcclxuICAgIHB1YmxpYyBnZXRfZ29sZCgpOiBudW1iZXIge3JldHVybiB0aGlzLnZhbHVlfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0X2tpbmRfbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBHb29kc0tpbmRfbWJfbmFtZVt0aGlzLmtpbmRdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkb19jb25maXJtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHRoaXMuaXNfY29uZmlybWVkICAgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubmFtZSAgPSB0aGlzLm9yaWdpbmFsX25hbWUgID8/IHRoaXMuY29uZmlybWVkX25hbWU7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMub3JpZ2luYWxfdmFsdWUgPz8gdGhpcy5jb25maXJtZWRfdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfb3duX25hbWUob3JpZ2luYWxfbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsX25hbWUgPSBvcmlnaW5hbF9uYW1lO1xyXG4gICAgICAgIHRoaXMubmFtZSAgICAgICAgICA9IG9yaWdpbmFsX25hbWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfb3duX3ZhbHVlKG9yaWdpbmFsX3ZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxfdmFsdWUgPSBvcmlnaW5hbF92YWx1ZTtcclxuICAgICAgICB0aGlzLnZhbHVlICAgICAgICAgID0gb3JpZ2luYWxfdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJhbmRvbV9tYWtlKGtpbmQ6IFRfR29vZHNLaW5kKTogQ19Hb29kc0l0ZW0ge1xyXG4gICAgICAgIHRoaXMua2luZCA9IGtpbmQ7XHJcbiAgICAgICAgaWYgKGtpbmQgPT09IFRfR29vZHNLaW5kLkdvbGQpICB0aGlzLnZhbHVlID0gX2lyYW5kKDEwMCwxMDAwKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fR29vZHNJdGVtIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1bmlxX2lkOiAgICAgICAgIHRoaXMudW5pcV9pZCxcclxuICAgICAgICAgICAga2luZDogICAgICAgICAgICBUX0dvb2RzS2luZF9rZXkodGhpcy5raW5kKSxcclxuICAgICAgICAgICAgYW1iaWd1b3VzX25hbWU6ICB0aGlzLmFtYmlndW91c19uYW1lLFxyXG4gICAgICAgICAgICBjb25maXJtZWRfbmFtZTogIHRoaXMuY29uZmlybWVkX25hbWUsXHJcbiAgICAgICAgICAgIG9yaWdpbmFsX25hbWU6ICAgdGhpcy5vcmlnaW5hbF9uYW1lID8/ICcnLFxyXG4gICAgICAgICAgICBhbWJpZ3VvdXNfdmFsdWU6IHRoaXMuYW1iaWd1b3VzX3ZhbHVlLFxyXG4gICAgICAgICAgICBjb25maXJtZWRfdmFsdWU6IHRoaXMuY29uZmlybWVkX3ZhbHVlLFxyXG4gICAgICAgICAgICBvcmlnaW5hbF92YWx1ZTogIHRoaXMub3JpZ2luYWxfdmFsdWUgPz8gMCxcclxuICAgICAgICAgICAgaXNfY29uZmlybWVkOiAgICB0aGlzLmlzX2NvbmZpcm1lZCA/ICcxJyA6ICcwJyxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo6IEpTT05fR29vZHNJdGVtKTogQ19Hb29kc0l0ZW0ge1xyXG4gICAgICAgIGlmIChqID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoai51bmlxX2lkICAgICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy51bmlxX2lkICAgICAgICAgID0gai51bmlxX2lkO1xyXG4gICAgICAgIGlmIChqLmtpbmQgICAgICAgICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmtpbmQgICAgICAgICAgICAgPSBUX0dvb2RzS2luZFtqLmtpbmRdO1xyXG4gICAgICAgIGlmIChqLmFtYmlndW91c19uYW1lICAhPT0gdW5kZWZpbmVkKSB0aGlzLmFtYmlndW91c19uYW1lICAgPSBqLmFtYmlndW91c19uYW1lO1xyXG4gICAgICAgIGlmIChqLmNvbmZpcm1lZF9uYW1lICAhPT0gdW5kZWZpbmVkKSB0aGlzLmNvbmZpcm1lZF9uYW1lICAgPSBqLmNvbmZpcm1lZF9uYW1lO1xyXG4gICAgICAgIGlmIChqLm9yaWdpbmFsX25hbWUgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm9yaWdpbmFsX25hbWUgICAgPSBqLm9yaWdpbmFsX25hbWUgIT09ICcnID8gai5vcmlnaW5hbF9uYW1lIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmIChqLmFtYmlndW91c192YWx1ZSAhPT0gdW5kZWZpbmVkKSB0aGlzLmFtYmlndW91c192YWx1ZSAgPSBqLmFtYmlndW91c192YWx1ZTtcclxuICAgICAgICBpZiAoai5jb25maXJtZWRfdmFsdWUgIT09IHVuZGVmaW5lZCkgdGhpcy5jb25maXJtZWRfdmFsdWUgID0gai5jb25maXJtZWRfdmFsdWU7XHJcbiAgICAgICAgaWYgKGoub3JpZ2luYWxfdmFsdWUgICE9PSB1bmRlZmluZWQpIHRoaXMub3JpZ2luYWxfdmFsdWUgICA9IGoub3JpZ2luYWxfdmFsdWUgIT09IDAgPyBqLm9yaWdpbmFsX3ZhbHVlIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmIChqLmlzX2NvbmZpcm1lZCAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmlzX2NvbmZpcm1lZCAgICAgPSBqLmlzX2NvbmZpcm1lZCAhPSAnMCcgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9yaWdpbmFsX25hbWUgIT09IHVuZGVmaW5lZCkgdGhpcy5uYW1lID0gdGhpcy5vcmlnaW5hbF9uYW1lO1xyXG4gICAgICAgIGVsc2UgdGhpcy5uYW1lID0gdGhpcy5pc19jb25maXJtZWQgPyB0aGlzLmNvbmZpcm1lZF9uYW1lIDogdGhpcy5hbWJpZ3VvdXNfbmFtZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3JpZ2luYWxfdmFsdWUgIT09IHVuZGVmaW5lZCkgdGhpcy52YWx1ZSA9IHRoaXMub3JpZ2luYWxfdmFsdWU7XHJcbiAgICAgICAgZWxzZSB0aGlzLnZhbHVlID0gdGhpcy5pc19jb25maXJtZWQgPyB0aGlzLmNvbmZpcm1lZF92YWx1ZSA6IHRoaXMuYW1iaWd1b3VzX3ZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBJX0xvY2F0ZSwgVF9MY2tkIH0gICAgICBmcm9tIFwiLi9DX0xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IElfSlNPTl9VbmlxLCBKU09OX0FueSB9IGZyb20gXCIuL0NfU2F2ZURhdGFcIjtcclxuaW1wb3J0IHsgQ19IZXJvLCBKU09OX0hlcm8gfSAgICAgZnJvbSBcIi4vQ19IZXJvXCI7XHJcbmltcG9ydCB7IENfR29vZHMsIEpTT05fR29vZHMgfSAgIGZyb20gXCIuL0NfR29vZHNcIjtcclxuaW1wb3J0IHsgX2dldF91dWlkIH0gICAgICAgICAgICAgZnJvbSBcIi4uL2RfdXRsL0ZfUmFuZFwiO1xyXG5pbXBvcnQgeyBDX0dvb2RzSXRlbSwgVF9Hb29kc0tpbmQgfSBmcm9tIFwiLi9DX0dvb2RzSXRlbVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX0d1aWxkIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgaWQ/OiAgICAgICBudW1iZXIsXHJcbiAgICB1bmlxX2lkPzogIHN0cmluZyxcclxuICAgIHNhdmVfaWQ/OiAgbnVtYmVyLFxyXG4gICAgbmFtZT86ICAgICBzdHJpbmcsXHJcbiAgICBnb29kcz86ICAgIEpTT05fR29vZHMsXHJcbiAgICBoZXJvZXM/OiAgIEpTT05fSGVyb1tdLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfZ3VsZF9pbmZvKGE6IEpTT05fR3VpbGR8dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydChcIkd1aWxkIEluZm86XCIgXHJcbiAgICAgICAgKyBcIlxcbmlkOiAgICAgICBcIiArIChhLmlkICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnVuaXFfaWQ6ICBcIiArIChhLnVuaXFfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNhdmVfaWQ6ICBcIiArIChhLnNhdmVfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbm5hbWU6ICAgICBcIiArIChhLm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmdvb2RzOiAgICBcIiArIChPYmplY3Qua2V5cyhhLmdvb2RzPz8wKS5sZW5ndGgpXHJcbiAgICAgICAgKyBcIlxcbmhlcm9lczogICBcIiArIChhLmhlcm9lcz8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX0d1aWxkIGltcGxlbWVudHMgSV9Mb2NhdGUsIElfSlNPTl9VbmlxIHtcclxuICAgIHByb3RlY3RlZCBpZDogICAgICAgICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgdW5pcV9pZDogICAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHNhdmVfaWQ6ICAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBuYW1lOiAgICAgICBzdHJpbmc7XHJcbiAgICBwdWJsaWMgICAgZ29sZDogICAgICAgQ19Hb29kc0l0ZW07XHJcbiAgICBwcm90ZWN0ZWQgaGVyb2VzOiAgICAge1t1aWQ6IHN0cmluZ106IENfSGVyb307XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYT86IEpTT05fR3VpbGQpIHtcclxuICAgICAgICB0aGlzLmlkICAgICAgICAgPSAtMTtcclxuICAgICAgICB0aGlzLnVuaXFfaWQgICAgPSAnbWFpX2d1bGQjJyArIF9nZXRfdXVpZCgpO1xyXG4gICAgICAgIHRoaXMuc2F2ZV9pZCAgICA9IC0xO1xyXG4gICAgICAgIHRoaXMubmFtZSAgICAgICA9ICcnO1xyXG4gICAgICAgIHRoaXMuZ29sZCAgICAgICA9IG5ldyBDX0dvb2RzSXRlbSh7Z2tpbmQ6IFRfR29vZHNLaW5kLkdvbGQsIHZhbHVlOiAwfSk7XHJcbiAgICAgICAgdGhpcy5oZXJvZXMgICAgID0ge307XHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy51bmlxX2lkfVxyXG4gICAgcHVibGljIGdldF9sY2tkKCk6IFRfTGNrZCB7cmV0dXJuIFRfTGNrZC5NYXplfVxyXG4gICAgcHVibGljIGdldF9uYW1lKCk6IHN0cmluZyB7cmV0dXJuIHRoaXMubmFtZX1cclxuICAgIFxyXG4gICAgcHVibGljIGhyZXMoKTogIENfSGVyb1tdIHtcclxuICAgICAgICBjb25zdCBocmVzOiBDX0hlcm9bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGlpIGluIHRoaXMuaGVyb2VzKSBocmVzLnB1c2godGhpcy5oZXJvZXNbaWldKTtcclxuICAgICAgICByZXR1cm4gaHJlcztcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgY2xlYXJfaHJlcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlcm9lcyA9IHt9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFkZF9oZXJvKGhlcm86IENfSGVybyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGVyb2VzW2hlcm8udWlkKCldID0gaGVybztcclxuICAgIH1cclxuICAgIHB1YmxpYyBybXZfaGVybyhoZXJvOiBDX0hlcm8pOiB2b2lkIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5oZXJvZXNbaGVyby51aWQoKV07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9HdWlsZCB7XHJcbiAgICAgICAgY29uc3QganNvbl9oZXJvZXM6IEpTT05fSGVyb1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaWkgaW4gdGhpcy5oZXJvZXMpIGpzb25faGVyb2VzLnB1c2godGhpcy5oZXJvZXNbaWldLmVuY29kZSgpKTsgIFxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogICAgICB0aGlzLmlkLFxyXG4gICAgICAgICAgICB1bmlxX2lkOiB0aGlzLnVuaXFfaWQsXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6IHRoaXMuc2F2ZV9pZCxcclxuICAgICAgICAgICAgZ29sZDogICAgdGhpcy5nb2xkLmVuY29kZSgpLFxyXG4gICAgICAgICAgICBoZXJvZXM6ICBqc29uX2hlcm9lcyxcclxuICAgICAgICAgICAgbmFtZTogICAgdGhpcy5uYW1lLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoYTogSlNPTl9HdWlsZHx1bmRlZmluZWQpOiBDX0d1aWxkIHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBcclxuICAgICAgICBpZiAoYS5pZCAgICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmlkICAgICAgICAgPSBhLmlkO1xyXG4gICAgICAgIGlmIChhLnVuaXFfaWQgICE9PSB1bmRlZmluZWQpIHRoaXMudW5pcV9pZCAgICA9IGEudW5pcV9pZDtcclxuICAgICAgICBpZiAoYS5zYXZlX2lkICAhPT0gdW5kZWZpbmVkKSB0aGlzLnNhdmVfaWQgICAgPSBhLnNhdmVfaWQ7XHJcbiAgICAgICAgaWYgKGEubmFtZSAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5uYW1lICAgICAgID0gYS5uYW1lO1xyXG4gICAgICAgIGlmIChhLmdvbGQgICAgICE9PSB1bmRlZmluZWQpIHRoaXMuZ29sZC5kZWNvZGUgKGEuZ29sZCk7XHJcblxyXG4gICAgICAgIGlmIChhLmhlcm9lcyAhPT0gdW5kZWZpbmVkKSAge1xyXG4gICAgICAgICAgICB0aGlzLmhlcm9lcyA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGpzb25faGVybyBvZiBhLmhlcm9lcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVybyA9IG5ldyBDX0hlcm8oanNvbl9oZXJvKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVyb2VzW2hlcm8udWlkKCldID0gaGVybztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZW5jb2RlX2FsbChhbGxfZ3VsZDogQ19HdWlsZFtdKTogSlNPTl9HdWlsZFtdIHtcclxuICAgICAgICBjb25zdCBhbGxfZ3VsZF9kYXRhOiBKU09OX0d1aWxkW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBndWxkIG9mIGFsbF9ndWxkKSB7XHJcbiAgICAgICAgICAgIGFsbF9ndWxkX2RhdGEucHVzaChndWxkLmVuY29kZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbF9ndWxkX2RhdGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZV9hbGwoYWxsX2d1bGRfZGF0YTogSlNPTl9HdWlsZFtdKTogQ19HdWlsZFtdIHtcclxuICAgICAgICBjb25zdCBhbGxfZ3VsZDogQ19HdWlsZFtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgZ3VsZF9kYXRhIG9mIGFsbF9ndWxkX2RhdGEpIHtcclxuICAgICAgICAgICAgYWxsX2d1bGQucHVzaCgobmV3IENfR3VpbGQoKSkuZGVjb2RlKGd1bGRfZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsX2d1bGQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIkd1aWxkIEluZm86XCIgXHJcbiAgICAgICAgICAgICsgXCJcXG5pZDogICAgICAgXCIgKyAodGhpcy5pZCAgICAgICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG51bmlxX2lkOiAgXCIgKyAodGhpcy51bmlxX2lkICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zYXZlX2lkOiAgXCIgKyAodGhpcy5zYXZlX2lkICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5uYW1lOiAgICAgXCIgKyAodGhpcy5uYW1lICAgICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5nb2xkOiAgICAgXCIgKyAoT2JqZWN0LmtleXModGhpcy5nb2xkPz8wKS5sZW5ndGgpXHJcbiAgICAgICAgICAgICsgXCJcXG5oZXJvZXM6ICAgXCIgKyAodGhpcy5oZXJvZXM/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX0dvb2RzLCBKU09OX0dvb2RzIH0gICAgICAgICAgICAgZnJvbSBcIi4vQ19Hb29kc1wiO1xyXG5pbXBvcnQgeyBDX0hlcm9BYmlsaXR5LCBKU09OX0hlcm9fQWJpbGl0eX0gZnJvbSBcIi4vQ19IZXJvQWJpbGl0eVwiO1xyXG5pbXBvcnQgeyBJX0pTT05fVW5pcSwgICBKU09OX0FueSB9ICAgICAgICAgZnJvbSBcIi4vQ19TYXZlRGF0YVwiO1xyXG5pbXBvcnQgeyBfZ2V0X3V1aWQsIF9pcmFuZCwgX3JhbmRvbV9zdHIgfSAgZnJvbSBcIi4uL2RfdXRsL0ZfUmFuZFwiO1xyXG5pbXBvcnQgeyBDX0dvb2RzSXRlbSwgSlNPTl9Hb29kc0l0ZW0sIFRfR29vZHNLaW5kIH0gZnJvbSBcIi4vQ19Hb29kc0l0ZW1cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9IZXJvIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgaWQ/OiAgICAgICAgbnVtYmVyLCBcclxuICAgIHVuaXFfaWQ/OiAgIHN0cmluZywgXHJcbiAgICBzYXZlX2lkPzogICBudW1iZXIsIFxyXG4gICAgbmFtZT86ICAgICAgc3RyaW5nLCBcclxuICAgIHNleD86ICAgICAgIG51bWJlcjsgXHJcbiAgICBhZ2U/OiAgICAgICBudW1iZXI7IFxyXG4gICAgZ29sZD86ICAgICBKU09OX0dvb2RzSXRlbTsgXHJcbiAgICBzdGF0ZT86ICAgICBudW1iZXI7IFxyXG4gICAgbHY/OiAgICAgICAgbnVtYmVyOyBcclxuICAgIHZhbD86ICAgICAgIEpTT05fSGVyb19WYWx1ZTtcclxuICAgIGFiaV9wPzogICAgICAge2JzYz86IEpTT05fSGVyb19BYmlsaXR5LCB0dGw/OiBKU09OX0hlcm9fQWJpbGl0eSwgbm93PzogSlNPTl9IZXJvX0FiaWxpdHl9O1xyXG4gICAgYWJpX20/OiAgICAgICB7YnNjPzogSlNPTl9IZXJvX0FiaWxpdHksIHR0bD86IEpTT05fSGVyb19BYmlsaXR5LCBub3c/OiBKU09OX0hlcm9fQWJpbGl0eX07XHJcbiAgICBpc19hbGl2ZT86ICBzdHJpbmd8Ym9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX0hlcm9fVmFsdWUgZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBza3A/OiB7dHRsOiBudW1iZXIsICBub3c6IG51bWJlcn0sIFxyXG4gICAgZXhwPzoge3R0bDogbnVtYmVyLCAgbm93OiBudW1iZXJ9LFxyXG4gICAgbnhlPzogbnVtYmVyLCAgICAgICAgICAgICAgICAgICAvLyDmrKHlm57jga7jg5Ljg7zjg63jg7zjg6zjg5njg6vjgqLjg4Pjg5fjgavlv4XopoHjgarntYzpqJPlgKRcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X2hyZXNfaW5mbyhhOiAoSlNPTl9IZXJvfHVuZGVmaW5lZClbXXx1bmRlZmluZWQpOiB2b2lkIHsgXHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydCgnTnVtYmVyIG9mIEhlcm8gPSAnICsgYS5sZW5ndGgudG9TdHJpbmcoKSk7XHJcbiAgICBmb3IgKHZhciBpIGluIGEpIHtcclxuICAgICAgICBpZiAoYVtpXSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuICAgICAgICBhbGVydF9oZXJvX2luZm8oYVtpXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9oZXJvX2luZm8oYTogSlNPTl9IZXJvfHVuZGVmaW5lZCk6IHZvaWQgeyBcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGFsZXJ0KFwiSGVybyBJbmZvOlxcblwiIFxyXG4gICAgICAgICsgXCJcXG5pZDogICAgICAgXCIgICAgICsgKGE/LmlkICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnVuaXFfaWQgICBcIiAgICAgKyAoYT8udW5pcV9pZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubmFtZTogICAgIFwiICAgICArIChhPy5uYW1lICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zYXZlX2lkOiAgXCIgICAgICsgKGE/LnNhdmVfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmlzX2FsaXZlOiBcIiAgICAgKyAoYT8uaXNfYWxpdmUgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX0hlcm8gaW1wbGVtZW50cyBJX0pTT05fVW5pcSB7XHJcbiAgICBwcm90ZWN0ZWQgbXlfaWQ6ICAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBteV9uYW1lOiAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHVuaXFfaWQ6ICBzdHJpbmc7IFxyXG4gICAgcHJvdGVjdGVkIHNhdmVfaWQ6ICBudW1iZXI7IFxyXG4gICAgcHJvdGVjdGVkIHNleDogICAgICBudW1iZXI7IFxyXG4gICAgcHJvdGVjdGVkIGFnZTogICAgICBudW1iZXI7IFxyXG4gICAgcHJvdGVjdGVkIHN0YXRlOiAgICBudW1iZXI7IFxyXG4gICAgcHJvdGVjdGVkIGx2OiAgICAgICBudW1iZXI7IFxyXG4gICAgLy8gYnNjKEJhc2ljKeOBr+W9k+S6uuOBruWfuuacrOWApOOAgnR0bChUb3RhbCnjga/oo4XlgpnnrYnjgpLliqDmuJvnrpfjgZfjgZ/jgoLjga7jgIJub3fjga/jg5Djg5XnrYnjga7jgr/jg7zjg7PliLbjga7jgoLliqDmuJvnrpfjgZfjgZ/jgoLjga5cclxuICAgIHByb3RlY3RlZCBnb2xkOiAgICBDX0dvb2RzSXRlbTsgXHJcbiAgICBwcm90ZWN0ZWQgdmFsOiAgICAgIEpTT05fSGVyb19WYWx1ZTtcclxuICAgIHByb3RlY3RlZCBhYmlfcDogICAgICB7YnNjOiBDX0hlcm9BYmlsaXR5LCB0dGw6IENfSGVyb0FiaWxpdHksIG5vdzogQ19IZXJvQWJpbGl0eX07XHJcbiAgICBwcm90ZWN0ZWQgYWJpX206ICAgICAge2JzYzogQ19IZXJvQWJpbGl0eSwgdHRsOiBDX0hlcm9BYmlsaXR5LCBub3c6IENfSGVyb0FiaWxpdHl9O1xyXG5cclxuICAgIHByb3RlY3RlZCBpc19hbGl2ZTogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYT86IEpTT05fSGVybykge1xyXG4gICAgICAgIHRoaXMubXlfaWQgICAgICA9IDA7XHJcbiAgICAgICAgdGhpcy5teV9uYW1lICAgID0gJ05vIE5hbWUgSGVybyc7XHJcbiAgICAgICAgdGhpcy51bmlxX2lkICAgID0gJ21haV9oZXJvIycgKyBfZ2V0X3V1aWQoKTtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgICAgPSAwO1xyXG4gICAgICAgIHRoaXMuc2V4ICAgICAgICA9IDA7IFxyXG4gICAgICAgIHRoaXMuYWdlICAgICAgICA9IDA7IFxyXG4gICAgICAgIHRoaXMuZ29sZCAgICAgID0gbmV3IENfR29vZHNJdGVtKHtna2luZDogVF9Hb29kc0tpbmQuR29sZCwgdmFsdWU6IDB9KTsgXHJcbiAgICAgICAgdGhpcy5zdGF0ZSAgICAgID0gMDsgXHJcbiAgICAgICAgdGhpcy5sdiAgICAgICAgID0gMDtcclxuICAgICAgICB0aGlzLnZhbCAgICAgICAgPSB7fTtcclxuICAgICAgICB0aGlzLmFiaV9wICAgICAgPSB7YnNjOiBuZXcgQ19IZXJvQWJpbGl0eSgpLCB0dGw6IG5ldyBDX0hlcm9BYmlsaXR5KCksIG5vdzogbmV3IENfSGVyb0FiaWxpdHkoKX07XHJcbiAgICAgICAgdGhpcy5hYmlfbSAgICAgID0ge2JzYzogbmV3IENfSGVyb0FiaWxpdHkoKSwgdHRsOiBuZXcgQ19IZXJvQWJpbGl0eSgpLCBub3c6IG5ldyBDX0hlcm9BYmlsaXR5KCl9O1xyXG4gICAgICAgIHRoaXMuaXNfYWxpdmUgICA9IHRydWU7XHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldF9wcnAoYXJnIDogSlNPTl9IZXJvKSB7XHJcbiAgICAgICAgdGhpcy5kZWNvZGUoYXJnKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfdW5pcV9pZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy51bmlxX2lkfVxyXG5cclxuICAgIHB1YmxpYyBpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnSGVyb18nICsgdGhpcy5teV9pZC50b1N0cmluZygxNikucGFkU3RhcnQoNSwgJzAnKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB1aWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudW5pcV9pZDt9XHJcbiAgICBwdWJsaWMgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm15X25hbWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X25hbWUobmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5teV9uYW1lID0gbmFtZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX0hlcm8ge1xyXG4gICAgICAgIGNvbnN0IHJldDogSlNPTl9IZXJvID0ge1xyXG4gICAgICAgICAgICBpZDogICAgICAgIHRoaXMubXlfaWQsXHJcbiAgICAgICAgICAgIHVuaXFfaWQ6ICAgdGhpcy51bmlxX2lkLFxyXG4gICAgICAgICAgICBuYW1lOiAgICAgIHRoaXMubXlfbmFtZSxcclxuICAgICAgICAgICAgc2F2ZV9pZDogICB0aGlzLnNhdmVfaWQsXHJcbiAgICAgICAgICAgIHNleDogICAgICAgdGhpcy5zZXgsIFxyXG4gICAgICAgICAgICBhZ2U6ICAgICAgIHRoaXMuYWdlLCBcclxuICAgICAgICAgICAgc3RhdGU6ICAgICB0aGlzLnN0YXRlLCBcclxuICAgICAgICAgICAgbHY6ICAgICAgICB0aGlzLmx2LCBcclxuICAgICAgICAgICAgZ29vZHM6ICAgICB0aGlzLmdvbGQuZW5jb2RlKCksIFxyXG4gICAgICAgICAgICB2YWw6ICAgICAgIHRoaXMudmFsLFxyXG4gICAgICAgICAgICBhYmlfcF9ic2M6IHRoaXMuYWJpX3AuYnNjLmVuY29kZSgpLFxyXG4gICAgICAgICAgICBhYmlfbV9ic2M6IHRoaXMuYWJpX20uYnNjLmVuY29kZSgpLFxyXG4gICAgICAgICAgICBpc19hbGl2ZTogKHRoaXMuaXNfYWxpdmUpID8gJ1knIDogJ04nLCBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoYTogSlNPTl9IZXJvfHVuZGVmaW5lZCk6IENfSGVybyB7XHJcbiAgICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKGEuaWQgICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9pZCAgICA9IGEuaWQ7XHJcbiAgICAgICAgaWYgKGEubmFtZSAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9uYW1lICA9IGEubmFtZTtcclxuICAgICAgICBpZiAoYS51bmlxX2lkICAhPT0gdW5kZWZpbmVkKSB0aGlzLnVuaXFfaWQgID0gYS51bmlxX2lkO1xyXG4gICAgICAgIGlmIChhLnNhdmVfaWQgICE9PSB1bmRlZmluZWQpIHRoaXMuc2F2ZV9pZCAgPSBhLnNhdmVfaWQ7XHJcbiAgICAgICAgaWYgKGEuc2V4ICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5zZXggICAgICA9IGEuc2V4O1xyXG4gICAgICAgIGlmIChhLmFnZSAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMuYWdlICAgICAgPSBhLmFnZTtcclxuICAgICAgICBpZiAoYS5zdGF0ZSAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLnN0YXRlICAgID0gYS5zdGF0ZTtcclxuICAgICAgICBpZiAoYS5sdiAgICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmx2ICAgICAgID0gYS5sdjtcclxuICAgICAgICBpZiAoYS5pc19hbGl2ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYS5pc19hbGl2ZSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNfYWxpdmUgPSBhLmlzX2FsaXZlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc19hbGl2ZSA9IChhLmlzX2FsaXZlICE9ICdOJykgPyB0cnVlOiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYS5nb29kcyAgICE9PSB1bmRlZmluZWQpIHRoaXMuZ29sZC5kZWNvZGUoYS5nb29kcyk7XHJcbiAgICAgICAgaWYgKGEudmFsICAgICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19kZWNvZGVfdmFsKHRoaXMudmFsLCBhLnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhLmFiaV9wX2JzYyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWJpX3AuYnNjLmRlY29kZShhLmFiaV9wX2JzYyk7XHJcbiAgICAgICAgICAgIC8vIOaaq+WumlxyXG4gICAgICAgICAgICB0aGlzLmFiaV9wLnR0bCA9IHRoaXMuYWJpX3Aubm93ID0gdGhpcy5hYmlfcC5ic2M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhLmFiaV9tX2JzYyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWJpX20uYnNjLmRlY29kZShhLmFiaV9tX2JzYyk7XHJcbiAgICAgICAgICAgIC8vIOaaq+WumlxyXG4gICAgICAgICAgICB0aGlzLmFiaV9tLnR0bCA9IHRoaXMuYWJpX20ubm93ID0gdGhpcy5hYmlfbS5ic2M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfX2RlY29kZV92YWwoZDogSlNPTl9IZXJvX1ZhbHVlLCBzOiBKU09OX0hlcm9fVmFsdWUpOiB2b2lkIHtcclxuICAgICAgICBpZiAocy5za3AgIT09IHVuZGVmaW5lZCkgZC5za3AgPSB0aGlzLl9fZGVjb2RlX3NrZXgoZC5za3AsIHMuc2twKTtcclxuICAgICAgICBpZiAocy5leHAgIT09IHVuZGVmaW5lZCkgZC5leHAgPSB0aGlzLl9fZGVjb2RlX3NrZXgoZC5leHAsIHMuZXhwKTtcclxuICAgICAgICBpZiAocy5ueGUgIT09IHVuZGVmaW5lZCkgZC5ueGUgPSBzLm54ZTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2RlY29kZV9za2V4KGE6IHt0dGw/OiBudW1iZXIsIG5vdz86IG51bWJlcn0gfCB1bmRlZmluZWQsIHM6IHt0dGw/OiBudW1iZXIsIG5vdz86IG51bWJlcn0pOiB7dHRsOiBudW1iZXIsIG5vdzogbnVtYmVyfSB7XHJcbiAgICAgICAgdmFyIGQ6IHt0dGw6IG51bWJlciwgbm93OiBudW1iZXJ9O1xyXG4gICAgICAgIGlmICAgICAoYSA9PT0gdW5kZWZpbmVkKSBkID0ge3R0bDogMCwgbm93OiAwfTtcclxuICAgICAgICBlbHNlICAgIGQgPSB7dHRsOiBhPy50dGwgPz8gMCwgbm93OiBhPy5ub3cgPz8gMH07XHJcblxyXG4gICAgICAgIGQudHRsID0gcy50dGwgPz8gZC50dGw7XHJcbiAgICAgICAgZC5ub3cgPSBzLm5vdyA/PyBzLnR0bCA/PyBkLm5vdztcclxuICAgICAgICByZXR1cm4gZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZV9oZXJvKCk6IENfSGVybyB7XHJcbiAgICAgICAgY29uc3QgbmV3X2hlcm8gPSBuZXcgQ19IZXJvKCk7XHJcbiAgICAgICAgbmV3X2hlcm8uc2V0X3BycCh7aWQ6ICAgIE1hdGguZmxvb3IoLTEwMDAuMCAqIE1hdGgucmFuZG9tKCkpfSk7XHJcbiAgICAgICAgbmV3X2hlcm8uc2V0X3BycCh7bmFtZTogIG5ld19oZXJvLmlkKCl9KTtcclxuICAgICAgICByZXR1cm4gbmV3X2hlcm87XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJhbmRvbV9tYWtlKCk6IENfSGVybyB7XHJcbiAgICAgICAgdGhpcy5teV9pZCAgICA9IDA7IC8vIC0tSGVybzo6JG1heF9pZDtcclxuICAgICAgICB0aGlzLm15X25hbWUgID0gXCLlhpLpmbrogIUgXCIgKyBfcmFuZG9tX3N0cig1KTtcclxuICAgICAgICB0aGlzLnNleCAgICAgID0gX2lyYW5kKCAwLCAgICAgMSk7IFxyXG4gICAgICAgIHRoaXMuYWdlICAgICAgPSBfaXJhbmQoIDE1LCAgIDI1KTsgXHJcbiAgICAgICAgdGhpcy5zdGF0ZSAgICA9IDA7IFxyXG4gICAgICAgIHRoaXMubHYgICAgICAgPSAwOyBcclxuICAgICAgICB0aGlzLnZhbCAgICAgID0ge1xyXG4gICAgICAgICAgICBza3A6IHt0dGw6IDAsIG5vdzogMH0sIFxyXG4gICAgICAgICAgICBleHA6IHt0dGw6IDAsIG5vdzogMH0sXHJcbiAgICAgICAgICAgICdueGUnOiAxMDAwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5nb2xkLnJhbmRvbV9tYWtlKFRfR29vZHNLaW5kLkdvbGQpOyBcclxuXHJcbiAgICAgICAgY29uc3QgYWJpX3BfYnNjID0gdGhpcy5hYmlfcC5ic2M7XHJcbiAgICAgICAgYWJpX3BfYnNjLnJhbmRvbV9tYWtlKCk7XHJcbiAgICAgICAgYWJpX3BfYnNjLmFkZF94cF9ib251cygodGhpcy5hZ2UgLSAxNSkgKiAxMCk7XHJcbiAgICAgICAgYWJpX3BfYnNjLmFkZF9lbF9ib251cygodGhpcy5hZ2UgLSAxNSkgKiAgNSk7XHJcbiAgICAgICAgYWJpX3BfYnNjLmFkZF9wcl9ib251cygodGhpcy5hZ2UgLSAxNSkgKiAgMik7XHJcbiAgICAgICAgdGhpcy5hYmlfcC5ic2MgPSBhYmlfcF9ic2M7XHJcblxyXG4gICAgICAgIGNvbnN0IGFiaV9tX2JzYyA9IHRoaXMuYWJpX20uYnNjO1xyXG4gICAgICAgIGFiaV9tX2JzYy5yYW5kb21fbWFrZSgpO1xyXG4gICAgICAgIGFiaV9tX2JzYy5hZGRfeHBfYm9udXMoKHRoaXMuYWdlIC0gMTUpICogMTApO1xyXG4gICAgICAgIGFiaV9tX2JzYy5hZGRfZWxfYm9udXMoKHRoaXMuYWdlIC0gMTUpICogIDUpO1xyXG4gICAgICAgIGFiaV9tX2JzYy5hZGRfcHJfYm9udXMoKHRoaXMuYWdlIC0gMTUpICogIDIpO1xyXG4gICAgICAgIHRoaXMuYWJpX20uYnNjID0gYWJpX21fYnNjO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGVuY29kZV9oZXJvZXMoaGVyb2VzOiBDX0hlcm9bXSk6IEpTT05fSGVyb1tdIHtcclxuICAgICAgICBjb25zdCBoZXJvZXNfZGF0YSA9IFtdIGFzIEpTT05fSGVyb1tdO1xyXG4gICAgICAgIGZvciAodmFyIGhlcm8gb2YgaGVyb2VzKSB7XHJcbiAgICAgICAgICAgIGhlcm9lc19kYXRhLnB1c2goaGVyby5lbmNvZGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoZXJvZXNfZGF0YTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVjb2RlX2hlcm9lcyhoZXJvZXNfZGF0YTogKEpTT05fSGVyb3x1bmRlZmluZWQpW118dW5kZWZpbmVkKTogQ19IZXJvW10ge1xyXG4gICAgICAgIGNvbnN0IGhlcm9lcyA9IFtdIGFzIENfSGVyb1tdO1xyXG4gICAgICAgIGlmIChoZXJvZXNfZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGhlcm9fZGF0YSBvZiBoZXJvZXNfZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhlcm9fZGF0YSAhPT0gdW5kZWZpbmVkKSBoZXJvZXMucHVzaChuZXcgQ19IZXJvKCkuZGVjb2RlKGhlcm9fZGF0YSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoZXJvZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFsZXJ0KCk6IHZvaWQgeyBcclxuICAgICAgICBhbGVydChcIkhlcm8gSW5mbzpcXG5cIiBcclxuICAgICAgICAgICAgKyBcIlxcbmlkOiAgICAgICBcIiAgICAgKyAodGhpcy5pZCAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudW5pcV9pZCAgIFwiICAgICArICh0aGlzLnVuaXFfaWQgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5uYW1lOiAgICAgXCIgICAgICsgKHRoaXMubmFtZSAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNhdmVfaWQ6ICBcIiAgICAgKyAodGhpcy5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuaXNfYWxpdmU6IFwiICAgICArICh0aGlzLmlzX2FsaXZlICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGFsZXJ0X2hyZXMoYTogKENfSGVyb3x1bmRlZmluZWQpW118dW5kZWZpbmVkKTogdm9pZCB7IFxyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICBhbGVydCgnTnVtYmVyIG9mIEhlcm8gPSAnICsgYS5sZW5ndGgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBhKSBhW2ldPy5hbGVydCgpO1xyXG4gICAgfVxyXG59IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBJX0pTT04sIEpTT05fQW55IH0gZnJvbSBcIi4vQ19TYXZlRGF0YVwiO1xyXG5pbXBvcnQgeyBfcm91bmQgfSAgICAgICAgICAgZnJvbSBcIi4uL2RfdXRsL0ZfTWF0aFwiO1xyXG5pbXBvcnQgeyBfaW5yYW5kIH0gZnJvbSBcIi4uL2RfdXRsL0ZfUmFuZFwiO1xyXG5cclxuLy8g5LiA6Iis44Gr5L2/44GI44KL44Om44O844OG44Kj44Oq44OG44Kj44Gq5ZGq5paHXHJcbi8vIOOCquODluOCuOOCp+OCr+ODiOOCkuWIl+aMmeWei+OBqOOBl+OBpuWei+WMluOBmeOCi+OBruOBq+WIqeeUqFxyXG50eXBlIFRfSGVyb0FiaWxpdHkgPSB7W2tleTogc3RyaW5nXTogbnVtYmVyfTtcclxuZXhwb3J0IGludGVyZmFjZSBKU09OX0hlcm9fQWJpbGl0eSBleHRlbmRzIEpTT05fQW55IHtba2V5OiBzdHJpbmddOiBudW1iZXJ9XHJcblxyXG5leHBvcnQgY2xhc3MgQ19IZXJvQWJpbGl0eSBpbXBsZW1lbnRzIElfSlNPTiB7XHJcbiAgICBwcm90ZWN0ZWQgdjogVF9IZXJvQWJpbGl0eSA9IHtcclxuICAgICAgICB4cDogIDAsICAvLyBwOkhQ44CBbTpNUFxyXG5cclxuICAgICAgICAvLyDku6XkuIvjgIHmiKbpl5jog73lipvjga7ln7rmnKzlgKQocDrniannkIbjgIFtOumtlOazlSnjgILjg5Ljg7zjg63jg7zjg6zjg5njg6vjgoTjgrnjg4bjg7zjgr/jgrnjgqLjg4Pjg5fjgafliqDnrpcgXHJcbiAgICAgICAgYXRrOiAwLCAgLy8g5pS75pKD5YCkXHJcbiAgICAgICAgZGVmOiAwLCAgLy8g6Ziy5b6h5YCkXHJcbiAgICAgICAgcXVjOiAwLCAgLy8g556s55m65YqbXHJcbiAgICAgICAgY25jOiAwLCAgLy8g5qmf6YGL5YCkKOODgeODo+ODs+OCuSlcclxuICAgIFxyXG4gICAgICAgIC8vIOS7peS4i+OAgeOBhOOCj+OChuOCi+OCueODhuODvOOCv+OCueOAguS4iuiomOOBruioiOeul+OBq+W9semfv+OAguODkuODvOODreODvOODrOODmeODq+OChOOCueODhuODvOOCv+OCueOCouODg+ODl+OBp+WKoOeul1xyXG4gICAgICAgIHN0cjogMCwgIC8vIOagueaAp+OAguaUu+aSgy/pmLLlvqHlipvjgavjgoLlvbHpn7/jgIJIUC9NUOWbnuW+qeOChOOCouOCpOODhuODoOOBruacgOWkp+aJgOaMgemHjemHj+OBq+ODnOODvOODiuOCuVxyXG4gICAgICAgIHB3cjogMCwgIC8vIOWfuuacrOeahOW8t+OBleOAguaUu+aSg+WKm+OBq+W9semfv1xyXG4gICAgICAgIHZpdDogMCwgIC8vIOiAkOS5heWKm+OAgkhQL01Q44Gu5pyA5aSn5YCk44KE6Ziy5b6h5Yqb44Gr5b2x6Z+/44KS5LiO44GI44KLXHJcbiAgICAgICAgZGV4OiAwLCAgLy8g5Zmo55So44GV44CC5ZG95Lit546H44Gr5b2x6Z+/44KS5LiO44GI44KL44CC6aOb44Gz6YGT5YW344KE6ZW36Led6Zui6a2U5rOV44Gn44Gv54m544Gr5b2x6Z+/44CC572g6Kej6Zmk44Gr44KC5b2x6Z+/XHJcbiAgICAgICAgYWdpOiAwLCAgLy8g57Sg5pep44GV44CC6KGM5YuV6YCf5bqm44KE5Zue6YG/546H44Gr5b2x6Z+/44KS5LiO44GI44KL44CC5ZG95Lit546H44Gr44KC5b2x6Z+/XHJcbiAgICAgICAgdGVjOiAwLCAgLy8g5oqA6KGT5Yqb44CC57WM6aiT44Gn5ZCR5LiK44GX44Gm6IO95Yqb5YCkKHF1Yy9jbmMp44Gr44Oc44O844OK44K544KS5LiO44GI44KLXHJcbiAgICAgICAgbHVrOiAwLCAgLy8g5bm46YGL5YCk44CCY25j44Gr5aSn44GN44GP5b2x6Z+/44GZ44KLXHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihhPzogSlNPTl9IZXJvX0FiaWxpdHkpIHtcclxuICAgICAgICBmb3IgKGxldCBpZHggaW4gdGhpcy52KSB7dGhpcy52W2lkeF0gPSAwO31cclxuICAgICAgICBpZiAoYSAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShhKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcHJwKGE6IEpTT05fSGVyb19BYmlsaXR5KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kZWNvZGUoYSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAoIShrZXkgaW4gdGhpcy52KSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gdGhpcy52W2tleV07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCBzOiBKU09OX0hlcm9fQWJpbGl0eSk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKCEoa2V5IGluIHRoaXMudikpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy52W2tleV0gPSBzW2tleV07XHJcbiAgICAgICAgcmV0dXJuIHNba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgeHBfdHRsYWRkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIF9yb3VuZChNYXRoLmZsb29yKHRoaXMudi5zdHIgKyB0aGlzLnYudml0ICogMTAuMCksIDApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGF0a190dGxhZGQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gX3JvdW5kKE1hdGguZmxvb3IodGhpcy52LnN0ciArIHRoaXMudi5wd3IgKyB0aGlzLnYudGVjKSAvIDEwLjAsIDApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlZl90dGxhZGQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gX3JvdW5kKE1hdGguZmxvb3IodGhpcy52LnN0ciArIHRoaXMudi52aXQgKyB0aGlzLnYudGVjKSAvIDEwLjAsIDApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHF1Y190dGxhZGQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gX3JvdW5kKE1hdGguZmxvb3IodGhpcy52LmFnaSArIHRoaXMudi5sdWsgKyB0aGlzLnYudGVjKSAvIDEwLjAsIDApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNuY190dGxhZGQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gX3JvdW5kKE1hdGguZmxvb3IoMi4wICogdGhpcy52Lmx1ayArIHRoaXMudi50ZWMpIC8gMTAuMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJvbnVzKGtleSA6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKCEoa2V5IGluIHRoaXMudikpIHJldHVybiAwO1xyXG4gICAgICAgIGlmIChrZXkgPT09ICd4cCcpIHJldHVybiBfcm91bmQoTWF0aC5mbG9vcih0aGlzLnYueHAgLyAxMDApLCAwKTtcclxuICAgICAgICByZXR1cm4gX3JvdW5kKE1hdGguZmxvb3IodGhpcy52W2tleV0gLyAxMC4wKSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZChhOiBKU09OX0hlcm9fQWJpbGl0eSk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhKSB7XHJcbiAgICAgICAgICAgIHRoaXMudltrZXldICs9IGFba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG5cclxuICAgIHB1YmxpYyBhZGRfeHBfYm9udXMoYm9udXM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudi54cCAgKz0gIGJvbnVzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFkZF9lbF9ib251cyhib251czogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52LmF0ayArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LmRlZiArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LnF1YyArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LmNuYyArPSAgYm9udXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRkX3ByX2JvbnVzKGJvbnVzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnYuc3RyICs9ICBib251cztcclxuICAgICAgICB0aGlzLnYucHdyICs9ICBib251cztcclxuICAgICAgICB0aGlzLnYudml0ICs9ICBib251cztcclxuICAgICAgICB0aGlzLnYuZGV4ICs9ICBib251cztcclxuICAgICAgICB0aGlzLnYuYWdpICs9ICBib251cztcclxuICAgICAgICB0aGlzLnYudGVjICs9ICBib251cztcclxuICAgICAgICB0aGlzLnYubHVrICs9ICBib251cztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmFuZG9tX21ha2UoKTogQ19IZXJvQWJpbGl0eSB7XHJcbiAgICAgICAgdGhpcy52LnhwICA9ICBfaW5yYW5kKDAsIDEwMDAsIDMuMCk7XHJcblxyXG4gICAgICAgIHRoaXMudi5hdGsgPSAgX2lucmFuZCgwLCAgMTAwLCAyLjUpO1xyXG4gICAgICAgIHRoaXMudi5kZWYgPSAgX2lucmFuZCgwLCAgMTAwLCAyLjUpO1xyXG4gICAgICAgIHRoaXMudi5xdWMgPSAgX2lucmFuZCgwLCAgMTAwLCAyLjUpO1xyXG4gICAgICAgIHRoaXMudi5jbmMgPSAgX2lucmFuZCgwLCAgMTAwLCAyLjUpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy52LnN0ciA9ICBfaW5yYW5kKDAsICAgMjAsIDIuMCk7XHJcbiAgICAgICAgdGhpcy52LnB3ciA9ICBfaW5yYW5kKDAsICAgMjAsIDIuMCk7XHJcbiAgICAgICAgdGhpcy52LnZpdCA9ICBfaW5yYW5kKDAsICAgMjAsIDIuMCk7XHJcbiAgICAgICAgdGhpcy52LmRleCA9ICBfaW5yYW5kKDAsICAgMjAsIDIuMCk7XHJcbiAgICAgICAgdGhpcy52LmFnaSA9ICBfaW5yYW5kKDAsICAgMjAsIDIuMCk7XHJcbiAgICAgICAgdGhpcy52LnRlYyA9ICBfaW5yYW5kKDAsICAgMjAsIDIuMCk7XHJcbiAgICAgICAgdGhpcy52Lmx1ayA9ICBfaW5yYW5kKDAsICAgMjAsIDIuMCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9IZXJvX0FiaWxpdHkge1xyXG4gICAgICAgIGNvbnN0IGE6IEpTT05fSGVyb19BYmlsaXR5ID0ge307XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMudikgYVtrZXldID0gdGhpcy52W2tleV07XHJcbiAgICAgICAgcmV0dXJuIGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IEpTT05fSGVyb19BYmlsaXR5KTogQ19IZXJvQWJpbGl0eSB7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGEpIHtcclxuICAgICAgICAgICAgaWYgKGtleSBpbiB0aGlzLnYgJiYgYVtrZXldICE9PSB1bmRlZmluZWQpIHRoaXMudltrZXldID0gYVtrZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNsb25lKHM6IENfSGVyb0FiaWxpdHkpOiBDX0hlcm9BYmlsaXR5IHtcclxuICAgICAgICByZXR1cm4gbmV3IENfSGVyb0FiaWxpdHkocy5lbmNvZGUoKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfUG9pbnQgfSAgICAgICAgICAgICAgICAgICBmcm9tICcuL0NfUG9pbnQnO1xyXG5pbXBvcnQgeyBDX1BvaW50RGlyLCBKU09OX1BvaW50RGlyIH0gZnJvbSAnLi9DX1BvaW50RGlyJztcclxuaW1wb3J0IHsgVF9EaXJlY3Rpb24gfSAgICAgICAgICAgICAgIGZyb20gJy4vQ19Qb2ludERpcic7XHJcbmltcG9ydCB7IElfSlNPTiwgSlNPTl9BbnkgfSAgICAgICAgICBmcm9tICcuL0NfU2F2ZURhdGEnO1xyXG5pbXBvcnQgeyBUX01ha2VFbnVtVHlwZSB9ICAgICAgICAgICAgZnJvbSBcIi4uL2RfdXRsL1RfTWFrZUVudW1UeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVF9MY2tkOntbbGNrZDogc3RyaW5nXTogbnVtYmVyfSAgPSB7XHJcbiAgICBVbmtuOiAwLFxyXG4gICAgTWF6ZTogMSxcclxuICAgIEd1bGQ6IDIsXHJcbn0gYXMgY29uc3Q7XHJcbmV4cG9ydCB0eXBlIFRfTGNrZCAgID0gVF9NYWtlRW51bVR5cGU8dHlwZW9mIFRfTGNrZD47XHJcblxyXG5mdW5jdGlvbiBfbGNrZF9rZXkobGNrZDogVF9MY2tkKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhUX0xja2QpLmZpbmQoa2V5ID0+IFRfTGNrZFtrZXldID09PSBsY2tkKSA/PyBcIj8/Pz9cIjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX0xvY2F0aW9uIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAga2luZD86ICAgIHN0cmluZyxcclxuICAgIG5hbWU/OiAgICBzdHJpbmcsXHJcbiAgICBsb2NfdWlkPzogc3RyaW5nLFxyXG4gICAgbG9jX3Bvcz86IEpTT05fUG9pbnREaXIsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSV9Mb2NhdGUge1xyXG4gICAgdWlkOiAgICAgICgpPT5zdHJpbmc7XHJcbiAgICBnZXRfbGNrZDogKCk9PlRfTGNrZDtcclxuICAgIGdldF9uYW1lOiAoKT0+c3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19Mb2NhdGlvbiBpbXBsZW1lbnRzIElfSlNPTiB7XHJcbiAgICBwcm90ZWN0ZWQgbG9jX2tpbmQ6IFRfTGNrZCA9IFRfTGNrZC5VbmtuO1xyXG4gICAgcHJvdGVjdGVkIGxvY19uYW1lOiBzdHJpbmcgPSAnJztcclxuICAgIHByb3RlY3RlZCBsb2NfdWlkOiAgc3RyaW5nID0gJyc7XHJcbiAgICBwcm90ZWN0ZWQgbG9jX3BvczogIENfUG9pbnREaXIgPSBuZXcgQ19Qb2ludERpcigpO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihqc29uPzogSlNPTl9Mb2NhdGlvbikge1xyXG4gICAgICAgIGlmIChqc29uICE9PSB1bmRlZmluZWQpIHRoaXMuZGVjb2RlKGpzb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRfbGNrZF9zdHIoKTogc3RyaW5nICB7cmV0dXJuIF9sY2tkX2tleSh0aGlzLmxvY19raW5kKTt9XHJcbiAgICBwdWJsaWMgZ2V0X2xja2QoKTogVF9MY2tkICAgICAge3JldHVybiB0aGlzLmxvY19raW5kO31cclxuICAgIHB1YmxpYyBnZXRfbmFtZSgpOiBzdHJpbmcgICAgICB7cmV0dXJuIHRoaXMubG9jX25hbWU7fVxyXG4gICAgcHVibGljIGdldF91aWQoKTogIHN0cmluZyAgICAgIHtyZXR1cm4gdGhpcy5sb2NfdWlkO31cclxuXHJcbiAgICBwdWJsaWMgc2V0X2xja2QobGNrZDogVF9MY2tkKTogQ19Mb2NhdGlvbnx1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICghKF9sY2tkX2tleShsY2tkKSBpbiBUX0xja2QpKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMubG9jX2tpbmQgPSBsY2tkO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9uYW1lKG5hbWU6IHN0cmluZyk6ICAgdm9pZCB7dGhpcy5sb2NfbmFtZSA9IG5hbWU7fVxyXG4gICAgcHVibGljIHNldF91aWQgKHVpZDogc3RyaW5nKTogICAgdm9pZCB7dGhpcy5sb2NfdWlkICA9IHVpZDt9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzZXRfbGNrZF9zdHIobGNrZDogc3RyaW5nKTogQ19Mb2NhdGlvbnx1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICghKGxja2QgaW4gVF9MY2tkKSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmxvY19raW5kID0gVF9MY2tkW2xja2RdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0X3AoKTogQ19Qb2ludCAgICAge1xyXG4vLyAgICAgICAgaWYgKHRoaXMubG9jX2tpbmQgIT0gVF9MY2tkLk1hemUpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jX3Bvcy5nZXRfcCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9kKCk6IFRfRGlyZWN0aW9uIHtcclxuLy8gICAgICAgIGlmICh0aGlzLmxvY19raW5kICE9IFRfTGNrZC5NYXplKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY19wb3MuZ2V0X2QoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfcGQoKTogQ19Qb2ludERpciB7XHJcbi8vICAgICAgICBpZiAodGhpcy5sb2Nfa2luZCAhPSBUX0xja2QuTWF6ZSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NfcG9zLmdldF9wZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRfcCAgIChwOiBDX1BvaW50RGlyKTogQ19Qb2ludERpcnx1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY19raW5kICE9PSBUX0xja2QuTWF6ZSkgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICh0aGlzLmxvY19wb3Muc2V0X3AocCkgPT09IHVuZGVmaW5lZCkgIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY19wb3M7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X2QgICAoZDogVF9EaXJlY3Rpb24pOiBUX0RpcmVjdGlvbnx1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY19raW5kICE9PSBUX0xja2QuTWF6ZSkgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICh0aGlzLmxvY19wb3Muc2V0X2QoZCkgPT09IHVuZGVmaW5lZCkgIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY19wb3MuZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcGQgIChwZDogQ19Qb2ludERpcik6IENfUG9pbnREaXJ8dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAodGhpcy5sb2Nfa2luZCAhPT0gVF9MY2tkLk1hemUpICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jX3Bvcy5zZXRfcGQocGQpID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY19wb3M7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9Mb2NhdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAga2luZDogICAgIF9sY2tkX2tleSh0aGlzLmxvY19raW5kKSxcclxuICAgICAgICAgICAgbmFtZTogICAgIHRoaXMubG9jX25hbWUsXHJcbiAgICAgICAgICAgIGxvY191aWQ6ICB0aGlzLmxvY191aWQsXHJcbiAgICAgICAgICAgIGxvY19wb3M6ICB0aGlzLmxvY19wb3MuZW5jb2RlKCksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoaj86IEpTT05fTG9jYXRpb24pOiBDX0xvY2F0aW9uIHtcclxuICAgICAgICBpZiAoaiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAoai5raW5kID09PSB1bmRlZmluZWQgfHwgIShqLmtpbmQgaW4gVF9MY2tkKSkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChqLmtpbmQgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5sb2Nfa2luZCA9IFRfTGNrZFtqLmtpbmRdO1xyXG4gICAgICAgIGlmIChqLm5hbWUgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5sb2NfbmFtZSA9IGoubmFtZTtcclxuICAgICAgICBpZiAoai5sb2NfdWlkICE9PSB1bmRlZmluZWQpIHRoaXMubG9jX3VpZCAgPSBqLmxvY191aWQ7XHJcbiAgICAgICAgaWYgKGoubG9jX3BvcyAhPT0gdW5kZWZpbmVkKSB0aGlzLmxvY19wb3MuZGVjb2RlKGoubG9jX3Bvcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgVF9NektpbmQgfSAgICAgICAgICAgICAgZnJvbSBcIi4vVF9NektpbmRcIjtcclxuaW1wb3J0IHsgQ19NYXplQ2VsbCB9ICAgICAgICAgICAgZnJvbSBcIi4vQ19NYXplQ2VsbFwiO1xyXG5pbXBvcnQgeyBDX01hemVPYmosIElfTWF6ZU9iaiwgSlNPTl9NYXplT2JqIH0gZnJvbSBcIi4vQ19NYXplT2JqXCI7XHJcbmltcG9ydCB7IENfUG9pbnQgfSAgICAgICAgICAgICAgIGZyb20gXCIuL0NfUG9pbnRcIjtcclxuaW1wb3J0IHsgSV9Mb2NhdGUsIFRfTGNrZCB9ICAgICAgZnJvbSBcIi4vQ19Mb2NhdGlvblwiO1xyXG5pbXBvcnQgeyBDX1JhbmdlIH0gICAgICAgICAgICAgICBmcm9tIFwiLi9DX1JhbmdlXCI7XHJcbmltcG9ydCB7IENfVGVhbSwgSlNPTl9UZWFtIH0gICAgIGZyb20gXCIuL0NfVGVhbVwiO1xyXG5pbXBvcnQgeyBJX0pTT05fVW5pcSwgSlNPTl9BbnkgfSBmcm9tIFwiLi9DX1NhdmVEYXRhXCI7XHJcbmltcG9ydCB7IF9nZXRfdXVpZCB9ICAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuaW1wb3J0IHsgX21pbiB9IGZyb20gXCIuLi9kX3V0bC9GX01hdGhcIjtcclxuaW1wb3J0IHsgQ19Qb2ludERpciB9IGZyb20gXCIuL0NfUG9pbnREaXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9NYXplIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgaWQ/OiAgICAgIG51bWJlcixcclxuICAgIHVuaXFfaWQ/OiBzdHJpbmcsXHJcbiAgICBzYXZlX2lkPzogbnVtYmVyLFxyXG4gICAgZmxvb3I/OiAgIG51bWJlcixcclxuICAgIG5hbWU/OiAgICBzdHJpbmcsXHJcbiAgICBzaXplX3g/OiAgbnVtYmVyLFxyXG4gICAgc2l6ZV95PzogIG51bWJlcixcclxuICAgIHNpemVfej86ICBudW1iZXIsXHJcbiAgICBtYXplPzogICAgc3RyaW5nLCBcclxuICAgIG1hc2s/OiAgICBzdHJpbmcsIFxyXG4gICAgbXl0ZWFtPzogIEpTT05fVGVhbSwgXHJcbiAgICBvYmpzPzogICAgSlNPTl9NYXplT2JqW10sXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfbWF6ZV9pbmZvKGE6IEpTT05fTWF6ZXx1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICBhbGVydChcIk1hemUgSW5mbzpcIlxyXG4gICAgICAgICsgXCJcXG5tYXplIGlkIDpcIiArIChhLmlkICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5mbG9vcjogXCIgICArIChhLmZsb29yICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG51bmlxIGlkIDpcIiArIChhLnVuaXFfaWQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zYXZlIGlkIDpcIiArIChhLnNhdmVfaWQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5uYW1lOiAgIFwiICArIChhLm5hbWUgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3g6IFwiICArIChhLnNpemVfeCAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3k6IFwiICArIChhLnNpemVfeSAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3o6IFwiICArIChhLnNpemVfeiAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJtYXplOlxcblwiICAgICArIChhLm1hemUgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJtYXNrOlxcblwiICAgICArIChhLm1hc2sgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbnR5cGUgX2luaXRfYXJnID0ge1xyXG4gICAgbWF6ZV9pZD86IG51bWJlcixcclxuICAgIHNhdmVfaWQ/OiBudW1iZXIsXHJcbiAgICBmbG9vcj86ICAgbnVtYmVyLFxyXG4gICAgbmFtZT86ICAgIHN0cmluZyxcclxuICAgIHNpemVfeD86ICBudW1iZXIsXHJcbiAgICBzaXplX3k/OiAgbnVtYmVyLFxyXG4gICAgc2l6ZV96PzogIG51bWJlcixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfTWF6ZSBpbXBsZW1lbnRzIElfTG9jYXRlLCBJX0pTT05fVW5pcSB7XHJcbiAgICBwcm90ZWN0ZWQgbWF6ZV9pZDogIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCB1bmlxX2lkOiAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHNhdmVfaWQ6ICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgZmxvb3I6ICAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBuYW1lOiAgICAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIG15X2xheWVyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJvdGVjdGVkIHNpemU6ICAgICBDX1JhbmdlO1xyXG4gICAgcHJvdGVjdGVkIGNlbGxzOiAgICBDX01hemVDZWxsW11bXVtdO1xyXG4gICAgcHJvdGVjdGVkIG1hc2tzOiAgICBib29sZWFuW11bXVtdO1xyXG4gICAgcHJvdGVjdGVkIHVuY2xlYXI6ICBudW1iZXJbXTtcclxuICAgIHByb3RlY3RlZCBvYmpzOiAgICAge1t1aWQ6IHN0cmluZ106IElfTWF6ZU9ian07XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGE/OiBfaW5pdF9hcmcpIHtcclxuICAgICAgICB0aGlzLm1hemVfaWQgPSAtMTtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgPSAtMTtcclxuICAgICAgICB0aGlzLnVuaXFfaWQgPSAnbWFpX21hemUjJyArIF9nZXRfdXVpZCgpO1xyXG4gICAgICAgIHRoaXMuZmxvb3IgICA9IDA7XHJcbiAgICAgICAgdGhpcy5uYW1lICAgID0gJyc7XHJcbiAgICAgICAgdGhpcy5zaXplICAgID0gbmV3IENfUmFuZ2UoXHJcbiAgICAgICAgICAgIG5ldyBDX1BvaW50KDAsIDAsIDApLCBcclxuICAgICAgICAgICAgbmV3IENfUG9pbnQoMiwgMiwgMikpO1xyXG4gICAgICAgIHRoaXMuY2VsbHMgICA9IHRoaXMuX19pbml0X21hemUoVF9NektpbmQuU3RvbmUpO1xyXG5cclxuICAgICAgICB0aGlzLm1hc2tzICAgPSB0aGlzLl9faW5pdF9tYXNrKHRydWUpO1xyXG4gICAgICAgIHRoaXMudW5jbGVhciA9IFtdO1xyXG4gICAgICAgIHRoaXMuX19pbml0X3VuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5vYmpzICAgID0ge307XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9faW5pdF9tYXplKGtpbmQ6IFRfTXpLaW5kID0gVF9NektpbmQuU3RvbmUpOiBDX01hemVDZWxsW11bXVtdIHtcclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeiA9IHRoaXMuc2l6ZS5zaXplX3ooKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2VsbHM6IENfTWF6ZUNlbGxbXVtdW10gPSBBcnJheShzaXplX3opIGFzIENfTWF6ZUNlbGxbXVtdW107XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBzaXplX3o7IHorKykge1xyXG4gICAgICAgICAgICBjZWxsc1t6XSA9IEFycmF5KHNpemVfeSkgYXMgQ19NYXplQ2VsbFtdW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGNlbGxzW3pdW3ldICA9IEFycmF5KHNpemVfeCkgYXMgQ19NYXplQ2VsbFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxzW3pdW3ldW3hdID0gQ19NYXplQ2VsbC5uZXdPYmooe2tpbmQ6a2luZCwgcG9zOiB7eDp4LCB5OnksIHo6en19KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2VsbHM7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX19pbml0X21hc2soWU46IGJvb2xlYW4pOiBib29sZWFuW11bXVtdIHtcclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeiA9IHRoaXMuc2l6ZS5zaXplX3ooKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXNrcyAgID0gQXJyYXkoc2l6ZV96KSBhcyBib29sZWFuW11bXVtdO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgdGhpcy5tYXNrc1t6XSA9IEFycmF5KHNpemVfeSkgYXMgYm9vbGVhbltdW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFza3Nbel1beV0gID0gQXJyYXkoc2l6ZV94KSBhcyBib29sZWFuW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrc1t6XVt5XVt4XSA9IFlOO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLm1hc2tzO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9faW5pdF91bmNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgICAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV96ID0gdGhpcy5zaXplLnNpemVfeigpO1xyXG5cclxuICAgICAgICB0aGlzLnVuY2xlYXIgPSBBcnJheShzaXplX3opO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgdGhpcy51bmNsZWFyW3pdPTA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXNrc1t6XVt5XVt4XSkgdGhpcy51bmNsZWFyW3pdKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHVpZCgpOiBzdHJpbmcgICAgICB7cmV0dXJuIHRoaXMudW5pcV9pZH1cclxuICAgIHB1YmxpYyBnZXRfbGNrZCgpOiBUX0xja2Qge3JldHVybiBUX0xja2QuTWF6ZX1cclxuICAgIHB1YmxpYyBnZXRfbmFtZSgpOiBzdHJpbmcge3JldHVybiB0aGlzLm5hbWV9XHJcblxyXG4gICAgcHVibGljIHdpdGhpbihwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZS53aXRoaW4ocCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIOODoeOCpOOCuuWGheOBruOCquODluOCuOOCp+OCr+ODiOOChOODouODs+OCueOCv+ODvOetieOBrumFjee9rlxyXG4gICAgcHVibGljIGFkZF9vYmoob2JqOiBJX01hemVPYmopOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9ianNbb2JqLnVpZCgpXSA9IG9iajtcclxuICAgIH1cclxuICAgIHB1YmxpYyBybXZfb2JqKG9iajogSV9NYXplT2JqKTogdm9pZCB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMub2Jqc1tvYmoudWlkKCldO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9vYmpfeHl6KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpOiBJX01hemVPYmp8bnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0X29iaihuZXcgQ19Qb2ludCh4LCB5LCB6KSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X29iaihwOiBDX1BvaW50KTogSV9NYXplT2JqfG51bGwge1xyXG4gICAgICAgIHZhciBsYXllciA9IC0xO1xyXG4gICAgICAgIHZhciBvYmo6IElfTWF6ZU9ianxudWxsICAgPSBudWxsO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGlkIGluIHRoaXMub2Jqcykge1xyXG4gICAgICAgICAgICBjb25zdCBleGlzdCA9IHRoaXMub2Jqc1tpZF07XHJcblxyXG4gICAgICAgICAgICBpZiAoZXhpc3QudmlldygpID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoZXhpc3Qud2l0aGluKHApICYmIGV4aXN0LnZpZXcoKT8ubGV0dGVyKCkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChleGlzdC52aWV3KCk/LmxheWVyKCk/Py05OSA+IGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXIgPSBleGlzdC52aWV3KCk/LmxheWVyKCk/Py05OTtcclxuICAgICAgICAgICAgICAgICAgICBvYmogICA9IGV4aXN0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGV4aXN0X29iaihwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpZCBpbiB0aGlzLm9ianMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3QgPSB0aGlzLm9ianNbaWRdO1xyXG4gICAgICAgICAgICBpZiAoZXhpc3Qud2l0aGluKHApICYmIGV4aXN0LnZpZXcoKT8ubGV0dGVyKCkgIT09IG51bGwpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGVhbeOBjOadpeOBn+ODneOCpOODs+ODiOOBjOacqui4j+WcsOOBoOOBo+OBn+OCieOBn+OBoOOBruW6iuOBq+WkieOBiOOCi1xyXG4gICAgcHVibGljIGNoYW5nZV91bmV4cF90b19mbG9vcihwOiBDX1BvaW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0X2tpbmQocCkgPT0gVF9NektpbmQuVW5leHApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRfY2VsbChwLCBUX016S2luZC5GbG9vcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIDJE44Oe44OD44OX44Gu44Oe44K544Kv5aSW44GX6Zai6YCjXHJcbiAgICBwdWJsaWMgY2xlYXJfbWFza19hcm91bmRfdGhlX3RlYW0odGVhbTogQ19UZWFtKTogdm9pZCB7XHJcbiAgICAgICAgLy8g54++5Zyo5Zyw44Go55yf5qiq44Gv6Ieq5YuV55qE44Gr6KaL44GI44KLXHJcbiAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZCgwLCAtMSkpO1xyXG4gICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoMCwgIDApKTtcclxuICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayh0ZWFtLndhbGsoKS5nZXRfYXJvdW5kKDAsICAxKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlcHRoICAgPSAgNTsgLy8gMkTjg57jg4Pjg5fnlKjjga7lpaXooYzjgY3pmZDnlYxcclxuXHJcbiAgICAgICAgLy8g5YmN5pa544Gu6KaL6YCa44GX44KS44OB44Kn44OD44Kv44GX44Gq44GM44KJ6KaL44GI44KL44Go44GT44KN44Gv6Kej5pS+44GZ44KLXHJcbiAgICAgICAgZm9yICh2YXIgZCA9IDE7IGQgPCBkZXB0aDsgZCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyb250X3BvcyA9IHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgMClcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNfbW92YWJsZShmcm9udF9wb3MpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmraPpnaLjgavpmpzlrrPnianjgYznhKHjgZHjgozjgbDjgIHjgZ3jga7kuKHlgbTjgoLopovjgYjjgotcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgLTEpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgIDApKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgIDEpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOato+mdouOBjOmanOWus+eJqeOBp+OCguOBneOBruaJi+WJjeOBvuOBp+imi+OBiOOBpuOBn+OBquOCieOAgeOBneOBruWjgeOBqOS4oeWBtOOBr+imi+OBiOOCi1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAtMSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAgMCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAgMSkpO1xyXG4gICAgICAgICAgICAgICAgLy8g5q2j6Z2i44Gr6Zqc5a6z54mp44GM5pyJ44Gj44Gf44KJ44Gd44Gu5aWl44Gv6KaL44GI44Gq44GE44Gu44Gn5o6i57Si57WC5LqGXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2NsZWFyX21hc2soY2xyX3BvczogQ19Qb2ludCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5zaXplLndpdGhpbihjbHJfcG9zKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tYXNrc1tjbHJfcG9zLnpdW2Nscl9wb3MueV1bY2xyX3Bvcy54XSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hc2tzW2Nscl9wb3Muel1bY2xyX3Bvcy55XVtjbHJfcG9zLnhdID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudW5jbGVhcltjbHJfcG9zLnpdLS07ICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc19jbGVhcmVkKGNscl9wb3M6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51bmNsZWFyW2Nscl9wb3Muel0gPCAxO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc19tYXNrZWQocDogQ19Qb2ludCk6IGJvb2xlYW4ge3JldHVybiB0aGlzLmlzX21hc2tlZF94eXoocC54LCBwLnksIHAueil9XHJcbiAgICBwdWJsaWMgaXNfbWFza2VkX3h5eih4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFza3Nbel1beV1beF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzX21vdmFibGUocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghdGhpcy5zaXplLndpdGhpbihwKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5nZXRfa2luZChwKSkge1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLkZsb29yOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlVuZXhwOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVwOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0ckRuOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVEOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gICAgXHJcblxyXG4gICAgcHVibGljIGdldF94X21heCgpOiBudW1iZXIge3JldHVybiB0aGlzLnNpemUuc2l6ZV94KCk7fVxyXG4gICAgcHVibGljIGdldF95X21heCgpOiBudW1iZXIge3JldHVybiB0aGlzLnNpemUuc2l6ZV95KCk7fVxyXG4gICAgcHVibGljIGdldF96X21heCgpOiBudW1iZXIge3JldHVybiB0aGlzLnNpemUuc2l6ZV96KCk7fVxyXG4gICAgcHVibGljIGdldF9raW5kIChwOiBDX1BvaW50KTogVF9NektpbmQge1xyXG4gICAgICAgIGlmICh0aGlzLnNpemUud2l0aGluKHApKSByZXR1cm4gdGhpcy5jZWxsc1twLnpdW3AueV1bcC54XS5nZXRLaW5kKCk7XHJcbiAgICAgICAgcmV0dXJuIFRfTXpLaW5kLk5vRGVmO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9raW5kX3h5eiAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcik6IFRfTXpLaW5kIHtcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbih4LCB5LCB6KSkgcmV0dXJuIHRoaXMuY2VsbHNbel1beV1beF0uZ2V0S2luZCgpO1xyXG4gICAgICAgIHJldHVybiBUX016S2luZC5Ob0RlZjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X2NlbGxfeHl6ICh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKTogQ19NYXplQ2VsbHx1bmRlZmluZWQgeyBcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbih4LCB5LCB6KSkgcmV0dXJuIHRoaXMuY2VsbHNbel1beV1beF07XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfY2VsbCAocDogQ19Qb2ludCk6IENfTWF6ZUNlbGx8dW5kZWZpbmVkIHsgXHJcbiAgICAgICAgaWYgKHRoaXMuc2l6ZS53aXRoaW4ocCkpIHJldHVybiB0aGlzLmNlbGxzW3Auel1bcC55XVtwLnhdO1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X2NlbGwocDogQ19Qb2ludCwgazogVF9NektpbmQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbihwKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNlbGxzW3Auel1bcC55XVtwLnhdID0gQ19NYXplQ2VsbC5uZXdPYmooe2tpbmQ6IGssIHBvczogcH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBjYW5fbW92ZShwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZS53aXRoaW4ocCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2FuX1VEKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc19tb3ZhYmxlKHApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHRvX2xldHRlcihwOiBDX1BvaW50KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jZWxsc1twLnpdW3AueV1bcC54XS50b19sZXR0ZXIoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB0b19zdHJpbmcoZmxvb3I6IG51bWJlciA9IDAsIGRlYnVnX21vZGU6IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKTtcclxuXHJcbiAgICAgICAgdmFyIHJldF9zdHI6IHN0cmluZyA9ICcnO1xyXG4gICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqID0gdGhpcy5nZXRfb2JqX3h5eih4LCB5LCBmbG9vcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRlYnVnX21vZGUgJiYgdGhpcy5tYXNrc1tmbG9vcl1beV1beF0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXRfc3RyICs9ICfvvLgnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmpfYyA9IG9iaj8udmlldygpPy5sZXR0ZXIoKSA/PyBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmogPT09IG51bGwgfHwgb2JqX2MgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0X3N0ciArPSB0aGlzLmNlbGxzW2Zsb29yXVt5XVt4XS50b19sZXR0ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRfc3RyICs9IG9ial9jO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXRfc3RyICs9IFwiXFxuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXRfc3RyO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX01hemUge1xyXG4gICAgICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgICAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV96ID0gdGhpcy5zaXplLnNpemVfeigpO1xyXG5cclxuICAgICAgICB2YXIgel9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHNpemVfejsgeisrKSB7XHJcbiAgICAgICAgICAgIHZhciB5X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeF9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICB4X2FycmF5LnB1c2godGhpcy5jZWxsc1t6XVt5XVt4XS5lbmNvZGUoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB5X2FycmF5LnB1c2goeF9hcnJheS5qb2luKCdYJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHpfYXJyYXkucHVzaCh5X2FycmF5LmpvaW4oJ1knKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1hemVfc3RyID0gel9hcnJheS5qb2luKCdaJyk7XHJcblxyXG4gICAgICAgIHZhciB6X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgdmFyIHlfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIHZhciB4X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHhfYXJyYXkucHVzaCh0aGlzLm1hc2tzW3pdW3ldW3hdID8gJzEnIDogJzAnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHlfYXJyYXkucHVzaCh4X2FycmF5LmpvaW4oJ1gnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgel9hcnJheS5wdXNoKHlfYXJyYXkuam9pbignWScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWFza19zdHIgPSB6X2FycmF5LmpvaW4oJ1onKTtcclxuXHJcbiAgICAgICAgbGV0IG9ianMgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHRoaXMub2Jqcykgb2Jqcy5wdXNoKHRoaXMub2Jqc1tpaV0uZW5jb2RlKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogICAgICB0aGlzLm1hemVfaWQsXHJcbiAgICAgICAgICAgIHVuaXFfaWQ6IHRoaXMudW5pcV9pZCxcclxuICAgICAgICAgICAgc2F2ZV9pZDogdGhpcy5zYXZlX2lkLFxyXG4gICAgICAgICAgICBmbG9vcjogICB0aGlzLmZsb29yLFxyXG4gICAgICAgICAgICBuYW1lOiAgICB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIG9ianM6ICAgIG9ianMsXHJcbiAgICAgICAgICAgIHNpemVfeDogIHRoaXMuc2l6ZS5zaXplX3goKSxcclxuICAgICAgICAgICAgc2l6ZV95OiAgdGhpcy5zaXplLnNpemVfeSgpLFxyXG4gICAgICAgICAgICBzaXplX3o6ICB0aGlzLnNpemUuc2l6ZV96KCksXHJcbiAgICAgICAgICAgIG1hemU6ICAgIG1hemVfc3RyLFxyXG4gICAgICAgICAgICBtYXNrOiAgICBtYXNrX3N0cixcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IEpTT05fTWF6ZXx1bmRlZmluZWQpOiBDX01hemUge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoYS5pZCAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubWF6ZV9pZCA9IGEuaWQ7XHJcbiAgICAgICAgaWYgKGEudW5pcV9pZCAhPT0gdW5kZWZpbmVkKSB0aGlzLnVuaXFfaWQgPSBhLnVuaXFfaWQ7XHJcbiAgICAgICAgaWYgKGEuc2F2ZV9pZCAhPT0gdW5kZWZpbmVkKSB0aGlzLnNhdmVfaWQgPSBhLnNhdmVfaWQ7XHJcbiAgICAgICAgaWYgKGEuZmxvb3IgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmZsb29yICAgPSBhLmZsb29yO1xyXG4gICAgICAgIGlmIChhLm5hbWUgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5uYW1lICAgID0gYS5uYW1lO1xyXG5cclxuICAgICAgICBpZiAoYS5vYmpzICAgICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5vYmpzID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl9vYmogb2YgYS5vYmpzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdfb2JqID0gQ19NYXplT2JqLm5ld09iaihqc29uX29iaik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ianNbbmV3X29iai51aWQoKV0gPSBuZXdfb2JqO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYS5zaXplX3ggIT09IHVuZGVmaW5lZCAmJiBhLnNpemVfeSAhPT0gdW5kZWZpbmVkICYmIGEuc2l6ZV96ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaXplICA9IG5ldyBDX1JhbmdlKFxyXG4gICAgICAgICAgICAgICAgbmV3IENfUG9pbnQoMCwgMCwgMCksIFxyXG4gICAgICAgICAgICAgICAgbmV3IENfUG9pbnQoYS5zaXplX3ggLSAxLCBhLnNpemVfeSAtIDEsIGEuc2l6ZV96IC0gMSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuY2VsbHMgICA9IHRoaXMuX19pbml0X21hemUoVF9NektpbmQuU3RvbmUpO1xyXG4gICAgICAgICAgICB0aGlzLm1hc2tzICAgPSB0aGlzLl9faW5pdF9tYXNrKHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9faW5pdF91bmNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeiA9IHRoaXMuc2l6ZS5zaXplX3ooKTtcclxuXHJcblxyXG4gICAgICAgIGlmIChhLm1hemUgIT09IHVuZGVmaW5lZCkge1xyXG4vKlxyXG4gICAgICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHNpemVfejsgeisrKVxyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKVxyXG4gICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxzW3pdW3ldW3hdLnNldChUX016S2luZC5TdG9uZSk7XHJcbiAgICAgICAgICAgIH1cclxuKi9cclxuICAgICAgICAgICAgY29uc3Qgel9hcnJheTogc3RyaW5nW10gPSBhLm1hemUuc3BsaXQoJ1onKTtcclxuICAgICAgICAgICAgY29uc3Qgel9tYXggPSBfbWluKFtzaXplX3osIHpfYXJyYXkubGVuZ3RoXSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgel9tYXg7IHorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeV9hcnJheTogc3RyaW5nW10gPSB6X2FycmF5W3pdLnNwbGl0KCdZJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5X21heCA9ICBfbWluKFtzaXplX3ksIHlfYXJyYXkubGVuZ3RoXSk7IFxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB5X21heDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeF9hcnJheTogc3RyaW5nW10gPSB5X2FycmF5W3ldLnNwbGl0KCdYJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeF9tYXggPSAgX21pbihbc2l6ZV94LCB4X2FycmF5Lmxlbmd0aF0pOyBcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHhfbWF4OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtpbmQgPSBwYXJzZUludCh4X2FycmF5W3hdLCAxNik7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbGxzW3pdW3ldW3hdID0gQ19NYXplQ2VsbC5uZXdPYmooe2tpbmQ6IGtpbmQsIHBvczoge3g6eCwgeTp5LCB6Onp9fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEubWFzayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19pbml0X21hc2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHpfYXJyYXk6IHN0cmluZ1tdID0gYS5tYXNrLnNwbGl0KCdaJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHpfbWF4ID0gX21pbihbc2l6ZV96LCB6X2FycmF5Lmxlbmd0aF0pO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHpfbWF4OyB6KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHlfYXJyYXk6IHN0cmluZ1tdID0gel9hcnJheVt6XS5zcGxpdCgnWScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeV9tYXggPSAgX21pbihbc2l6ZV95LCB5X2FycmF5Lmxlbmd0aF0pOyBcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgeV9tYXg7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhfYXJyYXk6IHN0cmluZ1tdID0geV9hcnJheVt5XS5zcGxpdCgnWCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhfbWF4ID0gIF9taW4oW3NpemVfeCwgeF9hcnJheS5sZW5ndGhdKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB4X21heDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4X2FycmF5W3hdICE9PSAnMCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFza3Nbel1beV1beF0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrc1t6XVt5XVt4XSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX19pbml0X3VuY2xlYXIoKTsgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGVuY29kZV9hbGwoYWxsX21hemU6IENfTWF6ZVtdKTogSlNPTl9NYXplW10ge1xyXG4gICAgICAgIGNvbnN0IGFsbF9tYXplX2RhdGE6IEpTT05fTWF6ZVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgbWF6ZSBvZiBhbGxfbWF6ZSkge1xyXG4gICAgICAgICAgICBhbGxfbWF6ZV9kYXRhLnB1c2gobWF6ZS5lbmNvZGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxfbWF6ZV9kYXRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBkZWNvZGVfYWxsKGFsbF9tYXplX2RhdGE6IEpTT05fTWF6ZVtdKTogQ19NYXplW10ge1xyXG4gICAgICAgIGNvbnN0IGFsbF9tYXplOiBDX01hemVbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IG1hemVfZGF0YSBvZiBhbGxfbWF6ZV9kYXRhKSB7XHJcbiAgICAgICAgICAgIGFsbF9tYXplLnB1c2goKG5ldyBDX01hemUoe30pKS5kZWNvZGUobWF6ZV9kYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxfbWF6ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGFsZXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiTWF6ZSBJbmZvOlwiXHJcbiAgICAgICAgICAgICsgXCJcXG5tYXplIGlkIDpcIiArICh0aGlzLm1hemVfaWQgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuZmxvb3I6IFwiICAgKyAodGhpcy5mbG9vciAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnVuaXEgaWQgOlwiICsgKHRoaXMudW5pcV9pZCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zYXZlIGlkIDpcIiArICh0aGlzLnNhdmVfaWQgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubmFtZTogICBcIiAgKyAodGhpcy5uYW1lICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNpemVfeDogXCIgICsgKHRoaXMuc2l6ZS5zaXplX3goKSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zaXplX3k6IFwiICArICh0aGlzLnNpemUuc2l6ZV95KCkgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2l6ZV96OiBcIiAgKyAodGhpcy5zaXplLnNpemVfeigpID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhbGVydF9tYXplKGZsb29yOiBudW1iZXIgPSAwKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJNYXplIE1hcDpcIlxyXG4gICAgICAgICAgICArIFwibWF6ZTpcXG5cIiAgICAgKyAodGhpcy50b19zdHJpbmcoZmxvb3IsIHRydWUpICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWxlcnRfbWFzayhmbG9vcjogbnVtYmVyID0gMCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiTWFzayBNYXA6XCJcclxuICAgICAgICAgICAgKyBcIm1hc2s6XFxuXCIgICAgICsgKHRoaXMudG9fc3RyaW5nKGZsb29yLCBmYWxzZSkgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgX2dldF91dWlkIH0gZnJvbSBcIi4uL2RfdXRsL0ZfUmFuZFwiO1xyXG5pbXBvcnQgeyBUX016S2luZCB9ICBmcm9tIFwiLi9UX016S2luZFwiO1xyXG5pbXBvcnQgeyBKU09OX0FueSB9ICBmcm9tIFwiLi9DX1NhdmVEYXRhXCI7XHJcbmltcG9ydCB7IENfTWF6ZU9iaiwgSV9NYXplT2JqLCBKU09OX01hemVPYmogfSBmcm9tIFwiLi9DX01hemVPYmpcIjtcclxuaW1wb3J0IHsgVF9XYWxsIH0gICAgZnJvbSAnLi9DX1dhbGwnO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9NYXplQ2VsbCBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGtpbmQ/OiBUX016S2luZFxyXG4gICAgb2JqPzogIEpTT05fTWF6ZU9iaixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfTWF6ZUNlbGwgIHtcclxuICAgIHByb3RlY3RlZCBraW5kOiAgIFRfTXpLaW5kO1xyXG4gICAgcHJvdGVjdGVkIG15X29iajogSV9NYXplT2JqO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbmV3T2JqKGo6IEpTT05fTWF6ZUNlbGwpOiBDX01hemVDZWxsIHtcclxuICAgICAgICBzd2l0Y2ggKGoua2luZCkge1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLk5vRGVmOiByZXR1cm4gbmV3IENfTWF6ZUNlbGxOb0RlZihqKTsgXHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuVW5rd246IHJldHVybiBuZXcgQ19NYXplQ2VsbFVua3duKGopOyBcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5FbXB0eTogcmV0dXJuIG5ldyBDX01hemVDZWxsRW1wdHkoaik7IFxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLkZsb29yOiByZXR1cm4gbmV3IENfTWF6ZUNlbGxGbG9vcihqKTtcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5VbmV4cDogcmV0dXJuIG5ldyBDX01hemVDZWxsVW5leHAoaik7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RvbmU6IHJldHVybiBuZXcgQ19NYXplQ2VsbFN0b25lKGopO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVwOiByZXR1cm4gbmV3IENfTWF6ZUNlbGxTdHJVcChqKTtcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJEbjogcmV0dXJuIG5ldyBDX01hemVDZWxsU3RyRG4oaik7IFxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVEOiByZXR1cm4gbmV3IENfTWF6ZUNlbGxTdHJVRChqKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX01hemVDZWxsTm9EZWYoaik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGo6IEpTT05fTWF6ZUNlbGwpIHtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcbiAgICAgICAgai5vYmouY2xuYW1lID8/PSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMua2luZCAgID0gai5raW5kID8/IFRfTXpLaW5kLk5vRGVmO1xyXG4gICAgICAgIHRoaXMubXlfb2JqID0gQ19NYXplT2JqLm5ld09iaihqLm9iaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0T2JqKCk6ICBJX01hemVPYmoge3JldHVybiB0aGlzLm15X29ian1cclxuICAgIHB1YmxpYyBnZXRLaW5kKCk6IFRfTXpLaW5kIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5raW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b19sZXR0ZXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5teV9vYmoudmlldygpPy5sZXR0ZXIoKSA/PyAn77y4JztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9sZXR0ZXIobGV0dGVyOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKFRfTXpLaW5kKSkge1xyXG4gICAgICAgICAgICBpZiAobGV0dGVyID09PSBrZXkpIHJldHVybiBUX016S2luZFtrZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gVF9NektpbmQuTm9EZWY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyb3czRChmcm90OiBUX1dhbGwsIGJhY2s6IFRfV2FsbCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubXlfb2JqLnZpZXcoKT8uZHJvdzNEKGZyb3QsIGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5raW5kLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLFwiMFwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVjb2RlKHN0cjogc3RyaW5nLCBqPzogSlNPTl9NYXplQ2VsbCk6IENfTWF6ZUNlbGx8dW5kZWZpbmVkIHtcclxuICAgICAgICAgY29uc3Qga2luZCA9IHBhcnNlSW50KHN0ciwgMTYpIGFzIFRfTXpLaW5kO1xyXG4gICAgICAgICByZXR1cm4gQ19NYXplQ2VsbC5uZXdPYmooe2tpbmQ6IGtpbmQsIHBvczogaj8ucG9zfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGxOb0RlZiBleHRlbmRzIENfTWF6ZUNlbGwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVDZWxsfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGogPz89IHtraW5kOiBUX016S2luZC5Ob0RlZn07XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG5cclxuICAgICAgICBqLm9iai5jYW5fdGhyID0gJzAnO1xyXG4gICAgICAgIGoub2JqLnBvcyAgICAgPSB7eDpqLngsIHk6ai55LCB6Omouen07XHJcbiAgICAgICAgai5vYmoudmlldyAgICA9ICB7XHJcbiAgICAgICAgICAgIGxheWVyOiAwLCBsZXR0ZXI6ICfnlpEnLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgJzAnLFxyXG4gICAgICAgICAgICBwYWRfdDogMC4wLCBwYWRfZDogMC4wLCBwYWRfczogMC4wLFxyXG4gICAgICAgICAgICBjb2xfZjogJycsIGNvbF9iOiAnJywgY29sX3M6ICcnLCBjb2xfdDogJycsIGNvbF9kOiAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsVW5rd24gZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuVW5rd259O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcwJztcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn6KyOJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcwJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcnLCBjb2xfZDogJycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJycsIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGxFbXB0eSBleHRlbmRzIENfTWF6ZUNlbGwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVDZWxsfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGogPz89IHtraW5kOiBUX016S2luZC5FbXB0eX07XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG5cclxuICAgICAgICBqLm9iai5jYW5fdGhyID0gJzEnO1xyXG4gICAgICAgIGoub2JqLnBvcyAgICAgPSB7eDpqLngsIHk6ai55LCB6Omouen07XHJcbiAgICAgICAgai5vYmoudmlldyAgICA9ICB7XHJcbiAgICAgICAgICAgIGxheWVyOiAwLCBsZXR0ZXI6ICfnhKEnLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgJzAnLFxyXG4gICAgICAgICAgICBwYWRfdDogMC4wLCBwYWRfZDogMC4wLCBwYWRfczogMC4wLFxyXG4gICAgICAgICAgICBjb2xfZjogJycsIGNvbF9iOiAnJywgY29sX3M6ICcnLCBjb2xfdDogJycsIGNvbF9kOiAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnJywgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbEZsb29yIGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLkZsb29yfTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMSc7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ+OAgCcsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMScsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbiAgICAgICAgICAgIGNvbF9mOiAnJywgY29sX2I6ICcnLCBjb2xfczogJycsIGNvbF90OiAnIzY2NjZmZicsIGNvbF9kOiAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnIzk5OTlmZicsIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbFVuZXhwIGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLlVuZXhwfTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMSc7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ+ODuycsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMScsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbiAgICAgICAgICAgIGNvbF9mOiAnJywgY29sX2I6ICcnLCBjb2xfczogJycsIGNvbF90OiAnIzY2ZmZmZicsIGNvbF9kOiAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnIzk5OTlmZicsIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbFN0b25lIGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLlN0b25lfTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMCc7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ++8gycsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMScsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbiAgICAgICAgICAgIGNvbF9mOiAnIzAwZmYwMCcsIGNvbF9iOiAnJywgY29sX3M6ICcjMDBlZTAwJywgY29sX3Q6ICcnLCBjb2xfZDogJycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJyMwMDAwZmYnLCBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGxTdHJVcCBleHRlbmRzIENfTWF6ZUNlbGwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVDZWxsfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGogPz89IHtraW5kOiBUX016S2luZC5TdHJVcH07XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG5cclxuICAgICAgICBqLm9iai5jYW5fdGhyID0gJzEnO1xyXG4gICAgICAgIGoub2JqLnBvcyAgICAgPSB7eDpqLngsIHk6ai55LCB6Omouen07XHJcbiAgICAgICAgai5vYmoudmlldyAgICA9ICB7XHJcbiAgICAgICAgICAgIGxheWVyOiAwLCBsZXR0ZXI6ICfkuIonLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgJzEnLFxyXG4gICAgICAgICAgICBwYWRfdDogMC4wLCBwYWRfZDogMC4wLCBwYWRfczogMC4wLFxyXG4gICAgICAgICAgICBjb2xfZjogJycsIGNvbF9iOiAnJywgY29sX3M6ICcnLCBjb2xfdDogJyNmZmZmY2MnLCBjb2xfZDogJyNmZmZmY2MnLCBcclxuICAgICAgICAgICAgY29sX2w6ICcjMDAwMGZmJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsU3RyRG4gZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuU3RyRG59O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcxJztcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn5LiLJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcxJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcjZmZmZmNjJywgY29sX2Q6ICcjZmZmZmNjJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnIzAwMDBmZicsIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbFN0clVEIGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLlN0clVEfTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMSc7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ+autScsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMScsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbiAgICAgICAgICAgIGNvbF9mOiAnJywgY29sX2I6ICcnLCBjb2xfczogJycsIGNvbF90OiAnI2ZmZmZjYycsIGNvbF9kOiAnI2ZmZmZjYycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJyMwMDAwZmYnLCBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX1BvaW50IH0gICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vQ19Qb2ludFwiO1xyXG5pbXBvcnQgeyBDX1BvaW50RGlyLCBKU09OX1BvaW50RGlyIH0gZnJvbSBcIi4vQ19Qb2ludERpclwiO1xyXG5pbXBvcnQgeyBJX0Fic3RyYWN0LCBJX0pTT05fVW5pcSwgSlNPTl9BbnkgfSAgICAgZnJvbSBcIi4vQ19TYXZlRGF0YVwiO1xyXG5pbXBvcnQgeyBfZ2V0X3V1aWQgfSAgICAgICAgICAgICAgICAgZnJvbSBcIi4uL2RfdXRsL0ZfUmFuZFwiO1xyXG5pbXBvcnQgeyBcclxuICAgIENfTWF6ZU9ialZpZXcsIFxyXG4gICAgSV9NYXplT2JqVmlldywgXHJcbiAgICBKU09OX01hemVPYmpWaWV3IFxyXG59IGZyb20gXCIuL0NfTWF6ZU9ialZpZXdcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fTWF6ZU9iaiBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGNsbmFtZT86ICAgIHN0cmluZyxcclxuICAgIHVuaXFfaWQ/OiAgIHN0cmluZywgXHJcbiAgICBwb3M/OiAgICAgICBKU09OX1BvaW50RGlyLFxyXG4gICAgdmlldz86ICAgICAgSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQsXHJcbiAgICB0aHI/OiAgICAgICBzdHJpbmcsIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJX01hemVPYmogZXh0ZW5kcyBJX0pTT05fVW5pcSwgSV9BYnN0cmFjdCB7XHJcbiAgICBnZXRfcGQ6ICAgICAoKT0+Q19Qb2ludERpcjtcclxuICAgIHdpdGhpbjogICAgIChwOiBDX1BvaW50KT0+Ym9vbGVhbjtcclxuICAgIHZpZXc6ICAgICAgICgpPT5JX01hemVPYmpWaWV3fHVuZGVmaW5lZDtcclxuICAgIGNhblRocm91Z2g6ICgpPT5ib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19NYXplT2JqIGltcGxlbWVudHMgSV9NYXplT2JqIHtcclxuICAgIHByb3RlY3RlZCBjbG5hbWU6ICAgIHN0cmluZyA9ICdDX01hemVPYmonO1xyXG5cclxuICAgIHByaXZhdGUgICB1bmlxX2lkOiAgIHN0cmluZztcclxuICAgIHByb3RlY3RlZCBwb3M6ICAgICAgIENfUG9pbnREaXI7XHJcbiAgICBwcm90ZWN0ZWQgbXlfdmlldzogICBJX01hemVPYmpWaWV3fHVuZGVmaW5lZDtcclxuICAgIHByb3RlY3RlZCBjYW5fdGhyOiAgIGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBuZXdPYmooaj86IEpTT05fTWF6ZU9ianx1bmRlZmluZWQpOiBJX01hemVPYmoge1xyXG4gICAgICAgIGogPz89IHt9O1xyXG4gICAgICAgIGouY2xuYW1lID8/PSBDX01hemVPYmouY29uc3RydWN0b3IubmFtZTtcclxuICAgICAgICBzd2l0Y2ggKGouY2xuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ19NYXplT2JqLmNvbnN0cnVjdG9yLm5hbWU6IHJldHVybiBuZXcgQ19NYXplT2JqKGopO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IENfTWF6ZU9iaihqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBuZXdPYmooaj86IEpTT05fTWF6ZU9ianx1bmRlZmluZWQpOiBJX01hemVPYmoge1xyXG4gICAgICAgIHJldHVybiBDX01hemVPYmoubmV3T2JqKGopO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplT2JqfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMudW5pcV9pZCAgICA9ICdtYXplb2JqXycgKyBfZ2V0X3V1aWQoKTtcclxuICAgICAgICB0aGlzLmNsbmFtZSAgICAgPSAgQ19NYXplT2JqLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICAgICAgdGhpcy5wb3MgICAgICAgID0gIG5ldyBDX1BvaW50RGlyKHt4OjAsIHk6MCwgejowLCBkOjB9KTtcclxuICAgICAgICB0aGlzLm15X3ZpZXcgICAgPSAgdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuY2FuX3RociAgICA9ICB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoaiAhPT0gdW5kZWZpbmVkKSB0aGlzLl9faW5pdChqKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9faW5pdChqOiBKU09OX01hemVPYmp8dW5kZWZpbmVkKTogQ19NYXplT2JqIHtcclxuICAgICAgICBpZiAoaiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGoudW5pcV9pZCAhPT0gdW5kZWZpbmVkKSB0aGlzLnVuaXFfaWQgICA9IGoudW5pcV9pZDtcclxuICAgICAgICBpZiAoai5jbG5hbWUgICE9PSB1bmRlZmluZWQpIHRoaXMuY2xuYW1lICAgID0gai5jbG5hbWU7XHJcbiAgICAgICAgaWYgKGoucG9zICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLnBvcy5kZWNvZGUoai5wb3MpO1xyXG4gICAgICAgIGlmIChqLnZpZXcgICAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoai52aWV3KS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm15X3ZpZXcgPz89IENfTWF6ZU9ialZpZXcubmV3T2JqKGoudmlldyk7IFxyXG4gICAgICAgICAgICB9IGVsc2UgdGhpcy5teV92aWV3ICA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGouY2FuX3RociAhPT0gdW5kZWZpbmVkKSB0aGlzLmNhbl90aHIgPSBqLmNhbl90aHIgIT09ICcwJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxufVxyXG5cclxuICAgIHB1YmxpYyB1aWQoKTogc3RyaW5nIHtyZXR1cm4gdGhpcy51bmlxX2lkfVxyXG5cclxuICAgIHB1YmxpYyB2aWV3KCk6IElfTWF6ZU9ialZpZXd8dW5kZWZpbmVkIHtyZXR1cm4gdGhpcy5teV92aWV3fVxyXG4gICAgcHVibGljIHNldFZpZXcodmlldzogSV9NYXplT2JqVmlld3x1bmRlZmluZWQpOiB2b2lkIHt0aGlzLm15X3ZpZXcgPSB2aWV3fVxyXG5cclxuICAgIHB1YmxpYyBjYW5UaHJvdWdoKCk6IGJvb2xlYW4ge3JldHVybiB0aGlzLmNhbl90aHJ9XHJcbiAgICBwdWJsaWMgc2V0VGhyb3VnaCh0aHI6IGJvb2xlYW4pOiBib29sZWFuIHtyZXR1cm4gdGhpcy5jYW5fdGhyID0gdGhyfVxyXG5cclxuICAgIHB1YmxpYyBnZXRfcGQoKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX1BvaW50RGlyKHRoaXMucG9zKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcGQocDogQ19Qb2ludERpcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucG9zID0gcDtcclxuICAgIH1cclxuICAgIHB1YmxpYyB3aXRoaW4ocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvcy53aXRoaW4ocCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX01hemVPYmoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVuaXFfaWQ6IHRoaXMudW5pcV9pZCxcclxuICAgICAgICAgICAgY2xuYW1lOiAgdGhpcy5jbG5hbWUsXHJcbiAgICAgICAgICAgIHBvczogICAgIHRoaXMucG9zLmVuY29kZSgpLFxyXG4gICAgICAgICAgICB2aWV3OiAgICB0aGlzLm15X3ZpZXc/LmVuY29kZSgpID8/IHt9LFxyXG4gICAgICAgICAgICBjYW5fdGhyOiB0aGlzLmNhbl90aHIgPyAnMScgOiAnMCcsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWNvZGUoajogSlNPTl9NYXplT2JqfHVuZGVmaW5lZCk6IElfTWF6ZU9iaiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19pbml0KGopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBkZWNvZGUoajogSlNPTl9NYXplT2JqfHVuZGVmaW5lZCk6IElfTWF6ZU9iaiB7XHJcbiAgICAgICAgcmV0dXJuIENfTWF6ZU9iai5uZXdPYmooaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgSV9BYnN0cmFjdCwgSlNPTl9BbnkgfSBmcm9tIFwiLi9DX1NhdmVEYXRhXCI7XHJcbmltcG9ydCB7IFRfV2FsbCB9ICAgICAgICAgICAgICAgZnJvbSBcIi4uL2RfbWRsL0NfV2FsbFwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSV9NYXplT2JqVmlldyBleHRlbmRzIElfQWJzdHJhY3Qge1xyXG4gICAgLy8g6KGo56S66Zai5L+CKDJEcHJlKS4vQ19XYWxsXHJcbiAgICBsYXllcjogICAoKT0+bnVtYmVyO1xyXG4gICAgbGV0dGVyOiAgKCk9PnN0cmluZ3xudWxsOyAvLyBudWxsOiDopovjgYjjgarjgYTjgIHkvZXjgoLjgarjgYRcclxuXHJcbiAgICAvLyDooajnpLrplqLkv4IoM0QpXHJcbiAgICBjYW5TaG93OiAoKT0+Ym9vbGVhbjtcclxuICAgIGRyb3czRDogIChmcm90OiBUX1dhbGwsIGJhY2s6IFRfV2FsbCk9PnZvaWQ7XHJcblxyXG4gICAgcGFkX3Q6ICAgKCk9Pm51bWJlcjsgLy/kuIrlgbTjga7nqbrjgY0o5Ymy5ZCIOiAw44GL44KJMSkgXHJcbiAgICBwYWRfZDogICAoKT0+bnVtYmVyOyAvL+W6iuWBtOOBruepuuOBjSjlibLlkIg6IDDjgYvjgokxKSBcclxuICAgIHBhZF9zOiAgICgpPT5udW1iZXI7IC8v5qiq5YG044Gu56m644GNKOWJsuWQiDogMOOBi+OCiTEpIFxyXG4gICAgY29sX2Y6ICAgKCk9PnN0cmluZ3xudWxsOyAvL+ato+mdouOBruiJsihDU1Pjgqvjg6njg7wp44CCbnVsbOOBr+mAj+aYjlxyXG4gICAgY29sX2I6ICAgKCk9PnN0cmluZ3xudWxsOyAvL+iDjOmdouOBruiJsihDU1Pjgqvjg6njg7wp44CCbnVsbOOBr+mAj+aYjlxyXG4gICAgY29sX3M6ICAgKCk9PnN0cmluZ3xudWxsOyAvL+aoquWBtOOBruiJsihDU1Pjgqvjg6njg7wp44CCbnVsbOOBr+mAj+aYjlxyXG4gICAgY29sX3Q6ICAgKCk9PnN0cmluZ3xudWxsOyAvL+S4iumDqOOBruiJsihDU1Pjgqvjg6njg7wp44CCbnVsbOOBr+mAj+aYjuOAguOChOOChOOBk+OBl+OBhOOBjOOAgeeJqeS9k+OBruW6lemdouOBq+W9k+OBn+OCi1xyXG4gICAgY29sX2Q6ICAgKCk9PnN0cmluZ3xudWxsOyAvL+S4i+mDqOOBruiJsihDU1Pjgqvjg6njg7wp44CCbnVsbOOBr+mAj+aYjuOAguOChOOChOOBk+OBl+OBhOOBjOOAgeeJqeS9k+OBruWkqeS6leOBq+W9k+OBn+OCi1xyXG4gICAgY29sX2w6ICAgKCk9PnN0cmluZ3xudWxsOyAvL+ODqeOCpOODs+OBruiJsihDU1Pjgqvjg6njg7wpXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9NYXplT2JqVmlldyBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGNsbmFtZT86IHN0cmluZyxcclxuICAgIGxheWVyPzogIG51bWJlcixcclxuICAgIGxldHRlcj86IHN0cmluZyxcclxuICAgIHNob3czRD86IHN0cmluZyxcclxuICAgIHBhZF90PzogIG51bWJlciwgLy8g44Kq44OW44K444Kn44Kv44OI5LiK6YOo44Gu6ZqZ6ZaT44Gu5Ymy5ZCIKDAuMCDjgYvjgokgMS4wKSBcclxuICAgIHBhZF9kPzogIG51bWJlciwgLy8g44Kq44OW44K444Kn44Kv44OI5LiL6YOo44Gu6ZqZ6ZaT44Gu5Ymy5ZCIKDAuMCDjgYvjgokgMS4wKSBcclxuICAgIHBhZF9zPzogIG51bWJlciwgLy8g44Kq44OW44K444Kn44Kv44OI5ZGo5Zuy44Gu6ZqZ6ZaT44Gu5Ymy5ZCIKDAuMCDjgYvjgokgMS4wKSBcclxuICAgIGNvbF9mPzogIHN0cmluZ3xudWxsLCAvLyDjgqrjg5bjgrjjgqfjgq/jg4jmraPpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBjb2xfYj86ICBzdHJpbmd8bnVsbCwgLy8g44Kq44OW44K444Kn44Kv44OI5q2j6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgY29sX3M/OiAgc3RyaW5nfG51bGwsIC8vIOOCquODluOCuOOCp+OCr+ODiOWBtOmdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIGNvbF90PzogIHN0cmluZ3xudWxsLCAvLyDjgqrjg5bjgrjjgqfjgq/jg4jkuIrpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBjb2xfZD86ICBzdHJpbmd8bnVsbCwgLy8g44Kq44OW44K444Kn44Kv44OI5bqV6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgY29sX2w/OiAgc3RyaW5nfG51bGwsIC8vIOOCquODluOCuOOCp+OCr+ODiOOBrue3muOBrkNTU+OCq+ODqeODvCBcclxufVxyXG5cclxudHlwZSBUX3h5ICAgPSB7eDogbnVtYmVyLCB5OiBudW1iZXJ9XHJcbnR5cGUgVF9SZWN0ID0ge3RsOiBUX3h5LCB0cjogVF94eSwgZGw6IFRfeHksIGRyOiBUX3h5fTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDX01hemVPYmpWaWV3IGltcGxlbWVudHMgSV9NYXplT2JqVmlldyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbjNEPzogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRfY29udGV4dDNEKCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRHx1bmRlZmluZWQge3JldHVybiB0aGlzPy5jb24zRH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0X2NvbnRleHQzRChjb24zRD86IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge3RoaXMuY29uM0QgPSBjb24zRH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5ld09iaihqPzogSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQpOiBJX01hemVPYmpWaWV3IHtcclxuICAgICAgICBqID8/PSB7fTtcclxuICAgICAgICBqLmNsbmFtZSA/Pz0gQ19NYXplT2JqVmlldy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgICAgIHN3aXRjaCAoai5jbG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBDX01hemVPYmpWaWV3LmNvbnN0cnVjdG9yLm5hbWU6ICAgICByZXR1cm4gbmV3IENfTWF6ZU9ialZpZXcoaik7XHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm4gbmV3IENfTWF6ZU9ialZpZXcoaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbmV3T2JqKGo/OiBKU09OX01hemVPYmpWaWV3fHVuZGVmaW5lZCk6IElfTWF6ZU9ialZpZXcge1xyXG4gICAgICAgIHJldHVybiBDX01hemVPYmpWaWV3Lm5ld09iaihqKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjbG5hbWU6ICAgIHN0cmluZyA9ICdDX01hemVPYmpWaWV3JztcclxuXHJcbiAgICBwcml2YXRlIG15X2xheWVyOiAgbnVtYmVyOyAgICAgIC8vIDJE6KGo56S644Gu5pmC44GuQ1NT44Os44Kk44Ok44O844CC5ZCM5L2N572u44Gu44Kq44OW44K444Kn44Gu5YaF44GT44Gu5YCk44GM5aSn44GN44GE54mp44GM6KGo56S644GV44KM44KLXHJcbiAgICBwcml2YXRlIG15X2xldHRlcjogc3RyaW5nfG51bGw7IC8vIDJE6KGo56S644Gu5pmC44Gu5YWo6KeS5paH5a2X44CCbnVsbOOBquOCiemAj+aYjlxyXG5cclxuICAgIHByaXZhdGUgbXlfc2hvdzNEOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBteV9wYWRfdDogIG51bWJlcjsgLy8g44Kq44OW44K444Kn44Kv44OI5LiK6YOo44Gu6ZqZ6ZaT44Gu5Ymy5ZCIKDAuMCDjgYvjgokgMS4wKSBcclxuICAgIHByaXZhdGUgbXlfcGFkX2Q6ICBudW1iZXI7IC8vIOOCquODluOCuOOCp+OCr+ODiOS4i+mDqOOBrumamemWk+OBruWJsuWQiCgwLjAg44GL44KJIDEuMCkgXHJcbiAgICBwcml2YXRlIG15X3BhZF9zOiAgbnVtYmVyOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jlkajlm7Ljga7pmpnplpPjga7libLlkIgoMC4wIOOBi+OCiSAxLjApIFxyXG5cclxuICAgIHByaXZhdGUgbXlfY29sX2Y6ICBzdHJpbmd8bnVsbDsgLy8g44Kq44OW44K444Kn44Kv44OI5q2j6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgcHJpdmF0ZSBteV9jb2xfYjogIHN0cmluZ3xudWxsOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jmraPpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBwcml2YXRlIG15X2NvbF9zOiAgc3RyaW5nfG51bGw7IC8vIOOCquODluOCuOOCp+OCr+ODiOWBtOmdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIHByaXZhdGUgbXlfY29sX3Q6ICBzdHJpbmd8bnVsbDsgLy8g44Kq44OW44K444Kn44Kv44OI5LiK6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgcHJpdmF0ZSBteV9jb2xfZDogIHN0cmluZ3xudWxsOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jlupXpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBwcml2YXRlIG15X2NvbF9sOiAgc3RyaW5nfG51bGw7IC8vIOOCquODluOCuOOCp+OCr+ODiOOBrue3muOBrkNTU+OCq+ODqeODvCBcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5jbG5hbWUgICAgID0gIHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5teV9sYXllciAgID0gIC0yO1xyXG4gICAgICAgIHRoaXMubXlfbGV0dGVyICA9ICBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLm15X3BhZF90ICAgPSAgMC4wO1xyXG4gICAgICAgIHRoaXMubXlfcGFkX2QgICA9ICAwLjA7XHJcbiAgICAgICAgdGhpcy5teV9wYWRfcyAgID0gIDAuMDtcclxuXHJcbiAgICAgICAgdGhpcy5teV9zaG93M0QgID0gIHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMubXlfY29sX2YgICA9ICcjZjhmOGY4JzsgXHJcbiAgICAgICAgdGhpcy5teV9jb2xfYiAgID0gJyNhYWFhYWEnOyBcclxuICAgICAgICB0aGlzLm15X2NvbF9zICAgPSAnI2RkZGRkZCc7IFxyXG4gICAgICAgIHRoaXMubXlfY29sX3QgICA9ICcjZmZmZmZmJzsgXHJcbiAgICAgICAgdGhpcy5teV9jb2xfZCAgID0gJyNjY2NjY2MnOyBcclxuICAgICAgICB0aGlzLm15X2NvbF9sICAgPSAnIzMzMzMzMyc7IFxyXG5cclxuICAgICAgICBpZiAoaiAhPT0gdW5kZWZpbmVkKSB0aGlzLl9faW5pdChqKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX19pbml0KGo6IEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkKTogSV9NYXplT2JqVmlldyB7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChqLmNsbmFtZSAgIT09IHVuZGVmaW5lZCkgdGhpcy5jbG5hbWUgICAgPSBqLmNsbmFtZTtcclxuICAgICAgICBpZiAoai5sYXllciAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfbGF5ZXIgID0gai5sYXllcjtcclxuICAgICAgICBpZiAoai5sZXR0ZXIgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfbGV0dGVyID0gai5sZXR0ZXIgIT09ICcnICA/IGoubGV0dGVyIDogbnVsbDsgXHJcbiAgICAgICAgaWYgKGoucGFkX3QgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X3BhZF90ICA9IGoucGFkX3Q7IFxyXG4gICAgICAgIGlmIChqLnBhZF9kICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9wYWRfZCAgPSBqLnBhZF9kOyBcclxuICAgICAgICBpZiAoai5wYWRfcyAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfcGFkX3MgID0gai5wYWRfczsgXHJcbiAgICAgICAgaWYgKGouc2hvdzNEICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X3Nob3czRCA9IGouc2hvdzNEICE9PSAnMCcgPyB0cnVlICAgICA6IGZhbHNlOyBcclxuICAgICAgICBpZiAoai5jb2xfZiAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfY29sX2YgID0gai5jb2xfZiAgIT09ICcnICA/IGouY29sX2YgIDogbnVsbDsgXHJcbiAgICAgICAgaWYgKGouY29sX2IgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2NvbF9iICA9IGouY29sX2IgICE9PSAnJyAgPyBqLmNvbF9iICA6IG51bGw7IFxyXG4gICAgICAgIGlmIChqLmNvbF9zICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9jb2xfcyAgPSBqLmNvbF9zICAhPT0gJycgID8gai5jb2xfcyAgOiBudWxsOyBcclxuICAgICAgICBpZiAoai5jb2xfdCAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfY29sX3QgID0gai5jb2xfdCAgIT09ICcnICA/IGouY29sX3QgIDogbnVsbDsgXHJcbiAgICAgICAgaWYgKGouY29sX2QgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2NvbF9kICA9IGouY29sX2QgICE9PSAnJyAgPyBqLmNvbF9kICA6IG51bGw7IFxyXG4gICAgICAgIGlmIChqLmNvbF9sICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9jb2xfbCAgPSBqLmNvbF9sICAhPT0gJycgID8gai5jb2xfbCAgOiBudWxsOyBcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxheWVyKCk6IG51bWJlciB7cmV0dXJuIHRoaXMubXlfbGF5ZXI7fVxyXG4gICAgcHVibGljIHNldF9sYXllcihsYXllcjogbnVtYmVyKSB7dGhpcy5teV9sYXllciA9IGxheWVyfVxyXG5cclxuICAgIHB1YmxpYyBsZXR0ZXIoKTogIHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9sZXR0ZXJ9XHJcbiAgICBwdWJsaWMgc2V0X2xldHRlcihsZXR0ZXI6IHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2xldHRlciA9IGxldHRlcn1cclxuXHJcbiAgICBwdWJsaWMgY2FuU2hvdygpOiBib29sZWFuIHtyZXR1cm4gdGhpcy5teV9zaG93M0R9O1xyXG4gICAgcHVibGljIHNldFNob3coY2FuX3Nob3c6IGJvb2xlYW4pOiBib29sZWFuIHtyZXR1cm4gdGhpcy5teV9zaG93M0QgPSBjYW5fc2hvd307XHJcblxyXG4gICAgcHVibGljIHBhZF90KCk6ICBudW1iZXIge3JldHVybiB0aGlzLm15X3BhZF90fVxyXG4gICAgcHVibGljIHBhZF9kKCk6ICBudW1iZXIge3JldHVybiB0aGlzLm15X3BhZF9kfVxyXG4gICAgcHVibGljIHBhZF9zKCk6ICBudW1iZXIge3JldHVybiB0aGlzLm15X3BhZF9zfVxyXG4gICAgcHVibGljIHNldF9wYWRfdChwYWRfdDogbnVtYmVyKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5teV9wYWRfdCA9IHRoaXMubXlfcGFkX2QgKyBwYWRfdCA8IDEuMCA/IHBhZF90IDogMC45OSAtIHRoaXMubXlfcGFkX2R9XHJcbiAgICBwdWJsaWMgc2V0X3BhZF9kKHBhZF9kOiBudW1iZXIpOiBudW1iZXIge3JldHVybiB0aGlzLm15X3BhZF9kID0gdGhpcy5teV9wYWRfdCArIHBhZF9kIDwgMS4wID8gcGFkX2QgOiAwLjk5IC0gdGhpcy5teV9wYWRfdH1cclxuICAgIHB1YmxpYyBzZXRfcGFkX3MocGFkX3M6IG51bWJlcik6IG51bWJlciB7cmV0dXJuIHRoaXMubXlfcGFkX3MgPSBwYWRfc31cclxuXHJcbiAgICBwdWJsaWMgY29sX2YoKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9mfSBcclxuICAgIHB1YmxpYyBjb2xfYigpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX2J9IFxyXG4gICAgcHVibGljIGNvbF9zKCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfc30gXHJcbiAgICBwdWJsaWMgY29sX3QoKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF90fSBcclxuICAgIHB1YmxpYyBjb2xfZCgpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX2R9IFxyXG4gICAgcHVibGljIGNvbF9sKCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfbH0gXHJcbiAgICBwdWJsaWMgc2V0X2NvbF9mKGNvbF9mOiBzdHJpbmd8bnVsbCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfZiA9IGNvbF9mfSBcclxuICAgIHB1YmxpYyBzZXRfY29sX2IoY29sX2I6IHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9iID0gY29sX2J9IFxyXG4gICAgcHVibGljIHNldF9jb2xfcyhjb2xfczogc3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX3MgPSBjb2xfc30gXHJcbiAgICBwdWJsaWMgc2V0X2NvbF90KGNvbF90OiBzdHJpbmd8bnVsbCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfdCA9IGNvbF90fSBcclxuICAgIHB1YmxpYyBzZXRfY29sX2QoY29sX2Q6IHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9kID0gY29sX2R9IFxyXG4gICAgcHVibGljIHNldF9jb2xfbChjb2xfbDogc3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX2wgPSBjb2xfbH0gXHJcblxyXG5cclxuICAgIHB1YmxpYyBkcm93M0QoZnJvdDogVF9XYWxsLCBiYWNrOiBUX1dhbGwpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRyb3dfb2JqX2JhY2sgICAgICAoZnJvdCwgYmFjayk7XHJcbiAgICAgICAgdGhpcy5kcm93X29ial9kb3duICAgICAgKGZyb3QsIGJhY2spO1xyXG4gICAgICAgIHRoaXMuZHJvd19vYmpfdG9wICAgICAgIChmcm90LCBiYWNrKTtcclxuICAgICAgICB0aGlzLmRyb3dfb2JqX3JpZ2h0X3NpZGUoZnJvdCwgYmFjayk7XHJcbiAgICAgICAgdGhpcy5kcm93X29ial9sZWZ0X3NpZGUgKGZyb3QsIGJhY2spO1xyXG4gICAgICAgIHRoaXMuZHJvd19vYmpfZnJvbnQgICAgIChmcm90LCBiYWNrKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZHJvd19vYmpfZG93bihcclxuICAgICAgICBmcm90OiAgVF9XYWxsLCBcclxuICAgICAgICBiYWNrOiAgVF9XYWxsLCBcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5TaG93KCkgfHwgdGhpcy5jb2xfdCgpID09PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMucGFkX3MoKSA8PSAwLjAgJiYgdGhpcy5wYWRfdCgpID49IDEuMCkge1xyXG4gICAgICAgICAgICBkcm93X2NlbGxfZmxvb3IoZnJvdCwgYmFjaywgdGhpcy5jb2xfdCgpID8/ICcjNjY2NmZmJywgdGhpcy5jb2xfbCgpID8/ICcjOTk5OWZmJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjb25zdCBvID0gX19jYWxjX3BhZGRpbmdfb2JqKHRoaXMsIGZyb3QsIGJhY2spO1xyXG4gICAgICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICAgICAgdGw6IG8uZmRsLFxyXG4gICAgICAgICAgICB0cjogby5mZHIsXHJcbiAgICAgICAgICAgIGRyOiBvLmJkcixcclxuICAgICAgICAgICAgZGw6IG8uYmRsLFxyXG4gICAgICAgIH1cclxuICAgICAgICBkcm93X2NlbGwocmVjdCwgdGhpcy5jb2xfdCgpLCB0aGlzLmNvbF9sKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJvd19vYmpfdG9wKFxyXG4gICAgICAgIGZyb3Q6ICBUX1dhbGwsIFxyXG4gICAgICAgIGJhY2s6ICBUX1dhbGwsIFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblNob3coKSB8fCB0aGlzLmNvbF9kKCkgPT09IG51bGwpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5wYWRfcygpIDw9IDAuMCAmJiB0aGlzLnBhZF9kKCkgPj0gMS4wKSB7XHJcbiAgICAgICAgICAgIGRyb3dfY2VsbF9jZWlsaW5nKGZyb3QsIGJhY2ssIHRoaXMuY29sX2QoKSA/PyAnI2FhYWFhYScsIHRoaXMuY29sX2woKSA/PyAnIzk5OTlmZicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbyA9IF9fY2FsY19wYWRkaW5nX29iaih0aGlzLCBmcm90LCBiYWNrKTtcclxuICAgICAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgICAgIHRsOiBvLmZ0bCxcclxuICAgICAgICAgICAgdHI6IG8uZnRyLFxyXG4gICAgICAgICAgICBkcjogby5idHIsXHJcbiAgICAgICAgICAgIGRsOiBvLmJ0bCxcclxuICAgICAgICB9XHJcbiAgICAgICAgZHJvd19jZWxsKHJlY3QsIHRoaXMuY29sX2QoKSwgdGhpcy5jb2xfbCgpKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZHJvd19vYmpfZnJvbnQoXHJcbiAgICAgICAgZnJvdDogIFRfV2FsbCwgXHJcbiAgICAgICAgYmFjazogIFRfV2FsbCwgXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuU2hvdygpIHx8IHRoaXMuY29sX2YoKSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbyA9IF9fY2FsY19wYWRkaW5nX29iaih0aGlzLCBmcm90LCBiYWNrKTtcclxuICAgICAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgICAgIHRsOiBvLmZ0bCwgXHJcbiAgICAgICAgICAgIHRyOiBvLmZ0ciwgXHJcbiAgICAgICAgICAgIGRyOiBvLmZkciwgXHJcbiAgICAgICAgICAgIGRsOiBvLmZkbCwgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZHJvd19jZWxsKHJlY3QsIHRoaXMuY29sX2YoKSwgdGhpcy5jb2xfbCgpKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZHJvd19vYmpfYmFjayhcclxuICAgICAgICBmcm90OiAgVF9XYWxsLCBcclxuICAgICAgICBiYWNrOiAgVF9XYWxsLCBcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5TaG93KCkgfHwgdGhpcy5jb2xfYigpID09PSBudWxsKSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBjb25zdCBvID0gX19jYWxjX3BhZGRpbmdfb2JqKHRoaXMsIGZyb3QsIGJhY2spO1xyXG4gICAgICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICAgICAgdGw6IG8uYnRsLCBcclxuICAgICAgICAgICAgdHI6IG8uYnRyLCBcclxuICAgICAgICAgICAgZHI6IG8uYmRyLCBcclxuICAgICAgICAgICAgZGw6IG8uYmRsLCBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBkcm93X2NlbGwocmVjdCwgdGhpcy5jb2xfYigpLCB0aGlzLmNvbF9sKCkpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkcm93X29ial9sZWZ0X3NpZGUoXHJcbiAgICAgICAgZnJvdDogIFRfV2FsbCwgXHJcbiAgICAgICAgYmFjazogIFRfV2FsbCwgXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuU2hvdygpIHx8IHRoaXMuY29sX3MoKSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbyA9IF9fY2FsY19wYWRkaW5nX29iaih0aGlzLCBmcm90LCBiYWNrKTtcclxuICAgICAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgICAgIHRsOiBvLmJ0bCxcclxuICAgICAgICAgICAgdHI6IG8uZnRsLFxyXG4gICAgICAgICAgICBkcjogby5mZGwsXHJcbiAgICAgICAgICAgIGRsOiBvLmJkbCxcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBkcm93X2NlbGwocmVjdCwgdGhpcy5jb2xfcygpLCB0aGlzLmNvbF9sKCkpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkcm93X29ial9yaWdodF9zaWRlKFxyXG4gICAgICAgIGZyb3Q6ICBUX1dhbGwsIFxyXG4gICAgICAgIGJhY2s6ICBUX1dhbGwsIFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblNob3coKSB8fCB0aGlzLmNvbF9zKCkgPT09IG51bGwpIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IG8gPSBfX2NhbGNfcGFkZGluZ19vYmoodGhpcywgZnJvdCwgYmFjayk7XHJcbiAgICAgICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgICAgICB0bDogby5mdHIsXHJcbiAgICAgICAgICAgIHRyOiBvLmJ0cixcclxuICAgICAgICAgICAgZHI6IG8uYmRyLFxyXG4gICAgICAgICAgICBkbDogby5mZHIsXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZHJvd19jZWxsKHJlY3QsIHRoaXMuY29sX3MoKSwgdGhpcy5jb2xfbCgpKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9NYXplT2JqVmlldyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY25hbWU6ICAgdGhpcy5jbG5hbWUsXHJcbiAgICAgICAgICAgIGxheWVyOiAgIHRoaXMubXlfbGF5ZXIsXHJcbiAgICAgICAgICAgIGxldHRlcjogIHRoaXMubXlfbGV0dGVyID8/ICcnLFxyXG4gICAgICAgICAgICBwYWRfdDogICB0aGlzLm15X3BhZF90LCBcclxuICAgICAgICAgICAgcGFkX2Q6ICAgdGhpcy5teV9wYWRfZCwgXHJcbiAgICAgICAgICAgIHBhZF9zOiAgIHRoaXMubXlfcGFkX3MsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICB0aGlzLmNhblNob3coKSA/ICcxJyA6ICcwJyxcclxuICAgICAgICAgICAgY29sX2Y6ICAgdGhpcy5teV9jb2xfZiA/PyAnJywgIFxyXG4gICAgICAgICAgICBjb2xfYjogICB0aGlzLm15X2NvbF9iID8/ICcnLCAgXHJcbiAgICAgICAgICAgIGNvbF9zOiAgIHRoaXMubXlfY29sX3MgPz8gJycsIFxyXG4gICAgICAgICAgICBjb2xfdDogICB0aGlzLm15X2NvbF90ID8/ICcnLCBcclxuICAgICAgICAgICAgY29sX2Q6ICAgdGhpcy5teV9jb2xfZCA/PyAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAgIHRoaXMubXlfY29sX2wgPz8gJycsIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoajogSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQpOiBJX01hemVPYmpWaWV3IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX2luaXQoaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZShqOiBKU09OX01hemVPYmpWaWV3fHVuZGVmaW5lZCk6IElfTWF6ZU9ialZpZXcge1xyXG4gICAgICAgIHJldHVybiBDX01hemVPYmpWaWV3Lm5ld09iaihqKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBfX2NhbGNfcGFkZGluZ19vYmooXHJcbiAgICBvYmo6ICAgSV9NYXplT2JqVmlldyxcclxuICAgIGZyb3Q6ICBUX1dhbGwsIFxyXG4gICAgYmFjazogIFRfV2FsbCwgXHJcbik6IHtcclxuICAgIC8vIOitmOWIpeWtkOOBruaEj+WRs1xyXG4gICAgLy8g5bem56uv77ya5YmN5b6M44Gu5Yy65Yil44CAZjrliY3pnaLjgIBiOuiDjOmdolxyXG4gICAgLy8g5Lit5aSu77ya5LiK5LiL44Gu5Yy65Yil44CAdDrkuIrovrrjgIBkOuS4i+i+ulxyXG4gICAgLy8g5Y+z56uv77ya5bem5Y+z44Gu5Yy65Yil44CAbDrlt6blgbTjgIByOuWPs+WBtFxyXG4gICAgZnRsOlRfeHksIGZ0cjpUX3h5LCBmZHI6VF94eSwgZmRsOlRfeHksIFxyXG4gICAgYnRsOlRfeHksIGJ0cjpUX3h5LCBiZHI6VF94eSwgYmRsOlRfeHksIFxyXG59IHtcclxuICAgIGNvbnN0IHJlY3RfZnJvdCA9IGZyb3Q7XHJcbiAgICBjb25zdCByZWN0X2JhY2sgPSBiYWNrO1xyXG5cclxuICAgIGNvbnN0IHJhdGlvX1ggICA9IG9iai5wYWRfcygpIC8gMi4wO1xyXG4gICAgY29uc3QgcmF0aW9fVCAgID0gb2JqLnBhZF90KCk7XHJcbiAgICBjb25zdCByYXRpb19EICAgPSBvYmoucGFkX2QoKTtcclxuXHJcbiAgICBjb25zdCBmcm90X3BhZF9YICA9IE1hdGguYWJzKHJlY3RfZnJvdC5tYXhfeCAtIHJlY3RfZnJvdC5taW5feCkgKiByYXRpb19YO1xyXG4gICAgY29uc3QgYmFja19wYWRfWCAgPSBNYXRoLmFicyhyZWN0X2JhY2subWF4X3ggLSByZWN0X2JhY2subWluX3gpICogcmF0aW9fWDtcclxuXHJcbiAgICBjb25zdCBmcm90X3BhZF9UICA9IE1hdGguYWJzKHJlY3RfZnJvdC5tYXhfeSAtIHJlY3RfZnJvdC5taW5feSkgKiByYXRpb19UO1xyXG4gICAgY29uc3QgYmFja19wYWRfVCAgPSBNYXRoLmFicyhyZWN0X2JhY2subWF4X3kgLSByZWN0X2JhY2subWluX3kpICogcmF0aW9fVDtcclxuXHJcbiAgICBjb25zdCBmcm90X3BhZF9EICA9IE1hdGguYWJzKHJlY3RfZnJvdC5tYXhfeSAtIHJlY3RfZnJvdC5taW5feSkgKiByYXRpb19EO1xyXG4gICAgY29uc3QgYmFja19wYWRfRCAgPSBNYXRoLmFicyhyZWN0X2JhY2subWF4X3kgLSByZWN0X2JhY2subWluX3kpICogcmF0aW9fRDtcclxuXHJcbiAgICAvLyDjg5Hjg4fjgqPjg7PjgrDoqK3lrprlvozjga5YWeW6p+aomeOCkuioiOeul+OBmeOCi+OBn+OCgeOBq1xyXG4gICAgLy8g5b+F6KaB44Gq57ea5YiG44Gu5L2N572u5rG644KB44KS44GZ44KLXHJcbiAgICBjb25zdCBmcm90X3RvcF9sZnQgPSB7eDogcmVjdF9mcm90Lm1pbl94ICsgZnJvdF9wYWRfWCwgeTogcmVjdF9mcm90Lm1pbl95ICsgZnJvdF9wYWRfVH1cclxuICAgIGNvbnN0IGZyb3RfdG9wX3JndCA9IHt4OiByZWN0X2Zyb3QubWF4X3ggLSBmcm90X3BhZF9YLCB5OiByZWN0X2Zyb3QubWluX3kgKyBmcm90X3BhZF9UfVxyXG4gICAgY29uc3QgZnJvdF9kd25fbGZ0ID0ge3g6IHJlY3RfZnJvdC5taW5feCArIGZyb3RfcGFkX1gsIHk6IHJlY3RfZnJvdC5tYXhfeSAtIGZyb3RfcGFkX0R9XHJcbiAgICBjb25zdCBmcm90X2R3bl9yZ3QgPSB7eDogcmVjdF9mcm90Lm1heF94IC0gZnJvdF9wYWRfWCwgeTogcmVjdF9mcm90Lm1heF95IC0gZnJvdF9wYWRfRH1cclxuXHJcbiAgICBjb25zdCBiYWNrX3RvcF9sZnQgPSB7eDogcmVjdF9iYWNrLm1pbl94ICsgYmFja19wYWRfWCwgeTogcmVjdF9iYWNrLm1pbl95ICsgYmFja19wYWRfVH1cclxuICAgIGNvbnN0IGJhY2tfdG9wX3JndCA9IHt4OiByZWN0X2JhY2subWF4X3ggLSBiYWNrX3BhZF9YLCB5OiByZWN0X2JhY2subWluX3kgKyBiYWNrX3BhZF9UfVxyXG4gICAgY29uc3QgYmFja19kd25fbGZ0ID0ge3g6IHJlY3RfYmFjay5taW5feCArIGJhY2tfcGFkX1gsIHk6IHJlY3RfYmFjay5tYXhfeSAtIGJhY2tfcGFkX0R9XHJcbiAgICBjb25zdCBiYWNrX2R3bl9yZ3QgPSB7eDogcmVjdF9iYWNrLm1heF94IC0gYmFja19wYWRfWCwgeTogcmVjdF9iYWNrLm1heF95IC0gYmFja19wYWRfRH1cclxuXHJcbiAgICBsZXQgZnRsID0gX19jYWxjX3BhZGRpbmdfeHkoZnJvdF90b3BfbGZ0LCBiYWNrX3RvcF9sZnQsIHJhdGlvX1gpO1xyXG4gICAgbGV0IGZ0ciA9IF9fY2FsY19wYWRkaW5nX3h5KGZyb3RfdG9wX3JndCwgYmFja190b3Bfcmd0LCByYXRpb19YKTtcclxuICAgIGxldCBmZGwgPSBfX2NhbGNfcGFkZGluZ194eShmcm90X2R3bl9sZnQsIGJhY2tfZHduX2xmdCwgcmF0aW9fWCk7XHJcbiAgICBsZXQgZmRyID0gX19jYWxjX3BhZGRpbmdfeHkoZnJvdF9kd25fcmd0LCBiYWNrX2R3bl9yZ3QsIHJhdGlvX1gpO1xyXG5cclxuICAgIGxldCBidGwgPSBfX2NhbGNfcGFkZGluZ194eShiYWNrX3RvcF9sZnQsIGZyb3RfdG9wX2xmdCwgcmF0aW9fWCk7XHJcbiAgICBsZXQgYnRyID0gX19jYWxjX3BhZGRpbmdfeHkoYmFja190b3Bfcmd0LCBmcm90X3RvcF9yZ3QsIHJhdGlvX1gpO1xyXG4gICAgbGV0IGJkbCA9IF9fY2FsY19wYWRkaW5nX3h5KGJhY2tfZHduX2xmdCwgZnJvdF9kd25fbGZ0LCByYXRpb19YKTtcclxuICAgIGxldCBiZHIgPSBfX2NhbGNfcGFkZGluZ194eShiYWNrX2R3bl9yZ3QsIGZyb3RfZHduX3JndCwgcmF0aW9fWCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmdGw6IGZ0bCwgZnRyOiBmdHIsXHJcbiAgICAgICAgZmRsOiBmZGwsIGZkcjogZmRyLFxyXG4gICAgICAgIGJ0bDogYnRsLCBidHI6IGJ0cixcclxuICAgICAgICBiZGw6IGJkbCwgYmRyOiBiZHIsXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gX19jYWxjX3BhZGRpbmdfeHkoZnJvdDogVF94eSwgYmFjazogVF94eSwgcmF0aW86IG51bWJlcik6IFRfeHkge1xyXG4gICAgICAgIC8vIOe3muWIhihBeCArIEIgPSB5KeOBruaWueeoi+W8j+OBruS/guaVsOOCkuaxguOCgeOCi1xyXG4gICAgICAgIGNvbnN0IEEgPSAoZnJvdC55IC0gYmFjay55KSAvIChmcm90LnggLSBiYWNrLngpO1xyXG4gICAgICAgIGNvbnN0IEIgPSAgZnJvdC55IC0gQSAqIGZyb3QueDtcclxuICAgIFxyXG4gICAgICAgIC8vIOODkeODh+OCo+ODs+OCsOiqv+aVtOW+jOOBrlhZ5bqn5qiZ44Gu6KiI566XXHJcbiAgICAgICAgY29uc3QgcF9mcm90X3ggPSBmcm90LnggKyAoYmFjay54IC0gZnJvdC54KSAqIHJhdGlvO1xyXG4gICAgICAgIGNvbnN0IHBfZnJvdF95ID0gQSAqIHBfZnJvdF94ICsgQjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHt4OiBwX2Zyb3RfeCwgeTogcF9mcm90X3l9O1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZHJvd19jZWxsX2Zsb29yKFxyXG4gICAgICAgIHJlY3RfZnJvdDogVF9XYWxsLCBcclxuICAgICAgICByZWN0X2JhY2s6IFRfV2FsbCwgXHJcbiAgICAgICAgZmlsbDogc3RyaW5nID0gJyM2NjY2ZmYnLCBcclxuICAgICAgICBsaW5lOiBzdHJpbmcgPSAnIzk5OTlmZidcclxuICAgICk6IHZvaWQge1xyXG5cclxuICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICB0bDoge3g6IHJlY3RfZnJvdC5taW5feCwgeTogcmVjdF9mcm90Lm1heF95fSxcclxuICAgICAgICB0cjoge3g6IHJlY3RfZnJvdC5tYXhfeCwgeTogcmVjdF9mcm90Lm1heF95fSxcclxuICAgICAgICBkcjoge3g6IHJlY3RfYmFjay5tYXhfeCwgeTogcmVjdF9iYWNrLm1heF95fSxcclxuICAgICAgICBkbDoge3g6IHJlY3RfYmFjay5taW5feCwgeTogcmVjdF9iYWNrLm1heF95fVxyXG4gICAgfVxyXG4gICAgZHJvd19jZWxsKHJlY3QsIGZpbGwsIGxpbmUpO1xyXG59XHJcbmZ1bmN0aW9uIGRyb3dfY2VsbF9jZWlsaW5nKFxyXG4gICAgICAgIHJlY3RfZnJvdDogVF9XYWxsLCBcclxuICAgICAgICByZWN0X2JhY2s6IFRfV2FsbCwgXHJcbiAgICAgICAgZmlsbDogc3RyaW5nID0gJyNhYWFhYWEnLCBcclxuICAgICAgICBsaW5lOiBzdHJpbmcgPSAnIzk5OTlmZidcclxuICAgICk6IHZvaWQge1xyXG5cclxuICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICB0bDoge3g6IHJlY3RfZnJvdC5taW5feCwgeTogcmVjdF9mcm90Lm1pbl95fSxcclxuICAgICAgICB0cjoge3g6IHJlY3RfZnJvdC5tYXhfeCwgeTogcmVjdF9mcm90Lm1pbl95fSxcclxuICAgICAgICBkcjoge3g6IHJlY3RfYmFjay5tYXhfeCwgeTogcmVjdF9iYWNrLm1pbl95fSxcclxuICAgICAgICBkbDoge3g6IHJlY3RfYmFjay5taW5feCwgeTogcmVjdF9iYWNrLm1pbl95fVxyXG4gICAgfVxyXG4gICAgZHJvd19jZWxsKHJlY3QsIGZpbGwsIGxpbmUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcm93X2NlbGwocjogVF9SZWN0LCBmaWxsOiBzdHJpbmd8bnVsbCwgbGluZTogc3RyaW5nfG51bGwpOiB2b2lkIHtcclxuICAgIGlmIChDX01hemVPYmpWaWV3LmNvbjNEID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGNvbnN0IGNvbiA9IENfTWF6ZU9ialZpZXcuY29uM0Q7XHJcblxyXG4gICAgY29uLmJlZ2luUGF0aCgpO1xyXG4gICAgY29uLm1vdmVUbyhyLnRsLngsIHIudGwueSk7XHJcbiAgICBjb24ubGluZVRvKHIudHIueCwgci50ci55KTtcclxuICAgIGNvbi5saW5lVG8oci5kci54LCByLmRyLnkpO1xyXG4gICAgY29uLmxpbmVUbyhyLmRsLngsIHIuZGwueSk7XHJcbiAgICBjb24uY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgaWYgKGZpbGwgIT0gbnVsbCkge1xyXG4gICAgICAgIGNvbi5maWxsU3R5bGUgICA9IGZpbGw7XHJcbiAgICAgICAgY29uLmZpbGwoKTtcclxuICAgIH1cclxuICAgIGlmIChsaW5lICE9PSBudWxsKSB7XHJcbiAgICAgICAgY29uLnN0cm9rZVN0eWxlID0gbGluZTtcclxuICAgICAgICBjb24ubGluZVdpZHRoICAgPSAxO1xyXG4gICAgICAgIGNvbi5zdHJva2UoKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfTG9jYXRpb24sIEpTT05fTG9jYXRpb24gfSBmcm9tIFwiLi9DX0xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IElfSlNPTl9VbmlxIH0gICAgICAgICAgICAgICBmcm9tIFwiLi9DX1NhdmVEYXRhXCI7XHJcbmltcG9ydCB7IF9nZXRfdXVpZCB9ICAgICAgICAgICAgICAgICBmcm9tIFwiLi4vZF91dGwvRl9SYW5kXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fTW92YWJsZVBvaW50IGV4dGVuZHMgSlNPTl9Mb2NhdGlvbiB7XHJcbiAgICB1bmlxX2lkPzogIHN0cmluZyxcclxuICAgIGN1cl91cmw/OiAgc3RyaW5nLFxyXG4gICAgdGVhbV91aWQ/OiBzdHJpbmcsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfbXZwdF9pbmZvKGE6IEpTT05fTW92YWJsZVBvaW50fHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoXCJNdlB0IEluZm86XCIgXHJcbiAgICAgICAgKyBcIlxcbnVuaXFfaWQ6ICBcIiAgKyAoYS51bmlxX2lkICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3VybDogIFwiICArIChhLmN1cl91cmwgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG50ZWFtX3VpZDogXCIgICsgKGEudGVhbV91aWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxja2Q6IFwiICAgICAgKyAoYS5raW5kICAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubGNubTogXCIgICAgICArIChhLm5hbWUgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sY2lkOiBcIiAgICAgICsgKGEubG9jX3VpZCAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl94OiBcIiAgICAgKyAoYS5sb2NfcG9zPy54ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3k6IFwiICAgICArIChhLmxvY19wb3M/LnkgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfejogXCIgICAgICsgKGEubG9jX3Bvcz8ueiA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl9kOiBcIiAgICAgKyAoYS5sb2NfcG9zPy5kID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ19Nb3ZhYmxlUG9pbnQgZXh0ZW5kcyBDX0xvY2F0aW9uIGltcGxlbWVudHMgSV9KU09OX1VuaXEge1xyXG4gICAgcHJvdGVjdGVkIHVuaXFfaWQ6ICBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgY3VyX3VybDogIHN0cmluZztcclxuICAgIHByb3RlY3RlZCB0ZWFtX3VpZDogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihqc29uPzogSlNPTl9Nb3ZhYmxlUG9pbnQpIHtcclxuICAgICAgICBzdXBlcihqc29uKTtcclxuICAgICAgICB0aGlzLnVuaXFfaWQgID0gJ012UG9pbnQjJyArIF9nZXRfdXVpZCgpO1xyXG4gICAgICAgIHRoaXMuY3VyX3VybCAgPSAnJztcclxuICAgICAgICB0aGlzLnRlYW1fdWlkID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBpZiAoanNvbiAhPT0gdW5kZWZpbmVkICYmIGpzb24gIT09IG51bGwpIHRoaXMuZGVjb2RlKGpzb24pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHVpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy51bmlxX2lkfVxyXG4gICAgcHVibGljIHVybCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5jdXJfdXJsfVxyXG4gICAgcHVibGljIHRpZCgpOiBzdHJpbmd8dW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudGVhbV91aWR9XHJcblxyXG4gICAgcHVibGljIG5ld191aWQoKTogdm9pZCB7dGhpcy51bmlxX2lkID0gJ012UG9pbnQjJyArIF9nZXRfdXVpZCgpO31cclxuICAgIHB1YmxpYyBzZXRfdXJsKHVybDogc3RyaW5nKTogdm9pZCB7IHRoaXMuY3VyX3VybCAgPSB1cmw7fVxyXG4gICAgcHVibGljIHNldF90aWQodGlkOiBzdHJpbmcpOiB2b2lkIHsgdGhpcy50ZWFtX3VpZCA9IHRpZDt9XHJcblxyXG4gICAgcHVibGljIGNsb25lKCk6IENfTW92YWJsZVBvaW50IHtcclxuICAgICAgICBjb25zdCBtdnB0ID0gbmV3IENfTW92YWJsZVBvaW50KHRoaXMuZW5jb2RlKCkpO1xyXG4gICAgICAgIG12cHQubmV3X3VpZCgpO1xyXG4gICAgICAgIHJldHVybiBtdnB0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmcm9tSlNPTih0eHQ6IHN0cmluZyk6IENfTW92YWJsZVBvaW50IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqID0gSlNPTi5wYXJzZSh0eHQpIGFzIEpTT05fTW92YWJsZVBvaW50O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGUoaik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdG9KU09OKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuZW5jb2RlKCksIG51bGwsIFwiXFx0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9Nb3ZhYmxlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0IGogPSBzdXBlci5lbmNvZGUoKSBhcyBKU09OX01vdmFibGVQb2ludDtcclxuICAgICAgICBqLnVuaXFfaWQgID0gdGhpcy51bmlxX2lkO1xyXG4gICAgICAgIGouY3VyX3VybCAgPSB0aGlzLmN1cl91cmw7XHJcbiAgICAgICAgai50ZWFtX3VpZCA9IHRoaXMudGVhbV91aWQgPz8gJyc7XHJcbiAgICAgICAgcmV0dXJuIGo7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo/OiBKU09OX01vdmFibGVQb2ludCk6IENfTW92YWJsZVBvaW50IHtcclxuICAgICAgICBzdXBlci5kZWNvZGUoaik7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKGoudW5pcV9pZCAgIT09IHVuZGVmaW5lZCkgdGhpcy51bmlxX2lkICA9IGoudW5pcV9pZDtcclxuICAgICAgICBpZiAoai5jdXJfdXJsICAhPT0gdW5kZWZpbmVkKSB0aGlzLmN1cl91cmwgID0gai5jdXJfdXJsO1xyXG4gICAgICAgIGlmIChqLnRlYW1fdWlkICE9PSB1bmRlZmluZWQpIHRoaXMudGVhbV91aWQgPSBqLnRlYW1fdWlkO1xyXG5cclxuICAgICAgICBpZiAodGhpcy50ZWFtX3VpZCA9PT0gJycpIHRoaXMudGVhbV91aWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIk12UHQgSW5mbzpcIiBcclxuICAgICAgICAgICAgKyBcIlxcbnVuaXFfaWQ6ICBcIiAgKyAodGhpcy51bmlxX2lkICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl91cmw6ICBcIiAgKyAodGhpcy5jdXJfdXJsICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnRlYW1fdWlkOiBcIiAgKyAodGhpcy50ZWFtX3VpZCAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxja2Q6IFwiICAgICAgKyAodGhpcy5sb2Nfa2luZCAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxjbm06IFwiICAgICAgKyAodGhpcy5sb2NfbmFtZSAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxjaWQ6IFwiICAgICAgKyAodGhpcy5sb2NfdWlkICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl94OiBcIiAgICAgKyAodGhpcy5sb2NfcG9zPy54ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl95OiBcIiAgICAgKyAodGhpcy5sb2NfcG9zPy55ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl96OiBcIiAgICAgKyAodGhpcy5sb2NfcG9zPy56ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl9kOiBcIiAgICAgKyAodGhpcy5sb2NfcG9zPy5kID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IElfSlNPTiwgSlNPTl9BbnkgfSBmcm9tIFwiLi9DX1NhdmVEYXRhXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fUG9pbnQgZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICB4PzogbnVtYmVyLFxyXG4gICAgeT86IG51bWJlcixcclxuICAgIHo/OiBudW1iZXIsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1BvaW50IGltcGxlbWVudHMgSV9KU09Oe1xyXG4gICAgcHVibGljIHg6IG51bWJlcjtcclxuICAgIHB1YmxpYyB5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgejogbnVtYmVyO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg/OiBudW1iZXJ8Q19Qb2ludHxKU09OX1BvaW50fHVuZGVmaW5lZCwgeT86IG51bWJlciwgej86IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHRoaXMueSA9IHRoaXMueiA9IC0zO1xyXG5cclxuICAgICAgICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IDA7IHRoaXMueSA9IDA7IHRoaXMueiA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB5ID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB6ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHg7IHRoaXMueSA9IHk7IHRoaXMueiA9IHo7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcIm9iamVjdFwiKSB7IFxyXG4gICAgICAgICAgICBpZiAoeCBpbnN0YW5jZW9mIENfUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMueCA9IHgueDsgdGhpcy55ID0geC55OyB0aGlzLnogPSB4Lno7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlY29kZSh4KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnggPSB0aGlzLnkgPSB0aGlzLnogPSAtMjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldF9wKCk6IENfUG9pbnQge3JldHVybiBuZXcgQ19Qb2ludCh0aGlzKX0gXHJcbiAgICBwdWJsaWMgc2V0X3AocDogQ19Qb2ludCk6IENfUG9pbnR8dW5kZWZpbmVkIHtcclxuICAgICAgICB0aGlzLnggPSBwLng7IHRoaXMueSA9IHAueTsgdGhpcy56ID0gcC56O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3aXRoaW4ocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAocC54ID09IHRoaXMueCAmJiBwLnkgPT0gdGhpcy55ICYmIHAueiA9PSB0aGlzLnopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1BvaW50IHtcclxuICAgICAgICByZXR1cm4ge3g6IHRoaXMueCwgeTogdGhpcy55LCB6OiB0aGlzLnp9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhPzogSlNPTl9Qb2ludCk6IENfUG9pbnQge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChhLnggPT09IHVuZGVmaW5lZCB8fCBhLnkgPT09IHVuZGVmaW5lZCB8fCBhLnogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgdGhpcy54ID0gYS54OyB0aGlzLnkgPSBhLnk7IHRoaXMueiA9IGEuejtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfUG9pbnQsIEpTT05fUG9pbnQgfSBmcm9tICcuL0NfUG9pbnQnO1xyXG5pbXBvcnQge1RfTWFrZUVudW1UeXBlfSAgICAgICAgZnJvbSBcIi4uL2RfdXRsL1RfTWFrZUVudW1UeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVF9EaXJlY3Rpb246e1tkaXI6IHN0cmluZ106IG51bWJlcn0gPSB7XHJcbiAgICBOOiAwLFxyXG4gICAgRTogMSxcclxuICAgIFM6IDIsXHJcbiAgICBXOiAzLFxyXG4gICAgWDogOTlcclxufSBhcyBjb25zdDtcclxuZXhwb3J0IHR5cGUgVF9EaXJlY3Rpb24gPSBUX01ha2VFbnVtVHlwZTx0eXBlb2YgVF9EaXJlY3Rpb24+O1xyXG5cclxuZnVuY3Rpb24gX2Rpcl9rZXkoZGlyOiBUX0RpcmVjdGlvbiB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoVF9EaXJlY3Rpb24pLmZpbmQoa2V5ID0+IFRfRGlyZWN0aW9uW2tleV0gPT09IGRpcikgPz8gXCI/Pz8/XCI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fUG9pbnREaXIgZXh0ZW5kcyBKU09OX1BvaW50IHtcclxuICAgIGQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9QRF9pbmZvKGE6IEpTT05fUG9pbnREaXJ8dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydChcIlBvaW50RGF0YSBJbmZvOlwiIFxyXG4gICAgICAgICsgXCJcXG54OiBcIiAgICAgKyAoYT8ueCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnk6IFwiICAgICArIChhPy55ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuejogXCIgICAgICsgKGE/LnogPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5kOiBcIiAgICAgKyAoYT8uZCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgIENfUG9pbnREaXIgZXh0ZW5kcyBDX1BvaW50IHtcclxuICAgIHB1YmxpYyBkOiBUX0RpcmVjdGlvbjtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihkPzogbnVtYmVyfFRfRGlyZWN0aW9ufENfUG9pbnREaXJ8SlNPTl9Qb2ludERpcikge1xyXG4gICAgICAgIHN1cGVyKGQpO1xyXG4gICAgICAgIHRoaXMuZCA9IFRfRGlyZWN0aW9uLlg7XHJcblxyXG4gICAgICAgIGlmIChkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGQgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5kID0gZCBhcyBUX0RpcmVjdGlvbjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGQgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgaWYgKGQgaW5zdGFuY2VvZiBDX1BvaW50RGlyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmQgPSBkLmQgYXMgVF9EaXJlY3Rpb247XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlY29kZShkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZCA9IFRfRGlyZWN0aW9uLlg7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9kX21iX25hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6ICByZXR1cm4gJ+WMlyc7XHJcbiAgICAgICAgICAgIGNhc2UgMTogIHJldHVybiAn5p2xJztcclxuICAgICAgICAgICAgY2FzZSAyOiAgcmV0dXJuICfljZcnO1xyXG4gICAgICAgICAgICBjYXNlIDM6ICByZXR1cm4gJ+ilvyc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAn6KyOJztcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X2QoKTogVF9EaXJlY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X2QoZDogVF9EaXJlY3Rpb24pOiBDX1BvaW50RGlyfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKCEoX2Rpcl9rZXkoZCkgaW4gVF9EaXJlY3Rpb24pKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZCA9IGQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BkKCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wZChkOiBDX1BvaW50RGlyfEpTT05fUG9pbnREaXIpOiBDX1BvaW50RGlyfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKGQgaW5zdGFuY2VvZiBDX1BvaW50RGlyKSB7XHJcbiAgICAgICAgICAgIGlmICghKF9kaXJfa2V5KGQuZCkgaW4gVF9EaXJlY3Rpb24pKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBzdXBlci5zZXRfcChkKTtcclxuICAgICAgICAgICAgdGhpcy5kID0gZC5kO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEoX2Rpcl9rZXkoZC5kKSBpbiBUX0RpcmVjdGlvbikpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5kZWNvZGUoZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1BvaW50RGlyIHtcclxuICAgICAgICBjb25zdCBqID0gc3VwZXIuZW5jb2RlKCkgYXMgSlNPTl9Qb2ludERpcjtcclxuICAgICAgICBqLmQgICAgID0gdGhpcy5kIGFzIG51bWJlcjtcclxuICAgICAgICByZXR1cm4gajtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoaj86IEpTT05fUG9pbnREaXIpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICBpZiAoaiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAoIShfZGlyX2tleShqLmQpIGluIFRfRGlyZWN0aW9uKSkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIHN1cGVyLmRlY29kZShqKTtcclxuICAgICAgICB0aGlzLmQgPSBqLmQgYXMgVF9EaXJlY3Rpb247XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIlBvaW50RGF0YSBJbmZvOlwiIFxyXG4gICAgICAgICAgICArIFwiXFxueDogXCIgICAgICsgKHRoaXMueCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG55OiBcIiAgICAgKyAodGhpcy55ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbno6IFwiICAgICArICh0aGlzLnogPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuZDogXCIgICAgICsgKHRoaXMuZCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBfbWF4LCBfbWluIH0gICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX01hdGhcIjtcclxuaW1wb3J0IHsgQ19Qb2ludCwgSlNPTl9Qb2ludCB9ICBmcm9tIFwiLi9DX1BvaW50XCI7XHJcbmltcG9ydCB7IEpTT05fQW55IH0gICAgICAgICAgICAgZnJvbSBcIi4vQ19TYXZlRGF0YVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX1JhbmdlIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgbWluPzogICBKU09OX1BvaW50LCBcclxuICAgIG1heD86ICAgSlNPTl9Qb2ludCwgXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1JhbmdlIHtcclxuICAgIHByb3RlY3RlZCBtaW46IENfUG9pbnQ7XHJcbiAgICBwcm90ZWN0ZWQgbWF4OiBDX1BvaW50O1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHAxOiBDX1BvaW50LCBwMjogQ19Qb2ludCkge1xyXG4gICAgICAgIHRoaXMubWluICA9IG5ldyBDX1BvaW50KDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMubWF4ICA9IG5ldyBDX1BvaW50KDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuX2luaXQocDEsIHAyKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfaW5pdChwMTogQ19Qb2ludCwgcDI6IENfUG9pbnQpOiBDX1JhbmdlIHtcclxuICAgICAgICBjb25zdCBtaW5feCA9IF9taW4oW3AxLngsIHAyLnhdKTtcclxuICAgICAgICBjb25zdCBtYXhfeCA9IF9tYXgoW3AxLngsIHAyLnhdKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWluX3kgPSBfbWluKFtwMS55LCBwMi55XSk7XHJcbiAgICAgICAgY29uc3QgbWF4X3kgPSBfbWF4KFtwMS55LCBwMi55XSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1pbl96ID0gX21pbihbcDEueiwgcDIuel0pO1xyXG4gICAgICAgIGNvbnN0IG1heF96ID0gX21heChbcDEueiwgcDIuel0pO1xyXG5cclxuICAgICAgICB0aGlzLm1pbiAgPSBuZXcgQ19Qb2ludChtaW5feCwgbWluX3ksIG1pbl96KTtcclxuICAgICAgICB0aGlzLm1heCAgPSBuZXcgQ19Qb2ludChtYXhfeCwgbWF4X3ksIG1heF96KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdpdGhpbihhOiBDX1JhbmdlfENfUG9pbnR8bnVtYmVyLCB5PzogbnVtYmVyLCB6PzogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB5ID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB6ID09PSBcIm51bWJlclwiKSB7IFxyXG4gICAgICAgICAgICBpZiAoIGEgPCB0aGlzLm1pbi54IHx8IGEgPiB0aGlzLm1heC54ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIHkgPCB0aGlzLm1pbi55IHx8IHkgPiB0aGlzLm1heC55ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIHogPCB0aGlzLm1pbi56IHx8IHogPiB0aGlzLm1heC56ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhID09PSBcIm9iamVjdFwiICYmIGEgaW5zdGFuY2VvZiBDX1BvaW50KSB7IFxyXG4gICAgICAgICAgICBjb25zdCBwID0gYSBhcyBDX1BvaW50O1xyXG4gICAgICAgICAgICBpZiAoIHAueCA8IHRoaXMubWluLnggfHwgcC54ID4gdGhpcy5tYXgueCApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCBwLnkgPCB0aGlzLm1pbi55IHx8IHAueSA+IHRoaXMubWF4LnkgKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggcC56IDwgdGhpcy5taW4ueiB8fCBwLnogPiB0aGlzLm1heC56ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhID09PSBcIm9iamVjdFwiICYmIGEgaW5zdGFuY2VvZiBDX1JhbmdlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBhIGFzIENfUmFuZ2U7XHJcbiAgICAgICAgICAgIGlmICggcC5taW5feCgpIDwgdGhpcy5taW4ueCB8fCBwLm1heF94KCkgPiB0aGlzLm1heC54ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIHAubWluX3koKSA8IHRoaXMubWluLnkgfHwgcC5tYXhfeSgpID4gdGhpcy5tYXgueSApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCBwLm1pbl96KCkgPCB0aGlzLm1pbi56IHx8IHAubWF4X3ooKSA+IHRoaXMubWF4LnogKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbWluX3goKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWluLng7fVxyXG4gICAgcHVibGljIG1heF94KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1heC54O31cclxuICAgIHB1YmxpYyBtaW5feSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5taW4ueTt9XHJcbiAgICBwdWJsaWMgbWF4X3koKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWF4Lnk7fVxyXG4gICAgcHVibGljIG1pbl96KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1pbi56O31cclxuICAgIHB1YmxpYyBtYXhfeigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tYXguejt9XHJcbiAgICBwdWJsaWMgc2l6ZV94KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4LnggLSB0aGlzLm1pbi54ICsgMTtcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgc2l6ZV95KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4LnkgLSB0aGlzLm1pbi55ICsgMTtcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgc2l6ZV96KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4LnogLSB0aGlzLm1pbi56ICsgMTtcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgZG9fYWxsX3h5eihmbjogKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpID0+IGJvb2xlYW4pIHtcclxuICAgICAgICBmb3IgKHZhciB6ID0gdGhpcy5taW4uejsgeiA8PSB0aGlzLm1heC56OyB6KysgKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSB0aGlzLm1pbi55OyB5IDw9IHRoaXMubWF4Lnk7IHkrKyApIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSB0aGlzLm1pbi54OyB5IDw9IHRoaXMubWF4Lng7IHgrKyApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZuKHgsIHksIHopKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZG9fYWxsX3AoZm46IChwOiBDX1BvaW50KSA9PiBib29sZWFuKSB7XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IHRoaXMubWluLno7IHogPD0gdGhpcy5tYXguejsgeisrICkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gdGhpcy5taW4ueTsgeSA8PSB0aGlzLm1heC55OyB5KysgKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gdGhpcy5taW4ueDsgeSA8PSB0aGlzLm1heC54OyB4KysgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmbihuZXcgQ19Qb2ludCh4LCB5LCB6KSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9SYW5nZSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbWluOiB0aGlzLm1pbi5lbmNvZGUoKSxcclxuICAgICAgICAgICAgbWF4OiB0aGlzLm1pbi5lbmNvZGUoKSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo6IEpTT05fUmFuZ2UpOiBDX1JhbmdlIHtcclxuICAgICAgICBpZiAoaiA9PT0gdW5kZWZpbmVkKSAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKGoubWluID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChqLm1heCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBjb25zdCBwMSA9IG5ldyBDX1BvaW50KGoubWluKTtcclxuICAgICAgICBjb25zdCBwMiA9IG5ldyBDX1BvaW50KGoubWF4KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5pdChwMSwgcDIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfTWF6ZSwgSlNPTl9NYXplLCBhbGVydF9tYXplX2luZm8gIH0gIGZyb20gXCIuL0NfTWF6ZVwiO1xyXG5pbXBvcnQgeyBDX0d1aWxkLCBKU09OX0d1aWxkLCBhbGVydF9ndWxkX2luZm8gfSBmcm9tIFwiLi9DX0d1aWxkXCI7XHJcbmltcG9ydCB7IENfTW92YWJsZVBvaW50LCBKU09OX01vdmFibGVQb2ludCwgYWxlcnRfbXZwdF9pbmZvIH0gZnJvbSBcIi4vQ19Nb3ZhYmxlUG9pbnRcIjtcclxuaW1wb3J0IHsgQ19UZWFtLCBKU09OX1RlYW0sIGFsZXJ0X3RlYW1faW5mbyAgfSAgZnJvbSBcIi4vQ19UZWFtXCI7XHJcblxyXG4vLyDjgrXjg7zjg5Djg7zlgbTjgajjgoTjgorjgajjgorjgZnjgotKU09O5b2i5byP44OH44O844K/44Gu44OG44Oz44OX44Os44O844OIXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9Bbnkge1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55XHJcbn1cclxuXHJcbi8vIOOCteODvOODkOODvOWBtOOBqOOChOOCiuOBqOOCiuOBmeOCi+OCr+ODqeOCueOBq+W/heimgeOBquODoeOCveODg+ODiVxyXG5leHBvcnQgaW50ZXJmYWNlIElfSlNPTiB7XHJcbiAgICBlbmNvZGU6ICgpPT5KU09OX0FueSxcclxuICAgIGRlY29kZTogKGo6SlNPTl9BbnkpPT5JX0pTT04sXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSV9KU09OX1VuaXEgZXh0ZW5kcyBJX0pTT04ge1xyXG4gICAgdWlkOiAoKT0+c3RyaW5nLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElfQWJzdHJhY3Qge1xyXG4gICAgbmV3T2JqOiAoaj86SlNPTl9BbnkpPT5JX0Fic3RyYWN0fHVuZGVmaW5lZCxcclxuICAgIGVuY29kZTogKCk9PkpTT05fQW55LFxyXG4vLyAgc3RhdGljIGRlY29kZTogKGo6SlNPTl9BbnkpPT5JX0pTT04sXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSV9KU09OX0NsYXNzIHtcclxuICAgIG5ldzogKGo/OiBKU09OX0FueSk9PklfSlNPTixcclxufVxyXG5cclxuLy8g44K144O844OQ44O85YG044Go44KE44KK5Y+W44KK44GZ44KL6Zqb44Gr6Ieq6Lqr44KS5paH5a2X5YiX5YyW44GZ44KL44Kv44Op44K544Gu44Oh44K944OD44OJXHJcbmV4cG9ydCBpbnRlcmZhY2UgSV9KU09OVmFsdWUgZXh0ZW5kcyBJX0pTT057XHJcbiAgICBmcm9tSlNPTjogKCk9PnZvaWQsXHJcbiAgICB0b0pTT046ICAgKCk9PnZvaWQsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9TYXZlRGF0YSBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIHNhdmVfaWQ/OiAgIG51bWJlcixcclxuICAgIHBsYXllcl9pZD86IG51bWJlciwgXHJcbiAgICB1bmlxX25vPzogICBudW1iZXIsXHJcbiAgICB0aXRsZT86ICAgICBzdHJpbmcsXHJcbiAgICBkZXRhaWw/OiAgICBzdHJpbmcsXHJcbiAgICBwb2ludD86ICAgICBzdHJpbmcsXHJcbiAgICBhdXRvX21vZGU/OiBzdHJpbmcsXHJcbiAgICBpc19hY3RpdmU/OiBzdHJpbmcsXHJcbiAgICBpc19kZWxldGU/OiBzdHJpbmcsXHJcbiAgICBzYXZlX3RpbWU/OiBzdHJpbmcsXHJcbiAgICBteXBvcz86ICAgICBKU09OX01vdmFibGVQb2ludCxcclxuXHJcbiAgICBhbGxfbXZwdD86ICBKU09OX01vdmFibGVQb2ludFtdLFxyXG4gICAgYWxsX21hemU/OiAgSlNPTl9NYXplW10sXHJcbiAgICBhbGxfdGVhbT86ICBKU09OX1RlYW1bXSxcclxuICAgIGFsbF9ndWxkPzogIEpTT05fR3VpbGRbXSxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X3NhdmVfaW5mbyhhOiBKU09OX1NhdmVEYXRhfHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoXCJTYXZlIEluZm86XCIgXHJcbiAgICAgICAgKyBcIlxcbnNhdmVfaWQ6ICAgIFwiICsgKGEuc2F2ZV9pZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxucGxheWVyX2lkOiAgXCIgKyAoYS5wbGF5ZXJfaWQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG51bmlxX25vOiAgICBcIiArIChhLnVuaXFfbm8gICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnRpdGxlOiAgICAgIFwiICsgKGEudGl0bGUgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuZGV0YWlsOiAgICAgXCIgKyAoYS5kZXRhaWwgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5wb2ludDogICAgICBcIiArIChhLnBvaW50ICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmF1dG9fbW9kZTogIFwiICsgKGEuYXV0b19tb2RlID8/ICc/JylcclxuICAgICAgICArIFwiXFxuaXNfYWN0aXZlOiAgXCIgKyAoYS5pc19hY3RpdmUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5pc19kZWxldGU6ICBcIiArIChhLmlzX2RlbGV0ZSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbm15dXJsOiAgICAgIFwiICsgKGEubXlwb3M/LmN1cl91cmwgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnRlYW1fdWlkOiAgIFwiICsgKGEubXlwb3M/LnRlYW1fdWlkICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxvY19raW5kOiAgIFwiICsgKGEubXlwb3M/LmtpbmQgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxvY19uYW1lOiAgIFwiICsgKGEubXlwb3M/Lm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxvY191aWQ6ICAgIFwiICsgKGEubXlwb3M/LmxvY191aWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbm12cHRfY291bnQ6IFwiICsgKGEuYWxsX212cHQ/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbm1hemVfY291bnQ6IFwiICsgKGEuYWxsX21hemU/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmd1bGRfY291bnQ6IFwiICsgKGEuYWxsX2d1bGQ/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnRlYW1fY291bnQ6IFwiICsgKGEuYWxsX3RlYW0/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfc2F2ZV9kZXRhaWwoYTogSlNPTl9TYXZlRGF0YXx1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICB0cnkgeyBcclxuLy8gICAgICAgIGFsZXJ0KFwiU2F2ZSBEZXRhaWwobXZwdCk6XCIpO1xyXG4gICAgICAgIGZvciAoY29uc3QgbXZwdCBvZiBhLmFsbF9tdnB0Pz9bXSkgYWxlcnRfbXZwdF9pbmZvKG12cHQpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7YWxlcnQoJ2FsZXJ0IG12cHQgZXJyb3I6ICcgKyBlcnIpfVxyXG5cclxuICAgIHRyeSB7IFxyXG4vLyAgICAgICAgYWxlcnQoXCJTYXZlIERldGFpbCh0ZWFtKTpcIik7XHJcbiAgICAgICAgZm9yIChjb25zdCB0ZWFtIG9mIGEuYWxsX3RlYW0/P1tdKSBhbGVydF90ZWFtX2luZm8odGVhbSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHthbGVydCgnYWxlcnQgdGVhbSBlcnJvcjogJyArIGVycil9XHJcblxyXG4gICAgdHJ5IHsgXHJcbi8vICAgICAgICBhbGVydChcIlNhdmUgRGV0YWlsKG1hemUpOlwiKTtcclxuICAgICAgICBmb3IgKGNvbnN0IG1hemUgb2YgYS5hbGxfbWF6ZT8/W10pIGFsZXJ0X21hemVfaW5mbyhtYXplKTtcclxuICAgIH0gY2F0Y2ggKGVycikge2FsZXJ0KCdhbGVydCBtYXplIGVycm9yOiAnICsgZXJyKX1cclxuXHJcbiAgICB0cnkgeyBcclxuLy8gICAgICAgIGFsZXJ0KFwiU2F2ZSBEZXRhaWwoZ3VsZCk6XCIpO1xyXG4gICAgICAgIGZvciAoY29uc3QgZ3VsZCBvZiBhLmFsbF9ndWxkPz9bXSkgYWxlcnRfZ3VsZF9pbmZvKGd1bGQpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7YWxlcnQoJ2FsZXJ0IGd1bGQgZXJyb3I6ICcgKyBlcnIpfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENfU2F2ZURhdGEgaW1wbGVtZW50cyBJX0pTT04ge1xyXG4gICAgcHVibGljIHNhdmVfaWQ6ICAgbnVtYmVyO1xyXG4gICAgcHVibGljIHBsYXllcl9pZDogbnVtYmVyOyBcclxuICAgIHB1YmxpYyB1bmlxX25vOiAgIG51bWJlcjtcclxuICAgIHB1YmxpYyB0aXRsZTogICAgIHN0cmluZztcclxuICAgIHB1YmxpYyBkZXRhaWw6ICAgIHN0cmluZztcclxuICAgIHB1YmxpYyBwb2ludDogICAgIHN0cmluZztcclxuICAgIHB1YmxpYyBhdXRvX21vZGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaXNfYWN0aXZlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlzX2RlbGV0ZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBzYXZlX3RpbWU6IERhdGU7XHJcbiAgICBwdWJsaWMgbXlwb3M6ICAgICBDX01vdmFibGVQb2ludDtcclxuXHJcbiAgICBwdWJsaWMgYWxsX212cHQ6ICB7W3VpZDogc3RyaW5nXTogQ19Nb3ZhYmxlUG9pbnR9O1xyXG4gICAgcHVibGljIGFsbF9tYXplOiAge1t1aWQ6IHN0cmluZ106IENfTWF6ZX07XHJcbiAgICBwdWJsaWMgYWxsX3RlYW06ICB7W3VpZDogc3RyaW5nXTogQ19UZWFtfTtcclxuICAgIHB1YmxpYyBhbGxfZ3VsZDogIHtbdWlkOiBzdHJpbmddOiBDX0d1aWxkfTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYT86IEpTT05fU2F2ZURhdGEpIHtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgICA9IC0xO1xyXG4gICAgICAgIHRoaXMucGxheWVyX2lkID0gLTE7IFxyXG4gICAgICAgIHRoaXMudW5pcV9ubyAgID0gLTE7XHJcbiAgICAgICAgdGhpcy50aXRsZSAgICAgPSAnJztcclxuICAgICAgICB0aGlzLmRldGFpbCAgICA9ICcnO1xyXG4gICAgICAgIHRoaXMucG9pbnQgICAgID0gJyc7XHJcbiAgICAgICAgdGhpcy5hdXRvX21vZGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzX2FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc19kZWxldGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNhdmVfdGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdGhpcy5teXBvcyAgICAgPSBuZXcgQ19Nb3ZhYmxlUG9pbnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbGxfbXZwdCAgPSB7fTtcclxuICAgICAgICB0aGlzLmFsbF9tYXplICA9IHt9O1xyXG4gICAgICAgIHRoaXMuYWxsX3RlYW0gID0ge31cclxuICAgICAgICB0aGlzLmFsbF9ndWxkICA9IHt9O1xyXG5cclxuICAgICAgICBpZiAoYSAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5ldyhhPzogSlNPTl9TYXZlRGF0YSk6IENfU2F2ZURhdGEge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ19TYXZlRGF0YShhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fU2F2ZURhdGEge1xyXG4gICAgICAgIGxldCBzYXZlX2RhdGU6IHN0cmluZztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzYXZlX2RhdGUgPSB0aGlzLnNhdmVfdGltZS50b0lTT1N0cmluZygpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBzYXZlX2RhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2F2ZV9pZDogICB0aGlzLnNhdmVfaWQsIFxyXG4gICAgICAgICAgICAgICAgcGxheWVyX2lkOiB0aGlzLnBsYXllcl9pZCwgIFxyXG4gICAgICAgICAgICAgICAgdW5pcV9ubzogICB0aGlzLnVuaXFfbm8sIFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICAgICB0aGlzLnRpdGxlLCBcclxuICAgICAgICAgICAgICAgIGRldGFpbDogICAgdGhpcy5kZXRhaWwsIFxyXG4gICAgICAgICAgICAgICAgcG9pbnQ6ICAgICB0aGlzLnBvaW50LCBcclxuICAgICAgICAgICAgICAgIGF1dG9fbW9kZTogdGhpcy5hdXRvX21vZGUgPyAnMScgOiAnMCcsIFxyXG4gICAgICAgICAgICAgICAgaXNfYWN0aXZlOiB0aGlzLmlzX2FjdGl2ZSA/ICcxJyA6ICcwJywgXHJcbiAgICAgICAgICAgICAgICBpc19kZWxldGU6IHRoaXMuaXNfZGVsZXRlID8gJzEnIDogJzAnLCBcclxuICAgICAgICAgICAgICAgIHNhdmVfdGltZTogc2F2ZV9kYXRlLCBcclxuICAgICAgICAgICAgICAgIG15cG9zOiAgICAgdGhpcy5teXBvcy5lbmNvZGUoKSxcclxuXHJcbiAgICAgICAgICAgICAgICBhbGxfbXZwdDogIHRoaXMuX2VuY29kZV9hbGxfZGF0YSh0aGlzLmFsbF9tdnB0KSwgXHJcbiAgICAgICAgICAgICAgICBhbGxfbWF6ZTogIHRoaXMuX2VuY29kZV9hbGxfZGF0YSh0aGlzLmFsbF9tYXplKSwgXHJcbiAgICAgICAgICAgICAgICBhbGxfdGVhbTogIHRoaXMuX2VuY29kZV9hbGxfZGF0YSh0aGlzLmFsbF90ZWFtKSwgXHJcbiAgICAgICAgICAgICAgICBhbGxfZ3VsZDogIHRoaXMuX2VuY29kZV9hbGxfZGF0YSh0aGlzLmFsbF9ndWxkKSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBhbGVydCgnU2F2ZURhdGEgRW5jb2RlIEVycm9yOiAnICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfZW5jb2RlX2FsbF9kYXRhKGFsbF9kYXRhOiB7W3VpZDpzdHJpbmddOklfSlNPTn0pOiBKU09OX0FueVtdIHtcclxuICAgICAgICBjb25zdCBhbGxfSlNPTjogSlNPTl9BbnlbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gYWxsX2RhdGEpIGFsbF9KU09OLnB1c2goYWxsX2RhdGFbaV0uZW5jb2RlKCkpO1xyXG4gICAgICAgIHJldHVybiBhbGxfSlNPTjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVjb2RlKHM6IEpTT05fU2F2ZURhdGEpOiBDX1NhdmVEYXRhIHtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgICA9IHMuc2F2ZV9pZCAgID8/IHRoaXMuc2F2ZV9pZDtcclxuICAgICAgICB0aGlzLnBsYXllcl9pZCA9IHMucGxheWVyX2lkID8/IHRoaXMucGxheWVyX2lkOyBcclxuICAgICAgICB0aGlzLnVuaXFfbm8gICA9IHMudW5pcV9ubyAgID8/IHRoaXMudW5pcV9ubztcclxuICAgICAgICB0aGlzLnRpdGxlICAgICA9IHMudGl0bGUgICAgID8/IHRoaXMudGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXRhaWwgICAgPSBzLmRldGFpbCAgICA/PyB0aGlzLmRldGFpbDtcclxuICAgICAgICB0aGlzLnBvaW50ICAgICA9IHMucG9pbnQgICAgID8/IHRoaXMucG9pbnQ7XHJcbiAgICAgICAgaWYgKHMuYXV0b19tb2RlID09PSB1bmRlZmluZWQpIHRoaXMuYXV0b19tb2RlOyBlbHNlIHMuYXV0b19tb2RlICE9PSAnMCcgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKHMuaXNfYWN0aXZlID09PSB1bmRlZmluZWQpIHRoaXMuaXNfYWN0aXZlOyBlbHNlIHMuaXNfYWN0aXZlICE9PSAnMCcgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKHMuaXNfZGVsZXRlID09PSB1bmRlZmluZWQpIHRoaXMuaXNfZGVsZXRlOyBlbHNlIHMuaXNfZGVsZXRlICE9PSAnMCcgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKHMuc2F2ZV90aW1lICE9PSB1bmRlZmluZWQpIHRoaXMuc2F2ZV90aW1lID0gbmV3IERhdGUocy5zYXZlX3RpbWUpOyBcclxuICAgICAgICBpZiAocy5teXBvcyAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teXBvcy5kZWNvZGUocy5teXBvcyk7IFxyXG5cclxuICAgICAgICBpZiAocy5hbGxfbXZwdCAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsbF9tdnB0ID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl9tdnB0IG9mIHMuYWxsX212cHQpIHtcclxuICAgICAgICAgICAgICAgICBjb25zdCBtdnB0ID0gKG5ldyBDX01vdmFibGVQb2ludCgpKS5kZWNvZGUoanNvbl9tdnB0KTsgXHJcbiAgICAgICAgICAgICAgICAgdGhpcy5hbGxfbXZwdFttdnB0LnVpZCgpXSA9IG12cHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIGlmIChzLmFsbF9tYXplICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsX21hemUgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqc29uX21hemUgb2Ygcy5hbGxfbWF6ZSkge1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IG1hemUgPSAobmV3IENfTWF6ZSgpKS5kZWNvZGUoanNvbl9tYXplKTsgXHJcbiAgICAgICAgICAgICAgICAgdGhpcy5hbGxfbWF6ZVttYXplLnVpZCgpXSA9IG1hemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIGlmIChzLmFsbF90ZWFtICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsX3RlYW0gPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqc29uX3RlYW0gb2Ygcy5hbGxfdGVhbSkge1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IHRlYW0gPSAobmV3IENfVGVhbSgpKS5kZWNvZGUoanNvbl90ZWFtKTsgXHJcbiAgICAgICAgICAgICAgICAgdGhpcy5hbGxfdGVhbVt0ZWFtLnVpZCgpXSA9IHRlYW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIGlmIChzLmFsbF9ndWxkICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsX2d1bGQgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqc29uX2d1bGQgb2Ygcy5hbGxfZ3VsZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3VsZCA9IChuZXcgQ19HdWlsZCgpKS5kZWNvZGUoanNvbl9ndWxkKTsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbF9ndWxkW2d1bGQudWlkKCldID0gZ3VsZDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGFsZXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiU2F2ZSBJbmZvOlwiIFxyXG4gICAgICAgICAgICArIFwiXFxuc2F2ZV9pZDogICAgXCIgKyAodGhpcy5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxucGxheWVyX2lkOiAgXCIgKyAodGhpcy5wbGF5ZXJfaWQgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudW5pcV9ubzogICAgXCIgKyAodGhpcy51bmlxX25vICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudGl0bGU6ICAgICAgXCIgKyAodGhpcy50aXRsZSAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuZGV0YWlsOiAgICAgXCIgKyAodGhpcy5kZXRhaWwgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxucG9pbnQ6ICAgICAgXCIgKyAodGhpcy5wb2ludCAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuYXV0b19tb2RlOiAgXCIgKyAodGhpcy5hdXRvX21vZGU/J1knOidOJylcclxuICAgICAgICAgICAgKyBcIlxcbmlzX2FjdGl2ZTogIFwiICsgKHRoaXMuaXNfYWN0aXZlPydZJzonTicpXHJcbiAgICAgICAgICAgICsgXCJcXG5pc19kZWxldGU6ICBcIiArICh0aGlzLmlzX2RlbGV0ZT8nWSc6J04nKVxyXG4gICAgICAgICAgICArIFwiXFxubXl1cmw6ICAgICAgXCIgKyAodGhpcy5teXBvcy51cmwoKSAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnRlYW1fdWlkOiAgIFwiICsgKHRoaXMubXlwb3MudGlkKCkgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sb2Nfa2luZDogICBcIiArICh0aGlzLm15cG9zLmdldF9sY2tkKCkgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubG9jX25hbWU6ICAgXCIgKyAodGhpcy5teXBvcy5nZXRfbmFtZSgpID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxvY191aWQ6ICAgIFwiICsgKHRoaXMubXlwb3MuZ2V0X3VpZCgpICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5tdnB0X2NvdW50OiBcIiArICh0aGlzLmFsbF9tdnB0Py5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubWF6ZV9jb3VudDogXCIgKyAodGhpcy5hbGxfbWF6ZT8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmd1bGRfY291bnQ6IFwiICsgKHRoaXMuYWxsX2d1bGQ/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG50ZWFtX2NvdW50OiBcIiArICh0aGlzLmFsbF90ZWFtPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhbGVydF9kZXRhaWwoKTogdm9pZCB7XHJcbiAgICAgICAgdHJ5IHsgXHJcbi8vICAgICAgICAgICAgYWxlcnQoXCJTYXZlIERldGFpbChtdnB0KTpcIik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWkgaW4gdGhpcy5hbGxfbXZwdCkgdGhpcy5hbGxfbXZwdFtpaV0uYWxlcnQoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHthbGVydCgnYWxlcnQgbXZwdCBlcnJvcjogJyArIGVycil9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHRyeSB7IFxyXG4vLyAgICAgICAgICAgIGFsZXJ0KFwiU2F2ZSBEZXRhaWwodGVhbSk6XCIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHRoaXMuYWxsX3RlYW0pIHRoaXMuYWxsX3RlYW1baWldLmFsZXJ0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7YWxlcnQoJ2FsZXJ0IHRlYW0gZXJyb3I6ICcgKyBlcnIpfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB0cnkgeyBcclxuLy8gICAgICAgICAgICBhbGVydChcIlNhdmUgRGV0YWlsKG1hemUpOlwiKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpaSBpbiB0aGlzLmFsbF9tYXplKSB0aGlzLmFsbF9tYXplW2lpXS5hbGVydCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge2FsZXJ0KCdhbGVydCBtYXplIGVycm9yOiAnICsgZXJyKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgdHJ5IHsgXHJcbi8vICAgICAgICAgICAgYWxlcnQoXCJTYXZlIERldGFpbChndWxkKTpcIik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWkgaW4gdGhpcy5hbGxfZ3VsZCkgdGhpcy5hbGxfZ3VsZFtpaV0uYWxlcnQoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHthbGVydCgnYWxlcnQgZ3VsZCBlcnJvcjogJyArIGVycil9XHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ19Qb2ludCB9ICAgICAgICAgICAgICAgZnJvbSBcIi4vQ19Qb2ludFwiO1xyXG5pbXBvcnQgeyBDX1BvaW50RGlyIH0gICAgICAgICAgICBmcm9tICcuL0NfUG9pbnREaXInO1xyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCB9ICAgICAgICBmcm9tIFwiLi9DX01vdmFibGVQb2ludFwiO1xyXG5pbXBvcnQgeyBDX1dhbGtlciwgSlNPTl9XYWxrZXIgfSBmcm9tIFwiLi9DX1dhbGtlclwiO1xyXG5pbXBvcnQgeyBDX0dvb2RzLCAgSlNPTl9Hb29kcyB9ICBmcm9tICcuL0NfR29vZHMnO1xyXG5pbXBvcnQgeyBDX0hlcm8sIEpTT05fSGVybyB9ICAgICBmcm9tIFwiLi9DX0hlcm9cIjtcclxuaW1wb3J0IHsgSV9NYXplT2JqIH0gICAgICAgICAgICAgZnJvbSBcIi4vQ19NYXplT2JqXCI7XHJcbmltcG9ydCB7IEpTT05fQW55IH0gICAgICAgICAgICAgIGZyb20gXCIuL0NfU2F2ZURhdGFcIjtcclxuaW1wb3J0IHsgQ19DdXJyZW50VGVhbVZpZXcgfSAgICAgZnJvbSBcIi4vQ19UZWFtVmlld1wiO1xyXG5pbXBvcnQgeyBDX01hemVPYmpWaWV3LCBJX01hemVPYmpWaWV3LCBKU09OX01hemVPYmpWaWV3IH0gIGZyb20gXCIuL0NfTWF6ZU9ialZpZXdcIjtcclxuaW1wb3J0IHsgX2dldF91dWlkIH0gICAgICAgICAgICAgZnJvbSBcIi4uL2RfdXRsL0ZfUmFuZFwiO1xyXG5pbXBvcnQgeyBDX0dvb2RzSXRlbSwgVF9Hb29kc0tpbmQgfSBmcm9tIFwiLi9DX0dvb2RzSXRlbVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX1RlYW0gZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBpZD86ICAgICAgICBudW1iZXIsIFxyXG4gICAgdW5pcV9pZD86ICAgc3RyaW5nLCBcclxuICAgIHNhdmVfaWQ/OiAgIG51bWJlciwgXHJcbiAgICBuYW1lPzogICAgICBzdHJpbmcsIFxyXG4gICAgbG9jYXRlPzogICAgSlNPTl9XYWxrZXIsXHJcbiAgICBnb29kcz86ICAgICBKU09OX0dvb2RzLFxyXG4gICAgaGVyb2VzPzogICAgSlNPTl9IZXJvW10sIFxyXG4gICAgbW90aW9uPzogICAgc3RyaW5nLFxyXG4gICAgdmlldz86ICAgICAgSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF90ZWFtX2luZm8oYTogSlNPTl9UZWFtfHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoXCJUZWFtIEluZm86XCIgXHJcbiAgICAgICAgKyBcIlxcbmlkOiAgICBcIiAgICAgKyAoYS5pZCAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG51bmlxX2lkOiAgXCIgICsgKGEudW5pcV9pZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubmFtZTogIFwiICAgICArIChhLm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNhdmVfaWQ6IFwiICAgKyAoYS5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG51cmw6ICBcIiAgICAgICsgKGEubG9jYXRlPy5jdXJfdXJsICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubGNrZDogXCIgICAgICArIChhLmxvY2F0ZT8ua2luZCAgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxjbm06IFwiICAgICAgKyAoYS5sb2NhdGU/Lm5hbWUgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sY2lkOiBcIiAgICAgICsgKGEubG9jYXRlPy5sb2NfdWlkICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3g6IFwiICAgICArIChhLmxvY2F0ZT8ubG9jX3Bvcz8ueCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl95OiBcIiAgICAgKyAoYS5sb2NhdGU/LmxvY19wb3M/LnkgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfejogXCIgICAgICsgKGEubG9jYXRlPy5sb2NfcG9zPy56ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX2Q6IFwiICAgICArIChhLmxvY2F0ZT8ubG9jX3Bvcz8uZCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmdvb2RzOiBcIiAgICAgKyAoT2JqZWN0LmtleXMoYS5nb29kcz8/W10pLmxlbmd0aClcclxuICAgICAgICArIFwiXFxuaGVyb2VzOiBcIiAgICArIChhLmhlcm9lcz8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcblxyXG4vLyAgICBpZiAoYS5oZXJvZXMgIT09IHVuZGVmaW5lZCkgYWxlcnRfaGVyb2VzX2luZm8oYS5oZXJvZXMpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENfVGVhbSBpbXBsZW1lbnRzIElfTWF6ZU9iaiB7XHJcbiAgICBwdWJsaWMgc3RhdGljIG5ld09iaihqPzogSlNPTl9UZWFtKTogQ19UZWFtIHtcclxuICAgICAgICByZXR1cm4gbmV3IENfVGVhbShqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBuZXdPYmooaj86IEpTT05fVGVhbSk6IENfVGVhbSB7cmV0dXJuIENfVGVhbS5uZXdPYmooaik7fVxyXG5cclxuICAgIHByb3RlY3RlZCBteV9pZDogICAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBteV9uYW1lOiAgIHN0cmluZztcclxuICAgIHByb3RlY3RlZCB1bmlxX2lkOiAgIHN0cmluZztcclxuICAgIHByb3RlY3RlZCBzYXZlX2lkOiAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCB3YWxrZXI6ICAgIENfV2Fsa2VyO1xyXG4gICAgcHJvdGVjdGVkIGdvbGQ6ICAgICAgQ19Hb29kc0l0ZW07XHJcbiAgICBwcm90ZWN0ZWQgaGVyb2VzOiAgICB7W3VpZDogc3RyaW5nXTogQ19IZXJvfTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgbXlWaWV3OiAgICBJX01hemVPYmpWaWV3fHVuZGVmaW5lZDtcclxuICAgIHByb3RlY3RlZCBob3BlX21vdGlvbjogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9UZWFtKSB7XHJcblxyXG4gICAgICAgIHRoaXMubXlfaWQgICAgID0gIDA7XHJcbiAgICAgICAgdGhpcy5teV9uYW1lICAgPSAnTmVvIFRlYW0/JztcclxuICAgICAgICB0aGlzLnVuaXFfaWQgICA9ICdtYWlfdGVhbSMnICsgX2dldF91dWlkKCk7XHJcbiAgICAgICAgdGhpcy5zYXZlX2lkICAgPSAgMDtcclxuXHJcbiAgICAgICAgdGhpcy5teVZpZXcgPSBuZXcgQ19DdXJyZW50VGVhbVZpZXcodGhpcykgYXMgSV9NYXplT2JqVmlldztcclxuICAgICAgICB0aGlzLndhbGtlciA9IG5ldyBDX1dhbGtlcigpO1xyXG4gICAgICAgIHRoaXMud2Fsa2VyLnNldF90aWQodGhpcy51aWQoKSk7XHJcblxyXG4gICAgICAgIHRoaXMuZ29sZCAgID0gbmV3IENfR29vZHNJdGVtKHtna2luZDogVF9Hb29kc0tpbmQuR29sZCwgdmFsdWU6IDB9KTtcclxuICAgICAgICB0aGlzLmhlcm9lcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuaG9wZV9tb3Rpb24gPSAnTk9QJzsgICAgXHJcbiAgICAgICAgaWYgKGogIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BycChhcmcgOiBKU09OX1RlYW0pIHtcclxuICAgICAgICB0aGlzLmRlY29kZShhcmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1aWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudW5pcV9pZH1cclxuXHJcbiAgICBwdWJsaWMgd2l0aGluKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBoZXJlID0gdGhpcy53YWxrZXI/LmdldF9wKCk7XHJcbiAgICAgICAgcmV0dXJuIGhlcmU/LndpdGhpbihwKSA/PyBmYWxzZTsgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpZXcoKTogIElfTWF6ZU9ialZpZXd8dW5kZWZpbmVkIHtyZXR1cm4gdGhpcy5teVZpZXd9XHJcbiAgICBwdWJsaWMgd2FsaygpOiAgQ19XYWxrZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndhbGtlclxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgY2FuVGhyb3VnaCgpOiBib29sZWFuIHtyZXR1cm4gdHJ1ZX1cclxuXHJcblxyXG4gICAgcHVibGljIGhyZXMoKTogIENfSGVyb1tdIHtcclxuICAgICAgICBjb25zdCBocmVzOiBDX0hlcm9bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGlpIGluIHRoaXMuaGVyb2VzKSBocmVzLnB1c2godGhpcy5oZXJvZXNbaWldKTtcclxuICAgICAgICByZXR1cm4gaHJlcztcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgY2xlYXJfaHJlcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlcm9lcyA9IHt9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFkZF9oZXJvKGhlcm86IENfSGVybyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGVyb2VzW2hlcm8udWlkKCldID0gaGVybztcclxuICAgIH1cclxuICAgIHB1YmxpYyBybXZfaGVybyhoZXJvOiBDX0hlcm8pOiB2b2lkIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5oZXJvZXNbaGVyby51aWQoKV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldF9sb2MoKTogQ19Nb3ZhYmxlUG9pbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndhbGtlcjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfbG9jKGxvYzogQ19Nb3ZhYmxlUG9pbnQpOiB2b2lkIHtcclxuICAgICAgICAodGhpcy53YWxrZXIgPz89IG5ldyBDX1dhbGtlcigpKS5kZWNvZGUobG9jLmVuY29kZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X3BkKCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndhbGtlci5nZXRfcGQoKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9UZWFtIHtcclxuICAgICAgICB0aGlzLmdldF9sb2MoKTsgLy8gTG9jYXRpb27mg4XloLHjgpLmnIDmlrDjgavmm7TmlrBcclxuXHJcbiAgICAgICAgY29uc3QganNvbl9oZXJvZXM6IEpTT05fSGVyb1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaWkgaW4gdGhpcy5oZXJvZXMpIGpzb25faGVyb2VzLnB1c2godGhpcy5oZXJvZXNbaWldLmVuY29kZSgpKTsgIFxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogICAgICAgIHRoaXMubXlfaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICAgICAgdGhpcy5teV9uYW1lLFxyXG4gICAgICAgICAgICB1bmlxX2lkOiAgIHRoaXMudW5pcV9pZCxcclxuICAgICAgICAgICAgc2F2ZV9pZDogICB0aGlzLnNhdmVfaWQsXHJcbiAgICAgICAgICAgIGxvY2F0ZTogICAgdGhpcy53YWxrZXIuZW5jb2RlKCksXHJcbiAgICAgICAgICAgIGdvbGQ6ICAgICAgdGhpcy5nb2xkLmVuY29kZSgpLFxyXG4gICAgICAgICAgICBoZXJvZXM6ICAgIGpzb25faGVyb2VzLFxyXG4gICAgICAgICAgICBtb3Rpb246ICAgIHRoaXMuaG9wZV9tb3Rpb24sXHJcbiAgICAgICAgICAgIHZpZXc6ICAgICAgdGhpcy5teVZpZXc/LmVuY29kZSgpID8/IHt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IEpTT05fVGVhbXx1bmRlZmluZWQpOiBDX1RlYW0ge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpICByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGEuaWQgICAhPT0gdW5kZWZpbmVkKSAgICB0aGlzLm15X2lkICAgICAgID0gYS5pZDtcclxuICAgICAgICBpZiAoYS5uYW1lICE9PSB1bmRlZmluZWQpICAgIHRoaXMubXlfbmFtZSAgICAgPSBhLm5hbWU7XHJcbiAgICAgICAgaWYgKGEudW5pcV9pZCAhPT0gdW5kZWZpbmVkKSB0aGlzLnVuaXFfaWQgICAgID0gYS51bmlxX2lkO1xyXG4gICAgICAgIGlmIChhLnNhdmVfaWQgIT09IHVuZGVmaW5lZCkgdGhpcy5zYXZlX2lkICAgICA9IGEuc2F2ZV9pZDtcclxuICAgICAgICBpZiAoYS5tb3Rpb24gIT09IHVuZGVmaW5lZCkgIHRoaXMuaG9wZV9tb3Rpb24gPSBhLm1vdGlvbjtcclxuXHJcbiAgICAgICAgaWYgKGEubG9jYXRlICE9PSB1bmRlZmluZWQpICB0aGlzLndhbGtlci5kZWNvZGUoYS5sb2NhdGUpO1xyXG4gICAgICAgIGlmIChhLmdvbGQgICAhPT0gdW5kZWZpbmVkKSAgdGhpcy5nb2xkLmRlY29kZShhLmdvbGQpO1xyXG5cclxuICAgICAgICBpZiAoYS5oZXJvZXMgIT09IHVuZGVmaW5lZCkgIHtcclxuICAgICAgICAgICAgdGhpcy5oZXJvZXMgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqc29uX2hlcm8gb2YgYS5oZXJvZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlcm8gPSBuZXcgQ19IZXJvKGpzb25faGVybyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlcm9lc1toZXJvLnVpZCgpXSA9IGhlcm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbi8qXHJcbiAgICAgICAgaWYgKGEudmlldyAgICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhhLnZpZXcpLmxlbmd0aCA+IDApIHRoaXMubXlWaWV3ID0gQ19NYXplT2JqVmlldy5uZXdPYmooYS52aWV3KTsgXHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5teVZpZXcgPSBuZXcgQ19DdXJyZW50VGVhbVZpZXcodGhpcykgYXMgSV9NYXplT2JqVmlldzsgXHJcbiAgICAgICAgfVxyXG4qL1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBlbmNvZGVfYWxsKGFsbF90ZWFtOiBDX1RlYW1bXSk6IEpTT05fVGVhbVtdIHtcclxuICAgICAgICBjb25zdCBhbGxfdGVhbV9kYXRhOiBKU09OX1RlYW1bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHRlYW0gb2YgYWxsX3RlYW0pIHtcclxuICAgICAgICAgICAgYWxsX3RlYW1fZGF0YS5wdXNoKHRlYW0uZW5jb2RlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsX3RlYW1fZGF0YTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVjb2RlX2FsbChhbGxfdGVhbV9kYXRhOiBKU09OX1RlYW1bXSk6IENfVGVhbVtdIHtcclxuICAgICAgICBjb25zdCBhbGxfdGVhbTogQ19UZWFtW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB0ZWFtX2RhdGEgb2YgYWxsX3RlYW1fZGF0YSkge1xyXG4gICAgICAgICAgICBhbGxfdGVhbS5wdXNoKChuZXcgQ19UZWFtKCkpLmRlY29kZSh0ZWFtX2RhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbF90ZWFtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWxlcnQoKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJUZWFtIEluZm86XCIgXHJcbiAgICAgICAgICAgICsgXCJcXG5pZDogICAgXCIgICAgICsgKHRoaXMubXlfaWQgICAgICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG51bmlxX2lkOiAgXCIgICsgKHRoaXMudW5pcV9pZCAgICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5uYW1lOiAgXCIgICAgICsgKHRoaXMubXlfbmFtZSAgICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zYXZlX2lkOiBcIiAgICsgKHRoaXMuc2F2ZV9pZCAgICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG51cmw6ICBcIiAgICAgICsgKHRoaXMud2Fsa2VyLnVybCgpICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sY2tkOiBcIiAgICAgICsgKHRoaXMud2Fsa2VyLmdldF9sY2tkX3N0cigpID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxjbm06IFwiICAgICAgKyAodGhpcy53YWxrZXIuZ2V0X25hbWUoKSAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubGNpZDogXCIgICAgICArICh0aGlzLndhbGtlci5nZXRfdWlkKCkgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfeDogXCIgICAgICsgKHRoaXMud2Fsa2VyLmdldF9wKCkueCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfeTogXCIgICAgICsgKHRoaXMud2Fsa2VyLmdldF9wKCkueSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfejogXCIgICAgICsgKHRoaXMud2Fsa2VyLmdldF9wKCkueiA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfZDogXCIgICAgICsgKHRoaXMud2Fsa2VyLmdldF9kKCkgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5nb2xkOiBcIiAgICAgICsgKE9iamVjdC5rZXlzKHRoaXMuZ29sZCA/PyB7fSkubGVuZ3RoKVxyXG4gICAgICAgICAgICArIFwiXFxuaGVyb2VzOiBcIiAgICArICh0aGlzLmhlcm9lcz8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhbGVydF9ocmVzKCk6IHZvaWQge1xyXG4vLyAgICAgICAgYWxlcnQoXCJUZWFtIEluZm86XCIpO1xyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gdGhpcy5oZXJvZXMpIHRoaXMuaGVyb2VzW2lpXS5hbGVydCgpO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgVF9EaXJlY3Rpb24gfSAgICAgICBmcm9tICcuL0NfUG9pbnREaXInO1xyXG5pbXBvcnQgeyBDX1RlYW0sIEpTT05fVGVhbSB9IGZyb20gXCIuL0NfVGVhbVwiO1xyXG5pbXBvcnQgeyBUX1dhbGwgfSAgICAgICAgICAgIGZyb20gXCIuLi9kX21kbC9DX1dhbGxcIjtcclxuaW1wb3J0IHsgSV9NYXplT2JqVmlldywgSlNPTl9NYXplT2JqVmlldyB9ICBmcm9tIFwiLi9DX01hemVPYmpWaWV3XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ19DdXJyZW50VGVhbVZpZXcgIGltcGxlbWVudHMgSV9NYXplT2JqVmlldyB7XHJcbiAgICBwdWJsaWMgIHN0YXRpYyBuZXdPYmooaj86IEpTT05fVGVhbSk6IElfTWF6ZU9ialZpZXcge1xyXG4gICAgICAgIGNvbnN0IHRlYW0gPSBuZXcgQ19UZWFtKGopO1xyXG4gICAgICAgIHJldHVybiBuZXcgQ19DdXJyZW50VGVhbVZpZXcodGVhbSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgIG5ld09iaihqPzogSlNPTl9UZWFtKTogSV9NYXplT2JqVmlldyB7cmV0dXJuIENfQ3VycmVudFRlYW1WaWV3Lm5ld09iaihqKX1cclxuXHJcbiAgICBcclxuICAgIHByaXZhdGUgbXlfdGVhbTogQ19UZWFtO1xyXG4gICAgcHJpdmF0ZSBteV9sYXllcjogIG51bWJlciA9IDk5O1xyXG4gICAgcHVibGljICBjb25zdHJ1Y3Rvcih0ZWFtOiBDX1RlYW0pIHtcclxuICAgICAgICB0aGlzLm15X3RlYW0gPSB0ZWFtO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsYXllcigpOiBudW1iZXIgICAgICAgICB7cmV0dXJuIHRoaXMubXlfbGF5ZXI7fVxyXG4gICAgcHVibGljIHNldF9sYXllcihsYXllcjogbnVtYmVyKTogdm9pZCB7dGhpcy5teV9sYXllciA9IGxheWVyO31cclxuICAgIHB1YmxpYyBsZXR0ZXIoKTogc3RyaW5nfG51bGwge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5teV90ZWFtLndhbGsoKS5nZXRfZCgpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjogcmV0dXJuICfihpEnO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHJldHVybiAn4oaSJztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiByZXR1cm4gJ+KGkyc7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogcmV0dXJuICfihpAnO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gJ/CfjIAnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBjYW5TaG93KCk6IGJvb2xlYW57cmV0dXJuIGZhbHNlfVxyXG4gICAgcHVibGljIGRyb3czRChmcm90OiBUX1dhbGwsIGJhY2s6IFRfV2FsbCk6IHZvaWQge31cclxuICAgIHB1YmxpYyBwYWRfdCgpOiAgIG51bWJlciB7cmV0dXJuIDAuMH0gXHJcbiAgICBwdWJsaWMgcGFkX2QoKTogICBudW1iZXIge3JldHVybiAwLjB9IFxyXG4gICAgcHVibGljIHBhZF9zKCk6ICAgbnVtYmVyIHtyZXR1cm4gMC4wfSBcclxuICAgIHB1YmxpYyBjb2xfZigpOiAgIHN0cmluZ3xudWxsIHtyZXR1cm4gbnVsbH0gXHJcbiAgICBwdWJsaWMgY29sX2IoKTogICBzdHJpbmd8bnVsbCB7cmV0dXJuIG51bGx9IFxyXG4gICAgcHVibGljIGNvbF9zKCk6ICAgc3RyaW5nfG51bGwge3JldHVybiBudWxsfSBcclxuICAgIHB1YmxpYyBjb2xfdCgpOiAgIHN0cmluZ3xudWxsIHtyZXR1cm4gbnVsbH0gXHJcbiAgICBwdWJsaWMgY29sX2QoKTogICBzdHJpbmd8bnVsbCB7cmV0dXJuIG51bGx9IFxyXG4gICAgcHVibGljIGNvbF9sKCk6ICAgc3RyaW5nfG51bGwge3JldHVybiBudWxsfSBcclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTWF6ZU9ialZpZXcge3JldHVybiB7Y25hbWU6ICdDdXJyZW50VGVhbVZpZXcnfX1cclxuICAgIHB1YmxpYyBkZWNvZGUoajogSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQpOiBJX01hemVPYmpWaWV3IHtyZXR1cm4gdGhpcyBhcyBJX01hemVPYmpWaWV3fVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ19Qb2ludERpciwgVF9EaXJlY3Rpb24gfSAgICAgICAgICAgZnJvbSBcIi4vQ19Qb2ludERpclwiO1xyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCwgSlNPTl9Nb3ZhYmxlUG9pbnQgfSBmcm9tIFwiLi9DX01vdmFibGVQb2ludFwiO1xyXG5pbXBvcnQgeyBJX0xvY2F0ZSB9ICAgICBmcm9tIFwiLi9DX0xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IElfSG9wZUFjdGlvbiB9IGZyb20gXCIuL0lfQ29tbW9uXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX1dhbGtlciBleHRlbmRzIEpTT05fTW92YWJsZVBvaW50IHtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfV2Fsa2VyIGV4dGVuZHMgQ19Nb3ZhYmxlUG9pbnQge1xyXG4gICAgY29uc3RydWN0b3Ioaj86IEpTT05fV2Fsa2VyKSB7XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3goKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5sb2NfcG9zLnh9XHJcbiAgICBwdWJsaWMgZ2V0X3koKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5sb2NfcG9zLnl9XHJcbiAgICBwdWJsaWMgZ2V0X3ooKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5sb2NfcG9zLnp9XHJcblxyXG4gICAgcHVibGljIHNldF94KHg6IG51bWJlcik6IHZvaWQge3RoaXMubG9jX3Bvcy54ID0geH1cclxuICAgIHB1YmxpYyBzZXRfeSh5OiBudW1iZXIpOiB2b2lkIHt0aGlzLmxvY19wb3MueSA9IHl9XHJcbiAgICBwdWJsaWMgc2V0X3ooejogbnVtYmVyKTogdm9pZCB7dGhpcy5sb2NfcG9zLnogPSB6fVxyXG5cclxuICAgIHB1YmxpYyBzZXRfcGxhY2UoXHJcbiAgICAgICAgcGxhY2U6IElfTG9jYXRlLCBcclxuICAgICAgICB1cmw/OiAgc3RyaW5nLCBcclxuICAgICAgICBwb3M/OiAgQ19Qb2ludERpcikge1xyXG5cclxuICAgICAgICB0aGlzLnNldF91aWQgKHBsYWNlLnVpZCgpKTtcclxuICAgICAgICB0aGlzLnNldF9sY2tkKHBsYWNlLmdldF9sY2tkKCkpO1xyXG4gICAgICAgIHRoaXMuc2V0X25hbWUocGxhY2UuZ2V0X25hbWUoKSk7XHJcblxyXG4gICAgICAgIGlmICh1cmwgIT09IHVuZGVmaW5lZCkgdGhpcy5zZXRfdXJsKHVybCk7XHJcbiAgICAgICAgaWYgKHBvcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0X3BkKHBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIGhvcGVfcF9md2QoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiTW92ZVwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wX2Z3ZCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMuc2V0X3BfZndkKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9wZV9wX2JhaygpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJNb3ZlXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMuZ2V0X3BfYmFrKCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy5zZXRfcF9iYWsoKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGhvcGVfcF9sZnQoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiTW92ZVwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wX2xmdCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMuc2V0X3BfbGZ0KCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9wZV9wX3JndCgpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJNb3ZlXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMuZ2V0X3Bfcmd0KCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy5zZXRfcF9yZ3QoKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBob3BlX3R1cm5fcigpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJUdXJuXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMuZ2V0X3BkKCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy50dXJuX3IoKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBob3BlX3R1cm5fbCgpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJUdXJuXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMuZ2V0X3BkKCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy50dXJuX2woKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaG9wZV9wX3VwKCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIlVwXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMuZ2V0X3BfdXAoKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLm1vdmVfcF91cCgpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhvcGVfcF9kb3duKCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIkRvd25cIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy5nZXRfcF9kb3duKCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy5tb3ZlX3BfZG93bigpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlX3BfdXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRfcF91cCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG1vdmVfcF9kb3duKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3BfZG93bigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc05HKCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldF9wX2Z3ZCgpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX2dldF9wX21vdmUoMSwgMCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BfZndkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3BkKHRoaXMuZ2V0X3BfZndkKCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wX2JhaygpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX2dldF9wX21vdmUoLTEsIDApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wX2JhaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldF9wZCh0aGlzLmdldF9wX2JhaygpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfcF9sZnQoKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19nZXRfcF9tb3ZlKDAsIC0xKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcF9sZnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRfcGQodGhpcy5nZXRfcF9sZnQoKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3Bfcmd0KCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9fZ2V0X3BfbW92ZSgwLCAxKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcF9yZ3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRfcGQodGhpcy5nZXRfcF9yZ3QoKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BfdXAoKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgY29uc3QgcCA9IG5ldyBDX1BvaW50RGlyKHRoaXMubG9jX3Bvcyk7XHJcbiAgICAgICAgcC56LS07XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BfdXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRfcGQodGhpcy5nZXRfcF91cCgpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfcF9kb3duKCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIGNvbnN0IHAgPSBuZXcgQ19Qb2ludERpcih0aGlzLmxvY19wb3MpO1xyXG4gICAgICAgIHAueisrO1xyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wX2Rvd24oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRfcGQodGhpcy5nZXRfcF9kb3duKCkpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9fZ2V0X3BfbW92ZShvZmZzZXRGQjogbnVtYmVyLCBvZmZzZXRMUjogbnVtYmVyKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgY29uc3QgcCA9IG5ldyBDX1BvaW50RGlyKHRoaXMubG9jX3Bvcyk7XHJcbiAgICAgICAgaWYgKG9mZnNldEZCICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5sb2NfcG9zLmQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjogcC55IC09IG9mZnNldEZCO2JyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOiBwLnggKz0gb2Zmc2V0RkI7YnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6IHAueSArPSBvZmZzZXRGQjticmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogcC54IC09IG9mZnNldEZCO2JyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvZmZzZXRMUiAhPT0gMCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMubG9jX3Bvcy5kKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHAueCArPSBvZmZzZXRMUjticmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogcC55ICs9IG9mZnNldExSO2JyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiBwLnggLT0gb2Zmc2V0TFI7YnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHAueSAtPSBvZmZzZXRMUjticmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfYXJvdW5kKGZyb250OiBudW1iZXIsIHJpZ2h0Om51bWJlciwgdXA6IG51bWJlciA9IDApOiBDX1BvaW50RGlyIHtcclxuICAgICAgICB2YXIgdGFyZ2V0X3ggID0gdGhpcy5sb2NfcG9zLng7XHJcbiAgICAgICAgdmFyIHRhcmdldF95ICA9IHRoaXMubG9jX3Bvcy55O1xyXG4gICAgICAgIHZhciB0YXJnZXRfeiAgPSB0aGlzLmxvY19wb3MueiAtIHVwO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5sb2NfcG9zLmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3ggKz0gcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeSAtPSBmcm9udDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeCArPSBmcm9udDtcclxuICAgICAgICAgICAgICAgIHRhcmdldF95ICs9IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzpcclxuICAgICAgICAgICAgICAgIHRhcmdldF94IC09IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3kgKz0gZnJvbnQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3ggLT0gZnJvbnQ7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeSAtPSByaWdodDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IENfUG9pbnREaXIoe3g6IHRhcmdldF94LCB5OiB0YXJnZXRfeSwgejogdGFyZ2V0X3osIGQ6IHRoaXMubG9jX3Bvcy5kfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdHVybl9yKCk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5sb2NfcG9zLmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLkU7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5TO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uVzticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLk47YnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHR1cm5fbCgpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubG9jX3Bvcy5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5XO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uTjticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLkU7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5TO2JyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyB0dXJuX2IoKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmxvY19wb3MuZCkge1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uUzticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLlc7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5OO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uVzticmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fV2Fsa2VyIHtcclxuICAgICAgICBjb25zdCBqID0gc3VwZXIuZW5jb2RlKCkgYXMgSlNPTl9XYWxrZXI7XHJcbiAgICAgICAgcmV0dXJuIGo7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IEpTT05fV2Fsa2VyKTogQ19XYWxrZXIge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHN1cGVyLmRlY29kZShhKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgLy8g5LiA6Iis44Gr5L2/44GI44KL44Om44O844OG44Kj44Oq44OG44Kj44Gq5ZGq5paHXHJcbiAgICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jjgpLliJfmjJnlnovjgajjgZfjgablnovljJbjgZnjgovjga7jgavliKnnlKhcclxuICAgIGltcG9ydCB7VF9NYWtlRW51bVR5cGV9IGZyb20gXCIuLi9kX3V0bC9UX01ha2VFbnVtVHlwZVwiO1xyXG5cclxuICAgIC8vIOODgOODs+OCuOODp+ODs+ODnuODg+ODl+OBruOCu+ODq+OBrueorumhnuOCkuihqOOBmeWIl+aMmeWei1xyXG4gICAgLy8gTm9EZWY6IOacquWumue+qeODu+S4jeaYjlxyXG4gICAgLy8gRmxvb3I6IOW6ilxyXG4gICAgLy8gVW5leHA6IOacqui4j+WcsFxyXG4gICAgLy8gU3RvbmU6IOefs+WjgVxyXG4gICAgLy8gU3RyVXA6IOS4iuOCiumajuautVxyXG4gICAgLy8gU3RyRG46IOS4i+OCiumajuautVxyXG4gICAgLy8gRW1wdHk6IOWIneacn+eKtuaFi+ODu+S9leOCguOBquOBl1xyXG4gICAgLy8gXHJcbiAgICAvLyBmdW5jdGlvbiB0b19pbnQoTXpLaW5kKTogICAgICBpbnQgICAgICAgIOWIl+aMmeWei+OBq+WvvuW/nOOBmeOCi+WApCjmlbTmlbDlgKQp44KS6L+U44GZXHJcbiAgICAvLyBmdW5jdGlvbiBmcm9tX2ludChpbnQpOiAgICAgICBUX016S2luZCAgICAg5pW05pWw5YCk44Gr5a++5b+c44GZ44KL5YiX5oyZ5Z6L44KS6L+U44GZKOOCr+ODqeOCueODoeOCveODg+ODiSlcclxuICAgIC8vIGZ1bmN0aW9uIHRvX2xldHRlcihNektpbmQpOiAgIHN0cmluZyAgICAg5YiX5oyZ5Z6L44Gr5a++5b+c44GZ44KL5paH5a2X44KS6L+U44GZKOODgOODs+OCuOODp+ODs+OBrjJE6KGo56S655SoKVxyXG4gICAgLy8gZnVuY3Rpb24gZnJvbV9sZXR0ZXIoc3RyaW5nKTogVF9NektpbmQgICAgIOaWh+Wtl+OBq+WvvuW/nOOBmeOCi+WIl+aMmeWei+OCkui/lOOBmSjjgq/jg6njgrnjg6Hjgr3jg4Pjg4kpXHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IFRfTXpLaW5kOntba2V5OiBzdHJpbmddOiBudW1iZXJ9ICA9IHtcclxuICAgICAgICBOb0RlZjogICAwLFxyXG4gICAgICAgIEZsb29yOiAgIDEsXHJcbiAgICAgICAgVW5leHA6ICAgMixcclxuICAgICAgICBTdG9uZTogICAzLFxyXG4gICAgICAgIFVua3duOiAgIDQsXHJcbiAgICAgICAgU3RyVXA6ICAgNSxcclxuICAgICAgICBTdHJEbjogICA2LFxyXG4gICAgICAgIFN0clVEOiAgIDcsXHJcbiAgICAgICAgRW1wdHk6IDI1NSxcclxuICAgIH0gYXMgY29uc3Q7XHJcbiAgICBleHBvcnQgdHlwZSBUX016S2luZCAgID0gVF9NYWtlRW51bVR5cGU8dHlwZW9mIFRfTXpLaW5kPjtcclxuXHJcbiAgICBleHBvcnQgY29uc3QgVF9Sdk16S2luZDp7W2tleTogbnVtYmVyXTogVF9NektpbmR9ICA9IHtcclxuICAgICAgICAwOiAgIFRfTXpLaW5kLk5vRGVmLFxyXG4gICAgICAgIDE6ICAgVF9NektpbmQuRmxvb3IsXHJcbiAgICAgICAgMjogICBUX016S2luZC5VbmV4cCxcclxuICAgICAgICAzOiAgIFRfTXpLaW5kLlN0b25lLFxyXG4gICAgICAgIDQ6ICAgVF9NektpbmQuVW5rd24sXHJcbiAgICAgICAgNTogICBUX016S2luZC5TdHJVcCxcclxuICAgICAgICA2OiAgIFRfTXpLaW5kLlN0ckRuLFxyXG4gICAgICAgIDc6ICAgVF9NektpbmQuU3RyVUQsXHJcbiAgICAgICAgMjU1OiBUX016S2luZC5FbXB0eSxcclxuICAgIH0gYXMgY29uc3Q7XHJcbiAgICBleHBvcnQgdHlwZSBUX1J2TXpLaW5kID0gVF9NYWtlRW51bVR5cGU8dHlwZW9mIFRfUnZNektpbmQ+O1xyXG5cclxuIiwiLy8g55S76Z2i6KGo56S655So44Oh44OD44K744O844K4KOmAmuW4uOeUqOOBqOOCqOODqeODvOeUqCnjga7jgqvjg5fjgrvjg6vljJZcclxuZXhwb3J0IGNsYXNzIENfRHNwTWVzc2FnZSB7XHJcbiAgICBwcml2YXRlIGlzSFRNTDogYm9vbGVhbjsgICAgICAgLy8g6KGo56S65YWI44GMSFRNTOOBiyh0cnVlKeOAgeOCs+ODs+OCveODvOODq+OBiyhmYWxzZSnjga7mjIflrppcclxuICAgIHByaXZhdGUgbm9yX21lc3NhZ2U6IHN0cmluZ1tdOyAvLyDpgJrluLjjga7jg6Hjg4Pjgrvjg7zjgrjjgpLmoLzntI3jgZnjgovmloflrZfliJfphY3liJdcclxuICAgIHByaXZhdGUgZXJyX21lc3NhZ2U6IHN0cmluZ1tdOyAvLyDjgqjjg6njg7zjg6Hjg4Pjgrvjg7zjgrjjgpLmoLzntI3jgZnjgovmloflrZfliJfphY3liJdcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoaXNIVE1MOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLmlzSFRNTCAgICAgID0gaXNIVE1MO1xyXG4gICAgICAgIHRoaXMubm9yX21lc3NhZ2UgPSBbXTtcclxuICAgICAgICB0aGlzLmVycl9tZXNzYWdlID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldF9ub3JfbWVzc2FnZShtc2c6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9yX21lc3NhZ2UucHVzaChtc2cpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0X2Vycl9tZXNzYWdlKG1zZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lcnJfbWVzc2FnZS5wdXNoKG1zZyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwbGF5X25vcl9tZXNzYWdlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm5vcl9tZXNzYWdlLmxlbmd0aCA8IDEpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNIVE1MKSB7XHJcbiAgICAgICAgICAgIGxldCBhbGxfbXNnID0gXCI8cCBjbGFzcz0nbm9ybWFsX21lc3NhZ2UnPlxcblwiO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1zZyBpbiB0aGlzLm5vcl9tZXNzYWdlKSBhbGxfbXNnICs9IFwieyRtc2d9PC9icj5cXG5cIjtcclxuICAgICAgICAgICAgYWxsX21zZyArPSAgXCI8L3A+XFxuXCI7XHJcbiAgICAgICAgICAgIGFsZXJ0KGFsbF9tc2cpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXNnIGluIHRoaXMubm9yX21lc3NhZ2UpIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcGxheV9lcnJfbWVzc2FnZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5lcnJfbWVzc2FnZS5sZW5ndGggPCAxKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzSFRNTCkge1xyXG4gICAgICAgICAgICBsZXQgYWxsX21zZyA9IFwiPHAgY2xhc3M9J2Vycm9yX21lc3NhZ2UnPlxcblwiO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1zZyBpbiB0aGlzLmVycl9tZXNzYWdlKSBhbGxfbXNnICs9IFwieyRtc2d9PC9icj5cXG5cIjtcclxuICAgICAgICAgICAgYWxsX21zZyArPSAgXCI8L3A+XFxuXCI7XHJcbiAgICAgICAgICAgIGFsZXJ0KGFsbF9tc2cpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXFxuXFxuXFxuIyMjXFxuIyMjIEVSUk9SIE9jY3VlcmQuXFxuIyMjXFxuXCIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1zZyBpbiB0aGlzLmVycl9tZXNzYWdlKSBjb25zb2xlLmxvZyhgIyMjICR7bXNnfWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjI1xcblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIHBkb19lcnJvcihlOiBhbnksIGVycm1zZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZWNvZGUgPSBlPy5nZXRDb2RlKCkgICAgPz8gJzk5OTk5JztcclxuICAgICAgICBjb25zdCBlbWVzcyA9IGU/LmdldE1lc3NhZ2UoKSA/PyAnPz8/JztcclxuICAgICAgICB0aGlzLnNldF9lcnJfbWVzc2FnZShlcnJtc2cpO1xyXG4gICAgICAgIHRoaXMuc2V0X2Vycl9tZXNzYWdlKGBjb2RlOiAke2Vjb2RlfWApO1xyXG4gICAgICAgIHRoaXMuc2V0X2Vycl9tZXNzYWdlKGBtZXNzYWdlOiAke2VtZXNzfWApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldF9ub3JfbWVzc2FnZXMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy5ub3JfbWVzc2FnZV07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X2Vycl9tZXNzYWdlcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLmVycl9tZXNzYWdlXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNfZXJyKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAgdGhpcy5lcnJfbWVzc2FnZS5sZW5ndGggIT09IDA7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8g5pWw5YCk44OB44Kn44OD44KvXHJcbmV4cG9ydCBmdW5jdGlvbiBfaXNOdW0obnVtVmFsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIC8vIOODgeOCp+ODg+OCr+adoeS7tuODkeOCv+ODvOODs1xyXG4gICAgY29uc3QgcGF0dGVybiA9IC9eWy0rXT8oWzEtOV1cXGQqfDApKFxcLlxcZCspPyQvO1xyXG4gICAgLy8g5pWw5YCk44OB44Kn44OD44KvXHJcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KG51bVZhbCk7XHJcbn1cclxuXHJcbi8vIOaVsOWApOWPluOCiuWHuuOBl1xyXG5leHBvcnQgZnVuY3Rpb24gX2dldE51bShudW1WYWw6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAvLyDjg4Hjgqfjg4Pjgq/mnaHku7bjg5Hjgr/jg7zjg7NcclxuLy8gICAgY29uc3QgcGF0dGVybiA9IC9bLV0/KFsxLTldXFxkKnwwKShcXC5cXGQrKT8vO1xyXG4gICAgY29uc3QgcGF0dGVybiA9IC8oW14wLTldKS9nO1xyXG4gICAgY29uc3QgdmFsc3RyICA9IG51bVZhbC5yZXBsYWNlKHBhdHRlcm4sJycpO1xyXG4gICAgLy8g5pWw5YCk44OB44Kn44OD44KvXHJcbiAgICByZXR1cm4gTnVtYmVyKHZhbHN0cik7XHJcbn1cclxuXHJcbi8vIOWbm+aNqOS6lOWFpVxyXG5leHBvcnQgZnVuY3Rpb24gX3JvdW5kKG51bTogbnVtYmVyLCBkaWdpdDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IG11bHRpcGxpZXIgPSBNYXRoLnBvdygxMCwgZGlnaXQpO1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogbXVsdGlwbGllcikgLyBtdWx0aXBsaWVyO1xyXG59XHJcblxyXG4vLyDliIfjgorkuIrjgZJcclxuZXhwb3J0IGZ1bmN0aW9uIF9jZWlsKG51bTogbnVtYmVyLCBkaWdpdDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IG11bHRpcGxpZXIgPSBNYXRoLnBvdygxMCwgZGlnaXQpO1xyXG4gICAgcmV0dXJuIE1hdGguY2VpbChudW0gKiBtdWx0aXBsaWVyKSAvIG11bHRpcGxpZXI7XHJcbn1cclxuXHJcblxyXG4vLyDliIfjgorkuIvjgZJcclxuZXhwb3J0IGZ1bmN0aW9uIF9mbG9vcihudW06IG51bWJlciwgZGlnaXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBtdWx0aXBsaWVyID0gTWF0aC5wb3coMTAsIGRpZ2l0KTtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKG51bSAqIG11bHRpcGxpZXIpIC8gbXVsdGlwbGllcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfbWluKGE6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBhLnJlZHVjZSgobjE6IG51bWJlciwgbjI6IG51bWJlcikgPT4gTWF0aC5taW4objEsIG4yKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfbWF4KGE6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBhLnJlZHVjZSgobjE6IG51bWJlciwgbjI6IG51bWJlcikgPT4gTWF0aC5tYXgobjEsIG4yKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX21heCwgX21pbiwgX3JvdW5kIH0gZnJvbSBcIi4vRl9NYXRoXCI7XHJcblxyXG4vLyDkubHmlbDplqLmlbDlkbzjgbPlh7rjgZfnlKjjga7lnovlrqPoqIBcclxudHlwZSBUX2ZyYW5kID0gKCk9Pm51bWJlclxyXG5jb25zdCBmcmFuZDogVF9mcmFuZCA9ICAoKT0+e3JldHVybiBNYXRoLnJhbmRvbSgpfVxyXG5cclxuLy8g5LiA5qeY5Lmx5pWwKOaVtOaVsClcclxuZXhwb3J0IGZ1bmN0aW9uIF9pcmFuZChtaW46IG51bWJlciA9IDAsIG1heDogbnVtYmVyID0gMSwgcmFuZDogVF9mcmFuZCA9IGZyYW5kKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGZfcmFuZCA9IE1hdGguZmxvb3IocmFuZCgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICAgIHJldHVybiBfcm91bmQoZl9yYW5kLCAwKTtcclxufVxyXG5cclxuLy8g5q2j6KaP5YiG5biD44KC44Gp44GN5Lmx5pWwKOaVtOaVsClcclxuZXhwb3J0IGZ1bmN0aW9uIF9pZ3JhbmQobWluOiBudW1iZXIgPSAwLCBtYXg6IG51bWJlciA9IDEsIHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gX2lyYW5kKG1pbiwgbWF4LCAoKT0+e3JldHVybiBfZ3JhbmQoMCwgMSwgcmFuZCl9KVxyXG59XHJcblxyXG4vLyDmraPopo/liIbluIPjgoLjganjgY3kubHmlbAo5a6f5pWwKVxyXG5leHBvcnQgZnVuY3Rpb24gX2dyYW5kKG1pbjogbnVtYmVyID0gMCwgbWF4OiBudW1iZXIgPSAxLCByYW5kOiBUX2ZyYW5kID0gZnJhbmQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoX19fZ2F1c3NpYW5SYW5kKHJhbmQpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxufVxyXG5mdW5jdGlvbiBfX19nYXVzc2lhblJhbmQocmFuZDogVF9mcmFuZCA9IGZyYW5kKSB7XHJcbiAgICBsZXQgc3VtID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSArPSAxKSB7XHJcbiAgICAgICAgc3VtICs9IHJhbmQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdW0gLyA2O1xyXG59XHJcblxyXG4vLyDlsJHjgZfnnJ/pnaLnm67jgarmraPopo/liIbluIPkubHmlbAo5pW05pWwKVxyXG5leHBvcnQgZnVuY3Rpb24gX2lucmFuZChtaW46IG51bWJlciA9IDAsIG1heDogbnVtYmVyID0gMSwgZGQ6IG51bWJlciA9IDMuMCwgcmFuZDogVF9mcmFuZCA9IGZyYW5kKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKF9ucmFuZChtaW4sIG1heCwgZGQsIHJhbmQpKTtcclxufVxyXG5cclxuLy8g5bCR44GX55yf6Z2i55uu44Gq5q2j6KaP5YiG5biD5Lmx5pWwKOWun+aVsClcclxuLy8g5LiA5qeY56K6546H5aSJ5pWwYSxi44KS5aSJ5pWw6Zai5pWw44KS55So44GE44GmIHg9ZihhLGIpLCB5PWcoYSxiKeOBqOOBl+OBpjLjgaTjga7mraPopo/liIbluIPkubHmlbB4LHnjgpLlvpfjgotcclxuLy8geCA9IGYoYSxiKSA9IHNxcnQoLTIqbG9nKGEpKSAqIHNpbigyKs+AKmIpIFxyXG4vLyB5ID0gZyhhLGIpID0gc3FydCgtMipsb2coYSkpICogY29zKDIqz4AqYikgXHJcbmV4cG9ydCBmdW5jdGlvbiBfbnJhbmQobWluOiBudW1iZXIgPSAwLjAsIG1heDogbnVtYmVyID0gMS4wLCBkZDogbnVtYmVyID0gMy4wLCByYW5kOiBUX2ZyYW5kID0gZnJhbmQpOiBudW1iZXIge1xyXG4gICAgY29uc3QgYXZlID0gMC41O1xyXG4gICAgY29uc3QgYSA9IHJhbmQoKTtcclxuICAgIGNvbnN0IGIgPSByYW5kKCk7XHJcbiAgICBsZXQgeCA9IGF2ZSArIF9mYWIoYSwgYikgLyAoMi4wICogZGQpOyAvLyDjgZPjgZPjgb7jgafjgIFOKDAsMSnjga7mraPopo/liIbluIPkubHmlbDjga7kvZzmiJBcclxuXHJcbiAgICB4ID0gbWluICsgeCAqIChtYXggLSBtaW4pO1xyXG4gICAgeCA9IF9tYXgoW21pbiwgeF0pO1xyXG4gICAgeCA9IF9taW4oW21heCwgeF0pO1xyXG4gICAgcmV0dXJuIHg7XHJcbn1cclxuZnVuY3Rpb24gX2ZhYihhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KC0yLjAgKiBNYXRoLmxvZyhhKSkgKiBNYXRoLnNpbigyLjAgKiBNYXRoLlBJICogYik7XHJcbn1cclxuZnVuY3Rpb24gX2dhYihhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KC0yLjAgKiBNYXRoLmxvZyhhKSkgKiBNYXRoLmNvcygyLjAgKiBNYXRoLlBJICogYik7XHJcbn1cclxuXHJcblxyXG4vLyDjgrfjg7zjg4nlgKTjgpLnlKjjgYTjgZ/kubHmlbBcclxuZXhwb3J0IGNsYXNzIENfU2VlZGVkUmFuZCB7XHJcbiAgICBwcm90ZWN0ZWQgc2VlZDogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIGZpcnN0X3NlZWQ6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc2VlZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZWVkID0gc2VlZDtcclxuICAgICAgICB0aGlzLmZpcnN0X3NlZWQgPSBzZWVkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuc2VlZCA9IHRoaXMuZmlyc3Rfc2VlZDtcclxuICAgIH1cclxuICAgIC8vIOS5seaVsOeUn+aIkOODoeOCveODg+ODiVxyXG4gICAgcHVibGljIHJhbmRvbSgpOiBudW1iZXIge1xyXG4gICAgICAgIHRoaXMuc2VlZCA9ICh0aGlzLnNlZWQgKiA5MzAxICsgNDkyOTcpICUgMjMzMjgwO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlZWQgLyAyMzMyODAuMDtcclxuICAgIH1cclxufVxyXG5cclxuLy/jg6bjg4vjg7zjgq9JRCh1dWlkKeOBrueUn+aIkFxyXG5leHBvcnQgZnVuY3Rpb24gX2dldF91dWlkKGxlbjogbnVtYmVyID0gMjAsIHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBsZnQgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpLnRvU3RyaW5nKDE2KTsgLy8g44Gf44G244KTMTPmoYFcclxuICAgIGNvbnN0IHJndF9sZW4gPSBfbWF4KFtsZW4gLSBsZnQubGVuZ3RoLCAxXSk7XHJcblxyXG4gICAgY29uc3Qgcmd0ID0gTWF0aC5mbG9vcihNYXRoLnBvdygxMCwgcmd0X2xlbikgKiByYW5kKCkpLnRvU3RyaW5nKDE2KTtcclxuICAgIHJldHVybiBsZnQgKyByZ3Q7XHJcbn1cclxuXHJcbi8vIOeiuueOh+OBq+WfuuOBpeOBj+imgee0oOmBuOaKnlxyXG5leHBvcnQgdHlwZSBUX1NlbGVjdEl0ZW0gPSB7XHJcbiAgICByYXRpbzogbnVtYmVyLFxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBfc2VsZWN0SXRlbShpdGVtczogVF9TZWxlY3RJdGVtW10sIHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCk6IFRfU2VsZWN0SXRlbSB8IHVuZGVmaW5lZCB7XHJcbiAgICB2YXIgdHRsOm51bWJlciA9IDA7XHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zKSB0dGwgKz0gaXRlbS5yYXRpbztcclxuXHJcbiAgICBjb25zdCB0YXJnZXQgPSBfaXJhbmQoMCwgdHRsLCByYW5kKTtcclxuICAgIHZhciBzdW0gPSAwO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgICAgc3VtICs9IGl0ZW0ucmF0aW87XHJcbiAgICAgICAgaWYgKHRhcmdldCA8IHN1bSkge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8vIOmFjeWIl+OBruOCt+ODo+ODg+ODleODq1xyXG5leHBvcnQgZnVuY3Rpb24gX3NodWZmbGVBcnJheTxUPihhcnJheTogVFtdLCByYW5kOiBUX2ZyYW5kID0gZnJhbmQpOiBUW10ge1xyXG4gICAgbGV0IHNodWZmbGVkQXJyYXkgPSBbLi4uYXJyYXldOyAvLyDlhYPjga7phY3liJfjgpLlpInmm7TjgZfjgarjgYTjgojjgYbjgavjgrPjg5Tjg7zjgZnjgotcclxuICAgIGZvciAobGV0IGkgPSBzaHVmZmxlZEFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICAvLyDjg6njg7Pjg4Djg6DjgarkvY3nva7jgpLmsbrlrppcclxuICAgICAgICBjb25zdCBqID0gX2lyYW5kKDAsIGksIHJhbmQpO1xyXG4gICAgICAgIC8vIOimgee0oOOBruWFpeOCjOabv+OBiFxyXG4gICAgICAgIFtzaHVmZmxlZEFycmF5W2ldLCBzaHVmZmxlZEFycmF5W2pdXSA9IFtzaHVmZmxlZEFycmF5W2pdLCBzaHVmZmxlZEFycmF5W2ldXTtcclxuICAgIH1cclxuICAgIHJldHVybiBzaHVmZmxlZEFycmF5OyAvLyDjgrfjg6Pjg4Pjg5Xjg6vjgZXjgozjgZ/phY3liJfjgpLov5TjgZlcclxufVxyXG5cclxuLy8g5Lmx5pWw44Gr44KI44KL5paH5a2X5YiX55Sf5oiQXHJcbmV4cG9ydCBmdW5jdGlvbiBfcmFuZG9tX3N0cihsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZXQgc3RyID0gJyc7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBsZW5ndGg7IGkrKykgc3RyICs9IF9yYW5kb21fQ2hhcigpO1xyXG4gICAgcmV0dXJuIHN0cjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gX3JhbmRvbV9VcHBlclN0cihsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZXQgc3RyID0gJyc7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBsZW5ndGg7IGkrKykgc3RyICs9IF9yYW5kb21fVXBwZXJDaGFyKCk7XHJcbiAgICByZXR1cm4gc3RyO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBfcmFuZG9tX0xvd2VyU3RyKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGxldCBzdHIgPSAnJztcclxuICAgIGZvciAobGV0IGk9MDsgaSA8IGxlbmd0aDsgaSsrKSBzdHIgKz0gX3JhbmRvbV9Mb3dlckNoYXIoKTtcclxuICAgIHJldHVybiBzdHI7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fVXBwZXJDaGFyKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB2YWwgPSBfaXJhbmQoMCwyNilcclxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1K3ZhbCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fTG93ZXJDaGFyKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB2YWwgPSBfaXJhbmQoMCwyNilcclxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDk1K3ZhbCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fTnVtQ2hhcigpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdmFsID0gX2lyYW5kKDAsOSlcclxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDQ4K3ZhbCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fQ2hhcigpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdmFsID0gX2lyYW5kKDAsNjEpXHJcbiAgICBpZiAodmFsIDwgMjYpIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1K3ZhbCk7XHJcbiAgICBpZiAodmFsIDwgNTIpIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDk3K3ZhbC0yNik7XHJcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg0OCt2YWwtNTIpO1xyXG59XHJcbiIsImltcG9ydCBleHByZXNzICAgICAgZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IGNyZWF0ZUVycm9yICBmcm9tICdodHRwLWVycm9ycyc7XHJcbmltcG9ydCBwYXRoICAgICAgICAgZnJvbSBcInBhdGhcIjtcclxuXHJcbnZhciB1c2Vyc1JvdXRlciA9IHJlcXVpcmUoJy4vcm91dGVzL3VzZXJzJyk7XHJcbnZhciBtYWlleFJvdXRlciA9IHJlcXVpcmUoJy4vcm91dGVzL21haWV4Jyk7XHJcblxyXG52YXIgY29va2llUGFyc2VyID0gcmVxdWlyZSgnY29va2llLXBhcnNlcicpO1xyXG52YXIgbG9nZ2VyID0gcmVxdWlyZSgnbW9yZ2FuJyk7XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG4vLyB2aWV3IGVuZ2luZSBzZXR1cFxyXG5hcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihfX2Rpcm5hbWUsICd2aWV3cycpKTtcclxuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnZWpzJyk7XHJcblxyXG5hcHAudXNlKGxvZ2dlcignZGV2JykpO1xyXG5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcclxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAncHVibGljJykpKTtcclxuXHJcbi8vYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbi8vYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcclxuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XHJcblxyXG5jb25zdCByb290Um91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxucm9vdFJvdXRlci5nZXQoXHJcbiAgXCIvXCIsXHJcbiAgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIHJlcy5zZW5kKFwiV2VsY29tZSB0byB0aGUgTWFpIHdvcmxkISA6LSlcIik7XHJcbiAgfVxyXG4pO1xyXG5hcHAudXNlKFwiL1wiLCAgICAgIHJvb3RSb3V0ZXIpO1xyXG5hcHAudXNlKFwiL3VzZXJzXCIsIHVzZXJzUm91dGVyKTtcclxuYXBwLnVzZShcIi9tYWlleFwiLCBtYWlleFJvdXRlcik7XHJcblxyXG4vLyBjYXRjaCA0MDQgYW5kIGZvcndhcmQgdG8gZXJyb3IgaGFuZGxlclxyXG5hcHAudXNlKGZ1bmN0aW9uKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSB7XHJcbiAgbmV4dChjcmVhdGVFcnJvcig0MDQpKTtcclxufSk7XHJcblxyXG4vLyBlcnJvciBoYW5kbGVyXHJcbmFwcC51c2UoZnVuY3Rpb24oZXJyOiBhbnksIHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSB7XHJcbiAgLy8gc2V0IGxvY2Fscywgb25seSBwcm92aWRpbmcgZXJyb3IgaW4gZGV2ZWxvcG1lbnRcclxuICByZXMubG9jYWxzLm1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcclxuICByZXMubG9jYWxzLmVycm9yID0gcmVxLmFwcC5nZXQoJ2VudicpID09PSAnZGV2ZWxvcG1lbnQnID8gZXJyIDoge307XHJcblxyXG4gIC8vIHJlbmRlciB0aGUgZXJyb3IgcGFnZVxyXG4gIHJlcy5zdGF0dXMoZXJyLnN0YXR1cyB8fCA1MDApO1xyXG4gIHJlcy5yZW5kZXIoJ2Vycm9yJyk7XHJcbn0pO1xyXG5cclxuY29uc3QgcG9ydCA9IG5vcm1hbGl6ZVBvcnQocHJvY2Vzcy5lbnYuUE9SVCB8fCAnMzAwMCcpO1xyXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBOb3JtYWxpemUgYSBwb3J0IGludG8gYSBudW1iZXIsIHN0cmluZywgb3IgZmFsc2UuXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplUG9ydCh2YWw6IGFueSkge1xyXG4gIHZhciBwb3J0ID0gcGFyc2VJbnQodmFsLCAxMCk7XHJcblxyXG4gIGlmIChpc05hTihwb3J0KSkge1xyXG4gICAgLy8gbmFtZWQgcGlwZVxyXG4gICAgcmV0dXJuIHZhbDtcclxuICB9XHJcblxyXG4gIGlmIChwb3J0ID49IDApIHtcclxuICAgIC8vIHBvcnQgbnVtYmVyXHJcbiAgICByZXR1cm4gcG9ydDtcclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwO1xyXG4iLCJcclxuY29uc3QgZGJfaG9zdCA9ICdzcWwnO1xyXG4vLyDliKnnlKjjgq/jg6njgrnnrYnjga7oqq3jgb/ovrzjgb9cclxuXHJcbi8vIOOCqOODqeODvOODoeODg+OCu+ODvOOCuOetieOCkuS/neWtmOODu+ihqOekuuOBmeOCi+OCr+ODqeOCuVxyXG5pbXBvcnQge0NfRHNwTWVzc2FnZSB9ICAgICBmcm9tICcuLi8uLi8uLi9tYWkvc3JjL2RfdXRsL0NfRHNwTWVzc2FnZSc7XHJcblxyXG4vLyDkvY3nva7jgajmlrnlkJHjgpLooajjgZnjgq/jg6njgrlcclxuaW1wb3J0IHsgQ19Qb2ludERpciB9ICAgICAgZnJvbSAnLi4vLi4vLi4vbWFpL3NyYy9kX21kbC9DX1BvaW50RGlyJztcclxuXHJcbi8vIOi/t+WuruWGheOCguOBl+OBj+OBr+OCruODq+ODieWGheOBruS9jee9ruOCkuihqOOBmeOCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX0xvY2F0aW9uIH0gICAgICBmcm9tICcuLi8uLi8uLi9tYWkvc3JjL2RfbWRsL0NfTG9jYXRpb24nO1xyXG5cclxuLy8g5rue5Zyo5L2N572u44KS56S644GZ44Kv44Op44K5XHJcbmltcG9ydCB7IENfTW92YWJsZVBvaW50IH0gIGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF9tZGwvQ19Nb3ZhYmxlUG9pbnQnO1xyXG5cclxuLy8g44Ku44Or44OJ44Kv44Op44K55YWo6IisXHJcbmltcG9ydCB7Q19HdWlsZH0gICAgICAgICAgIGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF9tZGwvQ19HdWlsZCc7XHJcblxyXG4vLyDjg5Hjg7zjg4bjgqPjg7zjgq/jg6njgrnlhajoiKxcclxuaW1wb3J0IHtDX1RlYW19ICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbWFpL3NyYy9kX21kbC9DX1RlYW0nO1xyXG5cclxuLy8g44OS44O844Ot44O844Kv44Op44K55YWo6IisXHJcbmltcG9ydCB7Q19IZXJvLCBKU09OX0hlcm99IGZyb20gICcuLi8uLi8uLi9tYWkvc3JjL2RfbWRsL0NfSGVybyc7XHJcblxyXG4vLyDjgrvjg7zjg5bjg4fjg7zjgr8o44Kv44Op44Kk44Ki44Oz44OI44Go44Gu6YCj5pC6KeWFqOiIrFxyXG5pbXBvcnQge0NfU2F2ZURhdGEsIEpTT05fU2F2ZURhdGF9IGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF9tZGwvQ19TYXZlRGF0YSc7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Li744CA5Yem44CA55CGICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbnRlcmZhY2UgSV9HbG9iYWxBcmd1bWVudHMge1xyXG4gICAgbW9kZT86IHN0cmluZztcclxuICAgIG51bT86ICBudW1iZXI7XHJcbiAgICBwaWQ/OiAgbnVtYmVyO1xyXG4gICAgaHJlc19KU09OPzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSV9SZXR1cm4ge1xyXG4gICAgZWNvZGU6IG51bWJlcjtcclxuICAgIGVtc2c6ICBzdHJpbmc7XHJcbiAgICBzYXZlPzogSlNPTl9TYXZlRGF0YTtcclxuICAgIGRhdGE/OiB7XHJcbiAgICAgICAgaHJlczpKU09OX0hlcm9bXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5ld0dhbWUoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IElfUmV0dXJuIHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0IGd1bGQgPSBuZXdfZ3VsZCgpO1xyXG4gICAgY29uc3QgdGVhbSA9IG5ld190ZWFtKGd1bGQpO1xyXG4gICAgY29uc3Qgc2F2ZSA9IG5ld19zYXZlKGd1bGQsIHRlYW0pO1xyXG4gICAgcmV0dXJuIHNhdmVfZW5jb2RlKDAsIHNhdmUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmV3SHJlcyhhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogSV9SZXR1cm4ge1xyXG4gICAgaW5pdChhcmcpO1xyXG4gICAgY29uc3QgaHJlcyA9IG5ld19ocmVzKCk7XHJcbiAgICByZXR1cm4gaHJlc19lbmNvZGUoMCwgIGhyZXMpO1xyXG59XHJcblxyXG4gXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vICAg44K144OW44Or44O844OB44OzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmZ1bmN0aW9uIGVycl9lbmNvZGUoY29kZTogbnVtYmVyLCBtc2dzOiBzdHJpbmdbXSk6IElfUmV0dXJuIHtcclxuICAgIGNvbnN0IHJldF9hc3NvYzogSV9SZXR1cm4gPSB7ZWNvZGU6Y29kZSwgZW1zZzogJyd9O1xyXG4gICAgZm9yIChjb25zdCBtc2cgaW4gbXNncykgcmV0X2Fzc29jLmVtc2cgKz0gbXNnOyBcclxuICAgIHJldHVybiByZXRfYXNzb2M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVfZW5jb2RlKGNvZGU6IG51bWJlciwgc2F2ZTogQ19TYXZlRGF0YSk6IElfUmV0dXJuIHtcclxuICAgIGNvbnN0IHJldF9hc3NvYzogSV9SZXR1cm4gPSB7ZWNvZGU6MCwgZW1zZzogJyd9O1xyXG5cclxuICAgIGlmIChjb2RlICE9PSAwIHx8IGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIHJldHVybiBlcnJfZW5jb2RlKGNvZGUsIGd2Lm1lcy5nZXRfZXJyX21lc3NhZ2VzKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXRfYXNzb2MuZWNvZGUgPSAwO1xyXG4gICAgICAgIHJldF9hc3NvYy5lbXNnICA9ICdTdGF0dXMgT0snO1xyXG4gICAgICAgIHJldF9hc3NvYy5zYXZlICA9IHNhdmUuZW5jb2RlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJldF9hc3NvYztcclxufVxyXG5cclxuZnVuY3Rpb24gaHJlc19lbmNvZGUoY29kZTogbnVtYmVyLCBocmVzOiBDX0hlcm9bXSk6IElfUmV0dXJuIHtcclxuICAgIGNvbnN0IHJldF9hc3NvYzogSV9SZXR1cm4gPSB7ZWNvZGU6MCwgZW1zZzogJyd9O1xyXG5cclxuICAgIGlmIChjb2RlICE9PSAwIHx8IGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIHJldHVybiBlcnJfZW5jb2RlKGNvZGUsIGd2Lm1lcy5nZXRfZXJyX21lc3NhZ2VzKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXRfYXNzb2MuZWNvZGUgPSAwO1xyXG4gICAgICAgIHJldF9hc3NvYy5lbXNnICA9ICdTdGF0dXMgT0snO1xyXG5cclxuICAgICAgICBjb25zdCBocmVzX2FycmF5OiBKU09OX0hlcm9bXSA9IFtdO1xyXG4gICAgICAgIGZvcihjb25zdCBoZXJvIG9mIGhyZXMpIHtcclxuICAgICAgICAgICAgaHJlc19hcnJheS5wdXNoKGhlcm8uZW5jb2RlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXRfYXNzb2MuZGF0YSAgPSB7aHJlczogaHJlc19hcnJheX07XHJcbiAgICAgICAgcmV0dXJuIHJldF9hc3NvYztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbmV3X2hyZXMoKTogQ19IZXJvW10ge1xyXG4gICAgY29uc3QgaGVyb2VzOiBDX0hlcm9bXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYS5udW07IGkrKykge1xyXG4gICAgICAgIGhlcm9lcy5wdXNoKChuZXcgQ19IZXJvKCkpLnJhbmRvbV9tYWtlKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhlcm9lcztcclxufVxyXG5cclxuZnVuY3Rpb24gbmV3X3NhdmUoZ3VsZDogQ19HdWlsZCwgdGVhbTogQ19UZWFtKTogQ19TYXZlRGF0YSB7XHJcbiAgICByZXR1cm4gbmV3IENfU2F2ZURhdGEoe1xyXG4gICAgICAgIGF1dG9fbW9kZTogJzAnLFxyXG4gICAgICAgIGlzX2FjdGl2ZTogJzEnLFxyXG4gICAgICAgIGlzX2RlbGV0ZTogJzAnLFxyXG5cclxuICAgICAgICBhbGxfbXZwdDogICBbXSxcclxuICAgICAgICBhbGxfbWF6ZTogICBbXSxcclxuICAgICAgICBhbGxfZ3VsZDogICBbZ3VsZC5lbmNvZGUoKV0sIFxyXG4gICAgICAgIGFsbF90ZWFtOiAgIFt0ZWFtLmVuY29kZSgpXSxcclxuXHJcbi8vbG9jICAgICAgICBteXBvczogICAgICB0ZWFtLmdldF9sb2MoKS5lbmNvZGUoKSwgXHJcbn0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdfZ3VsZCgpOiBDX0d1aWxkIHtcclxuICAgIGNvbnN0IGd1bGQgPSBuZXcgQ19HdWlsZCgpO1xyXG4gICAgZ3VsZC5kZWNvZGUoe25hbWU6ICflp4vjgb7jgorjga7ooZfjga7lhpLpmbrogIXjgq7jg6vjg4knfSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgICAgZ3VsZC5hZGRfaGVybygobmV3IENfSGVybygpKS5yYW5kb21fbWFrZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZ3VsZDtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV3X3RlYW0oZ3VsZDogQ19HdWlsZCk6IENfVGVhbSB7XHJcbiAgICBjb25zdCB0ZWFtID0gbmV3IENfVGVhbSgpO1xyXG4vL2xvY1xyXG4vKlxyXG4gICAgY29uc3QgbG9jID0gbmV3IENfTW92YWJsZVBvaW50KCk7XHJcbiAgICBsb2MuZGVjb2RlKHtcclxuICAgICAgICBraW5kOiAgICdHdWxkJyxcclxuICAgICAgICBuYW1lOiAgICBndWxkLmdldF9uYW1lKCksXHJcbiAgICAgICAgbG9jX3VpZDogZ3VsZC51aWQoKSxcclxuICAgICAgICBsb2NfcG9zOiBuZXcgQ19Qb2ludERpcih7XHJcbiAgICAgICAgICAgICd4JzogMCxcclxuICAgICAgICAgICAgJ3knOiAwLFxyXG4gICAgICAgICAgICAneic6IDAsXHJcbiAgICAgICAgICAgICdkJzogMCxcclxuICAgICAgICB9KSxcclxuICAgICAgICB0ZWFtX3VpZDogdGVhbS51aWQoKSxcclxuICAgIH0pO1xyXG4qL1xyXG4gICAgdGVhbS5zZXRfcHJwKHtuYW1lOifjgbLjgojjgZPjgZXjgpPjg4Hjg7zjg6AnfSk7XHJcbi8vbG9jICAgIHRlYW0uc2V0X2xvYyhsb2MpO1xyXG4vLyAgICB0ZWFtLnNldF9sb2MoKG5ldyBDX01vdmFibGVQb2ludCgpKS5kZWNvZGUobG9jLmVuY29kZSgpKSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAzOyBpKyspIHsgXHJcbiAgICAgICAgdGVhbS5hZGRfaGVybygobmV3IENfSGVybygpKS5yYW5kb21fbWFrZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGVhbTtcclxufVxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWIneOAgOacn+OAgOioreOAgOWumiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxubGV0IGd2OiBDX0dsb2JhbFZhcjtcclxubGV0IGdhOiBDX0dsb2JhbEFyZ3VtZW50cztcclxuXHJcbmZ1bmN0aW9uIGluaXQob2JqOiBJX0dsb2JhbEFyZ3VtZW50cyk6IHZvaWQge1xyXG4gICAgZ3YgPSBuZXcgQ19HbG9iYWxWYXIoKTtcclxuICAgIGdhID0gbmV3IENfR2xvYmFsQXJndW1lbnRzKG9iaik7XHJcbiAgICByZXR1cm47XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy9cclxuLy8vLy8gICAgIOOCr+ODqeOCueWuo+iogFxyXG4vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyDlpKfln5/lpInmlbDjga7oqK3lrppcclxuY2xhc3MgQ19HbG9iYWxWYXIge1xyXG4gICAgcHVibGljIG1lczogQ19Ec3BNZXNzYWdlO1xyXG5cclxuICAgIHB1YmxpYyBNYXplX3NpemVfeCA9IDIxO1xyXG4gICAgcHVibGljIE1hemVfc2l6ZV95ID0gMjE7XHJcbiAgICBwdWJsaWMgTGltaXRfb2Zfcm9vbSAgICAgPSA1O1xyXG4gICAgcHVibGljIE1heF9zaXplX29mX3Jvb20gID0gMztcclxuICAgIHB1YmxpYyBNYXhfb2ZfTWF6ZV9GbG9vciA9IDM7XHJcblxyXG4gICAgcHVibGljIHRlYW1fYXNzb2M6IENfVGVhbVtdICA9IFtdO1xyXG4gICAgcHVibGljIHRlYW06ICAgICAgIENfVGVhbTtcclxuICAgIHB1YmxpYyBndWxkX2Fzc29jOiBDX0d1aWxkW10gPSBbXTtcclxuICAgIHB1YmxpYyBndWxkOiAgICAgICBDX0d1aWxkO1xyXG4gICAgcHVibGljIGhlcm9lczogICAgIENfSGVyb1tdICA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm1lcyAgPSBuZXcgQ19Ec3BNZXNzYWdlKCAvKiBpc0hUTUwgPSAqLyBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy50ZWFtID0gbmV3IENfVGVhbSgpO1xyXG4gICAgICAgIHRoaXMuZ3VsZCA9IG5ldyBDX0d1aWxkKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFBPU1TlvJXmlbDjga7oqK3lrppcclxuY2xhc3MgQ19HbG9iYWxBcmd1bWVudHMge1xyXG4gICAgcHVibGljIG1vZGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBudW06IG51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgcGlkOiBudW1iZXIgPSAxO1xyXG4gICAgcHVibGljIGhyZXNfSlNPTjogc3RyaW5nfHVuZGVmaW5lZCA9ICcnO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvYmo6IElfR2xvYmFsQXJndW1lbnRzfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMubW9kZSA9IG9iaj8ubW9kZSA/PyAndW5rbm93bic7XHJcbiAgICAgICAgdGhpcy5udW0gID0gb2JqPy5udW0gID8/IDE7XHJcbiAgICAgICAgdGhpcy5waWQgID0gb2JqPy5waWQgID8/IDE7XHJcbiAgICAgICAgdGhpcy5ocmVzX0pTT04gPSBvYmo/LmhyZXNfSlNPTiA/PyB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbm1vZHVsZS5leHBvcnRzID0gbmV3R2FtZTtcclxubW9kdWxlLmV4cG9ydHMgPSBuZXdIZXJvO1xyXG4qLyIsImltcG9ydCB7IEludGVyZmFjZSB9IGZyb20gJ3JlYWRsaW5lJztcbmltcG9ydCB7bmV3R2FtZSwgbmV3SHJlc30gZnJvbSAnLi4vbGliL19KU09OX21haV9ndWxkJ1xuaW1wb3J0IGNyZWF0ZUVycm9yICBmcm9tICdodHRwLWVycm9ycyc7XG5cbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbi8qIEdFVCB1c2VycyBsaXN0aW5nLiAqL1xucm91dGVyLmdldCAoJy8nLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIG1haUd1bGQnKTtcbn0pO1xuXG5yb3V0ZXIucG9zdCgnL25ld0dhbWUnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXQgPSBuZXdHYW1lKHJlcS5ib2R5KTtcbiAgICByZXMuc3RhdHVzKDIwMCk7cmVzLmpzb24ocmV0KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coYG5ld0dhbWUgUE9TVCBlcnJvcjogJHtlcnJ9YCk7XG4gICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcbiAgfVxufSk7XG5yb3V0ZXIuZ2V0ICgnL25ld0dhbWUnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIG1haU5ld0dhbWUnKTtcbn0pO1xuXG5yb3V0ZXIucG9zdCgnL25ld0hyZXMnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXQgPSBuZXdIcmVzKHJlcS5ib2R5KTtcbiAgICByZXMuc3RhdHVzKDIwMCk7cmVzLmpzb24ocmV0KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coYG5ld0hyZXMgUE9TVCBlcnJvcjogJHtlcnJ9YCk7XG4gICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcbiAgfVxufSk7XG5cbnJvdXRlci5nZXQgKCcvbmV3SHJlcycsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgbWFpTmV3SHJlcycpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5cbnZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xudmFyIG1haUd1bGRSb3V0ZXIgPSByZXF1aXJlKCcuL21haUd1bGQnKTtcblxuLy8gdmlldyBlbmdpbmUgc2V0dXBcbnJvdXRlci51c2UoJy9ndWxkJywgICBtYWlHdWxkUm91dGVyKTtcblxuLyogR0VUIHVzZXJzIGxpc3RpbmcuICovXG5yb3V0ZXIuZ2V0KCcvJywgZnVuY3Rpb24ocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pIHtcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIG1haWV4Jyk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbnZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4vKiBHRVQgdXNlcnMgbGlzdGluZy4gKi9cbnJvdXRlci5nZXQoJy8nLCBmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgdXNlciByZXNvdXJjZScpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHAtZXJyb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=