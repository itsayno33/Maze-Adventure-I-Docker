/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        //        + "\ngoods:    " + (Object.keys(a.goods??0).length)
        + "\nheroes:   " + ((_g = (_f = a.heroes) === null || _f === void 0 ? void 0 : _f.length) !== null && _g !== void 0 ? _g : '?')
        + "\n");
}
var C_Guild = /** @class */ (function () {
    function C_Guild(a) {
        this.id = -1;
        this.uniq_id = 'mai_guld#' + (0, F_Rand_1._get_uuid)();
        this.save_id = -1;
        this.name = '';
        this.gold = 0;
        //        this.goods      = new C_GoodsList();
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
    /*
        public static from_obj_to_string(oa: C_Guild): string {
            return JSON.stringify(oa, null, "\t");
        }
        public static from_objArray_to_string(oaa: {[uid: string]: C_Guild}): string {
            const oa = [] as C_Guild[];
            for (const ii in oaa) oa.push(oaa[ii]);
            return JSON.stringify(oa, null, "\t");
        }
        public static from_string_to_obj(txt: string): C_Guild {
            try {
                const j   = JSON.parse(txt) as JSON_Guild[];
                return new C_Guild(j);
            } catch (err) {
                return new C_Guild();
            };
        }
        public static from_string_to_objArray(txt: string): {[uid: string]: C_Guild} {
            try {
                const j   = JSON.parse(txt) as JSON_Guild[];
                const mpa = {} as {[id: string]: C_Guild};
                for (const jj of j) {
                    const aaa = new C_Guild().decode(jj);
                    mpa[aaa.uid()] = aaa;
                }
                return mpa;
            } catch (err) {
                return {};
            };
        }
    */
    C_Guild.prototype.encode = function () {
        var json_heroes = [];
        for (var ii in this.heroes)
            json_heroes.push(this.heroes[ii].encode());
        return {
            id: this.id,
            uniq_id: this.uniq_id,
            save_id: this.save_id,
            gold: this.gold,
            //            goods:   this.goods.encode(),
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
            this.gold;
        //        if (a.goods    !== undefined) this.goods.decode (a.goods);
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
            + "\ngold:     " + ((_e = this.gold) !== null && _e !== void 0 ? _e : 0)
            //            + "\ngoods:    " + (Object.keys(this.goods??0).length)
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
        this.gold = 0;
        //        this.goods      = new C_GoodsList(); 
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
            gold: this.gold,
            //            goods:     this.goods.encode(), 
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
        //        if (a.goods   !== undefined) this.goods.decode(a.goods);
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
        this.gold = (0, F_Rand_1._irand)(500, 1000);
        this.val = {
            skp: { ttl: 0, now: 0 },
            exp: { ttl: 0, now: 0 },
            'nxe': 1000
        };
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
    /*
    public static from_obj_to_string(oa: C_Maze): string {
        return JSON.stringify(oa, null, "\t");
    }
    public static from_objArray_to_string(oaa: {[uid: string]: C_Maze}): string {
        const oa = [] as C_Maze[];
        for (const ii in oaa) oa.push(oaa[ii]);
        return JSON.stringify(oa, null, "\t");
    }
    public static from_string_to_obj(txt: string): C_Maze {
        try {
            const j   = JSON.parse(txt) as JSON_Maze[];
            return new C_Maze().decode(j);
        } catch (err) {
            return new C_Maze();
        };
    }
    public static from_string_to_objArray(txt: string): {[uid: string]: C_Maze} {
        try {
            const j   = JSON.parse(txt) as JSON_Maze[];
            const mpa = {} as {[id: string]: C_Maze};
            for (const jj of j) {
                const aaa = new C_Maze().decode(jj);
                mpa[aaa.uid()] = aaa;
            }
            return mpa;
        } catch (err) {
            return {};
        };
    }
    */
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
        return JSON.stringify(oa.encode());
    };
    C_MovablePoint.from_objArray_to_string = function (oaa) {
        var oa = [];
        for (var ii in oaa)
            oa.push(oaa[ii].encode());
        return JSON.stringify(oa);
    };
    C_MovablePoint.from_string_to_obj = function (txt) {
        try {
            var j = JSON.parse(txt);
            return new C_MovablePoint().decode(j);
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
        //        + "\ngoods: "     + (Object.keys(a.goods??[]).length)
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
        this.gold = 0;
        //        this.goods  = new C_GoodsList();
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
    /*
        public static from_obj_to_string(oa: C_Team): string {
            return JSON.stringify(oa, null, "\t");
        }
        public static from_objArray_to_string(oaa: {[uid: string]: C_Team}): string {
            const oa = [] as C_Team[];
            for (const ii in oaa) oa.push(oaa[ii]);
            return JSON.stringify(oa, null, "\t");
        }
        public static from_string_to_obj(txt: string): C_Team {
            try {
                const j   = JSON.parse(txt) as C_Team[];
                return new C_Team(j);
            } catch (err) {
                return new C_Team();
            };
        }
        public static from_string_to_objArray(txt: string): {[uid: string]: C_Team} {
            try {
                const j   = JSON.parse(txt) as JSON_Team[];
                const mpa = {} as {[id: string]: C_Team};
                for (const jj of j) {
                    const aaa = new C_Team().decode(jj);
                    mpa[aaa.uid()] = aaa;
                }
                return mpa;
            } catch (err) {
                return {};
            };
        }
    */
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
            gold: this.gold,
            //            goods:     this.goods.encode(),
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
            this.gold = a.gold;
        //        if (a.goods  !== undefined)  this.goods.decode(a.goods);
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

/***/ "../mai/src/d_rdb/C_GuildRDB.ts":
/*!**************************************!*\
  !*** ../mai/src/d_rdb/C_GuildRDB.ts ***!
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_GuildRDB = void 0;
var C_Guild_1 = __webpack_require__(/*! ../d_mdl/C_Guild */ "../mai/src/d_mdl/C_Guild.ts");
var C_HeroRDB_1 = __webpack_require__(/*! ./C_HeroRDB */ "../mai/src/d_rdb/C_HeroRDB.ts");
var C_GuildRDB = /** @class */ (function () {
    function C_GuildRDB() {
    }
    C_GuildRDB.get_from_rdb_all = function (db_mai, mes, save_id) {
        return __awaiter(this, void 0, void 0, function () {
            var guld_array, _i, guld_array_1, guld, hres_array, _a, hres_array_1, hero;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, C_GuildRDB.get_from_tbl_all(db_mai, mes, save_id)];
                    case 1:
                        guld_array = _b.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, []];
                        }
                        _i = 0, guld_array_1 = guld_array;
                        _b.label = 2;
                    case 2:
                        if (!(_i < guld_array_1.length)) return [3 /*break*/, 5];
                        guld = guld_array_1[_i];
                        return [4 /*yield*/, C_HeroRDB_1.C_HeroRDB.get_from_rdb_all(db_mai, mes, save_id, guld.uid())];
                    case 3:
                        hres_array = _b.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, []];
                        }
                        for (_a = 0, hres_array_1 = hres_array; _a < hres_array_1.length; _a++) {
                            hero = hres_array_1[_a];
                            guld.add_hero(hero);
                        }
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, guld_array];
                }
            });
        });
    };
    C_GuildRDB.set_to_rdb = function (db_mai, mes, save_id, guld) {
        return __awaiter(this, void 0, void 0, function () {
            var guld_id, _i, _a, hero;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, C_GuildRDB.add_tbl(db_mai, mes, save_id, guld)];
                    case 1:
                        guld_id = _b.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        _i = 0, _a = guld.hres();
                        _b.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        hero = _a[_i];
                        return [4 /*yield*/, C_HeroRDB_1.C_HeroRDB.set_to_rdb(db_mai, mes, save_id, guld.uid(), hero)];
                    case 3:
                        _b.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, true];
                }
            });
        });
    };
    C_GuildRDB.del_to_rdb = function (db_mai, mes, save_id, guld_uid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, C_HeroRDB_1.C_HeroRDB.del_to_rdb(db_mai, mes, save_id, guld_uid)];
                    case 1:
                        _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, C_GuildRDB.del_tbl(db_mai, mes, save_id)];
                    case 2:
                        _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    // DB処理。save_idで指定されたguldレコードセットを読み込み
    // Guildクラスの配列にセットする
    // 
    C_GuildRDB.get_from_tbl_all = function (db_mai, mes, save_id) {
        return __awaiter(this, void 0, void 0, function () {
            var get_guld_SQL, resultRecordSet, guld_array, _i, resultRecordSet_1, rr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        get_guld_SQL = "\n            SELECT \tid, save_id, uniq_id, name, gold\n            FROM    tbl_guld\n            WHERE   save_id = :save_id\n        ";
                        return [4 /*yield*/, db_mai.query(get_guld_SQL, { save_id: save_id })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 67: ".concat(get_guld_SQL));
                                return [];
                            })];
                    case 1:
                        resultRecordSet = (_a.sent())[0];
                        if (resultRecordSet.length < 1) {
                            return [2 /*return*/, []];
                        }
                        guld_array = [];
                        for (_i = 0, resultRecordSet_1 = resultRecordSet; _i < resultRecordSet_1.length; _i++) {
                            rr = resultRecordSet_1[_i];
                            guld_array.push(new C_Guild_1.C_Guild(C_GuildRDB.from_stringArray_to_JSON(rr)));
                        }
                        return [2 /*return*/, guld_array];
                }
            });
        });
    };
    // DB処理。guldテーブルに自身のデータを追加(insert)して
    // そのID(id)を返す
    // 
    C_GuildRDB.add_tbl = function (db_mai, mes, save_id, guld) {
        return __awaiter(this, void 0, void 0, function () {
            var insert_guld_SQL, j;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        insert_guld_SQL = "\n            INSERT INTO tbl_guld ( save_id,  uniq_id,  name,  gold )\n            VALUES              ( :save_id, :uniq_id, :name, :gold )\n        ";
                        j = guld.encode();
                        return [4 /*yield*/, db_mai.query(insert_guld_SQL, {
                                save_id: save_id,
                                uniq_id: j.uniq_id,
                                name: j.name,
                                gold: j.gold,
                                //            goods:    JSON.stringify(j.goods),
                            })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 61: ".concat(insert_guld_SQL));
                                return [];
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, C_GuildRDB.lastInsert(db_mai, mes)];
                }
            });
        });
    };
    // tbl_teamで最後に追加した行番号(save_id)を返す【1行挿入専用】
    C_GuildRDB.lastInsert = function (db_mai, mes) {
        return __awaiter(this, void 0, void 0, function () {
            var lastInsert_SQL, recordSet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lastInsert_SQL = "\n            SELECT LAST_INSERT_ID() as id FROM tbl_guld;\n        ";
                        return [4 /*yield*/, db_mai.query(lastInsert_SQL)
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 500: ".concat(lastInsert_SQL, " ") + err);
                                return [];
                            })];
                    case 1:
                        recordSet = (_a.sent())[0];
                        if (recordSet.length < 1)
                            return [2 /*return*/, -1];
                        return [2 /*return*/, recordSet[0].id];
                }
            });
        });
    };
    // DB処理。save_idで指定されたレコード(複数)を削除(delete)する
    // 
    C_GuildRDB.del_tbl = function (db_mai, mes, save_id) {
        return __awaiter(this, void 0, void 0, function () {
            var delete_guld_SQL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        delete_guld_SQL = "\n            DELETE FROM tbl_guld \n            WHERE  save_id = :save_id\n        ";
                        return [4 /*yield*/, db_mai.query(delete_guld_SQL, { save_id: save_id })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 68: ".concat(delete_guld_SQL, " ") + err);
                                return false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    C_GuildRDB.from_stringArray_to_JSON = function (j) {
        return {
            id: j.id,
            save_id: j.save_id,
            uniq_id: j.uniq_id,
            name: j.name,
            gold: j.gold,
            //            goods:   JSON.parse(j.goods),
        };
    };
    return C_GuildRDB;
}());
exports.C_GuildRDB = C_GuildRDB;


/***/ }),

/***/ "../mai/src/d_rdb/C_HeroRDB.ts":
/*!*************************************!*\
  !*** ../mai/src/d_rdb/C_HeroRDB.ts ***!
  \*************************************/
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_HeroRDB = void 0;
var C_Hero_1 = __webpack_require__(/*! ../d_mdl/C_Hero */ "../mai/src/d_mdl/C_Hero.ts");
var C_HeroRDB = /** @class */ (function () {
    function C_HeroRDB(j) {
    }
    C_HeroRDB.get_from_rdb_all = function (db_mai, mes, save_id, join_uid) {
        return __awaiter(this, void 0, void 0, function () {
            var hres_array;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, C_HeroRDB.get_from_tbl_all(db_mai, mes, save_id, join_uid)];
                    case 1:
                        hres_array = _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/, hres_array];
                }
            });
        });
    };
    C_HeroRDB.set_to_rdb = function (db_mai, mes, save_id, join_uid, hero) {
        return __awaiter(this, void 0, void 0, function () {
            var hero_id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, C_HeroRDB.add_tbl(db_mai, mes, save_id, join_uid, hero)];
                    case 1:
                        hero_id = _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    C_HeroRDB.del_to_rdb_all = function (db_mai, mes, save_id) {
        return __awaiter(this, void 0, void 0, function () {
            var rslt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, C_HeroRDB.del_tbl_all(db_mai, mes, save_id)];
                    case 1:
                        rslt = _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    C_HeroRDB.del_to_rdb = function (db_mai, mes, save_id, join_uid) {
        return __awaiter(this, void 0, void 0, function () {
            var rslt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, C_HeroRDB.del_tbl(db_mai, mes, save_id, join_uid)];
                    case 1:
                        rslt = _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    // DB処理。idで指定されたheroレコードセット(単数)を読み込み
    // Heroクラスの配列にセットする
    // 
    C_HeroRDB.get_from_tbl = function (db_mai, mes, id) {
        return __awaiter(this, void 0, void 0, function () {
            var get_heroes_SQL, resultRecordSet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        get_heroes_SQL = "\n            SELECT \tid, save_id, uniq_id, join_uid, \n                    name, sex, age, gold, state, lv,  \n                    skp_ttl, skp_now, exp_ttl, exp_now, nxe, \n                    abi_p_bsc, abi_m_bsc, is_alive \n            FROM    tbl_hero\n            WHERE   id = :id\n        ";
                        return [4 /*yield*/, (db_mai === null || db_mai === void 0 ? void 0 : db_mai.query(get_heroes_SQL, { id: id }).catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 37a: ".concat(get_heroes_SQL));
                                return [];
                            }))];
                    case 1:
                        resultRecordSet = (_a.sent())[0];
                        if (resultRecordSet.length < 1) {
                            mes.set_err_message("データが有りません 39a: {$get_heroes_SQL}");
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, new C_Hero_1.C_Hero().decode(C_HeroRDB.from_stringArray_to_JSON(resultRecordSet[0]))];
                }
            });
        });
    };
    // DB処理。save_idとjoin_uidで指定されたheroレコードセット(複数)を読み込み
    // Heroクラスの配列にセットする
    // 
    C_HeroRDB.get_from_tbl_all = function (db_mai, mes, save_id, join_uid) {
        return __awaiter(this, void 0, void 0, function () {
            var get_heroes_SQL, resultRecordSet, hres_array, _i, resultRecordSet_1, rr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        get_heroes_SQL = "\n            SELECT \tid, save_id, uniq_id, join_uid, \n                    name, sex, age, gold, state, lv,  \n                    skp_ttl, skp_now, exp_ttl, exp_now, nxe, \n                    abi_p_bsc, abi_m_bsc, is_alive \n            FROM    tbl_hero\n            WHERE   save_id = :save_id AND join_uid = :join_uid\n        ";
                        return [4 /*yield*/, (db_mai === null || db_mai === void 0 ? void 0 : db_mai.query(get_heroes_SQL, { save_id: save_id, join_uid: join_uid }).catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 37b: ".concat(get_heroes_SQL));
                                return [];
                            }))];
                    case 1:
                        resultRecordSet = (_a.sent())[0];
                        if (resultRecordSet.length < 1) {
                            //            mes.set_err_message("データが有りません 39b: {$get_heroes_SQL}");
                            return [2 /*return*/, []];
                        }
                        hres_array = [];
                        for (_i = 0, resultRecordSet_1 = resultRecordSet; _i < resultRecordSet_1.length; _i++) {
                            rr = resultRecordSet_1[_i];
                            hres_array.push((new C_Hero_1.C_Hero()).decode(C_HeroRDB.from_stringArray_to_JSON(rr)));
                        }
                        return [2 /*return*/, hres_array];
                }
            });
        });
    };
    // DB処理。teamテーブルに自身のデータを1件追加(insert)して
    // そのID(id)を返す
    // 
    C_HeroRDB.add_tbl = function (db_mai, mes, save_id, join_uid, hero) {
        return __awaiter(this, void 0, void 0, function () {
            var insert_hero_SQL, jsonHero;
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
            return __generator(this, function (_y) {
                switch (_y.label) {
                    case 0:
                        insert_hero_SQL = "\n            INSERT INTO tbl_hero (\n                save_id, uniq_id, join_uid, \n                name, sex, age, gold, state, lv, \n                skp_ttl, skp_now, exp_ttl, exp_now, nxe,\n                abi_p_bsc, abi_m_bsc, is_alive \n            )\n            VALUES ( \n                :save_id, :uniq_id, :join_uid, \n                :name, :sex, :age, :gold, :state, :lv, \n                :skp_ttl, :skp_now, :exp_ttl, :exp_now, :nxe,\n                :abi_p_bsc, :abi_m_bsc, :is_alive \n            )\n        ";
                        jsonHero = hero.encode();
                        //debug
                        /*
                        console.error(
                             '  save_id='   +save_id
                            +', join_uid='  +join_uid
                            +', uniq_id='   +jsonHero.uniq_id
                            +', name='      +jsonHero.name
                            +', sex='       +jsonHero.sex
                            +', age='       +jsonHero.age
                            +', gold='      +jsonHero.gold
                            +', goods='     +(JSON.stringify(jsonHero?.goods)??'???')
                            +', state='     +jsonHero.state
                            +', lv='        +jsonHero.lv
                            +', skp_ttl='   +(jsonHero.val?.skp?.ttl??'???')
                            +', skp_now='   +(jsonHero.val?.skp?.now??jsonHero.val?.skp?.ttl??'???')
                            +', exp_ttl='   +(jsonHero.val?.exp?.ttl??'???')
                            +', exp_now='   +(jsonHero.val?.exp?.now??jsonHero.val?.exp?.ttl??'???')
                            +', nxe='       +(jsonHero.val?.nxe??-1)
                            +', abi_p_bsc=' +(JSON.stringify(jsonHero.abi_p_bsc)??'???')
                            +', abi_m_bsc=' +(JSON.stringify(jsonHero.abi_m_bsc)??'???')
                            +', is_alive='  +(jsonHero.is_alive !== 'N' ? 1 : 0)
                        )
                        */
                        return [4 /*yield*/, db_mai.query(insert_hero_SQL, {
                                'save_id': save_id,
                                'join_uid': join_uid,
                                'uniq_id': jsonHero.uniq_id,
                                'name': jsonHero.name,
                                'sex': jsonHero.sex,
                                'age': jsonHero.age,
                                'gold': jsonHero.gold,
                                //            'goods':     JSON.stringify(jsonHero.goods),
                                'state': jsonHero.state,
                                'lv': jsonHero.lv,
                                'skp_ttl': (_c = (_b = (_a = jsonHero.val) === null || _a === void 0 ? void 0 : _a.skp) === null || _b === void 0 ? void 0 : _b.ttl) !== null && _c !== void 0 ? _c : '',
                                'skp_now': (_j = (_f = (_e = (_d = jsonHero.val) === null || _d === void 0 ? void 0 : _d.skp) === null || _e === void 0 ? void 0 : _e.now) !== null && _f !== void 0 ? _f : (_h = (_g = jsonHero.val) === null || _g === void 0 ? void 0 : _g.skp) === null || _h === void 0 ? void 0 : _h.ttl) !== null && _j !== void 0 ? _j : '',
                                'exp_ttl': (_m = (_l = (_k = jsonHero.val) === null || _k === void 0 ? void 0 : _k.exp) === null || _l === void 0 ? void 0 : _l.ttl) !== null && _m !== void 0 ? _m : '',
                                'exp_now': (_t = (_q = (_p = (_o = jsonHero.val) === null || _o === void 0 ? void 0 : _o.exp) === null || _p === void 0 ? void 0 : _p.now) !== null && _q !== void 0 ? _q : (_s = (_r = jsonHero.val) === null || _r === void 0 ? void 0 : _r.exp) === null || _s === void 0 ? void 0 : _s.ttl) !== null && _t !== void 0 ? _t : '',
                                'nxe': (_v = (_u = jsonHero.val) === null || _u === void 0 ? void 0 : _u.nxe) !== null && _v !== void 0 ? _v : -1,
                                'abi_p_bsc': (_w = JSON.stringify(jsonHero.abi_p_bsc)) !== null && _w !== void 0 ? _w : '',
                                'abi_m_bsc': (_x = JSON.stringify(jsonHero.abi_m_bsc)) !== null && _x !== void 0 ? _x : '',
                                'is_alive': jsonHero.is_alive !== 'N' ? 1 : 0,
                            })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 37b: ".concat(insert_hero_SQL));
                                return [];
                            })];
                    case 1:
                        //debug
                        /*
                        console.error(
                             '  save_id='   +save_id
                            +', join_uid='  +join_uid
                            +', uniq_id='   +jsonHero.uniq_id
                            +', name='      +jsonHero.name
                            +', sex='       +jsonHero.sex
                            +', age='       +jsonHero.age
                            +', gold='      +jsonHero.gold
                            +', goods='     +(JSON.stringify(jsonHero?.goods)??'???')
                            +', state='     +jsonHero.state
                            +', lv='        +jsonHero.lv
                            +', skp_ttl='   +(jsonHero.val?.skp?.ttl??'???')
                            +', skp_now='   +(jsonHero.val?.skp?.now??jsonHero.val?.skp?.ttl??'???')
                            +', exp_ttl='   +(jsonHero.val?.exp?.ttl??'???')
                            +', exp_now='   +(jsonHero.val?.exp?.now??jsonHero.val?.exp?.ttl??'???')
                            +', nxe='       +(jsonHero.val?.nxe??-1)
                            +', abi_p_bsc=' +(JSON.stringify(jsonHero.abi_p_bsc)??'???')
                            +', abi_m_bsc=' +(JSON.stringify(jsonHero.abi_m_bsc)??'???')
                            +', is_alive='  +(jsonHero.is_alive !== 'N' ? 1 : 0)
                        )
                        */
                        _y.sent();
                        return [2 /*return*/, C_HeroRDB.lastInsert(db_mai, mes)];
                }
            });
        });
    };
    // tbl_heroで最後に追加した行番号(save_id)を返す【1行挿入専用】
    C_HeroRDB.lastInsert = function (db_mai, mes) {
        return __awaiter(this, void 0, void 0, function () {
            var lastInsert_SQL, recordSet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lastInsert_SQL = "\n            SELECT LAST_INSERT_ID() as id FROM tbl_hero;\n        ";
                        return [4 /*yield*/, db_mai.query(lastInsert_SQL)
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 500: ".concat(lastInsert_SQL, " ") + err);
                                return [];
                            })];
                    case 1:
                        recordSet = (_a.sent())[0];
                        if (recordSet.length < 1)
                            return [2 /*return*/, -1];
                        return [2 /*return*/, recordSet[0].id];
                }
            });
        });
    };
    // DB処理(クラス・メソッド)。Heroクラスの配列を受け取って、
    // 指定されたsave_idで　heroテーブルに追加(insert)して
    // そのID(id)の配列を返す
    // 
    C_HeroRDB.add_tbl_all = function (db_mai, mes, save_id, join_uid, hero_array) {
        return __awaiter(this, void 0, void 0, function () {
            var hero_id_set, _i, hero_array_1, hero, hero_id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hero_id_set = [];
                        _i = 0, hero_array_1 = hero_array;
                        _a.label = 1;
                    case 1:
                        if (!(_i < hero_array_1.length)) return [3 /*break*/, 4];
                        hero = hero_array_1[_i];
                        return [4 /*yield*/, C_HeroRDB.add_tbl(db_mai, mes, save_id, join_uid, hero)];
                    case 2:
                        hero_id = _a.sent();
                        if (mes.is_err())
                            return [2 /*return*/, []];
                        hero_id_set.push(hero_id);
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, hero_id_set];
                }
            });
        });
    };
    // DB処理。save_idで指定されたレコード(複数)を削除(delete)する
    // 
    C_HeroRDB.del_tbl_all = function (db_mai, mes, save_id) {
        return __awaiter(this, void 0, void 0, function () {
            var delete_hero_SQL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        delete_hero_SQL = "\n            DELETE FROM tbl_hero \n            WHERE  save_id = :save_id \n        ";
                        return [4 /*yield*/, db_mai.query(delete_hero_SQL, { save_id: save_id })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 17: ".concat(delete_hero_SQL, " ") + err);
                                return false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    // DB処理。save_idとjoin_uidで指定されたレコード(複数)を削除(delete)する
    // 
    C_HeroRDB.del_tbl = function (db_mai, mes, save_id, join_uid) {
        return __awaiter(this, void 0, void 0, function () {
            var delete_hero_SQL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        delete_hero_SQL = "\n            DELETE FROM tbl_hero \n            WHERE  save_id = :save_id AND  join_uid = :join_uid\n        ";
                        return [4 /*yield*/, db_mai.query(delete_hero_SQL, { save_id: save_id, join_uid: join_uid })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 18: ".concat(delete_hero_SQL, " ") + err);
                                return false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    C_HeroRDB.from_stringArray_to_JSON = function (j) {
        var abi_p = JSON.parse(j.abi_p_bsc);
        var abi_m = JSON.parse(j.abi_m_bsc);
        var json = {
            id: j.id,
            save_id: j.save_id,
            uniq_id: j.uniq_id,
            name: j.name,
            sex: j.sex,
            age: j.age,
            gold: j.gold,
            //            goods:     JSON.parse(j.goods),
            state: j.state,
            lv: j.lv,
            val: {
                skp: {
                    ttl: JSON.parse(j.skp_ttl),
                    now: JSON.parse(j.skp_now),
                },
                exp: {
                    ttl: JSON.parse(j.exp_ttl),
                    now: JSON.parse(j.exp_now),
                },
                nxe: JSON.parse(j.nxe),
            },
            abi_p_bsc: JSON.parse(j.abi_p_bsc),
            abi_m_bsc: JSON.parse(j.abi_m_bsc),
            /*
                        abi_p: {
                            bsc: abi_p,
                            ttl: abi_p,
                            now: abi_p,
                        },
                        abi_m: {
                            bsc: abi_m,
                            ttl: abi_m,
                            now: abi_m,
                        },
             */
            is_alive: j.is_alive !== 0 ? "Y" : "N",
        };
        return json;
    };
    return C_HeroRDB;
}());
exports.C_HeroRDB = C_HeroRDB;


/***/ }),

/***/ "../mai/src/d_rdb/C_MazeRDB.ts":
/*!*************************************!*\
  !*** ../mai/src/d_rdb/C_MazeRDB.ts ***!
  \*************************************/
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_MazeRDB = void 0;
var C_Maze_1 = __webpack_require__(/*! ../d_mdl/C_Maze */ "../mai/src/d_mdl/C_Maze.ts");
var C_MazeRDB = /** @class */ (function () {
    function C_MazeRDB() {
    }
    C_MazeRDB.get_from_rdb_all = function (db_mai, mes, save_id) {
        return __awaiter(this, void 0, void 0, function () {
            var maze_array;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, C_MazeRDB.get_from_tbl_all(db_mai, mes, save_id)];
                    case 1:
                        maze_array = _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/, maze_array];
                }
            });
        });
    };
    C_MazeRDB.set_to_rdb = function (db_mai, mes, save_id, maze) {
        return __awaiter(this, void 0, void 0, function () {
            var mase_id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, C_MazeRDB.add_tbl(db_mai, mes, save_id, maze)];
                    case 1:
                        mase_id = _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    C_MazeRDB.del_to_rdb = function (db_mai, mes, save_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                C_MazeRDB.del_tbl(db_mai, mes, save_id);
                if (mes.is_err()) {
                    return [2 /*return*/, false];
                }
                return [2 /*return*/, true];
            });
        });
    };
    // DB処理。save_idで指定されたmazeレコードセットを読み込み
    // Mazeクラスの配列にセットする
    // 
    C_MazeRDB.get_from_tbl_all = function (db_mai, mes, save_id) {
        return __awaiter(this, void 0, void 0, function () {
            var get_maze_SQL, resultRecordSet, maze_array, _i, resultRecordSet_1, rr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        get_maze_SQL = "\n            SELECT \tid, save_id, uniq_id, name, \n                    size_x, size_y, size_z, maps, mask \n            FROM tbl_maze\n            WHERE   save_id = :save_id\n        ";
                        return [4 /*yield*/, db_mai.query(get_maze_SQL, { save_id: save_id })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 33: ".concat(get_maze_SQL));
                                return [];
                            })];
                    case 1:
                        resultRecordSet = (_a.sent())[0];
                        if (resultRecordSet.length < 1) {
                            return [2 /*return*/, []];
                        }
                        maze_array = [];
                        for (_i = 0, resultRecordSet_1 = resultRecordSet; _i < resultRecordSet_1.length; _i++) {
                            rr = resultRecordSet_1[_i];
                            maze_array.push(new C_Maze_1.C_Maze(C_MazeRDB.from_stringArray_to_JSON(rr)));
                        }
                        return [2 /*return*/, maze_array];
                }
            });
        });
    };
    // DB処理。mazeテーブルに自身のデータを追加(insert)して
    // そのID(maze_id)を返す
    // 
    C_MazeRDB.add_tbl = function (db_mai, mes, save_id, maze) {
        return __awaiter(this, void 0, void 0, function () {
            var insert_maze_SQL, j;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        insert_maze_SQL = "\n            INSERT INTO tbl_maze (\n                save_id, uniq_id, name, \n                size_x, size_y, size_z, maps, mask\n            )\n            VALUES (\n                :save_id, :uniq_id, :name, \n                :size_x, :size_y, :size_z, :maps, :mask \n            )\n        ";
                        j = maze.encode();
                        //Debug
                        /*
                        console.error(
                               "save_id=" + save_id
                            +", uniq_id=" + j.uniq_id
                            +", name="    + j.name
                            +", size_x="  + j.size_x
                            +", size_y="  + j.size_y
                            +", size_z="  + j.size_z
                            +", maps="    + j.maze
                            +", mask="    + j.mask
                        )
                        */
                        return [4 /*yield*/, db_mai.query(insert_maze_SQL, {
                                save_id: save_id,
                                uniq_id: j.uniq_id,
                                name: j.name,
                                size_x: j.size_x,
                                size_y: j.size_y,
                                size_z: j.size_z,
                                maps: j.maze,
                                mask: j.mask,
                            })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 3: ".concat(insert_maze_SQL));
                                return [];
                            })];
                    case 1:
                        //Debug
                        /*
                        console.error(
                               "save_id=" + save_id
                            +", uniq_id=" + j.uniq_id
                            +", name="    + j.name
                            +", size_x="  + j.size_x
                            +", size_y="  + j.size_y
                            +", size_z="  + j.size_z
                            +", maps="    + j.maze
                            +", mask="    + j.mask
                        )
                        */
                        _a.sent();
                        return [2 /*return*/, C_MazeRDB.lastInsert(db_mai, mes)];
                }
            });
        });
    };
    // tbl_teamで最後に追加した行番号(save_id)を返す【1行挿入専用】
    C_MazeRDB.lastInsert = function (db_mai, mes) {
        return __awaiter(this, void 0, void 0, function () {
            var lastInsert_SQL, recordSet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lastInsert_SQL = "\n            SELECT LAST_INSERT_ID() as id FROM tbl_maze;\n        ";
                        return [4 /*yield*/, db_mai.query(lastInsert_SQL)
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 500: ".concat(lastInsert_SQL, " ") + err);
                                return [];
                            })];
                    case 1:
                        recordSet = (_a.sent())[0];
                        if (recordSet.length < 1)
                            return [2 /*return*/, -1];
                        return [2 /*return*/, recordSet[0].id];
                }
            });
        });
    };
    // DB処理。save_idで指定されたレコード(複数)を削除(delete)する
    // 
    C_MazeRDB.del_tbl = function (db_mai, mes, save_id) {
        return __awaiter(this, void 0, void 0, function () {
            var delete_maze_SQL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        delete_maze_SQL = "\n            DELETE FROM tbl_maze \n            WHERE  save_id = :save_id\n        ";
                        return [4 /*yield*/, db_mai.query(delete_maze_SQL, { save_id: save_id })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 12: ".concat(delete_maze_SQL, " ") + err);
                                return false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    C_MazeRDB.from_stringArray_to_JSON = function (j) {
        return {
            id: j.id,
            uniq_id: j.uniq_id,
            save_id: j.save_id,
            name: j.name,
            size_x: j.size_x,
            size_y: j.size_y,
            size_z: j.size_z,
            maze: j.maps,
            mask: j.mask,
            //            objs:    JSON.parse(j.objs),
        };
    };
    return C_MazeRDB;
}());
exports.C_MazeRDB = C_MazeRDB;


/***/ }),

/***/ "../mai/src/d_rdb/C_SaveDataRDB.ts":
/*!*****************************************!*\
  !*** ../mai/src/d_rdb/C_SaveDataRDB.ts ***!
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_SaveDataRDB = exports.C_SaveInfoRDB = void 0;
var C_SaveData_1 = __webpack_require__(/*! ../../../mai/src/d_mdl/C_SaveData */ "../mai/src/d_mdl/C_SaveData.ts");
var C_SaveInfo_1 = __webpack_require__(/*! ../../../mai/src/d_mdl/C_SaveInfo */ "../mai/src/d_mdl/C_SaveInfo.ts");
var C_MovablePoint_1 = __webpack_require__(/*! ../../../mai/src/d_mdl/C_MovablePoint */ "../mai/src/d_mdl/C_MovablePoint.ts");
var C_TeamRDB_1 = __webpack_require__(/*! ./C_TeamRDB */ "../mai/src/d_rdb/C_TeamRDB.ts");
var C_HeroRDB_1 = __webpack_require__(/*! ./C_HeroRDB */ "../mai/src/d_rdb/C_HeroRDB.ts");
var C_MazeRDB_1 = __webpack_require__(/*! ./C_MazeRDB */ "../mai/src/d_rdb/C_MazeRDB.ts");
var C_GuildRDB_1 = __webpack_require__(/*! ./C_GuildRDB */ "../mai/src/d_rdb/C_GuildRDB.ts");
var C_SaveInfoRDB = /** @class */ (function () {
    function C_SaveInfoRDB() {
    }
    // DB処理。player_dに該当するセーブデータをDBから読み込み
    // SaveInfo[]の配列を返す
    // 非活性データや削除済データはスキップする
    // 
    C_SaveInfoRDB.get_list_by_pid = function (db_mai, mes, player_id) {
        return __awaiter(this, void 0, void 0, function () {
            var get_save_SQL, recordSet, save_data_set, ii, save;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        get_save_SQL = "\n            SELECT save_id, player_id, uniq_no, title, detail, point, \n                    auto_mode, is_active, is_delete, \n                    mypos as mp, \n                    DATE_FORMAT(save_time,'%Y-%m-%dT%H:%i:%s.%fZ') AS save_time\n            FROM   tbl_save\n            WHERE  player_id = :player_id \n            ORDER  BY title COLLATE utf8mb4_unicode_ci ASC\n        ";
                        return [4 /*yield*/, db_mai.query(get_save_SQL, { player_id: player_id })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 50: ".concat(get_save_SQL, " ") + err);
                                return [];
                            })];
                    case 1:
                        recordSet = (_a.sent())[0];
                        if (recordSet.length < 1)
                            return [2 /*return*/, []];
                        save_data_set = [];
                        for (ii in recordSet) {
                            if (recordSet[ii].is_active == '0')
                                continue;
                            if (recordSet[ii].is_delete != '0')
                                continue;
                            save = new C_SaveInfo_1.C_SaveInfo(recordSet[ii]);
                            save.mypos = C_MovablePoint_1.C_MovablePoint.from_string_to_obj(recordSet[ii].mp);
                            save_data_set.push(save);
                        }
                        return [2 /*return*/, save_data_set];
                }
            });
        });
    };
    // DB処理。ユニーク・ナンバーからsave_idを得る。該当するレコードが無ければ戻り値で-1を返す
    // 
    C_SaveInfoRDB.get_save_id_at_tbl = function (db_mai, mes, player_id, uniq_no) {
        return __awaiter(this, void 0, void 0, function () {
            var seek_save_SQL, recordSet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        seek_save_SQL = "\n            SELECT save_id\n            FROM   tbl_save\n            WHERE  player_id = :player_id AND uniq_no = :uniq_no\n            ORDER  BY uniq_no\n        ";
                        return [4 /*yield*/, db_mai.query(seek_save_SQL, { player_id: player_id, uniq_no: uniq_no })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 20: ".concat(seek_save_SQL, " ") + err);
                                return [];
                            })];
                    case 1:
                        recordSet = (_a.sent())[0];
                        if (recordSet.length < 1) {
                            return [2 /*return*/, -1];
                        }
                        if (isNaN(recordSet[0].save_id)) {
                            mes.set_err_message("save_id \u6570\u5024\u30A8\u30E9\u30FC 21: ".concat(recordSet[0].save_id, " "));
                            return [2 /*return*/, -1];
                        }
                        return [2 /*return*/, Number(recordSet[0].save_id)];
                }
            });
        });
    };
    return C_SaveInfoRDB;
}());
exports.C_SaveInfoRDB = C_SaveInfoRDB;
var C_SaveDataRDB = /** @class */ (function () {
    function C_SaveDataRDB() {
    }
    C_SaveDataRDB.get_from_rdb = function (db_mai, mes, save_id) {
        return __awaiter(this, void 0, void 0, function () {
            var save_data, maze_array, _i, maze_array_1, maze, team_array, _a, team_array_1, team, guld_array, _b, guld_array_1, guld;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, C_SaveDataRDB.get_from_tbl(db_mai, mes, save_id)];
                    case 1:
                        save_data = _c.sent();
                        if (save_data === undefined || mes.is_err()) {
                            return [2 /*return*/, undefined];
                        }
                        return [4 /*yield*/, C_MazeRDB_1.C_MazeRDB.get_from_rdb_all(db_mai, mes, save_id)];
                    case 2:
                        maze_array = _c.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, undefined];
                        }
                        for (_i = 0, maze_array_1 = maze_array; _i < maze_array_1.length; _i++) {
                            maze = maze_array_1[_i];
                            save_data.all_maze[maze.uid()] = maze;
                        }
                        return [4 /*yield*/, C_TeamRDB_1.C_TeamRDB.get_from_rdb_all(db_mai, mes, save_id)];
                    case 3:
                        team_array = _c.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, undefined];
                        }
                        for (_a = 0, team_array_1 = team_array; _a < team_array_1.length; _a++) {
                            team = team_array_1[_a];
                            save_data.all_team[team.uid()] = team;
                        }
                        return [4 /*yield*/, C_GuildRDB_1.C_GuildRDB.get_from_rdb_all(db_mai, mes, save_id)];
                    case 4:
                        guld_array = _c.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, undefined];
                        }
                        for (_b = 0, guld_array_1 = guld_array; _b < guld_array_1.length; _b++) {
                            guld = guld_array_1[_b];
                            save_data.all_guld[guld.uid()] = guld;
                        }
                        return [2 /*return*/, save_data];
                }
            });
        });
    };
    C_SaveDataRDB.set_to_rdb = function (db_mai, mes, save) {
        return __awaiter(this, void 0, void 0, function () {
            var save_id, _a, _b, _c, _i, ii, _d, _e, _f, _g, ii, _h, _j, _k, _l, ii;
            return __generator(this, function (_m) {
                switch (_m.label) {
                    case 0:
                        if (save === undefined)
                            return [2 /*return*/, false];
                        return [4 /*yield*/, C_SaveDataRDB.add_tbl(db_mai, mes, save)];
                    case 1:
                        save_id = _m.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        _a = save.all_maze;
                        _b = [];
                        for (_c in _a)
                            _b.push(_c);
                        _i = 0;
                        _m.label = 2;
                    case 2:
                        if (!(_i < _b.length)) return [3 /*break*/, 5];
                        _c = _b[_i];
                        if (!(_c in _a)) return [3 /*break*/, 4];
                        ii = _c;
                        return [4 /*yield*/, C_MazeRDB_1.C_MazeRDB.set_to_rdb(db_mai, mes, save_id, save.all_maze[ii])];
                    case 3:
                        _m.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        _m.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5:
                        _d = save.all_team;
                        _e = [];
                        for (_f in _d)
                            _e.push(_f);
                        _g = 0;
                        _m.label = 6;
                    case 6:
                        if (!(_g < _e.length)) return [3 /*break*/, 9];
                        _f = _e[_g];
                        if (!(_f in _d)) return [3 /*break*/, 8];
                        ii = _f;
                        return [4 /*yield*/, C_TeamRDB_1.C_TeamRDB.set_to_rdb(db_mai, mes, save_id, save.all_team[ii])];
                    case 7:
                        _m.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        _m.label = 8;
                    case 8:
                        _g++;
                        return [3 /*break*/, 6];
                    case 9:
                        _h = save.all_guld;
                        _j = [];
                        for (_k in _h)
                            _j.push(_k);
                        _l = 0;
                        _m.label = 10;
                    case 10:
                        if (!(_l < _j.length)) return [3 /*break*/, 13];
                        _k = _j[_l];
                        if (!(_k in _h)) return [3 /*break*/, 12];
                        ii = _k;
                        return [4 /*yield*/, C_GuildRDB_1.C_GuildRDB.set_to_rdb(db_mai, mes, save_id, save.all_guld[ii])];
                    case 11:
                        _m.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        _m.label = 12;
                    case 12:
                        _l++;
                        return [3 /*break*/, 10];
                    case 13: return [2 /*return*/, true];
                }
            });
        });
    };
    C_SaveDataRDB.del_to_rdb = function (db_mai, mes, save_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, C_HeroRDB_1.C_HeroRDB.del_tbl_all(db_mai, mes, save_id)];
                    case 1:
                        _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, C_GuildRDB_1.C_GuildRDB.del_tbl(db_mai, mes, save_id)];
                    case 2:
                        _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, C_TeamRDB_1.C_TeamRDB.del_tbl(db_mai, mes, save_id)];
                    case 3:
                        _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, C_MazeRDB_1.C_MazeRDB.del_tbl(db_mai, mes, save_id)];
                    case 4:
                        _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, C_SaveDataRDB.del_tbl(db_mai, mes, save_id)];
                    case 5:
                        _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    // DB処理。save_idで指定されたsaveレコード(単数)を読み込み
    // save_dataを返す
    // 
    C_SaveDataRDB.get_from_tbl = function (db_mai, mes, save_id) {
        return __awaiter(this, void 0, void 0, function () {
            var get_save_SQL, recordSet, save;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        get_save_SQL = "\n            SELECT  save_id, player_id, uniq_no, title, detail, point, \n                    auto_mode, is_active, is_delete, \n                    mypos as mp, DATE_FORMAT(save_time,'%Y-%m-%dT%H:%i:%s.%fZ') AS save_time,\n                    all_mvpt as mvpt\n            FROM   tbl_save\n            WHERE  save_id = :save_id\n        ";
                        return [4 /*yield*/, db_mai.query(get_save_SQL, { save_id: save_id })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 30: ".concat(get_save_SQL, " ") + err);
                                return [];
                            })];
                    case 1:
                        recordSet = (_a.sent())[0];
                        //degub if (recordSet === undefined) console.error(`SaveDataRDB.get_from_table Error: undefinde!! save_id=${save_id}`);
                        if (recordSet.length < 1) {
                            mes.set_err_message("\u8A72\u5F53\u3059\u308B\u30C7\u30FC\u30BF\u304C\u6709\u308A\u307E\u305B\u3093: ".concat(get_save_SQL));
                            return [2 /*return*/, undefined];
                        }
                        save = new C_SaveData_1.C_SaveData(recordSet[0]);
                        save.mypos = C_MovablePoint_1.C_MovablePoint.from_string_to_obj(recordSet[0].mp);
                        save.all_mvpt = C_MovablePoint_1.C_MovablePoint.from_string_to_objArray(recordSet[0].mvpt);
                        //        save.all_maze  = C_Maze .from_string_to_objArray(recordSet[0].maze);
                        //        save.all_team  = C_Team .from_string_to_objArray(recordSet[0].team);
                        //        save.all_guld  = C_Guild.from_string_to_objArray(recordSet[0].guld);
                        return [2 /*return*/, save];
                }
            });
        });
    };
    // DB処理。saveテーブルに自身のデータを追加(insert)して
    // そのID(save_id)を返す
    // 
    C_SaveDataRDB.add_tbl = function (db_mai, mes, save) {
        return __awaiter(this, void 0, void 0, function () {
            var auto_mode, is_active, is_delete, insert_save_SQL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        auto_mode = save.auto_mode ? '1' : '0';
                        is_active = save.is_active ? '1' : '0';
                        is_delete = save.is_delete ? '1' : '0';
                        insert_save_SQL = "\n            INSERT  INTO tbl_save (\n                    player_id, uniq_no,   title, detail, point, \n                    mypos, all_mvpt, \n                    auto_mode, is_active, is_delete\n                )\n            VALUES ( \n                    :player_id, :uniq_no,   :title, :detail, :point, \n                    :mypos, :all_mvpt, \n                    :auto_mode, :is_active, :is_delete)\n        ";
                        return [4 /*yield*/, db_mai.query(insert_save_SQL, {
                                player_id: save.player_id,
                                uniq_no: save.uniq_no,
                                title: save.title,
                                detail: save.detail,
                                point: save.point,
                                mypos: C_MovablePoint_1.C_MovablePoint.from_obj_to_string(save.mypos),
                                all_mvpt: C_MovablePoint_1.C_MovablePoint.from_objArray_to_string(save.all_mvpt),
                                auto_mode: auto_mode,
                                is_active: is_active,
                                is_delete: is_delete,
                            })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 0: ".concat(insert_save_SQL, " ") + err);
                                return -1;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, C_SaveDataRDB.lastInsert(db_mai, mes)];
                }
            });
        });
    };
    // tbl_save_dataで最後に追加した行番号(save_id)を返す【1行挿入専用】
    C_SaveDataRDB.lastInsert = function (db_mai, mes) {
        return __awaiter(this, void 0, void 0, function () {
            var lastInsert_SQL, recordSet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lastInsert_SQL = "\n            SELECT LAST_INSERT_ID() as id FROM tbl_save;\n        ";
                        return [4 /*yield*/, db_mai.query(lastInsert_SQL)
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 500: ".concat(lastInsert_SQL, " ") + err);
                                return [];
                            })];
                    case 1:
                        recordSet = (_a.sent())[0];
                        if (recordSet.length < 1)
                            return [2 /*return*/, -1];
                        return [2 /*return*/, recordSet[0].id];
                }
            });
        });
    };
    // DB処理。save_idで指定されたレコードを削除(delete)する
    // 
    C_SaveDataRDB.del_tbl = function (db_mai, mes, save_id) {
        return __awaiter(this, void 0, void 0, function () {
            var delete_save_SQL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        delete_save_SQL = "\n            DELETE FROM tbl_save \n            WHERE  save_id = :save_id\n        ";
                        return [4 /*yield*/, db_mai.query(delete_save_SQL, {
                                save_id: save_id,
                            })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 10: ".concat(delete_save_SQL, " ") + err);
                                return false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    return C_SaveDataRDB;
}());
exports.C_SaveDataRDB = C_SaveDataRDB;


/***/ }),

/***/ "../mai/src/d_rdb/C_TeamRDB.ts":
/*!*************************************!*\
  !*** ../mai/src/d_rdb/C_TeamRDB.ts ***!
  \*************************************/
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_TeamRDB = void 0;
var C_Team_1 = __webpack_require__(/*! ../d_mdl/C_Team */ "../mai/src/d_mdl/C_Team.ts");
var C_HeroRDB_1 = __webpack_require__(/*! ./C_HeroRDB */ "../mai/src/d_rdb/C_HeroRDB.ts");
var C_TeamRDB = /** @class */ (function () {
    function C_TeamRDB() {
    }
    C_TeamRDB.get_from_rdb_all = function (db_mai, mes, save_id) {
        return __awaiter(this, void 0, void 0, function () {
            var team_array, _i, team_array_1, team, hres_array, _a, hres_array_1, hero;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, C_TeamRDB.get_from_tbl_all(db_mai, mes, save_id)];
                    case 1:
                        team_array = _b.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, []];
                        }
                        _i = 0, team_array_1 = team_array;
                        _b.label = 2;
                    case 2:
                        if (!(_i < team_array_1.length)) return [3 /*break*/, 5];
                        team = team_array_1[_i];
                        return [4 /*yield*/, C_HeroRDB_1.C_HeroRDB.get_from_rdb_all(db_mai, mes, save_id, team.uid())];
                    case 3:
                        hres_array = _b.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, []];
                        }
                        for (_a = 0, hres_array_1 = hres_array; _a < hres_array_1.length; _a++) {
                            hero = hres_array_1[_a];
                            team.add_hero(hero);
                        }
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, team_array];
                }
            });
        });
    };
    C_TeamRDB.get_from_rdb = function (db_mai, mes, save_id, team) {
        return __awaiter(this, void 0, void 0, function () {
            var rslt0, hres_array, _i, hres_array_2, hero;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, C_TeamRDB.get_from_tbl(db_mai, mes, save_id, team.uid())];
                    case 1:
                        rslt0 = _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, C_HeroRDB_1.C_HeroRDB.get_from_rdb_all(db_mai, mes, save_id, team.uid())];
                    case 2:
                        hres_array = _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        for (_i = 0, hres_array_2 = hres_array; _i < hres_array_2.length; _i++) {
                            hero = hres_array_2[_i];
                            team.add_hero(hero);
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    C_TeamRDB.set_to_rdb = function (db_mai, mes, save_id, team) {
        return __awaiter(this, void 0, void 0, function () {
            var team_id, _i, _a, hero;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, C_TeamRDB.add_tbl(db_mai, mes, save_id, team)];
                    case 1:
                        team_id = _b.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        _i = 0, _a = team.hres();
                        _b.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        hero = _a[_i];
                        return [4 /*yield*/, C_HeroRDB_1.C_HeroRDB.set_to_rdb(db_mai, mes, save_id, team.uid(), hero)];
                    case 3:
                        _b.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, true];
                }
            });
        });
    };
    C_TeamRDB.del_to_rdb = function (db_mai, mes, save_id, team_uid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, C_HeroRDB_1.C_HeroRDB.del_to_rdb(db_mai, mes, save_id, team_uid)];
                    case 1:
                        _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, C_TeamRDB.del_tbl(db_mai, mes, save_id)];
                    case 2:
                        _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    // DB処理。save_idで指定されたteamレコードセットを読み込み
    // Teamクラスの配列にセットする
    // 
    C_TeamRDB.get_from_tbl_all = function (db_mai, mes, save_id) {
        return __awaiter(this, void 0, void 0, function () {
            var get_team_SQL, resultRecordSet, team_array, _i, resultRecordSet_1, rr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        get_team_SQL = "\n            SELECT \tid, save_id, uniq_id, name, locate, gold\n            FROM tbl_team\n            WHERE   save_id = :save_id\n        ";
                        return [4 /*yield*/, db_mai.query(get_team_SQL, { save_id: save_id })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 37a: ".concat(get_team_SQL, " ") + err);
                                return [];
                            })];
                    case 1:
                        resultRecordSet = (_a.sent())[0];
                        if (resultRecordSet.length < 1) {
                            return [2 /*return*/, []];
                        }
                        team_array = [];
                        for (_i = 0, resultRecordSet_1 = resultRecordSet; _i < resultRecordSet_1.length; _i++) {
                            rr = resultRecordSet_1[_i];
                            team_array.push(new C_Team_1.C_Team(C_TeamRDB.from_stringArray_to_JSON(rr)));
                        }
                        return [2 /*return*/, team_array];
                }
            });
        });
    };
    // DB処理。save_idと自身のuniq_idで指定されたteamレコードセットを読み込む
    // 
    C_TeamRDB.get_from_tbl = function (db_mai, mes, save_id, join_uid) {
        return __awaiter(this, void 0, void 0, function () {
            var get_team_SQL, resultRecordSet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        get_team_SQL = "\n            SELECT \tid, save_id, uniq_id, name, locate, gold \n            FROM tbl_team\n            WHERE   save_id = :save_id  AND  uniq_id = :uniq_id\n        ";
                        return [4 /*yield*/, db_mai.query(get_team_SQL, { save_id: save_id, join_uid: join_uid })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 37b: ".concat(get_team_SQL, " ") + err);
                                return [];
                            })];
                    case 1:
                        resultRecordSet = (_a.sent())[0];
                        if (resultRecordSet.length < 1) {
                            mes.set_err_message('Uniq_idに該当するTeamデータが有りません');
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, new C_Team_1.C_Team(C_TeamRDB.from_stringArray_to_JSON(resultRecordSet[0]))];
                }
            });
        });
    };
    // DB処理。teamテーブルにC_Teamのデータを追加(insert)して
    // そのID(id)を返す
    // 
    C_TeamRDB.add_tbl = function (db_mai, mes, save_id, team) {
        return __awaiter(this, void 0, void 0, function () {
            var insert_team_SQL, j;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        insert_team_SQL = "\n            INSERT INTO tbl_team (\n                save_id, uniq_id, name, locate, gold\n            )\n            VALUES ( \n                :save_id, :uniq_id, :name, :locate, :gold\n            )\n        ";
                        j = team.encode();
                        //console.error(`${save_id}, ${j.uniq_id}, ${j.name}, ${JSON.stringify(j.locate)}, ${JSON.stringify(j.gold)}`);
                        return [4 /*yield*/, db_mai.query(insert_team_SQL, {
                                save_id: save_id,
                                uniq_id: j.uniq_id,
                                name: j.name,
                                locate: JSON.stringify(j.locate),
                                gold: j.gold,
                                //            goods   : JSON.stringify(j.goods),  
                            })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 6: ".concat(insert_team_SQL, " ") + err);
                                return [];
                            })];
                    case 1:
                        //console.error(`${save_id}, ${j.uniq_id}, ${j.name}, ${JSON.stringify(j.locate)}, ${JSON.stringify(j.gold)}`);
                        _a.sent();
                        return [2 /*return*/, C_TeamRDB.lastInsert(db_mai, mes)];
                }
            });
        });
    };
    // tbl_teamで最後に追加した行番号(save_id)を返す【1行挿入専用】
    C_TeamRDB.lastInsert = function (db_mai, mes) {
        return __awaiter(this, void 0, void 0, function () {
            var lastInsert_SQL, recordSet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lastInsert_SQL = "\n            SELECT LAST_INSERT_ID() as id FROM tbl_team;\n        ";
                        return [4 /*yield*/, db_mai.query(lastInsert_SQL)
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 500: ".concat(lastInsert_SQL, " ") + err);
                                return [];
                            })];
                    case 1:
                        recordSet = (_a.sent())[0];
                        if (recordSet.length < 1)
                            return [2 /*return*/, -1];
                        return [2 /*return*/, recordSet[0].id];
                }
            });
        });
    };
    // DB処理(クラス・メソッド)。Teamクラスの配列を受け取って、
    // 指定されたsave_idで　teamテーブルに追加(insert)して
    // そのID(id)の配列を返す
    // 
    C_TeamRDB.add_tbl_all = function (db_mai, mes, save_id, team_array) {
        return __awaiter(this, void 0, void 0, function () {
            var team_id_set, _i, team_array_2, team, team_id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        team_id_set = [];
                        _i = 0, team_array_2 = team_array;
                        _a.label = 1;
                    case 1:
                        if (!(_i < team_array_2.length)) return [3 /*break*/, 4];
                        team = team_array_2[_i];
                        return [4 /*yield*/, C_TeamRDB.add_tbl(db_mai, mes, save_id, team)];
                    case 2:
                        team_id = _a.sent();
                        if (mes.is_err())
                            return [2 /*return*/, []];
                        team_id_set.push(team_id);
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, team_id_set];
                }
            });
        });
    };
    // DB処理。save_idで指定されたレコード(複数)を削除(delete)する
    // 
    C_TeamRDB.del_tbl = function (db_mai, mes, save_id) {
        return __awaiter(this, void 0, void 0, function () {
            var delete_team_SQL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        delete_team_SQL = "\n            DELETE FROM tbl_team \n            WHERE  save_id = :save_id\n        ";
                        return [4 /*yield*/, db_mai.query(delete_team_SQL, { save_id: save_id, })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 15: ".concat(delete_team_SQL, " ") + err);
                                return false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    C_TeamRDB.from_stringArray_to_JSON = function (j) {
        return {
            id: j.id,
            save_id: j.save_id,
            uniq_id: j.uniq_id,
            name: j.name,
            locate: JSON.parse(j.locate),
            gold: j.gold,
            //            goods:   JSON.parse(j.goods),
        };
    };
    return C_TeamRDB;
}());
exports.C_TeamRDB = C_TeamRDB;


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

/***/ "./src/lib/_JSON_mai_ldsv.ts":
/*!***********************************!*\
  !*** ./src/lib/_JSON_mai_ldsv.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// 利用クラス等の読み込み
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
exports.info = info;
exports.load = load;
exports.save = save;
// エラーメッセージ等を保存・表示するクラス
var C_DspMessage_1 = __webpack_require__(/*! ../../../mai/src/d_utl/C_DspMessage */ "../mai/src/d_utl/C_DspMessage.ts");
// MySqlを扱うクラス
var promise_1 = __importDefault(__webpack_require__(/*! mysql2/promise */ "mysql2/promise"));
var C_SaveData_1 = __webpack_require__(/*! ../../../mai/src/d_mdl/C_SaveData */ "../mai/src/d_mdl/C_SaveData.ts");
var C_SaveDataRDB_1 = __webpack_require__(/*! ../../../mai/src/d_rdb/C_SaveDataRDB */ "../mai/src/d_rdb/C_SaveDataRDB.ts");
var db_mai;
function info(arg) {
    return __awaiter(this, void 0, void 0, function () {
        var ret_val, save_array;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, init(arg)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, C_SaveDataRDB_1.C_SaveInfoRDB.get_list_by_pid(db_mai, gv.mes, ga.pid)];
                case 2:
                    save_array = _a.sent();
                    if (gv.mes.is_err()) {
                        ret_val = err_encode(500);
                    }
                    else {
                        ret_val = all_save_info(0, save_array);
                    }
                    finl();
                    return [2 /*return*/, ret_val];
            }
        });
    });
}
/*
export async function tmp_load(arg: I_GlobalArguments): Promise<I_Return> {
    init(arg);
    const ret_val = await _load(ga.pid, 100, 330);
    finl();
    return ret_val;
}
export async function instant_load(arg: I_GlobalArguments): Promise<I_Return> {
    init(arg);
    const ret_val = await _load(ga.pid, 101, 310);
    finl();
    return ret_val;
}
export async function UD_load(arg: I_GlobalArguments): Promise<I_Return> {
    init(arg);
    const ret_val = await _load(ga.pid, 102, 350);
    finl();
    return ret_val;
}
export async function before_load(arg: I_GlobalArguments): Promise<I_Return> {
    init(arg);
    const ret_val = await _load(ga.pid, 103, 380);
    finl();
    return ret_val;
}
export async function general_load(arg: I_GlobalArguments): Promise<I_Return> {
    init(arg);
    const ret_val = await _load(ga.pid, ga.uno, 30);
    finl();
    return ret_val;
}
*/
function load(arg) {
    return __awaiter(this, void 0, void 0, function () {
        var pid, uno, eno, ret_val;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, init(arg)];
                case 1:
                    _a.sent();
                    pid = ga.pid;
                    switch (ga.mode) {
                        case 'tmp_load':
                            uno = 100;
                            eno = 330;
                            break;
                        case 'instant_load':
                            uno = 101;
                            eno = 310;
                            break;
                        case 'UD_load':
                            uno = 102;
                            eno = 350;
                            break;
                        case 'before_load':
                            uno = 103;
                            eno = 370;
                            break;
                        case 'general_load':
                            uno = ga.uno;
                            eno = 390;
                            break;
                        default: return [2 /*return*/, err_encode(8888)];
                    }
                    return [4 /*yield*/, _load(pid, uno, eno)];
                case 2:
                    ret_val = _a.sent();
                    finl();
                    return [2 /*return*/, ret_val];
            }
        });
    });
}
/*
export async function tmp_save(arg: I_GlobalArguments): Promise<I_Return> {
    init(arg);
    const ret_val = await _save(ga.pid, 100, '__TemporarySaveData__', 230);
    finl();
    return ret_val;
}
export async function instant_save(arg: I_GlobalArguments): Promise<I_Return> {
    init(arg);
    const ret_val = await _save(ga.pid, 101, '__InstantSaveData__', 210);
    finl();
    return ret_val;
}
export async function UD_save(arg: I_GlobalArguments): Promise<I_Return> {
    init(arg);
    const ret_val = await _save(ga.pid, 102, '__UpDownSaveData__', 250);
    finl();
    return ret_val;
}
export async function before_save(arg: I_GlobalArguments): Promise<I_Return> {
    init(arg);
    const ret_val = await _save(ga.pid, 103, '__BeforeTheEventData__', 280);
    finl();
    return ret_val;
}
export async function general_save(arg: I_GlobalArguments): Promise<I_Return> {
    init(arg);
    const ret_val = await _save(ga.pid, ga.save?.uniq_no??99, ga.save?.title??'???', 230);
    finl();
    return ret_val;
}
*/
function save(arg) {
    return __awaiter(this, void 0, void 0, function () {
        var pid, uno, eno, title, ret_val;
        var _a, _b, _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0: return [4 /*yield*/, init(arg)];
                case 1:
                    _g.sent();
                    pid = (_b = (_a = ga.save) === null || _a === void 0 ? void 0 : _a.player_id) !== null && _b !== void 0 ? _b : -2;
                    switch (ga.mode) {
                        case 'tmp_save':
                            uno = 100;
                            eno = 230;
                            title = '__TemporarySaveData__';
                            break;
                        case 'instant_save':
                            uno = 101;
                            eno = 210;
                            title = '__InstantSaveData__';
                            break;
                        case 'UD_save':
                            uno = 102;
                            eno = 250;
                            title = '__UpDownSaveData__';
                            break;
                        case 'before_save':
                            uno = 103;
                            eno = 270;
                            title = '__BeforeTheEventData__';
                            break;
                        case 'general_save':
                            uno = (_d = (_c = ga.save) === null || _c === void 0 ? void 0 : _c.uniq_no) !== null && _d !== void 0 ? _d : 99;
                            eno = 290;
                            title = (_f = (_e = ga.save) === null || _e === void 0 ? void 0 : _e.title) !== null && _f !== void 0 ? _f : '???';
                            break;
                        default: return [2 /*return*/, err_encode(9999)];
                    }
                    return [4 /*yield*/, _save(pid, uno, title, eno)];
                case 2:
                    ret_val = _g.sent();
                    finl();
                    return [2 /*return*/, ret_val];
            }
        });
    });
}
//////////////////////////////////////////////
///   サブルーチン
//////////////////////////////////////////////
function _load(pid, uno, ecode) {
    return __awaiter(this, void 0, void 0, function () {
        var save_id, save_data02;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, tr_begin(db_mai)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, C_SaveDataRDB_1.C_SaveInfoRDB.get_save_id_at_tbl(db_mai, gv.mes, pid, uno)];
                case 2:
                    save_id = _a.sent();
                    if (!gv.mes.is_err()) return [3 /*break*/, 4];
                    return [4 /*yield*/, tr_rollback(db_mai)];
                case 3:
                    _a.sent();
                    return [2 /*return*/, all_save_data(ecode, undefined)];
                case 4: return [4 /*yield*/, C_SaveDataRDB_1.C_SaveDataRDB.get_from_rdb(db_mai, gv.mes, save_id)];
                case 5:
                    save_data02 = _a.sent();
                    if (!gv.mes.is_err()) return [3 /*break*/, 7];
                    return [4 /*yield*/, tr_rollback(db_mai)];
                case 6:
                    _a.sent();
                    return [2 /*return*/, all_save_data(ecode, undefined)];
                case 7: return [4 /*yield*/, tr_commit(db_mai)];
                case 8:
                    _a.sent();
                    return [2 /*return*/, all_save_data(0, save_data02)];
            }
        });
    });
}
function _save(pid, uniq_no, title, ecode) {
    return __awaiter(this, void 0, void 0, function () {
        var save_id, rslt01, rslt02;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (ga.save === undefined)
                        return [2 /*return*/, all_save_data(ecode, undefined)];
                    ga.save.player_id = pid;
                    ga.save.uniq_no = uniq_no;
                    ga.save.title = title;
                    //console.error(`pid=${pid}, uno=${uniq_no}, title=${title}`);
                    return [4 /*yield*/, tr_begin(db_mai)];
                case 1:
                    //console.error(`pid=${pid}, uno=${uniq_no}, title=${title}`);
                    _a.sent();
                    return [4 /*yield*/, C_SaveDataRDB_1.C_SaveInfoRDB.get_save_id_at_tbl(db_mai, gv.mes, pid, uniq_no)];
                case 2:
                    save_id = _a.sent();
                    if (!gv.mes.is_err()) return [3 /*break*/, 4];
                    return [4 /*yield*/, tr_rollback(db_mai)];
                case 3:
                    _a.sent();
                    return [2 /*return*/, all_save_data(ecode + 10, ga.save)];
                case 4:
                    if (!(save_id > 0)) return [3 /*break*/, 7];
                    return [4 /*yield*/, C_SaveDataRDB_1.C_SaveDataRDB.del_to_rdb(db_mai, gv.mes, save_id)];
                case 5:
                    rslt01 = _a.sent();
                    if (!gv.mes.is_err()) return [3 /*break*/, 7];
                    return [4 /*yield*/, tr_rollback(db_mai)];
                case 6:
                    _a.sent();
                    return [2 /*return*/, all_save_data(ecode + 33, ga.save)];
                case 7: return [4 /*yield*/, C_SaveDataRDB_1.C_SaveDataRDB.set_to_rdb(db_mai, gv.mes, ga.save)];
                case 8:
                    rslt02 = _a.sent();
                    if (!(rslt02 === false)) return [3 /*break*/, 10];
                    return [4 /*yield*/, tr_rollback(db_mai)];
                case 9:
                    _a.sent();
                    return [2 /*return*/, all_save_data(ecode + 23, ga.save)];
                case 10: return [4 /*yield*/, tr_commit(db_mai)];
                case 11:
                    _a.sent();
                    return [2 /*return*/, all_save_data(0, ga.save)];
            }
        });
    });
}
function all_save_data(code, save) {
    var ret_val;
    if (code !== 0 || gv.mes.is_err()) {
        ret_val = new C_ErrReturn(code, gv.mes.get_err_messages().join("\n"));
    }
    else {
        ret_val = new C_NorReturn();
        if (save !== undefined) {
            ret_val.save = save.encode();
        }
        else {
            ret_val.save = undefined;
        }
    }
    return ret_val;
}
function all_save_info(code, save_list) {
    var ret_val;
    if (code !== 0 || gv.mes.is_err()) {
        ret_val = new C_ErrReturn(code, gv.mes.get_err_messages().join("\n"));
    }
    else {
        ret_val = new C_NorReturn();
        //        ret_val.save_info = save_list;
        var ret_array = [];
        for (var _i = 0, save_list_1 = save_list; _i < save_list_1.length; _i++) {
            var save_elm = save_list_1[_i];
            ret_array.push(save_elm.encode());
        }
        ret_val.save_info = ret_array;
    }
    return ret_val;
}
function err_encode(code) {
    var ret_assoc = { ecode: code, emsg: '' };
    for (var _i = 0, _a = gv.mes.get_err_messages(); _i < _a.length; _i++) {
        var msg = _a[_i];
        ret_assoc.emsg += msg + "\n";
    }
    return ret_assoc;
}
var C_NorReturn = /** @class */ (function () {
    function C_NorReturn() {
        this.ecode = 0;
        this.emsg = 'Status OK';
    }
    return C_NorReturn;
}());
var C_ErrReturn = /** @class */ (function () {
    function C_ErrReturn(ecode, emsg) {
        this.ecode = 1000;
        this.emsg = 'error';
        this.ecode = ecode;
        this.emsg = emsg;
    }
    return C_ErrReturn;
}());
/*******************************************************************************/
/*                                                                             */
/*                                初　期　設　定                                */
/*                                                                             */
/*******************************************************************************/
var gv;
var ga;
function init(obj) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gv = new C_GlobalVar();
                    ga = new C_GlobalArguments(obj);
                    return [4 /*yield*/, gv.db_pool.getConnection()];
                case 1:
                    db_mai = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function finl() {
    db_mai.release();
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
        var _a, _b, _c, _d, _e, _f, _g;
        this.mode = 'unknown';
        this.save_JSON = '';
        this.save = undefined;
        this.pid = 1;
        this.uno = -1;
        this.save_id = -1;
        this.save_title = '';
        this.save_detail = '';
        this.save_point = '';
        this.save_time = '';
        if (obj === undefined)
            return;
        this.mode = (_a = obj.mode) !== null && _a !== void 0 ? _a : this.mode;
        this.pid = (_b = obj.pid) !== null && _b !== void 0 ? _b : this.pid;
        this.uno = (_c = obj.uno) !== null && _c !== void 0 ? _c : this.uno;
        this.save_id = (_d = Number(obj.save_id)) !== null && _d !== void 0 ? _d : this.save_id;
        this.save_title = (_e = obj.save_title) !== null && _e !== void 0 ? _e : this.save_title;
        this.save_detail = (_f = obj.save_detail) !== null && _f !== void 0 ? _f : this.save_detail;
        this.save_point = (_g = obj.save_point) !== null && _g !== void 0 ? _g : this.save_point;
        if (obj.save !== undefined)
            this.save = new C_SaveData_1.C_SaveData(JSON.parse(obj.save));
    }
    return C_GlobalArguments;
}());
///////////////////////////////////////////////
///   データベース関係 
///////////////////////////////////////////////   
function tr_begin(db_mai) {
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_mai.beginTransaction()];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    gv.mes.set_err_message("トランザクションの開始失敗: " + err_1);
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/, true];
            }
        });
    });
}
function tr_commit(db_mai) {
    return __awaiter(this, void 0, void 0, function () {
        var err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_mai.commit()];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    gv.mes.set_err_message("トランザクションのコミット失敗" + err_2);
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/, true];
            }
        });
    });
}
function tr_rollback(db_mai) {
    return __awaiter(this, void 0, void 0, function () {
        var err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_mai.rollback()];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_3 = _a.sent();
                    gv.mes.set_err_message("トランザクションのロールバック失敗" + err_3);
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/, true];
            }
        });
    });
}


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
var _JSON_mai_ldsv_1 = __webpack_require__(/*! ../lib/_JSON_mai_ldsv */ "./src/lib/_JSON_mai_ldsv.ts");
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
**  Send SaveInfo
*/
router.post('/_info', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var rslt, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, _JSON_mai_ldsv_1.info)(req.body)];
            case 1:
                rslt = _a.sent();
                if (rslt.ecode !== 0) {
                    console.error("*** error: ".concat(rslt.ecode, ": ").concat(rslt.emsg, " ***"));
                    next((0, http_errors_1.default)(406));
                }
                res.status(200);
                res.send(JSON.stringify(rslt, null, "\t"));
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.log("LdSv info POST error: ".concat(err_1));
                next((0, http_errors_1.default)(406));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get('/_info', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send('respond with a maiLdSv info');
        return [2 /*return*/];
    });
}); });
/*
**  Send LaodData
*/
router.post('/_load', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var rslt, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, _JSON_mai_ldsv_1.load)(req.body)];
            case 1:
                rslt = _a.sent();
                if (rslt.ecode !== 0) {
                    console.error("*** error: ".concat(rslt.ecode, ": ").concat(rslt.emsg, " ***"));
                    next((0, http_errors_1.default)(406));
                }
                res.status(200);
                res.send(JSON.stringify(rslt, null, "\t"));
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                console.log("LdSv load POST error: ".concat(err_2));
                next((0, http_errors_1.default)(406));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get('/_load', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send('respond with a maiLdSv load');
        return [2 /*return*/];
    });
}); });
/*
**  Send SaveData
*/
router.post('/_save', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var rslt, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, _JSON_mai_ldsv_1.save)(req.body)];
            case 1:
                rslt = _a.sent();
                if (rslt.ecode !== 0) {
                    console.error("*** error: ".concat(rslt.ecode, ": ").concat(rslt.emsg, " ***"));
                    next((0, http_errors_1.default)(406));
                }
                res.status(200);
                res.send(JSON.stringify(rslt, null, "\t"));
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                console.log("LdSv save POST error: ".concat(err_3));
                next((0, http_errors_1.default)(406));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get('/_save', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send('respond with a maiLdSv save');
        return [2 /*return*/];
    });
}); });
/*
** For Test Function
*/
router.post('/test', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var rslt, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
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
                err_4 = _a.sent();
                console.error("newLoad POST error: ".concat(err_4));
                next((0, http_errors_1.default)(406));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get('/test', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            //debug    for (const key in req.body) console.error(`req.${key}: ${req.body[key]}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsR0FBSSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3RELElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBTSxTQUFTO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2pGLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBTyxTQUFTO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBSSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3RELElBQUksQ0FBQyxDQUFDLEtBQUssS0FBTyxTQUFTO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBSSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3RELElBQUksQ0FBQyxDQUFDLEtBQUssS0FBTyxTQUFTO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBSSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3RELElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBTSxTQUFTO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFLLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDbEYsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU0sRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU0sRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxL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R0FBRyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQnhCLCtFQUE4QjtBQUM5QixJQUFJLE1BQU0sR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTlCLHdCQUF3QjtBQUN4QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFTLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtJQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7QUNSeEI7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19HdWlsZC50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX0hlcm8udHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19IZXJvQWJpbGl0eS50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX0xvY2F0aW9uLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfTWF6ZS50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX01hemVDZWxsLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfTWF6ZUluZm8udHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19NYXplT2JqLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfTWF6ZU9ialZpZXcudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19Nb3ZhYmxlUG9pbnQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19Qb2ludC50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX1BvaW50RGlyLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfUG9pbnRTZXQyRC50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX1JhbmdlLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfU2F2ZURhdGEudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19TYXZlSW5mby50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX1RlYW0udHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19UZWFtVmlldy50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX1dhbGtlci50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9UX0RpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9UX016S2luZC50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX3JkYi9DX0d1aWxkUkRCLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfcmRiL0NfSGVyb1JEQi50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX3JkYi9DX01hemVSREIudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9yZGIvQ19TYXZlRGF0YVJEQi50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX3JkYi9DX1RlYW1SREIudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF91dGwvQ19Ec3BNZXNzYWdlLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfdXRsL0ZfTWF0aC50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX3V0bC9GX1JhbmQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvbGliL19KU09OX21haV9ndWxkLnRzIiwid2VicGFjazovL21haS8uL3NyYy9saWIvX0pTT05fbWFpX2xkc3YudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2xpYi9fSlNPTl9tYWlfbGRzdl90ZXN0LnRzIiwid2VicGFjazovL21haS8uL3NyYy9saWIvX0pTT05fbWFpX21hemUudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL3JvdXRlcy9tYWlHdWxkLnRzIiwid2VicGFjazovL21haS8uL3NyYy9yb3V0ZXMvbWFpTGRTdi50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvcm91dGVzL21haU1hemUudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL3JvdXRlcy9tYWlleC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvcm91dGVzL3VzZXJzLnRzIiwid2VicGFjazovL21haS9leHRlcm5hbCBjb21tb25qcyBcImNvb2tpZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9tYWkvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vbWFpL2V4dGVybmFsIGNvbW1vbmpzIFwiaHR0cC1lcnJvcnNcIiIsIndlYnBhY2s6Ly9tYWkvZXh0ZXJuYWwgY29tbW9uanMgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly9tYWkvZXh0ZXJuYWwgY29tbW9uanMgXCJteXNxbDIvcHJvbWlzZVwiIiwid2VicGFjazovL21haS9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL21haS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYWkvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9tYWkvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL21haS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBJX0xvY2F0ZSwgVF9MY2tkIH0gICAgICBmcm9tIFwiLi9DX0xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IElfSlNPTl9VbmlxLCBKU09OX0FueSB9IGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuaW1wb3J0IHsgQ19IZXJvLCBKU09OX0hlcm8gfSAgICAgZnJvbSBcIi4vQ19IZXJvXCI7XHJcbmltcG9ydCB7IF9nZXRfdXVpZCB9ICAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuaW1wb3J0IHsgQ19Hb29kc0xpc3QsIEpTT05fR29vZHNMaXN0IH0gZnJvbSBcIi4vQ19Hb29kc0xpc3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9HdWlsZCBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGlkPzogICAgICAgbnVtYmVyLFxyXG4gICAgdW5pcV9pZD86ICBzdHJpbmcsXHJcbiAgICBzYXZlX2lkPzogIG51bWJlcixcclxuICAgIG5hbWU/OiAgICAgc3RyaW5nLFxyXG4gICAgZ29sZD86ICAgICBudW1iZXIsXHJcbiAgICBnb29kcz86ICAgIEpTT05fR29vZHNMaXN0LFxyXG4gICAgaGVyb2VzPzogICBKU09OX0hlcm9bXSxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X2d1bGRfaW5mbyhhOiBKU09OX0d1aWxkfHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoXCJHdWlsZCBJbmZvOlwiIFxyXG4gICAgICAgICsgXCJcXG5pZDogICAgICAgXCIgKyAoYS5pZCAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG51bmlxX2lkOiAgXCIgKyAoYS51bmlxX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zYXZlX2lkOiAgXCIgKyAoYS5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5uYW1lOiAgICAgXCIgKyAoYS5uYW1lICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5nb2xkOiAgICAgXCIgKyAoYS5nb2xkICAgICAgPz8gIDAgKVxyXG4vLyAgICAgICAgKyBcIlxcbmdvb2RzOiAgICBcIiArIChPYmplY3Qua2V5cyhhLmdvb2RzPz8wKS5sZW5ndGgpXHJcbiAgICAgICAgKyBcIlxcbmhlcm9lczogICBcIiArIChhLmhlcm9lcz8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX0d1aWxkIGltcGxlbWVudHMgSV9Mb2NhdGUsIElfSlNPTl9VbmlxIHtcclxuICAgIHByb3RlY3RlZCBpZDogICAgICAgICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgdW5pcV9pZDogICAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHNhdmVfaWQ6ICAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBuYW1lOiAgICAgICBzdHJpbmc7XHJcbiAgICBwdWJsaWMgICAgZ29sZDogICAgICAgbnVtYmVyO1xyXG4vLyAgICBwdWJsaWMgICAgZ29vZHM6ICAgICAgQ19Hb29kc0xpc3Q7XHJcbiAgICBwcm90ZWN0ZWQgaGVyb2VzOiAgICAge1t1aWQ6IHN0cmluZ106IENfSGVyb307XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYT86IEpTT05fR3VpbGQpIHtcclxuICAgICAgICB0aGlzLmlkICAgICAgICAgPSAtMTtcclxuICAgICAgICB0aGlzLnVuaXFfaWQgICAgPSAnbWFpX2d1bGQjJyArIF9nZXRfdXVpZCgpO1xyXG4gICAgICAgIHRoaXMuc2F2ZV9pZCAgICA9IC0xO1xyXG4gICAgICAgIHRoaXMubmFtZSAgICAgICA9ICcnO1xyXG4gICAgICAgIHRoaXMuZ29sZCAgICAgICA9ICAwO1xyXG4vLyAgICAgICAgdGhpcy5nb29kcyAgICAgID0gbmV3IENfR29vZHNMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5oZXJvZXMgICAgID0ge307XHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy51bmlxX2lkfVxyXG4gICAgcHVibGljIGdldF9sY2tkKCk6IFRfTGNrZCB7cmV0dXJuIFRfTGNrZC5NYXplfVxyXG4gICAgcHVibGljIGdldF9uYW1lKCk6IHN0cmluZyB7cmV0dXJuIHRoaXMubmFtZX1cclxuICAgIFxyXG4gICAgcHVibGljIGhyZXMoKTogIENfSGVyb1tdIHtcclxuICAgICAgICBjb25zdCBocmVzOiBDX0hlcm9bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGlpIGluIHRoaXMuaGVyb2VzKSBocmVzLnB1c2godGhpcy5oZXJvZXNbaWldKTtcclxuICAgICAgICByZXR1cm4gaHJlcztcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgY2xlYXJfaHJlcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlcm9lcyA9IHt9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFkZF9oZXJvKGhlcm86IENfSGVybyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGVyb2VzW2hlcm8udWlkKCldID0gaGVybztcclxuICAgIH1cclxuICAgIHB1YmxpYyBybXZfaGVybyhoZXJvOiBDX0hlcm8pOiB2b2lkIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5oZXJvZXNbaGVyby51aWQoKV07XHJcbiAgICB9XHJcblxyXG4vKlxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX29ial90b19zdHJpbmcob2E6IENfR3VpbGQpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYSwgbnVsbCwgXCJcXHRcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fb2JqQXJyYXlfdG9fc3RyaW5nKG9hYToge1t1aWQ6IHN0cmluZ106IENfR3VpbGR9KTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBvYSA9IFtdIGFzIENfR3VpbGRbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGlpIGluIG9hYSkgb2EucHVzaChvYWFbaWldKTtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2EsIG51bGwsIFwiXFx0XCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ190b19vYmoodHh0OiBzdHJpbmcpOiBDX0d1aWxkIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqICAgPSBKU09OLnBhcnNlKHR4dCkgYXMgSlNPTl9HdWlsZFtdO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENfR3VpbGQoaik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ19HdWlsZCgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fc3RyaW5nX3RvX29iakFycmF5KHR4dDogc3RyaW5nKToge1t1aWQ6IHN0cmluZ106IENfR3VpbGR9IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqICAgPSBKU09OLnBhcnNlKHR4dCkgYXMgSlNPTl9HdWlsZFtdO1xyXG4gICAgICAgICAgICBjb25zdCBtcGEgPSB7fSBhcyB7W2lkOiBzdHJpbmddOiBDX0d1aWxkfTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqaiBvZiBqKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhYWEgPSBuZXcgQ19HdWlsZCgpLmRlY29kZShqaik7XHJcbiAgICAgICAgICAgICAgICBtcGFbYWFhLnVpZCgpXSA9IGFhYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbXBhO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuKi9cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fR3VpbGQge1xyXG4gICAgICAgIGNvbnN0IGpzb25faGVyb2VzOiBKU09OX0hlcm9bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGlpIGluIHRoaXMuaGVyb2VzKSBqc29uX2hlcm9lcy5wdXNoKHRoaXMuaGVyb2VzW2lpXS5lbmNvZGUoKSk7ICBcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6ICAgICAgdGhpcy5pZCxcclxuICAgICAgICAgICAgdW5pcV9pZDogdGhpcy51bmlxX2lkLFxyXG4gICAgICAgICAgICBzYXZlX2lkOiB0aGlzLnNhdmVfaWQsXHJcbiAgICAgICAgICAgIGdvbGQ6ICAgIHRoaXMuZ29sZCxcclxuLy8gICAgICAgICAgICBnb29kczogICB0aGlzLmdvb2RzLmVuY29kZSgpLFxyXG4gICAgICAgICAgICBoZXJvZXM6ICBqc29uX2hlcm9lcyxcclxuICAgICAgICAgICAgbmFtZTogICAgdGhpcy5uYW1lLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoYTogSlNPTl9HdWlsZHx1bmRlZmluZWQpOiBDX0d1aWxkIHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBcclxuICAgICAgICBpZiAoYS5pZCAgICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmlkICAgICAgICAgPSBhLmlkO1xyXG4gICAgICAgIGlmIChhLnVuaXFfaWQgICE9PSB1bmRlZmluZWQpIHRoaXMudW5pcV9pZCAgICA9IGEudW5pcV9pZDtcclxuICAgICAgICBpZiAoYS5zYXZlX2lkICAhPT0gdW5kZWZpbmVkKSB0aGlzLnNhdmVfaWQgICAgPSBhLnNhdmVfaWQ7XHJcbiAgICAgICAgaWYgKGEubmFtZSAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5uYW1lICAgICAgID0gYS5uYW1lO1xyXG4gICAgICAgIGlmIChhLmdvbGQgICAgICE9PSB1bmRlZmluZWQpIHRoaXMuZ29sZDtcclxuLy8gICAgICAgIGlmIChhLmdvb2RzICAgICE9PSB1bmRlZmluZWQpIHRoaXMuZ29vZHMuZGVjb2RlIChhLmdvb2RzKTtcclxuXHJcbiAgICAgICAgaWYgKGEuaGVyb2VzICE9PSB1bmRlZmluZWQpICB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVyb2VzID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl9oZXJvIG9mIGEuaGVyb2VzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZXJvID0gbmV3IENfSGVybyhqc29uX2hlcm8pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZXJvZXNbaGVyby51aWQoKV0gPSBoZXJvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBlbmNvZGVfYWxsKGFsbF9ndWxkOiBDX0d1aWxkW10pOiBKU09OX0d1aWxkW10ge1xyXG4gICAgICAgIGNvbnN0IGFsbF9ndWxkX2RhdGE6IEpTT05fR3VpbGRbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGd1bGQgb2YgYWxsX2d1bGQpIHtcclxuICAgICAgICAgICAgYWxsX2d1bGRfZGF0YS5wdXNoKGd1bGQuZW5jb2RlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsX2d1bGRfZGF0YTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVjb2RlX2FsbChhbGxfZ3VsZF9kYXRhOiBKU09OX0d1aWxkW10pOiBDX0d1aWxkW10ge1xyXG4gICAgICAgIGNvbnN0IGFsbF9ndWxkOiBDX0d1aWxkW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBndWxkX2RhdGEgb2YgYWxsX2d1bGRfZGF0YSkge1xyXG4gICAgICAgICAgICBhbGxfZ3VsZC5wdXNoKChuZXcgQ19HdWlsZCgpKS5kZWNvZGUoZ3VsZF9kYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxfZ3VsZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGFsZXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiR3VpbGQgSW5mbzpcIiBcclxuICAgICAgICAgICAgKyBcIlxcbmlkOiAgICAgICBcIiArICh0aGlzLmlkICAgICAgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnVuaXFfaWQ6ICBcIiArICh0aGlzLnVuaXFfaWQgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNhdmVfaWQ6ICBcIiArICh0aGlzLnNhdmVfaWQgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbm5hbWU6ICAgICBcIiArICh0aGlzLm5hbWUgICAgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmdvbGQ6ICAgICBcIiArICh0aGlzLmdvbGQgICAgICAgICAgID8/ICAwKVxyXG4vLyAgICAgICAgICAgICsgXCJcXG5nb29kczogICAgXCIgKyAoT2JqZWN0LmtleXModGhpcy5nb29kcz8/MCkubGVuZ3RoKVxyXG4gICAgICAgICAgICArIFwiXFxuaGVyb2VzOiAgIFwiICsgKHRoaXMuaGVyb2VzPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ19IZXJvQWJpbGl0eSwgSlNPTl9IZXJvX0FiaWxpdHl9IGZyb20gXCIuL0NfSGVyb0FiaWxpdHlcIjtcclxuaW1wb3J0IHsgSV9KU09OX1VuaXEsICAgSlNPTl9BbnkgfSAgICAgICAgIGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuaW1wb3J0IHsgX2dldF91dWlkLCBfaW5yYW5kLCBfaXJhbmQsIF9yYW5kb21fc3RyIH0gIGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuaW1wb3J0IHsgQ19Hb29kc0xpc3QsIEpTT05fR29vZHNMaXN0IH0gZnJvbSBcIi4vQ19Hb29kc0xpc3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9IZXJvIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgaWQ/OiAgICAgICAgbnVtYmVyLCBcclxuICAgIHVuaXFfaWQ/OiAgIHN0cmluZywgXHJcbiAgICBzYXZlX2lkPzogICBudW1iZXIsIFxyXG4gICAgbmFtZT86ICAgICAgc3RyaW5nLCBcclxuICAgIHNleD86ICAgICAgIG51bWJlcjsgXHJcbiAgICBhZ2U/OiAgICAgICBudW1iZXI7IFxyXG4gICAgZ29sZD86ICAgICAgbnVtYmVyOyBcclxuLy8gICAgZ29vZHM/OiAgICAgSlNPTl9Hb29kc0xpc3Q7IFxyXG4gICAgc3RhdGU/OiAgICAgbnVtYmVyOyBcclxuICAgIGx2PzogICAgICAgIG51bWJlcjsgXHJcbiAgICB2YWw/OiAgICAgICBKU09OX0hlcm9fVmFsdWU7XHJcbiAgICBhYmlfcD86ICAgICAgIHtic2M/OiBKU09OX0hlcm9fQWJpbGl0eSwgdHRsPzogSlNPTl9IZXJvX0FiaWxpdHksIG5vdz86IEpTT05fSGVyb19BYmlsaXR5fTtcclxuICAgIGFiaV9tPzogICAgICAge2JzYz86IEpTT05fSGVyb19BYmlsaXR5LCB0dGw/OiBKU09OX0hlcm9fQWJpbGl0eSwgbm93PzogSlNPTl9IZXJvX0FiaWxpdHl9O1xyXG4gICAgaXNfYWxpdmU/OiAgc3RyaW5nfGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9IZXJvX1ZhbHVlIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgc2twPzoge3R0bDogbnVtYmVyLCAgbm93OiBudW1iZXJ9LCBcclxuICAgIGV4cD86IHt0dGw6IG51bWJlciwgIG5vdzogbnVtYmVyfSxcclxuICAgIG54ZT86IG51bWJlciwgICAgICAgICAgICAgICAgICAgLy8g5qyh5Zue44Gu44OS44O844Ot44O844Os44OZ44Or44Ki44OD44OX44Gr5b+F6KaB44Gq57WM6aiT5YCkXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9ocmVzX2luZm8oYTogKEpTT05fSGVyb3x1bmRlZmluZWQpW118dW5kZWZpbmVkKTogdm9pZCB7IFxyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoJ051bWJlciBvZiBIZXJvID0gJyArIGEubGVuZ3RoLnRvU3RyaW5nKCkpO1xyXG4gICAgZm9yICh2YXIgaSBpbiBhKSB7XHJcbiAgICAgICAgaWYgKGFbaV0gPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICAgICAgYWxlcnRfaGVyb19pbmZvKGFbaV0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfaGVyb19pbmZvKGE6IEpTT05fSGVyb3x1bmRlZmluZWQpOiB2b2lkIHsgXHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydChcIkhlcm8gSW5mbzpcXG5cIiBcclxuICAgICAgICArIFwiXFxuaWQ6ICAgICAgIFwiICAgICArIChhPy5pZCAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG51bmlxX2lkICAgXCIgICAgICsgKGE/LnVuaXFfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbm5hbWU6ICAgICBcIiAgICAgKyAoYT8ubmFtZSAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2F2ZV9pZDogIFwiICAgICArIChhPy5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5pc19hbGl2ZTogXCIgICAgICsgKGE/LmlzX2FsaXZlICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19IZXJvIGltcGxlbWVudHMgSV9KU09OX1VuaXEge1xyXG4gICAgcHJvdGVjdGVkIG15X2lkOiAgICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgbXlfbmFtZTogIHN0cmluZztcclxuICAgIHByb3RlY3RlZCB1bmlxX2lkOiAgc3RyaW5nOyBcclxuICAgIHByb3RlY3RlZCBzYXZlX2lkOiAgbnVtYmVyOyBcclxuICAgIHByb3RlY3RlZCBzZXg6ICAgICAgbnVtYmVyOyBcclxuICAgIHByb3RlY3RlZCBhZ2U6ICAgICAgbnVtYmVyOyBcclxuICAgIHByb3RlY3RlZCBzdGF0ZTogICAgbnVtYmVyOyBcclxuICAgIHByb3RlY3RlZCBsdjogICAgICAgbnVtYmVyOyBcclxuICAgIC8vIGJzYyhCYXNpYynjga/lvZPkurrjga7ln7rmnKzlgKTjgIJ0dGwoVG90YWwp44Gv6KOF5YKZ562J44KS5Yqg5rib566X44GX44Gf44KC44Gu44CCbm9344Gv44OQ44OV562J44Gu44K/44O844Oz5Yi244Gu44KC5Yqg5rib566X44GX44Gf44KC44GuXHJcbiAgICBwcm90ZWN0ZWQgZ29sZDogICAgIG51bWJlcjsgXHJcbi8vICAgIHByb3RlY3RlZCBnb29kczogICAgQ19Hb29kc0xpc3Q7IFxyXG4gICAgcHJvdGVjdGVkIHZhbDogICAgICBKU09OX0hlcm9fVmFsdWU7XHJcbiAgICBwcm90ZWN0ZWQgYWJpX3A6ICAgICAge2JzYzogQ19IZXJvQWJpbGl0eSwgdHRsOiBDX0hlcm9BYmlsaXR5LCBub3c6IENfSGVyb0FiaWxpdHl9O1xyXG4gICAgcHJvdGVjdGVkIGFiaV9tOiAgICAgIHtic2M6IENfSGVyb0FiaWxpdHksIHR0bDogQ19IZXJvQWJpbGl0eSwgbm93OiBDX0hlcm9BYmlsaXR5fTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgaXNfYWxpdmU6IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGE/OiBKU09OX0hlcm8pIHtcclxuICAgICAgICB0aGlzLm15X2lkICAgICAgPSAwO1xyXG4gICAgICAgIHRoaXMubXlfbmFtZSAgICA9ICdObyBOYW1lIEhlcm8nO1xyXG4gICAgICAgIHRoaXMudW5pcV9pZCAgICA9ICdtYWlfaGVybyMnICsgX2dldF91dWlkKCk7XHJcbiAgICAgICAgdGhpcy5zYXZlX2lkICAgID0gMDtcclxuICAgICAgICB0aGlzLnNleCAgICAgICAgPSAwOyBcclxuICAgICAgICB0aGlzLmFnZSAgICAgICAgPSAwOyBcclxuICAgICAgICB0aGlzLmdvbGQgICAgICAgPSAwOyBcclxuLy8gICAgICAgIHRoaXMuZ29vZHMgICAgICA9IG5ldyBDX0dvb2RzTGlzdCgpOyBcclxuICAgICAgICB0aGlzLnN0YXRlICAgICAgPSAwOyBcclxuICAgICAgICB0aGlzLmx2ICAgICAgICAgPSAwO1xyXG4gICAgICAgIHRoaXMudmFsICAgICAgICA9IHt9O1xyXG4gICAgICAgIHRoaXMuYWJpX3AgICAgICA9IHtic2M6IG5ldyBDX0hlcm9BYmlsaXR5KCksIHR0bDogbmV3IENfSGVyb0FiaWxpdHkoKSwgbm93OiBuZXcgQ19IZXJvQWJpbGl0eSgpfTtcclxuICAgICAgICB0aGlzLmFiaV9tICAgICAgPSB7YnNjOiBuZXcgQ19IZXJvQWJpbGl0eSgpLCB0dGw6IG5ldyBDX0hlcm9BYmlsaXR5KCksIG5vdzogbmV3IENfSGVyb0FiaWxpdHkoKX07XHJcbiAgICAgICAgdGhpcy5pc19hbGl2ZSAgID0gdHJ1ZTtcclxuICAgICAgICBpZiAoYSAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0X3BycChhcmcgOiBKU09OX0hlcm8pIHtcclxuICAgICAgICB0aGlzLmRlY29kZShhcmcpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF91bmlxX2lkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnVuaXFfaWR9XHJcblxyXG4gICAgcHVibGljIGlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdIZXJvXycgKyB0aGlzLm15X2lkLnRvU3RyaW5nKDE2KS5wYWRTdGFydCg1LCAnMCcpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHVpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy51bmlxX2lkO31cclxuICAgIHB1YmxpYyBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubXlfbmFtZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfbmFtZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm15X25hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fSGVybyB7XHJcbiAgICAgICAgY29uc3QgcmV0OiBKU09OX0hlcm8gPSB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgICAgdGhpcy5teV9pZCxcclxuICAgICAgICAgICAgdW5pcV9pZDogICB0aGlzLnVuaXFfaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICAgICAgdGhpcy5teV9uYW1lLFxyXG4gICAgICAgICAgICBzYXZlX2lkOiAgIHRoaXMuc2F2ZV9pZCxcclxuICAgICAgICAgICAgc2V4OiAgICAgICB0aGlzLnNleCwgXHJcbiAgICAgICAgICAgIGFnZTogICAgICAgdGhpcy5hZ2UsIFxyXG4gICAgICAgICAgICBzdGF0ZTogICAgIHRoaXMuc3RhdGUsIFxyXG4gICAgICAgICAgICBsdjogICAgICAgIHRoaXMubHYsIFxyXG4gICAgICAgICAgICBnb2xkOiAgICAgIHRoaXMuZ29sZCwgXHJcbi8vICAgICAgICAgICAgZ29vZHM6ICAgICB0aGlzLmdvb2RzLmVuY29kZSgpLCBcclxuICAgICAgICAgICAgdmFsOiAgICAgICB0aGlzLnZhbCxcclxuICAgICAgICAgICAgYWJpX3BfYnNjOiB0aGlzLmFiaV9wLmJzYy5lbmNvZGUoKSxcclxuICAgICAgICAgICAgYWJpX21fYnNjOiB0aGlzLmFiaV9tLmJzYy5lbmNvZGUoKSxcclxuICAgICAgICAgICAgaXNfYWxpdmU6ICh0aGlzLmlzX2FsaXZlKSA/ICdZJyA6ICdOJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IEpTT05fSGVyb3x1bmRlZmluZWQpOiBDX0hlcm8ge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChhLmlkICAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfaWQgICAgPSBhLmlkO1xyXG4gICAgICAgIGlmIChhLm5hbWUgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfbmFtZSAgPSBhLm5hbWU7XHJcbiAgICAgICAgaWYgKGEudW5pcV9pZCAgIT09IHVuZGVmaW5lZCkgdGhpcy51bmlxX2lkICA9IGEudW5pcV9pZDtcclxuICAgICAgICBpZiAoYS5zYXZlX2lkICAhPT0gdW5kZWZpbmVkKSB0aGlzLnNhdmVfaWQgID0gYS5zYXZlX2lkO1xyXG4gICAgICAgIGlmIChhLnNleCAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMuc2V4ICAgICAgPSBhLnNleDtcclxuICAgICAgICBpZiAoYS5hZ2UgICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmFnZSAgICAgID0gYS5hZ2U7XHJcbiAgICAgICAgaWYgKGEuc3RhdGUgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5zdGF0ZSAgICA9IGEuc3RhdGU7XHJcbiAgICAgICAgaWYgKGEubHYgICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5sdiAgICAgICA9IGEubHY7XHJcbiAgICAgICAgaWYgKGEuZ29sZCAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5nb2xkICAgICA9IGEuZ29sZDtcclxuICAgICAgICBpZiAoYS5pc19hbGl2ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYS5pc19hbGl2ZSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNfYWxpdmUgPSBhLmlzX2FsaXZlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc19hbGl2ZSA9IChhLmlzX2FsaXZlICE9ICdOJykgPyB0cnVlOiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuLy8gICAgICAgIGlmIChhLmdvb2RzICAgIT09IHVuZGVmaW5lZCkgdGhpcy5nb29kcy5kZWNvZGUoYS5nb29kcyk7XHJcbiAgICAgICAgaWYgKGEudmFsICAgICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19kZWNvZGVfdmFsKHRoaXMudmFsLCBhLnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhLmFiaV9wX2JzYyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWJpX3AuYnNjLmRlY29kZShhLmFiaV9wX2JzYyk7XHJcbiAgICAgICAgICAgIC8vIOaaq+WumlxyXG4gICAgICAgICAgICB0aGlzLmFiaV9wLnR0bCA9IHRoaXMuYWJpX3Aubm93ID0gdGhpcy5hYmlfcC5ic2M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhLmFiaV9tX2JzYyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWJpX20uYnNjLmRlY29kZShhLmFiaV9tX2JzYyk7XHJcbiAgICAgICAgICAgIC8vIOaaq+WumlxyXG4gICAgICAgICAgICB0aGlzLmFiaV9tLnR0bCA9IHRoaXMuYWJpX20ubm93ID0gdGhpcy5hYmlfbS5ic2M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfX2RlY29kZV92YWwoZDogSlNPTl9IZXJvX1ZhbHVlLCBzOiBKU09OX0hlcm9fVmFsdWUpOiB2b2lkIHtcclxuICAgICAgICBpZiAocy5za3AgIT09IHVuZGVmaW5lZCkgZC5za3AgPSB0aGlzLl9fZGVjb2RlX3NrZXgoZC5za3AsIHMuc2twKTtcclxuICAgICAgICBpZiAocy5leHAgIT09IHVuZGVmaW5lZCkgZC5leHAgPSB0aGlzLl9fZGVjb2RlX3NrZXgoZC5leHAsIHMuZXhwKTtcclxuICAgICAgICBpZiAocy5ueGUgIT09IHVuZGVmaW5lZCkgZC5ueGUgPSBzLm54ZTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2RlY29kZV9za2V4KGE6IHt0dGw/OiBudW1iZXIsIG5vdz86IG51bWJlcn0gfCB1bmRlZmluZWQsIHM6IHt0dGw/OiBudW1iZXIsIG5vdz86IG51bWJlcn0pOiB7dHRsOiBudW1iZXIsIG5vdzogbnVtYmVyfSB7XHJcbiAgICAgICAgdmFyIGQ6IHt0dGw6IG51bWJlciwgbm93OiBudW1iZXJ9O1xyXG4gICAgICAgIGlmICAgICAoYSA9PT0gdW5kZWZpbmVkKSBkID0ge3R0bDogMCwgbm93OiAwfTtcclxuICAgICAgICBlbHNlICAgIGQgPSB7dHRsOiBhPy50dGwgPz8gMCwgbm93OiBhPy5ub3cgPz8gMH07XHJcblxyXG4gICAgICAgIGQudHRsID0gcy50dGwgPz8gZC50dGw7XHJcbiAgICAgICAgZC5ub3cgPSBzLm5vdyA/PyBzLnR0bCA/PyBkLm5vdztcclxuICAgICAgICByZXR1cm4gZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZV9oZXJvKCk6IENfSGVybyB7XHJcbiAgICAgICAgY29uc3QgbmV3X2hlcm8gPSBuZXcgQ19IZXJvKCk7XHJcbiAgICAgICAgbmV3X2hlcm8uc2V0X3BycCh7aWQ6ICAgIE1hdGguZmxvb3IoLTEwMDAuMCAqIE1hdGgucmFuZG9tKCkpfSk7XHJcbiAgICAgICAgbmV3X2hlcm8uc2V0X3BycCh7bmFtZTogIG5ld19oZXJvLmlkKCl9KTtcclxuICAgICAgICByZXR1cm4gbmV3X2hlcm87XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJhbmRvbV9tYWtlKCk6IENfSGVybyB7XHJcbiAgICAgICAgdGhpcy5teV9pZCAgICA9IDA7IC8vIC0tSGVybzo6JG1heF9pZDtcclxuICAgICAgICB0aGlzLm15X25hbWUgID0gXCLlhpLpmbrogIUgXCIgKyBfcmFuZG9tX3N0cig1KTtcclxuICAgICAgICB0aGlzLnNleCAgICAgID0gX2lyYW5kKCAwLCAgICAgMSk7IFxyXG4gICAgICAgIHRoaXMuYWdlICAgICAgPSBfaXJhbmQoIDE1LCAgIDI1KTsgXHJcbiAgICAgICAgdGhpcy5zdGF0ZSAgICA9IDA7IFxyXG4gICAgICAgIHRoaXMubHYgICAgICAgPSAwOyBcclxuICAgICAgICB0aGlzLmdvbGQgICAgID0gX2lyYW5kKCA1MDAsIDEwMDApOyBcclxuICAgICAgICB0aGlzLnZhbCAgICAgID0ge1xyXG4gICAgICAgICAgICBza3A6IHt0dGw6IDAsIG5vdzogMH0sIFxyXG4gICAgICAgICAgICBleHA6IHt0dGw6IDAsIG5vdzogMH0sXHJcbiAgICAgICAgICAgICdueGUnOiAxMDAwXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGFiaV9wX2JzYyA9IHRoaXMuYWJpX3AuYnNjO1xyXG4gICAgICAgIGFiaV9wX2JzYy5yYW5kb21fbWFrZSgpO1xyXG4gICAgICAgIGFiaV9wX2JzYy5hZGRfeHBfYm9udXMoKHRoaXMuYWdlIC0gMTUpICogMTApO1xyXG4gICAgICAgIGFiaV9wX2JzYy5hZGRfZWxfYm9udXMoKHRoaXMuYWdlIC0gMTUpICogIDUpO1xyXG4gICAgICAgIGFiaV9wX2JzYy5hZGRfcHJfYm9udXMoKHRoaXMuYWdlIC0gMTUpICogIDIpO1xyXG4gICAgICAgIHRoaXMuYWJpX3AuYnNjID0gYWJpX3BfYnNjO1xyXG5cclxuICAgICAgICBjb25zdCBhYmlfbV9ic2MgPSB0aGlzLmFiaV9tLmJzYztcclxuICAgICAgICBhYmlfbV9ic2MucmFuZG9tX21ha2UoKTtcclxuICAgICAgICBhYmlfbV9ic2MuYWRkX3hwX2JvbnVzKCh0aGlzLmFnZSAtIDE1KSAqIDEwKTtcclxuICAgICAgICBhYmlfbV9ic2MuYWRkX2VsX2JvbnVzKCh0aGlzLmFnZSAtIDE1KSAqICA1KTtcclxuICAgICAgICBhYmlfbV9ic2MuYWRkX3ByX2JvbnVzKCh0aGlzLmFnZSAtIDE1KSAqICAyKTtcclxuICAgICAgICB0aGlzLmFiaV9tLmJzYyA9IGFiaV9tX2JzYztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBlbmNvZGVfaGVyb2VzKGhlcm9lczogQ19IZXJvW10pOiBKU09OX0hlcm9bXSB7XHJcbiAgICAgICAgY29uc3QgaGVyb2VzX2RhdGEgPSBbXSBhcyBKU09OX0hlcm9bXTtcclxuICAgICAgICBmb3IgKHZhciBoZXJvIG9mIGhlcm9lcykge1xyXG4gICAgICAgICAgICBoZXJvZXNfZGF0YS5wdXNoKGhlcm8uZW5jb2RlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGVyb2VzX2RhdGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZV9oZXJvZXMoaGVyb2VzX2RhdGE6IChKU09OX0hlcm98dW5kZWZpbmVkKVtdfHVuZGVmaW5lZCk6IENfSGVyb1tdIHtcclxuICAgICAgICBjb25zdCBoZXJvZXMgPSBbXSBhcyBDX0hlcm9bXTtcclxuICAgICAgICBpZiAoaGVyb2VzX2RhdGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBoZXJvX2RhdGEgb2YgaGVyb2VzX2RhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoZXJvX2RhdGEgIT09IHVuZGVmaW5lZCkgaGVyb2VzLnB1c2gobmV3IENfSGVybygpLmRlY29kZShoZXJvX2RhdGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGVyb2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHsgXHJcbiAgICAgICAgYWxlcnQoXCJIZXJvIEluZm86XFxuXCIgXHJcbiAgICAgICAgICAgICsgXCJcXG5pZDogICAgICAgXCIgICAgICsgKHRoaXMuaWQgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnVuaXFfaWQgICBcIiAgICAgKyAodGhpcy51bmlxX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubmFtZTogICAgIFwiICAgICArICh0aGlzLm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zYXZlX2lkOiAgXCIgICAgICsgKHRoaXMuc2F2ZV9pZCAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmlzX2FsaXZlOiBcIiAgICAgKyAodGhpcy5pc19hbGl2ZSAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBhbGVydF9ocmVzKGE6IChDX0hlcm98dW5kZWZpbmVkKVtdfHVuZGVmaW5lZCk6IHZvaWQgeyBcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgYWxlcnQoJ051bWJlciBvZiBIZXJvID0gJyArIGEubGVuZ3RoLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gYSkgYVtpXT8uYWxlcnQoKTtcclxuICAgIH1cclxufSIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgSV9KU09OLCBKU09OX0FueSB9IGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuaW1wb3J0IHsgX3JvdW5kIH0gICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX01hdGhcIjtcclxuaW1wb3J0IHsgX2lucmFuZCB9IGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuXHJcbi8vIOS4gOiIrOOBq+S9v+OBiOOCi+ODpuODvOODhuOCo+ODquODhuOCo+OBquWRquaWh1xyXG4vLyDjgqrjg5bjgrjjgqfjgq/jg4jjgpLliJfmjJnlnovjgajjgZfjgablnovljJbjgZnjgovjga7jgavliKnnlKhcclxudHlwZSBUX0hlcm9BYmlsaXR5ID0ge1trZXk6IHN0cmluZ106IG51bWJlcn07XHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9IZXJvX0FiaWxpdHkgZXh0ZW5kcyBKU09OX0FueSB7W2tleTogc3RyaW5nXTogbnVtYmVyfVxyXG5cclxuZXhwb3J0IGNsYXNzIENfSGVyb0FiaWxpdHkgaW1wbGVtZW50cyBJX0pTT04ge1xyXG4gICAgcHJvdGVjdGVkIHY6IFRfSGVyb0FiaWxpdHkgPSB7XHJcbiAgICAgICAgeHA6ICAwLCAgLy8gcDpIUOOAgW06TVBcclxuXHJcbiAgICAgICAgLy8g5Lul5LiL44CB5oim6ZeY6IO95Yqb44Gu5Z+65pys5YCkKHA654mp55CG44CBbTrprZTms5Up44CC44OS44O844Ot44O844Os44OZ44Or44KE44K544OG44O844K/44K544Ki44OD44OX44Gn5Yqg566XIFxyXG4gICAgICAgIGF0azogMCwgIC8vIOaUu+aSg+WApFxyXG4gICAgICAgIGRlZjogMCwgIC8vIOmYsuW+oeWApFxyXG4gICAgICAgIHF1YzogMCwgIC8vIOeerOeZuuWKm1xyXG4gICAgICAgIGNuYzogMCwgIC8vIOapn+mBi+WApCjjg4Hjg6Pjg7PjgrkpXHJcbiAgICBcclxuICAgICAgICAvLyDku6XkuIvjgIHjgYTjgo/jgobjgovjgrnjg4bjg7zjgr/jgrnjgILkuIroqJjjga7oqIjnrpfjgavlvbHpn7/jgILjg5Ljg7zjg63jg7zjg6zjg5njg6vjgoTjgrnjg4bjg7zjgr/jgrnjgqLjg4Pjg5fjgafliqDnrpdcclxuICAgICAgICBzdHI6IDAsICAvLyDmoLnmgKfjgILmlLvmkoMv6Ziy5b6h5Yqb44Gr44KC5b2x6Z+/44CCSFAvTVDlm57lvqnjgoTjgqLjgqTjg4bjg6Djga7mnIDlpKfmiYDmjIHph43ph4/jgavjg5zjg7zjg4rjgrlcclxuICAgICAgICBwd3I6IDAsICAvLyDln7rmnKznmoTlvLfjgZXjgILmlLvmkoPlipvjgavlvbHpn79cclxuICAgICAgICB2aXQ6IDAsICAvLyDogJDkuYXlipvjgIJIUC9NUOOBruacgOWkp+WApOOChOmYsuW+oeWKm+OBq+W9semfv+OCkuS4juOBiOOCi1xyXG4gICAgICAgIGRleDogMCwgIC8vIOWZqOeUqOOBleOAguWRveS4reeOh+OBq+W9semfv+OCkuS4juOBiOOCi+OAgumjm+OBs+mBk+WFt+OChOmVt+i3nemboumtlOazleOBp+OBr+eJueOBq+W9semfv+OAgue9oOino+mZpOOBq+OCguW9semfv1xyXG4gICAgICAgIGFnaTogMCwgIC8vIOe0oOaXqeOBleOAguihjOWLlemAn+W6puOChOWbnumBv+eOh+OBq+W9semfv+OCkuS4juOBiOOCi+OAguWRveS4reeOh+OBq+OCguW9semfv1xyXG4gICAgICAgIHRlYzogMCwgIC8vIOaKgOihk+WKm+OAgue1jOmok+OBp+WQkeS4iuOBl+OBpuiDveWKm+WApChxdWMvY25jKeOBq+ODnOODvOODiuOCueOCkuS4juOBiOOCi1xyXG4gICAgICAgIGx1azogMCwgIC8vIOW5uOmBi+WApOOAgmNuY+OBq+Wkp+OBjeOBj+W9semfv+OBmeOCi1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYT86IEpTT05fSGVyb19BYmlsaXR5KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaWR4IGluIHRoaXMudikge3RoaXMudltpZHhdID0gMDt9XHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoYSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BycChhOiBKU09OX0hlcm9fQWJpbGl0eSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGVjb2RlKGEpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldChrZXk6IHN0cmluZyk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKCEoa2V5IGluIHRoaXMudikpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudltrZXldO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldChrZXk6IHN0cmluZywgczogSlNPTl9IZXJvX0FiaWxpdHkpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICghKGtleSBpbiB0aGlzLnYpKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMudltrZXldID0gc1trZXldO1xyXG4gICAgICAgIHJldHVybiBzW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHhwX3R0bGFkZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBfcm91bmQoTWF0aC5mbG9vcih0aGlzLnYuc3RyICsgdGhpcy52LnZpdCAqIDEwLjApLCAwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhdGtfdHRsYWRkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIF9yb3VuZChNYXRoLmZsb29yKHRoaXMudi5zdHIgKyB0aGlzLnYucHdyICsgdGhpcy52LnRlYykgLyAxMC4wLCAwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWZfdHRsYWRkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIF9yb3VuZChNYXRoLmZsb29yKHRoaXMudi5zdHIgKyB0aGlzLnYudml0ICsgdGhpcy52LnRlYykgLyAxMC4wLCAwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBxdWNfdHRsYWRkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIF9yb3VuZChNYXRoLmZsb29yKHRoaXMudi5hZ2kgKyB0aGlzLnYubHVrICsgdGhpcy52LnRlYykgLyAxMC4wLCAwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjbmNfdHRsYWRkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIF9yb3VuZChNYXRoLmZsb29yKDIuMCAqIHRoaXMudi5sdWsgKyB0aGlzLnYudGVjKSAvIDEwLjAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBib251cyhrZXkgOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICghKGtleSBpbiB0aGlzLnYpKSByZXR1cm4gMDtcclxuICAgICAgICBpZiAoa2V5ID09PSAneHAnKSByZXR1cm4gX3JvdW5kKE1hdGguZmxvb3IodGhpcy52LnhwIC8gMTAwKSwgMCk7XHJcbiAgICAgICAgcmV0dXJuIF9yb3VuZChNYXRoLmZsb29yKHRoaXMudltrZXldIC8gMTAuMCksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQoYTogSlNPTl9IZXJvX0FiaWxpdHkpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYSkge1xyXG4gICAgICAgICAgICB0aGlzLnZba2V5XSArPSBhW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICBwdWJsaWMgYWRkX3hwX2JvbnVzKGJvbnVzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnYueHAgICs9ICBib251cztcclxuICAgIH1cclxuICAgIHB1YmxpYyBhZGRfZWxfYm9udXMoYm9udXM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudi5hdGsgKz0gIGJvbnVzO1xyXG4gICAgICAgIHRoaXMudi5kZWYgKz0gIGJvbnVzO1xyXG4gICAgICAgIHRoaXMudi5xdWMgKz0gIGJvbnVzO1xyXG4gICAgICAgIHRoaXMudi5jbmMgKz0gIGJvbnVzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFkZF9wcl9ib251cyhib251czogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52LnN0ciArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LnB3ciArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LnZpdCArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LmRleCArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LmFnaSArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LnRlYyArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52Lmx1ayArPSAgYm9udXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJhbmRvbV9tYWtlKCk6IENfSGVyb0FiaWxpdHkge1xyXG4gICAgICAgIHRoaXMudi54cCAgPSAgX2lucmFuZCgwLCAxMDAwLCAzLjApO1xyXG5cclxuICAgICAgICB0aGlzLnYuYXRrID0gIF9pbnJhbmQoMCwgIDEwMCwgMi41KTtcclxuICAgICAgICB0aGlzLnYuZGVmID0gIF9pbnJhbmQoMCwgIDEwMCwgMi41KTtcclxuICAgICAgICB0aGlzLnYucXVjID0gIF9pbnJhbmQoMCwgIDEwMCwgMi41KTtcclxuICAgICAgICB0aGlzLnYuY25jID0gIF9pbnJhbmQoMCwgIDEwMCwgMi41KTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMudi5zdHIgPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG4gICAgICAgIHRoaXMudi5wd3IgPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG4gICAgICAgIHRoaXMudi52aXQgPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG4gICAgICAgIHRoaXMudi5kZXggPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG4gICAgICAgIHRoaXMudi5hZ2kgPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG4gICAgICAgIHRoaXMudi50ZWMgPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG4gICAgICAgIHRoaXMudi5sdWsgPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fSGVyb19BYmlsaXR5IHtcclxuICAgICAgICBjb25zdCBhOiBKU09OX0hlcm9fQWJpbGl0eSA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnYpIGFba2V5XSA9IHRoaXMudltrZXldO1xyXG4gICAgICAgIHJldHVybiBhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX0hlcm9fQWJpbGl0eSk6IENfSGVyb0FiaWxpdHkge1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgaW4gdGhpcy52ICYmIGFba2V5XSAhPT0gdW5kZWZpbmVkKSB0aGlzLnZba2V5XSA9IGFba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjbG9uZShzOiBDX0hlcm9BYmlsaXR5KTogQ19IZXJvQWJpbGl0eSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX0hlcm9BYmlsaXR5KHMuZW5jb2RlKCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX1BvaW50IH0gICAgICAgICAgICAgICAgICAgZnJvbSAnLi9DX1BvaW50JztcclxuaW1wb3J0IHsgQ19Qb2ludERpciwgSlNPTl9Qb2ludERpciB9IGZyb20gJy4vQ19Qb2ludERpcic7XHJcbmltcG9ydCB7IFRfRGlyZWN0aW9uIH0gICAgICAgICAgICAgICBmcm9tICcuL0NfUG9pbnREaXInO1xyXG5pbXBvcnQgeyBJX0pTT04sIEpTT05fQW55IH0gICAgICAgICAgZnJvbSAnLi9DX1NhdmVJbmZvJztcclxuaW1wb3J0IHsgVF9NYWtlRW51bVR5cGUgfSAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9UX01ha2VFbnVtVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRfTGNrZDp7W2xja2Q6IHN0cmluZ106IG51bWJlcn0gID0ge1xyXG4gICAgVW5rbjogMCxcclxuICAgIE1hemU6IDEsXHJcbiAgICBHdWxkOiAyLFxyXG59IGFzIGNvbnN0O1xyXG5leHBvcnQgdHlwZSBUX0xja2QgICA9IFRfTWFrZUVudW1UeXBlPHR5cGVvZiBUX0xja2Q+O1xyXG5cclxuZnVuY3Rpb24gX2xja2Rfa2V5KGxja2Q6IFRfTGNrZCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoVF9MY2tkKS5maW5kKGtleSA9PiBUX0xja2Rba2V5XSA9PT0gbGNrZCkgPz8gXCI/Pz8/XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9Mb2NhdGlvbiBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGtpbmQ/OiAgICBzdHJpbmcsXHJcbiAgICBuYW1lPzogICAgc3RyaW5nLFxyXG4gICAgbG9jX3VpZD86IHN0cmluZyxcclxuICAgIGxvY19wb3M/OiBKU09OX1BvaW50RGlyLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElfTG9jYXRlIHtcclxuICAgIHVpZDogICAgICAoKT0+c3RyaW5nO1xyXG4gICAgZ2V0X2xja2Q6ICgpPT5UX0xja2Q7XHJcbiAgICBnZXRfbmFtZTogKCk9PnN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfTG9jYXRpb24gaW1wbGVtZW50cyBJX0pTT04ge1xyXG4gICAgcHJvdGVjdGVkIGxvY19raW5kOiBUX0xja2QgPSBUX0xja2QuVW5rbjtcclxuICAgIHByb3RlY3RlZCBsb2NfbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBwcm90ZWN0ZWQgbG9jX3VpZDogIHN0cmluZyA9ICcnO1xyXG4gICAgcHJvdGVjdGVkIGxvY19wb3M6ICBDX1BvaW50RGlyID0gbmV3IENfUG9pbnREaXIoKTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoanNvbj86IEpTT05fTG9jYXRpb24pIHtcclxuICAgICAgICBpZiAoanNvbiAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShqc29uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X2xja2Rfc3RyKCk6IHN0cmluZyAge3JldHVybiBfbGNrZF9rZXkodGhpcy5sb2Nfa2luZCk7fVxyXG4gICAgcHVibGljIGdldF9sY2tkKCk6IFRfTGNrZCAgICAgIHtyZXR1cm4gdGhpcy5sb2Nfa2luZDt9XHJcbiAgICBwdWJsaWMgZ2V0X25hbWUoKTogc3RyaW5nICAgICAge3JldHVybiB0aGlzLmxvY19uYW1lO31cclxuICAgIHB1YmxpYyBnZXRfdWlkKCk6ICBzdHJpbmcgICAgICB7cmV0dXJuIHRoaXMubG9jX3VpZDt9XHJcblxyXG4gICAgcHVibGljIHNldF9sY2tkKGxja2Q6IFRfTGNrZCk6IENfTG9jYXRpb258dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAoIShfbGNrZF9rZXkobGNrZCkgaW4gVF9MY2tkKSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmxvY19raW5kID0gbGNrZDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfbmFtZShuYW1lOiBzdHJpbmcpOiAgIHZvaWQge3RoaXMubG9jX25hbWUgPSBuYW1lO31cclxuICAgIHB1YmxpYyBzZXRfdWlkICh1aWQ6IHN0cmluZyk6ICAgIHZvaWQge3RoaXMubG9jX3VpZCAgPSB1aWQ7fVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc2V0X2xja2Rfc3RyKGxja2Q6IHN0cmluZyk6IENfTG9jYXRpb258dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAoIShsY2tkIGluIFRfTGNrZCkpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5sb2Nfa2luZCA9IFRfTGNrZFtsY2tkXTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldF9wKCk6IENfUG9pbnQgICAgIHtcclxuLy8gICAgICAgIGlmICh0aGlzLmxvY19raW5kICE9IFRfTGNrZC5NYXplKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY19wb3MuZ2V0X3AoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfZCgpOiBUX0RpcmVjdGlvbiB7XHJcbi8vICAgICAgICBpZiAodGhpcy5sb2Nfa2luZCAhPSBUX0xja2QuTWF6ZSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NfcG9zLmdldF9kKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BkKCk6IENfUG9pbnREaXIge1xyXG4vLyAgICAgICAgaWYgKHRoaXMubG9jX2tpbmQgIT0gVF9MY2tkLk1hemUpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jX3Bvcy5nZXRfcGQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0X3AgICAocDogQ19Qb2ludERpcik6IENfUG9pbnREaXJ8dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAodGhpcy5sb2Nfa2luZCAhPT0gVF9MY2tkLk1hemUpICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAodGhpcy5sb2NfcG9zLnNldF9wKHApID09PSB1bmRlZmluZWQpICByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NfcG9zO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9kICAgKGQ6IFRfRGlyZWN0aW9uKTogVF9EaXJlY3Rpb258dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAodGhpcy5sb2Nfa2luZCAhPT0gVF9MY2tkLk1hemUpICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAodGhpcy5sb2NfcG9zLnNldF9kKGQpID09PSB1bmRlZmluZWQpICByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NfcG9zLmQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BkICAocGQ6IENfUG9pbnREaXIpOiBDX1BvaW50RGlyfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jX2tpbmQgIT09IFRfTGNrZC5NYXplKSAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICh0aGlzLmxvY19wb3Muc2V0X3BkKHBkKSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NfcG9zO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTG9jYXRpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGtpbmQ6ICAgICBfbGNrZF9rZXkodGhpcy5sb2Nfa2luZCksXHJcbiAgICAgICAgICAgIG5hbWU6ICAgICB0aGlzLmxvY19uYW1lLFxyXG4gICAgICAgICAgICBsb2NfdWlkOiAgdGhpcy5sb2NfdWlkLFxyXG4gICAgICAgICAgICBsb2NfcG9zOiAgdGhpcy5sb2NfcG9zLmVuY29kZSgpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo/OiBKU09OX0xvY2F0aW9uKTogQ19Mb2NhdGlvbiB7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKGoua2luZCA9PT0gdW5kZWZpbmVkIHx8ICEoai5raW5kIGluIFRfTGNrZCkpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoai5raW5kICAgICE9PSB1bmRlZmluZWQpIHRoaXMubG9jX2tpbmQgPSBUX0xja2Rbai5raW5kXTtcclxuICAgICAgICBpZiAoai5uYW1lICAgICE9PSB1bmRlZmluZWQpIHRoaXMubG9jX25hbWUgPSBqLm5hbWU7XHJcbiAgICAgICAgaWYgKGoubG9jX3VpZCAhPT0gdW5kZWZpbmVkKSB0aGlzLmxvY191aWQgID0gai5sb2NfdWlkO1xyXG4gICAgICAgIGlmIChqLmxvY19wb3MgIT09IHVuZGVmaW5lZCkgdGhpcy5sb2NfcG9zLmRlY29kZShqLmxvY19wb3MpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IFRfTXpLaW5kIH0gICAgICAgICAgICAgIGZyb20gXCIuL1RfTXpLaW5kXCI7XHJcbmltcG9ydCB7IENfTWF6ZUNlbGwgfSAgICAgICAgICAgIGZyb20gXCIuL0NfTWF6ZUNlbGxcIjtcclxuaW1wb3J0IHsgQ19NYXplT2JqLCBJX01hemVPYmosIEpTT05fTWF6ZU9iaiB9IGZyb20gXCIuL0NfTWF6ZU9ialwiO1xyXG5pbXBvcnQgeyBDX1BvaW50IH0gICAgICAgICAgICAgICBmcm9tIFwiLi9DX1BvaW50XCI7XHJcbmltcG9ydCB7IElfTG9jYXRlLCBUX0xja2QgfSAgICAgIGZyb20gXCIuL0NfTG9jYXRpb25cIjtcclxuaW1wb3J0IHsgQ19SYW5nZSB9ICAgICAgICAgICAgICAgZnJvbSBcIi4vQ19SYW5nZVwiO1xyXG5pbXBvcnQgeyBDX1RlYW0sIEpTT05fVGVhbSB9ICAgICBmcm9tIFwiLi9DX1RlYW1cIjtcclxuaW1wb3J0IHsgSV9KU09OX1VuaXEsIEpTT05fQW55IH0gZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5pbXBvcnQgeyBfZ2V0X3V1aWQsIF9pZ3JhbmQsIF9pcmFuZCB9ICAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuaW1wb3J0IHsgX21pbiB9IGZyb20gXCIuLi9kX3V0bC9GX01hdGhcIjtcclxuaW1wb3J0IHsgQ19Qb2ludERpciB9IGZyb20gXCIuL0NfUG9pbnREaXJcIjtcclxuaW1wb3J0IHsgVF9EaXJlY3Rpb24gfSBmcm9tIFwiLi9UX0RpcmVjdGlvblwiO1xyXG5pbXBvcnQgeyBDX1BvaW50TGluazJELCBDX1BvaW50U2V0MkQgfSBmcm9tIFwiLi9DX1BvaW50U2V0MkRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9NYXplIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgaWQ/OiAgICAgIG51bWJlcixcclxuICAgIHVuaXFfaWQ/OiBzdHJpbmcsXHJcbiAgICBzYXZlX2lkPzogbnVtYmVyLFxyXG4gICAgZmxvb3I/OiAgIG51bWJlcixcclxuICAgIG5hbWU/OiAgICBzdHJpbmcsXHJcbiAgICBzaXplX3g/OiAgbnVtYmVyLFxyXG4gICAgc2l6ZV95PzogIG51bWJlcixcclxuICAgIHNpemVfej86ICBudW1iZXIsXHJcbiAgICBtYXplPzogICAgc3RyaW5nLCBcclxuICAgIG1hc2s/OiAgICBzdHJpbmcsIFxyXG4gICAgbXl0ZWFtPzogIEpTT05fVGVhbSwgXHJcbiAgICBvYmpzPzogICAgSlNPTl9NYXplT2JqW10sXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfbWF6ZV9pbmZvKGE6IEpTT05fTWF6ZXx1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICBhbGVydChcIk1hemUgSW5mbzpcIlxyXG4gICAgICAgICsgXCJcXG5tYXplIGlkIDpcIiArIChhLmlkICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5mbG9vcjogXCIgICArIChhLmZsb29yICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG51bmlxIGlkIDpcIiArIChhLnVuaXFfaWQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zYXZlIGlkIDpcIiArIChhLnNhdmVfaWQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5uYW1lOiAgIFwiICArIChhLm5hbWUgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3g6IFwiICArIChhLnNpemVfeCAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3k6IFwiICArIChhLnNpemVfeSAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3o6IFwiICArIChhLnNpemVfeiAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJtYXplOlxcblwiICAgICArIChhLm1hemUgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJtYXNrOlxcblwiICAgICArIChhLm1hc2sgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbnR5cGUgX2luaXRfYXJnID0ge1xyXG4gICAgbWF6ZV9pZD86IG51bWJlcixcclxuICAgIHNhdmVfaWQ/OiBudW1iZXIsXHJcbiAgICBmbG9vcj86ICAgbnVtYmVyLFxyXG4gICAgbmFtZT86ICAgIHN0cmluZyxcclxuICAgIHNpemVfeD86ICBudW1iZXIsXHJcbiAgICBzaXplX3k/OiAgbnVtYmVyLFxyXG4gICAgc2l6ZV96PzogIG51bWJlcixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfTWF6ZSBpbXBsZW1lbnRzIElfTG9jYXRlLCBJX0pTT05fVW5pcSB7XHJcbiAgICBwcm90ZWN0ZWQgbWF6ZV9pZDogIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCB1bmlxX2lkOiAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHNhdmVfaWQ6ICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgZmxvb3I6ICAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBuYW1lOiAgICAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIG15X2xheWVyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJvdGVjdGVkIHNpemU6ICAgICBDX1JhbmdlO1xyXG4gICAgcHJvdGVjdGVkIGNlbGxzOiAgICBDX01hemVDZWxsW11bXVtdO1xyXG4gICAgcHJvdGVjdGVkIG1hc2tzOiAgICBib29sZWFuW11bXVtdO1xyXG4gICAgcHJvdGVjdGVkIHVuY2xlYXI6ICBudW1iZXJbXTtcclxuICAgIHByb3RlY3RlZCBvYmpzOiAgICAge1t1aWQ6IHN0cmluZ106IElfTWF6ZU9ian07XHJcbiAgICBwcm90ZWN0ZWQgbnVtX29mX3Jvb206ICAgICAgbnVtYmVyID0gNTsgLyog44Op44Oz44OA44Og55Sf5oiQ44Gu6Zqb44Gu6YOo5bGL44Gu5pWw44Gu5pyA5aSn5pWwICovXHJcbiAgICBwcm90ZWN0ZWQgbWF4X3NpemVfb2Zfcm9vbTogbnVtYmVyID0gMzsgLyog44Op44Oz44OA44Og55Sf5oiQ44Gu6Zqb44Gu6YOo5bGL44Gu5aSn44GN44GVICovXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGE/OiBfaW5pdF9hcmcpIHtcclxuICAgICAgICB0aGlzLm1hemVfaWQgPSAtMTtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgPSAtMTtcclxuICAgICAgICB0aGlzLnVuaXFfaWQgPSAnbWFpX21hemUjJyArIF9nZXRfdXVpZCgpO1xyXG4gICAgICAgIHRoaXMuZmxvb3IgICA9IDA7XHJcbiAgICAgICAgdGhpcy5uYW1lICAgID0gJyc7XHJcbiAgICAgICAgdGhpcy5zaXplICAgID0gbmV3IENfUmFuZ2UoXHJcbiAgICAgICAgICAgIG5ldyBDX1BvaW50KDAsIDAsIDApLCBcclxuICAgICAgICAgICAgbmV3IENfUG9pbnQoMiwgMiwgMikpO1xyXG4gICAgICAgIHRoaXMuY2VsbHMgICA9IHRoaXMuX19pbml0X21hemUoVF9NektpbmQuU3RvbmUpO1xyXG5cclxuICAgICAgICB0aGlzLm1hc2tzICAgPSB0aGlzLl9faW5pdF9tYXNrKHRydWUpO1xyXG4gICAgICAgIHRoaXMudW5jbGVhciA9IFtdO1xyXG4gICAgICAgIHRoaXMuX19pbml0X3VuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5vYmpzICAgID0ge307XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9faW5pdF9tYXplKGtpbmQ6IFRfTXpLaW5kID0gVF9NektpbmQuU3RvbmUpOiBDX01hemVDZWxsW11bXVtdIHtcclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeiA9IHRoaXMuc2l6ZS5zaXplX3ooKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2VsbHM6IENfTWF6ZUNlbGxbXVtdW10gPSBBcnJheShzaXplX3opIGFzIENfTWF6ZUNlbGxbXVtdW107XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBzaXplX3o7IHorKykge1xyXG4gICAgICAgICAgICBjZWxsc1t6XSA9IEFycmF5KHNpemVfeSkgYXMgQ19NYXplQ2VsbFtdW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGNlbGxzW3pdW3ldICA9IEFycmF5KHNpemVfeCkgYXMgQ19NYXplQ2VsbFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxzW3pdW3ldW3hdID0gQ19NYXplQ2VsbC5uZXdPYmooe2tpbmQ6a2luZCwgcG9zOiB7eDp4LCB5OnksIHo6en19KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2VsbHM7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX19pbml0X21hc2soWU46IGJvb2xlYW4pOiBib29sZWFuW11bXVtdIHtcclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeiA9IHRoaXMuc2l6ZS5zaXplX3ooKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXNrcyAgID0gQXJyYXkoc2l6ZV96KSBhcyBib29sZWFuW11bXVtdO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgdGhpcy5tYXNrc1t6XSA9IEFycmF5KHNpemVfeSkgYXMgYm9vbGVhbltdW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFza3Nbel1beV0gID0gQXJyYXkoc2l6ZV94KSBhcyBib29sZWFuW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrc1t6XVt5XVt4XSA9IFlOO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLm1hc2tzO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9faW5pdF91bmNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgICAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV96ID0gdGhpcy5zaXplLnNpemVfeigpO1xyXG5cclxuICAgICAgICB0aGlzLnVuY2xlYXIgPSBBcnJheShzaXplX3opO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgdGhpcy51bmNsZWFyW3pdPTA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXNrc1t6XVt5XVt4XSkgdGhpcy51bmNsZWFyW3pdKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHVpZCgpOiBzdHJpbmcgICAgICB7cmV0dXJuIHRoaXMudW5pcV9pZH1cclxuICAgIHB1YmxpYyBnZXRfbGNrZCgpOiBUX0xja2Qge3JldHVybiBUX0xja2QuTWF6ZX1cclxuICAgIHB1YmxpYyBnZXRfbmFtZSgpOiBzdHJpbmcge3JldHVybiB0aGlzLm5hbWV9XHJcblxyXG4gICAgcHVibGljIHdpdGhpbihwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZS53aXRoaW4ocCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIOODoeOCpOOCuuWGheOBruOCquODluOCuOOCp+OCr+ODiOOChOODouODs+OCueOCv+ODvOetieOBrumFjee9rlxyXG4gICAgcHVibGljIGFkZF9vYmoob2JqOiBJX01hemVPYmopOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9ianNbb2JqLnVpZCgpXSA9IG9iajtcclxuICAgIH1cclxuICAgIHB1YmxpYyBybXZfb2JqKG9iajogSV9NYXplT2JqKTogdm9pZCB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMub2Jqc1tvYmoudWlkKCldO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9vYmpfeHl6KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpOiBJX01hemVPYmp8bnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0X29iaihuZXcgQ19Qb2ludCh4LCB5LCB6KSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X29iaihwOiBDX1BvaW50KTogSV9NYXplT2JqfG51bGwge1xyXG4gICAgICAgIHZhciBsYXllciA9IC0xO1xyXG4gICAgICAgIHZhciBvYmo6IElfTWF6ZU9ianxudWxsICAgPSBudWxsO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGlkIGluIHRoaXMub2Jqcykge1xyXG4gICAgICAgICAgICBjb25zdCBleGlzdCA9IHRoaXMub2Jqc1tpZF07XHJcblxyXG4gICAgICAgICAgICBpZiAoZXhpc3QudmlldygpID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoZXhpc3Qud2l0aGluKHApICYmIGV4aXN0LnZpZXcoKT8ubGV0dGVyKCkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChleGlzdC52aWV3KCk/LmxheWVyKCk/Py05OSA+IGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXIgPSBleGlzdC52aWV3KCk/LmxheWVyKCk/Py05OTtcclxuICAgICAgICAgICAgICAgICAgICBvYmogICA9IGV4aXN0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGV4aXN0X29iaihwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpZCBpbiB0aGlzLm9ianMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3QgPSB0aGlzLm9ianNbaWRdO1xyXG4gICAgICAgICAgICBpZiAoZXhpc3Qud2l0aGluKHApICYmIGV4aXN0LnZpZXcoKT8ubGV0dGVyKCkgIT09IG51bGwpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGVhbeOBjOadpeOBn+ODneOCpOODs+ODiOOBjOacqui4j+WcsOOBoOOBo+OBn+OCieOBn+OBoOOBruW6iuOBq+WkieOBiOOCi1xyXG4gICAgcHVibGljIGNoYW5nZV91bmV4cF90b19mbG9vcihwOiBDX1BvaW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0X2tpbmQocCkgPT0gVF9NektpbmQuVW5leHApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRfY2VsbChwLCBUX016S2luZC5GbG9vcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIDJE44Oe44OD44OX44Gu44Oe44K544Kv5aSW44GX6Zai6YCjXHJcbiAgICBwdWJsaWMgY2xlYXJfbWFza19hcm91bmRfdGhlX3RlYW0odGVhbTogQ19UZWFtKTogdm9pZCB7XHJcbiAgICAgICAgLy8g54++5Zyo5Zyw44Go55yf5qiq44Gv6Ieq5YuV55qE44Gr6KaL44GI44KLXHJcbiAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZCgwLCAtMSkpO1xyXG4gICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoMCwgIDApKTtcclxuICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayh0ZWFtLndhbGsoKS5nZXRfYXJvdW5kKDAsICAxKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlcHRoICAgPSAgNTsgLy8gMkTjg57jg4Pjg5fnlKjjga7lpaXooYzjgY3pmZDnlYxcclxuXHJcbiAgICAgICAgLy8g5YmN5pa544Gu6KaL6YCa44GX44KS44OB44Kn44OD44Kv44GX44Gq44GM44KJ6KaL44GI44KL44Go44GT44KN44Gv6Kej5pS+44GZ44KLXHJcbiAgICAgICAgZm9yICh2YXIgZCA9IDE7IGQgPCBkZXB0aDsgZCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyb250X3BvcyA9IHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgMClcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNfbW92YWJsZShmcm9udF9wb3MpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmraPpnaLjgavpmpzlrrPnianjgYznhKHjgZHjgozjgbDjgIHjgZ3jga7kuKHlgbTjgoLopovjgYjjgotcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgLTEpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgIDApKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgIDEpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOato+mdouOBjOmanOWus+eJqeOBp+OCguOBneOBruaJi+WJjeOBvuOBp+imi+OBiOOBpuOBn+OBquOCieOAgeOBneOBruWjgeOBqOS4oeWBtOOBr+imi+OBiOOCi1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAtMSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAgMCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAgMSkpO1xyXG4gICAgICAgICAgICAgICAgLy8g5q2j6Z2i44Gr6Zqc5a6z54mp44GM5pyJ44Gj44Gf44KJ44Gd44Gu5aWl44Gv6KaL44GI44Gq44GE44Gu44Gn5o6i57Si57WC5LqGXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2NsZWFyX21hc2soY2xyX3BvczogQ19Qb2ludCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5zaXplLndpdGhpbihjbHJfcG9zKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tYXNrc1tjbHJfcG9zLnpdW2Nscl9wb3MueV1bY2xyX3Bvcy54XSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hc2tzW2Nscl9wb3Muel1bY2xyX3Bvcy55XVtjbHJfcG9zLnhdID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudW5jbGVhcltjbHJfcG9zLnpdLS07ICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc19jbGVhcmVkKGNscl9wb3M6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51bmNsZWFyW2Nscl9wb3Muel0gPCAxO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc19tYXNrZWQocDogQ19Qb2ludCk6IGJvb2xlYW4ge3JldHVybiB0aGlzLmlzX21hc2tlZF94eXoocC54LCBwLnksIHAueil9XHJcbiAgICBwdWJsaWMgaXNfbWFza2VkX3h5eih4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFza3Nbel1beV1beF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzX21vdmFibGUocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghdGhpcy5zaXplLndpdGhpbihwKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5nZXRfa2luZChwKSkge1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLkZsb29yOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlVuZXhwOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVwOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0ckRuOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVEOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gICAgXHJcblxyXG4gICAgcHVibGljIGdldF94X21heCgpOiBudW1iZXIge3JldHVybiB0aGlzLnNpemUuc2l6ZV94KCk7fVxyXG4gICAgcHVibGljIGdldF95X21heCgpOiBudW1iZXIge3JldHVybiB0aGlzLnNpemUuc2l6ZV95KCk7fVxyXG4gICAgcHVibGljIGdldF96X21heCgpOiBudW1iZXIge3JldHVybiB0aGlzLnNpemUuc2l6ZV96KCk7fVxyXG4gICAgcHVibGljIGdldF9raW5kIChwOiBDX1BvaW50KTogVF9NektpbmQge1xyXG4gICAgICAgIGlmICh0aGlzLnNpemUud2l0aGluKHApKSByZXR1cm4gdGhpcy5jZWxsc1twLnpdW3AueV1bcC54XS5nZXRLaW5kKCk7XHJcbiAgICAgICAgcmV0dXJuIFRfTXpLaW5kLk5vRGVmO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9raW5kX3h5eiAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcik6IFRfTXpLaW5kIHtcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbih4LCB5LCB6KSkgcmV0dXJuIHRoaXMuY2VsbHNbel1beV1beF0uZ2V0S2luZCgpO1xyXG4gICAgICAgIHJldHVybiBUX016S2luZC5Ob0RlZjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X2NlbGxfeHl6ICh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKTogQ19NYXplQ2VsbHx1bmRlZmluZWQgeyBcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbih4LCB5LCB6KSkgcmV0dXJuIHRoaXMuY2VsbHNbel1beV1beF07XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfY2VsbCAocDogQ19Qb2ludCk6IENfTWF6ZUNlbGx8dW5kZWZpbmVkIHsgXHJcbiAgICAgICAgaWYgKHRoaXMuc2l6ZS53aXRoaW4ocCkpIHJldHVybiB0aGlzLmNlbGxzW3Auel1bcC55XVtwLnhdO1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X2NlbGwocDogQ19Qb2ludCwgazogVF9NektpbmQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbihwKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNlbGxzW3Auel1bcC55XVtwLnhdID0gQ19NYXplQ2VsbC5uZXdPYmooe2tpbmQ6IGssIHBvczogcH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfY2VsbF94eXooeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgazogVF9NektpbmQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbih4LCB5LCB6KSkge1xyXG4gICAgICAgICAgICB0aGlzLmNlbGxzW3pdW3ldW3hdID0gQ19NYXplQ2VsbC5uZXdPYmooe2tpbmQ6IGssIHBvczoge3g6eCwgeTp5LCB6Onp9fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGNhbl9tb3ZlKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaXplLndpdGhpbihwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjYW5fVUQocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzX21vdmFibGUocCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbnB1YmxpYyBmaWxsX2NlbGwoa2luZDogVF9NektpbmQsIGZsb29yOm51bWJlcik6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgaCA9IDA7IGggPCB0aGlzLnNpemUuc2l6ZV95KCk7IGgrKylcclxuICAgIGZvciAobGV0IHcgPSAwOyB3IDwgdGhpcy5zaXplLnNpemVfeCgpOyB3KyspXHJcbiAgICAgICAgdGhpcy5zZXRfY2VsbF94eXoodywgaCwgZmxvb3IsIGtpbmQpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxyXG5wdWJsaWMgc2V0X2JveChraW5kOiBUX016S2luZCwgdG9wX3g6bnVtYmVyLCB0b3BfeTogbnVtYmVyLCBzaXplX3g6IG51bWJlciwgc2l6ZV95OiBudW1iZXIsIGZsb29yOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICh0b3BfeCArIHNpemVfeCA+IHRoaXMuc2l6ZS5zaXplX3goKSkgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpIC0gdG9wX3ggKyAxOyBcclxuICAgIGlmICh0b3BfeSArIHNpemVfeSA+IHRoaXMuc2l6ZS5zaXplX3koKSkgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpIC0gdG9wX3kgKyAxO1xyXG4gICAgXHJcbiAgICBjb25zdCB0b3AgPSB0b3BfeTtcclxuICAgIGNvbnN0IGJ0bSA9IHRvcCAgICArIHNpemVfeSAtIDE7XHJcbiAgICBjb25zdCBsZnQgPSB0b3BfeDtcclxuICAgIGNvbnN0IHJndCA9IGxmdCAgICArIHNpemVfeCAtIDE7XHJcbiAgICBcclxuICAgIC8vIOWMl+WBtCjkuIop44Go5Y2X5YG0KOS4iynjgpLnn7Plo4HjgatcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eih4LCB0b3AsIGZsb29yLCBraW5kKTtcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eih4LCBidG0sIGZsb29yLCBraW5kKTtcclxuICAgIH1cclxuICAgIC8vIOadseWBtCjlj7Mp44Go6KW/5YG0KOW3pinjgpLnn7Plo4HjgatcclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihsZnQsIHksIGZsb29yLCBraW5kKTtcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihyZ3QsIHksIGZsb29yLCBraW5kKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5cclxuLy8g6ZqO5LiK44Go6ZqO5LiL44Gr6ZqO5q6144KS6Kit572u44GZ44KLXHJcbnB1YmxpYyBjcmVhdGVfc3RhaXIoZmxvb3I6bnVtYmVyKTogQ19Qb2ludERpciB7XHJcbiAgICBjb25zdCBIX3NpemVfeCA9ICh0aGlzLnNpemUuc2l6ZV94KCkgLSAxKSAvIDI7XHJcbiAgICBjb25zdCBIX3NpemVfeSA9ICh0aGlzLnNpemUuc2l6ZV95KCkgLSAxKSAvIDI7XHJcbiAgICBjb25zdCBwb3NfeCAgICA9IDIgKiBfaXJhbmQoMCwgSF9zaXplX3ggLSAxKSArIDE7XHJcbiAgICBjb25zdCBwb3NfeSAgICA9IDIgKiBfaXJhbmQoMCwgSF9zaXplX3kgLSAxKSArIDE7XHJcbiAgICBjb25zdCBwb3NfZCAgICA9IDEgKiBfaXJhbmQoMCwgVF9EaXJlY3Rpb24uTUFYKTtcclxuXHJcbiAgICAvLyDkubHmlbDjgaflvpfjgZ/luqfmqJnjgavpmo7mrrXjgpLnva7jgY9cclxuICAgIGlmIChmbG9vciA+PSAxKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0X2NlbGxfeHl6KHBvc194LCBwb3NfeSwgZmxvb3IgLSAxKT8uZ2V0S2luZCgpICE9PSBUX016S2luZC5TdHJVcCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihwb3NfeCwgcG9zX3ksIGZsb29yIC0gMSwgIFRfTXpLaW5kLlN0ckRuKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihwb3NfeCwgcG9zX3ksIGZsb29yIC0gMSwgIFRfTXpLaW5kLlN0clVEKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5nZXRfY2VsbF94eXoocG9zX3gsIHBvc195LCBmbG9vcik/LmdldEtpbmQoKSAhPT0gVF9NektpbmQuU3RyRG4pIHtcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihwb3NfeCwgcG9zX3ksIGZsb29yLCAgVF9NektpbmQuU3RyVXApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihwb3NfeCwgcG9zX3ksIGZsb29yLCAgVF9NektpbmQuU3RyVUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgQ19Qb2ludERpcih7eDogcG9zX3gsIHk6IHBvc195LCB6OiBmbG9vciwgZDogcG9zX2R9KTtcclxufVxyXG5cclxucHVibGljIGNyZWF0ZV9tYXplKGZsb29yOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgIGNvbnN0IHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKTtcclxuXHJcblxyXG4gICAgLy8g44OA44Oz44K444On44Oz44GnJGZsb29y44Gn5oyH5a6a44GV44KM44Gf6ZqO44KS5pyq6LiP5Zyw44Gr44GZ44KLIFxyXG4gICAgdGhpcy5maWxsX2NlbGwoVF9NektpbmQuVW5leHAsIGZsb29yKTtcclxuXHJcbiAgICAvLyDjg4Djg7Pjgrjjg6fjg7Pjga7ovKrpg63jgpLnn7Plo4HjgavjgZnjgotcclxuICAgIHRoaXMuc2V0X2JveChUX016S2luZC5TdG9uZSwgMCwgMCwgc2l6ZV94LCBzaXplX3ksIGZsb29yKTtcclxuXHJcbiAgICAvLyDpgJrot6/jgavkuIDjgaTnva7jgY3jgavlo4HjgYzmiJDplbfjgZnjgovjg53jgqTjg7Pjg4jjgpLoqK3lrprjgZnjgotcclxuICAgIC8vIOODneOCpOODs+ODiOOBi+OCieWjgeOCkuS8uOOBsOOBmeaWueWQkeOCkuODqeODs+ODgOODoOOBq+axuuOCgeOCi1xyXG4gICAgY29uc3QgcG9pbnRzID0gbmV3IENfUG9pbnRTZXQyRCgpO1xyXG4gICAgZm9yIChsZXQgaCA9IDI7IGggPCBzaXplX3kgLSAyOyBoICs9IDIpe1xyXG4gICAgICAgIGZvciAobGV0IHcgPSAyOyB3IDwgc2l6ZV94IC0gMjsgdyArPSAyKXtcclxuICAgICAgICAgICAgY29uc3QgZGkgPSBfaXJhbmQoMCwgVF9EaXJlY3Rpb24uTUFYKTtcclxuICAgICAgICAgICAgcG9pbnRzLnB1c2gobmV3IENfUG9pbnRMaW5rMkQodywgaCwgZGkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Lmx5pWw44Gn44GE44GP44Gk44GL6YOo5bGL44KS5L2c44KLXHJcbiAgICBjb25zdCByb29tc19hcnJheSA9IFtdO1xyXG4gICAgY29uc3QgbnVtX29mX3Jvb20gPSBfaXJhbmQoMCwgdGhpcy5udW1fb2Zfcm9vbSk7XHJcbiAgICBmb3IgKGxldCBjbnQgPSAwOyBjbnQgPCBudW1fb2Zfcm9vbTsgY250KyspIHtcclxuICAgICAgICBjb25zdCBsZW5nX3ggPSBfaXJhbmQoMSwgIHRoaXMubWF4X3NpemVfb2Zfcm9vbSkgKiAyICsgMTtcclxuICAgICAgICBjb25zdCBsZW5nX3kgPSBfaXJhbmQoMSwgIHRoaXMubWF4X3NpemVfb2Zfcm9vbSkgKiAyICsgMTtcclxuICAgICAgICBjb25zdCByb29tX3ggPSBfaXJhbmQoMCwgKHNpemVfeCAtIGxlbmdfeCkgLyAyKSAqIDI7XHJcbiAgICAgICAgY29uc3Qgcm9vbV95ID0gX2lyYW5kKDAsIChzaXplX3kgLSBsZW5nX3kpIC8gMikgKiAyO1xyXG4gICAgICAgIHJvb21zX2FycmF5LnB1c2goe3R4OiByb29tX3gsIHR5OiByb29tX3ksIHN4OiBsZW5nX3gsIHN5OiBsZW5nX3l9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDpg6jlsYvjga7kuK3jga7jg53jgqTjg7Pjg4jjgpLliYrpmaTjgZnjgotcclxuICAgIGZvciAoY29uc3Qgcm9vbSBvZiByb29tc19hcnJheSkge1xyXG4gICAgICAgIGZvciAobGV0IGlpID0gMDsgaWkgPCBwb2ludHMuc2V0Lmxlbmd0aDsgaWkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBwID0gIHBvaW50cy5zZXRbaWldO1xyXG4gICAgICAgICAgICBpZiAocCA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGlmICggICAgKHAueCA+PSByb29tLnR4KSBcclxuICAgICAgICAgICAgICAgICYmICAocC54IDw9IHJvb20udHggKyByb29tLnN4KVxyXG4gICAgICAgICAgICAgICAgJiYgIChwLnkgPj0gcm9vbS50eSlcclxuICAgICAgICAgICAgICAgICYmICAocC55IDw9IHJvb20udHkgKyByb29tLnN5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50cy5yZW1vdmUocCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyDjg53jgqTjg7Pjg4jjgYvjgonlo4HjgpLmiJDplbfjgZXjgZvjgabov7fot6/jgpLkvZzjgotcclxuICAgIGZvciAoY29uc3QgcCBvZiBwb2ludHMuc2V0KSB7XHJcbiAgICAgICAgaWYgKHAgPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g44Od44Kk44Oz44OI44Gu5L2N572u44Gr55+z5aOB44KS572u44GPXHJcbiAgICAgICAgdGhpcy5zZXRfY2VsbF94eXoocC54LCBwLnksIGZsb29yLCBUX016S2luZC5TdG9uZSk7XHJcblxyXG4gICAgICAgIC8vIOafseOBruadseilv+WNl+WMl+OBruOBhOOBmuOCjOOBi+OBq+OCguefs+WjgeOCkue9ruOBj1xyXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IFswLCAwLCAwLCAwXTtcclxuICAgICAgICBjb25zdCBkaSA9IENfUG9pbnRMaW5rMkQuY2FzdChwKT8uZGkgPz8gVF9EaXJlY3Rpb24uWDtcclxuICAgICAgICBpZiAoZGkgPT09IFRfRGlyZWN0aW9uLlgpIGNvbnRpbnVlO1xyXG4gICAgICAgIGRpcmVjdGlvbltkaV0gPSAxO1xyXG5cclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihcclxuICAgICAgICAgICAgcC54IC0gZGlyZWN0aW9uW1RfRGlyZWN0aW9uLlddICsgZGlyZWN0aW9uW1RfRGlyZWN0aW9uLkVdLCBcclxuICAgICAgICAgICAgcC55IC0gZGlyZWN0aW9uW1RfRGlyZWN0aW9uLk5dICsgZGlyZWN0aW9uW1RfRGlyZWN0aW9uLlNdLCBcclxuICAgICAgICAgICAgZmxvb3IsXHJcbiAgICAgICAgICAgIFRfTXpLaW5kLlN0b25lXHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyDplonpjpbnqbrplpPjgYzlh7rmnaXjgabjgYTjgZ/jgonlh7rlj6PjgpLkvZzjgotcclxuICAgIC8vIOODneOCpOODs+ODiOOCkuODiOODrOODvOOCueOBl+OBpuOAgeaXouWHuuOBruODneOCpOODs+ODiOOBq+e5i+OBjOOBo+OBpuOBhOOBn+OCiemWiemOluepuumWk1xyXG4gICAgZm9yIChjb25zdCBzZXQgb2YgcG9pbnRzLnNldCkge1xyXG4gICAgICAgIGlmIChzZXQgPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcblxyXG4gICAgICAgIGNvbnN0IFt5biwgdHJhY2Vfc2V0XSA9IHRoaXMuY2hlY2tfY2xvc2Uoc2V0LngsIHNldC55LCBwb2ludHMsIG5ldyBDX1BvaW50U2V0MkQoKSk7XHJcbiAgICAgICAgaWYgKHluKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3Blbl9leGl0KHRyYWNlX3NldCwgVF9NektpbmQuVW5leHAsIGZsb29yKTtcclxuICAgICAgICAgICAgaWYgKHRyYWNlX3NldCAhPT0gdW5kZWZpbmVkKSBmb3IgKGNvbnN0IHQgb2YgdHJhY2Vfc2V0LnNldCkgcG9pbnRzLnJlbW92ZSh0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuXHJcbnByb3RlY3RlZCBjaGVja19jbG9zZSh4OiBudW1iZXIsIHk6IG51bWJlciwgcG9pbnRfc2V0OiBDX1BvaW50U2V0MkQsIHRyYWNlX3NldDogQ19Qb2ludFNldDJEfHVuZGVmaW5lZCk6IFtib29sZWFuLCBDX1BvaW50U2V0MkR8dW5kZWZpbmVkXSB7XHJcbiAgICBpZiAoeCA8IDIgfHwgeSA8IDIgfHwgeCA+IHRoaXMuc2l6ZS5zaXplX3goKSAtIDIgfHwgeSA+IHRoaXMuc2l6ZS5zaXplX3koKSAtIDIpIHJldHVybiBbZmFsc2UsIHVuZGVmaW5lZF07XHJcblxyXG4gICAgaWYgKHBvaW50X3NldCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gW2ZhbHNlLCB1bmRlZmluZWRdO1xyXG4gICAgaWYgKHBvaW50X3NldD8uaXNfZXhpc3QoeCwgeSkgPT09IGZhbHNlKSByZXR1cm4gW2ZhbHNlLCB1bmRlZmluZWRdO1xyXG5cclxuICAgIGlmICh0cmFjZV9zZXQgIT09IHVuZGVmaW5lZCAmJiB0cmFjZV9zZXQ/LmlzX2V4aXN0KHgsIHkpID09PSB0cnVlKSAgcmV0dXJuIFt0cnVlLCAgdHJhY2Vfc2V0XTtcclxuXHJcbiAgICBjb25zdCBwID0gcG9pbnRfc2V0LmdldF9wb2ludCh4LCB5KTtcclxuICAgIHRyYWNlX3NldCA/Pz0gbmV3IENfUG9pbnRTZXQyRCgpO1xyXG4gICAgdHJhY2Vfc2V0Py5wdXNoKG5ldyBDX1BvaW50TGluazJEKHgsIHksIENfUG9pbnRMaW5rMkQuY2FzdChwKT8uZGkpKTtcclxuXHJcbiAgICBsZXQgbmV4dF94OiBudW1iZXIgPSAwLCBuZXh0X3k6IG51bWJlciA9IDA7XHJcbiAgICBzd2l0Y2ggKENfUG9pbnRMaW5rMkQuY2FzdChwKT8uZGkpIHtcclxuICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46ICAvLyDljJdcclxuICAgICAgICAgICAgbmV4dF94ID0geDtcclxuICAgICAgICAgICAgbmV4dF95ID0geSAtIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogIC8vIOadsVxyXG4gICAgICAgICAgICBuZXh0X3ggPSB4ICsgMjtcclxuICAgICAgICAgICAgbmV4dF95ID0geTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiAgLy8g5Y2XXHJcbiAgICAgICAgICAgIG5leHRfeCA9IHg7XHJcbiAgICAgICAgICAgIG5leHRfeSA9IHkgKyAyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6ICAvLyDopb9cclxuICAgICAgICAgICAgbmV4dF94ID0geCAtIDI7XHJcbiAgICAgICAgICAgIG5leHRfeSA9IHk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja19jbG9zZShuZXh0X3gsIG5leHRfeSwgcG9pbnRfc2V0LCB0cmFjZV9zZXQpO1xyXG59XHJcblxyXG5wcm90ZWN0ZWQgb3Blbl9leGl0KHA6IENfUG9pbnRTZXQyRHx1bmRlZmluZWQsIGtpbmQ6IFRfTXpLaW5kLCBmbG9vcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAocCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgY250ID0gX2lyYW5kKDAsIHAuc2V0Lmxlbmd0aCAtIDEpO1xyXG4gICAgY29uc3QgcHAgID0gIHAuc2V0W2NudF07XHJcblxyXG4gICAgbGV0IGRpcmVjdGlvbiA9IFswLCAwLCAwLCAwXTtcclxuICAgIGNvbnN0IGRpID0gQ19Qb2ludExpbmsyRC5jYXN0KHBwKT8uZGkgPz8gVF9EaXJlY3Rpb24uTlxyXG4gICAgZGlyZWN0aW9uW2RpXSA9IDE7XHJcblxyXG4gICAgdGhpcy5zZXRfY2VsbF94eXooXHJcbiAgICAgICAgcHAueCAtIGRpcmVjdGlvbltUX0RpcmVjdGlvbi5XXSArIGRpcmVjdGlvbltUX0RpcmVjdGlvbi5FXSwgXHJcbiAgICAgICAgcHAueSAtIGRpcmVjdGlvbltUX0RpcmVjdGlvbi5OXSArIGRpcmVjdGlvbltUX0RpcmVjdGlvbi5TXSwgXHJcbiAgICAgICAgZmxvb3IsXHJcbiAgICAgICAga2luZCBcclxuICAgICk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuXHJcbi8qXHJcbnB1YmxpYyBzdGF0aWMgZnJvbV9vYmpfdG9fc3RyaW5nKG9hOiBDX01hemUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9hLCBudWxsLCBcIlxcdFwiKTtcclxufVxyXG5wdWJsaWMgc3RhdGljIGZyb21fb2JqQXJyYXlfdG9fc3RyaW5nKG9hYToge1t1aWQ6IHN0cmluZ106IENfTWF6ZX0pOiBzdHJpbmcge1xyXG4gICAgY29uc3Qgb2EgPSBbXSBhcyBDX01hemVbXTtcclxuICAgIGZvciAoY29uc3QgaWkgaW4gb2FhKSBvYS5wdXNoKG9hYVtpaV0pO1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9hLCBudWxsLCBcIlxcdFwiKTtcclxufVxyXG5wdWJsaWMgc3RhdGljIGZyb21fc3RyaW5nX3RvX29iaih0eHQ6IHN0cmluZyk6IENfTWF6ZSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGogICA9IEpTT04ucGFyc2UodHh0KSBhcyBKU09OX01hemVbXTtcclxuICAgICAgICByZXR1cm4gbmV3IENfTWF6ZSgpLmRlY29kZShqKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ19NYXplKCk7XHJcbiAgICB9O1xyXG59XHJcbnB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdfdG9fb2JqQXJyYXkodHh0OiBzdHJpbmcpOiB7W3VpZDogc3RyaW5nXTogQ19NYXplfSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGogICA9IEpTT04ucGFyc2UodHh0KSBhcyBKU09OX01hemVbXTtcclxuICAgICAgICBjb25zdCBtcGEgPSB7fSBhcyB7W2lkOiBzdHJpbmddOiBDX01hemV9O1xyXG4gICAgICAgIGZvciAoY29uc3Qgamogb2Ygaikge1xyXG4gICAgICAgICAgICBjb25zdCBhYWEgPSBuZXcgQ19NYXplKCkuZGVjb2RlKGpqKTtcclxuICAgICAgICAgICAgbXBhW2FhYS51aWQoKV0gPSBhYWE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtcGE7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9O1xyXG59XHJcbiovXHJcblxyXG4gICAgcHVibGljIHRvX2xldHRlcihwOiBDX1BvaW50KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jZWxsc1twLnpdW3AueV1bcC54XS50b19sZXR0ZXIoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB0b19zdHJpbmcoZmxvb3I6IG51bWJlciA9IDAsIGRlYnVnX21vZGU6IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKTtcclxuXHJcbiAgICAgICAgdmFyIHJldF9zdHI6IHN0cmluZyA9ICcnO1xyXG4gICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqID0gdGhpcy5nZXRfb2JqX3h5eih4LCB5LCBmbG9vcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRlYnVnX21vZGUgJiYgdGhpcy5tYXNrc1tmbG9vcl1beV1beF0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXRfc3RyICs9ICfvvLgnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmpfYyA9IG9iaj8udmlldygpPy5sZXR0ZXIoKSA/PyBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmogPT09IG51bGwgfHwgb2JqX2MgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0X3N0ciArPSB0aGlzLmNlbGxzW2Zsb29yXVt5XVt4XS50b19sZXR0ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRfc3RyICs9IG9ial9jO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXRfc3RyICs9IFwiXFxuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXRfc3RyO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX01hemUge1xyXG4gICAgICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgICAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV96ID0gdGhpcy5zaXplLnNpemVfeigpO1xyXG5cclxuICAgICAgICB2YXIgel9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHNpemVfejsgeisrKSB7XHJcbiAgICAgICAgICAgIHZhciB5X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeF9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICB4X2FycmF5LnB1c2godGhpcy5jZWxsc1t6XVt5XVt4XS5lbmNvZGUoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB5X2FycmF5LnB1c2goeF9hcnJheS5qb2luKCdYJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHpfYXJyYXkucHVzaCh5X2FycmF5LmpvaW4oJ1knKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1hemVfc3RyID0gel9hcnJheS5qb2luKCdaJyk7XHJcblxyXG4gICAgICAgIHZhciB6X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgdmFyIHlfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIHZhciB4X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHhfYXJyYXkucHVzaCh0aGlzLm1hc2tzW3pdW3ldW3hdID8gJzEnIDogJzAnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHlfYXJyYXkucHVzaCh4X2FycmF5LmpvaW4oJ1gnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgel9hcnJheS5wdXNoKHlfYXJyYXkuam9pbignWScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWFza19zdHIgPSB6X2FycmF5LmpvaW4oJ1onKTtcclxuXHJcbiAgICAgICAgbGV0IG9ianMgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHRoaXMub2Jqcykgb2Jqcy5wdXNoKHRoaXMub2Jqc1tpaV0uZW5jb2RlKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogICAgICB0aGlzLm1hemVfaWQsXHJcbiAgICAgICAgICAgIHVuaXFfaWQ6IHRoaXMudW5pcV9pZCxcclxuICAgICAgICAgICAgc2F2ZV9pZDogdGhpcy5zYXZlX2lkLFxyXG4gICAgICAgICAgICBmbG9vcjogICB0aGlzLmZsb29yLFxyXG4gICAgICAgICAgICBuYW1lOiAgICB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIG9ianM6ICAgIG9ianMsXHJcbiAgICAgICAgICAgIHNpemVfeDogIHRoaXMuc2l6ZS5zaXplX3goKSxcclxuICAgICAgICAgICAgc2l6ZV95OiAgdGhpcy5zaXplLnNpemVfeSgpLFxyXG4gICAgICAgICAgICBzaXplX3o6ICB0aGlzLnNpemUuc2l6ZV96KCksXHJcbiAgICAgICAgICAgIG1hemU6ICAgIG1hemVfc3RyLFxyXG4gICAgICAgICAgICBtYXNrOiAgICBtYXNrX3N0cixcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IEpTT05fTWF6ZXx1bmRlZmluZWQpOiBDX01hemUge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoYS5pZCAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubWF6ZV9pZCA9IGEuaWQ7XHJcbiAgICAgICAgaWYgKGEudW5pcV9pZCAhPT0gdW5kZWZpbmVkKSB0aGlzLnVuaXFfaWQgPSBhLnVuaXFfaWQ7XHJcbiAgICAgICAgaWYgKGEuc2F2ZV9pZCAhPT0gdW5kZWZpbmVkKSB0aGlzLnNhdmVfaWQgPSBhLnNhdmVfaWQ7XHJcbiAgICAgICAgaWYgKGEuZmxvb3IgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmZsb29yICAgPSBhLmZsb29yO1xyXG4gICAgICAgIGlmIChhLm5hbWUgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5uYW1lICAgID0gYS5uYW1lO1xyXG5cclxuICAgICAgICBpZiAoYS5vYmpzICAgICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5vYmpzID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl9vYmogb2YgYS5vYmpzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdfb2JqID0gQ19NYXplT2JqLm5ld09iaihqc29uX29iaik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ianNbbmV3X29iai51aWQoKV0gPSBuZXdfb2JqO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYS5zaXplX3ggIT09IHVuZGVmaW5lZCAmJiBhLnNpemVfeSAhPT0gdW5kZWZpbmVkICYmIGEuc2l6ZV96ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaXplICA9IG5ldyBDX1JhbmdlKFxyXG4gICAgICAgICAgICAgICAgbmV3IENfUG9pbnQoMCwgMCwgMCksIFxyXG4gICAgICAgICAgICAgICAgbmV3IENfUG9pbnQoYS5zaXplX3ggLSAxLCBhLnNpemVfeSAtIDEsIGEuc2l6ZV96IC0gMSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuY2VsbHMgICA9IHRoaXMuX19pbml0X21hemUoVF9NektpbmQuU3RvbmUpO1xyXG4gICAgICAgICAgICB0aGlzLm1hc2tzICAgPSB0aGlzLl9faW5pdF9tYXNrKHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9faW5pdF91bmNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeiA9IHRoaXMuc2l6ZS5zaXplX3ooKTtcclxuXHJcblxyXG4gICAgICAgIGlmIChhLm1hemUgIT09IHVuZGVmaW5lZCkge1xyXG4vKlxyXG4gICAgICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHNpemVfejsgeisrKVxyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKVxyXG4gICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxzW3pdW3ldW3hdLnNldChUX016S2luZC5TdG9uZSk7XHJcbiAgICAgICAgICAgIH1cclxuKi9cclxuICAgICAgICAgICAgY29uc3Qgel9hcnJheTogc3RyaW5nW10gPSBhLm1hemUuc3BsaXQoJ1onKTtcclxuICAgICAgICAgICAgY29uc3Qgel9tYXggPSBfbWluKFtzaXplX3osIHpfYXJyYXkubGVuZ3RoXSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgel9tYXg7IHorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeV9hcnJheTogc3RyaW5nW10gPSB6X2FycmF5W3pdLnNwbGl0KCdZJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5X21heCA9ICBfbWluKFtzaXplX3ksIHlfYXJyYXkubGVuZ3RoXSk7IFxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB5X21heDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeF9hcnJheTogc3RyaW5nW10gPSB5X2FycmF5W3ldLnNwbGl0KCdYJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeF9tYXggPSAgX21pbihbc2l6ZV94LCB4X2FycmF5Lmxlbmd0aF0pOyBcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHhfbWF4OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtpbmQgPSBwYXJzZUludCh4X2FycmF5W3hdLCAxNik7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbGxzW3pdW3ldW3hdID0gQ19NYXplQ2VsbC5uZXdPYmooe2tpbmQ6IGtpbmQsIHBvczoge3g6eCwgeTp5LCB6Onp9fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEubWFzayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19pbml0X21hc2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHpfYXJyYXk6IHN0cmluZ1tdID0gYS5tYXNrLnNwbGl0KCdaJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHpfbWF4ID0gX21pbihbc2l6ZV96LCB6X2FycmF5Lmxlbmd0aF0pO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHpfbWF4OyB6KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHlfYXJyYXk6IHN0cmluZ1tdID0gel9hcnJheVt6XS5zcGxpdCgnWScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeV9tYXggPSAgX21pbihbc2l6ZV95LCB5X2FycmF5Lmxlbmd0aF0pOyBcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgeV9tYXg7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhfYXJyYXk6IHN0cmluZ1tdID0geV9hcnJheVt5XS5zcGxpdCgnWCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhfbWF4ID0gIF9taW4oW3NpemVfeCwgeF9hcnJheS5sZW5ndGhdKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB4X21heDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4X2FycmF5W3hdICE9PSAnMCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFza3Nbel1beV1beF0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrc1t6XVt5XVt4XSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX19pbml0X3VuY2xlYXIoKTsgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGVuY29kZV9hbGwoYWxsX21hemU6IENfTWF6ZVtdKTogSlNPTl9NYXplW10ge1xyXG4gICAgICAgIGNvbnN0IGFsbF9tYXplX2RhdGE6IEpTT05fTWF6ZVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgbWF6ZSBvZiBhbGxfbWF6ZSkge1xyXG4gICAgICAgICAgICBhbGxfbWF6ZV9kYXRhLnB1c2gobWF6ZS5lbmNvZGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxfbWF6ZV9kYXRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBkZWNvZGVfYWxsKGFsbF9tYXplX2RhdGE6IEpTT05fTWF6ZVtdKTogQ19NYXplW10ge1xyXG4gICAgICAgIGNvbnN0IGFsbF9tYXplOiBDX01hemVbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IG1hemVfZGF0YSBvZiBhbGxfbWF6ZV9kYXRhKSB7XHJcbiAgICAgICAgICAgIGFsbF9tYXplLnB1c2goKG5ldyBDX01hemUoe30pKS5kZWNvZGUobWF6ZV9kYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxfbWF6ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGFsZXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiTWF6ZSBJbmZvOlwiXHJcbiAgICAgICAgICAgICsgXCJcXG5tYXplIGlkIDpcIiArICh0aGlzLm1hemVfaWQgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuZmxvb3I6IFwiICAgKyAodGhpcy5mbG9vciAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnVuaXEgaWQgOlwiICsgKHRoaXMudW5pcV9pZCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zYXZlIGlkIDpcIiArICh0aGlzLnNhdmVfaWQgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubmFtZTogICBcIiAgKyAodGhpcy5uYW1lICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNpemVfeDogXCIgICsgKHRoaXMuc2l6ZS5zaXplX3goKSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zaXplX3k6IFwiICArICh0aGlzLnNpemUuc2l6ZV95KCkgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2l6ZV96OiBcIiAgKyAodGhpcy5zaXplLnNpemVfeigpID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhbGVydF9tYXplKGZsb29yOiBudW1iZXIgPSAwKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJNYXplIE1hcDpcIlxyXG4gICAgICAgICAgICArIFwibWF6ZTpcXG5cIiAgICAgKyAodGhpcy50b19zdHJpbmcoZmxvb3IsIHRydWUpICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWxlcnRfbWFzayhmbG9vcjogbnVtYmVyID0gMCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiTWFzayBNYXA6XCJcclxuICAgICAgICAgICAgKyBcIm1hc2s6XFxuXCIgICAgICsgKHRoaXMudG9fc3RyaW5nKGZsb29yLCBmYWxzZSkgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgX2dldF91dWlkIH0gZnJvbSBcIi4uL2RfdXRsL0ZfUmFuZFwiO1xyXG5pbXBvcnQgeyBUX016S2luZCB9ICBmcm9tIFwiLi9UX016S2luZFwiO1xyXG5pbXBvcnQgeyBKU09OX0FueSB9ICBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcbmltcG9ydCB7IENfTWF6ZU9iaiwgSV9NYXplT2JqLCBKU09OX01hemVPYmogfSBmcm9tIFwiLi9DX01hemVPYmpcIjtcclxuaW1wb3J0IHsgVF9XYWxsIH0gICAgZnJvbSAnLi9DX1dhbGwnO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9NYXplQ2VsbCBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGtpbmQ/OiBUX016S2luZFxyXG4gICAgb2JqPzogIEpTT05fTWF6ZU9iaixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfTWF6ZUNlbGwgIHtcclxuICAgIHByb3RlY3RlZCBraW5kOiAgIFRfTXpLaW5kO1xyXG4gICAgcHJvdGVjdGVkIG15X29iajogSV9NYXplT2JqO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbmV3T2JqKGo6IEpTT05fTWF6ZUNlbGwpOiBDX01hemVDZWxsIHtcclxuICAgICAgICBzd2l0Y2ggKGoua2luZCkge1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLk5vRGVmOiByZXR1cm4gbmV3IENfTWF6ZUNlbGxOb0RlZihqKTsgXHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuVW5rd246IHJldHVybiBuZXcgQ19NYXplQ2VsbFVua3duKGopOyBcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5FbXB0eTogcmV0dXJuIG5ldyBDX01hemVDZWxsRW1wdHkoaik7IFxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLkZsb29yOiByZXR1cm4gbmV3IENfTWF6ZUNlbGxGbG9vcihqKTtcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5VbmV4cDogcmV0dXJuIG5ldyBDX01hemVDZWxsVW5leHAoaik7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RvbmU6IHJldHVybiBuZXcgQ19NYXplQ2VsbFN0b25lKGopO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVwOiByZXR1cm4gbmV3IENfTWF6ZUNlbGxTdHJVcChqKTtcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJEbjogcmV0dXJuIG5ldyBDX01hemVDZWxsU3RyRG4oaik7IFxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVEOiByZXR1cm4gbmV3IENfTWF6ZUNlbGxTdHJVRChqKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX01hemVDZWxsTm9EZWYoaik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGo6IEpTT05fTWF6ZUNlbGwpIHtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcbiAgICAgICAgai5vYmouY2xuYW1lID8/PSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMua2luZCAgID0gai5raW5kID8/IFRfTXpLaW5kLk5vRGVmO1xyXG4gICAgICAgIHRoaXMubXlfb2JqID0gQ19NYXplT2JqLm5ld09iaihqLm9iaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0T2JqKCk6ICBJX01hemVPYmoge3JldHVybiB0aGlzLm15X29ian1cclxuICAgIHB1YmxpYyBnZXRLaW5kKCk6IFRfTXpLaW5kIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5raW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b19sZXR0ZXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5teV9vYmoudmlldygpPy5sZXR0ZXIoKSA/PyAn77y4JztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9sZXR0ZXIobGV0dGVyOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKFRfTXpLaW5kKSkge1xyXG4gICAgICAgICAgICBpZiAobGV0dGVyID09PSBrZXkpIHJldHVybiBUX016S2luZFtrZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gVF9NektpbmQuTm9EZWY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyb3czRChmcm90OiBUX1dhbGwsIGJhY2s6IFRfV2FsbCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubXlfb2JqLnZpZXcoKT8uZHJvdzNEKGZyb3QsIGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5raW5kLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLFwiMFwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVjb2RlKHN0cjogc3RyaW5nLCBqPzogSlNPTl9NYXplQ2VsbCk6IENfTWF6ZUNlbGx8dW5kZWZpbmVkIHtcclxuICAgICAgICAgY29uc3Qga2luZCA9IHBhcnNlSW50KHN0ciwgMTYpIGFzIFRfTXpLaW5kO1xyXG4gICAgICAgICByZXR1cm4gQ19NYXplQ2VsbC5uZXdPYmooe2tpbmQ6IGtpbmQsIHBvczogaj8ucG9zfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGxOb0RlZiBleHRlbmRzIENfTWF6ZUNlbGwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVDZWxsfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGogPz89IHtraW5kOiBUX016S2luZC5Ob0RlZn07XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG5cclxuICAgICAgICBqLm9iai5jYW5fdGhyID0gJzAnO1xyXG4gICAgICAgIGoub2JqLnBvcyAgICAgPSB7eDpqLngsIHk6ai55LCB6Omouen07XHJcbiAgICAgICAgai5vYmoudmlldyAgICA9ICB7XHJcbiAgICAgICAgICAgIGxheWVyOiAwLCBsZXR0ZXI6ICfnlpEnLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgJzAnLFxyXG4gICAgICAgICAgICBwYWRfdDogMC4wLCBwYWRfZDogMC4wLCBwYWRfczogMC4wLFxyXG4gICAgICAgICAgICBjb2xfZjogJycsIGNvbF9iOiAnJywgY29sX3M6ICcnLCBjb2xfdDogJycsIGNvbF9kOiAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsVW5rd24gZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuVW5rd259O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcwJztcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn6KyOJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcwJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcnLCBjb2xfZDogJycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJycsIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGxFbXB0eSBleHRlbmRzIENfTWF6ZUNlbGwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVDZWxsfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGogPz89IHtraW5kOiBUX016S2luZC5FbXB0eX07XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG5cclxuICAgICAgICBqLm9iai5jYW5fdGhyID0gJzEnO1xyXG4gICAgICAgIGoub2JqLnBvcyAgICAgPSB7eDpqLngsIHk6ai55LCB6Omouen07XHJcbiAgICAgICAgai5vYmoudmlldyAgICA9ICB7XHJcbiAgICAgICAgICAgIGxheWVyOiAwLCBsZXR0ZXI6ICfnhKEnLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgJzAnLFxyXG4gICAgICAgICAgICBwYWRfdDogMC4wLCBwYWRfZDogMC4wLCBwYWRfczogMC4wLFxyXG4gICAgICAgICAgICBjb2xfZjogJycsIGNvbF9iOiAnJywgY29sX3M6ICcnLCBjb2xfdDogJycsIGNvbF9kOiAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnJywgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbEZsb29yIGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLkZsb29yfTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMSc7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ+OAgCcsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMScsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbiAgICAgICAgICAgIGNvbF9mOiAnJywgY29sX2I6ICcnLCBjb2xfczogJycsIGNvbF90OiAnIzY2NjZmZicsIGNvbF9kOiAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnIzk5OTlmZicsIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbFVuZXhwIGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLlVuZXhwfTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMSc7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ+ODuycsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMScsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbiAgICAgICAgICAgIGNvbF9mOiAnJywgY29sX2I6ICcnLCBjb2xfczogJycsIGNvbF90OiAnIzY2ZmZmZicsIGNvbF9kOiAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnIzk5OTlmZicsIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbFN0b25lIGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLlN0b25lfTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMCc7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ++8gycsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMScsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbiAgICAgICAgICAgIGNvbF9mOiAnIzAwZmYwMCcsIGNvbF9iOiAnJywgY29sX3M6ICcjMDBlZTAwJywgY29sX3Q6ICcnLCBjb2xfZDogJycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJyMwMDAwZmYnLCBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGxTdHJVcCBleHRlbmRzIENfTWF6ZUNlbGwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVDZWxsfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGogPz89IHtraW5kOiBUX016S2luZC5TdHJVcH07XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG5cclxuICAgICAgICBqLm9iai5jYW5fdGhyID0gJzEnO1xyXG4gICAgICAgIGoub2JqLnBvcyAgICAgPSB7eDpqLngsIHk6ai55LCB6Omouen07XHJcbiAgICAgICAgai5vYmoudmlldyAgICA9ICB7XHJcbiAgICAgICAgICAgIGxheWVyOiAwLCBsZXR0ZXI6ICfkuIonLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgJzEnLFxyXG4gICAgICAgICAgICBwYWRfdDogMC4wLCBwYWRfZDogMC4wLCBwYWRfczogMC4wLFxyXG4gICAgICAgICAgICBjb2xfZjogJycsIGNvbF9iOiAnJywgY29sX3M6ICcnLCBjb2xfdDogJyNmZmZmY2MnLCBjb2xfZDogJyNmZmZmY2MnLCBcclxuICAgICAgICAgICAgY29sX2w6ICcjMDAwMGZmJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsU3RyRG4gZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuU3RyRG59O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcxJztcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn5LiLJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcxJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcjZmZmZmNjJywgY29sX2Q6ICcjZmZmZmNjJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnIzAwMDBmZicsIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbFN0clVEIGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLlN0clVEfTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMSc7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ+autScsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMScsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbiAgICAgICAgICAgIGNvbF9mOiAnJywgY29sX2I6ICcnLCBjb2xfczogJycsIGNvbF90OiAnI2ZmZmZjYycsIGNvbF9kOiAnI2ZmZmZjYycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJyMwMDAwZmYnLCBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBfYWxlcnQgfSBmcm9tIFwiLi4vZF9jbW4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9IGZyb20gXCIuLi9kX3V0bC9DX0RzcE1lc3NhZ2VcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9NYXplSW5mbyB7XHJcbiAgICBuYW1lOiAgICAgIHN0cmluZztcclxuICAgIG1ibmFtZTogICAgc3RyaW5nO1xyXG4gICAgbHY6ICAgICAgICBudW1iZXI7XHJcbiAgICBzaXplX3g6ICAgIG51bWJlcjtcclxuICAgIHNpemVfeTogICAgbnVtYmVyO1xyXG4gICAgc2l6ZV96OiAgICBudW1iZXI7XHJcbiAgICBtYXhfcm9vbTogIG51bWJlcjtcclxuICAgIHJvb21fc2l6ZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfbWF6ZWluZm9faW5mbyhhPzogSlNPTl9NYXplSW5mbyk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgIGFsZXJ0KFwiTWF6ZUluZm8gRGF0YTpcIlxyXG4gICAgICAgICsgXCJcXG5uYW1lIDogXCIgICAgICAgKyAoYS5uYW1lICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5tYm5hbWU6IFwiICAgICAgKyAoYS5tYm5hbWUgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sdiA6XCIgICAgICAgICAgKyAoYS5sdiAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3g6IFwiICAgICAgKyAoYS5zaXplX3ggICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3k6IFwiICAgICAgKyAoYS5zaXplX3kgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3o6IFwiICAgICAgKyAoYS5zaXplX3ogICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5tYXhfb2Zfcm9vbTogXCIgKyAoYS5tYXhfcm9vbSAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5yb29tX3NpemU6IFwiICAgKyAoYS5yb29tX3NpemUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfTWF6ZUluZm8ge1xyXG4gICAgcHVibGljIG5hbWU6ICAgICAgc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgbWJuYW1lOiAgICBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBsdjogICAgICAgIG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc2l6ZV94OiAgICBudW1iZXIgPSAzO1xyXG4gICAgcHVibGljIHNpemVfeTogICAgbnVtYmVyID0gMztcclxuICAgIHB1YmxpYyBzaXplX3o6ICAgIG51bWJlciA9IDM7XHJcbiAgICBwdWJsaWMgbWF4X3Jvb206ICBudW1iZXIgPSAxO1xyXG4gICAgcHVibGljIHJvb21fc2l6ZTogbnVtYmVyID0gMTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0X3RibF9hbGwoKTogQ19NYXplSW5mb1tdIHtcclxuICAgICAgICBjb25zdCBtYXplaW5mbzogQ19NYXplSW5mb1tdID0gW107XHJcbiAgICAgICAgbWF6ZWluZm8ucHVzaChcclxuICAgICAgICAgICAgbmV3IENfTWF6ZUluZm8oKS5kZWNvZGUoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogICBcdCdtYXplMDEwJywgXHJcbiAgICAgICAgICAgICAgICBtYm5hbWU6IFx0J+aVmee3tOWgtCcsIFxyXG4gICAgICAgICAgICAgICAgbHY6ICAgICBcdCAxLCBcclxuICAgICAgICAgICAgICAgIHNpemVfeDogXHQxMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3k6IFx0MTEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV96OiBcdCAzLCBcclxuICAgICAgICAgICAgICAgIG1heF9yb29tOiBcdCAyLCBcclxuICAgICAgICAgICAgICAgIHJvb21fc2l6ZTogXHQgMyBcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBtYXplaW5mby5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgQ19NYXplSW5mbygpLmRlY29kZSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAgIFx0J21hemUwMTEnLCBcclxuICAgICAgICAgICAgICAgIG1ibmFtZTogXHQn5aeL44G+44KK44Gu6L+35a6uJywgXHJcbiAgICAgICAgICAgICAgICBsdjogICAgIFx0IDEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV94OiBcdDIxLCBcclxuICAgICAgICAgICAgICAgIHNpemVfeTogXHQyMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3o6IFx0IDUsIFxyXG4gICAgICAgICAgICAgICAgbWF4X3Jvb206IFx0IDMsIFxyXG4gICAgICAgICAgICAgICAgcm9vbV9zaXplOiBcdCAzIFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1hemVpbmZvLnB1c2goXHJcbiAgICAgICAgICAgIG5ldyBDX01hemVJbmZvKCkuZGVjb2RlKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICAgXHQnbWF6ZTAxMicsIFxyXG4gICAgICAgICAgICAgICAgbWJuYW1lOiBcdCfmmpfjgY3mo67jga7ov7flrq4nLCBcclxuICAgICAgICAgICAgICAgIGx2OiAgICAgXHQgMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3g6IFx0MjUsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV95OiBcdDI1LCBcclxuICAgICAgICAgICAgICAgIHNpemVfejogXHQgNywgXHJcbiAgICAgICAgICAgICAgICBtYXhfcm9vbTogXHQgNSwgXHJcbiAgICAgICAgICAgICAgICByb29tX3NpemU6IFx0IDMgXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIClcclxuICAgICAgICBtYXplaW5mby5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgQ19NYXplSW5mbygpLmRlY29kZSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAgIFx0J21hemUwMTMnLCBcclxuICAgICAgICAgICAgICAgIG1ibmFtZTogXHQn6buS6a2U44Gu5Zyw5LiL5aKT5ZywJywgXHJcbiAgICAgICAgICAgICAgICBsdjogICAgIFx0IDEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV94OiBcdDMxLCBcclxuICAgICAgICAgICAgICAgIHNpemVfeTogXHQzMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3o6IFx0MTAsIFxyXG4gICAgICAgICAgICAgICAgbWF4X3Jvb206IFx0IDUsIFxyXG4gICAgICAgICAgICAgICAgcm9vbV9zaXplOiBcdCA1IFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHJldHVybiBtYXplaW5mbztcclxuICAgIH1cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoaj86IEpTT05fTWF6ZUluZm8pIHtcclxuICAgICAgICBpZiAoaiAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9NYXplSW5mbyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogICAgICB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIG1ibmFtZTogICAgdGhpcy5tYm5hbWUsXHJcbiAgICAgICAgICAgIGx2OiAgICAgICAgdGhpcy5sdixcclxuICAgICAgICAgICAgc2l6ZV94OiAgICB0aGlzLnNpemVfeCxcclxuICAgICAgICAgICAgc2l6ZV95OiAgICB0aGlzLnNpemVfeSxcclxuICAgICAgICAgICAgc2l6ZV96OiAgICB0aGlzLnNpemVfeixcclxuICAgICAgICAgICAgbWF4X3Jvb206ICB0aGlzLm1heF9yb29tLFxyXG4gICAgICAgICAgICByb29tX3NpemU6IHRoaXMucm9vbV9zaXplLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoaj86IEpTT05fTWF6ZUluZm8pOiBDX01hemVJbmZvIHtcclxuICAgICAgICBpZiAoaiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGoubmFtZSAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubmFtZSAgICAgID0gai5uYW1lO1xyXG4gICAgICAgIGlmIChqLm1ibmFtZSAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm1ibmFtZSAgICA9IGoubWJuYW1lO1xyXG4gICAgICAgIGlmIChqLmx2ICAgICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmx2ICAgICAgICA9IGoubHY7XHJcbiAgICAgICAgaWYgKGouc2l6ZV94ICAgICE9PSB1bmRlZmluZWQpIHRoaXMuc2l6ZV94ICAgID0gai5zaXplX3g7XHJcbiAgICAgICAgaWYgKGouc2l6ZV95ICAgICE9PSB1bmRlZmluZWQpIHRoaXMuc2l6ZV95ICAgID0gai5zaXplX3k7XHJcbiAgICAgICAgaWYgKGouc2l6ZV96ICAgICE9PSB1bmRlZmluZWQpIHRoaXMuc2l6ZV96ICAgID0gai5zaXplX3o7XHJcbiAgICAgICAgaWYgKGoubWF4X3Jvb20gICE9PSB1bmRlZmluZWQpIHRoaXMubWF4X3Jvb20gID0gai5tYXhfcm9vbTtcclxuICAgICAgICBpZiAoai5yb29tX3NpemUgIT09IHVuZGVmaW5lZCkgdGhpcy5yb29tX3NpemUgPSBqLnJvb21fc2l6ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIk1hemVJbmZvIERhdGE6XCJcclxuICAgICAgICAgICAgKyBcIlxcbm5hbWUgOiBcIiAgICAgICArICh0aGlzLm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5tYm5hbWU6IFwiICAgICAgKyAodGhpcy5tYm5hbWUgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubHYgOlwiICAgICAgICAgICsgKHRoaXMubHYgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNpemVfeDogXCIgICAgICArICh0aGlzLnNpemVfeCAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zaXplX3k6IFwiICAgICAgKyAodGhpcy5zaXplX3kgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2l6ZV96OiBcIiAgICAgICsgKHRoaXMuc2l6ZV96ICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbm1heF9vZl9yb29tOiBcIiArICh0aGlzLm1heF9yb29tICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5yb29tX3NpemU6IFwiICAgKyAodGhpcy5yb29tX3NpemUgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX1BvaW50IH0gICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vQ19Qb2ludFwiO1xyXG5pbXBvcnQgeyBDX1BvaW50RGlyLCBKU09OX1BvaW50RGlyIH0gZnJvbSBcIi4vQ19Qb2ludERpclwiO1xyXG5pbXBvcnQgeyBJX0Fic3RyYWN0LCBJX0pTT05fVW5pcSwgSlNPTl9BbnkgfSAgICAgZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5pbXBvcnQgeyBfZ2V0X3V1aWQgfSAgICAgICAgICAgICAgICAgZnJvbSBcIi4uL2RfdXRsL0ZfUmFuZFwiO1xyXG5pbXBvcnQgeyBcclxuICAgIENfTWF6ZU9ialZpZXcsIFxyXG4gICAgSV9NYXplT2JqVmlldywgXHJcbiAgICBKU09OX01hemVPYmpWaWV3IFxyXG59IGZyb20gXCIuL0NfTWF6ZU9ialZpZXdcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fTWF6ZU9iaiBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGNsbmFtZT86ICAgIHN0cmluZyxcclxuICAgIHVuaXFfaWQ/OiAgIHN0cmluZywgXHJcbiAgICBwb3M/OiAgICAgICBKU09OX1BvaW50RGlyLFxyXG4gICAgdmlldz86ICAgICAgSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQsXHJcbiAgICB0aHI/OiAgICAgICBzdHJpbmcsIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJX01hemVPYmogZXh0ZW5kcyBJX0pTT05fVW5pcSwgSV9BYnN0cmFjdCB7XHJcbiAgICBnZXRfcGQ6ICAgICAoKT0+Q19Qb2ludERpcjtcclxuICAgIHdpdGhpbjogICAgIChwOiBDX1BvaW50KT0+Ym9vbGVhbjtcclxuICAgIHZpZXc6ICAgICAgICgpPT5JX01hemVPYmpWaWV3fHVuZGVmaW5lZDtcclxuICAgIGNhblRocm91Z2g6ICgpPT5ib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19NYXplT2JqIGltcGxlbWVudHMgSV9NYXplT2JqIHtcclxuICAgIHByb3RlY3RlZCBjbG5hbWU6ICAgIHN0cmluZyA9ICdDX01hemVPYmonO1xyXG5cclxuICAgIHByaXZhdGUgICB1bmlxX2lkOiAgIHN0cmluZztcclxuICAgIHByb3RlY3RlZCBwb3M6ICAgICAgIENfUG9pbnREaXI7XHJcbiAgICBwcm90ZWN0ZWQgbXlfdmlldzogICBJX01hemVPYmpWaWV3fHVuZGVmaW5lZDtcclxuICAgIHByb3RlY3RlZCBjYW5fdGhyOiAgIGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBuZXdPYmooaj86IEpTT05fTWF6ZU9ianx1bmRlZmluZWQpOiBJX01hemVPYmoge1xyXG4gICAgICAgIGogPz89IHt9O1xyXG4gICAgICAgIGouY2xuYW1lID8/PSBDX01hemVPYmouY29uc3RydWN0b3IubmFtZTtcclxuICAgICAgICBzd2l0Y2ggKGouY2xuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ19NYXplT2JqLmNvbnN0cnVjdG9yLm5hbWU6IHJldHVybiBuZXcgQ19NYXplT2JqKGopO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IENfTWF6ZU9iaihqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBuZXdPYmooaj86IEpTT05fTWF6ZU9ianx1bmRlZmluZWQpOiBJX01hemVPYmoge1xyXG4gICAgICAgIHJldHVybiBDX01hemVPYmoubmV3T2JqKGopO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplT2JqfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMudW5pcV9pZCAgICA9ICdtYXplb2JqXycgKyBfZ2V0X3V1aWQoKTtcclxuICAgICAgICB0aGlzLmNsbmFtZSAgICAgPSAgQ19NYXplT2JqLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICAgICAgdGhpcy5wb3MgICAgICAgID0gIG5ldyBDX1BvaW50RGlyKHt4OjAsIHk6MCwgejowLCBkOjB9KTtcclxuICAgICAgICB0aGlzLm15X3ZpZXcgICAgPSAgdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuY2FuX3RociAgICA9ICB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoaiAhPT0gdW5kZWZpbmVkKSB0aGlzLl9faW5pdChqKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9faW5pdChqOiBKU09OX01hemVPYmp8dW5kZWZpbmVkKTogQ19NYXplT2JqIHtcclxuICAgICAgICBpZiAoaiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGoudW5pcV9pZCAhPT0gdW5kZWZpbmVkKSB0aGlzLnVuaXFfaWQgICA9IGoudW5pcV9pZDtcclxuICAgICAgICBpZiAoai5jbG5hbWUgICE9PSB1bmRlZmluZWQpIHRoaXMuY2xuYW1lICAgID0gai5jbG5hbWU7XHJcbiAgICAgICAgaWYgKGoucG9zICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLnBvcy5kZWNvZGUoai5wb3MpO1xyXG4gICAgICAgIGlmIChqLnZpZXcgICAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoai52aWV3KS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm15X3ZpZXcgPz89IENfTWF6ZU9ialZpZXcubmV3T2JqKGoudmlldyk7IFxyXG4gICAgICAgICAgICB9IGVsc2UgdGhpcy5teV92aWV3ICA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGouY2FuX3RociAhPT0gdW5kZWZpbmVkKSB0aGlzLmNhbl90aHIgPSBqLmNhbl90aHIgIT09ICcwJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxufVxyXG5cclxuICAgIHB1YmxpYyB1aWQoKTogc3RyaW5nIHtyZXR1cm4gdGhpcy51bmlxX2lkfVxyXG5cclxuICAgIHB1YmxpYyB2aWV3KCk6IElfTWF6ZU9ialZpZXd8dW5kZWZpbmVkIHtyZXR1cm4gdGhpcy5teV92aWV3fVxyXG4gICAgcHVibGljIHNldFZpZXcodmlldzogSV9NYXplT2JqVmlld3x1bmRlZmluZWQpOiB2b2lkIHt0aGlzLm15X3ZpZXcgPSB2aWV3fVxyXG5cclxuICAgIHB1YmxpYyBjYW5UaHJvdWdoKCk6IGJvb2xlYW4ge3JldHVybiB0aGlzLmNhbl90aHJ9XHJcbiAgICBwdWJsaWMgc2V0VGhyb3VnaCh0aHI6IGJvb2xlYW4pOiBib29sZWFuIHtyZXR1cm4gdGhpcy5jYW5fdGhyID0gdGhyfVxyXG5cclxuICAgIHB1YmxpYyBnZXRfcGQoKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX1BvaW50RGlyKHRoaXMucG9zKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcGQocDogQ19Qb2ludERpcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucG9zID0gcDtcclxuICAgIH1cclxuICAgIHB1YmxpYyB3aXRoaW4ocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvcy53aXRoaW4ocCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX01hemVPYmoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVuaXFfaWQ6IHRoaXMudW5pcV9pZCxcclxuICAgICAgICAgICAgY2xuYW1lOiAgdGhpcy5jbG5hbWUsXHJcbiAgICAgICAgICAgIHBvczogICAgIHRoaXMucG9zLmVuY29kZSgpLFxyXG4gICAgICAgICAgICB2aWV3OiAgICB0aGlzLm15X3ZpZXc/LmVuY29kZSgpID8/IHt9LFxyXG4gICAgICAgICAgICBjYW5fdGhyOiB0aGlzLmNhbl90aHIgPyAnMScgOiAnMCcsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWNvZGUoajogSlNPTl9NYXplT2JqfHVuZGVmaW5lZCk6IElfTWF6ZU9iaiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19pbml0KGopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBkZWNvZGUoajogSlNPTl9NYXplT2JqfHVuZGVmaW5lZCk6IElfTWF6ZU9iaiB7XHJcbiAgICAgICAgcmV0dXJuIENfTWF6ZU9iai5uZXdPYmooaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgSV9BYnN0cmFjdCwgSlNPTl9BbnkgfSBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcbmltcG9ydCB7IFRfV2FsbCB9ICAgICAgICAgICAgICAgZnJvbSBcIi4uL2RfbWRsL0NfV2FsbFwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSV9NYXplT2JqVmlldyBleHRlbmRzIElfQWJzdHJhY3Qge1xyXG4gICAgLy8g6KGo56S66Zai5L+CKDJEcHJlKS4vQ19XYWxsXHJcbiAgICBsYXllcjogICAoKT0+bnVtYmVyO1xyXG4gICAgbGV0dGVyOiAgKCk9PnN0cmluZ3xudWxsOyAvLyBudWxsOiDopovjgYjjgarjgYTjgIHkvZXjgoLjgarjgYRcclxuXHJcbiAgICAvLyDooajnpLrplqLkv4IoM0QpXHJcbiAgICBjYW5TaG93OiAoKT0+Ym9vbGVhbjtcclxuICAgIGRyb3czRDogIChmcm90OiBUX1dhbGwsIGJhY2s6IFRfV2FsbCk9PnZvaWQ7XHJcblxyXG4gICAgcGFkX3Q6ICAgKCk9Pm51bWJlcjsgLy/kuIrlgbTjga7nqbrjgY0o5Ymy5ZCIOiAw44GL44KJMSkgXHJcbiAgICBwYWRfZDogICAoKT0+bnVtYmVyOyAvL+W6iuWBtOOBruepuuOBjSjlibLlkIg6IDDjgYvjgokxKSBcclxuICAgIHBhZF9zOiAgICgpPT5udW1iZXI7IC8v5qiq5YG044Gu56m644GNKOWJsuWQiDogMOOBi+OCiTEpIFxyXG4gICAgY29sX2Y6ICAgKCk9PnN0cmluZ3xudWxsOyAvL+ato+mdouOBruiJsihDU1Pjgqvjg6njg7wp44CCbnVsbOOBr+mAj+aYjlxyXG4gICAgY29sX2I6ICAgKCk9PnN0cmluZ3xudWxsOyAvL+iDjOmdouOBruiJsihDU1Pjgqvjg6njg7wp44CCbnVsbOOBr+mAj+aYjlxyXG4gICAgY29sX3M6ICAgKCk9PnN0cmluZ3xudWxsOyAvL+aoquWBtOOBruiJsihDU1Pjgqvjg6njg7wp44CCbnVsbOOBr+mAj+aYjlxyXG4gICAgY29sX3Q6ICAgKCk9PnN0cmluZ3xudWxsOyAvL+S4iumDqOOBruiJsihDU1Pjgqvjg6njg7wp44CCbnVsbOOBr+mAj+aYjuOAguOChOOChOOBk+OBl+OBhOOBjOOAgeeJqeS9k+OBruW6lemdouOBq+W9k+OBn+OCi1xyXG4gICAgY29sX2Q6ICAgKCk9PnN0cmluZ3xudWxsOyAvL+S4i+mDqOOBruiJsihDU1Pjgqvjg6njg7wp44CCbnVsbOOBr+mAj+aYjuOAguOChOOChOOBk+OBl+OBhOOBjOOAgeeJqeS9k+OBruWkqeS6leOBq+W9k+OBn+OCi1xyXG4gICAgY29sX2w6ICAgKCk9PnN0cmluZ3xudWxsOyAvL+ODqeOCpOODs+OBruiJsihDU1Pjgqvjg6njg7wpXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9NYXplT2JqVmlldyBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGNsbmFtZT86IHN0cmluZyxcclxuICAgIGxheWVyPzogIG51bWJlcixcclxuICAgIGxldHRlcj86IHN0cmluZyxcclxuICAgIHNob3czRD86IHN0cmluZyxcclxuICAgIHBhZF90PzogIG51bWJlciwgLy8g44Kq44OW44K444Kn44Kv44OI5LiK6YOo44Gu6ZqZ6ZaT44Gu5Ymy5ZCIKDAuMCDjgYvjgokgMS4wKSBcclxuICAgIHBhZF9kPzogIG51bWJlciwgLy8g44Kq44OW44K444Kn44Kv44OI5LiL6YOo44Gu6ZqZ6ZaT44Gu5Ymy5ZCIKDAuMCDjgYvjgokgMS4wKSBcclxuICAgIHBhZF9zPzogIG51bWJlciwgLy8g44Kq44OW44K444Kn44Kv44OI5ZGo5Zuy44Gu6ZqZ6ZaT44Gu5Ymy5ZCIKDAuMCDjgYvjgokgMS4wKSBcclxuICAgIGNvbF9mPzogIHN0cmluZ3xudWxsLCAvLyDjgqrjg5bjgrjjgqfjgq/jg4jmraPpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBjb2xfYj86ICBzdHJpbmd8bnVsbCwgLy8g44Kq44OW44K444Kn44Kv44OI5q2j6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgY29sX3M/OiAgc3RyaW5nfG51bGwsIC8vIOOCquODluOCuOOCp+OCr+ODiOWBtOmdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIGNvbF90PzogIHN0cmluZ3xudWxsLCAvLyDjgqrjg5bjgrjjgqfjgq/jg4jkuIrpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBjb2xfZD86ICBzdHJpbmd8bnVsbCwgLy8g44Kq44OW44K444Kn44Kv44OI5bqV6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgY29sX2w/OiAgc3RyaW5nfG51bGwsIC8vIOOCquODluOCuOOCp+OCr+ODiOOBrue3muOBrkNTU+OCq+ODqeODvCBcclxufVxyXG5cclxudHlwZSBUX3h5ICAgPSB7eDogbnVtYmVyLCB5OiBudW1iZXJ9XHJcbnR5cGUgVF9SZWN0ID0ge3RsOiBUX3h5LCB0cjogVF94eSwgZGw6IFRfeHksIGRyOiBUX3h5fTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDX01hemVPYmpWaWV3IGltcGxlbWVudHMgSV9NYXplT2JqVmlldyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbjNEPzogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRfY29udGV4dDNEKCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRHx1bmRlZmluZWQge3JldHVybiB0aGlzPy5jb24zRH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0X2NvbnRleHQzRChjb24zRD86IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge3RoaXMuY29uM0QgPSBjb24zRH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5ld09iaihqPzogSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQpOiBJX01hemVPYmpWaWV3IHtcclxuICAgICAgICBqID8/PSB7fTtcclxuICAgICAgICBqLmNsbmFtZSA/Pz0gQ19NYXplT2JqVmlldy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgICAgIHN3aXRjaCAoai5jbG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBDX01hemVPYmpWaWV3LmNvbnN0cnVjdG9yLm5hbWU6ICAgICByZXR1cm4gbmV3IENfTWF6ZU9ialZpZXcoaik7XHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm4gbmV3IENfTWF6ZU9ialZpZXcoaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbmV3T2JqKGo/OiBKU09OX01hemVPYmpWaWV3fHVuZGVmaW5lZCk6IElfTWF6ZU9ialZpZXcge1xyXG4gICAgICAgIHJldHVybiBDX01hemVPYmpWaWV3Lm5ld09iaihqKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjbG5hbWU6ICAgIHN0cmluZyA9ICdDX01hemVPYmpWaWV3JztcclxuXHJcbiAgICBwcml2YXRlIG15X2xheWVyOiAgbnVtYmVyOyAgICAgIC8vIDJE6KGo56S644Gu5pmC44GuQ1NT44Os44Kk44Ok44O844CC5ZCM5L2N572u44Gu44Kq44OW44K444Kn44Gu5YaF44GT44Gu5YCk44GM5aSn44GN44GE54mp44GM6KGo56S644GV44KM44KLXHJcbiAgICBwcml2YXRlIG15X2xldHRlcjogc3RyaW5nfG51bGw7IC8vIDJE6KGo56S644Gu5pmC44Gu5YWo6KeS5paH5a2X44CCbnVsbOOBquOCiemAj+aYjlxyXG5cclxuICAgIHByaXZhdGUgbXlfc2hvdzNEOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBteV9wYWRfdDogIG51bWJlcjsgLy8g44Kq44OW44K444Kn44Kv44OI5LiK6YOo44Gu6ZqZ6ZaT44Gu5Ymy5ZCIKDAuMCDjgYvjgokgMS4wKSBcclxuICAgIHByaXZhdGUgbXlfcGFkX2Q6ICBudW1iZXI7IC8vIOOCquODluOCuOOCp+OCr+ODiOS4i+mDqOOBrumamemWk+OBruWJsuWQiCgwLjAg44GL44KJIDEuMCkgXHJcbiAgICBwcml2YXRlIG15X3BhZF9zOiAgbnVtYmVyOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jlkajlm7Ljga7pmpnplpPjga7libLlkIgoMC4wIOOBi+OCiSAxLjApIFxyXG5cclxuICAgIHByaXZhdGUgbXlfY29sX2Y6ICBzdHJpbmd8bnVsbDsgLy8g44Kq44OW44K444Kn44Kv44OI5q2j6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgcHJpdmF0ZSBteV9jb2xfYjogIHN0cmluZ3xudWxsOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jmraPpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBwcml2YXRlIG15X2NvbF9zOiAgc3RyaW5nfG51bGw7IC8vIOOCquODluOCuOOCp+OCr+ODiOWBtOmdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIHByaXZhdGUgbXlfY29sX3Q6ICBzdHJpbmd8bnVsbDsgLy8g44Kq44OW44K444Kn44Kv44OI5LiK6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgcHJpdmF0ZSBteV9jb2xfZDogIHN0cmluZ3xudWxsOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jlupXpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBwcml2YXRlIG15X2NvbF9sOiAgc3RyaW5nfG51bGw7IC8vIOOCquODluOCuOOCp+OCr+ODiOOBrue3muOBrkNTU+OCq+ODqeODvCBcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5jbG5hbWUgICAgID0gIHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5teV9sYXllciAgID0gIC0yO1xyXG4gICAgICAgIHRoaXMubXlfbGV0dGVyICA9ICBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLm15X3BhZF90ICAgPSAgMC4wO1xyXG4gICAgICAgIHRoaXMubXlfcGFkX2QgICA9ICAwLjA7XHJcbiAgICAgICAgdGhpcy5teV9wYWRfcyAgID0gIDAuMDtcclxuXHJcbiAgICAgICAgdGhpcy5teV9zaG93M0QgID0gIHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMubXlfY29sX2YgICA9ICcjZjhmOGY4JzsgXHJcbiAgICAgICAgdGhpcy5teV9jb2xfYiAgID0gJyNhYWFhYWEnOyBcclxuICAgICAgICB0aGlzLm15X2NvbF9zICAgPSAnI2RkZGRkZCc7IFxyXG4gICAgICAgIHRoaXMubXlfY29sX3QgICA9ICcjZmZmZmZmJzsgXHJcbiAgICAgICAgdGhpcy5teV9jb2xfZCAgID0gJyNjY2NjY2MnOyBcclxuICAgICAgICB0aGlzLm15X2NvbF9sICAgPSAnIzMzMzMzMyc7IFxyXG5cclxuICAgICAgICBpZiAoaiAhPT0gdW5kZWZpbmVkKSB0aGlzLl9faW5pdChqKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX19pbml0KGo6IEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkKTogSV9NYXplT2JqVmlldyB7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChqLmNsbmFtZSAgIT09IHVuZGVmaW5lZCkgdGhpcy5jbG5hbWUgICAgPSBqLmNsbmFtZTtcclxuICAgICAgICBpZiAoai5sYXllciAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfbGF5ZXIgID0gai5sYXllcjtcclxuICAgICAgICBpZiAoai5sZXR0ZXIgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfbGV0dGVyID0gai5sZXR0ZXIgIT09ICcnICA/IGoubGV0dGVyIDogbnVsbDsgXHJcbiAgICAgICAgaWYgKGoucGFkX3QgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X3BhZF90ICA9IGoucGFkX3Q7IFxyXG4gICAgICAgIGlmIChqLnBhZF9kICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9wYWRfZCAgPSBqLnBhZF9kOyBcclxuICAgICAgICBpZiAoai5wYWRfcyAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfcGFkX3MgID0gai5wYWRfczsgXHJcbiAgICAgICAgaWYgKGouc2hvdzNEICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X3Nob3czRCA9IGouc2hvdzNEICE9PSAnMCcgPyB0cnVlICAgICA6IGZhbHNlOyBcclxuICAgICAgICBpZiAoai5jb2xfZiAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfY29sX2YgID0gai5jb2xfZiAgIT09ICcnICA/IGouY29sX2YgIDogbnVsbDsgXHJcbiAgICAgICAgaWYgKGouY29sX2IgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2NvbF9iICA9IGouY29sX2IgICE9PSAnJyAgPyBqLmNvbF9iICA6IG51bGw7IFxyXG4gICAgICAgIGlmIChqLmNvbF9zICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9jb2xfcyAgPSBqLmNvbF9zICAhPT0gJycgID8gai5jb2xfcyAgOiBudWxsOyBcclxuICAgICAgICBpZiAoai5jb2xfdCAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfY29sX3QgID0gai5jb2xfdCAgIT09ICcnICA/IGouY29sX3QgIDogbnVsbDsgXHJcbiAgICAgICAgaWYgKGouY29sX2QgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2NvbF9kICA9IGouY29sX2QgICE9PSAnJyAgPyBqLmNvbF9kICA6IG51bGw7IFxyXG4gICAgICAgIGlmIChqLmNvbF9sICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9jb2xfbCAgPSBqLmNvbF9sICAhPT0gJycgID8gai5jb2xfbCAgOiBudWxsOyBcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxheWVyKCk6IG51bWJlciB7cmV0dXJuIHRoaXMubXlfbGF5ZXI7fVxyXG4gICAgcHVibGljIHNldF9sYXllcihsYXllcjogbnVtYmVyKSB7dGhpcy5teV9sYXllciA9IGxheWVyfVxyXG5cclxuICAgIHB1YmxpYyBsZXR0ZXIoKTogIHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9sZXR0ZXJ9XHJcbiAgICBwdWJsaWMgc2V0X2xldHRlcihsZXR0ZXI6IHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2xldHRlciA9IGxldHRlcn1cclxuXHJcbiAgICBwdWJsaWMgY2FuU2hvdygpOiBib29sZWFuIHtyZXR1cm4gdGhpcy5teV9zaG93M0R9O1xyXG4gICAgcHVibGljIHNldFNob3coY2FuX3Nob3c6IGJvb2xlYW4pOiBib29sZWFuIHtyZXR1cm4gdGhpcy5teV9zaG93M0QgPSBjYW5fc2hvd307XHJcblxyXG4gICAgcHVibGljIHBhZF90KCk6ICBudW1iZXIge3JldHVybiB0aGlzLm15X3BhZF90fVxyXG4gICAgcHVibGljIHBhZF9kKCk6ICBudW1iZXIge3JldHVybiB0aGlzLm15X3BhZF9kfVxyXG4gICAgcHVibGljIHBhZF9zKCk6ICBudW1iZXIge3JldHVybiB0aGlzLm15X3BhZF9zfVxyXG4gICAgcHVibGljIHNldF9wYWRfdChwYWRfdDogbnVtYmVyKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5teV9wYWRfdCA9IHRoaXMubXlfcGFkX2QgKyBwYWRfdCA8IDEuMCA/IHBhZF90IDogMC45OSAtIHRoaXMubXlfcGFkX2R9XHJcbiAgICBwdWJsaWMgc2V0X3BhZF9kKHBhZF9kOiBudW1iZXIpOiBudW1iZXIge3JldHVybiB0aGlzLm15X3BhZF9kID0gdGhpcy5teV9wYWRfdCArIHBhZF9kIDwgMS4wID8gcGFkX2QgOiAwLjk5IC0gdGhpcy5teV9wYWRfdH1cclxuICAgIHB1YmxpYyBzZXRfcGFkX3MocGFkX3M6IG51bWJlcik6IG51bWJlciB7cmV0dXJuIHRoaXMubXlfcGFkX3MgPSBwYWRfc31cclxuXHJcbiAgICBwdWJsaWMgY29sX2YoKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9mfSBcclxuICAgIHB1YmxpYyBjb2xfYigpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX2J9IFxyXG4gICAgcHVibGljIGNvbF9zKCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfc30gXHJcbiAgICBwdWJsaWMgY29sX3QoKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF90fSBcclxuICAgIHB1YmxpYyBjb2xfZCgpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX2R9IFxyXG4gICAgcHVibGljIGNvbF9sKCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfbH0gXHJcbiAgICBwdWJsaWMgc2V0X2NvbF9mKGNvbF9mOiBzdHJpbmd8bnVsbCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfZiA9IGNvbF9mfSBcclxuICAgIHB1YmxpYyBzZXRfY29sX2IoY29sX2I6IHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9iID0gY29sX2J9IFxyXG4gICAgcHVibGljIHNldF9jb2xfcyhjb2xfczogc3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX3MgPSBjb2xfc30gXHJcbiAgICBwdWJsaWMgc2V0X2NvbF90KGNvbF90OiBzdHJpbmd8bnVsbCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfdCA9IGNvbF90fSBcclxuICAgIHB1YmxpYyBzZXRfY29sX2QoY29sX2Q6IHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9kID0gY29sX2R9IFxyXG4gICAgcHVibGljIHNldF9jb2xfbChjb2xfbDogc3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX2wgPSBjb2xfbH0gXHJcblxyXG5cclxuICAgIHB1YmxpYyBkcm93M0QoZnJvdDogVF9XYWxsLCBiYWNrOiBUX1dhbGwpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRyb3dfb2JqX2JhY2sgICAgICAoZnJvdCwgYmFjayk7XHJcbiAgICAgICAgdGhpcy5kcm93X29ial9kb3duICAgICAgKGZyb3QsIGJhY2spO1xyXG4gICAgICAgIHRoaXMuZHJvd19vYmpfdG9wICAgICAgIChmcm90LCBiYWNrKTtcclxuICAgICAgICB0aGlzLmRyb3dfb2JqX3JpZ2h0X3NpZGUoZnJvdCwgYmFjayk7XHJcbiAgICAgICAgdGhpcy5kcm93X29ial9sZWZ0X3NpZGUgKGZyb3QsIGJhY2spO1xyXG4gICAgICAgIHRoaXMuZHJvd19vYmpfZnJvbnQgICAgIChmcm90LCBiYWNrKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZHJvd19vYmpfZG93bihcclxuICAgICAgICBmcm90OiAgVF9XYWxsLCBcclxuICAgICAgICBiYWNrOiAgVF9XYWxsLCBcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5TaG93KCkgfHwgdGhpcy5jb2xfdCgpID09PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMucGFkX3MoKSA8PSAwLjAgJiYgdGhpcy5wYWRfdCgpID49IDEuMCkge1xyXG4gICAgICAgICAgICBkcm93X2NlbGxfZmxvb3IoZnJvdCwgYmFjaywgdGhpcy5jb2xfdCgpID8/ICcjNjY2NmZmJywgdGhpcy5jb2xfbCgpID8/ICcjOTk5OWZmJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjb25zdCBvID0gX19jYWxjX3BhZGRpbmdfb2JqKHRoaXMsIGZyb3QsIGJhY2spO1xyXG4gICAgICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICAgICAgdGw6IG8uZmRsLFxyXG4gICAgICAgICAgICB0cjogby5mZHIsXHJcbiAgICAgICAgICAgIGRyOiBvLmJkcixcclxuICAgICAgICAgICAgZGw6IG8uYmRsLFxyXG4gICAgICAgIH1cclxuICAgICAgICBkcm93X2NlbGwocmVjdCwgdGhpcy5jb2xfdCgpLCB0aGlzLmNvbF9sKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJvd19vYmpfdG9wKFxyXG4gICAgICAgIGZyb3Q6ICBUX1dhbGwsIFxyXG4gICAgICAgIGJhY2s6ICBUX1dhbGwsIFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblNob3coKSB8fCB0aGlzLmNvbF9kKCkgPT09IG51bGwpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5wYWRfcygpIDw9IDAuMCAmJiB0aGlzLnBhZF9kKCkgPj0gMS4wKSB7XHJcbiAgICAgICAgICAgIGRyb3dfY2VsbF9jZWlsaW5nKGZyb3QsIGJhY2ssIHRoaXMuY29sX2QoKSA/PyAnI2FhYWFhYScsIHRoaXMuY29sX2woKSA/PyAnIzk5OTlmZicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbyA9IF9fY2FsY19wYWRkaW5nX29iaih0aGlzLCBmcm90LCBiYWNrKTtcclxuICAgICAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgICAgIHRsOiBvLmZ0bCxcclxuICAgICAgICAgICAgdHI6IG8uZnRyLFxyXG4gICAgICAgICAgICBkcjogby5idHIsXHJcbiAgICAgICAgICAgIGRsOiBvLmJ0bCxcclxuICAgICAgICB9XHJcbiAgICAgICAgZHJvd19jZWxsKHJlY3QsIHRoaXMuY29sX2QoKSwgdGhpcy5jb2xfbCgpKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZHJvd19vYmpfZnJvbnQoXHJcbiAgICAgICAgZnJvdDogIFRfV2FsbCwgXHJcbiAgICAgICAgYmFjazogIFRfV2FsbCwgXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuU2hvdygpIHx8IHRoaXMuY29sX2YoKSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbyA9IF9fY2FsY19wYWRkaW5nX29iaih0aGlzLCBmcm90LCBiYWNrKTtcclxuICAgICAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgICAgIHRsOiBvLmZ0bCwgXHJcbiAgICAgICAgICAgIHRyOiBvLmZ0ciwgXHJcbiAgICAgICAgICAgIGRyOiBvLmZkciwgXHJcbiAgICAgICAgICAgIGRsOiBvLmZkbCwgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZHJvd19jZWxsKHJlY3QsIHRoaXMuY29sX2YoKSwgdGhpcy5jb2xfbCgpKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZHJvd19vYmpfYmFjayhcclxuICAgICAgICBmcm90OiAgVF9XYWxsLCBcclxuICAgICAgICBiYWNrOiAgVF9XYWxsLCBcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5TaG93KCkgfHwgdGhpcy5jb2xfYigpID09PSBudWxsKSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBjb25zdCBvID0gX19jYWxjX3BhZGRpbmdfb2JqKHRoaXMsIGZyb3QsIGJhY2spO1xyXG4gICAgICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICAgICAgdGw6IG8uYnRsLCBcclxuICAgICAgICAgICAgdHI6IG8uYnRyLCBcclxuICAgICAgICAgICAgZHI6IG8uYmRyLCBcclxuICAgICAgICAgICAgZGw6IG8uYmRsLCBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBkcm93X2NlbGwocmVjdCwgdGhpcy5jb2xfYigpLCB0aGlzLmNvbF9sKCkpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkcm93X29ial9sZWZ0X3NpZGUoXHJcbiAgICAgICAgZnJvdDogIFRfV2FsbCwgXHJcbiAgICAgICAgYmFjazogIFRfV2FsbCwgXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuU2hvdygpIHx8IHRoaXMuY29sX3MoKSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbyA9IF9fY2FsY19wYWRkaW5nX29iaih0aGlzLCBmcm90LCBiYWNrKTtcclxuICAgICAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgICAgIHRsOiBvLmJ0bCxcclxuICAgICAgICAgICAgdHI6IG8uZnRsLFxyXG4gICAgICAgICAgICBkcjogby5mZGwsXHJcbiAgICAgICAgICAgIGRsOiBvLmJkbCxcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBkcm93X2NlbGwocmVjdCwgdGhpcy5jb2xfcygpLCB0aGlzLmNvbF9sKCkpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkcm93X29ial9yaWdodF9zaWRlKFxyXG4gICAgICAgIGZyb3Q6ICBUX1dhbGwsIFxyXG4gICAgICAgIGJhY2s6ICBUX1dhbGwsIFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblNob3coKSB8fCB0aGlzLmNvbF9zKCkgPT09IG51bGwpIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IG8gPSBfX2NhbGNfcGFkZGluZ19vYmoodGhpcywgZnJvdCwgYmFjayk7XHJcbiAgICAgICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgICAgICB0bDogby5mdHIsXHJcbiAgICAgICAgICAgIHRyOiBvLmJ0cixcclxuICAgICAgICAgICAgZHI6IG8uYmRyLFxyXG4gICAgICAgICAgICBkbDogby5mZHIsXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZHJvd19jZWxsKHJlY3QsIHRoaXMuY29sX3MoKSwgdGhpcy5jb2xfbCgpKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9NYXplT2JqVmlldyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY25hbWU6ICAgdGhpcy5jbG5hbWUsXHJcbiAgICAgICAgICAgIGxheWVyOiAgIHRoaXMubXlfbGF5ZXIsXHJcbiAgICAgICAgICAgIGxldHRlcjogIHRoaXMubXlfbGV0dGVyID8/ICcnLFxyXG4gICAgICAgICAgICBwYWRfdDogICB0aGlzLm15X3BhZF90LCBcclxuICAgICAgICAgICAgcGFkX2Q6ICAgdGhpcy5teV9wYWRfZCwgXHJcbiAgICAgICAgICAgIHBhZF9zOiAgIHRoaXMubXlfcGFkX3MsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICB0aGlzLmNhblNob3coKSA/ICcxJyA6ICcwJyxcclxuICAgICAgICAgICAgY29sX2Y6ICAgdGhpcy5teV9jb2xfZiA/PyAnJywgIFxyXG4gICAgICAgICAgICBjb2xfYjogICB0aGlzLm15X2NvbF9iID8/ICcnLCAgXHJcbiAgICAgICAgICAgIGNvbF9zOiAgIHRoaXMubXlfY29sX3MgPz8gJycsIFxyXG4gICAgICAgICAgICBjb2xfdDogICB0aGlzLm15X2NvbF90ID8/ICcnLCBcclxuICAgICAgICAgICAgY29sX2Q6ICAgdGhpcy5teV9jb2xfZCA/PyAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAgIHRoaXMubXlfY29sX2wgPz8gJycsIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoajogSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQpOiBJX01hemVPYmpWaWV3IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX2luaXQoaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZShqOiBKU09OX01hemVPYmpWaWV3fHVuZGVmaW5lZCk6IElfTWF6ZU9ialZpZXcge1xyXG4gICAgICAgIHJldHVybiBDX01hemVPYmpWaWV3Lm5ld09iaihqKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBfX2NhbGNfcGFkZGluZ19vYmooXHJcbiAgICBvYmo6ICAgSV9NYXplT2JqVmlldyxcclxuICAgIGZyb3Q6ICBUX1dhbGwsIFxyXG4gICAgYmFjazogIFRfV2FsbCwgXHJcbik6IHtcclxuICAgIC8vIOitmOWIpeWtkOOBruaEj+WRs1xyXG4gICAgLy8g5bem56uv77ya5YmN5b6M44Gu5Yy65Yil44CAZjrliY3pnaLjgIBiOuiDjOmdolxyXG4gICAgLy8g5Lit5aSu77ya5LiK5LiL44Gu5Yy65Yil44CAdDrkuIrovrrjgIBkOuS4i+i+ulxyXG4gICAgLy8g5Y+z56uv77ya5bem5Y+z44Gu5Yy65Yil44CAbDrlt6blgbTjgIByOuWPs+WBtFxyXG4gICAgZnRsOlRfeHksIGZ0cjpUX3h5LCBmZHI6VF94eSwgZmRsOlRfeHksIFxyXG4gICAgYnRsOlRfeHksIGJ0cjpUX3h5LCBiZHI6VF94eSwgYmRsOlRfeHksIFxyXG59IHtcclxuICAgIGNvbnN0IHJlY3RfZnJvdCA9IGZyb3Q7XHJcbiAgICBjb25zdCByZWN0X2JhY2sgPSBiYWNrO1xyXG5cclxuICAgIGNvbnN0IHJhdGlvX1ggICA9IG9iai5wYWRfcygpIC8gMi4wO1xyXG4gICAgY29uc3QgcmF0aW9fVCAgID0gb2JqLnBhZF90KCk7XHJcbiAgICBjb25zdCByYXRpb19EICAgPSBvYmoucGFkX2QoKTtcclxuXHJcbiAgICBjb25zdCBmcm90X3BhZF9YICA9IE1hdGguYWJzKHJlY3RfZnJvdC5tYXhfeCAtIHJlY3RfZnJvdC5taW5feCkgKiByYXRpb19YO1xyXG4gICAgY29uc3QgYmFja19wYWRfWCAgPSBNYXRoLmFicyhyZWN0X2JhY2subWF4X3ggLSByZWN0X2JhY2subWluX3gpICogcmF0aW9fWDtcclxuXHJcbiAgICBjb25zdCBmcm90X3BhZF9UICA9IE1hdGguYWJzKHJlY3RfZnJvdC5tYXhfeSAtIHJlY3RfZnJvdC5taW5feSkgKiByYXRpb19UO1xyXG4gICAgY29uc3QgYmFja19wYWRfVCAgPSBNYXRoLmFicyhyZWN0X2JhY2subWF4X3kgLSByZWN0X2JhY2subWluX3kpICogcmF0aW9fVDtcclxuXHJcbiAgICBjb25zdCBmcm90X3BhZF9EICA9IE1hdGguYWJzKHJlY3RfZnJvdC5tYXhfeSAtIHJlY3RfZnJvdC5taW5feSkgKiByYXRpb19EO1xyXG4gICAgY29uc3QgYmFja19wYWRfRCAgPSBNYXRoLmFicyhyZWN0X2JhY2subWF4X3kgLSByZWN0X2JhY2subWluX3kpICogcmF0aW9fRDtcclxuXHJcbiAgICAvLyDjg5Hjg4fjgqPjg7PjgrDoqK3lrprlvozjga5YWeW6p+aomeOCkuioiOeul+OBmeOCi+OBn+OCgeOBq1xyXG4gICAgLy8g5b+F6KaB44Gq57ea5YiG44Gu5L2N572u5rG644KB44KS44GZ44KLXHJcbiAgICBjb25zdCBmcm90X3RvcF9sZnQgPSB7eDogcmVjdF9mcm90Lm1pbl94ICsgZnJvdF9wYWRfWCwgeTogcmVjdF9mcm90Lm1pbl95ICsgZnJvdF9wYWRfVH1cclxuICAgIGNvbnN0IGZyb3RfdG9wX3JndCA9IHt4OiByZWN0X2Zyb3QubWF4X3ggLSBmcm90X3BhZF9YLCB5OiByZWN0X2Zyb3QubWluX3kgKyBmcm90X3BhZF9UfVxyXG4gICAgY29uc3QgZnJvdF9kd25fbGZ0ID0ge3g6IHJlY3RfZnJvdC5taW5feCArIGZyb3RfcGFkX1gsIHk6IHJlY3RfZnJvdC5tYXhfeSAtIGZyb3RfcGFkX0R9XHJcbiAgICBjb25zdCBmcm90X2R3bl9yZ3QgPSB7eDogcmVjdF9mcm90Lm1heF94IC0gZnJvdF9wYWRfWCwgeTogcmVjdF9mcm90Lm1heF95IC0gZnJvdF9wYWRfRH1cclxuXHJcbiAgICBjb25zdCBiYWNrX3RvcF9sZnQgPSB7eDogcmVjdF9iYWNrLm1pbl94ICsgYmFja19wYWRfWCwgeTogcmVjdF9iYWNrLm1pbl95ICsgYmFja19wYWRfVH1cclxuICAgIGNvbnN0IGJhY2tfdG9wX3JndCA9IHt4OiByZWN0X2JhY2subWF4X3ggLSBiYWNrX3BhZF9YLCB5OiByZWN0X2JhY2subWluX3kgKyBiYWNrX3BhZF9UfVxyXG4gICAgY29uc3QgYmFja19kd25fbGZ0ID0ge3g6IHJlY3RfYmFjay5taW5feCArIGJhY2tfcGFkX1gsIHk6IHJlY3RfYmFjay5tYXhfeSAtIGJhY2tfcGFkX0R9XHJcbiAgICBjb25zdCBiYWNrX2R3bl9yZ3QgPSB7eDogcmVjdF9iYWNrLm1heF94IC0gYmFja19wYWRfWCwgeTogcmVjdF9iYWNrLm1heF95IC0gYmFja19wYWRfRH1cclxuXHJcbiAgICBsZXQgZnRsID0gX19jYWxjX3BhZGRpbmdfeHkoZnJvdF90b3BfbGZ0LCBiYWNrX3RvcF9sZnQsIHJhdGlvX1gpO1xyXG4gICAgbGV0IGZ0ciA9IF9fY2FsY19wYWRkaW5nX3h5KGZyb3RfdG9wX3JndCwgYmFja190b3Bfcmd0LCByYXRpb19YKTtcclxuICAgIGxldCBmZGwgPSBfX2NhbGNfcGFkZGluZ194eShmcm90X2R3bl9sZnQsIGJhY2tfZHduX2xmdCwgcmF0aW9fWCk7XHJcbiAgICBsZXQgZmRyID0gX19jYWxjX3BhZGRpbmdfeHkoZnJvdF9kd25fcmd0LCBiYWNrX2R3bl9yZ3QsIHJhdGlvX1gpO1xyXG5cclxuICAgIGxldCBidGwgPSBfX2NhbGNfcGFkZGluZ194eShiYWNrX3RvcF9sZnQsIGZyb3RfdG9wX2xmdCwgcmF0aW9fWCk7XHJcbiAgICBsZXQgYnRyID0gX19jYWxjX3BhZGRpbmdfeHkoYmFja190b3Bfcmd0LCBmcm90X3RvcF9yZ3QsIHJhdGlvX1gpO1xyXG4gICAgbGV0IGJkbCA9IF9fY2FsY19wYWRkaW5nX3h5KGJhY2tfZHduX2xmdCwgZnJvdF9kd25fbGZ0LCByYXRpb19YKTtcclxuICAgIGxldCBiZHIgPSBfX2NhbGNfcGFkZGluZ194eShiYWNrX2R3bl9yZ3QsIGZyb3RfZHduX3JndCwgcmF0aW9fWCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmdGw6IGZ0bCwgZnRyOiBmdHIsXHJcbiAgICAgICAgZmRsOiBmZGwsIGZkcjogZmRyLFxyXG4gICAgICAgIGJ0bDogYnRsLCBidHI6IGJ0cixcclxuICAgICAgICBiZGw6IGJkbCwgYmRyOiBiZHIsXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gX19jYWxjX3BhZGRpbmdfeHkoZnJvdDogVF94eSwgYmFjazogVF94eSwgcmF0aW86IG51bWJlcik6IFRfeHkge1xyXG4gICAgICAgIC8vIOe3muWIhihBeCArIEIgPSB5KeOBruaWueeoi+W8j+OBruS/guaVsOOCkuaxguOCgeOCi1xyXG4gICAgICAgIGNvbnN0IEEgPSAoZnJvdC55IC0gYmFjay55KSAvIChmcm90LnggLSBiYWNrLngpO1xyXG4gICAgICAgIGNvbnN0IEIgPSAgZnJvdC55IC0gQSAqIGZyb3QueDtcclxuICAgIFxyXG4gICAgICAgIC8vIOODkeODh+OCo+ODs+OCsOiqv+aVtOW+jOOBrlhZ5bqn5qiZ44Gu6KiI566XXHJcbiAgICAgICAgY29uc3QgcF9mcm90X3ggPSBmcm90LnggKyAoYmFjay54IC0gZnJvdC54KSAqIHJhdGlvO1xyXG4gICAgICAgIGNvbnN0IHBfZnJvdF95ID0gQSAqIHBfZnJvdF94ICsgQjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHt4OiBwX2Zyb3RfeCwgeTogcF9mcm90X3l9O1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZHJvd19jZWxsX2Zsb29yKFxyXG4gICAgICAgIHJlY3RfZnJvdDogVF9XYWxsLCBcclxuICAgICAgICByZWN0X2JhY2s6IFRfV2FsbCwgXHJcbiAgICAgICAgZmlsbDogc3RyaW5nID0gJyM2NjY2ZmYnLCBcclxuICAgICAgICBsaW5lOiBzdHJpbmcgPSAnIzk5OTlmZidcclxuICAgICk6IHZvaWQge1xyXG5cclxuICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICB0bDoge3g6IHJlY3RfZnJvdC5taW5feCwgeTogcmVjdF9mcm90Lm1heF95fSxcclxuICAgICAgICB0cjoge3g6IHJlY3RfZnJvdC5tYXhfeCwgeTogcmVjdF9mcm90Lm1heF95fSxcclxuICAgICAgICBkcjoge3g6IHJlY3RfYmFjay5tYXhfeCwgeTogcmVjdF9iYWNrLm1heF95fSxcclxuICAgICAgICBkbDoge3g6IHJlY3RfYmFjay5taW5feCwgeTogcmVjdF9iYWNrLm1heF95fVxyXG4gICAgfVxyXG4gICAgZHJvd19jZWxsKHJlY3QsIGZpbGwsIGxpbmUpO1xyXG59XHJcbmZ1bmN0aW9uIGRyb3dfY2VsbF9jZWlsaW5nKFxyXG4gICAgICAgIHJlY3RfZnJvdDogVF9XYWxsLCBcclxuICAgICAgICByZWN0X2JhY2s6IFRfV2FsbCwgXHJcbiAgICAgICAgZmlsbDogc3RyaW5nID0gJyNhYWFhYWEnLCBcclxuICAgICAgICBsaW5lOiBzdHJpbmcgPSAnIzk5OTlmZidcclxuICAgICk6IHZvaWQge1xyXG5cclxuICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICB0bDoge3g6IHJlY3RfZnJvdC5taW5feCwgeTogcmVjdF9mcm90Lm1pbl95fSxcclxuICAgICAgICB0cjoge3g6IHJlY3RfZnJvdC5tYXhfeCwgeTogcmVjdF9mcm90Lm1pbl95fSxcclxuICAgICAgICBkcjoge3g6IHJlY3RfYmFjay5tYXhfeCwgeTogcmVjdF9iYWNrLm1pbl95fSxcclxuICAgICAgICBkbDoge3g6IHJlY3RfYmFjay5taW5feCwgeTogcmVjdF9iYWNrLm1pbl95fVxyXG4gICAgfVxyXG4gICAgZHJvd19jZWxsKHJlY3QsIGZpbGwsIGxpbmUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcm93X2NlbGwocjogVF9SZWN0LCBmaWxsOiBzdHJpbmd8bnVsbCwgbGluZTogc3RyaW5nfG51bGwpOiB2b2lkIHtcclxuICAgIGlmIChDX01hemVPYmpWaWV3LmNvbjNEID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGNvbnN0IGNvbiA9IENfTWF6ZU9ialZpZXcuY29uM0Q7XHJcblxyXG4gICAgY29uLmJlZ2luUGF0aCgpO1xyXG4gICAgY29uLm1vdmVUbyhyLnRsLngsIHIudGwueSk7XHJcbiAgICBjb24ubGluZVRvKHIudHIueCwgci50ci55KTtcclxuICAgIGNvbi5saW5lVG8oci5kci54LCByLmRyLnkpO1xyXG4gICAgY29uLmxpbmVUbyhyLmRsLngsIHIuZGwueSk7XHJcbiAgICBjb24uY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgaWYgKGZpbGwgIT0gbnVsbCkge1xyXG4gICAgICAgIGNvbi5maWxsU3R5bGUgICA9IGZpbGw7XHJcbiAgICAgICAgY29uLmZpbGwoKTtcclxuICAgIH1cclxuICAgIGlmIChsaW5lICE9PSBudWxsKSB7XHJcbiAgICAgICAgY29uLnN0cm9rZVN0eWxlID0gbGluZTtcclxuICAgICAgICBjb24ubGluZVdpZHRoICAgPSAxO1xyXG4gICAgICAgIGNvbi5zdHJva2UoKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfTG9jYXRpb24sIEpTT05fTG9jYXRpb24gfSBmcm9tIFwiLi9DX0xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IElfSlNPTl9VbmlxIH0gICAgICAgICAgICAgICBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcbmltcG9ydCB7IF9nZXRfdXVpZCB9ICAgICAgICAgICAgICAgICBmcm9tIFwiLi4vZF91dGwvRl9SYW5kXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fTW92YWJsZVBvaW50IGV4dGVuZHMgSlNPTl9Mb2NhdGlvbiB7XHJcbiAgICB1bmlxX2lkPzogIHN0cmluZyxcclxuICAgIGN1cl91cmw/OiAgc3RyaW5nLFxyXG4gICAgdGVhbV91aWQ/OiBzdHJpbmcsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfbXZwdF9pbmZvKGE6IEpTT05fTW92YWJsZVBvaW50fHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoXCJNdlB0IEluZm86XCIgXHJcbiAgICAgICAgKyBcIlxcbnVuaXFfaWQ6ICBcIiAgKyAoYS51bmlxX2lkICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3VybDogIFwiICArIChhLmN1cl91cmwgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG50ZWFtX3VpZDogXCIgICsgKGEudGVhbV91aWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxja2Q6IFwiICAgICAgKyAoYS5raW5kICAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubGNubTogXCIgICAgICArIChhLm5hbWUgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sY2lkOiBcIiAgICAgICsgKGEubG9jX3VpZCAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl94OiBcIiAgICAgKyAoYS5sb2NfcG9zPy54ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3k6IFwiICAgICArIChhLmxvY19wb3M/LnkgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfejogXCIgICAgICsgKGEubG9jX3Bvcz8ueiA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl9kOiBcIiAgICAgKyAoYS5sb2NfcG9zPy5kID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ19Nb3ZhYmxlUG9pbnQgZXh0ZW5kcyBDX0xvY2F0aW9uIGltcGxlbWVudHMgSV9KU09OX1VuaXEge1xyXG4gICAgcHJvdGVjdGVkIHVuaXFfaWQ6ICBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgY3VyX3VybDogIHN0cmluZztcclxuICAgIHByb3RlY3RlZCB0ZWFtX3VpZDogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihqc29uPzogSlNPTl9Nb3ZhYmxlUG9pbnQpIHtcclxuICAgICAgICBzdXBlcihqc29uKTtcclxuICAgICAgICB0aGlzLnVuaXFfaWQgID0gJ012UG9pbnQjJyArIF9nZXRfdXVpZCgpO1xyXG4gICAgICAgIHRoaXMuY3VyX3VybCAgPSAnJztcclxuICAgICAgICB0aGlzLnRlYW1fdWlkID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBpZiAoanNvbiAhPT0gdW5kZWZpbmVkICYmIGpzb24gIT09IG51bGwpIHRoaXMuZGVjb2RlKGpzb24pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHVpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy51bmlxX2lkfVxyXG4gICAgcHVibGljIHVybCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5jdXJfdXJsfVxyXG4gICAgcHVibGljIHRpZCgpOiBzdHJpbmd8dW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudGVhbV91aWR9XHJcblxyXG4gICAgcHVibGljIG5ld191aWQoKTogdm9pZCB7dGhpcy51bmlxX2lkID0gJ012UG9pbnQjJyArIF9nZXRfdXVpZCgpO31cclxuICAgIHB1YmxpYyBzZXRfdXJsKHVybDogc3RyaW5nKTogdm9pZCB7IHRoaXMuY3VyX3VybCAgPSB1cmw7fVxyXG4gICAgcHVibGljIHNldF90aWQodGlkOiBzdHJpbmcpOiB2b2lkIHsgdGhpcy50ZWFtX3VpZCA9IHRpZDt9XHJcblxyXG4gICAgcHVibGljIGNsb25lKCk6IENfTW92YWJsZVBvaW50IHtcclxuICAgICAgICBjb25zdCBtdnB0ID0gbmV3IENfTW92YWJsZVBvaW50KHRoaXMuZW5jb2RlKCkpO1xyXG4gICAgICAgIG12cHQubmV3X3VpZCgpO1xyXG4gICAgICAgIHJldHVybiBtdnB0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmcm9tSlNPTih0eHQ6IHN0cmluZyk6IENfTW92YWJsZVBvaW50IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqID0gSlNPTi5wYXJzZSh0eHQpIGFzIEpTT05fTW92YWJsZVBvaW50O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGUoaik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdG9KU09OKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuZW5jb2RlKCksIG51bGwsIFwiXFx0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9vYmpfdG9fc3RyaW5nKG9hOiBDX01vdmFibGVQb2ludCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9hLmVuY29kZSgpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9vYmpBcnJheV90b19zdHJpbmcob2FhOiB7W3VpZDogc3RyaW5nXTogQ19Nb3ZhYmxlUG9pbnR9KTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBvYSA9IFtdIGFzIEpTT05fTW92YWJsZVBvaW50W107XHJcbiAgICAgICAgZm9yIChjb25zdCBpaSBpbiBvYWEpIG9hLnB1c2gob2FhW2lpXS5lbmNvZGUoKSk7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9hKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdfdG9fb2JqKHR4dDogc3RyaW5nKTogQ19Nb3ZhYmxlUG9pbnQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGogICA9IEpTT04ucGFyc2UodHh0KSBhcyBKU09OX01vdmFibGVQb2ludFtdO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENfTW92YWJsZVBvaW50KCkuZGVjb2RlKGopO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENfTW92YWJsZVBvaW50KCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdfdG9fb2JqQXJyYXkodHh0OiBzdHJpbmcpOiB7W3VpZDogc3RyaW5nXTogQ19Nb3ZhYmxlUG9pbnR9IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqICAgPSBKU09OLnBhcnNlKHR4dCkgYXMgSlNPTl9Nb3ZhYmxlUG9pbnRbXTtcclxuICAgICAgICAgICAgY29uc3QgbXBhID0ge30gYXMge1tpZDogc3RyaW5nXTogQ19Nb3ZhYmxlUG9pbnR9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGpqIG9mIGopIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFhYSA9IG5ldyBDX01vdmFibGVQb2ludCgpLmRlY29kZShqaik7XHJcbiAgICAgICAgICAgICAgICBtcGFbYWFhLnVpZCgpXSA9IGFhYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbXBhO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTW92YWJsZVBvaW50IHtcclxuICAgICAgICBjb25zdCBqID0gc3VwZXIuZW5jb2RlKCkgYXMgSlNPTl9Nb3ZhYmxlUG9pbnQ7XHJcbiAgICAgICAgai51bmlxX2lkICA9IHRoaXMudW5pcV9pZDtcclxuICAgICAgICBqLmN1cl91cmwgID0gdGhpcy5jdXJfdXJsO1xyXG4gICAgICAgIGoudGVhbV91aWQgPSB0aGlzLnRlYW1fdWlkID8/ICcnO1xyXG4gICAgICAgIHJldHVybiBqO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShqPzogSlNPTl9Nb3ZhYmxlUG9pbnQpOiBDX01vdmFibGVQb2ludCB7XHJcbiAgICAgICAgc3VwZXIuZGVjb2RlKGopO1xyXG4gICAgICAgIGlmIChqID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChqLnVuaXFfaWQgICE9PSB1bmRlZmluZWQpIHRoaXMudW5pcV9pZCAgPSBqLnVuaXFfaWQ7XHJcbiAgICAgICAgaWYgKGouY3VyX3VybCAgIT09IHVuZGVmaW5lZCkgdGhpcy5jdXJfdXJsICA9IGouY3VyX3VybDtcclxuICAgICAgICBpZiAoai50ZWFtX3VpZCAhPT0gdW5kZWZpbmVkKSB0aGlzLnRlYW1fdWlkID0gai50ZWFtX3VpZDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudGVhbV91aWQgPT09ICcnKSB0aGlzLnRlYW1fdWlkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWxlcnQoKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJNdlB0IEluZm86XCIgXHJcbiAgICAgICAgICAgICsgXCJcXG51bmlxX2lkOiAgXCIgICsgKHRoaXMudW5pcV9pZCAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfdXJsOiAgXCIgICsgKHRoaXMuY3VyX3VybCAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG50ZWFtX3VpZDogXCIgICsgKHRoaXMudGVhbV91aWQgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sY2tkOiBcIiAgICAgICsgKHRoaXMubG9jX2tpbmQgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sY25tOiBcIiAgICAgICsgKHRoaXMubG9jX25hbWUgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sY2lkOiBcIiAgICAgICsgKHRoaXMubG9jX3VpZCAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfeDogXCIgICAgICsgKHRoaXMubG9jX3Bvcz8ueCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfeTogXCIgICAgICsgKHRoaXMubG9jX3Bvcz8ueSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfejogXCIgICAgICsgKHRoaXMubG9jX3Bvcz8ueiA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfZDogXCIgICAgICsgKHRoaXMubG9jX3Bvcz8uZCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBJX0pTT04sIEpTT05fQW55IH0gZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX1BvaW50IGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgeD86IG51bWJlcixcclxuICAgIHk/OiBudW1iZXIsXHJcbiAgICB6PzogbnVtYmVyLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19Qb2ludCBpbXBsZW1lbnRzIElfSlNPTntcclxuICAgIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xyXG4gICAgcHVibGljIHo6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4PzogbnVtYmVyfENfUG9pbnR8SlNPTl9Qb2ludHx1bmRlZmluZWQsIHk/OiBudW1iZXIsIHo/OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB0aGlzLnkgPSB0aGlzLnogPSAtMztcclxuXHJcbiAgICAgICAgaWYgKHggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnggPSAwOyB0aGlzLnkgPSAwOyB0aGlzLnogPSAwO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgeSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgeiA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB4OyB0aGlzLnkgPSB5OyB0aGlzLnogPSB6O1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJvYmplY3RcIikgeyBcclxuICAgICAgICAgICAgaWYgKHggaW5zdGFuY2VvZiBDX1BvaW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSB4Lng7IHRoaXMueSA9IHgueTsgdGhpcy56ID0geC56O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWNvZGUoeCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy55ID0gdGhpcy56ID0gLTI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRfcCgpOiBDX1BvaW50IHtyZXR1cm4gbmV3IENfUG9pbnQodGhpcyl9IFxyXG4gICAgcHVibGljIHNldF9wKHA6IENfUG9pbnQpOiBDX1BvaW50fHVuZGVmaW5lZCB7XHJcbiAgICAgICAgdGhpcy54ID0gcC54OyB0aGlzLnkgPSBwLnk7IHRoaXMueiA9IHAuejtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNfZXhpc3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoeCA9PSB0aGlzLnggJiYgeSA9PSB0aGlzLnkgJiYgeiA9PSB0aGlzLnopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHdpdGhpbihwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChwLnggPT0gdGhpcy54ICYmIHAueSA9PSB0aGlzLnkgJiYgcC56ID09IHRoaXMueik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9Qb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHt4OiB0aGlzLngsIHk6IHRoaXMueSwgejogdGhpcy56fTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoYT86IEpTT05fUG9pbnQpOiBDX1BvaW50IHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAoYS54ID09PSB1bmRlZmluZWQgfHwgYS55ID09PSB1bmRlZmluZWQgfHwgYS56ID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHRoaXMueCA9IGEueDsgdGhpcy55ID0gYS55OyB0aGlzLnogPSBhLno7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX1BvaW50LCBKU09OX1BvaW50IH0gZnJvbSAnLi9DX1BvaW50JztcclxuaW1wb3J0IHtUX01ha2VFbnVtVHlwZX0gICAgICAgIGZyb20gXCIuLi9kX3V0bC9UX01ha2VFbnVtVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRfRGlyZWN0aW9uOntbZGlyOiBzdHJpbmddOiBudW1iZXJ9ID0ge1xyXG4gICAgTjogMCxcclxuICAgIEU6IDEsXHJcbiAgICBTOiAyLFxyXG4gICAgVzogMyxcclxuICAgIFg6IDk5XHJcbn0gYXMgY29uc3Q7XHJcbmV4cG9ydCB0eXBlIFRfRGlyZWN0aW9uID0gVF9NYWtlRW51bVR5cGU8dHlwZW9mIFRfRGlyZWN0aW9uPjtcclxuXHJcbmZ1bmN0aW9uIF9kaXJfa2V5KGRpcjogVF9EaXJlY3Rpb24gfCB1bmRlZmluZWQpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKFRfRGlyZWN0aW9uKS5maW5kKGtleSA9PiBUX0RpcmVjdGlvbltrZXldID09PSBkaXIpID8/IFwiPz8/P1wiO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX1BvaW50RGlyIGV4dGVuZHMgSlNPTl9Qb2ludCB7XHJcbiAgICBkPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfUERfaW5mbyhhOiBKU09OX1BvaW50RGlyfHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoXCJQb2ludERhdGEgSW5mbzpcIiBcclxuICAgICAgICArIFwiXFxueDogXCIgICAgICsgKGE/LnggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG55OiBcIiAgICAgKyAoYT8ueSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbno6IFwiICAgICArIChhPy56ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuZDogXCIgICAgICsgKGE/LmQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzICBDX1BvaW50RGlyIGV4dGVuZHMgQ19Qb2ludCB7XHJcbiAgICBwdWJsaWMgZDogVF9EaXJlY3Rpb247XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZD86IG51bWJlcnxUX0RpcmVjdGlvbnxDX1BvaW50RGlyfEpTT05fUG9pbnREaXIpIHtcclxuICAgICAgICBzdXBlcihkKTtcclxuICAgICAgICB0aGlzLmQgPSBUX0RpcmVjdGlvbi5YO1xyXG5cclxuICAgICAgICBpZiAoZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZCA9IGQgYXMgVF9EaXJlY3Rpb247XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChkIGluc3RhbmNlb2YgQ19Qb2ludERpcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kID0gZC5kIGFzIFRfRGlyZWN0aW9uO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWNvZGUoZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmQgPSBUX0RpcmVjdGlvbi5YO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfZF9tYl9uYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmQpIHtcclxuICAgICAgICAgICAgY2FzZSAwOiAgcmV0dXJuICfljJcnO1xyXG4gICAgICAgICAgICBjYXNlIDE6ICByZXR1cm4gJ+adsSc7XHJcbiAgICAgICAgICAgIGNhc2UgMjogIHJldHVybiAn5Y2XJztcclxuICAgICAgICAgICAgY2FzZSAzOiAgcmV0dXJuICfopb8nO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gJ+isjic7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldF9kKCk6IFRfRGlyZWN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9kKGQ6IFRfRGlyZWN0aW9uKTogQ19Qb2ludERpcnx1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICghKF9kaXJfa2V5KGQpIGluIFRfRGlyZWN0aW9uKSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmQgPSBkO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wZCgpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcGQoZDogQ19Qb2ludERpcnxKU09OX1BvaW50RGlyKTogQ19Qb2ludERpcnx1bmRlZmluZWQge1xyXG4gICAgICAgIGlmIChkIGluc3RhbmNlb2YgQ19Qb2ludERpcikge1xyXG4gICAgICAgICAgICBpZiAoIShfZGlyX2tleShkLmQpIGluIFRfRGlyZWN0aW9uKSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgc3VwZXIuc2V0X3AoZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZCA9IGQuZDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghKF9kaXJfa2V5KGQuZCkgaW4gVF9EaXJlY3Rpb24pKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZGVjb2RlKGQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9Qb2ludERpciB7XHJcbiAgICAgICAgY29uc3QgaiA9IHN1cGVyLmVuY29kZSgpIGFzIEpTT05fUG9pbnREaXI7XHJcbiAgICAgICAgai5kICAgICA9IHRoaXMuZCBhcyBudW1iZXI7XHJcbiAgICAgICAgcmV0dXJuIGo7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo/OiBKU09OX1BvaW50RGlyKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKCEoX2Rpcl9rZXkoai5kKSBpbiBUX0RpcmVjdGlvbikpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICBzdXBlci5kZWNvZGUoaik7XHJcbiAgICAgICAgdGhpcy5kID0gai5kIGFzIFRfRGlyZWN0aW9uO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWxlcnQoKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJQb2ludERhdGEgSW5mbzpcIiBcclxuICAgICAgICAgICAgKyBcIlxcbng6IFwiICAgICArICh0aGlzLnggPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxueTogXCIgICAgICsgKHRoaXMueSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG56OiBcIiAgICAgKyAodGhpcy56ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmQ6IFwiICAgICArICh0aGlzLmQgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImNsYXNzIENfUG9pbnQyRCB7XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gICAgcHVibGljIHk6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMueCAgPSB4O1xyXG4gICAgICAgIHRoaXMueSAgPSB5O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGlzX2V4aXN0KHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnggPT0geCkgJiYgKHRoaXMueSA9PSB5KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfUG9pbnRMaW5rMkQgZXh0ZW5kcyBDX1BvaW50MkQge1xyXG4gICAgcHVibGljIGRpOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgZGk6IG51bWJlciA9IC0xKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKHgsIHkpO1xyXG4gICAgICAgIHRoaXMuZGkgPSBkaTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgY2FzdChwOiBDX1BvaW50MkR8dW5kZWZpbmVkKTogQ19Qb2ludExpbmsyRHx1bmRlZmluZWQge1xyXG4gICAgICAgIGlmIChwPy54ID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKHA/LnkgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gcCBpbnN0YW5jZW9mIENfUG9pbnRMaW5rMkQgPyBwIDogbmV3IENfUG9pbnRMaW5rMkQocC54LCBwLnkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENfUG9pbnRTZXQyRCB7XHJcbiAgICBwdWJsaWMgc2V0OiBDX1BvaW50MkRbXSA9W107XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHB1YmxpYyBwdXNoKHA6IENfUG9pbnQyRCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0LnB1c2gocCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wb2ludCh4OiBudW1iZXIsIHk6IG51bWJlcik6IENfUG9pbnQyRHx1bmRlZmluZWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgcCBvZiB0aGlzLnNldCkge1xyXG4gICAgICAgICAgICBpZiAocD8uaXNfZXhpc3QoeCwgeSkpIHJldHVybiBwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkOyAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbW92ZShwOiBDX1BvaW50MkQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlbW92ZV94eShwLngsIHAueSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbW92ZV94eSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLnNldCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXRbaV0/LmlzX2V4aXN0KHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5zZXRbaV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldCA9IFsuLi50aGlzLnNldF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaXNfZXhpc3QoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHAgb2YgdGhpcy5zZXQpIGlmIChwPy5pc19leGlzdCh4LCB5KSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKlxyXG5jbGFzcyBQb2ludDNEIHtcclxuICAgIHB1YmxpYyBpbnQgJHg7XHJcbiAgICBwdWJsaWMgaW50ICR5O1xyXG4gICAgcHVibGljIGludCAkejtcclxuICAgIHB1YmxpYyBmdW5jdGlvbiBfX2NvbnN0cnVjdChpbnQgJHggPSAwLCBpbnQgJHkgPSAwLCBpbnQgJHogPSAwKVxyXG4gICAge1xyXG4gICAgICAgICR0aGlzLT54ICA9ICR4O1xyXG4gICAgICAgICR0aGlzLT55ICA9ICR5O1xyXG4gICAgICAgICR0aGlzLT56ICA9ICR6O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZ1bmN0aW9uIGlzX2V4aXN0KGludCAkeCwgaW50ICR5LCBpbnQgJHopOiBib29sIHtcclxuICAgICAgICByZXR1cm4gKCR0aGlzLT54ID09ICR4KSAmJiAoJHRoaXMtPnkgPT0gJHkpICYmICgkdGhpcy0+eiA9PSAkeik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZnVuY3Rpb24gd2l0aGluKFBvaW50M0QgJHApOiBib29sIHtcclxuICAgICAgICByZXR1cm4gJHRoaXMtPmlzX2V4aXN0KCRwLT54LCAkcC0+eSwgJHAtPnopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZ1bmN0aW9uIGVuY29kZSgpOiBhcnJheSB7XHJcbiAgICAgICAgJGEgPSBbXTtcclxuICAgICAgICAkYVsneCddID0gJHRoaXMtPng7XHJcbiAgICAgICAgJGFbJ3knXSA9ICR0aGlzLT55O1xyXG4gICAgICAgICRhWyd6J10gPSAkdGhpcy0+ejtcclxuXHJcbiAgICAgICAgcmV0dXJuICRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZ1bmN0aW9uIGRlY29kZShhcnJheSAkYSk6IFBvaW50M0Qge1xyXG4gICAgICAgIGlmICghaXNfbnVsbCgkYSkgJiYgaXNfYXJyYXkoJGEpKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGFycmF5X2tleV9leGlzdHMoJ3gnLCAkYSkgJiYgKGlzX251bWVyaWMoJGFbJ3gnXSkgJiYgJGFbJ3gnXSA+ICAwKVxyXG4gICAgICAgICAgICAmJiAgYXJyYXlfa2V5X2V4aXN0cygneScsICRhKSAmJiAoaXNfbnVtZXJpYygkYVsneSddKSAmJiAkYVsneSddID4gIDApXHJcbiAgICAgICAgICAgICYmICBhcnJheV9rZXlfZXhpc3RzKCd6JywgJGEpICYmIChpc19udW1lcmljKCRhWyd6J10pICYmICRhWyd6J10gPj0gMClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy0+eCA9ICRhWyd4J107XHJcbiAgICAgICAgICAgICAgICAkdGhpcy0+eSA9ICRhWyd5J107XHJcbiAgICAgICAgICAgICAgICAkdGhpcy0+eiA9ICRhWyd6J107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICR0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmdW5jdGlvbiBkZWNvZGVfYW5kX25ldyhhcnJheSAkYSk6IFBvaW50M0Qge1xyXG4gICAgICAgIGlmICghaXNfbnVsbCgkYSkgJiYgaXNfYXJyYXkoJGEpKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGFycmF5X2tleV9leGlzdHMoJ3gnLCAkYSkgJiYgKGlzX251bWVyaWMoJGFbJ3gnXSkgJiYgJGFbJ3gnXSA+ICAwKVxyXG4gICAgICAgICAgICAmJiAgYXJyYXlfa2V5X2V4aXN0cygneScsICRhKSAmJiAoaXNfbnVtZXJpYygkYVsneSddKSAmJiAkYVsneSddID4gIDApXHJcbiAgICAgICAgICAgICYmICBhcnJheV9rZXlfZXhpc3RzKCd6JywgJGEpICYmIChpc19udW1lcmljKCRhWyd6J10pICYmICRhWyd6J10gPj0gMClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50M0QoJGFbJ3gnXSwgJGFbJ3knXSwgJGFbJ3onXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludDNEKC0xLCAtMSwgLTEpO1xyXG4gICAgfVxyXG59XHJcbiovXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgX21heCwgX21pbiB9ICAgICAgICAgICBmcm9tIFwiLi4vZF91dGwvRl9NYXRoXCI7XHJcbmltcG9ydCB7IENfUG9pbnQsIEpTT05fUG9pbnQgfSAgZnJvbSBcIi4vQ19Qb2ludFwiO1xyXG5pbXBvcnQgeyBKU09OX0FueSB9ICAgICAgICAgICAgIGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9SYW5nZSBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIG1pbj86ICAgSlNPTl9Qb2ludCwgXHJcbiAgICBtYXg/OiAgIEpTT05fUG9pbnQsIFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19SYW5nZSB7XHJcbiAgICBwcm90ZWN0ZWQgbWluOiBDX1BvaW50O1xyXG4gICAgcHJvdGVjdGVkIG1heDogQ19Qb2ludDtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwMTogQ19Qb2ludCwgcDI6IENfUG9pbnQpIHtcclxuICAgICAgICB0aGlzLm1pbiAgPSBuZXcgQ19Qb2ludCgwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLm1heCAgPSBuZXcgQ19Qb2ludCgwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLl9pbml0KHAxLCBwMik7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX2luaXQocDE6IENfUG9pbnQsIHAyOiBDX1BvaW50KTogQ19SYW5nZSB7XHJcbiAgICAgICAgY29uc3QgbWluX3ggPSBfbWluKFtwMS54LCBwMi54XSk7XHJcbiAgICAgICAgY29uc3QgbWF4X3ggPSBfbWF4KFtwMS54LCBwMi54XSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1pbl95ID0gX21pbihbcDEueSwgcDIueV0pO1xyXG4gICAgICAgIGNvbnN0IG1heF95ID0gX21heChbcDEueSwgcDIueV0pO1xyXG5cclxuICAgICAgICBjb25zdCBtaW5feiA9IF9taW4oW3AxLnosIHAyLnpdKTtcclxuICAgICAgICBjb25zdCBtYXhfeiA9IF9tYXgoW3AxLnosIHAyLnpdKTtcclxuXHJcbiAgICAgICAgdGhpcy5taW4gID0gbmV3IENfUG9pbnQobWluX3gsIG1pbl95LCBtaW5feik7XHJcbiAgICAgICAgdGhpcy5tYXggID0gbmV3IENfUG9pbnQobWF4X3gsIG1heF95LCBtYXhfeik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3aXRoaW4oYTogQ19SYW5nZXxDX1BvaW50fG51bWJlciwgeT86IG51bWJlciwgej86IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgeSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgeiA9PT0gXCJudW1iZXJcIikgeyBcclxuICAgICAgICAgICAgaWYgKCBhIDwgdGhpcy5taW4ueCB8fCBhID4gdGhpcy5tYXgueCApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCB5IDwgdGhpcy5taW4ueSB8fCB5ID4gdGhpcy5tYXgueSApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCB6IDwgdGhpcy5taW4ueiB8fCB6ID4gdGhpcy5tYXgueiApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJvYmplY3RcIiAmJiBhIGluc3RhbmNlb2YgQ19Qb2ludCkgeyBcclxuICAgICAgICAgICAgY29uc3QgcCA9IGEgYXMgQ19Qb2ludDtcclxuICAgICAgICAgICAgaWYgKCBwLnggPCB0aGlzLm1pbi54IHx8IHAueCA+IHRoaXMubWF4LnggKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggcC55IDwgdGhpcy5taW4ueSB8fCBwLnkgPiB0aGlzLm1heC55ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIHAueiA8IHRoaXMubWluLnogfHwgcC56ID4gdGhpcy5tYXgueiApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJvYmplY3RcIiAmJiBhIGluc3RhbmNlb2YgQ19SYW5nZSkge1xyXG4gICAgICAgICAgICBjb25zdCBwID0gYSBhcyBDX1JhbmdlO1xyXG4gICAgICAgICAgICBpZiAoIHAubWluX3goKSA8IHRoaXMubWluLnggfHwgcC5tYXhfeCgpID4gdGhpcy5tYXgueCApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCBwLm1pbl95KCkgPCB0aGlzLm1pbi55IHx8IHAubWF4X3koKSA+IHRoaXMubWF4LnkgKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggcC5taW5feigpIDwgdGhpcy5taW4ueiB8fCBwLm1heF96KCkgPiB0aGlzLm1heC56ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG1pbl94KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1pbi54O31cclxuICAgIHB1YmxpYyBtYXhfeCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tYXgueDt9XHJcbiAgICBwdWJsaWMgbWluX3koKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWluLnk7fVxyXG4gICAgcHVibGljIG1heF95KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1heC55O31cclxuICAgIHB1YmxpYyBtaW5feigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5taW4uejt9XHJcbiAgICBwdWJsaWMgbWF4X3ooKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWF4Lno7fVxyXG4gICAgcHVibGljIHNpemVfeCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heC54IC0gdGhpcy5taW4ueCArIDE7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIHNpemVfeSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heC55IC0gdGhpcy5taW4ueSArIDE7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIHNpemVfeigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heC56IC0gdGhpcy5taW4ueiArIDE7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIGRvX2FsbF94eXooZm46ICh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKSA9PiBib29sZWFuKSB7XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IHRoaXMubWluLno7IHogPD0gdGhpcy5tYXguejsgeisrICkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gdGhpcy5taW4ueTsgeSA8PSB0aGlzLm1heC55OyB5KysgKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gdGhpcy5taW4ueDsgeSA8PSB0aGlzLm1heC54OyB4KysgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmbih4LCB5LCB6KSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRvX2FsbF9wKGZuOiAocDogQ19Qb2ludCkgPT4gYm9vbGVhbikge1xyXG4gICAgICAgIGZvciAodmFyIHogPSB0aGlzLm1pbi56OyB6IDw9IHRoaXMubWF4Lno7IHorKyApIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IHRoaXMubWluLnk7IHkgPD0gdGhpcy5tYXgueTsgeSsrICkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IHRoaXMubWluLng7IHkgPD0gdGhpcy5tYXgueDsgeCsrICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZm4obmV3IENfUG9pbnQoeCwgeSwgeikpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fUmFuZ2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1pbjogdGhpcy5taW4uZW5jb2RlKCksXHJcbiAgICAgICAgICAgIG1heDogdGhpcy5taW4uZW5jb2RlKCksXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShqOiBKU09OX1JhbmdlKTogQ19SYW5nZSB7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChqLm1pbiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAoai5tYXggPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgY29uc3QgcDEgPSBuZXcgQ19Qb2ludChqLm1pbik7XHJcbiAgICAgICAgY29uc3QgcDIgPSBuZXcgQ19Qb2ludChqLm1heCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luaXQocDEsIHAyKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX01hemUsIEpTT05fTWF6ZSwgYWxlcnRfbWF6ZV9pbmZvICB9ICBmcm9tIFwiLi9DX01hemVcIjtcclxuaW1wb3J0IHsgQ19HdWlsZCwgSlNPTl9HdWlsZCwgYWxlcnRfZ3VsZF9pbmZvIH0gZnJvbSBcIi4vQ19HdWlsZFwiO1xyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCwgSlNPTl9Nb3ZhYmxlUG9pbnQsIGFsZXJ0X212cHRfaW5mbyB9IGZyb20gXCIuL0NfTW92YWJsZVBvaW50XCI7XHJcbmltcG9ydCB7IENfVGVhbSwgSlNPTl9UZWFtLCBhbGVydF90ZWFtX2luZm8gIH0gIGZyb20gXCIuL0NfVGVhbVwiO1xyXG5pbXBvcnQgeyBDX1NhdmVJbmZvLCBJX0pTT04sIEpTT05fQW55LCBKU09OX1NhdmVJbmZvIH0gZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX1NhdmVEYXRhIGV4dGVuZHMgSlNPTl9TYXZlSW5mbyB7XHJcbiAgICBzYXZlX2lkPzogICBudW1iZXIsXHJcbiAgICBwbGF5ZXJfaWQ/OiBudW1iZXIsIFxyXG4gICAgdW5pcV9ubz86ICAgbnVtYmVyLFxyXG4gICAgdGl0bGU/OiAgICAgc3RyaW5nLFxyXG4gICAgZGV0YWlsPzogICAgc3RyaW5nLFxyXG4gICAgcG9pbnQ/OiAgICAgc3RyaW5nLFxyXG4gICAgYXV0b19tb2RlPzogc3RyaW5nLFxyXG4gICAgaXNfYWN0aXZlPzogc3RyaW5nLFxyXG4gICAgaXNfZGVsZXRlPzogc3RyaW5nLFxyXG4gICAgc2F2ZV90aW1lPzogc3RyaW5nLFxyXG5cclxuICAgIGFsbF9tdnB0PzogIEpTT05fTW92YWJsZVBvaW50W10sXHJcbiAgICBhbGxfbWF6ZT86ICBKU09OX01hemVbXSxcclxuICAgIGFsbF90ZWFtPzogIEpTT05fVGVhbVtdLFxyXG4gICAgYWxsX2d1bGQ/OiAgSlNPTl9HdWlsZFtdLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfc2F2ZV9pbmZvKGE6IEpTT05fU2F2ZURhdGF8dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydChcIlNhdmUgSW5mbzpcIiBcclxuICAgICAgICArIFwiXFxuc2F2ZV9pZDogICAgXCIgKyAoYS5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5wbGF5ZXJfaWQ6ICBcIiArIChhLnBsYXllcl9pZCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnVuaXFfbm86ICAgIFwiICsgKGEudW5pcV9ubyAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxudGl0bGU6ICAgICAgXCIgKyAoYS50aXRsZSAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5kZXRhaWw6ICAgICBcIiArIChhLmRldGFpbCAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnBvaW50OiAgICAgIFwiICsgKGEucG9pbnQgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuYXV0b19tb2RlOiAgXCIgKyAoYS5hdXRvX21vZGUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5pc19hY3RpdmU6ICBcIiArIChhLmlzX2FjdGl2ZSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmlzX2RlbGV0ZTogIFwiICsgKGEuaXNfZGVsZXRlID8/ICc/JylcclxuICAgICAgICArIFwiXFxubXZwdF9jb3VudDogXCIgKyAoYS5hbGxfbXZwdD8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICArIFwiXFxubWF6ZV9jb3VudDogXCIgKyAoYS5hbGxfbWF6ZT8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICArIFwiXFxuZ3VsZF9jb3VudDogXCIgKyAoYS5hbGxfZ3VsZD8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICArIFwiXFxudGVhbV9jb3VudDogXCIgKyAoYS5hbGxfdGVhbT8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9zYXZlX2RldGFpbChhOiBKU09OX1NhdmVEYXRhfHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgIHRyeSB7IFxyXG4vLyAgICAgICAgYWxlcnQoXCJTYXZlIERldGFpbChtdnB0KTpcIik7XHJcbiAgICAgICAgZm9yIChjb25zdCBtdnB0IG9mIGEuYWxsX212cHQ/P1tdKSBhbGVydF9tdnB0X2luZm8obXZwdCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHthbGVydCgnYWxlcnQgbXZwdCBlcnJvcjogJyArIGVycil9XHJcblxyXG4gICAgdHJ5IHsgXHJcbi8vICAgICAgICBhbGVydChcIlNhdmUgRGV0YWlsKHRlYW0pOlwiKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHRlYW0gb2YgYS5hbGxfdGVhbT8/W10pIGFsZXJ0X3RlYW1faW5mbyh0ZWFtKTtcclxuICAgIH0gY2F0Y2ggKGVycikge2FsZXJ0KCdhbGVydCB0ZWFtIGVycm9yOiAnICsgZXJyKX1cclxuXHJcbiAgICB0cnkgeyBcclxuLy8gICAgICAgIGFsZXJ0KFwiU2F2ZSBEZXRhaWwobWF6ZSk6XCIpO1xyXG4gICAgICAgIGZvciAoY29uc3QgbWF6ZSBvZiBhLmFsbF9tYXplPz9bXSkgYWxlcnRfbWF6ZV9pbmZvKG1hemUpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7YWxlcnQoJ2FsZXJ0IG1hemUgZXJyb3I6ICcgKyBlcnIpfVxyXG5cclxuICAgIHRyeSB7IFxyXG4vLyAgICAgICAgYWxlcnQoXCJTYXZlIERldGFpbChndWxkKTpcIik7XHJcbiAgICAgICAgZm9yIChjb25zdCBndWxkIG9mIGEuYWxsX2d1bGQ/P1tdKSBhbGVydF9ndWxkX2luZm8oZ3VsZCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHthbGVydCgnYWxlcnQgZ3VsZCBlcnJvcjogJyArIGVycil9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ19TYXZlRGF0YSBleHRlbmRzIENfU2F2ZUluZm8gaW1wbGVtZW50cyBJX0pTT04ge1xyXG5cclxuLypcclxuICAgIHB1YmxpYyBzYXZlX2lkOiAgIG51bWJlcjtcclxuICAgIHB1YmxpYyBwbGF5ZXJfaWQ6IG51bWJlcjsgXHJcbiAgICBwdWJsaWMgdW5pcV9ubzogICBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGl0bGU6ICAgICBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGV0YWlsOiAgICBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcG9pbnQ6ICAgICBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYXV0b19tb2RlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlzX2FjdGl2ZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc19kZWxldGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgc2F2ZV90aW1lOiBEYXRlO1xyXG4gICAgcHVibGljIG15cG9zOiAgICAgQ19Nb3ZhYmxlUG9pbnQ7XHJcbiovXHJcblxyXG4gICAgcHVibGljIGFsbF9tdnB0OiAge1t1aWQ6IHN0cmluZ106IENfTW92YWJsZVBvaW50fTtcclxuICAgIHB1YmxpYyBhbGxfbWF6ZTogIHtbdWlkOiBzdHJpbmddOiBDX01hemV9O1xyXG4gICAgcHVibGljIGFsbF90ZWFtOiAge1t1aWQ6IHN0cmluZ106IENfVGVhbX07XHJcbiAgICBwdWJsaWMgYWxsX2d1bGQ6ICB7W3VpZDogc3RyaW5nXTogQ19HdWlsZH07XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGE/OiBKU09OX1NhdmVEYXRhKSB7XHJcbiAgICAgICAgc3VwZXIoYSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWxsX212cHQgID0ge307XHJcbiAgICAgICAgdGhpcy5hbGxfbWF6ZSAgPSB7fTtcclxuICAgICAgICB0aGlzLmFsbF90ZWFtICA9IHt9XHJcbiAgICAgICAgdGhpcy5hbGxfZ3VsZCAgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBuZXcoYT86IEpTT05fU2F2ZURhdGEpOiBDX1NhdmVEYXRhIHtcclxuICAgICAgICByZXR1cm4gbmV3IENfU2F2ZURhdGEoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1NhdmVEYXRhIHtcclxuICAgICAgICBsZXQgc2F2ZV9kYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3Qgc2F2ZV9kYXRhICAgID0gc3VwZXIuZW5jb2RlKCkgYXMgSlNPTl9TYXZlRGF0YTtcclxuXHJcbiAgICAgICAgICAgIHNhdmVfZGF0YS5hbGxfbXZwdCA9IHRoaXMuX2VuY29kZV9hbGxfZGF0YSh0aGlzLmFsbF9tdnB0KTsgXHJcbiAgICAgICAgICAgIHNhdmVfZGF0YS5hbGxfbWF6ZSA9IHRoaXMuX2VuY29kZV9hbGxfZGF0YSh0aGlzLmFsbF9tYXplKTsgXHJcbiAgICAgICAgICAgIHNhdmVfZGF0YS5hbGxfdGVhbSA9IHRoaXMuX2VuY29kZV9hbGxfZGF0YSh0aGlzLmFsbF90ZWFtKTsgXHJcbiAgICAgICAgICAgIHNhdmVfZGF0YS5hbGxfZ3VsZCA9IHRoaXMuX2VuY29kZV9hbGxfZGF0YSh0aGlzLmFsbF9ndWxkKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzYXZlX2RhdGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdTYXZlRGF0YSBFbmNvZGUgRXJyb3I6ICcgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9lbmNvZGVfYWxsX2RhdGEoYWxsX2RhdGE6IHtbdWlkOnN0cmluZ106SV9KU09OfSk6IEpTT05fQW55W10ge1xyXG4gICAgICAgIGNvbnN0IGFsbF9KU09OOiBKU09OX0FueVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBhbGxfZGF0YSkgYWxsX0pTT04ucHVzaChhbGxfZGF0YVtpXS5lbmNvZGUoKSk7XHJcbiAgICAgICAgcmV0dXJuIGFsbF9KU09OO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWNvZGUoczogSlNPTl9TYXZlRGF0YSk6IENfU2F2ZURhdGEge1xyXG4gICAgICAgIHN1cGVyLmRlY29kZShzKTtcclxuXHJcbiAgICAgICAgaWYgKHMuYWxsX212cHQgICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxfbXZwdCA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGpzb25fbXZwdCBvZiBzLmFsbF9tdnB0KSB7XHJcbiAgICAgICAgICAgICAgICAgY29uc3QgbXZwdCA9IChuZXcgQ19Nb3ZhYmxlUG9pbnQoKSkuZGVjb2RlKGpzb25fbXZwdCk7IFxyXG4gICAgICAgICAgICAgICAgIHRoaXMuYWxsX212cHRbbXZwdC51aWQoKV0gPSBtdnB0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZiAocy5hbGxfbWF6ZSAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsbF9tYXplID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl9tYXplIG9mIHMuYWxsX21hemUpIHtcclxuICAgICAgICAgICAgICAgICBjb25zdCBtYXplID0gKG5ldyBDX01hemUoKSkuZGVjb2RlKGpzb25fbWF6ZSk7IFxyXG4gICAgICAgICAgICAgICAgIHRoaXMuYWxsX21hemVbbWF6ZS51aWQoKV0gPSBtYXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZiAocy5hbGxfdGVhbSAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsbF90ZWFtID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl90ZWFtIG9mIHMuYWxsX3RlYW0pIHtcclxuICAgICAgICAgICAgICAgICBjb25zdCB0ZWFtID0gKG5ldyBDX1RlYW0oKSkuZGVjb2RlKGpzb25fdGVhbSk7IFxyXG4gICAgICAgICAgICAgICAgIHRoaXMuYWxsX3RlYW1bdGVhbS51aWQoKV0gPSB0ZWFtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZiAocy5hbGxfZ3VsZCAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsbF9ndWxkID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl9ndWxkIG9mIHMuYWxsX2d1bGQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGd1bGQgPSAobmV3IENfR3VpbGQoKSkuZGVjb2RlKGpzb25fZ3VsZCk7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxfZ3VsZFtndWxkLnVpZCgpXSA9IGd1bGQ7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIlNhdmUgSW5mbzpcIiBcclxuICAgICAgICAgICAgKyBcIlxcbnNhdmVfaWQ6ICAgIFwiICsgKHRoaXMuc2F2ZV9pZCAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnBsYXllcl9pZDogIFwiICsgKHRoaXMucGxheWVyX2lkID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnVuaXFfbm86ICAgIFwiICsgKHRoaXMudW5pcV9ubyAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnRpdGxlOiAgICAgIFwiICsgKHRoaXMudGl0bGUgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmRldGFpbDogICAgIFwiICsgKHRoaXMuZGV0YWlsICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnBvaW50OiAgICAgIFwiICsgKHRoaXMucG9pbnQgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmF1dG9fbW9kZTogIFwiICsgKHRoaXMuYXV0b19tb2RlPydZJzonTicpXHJcbiAgICAgICAgICAgICsgXCJcXG5pc19hY3RpdmU6ICBcIiArICh0aGlzLmlzX2FjdGl2ZT8nWSc6J04nKVxyXG4gICAgICAgICAgICArIFwiXFxuaXNfZGVsZXRlOiAgXCIgKyAodGhpcy5pc19kZWxldGU/J1knOidOJylcclxuICAgICAgICAgICAgKyBcIlxcbm12cHRfY291bnQ6IFwiICsgKHRoaXMuYWxsX212cHQ/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5tYXplX2NvdW50OiBcIiArICh0aGlzLmFsbF9tYXplPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuZ3VsZF9jb3VudDogXCIgKyAodGhpcy5hbGxfZ3VsZD8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnRlYW1fY291bnQ6IFwiICsgKHRoaXMuYWxsX3RlYW0/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFsZXJ0X2RldGFpbCgpOiB2b2lkIHtcclxuICAgICAgICB0cnkgeyBcclxuLy8gICAgICAgICAgICBhbGVydChcIlNhdmUgRGV0YWlsKG12cHQpOlwiKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpaSBpbiB0aGlzLmFsbF9tdnB0KSB0aGlzLmFsbF9tdnB0W2lpXS5hbGVydCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge2FsZXJ0KCdhbGVydCBtdnB0IGVycm9yOiAnICsgZXJyKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgdHJ5IHsgXHJcbi8vICAgICAgICAgICAgYWxlcnQoXCJTYXZlIERldGFpbCh0ZWFtKTpcIik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWkgaW4gdGhpcy5hbGxfdGVhbSkgdGhpcy5hbGxfdGVhbVtpaV0uYWxlcnQoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHthbGVydCgnYWxlcnQgdGVhbSBlcnJvcjogJyArIGVycil9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHRyeSB7IFxyXG4vLyAgICAgICAgICAgIGFsZXJ0KFwiU2F2ZSBEZXRhaWwobWF6ZSk6XCIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHRoaXMuYWxsX21hemUpIHRoaXMuYWxsX21hemVbaWldLmFsZXJ0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7YWxlcnQoJ2FsZXJ0IG1hemUgZXJyb3I6ICcgKyBlcnIpfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB0cnkgeyBcclxuLy8gICAgICAgICAgICBhbGVydChcIlNhdmUgRGV0YWlsKGd1bGQpOlwiKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpaSBpbiB0aGlzLmFsbF9ndWxkKSB0aGlzLmFsbF9ndWxkW2lpXS5hbGVydCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge2FsZXJ0KCdhbGVydCBndWxkIGVycm9yOiAnICsgZXJyKX1cclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCwgSlNPTl9Nb3ZhYmxlUG9pbnQgfSBmcm9tIFwiLi9DX01vdmFibGVQb2ludFwiO1xyXG5cclxuLy8g44K144O844OQ44O85YG044Go44KE44KK44Go44KK44GZ44KLSlNPTuW9ouW8j+ODh+ODvOOCv+OBruODhuODs+ODl+ODrOODvOODiFxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fQW55IHtcclxuICAgIFtrZXk6IHN0cmluZ106IGFueVxyXG59XHJcblxyXG4vLyDjgrXjg7zjg5Djg7zlgbTjgajjgoTjgorjgajjgorjgZnjgovjgq/jg6njgrnjgavlv4XopoHjgarjg6Hjgr3jg4Pjg4lcclxuZXhwb3J0IGludGVyZmFjZSBJX0pTT04ge1xyXG4gICAgZW5jb2RlOiAoKT0+SlNPTl9BbnksXHJcbiAgICBkZWNvZGU6IChqOkpTT05fQW55KT0+SV9KU09OLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElfSlNPTl9VbmlxIGV4dGVuZHMgSV9KU09OIHtcclxuICAgIHVpZDogKCk9PnN0cmluZyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJX0Fic3RyYWN0IHtcclxuICAgIG5ld09iajogKGo/OkpTT05fQW55KT0+SV9BYnN0cmFjdHx1bmRlZmluZWQsXHJcbiAgICBlbmNvZGU6ICgpPT5KU09OX0FueSxcclxuLy8gIHN0YXRpYyBkZWNvZGU6IChqOkpTT05fQW55KT0+SV9KU09OLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElfSlNPTl9DbGFzcyB7XHJcbiAgICBuZXc6IChqPzogSlNPTl9BbnkpPT5JX0pTT04sXHJcbn1cclxuXHJcbi8vIOOCteODvOODkOODvOWBtOOBqOOChOOCiuWPluOCiuOBmeOCi+mam+OBq+iHqui6q+OCkuaWh+Wtl+WIl+WMluOBmeOCi+OCr+ODqeOCueOBruODoeOCveODg+ODiVxyXG5leHBvcnQgaW50ZXJmYWNlIElfSlNPTlZhbHVlIGV4dGVuZHMgSV9KU09Oe1xyXG4gICAgZnJvbUpTT046ICgpPT52b2lkLFxyXG4gICAgdG9KU09OOiAgICgpPT52b2lkLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fU2F2ZUluZm8gZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBzYXZlX2lkPzogICBudW1iZXIsXHJcbiAgICBwbGF5ZXJfaWQ/OiBudW1iZXIsIFxyXG4gICAgdW5pcV9ubz86ICAgbnVtYmVyLFxyXG4gICAgdGl0bGU/OiAgICAgc3RyaW5nLFxyXG4gICAgZGV0YWlsPzogICAgc3RyaW5nLFxyXG4gICAgcG9pbnQ/OiAgICAgc3RyaW5nLFxyXG4gICAgYXV0b19tb2RlPzogc3RyaW5nLFxyXG4gICAgaXNfYWN0aXZlPzogc3RyaW5nLFxyXG4gICAgaXNfZGVsZXRlPzogc3RyaW5nLFxyXG4gICAgc2F2ZV90aW1lPzogc3RyaW5nLFxyXG4gICAgbXlwb3M/OiAgICAgSlNPTl9Nb3ZhYmxlUG9pbnQsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9zYXZlaW5mb19pbmZvKGE6IEpTT05fU2F2ZUluZm98dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydChcIlNhdmUgSW5mbzpcIiBcclxuICAgICAgICArIFwiXFxuc2F2ZV9pZDogICAgXCIgKyAoYS5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5wbGF5ZXJfaWQ6ICBcIiArIChhLnBsYXllcl9pZCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnVuaXFfbm86ICAgIFwiICsgKGEudW5pcV9ubyAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxudGl0bGU6ICAgICAgXCIgKyAoYS50aXRsZSAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5kZXRhaWw6ICAgICBcIiArIChhLmRldGFpbCAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnBvaW50OiAgICAgIFwiICsgKGEucG9pbnQgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuYXV0b19tb2RlOiAgXCIgKyAoYS5hdXRvX21vZGUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5pc19hY3RpdmU6ICBcIiArIChhLmlzX2FjdGl2ZSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmlzX2RlbGV0ZTogIFwiICsgKGEuaXNfZGVsZXRlID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2F2ZV90aW1lOiAgXCIgKyAoYS5zYXZlX3RpbWUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5teXVybDogICAgICBcIiArIChhLm15cG9zPy5jdXJfdXJsICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG50ZWFtX3VpZDogICBcIiArIChhLm15cG9zPy50ZWFtX3VpZCAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sb2Nfa2luZDogICBcIiArIChhLm15cG9zPy5raW5kICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sb2NfbmFtZTogICBcIiArIChhLm15cG9zPy5uYW1lICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sb2NfdWlkOiAgICBcIiArIChhLm15cG9zPy5sb2NfdWlkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfU2F2ZUluZm8gaW1wbGVtZW50cyBJX0pTT04ge1xyXG4gICAgcHVibGljIHNhdmVfaWQ6ICAgbnVtYmVyO1xyXG4gICAgcHVibGljIHBsYXllcl9pZDogbnVtYmVyOyBcclxuICAgIHB1YmxpYyB1bmlxX25vOiAgIG51bWJlcjtcclxuICAgIHB1YmxpYyB0aXRsZTogICAgIHN0cmluZztcclxuICAgIHB1YmxpYyBkZXRhaWw6ICAgIHN0cmluZztcclxuICAgIHB1YmxpYyBwb2ludDogICAgIHN0cmluZztcclxuICAgIHB1YmxpYyBhdXRvX21vZGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaXNfYWN0aXZlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlzX2RlbGV0ZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBzYXZlX3RpbWU6IERhdGU7XHJcbiAgICBwdWJsaWMgbXlwb3M6ICAgICBDX01vdmFibGVQb2ludDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYT86IEpTT05fU2F2ZUluZm8pIHtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgICA9IC0xO1xyXG4gICAgICAgIHRoaXMucGxheWVyX2lkID0gLTE7IFxyXG4gICAgICAgIHRoaXMudW5pcV9ubyAgID0gLTE7XHJcbiAgICAgICAgdGhpcy50aXRsZSAgICAgPSAnJztcclxuICAgICAgICB0aGlzLmRldGFpbCAgICA9ICcnO1xyXG4gICAgICAgIHRoaXMucG9pbnQgICAgID0gJyc7XHJcbiAgICAgICAgdGhpcy5hdXRvX21vZGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzX2FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc19kZWxldGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNhdmVfdGltZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMubXlwb3MgICAgID0gbmV3IENfTW92YWJsZVBvaW50KCk7XHJcblxyXG4gICAgICAgIGlmIChhICE9PSB1bmRlZmluZWQpIHRoaXMuZGVjb2RlKGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbmV3KGE/OiBKU09OX1NhdmVJbmZvKTogQ19TYXZlSW5mbyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX1NhdmVJbmZvKGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9TYXZlSW5mbyB7XHJcbiAgICAgICAgbGV0IHNhdmVfZGF0ZTogc3RyaW5nO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHNhdmVfZGF0ZSA9IHRoaXMuc2F2ZV90aW1lLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHNhdmVfZGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzYXZlX2lkOiAgIHRoaXMuc2F2ZV9pZCwgXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJfaWQ6IHRoaXMucGxheWVyX2lkLCAgXHJcbiAgICAgICAgICAgICAgICB1bmlxX25vOiAgIHRoaXMudW5pcV9ubywgXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogICAgIHRoaXMudGl0bGUsIFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiAgICB0aGlzLmRldGFpbCwgXHJcbiAgICAgICAgICAgICAgICBwb2ludDogICAgIHRoaXMucG9pbnQsIFxyXG4gICAgICAgICAgICAgICAgYXV0b19tb2RlOiB0aGlzLmF1dG9fbW9kZSA/ICcxJyA6ICcwJywgXHJcbiAgICAgICAgICAgICAgICBpc19hY3RpdmU6IHRoaXMuaXNfYWN0aXZlID8gJzEnIDogJzAnLCBcclxuICAgICAgICAgICAgICAgIGlzX2RlbGV0ZTogdGhpcy5pc19kZWxldGUgPyAnMScgOiAnMCcsIFxyXG4gICAgICAgICAgICAgICAgc2F2ZV90aW1lOiBzYXZlX2RhdGUsIFxyXG4gICAgICAgICAgICAgICAgbXlwb3M6ICAgICB0aGlzLm15cG9zLmVuY29kZSgpLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdTYXZlRGF0YSBFbmNvZGUgRXJyb3I6ICcgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWNvZGUoczogSlNPTl9TYXZlSW5mbyk6IENfU2F2ZUluZm8ge1xyXG4gICAgICAgIHRoaXMuc2F2ZV9pZCAgID0gcy5zYXZlX2lkICAgPz8gdGhpcy5zYXZlX2lkO1xyXG4gICAgICAgIHRoaXMucGxheWVyX2lkID0gcy5wbGF5ZXJfaWQgPz8gdGhpcy5wbGF5ZXJfaWQ7IFxyXG4gICAgICAgIHRoaXMudW5pcV9ubyAgID0gcy51bmlxX25vICAgPz8gdGhpcy51bmlxX25vO1xyXG4gICAgICAgIHRoaXMudGl0bGUgICAgID0gcy50aXRsZSAgICAgPz8gdGhpcy50aXRsZTtcclxuICAgICAgICB0aGlzLmRldGFpbCAgICA9IHMuZGV0YWlsICAgID8/IHRoaXMuZGV0YWlsO1xyXG4gICAgICAgIHRoaXMucG9pbnQgICAgID0gcy5wb2ludCAgICAgPz8gdGhpcy5wb2ludDtcclxuICAgICAgICBpZiAocy5hdXRvX21vZGUgPT09IHVuZGVmaW5lZCkgdGhpcy5hdXRvX21vZGU7IGVsc2Ugcy5hdXRvX21vZGUgIT09ICcwJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBpZiAocy5pc19hY3RpdmUgPT09IHVuZGVmaW5lZCkgdGhpcy5pc19hY3RpdmU7IGVsc2Ugcy5pc19hY3RpdmUgIT09ICcwJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBpZiAocy5pc19kZWxldGUgPT09IHVuZGVmaW5lZCkgdGhpcy5pc19kZWxldGU7IGVsc2Ugcy5pc19kZWxldGUgIT09ICcwJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBpZiAocy5zYXZlX3RpbWUgIT09IHVuZGVmaW5lZCkgdGhpcy5zYXZlX3RpbWUgPSBuZXcgRGF0ZShzLnNhdmVfdGltZSk7IFxyXG5cclxuICAgICAgICBpZiAocy5teXBvcyAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teXBvcy5kZWNvZGUocy5teXBvcyk7IFxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGFsZXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiU2F2ZUluZm8gREFUQTpcIiBcclxuICAgICAgICAgICAgKyBcIlxcbnNhdmVfaWQ6ICAgIFwiICsgKHRoaXMuc2F2ZV9pZCAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnBsYXllcl9pZDogIFwiICsgKHRoaXMucGxheWVyX2lkID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnVuaXFfbm86ICAgIFwiICsgKHRoaXMudW5pcV9ubyAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnRpdGxlOiAgICAgIFwiICsgKHRoaXMudGl0bGUgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmRldGFpbDogICAgIFwiICsgKHRoaXMuZGV0YWlsICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnBvaW50OiAgICAgIFwiICsgKHRoaXMucG9pbnQgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmF1dG9fbW9kZTogIFwiICsgKHRoaXMuYXV0b19tb2RlPydZJzonTicpXHJcbiAgICAgICAgICAgICsgXCJcXG5pc19hY3RpdmU6ICBcIiArICh0aGlzLmlzX2FjdGl2ZT8nWSc6J04nKVxyXG4gICAgICAgICAgICArIFwiXFxuaXNfZGVsZXRlOiAgXCIgKyAodGhpcy5pc19kZWxldGU/J1knOidOJylcclxuICAgICAgICAgICAgKyBcIlxcbm15dXJsOiAgICAgIFwiICsgKHRoaXMubXlwb3MudXJsKCkgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG50ZWFtX3VpZDogICBcIiArICh0aGlzLm15cG9zLnRpZCgpICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubG9jX2tpbmQ6ICAgXCIgKyAodGhpcy5teXBvcy5nZXRfbGNrZCgpID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxvY19uYW1lOiAgIFwiICsgKHRoaXMubXlwb3MuZ2V0X25hbWUoKSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sb2NfdWlkOiAgICBcIiArICh0aGlzLm15cG9zLmdldF91aWQoKSAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ19Qb2ludCB9ICAgICAgICAgICAgICAgZnJvbSBcIi4vQ19Qb2ludFwiO1xyXG5pbXBvcnQgeyBDX1BvaW50RGlyIH0gICAgICAgICAgICBmcm9tICcuL0NfUG9pbnREaXInO1xyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCB9ICAgICAgICBmcm9tIFwiLi9DX01vdmFibGVQb2ludFwiO1xyXG5pbXBvcnQgeyBDX1dhbGtlciwgSlNPTl9XYWxrZXIgfSBmcm9tIFwiLi9DX1dhbGtlclwiO1xyXG5pbXBvcnQgeyBDX0hlcm8sIEpTT05fSGVybyB9ICAgICBmcm9tIFwiLi9DX0hlcm9cIjtcclxuaW1wb3J0IHsgSV9NYXplT2JqIH0gICAgICAgICAgICAgZnJvbSBcIi4vQ19NYXplT2JqXCI7XHJcbmltcG9ydCB7IEpTT05fQW55IH0gICAgICAgICAgICAgIGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuaW1wb3J0IHsgQ19DdXJyZW50VGVhbVZpZXcgfSAgICAgZnJvbSBcIi4vQ19UZWFtVmlld1wiO1xyXG5pbXBvcnQgeyBDX01hemVPYmpWaWV3LCBJX01hemVPYmpWaWV3LCBKU09OX01hemVPYmpWaWV3IH0gIGZyb20gXCIuL0NfTWF6ZU9ialZpZXdcIjtcclxuaW1wb3J0IHsgX2dldF91dWlkIH0gICAgICAgICAgICAgZnJvbSBcIi4uL2RfdXRsL0ZfUmFuZFwiO1xyXG5pbXBvcnQgeyBDX0dvb2RzSXRlbSwgVF9Hb29kc0tpbmQgfSBmcm9tIFwiLi9DX0dvb2RzSXRlbVwiO1xyXG5pbXBvcnQgeyBDX0dvb2RzTGlzdCwgSlNPTl9Hb29kc0xpc3QgfSBmcm9tIFwiLi9DX0dvb2RzTGlzdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX1RlYW0gZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBpZD86ICAgICAgICBudW1iZXIsIFxyXG4gICAgdW5pcV9pZD86ICAgc3RyaW5nLCBcclxuICAgIHNhdmVfaWQ/OiAgIG51bWJlciwgXHJcbiAgICBuYW1lPzogICAgICBzdHJpbmcsIFxyXG4gICAgbG9jYXRlPzogICAgSlNPTl9XYWxrZXIsXHJcbiAgICBnb2xkPzogICAgICBudW1iZXIsXHJcbi8vICAgIGdvb2RzPzogICAgIEpTT05fR29vZHNMaXN0LFxyXG4gICAgaGVyb2VzPzogICAgSlNPTl9IZXJvW10sIFxyXG4gICAgbW90aW9uPzogICAgc3RyaW5nLFxyXG4gICAgdmlldz86ICAgICAgSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF90ZWFtX2luZm8oYTogSlNPTl9UZWFtfHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoXCJUZWFtIEluZm86XCIgXHJcbiAgICAgICAgKyBcIlxcbmlkOiAgICBcIiAgICAgKyAoYS5pZCAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG51bmlxX2lkOiAgXCIgICsgKGEudW5pcV9pZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubmFtZTogIFwiICAgICArIChhLm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNhdmVfaWQ6IFwiICAgKyAoYS5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG51cmw6ICBcIiAgICAgICsgKGEubG9jYXRlPy5jdXJfdXJsICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubGNrZDogXCIgICAgICArIChhLmxvY2F0ZT8ua2luZCAgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxjbm06IFwiICAgICAgKyAoYS5sb2NhdGU/Lm5hbWUgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sY2lkOiBcIiAgICAgICsgKGEubG9jYXRlPy5sb2NfdWlkICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3g6IFwiICAgICArIChhLmxvY2F0ZT8ubG9jX3Bvcz8ueCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl95OiBcIiAgICAgKyAoYS5sb2NhdGU/LmxvY19wb3M/LnkgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfejogXCIgICAgICsgKGEubG9jYXRlPy5sb2NfcG9zPy56ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX2Q6IFwiICAgICArIChhLmxvY2F0ZT8ubG9jX3Bvcz8uZCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmdvbGQ6IFwiICAgICAgKyAoYS5nb2xkICAgICAgPz8gIDAgKVxyXG4vLyAgICAgICAgKyBcIlxcbmdvb2RzOiBcIiAgICAgKyAoT2JqZWN0LmtleXMoYS5nb29kcz8/W10pLmxlbmd0aClcclxuICAgICAgICArIFwiXFxuaGVyb2VzOiBcIiAgICArIChhLmhlcm9lcz8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcblxyXG4vLyAgICBpZiAoYS5oZXJvZXMgIT09IHVuZGVmaW5lZCkgYWxlcnRfaGVyb2VzX2luZm8oYS5oZXJvZXMpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENfVGVhbSBpbXBsZW1lbnRzIElfTWF6ZU9iaiB7XHJcbiAgICBwdWJsaWMgc3RhdGljIG5ld09iaihqPzogSlNPTl9UZWFtKTogQ19UZWFtIHtcclxuICAgICAgICByZXR1cm4gbmV3IENfVGVhbShqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBuZXdPYmooaj86IEpTT05fVGVhbSk6IENfVGVhbSB7cmV0dXJuIENfVGVhbS5uZXdPYmooaik7fVxyXG5cclxuICAgIHByb3RlY3RlZCBteV9pZDogICAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBteV9uYW1lOiAgIHN0cmluZztcclxuICAgIHByb3RlY3RlZCB1bmlxX2lkOiAgIHN0cmluZztcclxuICAgIHByb3RlY3RlZCBzYXZlX2lkOiAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCB3YWxrZXI6ICAgIENfV2Fsa2VyO1xyXG4gICAgcHJvdGVjdGVkIGdvbGQ6ICAgICAgbnVtYmVyO1xyXG4vLyAgICBwcm90ZWN0ZWQgZ29vZHM6ICAgICBDX0dvb2RzTGlzdDtcclxuICAgIHByb3RlY3RlZCBoZXJvZXM6ICAgIHtbdWlkOiBzdHJpbmddOiBDX0hlcm99O1xyXG5cclxuICAgIHByb3RlY3RlZCBteVZpZXc6ICAgIElfTWF6ZU9ialZpZXd8dW5kZWZpbmVkO1xyXG4gICAgcHJvdGVjdGVkIGhvcGVfbW90aW9uOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX1RlYW0pIHtcclxuXHJcbiAgICAgICAgdGhpcy5teV9pZCAgICAgPSAgMDtcclxuICAgICAgICB0aGlzLm15X25hbWUgICA9ICdOZW8gVGVhbT8nO1xyXG4gICAgICAgIHRoaXMudW5pcV9pZCAgID0gJ21haV90ZWFtIycgKyBfZ2V0X3V1aWQoKTtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgICA9ICAwO1xyXG5cclxuICAgICAgICB0aGlzLm15VmlldyA9IG5ldyBDX0N1cnJlbnRUZWFtVmlldyh0aGlzKSBhcyBJX01hemVPYmpWaWV3O1xyXG4gICAgICAgIHRoaXMud2Fsa2VyID0gbmV3IENfV2Fsa2VyKCk7XHJcbiAgICAgICAgdGhpcy53YWxrZXIuc2V0X3RpZCh0aGlzLnVpZCgpKTtcclxuXHJcbiAgICAgICAgdGhpcy5nb2xkICAgPSAwO1xyXG4vLyAgICAgICAgdGhpcy5nb29kcyAgPSBuZXcgQ19Hb29kc0xpc3QoKTtcclxuICAgICAgICB0aGlzLmhlcm9lcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuaG9wZV9tb3Rpb24gPSAnTk9QJzsgICAgXHJcbiAgICAgICAgaWYgKGogIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BycChhcmcgOiBKU09OX1RlYW0pIHtcclxuICAgICAgICB0aGlzLmRlY29kZShhcmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1aWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudW5pcV9pZH1cclxuXHJcbiAgICBwdWJsaWMgd2l0aGluKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBoZXJlID0gdGhpcy53YWxrZXI/LmdldF9wKCk7XHJcbiAgICAgICAgcmV0dXJuIGhlcmU/LndpdGhpbihwKSA/PyBmYWxzZTsgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpZXcoKTogIElfTWF6ZU9ialZpZXd8dW5kZWZpbmVkIHtyZXR1cm4gdGhpcy5teVZpZXd9XHJcbiAgICBwdWJsaWMgd2FsaygpOiAgQ19XYWxrZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndhbGtlclxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgY2FuVGhyb3VnaCgpOiBib29sZWFuIHtyZXR1cm4gdHJ1ZX1cclxuXHJcblxyXG4gICAgcHVibGljIGhyZXMoKTogIENfSGVyb1tdIHtcclxuICAgICAgICBjb25zdCBocmVzOiBDX0hlcm9bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGlpIGluIHRoaXMuaGVyb2VzKSBocmVzLnB1c2godGhpcy5oZXJvZXNbaWldKTtcclxuICAgICAgICByZXR1cm4gaHJlcztcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgY2xlYXJfaHJlcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlcm9lcyA9IHt9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFkZF9oZXJvKGhlcm86IENfSGVybyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGVyb2VzW2hlcm8udWlkKCldID0gaGVybztcclxuICAgIH1cclxuICAgIHB1YmxpYyBybXZfaGVybyhoZXJvOiBDX0hlcm8pOiB2b2lkIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5oZXJvZXNbaGVyby51aWQoKV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldF9sb2MoKTogQ19Nb3ZhYmxlUG9pbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndhbGtlcjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfbG9jKGxvYzogQ19Nb3ZhYmxlUG9pbnQpOiB2b2lkIHtcclxuICAgICAgICAodGhpcy53YWxrZXIgPz89IG5ldyBDX1dhbGtlcigpKS5kZWNvZGUobG9jLmVuY29kZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X3BkKCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndhbGtlci5nZXRfcGQoKTtcclxuICAgIH1cclxuXHJcbi8qXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fb2JqX3RvX3N0cmluZyhvYTogQ19UZWFtKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2EsIG51bGwsIFwiXFx0XCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX29iakFycmF5X3RvX3N0cmluZyhvYWE6IHtbdWlkOiBzdHJpbmddOiBDX1RlYW19KTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBvYSA9IFtdIGFzIENfVGVhbVtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gb2FhKSBvYS5wdXNoKG9hYVtpaV0pO1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYSwgbnVsbCwgXCJcXHRcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fc3RyaW5nX3RvX29iaih0eHQ6IHN0cmluZyk6IENfVGVhbSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaiAgID0gSlNPTi5wYXJzZSh0eHQpIGFzIENfVGVhbVtdO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENfVGVhbShqKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDX1RlYW0oKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ190b19vYmpBcnJheSh0eHQ6IHN0cmluZyk6IHtbdWlkOiBzdHJpbmddOiBDX1RlYW19IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqICAgPSBKU09OLnBhcnNlKHR4dCkgYXMgSlNPTl9UZWFtW107XHJcbiAgICAgICAgICAgIGNvbnN0IG1wYSA9IHt9IGFzIHtbaWQ6IHN0cmluZ106IENfVGVhbX07XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgamogb2Ygaikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWFhID0gbmV3IENfVGVhbSgpLmRlY29kZShqaik7XHJcbiAgICAgICAgICAgICAgICBtcGFbYWFhLnVpZCgpXSA9IGFhYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbXBhO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuKi9cclxuICAgIFxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1RlYW0ge1xyXG4gICAgICAgIHRoaXMuZ2V0X2xvYygpOyAvLyBMb2NhdGlvbuaDheWgseOCkuacgOaWsOOBq+abtOaWsFxyXG5cclxuICAgICAgICBjb25zdCBqc29uX2hlcm9lczogSlNPTl9IZXJvW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpaSBpbiB0aGlzLmhlcm9lcykganNvbl9oZXJvZXMucHVzaCh0aGlzLmhlcm9lc1tpaV0uZW5jb2RlKCkpOyAgXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgICAgdGhpcy5teV9pZCxcclxuICAgICAgICAgICAgbmFtZTogICAgICB0aGlzLm15X25hbWUsXHJcbiAgICAgICAgICAgIHVuaXFfaWQ6ICAgdGhpcy51bmlxX2lkLFxyXG4gICAgICAgICAgICBzYXZlX2lkOiAgIHRoaXMuc2F2ZV9pZCxcclxuICAgICAgICAgICAgbG9jYXRlOiAgICB0aGlzLndhbGtlci5lbmNvZGUoKSxcclxuICAgICAgICAgICAgZ29sZDogICAgICB0aGlzLmdvbGQsXHJcbi8vICAgICAgICAgICAgZ29vZHM6ICAgICB0aGlzLmdvb2RzLmVuY29kZSgpLFxyXG4gICAgICAgICAgICBoZXJvZXM6ICAgIGpzb25faGVyb2VzLFxyXG4gICAgICAgICAgICBtb3Rpb246ICAgIHRoaXMuaG9wZV9tb3Rpb24sXHJcbiAgICAgICAgICAgIHZpZXc6ICAgICAgdGhpcy5teVZpZXc/LmVuY29kZSgpID8/IHt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IEpTT05fVGVhbXx1bmRlZmluZWQpOiBDX1RlYW0ge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpICByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGEuaWQgICAhPT0gdW5kZWZpbmVkKSAgICB0aGlzLm15X2lkICAgICAgID0gYS5pZDtcclxuICAgICAgICBpZiAoYS5uYW1lICE9PSB1bmRlZmluZWQpICAgIHRoaXMubXlfbmFtZSAgICAgPSBhLm5hbWU7XHJcbiAgICAgICAgaWYgKGEudW5pcV9pZCAhPT0gdW5kZWZpbmVkKSB0aGlzLnVuaXFfaWQgICAgID0gYS51bmlxX2lkO1xyXG4gICAgICAgIGlmIChhLnNhdmVfaWQgIT09IHVuZGVmaW5lZCkgdGhpcy5zYXZlX2lkICAgICA9IGEuc2F2ZV9pZDtcclxuICAgICAgICBpZiAoYS5tb3Rpb24gIT09IHVuZGVmaW5lZCkgIHRoaXMuaG9wZV9tb3Rpb24gPSBhLm1vdGlvbjtcclxuXHJcbiAgICAgICAgaWYgKGEubG9jYXRlICE9PSB1bmRlZmluZWQpICB0aGlzLndhbGtlci5kZWNvZGUoYS5sb2NhdGUpO1xyXG4gICAgICAgIGlmIChhLmdvbGQgICAhPT0gdW5kZWZpbmVkKSAgdGhpcy5nb2xkID0gYS5nb2xkO1xyXG4vLyAgICAgICAgaWYgKGEuZ29vZHMgICE9PSB1bmRlZmluZWQpICB0aGlzLmdvb2RzLmRlY29kZShhLmdvb2RzKTtcclxuXHJcbiAgICAgICAgaWYgKGEuaGVyb2VzICE9PSB1bmRlZmluZWQpICB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVyb2VzID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl9oZXJvIG9mIGEuaGVyb2VzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZXJvID0gbmV3IENfSGVybyhqc29uX2hlcm8pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZXJvZXNbaGVyby51aWQoKV0gPSBoZXJvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4vKlxyXG4gICAgICAgIGlmIChhLnZpZXcgICAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoYS52aWV3KS5sZW5ndGggPiAwKSB0aGlzLm15VmlldyA9IENfTWF6ZU9ialZpZXcubmV3T2JqKGEudmlldyk7IFxyXG4gICAgICAgICAgICBlbHNlIHRoaXMubXlWaWV3ID0gbmV3IENfQ3VycmVudFRlYW1WaWV3KHRoaXMpIGFzIElfTWF6ZU9ialZpZXc7IFxyXG4gICAgICAgIH1cclxuKi9cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZW5jb2RlX2FsbChhbGxfdGVhbTogQ19UZWFtW10pOiBKU09OX1RlYW1bXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX3RlYW1fZGF0YTogSlNPTl9UZWFtW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB0ZWFtIG9mIGFsbF90ZWFtKSB7XHJcbiAgICAgICAgICAgIGFsbF90ZWFtX2RhdGEucHVzaCh0ZWFtLmVuY29kZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbF90ZWFtX2RhdGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZV9hbGwoYWxsX3RlYW1fZGF0YTogSlNPTl9UZWFtW10pOiBDX1RlYW1bXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX3RlYW06IENfVGVhbVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgdGVhbV9kYXRhIG9mIGFsbF90ZWFtX2RhdGEpIHtcclxuICAgICAgICAgICAgYWxsX3RlYW0ucHVzaCgobmV3IENfVGVhbSgpKS5kZWNvZGUodGVhbV9kYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxfdGVhbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGFsZXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiVGVhbSBJbmZvOlwiIFxyXG4gICAgICAgICAgICArIFwiXFxuaWQ6ICAgIFwiICAgICArICh0aGlzLm15X2lkICAgICAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudW5pcV9pZDogIFwiICArICh0aGlzLnVuaXFfaWQgICAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubmFtZTogIFwiICAgICArICh0aGlzLm15X25hbWUgICAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2F2ZV9pZDogXCIgICArICh0aGlzLnNhdmVfaWQgICAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudXJsOiAgXCIgICAgICArICh0aGlzLndhbGtlci51cmwoKSAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubGNrZDogXCIgICAgICArICh0aGlzLndhbGtlci5nZXRfbGNrZF9zdHIoKSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sY25tOiBcIiAgICAgICsgKHRoaXMud2Fsa2VyLmdldF9uYW1lKCkgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxjaWQ6IFwiICAgICAgKyAodGhpcy53YWxrZXIuZ2V0X3VpZCgpICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuY3VyX3g6IFwiICAgICArICh0aGlzLndhbGtlci5nZXRfcCgpLnggPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuY3VyX3k6IFwiICAgICArICh0aGlzLndhbGtlci5nZXRfcCgpLnkgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuY3VyX3o6IFwiICAgICArICh0aGlzLndhbGtlci5nZXRfcCgpLnogPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuY3VyX2Q6IFwiICAgICArICh0aGlzLndhbGtlci5nZXRfZCgpICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuZ29sZDogXCIgICAgICArIChPYmplY3Qua2V5cyh0aGlzLmdvbGQgPz8ge30pLmxlbmd0aClcclxuICAgICAgICAgICAgKyBcIlxcbmhlcm9lczogXCIgICAgKyAodGhpcy5oZXJvZXM/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWxlcnRfaHJlcygpOiB2b2lkIHtcclxuLy8gICAgICAgIGFsZXJ0KFwiVGVhbSBJbmZvOlwiKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHRoaXMuaGVyb2VzKSB0aGlzLmhlcm9lc1tpaV0uYWxlcnQoKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IFRfRGlyZWN0aW9uIH0gICAgICAgZnJvbSAnLi9DX1BvaW50RGlyJztcclxuaW1wb3J0IHsgQ19UZWFtLCBKU09OX1RlYW0gfSBmcm9tIFwiLi9DX1RlYW1cIjtcclxuaW1wb3J0IHsgVF9XYWxsIH0gICAgICAgICAgICBmcm9tIFwiLi4vZF9tZGwvQ19XYWxsXCI7XHJcbmltcG9ydCB7IElfTWF6ZU9ialZpZXcsIEpTT05fTWF6ZU9ialZpZXcgfSAgZnJvbSBcIi4vQ19NYXplT2JqVmlld1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENfQ3VycmVudFRlYW1WaWV3ICBpbXBsZW1lbnRzIElfTWF6ZU9ialZpZXcge1xyXG4gICAgcHVibGljICBzdGF0aWMgbmV3T2JqKGo/OiBKU09OX1RlYW0pOiBJX01hemVPYmpWaWV3IHtcclxuICAgICAgICBjb25zdCB0ZWFtID0gbmV3IENfVGVhbShqKTtcclxuICAgICAgICByZXR1cm4gbmV3IENfQ3VycmVudFRlYW1WaWV3KHRlYW0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljICBuZXdPYmooaj86IEpTT05fVGVhbSk6IElfTWF6ZU9ialZpZXcge3JldHVybiBDX0N1cnJlbnRUZWFtVmlldy5uZXdPYmooail9XHJcblxyXG4gICAgXHJcbiAgICBwcml2YXRlIG15X3RlYW06IENfVGVhbTtcclxuICAgIHByaXZhdGUgbXlfbGF5ZXI6ICBudW1iZXIgPSA5OTtcclxuICAgIHB1YmxpYyAgY29uc3RydWN0b3IodGVhbTogQ19UZWFtKSB7XHJcbiAgICAgICAgdGhpcy5teV90ZWFtID0gdGVhbTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGF5ZXIoKTogbnVtYmVyICAgICAgICAge3JldHVybiB0aGlzLm15X2xheWVyO31cclxuICAgIHB1YmxpYyBzZXRfbGF5ZXIobGF5ZXI6IG51bWJlcik6IHZvaWQge3RoaXMubXlfbGF5ZXIgPSBsYXllcjt9XHJcbiAgICBwdWJsaWMgbGV0dGVyKCk6IHN0cmluZ3xudWxsIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubXlfdGVhbS53YWxrKCkuZ2V0X2QoKSkge1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHJldHVybiAn4oaRJztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOiByZXR1cm4gJ+KGkic7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogcmV0dXJuICfihpMnO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHJldHVybiAn4oaQJztcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuICfwn4yAJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2FuU2hvdygpOiBib29sZWFue3JldHVybiBmYWxzZX1cclxuICAgIHB1YmxpYyBkcm93M0QoZnJvdDogVF9XYWxsLCBiYWNrOiBUX1dhbGwpOiB2b2lkIHt9XHJcbiAgICBwdWJsaWMgcGFkX3QoKTogICBudW1iZXIge3JldHVybiAwLjB9IFxyXG4gICAgcHVibGljIHBhZF9kKCk6ICAgbnVtYmVyIHtyZXR1cm4gMC4wfSBcclxuICAgIHB1YmxpYyBwYWRfcygpOiAgIG51bWJlciB7cmV0dXJuIDAuMH0gXHJcbiAgICBwdWJsaWMgY29sX2YoKTogICBzdHJpbmd8bnVsbCB7cmV0dXJuIG51bGx9IFxyXG4gICAgcHVibGljIGNvbF9iKCk6ICAgc3RyaW5nfG51bGwge3JldHVybiBudWxsfSBcclxuICAgIHB1YmxpYyBjb2xfcygpOiAgIHN0cmluZ3xudWxsIHtyZXR1cm4gbnVsbH0gXHJcbiAgICBwdWJsaWMgY29sX3QoKTogICBzdHJpbmd8bnVsbCB7cmV0dXJuIG51bGx9IFxyXG4gICAgcHVibGljIGNvbF9kKCk6ICAgc3RyaW5nfG51bGwge3JldHVybiBudWxsfSBcclxuICAgIHB1YmxpYyBjb2xfbCgpOiAgIHN0cmluZ3xudWxsIHtyZXR1cm4gbnVsbH0gXHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX01hemVPYmpWaWV3IHtyZXR1cm4ge2NuYW1lOiAnQ3VycmVudFRlYW1WaWV3J319XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo6IEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkKTogSV9NYXplT2JqVmlldyB7cmV0dXJuIHRoaXMgYXMgSV9NYXplT2JqVmlld31cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfUG9pbnREaXIsIFRfRGlyZWN0aW9uIH0gICAgICAgICAgIGZyb20gXCIuL0NfUG9pbnREaXJcIjtcclxuaW1wb3J0IHsgQ19Nb3ZhYmxlUG9pbnQsIEpTT05fTW92YWJsZVBvaW50IH0gZnJvbSBcIi4vQ19Nb3ZhYmxlUG9pbnRcIjtcclxuaW1wb3J0IHsgSV9Mb2NhdGUgfSAgICAgZnJvbSBcIi4vQ19Mb2NhdGlvblwiO1xyXG5pbXBvcnQgeyBJX0hvcGVBY3Rpb24gfSBmcm9tIFwiLi9JX0NvbW1vblwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9XYWxrZXIgZXh0ZW5kcyBKU09OX01vdmFibGVQb2ludCB7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1dhbGtlciBleHRlbmRzIENfTW92YWJsZVBvaW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGo/OiBKU09OX1dhbGtlcikge1xyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF94KCk6IG51bWJlciB7cmV0dXJuIHRoaXMubG9jX3Bvcy54fVxyXG4gICAgcHVibGljIGdldF95KCk6IG51bWJlciB7cmV0dXJuIHRoaXMubG9jX3Bvcy55fVxyXG4gICAgcHVibGljIGdldF96KCk6IG51bWJlciB7cmV0dXJuIHRoaXMubG9jX3Bvcy56fVxyXG5cclxuICAgIHB1YmxpYyBzZXRfeCh4OiBudW1iZXIpOiB2b2lkIHt0aGlzLmxvY19wb3MueCA9IHh9XHJcbiAgICBwdWJsaWMgc2V0X3koeTogbnVtYmVyKTogdm9pZCB7dGhpcy5sb2NfcG9zLnkgPSB5fVxyXG4gICAgcHVibGljIHNldF96KHo6IG51bWJlcik6IHZvaWQge3RoaXMubG9jX3Bvcy56ID0gen1cclxuXHJcbiAgICBwdWJsaWMgc2V0X3BsYWNlKFxyXG4gICAgICAgIHBsYWNlOiBJX0xvY2F0ZSwgXHJcbiAgICAgICAgdXJsPzogIHN0cmluZywgXHJcbiAgICAgICAgcG9zPzogIENfUG9pbnREaXIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRfdWlkIChwbGFjZS51aWQoKSk7XHJcbiAgICAgICAgdGhpcy5zZXRfbGNrZChwbGFjZS5nZXRfbGNrZCgpKTtcclxuICAgICAgICB0aGlzLnNldF9uYW1lKHBsYWNlLmdldF9uYW1lKCkpO1xyXG5cclxuICAgICAgICBpZiAodXJsICE9PSB1bmRlZmluZWQpIHRoaXMuc2V0X3VybCh1cmwpO1xyXG4gICAgICAgIGlmIChwb3MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldF9wZChwb3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBob3BlX3BfZndkKCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIk1vdmVcIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy5nZXRfcF9md2QoKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLnNldF9wX2Z3ZCgpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhvcGVfcF9iYWsoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiTW92ZVwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wX2JhaygpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMuc2V0X3BfYmFrKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBob3BlX3BfbGZ0KCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIk1vdmVcIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy5nZXRfcF9sZnQoKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLnNldF9wX2xmdCgpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhvcGVfcF9yZ3QoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiTW92ZVwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wX3JndCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMuc2V0X3Bfcmd0KCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9wZV90dXJuX3IoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiVHVyblwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wZCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMudHVybl9yKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9wZV90dXJuX2woKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiVHVyblwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wZCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMudHVybl9sKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhvcGVfcF91cCgpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJVcFwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wX3VwKCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy5tb3ZlX3BfdXAoKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBob3BlX3BfZG93bigpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJEb3duXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMuZ2V0X3BfZG93bigpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMubW92ZV9wX2Rvd24oKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZV9wX3VwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3BfdXAoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBtb3ZlX3BfZG93bigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldF9wX2Rvd24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNORygpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXRfcF9md2QoKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19nZXRfcF9tb3ZlKDEsIDApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wX2Z3ZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldF9wZCh0aGlzLmdldF9wX2Z3ZCgpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfcF9iYWsoKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19nZXRfcF9tb3ZlKC0xLCAwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcF9iYWsoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRfcGQodGhpcy5nZXRfcF9iYWsoKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BfbGZ0KCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9fZ2V0X3BfbW92ZSgwLCAtMSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BfbGZ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3BkKHRoaXMuZ2V0X3BfbGZ0KCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wX3JndCgpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX2dldF9wX21vdmUoMCwgMSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3Bfcmd0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3BkKHRoaXMuZ2V0X3Bfcmd0KCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wX3VwKCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIGNvbnN0IHAgPSBuZXcgQ19Qb2ludERpcih0aGlzLmxvY19wb3MpO1xyXG4gICAgICAgIHAuei0tO1xyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wX3VwKCkge1xyXG4gICAgICAgIHRoaXMuc2V0X3BkKHRoaXMuZ2V0X3BfdXAoKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BfZG93bigpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICBjb25zdCBwID0gbmV3IENfUG9pbnREaXIodGhpcy5sb2NfcG9zKTtcclxuICAgICAgICBwLnorKztcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcF9kb3duKCkge1xyXG4gICAgICAgIHRoaXMuc2V0X3BkKHRoaXMuZ2V0X3BfZG93bigpKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2dldF9wX21vdmUob2Zmc2V0RkI6IG51bWJlciwgb2Zmc2V0TFI6IG51bWJlcik6IENfUG9pbnREaXIge1xyXG4gICAgICAgIGNvbnN0IHAgPSBuZXcgQ19Qb2ludERpcih0aGlzLmxvY19wb3MpO1xyXG4gICAgICAgIGlmIChvZmZzZXRGQiAhPT0gMCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMubG9jX3Bvcy5kKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHAueSAtPSBvZmZzZXRGQjticmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogcC54ICs9IG9mZnNldEZCO2JyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiBwLnkgKz0gb2Zmc2V0RkI7YnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHAueCAtPSBvZmZzZXRGQjticmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2Zmc2V0TFIgIT09IDApIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmxvY19wb3MuZCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiBwLnggKz0gb2Zmc2V0TFI7YnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHAueSArPSBvZmZzZXRMUjticmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogcC54IC09IG9mZnNldExSO2JyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiBwLnkgLT0gb2Zmc2V0TFI7YnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X2Fyb3VuZChmcm9udDogbnVtYmVyLCByaWdodDpudW1iZXIsIHVwOiBudW1iZXIgPSAwKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgdmFyIHRhcmdldF94ICA9IHRoaXMubG9jX3Bvcy54O1xyXG4gICAgICAgIHZhciB0YXJnZXRfeSAgPSB0aGlzLmxvY19wb3MueTtcclxuICAgICAgICB2YXIgdGFyZ2V0X3ogID0gdGhpcy5sb2NfcG9zLnogLSB1cDtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubG9jX3Bvcy5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjpcclxuICAgICAgICAgICAgICAgIHRhcmdldF94ICs9IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3kgLT0gZnJvbnQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3ggKz0gZnJvbnQ7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeSArPSByaWdodDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeCAtPSByaWdodDtcclxuICAgICAgICAgICAgICAgIHRhcmdldF95ICs9IGZyb250O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzpcclxuICAgICAgICAgICAgICAgIHRhcmdldF94IC09IGZyb250O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3kgLT0gcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX1BvaW50RGlyKHt4OiB0YXJnZXRfeCwgeTogdGFyZ2V0X3ksIHo6IHRhcmdldF96LCBkOiB0aGlzLmxvY19wb3MuZH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHR1cm5fcigpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubG9jX3Bvcy5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5FO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uUzticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLlc7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5OO2JyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyB0dXJuX2woKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmxvY19wb3MuZCkge1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uVzticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLk47YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5FO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uUzticmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdHVybl9iKCk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5sb2NfcG9zLmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLlM7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5XO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uTjticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLlc7YnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1dhbGtlciB7XHJcbiAgICAgICAgY29uc3QgaiA9IHN1cGVyLmVuY29kZSgpIGFzIEpTT05fV2Fsa2VyO1xyXG4gICAgICAgIHJldHVybiBqO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX1dhbGtlcik6IENfV2Fsa2VyIHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBzdXBlci5kZWNvZGUoYSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHtUX01ha2VFbnVtVHlwZX0gZnJvbSBcIi4uL2RfdXRsL1RfTWFrZUVudW1UeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVF9EaXJlY3Rpb24gPSB7XHJcbiAgICBOOiAgIDAsXHJcbiAgICBFOiAgIDEsXHJcbiAgICBTOiAgIDIsXHJcbiAgICBXOiAgIDMsXHJcbiAgICBYOiAgOTksXHJcbiAgICBNQVg6IDNcclxufSBhcyBjb25zdDtcclxuZXhwb3J0IHR5cGUgVF9EaXJlY3Rpb24gPSBUX01ha2VFbnVtVHlwZTx0eXBlb2YgVF9EaXJlY3Rpb24+O1xyXG5cclxuZXhwb3J0IHZhciAkRGlyZWN0aW9uTmFtZSA9IHtcclxuICAgIDA6ICAn5YyXJyxcclxuICAgIDE6ICAn5p2xJyxcclxuICAgIDI6ICAn5Y2XJyxcclxuICAgIDM6ICAn6KW/JyxcclxuICAgIDk5OiAn6KyOJ1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIC8vIOS4gOiIrOOBq+S9v+OBiOOCi+ODpuODvOODhuOCo+ODquODhuOCo+OBquWRquaWh1xyXG4gICAgLy8g44Kq44OW44K444Kn44Kv44OI44KS5YiX5oyZ5Z6L44Go44GX44Gm5Z6L5YyW44GZ44KL44Gu44Gr5Yip55SoXHJcbiAgICBpbXBvcnQge1RfTWFrZUVudW1UeXBlfSBmcm9tIFwiLi4vZF91dGwvVF9NYWtlRW51bVR5cGVcIjtcclxuXHJcbiAgICAvLyDjg4Djg7Pjgrjjg6fjg7Pjg57jg4Pjg5fjga7jgrvjg6vjga7nqK7poZ7jgpLooajjgZnliJfmjJnlnotcclxuICAgIC8vIE5vRGVmOiDmnKrlrprnvqnjg7vkuI3mmI5cclxuICAgIC8vIEZsb29yOiDluopcclxuICAgIC8vIFVuZXhwOiDmnKrouI/lnLBcclxuICAgIC8vIFN0b25lOiDnn7Plo4FcclxuICAgIC8vIFN0clVwOiDkuIrjgorpmo7mrrVcclxuICAgIC8vIFN0ckRuOiDkuIvjgorpmo7mrrVcclxuICAgIC8vIEVtcHR5OiDliJ3mnJ/nirbmhYvjg7vkvZXjgoLjgarjgZdcclxuICAgIC8vIFxyXG4gICAgLy8gZnVuY3Rpb24gdG9faW50KE16S2luZCk6ICAgICAgaW50ICAgICAgICDliJfmjJnlnovjgavlr77lv5zjgZnjgovlgKQo5pW05pWw5YCkKeOCkui/lOOBmVxyXG4gICAgLy8gZnVuY3Rpb24gZnJvbV9pbnQoaW50KTogICAgICAgVF9NektpbmQgICAgIOaVtOaVsOWApOOBq+WvvuW/nOOBmeOCi+WIl+aMmeWei+OCkui/lOOBmSjjgq/jg6njgrnjg6Hjgr3jg4Pjg4kpXHJcbiAgICAvLyBmdW5jdGlvbiB0b19sZXR0ZXIoTXpLaW5kKTogICBzdHJpbmcgICAgIOWIl+aMmeWei+OBq+WvvuW/nOOBmeOCi+aWh+Wtl+OCkui/lOOBmSjjg4Djg7Pjgrjjg6fjg7Pjga4yROihqOekuueUqClcclxuICAgIC8vIGZ1bmN0aW9uIGZyb21fbGV0dGVyKHN0cmluZyk6IFRfTXpLaW5kICAgICDmloflrZfjgavlr77lv5zjgZnjgovliJfmjJnlnovjgpLov5TjgZko44Kv44Op44K544Oh44K944OD44OJKVxyXG5cclxuICAgIGV4cG9ydCBjb25zdCBUX016S2luZDp7W2tleTogc3RyaW5nXTogbnVtYmVyfSAgPSB7XHJcbiAgICAgICAgTm9EZWY6ICAgMCxcclxuICAgICAgICBGbG9vcjogICAxLFxyXG4gICAgICAgIFVuZXhwOiAgIDIsXHJcbiAgICAgICAgU3RvbmU6ICAgMyxcclxuICAgICAgICBVbmt3bjogICA0LFxyXG4gICAgICAgIFN0clVwOiAgIDUsXHJcbiAgICAgICAgU3RyRG46ICAgNixcclxuICAgICAgICBTdHJVRDogICA3LFxyXG4gICAgICAgIEVtcHR5OiAyNTUsXHJcbiAgICB9IGFzIGNvbnN0O1xyXG4gICAgZXhwb3J0IHR5cGUgVF9NektpbmQgICA9IFRfTWFrZUVudW1UeXBlPHR5cGVvZiBUX016S2luZD47XHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IFRfUnZNektpbmQ6e1trZXk6IG51bWJlcl06IFRfTXpLaW5kfSAgPSB7XHJcbiAgICAgICAgMDogICBUX016S2luZC5Ob0RlZixcclxuICAgICAgICAxOiAgIFRfTXpLaW5kLkZsb29yLFxyXG4gICAgICAgIDI6ICAgVF9NektpbmQuVW5leHAsXHJcbiAgICAgICAgMzogICBUX016S2luZC5TdG9uZSxcclxuICAgICAgICA0OiAgIFRfTXpLaW5kLlVua3duLFxyXG4gICAgICAgIDU6ICAgVF9NektpbmQuU3RyVXAsXHJcbiAgICAgICAgNjogICBUX016S2luZC5TdHJEbixcclxuICAgICAgICA3OiAgIFRfTXpLaW5kLlN0clVELFxyXG4gICAgICAgIDI1NTogVF9NektpbmQuRW1wdHksXHJcbiAgICB9IGFzIGNvbnN0O1xyXG4gICAgZXhwb3J0IHR5cGUgVF9Sdk16S2luZCA9IFRfTWFrZUVudW1UeXBlPHR5cGVvZiBUX1J2TXpLaW5kPjtcclxuXHJcbiIsIi8vIOWIqeeUqOOCr+ODqeOCueetieOBruiqreOBv+i+vOOBv1xyXG5pbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xyXG5pbXBvcnQgeyBDX0RzcE1lc3NhZ2UgfSAgICAgICAgZnJvbSAnLi4vZF91dGwvQ19Ec3BNZXNzYWdlJzsgLy8g55S76Z2i44Oh44OD44K744O844K444Gu6KGo56S655So44Kv44Op44K5XHJcbmltcG9ydCB7IENfR3VpbGQsIEpTT05fR3VpbGQgfSBmcm9tIFwiLi4vZF9tZGwvQ19HdWlsZFwiO1xyXG5pbXBvcnQgeyBDX0hlcm9SREIgfSAgICAgICAgICAgZnJvbSAnLi9DX0hlcm9SREInO1xyXG5cclxudHlwZSBkYl9jb25uZWN0ID0gbXlzcWwuUG9vbENvbm5lY3Rpb247XHJcbmludGVyZmFjZSBJX3RibF9ndWxkIGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBpZDogICAgICBudW1iZXIsXHJcbiAgICBzYXZlX2lkOiBudW1iZXIsXHJcbiAgICB1bmlxX2lkOiBzdHJpbmcsXHJcbiAgICBuYW1lOiAgICBzdHJpbmcsXHJcbiAgICBnb2xkOiAgICBudW1iZXIsXHJcbi8vICAgIGdvb2RzOiAgIHN0cmluZyxcclxufVxyXG5pbnRlcmZhY2UgSV9sYXN0SW5zZXJ0IGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19HdWlsZFJEQiB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fcmRiX2FsbChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPENfR3VpbGRbXT4ge1xyXG4gICAgICAgIGNvbnN0IGd1bGRfYXJyYXkgPSBhd2FpdCBDX0d1aWxkUkRCLmdldF9mcm9tX3RibF9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBndWxkIG9mIGd1bGRfYXJyYXkpIHtcclxuICAgICAgICAgICAgY29uc3QgaHJlc19hcnJheSA9ICBhd2FpdCBDX0hlcm9SREIuZ2V0X2Zyb21fcmRiX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCwgZ3VsZC51aWQoKSk7XHJcbiAgICAgICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGhlcm8gb2YgaHJlc19hcnJheSkgZ3VsZC5hZGRfaGVybyhoZXJvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBndWxkX2FycmF5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHNldF90b19yZGIoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyLCBndWxkOiBDX0d1aWxkKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgZ3VsZF9pZCA9IGF3YWl0IENfR3VpbGRSREIuYWRkX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCwgZ3VsZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgaGVybyBvZiBndWxkLmhyZXMoKSkge1xyXG4gICAgICAgICAgICBhd2FpdCBDX0hlcm9SREIuc2V0X3RvX3JkYihkYl9tYWksIG1lcywgc2F2ZV9pZCwgZ3VsZC51aWQoKSwgaGVybyk7XHJcbiAgICAgICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gXHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RvX3JkYihkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIsIGd1bGRfdWlkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBhd2FpdCBDX0hlcm9SREIuZGVsX3RvX3JkYihkYl9tYWksIG1lcywgc2F2ZV9pZCwgZ3VsZF91aWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBDX0d1aWxkUkRCLmRlbF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBp+aMh+WumuOBleOCjOOBn2d1bGTjg6zjgrPjg7zjg4njgrvjg4Pjg4jjgpLoqq3jgb/ovrzjgb9cclxuICAgIC8vIEd1aWxk44Kv44Op44K544Gu6YWN5YiX44Gr44K744OD44OI44GZ44KLXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fdGJsX2FsbChcclxuICAgICAgICBkYl9tYWk6ICBkYl9jb25uZWN0LCBcclxuICAgICAgICBtZXM6ICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgIHNhdmVfaWQ6IG51bWJlcixcclxuICAgICk6IFByb21pc2U8Q19HdWlsZFtdPiB7XHJcbiAgICAgICAgY29uc3QgZ2V0X2d1bGRfU1FMID0gYFxyXG4gICAgICAgICAgICBTRUxFQ1QgXHRpZCwgc2F2ZV9pZCwgdW5pcV9pZCwgbmFtZSwgZ29sZFxyXG4gICAgICAgICAgICBGUk9NICAgIHRibF9ndWxkXHJcbiAgICAgICAgICAgIFdIRVJFICAgc2F2ZV9pZCA9IDpzYXZlX2lkXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZXN1bHRSZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpLnF1ZXJ5PElfdGJsX2d1bGRbXT4oZ2V0X2d1bGRfU1FMLCB7c2F2ZV9pZDogc2F2ZV9pZH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgNjc6ICR7Z2V0X2d1bGRfU1FMfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBpZiAocmVzdWx0UmVjb3JkU2V0Lmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBndWxkX2FycmF5ID0gW10gYXMgQ19HdWlsZFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgcnIgb2YgcmVzdWx0UmVjb3JkU2V0KSB7XHJcbiAgICAgICAgICAgIGd1bGRfYXJyYXkucHVzaChuZXcgQ19HdWlsZChDX0d1aWxkUkRCLmZyb21fc3RyaW5nQXJyYXlfdG9fSlNPTihycikpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGd1bGRfYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJndWxk44OG44O844OW44Or44Gr6Ieq6Lqr44Gu44OH44O844K/44KS6L+95YqgKGluc2VydCnjgZfjgaZcclxuICAgIC8vIOOBneOBrklEKGlkKeOCkui/lOOBmVxyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGFkZF90YmwoXHJcbiAgICAgICAgZGJfbWFpOiAgZGJfY29ubmVjdCwgXHJcbiAgICAgICAgbWVzOiAgICAgQ19Ec3BNZXNzYWdlLCBcclxuICAgICAgICBzYXZlX2lkOiBudW1iZXIsXHJcbiAgICAgICAgZ3VsZDogICAgQ19HdWlsZFxyXG4gICAgKTogUHJvbWlzZTxudW1iZXI+IHtcclxuXHJcbiAgICAgICAgY29uc3QgaW5zZXJ0X2d1bGRfU1FMID1gXHJcbiAgICAgICAgICAgIElOU0VSVCBJTlRPIHRibF9ndWxkICggc2F2ZV9pZCwgIHVuaXFfaWQsICBuYW1lLCAgZ29sZCApXHJcbiAgICAgICAgICAgIFZBTFVFUyAgICAgICAgICAgICAgKCA6c2F2ZV9pZCwgOnVuaXFfaWQsIDpuYW1lLCA6Z29sZCApXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IGogPSBndWxkLmVuY29kZSgpO1xyXG4gICAgICAgIGF3YWl0IGRiX21haS5xdWVyeShpbnNlcnRfZ3VsZF9TUUwsIHtcclxuICAgICAgICAgICAgc2F2ZV9pZDogIHNhdmVfaWQsICBcclxuICAgICAgICAgICAgdW5pcV9pZDogIGoudW5pcV9pZCwgIFxyXG4gICAgICAgICAgICBuYW1lOiAgICAgai5uYW1lLFxyXG4gICAgICAgICAgICBnb2xkOiAgICAgai5nb2xkLFxyXG4vLyAgICAgICAgICAgIGdvb2RzOiAgICBKU09OLnN0cmluZ2lmeShqLmdvb2RzKSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDYxOiAke2luc2VydF9ndWxkX1NRTH1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBDX0d1aWxkUkRCLmxhc3RJbnNlcnQoZGJfbWFpLCBtZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRibF90ZWFt44Gn5pyA5b6M44Gr6L+95Yqg44GX44Gf6KGM55Wq5Y+3KHNhdmVfaWQp44KS6L+U44GZ44CQMeihjOaMv+WFpeWwgueUqOOAkVxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBsYXN0SW5zZXJ0KGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UpIDogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBjb25zdCBsYXN0SW5zZXJ0X1NRTCA9YFxyXG4gICAgICAgICAgICBTRUxFQ1QgTEFTVF9JTlNFUlRfSUQoKSBhcyBpZCBGUk9NIHRibF9ndWxkO1xyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haS5xdWVyeTxJX2xhc3RJbnNlcnRbXT4obGFzdEluc2VydF9TUUwpXHJcbiAgICAgICAgLmNhdGNoICgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCA1MDA6ICR7bGFzdEluc2VydF9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlY29yZFNldC5sZW5ndGggPCAxKSByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIHJlY29yZFNldFswXS5pZDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZlX2lk44Gn5oyH5a6a44GV44KM44Gf44Os44Kz44O844OJKOikh+aVsCnjgpLliYrpmaQoZGVsZXRlKeOBmeOCi1xyXG4gICAgLy8gXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGRlbF90YmwoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlX2d1bGRfU1FMID0gYFxyXG4gICAgICAgICAgICBERUxFVEUgRlJPTSB0YmxfZ3VsZCBcclxuICAgICAgICAgICAgV0hFUkUgIHNhdmVfaWQgPSA6c2F2ZV9pZFxyXG4gICAgICAgIGBcclxuICAgICAgICBhd2FpdCBkYl9tYWkucXVlcnkoZGVsZXRlX2d1bGRfU1FMLHtzYXZlX2lkOiBzYXZlX2lkfSlcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDY4OiAke2RlbGV0ZV9ndWxkX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ0FycmF5X3RvX0pTT04oajogSV90YmxfZ3VsZCk6IEpTT05fR3VpbGQge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgIGouaWQsXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6IGouc2F2ZV9pZCxcclxuICAgICAgICAgICAgdW5pcV9pZDogai51bmlxX2lkLFxyXG4gICAgICAgICAgICBuYW1lOiAgICBqLm5hbWUsXHJcbiAgICAgICAgICAgIGdvbGQ6ICAgIGouZ29sZCxcclxuLy8gICAgICAgICAgICBnb29kczogICBKU09OLnBhcnNlKGouZ29vZHMpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCBteXNxbCBmcm9tICdteXNxbDIvcHJvbWlzZSc7XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9ICBmcm9tICcuLi9kX3V0bC9DX0RzcE1lc3NhZ2UnOyAvLyDnlLvpnaLjg6Hjg4Pjgrvjg7zjgrjjga7ooajnpLrnlKjjgq/jg6njgrlcclxuaW1wb3J0IHsgQ19IZXJvLCBKU09OX0hlcm8gfSAgZnJvbSAnLi4vZF9tZGwvQ19IZXJvJzsgXHJcblxyXG50eXBlIGRiX2Nvbm5lY3QgPSBteXNxbC5Qb29sQ29ubmVjdGlvbjtcclxuXHJcbmludGVyZmFjZSBJX3RibF9oZXJvIGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBpZDogICAgICAgIG51bWJlcjtcclxuICAgIHNhdmVfaWQ6ICAgbnVtYmVyO1xyXG4gICAgdW5pcV9pZDogICBzdHJpbmc7XHJcbiAgICBqb2luX3VpZDogIHN0cmluZzsgXHJcbiAgICBuYW1lOiAgICAgIHN0cmluZztcclxuICAgIHNleDogICAgICAgbnVtYmVyO1xyXG4gICAgYWdlOiAgICAgICBudW1iZXI7XHJcbiAgICBnb2xkOiAgICAgIG51bWJlcjtcclxuLy8gICAgZ29vZHM6ICAgICBzdHJpbmc7XHJcbiAgICBzdGF0ZTogICAgIG51bWJlcjtcclxuICAgIGx2OiAgICAgICAgbnVtYmVyO1xyXG4gICAgc2twX3R0bDogICBzdHJpbmc7XHJcbiAgICBza3Bfbm93OiAgIHN0cmluZztcclxuICAgIGV4cF90dGw6ICAgc3RyaW5nO1xyXG4gICAgZXhwX25vdzogICBzdHJpbmc7XHJcbiAgICBueGU6ICAgICAgIHN0cmluZztcclxuICAgIGFiaV9wX2JzYzogc3RyaW5nO1xyXG4gICAgYWJpX21fYnNjOiBzdHJpbmc7XHJcbiAgICBpc19hbGl2ZTogIG51bWJlcjtcclxufVxyXG5pbnRlcmZhY2UgSV9sYXN0SW5zZXJ0IGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19IZXJvUkRCIHtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fSGVybykge31cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldF9mcm9tX3JkYl9hbGwoXHJcbiAgICAgICAgZGJfbWFpOiAgIGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgIG1lczogICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgIHNhdmVfaWQ6ICBudW1iZXIsXHJcbiAgICAgICAgam9pbl91aWQ6IHN0cmluZ1xyXG4gICAgKTogUHJvbWlzZTxDX0hlcm9bXT5cclxuICAgIHtcclxuICAgICAgICBjb25zdCBocmVzX2FycmF5ID0gYXdhaXQgQ19IZXJvUkRCLmdldF9mcm9tX3RibF9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIGpvaW5fdWlkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhyZXNfYXJyYXk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc2V0X3RvX3JkYihcclxuICAgICAgICBkYl9tYWk6ICAgZGJfY29ubmVjdCwgXHJcbiAgICAgICAgbWVzOiAgICAgIENfRHNwTWVzc2FnZSwgXHJcbiAgICAgICAgc2F2ZV9pZDogIG51bWJlcixcclxuICAgICAgICBqb2luX3VpZDogc3RyaW5nLFxyXG4gICAgICAgIGhlcm86ICAgICBDX0hlcm8sXHJcbiAgICApOiBQcm9taXNlPGJvb2xlYW4+IFxyXG4gICAgeyBcclxuICAgICAgICBjb25zdCBoZXJvX2lkID0gYXdhaXQgQ19IZXJvUkRCLmFkZF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIGpvaW5fdWlkLCBoZXJvKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RvX3JkYl9hbGwoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgcnNsdCA9IGF3YWl0IENfSGVyb1JEQi5kZWxfdGJsX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RvX3JkYihkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIsIGpvaW5fdWlkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCByc2x0ID0gYXdhaXQgQ19IZXJvUkRCLmRlbF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIGpvaW5fdWlkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJpZOOBp+aMh+WumuOBleOCjOOBn2hlcm/jg6zjgrPjg7zjg4njgrvjg4Pjg4go5Y2Y5pWwKeOCkuiqreOBv+i+vOOBv1xyXG4gICAgLy8gSGVyb+OCr+ODqeOCueOBrumFjeWIl+OBq+OCu+ODg+ODiOOBmeOCi1xyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGdldF9mcm9tX3RibChcclxuICAgICAgICBkYl9tYWk6IGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgIG1lczogICAgQ19Ec3BNZXNzYWdlLCBcclxuICAgICAgICBpZDogICAgIG51bWJlcixcclxuICAgICk6IFByb21pc2U8Q19IZXJvfHVuZGVmaW5lZD4ge1xyXG4gICAgICAgIGNvbnN0IGdldF9oZXJvZXNfU1FMID0gYFxyXG4gICAgICAgICAgICBTRUxFQ1QgXHRpZCwgc2F2ZV9pZCwgdW5pcV9pZCwgam9pbl91aWQsIFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsIHNleCwgYWdlLCBnb2xkLCBzdGF0ZSwgbHYsICBcclxuICAgICAgICAgICAgICAgICAgICBza3BfdHRsLCBza3Bfbm93LCBleHBfdHRsLCBleHBfbm93LCBueGUsIFxyXG4gICAgICAgICAgICAgICAgICAgIGFiaV9wX2JzYywgYWJpX21fYnNjLCBpc19hbGl2ZSBcclxuICAgICAgICAgICAgRlJPTSAgICB0YmxfaGVyb1xyXG4gICAgICAgICAgICBXSEVSRSAgIGlkID0gOmlkXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZXN1bHRSZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpPy5xdWVyeTxJX3RibF9oZXJvW10+KGdldF9oZXJvZXNfU1FMLCB7aWQ6ICBpZH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMzdhOiAke2dldF9oZXJvZXNfU1FMfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHRSZWNvcmRTZXQubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKFwi44OH44O844K/44GM5pyJ44KK44G+44Gb44KTIDM5YTogeyRnZXRfaGVyb2VzX1NRTH1cIik7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQ19IZXJvKCkuZGVjb2RlKENfSGVyb1JEQi5mcm9tX3N0cmluZ0FycmF5X3RvX0pTT04ocmVzdWx0UmVjb3JkU2V0WzBdKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBqGpvaW5fdWlk44Gn5oyH5a6a44GV44KM44GfaGVyb+ODrOOCs+ODvOODieOCu+ODg+ODiCjopIfmlbAp44KS6Kqt44G/6L6844G/XHJcbiAgICAvLyBIZXJv44Kv44Op44K544Gu6YWN5YiX44Gr44K744OD44OI44GZ44KLXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fdGJsX2FsbChcclxuICAgICAgICBkYl9tYWk6ICAgZGJfY29ubmVjdCwgXHJcbiAgICAgICAgbWVzOiAgICAgIENfRHNwTWVzc2FnZSwgXHJcbiAgICAgICAgc2F2ZV9pZDogIG51bWJlcixcclxuICAgICAgICBqb2luX3VpZDogc3RyaW5nLFxyXG4gICAgKTogUHJvbWlzZTxDX0hlcm9bXT4ge1xyXG4gICAgICAgIGNvbnN0IGdldF9oZXJvZXNfU1FMID0gYFxyXG4gICAgICAgICAgICBTRUxFQ1QgXHRpZCwgc2F2ZV9pZCwgdW5pcV9pZCwgam9pbl91aWQsIFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsIHNleCwgYWdlLCBnb2xkLCBzdGF0ZSwgbHYsICBcclxuICAgICAgICAgICAgICAgICAgICBza3BfdHRsLCBza3Bfbm93LCBleHBfdHRsLCBleHBfbm93LCBueGUsIFxyXG4gICAgICAgICAgICAgICAgICAgIGFiaV9wX2JzYywgYWJpX21fYnNjLCBpc19hbGl2ZSBcclxuICAgICAgICAgICAgRlJPTSAgICB0YmxfaGVyb1xyXG4gICAgICAgICAgICBXSEVSRSAgIHNhdmVfaWQgPSA6c2F2ZV9pZCBBTkQgam9pbl91aWQgPSA6am9pbl91aWRcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3Jlc3VsdFJlY29yZFNldF0gPSBhd2FpdCBkYl9tYWk/LnF1ZXJ5PElfdGJsX2hlcm9bXT4oZ2V0X2hlcm9lc19TUUwsIHtzYXZlX2lkOiBzYXZlX2lkLCBqb2luX3VpZDogam9pbl91aWR9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDM3YjogJHtnZXRfaGVyb2VzX1NRTH1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0UmVjb3JkU2V0Lmxlbmd0aCA8IDEpIHtcclxuLy8gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKFwi44OH44O844K/44GM5pyJ44KK44G+44Gb44KTIDM5YjogeyRnZXRfaGVyb2VzX1NRTH1cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhyZXNfYXJyYXkgPSBbXSBhcyBDX0hlcm9bXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHJyIG9mIHJlc3VsdFJlY29yZFNldCkge1xyXG4gICAgICAgICAgICBocmVzX2FycmF5LnB1c2goKG5ldyBDX0hlcm8oKSkuZGVjb2RlKENfSGVyb1JEQi5mcm9tX3N0cmluZ0FycmF5X3RvX0pTT04ocnIpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBocmVzX2FycmF5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBEQuWHpueQhuOAgnRlYW3jg4bjg7zjg5bjg6vjgavoh6rouqvjga7jg4fjg7zjgr/jgpIx5Lu26L+95YqgKGluc2VydCnjgZfjgaZcclxuICAgIC8vIOOBneOBrklEKGlkKeOCkui/lOOBmVxyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGFkZF90YmwoXHJcbiAgICAgICAgZGJfbWFpOiAgIGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgIG1lczogICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgIHNhdmVfaWQ6ICBudW1iZXIsXHJcbiAgICAgICAgam9pbl91aWQ6IHN0cmluZyxcclxuICAgICAgICBoZXJvOiAgICAgQ19IZXJvLFxyXG4gICAgKTogUHJvbWlzZTxudW1iZXI+IHtcclxuXHJcbiAgICAgICAgY29uc3QgaW5zZXJ0X2hlcm9fU1FMID0gYFxyXG4gICAgICAgICAgICBJTlNFUlQgSU5UTyB0YmxfaGVybyAoXHJcbiAgICAgICAgICAgICAgICBzYXZlX2lkLCB1bmlxX2lkLCBqb2luX3VpZCwgXHJcbiAgICAgICAgICAgICAgICBuYW1lLCBzZXgsIGFnZSwgZ29sZCwgc3RhdGUsIGx2LCBcclxuICAgICAgICAgICAgICAgIHNrcF90dGwsIHNrcF9ub3csIGV4cF90dGwsIGV4cF9ub3csIG54ZSxcclxuICAgICAgICAgICAgICAgIGFiaV9wX2JzYywgYWJpX21fYnNjLCBpc19hbGl2ZSBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBWQUxVRVMgKCBcclxuICAgICAgICAgICAgICAgIDpzYXZlX2lkLCA6dW5pcV9pZCwgOmpvaW5fdWlkLCBcclxuICAgICAgICAgICAgICAgIDpuYW1lLCA6c2V4LCA6YWdlLCA6Z29sZCwgOnN0YXRlLCA6bHYsIFxyXG4gICAgICAgICAgICAgICAgOnNrcF90dGwsIDpza3Bfbm93LCA6ZXhwX3R0bCwgOmV4cF9ub3csIDpueGUsXHJcbiAgICAgICAgICAgICAgICA6YWJpX3BfYnNjLCA6YWJpX21fYnNjLCA6aXNfYWxpdmUgXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QganNvbkhlcm8gPSBoZXJvLmVuY29kZSgpO1xyXG4vL2RlYnVnXHJcbi8qXHJcbmNvbnNvbGUuZXJyb3IoXHJcbiAgICAgJyAgc2F2ZV9pZD0nICAgK3NhdmVfaWQgXHJcbiAgICArJywgam9pbl91aWQ9JyAgK2pvaW5fdWlkIFxyXG4gICAgKycsIHVuaXFfaWQ9JyAgICtqc29uSGVyby51bmlxX2lkIFxyXG4gICAgKycsIG5hbWU9JyAgICAgICtqc29uSGVyby5uYW1lXHJcbiAgICArJywgc2V4PScgICAgICAgK2pzb25IZXJvLnNleFxyXG4gICAgKycsIGFnZT0nICAgICAgICtqc29uSGVyby5hZ2VcclxuICAgICsnLCBnb2xkPScgICAgICAranNvbkhlcm8uZ29sZFxyXG4gICAgKycsIGdvb2RzPScgICAgICsoSlNPTi5zdHJpbmdpZnkoanNvbkhlcm8/Lmdvb2RzKT8/Jz8/PycpXHJcbiAgICArJywgc3RhdGU9JyAgICAgK2pzb25IZXJvLnN0YXRlXHJcbiAgICArJywgbHY9JyAgICAgICAgK2pzb25IZXJvLmx2XHJcbiAgICArJywgc2twX3R0bD0nICAgKyhqc29uSGVyby52YWw/LnNrcD8udHRsPz8nPz8/JylcclxuICAgICsnLCBza3Bfbm93PScgICArKGpzb25IZXJvLnZhbD8uc2twPy5ub3c/P2pzb25IZXJvLnZhbD8uc2twPy50dGw/Pyc/Pz8nKVxyXG4gICAgKycsIGV4cF90dGw9JyAgICsoanNvbkhlcm8udmFsPy5leHA/LnR0bD8/Jz8/PycpXHJcbiAgICArJywgZXhwX25vdz0nICAgKyhqc29uSGVyby52YWw/LmV4cD8ubm93Pz9qc29uSGVyby52YWw/LmV4cD8udHRsPz8nPz8/JylcclxuICAgICsnLCBueGU9JyAgICAgICArKGpzb25IZXJvLnZhbD8ubnhlPz8tMSlcclxuICAgICsnLCBhYmlfcF9ic2M9JyArKEpTT04uc3RyaW5naWZ5KGpzb25IZXJvLmFiaV9wX2JzYyk/Pyc/Pz8nKVxyXG4gICAgKycsIGFiaV9tX2JzYz0nICsoSlNPTi5zdHJpbmdpZnkoanNvbkhlcm8uYWJpX21fYnNjKT8/Jz8/PycpXHJcbiAgICArJywgaXNfYWxpdmU9JyAgKyhqc29uSGVyby5pc19hbGl2ZSAhPT0gJ04nID8gMSA6IDApXHJcbilcclxuKi9cclxuICAgICAgICBhd2FpdCBkYl9tYWkucXVlcnkoaW5zZXJ0X2hlcm9fU1FMLCB7XHJcbiAgICAgICAgICAgICdzYXZlX2lkJzogICBzYXZlX2lkLCBcclxuICAgICAgICAgICAgJ2pvaW5fdWlkJzogIGpvaW5fdWlkLCBcclxuICAgICAgICAgICAgJ3VuaXFfaWQnOiAgIGpzb25IZXJvLnVuaXFfaWQsIFxyXG4gICAgICAgICAgICAnbmFtZSc6ICAgICAganNvbkhlcm8ubmFtZSxcclxuICAgICAgICAgICAgJ3NleCc6ICAgICAgIGpzb25IZXJvLnNleCxcclxuICAgICAgICAgICAgJ2FnZSc6ICAgICAgIGpzb25IZXJvLmFnZSxcclxuICAgICAgICAgICAgJ2dvbGQnOiAgICAgIGpzb25IZXJvLmdvbGQsXHJcbi8vICAgICAgICAgICAgJ2dvb2RzJzogICAgIEpTT04uc3RyaW5naWZ5KGpzb25IZXJvLmdvb2RzKSxcclxuICAgICAgICAgICAgJ3N0YXRlJzogICAgIGpzb25IZXJvLnN0YXRlLFxyXG4gICAgICAgICAgICAnbHYnOiAgICAgICAganNvbkhlcm8ubHYsXHJcbiAgICAgICAgICAgICdza3BfdHRsJzogICBqc29uSGVyby52YWw/LnNrcD8udHRsPz8nJyxcclxuICAgICAgICAgICAgJ3NrcF9ub3cnOiAgIGpzb25IZXJvLnZhbD8uc2twPy5ub3c/P2pzb25IZXJvLnZhbD8uc2twPy50dGw/PycnLFxyXG4gICAgICAgICAgICAnZXhwX3R0bCc6ICAganNvbkhlcm8udmFsPy5leHA/LnR0bD8/JycsXHJcbiAgICAgICAgICAgICdleHBfbm93JzogICBqc29uSGVyby52YWw/LmV4cD8ubm93Pz9qc29uSGVyby52YWw/LmV4cD8udHRsPz8nJyxcclxuICAgICAgICAgICAgJ254ZSc6ICAgICAgIGpzb25IZXJvLnZhbD8ubnhlPz8tMSxcclxuICAgICAgICAgICAgJ2FiaV9wX2JzYyc6IEpTT04uc3RyaW5naWZ5KGpzb25IZXJvLmFiaV9wX2JzYyk/PycnLFxyXG4gICAgICAgICAgICAnYWJpX21fYnNjJzogSlNPTi5zdHJpbmdpZnkoanNvbkhlcm8uYWJpX21fYnNjKT8/JycsXHJcbiAgICAgICAgICAgICdpc19hbGl2ZSc6ICBqc29uSGVyby5pc19hbGl2ZSAhPT0gJ04nID8gMSA6IDAsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAzN2I6ICR7aW5zZXJ0X2hlcm9fU1FMfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gQ19IZXJvUkRCLmxhc3RJbnNlcnQoZGJfbWFpLCBtZXMpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgLy8gdGJsX2hlcm/jgafmnIDlvozjgavov73liqDjgZfjgZ/ooYznlarlj7coc2F2ZV9pZCnjgpLov5TjgZnjgJAx6KGM5oy/5YWl5bCC55So44CRXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGxhc3RJbnNlcnQoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSkgOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGNvbnN0IGxhc3RJbnNlcnRfU1FMID1gXHJcbiAgICAgICAgICAgIFNFTEVDVCBMQVNUX0lOU0VSVF9JRCgpIGFzIGlkIEZST00gdGJsX2hlcm87XHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpLnF1ZXJ5PElfbGFzdEluc2VydFtdPihsYXN0SW5zZXJ0X1NRTClcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDUwMDogJHtsYXN0SW5zZXJ0X1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAocmVjb3JkU2V0Lmxlbmd0aCA8IDEpIHJldHVybiAtMTtcclxuICAgICAgICByZXR1cm4gcmVjb3JkU2V0WzBdLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERC5Yem55CGKOOCr+ODqeOCueODu+ODoeOCveODg+ODiSnjgIJIZXJv44Kv44Op44K544Gu6YWN5YiX44KS5Y+X44GR5Y+W44Gj44Gm44CBXHJcbiAgICAvLyDmjIflrprjgZXjgozjgZ9zYXZlX2lk44Gn44CAaGVyb+ODhuODvOODluODq+OBq+i/veWKoChpbnNlcnQp44GX44GmXHJcbiAgICAvLyDjgZ3jga5JRChpZCnjga7phY3liJfjgpLov5TjgZlcclxuICAgIC8vIFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBhZGRfdGJsX2FsbChcclxuICAgICAgICBkYl9tYWk6ICAgICBkYl9jb25uZWN0LCBcclxuICAgICAgICBtZXM6ICAgICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgIHNhdmVfaWQ6ICAgIG51bWJlcixcclxuICAgICAgICBqb2luX3VpZDogICBzdHJpbmcsXHJcbiAgICAgICAgaGVyb19hcnJheSA6Q19IZXJvW10sIFxyXG4gICAgKTogUHJvbWlzZTxudW1iZXJbXT4gXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaGVyb19pZF9zZXQgPSBbXSBhcyBudW1iZXJbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGhlcm8gb2YgaGVyb19hcnJheSkge1xyXG4gICAgICAgICAgICBjb25zdCBoZXJvX2lkID0gYXdhaXQgQ19IZXJvUkRCLmFkZF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIGpvaW5fdWlkLCBoZXJvKTtcclxuICAgICAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICBoZXJvX2lkX3NldC5wdXNoKGhlcm9faWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGVyb19pZF9zZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvLyBEQuWHpueQhuOAgnNhdmVfaWTjgafmjIflrprjgZXjgozjgZ/jg6zjgrPjg7zjg4ko6KSH5pWwKeOCkuWJiumZpChkZWxldGUp44GZ44KLXHJcbiAgICAvLyBcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RibF9hbGwoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlX2hlcm9fU1FMID0gYFxyXG4gICAgICAgICAgICBERUxFVEUgRlJPTSB0YmxfaGVybyBcclxuICAgICAgICAgICAgV0hFUkUgIHNhdmVfaWQgPSA6c2F2ZV9pZCBcclxuICAgICAgICBgXHJcbiAgICAgICAgYXdhaXQgZGJfbWFpLnF1ZXJ5KGRlbGV0ZV9oZXJvX1NRTCx7c2F2ZV9pZDogc2F2ZV9pZH0pXHJcbiAgICAgICAgLmNhdGNoICgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAxNzogJHtkZWxldGVfaGVyb19TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZlX2lk44Goam9pbl91aWTjgafmjIflrprjgZXjgozjgZ/jg6zjgrPjg7zjg4ko6KSH5pWwKeOCkuWJiumZpChkZWxldGUp44GZ44KLXHJcbiAgICAvLyBcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RibChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIsIGpvaW5fdWlkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCBkZWxldGVfaGVyb19TUUwgPSBgXHJcbiAgICAgICAgICAgIERFTEVURSBGUk9NIHRibF9oZXJvIFxyXG4gICAgICAgICAgICBXSEVSRSAgc2F2ZV9pZCA9IDpzYXZlX2lkIEFORCAgam9pbl91aWQgPSA6am9pbl91aWRcclxuICAgICAgICBgXHJcbiAgICAgICAgYXdhaXQgZGJfbWFpLnF1ZXJ5KGRlbGV0ZV9oZXJvX1NRTCx7c2F2ZV9pZDogc2F2ZV9pZCwgam9pbl91aWQ6IGpvaW5fdWlkfSlcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDE4OiAke2RlbGV0ZV9oZXJvX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdBcnJheV90b19KU09OKGo6IElfdGJsX2hlcm8pOiBKU09OX0hlcm8ge1xyXG4gICAgICAgIGNvbnN0IGFiaV9wID0gSlNPTi5wYXJzZShqLmFiaV9wX2JzYyk7XHJcbiAgICAgICAgY29uc3QgYWJpX20gPSBKU09OLnBhcnNlKGouYWJpX21fYnNjKTtcclxuXHJcbiAgICAgICAgY29uc3QganNvbiAgPSB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgICAgai5pZCxcclxuICAgICAgICAgICAgc2F2ZV9pZDogICBqLnNhdmVfaWQsXHJcbiAgICAgICAgICAgIHVuaXFfaWQ6ICAgai51bmlxX2lkLFxyXG4gICAgICAgICAgICBuYW1lOiAgICAgIGoubmFtZSxcclxuICAgICAgICAgICAgc2V4OiAgICAgICBqLnNleCxcclxuICAgICAgICAgICAgYWdlOiAgICAgICBqLmFnZSxcclxuICAgICAgICAgICAgZ29sZDogICAgICBqLmdvbGQsXHJcbi8vICAgICAgICAgICAgZ29vZHM6ICAgICBKU09OLnBhcnNlKGouZ29vZHMpLFxyXG4gICAgICAgICAgICBzdGF0ZTogICAgIGouc3RhdGUsXHJcbiAgICAgICAgICAgIGx2OiAgICAgICAgai5sdixcclxuICAgICAgICAgICAgdmFsOiB7XHJcbiAgICAgICAgICAgICAgICBza3A6IHtcclxuICAgICAgICAgICAgICAgICAgICB0dGw6ICAgSlNPTi5wYXJzZShqLnNrcF90dGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdzogICBKU09OLnBhcnNlKGouc2twX25vdyksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXhwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHRsOiAgIEpTT04ucGFyc2Uoai5leHBfdHRsKSxcclxuICAgICAgICAgICAgICAgICAgICBub3c6ICAgSlNPTi5wYXJzZShqLmV4cF9ub3cpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG54ZTogICAgICAgSlNPTi5wYXJzZShqLm54ZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFiaV9wX2JzYzogICAgIEpTT04ucGFyc2Uoai5hYmlfcF9ic2MpLFxyXG4gICAgICAgICAgICBhYmlfbV9ic2M6ICAgICBKU09OLnBhcnNlKGouYWJpX21fYnNjKSxcclxuLypcclxuICAgICAgICAgICAgYWJpX3A6IHtcclxuICAgICAgICAgICAgICAgIGJzYzogYWJpX3AsXHJcbiAgICAgICAgICAgICAgICB0dGw6IGFiaV9wLFxyXG4gICAgICAgICAgICAgICAgbm93OiBhYmlfcCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWJpX206IHtcclxuICAgICAgICAgICAgICAgIGJzYzogYWJpX20sXHJcbiAgICAgICAgICAgICAgICB0dGw6IGFiaV9tLFxyXG4gICAgICAgICAgICAgICAgbm93OiBhYmlfbSxcclxuICAgICAgICAgICAgfSxcclxuICovXHJcbiAgICAgICAgICAgIGlzX2FsaXZlOiAgai5pc19hbGl2ZSAhPT0gMCA/IFwiWVwiIDogXCJOXCIsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIOWIqeeUqOOCr+ODqeOCueetieOBruiqreOBv+i+vOOBv1xyXG5pbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xyXG5pbXBvcnQgeyBDX0RzcE1lc3NhZ2UgfSAgICAgIGZyb20gJy4uL2RfdXRsL0NfRHNwTWVzc2FnZSc7IC8vIOeUu+mdouODoeODg+OCu+ODvOOCuOOBruihqOekuueUqOOCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX01hemUsIEpTT05fTWF6ZSB9IGZyb20gXCIuLi9kX21kbC9DX01hemVcIjtcclxuaW1wb3J0IHsgQ19IZXJvUkRCIH0gICAgICAgICBmcm9tICcuL0NfSGVyb1JEQic7XHJcblxyXG50eXBlIGRiX2Nvbm5lY3QgPSBteXNxbC5Qb29sQ29ubmVjdGlvbjtcclxuXHJcbmludGVyZmFjZSBJX3RibF9tYXplIGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBpZDogICAgICBudW1iZXIsXHJcbiAgICBzYXZlX2lkOiBudW1iZXIsXHJcbiAgICB1bmlxX2lkOiBzdHJpbmcsXHJcbiAgICBuYW1lOiAgICBzdHJpbmcsIFxyXG4gICAgc2l6ZV94OiAgbnVtYmVyLFxyXG4gICAgc2l6ZV95OiAgbnVtYmVyLFxyXG4gICAgc2l6ZV96OiAgbnVtYmVyLFxyXG4gICAgbWFwczogICAgc3RyaW5nLFxyXG4gICAgbWFzazogICAgc3RyaW5nLFxyXG59XHJcbmludGVyZmFjZSBJX2xhc3RJbnNlcnQgZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ19NYXplUkRCIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fcmRiX2FsbChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPENfTWF6ZVtdPiB7XHJcbiAgICAgICAgY29uc3QgbWF6ZV9hcnJheSA9IGF3YWl0IENfTWF6ZVJEQi5nZXRfZnJvbV90YmxfYWxsKGRiX21haSwgbWVzLCBzYXZlX2lkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hemVfYXJyYXk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc2V0X3RvX3JkYihkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIsIG1hemU6IENfTWF6ZSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IG1hc2VfaWQgPSBhd2FpdCBDX01hemVSREIuYWRkX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCwgbWF6ZSk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdG9fcmRiKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIENfTWF6ZVJEQi5kZWxfdGJsKGRiX21haSwgbWVzLCBzYXZlX2lkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBEQuWHpueQhuOAgnNhdmVfaWTjgafmjIflrprjgZXjgozjgZ9tYXpl44Os44Kz44O844OJ44K744OD44OI44KS6Kqt44G/6L6844G/XHJcbiAgICAvLyBNYXpl44Kv44Op44K544Gu6YWN5YiX44Gr44K744OD44OI44GZ44KLXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fdGJsX2FsbChcclxuICAgICAgICAgICAgZGJfbWFpOiBkYl9jb25uZWN0LCBcclxuICAgICAgICAgICAgbWVzOiBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgICAgICBzYXZlX2lkOiBudW1iZXJcclxuICAgICk6IFByb21pc2U8Q19NYXplW10+IHtcclxuICAgICAgICBjb25zdCBnZXRfbWF6ZV9TUUwgPSBgXHJcbiAgICAgICAgICAgIFNFTEVDVCBcdGlkLCBzYXZlX2lkLCB1bmlxX2lkLCBuYW1lLCBcclxuICAgICAgICAgICAgICAgICAgICBzaXplX3gsIHNpemVfeSwgc2l6ZV96LCBtYXBzLCBtYXNrIFxyXG4gICAgICAgICAgICBGUk9NIHRibF9tYXplXHJcbiAgICAgICAgICAgIFdIRVJFICAgc2F2ZV9pZCA9IDpzYXZlX2lkXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZXN1bHRSZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpLnF1ZXJ5PElfdGJsX21hemVbXT4oZ2V0X21hemVfU1FMLCB7c2F2ZV9pZDogc2F2ZV9pZH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMzM6ICR7Z2V0X21hemVfU1FMfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBpZiAocmVzdWx0UmVjb3JkU2V0Lmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtYXplX2FycmF5ID0gW10gYXMgQ19NYXplW107XHJcbiAgICAgICAgZm9yIChjb25zdCByciBvZiByZXN1bHRSZWNvcmRTZXQpIHtcclxuICAgICAgICAgICAgbWF6ZV9hcnJheS5wdXNoKG5ldyBDX01hemUoQ19NYXplUkRCLmZyb21fc3RyaW5nQXJyYXlfdG9fSlNPTihycikpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hemVfYXJyYXk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAvLyBEQuWHpueQhuOAgm1hemXjg4bjg7zjg5bjg6vjgavoh6rouqvjga7jg4fjg7zjgr/jgpLov73liqAoaW5zZXJ0KeOBl+OBplxyXG4gICAgLy8g44Gd44GuSUQobWF6ZV9pZCnjgpLov5TjgZlcclxuICAgIC8vIFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBhZGRfdGJsKFxyXG4gICAgICAgICAgICBkYl9tYWk6ICBkYl9jb25uZWN0LCBcclxuICAgICAgICAgICAgbWVzOiAgICAgQ19Ec3BNZXNzYWdlLCBcclxuICAgICAgICAgICAgc2F2ZV9pZDogbnVtYmVyLFxyXG4gICAgICAgICAgICBtYXplOiAgICBDX01hemVcclxuICAgICAgICApOiBQcm9taXNlPG51bWJlcj4ge1xyXG5cclxuICAgICAgICBjb25zdCBpbnNlcnRfbWF6ZV9TUUwgPSBgXHJcbiAgICAgICAgICAgIElOU0VSVCBJTlRPIHRibF9tYXplIChcclxuICAgICAgICAgICAgICAgIHNhdmVfaWQsIHVuaXFfaWQsIG5hbWUsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV94LCBzaXplX3ksIHNpemVfeiwgbWFwcywgbWFza1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIFZBTFVFUyAoXHJcbiAgICAgICAgICAgICAgICA6c2F2ZV9pZCwgOnVuaXFfaWQsIDpuYW1lLCBcclxuICAgICAgICAgICAgICAgIDpzaXplX3gsIDpzaXplX3ksIDpzaXplX3osIDptYXBzLCA6bWFzayBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBqID0gbWF6ZS5lbmNvZGUoKTtcclxuLy9EZWJ1Z1xyXG4vKlxyXG5jb25zb2xlLmVycm9yKFxyXG4gICAgICAgXCJzYXZlX2lkPVwiICsgc2F2ZV9pZFxyXG4gICAgK1wiLCB1bmlxX2lkPVwiICsgai51bmlxX2lkXHJcbiAgICArXCIsIG5hbWU9XCIgICAgKyBqLm5hbWVcclxuICAgICtcIiwgc2l6ZV94PVwiICArIGouc2l6ZV94XHJcbiAgICArXCIsIHNpemVfeT1cIiAgKyBqLnNpemVfeVxyXG4gICAgK1wiLCBzaXplX3o9XCIgICsgai5zaXplX3pcclxuICAgICtcIiwgbWFwcz1cIiAgICArIGoubWF6ZVxyXG4gICAgK1wiLCBtYXNrPVwiICAgICsgai5tYXNrXHJcbilcclxuKi9cclxuICAgICAgICBhd2FpdCBkYl9tYWkucXVlcnkoaW5zZXJ0X21hemVfU1FMLCB7XHJcbiAgICAgICAgICAgIHNhdmVfaWQ6IHNhdmVfaWQsXHJcbiAgICAgICAgICAgIHVuaXFfaWQ6IGoudW5pcV9pZCxcclxuICAgICAgICAgICAgbmFtZTogICAgai5uYW1lLFxyXG4gICAgICAgICAgICBzaXplX3g6ICBqLnNpemVfeCxcclxuICAgICAgICAgICAgc2l6ZV95OiAgai5zaXplX3ksXHJcbiAgICAgICAgICAgIHNpemVfejogIGouc2l6ZV96LFxyXG4gICAgICAgICAgICBtYXBzOiAgICBqLm1hemUsXHJcbiAgICAgICAgICAgIG1hc2s6ICAgIGoubWFzayxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDM6ICR7aW5zZXJ0X21hemVfU1FMfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIENfTWF6ZVJEQi5sYXN0SW5zZXJ0KGRiX21haSwgbWVzKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gdGJsX3RlYW3jgafmnIDlvozjgavov73liqDjgZfjgZ/ooYznlarlj7coc2F2ZV9pZCnjgpLov5TjgZnjgJAx6KGM5oy/5YWl5bCC55So44CRXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGxhc3RJbnNlcnQoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSkgOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGNvbnN0IGxhc3RJbnNlcnRfU1FMID1gXHJcbiAgICAgICAgICAgIFNFTEVDVCBMQVNUX0lOU0VSVF9JRCgpIGFzIGlkIEZST00gdGJsX21hemU7XHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpLnF1ZXJ5PElfbGFzdEluc2VydFtdPihsYXN0SW5zZXJ0X1NRTClcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDUwMDogJHtsYXN0SW5zZXJ0X1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAocmVjb3JkU2V0Lmxlbmd0aCA8IDEpIHJldHVybiAtMTtcclxuICAgICAgICByZXR1cm4gcmVjb3JkU2V0WzBdLmlkO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBEQuWHpueQhuOAgnNhdmVfaWTjgafmjIflrprjgZXjgozjgZ/jg6zjgrPjg7zjg4ko6KSH5pWwKeOCkuWJiumZpChkZWxldGUp44GZ44KLXHJcbiAgICAvLyBcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RibChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCBkZWxldGVfbWF6ZV9TUUwgPSBgXHJcbiAgICAgICAgICAgIERFTEVURSBGUk9NIHRibF9tYXplIFxyXG4gICAgICAgICAgICBXSEVSRSAgc2F2ZV9pZCA9IDpzYXZlX2lkXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGF3YWl0IGRiX21haS5xdWVyeShkZWxldGVfbWF6ZV9TUUwsIHtzYXZlX2lkOiBzYXZlX2lkfSlcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDEyOiAke2RlbGV0ZV9tYXplX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fc3RyaW5nQXJyYXlfdG9fSlNPTihqOiBJX3RibF9tYXplKTogSlNPTl9NYXplIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogICAgICBqLmlkLFxyXG4gICAgICAgICAgICB1bmlxX2lkOiBqLnVuaXFfaWQsXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6IGouc2F2ZV9pZCxcclxuICAgICAgICAgICAgbmFtZTogICAgai5uYW1lLFxyXG4gICAgICAgICAgICBzaXplX3g6ICBqLnNpemVfeCxcclxuICAgICAgICAgICAgc2l6ZV95OiAgai5zaXplX3ksXHJcbiAgICAgICAgICAgIHNpemVfejogIGouc2l6ZV96LFxyXG4gICAgICAgICAgICBtYXplOiAgICBqLm1hcHMsXHJcbiAgICAgICAgICAgIG1hc2s6ICAgIGoubWFzayxcclxuLy8gICAgICAgICAgICBvYmpzOiAgICBKU09OLnBhcnNlKGoub2JqcyksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iLCJcclxuLy8g5Yip55So44Kv44Op44K5562J44Gu6Kqt44G/6L6844G/XHJcbmltcG9ydCAgIG15c3FsICAgICAgICAgICAgZnJvbSBcIm15c3FsMi9wcm9taXNlXCI7XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9ICAgZnJvbSAnLi4vLi4vLi4vbWFpL3NyYy9kX3V0bC9DX0RzcE1lc3NhZ2UnOyAvLyDnlLvpnaLjg6Hjg4Pjgrvjg7zjgrjjga7ooajnpLrnlKjjgq/jg6njgrlcclxuaW1wb3J0IHsgQ19TYXZlRGF0YSB9ICAgICBmcm9tIFwiLi4vLi4vLi4vbWFpL3NyYy9kX21kbC9DX1NhdmVEYXRhXCI7XHJcbmltcG9ydCB7IENfU2F2ZUluZm8gfSAgICAgZnJvbSBcIi4uLy4uLy4uL21haS9zcmMvZF9tZGwvQ19TYXZlSW5mb1wiO1xyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCB9IGZyb20gXCIuLi8uLi8uLi9tYWkvc3JjL2RfbWRsL0NfTW92YWJsZVBvaW50XCI7XHJcbmltcG9ydCB7IENfVGVhbVJEQiB9ICAgICAgZnJvbSBcIi4vQ19UZWFtUkRCXCI7XHJcbmltcG9ydCB7IENfSGVyb1JEQiB9ICAgICAgZnJvbSBcIi4vQ19IZXJvUkRCXCI7XHJcbmltcG9ydCB7IENfTWF6ZVJEQiB9ICAgICAgZnJvbSBcIi4vQ19NYXplUkRCXCI7XHJcbmltcG9ydCB7IENfR3VpbGRSREIgfSAgICAgZnJvbSBcIi4vQ19HdWlsZFJEQlwiO1xyXG5cclxudHlwZSBkYl9jb25uZWN0ID0gbXlzcWwuUG9vbENvbm5lY3Rpb247XHJcblxyXG5pbnRlcmZhY2UgSV90YmxfU2F2ZUluZm8gZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0IHtcclxuICAgIHNhdmVfaWQ6ICAgbnVtYmVyO1xyXG4gICAgcGxheWVyX2lkOiBudW1iZXI7XHJcbiAgICB1bmlxX25vOiAgIG51bWJlcjsgXHJcbiAgICB0aXRsZTogICAgIHN0cmluZzsgXHJcbiAgICBkZXRhaWw6ICAgIHN0cmluZzsgXHJcbiAgICBwb2ludDogICAgIHN0cmluZzsgXHJcbiAgICBhdXRvX21vZGU6IHN0cmluZzsgXHJcbiAgICBpc19hY3RpdmU6IHN0cmluZzsgXHJcbiAgICBpc19kZWxldGU6IHN0cmluZzsgXHJcbiAgICBtcDogICAgICAgIHN0cmluZzsgIC8vIG15cG9zXHJcbiAgICBzYXZlX3RpbWU6IHN0cmluZztcclxufVxyXG5pbnRlcmZhY2UgSV90YmxfU2F2ZURhdGEgZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0ICB7XHJcbiAgICBzYXZlX2lkOiAgIG51bWJlcjtcclxuICAgIHBsYXllcl9pZDogbnVtYmVyO1xyXG4gICAgdW5pcV9ubzogICBudW1iZXI7IFxyXG4gICAgdGl0bGU6ICAgICBzdHJpbmc7IFxyXG4gICAgZGV0YWlsOiAgICBzdHJpbmc7IFxyXG4gICAgcG9pbnQ6ICAgICBzdHJpbmc7IFxyXG4gICAgYXV0b19tb2RlOiBzdHJpbmc7IFxyXG4gICAgaXNfYWN0aXZlOiBzdHJpbmc7IFxyXG4gICAgaXNfZGVsZXRlOiBzdHJpbmc7IFxyXG4gICAgbXA6ICAgICAgICBzdHJpbmc7ICAvLyBteXBvc1xyXG4gICAgc2F2ZV90aW1lOiBzdHJpbmc7XHJcbiAgICBtdnB0OiAgICAgIHN0cmluZzsgIC8vIGFsbF9tdnB0XHJcbn1cclxuaW50ZXJmYWNlIElfdGJsX1NhdmVJZCAgIGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBzYXZlX2lkOiBudW1iZXI7XHJcbn1cclxuaW50ZXJmYWNlIElfbGFzdEluc2VydCAgIGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19TYXZlSW5mb1JEQiB7XHJcbiAgICAvLyBEQuWHpueQhuOAgnBsYXllcl9k44Gr6Kmy5b2T44GZ44KL44K744O844OW44OH44O844K/44KSRELjgYvjgonoqq3jgb/ovrzjgb9cclxuICAgIC8vIFNhdmVJbmZvW13jga7phY3liJfjgpLov5TjgZlcclxuICAgIC8vIOmdnua0u+aAp+ODh+ODvOOCv+OChOWJiumZpOa4iOODh+ODvOOCv+OBr+OCueOCreODg+ODl+OBmeOCi1xyXG4gICAgLy8gXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldF9saXN0X2J5X3BpZChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBwbGF5ZXJfaWQ6IG51bWJlcik6IFByb21pc2U8Q19TYXZlSW5mb1tdPiB7XHJcbiAgICAgICAgY29uc3QgZ2V0X3NhdmVfU1FMID0gYFxyXG4gICAgICAgICAgICBTRUxFQ1Qgc2F2ZV9pZCwgcGxheWVyX2lkLCB1bmlxX25vLCB0aXRsZSwgZGV0YWlsLCBwb2ludCwgXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b19tb2RlLCBpc19hY3RpdmUsIGlzX2RlbGV0ZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgbXlwb3MgYXMgbXAsIFxyXG4gICAgICAgICAgICAgICAgICAgIERBVEVfRk9STUFUKHNhdmVfdGltZSwnJVktJW0tJWRUJUg6JWk6JXMuJWZaJykgQVMgc2F2ZV90aW1lXHJcbiAgICAgICAgICAgIEZST00gICB0Ymxfc2F2ZVxyXG4gICAgICAgICAgICBXSEVSRSAgcGxheWVyX2lkID0gOnBsYXllcl9pZCBcclxuICAgICAgICAgICAgT1JERVIgIEJZIHRpdGxlIENPTExBVEUgdXRmOG1iNF91bmljb2RlX2NpIEFTQ1xyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haS5xdWVyeTxJX3RibF9TYXZlSW5mb1tdPihnZXRfc2F2ZV9TUUwsIHtwbGF5ZXJfaWQ6IHBsYXllcl9pZH0pXHJcbiAgICAgICAgLmNhdGNoICgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCA1MDogJHtnZXRfc2F2ZV9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlY29yZFNldC5sZW5ndGggPCAxKSByZXR1cm4gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHNhdmVfZGF0YV9zZXQ6IENfU2F2ZUluZm9bXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gcmVjb3JkU2V0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZWNvcmRTZXRbaWldLmlzX2FjdGl2ZSA9PSAnMCcpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAocmVjb3JkU2V0W2lpXS5pc19kZWxldGUgIT0gJzAnKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNhdmUgPSBuZXcgQ19TYXZlSW5mbyhyZWNvcmRTZXRbaWldKTtcclxuICAgICAgICAgICAgc2F2ZS5teXBvcyAgICAgPSBDX01vdmFibGVQb2ludC5mcm9tX3N0cmluZ190b19vYmoocmVjb3JkU2V0W2lpXS5tcClcclxuICAgIFxyXG4gICAgICAgICAgICBzYXZlX2RhdGFfc2V0LnB1c2goc2F2ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzYXZlX2RhdGFfc2V0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBEQuWHpueQhuOAguODpuODi+ODvOOCr+ODu+ODiuODs+ODkOODvOOBi+OCiXNhdmVfaWTjgpLlvpfjgovjgILoqbLlvZPjgZnjgovjg6zjgrPjg7zjg4njgYznhKHjgZHjgozjgbDmiLvjgorlgKTjgactMeOCkui/lOOBmVxyXG4gICAgLy8gXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldF9zYXZlX2lkX2F0X3RibChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBwbGF5ZXJfaWQ6IG51bWJlcix1bmlxX25vOiBudW1iZXIpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGNvbnN0IHNlZWtfc2F2ZV9TUUwgPSBgXHJcbiAgICAgICAgICAgIFNFTEVDVCBzYXZlX2lkXHJcbiAgICAgICAgICAgIEZST00gICB0Ymxfc2F2ZVxyXG4gICAgICAgICAgICBXSEVSRSAgcGxheWVyX2lkID0gOnBsYXllcl9pZCBBTkQgdW5pcV9ubyA9IDp1bmlxX25vXHJcbiAgICAgICAgICAgIE9SREVSICBCWSB1bmlxX25vXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpLnF1ZXJ5PElfdGJsX1NhdmVJZFtdPihzZWVrX3NhdmVfU1FMLCB7cGxheWVyX2lkOiBwbGF5ZXJfaWQsIHVuaXFfbm86IHVuaXFfbm99KVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMjA6ICR7c2Vla19zYXZlX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAocmVjb3JkU2V0Lmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNOYU4ocmVjb3JkU2V0WzBdLnNhdmVfaWQpKSB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYHNhdmVfaWQg5pWw5YCk44Ko44Op44O8IDIxOiAke3JlY29yZFNldFswXS5zYXZlX2lkfSBgKTtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTnVtYmVyKHJlY29yZFNldFswXS5zYXZlX2lkKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ19TYXZlRGF0YVJEQiB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRfZnJvbV9yZGIoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyKTogUHJvbWlzZTxDX1NhdmVEYXRhfHVuZGVmaW5lZD4ge1xyXG4vL2RlYnVnIGNvbnNvbGUuZXJyb3IoYHByZSBnZXRfZnJvbSBTYXZlRGF0YVJEQiBzYXZlX2lkPSR7c2F2ZV9pZH1gKTtcclxuICAgICAgICBjb25zdCBzYXZlX2RhdGEgID0gYXdhaXQgQ19TYXZlRGF0YVJEQi5nZXRfZnJvbV90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChzYXZlX2RhdGEgPT09IHVuZGVmaW5lZCB8fCBtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuLy9kZWJ1ZyBjb25zb2xlLmVycm9yKGBwcmUgZ2V0X2Zyb20gTWF6ZVJEQiBzYXZlX2lkPSR7c2F2ZV9pZH1gKTtcclxuICAgICAgICBjb25zdCBtYXplX2FycmF5ID0gYXdhaXQgQ19NYXplUkRCLmdldF9mcm9tX3JkYl9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBtYXplIG9mIG1hemVfYXJyYXkpIHNhdmVfZGF0YS5hbGxfbWF6ZVttYXplLnVpZCgpXSA9IG1hemU7XHJcbiAgICAgICAgXHJcbi8vZGVidWcgY29uc29sZS5lcnJvcihgcHJlIGdldF9mcm9tIFRlYW1SREIgc2F2ZV9pZD0ke3NhdmVfaWR9YCk7XHJcbiAgICAgICAgY29uc3QgdGVhbV9hcnJheSA9IGF3YWl0IENfVGVhbVJEQi5nZXRfZnJvbV9yZGJfYWxsKGRiX21haSwgbWVzLCBzYXZlX2lkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IHRlYW0gb2YgdGVhbV9hcnJheSkgc2F2ZV9kYXRhLmFsbF90ZWFtW3RlYW0udWlkKCldID0gdGVhbTtcclxuICAgICAgICBcclxuLy9kZWJ1ZyBjb25zb2xlLmVycm9yKGBwcmUgZ2V0X2Zyb20gR3VpbGRSREIgc2F2ZV9pZD0ke3NhdmVfaWR9YCk7XHJcbiAgICAgICAgY29uc3QgZ3VsZF9hcnJheSA9IGF3YWl0IENfR3VpbGRSREIuZ2V0X2Zyb21fcmRiX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBndWxkIG9mIGd1bGRfYXJyYXkpIHNhdmVfZGF0YS5hbGxfZ3VsZFtndWxkLnVpZCgpXSA9IGd1bGQ7XHJcbiBcclxuICAgICAgICByZXR1cm4gc2F2ZV9kYXRhO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHNldF90b19yZGIoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZTogQ19TYXZlRGF0YXx1bmRlZmluZWQpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBpZiAoc2F2ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc2F2ZV9pZCA9IGF3YWl0IENfU2F2ZURhdGFSREIuYWRkX3RibChkYl9tYWksIG1lcywgc2F2ZSk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4vL2RlYnVnIGNvbnNvbGUuZXJyb3IoYHNhdmVfaWQgPSAke3NhdmVfaWR9YCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBpaSBpbiBzYXZlLmFsbF9tYXplKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IENfTWF6ZVJEQi5zZXRfdG9fcmRiKGRiX21haSwgbWVzLCBzYXZlX2lkLCBzYXZlLmFsbF9tYXplW2lpXSk7XHJcbiAgICAgICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHNhdmUuYWxsX3RlYW0pIHtcclxuICAgICAgICAgICAgYXdhaXQgQ19UZWFtUkRCLnNldF90b19yZGIoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIHNhdmUuYWxsX3RlYW1baWldKTtcclxuICAgICAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gc2F2ZS5hbGxfZ3VsZCkge1xyXG4gICAgICAgICAgICBhd2FpdCBDX0d1aWxkUkRCLnNldF90b19yZGIoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIHNhdmUuYWxsX2d1bGRbaWldKTtcclxuICAgICAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RvX3JkYihkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBhd2FpdCBDX0hlcm9SREIuZGVsX3RibF9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgQ19HdWlsZFJEQi5kZWxfdGJsKGRiX21haSwgbWVzLCBzYXZlX2lkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IENfVGVhbVJEQi5kZWxfdGJsKGRiX21haSwgbWVzLCBzYXZlX2lkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IENfTWF6ZVJEQi5kZWxfdGJsKGRiX21haSwgbWVzLCBzYXZlX2lkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IENfU2F2ZURhdGFSREIuZGVsX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZlX2lk44Gn5oyH5a6a44GV44KM44Gfc2F2ZeODrOOCs+ODvOODiSjljZjmlbAp44KS6Kqt44G/6L6844G/XHJcbiAgICAvLyBzYXZlX2RhdGHjgpLov5TjgZlcclxuICAgIC8vIFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBnZXRfZnJvbV90YmwoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyKTogUHJvbWlzZTxDX1NhdmVEYXRhfHVuZGVmaW5lZD4ge1xyXG4gICAgICAgIGNvbnN0IGdldF9zYXZlX1NRTCA9IGBcclxuICAgICAgICAgICAgU0VMRUNUICBzYXZlX2lkLCBwbGF5ZXJfaWQsIHVuaXFfbm8sIHRpdGxlLCBkZXRhaWwsIHBvaW50LCBcclxuICAgICAgICAgICAgICAgICAgICBhdXRvX21vZGUsIGlzX2FjdGl2ZSwgaXNfZGVsZXRlLCBcclxuICAgICAgICAgICAgICAgICAgICBteXBvcyBhcyBtcCwgREFURV9GT1JNQVQoc2F2ZV90aW1lLCclWS0lbS0lZFQlSDolaTolcy4lZlonKSBBUyBzYXZlX3RpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsX212cHQgYXMgbXZwdFxyXG4gICAgICAgICAgICBGUk9NICAgdGJsX3NhdmVcclxuICAgICAgICAgICAgV0hFUkUgIHNhdmVfaWQgPSA6c2F2ZV9pZFxyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haS5xdWVyeTxJX3RibF9TYXZlRGF0YVtdPihnZXRfc2F2ZV9TUUwsIHtzYXZlX2lkOiBzYXZlX2lkfSlcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDMwOiAke2dldF9zYXZlX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuXHJcbi8vZGVndWIgaWYgKHJlY29yZFNldCA9PT0gdW5kZWZpbmVkKSBjb25zb2xlLmVycm9yKGBTYXZlRGF0YVJEQi5nZXRfZnJvbV90YWJsZSBFcnJvcjogdW5kZWZpbmRlISEgc2F2ZV9pZD0ke3NhdmVfaWR9YCk7XHJcbiAgICAgICAgaWYgKHJlY29yZFNldC5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYOipsuW9k+OBmeOCi+ODh+ODvOOCv+OBjOacieOCiuOBvuOBm+OCkzogJHtnZXRfc2F2ZV9TUUx9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzYXZlID0gbmV3IENfU2F2ZURhdGEocmVjb3JkU2V0WzBdKTtcclxuICAgICAgICBzYXZlLm15cG9zICAgICA9IENfTW92YWJsZVBvaW50LmZyb21fc3RyaW5nX3RvX29iaihyZWNvcmRTZXRbMF0ubXApXHJcbiAgICAgICAgc2F2ZS5hbGxfbXZwdCAgPSBDX01vdmFibGVQb2ludC5mcm9tX3N0cmluZ190b19vYmpBcnJheShyZWNvcmRTZXRbMF0ubXZwdCk7XHJcbi8vICAgICAgICBzYXZlLmFsbF9tYXplICA9IENfTWF6ZSAuZnJvbV9zdHJpbmdfdG9fb2JqQXJyYXkocmVjb3JkU2V0WzBdLm1hemUpO1xyXG4vLyAgICAgICAgc2F2ZS5hbGxfdGVhbSAgPSBDX1RlYW0gLmZyb21fc3RyaW5nX3RvX29iakFycmF5KHJlY29yZFNldFswXS50ZWFtKTtcclxuLy8gICAgICAgIHNhdmUuYWxsX2d1bGQgID0gQ19HdWlsZC5mcm9tX3N0cmluZ190b19vYmpBcnJheShyZWNvcmRTZXRbMF0uZ3VsZCk7XHJcblxyXG4gICAgICAgIHJldHVybiBzYXZlO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZl44OG44O844OW44Or44Gr6Ieq6Lqr44Gu44OH44O844K/44KS6L+95YqgKGluc2VydCnjgZfjgaZcclxuICAgIC8vIOOBneOBrklEKHNhdmVfaWQp44KS6L+U44GZXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgYWRkX3RibChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlOiBDX1NhdmVEYXRhKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBjb25zdCBhdXRvX21vZGUgPSBzYXZlLmF1dG9fbW9kZSA/ICcxJyA6ICcwJztcclxuICAgICAgICBjb25zdCBpc19hY3RpdmUgPSBzYXZlLmlzX2FjdGl2ZSA/ICcxJyA6ICcwJztcclxuICAgICAgICBjb25zdCBpc19kZWxldGUgPSBzYXZlLmlzX2RlbGV0ZSA/ICcxJyA6ICcwJztcclxuXHJcbiAgICAgICAgY29uc3QgaW5zZXJ0X3NhdmVfU1FMID1gXHJcbiAgICAgICAgICAgIElOU0VSVCAgSU5UTyB0Ymxfc2F2ZSAoXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyX2lkLCB1bmlxX25vLCAgIHRpdGxlLCBkZXRhaWwsIHBvaW50LCBcclxuICAgICAgICAgICAgICAgICAgICBteXBvcywgYWxsX212cHQsIFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9fbW9kZSwgaXNfYWN0aXZlLCBpc19kZWxldGVcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgVkFMVUVTICggXHJcbiAgICAgICAgICAgICAgICAgICAgOnBsYXllcl9pZCwgOnVuaXFfbm8sICAgOnRpdGxlLCA6ZGV0YWlsLCA6cG9pbnQsIFxyXG4gICAgICAgICAgICAgICAgICAgIDpteXBvcywgOmFsbF9tdnB0LCBcclxuICAgICAgICAgICAgICAgICAgICA6YXV0b19tb2RlLCA6aXNfYWN0aXZlLCA6aXNfZGVsZXRlKVxyXG4gICAgICAgIGBcclxuICAgICAgICBhd2FpdCBkYl9tYWkucXVlcnkoaW5zZXJ0X3NhdmVfU1FMLCB7XHJcbiAgICAgICAgICAgIHBsYXllcl9pZDogc2F2ZS5wbGF5ZXJfaWQsXHJcbiAgICAgICAgICAgIHVuaXFfbm86ICAgc2F2ZS51bmlxX25vLFxyXG4gICAgICAgICAgICB0aXRsZTogICAgIHNhdmUudGl0bGUsXHJcbiAgICAgICAgICAgIGRldGFpbDogICAgc2F2ZS5kZXRhaWwsXHJcbiAgICAgICAgICAgIHBvaW50OiAgICAgc2F2ZS5wb2ludCxcclxuICAgICAgICAgICAgbXlwb3M6ICAgICBDX01vdmFibGVQb2ludC5mcm9tX29ial90b19zdHJpbmcoc2F2ZS5teXBvcyksXHJcbiAgICAgICAgICAgIGFsbF9tdnB0OiAgQ19Nb3ZhYmxlUG9pbnQuZnJvbV9vYmpBcnJheV90b19zdHJpbmcoc2F2ZS5hbGxfbXZwdCksXHJcbiAgICAgICAgICAgIGF1dG9fbW9kZTogYXV0b19tb2RlLFxyXG4gICAgICAgICAgICBpc19hY3RpdmU6IGlzX2FjdGl2ZSxcclxuICAgICAgICAgICAgaXNfZGVsZXRlOiBpc19kZWxldGUsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDA6ICR7aW5zZXJ0X3NhdmVfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIC0xXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIENfU2F2ZURhdGFSREIubGFzdEluc2VydChkYl9tYWksIG1lcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHRibF9zYXZlX2RhdGHjgafmnIDlvozjgavov73liqDjgZfjgZ/ooYznlarlj7coc2F2ZV9pZCnjgpLov5TjgZnjgJAx6KGM5oy/5YWl5bCC55So44CRXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGxhc3RJbnNlcnQoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSkgOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGNvbnN0IGxhc3RJbnNlcnRfU1FMID1gXHJcbiAgICAgICAgICAgIFNFTEVDVCBMQVNUX0lOU0VSVF9JRCgpIGFzIGlkIEZST00gdGJsX3NhdmU7XHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpLnF1ZXJ5PElfbGFzdEluc2VydFtdPihsYXN0SW5zZXJ0X1NRTClcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDUwMDogJHtsYXN0SW5zZXJ0X1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAocmVjb3JkU2V0Lmxlbmd0aCA8IDEpIHJldHVybiAtMTtcclxuICAgICAgICByZXR1cm4gcmVjb3JkU2V0WzBdLmlkO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBEQuWHpueQhuOAgnNhdmVfaWTjgafmjIflrprjgZXjgozjgZ/jg6zjgrPjg7zjg4njgpLliYrpmaQoZGVsZXRlKeOBmeOCi1xyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGRlbF90YmwoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlX3NhdmVfU1FMID0gYFxyXG4gICAgICAgICAgICBERUxFVEUgRlJPTSB0Ymxfc2F2ZSBcclxuICAgICAgICAgICAgV0hFUkUgIHNhdmVfaWQgPSA6c2F2ZV9pZFxyXG4gICAgICAgIGBcclxuICAgICAgICBhd2FpdCBkYl9tYWkucXVlcnkoZGVsZXRlX3NhdmVfU1FMLCB7XHJcbiAgICAgICAgICAgIHNhdmVfaWQgIDogc2F2ZV9pZCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMTA6ICR7ZGVsZXRlX3NhdmVfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIOWIqeeUqOOCr+ODqeOCueetieOBruiqreOBv+i+vOOBv1xyXG5pbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xyXG5pbXBvcnQgeyBDX0RzcE1lc3NhZ2UgfSAgICAgICBmcm9tICcuLi9kX3V0bC9DX0RzcE1lc3NhZ2UnOyAvLyDnlLvpnaLjg6Hjg4Pjgrvjg7zjgrjjga7ooajnpLrnlKjjgq/jg6njgrlcclxuaW1wb3J0IHsgQ19UZWFtLCBKU09OX1RlYW0gfSAgZnJvbSBcIi4uL2RfbWRsL0NfVGVhbVwiO1xyXG5pbXBvcnQgeyBDX0hlcm9SREIgfSAgICAgICAgICBmcm9tICcuL0NfSGVyb1JEQic7XHJcblxyXG50eXBlIGRiX2Nvbm5lY3QgPSBteXNxbC5Qb29sQ29ubmVjdGlvbjtcclxuXHJcbmludGVyZmFjZSBJX3RibF90ZWFtIGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgc2F2ZV9pZDogbnVtYmVyLFxyXG4gICAgdW5pcV9pZDogc3RyaW5nLFxyXG4gICAgbmFtZTogICAgc3RyaW5nLFxyXG4gICAgbG9jYXRlOiAgc3RyaW5nLFxyXG4gICAgZ29sZDogICAgbnVtYmVyLFxyXG4vLyAgICBnb29kczogICBzdHJpbmcsXHJcbn1cclxuaW50ZXJmYWNlIElfbGFzdEluc2VydCBleHRlbmRzIG15c3FsLlJvd0RhdGFQYWNrZXQge1xyXG4gICAgaWQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfVGVhbVJEQiB7IFxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldF9mcm9tX3JkYl9hbGwoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyKTogUHJvbWlzZTxDX1RlYW1bXT4ge1xyXG4gICAgICAgIGNvbnN0IHRlYW1fYXJyYXkgPSBhd2FpdCBDX1RlYW1SREIuZ2V0X2Zyb21fdGJsX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgdGVhbSBvZiB0ZWFtX2FycmF5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhyZXNfYXJyYXkgPSBhd2FpdCBDX0hlcm9SREIuZ2V0X2Zyb21fcmRiX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCwgdGVhbS51aWQoKSk7XHJcbiAgICAgICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGhlcm8gb2YgaHJlc19hcnJheSkgdGVhbS5hZGRfaGVybyhoZXJvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRlYW1fYXJyYXk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fcmRiKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlciwgdGVhbTogQ19UZWFtKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgcnNsdDAgPSBhd2FpdCBDX1RlYW1SREIuZ2V0X2Zyb21fdGJsKGRiX21haSwgbWVzLCBzYXZlX2lkLCB0ZWFtLnVpZCgpKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaHJlc19hcnJheSA9IGF3YWl0IENfSGVyb1JEQi5nZXRfZnJvbV9yZGJfYWxsKGRiX21haSwgbWVzLCBzYXZlX2lkLCB0ZWFtLnVpZCgpKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBoZXJvIG9mIGhyZXNfYXJyYXkpIHRlYW0uYWRkX2hlcm8oaGVybyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc2V0X3RvX3JkYihcclxuICAgICAgICBkYl9tYWk6ICBkYl9jb25uZWN0LFxyXG4gICAgICAgIG1lczogICAgIENfRHNwTWVzc2FnZSxcclxuICAgICAgICBzYXZlX2lkOiBudW1iZXIsXHJcbiAgICAgICAgdGVhbTogICAgQ19UZWFtXHJcbiAgICApOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCB0ZWFtX2lkID0gYXdhaXQgQ19UZWFtUkRCLmFkZF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIHRlYW0pO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGhlcm8gb2YgdGVhbS5ocmVzKCkpIHtcclxuICAgICAgICAgICAgYXdhaXQgQ19IZXJvUkRCLnNldF90b19yZGIoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIHRlYW0udWlkKCksIGhlcm8pO1xyXG4gICAgICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGRlbF90b19yZGIoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyLCB0ZWFtX3VpZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgYXdhaXQgQ19IZXJvUkRCLmRlbF90b19yZGIoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIHRlYW1fdWlkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgQ19UZWFtUkRCLmRlbF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBp+aMh+WumuOBleOCjOOBn3RlYW3jg6zjgrPjg7zjg4njgrvjg4Pjg4jjgpLoqq3jgb/ovrzjgb9cclxuICAgIC8vIFRlYW3jgq/jg6njgrnjga7phY3liJfjgavjgrvjg4Pjg4jjgZnjgotcclxuICAgIC8vIFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBnZXRfZnJvbV90YmxfYWxsKFxyXG4gICAgICAgIGRiX21haTogIGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgIG1lczogICAgIENfRHNwTWVzc2FnZSwgXHJcbiAgICAgICAgc2F2ZV9pZDogbnVtYmVyLFxyXG4gICAgKTogUHJvbWlzZTxDX1RlYW1bXT4ge1xyXG4gICAgICAgIGNvbnN0IGdldF90ZWFtX1NRTCA9YFxyXG4gICAgICAgICAgICBTRUxFQ1QgXHRpZCwgc2F2ZV9pZCwgdW5pcV9pZCwgbmFtZSwgbG9jYXRlLCBnb2xkXHJcbiAgICAgICAgICAgIEZST00gdGJsX3RlYW1cclxuICAgICAgICAgICAgV0hFUkUgICBzYXZlX2lkID0gOnNhdmVfaWRcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3Jlc3VsdFJlY29yZFNldF0gPSBhd2FpdCBkYl9tYWkucXVlcnk8SV90YmxfdGVhbVtdPihnZXRfdGVhbV9TUUwsIHtzYXZlX2lkOiBzYXZlX2lkfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAzN2E6ICR7Z2V0X3RlYW1fU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKHJlc3VsdFJlY29yZFNldC5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdGVhbV9hcnJheSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgcnIgb2YgcmVzdWx0UmVjb3JkU2V0KSB7XHJcbiAgICAgICAgICAgIHRlYW1fYXJyYXkucHVzaChuZXcgQ19UZWFtKENfVGVhbVJEQi5mcm9tX3N0cmluZ0FycmF5X3RvX0pTT04ocnIpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZWFtX2FycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBqOiHqui6q+OBrnVuaXFfaWTjgafmjIflrprjgZXjgozjgZ90ZWFt44Os44Kz44O844OJ44K744OD44OI44KS6Kqt44G/6L6844KAXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fdGJsKFxyXG4gICAgICAgIGRiX21haTogICBkYl9jb25uZWN0LCBcclxuICAgICAgICBtZXM6ICAgICAgQ19Ec3BNZXNzYWdlLCBcclxuICAgICAgICBzYXZlX2lkOiAgbnVtYmVyLFxyXG4gICAgICAgIGpvaW5fdWlkOiBzdHJpbmcsXHJcbiAgICApOiBQcm9taXNlPENfVGVhbXx1bmRlZmluZWQ+IHtcclxuICAgICAgICBjb25zdCBnZXRfdGVhbV9TUUwgPSBgXHJcbiAgICAgICAgICAgIFNFTEVDVCBcdGlkLCBzYXZlX2lkLCB1bmlxX2lkLCBuYW1lLCBsb2NhdGUsIGdvbGQgXHJcbiAgICAgICAgICAgIEZST00gdGJsX3RlYW1cclxuICAgICAgICAgICAgV0hFUkUgICBzYXZlX2lkID0gOnNhdmVfaWQgIEFORCAgdW5pcV9pZCA9IDp1bmlxX2lkXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZXN1bHRSZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpLnF1ZXJ5PElfdGJsX3RlYW1bXT4oZ2V0X3RlYW1fU1FMLCB7c2F2ZV9pZDogc2F2ZV9pZCwgam9pbl91aWQ6IGpvaW5fdWlkfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAzN2I6ICR7Z2V0X3RlYW1fU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKHJlc3VsdFJlY29yZFNldC5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoJ1VuaXFfaWTjgavoqbLlvZPjgZnjgotUZWFt44OH44O844K/44GM5pyJ44KK44G+44Gb44KTJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQ19UZWFtKENfVGVhbVJEQi5mcm9tX3N0cmluZ0FycmF5X3RvX0pTT04ocmVzdWx0UmVjb3JkU2V0WzBdKSlcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC8vIERC5Yem55CG44CCdGVhbeODhuODvOODluODq+OBq0NfVGVhbeOBruODh+ODvOOCv+OCkui/veWKoChpbnNlcnQp44GX44GmXHJcbiAgICAvLyDjgZ3jga5JRChpZCnjgpLov5TjgZlcclxuICAgIC8vIFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBhZGRfdGJsKFxyXG4gICAgICAgIGRiX21haTogIGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgIG1lczogICAgIENfRHNwTWVzc2FnZSwgXHJcbiAgICAgICAgc2F2ZV9pZDogbnVtYmVyLFxyXG4gICAgICAgIHRlYW06ICAgIENfVGVhbSxcclxuICAgICk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgY29uc3QgaW5zZXJ0X3RlYW1fU1FMID0gYFxyXG4gICAgICAgICAgICBJTlNFUlQgSU5UTyB0YmxfdGVhbSAoXHJcbiAgICAgICAgICAgICAgICBzYXZlX2lkLCB1bmlxX2lkLCBuYW1lLCBsb2NhdGUsIGdvbGRcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBWQUxVRVMgKCBcclxuICAgICAgICAgICAgICAgIDpzYXZlX2lkLCA6dW5pcV9pZCwgOm5hbWUsIDpsb2NhdGUsIDpnb2xkXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgaiA9IHRlYW0uZW5jb2RlKCk7XHJcbi8vY29uc29sZS5lcnJvcihgJHtzYXZlX2lkfSwgJHtqLnVuaXFfaWR9LCAke2oubmFtZX0sICR7SlNPTi5zdHJpbmdpZnkoai5sb2NhdGUpfSwgJHtKU09OLnN0cmluZ2lmeShqLmdvbGQpfWApO1xyXG4gICAgICAgIGF3YWl0IGRiX21haS5xdWVyeShpbnNlcnRfdGVhbV9TUUwsIHtcclxuICAgICAgICAgICAgc2F2ZV9pZCA6IHNhdmVfaWQsICBcclxuICAgICAgICAgICAgdW5pcV9pZCA6IGoudW5pcV9pZCwgXHJcbiAgICAgICAgICAgIG5hbWUgICAgOiBqLm5hbWUsIFxyXG4gICAgICAgICAgICBsb2NhdGUgIDogSlNPTi5zdHJpbmdpZnkoai5sb2NhdGUpLCBcclxuICAgICAgICAgICAgZ29sZCAgICA6IGouZ29sZCwgIFxyXG4vLyAgICAgICAgICAgIGdvb2RzICAgOiBKU09OLnN0cmluZ2lmeShqLmdvb2RzKSwgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgNjogJHtpbnNlcnRfdGVhbV9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBDX1RlYW1SREIubGFzdEluc2VydChkYl9tYWksIG1lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGJsX3RlYW3jgafmnIDlvozjgavov73liqDjgZfjgZ/ooYznlarlj7coc2F2ZV9pZCnjgpLov5TjgZnjgJAx6KGM5oy/5YWl5bCC55So44CRXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGxhc3RJbnNlcnQoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSkgOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGNvbnN0IGxhc3RJbnNlcnRfU1FMID1gXHJcbiAgICAgICAgICAgIFNFTEVDVCBMQVNUX0lOU0VSVF9JRCgpIGFzIGlkIEZST00gdGJsX3RlYW07XHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpLnF1ZXJ5PElfbGFzdEluc2VydFtdPihsYXN0SW5zZXJ0X1NRTClcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDUwMDogJHtsYXN0SW5zZXJ0X1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAocmVjb3JkU2V0Lmxlbmd0aCA8IDEpIHJldHVybiAtMTtcclxuICAgICAgICByZXR1cm4gcmVjb3JkU2V0WzBdLmlkO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBEQuWHpueQhijjgq/jg6njgrnjg7vjg6Hjgr3jg4Pjg4kp44CCVGVhbeOCr+ODqeOCueOBrumFjeWIl+OCkuWPl+OBkeWPluOBo+OBpuOAgVxyXG4gICAgLy8g5oyH5a6a44GV44KM44Gfc2F2ZV9pZOOBp+OAgHRlYW3jg4bjg7zjg5bjg6vjgavov73liqAoaW5zZXJ0KeOBl+OBplxyXG4gICAgLy8g44Gd44GuSUQoaWQp44Gu6YWN5YiX44KS6L+U44GZXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgYWRkX3RibF9hbGwoXHJcbiAgICAgICAgZGJfbWFpOiAgICAgZGJfY29ubmVjdCwgXHJcbiAgICAgICAgbWVzOiAgICAgICAgQ19Ec3BNZXNzYWdlLCBcclxuICAgICAgICBzYXZlX2lkOiAgICBudW1iZXIsXHJcbiAgICAgICAgdGVhbV9hcnJheTogQ19UZWFtW10sIFxyXG4gICAgKTogUHJvbWlzZTxudW1iZXJbXT4gXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgdGVhbV9pZF9zZXQgPSBbXSBhcyBudW1iZXJbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHRlYW0gb2YgdGVhbV9hcnJheSkge1xyXG4gICAgICAgICAgICBjb25zdCB0ZWFtX2lkID0gYXdhaXQgQ19UZWFtUkRCLmFkZF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIHRlYW0pO1xyXG4gICAgICAgICAgICBpZiAobWVzLmlzX2VycigpKSByZXR1cm4gW107XHJcbiAgICAgICAgICAgIHRlYW1faWRfc2V0LnB1c2godGVhbV9pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZWFtX2lkX3NldDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEQuWHpueQhuOAgnNhdmVfaWTjgafmjIflrprjgZXjgozjgZ/jg6zjgrPjg7zjg4ko6KSH5pWwKeOCkuWJiumZpChkZWxldGUp44GZ44KLXHJcbiAgICAvLyBcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RibChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCBkZWxldGVfdGVhbV9TUUwgPSBgXHJcbiAgICAgICAgICAgIERFTEVURSBGUk9NIHRibF90ZWFtIFxyXG4gICAgICAgICAgICBXSEVSRSAgc2F2ZV9pZCA9IDpzYXZlX2lkXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGF3YWl0IGRiX21haS5xdWVyeShkZWxldGVfdGVhbV9TUUwsIHtzYXZlX2lkIDogc2F2ZV9pZCx9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDE1OiAke2RlbGV0ZV90ZWFtX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ0FycmF5X3RvX0pTT04oajogSV90YmxfdGVhbSk6IEpTT05fVGVhbSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6ICAgICAgai5pZCxcclxuICAgICAgICAgICAgc2F2ZV9pZDogai5zYXZlX2lkLFxyXG4gICAgICAgICAgICB1bmlxX2lkOiBqLnVuaXFfaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICAgIGoubmFtZSxcclxuICAgICAgICAgICAgbG9jYXRlOiAgSlNPTi5wYXJzZShqLmxvY2F0ZSksXHJcbiAgICAgICAgICAgIGdvbGQ6ICAgIGouZ29sZCxcclxuLy8gICAgICAgICAgICBnb29kczogICBKU09OLnBhcnNlKGouZ29vZHMpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIiwiLy8g55S76Z2i6KGo56S655So44Oh44OD44K744O844K4KOmAmuW4uOeUqOOBqOOCqOODqeODvOeUqCnjga7jgqvjg5fjgrvjg6vljJZcclxuZXhwb3J0IGNsYXNzIENfRHNwTWVzc2FnZSB7XHJcbiAgICBwcml2YXRlIGlzSFRNTDogYm9vbGVhbjsgICAgICAgLy8g6KGo56S65YWI44GMSFRNTOOBiyh0cnVlKeOAgeOCs+ODs+OCveODvOODq+OBiyhmYWxzZSnjga7mjIflrppcclxuICAgIHByaXZhdGUgbm9yX21lc3NhZ2U6IHN0cmluZ1tdOyAvLyDpgJrluLjjga7jg6Hjg4Pjgrvjg7zjgrjjgpLmoLzntI3jgZnjgovmloflrZfliJfphY3liJdcclxuICAgIHByaXZhdGUgZXJyX21lc3NhZ2U6IHN0cmluZ1tdOyAvLyDjgqjjg6njg7zjg6Hjg4Pjgrvjg7zjgrjjgpLmoLzntI3jgZnjgovmloflrZfliJfphY3liJdcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoaXNIVE1MOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLmlzSFRNTCAgICAgID0gaXNIVE1MO1xyXG4gICAgICAgIHRoaXMubm9yX21lc3NhZ2UgPSBbXTtcclxuICAgICAgICB0aGlzLmVycl9tZXNzYWdlID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldF9ub3JfbWVzc2FnZShtc2c6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9yX21lc3NhZ2UucHVzaChtc2cpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0X2Vycl9tZXNzYWdlKG1zZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lcnJfbWVzc2FnZS5wdXNoKG1zZyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwbGF5X25vcl9tZXNzYWdlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm5vcl9tZXNzYWdlLmxlbmd0aCA8IDEpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNIVE1MKSB7XHJcbiAgICAgICAgICAgIGxldCBhbGxfbXNnID0gXCI8cCBjbGFzcz0nbm9ybWFsX21lc3NhZ2UnPlxcblwiO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1zZyBvZiB0aGlzLm5vcl9tZXNzYWdlKSBhbGxfbXNnICs9IGAke21zZ308L2JyPlxcbmA7XHJcbiAgICAgICAgICAgIGFsbF9tc2cgKz0gIFwiPC9wPlxcblwiO1xyXG4gICAgICAgICAgICBhbGVydChhbGxfbXNnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1zZyBvZiB0aGlzLm5vcl9tZXNzYWdlKSBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3BsYXlfZXJyX21lc3NhZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXJyX21lc3NhZ2UubGVuZ3RoIDwgMSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0hUTUwpIHtcclxuICAgICAgICAgICAgbGV0IGFsbF9tc2cgPSBcIjxwIGNsYXNzPSdlcnJvcl9tZXNzYWdlJz5cXG5cIjtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBtc2cgb2YgdGhpcy5lcnJfbWVzc2FnZSkgYWxsX21zZyArPSBgJHttc2d9PC9icj5cXG5gO1xyXG4gICAgICAgICAgICBhbGxfbXNnICs9ICBcIjwvcD5cXG5cIjtcclxuICAgICAgICAgICAgYWxlcnQoYWxsX21zZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlxcblxcblxcbiMjI1xcbiMjIyBFUlJPUiBPY2N1ZXJkLlxcbiMjI1xcblwiKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBtc2cgb2YgdGhpcy5lcnJfbWVzc2FnZSkgY29uc29sZS5lcnJvcihgIyMjICR7bXNnfWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiIyMjXFxuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwdWJsaWMgcGRvX2Vycm9yKGU6IGFueSwgZXJybXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBlY29kZSA9IGU/LmdldENvZGUoKSAgICA/PyAnOTk5OTknO1xyXG4gICAgICAgIGNvbnN0IGVtZXNzID0gZT8uZ2V0TWVzc2FnZSgpID8/ICc/Pz8nO1xyXG4gICAgICAgIHRoaXMuc2V0X2Vycl9tZXNzYWdlKGVycm1zZyk7XHJcbiAgICAgICAgdGhpcy5zZXRfZXJyX21lc3NhZ2UoYGNvZGU6ICR7ZWNvZGV9YCk7XHJcbiAgICAgICAgdGhpcy5zZXRfZXJyX21lc3NhZ2UoYG1lc3NhZ2U6ICR7ZW1lc3N9YCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0X25vcl9tZXNzYWdlcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLm5vcl9tZXNzYWdlXTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfZXJyX21lc3NhZ2VzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gWy4uLnRoaXMuZXJyX21lc3NhZ2VdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc19lcnIoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICB0aGlzLmVycl9tZXNzYWdlLmxlbmd0aCAhPT0gMDtcclxuICAgIH1cclxufVxyXG4iLCIvLyDmlbDlgKTjg4Hjgqfjg4Pjgq9cclxuZXhwb3J0IGZ1bmN0aW9uIF9pc051bShudW1WYWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgLy8g44OB44Kn44OD44Kv5p2h5Lu244OR44K/44O844OzXHJcbiAgICBjb25zdCBwYXR0ZXJuID0gL15bLStdPyhbMS05XVxcZCp8MCkoXFwuXFxkKyk/JC87XHJcbiAgICAvLyDmlbDlgKTjg4Hjgqfjg4Pjgq9cclxuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobnVtVmFsKTtcclxufVxyXG5cclxuLy8g5pWw5YCk5Y+W44KK5Ye644GXXHJcbmV4cG9ydCBmdW5jdGlvbiBfZ2V0TnVtKG51bVZhbDogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIC8vIOODgeOCp+ODg+OCr+adoeS7tuODkeOCv+ODvOODs1xyXG4vLyAgICBjb25zdCBwYXR0ZXJuID0gL1stXT8oWzEtOV1cXGQqfDApKFxcLlxcZCspPy87XHJcbiAgICBjb25zdCBwYXR0ZXJuID0gLyhbXjAtOV0pL2c7XHJcbiAgICBjb25zdCB2YWxzdHIgID0gbnVtVmFsLnJlcGxhY2UocGF0dGVybiwnJyk7XHJcbiAgICAvLyDmlbDlgKTjg4Hjgqfjg4Pjgq9cclxuICAgIHJldHVybiBOdW1iZXIodmFsc3RyKTtcclxufVxyXG5cclxuLy8g5Zub5o2o5LqU5YWlXHJcbmV4cG9ydCBmdW5jdGlvbiBfcm91bmQobnVtOiBudW1iZXIsIGRpZ2l0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgbXVsdGlwbGllciA9IE1hdGgucG93KDEwLCBkaWdpdCk7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBtdWx0aXBsaWVyKSAvIG11bHRpcGxpZXI7XHJcbn1cclxuXHJcbi8vIOWIh+OCiuS4iuOBklxyXG5leHBvcnQgZnVuY3Rpb24gX2NlaWwobnVtOiBudW1iZXIsIGRpZ2l0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgbXVsdGlwbGllciA9IE1hdGgucG93KDEwLCBkaWdpdCk7XHJcbiAgICByZXR1cm4gTWF0aC5jZWlsKG51bSAqIG11bHRpcGxpZXIpIC8gbXVsdGlwbGllcjtcclxufVxyXG5cclxuXHJcbi8vIOWIh+OCiuS4i+OBklxyXG5leHBvcnQgZnVuY3Rpb24gX2Zsb29yKG51bTogbnVtYmVyLCBkaWdpdDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IG11bHRpcGxpZXIgPSBNYXRoLnBvdygxMCwgZGlnaXQpO1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IobnVtICogbXVsdGlwbGllcikgLyBtdWx0aXBsaWVyO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9taW4oYTogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGEucmVkdWNlKChuMTogbnVtYmVyLCBuMjogbnVtYmVyKSA9PiBNYXRoLm1pbihuMSwgbjIpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9tYXgoYTogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGEucmVkdWNlKChuMTogbnVtYmVyLCBuMjogbnVtYmVyKSA9PiBNYXRoLm1heChuMSwgbjIpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBfbWF4LCBfbWluLCBfcm91bmQgfSBmcm9tIFwiLi9GX01hdGhcIjtcclxuXHJcbi8vIOS5seaVsOmWouaVsOWRvOOBs+WHuuOBl+eUqOOBruWei+Wuo+iogFxyXG50eXBlIFRfZnJhbmQgPSAoKT0+bnVtYmVyXHJcbmNvbnN0IGZyYW5kOiBUX2ZyYW5kID0gICgpPT57cmV0dXJuIE1hdGgucmFuZG9tKCl9XHJcblxyXG4vLyDkuIDmp5jkubHmlbAo5pW05pWwKVxyXG5leHBvcnQgZnVuY3Rpb24gX2lyYW5kKG1pbjogbnVtYmVyID0gMCwgbWF4OiBudW1iZXIgPSAxLCByYW5kOiBUX2ZyYW5kID0gZnJhbmQpOiBudW1iZXIge1xyXG4gICAgY29uc3QgZl9yYW5kID0gTWF0aC5mbG9vcihyYW5kKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gICAgcmV0dXJuIF9yb3VuZChmX3JhbmQsIDApO1xyXG59XHJcblxyXG4vLyDmraPopo/liIbluIPjgoLjganjgY3kubHmlbAo5pW05pWwKVxyXG5leHBvcnQgZnVuY3Rpb24gX2lncmFuZChtaW46IG51bWJlciA9IDAsIG1heDogbnVtYmVyID0gMSwgcmFuZDogVF9mcmFuZCA9IGZyYW5kKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBfaXJhbmQobWluLCBtYXgsICgpPT57cmV0dXJuIF9ncmFuZCgwLCAxLCByYW5kKX0pXHJcbn1cclxuXHJcbi8vIOato+imj+WIhuW4g+OCguOBqeOBjeS5seaVsCjlrp/mlbApXHJcbmV4cG9ydCBmdW5jdGlvbiBfZ3JhbmQobWluOiBudW1iZXIgPSAwLCBtYXg6IG51bWJlciA9IDEsIHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihfX19nYXVzc2lhblJhbmQocmFuZCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG59XHJcbmZ1bmN0aW9uIF9fX2dhdXNzaWFuUmFuZChyYW5kOiBUX2ZyYW5kID0gZnJhbmQpIHtcclxuICAgIGxldCBzdW0gPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpICs9IDEpIHtcclxuICAgICAgICBzdW0gKz0gcmFuZCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN1bSAvIDY7XHJcbn1cclxuXHJcbi8vIOWwkeOBl+ecn+mdouebruOBquato+imj+WIhuW4g+S5seaVsCjmlbTmlbApXHJcbmV4cG9ydCBmdW5jdGlvbiBfaW5yYW5kKG1pbjogbnVtYmVyID0gMCwgbWF4OiBudW1iZXIgPSAxLCBkZDogbnVtYmVyID0gMy4wLCByYW5kOiBUX2ZyYW5kID0gZnJhbmQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoX25yYW5kKG1pbiwgbWF4LCBkZCwgcmFuZCkpO1xyXG59XHJcblxyXG4vLyDlsJHjgZfnnJ/pnaLnm67jgarmraPopo/liIbluIPkubHmlbAo5a6f5pWwKVxyXG4vLyDkuIDmp5jnorrnjoflpInmlbBhLGLjgpLlpInmlbDplqLmlbDjgpLnlKjjgYTjgaYgeD1mKGEsYiksIHk9ZyhhLGIp44Go44GX44GmMuOBpOOBruato+imj+WIhuW4g+S5seaVsHgseeOCkuW+l+OCi1xyXG4vLyB4ID0gZihhLGIpID0gc3FydCgtMipsb2coYSkpICogc2luKDIqz4AqYikgXHJcbi8vIHkgPSBnKGEsYikgPSBzcXJ0KC0yKmxvZyhhKSkgKiBjb3MoMirPgCpiKSBcclxuZXhwb3J0IGZ1bmN0aW9uIF9ucmFuZChtaW46IG51bWJlciA9IDAuMCwgbWF4OiBudW1iZXIgPSAxLjAsIGRkOiBudW1iZXIgPSAzLjAsIHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCk6IG51bWJlciB7XHJcbiAgICBjb25zdCBhdmUgPSAwLjU7XHJcbiAgICBjb25zdCBhID0gcmFuZCgpO1xyXG4gICAgY29uc3QgYiA9IHJhbmQoKTtcclxuICAgIGxldCB4ID0gYXZlICsgX2ZhYihhLCBiKSAvICgyLjAgKiBkZCk7IC8vIOOBk+OBk+OBvuOBp+OAgU4oMCwxKeOBruato+imj+WIhuW4g+S5seaVsOOBruS9nOaIkFxyXG5cclxuICAgIHggPSBtaW4gKyB4ICogKG1heCAtIG1pbik7XHJcbiAgICB4ID0gX21heChbbWluLCB4XSk7XHJcbiAgICB4ID0gX21pbihbbWF4LCB4XSk7XHJcbiAgICByZXR1cm4geDtcclxufVxyXG5mdW5jdGlvbiBfZmFiKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoLTIuMCAqIE1hdGgubG9nKGEpKSAqIE1hdGguc2luKDIuMCAqIE1hdGguUEkgKiBiKTtcclxufVxyXG5mdW5jdGlvbiBfZ2FiKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoLTIuMCAqIE1hdGgubG9nKGEpKSAqIE1hdGguY29zKDIuMCAqIE1hdGguUEkgKiBiKTtcclxufVxyXG5cclxuXHJcbi8vIOOCt+ODvOODieWApOOCkueUqOOBhOOBn+S5seaVsFxyXG5leHBvcnQgY2xhc3MgQ19TZWVkZWRSYW5kIHtcclxuICAgIHByb3RlY3RlZCBzZWVkOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgZmlyc3Rfc2VlZDogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzZWVkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNlZWQgPSBzZWVkO1xyXG4gICAgICAgIHRoaXMuZmlyc3Rfc2VlZCA9IHNlZWQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZWVkID0gdGhpcy5maXJzdF9zZWVkO1xyXG4gICAgfVxyXG4gICAgLy8g5Lmx5pWw55Sf5oiQ44Oh44K944OD44OJXHJcbiAgICBwdWJsaWMgcmFuZG9tKCk6IG51bWJlciB7XHJcbiAgICAgICAgdGhpcy5zZWVkID0gKHRoaXMuc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VlZCAvIDIzMzI4MC4wO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+ODpuODi+ODvOOCr0lEKHV1aWQp44Gu55Sf5oiQXHJcbmV4cG9ydCBmdW5jdGlvbiBfZ2V0X3V1aWQobGVuOiBudW1iZXIgPSAyMCwgcmFuZDogVF9mcmFuZCA9IGZyYW5kKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGxmdCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkudG9TdHJpbmcoMTYpOyAvLyDjgZ/jgbbjgpMxM+ahgVxyXG4gICAgY29uc3Qgcmd0X2xlbiA9IF9tYXgoW2xlbiAtIGxmdC5sZW5ndGgsIDFdKTtcclxuXHJcbiAgICBjb25zdCByZ3QgPSBNYXRoLmZsb29yKE1hdGgucG93KDEwLCByZ3RfbGVuKSAqIHJhbmQoKSkudG9TdHJpbmcoMTYpO1xyXG4gICAgcmV0dXJuIGxmdCArIHJndDtcclxufVxyXG5cclxuLy8g56K6546H44Gr5Z+644Gl44GP6KaB57Sg6YG45oqeXHJcbmV4cG9ydCB0eXBlIFRfU2VsZWN0SXRlbSA9IHtcclxuICAgIHJhdGlvOiBudW1iZXIsXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9zZWxlY3RJdGVtKGl0ZW1zOiBUX1NlbGVjdEl0ZW1bXSwgcmFuZDogVF9mcmFuZCA9IGZyYW5kKTogVF9TZWxlY3RJdGVtIHwgdW5kZWZpbmVkIHtcclxuICAgIHZhciB0dGw6bnVtYmVyID0gMDtcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgaXRlbXMpIHR0bCArPSBpdGVtLnJhdGlvO1xyXG5cclxuICAgIGNvbnN0IHRhcmdldCA9IF9pcmFuZCgwLCB0dGwsIHJhbmQpO1xyXG4gICAgdmFyIHN1bSA9IDA7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcclxuICAgICAgICBzdW0gKz0gaXRlbS5yYXRpbztcclxuICAgICAgICBpZiAodGFyZ2V0IDwgc3VtKSB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuLy8g6YWN5YiX44Gu44K344Oj44OD44OV44OrXHJcbmV4cG9ydCBmdW5jdGlvbiBfc2h1ZmZsZUFycmF5PFQ+KGFycmF5OiBUW10sIHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCk6IFRbXSB7XHJcbiAgICBsZXQgc2h1ZmZsZWRBcnJheSA9IFsuLi5hcnJheV07IC8vIOWFg+OBrumFjeWIl+OCkuWkieabtOOBl+OBquOBhOOCiOOBhuOBq+OCs+ODlOODvOOBmeOCi1xyXG4gICAgZm9yIChsZXQgaSA9IHNodWZmbGVkQXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgIC8vIOODqeODs+ODgOODoOOBquS9jee9ruOCkuaxuuWumlxyXG4gICAgICAgIGNvbnN0IGogPSBfaXJhbmQoMCwgaSwgcmFuZCk7XHJcbiAgICAgICAgLy8g6KaB57Sg44Gu5YWl44KM5pu/44GIXHJcbiAgICAgICAgW3NodWZmbGVkQXJyYXlbaV0sIHNodWZmbGVkQXJyYXlbal1dID0gW3NodWZmbGVkQXJyYXlbal0sIHNodWZmbGVkQXJyYXlbaV1dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNodWZmbGVkQXJyYXk7IC8vIOOCt+ODo+ODg+ODleODq+OBleOCjOOBn+mFjeWIl+OCkui/lOOBmVxyXG59XHJcblxyXG4vLyDkubHmlbDjgavjgojjgovmloflrZfliJfnlJ/miJBcclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fc3RyKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGxldCBzdHIgPSAnJztcclxuICAgIGZvciAobGV0IGk9MDsgaSA8IGxlbmd0aDsgaSsrKSBzdHIgKz0gX3JhbmRvbV9DaGFyKCk7XHJcbiAgICByZXR1cm4gc3RyO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBfcmFuZG9tX1VwcGVyU3RyKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGxldCBzdHIgPSAnJztcclxuICAgIGZvciAobGV0IGk9MDsgaSA8IGxlbmd0aDsgaSsrKSBzdHIgKz0gX3JhbmRvbV9VcHBlckNoYXIoKTtcclxuICAgIHJldHVybiBzdHI7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fTG93ZXJTdHIobGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgbGVuZ3RoOyBpKyspIHN0ciArPSBfcmFuZG9tX0xvd2VyQ2hhcigpO1xyXG4gICAgcmV0dXJuIHN0cjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gX3JhbmRvbV9VcHBlckNoYXIoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHZhbCA9IF9pcmFuZCgwLDI2KVxyXG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoNjUrdmFsKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gX3JhbmRvbV9Mb3dlckNoYXIoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHZhbCA9IF9pcmFuZCgwLDI2KVxyXG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoOTUrdmFsKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gX3JhbmRvbV9OdW1DaGFyKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB2YWwgPSBfaXJhbmQoMCw5KVxyXG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoNDgrdmFsKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gX3JhbmRvbV9DaGFyKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB2YWwgPSBfaXJhbmQoMCw2MSlcclxuICAgIGlmICh2YWwgPCAyNikgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoNjUrdmFsKTtcclxuICAgIGlmICh2YWwgPCA1MikgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoOTcrdmFsLTI2KTtcclxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDQ4K3ZhbC01Mik7XHJcbn1cclxuIiwiaW1wb3J0IGV4cHJlc3MgICAgICBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgY3JlYXRlRXJyb3IgIGZyb20gJ2h0dHAtZXJyb3JzJztcclxuaW1wb3J0IHBhdGggICAgICAgICBmcm9tIFwicGF0aFwiO1xyXG5cclxudmFyIHVzZXJzUm91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXMvdXNlcnMnKTtcclxudmFyIG1haWV4Um91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXMvbWFpZXgnKTtcclxuXHJcbnZhciBjb29raWVQYXJzZXIgPSByZXF1aXJlKCdjb29raWUtcGFyc2VyJyk7XHJcbnZhciBsb2dnZXIgPSByZXF1aXJlKCdtb3JnYW4nKTtcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbi8vIHZpZXcgZW5naW5lIHNldHVwXHJcbmFwcC5zZXQoJ3ZpZXdzJywgcGF0aC5qb2luKF9fZGlybmFtZSwgJ3ZpZXdzJykpO1xyXG5hcHAuc2V0KCd2aWV3IGVuZ2luZScsICdlanMnKTtcclxuXHJcbmFwcC51c2UobG9nZ2VyKCdkZXYnKSk7XHJcbmFwcC51c2UoY29va2llUGFyc2VyKCkpO1xyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICdwdWJsaWMnKSkpO1xyXG5cclxuLy9hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcclxuLy9hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XHJcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xyXG5hcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcclxuXHJcbmNvbnN0IHJvb3RSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5yb290Um91dGVyLmdldChcclxuICBcIi9cIixcclxuICBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgcmVzLnNlbmQoXCJXZWxjb21lIHRvIHRoZSBNYWkgd29ybGQhIDotKVwiKTtcclxuICB9XHJcbik7XHJcbmFwcC51c2UoXCIvXCIsICAgICAgcm9vdFJvdXRlcik7XHJcbmFwcC51c2UoXCIvdXNlcnNcIiwgdXNlcnNSb3V0ZXIpO1xyXG5hcHAudXNlKFwiL21haWV4XCIsIG1haWV4Um91dGVyKTtcclxuXHJcbi8vIGNhdGNoIDQwNCBhbmQgZm9yd2FyZCB0byBlcnJvciBoYW5kbGVyXHJcbmFwcC51c2UoZnVuY3Rpb24ocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pIHtcclxuICBuZXh0KGNyZWF0ZUVycm9yKDQwNCkpO1xyXG59KTtcclxuXHJcbi8vIGVycm9yIGhhbmRsZXJcclxuYXBwLnVzZShmdW5jdGlvbihlcnI6IGFueSwgcmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pIHtcclxuICAvLyBzZXQgbG9jYWxzLCBvbmx5IHByb3ZpZGluZyBlcnJvciBpbiBkZXZlbG9wbWVudFxyXG4gIHJlcy5sb2NhbHMubWVzc2FnZSA9IGVyci5tZXNzYWdlO1xyXG4gIHJlcy5sb2NhbHMuZXJyb3IgPSByZXEuYXBwLmdldCgnZW52JykgPT09ICdkZXZlbG9wbWVudCcgPyBlcnIgOiB7fTtcclxuXHJcbiAgLy8gcmVuZGVyIHRoZSBlcnJvciBwYWdlXHJcbiAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzIHx8IDUwMCk7XHJcbiAgcmVzLnJlbmRlcignZXJyb3InKTtcclxufSk7XHJcblxyXG5jb25zdCBwb3J0ID0gbm9ybWFsaXplUG9ydChwcm9jZXNzLmVudi5QT1JUIHx8ICczMDAwJyk7XHJcbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIE5vcm1hbGl6ZSBhIHBvcnQgaW50byBhIG51bWJlciwgc3RyaW5nLCBvciBmYWxzZS5cclxuICovXHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVQb3J0KHZhbDogYW55KSB7XHJcbiAgdmFyIHBvcnQgPSBwYXJzZUludCh2YWwsIDEwKTtcclxuXHJcbiAgaWYgKGlzTmFOKHBvcnQpKSB7XHJcbiAgICAvLyBuYW1lZCBwaXBlXHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH1cclxuXHJcbiAgaWYgKHBvcnQgPj0gMCkge1xyXG4gICAgLy8gcG9ydCBudW1iZXJcclxuICAgIHJldHVybiBwb3J0O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHA7XHJcbiIsIlxyXG5jb25zdCBkYl9ob3N0ID0gJ3NxbCc7XHJcbi8vIOWIqeeUqOOCr+ODqeOCueetieOBruiqreOBv+i+vOOBv1xyXG5cclxuLy8g44Ko44Op44O844Oh44OD44K744O844K4562J44KS5L+d5a2Y44O76KGo56S644GZ44KL44Kv44Op44K5XHJcbmltcG9ydCB7Q19Ec3BNZXNzYWdlIH0gICAgIGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF91dGwvQ19Ec3BNZXNzYWdlJztcclxuXHJcbi8vIOS9jee9ruOBqOaWueWQkeOCkuihqOOBmeOCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX1BvaW50RGlyIH0gICAgICBmcm9tICcuLi8uLi8uLi9tYWkvc3JjL2RfbWRsL0NfUG9pbnREaXInO1xyXG5cclxuLy8g5rue5Zyo5L2N572u44KS56S644GZ44Kv44Op44K5XHJcbmltcG9ydCB7IENfTW92YWJsZVBvaW50IH0gIGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF9tZGwvQ19Nb3ZhYmxlUG9pbnQnO1xyXG5cclxuLy8g44Ku44Or44OJ44Kv44Op44K55YWo6IisXHJcbmltcG9ydCB7Q19HdWlsZH0gICAgICAgICAgIGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF9tZGwvQ19HdWlsZCc7XHJcblxyXG4vLyDjg5Hjg7zjg4bjgqPjg7zjgq/jg6njgrnlhajoiKxcclxuaW1wb3J0IHtDX1RlYW19ICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbWFpL3NyYy9kX21kbC9DX1RlYW0nO1xyXG5cclxuLy8g44OS44O844Ot44O844Kv44Op44K55YWo6IisXHJcbmltcG9ydCB7Q19IZXJvLCBKU09OX0hlcm99IGZyb20gICcuLi8uLi8uLi9tYWkvc3JjL2RfbWRsL0NfSGVybyc7XHJcblxyXG4vLyDjgrvjg7zjg5bjg4fjg7zjgr8o44Kv44Op44Kk44Ki44Oz44OI44Go44Gu6YCj5pC6KeWFqOiIrFxyXG5pbXBvcnQge0NfU2F2ZURhdGEsIEpTT05fU2F2ZURhdGF9IGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF9tZGwvQ19TYXZlRGF0YSc7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Li744CA5Yem44CA55CGICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbnRlcmZhY2UgSV9HbG9iYWxBcmd1bWVudHMge1xyXG4gICAgbW9kZT86IHN0cmluZztcclxuICAgIG5tYnI/OiBudW1iZXI7XHJcbiAgICBwaWQ/OiAgbnVtYmVyO1xyXG4gICAgaHJlc19KU09OPzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSV9SZXR1cm4ge1xyXG4gICAgZWNvZGU6IG51bWJlcjtcclxuICAgIGVtc2c6ICBzdHJpbmc7XHJcbiAgICBzYXZlPzogSlNPTl9TYXZlRGF0YTtcclxuICAgIGRhdGE/OiB7XHJcbiAgICAgICAgaHJlczpKU09OX0hlcm9bXTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gR2V0dGluZyBOZXcgR2FtZSBzdGFydGlpbmcgZnJvbSBHdWxkXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXdHdWxkKGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBJX1JldHVybiB7XHJcbiAgICBpbml0KGFyZyk7XHJcbiAgICBjb25zdCAgZ3VsZCA9IG5ld19ndWxkKCk7XHJcbiAgICBjb25zdCAgdGVhbSA9IG5ld190ZWFtKGd1bGQpO1xyXG4gICAgY29uc3QgIHNhdmUgPSBuZXdfc2F2ZShndWxkLCB0ZWFtKTtcclxuICAgIHJldHVybiBzYXZlX2VuY29kZSgwLCBzYXZlKTtcclxufVxyXG5cclxuLy8gR2V0dGluZyBBbnkgTmV3IEhlb3JlcyBkYXRhXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGxIcmVzKGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBJX1JldHVybiB7XHJcbiAgICBpbml0KGFyZyk7XHJcbiAgICBjb25zdCAgaHJlcyA9IG5ld19ocmVzKCk7XHJcbiAgICByZXR1cm4gaHJlc19lbmNvZGUoMCwgIGhyZXMpO1xyXG59XHJcblxyXG4gXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vICAg44K144OW44Or44O844OB44OzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmZ1bmN0aW9uIGVycl9lbmNvZGUoY29kZTogbnVtYmVyLCBtc2dzOiBzdHJpbmdbXSk6IElfUmV0dXJuIHtcclxuICAgIGNvbnN0IHJldF9hc3NvYzogSV9SZXR1cm4gPSB7ZWNvZGU6Y29kZSwgZW1zZzogJyd9O1xyXG4gICAgZm9yIChjb25zdCBtc2cgb2YgbXNncykgcmV0X2Fzc29jLmVtc2cgKz0gbXNnOyBcclxuICAgIHJldHVybiByZXRfYXNzb2M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVfZW5jb2RlKGNvZGU6IG51bWJlciwgc2F2ZTogQ19TYXZlRGF0YSk6IElfUmV0dXJuIHtcclxuICAgIGNvbnN0IHJldF9hc3NvYzogSV9SZXR1cm4gPSB7ZWNvZGU6MCwgZW1zZzogJyd9O1xyXG5cclxuICAgIGlmIChjb2RlICE9PSAwIHx8IGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIHJldHVybiBlcnJfZW5jb2RlKGNvZGUsIGd2Lm1lcy5nZXRfZXJyX21lc3NhZ2VzKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXRfYXNzb2MuZWNvZGUgPSAwO1xyXG4gICAgICAgIHJldF9hc3NvYy5lbXNnICA9ICdTdGF0dXMgT0snO1xyXG4gICAgICAgIHJldF9hc3NvYy5zYXZlICA9IHNhdmUuZW5jb2RlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJldF9hc3NvYztcclxufVxyXG5cclxuZnVuY3Rpb24gaHJlc19lbmNvZGUoY29kZTogbnVtYmVyLCBocmVzOiBDX0hlcm9bXSk6IElfUmV0dXJuIHtcclxuICAgIGNvbnN0IHJldF9hc3NvYzogSV9SZXR1cm4gPSB7ZWNvZGU6MCwgZW1zZzogJyd9O1xyXG5cclxuICAgIGlmIChjb2RlICE9PSAwIHx8IGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIHJldHVybiBlcnJfZW5jb2RlKGNvZGUsIGd2Lm1lcy5nZXRfZXJyX21lc3NhZ2VzKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXRfYXNzb2MuZWNvZGUgPSAwO1xyXG4gICAgICAgIHJldF9hc3NvYy5lbXNnICA9ICdTdGF0dXMgT0snO1xyXG5cclxuICAgICAgICBjb25zdCBocmVzX2FycmF5OiBKU09OX0hlcm9bXSA9IFtdO1xyXG4gICAgICAgIGZvcihjb25zdCBoZXJvIG9mIGhyZXMpIHtcclxuICAgICAgICAgICAgaHJlc19hcnJheS5wdXNoKGhlcm8uZW5jb2RlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXRfYXNzb2MuZGF0YSAgPSB7aHJlczogaHJlc19hcnJheX07XHJcbiAgICAgICAgcmV0dXJuIHJldF9hc3NvYztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbmV3X2hyZXMoKTogQ19IZXJvW10ge1xyXG4gICAgY29uc3QgaGVyb2VzOiBDX0hlcm9bXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYS5ubWJyOyBpKyspIHtcclxuICAgICAgICBoZXJvZXMucHVzaCgobmV3IENfSGVybygpKS5yYW5kb21fbWFrZSgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBoZXJvZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld19zYXZlKGd1bGQ6IENfR3VpbGQsIHRlYW06IENfVGVhbSk6IENfU2F2ZURhdGEge1xyXG4gICAgcmV0dXJuIG5ldyBDX1NhdmVEYXRhKHtcclxuICAgICAgICBwbGF5ZXJfaWQ6IGdhLnBpZCxcclxuICAgICAgICBhdXRvX21vZGU6ICcwJyxcclxuICAgICAgICBpc19hY3RpdmU6ICcxJyxcclxuICAgICAgICBpc19kZWxldGU6ICcwJyxcclxuXHJcbiAgICAgICAgYWxsX212cHQ6ICAgW10sXHJcbiAgICAgICAgYWxsX21hemU6ICAgW10sXHJcbiAgICAgICAgYWxsX2d1bGQ6ICAgW2d1bGQuZW5jb2RlKCldLCBcclxuICAgICAgICBhbGxfdGVhbTogICBbdGVhbS5lbmNvZGUoKV0sXHJcblxyXG4vL2xvY1xyXG4gICAgICAgIG15cG9zOiAgICAgIHRlYW0uZ2V0X2xvYygpLmVuY29kZSgpLCBcclxufSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld19ndWxkKCk6IENfR3VpbGQge1xyXG4gICAgY29uc3QgZ3VsZCA9IG5ldyBDX0d1aWxkKCk7XHJcbiAgICBndWxkLmRlY29kZSh7bmFtZTogJ+Wni+OBvuOCiuOBruihl+OBruWGkumZuuiAheOCruODq+ODiSd9KTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICBndWxkLmFkZF9oZXJvKChuZXcgQ19IZXJvKCkpLnJhbmRvbV9tYWtlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBndWxkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdfdGVhbShndWxkOiBDX0d1aWxkKTogQ19UZWFtIHtcclxuICAgIGNvbnN0IHRlYW0gPSBuZXcgQ19UZWFtKCk7XHJcbi8vbG9jXHJcbiAgICBjb25zdCBsb2MgPSBuZXcgQ19Nb3ZhYmxlUG9pbnQoKTtcclxuICAgIGxvYy5kZWNvZGUoe1xyXG4gICAgICAgIGtpbmQ6ICAgJ0d1bGQnLFxyXG4gICAgICAgIG5hbWU6ICAgIGd1bGQuZ2V0X25hbWUoKSxcclxuICAgICAgICBsb2NfdWlkOiBndWxkLnVpZCgpLFxyXG4gICAgICAgIGxvY19wb3M6IG5ldyBDX1BvaW50RGlyKHtcclxuICAgICAgICAgICAgJ3gnOiAwLFxyXG4gICAgICAgICAgICAneSc6IDAsXHJcbiAgICAgICAgICAgICd6JzogMCxcclxuICAgICAgICAgICAgJ2QnOiAwLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHRlYW1fdWlkOiB0ZWFtLnVpZCgpLFxyXG4gICAgfSk7XHJcbiAgICB0ZWFtLnNldF9wcnAoe25hbWU6J+OBsuOCiOOBk+OBleOCk+ODgeODvOODoCd9KTtcclxuLy9sb2NcclxuICAgIHRlYW0uc2V0X2xvYyhsb2MpO1xyXG5cclxuICAgIC8vICAgIHRlYW0uc2V0X2xvYygobmV3IENfTW92YWJsZVBvaW50KCkpLmRlY29kZShsb2MuZW5jb2RlKCkpKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDM7IGkrKykgeyBcclxuICAgICAgICB0ZWFtLmFkZF9oZXJvKChuZXcgQ19IZXJvKCkpLnJhbmRvbV9tYWtlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZWFtO1xyXG59XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Yid44CA5pyf44CA6Kit44CA5a6aICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5sZXQgZ3Y6IENfR2xvYmFsVmFyO1xyXG5sZXQgZ2E6IENfR2xvYmFsQXJndW1lbnRzO1xyXG5cclxuZnVuY3Rpb24gaW5pdChvYmo6IElfR2xvYmFsQXJndW1lbnRzKTogdm9pZCB7XHJcbiAgICBndiA9IG5ldyBDX0dsb2JhbFZhcigpO1xyXG4gICAgZ2EgPSBuZXcgQ19HbG9iYWxBcmd1bWVudHMob2JqKTtcclxuICAgIHJldHVybjtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vL1xyXG4vLy8vLyAgICAg44Kv44Op44K55a6j6KiAXHJcbi8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIOWkp+Wfn+WkieaVsOOBruioreWumlxyXG5jbGFzcyBDX0dsb2JhbFZhciB7XHJcbiAgICBwdWJsaWMgbWVzOiBDX0RzcE1lc3NhZ2U7XHJcblxyXG4gICAgcHVibGljIE1hemVfc2l6ZV94ID0gMjE7XHJcbiAgICBwdWJsaWMgTWF6ZV9zaXplX3kgPSAyMTtcclxuICAgIHB1YmxpYyBMaW1pdF9vZl9yb29tICAgICA9IDU7XHJcbiAgICBwdWJsaWMgTWF4X3NpemVfb2Zfcm9vbSAgPSAzO1xyXG4gICAgcHVibGljIE1heF9vZl9NYXplX0Zsb29yID0gMztcclxuXHJcbiAgICBwdWJsaWMgdGVhbV9hc3NvYzogQ19UZWFtW10gID0gW107XHJcbiAgICBwdWJsaWMgdGVhbTogICAgICAgQ19UZWFtO1xyXG4gICAgcHVibGljIGd1bGRfYXNzb2M6IENfR3VpbGRbXSA9IFtdO1xyXG4gICAgcHVibGljIGd1bGQ6ICAgICAgIENfR3VpbGQ7XHJcbiAgICBwdWJsaWMgaGVyb2VzOiAgICAgQ19IZXJvW10gID0gW107XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubWVzICA9IG5ldyBDX0RzcE1lc3NhZ2UoIC8qIGlzSFRNTCA9ICovIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnRlYW0gPSBuZXcgQ19UZWFtKCk7XHJcbiAgICAgICAgdGhpcy5ndWxkID0gbmV3IENfR3VpbGQoKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gUE9TVOW8leaVsOOBruioreWumlxyXG5jbGFzcyBDX0dsb2JhbEFyZ3VtZW50cyB7XHJcbiAgICBwdWJsaWMgbW9kZTogc3RyaW5nO1xyXG4gICAgcHVibGljIG5tYnI6IG51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgcGlkOiAgbnVtYmVyID0gMTtcclxuICAgIHB1YmxpYyBocmVzX0pTT046IHN0cmluZ3x1bmRlZmluZWQgPSAnJztcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob2JqOiBJX0dsb2JhbEFyZ3VtZW50c3x1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLm1vZGUgPSBvYmo/Lm1vZGUgPz8gJ3Vua25vd24nO1xyXG4gICAgICAgIHRoaXMubm1iciA9IG9iaj8ubm1iciAhPT0gdW5kZWZpbmVkICYmICFpc05hTihvYmoubm1icikgPyBOdW1iZXIob2JqLm5tYnIpIDogMTtcclxuICAgICAgICB0aGlzLnBpZCAgPSBvYmo/LnBpZCAgIT09IHVuZGVmaW5lZCAmJiAhaXNOYU4ob2JqLnBpZCkgID8gTnVtYmVyKG9iai5waWQpICA6IDE7XHJcbiAgICAgICAgdGhpcy5ocmVzX0pTT04gPSBvYmo/LmhyZXNfSlNPTiA/PyB1bmRlZmluZWQ7XHJcbi8vZGVidWcgICAgICAgIGNvbnNvbGUubG9nKGBtb2RlPSR7dGhpcy5tb2RlfSwgbm1icj0ke3RoaXMubm1icn0sIHBpZCA9ICR7dGhpcy5waWR9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbm1vZHVsZS5leHBvcnRzID0gbmV3R2FtZTtcclxubW9kdWxlLmV4cG9ydHMgPSBuZXdIZXJvO1xyXG4qLyIsIi8vIOWIqeeUqOOCr+ODqeOCueetieOBruiqreOBv+i+vOOBv1xyXG5cclxuLy8g44Ko44Op44O844Oh44OD44K744O844K4562J44KS5L+d5a2Y44O76KGo56S644GZ44KL44Kv44Op44K5XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF91dGwvQ19Ec3BNZXNzYWdlJztcclxuXHJcbi8vIE15U3Fs44KS5omx44GG44Kv44Op44K5XHJcbmltcG9ydCBteXNxbCAgICAgICAgICAgIGZyb20gXCJteXNxbDIvcHJvbWlzZVwiO1xyXG5cclxuLy8gU2F2ZS9Mb2Fk6Zai5L+C44Kv44Op44K55YWo6IisXHJcbmltcG9ydCB7IENfU2F2ZUluZm8sIEpTT05fU2F2ZUluZm8gfSAgICBmcm9tICcuLi8uLi8uLi9tYWkvc3JjL2RfbWRsL0NfU2F2ZUluZm8nO1xyXG5pbXBvcnQgeyBDX1NhdmVEYXRhLCBKU09OX1NhdmVEYXRhIH0gICAgZnJvbSAnLi4vLi4vLi4vbWFpL3NyYy9kX21kbC9DX1NhdmVEYXRhJztcclxuaW1wb3J0IHsgQ19TYXZlRGF0YVJEQiwgQ19TYXZlSW5mb1JEQiB9IGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF9yZGIvQ19TYXZlRGF0YVJEQic7XHJcblxyXG50eXBlIGRiX2Nvbm5lY3QgPSBteXNxbC5Qb29sQ29ubmVjdGlvbjtcclxubGV0ICBkYl9tYWk6IGRiX2Nvbm5lY3Q7XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOS4u+OAgOWHpuOAgOeQhiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuaW50ZXJmYWNlIElfUmV0dXJuIHtcclxuICAgIGVjb2RlOiAgICAgIG51bWJlcjtcclxuICAgIGVtc2c6ICAgICAgIHN0cmluZztcclxuICAgIHNhdmVfaW5mbz86IEpTT05fU2F2ZUluZm9bXTtcclxuICAgIHNhdmU/OiAgICAgIEpTT05fU2F2ZURhdGE7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5mbyhhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgYXdhaXQgaW5pdChhcmcpO1xyXG5cclxuICAgIGxldCAgIHJldF92YWw6IElfUmV0dXJuO1xyXG4gICAgY29uc3Qgc2F2ZV9hcnJheSA9IGF3YWl0IENfU2F2ZUluZm9SREIuZ2V0X2xpc3RfYnlfcGlkKGRiX21haSwgZ3YubWVzLCBnYS5waWQpO1xyXG4gICAgaWYgKGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIHJldF92YWwgPSBlcnJfZW5jb2RlKDUwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldF92YWwgPSBhbGxfc2F2ZV9pbmZvKDAsIHNhdmVfYXJyYXkpO1xyXG4gICAgfVxyXG4gICAgZmlubCgpO1xyXG4gICAgcmV0dXJuIHJldF92YWw7XHJcbn1cclxuXHJcbi8qXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0bXBfbG9hZChhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgaW5pdChhcmcpO1xyXG4gICAgY29uc3QgcmV0X3ZhbCA9IGF3YWl0IF9sb2FkKGdhLnBpZCwgMTAwLCAzMzApO1xyXG4gICAgZmlubCgpO1xyXG4gICAgcmV0dXJuIHJldF92YWw7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluc3RhbnRfbG9hZChhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgaW5pdChhcmcpO1xyXG4gICAgY29uc3QgcmV0X3ZhbCA9IGF3YWl0IF9sb2FkKGdhLnBpZCwgMTAxLCAzMTApO1xyXG4gICAgZmlubCgpO1xyXG4gICAgcmV0dXJuIHJldF92YWw7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFVEX2xvYWQoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfbG9hZChnYS5waWQsIDEwMiwgMzUwKTtcclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBiZWZvcmVfbG9hZChhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgaW5pdChhcmcpO1xyXG4gICAgY29uc3QgcmV0X3ZhbCA9IGF3YWl0IF9sb2FkKGdhLnBpZCwgMTAzLCAzODApO1xyXG4gICAgZmlubCgpO1xyXG4gICAgcmV0dXJuIHJldF92YWw7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYWxfbG9hZChhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgaW5pdChhcmcpO1xyXG4gICAgY29uc3QgcmV0X3ZhbCA9IGF3YWl0IF9sb2FkKGdhLnBpZCwgZ2EudW5vLCAzMCk7XHJcbiAgICBmaW5sKCk7XHJcbiAgICByZXR1cm4gcmV0X3ZhbDtcclxufVxyXG4qL1xyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkKGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBQcm9taXNlPElfUmV0dXJuPiB7XHJcbiAgICBhd2FpdCBpbml0KGFyZyk7XHJcbiAgICBjb25zdCBwaWQgPSBnYS5waWQ7XHJcbiAgICBsZXQgICB1bm86IG51bWJlcjtcclxuICAgIGxldCAgIGVubzogbnVtYmVyO1xyXG4gICAgc3dpdGNoIChnYS5tb2RlKSB7XHJcbiAgICAgICAgY2FzZSAndG1wX2xvYWQnOiAgICAgIHVubyA9IDEwMDsgICAgZW5vID0gMzMwOyBicmVhaztcclxuICAgICAgICBjYXNlICdpbnN0YW50X2xvYWQnOiAgdW5vID0gMTAxOyAgICBlbm8gPSAzMTA7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ1VEX2xvYWQnOiAgICAgICB1bm8gPSAxMDI7ICAgIGVubyA9IDM1MDsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYmVmb3JlX2xvYWQnOiAgIHVubyA9IDEwMzsgICAgZW5vID0gMzcwOyBicmVhaztcclxuICAgICAgICBjYXNlICdnZW5lcmFsX2xvYWQnOiAgdW5vID0gZ2EudW5vOyBlbm8gPSAzOTA7IGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6ICAgICAgICAgICAgICByZXR1cm4gZXJyX2VuY29kZSg4ODg4KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfbG9hZChwaWQsIHVubywgZW5vKTtcclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcblxyXG5cclxuLypcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRtcF9zYXZlKGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBQcm9taXNlPElfUmV0dXJuPiB7XHJcbiAgICBpbml0KGFyZyk7XHJcbiAgICBjb25zdCByZXRfdmFsID0gYXdhaXQgX3NhdmUoZ2EucGlkLCAxMDAsICdfX1RlbXBvcmFyeVNhdmVEYXRhX18nLCAyMzApO1xyXG4gICAgZmlubCgpO1xyXG4gICAgcmV0dXJuIHJldF92YWw7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluc3RhbnRfc2F2ZShhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgaW5pdChhcmcpO1xyXG4gICAgY29uc3QgcmV0X3ZhbCA9IGF3YWl0IF9zYXZlKGdhLnBpZCwgMTAxLCAnX19JbnN0YW50U2F2ZURhdGFfXycsIDIxMCk7XHJcbiAgICBmaW5sKCk7XHJcbiAgICByZXR1cm4gcmV0X3ZhbDtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gVURfc2F2ZShhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgaW5pdChhcmcpO1xyXG4gICAgY29uc3QgcmV0X3ZhbCA9IGF3YWl0IF9zYXZlKGdhLnBpZCwgMTAyLCAnX19VcERvd25TYXZlRGF0YV9fJywgMjUwKTtcclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBiZWZvcmVfc2F2ZShhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgaW5pdChhcmcpO1xyXG4gICAgY29uc3QgcmV0X3ZhbCA9IGF3YWl0IF9zYXZlKGdhLnBpZCwgMTAzLCAnX19CZWZvcmVUaGVFdmVudERhdGFfXycsIDI4MCk7XHJcbiAgICBmaW5sKCk7XHJcbiAgICByZXR1cm4gcmV0X3ZhbDtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhbF9zYXZlKGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBQcm9taXNlPElfUmV0dXJuPiB7XHJcbiAgICBpbml0KGFyZyk7XHJcbiAgICBjb25zdCByZXRfdmFsID0gYXdhaXQgX3NhdmUoZ2EucGlkLCBnYS5zYXZlPy51bmlxX25vPz85OSwgZ2Euc2F2ZT8udGl0bGU/Pyc/Pz8nLCAyMzApO1xyXG4gICAgZmlubCgpO1xyXG4gICAgcmV0dXJuIHJldF92YWw7XHJcbn1cclxuKi9cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZShhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgYXdhaXQgaW5pdChhcmcpO1xyXG4gICAgY29uc3QgcGlkICA9IGdhLnNhdmU/LnBsYXllcl9pZD8/LTI7XHJcbiAgICBsZXQgICB1bm86ICAgbnVtYmVyO1xyXG4gICAgbGV0ICAgZW5vOiAgIG51bWJlcjtcclxuICAgIGxldCAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBzd2l0Y2ggKGdhLm1vZGUpIHtcclxuICAgICAgICBjYXNlICd0bXBfc2F2ZSc6ICAgICAgdW5vID0gMTAwOyAgICBlbm8gPSAyMzA7IHRpdGxlPSAnX19UZW1wb3JhcnlTYXZlRGF0YV9fJzsgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2luc3RhbnRfc2F2ZSc6ICB1bm8gPSAxMDE7ICAgIGVubyA9IDIxMDsgdGl0bGU9ICdfX0luc3RhbnRTYXZlRGF0YV9fJzsgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnVURfc2F2ZSc6ICAgICAgIHVubyA9IDEwMjsgICAgZW5vID0gMjUwOyB0aXRsZT0gJ19fVXBEb3duU2F2ZURhdGFfXyc7ICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdiZWZvcmVfc2F2ZSc6ICAgdW5vID0gMTAzOyAgICBlbm8gPSAyNzA7IHRpdGxlPSAnX19CZWZvcmVUaGVFdmVudERhdGFfXyc7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2dlbmVyYWxfc2F2ZSc6ICB1bm8gPSBnYS5zYXZlPy51bmlxX25vPz85OTsgZW5vID0gMjkwOyB0aXRsZSA9IGdhLnNhdmU/LnRpdGxlPz8nPz8/JzsgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6ICAgICAgICAgICAgICByZXR1cm4gZXJyX2VuY29kZSg5OTk5KTtcclxuICAgIH1cclxuLy8gICAgY29uc29sZS5lcnJvcihgcGlkPSR7cGlkfSwgdW5vPSR7dW5vfSwgdGl0bGU9JHt0aXRsZX0sIGVubz0ke2Vub31gKTtcclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfc2F2ZShwaWQsIHVubywgdGl0bGUsIGVubyk7XHJcbiAgICBmaW5sKCk7XHJcbiAgICByZXR1cm4gcmV0X3ZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8gICDjgrXjg5bjg6vjg7zjg4Hjg7NcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gX2xvYWQocGlkOiBudW1iZXIsIHVubzogbnVtYmVyLCBlY29kZTogbnVtYmVyKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgYXdhaXQgdHJfYmVnaW4oZGJfbWFpKTtcclxuXHJcbiAgICAvLyDjg6bjg4vjg7zjgq/jg7vjg4rjg7Pjg5Djg7zjgadzYXZl44OH44O844K/44KS5o6i44GZ44CC6KaL44Gk44GL44KM44Gwc2F2ZV9pZOOBq+OCu+ODg+ODiOOBmeOCi1xyXG4gICAgY29uc3Qgc2F2ZV9pZCA9IGF3YWl0IENfU2F2ZUluZm9SREIuZ2V0X3NhdmVfaWRfYXRfdGJsKGRiX21haSwgZ3YubWVzLCBwaWQsIHVubyk7XHJcbiAgICBpZiAoZ3YubWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgYXdhaXQgdHJfcm9sbGJhY2soZGJfbWFpKTtcclxuICAgICAgICByZXR1cm4gYWxsX3NhdmVfZGF0YShlY29kZSwgdW5kZWZpbmVkKTs7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbWV6ZeOChHRlYW3nrYnjga7plqLpgKPjgZnjgovjg4fjg7zjgr/jgpLlj43mmKDjgZnjgotcclxuICAgIGNvbnN0IHNhdmVfZGF0YTAyID0gYXdhaXQgQ19TYXZlRGF0YVJEQi5nZXRfZnJvbV9yZGIoZGJfbWFpLCBndi5tZXMsIHNhdmVfaWQpO1xyXG4gICAgaWYgKGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIGF3YWl0IHRyX3JvbGxiYWNrKGRiX21haSk7XHJcbiAgICAgICAgcmV0dXJuIGFsbF9zYXZlX2RhdGEoZWNvZGUsIHVuZGVmaW5lZCk7O1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IHRyX2NvbW1pdChkYl9tYWkpO1xyXG4gICAgcmV0dXJuIGFsbF9zYXZlX2RhdGEoMCwgc2F2ZV9kYXRhMDIpO1xyXG5cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gX3NhdmUocGlkOiBudW1iZXIsIHVuaXFfbm86IG51bWJlciwgdGl0bGU6IHN0cmluZywgZWNvZGU6IG51bWJlcik6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGlmIChnYS5zYXZlID09PSB1bmRlZmluZWQpIHJldHVybiBhbGxfc2F2ZV9kYXRhKGVjb2RlLCB1bmRlZmluZWQpO1xyXG4gICAgZ2Euc2F2ZS5wbGF5ZXJfaWQgPSBwaWQ7XHJcbiAgICBnYS5zYXZlLnVuaXFfbm8gICA9IHVuaXFfbm87XHJcbiAgICBnYS5zYXZlLnRpdGxlICAgICA9IHRpdGxlO1xyXG4vL2NvbnNvbGUuZXJyb3IoYHBpZD0ke3BpZH0sIHVubz0ke3VuaXFfbm99LCB0aXRsZT0ke3RpdGxlfWApO1xyXG4gICAgYXdhaXQgdHJfYmVnaW4oZGJfbWFpKTtcclxuXHJcbiAgICAvLyDjg6bjg4vjg7zjgq/jg7vjg4rjg7Pjg5Djg7zjgadzYXZl44OH44O844K/44KS5o6i44GZ44CCXHJcbiAgICBjb25zdCBzYXZlX2lkID0gYXdhaXQgQ19TYXZlSW5mb1JEQi5nZXRfc2F2ZV9pZF9hdF90YmwoZGJfbWFpLCBndi5tZXMsIHBpZCwgdW5pcV9ubyk7XHJcbiAgICBpZiAoZ3YubWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgYXdhaXQgdHJfcm9sbGJhY2soZGJfbWFpKTtcclxuICAgICAgICByZXR1cm4gYWxsX3NhdmVfZGF0YShlY29kZSArIDEwLCBnYS5zYXZlKTtcclxuICAgIH1cclxuICAgIC8vIOWQjOOBmGlk44Gu5pei5a2Y44OH44O844K/44GM5pyJ44Gj44Gf44KJ5LiA5pem5YmK6Zmk44GZ44KLXHJcbi8vZGVidWcgY29uc29sZS5lcnJvcihgc2F2ZV9pZCA9ICR7c2F2ZV9pZH1gKTtcclxuICAgIGlmIChzYXZlX2lkID4gMCkge1xyXG4gICAgICAgIGNvbnN0IHJzbHQwMSA9IGF3YWl0IENfU2F2ZURhdGFSREIuZGVsX3RvX3JkYihkYl9tYWksIGd2Lm1lcywgc2F2ZV9pZCk7IFxyXG4gICAgICAgIGlmIChndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgYXdhaXQgdHJfcm9sbGJhY2soZGJfbWFpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGFsbF9zYXZlX2RhdGEoZWNvZGUgKyAzMywgZ2Euc2F2ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g5pS544KB44GmKOWIpeOBruODrOOCs+ODvOODieOBqynjgrvjg7zjg5bjgZnjgotcclxuICAgIGNvbnN0IHJzbHQwMiA9IGF3YWl0IENfU2F2ZURhdGFSREIuc2V0X3RvX3JkYihkYl9tYWksIGd2Lm1lcywgZ2Euc2F2ZSk7XHJcbiAgICBpZiAocnNsdDAyID09PSBmYWxzZSkge1xyXG4gICAgICAgIGF3YWl0IHRyX3JvbGxiYWNrKGRiX21haSk7XHJcbiAgICAgICAgcmV0dXJuIGFsbF9zYXZlX2RhdGEoZWNvZGUgKyAyMywgZ2Euc2F2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgdHJfY29tbWl0KGRiX21haSk7XHJcbiAgICByZXR1cm4gYWxsX3NhdmVfZGF0YSgwLCBnYS5zYXZlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWxsX3NhdmVfZGF0YShjb2RlOiBudW1iZXIsIHNhdmU6IENfU2F2ZURhdGF8dW5kZWZpbmVkKTogSV9SZXR1cm4ge1xyXG4gICAgbGV0IHJldF92YWw6IElfUmV0dXJuO1xyXG5cclxuICAgIGlmIChjb2RlICE9PSAwIHx8IGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIHJldF92YWwgPSBuZXcgQ19FcnJSZXR1cm4oY29kZSwgZ3YubWVzLmdldF9lcnJfbWVzc2FnZXMoKS5qb2luKFwiXFxuXCIpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0X3ZhbCA9IG5ldyBDX05vclJldHVybigpO1xyXG4gICAgICAgIGlmIChzYXZlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0X3ZhbC5zYXZlID0gc2F2ZS5lbmNvZGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXRfdmFsLnNhdmUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbGxfc2F2ZV9pbmZvKGNvZGU6IG51bWJlciwgc2F2ZV9saXN0OiBDX1NhdmVJbmZvW10pOiBJX1JldHVybiB7XHJcbiAgICBsZXQgcmV0X3ZhbDogSV9SZXR1cm47XHJcblxyXG4gICAgaWYgKGNvZGUgIT09IDAgfHwgZ3YubWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgcmV0X3ZhbCA9IG5ldyBDX0VyclJldHVybihjb2RlLCBndi5tZXMuZ2V0X2Vycl9tZXNzYWdlcygpLmpvaW4oXCJcXG5cIikpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXRfdmFsID0gbmV3IENfTm9yUmV0dXJuKCk7XHJcbi8vICAgICAgICByZXRfdmFsLnNhdmVfaW5mbyA9IHNhdmVfbGlzdDtcclxuICAgICAgICBjb25zdCByZXRfYXJyYXk6IEpTT05fU2F2ZURhdGFbXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc2F2ZV9lbG0gb2Ygc2F2ZV9saXN0KSByZXRfYXJyYXkucHVzaChzYXZlX2VsbS5lbmNvZGUoKSk7XHJcbiAgICAgICAgcmV0X3ZhbC5zYXZlX2luZm8gPSByZXRfYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJldF92YWw7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZXJyX2VuY29kZShjb2RlOiBudW1iZXIpOiBJX1JldHVybiB7XHJcbiAgICBjb25zdCByZXRfYXNzb2M6IElfUmV0dXJuID0ge2Vjb2RlOmNvZGUsIGVtc2c6ICcnfTtcclxuICAgIGZvciAoY29uc3QgbXNnIG9mIGd2Lm1lcy5nZXRfZXJyX21lc3NhZ2VzKCkpIHJldF9hc3NvYy5lbXNnICs9IG1zZyArIFwiXFxuXCI7IFxyXG4gICAgcmV0dXJuIHJldF9hc3NvYztcclxufVxyXG5cclxuXHJcbmNsYXNzIENfTm9yUmV0dXJuIGltcGxlbWVudHMgSV9SZXR1cm4ge1xyXG4gICAgcHVibGljIGVjb2RlOiAgIG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgZW1zZzogICAgc3RyaW5nID0gJ1N0YXR1cyBPSyc7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxyXG59XHJcblxyXG5jbGFzcyBDX0VyclJldHVybiBpbXBsZW1lbnRzIElfUmV0dXJuIHtcclxuICAgIHB1YmxpYyBlY29kZTogICBudW1iZXIgPSAxMDAwO1xyXG4gICAgcHVibGljIGVtc2c6ICAgIHN0cmluZyA9ICdlcnJvcic7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZWNvZGU6IG51bWJlciwgZW1zZzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lY29kZSAgPSBlY29kZTtcclxuICAgICAgICB0aGlzLmVtc2cgICA9IGVtc2c7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWIneOAgOacn+OAgOioreOAgOWumiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxubGV0IGd2OiBDX0dsb2JhbFZhcjtcclxubGV0IGdhOiBDX0dsb2JhbEFyZ3VtZW50cztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluaXQob2JqOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgZ3YgPSAgICAgbmV3IENfR2xvYmFsVmFyKCk7XHJcbiAgICBnYSA9ICAgICBuZXcgQ19HbG9iYWxBcmd1bWVudHMob2JqKTtcclxuICAgIGRiX21haSA9IGF3YWl0IGd2LmRiX3Bvb2wuZ2V0Q29ubmVjdGlvbigpO1xyXG5cclxuICAgIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiBmaW5sKCk6IHZvaWQge1xyXG4gICAgZGJfbWFpLnJlbGVhc2UoKTtcclxuICAgIGd2LmZpbmwoKTtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vL1xyXG4vLy8vLyAgICAg44Kv44Op44K55a6j6KiAXHJcbi8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAvLyDlpKfln5/lpInmlbDjga7oqK3lrppcclxuICAgIGNsYXNzIENfR2xvYmFsVmFyIHtcclxuICAgICAgICBwdWJsaWMgbWVzOiBDX0RzcE1lc3NhZ2U7XHJcblxyXG4gICAgICAgIHB1YmxpYyBkYl9ob3N0OiAgIHN0cmluZyA9IFwic3FsXCI7XHJcbiAgICAgICAgcHVibGljIGRiX3BvcnQ6ICAgbnVtYmVyID0gIDMzMDY7XHJcbiAgICAgICAgcHVibGljIGRiX25hbWU6ICAgc3RyaW5nID0gXCJkYl9tYWlcIjtcclxuICAgICAgICBwdWJsaWMgZGJfdXNlcjogICBzdHJpbmcgPSBcIml0c2F5bm8zM1wiO1xyXG4gICAgICAgIHB1YmxpYyBkYl9wYXNzOiAgIHN0cmluZyA9IFwiUEUzMzM4MzNcIjtcclxuICAgIFxyXG4gICAgICAgIHB1YmxpYyBkYl9wb29sOiAgIG15c3FsLlBvb2w7XHJcbiAgICBcclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzICAgICA9IG5ldyBDX0RzcE1lc3NhZ2UoIC8qIGlzSFRNTCA9ICovIGZhbHNlKTtcclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLmRiX3Bvb2wgPSBteXNxbC5jcmVhdGVQb29sKHtcclxuICAgICAgICAgICAgICAgIGhvc3Q6ICAgICAgdGhpcy5kYl9ob3N0LFxyXG4gICAgICAgICAgICAgICAgcG9ydDogICAgICB0aGlzLmRiX3BvcnQsXHJcbiAgICAgICAgICAgICAgICB1c2VyOiAgICAgIHRoaXMuZGJfdXNlcixcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAgdGhpcy5kYl9wYXNzLFxyXG4gICAgICAgICAgICAgICAgZGF0YWJhc2U6ICB0aGlzLmRiX25hbWUsXHJcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uTGltaXQ6ICAgICAxMCwgLy8g5o6l57aa44KS5by144KK57aa44GR44KL5pWwXHJcbiAgICAgICAgICAgICAgICB3YWl0Rm9yQ29ubmVjdGlvbnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBuYW1lZFBsYWNlaG9sZGVyczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGpzb25TdHJpbmdzOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGZpbmwoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGJfcG9vbC5lbmQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGludGVyZmFjZSBJX0dsb2JhbEFyZ3VtZW50cyB7XHJcbiAgICAgICAgbW9kZT86ICAgICAgICBzdHJpbmc7XHJcbiAgICAgICAgcGlkPzogICAgICAgICBudW1iZXI7XHJcbiAgICAgICAgdW5vPzogICAgICAgICBudW1iZXI7XHJcbiAgICAgICAgc2F2ZV9pZD86ICAgICBudW1iZXI7XHJcbiAgICAgICAgc2F2ZV90aXRsZT86ICBzdHJpbmc7IFxyXG4gICAgICAgIHNhdmVfZGV0YWlsPzogc3RyaW5nOyBcclxuICAgICAgICBzYXZlX3BvaW50PzogIHN0cmluZzsgXHJcbiAgICAgICAgc2F2ZV90aW1lPzogICBzdHJpbmc7IFxyXG4gICAgICAgIHNhdmU/OiAgICAgICAgc3RyaW5nO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIFBPU1TlvJXmlbDjga7oqK3lrppcclxuICAgIGNsYXNzIENfR2xvYmFsQXJndW1lbnRzIHtcclxuICAgICAgICBwdWJsaWMgbW9kZTogICAgICBzdHJpbmcgICAgICAgICAgPSAndW5rbm93bic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHNhdmVfSlNPTjogc3RyaW5nICAgICAgICAgID0gJyc7XHJcbiAgICAgICAgcHVibGljIHNhdmU6ICAgICAgICBDX1NhdmVEYXRhfHVuZGVmaW5lZCA9IHVuZGVmaW5lZDsgXHJcblxyXG4gICAgICAgIHB1YmxpYyBwaWQ6ICAgICAgICAgbnVtYmVyID0gIDE7XHJcbiAgICAgICAgcHVibGljIHVubzogICAgICAgICBudW1iZXIgPSAtMTtcclxuICAgICAgICBwdWJsaWMgc2F2ZV9pZDogICAgIG51bWJlciA9IC0xO1xyXG4gICAgICAgIHB1YmxpYyBzYXZlX3RpdGxlOiAgc3RyaW5nID0gJyc7IFxyXG4gICAgICAgIHB1YmxpYyBzYXZlX2RldGFpbDogc3RyaW5nID0gJyc7IFxyXG4gICAgICAgIHB1YmxpYyBzYXZlX3BvaW50OiAgc3RyaW5nID0gJyc7IFxyXG4gICAgICAgIHB1YmxpYyBzYXZlX3RpbWU6ICAgc3RyaW5nID0gJydcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKG9iajogSV9HbG9iYWxBcmd1bWVudHN8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmogPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tb2RlICAgICAgICA9IG9iai5tb2RlID8/IHRoaXMubW9kZTtcclxuICAgICAgICAgICAgdGhpcy5waWQgICAgICAgICA9IG9iai5waWQgID8/IHRoaXMucGlkO1xyXG4gICAgICAgICAgICB0aGlzLnVubyAgICAgICAgID0gb2JqLnVubyAgPz8gdGhpcy51bm87XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZV9pZCAgICAgPSBOdW1iZXIob2JqLnNhdmVfaWQpICAgICAgPz8gdGhpcy5zYXZlX2lkO1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVfdGl0bGUgID0gb2JqLnNhdmVfdGl0bGUgICAgICAgICAgID8/IHRoaXMuc2F2ZV90aXRsZTtcclxuICAgICAgICAgICAgdGhpcy5zYXZlX2RldGFpbCA9IG9iai5zYXZlX2RldGFpbCAgICAgICAgICA/PyB0aGlzLnNhdmVfZGV0YWlsO1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVfcG9pbnQgID0gb2JqLnNhdmVfcG9pbnQgICAgICAgICAgID8/IHRoaXMuc2F2ZV9wb2ludDtcclxuICAgICAgICAgICAgaWYgKG9iai5zYXZlICE9PSB1bmRlZmluZWQpICAgIHRoaXMuc2F2ZSAgICA9IG5ldyBDX1NhdmVEYXRhKEpTT04ucGFyc2Uob2JqLnNhdmUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8gICDjg4fjg7zjgr/jg5njg7zjgrnplqLkv4IgXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICAgXHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHRyX2JlZ2luKGRiX21haTogZGJfY29ubmVjdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGRiX21haS5iZWdpblRyYW5zYWN0aW9uKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGd2Lm1lcy5zZXRfZXJyX21lc3NhZ2UoXCLjg4jjg6njg7Pjgrbjgq/jgrfjg6fjg7Pjga7plovlp4vlpLHmlZc6IFwiICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gdHJfY29tbWl0KGRiX21haTogZGJfY29ubmVjdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGRiX21haS5jb21taXQoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgZ3YubWVzLnNldF9lcnJfbWVzc2FnZShcIuODiOODqeODs+OCtuOCr+OCt+ODp+ODs+OBruOCs+ODn+ODg+ODiOWkseaVl1wiICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gdHJfcm9sbGJhY2soZGJfbWFpOiBkYl9jb25uZWN0KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgZGJfbWFpLnJvbGxiYWNrKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGd2Lm1lcy5zZXRfZXJyX21lc3NhZ2UoXCLjg4jjg6njg7Pjgrbjgq/jgrfjg6fjg7Pjga7jg63jg7zjg6vjg5Djg4Pjgq/lpLHmlZdcIiArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuIiwiXHJcbmNvbnN0IGRiX2hvc3QgPSAnc3FsJztcclxuLy8g5Yip55So44Kv44Op44K5562J44Gu6Kqt44G/6L6844G/XHJcblxyXG4vLyDjgqjjg6njg7zjg6Hjg4Pjgrvjg7zjgrjnrYnjgpLkv53lrZjjg7vooajnpLrjgZnjgovjgq/jg6njgrlcclxuaW1wb3J0IHsgQ19Ec3BNZXNzYWdlIH0gICAgIGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF91dGwvQ19Ec3BNZXNzYWdlJztcclxuXHJcbi8vIE15U3Fs44KS5omx44GG44Kv44Op44K5XHJcbmltcG9ydCBteXNxbCBmcm9tIFwibXlzcWwyL3Byb21pc2VcIjtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDkuLvjgIDlh6bjgIDnkIYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmludGVyZmFjZSBJX0dsb2JhbEFyZ3VtZW50cyB7XHJcbiAgICBtb2RlPzogc3RyaW5nO1xyXG4gICAgcGlkOiAgIG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIElfUmV0dXJuIHtcclxuICAgIGVjb2RlOiAgIG51bWJlcjtcclxuICAgIGVtc2c6ICAgIHN0cmluZztcclxuICAgIHBpZDogICAgIG51bWJlcjtcclxuICAgIG5hbWU6ICAgIHN0cmluZztcclxuICAgIG1ibmFtZTogIHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgQ19Ob3JSZXR1cm4gaW1wbGVtZW50cyBJX1JldHVybiB7XHJcbiAgICBwdWJsaWMgZWNvZGU6ICAgbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBlbXNnOiAgICBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBwaWQ6ICAgICBudW1iZXIgPSAtMTtcclxuICAgIHB1YmxpYyBuYW1lOiAgICBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBtYm5hbWU6ICBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBtYm5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucGlkICAgID0gcGlkO1xyXG4gICAgICAgIHRoaXMubmFtZSAgID0gbmFtZTtcclxuICAgICAgICB0aGlzLm1ibmFtZSA9IG1ibmFtZTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19FcnJSZXR1cm4gaW1wbGVtZW50cyBJX1JldHVybiB7XHJcbiAgICBwdWJsaWMgZWNvZGU6ICAgbnVtYmVyID0gMTAwMDtcclxuICAgIHB1YmxpYyBlbXNnOiAgICBzdHJpbmcgPSAnZXJyb3InO1xyXG4gICAgcHVibGljIHBpZDogICAgIG51bWJlciA9IC0xO1xyXG4gICAgcHVibGljIG5hbWU6ICAgIHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIG1ibmFtZTogIHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGVjb2RlOiBudW1iZXIsIGVtc2c6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZWNvZGUgID0gZWNvZGU7XHJcbiAgICAgICAgdGhpcy5lbXNnICAgPSBlbXNnO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gR2V0dGluZyBOZXcgR2FtZSBzdGFydGlpbmcgZnJvbSBHdWxkXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0ZXN0KGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBQcm9taXNlPElfUmV0dXJuPiB7XHJcbiAgICBsZXQgcmV0dXJuX3ZhbDogSV9SZXR1cm47XHJcblxyXG4gICAgaW5pdChhcmcpO1xyXG5cclxuICAgIGlmIChndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICBndi5tZXMuZGlzcGxheV9lcnJfbWVzc2FnZSgpO1xyXG4gICAgICAgIHJldHVybl92YWwgPSBuZXcgQ19FcnJSZXR1cm4oMTAwLCAnZGJfbWFpIE9QRU4gRVJST1IgJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybl92YWwgPSBhd2FpdCBnZXRfcGxheWVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlubCgpO1xyXG4gICAgcmV0dXJuIHJldHVybl92YWw7XHJcbn1cclxuXHJcbiBcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8gICDjgrXjg5bjg6vjg7zjg4Hjg7NcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0X3BsYXllcigpOiBQcm9taXNlPElfUmV0dXJuPiB7XHJcbiAgICBpZiAoZ2EucGlkID09PSB1bmRlZmluZWQpIHJldHVybiBuZXcgQ19FcnJSZXR1cm4oOTk5LCAnUGlkIFVuZGVmaW5lZCcpO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RfdXNlcnMoKS50aGVuKHJzbHRfdXNlcnMgPT4ge1xyXG4gICAgICAgIGlmIChyc2x0X3VzZXJzID09PSB1bmRlZmluZWQgfHwgZ3YubWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIGd2Lm1lcy5kaXNwbGF5X2Vycl9tZXNzYWdlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ19FcnJSZXR1cm4oMjAwLCAnU1FMIEVSUk9SICcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocnNsdF91c2Vycy5sZW5ndGggPCAxKSByZXR1cm4gbmV3IENfRXJyUmV0dXJuKDkwMCwgYE5vIGRhdGEgZXhpc3Qgb24gcGlkPSR7Z2EucGlkfWApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IENfTm9yUmV0dXJuKFxyXG4gICAgICAgICAgICByc2x0X3VzZXJzWzBdLmlkLCBcclxuICAgICAgICAgICAgcnNsdF91c2Vyc1swXS5uYW1lLCBcclxuICAgICAgICAgICAgcnNsdF91c2Vyc1swXS5tYm5hbWVcclxuICAgICAgICApO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IENfRXJyUmV0dXJuKDEwMCwgJ1NRTCBFUlJPUjogJyArIGVycik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElfdGJsX3BsYXllciBleHRlbmRzIG15c3FsLlJvd0RhdGFQYWNrZXR7XHJcbiAgICBpZDogICAgICBudW1iZXI7XHJcbiAgICBuYW1lOiAgICBzdHJpbmc7XHJcbiAgICBwYXNzd2Q6ICBzdHJpbmc7XHJcbiAgICBtYm5hbWU6ICBzdHJpbmc7XHJcbiAgICBlbWFpbDogICBzdHJpbmc7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlbGVjdF91c2VycygpOiBQcm9taXNlPElfdGJsX3BsYXllcltdfHVuZGVmaW5lZD4ge1xyXG4gICAgY29uc3Qgc3FsID0gYFxyXG4gICAgICAgIFNFTEVDVCBpZCwgbmFtZSwgcGFzc3dkLCBtYm5hbWUsIGVtYWlsIEZST00gdGJsX3BsYXllclxyXG4gICAgICAgICAgICBXSEVSRSAgaWQgPSA6aWRcclxuICAgIGA7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBbcnNsdFJvd1NldF0gPSBhd2FpdCBndi5kYl9wb29sLnF1ZXJ5PElfdGJsX3BsYXllcltdPihzcWwsIHtpZDogZ2EucGlkfSk7XHJcbiAgICAgICAgcmV0dXJuIHJzbHRSb3dTZXQ7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBndi5tZXMuc2V0X2Vycl9tZXNzYWdlKCdTUUwgRVJST1IgU0VMRUNUIEZST00gdGJsX3BsYXllcjogJyArIGVycik7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWIneOAgOacn+OAgOioreOAgOWumiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxubGV0IGd2OiBDX0dsb2JhbFZhcjtcclxubGV0IGdhOiBDX0dsb2JhbEFyZ3VtZW50cztcclxuXHJcbmZ1bmN0aW9uIGluaXQob2JqOiBJX0dsb2JhbEFyZ3VtZW50cyk6IHZvaWQge1xyXG4gICAgZ3YgPSBuZXcgQ19HbG9iYWxWYXIoKTtcclxuICAgIGdhID0gbmV3IENfR2xvYmFsQXJndW1lbnRzKG9iaik7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gZmlubCgpOiB2b2lkIHtcclxuICAgIGd2LmZpbmwoKTtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vL1xyXG4vLy8vLyAgICAg44Kv44Op44K55a6j6KiAXHJcbi8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIOWkp+Wfn+WkieaVsOOBruioreWumlxyXG5jbGFzcyBDX0dsb2JhbFZhciB7XHJcbiAgICBwdWJsaWMgbWVzOiBDX0RzcE1lc3NhZ2U7XHJcblxyXG4gICAgcHVibGljIGRiX2hvc3Q6ICAgc3RyaW5nID0gXCJzcWxcIjtcclxuICAgIHB1YmxpYyBkYl9wb3J0OiAgIG51bWJlciA9ICAzMzA2O1xyXG4gICAgcHVibGljIGRiX25hbWU6ICAgc3RyaW5nID0gXCJkYl9tYWlcIjtcclxuICAgIHB1YmxpYyBkYl91c2VyOiAgIHN0cmluZyA9IFwiaXRzYXlubzMzXCI7XHJcbiAgICBwdWJsaWMgZGJfcGFzczogICBzdHJpbmcgPSBcIlBFMzMzODMzXCI7XHJcblxyXG4gICAgcHVibGljIGRiX3Bvb2w6ICAgbXlzcWwuUG9vbDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tZXMgICAgID0gbmV3IENfRHNwTWVzc2FnZSggLyogaXNIVE1MID0gKi8gZmFsc2UpO1xyXG5cclxuICAgICAgICB0aGlzLmRiX3Bvb2wgPSBteXNxbC5jcmVhdGVQb29sKHtcclxuICAgICAgICAgICAgaG9zdDogICAgICB0aGlzLmRiX2hvc3QsXHJcbiAgICAgICAgICAgIHBvcnQ6ICAgICAgdGhpcy5kYl9wb3J0LFxyXG4gICAgICAgICAgICB1c2VyOiAgICAgIHRoaXMuZGJfdXNlcixcclxuICAgICAgICAgICAgcGFzc3dvcmQ6ICB0aGlzLmRiX3Bhc3MsXHJcbiAgICAgICAgICAgIGRhdGFiYXNlOiAgdGhpcy5kYl9uYW1lLFxyXG4gICAgICAgICAgICBjb25uZWN0aW9uTGltaXQ6ICAgICAxMCwgLy8g5o6l57aa44KS5by144KK57aa44GR44KL5pWwXHJcbiAgICAgICAgICAgIHdhaXRGb3JDb25uZWN0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgbmFtZWRQbGFjZWhvbGRlcnM6IHRydWUsXHJcbiAgICAgICAgICAgIGpzb25TdHJpbmdzOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZpbmwoKSB7XHJcbiAgICAgICAgdGhpcy5kYl9wb29sLmVuZCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBQT1NU5byV5pWw44Gu6Kit5a6aXHJcbmNsYXNzIENfR2xvYmFsQXJndW1lbnRzIHtcclxuICAgIHB1YmxpYyBtb2RlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGlkOiAgbnVtYmVyID0gLTE7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9iajogSV9HbG9iYWxBcmd1bWVudHN8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlID0gb2JqPy5tb2RlID8/ICd1bmtub3duJztcclxuICAgICAgICB0aGlzLnBpZCAgPSBvYmo/LnBpZCAgIT09IHVuZGVmaW5lZCAmJiAhaXNOYU4ob2JqLnBpZCkgID8gTnVtYmVyKG9iai5waWQpICA6IC0xO1xyXG4vL2RlYnVnICAgICAgICBjb25zb2xlLmxvZyhgbW9kZT0ke3RoaXMubW9kZX0sIHBpZCA9ICR7dGhpcy5waWR9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbm1vZHVsZS5leHBvcnRzID0gbmV3R2FtZTtcclxubW9kdWxlLmV4cG9ydHMgPSBuZXdIZXJvO1xyXG4qLyIsIi8vIOWIqeeUqOOCr+ODqeOCueetieOBruiqreOBv+i+vOOBv1xyXG5cclxuLy8g44Ko44Op44O844Oh44OD44K744O844K4562J44KS5L+d5a2Y44O76KGo56S644GZ44KL44Kv44Op44K5XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9ICAgZnJvbSAnLi4vLi4vLi4vbWFpL3NyYy9kX3V0bC9DX0RzcE1lc3NhZ2UnO1xyXG5cclxuLy8g44OA44Oz44K444On44Oz44Oe44OD44OX44Gu44K744Or44Gu56iu6aGe44KS6KGo44GZ5YiX5oyZ5Z6LXHJcbmltcG9ydCB7IFRfTXpLaW5kIH0gICAgICAgZnJvbSAgJy4uLy4uLy4uL21haS9zcmMvZF9tZGwvVF9NektpbmQnO1xyXG5cclxuLy8g5pa55ZCR44KS6KGo44GZ44Kv44Op44K5XHJcbmltcG9ydCB7IENfUG9pbnREaXIsIFRfRGlyZWN0aW9uIH0gICBmcm9tICAnLi4vLi4vLi4vbWFpL3NyYy9kX21kbC9DX1BvaW50RGlyJztcclxuXHJcbi8vIOS9jee9ruODu+e1jOi3r+OCkuihqOOBmeOCr+ODqeOCueWFqOiIrFxyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCB9ICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbWFpL3NyYy9kX21kbC9DX01vdmFibGVQb2ludCc7XHJcblxyXG4vLyBNQVpF6Zai5L+C44Kv44Op44K55YWo6IisXHJcbmltcG9ydCB7IENfTWF6ZSB9ICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9tYWkvc3JjL2RfbWRsL0NfTWF6ZSc7XHJcbmltcG9ydCB7IENfTWF6ZUluZm8sIEpTT05fTWF6ZUluZm8gfSBmcm9tICcuLi8uLi8uLi9tYWkvc3JjL2RfbWRsL0NfTWF6ZUluZm8nOyAvLyBNYXpl5L2c5oiQ44Gu44OG44Oz44OX44Os44O844OI5oOF5aCxXHJcblxyXG4vLyDjg5Hjg7zjg4bjgqPjg7zjgq/jg6njgrnlhajoiKxcclxuaW1wb3J0IHsgQ19UZWFtIH0gICAgICAgICBmcm9tICcuLi8uLi8uLi9tYWkvc3JjL2RfbWRsL0NfVGVhbSc7XHJcblxyXG4vLyDjg5Ljg7zjg63jg7zjgq/jg6njgrnlhajoiKxcclxuaW1wb3J0IHsgQ19IZXJvIH0gICAgICAgICBmcm9tICcuLi8uLi8uLi9tYWkvc3JjL2RfbWRsL0NfSGVybyc7XHJcblxyXG4vLyDjgrvjg7zjg5bjg4fjg7zjgr8o44Kv44Op44Kk44Ki44Oz44OI44Go44Gu6YCj5pC6KeWFqOiIrFxyXG5pbXBvcnQgeyBDX1NhdmVEYXRhLCBKU09OX1NhdmVEYXRhIH0gZnJvbSAnLi4vLi4vLi4vbWFpL3NyYy9kX21kbC9DX1NhdmVEYXRhJztcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDkuLvjgIDlh6bjgIDnkIYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmxldCBndjogQ19HbG9iYWxWYXI7XHJcbmxldCBnYTogQ19HbG9iYWxBcmd1bWVudHM7XHJcblxyXG5pbnRlcmZhY2UgSV9HbG9iYWxBcmd1bWVudHMge1xyXG4gICAgbW9kZT86IHN0cmluZztcclxuICAgIG5tYnI/OiBudW1iZXI7XHJcbiAgICBwaWQ/OiAgbnVtYmVyO1xyXG4gICAgdGVhbT86IHN0cmluZztcclxuICAgIG1hemU/OiBzdHJpbmc7XHJcbiAgICBtYXplX25hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJX1JldHVybiB7XHJcbiAgICBlY29kZTogbnVtYmVyO1xyXG4gICAgZW1zZzogIHN0cmluZztcclxuICAgIHNhdmU/OiBKU09OX1NhdmVEYXRhO1xyXG4gICAgZGF0YT86IG9iamVjdDtcclxufVxyXG5cclxuLy8gR2V0dGluZyBJbmZvcm1hdGlvbiBvZiBBbGwgTWF6ZVxyXG5leHBvcnQgZnVuY3Rpb24gYWxsTWF6ZShvYmo6IElfR2xvYmFsQXJndW1lbnRzKTogSV9SZXR1cm4ge1xyXG4gICAgaW5pdChvYmopO1xyXG5cclxuICAgIGNvbnN0IG1hemVfaW5mb19hcnJheTogSlNPTl9NYXplSW5mb1tdID0gW107XHJcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gZ3YubWF6ZWluZm8pIG1hemVfaW5mb19hcnJheS5wdXNoKGd2Lm1hemVpbmZvW25hbWVdLmVuY29kZSgpKTtcclxuICAgIHJldHVybiBhbGxfZW5jb2RlKFxyXG4gICAgICAgIDAsIFxyXG4gICAgICAgIHttYXplaW5mbzogbWF6ZV9pbmZvX2FycmF5fSxcclxuICAgICk7XHJcbn1cclxuXHJcbi8vIEdldHRpbmcgTmV3IE1hemVcclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1hemUob2JqOiBJX0dsb2JhbEFyZ3VtZW50cyk6IElfUmV0dXJuIHtcclxuICAgIGluaXQob2JqKTtcclxuXHJcbiAgICBjb25zdCBbbmV3X21hemUsIG5ld19wb3NdID0gY3JlYXRlX21hemUoZ2EubWF6ZV9uYW1lKTsgXHJcbiAgICByZXR1cm4gYWxsX2VuY29kZShcclxuICAgICAgICAwLCBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1hemU6IG5ld19tYXplLmVuY29kZSgpLFxyXG4gICAgICAgICAgICBwb3M6ICBuZXdfcG9zLFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG59XHJcblxyXG4vLyBHZXR0aW5nIE5ldyBHYW1lIHN0YXJ0aWluZyBmcm9tIE1hemVcclxuZXhwb3J0IGZ1bmN0aW9uIG5ld01hemUob2JqOiBJX0dsb2JhbEFyZ3VtZW50cyk6IElfUmV0dXJuIHtcclxuICAgIGluaXQob2JqKTtcclxuXHJcbiAgICBjb25zdCBbbmV3X21hemUsIG5ld19wb3NdID0gY3JlYXRlX21hemUoJycpOyBcclxuICAgIGNvbnN0ICBuZXdfdGVhbSA9IGNyZWF0ZV90ZWFtKG5ld19tYXplLCBuZXdfcG9zKTsgXHJcbiAgICBjb25zdCAgbmV3X3NhdmUgPSBjcmVhdGVfc2F2ZShuZXdfbWF6ZSwgbmV3X3RlYW0pO1xyXG4gICAgY29uc3QgIHJldF9KU09OID0gc2F2ZV9lbmNvZGUoMCwgbmV3X3NhdmUpO1xyXG4gICAgcmV0dXJuIHJldF9KU09OO1xyXG59XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8gICDjgrXjg5bjg6vjg7zjg4Hjg7NcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZnVuY3Rpb24gZXJyX2VuY29kZShjb2RlOiBudW1iZXIsIG1zZ3M6IHN0cmluZ1tdKTogSV9SZXR1cm4ge1xyXG4gICAgY29uc3QgcmV0X2Fzc29jOiBJX1JldHVybiA9IHtlY29kZTpjb2RlLCBlbXNnOiAnJ307XHJcbiAgICBmb3IgKGNvbnN0IG1zZyBvZiBtc2dzKSByZXRfYXNzb2MuZW1zZyArPSBtc2c7IFxyXG4gICAgcmV0dXJuIHJldF9hc3NvYztcclxufVxyXG5cclxuZnVuY3Rpb24gYWxsX2VuY29kZShjb2RlOiBudW1iZXIsIGRhdGE6IG9iamVjdCk6IElfUmV0dXJuIHtcclxuICAgIGNvbnN0IHJldF9hc3NvYzogSV9SZXR1cm4gPSB7ZWNvZGU6Y29kZSwgZW1zZzogJyd9O1xyXG5cclxuICAgIHJldF9hc3NvYy5lY29kZSA9IGNvZGU7XHJcbiAgICBpZiAoY29kZSAhPT0gMCB8fCBndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICByZXR1cm4gZXJyX2VuY29kZShjb2RlLCBndi5tZXMuZ2V0X2Vycl9tZXNzYWdlcygpKTtcclxuICAgIH1cclxuICAgIHJldF9hc3NvYy5lbXNnID0gJ1N0YXR1cyBPSyc7XHJcbiAgICByZXRfYXNzb2MuZGF0YSA9ICBkYXRhO1xyXG5cclxuICAgIHJldHVybiByZXRfYXNzb2M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVfZW5jb2RlKGNvZGU6IG51bWJlciwgc2F2ZTogQ19TYXZlRGF0YSk6IElfUmV0dXJuIHtcclxuICAgIGNvbnN0IHJldF9hc3NvYzogSV9SZXR1cm4gPSB7ZWNvZGU6Y29kZSwgZW1zZzogJyd9O1xyXG5cclxuICAgIGlmIChjb2RlICE9PSAwIHx8IGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIHJldHVybiBlcnJfZW5jb2RlKGNvZGUsIGd2Lm1lcy5nZXRfZXJyX21lc3NhZ2VzKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0X2Fzc29jLmVtc2cgPSAnU3RhdHVzIE9LJztcclxuICAgIHJldF9hc3NvYy5zYXZlID0gc2F2ZS5lbmNvZGUoKTtcclxuXHJcbiAgICByZXR1cm4gcmV0X2Fzc29jO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlX3NhdmUobWF6ZTogQ19NYXplLCB0ZWFtOiBDX1RlYW0pOiBDX1NhdmVEYXRhIHtcclxuICAgIHJldHVybiBuZXcgQ19TYXZlRGF0YSh7XHJcbiAgICAgICAgcGxheWVyX2lkOiBnYS5waWQsXHJcbiAgICAgICAgYXV0b19tb2RlOiAnMCcsXHJcbiAgICAgICAgaXNfYWN0aXZlOiAnMScsXHJcbiAgICAgICAgaXNfZGVsZXRlOiAnMCcsXHJcblxyXG4gICAgICAgIGFsbF90ZWFtOiAgW3RlYW0uZW5jb2RlKCldLFxyXG4gICAgICAgIGFsbF9tYXplOiAgW21hemUuZW5jb2RlKCldLFxyXG4gICAgICAgIGFsbF9ndWxkOiAgW10sIFxyXG4gICAgICAgIGFsbF9tdnB0OiAgW10sIFxyXG5cclxuICAgICAgICBteXBvczogICAgIHRlYW0uZ2V0X2xvYygpLmVuY29kZSgpLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZV9tYXplKG1hemVfbmFtZTogc3RyaW5nID0gJycpOiBbQ19NYXplLCBDX1BvaW50RGlyXSB7XHJcbiAgICBsZXQgbWF6ZTogQ19NYXplO1xyXG4gICAgaWYgKG1hemVfbmFtZSA9PSAnJykge1xyXG4gICAgICAgIG1hemUgPSBuZXcgQ19NYXplKHtcclxuICAgICAgICAgICAgJ25hbWUnICA6ICflp4vjgb7jgorjga7ov7flrq4nLCBcclxuICAgICAgICAgICAgJ3NpemVfeCc6IDIxLCBcclxuICAgICAgICAgICAgJ3NpemVfeSc6IDIxLCBcclxuICAgICAgICAgICAgJ3NpemVfeic6IGd2Lk1heF9vZl9NYXplX0Zsb29yXHJcbiAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbWF6ZWluZm8gPSBndi5tYXplaW5mb1ttYXplX25hbWVdO1xyXG4gICAgICAgIG1hemUgPSBuZXcgQ19NYXplKHtcclxuICAgICAgICAgICAgJ25hbWUnOiAgIG1hemVpbmZvLm1ibmFtZSwgXHJcbiAgICAgICAgICAgICdzaXplX3gnOiBtYXplaW5mby5zaXplX3gsIFxyXG4gICAgICAgICAgICAnc2l6ZV95JzogbWF6ZWluZm8uc2l6ZV95LCBcclxuICAgICAgICAgICAgJ3NpemVfeic6IG1hemVpbmZvLnNpemVfelxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXplLmdldF96X21heCgpOyBpKyspIHtcclxuICAgICAgICBtYXplLmNyZWF0ZV9tYXplKGkpO1xyXG4gICAgfSBcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbWF6ZS5nZXRfel9tYXgoKTsgaSsrKSB7XHJcbiAgICAgICAgbWF6ZS5jcmVhdGVfc3RhaXIoaSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwb3MgPSBtYXplLmNyZWF0ZV9zdGFpcigwKTtcclxuICAgIHJldHVybiBbbWF6ZSwgcG9zXTtcclxufVxyXG5cclxuLy8g6L+35a6u5o6i57SiIOaWsOimj+OCsuODvOODoOeUqOOBruaaq+WumueJiOWHpue9ruOAguOBneOBruS6jFxyXG5mdW5jdGlvbiBjcmVhdGVfaHJlcygpOiBDX0hlcm9bXSB7XHJcbiAgICBjb25zdCBocmVzOiBDX0hlcm9bXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMzsgaSsrKSB7XHJcbiAgICAgICAgaHJlcy5wdXNoKG5ldyBDX0hlcm8oKS5yYW5kb21fbWFrZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaHJlcztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlX3RlYW0obWF6ZTogQ19NYXplLCBwb3M6IENfUG9pbnREaXIpOiBDX1RlYW0ge1xyXG4vKlxyXG4gICAgJHggPSAyICogcmFuZG9tX2ludCgwLCAoKCRtYXplLT5nZXRfc2l6ZV94KCkgLSAxKSAvIDIpIC0gMSkgKyAxO1xyXG4gICAgJHkgPSAyICogcmFuZG9tX2ludCgwLCAoKCRtYXplLT5nZXRfc2l6ZV95KCkgLSAxKSAvIDIpIC0gMSkgKyAxO1xyXG4gICAgJHogPSAwOyAgLy8gICAgJHogPSAxICogcmFuZG9tX2ludCgwLCAgKCRndi0+bWF6ZS0+Z2V0X3NpemVfeigpIC0gMSkpO1xyXG5cclxuICAgICRkID0gcmFuZG9tX2ludCgwLCBEaXJlY3Q6Ok1BWCk7XHJcbiovXHJcbmNvbnN0IHRlYW0gPSBuZXcgQ19UZWFtKCk7XHJcbmNvbnN0IGxvYyAgPSBuZXcgQ19Nb3ZhYmxlUG9pbnQoKS5kZWNvZGUoe1xyXG4gICAgICAgICdraW5kJyAgIDogJ01hemUnLFxyXG4gICAgICAgICduYW1lJyAgIDogIG1hemUuZ2V0X25hbWUoKSxcclxuICAgICAgICAnbG9jX3VpZCc6ICBtYXplLnVpZCgpLFxyXG4gICAgICAgICdsb2NfcG9zJzogIHBvcyxcclxuICAgICAgICAndGVhbV91aWQnOiB0ZWFtLnVpZCgpLFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgJ2xvY19wb3MnID0+IFtcclxuICAgICAgICAgICAgJ3gnICAgPT4gJHgsXHJcbiAgICAgICAgICAgICd5JyAgID0+ICR5LFxyXG4gICAgICAgICAgICAneicgICA9PiAkeixcclxuICAgICAgICAgICAgJ2QnICAgPT4gJGQsXHJcbiAgICAgICAgXSxcclxuKi9cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB0ZWFtLnNldF9wcnAoeyduYW1lJzogJ+OBsuOCiOOBk+OBleOCk+ODgeODvOODoCd9KTtcclxuICAgIHRlYW0uc2V0X2xvYyhsb2MpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMzsgaSsrKSB7XHJcbiAgICAgICAgdGVhbS5hZGRfaGVybyhuZXcgQ19IZXJvKCkucmFuZG9tX21ha2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRlYW07XHJcbn1cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDliJ3jgIDmnJ/jgIDoqK3jgIDlrpogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmZ1bmN0aW9uIGluaXQob2JqOiBJX0dsb2JhbEFyZ3VtZW50cyk6IHZvaWQge1xyXG4gICAgZ3YgPSBuZXcgQ19HbG9iYWxWYXIoKTtcclxuICAgIGdhID0gbmV3IENfR2xvYmFsQXJndW1lbnRzKG9iaik7XHJcbiAgICByZXR1cm47XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy9cclxuLy8vLy8gICAgIOOCr+ODqeOCueWuo+iogFxyXG4vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyDlpKfln5/lpInmlbDjga7oqK3lrppcclxuY2xhc3MgQ19HbG9iYWxWYXIge1xyXG4gICAgcHVibGljIG1lczogQ19Ec3BNZXNzYWdlO1xyXG5cclxuICAgIHB1YmxpYyBtYXplaW5mbzoge1ttYXplX25hbWU6IHN0cmluZ106IENfTWF6ZUluZm99ID0ge307XHJcbi8vICAgIHB1YmxpYyBtYXplOiAgICAgQ19NYXplO1xyXG4gICAgcHVibGljIHRlYW06ICAgICBDX1RlYW07XHJcbiAgICBwdWJsaWMgaGVyb2VzOiAgIENfSGVyb1tdID0gW107XHJcblxyXG4gICAgcHVibGljIE1hemVfc2l6ZV94ICAgICAgID0gMjE7XHJcbiAgICBwdWJsaWMgTWF6ZV9zaXplX3kgICAgICAgPSAyMTtcclxuICAgIHB1YmxpYyBMaW1pdF9vZl9yb29tICAgICA9IDU7XHJcbiAgICBwdWJsaWMgTWF4X3NpemVfb2Zfcm9vbSAgPSAzO1xyXG4gICAgcHVibGljIE1heF9vZl9NYXplX0Zsb29yID0gMztcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tZXMgPSBuZXcgQ19Ec3BNZXNzYWdlKCAvKiBpc0hUTUwgPSAqLyBmYWxzZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hemVpbmZvID0gQ19NYXplSW5mby5nZXRfdGJsX2FsbCgpOyBcclxuICAgICAgICBmb3IgKGNvbnN0IG1pIG9mIG1hemVpbmZvKSB0aGlzLm1hemVpbmZvW21pLm5hbWVdID0gbWk7IFxyXG4vKlxyXG4gICAgICAgIGNvbnN0IFtyc2x0LCBtYXplaW5mb10gID0gQ19NYXplSW5mby5nZXRfdGJsX2FsbCgpO1xyXG4gICAgICAgIHRoaXMubWF6ZWluZm8gPSAocnNsdCAhPT0gdW5kZWZpbmVkKSA/IG1hemVpbmZvIDogW107IFxyXG4qL1xyXG4vKlxyXG4gICAgICAgIHRoaXMubWF6ZSAgICAgICAgPSBuZXcgQ19NYXplKCkuY3JlYXRlX21ha2Uoe1xyXG4gICAgICAgICAgICBzaXplX3g6ICAgIHRoaXMuTWF6ZV9zaXplX3gsXHJcbiAgICAgICAgICAgIHNpemVfeTogICAgdGhpcy5NYXplX3NpemVfeSxcclxuICAgICAgICAgICAgc2l6ZV96OiAgICB0aGlzLk1heF9vZl9NYXplX0Zsb29yLCBcclxuICAgICAgICAgICAgZmlsbF9raW5kOiBUX016S2luZC5FbXB0eSxcclxuICAgICAgICAgICAgbWF4X3Jvb206ICB0aGlzLkxpbWl0X29mX3Jvb20sXHJcbiAgICAgICAgICAgIHJvb21fc2l6ZTogdGhpcy5NYXhfc2l6ZV9vZl9yb29tLFxyXG4gICAgfSk7XHJcbiovXHJcbiAgICAgICAgdGhpcy50ZWFtICAgICAgICA9ICBuZXcgQ19UZWFtKHtuYW1lOiAnTmV3IFRlYW0nLCB4OjEsIHk6MSwgejoxLCBkOlRfRGlyZWN0aW9uLk59KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIFBPU1TlvJXmlbDjga7oqK3lrppcclxuY2xhc3MgQ19HbG9iYWxBcmd1bWVudHMge1xyXG4gICAgcHVibGljIG1vZGU6ICAgICAgc3RyaW5nO1xyXG4gICAgcHVibGljIHBpZDogICAgICAgbnVtYmVyICAgPSAgMTtcclxuICAgIHB1YmxpYyBtYXplX25hbWU6IHN0cmluZyAgID0gJyc7XHJcblxyXG4vKlxyXG4gICAgcHVibGljIHRlYW1fSlNPTjogc3RyaW5nICAgPSAnJztcclxuICAgIHB1YmxpYyBtYXplX0pTT046IHN0cmluZyAgID0gJyc7XHJcbiovXHJcblxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvYmo6IElfR2xvYmFsQXJndW1lbnRzKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlICAgICAgPSBvYmo/Lm1vZGUgPz8gJ3Vua25vd24nO1xyXG4gICAgICAgIHRoaXMucGlkICAgICAgID0gb2JqPy5waWQgICE9PSB1bmRlZmluZWQgJiYgIWlzTmFOKG9iai5waWQpID8gTnVtYmVyKG9iai5waWQpIDogMTtcclxuICAgICAgICB0aGlzLm1hemVfbmFtZSA9IG9iaj8ubWF6ZV9uYW1lID8/ICcnO1xyXG4vKlxyXG4gICAgICAgIHRoaXMudGVhbV9KU09OID0gb2JqPy50ZWFtICAgICAgPz8gJyc7XHJcbiAgICAgICAgdGhpcy5tYXplX0pTT04gPSBvYmo/Lm1hemUgICAgICA/PyAnJztcclxuKi9cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbnRlcmZhY2UgfSBmcm9tICdyZWFkbGluZSc7XG5pbXBvcnQge25ld0d1bGQsIGFsbEhyZXN9IGZyb20gJy4uL2xpYi9fSlNPTl9tYWlfZ3VsZCdcbmltcG9ydCBjcmVhdGVFcnJvciAgZnJvbSAnaHR0cC1lcnJvcnMnO1xuXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbnZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4vKiBHRVQgdXNlcnMgbGlzdGluZy4gKi9cbnJvdXRlci5nZXQgKCcvJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSBtYWlHdWxkJyk7XG59KTtcblxucm91dGVyLnBvc3QoJy9uZXdHdWxkJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHRyeSB7XG4vL2RlYnVnICAgIGZvciAoY29uc3Qga2V5IGluIHJlcS5ib2R5KSBjb25zb2xlLmVycm9yKGByZXEuJHtrZXl9OiAke3JlcS5ib2R5W2tleV19YCk7XG5cbiAgICBjb25zdCByZXQgPSBuZXdHdWxkKHJlcS5ib2R5KTtcbiAgICByZXMuc3RhdHVzKDIwMCk7XG4gICAgcmVzLnNlbmQoSlNPTi5zdHJpbmdpZnkocmV0LCBudWxsLCBcIlxcdFwiKSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGBuZXdHYW1lIFBPU1QgZXJyb3I6ICR7ZXJyfWApO1xuICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XG4gIH1cbn0pO1xucm91dGVyLmdldCAoJy9uZXdHdWxkJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSBOZXcgR2FtZSBUbyBHdWxkIG9mIG1haScpO1xufSk7XG5cbnJvdXRlci5wb3N0KCcvYWxsSHJlcycsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICB0cnkge1xuLy9kZWJ1ZyAgICBmb3IgKGNvbnN0IGtleSBpbiByZXEuYm9keSkgY29uc29sZS5lcnJvcihgcmVxLiR7a2V5fTogJHtyZXEuYm9keVtrZXldfWApO1xuXG4gICAgY29uc3QgcmV0ID0gYWxsSHJlcyhyZXEuYm9keSk7XG4gICAgcmVzLnN0YXR1cygyMDApO1xuICAgIHJlcy5zZW5kKEpTT04uc3RyaW5naWZ5KHJldCwgbnVsbCwgXCJcXHRcIikpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhgbmV3SHJlcyBQT1NUIGVycm9yOiAke2Vycn1gKTtcbiAgICBuZXh0KGNyZWF0ZUVycm9yKDQwNikpO1xuICB9XG59KTtcblxucm91dGVyLmdldCAoJy9hbGxIcmVzJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggR2V0dGluZyBBbGwgSHJlcyBkYXRhIG9mIG1haScpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xuIiwiaW1wb3J0IHsgaW5mbywgbG9hZCwgc2F2ZSB9IGZyb20gJy4uL2xpYi9fSlNPTl9tYWlfbGRzdidcbmltcG9ydCB7IHRlc3QgfSAgICAgICAgICAgICBmcm9tICcuLi9saWIvX0pTT05fbWFpX2xkc3ZfdGVzdCdcbmltcG9ydCBjcmVhdGVFcnJvciAgICAgICAgICBmcm9tICdodHRwLWVycm9ycyc7XG5cbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbi8qIEdFVCB1c2VycyBsaXN0aW5nLiAqL1xucm91dGVyLmdldCAoJy8nLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIG1haUxvYWRTYXZlJyk7XG59KTtcblxuLypcbioqICBTZW5kIFNhdmVJbmZvXG4qL1xucm91dGVyLnBvc3QoJy9faW5mbycsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuLy9kZWJ1ZyAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlcS5ib2R5KSBjb25zb2xlLmVycm9yKGByZXEuJHtrZXl9OiAke3JlcS5ib2R5W2tleV19YCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByc2x0ID0gYXdhaXQgaW5mbyhyZXEuYm9keSk7XG4gICAgaWYgKHJzbHQuZWNvZGUgIT09IDApIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYCoqKiBlcnJvcjogJHtyc2x0LmVjb2RlfTogJHtyc2x0LmVtc2d9ICoqKmApO1xuICAgICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcbiAgICB9XG4gICAgcmVzLnN0YXR1cygyMDApO1xuICAgIHJlcy5zZW5kKEpTT04uc3RyaW5naWZ5KHJzbHQsIG51bGwsIFwiXFx0XCIpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coYExkU3YgaW5mbyBQT1NUIGVycm9yOiAke2Vycn1gKTtcbiAgICBuZXh0KGNyZWF0ZUVycm9yKDQwNikpO1xuICB9XG59KTtcbnJvdXRlci5nZXQgKCcvX2luZm8nLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIG1haUxkU3YgaW5mbycpO1xufSk7XG5cblxuLypcbioqICBTZW5kIExhb2REYXRhXG4qL1xucm91dGVyLnBvc3QoJy9fbG9hZCcsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuLy9kZWJ1ZyAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlcS5ib2R5KSBjb25zb2xlLmVycm9yKGByZXEuJHtrZXl9OiAke3JlcS5ib2R5W2tleV19YCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByc2x0ID0gYXdhaXQgbG9hZChyZXEuYm9keSk7XG4gICAgaWYgKHJzbHQuZWNvZGUgIT09IDApIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYCoqKiBlcnJvcjogJHtyc2x0LmVjb2RlfTogJHtyc2x0LmVtc2d9ICoqKmApO1xuICAgICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcbiAgICB9XG4gICAgcmVzLnN0YXR1cygyMDApO1xuICAgIHJlcy5zZW5kKEpTT04uc3RyaW5naWZ5KHJzbHQsIG51bGwsIFwiXFx0XCIpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coYExkU3YgbG9hZCBQT1NUIGVycm9yOiAke2Vycn1gKTtcbiAgICBuZXh0KGNyZWF0ZUVycm9yKDQwNikpO1xuICB9XG59KTtcbnJvdXRlci5nZXQgKCcvX2xvYWQnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIG1haUxkU3YgbG9hZCcpO1xufSk7XG5cblxuLypcbioqICBTZW5kIFNhdmVEYXRhXG4qL1xucm91dGVyLnBvc3QoJy9fc2F2ZScsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuLy9kZWJ1ZyAgICBmb3IgKGNvbnN0IGtleSBpbiByZXEuYm9keSkgY29uc29sZS5lcnJvcihgcmVxLiR7a2V5fTogJHtyZXEuYm9keVtrZXldfWApO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcnNsdCA9IGF3YWl0IHNhdmUocmVxLmJvZHkpO1xuICAgIGlmIChyc2x0LmVjb2RlICE9PSAwKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGAqKiogZXJyb3I6ICR7cnNsdC5lY29kZX06ICR7cnNsdC5lbXNnfSAqKipgKTtcbiAgICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XG4gICAgfVxuICAgIHJlcy5zdGF0dXMoMjAwKTtcbiAgICByZXMuc2VuZChKU09OLnN0cmluZ2lmeShyc2x0LCBudWxsLCBcIlxcdFwiKSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGBMZFN2IHNhdmUgUE9TVCBlcnJvcjogJHtlcnJ9YCk7XG4gICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcbiAgfVxufSk7XG5yb3V0ZXIuZ2V0ICgnL19zYXZlJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSBtYWlMZFN2IHNhdmUnKTtcbn0pO1xuXG5cblxuLypcbioqIEZvciBUZXN0IEZ1bmN0aW9uXG4qL1xucm91dGVyLnBvc3QoJy90ZXN0JywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHRyeSB7XG4vL2RlYnVnICAgIGZvciAoY29uc3Qga2V5IGluIHJlcS5ib2R5KSBjb25zb2xlLmVycm9yKGByZXEuJHtrZXl9OiAke3JlcS5ib2R5W2tleV19YCk7XG5cbiAgICBjb25zdCByc2x0ID0gYXdhaXQgdGVzdChyZXEuYm9keSk7XG4gICAgaWYgKHJzbHQuZWNvZGUgIT09IDApIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYCoqKiBlcnJvcjogJHtyc2x0LmVjb2RlfTogJHtyc2x0LmVtc2d9ICoqKmApO1xuICAgICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcbiAgICB9XG5cbiAgICByZXMucmVuZGVyKCdwYWdlcy90ZXN0JywgcnNsdCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoYG5ld0xvYWQgUE9TVCBlcnJvcjogJHtlcnJ9YCk7XG4gICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcbiAgfVxufSk7XG5yb3V0ZXIuZ2V0ICgnL3Rlc3QnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgdHJ5IHtcbi8vZGVidWcgICAgZm9yIChjb25zdCBrZXkgaW4gcmVxLmJvZHkpIGNvbnNvbGUuZXJyb3IoYHJlcS4ke2tleX06ICR7cmVxLmJvZHlba2V5XX1gKTtcblxuICAgIHJlcy5yZW5kZXIoJ3BhZ2VzL3Rlc3QnLHtwaWQ6IC0xfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGBuZXdMb2FkIFBPU1QgZXJyb3I6ICR7ZXJyfWApO1xuICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XG4gIH1cbi8vICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgTG9hZCBUZXN0ICBvZiBtYWknKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcbiIsImltcG9ydCB7IGFsbE1hemUsIGdldE1hemUsIG5ld01hemUgfSAgZnJvbSAnLi4vbGliL19KU09OX21haV9tYXplJztcbmltcG9ydCBjcmVhdGVFcnJvciAgZnJvbSAnaHR0cC1lcnJvcnMnO1xuXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbnZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4vKiBHRVQgdXNlcnMgbGlzdGluZy4gKi9cbnJvdXRlci5nZXQgKCcvJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSBtYWlNYXplJyk7XG59KTtcblxucm91dGVyLnBvc3QoJy9uZXdNYXplJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHRyeSB7XG4vL2RlYnVnICAgIGZvciAoY29uc3Qga2V5IGluIHJlcS5ib2R5KSBjb25zb2xlLmVycm9yKGByZXEuJHtrZXl9OiAke3JlcS5ib2R5W2tleV19YCk7XG5cbiAgICBjb25zdCByZXQgPSBuZXdNYXplKHJlcS5ib2R5KTtcbiAgICByZXMuc3RhdHVzKDIwMCk7XG4gICAgcmVzLnNlbmQoSlNPTi5zdHJpbmdpZnkocmV0LCBudWxsLCBcIlxcdFwiKSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGBuZXdHYW1lIFBPU1QgZXJyb3I6ICR7ZXJyfWApO1xuICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XG4gIH1cbn0pO1xuXG5yb3V0ZXIuZ2V0ICgnL25ld01hemUnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIE5ldyBHYW1lIFRvIE1hemUgb2YgbWFpJyk7XG59KTtcblxucm91dGVyLnBvc3QoJy9nZXRNYXplJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHRyeSB7XG4vL2RlYnVnICAgIGZvciAoY29uc3Qga2V5IGluIHJlcS5ib2R5KSBjb25zb2xlLmVycm9yKGByZXEuJHtrZXl9OiAke3JlcS5ib2R5W2tleV19YCk7XG5cbiAgICBjb25zdCByZXQgPSBnZXRNYXplKHJlcS5ib2R5KTtcbiAgICByZXMuc3RhdHVzKDIwMCk7XG4gICAgcmVzLnNlbmQoSlNPTi5zdHJpbmdpZnkocmV0LCBudWxsLCBcIlxcdFwiKSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGBuZXdNYXplIFBPU1QgZXJyb3I6ICR7ZXJyfWApO1xuICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XG4gIH1cbn0pO1xuXG5yb3V0ZXIuZ2V0ICgnL2dldE1hemUnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBHZXR0aW5nIE5ldyBNYXplIGRhdGEgb2YgbWFpJyk7XG59KTtcblxuXG5yb3V0ZXIucG9zdCgnL2FsbE1hemUnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgdHJ5IHtcbi8vZGVidWcgICAgZm9yIChjb25zdCBrZXkgaW4gcmVxLmJvZHkpIGNvbnNvbGUuZXJyb3IoYHJlcS4ke2tleX06ICR7cmVxLmJvZHlba2V5XX1gKTtcblxuICAgIGNvbnN0IHJldCA9IGFsbE1hemUocmVxLmJvZHkpO1xuICAgIHJlcy5zdGF0dXMoMjAwKTtcbiAgICByZXMuc2VuZChKU09OLnN0cmluZ2lmeShyZXQsIG51bGwsIFwiXFx0XCIpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coYG1hemVJbmZvIFBPU1QgZXJyb3I6ICR7ZXJyfWApO1xuICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XG4gIH1cbn0pO1xuXG5yb3V0ZXIuZ2V0ICgnL2FsbE1hemUnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBBbGwgTWF6ZSBJbmZvbWF0aW9uIG9mIG1haScpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5cbnZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xudmFyIG1haUd1bGRSb3V0ZXIgPSByZXF1aXJlKCcuL21haUd1bGQnKTtcbnZhciBtYWlNYXplUm91dGVyID0gcmVxdWlyZSgnLi9tYWlNYXplJyk7XG52YXIgbWFpTGRTdlJvdXRlciA9IHJlcXVpcmUoJy4vbWFpTGRTdicpO1xuXG4vLyByb3V0ZXIgc2V0dXBcbnJvdXRlci51c2UoJy9ndWxkJywgICBtYWlHdWxkUm91dGVyKTtcbnJvdXRlci51c2UoJy9tYXplJywgICBtYWlNYXplUm91dGVyKTtcbnJvdXRlci51c2UoJy9sZHN2JywgICBtYWlMZFN2Um91dGVyKTtcblxuLyogR0VUIHVzZXJzIGxpc3RpbmcuICovXG5yb3V0ZXIuZ2V0KCcvJywgZnVuY3Rpb24ocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pIHtcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIG1haWV4Jyk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbnZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4vKiBHRVQgdXNlcnMgbGlzdGluZy4gKi9cbnJvdXRlci5nZXQoJy8nLCBmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgdXNlciByZXNvdXJjZScpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHAtZXJyb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJteXNxbDIvcHJvbWlzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=