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
            //            col_f: '', col_b: '', col_s: '', col_t: '#ffffcc', col_d: '#ffffcc', 
            col_f: '', col_b: '', col_s: '', col_t: '', col_d: '#ffffcc',
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
            //            col_f: '', col_b: '', col_s: '', col_t: '#ffffcc', col_d: '#ffffcc', 
            col_f: '', col_b: '', col_s: '', col_t: '#ffffcc', col_d: '',
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

/***/ "../mai/src/d_rdb/C_MvptRDB.ts":
/*!*************************************!*\
  !*** ../mai/src/d_rdb/C_MvptRDB.ts ***!
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
exports.C_MvptRDB = void 0;
var C_MovablePoint_1 = __webpack_require__(/*! ../d_mdl/C_MovablePoint */ "../mai/src/d_mdl/C_MovablePoint.ts");
var C_MvptRDB = /** @class */ (function () {
    function C_MvptRDB() {
    }
    C_MvptRDB.get_from_rdb_all = function (db_mai, mes, save_id) {
        return __awaiter(this, void 0, void 0, function () {
            var mvpt_array;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, C_MvptRDB.get_from_tbl_all(db_mai, mes, save_id)];
                    case 1:
                        mvpt_array = _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/, mvpt_array];
                }
            });
        });
    };
    C_MvptRDB.set_to_rdb = function (db_mai, mes, save_id, mvpt) {
        return __awaiter(this, void 0, void 0, function () {
            var mase_id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, C_MvptRDB.add_tbl(db_mai, mes, save_id, mvpt)];
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
    C_MvptRDB.del_to_rdb = function (db_mai, mes, save_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                C_MvptRDB.del_tbl(db_mai, mes, save_id);
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
    C_MvptRDB.get_from_tbl_all = function (db_mai, mes, save_id) {
        return __awaiter(this, void 0, void 0, function () {
            var get_mvpt_SQL, resultRecordSet, mvpt_array, _i, resultRecordSet_1, rr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        get_mvpt_SQL = "\n            SELECT \t    id, save_id, uniq_id, cur_url, team_uid,\n                        loc_kind,  loc_name,  loc_uid,\n                        loc_pos_x, loc_pos_y, loc_pos_z, loc_pos_d\n            FROM tbl_mvpt\n            WHERE   save_id = :save_id\n        ";
                        return [4 /*yield*/, db_mai.query(get_mvpt_SQL, { save_id: save_id })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 33: ".concat(get_mvpt_SQL));
                                return [];
                            })];
                    case 1:
                        resultRecordSet = (_a.sent())[0];
                        if (resultRecordSet.length < 1) {
                            return [2 /*return*/, []];
                        }
                        mvpt_array = [];
                        for (_i = 0, resultRecordSet_1 = resultRecordSet; _i < resultRecordSet_1.length; _i++) {
                            rr = resultRecordSet_1[_i];
                            mvpt_array.push(new C_MovablePoint_1.C_MovablePoint(C_MvptRDB.from_stringArray_to_JSON(rr)));
                        }
                        return [2 /*return*/, mvpt_array];
                }
            });
        });
    };
    // DB処理。mazeテーブルに自身のデータを追加(insert)して
    // そのID(maze_id)を返す
    // 
    C_MvptRDB.add_tbl = function (db_mai, mes, save_id, mvpt) {
        return __awaiter(this, void 0, void 0, function () {
            var insert_mvpt_SQL, j;
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        insert_mvpt_SQL = "\n            INSERT INTO tbl_mvpt(\n                save_id,    uniq_id,    cur_url,    team_uid,\n                loc_kind,   loc_name,   loc_uid,\n                loc_pos_x,  loc_pos_y,  loc_pos_z,  loc_pos_d\n            )\n            VALUES (\n                :save_id,   :uniq_id,   :cur_url,   :team_uid,\n                :loc_kind,  :loc_name,  :loc_uid,\n                :loc_pos_x, :loc_pos_y, :loc_pos_z, :loc_pos_d \n            )\n        ";
                        j = mvpt.encode();
                        //Debug
                        /*
                        console.error(
                                "save_id="   +    save_id
                            + ", uniq_id="   +    j.uniq_id
                            + ", cur_url="   +    j.cur_url
                            + ", team_uid="  +    j.team_uid
                            + ", loc_kind="  +    j.kind
                            + ", loc_name="  +    j.name
                            + ", loc_uid="   +    j.loc_uid
                            + ", loc_pos_x=" +   (j.loc_pos?.x??0)
                            + ", loc_pos_y=" +   (j.loc_pos?.y??0)
                            + ", loc_pos_z=" +   (j.loc_pos?.z??0)
                            + ", loc_pos_d=" +   (j.loc_pos?.d??0)
                        )
                        */
                        return [4 /*yield*/, db_mai.query(insert_mvpt_SQL, {
                                save_id: save_id,
                                uniq_id: j.uniq_id,
                                cur_url: j.cur_url,
                                team_uid: j.team_uid,
                                loc_kind: j.kind,
                                loc_name: j.name,
                                loc_uid: j.loc_uid,
                                loc_pos_x: (_b = (_a = j.loc_pos) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : 0,
                                loc_pos_y: (_d = (_c = j.loc_pos) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : 0,
                                loc_pos_z: (_f = (_e = j.loc_pos) === null || _e === void 0 ? void 0 : _e.z) !== null && _f !== void 0 ? _f : 0,
                                loc_pos_d: (_h = (_g = j.loc_pos) === null || _g === void 0 ? void 0 : _g.d) !== null && _h !== void 0 ? _h : 99,
                            })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 3: ".concat(insert_mvpt_SQL));
                                return [];
                            })];
                    case 1:
                        //Debug
                        /*
                        console.error(
                                "save_id="   +    save_id
                            + ", uniq_id="   +    j.uniq_id
                            + ", cur_url="   +    j.cur_url
                            + ", team_uid="  +    j.team_uid
                            + ", loc_kind="  +    j.kind
                            + ", loc_name="  +    j.name
                            + ", loc_uid="   +    j.loc_uid
                            + ", loc_pos_x=" +   (j.loc_pos?.x??0)
                            + ", loc_pos_y=" +   (j.loc_pos?.y??0)
                            + ", loc_pos_z=" +   (j.loc_pos?.z??0)
                            + ", loc_pos_d=" +   (j.loc_pos?.d??0)
                        )
                        */
                        _j.sent();
                        return [2 /*return*/, C_MvptRDB.lastInsert(db_mai, mes)];
                }
            });
        });
    };
    // tbl_teamで最後に追加した行番号(save_id)を返す【1行挿入専用】
    C_MvptRDB.lastInsert = function (db_mai, mes) {
        return __awaiter(this, void 0, void 0, function () {
            var lastInsert_SQL, recordSet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lastInsert_SQL = "\n            SELECT LAST_INSERT_ID() as id FROM tbl_mvpt;\n        ";
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
    C_MvptRDB.del_tbl = function (db_mai, mes, save_id) {
        return __awaiter(this, void 0, void 0, function () {
            var delete_mvpt_SQL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        delete_mvpt_SQL = "\n            DELETE FROM tbl_mvpt \n            WHERE  save_id = :save_id\n        ";
                        return [4 /*yield*/, db_mai.query(delete_mvpt_SQL, { save_id: save_id })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 12: ".concat(delete_mvpt_SQL, " ") + err);
                                return false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    C_MvptRDB.from_stringArray_to_JSON = function (j) {
        var _a, _b, _c, _d;
        return {
            uniq_id: j.uniq_id,
            cur_url: j.cur_url,
            team_uid: j.team_uid,
            kind: j.loc_kind,
            name: j.loc_name,
            loc_uid: j.loc_uid,
            loc_pos: {
                x: (_a = j.loc_pos_x) !== null && _a !== void 0 ? _a : 0,
                y: (_b = j.loc_pos_y) !== null && _b !== void 0 ? _b : 0,
                z: (_c = j.loc_pos_z) !== null && _c !== void 0 ? _c : 0,
                d: (_d = j.loc_pos_d) !== null && _d !== void 0 ? _d : 99,
            }
        };
    };
    return C_MvptRDB;
}());
exports.C_MvptRDB = C_MvptRDB;


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
var C_MvptRDB_1 = __webpack_require__(/*! ./C_MvptRDB */ "../mai/src/d_rdb/C_MvptRDB.ts");
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
            var save_data, maze_array, _i, maze_array_1, maze, mvpt_array, _a, mvpt_array_1, mvpt, team_array, _b, team_array_1, team, guld_array, _c, guld_array_1, guld;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, C_SaveDataRDB.get_from_tbl(db_mai, mes, save_id)];
                    case 1:
                        save_data = _d.sent();
                        if (save_data === undefined || mes.is_err()) {
                            return [2 /*return*/, undefined];
                        }
                        return [4 /*yield*/, C_MazeRDB_1.C_MazeRDB.get_from_rdb_all(db_mai, mes, save_id)];
                    case 2:
                        maze_array = _d.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, undefined];
                        }
                        for (_i = 0, maze_array_1 = maze_array; _i < maze_array_1.length; _i++) {
                            maze = maze_array_1[_i];
                            save_data.all_maze[maze.uid()] = maze;
                        }
                        return [4 /*yield*/, C_MvptRDB_1.C_MvptRDB.get_from_rdb_all(db_mai, mes, save_id)];
                    case 3:
                        mvpt_array = _d.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, undefined];
                        }
                        for (_a = 0, mvpt_array_1 = mvpt_array; _a < mvpt_array_1.length; _a++) {
                            mvpt = mvpt_array_1[_a];
                            save_data.all_mvpt[mvpt.uid()] = mvpt;
                        }
                        return [4 /*yield*/, C_TeamRDB_1.C_TeamRDB.get_from_rdb_all(db_mai, mes, save_id)];
                    case 4:
                        team_array = _d.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, undefined];
                        }
                        for (_b = 0, team_array_1 = team_array; _b < team_array_1.length; _b++) {
                            team = team_array_1[_b];
                            save_data.all_team[team.uid()] = team;
                        }
                        return [4 /*yield*/, C_GuildRDB_1.C_GuildRDB.get_from_rdb_all(db_mai, mes, save_id)];
                    case 5:
                        guld_array = _d.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, undefined];
                        }
                        for (_c = 0, guld_array_1 = guld_array; _c < guld_array_1.length; _c++) {
                            guld = guld_array_1[_c];
                            save_data.all_guld[guld.uid()] = guld;
                        }
                        return [2 /*return*/, save_data];
                }
            });
        });
    };
    C_SaveDataRDB.set_to_rdb = function (db_mai, mes, save) {
        return __awaiter(this, void 0, void 0, function () {
            var save_id, _a, _b, _c, _i, ii, _d, _e, _f, _g, ii, _h, _j, _k, _l, ii, _m, _o, _p, _q, ii;
            return __generator(this, function (_r) {
                switch (_r.label) {
                    case 0:
                        if (save === undefined)
                            return [2 /*return*/, false];
                        return [4 /*yield*/, C_SaveDataRDB.add_tbl(db_mai, mes, save)];
                    case 1:
                        save_id = _r.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        _a = save.all_maze;
                        _b = [];
                        for (_c in _a)
                            _b.push(_c);
                        _i = 0;
                        _r.label = 2;
                    case 2:
                        if (!(_i < _b.length)) return [3 /*break*/, 5];
                        _c = _b[_i];
                        if (!(_c in _a)) return [3 /*break*/, 4];
                        ii = _c;
                        return [4 /*yield*/, C_MazeRDB_1.C_MazeRDB.set_to_rdb(db_mai, mes, save_id, save.all_maze[ii])];
                    case 3:
                        _r.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        _r.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5:
                        _d = save.all_mvpt;
                        _e = [];
                        for (_f in _d)
                            _e.push(_f);
                        _g = 0;
                        _r.label = 6;
                    case 6:
                        if (!(_g < _e.length)) return [3 /*break*/, 9];
                        _f = _e[_g];
                        if (!(_f in _d)) return [3 /*break*/, 8];
                        ii = _f;
                        //debug console.error(`save_id = ${save_id}, mvpt[${ii}] = ${save.all_mvpt[ii]}`);
                        return [4 /*yield*/, C_MvptRDB_1.C_MvptRDB.set_to_rdb(db_mai, mes, save_id, save.all_mvpt[ii])];
                    case 7:
                        //debug console.error(`save_id = ${save_id}, mvpt[${ii}] = ${save.all_mvpt[ii]}`);
                        _r.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        _r.label = 8;
                    case 8:
                        _g++;
                        return [3 /*break*/, 6];
                    case 9:
                        _h = save.all_team;
                        _j = [];
                        for (_k in _h)
                            _j.push(_k);
                        _l = 0;
                        _r.label = 10;
                    case 10:
                        if (!(_l < _j.length)) return [3 /*break*/, 13];
                        _k = _j[_l];
                        if (!(_k in _h)) return [3 /*break*/, 12];
                        ii = _k;
                        return [4 /*yield*/, C_TeamRDB_1.C_TeamRDB.set_to_rdb(db_mai, mes, save_id, save.all_team[ii])];
                    case 11:
                        _r.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        _r.label = 12;
                    case 12:
                        _l++;
                        return [3 /*break*/, 10];
                    case 13:
                        _m = save.all_guld;
                        _o = [];
                        for (_p in _m)
                            _o.push(_p);
                        _q = 0;
                        _r.label = 14;
                    case 14:
                        if (!(_q < _o.length)) return [3 /*break*/, 17];
                        _p = _o[_q];
                        if (!(_p in _m)) return [3 /*break*/, 16];
                        ii = _p;
                        return [4 /*yield*/, C_GuildRDB_1.C_GuildRDB.set_to_rdb(db_mai, mes, save_id, save.all_guld[ii])];
                    case 15:
                        _r.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        _r.label = 16;
                    case 16:
                        _q++;
                        return [3 /*break*/, 14];
                    case 17: return [2 /*return*/, true];
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
                        return [4 /*yield*/, C_MvptRDB_1.C_MvptRDB.del_tbl(db_mai, mes, save_id)];
                    case 4:
                        _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, C_MazeRDB_1.C_MazeRDB.del_tbl(db_mai, mes, save_id)];
                    case 5:
                        _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, C_SaveDataRDB.del_tbl(db_mai, mes, save_id)];
                    case 6:
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
                        get_save_SQL = "\n            SELECT  save_id, player_id, uniq_no, title, detail, point, \n                    auto_mode, is_active, is_delete, \n                    mypos as mp, DATE_FORMAT(save_time,'%Y-%m-%dT%H:%i:%s.%fZ') AS save_time\n            FROM   tbl_save\n            WHERE  save_id = :save_id\n        ";
                        return [4 /*yield*/, db_mai.query(get_save_SQL, { save_id: save_id })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 30: ".concat(get_save_SQL, " ") + err);
                                return [];
                            })];
                    case 1:
                        recordSet = (_a.sent())[0];
                        //degub 
                        if (recordSet === undefined)
                            console.error("SaveDataRDB.get_from_table Error: undefinde!! save_id=".concat(save_id));
                        if (recordSet.length < 1) {
                            mes.set_err_message("\u8A72\u5F53\u3059\u308B\u30C7\u30FC\u30BF\u304C\u6709\u308A\u307E\u305B\u3093: ".concat(get_save_SQL));
                            return [2 /*return*/, undefined];
                        }
                        save = new C_SaveData_1.C_SaveData(recordSet[0]);
                        save.mypos = C_MovablePoint_1.C_MovablePoint.from_string_to_obj(recordSet[0].mp);
                        //        save.all_mvpt  = C_MovablePoint.from_string_to_objArray(recordSet[0].mvpt);
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
                        insert_save_SQL = "\n            INSERT  INTO tbl_save (\n                    player_id, uniq_no,   title, detail, point, \n                    mypos, \n                    auto_mode, is_active, is_delete\n                )\n            VALUES ( \n                    :player_id, :uniq_no,   :title, :detail, :point, \n                    :mypos, \n                    :auto_mode, :is_active, :is_delete)\n        ";
                        return [4 /*yield*/, db_mai.query(insert_save_SQL, {
                                player_id: save.player_id,
                                uniq_no: save.uniq_no,
                                title: save.title,
                                detail: save.detail,
                                point: save.point,
                                mypos: C_MovablePoint_1.C_MovablePoint.from_obj_to_string(save.mypos),
                                //            all_mvpt:  C_MovablePoint.from_objArray_to_string(save.all_mvpt),
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
    for (var i = 0; i < 1; i++) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7O0FBa0JiLDBDQVlDO0FBNUJELDZGQUFxRDtBQUVyRCxpRkFBaUQ7QUFDakQsd0ZBQXdEO0FBYXhELFNBQWdCLGVBQWUsQ0FBQyxDQUF1Qjs7SUFDbkQsSUFBSSxDQUFDLEtBQUssU0FBUztRQUFFLE9BQU87SUFDNUIsS0FBSyxDQUFDLGFBQWE7VUFDYixjQUFjLEdBQUcsQ0FBQyxPQUFDLENBQUMsRUFBRSxtQ0FBVyxHQUFHLENBQUM7VUFDckMsY0FBYyxHQUFHLENBQUMsT0FBQyxDQUFDLE9BQU8sbUNBQU0sR0FBRyxDQUFDO1VBQ3JDLGNBQWMsR0FBRyxDQUFDLE9BQUMsQ0FBQyxPQUFPLG1DQUFNLEdBQUcsQ0FBQztVQUNyQyxjQUFjLEdBQUcsQ0FBQyxPQUFDLENBQUMsSUFBSSxtQ0FBUyxHQUFHLENBQUM7VUFDckMsY0FBYyxHQUFHLENBQUMsT0FBQyxDQUFDLElBQUksbUNBQVUsQ0FBQyxDQUFFO1FBQy9DLDZEQUE2RDtVQUNuRCxjQUFjLEdBQUcsQ0FBQyxhQUFDLENBQUMsTUFBTSwwQ0FBRSxNQUFNLG1DQUFJLEdBQUcsQ0FBQztVQUMxQyxJQUFJLENBQ1QsQ0FBQztBQUNOLENBQUM7QUFFRDtJQVFJLGlCQUFtQixDQUFjO1FBQzdCLElBQUksQ0FBQyxFQUFFLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBTSxXQUFXLEdBQUcsc0JBQVMsR0FBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQU0sQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBUyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBVSxDQUFDLENBQUM7UUFDN0IsOENBQThDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQU8sRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxxQkFBRyxHQUFWLGNBQXVCLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBQztJQUNwQywwQkFBUSxHQUFmLGNBQTJCLE9BQU8sbUJBQU0sQ0FBQyxJQUFJLEdBQUM7SUFDdkMsMEJBQVEsR0FBZixjQUEyQixPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUM7SUFFckMsc0JBQUksR0FBWDtRQUNJLElBQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQztRQUMxQixLQUFLLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNNLDRCQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNNLDBCQUFRLEdBQWYsVUFBZ0IsSUFBWTtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBQ00sMEJBQVEsR0FBZixVQUFnQixJQUFZO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQThCRTtJQUVTLHdCQUFNLEdBQWI7UUFDSSxJQUFNLFdBQVcsR0FBZ0IsRUFBRSxDQUFDO1FBQ3BDLEtBQUssSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUV2RSxPQUFPO1lBQ0gsRUFBRSxFQUFPLElBQUksQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsSUFBSSxFQUFLLElBQUksQ0FBQyxJQUFJO1lBQzlCLDJDQUEyQztZQUMvQixNQUFNLEVBQUcsV0FBVztZQUNwQixJQUFJLEVBQUssSUFBSSxDQUFDLElBQUk7U0FDckI7SUFDTCxDQUFDO0lBQ00sd0JBQU0sR0FBYixVQUFjLENBQXVCO1FBQ2pDLElBQUksQ0FBQyxLQUFLLFNBQVM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUVqQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQVcsU0FBUztZQUFFLElBQUksQ0FBQyxFQUFFLEdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQU0sU0FBUztZQUFFLElBQUksQ0FBQyxPQUFPLEdBQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUMxRCxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQU0sU0FBUztZQUFFLElBQUksQ0FBQyxPQUFPLEdBQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUMxRCxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQVMsU0FBUztZQUFFLElBQUksQ0FBQyxJQUFJLEdBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN2RCxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQVMsU0FBUztZQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDaEQsb0VBQW9FO1FBRTVELElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUcsQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNqQixLQUF3QixVQUFRLEVBQVIsTUFBQyxDQUFDLE1BQU0sRUFBUixjQUFRLEVBQVIsSUFBUSxFQUFFLENBQUM7Z0JBQTlCLElBQU0sU0FBUztnQkFDaEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxlQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ25DLENBQUM7UUFDTCxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNhLGtCQUFVLEdBQXhCLFVBQXlCLFFBQW1CO1FBQ3hDLElBQU0sYUFBYSxHQUFpQixFQUFFLENBQUM7UUFDdkMsS0FBaUIsVUFBUSxFQUFSLHFCQUFRLEVBQVIsc0JBQVEsRUFBUixJQUFRLEVBQUUsQ0FBQztZQUF2QixJQUFJLElBQUk7WUFDVCxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFDRCxPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDO0lBQ2Esa0JBQVUsR0FBeEIsVUFBeUIsYUFBMkI7UUFDaEQsSUFBTSxRQUFRLEdBQWMsRUFBRSxDQUFDO1FBQy9CLEtBQXNCLFVBQWEsRUFBYiwrQkFBYSxFQUFiLDJCQUFhLEVBQWIsSUFBYSxFQUFFLENBQUM7WUFBakMsSUFBSSxTQUFTO1lBQ2QsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVNLHVCQUFLLEdBQVo7O1FBQ0ksS0FBSyxDQUFDLGFBQWE7Y0FDYixjQUFjLEdBQUcsQ0FBQyxVQUFJLENBQUMsRUFBRSxtQ0FBZ0IsR0FBRyxDQUFDO2NBQzdDLGNBQWMsR0FBRyxDQUFDLFVBQUksQ0FBQyxPQUFPLG1DQUFXLEdBQUcsQ0FBQztjQUM3QyxjQUFjLEdBQUcsQ0FBQyxVQUFJLENBQUMsT0FBTyxtQ0FBVyxHQUFHLENBQUM7Y0FDN0MsY0FBYyxHQUFHLENBQUMsVUFBSSxDQUFDLElBQUksbUNBQWMsR0FBRyxDQUFDO2NBQzdDLGNBQWMsR0FBRyxDQUFDLFVBQUksQ0FBQyxJQUFJLG1DQUFlLENBQUMsQ0FBQztZQUMxRCxvRUFBb0U7Y0FDdEQsY0FBYyxHQUFHLENBQUMsZ0JBQUksQ0FBQyxNQUFNLDBDQUFFLE1BQU0sbUNBQUksR0FBRyxDQUFDO2NBQzdDLElBQUksQ0FDVCxDQUFDO0lBQ04sQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDO0FBbElZLDBCQUFPOzs7Ozs7Ozs7OztBQ2hDUDs7O0FBOEJiLDBDQU9DO0FBRUQsMENBVUM7QUEvQ0Qsc0dBQWtFO0FBRWxFLHdGQUEyRTtBQTBCM0UsU0FBZ0IsZUFBZSxDQUFDLENBQW9DO0lBQ2hFLElBQUksQ0FBQyxLQUFLLFNBQVM7UUFBRSxPQUFPO0lBQzVCLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVM7WUFBRSxTQUFTO1FBQ2pDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQWdCLGVBQWUsQ0FBQyxDQUFzQjs7SUFDbEQsSUFBSSxDQUFDLEtBQUssU0FBUztRQUFFLE9BQU87SUFDNUIsS0FBSyxDQUFDLGNBQWM7VUFDZCxjQUFjLEdBQU8sQ0FBQyxPQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsRUFBRSxtQ0FBVyxHQUFHLENBQUM7VUFDMUMsY0FBYyxHQUFPLENBQUMsT0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLE9BQU8sbUNBQU0sR0FBRyxDQUFDO1VBQzFDLGNBQWMsR0FBTyxDQUFDLE9BQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxJQUFJLG1DQUFTLEdBQUcsQ0FBQztVQUMxQyxjQUFjLEdBQU8sQ0FBQyxPQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsT0FBTyxtQ0FBTSxHQUFHLENBQUM7VUFDMUMsY0FBYyxHQUFPLENBQUMsT0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLFFBQVEsbUNBQUssR0FBRyxDQUFDO1VBQzFDLElBQUksQ0FDVCxDQUFDO0FBQ04sQ0FBQztBQUVEO0lBa0JJLGdCQUFtQixDQUFhO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQVEsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQU0sY0FBYyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQU0sV0FBVyxHQUFHLHNCQUFTLEdBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxHQUFVLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxHQUFVLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFTLENBQUMsQ0FBQztRQUM1QiwrQ0FBK0M7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBUSxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLEVBQUUsR0FBVyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBVSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBUSxFQUFDLEdBQUcsRUFBRSxJQUFJLDZCQUFhLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSw2QkFBYSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksNkJBQWEsRUFBRSxFQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLEtBQUssR0FBUSxFQUFDLEdBQUcsRUFBRSxJQUFJLDZCQUFhLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSw2QkFBYSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksNkJBQWEsRUFBRSxFQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLFFBQVEsR0FBSyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLHdCQUFPLEdBQWQsVUFBZSxHQUFlO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUNNLDRCQUFXLEdBQWxCLGNBQStCLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBQztJQUU1QyxtQkFBRSxHQUFUO1FBQ0ksT0FBTyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ00sb0JBQUcsR0FBVixjQUF1QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQztJQUNyQyxxQkFBSSxHQUFYO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFDTSx5QkFBUSxHQUFmLFVBQWdCLElBQVk7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVNLHVCQUFNLEdBQWI7UUFDSSxJQUFNLEdBQUcsR0FBYztZQUNuQixFQUFFLEVBQVMsSUFBSSxDQUFDLEtBQUs7WUFDckIsT0FBTyxFQUFJLElBQUksQ0FBQyxPQUFPO1lBQ3ZCLElBQUksRUFBTyxJQUFJLENBQUMsT0FBTztZQUN2QixPQUFPLEVBQUksSUFBSSxDQUFDLE9BQU87WUFDdkIsR0FBRyxFQUFRLElBQUksQ0FBQyxHQUFHO1lBQ25CLEdBQUcsRUFBUSxJQUFJLENBQUMsR0FBRztZQUNuQixLQUFLLEVBQU0sSUFBSSxDQUFDLEtBQUs7WUFDckIsRUFBRSxFQUFTLElBQUksQ0FBQyxFQUFFO1lBQ2xCLElBQUksRUFBTyxJQUFJLENBQUMsSUFBSTtZQUNoQyw4Q0FBOEM7WUFDbEMsR0FBRyxFQUFRLElBQUksQ0FBQyxHQUFHO1lBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDbEMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNsQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRztTQUN4QztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUNNLHVCQUFNLEdBQWIsVUFBYyxDQUFzQjtRQUNoQyxJQUFJLENBQUMsS0FBSyxTQUFTO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFXLFNBQVM7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFNLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFTLFNBQVM7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDckQsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFNLFNBQVM7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFJLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDeEQsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFNLFNBQVM7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFJLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDeEQsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFVLFNBQVM7WUFBRSxJQUFJLENBQUMsR0FBRyxHQUFRLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDcEQsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFVLFNBQVM7WUFBRSxJQUFJLENBQUMsR0FBRyxHQUFRLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDcEQsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFRLFNBQVM7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdEQsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFXLFNBQVM7WUFBRSxJQUFJLENBQUMsRUFBRSxHQUFTLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFTLFNBQVM7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDckQsSUFBSSxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzNCLElBQUksT0FBTyxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRSxDQUFDO2dCQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDL0IsQ0FBQztpQkFBTSxDQUFDO2dCQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxLQUFLLENBQUM7WUFDdEQsQ0FBQztRQUNMLENBQUM7UUFDVCxrRUFBa0U7UUFDMUQsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFTLFNBQVMsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25DLEtBQUs7WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNyRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbkMsS0FBSztZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3JELENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRVMsNkJBQVksR0FBdEIsVUFBdUIsQ0FBa0IsRUFBRSxDQUFrQjtRQUN6RCxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssU0FBUztZQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssU0FBUztZQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssU0FBUztZQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUMzQyxDQUFDO0lBQ1MsOEJBQWEsR0FBdkIsVUFBd0IsQ0FBMkMsRUFBRSxDQUErQjs7UUFDaEcsSUFBSSxDQUE2QixDQUFDO1FBQ2xDLElBQVEsQ0FBQyxLQUFLLFNBQVM7WUFBRSxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUMsQ0FBQzs7WUFDdEMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFFLE9BQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxHQUFHLG1DQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsT0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLEdBQUcsbUNBQUksQ0FBQyxFQUFDLENBQUM7UUFFakQsQ0FBQyxDQUFDLEdBQUcsR0FBRyxPQUFDLENBQUMsR0FBRyxtQ0FBSSxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxHQUFHLEdBQUcsYUFBQyxDQUFDLEdBQUcsbUNBQUksQ0FBQyxDQUFDLEdBQUcsbUNBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNoQyxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFYSxrQkFBVyxHQUF6QjtRQUNJLElBQU0sUUFBUSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7UUFDOUIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEVBQUUsRUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUMvRCxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUMsSUFBSSxFQUFHLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFDekMsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVNLDRCQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBTSxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBSSxNQUFNLEdBQUcsd0JBQVcsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRyxHQUFRLG1CQUFNLEVBQUUsQ0FBQyxFQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxHQUFHLEdBQVEsbUJBQU0sRUFBRSxFQUFFLEVBQUksRUFBRSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBTSxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLEVBQUUsR0FBUyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBTyxtQkFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsR0FBRyxHQUFRO1lBQ1osR0FBRyxFQUFFLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFDO1lBQ3JCLEdBQUcsRUFBRSxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQztZQUNyQixLQUFLLEVBQUUsSUFBSTtTQUNkLENBQUM7UUFHRixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNqQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEIsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDN0MsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUksQ0FBQyxDQUFDLENBQUM7UUFDN0MsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUksQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO1FBRTNCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ2pDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QixTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM3QyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBSSxDQUFDLENBQUMsQ0FBQztRQUM3QyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBSSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7UUFFM0IsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVhLG9CQUFhLEdBQTNCLFVBQTRCLE1BQWdCO1FBQ3hDLElBQU0sV0FBVyxHQUFHLEVBQWlCLENBQUM7UUFDdEMsS0FBaUIsVUFBTSxFQUFOLGlCQUFNLEVBQU4sb0JBQU0sRUFBTixJQUFNLEVBQUUsQ0FBQztZQUFyQixJQUFJLElBQUk7WUFDVCxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFDRCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBQ2Esb0JBQWEsR0FBM0IsVUFBNEIsV0FBOEM7UUFDdEUsSUFBTSxNQUFNLEdBQUcsRUFBYyxDQUFDO1FBQzlCLElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzVCLEtBQXNCLFVBQVcsRUFBWCwyQkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVyxFQUFFLENBQUM7Z0JBQS9CLElBQUksU0FBUztnQkFDZCxJQUFJLFNBQVMsS0FBSyxTQUFTO29CQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM3RSxDQUFDO1FBQ0wsQ0FBQztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFTSxzQkFBSyxHQUFaOztRQUNJLEtBQUssQ0FBQyxjQUFjO2NBQ2QsY0FBYyxHQUFPLENBQUMsVUFBSSxDQUFDLEVBQUUsbUNBQVcsR0FBRyxDQUFDO2NBQzVDLGNBQWMsR0FBTyxDQUFDLFVBQUksQ0FBQyxPQUFPLG1DQUFNLEdBQUcsQ0FBQztjQUM1QyxjQUFjLEdBQU8sQ0FBQyxVQUFJLENBQUMsSUFBSSxtQ0FBUyxHQUFHLENBQUM7Y0FDNUMsY0FBYyxHQUFPLENBQUMsVUFBSSxDQUFDLE9BQU8sbUNBQU0sR0FBRyxDQUFDO2NBQzVDLGNBQWMsR0FBTyxDQUFDLFVBQUksQ0FBQyxRQUFRLG1DQUFLLEdBQUcsQ0FBQztjQUM1QyxJQUFJLENBQ1QsQ0FBQztJQUNOLENBQUM7SUFDYSxpQkFBVSxHQUF4QixVQUF5QixDQUFpQzs7UUFDdEQsSUFBSSxDQUFDLEtBQUssU0FBUztZQUFFLE9BQU87UUFDNUIsS0FBSyxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNqRCxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFDLENBQUMsQ0FBQyxDQUFDLDBDQUFFLEtBQUssRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQztBQWhNWSx3QkFBTTs7Ozs7Ozs7Ozs7QUNuRE47OztBQUdiLHdGQUFtRDtBQUNuRCx3RkFBMEM7QUFPMUM7SUFvQkksdUJBQW1CLENBQXFCO1FBbkI5QixNQUFDLEdBQWtCO1lBQ3pCLEVBQUUsRUFBRyxDQUFDLEVBQUcsWUFBWTtZQUVyQiw4Q0FBOEM7WUFDOUMsR0FBRyxFQUFFLENBQUMsRUFBRyxNQUFNO1lBQ2YsR0FBRyxFQUFFLENBQUMsRUFBRyxNQUFNO1lBQ2YsR0FBRyxFQUFFLENBQUMsRUFBRyxNQUFNO1lBQ2YsR0FBRyxFQUFFLENBQUMsRUFBRyxZQUFZO1lBRXJCLDRDQUE0QztZQUM1QyxHQUFHLEVBQUUsQ0FBQyxFQUFHLHlDQUF5QztZQUNsRCxHQUFHLEVBQUUsQ0FBQyxFQUFHLGVBQWU7WUFDeEIsR0FBRyxFQUFFLENBQUMsRUFBRywyQkFBMkI7WUFDcEMsR0FBRyxFQUFFLENBQUMsRUFBRywwQ0FBMEM7WUFDbkQsR0FBRyxFQUFFLENBQUMsRUFBRyw4QkFBOEI7WUFDdkMsR0FBRyxFQUFFLENBQUMsRUFBRyxtQ0FBbUM7WUFDNUMsR0FBRyxFQUFFLENBQUMsRUFBRyxrQkFBa0I7U0FDOUIsQ0FBQztRQUdFLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFBQSxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDTSwrQkFBTyxHQUFkLFVBQWUsQ0FBb0I7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBQ00sMkJBQUcsR0FBVixVQUFXLEdBQVc7UUFDbEIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFBRSxPQUFPLFNBQVMsQ0FBQztRQUN2QyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNNLDJCQUFHLEdBQVYsVUFBVyxHQUFXLEVBQUUsQ0FBb0I7UUFDeEMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFBRSxPQUFPLFNBQVMsQ0FBQztRQUN2QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRU0saUNBQVMsR0FBaEI7UUFDSSxPQUFPLG1CQUFNLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ00sa0NBQVUsR0FBakI7UUFDSSxPQUFPLG1CQUFNLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBQ00sa0NBQVUsR0FBakI7UUFDSSxPQUFPLG1CQUFNLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBQ00sa0NBQVUsR0FBakI7UUFDSSxPQUFPLG1CQUFNLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBQ00sa0NBQVUsR0FBakI7UUFDSSxPQUFPLG1CQUFNLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVNLDZCQUFLLEdBQVosVUFBYSxHQUFZO1FBQ3JCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0IsSUFBSSxHQUFHLEtBQUssSUFBSTtZQUFFLE9BQU8sbUJBQU0sRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sbUJBQU0sRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVNLDJCQUFHLEdBQVYsVUFBVyxDQUFvQjtRQUMzQixLQUFLLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLENBQUM7SUFDTCxDQUFDO0lBRU0sb0NBQVksR0FBbkIsVUFBb0IsS0FBYTtRQUM3QixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBTSxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNNLG9DQUFZLEdBQW5CLFVBQW9CLEtBQWE7UUFDN0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUssS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFLLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUssS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDTSxvQ0FBWSxHQUFuQixVQUFvQixLQUFhO1FBQzdCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFLLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUssS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFLLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUssS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFLLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBRU0sbUNBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBSyxvQkFBTyxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUksb0JBQU8sRUFBQyxDQUFDLEVBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFJLG9CQUFPLEVBQUMsQ0FBQyxFQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBSSxvQkFBTyxFQUFDLENBQUMsRUFBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUksb0JBQU8sRUFBQyxDQUFDLEVBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFJLG9CQUFPLEVBQUMsQ0FBQyxFQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBSSxvQkFBTyxFQUFDLENBQUMsRUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUksb0JBQU8sRUFBQyxDQUFDLEVBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFJLG9CQUFPLEVBQUMsQ0FBQyxFQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBSSxvQkFBTyxFQUFDLENBQUMsRUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUksb0JBQU8sRUFBQyxDQUFDLEVBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFJLG9CQUFPLEVBQUMsQ0FBQyxFQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVwQyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNJLElBQU0sQ0FBQyxHQUFzQixFQUFFLENBQUM7UUFDaEMsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztZQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNNLDhCQUFNLEdBQWIsVUFBYyxDQUFvQjtRQUM5QixLQUFLLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ2hCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVM7Z0JBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEUsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFYSxtQkFBSyxHQUFuQixVQUFvQixDQUFnQjtRQUNoQyxPQUFPLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUM7QUF0SFksc0NBQWE7Ozs7Ozs7Ozs7O0FDWGI7OztBQUdiLDZGQUF5RDtBQUs1QyxjQUFNLEdBQTZCO0lBQzVDLElBQUksRUFBRSxDQUFDO0lBQ1AsSUFBSSxFQUFFLENBQUM7SUFDUCxJQUFJLEVBQUUsQ0FBQztDQUNELENBQUM7QUFHWCxTQUFTLFNBQVMsQ0FBQyxJQUFZOztJQUMzQixPQUFPLFlBQU0sQ0FBQyxJQUFJLENBQUMsY0FBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQUcsSUFBSSxxQkFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFBcEIsQ0FBb0IsQ0FBQyxtQ0FBSSxNQUFNLENBQUM7QUFDM0UsQ0FBQztBQWVEO0lBTUksb0JBQW1CLElBQW9CO1FBTDdCLGFBQVEsR0FBVyxjQUFNLENBQUMsSUFBSSxDQUFDO1FBQy9CLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsWUFBTyxHQUFZLEVBQUUsQ0FBQztRQUN0QixZQUFPLEdBQWdCLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBRzlDLElBQUksSUFBSSxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTSxpQ0FBWSxHQUFuQixjQUFnQyxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQztJQUMxRCw2QkFBUSxHQUFmLGNBQWdDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDO0lBQy9DLDZCQUFRLEdBQWYsY0FBZ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUM7SUFDL0MsNEJBQU8sR0FBZCxjQUFnQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQztJQUU5Qyw2QkFBUSxHQUFmLFVBQWdCLElBQVk7UUFDeEIsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLGNBQU0sQ0FBQztZQUFFLE9BQU8sU0FBUyxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTSw2QkFBUSxHQUFmLFVBQWdCLElBQVksSUFBVyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFDO0lBQ3RELDRCQUFPLEdBQWQsVUFBZ0IsR0FBVyxJQUFZLElBQUksQ0FBQyxPQUFPLEdBQUksR0FBRyxDQUFDLEVBQUM7SUFFckQsaUNBQVksR0FBbkIsVUFBb0IsSUFBWTtRQUM1QixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksY0FBTSxDQUFDO1lBQUUsT0FBTyxTQUFTLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUdNLDBCQUFLLEdBQVo7UUFDSiw2REFBNkQ7UUFDckQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFDTSwwQkFBSyxHQUFaO1FBQ0osNkRBQTZEO1FBQ3JELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBQ00sMkJBQU0sR0FBYjtRQUNKLDZEQUE2RDtRQUNyRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVNLDBCQUFLLEdBQVosVUFBZ0IsQ0FBYTtRQUN6QixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssY0FBTSxDQUFDLElBQUk7WUFBSSxPQUFPLFNBQVMsQ0FBQztRQUN0RCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVM7WUFBRyxPQUFPLFNBQVMsQ0FBQztRQUUzRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUNNLDBCQUFLLEdBQVosVUFBZ0IsQ0FBYztRQUMxQixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssY0FBTSxDQUFDLElBQUk7WUFBSSxPQUFPLFNBQVMsQ0FBQztRQUN0RCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVM7WUFBRyxPQUFPLFNBQVMsQ0FBQztRQUUzRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDTSwyQkFBTSxHQUFiLFVBQWdCLEVBQWM7UUFDMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLGNBQU0sQ0FBQyxJQUFJO1lBQUssT0FBTyxTQUFTLENBQUM7UUFDdkQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxTQUFTO1lBQUUsT0FBTyxTQUFTLENBQUM7UUFFNUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFHTSwyQkFBTSxHQUFiO1FBQ0ksT0FBTztZQUNILElBQUksRUFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNsQyxJQUFJLEVBQU0sSUFBSSxDQUFDLFFBQVE7WUFDdkIsT0FBTyxFQUFHLElBQUksQ0FBQyxPQUFPO1lBQ3RCLE9BQU8sRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtTQUNsQyxDQUFDO0lBQ04sQ0FBQztJQUNNLDJCQUFNLEdBQWIsVUFBYyxDQUFpQjtRQUMzQixJQUFJLENBQUMsS0FBSyxTQUFTO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxjQUFNLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUU3RCxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQVEsU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQVEsU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNwRCxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUN2RCxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1RCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDO0FBakZZLGdDQUFVOzs7Ozs7Ozs7OztBQ2hDVjs7O0FBZ0NiLDBDQWdCQztBQTlDRCx1RkFBbUQ7QUFDbkQsNkZBQXFEO0FBQ3JELDBGQUFpRTtBQUNqRSxvRkFBa0Q7QUFDbEQsNkZBQXFEO0FBQ3JELG9GQUFrRDtBQUdsRCx3RkFBeUU7QUFDekUsd0ZBQXVDO0FBQ3ZDLDZGQUEwQztBQUMxQyxnR0FBNEM7QUFDNUMsbUdBQTZEO0FBa0I3RCxTQUFnQixlQUFlLENBQUMsQ0FBc0I7O0lBQ2xELElBQUksQ0FBQyxLQUFLLFNBQVM7UUFBRSxPQUFPO0lBRTVCLEtBQUssQ0FBQyxZQUFZO1VBQ1osYUFBYSxHQUFHLENBQUMsT0FBQyxDQUFDLEVBQUUsbUNBQVMsR0FBRyxDQUFDO1VBQ2xDLFdBQVcsR0FBSyxDQUFDLE9BQUMsQ0FBQyxLQUFLLG1DQUFNLEdBQUcsQ0FBQztVQUNsQyxhQUFhLEdBQUcsQ0FBQyxPQUFDLENBQUMsT0FBTyxtQ0FBSSxHQUFHLENBQUM7VUFDbEMsYUFBYSxHQUFHLENBQUMsT0FBQyxDQUFDLE9BQU8sbUNBQUksR0FBRyxDQUFDO1VBQ2xDLFlBQVksR0FBSSxDQUFDLE9BQUMsQ0FBQyxJQUFJLG1DQUFPLEdBQUcsQ0FBQztVQUNsQyxZQUFZLEdBQUksQ0FBQyxPQUFDLENBQUMsTUFBTSxtQ0FBSyxHQUFHLENBQUM7VUFDbEMsWUFBWSxHQUFJLENBQUMsT0FBQyxDQUFDLE1BQU0sbUNBQUssR0FBRyxDQUFDO1VBQ2xDLFlBQVksR0FBSSxDQUFDLE9BQUMsQ0FBQyxNQUFNLG1DQUFLLEdBQUcsQ0FBQztVQUNsQyxTQUFTLEdBQU8sQ0FBQyxPQUFDLENBQUMsSUFBSSxtQ0FBTyxHQUFHLENBQUM7VUFDbEMsU0FBUyxHQUFPLENBQUMsT0FBQyxDQUFDLElBQUksbUNBQU8sR0FBRyxDQUFDO1VBQ2xDLElBQUksQ0FDVCxDQUFDO0FBQ04sQ0FBQztBQWFEO0lBZUksZ0JBQW1CLENBQWE7UUFUdEIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQU1yQixnQkFBVyxHQUFnQixDQUFDLENBQUMsQ0FBQyx1QkFBdUI7UUFDckQscUJBQWdCLEdBQVcsQ0FBQyxDQUFDLENBQUMscUJBQXFCO1FBR3pELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsR0FBRyxzQkFBUyxHQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBSyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBTSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBTSxJQUFJLGlCQUFPLENBQ3RCLElBQUksaUJBQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNwQixJQUFJLGlCQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxLQUFLLEdBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdEIsSUFBSSxDQUFDLElBQUksR0FBTSxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVTLDRCQUFXLEdBQXJCLFVBQXNCLElBQStCO1FBQS9CLDhCQUFpQixtQkFBUSxDQUFDLEtBQUs7UUFDakQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFbEMsSUFBTSxLQUFLLEdBQXFCLEtBQUssQ0FBQyxNQUFNLENBQXFCLENBQUM7UUFDbEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzlCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFtQixDQUFDO1lBQzNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDOUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFJLEtBQUssQ0FBQyxNQUFNLENBQWlCLENBQUM7Z0JBQzdDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDOUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLHVCQUFVLENBQUMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsQ0FBQztnQkFDMUUsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNTLDRCQUFXLEdBQXJCLFVBQXNCLEVBQVc7UUFDN0IsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFbEMsSUFBSSxDQUFDLEtBQUssR0FBSyxLQUFLLENBQUMsTUFBTSxDQUFrQixDQUFDO1FBQzlDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQWdCLENBQUM7WUFDN0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFJLEtBQUssQ0FBQyxNQUFNLENBQWMsQ0FBQztnQkFDL0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDN0IsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDUywrQkFBYyxHQUF4QjtRQUNJLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWxDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztZQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDOUIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQy9DLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUNELE9BQU87SUFDWCxDQUFDO0lBQ00sb0JBQUcsR0FBVixjQUEyQixPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUM7SUFDeEMseUJBQVEsR0FBZixjQUEyQixPQUFPLG1CQUFNLENBQUMsSUFBSSxHQUFDO0lBQ3ZDLHlCQUFRLEdBQWYsY0FBMkIsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFDO0lBRXJDLHVCQUFNLEdBQWIsVUFBYyxDQUFVO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELHdCQUF3QjtJQUNqQix3QkFBTyxHQUFkLFVBQWUsR0FBYztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUMvQixDQUFDO0lBQ00sd0JBQU8sR0FBZCxVQUFlLEdBQWM7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDTSw0QkFBVyxHQUFsQixVQUFtQixDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFDOUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksaUJBQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNNLHdCQUFPLEdBQWQsVUFBZSxDQUFVOztRQUNyQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQUksR0FBRyxHQUFxQixJQUFJLENBQUM7UUFFakMsS0FBSyxJQUFNLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUU1QixJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxTQUFTO2dCQUFFLFNBQVM7WUFDekMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLFlBQUssQ0FBQyxJQUFJLEVBQUUsMENBQUUsTUFBTSxFQUFFLE1BQUssSUFBSSxFQUFFLENBQUM7Z0JBQ3JELElBQUksaUJBQUssQ0FBQyxJQUFJLEVBQUUsMENBQUUsS0FBSyxFQUFFLG1DQUFFLENBQUMsRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDO29CQUNyQyxLQUFLLEdBQUcsaUJBQUssQ0FBQyxJQUFJLEVBQUUsMENBQUUsS0FBSyxFQUFFLG1DQUFFLENBQUMsRUFBRSxDQUFDO29CQUNuQyxHQUFHLEdBQUssS0FBSyxDQUFDO2dCQUNsQixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFDTSwwQkFBUyxHQUFoQixVQUFpQixDQUFVOztRQUN2QixLQUFLLElBQU0sRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6QixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzVCLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxZQUFLLENBQUMsSUFBSSxFQUFFLDBDQUFFLE1BQU0sRUFBRSxNQUFLLElBQUk7Z0JBQUUsT0FBTyxJQUFJLENBQUM7UUFDeEUsQ0FBQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCw4QkFBOEI7SUFDdkIsc0NBQXFCLEdBQTVCLFVBQTZCLENBQVU7UUFDbkMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLG1CQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsbUJBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdCQUFnQjtJQUNULDJDQUEwQixHQUFqQyxVQUFrQyxJQUFZO1FBQzFDLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWpELElBQU0sS0FBSyxHQUFNLENBQUMsQ0FBQyxDQUFDLGVBQWU7UUFFbkMsNkJBQTZCO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3QixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7Z0JBQzdCLHVCQUF1QjtnQkFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELENBQUM7aUJBQU0sQ0FBQztnQkFDSixrQ0FBa0M7Z0JBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakQsNEJBQTRCO2dCQUM1QixNQUFNO1lBQ1YsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBQ1MsNkJBQVksR0FBdEIsVUFBdUIsT0FBZ0I7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUFFLE9BQU87UUFFdkMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUFRLENBQUM7SUFDM0MsQ0FBQztJQUVNLDJCQUFVLEdBQWpCLFVBQWtCLE9BQWdCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSwwQkFBUyxHQUFoQixVQUFpQixDQUFVLElBQVksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUM7SUFDekUsOEJBQWEsR0FBcEIsVUFBcUIsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1FBQ2hELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sMkJBQVUsR0FBakIsVUFBa0IsQ0FBVTtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDdkMsUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDdkIsS0FBSyxtQkFBUSxDQUFDLEtBQUssQ0FBQztZQUNwQixLQUFLLG1CQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3BCLEtBQUssbUJBQVEsQ0FBQyxLQUFLLENBQUM7WUFDcEIsS0FBSyxtQkFBUSxDQUFDLEtBQUssQ0FBQztZQUNwQixLQUFLLG1CQUFRLENBQUMsS0FBSztnQkFDZixPQUFPLElBQUksQ0FBQztRQUNwQixDQUFDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVNLDBCQUFTLEdBQWhCLGNBQTRCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDO0lBQ2hELDBCQUFTLEdBQWhCLGNBQTRCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDO0lBQ2hELDBCQUFTLEdBQWhCLGNBQTRCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDO0lBQ2hELHlCQUFRLEdBQWYsVUFBaUIsQ0FBVTtRQUN2QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwRSxPQUFPLG1CQUFRLENBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDTSw2QkFBWSxHQUFuQixVQUFxQixDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFDaEQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwRSxPQUFPLG1CQUFRLENBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFTSw2QkFBWSxHQUFuQixVQUFxQixDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFDaEQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBQ00seUJBQVEsR0FBZixVQUFpQixDQUFVO1FBQ3ZCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFDTSx5QkFBUSxHQUFmLFVBQWdCLENBQVUsRUFBRSxDQUFXO1FBQ25DLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLHVCQUFVLENBQUMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUNyRSxDQUFDO0lBQ0wsQ0FBQztJQUNNLDZCQUFZLEdBQW5CLFVBQW9CLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVc7UUFDNUQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLENBQUM7UUFDN0UsQ0FBQztJQUNMLENBQUM7SUFDTSx5QkFBUSxHQUFmLFVBQWdCLENBQVU7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ00sdUJBQU0sR0FBYixVQUFjLENBQVU7UUFDcEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFhRSwwQkFBUyxHQUFoQixVQUFpQixJQUFjLEVBQUUsS0FBWTtRQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDM0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLE9BQU87SUFDWCxDQUFDO0lBRU0sd0JBQU8sR0FBZCxVQUFlLElBQWMsRUFBRSxLQUFZLEVBQUUsS0FBYSxFQUFFLE1BQWMsRUFBRSxNQUFjLEVBQUUsS0FBYTtRQUNyRyxJQUFJLEtBQUssR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2pGLElBQUksS0FBSyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFakYsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQU0sR0FBRyxHQUFHLEdBQUcsR0FBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFNLEdBQUcsR0FBRyxHQUFHLEdBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQztRQUVoQyxrQkFBa0I7UUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBQ0Qsa0JBQWtCO1FBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUNELE9BQU87SUFDWCxDQUFDO0lBRUQsZ0JBQWdCO0lBQ1QsNkJBQVksR0FBbkIsVUFBb0IsS0FBWTs7UUFDNUIsSUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QyxJQUFNLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLElBQU0sS0FBSyxHQUFNLENBQUMsR0FBRyxtQkFBTSxFQUFDLENBQUMsRUFBRSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELElBQU0sS0FBSyxHQUFNLENBQUMsR0FBRyxtQkFBTSxFQUFDLENBQUMsRUFBRSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELElBQU0sS0FBSyxHQUFNLENBQUMsR0FBRyxtQkFBTSxFQUFDLENBQUMsRUFBRSx5QkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWhELGdCQUFnQjtRQUNoQixJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNiLElBQUksV0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsMENBQUUsT0FBTyxFQUFFLE1BQUssbUJBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDM0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUcsbUJBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRSxDQUFDO2lCQUFNLENBQUM7Z0JBQ0osSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUcsbUJBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRSxDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksV0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQywwQ0FBRSxPQUFPLEVBQUUsTUFBSyxtQkFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUcsbUJBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RCxDQUFDO2FBQU0sQ0FBQztZQUNKLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUcsbUJBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBRUQsT0FBTyxJQUFJLHVCQUFVLENBQUMsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU0sNEJBQVcsR0FBbEIsVUFBbUIsS0FBYTs7UUFDNUIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBR2xDLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXRDLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUUxRCwwQkFBMEI7UUFDMUIseUJBQXlCO1FBQ3pCLElBQU0sTUFBTSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO1FBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztZQUNwQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUM7Z0JBQ3BDLElBQU0sRUFBRSxHQUFHLG1CQUFNLEVBQUMsQ0FBQyxFQUFFLHlCQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSw0QkFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3QyxDQUFDO1FBQ0wsQ0FBQztRQUVELGVBQWU7UUFDZixJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBTSxXQUFXLEdBQUcsbUJBQU0sRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxXQUFXLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztZQUN6QyxJQUFNLE1BQU0sR0FBRyxtQkFBTSxFQUFDLENBQUMsRUFBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pELElBQU0sTUFBTSxHQUFHLG1CQUFNLEVBQUMsQ0FBQyxFQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekQsSUFBTSxNQUFNLEdBQUcsbUJBQU0sRUFBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BELElBQU0sTUFBTSxHQUFHLG1CQUFNLEVBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwRCxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFDdkUsQ0FBQztRQUVELGlCQUFpQjtRQUNqQixLQUFtQixVQUFXLEVBQVgsMkJBQVcsRUFBWCx5QkFBVyxFQUFYLElBQVcsRUFBRSxDQUFDO1lBQTVCLElBQU0sSUFBSTtZQUNYLEtBQUssSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUM1QyxJQUFNLENBQUMsR0FBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLENBQUMsS0FBSyxTQUFTO29CQUFFLFNBQVM7Z0JBRTlCLElBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUM7dUJBQ2hCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7dUJBQzFCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO3VCQUNoQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsQ0FBQztZQUNULENBQUM7UUFDTCxDQUFDO1FBR0QscUJBQXFCO1FBQ3JCLEtBQWdCLFVBQVUsRUFBVixXQUFNLENBQUMsR0FBRyxFQUFWLGNBQVUsRUFBVixJQUFVLEVBQUUsQ0FBQztZQUF4QixJQUFNLENBQUM7WUFDUixJQUFJLENBQUMsS0FBSyxTQUFTO2dCQUFFLFNBQVM7WUFFOUIsZ0JBQWdCO1lBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxtQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRW5ELHFCQUFxQjtZQUNyQixJQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQU0sRUFBRSxHQUFHLHdDQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQywwQ0FBRSxFQUFFLG1DQUFJLHlCQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3RELElBQUksRUFBRSxLQUFLLHlCQUFXLENBQUMsQ0FBQztnQkFBRSxTQUFTO1lBQ25DLFNBQVMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFbEIsSUFBSSxDQUFDLFlBQVksQ0FDYixDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyx5QkFBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyx5QkFBVyxDQUFDLENBQUMsQ0FBQyxFQUN6RCxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyx5QkFBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyx5QkFBVyxDQUFDLENBQUMsQ0FBQyxFQUN6RCxLQUFLLEVBQ0wsbUJBQVEsQ0FBQyxLQUFLLENBQ2pCLENBQUM7UUFFTixDQUFDO1FBRUQsbUJBQW1CO1FBQ25CLGtDQUFrQztRQUNsQyxLQUFrQixVQUFVLEVBQVYsV0FBTSxDQUFDLEdBQUcsRUFBVixjQUFVLEVBQVYsSUFBVSxFQUFFLENBQUM7WUFBMUIsSUFBTSxHQUFHO1lBQ1YsSUFBSSxHQUFHLEtBQUssU0FBUztnQkFBRSxTQUFTO1lBRTFCLFNBQWtCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLDJCQUFZLEVBQUUsQ0FBQyxFQUEzRSxFQUFFLFVBQUUsU0FBUyxRQUE4RCxDQUFDO1lBQ25GLElBQUksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsbUJBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2pELElBQUksU0FBUyxLQUFLLFNBQVM7b0JBQUUsS0FBZ0IsVUFBYSxFQUFiLGNBQVMsQ0FBQyxHQUFHLEVBQWIsY0FBYSxFQUFiLElBQWE7d0JBQXhCLElBQU0sQ0FBQzt3QkFBbUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFBQTtZQUNqRixDQUFDO1FBQ0wsQ0FBQztRQUNELE9BQU87SUFDWCxDQUFDO0lBRVMsNEJBQVcsR0FBckIsVUFBc0IsQ0FBUyxFQUFFLENBQVMsRUFBRSxTQUF1QixFQUFFLFNBQWlDOztRQUNsRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztZQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFMUcsSUFBSSxTQUFTLEtBQUssU0FBUztZQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDdkQsSUFBSSxVQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBSyxLQUFLO1lBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztRQUVuRSxJQUFJLFNBQVMsS0FBSyxTQUFTLElBQUksVUFBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQUssSUFBSTtZQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUcsU0FBUyxDQUFDLENBQUM7UUFFOUYsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEMsU0FBUyxhQUFULFNBQVMsY0FBVCxTQUFTLElBQVQsU0FBUyxHQUFLLElBQUksMkJBQVksRUFBRSxFQUFDO1FBQ2pDLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxJQUFJLENBQUMsSUFBSSw0QkFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsa0NBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLDBDQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFcEUsSUFBSSxNQUFNLEdBQVcsQ0FBQyxFQUFFLE1BQU0sR0FBVyxDQUFDLENBQUM7UUFDM0MsUUFBUSxrQ0FBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsMENBQUUsRUFBRSxFQUFFLENBQUM7WUFDaEMsS0FBSyx5QkFBVyxDQUFDLENBQUMsRUFBRyxJQUFJO2dCQUNyQixNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNYLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLE1BQU07WUFDVixLQUFLLHlCQUFXLENBQUMsQ0FBQyxFQUFHLElBQUk7Z0JBQ3JCLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ1gsTUFBTTtZQUNWLEtBQUsseUJBQVcsQ0FBQyxDQUFDLEVBQUcsSUFBSTtnQkFDckIsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDWCxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixNQUFNO1lBQ1YsS0FBSyx5QkFBVyxDQUFDLENBQUMsRUFBRyxJQUFJO2dCQUNyQixNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNYLE1BQU07UUFDVixDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFUywwQkFBUyxHQUFuQixVQUFvQixDQUF5QixFQUFFLElBQWMsRUFBRSxLQUFhOztRQUN4RSxJQUFJLENBQUMsS0FBSyxTQUFTO1lBQUUsT0FBTztRQUU1QixJQUFNLEdBQUcsR0FBRyxtQkFBTSxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFNLEVBQUUsR0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXhCLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBTSxFQUFFLEdBQUcsd0NBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLDBDQUFFLEVBQUUsbUNBQUkseUJBQVcsQ0FBQyxDQUFDO1FBQ3RELFNBQVMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbEIsSUFBSSxDQUFDLFlBQVksQ0FDYixFQUFFLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyx5QkFBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyx5QkFBVyxDQUFDLENBQUMsQ0FBQyxFQUMxRCxFQUFFLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyx5QkFBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyx5QkFBVyxDQUFDLENBQUMsQ0FBQyxFQUMxRCxLQUFLLEVBQ0wsSUFBSSxDQUNQLENBQUM7UUFDRixPQUFPO0lBQ1gsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUE4QkU7SUFFUywwQkFBUyxHQUFoQixVQUFpQixDQUFVO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBQ00sMEJBQVMsR0FBaEIsVUFBaUIsS0FBaUIsRUFBRSxVQUEyQjs7UUFBOUMsaUNBQWlCO1FBQUUsK0NBQTJCO1FBQzNELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVsQyxJQUFJLE9BQU8sR0FBVyxFQUFFLENBQUM7UUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDOUIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDekMsT0FBTyxJQUFJLEdBQUcsQ0FBQztnQkFDbkIsQ0FBQztxQkFBTSxDQUFDO29CQUNKLElBQU0sS0FBSyxHQUFHLGVBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxJQUFJLEVBQUUsMENBQUUsTUFBTSxFQUFFLG1DQUFJLElBQUksQ0FBQztvQkFDNUMsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUUsQ0FBQzt3QkFDakMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ25ELENBQUM7eUJBQU0sQ0FBQzt3QkFDSixPQUFPLElBQUksS0FBSyxDQUFDO29CQUNyQixDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO1lBQ0QsT0FBTyxJQUFJLElBQUksQ0FBQztRQUNwQixDQUFDO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUNNLHVCQUFNLEdBQWI7UUFDSSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVsQyxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7UUFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzlCLElBQUksT0FBTyxHQUFhLEVBQUUsQ0FBQztZQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzlCLElBQUksT0FBTyxHQUFhLEVBQUUsQ0FBQztnQkFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFDL0MsQ0FBQztnQkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwQyxDQUFDO1lBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUNELElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbkMsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO1FBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM5QixJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7WUFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM5QixJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7Z0JBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDOUIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO2dCQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLENBQUM7WUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBQ0QsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVuQyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZCxLQUFLLElBQU0sRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFOUQsT0FBTztZQUNILEVBQUUsRUFBTyxJQUFJLENBQUMsT0FBTztZQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLEtBQUssRUFBSSxJQUFJLENBQUMsS0FBSztZQUNuQixJQUFJLEVBQUssSUFBSSxDQUFDLElBQUk7WUFDbEIsSUFBSSxFQUFLLElBQUk7WUFDYixNQUFNLEVBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDM0IsTUFBTSxFQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzNCLE1BQU0sRUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUMzQixJQUFJLEVBQUssUUFBUTtZQUNqQixJQUFJLEVBQUssUUFBUTtTQUNwQjtJQUNMLENBQUM7SUFDTSx1QkFBTSxHQUFiLFVBQWMsQ0FBc0I7UUFDaEMsSUFBSSxDQUFDLEtBQUssU0FBUztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRWpDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBVSxTQUFTO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3RELElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3RELElBQUksQ0FBQyxDQUFDLEtBQUssS0FBTyxTQUFTO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3BELElBQUksQ0FBQyxDQUFDLElBQUksS0FBUSxTQUFTO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBTSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRW5ELElBQUksQ0FBQyxDQUFDLElBQUksS0FBUSxTQUFTLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNmLEtBQXVCLFVBQU0sRUFBTixNQUFDLENBQUMsSUFBSSxFQUFOLGNBQU0sRUFBTixJQUFNLEVBQUUsQ0FBQztnQkFBM0IsSUFBTSxRQUFRO2dCQUNmLElBQU0sT0FBTyxHQUFHLHFCQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztZQUN2QyxDQUFDO1FBQ0wsQ0FBQztRQUVELElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUM3RSxJQUFJLENBQUMsSUFBSSxHQUFJLElBQUksaUJBQU8sQ0FDcEIsSUFBSSxpQkFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3BCLElBQUksaUJBQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUNwRCxDQUFDO1lBQ04sSUFBSSxDQUFDLEtBQUssR0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLEtBQUssR0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMxQixDQUFDO1FBRUQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFHbEMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ25DOzs7Ozs7Y0FNRTtZQUNVLElBQU0sT0FBTyxHQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLElBQU0sS0FBSyxHQUFHLGlCQUFJLEVBQUMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDN0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM3QixJQUFNLE9BQU8sR0FBYSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoRCxJQUFNLEtBQUssR0FBSSxpQkFBSSxFQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQzdCLElBQU0sT0FBTyxHQUFhLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2hELElBQU0sS0FBSyxHQUFJLGlCQUFJLEVBQUMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQzlDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDN0IsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLENBQUM7b0JBQ2hGLENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsSUFBTSxPQUFPLEdBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUMsSUFBTSxLQUFLLEdBQUcsaUJBQUksRUFBQyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM3QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzdCLElBQU0sT0FBTyxHQUFhLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hELElBQU0sS0FBSyxHQUFJLGlCQUFJLEVBQUMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDN0IsSUFBTSxPQUFPLEdBQWEsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDaEQsSUFBTSxLQUFLLEdBQUksaUJBQUksRUFBQyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDOUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUM3QixJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzs0QkFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7d0JBQy9CLENBQUM7NkJBQU0sQ0FBQzs0QkFDSixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQzt3QkFDaEMsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO1lBQ0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzFCLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ2EsaUJBQVUsR0FBeEIsVUFBeUIsUUFBa0I7UUFDdkMsSUFBTSxhQUFhLEdBQWdCLEVBQUUsQ0FBQztRQUN0QyxLQUFpQixVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVEsRUFBRSxDQUFDO1lBQXZCLElBQUksSUFBSTtZQUNULGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUNELE9BQU8sYUFBYSxDQUFDO0lBQ3pCLENBQUM7SUFDYSxpQkFBVSxHQUF4QixVQUF5QixhQUEwQjtRQUMvQyxJQUFNLFFBQVEsR0FBYSxFQUFFLENBQUM7UUFDOUIsS0FBc0IsVUFBYSxFQUFiLCtCQUFhLEVBQWIsMkJBQWEsRUFBYixJQUFhLEVBQUUsQ0FBQztZQUFqQyxJQUFJLFNBQVM7WUFDZCxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN0RCxDQUFDO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVNLHNCQUFLLEdBQVo7O1FBQ0ksS0FBSyxDQUFDLFlBQVk7Y0FDWixhQUFhLEdBQUcsQ0FBQyxVQUFJLENBQUMsT0FBTyxtQ0FBSSxHQUFHLENBQUM7Y0FDckMsV0FBVyxHQUFLLENBQUMsVUFBSSxDQUFDLEtBQUssbUNBQU0sR0FBRyxDQUFDO2NBQ3JDLGFBQWEsR0FBRyxDQUFDLFVBQUksQ0FBQyxPQUFPLG1DQUFJLEdBQUcsQ0FBQztjQUNyQyxhQUFhLEdBQUcsQ0FBQyxVQUFJLENBQUMsT0FBTyxtQ0FBSSxHQUFHLENBQUM7Y0FDckMsWUFBWSxHQUFJLENBQUMsVUFBSSxDQUFDLElBQUksbUNBQU8sR0FBRyxDQUFDO2NBQ3JDLFlBQVksR0FBSSxDQUFDLFVBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLG1DQUFJLEdBQUcsQ0FBQztjQUMzQyxZQUFZLEdBQUksQ0FBQyxVQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxtQ0FBSSxHQUFHLENBQUM7Y0FDM0MsWUFBWSxHQUFJLENBQUMsVUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsbUNBQUksR0FBRyxDQUFDO2NBQzNDLElBQUksQ0FDVCxDQUFDO0lBQ04sQ0FBQztJQUNNLDJCQUFVLEdBQWpCLFVBQWtCLEtBQWlCOztRQUFqQixpQ0FBaUI7UUFDL0IsS0FBSyxDQUFDLFdBQVc7Y0FDWCxTQUFTLEdBQU8sQ0FBQyxVQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsbUNBQUssR0FBRyxDQUFDO2NBQ3JELElBQUksQ0FDVCxDQUFDO0lBQ04sQ0FBQztJQUNNLDJCQUFVLEdBQWpCLFVBQWtCLEtBQWlCOztRQUFqQixpQ0FBaUI7UUFDL0IsS0FBSyxDQUFDLFdBQVc7Y0FDWCxTQUFTLEdBQU8sQ0FBQyxVQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsbUNBQUksR0FBRyxDQUFDO2NBQ3JELElBQUksQ0FDVCxDQUFDO0lBQ04sQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDO0FBanBCWSx3QkFBTTs7Ozs7Ozs7Ozs7QUM3RE47Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdiLHVGQUF1QztBQUV2QywwRkFBaUU7QUFTakU7SUFtQkksb0JBQXNCLENBQWdCOzs7UUFDbEMsT0FBQyxDQUFDLEdBQUcsb0NBQUwsQ0FBQyxDQUFDLEdBQUcsR0FBSyxFQUFFLEVBQUM7UUFDYixhQUFDLENBQUMsR0FBRyxFQUFDLE1BQU0sdUNBQU4sTUFBTSxHQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFDO1FBRXZDLElBQUksQ0FBQyxJQUFJLEdBQUssT0FBQyxDQUFDLElBQUksbUNBQUksbUJBQVEsQ0FBQyxLQUFLLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQXJCYSxpQkFBTSxHQUFwQixVQUFxQixDQUFnQjtRQUNqQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNiLEtBQUssbUJBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELEtBQUssbUJBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELEtBQUssbUJBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELEtBQUssbUJBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELEtBQUssbUJBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELEtBQUssbUJBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELEtBQUssbUJBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELEtBQUssbUJBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELEtBQUssbUJBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFDRCxPQUFPLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFTTSwyQkFBTSxHQUFiLGNBQTZCLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBQztJQUN6Qyw0QkFBTyxHQUFkO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSw4QkFBUyxHQUFoQjs7UUFDSSxPQUFPLGdCQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSwwQ0FBRSxNQUFNLEVBQUUsbUNBQUksR0FBRyxDQUFDO0lBQy9DLENBQUM7SUFDYSxzQkFBVyxHQUF6QixVQUEwQixNQUFjO1FBQ3BDLEtBQWtCLFVBQXFCLEVBQXJCLFdBQU0sQ0FBQyxJQUFJLENBQUMsbUJBQVEsQ0FBQyxFQUFyQixjQUFxQixFQUFyQixJQUFxQixFQUFFLENBQUM7WUFBckMsSUFBTSxHQUFHO1lBQ1YsSUFBSSxNQUFNLEtBQUssR0FBRztnQkFBRSxPQUFPLG1CQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUNELE9BQU8sbUJBQVEsQ0FBQyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVNLDJCQUFNLEdBQWIsVUFBYyxJQUFZLEVBQUUsSUFBWTs7UUFDcEMsVUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsMENBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sMkJBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ2EsaUJBQU0sR0FBcEIsVUFBcUIsR0FBVyxFQUFFLENBQWlCO1FBQzlDLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFhLENBQUM7UUFDM0MsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQztBQXBEWSxnQ0FBVTtBQXNEdkI7SUFBOEIsbUNBQVU7SUFDcEMseUJBQW1CLENBQTJCOztRQUMxQyxDQUFDLGFBQUQsQ0FBQyxjQUFELENBQUMsSUFBRCxDQUFDLEdBQUssRUFBQyxJQUFJLEVBQUUsbUJBQVEsQ0FBQyxLQUFLLEVBQUMsRUFBQztRQUM3QixPQUFDLENBQUMsR0FBRyxvQ0FBTCxDQUFDLENBQUMsR0FBRyxHQUFLLEVBQUUsRUFBQztRQUViLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNwQixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBTyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQU87WUFDYixLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHO1lBQ3JCLE1BQU0sRUFBRyxHQUFHO1lBQ1osS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHO1lBQ2xDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDckQsS0FBSyxFQUFFLEVBQUU7U0FDWjtRQUNELGFBQUssWUFBQyxDQUFDLENBQUMsU0FBQztJQUNiLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQ0FoQjZCLFVBQVUsR0FnQnZDO0FBRUQ7SUFBOEIsbUNBQVU7SUFDcEMseUJBQW1CLENBQTJCOztRQUMxQyxDQUFDLGFBQUQsQ0FBQyxjQUFELENBQUMsSUFBRCxDQUFDLEdBQUssRUFBQyxJQUFJLEVBQUUsbUJBQVEsQ0FBQyxLQUFLLEVBQUMsRUFBQztRQUM3QixPQUFDLENBQUMsR0FBRyxvQ0FBTCxDQUFDLENBQUMsR0FBRyxHQUFLLEVBQUUsRUFBQztRQUViLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNwQixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBTyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQU87WUFDYixLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHO1lBQ3JCLE1BQU0sRUFBRyxHQUFHO1lBQ1osS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHO1lBQ2xDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDckQsS0FBSyxFQUFFLEVBQUU7U0FDUjtRQUNMLGFBQUssWUFBQyxDQUFDLENBQUMsU0FBQztJQUNiLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQ0FoQjZCLFVBQVUsR0FnQnZDO0FBRUQ7SUFBOEIsbUNBQVU7SUFDcEMseUJBQW1CLENBQTJCOztRQUMxQyxDQUFDLGFBQUQsQ0FBQyxjQUFELENBQUMsSUFBRCxDQUFDLEdBQUssRUFBQyxJQUFJLEVBQUUsbUJBQVEsQ0FBQyxLQUFLLEVBQUMsRUFBQztRQUM3QixPQUFDLENBQUMsR0FBRyxvQ0FBTCxDQUFDLENBQUMsR0FBRyxHQUFLLEVBQUUsRUFBQztRQUViLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNwQixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBTyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQU87WUFDYixLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHO1lBQ3JCLE1BQU0sRUFBRyxHQUFHO1lBQ1osS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHO1lBQ2xDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDckQsS0FBSyxFQUFFLEVBQUU7U0FDUjtRQUNMLGFBQUssWUFBQyxDQUFDLENBQUMsU0FBQztJQUNiLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQ0FoQjZCLFVBQVUsR0FnQnZDO0FBRUQ7SUFBOEIsbUNBQVU7SUFDcEMseUJBQW1CLENBQTJCOztRQUMxQyxDQUFDLGFBQUQsQ0FBQyxjQUFELENBQUMsSUFBRCxDQUFDLEdBQUssRUFBQyxJQUFJLEVBQUUsbUJBQVEsQ0FBQyxLQUFLLEVBQUMsRUFBQztRQUM3QixPQUFDLENBQUMsR0FBRyxvQ0FBTCxDQUFDLENBQUMsR0FBRyxHQUFLLEVBQUUsRUFBQztRQUViLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNwQixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBTyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQU87WUFDYixLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHO1lBQ3JCLE1BQU0sRUFBRyxHQUFHO1lBQ1osS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHO1lBQ2xDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDNUQsS0FBSyxFQUFFLFNBQVM7U0FDbkI7UUFDRCxhQUFLLFlBQUMsQ0FBQyxDQUFDLFNBQUM7SUFDYixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLENBaEI2QixVQUFVLEdBZ0J2QztBQUVEO0lBQThCLG1DQUFVO0lBQ3BDLHlCQUFtQixDQUEyQjs7UUFDMUMsQ0FBQyxhQUFELENBQUMsY0FBRCxDQUFDLElBQUQsQ0FBQyxHQUFLLEVBQUMsSUFBSSxFQUFFLG1CQUFRLENBQUMsS0FBSyxFQUFDLEVBQUM7UUFDN0IsT0FBQyxDQUFDLEdBQUcsb0NBQUwsQ0FBQyxDQUFDLEdBQUcsR0FBSyxFQUFFLEVBQUM7UUFFYixDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQU8sRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFPO1lBQ2IsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRztZQUNyQixNQUFNLEVBQUcsR0FBRztZQUNaLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRztZQUNsQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzVELEtBQUssRUFBRSxTQUFTO1NBQ25CO1FBQ0QsYUFBSyxZQUFDLENBQUMsQ0FBQyxTQUFDO0lBQ2IsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxDQWhCNkIsVUFBVSxHQWdCdkM7QUFFRDtJQUE4QixtQ0FBVTtJQUNwQyx5QkFBbUIsQ0FBMkI7O1FBQzFDLENBQUMsYUFBRCxDQUFDLGNBQUQsQ0FBQyxJQUFELENBQUMsR0FBSyxFQUFDLElBQUksRUFBRSxtQkFBUSxDQUFDLEtBQUssRUFBQyxFQUFDO1FBQzdCLE9BQUMsQ0FBQyxHQUFHLG9DQUFMLENBQUMsQ0FBQyxHQUFHLEdBQUssRUFBRSxFQUFDO1FBRWIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFPLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksR0FBTztZQUNiLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUc7WUFDckIsTUFBTSxFQUFHLEdBQUc7WUFDWixLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUc7WUFDbEMsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNuRSxLQUFLLEVBQUUsU0FBUztTQUNuQjtRQUNELGFBQUssWUFBQyxDQUFDLENBQUMsU0FBQztJQUNiLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQ0FoQjZCLFVBQVUsR0FnQnZDO0FBRUQ7SUFBOEIsbUNBQVU7SUFDcEMseUJBQW1CLENBQTJCOztRQUMxQyxDQUFDLGFBQUQsQ0FBQyxjQUFELENBQUMsSUFBRCxDQUFDLEdBQUssRUFBQyxJQUFJLEVBQUUsbUJBQVEsQ0FBQyxLQUFLLEVBQUMsRUFBQztRQUM3QixPQUFDLENBQUMsR0FBRyxvQ0FBTCxDQUFDLENBQUMsR0FBRyxHQUFLLEVBQUUsRUFBQztRQUViLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNwQixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBTyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQU87WUFDYixLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHO1lBQ3JCLE1BQU0sRUFBRyxHQUFHO1lBQ1osS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHO1lBQzlDLG1GQUFtRjtZQUN2RSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTO1lBQzVELEtBQUssRUFBRSxTQUFTO1NBQ25CO1FBQ0QsYUFBSyxZQUFDLENBQUMsQ0FBQyxTQUFDO0lBQ2IsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxDQWpCNkIsVUFBVSxHQWlCdkM7QUFFRDtJQUE4QixtQ0FBVTtJQUNwQyx5QkFBbUIsQ0FBMkI7O1FBQzFDLENBQUMsYUFBRCxDQUFDLGNBQUQsQ0FBQyxJQUFELENBQUMsR0FBSyxFQUFDLElBQUksRUFBRSxtQkFBUSxDQUFDLEtBQUssRUFBQyxFQUFDO1FBQzdCLE9BQUMsQ0FBQyxHQUFHLG9DQUFMLENBQUMsQ0FBQyxHQUFHLEdBQUssRUFBRSxFQUFDO1FBRWIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFPLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksR0FBTztZQUNiLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUc7WUFDckIsTUFBTSxFQUFHLEdBQUc7WUFDWixLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUc7WUFDOUMsbUZBQW1GO1lBQ3ZFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDNUQsS0FBSyxFQUFFLFNBQVM7U0FDbkI7UUFDRCxhQUFLLFlBQUMsQ0FBQyxDQUFDLFNBQUM7SUFDYixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLENBakI2QixVQUFVLEdBaUJ2QztBQUVEO0lBQThCLG1DQUFVO0lBQ3BDLHlCQUFtQixDQUEyQjs7UUFDMUMsQ0FBQyxhQUFELENBQUMsY0FBRCxDQUFDLElBQUQsQ0FBQyxHQUFLLEVBQUMsSUFBSSxFQUFFLG1CQUFRLENBQUMsS0FBSyxFQUFDLEVBQUM7UUFDN0IsT0FBQyxDQUFDLEdBQUcsb0NBQUwsQ0FBQyxDQUFDLEdBQUcsR0FBSyxFQUFFLEVBQUM7UUFFYixDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQU8sRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFPO1lBQ2IsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRztZQUNyQixNQUFNLEVBQUcsR0FBRztZQUNaLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRztZQUNsQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTO1lBQ25FLEtBQUssRUFBRSxTQUFTO1NBQ25CO1FBQ0QsYUFBSyxZQUFDLENBQUMsQ0FBQyxTQUFDO0lBQ2IsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxDQWhCNkIsVUFBVSxHQWdCdkM7Ozs7Ozs7Ozs7O0FDdE9ZOzs7QUFnQmIsa0RBY0M7QUFkRCxTQUFnQixtQkFBbUIsQ0FBQyxDQUFpQjs7SUFDakQsSUFBSSxDQUFDLEtBQUssU0FBUztRQUFFLE9BQU87SUFFNUIsS0FBSyxDQUFDLGdCQUFnQjtVQUNoQixXQUFXLEdBQVMsQ0FBQyxPQUFDLENBQUMsSUFBSSxtQ0FBUyxHQUFHLENBQUM7VUFDeEMsWUFBWSxHQUFRLENBQUMsT0FBQyxDQUFDLE1BQU0sbUNBQU8sR0FBRyxDQUFDO1VBQ3hDLFFBQVEsR0FBWSxDQUFDLE9BQUMsQ0FBQyxFQUFFLG1DQUFXLEdBQUcsQ0FBQztVQUN4QyxZQUFZLEdBQVEsQ0FBQyxPQUFDLENBQUMsTUFBTSxtQ0FBTyxHQUFHLENBQUM7VUFDeEMsWUFBWSxHQUFRLENBQUMsT0FBQyxDQUFDLE1BQU0sbUNBQU8sR0FBRyxDQUFDO1VBQ3hDLFlBQVksR0FBUSxDQUFDLE9BQUMsQ0FBQyxNQUFNLG1DQUFPLEdBQUcsQ0FBQztVQUN4QyxpQkFBaUIsR0FBRyxDQUFDLE9BQUMsQ0FBQyxRQUFRLG1DQUFLLEdBQUcsQ0FBQztVQUN4QyxlQUFlLEdBQUssQ0FBQyxPQUFDLENBQUMsU0FBUyxtQ0FBSSxHQUFHLENBQUM7VUFDeEMsSUFBSSxDQUNULENBQUM7QUFDTixDQUFDO0FBRUQ7SUE4REksb0JBQW9CLENBQWlCO1FBN0Q5QixTQUFJLEdBQWdCLEVBQUUsQ0FBQztRQUN2QixXQUFNLEdBQWMsRUFBRSxDQUFDO1FBQ3ZCLE9BQUUsR0FBa0IsQ0FBQyxDQUFDO1FBQ3RCLFdBQU0sR0FBYyxDQUFDLENBQUM7UUFDdEIsV0FBTSxHQUFjLENBQUMsQ0FBQztRQUN0QixXQUFNLEdBQWMsQ0FBQyxDQUFDO1FBQ3RCLGFBQVEsR0FBWSxDQUFDLENBQUM7UUFDdEIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQXVEekIsSUFBSSxDQUFDLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQXZEYSxzQkFBVyxHQUF6QjtRQUNJLElBQU0sUUFBUSxHQUFpQixFQUFFLENBQUM7UUFDbEMsUUFBUSxDQUFDLElBQUksQ0FDVCxJQUFJLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNwQixJQUFJLEVBQUssU0FBUztZQUNsQixNQUFNLEVBQUcsS0FBSztZQUNkLEVBQUUsRUFBUSxDQUFDO1lBQ1gsTUFBTSxFQUFHLEVBQUU7WUFDWCxNQUFNLEVBQUcsRUFBRTtZQUNYLE1BQU0sRUFBSSxDQUFDO1lBQ1gsUUFBUSxFQUFJLENBQUM7WUFDYixTQUFTLEVBQUksQ0FBQztTQUNqQixDQUFDLENBQ0wsQ0FBQztRQUNGLFFBQVEsQ0FBQyxJQUFJLENBQ1QsSUFBSSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDcEIsSUFBSSxFQUFLLFNBQVM7WUFDbEIsTUFBTSxFQUFHLFFBQVE7WUFDakIsRUFBRSxFQUFRLENBQUM7WUFDWCxNQUFNLEVBQUcsRUFBRTtZQUNYLE1BQU0sRUFBRyxFQUFFO1lBQ1gsTUFBTSxFQUFJLENBQUM7WUFDWCxRQUFRLEVBQUksQ0FBQztZQUNiLFNBQVMsRUFBSSxDQUFDO1NBQ2pCLENBQUMsQ0FDTCxDQUFDO1FBQ0YsUUFBUSxDQUFDLElBQUksQ0FDVCxJQUFJLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNwQixJQUFJLEVBQUssU0FBUztZQUNsQixNQUFNLEVBQUcsUUFBUTtZQUNqQixFQUFFLEVBQVEsQ0FBQztZQUNYLE1BQU0sRUFBRyxFQUFFO1lBQ1gsTUFBTSxFQUFHLEVBQUU7WUFDWCxNQUFNLEVBQUksQ0FBQztZQUNYLFFBQVEsRUFBSSxDQUFDO1lBQ2IsU0FBUyxFQUFJLENBQUM7U0FDakIsQ0FBQyxDQUNMO1FBQ0QsUUFBUSxDQUFDLElBQUksQ0FDVCxJQUFJLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNwQixJQUFJLEVBQUssU0FBUztZQUNsQixNQUFNLEVBQUcsU0FBUztZQUNsQixFQUFFLEVBQVEsQ0FBQztZQUNYLE1BQU0sRUFBRyxFQUFFO1lBQ1gsTUFBTSxFQUFHLEVBQUU7WUFDWCxNQUFNLEVBQUcsRUFBRTtZQUNYLFFBQVEsRUFBSSxDQUFDO1lBQ2IsU0FBUyxFQUFJLENBQUM7U0FDakIsQ0FBQyxDQUNMO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUlNLDJCQUFNLEdBQWI7UUFDSSxPQUFPO1lBQ0gsSUFBSSxFQUFPLElBQUksQ0FBQyxJQUFJO1lBQ3BCLE1BQU0sRUFBSyxJQUFJLENBQUMsTUFBTTtZQUN0QixFQUFFLEVBQVMsSUFBSSxDQUFDLEVBQUU7WUFDbEIsTUFBTSxFQUFLLElBQUksQ0FBQyxNQUFNO1lBQ3RCLE1BQU0sRUFBSyxJQUFJLENBQUMsTUFBTTtZQUN0QixNQUFNLEVBQUssSUFBSSxDQUFDLE1BQU07WUFDdEIsUUFBUSxFQUFHLElBQUksQ0FBQyxRQUFRO1lBQ3hCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztTQUM1QjtJQUNMLENBQUM7SUFDTSwyQkFBTSxHQUFiLFVBQWMsQ0FBaUI7UUFDM0IsSUFBSSxDQUFDLEtBQUssU0FBUztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRWpDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBVSxTQUFTO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBUSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBUSxTQUFTO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBTSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3pELElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBWSxTQUFTO1lBQUUsSUFBSSxDQUFDLEVBQUUsR0FBVSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBUSxTQUFTO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBTSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3pELElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBUSxTQUFTO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBTSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3pELElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBUSxTQUFTO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBTSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3pELElBQUksQ0FBQyxDQUFDLFFBQVEsS0FBTSxTQUFTO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBSSxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQzNELElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBRTVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSwwQkFBSyxHQUFaOztRQUNJLEtBQUssQ0FBQyxnQkFBZ0I7Y0FDaEIsV0FBVyxHQUFTLENBQUMsVUFBSSxDQUFDLElBQUksbUNBQVMsR0FBRyxDQUFDO2NBQzNDLFlBQVksR0FBUSxDQUFDLFVBQUksQ0FBQyxNQUFNLG1DQUFPLEdBQUcsQ0FBQztjQUMzQyxRQUFRLEdBQVksQ0FBQyxVQUFJLENBQUMsRUFBRSxtQ0FBVyxHQUFHLENBQUM7Y0FDM0MsWUFBWSxHQUFRLENBQUMsVUFBSSxDQUFDLE1BQU0sbUNBQU8sR0FBRyxDQUFDO2NBQzNDLFlBQVksR0FBUSxDQUFDLFVBQUksQ0FBQyxNQUFNLG1DQUFPLEdBQUcsQ0FBQztjQUMzQyxZQUFZLEdBQVEsQ0FBQyxVQUFJLENBQUMsTUFBTSxtQ0FBTyxHQUFHLENBQUM7Y0FDM0MsaUJBQWlCLEdBQUcsQ0FBQyxVQUFJLENBQUMsUUFBUSxtQ0FBSyxHQUFHLENBQUM7Y0FDM0MsZUFBZSxHQUFLLENBQUMsVUFBSSxDQUFDLFNBQVMsbUNBQUksR0FBRyxDQUFDO2NBQzNDLElBQUksQ0FDVCxDQUFDO0lBQ04sQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQztBQXpHWSxnQ0FBVTs7Ozs7Ozs7Ozs7QUNoQ1Y7OztBQUdiLDZGQUF5RDtBQUV6RCx3RkFBNEQ7QUFDNUQsc0dBSXlCO0FBbUJ6QjtJQW9CSSxtQkFBc0IsQ0FBMEI7UUFuQnRDLFdBQU0sR0FBYyxXQUFXLENBQUM7UUFvQnRDLElBQUksQ0FBQyxPQUFPLEdBQU0sVUFBVSxHQUFHLHNCQUFTLEdBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFRLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQzlDLElBQUksQ0FBQyxHQUFHLEdBQVcsSUFBSSx1QkFBVSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLE9BQU8sR0FBTyxTQUFTLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBTyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQXBCYSxnQkFBTSxHQUFwQixVQUFxQixDQUEwQjs7UUFDM0MsQ0FBQyxhQUFELENBQUMsY0FBRCxDQUFDLElBQUQsQ0FBQyxHQUFLLEVBQUUsRUFBQztRQUNULE9BQUMsQ0FBQyxNQUFNLG9DQUFSLENBQUMsQ0FBQyxNQUFNLEdBQUssU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUM7UUFDeEMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZixLQUFLLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBQ0QsT0FBTyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ00sMEJBQU0sR0FBYixVQUFjLENBQTBCO1FBQ3BDLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBWU8sMEJBQU0sR0FBZCxVQUFlLENBQXlCOztRQUNwQyxJQUFJLENBQUMsS0FBSyxTQUFTO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFakMsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDeEQsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFNLFNBQVM7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDdkQsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFTLFNBQVM7WUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFRLFNBQVMsRUFBRSxDQUFDO1lBQzFCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxVQUFJLENBQUMsT0FBTyxvQ0FBWixJQUFJLENBQUMsT0FBTyxHQUFLLDZCQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQztZQUNsRCxDQUFDOztnQkFBTSxJQUFJLENBQUMsT0FBTyxHQUFJLFNBQVMsQ0FBQztRQUNyQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM3RSxPQUFPLElBQUksQ0FBQztJQUNwQixDQUFDO0lBRVUsdUJBQUcsR0FBVixjQUFzQixPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUM7SUFFbkMsd0JBQUksR0FBWCxjQUF3QyxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUM7SUFDckQsMkJBQU8sR0FBZCxVQUFlLElBQTZCLElBQVMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUM7SUFFbEUsOEJBQVUsR0FBakIsY0FBOEIsT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFDO0lBQzNDLDhCQUFVLEdBQWpCLFVBQWtCLEdBQVksSUFBWSxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFDO0lBRTdELDBCQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksdUJBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNNLDBCQUFNLEdBQWIsVUFBYyxDQUFhO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFDTSwwQkFBTSxHQUFiLFVBQWMsQ0FBVTtRQUNwQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSwwQkFBTSxHQUFiOztRQUNJLE9BQU87WUFDSCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsTUFBTSxFQUFHLElBQUksQ0FBQyxNQUFNO1lBQ3BCLEdBQUcsRUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUMxQixJQUFJLEVBQUssZ0JBQUksQ0FBQyxPQUFPLDBDQUFFLE1BQU0sRUFBRSxtQ0FBSSxFQUFFO1lBQ3JDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUc7U0FDcEM7SUFDTCxDQUFDO0lBRU0sMEJBQU0sR0FBYixVQUFjLENBQXlCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ2EsZ0JBQU0sR0FBcEIsVUFBcUIsQ0FBeUI7UUFDMUMsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUM7QUEvRVksOEJBQVM7Ozs7Ozs7Ozs7O0FDN0JUOzs7QUE2Q2I7SUFtQ0ksdUJBQXNCLENBQThCO1FBakI1QyxXQUFNLEdBQWMsZUFBZSxDQUFDO1FBa0J4QyxJQUFJLENBQUMsTUFBTSxHQUFRLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBRXpDLElBQUksQ0FBQyxRQUFRLEdBQU0sQ0FBQyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBSyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLFFBQVEsR0FBTSxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBTSxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBTSxHQUFHLENBQUM7UUFFdkIsSUFBSSxDQUFDLFNBQVMsR0FBSyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLFFBQVEsR0FBSyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBSyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBSyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBSyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBSyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBSyxTQUFTLENBQUM7UUFFNUIsSUFBSSxDQUFDLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQXJEYSwyQkFBYSxHQUEzQixjQUFtRSxPQUFPLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxLQUFLLEdBQUM7SUFDeEUsMkJBQWEsR0FBM0IsVUFBNEIsS0FBZ0MsSUFBUyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBQztJQUUxRSxvQkFBTSxHQUFwQixVQUFxQixDQUE4Qjs7UUFDL0MsQ0FBQyxhQUFELENBQUMsY0FBRCxDQUFDLElBQUQsQ0FBQyxHQUFLLEVBQUUsRUFBQztRQUNULE9BQUMsQ0FBQyxNQUFNLG9DQUFSLENBQUMsQ0FBQyxNQUFNLEdBQUssYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUM7UUFDNUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZixLQUFLLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUssT0FBTyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxDQUFDO1FBQ0QsT0FBTyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ00sOEJBQU0sR0FBYixVQUFjLENBQThCO1FBQ3hDLE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBeUNPLDhCQUFNLEdBQWQsVUFBZSxDQUE2QjtRQUN4QyxJQUFJLENBQUMsS0FBSyxTQUFTO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFakMsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFNLFNBQVM7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDdkQsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdEQsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFNLFNBQVM7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdEQsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdEQsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdEQsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFNLFNBQVM7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNsRixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDLEtBQUssS0FBTSxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDLEtBQUssS0FBTSxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUks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RUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUM7SUFDdkYsSUFBTSxZQUFZLEdBQUcsRUFBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFDO0lBQ3ZGLElBQU0sWUFBWSxHQUFHLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBQztJQUN2RixJQUFNLFlBQVksR0FBRyxFQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUM7SUFFdkYsSUFBTSxZQUFZLEdBQUcsRUFBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFDO0lBQ3ZGLElBQU0sWUFBWSxHQUFHLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBQztJQUN2RixJQUFNLFlBQVksR0FBRyxFQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUM7SUFDdkYsSUFBTSxZQUFZLEdBQUcsRUFBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFDO0lBRXZGLElBQUksR0FBRyxHQUFHLGlCQUFpQixDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakUsSUFBSSxHQUFHLEdBQUcsaUJBQWlCLENBQUMsWUFBWSxFQUFFLFlB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QUFDO1FBQzVDLEVBQUUsRUFBRSxFQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFDO1FBQzVDLEVBQUUsRUFBRSxFQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFDO1FBQzVDLEVBQUUsRUFBRSxFQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFDO0tBQy9DO0lBQ0QsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLENBQVMsRUFBRSxJQUFpQixFQUFFLElBQWlCO0lBQzlELElBQUksYUFBYSxDQUFDLEtBQUssS0FBSyxTQUFTO1FBQUUsT0FBTztJQUM5QyxJQUFNLEdBQUcsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBRWhDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoQixHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBRWhCLElBQUksSUFBSSxJQUFJLElBQUks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QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFTLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtJQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7QUNSeEI7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19HdWlsZC50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX0hlcm8udHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19IZXJvQWJpbGl0eS50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX0xvY2F0aW9uLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfTWF6ZS50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX01hemVDZWxsLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfTWF6ZUluZm8udHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19NYXplT2JqLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfTWF6ZU9ialZpZXcudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19Nb3ZhYmxlUG9pbnQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19Qb2ludC50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX1BvaW50RGlyLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfUG9pbnRTZXQyRC50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX1JhbmdlLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfbWRsL0NfU2F2ZURhdGEudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19TYXZlSW5mby50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX1RlYW0udHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9tZGwvQ19UZWFtVmlldy50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9DX1dhbGtlci50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9UX0RpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX21kbC9UX016S2luZC50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX3JkYi9DX0d1aWxkUkRCLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfcmRiL0NfSGVyb1JEQi50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX3JkYi9DX01hemVSREIudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9yZGIvQ19NdnB0UkRCLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfcmRiL0NfU2F2ZURhdGFSREIudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF9yZGIvQ19UZWFtUkRCLnRzIiwid2VicGFjazovL21haS8uLi9tYWkvc3JjL2RfdXRsL0NfRHNwTWVzc2FnZS50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpL3NyYy9kX3V0bC9GX01hdGgudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haS9zcmMvZF91dGwvRl9SYW5kLnRzIiwid2VicGFjazovL21haS8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2xpYi9fSlNPTl9tYWlfZ3VsZC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvbGliL19KU09OX21haV9sZHN2LnRzIiwid2VicGFjazovL21haS8uL3NyYy9saWIvX0pTT05fbWFpX2xkc3ZfdGVzdC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvbGliL19KU09OX21haV9tYXplLnRzIiwid2VicGFjazovL21haS8uL3NyYy9yb3V0ZXMvbWFpR3VsZC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvcm91dGVzL21haUxkU3YudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL3JvdXRlcy9tYWlNYXplLnRzIiwid2VicGFjazovL21haS8uL3NyYy9yb3V0ZXMvbWFpZXgudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL3JvdXRlcy91c2Vycy50cyIsIndlYnBhY2s6Ly9tYWkvZXh0ZXJuYWwgY29tbW9uanMgXCJjb29raWUtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vbWFpL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL21haS9leHRlcm5hbCBjb21tb25qcyBcImh0dHAtZXJyb3JzXCIiLCJ3ZWJwYWNrOi8vbWFpL2V4dGVybmFsIGNvbW1vbmpzIFwibW9yZ2FuXCIiLCJ3ZWJwYWNrOi8vbWFpL2V4dGVybmFsIGNvbW1vbmpzIFwibXlzcWwyL3Byb21pc2VcIiIsIndlYnBhY2s6Ly9tYWkvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly9tYWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFpL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbWFpL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9tYWkvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgSV9Mb2NhdGUsIFRfTGNrZCB9ICAgICAgZnJvbSBcIi4vQ19Mb2NhdGlvblwiO1xyXG5pbXBvcnQgeyBJX0pTT05fVW5pcSwgSlNPTl9BbnkgfSBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcbmltcG9ydCB7IENfSGVybywgSlNPTl9IZXJvIH0gICAgIGZyb20gXCIuL0NfSGVyb1wiO1xyXG5pbXBvcnQgeyBfZ2V0X3V1aWQgfSAgICAgICAgICAgICBmcm9tIFwiLi4vZF91dGwvRl9SYW5kXCI7XHJcbmltcG9ydCB7IENfR29vZHNMaXN0LCBKU09OX0dvb2RzTGlzdCB9IGZyb20gXCIuL0NfR29vZHNMaXN0TkdcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9HdWlsZCBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGlkPzogICAgICAgbnVtYmVyLFxyXG4gICAgdW5pcV9pZD86ICBzdHJpbmcsXHJcbiAgICBzYXZlX2lkPzogIG51bWJlcixcclxuICAgIG5hbWU/OiAgICAgc3RyaW5nLFxyXG4gICAgZ29sZD86ICAgICBudW1iZXIsXHJcbiAgICBnb29kcz86ICAgIEpTT05fR29vZHNMaXN0LFxyXG4gICAgaGVyb2VzPzogICBKU09OX0hlcm9bXSxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X2d1bGRfaW5mbyhhOiBKU09OX0d1aWxkfHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoXCJHdWlsZCBJbmZvOlwiIFxyXG4gICAgICAgICsgXCJcXG5pZDogICAgICAgXCIgKyAoYS5pZCAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG51bmlxX2lkOiAgXCIgKyAoYS51bmlxX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zYXZlX2lkOiAgXCIgKyAoYS5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5uYW1lOiAgICAgXCIgKyAoYS5uYW1lICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5nb2xkOiAgICAgXCIgKyAoYS5nb2xkICAgICAgPz8gIDAgKVxyXG4vLyAgICAgICAgKyBcIlxcbmdvb2RzOiAgICBcIiArIChPYmplY3Qua2V5cyhhLmdvb2RzPz8wKS5sZW5ndGgpXHJcbiAgICAgICAgKyBcIlxcbmhlcm9lczogICBcIiArIChhLmhlcm9lcz8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX0d1aWxkIGltcGxlbWVudHMgSV9Mb2NhdGUsIElfSlNPTl9VbmlxIHtcclxuICAgIHByb3RlY3RlZCBpZDogICAgICAgICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgdW5pcV9pZDogICAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHNhdmVfaWQ6ICAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBuYW1lOiAgICAgICBzdHJpbmc7XHJcbiAgICBwdWJsaWMgICAgZ29sZDogICAgICAgbnVtYmVyO1xyXG4vLyAgICBwdWJsaWMgICAgZ29vZHM6ICAgICAgQ19Hb29kc0xpc3Q7XHJcbiAgICBwcm90ZWN0ZWQgaGVyb2VzOiAgICAge1t1aWQ6IHN0cmluZ106IENfSGVyb307XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYT86IEpTT05fR3VpbGQpIHtcclxuICAgICAgICB0aGlzLmlkICAgICAgICAgPSAtMTtcclxuICAgICAgICB0aGlzLnVuaXFfaWQgICAgPSAnbWFpX2d1bGQjJyArIF9nZXRfdXVpZCgpO1xyXG4gICAgICAgIHRoaXMuc2F2ZV9pZCAgICA9IC0xO1xyXG4gICAgICAgIHRoaXMubmFtZSAgICAgICA9ICcnO1xyXG4gICAgICAgIHRoaXMuZ29sZCAgICAgICA9ICAwO1xyXG4vLyAgICAgICAgdGhpcy5nb29kcyAgICAgID0gbmV3IENfR29vZHNMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5oZXJvZXMgICAgID0ge307XHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy51bmlxX2lkfVxyXG4gICAgcHVibGljIGdldF9sY2tkKCk6IFRfTGNrZCB7cmV0dXJuIFRfTGNrZC5NYXplfVxyXG4gICAgcHVibGljIGdldF9uYW1lKCk6IHN0cmluZyB7cmV0dXJuIHRoaXMubmFtZX1cclxuICAgIFxyXG4gICAgcHVibGljIGhyZXMoKTogIENfSGVyb1tdIHtcclxuICAgICAgICBjb25zdCBocmVzOiBDX0hlcm9bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGlpIGluIHRoaXMuaGVyb2VzKSBocmVzLnB1c2godGhpcy5oZXJvZXNbaWldKTtcclxuICAgICAgICByZXR1cm4gaHJlcztcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgY2xlYXJfaHJlcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlcm9lcyA9IHt9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFkZF9oZXJvKGhlcm86IENfSGVybyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGVyb2VzW2hlcm8udWlkKCldID0gaGVybztcclxuICAgIH1cclxuICAgIHB1YmxpYyBybXZfaGVybyhoZXJvOiBDX0hlcm8pOiB2b2lkIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5oZXJvZXNbaGVyby51aWQoKV07XHJcbiAgICB9XHJcblxyXG4vKlxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX29ial90b19zdHJpbmcob2E6IENfR3VpbGQpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYSwgbnVsbCwgXCJcXHRcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fb2JqQXJyYXlfdG9fc3RyaW5nKG9hYToge1t1aWQ6IHN0cmluZ106IENfR3VpbGR9KTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBvYSA9IFtdIGFzIENfR3VpbGRbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGlpIGluIG9hYSkgb2EucHVzaChvYWFbaWldKTtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2EsIG51bGwsIFwiXFx0XCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ190b19vYmoodHh0OiBzdHJpbmcpOiBDX0d1aWxkIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqICAgPSBKU09OLnBhcnNlKHR4dCkgYXMgSlNPTl9HdWlsZFtdO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENfR3VpbGQoaik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ19HdWlsZCgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fc3RyaW5nX3RvX29iakFycmF5KHR4dDogc3RyaW5nKToge1t1aWQ6IHN0cmluZ106IENfR3VpbGR9IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqICAgPSBKU09OLnBhcnNlKHR4dCkgYXMgSlNPTl9HdWlsZFtdO1xyXG4gICAgICAgICAgICBjb25zdCBtcGEgPSB7fSBhcyB7W2lkOiBzdHJpbmddOiBDX0d1aWxkfTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqaiBvZiBqKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhYWEgPSBuZXcgQ19HdWlsZCgpLmRlY29kZShqaik7XHJcbiAgICAgICAgICAgICAgICBtcGFbYWFhLnVpZCgpXSA9IGFhYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbXBhO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuKi9cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fR3VpbGQge1xyXG4gICAgICAgIGNvbnN0IGpzb25faGVyb2VzOiBKU09OX0hlcm9bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGlpIGluIHRoaXMuaGVyb2VzKSBqc29uX2hlcm9lcy5wdXNoKHRoaXMuaGVyb2VzW2lpXS5lbmNvZGUoKSk7ICBcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6ICAgICAgdGhpcy5pZCxcclxuICAgICAgICAgICAgdW5pcV9pZDogdGhpcy51bmlxX2lkLFxyXG4gICAgICAgICAgICBzYXZlX2lkOiB0aGlzLnNhdmVfaWQsXHJcbiAgICAgICAgICAgIGdvbGQ6ICAgIHRoaXMuZ29sZCxcclxuLy8gICAgICAgICAgICBnb29kczogICB0aGlzLmdvb2RzLmVuY29kZSgpLFxyXG4gICAgICAgICAgICBoZXJvZXM6ICBqc29uX2hlcm9lcyxcclxuICAgICAgICAgICAgbmFtZTogICAgdGhpcy5uYW1lLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoYTogSlNPTl9HdWlsZHx1bmRlZmluZWQpOiBDX0d1aWxkIHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBcclxuICAgICAgICBpZiAoYS5pZCAgICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmlkICAgICAgICAgPSBhLmlkO1xyXG4gICAgICAgIGlmIChhLnVuaXFfaWQgICE9PSB1bmRlZmluZWQpIHRoaXMudW5pcV9pZCAgICA9IGEudW5pcV9pZDtcclxuICAgICAgICBpZiAoYS5zYXZlX2lkICAhPT0gdW5kZWZpbmVkKSB0aGlzLnNhdmVfaWQgICAgPSBhLnNhdmVfaWQ7XHJcbiAgICAgICAgaWYgKGEubmFtZSAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5uYW1lICAgICAgID0gYS5uYW1lO1xyXG4gICAgICAgIGlmIChhLmdvbGQgICAgICE9PSB1bmRlZmluZWQpIHRoaXMuZ29sZDtcclxuLy8gICAgICAgIGlmIChhLmdvb2RzICAgICE9PSB1bmRlZmluZWQpIHRoaXMuZ29vZHMuZGVjb2RlIChhLmdvb2RzKTtcclxuXHJcbiAgICAgICAgaWYgKGEuaGVyb2VzICE9PSB1bmRlZmluZWQpICB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVyb2VzID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl9oZXJvIG9mIGEuaGVyb2VzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZXJvID0gbmV3IENfSGVybyhqc29uX2hlcm8pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZXJvZXNbaGVyby51aWQoKV0gPSBoZXJvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBlbmNvZGVfYWxsKGFsbF9ndWxkOiBDX0d1aWxkW10pOiBKU09OX0d1aWxkW10ge1xyXG4gICAgICAgIGNvbnN0IGFsbF9ndWxkX2RhdGE6IEpTT05fR3VpbGRbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGd1bGQgb2YgYWxsX2d1bGQpIHtcclxuICAgICAgICAgICAgYWxsX2d1bGRfZGF0YS5wdXNoKGd1bGQuZW5jb2RlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsX2d1bGRfZGF0YTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVjb2RlX2FsbChhbGxfZ3VsZF9kYXRhOiBKU09OX0d1aWxkW10pOiBDX0d1aWxkW10ge1xyXG4gICAgICAgIGNvbnN0IGFsbF9ndWxkOiBDX0d1aWxkW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBndWxkX2RhdGEgb2YgYWxsX2d1bGRfZGF0YSkge1xyXG4gICAgICAgICAgICBhbGxfZ3VsZC5wdXNoKChuZXcgQ19HdWlsZCgpKS5kZWNvZGUoZ3VsZF9kYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxfZ3VsZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGFsZXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiR3VpbGQgSW5mbzpcIiBcclxuICAgICAgICAgICAgKyBcIlxcbmlkOiAgICAgICBcIiArICh0aGlzLmlkICAgICAgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnVuaXFfaWQ6ICBcIiArICh0aGlzLnVuaXFfaWQgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNhdmVfaWQ6ICBcIiArICh0aGlzLnNhdmVfaWQgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbm5hbWU6ICAgICBcIiArICh0aGlzLm5hbWUgICAgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmdvbGQ6ICAgICBcIiArICh0aGlzLmdvbGQgICAgICAgICAgID8/ICAwKVxyXG4vLyAgICAgICAgICAgICsgXCJcXG5nb29kczogICAgXCIgKyAoT2JqZWN0LmtleXModGhpcy5nb29kcz8/MCkubGVuZ3RoKVxyXG4gICAgICAgICAgICArIFwiXFxuaGVyb2VzOiAgIFwiICsgKHRoaXMuaGVyb2VzPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ19IZXJvQWJpbGl0eSwgSlNPTl9IZXJvX0FiaWxpdHl9IGZyb20gXCIuL0NfSGVyb0FiaWxpdHlcIjtcclxuaW1wb3J0IHsgSV9KU09OX1VuaXEsICAgSlNPTl9BbnkgfSAgICAgICAgIGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuaW1wb3J0IHsgX2dldF91dWlkLCBfaW5yYW5kLCBfaXJhbmQsIF9yYW5kb21fc3RyIH0gIGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuaW1wb3J0IHsgQ19Hb29kc0xpc3QsIEpTT05fR29vZHNMaXN0IH0gZnJvbSBcIi4vQ19Hb29kc0xpc3ROR1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX0hlcm8gZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBpZD86ICAgICAgICBudW1iZXIsIFxyXG4gICAgdW5pcV9pZD86ICAgc3RyaW5nLCBcclxuICAgIHNhdmVfaWQ/OiAgIG51bWJlciwgXHJcbiAgICBuYW1lPzogICAgICBzdHJpbmcsIFxyXG4gICAgc2V4PzogICAgICAgbnVtYmVyOyBcclxuICAgIGFnZT86ICAgICAgIG51bWJlcjsgXHJcbiAgICBnb2xkPzogICAgICBudW1iZXI7IFxyXG4vLyAgICBnb29kcz86ICAgICBKU09OX0dvb2RzTGlzdDsgXHJcbiAgICBzdGF0ZT86ICAgICBudW1iZXI7IFxyXG4gICAgbHY/OiAgICAgICAgbnVtYmVyOyBcclxuICAgIHZhbD86ICAgICAgIEpTT05fSGVyb19WYWx1ZTtcclxuICAgIGFiaV9wPzogICAgICAge2JzYz86IEpTT05fSGVyb19BYmlsaXR5LCB0dGw/OiBKU09OX0hlcm9fQWJpbGl0eSwgbm93PzogSlNPTl9IZXJvX0FiaWxpdHl9O1xyXG4gICAgYWJpX20/OiAgICAgICB7YnNjPzogSlNPTl9IZXJvX0FiaWxpdHksIHR0bD86IEpTT05fSGVyb19BYmlsaXR5LCBub3c/OiBKU09OX0hlcm9fQWJpbGl0eX07XHJcbiAgICBpc19hbGl2ZT86ICBzdHJpbmd8Ym9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX0hlcm9fVmFsdWUgZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBza3A/OiB7dHRsOiBudW1iZXIsICBub3c6IG51bWJlcn0sIFxyXG4gICAgZXhwPzoge3R0bDogbnVtYmVyLCAgbm93OiBudW1iZXJ9LFxyXG4gICAgbnhlPzogbnVtYmVyLCAgICAgICAgICAgICAgICAgICAvLyDmrKHlm57jga7jg5Ljg7zjg63jg7zjg6zjg5njg6vjgqLjg4Pjg5fjgavlv4XopoHjgarntYzpqJPlgKRcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X2hyZXNfaW5mbyhhOiAoSlNPTl9IZXJvfHVuZGVmaW5lZClbXXx1bmRlZmluZWQpOiB2b2lkIHsgXHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydCgnTnVtYmVyIG9mIEhlcm8gPSAnICsgYS5sZW5ndGgudG9TdHJpbmcoKSk7XHJcbiAgICBmb3IgKHZhciBpIGluIGEpIHtcclxuICAgICAgICBpZiAoYVtpXSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuICAgICAgICBhbGVydF9oZXJvX2luZm8oYVtpXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9oZXJvX2luZm8oYTogSlNPTl9IZXJvfHVuZGVmaW5lZCk6IHZvaWQgeyBcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGFsZXJ0KFwiSGVybyBJbmZvOlxcblwiIFxyXG4gICAgICAgICsgXCJcXG5pZDogICAgICAgXCIgICAgICsgKGE/LmlkICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnVuaXFfaWQgICBcIiAgICAgKyAoYT8udW5pcV9pZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubmFtZTogICAgIFwiICAgICArIChhPy5uYW1lICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zYXZlX2lkOiAgXCIgICAgICsgKGE/LnNhdmVfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmlzX2FsaXZlOiBcIiAgICAgKyAoYT8uaXNfYWxpdmUgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX0hlcm8gaW1wbGVtZW50cyBJX0pTT05fVW5pcSB7XHJcbiAgICBwcm90ZWN0ZWQgbXlfaWQ6ICAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBteV9uYW1lOiAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHVuaXFfaWQ6ICBzdHJpbmc7IFxyXG4gICAgcHJvdGVjdGVkIHNhdmVfaWQ6ICBudW1iZXI7IFxyXG4gICAgcHJvdGVjdGVkIHNleDogICAgICBudW1iZXI7IFxyXG4gICAgcHJvdGVjdGVkIGFnZTogICAgICBudW1iZXI7IFxyXG4gICAgcHJvdGVjdGVkIHN0YXRlOiAgICBudW1iZXI7IFxyXG4gICAgcHJvdGVjdGVkIGx2OiAgICAgICBudW1iZXI7IFxyXG4gICAgLy8gYnNjKEJhc2ljKeOBr+W9k+S6uuOBruWfuuacrOWApOOAgnR0bChUb3RhbCnjga/oo4XlgpnnrYnjgpLliqDmuJvnrpfjgZfjgZ/jgoLjga7jgIJub3fjga/jg5Djg5XnrYnjga7jgr/jg7zjg7PliLbjga7jgoLliqDmuJvnrpfjgZfjgZ/jgoLjga5cclxuICAgIHByb3RlY3RlZCBnb2xkOiAgICAgbnVtYmVyOyBcclxuLy8gICAgcHJvdGVjdGVkIGdvb2RzOiAgICBDX0dvb2RzTGlzdDsgXHJcbiAgICBwcm90ZWN0ZWQgdmFsOiAgICAgIEpTT05fSGVyb19WYWx1ZTtcclxuICAgIHByb3RlY3RlZCBhYmlfcDogICAgICB7YnNjOiBDX0hlcm9BYmlsaXR5LCB0dGw6IENfSGVyb0FiaWxpdHksIG5vdzogQ19IZXJvQWJpbGl0eX07XHJcbiAgICBwcm90ZWN0ZWQgYWJpX206ICAgICAge2JzYzogQ19IZXJvQWJpbGl0eSwgdHRsOiBDX0hlcm9BYmlsaXR5LCBub3c6IENfSGVyb0FiaWxpdHl9O1xyXG5cclxuICAgIHByb3RlY3RlZCBpc19hbGl2ZTogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYT86IEpTT05fSGVybykge1xyXG4gICAgICAgIHRoaXMubXlfaWQgICAgICA9IDA7XHJcbiAgICAgICAgdGhpcy5teV9uYW1lICAgID0gJ05vIE5hbWUgSGVybyc7XHJcbiAgICAgICAgdGhpcy51bmlxX2lkICAgID0gJ21haV9oZXJvIycgKyBfZ2V0X3V1aWQoKTtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgICAgPSAwO1xyXG4gICAgICAgIHRoaXMuc2V4ICAgICAgICA9IDA7IFxyXG4gICAgICAgIHRoaXMuYWdlICAgICAgICA9IDA7IFxyXG4gICAgICAgIHRoaXMuZ29sZCAgICAgICA9IDA7IFxyXG4vLyAgICAgICAgdGhpcy5nb29kcyAgICAgID0gbmV3IENfR29vZHNMaXN0KCk7IFxyXG4gICAgICAgIHRoaXMuc3RhdGUgICAgICA9IDA7IFxyXG4gICAgICAgIHRoaXMubHYgICAgICAgICA9IDA7XHJcbiAgICAgICAgdGhpcy52YWwgICAgICAgID0ge307XHJcbiAgICAgICAgdGhpcy5hYmlfcCAgICAgID0ge2JzYzogbmV3IENfSGVyb0FiaWxpdHkoKSwgdHRsOiBuZXcgQ19IZXJvQWJpbGl0eSgpLCBub3c6IG5ldyBDX0hlcm9BYmlsaXR5KCl9O1xyXG4gICAgICAgIHRoaXMuYWJpX20gICAgICA9IHtic2M6IG5ldyBDX0hlcm9BYmlsaXR5KCksIHR0bDogbmV3IENfSGVyb0FiaWxpdHkoKSwgbm93OiBuZXcgQ19IZXJvQWJpbGl0eSgpfTtcclxuICAgICAgICB0aGlzLmlzX2FsaXZlICAgPSB0cnVlO1xyXG4gICAgICAgIGlmIChhICE9PSB1bmRlZmluZWQpIHRoaXMuZGVjb2RlKGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRfcHJwKGFyZyA6IEpTT05fSGVybykge1xyXG4gICAgICAgIHRoaXMuZGVjb2RlKGFyZyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3VuaXFfaWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudW5pcV9pZH1cclxuXHJcbiAgICBwdWJsaWMgaWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0hlcm9fJyArIHRoaXMubXlfaWQudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDUsICcwJyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdWlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnVuaXFfaWQ7fVxyXG4gICAgcHVibGljIG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5teV9uYW1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9uYW1lKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubXlfbmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9IZXJvIHtcclxuICAgICAgICBjb25zdCByZXQ6IEpTT05fSGVybyA9IHtcclxuICAgICAgICAgICAgaWQ6ICAgICAgICB0aGlzLm15X2lkLFxyXG4gICAgICAgICAgICB1bmlxX2lkOiAgIHRoaXMudW5pcV9pZCxcclxuICAgICAgICAgICAgbmFtZTogICAgICB0aGlzLm15X25hbWUsXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6ICAgdGhpcy5zYXZlX2lkLFxyXG4gICAgICAgICAgICBzZXg6ICAgICAgIHRoaXMuc2V4LCBcclxuICAgICAgICAgICAgYWdlOiAgICAgICB0aGlzLmFnZSwgXHJcbiAgICAgICAgICAgIHN0YXRlOiAgICAgdGhpcy5zdGF0ZSwgXHJcbiAgICAgICAgICAgIGx2OiAgICAgICAgdGhpcy5sdiwgXHJcbiAgICAgICAgICAgIGdvbGQ6ICAgICAgdGhpcy5nb2xkLCBcclxuLy8gICAgICAgICAgICBnb29kczogICAgIHRoaXMuZ29vZHMuZW5jb2RlKCksIFxyXG4gICAgICAgICAgICB2YWw6ICAgICAgIHRoaXMudmFsLFxyXG4gICAgICAgICAgICBhYmlfcF9ic2M6IHRoaXMuYWJpX3AuYnNjLmVuY29kZSgpLFxyXG4gICAgICAgICAgICBhYmlfbV9ic2M6IHRoaXMuYWJpX20uYnNjLmVuY29kZSgpLFxyXG4gICAgICAgICAgICBpc19hbGl2ZTogKHRoaXMuaXNfYWxpdmUpID8gJ1knIDogJ04nLCBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoYTogSlNPTl9IZXJvfHVuZGVmaW5lZCk6IENfSGVybyB7XHJcbiAgICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKGEuaWQgICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9pZCAgICA9IGEuaWQ7XHJcbiAgICAgICAgaWYgKGEubmFtZSAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9uYW1lICA9IGEubmFtZTtcclxuICAgICAgICBpZiAoYS51bmlxX2lkICAhPT0gdW5kZWZpbmVkKSB0aGlzLnVuaXFfaWQgID0gYS51bmlxX2lkO1xyXG4gICAgICAgIGlmIChhLnNhdmVfaWQgICE9PSB1bmRlZmluZWQpIHRoaXMuc2F2ZV9pZCAgPSBhLnNhdmVfaWQ7XHJcbiAgICAgICAgaWYgKGEuc2V4ICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5zZXggICAgICA9IGEuc2V4O1xyXG4gICAgICAgIGlmIChhLmFnZSAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMuYWdlICAgICAgPSBhLmFnZTtcclxuICAgICAgICBpZiAoYS5zdGF0ZSAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLnN0YXRlICAgID0gYS5zdGF0ZTtcclxuICAgICAgICBpZiAoYS5sdiAgICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmx2ICAgICAgID0gYS5sdjtcclxuICAgICAgICBpZiAoYS5nb2xkICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmdvbGQgICAgID0gYS5nb2xkO1xyXG4gICAgICAgIGlmIChhLmlzX2FsaXZlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhLmlzX2FsaXZlID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc19hbGl2ZSA9IGEuaXNfYWxpdmU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzX2FsaXZlID0gKGEuaXNfYWxpdmUgIT0gJ04nKSA/IHRydWU6IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4vLyAgICAgICAgaWYgKGEuZ29vZHMgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmdvb2RzLmRlY29kZShhLmdvb2RzKTtcclxuICAgICAgICBpZiAoYS52YWwgICAgICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fX2RlY29kZV92YWwodGhpcy52YWwsIGEudmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEuYWJpX3BfYnNjICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hYmlfcC5ic2MuZGVjb2RlKGEuYWJpX3BfYnNjKTtcclxuICAgICAgICAgICAgLy8g5pqr5a6aXHJcbiAgICAgICAgICAgIHRoaXMuYWJpX3AudHRsID0gdGhpcy5hYmlfcC5ub3cgPSB0aGlzLmFiaV9wLmJzYztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEuYWJpX21fYnNjICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hYmlfbS5ic2MuZGVjb2RlKGEuYWJpX21fYnNjKTtcclxuICAgICAgICAgICAgLy8g5pqr5a6aXHJcbiAgICAgICAgICAgIHRoaXMuYWJpX20udHRsID0gdGhpcy5hYmlfbS5ub3cgPSB0aGlzLmFiaV9tLmJzYztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9fZGVjb2RlX3ZhbChkOiBKU09OX0hlcm9fVmFsdWUsIHM6IEpTT05fSGVyb19WYWx1ZSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChzLnNrcCAhPT0gdW5kZWZpbmVkKSBkLnNrcCA9IHRoaXMuX19kZWNvZGVfc2tleChkLnNrcCwgcy5za3ApO1xyXG4gICAgICAgIGlmIChzLmV4cCAhPT0gdW5kZWZpbmVkKSBkLmV4cCA9IHRoaXMuX19kZWNvZGVfc2tleChkLmV4cCwgcy5leHApO1xyXG4gICAgICAgIGlmIChzLm54ZSAhPT0gdW5kZWZpbmVkKSBkLm54ZSA9IHMubnhlO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9fZGVjb2RlX3NrZXgoYToge3R0bD86IG51bWJlciwgbm93PzogbnVtYmVyfSB8IHVuZGVmaW5lZCwgczoge3R0bD86IG51bWJlciwgbm93PzogbnVtYmVyfSk6IHt0dGw6IG51bWJlciwgbm93OiBudW1iZXJ9IHtcclxuICAgICAgICB2YXIgZDoge3R0bDogbnVtYmVyLCBub3c6IG51bWJlcn07XHJcbiAgICAgICAgaWYgICAgIChhID09PSB1bmRlZmluZWQpIGQgPSB7dHRsOiAwLCBub3c6IDB9O1xyXG4gICAgICAgIGVsc2UgICAgZCA9IHt0dGw6IGE/LnR0bCA/PyAwLCBub3c6IGE/Lm5vdyA/PyAwfTtcclxuXHJcbiAgICAgICAgZC50dGwgPSBzLnR0bCA/PyBkLnR0bDtcclxuICAgICAgICBkLm5vdyA9IHMubm93ID8/IHMudHRsID8/IGQubm93O1xyXG4gICAgICAgIHJldHVybiBkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlX2hlcm8oKTogQ19IZXJvIHtcclxuICAgICAgICBjb25zdCBuZXdfaGVybyA9IG5ldyBDX0hlcm8oKTtcclxuICAgICAgICBuZXdfaGVyby5zZXRfcHJwKHtpZDogICAgTWF0aC5mbG9vcigtMTAwMC4wICogTWF0aC5yYW5kb20oKSl9KTtcclxuICAgICAgICBuZXdfaGVyby5zZXRfcHJwKHtuYW1lOiAgbmV3X2hlcm8uaWQoKX0pO1xyXG4gICAgICAgIHJldHVybiBuZXdfaGVybztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmFuZG9tX21ha2UoKTogQ19IZXJvIHtcclxuICAgICAgICB0aGlzLm15X2lkICAgID0gMDsgLy8gLS1IZXJvOjokbWF4X2lkO1xyXG4gICAgICAgIHRoaXMubXlfbmFtZSAgPSBcIuWGkumZuuiAhSBcIiArIF9yYW5kb21fc3RyKDUpO1xyXG4gICAgICAgIHRoaXMuc2V4ICAgICAgPSBfaXJhbmQoIDAsICAgICAxKTsgXHJcbiAgICAgICAgdGhpcy5hZ2UgICAgICA9IF9pcmFuZCggMTUsICAgMjUpOyBcclxuICAgICAgICB0aGlzLnN0YXRlICAgID0gMDsgXHJcbiAgICAgICAgdGhpcy5sdiAgICAgICA9IDA7IFxyXG4gICAgICAgIHRoaXMuZ29sZCAgICAgPSBfaXJhbmQoIDUwMCwgMTAwMCk7IFxyXG4gICAgICAgIHRoaXMudmFsICAgICAgPSB7XHJcbiAgICAgICAgICAgIHNrcDoge3R0bDogMCwgbm93OiAwfSwgXHJcbiAgICAgICAgICAgIGV4cDoge3R0bDogMCwgbm93OiAwfSxcclxuICAgICAgICAgICAgJ254ZSc6IDEwMDBcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgYWJpX3BfYnNjID0gdGhpcy5hYmlfcC5ic2M7XHJcbiAgICAgICAgYWJpX3BfYnNjLnJhbmRvbV9tYWtlKCk7XHJcbiAgICAgICAgYWJpX3BfYnNjLmFkZF94cF9ib251cygodGhpcy5hZ2UgLSAxNSkgKiAxMCk7XHJcbiAgICAgICAgYWJpX3BfYnNjLmFkZF9lbF9ib251cygodGhpcy5hZ2UgLSAxNSkgKiAgNSk7XHJcbiAgICAgICAgYWJpX3BfYnNjLmFkZF9wcl9ib251cygodGhpcy5hZ2UgLSAxNSkgKiAgMik7XHJcbiAgICAgICAgdGhpcy5hYmlfcC5ic2MgPSBhYmlfcF9ic2M7XHJcblxyXG4gICAgICAgIGNvbnN0IGFiaV9tX2JzYyA9IHRoaXMuYWJpX20uYnNjO1xyXG4gICAgICAgIGFiaV9tX2JzYy5yYW5kb21fbWFrZSgpO1xyXG4gICAgICAgIGFiaV9tX2JzYy5hZGRfeHBfYm9udXMoKHRoaXMuYWdlIC0gMTUpICogMTApO1xyXG4gICAgICAgIGFiaV9tX2JzYy5hZGRfZWxfYm9udXMoKHRoaXMuYWdlIC0gMTUpICogIDUpO1xyXG4gICAgICAgIGFiaV9tX2JzYy5hZGRfcHJfYm9udXMoKHRoaXMuYWdlIC0gMTUpICogIDIpO1xyXG4gICAgICAgIHRoaXMuYWJpX20uYnNjID0gYWJpX21fYnNjO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGVuY29kZV9oZXJvZXMoaGVyb2VzOiBDX0hlcm9bXSk6IEpTT05fSGVyb1tdIHtcclxuICAgICAgICBjb25zdCBoZXJvZXNfZGF0YSA9IFtdIGFzIEpTT05fSGVyb1tdO1xyXG4gICAgICAgIGZvciAodmFyIGhlcm8gb2YgaGVyb2VzKSB7XHJcbiAgICAgICAgICAgIGhlcm9lc19kYXRhLnB1c2goaGVyby5lbmNvZGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoZXJvZXNfZGF0YTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVjb2RlX2hlcm9lcyhoZXJvZXNfZGF0YTogKEpTT05fSGVyb3x1bmRlZmluZWQpW118dW5kZWZpbmVkKTogQ19IZXJvW10ge1xyXG4gICAgICAgIGNvbnN0IGhlcm9lcyA9IFtdIGFzIENfSGVyb1tdO1xyXG4gICAgICAgIGlmIChoZXJvZXNfZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGhlcm9fZGF0YSBvZiBoZXJvZXNfZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhlcm9fZGF0YSAhPT0gdW5kZWZpbmVkKSBoZXJvZXMucHVzaChuZXcgQ19IZXJvKCkuZGVjb2RlKGhlcm9fZGF0YSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoZXJvZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFsZXJ0KCk6IHZvaWQgeyBcclxuICAgICAgICBhbGVydChcIkhlcm8gSW5mbzpcXG5cIiBcclxuICAgICAgICAgICAgKyBcIlxcbmlkOiAgICAgICBcIiAgICAgKyAodGhpcy5pZCAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudW5pcV9pZCAgIFwiICAgICArICh0aGlzLnVuaXFfaWQgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5uYW1lOiAgICAgXCIgICAgICsgKHRoaXMubmFtZSAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNhdmVfaWQ6ICBcIiAgICAgKyAodGhpcy5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuaXNfYWxpdmU6IFwiICAgICArICh0aGlzLmlzX2FsaXZlICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGFsZXJ0X2hyZXMoYTogKENfSGVyb3x1bmRlZmluZWQpW118dW5kZWZpbmVkKTogdm9pZCB7IFxyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICBhbGVydCgnTnVtYmVyIG9mIEhlcm8gPSAnICsgYS5sZW5ndGgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBhKSBhW2ldPy5hbGVydCgpO1xyXG4gICAgfVxyXG59IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBJX0pTT04sIEpTT05fQW55IH0gZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5pbXBvcnQgeyBfcm91bmQgfSAgICAgICAgICAgZnJvbSBcIi4uL2RfdXRsL0ZfTWF0aFwiO1xyXG5pbXBvcnQgeyBfaW5yYW5kIH0gZnJvbSBcIi4uL2RfdXRsL0ZfUmFuZFwiO1xyXG5cclxuLy8g5LiA6Iis44Gr5L2/44GI44KL44Om44O844OG44Kj44Oq44OG44Kj44Gq5ZGq5paHXHJcbi8vIOOCquODluOCuOOCp+OCr+ODiOOCkuWIl+aMmeWei+OBqOOBl+OBpuWei+WMluOBmeOCi+OBruOBq+WIqeeUqFxyXG50eXBlIFRfSGVyb0FiaWxpdHkgPSB7W2tleTogc3RyaW5nXTogbnVtYmVyfTtcclxuZXhwb3J0IGludGVyZmFjZSBKU09OX0hlcm9fQWJpbGl0eSBleHRlbmRzIEpTT05fQW55IHtba2V5OiBzdHJpbmddOiBudW1iZXJ9XHJcblxyXG5leHBvcnQgY2xhc3MgQ19IZXJvQWJpbGl0eSBpbXBsZW1lbnRzIElfSlNPTiB7XHJcbiAgICBwcm90ZWN0ZWQgdjogVF9IZXJvQWJpbGl0eSA9IHtcclxuICAgICAgICB4cDogIDAsICAvLyBwOkhQ44CBbTpNUFxyXG5cclxuICAgICAgICAvLyDku6XkuIvjgIHmiKbpl5jog73lipvjga7ln7rmnKzlgKQocDrniannkIbjgIFtOumtlOazlSnjgILjg5Ljg7zjg63jg7zjg6zjg5njg6vjgoTjgrnjg4bjg7zjgr/jgrnjgqLjg4Pjg5fjgafliqDnrpcgXHJcbiAgICAgICAgYXRrOiAwLCAgLy8g5pS75pKD5YCkXHJcbiAgICAgICAgZGVmOiAwLCAgLy8g6Ziy5b6h5YCkXHJcbiAgICAgICAgcXVjOiAwLCAgLy8g556s55m65YqbXHJcbiAgICAgICAgY25jOiAwLCAgLy8g5qmf6YGL5YCkKOODgeODo+ODs+OCuSlcclxuICAgIFxyXG4gICAgICAgIC8vIOS7peS4i+OAgeOBhOOCj+OChuOCi+OCueODhuODvOOCv+OCueOAguS4iuiomOOBruioiOeul+OBq+W9semfv+OAguODkuODvOODreODvOODrOODmeODq+OChOOCueODhuODvOOCv+OCueOCouODg+ODl+OBp+WKoOeul1xyXG4gICAgICAgIHN0cjogMCwgIC8vIOagueaAp+OAguaUu+aSgy/pmLLlvqHlipvjgavjgoLlvbHpn7/jgIJIUC9NUOWbnuW+qeOChOOCouOCpOODhuODoOOBruacgOWkp+aJgOaMgemHjemHj+OBq+ODnOODvOODiuOCuVxyXG4gICAgICAgIHB3cjogMCwgIC8vIOWfuuacrOeahOW8t+OBleOAguaUu+aSg+WKm+OBq+W9semfv1xyXG4gICAgICAgIHZpdDogMCwgIC8vIOiAkOS5heWKm+OAgkhQL01Q44Gu5pyA5aSn5YCk44KE6Ziy5b6h5Yqb44Gr5b2x6Z+/44KS5LiO44GI44KLXHJcbiAgICAgICAgZGV4OiAwLCAgLy8g5Zmo55So44GV44CC5ZG95Lit546H44Gr5b2x6Z+/44KS5LiO44GI44KL44CC6aOb44Gz6YGT5YW344KE6ZW36Led6Zui6a2U5rOV44Gn44Gv54m544Gr5b2x6Z+/44CC572g6Kej6Zmk44Gr44KC5b2x6Z+/XHJcbiAgICAgICAgYWdpOiAwLCAgLy8g57Sg5pep44GV44CC6KGM5YuV6YCf5bqm44KE5Zue6YG/546H44Gr5b2x6Z+/44KS5LiO44GI44KL44CC5ZG95Lit546H44Gr44KC5b2x6Z+/XHJcbiAgICAgICAgdGVjOiAwLCAgLy8g5oqA6KGT5Yqb44CC57WM6aiT44Gn5ZCR5LiK44GX44Gm6IO95Yqb5YCkKHF1Yy9jbmMp44Gr44Oc44O844OK44K544KS5LiO44GI44KLXHJcbiAgICAgICAgbHVrOiAwLCAgLy8g5bm46YGL5YCk44CCY25j44Gr5aSn44GN44GP5b2x6Z+/44GZ44KLXHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihhPzogSlNPTl9IZXJvX0FiaWxpdHkpIHtcclxuICAgICAgICBmb3IgKGxldCBpZHggaW4gdGhpcy52KSB7dGhpcy52W2lkeF0gPSAwO31cclxuICAgICAgICBpZiAoYSAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShhKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcHJwKGE6IEpTT05fSGVyb19BYmlsaXR5KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kZWNvZGUoYSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAoIShrZXkgaW4gdGhpcy52KSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gdGhpcy52W2tleV07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCBzOiBKU09OX0hlcm9fQWJpbGl0eSk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKCEoa2V5IGluIHRoaXMudikpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy52W2tleV0gPSBzW2tleV07XHJcbiAgICAgICAgcmV0dXJuIHNba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgeHBfdHRsYWRkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIF9yb3VuZChNYXRoLmZsb29yKHRoaXMudi5zdHIgKyB0aGlzLnYudml0ICogMTAuMCksIDApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGF0a190dGxhZGQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gX3JvdW5kKE1hdGguZmxvb3IodGhpcy52LnN0ciArIHRoaXMudi5wd3IgKyB0aGlzLnYudGVjKSAvIDEwLjAsIDApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlZl90dGxhZGQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gX3JvdW5kKE1hdGguZmxvb3IodGhpcy52LnN0ciArIHRoaXMudi52aXQgKyB0aGlzLnYudGVjKSAvIDEwLjAsIDApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHF1Y190dGxhZGQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gX3JvdW5kKE1hdGguZmxvb3IodGhpcy52LmFnaSArIHRoaXMudi5sdWsgKyB0aGlzLnYudGVjKSAvIDEwLjAsIDApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNuY190dGxhZGQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gX3JvdW5kKE1hdGguZmxvb3IoMi4wICogdGhpcy52Lmx1ayArIHRoaXMudi50ZWMpIC8gMTAuMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJvbnVzKGtleSA6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKCEoa2V5IGluIHRoaXMudikpIHJldHVybiAwO1xyXG4gICAgICAgIGlmIChrZXkgPT09ICd4cCcpIHJldHVybiBfcm91bmQoTWF0aC5mbG9vcih0aGlzLnYueHAgLyAxMDApLCAwKTtcclxuICAgICAgICByZXR1cm4gX3JvdW5kKE1hdGguZmxvb3IodGhpcy52W2tleV0gLyAxMC4wKSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZChhOiBKU09OX0hlcm9fQWJpbGl0eSk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhKSB7XHJcbiAgICAgICAgICAgIHRoaXMudltrZXldICs9IGFba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG5cclxuICAgIHB1YmxpYyBhZGRfeHBfYm9udXMoYm9udXM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudi54cCAgKz0gIGJvbnVzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFkZF9lbF9ib251cyhib251czogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52LmF0ayArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LmRlZiArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LnF1YyArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LmNuYyArPSAgYm9udXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRkX3ByX2JvbnVzKGJvbnVzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnYuc3RyICs9ICBib251cztcclxuICAgICAgICB0aGlzLnYucHdyICs9ICBib251cztcclxuICAgICAgICB0aGlzLnYudml0ICs9ICBib251cztcclxuICAgICAgICB0aGlzLnYuZGV4ICs9ICBib251cztcclxuICAgICAgICB0aGlzLnYuYWdpICs9ICBib251cztcclxuICAgICAgICB0aGlzLnYudGVjICs9ICBib251cztcclxuICAgICAgICB0aGlzLnYubHVrICs9ICBib251cztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmFuZG9tX21ha2UoKTogQ19IZXJvQWJpbGl0eSB7XHJcbiAgICAgICAgdGhpcy52LnhwICA9ICBfaW5yYW5kKDAsIDEwMDAsIDMuMCk7XHJcblxyXG4gICAgICAgIHRoaXMudi5hdGsgPSAgX2lucmFuZCgwLCAgMTAwLCAyLjUpO1xyXG4gICAgICAgIHRoaXMudi5kZWYgPSAgX2lucmFuZCgwLCAgMTAwLCAyLjUpO1xyXG4gICAgICAgIHRoaXMudi5xdWMgPSAgX2lucmFuZCgwLCAgMTAwLCAyLjUpO1xyXG4gICAgICAgIHRoaXMudi5jbmMgPSAgX2lucmFuZCgwLCAgMTAwLCAyLjUpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy52LnN0ciA9ICBfaW5yYW5kKDAsICAgMjAsIDIuMCk7XHJcbiAgICAgICAgdGhpcy52LnB3ciA9ICBfaW5yYW5kKDAsICAgMjAsIDIuMCk7XHJcbiAgICAgICAgdGhpcy52LnZpdCA9ICBfaW5yYW5kKDAsICAgMjAsIDIuMCk7XHJcbiAgICAgICAgdGhpcy52LmRleCA9ICBfaW5yYW5kKDAsICAgMjAsIDIuMCk7XHJcbiAgICAgICAgdGhpcy52LmFnaSA9ICBfaW5yYW5kKDAsICAgMjAsIDIuMCk7XHJcbiAgICAgICAgdGhpcy52LnRlYyA9ICBfaW5yYW5kKDAsICAgMjAsIDIuMCk7XHJcbiAgICAgICAgdGhpcy52Lmx1ayA9ICBfaW5yYW5kKDAsICAgMjAsIDIuMCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9IZXJvX0FiaWxpdHkge1xyXG4gICAgICAgIGNvbnN0IGE6IEpTT05fSGVyb19BYmlsaXR5ID0ge307XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMudikgYVtrZXldID0gdGhpcy52W2tleV07XHJcbiAgICAgICAgcmV0dXJuIGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IEpTT05fSGVyb19BYmlsaXR5KTogQ19IZXJvQWJpbGl0eSB7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGEpIHtcclxuICAgICAgICAgICAgaWYgKGtleSBpbiB0aGlzLnYgJiYgYVtrZXldICE9PSB1bmRlZmluZWQpIHRoaXMudltrZXldID0gYVtrZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNsb25lKHM6IENfSGVyb0FiaWxpdHkpOiBDX0hlcm9BYmlsaXR5IHtcclxuICAgICAgICByZXR1cm4gbmV3IENfSGVyb0FiaWxpdHkocy5lbmNvZGUoKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfUG9pbnQgfSAgICAgICAgICAgICAgICAgICBmcm9tICcuL0NfUG9pbnQnO1xyXG5pbXBvcnQgeyBDX1BvaW50RGlyLCBKU09OX1BvaW50RGlyIH0gZnJvbSAnLi9DX1BvaW50RGlyJztcclxuaW1wb3J0IHsgVF9EaXJlY3Rpb24gfSAgICAgICAgICAgICAgIGZyb20gJy4vQ19Qb2ludERpcic7XHJcbmltcG9ydCB7IElfSlNPTiwgSlNPTl9BbnkgfSAgICAgICAgICBmcm9tICcuL0NfU2F2ZUluZm8nO1xyXG5pbXBvcnQgeyBUX01ha2VFbnVtVHlwZSB9ICAgICAgICAgICAgZnJvbSBcIi4uL2RfdXRsL1RfTWFrZUVudW1UeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVF9MY2tkOntbbGNrZDogc3RyaW5nXTogbnVtYmVyfSAgPSB7XHJcbiAgICBVbmtuOiAwLFxyXG4gICAgTWF6ZTogMSxcclxuICAgIEd1bGQ6IDIsXHJcbn0gYXMgY29uc3Q7XHJcbmV4cG9ydCB0eXBlIFRfTGNrZCAgID0gVF9NYWtlRW51bVR5cGU8dHlwZW9mIFRfTGNrZD47XHJcblxyXG5mdW5jdGlvbiBfbGNrZF9rZXkobGNrZDogVF9MY2tkKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhUX0xja2QpLmZpbmQoa2V5ID0+IFRfTGNrZFtrZXldID09PSBsY2tkKSA/PyBcIj8/Pz9cIjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX0xvY2F0aW9uIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAga2luZD86ICAgIHN0cmluZyxcclxuICAgIG5hbWU/OiAgICBzdHJpbmcsXHJcbiAgICBsb2NfdWlkPzogc3RyaW5nLFxyXG4gICAgbG9jX3Bvcz86IEpTT05fUG9pbnREaXIsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSV9Mb2NhdGUge1xyXG4gICAgdWlkOiAgICAgICgpPT5zdHJpbmc7XHJcbiAgICBnZXRfbGNrZDogKCk9PlRfTGNrZDtcclxuICAgIGdldF9uYW1lOiAoKT0+c3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19Mb2NhdGlvbiBpbXBsZW1lbnRzIElfSlNPTiB7XHJcbiAgICBwcm90ZWN0ZWQgbG9jX2tpbmQ6IFRfTGNrZCA9IFRfTGNrZC5VbmtuO1xyXG4gICAgcHJvdGVjdGVkIGxvY19uYW1lOiBzdHJpbmcgPSAnJztcclxuICAgIHByb3RlY3RlZCBsb2NfdWlkOiAgc3RyaW5nID0gJyc7XHJcbiAgICBwcm90ZWN0ZWQgbG9jX3BvczogIENfUG9pbnREaXIgPSBuZXcgQ19Qb2ludERpcigpO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihqc29uPzogSlNPTl9Mb2NhdGlvbikge1xyXG4gICAgICAgIGlmIChqc29uICE9PSB1bmRlZmluZWQpIHRoaXMuZGVjb2RlKGpzb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRfbGNrZF9zdHIoKTogc3RyaW5nICB7cmV0dXJuIF9sY2tkX2tleSh0aGlzLmxvY19raW5kKTt9XHJcbiAgICBwdWJsaWMgZ2V0X2xja2QoKTogVF9MY2tkICAgICAge3JldHVybiB0aGlzLmxvY19raW5kO31cclxuICAgIHB1YmxpYyBnZXRfbmFtZSgpOiBzdHJpbmcgICAgICB7cmV0dXJuIHRoaXMubG9jX25hbWU7fVxyXG4gICAgcHVibGljIGdldF91aWQoKTogIHN0cmluZyAgICAgIHtyZXR1cm4gdGhpcy5sb2NfdWlkO31cclxuXHJcbiAgICBwdWJsaWMgc2V0X2xja2QobGNrZDogVF9MY2tkKTogQ19Mb2NhdGlvbnx1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICghKF9sY2tkX2tleShsY2tkKSBpbiBUX0xja2QpKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMubG9jX2tpbmQgPSBsY2tkO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9uYW1lKG5hbWU6IHN0cmluZyk6ICAgdm9pZCB7dGhpcy5sb2NfbmFtZSA9IG5hbWU7fVxyXG4gICAgcHVibGljIHNldF91aWQgKHVpZDogc3RyaW5nKTogICAgdm9pZCB7dGhpcy5sb2NfdWlkICA9IHVpZDt9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzZXRfbGNrZF9zdHIobGNrZDogc3RyaW5nKTogQ19Mb2NhdGlvbnx1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICghKGxja2QgaW4gVF9MY2tkKSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmxvY19raW5kID0gVF9MY2tkW2xja2RdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0X3AoKTogQ19Qb2ludCAgICAge1xyXG4vLyAgICAgICAgaWYgKHRoaXMubG9jX2tpbmQgIT0gVF9MY2tkLk1hemUpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jX3Bvcy5nZXRfcCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9kKCk6IFRfRGlyZWN0aW9uIHtcclxuLy8gICAgICAgIGlmICh0aGlzLmxvY19raW5kICE9IFRfTGNrZC5NYXplKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY19wb3MuZ2V0X2QoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfcGQoKTogQ19Qb2ludERpciB7XHJcbi8vICAgICAgICBpZiAodGhpcy5sb2Nfa2luZCAhPSBUX0xja2QuTWF6ZSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NfcG9zLmdldF9wZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRfcCAgIChwOiBDX1BvaW50RGlyKTogQ19Qb2ludERpcnx1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY19raW5kICE9PSBUX0xja2QuTWF6ZSkgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICh0aGlzLmxvY19wb3Muc2V0X3AocCkgPT09IHVuZGVmaW5lZCkgIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY19wb3M7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X2QgICAoZDogVF9EaXJlY3Rpb24pOiBUX0RpcmVjdGlvbnx1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY19raW5kICE9PSBUX0xja2QuTWF6ZSkgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICh0aGlzLmxvY19wb3Muc2V0X2QoZCkgPT09IHVuZGVmaW5lZCkgIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY19wb3MuZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcGQgIChwZDogQ19Qb2ludERpcik6IENfUG9pbnREaXJ8dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAodGhpcy5sb2Nfa2luZCAhPT0gVF9MY2tkLk1hemUpICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jX3Bvcy5zZXRfcGQocGQpID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY19wb3M7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9Mb2NhdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAga2luZDogICAgIF9sY2tkX2tleSh0aGlzLmxvY19raW5kKSxcclxuICAgICAgICAgICAgbmFtZTogICAgIHRoaXMubG9jX25hbWUsXHJcbiAgICAgICAgICAgIGxvY191aWQ6ICB0aGlzLmxvY191aWQsXHJcbiAgICAgICAgICAgIGxvY19wb3M6ICB0aGlzLmxvY19wb3MuZW5jb2RlKCksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoaj86IEpTT05fTG9jYXRpb24pOiBDX0xvY2F0aW9uIHtcclxuICAgICAgICBpZiAoaiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAoai5raW5kID09PSB1bmRlZmluZWQgfHwgIShqLmtpbmQgaW4gVF9MY2tkKSkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChqLmtpbmQgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5sb2Nfa2luZCA9IFRfTGNrZFtqLmtpbmRdO1xyXG4gICAgICAgIGlmIChqLm5hbWUgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5sb2NfbmFtZSA9IGoubmFtZTtcclxuICAgICAgICBpZiAoai5sb2NfdWlkICE9PSB1bmRlZmluZWQpIHRoaXMubG9jX3VpZCAgPSBqLmxvY191aWQ7XHJcbiAgICAgICAgaWYgKGoubG9jX3BvcyAhPT0gdW5kZWZpbmVkKSB0aGlzLmxvY19wb3MuZGVjb2RlKGoubG9jX3Bvcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgVF9NektpbmQgfSAgICAgICAgICAgICAgZnJvbSBcIi4vVF9NektpbmRcIjtcclxuaW1wb3J0IHsgQ19NYXplQ2VsbCB9ICAgICAgICAgICAgZnJvbSBcIi4vQ19NYXplQ2VsbFwiO1xyXG5pbXBvcnQgeyBDX01hemVPYmosIElfTWF6ZU9iaiwgSlNPTl9NYXplT2JqIH0gZnJvbSBcIi4vQ19NYXplT2JqXCI7XHJcbmltcG9ydCB7IENfUG9pbnQgfSAgICAgICAgICAgICAgIGZyb20gXCIuL0NfUG9pbnRcIjtcclxuaW1wb3J0IHsgSV9Mb2NhdGUsIFRfTGNrZCB9ICAgICAgZnJvbSBcIi4vQ19Mb2NhdGlvblwiO1xyXG5pbXBvcnQgeyBDX1JhbmdlIH0gICAgICAgICAgICAgICBmcm9tIFwiLi9DX1JhbmdlXCI7XHJcbmltcG9ydCB7IENfVGVhbSwgSlNPTl9UZWFtIH0gICAgIGZyb20gXCIuL0NfVGVhbVwiO1xyXG5pbXBvcnQgeyBJX0pTT05fVW5pcSwgSlNPTl9BbnkgfSBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcbmltcG9ydCB7IF9nZXRfdXVpZCwgX2lncmFuZCwgX2lyYW5kIH0gICAgICAgICAgICAgZnJvbSBcIi4uL2RfdXRsL0ZfUmFuZFwiO1xyXG5pbXBvcnQgeyBfbWluIH0gZnJvbSBcIi4uL2RfdXRsL0ZfTWF0aFwiO1xyXG5pbXBvcnQgeyBDX1BvaW50RGlyIH0gZnJvbSBcIi4vQ19Qb2ludERpclwiO1xyXG5pbXBvcnQgeyBUX0RpcmVjdGlvbiB9IGZyb20gXCIuL1RfRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IENfUG9pbnRMaW5rMkQsIENfUG9pbnRTZXQyRCB9IGZyb20gXCIuL0NfUG9pbnRTZXQyRFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX01hemUgZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBpZD86ICAgICAgbnVtYmVyLFxyXG4gICAgdW5pcV9pZD86IHN0cmluZyxcclxuICAgIHNhdmVfaWQ/OiBudW1iZXIsXHJcbiAgICBmbG9vcj86ICAgbnVtYmVyLFxyXG4gICAgbmFtZT86ICAgIHN0cmluZyxcclxuICAgIHNpemVfeD86ICBudW1iZXIsXHJcbiAgICBzaXplX3k/OiAgbnVtYmVyLFxyXG4gICAgc2l6ZV96PzogIG51bWJlcixcclxuICAgIG1hemU/OiAgICBzdHJpbmcsIFxyXG4gICAgbWFzaz86ICAgIHN0cmluZywgXHJcbiAgICBteXRlYW0/OiAgSlNPTl9UZWFtLCBcclxuICAgIG9ianM/OiAgICBKU09OX01hemVPYmpbXSxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9tYXplX2luZm8oYTogSlNPTl9NYXplfHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgIGFsZXJ0KFwiTWF6ZSBJbmZvOlwiXHJcbiAgICAgICAgKyBcIlxcbm1hemUgaWQgOlwiICsgKGEuaWQgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmZsb29yOiBcIiAgICsgKGEuZmxvb3IgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnVuaXEgaWQgOlwiICsgKGEudW5pcV9pZCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNhdmUgaWQgOlwiICsgKGEuc2F2ZV9pZCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbm5hbWU6ICAgXCIgICsgKGEubmFtZSAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNpemVfeDogXCIgICsgKGEuc2l6ZV94ICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNpemVfeTogXCIgICsgKGEuc2l6ZV95ICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNpemVfejogXCIgICsgKGEuc2l6ZV96ICA/PyAnPycpXHJcbiAgICAgICAgKyBcIm1hemU6XFxuXCIgICAgICsgKGEubWF6ZSAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIm1hc2s6XFxuXCIgICAgICsgKGEubWFzayAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG59XHJcblxyXG5cclxudHlwZSBfaW5pdF9hcmcgPSB7XHJcbiAgICBtYXplX2lkPzogbnVtYmVyLFxyXG4gICAgc2F2ZV9pZD86IG51bWJlcixcclxuICAgIGZsb29yPzogICBudW1iZXIsXHJcbiAgICBuYW1lPzogICAgc3RyaW5nLFxyXG4gICAgc2l6ZV94PzogIG51bWJlcixcclxuICAgIHNpemVfeT86ICBudW1iZXIsXHJcbiAgICBzaXplX3o/OiAgbnVtYmVyLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19NYXplIGltcGxlbWVudHMgSV9Mb2NhdGUsIElfSlNPTl9VbmlxIHtcclxuICAgIHByb3RlY3RlZCBtYXplX2lkOiAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIHVuaXFfaWQ6ICBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgc2F2ZV9pZDogIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBmbG9vcjogICAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIG5hbWU6ICAgICBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgbXlfbGF5ZXI6IG51bWJlciA9IDA7XHJcbiAgICBwcm90ZWN0ZWQgc2l6ZTogICAgIENfUmFuZ2U7XHJcbiAgICBwcm90ZWN0ZWQgY2VsbHM6ICAgIENfTWF6ZUNlbGxbXVtdW107XHJcbiAgICBwcm90ZWN0ZWQgbWFza3M6ICAgIGJvb2xlYW5bXVtdW107XHJcbiAgICBwcm90ZWN0ZWQgdW5jbGVhcjogIG51bWJlcltdO1xyXG4gICAgcHJvdGVjdGVkIG9ianM6ICAgICB7W3VpZDogc3RyaW5nXTogSV9NYXplT2JqfTtcclxuICAgIHByb3RlY3RlZCBudW1fb2Zfcm9vbTogICAgICBudW1iZXIgPSA1OyAvKiDjg6njg7Pjg4Djg6DnlJ/miJDjga7pmpvjga7pg6jlsYvjga7mlbDjga7mnIDlpKfmlbAgKi9cclxuICAgIHByb3RlY3RlZCBtYXhfc2l6ZV9vZl9yb29tOiBudW1iZXIgPSAzOyAvKiDjg6njg7Pjg4Djg6DnlJ/miJDjga7pmpvjga7pg6jlsYvjga7lpKfjgY3jgZUgKi9cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYT86IF9pbml0X2FyZykge1xyXG4gICAgICAgIHRoaXMubWF6ZV9pZCA9IC0xO1xyXG4gICAgICAgIHRoaXMuc2F2ZV9pZCA9IC0xO1xyXG4gICAgICAgIHRoaXMudW5pcV9pZCA9ICdtYWlfbWF6ZSMnICsgX2dldF91dWlkKCk7XHJcbiAgICAgICAgdGhpcy5mbG9vciAgID0gMDtcclxuICAgICAgICB0aGlzLm5hbWUgICAgPSAnJztcclxuICAgICAgICB0aGlzLnNpemUgICAgPSBuZXcgQ19SYW5nZShcclxuICAgICAgICAgICAgbmV3IENfUG9pbnQoMCwgMCwgMCksIFxyXG4gICAgICAgICAgICBuZXcgQ19Qb2ludCgyLCAyLCAyKSk7XHJcbiAgICAgICAgdGhpcy5jZWxscyAgID0gdGhpcy5fX2luaXRfbWF6ZShUX016S2luZC5TdG9uZSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFza3MgICA9IHRoaXMuX19pbml0X21hc2sodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy51bmNsZWFyID0gW107XHJcbiAgICAgICAgdGhpcy5fX2luaXRfdW5jbGVhcigpO1xyXG5cclxuICAgICAgICB0aGlzLm9ianMgICAgPSB7fTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoYSAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX19pbml0X21hemUoa2luZDogVF9NektpbmQgPSBUX016S2luZC5TdG9uZSk6IENfTWF6ZUNlbGxbXVtdW10ge1xyXG4gICAgICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgICAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV96ID0gdGhpcy5zaXplLnNpemVfeigpO1xyXG5cclxuICAgICAgICBjb25zdCBjZWxsczogQ19NYXplQ2VsbFtdW11bXSA9IEFycmF5KHNpemVfeikgYXMgQ19NYXplQ2VsbFtdW11bXTtcclxuICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHNpemVfejsgeisrKSB7XHJcbiAgICAgICAgICAgIGNlbGxzW3pdID0gQXJyYXkoc2l6ZV95KSBhcyBDX01hemVDZWxsW11bXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBzaXplX3k7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgY2VsbHNbel1beV0gID0gQXJyYXkoc2l6ZV94KSBhcyBDX01hemVDZWxsW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbHNbel1beV1beF0gPSBDX01hemVDZWxsLm5ld09iaih7a2luZDpraW5kLCBwb3M6IHt4OngsIHk6eSwgejp6fX0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjZWxscztcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2luaXRfbWFzayhZTjogYm9vbGVhbik6IGJvb2xlYW5bXVtdW10ge1xyXG4gICAgICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgICAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV96ID0gdGhpcy5zaXplLnNpemVfeigpO1xyXG5cclxuICAgICAgICB0aGlzLm1hc2tzICAgPSBBcnJheShzaXplX3opIGFzIGJvb2xlYW5bXVtdW107XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBzaXplX3o7IHorKykge1xyXG4gICAgICAgICAgICB0aGlzLm1hc2tzW3pdID0gQXJyYXkoc2l6ZV95KSBhcyBib29sZWFuW11bXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBzaXplX3k7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXNrc1t6XVt5XSAgPSBBcnJheShzaXplX3gpIGFzIGJvb2xlYW5bXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc2tzW3pdW3ldW3hdID0gWU47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFza3M7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX19pbml0X3VuY2xlYXIoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKTtcclxuICAgICAgICBjb25zdCBzaXplX3ogPSB0aGlzLnNpemUuc2l6ZV96KCk7XHJcblxyXG4gICAgICAgIHRoaXMudW5jbGVhciA9IEFycmF5KHNpemVfeik7XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBzaXplX3o7IHorKykge1xyXG4gICAgICAgICAgICB0aGlzLnVuY2xlYXJbel09MDtcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBzaXplX3k7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hc2tzW3pdW3ldW3hdKSB0aGlzLnVuY2xlYXJbel0rKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdWlkKCk6IHN0cmluZyAgICAgIHtyZXR1cm4gdGhpcy51bmlxX2lkfVxyXG4gICAgcHVibGljIGdldF9sY2tkKCk6IFRfTGNrZCB7cmV0dXJuIFRfTGNrZC5NYXplfVxyXG4gICAgcHVibGljIGdldF9uYW1lKCk6IHN0cmluZyB7cmV0dXJuIHRoaXMubmFtZX1cclxuXHJcbiAgICBwdWJsaWMgd2l0aGluKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaXplLndpdGhpbihwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8g44Oh44Kk44K65YaF44Gu44Kq44OW44K444Kn44Kv44OI44KE44Oi44Oz44K544K/44O8562J44Gu6YWN572uXHJcbiAgICBwdWJsaWMgYWRkX29iaihvYmo6IElfTWF6ZU9iaik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub2Jqc1tvYmoudWlkKCldID0gb2JqO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJtdl9vYmoob2JqOiBJX01hemVPYmopOiB2b2lkIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5vYmpzW29iai51aWQoKV07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X29ial94eXooeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcik6IElfTWF6ZU9ianxudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRfb2JqKG5ldyBDX1BvaW50KHgsIHksIHopKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfb2JqKHA6IENfUG9pbnQpOiBJX01hemVPYmp8bnVsbCB7XHJcbiAgICAgICAgdmFyIGxheWVyID0gLTE7XHJcbiAgICAgICAgdmFyIG9iajogSV9NYXplT2JqfG51bGwgICA9IG51bGw7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgaWQgaW4gdGhpcy5vYmpzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0ID0gdGhpcy5vYmpzW2lkXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChleGlzdC52aWV3KCkgPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChleGlzdC53aXRoaW4ocCkgJiYgZXhpc3QudmlldygpPy5sZXR0ZXIoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0LnZpZXcoKT8ubGF5ZXIoKT8/LTk5ID4gbGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXllciA9IGV4aXN0LnZpZXcoKT8ubGF5ZXIoKT8/LTk5O1xyXG4gICAgICAgICAgICAgICAgICAgIG9iaiAgID0gZXhpc3Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZXhpc3Rfb2JqKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGlkIGluIHRoaXMub2Jqcykge1xyXG4gICAgICAgICAgICBjb25zdCBleGlzdCA9IHRoaXMub2Jqc1tpZF07XHJcbiAgICAgICAgICAgIGlmIChleGlzdC53aXRoaW4ocCkgJiYgZXhpc3QudmlldygpPy5sZXR0ZXIoKSAhPT0gbnVsbCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUZWFt44GM5p2l44Gf44Od44Kk44Oz44OI44GM5pyq6LiP5Zyw44Gg44Gj44Gf44KJ44Gf44Gg44Gu5bqK44Gr5aSJ44GI44KLXHJcbiAgICBwdWJsaWMgY2hhbmdlX3VuZXhwX3RvX2Zsb29yKHA6IENfUG9pbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRfa2luZChwKSA9PSBUX016S2luZC5VbmV4cCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldF9jZWxsKHAsIFRfTXpLaW5kLkZsb29yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMkTjg57jg4Pjg5fjga7jg57jgrnjgq/lpJbjgZfplqLpgKNcclxuICAgIHB1YmxpYyBjbGVhcl9tYXNrX2Fyb3VuZF90aGVfdGVhbSh0ZWFtOiBDX1RlYW0pOiB2b2lkIHtcclxuICAgICAgICAvLyDnj77lnKjlnLDjgajnnJ/mqKrjga/oh6rli5XnmoTjgavopovjgYjjgotcclxuICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayh0ZWFtLndhbGsoKS5nZXRfYXJvdW5kKDAsIC0xKSk7XHJcbiAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZCgwLCAgMCkpO1xyXG4gICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoMCwgIDEpKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVwdGggICA9ICA1OyAvLyAyROODnuODg+ODl+eUqOOBruWlpeihjOOBjemZkOeVjFxyXG5cclxuICAgICAgICAvLyDliY3mlrnjga7opovpgJrjgZfjgpLjg4Hjgqfjg4Pjgq/jgZfjgarjgYzjgonopovjgYjjgovjgajjgZPjgo3jga/op6PmlL7jgZnjgotcclxuICAgICAgICBmb3IgKHZhciBkID0gMTsgZCA8IGRlcHRoOyBkKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZnJvbnRfcG9zID0gdGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAwKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc19tb3ZhYmxlKGZyb250X3BvcykpIHtcclxuICAgICAgICAgICAgICAgIC8vIOato+mdouOBq+manOWus+eJqeOBjOeEoeOBkeOCjOOBsOOAgeOBneOBruS4oeWBtOOCguimi+OBiOOCi1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAtMSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAgMCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAgMSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8g5q2j6Z2i44GM6Zqc5a6z54mp44Gn44KC44Gd44Gu5omL5YmN44G+44Gn6KaL44GI44Gm44Gf44Gq44KJ44CB44Gd44Gu5aOB44Go5Lih5YG044Gv6KaL44GI44KLXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayh0ZWFtLndhbGsoKS5nZXRfYXJvdW5kKGQsIC0xKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayh0ZWFtLndhbGsoKS5nZXRfYXJvdW5kKGQsICAwKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayh0ZWFtLndhbGsoKS5nZXRfYXJvdW5kKGQsICAxKSk7XHJcbiAgICAgICAgICAgICAgICAvLyDmraPpnaLjgavpmpzlrrPnianjgYzmnInjgaPjgZ/jgonjgZ3jga7lpaXjga/opovjgYjjgarjgYTjga7jgafmjqLntKLntYLkuoZcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9fY2xlYXJfbWFzayhjbHJfcG9zOiBDX1BvaW50KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNpemUud2l0aGluKGNscl9wb3MpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1hc2tzW2Nscl9wb3Muel1bY2xyX3Bvcy55XVtjbHJfcG9zLnhdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFza3NbY2xyX3Bvcy56XVtjbHJfcG9zLnldW2Nscl9wb3MueF0gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy51bmNsZWFyW2Nscl9wb3Muel0tLTsgICAgICAgIH0gICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzX2NsZWFyZWQoY2xyX3BvczogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVuY2xlYXJbY2xyX3Bvcy56XSA8IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzX21hc2tlZChwOiBDX1BvaW50KTogYm9vbGVhbiB7cmV0dXJuIHRoaXMuaXNfbWFza2VkX3h5eihwLngsIHAueSwgcC56KX1cclxuICAgIHB1YmxpYyBpc19tYXNrZWRfeHl6KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXNrc1t6XVt5XVt4XTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNfbW92YWJsZShwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNpemUud2l0aGluKHApKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmdldF9raW5kKHApKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuRmxvb3I6XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuVW5leHA6XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyVXA6XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyRG46XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyVUQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICBwdWJsaWMgZ2V0X3hfbWF4KCk6IG51bWJlciB7cmV0dXJuIHRoaXMuc2l6ZS5zaXplX3goKTt9XHJcbiAgICBwdWJsaWMgZ2V0X3lfbWF4KCk6IG51bWJlciB7cmV0dXJuIHRoaXMuc2l6ZS5zaXplX3koKTt9XHJcbiAgICBwdWJsaWMgZ2V0X3pfbWF4KCk6IG51bWJlciB7cmV0dXJuIHRoaXMuc2l6ZS5zaXplX3ooKTt9XHJcbiAgICBwdWJsaWMgZ2V0X2tpbmQgKHA6IENfUG9pbnQpOiBUX016S2luZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2l6ZS53aXRoaW4ocCkpIHJldHVybiB0aGlzLmNlbGxzW3Auel1bcC55XVtwLnhdLmdldEtpbmQoKTtcclxuICAgICAgICByZXR1cm4gVF9NektpbmQuTm9EZWY7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X2tpbmRfeHl6ICh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKTogVF9NektpbmQge1xyXG4gICAgICAgIGlmICh0aGlzLnNpemUud2l0aGluKHgsIHksIHopKSByZXR1cm4gdGhpcy5jZWxsc1t6XVt5XVt4XS5nZXRLaW5kKCk7XHJcbiAgICAgICAgcmV0dXJuIFRfTXpLaW5kLk5vRGVmO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRfY2VsbF94eXogKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpOiBDX01hemVDZWxsfHVuZGVmaW5lZCB7IFxyXG4gICAgICAgIGlmICh0aGlzLnNpemUud2l0aGluKHgsIHksIHopKSByZXR1cm4gdGhpcy5jZWxsc1t6XVt5XVt4XTtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9jZWxsIChwOiBDX1BvaW50KTogQ19NYXplQ2VsbHx1bmRlZmluZWQgeyBcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbihwKSkgcmV0dXJuIHRoaXMuY2VsbHNbcC56XVtwLnldW3AueF07XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfY2VsbChwOiBDX1BvaW50LCBrOiBUX016S2luZCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNpemUud2l0aGluKHApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2VsbHNbcC56XVtwLnldW3AueF0gPSBDX01hemVDZWxsLm5ld09iaih7a2luZDogaywgcG9zOiBwfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9jZWxsX3h5eih4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyLCBrOiBUX016S2luZCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNpemUud2l0aGluKHgsIHksIHopKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2VsbHNbel1beV1beF0gPSBDX01hemVDZWxsLm5ld09iaih7a2luZDogaywgcG9zOiB7eDp4LCB5OnksIHo6en19KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2FuX21vdmUocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemUud2l0aGluKHApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNhbl9VRChwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNfbW92YWJsZShwKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxucHVibGljIGZpbGxfY2VsbChraW5kOiBUX016S2luZCwgZmxvb3I6bnVtYmVyKTogdm9pZCB7XHJcbiAgICBmb3IgKGxldCBoID0gMDsgaCA8IHRoaXMuc2l6ZS5zaXplX3koKTsgaCsrKVxyXG4gICAgZm9yIChsZXQgdyA9IDA7IHcgPCB0aGlzLnNpemUuc2l6ZV94KCk7IHcrKylcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eih3LCBoLCBmbG9vciwga2luZCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuXHJcbnB1YmxpYyBzZXRfYm94KGtpbmQ6IFRfTXpLaW5kLCB0b3BfeDpudW1iZXIsIHRvcF95OiBudW1iZXIsIHNpemVfeDogbnVtYmVyLCBzaXplX3k6IG51bWJlciwgZmxvb3I6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKHRvcF94ICsgc2l6ZV94ID4gdGhpcy5zaXplLnNpemVfeCgpKSBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCkgLSB0b3BfeCArIDE7IFxyXG4gICAgaWYgKHRvcF95ICsgc2l6ZV95ID4gdGhpcy5zaXplLnNpemVfeSgpKSBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCkgLSB0b3BfeSArIDE7XHJcbiAgICBcclxuICAgIGNvbnN0IHRvcCA9IHRvcF95O1xyXG4gICAgY29uc3QgYnRtID0gdG9wICAgICsgc2l6ZV95IC0gMTtcclxuICAgIGNvbnN0IGxmdCA9IHRvcF94O1xyXG4gICAgY29uc3Qgcmd0ID0gbGZ0ICAgICsgc2l6ZV94IC0gMTtcclxuICAgIFxyXG4gICAgLy8g5YyX5YG0KOS4iinjgajljZflgbQo5LiLKeOCkuefs+WjgeOBq1xyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgIHRoaXMuc2V0X2NlbGxfeHl6KHgsIHRvcCwgZmxvb3IsIGtpbmQpO1xyXG4gICAgICAgIHRoaXMuc2V0X2NlbGxfeHl6KHgsIGJ0bSwgZmxvb3IsIGtpbmQpO1xyXG4gICAgfVxyXG4gICAgLy8g5p2x5YG0KOWPsynjgajopb/lgbQo5bemKeOCkuefs+WjgeOBq1xyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzaXplX3k7IHkrKykge1xyXG4gICAgICAgIHRoaXMuc2V0X2NlbGxfeHl6KGxmdCwgeSwgZmxvb3IsIGtpbmQpO1xyXG4gICAgICAgIHRoaXMuc2V0X2NlbGxfeHl6KHJndCwgeSwgZmxvb3IsIGtpbmQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG59XHJcblxyXG4vLyDpmo7kuIrjgajpmo7kuIvjgavpmo7mrrXjgpLoqK3nva7jgZnjgotcclxucHVibGljIGNyZWF0ZV9zdGFpcihmbG9vcjpudW1iZXIpOiBDX1BvaW50RGlyIHtcclxuICAgIGNvbnN0IEhfc2l6ZV94ID0gKHRoaXMuc2l6ZS5zaXplX3goKSAtIDEpIC8gMjtcclxuICAgIGNvbnN0IEhfc2l6ZV95ID0gKHRoaXMuc2l6ZS5zaXplX3koKSAtIDEpIC8gMjtcclxuICAgIGNvbnN0IHBvc194ICAgID0gMiAqIF9pcmFuZCgwLCBIX3NpemVfeCAtIDEpICsgMTtcclxuICAgIGNvbnN0IHBvc195ICAgID0gMiAqIF9pcmFuZCgwLCBIX3NpemVfeSAtIDEpICsgMTtcclxuICAgIGNvbnN0IHBvc19kICAgID0gMSAqIF9pcmFuZCgwLCBUX0RpcmVjdGlvbi5NQVgpO1xyXG5cclxuICAgIC8vIOS5seaVsOOBp+W+l+OBn+W6p+aomeOBq+majuauteOCkue9ruOBj1xyXG4gICAgaWYgKGZsb29yID49IDEpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRfY2VsbF94eXoocG9zX3gsIHBvc195LCBmbG9vciAtIDEpPy5nZXRLaW5kKCkgIT09IFRfTXpLaW5kLlN0clVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0X2NlbGxfeHl6KHBvc194LCBwb3NfeSwgZmxvb3IgLSAxLCAgVF9NektpbmQuU3RyRG4pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0X2NlbGxfeHl6KHBvc194LCBwb3NfeSwgZmxvb3IgLSAxLCAgVF9NektpbmQuU3RyVUQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmdldF9jZWxsX3h5eihwb3NfeCwgcG9zX3ksIGZsb29yKT8uZ2V0S2luZCgpICE9PSBUX016S2luZC5TdHJEbikge1xyXG4gICAgICAgIHRoaXMuc2V0X2NlbGxfeHl6KHBvc194LCBwb3NfeSwgZmxvb3IsICBUX016S2luZC5TdHJVcCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0X2NlbGxfeHl6KHBvc194LCBwb3NfeSwgZmxvb3IsICBUX016S2luZC5TdHJVRCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBDX1BvaW50RGlyKHt4OiBwb3NfeCwgeTogcG9zX3ksIHo6IGZsb29yLCBkOiBwb3NfZH0pO1xyXG59XHJcblxyXG5wdWJsaWMgY3JlYXRlX21hemUoZmxvb3I6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3Qgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpO1xyXG4gICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG5cclxuXHJcbiAgICAvLyDjg4Djg7Pjgrjjg6fjg7PjgackZmxvb3LjgafmjIflrprjgZXjgozjgZ/pmo7jgpLmnKrouI/lnLDjgavjgZnjgosgXHJcbiAgICB0aGlzLmZpbGxfY2VsbChUX016S2luZC5VbmV4cCwgZmxvb3IpO1xyXG5cclxuICAgIC8vIOODgOODs+OCuOODp+ODs+OBrui8qumDreOCkuefs+WjgeOBq+OBmeOCi1xyXG4gICAgdGhpcy5zZXRfYm94KFRfTXpLaW5kLlN0b25lLCAwLCAwLCBzaXplX3gsIHNpemVfeSwgZmxvb3IpO1xyXG5cclxuICAgIC8vIOmAmui3r+OBq+S4gOOBpOe9ruOBjeOBq+WjgeOBjOaIkOmVt+OBmeOCi+ODneOCpOODs+ODiOOCkuioreWumuOBmeOCi1xyXG4gICAgLy8g44Od44Kk44Oz44OI44GL44KJ5aOB44KS5Ly444Gw44GZ5pa55ZCR44KS44Op44Oz44OA44Og44Gr5rG644KB44KLXHJcbiAgICBjb25zdCBwb2ludHMgPSBuZXcgQ19Qb2ludFNldDJEKCk7XHJcbiAgICBmb3IgKGxldCBoID0gMjsgaCA8IHNpemVfeSAtIDI7IGggKz0gMil7XHJcbiAgICAgICAgZm9yIChsZXQgdyA9IDI7IHcgPCBzaXplX3ggLSAyOyB3ICs9IDIpe1xyXG4gICAgICAgICAgICBjb25zdCBkaSA9IF9pcmFuZCgwLCBUX0RpcmVjdGlvbi5NQVgpO1xyXG4gICAgICAgICAgICBwb2ludHMucHVzaChuZXcgQ19Qb2ludExpbmsyRCh3LCBoLCBkaSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDkubHmlbDjgafjgYTjgY/jgaTjgYvpg6jlsYvjgpLkvZzjgotcclxuICAgIGNvbnN0IHJvb21zX2FycmF5ID0gW107XHJcbiAgICBjb25zdCBudW1fb2Zfcm9vbSA9IF9pcmFuZCgwLCB0aGlzLm51bV9vZl9yb29tKTtcclxuICAgIGZvciAobGV0IGNudCA9IDA7IGNudCA8IG51bV9vZl9yb29tOyBjbnQrKykge1xyXG4gICAgICAgIGNvbnN0IGxlbmdfeCA9IF9pcmFuZCgxLCAgdGhpcy5tYXhfc2l6ZV9vZl9yb29tKSAqIDIgKyAxO1xyXG4gICAgICAgIGNvbnN0IGxlbmdfeSA9IF9pcmFuZCgxLCAgdGhpcy5tYXhfc2l6ZV9vZl9yb29tKSAqIDIgKyAxO1xyXG4gICAgICAgIGNvbnN0IHJvb21feCA9IF9pcmFuZCgwLCAoc2l6ZV94IC0gbGVuZ194KSAvIDIpICogMjtcclxuICAgICAgICBjb25zdCByb29tX3kgPSBfaXJhbmQoMCwgKHNpemVfeSAtIGxlbmdfeSkgLyAyKSAqIDI7XHJcbiAgICAgICAgcm9vbXNfYXJyYXkucHVzaCh7dHg6IHJvb21feCwgdHk6IHJvb21feSwgc3g6IGxlbmdfeCwgc3k6IGxlbmdfeX0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOmDqOWxi+OBruS4reOBruODneOCpOODs+ODiOOCkuWJiumZpOOBmeOCi1xyXG4gICAgZm9yIChjb25zdCByb29tIG9mIHJvb21zX2FycmF5KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IHBvaW50cy5zZXQubGVuZ3RoOyBpaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSAgcG9pbnRzLnNldFtpaV07XHJcbiAgICAgICAgICAgIGlmIChwID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKCAgICAocC54ID49IHJvb20udHgpIFxyXG4gICAgICAgICAgICAgICAgJiYgIChwLnggPD0gcm9vbS50eCArIHJvb20uc3gpXHJcbiAgICAgICAgICAgICAgICAmJiAgKHAueSA+PSByb29tLnR5KVxyXG4gICAgICAgICAgICAgICAgJiYgIChwLnkgPD0gcm9vbS50eSArIHJvb20uc3kpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzLnJlbW92ZShwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIOODneOCpOODs+ODiOOBi+OCieWjgeOCkuaIkOmVt+OBleOBm+OBpui/t+i3r+OCkuS9nOOCi1xyXG4gICAgZm9yIChjb25zdCBwIG9mIHBvaW50cy5zZXQpIHtcclxuICAgICAgICBpZiAocCA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDjg53jgqTjg7Pjg4jjga7kvY3nva7jgavnn7Plo4HjgpLnva7jgY9cclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihwLngsIHAueSwgZmxvb3IsIFRfTXpLaW5kLlN0b25lKTtcclxuXHJcbiAgICAgICAgLy8g5p+x44Gu5p2x6KW/5Y2X5YyX44Gu44GE44Ga44KM44GL44Gr44KC55+z5aOB44KS572u44GPXHJcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gWzAsIDAsIDAsIDBdO1xyXG4gICAgICAgIGNvbnN0IGRpID0gQ19Qb2ludExpbmsyRC5jYXN0KHApPy5kaSA/PyBUX0RpcmVjdGlvbi5YO1xyXG4gICAgICAgIGlmIChkaSA9PT0gVF9EaXJlY3Rpb24uWCkgY29udGludWU7XHJcbiAgICAgICAgZGlyZWN0aW9uW2RpXSA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0X2NlbGxfeHl6KFxyXG4gICAgICAgICAgICBwLnggLSBkaXJlY3Rpb25bVF9EaXJlY3Rpb24uV10gKyBkaXJlY3Rpb25bVF9EaXJlY3Rpb24uRV0sIFxyXG4gICAgICAgICAgICBwLnkgLSBkaXJlY3Rpb25bVF9EaXJlY3Rpb24uTl0gKyBkaXJlY3Rpb25bVF9EaXJlY3Rpb24uU10sIFxyXG4gICAgICAgICAgICBmbG9vcixcclxuICAgICAgICAgICAgVF9NektpbmQuU3RvbmVcclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIOmWiemOluepuumWk+OBjOWHuuadpeOBpuOBhOOBn+OCieWHuuWPo+OCkuS9nOOCi1xyXG4gICAgLy8g44Od44Kk44Oz44OI44KS44OI44Os44O844K544GX44Gm44CB5pei5Ye644Gu44Od44Kk44Oz44OI44Gr57mL44GM44Gj44Gm44GE44Gf44KJ6ZaJ6Y6W56m66ZaTXHJcbiAgICBmb3IgKGNvbnN0IHNldCBvZiBwb2ludHMuc2V0KSB7XHJcbiAgICAgICAgaWYgKHNldCA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgY29uc3QgW3luLCB0cmFjZV9zZXRdID0gdGhpcy5jaGVja19jbG9zZShzZXQueCwgc2V0LnksIHBvaW50cywgbmV3IENfUG9pbnRTZXQyRCgpKTtcclxuICAgICAgICBpZiAoeW4pIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuX2V4aXQodHJhY2Vfc2V0LCBUX016S2luZC5VbmV4cCwgZmxvb3IpO1xyXG4gICAgICAgICAgICBpZiAodHJhY2Vfc2V0ICE9PSB1bmRlZmluZWQpIGZvciAoY29uc3QgdCBvZiB0cmFjZV9zZXQuc2V0KSBwb2ludHMucmVtb3ZlKHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5cclxucHJvdGVjdGVkIGNoZWNrX2Nsb3NlKHg6IG51bWJlciwgeTogbnVtYmVyLCBwb2ludF9zZXQ6IENfUG9pbnRTZXQyRCwgdHJhY2Vfc2V0OiBDX1BvaW50U2V0MkR8dW5kZWZpbmVkKTogW2Jvb2xlYW4sIENfUG9pbnRTZXQyRHx1bmRlZmluZWRdIHtcclxuICAgIGlmICh4IDwgMiB8fCB5IDwgMiB8fCB4ID4gdGhpcy5zaXplLnNpemVfeCgpIC0gMiB8fCB5ID4gdGhpcy5zaXplLnNpemVfeSgpIC0gMikgcmV0dXJuIFtmYWxzZSwgdW5kZWZpbmVkXTtcclxuXHJcbiAgICBpZiAocG9pbnRfc2V0ID09PSB1bmRlZmluZWQpIHJldHVybiBbZmFsc2UsIHVuZGVmaW5lZF07XHJcbiAgICBpZiAocG9pbnRfc2V0Py5pc19leGlzdCh4LCB5KSA9PT0gZmFsc2UpIHJldHVybiBbZmFsc2UsIHVuZGVmaW5lZF07XHJcblxyXG4gICAgaWYgKHRyYWNlX3NldCAhPT0gdW5kZWZpbmVkICYmIHRyYWNlX3NldD8uaXNfZXhpc3QoeCwgeSkgPT09IHRydWUpICByZXR1cm4gW3RydWUsICB0cmFjZV9zZXRdO1xyXG5cclxuICAgIGNvbnN0IHAgPSBwb2ludF9zZXQuZ2V0X3BvaW50KHgsIHkpO1xyXG4gICAgdHJhY2Vfc2V0ID8/PSBuZXcgQ19Qb2ludFNldDJEKCk7XHJcbiAgICB0cmFjZV9zZXQ/LnB1c2gobmV3IENfUG9pbnRMaW5rMkQoeCwgeSwgQ19Qb2ludExpbmsyRC5jYXN0KHApPy5kaSkpO1xyXG5cclxuICAgIGxldCBuZXh0X3g6IG51bWJlciA9IDAsIG5leHRfeTogbnVtYmVyID0gMDtcclxuICAgIHN3aXRjaCAoQ19Qb2ludExpbmsyRC5jYXN0KHApPy5kaSkge1xyXG4gICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjogIC8vIOWMl1xyXG4gICAgICAgICAgICBuZXh0X3ggPSB4O1xyXG4gICAgICAgICAgICBuZXh0X3kgPSB5IC0gMjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOiAgLy8g5p2xXHJcbiAgICAgICAgICAgIG5leHRfeCA9IHggKyAyO1xyXG4gICAgICAgICAgICBuZXh0X3kgPSB5O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6ICAvLyDljZdcclxuICAgICAgICAgICAgbmV4dF94ID0geDtcclxuICAgICAgICAgICAgbmV4dF95ID0geSArIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogIC8vIOilv1xyXG4gICAgICAgICAgICBuZXh0X3ggPSB4IC0gMjtcclxuICAgICAgICAgICAgbmV4dF95ID0geTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrX2Nsb3NlKG5leHRfeCwgbmV4dF95LCBwb2ludF9zZXQsIHRyYWNlX3NldCk7XHJcbn1cclxuXHJcbnByb3RlY3RlZCBvcGVuX2V4aXQocDogQ19Qb2ludFNldDJEfHVuZGVmaW5lZCwga2luZDogVF9NektpbmQsIGZsb29yOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChwID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBjbnQgPSBfaXJhbmQoMCwgcC5zZXQubGVuZ3RoIC0gMSk7XHJcbiAgICBjb25zdCBwcCAgPSAgcC5zZXRbY250XTtcclxuXHJcbiAgICBsZXQgZGlyZWN0aW9uID0gWzAsIDAsIDAsIDBdO1xyXG4gICAgY29uc3QgZGkgPSBDX1BvaW50TGluazJELmNhc3QocHApPy5kaSA/PyBUX0RpcmVjdGlvbi5OXHJcbiAgICBkaXJlY3Rpb25bZGldID0gMTtcclxuXHJcbiAgICB0aGlzLnNldF9jZWxsX3h5eihcclxuICAgICAgICBwcC54IC0gZGlyZWN0aW9uW1RfRGlyZWN0aW9uLlddICsgZGlyZWN0aW9uW1RfRGlyZWN0aW9uLkVdLCBcclxuICAgICAgICBwcC55IC0gZGlyZWN0aW9uW1RfRGlyZWN0aW9uLk5dICsgZGlyZWN0aW9uW1RfRGlyZWN0aW9uLlNdLCBcclxuICAgICAgICBmbG9vcixcclxuICAgICAgICBraW5kIFxyXG4gICAgKTtcclxuICAgIHJldHVybjtcclxufVxyXG5cclxuLypcclxucHVibGljIHN0YXRpYyBmcm9tX29ial90b19zdHJpbmcob2E6IENfTWF6ZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2EsIG51bGwsIFwiXFx0XCIpO1xyXG59XHJcbnB1YmxpYyBzdGF0aWMgZnJvbV9vYmpBcnJheV90b19zdHJpbmcob2FhOiB7W3VpZDogc3RyaW5nXTogQ19NYXplfSk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBvYSA9IFtdIGFzIENfTWF6ZVtdO1xyXG4gICAgZm9yIChjb25zdCBpaSBpbiBvYWEpIG9hLnB1c2gob2FhW2lpXSk7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2EsIG51bGwsIFwiXFx0XCIpO1xyXG59XHJcbnB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdfdG9fb2JqKHR4dDogc3RyaW5nKTogQ19NYXplIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaiAgID0gSlNPTi5wYXJzZSh0eHQpIGFzIEpTT05fTWF6ZVtdO1xyXG4gICAgICAgIHJldHVybiBuZXcgQ19NYXplKCkuZGVjb2RlKGopO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX01hemUoKTtcclxuICAgIH07XHJcbn1cclxucHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ190b19vYmpBcnJheSh0eHQ6IHN0cmluZyk6IHtbdWlkOiBzdHJpbmddOiBDX01hemV9IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaiAgID0gSlNPTi5wYXJzZSh0eHQpIGFzIEpTT05fTWF6ZVtdO1xyXG4gICAgICAgIGNvbnN0IG1wYSA9IHt9IGFzIHtbaWQ6IHN0cmluZ106IENfTWF6ZX07XHJcbiAgICAgICAgZm9yIChjb25zdCBqaiBvZiBqKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFhYSA9IG5ldyBDX01hemUoKS5kZWNvZGUoamopO1xyXG4gICAgICAgICAgICBtcGFbYWFhLnVpZCgpXSA9IGFhYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1wYTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH07XHJcbn1cclxuKi9cclxuXHJcbiAgICBwdWJsaWMgdG9fbGV0dGVyKHA6IENfUG9pbnQpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNlbGxzW3Auel1bcC55XVtwLnhdLnRvX2xldHRlcigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHRvX3N0cmluZyhmbG9vcjogbnVtYmVyID0gMCwgZGVidWdfbW9kZTogYm9vbGVhbiA9IGZhbHNlKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG5cclxuICAgICAgICB2YXIgcmV0X3N0cjogc3RyaW5nID0gJyc7XHJcbiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBzaXplX3k7IHkrKykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB0aGlzLmdldF9vYmpfeHl6KHgsIHksIGZsb29yKTtcclxuICAgICAgICAgICAgICAgIGlmICghZGVidWdfbW9kZSAmJiB0aGlzLm1hc2tzW2Zsb29yXVt5XVt4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldF9zdHIgKz0gJ++8uCc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9ial9jID0gb2JqPy52aWV3KCk/LmxldHRlcigpID8/IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iaiA9PT0gbnVsbCB8fCBvYmpfYyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRfc3RyICs9IHRoaXMuY2VsbHNbZmxvb3JdW3ldW3hdLnRvX2xldHRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldF9zdHIgKz0gb2JqX2M7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldF9zdHIgKz0gXCJcXG5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldF9zdHI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTWF6ZSB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKTtcclxuICAgICAgICBjb25zdCBzaXplX3ogPSB0aGlzLnNpemUuc2l6ZV96KCk7XHJcblxyXG4gICAgICAgIHZhciB6X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgdmFyIHlfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIHZhciB4X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHhfYXJyYXkucHVzaCh0aGlzLmNlbGxzW3pdW3ldW3hdLmVuY29kZSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHlfYXJyYXkucHVzaCh4X2FycmF5LmpvaW4oJ1gnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgel9hcnJheS5wdXNoKHlfYXJyYXkuam9pbignWScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWF6ZV9zdHIgPSB6X2FycmF5LmpvaW4oJ1onKTtcclxuXHJcbiAgICAgICAgdmFyIHpfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBzaXplX3o7IHorKykge1xyXG4gICAgICAgICAgICB2YXIgeV9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBzaXplX3k7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHhfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeF9hcnJheS5wdXNoKHRoaXMubWFza3Nbel1beV1beF0gPyAnMScgOiAnMCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeV9hcnJheS5wdXNoKHhfYXJyYXkuam9pbignWCcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB6X2FycmF5LnB1c2goeV9hcnJheS5qb2luKCdZJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtYXNrX3N0ciA9IHpfYXJyYXkuam9pbignWicpO1xyXG5cclxuICAgICAgICBsZXQgb2JqcyA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gdGhpcy5vYmpzKSBvYmpzLnB1c2godGhpcy5vYmpzW2lpXS5lbmNvZGUoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgIHRoaXMubWF6ZV9pZCxcclxuICAgICAgICAgICAgdW5pcV9pZDogdGhpcy51bmlxX2lkLFxyXG4gICAgICAgICAgICBzYXZlX2lkOiB0aGlzLnNhdmVfaWQsXHJcbiAgICAgICAgICAgIGZsb29yOiAgIHRoaXMuZmxvb3IsXHJcbiAgICAgICAgICAgIG5hbWU6ICAgIHRoaXMubmFtZSxcclxuICAgICAgICAgICAgb2JqczogICAgb2JqcyxcclxuICAgICAgICAgICAgc2l6ZV94OiAgdGhpcy5zaXplLnNpemVfeCgpLFxyXG4gICAgICAgICAgICBzaXplX3k6ICB0aGlzLnNpemUuc2l6ZV95KCksXHJcbiAgICAgICAgICAgIHNpemVfejogIHRoaXMuc2l6ZS5zaXplX3ooKSxcclxuICAgICAgICAgICAgbWF6ZTogICAgbWF6ZV9zdHIsXHJcbiAgICAgICAgICAgIG1hc2s6ICAgIG1hc2tfc3RyLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoYTogSlNPTl9NYXplfHVuZGVmaW5lZCk6IENfTWF6ZSB7XHJcbiAgICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChhLmlkICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5tYXplX2lkID0gYS5pZDtcclxuICAgICAgICBpZiAoYS51bmlxX2lkICE9PSB1bmRlZmluZWQpIHRoaXMudW5pcV9pZCA9IGEudW5pcV9pZDtcclxuICAgICAgICBpZiAoYS5zYXZlX2lkICE9PSB1bmRlZmluZWQpIHRoaXMuc2F2ZV9pZCA9IGEuc2F2ZV9pZDtcclxuICAgICAgICBpZiAoYS5mbG9vciAgICE9PSB1bmRlZmluZWQpIHRoaXMuZmxvb3IgICA9IGEuZmxvb3I7XHJcbiAgICAgICAgaWYgKGEubmFtZSAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm5hbWUgICAgPSBhLm5hbWU7XHJcblxyXG4gICAgICAgIGlmIChhLm9ianMgICAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9ianMgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqc29uX29iaiBvZiBhLm9ianMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld19vYmogPSBDX01hemVPYmoubmV3T2JqKGpzb25fb2JqKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub2Jqc1tuZXdfb2JqLnVpZCgpXSA9IG5ld19vYmo7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhLnNpemVfeCAhPT0gdW5kZWZpbmVkICYmIGEuc2l6ZV95ICE9PSB1bmRlZmluZWQgJiYgYS5zaXplX3ogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNpemUgID0gbmV3IENfUmFuZ2UoXHJcbiAgICAgICAgICAgICAgICBuZXcgQ19Qb2ludCgwLCAwLCAwKSwgXHJcbiAgICAgICAgICAgICAgICBuZXcgQ19Qb2ludChhLnNpemVfeCAtIDEsIGEuc2l6ZV95IC0gMSwgYS5zaXplX3ogLSAxKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5jZWxscyAgID0gdGhpcy5fX2luaXRfbWF6ZShUX016S2luZC5TdG9uZSk7XHJcbiAgICAgICAgICAgIHRoaXMubWFza3MgICA9IHRoaXMuX19pbml0X21hc2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX19pbml0X3VuY2xlYXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgICAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV96ID0gdGhpcy5zaXplLnNpemVfeigpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGEubWF6ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbi8qXHJcbiAgICAgICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspXHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspXHJcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbel1beV1beF0uc2V0KFRfTXpLaW5kLlN0b25lKTtcclxuICAgICAgICAgICAgfVxyXG4qL1xyXG4gICAgICAgICAgICBjb25zdCB6X2FycmF5OiBzdHJpbmdbXSA9IGEubWF6ZS5zcGxpdCgnWicpO1xyXG4gICAgICAgICAgICBjb25zdCB6X21heCA9IF9taW4oW3NpemVfeiwgel9hcnJheS5sZW5ndGhdKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCB6X21heDsgeisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5X2FycmF5OiBzdHJpbmdbXSA9IHpfYXJyYXlbel0uc3BsaXQoJ1knKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHlfbWF4ID0gIF9taW4oW3NpemVfeSwgeV9hcnJheS5sZW5ndGhdKTsgXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHlfbWF4OyB5KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4X2FycmF5OiBzdHJpbmdbXSA9IHlfYXJyYXlbeV0uc3BsaXQoJ1gnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4X21heCA9ICBfbWluKFtzaXplX3gsIHhfYXJyYXkubGVuZ3RoXSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgeF9tYXg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga2luZCA9IHBhcnNlSW50KHhfYXJyYXlbeF0sIDE2KTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbel1beV1beF0gPSBDX01hemVDZWxsLm5ld09iaih7a2luZDoga2luZCwgcG9zOiB7eDp4LCB5OnksIHo6en19KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYS5tYXNrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fX2luaXRfbWFzayh0cnVlKTtcclxuICAgICAgICAgICAgY29uc3Qgel9hcnJheTogc3RyaW5nW10gPSBhLm1hc2suc3BsaXQoJ1onKTtcclxuICAgICAgICAgICAgY29uc3Qgel9tYXggPSBfbWluKFtzaXplX3osIHpfYXJyYXkubGVuZ3RoXSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgel9tYXg7IHorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeV9hcnJheTogc3RyaW5nW10gPSB6X2FycmF5W3pdLnNwbGl0KCdZJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5X21heCA9ICBfbWluKFtzaXplX3ksIHlfYXJyYXkubGVuZ3RoXSk7IFxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB5X21heDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeF9hcnJheTogc3RyaW5nW10gPSB5X2FycmF5W3ldLnNwbGl0KCdYJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeF9tYXggPSAgX21pbihbc2l6ZV94LCB4X2FycmF5Lmxlbmd0aF0pOyBcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHhfbWF4OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhfYXJyYXlbeF0gIT09ICcwJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrc1t6XVt5XVt4XSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc2tzW3pdW3ldW3hdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fX2luaXRfdW5jbGVhcigpOyAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZW5jb2RlX2FsbChhbGxfbWF6ZTogQ19NYXplW10pOiBKU09OX01hemVbXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX21hemVfZGF0YTogSlNPTl9NYXplW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBtYXplIG9mIGFsbF9tYXplKSB7XHJcbiAgICAgICAgICAgIGFsbF9tYXplX2RhdGEucHVzaChtYXplLmVuY29kZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbF9tYXplX2RhdGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZV9hbGwoYWxsX21hemVfZGF0YTogSlNPTl9NYXplW10pOiBDX01hemVbXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX21hemU6IENfTWF6ZVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgbWF6ZV9kYXRhIG9mIGFsbF9tYXplX2RhdGEpIHtcclxuICAgICAgICAgICAgYWxsX21hemUucHVzaCgobmV3IENfTWF6ZSh7fSkpLmRlY29kZShtYXplX2RhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbF9tYXplO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWxlcnQoKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJNYXplIEluZm86XCJcclxuICAgICAgICAgICAgKyBcIlxcbm1hemUgaWQgOlwiICsgKHRoaXMubWF6ZV9pZCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5mbG9vcjogXCIgICArICh0aGlzLmZsb29yICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudW5pcSBpZCA6XCIgKyAodGhpcy51bmlxX2lkID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNhdmUgaWQgOlwiICsgKHRoaXMuc2F2ZV9pZCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5uYW1lOiAgIFwiICArICh0aGlzLm5hbWUgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2l6ZV94OiBcIiAgKyAodGhpcy5zaXplLnNpemVfeCgpID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNpemVfeTogXCIgICsgKHRoaXMuc2l6ZS5zaXplX3koKSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zaXplX3o6IFwiICArICh0aGlzLnNpemUuc2l6ZV96KCkgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFsZXJ0X21hemUoZmxvb3I6IG51bWJlciA9IDApOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIk1hemUgTWFwOlwiXHJcbiAgICAgICAgICAgICsgXCJtYXplOlxcblwiICAgICArICh0aGlzLnRvX3N0cmluZyhmbG9vciwgdHJ1ZSkgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhbGVydF9tYXNrKGZsb29yOiBudW1iZXIgPSAwKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJNYXNrIE1hcDpcIlxyXG4gICAgICAgICAgICArIFwibWFzazpcXG5cIiAgICAgKyAodGhpcy50b19zdHJpbmcoZmxvb3IsIGZhbHNlKSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBfZ2V0X3V1aWQgfSBmcm9tIFwiLi4vZF91dGwvRl9SYW5kXCI7XHJcbmltcG9ydCB7IFRfTXpLaW5kIH0gIGZyb20gXCIuL1RfTXpLaW5kXCI7XHJcbmltcG9ydCB7IEpTT05fQW55IH0gIGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuaW1wb3J0IHsgQ19NYXplT2JqLCBJX01hemVPYmosIEpTT05fTWF6ZU9iaiB9IGZyb20gXCIuL0NfTWF6ZU9ialwiO1xyXG5pbXBvcnQgeyBUX1dhbGwgfSAgICBmcm9tICcuL0NfV2FsbCc7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX01hemVDZWxsIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAga2luZD86IFRfTXpLaW5kXHJcbiAgICBvYmo/OiAgSlNPTl9NYXplT2JqLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19NYXplQ2VsbCAge1xyXG4gICAgcHJvdGVjdGVkIGtpbmQ6ICAgVF9NektpbmQ7XHJcbiAgICBwcm90ZWN0ZWQgbXlfb2JqOiBJX01hemVPYmo7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBuZXdPYmooajogSlNPTl9NYXplQ2VsbCk6IENfTWF6ZUNlbGwge1xyXG4gICAgICAgIHN3aXRjaCAoai5raW5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuTm9EZWY6IHJldHVybiBuZXcgQ19NYXplQ2VsbE5vRGVmKGopOyBcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5Vbmt3bjogcmV0dXJuIG5ldyBDX01hemVDZWxsVW5rd24oaik7IFxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLkVtcHR5OiByZXR1cm4gbmV3IENfTWF6ZUNlbGxFbXB0eShqKTsgXHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuRmxvb3I6IHJldHVybiBuZXcgQ19NYXplQ2VsbEZsb29yKGopO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlVuZXhwOiByZXR1cm4gbmV3IENfTWF6ZUNlbGxVbmV4cChqKTtcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdG9uZTogcmV0dXJuIG5ldyBDX01hemVDZWxsU3RvbmUoaik7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyVXA6IHJldHVybiBuZXcgQ19NYXplQ2VsbFN0clVwKGopO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0ckRuOiByZXR1cm4gbmV3IENfTWF6ZUNlbGxTdHJEbihqKTsgXHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyVUQ6IHJldHVybiBuZXcgQ19NYXplQ2VsbFN0clVEKGopO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IENfTWF6ZUNlbGxOb0RlZihqKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoajogSlNPTl9NYXplQ2VsbCkge1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuICAgICAgICBqLm9iai5jbG5hbWUgPz89IHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5raW5kICAgPSBqLmtpbmQgPz8gVF9NektpbmQuTm9EZWY7XHJcbiAgICAgICAgdGhpcy5teV9vYmogPSBDX01hemVPYmoubmV3T2JqKGoub2JqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRPYmooKTogIElfTWF6ZU9iaiB7cmV0dXJuIHRoaXMubXlfb2JqfVxyXG4gICAgcHVibGljIGdldEtpbmQoKTogVF9NektpbmQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtpbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvX2xldHRlcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm15X29iai52aWV3KCk/LmxldHRlcigpID8/ICfvvLgnO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX2xldHRlcihsZXR0ZXI6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoVF9NektpbmQpKSB7XHJcbiAgICAgICAgICAgIGlmIChsZXR0ZXIgPT09IGtleSkgcmV0dXJuIFRfTXpLaW5kW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBUX016S2luZC5Ob0RlZjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJvdzNEKGZyb3Q6IFRfV2FsbCwgYmFjazogVF9XYWxsKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5teV9vYmoudmlldygpPy5kcm93M0QoZnJvdCwgYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtpbmQudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsXCIwXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBkZWNvZGUoc3RyOiBzdHJpbmcsIGo/OiBKU09OX01hemVDZWxsKTogQ19NYXplQ2VsbHx1bmRlZmluZWQge1xyXG4gICAgICAgICBjb25zdCBraW5kID0gcGFyc2VJbnQoc3RyLCAxNikgYXMgVF9NektpbmQ7XHJcbiAgICAgICAgIHJldHVybiBDX01hemVDZWxsLm5ld09iaih7a2luZDoga2luZCwgcG9zOiBqPy5wb3N9KTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbE5vRGVmIGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLk5vRGVmfTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMCc7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ+eWkScsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMCcsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbiAgICAgICAgICAgIGNvbF9mOiAnJywgY29sX2I6ICcnLCBjb2xfczogJycsIGNvbF90OiAnJywgY29sX2Q6ICcnLCBcclxuICAgICAgICAgICAgY29sX2w6ICcnLCBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGxVbmt3biBleHRlbmRzIENfTWF6ZUNlbGwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVDZWxsfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGogPz89IHtraW5kOiBUX016S2luZC5Vbmt3bn07XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG5cclxuICAgICAgICBqLm9iai5jYW5fdGhyID0gJzAnO1xyXG4gICAgICAgIGoub2JqLnBvcyAgICAgPSB7eDpqLngsIHk6ai55LCB6Omouen07XHJcbiAgICAgICAgai5vYmoudmlldyAgICA9ICB7XHJcbiAgICAgICAgICAgIGxheWVyOiAwLCBsZXR0ZXI6ICforI4nLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgJzAnLFxyXG4gICAgICAgICAgICBwYWRfdDogMC4wLCBwYWRfZDogMC4wLCBwYWRfczogMC4wLFxyXG4gICAgICAgICAgICBjb2xfZjogJycsIGNvbF9iOiAnJywgY29sX3M6ICcnLCBjb2xfdDogJycsIGNvbF9kOiAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnJywgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbEVtcHR5IGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLkVtcHR5fTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMSc7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ+eEoScsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMCcsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbiAgICAgICAgICAgIGNvbF9mOiAnJywgY29sX2I6ICcnLCBjb2xfczogJycsIGNvbF90OiAnJywgY29sX2Q6ICcnLCBcclxuICAgICAgICAgICAgY29sX2w6ICcnLCBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsRmxvb3IgZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuRmxvb3J9O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcxJztcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn44CAJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcxJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcjNjY2NmZmJywgY29sX2Q6ICcnLCBcclxuICAgICAgICAgICAgY29sX2w6ICcjOTk5OWZmJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsVW5leHAgZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuVW5leHB9O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcxJztcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn44O7JywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcxJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcjNjZmZmZmJywgY29sX2Q6ICcnLCBcclxuICAgICAgICAgICAgY29sX2w6ICcjOTk5OWZmJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsU3RvbmUgZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuU3RvbmV9O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcwJztcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn77yDJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcxJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcjMDBmZjAwJywgY29sX2I6ICcnLCBjb2xfczogJyMwMGVlMDAnLCBjb2xfdDogJycsIGNvbF9kOiAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnIzAwMDBmZicsIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbFN0clVwIGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLlN0clVwfTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMSc7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ+S4iicsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMScsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbi8vICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcjZmZmZmNjJywgY29sX2Q6ICcjZmZmZmNjJywgXHJcbiAgICAgICAgICAgIGNvbF9mOiAnJywgY29sX2I6ICcnLCBjb2xfczogJycsIGNvbF90OiAnJywgY29sX2Q6ICcjZmZmZmNjJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnIzAwMDBmZicsIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbFN0ckRuIGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLlN0ckRufTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMSc7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ+S4iycsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMScsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbi8vICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcjZmZmZmNjJywgY29sX2Q6ICcjZmZmZmNjJywgXHJcbiAgICAgICAgICAgIGNvbF9mOiAnJywgY29sX2I6ICcnLCBjb2xfczogJycsIGNvbF90OiAnI2ZmZmZjYycsIGNvbF9kOiAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnIzAwMDBmZicsIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbFN0clVEIGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLlN0clVEfTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMSc7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ+autScsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMScsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbiAgICAgICAgICAgIGNvbF9mOiAnJywgY29sX2I6ICcnLCBjb2xfczogJycsIGNvbF90OiAnI2ZmZmZjYycsIGNvbF9kOiAnI2ZmZmZjYycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJyMwMDAwZmYnLCBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBfYWxlcnQgfSBmcm9tIFwiLi4vZF9jbW4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9IGZyb20gXCIuLi9kX3V0bC9DX0RzcE1lc3NhZ2VcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9NYXplSW5mbyB7XHJcbiAgICBuYW1lOiAgICAgIHN0cmluZztcclxuICAgIG1ibmFtZTogICAgc3RyaW5nO1xyXG4gICAgbHY6ICAgICAgICBudW1iZXI7XHJcbiAgICBzaXplX3g6ICAgIG51bWJlcjtcclxuICAgIHNpemVfeTogICAgbnVtYmVyO1xyXG4gICAgc2l6ZV96OiAgICBudW1iZXI7XHJcbiAgICBtYXhfcm9vbTogIG51bWJlcjtcclxuICAgIHJvb21fc2l6ZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfbWF6ZWluZm9faW5mbyhhPzogSlNPTl9NYXplSW5mbyk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgIGFsZXJ0KFwiTWF6ZUluZm8gRGF0YTpcIlxyXG4gICAgICAgICsgXCJcXG5uYW1lIDogXCIgICAgICAgKyAoYS5uYW1lICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5tYm5hbWU6IFwiICAgICAgKyAoYS5tYm5hbWUgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sdiA6XCIgICAgICAgICAgKyAoYS5sdiAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3g6IFwiICAgICAgKyAoYS5zaXplX3ggICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3k6IFwiICAgICAgKyAoYS5zaXplX3kgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3o6IFwiICAgICAgKyAoYS5zaXplX3ogICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5tYXhfb2Zfcm9vbTogXCIgKyAoYS5tYXhfcm9vbSAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5yb29tX3NpemU6IFwiICAgKyAoYS5yb29tX3NpemUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfTWF6ZUluZm8ge1xyXG4gICAgcHVibGljIG5hbWU6ICAgICAgc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgbWJuYW1lOiAgICBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBsdjogICAgICAgIG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc2l6ZV94OiAgICBudW1iZXIgPSAzO1xyXG4gICAgcHVibGljIHNpemVfeTogICAgbnVtYmVyID0gMztcclxuICAgIHB1YmxpYyBzaXplX3o6ICAgIG51bWJlciA9IDM7XHJcbiAgICBwdWJsaWMgbWF4X3Jvb206ICBudW1iZXIgPSAxO1xyXG4gICAgcHVibGljIHJvb21fc2l6ZTogbnVtYmVyID0gMTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0X3RibF9hbGwoKTogQ19NYXplSW5mb1tdIHtcclxuICAgICAgICBjb25zdCBtYXplaW5mbzogQ19NYXplSW5mb1tdID0gW107XHJcbiAgICAgICAgbWF6ZWluZm8ucHVzaChcclxuICAgICAgICAgICAgbmV3IENfTWF6ZUluZm8oKS5kZWNvZGUoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogICBcdCdtYXplMDEwJywgXHJcbiAgICAgICAgICAgICAgICBtYm5hbWU6IFx0J+aVmee3tOWgtCcsIFxyXG4gICAgICAgICAgICAgICAgbHY6ICAgICBcdCAxLCBcclxuICAgICAgICAgICAgICAgIHNpemVfeDogXHQxMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3k6IFx0MTEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV96OiBcdCAzLCBcclxuICAgICAgICAgICAgICAgIG1heF9yb29tOiBcdCAyLCBcclxuICAgICAgICAgICAgICAgIHJvb21fc2l6ZTogXHQgMyBcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBtYXplaW5mby5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgQ19NYXplSW5mbygpLmRlY29kZSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAgIFx0J21hemUwMTEnLCBcclxuICAgICAgICAgICAgICAgIG1ibmFtZTogXHQn5aeL44G+44KK44Gu6L+35a6uJywgXHJcbiAgICAgICAgICAgICAgICBsdjogICAgIFx0IDEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV94OiBcdDIxLCBcclxuICAgICAgICAgICAgICAgIHNpemVfeTogXHQyMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3o6IFx0IDUsIFxyXG4gICAgICAgICAgICAgICAgbWF4X3Jvb206IFx0IDMsIFxyXG4gICAgICAgICAgICAgICAgcm9vbV9zaXplOiBcdCAzIFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1hemVpbmZvLnB1c2goXHJcbiAgICAgICAgICAgIG5ldyBDX01hemVJbmZvKCkuZGVjb2RlKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICAgXHQnbWF6ZTAxMicsIFxyXG4gICAgICAgICAgICAgICAgbWJuYW1lOiBcdCfmmpfjgY3mo67jga7ov7flrq4nLCBcclxuICAgICAgICAgICAgICAgIGx2OiAgICAgXHQgMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3g6IFx0MjUsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV95OiBcdDI1LCBcclxuICAgICAgICAgICAgICAgIHNpemVfejogXHQgNywgXHJcbiAgICAgICAgICAgICAgICBtYXhfcm9vbTogXHQgNSwgXHJcbiAgICAgICAgICAgICAgICByb29tX3NpemU6IFx0IDMgXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIClcclxuICAgICAgICBtYXplaW5mby5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgQ19NYXplSW5mbygpLmRlY29kZSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAgIFx0J21hemUwMTMnLCBcclxuICAgICAgICAgICAgICAgIG1ibmFtZTogXHQn6buS6a2U44Gu5Zyw5LiL5aKT5ZywJywgXHJcbiAgICAgICAgICAgICAgICBsdjogICAgIFx0IDEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV94OiBcdDMxLCBcclxuICAgICAgICAgICAgICAgIHNpemVfeTogXHQzMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3o6IFx0MTAsIFxyXG4gICAgICAgICAgICAgICAgbWF4X3Jvb206IFx0IDUsIFxyXG4gICAgICAgICAgICAgICAgcm9vbV9zaXplOiBcdCA1IFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHJldHVybiBtYXplaW5mbztcclxuICAgIH1cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoaj86IEpTT05fTWF6ZUluZm8pIHtcclxuICAgICAgICBpZiAoaiAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9NYXplSW5mbyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogICAgICB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIG1ibmFtZTogICAgdGhpcy5tYm5hbWUsXHJcbiAgICAgICAgICAgIGx2OiAgICAgICAgdGhpcy5sdixcclxuICAgICAgICAgICAgc2l6ZV94OiAgICB0aGlzLnNpemVfeCxcclxuICAgICAgICAgICAgc2l6ZV95OiAgICB0aGlzLnNpemVfeSxcclxuICAgICAgICAgICAgc2l6ZV96OiAgICB0aGlzLnNpemVfeixcclxuICAgICAgICAgICAgbWF4X3Jvb206ICB0aGlzLm1heF9yb29tLFxyXG4gICAgICAgICAgICByb29tX3NpemU6IHRoaXMucm9vbV9zaXplLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoaj86IEpTT05fTWF6ZUluZm8pOiBDX01hemVJbmZvIHtcclxuICAgICAgICBpZiAoaiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGoubmFtZSAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubmFtZSAgICAgID0gai5uYW1lO1xyXG4gICAgICAgIGlmIChqLm1ibmFtZSAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm1ibmFtZSAgICA9IGoubWJuYW1lO1xyXG4gICAgICAgIGlmIChqLmx2ICAgICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmx2ICAgICAgICA9IGoubHY7XHJcbiAgICAgICAgaWYgKGouc2l6ZV94ICAgICE9PSB1bmRlZmluZWQpIHRoaXMuc2l6ZV94ICAgID0gai5zaXplX3g7XHJcbiAgICAgICAgaWYgKGouc2l6ZV95ICAgICE9PSB1bmRlZmluZWQpIHRoaXMuc2l6ZV95ICAgID0gai5zaXplX3k7XHJcbiAgICAgICAgaWYgKGouc2l6ZV96ICAgICE9PSB1bmRlZmluZWQpIHRoaXMuc2l6ZV96ICAgID0gai5zaXplX3o7XHJcbiAgICAgICAgaWYgKGoubWF4X3Jvb20gICE9PSB1bmRlZmluZWQpIHRoaXMubWF4X3Jvb20gID0gai5tYXhfcm9vbTtcclxuICAgICAgICBpZiAoai5yb29tX3NpemUgIT09IHVuZGVmaW5lZCkgdGhpcy5yb29tX3NpemUgPSBqLnJvb21fc2l6ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIk1hemVJbmZvIERhdGE6XCJcclxuICAgICAgICAgICAgKyBcIlxcbm5hbWUgOiBcIiAgICAgICArICh0aGlzLm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5tYm5hbWU6IFwiICAgICAgKyAodGhpcy5tYm5hbWUgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubHYgOlwiICAgICAgICAgICsgKHRoaXMubHYgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNpemVfeDogXCIgICAgICArICh0aGlzLnNpemVfeCAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zaXplX3k6IFwiICAgICAgKyAodGhpcy5zaXplX3kgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2l6ZV96OiBcIiAgICAgICsgKHRoaXMuc2l6ZV96ICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbm1heF9vZl9yb29tOiBcIiArICh0aGlzLm1heF9yb29tICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5yb29tX3NpemU6IFwiICAgKyAodGhpcy5yb29tX3NpemUgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX1BvaW50IH0gICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vQ19Qb2ludFwiO1xyXG5pbXBvcnQgeyBDX1BvaW50RGlyLCBKU09OX1BvaW50RGlyIH0gZnJvbSBcIi4vQ19Qb2ludERpclwiO1xyXG5pbXBvcnQgeyBJX0Fic3RyYWN0LCBJX0pTT05fVW5pcSwgSlNPTl9BbnkgfSAgICAgZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5pbXBvcnQgeyBfZ2V0X3V1aWQgfSAgICAgICAgICAgICAgICAgZnJvbSBcIi4uL2RfdXRsL0ZfUmFuZFwiO1xyXG5pbXBvcnQgeyBcclxuICAgIENfTWF6ZU9ialZpZXcsIFxyXG4gICAgSV9NYXplT2JqVmlldywgXHJcbiAgICBKU09OX01hemVPYmpWaWV3IFxyXG59IGZyb20gXCIuL0NfTWF6ZU9ialZpZXdcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fTWF6ZU9iaiBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGNsbmFtZT86ICAgIHN0cmluZyxcclxuICAgIHVuaXFfaWQ/OiAgIHN0cmluZywgXHJcbiAgICBwb3M/OiAgICAgICBKU09OX1BvaW50RGlyLFxyXG4gICAgdmlldz86ICAgICAgSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQsXHJcbiAgICB0aHI/OiAgICAgICBzdHJpbmcsIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJX01hemVPYmogZXh0ZW5kcyBJX0pTT05fVW5pcSwgSV9BYnN0cmFjdCB7XHJcbiAgICBnZXRfcGQ6ICAgICAoKT0+Q19Qb2ludERpcjtcclxuICAgIHdpdGhpbjogICAgIChwOiBDX1BvaW50KT0+Ym9vbGVhbjtcclxuICAgIHZpZXc6ICAgICAgICgpPT5JX01hemVPYmpWaWV3fHVuZGVmaW5lZDtcclxuICAgIGNhblRocm91Z2g6ICgpPT5ib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19NYXplT2JqIGltcGxlbWVudHMgSV9NYXplT2JqIHtcclxuICAgIHByb3RlY3RlZCBjbG5hbWU6ICAgIHN0cmluZyA9ICdDX01hemVPYmonO1xyXG5cclxuICAgIHByaXZhdGUgICB1bmlxX2lkOiAgIHN0cmluZztcclxuICAgIHByb3RlY3RlZCBwb3M6ICAgICAgIENfUG9pbnREaXI7XHJcbiAgICBwcm90ZWN0ZWQgbXlfdmlldzogICBJX01hemVPYmpWaWV3fHVuZGVmaW5lZDtcclxuICAgIHByb3RlY3RlZCBjYW5fdGhyOiAgIGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBuZXdPYmooaj86IEpTT05fTWF6ZU9ianx1bmRlZmluZWQpOiBJX01hemVPYmoge1xyXG4gICAgICAgIGogPz89IHt9O1xyXG4gICAgICAgIGouY2xuYW1lID8/PSBDX01hemVPYmouY29uc3RydWN0b3IubmFtZTtcclxuICAgICAgICBzd2l0Y2ggKGouY2xuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ19NYXplT2JqLmNvbnN0cnVjdG9yLm5hbWU6IHJldHVybiBuZXcgQ19NYXplT2JqKGopO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IENfTWF6ZU9iaihqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBuZXdPYmooaj86IEpTT05fTWF6ZU9ianx1bmRlZmluZWQpOiBJX01hemVPYmoge1xyXG4gICAgICAgIHJldHVybiBDX01hemVPYmoubmV3T2JqKGopO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplT2JqfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMudW5pcV9pZCAgICA9ICdtYXplb2JqXycgKyBfZ2V0X3V1aWQoKTtcclxuICAgICAgICB0aGlzLmNsbmFtZSAgICAgPSAgQ19NYXplT2JqLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICAgICAgdGhpcy5wb3MgICAgICAgID0gIG5ldyBDX1BvaW50RGlyKHt4OjAsIHk6MCwgejowLCBkOjB9KTtcclxuICAgICAgICB0aGlzLm15X3ZpZXcgICAgPSAgdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuY2FuX3RociAgICA9ICB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoaiAhPT0gdW5kZWZpbmVkKSB0aGlzLl9faW5pdChqKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9faW5pdChqOiBKU09OX01hemVPYmp8dW5kZWZpbmVkKTogQ19NYXplT2JqIHtcclxuICAgICAgICBpZiAoaiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGoudW5pcV9pZCAhPT0gdW5kZWZpbmVkKSB0aGlzLnVuaXFfaWQgICA9IGoudW5pcV9pZDtcclxuICAgICAgICBpZiAoai5jbG5hbWUgICE9PSB1bmRlZmluZWQpIHRoaXMuY2xuYW1lICAgID0gai5jbG5hbWU7XHJcbiAgICAgICAgaWYgKGoucG9zICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLnBvcy5kZWNvZGUoai5wb3MpO1xyXG4gICAgICAgIGlmIChqLnZpZXcgICAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoai52aWV3KS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm15X3ZpZXcgPz89IENfTWF6ZU9ialZpZXcubmV3T2JqKGoudmlldyk7IFxyXG4gICAgICAgICAgICB9IGVsc2UgdGhpcy5teV92aWV3ICA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGouY2FuX3RociAhPT0gdW5kZWZpbmVkKSB0aGlzLmNhbl90aHIgPSBqLmNhbl90aHIgIT09ICcwJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxufVxyXG5cclxuICAgIHB1YmxpYyB1aWQoKTogc3RyaW5nIHtyZXR1cm4gdGhpcy51bmlxX2lkfVxyXG5cclxuICAgIHB1YmxpYyB2aWV3KCk6IElfTWF6ZU9ialZpZXd8dW5kZWZpbmVkIHtyZXR1cm4gdGhpcy5teV92aWV3fVxyXG4gICAgcHVibGljIHNldFZpZXcodmlldzogSV9NYXplT2JqVmlld3x1bmRlZmluZWQpOiB2b2lkIHt0aGlzLm15X3ZpZXcgPSB2aWV3fVxyXG5cclxuICAgIHB1YmxpYyBjYW5UaHJvdWdoKCk6IGJvb2xlYW4ge3JldHVybiB0aGlzLmNhbl90aHJ9XHJcbiAgICBwdWJsaWMgc2V0VGhyb3VnaCh0aHI6IGJvb2xlYW4pOiBib29sZWFuIHtyZXR1cm4gdGhpcy5jYW5fdGhyID0gdGhyfVxyXG5cclxuICAgIHB1YmxpYyBnZXRfcGQoKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX1BvaW50RGlyKHRoaXMucG9zKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcGQocDogQ19Qb2ludERpcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucG9zID0gcDtcclxuICAgIH1cclxuICAgIHB1YmxpYyB3aXRoaW4ocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvcy53aXRoaW4ocCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX01hemVPYmoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVuaXFfaWQ6IHRoaXMudW5pcV9pZCxcclxuICAgICAgICAgICAgY2xuYW1lOiAgdGhpcy5jbG5hbWUsXHJcbiAgICAgICAgICAgIHBvczogICAgIHRoaXMucG9zLmVuY29kZSgpLFxyXG4gICAgICAgICAgICB2aWV3OiAgICB0aGlzLm15X3ZpZXc/LmVuY29kZSgpID8/IHt9LFxyXG4gICAgICAgICAgICBjYW5fdGhyOiB0aGlzLmNhbl90aHIgPyAnMScgOiAnMCcsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWNvZGUoajogSlNPTl9NYXplT2JqfHVuZGVmaW5lZCk6IElfTWF6ZU9iaiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19pbml0KGopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBkZWNvZGUoajogSlNPTl9NYXplT2JqfHVuZGVmaW5lZCk6IElfTWF6ZU9iaiB7XHJcbiAgICAgICAgcmV0dXJuIENfTWF6ZU9iai5uZXdPYmooaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgSV9BYnN0cmFjdCwgSlNPTl9BbnkgfSBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcbmltcG9ydCB7IFRfV2FsbCB9ICAgICAgICAgICAgICAgZnJvbSBcIi4uL2RfbWRsL0NfV2FsbFwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSV9NYXplT2JqVmlldyBleHRlbmRzIElfQWJzdHJhY3Qge1xyXG4gICAgLy8g6KGo56S66Zai5L+CKDJEcHJlKS4vQ19XYWxsXHJcbiAgICBsYXllcjogICAoKT0+bnVtYmVyO1xyXG4gICAgbGV0dGVyOiAgKCk9PnN0cmluZ3xudWxsOyAvLyBudWxsOiDopovjgYjjgarjgYTjgIHkvZXjgoLjgarjgYRcclxuXHJcbiAgICAvLyDooajnpLrplqLkv4IoM0QpXHJcbiAgICBjYW5TaG93OiAoKT0+Ym9vbGVhbjtcclxuICAgIGRyb3czRDogIChmcm90OiBUX1dhbGwsIGJhY2s6IFRfV2FsbCk9PnZvaWQ7XHJcblxyXG4gICAgcGFkX3Q6ICAgKCk9Pm51bWJlcjsgLy/kuIrlgbTjga7nqbrjgY0o5Ymy5ZCIOiAw44GL44KJMSkgXHJcbiAgICBwYWRfZDogICAoKT0+bnVtYmVyOyAvL+W6iuWBtOOBruepuuOBjSjlibLlkIg6IDDjgYvjgokxKSBcclxuICAgIHBhZF9zOiAgICgpPT5udW1iZXI7IC8v5qiq5YG044Gu56m644GNKOWJsuWQiDogMOOBi+OCiTEpIFxyXG4gICAgY29sX2Y6ICAgKCk9PnN0cmluZ3xudWxsOyAvL+ato+mdouOBruiJsihDU1Pjgqvjg6njg7wp44CCbnVsbOOBr+mAj+aYjlxyXG4gICAgY29sX2I6ICAgKCk9PnN0cmluZ3xudWxsOyAvL+iDjOmdouOBruiJsihDU1Pjgqvjg6njg7wp44CCbnVsbOOBr+mAj+aYjlxyXG4gICAgY29sX3M6ICAgKCk9PnN0cmluZ3xudWxsOyAvL+aoquWBtOOBruiJsihDU1Pjgqvjg6njg7wp44CCbnVsbOOBr+mAj+aYjlxyXG4gICAgY29sX3Q6ICAgKCk9PnN0cmluZ3xudWxsOyAvL+S4iumDqOOBruiJsihDU1Pjgqvjg6njg7wp44CCbnVsbOOBr+mAj+aYjuOAguOChOOChOOBk+OBl+OBhOOBjOOAgeeJqeS9k+OBruW6lemdouOBq+W9k+OBn+OCi1xyXG4gICAgY29sX2Q6ICAgKCk9PnN0cmluZ3xudWxsOyAvL+S4i+mDqOOBruiJsihDU1Pjgqvjg6njg7wp44CCbnVsbOOBr+mAj+aYjuOAguOChOOChOOBk+OBl+OBhOOBjOOAgeeJqeS9k+OBruWkqeS6leOBq+W9k+OBn+OCi1xyXG4gICAgY29sX2w6ICAgKCk9PnN0cmluZ3xudWxsOyAvL+ODqeOCpOODs+OBruiJsihDU1Pjgqvjg6njg7wpXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9NYXplT2JqVmlldyBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGNsbmFtZT86IHN0cmluZyxcclxuICAgIGxheWVyPzogIG51bWJlcixcclxuICAgIGxldHRlcj86IHN0cmluZyxcclxuICAgIHNob3czRD86IHN0cmluZyxcclxuICAgIHBhZF90PzogIG51bWJlciwgLy8g44Kq44OW44K444Kn44Kv44OI5LiK6YOo44Gu6ZqZ6ZaT44Gu5Ymy5ZCIKDAuMCDjgYvjgokgMS4wKSBcclxuICAgIHBhZF9kPzogIG51bWJlciwgLy8g44Kq44OW44K444Kn44Kv44OI5LiL6YOo44Gu6ZqZ6ZaT44Gu5Ymy5ZCIKDAuMCDjgYvjgokgMS4wKSBcclxuICAgIHBhZF9zPzogIG51bWJlciwgLy8g44Kq44OW44K444Kn44Kv44OI5ZGo5Zuy44Gu6ZqZ6ZaT44Gu5Ymy5ZCIKDAuMCDjgYvjgokgMS4wKSBcclxuICAgIGNvbF9mPzogIHN0cmluZ3xudWxsLCAvLyDjgqrjg5bjgrjjgqfjgq/jg4jmraPpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBjb2xfYj86ICBzdHJpbmd8bnVsbCwgLy8g44Kq44OW44K444Kn44Kv44OI5q2j6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgY29sX3M/OiAgc3RyaW5nfG51bGwsIC8vIOOCquODluOCuOOCp+OCr+ODiOWBtOmdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIGNvbF90PzogIHN0cmluZ3xudWxsLCAvLyDjgqrjg5bjgrjjgqfjgq/jg4jkuIrpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBjb2xfZD86ICBzdHJpbmd8bnVsbCwgLy8g44Kq44OW44K444Kn44Kv44OI5bqV6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgY29sX2w/OiAgc3RyaW5nfG51bGwsIC8vIOOCquODluOCuOOCp+OCr+ODiOOBrue3muOBrkNTU+OCq+ODqeODvCBcclxufVxyXG5cclxudHlwZSBUX3h5ICAgPSB7eDogbnVtYmVyLCB5OiBudW1iZXJ9XHJcbnR5cGUgVF9SZWN0ID0ge3RsOiBUX3h5LCB0cjogVF94eSwgZGw6IFRfeHksIGRyOiBUX3h5fTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDX01hemVPYmpWaWV3IGltcGxlbWVudHMgSV9NYXplT2JqVmlldyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbjNEPzogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRfY29udGV4dDNEKCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRHx1bmRlZmluZWQge3JldHVybiB0aGlzPy5jb24zRH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0X2NvbnRleHQzRChjb24zRD86IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge3RoaXMuY29uM0QgPSBjb24zRH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5ld09iaihqPzogSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQpOiBJX01hemVPYmpWaWV3IHtcclxuICAgICAgICBqID8/PSB7fTtcclxuICAgICAgICBqLmNsbmFtZSA/Pz0gQ19NYXplT2JqVmlldy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgICAgIHN3aXRjaCAoai5jbG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBDX01hemVPYmpWaWV3LmNvbnN0cnVjdG9yLm5hbWU6ICAgICByZXR1cm4gbmV3IENfTWF6ZU9ialZpZXcoaik7XHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm4gbmV3IENfTWF6ZU9ialZpZXcoaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbmV3T2JqKGo/OiBKU09OX01hemVPYmpWaWV3fHVuZGVmaW5lZCk6IElfTWF6ZU9ialZpZXcge1xyXG4gICAgICAgIHJldHVybiBDX01hemVPYmpWaWV3Lm5ld09iaihqKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjbG5hbWU6ICAgIHN0cmluZyA9ICdDX01hemVPYmpWaWV3JztcclxuXHJcbiAgICBwcml2YXRlIG15X2xheWVyOiAgbnVtYmVyOyAgICAgIC8vIDJE6KGo56S644Gu5pmC44GuQ1NT44Os44Kk44Ok44O844CC5ZCM5L2N572u44Gu44Kq44OW44K444Kn44Gu5YaF44GT44Gu5YCk44GM5aSn44GN44GE54mp44GM6KGo56S644GV44KM44KLXHJcbiAgICBwcml2YXRlIG15X2xldHRlcjogc3RyaW5nfG51bGw7IC8vIDJE6KGo56S644Gu5pmC44Gu5YWo6KeS5paH5a2X44CCbnVsbOOBquOCiemAj+aYjlxyXG5cclxuICAgIHByaXZhdGUgbXlfc2hvdzNEOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBteV9wYWRfdDogIG51bWJlcjsgLy8g44Kq44OW44K444Kn44Kv44OI5LiK6YOo44Gu6ZqZ6ZaT44Gu5Ymy5ZCIKDAuMCDjgYvjgokgMS4wKSBcclxuICAgIHByaXZhdGUgbXlfcGFkX2Q6ICBudW1iZXI7IC8vIOOCquODluOCuOOCp+OCr+ODiOS4i+mDqOOBrumamemWk+OBruWJsuWQiCgwLjAg44GL44KJIDEuMCkgXHJcbiAgICBwcml2YXRlIG15X3BhZF9zOiAgbnVtYmVyOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jlkajlm7Ljga7pmpnplpPjga7libLlkIgoMC4wIOOBi+OCiSAxLjApIFxyXG5cclxuICAgIHByaXZhdGUgbXlfY29sX2Y6ICBzdHJpbmd8bnVsbDsgLy8g44Kq44OW44K444Kn44Kv44OI5q2j6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgcHJpdmF0ZSBteV9jb2xfYjogIHN0cmluZ3xudWxsOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jmraPpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBwcml2YXRlIG15X2NvbF9zOiAgc3RyaW5nfG51bGw7IC8vIOOCquODluOCuOOCp+OCr+ODiOWBtOmdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIHByaXZhdGUgbXlfY29sX3Q6ICBzdHJpbmd8bnVsbDsgLy8g44Kq44OW44K444Kn44Kv44OI5LiK6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgcHJpdmF0ZSBteV9jb2xfZDogIHN0cmluZ3xudWxsOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jlupXpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBwcml2YXRlIG15X2NvbF9sOiAgc3RyaW5nfG51bGw7IC8vIOOCquODluOCuOOCp+OCr+ODiOOBrue3muOBrkNTU+OCq+ODqeODvCBcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5jbG5hbWUgICAgID0gIHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5teV9sYXllciAgID0gIC0yO1xyXG4gICAgICAgIHRoaXMubXlfbGV0dGVyICA9ICBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLm15X3BhZF90ICAgPSAgMC4wO1xyXG4gICAgICAgIHRoaXMubXlfcGFkX2QgICA9ICAwLjA7XHJcbiAgICAgICAgdGhpcy5teV9wYWRfcyAgID0gIDAuMDtcclxuXHJcbiAgICAgICAgdGhpcy5teV9zaG93M0QgID0gIHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMubXlfY29sX2YgICA9ICcjZjhmOGY4JzsgXHJcbiAgICAgICAgdGhpcy5teV9jb2xfYiAgID0gJyNhYWFhYWEnOyBcclxuICAgICAgICB0aGlzLm15X2NvbF9zICAgPSAnI2RkZGRkZCc7IFxyXG4gICAgICAgIHRoaXMubXlfY29sX3QgICA9ICcjZmZmZmZmJzsgXHJcbiAgICAgICAgdGhpcy5teV9jb2xfZCAgID0gJyNjY2NjY2MnOyBcclxuICAgICAgICB0aGlzLm15X2NvbF9sICAgPSAnIzMzMzMzMyc7IFxyXG5cclxuICAgICAgICBpZiAoaiAhPT0gdW5kZWZpbmVkKSB0aGlzLl9faW5pdChqKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX19pbml0KGo6IEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkKTogSV9NYXplT2JqVmlldyB7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChqLmNsbmFtZSAgIT09IHVuZGVmaW5lZCkgdGhpcy5jbG5hbWUgICAgPSBqLmNsbmFtZTtcclxuICAgICAgICBpZiAoai5sYXllciAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfbGF5ZXIgID0gai5sYXllcjtcclxuICAgICAgICBpZiAoai5sZXR0ZXIgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfbGV0dGVyID0gai5sZXR0ZXIgIT09ICcnICA/IGoubGV0dGVyIDogbnVsbDsgXHJcbiAgICAgICAgaWYgKGoucGFkX3QgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X3BhZF90ICA9IGoucGFkX3Q7IFxyXG4gICAgICAgIGlmIChqLnBhZF9kICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9wYWRfZCAgPSBqLnBhZF9kOyBcclxuICAgICAgICBpZiAoai5wYWRfcyAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfcGFkX3MgID0gai5wYWRfczsgXHJcbiAgICAgICAgaWYgKGouc2hvdzNEICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X3Nob3czRCA9IGouc2hvdzNEICE9PSAnMCcgPyB0cnVlICAgICA6IGZhbHNlOyBcclxuICAgICAgICBpZiAoai5jb2xfZiAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfY29sX2YgID0gai5jb2xfZiAgIT09ICcnICA/IGouY29sX2YgIDogbnVsbDsgXHJcbiAgICAgICAgaWYgKGouY29sX2IgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2NvbF9iICA9IGouY29sX2IgICE9PSAnJyAgPyBqLmNvbF9iICA6IG51bGw7IFxyXG4gICAgICAgIGlmIChqLmNvbF9zICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9jb2xfcyAgPSBqLmNvbF9zICAhPT0gJycgID8gai5jb2xfcyAgOiBudWxsOyBcclxuICAgICAgICBpZiAoai5jb2xfdCAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfY29sX3QgID0gai5jb2xfdCAgIT09ICcnICA/IGouY29sX3QgIDogbnVsbDsgXHJcbiAgICAgICAgaWYgKGouY29sX2QgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2NvbF9kICA9IGouY29sX2QgICE9PSAnJyAgPyBqLmNvbF9kICA6IG51bGw7IFxyXG4gICAgICAgIGlmIChqLmNvbF9sICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9jb2xfbCAgPSBqLmNvbF9sICAhPT0gJycgID8gai5jb2xfbCAgOiBudWxsOyBcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxheWVyKCk6IG51bWJlciB7cmV0dXJuIHRoaXMubXlfbGF5ZXI7fVxyXG4gICAgcHVibGljIHNldF9sYXllcihsYXllcjogbnVtYmVyKSB7dGhpcy5teV9sYXllciA9IGxheWVyfVxyXG5cclxuICAgIHB1YmxpYyBsZXR0ZXIoKTogIHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9sZXR0ZXJ9XHJcbiAgICBwdWJsaWMgc2V0X2xldHRlcihsZXR0ZXI6IHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2xldHRlciA9IGxldHRlcn1cclxuXHJcbiAgICBwdWJsaWMgY2FuU2hvdygpOiBib29sZWFuIHtyZXR1cm4gdGhpcy5teV9zaG93M0R9O1xyXG4gICAgcHVibGljIHNldFNob3coY2FuX3Nob3c6IGJvb2xlYW4pOiBib29sZWFuIHtyZXR1cm4gdGhpcy5teV9zaG93M0QgPSBjYW5fc2hvd307XHJcblxyXG4gICAgcHVibGljIHBhZF90KCk6ICBudW1iZXIge3JldHVybiB0aGlzLm15X3BhZF90fVxyXG4gICAgcHVibGljIHBhZF9kKCk6ICBudW1iZXIge3JldHVybiB0aGlzLm15X3BhZF9kfVxyXG4gICAgcHVibGljIHBhZF9zKCk6ICBudW1iZXIge3JldHVybiB0aGlzLm15X3BhZF9zfVxyXG4gICAgcHVibGljIHNldF9wYWRfdChwYWRfdDogbnVtYmVyKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5teV9wYWRfdCA9IHRoaXMubXlfcGFkX2QgKyBwYWRfdCA8IDEuMCA/IHBhZF90IDogMC45OSAtIHRoaXMubXlfcGFkX2R9XHJcbiAgICBwdWJsaWMgc2V0X3BhZF9kKHBhZF9kOiBudW1iZXIpOiBudW1iZXIge3JldHVybiB0aGlzLm15X3BhZF9kID0gdGhpcy5teV9wYWRfdCArIHBhZF9kIDwgMS4wID8gcGFkX2QgOiAwLjk5IC0gdGhpcy5teV9wYWRfdH1cclxuICAgIHB1YmxpYyBzZXRfcGFkX3MocGFkX3M6IG51bWJlcik6IG51bWJlciB7cmV0dXJuIHRoaXMubXlfcGFkX3MgPSBwYWRfc31cclxuXHJcbiAgICBwdWJsaWMgY29sX2YoKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9mfSBcclxuICAgIHB1YmxpYyBjb2xfYigpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX2J9IFxyXG4gICAgcHVibGljIGNvbF9zKCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfc30gXHJcbiAgICBwdWJsaWMgY29sX3QoKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF90fSBcclxuICAgIHB1YmxpYyBjb2xfZCgpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX2R9IFxyXG4gICAgcHVibGljIGNvbF9sKCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfbH0gXHJcbiAgICBwdWJsaWMgc2V0X2NvbF9mKGNvbF9mOiBzdHJpbmd8bnVsbCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfZiA9IGNvbF9mfSBcclxuICAgIHB1YmxpYyBzZXRfY29sX2IoY29sX2I6IHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9iID0gY29sX2J9IFxyXG4gICAgcHVibGljIHNldF9jb2xfcyhjb2xfczogc3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX3MgPSBjb2xfc30gXHJcbiAgICBwdWJsaWMgc2V0X2NvbF90KGNvbF90OiBzdHJpbmd8bnVsbCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfdCA9IGNvbF90fSBcclxuICAgIHB1YmxpYyBzZXRfY29sX2QoY29sX2Q6IHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9kID0gY29sX2R9IFxyXG4gICAgcHVibGljIHNldF9jb2xfbChjb2xfbDogc3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX2wgPSBjb2xfbH0gXHJcblxyXG5cclxuICAgIHB1YmxpYyBkcm93M0QoZnJvdDogVF9XYWxsLCBiYWNrOiBUX1dhbGwpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRyb3dfb2JqX2JhY2sgICAgICAoZnJvdCwgYmFjayk7XHJcbiAgICAgICAgdGhpcy5kcm93X29ial9kb3duICAgICAgKGZyb3QsIGJhY2spO1xyXG4gICAgICAgIHRoaXMuZHJvd19vYmpfdG9wICAgICAgIChmcm90LCBiYWNrKTtcclxuICAgICAgICB0aGlzLmRyb3dfb2JqX3JpZ2h0X3NpZGUoZnJvdCwgYmFjayk7XHJcbiAgICAgICAgdGhpcy5kcm93X29ial9sZWZ0X3NpZGUgKGZyb3QsIGJhY2spO1xyXG4gICAgICAgIHRoaXMuZHJvd19vYmpfZnJvbnQgICAgIChmcm90LCBiYWNrKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZHJvd19vYmpfZG93bihcclxuICAgICAgICBmcm90OiAgVF9XYWxsLCBcclxuICAgICAgICBiYWNrOiAgVF9XYWxsLCBcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5TaG93KCkgfHwgdGhpcy5jb2xfdCgpID09PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMucGFkX3MoKSA8PSAwLjAgJiYgdGhpcy5wYWRfdCgpID49IDEuMCkge1xyXG4gICAgICAgICAgICBkcm93X2NlbGxfZmxvb3IoZnJvdCwgYmFjaywgdGhpcy5jb2xfdCgpID8/ICcjNjY2NmZmJywgdGhpcy5jb2xfbCgpID8/ICcjOTk5OWZmJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjb25zdCBvID0gX19jYWxjX3BhZGRpbmdfb2JqKHRoaXMsIGZyb3QsIGJhY2spO1xyXG4gICAgICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICAgICAgdGw6IG8uZmRsLFxyXG4gICAgICAgICAgICB0cjogby5mZHIsXHJcbiAgICAgICAgICAgIGRyOiBvLmJkcixcclxuICAgICAgICAgICAgZGw6IG8uYmRsLFxyXG4gICAgICAgIH1cclxuICAgICAgICBkcm93X2NlbGwocmVjdCwgdGhpcy5jb2xfdCgpLCB0aGlzLmNvbF9sKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJvd19vYmpfdG9wKFxyXG4gICAgICAgIGZyb3Q6ICBUX1dhbGwsIFxyXG4gICAgICAgIGJhY2s6ICBUX1dhbGwsIFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblNob3coKSB8fCB0aGlzLmNvbF9kKCkgPT09IG51bGwpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5wYWRfcygpIDw9IDAuMCAmJiB0aGlzLnBhZF9kKCkgPj0gMS4wKSB7XHJcbiAgICAgICAgICAgIGRyb3dfY2VsbF9jZWlsaW5nKGZyb3QsIGJhY2ssIHRoaXMuY29sX2QoKSA/PyAnI2FhYWFhYScsIHRoaXMuY29sX2woKSA/PyAnIzk5OTlmZicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbyA9IF9fY2FsY19wYWRkaW5nX29iaih0aGlzLCBmcm90LCBiYWNrKTtcclxuICAgICAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgICAgIHRsOiBvLmZ0bCxcclxuICAgICAgICAgICAgdHI6IG8uZnRyLFxyXG4gICAgICAgICAgICBkcjogby5idHIsXHJcbiAgICAgICAgICAgIGRsOiBvLmJ0bCxcclxuICAgICAgICB9XHJcbiAgICAgICAgZHJvd19jZWxsKHJlY3QsIHRoaXMuY29sX2QoKSwgdGhpcy5jb2xfbCgpKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZHJvd19vYmpfZnJvbnQoXHJcbiAgICAgICAgZnJvdDogIFRfV2FsbCwgXHJcbiAgICAgICAgYmFjazogIFRfV2FsbCwgXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuU2hvdygpIHx8IHRoaXMuY29sX2YoKSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbyA9IF9fY2FsY19wYWRkaW5nX29iaih0aGlzLCBmcm90LCBiYWNrKTtcclxuICAgICAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgICAgIHRsOiBvLmZ0bCwgXHJcbiAgICAgICAgICAgIHRyOiBvLmZ0ciwgXHJcbiAgICAgICAgICAgIGRyOiBvLmZkciwgXHJcbiAgICAgICAgICAgIGRsOiBvLmZkbCwgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZHJvd19jZWxsKHJlY3QsIHRoaXMuY29sX2YoKSwgdGhpcy5jb2xfbCgpKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZHJvd19vYmpfYmFjayhcclxuICAgICAgICBmcm90OiAgVF9XYWxsLCBcclxuICAgICAgICBiYWNrOiAgVF9XYWxsLCBcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5TaG93KCkgfHwgdGhpcy5jb2xfYigpID09PSBudWxsKSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBjb25zdCBvID0gX19jYWxjX3BhZGRpbmdfb2JqKHRoaXMsIGZyb3QsIGJhY2spO1xyXG4gICAgICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICAgICAgdGw6IG8uYnRsLCBcclxuICAgICAgICAgICAgdHI6IG8uYnRyLCBcclxuICAgICAgICAgICAgZHI6IG8uYmRyLCBcclxuICAgICAgICAgICAgZGw6IG8uYmRsLCBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBkcm93X2NlbGwocmVjdCwgdGhpcy5jb2xfYigpLCB0aGlzLmNvbF9sKCkpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkcm93X29ial9sZWZ0X3NpZGUoXHJcbiAgICAgICAgZnJvdDogIFRfV2FsbCwgXHJcbiAgICAgICAgYmFjazogIFRfV2FsbCwgXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuU2hvdygpIHx8IHRoaXMuY29sX3MoKSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbyA9IF9fY2FsY19wYWRkaW5nX29iaih0aGlzLCBmcm90LCBiYWNrKTtcclxuICAgICAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgICAgIHRsOiBvLmJ0bCxcclxuICAgICAgICAgICAgdHI6IG8uZnRsLFxyXG4gICAgICAgICAgICBkcjogby5mZGwsXHJcbiAgICAgICAgICAgIGRsOiBvLmJkbCxcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBkcm93X2NlbGwocmVjdCwgdGhpcy5jb2xfcygpLCB0aGlzLmNvbF9sKCkpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkcm93X29ial9yaWdodF9zaWRlKFxyXG4gICAgICAgIGZyb3Q6ICBUX1dhbGwsIFxyXG4gICAgICAgIGJhY2s6ICBUX1dhbGwsIFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblNob3coKSB8fCB0aGlzLmNvbF9zKCkgPT09IG51bGwpIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IG8gPSBfX2NhbGNfcGFkZGluZ19vYmoodGhpcywgZnJvdCwgYmFjayk7XHJcbiAgICAgICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgICAgICB0bDogby5mdHIsXHJcbiAgICAgICAgICAgIHRyOiBvLmJ0cixcclxuICAgICAgICAgICAgZHI6IG8uYmRyLFxyXG4gICAgICAgICAgICBkbDogby5mZHIsXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZHJvd19jZWxsKHJlY3QsIHRoaXMuY29sX3MoKSwgdGhpcy5jb2xfbCgpKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9NYXplT2JqVmlldyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY25hbWU6ICAgdGhpcy5jbG5hbWUsXHJcbiAgICAgICAgICAgIGxheWVyOiAgIHRoaXMubXlfbGF5ZXIsXHJcbiAgICAgICAgICAgIGxldHRlcjogIHRoaXMubXlfbGV0dGVyID8/ICcnLFxyXG4gICAgICAgICAgICBwYWRfdDogICB0aGlzLm15X3BhZF90LCBcclxuICAgICAgICAgICAgcGFkX2Q6ICAgdGhpcy5teV9wYWRfZCwgXHJcbiAgICAgICAgICAgIHBhZF9zOiAgIHRoaXMubXlfcGFkX3MsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICB0aGlzLmNhblNob3coKSA/ICcxJyA6ICcwJyxcclxuICAgICAgICAgICAgY29sX2Y6ICAgdGhpcy5teV9jb2xfZiA/PyAnJywgIFxyXG4gICAgICAgICAgICBjb2xfYjogICB0aGlzLm15X2NvbF9iID8/ICcnLCAgXHJcbiAgICAgICAgICAgIGNvbF9zOiAgIHRoaXMubXlfY29sX3MgPz8gJycsIFxyXG4gICAgICAgICAgICBjb2xfdDogICB0aGlzLm15X2NvbF90ID8/ICcnLCBcclxuICAgICAgICAgICAgY29sX2Q6ICAgdGhpcy5teV9jb2xfZCA/PyAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAgIHRoaXMubXlfY29sX2wgPz8gJycsIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoajogSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQpOiBJX01hemVPYmpWaWV3IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX2luaXQoaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZShqOiBKU09OX01hemVPYmpWaWV3fHVuZGVmaW5lZCk6IElfTWF6ZU9ialZpZXcge1xyXG4gICAgICAgIHJldHVybiBDX01hemVPYmpWaWV3Lm5ld09iaihqKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBfX2NhbGNfcGFkZGluZ19vYmooXHJcbiAgICBvYmo6ICAgSV9NYXplT2JqVmlldyxcclxuICAgIGZyb3Q6ICBUX1dhbGwsIFxyXG4gICAgYmFjazogIFRfV2FsbCwgXHJcbik6IHtcclxuICAgIC8vIOitmOWIpeWtkOOBruaEj+WRs1xyXG4gICAgLy8g5bem56uv77ya5YmN5b6M44Gu5Yy65Yil44CAZjrliY3pnaLjgIBiOuiDjOmdolxyXG4gICAgLy8g5Lit5aSu77ya5LiK5LiL44Gu5Yy65Yil44CAdDrkuIrovrrjgIBkOuS4i+i+ulxyXG4gICAgLy8g5Y+z56uv77ya5bem5Y+z44Gu5Yy65Yil44CAbDrlt6blgbTjgIByOuWPs+WBtFxyXG4gICAgZnRsOlRfeHksIGZ0cjpUX3h5LCBmZHI6VF94eSwgZmRsOlRfeHksIFxyXG4gICAgYnRsOlRfeHksIGJ0cjpUX3h5LCBiZHI6VF94eSwgYmRsOlRfeHksIFxyXG59IHtcclxuICAgIGNvbnN0IHJlY3RfZnJvdCA9IGZyb3Q7XHJcbiAgICBjb25zdCByZWN0X2JhY2sgPSBiYWNrO1xyXG5cclxuICAgIGNvbnN0IHJhdGlvX1ggICA9IG9iai5wYWRfcygpIC8gMi4wO1xyXG4gICAgY29uc3QgcmF0aW9fVCAgID0gb2JqLnBhZF90KCk7XHJcbiAgICBjb25zdCByYXRpb19EICAgPSBvYmoucGFkX2QoKTtcclxuXHJcbiAgICBjb25zdCBmcm90X3BhZF9YICA9IE1hdGguYWJzKHJlY3RfZnJvdC5tYXhfeCAtIHJlY3RfZnJvdC5taW5feCkgKiByYXRpb19YO1xyXG4gICAgY29uc3QgYmFja19wYWRfWCAgPSBNYXRoLmFicyhyZWN0X2JhY2subWF4X3ggLSByZWN0X2JhY2subWluX3gpICogcmF0aW9fWDtcclxuXHJcbiAgICBjb25zdCBmcm90X3BhZF9UICA9IE1hdGguYWJzKHJlY3RfZnJvdC5tYXhfeSAtIHJlY3RfZnJvdC5taW5feSkgKiByYXRpb19UO1xyXG4gICAgY29uc3QgYmFja19wYWRfVCAgPSBNYXRoLmFicyhyZWN0X2JhY2subWF4X3kgLSByZWN0X2JhY2subWluX3kpICogcmF0aW9fVDtcclxuXHJcbiAgICBjb25zdCBmcm90X3BhZF9EICA9IE1hdGguYWJzKHJlY3RfZnJvdC5tYXhfeSAtIHJlY3RfZnJvdC5taW5feSkgKiByYXRpb19EO1xyXG4gICAgY29uc3QgYmFja19wYWRfRCAgPSBNYXRoLmFicyhyZWN0X2JhY2subWF4X3kgLSByZWN0X2JhY2subWluX3kpICogcmF0aW9fRDtcclxuXHJcbiAgICAvLyDjg5Hjg4fjgqPjg7PjgrDoqK3lrprlvozjga5YWeW6p+aomeOCkuioiOeul+OBmeOCi+OBn+OCgeOBq1xyXG4gICAgLy8g5b+F6KaB44Gq57ea5YiG44Gu5L2N572u5rG644KB44KS44GZ44KLXHJcbiAgICBjb25zdCBmcm90X3RvcF9sZnQgPSB7eDogcmVjdF9mcm90Lm1pbl94ICsgZnJvdF9wYWRfWCwgeTogcmVjdF9mcm90Lm1pbl95ICsgZnJvdF9wYWRfVH1cclxuICAgIGNvbnN0IGZyb3RfdG9wX3JndCA9IHt4OiByZWN0X2Zyb3QubWF4X3ggLSBmcm90X3BhZF9YLCB5OiByZWN0X2Zyb3QubWluX3kgKyBmcm90X3BhZF9UfVxyXG4gICAgY29uc3QgZnJvdF9kd25fbGZ0ID0ge3g6IHJlY3RfZnJvdC5taW5feCArIGZyb3RfcGFkX1gsIHk6IHJlY3RfZnJvdC5tYXhfeSAtIGZyb3RfcGFkX0R9XHJcbiAgICBjb25zdCBmcm90X2R3bl9yZ3QgPSB7eDogcmVjdF9mcm90Lm1heF94IC0gZnJvdF9wYWRfWCwgeTogcmVjdF9mcm90Lm1heF95IC0gZnJvdF9wYWRfRH1cclxuXHJcbiAgICBjb25zdCBiYWNrX3RvcF9sZnQgPSB7eDogcmVjdF9iYWNrLm1pbl94ICsgYmFja19wYWRfWCwgeTogcmVjdF9iYWNrLm1pbl95ICsgYmFja19wYWRfVH1cclxuICAgIGNvbnN0IGJhY2tfdG9wX3JndCA9IHt4OiByZWN0X2JhY2subWF4X3ggLSBiYWNrX3BhZF9YLCB5OiByZWN0X2JhY2subWluX3kgKyBiYWNrX3BhZF9UfVxyXG4gICAgY29uc3QgYmFja19kd25fbGZ0ID0ge3g6IHJlY3RfYmFjay5taW5feCArIGJhY2tfcGFkX1gsIHk6IHJlY3RfYmFjay5tYXhfeSAtIGJhY2tfcGFkX0R9XHJcbiAgICBjb25zdCBiYWNrX2R3bl9yZ3QgPSB7eDogcmVjdF9iYWNrLm1heF94IC0gYmFja19wYWRfWCwgeTogcmVjdF9iYWNrLm1heF95IC0gYmFja19wYWRfRH1cclxuXHJcbiAgICBsZXQgZnRsID0gX19jYWxjX3BhZGRpbmdfeHkoZnJvdF90b3BfbGZ0LCBiYWNrX3RvcF9sZnQsIHJhdGlvX1gpO1xyXG4gICAgbGV0IGZ0ciA9IF9fY2FsY19wYWRkaW5nX3h5KGZyb3RfdG9wX3JndCwgYmFja190b3Bfcmd0LCByYXRpb19YKTtcclxuICAgIGxldCBmZGwgPSBfX2NhbGNfcGFkZGluZ194eShmcm90X2R3bl9sZnQsIGJhY2tfZHduX2xmdCwgcmF0aW9fWCk7XHJcbiAgICBsZXQgZmRyID0gX19jYWxjX3BhZGRpbmdfeHkoZnJvdF9kd25fcmd0LCBiYWNrX2R3bl9yZ3QsIHJhdGlvX1gpO1xyXG5cclxuICAgIGxldCBidGwgPSBfX2NhbGNfcGFkZGluZ194eShiYWNrX3RvcF9sZnQsIGZyb3RfdG9wX2xmdCwgcmF0aW9fWCk7XHJcbiAgICBsZXQgYnRyID0gX19jYWxjX3BhZGRpbmdfeHkoYmFja190b3Bfcmd0LCBmcm90X3RvcF9yZ3QsIHJhdGlvX1gpO1xyXG4gICAgbGV0IGJkbCA9IF9fY2FsY19wYWRkaW5nX3h5KGJhY2tfZHduX2xmdCwgZnJvdF9kd25fbGZ0LCByYXRpb19YKTtcclxuICAgIGxldCBiZHIgPSBfX2NhbGNfcGFkZGluZ194eShiYWNrX2R3bl9yZ3QsIGZyb3RfZHduX3JndCwgcmF0aW9fWCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmdGw6IGZ0bCwgZnRyOiBmdHIsXHJcbiAgICAgICAgZmRsOiBmZGwsIGZkcjogZmRyLFxyXG4gICAgICAgIGJ0bDogYnRsLCBidHI6IGJ0cixcclxuICAgICAgICBiZGw6IGJkbCwgYmRyOiBiZHIsXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gX19jYWxjX3BhZGRpbmdfeHkoZnJvdDogVF94eSwgYmFjazogVF94eSwgcmF0aW86IG51bWJlcik6IFRfeHkge1xyXG4gICAgICAgIC8vIOe3muWIhihBeCArIEIgPSB5KeOBruaWueeoi+W8j+OBruS/guaVsOOCkuaxguOCgeOCi1xyXG4gICAgICAgIGNvbnN0IEEgPSAoZnJvdC55IC0gYmFjay55KSAvIChmcm90LnggLSBiYWNrLngpO1xyXG4gICAgICAgIGNvbnN0IEIgPSAgZnJvdC55IC0gQSAqIGZyb3QueDtcclxuICAgIFxyXG4gICAgICAgIC8vIOODkeODh+OCo+ODs+OCsOiqv+aVtOW+jOOBrlhZ5bqn5qiZ44Gu6KiI566XXHJcbiAgICAgICAgY29uc3QgcF9mcm90X3ggPSBmcm90LnggKyAoYmFjay54IC0gZnJvdC54KSAqIHJhdGlvO1xyXG4gICAgICAgIGNvbnN0IHBfZnJvdF95ID0gQSAqIHBfZnJvdF94ICsgQjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHt4OiBwX2Zyb3RfeCwgeTogcF9mcm90X3l9O1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZHJvd19jZWxsX2Zsb29yKFxyXG4gICAgICAgIHJlY3RfZnJvdDogVF9XYWxsLCBcclxuICAgICAgICByZWN0X2JhY2s6IFRfV2FsbCwgXHJcbiAgICAgICAgZmlsbDogc3RyaW5nID0gJyM2NjY2ZmYnLCBcclxuICAgICAgICBsaW5lOiBzdHJpbmcgPSAnIzk5OTlmZidcclxuICAgICk6IHZvaWQge1xyXG5cclxuICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICB0bDoge3g6IHJlY3RfZnJvdC5taW5feCwgeTogcmVjdF9mcm90Lm1heF95fSxcclxuICAgICAgICB0cjoge3g6IHJlY3RfZnJvdC5tYXhfeCwgeTogcmVjdF9mcm90Lm1heF95fSxcclxuICAgICAgICBkcjoge3g6IHJlY3RfYmFjay5tYXhfeCwgeTogcmVjdF9iYWNrLm1heF95fSxcclxuICAgICAgICBkbDoge3g6IHJlY3RfYmFjay5taW5feCwgeTogcmVjdF9iYWNrLm1heF95fVxyXG4gICAgfVxyXG4gICAgZHJvd19jZWxsKHJlY3QsIGZpbGwsIGxpbmUpO1xyXG59XHJcbmZ1bmN0aW9uIGRyb3dfY2VsbF9jZWlsaW5nKFxyXG4gICAgICAgIHJlY3RfZnJvdDogVF9XYWxsLCBcclxuICAgICAgICByZWN0X2JhY2s6IFRfV2FsbCwgXHJcbiAgICAgICAgZmlsbDogc3RyaW5nID0gJyNhYWFhYWEnLCBcclxuICAgICAgICBsaW5lOiBzdHJpbmcgPSAnIzk5OTlmZidcclxuICAgICk6IHZvaWQge1xyXG5cclxuICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICB0bDoge3g6IHJlY3RfZnJvdC5taW5feCwgeTogcmVjdF9mcm90Lm1pbl95fSxcclxuICAgICAgICB0cjoge3g6IHJlY3RfZnJvdC5tYXhfeCwgeTogcmVjdF9mcm90Lm1pbl95fSxcclxuICAgICAgICBkcjoge3g6IHJlY3RfYmFjay5tYXhfeCwgeTogcmVjdF9iYWNrLm1pbl95fSxcclxuICAgICAgICBkbDoge3g6IHJlY3RfYmFjay5taW5feCwgeTogcmVjdF9iYWNrLm1pbl95fVxyXG4gICAgfVxyXG4gICAgZHJvd19jZWxsKHJlY3QsIGZpbGwsIGxpbmUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcm93X2NlbGwocjogVF9SZWN0LCBmaWxsOiBzdHJpbmd8bnVsbCwgbGluZTogc3RyaW5nfG51bGwpOiB2b2lkIHtcclxuICAgIGlmIChDX01hemVPYmpWaWV3LmNvbjNEID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGNvbnN0IGNvbiA9IENfTWF6ZU9ialZpZXcuY29uM0Q7XHJcblxyXG4gICAgY29uLmJlZ2luUGF0aCgpO1xyXG4gICAgY29uLm1vdmVUbyhyLnRsLngsIHIudGwueSk7XHJcbiAgICBjb24ubGluZVRvKHIudHIueCwgci50ci55KTtcclxuICAgIGNvbi5saW5lVG8oci5kci54LCByLmRyLnkpO1xyXG4gICAgY29uLmxpbmVUbyhyLmRsLngsIHIuZGwueSk7XHJcbiAgICBjb24uY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgaWYgKGZpbGwgIT0gbnVsbCkge1xyXG4gICAgICAgIGNvbi5maWxsU3R5bGUgICA9IGZpbGw7XHJcbiAgICAgICAgY29uLmZpbGwoKTtcclxuICAgIH1cclxuICAgIGlmIChsaW5lICE9PSBudWxsKSB7XHJcbiAgICAgICAgY29uLnN0cm9rZVN0eWxlID0gbGluZTtcclxuICAgICAgICBjb24ubGluZVdpZHRoICAgPSAxO1xyXG4gICAgICAgIGNvbi5zdHJva2UoKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfTG9jYXRpb24sIEpTT05fTG9jYXRpb24gfSBmcm9tIFwiLi9DX0xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IElfSlNPTl9VbmlxIH0gICAgICAgICAgICAgICBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcbmltcG9ydCB7IF9nZXRfdXVpZCB9ICAgICAgICAgICAgICAgICBmcm9tIFwiLi4vZF91dGwvRl9SYW5kXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fTW92YWJsZVBvaW50IGV4dGVuZHMgSlNPTl9Mb2NhdGlvbiB7XHJcbiAgICB1bmlxX2lkPzogIHN0cmluZyxcclxuICAgIGN1cl91cmw/OiAgc3RyaW5nLFxyXG4gICAgdGVhbV91aWQ/OiBzdHJpbmcsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfbXZwdF9pbmZvKGE6IEpTT05fTW92YWJsZVBvaW50fHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoXCJNdlB0IEluZm86XCIgXHJcbiAgICAgICAgKyBcIlxcbnVuaXFfaWQ6ICBcIiAgKyAoYS51bmlxX2lkICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3VybDogIFwiICArIChhLmN1cl91cmwgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG50ZWFtX3VpZDogXCIgICsgKGEudGVhbV91aWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxja2Q6IFwiICAgICAgKyAoYS5raW5kICAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubGNubTogXCIgICAgICArIChhLm5hbWUgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sY2lkOiBcIiAgICAgICsgKGEubG9jX3VpZCAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl94OiBcIiAgICAgKyAoYS5sb2NfcG9zPy54ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3k6IFwiICAgICArIChhLmxvY19wb3M/LnkgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfejogXCIgICAgICsgKGEubG9jX3Bvcz8ueiA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl9kOiBcIiAgICAgKyAoYS5sb2NfcG9zPy5kID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ19Nb3ZhYmxlUG9pbnQgZXh0ZW5kcyBDX0xvY2F0aW9uIGltcGxlbWVudHMgSV9KU09OX1VuaXEge1xyXG4gICAgcHJvdGVjdGVkIHVuaXFfaWQ6ICBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgY3VyX3VybDogIHN0cmluZztcclxuICAgIHByb3RlY3RlZCB0ZWFtX3VpZDogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihqc29uPzogSlNPTl9Nb3ZhYmxlUG9pbnQpIHtcclxuICAgICAgICBzdXBlcihqc29uKTtcclxuICAgICAgICB0aGlzLnVuaXFfaWQgID0gJ012UG9pbnQjJyArIF9nZXRfdXVpZCgpO1xyXG4gICAgICAgIHRoaXMuY3VyX3VybCAgPSAnJztcclxuICAgICAgICB0aGlzLnRlYW1fdWlkID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBpZiAoanNvbiAhPT0gdW5kZWZpbmVkICYmIGpzb24gIT09IG51bGwpIHRoaXMuZGVjb2RlKGpzb24pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHVpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy51bmlxX2lkfVxyXG4gICAgcHVibGljIHVybCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5jdXJfdXJsfVxyXG4gICAgcHVibGljIHRpZCgpOiBzdHJpbmd8dW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudGVhbV91aWR9XHJcblxyXG4gICAgcHVibGljIG5ld191aWQoKTogdm9pZCB7dGhpcy51bmlxX2lkID0gJ012UG9pbnQjJyArIF9nZXRfdXVpZCgpO31cclxuICAgIHB1YmxpYyBzZXRfdXJsKHVybDogc3RyaW5nKTogdm9pZCB7IHRoaXMuY3VyX3VybCAgPSB1cmw7fVxyXG4gICAgcHVibGljIHNldF90aWQodGlkOiBzdHJpbmcpOiB2b2lkIHsgdGhpcy50ZWFtX3VpZCA9IHRpZDt9XHJcblxyXG4gICAgcHVibGljIGNsb25lKCk6IENfTW92YWJsZVBvaW50IHtcclxuICAgICAgICBjb25zdCBtdnB0ID0gbmV3IENfTW92YWJsZVBvaW50KHRoaXMuZW5jb2RlKCkpO1xyXG4gICAgICAgIG12cHQubmV3X3VpZCgpO1xyXG4gICAgICAgIHJldHVybiBtdnB0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmcm9tSlNPTih0eHQ6IHN0cmluZyk6IENfTW92YWJsZVBvaW50IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqID0gSlNPTi5wYXJzZSh0eHQpIGFzIEpTT05fTW92YWJsZVBvaW50O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGUoaik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdG9KU09OKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuZW5jb2RlKCksIG51bGwsIFwiXFx0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9vYmpfdG9fc3RyaW5nKG9hOiBDX01vdmFibGVQb2ludCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9hLmVuY29kZSgpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9vYmpBcnJheV90b19zdHJpbmcob2FhOiB7W3VpZDogc3RyaW5nXTogQ19Nb3ZhYmxlUG9pbnR9KTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBvYSA9IFtdIGFzIEpTT05fTW92YWJsZVBvaW50W107XHJcbiAgICAgICAgZm9yIChjb25zdCBpaSBpbiBvYWEpIG9hLnB1c2gob2FhW2lpXS5lbmNvZGUoKSk7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9hKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdfdG9fb2JqKHR4dDogc3RyaW5nKTogQ19Nb3ZhYmxlUG9pbnQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGogICA9IEpTT04ucGFyc2UodHh0KSBhcyBKU09OX01vdmFibGVQb2ludFtdO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENfTW92YWJsZVBvaW50KCkuZGVjb2RlKGopO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENfTW92YWJsZVBvaW50KCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdfdG9fb2JqQXJyYXkodHh0OiBzdHJpbmcpOiB7W3VpZDogc3RyaW5nXTogQ19Nb3ZhYmxlUG9pbnR9IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqICAgPSBKU09OLnBhcnNlKHR4dCkgYXMgSlNPTl9Nb3ZhYmxlUG9pbnRbXTtcclxuICAgICAgICAgICAgY29uc3QgbXBhID0ge30gYXMge1tpZDogc3RyaW5nXTogQ19Nb3ZhYmxlUG9pbnR9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGpqIG9mIGopIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFhYSA9IG5ldyBDX01vdmFibGVQb2ludCgpLmRlY29kZShqaik7XHJcbiAgICAgICAgICAgICAgICBtcGFbYWFhLnVpZCgpXSA9IGFhYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbXBhO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTW92YWJsZVBvaW50IHtcclxuICAgICAgICBjb25zdCBqID0gc3VwZXIuZW5jb2RlKCkgYXMgSlNPTl9Nb3ZhYmxlUG9pbnQ7XHJcbiAgICAgICAgai51bmlxX2lkICA9IHRoaXMudW5pcV9pZDtcclxuICAgICAgICBqLmN1cl91cmwgID0gdGhpcy5jdXJfdXJsO1xyXG4gICAgICAgIGoudGVhbV91aWQgPSB0aGlzLnRlYW1fdWlkID8/ICcnO1xyXG4gICAgICAgIHJldHVybiBqO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShqPzogSlNPTl9Nb3ZhYmxlUG9pbnQpOiBDX01vdmFibGVQb2ludCB7XHJcbiAgICAgICAgc3VwZXIuZGVjb2RlKGopO1xyXG4gICAgICAgIGlmIChqID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChqLnVuaXFfaWQgICE9PSB1bmRlZmluZWQpIHRoaXMudW5pcV9pZCAgPSBqLnVuaXFfaWQ7XHJcbiAgICAgICAgaWYgKGouY3VyX3VybCAgIT09IHVuZGVmaW5lZCkgdGhpcy5jdXJfdXJsICA9IGouY3VyX3VybDtcclxuICAgICAgICBpZiAoai50ZWFtX3VpZCAhPT0gdW5kZWZpbmVkKSB0aGlzLnRlYW1fdWlkID0gai50ZWFtX3VpZDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudGVhbV91aWQgPT09ICcnKSB0aGlzLnRlYW1fdWlkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWxlcnQoKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJNdlB0IEluZm86XCIgXHJcbiAgICAgICAgICAgICsgXCJcXG51bmlxX2lkOiAgXCIgICsgKHRoaXMudW5pcV9pZCAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfdXJsOiAgXCIgICsgKHRoaXMuY3VyX3VybCAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG50ZWFtX3VpZDogXCIgICsgKHRoaXMudGVhbV91aWQgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sY2tkOiBcIiAgICAgICsgKHRoaXMubG9jX2tpbmQgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sY25tOiBcIiAgICAgICsgKHRoaXMubG9jX25hbWUgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sY2lkOiBcIiAgICAgICsgKHRoaXMubG9jX3VpZCAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfeDogXCIgICAgICsgKHRoaXMubG9jX3Bvcz8ueCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfeTogXCIgICAgICsgKHRoaXMubG9jX3Bvcz8ueSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfejogXCIgICAgICsgKHRoaXMubG9jX3Bvcz8ueiA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfZDogXCIgICAgICsgKHRoaXMubG9jX3Bvcz8uZCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBJX0pTT04sIEpTT05fQW55IH0gZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX1BvaW50IGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgeD86IG51bWJlcixcclxuICAgIHk/OiBudW1iZXIsXHJcbiAgICB6PzogbnVtYmVyLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19Qb2ludCBpbXBsZW1lbnRzIElfSlNPTntcclxuICAgIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xyXG4gICAgcHVibGljIHo6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4PzogbnVtYmVyfENfUG9pbnR8SlNPTl9Qb2ludHx1bmRlZmluZWQsIHk/OiBudW1iZXIsIHo/OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB0aGlzLnkgPSB0aGlzLnogPSAtMztcclxuXHJcbiAgICAgICAgaWYgKHggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnggPSAwOyB0aGlzLnkgPSAwOyB0aGlzLnogPSAwO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgeSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgeiA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB4OyB0aGlzLnkgPSB5OyB0aGlzLnogPSB6O1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJvYmplY3RcIikgeyBcclxuICAgICAgICAgICAgaWYgKHggaW5zdGFuY2VvZiBDX1BvaW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSB4Lng7IHRoaXMueSA9IHgueTsgdGhpcy56ID0geC56O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWNvZGUoeCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy55ID0gdGhpcy56ID0gLTI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRfcCgpOiBDX1BvaW50IHtyZXR1cm4gbmV3IENfUG9pbnQodGhpcyl9IFxyXG4gICAgcHVibGljIHNldF9wKHA6IENfUG9pbnQpOiBDX1BvaW50fHVuZGVmaW5lZCB7XHJcbiAgICAgICAgdGhpcy54ID0gcC54OyB0aGlzLnkgPSBwLnk7IHRoaXMueiA9IHAuejtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNfZXhpc3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoeCA9PSB0aGlzLnggJiYgeSA9PSB0aGlzLnkgJiYgeiA9PSB0aGlzLnopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHdpdGhpbihwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChwLnggPT0gdGhpcy54ICYmIHAueSA9PSB0aGlzLnkgJiYgcC56ID09IHRoaXMueik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9Qb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHt4OiB0aGlzLngsIHk6IHRoaXMueSwgejogdGhpcy56fTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoYT86IEpTT05fUG9pbnQpOiBDX1BvaW50IHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAoYS54ID09PSB1bmRlZmluZWQgfHwgYS55ID09PSB1bmRlZmluZWQgfHwgYS56ID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHRoaXMueCA9IGEueDsgdGhpcy55ID0gYS55OyB0aGlzLnogPSBhLno7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX1BvaW50LCBKU09OX1BvaW50IH0gZnJvbSAnLi9DX1BvaW50JztcclxuaW1wb3J0IHtUX01ha2VFbnVtVHlwZX0gICAgICAgIGZyb20gXCIuLi9kX3V0bC9UX01ha2VFbnVtVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRfRGlyZWN0aW9uOntbZGlyOiBzdHJpbmddOiBudW1iZXJ9ID0ge1xyXG4gICAgTjogMCxcclxuICAgIEU6IDEsXHJcbiAgICBTOiAyLFxyXG4gICAgVzogMyxcclxuICAgIFg6IDk5XHJcbn0gYXMgY29uc3Q7XHJcbmV4cG9ydCB0eXBlIFRfRGlyZWN0aW9uID0gVF9NYWtlRW51bVR5cGU8dHlwZW9mIFRfRGlyZWN0aW9uPjtcclxuXHJcbmZ1bmN0aW9uIF9kaXJfa2V5KGRpcjogVF9EaXJlY3Rpb24gfCB1bmRlZmluZWQpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKFRfRGlyZWN0aW9uKS5maW5kKGtleSA9PiBUX0RpcmVjdGlvbltrZXldID09PSBkaXIpID8/IFwiPz8/P1wiO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX1BvaW50RGlyIGV4dGVuZHMgSlNPTl9Qb2ludCB7XHJcbiAgICBkPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfUERfaW5mbyhhOiBKU09OX1BvaW50RGlyfHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoXCJQb2ludERhdGEgSW5mbzpcIiBcclxuICAgICAgICArIFwiXFxueDogXCIgICAgICsgKGE/LnggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG55OiBcIiAgICAgKyAoYT8ueSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbno6IFwiICAgICArIChhPy56ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuZDogXCIgICAgICsgKGE/LmQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzICBDX1BvaW50RGlyIGV4dGVuZHMgQ19Qb2ludCB7XHJcbiAgICBwdWJsaWMgZDogVF9EaXJlY3Rpb247XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZD86IG51bWJlcnxUX0RpcmVjdGlvbnxDX1BvaW50RGlyfEpTT05fUG9pbnREaXIpIHtcclxuICAgICAgICBzdXBlcihkKTtcclxuICAgICAgICB0aGlzLmQgPSBUX0RpcmVjdGlvbi5YO1xyXG5cclxuICAgICAgICBpZiAoZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZCA9IGQgYXMgVF9EaXJlY3Rpb247XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChkIGluc3RhbmNlb2YgQ19Qb2ludERpcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kID0gZC5kIGFzIFRfRGlyZWN0aW9uO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWNvZGUoZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmQgPSBUX0RpcmVjdGlvbi5YO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfZF9tYl9uYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmQpIHtcclxuICAgICAgICAgICAgY2FzZSAwOiAgcmV0dXJuICfljJcnO1xyXG4gICAgICAgICAgICBjYXNlIDE6ICByZXR1cm4gJ+adsSc7XHJcbiAgICAgICAgICAgIGNhc2UgMjogIHJldHVybiAn5Y2XJztcclxuICAgICAgICAgICAgY2FzZSAzOiAgcmV0dXJuICfopb8nO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gJ+isjic7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldF9kKCk6IFRfRGlyZWN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9kKGQ6IFRfRGlyZWN0aW9uKTogQ19Qb2ludERpcnx1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICghKF9kaXJfa2V5KGQpIGluIFRfRGlyZWN0aW9uKSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmQgPSBkO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wZCgpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcGQoZDogQ19Qb2ludERpcnxKU09OX1BvaW50RGlyKTogQ19Qb2ludERpcnx1bmRlZmluZWQge1xyXG4gICAgICAgIGlmIChkIGluc3RhbmNlb2YgQ19Qb2ludERpcikge1xyXG4gICAgICAgICAgICBpZiAoIShfZGlyX2tleShkLmQpIGluIFRfRGlyZWN0aW9uKSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgc3VwZXIuc2V0X3AoZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZCA9IGQuZDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghKF9kaXJfa2V5KGQuZCkgaW4gVF9EaXJlY3Rpb24pKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZGVjb2RlKGQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9Qb2ludERpciB7XHJcbiAgICAgICAgY29uc3QgaiA9IHN1cGVyLmVuY29kZSgpIGFzIEpTT05fUG9pbnREaXI7XHJcbiAgICAgICAgai5kICAgICA9IHRoaXMuZCBhcyBudW1iZXI7XHJcbiAgICAgICAgcmV0dXJuIGo7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo/OiBKU09OX1BvaW50RGlyKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKCEoX2Rpcl9rZXkoai5kKSBpbiBUX0RpcmVjdGlvbikpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICBzdXBlci5kZWNvZGUoaik7XHJcbiAgICAgICAgdGhpcy5kID0gai5kIGFzIFRfRGlyZWN0aW9uO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWxlcnQoKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJQb2ludERhdGEgSW5mbzpcIiBcclxuICAgICAgICAgICAgKyBcIlxcbng6IFwiICAgICArICh0aGlzLnggPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxueTogXCIgICAgICsgKHRoaXMueSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG56OiBcIiAgICAgKyAodGhpcy56ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmQ6IFwiICAgICArICh0aGlzLmQgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImNsYXNzIENfUG9pbnQyRCB7XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gICAgcHVibGljIHk6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMueCAgPSB4O1xyXG4gICAgICAgIHRoaXMueSAgPSB5O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGlzX2V4aXN0KHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnggPT0geCkgJiYgKHRoaXMueSA9PSB5KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfUG9pbnRMaW5rMkQgZXh0ZW5kcyBDX1BvaW50MkQge1xyXG4gICAgcHVibGljIGRpOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgZGk6IG51bWJlciA9IC0xKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKHgsIHkpO1xyXG4gICAgICAgIHRoaXMuZGkgPSBkaTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgY2FzdChwOiBDX1BvaW50MkR8dW5kZWZpbmVkKTogQ19Qb2ludExpbmsyRHx1bmRlZmluZWQge1xyXG4gICAgICAgIGlmIChwPy54ID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKHA/LnkgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gcCBpbnN0YW5jZW9mIENfUG9pbnRMaW5rMkQgPyBwIDogbmV3IENfUG9pbnRMaW5rMkQocC54LCBwLnkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENfUG9pbnRTZXQyRCB7XHJcbiAgICBwdWJsaWMgc2V0OiBDX1BvaW50MkRbXSA9W107XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHB1YmxpYyBwdXNoKHA6IENfUG9pbnQyRCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0LnB1c2gocCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wb2ludCh4OiBudW1iZXIsIHk6IG51bWJlcik6IENfUG9pbnQyRHx1bmRlZmluZWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgcCBvZiB0aGlzLnNldCkge1xyXG4gICAgICAgICAgICBpZiAocD8uaXNfZXhpc3QoeCwgeSkpIHJldHVybiBwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkOyAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbW92ZShwOiBDX1BvaW50MkQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlbW92ZV94eShwLngsIHAueSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbW92ZV94eSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLnNldCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXRbaV0/LmlzX2V4aXN0KHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5zZXRbaV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldCA9IFsuLi50aGlzLnNldF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaXNfZXhpc3QoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHAgb2YgdGhpcy5zZXQpIGlmIChwPy5pc19leGlzdCh4LCB5KSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKlxyXG5jbGFzcyBQb2ludDNEIHtcclxuICAgIHB1YmxpYyBpbnQgJHg7XHJcbiAgICBwdWJsaWMgaW50ICR5O1xyXG4gICAgcHVibGljIGludCAkejtcclxuICAgIHB1YmxpYyBmdW5jdGlvbiBfX2NvbnN0cnVjdChpbnQgJHggPSAwLCBpbnQgJHkgPSAwLCBpbnQgJHogPSAwKVxyXG4gICAge1xyXG4gICAgICAgICR0aGlzLT54ICA9ICR4O1xyXG4gICAgICAgICR0aGlzLT55ICA9ICR5O1xyXG4gICAgICAgICR0aGlzLT56ICA9ICR6O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZ1bmN0aW9uIGlzX2V4aXN0KGludCAkeCwgaW50ICR5LCBpbnQgJHopOiBib29sIHtcclxuICAgICAgICByZXR1cm4gKCR0aGlzLT54ID09ICR4KSAmJiAoJHRoaXMtPnkgPT0gJHkpICYmICgkdGhpcy0+eiA9PSAkeik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZnVuY3Rpb24gd2l0aGluKFBvaW50M0QgJHApOiBib29sIHtcclxuICAgICAgICByZXR1cm4gJHRoaXMtPmlzX2V4aXN0KCRwLT54LCAkcC0+eSwgJHAtPnopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZ1bmN0aW9uIGVuY29kZSgpOiBhcnJheSB7XHJcbiAgICAgICAgJGEgPSBbXTtcclxuICAgICAgICAkYVsneCddID0gJHRoaXMtPng7XHJcbiAgICAgICAgJGFbJ3knXSA9ICR0aGlzLT55O1xyXG4gICAgICAgICRhWyd6J10gPSAkdGhpcy0+ejtcclxuXHJcbiAgICAgICAgcmV0dXJuICRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZ1bmN0aW9uIGRlY29kZShhcnJheSAkYSk6IFBvaW50M0Qge1xyXG4gICAgICAgIGlmICghaXNfbnVsbCgkYSkgJiYgaXNfYXJyYXkoJGEpKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGFycmF5X2tleV9leGlzdHMoJ3gnLCAkYSkgJiYgKGlzX251bWVyaWMoJGFbJ3gnXSkgJiYgJGFbJ3gnXSA+ICAwKVxyXG4gICAgICAgICAgICAmJiAgYXJyYXlfa2V5X2V4aXN0cygneScsICRhKSAmJiAoaXNfbnVtZXJpYygkYVsneSddKSAmJiAkYVsneSddID4gIDApXHJcbiAgICAgICAgICAgICYmICBhcnJheV9rZXlfZXhpc3RzKCd6JywgJGEpICYmIChpc19udW1lcmljKCRhWyd6J10pICYmICRhWyd6J10gPj0gMClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy0+eCA9ICRhWyd4J107XHJcbiAgICAgICAgICAgICAgICAkdGhpcy0+eSA9ICRhWyd5J107XHJcbiAgICAgICAgICAgICAgICAkdGhpcy0+eiA9ICRhWyd6J107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICR0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmdW5jdGlvbiBkZWNvZGVfYW5kX25ldyhhcnJheSAkYSk6IFBvaW50M0Qge1xyXG4gICAgICAgIGlmICghaXNfbnVsbCgkYSkgJiYgaXNfYXJyYXkoJGEpKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGFycmF5X2tleV9leGlzdHMoJ3gnLCAkYSkgJiYgKGlzX251bWVyaWMoJGFbJ3gnXSkgJiYgJGFbJ3gnXSA+ICAwKVxyXG4gICAgICAgICAgICAmJiAgYXJyYXlfa2V5X2V4aXN0cygneScsICRhKSAmJiAoaXNfbnVtZXJpYygkYVsneSddKSAmJiAkYVsneSddID4gIDApXHJcbiAgICAgICAgICAgICYmICBhcnJheV9rZXlfZXhpc3RzKCd6JywgJGEpICYmIChpc19udW1lcmljKCRhWyd6J10pICYmICRhWyd6J10gPj0gMClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50M0QoJGFbJ3gnXSwgJGFbJ3knXSwgJGFbJ3onXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludDNEKC0xLCAtMSwgLTEpO1xyXG4gICAgfVxyXG59XHJcbiovXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgX21heCwgX21pbiB9ICAgICAgICAgICBmcm9tIFwiLi4vZF91dGwvRl9NYXRoXCI7XHJcbmltcG9ydCB7IENfUG9pbnQsIEpTT05fUG9pbnQgfSAgZnJvbSBcIi4vQ19Qb2ludFwiO1xyXG5pbXBvcnQgeyBKU09OX0FueSB9ICAgICAgICAgICAgIGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9SYW5nZSBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIG1pbj86ICAgSlNPTl9Qb2ludCwgXHJcbiAgICBtYXg/OiAgIEpTT05fUG9pbnQsIFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19SYW5nZSB7XHJcbiAgICBwcm90ZWN0ZWQgbWluOiBDX1BvaW50O1xyXG4gICAgcHJvdGVjdGVkIG1heDogQ19Qb2ludDtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwMTogQ19Qb2ludCwgcDI6IENfUG9pbnQpIHtcclxuICAgICAgICB0aGlzLm1pbiAgPSBuZXcgQ19Qb2ludCgwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLm1heCAgPSBuZXcgQ19Qb2ludCgwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLl9pbml0KHAxLCBwMik7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX2luaXQocDE6IENfUG9pbnQsIHAyOiBDX1BvaW50KTogQ19SYW5nZSB7XHJcbiAgICAgICAgY29uc3QgbWluX3ggPSBfbWluKFtwMS54LCBwMi54XSk7XHJcbiAgICAgICAgY29uc3QgbWF4X3ggPSBfbWF4KFtwMS54LCBwMi54XSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1pbl95ID0gX21pbihbcDEueSwgcDIueV0pO1xyXG4gICAgICAgIGNvbnN0IG1heF95ID0gX21heChbcDEueSwgcDIueV0pO1xyXG5cclxuICAgICAgICBjb25zdCBtaW5feiA9IF9taW4oW3AxLnosIHAyLnpdKTtcclxuICAgICAgICBjb25zdCBtYXhfeiA9IF9tYXgoW3AxLnosIHAyLnpdKTtcclxuXHJcbiAgICAgICAgdGhpcy5taW4gID0gbmV3IENfUG9pbnQobWluX3gsIG1pbl95LCBtaW5feik7XHJcbiAgICAgICAgdGhpcy5tYXggID0gbmV3IENfUG9pbnQobWF4X3gsIG1heF95LCBtYXhfeik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3aXRoaW4oYTogQ19SYW5nZXxDX1BvaW50fG51bWJlciwgeT86IG51bWJlciwgej86IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgeSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgeiA9PT0gXCJudW1iZXJcIikgeyBcclxuICAgICAgICAgICAgaWYgKCBhIDwgdGhpcy5taW4ueCB8fCBhID4gdGhpcy5tYXgueCApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCB5IDwgdGhpcy5taW4ueSB8fCB5ID4gdGhpcy5tYXgueSApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCB6IDwgdGhpcy5taW4ueiB8fCB6ID4gdGhpcy5tYXgueiApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJvYmplY3RcIiAmJiBhIGluc3RhbmNlb2YgQ19Qb2ludCkgeyBcclxuICAgICAgICAgICAgY29uc3QgcCA9IGEgYXMgQ19Qb2ludDtcclxuICAgICAgICAgICAgaWYgKCBwLnggPCB0aGlzLm1pbi54IHx8IHAueCA+IHRoaXMubWF4LnggKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggcC55IDwgdGhpcy5taW4ueSB8fCBwLnkgPiB0aGlzLm1heC55ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIHAueiA8IHRoaXMubWluLnogfHwgcC56ID4gdGhpcy5tYXgueiApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJvYmplY3RcIiAmJiBhIGluc3RhbmNlb2YgQ19SYW5nZSkge1xyXG4gICAgICAgICAgICBjb25zdCBwID0gYSBhcyBDX1JhbmdlO1xyXG4gICAgICAgICAgICBpZiAoIHAubWluX3goKSA8IHRoaXMubWluLnggfHwgcC5tYXhfeCgpID4gdGhpcy5tYXgueCApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCBwLm1pbl95KCkgPCB0aGlzLm1pbi55IHx8IHAubWF4X3koKSA+IHRoaXMubWF4LnkgKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggcC5taW5feigpIDwgdGhpcy5taW4ueiB8fCBwLm1heF96KCkgPiB0aGlzLm1heC56ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG1pbl94KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1pbi54O31cclxuICAgIHB1YmxpYyBtYXhfeCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tYXgueDt9XHJcbiAgICBwdWJsaWMgbWluX3koKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWluLnk7fVxyXG4gICAgcHVibGljIG1heF95KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1heC55O31cclxuICAgIHB1YmxpYyBtaW5feigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5taW4uejt9XHJcbiAgICBwdWJsaWMgbWF4X3ooKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWF4Lno7fVxyXG4gICAgcHVibGljIHNpemVfeCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heC54IC0gdGhpcy5taW4ueCArIDE7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIHNpemVfeSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heC55IC0gdGhpcy5taW4ueSArIDE7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIHNpemVfeigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heC56IC0gdGhpcy5taW4ueiArIDE7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIGRvX2FsbF94eXooZm46ICh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKSA9PiBib29sZWFuKSB7XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IHRoaXMubWluLno7IHogPD0gdGhpcy5tYXguejsgeisrICkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gdGhpcy5taW4ueTsgeSA8PSB0aGlzLm1heC55OyB5KysgKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gdGhpcy5taW4ueDsgeSA8PSB0aGlzLm1heC54OyB4KysgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmbih4LCB5LCB6KSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRvX2FsbF9wKGZuOiAocDogQ19Qb2ludCkgPT4gYm9vbGVhbikge1xyXG4gICAgICAgIGZvciAodmFyIHogPSB0aGlzLm1pbi56OyB6IDw9IHRoaXMubWF4Lno7IHorKyApIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IHRoaXMubWluLnk7IHkgPD0gdGhpcy5tYXgueTsgeSsrICkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IHRoaXMubWluLng7IHkgPD0gdGhpcy5tYXgueDsgeCsrICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZm4obmV3IENfUG9pbnQoeCwgeSwgeikpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fUmFuZ2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1pbjogdGhpcy5taW4uZW5jb2RlKCksXHJcbiAgICAgICAgICAgIG1heDogdGhpcy5taW4uZW5jb2RlKCksXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShqOiBKU09OX1JhbmdlKTogQ19SYW5nZSB7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChqLm1pbiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAoai5tYXggPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgY29uc3QgcDEgPSBuZXcgQ19Qb2ludChqLm1pbik7XHJcbiAgICAgICAgY29uc3QgcDIgPSBuZXcgQ19Qb2ludChqLm1heCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luaXQocDEsIHAyKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX01hemUsIEpTT05fTWF6ZSwgYWxlcnRfbWF6ZV9pbmZvICB9ICBmcm9tIFwiLi9DX01hemVcIjtcclxuaW1wb3J0IHsgQ19HdWlsZCwgSlNPTl9HdWlsZCwgYWxlcnRfZ3VsZF9pbmZvIH0gZnJvbSBcIi4vQ19HdWlsZFwiO1xyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCwgSlNPTl9Nb3ZhYmxlUG9pbnQsIGFsZXJ0X212cHRfaW5mbyB9IGZyb20gXCIuL0NfTW92YWJsZVBvaW50XCI7XHJcbmltcG9ydCB7IENfVGVhbSwgSlNPTl9UZWFtLCBhbGVydF90ZWFtX2luZm8gIH0gIGZyb20gXCIuL0NfVGVhbVwiO1xyXG5pbXBvcnQgeyBDX1NhdmVJbmZvLCBJX0pTT04sIEpTT05fQW55LCBKU09OX1NhdmVJbmZvIH0gZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX1NhdmVEYXRhIGV4dGVuZHMgSlNPTl9TYXZlSW5mbyB7XHJcbiAgICBzYXZlX2lkPzogICBudW1iZXIsXHJcbiAgICBwbGF5ZXJfaWQ/OiBudW1iZXIsIFxyXG4gICAgdW5pcV9ubz86ICAgbnVtYmVyLFxyXG4gICAgdGl0bGU/OiAgICAgc3RyaW5nLFxyXG4gICAgZGV0YWlsPzogICAgc3RyaW5nLFxyXG4gICAgcG9pbnQ/OiAgICAgc3RyaW5nLFxyXG4gICAgYXV0b19tb2RlPzogc3RyaW5nLFxyXG4gICAgaXNfYWN0aXZlPzogc3RyaW5nLFxyXG4gICAgaXNfZGVsZXRlPzogc3RyaW5nLFxyXG4gICAgc2F2ZV90aW1lPzogc3RyaW5nLFxyXG5cclxuICAgIGFsbF9tdnB0PzogIEpTT05fTW92YWJsZVBvaW50W10sXHJcbiAgICBhbGxfbWF6ZT86ICBKU09OX01hemVbXSxcclxuICAgIGFsbF90ZWFtPzogIEpTT05fVGVhbVtdLFxyXG4gICAgYWxsX2d1bGQ/OiAgSlNPTl9HdWlsZFtdLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfc2F2ZV9pbmZvKGE6IEpTT05fU2F2ZURhdGF8dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydChcIlNhdmUgSW5mbzpcIiBcclxuICAgICAgICArIFwiXFxuc2F2ZV9pZDogICAgXCIgKyAoYS5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5wbGF5ZXJfaWQ6ICBcIiArIChhLnBsYXllcl9pZCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnVuaXFfbm86ICAgIFwiICsgKGEudW5pcV9ubyAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxudGl0bGU6ICAgICAgXCIgKyAoYS50aXRsZSAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5kZXRhaWw6ICAgICBcIiArIChhLmRldGFpbCAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnBvaW50OiAgICAgIFwiICsgKGEucG9pbnQgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuYXV0b19tb2RlOiAgXCIgKyAoYS5hdXRvX21vZGUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5pc19hY3RpdmU6ICBcIiArIChhLmlzX2FjdGl2ZSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmlzX2RlbGV0ZTogIFwiICsgKGEuaXNfZGVsZXRlID8/ICc/JylcclxuICAgICAgICArIFwiXFxubXZwdF9jb3VudDogXCIgKyAoYS5hbGxfbXZwdD8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICArIFwiXFxubWF6ZV9jb3VudDogXCIgKyAoYS5hbGxfbWF6ZT8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICArIFwiXFxuZ3VsZF9jb3VudDogXCIgKyAoYS5hbGxfZ3VsZD8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICArIFwiXFxudGVhbV9jb3VudDogXCIgKyAoYS5hbGxfdGVhbT8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9zYXZlX2RldGFpbChhOiBKU09OX1NhdmVEYXRhfHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgIHRyeSB7IFxyXG4vLyAgICAgICAgYWxlcnQoXCJTYXZlIERldGFpbChtdnB0KTpcIik7XHJcbiAgICAgICAgZm9yIChjb25zdCBtdnB0IG9mIGEuYWxsX212cHQ/P1tdKSBhbGVydF9tdnB0X2luZm8obXZwdCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHthbGVydCgnYWxlcnQgbXZwdCBlcnJvcjogJyArIGVycil9XHJcblxyXG4gICAgdHJ5IHsgXHJcbi8vICAgICAgICBhbGVydChcIlNhdmUgRGV0YWlsKHRlYW0pOlwiKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHRlYW0gb2YgYS5hbGxfdGVhbT8/W10pIGFsZXJ0X3RlYW1faW5mbyh0ZWFtKTtcclxuICAgIH0gY2F0Y2ggKGVycikge2FsZXJ0KCdhbGVydCB0ZWFtIGVycm9yOiAnICsgZXJyKX1cclxuXHJcbiAgICB0cnkgeyBcclxuLy8gICAgICAgIGFsZXJ0KFwiU2F2ZSBEZXRhaWwobWF6ZSk6XCIpO1xyXG4gICAgICAgIGZvciAoY29uc3QgbWF6ZSBvZiBhLmFsbF9tYXplPz9bXSkgYWxlcnRfbWF6ZV9pbmZvKG1hemUpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7YWxlcnQoJ2FsZXJ0IG1hemUgZXJyb3I6ICcgKyBlcnIpfVxyXG5cclxuICAgIHRyeSB7IFxyXG4vLyAgICAgICAgYWxlcnQoXCJTYXZlIERldGFpbChndWxkKTpcIik7XHJcbiAgICAgICAgZm9yIChjb25zdCBndWxkIG9mIGEuYWxsX2d1bGQ/P1tdKSBhbGVydF9ndWxkX2luZm8oZ3VsZCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHthbGVydCgnYWxlcnQgZ3VsZCBlcnJvcjogJyArIGVycil9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ19TYXZlRGF0YSBleHRlbmRzIENfU2F2ZUluZm8gaW1wbGVtZW50cyBJX0pTT04ge1xyXG5cclxuLypcclxuICAgIHB1YmxpYyBzYXZlX2lkOiAgIG51bWJlcjtcclxuICAgIHB1YmxpYyBwbGF5ZXJfaWQ6IG51bWJlcjsgXHJcbiAgICBwdWJsaWMgdW5pcV9ubzogICBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGl0bGU6ICAgICBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGV0YWlsOiAgICBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcG9pbnQ6ICAgICBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYXV0b19tb2RlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlzX2FjdGl2ZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc19kZWxldGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgc2F2ZV90aW1lOiBEYXRlO1xyXG4gICAgcHVibGljIG15cG9zOiAgICAgQ19Nb3ZhYmxlUG9pbnQ7XHJcbiovXHJcblxyXG4gICAgcHVibGljIGFsbF9tdnB0OiAge1t1aWQ6IHN0cmluZ106IENfTW92YWJsZVBvaW50fTtcclxuICAgIHB1YmxpYyBhbGxfbWF6ZTogIHtbdWlkOiBzdHJpbmddOiBDX01hemV9O1xyXG4gICAgcHVibGljIGFsbF90ZWFtOiAge1t1aWQ6IHN0cmluZ106IENfVGVhbX07XHJcbiAgICBwdWJsaWMgYWxsX2d1bGQ6ICB7W3VpZDogc3RyaW5nXTogQ19HdWlsZH07XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGE/OiBKU09OX1NhdmVEYXRhKSB7XHJcbiAgICAgICAgc3VwZXIoYSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWxsX212cHQgID0ge307XHJcbiAgICAgICAgdGhpcy5hbGxfbWF6ZSAgPSB7fTtcclxuICAgICAgICB0aGlzLmFsbF90ZWFtICA9IHt9XHJcbiAgICAgICAgdGhpcy5hbGxfZ3VsZCAgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBuZXcoYT86IEpTT05fU2F2ZURhdGEpOiBDX1NhdmVEYXRhIHtcclxuICAgICAgICByZXR1cm4gbmV3IENfU2F2ZURhdGEoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1NhdmVEYXRhIHtcclxuICAgICAgICBsZXQgc2F2ZV9kYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3Qgc2F2ZV9kYXRhICAgID0gc3VwZXIuZW5jb2RlKCkgYXMgSlNPTl9TYXZlRGF0YTtcclxuXHJcbiAgICAgICAgICAgIHNhdmVfZGF0YS5hbGxfbXZwdCA9IHRoaXMuX2VuY29kZV9hbGxfZGF0YSh0aGlzLmFsbF9tdnB0KTsgXHJcbiAgICAgICAgICAgIHNhdmVfZGF0YS5hbGxfbWF6ZSA9IHRoaXMuX2VuY29kZV9hbGxfZGF0YSh0aGlzLmFsbF9tYXplKTsgXHJcbiAgICAgICAgICAgIHNhdmVfZGF0YS5hbGxfdGVhbSA9IHRoaXMuX2VuY29kZV9hbGxfZGF0YSh0aGlzLmFsbF90ZWFtKTsgXHJcbiAgICAgICAgICAgIHNhdmVfZGF0YS5hbGxfZ3VsZCA9IHRoaXMuX2VuY29kZV9hbGxfZGF0YSh0aGlzLmFsbF9ndWxkKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzYXZlX2RhdGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdTYXZlRGF0YSBFbmNvZGUgRXJyb3I6ICcgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9lbmNvZGVfYWxsX2RhdGEoYWxsX2RhdGE6IHtbdWlkOnN0cmluZ106SV9KU09OfSk6IEpTT05fQW55W10ge1xyXG4gICAgICAgIGNvbnN0IGFsbF9KU09OOiBKU09OX0FueVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBhbGxfZGF0YSkgYWxsX0pTT04ucHVzaChhbGxfZGF0YVtpXS5lbmNvZGUoKSk7XHJcbiAgICAgICAgcmV0dXJuIGFsbF9KU09OO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWNvZGUoczogSlNPTl9TYXZlRGF0YSk6IENfU2F2ZURhdGEge1xyXG4gICAgICAgIHN1cGVyLmRlY29kZShzKTtcclxuXHJcbiAgICAgICAgaWYgKHMuYWxsX212cHQgICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxfbXZwdCA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGpzb25fbXZwdCBvZiBzLmFsbF9tdnB0KSB7XHJcbiAgICAgICAgICAgICAgICAgY29uc3QgbXZwdCA9IChuZXcgQ19Nb3ZhYmxlUG9pbnQoKSkuZGVjb2RlKGpzb25fbXZwdCk7IFxyXG4gICAgICAgICAgICAgICAgIHRoaXMuYWxsX212cHRbbXZwdC51aWQoKV0gPSBtdnB0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZiAocy5hbGxfbWF6ZSAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsbF9tYXplID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl9tYXplIG9mIHMuYWxsX21hemUpIHtcclxuICAgICAgICAgICAgICAgICBjb25zdCBtYXplID0gKG5ldyBDX01hemUoKSkuZGVjb2RlKGpzb25fbWF6ZSk7IFxyXG4gICAgICAgICAgICAgICAgIHRoaXMuYWxsX21hemVbbWF6ZS51aWQoKV0gPSBtYXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZiAocy5hbGxfdGVhbSAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsbF90ZWFtID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl90ZWFtIG9mIHMuYWxsX3RlYW0pIHtcclxuICAgICAgICAgICAgICAgICBjb25zdCB0ZWFtID0gKG5ldyBDX1RlYW0oKSkuZGVjb2RlKGpzb25fdGVhbSk7IFxyXG4gICAgICAgICAgICAgICAgIHRoaXMuYWxsX3RlYW1bdGVhbS51aWQoKV0gPSB0ZWFtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZiAocy5hbGxfZ3VsZCAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsbF9ndWxkID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl9ndWxkIG9mIHMuYWxsX2d1bGQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGd1bGQgPSAobmV3IENfR3VpbGQoKSkuZGVjb2RlKGpzb25fZ3VsZCk7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxfZ3VsZFtndWxkLnVpZCgpXSA9IGd1bGQ7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIlNhdmUgSW5mbzpcIiBcclxuICAgICAgICAgICAgKyBcIlxcbnNhdmVfaWQ6ICAgIFwiICsgKHRoaXMuc2F2ZV9pZCAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnBsYXllcl9pZDogIFwiICsgKHRoaXMucGxheWVyX2lkID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnVuaXFfbm86ICAgIFwiICsgKHRoaXMudW5pcV9ubyAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnRpdGxlOiAgICAgIFwiICsgKHRoaXMudGl0bGUgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmRldGFpbDogICAgIFwiICsgKHRoaXMuZGV0YWlsICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnBvaW50OiAgICAgIFwiICsgKHRoaXMucG9pbnQgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmF1dG9fbW9kZTogIFwiICsgKHRoaXMuYXV0b19tb2RlPydZJzonTicpXHJcbiAgICAgICAgICAgICsgXCJcXG5pc19hY3RpdmU6ICBcIiArICh0aGlzLmlzX2FjdGl2ZT8nWSc6J04nKVxyXG4gICAgICAgICAgICArIFwiXFxuaXNfZGVsZXRlOiAgXCIgKyAodGhpcy5pc19kZWxldGU/J1knOidOJylcclxuICAgICAgICAgICAgKyBcIlxcbm12cHRfY291bnQ6IFwiICsgKHRoaXMuYWxsX212cHQ/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5tYXplX2NvdW50OiBcIiArICh0aGlzLmFsbF9tYXplPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuZ3VsZF9jb3VudDogXCIgKyAodGhpcy5hbGxfZ3VsZD8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnRlYW1fY291bnQ6IFwiICsgKHRoaXMuYWxsX3RlYW0/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFsZXJ0X2RldGFpbCgpOiB2b2lkIHtcclxuICAgICAgICB0cnkgeyBcclxuLy8gICAgICAgICAgICBhbGVydChcIlNhdmUgRGV0YWlsKG12cHQpOlwiKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpaSBpbiB0aGlzLmFsbF9tdnB0KSB0aGlzLmFsbF9tdnB0W2lpXS5hbGVydCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge2FsZXJ0KCdhbGVydCBtdnB0IGVycm9yOiAnICsgZXJyKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgdHJ5IHsgXHJcbi8vICAgICAgICAgICAgYWxlcnQoXCJTYXZlIERldGFpbCh0ZWFtKTpcIik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWkgaW4gdGhpcy5hbGxfdGVhbSkgdGhpcy5hbGxfdGVhbVtpaV0uYWxlcnQoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHthbGVydCgnYWxlcnQgdGVhbSBlcnJvcjogJyArIGVycil9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHRyeSB7IFxyXG4vLyAgICAgICAgICAgIGFsZXJ0KFwiU2F2ZSBEZXRhaWwobWF6ZSk6XCIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHRoaXMuYWxsX21hemUpIHRoaXMuYWxsX21hemVbaWldLmFsZXJ0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7YWxlcnQoJ2FsZXJ0IG1hemUgZXJyb3I6ICcgKyBlcnIpfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB0cnkgeyBcclxuLy8gICAgICAgICAgICBhbGVydChcIlNhdmUgRGV0YWlsKGd1bGQpOlwiKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpaSBpbiB0aGlzLmFsbF9ndWxkKSB0aGlzLmFsbF9ndWxkW2lpXS5hbGVydCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge2FsZXJ0KCdhbGVydCBndWxkIGVycm9yOiAnICsgZXJyKX1cclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCwgSlNPTl9Nb3ZhYmxlUG9pbnQgfSBmcm9tIFwiLi9DX01vdmFibGVQb2ludFwiO1xyXG5cclxuLy8g44K144O844OQ44O85YG044Go44KE44KK44Go44KK44GZ44KLSlNPTuW9ouW8j+ODh+ODvOOCv+OBruODhuODs+ODl+ODrOODvOODiFxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fQW55IHtcclxuICAgIFtrZXk6IHN0cmluZ106IGFueVxyXG59XHJcblxyXG4vLyDjgrXjg7zjg5Djg7zlgbTjgajjgoTjgorjgajjgorjgZnjgovjgq/jg6njgrnjgavlv4XopoHjgarjg6Hjgr3jg4Pjg4lcclxuZXhwb3J0IGludGVyZmFjZSBJX0pTT04ge1xyXG4gICAgZW5jb2RlOiAoKT0+SlNPTl9BbnksXHJcbiAgICBkZWNvZGU6IChqOkpTT05fQW55KT0+SV9KU09OLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElfSlNPTl9VbmlxIGV4dGVuZHMgSV9KU09OIHtcclxuICAgIHVpZDogKCk9PnN0cmluZyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJX0Fic3RyYWN0IHtcclxuICAgIG5ld09iajogKGo/OkpTT05fQW55KT0+SV9BYnN0cmFjdHx1bmRlZmluZWQsXHJcbiAgICBlbmNvZGU6ICgpPT5KU09OX0FueSxcclxuLy8gIHN0YXRpYyBkZWNvZGU6IChqOkpTT05fQW55KT0+SV9KU09OLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElfSlNPTl9DbGFzcyB7XHJcbiAgICBuZXc6IChqPzogSlNPTl9BbnkpPT5JX0pTT04sXHJcbn1cclxuXHJcbi8vIOOCteODvOODkOODvOWBtOOBqOOChOOCiuWPluOCiuOBmeOCi+mam+OBq+iHqui6q+OCkuaWh+Wtl+WIl+WMluOBmeOCi+OCr+ODqeOCueOBruODoeOCveODg+ODiVxyXG5leHBvcnQgaW50ZXJmYWNlIElfSlNPTlZhbHVlIGV4dGVuZHMgSV9KU09Oe1xyXG4gICAgZnJvbUpTT046ICgpPT52b2lkLFxyXG4gICAgdG9KU09OOiAgICgpPT52b2lkLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fU2F2ZUluZm8gZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBzYXZlX2lkPzogICBudW1iZXIsXHJcbiAgICBwbGF5ZXJfaWQ/OiBudW1iZXIsIFxyXG4gICAgdW5pcV9ubz86ICAgbnVtYmVyLFxyXG4gICAgdGl0bGU/OiAgICAgc3RyaW5nLFxyXG4gICAgZGV0YWlsPzogICAgc3RyaW5nLFxyXG4gICAgcG9pbnQ/OiAgICAgc3RyaW5nLFxyXG4gICAgYXV0b19tb2RlPzogc3RyaW5nLFxyXG4gICAgaXNfYWN0aXZlPzogc3RyaW5nLFxyXG4gICAgaXNfZGVsZXRlPzogc3RyaW5nLFxyXG4gICAgc2F2ZV90aW1lPzogc3RyaW5nLFxyXG4gICAgbXlwb3M/OiAgICAgSlNPTl9Nb3ZhYmxlUG9pbnQsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9zYXZlaW5mb19pbmZvKGE6IEpTT05fU2F2ZUluZm98dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydChcIlNhdmUgSW5mbzpcIiBcclxuICAgICAgICArIFwiXFxuc2F2ZV9pZDogICAgXCIgKyAoYS5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5wbGF5ZXJfaWQ6ICBcIiArIChhLnBsYXllcl9pZCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnVuaXFfbm86ICAgIFwiICsgKGEudW5pcV9ubyAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxudGl0bGU6ICAgICAgXCIgKyAoYS50aXRsZSAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5kZXRhaWw6ICAgICBcIiArIChhLmRldGFpbCAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnBvaW50OiAgICAgIFwiICsgKGEucG9pbnQgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuYXV0b19tb2RlOiAgXCIgKyAoYS5hdXRvX21vZGUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5pc19hY3RpdmU6ICBcIiArIChhLmlzX2FjdGl2ZSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmlzX2RlbGV0ZTogIFwiICsgKGEuaXNfZGVsZXRlID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2F2ZV90aW1lOiAgXCIgKyAoYS5zYXZlX3RpbWUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5teXVybDogICAgICBcIiArIChhLm15cG9zPy5jdXJfdXJsICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG50ZWFtX3VpZDogICBcIiArIChhLm15cG9zPy50ZWFtX3VpZCAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sb2Nfa2luZDogICBcIiArIChhLm15cG9zPy5raW5kICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sb2NfbmFtZTogICBcIiArIChhLm15cG9zPy5uYW1lICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sb2NfdWlkOiAgICBcIiArIChhLm15cG9zPy5sb2NfdWlkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfU2F2ZUluZm8gaW1wbGVtZW50cyBJX0pTT04ge1xyXG4gICAgcHVibGljIHNhdmVfaWQ6ICAgbnVtYmVyO1xyXG4gICAgcHVibGljIHBsYXllcl9pZDogbnVtYmVyOyBcclxuICAgIHB1YmxpYyB1bmlxX25vOiAgIG51bWJlcjtcclxuICAgIHB1YmxpYyB0aXRsZTogICAgIHN0cmluZztcclxuICAgIHB1YmxpYyBkZXRhaWw6ICAgIHN0cmluZztcclxuICAgIHB1YmxpYyBwb2ludDogICAgIHN0cmluZztcclxuICAgIHB1YmxpYyBhdXRvX21vZGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaXNfYWN0aXZlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlzX2RlbGV0ZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBzYXZlX3RpbWU6IERhdGU7XHJcbiAgICBwdWJsaWMgbXlwb3M6ICAgICBDX01vdmFibGVQb2ludDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYT86IEpTT05fU2F2ZUluZm8pIHtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgICA9IC0xO1xyXG4gICAgICAgIHRoaXMucGxheWVyX2lkID0gLTE7IFxyXG4gICAgICAgIHRoaXMudW5pcV9ubyAgID0gLTE7XHJcbiAgICAgICAgdGhpcy50aXRsZSAgICAgPSAnJztcclxuICAgICAgICB0aGlzLmRldGFpbCAgICA9ICcnO1xyXG4gICAgICAgIHRoaXMucG9pbnQgICAgID0gJyc7XHJcbiAgICAgICAgdGhpcy5hdXRvX21vZGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzX2FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc19kZWxldGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNhdmVfdGltZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMubXlwb3MgICAgID0gbmV3IENfTW92YWJsZVBvaW50KCk7XHJcblxyXG4gICAgICAgIGlmIChhICE9PSB1bmRlZmluZWQpIHRoaXMuZGVjb2RlKGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbmV3KGE/OiBKU09OX1NhdmVJbmZvKTogQ19TYXZlSW5mbyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX1NhdmVJbmZvKGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9TYXZlSW5mbyB7XHJcbiAgICAgICAgbGV0IHNhdmVfZGF0ZTogc3RyaW5nO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHNhdmVfZGF0ZSA9IHRoaXMuc2F2ZV90aW1lLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHNhdmVfZGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzYXZlX2lkOiAgIHRoaXMuc2F2ZV9pZCwgXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJfaWQ6IHRoaXMucGxheWVyX2lkLCAgXHJcbiAgICAgICAgICAgICAgICB1bmlxX25vOiAgIHRoaXMudW5pcV9ubywgXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogICAgIHRoaXMudGl0bGUsIFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiAgICB0aGlzLmRldGFpbCwgXHJcbiAgICAgICAgICAgICAgICBwb2ludDogICAgIHRoaXMucG9pbnQsIFxyXG4gICAgICAgICAgICAgICAgYXV0b19tb2RlOiB0aGlzLmF1dG9fbW9kZSA/ICcxJyA6ICcwJywgXHJcbiAgICAgICAgICAgICAgICBpc19hY3RpdmU6IHRoaXMuaXNfYWN0aXZlID8gJzEnIDogJzAnLCBcclxuICAgICAgICAgICAgICAgIGlzX2RlbGV0ZTogdGhpcy5pc19kZWxldGUgPyAnMScgOiAnMCcsIFxyXG4gICAgICAgICAgICAgICAgc2F2ZV90aW1lOiBzYXZlX2RhdGUsIFxyXG4gICAgICAgICAgICAgICAgbXlwb3M6ICAgICB0aGlzLm15cG9zLmVuY29kZSgpLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdTYXZlRGF0YSBFbmNvZGUgRXJyb3I6ICcgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWNvZGUoczogSlNPTl9TYXZlSW5mbyk6IENfU2F2ZUluZm8ge1xyXG4gICAgICAgIHRoaXMuc2F2ZV9pZCAgID0gcy5zYXZlX2lkICAgPz8gdGhpcy5zYXZlX2lkO1xyXG4gICAgICAgIHRoaXMucGxheWVyX2lkID0gcy5wbGF5ZXJfaWQgPz8gdGhpcy5wbGF5ZXJfaWQ7IFxyXG4gICAgICAgIHRoaXMudW5pcV9ubyAgID0gcy51bmlxX25vICAgPz8gdGhpcy51bmlxX25vO1xyXG4gICAgICAgIHRoaXMudGl0bGUgICAgID0gcy50aXRsZSAgICAgPz8gdGhpcy50aXRsZTtcclxuICAgICAgICB0aGlzLmRldGFpbCAgICA9IHMuZGV0YWlsICAgID8/IHRoaXMuZGV0YWlsO1xyXG4gICAgICAgIHRoaXMucG9pbnQgICAgID0gcy5wb2ludCAgICAgPz8gdGhpcy5wb2ludDtcclxuICAgICAgICBpZiAocy5hdXRvX21vZGUgPT09IHVuZGVmaW5lZCkgdGhpcy5hdXRvX21vZGU7IGVsc2Ugcy5hdXRvX21vZGUgIT09ICcwJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBpZiAocy5pc19hY3RpdmUgPT09IHVuZGVmaW5lZCkgdGhpcy5pc19hY3RpdmU7IGVsc2Ugcy5pc19hY3RpdmUgIT09ICcwJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBpZiAocy5pc19kZWxldGUgPT09IHVuZGVmaW5lZCkgdGhpcy5pc19kZWxldGU7IGVsc2Ugcy5pc19kZWxldGUgIT09ICcwJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBpZiAocy5zYXZlX3RpbWUgIT09IHVuZGVmaW5lZCkgdGhpcy5zYXZlX3RpbWUgPSBuZXcgRGF0ZShzLnNhdmVfdGltZSk7IFxyXG5cclxuICAgICAgICBpZiAocy5teXBvcyAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teXBvcy5kZWNvZGUocy5teXBvcyk7IFxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGFsZXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiU2F2ZUluZm8gREFUQTpcIiBcclxuICAgICAgICAgICAgKyBcIlxcbnNhdmVfaWQ6ICAgIFwiICsgKHRoaXMuc2F2ZV9pZCAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnBsYXllcl9pZDogIFwiICsgKHRoaXMucGxheWVyX2lkID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnVuaXFfbm86ICAgIFwiICsgKHRoaXMudW5pcV9ubyAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnRpdGxlOiAgICAgIFwiICsgKHRoaXMudGl0bGUgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmRldGFpbDogICAgIFwiICsgKHRoaXMuZGV0YWlsICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnBvaW50OiAgICAgIFwiICsgKHRoaXMucG9pbnQgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmF1dG9fbW9kZTogIFwiICsgKHRoaXMuYXV0b19tb2RlPydZJzonTicpXHJcbiAgICAgICAgICAgICsgXCJcXG5pc19hY3RpdmU6ICBcIiArICh0aGlzLmlzX2FjdGl2ZT8nWSc6J04nKVxyXG4gICAgICAgICAgICArIFwiXFxuaXNfZGVsZXRlOiAgXCIgKyAodGhpcy5pc19kZWxldGU/J1knOidOJylcclxuICAgICAgICAgICAgKyBcIlxcbm15dXJsOiAgICAgIFwiICsgKHRoaXMubXlwb3MudXJsKCkgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG50ZWFtX3VpZDogICBcIiArICh0aGlzLm15cG9zLnRpZCgpICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubG9jX2tpbmQ6ICAgXCIgKyAodGhpcy5teXBvcy5nZXRfbGNrZCgpID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxvY19uYW1lOiAgIFwiICsgKHRoaXMubXlwb3MuZ2V0X25hbWUoKSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sb2NfdWlkOiAgICBcIiArICh0aGlzLm15cG9zLmdldF91aWQoKSAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ19Qb2ludCB9ICAgICAgICAgICAgICAgZnJvbSBcIi4vQ19Qb2ludFwiO1xyXG5pbXBvcnQgeyBDX1BvaW50RGlyIH0gICAgICAgICAgICBmcm9tICcuL0NfUG9pbnREaXInO1xyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCB9ICAgICAgICBmcm9tIFwiLi9DX01vdmFibGVQb2ludFwiO1xyXG5pbXBvcnQgeyBDX1dhbGtlciwgSlNPTl9XYWxrZXIgfSBmcm9tIFwiLi9DX1dhbGtlclwiO1xyXG5pbXBvcnQgeyBDX0hlcm8sIEpTT05fSGVybyB9ICAgICBmcm9tIFwiLi9DX0hlcm9cIjtcclxuaW1wb3J0IHsgSV9NYXplT2JqIH0gICAgICAgICAgICAgZnJvbSBcIi4vQ19NYXplT2JqXCI7XHJcbmltcG9ydCB7IEpTT05fQW55IH0gICAgICAgICAgICAgIGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuaW1wb3J0IHsgQ19DdXJyZW50VGVhbVZpZXcgfSAgICAgZnJvbSBcIi4vQ19UZWFtVmlld1wiO1xyXG5pbXBvcnQgeyBJX01hemVPYmpWaWV3LCBKU09OX01hemVPYmpWaWV3IH0gIGZyb20gXCIuL0NfTWF6ZU9ialZpZXdcIjtcclxuaW1wb3J0IHsgQ19Hb29kLCAgVF9Hb29kS2luZCB9ICAgZnJvbSBcIi4vQ19Hb29kXCI7XHJcbmltcG9ydCB7IENfR29vZHNMaXN0LCBKU09OX0dvb2RzTGlzdCB9IGZyb20gXCIuL0NfR29vZHNMaXN0TkdcIjtcclxuaW1wb3J0IHsgX2dldF91dWlkIH0gICAgICAgICAgICAgZnJvbSBcIi4uL2RfdXRsL0ZfUmFuZFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX1RlYW0gZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBpZD86ICAgICAgICBudW1iZXIsIFxyXG4gICAgdW5pcV9pZD86ICAgc3RyaW5nLCBcclxuICAgIHNhdmVfaWQ/OiAgIG51bWJlciwgXHJcbiAgICBuYW1lPzogICAgICBzdHJpbmcsIFxyXG4gICAgbG9jYXRlPzogICAgSlNPTl9XYWxrZXIsXHJcbiAgICBnb2xkPzogICAgICBudW1iZXIsXHJcbi8vICAgIGdvb2RzPzogICAgIEpTT05fR29vZHNMaXN0LFxyXG4gICAgaGVyb2VzPzogICAgSlNPTl9IZXJvW10sIFxyXG4gICAgbW90aW9uPzogICAgc3RyaW5nLFxyXG4gICAgdmlldz86ICAgICAgSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF90ZWFtX2luZm8oYTogSlNPTl9UZWFtfHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoXCJUZWFtIEluZm86XCIgXHJcbiAgICAgICAgKyBcIlxcbmlkOiAgICBcIiAgICAgKyAoYS5pZCAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG51bmlxX2lkOiAgXCIgICsgKGEudW5pcV9pZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubmFtZTogIFwiICAgICArIChhLm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNhdmVfaWQ6IFwiICAgKyAoYS5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG51cmw6ICBcIiAgICAgICsgKGEubG9jYXRlPy5jdXJfdXJsICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubGNrZDogXCIgICAgICArIChhLmxvY2F0ZT8ua2luZCAgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxjbm06IFwiICAgICAgKyAoYS5sb2NhdGU/Lm5hbWUgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sY2lkOiBcIiAgICAgICsgKGEubG9jYXRlPy5sb2NfdWlkICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3g6IFwiICAgICArIChhLmxvY2F0ZT8ubG9jX3Bvcz8ueCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl95OiBcIiAgICAgKyAoYS5sb2NhdGU/LmxvY19wb3M/LnkgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfejogXCIgICAgICsgKGEubG9jYXRlPy5sb2NfcG9zPy56ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX2Q6IFwiICAgICArIChhLmxvY2F0ZT8ubG9jX3Bvcz8uZCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmdvbGQ6IFwiICAgICAgKyAoYS5nb2xkICAgICAgPz8gIDAgKVxyXG4vLyAgICAgICAgKyBcIlxcbmdvb2RzOiBcIiAgICAgKyAoT2JqZWN0LmtleXMoYS5nb29kcz8/W10pLmxlbmd0aClcclxuICAgICAgICArIFwiXFxuaGVyb2VzOiBcIiAgICArIChhLmhlcm9lcz8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcblxyXG4vLyAgICBpZiAoYS5oZXJvZXMgIT09IHVuZGVmaW5lZCkgYWxlcnRfaGVyb2VzX2luZm8oYS5oZXJvZXMpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENfVGVhbSBpbXBsZW1lbnRzIElfTWF6ZU9iaiB7XHJcbiAgICBwdWJsaWMgc3RhdGljIG5ld09iaihqPzogSlNPTl9UZWFtKTogQ19UZWFtIHtcclxuICAgICAgICByZXR1cm4gbmV3IENfVGVhbShqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBuZXdPYmooaj86IEpTT05fVGVhbSk6IENfVGVhbSB7cmV0dXJuIENfVGVhbS5uZXdPYmooaik7fVxyXG5cclxuICAgIHByb3RlY3RlZCBteV9pZDogICAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBteV9uYW1lOiAgIHN0cmluZztcclxuICAgIHByb3RlY3RlZCB1bmlxX2lkOiAgIHN0cmluZztcclxuICAgIHByb3RlY3RlZCBzYXZlX2lkOiAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCB3YWxrZXI6ICAgIENfV2Fsa2VyO1xyXG4gICAgcHJvdGVjdGVkIGdvbGQ6ICAgICAgbnVtYmVyO1xyXG4vLyAgICBwcm90ZWN0ZWQgZ29vZHM6ICAgICBDX0dvb2RzTGlzdDtcclxuICAgIHByb3RlY3RlZCBoZXJvZXM6ICAgIHtbdWlkOiBzdHJpbmddOiBDX0hlcm99O1xyXG5cclxuICAgIHByb3RlY3RlZCBteVZpZXc6ICAgIElfTWF6ZU9ialZpZXd8dW5kZWZpbmVkO1xyXG4gICAgcHJvdGVjdGVkIGhvcGVfbW90aW9uOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX1RlYW0pIHtcclxuXHJcbiAgICAgICAgdGhpcy5teV9pZCAgICAgPSAgMDtcclxuICAgICAgICB0aGlzLm15X25hbWUgICA9ICdOZW8gVGVhbT8nO1xyXG4gICAgICAgIHRoaXMudW5pcV9pZCAgID0gJ21haV90ZWFtIycgKyBfZ2V0X3V1aWQoKTtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgICA9ICAwO1xyXG5cclxuICAgICAgICB0aGlzLm15VmlldyA9IG5ldyBDX0N1cnJlbnRUZWFtVmlldyh0aGlzKSBhcyBJX01hemVPYmpWaWV3O1xyXG4gICAgICAgIHRoaXMud2Fsa2VyID0gbmV3IENfV2Fsa2VyKCk7XHJcbiAgICAgICAgdGhpcy53YWxrZXIuc2V0X3RpZCh0aGlzLnVpZCgpKTtcclxuXHJcbiAgICAgICAgdGhpcy5nb2xkICAgPSAwO1xyXG4vLyAgICAgICAgdGhpcy5nb29kcyAgPSBuZXcgQ19Hb29kc0xpc3QoKTtcclxuICAgICAgICB0aGlzLmhlcm9lcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuaG9wZV9tb3Rpb24gPSAnTk9QJzsgICAgXHJcbiAgICAgICAgaWYgKGogIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BycChhcmcgOiBKU09OX1RlYW0pIHtcclxuICAgICAgICB0aGlzLmRlY29kZShhcmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1aWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudW5pcV9pZH1cclxuXHJcbiAgICBwdWJsaWMgd2l0aGluKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBoZXJlID0gdGhpcy53YWxrZXI/LmdldF9wKCk7XHJcbiAgICAgICAgcmV0dXJuIGhlcmU/LndpdGhpbihwKSA/PyBmYWxzZTsgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpZXcoKTogIElfTWF6ZU9ialZpZXd8dW5kZWZpbmVkIHtyZXR1cm4gdGhpcy5teVZpZXd9XHJcbiAgICBwdWJsaWMgd2FsaygpOiAgQ19XYWxrZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndhbGtlclxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgY2FuVGhyb3VnaCgpOiBib29sZWFuIHtyZXR1cm4gdHJ1ZX1cclxuXHJcblxyXG4gICAgcHVibGljIGhyZXMoKTogIENfSGVyb1tdIHtcclxuICAgICAgICBjb25zdCBocmVzOiBDX0hlcm9bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGlpIGluIHRoaXMuaGVyb2VzKSBocmVzLnB1c2godGhpcy5oZXJvZXNbaWldKTtcclxuICAgICAgICByZXR1cm4gaHJlcztcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgY2xlYXJfaHJlcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlcm9lcyA9IHt9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFkZF9oZXJvKGhlcm86IENfSGVybyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGVyb2VzW2hlcm8udWlkKCldID0gaGVybztcclxuICAgIH1cclxuICAgIHB1YmxpYyBybXZfaGVybyhoZXJvOiBDX0hlcm8pOiB2b2lkIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5oZXJvZXNbaGVyby51aWQoKV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldF9sb2MoKTogQ19Nb3ZhYmxlUG9pbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndhbGtlcjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfbG9jKGxvYzogQ19Nb3ZhYmxlUG9pbnQpOiB2b2lkIHtcclxuICAgICAgICAodGhpcy53YWxrZXIgPz89IG5ldyBDX1dhbGtlcigpKS5kZWNvZGUobG9jLmVuY29kZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X3BkKCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndhbGtlci5nZXRfcGQoKTtcclxuICAgIH1cclxuXHJcbi8qXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fb2JqX3RvX3N0cmluZyhvYTogQ19UZWFtKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2EsIG51bGwsIFwiXFx0XCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX29iakFycmF5X3RvX3N0cmluZyhvYWE6IHtbdWlkOiBzdHJpbmddOiBDX1RlYW19KTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBvYSA9IFtdIGFzIENfVGVhbVtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gb2FhKSBvYS5wdXNoKG9hYVtpaV0pO1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYSwgbnVsbCwgXCJcXHRcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fc3RyaW5nX3RvX29iaih0eHQ6IHN0cmluZyk6IENfVGVhbSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaiAgID0gSlNPTi5wYXJzZSh0eHQpIGFzIENfVGVhbVtdO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENfVGVhbShqKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDX1RlYW0oKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ190b19vYmpBcnJheSh0eHQ6IHN0cmluZyk6IHtbdWlkOiBzdHJpbmddOiBDX1RlYW19IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqICAgPSBKU09OLnBhcnNlKHR4dCkgYXMgSlNPTl9UZWFtW107XHJcbiAgICAgICAgICAgIGNvbnN0IG1wYSA9IHt9IGFzIHtbaWQ6IHN0cmluZ106IENfVGVhbX07XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgamogb2Ygaikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWFhID0gbmV3IENfVGVhbSgpLmRlY29kZShqaik7XHJcbiAgICAgICAgICAgICAgICBtcGFbYWFhLnVpZCgpXSA9IGFhYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbXBhO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuKi9cclxuICAgIFxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1RlYW0ge1xyXG4gICAgICAgIHRoaXMuZ2V0X2xvYygpOyAvLyBMb2NhdGlvbuaDheWgseOCkuacgOaWsOOBq+abtOaWsFxyXG5cclxuICAgICAgICBjb25zdCBqc29uX2hlcm9lczogSlNPTl9IZXJvW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpaSBpbiB0aGlzLmhlcm9lcykganNvbl9oZXJvZXMucHVzaCh0aGlzLmhlcm9lc1tpaV0uZW5jb2RlKCkpOyAgXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgICAgdGhpcy5teV9pZCxcclxuICAgICAgICAgICAgbmFtZTogICAgICB0aGlzLm15X25hbWUsXHJcbiAgICAgICAgICAgIHVuaXFfaWQ6ICAgdGhpcy51bmlxX2lkLFxyXG4gICAgICAgICAgICBzYXZlX2lkOiAgIHRoaXMuc2F2ZV9pZCxcclxuICAgICAgICAgICAgbG9jYXRlOiAgICB0aGlzLndhbGtlci5lbmNvZGUoKSxcclxuICAgICAgICAgICAgZ29sZDogICAgICB0aGlzLmdvbGQsXHJcbi8vICAgICAgICAgICAgZ29vZHM6ICAgICB0aGlzLmdvb2RzLmVuY29kZSgpLFxyXG4gICAgICAgICAgICBoZXJvZXM6ICAgIGpzb25faGVyb2VzLFxyXG4gICAgICAgICAgICBtb3Rpb246ICAgIHRoaXMuaG9wZV9tb3Rpb24sXHJcbiAgICAgICAgICAgIHZpZXc6ICAgICAgdGhpcy5teVZpZXc/LmVuY29kZSgpID8/IHt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IEpTT05fVGVhbXx1bmRlZmluZWQpOiBDX1RlYW0ge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpICByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGEuaWQgICAhPT0gdW5kZWZpbmVkKSAgICB0aGlzLm15X2lkICAgICAgID0gYS5pZDtcclxuICAgICAgICBpZiAoYS5uYW1lICE9PSB1bmRlZmluZWQpICAgIHRoaXMubXlfbmFtZSAgICAgPSBhLm5hbWU7XHJcbiAgICAgICAgaWYgKGEudW5pcV9pZCAhPT0gdW5kZWZpbmVkKSB0aGlzLnVuaXFfaWQgICAgID0gYS51bmlxX2lkO1xyXG4gICAgICAgIGlmIChhLnNhdmVfaWQgIT09IHVuZGVmaW5lZCkgdGhpcy5zYXZlX2lkICAgICA9IGEuc2F2ZV9pZDtcclxuICAgICAgICBpZiAoYS5tb3Rpb24gIT09IHVuZGVmaW5lZCkgIHRoaXMuaG9wZV9tb3Rpb24gPSBhLm1vdGlvbjtcclxuXHJcbiAgICAgICAgaWYgKGEubG9jYXRlICE9PSB1bmRlZmluZWQpICB0aGlzLndhbGtlci5kZWNvZGUoYS5sb2NhdGUpO1xyXG4gICAgICAgIGlmIChhLmdvbGQgICAhPT0gdW5kZWZpbmVkKSAgdGhpcy5nb2xkID0gYS5nb2xkO1xyXG4vLyAgICAgICAgaWYgKGEuZ29vZHMgICE9PSB1bmRlZmluZWQpICB0aGlzLmdvb2RzLmRlY29kZShhLmdvb2RzKTtcclxuXHJcbiAgICAgICAgaWYgKGEuaGVyb2VzICE9PSB1bmRlZmluZWQpICB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVyb2VzID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl9oZXJvIG9mIGEuaGVyb2VzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZXJvID0gbmV3IENfSGVybyhqc29uX2hlcm8pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZXJvZXNbaGVyby51aWQoKV0gPSBoZXJvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4vKlxyXG4gICAgICAgIGlmIChhLnZpZXcgICAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoYS52aWV3KS5sZW5ndGggPiAwKSB0aGlzLm15VmlldyA9IENfTWF6ZU9ialZpZXcubmV3T2JqKGEudmlldyk7IFxyXG4gICAgICAgICAgICBlbHNlIHRoaXMubXlWaWV3ID0gbmV3IENfQ3VycmVudFRlYW1WaWV3KHRoaXMpIGFzIElfTWF6ZU9ialZpZXc7IFxyXG4gICAgICAgIH1cclxuKi9cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZW5jb2RlX2FsbChhbGxfdGVhbTogQ19UZWFtW10pOiBKU09OX1RlYW1bXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX3RlYW1fZGF0YTogSlNPTl9UZWFtW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB0ZWFtIG9mIGFsbF90ZWFtKSB7XHJcbiAgICAgICAgICAgIGFsbF90ZWFtX2RhdGEucHVzaCh0ZWFtLmVuY29kZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbF90ZWFtX2RhdGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZV9hbGwoYWxsX3RlYW1fZGF0YTogSlNPTl9UZWFtW10pOiBDX1RlYW1bXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX3RlYW06IENfVGVhbVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgdGVhbV9kYXRhIG9mIGFsbF90ZWFtX2RhdGEpIHtcclxuICAgICAgICAgICAgYWxsX3RlYW0ucHVzaCgobmV3IENfVGVhbSgpKS5kZWNvZGUodGVhbV9kYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxfdGVhbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGFsZXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiVGVhbSBJbmZvOlwiIFxyXG4gICAgICAgICAgICArIFwiXFxuaWQ6ICAgIFwiICAgICArICh0aGlzLm15X2lkICAgICAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudW5pcV9pZDogIFwiICArICh0aGlzLnVuaXFfaWQgICAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubmFtZTogIFwiICAgICArICh0aGlzLm15X25hbWUgICAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2F2ZV9pZDogXCIgICArICh0aGlzLnNhdmVfaWQgICAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudXJsOiAgXCIgICAgICArICh0aGlzLndhbGtlci51cmwoKSAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubGNrZDogXCIgICAgICArICh0aGlzLndhbGtlci5nZXRfbGNrZF9zdHIoKSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sY25tOiBcIiAgICAgICsgKHRoaXMud2Fsa2VyLmdldF9uYW1lKCkgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxjaWQ6IFwiICAgICAgKyAodGhpcy53YWxrZXIuZ2V0X3VpZCgpICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuY3VyX3g6IFwiICAgICArICh0aGlzLndhbGtlci5nZXRfcCgpLnggPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuY3VyX3k6IFwiICAgICArICh0aGlzLndhbGtlci5nZXRfcCgpLnkgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuY3VyX3o6IFwiICAgICArICh0aGlzLndhbGtlci5nZXRfcCgpLnogPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuY3VyX2Q6IFwiICAgICArICh0aGlzLndhbGtlci5nZXRfZCgpICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuZ29sZDogXCIgICAgICArIChPYmplY3Qua2V5cyh0aGlzLmdvbGQgPz8ge30pLmxlbmd0aClcclxuICAgICAgICAgICAgKyBcIlxcbmhlcm9lczogXCIgICAgKyAodGhpcy5oZXJvZXM/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWxlcnRfaHJlcygpOiB2b2lkIHtcclxuLy8gICAgICAgIGFsZXJ0KFwiVGVhbSBJbmZvOlwiKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHRoaXMuaGVyb2VzKSB0aGlzLmhlcm9lc1tpaV0uYWxlcnQoKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IFRfRGlyZWN0aW9uIH0gICAgICAgZnJvbSAnLi9DX1BvaW50RGlyJztcclxuaW1wb3J0IHsgQ19UZWFtLCBKU09OX1RlYW0gfSBmcm9tIFwiLi9DX1RlYW1cIjtcclxuaW1wb3J0IHsgVF9XYWxsIH0gICAgICAgICAgICBmcm9tIFwiLi4vZF9tZGwvQ19XYWxsXCI7XHJcbmltcG9ydCB7IElfTWF6ZU9ialZpZXcsIEpTT05fTWF6ZU9ialZpZXcgfSAgZnJvbSBcIi4vQ19NYXplT2JqVmlld1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENfQ3VycmVudFRlYW1WaWV3ICBpbXBsZW1lbnRzIElfTWF6ZU9ialZpZXcge1xyXG4gICAgcHVibGljICBzdGF0aWMgbmV3T2JqKGo/OiBKU09OX1RlYW0pOiBJX01hemVPYmpWaWV3IHtcclxuICAgICAgICBjb25zdCB0ZWFtID0gbmV3IENfVGVhbShqKTtcclxuICAgICAgICByZXR1cm4gbmV3IENfQ3VycmVudFRlYW1WaWV3KHRlYW0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljICBuZXdPYmooaj86IEpTT05fVGVhbSk6IElfTWF6ZU9ialZpZXcge3JldHVybiBDX0N1cnJlbnRUZWFtVmlldy5uZXdPYmooail9XHJcblxyXG4gICAgXHJcbiAgICBwcml2YXRlIG15X3RlYW06IENfVGVhbTtcclxuICAgIHByaXZhdGUgbXlfbGF5ZXI6ICBudW1iZXIgPSA5OTtcclxuICAgIHB1YmxpYyAgY29uc3RydWN0b3IodGVhbTogQ19UZWFtKSB7XHJcbiAgICAgICAgdGhpcy5teV90ZWFtID0gdGVhbTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGF5ZXIoKTogbnVtYmVyICAgICAgICAge3JldHVybiB0aGlzLm15X2xheWVyO31cclxuICAgIHB1YmxpYyBzZXRfbGF5ZXIobGF5ZXI6IG51bWJlcik6IHZvaWQge3RoaXMubXlfbGF5ZXIgPSBsYXllcjt9XHJcbiAgICBwdWJsaWMgbGV0dGVyKCk6IHN0cmluZ3xudWxsIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubXlfdGVhbS53YWxrKCkuZ2V0X2QoKSkge1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHJldHVybiAn4oaRJztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOiByZXR1cm4gJ+KGkic7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogcmV0dXJuICfihpMnO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHJldHVybiAn4oaQJztcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuICfwn4yAJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2FuU2hvdygpOiBib29sZWFue3JldHVybiBmYWxzZX1cclxuICAgIHB1YmxpYyBkcm93M0QoZnJvdDogVF9XYWxsLCBiYWNrOiBUX1dhbGwpOiB2b2lkIHt9XHJcbiAgICBwdWJsaWMgcGFkX3QoKTogICBudW1iZXIge3JldHVybiAwLjB9IFxyXG4gICAgcHVibGljIHBhZF9kKCk6ICAgbnVtYmVyIHtyZXR1cm4gMC4wfSBcclxuICAgIHB1YmxpYyBwYWRfcygpOiAgIG51bWJlciB7cmV0dXJuIDAuMH0gXHJcbiAgICBwdWJsaWMgY29sX2YoKTogICBzdHJpbmd8bnVsbCB7cmV0dXJuIG51bGx9IFxyXG4gICAgcHVibGljIGNvbF9iKCk6ICAgc3RyaW5nfG51bGwge3JldHVybiBudWxsfSBcclxuICAgIHB1YmxpYyBjb2xfcygpOiAgIHN0cmluZ3xudWxsIHtyZXR1cm4gbnVsbH0gXHJcbiAgICBwdWJsaWMgY29sX3QoKTogICBzdHJpbmd8bnVsbCB7cmV0dXJuIG51bGx9IFxyXG4gICAgcHVibGljIGNvbF9kKCk6ICAgc3RyaW5nfG51bGwge3JldHVybiBudWxsfSBcclxuICAgIHB1YmxpYyBjb2xfbCgpOiAgIHN0cmluZ3xudWxsIHtyZXR1cm4gbnVsbH0gXHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX01hemVPYmpWaWV3IHtyZXR1cm4ge2NuYW1lOiAnQ3VycmVudFRlYW1WaWV3J319XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo6IEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkKTogSV9NYXplT2JqVmlldyB7cmV0dXJuIHRoaXMgYXMgSV9NYXplT2JqVmlld31cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfUG9pbnREaXIsIFRfRGlyZWN0aW9uIH0gICAgICAgICAgIGZyb20gXCIuL0NfUG9pbnREaXJcIjtcclxuaW1wb3J0IHsgQ19Nb3ZhYmxlUG9pbnQsIEpTT05fTW92YWJsZVBvaW50IH0gZnJvbSBcIi4vQ19Nb3ZhYmxlUG9pbnRcIjtcclxuaW1wb3J0IHsgSV9Mb2NhdGUgfSAgICAgZnJvbSBcIi4vQ19Mb2NhdGlvblwiO1xyXG5pbXBvcnQgeyBJX0hvcGVBY3Rpb24gfSBmcm9tIFwiLi9JX0NvbW1vblwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9XYWxrZXIgZXh0ZW5kcyBKU09OX01vdmFibGVQb2ludCB7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1dhbGtlciBleHRlbmRzIENfTW92YWJsZVBvaW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGo/OiBKU09OX1dhbGtlcikge1xyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF94KCk6IG51bWJlciB7cmV0dXJuIHRoaXMubG9jX3Bvcy54fVxyXG4gICAgcHVibGljIGdldF95KCk6IG51bWJlciB7cmV0dXJuIHRoaXMubG9jX3Bvcy55fVxyXG4gICAgcHVibGljIGdldF96KCk6IG51bWJlciB7cmV0dXJuIHRoaXMubG9jX3Bvcy56fVxyXG5cclxuICAgIHB1YmxpYyBzZXRfeCh4OiBudW1iZXIpOiB2b2lkIHt0aGlzLmxvY19wb3MueCA9IHh9XHJcbiAgICBwdWJsaWMgc2V0X3koeTogbnVtYmVyKTogdm9pZCB7dGhpcy5sb2NfcG9zLnkgPSB5fVxyXG4gICAgcHVibGljIHNldF96KHo6IG51bWJlcik6IHZvaWQge3RoaXMubG9jX3Bvcy56ID0gen1cclxuXHJcbiAgICBwdWJsaWMgc2V0X3BsYWNlKFxyXG4gICAgICAgIHBsYWNlOiBJX0xvY2F0ZSwgXHJcbiAgICAgICAgdXJsPzogIHN0cmluZywgXHJcbiAgICAgICAgcG9zPzogIENfUG9pbnREaXIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRfdWlkIChwbGFjZS51aWQoKSk7XHJcbiAgICAgICAgdGhpcy5zZXRfbGNrZChwbGFjZS5nZXRfbGNrZCgpKTtcclxuICAgICAgICB0aGlzLnNldF9uYW1lKHBsYWNlLmdldF9uYW1lKCkpO1xyXG5cclxuICAgICAgICBpZiAodXJsICE9PSB1bmRlZmluZWQpIHRoaXMuc2V0X3VybCh1cmwpO1xyXG4gICAgICAgIGlmIChwb3MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldF9wZChwb3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBob3BlX3BfZndkKCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIk1vdmVcIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy5nZXRfcF9md2QoKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLnNldF9wX2Z3ZCgpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhvcGVfcF9iYWsoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiTW92ZVwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wX2JhaygpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMuc2V0X3BfYmFrKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBob3BlX3BfbGZ0KCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIk1vdmVcIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy5nZXRfcF9sZnQoKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLnNldF9wX2xmdCgpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhvcGVfcF9yZ3QoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiTW92ZVwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wX3JndCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMuc2V0X3Bfcmd0KCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9wZV90dXJuX3IoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiVHVyblwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wZCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMudHVybl9yKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9wZV90dXJuX2woKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiVHVyblwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wZCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMudHVybl9sKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhvcGVfcF91cCgpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJVcFwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wX3VwKCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy5tb3ZlX3BfdXAoKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBob3BlX3BfZG93bigpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJEb3duXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMuZ2V0X3BfZG93bigpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMubW92ZV9wX2Rvd24oKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZV9wX3VwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3BfdXAoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBtb3ZlX3BfZG93bigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldF9wX2Rvd24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNORygpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXRfcF9md2QoKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19nZXRfcF9tb3ZlKDEsIDApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wX2Z3ZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldF9wZCh0aGlzLmdldF9wX2Z3ZCgpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfcF9iYWsoKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19nZXRfcF9tb3ZlKC0xLCAwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcF9iYWsoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRfcGQodGhpcy5nZXRfcF9iYWsoKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BfbGZ0KCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9fZ2V0X3BfbW92ZSgwLCAtMSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BfbGZ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3BkKHRoaXMuZ2V0X3BfbGZ0KCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wX3JndCgpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX2dldF9wX21vdmUoMCwgMSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3Bfcmd0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3BkKHRoaXMuZ2V0X3Bfcmd0KCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wX3VwKCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIGNvbnN0IHAgPSBuZXcgQ19Qb2ludERpcih0aGlzLmxvY19wb3MpO1xyXG4gICAgICAgIHAuei0tO1xyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wX3VwKCkge1xyXG4gICAgICAgIHRoaXMuc2V0X3BkKHRoaXMuZ2V0X3BfdXAoKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BfZG93bigpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICBjb25zdCBwID0gbmV3IENfUG9pbnREaXIodGhpcy5sb2NfcG9zKTtcclxuICAgICAgICBwLnorKztcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcF9kb3duKCkge1xyXG4gICAgICAgIHRoaXMuc2V0X3BkKHRoaXMuZ2V0X3BfZG93bigpKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2dldF9wX21vdmUob2Zmc2V0RkI6IG51bWJlciwgb2Zmc2V0TFI6IG51bWJlcik6IENfUG9pbnREaXIge1xyXG4gICAgICAgIGNvbnN0IHAgPSBuZXcgQ19Qb2ludERpcih0aGlzLmxvY19wb3MpO1xyXG4gICAgICAgIGlmIChvZmZzZXRGQiAhPT0gMCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMubG9jX3Bvcy5kKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHAueSAtPSBvZmZzZXRGQjticmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogcC54ICs9IG9mZnNldEZCO2JyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiBwLnkgKz0gb2Zmc2V0RkI7YnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHAueCAtPSBvZmZzZXRGQjticmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2Zmc2V0TFIgIT09IDApIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmxvY19wb3MuZCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiBwLnggKz0gb2Zmc2V0TFI7YnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHAueSArPSBvZmZzZXRMUjticmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogcC54IC09IG9mZnNldExSO2JyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiBwLnkgLT0gb2Zmc2V0TFI7YnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X2Fyb3VuZChmcm9udDogbnVtYmVyLCByaWdodDpudW1iZXIsIHVwOiBudW1iZXIgPSAwKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgdmFyIHRhcmdldF94ICA9IHRoaXMubG9jX3Bvcy54O1xyXG4gICAgICAgIHZhciB0YXJnZXRfeSAgPSB0aGlzLmxvY19wb3MueTtcclxuICAgICAgICB2YXIgdGFyZ2V0X3ogID0gdGhpcy5sb2NfcG9zLnogLSB1cDtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubG9jX3Bvcy5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjpcclxuICAgICAgICAgICAgICAgIHRhcmdldF94ICs9IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3kgLT0gZnJvbnQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3ggKz0gZnJvbnQ7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeSArPSByaWdodDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeCAtPSByaWdodDtcclxuICAgICAgICAgICAgICAgIHRhcmdldF95ICs9IGZyb250O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzpcclxuICAgICAgICAgICAgICAgIHRhcmdldF94IC09IGZyb250O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3kgLT0gcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX1BvaW50RGlyKHt4OiB0YXJnZXRfeCwgeTogdGFyZ2V0X3ksIHo6IHRhcmdldF96LCBkOiB0aGlzLmxvY19wb3MuZH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHR1cm5fcigpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubG9jX3Bvcy5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5FO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uUzticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLlc7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5OO2JyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyB0dXJuX2woKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmxvY19wb3MuZCkge1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uVzticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLk47YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5FO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uUzticmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdHVybl9iKCk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5sb2NfcG9zLmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLlM7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5XO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uTjticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLlc7YnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1dhbGtlciB7XHJcbiAgICAgICAgY29uc3QgaiA9IHN1cGVyLmVuY29kZSgpIGFzIEpTT05fV2Fsa2VyO1xyXG4gICAgICAgIHJldHVybiBqO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX1dhbGtlcik6IENfV2Fsa2VyIHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBzdXBlci5kZWNvZGUoYSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHtUX01ha2VFbnVtVHlwZX0gZnJvbSBcIi4uL2RfdXRsL1RfTWFrZUVudW1UeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVF9EaXJlY3Rpb24gPSB7XHJcbiAgICBOOiAgIDAsXHJcbiAgICBFOiAgIDEsXHJcbiAgICBTOiAgIDIsXHJcbiAgICBXOiAgIDMsXHJcbiAgICBYOiAgOTksXHJcbiAgICBNQVg6IDNcclxufSBhcyBjb25zdDtcclxuZXhwb3J0IHR5cGUgVF9EaXJlY3Rpb24gPSBUX01ha2VFbnVtVHlwZTx0eXBlb2YgVF9EaXJlY3Rpb24+O1xyXG5cclxuZXhwb3J0IHZhciAkRGlyZWN0aW9uTmFtZSA9IHtcclxuICAgIDA6ICAn5YyXJyxcclxuICAgIDE6ICAn5p2xJyxcclxuICAgIDI6ICAn5Y2XJyxcclxuICAgIDM6ICAn6KW/JyxcclxuICAgIDk5OiAn6KyOJ1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIC8vIOS4gOiIrOOBq+S9v+OBiOOCi+ODpuODvOODhuOCo+ODquODhuOCo+OBquWRquaWh1xyXG4gICAgLy8g44Kq44OW44K444Kn44Kv44OI44KS5YiX5oyZ5Z6L44Go44GX44Gm5Z6L5YyW44GZ44KL44Gu44Gr5Yip55SoXHJcbiAgICBpbXBvcnQge1RfTWFrZUVudW1UeXBlfSBmcm9tIFwiLi4vZF91dGwvVF9NYWtlRW51bVR5cGVcIjtcclxuXHJcbiAgICAvLyDjg4Djg7Pjgrjjg6fjg7Pjg57jg4Pjg5fjga7jgrvjg6vjga7nqK7poZ7jgpLooajjgZnliJfmjJnlnotcclxuICAgIC8vIE5vRGVmOiDmnKrlrprnvqnjg7vkuI3mmI5cclxuICAgIC8vIEZsb29yOiDluopcclxuICAgIC8vIFVuZXhwOiDmnKrouI/lnLBcclxuICAgIC8vIFN0b25lOiDnn7Plo4FcclxuICAgIC8vIFN0clVwOiDkuIrjgorpmo7mrrVcclxuICAgIC8vIFN0ckRuOiDkuIvjgorpmo7mrrVcclxuICAgIC8vIEVtcHR5OiDliJ3mnJ/nirbmhYvjg7vkvZXjgoLjgarjgZdcclxuICAgIC8vIFxyXG4gICAgLy8gZnVuY3Rpb24gdG9faW50KE16S2luZCk6ICAgICAgaW50ICAgICAgICDliJfmjJnlnovjgavlr77lv5zjgZnjgovlgKQo5pW05pWw5YCkKeOCkui/lOOBmVxyXG4gICAgLy8gZnVuY3Rpb24gZnJvbV9pbnQoaW50KTogICAgICAgVF9NektpbmQgICAgIOaVtOaVsOWApOOBq+WvvuW/nOOBmeOCi+WIl+aMmeWei+OCkui/lOOBmSjjgq/jg6njgrnjg6Hjgr3jg4Pjg4kpXHJcbiAgICAvLyBmdW5jdGlvbiB0b19sZXR0ZXIoTXpLaW5kKTogICBzdHJpbmcgICAgIOWIl+aMmeWei+OBq+WvvuW/nOOBmeOCi+aWh+Wtl+OCkui/lOOBmSjjg4Djg7Pjgrjjg6fjg7Pjga4yROihqOekuueUqClcclxuICAgIC8vIGZ1bmN0aW9uIGZyb21fbGV0dGVyKHN0cmluZyk6IFRfTXpLaW5kICAgICDmloflrZfjgavlr77lv5zjgZnjgovliJfmjJnlnovjgpLov5TjgZko44Kv44Op44K544Oh44K944OD44OJKVxyXG5cclxuICAgIGV4cG9ydCBjb25zdCBUX016S2luZDp7W2tleTogc3RyaW5nXTogbnVtYmVyfSAgPSB7XHJcbiAgICAgICAgTm9EZWY6ICAgMCxcclxuICAgICAgICBGbG9vcjogICAxLFxyXG4gICAgICAgIFVuZXhwOiAgIDIsXHJcbiAgICAgICAgU3RvbmU6ICAgMyxcclxuICAgICAgICBVbmt3bjogICA0LFxyXG4gICAgICAgIFN0clVwOiAgIDUsXHJcbiAgICAgICAgU3RyRG46ICAgNixcclxuICAgICAgICBTdHJVRDogICA3LFxyXG4gICAgICAgIEVtcHR5OiAyNTUsXHJcbiAgICB9IGFzIGNvbnN0O1xyXG4gICAgZXhwb3J0IHR5cGUgVF9NektpbmQgICA9IFRfTWFrZUVudW1UeXBlPHR5cGVvZiBUX016S2luZD47XHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IFRfUnZNektpbmQ6e1trZXk6IG51bWJlcl06IFRfTXpLaW5kfSAgPSB7XHJcbiAgICAgICAgMDogICBUX016S2luZC5Ob0RlZixcclxuICAgICAgICAxOiAgIFRfTXpLaW5kLkZsb29yLFxyXG4gICAgICAgIDI6ICAgVF9NektpbmQuVW5leHAsXHJcbiAgICAgICAgMzogICBUX016S2luZC5TdG9uZSxcclxuICAgICAgICA0OiAgIFRfTXpLaW5kLlVua3duLFxyXG4gICAgICAgIDU6ICAgVF9NektpbmQuU3RyVXAsXHJcbiAgICAgICAgNjogICBUX016S2luZC5TdHJEbixcclxuICAgICAgICA3OiAgIFRfTXpLaW5kLlN0clVELFxyXG4gICAgICAgIDI1NTogVF9NektpbmQuRW1wdHksXHJcbiAgICB9IGFzIGNvbnN0O1xyXG4gICAgZXhwb3J0IHR5cGUgVF9Sdk16S2luZCA9IFRfTWFrZUVudW1UeXBlPHR5cGVvZiBUX1J2TXpLaW5kPjtcclxuXHJcbiIsIi8vIOWIqeeUqOOCr+ODqeOCueetieOBruiqreOBv+i+vOOBv1xyXG5pbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xyXG5pbXBvcnQgeyBDX0RzcE1lc3NhZ2UgfSAgICAgICAgZnJvbSAnLi4vZF91dGwvQ19Ec3BNZXNzYWdlJzsgLy8g55S76Z2i44Oh44OD44K744O844K444Gu6KGo56S655So44Kv44Op44K5XHJcbmltcG9ydCB7IENfR3VpbGQsIEpTT05fR3VpbGQgfSBmcm9tIFwiLi4vZF9tZGwvQ19HdWlsZFwiO1xyXG5pbXBvcnQgeyBDX0hlcm9SREIgfSAgICAgICAgICAgZnJvbSAnLi9DX0hlcm9SREInO1xyXG5cclxudHlwZSBkYl9jb25uZWN0ID0gbXlzcWwuUG9vbENvbm5lY3Rpb247XHJcbmludGVyZmFjZSBJX3RibF9ndWxkIGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBpZDogICAgICBudW1iZXIsXHJcbiAgICBzYXZlX2lkOiBudW1iZXIsXHJcbiAgICB1bmlxX2lkOiBzdHJpbmcsXHJcbiAgICBuYW1lOiAgICBzdHJpbmcsXHJcbiAgICBnb2xkOiAgICBudW1iZXIsXHJcbi8vICAgIGdvb2RzOiAgIHN0cmluZyxcclxufVxyXG5pbnRlcmZhY2UgSV9sYXN0SW5zZXJ0IGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19HdWlsZFJEQiB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fcmRiX2FsbChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPENfR3VpbGRbXT4ge1xyXG4gICAgICAgIGNvbnN0IGd1bGRfYXJyYXkgPSBhd2FpdCBDX0d1aWxkUkRCLmdldF9mcm9tX3RibF9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBndWxkIG9mIGd1bGRfYXJyYXkpIHtcclxuICAgICAgICAgICAgY29uc3QgaHJlc19hcnJheSA9ICBhd2FpdCBDX0hlcm9SREIuZ2V0X2Zyb21fcmRiX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCwgZ3VsZC51aWQoKSk7XHJcbiAgICAgICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGhlcm8gb2YgaHJlc19hcnJheSkgZ3VsZC5hZGRfaGVybyhoZXJvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBndWxkX2FycmF5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHNldF90b19yZGIoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyLCBndWxkOiBDX0d1aWxkKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgZ3VsZF9pZCA9IGF3YWl0IENfR3VpbGRSREIuYWRkX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCwgZ3VsZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgaGVybyBvZiBndWxkLmhyZXMoKSkge1xyXG4gICAgICAgICAgICBhd2FpdCBDX0hlcm9SREIuc2V0X3RvX3JkYihkYl9tYWksIG1lcywgc2F2ZV9pZCwgZ3VsZC51aWQoKSwgaGVybyk7XHJcbiAgICAgICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gXHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RvX3JkYihkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIsIGd1bGRfdWlkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBhd2FpdCBDX0hlcm9SREIuZGVsX3RvX3JkYihkYl9tYWksIG1lcywgc2F2ZV9pZCwgZ3VsZF91aWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBDX0d1aWxkUkRCLmRlbF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBp+aMh+WumuOBleOCjOOBn2d1bGTjg6zjgrPjg7zjg4njgrvjg4Pjg4jjgpLoqq3jgb/ovrzjgb9cclxuICAgIC8vIEd1aWxk44Kv44Op44K544Gu6YWN5YiX44Gr44K744OD44OI44GZ44KLXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fdGJsX2FsbChcclxuICAgICAgICBkYl9tYWk6ICBkYl9jb25uZWN0LCBcclxuICAgICAgICBtZXM6ICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgIHNhdmVfaWQ6IG51bWJlcixcclxuICAgICk6IFByb21pc2U8Q19HdWlsZFtdPiB7XHJcbiAgICAgICAgY29uc3QgZ2V0X2d1bGRfU1FMID0gYFxyXG4gICAgICAgICAgICBTRUxFQ1QgXHRpZCwgc2F2ZV9pZCwgdW5pcV9pZCwgbmFtZSwgZ29sZFxyXG4gICAgICAgICAgICBGUk9NICAgIHRibF9ndWxkXHJcbiAgICAgICAgICAgIFdIRVJFICAgc2F2ZV9pZCA9IDpzYXZlX2lkXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZXN1bHRSZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpLnF1ZXJ5PElfdGJsX2d1bGRbXT4oZ2V0X2d1bGRfU1FMLCB7c2F2ZV9pZDogc2F2ZV9pZH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgNjc6ICR7Z2V0X2d1bGRfU1FMfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBpZiAocmVzdWx0UmVjb3JkU2V0Lmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBndWxkX2FycmF5ID0gW10gYXMgQ19HdWlsZFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgcnIgb2YgcmVzdWx0UmVjb3JkU2V0KSB7XHJcbiAgICAgICAgICAgIGd1bGRfYXJyYXkucHVzaChuZXcgQ19HdWlsZChDX0d1aWxkUkRCLmZyb21fc3RyaW5nQXJyYXlfdG9fSlNPTihycikpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGd1bGRfYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJndWxk44OG44O844OW44Or44Gr6Ieq6Lqr44Gu44OH44O844K/44KS6L+95YqgKGluc2VydCnjgZfjgaZcclxuICAgIC8vIOOBneOBrklEKGlkKeOCkui/lOOBmVxyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGFkZF90YmwoXHJcbiAgICAgICAgZGJfbWFpOiAgZGJfY29ubmVjdCwgXHJcbiAgICAgICAgbWVzOiAgICAgQ19Ec3BNZXNzYWdlLCBcclxuICAgICAgICBzYXZlX2lkOiBudW1iZXIsXHJcbiAgICAgICAgZ3VsZDogICAgQ19HdWlsZFxyXG4gICAgKTogUHJvbWlzZTxudW1iZXI+IHtcclxuXHJcbiAgICAgICAgY29uc3QgaW5zZXJ0X2d1bGRfU1FMID1gXHJcbiAgICAgICAgICAgIElOU0VSVCBJTlRPIHRibF9ndWxkICggc2F2ZV9pZCwgIHVuaXFfaWQsICBuYW1lLCAgZ29sZCApXHJcbiAgICAgICAgICAgIFZBTFVFUyAgICAgICAgICAgICAgKCA6c2F2ZV9pZCwgOnVuaXFfaWQsIDpuYW1lLCA6Z29sZCApXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IGogPSBndWxkLmVuY29kZSgpO1xyXG4gICAgICAgIGF3YWl0IGRiX21haS5xdWVyeShpbnNlcnRfZ3VsZF9TUUwsIHtcclxuICAgICAgICAgICAgc2F2ZV9pZDogIHNhdmVfaWQsICBcclxuICAgICAgICAgICAgdW5pcV9pZDogIGoudW5pcV9pZCwgIFxyXG4gICAgICAgICAgICBuYW1lOiAgICAgai5uYW1lLFxyXG4gICAgICAgICAgICBnb2xkOiAgICAgai5nb2xkLFxyXG4vLyAgICAgICAgICAgIGdvb2RzOiAgICBKU09OLnN0cmluZ2lmeShqLmdvb2RzKSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDYxOiAke2luc2VydF9ndWxkX1NRTH1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBDX0d1aWxkUkRCLmxhc3RJbnNlcnQoZGJfbWFpLCBtZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRibF90ZWFt44Gn5pyA5b6M44Gr6L+95Yqg44GX44Gf6KGM55Wq5Y+3KHNhdmVfaWQp44KS6L+U44GZ44CQMeihjOaMv+WFpeWwgueUqOOAkVxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBsYXN0SW5zZXJ0KGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UpIDogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBjb25zdCBsYXN0SW5zZXJ0X1NRTCA9YFxyXG4gICAgICAgICAgICBTRUxFQ1QgTEFTVF9JTlNFUlRfSUQoKSBhcyBpZCBGUk9NIHRibF9ndWxkO1xyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haS5xdWVyeTxJX2xhc3RJbnNlcnRbXT4obGFzdEluc2VydF9TUUwpXHJcbiAgICAgICAgLmNhdGNoICgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCA1MDA6ICR7bGFzdEluc2VydF9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlY29yZFNldC5sZW5ndGggPCAxKSByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIHJlY29yZFNldFswXS5pZDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZlX2lk44Gn5oyH5a6a44GV44KM44Gf44Os44Kz44O844OJKOikh+aVsCnjgpLliYrpmaQoZGVsZXRlKeOBmeOCi1xyXG4gICAgLy8gXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGRlbF90YmwoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlX2d1bGRfU1FMID0gYFxyXG4gICAgICAgICAgICBERUxFVEUgRlJPTSB0YmxfZ3VsZCBcclxuICAgICAgICAgICAgV0hFUkUgIHNhdmVfaWQgPSA6c2F2ZV9pZFxyXG4gICAgICAgIGBcclxuICAgICAgICBhd2FpdCBkYl9tYWkucXVlcnkoZGVsZXRlX2d1bGRfU1FMLHtzYXZlX2lkOiBzYXZlX2lkfSlcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDY4OiAke2RlbGV0ZV9ndWxkX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ0FycmF5X3RvX0pTT04oajogSV90YmxfZ3VsZCk6IEpTT05fR3VpbGQge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgIGouaWQsXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6IGouc2F2ZV9pZCxcclxuICAgICAgICAgICAgdW5pcV9pZDogai51bmlxX2lkLFxyXG4gICAgICAgICAgICBuYW1lOiAgICBqLm5hbWUsXHJcbiAgICAgICAgICAgIGdvbGQ6ICAgIGouZ29sZCxcclxuLy8gICAgICAgICAgICBnb29kczogICBKU09OLnBhcnNlKGouZ29vZHMpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCBteXNxbCBmcm9tICdteXNxbDIvcHJvbWlzZSc7XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9ICBmcm9tICcuLi9kX3V0bC9DX0RzcE1lc3NhZ2UnOyAvLyDnlLvpnaLjg6Hjg4Pjgrvjg7zjgrjjga7ooajnpLrnlKjjgq/jg6njgrlcclxuaW1wb3J0IHsgQ19IZXJvLCBKU09OX0hlcm8gfSAgZnJvbSAnLi4vZF9tZGwvQ19IZXJvJzsgXHJcblxyXG50eXBlIGRiX2Nvbm5lY3QgPSBteXNxbC5Qb29sQ29ubmVjdGlvbjtcclxuXHJcbmludGVyZmFjZSBJX3RibF9oZXJvIGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBpZDogICAgICAgIG51bWJlcjtcclxuICAgIHNhdmVfaWQ6ICAgbnVtYmVyO1xyXG4gICAgdW5pcV9pZDogICBzdHJpbmc7XHJcbiAgICBqb2luX3VpZDogIHN0cmluZzsgXHJcbiAgICBuYW1lOiAgICAgIHN0cmluZztcclxuICAgIHNleDogICAgICAgbnVtYmVyO1xyXG4gICAgYWdlOiAgICAgICBudW1iZXI7XHJcbiAgICBnb2xkOiAgICAgIG51bWJlcjtcclxuLy8gICAgZ29vZHM6ICAgICBzdHJpbmc7XHJcbiAgICBzdGF0ZTogICAgIG51bWJlcjtcclxuICAgIGx2OiAgICAgICAgbnVtYmVyO1xyXG4gICAgc2twX3R0bDogICBzdHJpbmc7XHJcbiAgICBza3Bfbm93OiAgIHN0cmluZztcclxuICAgIGV4cF90dGw6ICAgc3RyaW5nO1xyXG4gICAgZXhwX25vdzogICBzdHJpbmc7XHJcbiAgICBueGU6ICAgICAgIHN0cmluZztcclxuICAgIGFiaV9wX2JzYzogc3RyaW5nO1xyXG4gICAgYWJpX21fYnNjOiBzdHJpbmc7XHJcbiAgICBpc19hbGl2ZTogIG51bWJlcjtcclxufVxyXG5pbnRlcmZhY2UgSV9sYXN0SW5zZXJ0IGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19IZXJvUkRCIHtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fSGVybykge31cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldF9mcm9tX3JkYl9hbGwoXHJcbiAgICAgICAgZGJfbWFpOiAgIGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgIG1lczogICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgIHNhdmVfaWQ6ICBudW1iZXIsXHJcbiAgICAgICAgam9pbl91aWQ6IHN0cmluZ1xyXG4gICAgKTogUHJvbWlzZTxDX0hlcm9bXT5cclxuICAgIHtcclxuICAgICAgICBjb25zdCBocmVzX2FycmF5ID0gYXdhaXQgQ19IZXJvUkRCLmdldF9mcm9tX3RibF9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIGpvaW5fdWlkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhyZXNfYXJyYXk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc2V0X3RvX3JkYihcclxuICAgICAgICBkYl9tYWk6ICAgZGJfY29ubmVjdCwgXHJcbiAgICAgICAgbWVzOiAgICAgIENfRHNwTWVzc2FnZSwgXHJcbiAgICAgICAgc2F2ZV9pZDogIG51bWJlcixcclxuICAgICAgICBqb2luX3VpZDogc3RyaW5nLFxyXG4gICAgICAgIGhlcm86ICAgICBDX0hlcm8sXHJcbiAgICApOiBQcm9taXNlPGJvb2xlYW4+IFxyXG4gICAgeyBcclxuICAgICAgICBjb25zdCBoZXJvX2lkID0gYXdhaXQgQ19IZXJvUkRCLmFkZF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIGpvaW5fdWlkLCBoZXJvKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RvX3JkYl9hbGwoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgcnNsdCA9IGF3YWl0IENfSGVyb1JEQi5kZWxfdGJsX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RvX3JkYihkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIsIGpvaW5fdWlkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCByc2x0ID0gYXdhaXQgQ19IZXJvUkRCLmRlbF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIGpvaW5fdWlkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJpZOOBp+aMh+WumuOBleOCjOOBn2hlcm/jg6zjgrPjg7zjg4njgrvjg4Pjg4go5Y2Y5pWwKeOCkuiqreOBv+i+vOOBv1xyXG4gICAgLy8gSGVyb+OCr+ODqeOCueOBrumFjeWIl+OBq+OCu+ODg+ODiOOBmeOCi1xyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGdldF9mcm9tX3RibChcclxuICAgICAgICBkYl9tYWk6IGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgIG1lczogICAgQ19Ec3BNZXNzYWdlLCBcclxuICAgICAgICBpZDogICAgIG51bWJlcixcclxuICAgICk6IFByb21pc2U8Q19IZXJvfHVuZGVmaW5lZD4ge1xyXG4gICAgICAgIGNvbnN0IGdldF9oZXJvZXNfU1FMID0gYFxyXG4gICAgICAgICAgICBTRUxFQ1QgXHRpZCwgc2F2ZV9pZCwgdW5pcV9pZCwgam9pbl91aWQsIFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsIHNleCwgYWdlLCBnb2xkLCBzdGF0ZSwgbHYsICBcclxuICAgICAgICAgICAgICAgICAgICBza3BfdHRsLCBza3Bfbm93LCBleHBfdHRsLCBleHBfbm93LCBueGUsIFxyXG4gICAgICAgICAgICAgICAgICAgIGFiaV9wX2JzYywgYWJpX21fYnNjLCBpc19hbGl2ZSBcclxuICAgICAgICAgICAgRlJPTSAgICB0YmxfaGVyb1xyXG4gICAgICAgICAgICBXSEVSRSAgIGlkID0gOmlkXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZXN1bHRSZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpPy5xdWVyeTxJX3RibF9oZXJvW10+KGdldF9oZXJvZXNfU1FMLCB7aWQ6ICBpZH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMzdhOiAke2dldF9oZXJvZXNfU1FMfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHRSZWNvcmRTZXQubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKFwi44OH44O844K/44GM5pyJ44KK44G+44Gb44KTIDM5YTogeyRnZXRfaGVyb2VzX1NRTH1cIik7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQ19IZXJvKCkuZGVjb2RlKENfSGVyb1JEQi5mcm9tX3N0cmluZ0FycmF5X3RvX0pTT04ocmVzdWx0UmVjb3JkU2V0WzBdKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBqGpvaW5fdWlk44Gn5oyH5a6a44GV44KM44GfaGVyb+ODrOOCs+ODvOODieOCu+ODg+ODiCjopIfmlbAp44KS6Kqt44G/6L6844G/XHJcbiAgICAvLyBIZXJv44Kv44Op44K544Gu6YWN5YiX44Gr44K744OD44OI44GZ44KLXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fdGJsX2FsbChcclxuICAgICAgICBkYl9tYWk6ICAgZGJfY29ubmVjdCwgXHJcbiAgICAgICAgbWVzOiAgICAgIENfRHNwTWVzc2FnZSwgXHJcbiAgICAgICAgc2F2ZV9pZDogIG51bWJlcixcclxuICAgICAgICBqb2luX3VpZDogc3RyaW5nLFxyXG4gICAgKTogUHJvbWlzZTxDX0hlcm9bXT4ge1xyXG4gICAgICAgIGNvbnN0IGdldF9oZXJvZXNfU1FMID0gYFxyXG4gICAgICAgICAgICBTRUxFQ1QgXHRpZCwgc2F2ZV9pZCwgdW5pcV9pZCwgam9pbl91aWQsIFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsIHNleCwgYWdlLCBnb2xkLCBzdGF0ZSwgbHYsICBcclxuICAgICAgICAgICAgICAgICAgICBza3BfdHRsLCBza3Bfbm93LCBleHBfdHRsLCBleHBfbm93LCBueGUsIFxyXG4gICAgICAgICAgICAgICAgICAgIGFiaV9wX2JzYywgYWJpX21fYnNjLCBpc19hbGl2ZSBcclxuICAgICAgICAgICAgRlJPTSAgICB0YmxfaGVyb1xyXG4gICAgICAgICAgICBXSEVSRSAgIHNhdmVfaWQgPSA6c2F2ZV9pZCBBTkQgam9pbl91aWQgPSA6am9pbl91aWRcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3Jlc3VsdFJlY29yZFNldF0gPSBhd2FpdCBkYl9tYWk/LnF1ZXJ5PElfdGJsX2hlcm9bXT4oZ2V0X2hlcm9lc19TUUwsIHtzYXZlX2lkOiBzYXZlX2lkLCBqb2luX3VpZDogam9pbl91aWR9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDM3YjogJHtnZXRfaGVyb2VzX1NRTH1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0UmVjb3JkU2V0Lmxlbmd0aCA8IDEpIHtcclxuLy8gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKFwi44OH44O844K/44GM5pyJ44KK44G+44Gb44KTIDM5YjogeyRnZXRfaGVyb2VzX1NRTH1cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhyZXNfYXJyYXkgPSBbXSBhcyBDX0hlcm9bXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHJyIG9mIHJlc3VsdFJlY29yZFNldCkge1xyXG4gICAgICAgICAgICBocmVzX2FycmF5LnB1c2goKG5ldyBDX0hlcm8oKSkuZGVjb2RlKENfSGVyb1JEQi5mcm9tX3N0cmluZ0FycmF5X3RvX0pTT04ocnIpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBocmVzX2FycmF5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBEQuWHpueQhuOAgnRlYW3jg4bjg7zjg5bjg6vjgavoh6rouqvjga7jg4fjg7zjgr/jgpIx5Lu26L+95YqgKGluc2VydCnjgZfjgaZcclxuICAgIC8vIOOBneOBrklEKGlkKeOCkui/lOOBmVxyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGFkZF90YmwoXHJcbiAgICAgICAgZGJfbWFpOiAgIGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgIG1lczogICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgIHNhdmVfaWQ6ICBudW1iZXIsXHJcbiAgICAgICAgam9pbl91aWQ6IHN0cmluZyxcclxuICAgICAgICBoZXJvOiAgICAgQ19IZXJvLFxyXG4gICAgKTogUHJvbWlzZTxudW1iZXI+IHtcclxuXHJcbiAgICAgICAgY29uc3QgaW5zZXJ0X2hlcm9fU1FMID0gYFxyXG4gICAgICAgICAgICBJTlNFUlQgSU5UTyB0YmxfaGVybyAoXHJcbiAgICAgICAgICAgICAgICBzYXZlX2lkLCB1bmlxX2lkLCBqb2luX3VpZCwgXHJcbiAgICAgICAgICAgICAgICBuYW1lLCBzZXgsIGFnZSwgZ29sZCwgc3RhdGUsIGx2LCBcclxuICAgICAgICAgICAgICAgIHNrcF90dGwsIHNrcF9ub3csIGV4cF90dGwsIGV4cF9ub3csIG54ZSxcclxuICAgICAgICAgICAgICAgIGFiaV9wX2JzYywgYWJpX21fYnNjLCBpc19hbGl2ZSBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBWQUxVRVMgKCBcclxuICAgICAgICAgICAgICAgIDpzYXZlX2lkLCA6dW5pcV9pZCwgOmpvaW5fdWlkLCBcclxuICAgICAgICAgICAgICAgIDpuYW1lLCA6c2V4LCA6YWdlLCA6Z29sZCwgOnN0YXRlLCA6bHYsIFxyXG4gICAgICAgICAgICAgICAgOnNrcF90dGwsIDpza3Bfbm93LCA6ZXhwX3R0bCwgOmV4cF9ub3csIDpueGUsXHJcbiAgICAgICAgICAgICAgICA6YWJpX3BfYnNjLCA6YWJpX21fYnNjLCA6aXNfYWxpdmUgXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QganNvbkhlcm8gPSBoZXJvLmVuY29kZSgpO1xyXG4vL2RlYnVnXHJcbi8qXHJcbmNvbnNvbGUuZXJyb3IoXHJcbiAgICAgJyAgc2F2ZV9pZD0nICAgK3NhdmVfaWQgXHJcbiAgICArJywgam9pbl91aWQ9JyAgK2pvaW5fdWlkIFxyXG4gICAgKycsIHVuaXFfaWQ9JyAgICtqc29uSGVyby51bmlxX2lkIFxyXG4gICAgKycsIG5hbWU9JyAgICAgICtqc29uSGVyby5uYW1lXHJcbiAgICArJywgc2V4PScgICAgICAgK2pzb25IZXJvLnNleFxyXG4gICAgKycsIGFnZT0nICAgICAgICtqc29uSGVyby5hZ2VcclxuICAgICsnLCBnb2xkPScgICAgICAranNvbkhlcm8uZ29sZFxyXG4gICAgKycsIGdvb2RzPScgICAgICsoSlNPTi5zdHJpbmdpZnkoanNvbkhlcm8/Lmdvb2RzKT8/Jz8/PycpXHJcbiAgICArJywgc3RhdGU9JyAgICAgK2pzb25IZXJvLnN0YXRlXHJcbiAgICArJywgbHY9JyAgICAgICAgK2pzb25IZXJvLmx2XHJcbiAgICArJywgc2twX3R0bD0nICAgKyhqc29uSGVyby52YWw/LnNrcD8udHRsPz8nPz8/JylcclxuICAgICsnLCBza3Bfbm93PScgICArKGpzb25IZXJvLnZhbD8uc2twPy5ub3c/P2pzb25IZXJvLnZhbD8uc2twPy50dGw/Pyc/Pz8nKVxyXG4gICAgKycsIGV4cF90dGw9JyAgICsoanNvbkhlcm8udmFsPy5leHA/LnR0bD8/Jz8/PycpXHJcbiAgICArJywgZXhwX25vdz0nICAgKyhqc29uSGVyby52YWw/LmV4cD8ubm93Pz9qc29uSGVyby52YWw/LmV4cD8udHRsPz8nPz8/JylcclxuICAgICsnLCBueGU9JyAgICAgICArKGpzb25IZXJvLnZhbD8ubnhlPz8tMSlcclxuICAgICsnLCBhYmlfcF9ic2M9JyArKEpTT04uc3RyaW5naWZ5KGpzb25IZXJvLmFiaV9wX2JzYyk/Pyc/Pz8nKVxyXG4gICAgKycsIGFiaV9tX2JzYz0nICsoSlNPTi5zdHJpbmdpZnkoanNvbkhlcm8uYWJpX21fYnNjKT8/Jz8/PycpXHJcbiAgICArJywgaXNfYWxpdmU9JyAgKyhqc29uSGVyby5pc19hbGl2ZSAhPT0gJ04nID8gMSA6IDApXHJcbilcclxuKi9cclxuICAgICAgICBhd2FpdCBkYl9tYWkucXVlcnkoaW5zZXJ0X2hlcm9fU1FMLCB7XHJcbiAgICAgICAgICAgICdzYXZlX2lkJzogICBzYXZlX2lkLCBcclxuICAgICAgICAgICAgJ2pvaW5fdWlkJzogIGpvaW5fdWlkLCBcclxuICAgICAgICAgICAgJ3VuaXFfaWQnOiAgIGpzb25IZXJvLnVuaXFfaWQsIFxyXG4gICAgICAgICAgICAnbmFtZSc6ICAgICAganNvbkhlcm8ubmFtZSxcclxuICAgICAgICAgICAgJ3NleCc6ICAgICAgIGpzb25IZXJvLnNleCxcclxuICAgICAgICAgICAgJ2FnZSc6ICAgICAgIGpzb25IZXJvLmFnZSxcclxuICAgICAgICAgICAgJ2dvbGQnOiAgICAgIGpzb25IZXJvLmdvbGQsXHJcbi8vICAgICAgICAgICAgJ2dvb2RzJzogICAgIEpTT04uc3RyaW5naWZ5KGpzb25IZXJvLmdvb2RzKSxcclxuICAgICAgICAgICAgJ3N0YXRlJzogICAgIGpzb25IZXJvLnN0YXRlLFxyXG4gICAgICAgICAgICAnbHYnOiAgICAgICAganNvbkhlcm8ubHYsXHJcbiAgICAgICAgICAgICdza3BfdHRsJzogICBqc29uSGVyby52YWw/LnNrcD8udHRsPz8nJyxcclxuICAgICAgICAgICAgJ3NrcF9ub3cnOiAgIGpzb25IZXJvLnZhbD8uc2twPy5ub3c/P2pzb25IZXJvLnZhbD8uc2twPy50dGw/PycnLFxyXG4gICAgICAgICAgICAnZXhwX3R0bCc6ICAganNvbkhlcm8udmFsPy5leHA/LnR0bD8/JycsXHJcbiAgICAgICAgICAgICdleHBfbm93JzogICBqc29uSGVyby52YWw/LmV4cD8ubm93Pz9qc29uSGVyby52YWw/LmV4cD8udHRsPz8nJyxcclxuICAgICAgICAgICAgJ254ZSc6ICAgICAgIGpzb25IZXJvLnZhbD8ubnhlPz8tMSxcclxuICAgICAgICAgICAgJ2FiaV9wX2JzYyc6IEpTT04uc3RyaW5naWZ5KGpzb25IZXJvLmFiaV9wX2JzYyk/PycnLFxyXG4gICAgICAgICAgICAnYWJpX21fYnNjJzogSlNPTi5zdHJpbmdpZnkoanNvbkhlcm8uYWJpX21fYnNjKT8/JycsXHJcbiAgICAgICAgICAgICdpc19hbGl2ZSc6ICBqc29uSGVyby5pc19hbGl2ZSAhPT0gJ04nID8gMSA6IDAsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAzN2I6ICR7aW5zZXJ0X2hlcm9fU1FMfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gQ19IZXJvUkRCLmxhc3RJbnNlcnQoZGJfbWFpLCBtZXMpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgLy8gdGJsX2hlcm/jgafmnIDlvozjgavov73liqDjgZfjgZ/ooYznlarlj7coc2F2ZV9pZCnjgpLov5TjgZnjgJAx6KGM5oy/5YWl5bCC55So44CRXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGxhc3RJbnNlcnQoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSkgOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGNvbnN0IGxhc3RJbnNlcnRfU1FMID1gXHJcbiAgICAgICAgICAgIFNFTEVDVCBMQVNUX0lOU0VSVF9JRCgpIGFzIGlkIEZST00gdGJsX2hlcm87XHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpLnF1ZXJ5PElfbGFzdEluc2VydFtdPihsYXN0SW5zZXJ0X1NRTClcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDUwMDogJHtsYXN0SW5zZXJ0X1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAocmVjb3JkU2V0Lmxlbmd0aCA8IDEpIHJldHVybiAtMTtcclxuICAgICAgICByZXR1cm4gcmVjb3JkU2V0WzBdLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERC5Yem55CGKOOCr+ODqeOCueODu+ODoeOCveODg+ODiSnjgIJIZXJv44Kv44Op44K544Gu6YWN5YiX44KS5Y+X44GR5Y+W44Gj44Gm44CBXHJcbiAgICAvLyDmjIflrprjgZXjgozjgZ9zYXZlX2lk44Gn44CAaGVyb+ODhuODvOODluODq+OBq+i/veWKoChpbnNlcnQp44GX44GmXHJcbiAgICAvLyDjgZ3jga5JRChpZCnjga7phY3liJfjgpLov5TjgZlcclxuICAgIC8vIFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBhZGRfdGJsX2FsbChcclxuICAgICAgICBkYl9tYWk6ICAgICBkYl9jb25uZWN0LCBcclxuICAgICAgICBtZXM6ICAgICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgIHNhdmVfaWQ6ICAgIG51bWJlcixcclxuICAgICAgICBqb2luX3VpZDogICBzdHJpbmcsXHJcbiAgICAgICAgaGVyb19hcnJheSA6Q19IZXJvW10sIFxyXG4gICAgKTogUHJvbWlzZTxudW1iZXJbXT4gXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaGVyb19pZF9zZXQgPSBbXSBhcyBudW1iZXJbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGhlcm8gb2YgaGVyb19hcnJheSkge1xyXG4gICAgICAgICAgICBjb25zdCBoZXJvX2lkID0gYXdhaXQgQ19IZXJvUkRCLmFkZF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIGpvaW5fdWlkLCBoZXJvKTtcclxuICAgICAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICBoZXJvX2lkX3NldC5wdXNoKGhlcm9faWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGVyb19pZF9zZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvLyBEQuWHpueQhuOAgnNhdmVfaWTjgafmjIflrprjgZXjgozjgZ/jg6zjgrPjg7zjg4ko6KSH5pWwKeOCkuWJiumZpChkZWxldGUp44GZ44KLXHJcbiAgICAvLyBcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RibF9hbGwoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlX2hlcm9fU1FMID0gYFxyXG4gICAgICAgICAgICBERUxFVEUgRlJPTSB0YmxfaGVybyBcclxuICAgICAgICAgICAgV0hFUkUgIHNhdmVfaWQgPSA6c2F2ZV9pZCBcclxuICAgICAgICBgXHJcbiAgICAgICAgYXdhaXQgZGJfbWFpLnF1ZXJ5KGRlbGV0ZV9oZXJvX1NRTCx7c2F2ZV9pZDogc2F2ZV9pZH0pXHJcbiAgICAgICAgLmNhdGNoICgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAxNzogJHtkZWxldGVfaGVyb19TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZlX2lk44Goam9pbl91aWTjgafmjIflrprjgZXjgozjgZ/jg6zjgrPjg7zjg4ko6KSH5pWwKeOCkuWJiumZpChkZWxldGUp44GZ44KLXHJcbiAgICAvLyBcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RibChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIsIGpvaW5fdWlkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCBkZWxldGVfaGVyb19TUUwgPSBgXHJcbiAgICAgICAgICAgIERFTEVURSBGUk9NIHRibF9oZXJvIFxyXG4gICAgICAgICAgICBXSEVSRSAgc2F2ZV9pZCA9IDpzYXZlX2lkIEFORCAgam9pbl91aWQgPSA6am9pbl91aWRcclxuICAgICAgICBgXHJcbiAgICAgICAgYXdhaXQgZGJfbWFpLnF1ZXJ5KGRlbGV0ZV9oZXJvX1NRTCx7c2F2ZV9pZDogc2F2ZV9pZCwgam9pbl91aWQ6IGpvaW5fdWlkfSlcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDE4OiAke2RlbGV0ZV9oZXJvX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdBcnJheV90b19KU09OKGo6IElfdGJsX2hlcm8pOiBKU09OX0hlcm8ge1xyXG4gICAgICAgIGNvbnN0IGFiaV9wID0gSlNPTi5wYXJzZShqLmFiaV9wX2JzYyk7XHJcbiAgICAgICAgY29uc3QgYWJpX20gPSBKU09OLnBhcnNlKGouYWJpX21fYnNjKTtcclxuXHJcbiAgICAgICAgY29uc3QganNvbiAgPSB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgICAgai5pZCxcclxuICAgICAgICAgICAgc2F2ZV9pZDogICBqLnNhdmVfaWQsXHJcbiAgICAgICAgICAgIHVuaXFfaWQ6ICAgai51bmlxX2lkLFxyXG4gICAgICAgICAgICBuYW1lOiAgICAgIGoubmFtZSxcclxuICAgICAgICAgICAgc2V4OiAgICAgICBqLnNleCxcclxuICAgICAgICAgICAgYWdlOiAgICAgICBqLmFnZSxcclxuICAgICAgICAgICAgZ29sZDogICAgICBqLmdvbGQsXHJcbi8vICAgICAgICAgICAgZ29vZHM6ICAgICBKU09OLnBhcnNlKGouZ29vZHMpLFxyXG4gICAgICAgICAgICBzdGF0ZTogICAgIGouc3RhdGUsXHJcbiAgICAgICAgICAgIGx2OiAgICAgICAgai5sdixcclxuICAgICAgICAgICAgdmFsOiB7XHJcbiAgICAgICAgICAgICAgICBza3A6IHtcclxuICAgICAgICAgICAgICAgICAgICB0dGw6ICAgSlNPTi5wYXJzZShqLnNrcF90dGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdzogICBKU09OLnBhcnNlKGouc2twX25vdyksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXhwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHRsOiAgIEpTT04ucGFyc2Uoai5leHBfdHRsKSxcclxuICAgICAgICAgICAgICAgICAgICBub3c6ICAgSlNPTi5wYXJzZShqLmV4cF9ub3cpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG54ZTogICAgICAgSlNPTi5wYXJzZShqLm54ZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFiaV9wX2JzYzogICAgIEpTT04ucGFyc2Uoai5hYmlfcF9ic2MpLFxyXG4gICAgICAgICAgICBhYmlfbV9ic2M6ICAgICBKU09OLnBhcnNlKGouYWJpX21fYnNjKSxcclxuLypcclxuICAgICAgICAgICAgYWJpX3A6IHtcclxuICAgICAgICAgICAgICAgIGJzYzogYWJpX3AsXHJcbiAgICAgICAgICAgICAgICB0dGw6IGFiaV9wLFxyXG4gICAgICAgICAgICAgICAgbm93OiBhYmlfcCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWJpX206IHtcclxuICAgICAgICAgICAgICAgIGJzYzogYWJpX20sXHJcbiAgICAgICAgICAgICAgICB0dGw6IGFiaV9tLFxyXG4gICAgICAgICAgICAgICAgbm93OiBhYmlfbSxcclxuICAgICAgICAgICAgfSxcclxuICovXHJcbiAgICAgICAgICAgIGlzX2FsaXZlOiAgai5pc19hbGl2ZSAhPT0gMCA/IFwiWVwiIDogXCJOXCIsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIOWIqeeUqOOCr+ODqeOCueetieOBruiqreOBv+i+vOOBv1xyXG5pbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xyXG5pbXBvcnQgeyBDX0RzcE1lc3NhZ2UgfSAgICAgIGZyb20gJy4uL2RfdXRsL0NfRHNwTWVzc2FnZSc7IC8vIOeUu+mdouODoeODg+OCu+ODvOOCuOOBruihqOekuueUqOOCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX01hemUsIEpTT05fTWF6ZSB9IGZyb20gXCIuLi9kX21kbC9DX01hemVcIjtcclxuXHJcbnR5cGUgZGJfY29ubmVjdCA9IG15c3FsLlBvb2xDb25uZWN0aW9uO1xyXG5cclxuaW50ZXJmYWNlIElfdGJsX21hemUgZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0IHtcclxuICAgIGlkOiAgICAgIG51bWJlcixcclxuICAgIHNhdmVfaWQ6IG51bWJlcixcclxuICAgIHVuaXFfaWQ6IHN0cmluZyxcclxuICAgIG5hbWU6ICAgIHN0cmluZywgXHJcbiAgICBzaXplX3g6ICBudW1iZXIsXHJcbiAgICBzaXplX3k6ICBudW1iZXIsXHJcbiAgICBzaXplX3o6ICBudW1iZXIsXHJcbiAgICBtYXBzOiAgICBzdHJpbmcsXHJcbiAgICBtYXNrOiAgICBzdHJpbmcsXHJcbn1cclxuaW50ZXJmYWNlIElfbGFzdEluc2VydCBleHRlbmRzIG15c3FsLlJvd0RhdGFQYWNrZXQge1xyXG4gICAgaWQ6IG51bWJlcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDX01hemVSREIge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge31cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRfZnJvbV9yZGJfYWxsKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlcik6IFByb21pc2U8Q19NYXplW10+IHtcclxuICAgICAgICBjb25zdCBtYXplX2FycmF5ID0gYXdhaXQgQ19NYXplUkRCLmdldF9mcm9tX3RibF9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF6ZV9hcnJheTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzZXRfdG9fcmRiKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlciwgbWF6ZTogQ19NYXplKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgbWFzZV9pZCA9IGF3YWl0IENfTWF6ZVJEQi5hZGRfdGJsKGRiX21haSwgbWVzLCBzYXZlX2lkLCBtYXplKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGRlbF90b19yZGIoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgQ19NYXplUkRCLmRlbF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBp+aMh+WumuOBleOCjOOBn21hemXjg6zjgrPjg7zjg4njgrvjg4Pjg4jjgpLoqq3jgb/ovrzjgb9cclxuICAgIC8vIE1hemXjgq/jg6njgrnjga7phY3liJfjgavjgrvjg4Pjg4jjgZnjgotcclxuICAgIC8vIFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBnZXRfZnJvbV90YmxfYWxsKFxyXG4gICAgICAgICAgICBkYl9tYWk6IGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgICAgICBtZXM6IENfRHNwTWVzc2FnZSwgXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6IG51bWJlclxyXG4gICAgKTogUHJvbWlzZTxDX01hemVbXT4ge1xyXG4gICAgICAgIGNvbnN0IGdldF9tYXplX1NRTCA9IGBcclxuICAgICAgICAgICAgU0VMRUNUIFx0aWQsIHNhdmVfaWQsIHVuaXFfaWQsIG5hbWUsIFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemVfeCwgc2l6ZV95LCBzaXplX3osIG1hcHMsIG1hc2sgXHJcbiAgICAgICAgICAgIEZST00gdGJsX21hemVcclxuICAgICAgICAgICAgV0hFUkUgICBzYXZlX2lkID0gOnNhdmVfaWRcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3Jlc3VsdFJlY29yZFNldF0gPSBhd2FpdCBkYl9tYWkucXVlcnk8SV90YmxfbWF6ZVtdPihnZXRfbWF6ZV9TUUwsIHtzYXZlX2lkOiBzYXZlX2lkfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAzMzogJHtnZXRfbWF6ZV9TUUx9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGlmIChyZXN1bHRSZWNvcmRTZXQubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1hemVfYXJyYXkgPSBbXSBhcyBDX01hemVbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHJyIG9mIHJlc3VsdFJlY29yZFNldCkge1xyXG4gICAgICAgICAgICBtYXplX2FycmF5LnB1c2gobmV3IENfTWF6ZShDX01hemVSREIuZnJvbV9zdHJpbmdBcnJheV90b19KU09OKHJyKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF6ZV9hcnJheTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC8vIERC5Yem55CG44CCbWF6ZeODhuODvOODluODq+OBq+iHqui6q+OBruODh+ODvOOCv+OCkui/veWKoChpbnNlcnQp44GX44GmXHJcbiAgICAvLyDjgZ3jga5JRChtYXplX2lkKeOCkui/lOOBmVxyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGFkZF90YmwoXHJcbiAgICAgICAgICAgIGRiX21haTogIGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgICAgICBtZXM6ICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgICAgICBzYXZlX2lkOiBudW1iZXIsXHJcbiAgICAgICAgICAgIG1hemU6ICAgIENfTWF6ZVxyXG4gICAgICAgICk6IFByb21pc2U8bnVtYmVyPiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGluc2VydF9tYXplX1NRTCA9IGBcclxuICAgICAgICAgICAgSU5TRVJUIElOVE8gdGJsX21hemUgKFxyXG4gICAgICAgICAgICAgICAgc2F2ZV9pZCwgdW5pcV9pZCwgbmFtZSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3gsIHNpemVfeSwgc2l6ZV96LCBtYXBzLCBtYXNrXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgVkFMVUVTIChcclxuICAgICAgICAgICAgICAgIDpzYXZlX2lkLCA6dW5pcV9pZCwgOm5hbWUsIFxyXG4gICAgICAgICAgICAgICAgOnNpemVfeCwgOnNpemVfeSwgOnNpemVfeiwgOm1hcHMsIDptYXNrIFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IGogPSBtYXplLmVuY29kZSgpO1xyXG4vL0RlYnVnXHJcbi8qXHJcbmNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICBcInNhdmVfaWQ9XCIgKyBzYXZlX2lkXHJcbiAgICArXCIsIHVuaXFfaWQ9XCIgKyBqLnVuaXFfaWRcclxuICAgICtcIiwgbmFtZT1cIiAgICArIGoubmFtZVxyXG4gICAgK1wiLCBzaXplX3g9XCIgICsgai5zaXplX3hcclxuICAgICtcIiwgc2l6ZV95PVwiICArIGouc2l6ZV95XHJcbiAgICArXCIsIHNpemVfej1cIiAgKyBqLnNpemVfelxyXG4gICAgK1wiLCBtYXBzPVwiICAgICsgai5tYXplXHJcbiAgICArXCIsIG1hc2s9XCIgICAgKyBqLm1hc2tcclxuKVxyXG4qL1xyXG4gICAgICAgIGF3YWl0IGRiX21haS5xdWVyeShpbnNlcnRfbWF6ZV9TUUwsIHtcclxuICAgICAgICAgICAgc2F2ZV9pZDogc2F2ZV9pZCxcclxuICAgICAgICAgICAgdW5pcV9pZDogai51bmlxX2lkLFxyXG4gICAgICAgICAgICBuYW1lOiAgICBqLm5hbWUsXHJcbiAgICAgICAgICAgIHNpemVfeDogIGouc2l6ZV94LFxyXG4gICAgICAgICAgICBzaXplX3k6ICBqLnNpemVfeSxcclxuICAgICAgICAgICAgc2l6ZV96OiAgai5zaXplX3osXHJcbiAgICAgICAgICAgIG1hcHM6ICAgIGoubWF6ZSxcclxuICAgICAgICAgICAgbWFzazogICAgai5tYXNrLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMzogJHtpbnNlcnRfbWF6ZV9TUUx9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gQ19NYXplUkRCLmxhc3RJbnNlcnQoZGJfbWFpLCBtZXMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyB0YmxfdGVhbeOBp+acgOW+jOOBq+i/veWKoOOBl+OBn+ihjOeVquWPtyhzYXZlX2lkKeOCkui/lOOBmeOAkDHooYzmjL/lhaXlsILnlKjjgJFcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgbGFzdEluc2VydChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlKSA6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgY29uc3QgbGFzdEluc2VydF9TUUwgPWBcclxuICAgICAgICAgICAgU0VMRUNUIExBU1RfSU5TRVJUX0lEKCkgYXMgaWQgRlJPTSB0YmxfbWF6ZTtcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3JlY29yZFNldF0gPSBhd2FpdCBkYl9tYWkucXVlcnk8SV9sYXN0SW5zZXJ0W10+KGxhc3RJbnNlcnRfU1FMKVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgNTAwOiAke2xhc3RJbnNlcnRfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChyZWNvcmRTZXQubGVuZ3RoIDwgMSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiByZWNvcmRTZXRbMF0uaWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBp+aMh+WumuOBleOCjOOBn+ODrOOCs+ODvOODiSjopIfmlbAp44KS5YmK6ZmkKGRlbGV0ZSnjgZnjgotcclxuICAgIC8vIFxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdGJsKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZV9tYXplX1NRTCA9IGBcclxuICAgICAgICAgICAgREVMRVRFIEZST00gdGJsX21hemUgXHJcbiAgICAgICAgICAgIFdIRVJFICBzYXZlX2lkID0gOnNhdmVfaWRcclxuICAgICAgICBgXHJcbiAgICAgICAgYXdhaXQgZGJfbWFpLnF1ZXJ5KGRlbGV0ZV9tYXplX1NRTCwge3NhdmVfaWQ6IHNhdmVfaWR9KVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMTI6ICR7ZGVsZXRlX21hemVfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdBcnJheV90b19KU09OKGo6IElfdGJsX21hemUpOiBKU09OX01hemUge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgIGouaWQsXHJcbiAgICAgICAgICAgIHVuaXFfaWQ6IGoudW5pcV9pZCxcclxuICAgICAgICAgICAgc2F2ZV9pZDogai5zYXZlX2lkLFxyXG4gICAgICAgICAgICBuYW1lOiAgICBqLm5hbWUsXHJcbiAgICAgICAgICAgIHNpemVfeDogIGouc2l6ZV94LFxyXG4gICAgICAgICAgICBzaXplX3k6ICBqLnNpemVfeSxcclxuICAgICAgICAgICAgc2l6ZV96OiAgai5zaXplX3osXHJcbiAgICAgICAgICAgIG1hemU6ICAgIGoubWFwcyxcclxuICAgICAgICAgICAgbWFzazogICAgai5tYXNrLFxyXG4vLyAgICAgICAgICAgIG9ianM6ICAgIEpTT04ucGFyc2Uoai5vYmpzKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIOWIqeeUqOOCr+ODqeOCueetieOBruiqreOBv+i+vOOBv1xyXG5pbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xyXG5pbXBvcnQgeyBDX0RzcE1lc3NhZ2UgfSAgICAgIGZyb20gJy4uL2RfdXRsL0NfRHNwTWVzc2FnZSc7IC8vIOeUu+mdouODoeODg+OCu+ODvOOCuOOBruihqOekuueUqOOCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCwgSlNPTl9Nb3ZhYmxlUG9pbnQgfSBmcm9tICcuLi9kX21kbC9DX01vdmFibGVQb2ludCc7XHJcblxyXG50eXBlIGRiX2Nvbm5lY3QgPSBteXNxbC5Qb29sQ29ubmVjdGlvbjtcclxuXHJcbmludGVyZmFjZSBJX3RibF9tdnB0IGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBpZDogICAgICAgICAgbnVtYmVyLFxyXG4gICAgc2F2ZV9pZDogICAgIG51bWJlcixcclxuICAgIHVuaXFfaWQ6ICAgICBzdHJpbmcsXHJcbiAgICBjdXJfdXJsOiAgICAgc3RyaW5nLFxyXG4gICAgdGVhbV91aWQ6ICAgIHN0cmluZyxcclxuICAgIGxvY19raW5kOiAgICBzdHJpbmcsIC8qIFVua246MCwgTWF6ZToxLCBHdWxkOjIgKi9cclxuICAgIGxvY19uYW1lOiAgICBzdHJpbmcsXHJcbiAgICBsb2NfdWlkOiAgICAgc3RyaW5nLFxyXG4gICAgbG9jX3Bvc194OiAgIG51bWJlcixcclxuICAgIGxvY19wb3NfeTogICBudW1iZXIsXHJcbiAgICBsb2NfcG9zX3o6ICAgbnVtYmVyLFxyXG4gICAgbG9jX3Bvc19kOiAgIG51bWJlciwgLyogTjowLCBFOjEsIFM6MiwgVzozIFg6OTkgKi9cclxuICB9XHJcbmludGVyZmFjZSBJX2xhc3RJbnNlcnQgZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ19NdnB0UkRCIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fcmRiX2FsbChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPENfTW92YWJsZVBvaW50W10+IHtcclxuICAgICAgICBjb25zdCBtdnB0X2FycmF5ID0gYXdhaXQgQ19NdnB0UkRCLmdldF9mcm9tX3RibF9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbXZwdF9hcnJheTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzZXRfdG9fcmRiKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlciwgbXZwdDogQ19Nb3ZhYmxlUG9pbnQpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCBtYXNlX2lkID0gYXdhaXQgQ19NdnB0UkRCLmFkZF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIG12cHQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RvX3JkYihkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBDX012cHRSREIuZGVsX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZlX2lk44Gn5oyH5a6a44GV44KM44GfbWF6ZeODrOOCs+ODvOODieOCu+ODg+ODiOOCkuiqreOBv+i+vOOBv1xyXG4gICAgLy8gTWF6ZeOCr+ODqeOCueOBrumFjeWIl+OBq+OCu+ODg+ODiOOBmeOCi1xyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGdldF9mcm9tX3RibF9hbGwoXHJcbiAgICAgICAgICAgIGRiX21haTogZGJfY29ubmVjdCwgXHJcbiAgICAgICAgICAgIG1lczogQ19Ec3BNZXNzYWdlLCBcclxuICAgICAgICAgICAgc2F2ZV9pZDogbnVtYmVyXHJcbiAgICApOiBQcm9taXNlPENfTW92YWJsZVBvaW50W10+IHtcclxuICAgICAgICBjb25zdCBnZXRfbXZwdF9TUUwgPSBgXHJcbiAgICAgICAgICAgIFNFTEVDVCBcdCAgICBpZCwgc2F2ZV9pZCwgdW5pcV9pZCwgY3VyX3VybCwgdGVhbV91aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY19raW5kLCAgbG9jX25hbWUsICBsb2NfdWlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NfcG9zX3gsIGxvY19wb3NfeSwgbG9jX3Bvc196LCBsb2NfcG9zX2RcclxuICAgICAgICAgICAgRlJPTSB0YmxfbXZwdFxyXG4gICAgICAgICAgICBXSEVSRSAgIHNhdmVfaWQgPSA6c2F2ZV9pZFxyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVzdWx0UmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haS5xdWVyeTxJX3RibF9tdnB0W10+KGdldF9tdnB0X1NRTCwge3NhdmVfaWQ6IHNhdmVfaWR9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDMzOiAke2dldF9tdnB0X1NRTH1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKHJlc3VsdFJlY29yZFNldC5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbXZwdF9hcnJheSA9IFtdIGFzIENfTW92YWJsZVBvaW50W107XHJcbiAgICAgICAgZm9yIChjb25zdCByciBvZiByZXN1bHRSZWNvcmRTZXQpIHtcclxuICAgICAgICAgICAgbXZwdF9hcnJheS5wdXNoKG5ldyBDX01vdmFibGVQb2ludChDX012cHRSREIuZnJvbV9zdHJpbmdBcnJheV90b19KU09OKHJyKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbXZwdF9hcnJheTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC8vIERC5Yem55CG44CCbWF6ZeODhuODvOODluODq+OBq+iHqui6q+OBruODh+ODvOOCv+OCkui/veWKoChpbnNlcnQp44GX44GmXHJcbiAgICAvLyDjgZ3jga5JRChtYXplX2lkKeOCkui/lOOBmVxyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGFkZF90YmwoXHJcbiAgICAgICAgICAgIGRiX21haTogIGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgICAgICBtZXM6ICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgICAgICBzYXZlX2lkOiBudW1iZXIsXHJcbiAgICAgICAgICAgIG12cHQ6ICAgIENfTW92YWJsZVBvaW50XHJcbiAgICAgICAgKTogUHJvbWlzZTxudW1iZXI+IHtcclxuXHJcbiAgICAgICAgY29uc3QgaW5zZXJ0X212cHRfU1FMID0gYFxyXG4gICAgICAgICAgICBJTlNFUlQgSU5UTyB0YmxfbXZwdChcclxuICAgICAgICAgICAgICAgIHNhdmVfaWQsICAgIHVuaXFfaWQsICAgIGN1cl91cmwsICAgIHRlYW1fdWlkLFxyXG4gICAgICAgICAgICAgICAgbG9jX2tpbmQsICAgbG9jX25hbWUsICAgbG9jX3VpZCxcclxuICAgICAgICAgICAgICAgIGxvY19wb3NfeCwgIGxvY19wb3NfeSwgIGxvY19wb3NfeiwgIGxvY19wb3NfZFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIFZBTFVFUyAoXHJcbiAgICAgICAgICAgICAgICA6c2F2ZV9pZCwgICA6dW5pcV9pZCwgICA6Y3VyX3VybCwgICA6dGVhbV91aWQsXHJcbiAgICAgICAgICAgICAgICA6bG9jX2tpbmQsICA6bG9jX25hbWUsICA6bG9jX3VpZCxcclxuICAgICAgICAgICAgICAgIDpsb2NfcG9zX3gsIDpsb2NfcG9zX3ksIDpsb2NfcG9zX3osIDpsb2NfcG9zX2QgXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgaiA9IG12cHQuZW5jb2RlKCk7XHJcbi8vRGVidWdcclxuLypcclxuY29uc29sZS5lcnJvcihcclxuICAgICAgICBcInNhdmVfaWQ9XCIgICArICAgIHNhdmVfaWRcclxuICAgICsgXCIsIHVuaXFfaWQ9XCIgICArICAgIGoudW5pcV9pZFxyXG4gICAgKyBcIiwgY3VyX3VybD1cIiAgICsgICAgai5jdXJfdXJsXHJcbiAgICArIFwiLCB0ZWFtX3VpZD1cIiAgKyAgICBqLnRlYW1fdWlkXHJcbiAgICArIFwiLCBsb2Nfa2luZD1cIiAgKyAgICBqLmtpbmRcclxuICAgICsgXCIsIGxvY19uYW1lPVwiICArICAgIGoubmFtZVxyXG4gICAgKyBcIiwgbG9jX3VpZD1cIiAgICsgICAgai5sb2NfdWlkXHJcbiAgICArIFwiLCBsb2NfcG9zX3g9XCIgKyAgIChqLmxvY19wb3M/Lng/PzApXHJcbiAgICArIFwiLCBsb2NfcG9zX3k9XCIgKyAgIChqLmxvY19wb3M/Lnk/PzApXHJcbiAgICArIFwiLCBsb2NfcG9zX3o9XCIgKyAgIChqLmxvY19wb3M/Lno/PzApXHJcbiAgICArIFwiLCBsb2NfcG9zX2Q9XCIgKyAgIChqLmxvY19wb3M/LmQ/PzApXHJcbilcclxuKi9cclxuYXdhaXQgZGJfbWFpLnF1ZXJ5KGluc2VydF9tdnB0X1NRTCwge1xyXG4gICAgICAgICAgICBzYXZlX2lkOiAgICAgc2F2ZV9pZCxcclxuICAgICAgICAgICAgdW5pcV9pZDogICAgIGoudW5pcV9pZCxcclxuICAgICAgICAgICAgY3VyX3VybDogICAgIGouY3VyX3VybCxcclxuICAgICAgICAgICAgdGVhbV91aWQ6ICAgIGoudGVhbV91aWQsXHJcbiAgICAgICAgICAgIGxvY19raW5kOiAgICBqLmtpbmQsXHJcbiAgICAgICAgICAgIGxvY19uYW1lOiAgICBqLm5hbWUsXHJcbiAgICAgICAgICAgIGxvY191aWQ6ICAgICBqLmxvY191aWQsXHJcbiAgICAgICAgICAgIGxvY19wb3NfeDogICBqLmxvY19wb3M/Lng/PzAsXHJcbiAgICAgICAgICAgIGxvY19wb3NfeTogICBqLmxvY19wb3M/Lnk/PzAsXHJcbiAgICAgICAgICAgIGxvY19wb3NfejogICBqLmxvY19wb3M/Lno/PzAsXHJcbiAgICAgICAgICAgIGxvY19wb3NfZDogICBqLmxvY19wb3M/LmQ/Pzk5LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMzogJHtpbnNlcnRfbXZwdF9TUUx9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gQ19NdnB0UkRCLmxhc3RJbnNlcnQoZGJfbWFpLCBtZXMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyB0YmxfdGVhbeOBp+acgOW+jOOBq+i/veWKoOOBl+OBn+ihjOeVquWPtyhzYXZlX2lkKeOCkui/lOOBmeOAkDHooYzmjL/lhaXlsILnlKjjgJFcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgbGFzdEluc2VydChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlKSA6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgY29uc3QgbGFzdEluc2VydF9TUUwgPWBcclxuICAgICAgICAgICAgU0VMRUNUIExBU1RfSU5TRVJUX0lEKCkgYXMgaWQgRlJPTSB0YmxfbXZwdDtcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3JlY29yZFNldF0gPSBhd2FpdCBkYl9tYWkucXVlcnk8SV9sYXN0SW5zZXJ0W10+KGxhc3RJbnNlcnRfU1FMKVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgNTAwOiAke2xhc3RJbnNlcnRfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChyZWNvcmRTZXQubGVuZ3RoIDwgMSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiByZWNvcmRTZXRbMF0uaWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBp+aMh+WumuOBleOCjOOBn+ODrOOCs+ODvOODiSjopIfmlbAp44KS5YmK6ZmkKGRlbGV0ZSnjgZnjgotcclxuICAgIC8vIFxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdGJsKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZV9tdnB0X1NRTCA9IGBcclxuICAgICAgICAgICAgREVMRVRFIEZST00gdGJsX212cHQgXHJcbiAgICAgICAgICAgIFdIRVJFICBzYXZlX2lkID0gOnNhdmVfaWRcclxuICAgICAgICBgXHJcbiAgICAgICAgYXdhaXQgZGJfbWFpLnF1ZXJ5KGRlbGV0ZV9tdnB0X1NRTCwge3NhdmVfaWQ6IHNhdmVfaWR9KVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMTI6ICR7ZGVsZXRlX212cHRfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdBcnJheV90b19KU09OKGo6IElfdGJsX212cHQpOiBKU09OX01vdmFibGVQb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdW5pcV9pZDogICAgIGoudW5pcV9pZCxcclxuICAgICAgICAgICAgY3VyX3VybDogICAgIGouY3VyX3VybCxcclxuICAgICAgICAgICAgdGVhbV91aWQ6ICAgIGoudGVhbV91aWQsXHJcbiAgICAgICAgICAgIGtpbmQ6ICAgICAgICBqLmxvY19raW5kLFxyXG4gICAgICAgICAgICBuYW1lOiAgICAgICAgai5sb2NfbmFtZSxcclxuICAgICAgICAgICAgbG9jX3VpZDogICAgIGoubG9jX3VpZCxcclxuICAgICAgICAgICAgbG9jX3Bvczoge1xyXG4gICAgICAgICAgICAgICAgeDogICAgICAgai5sb2NfcG9zX3g/PzAsXHJcbiAgICAgICAgICAgICAgICB5OiAgICAgICBqLmxvY19wb3NfeT8/MCxcclxuICAgICAgICAgICAgICAgIHo6ICAgICAgIGoubG9jX3Bvc196Pz8wLFxyXG4gICAgICAgICAgICAgICAgZDogICAgICAgai5sb2NfcG9zX2Q/Pzk5LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iLCJcclxuLy8g5Yip55So44Kv44Op44K5562J44Gu6Kqt44G/6L6844G/XHJcbmltcG9ydCAgIG15c3FsICAgICAgICAgICAgZnJvbSBcIm15c3FsMi9wcm9taXNlXCI7XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9ICAgZnJvbSAnLi4vLi4vLi4vbWFpL3NyYy9kX3V0bC9DX0RzcE1lc3NhZ2UnOyAvLyDnlLvpnaLjg6Hjg4Pjgrvjg7zjgrjjga7ooajnpLrnlKjjgq/jg6njgrlcclxuaW1wb3J0IHsgQ19TYXZlRGF0YSB9ICAgICBmcm9tIFwiLi4vLi4vLi4vbWFpL3NyYy9kX21kbC9DX1NhdmVEYXRhXCI7XHJcbmltcG9ydCB7IENfU2F2ZUluZm8gfSAgICAgZnJvbSBcIi4uLy4uLy4uL21haS9zcmMvZF9tZGwvQ19TYXZlSW5mb1wiO1xyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCB9IGZyb20gXCIuLi8uLi8uLi9tYWkvc3JjL2RfbWRsL0NfTW92YWJsZVBvaW50XCI7XHJcbmltcG9ydCB7IENfVGVhbVJEQiB9ICAgICAgZnJvbSBcIi4vQ19UZWFtUkRCXCI7XHJcbmltcG9ydCB7IENfSGVyb1JEQiB9ICAgICAgZnJvbSBcIi4vQ19IZXJvUkRCXCI7XHJcbmltcG9ydCB7IENfTWF6ZVJEQiB9ICAgICAgZnJvbSBcIi4vQ19NYXplUkRCXCI7XHJcbmltcG9ydCB7IENfR3VpbGRSREIgfSAgICAgZnJvbSBcIi4vQ19HdWlsZFJEQlwiO1xyXG5pbXBvcnQgeyBDX012cHRSREIgfSBmcm9tIFwiLi9DX012cHRSREJcIjtcclxuXHJcbnR5cGUgZGJfY29ubmVjdCA9IG15c3FsLlBvb2xDb25uZWN0aW9uO1xyXG5cclxuaW50ZXJmYWNlIElfdGJsX1NhdmVJbmZvIGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBzYXZlX2lkOiAgIG51bWJlcjtcclxuICAgIHBsYXllcl9pZDogbnVtYmVyO1xyXG4gICAgdW5pcV9ubzogICBudW1iZXI7IFxyXG4gICAgdGl0bGU6ICAgICBzdHJpbmc7IFxyXG4gICAgZGV0YWlsOiAgICBzdHJpbmc7IFxyXG4gICAgcG9pbnQ6ICAgICBzdHJpbmc7IFxyXG4gICAgYXV0b19tb2RlOiBzdHJpbmc7IFxyXG4gICAgaXNfYWN0aXZlOiBzdHJpbmc7IFxyXG4gICAgaXNfZGVsZXRlOiBzdHJpbmc7IFxyXG4gICAgbXA6ICAgICAgICBzdHJpbmc7ICAvLyBteXBvc1xyXG4gICAgc2F2ZV90aW1lOiBzdHJpbmc7XHJcbn1cclxuaW50ZXJmYWNlIElfdGJsX1NhdmVEYXRhIGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCAge1xyXG4gICAgc2F2ZV9pZDogICBudW1iZXI7XHJcbiAgICBwbGF5ZXJfaWQ6IG51bWJlcjtcclxuICAgIHVuaXFfbm86ICAgbnVtYmVyOyBcclxuICAgIHRpdGxlOiAgICAgc3RyaW5nOyBcclxuICAgIGRldGFpbDogICAgc3RyaW5nOyBcclxuICAgIHBvaW50OiAgICAgc3RyaW5nOyBcclxuICAgIGF1dG9fbW9kZTogc3RyaW5nOyBcclxuICAgIGlzX2FjdGl2ZTogc3RyaW5nOyBcclxuICAgIGlzX2RlbGV0ZTogc3RyaW5nOyBcclxuICAgIG1wOiAgICAgICAgc3RyaW5nOyAgLy8gbXlwb3NcclxuICAgIHNhdmVfdGltZTogc3RyaW5nO1xyXG4vLyAgICBtdnB0OiAgICAgIHN0cmluZzsgIC8vIGFsbF9tdnB0XHJcbn1cclxuaW50ZXJmYWNlIElfdGJsX1NhdmVJZCAgIGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBzYXZlX2lkOiBudW1iZXI7XHJcbn1cclxuaW50ZXJmYWNlIElfbGFzdEluc2VydCAgIGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19TYXZlSW5mb1JEQiB7XHJcbiAgICAvLyBEQuWHpueQhuOAgnBsYXllcl9k44Gr6Kmy5b2T44GZ44KL44K744O844OW44OH44O844K/44KSRELjgYvjgonoqq3jgb/ovrzjgb9cclxuICAgIC8vIFNhdmVJbmZvW13jga7phY3liJfjgpLov5TjgZlcclxuICAgIC8vIOmdnua0u+aAp+ODh+ODvOOCv+OChOWJiumZpOa4iOODh+ODvOOCv+OBr+OCueOCreODg+ODl+OBmeOCi1xyXG4gICAgLy8gXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldF9saXN0X2J5X3BpZChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBwbGF5ZXJfaWQ6IG51bWJlcik6IFByb21pc2U8Q19TYXZlSW5mb1tdPiB7XHJcbiAgICAgICAgY29uc3QgZ2V0X3NhdmVfU1FMID0gYFxyXG4gICAgICAgICAgICBTRUxFQ1Qgc2F2ZV9pZCwgcGxheWVyX2lkLCB1bmlxX25vLCB0aXRsZSwgZGV0YWlsLCBwb2ludCwgXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b19tb2RlLCBpc19hY3RpdmUsIGlzX2RlbGV0ZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgbXlwb3MgYXMgbXAsIFxyXG4gICAgICAgICAgICAgICAgICAgIERBVEVfRk9STUFUKHNhdmVfdGltZSwnJVktJW0tJWRUJUg6JWk6JXMuJWZaJykgQVMgc2F2ZV90aW1lXHJcbiAgICAgICAgICAgIEZST00gICB0Ymxfc2F2ZVxyXG4gICAgICAgICAgICBXSEVSRSAgcGxheWVyX2lkID0gOnBsYXllcl9pZCBcclxuICAgICAgICAgICAgT1JERVIgIEJZIHRpdGxlIENPTExBVEUgdXRmOG1iNF91bmljb2RlX2NpIEFTQ1xyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haS5xdWVyeTxJX3RibF9TYXZlSW5mb1tdPihnZXRfc2F2ZV9TUUwsIHtwbGF5ZXJfaWQ6IHBsYXllcl9pZH0pXHJcbiAgICAgICAgLmNhdGNoICgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCA1MDogJHtnZXRfc2F2ZV9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlY29yZFNldC5sZW5ndGggPCAxKSByZXR1cm4gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHNhdmVfZGF0YV9zZXQ6IENfU2F2ZUluZm9bXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gcmVjb3JkU2V0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZWNvcmRTZXRbaWldLmlzX2FjdGl2ZSA9PSAnMCcpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAocmVjb3JkU2V0W2lpXS5pc19kZWxldGUgIT0gJzAnKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNhdmUgPSBuZXcgQ19TYXZlSW5mbyhyZWNvcmRTZXRbaWldKTtcclxuICAgICAgICAgICAgc2F2ZS5teXBvcyAgICAgPSBDX01vdmFibGVQb2ludC5mcm9tX3N0cmluZ190b19vYmoocmVjb3JkU2V0W2lpXS5tcClcclxuICAgIFxyXG4gICAgICAgICAgICBzYXZlX2RhdGFfc2V0LnB1c2goc2F2ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzYXZlX2RhdGFfc2V0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBEQuWHpueQhuOAguODpuODi+ODvOOCr+ODu+ODiuODs+ODkOODvOOBi+OCiXNhdmVfaWTjgpLlvpfjgovjgILoqbLlvZPjgZnjgovjg6zjgrPjg7zjg4njgYznhKHjgZHjgozjgbDmiLvjgorlgKTjgactMeOCkui/lOOBmVxyXG4gICAgLy8gXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldF9zYXZlX2lkX2F0X3RibChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBwbGF5ZXJfaWQ6IG51bWJlcix1bmlxX25vOiBudW1iZXIpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGNvbnN0IHNlZWtfc2F2ZV9TUUwgPSBgXHJcbiAgICAgICAgICAgIFNFTEVDVCBzYXZlX2lkXHJcbiAgICAgICAgICAgIEZST00gICB0Ymxfc2F2ZVxyXG4gICAgICAgICAgICBXSEVSRSAgcGxheWVyX2lkID0gOnBsYXllcl9pZCBBTkQgdW5pcV9ubyA9IDp1bmlxX25vXHJcbiAgICAgICAgICAgIE9SREVSICBCWSB1bmlxX25vXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpLnF1ZXJ5PElfdGJsX1NhdmVJZFtdPihzZWVrX3NhdmVfU1FMLCB7cGxheWVyX2lkOiBwbGF5ZXJfaWQsIHVuaXFfbm86IHVuaXFfbm99KVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMjA6ICR7c2Vla19zYXZlX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAocmVjb3JkU2V0Lmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNOYU4ocmVjb3JkU2V0WzBdLnNhdmVfaWQpKSB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYHNhdmVfaWQg5pWw5YCk44Ko44Op44O8IDIxOiAke3JlY29yZFNldFswXS5zYXZlX2lkfSBgKTtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTnVtYmVyKHJlY29yZFNldFswXS5zYXZlX2lkKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ19TYXZlRGF0YVJEQiB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRfZnJvbV9yZGIoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyKTogUHJvbWlzZTxDX1NhdmVEYXRhfHVuZGVmaW5lZD4ge1xyXG4vL2RlYnVnIGNvbnNvbGUuZXJyb3IoYHByZSBnZXRfZnJvbSBTYXZlRGF0YVJEQiBzYXZlX2lkPSR7c2F2ZV9pZH1gKTtcclxuICAgICAgICBjb25zdCBzYXZlX2RhdGEgID0gYXdhaXQgQ19TYXZlRGF0YVJEQi5nZXRfZnJvbV90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChzYXZlX2RhdGEgPT09IHVuZGVmaW5lZCB8fCBtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuLy9kZWJ1ZyBjb25zb2xlLmVycm9yKGBwcmUgZ2V0X2Zyb20gTWF6ZVJEQiBzYXZlX2lkPSR7c2F2ZV9pZH1gKTtcclxuICAgICAgICBjb25zdCBtYXplX2FycmF5ID0gYXdhaXQgQ19NYXplUkRCLmdldF9mcm9tX3JkYl9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBtYXplIG9mIG1hemVfYXJyYXkpIHNhdmVfZGF0YS5hbGxfbWF6ZVttYXplLnVpZCgpXSA9IG1hemU7XHJcbiBcclxuLy9kZWJ1ZyBjb25zb2xlLmVycm9yKGBwcmUgZ2V0X2Zyb20gTXZwdFJEQiBzYXZlX2lkPSR7c2F2ZV9pZH1gKTtcclxuICAgICAgICBjb25zdCBtdnB0X2FycmF5ID0gYXdhaXQgQ19NdnB0UkRCLmdldF9mcm9tX3JkYl9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBtdnB0IG9mIG12cHRfYXJyYXkpIHNhdmVfZGF0YS5hbGxfbXZwdFttdnB0LnVpZCgpXSA9IG12cHQ7XHJcbiAgICAgICAgXHJcbi8vZGVidWcgY29uc29sZS5lcnJvcihgcHJlIGdldF9mcm9tIFRlYW1SREIgc2F2ZV9pZD0ke3NhdmVfaWR9YCk7XHJcbiAgICAgICAgY29uc3QgdGVhbV9hcnJheSA9IGF3YWl0IENfVGVhbVJEQi5nZXRfZnJvbV9yZGJfYWxsKGRiX21haSwgbWVzLCBzYXZlX2lkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IHRlYW0gb2YgdGVhbV9hcnJheSkgc2F2ZV9kYXRhLmFsbF90ZWFtW3RlYW0udWlkKCldID0gdGVhbTtcclxuICAgICAgICBcclxuLy9kZWJ1ZyBjb25zb2xlLmVycm9yKGBwcmUgZ2V0X2Zyb20gR3VpbGRSREIgc2F2ZV9pZD0ke3NhdmVfaWR9YCk7XHJcbiAgICAgICAgY29uc3QgZ3VsZF9hcnJheSA9IGF3YWl0IENfR3VpbGRSREIuZ2V0X2Zyb21fcmRiX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBndWxkIG9mIGd1bGRfYXJyYXkpIHNhdmVfZGF0YS5hbGxfZ3VsZFtndWxkLnVpZCgpXSA9IGd1bGQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHNhdmVfZGF0YTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzZXRfdG9fcmRiKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmU6IENfU2F2ZURhdGF8dW5kZWZpbmVkKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgaWYgKHNhdmUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNhdmVfaWQgPSBhd2FpdCBDX1NhdmVEYXRhUkRCLmFkZF90YmwoZGJfbWFpLCBtZXMsIHNhdmUpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuLy9kZWJ1ZyBjb25zb2xlLmVycm9yKGBzYXZlX2lkID0gJHtzYXZlX2lkfWApO1xyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gc2F2ZS5hbGxfbWF6ZSkge1xyXG4gICAgICAgICAgICBhd2FpdCBDX01hemVSREIuc2V0X3RvX3JkYihkYl9tYWksIG1lcywgc2F2ZV9pZCwgc2F2ZS5hbGxfbWF6ZVtpaV0pO1xyXG4gICAgICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gc2F2ZS5hbGxfbXZwdCkge1xyXG4vL2RlYnVnIGNvbnNvbGUuZXJyb3IoYHNhdmVfaWQgPSAke3NhdmVfaWR9LCBtdnB0WyR7aWl9XSA9ICR7c2F2ZS5hbGxfbXZwdFtpaV19YCk7XHJcbiAgICAgICAgICAgIGF3YWl0IENfTXZwdFJEQi5zZXRfdG9fcmRiKGRiX21haSwgbWVzLCBzYXZlX2lkLCBzYXZlLmFsbF9tdnB0W2lpXSk7XHJcbiAgICAgICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHNhdmUuYWxsX3RlYW0pIHtcclxuICAgICAgICAgICAgYXdhaXQgQ19UZWFtUkRCLnNldF90b19yZGIoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIHNhdmUuYWxsX3RlYW1baWldKTtcclxuICAgICAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gc2F2ZS5hbGxfZ3VsZCkge1xyXG4gICAgICAgICAgICBhd2FpdCBDX0d1aWxkUkRCLnNldF90b19yZGIoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIHNhdmUuYWxsX2d1bGRbaWldKTtcclxuICAgICAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdG9fcmRiKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGF3YWl0IENfSGVyb1JEQi5kZWxfdGJsX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBDX0d1aWxkUkRCLmRlbF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgQ19UZWFtUkRCLmRlbF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgQ19NdnB0UkRCLmRlbF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgQ19NYXplUkRCLmRlbF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgQ19TYXZlRGF0YVJEQi5kZWxfdGJsKGRiX21haSwgbWVzLCBzYXZlX2lkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBEQuWHpueQhuOAgnNhdmVfaWTjgafmjIflrprjgZXjgozjgZ9zYXZl44Os44Kz44O844OJKOWNmOaVsCnjgpLoqq3jgb/ovrzjgb9cclxuICAgIC8vIHNhdmVfZGF0YeOCkui/lOOBmVxyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGdldF9mcm9tX3RibChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPENfU2F2ZURhdGF8dW5kZWZpbmVkPiB7XHJcbiAgICAgICAgY29uc3QgZ2V0X3NhdmVfU1FMID0gYFxyXG4gICAgICAgICAgICBTRUxFQ1QgIHNhdmVfaWQsIHBsYXllcl9pZCwgdW5pcV9ubywgdGl0bGUsIGRldGFpbCwgcG9pbnQsIFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9fbW9kZSwgaXNfYWN0aXZlLCBpc19kZWxldGUsIFxyXG4gICAgICAgICAgICAgICAgICAgIG15cG9zIGFzIG1wLCBEQVRFX0ZPUk1BVChzYXZlX3RpbWUsJyVZLSVtLSVkVCVIOiVpOiVzLiVmWicpIEFTIHNhdmVfdGltZVxyXG4gICAgICAgICAgICBGUk9NICAgdGJsX3NhdmVcclxuICAgICAgICAgICAgV0hFUkUgIHNhdmVfaWQgPSA6c2F2ZV9pZFxyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haS5xdWVyeTxJX3RibF9TYXZlRGF0YVtdPihnZXRfc2F2ZV9TUUwsIHtzYXZlX2lkOiBzYXZlX2lkfSlcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDMwOiAke2dldF9zYXZlX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuXHJcbi8vZGVndWIgXHJcbmlmIChyZWNvcmRTZXQgPT09IHVuZGVmaW5lZCkgY29uc29sZS5lcnJvcihgU2F2ZURhdGFSREIuZ2V0X2Zyb21fdGFibGUgRXJyb3I6IHVuZGVmaW5kZSEhIHNhdmVfaWQ9JHtzYXZlX2lkfWApO1xyXG4gICAgICAgIGlmIChyZWNvcmRTZXQubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGDoqbLlvZPjgZnjgovjg4fjg7zjgr/jgYzmnInjgorjgb7jgZvjgpM6ICR7Z2V0X3NhdmVfU1FMfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2F2ZSA9IG5ldyBDX1NhdmVEYXRhKHJlY29yZFNldFswXSk7XHJcbiAgICAgICAgc2F2ZS5teXBvcyAgICAgPSBDX01vdmFibGVQb2ludC5mcm9tX3N0cmluZ190b19vYmoocmVjb3JkU2V0WzBdLm1wKVxyXG4vLyAgICAgICAgc2F2ZS5hbGxfbXZwdCAgPSBDX01vdmFibGVQb2ludC5mcm9tX3N0cmluZ190b19vYmpBcnJheShyZWNvcmRTZXRbMF0ubXZwdCk7XHJcbi8vICAgICAgICBzYXZlLmFsbF9tYXplICA9IENfTWF6ZSAuZnJvbV9zdHJpbmdfdG9fb2JqQXJyYXkocmVjb3JkU2V0WzBdLm1hemUpO1xyXG4vLyAgICAgICAgc2F2ZS5hbGxfdGVhbSAgPSBDX1RlYW0gLmZyb21fc3RyaW5nX3RvX29iakFycmF5KHJlY29yZFNldFswXS50ZWFtKTtcclxuLy8gICAgICAgIHNhdmUuYWxsX2d1bGQgID0gQ19HdWlsZC5mcm9tX3N0cmluZ190b19vYmpBcnJheShyZWNvcmRTZXRbMF0uZ3VsZCk7XHJcblxyXG4gICAgICAgIHJldHVybiBzYXZlO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZl44OG44O844OW44Or44Gr6Ieq6Lqr44Gu44OH44O844K/44KS6L+95YqgKGluc2VydCnjgZfjgaZcclxuICAgIC8vIOOBneOBrklEKHNhdmVfaWQp44KS6L+U44GZXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgYWRkX3RibChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlOiBDX1NhdmVEYXRhKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBjb25zdCBhdXRvX21vZGUgPSBzYXZlLmF1dG9fbW9kZSA/ICcxJyA6ICcwJztcclxuICAgICAgICBjb25zdCBpc19hY3RpdmUgPSBzYXZlLmlzX2FjdGl2ZSA/ICcxJyA6ICcwJztcclxuICAgICAgICBjb25zdCBpc19kZWxldGUgPSBzYXZlLmlzX2RlbGV0ZSA/ICcxJyA6ICcwJztcclxuXHJcbiAgICAgICAgY29uc3QgaW5zZXJ0X3NhdmVfU1FMID1gXHJcbiAgICAgICAgICAgIElOU0VSVCAgSU5UTyB0Ymxfc2F2ZSAoXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyX2lkLCB1bmlxX25vLCAgIHRpdGxlLCBkZXRhaWwsIHBvaW50LCBcclxuICAgICAgICAgICAgICAgICAgICBteXBvcywgXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b19tb2RlLCBpc19hY3RpdmUsIGlzX2RlbGV0ZVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBWQUxVRVMgKCBcclxuICAgICAgICAgICAgICAgICAgICA6cGxheWVyX2lkLCA6dW5pcV9ubywgICA6dGl0bGUsIDpkZXRhaWwsIDpwb2ludCwgXHJcbiAgICAgICAgICAgICAgICAgICAgOm15cG9zLCBcclxuICAgICAgICAgICAgICAgICAgICA6YXV0b19tb2RlLCA6aXNfYWN0aXZlLCA6aXNfZGVsZXRlKVxyXG4gICAgICAgIGBcclxuICAgICAgICBhd2FpdCBkYl9tYWkucXVlcnkoaW5zZXJ0X3NhdmVfU1FMLCB7XHJcbiAgICAgICAgICAgIHBsYXllcl9pZDogc2F2ZS5wbGF5ZXJfaWQsXHJcbiAgICAgICAgICAgIHVuaXFfbm86ICAgc2F2ZS51bmlxX25vLFxyXG4gICAgICAgICAgICB0aXRsZTogICAgIHNhdmUudGl0bGUsXHJcbiAgICAgICAgICAgIGRldGFpbDogICAgc2F2ZS5kZXRhaWwsXHJcbiAgICAgICAgICAgIHBvaW50OiAgICAgc2F2ZS5wb2ludCxcclxuICAgICAgICAgICAgbXlwb3M6ICAgICBDX01vdmFibGVQb2ludC5mcm9tX29ial90b19zdHJpbmcoc2F2ZS5teXBvcyksXHJcbi8vICAgICAgICAgICAgYWxsX212cHQ6ICBDX01vdmFibGVQb2ludC5mcm9tX29iakFycmF5X3RvX3N0cmluZyhzYXZlLmFsbF9tdnB0KSxcclxuICAgICAgICAgICAgYXV0b19tb2RlOiBhdXRvX21vZGUsXHJcbiAgICAgICAgICAgIGlzX2FjdGl2ZTogaXNfYWN0aXZlLFxyXG4gICAgICAgICAgICBpc19kZWxldGU6IGlzX2RlbGV0ZSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMDogJHtpbnNlcnRfc2F2ZV9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gLTFcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gQ19TYXZlRGF0YVJEQi5sYXN0SW5zZXJ0KGRiX21haSwgbWVzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gdGJsX3NhdmVfZGF0YeOBp+acgOW+jOOBq+i/veWKoOOBl+OBn+ihjOeVquWPtyhzYXZlX2lkKeOCkui/lOOBmeOAkDHooYzmjL/lhaXlsILnlKjjgJFcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgbGFzdEluc2VydChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlKSA6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgY29uc3QgbGFzdEluc2VydF9TUUwgPWBcclxuICAgICAgICAgICAgU0VMRUNUIExBU1RfSU5TRVJUX0lEKCkgYXMgaWQgRlJPTSB0Ymxfc2F2ZTtcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3JlY29yZFNldF0gPSBhd2FpdCBkYl9tYWkucXVlcnk8SV9sYXN0SW5zZXJ0W10+KGxhc3RJbnNlcnRfU1FMKVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgNTAwOiAke2xhc3RJbnNlcnRfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChyZWNvcmRTZXQubGVuZ3RoIDwgMSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiByZWNvcmRTZXRbMF0uaWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBp+aMh+WumuOBleOCjOOBn+ODrOOCs+ODvOODieOCkuWJiumZpChkZWxldGUp44GZ44KLXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgZGVsX3RibChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCBkZWxldGVfc2F2ZV9TUUwgPSBgXHJcbiAgICAgICAgICAgIERFTEVURSBGUk9NIHRibF9zYXZlIFxyXG4gICAgICAgICAgICBXSEVSRSAgc2F2ZV9pZCA9IDpzYXZlX2lkXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGF3YWl0IGRiX21haS5xdWVyeShkZWxldGVfc2F2ZV9TUUwsIHtcclxuICAgICAgICAgICAgc2F2ZV9pZCAgOiBzYXZlX2lkLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoICgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAxMDogJHtkZWxldGVfc2F2ZV9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8g5Yip55So44Kv44Op44K5562J44Gu6Kqt44G/6L6844G/XHJcbmltcG9ydCBteXNxbCBmcm9tICdteXNxbDIvcHJvbWlzZSc7XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9ICAgICAgIGZyb20gJy4uL2RfdXRsL0NfRHNwTWVzc2FnZSc7IC8vIOeUu+mdouODoeODg+OCu+ODvOOCuOOBruihqOekuueUqOOCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX1RlYW0sIEpTT05fVGVhbSB9ICBmcm9tIFwiLi4vZF9tZGwvQ19UZWFtXCI7XHJcbmltcG9ydCB7IENfSGVyb1JEQiB9ICAgICAgICAgIGZyb20gJy4vQ19IZXJvUkRCJztcclxuXHJcbnR5cGUgZGJfY29ubmVjdCA9IG15c3FsLlBvb2xDb25uZWN0aW9uO1xyXG5cclxuaW50ZXJmYWNlIElfdGJsX3RlYW0gZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0IHtcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICBzYXZlX2lkOiBudW1iZXIsXHJcbiAgICB1bmlxX2lkOiBzdHJpbmcsXHJcbiAgICBuYW1lOiAgICBzdHJpbmcsXHJcbiAgICBsb2NhdGU6ICBzdHJpbmcsXHJcbiAgICBnb2xkOiAgICBudW1iZXIsXHJcbi8vICAgIGdvb2RzOiAgIHN0cmluZyxcclxufVxyXG5pbnRlcmZhY2UgSV9sYXN0SW5zZXJ0IGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19UZWFtUkRCIHsgXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fcmRiX2FsbChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPENfVGVhbVtdPiB7XHJcbiAgICAgICAgY29uc3QgdGVhbV9hcnJheSA9IGF3YWl0IENfVGVhbVJEQi5nZXRfZnJvbV90YmxfYWxsKGRiX21haSwgbWVzLCBzYXZlX2lkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCB0ZWFtIG9mIHRlYW1fYXJyYXkpIHtcclxuICAgICAgICAgICAgY29uc3QgaHJlc19hcnJheSA9IGF3YWl0IENfSGVyb1JEQi5nZXRfZnJvbV9yZGJfYWxsKGRiX21haSwgbWVzLCBzYXZlX2lkLCB0ZWFtLnVpZCgpKTtcclxuICAgICAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaGVybyBvZiBocmVzX2FycmF5KSB0ZWFtLmFkZF9oZXJvKGhlcm8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVhbV9hcnJheTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRfZnJvbV9yZGIoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyLCB0ZWFtOiBDX1RlYW0pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCByc2x0MCA9IGF3YWl0IENfVGVhbVJEQi5nZXRfZnJvbV90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIHRlYW0udWlkKCkpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBocmVzX2FycmF5ID0gYXdhaXQgQ19IZXJvUkRCLmdldF9mcm9tX3JkYl9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIHRlYW0udWlkKCkpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGhlcm8gb2YgaHJlc19hcnJheSkgdGVhbS5hZGRfaGVybyhoZXJvKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzZXRfdG9fcmRiKFxyXG4gICAgICAgIGRiX21haTogIGRiX2Nvbm5lY3QsXHJcbiAgICAgICAgbWVzOiAgICAgQ19Ec3BNZXNzYWdlLFxyXG4gICAgICAgIHNhdmVfaWQ6IG51bWJlcixcclxuICAgICAgICB0ZWFtOiAgICBDX1RlYW1cclxuICAgICk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IHRlYW1faWQgPSBhd2FpdCBDX1RlYW1SREIuYWRkX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCwgdGVhbSk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgaGVybyBvZiB0ZWFtLmhyZXMoKSkge1xyXG4gICAgICAgICAgICBhd2FpdCBDX0hlcm9SREIuc2V0X3RvX3JkYihkYl9tYWksIG1lcywgc2F2ZV9pZCwgdGVhbS51aWQoKSwgaGVybyk7XHJcbiAgICAgICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RvX3JkYihkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIsIHRlYW1fdWlkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBhd2FpdCBDX0hlcm9SREIuZGVsX3RvX3JkYihkYl9tYWksIG1lcywgc2F2ZV9pZCwgdGVhbV91aWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBDX1RlYW1SREIuZGVsX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZlX2lk44Gn5oyH5a6a44GV44KM44GfdGVhbeODrOOCs+ODvOODieOCu+ODg+ODiOOCkuiqreOBv+i+vOOBv1xyXG4gICAgLy8gVGVhbeOCr+ODqeOCueOBrumFjeWIl+OBq+OCu+ODg+ODiOOBmeOCi1xyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGdldF9mcm9tX3RibF9hbGwoXHJcbiAgICAgICAgZGJfbWFpOiAgZGJfY29ubmVjdCwgXHJcbiAgICAgICAgbWVzOiAgICAgQ19Ec3BNZXNzYWdlLCBcclxuICAgICAgICBzYXZlX2lkOiBudW1iZXIsXHJcbiAgICApOiBQcm9taXNlPENfVGVhbVtdPiB7XHJcbiAgICAgICAgY29uc3QgZ2V0X3RlYW1fU1FMID1gXHJcbiAgICAgICAgICAgIFNFTEVDVCBcdGlkLCBzYXZlX2lkLCB1bmlxX2lkLCBuYW1lLCBsb2NhdGUsIGdvbGRcclxuICAgICAgICAgICAgRlJPTSB0YmxfdGVhbVxyXG4gICAgICAgICAgICBXSEVSRSAgIHNhdmVfaWQgPSA6c2F2ZV9pZFxyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVzdWx0UmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haS5xdWVyeTxJX3RibF90ZWFtW10+KGdldF90ZWFtX1NRTCwge3NhdmVfaWQ6IHNhdmVfaWR9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDM3YTogJHtnZXRfdGVhbV9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBpZiAocmVzdWx0UmVjb3JkU2V0Lmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0ZWFtX2FycmF5ID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCByciBvZiByZXN1bHRSZWNvcmRTZXQpIHtcclxuICAgICAgICAgICAgdGVhbV9hcnJheS5wdXNoKG5ldyBDX1RlYW0oQ19UZWFtUkRCLmZyb21fc3RyaW5nQXJyYXlfdG9fSlNPTihycikpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRlYW1fYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZlX2lk44Go6Ieq6Lqr44GudW5pcV9pZOOBp+aMh+WumuOBleOCjOOBn3RlYW3jg6zjgrPjg7zjg4njgrvjg4Pjg4jjgpLoqq3jgb/ovrzjgoBcclxuICAgIC8vIFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBnZXRfZnJvbV90YmwoXHJcbiAgICAgICAgZGJfbWFpOiAgIGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgIG1lczogICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgIHNhdmVfaWQ6ICBudW1iZXIsXHJcbiAgICAgICAgam9pbl91aWQ6IHN0cmluZyxcclxuICAgICk6IFByb21pc2U8Q19UZWFtfHVuZGVmaW5lZD4ge1xyXG4gICAgICAgIGNvbnN0IGdldF90ZWFtX1NRTCA9IGBcclxuICAgICAgICAgICAgU0VMRUNUIFx0aWQsIHNhdmVfaWQsIHVuaXFfaWQsIG5hbWUsIGxvY2F0ZSwgZ29sZCBcclxuICAgICAgICAgICAgRlJPTSB0YmxfdGVhbVxyXG4gICAgICAgICAgICBXSEVSRSAgIHNhdmVfaWQgPSA6c2F2ZV9pZCAgQU5EICB1bmlxX2lkID0gOnVuaXFfaWRcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3Jlc3VsdFJlY29yZFNldF0gPSBhd2FpdCBkYl9tYWkucXVlcnk8SV90YmxfdGVhbVtdPihnZXRfdGVhbV9TUUwsIHtzYXZlX2lkOiBzYXZlX2lkLCBqb2luX3VpZDogam9pbl91aWR9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDM3YjogJHtnZXRfdGVhbV9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBpZiAocmVzdWx0UmVjb3JkU2V0Lmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZSgnVW5pcV9pZOOBq+ipsuW9k+OBmeOCi1RlYW3jg4fjg7zjgr/jgYzmnInjgorjgb7jgZvjgpMnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX1RlYW0oQ19UZWFtUkRCLmZyb21fc3RyaW5nQXJyYXlfdG9fSlNPTihyZXN1bHRSZWNvcmRTZXRbMF0pKVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJ0ZWFt44OG44O844OW44Or44GrQ19UZWFt44Gu44OH44O844K/44KS6L+95YqgKGluc2VydCnjgZfjgaZcclxuICAgIC8vIOOBneOBrklEKGlkKeOCkui/lOOBmVxyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGFkZF90YmwoXHJcbiAgICAgICAgZGJfbWFpOiAgZGJfY29ubmVjdCwgXHJcbiAgICAgICAgbWVzOiAgICAgQ19Ec3BNZXNzYWdlLCBcclxuICAgICAgICBzYXZlX2lkOiBudW1iZXIsXHJcbiAgICAgICAgdGVhbTogICAgQ19UZWFtLFxyXG4gICAgKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBjb25zdCBpbnNlcnRfdGVhbV9TUUwgPSBgXHJcbiAgICAgICAgICAgIElOU0VSVCBJTlRPIHRibF90ZWFtIChcclxuICAgICAgICAgICAgICAgIHNhdmVfaWQsIHVuaXFfaWQsIG5hbWUsIGxvY2F0ZSwgZ29sZFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIFZBTFVFUyAoIFxyXG4gICAgICAgICAgICAgICAgOnNhdmVfaWQsIDp1bmlxX2lkLCA6bmFtZSwgOmxvY2F0ZSwgOmdvbGRcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBqID0gdGVhbS5lbmNvZGUoKTtcclxuLy9jb25zb2xlLmVycm9yKGAke3NhdmVfaWR9LCAke2oudW5pcV9pZH0sICR7ai5uYW1lfSwgJHtKU09OLnN0cmluZ2lmeShqLmxvY2F0ZSl9LCAke0pTT04uc3RyaW5naWZ5KGouZ29sZCl9YCk7XHJcbiAgICAgICAgYXdhaXQgZGJfbWFpLnF1ZXJ5KGluc2VydF90ZWFtX1NRTCwge1xyXG4gICAgICAgICAgICBzYXZlX2lkIDogc2F2ZV9pZCwgIFxyXG4gICAgICAgICAgICB1bmlxX2lkIDogai51bmlxX2lkLCBcclxuICAgICAgICAgICAgbmFtZSAgICA6IGoubmFtZSwgXHJcbiAgICAgICAgICAgIGxvY2F0ZSAgOiBKU09OLnN0cmluZ2lmeShqLmxvY2F0ZSksIFxyXG4gICAgICAgICAgICBnb2xkICAgIDogai5nb2xkLCAgXHJcbi8vICAgICAgICAgICAgZ29vZHMgICA6IEpTT04uc3RyaW5naWZ5KGouZ29vZHMpLCAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCA2OiAke2luc2VydF90ZWFtX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIENfVGVhbVJEQi5sYXN0SW5zZXJ0KGRiX21haSwgbWVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YmxfdGVhbeOBp+acgOW+jOOBq+i/veWKoOOBl+OBn+ihjOeVquWPtyhzYXZlX2lkKeOCkui/lOOBmeOAkDHooYzmjL/lhaXlsILnlKjjgJFcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgbGFzdEluc2VydChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlKSA6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgY29uc3QgbGFzdEluc2VydF9TUUwgPWBcclxuICAgICAgICAgICAgU0VMRUNUIExBU1RfSU5TRVJUX0lEKCkgYXMgaWQgRlJPTSB0YmxfdGVhbTtcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3JlY29yZFNldF0gPSBhd2FpdCBkYl9tYWkucXVlcnk8SV9sYXN0SW5zZXJ0W10+KGxhc3RJbnNlcnRfU1FMKVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgNTAwOiAke2xhc3RJbnNlcnRfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChyZWNvcmRTZXQubGVuZ3RoIDwgMSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiByZWNvcmRTZXRbMF0uaWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIERC5Yem55CGKOOCr+ODqeOCueODu+ODoeOCveODg+ODiSnjgIJUZWFt44Kv44Op44K544Gu6YWN5YiX44KS5Y+X44GR5Y+W44Gj44Gm44CBXHJcbiAgICAvLyDmjIflrprjgZXjgozjgZ9zYXZlX2lk44Gn44CAdGVhbeODhuODvOODluODq+OBq+i/veWKoChpbnNlcnQp44GX44GmXHJcbiAgICAvLyDjgZ3jga5JRChpZCnjga7phY3liJfjgpLov5TjgZlcclxuICAgIC8vIFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBhZGRfdGJsX2FsbChcclxuICAgICAgICBkYl9tYWk6ICAgICBkYl9jb25uZWN0LCBcclxuICAgICAgICBtZXM6ICAgICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgIHNhdmVfaWQ6ICAgIG51bWJlcixcclxuICAgICAgICB0ZWFtX2FycmF5OiBDX1RlYW1bXSwgXHJcbiAgICApOiBQcm9taXNlPG51bWJlcltdPiBcclxuICAgIHtcclxuICAgICAgICBjb25zdCB0ZWFtX2lkX3NldCA9IFtdIGFzIG51bWJlcltdO1xyXG4gICAgICAgIGZvciAoY29uc3QgdGVhbSBvZiB0ZWFtX2FycmF5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlYW1faWQgPSBhd2FpdCBDX1RlYW1SREIuYWRkX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCwgdGVhbSk7XHJcbiAgICAgICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHJldHVybiBbXTtcclxuICAgICAgICAgICAgdGVhbV9pZF9zZXQucHVzaCh0ZWFtX2lkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRlYW1faWRfc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBp+aMh+WumuOBleOCjOOBn+ODrOOCs+ODvOODiSjopIfmlbAp44KS5YmK6ZmkKGRlbGV0ZSnjgZnjgotcclxuICAgIC8vIFxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdGJsKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZV90ZWFtX1NRTCA9IGBcclxuICAgICAgICAgICAgREVMRVRFIEZST00gdGJsX3RlYW0gXHJcbiAgICAgICAgICAgIFdIRVJFICBzYXZlX2lkID0gOnNhdmVfaWRcclxuICAgICAgICBgXHJcbiAgICAgICAgYXdhaXQgZGJfbWFpLnF1ZXJ5KGRlbGV0ZV90ZWFtX1NRTCwge3NhdmVfaWQgOiBzYXZlX2lkLH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMTU6ICR7ZGVsZXRlX3RlYW1fU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fc3RyaW5nQXJyYXlfdG9fSlNPTihqOiBJX3RibF90ZWFtKTogSlNPTl9UZWFtIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogICAgICBqLmlkLFxyXG4gICAgICAgICAgICBzYXZlX2lkOiBqLnNhdmVfaWQsXHJcbiAgICAgICAgICAgIHVuaXFfaWQ6IGoudW5pcV9pZCxcclxuICAgICAgICAgICAgbmFtZTogICAgai5uYW1lLFxyXG4gICAgICAgICAgICBsb2NhdGU6ICBKU09OLnBhcnNlKGoubG9jYXRlKSxcclxuICAgICAgICAgICAgZ29sZDogICAgai5nb2xkLFxyXG4vLyAgICAgICAgICAgIGdvb2RzOiAgIEpTT04ucGFyc2Uoai5nb29kcyksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iLCIvLyDnlLvpnaLooajnpLrnlKjjg6Hjg4Pjgrvjg7zjgrgo6YCa5bi455So44Go44Ko44Op44O855SoKeOBruOCq+ODl+OCu+ODq+WMllxyXG5leHBvcnQgY2xhc3MgQ19Ec3BNZXNzYWdlIHtcclxuICAgIHByaXZhdGUgaXNIVE1MOiBib29sZWFuOyAgICAgICAvLyDooajnpLrlhYjjgYxIVE1M44GLKHRydWUp44CB44Kz44Oz44K944O844Or44GLKGZhbHNlKeOBruaMh+WumlxyXG4gICAgcHJpdmF0ZSBub3JfbWVzc2FnZTogc3RyaW5nW107IC8vIOmAmuW4uOOBruODoeODg+OCu+ODvOOCuOOCkuagvOe0jeOBmeOCi+aWh+Wtl+WIl+mFjeWIl1xyXG4gICAgcHJpdmF0ZSBlcnJfbWVzc2FnZTogc3RyaW5nW107IC8vIOOCqOODqeODvOODoeODg+OCu+ODvOOCuOOCkuagvOe0jeOBmeOCi+aWh+Wtl+WIl+mFjeWIl1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihpc0hUTUw6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuaXNIVE1MICAgICAgPSBpc0hUTUw7XHJcbiAgICAgICAgdGhpcy5ub3JfbWVzc2FnZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXJyX21lc3NhZ2UgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0X25vcl9tZXNzYWdlKG1zZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub3JfbWVzc2FnZS5wdXNoKG1zZyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRfZXJyX21lc3NhZ2UobXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVycl9tZXNzYWdlLnB1c2gobXNnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3BsYXlfbm9yX21lc3NhZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubm9yX21lc3NhZ2UubGVuZ3RoIDwgMSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0hUTUwpIHtcclxuICAgICAgICAgICAgbGV0IGFsbF9tc2cgPSBcIjxwIGNsYXNzPSdub3JtYWxfbWVzc2FnZSc+XFxuXCI7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXNnIG9mIHRoaXMubm9yX21lc3NhZ2UpIGFsbF9tc2cgKz0gYCR7bXNnfTwvYnI+XFxuYDtcclxuICAgICAgICAgICAgYWxsX21zZyArPSAgXCI8L3A+XFxuXCI7XHJcbiAgICAgICAgICAgIGFsZXJ0KGFsbF9tc2cpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXNnIG9mIHRoaXMubm9yX21lc3NhZ2UpIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcGxheV9lcnJfbWVzc2FnZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5lcnJfbWVzc2FnZS5sZW5ndGggPCAxKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzSFRNTCkge1xyXG4gICAgICAgICAgICBsZXQgYWxsX21zZyA9IFwiPHAgY2xhc3M9J2Vycm9yX21lc3NhZ2UnPlxcblwiO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1zZyBvZiB0aGlzLmVycl9tZXNzYWdlKSBhbGxfbXNnICs9IGAke21zZ308L2JyPlxcbmA7XHJcbiAgICAgICAgICAgIGFsbF9tc2cgKz0gIFwiPC9wPlxcblwiO1xyXG4gICAgICAgICAgICBhbGVydChhbGxfbXNnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiXFxuXFxuXFxuIyMjXFxuIyMjIEVSUk9SIE9jY3VlcmQuXFxuIyMjXFxuXCIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1zZyBvZiB0aGlzLmVycl9tZXNzYWdlKSBjb25zb2xlLmVycm9yKGAjIyMgJHttc2d9YCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCIjIyNcXG5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBwZG9fZXJyb3IoZTogYW55LCBlcnJtc2c6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGVjb2RlID0gZT8uZ2V0Q29kZSgpICAgID8/ICc5OTk5OSc7XHJcbiAgICAgICAgY29uc3QgZW1lc3MgPSBlPy5nZXRNZXNzYWdlKCkgPz8gJz8/Pyc7XHJcbiAgICAgICAgdGhpcy5zZXRfZXJyX21lc3NhZ2UoZXJybXNnKTtcclxuICAgICAgICB0aGlzLnNldF9lcnJfbWVzc2FnZShgY29kZTogJHtlY29kZX1gKTtcclxuICAgICAgICB0aGlzLnNldF9lcnJfbWVzc2FnZShgbWVzc2FnZTogJHtlbWVzc31gKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXRfbm9yX21lc3NhZ2VzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gWy4uLnRoaXMubm9yX21lc3NhZ2VdO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9lcnJfbWVzc2FnZXMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy5lcnJfbWVzc2FnZV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzX2VycigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gIHRoaXMuZXJyX21lc3NhZ2UubGVuZ3RoICE9PSAwO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIOaVsOWApOODgeOCp+ODg+OCr1xyXG5leHBvcnQgZnVuY3Rpb24gX2lzTnVtKG51bVZhbDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAvLyDjg4Hjgqfjg4Pjgq/mnaHku7bjg5Hjgr/jg7zjg7NcclxuICAgIGNvbnN0IHBhdHRlcm4gPSAvXlstK10/KFsxLTldXFxkKnwwKShcXC5cXGQrKT8kLztcclxuICAgIC8vIOaVsOWApOODgeOCp+ODg+OCr1xyXG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChudW1WYWwpO1xyXG59XHJcblxyXG4vLyDmlbDlgKTlj5bjgorlh7rjgZdcclxuZXhwb3J0IGZ1bmN0aW9uIF9nZXROdW0obnVtVmFsOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgLy8g44OB44Kn44OD44Kv5p2h5Lu244OR44K/44O844OzXHJcbi8vICAgIGNvbnN0IHBhdHRlcm4gPSAvWy1dPyhbMS05XVxcZCp8MCkoXFwuXFxkKyk/LztcclxuICAgIGNvbnN0IHBhdHRlcm4gPSAvKFteMC05XSkvZztcclxuICAgIGNvbnN0IHZhbHN0ciAgPSBudW1WYWwucmVwbGFjZShwYXR0ZXJuLCcnKTtcclxuICAgIC8vIOaVsOWApOODgeOCp+ODg+OCr1xyXG4gICAgcmV0dXJuIE51bWJlcih2YWxzdHIpO1xyXG59XHJcblxyXG4vLyDlm5vmjajkupTlhaVcclxuZXhwb3J0IGZ1bmN0aW9uIF9yb3VuZChudW06IG51bWJlciwgZGlnaXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBtdWx0aXBsaWVyID0gTWF0aC5wb3coMTAsIGRpZ2l0KTtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIG11bHRpcGxpZXIpIC8gbXVsdGlwbGllcjtcclxufVxyXG5cclxuLy8g5YiH44KK5LiK44GSXHJcbmV4cG9ydCBmdW5jdGlvbiBfY2VpbChudW06IG51bWJlciwgZGlnaXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBtdWx0aXBsaWVyID0gTWF0aC5wb3coMTAsIGRpZ2l0KTtcclxuICAgIHJldHVybiBNYXRoLmNlaWwobnVtICogbXVsdGlwbGllcikgLyBtdWx0aXBsaWVyO1xyXG59XHJcblxyXG5cclxuLy8g5YiH44KK5LiL44GSXHJcbmV4cG9ydCBmdW5jdGlvbiBfZmxvb3IobnVtOiBudW1iZXIsIGRpZ2l0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgbXVsdGlwbGllciA9IE1hdGgucG93KDEwLCBkaWdpdCk7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihudW0gKiBtdWx0aXBsaWVyKSAvIG11bHRpcGxpZXI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX21pbihhOiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gYS5yZWR1Y2UoKG4xOiBudW1iZXIsIG4yOiBudW1iZXIpID0+IE1hdGgubWluKG4xLCBuMikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX21heChhOiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gYS5yZWR1Y2UoKG4xOiBudW1iZXIsIG4yOiBudW1iZXIpID0+IE1hdGgubWF4KG4xLCBuMikpO1xyXG59XHJcbiIsImltcG9ydCB7IF9tYXgsIF9taW4sIF9yb3VuZCB9IGZyb20gXCIuL0ZfTWF0aFwiO1xyXG5cclxuLy8g5Lmx5pWw6Zai5pWw5ZG844Gz5Ye644GX55So44Gu5Z6L5a6j6KiAXHJcbnR5cGUgVF9mcmFuZCA9ICgpPT5udW1iZXJcclxuY29uc3QgZnJhbmQ6IFRfZnJhbmQgPSAgKCk9PntyZXR1cm4gTWF0aC5yYW5kb20oKX1cclxuXHJcbi8vIOS4gOanmOS5seaVsCjmlbTmlbApXHJcbmV4cG9ydCBmdW5jdGlvbiBfaXJhbmQobWluOiBudW1iZXIgPSAwLCBtYXg6IG51bWJlciA9IDEsIHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCk6IG51bWJlciB7XHJcbiAgICBjb25zdCBmX3JhbmQgPSBNYXRoLmZsb29yKHJhbmQoKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XHJcbiAgICByZXR1cm4gX3JvdW5kKGZfcmFuZCwgMCk7XHJcbn1cclxuXHJcbi8vIOato+imj+WIhuW4g+OCguOBqeOBjeS5seaVsCjmlbTmlbApXHJcbmV4cG9ydCBmdW5jdGlvbiBfaWdyYW5kKG1pbjogbnVtYmVyID0gMCwgbWF4OiBudW1iZXIgPSAxLCByYW5kOiBUX2ZyYW5kID0gZnJhbmQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIF9pcmFuZChtaW4sIG1heCwgKCk9PntyZXR1cm4gX2dyYW5kKDAsIDEsIHJhbmQpfSlcclxufVxyXG5cclxuLy8g5q2j6KaP5YiG5biD44KC44Gp44GN5Lmx5pWwKOWun+aVsClcclxuZXhwb3J0IGZ1bmN0aW9uIF9ncmFuZChtaW46IG51bWJlciA9IDAsIG1heDogbnVtYmVyID0gMSwgcmFuZDogVF9mcmFuZCA9IGZyYW5kKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKF9fX2dhdXNzaWFuUmFuZChyYW5kKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XHJcbn1cclxuZnVuY3Rpb24gX19fZ2F1c3NpYW5SYW5kKHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCkge1xyXG4gICAgbGV0IHN1bSA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkgKz0gMSkge1xyXG4gICAgICAgIHN1bSArPSByYW5kKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3VtIC8gNjtcclxufVxyXG5cclxuLy8g5bCR44GX55yf6Z2i55uu44Gq5q2j6KaP5YiG5biD5Lmx5pWwKOaVtOaVsClcclxuZXhwb3J0IGZ1bmN0aW9uIF9pbnJhbmQobWluOiBudW1iZXIgPSAwLCBtYXg6IG51bWJlciA9IDEsIGRkOiBudW1iZXIgPSAzLjAsIHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihfbnJhbmQobWluLCBtYXgsIGRkLCByYW5kKSk7XHJcbn1cclxuXHJcbi8vIOWwkeOBl+ecn+mdouebruOBquato+imj+WIhuW4g+S5seaVsCjlrp/mlbApXHJcbi8vIOS4gOanmOeiuueOh+WkieaVsGEsYuOCkuWkieaVsOmWouaVsOOCkueUqOOBhOOBpiB4PWYoYSxiKSwgeT1nKGEsYinjgajjgZfjgaYy44Gk44Gu5q2j6KaP5YiG5biD5Lmx5pWweCx544KS5b6X44KLXHJcbi8vIHggPSBmKGEsYikgPSBzcXJ0KC0yKmxvZyhhKSkgKiBzaW4oMirPgCpiKSBcclxuLy8geSA9IGcoYSxiKSA9IHNxcnQoLTIqbG9nKGEpKSAqIGNvcygyKs+AKmIpIFxyXG5leHBvcnQgZnVuY3Rpb24gX25yYW5kKG1pbjogbnVtYmVyID0gMC4wLCBtYXg6IG51bWJlciA9IDEuMCwgZGQ6IG51bWJlciA9IDMuMCwgcmFuZDogVF9mcmFuZCA9IGZyYW5kKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGF2ZSA9IDAuNTtcclxuICAgIGNvbnN0IGEgPSByYW5kKCk7XHJcbiAgICBjb25zdCBiID0gcmFuZCgpO1xyXG4gICAgbGV0IHggPSBhdmUgKyBfZmFiKGEsIGIpIC8gKDIuMCAqIGRkKTsgLy8g44GT44GT44G+44Gn44CBTigwLDEp44Gu5q2j6KaP5YiG5biD5Lmx5pWw44Gu5L2c5oiQXHJcblxyXG4gICAgeCA9IG1pbiArIHggKiAobWF4IC0gbWluKTtcclxuICAgIHggPSBfbWF4KFttaW4sIHhdKTtcclxuICAgIHggPSBfbWluKFttYXgsIHhdKTtcclxuICAgIHJldHVybiB4O1xyXG59XHJcbmZ1bmN0aW9uIF9mYWIoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydCgtMi4wICogTWF0aC5sb2coYSkpICogTWF0aC5zaW4oMi4wICogTWF0aC5QSSAqIGIpO1xyXG59XHJcbmZ1bmN0aW9uIF9nYWIoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydCgtMi4wICogTWF0aC5sb2coYSkpICogTWF0aC5jb3MoMi4wICogTWF0aC5QSSAqIGIpO1xyXG59XHJcblxyXG5cclxuLy8g44K344O844OJ5YCk44KS55So44GE44Gf5Lmx5pWwXHJcbmV4cG9ydCBjbGFzcyBDX1NlZWRlZFJhbmQge1xyXG4gICAgcHJvdGVjdGVkIHNlZWQ6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBmaXJzdF9zZWVkOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHNlZWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2VlZCA9IHNlZWQ7XHJcbiAgICAgICAgdGhpcy5maXJzdF9zZWVkID0gc2VlZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZXNldCgpIHtcclxuICAgICAgICB0aGlzLnNlZWQgPSB0aGlzLmZpcnN0X3NlZWQ7XHJcbiAgICB9XHJcbiAgICAvLyDkubHmlbDnlJ/miJDjg6Hjgr3jg4Pjg4lcclxuICAgIHB1YmxpYyByYW5kb20oKTogbnVtYmVyIHtcclxuICAgICAgICB0aGlzLnNlZWQgPSAodGhpcy5zZWVkICogOTMwMSArIDQ5Mjk3KSAlIDIzMzI4MDtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWVkIC8gMjMzMjgwLjA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v44Om44OL44O844KvSUQodXVpZCnjga7nlJ/miJBcclxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRfdXVpZChsZW46IG51bWJlciA9IDIwLCByYW5kOiBUX2ZyYW5kID0gZnJhbmQpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbGZ0ID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKS50b1N0cmluZygxNik7IC8vIOOBn+OBtuOCkzEz5qGBXHJcbiAgICBjb25zdCByZ3RfbGVuID0gX21heChbbGVuIC0gbGZ0Lmxlbmd0aCwgMV0pO1xyXG5cclxuICAgIGNvbnN0IHJndCA9IE1hdGguZmxvb3IoTWF0aC5wb3coMTAsIHJndF9sZW4pICogcmFuZCgpKS50b1N0cmluZygxNik7XHJcbiAgICByZXR1cm4gbGZ0ICsgcmd0O1xyXG59XHJcblxyXG4vLyDnorrnjofjgavln7rjgaXjgY/opoHntKDpgbjmip5cclxuZXhwb3J0IHR5cGUgVF9TZWxlY3RJdGVtID0ge1xyXG4gICAgcmF0aW86IG51bWJlcixcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gX3NlbGVjdEl0ZW0oaXRlbXM6IFRfU2VsZWN0SXRlbVtdLCByYW5kOiBUX2ZyYW5kID0gZnJhbmQpOiBUX1NlbGVjdEl0ZW0gfCB1bmRlZmluZWQge1xyXG4gICAgdmFyIHR0bDpudW1iZXIgPSAwO1xyXG4gICAgZm9yIChsZXQgaXRlbSBvZiBpdGVtcykgdHRsICs9IGl0ZW0ucmF0aW87XHJcblxyXG4gICAgY29uc3QgdGFyZ2V0ID0gX2lyYW5kKDAsIHR0bCwgcmFuZCk7XHJcbiAgICB2YXIgc3VtID0gMDtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xyXG4gICAgICAgIHN1bSArPSBpdGVtLnJhdGlvO1xyXG4gICAgICAgIGlmICh0YXJnZXQgPCBzdW0pIHtcclxuICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG4vLyDphY3liJfjga7jgrfjg6Pjg4Pjg5Xjg6tcclxuZXhwb3J0IGZ1bmN0aW9uIF9zaHVmZmxlQXJyYXk8VD4oYXJyYXk6IFRbXSwgcmFuZDogVF9mcmFuZCA9IGZyYW5kKTogVFtdIHtcclxuICAgIGxldCBzaHVmZmxlZEFycmF5ID0gWy4uLmFycmF5XTsgLy8g5YWD44Gu6YWN5YiX44KS5aSJ5pu044GX44Gq44GE44KI44GG44Gr44Kz44OU44O844GZ44KLXHJcbiAgICBmb3IgKGxldCBpID0gc2h1ZmZsZWRBcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgLy8g44Op44Oz44OA44Og44Gq5L2N572u44KS5rG65a6aXHJcbiAgICAgICAgY29uc3QgaiA9IF9pcmFuZCgwLCBpLCByYW5kKTtcclxuICAgICAgICAvLyDopoHntKDjga7lhaXjgozmm7/jgYhcclxuICAgICAgICBbc2h1ZmZsZWRBcnJheVtpXSwgc2h1ZmZsZWRBcnJheVtqXV0gPSBbc2h1ZmZsZWRBcnJheVtqXSwgc2h1ZmZsZWRBcnJheVtpXV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2h1ZmZsZWRBcnJheTsgLy8g44K344Oj44OD44OV44Or44GV44KM44Gf6YWN5YiX44KS6L+U44GZXHJcbn1cclxuXHJcbi8vIOS5seaVsOOBq+OCiOOCi+aWh+Wtl+WIl+eUn+aIkFxyXG5leHBvcnQgZnVuY3Rpb24gX3JhbmRvbV9zdHIobGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgbGVuZ3RoOyBpKyspIHN0ciArPSBfcmFuZG9tX0NoYXIoKTtcclxuICAgIHJldHVybiBzdHI7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fVXBwZXJTdHIobGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgbGVuZ3RoOyBpKyspIHN0ciArPSBfcmFuZG9tX1VwcGVyQ2hhcigpO1xyXG4gICAgcmV0dXJuIHN0cjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gX3JhbmRvbV9Mb3dlclN0cihsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZXQgc3RyID0gJyc7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBsZW5ndGg7IGkrKykgc3RyICs9IF9yYW5kb21fTG93ZXJDaGFyKCk7XHJcbiAgICByZXR1cm4gc3RyO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBfcmFuZG9tX1VwcGVyQ2hhcigpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdmFsID0gX2lyYW5kKDAsMjYpXHJcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSt2YWwpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBfcmFuZG9tX0xvd2VyQ2hhcigpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdmFsID0gX2lyYW5kKDAsMjYpXHJcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg5NSt2YWwpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBfcmFuZG9tX051bUNoYXIoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHZhbCA9IF9pcmFuZCgwLDkpXHJcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg0OCt2YWwpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBfcmFuZG9tX0NoYXIoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHZhbCA9IF9pcmFuZCgwLDYxKVxyXG4gICAgaWYgKHZhbCA8IDI2KSByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSt2YWwpO1xyXG4gICAgaWYgKHZhbCA8IDUyKSByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg5Nyt2YWwtMjYpO1xyXG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoNDgrdmFsLTUyKTtcclxufVxyXG4iLCJpbXBvcnQgZXhwcmVzcyAgICAgIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCBjcmVhdGVFcnJvciAgZnJvbSAnaHR0cC1lcnJvcnMnO1xyXG5pbXBvcnQgcGF0aCAgICAgICAgIGZyb20gXCJwYXRoXCI7XHJcblxyXG52YXIgdXNlcnNSb3V0ZXIgPSByZXF1aXJlKCcuL3JvdXRlcy91c2VycycpO1xyXG52YXIgbWFpZXhSb3V0ZXIgPSByZXF1aXJlKCcuL3JvdXRlcy9tYWlleCcpO1xyXG5cclxudmFyIGNvb2tpZVBhcnNlciA9IHJlcXVpcmUoJ2Nvb2tpZS1wYXJzZXInKTtcclxudmFyIGxvZ2dlciA9IHJlcXVpcmUoJ21vcmdhbicpO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuLy8gdmlldyBlbmdpbmUgc2V0dXBcclxuYXBwLnNldCgndmlld3MnLCBwYXRoLmpvaW4oX19kaXJuYW1lLCAndmlld3MnKSk7XHJcbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2VqcycpO1xyXG5cclxuYXBwLnVzZShsb2dnZXIoJ2RldicpKTtcclxuYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJ3B1YmxpYycpKSk7XHJcblxyXG4vL2FwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG4vL2FwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcclxuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XHJcbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xyXG5cclxuY29uc3Qgcm9vdFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbnJvb3RSb3V0ZXIuZ2V0KFxyXG4gIFwiL1wiLFxyXG4gIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICByZXMuc2VuZChcIldlbGNvbWUgdG8gdGhlIE1haSB3b3JsZCEgOi0pXCIpO1xyXG4gIH1cclxuKTtcclxuYXBwLnVzZShcIi9cIiwgICAgICByb290Um91dGVyKTtcclxuYXBwLnVzZShcIi91c2Vyc1wiLCB1c2Vyc1JvdXRlcik7XHJcbmFwcC51c2UoXCIvbWFpZXhcIiwgbWFpZXhSb3V0ZXIpO1xyXG5cclxuLy8gY2F0Y2ggNDA0IGFuZCBmb3J3YXJkIHRvIGVycm9yIGhhbmRsZXJcclxuYXBwLnVzZShmdW5jdGlvbihyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikge1xyXG4gIG5leHQoY3JlYXRlRXJyb3IoNDA0KSk7XHJcbn0pO1xyXG5cclxuLy8gZXJyb3IgaGFuZGxlclxyXG5hcHAudXNlKGZ1bmN0aW9uKGVycjogYW55LCByZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikge1xyXG4gIC8vIHNldCBsb2NhbHMsIG9ubHkgcHJvdmlkaW5nIGVycm9yIGluIGRldmVsb3BtZW50XHJcbiAgcmVzLmxvY2Fscy5tZXNzYWdlID0gZXJyLm1lc3NhZ2U7XHJcbiAgcmVzLmxvY2Fscy5lcnJvciA9IHJlcS5hcHAuZ2V0KCdlbnYnKSA9PT0gJ2RldmVsb3BtZW50JyA/IGVyciA6IHt9O1xyXG5cclxuICAvLyByZW5kZXIgdGhlIGVycm9yIHBhZ2VcclxuICByZXMuc3RhdHVzKGVyci5zdGF0dXMgfHwgNTAwKTtcclxuICByZXMucmVuZGVyKCdlcnJvcicpO1xyXG59KTtcclxuXHJcbmNvbnN0IHBvcnQgPSBub3JtYWxpemVQb3J0KHByb2Nlc3MuZW52LlBPUlQgfHwgJzMwMDAnKTtcclxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcclxufSk7XHJcblxyXG4vKipcclxuICogTm9ybWFsaXplIGEgcG9ydCBpbnRvIGEgbnVtYmVyLCBzdHJpbmcsIG9yIGZhbHNlLlxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVBvcnQodmFsOiBhbnkpIHtcclxuICB2YXIgcG9ydCA9IHBhcnNlSW50KHZhbCwgMTApO1xyXG5cclxuICBpZiAoaXNOYU4ocG9ydCkpIHtcclxuICAgIC8vIG5hbWVkIHBpcGVcclxuICAgIHJldHVybiB2YWw7XHJcbiAgfVxyXG5cclxuICBpZiAocG9ydCA+PSAwKSB7XHJcbiAgICAvLyBwb3J0IG51bWJlclxyXG4gICAgcmV0dXJuIHBvcnQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcDtcclxuIiwiXHJcbmNvbnN0IGRiX2hvc3QgPSAnc3FsJztcclxuLy8g5Yip55So44Kv44Op44K5562J44Gu6Kqt44G/6L6844G/XHJcblxyXG4vLyDjgqjjg6njg7zjg6Hjg4Pjgrvjg7zjgrjnrYnjgpLkv53lrZjjg7vooajnpLrjgZnjgovjgq/jg6njgrlcclxuaW1wb3J0IHtDX0RzcE1lc3NhZ2UgfSAgICAgZnJvbSAnLi4vLi4vLi4vbWFpL3NyYy9kX3V0bC9DX0RzcE1lc3NhZ2UnO1xyXG5cclxuLy8g5L2N572u44Go5pa55ZCR44KS6KGo44GZ44Kv44Op44K5XHJcbmltcG9ydCB7IENfUG9pbnREaXIgfSAgICAgIGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF9tZGwvQ19Qb2ludERpcic7XHJcblxyXG4vLyDmu57lnKjkvY3nva7jgpLnpLrjgZnjgq/jg6njgrlcclxuaW1wb3J0IHsgQ19Nb3ZhYmxlUG9pbnQgfSAgZnJvbSAnLi4vLi4vLi4vbWFpL3NyYy9kX21kbC9DX01vdmFibGVQb2ludCc7XHJcblxyXG4vLyDjgq7jg6vjg4njgq/jg6njgrnlhajoiKxcclxuaW1wb3J0IHtDX0d1aWxkfSAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbWFpL3NyYy9kX21kbC9DX0d1aWxkJztcclxuXHJcbi8vIOODkeODvOODhuOCo+ODvOOCr+ODqeOCueWFqOiIrFxyXG5pbXBvcnQge0NfVGVhbX0gICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9tYWkvc3JjL2RfbWRsL0NfVGVhbSc7XHJcblxyXG4vLyDjg5Ljg7zjg63jg7zjgq/jg6njgrnlhajoiKxcclxuaW1wb3J0IHtDX0hlcm8sIEpTT05fSGVyb30gZnJvbSAgJy4uLy4uLy4uL21haS9zcmMvZF9tZGwvQ19IZXJvJztcclxuXHJcbi8vIOOCu+ODvOODluODh+ODvOOCvyjjgq/jg6njgqTjgqLjg7Pjg4jjgajjga7pgKPmkLop5YWo6IisXHJcbmltcG9ydCB7Q19TYXZlRGF0YSwgSlNPTl9TYXZlRGF0YX0gZnJvbSAnLi4vLi4vLi4vbWFpL3NyYy9kX21kbC9DX1NhdmVEYXRhJztcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDkuLvjgIDlh6bjgIDnkIYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmludGVyZmFjZSBJX0dsb2JhbEFyZ3VtZW50cyB7XHJcbiAgICBtb2RlPzogc3RyaW5nO1xyXG4gICAgbm1icj86IG51bWJlcjtcclxuICAgIHBpZD86ICBudW1iZXI7XHJcbiAgICBocmVzX0pTT04/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJX1JldHVybiB7XHJcbiAgICBlY29kZTogbnVtYmVyO1xyXG4gICAgZW1zZzogIHN0cmluZztcclxuICAgIHNhdmU/OiBKU09OX1NhdmVEYXRhO1xyXG4gICAgZGF0YT86IHtcclxuICAgICAgICBocmVzOkpTT05fSGVyb1tdO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBHZXR0aW5nIE5ldyBHYW1lIHN0YXJ0aWluZyBmcm9tIEd1bGRcclxuZXhwb3J0IGZ1bmN0aW9uIG5ld0d1bGQoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IElfUmV0dXJuIHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0ICBndWxkID0gbmV3X2d1bGQoKTtcclxuICAgIGNvbnN0ICB0ZWFtID0gbmV3X3RlYW0oZ3VsZCk7XHJcbiAgICBjb25zdCAgc2F2ZSA9IG5ld19zYXZlKGd1bGQsIHRlYW0pO1xyXG4gICAgcmV0dXJuIHNhdmVfZW5jb2RlKDAsIHNhdmUpO1xyXG59XHJcblxyXG4vLyBHZXR0aW5nIEFueSBOZXcgSGVvcmVzIGRhdGFcclxuZXhwb3J0IGZ1bmN0aW9uIGFsbEhyZXMoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IElfUmV0dXJuIHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0ICBocmVzID0gbmV3X2hyZXMoKTtcclxuICAgIHJldHVybiBocmVzX2VuY29kZSgwLCAgaHJlcyk7XHJcbn1cclxuXHJcbiBcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8gICDjgrXjg5bjg6vjg7zjg4Hjg7NcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZnVuY3Rpb24gZXJyX2VuY29kZShjb2RlOiBudW1iZXIsIG1zZ3M6IHN0cmluZ1tdKTogSV9SZXR1cm4ge1xyXG4gICAgY29uc3QgcmV0X2Fzc29jOiBJX1JldHVybiA9IHtlY29kZTpjb2RlLCBlbXNnOiAnJ307XHJcbiAgICBmb3IgKGNvbnN0IG1zZyBvZiBtc2dzKSByZXRfYXNzb2MuZW1zZyArPSBtc2c7IFxyXG4gICAgcmV0dXJuIHJldF9hc3NvYztcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZV9lbmNvZGUoY29kZTogbnVtYmVyLCBzYXZlOiBDX1NhdmVEYXRhKTogSV9SZXR1cm4ge1xyXG4gICAgY29uc3QgcmV0X2Fzc29jOiBJX1JldHVybiA9IHtlY29kZTowLCBlbXNnOiAnJ307XHJcblxyXG4gICAgaWYgKGNvZGUgIT09IDAgfHwgZ3YubWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgcmV0dXJuIGVycl9lbmNvZGUoY29kZSwgZ3YubWVzLmdldF9lcnJfbWVzc2FnZXMoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldF9hc3NvYy5lY29kZSA9IDA7XHJcbiAgICAgICAgcmV0X2Fzc29jLmVtc2cgID0gJ1N0YXR1cyBPSyc7XHJcbiAgICAgICAgcmV0X2Fzc29jLnNhdmUgID0gc2F2ZS5lbmNvZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmV0X2Fzc29jO1xyXG59XHJcblxyXG5mdW5jdGlvbiBocmVzX2VuY29kZShjb2RlOiBudW1iZXIsIGhyZXM6IENfSGVyb1tdKTogSV9SZXR1cm4ge1xyXG4gICAgY29uc3QgcmV0X2Fzc29jOiBJX1JldHVybiA9IHtlY29kZTowLCBlbXNnOiAnJ307XHJcblxyXG4gICAgaWYgKGNvZGUgIT09IDAgfHwgZ3YubWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgcmV0dXJuIGVycl9lbmNvZGUoY29kZSwgZ3YubWVzLmdldF9lcnJfbWVzc2FnZXMoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldF9hc3NvYy5lY29kZSA9IDA7XHJcbiAgICAgICAgcmV0X2Fzc29jLmVtc2cgID0gJ1N0YXR1cyBPSyc7XHJcblxyXG4gICAgICAgIGNvbnN0IGhyZXNfYXJyYXk6IEpTT05fSGVyb1tdID0gW107XHJcbiAgICAgICAgZm9yKGNvbnN0IGhlcm8gb2YgaHJlcykge1xyXG4gICAgICAgICAgICBocmVzX2FycmF5LnB1c2goaGVyby5lbmNvZGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldF9hc3NvYy5kYXRhICA9IHtocmVzOiBocmVzX2FycmF5fTtcclxuICAgICAgICByZXR1cm4gcmV0X2Fzc29jO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdfaHJlcygpOiBDX0hlcm9bXSB7XHJcbiAgICBjb25zdCBoZXJvZXM6IENfSGVyb1tdID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhLm5tYnI7IGkrKykge1xyXG4gICAgICAgIGhlcm9lcy5wdXNoKChuZXcgQ19IZXJvKCkpLnJhbmRvbV9tYWtlKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhlcm9lcztcclxufVxyXG5cclxuZnVuY3Rpb24gbmV3X3NhdmUoZ3VsZDogQ19HdWlsZCwgdGVhbTogQ19UZWFtKTogQ19TYXZlRGF0YSB7XHJcbiAgICByZXR1cm4gbmV3IENfU2F2ZURhdGEoe1xyXG4gICAgICAgIHBsYXllcl9pZDogZ2EucGlkLFxyXG4gICAgICAgIGF1dG9fbW9kZTogJzAnLFxyXG4gICAgICAgIGlzX2FjdGl2ZTogJzEnLFxyXG4gICAgICAgIGlzX2RlbGV0ZTogJzAnLFxyXG5cclxuICAgICAgICBhbGxfbXZwdDogICBbXSxcclxuICAgICAgICBhbGxfbWF6ZTogICBbXSxcclxuICAgICAgICBhbGxfZ3VsZDogICBbZ3VsZC5lbmNvZGUoKV0sIFxyXG4gICAgICAgIGFsbF90ZWFtOiAgIFt0ZWFtLmVuY29kZSgpXSxcclxuXHJcbi8vbG9jXHJcbiAgICAgICAgbXlwb3M6ICAgICAgdGVhbS5nZXRfbG9jKCkuZW5jb2RlKCksIFxyXG59KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV3X2d1bGQoKTogQ19HdWlsZCB7XHJcbiAgICBjb25zdCBndWxkID0gbmV3IENfR3VpbGQoKTtcclxuICAgIGd1bGQuZGVjb2RlKHtuYW1lOiAn5aeL44G+44KK44Gu6KGX44Gu5YaS6Zm66ICF44Ku44Or44OJJ30pO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xyXG4gICAgICAgIGd1bGQuYWRkX2hlcm8oKG5ldyBDX0hlcm8oKSkucmFuZG9tX21ha2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGd1bGQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld190ZWFtKGd1bGQ6IENfR3VpbGQpOiBDX1RlYW0ge1xyXG4gICAgY29uc3QgdGVhbSA9IG5ldyBDX1RlYW0oKTtcclxuLy9sb2NcclxuICAgIGNvbnN0IGxvYyA9IG5ldyBDX01vdmFibGVQb2ludCgpO1xyXG4gICAgbG9jLmRlY29kZSh7XHJcbiAgICAgICAga2luZDogICAnR3VsZCcsXHJcbiAgICAgICAgbmFtZTogICAgZ3VsZC5nZXRfbmFtZSgpLFxyXG4gICAgICAgIGxvY191aWQ6IGd1bGQudWlkKCksXHJcbiAgICAgICAgbG9jX3BvczogbmV3IENfUG9pbnREaXIoe1xyXG4gICAgICAgICAgICAneCc6IDAsXHJcbiAgICAgICAgICAgICd5JzogMCxcclxuICAgICAgICAgICAgJ3onOiAwLFxyXG4gICAgICAgICAgICAnZCc6IDAsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdGVhbV91aWQ6IHRlYW0udWlkKCksXHJcbiAgICB9KTtcclxuICAgIHRlYW0uc2V0X3BycCh7bmFtZTon44Gy44KI44GT44GV44KT44OB44O844OgJ30pO1xyXG4vL2xvY1xyXG4gICAgdGVhbS5zZXRfbG9jKGxvYyk7XHJcblxyXG4gICAgLy8gICAgdGVhbS5zZXRfbG9jKChuZXcgQ19Nb3ZhYmxlUG9pbnQoKSkuZGVjb2RlKGxvYy5lbmNvZGUoKSkpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKyspIHsgXHJcbiAgICAgICAgdGVhbS5hZGRfaGVybygobmV3IENfSGVybygpKS5yYW5kb21fbWFrZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGVhbTtcclxufVxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWIneOAgOacn+OAgOioreOAgOWumiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxubGV0IGd2OiBDX0dsb2JhbFZhcjtcclxubGV0IGdhOiBDX0dsb2JhbEFyZ3VtZW50cztcclxuXHJcbmZ1bmN0aW9uIGluaXQob2JqOiBJX0dsb2JhbEFyZ3VtZW50cyk6IHZvaWQge1xyXG4gICAgZ3YgPSBuZXcgQ19HbG9iYWxWYXIoKTtcclxuICAgIGdhID0gbmV3IENfR2xvYmFsQXJndW1lbnRzKG9iaik7XHJcbiAgICByZXR1cm47XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy9cclxuLy8vLy8gICAgIOOCr+ODqeOCueWuo+iogFxyXG4vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyDlpKfln5/lpInmlbDjga7oqK3lrppcclxuY2xhc3MgQ19HbG9iYWxWYXIge1xyXG4gICAgcHVibGljIG1lczogQ19Ec3BNZXNzYWdlO1xyXG5cclxuICAgIHB1YmxpYyBNYXplX3NpemVfeCA9IDIxO1xyXG4gICAgcHVibGljIE1hemVfc2l6ZV95ID0gMjE7XHJcbiAgICBwdWJsaWMgTGltaXRfb2Zfcm9vbSAgICAgPSA1O1xyXG4gICAgcHVibGljIE1heF9zaXplX29mX3Jvb20gID0gMztcclxuICAgIHB1YmxpYyBNYXhfb2ZfTWF6ZV9GbG9vciA9IDM7XHJcblxyXG4gICAgcHVibGljIHRlYW1fYXNzb2M6IENfVGVhbVtdICA9IFtdO1xyXG4gICAgcHVibGljIHRlYW06ICAgICAgIENfVGVhbTtcclxuICAgIHB1YmxpYyBndWxkX2Fzc29jOiBDX0d1aWxkW10gPSBbXTtcclxuICAgIHB1YmxpYyBndWxkOiAgICAgICBDX0d1aWxkO1xyXG4gICAgcHVibGljIGhlcm9lczogICAgIENfSGVyb1tdICA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm1lcyAgPSBuZXcgQ19Ec3BNZXNzYWdlKCAvKiBpc0hUTUwgPSAqLyBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy50ZWFtID0gbmV3IENfVGVhbSgpO1xyXG4gICAgICAgIHRoaXMuZ3VsZCA9IG5ldyBDX0d1aWxkKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFBPU1TlvJXmlbDjga7oqK3lrppcclxuY2xhc3MgQ19HbG9iYWxBcmd1bWVudHMge1xyXG4gICAgcHVibGljIG1vZGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBubWJyOiBudW1iZXIgPSAxO1xyXG4gICAgcHVibGljIHBpZDogIG51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgaHJlc19KU09OOiBzdHJpbmd8dW5kZWZpbmVkID0gJyc7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9iajogSV9HbG9iYWxBcmd1bWVudHN8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlID0gb2JqPy5tb2RlID8/ICd1bmtub3duJztcclxuICAgICAgICB0aGlzLm5tYnIgPSBvYmo/Lm5tYnIgIT09IHVuZGVmaW5lZCAmJiAhaXNOYU4ob2JqLm5tYnIpID8gTnVtYmVyKG9iai5ubWJyKSA6IDE7XHJcbiAgICAgICAgdGhpcy5waWQgID0gb2JqPy5waWQgICE9PSB1bmRlZmluZWQgJiYgIWlzTmFOKG9iai5waWQpICA/IE51bWJlcihvYmoucGlkKSAgOiAxO1xyXG4gICAgICAgIHRoaXMuaHJlc19KU09OID0gb2JqPy5ocmVzX0pTT04gPz8gdW5kZWZpbmVkO1xyXG4vL2RlYnVnICAgICAgICBjb25zb2xlLmxvZyhgbW9kZT0ke3RoaXMubW9kZX0sIG5tYnI9JHt0aGlzLm5tYnJ9LCBwaWQgPSAke3RoaXMucGlkfWApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKlxyXG5tb2R1bGUuZXhwb3J0cyA9IG5ld0dhbWU7XHJcbm1vZHVsZS5leHBvcnRzID0gbmV3SGVybztcclxuKi8iLCIvLyDliKnnlKjjgq/jg6njgrnnrYnjga7oqq3jgb/ovrzjgb9cclxuXHJcbi8vIOOCqOODqeODvOODoeODg+OCu+ODvOOCuOetieOCkuS/neWtmOODu+ihqOekuuOBmeOCi+OCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX0RzcE1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9tYWkvc3JjL2RfdXRsL0NfRHNwTWVzc2FnZSc7XHJcblxyXG4vLyBNeVNxbOOCkuaJseOBhuOCr+ODqeOCuVxyXG5pbXBvcnQgbXlzcWwgICAgICAgICAgICBmcm9tIFwibXlzcWwyL3Byb21pc2VcIjtcclxuXHJcbi8vIFNhdmUvTG9hZOmWouS/guOCr+ODqeOCueWFqOiIrFxyXG5pbXBvcnQgeyBDX1NhdmVJbmZvLCBKU09OX1NhdmVJbmZvIH0gICAgZnJvbSAnLi4vLi4vLi4vbWFpL3NyYy9kX21kbC9DX1NhdmVJbmZvJztcclxuaW1wb3J0IHsgQ19TYXZlRGF0YSwgSlNPTl9TYXZlRGF0YSB9ICAgIGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF9tZGwvQ19TYXZlRGF0YSc7XHJcbmltcG9ydCB7IENfU2F2ZURhdGFSREIsIENfU2F2ZUluZm9SREIgfSBmcm9tICcuLi8uLi8uLi9tYWkvc3JjL2RfcmRiL0NfU2F2ZURhdGFSREInO1xyXG5cclxudHlwZSBkYl9jb25uZWN0ID0gbXlzcWwuUG9vbENvbm5lY3Rpb247XHJcbmxldCAgZGJfbWFpOiBkYl9jb25uZWN0O1xyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDkuLvjgIDlh6bjgIDnkIYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmludGVyZmFjZSBJX1JldHVybiB7XHJcbiAgICBlY29kZTogICAgICBudW1iZXI7XHJcbiAgICBlbXNnOiAgICAgICBzdHJpbmc7XHJcbiAgICBzYXZlX2luZm8/OiBKU09OX1NhdmVJbmZvW107XHJcbiAgICBzYXZlPzogICAgICBKU09OX1NhdmVEYXRhO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluZm8oYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGF3YWl0IGluaXQoYXJnKTtcclxuXHJcbiAgICBsZXQgICByZXRfdmFsOiBJX1JldHVybjtcclxuICAgIGNvbnN0IHNhdmVfYXJyYXkgPSBhd2FpdCBDX1NhdmVJbmZvUkRCLmdldF9saXN0X2J5X3BpZChkYl9tYWksIGd2Lm1lcywgZ2EucGlkKTtcclxuICAgIGlmIChndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICByZXRfdmFsID0gZXJyX2VuY29kZSg1MDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXRfdmFsID0gYWxsX3NhdmVfaW5mbygwLCBzYXZlX2FycmF5KTtcclxuICAgIH1cclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcblxyXG4vKlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdG1wX2xvYWQoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfbG9hZChnYS5waWQsIDEwMCwgMzMwKTtcclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnN0YW50X2xvYWQoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfbG9hZChnYS5waWQsIDEwMSwgMzEwKTtcclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBVRF9sb2FkKGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBQcm9taXNlPElfUmV0dXJuPiB7XHJcbiAgICBpbml0KGFyZyk7XHJcbiAgICBjb25zdCByZXRfdmFsID0gYXdhaXQgX2xvYWQoZ2EucGlkLCAxMDIsIDM1MCk7XHJcbiAgICBmaW5sKCk7XHJcbiAgICByZXR1cm4gcmV0X3ZhbDtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYmVmb3JlX2xvYWQoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfbG9hZChnYS5waWQsIDEwMywgMzgwKTtcclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmFsX2xvYWQoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfbG9hZChnYS5waWQsIGdhLnVubywgMzApO1xyXG4gICAgZmlubCgpO1xyXG4gICAgcmV0dXJuIHJldF92YWw7XHJcbn1cclxuKi9cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZChhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgYXdhaXQgaW5pdChhcmcpO1xyXG4gICAgY29uc3QgcGlkID0gZ2EucGlkO1xyXG4gICAgbGV0ICAgdW5vOiBudW1iZXI7XHJcbiAgICBsZXQgICBlbm86IG51bWJlcjtcclxuICAgIHN3aXRjaCAoZ2EubW9kZSkge1xyXG4gICAgICAgIGNhc2UgJ3RtcF9sb2FkJzogICAgICB1bm8gPSAxMDA7ICAgIGVubyA9IDMzMDsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnaW5zdGFudF9sb2FkJzogIHVubyA9IDEwMTsgICAgZW5vID0gMzEwOyBicmVhaztcclxuICAgICAgICBjYXNlICdVRF9sb2FkJzogICAgICAgdW5vID0gMTAyOyAgICBlbm8gPSAzNTA7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2JlZm9yZV9sb2FkJzogICB1bm8gPSAxMDM7ICAgIGVubyA9IDM3MDsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZ2VuZXJhbF9sb2FkJzogIHVubyA9IGdhLnVubzsgZW5vID0gMzkwOyBicmVhaztcclxuICAgICAgICBkZWZhdWx0OiAgICAgICAgICAgICAgcmV0dXJuIGVycl9lbmNvZGUoODg4OCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXRfdmFsID0gYXdhaXQgX2xvYWQocGlkLCB1bm8sIGVubyk7XHJcbiAgICBmaW5sKCk7XHJcbiAgICByZXR1cm4gcmV0X3ZhbDtcclxufVxyXG5cclxuXHJcbi8qXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0bXBfc2F2ZShhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgaW5pdChhcmcpO1xyXG4gICAgY29uc3QgcmV0X3ZhbCA9IGF3YWl0IF9zYXZlKGdhLnBpZCwgMTAwLCAnX19UZW1wb3JhcnlTYXZlRGF0YV9fJywgMjMwKTtcclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnN0YW50X3NhdmUoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfc2F2ZShnYS5waWQsIDEwMSwgJ19fSW5zdGFudFNhdmVEYXRhX18nLCAyMTApO1xyXG4gICAgZmlubCgpO1xyXG4gICAgcmV0dXJuIHJldF92YWw7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFVEX3NhdmUoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfc2F2ZShnYS5waWQsIDEwMiwgJ19fVXBEb3duU2F2ZURhdGFfXycsIDI1MCk7XHJcbiAgICBmaW5sKCk7XHJcbiAgICByZXR1cm4gcmV0X3ZhbDtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYmVmb3JlX3NhdmUoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfc2F2ZShnYS5waWQsIDEwMywgJ19fQmVmb3JlVGhlRXZlbnREYXRhX18nLCAyODApO1xyXG4gICAgZmlubCgpO1xyXG4gICAgcmV0dXJuIHJldF92YWw7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYWxfc2F2ZShhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgaW5pdChhcmcpO1xyXG4gICAgY29uc3QgcmV0X3ZhbCA9IGF3YWl0IF9zYXZlKGdhLnBpZCwgZ2Euc2F2ZT8udW5pcV9ubz8/OTksIGdhLnNhdmU/LnRpdGxlPz8nPz8/JywgMjMwKTtcclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcbiovXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmUoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGF3YWl0IGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHBpZCAgPSBnYS5zYXZlPy5wbGF5ZXJfaWQ/Py0yO1xyXG4gICAgbGV0ICAgdW5vOiAgIG51bWJlcjtcclxuICAgIGxldCAgIGVubzogICBudW1iZXI7XHJcbiAgICBsZXQgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgc3dpdGNoIChnYS5tb2RlKSB7XHJcbiAgICAgICAgY2FzZSAndG1wX3NhdmUnOiAgICAgIHVubyA9IDEwMDsgICAgZW5vID0gMjMwOyB0aXRsZT0gJ19fVGVtcG9yYXJ5U2F2ZURhdGFfXyc7ICBicmVhaztcclxuICAgICAgICBjYXNlICdpbnN0YW50X3NhdmUnOiAgdW5vID0gMTAxOyAgICBlbm8gPSAyMTA7IHRpdGxlPSAnX19JbnN0YW50U2F2ZURhdGFfXyc7ICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ1VEX3NhdmUnOiAgICAgICB1bm8gPSAxMDI7ICAgIGVubyA9IDI1MDsgdGl0bGU9ICdfX1VwRG93blNhdmVEYXRhX18nOyAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYmVmb3JlX3NhdmUnOiAgIHVubyA9IDEwMzsgICAgZW5vID0gMjcwOyB0aXRsZT0gJ19fQmVmb3JlVGhlRXZlbnREYXRhX18nOyBicmVhaztcclxuICAgICAgICBjYXNlICdnZW5lcmFsX3NhdmUnOiAgdW5vID0gZ2Euc2F2ZT8udW5pcV9ubz8/OTk7IGVubyA9IDI5MDsgdGl0bGUgPSBnYS5zYXZlPy50aXRsZT8/Jz8/Pyc7ICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OiAgICAgICAgICAgICAgcmV0dXJuIGVycl9lbmNvZGUoOTk5OSk7XHJcbiAgICB9XHJcbi8vICAgIGNvbnNvbGUuZXJyb3IoYHBpZD0ke3BpZH0sIHVubz0ke3Vub30sIHRpdGxlPSR7dGl0bGV9LCBlbm89JHtlbm99YCk7XHJcbiAgICBjb25zdCByZXRfdmFsID0gYXdhaXQgX3NhdmUocGlkLCB1bm8sIHRpdGxlLCBlbm8pO1xyXG4gICAgZmlubCgpO1xyXG4gICAgcmV0dXJuIHJldF92YWw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vICAg44K144OW44Or44O844OB44OzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIF9sb2FkKHBpZDogbnVtYmVyLCB1bm86IG51bWJlciwgZWNvZGU6IG51bWJlcik6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGF3YWl0IHRyX2JlZ2luKGRiX21haSk7XHJcblxyXG4gICAgLy8g44Om44OL44O844Kv44O744OK44Oz44OQ44O844Gnc2F2ZeODh+ODvOOCv+OCkuaOouOBmeOAguimi+OBpOOBi+OCjOOBsHNhdmVfaWTjgavjgrvjg4Pjg4jjgZnjgotcclxuICAgIGNvbnN0IHNhdmVfaWQgPSBhd2FpdCBDX1NhdmVJbmZvUkRCLmdldF9zYXZlX2lkX2F0X3RibChkYl9tYWksIGd2Lm1lcywgcGlkLCB1bm8pO1xyXG4gICAgaWYgKGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIGF3YWl0IHRyX3JvbGxiYWNrKGRiX21haSk7XHJcbiAgICAgICAgcmV0dXJuIGFsbF9zYXZlX2RhdGEoZWNvZGUsIHVuZGVmaW5lZCk7O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG1lemXjgoR0ZWFt562J44Gu6Zai6YCj44GZ44KL44OH44O844K/44KS5Y+N5pig44GZ44KLXHJcbiAgICBjb25zdCBzYXZlX2RhdGEwMiA9IGF3YWl0IENfU2F2ZURhdGFSREIuZ2V0X2Zyb21fcmRiKGRiX21haSwgZ3YubWVzLCBzYXZlX2lkKTtcclxuICAgIGlmIChndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICBhd2FpdCB0cl9yb2xsYmFjayhkYl9tYWkpO1xyXG4gICAgICAgIHJldHVybiBhbGxfc2F2ZV9kYXRhKGVjb2RlLCB1bmRlZmluZWQpOztcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCB0cl9jb21taXQoZGJfbWFpKTtcclxuICAgIHJldHVybiBhbGxfc2F2ZV9kYXRhKDAsIHNhdmVfZGF0YTAyKTtcclxuXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIF9zYXZlKHBpZDogbnVtYmVyLCB1bmlxX25vOiBudW1iZXIsIHRpdGxlOiBzdHJpbmcsIGVjb2RlOiBudW1iZXIpOiBQcm9taXNlPElfUmV0dXJuPiB7XHJcbiAgICBpZiAoZ2Euc2F2ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gYWxsX3NhdmVfZGF0YShlY29kZSwgdW5kZWZpbmVkKTtcclxuICAgIGdhLnNhdmUucGxheWVyX2lkID0gcGlkO1xyXG4gICAgZ2Euc2F2ZS51bmlxX25vICAgPSB1bmlxX25vO1xyXG4gICAgZ2Euc2F2ZS50aXRsZSAgICAgPSB0aXRsZTtcclxuLy9jb25zb2xlLmVycm9yKGBwaWQ9JHtwaWR9LCB1bm89JHt1bmlxX25vfSwgdGl0bGU9JHt0aXRsZX1gKTtcclxuICAgIGF3YWl0IHRyX2JlZ2luKGRiX21haSk7XHJcblxyXG4gICAgLy8g44Om44OL44O844Kv44O744OK44Oz44OQ44O844Gnc2F2ZeODh+ODvOOCv+OCkuaOouOBmeOAglxyXG4gICAgY29uc3Qgc2F2ZV9pZCA9IGF3YWl0IENfU2F2ZUluZm9SREIuZ2V0X3NhdmVfaWRfYXRfdGJsKGRiX21haSwgZ3YubWVzLCBwaWQsIHVuaXFfbm8pO1xyXG4gICAgaWYgKGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIGF3YWl0IHRyX3JvbGxiYWNrKGRiX21haSk7XHJcbiAgICAgICAgcmV0dXJuIGFsbF9zYXZlX2RhdGEoZWNvZGUgKyAxMCwgZ2Euc2F2ZSk7XHJcbiAgICB9XHJcbiAgICAvLyDlkIzjgZhpZOOBruaXouWtmOODh+ODvOOCv+OBjOacieOBo+OBn+OCieS4gOaXpuWJiumZpOOBmeOCi1xyXG4vL2RlYnVnIGNvbnNvbGUuZXJyb3IoYHNhdmVfaWQgPSAke3NhdmVfaWR9YCk7XHJcbiAgICBpZiAoc2F2ZV9pZCA+IDApIHtcclxuICAgICAgICBjb25zdCByc2x0MDEgPSBhd2FpdCBDX1NhdmVEYXRhUkRCLmRlbF90b19yZGIoZGJfbWFpLCBndi5tZXMsIHNhdmVfaWQpOyBcclxuICAgICAgICBpZiAoZ3YubWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRyX3JvbGxiYWNrKGRiX21haSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGxfc2F2ZV9kYXRhKGVjb2RlICsgMzMsIGdhLnNhdmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOaUueOCgeOBpijliKXjga7jg6zjgrPjg7zjg4njgasp44K744O844OW44GZ44KLXHJcbiAgICBjb25zdCByc2x0MDIgPSBhd2FpdCBDX1NhdmVEYXRhUkRCLnNldF90b19yZGIoZGJfbWFpLCBndi5tZXMsIGdhLnNhdmUpO1xyXG4gICAgaWYgKHJzbHQwMiA9PT0gZmFsc2UpIHtcclxuICAgICAgICBhd2FpdCB0cl9yb2xsYmFjayhkYl9tYWkpO1xyXG4gICAgICAgIHJldHVybiBhbGxfc2F2ZV9kYXRhKGVjb2RlICsgMjMsIGdhLnNhdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IHRyX2NvbW1pdChkYl9tYWkpO1xyXG4gICAgcmV0dXJuIGFsbF9zYXZlX2RhdGEoMCwgZ2Euc2F2ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFsbF9zYXZlX2RhdGEoY29kZTogbnVtYmVyLCBzYXZlOiBDX1NhdmVEYXRhfHVuZGVmaW5lZCk6IElfUmV0dXJuIHtcclxuICAgIGxldCByZXRfdmFsOiBJX1JldHVybjtcclxuXHJcbiAgICBpZiAoY29kZSAhPT0gMCB8fCBndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICByZXRfdmFsID0gbmV3IENfRXJyUmV0dXJuKGNvZGUsIGd2Lm1lcy5nZXRfZXJyX21lc3NhZ2VzKCkuam9pbihcIlxcblwiKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldF92YWwgPSBuZXcgQ19Ob3JSZXR1cm4oKTtcclxuICAgICAgICBpZiAoc2F2ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldF92YWwuc2F2ZSA9IHNhdmUuZW5jb2RlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0X3ZhbC5zYXZlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmV0X3ZhbDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWxsX3NhdmVfaW5mbyhjb2RlOiBudW1iZXIsIHNhdmVfbGlzdDogQ19TYXZlSW5mb1tdKTogSV9SZXR1cm4ge1xyXG4gICAgbGV0IHJldF92YWw6IElfUmV0dXJuO1xyXG5cclxuICAgIGlmIChjb2RlICE9PSAwIHx8IGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIHJldF92YWwgPSBuZXcgQ19FcnJSZXR1cm4oY29kZSwgZ3YubWVzLmdldF9lcnJfbWVzc2FnZXMoKS5qb2luKFwiXFxuXCIpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0X3ZhbCA9IG5ldyBDX05vclJldHVybigpO1xyXG4vLyAgICAgICAgcmV0X3ZhbC5zYXZlX2luZm8gPSBzYXZlX2xpc3Q7XHJcbiAgICAgICAgY29uc3QgcmV0X2FycmF5OiBKU09OX1NhdmVEYXRhW10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHNhdmVfZWxtIG9mIHNhdmVfbGlzdCkgcmV0X2FycmF5LnB1c2goc2F2ZV9lbG0uZW5jb2RlKCkpO1xyXG4gICAgICAgIHJldF92YWwuc2F2ZV9pbmZvID0gcmV0X2FycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGVycl9lbmNvZGUoY29kZTogbnVtYmVyKTogSV9SZXR1cm4ge1xyXG4gICAgY29uc3QgcmV0X2Fzc29jOiBJX1JldHVybiA9IHtlY29kZTpjb2RlLCBlbXNnOiAnJ307XHJcbiAgICBmb3IgKGNvbnN0IG1zZyBvZiBndi5tZXMuZ2V0X2Vycl9tZXNzYWdlcygpKSByZXRfYXNzb2MuZW1zZyArPSBtc2cgKyBcIlxcblwiOyBcclxuICAgIHJldHVybiByZXRfYXNzb2M7XHJcbn1cclxuXHJcblxyXG5jbGFzcyBDX05vclJldHVybiBpbXBsZW1lbnRzIElfUmV0dXJuIHtcclxuICAgIHB1YmxpYyBlY29kZTogICBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGVtc2c6ICAgIHN0cmluZyA9ICdTdGF0dXMgT0snO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge31cclxufVxyXG5cclxuY2xhc3MgQ19FcnJSZXR1cm4gaW1wbGVtZW50cyBJX1JldHVybiB7XHJcbiAgICBwdWJsaWMgZWNvZGU6ICAgbnVtYmVyID0gMTAwMDtcclxuICAgIHB1YmxpYyBlbXNnOiAgICBzdHJpbmcgPSAnZXJyb3InO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGVjb2RlOiBudW1iZXIsIGVtc2c6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZWNvZGUgID0gZWNvZGU7XHJcbiAgICAgICAgdGhpcy5lbXNnICAgPSBlbXNnO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDliJ3jgIDmnJ/jgIDoqK3jgIDlrpogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmxldCBndjogQ19HbG9iYWxWYXI7XHJcbmxldCBnYTogQ19HbG9iYWxBcmd1bWVudHM7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbml0KG9iajogSV9HbG9iYWxBcmd1bWVudHMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGd2ID0gICAgIG5ldyBDX0dsb2JhbFZhcigpO1xyXG4gICAgZ2EgPSAgICAgbmV3IENfR2xvYmFsQXJndW1lbnRzKG9iaik7XHJcbiAgICBkYl9tYWkgPSBhd2FpdCBndi5kYl9wb29sLmdldENvbm5lY3Rpb24oKTtcclxuXHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gZmlubCgpOiB2b2lkIHtcclxuICAgIGRiX21haS5yZWxlYXNlKCk7XHJcbiAgICBndi5maW5sKCk7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy9cclxuLy8vLy8gICAgIOOCr+ODqeOCueWuo+iogFxyXG4vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgLy8g5aSn5Z+f5aSJ5pWw44Gu6Kit5a6aXHJcbiAgICBjbGFzcyBDX0dsb2JhbFZhciB7XHJcbiAgICAgICAgcHVibGljIG1lczogQ19Ec3BNZXNzYWdlO1xyXG5cclxuICAgICAgICBwdWJsaWMgZGJfaG9zdDogICBzdHJpbmcgPSBcInNxbFwiO1xyXG4gICAgICAgIHB1YmxpYyBkYl9wb3J0OiAgIG51bWJlciA9ICAzMzA2O1xyXG4gICAgICAgIHB1YmxpYyBkYl9uYW1lOiAgIHN0cmluZyA9IFwiZGJfbWFpXCI7XHJcbiAgICAgICAgcHVibGljIGRiX3VzZXI6ICAgc3RyaW5nID0gXCJpdHNheW5vMzNcIjtcclxuICAgICAgICBwdWJsaWMgZGJfcGFzczogICBzdHJpbmcgPSBcIlBFMzMzODMzXCI7XHJcbiAgICBcclxuICAgICAgICBwdWJsaWMgZGJfcG9vbDogICBteXNxbC5Qb29sO1xyXG4gICAgXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICB0aGlzLm1lcyAgICAgPSBuZXcgQ19Ec3BNZXNzYWdlKCAvKiBpc0hUTUwgPSAqLyBmYWxzZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgdGhpcy5kYl9wb29sID0gbXlzcWwuY3JlYXRlUG9vbCh7XHJcbiAgICAgICAgICAgICAgICBob3N0OiAgICAgIHRoaXMuZGJfaG9zdCxcclxuICAgICAgICAgICAgICAgIHBvcnQ6ICAgICAgdGhpcy5kYl9wb3J0LFxyXG4gICAgICAgICAgICAgICAgdXNlcjogICAgICB0aGlzLmRiX3VzZXIsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogIHRoaXMuZGJfcGFzcyxcclxuICAgICAgICAgICAgICAgIGRhdGFiYXNlOiAgdGhpcy5kYl9uYW1lLFxyXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbkxpbWl0OiAgICAgMTAsIC8vIOaOpee2muOCkuW8teOCiue2muOBkeOCi+aVsFxyXG4gICAgICAgICAgICAgICAgd2FpdEZvckNvbm5lY3Rpb25zOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbmFtZWRQbGFjZWhvbGRlcnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBqc29uU3RyaW5nczogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBmaW5sKCkge1xyXG4gICAgICAgICAgICB0aGlzLmRiX3Bvb2wuZW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbnRlcmZhY2UgSV9HbG9iYWxBcmd1bWVudHMge1xyXG4gICAgICAgIG1vZGU/OiAgICAgICAgc3RyaW5nO1xyXG4gICAgICAgIHBpZD86ICAgICAgICAgbnVtYmVyO1xyXG4gICAgICAgIHVubz86ICAgICAgICAgbnVtYmVyO1xyXG4gICAgICAgIHNhdmVfaWQ/OiAgICAgbnVtYmVyO1xyXG4gICAgICAgIHNhdmVfdGl0bGU/OiAgc3RyaW5nOyBcclxuICAgICAgICBzYXZlX2RldGFpbD86IHN0cmluZzsgXHJcbiAgICAgICAgc2F2ZV9wb2ludD86ICBzdHJpbmc7IFxyXG4gICAgICAgIHNhdmVfdGltZT86ICAgc3RyaW5nOyBcclxuICAgICAgICBzYXZlPzogICAgICAgIHN0cmluZztcclxuICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAvLyBQT1NU5byV5pWw44Gu6Kit5a6aXHJcbiAgICBjbGFzcyBDX0dsb2JhbEFyZ3VtZW50cyB7XHJcbiAgICAgICAgcHVibGljIG1vZGU6ICAgICAgc3RyaW5nICAgICAgICAgID0gJ3Vua25vd24nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBzYXZlX0pTT046IHN0cmluZyAgICAgICAgICA9ICcnO1xyXG4gICAgICAgIHB1YmxpYyBzYXZlOiAgICAgICAgQ19TYXZlRGF0YXx1bmRlZmluZWQgPSB1bmRlZmluZWQ7IFxyXG5cclxuICAgICAgICBwdWJsaWMgcGlkOiAgICAgICAgIG51bWJlciA9ICAxO1xyXG4gICAgICAgIHB1YmxpYyB1bm86ICAgICAgICAgbnVtYmVyID0gLTE7XHJcbiAgICAgICAgcHVibGljIHNhdmVfaWQ6ICAgICBudW1iZXIgPSAtMTtcclxuICAgICAgICBwdWJsaWMgc2F2ZV90aXRsZTogIHN0cmluZyA9ICcnOyBcclxuICAgICAgICBwdWJsaWMgc2F2ZV9kZXRhaWw6IHN0cmluZyA9ICcnOyBcclxuICAgICAgICBwdWJsaWMgc2F2ZV9wb2ludDogIHN0cmluZyA9ICcnOyBcclxuICAgICAgICBwdWJsaWMgc2F2ZV90aW1lOiAgIHN0cmluZyA9ICcnXHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvYmo6IElfR2xvYmFsQXJndW1lbnRzfHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAob2JqID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubW9kZSAgICAgICAgPSBvYmoubW9kZSA/PyB0aGlzLm1vZGU7XHJcbiAgICAgICAgICAgIHRoaXMucGlkICAgICAgICAgPSBvYmoucGlkICA/PyB0aGlzLnBpZDtcclxuICAgICAgICAgICAgdGhpcy51bm8gICAgICAgICA9IG9iai51bm8gID8/IHRoaXMudW5vO1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVfaWQgICAgID0gTnVtYmVyKG9iai5zYXZlX2lkKSAgICAgID8/IHRoaXMuc2F2ZV9pZDtcclxuICAgICAgICAgICAgdGhpcy5zYXZlX3RpdGxlICA9IG9iai5zYXZlX3RpdGxlICAgICAgICAgICA/PyB0aGlzLnNhdmVfdGl0bGU7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZV9kZXRhaWwgPSBvYmouc2F2ZV9kZXRhaWwgICAgICAgICAgPz8gdGhpcy5zYXZlX2RldGFpbDtcclxuICAgICAgICAgICAgdGhpcy5zYXZlX3BvaW50ICA9IG9iai5zYXZlX3BvaW50ICAgICAgICAgICA/PyB0aGlzLnNhdmVfcG9pbnQ7XHJcbiAgICAgICAgICAgIGlmIChvYmouc2F2ZSAhPT0gdW5kZWZpbmVkKSAgICB0aGlzLnNhdmUgICAgPSBuZXcgQ19TYXZlRGF0YShKU09OLnBhcnNlKG9iai5zYXZlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vICAg44OH44O844K/44OZ44O844K56Zai5L+CIFxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAgIFxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiB0cl9iZWdpbihkYl9tYWk6IGRiX2Nvbm5lY3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBkYl9tYWkuYmVnaW5UcmFuc2FjdGlvbigpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBndi5tZXMuc2V0X2Vycl9tZXNzYWdlKFwi44OI44Op44Oz44K244Kv44K344On44Oz44Gu6ZaL5aeL5aSx5pWXOiBcIiArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHRyX2NvbW1pdChkYl9tYWk6IGRiX2Nvbm5lY3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBkYl9tYWkuY29tbWl0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGd2Lm1lcy5zZXRfZXJyX21lc3NhZ2UoXCLjg4jjg6njg7Pjgrbjgq/jgrfjg6fjg7Pjga7jgrPjg5/jg4Pjg4jlpLHmlZdcIiArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHRyX3JvbGxiYWNrKGRiX21haTogZGJfY29ubmVjdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGRiX21haS5yb2xsYmFjaygpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBndi5tZXMuc2V0X2Vycl9tZXNzYWdlKFwi44OI44Op44Oz44K244Kv44K344On44Oz44Gu44Ot44O844Or44OQ44OD44Kv5aSx5pWXXCIgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiIsIlxyXG5jb25zdCBkYl9ob3N0ID0gJ3NxbCc7XHJcbi8vIOWIqeeUqOOCr+ODqeOCueetieOBruiqreOBv+i+vOOBv1xyXG5cclxuLy8g44Ko44Op44O844Oh44OD44K744O844K4562J44KS5L+d5a2Y44O76KGo56S644GZ44KL44Kv44Op44K5XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9ICAgICBmcm9tICcuLi8uLi8uLi9tYWkvc3JjL2RfdXRsL0NfRHNwTWVzc2FnZSc7XHJcblxyXG4vLyBNeVNxbOOCkuaJseOBhuOCr+ODqeOCuVxyXG5pbXBvcnQgbXlzcWwgZnJvbSBcIm15c3FsMi9wcm9taXNlXCI7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Li744CA5Yem44CA55CGICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbnRlcmZhY2UgSV9HbG9iYWxBcmd1bWVudHMge1xyXG4gICAgbW9kZT86IHN0cmluZztcclxuICAgIHBpZDogICBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJX1JldHVybiB7XHJcbiAgICBlY29kZTogICBudW1iZXI7XHJcbiAgICBlbXNnOiAgICBzdHJpbmc7XHJcbiAgICBwaWQ6ICAgICBudW1iZXI7XHJcbiAgICBuYW1lOiAgICBzdHJpbmc7XHJcbiAgICBtYm5hbWU6ICBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIENfTm9yUmV0dXJuIGltcGxlbWVudHMgSV9SZXR1cm4ge1xyXG4gICAgcHVibGljIGVjb2RlOiAgIG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgZW1zZzogICAgc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgcGlkOiAgICAgbnVtYmVyID0gLTE7XHJcbiAgICBwdWJsaWMgbmFtZTogICAgc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgbWJuYW1lOiAgc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgbWJuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnBpZCAgICA9IHBpZDtcclxuICAgICAgICB0aGlzLm5hbWUgICA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5tYm5hbWUgPSBtYm5hbWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfRXJyUmV0dXJuIGltcGxlbWVudHMgSV9SZXR1cm4ge1xyXG4gICAgcHVibGljIGVjb2RlOiAgIG51bWJlciA9IDEwMDA7XHJcbiAgICBwdWJsaWMgZW1zZzogICAgc3RyaW5nID0gJ2Vycm9yJztcclxuICAgIHB1YmxpYyBwaWQ6ICAgICBudW1iZXIgPSAtMTtcclxuICAgIHB1YmxpYyBuYW1lOiAgICBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBtYm5hbWU6ICBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihlY29kZTogbnVtYmVyLCBlbXNnOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVjb2RlICA9IGVjb2RlO1xyXG4gICAgICAgIHRoaXMuZW1zZyAgID0gZW1zZztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIEdldHRpbmcgTmV3IEdhbWUgc3RhcnRpaW5nIGZyb20gR3VsZFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdGVzdChhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgbGV0IHJldHVybl92YWw6IElfUmV0dXJuO1xyXG5cclxuICAgIGluaXQoYXJnKTtcclxuXHJcbiAgICBpZiAoZ3YubWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgZ3YubWVzLmRpc3BsYXlfZXJyX21lc3NhZ2UoKTtcclxuICAgICAgICByZXR1cm5fdmFsID0gbmV3IENfRXJyUmV0dXJuKDEwMCwgJ2RiX21haSBPUEVOIEVSUk9SICcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm5fdmFsID0gYXdhaXQgZ2V0X3BsYXllcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXR1cm5fdmFsO1xyXG59XHJcblxyXG4gXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vICAg44K144OW44Or44O844OB44OzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldF9wbGF5ZXIoKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgaWYgKGdhLnBpZCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbmV3IENfRXJyUmV0dXJuKDk5OSwgJ1BpZCBVbmRlZmluZWQnKTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0X3VzZXJzKCkudGhlbihyc2x0X3VzZXJzID0+IHtcclxuICAgICAgICBpZiAocnNsdF91c2VycyA9PT0gdW5kZWZpbmVkIHx8IGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICBndi5tZXMuZGlzcGxheV9lcnJfbWVzc2FnZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENfRXJyUmV0dXJuKDIwMCwgJ1NRTCBFUlJPUiAnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJzbHRfdXNlcnMubGVuZ3RoIDwgMSkgcmV0dXJuIG5ldyBDX0VyclJldHVybig5MDAsIGBObyBkYXRhIGV4aXN0IG9uIHBpZD0ke2dhLnBpZH1gKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX05vclJldHVybihcclxuICAgICAgICAgICAgcnNsdF91c2Vyc1swXS5pZCwgXHJcbiAgICAgICAgICAgIHJzbHRfdXNlcnNbMF0ubmFtZSwgXHJcbiAgICAgICAgICAgIHJzbHRfdXNlcnNbMF0ubWJuYW1lXHJcbiAgICAgICAgKTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX0VyclJldHVybigxMDAsICdTUUwgRVJST1I6ICcgKyBlcnIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJX3RibF9wbGF5ZXIgZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0e1xyXG4gICAgaWQ6ICAgICAgbnVtYmVyO1xyXG4gICAgbmFtZTogICAgc3RyaW5nO1xyXG4gICAgcGFzc3dkOiAgc3RyaW5nO1xyXG4gICAgbWJuYW1lOiAgc3RyaW5nO1xyXG4gICAgZW1haWw6ICAgc3RyaW5nO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZWxlY3RfdXNlcnMoKTogUHJvbWlzZTxJX3RibF9wbGF5ZXJbXXx1bmRlZmluZWQ+IHtcclxuICAgIGNvbnN0IHNxbCA9IGBcclxuICAgICAgICBTRUxFQ1QgaWQsIG5hbWUsIHBhc3N3ZCwgbWJuYW1lLCBlbWFpbCBGUk9NIHRibF9wbGF5ZXJcclxuICAgICAgICAgICAgV0hFUkUgIGlkID0gOmlkXHJcbiAgICBgO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgW3JzbHRSb3dTZXRdID0gYXdhaXQgZ3YuZGJfcG9vbC5xdWVyeTxJX3RibF9wbGF5ZXJbXT4oc3FsLCB7aWQ6IGdhLnBpZH0pO1xyXG4gICAgICAgIHJldHVybiByc2x0Um93U2V0O1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgZ3YubWVzLnNldF9lcnJfbWVzc2FnZSgnU1FMIEVSUk9SIFNFTEVDVCBGUk9NIHRibF9wbGF5ZXI6ICcgKyBlcnIpO1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDliJ3jgIDmnJ/jgIDoqK3jgIDlrpogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmxldCBndjogQ19HbG9iYWxWYXI7XHJcbmxldCBnYTogQ19HbG9iYWxBcmd1bWVudHM7XHJcblxyXG5mdW5jdGlvbiBpbml0KG9iajogSV9HbG9iYWxBcmd1bWVudHMpOiB2b2lkIHtcclxuICAgIGd2ID0gbmV3IENfR2xvYmFsVmFyKCk7XHJcbiAgICBnYSA9IG5ldyBDX0dsb2JhbEFyZ3VtZW50cyhvYmopO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIGZpbmwoKTogdm9pZCB7XHJcbiAgICBndi5maW5sKCk7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy9cclxuLy8vLy8gICAgIOOCr+ODqeOCueWuo+iogFxyXG4vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyDlpKfln5/lpInmlbDjga7oqK3lrppcclxuY2xhc3MgQ19HbG9iYWxWYXIge1xyXG4gICAgcHVibGljIG1lczogQ19Ec3BNZXNzYWdlO1xyXG5cclxuICAgIHB1YmxpYyBkYl9ob3N0OiAgIHN0cmluZyA9IFwic3FsXCI7XHJcbiAgICBwdWJsaWMgZGJfcG9ydDogICBudW1iZXIgPSAgMzMwNjtcclxuICAgIHB1YmxpYyBkYl9uYW1lOiAgIHN0cmluZyA9IFwiZGJfbWFpXCI7XHJcbiAgICBwdWJsaWMgZGJfdXNlcjogICBzdHJpbmcgPSBcIml0c2F5bm8zM1wiO1xyXG4gICAgcHVibGljIGRiX3Bhc3M6ICAgc3RyaW5nID0gXCJQRTMzMzgzM1wiO1xyXG5cclxuICAgIHB1YmxpYyBkYl9wb29sOiAgIG15c3FsLlBvb2w7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubWVzICAgICA9IG5ldyBDX0RzcE1lc3NhZ2UoIC8qIGlzSFRNTCA9ICovIGZhbHNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYl9wb29sID0gbXlzcWwuY3JlYXRlUG9vbCh7XHJcbiAgICAgICAgICAgIGhvc3Q6ICAgICAgdGhpcy5kYl9ob3N0LFxyXG4gICAgICAgICAgICBwb3J0OiAgICAgIHRoaXMuZGJfcG9ydCxcclxuICAgICAgICAgICAgdXNlcjogICAgICB0aGlzLmRiX3VzZXIsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAgdGhpcy5kYl9wYXNzLFxyXG4gICAgICAgICAgICBkYXRhYmFzZTogIHRoaXMuZGJfbmFtZSxcclxuICAgICAgICAgICAgY29ubmVjdGlvbkxpbWl0OiAgICAgMTAsIC8vIOaOpee2muOCkuW8teOCiue2muOBkeOCi+aVsFxyXG4gICAgICAgICAgICB3YWl0Rm9yQ29ubmVjdGlvbnM6IHRydWUsXHJcbiAgICAgICAgICAgIG5hbWVkUGxhY2Vob2xkZXJzOiB0cnVlLFxyXG4gICAgICAgICAgICBqc29uU3RyaW5nczogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBmaW5sKCkge1xyXG4gICAgICAgIHRoaXMuZGJfcG9vbC5lbmQoKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gUE9TVOW8leaVsOOBruioreWumlxyXG5jbGFzcyBDX0dsb2JhbEFyZ3VtZW50cyB7XHJcbiAgICBwdWJsaWMgbW9kZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHBpZDogIG51bWJlciA9IC0xO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvYmo6IElfR2xvYmFsQXJndW1lbnRzfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMubW9kZSA9IG9iaj8ubW9kZSA/PyAndW5rbm93bic7XHJcbiAgICAgICAgdGhpcy5waWQgID0gb2JqPy5waWQgICE9PSB1bmRlZmluZWQgJiYgIWlzTmFOKG9iai5waWQpICA/IE51bWJlcihvYmoucGlkKSAgOiAtMTtcclxuLy9kZWJ1ZyAgICAgICAgY29uc29sZS5sb2coYG1vZGU9JHt0aGlzLm1vZGV9LCBwaWQgPSAke3RoaXMucGlkfWApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKlxyXG5tb2R1bGUuZXhwb3J0cyA9IG5ld0dhbWU7XHJcbm1vZHVsZS5leHBvcnRzID0gbmV3SGVybztcclxuKi8iLCIvLyDliKnnlKjjgq/jg6njgrnnrYnjga7oqq3jgb/ovrzjgb9cclxuXHJcbi8vIOOCqOODqeODvOODoeODg+OCu+ODvOOCuOetieOCkuS/neWtmOODu+ihqOekuuOBmeOCi+OCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX0RzcE1lc3NhZ2UgfSAgIGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF91dGwvQ19Ec3BNZXNzYWdlJztcclxuXHJcbi8vIOODgOODs+OCuOODp+ODs+ODnuODg+ODl+OBruOCu+ODq+OBrueorumhnuOCkuihqOOBmeWIl+aMmeWei1xyXG5pbXBvcnQgeyBUX016S2luZCB9ICAgICAgIGZyb20gICcuLi8uLi8uLi9tYWkvc3JjL2RfbWRsL1RfTXpLaW5kJztcclxuXHJcbi8vIOaWueWQkeOCkuihqOOBmeOCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX1BvaW50RGlyLCBUX0RpcmVjdGlvbiB9ICAgZnJvbSAgJy4uLy4uLy4uL21haS9zcmMvZF9tZGwvQ19Qb2ludERpcic7XHJcblxyXG4vLyDkvY3nva7jg7vntYzot6/jgpLooajjgZnjgq/jg6njgrnlhajoiKxcclxuaW1wb3J0IHsgQ19Nb3ZhYmxlUG9pbnQgfSAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF9tZGwvQ19Nb3ZhYmxlUG9pbnQnO1xyXG5cclxuLy8gTUFaRemWouS/guOCr+ODqeOCueWFqOiIrFxyXG5pbXBvcnQgeyBDX01hemUgfSAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbWFpL3NyYy9kX21kbC9DX01hemUnO1xyXG5pbXBvcnQgeyBDX01hemVJbmZvLCBKU09OX01hemVJbmZvIH0gZnJvbSAnLi4vLi4vLi4vbWFpL3NyYy9kX21kbC9DX01hemVJbmZvJzsgLy8gTWF6ZeS9nOaIkOOBruODhuODs+ODl+ODrOODvOODiOaDheWgsVxyXG5cclxuLy8g44OR44O844OG44Kj44O844Kv44Op44K55YWo6IisXHJcbmltcG9ydCB7IENfVGVhbSB9ICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbWFpL3NyYy9kX21kbC9DX1RlYW0nO1xyXG5cclxuLy8g44OS44O844Ot44O844Kv44Op44K55YWo6IisXHJcbmltcG9ydCB7IENfSGVybyB9ICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbWFpL3NyYy9kX21kbC9DX0hlcm8nO1xyXG5cclxuLy8g44K744O844OW44OH44O844K/KOOCr+ODqeOCpOOCouODs+ODiOOBqOOBrumAo+aQuinlhajoiKxcclxuaW1wb3J0IHsgQ19TYXZlRGF0YSwgSlNPTl9TYXZlRGF0YSB9IGZyb20gJy4uLy4uLy4uL21haS9zcmMvZF9tZGwvQ19TYXZlRGF0YSc7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Li744CA5Yem44CA55CGICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5sZXQgZ3Y6IENfR2xvYmFsVmFyO1xyXG5sZXQgZ2E6IENfR2xvYmFsQXJndW1lbnRzO1xyXG5cclxuaW50ZXJmYWNlIElfR2xvYmFsQXJndW1lbnRzIHtcclxuICAgIG1vZGU/OiBzdHJpbmc7XHJcbiAgICBubWJyPzogbnVtYmVyO1xyXG4gICAgcGlkPzogIG51bWJlcjtcclxuICAgIHRlYW0/OiBzdHJpbmc7XHJcbiAgICBtYXplPzogc3RyaW5nO1xyXG4gICAgbWF6ZV9uYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSV9SZXR1cm4ge1xyXG4gICAgZWNvZGU6IG51bWJlcjtcclxuICAgIGVtc2c6ICBzdHJpbmc7XHJcbiAgICBzYXZlPzogSlNPTl9TYXZlRGF0YTtcclxuICAgIGRhdGE/OiBvYmplY3Q7XHJcbn1cclxuXHJcbi8vIEdldHRpbmcgSW5mb3JtYXRpb24gb2YgQWxsIE1hemVcclxuZXhwb3J0IGZ1bmN0aW9uIGFsbE1hemUob2JqOiBJX0dsb2JhbEFyZ3VtZW50cyk6IElfUmV0dXJuIHtcclxuICAgIGluaXQob2JqKTtcclxuXHJcbiAgICBjb25zdCBtYXplX2luZm9fYXJyYXk6IEpTT05fTWF6ZUluZm9bXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBuYW1lIGluIGd2Lm1hemVpbmZvKSBtYXplX2luZm9fYXJyYXkucHVzaChndi5tYXplaW5mb1tuYW1lXS5lbmNvZGUoKSk7XHJcbiAgICByZXR1cm4gYWxsX2VuY29kZShcclxuICAgICAgICAwLCBcclxuICAgICAgICB7bWF6ZWluZm86IG1hemVfaW5mb19hcnJheX0sXHJcbiAgICApO1xyXG59XHJcblxyXG4vLyBHZXR0aW5nIE5ldyBNYXplXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXplKG9iajogSV9HbG9iYWxBcmd1bWVudHMpOiBJX1JldHVybiB7XHJcbiAgICBpbml0KG9iaik7XHJcblxyXG4gICAgY29uc3QgW25ld19tYXplLCBuZXdfcG9zXSA9IGNyZWF0ZV9tYXplKGdhLm1hemVfbmFtZSk7IFxyXG4gICAgcmV0dXJuIGFsbF9lbmNvZGUoXHJcbiAgICAgICAgMCwgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtYXplOiBuZXdfbWF6ZS5lbmNvZGUoKSxcclxuICAgICAgICAgICAgcG9zOiAgbmV3X3BvcyxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxufVxyXG5cclxuLy8gR2V0dGluZyBOZXcgR2FtZSBzdGFydGlpbmcgZnJvbSBNYXplXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXdNYXplKG9iajogSV9HbG9iYWxBcmd1bWVudHMpOiBJX1JldHVybiB7XHJcbiAgICBpbml0KG9iaik7XHJcblxyXG4gICAgY29uc3QgW25ld19tYXplLCBuZXdfcG9zXSA9IGNyZWF0ZV9tYXplKCcnKTsgXHJcbiAgICBjb25zdCAgbmV3X3RlYW0gPSBjcmVhdGVfdGVhbShuZXdfbWF6ZSwgbmV3X3Bvcyk7IFxyXG4gICAgY29uc3QgIG5ld19zYXZlID0gY3JlYXRlX3NhdmUobmV3X21hemUsIG5ld190ZWFtKTtcclxuICAgIGNvbnN0ICByZXRfSlNPTiA9IHNhdmVfZW5jb2RlKDAsIG5ld19zYXZlKTtcclxuICAgIHJldHVybiByZXRfSlNPTjtcclxufVxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vICAg44K144OW44Or44O844OB44OzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmZ1bmN0aW9uIGVycl9lbmNvZGUoY29kZTogbnVtYmVyLCBtc2dzOiBzdHJpbmdbXSk6IElfUmV0dXJuIHtcclxuICAgIGNvbnN0IHJldF9hc3NvYzogSV9SZXR1cm4gPSB7ZWNvZGU6Y29kZSwgZW1zZzogJyd9O1xyXG4gICAgZm9yIChjb25zdCBtc2cgb2YgbXNncykgcmV0X2Fzc29jLmVtc2cgKz0gbXNnOyBcclxuICAgIHJldHVybiByZXRfYXNzb2M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFsbF9lbmNvZGUoY29kZTogbnVtYmVyLCBkYXRhOiBvYmplY3QpOiBJX1JldHVybiB7XHJcbiAgICBjb25zdCByZXRfYXNzb2M6IElfUmV0dXJuID0ge2Vjb2RlOmNvZGUsIGVtc2c6ICcnfTtcclxuXHJcbiAgICByZXRfYXNzb2MuZWNvZGUgPSBjb2RlO1xyXG4gICAgaWYgKGNvZGUgIT09IDAgfHwgZ3YubWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgcmV0dXJuIGVycl9lbmNvZGUoY29kZSwgZ3YubWVzLmdldF9lcnJfbWVzc2FnZXMoKSk7XHJcbiAgICB9XHJcbiAgICByZXRfYXNzb2MuZW1zZyA9ICdTdGF0dXMgT0snO1xyXG4gICAgcmV0X2Fzc29jLmRhdGEgPSAgZGF0YTtcclxuXHJcbiAgICByZXR1cm4gcmV0X2Fzc29jO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlX2VuY29kZShjb2RlOiBudW1iZXIsIHNhdmU6IENfU2F2ZURhdGEpOiBJX1JldHVybiB7XHJcbiAgICBjb25zdCByZXRfYXNzb2M6IElfUmV0dXJuID0ge2Vjb2RlOmNvZGUsIGVtc2c6ICcnfTtcclxuXHJcbiAgICBpZiAoY29kZSAhPT0gMCB8fCBndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICByZXR1cm4gZXJyX2VuY29kZShjb2RlLCBndi5tZXMuZ2V0X2Vycl9tZXNzYWdlcygpKTtcclxuICAgIH1cclxuICAgIHJldF9hc3NvYy5lbXNnID0gJ1N0YXR1cyBPSyc7XHJcbiAgICByZXRfYXNzb2Muc2F2ZSA9IHNhdmUuZW5jb2RlKCk7XHJcblxyXG4gICAgcmV0dXJuIHJldF9hc3NvYztcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZV9zYXZlKG1hemU6IENfTWF6ZSwgdGVhbTogQ19UZWFtKTogQ19TYXZlRGF0YSB7XHJcbiAgICByZXR1cm4gbmV3IENfU2F2ZURhdGEoe1xyXG4gICAgICAgIHBsYXllcl9pZDogZ2EucGlkLFxyXG4gICAgICAgIGF1dG9fbW9kZTogJzAnLFxyXG4gICAgICAgIGlzX2FjdGl2ZTogJzEnLFxyXG4gICAgICAgIGlzX2RlbGV0ZTogJzAnLFxyXG5cclxuICAgICAgICBhbGxfdGVhbTogIFt0ZWFtLmVuY29kZSgpXSxcclxuICAgICAgICBhbGxfbWF6ZTogIFttYXplLmVuY29kZSgpXSxcclxuICAgICAgICBhbGxfZ3VsZDogIFtdLCBcclxuICAgICAgICBhbGxfbXZwdDogIFtdLCBcclxuXHJcbiAgICAgICAgbXlwb3M6ICAgICB0ZWFtLmdldF9sb2MoKS5lbmNvZGUoKSxcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVfbWF6ZShtYXplX25hbWU6IHN0cmluZyA9ICcnKTogW0NfTWF6ZSwgQ19Qb2ludERpcl0ge1xyXG4gICAgbGV0IG1hemU6IENfTWF6ZTtcclxuICAgIGlmIChtYXplX25hbWUgPT0gJycpIHtcclxuICAgICAgICBtYXplID0gbmV3IENfTWF6ZSh7XHJcbiAgICAgICAgICAgICduYW1lJyAgOiAn5aeL44G+44KK44Gu6L+35a6uJywgXHJcbiAgICAgICAgICAgICdzaXplX3gnOiAyMSwgXHJcbiAgICAgICAgICAgICdzaXplX3knOiAyMSwgXHJcbiAgICAgICAgICAgICdzaXplX3onOiBndi5NYXhfb2ZfTWF6ZV9GbG9vclxyXG4gICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG1hemVpbmZvID0gZ3YubWF6ZWluZm9bbWF6ZV9uYW1lXTtcclxuICAgICAgICBtYXplID0gbmV3IENfTWF6ZSh7XHJcbiAgICAgICAgICAgICduYW1lJzogICBtYXplaW5mby5tYm5hbWUsIFxyXG4gICAgICAgICAgICAnc2l6ZV94JzogbWF6ZWluZm8uc2l6ZV94LCBcclxuICAgICAgICAgICAgJ3NpemVfeSc6IG1hemVpbmZvLnNpemVfeSwgXHJcbiAgICAgICAgICAgICdzaXplX3onOiBtYXplaW5mby5zaXplX3pcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF6ZS5nZXRfel9tYXgoKTsgaSsrKSB7XHJcbiAgICAgICAgbWF6ZS5jcmVhdGVfbWF6ZShpKTtcclxuICAgIH0gXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG1hemUuZ2V0X3pfbWF4KCk7IGkrKykge1xyXG4gICAgICAgIG1hemUuY3JlYXRlX3N0YWlyKGkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcG9zID0gbWF6ZS5jcmVhdGVfc3RhaXIoMCk7XHJcbiAgICByZXR1cm4gW21hemUsIHBvc107XHJcbn1cclxuXHJcbi8vIOi/t+WuruaOoue0oiDmlrDopo/jgrLjg7zjg6DnlKjjga7mmqvlrprniYjlh6bnva7jgILjgZ3jga7kuoxcclxuZnVuY3Rpb24gY3JlYXRlX2hyZXMoKTogQ19IZXJvW10ge1xyXG4gICAgY29uc3QgaHJlczogQ19IZXJvW10gPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDM7IGkrKykge1xyXG4gICAgICAgIGhyZXMucHVzaChuZXcgQ19IZXJvKCkucmFuZG9tX21ha2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhyZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZV90ZWFtKG1hemU6IENfTWF6ZSwgcG9zOiBDX1BvaW50RGlyKTogQ19UZWFtIHtcclxuLypcclxuICAgICR4ID0gMiAqIHJhbmRvbV9pbnQoMCwgKCgkbWF6ZS0+Z2V0X3NpemVfeCgpIC0gMSkgLyAyKSAtIDEpICsgMTtcclxuICAgICR5ID0gMiAqIHJhbmRvbV9pbnQoMCwgKCgkbWF6ZS0+Z2V0X3NpemVfeSgpIC0gMSkgLyAyKSAtIDEpICsgMTtcclxuICAgICR6ID0gMDsgIC8vICAgICR6ID0gMSAqIHJhbmRvbV9pbnQoMCwgICgkZ3YtPm1hemUtPmdldF9zaXplX3ooKSAtIDEpKTtcclxuXHJcbiAgICAkZCA9IHJhbmRvbV9pbnQoMCwgRGlyZWN0OjpNQVgpO1xyXG4qL1xyXG5jb25zdCB0ZWFtID0gbmV3IENfVGVhbSgpO1xyXG5jb25zdCBsb2MgID0gbmV3IENfTW92YWJsZVBvaW50KCkuZGVjb2RlKHtcclxuICAgICAgICAna2luZCcgICA6ICdNYXplJyxcclxuICAgICAgICAnbmFtZScgICA6ICBtYXplLmdldF9uYW1lKCksXHJcbiAgICAgICAgJ2xvY191aWQnOiAgbWF6ZS51aWQoKSxcclxuICAgICAgICAnbG9jX3Bvcyc6ICBwb3MsXHJcbiAgICAgICAgJ3RlYW1fdWlkJzogdGVhbS51aWQoKSxcclxuICAgICAgICAvKlxyXG4gICAgICAgICdsb2NfcG9zJyA9PiBbXHJcbiAgICAgICAgICAgICd4JyAgID0+ICR4LFxyXG4gICAgICAgICAgICAneScgICA9PiAkeSxcclxuICAgICAgICAgICAgJ3onICAgPT4gJHosXHJcbiAgICAgICAgICAgICdkJyAgID0+ICRkLFxyXG4gICAgICAgIF0sXHJcbiovXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdGVhbS5zZXRfcHJwKHsnbmFtZSc6ICfjgbLjgojjgZPjgZXjgpPjg4Hjg7zjg6AnfSk7XHJcbiAgICB0ZWFtLnNldF9sb2MobG9jKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDM7IGkrKykge1xyXG4gICAgICAgIHRlYW0uYWRkX2hlcm8obmV3IENfSGVybygpLnJhbmRvbV9tYWtlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZWFtO1xyXG59XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Yid44CA5pyf44CA6Kit44CA5a6aICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5mdW5jdGlvbiBpbml0KG9iajogSV9HbG9iYWxBcmd1bWVudHMpOiB2b2lkIHtcclxuICAgIGd2ID0gbmV3IENfR2xvYmFsVmFyKCk7XHJcbiAgICBnYSA9IG5ldyBDX0dsb2JhbEFyZ3VtZW50cyhvYmopO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vXHJcbi8vLy8vICAgICDjgq/jg6njgrnlrqPoqIBcclxuLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8g5aSn5Z+f5aSJ5pWw44Gu6Kit5a6aXHJcbmNsYXNzIENfR2xvYmFsVmFyIHtcclxuICAgIHB1YmxpYyBtZXM6IENfRHNwTWVzc2FnZTtcclxuXHJcbiAgICBwdWJsaWMgbWF6ZWluZm86IHtbbWF6ZV9uYW1lOiBzdHJpbmddOiBDX01hemVJbmZvfSA9IHt9O1xyXG4vLyAgICBwdWJsaWMgbWF6ZTogICAgIENfTWF6ZTtcclxuICAgIHB1YmxpYyB0ZWFtOiAgICAgQ19UZWFtO1xyXG4gICAgcHVibGljIGhlcm9lczogICBDX0hlcm9bXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBNYXplX3NpemVfeCAgICAgICA9IDIxO1xyXG4gICAgcHVibGljIE1hemVfc2l6ZV95ICAgICAgID0gMjE7XHJcbiAgICBwdWJsaWMgTGltaXRfb2Zfcm9vbSAgICAgPSA1O1xyXG4gICAgcHVibGljIE1heF9zaXplX29mX3Jvb20gID0gMztcclxuICAgIHB1YmxpYyBNYXhfb2ZfTWF6ZV9GbG9vciA9IDM7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubWVzID0gbmV3IENfRHNwTWVzc2FnZSggLyogaXNIVE1MID0gKi8gZmFsc2UpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXplaW5mbyA9IENfTWF6ZUluZm8uZ2V0X3RibF9hbGwoKTsgXHJcbiAgICAgICAgZm9yIChjb25zdCBtaSBvZiBtYXplaW5mbykgdGhpcy5tYXplaW5mb1ttaS5uYW1lXSA9IG1pOyBcclxuLypcclxuICAgICAgICBjb25zdCBbcnNsdCwgbWF6ZWluZm9dICA9IENfTWF6ZUluZm8uZ2V0X3RibF9hbGwoKTtcclxuICAgICAgICB0aGlzLm1hemVpbmZvID0gKHJzbHQgIT09IHVuZGVmaW5lZCkgPyBtYXplaW5mbyA6IFtdOyBcclxuKi9cclxuLypcclxuICAgICAgICB0aGlzLm1hemUgICAgICAgID0gbmV3IENfTWF6ZSgpLmNyZWF0ZV9tYWtlKHtcclxuICAgICAgICAgICAgc2l6ZV94OiAgICB0aGlzLk1hemVfc2l6ZV94LFxyXG4gICAgICAgICAgICBzaXplX3k6ICAgIHRoaXMuTWF6ZV9zaXplX3ksXHJcbiAgICAgICAgICAgIHNpemVfejogICAgdGhpcy5NYXhfb2ZfTWF6ZV9GbG9vciwgXHJcbiAgICAgICAgICAgIGZpbGxfa2luZDogVF9NektpbmQuRW1wdHksXHJcbiAgICAgICAgICAgIG1heF9yb29tOiAgdGhpcy5MaW1pdF9vZl9yb29tLFxyXG4gICAgICAgICAgICByb29tX3NpemU6IHRoaXMuTWF4X3NpemVfb2Zfcm9vbSxcclxuICAgIH0pO1xyXG4qL1xyXG4gICAgICAgIHRoaXMudGVhbSAgICAgICAgPSAgbmV3IENfVGVhbSh7bmFtZTogJ05ldyBUZWFtJywgeDoxLCB5OjEsIHo6MSwgZDpUX0RpcmVjdGlvbi5OfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBQT1NU5byV5pWw44Gu6Kit5a6aXHJcbmNsYXNzIENfR2xvYmFsQXJndW1lbnRzIHtcclxuICAgIHB1YmxpYyBtb2RlOiAgICAgIHN0cmluZztcclxuICAgIHB1YmxpYyBwaWQ6ICAgICAgIG51bWJlciAgID0gIDE7XHJcbiAgICBwdWJsaWMgbWF6ZV9uYW1lOiBzdHJpbmcgICA9ICcnO1xyXG5cclxuLypcclxuICAgIHB1YmxpYyB0ZWFtX0pTT046IHN0cmluZyAgID0gJyc7XHJcbiAgICBwdWJsaWMgbWF6ZV9KU09OOiBzdHJpbmcgICA9ICcnO1xyXG4qL1xyXG5cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob2JqOiBJX0dsb2JhbEFyZ3VtZW50cykge1xyXG4gICAgICAgIHRoaXMubW9kZSAgICAgID0gb2JqPy5tb2RlID8/ICd1bmtub3duJztcclxuICAgICAgICB0aGlzLnBpZCAgICAgICA9IG9iaj8ucGlkICAhPT0gdW5kZWZpbmVkICYmICFpc05hTihvYmoucGlkKSA/IE51bWJlcihvYmoucGlkKSA6IDE7XHJcbiAgICAgICAgdGhpcy5tYXplX25hbWUgPSBvYmo/Lm1hemVfbmFtZSA/PyAnJztcclxuLypcclxuICAgICAgICB0aGlzLnRlYW1fSlNPTiA9IG9iaj8udGVhbSAgICAgID8/ICcnO1xyXG4gICAgICAgIHRoaXMubWF6ZV9KU09OID0gb2JqPy5tYXplICAgICAgPz8gJyc7XHJcbiovXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW50ZXJmYWNlIH0gZnJvbSAncmVhZGxpbmUnO1xuaW1wb3J0IHtuZXdHdWxkLCBhbGxIcmVzfSBmcm9tICcuLi9saWIvX0pTT05fbWFpX2d1bGQnXG5pbXBvcnQgY3JlYXRlRXJyb3IgIGZyb20gJ2h0dHAtZXJyb3JzJztcblxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG52YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuLyogR0VUIHVzZXJzIGxpc3RpbmcuICovXG5yb3V0ZXIuZ2V0ICgnLycsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgbWFpR3VsZCcpO1xufSk7XG5cbnJvdXRlci5wb3N0KCcvbmV3R3VsZCcsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICB0cnkge1xuLy9kZWJ1ZyAgICBmb3IgKGNvbnN0IGtleSBpbiByZXEuYm9keSkgY29uc29sZS5lcnJvcihgcmVxLiR7a2V5fTogJHtyZXEuYm9keVtrZXldfWApO1xuXG4gICAgY29uc3QgcmV0ID0gbmV3R3VsZChyZXEuYm9keSk7XG4gICAgcmVzLnN0YXR1cygyMDApO1xuICAgIHJlcy5zZW5kKEpTT04uc3RyaW5naWZ5KHJldCwgbnVsbCwgXCJcXHRcIikpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhgbmV3R2FtZSBQT1NUIGVycm9yOiAke2Vycn1gKTtcbiAgICBuZXh0KGNyZWF0ZUVycm9yKDQwNikpO1xuICB9XG59KTtcbnJvdXRlci5nZXQgKCcvbmV3R3VsZCcsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgTmV3IEdhbWUgVG8gR3VsZCBvZiBtYWknKTtcbn0pO1xuXG5yb3V0ZXIucG9zdCgnL2FsbEhyZXMnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgdHJ5IHtcbi8vZGVidWcgICAgZm9yIChjb25zdCBrZXkgaW4gcmVxLmJvZHkpIGNvbnNvbGUuZXJyb3IoYHJlcS4ke2tleX06ICR7cmVxLmJvZHlba2V5XX1gKTtcblxuICAgIGNvbnN0IHJldCA9IGFsbEhyZXMocmVxLmJvZHkpO1xuICAgIHJlcy5zdGF0dXMoMjAwKTtcbiAgICByZXMuc2VuZChKU09OLnN0cmluZ2lmeShyZXQsIG51bGwsIFwiXFx0XCIpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coYG5ld0hyZXMgUE9TVCBlcnJvcjogJHtlcnJ9YCk7XG4gICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcbiAgfVxufSk7XG5cbnJvdXRlci5nZXQgKCcvYWxsSHJlcycsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIEdldHRpbmcgQWxsIEhyZXMgZGF0YSBvZiBtYWknKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcbiIsImltcG9ydCB7IGluZm8sIGxvYWQsIHNhdmUgfSBmcm9tICcuLi9saWIvX0pTT05fbWFpX2xkc3YnXG5pbXBvcnQgeyB0ZXN0IH0gICAgICAgICAgICAgZnJvbSAnLi4vbGliL19KU09OX21haV9sZHN2X3Rlc3QnXG5pbXBvcnQgY3JlYXRlRXJyb3IgICAgICAgICAgZnJvbSAnaHR0cC1lcnJvcnMnO1xuXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbnZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4vKiBHRVQgdXNlcnMgbGlzdGluZy4gKi9cbnJvdXRlci5nZXQgKCcvJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSBtYWlMb2FkU2F2ZScpO1xufSk7XG5cbi8qXG4qKiAgU2VuZCBTYXZlSW5mb1xuKi9cbnJvdXRlci5wb3N0KCcvX2luZm8nLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbi8vZGVidWcgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXEuYm9keSkgY29uc29sZS5lcnJvcihgcmVxLiR7a2V5fTogJHtyZXEuYm9keVtrZXldfWApO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcnNsdCA9IGF3YWl0IGluZm8ocmVxLmJvZHkpO1xuICAgIGlmIChyc2x0LmVjb2RlICE9PSAwKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGAqKiogZXJyb3I6ICR7cnNsdC5lY29kZX06ICR7cnNsdC5lbXNnfSAqKipgKTtcbiAgICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XG4gICAgfVxuICAgIHJlcy5zdGF0dXMoMjAwKTtcbiAgICByZXMuc2VuZChKU09OLnN0cmluZ2lmeShyc2x0LCBudWxsLCBcIlxcdFwiKSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGBMZFN2IGluZm8gUE9TVCBlcnJvcjogJHtlcnJ9YCk7XG4gICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcbiAgfVxufSk7XG5yb3V0ZXIuZ2V0ICgnL19pbmZvJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSBtYWlMZFN2IGluZm8nKTtcbn0pO1xuXG5cbi8qXG4qKiAgU2VuZCBMYW9kRGF0YVxuKi9cbnJvdXRlci5wb3N0KCcvX2xvYWQnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbi8vZGVidWcgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXEuYm9keSkgY29uc29sZS5lcnJvcihgcmVxLiR7a2V5fTogJHtyZXEuYm9keVtrZXldfWApO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcnNsdCA9IGF3YWl0IGxvYWQocmVxLmJvZHkpO1xuICAgIGlmIChyc2x0LmVjb2RlICE9PSAwKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGAqKiogZXJyb3I6ICR7cnNsdC5lY29kZX06ICR7cnNsdC5lbXNnfSAqKipgKTtcbiAgICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XG4gICAgfVxuICAgIHJlcy5zdGF0dXMoMjAwKTtcbiAgICByZXMuc2VuZChKU09OLnN0cmluZ2lmeShyc2x0LCBudWxsLCBcIlxcdFwiKSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGBMZFN2IGxvYWQgUE9TVCBlcnJvcjogJHtlcnJ9YCk7XG4gICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcbiAgfVxufSk7XG5yb3V0ZXIuZ2V0ICgnL19sb2FkJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSBtYWlMZFN2IGxvYWQnKTtcbn0pO1xuXG5cbi8qXG4qKiAgU2VuZCBTYXZlRGF0YVxuKi9cbnJvdXRlci5wb3N0KCcvX3NhdmUnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbi8vZGVidWcgICAgZm9yIChjb25zdCBrZXkgaW4gcmVxLmJvZHkpIGNvbnNvbGUuZXJyb3IoYHJlcS4ke2tleX06ICR7cmVxLmJvZHlba2V5XX1gKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHJzbHQgPSBhd2FpdCBzYXZlKHJlcS5ib2R5KTtcbiAgICBpZiAocnNsdC5lY29kZSAhPT0gMCkge1xuICAgICAgY29uc29sZS5lcnJvcihgKioqIGVycm9yOiAke3JzbHQuZWNvZGV9OiAke3JzbHQuZW1zZ30gKioqYCk7XG4gICAgICBuZXh0KGNyZWF0ZUVycm9yKDQwNikpO1xuICAgIH1cbiAgICByZXMuc3RhdHVzKDIwMCk7XG4gICAgcmVzLnNlbmQoSlNPTi5zdHJpbmdpZnkocnNsdCwgbnVsbCwgXCJcXHRcIikpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhgTGRTdiBzYXZlIFBPU1QgZXJyb3I6ICR7ZXJyfWApO1xuICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XG4gIH1cbn0pO1xucm91dGVyLmdldCAoJy9fc2F2ZScsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgbWFpTGRTdiBzYXZlJyk7XG59KTtcblxuXG5cbi8qXG4qKiBGb3IgVGVzdCBGdW5jdGlvblxuKi9cbnJvdXRlci5wb3N0KCcvdGVzdCcsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICB0cnkge1xuLy9kZWJ1ZyAgICBmb3IgKGNvbnN0IGtleSBpbiByZXEuYm9keSkgY29uc29sZS5lcnJvcihgcmVxLiR7a2V5fTogJHtyZXEuYm9keVtrZXldfWApO1xuXG4gICAgY29uc3QgcnNsdCA9IGF3YWl0IHRlc3QocmVxLmJvZHkpO1xuICAgIGlmIChyc2x0LmVjb2RlICE9PSAwKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGAqKiogZXJyb3I6ICR7cnNsdC5lY29kZX06ICR7cnNsdC5lbXNnfSAqKipgKTtcbiAgICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XG4gICAgfVxuXG4gICAgcmVzLnJlbmRlcigncGFnZXMvdGVzdCcsIHJzbHQpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGBuZXdMb2FkIFBPU1QgZXJyb3I6ICR7ZXJyfWApO1xuICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XG4gIH1cbn0pO1xucm91dGVyLmdldCAoJy90ZXN0JywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHRyeSB7XG4vL2RlYnVnICAgIGZvciAoY29uc3Qga2V5IGluIHJlcS5ib2R5KSBjb25zb2xlLmVycm9yKGByZXEuJHtrZXl9OiAke3JlcS5ib2R5W2tleV19YCk7XG5cbiAgICByZXMucmVuZGVyKCdwYWdlcy90ZXN0Jyx7cGlkOiAtMX0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhgbmV3TG9hZCBQT1NUIGVycm9yOiAke2Vycn1gKTtcbiAgICBuZXh0KGNyZWF0ZUVycm9yKDQwNikpO1xuICB9XG4vLyAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIExvYWQgVGVzdCAgb2YgbWFpJyk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG4iLCJpbXBvcnQgeyBhbGxNYXplLCBnZXRNYXplLCBuZXdNYXplIH0gIGZyb20gJy4uL2xpYi9fSlNPTl9tYWlfbWF6ZSc7XG5pbXBvcnQgY3JlYXRlRXJyb3IgIGZyb20gJ2h0dHAtZXJyb3JzJztcblxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG52YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuLyogR0VUIHVzZXJzIGxpc3RpbmcuICovXG5yb3V0ZXIuZ2V0ICgnLycsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgbWFpTWF6ZScpO1xufSk7XG5cbnJvdXRlci5wb3N0KCcvbmV3TWF6ZScsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICB0cnkge1xuLy9kZWJ1ZyAgICBmb3IgKGNvbnN0IGtleSBpbiByZXEuYm9keSkgY29uc29sZS5lcnJvcihgcmVxLiR7a2V5fTogJHtyZXEuYm9keVtrZXldfWApO1xuXG4gICAgY29uc3QgcmV0ID0gbmV3TWF6ZShyZXEuYm9keSk7XG4gICAgcmVzLnN0YXR1cygyMDApO1xuICAgIHJlcy5zZW5kKEpTT04uc3RyaW5naWZ5KHJldCwgbnVsbCwgXCJcXHRcIikpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhgbmV3R2FtZSBQT1NUIGVycm9yOiAke2Vycn1gKTtcbiAgICBuZXh0KGNyZWF0ZUVycm9yKDQwNikpO1xuICB9XG59KTtcblxucm91dGVyLmdldCAoJy9uZXdNYXplJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSBOZXcgR2FtZSBUbyBNYXplIG9mIG1haScpO1xufSk7XG5cbnJvdXRlci5wb3N0KCcvZ2V0TWF6ZScsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICB0cnkge1xuLy9kZWJ1ZyAgICBmb3IgKGNvbnN0IGtleSBpbiByZXEuYm9keSkgY29uc29sZS5lcnJvcihgcmVxLiR7a2V5fTogJHtyZXEuYm9keVtrZXldfWApO1xuXG4gICAgY29uc3QgcmV0ID0gZ2V0TWF6ZShyZXEuYm9keSk7XG4gICAgcmVzLnN0YXR1cygyMDApO1xuICAgIHJlcy5zZW5kKEpTT04uc3RyaW5naWZ5KHJldCwgbnVsbCwgXCJcXHRcIikpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhgbmV3TWF6ZSBQT1NUIGVycm9yOiAke2Vycn1gKTtcbiAgICBuZXh0KGNyZWF0ZUVycm9yKDQwNikpO1xuICB9XG59KTtcblxucm91dGVyLmdldCAoJy9nZXRNYXplJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggR2V0dGluZyBOZXcgTWF6ZSBkYXRhIG9mIG1haScpO1xufSk7XG5cblxucm91dGVyLnBvc3QoJy9hbGxNYXplJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHRyeSB7XG4vL2RlYnVnICAgIGZvciAoY29uc3Qga2V5IGluIHJlcS5ib2R5KSBjb25zb2xlLmVycm9yKGByZXEuJHtrZXl9OiAke3JlcS5ib2R5W2tleV19YCk7XG5cbiAgICBjb25zdCByZXQgPSBhbGxNYXplKHJlcS5ib2R5KTtcbiAgICByZXMuc3RhdHVzKDIwMCk7XG4gICAgcmVzLnNlbmQoSlNPTi5zdHJpbmdpZnkocmV0LCBudWxsLCBcIlxcdFwiKSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGBtYXplSW5mbyBQT1NUIGVycm9yOiAke2Vycn1gKTtcbiAgICBuZXh0KGNyZWF0ZUVycm9yKDQwNikpO1xuICB9XG59KTtcblxucm91dGVyLmdldCAoJy9hbGxNYXplJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggQWxsIE1hemUgSW5mb21hdGlvbiBvZiBtYWknKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuXG52YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbnZhciBtYWlHdWxkUm91dGVyID0gcmVxdWlyZSgnLi9tYWlHdWxkJyk7XG52YXIgbWFpTWF6ZVJvdXRlciA9IHJlcXVpcmUoJy4vbWFpTWF6ZScpO1xudmFyIG1haUxkU3ZSb3V0ZXIgPSByZXF1aXJlKCcuL21haUxkU3YnKTtcblxuLy8gcm91dGVyIHNldHVwXG5yb3V0ZXIudXNlKCcvZ3VsZCcsICAgbWFpR3VsZFJvdXRlcik7XG5yb3V0ZXIudXNlKCcvbWF6ZScsICAgbWFpTWF6ZVJvdXRlcik7XG5yb3V0ZXIudXNlKCcvbGRzdicsICAgbWFpTGRTdlJvdXRlcik7XG5cbi8qIEdFVCB1c2VycyBsaXN0aW5nLiAqL1xucm91dGVyLmdldCgnLycsIGZ1bmN0aW9uKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSB7XG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSBtYWlleCcpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG52YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuLyogR0VUIHVzZXJzIGxpc3RpbmcuICovXG5yb3V0ZXIuZ2V0KCcvJywgZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIHVzZXIgcmVzb3VyY2UnKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwLWVycm9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXlzcWwyL3Byb21pc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9