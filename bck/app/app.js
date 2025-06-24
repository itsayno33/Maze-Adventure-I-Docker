/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../maicl/src/d_mdl/C_Guild.ts":
/*!*************************************!*\
  !*** ../maicl/src/d_mdl/C_Guild.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Guild = void 0;
exports.alert_guld_info = alert_guld_info;
var C_Location_1 = __webpack_require__(/*! ./C_Location */ "../maicl/src/d_mdl/C_Location.ts");
var C_Hero_1 = __webpack_require__(/*! ./C_Hero */ "../maicl/src/d_mdl/C_Hero.ts");
var F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "../maicl/src/d_utl/F_Rand.ts");
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

/***/ "../maicl/src/d_mdl/C_Hero.ts":
/*!************************************!*\
  !*** ../maicl/src/d_mdl/C_Hero.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Hero = void 0;
exports.alert_hres_info = alert_hres_info;
exports.alert_hero_info = alert_hero_info;
var C_HeroAbility_1 = __webpack_require__(/*! ./C_HeroAbility */ "../maicl/src/d_mdl/C_HeroAbility.ts");
var F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "../maicl/src/d_utl/F_Rand.ts");
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

/***/ "../maicl/src/d_mdl/C_HeroAbility.ts":
/*!*******************************************!*\
  !*** ../maicl/src/d_mdl/C_HeroAbility.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_HeroAbility = void 0;
var F_Math_1 = __webpack_require__(/*! ../d_utl/F_Math */ "../maicl/src/d_utl/F_Math.ts");
var F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "../maicl/src/d_utl/F_Rand.ts");
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

/***/ "../maicl/src/d_mdl/C_Location.ts":
/*!****************************************!*\
  !*** ../maicl/src/d_mdl/C_Location.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Location = exports.T_Lckd = void 0;
var C_PointDir_1 = __webpack_require__(/*! ./C_PointDir */ "../maicl/src/d_mdl/C_PointDir.ts");
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

/***/ "../maicl/src/d_mdl/C_Maze.ts":
/*!************************************!*\
  !*** ../maicl/src/d_mdl/C_Maze.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Maze = void 0;
exports.alert_maze_info = alert_maze_info;
var T_MzKind_1 = __webpack_require__(/*! ./T_MzKind */ "../maicl/src/d_mdl/T_MzKind.ts");
var C_MazeCell_1 = __webpack_require__(/*! ./C_MazeCell */ "../maicl/src/d_mdl/C_MazeCell.ts");
var C_MazeObj_1 = __webpack_require__(/*! ./C_MazeObj */ "../maicl/src/d_mdl/C_MazeObj.ts");
var C_Point_1 = __webpack_require__(/*! ./C_Point */ "../maicl/src/d_mdl/C_Point.ts");
var C_Location_1 = __webpack_require__(/*! ./C_Location */ "../maicl/src/d_mdl/C_Location.ts");
var C_Range_1 = __webpack_require__(/*! ./C_Range */ "../maicl/src/d_mdl/C_Range.ts");
var F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "../maicl/src/d_utl/F_Rand.ts");
var F_Math_1 = __webpack_require__(/*! ../d_utl/F_Math */ "../maicl/src/d_utl/F_Math.ts");
var C_PointDir_1 = __webpack_require__(/*! ./C_PointDir */ "../maicl/src/d_mdl/C_PointDir.ts");
var T_Direction_1 = __webpack_require__(/*! ./T_Direction */ "../maicl/src/d_mdl/T_Direction.ts");
var C_PointSet2D_1 = __webpack_require__(/*! ./C_PointSet2D */ "../maicl/src/d_mdl/C_PointSet2D.ts");
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

/***/ "../maicl/src/d_mdl/C_MazeCell.ts":
/*!****************************************!*\
  !*** ../maicl/src/d_mdl/C_MazeCell.ts ***!
  \****************************************/
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
var T_MzKind_1 = __webpack_require__(/*! ./T_MzKind */ "../maicl/src/d_mdl/T_MzKind.ts");
var C_MazeObj_1 = __webpack_require__(/*! ./C_MazeObj */ "../maicl/src/d_mdl/C_MazeObj.ts");
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
            col_l: '', col_2: '',
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
            col_l: '', col_2: '',
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
            col_l: '', col_2: '',
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
            col_l: '#9999ff', col_2: '#6666ff',
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
            col_l: '#9999ff', col_2: '#66ffff',
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
            col_l: '#0000ff', col_2: '#00ee00',
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
            col_f: '', col_b: '', col_s: '', col_t: '', col_d: '#ffffcc',
            col_l: '#0000ff', col_2: '#ffffcc',
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
            col_f: '', col_b: '', col_s: '', col_t: '#ffffcc', col_d: '',
            col_l: '#0000ff', col_2: '#ffffcc',
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
            col_l: '#0000ff', col_2: '#ffffcc',
        };
        return _super.call(this, j) || this;
    }
    return C_MazeCellStrUD;
}(C_MazeCell));


/***/ }),

/***/ "../maicl/src/d_mdl/C_MazeInfo.ts":
/*!****************************************!*\
  !*** ../maicl/src/d_mdl/C_MazeInfo.ts ***!
  \****************************************/
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

/***/ "../maicl/src/d_mdl/C_MazeObj.ts":
/*!***************************************!*\
  !*** ../maicl/src/d_mdl/C_MazeObj.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_MazeObj = void 0;
var C_PointDir_1 = __webpack_require__(/*! ./C_PointDir */ "../maicl/src/d_mdl/C_PointDir.ts");
var F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "../maicl/src/d_utl/F_Rand.ts");
var C_MazeObjView_1 = __webpack_require__(/*! ./C_MazeObjView */ "../maicl/src/d_mdl/C_MazeObjView.ts");
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

/***/ "../maicl/src/d_mdl/C_MazeObjView.ts":
/*!*******************************************!*\
  !*** ../maicl/src/d_mdl/C_MazeObjView.ts ***!
  \*******************************************/
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
    C_MazeObjView.get_context3D = function () { return this === null || this === void 0 ? void 0 : this.con3D; };
    C_MazeObjView.set_context3D = function (con3D) { this.con3D = con3D; };
    C_MazeObjView.get_context2D = function () { return this === null || this === void 0 ? void 0 : this.con2D; };
    C_MazeObjView.set_context2D = function (con2D) { this.con2D = con2D; };
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
    };
    C_MazeObjView.prototype.layer = function () { return this.my_layer; };
    C_MazeObjView.prototype.set_layer = function (layer) { this.my_layer = layer; };
    C_MazeObjView.prototype.letter = function () { return this.my_letter; };
    C_MazeObjView.prototype.set_letter = function (letter) { return this.my_letter = letter; };
    C_MazeObjView.prototype.canShow = function () { return this.my_show; };
    ;
    C_MazeObjView.prototype.setShow = function (can_show) { return this.my_show = can_show; };
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
    C_MazeObjView.prototype.col_2 = function () { return this.my_col_2; };
    C_MazeObjView.prototype.set_col_2 = function (col_2) { return this.my_col_2 = col_2; };
    C_MazeObjView.prototype.drow2D = function (rect) {
        var _a, _b;
        drow2D_cell(rect, (_a = this.col_2()) !== null && _a !== void 0 ? _a : '#cccccc', (_b = this.col_l()) !== null && _b !== void 0 ? _b : '#9999ff');
    };
    C_MazeObjView.prototype.drow3D = function (frot, back) {
        this.drow3D_obj_back(frot, back);
        this.drow3D_obj_down(frot, back);
        this.drow3D_obj_top(frot, back);
        this.drow3D_obj_right_side(frot, back);
        this.drow3D_obj_left_side(frot, back);
        this.drow3D_obj_front(frot, back);
    };
    C_MazeObjView.prototype.drow3D_obj_down = function (frot, back) {
        var _a, _b;
        if (!this.canShow() || this.col_t() === null)
            return;
        if (this.pad_s() <= 0.0 && this.pad_t() >= 1.0) {
            drow3D_cell_floor(frot, back, (_a = this.col_t()) !== null && _a !== void 0 ? _a : '#6666ff', (_b = this.col_l()) !== null && _b !== void 0 ? _b : '#9999ff');
            return;
        }
        var o = __calc_padding_obj(this, frot, back);
        var rect = {
            tl: o.fdl,
            tr: o.fdr,
            dr: o.bdr,
            dl: o.bdl,
        };
        drow3D_cell(rect, this.col_t(), this.col_l());
    };
    C_MazeObjView.prototype.drow3D_obj_top = function (frot, back) {
        var _a, _b;
        if (!this.canShow() || this.col_d() === null)
            return;
        if (this.pad_s() <= 0.0 && this.pad_d() >= 1.0) {
            drow3D_cell_ceiling(frot, back, (_a = this.col_d()) !== null && _a !== void 0 ? _a : '#aaaaaa', (_b = this.col_l()) !== null && _b !== void 0 ? _b : '#9999ff');
            return;
        }
        var o = __calc_padding_obj(this, frot, back);
        var rect = {
            tl: o.ftl,
            tr: o.ftr,
            dr: o.btr,
            dl: o.btl,
        };
        drow3D_cell(rect, this.col_d(), this.col_l());
    };
    C_MazeObjView.prototype.drow3D_obj_front = function (frot, back) {
        if (!this.canShow() || this.col_f() === null)
            return;
        var o = __calc_padding_obj(this, frot, back);
        var rect = {
            tl: o.ftl,
            tr: o.ftr,
            dr: o.fdr,
            dl: o.fdl,
        };
        drow3D_cell(rect, this.col_f(), this.col_l());
    };
    C_MazeObjView.prototype.drow3D_obj_back = function (frot, back) {
        if (!this.canShow() || this.col_b() === null)
            return;
        var o = __calc_padding_obj(this, frot, back);
        var rect = {
            tl: o.btl,
            tr: o.btr,
            dr: o.bdr,
            dl: o.bdl,
        };
        drow3D_cell(rect, this.col_b(), this.col_l());
    };
    C_MazeObjView.prototype.drow3D_obj_left_side = function (frot, back) {
        if (!this.canShow() || this.col_s() === null)
            return;
        var o = __calc_padding_obj(this, frot, back);
        var rect = {
            tl: o.btl,
            tr: o.ftl,
            dr: o.fdl,
            dl: o.bdl,
        };
        drow3D_cell(rect, this.col_s(), this.col_l());
    };
    C_MazeObjView.prototype.drow3D_obj_right_side = function (frot, back) {
        if (!this.canShow() || this.col_s() === null)
            return;
        var o = __calc_padding_obj(this, frot, back);
        var rect = {
            tl: o.ftr,
            tr: o.btr,
            dr: o.bdr,
            dl: o.fdr,
        };
        drow3D_cell(rect, this.col_s(), this.col_l());
    };
    C_MazeObjView.prototype.encode = function () {
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
function drow3D_cell_floor(rect_frot, rect_back, fill, line) {
    if (fill === void 0) { fill = '#6666ff'; }
    if (line === void 0) { line = '#9999ff'; }
    var rect = {
        tl: { x: rect_frot.min_x, y: rect_frot.max_y },
        tr: { x: rect_frot.max_x, y: rect_frot.max_y },
        dr: { x: rect_back.max_x, y: rect_back.max_y },
        dl: { x: rect_back.min_x, y: rect_back.max_y }
    };
    drow3D_cell(rect, fill, line);
}
function drow3D_cell_ceiling(rect_frot, rect_back, fill, line) {
    if (fill === void 0) { fill = '#aaaaaa'; }
    if (line === void 0) { line = '#9999ff'; }
    var rect = {
        tl: { x: rect_frot.min_x, y: rect_frot.min_y },
        tr: { x: rect_frot.max_x, y: rect_frot.min_y },
        dr: { x: rect_back.max_x, y: rect_back.min_y },
        dl: { x: rect_back.min_x, y: rect_back.min_y }
    };
    drow3D_cell(rect, fill, line);
}
function drow2D_cell(r, fill, line) {
    var con = C_MazeObjView.get_context2D();
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
    var con = C_MazeObjView.get_context3D();
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

/***/ "../maicl/src/d_mdl/C_MovablePoint.ts":
/*!********************************************!*\
  !*** ../maicl/src/d_mdl/C_MovablePoint.ts ***!
  \********************************************/
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
var C_Location_1 = __webpack_require__(/*! ./C_Location */ "../maicl/src/d_mdl/C_Location.ts");
var F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "../maicl/src/d_utl/F_Rand.ts");
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

/***/ "../maicl/src/d_mdl/C_Point.ts":
/*!*************************************!*\
  !*** ../maicl/src/d_mdl/C_Point.ts ***!
  \*************************************/
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

/***/ "../maicl/src/d_mdl/C_PointDir.ts":
/*!****************************************!*\
  !*** ../maicl/src/d_mdl/C_PointDir.ts ***!
  \****************************************/
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
var C_Point_1 = __webpack_require__(/*! ./C_Point */ "../maicl/src/d_mdl/C_Point.ts");
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

/***/ "../maicl/src/d_mdl/C_PointSet2D.ts":
/*!******************************************!*\
  !*** ../maicl/src/d_mdl/C_PointSet2D.ts ***!
  \******************************************/
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

/***/ "../maicl/src/d_mdl/C_Range.ts":
/*!*************************************!*\
  !*** ../maicl/src/d_mdl/C_Range.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Range = void 0;
var F_Math_1 = __webpack_require__(/*! ../d_utl/F_Math */ "../maicl/src/d_utl/F_Math.ts");
var C_Point_1 = __webpack_require__(/*! ./C_Point */ "../maicl/src/d_mdl/C_Point.ts");
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

/***/ "../maicl/src/d_mdl/C_SaveData.ts":
/*!****************************************!*\
  !*** ../maicl/src/d_mdl/C_SaveData.ts ***!
  \****************************************/
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
var C_Maze_1 = __webpack_require__(/*! ./C_Maze */ "../maicl/src/d_mdl/C_Maze.ts");
var C_Guild_1 = __webpack_require__(/*! ./C_Guild */ "../maicl/src/d_mdl/C_Guild.ts");
var C_MovablePoint_1 = __webpack_require__(/*! ./C_MovablePoint */ "../maicl/src/d_mdl/C_MovablePoint.ts");
var C_Team_1 = __webpack_require__(/*! ./C_Team */ "../maicl/src/d_mdl/C_Team.ts");
var C_SaveInfo_1 = __webpack_require__(/*! ./C_SaveInfo */ "../maicl/src/d_mdl/C_SaveInfo.ts");
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

/***/ "../maicl/src/d_mdl/C_SaveInfo.ts":
/*!****************************************!*\
  !*** ../maicl/src/d_mdl/C_SaveInfo.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_SaveInfo = void 0;
exports.alert_saveinfo_info = alert_saveinfo_info;
var C_MovablePoint_1 = __webpack_require__(/*! ./C_MovablePoint */ "../maicl/src/d_mdl/C_MovablePoint.ts");
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

/***/ "../maicl/src/d_mdl/C_Team.ts":
/*!************************************!*\
  !*** ../maicl/src/d_mdl/C_Team.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Team = void 0;
exports.alert_team_info = alert_team_info;
var C_Walker_1 = __webpack_require__(/*! ./C_Walker */ "../maicl/src/d_mdl/C_Walker.ts");
var C_Hero_1 = __webpack_require__(/*! ./C_Hero */ "../maicl/src/d_mdl/C_Hero.ts");
var C_TeamView_1 = __webpack_require__(/*! ./C_TeamView */ "../maicl/src/d_mdl/C_TeamView.ts");
var F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "../maicl/src/d_utl/F_Rand.ts");
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

/***/ "../maicl/src/d_mdl/C_TeamView.ts":
/*!****************************************!*\
  !*** ../maicl/src/d_mdl/C_TeamView.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_CurrentTeamView = void 0;
var C_PointDir_1 = __webpack_require__(/*! ./C_PointDir */ "../maicl/src/d_mdl/C_PointDir.ts");
var C_Team_1 = __webpack_require__(/*! ./C_Team */ "../maicl/src/d_mdl/C_Team.ts");
var C_MazeObjView_1 = __webpack_require__(/*! ./C_MazeObjView */ "../maicl/src/d_mdl/C_MazeObjView.ts");
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
    C_CurrentTeamView.prototype.pad_t = function () { return 0.0; };
    C_CurrentTeamView.prototype.pad_d = function () { return 0.0; };
    C_CurrentTeamView.prototype.pad_s = function () { return 0.0; };
    C_CurrentTeamView.prototype.col_f = function () { return null; };
    C_CurrentTeamView.prototype.col_b = function () { return null; };
    C_CurrentTeamView.prototype.col_s = function () { return null; };
    C_CurrentTeamView.prototype.col_t = function () { return null; };
    C_CurrentTeamView.prototype.col_d = function () { return null; };
    C_CurrentTeamView.prototype.col_l = function () { return null; };
    C_CurrentTeamView.prototype.col_2 = function () { return null; };
    C_CurrentTeamView.prototype.drow3D = function (frot, back) { };
    C_CurrentTeamView.prototype.drow2D = function (r) {
        var con = C_MazeObjView_1.C_MazeObjView.get_context2D();
        if (con === undefined)
            return;
        con.beginPath();
        con.moveTo(r.tl.x, r.tl.y);
        con.lineTo(r.tr.x, r.tr.y);
        con.lineTo(r.dr.x, r.dr.y);
        con.lineTo(r.dl.x, r.dl.y);
        con.closePath();
        con.fillStyle = "#ff0000";
        con.fill();
        con.strokeStyle = "#ff9999";
        con.lineWidth = 3;
        con.stroke();
    };
    C_CurrentTeamView.prototype.encode = function () { return { cname: 'CurrentTeamView' }; };
    C_CurrentTeamView.prototype.decode = function (j) { return this; };
    return C_CurrentTeamView;
}());
exports.C_CurrentTeamView = C_CurrentTeamView;


/***/ }),

/***/ "../maicl/src/d_mdl/C_Walker.ts":
/*!**************************************!*\
  !*** ../maicl/src/d_mdl/C_Walker.ts ***!
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
exports.C_Walker = void 0;
var C_PointDir_1 = __webpack_require__(/*! ./C_PointDir */ "../maicl/src/d_mdl/C_PointDir.ts");
var C_MovablePoint_1 = __webpack_require__(/*! ./C_MovablePoint */ "../maicl/src/d_mdl/C_MovablePoint.ts");
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

/***/ "../maicl/src/d_mdl/T_Direction.ts":
/*!*****************************************!*\
  !*** ../maicl/src/d_mdl/T_Direction.ts ***!
  \*****************************************/
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

/***/ "../maicl/src/d_mdl/T_MzKind.ts":
/*!**************************************!*\
  !*** ../maicl/src/d_mdl/T_MzKind.ts ***!
  \**************************************/
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

/***/ "../maicl/src/d_rdb/C_GuildRDB.ts":
/*!****************************************!*\
  !*** ../maicl/src/d_rdb/C_GuildRDB.ts ***!
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_GuildRDB = void 0;
var C_Guild_1 = __webpack_require__(/*! ../d_mdl/C_Guild */ "../maicl/src/d_mdl/C_Guild.ts");
var C_HeroRDB_1 = __webpack_require__(/*! ./C_HeroRDB */ "../maicl/src/d_rdb/C_HeroRDB.ts");
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

/***/ "../maicl/src/d_rdb/C_HeroRDB.ts":
/*!***************************************!*\
  !*** ../maicl/src/d_rdb/C_HeroRDB.ts ***!
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
var C_Hero_1 = __webpack_require__(/*! ../d_mdl/C_Hero */ "../maicl/src/d_mdl/C_Hero.ts");
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

/***/ "../maicl/src/d_rdb/C_MazeRDB.ts":
/*!***************************************!*\
  !*** ../maicl/src/d_rdb/C_MazeRDB.ts ***!
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
var C_Maze_1 = __webpack_require__(/*! ../d_mdl/C_Maze */ "../maicl/src/d_mdl/C_Maze.ts");
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

/***/ "../maicl/src/d_rdb/C_MvptRDB.ts":
/*!***************************************!*\
  !*** ../maicl/src/d_rdb/C_MvptRDB.ts ***!
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
var C_MovablePoint_1 = __webpack_require__(/*! ../d_mdl/C_MovablePoint */ "../maicl/src/d_mdl/C_MovablePoint.ts");
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

/***/ "../maicl/src/d_rdb/C_SaveDataRDB.ts":
/*!*******************************************!*\
  !*** ../maicl/src/d_rdb/C_SaveDataRDB.ts ***!
  \*******************************************/
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
var C_SaveData_1 = __webpack_require__(/*! ../d_mdl/C_SaveData */ "../maicl/src/d_mdl/C_SaveData.ts");
var C_SaveInfo_1 = __webpack_require__(/*! ../d_mdl/C_SaveInfo */ "../maicl/src/d_mdl/C_SaveInfo.ts");
var C_MovablePoint_1 = __webpack_require__(/*! ../d_mdl/C_MovablePoint */ "../maicl/src/d_mdl/C_MovablePoint.ts");
var C_TeamRDB_1 = __webpack_require__(/*! ./C_TeamRDB */ "../maicl/src/d_rdb/C_TeamRDB.ts");
var C_HeroRDB_1 = __webpack_require__(/*! ./C_HeroRDB */ "../maicl/src/d_rdb/C_HeroRDB.ts");
var C_MazeRDB_1 = __webpack_require__(/*! ./C_MazeRDB */ "../maicl/src/d_rdb/C_MazeRDB.ts");
var C_GuildRDB_1 = __webpack_require__(/*! ./C_GuildRDB */ "../maicl/src/d_rdb/C_GuildRDB.ts");
var C_MvptRDB_1 = __webpack_require__(/*! ./C_MvptRDB */ "../maicl/src/d_rdb/C_MvptRDB.ts");
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

/***/ "../maicl/src/d_rdb/C_TeamRDB.ts":
/*!***************************************!*\
  !*** ../maicl/src/d_rdb/C_TeamRDB.ts ***!
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
var C_Team_1 = __webpack_require__(/*! ../d_mdl/C_Team */ "../maicl/src/d_mdl/C_Team.ts");
var C_HeroRDB_1 = __webpack_require__(/*! ./C_HeroRDB */ "../maicl/src/d_rdb/C_HeroRDB.ts");
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

/***/ "../maicl/src/d_utl/C_DspMessage.ts":
/*!******************************************!*\
  !*** ../maicl/src/d_utl/C_DspMessage.ts ***!
  \******************************************/
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

/***/ "../maicl/src/d_utl/F_Math.ts":
/*!************************************!*\
  !*** ../maicl/src/d_utl/F_Math.ts ***!
  \************************************/
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

/***/ "../maicl/src/d_utl/F_Rand.ts":
/*!************************************!*\
  !*** ../maicl/src/d_utl/F_Rand.ts ***!
  \************************************/
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
var F_Math_1 = __webpack_require__(/*! ./F_Math */ "../maicl/src/d_utl/F_Math.ts");
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
var C_DspMessage_1 = __webpack_require__(/*! ../../../maicl/src/d_utl/C_DspMessage */ "../maicl/src/d_utl/C_DspMessage.ts");
// 位置と方向を表すクラス
var C_PointDir_1 = __webpack_require__(/*! ../../../maicl/src/d_mdl/C_PointDir */ "../maicl/src/d_mdl/C_PointDir.ts");
// 滞在位置を示すクラス
var C_MovablePoint_1 = __webpack_require__(/*! ../../../maicl/src/d_mdl/C_MovablePoint */ "../maicl/src/d_mdl/C_MovablePoint.ts");
// ギルドクラス全般
var C_Guild_1 = __webpack_require__(/*! ../../../maicl/src/d_mdl/C_Guild */ "../maicl/src/d_mdl/C_Guild.ts");
// パーティークラス全般
var C_Team_1 = __webpack_require__(/*! ../../../maicl/src/d_mdl/C_Team */ "../maicl/src/d_mdl/C_Team.ts");
// ヒーロークラス全般
var C_Hero_1 = __webpack_require__(/*! ../../../maicl/src/d_mdl/C_Hero */ "../maicl/src/d_mdl/C_Hero.ts");
// セーブデータ(クライアントとの連携)全般
var C_SaveData_1 = __webpack_require__(/*! ../../../maicl/src/d_mdl/C_SaveData */ "../maicl/src/d_mdl/C_SaveData.ts");
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
var C_DspMessage_1 = __webpack_require__(/*! ../../../maicl/src/d_utl/C_DspMessage */ "../maicl/src/d_utl/C_DspMessage.ts");
// MySqlを扱うクラス
var promise_1 = __importDefault(__webpack_require__(/*! mysql2/promise */ "mysql2/promise"));
var C_SaveData_1 = __webpack_require__(/*! ../../../maicl/src/d_mdl/C_SaveData */ "../maicl/src/d_mdl/C_SaveData.ts");
var C_SaveDataRDB_1 = __webpack_require__(/*! ../../../maicl/src/d_rdb/C_SaveDataRDB */ "../maicl/src/d_rdb/C_SaveDataRDB.ts");
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
var C_DspMessage_1 = __webpack_require__(/*! ../../../maicl/src/d_utl/C_DspMessage */ "../maicl/src/d_utl/C_DspMessage.ts");
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
var C_DspMessage_1 = __webpack_require__(/*! ../../../maicl/src/d_utl/C_DspMessage */ "../maicl/src/d_utl/C_DspMessage.ts");
// 方向を表すクラス
var C_PointDir_1 = __webpack_require__(/*! ../../../maicl/src/d_mdl/C_PointDir */ "../maicl/src/d_mdl/C_PointDir.ts");
// 位置・経路を表すクラス全般
var C_MovablePoint_1 = __webpack_require__(/*! ../../../maicl/src/d_mdl/C_MovablePoint */ "../maicl/src/d_mdl/C_MovablePoint.ts");
// MAZE関係クラス全般
var C_Maze_1 = __webpack_require__(/*! ../../../maicl/src/d_mdl/C_Maze */ "../maicl/src/d_mdl/C_Maze.ts");
var C_MazeInfo_1 = __webpack_require__(/*! ../../../maicl/src/d_mdl/C_MazeInfo */ "../maicl/src/d_mdl/C_MazeInfo.ts"); // Maze作成のテンプレート情報
// パーティークラス全般
var C_Team_1 = __webpack_require__(/*! ../../../maicl/src/d_mdl/C_Team */ "../maicl/src/d_mdl/C_Team.ts");
// ヒーロークラス全般
var C_Hero_1 = __webpack_require__(/*! ../../../maicl/src/d_mdl/C_Hero */ "../maicl/src/d_mdl/C_Hero.ts");
// セーブデータ(クライアントとの連携)全般
var C_SaveData_1 = __webpack_require__(/*! ../../../maicl/src/d_mdl/C_SaveData */ "../maicl/src/d_mdl/C_SaveData.ts");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDbEYsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU0sRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU0sRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU0sRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU0sRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU0sRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU0sRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFB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SUFDUywrQkFBWSxHQUF0QixVQUF1QixRQUFnQixFQUFFLFFBQWdCO1FBQ3JELElBQU0sQ0FBQyxHQUFHLElBQUksdUJBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDakIsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNyQixLQUFLLHdCQUFXLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQztvQkFBQSxNQUFNO2dCQUMxQyxLQUFLLHdCQUFXLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQztvQkFBQSxNQUFNO2dCQUMxQyxLQUFLLHdCQUFXLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQztvQkFBQSxNQUFNO2dCQUMxQyxLQUFLLHdCQUFXLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQztvQkFBQSxNQUFNO1lBQzlDLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDakIsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNyQixLQUFLLHdCQUFXLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQztvQkFBQSxNQUFNO2dCQUMxQyxLQUFLLHdCQUFXLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQztvQkFBQSxNQUFNO2dCQUMxQyxLQUFLLHdCQUFXLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQztvQkFBQSxNQUFNO2dCQUMxQyxLQUFLLHdCQUFXLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQztvQkFBQSxNQUFNO1lBQzlDLENBQUM7UUFDTCxDQUFDO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ00sNkJBQVUsR0FBakIsVUFBa0IsS0FBYSxFQUFFLEtBQVksRUFBRSxFQUFjO1FBQWQsMkJBQWM7UUFDekQsSUFBSSxRQUFRLEdBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDL0IsSUFBSSxRQUFRLEdBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDL0IsSUFBSSxRQUFRLEdBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3BDLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNyQixLQUFLLHdCQUFXLENBQUMsQ0FBQztnQkFDZCxRQUFRLElBQUksS0FBSyxDQUFDO2dCQUNsQixRQUFRLElBQUksS0FBSyxDQUFDO2dCQUNsQixNQUFNO1lBQ1YsS0FBSyx3QkFBVyxDQUFDLENBQUM7Z0JBQ2QsUUFBUSxJQUFJLEtBQUssQ0FBQztnQkFDbEIsUUFBUSxJQUFJLEtBQUssQ0FBQztnQkFDbEIsTUFBTTtZQUNWLEtBQUssd0JBQVcsQ0FBQyxDQUFDO2dCQUNkLFFBQVEsSUFBSSxLQUFLLENBQUM7Z0JBQ2xCLFFBQVEsSUFBSSxLQUFLLENBQUM7Z0JBQ2xCLE1BQU07WUFDVixLQUFLLHdCQUFXLENBQUMsQ0FBQztnQkFDZCxRQUFRLElBQUksS0FBSyxDQUFDO2dCQUNsQixRQUFRLElBQUksS0FBSyxDQUFDO2dCQUNsQixNQUFNO1FBQ2QsQ0FBQztRQUNELE9BQU8sSUFBSSx1QkFBVSxDQUFDLEVBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBQ00seUJBQU0sR0FBYjtRQUNJLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNyQixLQUFLLHdCQUFXLENBQUMsQ0FBQztnQkFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyx3QkFBVyxDQUFDLENBQUMsQ0FBQztnQkFBQSxNQUFNO1lBQ3pELEtBQUssd0JBQVcsQ0FBQyxDQUFDO2dCQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLHdCQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUFBLE1BQU07WUFDekQsS0FBSyx3QkFBVyxDQUFDLENBQUM7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsd0JBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQUEsTUFBTTtZQUN6RCxLQUFLLHdCQUFXLENBQUMsQ0FBQztnQkFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyx3QkFBVyxDQUFDLENBQUMsQ0FBQztnQkFBQSxNQUFNO1FBQzdELENBQUM7SUFDTCxDQUFDO0lBQ00seUJBQU0sR0FBYjtRQUNJLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNyQixLQUFLLHdCQUFXLENBQUMsQ0FBQztnQkFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyx3QkFBVyxDQUFDLENBQUMsQ0FBQztnQkFBQSxNQUFNO1lBQ3pELEtBQUssd0JBQVcsQ0FBQyxDQUFDO2dCQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLHdCQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUFBLE1BQU07WUFDekQsS0FBSyx3QkFBVyxDQUFDLENBQUM7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsd0JBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQUEsTUFBTTtZQUN6RCxLQUFLLHdCQUFXLENBQUMsQ0FBQztnQkFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyx3QkFBVyxDQUFDLENBQUMsQ0FBQztnQkFBQSxNQUFNO1FBQzdELENBQUM7SUFDTCxDQUFDO0lBQ00seUJBQU0sR0FBYjtRQUNJLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNyQixLQUFLLHdCQUFXLENBQUMsQ0FBQztnQkFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyx3QkFBVyxDQUFDLENBQUMsQ0FBQztnQkFBQSxNQUFNO1lBQ3pELEtBQUssd0JBQVcsQ0FBQyxDQUFDO2dCQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLHdCQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUFBLE1BQU07WUFDekQsS0FBSyx3QkFBVyxDQUFDLENBQUM7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsd0JBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQUEsTUFBTTtZQUN6RCxLQUFLLHdCQUFXLENBQUMsQ0FBQztnQkFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyx3QkFBVyxDQUFDLENBQUMsQ0FBQztnQkFBQSxNQUFNO1FBQzdELENBQUM7SUFDTCxDQUFDO0lBQ00seUJBQU0sR0FBYjtRQUNJLElBQU0sQ0FBQyxHQUFHLGdCQUFLLENBQUMsTUFBTSxXQUFpQixDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNNLHlCQUFNLEdBQWIsVUFBYyxDQUFjO1FBQ3hCLElBQUksQ0FBQyxLQUFLLFNBQVM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUNqQyxnQkFBSyxDQUFDLE1BQU0sWUFBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQ0F4TzZCLCtCQUFjLEdBd08zQztBQXhPWSw0QkFBUTs7Ozs7Ozs7Ozs7QUNYUjs7O0FBSUEsbUJBQVcsR0FBRztJQUN2QixDQUFDLEVBQUksQ0FBQztJQUNOLENBQUMsRUFBSSxDQUFDO0lBQ04sQ0FBQyxFQUFJLENBQUM7SUFDTixDQUFDLEVBQUksQ0FBQztJQUNOLENBQUMsRUFBRyxFQUFFO0lBQ04sR0FBRyxFQUFFLENBQUM7Q0FDQSxDQUFDO0FBR0Esc0JBQWMsR0FBRztJQUN4QixDQUFDLEVBQUcsR0FBRztJQUNQLENBQUMsRUFBRyxHQUFHO0lBQ1AsQ0FBQyxFQUFHLEdBQUc7SUFDUCxDQUFDLEVBQUcsR0FBRztJQUNQLEVBQUUsRUFBRSxHQUFHO0NBQ1Y7Ozs7Ozs7Ozs7O0FDcEJZOzs7QUFNVCx1QkFBdUI7QUFDdkIsZ0JBQWdCO0FBQ2hCLFdBQVc7QUFDWCxhQUFhO0FBQ2IsWUFBWTtBQUNaLGNBQWM7QUFDZCxjQUFjO0FBQ2QsbUJBQW1CO0FBQ25CLEdBQUc7QUFDSCw2REFBNkQ7QUFDN0QscUVBQXFFO0FBQ3JFLHNFQUFzRTtBQUN0RSxvRUFBb0U7QUFFdkQsZ0JBQVEsR0FBNEI7SUFDN0MsS0FBSyxFQUFJLENBQUM7SUFDVixLQUFLLEVBQUksQ0FBQztJQUNWLEtBQUssRUFBSSxDQUFDO0lBQ1YsS0FBSyxFQUFJLENBQUM7SUFDVixLQUFLLEVBQUksQ0FBQztJQUNWLEtBQUssRUFBSSxDQUFDO0lBQ1YsS0FBSyxFQUFJLENBQUM7SUFDVixLQUFLLEVBQUksQ0FBQztJQUNWLEtBQUssRUFBRSxHQUFHO0NBQ0osQ0FBQztBQUdFLGtCQUFVLEdBQThCO0lBQ2pELENBQUMsRUFBSSxnQkFBUSxDQUFDLEtBQUs7SUFDbkIsQ0FBQyxFQUFJLGdCQUFRLENBQUMsS0FBSztJQUNuQixDQUFDLEVBQUksZ0JBQVEsQ0FBQyxLQUFLO0lBQ25CLENBQUMsRUFBSSxnQkFBUSxDQUFDLEtBQUs7SUFDbkIsQ0FBQyxFQUFJLGdCQUFRLENBQUMsS0FBSztJQUNuQixDQUFDLEVBQUksZ0JBQVEsQ0FBQyxLQUFLO0lBQ25CLENBQUMsRUFBSSxnQkFBUSxDQUFDLEtBQUs7SUFDbkIsQ0FBQyxFQUFJLGdCQUFRLENBQUMsS0FBSztJQUNuQixHQUFHLEVBQUUsZ0JBQVEsQ0FBQyxLQUFLO0NBQ2IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q2YsNkZBQXVEO0FBQ3ZELDRGQUFrRDtBQWVsRDtJQUNJO0lBQXNCLENBQUM7SUFFSCwyQkFBZ0IsR0FBcEMsVUFBcUMsTUFBa0IsRUFBRSxHQUFpQixFQUFFLE9BQWU7Ozs7OzRCQUNwRSxxQkFBTSxVQUFVLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUM7O3dCQUFwRSxVQUFVLEdBQUcsU0FBdUQ7d0JBQzFFLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7NEJBQ2Ysc0JBQU8sRUFBRSxFQUFDO3dCQUNkLENBQUM7OEJBRTRCLEVBQVYseUJBQVU7Ozs2QkFBVix5QkFBVTt3QkFBbEIsSUFBSTt3QkFDUyxxQkFBTSxxQkFBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7d0JBQWhGLFVBQVUsR0FBSSxTQUFrRTt3QkFDdEYsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxFQUFFLEVBQUM7d0JBQ2QsQ0FBQzt3QkFDRCxXQUE2QixFQUFWLHlCQUFVLEVBQVYsd0JBQVUsRUFBVixJQUFVOzRCQUFsQixJQUFJOzRCQUFnQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUFBOzs7d0JBTHBDLElBQVU7OzRCQVE3QixzQkFBTyxVQUFVLEVBQUM7Ozs7S0FDckI7SUFHbUIscUJBQVUsR0FBOUIsVUFBK0IsTUFBa0IsRUFBRSxHQUFpQixFQUFFLE9BQWUsRUFBRSxJQUFhOzs7Ozs0QkFDaEYscUJBQU0sVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUM7O3dCQUE5RCxPQUFPLEdBQUcsU0FBb0Q7d0JBQ3BFLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7NEJBQ2Ysc0JBQU8sS0FBSyxFQUFDO3dCQUNqQixDQUFDOzhCQUM2QixFQUFYLFNBQUksQ0FBQyxJQUFJLEVBQUU7Ozs2QkFBWCxlQUFXO3dCQUFuQixJQUFJO3dCQUNYLHFCQUFNLHFCQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUM7O3dCQUFsRSxTQUFrRSxDQUFDO3dCQUNuRSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEtBQUssRUFBQzt3QkFDakIsQ0FBQzs7O3dCQUpjLElBQVc7OzRCQU05QixzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDZjtJQUdtQixxQkFBVSxHQUE5QixVQUErQixNQUFrQixFQUFFLEdBQWlCLEVBQUUsT0FBZSxFQUFFLFFBQWdCOzs7OzRCQUNuRyxxQkFBTSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7O3dCQUExRCxTQUEwRCxDQUFDO3dCQUMzRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEtBQUssRUFBQzt3QkFDakIsQ0FBQzt3QkFDRCxxQkFBTSxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDOzt3QkFBOUMsU0FBOEMsQ0FBQzt3QkFDL0MsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxLQUFLLEVBQUM7d0JBQ2pCLENBQUM7d0JBQ0Qsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2Y7SUFJRCxxQ0FBcUM7SUFDckMsb0JBQW9CO0lBQ3BCLEdBQUc7SUFDb0IsMkJBQWdCLEdBQXZDLFVBQ0ksTUFBbUIsRUFDbkIsR0FBcUIsRUFDckIsT0FBZTs7Ozs7O3dCQUVULFlBQVksR0FBRyx5SUFJcEI7d0JBQ3lCLHFCQUFNLE1BQU0sQ0FBQyxLQUFLLENBQWUsWUFBWSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2lDQUMzRixLQUFLLENBQUMsYUFBRztnQ0FDTixHQUFHLENBQUMsZUFBZSxDQUFDLG9DQUFjLFlBQVksQ0FBRSxDQUFDLENBQUM7Z0NBQ2xELE9BQU8sRUFBRSxDQUFDOzRCQUNkLENBQUMsQ0FBQzs7d0JBSkssZUFBZSxHQUFJLFVBSXhCLElBSm9CO3dCQU10QixJQUFJLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7NEJBQzdCLHNCQUFPLEVBQUUsRUFBQzt3QkFDZCxDQUFDO3dCQUNLLFVBQVUsR0FBRyxFQUFlLENBQUM7d0JBQ25DLFdBQWdDLEVBQWYsbUNBQWUsRUFBZiw2QkFBZSxFQUFmLElBQWUsRUFBRSxDQUFDOzRCQUF4QixFQUFFOzRCQUNULFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzFFLENBQUM7d0JBQ0Qsc0JBQU8sVUFBVSxFQUFDOzs7O0tBQ3JCO0lBRUQsb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCxHQUFHO0lBQ29CLGtCQUFPLEdBQTlCLFVBQ0ksTUFBbUIsRUFDbkIsR0FBcUIsRUFDckIsT0FBZSxFQUNmLElBQWdCOzs7Ozs7d0JBR1YsZUFBZSxHQUFFLHdKQUd0Qjt3QkFDSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUN4QixxQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRTtnQ0FDaEMsT0FBTyxFQUFHLE9BQU87Z0NBQ2pCLE9BQU8sRUFBRyxDQUFDLENBQUMsT0FBTztnQ0FDbkIsSUFBSSxFQUFNLENBQUMsQ0FBQyxJQUFJO2dDQUNoQixJQUFJLEVBQU0sQ0FBQyxDQUFDLElBQUk7Z0NBQzVCLGdEQUFnRDs2QkFDdkMsQ0FBQztpQ0FDRCxLQUFLLENBQUMsYUFBRztnQ0FDTixHQUFHLENBQUMsZUFBZSxDQUFDLG9DQUFjLGVBQWUsQ0FBRSxDQUFDLENBQUM7Z0NBQ3JELE9BQU8sRUFBRSxDQUFDOzRCQUNkLENBQUMsQ0FBQzs7d0JBVkYsU0FVRSxDQUFDO3dCQUNILHNCQUFPLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFDOzs7O0tBQzdDO0lBRUQsMENBQTBDO0lBQ25CLHFCQUFVLEdBQWpDLFVBQWtDLE1BQWtCLEVBQUUsR0FBaUI7Ozs7Ozt3QkFDN0QsY0FBYyxHQUFFLHNFQUVyQjt3QkFDbUIscUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBaUIsY0FBYyxDQUFDO2lDQUNyRSxLQUFLLENBQUUsVUFBQyxHQUFHO2dDQUNSLEdBQUcsQ0FBQyxlQUFlLENBQUMscUNBQWUsY0FBYyxNQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0NBQzVELE9BQU8sRUFBRSxDQUFDOzRCQUNkLENBQUMsQ0FBQzs7d0JBSkssU0FBUyxHQUFJLFVBSWxCLElBSmM7d0JBS2hCLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDOzRCQUFFLHNCQUFPLENBQUMsQ0FBQyxFQUFDO3dCQUNwQyxzQkFBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDOzs7O0tBQzFCO0lBR0QsMENBQTBDO0lBQzFDLEdBQUc7SUFDaUIsa0JBQU8sR0FBM0IsVUFBNEIsTUFBa0IsRUFBRSxHQUFpQixFQUFFLE9BQWU7Ozs7Ozt3QkFDeEUsZUFBZSxHQUFHLHNGQUd2Qjt3QkFDRCxxQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQztpQ0FDckQsS0FBSyxDQUFFLFVBQUMsR0FBRztnQ0FDUixHQUFHLENBQUMsZUFBZSxDQUFDLG9DQUFjLGVBQWUsTUFBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dDQUM1RCxPQUFPLEtBQUssQ0FBQzs0QkFDakIsQ0FBQyxDQUFDOzt3QkFKRixTQUlFLENBQUM7d0JBQ0gsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2Y7SUFHYSxtQ0FBd0IsR0FBdEMsVUFBdUMsQ0FBYTtRQUNoRCxPQUFPO1lBQ0gsRUFBRSxFQUFPLENBQUMsQ0FBQyxFQUFFO1lBQ2IsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPO1lBQ2xCLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTztZQUNsQixJQUFJLEVBQUssQ0FBQyxDQUFDLElBQUk7WUFDZixJQUFJLEVBQUssQ0FBQyxDQUFDLElBQUk7WUFDM0IsMkNBQTJDO1NBQ2xDLENBQUM7SUFDTixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDO0FBckpZLGdDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCdkIsMEZBQXFEO0FBNkJyRDtJQUVJLG1CQUFtQixDQUFhO0lBQUcsQ0FBQztJQUVoQiwwQkFBZ0IsR0FBcEMsVUFDSSxNQUFvQixFQUNwQixHQUFzQixFQUN0QixPQUFnQixFQUNoQixRQUFnQjs7Ozs7NEJBR0cscUJBQU0sU0FBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQzs7d0JBQTdFLFVBQVUsR0FBRyxTQUFnRTt3QkFDbkYsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxFQUFFLEVBQUM7d0JBQ2QsQ0FBQzt3QkFDRCxzQkFBTyxVQUFVLEVBQUM7Ozs7S0FDckI7SUFHbUIsb0JBQVUsR0FBOUIsVUFDSSxNQUFvQixFQUNwQixHQUFzQixFQUN0QixPQUFnQixFQUNoQixRQUFnQixFQUNoQixJQUFnQjs7Ozs7NEJBR0EscUJBQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDOzt3QkFBdkUsT0FBTyxHQUFHLFNBQTZEO3dCQUM3RSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEtBQUssRUFBQzt3QkFDakIsQ0FBQzt3QkFDRCxzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDZjtJQUdtQix3QkFBYyxHQUFsQyxVQUFtQyxNQUFrQixFQUFFLEdBQWlCLEVBQUUsT0FBZTs7Ozs7NEJBQ3hFLHFCQUFNLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUM7O3dCQUF4RCxJQUFJLEdBQUcsU0FBaUQ7d0JBQzlELElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7NEJBQ2Ysc0JBQU8sS0FBSyxFQUFDO3dCQUNqQixDQUFDO3dCQUNELHNCQUFPLElBQUksRUFBQzs7OztLQUNmO0lBRW1CLG9CQUFVLEdBQTlCLFVBQStCLE1BQWtCLEVBQUUsR0FBaUIsRUFBRSxPQUFlLEVBQUUsUUFBZ0I7Ozs7OzRCQUN0RixxQkFBTSxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQzs7d0JBQTlELElBQUksR0FBRyxTQUF1RDt3QkFDcEUsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxLQUFLLEVBQUM7d0JBQ2pCLENBQUM7d0JBQ0Qsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2Y7SUFJRCxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLEdBQUc7SUFDb0Isc0JBQVksR0FBbkMsVUFDSSxNQUFrQixFQUNsQixHQUFvQixFQUNwQixFQUFjOzs7Ozs7d0JBRVIsY0FBYyxHQUFHLDJTQU90Qjt3QkFDeUIscUJBQU0sT0FBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLEtBQUssQ0FBZSxjQUFjLEVBQUUsRUFBQyxFQUFFLEVBQUcsRUFBRSxFQUFDLEVBQ3BGLEtBQUssQ0FBQyxhQUFHO2dDQUNOLEdBQUcsQ0FBQyxlQUFlLENBQUMscUNBQWUsY0FBYyxDQUFFLENBQUMsQ0FBQztnQ0FDckQsT0FBTyxFQUFFLENBQUM7NEJBQ2QsQ0FBQyxDQUFDOzt3QkFKSyxlQUFlLEdBQUksVUFJeEIsSUFKb0I7d0JBTXRCLElBQUksZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQzs0QkFDN0IsR0FBRyxDQUFDLGVBQWUsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDOzRCQUN4RCxzQkFBTyxTQUFTLEVBQUM7d0JBQ3JCLENBQUM7d0JBQ0Qsc0JBQU8sSUFBSSxlQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUM7Ozs7S0FDdEY7SUFHRCxrREFBa0Q7SUFDbEQsbUJBQW1CO0lBQ25CLEdBQUc7SUFDb0IsMEJBQWdCLEdBQXZDLFVBQ0ksTUFBb0IsRUFDcEIsR0FBc0IsRUFDdEIsT0FBZ0IsRUFDaEIsUUFBZ0I7Ozs7Ozt3QkFFVixjQUFjLEdBQUcsOFVBT3RCO3dCQUN5QixxQkFBTSxPQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsS0FBSyxDQUFlLGNBQWMsRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxFQUNqSCxLQUFLLENBQUMsYUFBRztnQ0FDTixHQUFHLENBQUMsZUFBZSxDQUFDLHFDQUFlLGNBQWMsQ0FBRSxDQUFDLENBQUM7Z0NBQ3JELE9BQU8sRUFBRSxDQUFDOzRCQUNkLENBQUMsQ0FBQzs7d0JBSkssZUFBZSxHQUFJLFVBSXhCLElBSm9CO3dCQU10QixJQUFJLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7NEJBQ3pDLHNFQUFzRTs0QkFDMUQsc0JBQU8sRUFBRSxFQUFDO3dCQUNkLENBQUM7d0JBRUssVUFBVSxHQUFHLEVBQWMsQ0FBQzt3QkFDbEMsV0FBZ0MsRUFBZixtQ0FBZSxFQUFmLDZCQUFlLEVBQWYsSUFBZSxFQUFFLENBQUM7NEJBQXhCLEVBQUU7NEJBQ1QsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksZUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbkYsQ0FBQzt3QkFDRCxzQkFBTyxVQUFVLEVBQUM7Ozs7S0FDckI7SUFHRCxzQ0FBc0M7SUFDdEMsY0FBYztJQUNkLEdBQUc7SUFDb0IsaUJBQU8sR0FBOUIsVUFDSSxNQUFvQixFQUNwQixHQUFzQixFQUN0QixPQUFnQixFQUNoQixRQUFnQixFQUNoQixJQUFnQjs7Ozs7Ozt3QkFHVixlQUFlLEdBQUcsOGdCQWF2Qjt3QkFDSyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUN2QyxPQUFPO3dCQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBcUJFO3dCQUNNLHFCQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFO2dDQUNoQyxTQUFTLEVBQUksT0FBTztnQ0FDcEIsVUFBVSxFQUFHLFFBQVE7Z0NBQ3JCLFNBQVMsRUFBSSxRQUFRLENBQUMsT0FBTztnQ0FDN0IsTUFBTSxFQUFPLFFBQVEsQ0FBQyxJQUFJO2dDQUMxQixLQUFLLEVBQVEsUUFBUSxDQUFDLEdBQUc7Z0NBQ3pCLEtBQUssRUFBUSxRQUFRLENBQUMsR0FBRztnQ0FDekIsTUFBTSxFQUFPLFFBQVEsQ0FBQyxJQUFJO2dDQUN0QywwREFBMEQ7Z0NBQzlDLE9BQU8sRUFBTSxRQUFRLENBQUMsS0FBSztnQ0FDM0IsSUFBSSxFQUFTLFFBQVEsQ0FBQyxFQUFFO2dDQUN4QixTQUFTLEVBQUksMEJBQVEsQ0FBQyxHQUFHLDBDQUFFLEdBQUcsMENBQUUsR0FBRyxtQ0FBRSxFQUFFO2dDQUN2QyxTQUFTLEVBQUksZ0NBQVEsQ0FBQyxHQUFHLDBDQUFFLEdBQUcsMENBQUUsR0FBRyxtQ0FBRSxvQkFBUSxDQUFDLEdBQUcsMENBQUUsR0FBRywwQ0FBRSxHQUFHLG1DQUFFLEVBQUU7Z0NBQy9ELFNBQVMsRUFBSSwwQkFBUSxDQUFDLEdBQUcsMENBQUUsR0FBRywwQ0FBRSxHQUFHLG1DQUFFLEVBQUU7Z0NBQ3ZDLFNBQVMsRUFBSSxnQ0FBUSxDQUFDLEdBQUcsMENBQUUsR0FBRywwQ0FBRSxHQUFHLG1DQUFFLG9CQUFRLENBQUMsR0FBRywwQ0FBRSxHQUFHLDBDQUFFLEdBQUcsbUNBQUUsRUFBRTtnQ0FDL0QsS0FBSyxFQUFRLG9CQUFRLENBQUMsR0FBRywwQ0FBRSxHQUFHLG1DQUFFLENBQUMsQ0FBQztnQ0FDbEMsV0FBVyxFQUFFLFVBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQ0FBRSxFQUFFO2dDQUNuRCxXQUFXLEVBQUUsVUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLG1DQUFFLEVBQUU7Z0NBQ25ELFVBQVUsRUFBRyxRQUFRLENBQUMsUUFBUSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzZCQUNqRCxDQUFDO2lDQUNELEtBQUssQ0FBQyxhQUFHO2dDQUNOLEdBQUcsQ0FBQyxlQUFlLENBQUMscUNBQWUsZUFBZSxDQUFFLENBQUMsQ0FBQztnQ0FDdEQsT0FBTyxFQUFFLENBQUM7NEJBQ2QsQ0FBQyxDQUFDOzt3QkE5Q1YsT0FBTzt3QkFDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQXFCRTt3QkFDTSxTQXVCRSxDQUFDO3dCQUdILHNCQUFPLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFDOzs7O0tBQzVDO0lBR0QsMENBQTBDO0lBQ25CLG9CQUFVLEdBQWpDLFVBQWtDLE1BQWtCLEVBQUUsR0FBaUI7Ozs7Ozt3QkFDN0QsY0FBYyxHQUFFLHNFQUVyQjt3QkFDbUIscUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBaUIsY0FBYyxDQUFDO2lDQUNyRSxLQUFLLENBQUUsVUFBQyxHQUFHO2dDQUNSLEdBQUcsQ0FBQyxlQUFlLENBQUMscUNBQWUsY0FBYyxNQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0NBQzVELE9BQU8sRUFBRSxDQUFDOzRCQUNkLENBQUMsQ0FBQzs7d0JBSkssU0FBUyxHQUFJLFVBSWxCLElBSmM7d0JBS2hCLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDOzRCQUFFLHNCQUFPLENBQUMsQ0FBQyxFQUFDO3dCQUNwQyxzQkFBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDOzs7O0tBQzFCO0lBRUQsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0QyxpQkFBaUI7SUFDakIsR0FBRztJQUNvQixxQkFBVyxHQUFsQyxVQUNJLE1BQXNCLEVBQ3RCLEdBQXdCLEVBQ3hCLE9BQWtCLEVBQ2xCLFFBQWtCLEVBQ2xCLFVBQW9COzs7Ozs7d0JBR2QsV0FBVyxHQUFHLEVBQWMsQ0FBQzs4QkFDTixFQUFWLHlCQUFVOzs7NkJBQVYseUJBQVU7d0JBQWxCLElBQUk7d0JBQ0sscUJBQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDOzt3QkFBdkUsT0FBTyxHQUFHLFNBQTZEO3dCQUM3RSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7NEJBQUUsc0JBQU8sRUFBRSxFQUFDO3dCQUM1QixXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7d0JBSFgsSUFBVTs7NEJBSzdCLHNCQUFPLFdBQVcsRUFBQzs7OztLQUN0QjtJQUdELDBDQUEwQztJQUMxQyxHQUFHO0lBQ2lCLHFCQUFXLEdBQS9CLFVBQWdDLE1BQWtCLEVBQUUsR0FBaUIsRUFBRSxPQUFlOzs7Ozs7d0JBQzVFLGVBQWUsR0FBRyx1RkFHdkI7d0JBQ0QscUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7aUNBQ3JELEtBQUssQ0FBRSxVQUFDLEdBQUc7Z0NBQ1IsR0FBRyxDQUFDLGVBQWUsQ0FBQyxvQ0FBYyxlQUFlLE1BQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztnQ0FDNUQsT0FBTyxLQUFLLENBQUM7NEJBQ2pCLENBQUMsQ0FBQzs7d0JBSkYsU0FJRSxDQUFDO3dCQUNILHNCQUFPLElBQUksRUFBQzs7OztLQUNmO0lBRUQsbURBQW1EO0lBQ25ELEdBQUc7SUFDaUIsaUJBQU8sR0FBM0IsVUFBNEIsTUFBa0IsRUFBRSxHQUFpQixFQUFFLE9BQWUsRUFBRSxRQUFnQjs7Ozs7O3dCQUMxRixlQUFlLEdBQUcsZ0hBR3ZCO3dCQUNELHFCQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQUM7aUNBQ3pFLEtBQUssQ0FBRSxVQUFDLEdBQUc7Z0NBQ1IsR0FBRyxDQUFDLGVBQWUsQ0FBQyxvQ0FBYyxlQUFlLE1BQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztnQ0FDNUQsT0FBTyxLQUFLLENBQUM7NEJBQ2pCLENBQUMsQ0FBQzs7d0JBSkYsU0FJRSxDQUFDO3dCQUNILHNCQUFPLElBQUksRUFBQzs7OztLQUNmO0lBR2Esa0NBQXdCLEdBQXRDLFVBQXVDLENBQWE7UUFDaEQsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdEMsSUFBTSxJQUFJLEdBQUk7WUFDVixFQUFFLEVBQVMsQ0FBQyxDQUFDLEVBQUU7WUFDZixPQUFPLEVBQUksQ0FBQyxDQUFDLE9BQU87WUFDcEIsT0FBTyxFQUFJLENBQUMsQ0FBQyxPQUFPO1lBQ3BCLElBQUksRUFBTyxDQUFDLENBQUMsSUFBSTtZQUNqQixHQUFHLEVBQVEsQ0FBQyxDQUFDLEdBQUc7WUFDaEIsR0FBRyxFQUFRLENBQUMsQ0FBQyxHQUFHO1lBQ2hCLElBQUksRUFBTyxDQUFDLENBQUMsSUFBSTtZQUM3Qiw2Q0FBNkM7WUFDakMsS0FBSyxFQUFNLENBQUMsQ0FBQyxLQUFLO1lBQ2xCLEVBQUUsRUFBUyxDQUFDLENBQUMsRUFBRTtZQUNmLEdBQUcsRUFBRTtnQkFDRCxHQUFHLEVBQUU7b0JBQ0QsR0FBRyxFQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztvQkFDNUIsR0FBRyxFQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztpQkFDL0I7Z0JBQ0QsR0FBRyxFQUFFO29CQUNELEdBQUcsRUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7b0JBQzVCLEdBQUcsRUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7aUJBQy9CO2dCQUNELEdBQUcsRUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7YUFDL0I7WUFDRCxTQUFTLEVBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ3RDLFNBQVMsRUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDbEQ7Ozs7Ozs7Ozs7O2VBV0c7WUFDUyxRQUFRLEVBQUcsQ0FBQyxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRztTQUMxQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUM7QUFyVFksOEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJ0QiwwRkFBb0Q7QUFvQnBEO0lBQ0k7SUFBc0IsQ0FBQztJQUdILDBCQUFnQixHQUFwQyxVQUFxQyxNQUFrQixFQUFFLEdBQWlCLEVBQUUsT0FBZTs7Ozs7NEJBQ3BFLHFCQUFNLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQzs7d0JBQW5FLFVBQVUsR0FBRyxTQUFzRDt3QkFDekUsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxFQUFFLEVBQUM7d0JBQ2QsQ0FBQzt3QkFDRCxzQkFBTyxVQUFVLEVBQUM7Ozs7S0FDckI7SUFHbUIsb0JBQVUsR0FBOUIsVUFBK0IsTUFBa0IsRUFBRSxHQUFpQixFQUFFLE9BQWUsRUFBRSxJQUFZOzs7Ozs0QkFDL0UscUJBQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUM7O3dCQUE3RCxPQUFPLEdBQUcsU0FBbUQ7d0JBQ25FLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7NEJBQ2Ysc0JBQU8sS0FBSyxFQUFDO3dCQUNqQixDQUFDO3dCQUNELHNCQUFPLElBQUksRUFBQzs7OztLQUNmO0lBR21CLG9CQUFVLEdBQTlCLFVBQStCLE1BQWtCLEVBQUUsR0FBaUIsRUFBRSxPQUFlOzs7Z0JBQ2pGLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztvQkFDZixzQkFBTyxLQUFLLEVBQUM7Z0JBQ2pCLENBQUM7Z0JBQ0Qsc0JBQU8sSUFBSSxFQUFDOzs7S0FDZjtJQUlELHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsR0FBRztJQUNvQiwwQkFBZ0IsR0FBdkMsVUFDUSxNQUFrQixFQUNsQixHQUFpQixFQUNqQixPQUFlOzs7Ozs7d0JBRWIsWUFBWSxHQUFHLDJMQUtwQjt3QkFDeUIscUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBZSxZQUFZLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7aUNBQzNGLEtBQUssQ0FBQyxhQUFHO2dDQUNOLEdBQUcsQ0FBQyxlQUFlLENBQUMsb0NBQWMsWUFBWSxDQUFFLENBQUMsQ0FBQztnQ0FDbEQsT0FBTyxFQUFFLENBQUM7NEJBQ2QsQ0FBQyxDQUFDOzt3QkFKSyxlQUFlLEdBQUksVUFJeEIsSUFKb0I7d0JBTXRCLElBQUksZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQzs0QkFDN0Isc0JBQU8sRUFBRSxFQUFDO3dCQUNkLENBQUM7d0JBQ0ssVUFBVSxHQUFHLEVBQWMsQ0FBQzt3QkFDbEMsV0FBZ0MsRUFBZixtQ0FBZSxFQUFmLDZCQUFlLEVBQWYsSUFBZSxFQUFFLENBQUM7NEJBQXhCLEVBQUU7NEJBQ1QsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLGVBQU0sQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN4RSxDQUFDO3dCQUNELHNCQUFPLFVBQVUsRUFBQzs7OztLQUNyQjtJQUdELG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsR0FBRztJQUNvQixpQkFBTyxHQUE5QixVQUNRLE1BQW1CLEVBQ25CLEdBQXFCLEVBQ3JCLE9BQWUsRUFDZixJQUFlOzs7Ozs7d0JBR2IsZUFBZSxHQUFHLHlTQVN2Qjt3QkFDSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUNoQyxPQUFPO3dCQUNQOzs7Ozs7Ozs7OzswQkFXRTt3QkFDTSxxQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRTtnQ0FDaEMsT0FBTyxFQUFFLE9BQU87Z0NBQ2hCLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTztnQ0FDbEIsSUFBSSxFQUFLLENBQUMsQ0FBQyxJQUFJO2dDQUNmLE1BQU0sRUFBRyxDQUFDLENBQUMsTUFBTTtnQ0FDakIsTUFBTSxFQUFHLENBQUMsQ0FBQyxNQUFNO2dDQUNqQixNQUFNLEVBQUcsQ0FBQyxDQUFDLE1BQU07Z0NBQ2pCLElBQUksRUFBSyxDQUFDLENBQUMsSUFBSTtnQ0FDZixJQUFJLEVBQUssQ0FBQyxDQUFDLElBQUk7NkJBQ2xCLENBQUM7aUNBQ0QsS0FBSyxDQUFDLGFBQUc7Z0NBQ04sR0FBRyxDQUFDLGVBQWUsQ0FBQyxtQ0FBYSxlQUFlLENBQUUsQ0FBQyxDQUFDO2dDQUNwRCxPQUFPLEVBQUUsQ0FBQzs0QkFDZCxDQUFDLENBQUM7O3dCQTFCVixPQUFPO3dCQUNQOzs7Ozs7Ozs7OzswQkFXRTt3QkFDTSxTQWFFLENBQUM7d0JBQ0gsc0JBQU8sU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUM7Ozs7S0FDNUM7SUFFRCwwQ0FBMEM7SUFDbkIsb0JBQVUsR0FBakMsVUFBa0MsTUFBa0IsRUFBRSxHQUFpQjs7Ozs7O3dCQUM3RCxjQUFjLEdBQUUsc0VBRXJCO3dCQUNtQixxQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFpQixjQUFjLENBQUM7aUNBQ3JFLEtBQUssQ0FBRSxVQUFDLEdBQUc7Z0NBQ1IsR0FBRyxDQUFDLGVBQWUsQ0FBQyxxQ0FBZSxjQUFjLE1BQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztnQ0FDNUQsT0FBTyxFQUFFLENBQUM7NEJBQ2QsQ0FBQyxDQUFDOzt3QkFKSyxTQUFTLEdBQUksVUFJbEIsSUFKYzt3QkFLaEIsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUM7NEJBQUUsc0JBQU8sQ0FBQyxDQUFDLEVBQUM7d0JBQ3BDLHNCQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUM7Ozs7S0FDMUI7SUFHRCwwQ0FBMEM7SUFDMUMsR0FBRztJQUNpQixpQkFBTyxHQUEzQixVQUE0QixNQUFrQixFQUFFLEdBQWlCLEVBQUUsT0FBZTs7Ozs7O3dCQUN4RSxlQUFlLEdBQUcsc0ZBR3ZCO3dCQUNELHFCQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2lDQUN0RCxLQUFLLENBQUUsVUFBQyxHQUFHO2dDQUNSLEdBQUcsQ0FBQyxlQUFlLENBQUMsb0NBQWMsZUFBZSxNQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0NBQzVELE9BQU8sS0FBSyxDQUFDOzRCQUNqQixDQUFDLENBQUM7O3dCQUpGLFNBSUUsQ0FBQzt3QkFDSCxzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDZjtJQUVhLGtDQUF3QixHQUF0QyxVQUF1QyxDQUFhO1FBQ2hELE9BQU87WUFDSCxFQUFFLEVBQU8sQ0FBQyxDQUFDLEVBQUU7WUFDYixPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU87WUFDbEIsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPO1lBQ2xCLElBQUksRUFBSyxDQUFDLENBQUMsSUFBSTtZQUNmLE1BQU0sRUFBRyxDQUFDLENBQUMsTUFBTTtZQUNqQixNQUFNLEVBQUcsQ0FBQyxDQUFDLE1BQU07WUFDakIsTUFBTSxFQUFHLENBQUMsQ0FBQyxNQUFNO1lBQ2pCLElBQUksRUFBSyxDQUFDLENBQUMsSUFBSTtZQUNmLElBQUksRUFBSyxDQUFDLENBQUMsSUFBSTtZQUMzQiwwQ0FBMEM7U0FDakMsQ0FBQztJQUNOLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUM7QUE5SlksOEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJ0QixrSEFBNEU7QUF1QjVFO0lBQ0k7SUFBc0IsQ0FBQztJQUdILDBCQUFnQixHQUFwQyxVQUFxQyxNQUFrQixFQUFFLEdBQWlCLEVBQUUsT0FBZTs7Ozs7NEJBQ3BFLHFCQUFNLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQzs7d0JBQW5FLFVBQVUsR0FBRyxTQUFzRDt3QkFDekUsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxFQUFFLEVBQUM7d0JBQ2QsQ0FBQzt3QkFDRCxzQkFBTyxVQUFVLEVBQUM7Ozs7S0FDckI7SUFHbUIsb0JBQVUsR0FBOUIsVUFBK0IsTUFBa0IsRUFBRSxHQUFpQixFQUFFLE9BQWUsRUFBRSxJQUFvQjs7Ozs7NEJBQ3ZGLHFCQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDOzt3QkFBN0QsT0FBTyxHQUFHLFNBQW1EO3dCQUNuRSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEtBQUssRUFBQzt3QkFDakIsQ0FBQzt3QkFDRCxzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDZjtJQUdtQixvQkFBVSxHQUE5QixVQUErQixNQUFrQixFQUFFLEdBQWlCLEVBQUUsT0FBZTs7O2dCQUNqRixTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3hDLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7b0JBQ2Ysc0JBQU8sS0FBSyxFQUFDO2dCQUNqQixDQUFDO2dCQUNELHNCQUFPLElBQUksRUFBQzs7O0tBQ2Y7SUFJRCxxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLEdBQUc7SUFDb0IsMEJBQWdCLEdBQXZDLFVBQ1EsTUFBa0IsRUFDbEIsR0FBaUIsRUFDakIsT0FBZTs7Ozs7O3dCQUViLFlBQVksR0FBRyw4UUFNcEI7d0JBQ3lCLHFCQUFNLE1BQU0sQ0FBQyxLQUFLLENBQWUsWUFBWSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2lDQUMzRixLQUFLLENBQUMsYUFBRztnQ0FDTixHQUFHLENBQUMsZUFBZSxDQUFDLG9DQUFjLFlBQVksQ0FBRSxDQUFDLENBQUM7Z0NBQ2xELE9BQU8sRUFBRSxDQUFDOzRCQUNkLENBQUMsQ0FBQzs7d0JBSkssZUFBZSxHQUFJLFVBSXhCLElBSm9CO3dCQU10QixJQUFJLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7NEJBQzdCLHNCQUFPLEVBQUUsRUFBQzt3QkFDZCxDQUFDO3dCQUNLLFVBQVUsR0FBRyxFQUFzQixDQUFDO3dCQUMxQyxXQUFnQyxFQUFmLG1DQUFlLEVBQWYsNkJBQWUsRUFBZixJQUFlLEVBQUUsQ0FBQzs0QkFBeEIsRUFBRTs0QkFDVCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQWMsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNoRixDQUFDO3dCQUNELHNCQUFPLFVBQVUsRUFBQzs7OztLQUNyQjtJQUdELG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsR0FBRztJQUNvQixpQkFBTyxHQUE5QixVQUNRLE1BQW1CLEVBQ25CLEdBQXFCLEVBQ3JCLE9BQWUsRUFDZixJQUF1Qjs7Ozs7Ozt3QkFHckIsZUFBZSxHQUFHLHVjQVd2Qjt3QkFDSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUNoQyxPQUFPO3dCQUNQOzs7Ozs7Ozs7Ozs7OzswQkFjRTt3QkFDRixxQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRTtnQ0FDeEIsT0FBTyxFQUFNLE9BQU87Z0NBQ3BCLE9BQU8sRUFBTSxDQUFDLENBQUMsT0FBTztnQ0FDdEIsT0FBTyxFQUFNLENBQUMsQ0FBQyxPQUFPO2dDQUN0QixRQUFRLEVBQUssQ0FBQyxDQUFDLFFBQVE7Z0NBQ3ZCLFFBQVEsRUFBSyxDQUFDLENBQUMsSUFBSTtnQ0FDbkIsUUFBUSxFQUFLLENBQUMsQ0FBQyxJQUFJO2dDQUNuQixPQUFPLEVBQU0sQ0FBQyxDQUFDLE9BQU87Z0NBQ3RCLFNBQVMsRUFBSSxhQUFDLENBQUMsT0FBTywwQ0FBRSxDQUFDLG1DQUFFLENBQUM7Z0NBQzVCLFNBQVMsRUFBSSxhQUFDLENBQUMsT0FBTywwQ0FBRSxDQUFDLG1DQUFFLENBQUM7Z0NBQzVCLFNBQVMsRUFBSSxhQUFDLENBQUMsT0FBTywwQ0FBRSxDQUFDLG1DQUFFLENBQUM7Z0NBQzVCLFNBQVMsRUFBSSxhQUFDLENBQUMsT0FBTywwQ0FBRSxDQUFDLG1DQUFFLEVBQUU7NkJBQ2hDLENBQUM7aUNBQ0QsS0FBSyxDQUFDLGFBQUc7Z0NBQ04sR0FBRyxDQUFDLGVBQWUsQ0FBQyxtQ0FBYSxlQUFlLENBQUUsQ0FBQyxDQUFDO2dDQUNwRCxPQUFPLEVBQUUsQ0FBQzs0QkFDZCxDQUFDLENBQUM7O3dCQWhDVixPQUFPO3dCQUNQOzs7Ozs7Ozs7Ozs7OzswQkFjRTt3QkFDRixTQWdCVSxDQUFDO3dCQUNILHNCQUFPLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFDOzs7O0tBQzVDO0lBRUQsMENBQTBDO0lBQ25CLG9CQUFVLEdBQWpDLFVBQWtDLE1BQWtCLEVBQUUsR0FBaUI7Ozs7Ozt3QkFDN0QsY0FBYyxHQUFFLHNFQUVyQjt3QkFDbUIscUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBaUIsY0FBYyxDQUFDO2lDQUNyRSxLQUFLLENBQUUsVUFBQyxHQUFHO2dDQUNSLEdBQUcsQ0FBQyxlQUFlLENBQUMscUNBQWUsY0FBYyxNQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0NBQzVELE9BQU8sRUFBRSxDQUFDOzRCQUNkLENBQUMsQ0FBQzs7d0JBSkssU0FBUyxHQUFJLFVBSWxCLElBSmM7d0JBS2hCLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDOzRCQUFFLHNCQUFPLENBQUMsQ0FBQyxFQUFDO3dCQUNwQyxzQkFBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDOzs7O0tBQzFCO0lBR0QsMENBQTBDO0lBQzFDLEdBQUc7SUFDaUIsaUJBQU8sR0FBM0IsVUFBNEIsTUFBa0IsRUFBRSxHQUFpQixFQUFFLE9BQWU7Ozs7Ozt3QkFDeEUsZUFBZSxHQUFHLHNGQUd2Qjt3QkFDRCxxQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQztpQ0FDdEQsS0FBSyxDQUFFLFVBQUMsR0FBRztnQ0FDUixHQUFHLENBQUMsZUFBZSxDQUFDLG9DQUFjLGVBQWUsTUFBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dDQUM1RCxPQUFPLEtBQUssQ0FBQzs0QkFDakIsQ0FBQyxDQUFDOzt3QkFKRixTQUlFLENBQUM7d0JBQ0gsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2Y7SUFFYSxrQ0FBd0IsR0FBdEMsVUFBdUMsQ0FBYTs7UUFDaEQsT0FBTztZQUNILE9BQU8sRUFBTSxDQUFDLENBQUMsT0FBTztZQUN0QixPQUFPLEVBQU0sQ0FBQyxDQUFDLE9BQU87WUFDdEIsUUFBUSxFQUFLLENBQUMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBUyxDQUFDLENBQUMsUUFBUTtZQUN2QixJQUFJLEVBQVMsQ0FBQyxDQUFDLFFBQVE7WUFDdkIsT0FBTyxFQUFNLENBQUMsQ0FBQyxPQUFPO1lBQ3RCLE9BQU8sRUFBRTtnQkFDTCxDQUFDLEVBQVEsT0FBQyxDQUFDLFNBQVMsbUNBQUUsQ0FBQztnQkFDdkIsQ0FBQyxFQUFRLE9BQUMsQ0FBQyxTQUFTLG1DQUFFLENBQUM7Z0JBQ3ZCLENBQUMsRUFBUSxPQUFDLENBQUMsU0FBUyxtQ0FBRSxDQUFDO2dCQUN2QixDQUFDLEVBQVEsT0FBQyxDQUFDLFNBQVMsbUNBQUUsRUFBRTthQUMzQjtTQUNKLENBQUM7SUFDTixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDO0FBektZLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCdEIsc0dBQXFEO0FBQ3JELHNHQUFxRDtBQUNyRCxrSEFBeUQ7QUFDekQsNEZBQTZDO0FBQzdDLDRGQUE2QztBQUM3Qyw0RkFBNkM7QUFDN0MsK0ZBQThDO0FBQzlDLDRGQUE2QztBQXNDN0M7SUFBQTtJQTJEQSxDQUFDO0lBMURHLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLEdBQUc7SUFDaUIsNkJBQWUsR0FBbkMsVUFBb0MsTUFBa0IsRUFBRSxHQUFpQixFQUFFLFNBQWlCOzs7Ozs7d0JBQ2xGLFlBQVksR0FBRyxvWUFRcEI7d0JBQ21CLHFCQUFNLE1BQU0sQ0FBQyxLQUFLLENBQW1CLFlBQVksRUFBRSxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsQ0FBQztpQ0FDN0YsS0FBSyxDQUFFLFVBQUMsR0FBRztnQ0FDUixHQUFHLENBQUMsZUFBZSxDQUFDLG9DQUFjLFlBQVksTUFBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dDQUN6RCxPQUFPLEVBQUUsQ0FBQzs0QkFDZCxDQUFDLENBQUM7O3dCQUpLLFNBQVMsR0FBSSxVQUlsQixJQUpjO3dCQUtoQixJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQzs0QkFBRSxzQkFBTyxFQUFFLEVBQUM7d0JBRTlCLGFBQWEsR0FBaUIsRUFBRSxDQUFDO3dCQUN2QyxLQUFXLEVBQUUsSUFBSSxTQUFTLEVBQUUsQ0FBQzs0QkFDekIsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLEdBQUc7Z0NBQUUsU0FBUzs0QkFDN0MsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLEdBQUc7Z0NBQUUsU0FBUzs0QkFFdkMsSUFBSSxHQUFHLElBQUksdUJBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDM0MsSUFBSSxDQUFDLEtBQUssR0FBTywrQkFBYyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7NEJBRXBFLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzdCLENBQUM7d0JBQ0Qsc0JBQU8sYUFBYSxFQUFDOzs7O0tBQ3hCO0lBR0Qsb0RBQW9EO0lBQ3BELEdBQUc7SUFDaUIsZ0NBQWtCLEdBQXRDLFVBQXVDLE1BQWtCLEVBQUUsR0FBaUIsRUFBRSxTQUFpQixFQUFDLE9BQWU7Ozs7Ozt3QkFDckcsYUFBYSxHQUFHLHNLQUtyQjt3QkFDbUIscUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBaUIsYUFBYSxFQUFFLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7aUNBQzlHLEtBQUssQ0FBRSxVQUFDLEdBQUc7Z0NBQ1IsR0FBRyxDQUFDLGVBQWUsQ0FBQyxvQ0FBYyxhQUFhLE1BQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztnQ0FDMUQsT0FBTyxFQUFFLENBQUM7NEJBQ2QsQ0FBQyxDQUFDOzt3QkFKSyxTQUFTLEdBQUksVUFJbEIsSUFKYzt3QkFLaEIsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDOzRCQUN2QixzQkFBTyxDQUFDLENBQUMsRUFBQzt3QkFDZCxDQUFDO3dCQUNELElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDOzRCQUM5QixHQUFHLENBQUMsZUFBZSxDQUFDLHFEQUFxQixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxNQUFHLENBQUMsQ0FBQzs0QkFDbEUsc0JBQU8sQ0FBQyxDQUFDLEVBQUM7d0JBQ2QsQ0FBQzt3QkFDRCxzQkFBTyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDOzs7O0tBQ3ZDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDO0FBM0RZLHNDQUFhO0FBK0QxQjtJQUFBO0lBOE5BLENBQUM7SUE1TnVCLDBCQUFZLEdBQWhDLFVBQWlDLE1BQWtCLEVBQUUsR0FBaUIsRUFBRSxPQUFlOzs7Ozs0QkFFaEUscUJBQU0sYUFBYSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQzs7d0JBQW5FLFNBQVMsR0FBSSxTQUFzRDt3QkFDekUsSUFBSSxTQUFTLEtBQUssU0FBUyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUN0QyxzQkFBTyxTQUFTLEVBQUM7d0JBQ3pCLENBQUM7d0JBR2tCLHFCQUFNLHFCQUFTLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUM7O3dCQUFuRSxVQUFVLEdBQUcsU0FBc0Q7d0JBQ3pFLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7NEJBQ2Ysc0JBQU8sU0FBUyxFQUFDO3dCQUNyQixDQUFDO3dCQUNELFdBQTZCLEVBQVYseUJBQVUsRUFBVix3QkFBVSxFQUFWLElBQVU7NEJBQWxCLElBQUk7NEJBQWdCLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO3lCQUFBO3dCQUdsRCxxQkFBTSxxQkFBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDOzt3QkFBbkUsVUFBVSxHQUFHLFNBQXNEO3dCQUN6RSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLFNBQVMsRUFBQzt3QkFDckIsQ0FBQzt3QkFDRCxXQUE2QixFQUFWLHlCQUFVLEVBQVYsd0JBQVUsRUFBVixJQUFVOzRCQUFsQixJQUFJOzRCQUFnQixTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQzt5QkFBQTt3QkFHbEQscUJBQU0scUJBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQzs7d0JBQW5FLFVBQVUsR0FBRyxTQUFzRDt3QkFDekUsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDWCxzQkFBTyxTQUFTLEVBQUM7d0JBQ3pCLENBQUM7d0JBQ0QsV0FBNkIsRUFBVix5QkFBVSxFQUFWLHdCQUFVLEVBQVYsSUFBVTs0QkFBbEIsSUFBSTs0QkFBZ0IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7eUJBQUE7d0JBR2xELHFCQUFNLHVCQUFVLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUM7O3dCQUFwRSxVQUFVLEdBQUcsU0FBdUQ7d0JBQzFFLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7NEJBQ1gsc0JBQU8sU0FBUyxFQUFDO3dCQUN6QixDQUFDO3dCQUNELFdBQTZCLEVBQVYseUJBQVUsRUFBVix3QkFBVSxFQUFWLElBQVU7NEJBQWxCLElBQUk7NEJBQWdCLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO3lCQUFBO3dCQUVyRSxzQkFBTyxTQUFTLEVBQUM7Ozs7S0FDcEI7SUFHbUIsd0JBQVUsR0FBOUIsVUFBK0IsTUFBa0IsRUFBRSxHQUFpQixFQUFFLElBQTBCOzs7Ozs7d0JBQzVGLElBQUksSUFBSSxLQUFLLFNBQVM7NEJBQUUsc0JBQU8sS0FBSyxFQUFDO3dCQUVyQixxQkFBTSxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDOzt3QkFBeEQsT0FBTyxHQUFHLFNBQThDO3dCQUM5RCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEtBQUssRUFBQzt3QkFDakIsQ0FBQzs2QkFFZ0IsSUFBSSxDQUFDLFFBQVE7Ozs7Ozs7Ozs7O3dCQUMxQixxQkFBTSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzt3QkFBbkUsU0FBbUUsQ0FBQzt3QkFDcEUsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxLQUFLLEVBQUM7d0JBQ2pCLENBQUM7Ozs7Ozs2QkFHWSxJQUFJLENBQUMsUUFBUTs7Ozs7Ozs7Ozs7d0JBQ3RDLGtGQUFrRjt3QkFDdEUscUJBQU0scUJBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7d0JBRC9FLGtGQUFrRjt3QkFDdEUsU0FBbUUsQ0FBQzt3QkFDcEUsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxLQUFLLEVBQUM7d0JBQ2pCLENBQUM7Ozs7Ozs2QkFHWSxJQUFJLENBQUMsUUFBUTs7Ozs7Ozs7Ozs7d0JBQzFCLHFCQUFNLHFCQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7O3dCQUFuRSxTQUFtRSxDQUFDO3dCQUNwRSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEtBQUssRUFBQzt3QkFDakIsQ0FBQzs7Ozs7OzZCQUdZLElBQUksQ0FBQyxRQUFROzs7Ozs7Ozs7Ozt3QkFDMUIscUJBQU0sdUJBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7d0JBQXBFLFNBQW9FLENBQUM7d0JBQ3JFLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7NEJBQ2Ysc0JBQU8sS0FBSyxFQUFDO3dCQUNqQixDQUFDOzs7Ozs2QkFHTCxzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDZjtJQUdtQix3QkFBVSxHQUE5QixVQUErQixNQUFrQixFQUFFLEdBQWlCLEVBQUUsT0FBZTs7Ozs0QkFDakYscUJBQU0scUJBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUM7O3dCQUFqRCxTQUFpRCxDQUFDO3dCQUNsRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEtBQUssRUFBQzt3QkFDakIsQ0FBQzt3QkFFRCxxQkFBTSx1QkFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQzs7d0JBQTlDLFNBQThDLENBQUM7d0JBQy9DLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7NEJBQ2Ysc0JBQU8sS0FBSyxFQUFDO3dCQUNqQixDQUFDO3dCQUVELHFCQUFNLHFCQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDOzt3QkFBN0MsU0FBNkMsQ0FBQzt3QkFDOUMsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxLQUFLLEVBQUM7d0JBQ2pCLENBQUM7d0JBRUQscUJBQU0scUJBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUM7O3dCQUE3QyxTQUE2QyxDQUFDO3dCQUM5QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEtBQUssRUFBQzt3QkFDakIsQ0FBQzt3QkFFRCxxQkFBTSxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQzs7d0JBQTdDLFNBQTZDLENBQUM7d0JBQzlDLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7NEJBQ2Ysc0JBQU8sS0FBSyxFQUFDO3dCQUNqQixDQUFDO3dCQUVELHFCQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUM7O3dCQUFqRCxTQUFpRCxDQUFDO3dCQUNsRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEtBQUssRUFBQzt3QkFDakIsQ0FBQzt3QkFFRCxzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDZjtJQUdELHNDQUFzQztJQUN0QyxlQUFlO0lBQ2YsR0FBRztJQUNvQiwwQkFBWSxHQUFuQyxVQUFvQyxNQUFrQixFQUFFLEdBQWlCLEVBQUUsT0FBZTs7Ozs7O3dCQUNoRixZQUFZLEdBQUcsOFNBTXBCO3dCQUNtQixxQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFtQixZQUFZLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7aUNBQ3pGLEtBQUssQ0FBRSxVQUFDLEdBQUc7Z0NBQ1IsR0FBRyxDQUFDLGVBQWUsQ0FBQyxvQ0FBYyxZQUFZLE1BQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztnQ0FDekQsT0FBTyxFQUFFLENBQUM7NEJBQ2QsQ0FBQyxDQUFDOzt3QkFKSyxTQUFTLEdBQUksVUFJbEIsSUFKYzt3QkFNeEIsUUFBUTt3QkFDUixJQUFJLFNBQVMsS0FBSyxTQUFTOzRCQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0VBQXlELE9BQU8sQ0FBRSxDQUFDLENBQUM7d0JBQ3ZHLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQzs0QkFDdkIsR0FBRyxDQUFDLGVBQWUsQ0FBQywwRkFBa0IsWUFBWSxDQUFFLENBQUMsQ0FBQzs0QkFDdEQsc0JBQU8sU0FBUyxFQUFDO3dCQUNyQixDQUFDO3dCQUVLLElBQUksR0FBRyxJQUFJLHVCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzFDLElBQUksQ0FBQyxLQUFLLEdBQU8sK0JBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO3dCQUMzRSxxRkFBcUY7d0JBQ3JGLDhFQUE4RTt3QkFDOUUsOEVBQThFO3dCQUM5RSw4RUFBOEU7d0JBRXRFLHNCQUFPLElBQUksRUFBQzs7OztLQUNmO0lBR0Qsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixHQUFHO0lBQ29CLHFCQUFPLEdBQTlCLFVBQStCLE1BQWtCLEVBQUUsR0FBaUIsRUFBRSxJQUFnQjs7Ozs7O3dCQUM1RSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7d0JBQ3ZDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQzt3QkFDdkMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO3dCQUV2QyxlQUFlLEdBQUUsNllBVXRCO3dCQUNELHFCQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFO2dDQUNoQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7Z0NBQ3pCLE9BQU8sRUFBSSxJQUFJLENBQUMsT0FBTztnQ0FDdkIsS0FBSyxFQUFNLElBQUksQ0FBQyxLQUFLO2dDQUNyQixNQUFNLEVBQUssSUFBSSxDQUFDLE1BQU07Z0NBQ3RCLEtBQUssRUFBTSxJQUFJLENBQUMsS0FBSztnQ0FDckIsS0FBSyxFQUFNLCtCQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQ0FDcEUsK0VBQStFO2dDQUNuRSxTQUFTLEVBQUUsU0FBUztnQ0FDcEIsU0FBUyxFQUFFLFNBQVM7Z0NBQ3BCLFNBQVMsRUFBRSxTQUFTOzZCQUN2QixDQUFDO2lDQUNELEtBQUssQ0FBRSxVQUFDLEdBQUc7Z0NBQ1IsR0FBRyxDQUFDLGVBQWUsQ0FBQyxtQ0FBYSxlQUFlLE1BQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztnQ0FDM0QsT0FBTyxDQUFDLENBQUM7NEJBQ2IsQ0FBQyxDQUFDOzt3QkFmRixTQWVFLENBQUM7d0JBQ0gsc0JBQU8sYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUM7Ozs7S0FDaEQ7SUFHRCwrQ0FBK0M7SUFDeEIsd0JBQVUsR0FBakMsVUFBa0MsTUFBa0IsRUFBRSxHQUFpQjs7Ozs7O3dCQUM3RCxjQUFjLEdBQUUsc0VBRXJCO3dCQUNtQixxQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFpQixjQUFjLENBQUM7aUNBQ3JFLEtBQUssQ0FBRSxVQUFDLEdBQUc7Z0NBQ1IsR0FBRyxDQUFDLGVBQWUsQ0FBQyxxQ0FBZSxjQUFjLE1BQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztnQ0FDNUQsT0FBTyxFQUFFLENBQUM7NEJBQ2QsQ0FBQyxDQUFDOzt3QkFKSyxTQUFTLEdBQUksVUFJbEIsSUFKYzt3QkFLaEIsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUM7NEJBQUUsc0JBQU8sQ0FBQyxDQUFDLEVBQUM7d0JBQ3BDLHNCQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUM7Ozs7S0FDMUI7SUFHRCxzQ0FBc0M7SUFDdEMsR0FBRztJQUNvQixxQkFBTyxHQUE5QixVQUErQixNQUFrQixFQUFFLEdBQWlCLEVBQUUsT0FBZTs7Ozs7O3dCQUMzRSxlQUFlLEdBQUcsc0ZBR3ZCO3dCQUNELHFCQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFO2dDQUNoQyxPQUFPLEVBQUksT0FBTzs2QkFDckIsQ0FBQztpQ0FDRCxLQUFLLENBQUUsVUFBQyxHQUFHO2dDQUNSLEdBQUcsQ0FBQyxlQUFlLENBQUMsb0NBQWMsZUFBZSxNQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0NBQzVELE9BQU8sS0FBSyxDQUFDOzRCQUNqQixDQUFDLENBQUM7O3dCQU5GLFNBTUUsQ0FBQzt3QkFDSCxzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDZjtJQUNMLG9CQUFDO0FBQUQsQ0FBQztBQTlOWSxzQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RzFCLDBGQUFxRDtBQUNyRCw0RkFBaUQ7QUFpQmpEO0lBQ0k7SUFBc0IsQ0FBQztJQUVILDBCQUFnQixHQUFwQyxVQUFxQyxNQUFrQixFQUFFLEdBQWlCLEVBQUUsT0FBZTs7Ozs7NEJBQ3BFLHFCQUFNLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQzs7d0JBQW5FLFVBQVUsR0FBRyxTQUFzRDt3QkFDekUsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxFQUFFLEVBQUM7d0JBQ2QsQ0FBQzs4QkFDNEIsRUFBVix5QkFBVTs7OzZCQUFWLHlCQUFVO3dCQUFsQixJQUFJO3dCQUNRLHFCQUFNLHFCQUFTLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDOzt3QkFBL0UsVUFBVSxHQUFHLFNBQWtFO3dCQUNyRixJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEVBQUUsRUFBQzt3QkFDZCxDQUFDO3dCQUNELFdBQTZCLEVBQVYseUJBQVUsRUFBVix3QkFBVSxFQUFWLElBQVU7NEJBQWxCLElBQUk7NEJBQWdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQUE7Ozt3QkFMcEMsSUFBVTs7NEJBTzdCLHNCQUFPLFVBQVUsRUFBQzs7OztLQUNyQjtJQUdtQixzQkFBWSxHQUFoQyxVQUFpQyxNQUFrQixFQUFFLEdBQWlCLEVBQUUsT0FBZSxFQUFFLElBQVk7Ozs7OzRCQUNuRixxQkFBTSxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7d0JBQXRFLEtBQUssR0FBRyxTQUE4RDt3QkFDNUUsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxLQUFLLEVBQUM7d0JBQ2pCLENBQUM7d0JBQ2tCLHFCQUFNLHFCQUFTLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDOzt3QkFBL0UsVUFBVSxHQUFHLFNBQWtFO3dCQUNyRixJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEtBQUssRUFBQzt3QkFDakIsQ0FBQzt3QkFDRCxXQUE2QixFQUFWLHlCQUFVLEVBQVYsd0JBQVUsRUFBVixJQUFVOzRCQUFsQixJQUFJOzRCQUFnQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUFBO3dCQUNuRCxzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDZjtJQUdtQixvQkFBVSxHQUE5QixVQUNJLE1BQW1CLEVBQ25CLEdBQXFCLEVBQ3JCLE9BQWUsRUFDZixJQUFlOzs7Ozs0QkFFQyxxQkFBTSxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQzs7d0JBQTdELE9BQU8sR0FBRyxTQUFtRDt3QkFDbkUsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxLQUFLLEVBQUM7d0JBQ2pCLENBQUM7OEJBQzZCLEVBQVgsU0FBSSxDQUFDLElBQUksRUFBRTs7OzZCQUFYLGVBQVc7d0JBQW5CLElBQUk7d0JBQ1gscUJBQU0scUJBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQzs7d0JBQWxFLFNBQWtFLENBQUM7d0JBQ25FLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7NEJBQ2Ysc0JBQU8sS0FBSyxFQUFDO3dCQUNqQixDQUFDOzs7d0JBSmMsSUFBVzs7NEJBTTlCLHNCQUFPLElBQUksRUFBQzs7OztLQUNmO0lBR21CLG9CQUFVLEdBQTlCLFVBQStCLE1BQWtCLEVBQUUsR0FBaUIsRUFBRSxPQUFlLEVBQUUsUUFBZ0I7Ozs7NEJBQ25HLHFCQUFNLHFCQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQzs7d0JBQTFELFNBQTBELENBQUM7d0JBQzNELElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7NEJBQ2Ysc0JBQU8sS0FBSyxFQUFDO3dCQUNqQixDQUFDO3dCQUNELHFCQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUM7O3dCQUE3QyxTQUE2QyxDQUFDO3dCQUM5QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEtBQUssRUFBQzt3QkFDakIsQ0FBQzt3QkFDRCxzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDZjtJQUlELHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsR0FBRztJQUNvQiwwQkFBZ0IsR0FBdkMsVUFDSSxNQUFtQixFQUNuQixHQUFxQixFQUNyQixPQUFlOzs7Ozs7d0JBRVQsWUFBWSxHQUFFLDhJQUluQjt3QkFDeUIscUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBZSxZQUFZLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7aUNBQzNGLEtBQUssQ0FBQyxhQUFHO2dDQUNOLEdBQUcsQ0FBQyxlQUFlLENBQUMscUNBQWUsWUFBWSxNQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0NBQzFELE9BQU8sRUFBRSxDQUFDOzRCQUNkLENBQUMsQ0FBQzs7d0JBSkssZUFBZSxHQUFJLFVBSXhCLElBSm9CO3dCQU10QixJQUFJLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7NEJBQzdCLHNCQUFPLEVBQUUsRUFBQzt3QkFDZCxDQUFDO3dCQUNLLFVBQVUsR0FBRyxFQUFFLENBQUM7d0JBQ3RCLFdBQWdDLEVBQWYsbUNBQWUsRUFBZiw2QkFBZSxFQUFmLElBQWUsRUFBRSxDQUFDOzRCQUF4QixFQUFFOzRCQUNULFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxlQUFNLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDeEUsQ0FBQzt3QkFDRCxzQkFBTyxVQUFVLEVBQUM7Ozs7S0FDckI7SUFFRCxnREFBZ0Q7SUFDaEQsR0FBRztJQUNvQixzQkFBWSxHQUFuQyxVQUNJLE1BQW9CLEVBQ3BCLEdBQXNCLEVBQ3RCLE9BQWdCLEVBQ2hCLFFBQWdCOzs7Ozs7d0JBRVYsWUFBWSxHQUFHLHdLQUlwQjt3QkFDeUIscUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBZSxZQUFZLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQztpQ0FDL0csS0FBSyxDQUFDLGFBQUc7Z0NBQ04sR0FBRyxDQUFDLGVBQWUsQ0FBQyxxQ0FBZSxZQUFZLE1BQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztnQ0FDMUQsT0FBTyxFQUFFLENBQUM7NEJBQ2QsQ0FBQyxDQUFDOzt3QkFKSyxlQUFlLEdBQUksVUFJeEIsSUFKb0I7d0JBTXRCLElBQUksZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQzs0QkFDN0IsR0FBRyxDQUFDLGVBQWUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDOzRCQUNqRCxzQkFBTyxTQUFTLEVBQUM7d0JBQ3JCLENBQUM7d0JBQ0Qsc0JBQU8sSUFBSSxlQUFNLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7O0tBQzVFO0lBR0Qsd0NBQXdDO0lBQ3hDLGNBQWM7SUFDZCxHQUFHO0lBQ29CLGlCQUFPLEdBQTlCLFVBQ0ksTUFBbUIsRUFDbkIsR0FBcUIsRUFDckIsT0FBZSxFQUNmLElBQWU7Ozs7Ozt3QkFFVCxlQUFlLEdBQUcsc05BT3ZCO3dCQUNLLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7d0JBQ2hDLCtHQUErRzt3QkFDdkcscUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUU7Z0NBQ2hDLE9BQU8sRUFBRyxPQUFPO2dDQUNqQixPQUFPLEVBQUcsQ0FBQyxDQUFDLE9BQU87Z0NBQ25CLElBQUksRUFBTSxDQUFDLENBQUMsSUFBSTtnQ0FDaEIsTUFBTSxFQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQ0FDbEMsSUFBSSxFQUFNLENBQUMsQ0FBQyxJQUFJO2dDQUM1QixrREFBa0Q7NkJBQ3pDLENBQUM7aUNBQ0QsS0FBSyxDQUFDLGFBQUc7Z0NBQ04sR0FBRyxDQUFDLGVBQWUsQ0FBQyxtQ0FBYSxlQUFlLE1BQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztnQ0FDM0QsT0FBTyxFQUFFLENBQUM7NEJBQ2QsQ0FBQyxDQUFDOzt3QkFaViwrR0FBK0c7d0JBQ3ZHLFNBV0UsQ0FBQzt3QkFFSCxzQkFBTyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBQzs7OztLQUM1QztJQUVELDBDQUEwQztJQUNuQixvQkFBVSxHQUFqQyxVQUFrQyxNQUFrQixFQUFFLEdBQWlCOzs7Ozs7d0JBQzdELGNBQWMsR0FBRSxzRUFFckI7d0JBQ21CLHFCQUFNLE1BQU0sQ0FBQyxLQUFLLENBQWlCLGNBQWMsQ0FBQztpQ0FDckUsS0FBSyxDQUFFLFVBQUMsR0FBRztnQ0FDUixHQUFHLENBQUMsZUFBZSxDQUFDLHFDQUFlLGNBQWMsTUFBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dDQUM1RCxPQUFPLEVBQUUsQ0FBQzs0QkFDZCxDQUFDLENBQUM7O3dCQUpLLFNBQVMsR0FBSSxVQUlsQixJQUpjO3dCQUtoQixJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQzs0QkFBRSxzQkFBTyxDQUFDLENBQUMsRUFBQzt3QkFDcEMsc0JBQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQzs7OztLQUMxQjtJQUdELG1DQUFtQztJQUNuQyxzQ0FBc0M7SUFDdEMsaUJBQWlCO0lBQ2pCLEdBQUc7SUFDb0IscUJBQVcsR0FBbEMsVUFDSSxNQUFzQixFQUN0QixHQUF3QixFQUN4QixPQUFrQixFQUNsQixVQUFvQjs7Ozs7O3dCQUdkLFdBQVcsR0FBRyxFQUFjLENBQUM7OEJBQ04sRUFBVix5QkFBVTs7OzZCQUFWLHlCQUFVO3dCQUFsQixJQUFJO3dCQUNLLHFCQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDOzt3QkFBN0QsT0FBTyxHQUFHLFNBQW1EO3dCQUNuRSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7NEJBQUUsc0JBQU8sRUFBRSxFQUFDO3dCQUM1QixXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7d0JBSFgsSUFBVTs7NEJBSzdCLHNCQUFPLFdBQVcsRUFBQzs7OztLQUN0QjtJQUVELDBDQUEwQztJQUMxQyxHQUFHO0lBQ2lCLGlCQUFPLEdBQTNCLFVBQTRCLE1BQWtCLEVBQUUsR0FBaUIsRUFBRSxPQUFlOzs7Ozs7d0JBQ3hFLGVBQWUsR0FBRyxzRkFHdkI7d0JBQ0QscUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsRUFBQyxPQUFPLEVBQUcsT0FBTyxHQUFFLENBQUM7aUNBQ3hELEtBQUssQ0FBQyxhQUFHO2dDQUNOLEdBQUcsQ0FBQyxlQUFlLENBQUMsb0NBQWMsZUFBZSxNQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0NBQzVELE9BQU8sS0FBSyxDQUFDOzRCQUNqQixDQUFDLENBQUM7O3dCQUpGLFNBSUUsQ0FBQzt3QkFDSCxzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDZjtJQUdhLGtDQUF3QixHQUF0QyxVQUF1QyxDQUFhO1FBQ2hELE9BQU87WUFDSCxFQUFFLEVBQU8sQ0FBQyxDQUFDLEVBQUU7WUFDYixPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU87WUFDbEIsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPO1lBQ2xCLElBQUksRUFBSyxDQUFDLENBQUMsSUFBSTtZQUNmLE1BQU0sRUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDN0IsSUFBSSxFQUFLLENBQUMsQ0FBQyxJQUFJO1lBQzNCLDJDQUEyQztTQUNsQyxDQUFDO0lBQ04sQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQztBQTVOWSw4QkFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnRCLDZCQUE2QjtBQUM3QjtJQUtJLHNCQUFtQixNQUF1QjtRQUF2Qix1Q0FBdUI7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBUSxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLHNDQUFlLEdBQXRCLFVBQXVCLEdBQVc7UUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsT0FBTztJQUNYLENBQUM7SUFFTSxzQ0FBZSxHQUF0QixVQUF1QixHQUFXO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLE9BQU87SUFDWCxDQUFDO0lBRU0sMENBQW1CLEdBQTFCO1FBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQUUsT0FBTztRQUV4QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNkLElBQUksT0FBTyxHQUFHLDhCQUE4QixDQUFDO1lBQzdDLEtBQWtCLFVBQWdCLEVBQWhCLFNBQUksQ0FBQyxXQUFXLEVBQWhCLGNBQWdCLEVBQWhCLElBQWdCO2dCQUE3QixJQUFNLEdBQUc7Z0JBQXNCLE9BQU8sSUFBSSxVQUFHLEdBQUcsWUFBUyxDQUFDO2FBQUE7WUFDL0QsT0FBTyxJQUFLLFFBQVEsQ0FBQztZQUNyQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkIsQ0FBQzthQUFNLENBQUM7WUFDSixLQUFrQixVQUFnQixFQUFoQixTQUFJLENBQUMsV0FBVyxFQUFoQixjQUFnQixFQUFoQixJQUFnQjtnQkFBN0IsSUFBTSxHQUFHO2dCQUFzQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQUE7UUFDekQsQ0FBQztRQUNELE9BQU87SUFDWCxDQUFDO0lBRU0sMENBQW1CLEdBQTFCO1FBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQUUsT0FBTztRQUV4QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNkLElBQUksT0FBTyxHQUFHLDZCQUE2QixDQUFDO1lBQzVDLEtBQWtCLFVBQWdCLEVBQWhCLFNBQUksQ0FBQyxXQUFXLEVBQWhCLGNBQWdCLEVBQWhCLElBQWdCO2dCQUE3QixJQUFNLEdBQUc7Z0JBQXNCLE9BQU8sSUFBSSxVQUFHLEdBQUcsWUFBUyxDQUFDO2FBQUE7WUFDL0QsT0FBTyxJQUFLLFFBQVEsQ0FBQztZQUNyQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkIsQ0FBQzthQUFNLENBQUM7WUFDSixPQUFPLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7WUFDdEQsS0FBa0IsVUFBZ0IsRUFBaEIsU0FBSSxDQUFDLFdBQVcsRUFBaEIsY0FBZ0IsRUFBaEIsSUFBZ0I7Z0JBQTdCLElBQU0sR0FBRztnQkFBc0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFPLEdBQUcsQ0FBRSxDQUFDLENBQUM7YUFBQTtZQUNoRSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLENBQUM7UUFDRCxPQUFPO0lBQ1gsQ0FBQztJQUdNLGdDQUFTLEdBQWhCLFVBQWlCLENBQU0sRUFBRSxNQUFjOztRQUNuQyxJQUFNLEtBQUssR0FBRyxPQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsT0FBTyxFQUFFLG1DQUFPLE9BQU8sQ0FBQztRQUN6QyxJQUFNLEtBQUssR0FBRyxPQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsVUFBVSxFQUFFLG1DQUFJLEtBQUssQ0FBQztRQUN2QyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQVMsS0FBSyxDQUFFLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFZLEtBQUssQ0FBRSxDQUFDLENBQUM7UUFDMUMsT0FBTztJQUNYLENBQUM7SUFHTSx1Q0FBZ0IsR0FBdkI7UUFDSSx5QkFBVyxJQUFJLENBQUMsV0FBVyxRQUFFO0lBQ2pDLENBQUM7SUFDTSx1Q0FBZ0IsR0FBdkI7UUFDSSx5QkFBVyxJQUFJLENBQUMsV0FBVyxRQUFFO0lBQ2pDLENBQUM7SUFFTSw2QkFBTSxHQUFiO1FBQ0ksT0FBUSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQztBQXhFWSxvQ0FBWTs7Ozs7Ozs7Ozs7OztBQ0F6Qix3QkFLQztBQUdELDBCQU9DO0FBR0Qsd0JBR0M7QUFHRCxzQkFHQztBQUlELHdCQUdDO0FBR0Qsb0JBRUM7QUFFRCxvQkFFQztBQTVDRCxTQUFTO0FBQ1QsU0FBZ0IsTUFBTSxDQUFDLE1BQWM7SUFDakMsYUFBYTtJQUNiLElBQU0sT0FBTyxHQUFHLDZCQUE2QixDQUFDO0lBQzlDLFNBQVM7SUFDVCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQUVELFNBQVM7QUFDVCxTQUFnQixPQUFPLENBQUMsTUFBYztJQUNsQyxhQUFhO0lBQ2pCLGlEQUFpRDtJQUM3QyxJQUFNLE9BQU8sR0FBRyxXQUFXLENBQUM7SUFDNUIsSUFBTSxNQUFNLEdBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0MsU0FBUztJQUNULE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzFCLENBQUM7QUFFRCxPQUFPO0FBQ1AsU0FBZ0IsTUFBTSxDQUFDLEdBQVcsRUFBRSxLQUFhO0lBQzdDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsVUFBVSxDQUFDO0FBQ3JELENBQUM7QUFFRCxPQUFPO0FBQ1AsU0FBZ0IsS0FBSyxDQUFDLEdBQVcsRUFBRSxLQUFhO0lBQzVDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsVUFBVSxDQUFDO0FBQ3BELENBQUM7QUFHRCxPQUFPO0FBQ1AsU0FBZ0IsTUFBTSxDQUFDLEdBQVcsRUFBRSxLQUFhO0lBQzdDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsVUFBVSxDQUFDO0FBQ3JELENBQUM7QUFHRCxTQUFnQixJQUFJLENBQUMsQ0FBVztJQUM1QixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxFQUFVLEVBQUUsRUFBVSxJQUFLLFdBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUM7QUFDbEUsQ0FBQztBQUVELFNBQWdCLElBQUksQ0FBQyxDQUFXO0lBQzVCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEVBQVUsRUFBRSxFQUFVLElBQUssV0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FBQztBQUNsRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDRCx3QkFHQztBQUdELDBCQUVDO0FBR0Qsd0JBRUM7QUFVRCwwQkFFQztBQU1ELHdCQVVDO0FBNkJELDhCQU1DO0FBTUQsa0NBYUM7QUFHRCxzQ0FTQztBQUdELGtDQUlDO0FBQ0QsNENBSUM7QUFDRCw0Q0FJQztBQUNELDhDQUdDO0FBQ0QsOENBR0M7QUFDRCwwQ0FHQztBQUNELG9DQUtDO0FBckpELG1GQUE4QztBQUk5QyxJQUFNLEtBQUssR0FBYSxjQUFLLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDO0FBRWxELFdBQVc7QUFDWCxTQUFnQixNQUFNLENBQUMsR0FBZSxFQUFFLEdBQWUsRUFBRSxJQUFxQjtJQUF2RCw2QkFBZTtJQUFFLDZCQUFlO0lBQUUsbUNBQXFCO0lBQzFFLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQzFELE9BQU8sbUJBQU0sRUFBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0IsQ0FBQztBQUVELGdCQUFnQjtBQUNoQixTQUFnQixPQUFPLENBQUMsR0FBZSxFQUFFLEdBQWUsRUFBRSxJQUFxQjtJQUF2RCw2QkFBZTtJQUFFLDZCQUFlO0lBQUUsbUNBQXFCO0lBQzNFLE9BQU8sTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsY0FBSyxPQUFPLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFDLENBQUM7QUFDNUQsQ0FBQztBQUVELGdCQUFnQjtBQUNoQixTQUFnQixNQUFNLENBQUMsR0FBZSxFQUFFLEdBQWUsRUFBRSxJQUFxQjtJQUF2RCw2QkFBZTtJQUFFLDZCQUFlO0lBQUUsbUNBQXFCO0lBQzFFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ3JFLENBQUM7QUFDRCxTQUFTLGVBQWUsQ0FBQyxJQUFxQjtJQUFyQixtQ0FBcUI7SUFDMUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDNUIsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQUVELG1CQUFtQjtBQUNuQixTQUFnQixPQUFPLENBQUMsR0FBZSxFQUFFLEdBQWUsRUFBRSxFQUFnQixFQUFFLElBQXFCO0lBQXpFLDZCQUFlO0lBQUUsNkJBQWU7SUFBRSw2QkFBZ0I7SUFBRSxtQ0FBcUI7SUFDN0YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFFRCxtQkFBbUI7QUFDbkIsMERBQTBEO0FBQzFELDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsU0FBZ0IsTUFBTSxDQUFDLEdBQWlCLEVBQUUsR0FBaUIsRUFBRSxFQUFnQixFQUFFLElBQXFCO0lBQTdFLCtCQUFpQjtJQUFFLCtCQUFpQjtJQUFFLDZCQUFnQjtJQUFFLG1DQUFxQjtJQUNoRyxJQUFNLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDaEIsSUFBTSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDakIsSUFBTSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyx3QkFBd0I7SUFFL0QsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQyxHQUFHLGlCQUFJLEVBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQixDQUFDLEdBQUcsaUJBQUksRUFBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLE9BQU8sQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQUNELFNBQVMsSUFBSSxDQUFDLENBQVMsRUFBRSxDQUFTO0lBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN2RSxDQUFDO0FBQ0QsU0FBUyxJQUFJLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLENBQUM7QUFHRCxhQUFhO0FBQ2I7SUFJSSxzQkFBbUIsSUFBWTtRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBQ00sNEJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsV0FBVztJQUNKLDZCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ2hELE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQztBQWhCWSxvQ0FBWTtBQWtCekIsaUJBQWlCO0FBQ2pCLFNBQWdCLFNBQVMsQ0FBQyxHQUFnQixFQUFFLElBQXFCO0lBQXZDLDhCQUFnQjtJQUFFLG1DQUFxQjtJQUM3RCxJQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO0lBQzFELElBQU0sT0FBTyxHQUFHLGlCQUFJLEVBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTVDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEUsT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3JCLENBQUM7QUFNRCxTQUFnQixXQUFXLENBQUMsS0FBcUIsRUFBRSxJQUFxQjtJQUFyQixtQ0FBcUI7SUFDcEUsSUFBSSxHQUFHLEdBQVUsQ0FBQyxDQUFDO0lBQ25CLEtBQWlCLFVBQUssRUFBTCxlQUFLLEVBQUwsbUJBQUssRUFBTCxJQUFLO1FBQWpCLElBQUksSUFBSTtRQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQUE7SUFFMUMsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1osS0FBbUIsVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUssRUFBRSxDQUFDO1FBQXRCLElBQU0sSUFBSTtRQUNYLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2xCLElBQUksTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNMLENBQUM7SUFDRCxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDO0FBRUQsV0FBVztBQUNYLFNBQWdCLGFBQWEsQ0FBSSxLQUFVLEVBQUUsSUFBcUI7O0lBQXJCLG1DQUFxQjtJQUM5RCxJQUFJLGFBQWEscUJBQU8sS0FBSyxPQUFDLENBQUMsQ0FBQyxxQkFBcUI7SUFDckQsS0FBSyxJQUFJLENBQUMsR0FBRyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDaEQsYUFBYTtRQUNiLElBQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdCLFVBQVU7UUFDVixLQUF1QyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBMUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxVQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBeUM7SUFDaEYsQ0FBQztJQUNELE9BQU8sYUFBYSxDQUFDLENBQUMsZ0JBQWdCO0FBQzFDLENBQUM7QUFFRCxhQUFhO0FBQ2IsU0FBZ0IsV0FBVyxDQUFDLE1BQWM7SUFDdEMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2IsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUU7UUFBRSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDckQsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBQ0QsU0FBZ0IsZ0JBQWdCLENBQUMsTUFBYztJQUMzQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDYixLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRTtRQUFFLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO0lBQzFELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQUNELFNBQWdCLGdCQUFnQixDQUFDLE1BQWM7SUFDM0MsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2IsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUU7UUFBRSxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztJQUMxRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFDRCxTQUFnQixpQkFBaUI7SUFDN0IsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7SUFDeEIsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBQ0QsU0FBZ0IsaUJBQWlCO0lBQzdCLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO0lBQ3hCLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUNELFNBQWdCLGVBQWU7SUFDM0IsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDdkIsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBQ0QsU0FBZ0IsWUFBWTtJQUN4QixJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztJQUN4QixJQUFJLEdBQUcsR0FBRyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqRCxJQUFJLEdBQUcsR0FBRyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBQyxHQUFHLEdBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEQsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBQyxHQUFHLEdBQUMsRUFBRSxDQUFDLENBQUM7QUFDMUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JKRCwrRUFBbUM7QUFDbkMsMkZBQXVDO0FBQ3ZDLHNFQUFnQztBQUVoQyxJQUFJLFdBQVcsR0FBRyxtQkFBTyxDQUFDLDZDQUFnQixDQUFDLENBQUM7QUFDNUMsSUFBSSxXQUFXLEdBQUcsbUJBQU8sQ0FBQyw2Q0FBZ0IsQ0FBQyxDQUFDO0FBRTVDLElBQUksWUFBWSxHQUFHLG1CQUFPLENBQUMsb0NBQWUsQ0FBQyxDQUFDO0FBQzVDLElBQUksTUFBTSxHQUFHLG1CQUFPLENBQUMsc0JBQVEsQ0FBQyxDQUFDO0FBRS9CLElBQU0sR0FBRyxHQUFHLHFCQUFPLEdBQUUsQ0FBQztBQUV0QixvQkFBb0I7QUFDcEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNoRCxHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUU5QixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztBQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsTUFBTSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUV4RCw2QkFBNkI7QUFDN0Isc0RBQXNEO0FBQ3RELEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRWhELElBQU0sVUFBVSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDcEMsVUFBVSxDQUFDLEdBQUcsQ0FDWixHQUFHLEVBQ0gsVUFBTyxHQUFvQixFQUFFLEdBQXFCOztRQUNoRCxHQUFHLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7OztLQUMzQyxDQUNGLENBQUM7QUFDRixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBTyxVQUFVLENBQUMsQ0FBQztBQUM5QixHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUMvQixHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUUvQix5Q0FBeUM7QUFDekMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFTLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtJQUN0RixJQUFJLENBQUMseUJBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLENBQUMsQ0FBQyxDQUFDO0FBRUgsZ0JBQWdCO0FBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBUyxHQUFRLEVBQUUsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO0lBQ2hHLGtEQUFrRDtJQUNsRCxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ2pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFbkUsd0JBQXdCO0lBQ3hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQztJQUM5QixHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RCLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZELEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBcUIsSUFBSSxDQUFFLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUMsQ0FBQztBQUVIOztHQUVHO0FBRUgsU0FBUyxhQUFhLENBQUMsR0FBUTtJQUM3QixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRTdCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDaEIsYUFBYTtRQUNiLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2QsY0FBYztRQUNkLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVELHFCQUFlLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzdCbkIsMEJBTUM7QUFHRCwwQkFJQztBQTVERCxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDdEIsY0FBYztBQUVkLHVCQUF1QjtBQUN2Qiw0SEFBd0U7QUFFeEUsY0FBYztBQUNkLHNIQUFzRTtBQUV0RSxhQUFhO0FBQ2Isa0lBQTBFO0FBRTFFLFdBQVc7QUFDWCw2R0FBbUU7QUFFbkUsYUFBYTtBQUNiLDBHQUFrRTtBQUVsRSxZQUFZO0FBQ1osMEdBQW1FO0FBRW5FLHVCQUF1QjtBQUN2QixzSEFBOEU7QUF3QjlFLHVDQUF1QztBQUN2QyxTQUFnQixPQUFPLENBQUMsR0FBc0I7SUFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsSUFBTyxJQUFJLEdBQUcsUUFBUSxFQUFFLENBQUM7SUFDekIsSUFBTyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLElBQU8sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkMsT0FBTyxXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFFRCw4QkFBOEI7QUFDOUIsU0FBZ0IsT0FBTyxDQUFDLEdBQXNCO0lBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLElBQU8sSUFBSSxHQUFHLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLE9BQU8sV0FBVyxDQUFDLENBQUMsRUFBRyxJQUFJLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBR0QsOENBQThDO0FBQzlDLFlBQVk7QUFDWiw4Q0FBOEM7QUFFOUMsU0FBUyxVQUFVLENBQUMsSUFBWSxFQUFFLElBQWM7SUFDNUMsSUFBTSxTQUFTLEdBQWEsRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztJQUNuRCxLQUFrQixVQUFJLEVBQUosYUFBSSxFQUFKLGtCQUFJLEVBQUosSUFBSTtRQUFqQixJQUFNLEdBQUc7UUFBVSxTQUFTLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQztLQUFBO0lBQzlDLE9BQU8sU0FBUyxDQUFDO0FBQ3JCLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxJQUFZLEVBQUUsSUFBZ0I7SUFDL0MsSUFBTSxTQUFTLEdBQWEsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztJQUVoRCxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO1FBQ2hDLE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDO1NBQU0sQ0FBQztRQUNKLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLFNBQVMsQ0FBQyxJQUFJLEdBQUksV0FBVyxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxJQUFJLEdBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsSUFBWSxFQUFFLElBQWM7SUFDN0MsSUFBTSxTQUFTLEdBQWEsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztJQUVoRCxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO1FBQ2hDLE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDO1NBQU0sQ0FBQztRQUNKLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLFNBQVMsQ0FBQyxJQUFJLEdBQUksV0FBVyxDQUFDO1FBRTlCLElBQU0sVUFBVSxHQUFnQixFQUFFLENBQUM7UUFDbkMsS0FBa0IsVUFBSSxFQUFKLGFBQUksRUFBSixrQkFBSSxFQUFKLElBQUksRUFBRSxDQUFDO1lBQXJCLElBQU0sSUFBSTtZQUNWLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUNELFNBQVMsQ0FBQyxJQUFJLEdBQUksRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLENBQUM7UUFDckMsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLFFBQVE7SUFDYixJQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7SUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxlQUFNLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFFRCxTQUFTLFFBQVEsQ0FBQyxJQUFhLEVBQUUsSUFBWTtJQUN6QyxPQUFPLElBQUksdUJBQVUsQ0FBQztRQUNsQixTQUFTLEVBQUUsRUFBRSxDQUFDLEdBQUc7UUFDakIsU0FBUyxFQUFFLEdBQUc7UUFDZCxTQUFTLEVBQUUsR0FBRztRQUNkLFNBQVMsRUFBRSxHQUFHO1FBRWQsUUFBUSxFQUFJLEVBQUU7UUFDZCxRQUFRLEVBQUksRUFBRTtRQUNkLFFBQVEsRUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzQixRQUFRLEVBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFbkMsS0FBSztRQUNHLEtBQUssRUFBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFO0tBQzFDLENBQUMsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLFFBQVE7SUFDYixJQUFNLElBQUksR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztJQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBQyxDQUFDLENBQUM7SUFFcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLGVBQU0sRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLElBQWE7SUFDM0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztJQUM5QixLQUFLO0lBQ0QsSUFBTSxHQUFHLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7SUFDakMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUNQLElBQUksRUFBSSxNQUFNO1FBQ2QsSUFBSSxFQUFLLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDeEIsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDbkIsT0FBTyxFQUFFLElBQUksdUJBQVUsQ0FBQztZQUNwQixHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsQ0FBQztTQUNULENBQUM7UUFDRixRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtLQUN2QixDQUFDLENBQUM7SUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7SUFDcEMsS0FBSztJQUNELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFbEIsZ0VBQWdFO0lBQ2hFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxlQUFNLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFHRCxpRkFBaUY7QUFDakYsaUZBQWlGO0FBQ2pGLDJFQUEyRTtBQUMzRSxpRkFBaUY7QUFDakYsaUZBQWlGO0FBRWpGLElBQUksRUFBZSxDQUFDO0FBQ3BCLElBQUksRUFBcUIsQ0FBQztBQUUxQixTQUFTLElBQUksQ0FBQyxHQUFzQjtJQUNoQyxFQUFFLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQUN2QixFQUFFLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxPQUFPO0FBQ1gsQ0FBQztBQUVELDhDQUE4QztBQUM5QyxLQUFLO0FBQ0wsZUFBZTtBQUNmLEtBQUs7QUFDTCw4Q0FBOEM7QUFFOUMsVUFBVTtBQUNWO0lBZUk7UUFaTyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixrQkFBYSxHQUFPLENBQUMsQ0FBQztRQUN0QixxQkFBZ0IsR0FBSSxDQUFDLENBQUM7UUFDdEIsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBRXRCLGVBQVUsR0FBYyxFQUFFLENBQUM7UUFFM0IsZUFBVSxHQUFjLEVBQUUsQ0FBQztRQUUzQixXQUFNLEdBQWtCLEVBQUUsQ0FBQztRQUc5QixJQUFJLENBQUMsR0FBRyxHQUFJLElBQUksMkJBQVksQ0FBRSxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQztBQUVELFlBQVk7QUFDWjtJQU1JLDJCQUFtQixHQUFnQzs7UUFKNUMsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixRQUFHLEdBQVksQ0FBQyxDQUFDO1FBQ2pCLGNBQVMsR0FBcUIsRUFBRSxDQUFDO1FBR3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLElBQUksbUNBQUksU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLElBQUksTUFBSyxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLEdBQUcsR0FBSSxJQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsR0FBRyxNQUFNLFNBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxTQUFTLG1DQUFJLFNBQVMsQ0FBQztRQUNyRCxzRkFBc0Y7SUFDbEYsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQztBQUVEOzs7RUFHRTs7Ozs7Ozs7Ozs7O0FDMU9GLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JkLG9CQVlDO0FBb0NELG9CQWdCQztBQXFDRCxvQkFrQkM7QUFwSkQsdUJBQXVCO0FBQ3ZCLDRIQUFxRTtBQUVyRSxjQUFjO0FBQ2QsNkZBQThDO0FBSTlDLHNIQUFtRjtBQUNuRiwrSEFBc0Y7QUFHdEYsSUFBSyxNQUFrQixDQUFDO0FBaUJ4QixTQUFzQixJQUFJLENBQUMsR0FBc0I7Ozs7O3dCQUM3QyxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDOztvQkFBZixTQUFlLENBQUM7b0JBR0cscUJBQU0sNkJBQWEsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQzs7b0JBQXhFLFVBQVUsR0FBRyxTQUEyRDtvQkFDOUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7d0JBQ2xCLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzlCLENBQUM7eUJBQU0sQ0FBQzt3QkFDSixPQUFPLEdBQUcsYUFBYSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztvQkFDM0MsQ0FBQztvQkFDRCxJQUFJLEVBQUUsQ0FBQztvQkFDUCxzQkFBTyxPQUFPLEVBQUM7Ozs7Q0FDbEI7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQStCRTtBQUdGLFNBQXNCLElBQUksQ0FBQyxHQUFzQjs7Ozs7d0JBQzdDLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUM7O29CQUFmLFNBQWUsQ0FBQztvQkFDVixHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztvQkFHbkIsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ2QsS0FBSyxVQUFVOzRCQUFPLEdBQUcsR0FBRyxHQUFHLENBQUM7NEJBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQzs0QkFBQyxNQUFNO3dCQUNyRCxLQUFLLGNBQWM7NEJBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQzs0QkFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDOzRCQUFDLE1BQU07d0JBQ3JELEtBQUssU0FBUzs0QkFBUSxHQUFHLEdBQUcsR0FBRyxDQUFDOzRCQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7NEJBQUMsTUFBTTt3QkFDckQsS0FBSyxhQUFhOzRCQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7NEJBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQzs0QkFBQyxNQUFNO3dCQUNyRCxLQUFLLGNBQWM7NEJBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7NEJBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzs0QkFBQyxNQUFNO3dCQUNyRCxPQUFPLENBQUMsQ0FBYyxzQkFBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUM7b0JBQ2xELENBQUM7b0JBQ2UscUJBQU0sS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDOztvQkFBcEMsT0FBTyxHQUFHLFNBQTBCO29CQUMxQyxJQUFJLEVBQUUsQ0FBQztvQkFDUCxzQkFBTyxPQUFPLEVBQUM7Ozs7Q0FDbEI7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQStCRTtBQUdGLFNBQXNCLElBQUksQ0FBQyxHQUFzQjs7Ozs7O3dCQUM3QyxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDOztvQkFBZixTQUFlLENBQUM7b0JBQ1YsR0FBRyxHQUFJLGNBQUUsQ0FBQyxJQUFJLDBDQUFFLFNBQVMsbUNBQUUsQ0FBQyxDQUFDLENBQUM7b0JBSXBDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUNkLEtBQUssVUFBVTs0QkFBTyxHQUFHLEdBQUcsR0FBRyxDQUFDOzRCQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7NEJBQUMsS0FBSyxHQUFFLHVCQUF1QixDQUFDOzRCQUFFLE1BQU07d0JBQ3RGLEtBQUssY0FBYzs0QkFBRyxHQUFHLEdBQUcsR0FBRyxDQUFDOzRCQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7NEJBQUMsS0FBSyxHQUFFLHFCQUFxQixDQUFDOzRCQUFJLE1BQU07d0JBQ3RGLEtBQUssU0FBUzs0QkFBUSxHQUFHLEdBQUcsR0FBRyxDQUFDOzRCQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7NEJBQUMsS0FBSyxHQUFFLG9CQUFvQixDQUFDOzRCQUFLLE1BQU07d0JBQ3RGLEtBQUssYUFBYTs0QkFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDOzRCQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7NEJBQUMsS0FBSyxHQUFFLHdCQUF3QixDQUFDOzRCQUFDLE1BQU07d0JBQ3RGLEtBQUssY0FBYzs0QkFBRyxHQUFHLEdBQUcsY0FBRSxDQUFDLElBQUksMENBQUUsT0FBTyxtQ0FBRSxFQUFFLENBQUM7NEJBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzs0QkFBQyxLQUFLLEdBQUcsY0FBRSxDQUFDLElBQUksMENBQUUsS0FBSyxtQ0FBRSxLQUFLLENBQUM7NEJBQUUsTUFBTTt3QkFDbkcsT0FBTyxDQUFDLENBQWMsc0JBQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDO29CQUNsRCxDQUFDO29CQUVlLHFCQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUM7O29CQUEzQyxPQUFPLEdBQUcsU0FBaUM7b0JBQ2pELElBQUksRUFBRSxDQUFDO29CQUNQLHNCQUFPLE9BQU8sRUFBQzs7OztDQUNsQjtBQUtELDhDQUE4QztBQUM5QyxZQUFZO0FBQ1osOENBQThDO0FBRTlDLFNBQWUsS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFXLEVBQUUsS0FBYTs7Ozs7d0JBQ3hELHFCQUFNLFFBQVEsQ0FBQyxNQUFNLENBQUM7O29CQUF0QixTQUFzQixDQUFDO29CQUdQLHFCQUFNLDZCQUFhLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQzs7b0JBQTFFLE9BQU8sR0FBRyxTQUFnRTt5QkFDNUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBZix3QkFBZTtvQkFDZixxQkFBTSxXQUFXLENBQUMsTUFBTSxDQUFDOztvQkFBekIsU0FBeUIsQ0FBQztvQkFDMUIsc0JBQU8sYUFBYSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBQzt3QkFJdkIscUJBQU0sNkJBQWEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDOztvQkFBdkUsV0FBVyxHQUFHLFNBQXlEO3lCQUN6RSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFmLHdCQUFlO29CQUNmLHFCQUFNLFdBQVcsQ0FBQyxNQUFNLENBQUM7O29CQUF6QixTQUF5QixDQUFDO29CQUMxQixzQkFBTyxhQUFhLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUFDO3dCQUczQyxxQkFBTSxTQUFTLENBQUMsTUFBTSxDQUFDOztvQkFBdkIsU0FBdUIsQ0FBQztvQkFDeEIsc0JBQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsRUFBQzs7OztDQUV4QztBQUVELFNBQWUsS0FBSyxDQUFDLEdBQVcsRUFBRSxPQUFlLEVBQUUsS0FBYSxFQUFFLEtBQWE7Ozs7OztvQkFDM0UsSUFBSSxFQUFFLENBQUMsSUFBSSxLQUFLLFNBQVM7d0JBQUUsc0JBQU8sYUFBYSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBQztvQkFDbEUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO29CQUN4QixFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBSyxPQUFPLENBQUM7b0JBQzVCLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFPLEtBQUssQ0FBQztvQkFDOUIsOERBQThEO29CQUMxRCxxQkFBTSxRQUFRLENBQUMsTUFBTSxDQUFDOztvQkFEMUIsOERBQThEO29CQUMxRCxTQUFzQixDQUFDO29CQUdQLHFCQUFNLDZCQUFhLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQzs7b0JBQTlFLE9BQU8sR0FBRyxTQUFvRTt5QkFDaEYsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBZix3QkFBZTtvQkFDZixxQkFBTSxXQUFXLENBQUMsTUFBTSxDQUFDOztvQkFBekIsU0FBeUIsQ0FBQztvQkFDMUIsc0JBQU8sYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFDOzt5QkFJMUMsUUFBTyxHQUFHLENBQUMsR0FBWCx3QkFBVztvQkFDSSxxQkFBTSw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7O29CQUFoRSxNQUFNLEdBQUcsU0FBdUQ7eUJBQ2xFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQWYsd0JBQWU7b0JBQ2YscUJBQU0sV0FBVyxDQUFDLE1BQU0sQ0FBQzs7b0JBQXpCLFNBQXlCLENBQUM7b0JBQzFCLHNCQUFPLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBQzt3QkFJbkMscUJBQU0sNkJBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQzs7b0JBQWhFLE1BQU0sR0FBRyxTQUF1RDt5QkFDbEUsT0FBTSxLQUFLLEtBQUssR0FBaEIseUJBQWdCO29CQUNoQixxQkFBTSxXQUFXLENBQUMsTUFBTSxDQUFDOztvQkFBekIsU0FBeUIsQ0FBQztvQkFDMUIsc0JBQU8sYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFDO3lCQUc5QyxxQkFBTSxTQUFTLENBQUMsTUFBTSxDQUFDOztvQkFBdkIsU0FBdUIsQ0FBQztvQkFDeEIsc0JBQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUM7Ozs7Q0FDcEM7QUFFRCxTQUFTLGFBQWEsQ0FBQyxJQUFZLEVBQUUsSUFBMEI7SUFDM0QsSUFBSSxPQUFpQixDQUFDO0lBRXRCLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7UUFDaEMsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztTQUFNLENBQUM7UUFDSixPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUM1QixJQUFJLElBQUksS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUNyQixPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqQyxDQUFDO2FBQU0sQ0FBQztZQUNKLE9BQU8sQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQzdCLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxPQUFPLENBQUM7QUFDbkIsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLElBQVksRUFBRSxTQUF1QjtJQUN4RCxJQUFJLE9BQWlCLENBQUM7SUFFdEIsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztRQUNoQyxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO1NBQU0sQ0FBQztRQUNKLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLHdDQUF3QztRQUNoQyxJQUFNLFNBQVMsR0FBb0IsRUFBRSxDQUFDO1FBQ3RDLEtBQXVCLFVBQVMsRUFBVCx1QkFBUyxFQUFULHVCQUFTLEVBQVQsSUFBUztZQUEzQixJQUFNLFFBQVE7WUFBZSxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUE7UUFDcEUsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDbEMsQ0FBQztJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUM7QUFJRCxTQUFTLFVBQVUsQ0FBQyxJQUFZO0lBQzVCLElBQU0sU0FBUyxHQUFhLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUM7SUFDbkQsS0FBa0IsVUFBeUIsRUFBekIsT0FBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUF6QixjQUF5QixFQUF6QixJQUF5QjtRQUF0QyxJQUFNLEdBQUc7UUFBK0IsU0FBUyxDQUFDLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDO0tBQUE7SUFDMUUsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQztBQUdEO0lBR0k7UUFGTyxVQUFLLEdBQWEsQ0FBQyxDQUFDO1FBQ3BCLFNBQUksR0FBYyxXQUFXLENBQUM7SUFDZixDQUFDO0lBQzNCLGtCQUFDO0FBQUQsQ0FBQztBQUVEO0lBR0kscUJBQW1CLEtBQWEsRUFBRSxJQUFZO1FBRnZDLFVBQUssR0FBYSxJQUFJLENBQUM7UUFDdkIsU0FBSSxHQUFjLE9BQU8sQ0FBQztRQUU3QixJQUFJLENBQUMsS0FBSyxHQUFJLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFLLElBQUksQ0FBQztJQUN2QixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDO0FBRUQsaUZBQWlGO0FBQ2pGLGlGQUFpRjtBQUNqRiwyRUFBMkU7QUFDM0UsaUZBQWlGO0FBQ2pGLGlGQUFpRjtBQUVqRixJQUFJLEVBQWUsQ0FBQztBQUNwQixJQUFJLEVBQXFCLENBQUM7QUFFMUIsU0FBZSxJQUFJLENBQUMsR0FBc0I7Ozs7O29CQUN0QyxFQUFFLEdBQU8sSUFBSSxXQUFXLEVBQUUsQ0FBQztvQkFDM0IsRUFBRSxHQUFPLElBQUksaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzNCLHFCQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFOztvQkFBekMsTUFBTSxHQUFHLFNBQWdDLENBQUM7b0JBRTFDLHNCQUFPOzs7O0NBQ1Y7QUFDRCxTQUFTLElBQUk7SUFDVCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2QsQ0FBQztBQUVELDhDQUE4QztBQUM5QyxLQUFLO0FBQ0wsZUFBZTtBQUNmLEtBQUs7QUFDTCw4Q0FBOEM7QUFFMUMsVUFBVTtBQUNWO0lBV0k7UUFSTyxZQUFPLEdBQWEsS0FBSyxDQUFDO1FBQzFCLFlBQU8sR0FBYyxJQUFJLENBQUM7UUFDMUIsWUFBTyxHQUFhLFFBQVEsQ0FBQztRQUM3QixZQUFPLEdBQWEsV0FBVyxDQUFDO1FBQ2hDLFlBQU8sR0FBYSxVQUFVLENBQUM7UUFLbEMsSUFBSSxDQUFDLEdBQUcsR0FBTyxJQUFJLDJCQUFZLENBQUUsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXZELElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQUssQ0FBQyxVQUFVLENBQUM7WUFDNUIsSUFBSSxFQUFPLElBQUksQ0FBQyxPQUFPO1lBQ3ZCLElBQUksRUFBTyxJQUFJLENBQUMsT0FBTztZQUN2QixJQUFJLEVBQU8sSUFBSSxDQUFDLE9BQU87WUFDdkIsUUFBUSxFQUFHLElBQUksQ0FBQyxPQUFPO1lBQ3ZCLFFBQVEsRUFBRyxJQUFJLENBQUMsT0FBTztZQUN2QixlQUFlLEVBQU0sRUFBRSxFQUFFLFlBQVk7WUFDckMsa0JBQWtCLEVBQUUsSUFBSTtZQUN4QixpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLFdBQVcsRUFBRSxJQUFJO1NBQ3BCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTSwwQkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDO0FBY08sWUFBWTtBQUNwQjtJQWNJLDJCQUFtQixHQUFnQzs7UUFiNUMsU0FBSSxHQUF5QixTQUFTLENBQUM7UUFFdkMsY0FBUyxHQUFvQixFQUFFLENBQUM7UUFDaEMsU0FBSSxHQUFnQyxTQUFTLENBQUM7UUFFOUMsUUFBRyxHQUFvQixDQUFDLENBQUM7UUFDekIsUUFBRyxHQUFtQixDQUFDLENBQUMsQ0FBQztRQUN6QixZQUFPLEdBQWUsQ0FBQyxDQUFDLENBQUM7UUFDekIsZUFBVSxHQUFZLEVBQUUsQ0FBQztRQUN6QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixlQUFVLEdBQVksRUFBRSxDQUFDO1FBQ3pCLGNBQVMsR0FBYSxFQUFFO1FBRzNCLElBQUksR0FBRyxLQUFLLFNBQVM7WUFBRSxPQUFPO1FBRTlCLElBQUksQ0FBQyxJQUFJLEdBQVUsU0FBRyxDQUFDLElBQUksbUNBQUksSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QyxJQUFJLENBQUMsR0FBRyxHQUFXLFNBQUcsQ0FBQyxHQUFHLG1DQUFLLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDeEMsSUFBSSxDQUFDLEdBQUcsR0FBVyxTQUFHLENBQUMsR0FBRyxtQ0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQU8sWUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsbUNBQVMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1RCxJQUFJLENBQUMsVUFBVSxHQUFJLFNBQUcsQ0FBQyxVQUFVLG1DQUFjLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDL0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFHLENBQUMsV0FBVyxtQ0FBYSxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxVQUFVLEdBQUksU0FBRyxDQUFDLFVBQVUsbUNBQWMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMvRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssU0FBUztZQUFLLElBQUksQ0FBQyxJQUFJLEdBQU0sSUFBSSx1QkFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQztBQUVMLCtDQUErQztBQUMvQyxlQUFlO0FBQ2Ysa0RBQWtEO0FBRzlDLFNBQWUsUUFBUSxDQUFDLE1BQWtCOzs7Ozs7O29CQUVsQyxxQkFBTSxNQUFNLENBQUMsZ0JBQWdCLEVBQUU7O29CQUEvQixTQUErQixDQUFDOzs7O29CQUVoQyxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsR0FBRyxLQUFHLENBQUMsQ0FBQztvQkFDaEQsc0JBQU8sS0FBSyxFQUFDO3dCQUVqQixzQkFBTyxJQUFJLEVBQUM7Ozs7Q0FDZjtBQUVELFNBQWUsU0FBUyxDQUFDLE1BQWtCOzs7Ozs7O29CQUVuQyxxQkFBTSxNQUFNLENBQUMsTUFBTSxFQUFFOztvQkFBckIsU0FBcUIsQ0FBQzs7OztvQkFFdEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEdBQUcsS0FBRyxDQUFDLENBQUM7b0JBQ2hELHNCQUFPLEtBQUssRUFBQzt3QkFFakIsc0JBQU8sSUFBSSxFQUFDOzs7O0NBQ2Y7QUFFRCxTQUFlLFdBQVcsQ0FBQyxNQUFrQjs7Ozs7OztvQkFFckMscUJBQU0sTUFBTSxDQUFDLFFBQVEsRUFBRTs7b0JBQXZCLFNBQXVCLENBQUM7Ozs7b0JBRXhCLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLG1CQUFtQixHQUFHLEtBQUcsQ0FBQyxDQUFDO29CQUNsRCxzQkFBTyxLQUFLLEVBQUM7d0JBRWpCLHNCQUFPLElBQUksRUFBQzs7OztDQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1ZMLG9CQWNDO0FBckVELElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQztBQUN0QixjQUFjO0FBRWQsdUJBQXVCO0FBQ3ZCLDRIQUF5RTtBQUV6RSxjQUFjO0FBQ2QsNkZBQW1DO0FBcUJuQztJQU1JLHFCQUFtQixHQUFXLEVBQUUsSUFBWSxFQUFFLE1BQWM7UUFMckQsVUFBSyxHQUFhLENBQUMsQ0FBQztRQUNwQixTQUFJLEdBQWMsRUFBRSxDQUFDO1FBQ3JCLFFBQUcsR0FBZSxDQUFDLENBQUMsQ0FBQztRQUNyQixTQUFJLEdBQWMsRUFBRSxDQUFDO1FBQ3JCLFdBQU0sR0FBWSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLEdBQUcsR0FBTSxHQUFHLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBSyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQztBQUVEO0lBTUkscUJBQW1CLEtBQWEsRUFBRSxJQUFZO1FBTHZDLFVBQUssR0FBYSxJQUFJLENBQUM7UUFDdkIsU0FBSSxHQUFjLE9BQU8sQ0FBQztRQUMxQixRQUFHLEdBQWUsQ0FBQyxDQUFDLENBQUM7UUFDckIsU0FBSSxHQUFjLEVBQUUsQ0FBQztRQUNyQixXQUFNLEdBQVksRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxLQUFLLEdBQUksS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUssSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUM7QUFHRCx1Q0FBdUM7QUFDdkMsU0FBc0IsSUFBSSxDQUFDLEdBQXNCOzs7Ozs7b0JBRzdDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFFTixFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFmLHdCQUFlO29CQUNmLEVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztvQkFDN0IsVUFBVSxHQUFHLElBQUksV0FBVyxDQUFDLEdBQUcsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDOzt3QkFFM0MscUJBQU0sVUFBVSxFQUFFOztvQkFBL0IsVUFBVSxHQUFHLFNBQWtCLENBQUM7OztvQkFHcEMsSUFBSSxFQUFFLENBQUM7b0JBQ1Asc0JBQU8sVUFBVSxFQUFDOzs7O0NBQ3JCO0FBR0QsOENBQThDO0FBQzlDLFlBQVk7QUFDWiw4Q0FBOEM7QUFFOUMsU0FBZSxVQUFVOzs7WUFDckIsSUFBSSxFQUFFLENBQUMsR0FBRyxLQUFLLFNBQVM7Z0JBQUUsc0JBQU8sSUFBSSxXQUFXLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxFQUFDO1lBRXZFLHNCQUFPLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBVTtvQkFDakMsSUFBSSxVQUFVLEtBQUssU0FBUyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzt3QkFDOUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO3dCQUM3QixPQUFPLElBQUksV0FBVyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztvQkFDOUMsQ0FBQztvQkFDRCxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQzt3QkFBRSxPQUFPLElBQUksV0FBVyxDQUFDLEdBQUcsRUFBRSwrQkFBd0IsRUFBRSxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUM7b0JBRXpGLE9BQU8sSUFBSSxXQUFXLENBQ2xCLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQ2hCLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ2xCLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQ3ZCLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQUc7b0JBQ1IsT0FBTyxJQUFJLFdBQVcsQ0FBQyxHQUFHLEVBQUUsYUFBYSxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUNyRCxDQUFDLENBQUMsRUFBQzs7O0NBQ047QUFVRCxTQUFlLFlBQVk7Ozs7OztvQkFDakIsR0FBRyxHQUFHLHFHQUdYLENBQUM7Ozs7b0JBR3VCLHFCQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFpQixHQUFHLEVBQUUsRUFBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBQyxDQUFDOztvQkFBdkUsVUFBVSxHQUFJLFVBQXlELElBQTdEO29CQUNqQixzQkFBTyxVQUFVLEVBQUM7OztvQkFFbEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsb0NBQW9DLEdBQUcsS0FBRyxDQUFDLENBQUM7b0JBQ25FLHNCQUFPLFNBQVMsRUFBQzs7Ozs7Q0FHeEI7QUFFRCxpRkFBaUY7QUFDakYsaUZBQWlGO0FBQ2pGLDJFQUEyRTtBQUMzRSxpRkFBaUY7QUFDakYsaUZBQWlGO0FBRWpGLElBQUksRUFBZSxDQUFDO0FBQ3BCLElBQUksRUFBcUIsQ0FBQztBQUUxQixTQUFTLElBQUksQ0FBQyxHQUFzQjtJQUNoQyxFQUFFLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQUN2QixFQUFFLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxPQUFPO0FBQ1gsQ0FBQztBQUNELFNBQVMsSUFBSTtJQUNULEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNkLENBQUM7QUFFRCw4Q0FBOEM7QUFDOUMsS0FBSztBQUNMLGVBQWU7QUFDZixLQUFLO0FBQ0wsOENBQThDO0FBRTlDLFVBQVU7QUFDVjtJQVdJO1FBUk8sWUFBTyxHQUFhLEtBQUssQ0FBQztRQUMxQixZQUFPLEdBQWMsSUFBSSxDQUFDO1FBQzFCLFlBQU8sR0FBYSxRQUFRLENBQUM7UUFDN0IsWUFBTyxHQUFhLFdBQVcsQ0FBQztRQUNoQyxZQUFPLEdBQWEsVUFBVSxDQUFDO1FBS2xDLElBQUksQ0FBQyxHQUFHLEdBQU8sSUFBSSwyQkFBWSxDQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV2RCxJQUFJLENBQUMsT0FBTyxHQUFHLGlCQUFLLENBQUMsVUFBVSxDQUFDO1lBQzVCLElBQUksRUFBTyxJQUFJLENBQUMsT0FBTztZQUN2QixJQUFJLEVBQU8sSUFBSSxDQUFDLE9BQU87WUFDdkIsSUFBSSxFQUFPLElBQUksQ0FBQyxPQUFPO1lBQ3ZCLFFBQVEsRUFBRyxJQUFJLENBQUMsT0FBTztZQUN2QixRQUFRLEVBQUcsSUFBSSxDQUFDLE9BQU87WUFDdkIsZUFBZSxFQUFNLEVBQUUsRUFBRSxZQUFZO1lBQ3JDLGtCQUFrQixFQUFFLElBQUk7WUFDeEIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixXQUFXLEVBQUUsSUFBSTtTQUNwQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00sMEJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQztBQUVELFlBQVk7QUFDWjtJQUlJLDJCQUFtQixHQUFnQzs7UUFGNUMsUUFBRyxHQUFZLENBQUMsQ0FBQyxDQUFDO1FBR3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLElBQUksbUNBQUksU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxHQUFHLEdBQUksSUFBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLEdBQUcsTUFBTSxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RixtRUFBbUU7SUFDL0QsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQztBQUVEOzs7RUFHRTs7Ozs7Ozs7Ozs7O0FDaE1GLGNBQWM7O0FBcURkLDBCQVNDO0FBR0QsMEJBV0M7QUFHRCwwQkFRQztBQXJGRCx1QkFBdUI7QUFDdkIsNEhBQXVFO0FBS3ZFLFdBQVc7QUFDWCxzSEFBaUY7QUFFakYsZ0JBQWdCO0FBQ2hCLGtJQUFvRjtBQUVwRixjQUFjO0FBQ2QsMEdBQTRFO0FBQzVFLHNIQUFnRixDQUFDLGtCQUFrQjtBQUVuRyxhQUFhO0FBQ2IsMEdBQWlFO0FBRWpFLFlBQVk7QUFDWiwwR0FBaUU7QUFFakUsdUJBQXVCO0FBQ3ZCLHNIQUFnRjtBQUVoRixpRkFBaUY7QUFDakYsaUZBQWlGO0FBQ2pGLDZFQUE2RTtBQUM3RSxpRkFBaUY7QUFDakYsaUZBQWlGO0FBRWpGLElBQUksRUFBZSxDQUFDO0FBQ3BCLElBQUksRUFBcUIsQ0FBQztBQWtCMUIsa0NBQWtDO0FBQ2xDLFNBQWdCLE9BQU8sQ0FBQyxHQUFzQjtJQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFVixJQUFNLGVBQWUsR0FBb0IsRUFBRSxDQUFDO0lBQzVDLEtBQUssSUFBTSxNQUFJLElBQUksRUFBRSxDQUFDLFFBQVE7UUFBRSxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNqRixPQUFPLFVBQVUsQ0FDYixDQUFDLEVBQ0QsRUFBQyxRQUFRLEVBQUUsZUFBZSxFQUFDLENBQzlCLENBQUM7QUFDTixDQUFDO0FBRUQsbUJBQW1CO0FBQ25CLFNBQWdCLE9BQU8sQ0FBQyxHQUFzQjtJQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFSixTQUFzQixXQUFXLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUE5QyxRQUFRLFVBQUUsT0FBTyxRQUE2QixDQUFDO0lBQ3RELE9BQU8sVUFBVSxDQUNiLENBQUMsRUFDRDtRQUNJLElBQUksRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFO1FBQ3ZCLEdBQUcsRUFBRyxPQUFPO0tBQ2hCLENBQ0osQ0FBQztBQUNOLENBQUM7QUFFRCx1Q0FBdUM7QUFDdkMsU0FBZ0IsT0FBTyxDQUFDLEdBQXNCO0lBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVKLFNBQXNCLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBcEMsUUFBUSxVQUFFLE9BQU8sUUFBbUIsQ0FBQztJQUM1QyxJQUFPLFFBQVEsR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELElBQU8sUUFBUSxHQUFHLFdBQVcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEQsSUFBTyxRQUFRLEdBQUcsV0FBVyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzQyxPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDO0FBR0QsOENBQThDO0FBQzlDLFlBQVk7QUFDWiw4Q0FBOEM7QUFFOUMsU0FBUyxVQUFVLENBQUMsSUFBWSxFQUFFLElBQWM7SUFDNUMsSUFBTSxTQUFTLEdBQWEsRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztJQUNuRCxLQUFrQixVQUFJLEVBQUosYUFBSSxFQUFKLGtCQUFJLEVBQUosSUFBSTtRQUFqQixJQUFNLEdBQUc7UUFBVSxTQUFTLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQztLQUFBO0lBQzlDLE9BQU8sU0FBUyxDQUFDO0FBQ3JCLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxJQUFZLEVBQUUsSUFBWTtJQUMxQyxJQUFNLFNBQVMsR0FBYSxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDO0lBRW5ELFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7UUFDaEMsT0FBTyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDRCxTQUFTLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztJQUM3QixTQUFTLENBQUMsSUFBSSxHQUFJLElBQUksQ0FBQztJQUV2QixPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsSUFBWSxFQUFFLElBQWdCO0lBQy9DLElBQU0sU0FBUyxHQUFhLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUM7SUFFbkQsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztRQUNoQyxPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNELFNBQVMsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO0lBQzdCLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRS9CLE9BQU8sU0FBUyxDQUFDO0FBQ3JCLENBQUM7QUFHRCxTQUFTLFdBQVcsQ0FBQyxJQUFZLEVBQUUsSUFBWTtJQUMzQyxPQUFPLElBQUksdUJBQVUsQ0FBQztRQUNsQixTQUFTLEVBQUUsRUFBRSxDQUFDLEdBQUc7UUFDakIsU0FBUyxFQUFFLEdBQUc7UUFDZCxTQUFTLEVBQUUsR0FBRztRQUNkLFNBQVMsRUFBRSxHQUFHO1FBRWQsUUFBUSxFQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFCLFFBQVEsRUFBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQixRQUFRLEVBQUcsRUFBRTtRQUNiLFFBQVEsRUFBRyxFQUFFO1FBRWIsS0FBSyxFQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUU7S0FDckMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLFNBQXNCO0lBQXRCLDBDQUFzQjtJQUN2QyxJQUFJLElBQVksQ0FBQztJQUNqQixJQUFJLFNBQVMsSUFBSSxFQUFFLEVBQUUsQ0FBQztRQUNsQixJQUFJLEdBQUcsSUFBSSxlQUFNLENBQUM7WUFDZCxNQUFNLEVBQUksUUFBUTtZQUNsQixRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxFQUFFO1lBQ1osUUFBUSxFQUFFLEVBQUUsQ0FBQyxpQkFBaUI7U0FDckMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztTQUFNLENBQUM7UUFDSixJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksR0FBRyxJQUFJLGVBQU0sQ0FBQztZQUNkLE1BQU0sRUFBSSxRQUFRLENBQUMsTUFBTTtZQUN6QixRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU07WUFDekIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxNQUFNO1lBQ3pCLFFBQVEsRUFBRSxRQUFRLENBQUMsTUFBTTtTQUM1QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdkIsQ0FBQztBQUVELHdCQUF3QjtBQUN4QixTQUFTLFdBQVc7SUFDaEIsSUFBTSxJQUFJLEdBQWEsRUFBRSxDQUFDO0lBQzFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZUFBTSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLElBQVksRUFBRSxHQUFlO0lBQ2xEOzs7Ozs7TUFNRTtJQUNGLElBQU0sSUFBSSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7SUFDMUIsSUFBTSxHQUFHLEdBQUksSUFBSSwrQkFBYyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2pDLE1BQU0sRUFBSyxNQUFNO1FBQ2pCLE1BQU0sRUFBTSxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQzNCLFNBQVMsRUFBRyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ3RCLFNBQVMsRUFBRyxHQUFHO1FBQ2YsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDdEI7Ozs7Ozs7RUFPTjtLQUNHLENBQUMsQ0FBQztJQUdILElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztJQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksZUFBTSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUdELGlGQUFpRjtBQUNqRixpRkFBaUY7QUFDakYsMkVBQTJFO0FBQzNFLGlGQUFpRjtBQUNqRixpRkFBaUY7QUFFakYsU0FBUyxJQUFJLENBQUMsR0FBc0I7SUFDaEMsRUFBRSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7SUFDdkIsRUFBRSxHQUFHLElBQUksaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsT0FBTztBQUNYLENBQUM7QUFFRCw4Q0FBOEM7QUFDOUMsS0FBSztBQUNMLGVBQWU7QUFDZixLQUFLO0FBQ0wsOENBQThDO0FBRTlDLFVBQVU7QUFDVjtJQWNJO1FBWE8sYUFBUSxHQUFzQyxFQUFFLENBQUM7UUFHakQsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUV4QixnQkFBVyxHQUFTLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFTLEVBQUUsQ0FBQztRQUN2QixrQkFBYSxHQUFPLENBQUMsQ0FBQztRQUN0QixxQkFBZ0IsR0FBSSxDQUFDLENBQUM7UUFDdEIsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBR3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSwyQkFBWSxDQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVuRCxJQUFNLFFBQVEsR0FBRyx1QkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFDLEtBQWlCLFVBQVEsRUFBUixxQkFBUSxFQUFSLHNCQUFRLEVBQVIsSUFBUTtZQUFwQixJQUFNLEVBQUU7WUFBYyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FBQTtRQUMvRDs7O1VBR0U7UUFDRjs7Ozs7Ozs7O1VBU0U7UUFDTSxJQUFJLENBQUMsSUFBSSxHQUFXLElBQUksZUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsd0JBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUM7QUFHRCxZQUFZO0FBQ1o7SUFLQTs7O01BR0U7SUFHRSwyQkFBbUIsR0FBc0I7O1FBVGxDLFFBQUcsR0FBb0IsQ0FBQyxDQUFDO1FBQ3pCLGNBQVMsR0FBYSxFQUFFLENBQUM7UUFTNUIsSUFBSSxDQUFDLElBQUksR0FBUSxTQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsSUFBSSxtQ0FBSSxTQUFTLENBQUM7UUFDeEMsSUFBSSxDQUFDLEdBQUcsR0FBUyxJQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsR0FBRyxNQUFNLFNBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxTQUFTLG1DQUFJLEVBQUUsQ0FBQztRQUM5Qzs7O1VBR0U7SUFDRSxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDclNELHVHQUFzRDtBQUN0RCwyRkFBdUM7QUFFdkMsK0VBQThCO0FBQzlCLElBQUksTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFOUIsd0JBQXdCO0FBQ3hCLE1BQU0sQ0FBQyxHQUFHLENBQUUsR0FBRyxFQUFFLFVBQU8sR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOztRQUM3RixHQUFHLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7OztLQUNwQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7O1FBQ3BHLElBQUksQ0FBQztZQUdHLEdBQUcsR0FBRyw0QkFBTyxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUF1QixHQUFHLENBQUUsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyx5QkFBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekIsQ0FBQzs7O0tBQ0YsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBRSxVQUFVLEVBQUUsVUFBTyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1FBQ3BHLEdBQUcsQ0FBQyxJQUFJLENBQUMsd0NBQXdDLENBQUMsQ0FBQzs7O0tBQ3BELENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQU8sR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOzs7UUFDcEcsSUFBSSxDQUFDO1lBR0csR0FBRyxHQUFHLDRCQUFPLEVBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQXVCLEdBQUcsQ0FBRSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLHlCQUFXLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QixDQUFDOzs7S0FDRixDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsR0FBRyxDQUFFLFVBQVUsRUFBRSxVQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7UUFDcEcsR0FBRyxDQUFDLElBQUksQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDOzs7S0FDdkQsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q3hCLHVHQUF3RDtBQUN4RCxzSEFBNkQ7QUFDN0QsMkZBQStDO0FBRS9DLCtFQUE4QjtBQUM5QixJQUFJLE1BQU0sR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTlCLHdCQUF3QjtBQUN4QixNQUFNLENBQUMsR0FBRyxDQUFFLEdBQUcsRUFBRSxVQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7UUFDN0YsR0FBRyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDOzs7S0FDeEMsQ0FBQyxDQUFDO0FBRUg7O0VBRUU7QUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7Ozs7O2dCQUluRixxQkFBTSx5QkFBSSxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7O2dCQUEzQixJQUFJLEdBQUcsU0FBb0I7Z0JBQ2pDLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUUsQ0FBQztvQkFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQkFBYyxJQUFJLENBQUMsS0FBSyxlQUFLLElBQUksQ0FBQyxJQUFJLFNBQU0sQ0FBQyxDQUFDO29CQUM1RCxJQUFJLENBQUMseUJBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7Ozs7Z0JBRTNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQXlCLEtBQUcsQ0FBRSxDQUFDLENBQUM7Z0JBQzVDLElBQUksQ0FBQyx5QkFBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Ozs7O0tBRTFCLENBQUMsQ0FBQztBQUNILE1BQU0sQ0FBQyxHQUFHLENBQUUsUUFBUSxFQUFFLFVBQU8sR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOztRQUNsRyxHQUFHLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7OztLQUN6QyxDQUFDLENBQUM7QUFHSDs7RUFFRTtBQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQU8sR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOzs7Ozs7Z0JBSW5GLHFCQUFNLHlCQUFJLEVBQUMsR0FBRyxDQUFDLElBQUksQ0FBQzs7Z0JBQTNCLElBQUksR0FBRyxTQUFvQjtnQkFDakMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRSxDQUFDO29CQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFjLElBQUksQ0FBQyxLQUFLLGVBQUssSUFBSSxDQUFDLElBQUksU0FBTSxDQUFDLENBQUM7b0JBQzVELElBQUksQ0FBQyx5QkFBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzs7OztnQkFFM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBeUIsS0FBRyxDQUFFLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLHlCQUFXLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7Ozs7S0FFMUIsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBRSxRQUFRLEVBQUUsVUFBTyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1FBQ2xHLEdBQUcsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQzs7O0tBQ3pDLENBQUMsQ0FBQztBQUdIOztFQUVFO0FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBTyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7Ozs7OztnQkFJbkYscUJBQU0seUJBQUksRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFDOztnQkFBM0IsSUFBSSxHQUFHLFNBQW9CO2dCQUNqQyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFLENBQUM7b0JBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMscUJBQWMsSUFBSSxDQUFDLEtBQUssZUFBSyxJQUFJLENBQUMsSUFBSSxTQUFNLENBQUMsQ0FBQztvQkFDNUQsSUFBSSxDQUFDLHlCQUFXLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7O2dCQUUzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUF5QixLQUFHLENBQUUsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLENBQUMseUJBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7OztLQUUxQixDQUFDLENBQUM7QUFDSCxNQUFNLENBQUMsR0FBRyxDQUFFLFFBQVEsRUFBRSxVQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7UUFDbEcsR0FBRyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDOzs7S0FDekMsQ0FBQyxDQUFDO0FBSUg7O0VBRUU7QUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7Ozs7O2dCQUlsRixxQkFBTSw4QkFBSSxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7O2dCQUEzQixJQUFJLEdBQUcsU0FBb0I7Z0JBQ2pDLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUUsQ0FBQztvQkFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQkFBYyxJQUFJLENBQUMsS0FBSyxlQUFLLElBQUksQ0FBQyxJQUFJLFNBQU0sQ0FBQyxDQUFDO29CQUM1RCxJQUFJLENBQUMseUJBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQUVELEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDOzs7O2dCQUUvQixPQUFPLENBQUMsS0FBSyxDQUFDLDhCQUF1QixLQUFHLENBQUUsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLENBQUMseUJBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7OztLQUUxQixDQUFDLENBQUM7QUFDSCxNQUFNLENBQUMsR0FBRyxDQUFFLE9BQU8sRUFBRSxVQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7UUFDakcsSUFBSSxDQUFDO1lBQ1AscUZBQXFGO1lBRWpGLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQXVCLEdBQUcsQ0FBRSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLHlCQUFXLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QixDQUFDOzs7S0FFRixDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIeEIsdUdBQW1FO0FBQ25FLDJGQUF1QztBQUV2QywrRUFBOEI7QUFDOUIsSUFBSSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU5Qix3QkFBd0I7QUFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsVUFBTyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1FBQzdGLEdBQUcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQzs7O0tBQ3BDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQU8sR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOzs7UUFDcEcsSUFBSSxDQUFDO1lBR0csR0FBRyxHQUFHLDRCQUFPLEVBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQXVCLEdBQUcsQ0FBRSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLHlCQUFXLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QixDQUFDOzs7S0FDRixDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsR0FBRyxDQUFFLFVBQVUsRUFBRSxVQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7UUFDcEcsR0FBRyxDQUFDLElBQUksQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDOzs7S0FDcEQsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBTyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7OztRQUNwRyxJQUFJLENBQUM7WUFHRyxHQUFHLEdBQUcsNEJBQU8sRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBdUIsR0FBRyxDQUFFLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMseUJBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7OztLQUNGLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxHQUFHLENBQUUsVUFBVSxFQUFFLFVBQU8sR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOztRQUNwRyxHQUFHLENBQUMsSUFBSSxDQUFDLDJDQUEyQyxDQUFDLENBQUM7OztLQUN2RCxDQUFDLENBQUM7QUFHSCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7O1FBQ3BHLElBQUksQ0FBQztZQUdHLEdBQUcsR0FBRyw0QkFBTyxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUF3QixHQUFHLENBQUUsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyx5QkFBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekIsQ0FBQzs7O0tBQ0YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLEdBQUcsQ0FBRSxVQUFVLEVBQUUsVUFBTyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1FBQ3BHLEdBQUcsQ0FBQyxJQUFJLENBQUMseUNBQXlDLENBQUMsQ0FBQzs7O0tBQ3JELENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0R4QiwrRUFBOEI7QUFFOUIsSUFBSSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM5QixJQUFJLGFBQWEsR0FBRyxtQkFBTyxDQUFDLDBDQUFXLENBQUMsQ0FBQztBQUN6QyxJQUFJLGFBQWEsR0FBRyxtQkFBTyxDQUFDLDBDQUFXLENBQUMsQ0FBQztBQUN6QyxJQUFJLGFBQWEsR0FBRyxtQkFBTyxDQUFDLDBDQUFXLENBQUMsQ0FBQztBQUV6QyxlQUFlO0FBQ2YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUksYUFBYSxDQUFDLENBQUM7QUFDckMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUksYUFBYSxDQUFDLENBQUM7QUFDckMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUksYUFBYSxDQUFDLENBQUM7QUFFckMsd0JBQXdCO0FBQ3hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO0lBQzlGLEdBQUcsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJ4QiwrRUFBOEI7QUFDOUIsSUFBSSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU5Qix3QkFBd0I7QUFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBUyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Ozs7Ozs7Ozs7O0FDUnhCOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9tZGwvQ19HdWlsZC50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfbWRsL0NfSGVyby50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfbWRsL0NfSGVyb0FiaWxpdHkudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX21kbC9DX0xvY2F0aW9uLnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9tZGwvQ19NYXplLnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9tZGwvQ19NYXplQ2VsbC50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfbWRsL0NfTWF6ZUluZm8udHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX21kbC9DX01hemVPYmoudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX21kbC9DX01hemVPYmpWaWV3LnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9tZGwvQ19Nb3ZhYmxlUG9pbnQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX21kbC9DX1BvaW50LnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9tZGwvQ19Qb2ludERpci50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfbWRsL0NfUG9pbnRTZXQyRC50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfbWRsL0NfUmFuZ2UudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX21kbC9DX1NhdmVEYXRhLnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9tZGwvQ19TYXZlSW5mby50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfbWRsL0NfVGVhbS50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfbWRsL0NfVGVhbVZpZXcudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX21kbC9DX1dhbGtlci50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfbWRsL1RfRGlyZWN0aW9uLnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9tZGwvVF9NektpbmQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX3JkYi9DX0d1aWxkUkRCLnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9yZGIvQ19IZXJvUkRCLnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9yZGIvQ19NYXplUkRCLnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9yZGIvQ19NdnB0UkRCLnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9yZGIvQ19TYXZlRGF0YVJEQi50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfcmRiL0NfVGVhbVJEQi50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfdXRsL0NfRHNwTWVzc2FnZS50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfdXRsL0ZfTWF0aC50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfdXRsL0ZfUmFuZC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL21haS8uL3NyYy9saWIvX0pTT05fbWFpX2d1bGQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2xpYi9fSlNPTl9tYWlfbGRzdi50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvbGliL19KU09OX21haV9sZHN2X3Rlc3QudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2xpYi9fSlNPTl9tYWlfbWF6ZS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvcm91dGVzL21haUd1bGQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL3JvdXRlcy9tYWlMZFN2LnRzIiwid2VicGFjazovL21haS8uL3NyYy9yb3V0ZXMvbWFpTWF6ZS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvcm91dGVzL21haWV4LnRzIiwid2VicGFjazovL21haS8uL3NyYy9yb3V0ZXMvdXNlcnMudHMiLCJ3ZWJwYWNrOi8vbWFpL2V4dGVybmFsIGNvbW1vbmpzIFwiY29va2llLXBhcnNlclwiIiwid2VicGFjazovL21haS9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9tYWkvZXh0ZXJuYWwgY29tbW9uanMgXCJodHRwLWVycm9yc1wiIiwid2VicGFjazovL21haS9leHRlcm5hbCBjb21tb25qcyBcIm1vcmdhblwiIiwid2VicGFjazovL21haS9leHRlcm5hbCBjb21tb25qcyBcIm15c3FsMi9wcm9taXNlXCIiLCJ3ZWJwYWNrOi8vbWFpL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vbWFpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21haS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL21haS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbWFpL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IElfTG9jYXRlLCBUX0xja2QgfSAgICAgIGZyb20gXCIuL0NfTG9jYXRpb25cIjtcclxuaW1wb3J0IHsgSV9KU09OX1VuaXEsIEpTT05fQW55IH0gZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5pbXBvcnQgeyBDX0hlcm8sIEpTT05fSGVybyB9ICAgICBmcm9tIFwiLi9DX0hlcm9cIjtcclxuaW1wb3J0IHsgX2dldF91dWlkIH0gICAgICAgICAgICAgZnJvbSBcIi4uL2RfdXRsL0ZfUmFuZFwiO1xyXG5pbXBvcnQgeyBDX0dvb2RzTGlzdCwgSlNPTl9Hb29kc0xpc3QgfSBmcm9tIFwiLi9DX0dvb2RzTGlzdE5HXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fR3VpbGQgZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBpZD86ICAgICAgIG51bWJlcixcclxuICAgIHVuaXFfaWQ/OiAgc3RyaW5nLFxyXG4gICAgc2F2ZV9pZD86ICBudW1iZXIsXHJcbiAgICBuYW1lPzogICAgIHN0cmluZyxcclxuICAgIGdvbGQ/OiAgICAgbnVtYmVyLFxyXG4gICAgZ29vZHM/OiAgICBKU09OX0dvb2RzTGlzdCxcclxuICAgIGhlcm9lcz86ICAgSlNPTl9IZXJvW10sXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9ndWxkX2luZm8oYTogSlNPTl9HdWlsZHx1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGFsZXJ0KFwiR3VpbGQgSW5mbzpcIiBcclxuICAgICAgICArIFwiXFxuaWQ6ICAgICAgIFwiICsgKGEuaWQgICAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxudW5pcV9pZDogIFwiICsgKGEudW5pcV9pZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2F2ZV9pZDogIFwiICsgKGEuc2F2ZV9pZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubmFtZTogICAgIFwiICsgKGEubmFtZSAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuZ29sZDogICAgIFwiICsgKGEuZ29sZCAgICAgID8/ICAwIClcclxuLy8gICAgICAgICsgXCJcXG5nb29kczogICAgXCIgKyAoT2JqZWN0LmtleXMoYS5nb29kcz8/MCkubGVuZ3RoKVxyXG4gICAgICAgICsgXCJcXG5oZXJvZXM6ICAgXCIgKyAoYS5oZXJvZXM/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19HdWlsZCBpbXBsZW1lbnRzIElfTG9jYXRlLCBJX0pTT05fVW5pcSB7XHJcbiAgICBwcm90ZWN0ZWQgaWQ6ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIHVuaXFfaWQ6ICAgIHN0cmluZztcclxuICAgIHByb3RlY3RlZCBzYXZlX2lkOiAgICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgbmFtZTogICAgICAgc3RyaW5nO1xyXG4gICAgcHVibGljICAgIGdvbGQ6ICAgICAgIG51bWJlcjtcclxuLy8gICAgcHVibGljICAgIGdvb2RzOiAgICAgIENfR29vZHNMaXN0O1xyXG4gICAgcHJvdGVjdGVkIGhlcm9lczogICAgIHtbdWlkOiBzdHJpbmddOiBDX0hlcm99O1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGE/OiBKU09OX0d1aWxkKSB7XHJcbiAgICAgICAgdGhpcy5pZCAgICAgICAgID0gLTE7XHJcbiAgICAgICAgdGhpcy51bmlxX2lkICAgID0gJ21haV9ndWxkIycgKyBfZ2V0X3V1aWQoKTtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgICAgPSAtMTtcclxuICAgICAgICB0aGlzLm5hbWUgICAgICAgPSAnJztcclxuICAgICAgICB0aGlzLmdvbGQgICAgICAgPSAgMDtcclxuLy8gICAgICAgIHRoaXMuZ29vZHMgICAgICA9IG5ldyBDX0dvb2RzTGlzdCgpO1xyXG4gICAgICAgIHRoaXMuaGVyb2VzICAgICA9IHt9O1xyXG4gICAgICAgIGlmIChhICE9PSB1bmRlZmluZWQpIHRoaXMuZGVjb2RlKGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1aWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudW5pcV9pZH1cclxuICAgIHB1YmxpYyBnZXRfbGNrZCgpOiBUX0xja2Qge3JldHVybiBUX0xja2QuTWF6ZX1cclxuICAgIHB1YmxpYyBnZXRfbmFtZSgpOiBzdHJpbmcge3JldHVybiB0aGlzLm5hbWV9XHJcbiAgICBcclxuICAgIHB1YmxpYyBocmVzKCk6ICBDX0hlcm9bXSB7XHJcbiAgICAgICAgY29uc3QgaHJlczogQ19IZXJvW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpaSBpbiB0aGlzLmhlcm9lcykgaHJlcy5wdXNoKHRoaXMuaGVyb2VzW2lpXSk7XHJcbiAgICAgICAgcmV0dXJuIGhyZXM7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIGNsZWFyX2hyZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZXJvZXMgPSB7fTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhZGRfaGVybyhoZXJvOiBDX0hlcm8pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlcm9lc1toZXJvLnVpZCgpXSA9IGhlcm87XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcm12X2hlcm8oaGVybzogQ19IZXJvKTogdm9pZCB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuaGVyb2VzW2hlcm8udWlkKCldO1xyXG4gICAgfVxyXG5cclxuLypcclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9vYmpfdG9fc3RyaW5nKG9hOiBDX0d1aWxkKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2EsIG51bGwsIFwiXFx0XCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX29iakFycmF5X3RvX3N0cmluZyhvYWE6IHtbdWlkOiBzdHJpbmddOiBDX0d1aWxkfSk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3Qgb2EgPSBbXSBhcyBDX0d1aWxkW107XHJcbiAgICAgICAgZm9yIChjb25zdCBpaSBpbiBvYWEpIG9hLnB1c2gob2FhW2lpXSk7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9hLCBudWxsLCBcIlxcdFwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdfdG9fb2JqKHR4dDogc3RyaW5nKTogQ19HdWlsZCB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaiAgID0gSlNPTi5wYXJzZSh0eHQpIGFzIEpTT05fR3VpbGRbXTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDX0d1aWxkKGopO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENfR3VpbGQoKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ190b19vYmpBcnJheSh0eHQ6IHN0cmluZyk6IHtbdWlkOiBzdHJpbmddOiBDX0d1aWxkfSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaiAgID0gSlNPTi5wYXJzZSh0eHQpIGFzIEpTT05fR3VpbGRbXTtcclxuICAgICAgICAgICAgY29uc3QgbXBhID0ge30gYXMge1tpZDogc3RyaW5nXTogQ19HdWlsZH07XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgamogb2Ygaikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWFhID0gbmV3IENfR3VpbGQoKS5kZWNvZGUoamopO1xyXG4gICAgICAgICAgICAgICAgbXBhW2FhYS51aWQoKV0gPSBhYWE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG1wYTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiovXHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX0d1aWxkIHtcclxuICAgICAgICBjb25zdCBqc29uX2hlcm9lczogSlNPTl9IZXJvW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpaSBpbiB0aGlzLmhlcm9lcykganNvbl9oZXJvZXMucHVzaCh0aGlzLmhlcm9lc1tpaV0uZW5jb2RlKCkpOyAgXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgIHRoaXMuaWQsXHJcbiAgICAgICAgICAgIHVuaXFfaWQ6IHRoaXMudW5pcV9pZCxcclxuICAgICAgICAgICAgc2F2ZV9pZDogdGhpcy5zYXZlX2lkLFxyXG4gICAgICAgICAgICBnb2xkOiAgICB0aGlzLmdvbGQsXHJcbi8vICAgICAgICAgICAgZ29vZHM6ICAgdGhpcy5nb29kcy5lbmNvZGUoKSxcclxuICAgICAgICAgICAgaGVyb2VzOiAganNvbl9oZXJvZXMsXHJcbiAgICAgICAgICAgIG5hbWU6ICAgIHRoaXMubmFtZSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IEpTT05fR3VpbGR8dW5kZWZpbmVkKTogQ19HdWlsZCB7XHJcbiAgICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGEuaWQgICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5pZCAgICAgICAgID0gYS5pZDtcclxuICAgICAgICBpZiAoYS51bmlxX2lkICAhPT0gdW5kZWZpbmVkKSB0aGlzLnVuaXFfaWQgICAgPSBhLnVuaXFfaWQ7XHJcbiAgICAgICAgaWYgKGEuc2F2ZV9pZCAgIT09IHVuZGVmaW5lZCkgdGhpcy5zYXZlX2lkICAgID0gYS5zYXZlX2lkO1xyXG4gICAgICAgIGlmIChhLm5hbWUgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubmFtZSAgICAgICA9IGEubmFtZTtcclxuICAgICAgICBpZiAoYS5nb2xkICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmdvbGQ7XHJcbi8vICAgICAgICBpZiAoYS5nb29kcyAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmdvb2RzLmRlY29kZSAoYS5nb29kcyk7XHJcblxyXG4gICAgICAgIGlmIChhLmhlcm9lcyAhPT0gdW5kZWZpbmVkKSAge1xyXG4gICAgICAgICAgICB0aGlzLmhlcm9lcyA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGpzb25faGVybyBvZiBhLmhlcm9lcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVybyA9IG5ldyBDX0hlcm8oanNvbl9oZXJvKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVyb2VzW2hlcm8udWlkKCldID0gaGVybztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZW5jb2RlX2FsbChhbGxfZ3VsZDogQ19HdWlsZFtdKTogSlNPTl9HdWlsZFtdIHtcclxuICAgICAgICBjb25zdCBhbGxfZ3VsZF9kYXRhOiBKU09OX0d1aWxkW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBndWxkIG9mIGFsbF9ndWxkKSB7XHJcbiAgICAgICAgICAgIGFsbF9ndWxkX2RhdGEucHVzaChndWxkLmVuY29kZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbF9ndWxkX2RhdGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZV9hbGwoYWxsX2d1bGRfZGF0YTogSlNPTl9HdWlsZFtdKTogQ19HdWlsZFtdIHtcclxuICAgICAgICBjb25zdCBhbGxfZ3VsZDogQ19HdWlsZFtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgZ3VsZF9kYXRhIG9mIGFsbF9ndWxkX2RhdGEpIHtcclxuICAgICAgICAgICAgYWxsX2d1bGQucHVzaCgobmV3IENfR3VpbGQoKSkuZGVjb2RlKGd1bGRfZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsX2d1bGQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIkd1aWxkIEluZm86XCIgXHJcbiAgICAgICAgICAgICsgXCJcXG5pZDogICAgICAgXCIgKyAodGhpcy5pZCAgICAgICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG51bmlxX2lkOiAgXCIgKyAodGhpcy51bmlxX2lkICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zYXZlX2lkOiAgXCIgKyAodGhpcy5zYXZlX2lkICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5uYW1lOiAgICAgXCIgKyAodGhpcy5uYW1lICAgICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5nb2xkOiAgICAgXCIgKyAodGhpcy5nb2xkICAgICAgICAgICA/PyAgMClcclxuLy8gICAgICAgICAgICArIFwiXFxuZ29vZHM6ICAgIFwiICsgKE9iamVjdC5rZXlzKHRoaXMuZ29vZHM/PzApLmxlbmd0aClcclxuICAgICAgICAgICAgKyBcIlxcbmhlcm9lczogICBcIiArICh0aGlzLmhlcm9lcz8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfSGVyb0FiaWxpdHksIEpTT05fSGVyb19BYmlsaXR5fSBmcm9tIFwiLi9DX0hlcm9BYmlsaXR5XCI7XHJcbmltcG9ydCB7IElfSlNPTl9VbmlxLCAgIEpTT05fQW55IH0gICAgICAgICBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcbmltcG9ydCB7IF9nZXRfdXVpZCwgX2lucmFuZCwgX2lyYW5kLCBfcmFuZG9tX3N0ciB9ICBmcm9tIFwiLi4vZF91dGwvRl9SYW5kXCI7XHJcbmltcG9ydCB7IENfR29vZHNMaXN0LCBKU09OX0dvb2RzTGlzdCB9IGZyb20gXCIuL0NfR29vZHNMaXN0TkdcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9IZXJvIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgaWQ/OiAgICAgICAgbnVtYmVyLCBcclxuICAgIHVuaXFfaWQ/OiAgIHN0cmluZywgXHJcbiAgICBzYXZlX2lkPzogICBudW1iZXIsIFxyXG4gICAgbmFtZT86ICAgICAgc3RyaW5nLCBcclxuICAgIHNleD86ICAgICAgIG51bWJlcjsgXHJcbiAgICBhZ2U/OiAgICAgICBudW1iZXI7IFxyXG4gICAgZ29sZD86ICAgICAgbnVtYmVyOyBcclxuLy8gICAgZ29vZHM/OiAgICAgSlNPTl9Hb29kc0xpc3Q7IFxyXG4gICAgc3RhdGU/OiAgICAgbnVtYmVyOyBcclxuICAgIGx2PzogICAgICAgIG51bWJlcjsgXHJcbiAgICB2YWw/OiAgICAgICBKU09OX0hlcm9fVmFsdWU7XHJcbiAgICBhYmlfcD86ICAgICAgIHtic2M/OiBKU09OX0hlcm9fQWJpbGl0eSwgdHRsPzogSlNPTl9IZXJvX0FiaWxpdHksIG5vdz86IEpTT05fSGVyb19BYmlsaXR5fTtcclxuICAgIGFiaV9tPzogICAgICAge2JzYz86IEpTT05fSGVyb19BYmlsaXR5LCB0dGw/OiBKU09OX0hlcm9fQWJpbGl0eSwgbm93PzogSlNPTl9IZXJvX0FiaWxpdHl9O1xyXG4gICAgaXNfYWxpdmU/OiAgc3RyaW5nfGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9IZXJvX1ZhbHVlIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgc2twPzoge3R0bDogbnVtYmVyLCAgbm93OiBudW1iZXJ9LCBcclxuICAgIGV4cD86IHt0dGw6IG51bWJlciwgIG5vdzogbnVtYmVyfSxcclxuICAgIG54ZT86IG51bWJlciwgICAgICAgICAgICAgICAgICAgLy8g5qyh5Zue44Gu44OS44O844Ot44O844Os44OZ44Or44Ki44OD44OX44Gr5b+F6KaB44Gq57WM6aiT5YCkXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9ocmVzX2luZm8oYTogKEpTT05fSGVyb3x1bmRlZmluZWQpW118dW5kZWZpbmVkKTogdm9pZCB7IFxyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoJ051bWJlciBvZiBIZXJvID0gJyArIGEubGVuZ3RoLnRvU3RyaW5nKCkpO1xyXG4gICAgZm9yICh2YXIgaSBpbiBhKSB7XHJcbiAgICAgICAgaWYgKGFbaV0gPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICAgICAgYWxlcnRfaGVyb19pbmZvKGFbaV0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfaGVyb19pbmZvKGE6IEpTT05fSGVyb3x1bmRlZmluZWQpOiB2b2lkIHsgXHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydChcIkhlcm8gSW5mbzpcXG5cIiBcclxuICAgICAgICArIFwiXFxuaWQ6ICAgICAgIFwiICAgICArIChhPy5pZCAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG51bmlxX2lkICAgXCIgICAgICsgKGE/LnVuaXFfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbm5hbWU6ICAgICBcIiAgICAgKyAoYT8ubmFtZSAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2F2ZV9pZDogIFwiICAgICArIChhPy5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5pc19hbGl2ZTogXCIgICAgICsgKGE/LmlzX2FsaXZlICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19IZXJvIGltcGxlbWVudHMgSV9KU09OX1VuaXEge1xyXG4gICAgcHJvdGVjdGVkIG15X2lkOiAgICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgbXlfbmFtZTogIHN0cmluZztcclxuICAgIHByb3RlY3RlZCB1bmlxX2lkOiAgc3RyaW5nOyBcclxuICAgIHByb3RlY3RlZCBzYXZlX2lkOiAgbnVtYmVyOyBcclxuICAgIHByb3RlY3RlZCBzZXg6ICAgICAgbnVtYmVyOyBcclxuICAgIHByb3RlY3RlZCBhZ2U6ICAgICAgbnVtYmVyOyBcclxuICAgIHByb3RlY3RlZCBzdGF0ZTogICAgbnVtYmVyOyBcclxuICAgIHByb3RlY3RlZCBsdjogICAgICAgbnVtYmVyOyBcclxuICAgIC8vIGJzYyhCYXNpYynjga/lvZPkurrjga7ln7rmnKzlgKTjgIJ0dGwoVG90YWwp44Gv6KOF5YKZ562J44KS5Yqg5rib566X44GX44Gf44KC44Gu44CCbm9344Gv44OQ44OV562J44Gu44K/44O844Oz5Yi244Gu44KC5Yqg5rib566X44GX44Gf44KC44GuXHJcbiAgICBwcm90ZWN0ZWQgZ29sZDogICAgIG51bWJlcjsgXHJcbi8vICAgIHByb3RlY3RlZCBnb29kczogICAgQ19Hb29kc0xpc3Q7IFxyXG4gICAgcHJvdGVjdGVkIHZhbDogICAgICBKU09OX0hlcm9fVmFsdWU7XHJcbiAgICBwcm90ZWN0ZWQgYWJpX3A6ICAgICAge2JzYzogQ19IZXJvQWJpbGl0eSwgdHRsOiBDX0hlcm9BYmlsaXR5LCBub3c6IENfSGVyb0FiaWxpdHl9O1xyXG4gICAgcHJvdGVjdGVkIGFiaV9tOiAgICAgIHtic2M6IENfSGVyb0FiaWxpdHksIHR0bDogQ19IZXJvQWJpbGl0eSwgbm93OiBDX0hlcm9BYmlsaXR5fTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgaXNfYWxpdmU6IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGE/OiBKU09OX0hlcm8pIHtcclxuICAgICAgICB0aGlzLm15X2lkICAgICAgPSAwO1xyXG4gICAgICAgIHRoaXMubXlfbmFtZSAgICA9ICdObyBOYW1lIEhlcm8nO1xyXG4gICAgICAgIHRoaXMudW5pcV9pZCAgICA9ICdtYWlfaGVybyMnICsgX2dldF91dWlkKCk7XHJcbiAgICAgICAgdGhpcy5zYXZlX2lkICAgID0gMDtcclxuICAgICAgICB0aGlzLnNleCAgICAgICAgPSAwOyBcclxuICAgICAgICB0aGlzLmFnZSAgICAgICAgPSAwOyBcclxuICAgICAgICB0aGlzLmdvbGQgICAgICAgPSAwOyBcclxuLy8gICAgICAgIHRoaXMuZ29vZHMgICAgICA9IG5ldyBDX0dvb2RzTGlzdCgpOyBcclxuICAgICAgICB0aGlzLnN0YXRlICAgICAgPSAwOyBcclxuICAgICAgICB0aGlzLmx2ICAgICAgICAgPSAwO1xyXG4gICAgICAgIHRoaXMudmFsICAgICAgICA9IHt9O1xyXG4gICAgICAgIHRoaXMuYWJpX3AgICAgICA9IHtic2M6IG5ldyBDX0hlcm9BYmlsaXR5KCksIHR0bDogbmV3IENfSGVyb0FiaWxpdHkoKSwgbm93OiBuZXcgQ19IZXJvQWJpbGl0eSgpfTtcclxuICAgICAgICB0aGlzLmFiaV9tICAgICAgPSB7YnNjOiBuZXcgQ19IZXJvQWJpbGl0eSgpLCB0dGw6IG5ldyBDX0hlcm9BYmlsaXR5KCksIG5vdzogbmV3IENfSGVyb0FiaWxpdHkoKX07XHJcbiAgICAgICAgdGhpcy5pc19hbGl2ZSAgID0gdHJ1ZTtcclxuICAgICAgICBpZiAoYSAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0X3BycChhcmcgOiBKU09OX0hlcm8pIHtcclxuICAgICAgICB0aGlzLmRlY29kZShhcmcpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF91bmlxX2lkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnVuaXFfaWR9XHJcblxyXG4gICAgcHVibGljIGlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdIZXJvXycgKyB0aGlzLm15X2lkLnRvU3RyaW5nKDE2KS5wYWRTdGFydCg1LCAnMCcpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHVpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy51bmlxX2lkO31cclxuICAgIHB1YmxpYyBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubXlfbmFtZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfbmFtZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm15X25hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fSGVybyB7XHJcbiAgICAgICAgY29uc3QgcmV0OiBKU09OX0hlcm8gPSB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgICAgdGhpcy5teV9pZCxcclxuICAgICAgICAgICAgdW5pcV9pZDogICB0aGlzLnVuaXFfaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICAgICAgdGhpcy5teV9uYW1lLFxyXG4gICAgICAgICAgICBzYXZlX2lkOiAgIHRoaXMuc2F2ZV9pZCxcclxuICAgICAgICAgICAgc2V4OiAgICAgICB0aGlzLnNleCwgXHJcbiAgICAgICAgICAgIGFnZTogICAgICAgdGhpcy5hZ2UsIFxyXG4gICAgICAgICAgICBzdGF0ZTogICAgIHRoaXMuc3RhdGUsIFxyXG4gICAgICAgICAgICBsdjogICAgICAgIHRoaXMubHYsIFxyXG4gICAgICAgICAgICBnb2xkOiAgICAgIHRoaXMuZ29sZCwgXHJcbi8vICAgICAgICAgICAgZ29vZHM6ICAgICB0aGlzLmdvb2RzLmVuY29kZSgpLCBcclxuICAgICAgICAgICAgdmFsOiAgICAgICB0aGlzLnZhbCxcclxuICAgICAgICAgICAgYWJpX3BfYnNjOiB0aGlzLmFiaV9wLmJzYy5lbmNvZGUoKSxcclxuICAgICAgICAgICAgYWJpX21fYnNjOiB0aGlzLmFiaV9tLmJzYy5lbmNvZGUoKSxcclxuICAgICAgICAgICAgaXNfYWxpdmU6ICh0aGlzLmlzX2FsaXZlKSA/ICdZJyA6ICdOJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IEpTT05fSGVyb3x1bmRlZmluZWQpOiBDX0hlcm8ge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChhLmlkICAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfaWQgICAgPSBhLmlkO1xyXG4gICAgICAgIGlmIChhLm5hbWUgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfbmFtZSAgPSBhLm5hbWU7XHJcbiAgICAgICAgaWYgKGEudW5pcV9pZCAgIT09IHVuZGVmaW5lZCkgdGhpcy51bmlxX2lkICA9IGEudW5pcV9pZDtcclxuICAgICAgICBpZiAoYS5zYXZlX2lkICAhPT0gdW5kZWZpbmVkKSB0aGlzLnNhdmVfaWQgID0gYS5zYXZlX2lkO1xyXG4gICAgICAgIGlmIChhLnNleCAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMuc2V4ICAgICAgPSBhLnNleDtcclxuICAgICAgICBpZiAoYS5hZ2UgICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmFnZSAgICAgID0gYS5hZ2U7XHJcbiAgICAgICAgaWYgKGEuc3RhdGUgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5zdGF0ZSAgICA9IGEuc3RhdGU7XHJcbiAgICAgICAgaWYgKGEubHYgICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5sdiAgICAgICA9IGEubHY7XHJcbiAgICAgICAgaWYgKGEuZ29sZCAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5nb2xkICAgICA9IGEuZ29sZDtcclxuICAgICAgICBpZiAoYS5pc19hbGl2ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYS5pc19hbGl2ZSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNfYWxpdmUgPSBhLmlzX2FsaXZlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc19hbGl2ZSA9IChhLmlzX2FsaXZlICE9ICdOJykgPyB0cnVlOiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuLy8gICAgICAgIGlmIChhLmdvb2RzICAgIT09IHVuZGVmaW5lZCkgdGhpcy5nb29kcy5kZWNvZGUoYS5nb29kcyk7XHJcbiAgICAgICAgaWYgKGEudmFsICAgICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19kZWNvZGVfdmFsKHRoaXMudmFsLCBhLnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhLmFiaV9wX2JzYyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWJpX3AuYnNjLmRlY29kZShhLmFiaV9wX2JzYyk7XHJcbiAgICAgICAgICAgIC8vIOaaq+WumlxyXG4gICAgICAgICAgICB0aGlzLmFiaV9wLnR0bCA9IHRoaXMuYWJpX3Aubm93ID0gdGhpcy5hYmlfcC5ic2M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhLmFiaV9tX2JzYyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWJpX20uYnNjLmRlY29kZShhLmFiaV9tX2JzYyk7XHJcbiAgICAgICAgICAgIC8vIOaaq+WumlxyXG4gICAgICAgICAgICB0aGlzLmFiaV9tLnR0bCA9IHRoaXMuYWJpX20ubm93ID0gdGhpcy5hYmlfbS5ic2M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfX2RlY29kZV92YWwoZDogSlNPTl9IZXJvX1ZhbHVlLCBzOiBKU09OX0hlcm9fVmFsdWUpOiB2b2lkIHtcclxuICAgICAgICBpZiAocy5za3AgIT09IHVuZGVmaW5lZCkgZC5za3AgPSB0aGlzLl9fZGVjb2RlX3NrZXgoZC5za3AsIHMuc2twKTtcclxuICAgICAgICBpZiAocy5leHAgIT09IHVuZGVmaW5lZCkgZC5leHAgPSB0aGlzLl9fZGVjb2RlX3NrZXgoZC5leHAsIHMuZXhwKTtcclxuICAgICAgICBpZiAocy5ueGUgIT09IHVuZGVmaW5lZCkgZC5ueGUgPSBzLm54ZTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2RlY29kZV9za2V4KGE6IHt0dGw/OiBudW1iZXIsIG5vdz86IG51bWJlcn0gfCB1bmRlZmluZWQsIHM6IHt0dGw/OiBudW1iZXIsIG5vdz86IG51bWJlcn0pOiB7dHRsOiBudW1iZXIsIG5vdzogbnVtYmVyfSB7XHJcbiAgICAgICAgdmFyIGQ6IHt0dGw6IG51bWJlciwgbm93OiBudW1iZXJ9O1xyXG4gICAgICAgIGlmICAgICAoYSA9PT0gdW5kZWZpbmVkKSBkID0ge3R0bDogMCwgbm93OiAwfTtcclxuICAgICAgICBlbHNlICAgIGQgPSB7dHRsOiBhPy50dGwgPz8gMCwgbm93OiBhPy5ub3cgPz8gMH07XHJcblxyXG4gICAgICAgIGQudHRsID0gcy50dGwgPz8gZC50dGw7XHJcbiAgICAgICAgZC5ub3cgPSBzLm5vdyA/PyBzLnR0bCA/PyBkLm5vdztcclxuICAgICAgICByZXR1cm4gZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZV9oZXJvKCk6IENfSGVybyB7XHJcbiAgICAgICAgY29uc3QgbmV3X2hlcm8gPSBuZXcgQ19IZXJvKCk7XHJcbiAgICAgICAgbmV3X2hlcm8uc2V0X3BycCh7aWQ6ICAgIE1hdGguZmxvb3IoLTEwMDAuMCAqIE1hdGgucmFuZG9tKCkpfSk7XHJcbiAgICAgICAgbmV3X2hlcm8uc2V0X3BycCh7bmFtZTogIG5ld19oZXJvLmlkKCl9KTtcclxuICAgICAgICByZXR1cm4gbmV3X2hlcm87XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJhbmRvbV9tYWtlKCk6IENfSGVybyB7XHJcbiAgICAgICAgdGhpcy5teV9pZCAgICA9IDA7IC8vIC0tSGVybzo6JG1heF9pZDtcclxuICAgICAgICB0aGlzLm15X25hbWUgID0gXCLlhpLpmbrogIUgXCIgKyBfcmFuZG9tX3N0cig1KTtcclxuICAgICAgICB0aGlzLnNleCAgICAgID0gX2lyYW5kKCAwLCAgICAgMSk7IFxyXG4gICAgICAgIHRoaXMuYWdlICAgICAgPSBfaXJhbmQoIDE1LCAgIDI1KTsgXHJcbiAgICAgICAgdGhpcy5zdGF0ZSAgICA9IDA7IFxyXG4gICAgICAgIHRoaXMubHYgICAgICAgPSAwOyBcclxuICAgICAgICB0aGlzLmdvbGQgICAgID0gX2lyYW5kKCA1MDAsIDEwMDApOyBcclxuICAgICAgICB0aGlzLnZhbCAgICAgID0ge1xyXG4gICAgICAgICAgICBza3A6IHt0dGw6IDAsIG5vdzogMH0sIFxyXG4gICAgICAgICAgICBleHA6IHt0dGw6IDAsIG5vdzogMH0sXHJcbiAgICAgICAgICAgICdueGUnOiAxMDAwXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGFiaV9wX2JzYyA9IHRoaXMuYWJpX3AuYnNjO1xyXG4gICAgICAgIGFiaV9wX2JzYy5yYW5kb21fbWFrZSgpO1xyXG4gICAgICAgIGFiaV9wX2JzYy5hZGRfeHBfYm9udXMoKHRoaXMuYWdlIC0gMTUpICogMTApO1xyXG4gICAgICAgIGFiaV9wX2JzYy5hZGRfZWxfYm9udXMoKHRoaXMuYWdlIC0gMTUpICogIDUpO1xyXG4gICAgICAgIGFiaV9wX2JzYy5hZGRfcHJfYm9udXMoKHRoaXMuYWdlIC0gMTUpICogIDIpO1xyXG4gICAgICAgIHRoaXMuYWJpX3AuYnNjID0gYWJpX3BfYnNjO1xyXG5cclxuICAgICAgICBjb25zdCBhYmlfbV9ic2MgPSB0aGlzLmFiaV9tLmJzYztcclxuICAgICAgICBhYmlfbV9ic2MucmFuZG9tX21ha2UoKTtcclxuICAgICAgICBhYmlfbV9ic2MuYWRkX3hwX2JvbnVzKCh0aGlzLmFnZSAtIDE1KSAqIDEwKTtcclxuICAgICAgICBhYmlfbV9ic2MuYWRkX2VsX2JvbnVzKCh0aGlzLmFnZSAtIDE1KSAqICA1KTtcclxuICAgICAgICBhYmlfbV9ic2MuYWRkX3ByX2JvbnVzKCh0aGlzLmFnZSAtIDE1KSAqICAyKTtcclxuICAgICAgICB0aGlzLmFiaV9tLmJzYyA9IGFiaV9tX2JzYztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBlbmNvZGVfaGVyb2VzKGhlcm9lczogQ19IZXJvW10pOiBKU09OX0hlcm9bXSB7XHJcbiAgICAgICAgY29uc3QgaGVyb2VzX2RhdGEgPSBbXSBhcyBKU09OX0hlcm9bXTtcclxuICAgICAgICBmb3IgKHZhciBoZXJvIG9mIGhlcm9lcykge1xyXG4gICAgICAgICAgICBoZXJvZXNfZGF0YS5wdXNoKGhlcm8uZW5jb2RlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGVyb2VzX2RhdGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZV9oZXJvZXMoaGVyb2VzX2RhdGE6IChKU09OX0hlcm98dW5kZWZpbmVkKVtdfHVuZGVmaW5lZCk6IENfSGVyb1tdIHtcclxuICAgICAgICBjb25zdCBoZXJvZXMgPSBbXSBhcyBDX0hlcm9bXTtcclxuICAgICAgICBpZiAoaGVyb2VzX2RhdGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBoZXJvX2RhdGEgb2YgaGVyb2VzX2RhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoZXJvX2RhdGEgIT09IHVuZGVmaW5lZCkgaGVyb2VzLnB1c2gobmV3IENfSGVybygpLmRlY29kZShoZXJvX2RhdGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGVyb2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHsgXHJcbiAgICAgICAgYWxlcnQoXCJIZXJvIEluZm86XFxuXCIgXHJcbiAgICAgICAgICAgICsgXCJcXG5pZDogICAgICAgXCIgICAgICsgKHRoaXMuaWQgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnVuaXFfaWQgICBcIiAgICAgKyAodGhpcy51bmlxX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubmFtZTogICAgIFwiICAgICArICh0aGlzLm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zYXZlX2lkOiAgXCIgICAgICsgKHRoaXMuc2F2ZV9pZCAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmlzX2FsaXZlOiBcIiAgICAgKyAodGhpcy5pc19hbGl2ZSAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBhbGVydF9ocmVzKGE6IChDX0hlcm98dW5kZWZpbmVkKVtdfHVuZGVmaW5lZCk6IHZvaWQgeyBcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgYWxlcnQoJ051bWJlciBvZiBIZXJvID0gJyArIGEubGVuZ3RoLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gYSkgYVtpXT8uYWxlcnQoKTtcclxuICAgIH1cclxufSIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgSV9KU09OLCBKU09OX0FueSB9IGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuaW1wb3J0IHsgX3JvdW5kIH0gICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX01hdGhcIjtcclxuaW1wb3J0IHsgX2lucmFuZCB9IGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuXHJcbi8vIOS4gOiIrOOBq+S9v+OBiOOCi+ODpuODvOODhuOCo+ODquODhuOCo+OBquWRquaWh1xyXG4vLyDjgqrjg5bjgrjjgqfjgq/jg4jjgpLliJfmjJnlnovjgajjgZfjgablnovljJbjgZnjgovjga7jgavliKnnlKhcclxudHlwZSBUX0hlcm9BYmlsaXR5ID0ge1trZXk6IHN0cmluZ106IG51bWJlcn07XHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9IZXJvX0FiaWxpdHkgZXh0ZW5kcyBKU09OX0FueSB7W2tleTogc3RyaW5nXTogbnVtYmVyfVxyXG5cclxuZXhwb3J0IGNsYXNzIENfSGVyb0FiaWxpdHkgaW1wbGVtZW50cyBJX0pTT04ge1xyXG4gICAgcHJvdGVjdGVkIHY6IFRfSGVyb0FiaWxpdHkgPSB7XHJcbiAgICAgICAgeHA6ICAwLCAgLy8gcDpIUOOAgW06TVBcclxuXHJcbiAgICAgICAgLy8g5Lul5LiL44CB5oim6ZeY6IO95Yqb44Gu5Z+65pys5YCkKHA654mp55CG44CBbTrprZTms5Up44CC44OS44O844Ot44O844Os44OZ44Or44KE44K544OG44O844K/44K544Ki44OD44OX44Gn5Yqg566XIFxyXG4gICAgICAgIGF0azogMCwgIC8vIOaUu+aSg+WApFxyXG4gICAgICAgIGRlZjogMCwgIC8vIOmYsuW+oeWApFxyXG4gICAgICAgIHF1YzogMCwgIC8vIOeerOeZuuWKm1xyXG4gICAgICAgIGNuYzogMCwgIC8vIOapn+mBi+WApCjjg4Hjg6Pjg7PjgrkpXHJcbiAgICBcclxuICAgICAgICAvLyDku6XkuIvjgIHjgYTjgo/jgobjgovjgrnjg4bjg7zjgr/jgrnjgILkuIroqJjjga7oqIjnrpfjgavlvbHpn7/jgILjg5Ljg7zjg63jg7zjg6zjg5njg6vjgoTjgrnjg4bjg7zjgr/jgrnjgqLjg4Pjg5fjgafliqDnrpdcclxuICAgICAgICBzdHI6IDAsICAvLyDmoLnmgKfjgILmlLvmkoMv6Ziy5b6h5Yqb44Gr44KC5b2x6Z+/44CCSFAvTVDlm57lvqnjgoTjgqLjgqTjg4bjg6Djga7mnIDlpKfmiYDmjIHph43ph4/jgavjg5zjg7zjg4rjgrlcclxuICAgICAgICBwd3I6IDAsICAvLyDln7rmnKznmoTlvLfjgZXjgILmlLvmkoPlipvjgavlvbHpn79cclxuICAgICAgICB2aXQ6IDAsICAvLyDogJDkuYXlipvjgIJIUC9NUOOBruacgOWkp+WApOOChOmYsuW+oeWKm+OBq+W9semfv+OCkuS4juOBiOOCi1xyXG4gICAgICAgIGRleDogMCwgIC8vIOWZqOeUqOOBleOAguWRveS4reeOh+OBq+W9semfv+OCkuS4juOBiOOCi+OAgumjm+OBs+mBk+WFt+OChOmVt+i3nemboumtlOazleOBp+OBr+eJueOBq+W9semfv+OAgue9oOino+mZpOOBq+OCguW9semfv1xyXG4gICAgICAgIGFnaTogMCwgIC8vIOe0oOaXqeOBleOAguihjOWLlemAn+W6puOChOWbnumBv+eOh+OBq+W9semfv+OCkuS4juOBiOOCi+OAguWRveS4reeOh+OBq+OCguW9semfv1xyXG4gICAgICAgIHRlYzogMCwgIC8vIOaKgOihk+WKm+OAgue1jOmok+OBp+WQkeS4iuOBl+OBpuiDveWKm+WApChxdWMvY25jKeOBq+ODnOODvOODiuOCueOCkuS4juOBiOOCi1xyXG4gICAgICAgIGx1azogMCwgIC8vIOW5uOmBi+WApOOAgmNuY+OBq+Wkp+OBjeOBj+W9semfv+OBmeOCi1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYT86IEpTT05fSGVyb19BYmlsaXR5KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaWR4IGluIHRoaXMudikge3RoaXMudltpZHhdID0gMDt9XHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoYSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BycChhOiBKU09OX0hlcm9fQWJpbGl0eSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGVjb2RlKGEpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldChrZXk6IHN0cmluZyk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKCEoa2V5IGluIHRoaXMudikpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudltrZXldO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldChrZXk6IHN0cmluZywgczogSlNPTl9IZXJvX0FiaWxpdHkpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICghKGtleSBpbiB0aGlzLnYpKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMudltrZXldID0gc1trZXldO1xyXG4gICAgICAgIHJldHVybiBzW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHhwX3R0bGFkZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBfcm91bmQoTWF0aC5mbG9vcih0aGlzLnYuc3RyICsgdGhpcy52LnZpdCAqIDEwLjApLCAwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhdGtfdHRsYWRkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIF9yb3VuZChNYXRoLmZsb29yKHRoaXMudi5zdHIgKyB0aGlzLnYucHdyICsgdGhpcy52LnRlYykgLyAxMC4wLCAwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWZfdHRsYWRkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIF9yb3VuZChNYXRoLmZsb29yKHRoaXMudi5zdHIgKyB0aGlzLnYudml0ICsgdGhpcy52LnRlYykgLyAxMC4wLCAwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBxdWNfdHRsYWRkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIF9yb3VuZChNYXRoLmZsb29yKHRoaXMudi5hZ2kgKyB0aGlzLnYubHVrICsgdGhpcy52LnRlYykgLyAxMC4wLCAwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjbmNfdHRsYWRkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIF9yb3VuZChNYXRoLmZsb29yKDIuMCAqIHRoaXMudi5sdWsgKyB0aGlzLnYudGVjKSAvIDEwLjAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBib251cyhrZXkgOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICghKGtleSBpbiB0aGlzLnYpKSByZXR1cm4gMDtcclxuICAgICAgICBpZiAoa2V5ID09PSAneHAnKSByZXR1cm4gX3JvdW5kKE1hdGguZmxvb3IodGhpcy52LnhwIC8gMTAwKSwgMCk7XHJcbiAgICAgICAgcmV0dXJuIF9yb3VuZChNYXRoLmZsb29yKHRoaXMudltrZXldIC8gMTAuMCksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQoYTogSlNPTl9IZXJvX0FiaWxpdHkpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYSkge1xyXG4gICAgICAgICAgICB0aGlzLnZba2V5XSArPSBhW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICBwdWJsaWMgYWRkX3hwX2JvbnVzKGJvbnVzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnYueHAgICs9ICBib251cztcclxuICAgIH1cclxuICAgIHB1YmxpYyBhZGRfZWxfYm9udXMoYm9udXM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudi5hdGsgKz0gIGJvbnVzO1xyXG4gICAgICAgIHRoaXMudi5kZWYgKz0gIGJvbnVzO1xyXG4gICAgICAgIHRoaXMudi5xdWMgKz0gIGJvbnVzO1xyXG4gICAgICAgIHRoaXMudi5jbmMgKz0gIGJvbnVzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFkZF9wcl9ib251cyhib251czogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52LnN0ciArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LnB3ciArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LnZpdCArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LmRleCArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LmFnaSArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52LnRlYyArPSAgYm9udXM7XHJcbiAgICAgICAgdGhpcy52Lmx1ayArPSAgYm9udXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJhbmRvbV9tYWtlKCk6IENfSGVyb0FiaWxpdHkge1xyXG4gICAgICAgIHRoaXMudi54cCAgPSAgX2lucmFuZCgwLCAxMDAwLCAzLjApO1xyXG5cclxuICAgICAgICB0aGlzLnYuYXRrID0gIF9pbnJhbmQoMCwgIDEwMCwgMi41KTtcclxuICAgICAgICB0aGlzLnYuZGVmID0gIF9pbnJhbmQoMCwgIDEwMCwgMi41KTtcclxuICAgICAgICB0aGlzLnYucXVjID0gIF9pbnJhbmQoMCwgIDEwMCwgMi41KTtcclxuICAgICAgICB0aGlzLnYuY25jID0gIF9pbnJhbmQoMCwgIDEwMCwgMi41KTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMudi5zdHIgPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG4gICAgICAgIHRoaXMudi5wd3IgPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG4gICAgICAgIHRoaXMudi52aXQgPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG4gICAgICAgIHRoaXMudi5kZXggPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG4gICAgICAgIHRoaXMudi5hZ2kgPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG4gICAgICAgIHRoaXMudi50ZWMgPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG4gICAgICAgIHRoaXMudi5sdWsgPSAgX2lucmFuZCgwLCAgIDIwLCAyLjApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fSGVyb19BYmlsaXR5IHtcclxuICAgICAgICBjb25zdCBhOiBKU09OX0hlcm9fQWJpbGl0eSA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnYpIGFba2V5XSA9IHRoaXMudltrZXldO1xyXG4gICAgICAgIHJldHVybiBhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX0hlcm9fQWJpbGl0eSk6IENfSGVyb0FiaWxpdHkge1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgaW4gdGhpcy52ICYmIGFba2V5XSAhPT0gdW5kZWZpbmVkKSB0aGlzLnZba2V5XSA9IGFba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjbG9uZShzOiBDX0hlcm9BYmlsaXR5KTogQ19IZXJvQWJpbGl0eSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX0hlcm9BYmlsaXR5KHMuZW5jb2RlKCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX1BvaW50IH0gICAgICAgICAgICAgICAgICAgZnJvbSAnLi9DX1BvaW50JztcclxuaW1wb3J0IHsgQ19Qb2ludERpciwgSlNPTl9Qb2ludERpciB9IGZyb20gJy4vQ19Qb2ludERpcic7XHJcbmltcG9ydCB7IFRfRGlyZWN0aW9uIH0gICAgICAgICAgICAgICBmcm9tICcuL0NfUG9pbnREaXInO1xyXG5pbXBvcnQgeyBJX0pTT04sIEpTT05fQW55IH0gICAgICAgICAgZnJvbSAnLi9DX1NhdmVJbmZvJztcclxuaW1wb3J0IHsgVF9NYWtlRW51bVR5cGUgfSAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9UX01ha2VFbnVtVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRfTGNrZDp7W2xja2Q6IHN0cmluZ106IG51bWJlcn0gID0ge1xyXG4gICAgVW5rbjogMCxcclxuICAgIE1hemU6IDEsXHJcbiAgICBHdWxkOiAyLFxyXG59IGFzIGNvbnN0O1xyXG5leHBvcnQgdHlwZSBUX0xja2QgICA9IFRfTWFrZUVudW1UeXBlPHR5cGVvZiBUX0xja2Q+O1xyXG5cclxuZnVuY3Rpb24gX2xja2Rfa2V5KGxja2Q6IFRfTGNrZCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoVF9MY2tkKS5maW5kKGtleSA9PiBUX0xja2Rba2V5XSA9PT0gbGNrZCkgPz8gXCI/Pz8/XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9Mb2NhdGlvbiBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGtpbmQ/OiAgICBzdHJpbmcsXHJcbiAgICBuYW1lPzogICAgc3RyaW5nLFxyXG4gICAgbG9jX3VpZD86IHN0cmluZyxcclxuICAgIGxvY19wb3M/OiBKU09OX1BvaW50RGlyLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElfTG9jYXRlIHtcclxuICAgIHVpZDogICAgICAoKT0+c3RyaW5nO1xyXG4gICAgZ2V0X2xja2Q6ICgpPT5UX0xja2Q7XHJcbiAgICBnZXRfbmFtZTogKCk9PnN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfTG9jYXRpb24gaW1wbGVtZW50cyBJX0pTT04ge1xyXG4gICAgcHJvdGVjdGVkIGxvY19raW5kOiBUX0xja2QgPSBUX0xja2QuVW5rbjtcclxuICAgIHByb3RlY3RlZCBsb2NfbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBwcm90ZWN0ZWQgbG9jX3VpZDogIHN0cmluZyA9ICcnO1xyXG4gICAgcHJvdGVjdGVkIGxvY19wb3M6ICBDX1BvaW50RGlyID0gbmV3IENfUG9pbnREaXIoKTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoanNvbj86IEpTT05fTG9jYXRpb24pIHtcclxuICAgICAgICBpZiAoanNvbiAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShqc29uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X2xja2Rfc3RyKCk6IHN0cmluZyAge3JldHVybiBfbGNrZF9rZXkodGhpcy5sb2Nfa2luZCk7fVxyXG4gICAgcHVibGljIGdldF9sY2tkKCk6IFRfTGNrZCAgICAgIHtyZXR1cm4gdGhpcy5sb2Nfa2luZDt9XHJcbiAgICBwdWJsaWMgZ2V0X25hbWUoKTogc3RyaW5nICAgICAge3JldHVybiB0aGlzLmxvY19uYW1lO31cclxuICAgIHB1YmxpYyBnZXRfdWlkKCk6ICBzdHJpbmcgICAgICB7cmV0dXJuIHRoaXMubG9jX3VpZDt9XHJcblxyXG4gICAgcHVibGljIHNldF9sY2tkKGxja2Q6IFRfTGNrZCk6IENfTG9jYXRpb258dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAoIShfbGNrZF9rZXkobGNrZCkgaW4gVF9MY2tkKSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmxvY19raW5kID0gbGNrZDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfbmFtZShuYW1lOiBzdHJpbmcpOiAgIHZvaWQge3RoaXMubG9jX25hbWUgPSBuYW1lO31cclxuICAgIHB1YmxpYyBzZXRfdWlkICh1aWQ6IHN0cmluZyk6ICAgIHZvaWQge3RoaXMubG9jX3VpZCAgPSB1aWQ7fVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc2V0X2xja2Rfc3RyKGxja2Q6IHN0cmluZyk6IENfTG9jYXRpb258dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAoIShsY2tkIGluIFRfTGNrZCkpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5sb2Nfa2luZCA9IFRfTGNrZFtsY2tkXTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldF9wKCk6IENfUG9pbnQgICAgIHtcclxuLy8gICAgICAgIGlmICh0aGlzLmxvY19raW5kICE9IFRfTGNrZC5NYXplKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY19wb3MuZ2V0X3AoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfZCgpOiBUX0RpcmVjdGlvbiB7XHJcbi8vICAgICAgICBpZiAodGhpcy5sb2Nfa2luZCAhPSBUX0xja2QuTWF6ZSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NfcG9zLmdldF9kKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BkKCk6IENfUG9pbnREaXIge1xyXG4vLyAgICAgICAgaWYgKHRoaXMubG9jX2tpbmQgIT0gVF9MY2tkLk1hemUpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jX3Bvcy5nZXRfcGQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0X3AgICAocDogQ19Qb2ludERpcik6IENfUG9pbnREaXJ8dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAodGhpcy5sb2Nfa2luZCAhPT0gVF9MY2tkLk1hemUpICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAodGhpcy5sb2NfcG9zLnNldF9wKHApID09PSB1bmRlZmluZWQpICByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NfcG9zO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9kICAgKGQ6IFRfRGlyZWN0aW9uKTogVF9EaXJlY3Rpb258dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAodGhpcy5sb2Nfa2luZCAhPT0gVF9MY2tkLk1hemUpICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAodGhpcy5sb2NfcG9zLnNldF9kKGQpID09PSB1bmRlZmluZWQpICByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NfcG9zLmQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BkICAocGQ6IENfUG9pbnREaXIpOiBDX1BvaW50RGlyfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jX2tpbmQgIT09IFRfTGNrZC5NYXplKSAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICh0aGlzLmxvY19wb3Muc2V0X3BkKHBkKSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NfcG9zO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTG9jYXRpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGtpbmQ6ICAgICBfbGNrZF9rZXkodGhpcy5sb2Nfa2luZCksXHJcbiAgICAgICAgICAgIG5hbWU6ICAgICB0aGlzLmxvY19uYW1lLFxyXG4gICAgICAgICAgICBsb2NfdWlkOiAgdGhpcy5sb2NfdWlkLFxyXG4gICAgICAgICAgICBsb2NfcG9zOiAgdGhpcy5sb2NfcG9zLmVuY29kZSgpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo/OiBKU09OX0xvY2F0aW9uKTogQ19Mb2NhdGlvbiB7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKGoua2luZCA9PT0gdW5kZWZpbmVkIHx8ICEoai5raW5kIGluIFRfTGNrZCkpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoai5raW5kICAgICE9PSB1bmRlZmluZWQpIHRoaXMubG9jX2tpbmQgPSBUX0xja2Rbai5raW5kXTtcclxuICAgICAgICBpZiAoai5uYW1lICAgICE9PSB1bmRlZmluZWQpIHRoaXMubG9jX25hbWUgPSBqLm5hbWU7XHJcbiAgICAgICAgaWYgKGoubG9jX3VpZCAhPT0gdW5kZWZpbmVkKSB0aGlzLmxvY191aWQgID0gai5sb2NfdWlkO1xyXG4gICAgICAgIGlmIChqLmxvY19wb3MgIT09IHVuZGVmaW5lZCkgdGhpcy5sb2NfcG9zLmRlY29kZShqLmxvY19wb3MpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IFRfTXpLaW5kIH0gICAgICAgICAgICAgIGZyb20gXCIuL1RfTXpLaW5kXCI7XHJcbmltcG9ydCB7IENfTWF6ZUNlbGwgfSAgICAgICAgICAgIGZyb20gXCIuL0NfTWF6ZUNlbGxcIjtcclxuaW1wb3J0IHsgQ19NYXplT2JqLCBJX01hemVPYmosIEpTT05fTWF6ZU9iaiB9IGZyb20gXCIuL0NfTWF6ZU9ialwiO1xyXG5pbXBvcnQgeyBDX1BvaW50IH0gICAgICAgICAgICAgICBmcm9tIFwiLi9DX1BvaW50XCI7XHJcbmltcG9ydCB7IElfTG9jYXRlLCBUX0xja2QgfSAgICAgIGZyb20gXCIuL0NfTG9jYXRpb25cIjtcclxuaW1wb3J0IHsgQ19SYW5nZSB9ICAgICAgICAgICAgICAgZnJvbSBcIi4vQ19SYW5nZVwiO1xyXG5pbXBvcnQgeyBDX1RlYW0sIEpTT05fVGVhbSB9ICAgICBmcm9tIFwiLi9DX1RlYW1cIjtcclxuaW1wb3J0IHsgSV9KU09OX1VuaXEsIEpTT05fQW55IH0gZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5pbXBvcnQgeyBfZ2V0X3V1aWQsIF9pZ3JhbmQsIF9pcmFuZCB9ICAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuaW1wb3J0IHsgX21pbiB9IGZyb20gXCIuLi9kX3V0bC9GX01hdGhcIjtcclxuaW1wb3J0IHsgQ19Qb2ludERpciB9IGZyb20gXCIuL0NfUG9pbnREaXJcIjtcclxuaW1wb3J0IHsgVF9EaXJlY3Rpb24gfSBmcm9tIFwiLi9UX0RpcmVjdGlvblwiO1xyXG5pbXBvcnQgeyBDX1BvaW50TGluazJELCBDX1BvaW50U2V0MkQgfSBmcm9tIFwiLi9DX1BvaW50U2V0MkRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9NYXplIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgaWQ/OiAgICAgIG51bWJlcixcclxuICAgIHVuaXFfaWQ/OiBzdHJpbmcsXHJcbiAgICBzYXZlX2lkPzogbnVtYmVyLFxyXG4gICAgZmxvb3I/OiAgIG51bWJlcixcclxuICAgIG5hbWU/OiAgICBzdHJpbmcsXHJcbiAgICBzaXplX3g/OiAgbnVtYmVyLFxyXG4gICAgc2l6ZV95PzogIG51bWJlcixcclxuICAgIHNpemVfej86ICBudW1iZXIsXHJcbiAgICBtYXplPzogICAgc3RyaW5nLCBcclxuICAgIG1hc2s/OiAgICBzdHJpbmcsIFxyXG4gICAgbXl0ZWFtPzogIEpTT05fVGVhbSwgXHJcbiAgICBvYmpzPzogICAgSlNPTl9NYXplT2JqW10sXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfbWF6ZV9pbmZvKGE6IEpTT05fTWF6ZXx1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICBhbGVydChcIk1hemUgSW5mbzpcIlxyXG4gICAgICAgICsgXCJcXG5tYXplIGlkIDpcIiArIChhLmlkICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5mbG9vcjogXCIgICArIChhLmZsb29yICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG51bmlxIGlkIDpcIiArIChhLnVuaXFfaWQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zYXZlIGlkIDpcIiArIChhLnNhdmVfaWQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5uYW1lOiAgIFwiICArIChhLm5hbWUgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3g6IFwiICArIChhLnNpemVfeCAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3k6IFwiICArIChhLnNpemVfeSAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3o6IFwiICArIChhLnNpemVfeiAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJtYXplOlxcblwiICAgICArIChhLm1hemUgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJtYXNrOlxcblwiICAgICArIChhLm1hc2sgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbnR5cGUgX2luaXRfYXJnID0ge1xyXG4gICAgbWF6ZV9pZD86IG51bWJlcixcclxuICAgIHNhdmVfaWQ/OiBudW1iZXIsXHJcbiAgICBmbG9vcj86ICAgbnVtYmVyLFxyXG4gICAgbmFtZT86ICAgIHN0cmluZyxcclxuICAgIHNpemVfeD86ICBudW1iZXIsXHJcbiAgICBzaXplX3k/OiAgbnVtYmVyLFxyXG4gICAgc2l6ZV96PzogIG51bWJlcixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfTWF6ZSBpbXBsZW1lbnRzIElfTG9jYXRlLCBJX0pTT05fVW5pcSB7XHJcbiAgICBwcm90ZWN0ZWQgbWF6ZV9pZDogIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCB1bmlxX2lkOiAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHNhdmVfaWQ6ICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgZmxvb3I6ICAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBuYW1lOiAgICAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIG15X2xheWVyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJvdGVjdGVkIHNpemU6ICAgICBDX1JhbmdlO1xyXG4gICAgcHJvdGVjdGVkIGNlbGxzOiAgICBDX01hemVDZWxsW11bXVtdO1xyXG4gICAgcHJvdGVjdGVkIG1hc2tzOiAgICBib29sZWFuW11bXVtdO1xyXG4gICAgcHJvdGVjdGVkIHVuY2xlYXI6ICBudW1iZXJbXTtcclxuICAgIHByb3RlY3RlZCBvYmpzOiAgICAge1t1aWQ6IHN0cmluZ106IElfTWF6ZU9ian07XHJcbiAgICBwcm90ZWN0ZWQgbnVtX29mX3Jvb206ICAgICAgbnVtYmVyID0gNTsgLyog44Op44Oz44OA44Og55Sf5oiQ44Gu6Zqb44Gu6YOo5bGL44Gu5pWw44Gu5pyA5aSn5pWwICovXHJcbiAgICBwcm90ZWN0ZWQgbWF4X3NpemVfb2Zfcm9vbTogbnVtYmVyID0gMzsgLyog44Op44Oz44OA44Og55Sf5oiQ44Gu6Zqb44Gu6YOo5bGL44Gu5aSn44GN44GVICovXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGE/OiBfaW5pdF9hcmcpIHtcclxuICAgICAgICB0aGlzLm1hemVfaWQgPSAtMTtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgPSAtMTtcclxuICAgICAgICB0aGlzLnVuaXFfaWQgPSAnbWFpX21hemUjJyArIF9nZXRfdXVpZCgpO1xyXG4gICAgICAgIHRoaXMuZmxvb3IgICA9IDA7XHJcbiAgICAgICAgdGhpcy5uYW1lICAgID0gJyc7XHJcbiAgICAgICAgdGhpcy5zaXplICAgID0gbmV3IENfUmFuZ2UoXHJcbiAgICAgICAgICAgIG5ldyBDX1BvaW50KDAsIDAsIDApLCBcclxuICAgICAgICAgICAgbmV3IENfUG9pbnQoMiwgMiwgMikpO1xyXG4gICAgICAgIHRoaXMuY2VsbHMgICA9IHRoaXMuX19pbml0X21hemUoVF9NektpbmQuU3RvbmUpO1xyXG5cclxuICAgICAgICB0aGlzLm1hc2tzICAgPSB0aGlzLl9faW5pdF9tYXNrKHRydWUpO1xyXG4gICAgICAgIHRoaXMudW5jbGVhciA9IFtdO1xyXG4gICAgICAgIHRoaXMuX19pbml0X3VuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5vYmpzICAgID0ge307XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9faW5pdF9tYXplKGtpbmQ6IFRfTXpLaW5kID0gVF9NektpbmQuU3RvbmUpOiBDX01hemVDZWxsW11bXVtdIHtcclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeiA9IHRoaXMuc2l6ZS5zaXplX3ooKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2VsbHM6IENfTWF6ZUNlbGxbXVtdW10gPSBBcnJheShzaXplX3opIGFzIENfTWF6ZUNlbGxbXVtdW107XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBzaXplX3o7IHorKykge1xyXG4gICAgICAgICAgICBjZWxsc1t6XSA9IEFycmF5KHNpemVfeSkgYXMgQ19NYXplQ2VsbFtdW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGNlbGxzW3pdW3ldICA9IEFycmF5KHNpemVfeCkgYXMgQ19NYXplQ2VsbFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxzW3pdW3ldW3hdID0gQ19NYXplQ2VsbC5uZXdPYmooe2tpbmQ6a2luZCwgcG9zOiB7eDp4LCB5OnksIHo6en19KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2VsbHM7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX19pbml0X21hc2soWU46IGJvb2xlYW4pOiBib29sZWFuW11bXVtdIHtcclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeiA9IHRoaXMuc2l6ZS5zaXplX3ooKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXNrcyAgID0gQXJyYXkoc2l6ZV96KSBhcyBib29sZWFuW11bXVtdO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgdGhpcy5tYXNrc1t6XSA9IEFycmF5KHNpemVfeSkgYXMgYm9vbGVhbltdW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFza3Nbel1beV0gID0gQXJyYXkoc2l6ZV94KSBhcyBib29sZWFuW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrc1t6XVt5XVt4XSA9IFlOO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLm1hc2tzO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9faW5pdF91bmNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgICAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV96ID0gdGhpcy5zaXplLnNpemVfeigpO1xyXG5cclxuICAgICAgICB0aGlzLnVuY2xlYXIgPSBBcnJheShzaXplX3opO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgdGhpcy51bmNsZWFyW3pdPTA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXNrc1t6XVt5XVt4XSkgdGhpcy51bmNsZWFyW3pdKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHVpZCgpOiBzdHJpbmcgICAgICB7cmV0dXJuIHRoaXMudW5pcV9pZH1cclxuICAgIHB1YmxpYyBnZXRfbGNrZCgpOiBUX0xja2Qge3JldHVybiBUX0xja2QuTWF6ZX1cclxuICAgIHB1YmxpYyBnZXRfbmFtZSgpOiBzdHJpbmcge3JldHVybiB0aGlzLm5hbWV9XHJcblxyXG4gICAgcHVibGljIHdpdGhpbihwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZS53aXRoaW4ocCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIOODoeOCpOOCuuWGheOBruOCquODluOCuOOCp+OCr+ODiOOChOODouODs+OCueOCv+ODvOetieOBrumFjee9rlxyXG4gICAgcHVibGljIGFkZF9vYmoob2JqOiBJX01hemVPYmopOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9ianNbb2JqLnVpZCgpXSA9IG9iajtcclxuICAgIH1cclxuICAgIHB1YmxpYyBybXZfb2JqKG9iajogSV9NYXplT2JqKTogdm9pZCB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMub2Jqc1tvYmoudWlkKCldO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9vYmpfeHl6KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpOiBJX01hemVPYmp8bnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0X29iaihuZXcgQ19Qb2ludCh4LCB5LCB6KSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X29iaihwOiBDX1BvaW50KTogSV9NYXplT2JqfG51bGwge1xyXG4gICAgICAgIHZhciBsYXllciA9IC0xO1xyXG4gICAgICAgIHZhciBvYmo6IElfTWF6ZU9ianxudWxsICAgPSBudWxsO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGlkIGluIHRoaXMub2Jqcykge1xyXG4gICAgICAgICAgICBjb25zdCBleGlzdCA9IHRoaXMub2Jqc1tpZF07XHJcblxyXG4gICAgICAgICAgICBpZiAoZXhpc3QudmlldygpID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoZXhpc3Qud2l0aGluKHApICYmIGV4aXN0LnZpZXcoKT8ubGV0dGVyKCkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChleGlzdC52aWV3KCk/LmxheWVyKCk/Py05OSA+IGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXIgPSBleGlzdC52aWV3KCk/LmxheWVyKCk/Py05OTtcclxuICAgICAgICAgICAgICAgICAgICBvYmogICA9IGV4aXN0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGV4aXN0X29iaihwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpZCBpbiB0aGlzLm9ianMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3QgPSB0aGlzLm9ianNbaWRdO1xyXG4gICAgICAgICAgICBpZiAoZXhpc3Qud2l0aGluKHApICYmIGV4aXN0LnZpZXcoKT8ubGV0dGVyKCkgIT09IG51bGwpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGVhbeOBjOadpeOBn+ODneOCpOODs+ODiOOBjOacqui4j+WcsOOBoOOBo+OBn+OCieOBn+OBoOOBruW6iuOBq+WkieOBiOOCi1xyXG4gICAgcHVibGljIGNoYW5nZV91bmV4cF90b19mbG9vcihwOiBDX1BvaW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0X2tpbmQocCkgPT0gVF9NektpbmQuVW5leHApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRfY2VsbChwLCBUX016S2luZC5GbG9vcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIDJE44Oe44OD44OX44Gu44Oe44K544Kv5aSW44GX6Zai6YCjXHJcbiAgICBwdWJsaWMgY2xlYXJfbWFza19hcm91bmRfdGhlX3RlYW0odGVhbTogQ19UZWFtKTogdm9pZCB7XHJcbiAgICAgICAgLy8g54++5Zyo5Zyw44Go55yf5qiq44Gv6Ieq5YuV55qE44Gr6KaL44GI44KLXHJcbiAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZCgwLCAtMSkpO1xyXG4gICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoMCwgIDApKTtcclxuICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayh0ZWFtLndhbGsoKS5nZXRfYXJvdW5kKDAsICAxKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlcHRoICAgPSAgNTsgLy8gMkTjg57jg4Pjg5fnlKjjga7lpaXooYzjgY3pmZDnlYxcclxuXHJcbiAgICAgICAgLy8g5YmN5pa544Gu6KaL6YCa44GX44KS44OB44Kn44OD44Kv44GX44Gq44GM44KJ6KaL44GI44KL44Go44GT44KN44Gv6Kej5pS+44GZ44KLXHJcbiAgICAgICAgZm9yICh2YXIgZCA9IDE7IGQgPCBkZXB0aDsgZCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyb250X3BvcyA9IHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgMClcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNfbW92YWJsZShmcm9udF9wb3MpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmraPpnaLjgavpmpzlrrPnianjgYznhKHjgZHjgozjgbDjgIHjgZ3jga7kuKHlgbTjgoLopovjgYjjgotcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgLTEpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgIDApKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgIDEpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOato+mdouOBjOmanOWus+eJqeOBp+OCguOBneOBruaJi+WJjeOBvuOBp+imi+OBiOOBpuOBn+OBquOCieOAgeOBneOBruWjgeOBqOS4oeWBtOOBr+imi+OBiOOCi1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAtMSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAgMCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAgMSkpO1xyXG4gICAgICAgICAgICAgICAgLy8g5q2j6Z2i44Gr6Zqc5a6z54mp44GM5pyJ44Gj44Gf44KJ44Gd44Gu5aWl44Gv6KaL44GI44Gq44GE44Gu44Gn5o6i57Si57WC5LqGXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2NsZWFyX21hc2soY2xyX3BvczogQ19Qb2ludCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5zaXplLndpdGhpbihjbHJfcG9zKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tYXNrc1tjbHJfcG9zLnpdW2Nscl9wb3MueV1bY2xyX3Bvcy54XSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hc2tzW2Nscl9wb3Muel1bY2xyX3Bvcy55XVtjbHJfcG9zLnhdID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudW5jbGVhcltjbHJfcG9zLnpdLS07XHJcbiAgICAgICAgfSAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNfY2xlYXJlZChjbHJfcG9zOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudW5jbGVhcltjbHJfcG9zLnpdIDwgMTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNfbWFza2VkKHA6IENfUG9pbnQpOiBib29sZWFuIHtyZXR1cm4gdGhpcy5pc19tYXNrZWRfeHl6KHAueCwgcC55LCBwLnopfVxyXG4gICAgcHVibGljIGlzX21hc2tlZF94eXooeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hc2tzW3pdW3ldW3hdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc19tb3ZhYmxlKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2l6ZS53aXRoaW4ocCkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZ2V0X2tpbmQocCkpIHtcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5GbG9vcjpcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5VbmV4cDpcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVcDpcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJEbjpcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVRDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIHB1YmxpYyBnZXRfeF9tYXgoKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5zaXplLnNpemVfeCgpO31cclxuICAgIHB1YmxpYyBnZXRfeV9tYXgoKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5zaXplLnNpemVfeSgpO31cclxuICAgIHB1YmxpYyBnZXRfel9tYXgoKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5zaXplLnNpemVfeigpO31cclxuICAgIHB1YmxpYyBnZXRfa2luZCAocDogQ19Qb2ludCk6IFRfTXpLaW5kIHtcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbihwKSkgcmV0dXJuIHRoaXMuY2VsbHNbcC56XVtwLnldW3AueF0uZ2V0S2luZCgpO1xyXG4gICAgICAgIHJldHVybiBUX016S2luZC5Ob0RlZjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfa2luZF94eXogKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpOiBUX016S2luZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2l6ZS53aXRoaW4oeCwgeSwgeikpIHJldHVybiB0aGlzLmNlbGxzW3pdW3ldW3hdLmdldEtpbmQoKTtcclxuICAgICAgICByZXR1cm4gVF9NektpbmQuTm9EZWY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldF9jZWxsX3h5eiAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcik6IENfTWF6ZUNlbGx8dW5kZWZpbmVkIHsgXHJcbiAgICAgICAgaWYgKHRoaXMuc2l6ZS53aXRoaW4oeCwgeSwgeikpIHJldHVybiB0aGlzLmNlbGxzW3pdW3ldW3hdO1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X2NlbGwgKHA6IENfUG9pbnQpOiBDX01hemVDZWxsfHVuZGVmaW5lZCB7IFxyXG4gICAgICAgIGlmICh0aGlzLnNpemUud2l0aGluKHApKSByZXR1cm4gdGhpcy5jZWxsc1twLnpdW3AueV1bcC54XTtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9jZWxsKHA6IENfUG9pbnQsIGs6IFRfTXpLaW5kKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2l6ZS53aXRoaW4ocCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jZWxsc1twLnpdW3AueV1bcC54XSA9IENfTWF6ZUNlbGwubmV3T2JqKHtraW5kOiBrLCBwb3M6IHB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X2NlbGxfeHl6KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIGs6IFRfTXpLaW5kKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2l6ZS53aXRoaW4oeCwgeSwgeikpIHtcclxuICAgICAgICAgICAgdGhpcy5jZWxsc1t6XVt5XVt4XSA9IENfTWF6ZUNlbGwubmV3T2JqKHtraW5kOiBrLCBwb3M6IHt4OngsIHk6eSwgejp6fX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBjYW5fbW92ZShwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZS53aXRoaW4ocCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2FuX1VEKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc19tb3ZhYmxlKHApO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5wdWJsaWMgZmlsbF9jZWxsKGtpbmQ6IFRfTXpLaW5kLCBmbG9vcjpudW1iZXIpOiB2b2lkIHtcclxuICAgIGZvciAobGV0IGggPSAwOyBoIDwgdGhpcy5zaXplLnNpemVfeSgpOyBoKyspXHJcbiAgICBmb3IgKGxldCB3ID0gMDsgdyA8IHRoaXMuc2l6ZS5zaXplX3goKTsgdysrKVxyXG4gICAgICAgIHRoaXMuc2V0X2NlbGxfeHl6KHcsIGgsIGZsb29yLCBraW5kKTtcclxuICAgIHJldHVybjtcclxufVxyXG5cclxucHVibGljIHNldF9ib3goa2luZDogVF9NektpbmQsIHRvcF94Om51bWJlciwgdG9wX3k6IG51bWJlciwgc2l6ZV94OiBudW1iZXIsIHNpemVfeTogbnVtYmVyLCBmbG9vcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAodG9wX3ggKyBzaXplX3ggPiB0aGlzLnNpemUuc2l6ZV94KCkpIHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKSAtIHRvcF94ICsgMTsgXHJcbiAgICBpZiAodG9wX3kgKyBzaXplX3kgPiB0aGlzLnNpemUuc2l6ZV95KCkpIHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKSAtIHRvcF95ICsgMTtcclxuICAgIFxyXG4gICAgY29uc3QgdG9wID0gdG9wX3k7XHJcbiAgICBjb25zdCBidG0gPSB0b3AgICAgKyBzaXplX3kgLSAxO1xyXG4gICAgY29uc3QgbGZ0ID0gdG9wX3g7XHJcbiAgICBjb25zdCByZ3QgPSBsZnQgICAgKyBzaXplX3ggLSAxO1xyXG4gICAgXHJcbiAgICAvLyDljJflgbQo5LiKKeOBqOWNl+WBtCjkuIsp44KS55+z5aOB44GrXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgdGhpcy5zZXRfY2VsbF94eXooeCwgdG9wLCBmbG9vciwga2luZCk7XHJcbiAgICAgICAgdGhpcy5zZXRfY2VsbF94eXooeCwgYnRtLCBmbG9vciwga2luZCk7XHJcbiAgICB9XHJcbiAgICAvLyDmnbHlgbQo5Y+zKeOBqOilv+WBtCjlt6Yp44KS55+z5aOB44GrXHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKSB7XHJcbiAgICAgICAgdGhpcy5zZXRfY2VsbF94eXoobGZ0LCB5LCBmbG9vciwga2luZCk7XHJcbiAgICAgICAgdGhpcy5zZXRfY2VsbF94eXoocmd0LCB5LCBmbG9vciwga2luZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuXHJcbi8vIOmajuS4iuOBqOmajuS4i+OBq+majuauteOCkuioree9ruOBmeOCi1xyXG5wdWJsaWMgY3JlYXRlX3N0YWlyKGZsb29yOm51bWJlcik6IENfUG9pbnREaXIge1xyXG4gICAgY29uc3QgSF9zaXplX3ggPSAodGhpcy5zaXplLnNpemVfeCgpIC0gMSkgLyAyO1xyXG4gICAgY29uc3QgSF9zaXplX3kgPSAodGhpcy5zaXplLnNpemVfeSgpIC0gMSkgLyAyO1xyXG4gICAgY29uc3QgcG9zX3ggICAgPSAyICogX2lyYW5kKDAsIEhfc2l6ZV94IC0gMSkgKyAxO1xyXG4gICAgY29uc3QgcG9zX3kgICAgPSAyICogX2lyYW5kKDAsIEhfc2l6ZV95IC0gMSkgKyAxO1xyXG4gICAgY29uc3QgcG9zX2QgICAgPSAxICogX2lyYW5kKDAsIFRfRGlyZWN0aW9uLk1BWCk7XHJcblxyXG4gICAgLy8g5Lmx5pWw44Gn5b6X44Gf5bqn5qiZ44Gr6ZqO5q6144KS572u44GPXHJcbiAgICBpZiAoZmxvb3IgPj0gMSkge1xyXG4gICAgICAgIGlmICh0aGlzLmdldF9jZWxsX3h5eihwb3NfeCwgcG9zX3ksIGZsb29yIC0gMSk/LmdldEtpbmQoKSAhPT0gVF9NektpbmQuU3RyVXApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRfY2VsbF94eXoocG9zX3gsIHBvc195LCBmbG9vciAtIDEsICBUX016S2luZC5TdHJEbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRfY2VsbF94eXoocG9zX3gsIHBvc195LCBmbG9vciAtIDEsICBUX016S2luZC5TdHJVRCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZ2V0X2NlbGxfeHl6KHBvc194LCBwb3NfeSwgZmxvb3IpPy5nZXRLaW5kKCkgIT09IFRfTXpLaW5kLlN0ckRuKSB7XHJcbiAgICAgICAgdGhpcy5zZXRfY2VsbF94eXoocG9zX3gsIHBvc195LCBmbG9vciwgIFRfTXpLaW5kLlN0clVwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRfY2VsbF94eXoocG9zX3gsIHBvc195LCBmbG9vciwgIFRfTXpLaW5kLlN0clVEKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IENfUG9pbnREaXIoe3g6IHBvc194LCB5OiBwb3NfeSwgejogZmxvb3IsIGQ6IHBvc19kfSk7XHJcbn1cclxuXHJcbnB1YmxpYyBjcmVhdGVfbWF6ZShmbG9vcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcblxyXG5cclxuICAgIC8vIOODgOODs+OCuOODp+ODs+OBpyRmbG9vcuOBp+aMh+WumuOBleOCjOOBn+majuOCkuacqui4j+WcsOOBq+OBmeOCiyBcclxuICAgIHRoaXMuZmlsbF9jZWxsKFRfTXpLaW5kLlVuZXhwLCBmbG9vcik7XHJcblxyXG4gICAgLy8g44OA44Oz44K444On44Oz44Gu6Lyq6YOt44KS55+z5aOB44Gr44GZ44KLXHJcbiAgICB0aGlzLnNldF9ib3goVF9NektpbmQuU3RvbmUsIDAsIDAsIHNpemVfeCwgc2l6ZV95LCBmbG9vcik7XHJcblxyXG4gICAgLy8g6YCa6Lev44Gr5LiA44Gk572u44GN44Gr5aOB44GM5oiQ6ZW344GZ44KL44Od44Kk44Oz44OI44KS6Kit5a6a44GZ44KLXHJcbiAgICAvLyDjg53jgqTjg7Pjg4jjgYvjgonlo4HjgpLkvLjjgbDjgZnmlrnlkJHjgpLjg6njg7Pjg4Djg6DjgavmsbrjgoHjgotcclxuICAgIGNvbnN0IHBvaW50cyA9IG5ldyBDX1BvaW50U2V0MkQoKTtcclxuICAgIGZvciAobGV0IGggPSAyOyBoIDwgc2l6ZV95IC0gMjsgaCArPSAyKXtcclxuICAgICAgICBmb3IgKGxldCB3ID0gMjsgdyA8IHNpemVfeCAtIDI7IHcgKz0gMil7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpID0gX2lyYW5kKDAsIFRfRGlyZWN0aW9uLk1BWCk7XHJcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKG5ldyBDX1BvaW50TGluazJEKHcsIGgsIGRpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOS5seaVsOOBp+OBhOOBj+OBpOOBi+mDqOWxi+OCkuS9nOOCi1xyXG4gICAgY29uc3Qgcm9vbXNfYXJyYXkgPSBbXTtcclxuICAgIGNvbnN0IG51bV9vZl9yb29tID0gX2lyYW5kKDAsIHRoaXMubnVtX29mX3Jvb20pO1xyXG4gICAgZm9yIChsZXQgY250ID0gMDsgY250IDwgbnVtX29mX3Jvb207IGNudCsrKSB7XHJcbiAgICAgICAgY29uc3QgbGVuZ194ID0gX2lyYW5kKDEsICB0aGlzLm1heF9zaXplX29mX3Jvb20pICogMiArIDE7XHJcbiAgICAgICAgY29uc3QgbGVuZ195ID0gX2lyYW5kKDEsICB0aGlzLm1heF9zaXplX29mX3Jvb20pICogMiArIDE7XHJcbiAgICAgICAgY29uc3Qgcm9vbV94ID0gX2lyYW5kKDAsIChzaXplX3ggLSBsZW5nX3gpIC8gMikgKiAyO1xyXG4gICAgICAgIGNvbnN0IHJvb21feSA9IF9pcmFuZCgwLCAoc2l6ZV95IC0gbGVuZ195KSAvIDIpICogMjtcclxuICAgICAgICByb29tc19hcnJheS5wdXNoKHt0eDogcm9vbV94LCB0eTogcm9vbV95LCBzeDogbGVuZ194LCBzeTogbGVuZ195fSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6YOo5bGL44Gu5Lit44Gu44Od44Kk44Oz44OI44KS5YmK6Zmk44GZ44KLXHJcbiAgICBmb3IgKGNvbnN0IHJvb20gb2Ygcm9vbXNfYXJyYXkpIHtcclxuICAgICAgICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgcG9pbnRzLnNldC5sZW5ndGg7IGlpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcCA9ICBwb2ludHMuc2V0W2lpXTtcclxuICAgICAgICAgICAgaWYgKHAgPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoICAgIChwLnggPj0gcm9vbS50eCkgXHJcbiAgICAgICAgICAgICAgICAmJiAgKHAueCA8PSByb29tLnR4ICsgcm9vbS5zeClcclxuICAgICAgICAgICAgICAgICYmICAocC55ID49IHJvb20udHkpXHJcbiAgICAgICAgICAgICAgICAmJiAgKHAueSA8PSByb29tLnR5ICsgcm9vbS5zeSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb2ludHMucmVtb3ZlKHApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8g44Od44Kk44Oz44OI44GL44KJ5aOB44KS5oiQ6ZW344GV44Gb44Gm6L+36Lev44KS5L2c44KLXHJcbiAgICBmb3IgKGNvbnN0IHAgb2YgcG9pbnRzLnNldCkge1xyXG4gICAgICAgIGlmIChwID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOODneOCpOODs+ODiOOBruS9jee9ruOBq+efs+WjgeOCkue9ruOBj1xyXG4gICAgICAgIHRoaXMuc2V0X2NlbGxfeHl6KHAueCwgcC55LCBmbG9vciwgVF9NektpbmQuU3RvbmUpO1xyXG5cclxuICAgICAgICAvLyDmn7Hjga7mnbHopb/ljZfljJfjga7jgYTjgZrjgozjgYvjgavjgoLnn7Plo4HjgpLnva7jgY9cclxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBbMCwgMCwgMCwgMF07XHJcbiAgICAgICAgY29uc3QgZGkgPSBDX1BvaW50TGluazJELmNhc3QocCk/LmRpID8/IFRfRGlyZWN0aW9uLlg7XHJcbiAgICAgICAgaWYgKGRpID09PSBUX0RpcmVjdGlvbi5YKSBjb250aW51ZTtcclxuICAgICAgICBkaXJlY3Rpb25bZGldID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRfY2VsbF94eXooXHJcbiAgICAgICAgICAgIHAueCAtIGRpcmVjdGlvbltUX0RpcmVjdGlvbi5XXSArIGRpcmVjdGlvbltUX0RpcmVjdGlvbi5FXSwgXHJcbiAgICAgICAgICAgIHAueSAtIGRpcmVjdGlvbltUX0RpcmVjdGlvbi5OXSArIGRpcmVjdGlvbltUX0RpcmVjdGlvbi5TXSwgXHJcbiAgICAgICAgICAgIGZsb29yLFxyXG4gICAgICAgICAgICBUX016S2luZC5TdG9uZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8g6ZaJ6Y6W56m66ZaT44GM5Ye65p2l44Gm44GE44Gf44KJ5Ye65Y+j44KS5L2c44KLXHJcbiAgICAvLyDjg53jgqTjg7Pjg4jjgpLjg4jjg6zjg7zjgrnjgZfjgabjgIHml6Llh7rjga7jg53jgqTjg7Pjg4jjgavnuYvjgYzjgaPjgabjgYTjgZ/jgonplonpjpbnqbrplpNcclxuICAgIGZvciAoY29uc3Qgc2V0IG9mIHBvaW50cy5zZXQpIHtcclxuICAgICAgICBpZiAoc2V0ID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICBjb25zdCBbeW4sIHRyYWNlX3NldF0gPSB0aGlzLmNoZWNrX2Nsb3NlKHNldC54LCBzZXQueSwgcG9pbnRzLCBuZXcgQ19Qb2ludFNldDJEKCkpO1xyXG4gICAgICAgIGlmICh5bikge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5fZXhpdCh0cmFjZV9zZXQsIFRfTXpLaW5kLlVuZXhwLCBmbG9vcik7XHJcbiAgICAgICAgICAgIGlmICh0cmFjZV9zZXQgIT09IHVuZGVmaW5lZCkgZm9yIChjb25zdCB0IG9mIHRyYWNlX3NldC5zZXQpIHBvaW50cy5yZW1vdmUodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG59XHJcblxyXG5wcm90ZWN0ZWQgY2hlY2tfY2xvc2UoeDogbnVtYmVyLCB5OiBudW1iZXIsIHBvaW50X3NldDogQ19Qb2ludFNldDJELCB0cmFjZV9zZXQ6IENfUG9pbnRTZXQyRHx1bmRlZmluZWQpOiBbYm9vbGVhbiwgQ19Qb2ludFNldDJEfHVuZGVmaW5lZF0ge1xyXG4gICAgaWYgKHggPCAyIHx8IHkgPCAyIHx8IHggPiB0aGlzLnNpemUuc2l6ZV94KCkgLSAyIHx8IHkgPiB0aGlzLnNpemUuc2l6ZV95KCkgLSAyKSByZXR1cm4gW2ZhbHNlLCB1bmRlZmluZWRdO1xyXG5cclxuICAgIGlmIChwb2ludF9zZXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIFtmYWxzZSwgdW5kZWZpbmVkXTtcclxuICAgIGlmIChwb2ludF9zZXQ/LmlzX2V4aXN0KHgsIHkpID09PSBmYWxzZSkgcmV0dXJuIFtmYWxzZSwgdW5kZWZpbmVkXTtcclxuXHJcbiAgICBpZiAodHJhY2Vfc2V0ICE9PSB1bmRlZmluZWQgJiYgdHJhY2Vfc2V0Py5pc19leGlzdCh4LCB5KSA9PT0gdHJ1ZSkgIHJldHVybiBbdHJ1ZSwgIHRyYWNlX3NldF07XHJcblxyXG4gICAgY29uc3QgcCA9IHBvaW50X3NldC5nZXRfcG9pbnQoeCwgeSk7XHJcbiAgICB0cmFjZV9zZXQgPz89IG5ldyBDX1BvaW50U2V0MkQoKTtcclxuICAgIHRyYWNlX3NldD8ucHVzaChuZXcgQ19Qb2ludExpbmsyRCh4LCB5LCBDX1BvaW50TGluazJELmNhc3QocCk/LmRpKSk7XHJcblxyXG4gICAgbGV0IG5leHRfeDogbnVtYmVyID0gMCwgbmV4dF95OiBudW1iZXIgPSAwO1xyXG4gICAgc3dpdGNoIChDX1BvaW50TGluazJELmNhc3QocCk/LmRpKSB7XHJcbiAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiAgLy8g5YyXXHJcbiAgICAgICAgICAgIG5leHRfeCA9IHg7XHJcbiAgICAgICAgICAgIG5leHRfeSA9IHkgLSAyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6ICAvLyDmnbFcclxuICAgICAgICAgICAgbmV4dF94ID0geCArIDI7XHJcbiAgICAgICAgICAgIG5leHRfeSA9IHk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogIC8vIOWNl1xyXG4gICAgICAgICAgICBuZXh0X3ggPSB4O1xyXG4gICAgICAgICAgICBuZXh0X3kgPSB5ICsgMjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiAgLy8g6KW/XHJcbiAgICAgICAgICAgIG5leHRfeCA9IHggLSAyO1xyXG4gICAgICAgICAgICBuZXh0X3kgPSB5O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tfY2xvc2UobmV4dF94LCBuZXh0X3ksIHBvaW50X3NldCwgdHJhY2Vfc2V0KTtcclxufVxyXG5cclxucHJvdGVjdGVkIG9wZW5fZXhpdChwOiBDX1BvaW50U2V0MkR8dW5kZWZpbmVkLCBraW5kOiBUX016S2luZCwgZmxvb3I6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKHAgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGNudCA9IF9pcmFuZCgwLCBwLnNldC5sZW5ndGggLSAxKTtcclxuICAgIGNvbnN0IHBwICA9ICBwLnNldFtjbnRdO1xyXG5cclxuICAgIGxldCBkaXJlY3Rpb24gPSBbMCwgMCwgMCwgMF07XHJcbiAgICBjb25zdCBkaSA9IENfUG9pbnRMaW5rMkQuY2FzdChwcCk/LmRpID8/IFRfRGlyZWN0aW9uLk5cclxuICAgIGRpcmVjdGlvbltkaV0gPSAxO1xyXG5cclxuICAgIHRoaXMuc2V0X2NlbGxfeHl6KFxyXG4gICAgICAgIHBwLnggLSBkaXJlY3Rpb25bVF9EaXJlY3Rpb24uV10gKyBkaXJlY3Rpb25bVF9EaXJlY3Rpb24uRV0sIFxyXG4gICAgICAgIHBwLnkgLSBkaXJlY3Rpb25bVF9EaXJlY3Rpb24uTl0gKyBkaXJlY3Rpb25bVF9EaXJlY3Rpb24uU10sIFxyXG4gICAgICAgIGZsb29yLFxyXG4gICAgICAgIGtpbmQgXHJcbiAgICApO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxyXG4vKlxyXG5wdWJsaWMgc3RhdGljIGZyb21fb2JqX3RvX3N0cmluZyhvYTogQ19NYXplKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYSwgbnVsbCwgXCJcXHRcIik7XHJcbn1cclxucHVibGljIHN0YXRpYyBmcm9tX29iakFycmF5X3RvX3N0cmluZyhvYWE6IHtbdWlkOiBzdHJpbmddOiBDX01hemV9KTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG9hID0gW10gYXMgQ19NYXplW107XHJcbiAgICBmb3IgKGNvbnN0IGlpIGluIG9hYSkgb2EucHVzaChvYWFbaWldKTtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYSwgbnVsbCwgXCJcXHRcIik7XHJcbn1cclxucHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ190b19vYmoodHh0OiBzdHJpbmcpOiBDX01hemUge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBqICAgPSBKU09OLnBhcnNlKHR4dCkgYXMgSlNPTl9NYXplW107XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX01hemUoKS5kZWNvZGUoaik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IENfTWF6ZSgpO1xyXG4gICAgfTtcclxufVxyXG5wdWJsaWMgc3RhdGljIGZyb21fc3RyaW5nX3RvX29iakFycmF5KHR4dDogc3RyaW5nKToge1t1aWQ6IHN0cmluZ106IENfTWF6ZX0ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBqICAgPSBKU09OLnBhcnNlKHR4dCkgYXMgSlNPTl9NYXplW107XHJcbiAgICAgICAgY29uc3QgbXBhID0ge30gYXMge1tpZDogc3RyaW5nXTogQ19NYXplfTtcclxuICAgICAgICBmb3IgKGNvbnN0IGpqIG9mIGopIHtcclxuICAgICAgICAgICAgY29uc3QgYWFhID0gbmV3IENfTWF6ZSgpLmRlY29kZShqaik7XHJcbiAgICAgICAgICAgIG1wYVthYWEudWlkKCldID0gYWFhO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbXBhO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfTtcclxufVxyXG4qL1xyXG5cclxuICAgIHB1YmxpYyB0b19sZXR0ZXIocDogQ19Qb2ludCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2VsbHNbcC56XVtwLnldW3AueF0udG9fbGV0dGVyKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdG9fc3RyaW5nKGZsb29yOiBudW1iZXIgPSAwLCBkZWJ1Z19tb2RlOiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgICAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcblxyXG4gICAgICAgIHZhciByZXRfc3RyOiBzdHJpbmcgPSAnJztcclxuICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHRoaXMuZ2V0X29ial94eXooeCwgeSwgZmxvb3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkZWJ1Z19tb2RlICYmIHRoaXMubWFza3NbZmxvb3JdW3ldW3hdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0X3N0ciArPSAn77y4JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqX2MgPSBvYmo/LnZpZXcoKT8ubGV0dGVyKCkgPz8gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqID09PSBudWxsIHx8IG9ial9jID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldF9zdHIgKz0gdGhpcy5jZWxsc1tmbG9vcl1beV1beF0udG9fbGV0dGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0X3N0ciArPSBvYmpfYztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0X3N0ciArPSBcIlxcblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0X3N0cjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9NYXplIHtcclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeiA9IHRoaXMuc2l6ZS5zaXplX3ooKTtcclxuXHJcbiAgICAgICAgdmFyIHpfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBzaXplX3o7IHorKykge1xyXG4gICAgICAgICAgICB2YXIgeV9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBzaXplX3k7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHhfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeF9hcnJheS5wdXNoKHRoaXMuY2VsbHNbel1beV1beF0uZW5jb2RlKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeV9hcnJheS5wdXNoKHhfYXJyYXkuam9pbignWCcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB6X2FycmF5LnB1c2goeV9hcnJheS5qb2luKCdZJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtYXplX3N0ciA9IHpfYXJyYXkuam9pbignWicpO1xyXG5cclxuICAgICAgICB2YXIgel9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHNpemVfejsgeisrKSB7XHJcbiAgICAgICAgICAgIHZhciB5X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeF9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICB4X2FycmF5LnB1c2godGhpcy5tYXNrc1t6XVt5XVt4XSA/ICcxJyA6ICcwJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB5X2FycmF5LnB1c2goeF9hcnJheS5qb2luKCdYJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHpfYXJyYXkucHVzaCh5X2FycmF5LmpvaW4oJ1knKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1hc2tfc3RyID0gel9hcnJheS5qb2luKCdaJyk7XHJcblxyXG4gICAgICAgIGxldCBvYmpzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBpaSBpbiB0aGlzLm9ianMpIG9ianMucHVzaCh0aGlzLm9ianNbaWldLmVuY29kZSgpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6ICAgICAgdGhpcy5tYXplX2lkLFxyXG4gICAgICAgICAgICB1bmlxX2lkOiB0aGlzLnVuaXFfaWQsXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6IHRoaXMuc2F2ZV9pZCxcclxuICAgICAgICAgICAgZmxvb3I6ICAgdGhpcy5mbG9vcixcclxuICAgICAgICAgICAgbmFtZTogICAgdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICBvYmpzOiAgICBvYmpzLFxyXG4gICAgICAgICAgICBzaXplX3g6ICB0aGlzLnNpemUuc2l6ZV94KCksXHJcbiAgICAgICAgICAgIHNpemVfeTogIHRoaXMuc2l6ZS5zaXplX3koKSxcclxuICAgICAgICAgICAgc2l6ZV96OiAgdGhpcy5zaXplLnNpemVfeigpLFxyXG4gICAgICAgICAgICBtYXplOiAgICBtYXplX3N0cixcclxuICAgICAgICAgICAgbWFzazogICAgbWFza19zdHIsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX01hemV8dW5kZWZpbmVkKTogQ19NYXplIHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGEuaWQgICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm1hemVfaWQgPSBhLmlkO1xyXG4gICAgICAgIGlmIChhLnVuaXFfaWQgIT09IHVuZGVmaW5lZCkgdGhpcy51bmlxX2lkID0gYS51bmlxX2lkO1xyXG4gICAgICAgIGlmIChhLnNhdmVfaWQgIT09IHVuZGVmaW5lZCkgdGhpcy5zYXZlX2lkID0gYS5zYXZlX2lkO1xyXG4gICAgICAgIGlmIChhLmZsb29yICAgIT09IHVuZGVmaW5lZCkgdGhpcy5mbG9vciAgID0gYS5mbG9vcjtcclxuICAgICAgICBpZiAoYS5uYW1lICAgICE9PSB1bmRlZmluZWQpIHRoaXMubmFtZSAgICA9IGEubmFtZTtcclxuXHJcbiAgICAgICAgaWYgKGEub2JqcyAgICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqcyA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGpzb25fb2JqIG9mIGEub2Jqcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3X29iaiA9IENfTWF6ZU9iai5uZXdPYmooanNvbl9vYmopO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmpzW25ld19vYmoudWlkKCldID0gbmV3X29iajtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGEuc2l6ZV94ICE9PSB1bmRlZmluZWQgJiYgYS5zaXplX3kgIT09IHVuZGVmaW5lZCAmJiBhLnNpemVfeiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZSAgPSBuZXcgQ19SYW5nZShcclxuICAgICAgICAgICAgICAgIG5ldyBDX1BvaW50KDAsIDAsIDApLCBcclxuICAgICAgICAgICAgICAgIG5ldyBDX1BvaW50KGEuc2l6ZV94IC0gMSwgYS5zaXplX3kgLSAxLCBhLnNpemVfeiAtIDEpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmNlbGxzICAgPSB0aGlzLl9faW5pdF9tYXplKFRfTXpLaW5kLlN0b25lKTtcclxuICAgICAgICAgICAgdGhpcy5tYXNrcyAgID0gdGhpcy5fX2luaXRfbWFzayh0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5fX2luaXRfdW5jbGVhcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKTtcclxuICAgICAgICBjb25zdCBzaXplX3ogPSB0aGlzLnNpemUuc2l6ZV96KCk7XHJcblxyXG5cclxuICAgICAgICBpZiAoYS5tYXplICE9PSB1bmRlZmluZWQpIHtcclxuLypcclxuICAgICAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBzaXplX3o7IHorKylcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBzaXplX3k7IHkrKylcclxuICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxsc1t6XVt5XVt4XS5zZXQoVF9NektpbmQuU3RvbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiovXHJcbiAgICAgICAgICAgIGNvbnN0IHpfYXJyYXk6IHN0cmluZ1tdID0gYS5tYXplLnNwbGl0KCdaJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHpfbWF4ID0gX21pbihbc2l6ZV96LCB6X2FycmF5Lmxlbmd0aF0pO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHpfbWF4OyB6KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHlfYXJyYXk6IHN0cmluZ1tdID0gel9hcnJheVt6XS5zcGxpdCgnWScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeV9tYXggPSAgX21pbihbc2l6ZV95LCB5X2FycmF5Lmxlbmd0aF0pOyBcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgeV9tYXg7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhfYXJyYXk6IHN0cmluZ1tdID0geV9hcnJheVt5XS5zcGxpdCgnWCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhfbWF4ID0gIF9taW4oW3NpemVfeCwgeF9hcnJheS5sZW5ndGhdKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB4X21heDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBraW5kID0gcGFyc2VJbnQoeF9hcnJheVt4XSwgMTYpOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jZWxsc1t6XVt5XVt4XSA9IENfTWF6ZUNlbGwubmV3T2JqKHtraW5kOiBraW5kLCBwb3M6IHt4OngsIHk6eSwgejp6fX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhLm1hc2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9faW5pdF9tYXNrKHRydWUpO1xyXG4gICAgICAgICAgICBjb25zdCB6X2FycmF5OiBzdHJpbmdbXSA9IGEubWFzay5zcGxpdCgnWicpO1xyXG4gICAgICAgICAgICBjb25zdCB6X21heCA9IF9taW4oW3NpemVfeiwgel9hcnJheS5sZW5ndGhdKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCB6X21heDsgeisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5X2FycmF5OiBzdHJpbmdbXSA9IHpfYXJyYXlbel0uc3BsaXQoJ1knKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHlfbWF4ID0gIF9taW4oW3NpemVfeSwgeV9hcnJheS5sZW5ndGhdKTsgXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHlfbWF4OyB5KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4X2FycmF5OiBzdHJpbmdbXSA9IHlfYXJyYXlbeV0uc3BsaXQoJ1gnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4X21heCA9ICBfbWluKFtzaXplX3gsIHhfYXJyYXkubGVuZ3RoXSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgeF9tYXg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeF9hcnJheVt4XSAhPT0gJzAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc2tzW3pdW3ldW3hdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFza3Nbel1beV1beF0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9faW5pdF91bmNsZWFyKCk7ICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBlbmNvZGVfYWxsKGFsbF9tYXplOiBDX01hemVbXSk6IEpTT05fTWF6ZVtdIHtcclxuICAgICAgICBjb25zdCBhbGxfbWF6ZV9kYXRhOiBKU09OX01hemVbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IG1hemUgb2YgYWxsX21hemUpIHtcclxuICAgICAgICAgICAgYWxsX21hemVfZGF0YS5wdXNoKG1hemUuZW5jb2RlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsX21hemVfZGF0YTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVjb2RlX2FsbChhbGxfbWF6ZV9kYXRhOiBKU09OX01hemVbXSk6IENfTWF6ZVtdIHtcclxuICAgICAgICBjb25zdCBhbGxfbWF6ZTogQ19NYXplW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBtYXplX2RhdGEgb2YgYWxsX21hemVfZGF0YSkge1xyXG4gICAgICAgICAgICBhbGxfbWF6ZS5wdXNoKChuZXcgQ19NYXplKHt9KSkuZGVjb2RlKG1hemVfZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsX21hemU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIk1hemUgSW5mbzpcIlxyXG4gICAgICAgICAgICArIFwiXFxubWF6ZSBpZCA6XCIgKyAodGhpcy5tYXplX2lkID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmZsb29yOiBcIiAgICsgKHRoaXMuZmxvb3IgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG51bmlxIGlkIDpcIiArICh0aGlzLnVuaXFfaWQgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2F2ZSBpZCA6XCIgKyAodGhpcy5zYXZlX2lkID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbm5hbWU6ICAgXCIgICsgKHRoaXMubmFtZSAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zaXplX3g6IFwiICArICh0aGlzLnNpemUuc2l6ZV94KCkgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2l6ZV95OiBcIiAgKyAodGhpcy5zaXplLnNpemVfeSgpID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNpemVfejogXCIgICsgKHRoaXMuc2l6ZS5zaXplX3ooKSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWxlcnRfbWF6ZShmbG9vcjogbnVtYmVyID0gMCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiTWF6ZSBNYXA6XCJcclxuICAgICAgICAgICAgKyBcIm1hemU6XFxuXCIgICAgICsgKHRoaXMudG9fc3RyaW5nKGZsb29yLCB0cnVlKSAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFsZXJ0X21hc2soZmxvb3I6IG51bWJlciA9IDApOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIk1hc2sgTWFwOlwiXHJcbiAgICAgICAgICAgICsgXCJtYXNrOlxcblwiICAgICArICh0aGlzLnRvX3N0cmluZyhmbG9vciwgZmFsc2UpID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IF9nZXRfdXVpZCB9IGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuaW1wb3J0IHsgVF9NektpbmQgfSAgZnJvbSBcIi4vVF9NektpbmRcIjtcclxuaW1wb3J0IHsgSlNPTl9BbnkgfSAgZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5pbXBvcnQgeyBDX01hemVPYmosIElfTWF6ZU9iaiwgSlNPTl9NYXplT2JqIH0gZnJvbSBcIi4vQ19NYXplT2JqXCI7XHJcbmltcG9ydCB7IFRfV2FsbCB9ICAgIGZyb20gJy4vQ19XYWxsJztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fTWF6ZUNlbGwgZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBraW5kPzogVF9NektpbmRcclxuICAgIG9iaj86ICBKU09OX01hemVPYmosXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX01hemVDZWxsICB7XHJcbiAgICBwcm90ZWN0ZWQga2luZDogICBUX016S2luZDtcclxuICAgIHByb3RlY3RlZCBteV9vYmo6IElfTWF6ZU9iajtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5ld09iaihqOiBKU09OX01hemVDZWxsKTogQ19NYXplQ2VsbCB7XHJcbiAgICAgICAgc3dpdGNoIChqLmtpbmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5Ob0RlZjogcmV0dXJuIG5ldyBDX01hemVDZWxsTm9EZWYoaik7IFxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlVua3duOiByZXR1cm4gbmV3IENfTWF6ZUNlbGxVbmt3bihqKTsgXHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuRW1wdHk6IHJldHVybiBuZXcgQ19NYXplQ2VsbEVtcHR5KGopOyBcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5GbG9vcjogcmV0dXJuIG5ldyBDX01hemVDZWxsRmxvb3Ioaik7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuVW5leHA6IHJldHVybiBuZXcgQ19NYXplQ2VsbFVuZXhwKGopO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0b25lOiByZXR1cm4gbmV3IENfTWF6ZUNlbGxTdG9uZShqKTtcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVcDogcmV0dXJuIG5ldyBDX01hemVDZWxsU3RyVXAoaik7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyRG46IHJldHVybiBuZXcgQ19NYXplQ2VsbFN0ckRuKGopOyBcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVRDogcmV0dXJuIG5ldyBDX01hemVDZWxsU3RyVUQoaik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQ19NYXplQ2VsbE5vRGVmKGopO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihqOiBKU09OX01hemVDZWxsKSB7XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG4gICAgICAgIGoub2JqLmNsbmFtZSA/Pz0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG5cclxuICAgICAgICB0aGlzLmtpbmQgICA9IGoua2luZCA/PyBUX016S2luZC5Ob0RlZjtcclxuICAgICAgICB0aGlzLm15X29iaiA9IENfTWF6ZU9iai5uZXdPYmooai5vYmopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldE9iaigpOiAgSV9NYXplT2JqIHtyZXR1cm4gdGhpcy5teV9vYmp9XHJcbiAgICBwdWJsaWMgZ2V0S2luZCgpOiBUX016S2luZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2luZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9fbGV0dGVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubXlfb2JqLnZpZXcoKT8ubGV0dGVyKCkgPz8gJ++8uCc7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fbGV0dGVyKGxldHRlcjogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhUX016S2luZCkpIHtcclxuICAgICAgICAgICAgaWYgKGxldHRlciA9PT0ga2V5KSByZXR1cm4gVF9NektpbmRba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFRfTXpLaW5kLk5vRGVmO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcm93M0QoZnJvdDogVF9XYWxsLCBiYWNrOiBUX1dhbGwpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm15X29iai52aWV3KCk/LmRyb3czRChmcm90LCBiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2luZC50b1N0cmluZygxNikucGFkU3RhcnQoMixcIjBcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZShzdHI6IHN0cmluZywgaj86IEpTT05fTWF6ZUNlbGwpOiBDX01hemVDZWxsfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgIGNvbnN0IGtpbmQgPSBwYXJzZUludChzdHIsIDE2KSBhcyBUX016S2luZDtcclxuICAgICAgICAgcmV0dXJuIENfTWF6ZUNlbGwubmV3T2JqKHtraW5kOiBraW5kLCBwb3M6IGo/LnBvc30pO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsTm9EZWYgZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuTm9EZWZ9O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcwJztcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn55aRJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcwJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcnLCBjb2xfZDogJycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJycsIGNvbF8yOiAnJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsVW5rd24gZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuVW5rd259O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcwJztcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn6KyOJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcwJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcnLCBjb2xfZDogJycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJycsIGNvbF8yOiAnJywgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbEVtcHR5IGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLkVtcHR5fTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMSc7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ+eEoScsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMCcsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbiAgICAgICAgICAgIGNvbF9mOiAnJywgY29sX2I6ICcnLCBjb2xfczogJycsIGNvbF90OiAnJywgY29sX2Q6ICcnLCBcclxuICAgICAgICAgICAgY29sX2w6ICcnLCBjb2xfMjogJycsIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGxGbG9vciBleHRlbmRzIENfTWF6ZUNlbGwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVDZWxsfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGogPz89IHtraW5kOiBUX016S2luZC5GbG9vcn07XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG5cclxuICAgICAgICBqLm9iai5jYW5fdGhyID0gJzEnO1xyXG4gICAgICAgIGoub2JqLnBvcyAgICAgPSB7eDpqLngsIHk6ai55LCB6Omouen07XHJcbiAgICAgICAgai5vYmoudmlldyAgICA9ICB7XHJcbiAgICAgICAgICAgIGxheWVyOiAwLCBsZXR0ZXI6ICfjgIAnLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgJzEnLFxyXG4gICAgICAgICAgICBwYWRfdDogMC4wLCBwYWRfZDogMC4wLCBwYWRfczogMC4wLFxyXG4gICAgICAgICAgICBjb2xfZjogJycsIGNvbF9iOiAnJywgY29sX3M6ICcnLCBjb2xfdDogJyM2NjY2ZmYnLCBjb2xfZDogJycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJyM5OTk5ZmYnLCBjb2xfMjogJyM2NjY2ZmYnLCBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGxVbmV4cCBleHRlbmRzIENfTWF6ZUNlbGwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVDZWxsfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGogPz89IHtraW5kOiBUX016S2luZC5VbmV4cH07XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG5cclxuICAgICAgICBqLm9iai5jYW5fdGhyID0gJzEnO1xyXG4gICAgICAgIGoub2JqLnBvcyAgICAgPSB7eDpqLngsIHk6ai55LCB6Omouen07XHJcbiAgICAgICAgai5vYmoudmlldyAgICA9ICB7XHJcbiAgICAgICAgICAgIGxheWVyOiAwLCBsZXR0ZXI6ICfjg7snLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgJzEnLFxyXG4gICAgICAgICAgICBwYWRfdDogMC4wLCBwYWRfZDogMC4wLCBwYWRfczogMC4wLFxyXG4gICAgICAgICAgICBjb2xfZjogJycsIGNvbF9iOiAnJywgY29sX3M6ICcnLCBjb2xfdDogJyM2NmZmZmYnLCBjb2xfZDogJycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJyM5OTk5ZmYnLCBjb2xfMjogJyM2NmZmZmYnLCBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGxTdG9uZSBleHRlbmRzIENfTWF6ZUNlbGwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVDZWxsfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGogPz89IHtraW5kOiBUX016S2luZC5TdG9uZX07XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG5cclxuICAgICAgICBqLm9iai5jYW5fdGhyID0gJzAnO1xyXG4gICAgICAgIGoub2JqLnBvcyAgICAgPSB7eDpqLngsIHk6ai55LCB6Omouen07XHJcbiAgICAgICAgai5vYmoudmlldyAgICA9ICB7XHJcbiAgICAgICAgICAgIGxheWVyOiAwLCBsZXR0ZXI6ICfvvIMnLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgJzEnLFxyXG4gICAgICAgICAgICBwYWRfdDogMC4wLCBwYWRfZDogMC4wLCBwYWRfczogMC4wLFxyXG4gICAgICAgICAgICBjb2xfZjogJyMwMGZmMDAnLCBjb2xfYjogJycsIGNvbF9zOiAnIzAwZWUwMCcsIGNvbF90OiAnJywgY29sX2Q6ICcnLCBcclxuICAgICAgICAgICAgY29sX2w6ICcjMDAwMGZmJywgY29sXzI6ICcjMDBlZTAwJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsU3RyVXAgZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuU3RyVXB9O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcxJztcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn5LiKJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcxJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcnLCBjb2xfZDogJyNmZmZmY2MnLCBcclxuICAgICAgICAgICAgY29sX2w6ICcjMDAwMGZmJywgY29sXzI6ICcjZmZmZmNjJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsU3RyRG4gZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuU3RyRG59O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcxJztcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn5LiLJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcxJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcjZmZmZmNjJywgY29sX2Q6ICcnLCBcclxuICAgICAgICAgICAgY29sX2w6ICcjMDAwMGZmJywgY29sXzI6ICcjZmZmZmNjJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsU3RyVUQgZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuU3RyVUR9O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcxJztcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn5q61JywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcxJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcjZmZmZmNjJywgY29sX2Q6ICcjZmZmZmNjJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnIzAwMDBmZicsIGNvbF8yOiAnI2ZmZmZjYycsIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IF9hbGVydCB9IGZyb20gXCIuLi9kX2Ntbi9nbG9iYWxcIjtcclxuaW1wb3J0IHsgQ19Ec3BNZXNzYWdlIH0gZnJvbSBcIi4uL2RfdXRsL0NfRHNwTWVzc2FnZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX01hemVJbmZvIHtcclxuICAgIG5hbWU6ICAgICAgc3RyaW5nO1xyXG4gICAgbWJuYW1lOiAgICBzdHJpbmc7XHJcbiAgICBsdjogICAgICAgIG51bWJlcjtcclxuICAgIHNpemVfeDogICAgbnVtYmVyO1xyXG4gICAgc2l6ZV95OiAgICBudW1iZXI7XHJcbiAgICBzaXplX3o6ICAgIG51bWJlcjtcclxuICAgIG1heF9yb29tOiAgbnVtYmVyO1xyXG4gICAgcm9vbV9zaXplOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9tYXplaW5mb19pbmZvKGE/OiBKU09OX01hemVJbmZvKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgYWxlcnQoXCJNYXplSW5mbyBEYXRhOlwiXHJcbiAgICAgICAgKyBcIlxcbm5hbWUgOiBcIiAgICAgICArIChhLm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbm1ibmFtZTogXCIgICAgICArIChhLm1ibmFtZSAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmx2IDpcIiAgICAgICAgICArIChhLmx2ICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNpemVfeDogXCIgICAgICArIChhLnNpemVfeCAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNpemVfeTogXCIgICAgICArIChhLnNpemVfeSAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNpemVfejogXCIgICAgICArIChhLnNpemVfeiAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbm1heF9vZl9yb29tOiBcIiArIChhLm1heF9yb29tICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnJvb21fc2l6ZTogXCIgICArIChhLnJvb21fc2l6ZSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19NYXplSW5mbyB7XHJcbiAgICBwdWJsaWMgbmFtZTogICAgICBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBtYm5hbWU6ICAgIHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIGx2OiAgICAgICAgbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBzaXplX3g6ICAgIG51bWJlciA9IDM7XHJcbiAgICBwdWJsaWMgc2l6ZV95OiAgICBudW1iZXIgPSAzO1xyXG4gICAgcHVibGljIHNpemVfejogICAgbnVtYmVyID0gMztcclxuICAgIHB1YmxpYyBtYXhfcm9vbTogIG51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgcm9vbV9zaXplOiBudW1iZXIgPSAxO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRfdGJsX2FsbCgpOiBDX01hemVJbmZvW10ge1xyXG4gICAgICAgIGNvbnN0IG1hemVpbmZvOiBDX01hemVJbmZvW10gPSBbXTtcclxuICAgICAgICBtYXplaW5mby5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgQ19NYXplSW5mbygpLmRlY29kZSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAgIFx0J21hemUwMTAnLCBcclxuICAgICAgICAgICAgICAgIG1ibmFtZTogXHQn5pWZ57e05aC0JywgXHJcbiAgICAgICAgICAgICAgICBsdjogICAgIFx0IDEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV94OiBcdDExLCBcclxuICAgICAgICAgICAgICAgIHNpemVfeTogXHQxMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3o6IFx0IDMsIFxyXG4gICAgICAgICAgICAgICAgbWF4X3Jvb206IFx0IDIsIFxyXG4gICAgICAgICAgICAgICAgcm9vbV9zaXplOiBcdCAzIFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1hemVpbmZvLnB1c2goXHJcbiAgICAgICAgICAgIG5ldyBDX01hemVJbmZvKCkuZGVjb2RlKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICAgXHQnbWF6ZTAxMScsIFxyXG4gICAgICAgICAgICAgICAgbWJuYW1lOiBcdCflp4vjgb7jgorjga7ov7flrq4nLCBcclxuICAgICAgICAgICAgICAgIGx2OiAgICAgXHQgMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3g6IFx0MjEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV95OiBcdDIxLCBcclxuICAgICAgICAgICAgICAgIHNpemVfejogXHQgNSwgXHJcbiAgICAgICAgICAgICAgICBtYXhfcm9vbTogXHQgMywgXHJcbiAgICAgICAgICAgICAgICByb29tX3NpemU6IFx0IDMgXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWF6ZWluZm8ucHVzaChcclxuICAgICAgICAgICAgbmV3IENfTWF6ZUluZm8oKS5kZWNvZGUoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogICBcdCdtYXplMDEyJywgXHJcbiAgICAgICAgICAgICAgICBtYm5hbWU6IFx0J+aal+OBjeajruOBrui/t+WuricsIFxyXG4gICAgICAgICAgICAgICAgbHY6ICAgICBcdCAxLCBcclxuICAgICAgICAgICAgICAgIHNpemVfeDogXHQyNSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3k6IFx0MjUsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV96OiBcdCA3LCBcclxuICAgICAgICAgICAgICAgIG1heF9yb29tOiBcdCA1LCBcclxuICAgICAgICAgICAgICAgIHJvb21fc2l6ZTogXHQgMyBcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKVxyXG4gICAgICAgIG1hemVpbmZvLnB1c2goXHJcbiAgICAgICAgICAgIG5ldyBDX01hemVJbmZvKCkuZGVjb2RlKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICAgXHQnbWF6ZTAxMycsIFxyXG4gICAgICAgICAgICAgICAgbWJuYW1lOiBcdCfpu5LprZTjga7lnLDkuIvlopPlnLAnLCBcclxuICAgICAgICAgICAgICAgIGx2OiAgICAgXHQgMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3g6IFx0MzEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV95OiBcdDMxLCBcclxuICAgICAgICAgICAgICAgIHNpemVfejogXHQxMCwgXHJcbiAgICAgICAgICAgICAgICBtYXhfcm9vbTogXHQgNSwgXHJcbiAgICAgICAgICAgICAgICByb29tX3NpemU6IFx0IDUgXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgcmV0dXJuIG1hemVpbmZvO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yIChqPzogSlNPTl9NYXplSW5mbykge1xyXG4gICAgICAgIGlmIChqICE9PSB1bmRlZmluZWQpIHRoaXMuZGVjb2RlKGopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX01hemVJbmZvIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiAgICAgIHRoaXMubmFtZSxcclxuICAgICAgICAgICAgbWJuYW1lOiAgICB0aGlzLm1ibmFtZSxcclxuICAgICAgICAgICAgbHY6ICAgICAgICB0aGlzLmx2LFxyXG4gICAgICAgICAgICBzaXplX3g6ICAgIHRoaXMuc2l6ZV94LFxyXG4gICAgICAgICAgICBzaXplX3k6ICAgIHRoaXMuc2l6ZV95LFxyXG4gICAgICAgICAgICBzaXplX3o6ICAgIHRoaXMuc2l6ZV96LFxyXG4gICAgICAgICAgICBtYXhfcm9vbTogIHRoaXMubWF4X3Jvb20sXHJcbiAgICAgICAgICAgIHJvb21fc2l6ZTogdGhpcy5yb29tX3NpemUsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShqPzogSlNPTl9NYXplSW5mbyk6IENfTWF6ZUluZm8ge1xyXG4gICAgICAgIGlmIChqID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoai5uYW1lICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5uYW1lICAgICAgPSBqLm5hbWU7XHJcbiAgICAgICAgaWYgKGoubWJuYW1lICAgICE9PSB1bmRlZmluZWQpIHRoaXMubWJuYW1lICAgID0gai5tYm5hbWU7XHJcbiAgICAgICAgaWYgKGoubHYgICAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubHYgICAgICAgID0gai5sdjtcclxuICAgICAgICBpZiAoai5zaXplX3ggICAgIT09IHVuZGVmaW5lZCkgdGhpcy5zaXplX3ggICAgPSBqLnNpemVfeDtcclxuICAgICAgICBpZiAoai5zaXplX3kgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5zaXplX3kgICAgPSBqLnNpemVfeTtcclxuICAgICAgICBpZiAoai5zaXplX3ogICAgIT09IHVuZGVmaW5lZCkgdGhpcy5zaXplX3ogICAgPSBqLnNpemVfejtcclxuICAgICAgICBpZiAoai5tYXhfcm9vbSAgIT09IHVuZGVmaW5lZCkgdGhpcy5tYXhfcm9vbSAgPSBqLm1heF9yb29tO1xyXG4gICAgICAgIGlmIChqLnJvb21fc2l6ZSAhPT0gdW5kZWZpbmVkKSB0aGlzLnJvb21fc2l6ZSA9IGoucm9vbV9zaXplO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGFsZXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiTWF6ZUluZm8gRGF0YTpcIlxyXG4gICAgICAgICAgICArIFwiXFxubmFtZSA6IFwiICAgICAgICsgKHRoaXMubmFtZSAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbm1ibmFtZTogXCIgICAgICArICh0aGlzLm1ibmFtZSAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sdiA6XCIgICAgICAgICAgKyAodGhpcy5sdiAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2l6ZV94OiBcIiAgICAgICsgKHRoaXMuc2l6ZV94ICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNpemVfeTogXCIgICAgICArICh0aGlzLnNpemVfeSAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zaXplX3o6IFwiICAgICAgKyAodGhpcy5zaXplX3ogICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubWF4X29mX3Jvb206IFwiICsgKHRoaXMubWF4X3Jvb20gID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnJvb21fc2l6ZTogXCIgICArICh0aGlzLnJvb21fc2l6ZSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfUG9pbnQgfSAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9DX1BvaW50XCI7XHJcbmltcG9ydCB7IENfUG9pbnREaXIsIEpTT05fUG9pbnREaXIgfSBmcm9tIFwiLi9DX1BvaW50RGlyXCI7XHJcbmltcG9ydCB7IElfQWJzdHJhY3QsIElfSlNPTl9VbmlxLCBKU09OX0FueSB9ICAgICBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcbmltcG9ydCB7IF9nZXRfdXVpZCB9ICAgICAgICAgICAgICAgICBmcm9tIFwiLi4vZF91dGwvRl9SYW5kXCI7XHJcbmltcG9ydCB7IFxyXG4gICAgQ19NYXplT2JqVmlldywgXHJcbiAgICBJX01hemVPYmpWaWV3LCBcclxuICAgIEpTT05fTWF6ZU9ialZpZXcgXHJcbn0gZnJvbSBcIi4vQ19NYXplT2JqVmlld1wiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9NYXplT2JqIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgY2xuYW1lPzogICAgc3RyaW5nLFxyXG4gICAgdW5pcV9pZD86ICAgc3RyaW5nLCBcclxuICAgIHBvcz86ICAgICAgIEpTT05fUG9pbnREaXIsXHJcbiAgICB2aWV3PzogICAgICBKU09OX01hemVPYmpWaWV3fHVuZGVmaW5lZCxcclxuICAgIHRocj86ICAgICAgIHN0cmluZywgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElfTWF6ZU9iaiBleHRlbmRzIElfSlNPTl9VbmlxLCBJX0Fic3RyYWN0IHtcclxuICAgIGdldF9wZDogICAgICgpPT5DX1BvaW50RGlyO1xyXG4gICAgd2l0aGluOiAgICAgKHA6IENfUG9pbnQpPT5ib29sZWFuO1xyXG4gICAgdmlldzogICAgICAgKCk9PklfTWF6ZU9ialZpZXd8dW5kZWZpbmVkO1xyXG4gICAgY2FuVGhyb3VnaDogKCk9PmJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX01hemVPYmogaW1wbGVtZW50cyBJX01hemVPYmoge1xyXG4gICAgcHJvdGVjdGVkIGNsbmFtZTogICAgc3RyaW5nID0gJ0NfTWF6ZU9iaic7XHJcblxyXG4gICAgcHJpdmF0ZSAgIHVuaXFfaWQ6ICAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHBvczogICAgICAgQ19Qb2ludERpcjtcclxuICAgIHByb3RlY3RlZCBteV92aWV3OiAgIElfTWF6ZU9ialZpZXd8dW5kZWZpbmVkO1xyXG4gICAgcHJvdGVjdGVkIGNhbl90aHI6ICAgYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5ld09iaihqPzogSlNPTl9NYXplT2JqfHVuZGVmaW5lZCk6IElfTWF6ZU9iaiB7XHJcbiAgICAgICAgaiA/Pz0ge307XHJcbiAgICAgICAgai5jbG5hbWUgPz89IENfTWF6ZU9iai5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgICAgIHN3aXRjaCAoai5jbG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBDX01hemVPYmouY29uc3RydWN0b3IubmFtZTogcmV0dXJuIG5ldyBDX01hemVPYmooaik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQ19NYXplT2JqKGopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG5ld09iaihqPzogSlNPTl9NYXplT2JqfHVuZGVmaW5lZCk6IElfTWF6ZU9iaiB7XHJcbiAgICAgICAgcmV0dXJuIENfTWF6ZU9iai5uZXdPYmooaik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVPYmp8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy51bmlxX2lkICAgID0gJ21hemVvYmpfJyArIF9nZXRfdXVpZCgpO1xyXG4gICAgICAgIHRoaXMuY2xuYW1lICAgICA9ICBDX01hemVPYmouY29uc3RydWN0b3IubmFtZTtcclxuICAgICAgICB0aGlzLnBvcyAgICAgICAgPSAgbmV3IENfUG9pbnREaXIoe3g6MCwgeTowLCB6OjAsIGQ6MH0pO1xyXG4gICAgICAgIHRoaXMubXlfdmlldyAgICA9ICB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5jYW5fdGhyICAgID0gIHRydWU7XHJcblxyXG4gICAgICAgIGlmIChqICE9PSB1bmRlZmluZWQpIHRoaXMuX19pbml0KGopO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX19pbml0KGo6IEpTT05fTWF6ZU9ianx1bmRlZmluZWQpOiBDX01hemVPYmoge1xyXG4gICAgICAgIGlmIChqID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoai51bmlxX2lkICE9PSB1bmRlZmluZWQpIHRoaXMudW5pcV9pZCAgID0gai51bmlxX2lkO1xyXG4gICAgICAgIGlmIChqLmNsbmFtZSAgIT09IHVuZGVmaW5lZCkgdGhpcy5jbG5hbWUgICAgPSBqLmNsbmFtZTtcclxuICAgICAgICBpZiAoai5wb3MgICAgICE9PSB1bmRlZmluZWQpIHRoaXMucG9zLmRlY29kZShqLnBvcyk7XHJcbiAgICAgICAgaWYgKGoudmlldyAgICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhqLnZpZXcpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubXlfdmlldyA/Pz0gQ19NYXplT2JqVmlldy5uZXdPYmooai52aWV3KTsgXHJcbiAgICAgICAgICAgIH0gZWxzZSB0aGlzLm15X3ZpZXcgID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoai5jYW5fdGhyICE9PSB1bmRlZmluZWQpIHRoaXMuY2FuX3RociA9IGouY2FuX3RociAhPT0gJzAnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG59XHJcblxyXG4gICAgcHVibGljIHVpZCgpOiBzdHJpbmcge3JldHVybiB0aGlzLnVuaXFfaWR9XHJcblxyXG4gICAgcHVibGljIHZpZXcoKTogSV9NYXplT2JqVmlld3x1bmRlZmluZWQge3JldHVybiB0aGlzLm15X3ZpZXd9XHJcbiAgICBwdWJsaWMgc2V0Vmlldyh2aWV3OiBJX01hemVPYmpWaWV3fHVuZGVmaW5lZCk6IHZvaWQge3RoaXMubXlfdmlldyA9IHZpZXd9XHJcblxyXG4gICAgcHVibGljIGNhblRocm91Z2goKTogYm9vbGVhbiB7cmV0dXJuIHRoaXMuY2FuX3Rocn1cclxuICAgIHB1YmxpYyBzZXRUaHJvdWdoKHRocjogYm9vbGVhbik6IGJvb2xlYW4ge3JldHVybiB0aGlzLmNhbl90aHIgPSB0aHJ9XHJcblxyXG4gICAgcHVibGljIGdldF9wZCgpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICByZXR1cm4gbmV3IENfUG9pbnREaXIodGhpcy5wb3MpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wZChwOiBDX1BvaW50RGlyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBwO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHdpdGhpbihwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zLndpdGhpbihwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTWF6ZU9iaiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdW5pcV9pZDogdGhpcy51bmlxX2lkLFxyXG4gICAgICAgICAgICBjbG5hbWU6ICB0aGlzLmNsbmFtZSxcclxuICAgICAgICAgICAgcG9zOiAgICAgdGhpcy5wb3MuZW5jb2RlKCksXHJcbiAgICAgICAgICAgIHZpZXc6ICAgIHRoaXMubXlfdmlldz8uZW5jb2RlKCkgPz8ge30sXHJcbiAgICAgICAgICAgIGNhbl90aHI6IHRoaXMuY2FuX3RociA/ICcxJyA6ICcwJyxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlY29kZShqPzogSlNPTl9NYXplT2JqfHVuZGVmaW5lZCk6IElfTWF6ZU9iaiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19pbml0KGopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBkZWNvZGUoaj86IEpTT05fTWF6ZU9ianx1bmRlZmluZWQpOiBJX01hemVPYmoge1xyXG4gICAgICAgIHJldHVybiBDX01hemVPYmoubmV3T2JqKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IElfQWJzdHJhY3QsIEpTT05fQW55IH0gZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5pbXBvcnQgeyBUX1dhbGwgfSAgICAgICAgICAgICAgIGZyb20gXCIuLi9kX21kbC9DX1dhbGxcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElfTWF6ZU9ialZpZXcgZXh0ZW5kcyBJX0Fic3RyYWN0IHtcclxuICAgIC8vIOihqOekuumWouS/gigyRHByZSkuL0NfV2FsbFxyXG4gICAgbGF5ZXI6ICAgKCk9Pm51bWJlcjtcclxuICAgIGxldHRlcjogICgpPT5zdHJpbmd8bnVsbDsgLy8gbnVsbDog6KaL44GI44Gq44GE44CB5L2V44KC44Gq44GEXHJcblxyXG4gICAgLy8g6KGo56S66Zai5L+CKDNEKVxyXG4gICAgY2FuU2hvdzogKCk9PmJvb2xlYW47XHJcbiAgICBkcm93MkQ6ICAoZmxvb3I6IFRfUmVjdCk9PnZvaWQ7XHJcbiAgICBkcm93M0Q6ICAoZnJvdDogIFRfV2FsbCwgYmFjazogVF9XYWxsKT0+dm9pZDtcclxuXHJcbiAgICBwYWRfdDogICAoKT0+bnVtYmVyOyAvL+S4iuWBtOOBruepuuOBjSjlibLlkIg6IDDjgYvjgokxKSBcclxuICAgIHBhZF9kOiAgICgpPT5udW1iZXI7IC8v5bqK5YG044Gu56m644GNKOWJsuWQiDogMOOBi+OCiTEpIFxyXG4gICAgcGFkX3M6ICAgKCk9Pm51bWJlcjsgLy/mqKrlgbTjga7nqbrjgY0o5Ymy5ZCIOiAw44GL44KJMSkgXHJcbiAgICBjb2xfZjogICAoKT0+c3RyaW5nfG51bGw7IC8v5q2j6Z2i44Gu6ImyKENTU+OCq+ODqeODvCnjgIJudWxs44Gv6YCP5piOXHJcbiAgICBjb2xfYjogICAoKT0+c3RyaW5nfG51bGw7IC8v6IOM6Z2i44Gu6ImyKENTU+OCq+ODqeODvCnjgIJudWxs44Gv6YCP5piOXHJcbiAgICBjb2xfczogICAoKT0+c3RyaW5nfG51bGw7IC8v5qiq5YG044Gu6ImyKENTU+OCq+ODqeODvCnjgIJudWxs44Gv6YCP5piOXHJcbiAgICBjb2xfdDogICAoKT0+c3RyaW5nfG51bGw7IC8v5LiK6YOo44Gu6ImyKENTU+OCq+ODqeODvCnjgIJudWxs44Gv6YCP5piO44CC44KE44KE44GT44GX44GE44GM44CB54mp5L2T44Gu5bqV6Z2i44Gr5b2T44Gf44KLXHJcbiAgICBjb2xfZDogICAoKT0+c3RyaW5nfG51bGw7IC8v5LiL6YOo44Gu6ImyKENTU+OCq+ODqeODvCnjgIJudWxs44Gv6YCP5piO44CC44KE44KE44GT44GX44GE44GM44CB54mp5L2T44Gu5aSp5LqV44Gr5b2T44Gf44KLXHJcbiAgICBjb2xfbDogICAoKT0+c3RyaW5nfG51bGw7IC8v44Op44Kk44Oz44Gu6ImyKENTU+OCq+ODqeODvClcclxuXHJcbiAgICBjb2xfMjogICAoKT0+c3RyaW5nfG51bGw7IC8vMkTjg57jg4Pjg5fjga7oibIoQ1NT44Kr44Op44O8KVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fTWF6ZU9ialZpZXcgZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBjbG5hbWU/OiBzdHJpbmcsXHJcbiAgICBsYXllcj86ICBudW1iZXIsXHJcbiAgICBsZXR0ZXI/OiBzdHJpbmcsXHJcbiAgICBzaG93PzogICBzdHJpbmcsXHJcbiAgICBwYWRfdD86ICBudW1iZXIsIC8vIOOCquODluOCuOOCp+OCr+ODiOS4iumDqOOBrumamemWk+OBruWJsuWQiCgwLjAg44GL44KJIDEuMCkgXHJcbiAgICBwYWRfZD86ICBudW1iZXIsIC8vIOOCquODluOCuOOCp+OCr+ODiOS4i+mDqOOBrumamemWk+OBruWJsuWQiCgwLjAg44GL44KJIDEuMCkgXHJcbiAgICBwYWRfcz86ICBudW1iZXIsIC8vIOOCquODluOCuOOCp+OCr+ODiOWRqOWbsuOBrumamemWk+OBruWJsuWQiCgwLjAg44GL44KJIDEuMCkgXHJcbiAgICBjb2xfZj86ICBzdHJpbmd8bnVsbCwgLy8g44Kq44OW44K444Kn44Kv44OI5q2j6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgY29sX2I/OiAgc3RyaW5nfG51bGwsIC8vIOOCquODluOCuOOCp+OCr+ODiOato+mdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIGNvbF9zPzogIHN0cmluZ3xudWxsLCAvLyDjgqrjg5bjgrjjgqfjgq/jg4jlgbTpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBjb2xfdD86ICBzdHJpbmd8bnVsbCwgLy8g44Kq44OW44K444Kn44Kv44OI5LiK6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgY29sX2Q/OiAgc3RyaW5nfG51bGwsIC8vIOOCquODluOCuOOCp+OCr+ODiOW6lemdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIGNvbF9sPzogIHN0cmluZ3xudWxsLCAvLyDjgqrjg5bjgrjjgqfjgq/jg4jjga7nt5rjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBjb2xfMj86ICBzdHJpbmd8bnVsbCwgLy8gMkTjg57jg4Pjg5fjga7pnaLjga5DU1Pjgqvjg6njg7xcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVF94eSAgID0ge3g6IG51bWJlciwgeTogbnVtYmVyfVxyXG5leHBvcnQgdHlwZSBUX1JlY3QgPSB7dGw6IFRfeHksIHRyOiBUX3h5LCBkbDogVF94eSwgZHI6IFRfeHl9O1xyXG5cclxuZXhwb3J0IGNsYXNzIENfTWF6ZU9ialZpZXcgaW1wbGVtZW50cyBJX01hemVPYmpWaWV3IHtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgY29uM0Q6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRHx1bmRlZmluZWQ7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldF9jb250ZXh0M0QoKTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfHVuZGVmaW5lZCB7cmV0dXJuIHRoaXM/LmNvbjNEfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRfY29udGV4dDNEKGNvbjNEPzogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7dGhpcy5jb24zRCA9IGNvbjNEfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgY29uMkQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRHx1bmRlZmluZWQ7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldF9jb250ZXh0MkQoKTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfHVuZGVmaW5lZCB7cmV0dXJuIHRoaXM/LmNvbjJEfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRfY29udGV4dDJEKGNvbjJEPzogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7dGhpcy5jb24yRCA9IGNvbjJEfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbmV3T2JqKGo/OiBKU09OX01hemVPYmpWaWV3fHVuZGVmaW5lZCk6IElfTWF6ZU9ialZpZXcge1xyXG4gICAgICAgIGogPz89IHt9O1xyXG4gICAgICAgIGouY2xuYW1lID8/PSBDX01hemVPYmpWaWV3LmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICAgICAgc3dpdGNoIChqLmNsbmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIENfTWF6ZU9ialZpZXcuY29uc3RydWN0b3IubmFtZTogICAgIHJldHVybiBuZXcgQ19NYXplT2JqVmlldyhqKTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybiBuZXcgQ19NYXplT2JqVmlldyhqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBuZXdPYmooaj86IEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkKTogSV9NYXplT2JqVmlldyB7XHJcbiAgICAgICAgcmV0dXJuIENfTWF6ZU9ialZpZXcubmV3T2JqKGopO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNsbmFtZTogICAgc3RyaW5nID0gJ0NfTWF6ZU9ialZpZXcnO1xyXG5cclxuICAgIHByaXZhdGUgbXlfbGF5ZXI6ICBudW1iZXI7ICAgICAgLy8gMkTooajnpLrjga7mmYLjga5DU1Pjg6zjgqTjg6Tjg7zjgILlkIzkvY3nva7jga7jgqrjg5bjgrjjgqfjga7lhoXjgZPjga7lgKTjgYzlpKfjgY3jgYTnianjgYzooajnpLrjgZXjgozjgotcclxuICAgIHByaXZhdGUgbXlfbGV0dGVyOiBzdHJpbmd8bnVsbDsgLy8gMkTooajnpLrjga7mmYLjga7lhajop5LmloflrZfjgIJudWxs44Gq44KJ6YCP5piOXHJcblxyXG4gICAgcHJpdmF0ZSBteV9zaG93OiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBteV9wYWRfdDogIG51bWJlcjsgLy8g44Kq44OW44K444Kn44Kv44OI5LiK6YOo44Gu6ZqZ6ZaT44Gu5Ymy5ZCIKDAuMCDjgYvjgokgMS4wKSBcclxuICAgIHByaXZhdGUgbXlfcGFkX2Q6ICBudW1iZXI7IC8vIOOCquODluOCuOOCp+OCr+ODiOS4i+mDqOOBrumamemWk+OBruWJsuWQiCgwLjAg44GL44KJIDEuMCkgXHJcbiAgICBwcml2YXRlIG15X3BhZF9zOiAgbnVtYmVyOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jlkajlm7Ljga7pmpnplpPjga7libLlkIgoMC4wIOOBi+OCiSAxLjApIFxyXG5cclxuICAgIHByaXZhdGUgbXlfY29sX2Y6ICBzdHJpbmd8bnVsbDsgLy8g44Kq44OW44K444Kn44Kv44OI5q2j6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgcHJpdmF0ZSBteV9jb2xfYjogIHN0cmluZ3xudWxsOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jmraPpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBwcml2YXRlIG15X2NvbF9zOiAgc3RyaW5nfG51bGw7IC8vIOOCquODluOCuOOCp+OCr+ODiOWBtOmdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIHByaXZhdGUgbXlfY29sX3Q6ICBzdHJpbmd8bnVsbDsgLy8g44Kq44OW44K444Kn44Kv44OI5LiK6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgcHJpdmF0ZSBteV9jb2xfZDogIHN0cmluZ3xudWxsOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jlupXpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBwcml2YXRlIG15X2NvbF9sOiAgc3RyaW5nfG51bGw7IC8vIOOCquODluOCuOOCp+OCr+ODiOOBrue3muOBrkNTU+OCq+ODqeODvCBcclxuXHJcbiAgICBwcml2YXRlIG15X2NvbF8yOiAgc3RyaW5nfG51bGw7IC8vIDJE44Oe44OD44OX44Gu6Z2i44GuQ1NT44Kr44Op44O8IFxyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmNsbmFtZSAgICAgPSAgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG5cclxuICAgICAgICB0aGlzLm15X2xheWVyICAgPSAgLTI7XHJcbiAgICAgICAgdGhpcy5teV9sZXR0ZXIgID0gIG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMubXlfcGFkX3QgICA9ICAwLjA7XHJcbiAgICAgICAgdGhpcy5teV9wYWRfZCAgID0gIDAuMDtcclxuICAgICAgICB0aGlzLm15X3BhZF9zICAgPSAgMC4wO1xyXG5cclxuICAgICAgICB0aGlzLm15X3Nob3cgICAgPSAgdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5teV9jb2xfZiAgID0gJyNmOGY4ZjgnOyBcclxuICAgICAgICB0aGlzLm15X2NvbF9iICAgPSAnI2FhYWFhYSc7IFxyXG4gICAgICAgIHRoaXMubXlfY29sX3MgICA9ICcjZGRkZGRkJzsgXHJcbiAgICAgICAgdGhpcy5teV9jb2xfdCAgID0gJyNmZmZmZmYnOyBcclxuICAgICAgICB0aGlzLm15X2NvbF9kICAgPSAnI2NjY2NjYyc7IFxyXG4gICAgICAgIHRoaXMubXlfY29sX2wgICA9ICcjMzMzMzMzJzsgXHJcblxyXG4gICAgICAgIHRoaXMubXlfY29sXzIgICA9ICcjY2NjY2NjJzsgXHJcblxyXG4gICAgICAgIGlmIChqICE9PSB1bmRlZmluZWQpIHRoaXMuX19pbml0KGopO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfX2luaXQoajogSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQpOiBJX01hemVPYmpWaWV3IHtcclxuICAgICAgICBpZiAoaiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGouY2xuYW1lICAhPT0gdW5kZWZpbmVkKSB0aGlzLmNsbmFtZSAgICA9IGouY2xuYW1lO1xyXG4gICAgICAgIGlmIChqLmxheWVyICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9sYXllciAgPSBqLmxheWVyO1xyXG4gICAgICAgIGlmIChqLmxldHRlciAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9sZXR0ZXIgPSBqLmxldHRlciAhPT0gJycgID8gai5sZXR0ZXIgOiBudWxsOyBcclxuICAgICAgICBpZiAoai5wYWRfdCAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfcGFkX3QgID0gai5wYWRfdDsgXHJcbiAgICAgICAgaWYgKGoucGFkX2QgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X3BhZF9kICA9IGoucGFkX2Q7IFxyXG4gICAgICAgIGlmIChqLnBhZF9zICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9wYWRfcyAgPSBqLnBhZF9zOyBcclxuICAgICAgICBpZiAoai5zaG93ICAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfc2hvdyAgID0gai5zaG93ICAgIT09ICcwJyA/IHRydWUgICAgIDogZmFsc2U7IFxyXG4gICAgICAgIGlmIChqLmNvbF9mICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9jb2xfZiAgPSBqLmNvbF9mICAhPT0gJycgID8gai5jb2xfZiAgOiBudWxsOyBcclxuICAgICAgICBpZiAoai5jb2xfYiAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfY29sX2IgID0gai5jb2xfYiAgIT09ICcnICA/IGouY29sX2IgIDogbnVsbDsgXHJcbiAgICAgICAgaWYgKGouY29sX3MgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2NvbF9zICA9IGouY29sX3MgICE9PSAnJyAgPyBqLmNvbF9zICA6IG51bGw7IFxyXG4gICAgICAgIGlmIChqLmNvbF90ICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9jb2xfdCAgPSBqLmNvbF90ICAhPT0gJycgID8gai5jb2xfdCAgOiBudWxsOyBcclxuICAgICAgICBpZiAoai5jb2xfZCAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfY29sX2QgID0gai5jb2xfZCAgIT09ICcnICA/IGouY29sX2QgIDogbnVsbDsgXHJcbiAgICAgICAgaWYgKGouY29sX2wgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2NvbF9sICA9IGouY29sX2wgICE9PSAnJyAgPyBqLmNvbF9sICA6IG51bGw7IFxyXG4gICAgICAgIGlmIChqLmNvbF8yICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9jb2xfMiAgPSBqLmNvbF8yICAhPT0gJycgID8gai5jb2xfMiAgOiBudWxsOyBcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxheWVyKCk6IG51bWJlciB7cmV0dXJuIHRoaXMubXlfbGF5ZXI7fVxyXG4gICAgcHVibGljIHNldF9sYXllcihsYXllcjogbnVtYmVyKSB7dGhpcy5teV9sYXllciA9IGxheWVyfVxyXG5cclxuICAgIHB1YmxpYyBsZXR0ZXIoKTogIHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9sZXR0ZXJ9XHJcbiAgICBwdWJsaWMgc2V0X2xldHRlcihsZXR0ZXI6IHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2xldHRlciA9IGxldHRlcn1cclxuXHJcbiAgICBwdWJsaWMgY2FuU2hvdygpOiBib29sZWFuIHtyZXR1cm4gdGhpcy5teV9zaG93fTtcclxuICAgIHB1YmxpYyBzZXRTaG93KGNhbl9zaG93OiBib29sZWFuKTogYm9vbGVhbiB7cmV0dXJuIHRoaXMubXlfc2hvdyA9IGNhbl9zaG93fTtcclxuXHJcbiAgICBwdWJsaWMgcGFkX3QoKTogIG51bWJlciB7cmV0dXJuIHRoaXMubXlfcGFkX3R9XHJcbiAgICBwdWJsaWMgcGFkX2QoKTogIG51bWJlciB7cmV0dXJuIHRoaXMubXlfcGFkX2R9XHJcbiAgICBwdWJsaWMgcGFkX3MoKTogIG51bWJlciB7cmV0dXJuIHRoaXMubXlfcGFkX3N9XHJcbiAgICBwdWJsaWMgc2V0X3BhZF90KHBhZF90OiBudW1iZXIpOiBudW1iZXIge3JldHVybiB0aGlzLm15X3BhZF90ID0gdGhpcy5teV9wYWRfZCArIHBhZF90IDwgMS4wID8gcGFkX3QgOiAwLjk5IC0gdGhpcy5teV9wYWRfZH1cclxuICAgIHB1YmxpYyBzZXRfcGFkX2QocGFkX2Q6IG51bWJlcik6IG51bWJlciB7cmV0dXJuIHRoaXMubXlfcGFkX2QgPSB0aGlzLm15X3BhZF90ICsgcGFkX2QgPCAxLjAgPyBwYWRfZCA6IDAuOTkgLSB0aGlzLm15X3BhZF90fVxyXG4gICAgcHVibGljIHNldF9wYWRfcyhwYWRfczogbnVtYmVyKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5teV9wYWRfcyA9IHBhZF9zfVxyXG5cclxuICAgIHB1YmxpYyBjb2xfZigpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX2Z9IFxyXG4gICAgcHVibGljIGNvbF9iKCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfYn0gXHJcbiAgICBwdWJsaWMgY29sX3MoKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9zfSBcclxuICAgIHB1YmxpYyBjb2xfdCgpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX3R9IFxyXG4gICAgcHVibGljIGNvbF9kKCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfZH0gXHJcbiAgICBwdWJsaWMgY29sX2woKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9sfSBcclxuICAgIHB1YmxpYyBzZXRfY29sX2YoY29sX2Y6IHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9mID0gY29sX2Z9IFxyXG4gICAgcHVibGljIHNldF9jb2xfYihjb2xfYjogc3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX2IgPSBjb2xfYn0gXHJcbiAgICBwdWJsaWMgc2V0X2NvbF9zKGNvbF9zOiBzdHJpbmd8bnVsbCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfcyA9IGNvbF9zfSBcclxuICAgIHB1YmxpYyBzZXRfY29sX3QoY29sX3Q6IHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF90ID0gY29sX3R9IFxyXG4gICAgcHVibGljIHNldF9jb2xfZChjb2xfZDogc3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX2QgPSBjb2xfZH0gXHJcbiAgICBwdWJsaWMgc2V0X2NvbF9sKGNvbF9sOiBzdHJpbmd8bnVsbCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfbCA9IGNvbF9sfSBcclxuXHJcbiAgICBwdWJsaWMgY29sXzIoKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF8yfVxyXG4gICAgcHVibGljIHNldF9jb2xfMihjb2xfMjogc3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sXzIgPSBjb2xfMn0gXHJcblxyXG4gICAgcHVibGljIGRyb3cyRChyZWN0OiBUX1JlY3QpOiB2b2lkIHtcclxuICAgICAgICBkcm93MkRfY2VsbChyZWN0LCB0aGlzLmNvbF8yKCkgPz8gJyNjY2NjY2MnLCB0aGlzLmNvbF9sKCkgPz8gJyM5OTk5ZmYnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJvdzNEKGZyb3Q6IFRfV2FsbCwgYmFjazogVF9XYWxsKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcm93M0Rfb2JqX2JhY2sgICAgICAoZnJvdCwgYmFjayk7XHJcbiAgICAgICAgdGhpcy5kcm93M0Rfb2JqX2Rvd24gICAgICAoZnJvdCwgYmFjayk7XHJcbiAgICAgICAgdGhpcy5kcm93M0Rfb2JqX3RvcCAgICAgICAoZnJvdCwgYmFjayk7XHJcbiAgICAgICAgdGhpcy5kcm93M0Rfb2JqX3JpZ2h0X3NpZGUoZnJvdCwgYmFjayk7XHJcbiAgICAgICAgdGhpcy5kcm93M0Rfb2JqX2xlZnRfc2lkZSAoZnJvdCwgYmFjayk7XHJcbiAgICAgICAgdGhpcy5kcm93M0Rfb2JqX2Zyb250ICAgICAoZnJvdCwgYmFjayk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRyb3czRF9vYmpfZG93bihcclxuICAgICAgICBmcm90OiAgVF9XYWxsLCBcclxuICAgICAgICBiYWNrOiAgVF9XYWxsLCBcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5TaG93KCkgfHwgdGhpcy5jb2xfdCgpID09PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMucGFkX3MoKSA8PSAwLjAgJiYgdGhpcy5wYWRfdCgpID49IDEuMCkge1xyXG4gICAgICAgICAgICBkcm93M0RfY2VsbF9mbG9vcihmcm90LCBiYWNrLCB0aGlzLmNvbF90KCkgPz8gJyM2NjY2ZmYnLCB0aGlzLmNvbF9sKCkgPz8gJyM5OTk5ZmYnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IG8gPSBfX2NhbGNfcGFkZGluZ19vYmoodGhpcywgZnJvdCwgYmFjayk7XHJcbiAgICAgICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgICAgICB0bDogby5mZGwsXHJcbiAgICAgICAgICAgIHRyOiBvLmZkcixcclxuICAgICAgICAgICAgZHI6IG8uYmRyLFxyXG4gICAgICAgICAgICBkbDogby5iZGwsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRyb3czRF9jZWxsKHJlY3QsIHRoaXMuY29sX3QoKSwgdGhpcy5jb2xfbCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRyb3czRF9vYmpfdG9wKFxyXG4gICAgICAgIGZyb3Q6ICBUX1dhbGwsIFxyXG4gICAgICAgIGJhY2s6ICBUX1dhbGwsIFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblNob3coKSB8fCB0aGlzLmNvbF9kKCkgPT09IG51bGwpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5wYWRfcygpIDw9IDAuMCAmJiB0aGlzLnBhZF9kKCkgPj0gMS4wKSB7XHJcbiAgICAgICAgICAgIGRyb3czRF9jZWxsX2NlaWxpbmcoZnJvdCwgYmFjaywgdGhpcy5jb2xfZCgpID8/ICcjYWFhYWFhJywgdGhpcy5jb2xfbCgpID8/ICcjOTk5OWZmJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjb25zdCBvID0gX19jYWxjX3BhZGRpbmdfb2JqKHRoaXMsIGZyb3QsIGJhY2spO1xyXG4gICAgICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICAgICAgdGw6IG8uZnRsLFxyXG4gICAgICAgICAgICB0cjogby5mdHIsXHJcbiAgICAgICAgICAgIGRyOiBvLmJ0cixcclxuICAgICAgICAgICAgZGw6IG8uYnRsLFxyXG4gICAgICAgIH1cclxuICAgICAgICBkcm93M0RfY2VsbChyZWN0LCB0aGlzLmNvbF9kKCksIHRoaXMuY29sX2woKSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRyb3czRF9vYmpfZnJvbnQoXHJcbiAgICAgICAgZnJvdDogIFRfV2FsbCwgXHJcbiAgICAgICAgYmFjazogIFRfV2FsbCwgXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuU2hvdygpIHx8IHRoaXMuY29sX2YoKSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbyA9IF9fY2FsY19wYWRkaW5nX29iaih0aGlzLCBmcm90LCBiYWNrKTtcclxuICAgICAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgICAgIHRsOiBvLmZ0bCwgXHJcbiAgICAgICAgICAgIHRyOiBvLmZ0ciwgXHJcbiAgICAgICAgICAgIGRyOiBvLmZkciwgXHJcbiAgICAgICAgICAgIGRsOiBvLmZkbCwgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZHJvdzNEX2NlbGwocmVjdCwgdGhpcy5jb2xfZigpLCB0aGlzLmNvbF9sKCkpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkcm93M0Rfb2JqX2JhY2soXHJcbiAgICAgICAgZnJvdDogIFRfV2FsbCwgXHJcbiAgICAgICAgYmFjazogIFRfV2FsbCwgXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuU2hvdygpIHx8IHRoaXMuY29sX2IoKSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbyA9IF9fY2FsY19wYWRkaW5nX29iaih0aGlzLCBmcm90LCBiYWNrKTtcclxuICAgICAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgICAgIHRsOiBvLmJ0bCwgXHJcbiAgICAgICAgICAgIHRyOiBvLmJ0ciwgXHJcbiAgICAgICAgICAgIGRyOiBvLmJkciwgXHJcbiAgICAgICAgICAgIGRsOiBvLmJkbCwgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZHJvdzNEX2NlbGwocmVjdCwgdGhpcy5jb2xfYigpLCB0aGlzLmNvbF9sKCkpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkcm93M0Rfb2JqX2xlZnRfc2lkZShcclxuICAgICAgICBmcm90OiAgVF9XYWxsLCBcclxuICAgICAgICBiYWNrOiAgVF9XYWxsLCBcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5TaG93KCkgfHwgdGhpcy5jb2xfcygpID09PSBudWxsKSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBjb25zdCBvID0gX19jYWxjX3BhZGRpbmdfb2JqKHRoaXMsIGZyb3QsIGJhY2spO1xyXG4gICAgICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICAgICAgdGw6IG8uYnRsLFxyXG4gICAgICAgICAgICB0cjogby5mdGwsXHJcbiAgICAgICAgICAgIGRyOiBvLmZkbCxcclxuICAgICAgICAgICAgZGw6IG8uYmRsLFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGRyb3czRF9jZWxsKHJlY3QsIHRoaXMuY29sX3MoKSwgdGhpcy5jb2xfbCgpKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZHJvdzNEX29ial9yaWdodF9zaWRlKFxyXG4gICAgICAgIGZyb3Q6ICBUX1dhbGwsIFxyXG4gICAgICAgIGJhY2s6ICBUX1dhbGwsIFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblNob3coKSB8fCB0aGlzLmNvbF9zKCkgPT09IG51bGwpIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IG8gPSBfX2NhbGNfcGFkZGluZ19vYmoodGhpcywgZnJvdCwgYmFjayk7XHJcbiAgICAgICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgICAgICB0bDogby5mdHIsXHJcbiAgICAgICAgICAgIHRyOiBvLmJ0cixcclxuICAgICAgICAgICAgZHI6IG8uYmRyLFxyXG4gICAgICAgICAgICBkbDogby5mZHIsXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZHJvdzNEX2NlbGwocmVjdCwgdGhpcy5jb2xfcygpLCB0aGlzLmNvbF9sKCkpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX01hemVPYmpWaWV3IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjbmFtZTogICB0aGlzLmNsbmFtZSxcclxuICAgICAgICAgICAgbGF5ZXI6ICAgdGhpcy5teV9sYXllcixcclxuICAgICAgICAgICAgbGV0dGVyOiAgdGhpcy5teV9sZXR0ZXIgPz8gJycsXHJcbiAgICAgICAgICAgIHBhZF90OiAgIHRoaXMubXlfcGFkX3QsIFxyXG4gICAgICAgICAgICBwYWRfZDogICB0aGlzLm15X3BhZF9kLCBcclxuICAgICAgICAgICAgcGFkX3M6ICAgdGhpcy5teV9wYWRfcywgXHJcbiAgICAgICAgICAgIHNob3c6ICAgIHRoaXMuY2FuU2hvdygpID8gJzEnIDogJzAnLFxyXG4gICAgICAgICAgICBjb2xfZjogICB0aGlzLm15X2NvbF9mID8/ICcnLCAgXHJcbiAgICAgICAgICAgIGNvbF9iOiAgIHRoaXMubXlfY29sX2IgPz8gJycsICBcclxuICAgICAgICAgICAgY29sX3M6ICAgdGhpcy5teV9jb2xfcyA/PyAnJywgXHJcbiAgICAgICAgICAgIGNvbF90OiAgIHRoaXMubXlfY29sX3QgPz8gJycsIFxyXG4gICAgICAgICAgICBjb2xfZDogICB0aGlzLm15X2NvbF9kID8/ICcnLCBcclxuICAgICAgICAgICAgY29sX2w6ICAgdGhpcy5teV9jb2xfbCA/PyAnJywgXHJcbiAgICAgICAgICAgIGNvbF8yOiAgIHRoaXMubXlfY29sXzIgPz8gJycsIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoajogSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQpOiBJX01hemVPYmpWaWV3IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX2luaXQoaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZShqOiBKU09OX01hemVPYmpWaWV3fHVuZGVmaW5lZCk6IElfTWF6ZU9ialZpZXcge1xyXG4gICAgICAgIHJldHVybiBDX01hemVPYmpWaWV3Lm5ld09iaihqKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBfX2NhbGNfcGFkZGluZ19vYmooXHJcbiAgICBvYmo6ICAgSV9NYXplT2JqVmlldyxcclxuICAgIGZyb3Q6ICBUX1dhbGwsIFxyXG4gICAgYmFjazogIFRfV2FsbCwgXHJcbik6IHtcclxuICAgIC8vIOitmOWIpeWtkOOBruaEj+WRs1xyXG4gICAgLy8g5bem56uv77ya5YmN5b6M44Gu5Yy65Yil44CAZjrliY3pnaLjgIBiOuiDjOmdolxyXG4gICAgLy8g5Lit5aSu77ya5LiK5LiL44Gu5Yy65Yil44CAdDrkuIrovrrjgIBkOuS4i+i+ulxyXG4gICAgLy8g5Y+z56uv77ya5bem5Y+z44Gu5Yy65Yil44CAbDrlt6blgbTjgIByOuWPs+WBtFxyXG4gICAgZnRsOlRfeHksIGZ0cjpUX3h5LCBmZHI6VF94eSwgZmRsOlRfeHksIFxyXG4gICAgYnRsOlRfeHksIGJ0cjpUX3h5LCBiZHI6VF94eSwgYmRsOlRfeHksIFxyXG59IHtcclxuICAgIGNvbnN0IHJlY3RfZnJvdCA9IGZyb3Q7XHJcbiAgICBjb25zdCByZWN0X2JhY2sgPSBiYWNrO1xyXG5cclxuICAgIGNvbnN0IHJhdGlvX1ggICA9IG9iai5wYWRfcygpIC8gMi4wO1xyXG4gICAgY29uc3QgcmF0aW9fVCAgID0gb2JqLnBhZF90KCk7XHJcbiAgICBjb25zdCByYXRpb19EICAgPSBvYmoucGFkX2QoKTtcclxuXHJcbiAgICBjb25zdCBmcm90X3BhZF9YICA9IE1hdGguYWJzKHJlY3RfZnJvdC5tYXhfeCAtIHJlY3RfZnJvdC5taW5feCkgKiByYXRpb19YO1xyXG4gICAgY29uc3QgYmFja19wYWRfWCAgPSBNYXRoLmFicyhyZWN0X2JhY2subWF4X3ggLSByZWN0X2JhY2subWluX3gpICogcmF0aW9fWDtcclxuXHJcbiAgICBjb25zdCBmcm90X3BhZF9UICA9IE1hdGguYWJzKHJlY3RfZnJvdC5tYXhfeSAtIHJlY3RfZnJvdC5taW5feSkgKiByYXRpb19UO1xyXG4gICAgY29uc3QgYmFja19wYWRfVCAgPSBNYXRoLmFicyhyZWN0X2JhY2subWF4X3kgLSByZWN0X2JhY2subWluX3kpICogcmF0aW9fVDtcclxuXHJcbiAgICBjb25zdCBmcm90X3BhZF9EICA9IE1hdGguYWJzKHJlY3RfZnJvdC5tYXhfeSAtIHJlY3RfZnJvdC5taW5feSkgKiByYXRpb19EO1xyXG4gICAgY29uc3QgYmFja19wYWRfRCAgPSBNYXRoLmFicyhyZWN0X2JhY2subWF4X3kgLSByZWN0X2JhY2subWluX3kpICogcmF0aW9fRDtcclxuXHJcbiAgICAvLyDjg5Hjg4fjgqPjg7PjgrDoqK3lrprlvozjga5YWeW6p+aomeOCkuioiOeul+OBmeOCi+OBn+OCgeOBq1xyXG4gICAgLy8g5b+F6KaB44Gq57ea5YiG44Gu5L2N572u5rG644KB44KS44GZ44KLXHJcbiAgICBjb25zdCBmcm90X3RvcF9sZnQgPSB7eDogcmVjdF9mcm90Lm1pbl94ICsgZnJvdF9wYWRfWCwgeTogcmVjdF9mcm90Lm1pbl95ICsgZnJvdF9wYWRfVH1cclxuICAgIGNvbnN0IGZyb3RfdG9wX3JndCA9IHt4OiByZWN0X2Zyb3QubWF4X3ggLSBmcm90X3BhZF9YLCB5OiByZWN0X2Zyb3QubWluX3kgKyBmcm90X3BhZF9UfVxyXG4gICAgY29uc3QgZnJvdF9kd25fbGZ0ID0ge3g6IHJlY3RfZnJvdC5taW5feCArIGZyb3RfcGFkX1gsIHk6IHJlY3RfZnJvdC5tYXhfeSAtIGZyb3RfcGFkX0R9XHJcbiAgICBjb25zdCBmcm90X2R3bl9yZ3QgPSB7eDogcmVjdF9mcm90Lm1heF94IC0gZnJvdF9wYWRfWCwgeTogcmVjdF9mcm90Lm1heF95IC0gZnJvdF9wYWRfRH1cclxuXHJcbiAgICBjb25zdCBiYWNrX3RvcF9sZnQgPSB7eDogcmVjdF9iYWNrLm1pbl94ICsgYmFja19wYWRfWCwgeTogcmVjdF9iYWNrLm1pbl95ICsgYmFja19wYWRfVH1cclxuICAgIGNvbnN0IGJhY2tfdG9wX3JndCA9IHt4OiByZWN0X2JhY2subWF4X3ggLSBiYWNrX3BhZF9YLCB5OiByZWN0X2JhY2subWluX3kgKyBiYWNrX3BhZF9UfVxyXG4gICAgY29uc3QgYmFja19kd25fbGZ0ID0ge3g6IHJlY3RfYmFjay5taW5feCArIGJhY2tfcGFkX1gsIHk6IHJlY3RfYmFjay5tYXhfeSAtIGJhY2tfcGFkX0R9XHJcbiAgICBjb25zdCBiYWNrX2R3bl9yZ3QgPSB7eDogcmVjdF9iYWNrLm1heF94IC0gYmFja19wYWRfWCwgeTogcmVjdF9iYWNrLm1heF95IC0gYmFja19wYWRfRH1cclxuXHJcbiAgICBsZXQgZnRsID0gX19jYWxjX3BhZGRpbmdfeHkoZnJvdF90b3BfbGZ0LCBiYWNrX3RvcF9sZnQsIHJhdGlvX1gpO1xyXG4gICAgbGV0IGZ0ciA9IF9fY2FsY19wYWRkaW5nX3h5KGZyb3RfdG9wX3JndCwgYmFja190b3Bfcmd0LCByYXRpb19YKTtcclxuICAgIGxldCBmZGwgPSBfX2NhbGNfcGFkZGluZ194eShmcm90X2R3bl9sZnQsIGJhY2tfZHduX2xmdCwgcmF0aW9fWCk7XHJcbiAgICBsZXQgZmRyID0gX19jYWxjX3BhZGRpbmdfeHkoZnJvdF9kd25fcmd0LCBiYWNrX2R3bl9yZ3QsIHJhdGlvX1gpO1xyXG5cclxuICAgIGxldCBidGwgPSBfX2NhbGNfcGFkZGluZ194eShiYWNrX3RvcF9sZnQsIGZyb3RfdG9wX2xmdCwgcmF0aW9fWCk7XHJcbiAgICBsZXQgYnRyID0gX19jYWxjX3BhZGRpbmdfeHkoYmFja190b3Bfcmd0LCBmcm90X3RvcF9yZ3QsIHJhdGlvX1gpO1xyXG4gICAgbGV0IGJkbCA9IF9fY2FsY19wYWRkaW5nX3h5KGJhY2tfZHduX2xmdCwgZnJvdF9kd25fbGZ0LCByYXRpb19YKTtcclxuICAgIGxldCBiZHIgPSBfX2NhbGNfcGFkZGluZ194eShiYWNrX2R3bl9yZ3QsIGZyb3RfZHduX3JndCwgcmF0aW9fWCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmdGw6IGZ0bCwgZnRyOiBmdHIsXHJcbiAgICAgICAgZmRsOiBmZGwsIGZkcjogZmRyLFxyXG4gICAgICAgIGJ0bDogYnRsLCBidHI6IGJ0cixcclxuICAgICAgICBiZGw6IGJkbCwgYmRyOiBiZHIsXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gX19jYWxjX3BhZGRpbmdfeHkoZnJvdDogVF94eSwgYmFjazogVF94eSwgcmF0aW86IG51bWJlcik6IFRfeHkge1xyXG4gICAgICAgIC8vIOe3muWIhihBeCArIEIgPSB5KeOBruaWueeoi+W8j+OBruS/guaVsOOCkuaxguOCgeOCi1xyXG4gICAgICAgIGNvbnN0IEEgPSAoZnJvdC55IC0gYmFjay55KSAvIChmcm90LnggLSBiYWNrLngpO1xyXG4gICAgICAgIGNvbnN0IEIgPSAgZnJvdC55IC0gQSAqIGZyb3QueDtcclxuICAgIFxyXG4gICAgICAgIC8vIOODkeODh+OCo+ODs+OCsOiqv+aVtOW+jOOBrlhZ5bqn5qiZ44Gu6KiI566XXHJcbiAgICAgICAgY29uc3QgcF9mcm90X3ggPSBmcm90LnggKyAoYmFjay54IC0gZnJvdC54KSAqIHJhdGlvO1xyXG4gICAgICAgIGNvbnN0IHBfZnJvdF95ID0gQSAqIHBfZnJvdF94ICsgQjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHt4OiBwX2Zyb3RfeCwgeTogcF9mcm90X3l9O1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZHJvdzNEX2NlbGxfZmxvb3IoXHJcbiAgICAgICAgcmVjdF9mcm90OiBUX1dhbGwsIFxyXG4gICAgICAgIHJlY3RfYmFjazogVF9XYWxsLCBcclxuICAgICAgICBmaWxsOiBzdHJpbmcgPSAnIzY2NjZmZicsIFxyXG4gICAgICAgIGxpbmU6IHN0cmluZyA9ICcjOTk5OWZmJ1xyXG4gICAgKTogdm9pZCB7XHJcblxyXG4gICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgIHRsOiB7eDogcmVjdF9mcm90Lm1pbl94LCB5OiByZWN0X2Zyb3QubWF4X3l9LFxyXG4gICAgICAgIHRyOiB7eDogcmVjdF9mcm90Lm1heF94LCB5OiByZWN0X2Zyb3QubWF4X3l9LFxyXG4gICAgICAgIGRyOiB7eDogcmVjdF9iYWNrLm1heF94LCB5OiByZWN0X2JhY2subWF4X3l9LFxyXG4gICAgICAgIGRsOiB7eDogcmVjdF9iYWNrLm1pbl94LCB5OiByZWN0X2JhY2subWF4X3l9XHJcbiAgICB9XHJcbiAgICBkcm93M0RfY2VsbChyZWN0LCBmaWxsLCBsaW5lKTtcclxufVxyXG5mdW5jdGlvbiBkcm93M0RfY2VsbF9jZWlsaW5nKFxyXG4gICAgICAgIHJlY3RfZnJvdDogVF9XYWxsLCBcclxuICAgICAgICByZWN0X2JhY2s6IFRfV2FsbCwgXHJcbiAgICAgICAgZmlsbDogc3RyaW5nID0gJyNhYWFhYWEnLCBcclxuICAgICAgICBsaW5lOiBzdHJpbmcgPSAnIzk5OTlmZidcclxuICAgICk6IHZvaWQge1xyXG5cclxuICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICB0bDoge3g6IHJlY3RfZnJvdC5taW5feCwgeTogcmVjdF9mcm90Lm1pbl95fSxcclxuICAgICAgICB0cjoge3g6IHJlY3RfZnJvdC5tYXhfeCwgeTogcmVjdF9mcm90Lm1pbl95fSxcclxuICAgICAgICBkcjoge3g6IHJlY3RfYmFjay5tYXhfeCwgeTogcmVjdF9iYWNrLm1pbl95fSxcclxuICAgICAgICBkbDoge3g6IHJlY3RfYmFjay5taW5feCwgeTogcmVjdF9iYWNrLm1pbl95fVxyXG4gICAgfVxyXG4gICAgZHJvdzNEX2NlbGwocmVjdCwgZmlsbCwgbGluZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyb3cyRF9jZWxsKHI6IFRfUmVjdCwgZmlsbDogc3RyaW5nfG51bGwsIGxpbmU6IHN0cmluZ3xudWxsKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb24gPSBDX01hemVPYmpWaWV3LmdldF9jb250ZXh0MkQoKTtcclxuICAgIGlmIChjb24gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbi5iZWdpblBhdGgoKTtcclxuICAgIGNvbi5tb3ZlVG8oci50bC54LCByLnRsLnkpO1xyXG4gICAgY29uLmxpbmVUbyhyLnRyLngsIHIudHIueSk7XHJcbiAgICBjb24ubGluZVRvKHIuZHIueCwgci5kci55KTtcclxuICAgIGNvbi5saW5lVG8oci5kbC54LCByLmRsLnkpO1xyXG4gICAgY29uLmNsb3NlUGF0aCgpO1xyXG5cclxuICAgIGlmIChmaWxsICE9IG51bGwpIHtcclxuICAgICAgICBjb24uZmlsbFN0eWxlICAgPSBmaWxsO1xyXG4gICAgICAgIGNvbi5maWxsKCk7XHJcbiAgICB9XHJcbiAgICBpZiAobGluZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbi5zdHJva2VTdHlsZSA9IGxpbmU7XHJcbiAgICAgICAgY29uLmxpbmVXaWR0aCAgID0gMTtcclxuICAgICAgICBjb24uc3Ryb2tlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyb3czRF9jZWxsKHI6IFRfUmVjdCwgZmlsbDogc3RyaW5nfG51bGwsIGxpbmU6IHN0cmluZ3xudWxsKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb24gPSBDX01hemVPYmpWaWV3LmdldF9jb250ZXh0M0QoKTtcclxuICAgIGlmIChjb24gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbi5iZWdpblBhdGgoKTtcclxuICAgIGNvbi5tb3ZlVG8oci50bC54LCByLnRsLnkpO1xyXG4gICAgY29uLmxpbmVUbyhyLnRyLngsIHIudHIueSk7XHJcbiAgICBjb24ubGluZVRvKHIuZHIueCwgci5kci55KTtcclxuICAgIGNvbi5saW5lVG8oci5kbC54LCByLmRsLnkpO1xyXG4gICAgY29uLmNsb3NlUGF0aCgpO1xyXG5cclxuICAgIGlmIChmaWxsICE9IG51bGwpIHtcclxuICAgICAgICBjb24uZmlsbFN0eWxlICAgPSBmaWxsO1xyXG4gICAgICAgIGNvbi5maWxsKCk7XHJcbiAgICB9XHJcbiAgICBpZiAobGluZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbi5zdHJva2VTdHlsZSA9IGxpbmU7XHJcbiAgICAgICAgY29uLmxpbmVXaWR0aCAgID0gMTtcclxuICAgICAgICBjb24uc3Ryb2tlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX0xvY2F0aW9uLCBKU09OX0xvY2F0aW9uIH0gZnJvbSBcIi4vQ19Mb2NhdGlvblwiO1xyXG5pbXBvcnQgeyBJX0pTT05fVW5pcSB9ICAgICAgICAgICAgICAgZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5pbXBvcnQgeyBfZ2V0X3V1aWQgfSAgICAgICAgICAgICAgICAgZnJvbSBcIi4uL2RfdXRsL0ZfUmFuZFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX01vdmFibGVQb2ludCBleHRlbmRzIEpTT05fTG9jYXRpb24ge1xyXG4gICAgdW5pcV9pZD86ICBzdHJpbmcsXHJcbiAgICBjdXJfdXJsPzogIHN0cmluZyxcclxuICAgIHRlYW1fdWlkPzogc3RyaW5nLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X212cHRfaW5mbyhhOiBKU09OX01vdmFibGVQb2ludHx1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGFsZXJ0KFwiTXZQdCBJbmZvOlwiIFxyXG4gICAgICAgICsgXCJcXG51bmlxX2lkOiAgXCIgICsgKGEudW5pcV9pZCAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl91cmw6ICBcIiAgKyAoYS5jdXJfdXJsICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxudGVhbV91aWQ6IFwiICArIChhLnRlYW1fdWlkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sY2tkOiBcIiAgICAgICsgKGEua2luZCAgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxjbm06IFwiICAgICAgKyAoYS5uYW1lICAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubGNpZDogXCIgICAgICArIChhLmxvY191aWQgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfeDogXCIgICAgICsgKGEubG9jX3Bvcz8ueCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl95OiBcIiAgICAgKyAoYS5sb2NfcG9zPy55ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3o6IFwiICAgICArIChhLmxvY19wb3M/LnogPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfZDogXCIgICAgICsgKGEubG9jX3Bvcz8uZCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENfTW92YWJsZVBvaW50IGV4dGVuZHMgQ19Mb2NhdGlvbiBpbXBsZW1lbnRzIElfSlNPTl9VbmlxIHtcclxuICAgIHByb3RlY3RlZCB1bmlxX2lkOiAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIGN1cl91cmw6ICBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgdGVhbV91aWQ6IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoanNvbj86IEpTT05fTW92YWJsZVBvaW50KSB7XHJcbiAgICAgICAgc3VwZXIoanNvbik7XHJcbiAgICAgICAgdGhpcy51bmlxX2lkICA9ICdNdlBvaW50IycgKyBfZ2V0X3V1aWQoKTtcclxuICAgICAgICB0aGlzLmN1cl91cmwgID0gJyc7XHJcbiAgICAgICAgdGhpcy50ZWFtX3VpZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgaWYgKGpzb24gIT09IHVuZGVmaW5lZCAmJiBqc29uICE9PSBudWxsKSB0aGlzLmRlY29kZShqc29uKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB1aWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudW5pcV9pZH1cclxuICAgIHB1YmxpYyB1cmwoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY3VyX3VybH1cclxuICAgIHB1YmxpYyB0aWQoKTogc3RyaW5nfHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRlYW1fdWlkfVxyXG5cclxuICAgIHB1YmxpYyBuZXdfdWlkKCk6IHZvaWQge3RoaXMudW5pcV9pZCA9ICdNdlBvaW50IycgKyBfZ2V0X3V1aWQoKTt9XHJcbiAgICBwdWJsaWMgc2V0X3VybCh1cmw6IHN0cmluZyk6IHZvaWQgeyB0aGlzLmN1cl91cmwgID0gdXJsO31cclxuICAgIHB1YmxpYyBzZXRfdGlkKHRpZDogc3RyaW5nKTogdm9pZCB7IHRoaXMudGVhbV91aWQgPSB0aWQ7fVxyXG5cclxuICAgIHB1YmxpYyBjbG9uZSgpOiBDX01vdmFibGVQb2ludCB7XHJcbiAgICAgICAgY29uc3QgbXZwdCA9IG5ldyBDX01vdmFibGVQb2ludCh0aGlzLmVuY29kZSgpKTtcclxuICAgICAgICBtdnB0Lm5ld191aWQoKTtcclxuICAgICAgICByZXR1cm4gbXZwdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZnJvbUpTT04odHh0OiBzdHJpbmcpOiBDX01vdmFibGVQb2ludCB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaiA9IEpTT04ucGFyc2UodHh0KSBhcyBKU09OX01vdmFibGVQb2ludDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlKGopO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHRvSlNPTigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmVuY29kZSgpLCBudWxsLCBcIlxcdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fb2JqX3RvX3N0cmluZyhvYTogQ19Nb3ZhYmxlUG9pbnQpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYS5lbmNvZGUoKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fb2JqQXJyYXlfdG9fc3RyaW5nKG9hYToge1t1aWQ6IHN0cmluZ106IENfTW92YWJsZVBvaW50fSk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3Qgb2EgPSBbXSBhcyBKU09OX01vdmFibGVQb2ludFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gb2FhKSBvYS5wdXNoKG9hYVtpaV0uZW5jb2RlKCkpO1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fc3RyaW5nX3RvX29iaih0eHQ6IHN0cmluZyk6IENfTW92YWJsZVBvaW50IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqICAgPSBKU09OLnBhcnNlKHR4dCkgYXMgSlNPTl9Nb3ZhYmxlUG9pbnRbXTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDX01vdmFibGVQb2ludCgpLmRlY29kZShqKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDX01vdmFibGVQb2ludCgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fc3RyaW5nX3RvX29iakFycmF5KHR4dDogc3RyaW5nKToge1t1aWQ6IHN0cmluZ106IENfTW92YWJsZVBvaW50fSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaiAgID0gSlNPTi5wYXJzZSh0eHQpIGFzIEpTT05fTW92YWJsZVBvaW50W107XHJcbiAgICAgICAgICAgIGNvbnN0IG1wYSA9IHt9IGFzIHtbaWQ6IHN0cmluZ106IENfTW92YWJsZVBvaW50fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqaiBvZiBqKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhYWEgPSBuZXcgQ19Nb3ZhYmxlUG9pbnQoKS5kZWNvZGUoamopO1xyXG4gICAgICAgICAgICAgICAgbXBhW2FhYS51aWQoKV0gPSBhYWE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG1wYTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX01vdmFibGVQb2ludCB7XHJcbiAgICAgICAgY29uc3QgaiA9IHN1cGVyLmVuY29kZSgpIGFzIEpTT05fTW92YWJsZVBvaW50O1xyXG4gICAgICAgIGoudW5pcV9pZCAgPSB0aGlzLnVuaXFfaWQ7XHJcbiAgICAgICAgai5jdXJfdXJsICA9IHRoaXMuY3VyX3VybDtcclxuICAgICAgICBqLnRlYW1fdWlkID0gdGhpcy50ZWFtX3VpZCA/PyAnJztcclxuICAgICAgICByZXR1cm4gajtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoaj86IEpTT05fTW92YWJsZVBvaW50KTogQ19Nb3ZhYmxlUG9pbnQge1xyXG4gICAgICAgIHN1cGVyLmRlY29kZShqKTtcclxuICAgICAgICBpZiAoaiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAoai51bmlxX2lkICAhPT0gdW5kZWZpbmVkKSB0aGlzLnVuaXFfaWQgID0gai51bmlxX2lkO1xyXG4gICAgICAgIGlmIChqLmN1cl91cmwgICE9PSB1bmRlZmluZWQpIHRoaXMuY3VyX3VybCAgPSBqLmN1cl91cmw7XHJcbiAgICAgICAgaWYgKGoudGVhbV91aWQgIT09IHVuZGVmaW5lZCkgdGhpcy50ZWFtX3VpZCA9IGoudGVhbV91aWQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRlYW1fdWlkID09PSAnJykgdGhpcy50ZWFtX3VpZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGFsZXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiTXZQdCBJbmZvOlwiIFxyXG4gICAgICAgICAgICArIFwiXFxudW5pcV9pZDogIFwiICArICh0aGlzLnVuaXFfaWQgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuY3VyX3VybDogIFwiICArICh0aGlzLmN1cl91cmwgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudGVhbV91aWQ6IFwiICArICh0aGlzLnRlYW1fdWlkICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubGNrZDogXCIgICAgICArICh0aGlzLmxvY19raW5kICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubGNubTogXCIgICAgICArICh0aGlzLmxvY19uYW1lICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubGNpZDogXCIgICAgICArICh0aGlzLmxvY191aWQgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuY3VyX3g6IFwiICAgICArICh0aGlzLmxvY19wb3M/LnggPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuY3VyX3k6IFwiICAgICArICh0aGlzLmxvY19wb3M/LnkgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuY3VyX3o6IFwiICAgICArICh0aGlzLmxvY19wb3M/LnogPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuY3VyX2Q6IFwiICAgICArICh0aGlzLmxvY19wb3M/LmQgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgSV9KU09OLCBKU09OX0FueSB9IGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9Qb2ludCBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIHg/OiBudW1iZXIsXHJcbiAgICB5PzogbnVtYmVyLFxyXG4gICAgej86IG51bWJlcixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfUG9pbnQgaW1wbGVtZW50cyBJX0pTT057XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gICAgcHVibGljIHk6IG51bWJlcjtcclxuICAgIHB1YmxpYyB6OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeD86IG51bWJlcnxDX1BvaW50fEpTT05fUG9pbnR8dW5kZWZpbmVkLCB5PzogbnVtYmVyLCB6PzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy55ID0gdGhpcy56ID0gLTM7XHJcblxyXG4gICAgICAgIGlmICh4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gMDsgdGhpcy55ID0gMDsgdGhpcy56ID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIHkgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIHogPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy54ID0geDsgdGhpcy55ID0geTsgdGhpcy56ID0gejtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHggPT09IFwib2JqZWN0XCIpIHsgXHJcbiAgICAgICAgICAgIGlmICh4IGluc3RhbmNlb2YgQ19Qb2ludCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy54ID0geC54OyB0aGlzLnkgPSB4Lnk7IHRoaXMueiA9IHguejtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVjb2RlKHgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMueCA9IHRoaXMueSA9IHRoaXMueiA9IC0yO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X3AoKTogQ19Qb2ludCB7cmV0dXJuIG5ldyBDX1BvaW50KHRoaXMpfSBcclxuICAgIHB1YmxpYyBzZXRfcChwOiBDX1BvaW50KTogQ19Qb2ludHx1bmRlZmluZWQge1xyXG4gICAgICAgIHRoaXMueCA9IHAueDsgdGhpcy55ID0gcC55OyB0aGlzLnogPSBwLno7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzX2V4aXN0KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHggPT0gdGhpcy54ICYmIHkgPT0gdGhpcy55ICYmIHogPT0gdGhpcy56KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB3aXRoaW4ocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAocC54ID09IHRoaXMueCAmJiBwLnkgPT0gdGhpcy55ICYmIHAueiA9PSB0aGlzLnopO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fUG9pbnQge1xyXG4gICAgICAgIHJldHVybiB7eDogdGhpcy54LCB5OiB0aGlzLnksIHo6IHRoaXMuen07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE/OiBKU09OX1BvaW50KTogQ19Qb2ludCB7XHJcbiAgICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKGEueCA9PT0gdW5kZWZpbmVkIHx8IGEueSA9PT0gdW5kZWZpbmVkIHx8IGEueiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICB0aGlzLnggPSBhLng7IHRoaXMueSA9IGEueTsgdGhpcy56ID0gYS56O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ19Qb2ludCwgSlNPTl9Qb2ludCB9IGZyb20gJy4vQ19Qb2ludCc7XHJcbmltcG9ydCB7VF9NYWtlRW51bVR5cGV9ICAgICAgICBmcm9tIFwiLi4vZF91dGwvVF9NYWtlRW51bVR5cGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUX0RpcmVjdGlvbjp7W2Rpcjogc3RyaW5nXTogbnVtYmVyfSA9IHtcclxuICAgIE46IDAsXHJcbiAgICBFOiAxLFxyXG4gICAgUzogMixcclxuICAgIFc6IDMsXHJcbiAgICBYOiA5OVxyXG59IGFzIGNvbnN0O1xyXG5leHBvcnQgdHlwZSBUX0RpcmVjdGlvbiA9IFRfTWFrZUVudW1UeXBlPHR5cGVvZiBUX0RpcmVjdGlvbj47XHJcblxyXG5mdW5jdGlvbiBfZGlyX2tleShkaXI6IFRfRGlyZWN0aW9uIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhUX0RpcmVjdGlvbikuZmluZChrZXkgPT4gVF9EaXJlY3Rpb25ba2V5XSA9PT0gZGlyKSA/PyBcIj8/Pz9cIjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9Qb2ludERpciBleHRlbmRzIEpTT05fUG9pbnQge1xyXG4gICAgZD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X1BEX2luZm8oYTogSlNPTl9Qb2ludERpcnx1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGFsZXJ0KFwiUG9pbnREYXRhIEluZm86XCIgXHJcbiAgICAgICAgKyBcIlxcbng6IFwiICAgICArIChhPy54ID8/ICc/JylcclxuICAgICAgICArIFwiXFxueTogXCIgICAgICsgKGE/LnkgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG56OiBcIiAgICAgKyAoYT8ueiA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmQ6IFwiICAgICArIChhPy5kID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyAgQ19Qb2ludERpciBleHRlbmRzIENfUG9pbnQge1xyXG4gICAgcHVibGljIGQ6IFRfRGlyZWN0aW9uO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGQ/OiBudW1iZXJ8VF9EaXJlY3Rpb258Q19Qb2ludERpcnxKU09OX1BvaW50RGlyKSB7XHJcbiAgICAgICAgc3VwZXIoZCk7XHJcbiAgICAgICAgdGhpcy5kID0gVF9EaXJlY3Rpb24uWDtcclxuXHJcbiAgICAgICAgaWYgKGQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgZCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmQgPSBkIGFzIFRfRGlyZWN0aW9uO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgZCA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBpZiAoZCBpbnN0YW5jZW9mIENfUG9pbnREaXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZCA9IGQuZCBhcyBUX0RpcmVjdGlvbjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVjb2RlKGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kID0gVF9EaXJlY3Rpb24uWDtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X2RfbWJfbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogIHJldHVybiAn5YyXJztcclxuICAgICAgICAgICAgY2FzZSAxOiAgcmV0dXJuICfmnbEnO1xyXG4gICAgICAgICAgICBjYXNlIDI6ICByZXR1cm4gJ+WNlyc7XHJcbiAgICAgICAgICAgIGNhc2UgMzogIHJldHVybiAn6KW/JztcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuICforI4nO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRfZCgpOiBUX0RpcmVjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfZChkOiBUX0RpcmVjdGlvbik6IENfUG9pbnREaXJ8dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAoIShfZGlyX2tleShkKSBpbiBUX0RpcmVjdGlvbikpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5kID0gZDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfcGQoKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BkKGQ6IENfUG9pbnREaXJ8SlNPTl9Qb2ludERpcik6IENfUG9pbnREaXJ8dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAoZCBpbnN0YW5jZW9mIENfUG9pbnREaXIpIHtcclxuICAgICAgICAgICAgaWYgKCEoX2Rpcl9rZXkoZC5kKSBpbiBUX0RpcmVjdGlvbikpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHN1cGVyLnNldF9wKGQpO1xyXG4gICAgICAgICAgICB0aGlzLmQgPSBkLmQ7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIShfZGlyX2tleShkLmQpIGluIFRfRGlyZWN0aW9uKSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmRlY29kZShkKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fUG9pbnREaXIge1xyXG4gICAgICAgIGNvbnN0IGogPSBzdXBlci5lbmNvZGUoKSBhcyBKU09OX1BvaW50RGlyO1xyXG4gICAgICAgIGouZCAgICAgPSB0aGlzLmQgYXMgbnVtYmVyO1xyXG4gICAgICAgIHJldHVybiBqO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShqPzogSlNPTl9Qb2ludERpcik6IENfUG9pbnREaXIge1xyXG4gICAgICAgIGlmIChqID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmICghKF9kaXJfa2V5KGouZCkgaW4gVF9EaXJlY3Rpb24pKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgc3VwZXIuZGVjb2RlKGopO1xyXG4gICAgICAgIHRoaXMuZCA9IGouZCBhcyBUX0RpcmVjdGlvbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGFsZXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiUG9pbnREYXRhIEluZm86XCIgXHJcbiAgICAgICAgICAgICsgXCJcXG54OiBcIiAgICAgKyAodGhpcy54ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnk6IFwiICAgICArICh0aGlzLnkgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuejogXCIgICAgICsgKHRoaXMueiA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5kOiBcIiAgICAgKyAodGhpcy5kID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJjbGFzcyBDX1BvaW50MkQge1xyXG4gICAgcHVibGljIHg6IG51bWJlcjtcclxuICAgIHB1YmxpYyB5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnggID0geDtcclxuICAgICAgICB0aGlzLnkgID0geTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBpc19leGlzdCh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAodGhpcy54ID09IHgpICYmICh0aGlzLnkgPT0geSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1BvaW50TGluazJEIGV4dGVuZHMgQ19Qb2ludDJEIHtcclxuICAgIHB1YmxpYyBkaTogbnVtYmVyO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIGRpOiBudW1iZXIgPSAtMSlcclxuICAgIHtcclxuICAgICAgICBzdXBlcih4LCB5KTtcclxuICAgICAgICB0aGlzLmRpID0gZGk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGNhc3QocDogQ19Qb2ludDJEfHVuZGVmaW5lZCk6IENfUG9pbnRMaW5rMkR8dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAocD8ueCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmIChwPy55ID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIHAgaW5zdGFuY2VvZiBDX1BvaW50TGluazJEID8gcCA6IG5ldyBDX1BvaW50TGluazJEKHAueCwgcC55KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1BvaW50U2V0MkQge1xyXG4gICAgcHVibGljIHNldDogQ19Qb2ludDJEW10gPVtdO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICBwdWJsaWMgcHVzaChwOiBDX1BvaW50MkQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldC5wdXNoKHApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfcG9pbnQoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBDX1BvaW50MkR8dW5kZWZpbmVkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHAgb2YgdGhpcy5zZXQpIHtcclxuICAgICAgICAgICAgaWYgKHA/LmlzX2V4aXN0KHgsIHkpKSByZXR1cm4gcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDsgICAgICAgICAgICBcclxuICAgIH1cclxuICAgIHB1YmxpYyByZW1vdmUocDogQ19Qb2ludDJEKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVfeHkocC54LCBwLnkpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZW1vdmVfeHkoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5zZXQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0W2ldPy5pc19leGlzdCh4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2V0W2ldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXQgPSBbLi4udGhpcy5zZXRdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGlzX2V4aXN0KHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwIG9mIHRoaXMuc2V0KSBpZiAocD8uaXNfZXhpc3QoeCwgeSkpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuLypcclxuY2xhc3MgUG9pbnQzRCB7XHJcbiAgICBwdWJsaWMgaW50ICR4O1xyXG4gICAgcHVibGljIGludCAkeTtcclxuICAgIHB1YmxpYyBpbnQgJHo7XHJcbiAgICBwdWJsaWMgZnVuY3Rpb24gX19jb25zdHJ1Y3QoaW50ICR4ID0gMCwgaW50ICR5ID0gMCwgaW50ICR6ID0gMClcclxuICAgIHtcclxuICAgICAgICAkdGhpcy0+eCAgPSAkeDtcclxuICAgICAgICAkdGhpcy0+eSAgPSAkeTtcclxuICAgICAgICAkdGhpcy0+eiAgPSAkejtcclxuICAgIH1cclxuICAgIHB1YmxpYyBmdW5jdGlvbiBpc19leGlzdChpbnQgJHgsIGludCAkeSwgaW50ICR6KTogYm9vbCB7XHJcbiAgICAgICAgcmV0dXJuICgkdGhpcy0+eCA9PSAkeCkgJiYgKCR0aGlzLT55ID09ICR5KSAmJiAoJHRoaXMtPnogPT0gJHopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZ1bmN0aW9uIHdpdGhpbihQb2ludDNEICRwKTogYm9vbCB7XHJcbiAgICAgICAgcmV0dXJuICR0aGlzLT5pc19leGlzdCgkcC0+eCwgJHAtPnksICRwLT56KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBmdW5jdGlvbiBlbmNvZGUoKTogYXJyYXkge1xyXG4gICAgICAgICRhID0gW107XHJcbiAgICAgICAgJGFbJ3gnXSA9ICR0aGlzLT54O1xyXG4gICAgICAgICRhWyd5J10gPSAkdGhpcy0+eTtcclxuICAgICAgICAkYVsneiddID0gJHRoaXMtPno7XHJcblxyXG4gICAgICAgIHJldHVybiAkYTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBmdW5jdGlvbiBkZWNvZGUoYXJyYXkgJGEpOiBQb2ludDNEIHtcclxuICAgICAgICBpZiAoIWlzX251bGwoJGEpICYmIGlzX2FycmF5KCRhKSkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBhcnJheV9rZXlfZXhpc3RzKCd4JywgJGEpICYmIChpc19udW1lcmljKCRhWyd4J10pICYmICRhWyd4J10gPiAgMClcclxuICAgICAgICAgICAgJiYgIGFycmF5X2tleV9leGlzdHMoJ3knLCAkYSkgJiYgKGlzX251bWVyaWMoJGFbJ3knXSkgJiYgJGFbJ3knXSA+ICAwKVxyXG4gICAgICAgICAgICAmJiAgYXJyYXlfa2V5X2V4aXN0cygneicsICRhKSAmJiAoaXNfbnVtZXJpYygkYVsneiddKSAmJiAkYVsneiddID49IDApXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgJHRoaXMtPnggPSAkYVsneCddO1xyXG4gICAgICAgICAgICAgICAgJHRoaXMtPnkgPSAkYVsneSddO1xyXG4gICAgICAgICAgICAgICAgJHRoaXMtPnogPSAkYVsneiddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAkdGhpcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZnVuY3Rpb24gZGVjb2RlX2FuZF9uZXcoYXJyYXkgJGEpOiBQb2ludDNEIHtcclxuICAgICAgICBpZiAoIWlzX251bGwoJGEpICYmIGlzX2FycmF5KCRhKSkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBhcnJheV9rZXlfZXhpc3RzKCd4JywgJGEpICYmIChpc19udW1lcmljKCRhWyd4J10pICYmICRhWyd4J10gPiAgMClcclxuICAgICAgICAgICAgJiYgIGFycmF5X2tleV9leGlzdHMoJ3knLCAkYSkgJiYgKGlzX251bWVyaWMoJGFbJ3knXSkgJiYgJGFbJ3knXSA+ICAwKVxyXG4gICAgICAgICAgICAmJiAgYXJyYXlfa2V5X2V4aXN0cygneicsICRhKSAmJiAoaXNfbnVtZXJpYygkYVsneiddKSAmJiAkYVsneiddID49IDApXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludDNEKCRhWyd4J10sICRhWyd5J10sICRhWyd6J10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUG9pbnQzRCgtMSwgLTEsIC0xKTtcclxuICAgIH1cclxufVxyXG4qL1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IF9tYXgsIF9taW4gfSAgICAgICAgICAgZnJvbSBcIi4uL2RfdXRsL0ZfTWF0aFwiO1xyXG5pbXBvcnQgeyBDX1BvaW50LCBKU09OX1BvaW50IH0gIGZyb20gXCIuL0NfUG9pbnRcIjtcclxuaW1wb3J0IHsgSlNPTl9BbnkgfSAgICAgICAgICAgICBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fUmFuZ2UgZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBtaW4/OiAgIEpTT05fUG9pbnQsIFxyXG4gICAgbWF4PzogICBKU09OX1BvaW50LCBcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfUmFuZ2Uge1xyXG4gICAgcHJvdGVjdGVkIG1pbjogQ19Qb2ludDtcclxuICAgIHByb3RlY3RlZCBtYXg6IENfUG9pbnQ7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocDE6IENfUG9pbnQsIHAyOiBDX1BvaW50KSB7XHJcbiAgICAgICAgdGhpcy5taW4gID0gbmV3IENfUG9pbnQoMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5tYXggID0gbmV3IENfUG9pbnQoMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5faW5pdChwMSwgcDIpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9pbml0KHAxOiBDX1BvaW50LCBwMjogQ19Qb2ludCk6IENfUmFuZ2Uge1xyXG4gICAgICAgIGNvbnN0IG1pbl94ID0gX21pbihbcDEueCwgcDIueF0pO1xyXG4gICAgICAgIGNvbnN0IG1heF94ID0gX21heChbcDEueCwgcDIueF0pO1xyXG5cclxuICAgICAgICBjb25zdCBtaW5feSA9IF9taW4oW3AxLnksIHAyLnldKTtcclxuICAgICAgICBjb25zdCBtYXhfeSA9IF9tYXgoW3AxLnksIHAyLnldKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWluX3ogPSBfbWluKFtwMS56LCBwMi56XSk7XHJcbiAgICAgICAgY29uc3QgbWF4X3ogPSBfbWF4KFtwMS56LCBwMi56XSk7XHJcblxyXG4gICAgICAgIHRoaXMubWluICA9IG5ldyBDX1BvaW50KG1pbl94LCBtaW5feSwgbWluX3opO1xyXG4gICAgICAgIHRoaXMubWF4ICA9IG5ldyBDX1BvaW50KG1heF94LCBtYXhfeSwgbWF4X3opO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd2l0aGluKGE6IENfUmFuZ2V8Q19Qb2ludHxudW1iZXIsIHk/OiBudW1iZXIsIHo/OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodHlwZW9mIGEgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIHkgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIHogPT09IFwibnVtYmVyXCIpIHsgXHJcbiAgICAgICAgICAgIGlmICggYSA8IHRoaXMubWluLnggfHwgYSA+IHRoaXMubWF4LnggKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggeSA8IHRoaXMubWluLnkgfHwgeSA+IHRoaXMubWF4LnkgKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggeiA8IHRoaXMubWluLnogfHwgeiA+IHRoaXMubWF4LnogKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGEgPT09IFwib2JqZWN0XCIgJiYgYSBpbnN0YW5jZW9mIENfUG9pbnQpIHsgXHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBhIGFzIENfUG9pbnQ7XHJcbiAgICAgICAgICAgIGlmICggcC54IDwgdGhpcy5taW4ueCB8fCBwLnggPiB0aGlzLm1heC54ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIHAueSA8IHRoaXMubWluLnkgfHwgcC55ID4gdGhpcy5tYXgueSApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCBwLnogPCB0aGlzLm1pbi56IHx8IHAueiA+IHRoaXMubWF4LnogKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGEgPT09IFwib2JqZWN0XCIgJiYgYSBpbnN0YW5jZW9mIENfUmFuZ2UpIHtcclxuICAgICAgICAgICAgY29uc3QgcCA9IGEgYXMgQ19SYW5nZTtcclxuICAgICAgICAgICAgaWYgKCBwLm1pbl94KCkgPCB0aGlzLm1pbi54IHx8IHAubWF4X3goKSA+IHRoaXMubWF4LnggKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggcC5taW5feSgpIDwgdGhpcy5taW4ueSB8fCBwLm1heF95KCkgPiB0aGlzLm1heC55ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIHAubWluX3ooKSA8IHRoaXMubWluLnogfHwgcC5tYXhfeigpID4gdGhpcy5tYXgueiApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBtaW5feCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5taW4ueDt9XHJcbiAgICBwdWJsaWMgbWF4X3goKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWF4Lng7fVxyXG4gICAgcHVibGljIG1pbl95KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1pbi55O31cclxuICAgIHB1YmxpYyBtYXhfeSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tYXgueTt9XHJcbiAgICBwdWJsaWMgbWluX3ooKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWluLno7fVxyXG4gICAgcHVibGljIG1heF96KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1heC56O31cclxuICAgIHB1YmxpYyBzaXplX3goKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXgueCAtIHRoaXMubWluLnggKyAxO1xyXG4gICAgfSBcclxuICAgIHB1YmxpYyBzaXplX3koKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXgueSAtIHRoaXMubWluLnkgKyAxO1xyXG4gICAgfSBcclxuICAgIHB1YmxpYyBzaXplX3ooKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXgueiAtIHRoaXMubWluLnogKyAxO1xyXG4gICAgfSBcclxuICAgIHB1YmxpYyBkb19hbGxfeHl6KGZuOiAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcikgPT4gYm9vbGVhbikge1xyXG4gICAgICAgIGZvciAodmFyIHogPSB0aGlzLm1pbi56OyB6IDw9IHRoaXMubWF4Lno7IHorKyApIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IHRoaXMubWluLnk7IHkgPD0gdGhpcy5tYXgueTsgeSsrICkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IHRoaXMubWluLng7IHkgPD0gdGhpcy5tYXgueDsgeCsrICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZm4oeCwgeSwgeikpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkb19hbGxfcChmbjogKHA6IENfUG9pbnQpID0+IGJvb2xlYW4pIHtcclxuICAgICAgICBmb3IgKHZhciB6ID0gdGhpcy5taW4uejsgeiA8PSB0aGlzLm1heC56OyB6KysgKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSB0aGlzLm1pbi55OyB5IDw9IHRoaXMubWF4Lnk7IHkrKyApIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSB0aGlzLm1pbi54OyB5IDw9IHRoaXMubWF4Lng7IHgrKyApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZuKG5ldyBDX1BvaW50KHgsIHksIHopKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1JhbmdlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBtaW46IHRoaXMubWluLmVuY29kZSgpLFxyXG4gICAgICAgICAgICBtYXg6IHRoaXMubWluLmVuY29kZSgpLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoajogSlNPTl9SYW5nZSk6IENfUmFuZ2Uge1xyXG4gICAgICAgIGlmIChqID09PSB1bmRlZmluZWQpICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAoai5taW4gPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKGoubWF4ID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGNvbnN0IHAxID0gbmV3IENfUG9pbnQoai5taW4pO1xyXG4gICAgICAgIGNvbnN0IHAyID0gbmV3IENfUG9pbnQoai5tYXgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbml0KHAxLCBwMik7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ19NYXplLCBKU09OX01hemUsIGFsZXJ0X21hemVfaW5mbyAgfSAgZnJvbSBcIi4vQ19NYXplXCI7XHJcbmltcG9ydCB7IENfR3VpbGQsIEpTT05fR3VpbGQsIGFsZXJ0X2d1bGRfaW5mbyB9IGZyb20gXCIuL0NfR3VpbGRcIjtcclxuaW1wb3J0IHsgQ19Nb3ZhYmxlUG9pbnQsIEpTT05fTW92YWJsZVBvaW50LCBhbGVydF9tdnB0X2luZm8gfSBmcm9tIFwiLi9DX01vdmFibGVQb2ludFwiO1xyXG5pbXBvcnQgeyBDX1RlYW0sIEpTT05fVGVhbSwgYWxlcnRfdGVhbV9pbmZvICB9ICBmcm9tIFwiLi9DX1RlYW1cIjtcclxuaW1wb3J0IHsgQ19TYXZlSW5mbywgSV9KU09OLCBKU09OX0FueSwgSlNPTl9TYXZlSW5mbyB9IGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9TYXZlRGF0YSBleHRlbmRzIEpTT05fU2F2ZUluZm8ge1xyXG4gICAgc2F2ZV9pZD86ICAgbnVtYmVyLFxyXG4gICAgcGxheWVyX2lkPzogbnVtYmVyLCBcclxuICAgIHVuaXFfbm8/OiAgIG51bWJlcixcclxuICAgIHRpdGxlPzogICAgIHN0cmluZyxcclxuICAgIGRldGFpbD86ICAgIHN0cmluZyxcclxuICAgIHBvaW50PzogICAgIHN0cmluZyxcclxuICAgIGF1dG9fbW9kZT86IHN0cmluZyxcclxuICAgIGlzX2FjdGl2ZT86IHN0cmluZyxcclxuICAgIGlzX2RlbGV0ZT86IHN0cmluZyxcclxuICAgIHNhdmVfdGltZT86IHN0cmluZyxcclxuXHJcbiAgICBhbGxfbXZwdD86ICBKU09OX01vdmFibGVQb2ludFtdLFxyXG4gICAgYWxsX21hemU/OiAgSlNPTl9NYXplW10sXHJcbiAgICBhbGxfdGVhbT86ICBKU09OX1RlYW1bXSxcclxuICAgIGFsbF9ndWxkPzogIEpTT05fR3VpbGRbXSxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X3NhdmVfaW5mbyhhOiBKU09OX1NhdmVEYXRhfHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoXCJTYXZlIEluZm86XCIgXHJcbiAgICAgICAgKyBcIlxcbnNhdmVfaWQ6ICAgIFwiICsgKGEuc2F2ZV9pZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxucGxheWVyX2lkOiAgXCIgKyAoYS5wbGF5ZXJfaWQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG51bmlxX25vOiAgICBcIiArIChhLnVuaXFfbm8gICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnRpdGxlOiAgICAgIFwiICsgKGEudGl0bGUgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuZGV0YWlsOiAgICAgXCIgKyAoYS5kZXRhaWwgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5wb2ludDogICAgICBcIiArIChhLnBvaW50ICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmF1dG9fbW9kZTogIFwiICsgKGEuYXV0b19tb2RlID8/ICc/JylcclxuICAgICAgICArIFwiXFxuaXNfYWN0aXZlOiAgXCIgKyAoYS5pc19hY3RpdmUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5pc19kZWxldGU6ICBcIiArIChhLmlzX2RlbGV0ZSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbm12cHRfY291bnQ6IFwiICsgKGEuYWxsX212cHQ/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbm1hemVfY291bnQ6IFwiICsgKGEuYWxsX21hemU/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmd1bGRfY291bnQ6IFwiICsgKGEuYWxsX2d1bGQ/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnRlYW1fY291bnQ6IFwiICsgKGEuYWxsX3RlYW0/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfc2F2ZV9kZXRhaWwoYTogSlNPTl9TYXZlRGF0YXx1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICB0cnkgeyBcclxuLy8gICAgICAgIGFsZXJ0KFwiU2F2ZSBEZXRhaWwobXZwdCk6XCIpO1xyXG4gICAgICAgIGZvciAoY29uc3QgbXZwdCBvZiBhLmFsbF9tdnB0Pz9bXSkgYWxlcnRfbXZwdF9pbmZvKG12cHQpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7YWxlcnQoJ2FsZXJ0IG12cHQgZXJyb3I6ICcgKyBlcnIpfVxyXG5cclxuICAgIHRyeSB7IFxyXG4vLyAgICAgICAgYWxlcnQoXCJTYXZlIERldGFpbCh0ZWFtKTpcIik7XHJcbiAgICAgICAgZm9yIChjb25zdCB0ZWFtIG9mIGEuYWxsX3RlYW0/P1tdKSBhbGVydF90ZWFtX2luZm8odGVhbSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHthbGVydCgnYWxlcnQgdGVhbSBlcnJvcjogJyArIGVycil9XHJcblxyXG4gICAgdHJ5IHsgXHJcbi8vICAgICAgICBhbGVydChcIlNhdmUgRGV0YWlsKG1hemUpOlwiKTtcclxuICAgICAgICBmb3IgKGNvbnN0IG1hemUgb2YgYS5hbGxfbWF6ZT8/W10pIGFsZXJ0X21hemVfaW5mbyhtYXplKTtcclxuICAgIH0gY2F0Y2ggKGVycikge2FsZXJ0KCdhbGVydCBtYXplIGVycm9yOiAnICsgZXJyKX1cclxuXHJcbiAgICB0cnkgeyBcclxuLy8gICAgICAgIGFsZXJ0KFwiU2F2ZSBEZXRhaWwoZ3VsZCk6XCIpO1xyXG4gICAgICAgIGZvciAoY29uc3QgZ3VsZCBvZiBhLmFsbF9ndWxkPz9bXSkgYWxlcnRfZ3VsZF9pbmZvKGd1bGQpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7YWxlcnQoJ2FsZXJ0IGd1bGQgZXJyb3I6ICcgKyBlcnIpfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENfU2F2ZURhdGEgZXh0ZW5kcyBDX1NhdmVJbmZvIGltcGxlbWVudHMgSV9KU09OIHtcclxuXHJcbi8qXHJcbiAgICBwdWJsaWMgc2F2ZV9pZDogICBudW1iZXI7XHJcbiAgICBwdWJsaWMgcGxheWVyX2lkOiBudW1iZXI7IFxyXG4gICAgcHVibGljIHVuaXFfbm86ICAgbnVtYmVyO1xyXG4gICAgcHVibGljIHRpdGxlOiAgICAgc3RyaW5nO1xyXG4gICAgcHVibGljIGRldGFpbDogICAgc3RyaW5nO1xyXG4gICAgcHVibGljIHBvaW50OiAgICAgc3RyaW5nO1xyXG4gICAgcHVibGljIGF1dG9fbW9kZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc19hY3RpdmU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaXNfZGVsZXRlOiBib29sZWFuO1xyXG4gICAgcHVibGljIHNhdmVfdGltZTogRGF0ZTtcclxuICAgIHB1YmxpYyBteXBvczogICAgIENfTW92YWJsZVBvaW50O1xyXG4qL1xyXG5cclxuICAgIHB1YmxpYyBhbGxfbXZwdDogIHtbdWlkOiBzdHJpbmddOiBDX01vdmFibGVQb2ludH07XHJcbiAgICBwdWJsaWMgYWxsX21hemU6ICB7W3VpZDogc3RyaW5nXTogQ19NYXplfTtcclxuICAgIHB1YmxpYyBhbGxfdGVhbTogIHtbdWlkOiBzdHJpbmddOiBDX1RlYW19O1xyXG4gICAgcHVibGljIGFsbF9ndWxkOiAge1t1aWQ6IHN0cmluZ106IENfR3VpbGR9O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihhPzogSlNPTl9TYXZlRGF0YSkge1xyXG4gICAgICAgIHN1cGVyKGEpO1xyXG5cclxuICAgICAgICB0aGlzLmFsbF9tdnB0ICA9IHt9O1xyXG4gICAgICAgIHRoaXMuYWxsX21hemUgID0ge307XHJcbiAgICAgICAgdGhpcy5hbGxfdGVhbSAgPSB7fVxyXG4gICAgICAgIHRoaXMuYWxsX2d1bGQgID0ge307XHJcblxyXG4gICAgICAgIGlmIChhICE9PSB1bmRlZmluZWQpIHRoaXMuZGVjb2RlKGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbmV3KGE/OiBKU09OX1NhdmVEYXRhKTogQ19TYXZlRGF0YSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX1NhdmVEYXRhKGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9TYXZlRGF0YSB7XHJcbiAgICAgICAgbGV0IHNhdmVfZGF0ZTogc3RyaW5nO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNhdmVfZGF0YSAgICA9IHN1cGVyLmVuY29kZSgpIGFzIEpTT05fU2F2ZURhdGE7XHJcblxyXG4gICAgICAgICAgICBzYXZlX2RhdGEuYWxsX212cHQgPSB0aGlzLl9lbmNvZGVfYWxsX2RhdGEodGhpcy5hbGxfbXZwdCk7IFxyXG4gICAgICAgICAgICBzYXZlX2RhdGEuYWxsX21hemUgPSB0aGlzLl9lbmNvZGVfYWxsX2RhdGEodGhpcy5hbGxfbWF6ZSk7IFxyXG4gICAgICAgICAgICBzYXZlX2RhdGEuYWxsX3RlYW0gPSB0aGlzLl9lbmNvZGVfYWxsX2RhdGEodGhpcy5hbGxfdGVhbSk7IFxyXG4gICAgICAgICAgICBzYXZlX2RhdGEuYWxsX2d1bGQgPSB0aGlzLl9lbmNvZGVfYWxsX2RhdGEodGhpcy5hbGxfZ3VsZCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2F2ZV9kYXRhO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBhbGVydCgnU2F2ZURhdGEgRW5jb2RlIEVycm9yOiAnICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfZW5jb2RlX2FsbF9kYXRhKGFsbF9kYXRhOiB7W3VpZDpzdHJpbmddOklfSlNPTn0pOiBKU09OX0FueVtdIHtcclxuICAgICAgICBjb25zdCBhbGxfSlNPTjogSlNPTl9BbnlbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gYWxsX2RhdGEpIGFsbF9KU09OLnB1c2goYWxsX2RhdGFbaV0uZW5jb2RlKCkpO1xyXG4gICAgICAgIHJldHVybiBhbGxfSlNPTjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVjb2RlKHM6IEpTT05fU2F2ZURhdGEpOiBDX1NhdmVEYXRhIHtcclxuICAgICAgICBzdXBlci5kZWNvZGUocyk7XHJcblxyXG4gICAgICAgIGlmIChzLmFsbF9tdnB0ICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsX212cHQgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqc29uX212cHQgb2Ygcy5hbGxfbXZwdCkge1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IG12cHQgPSAobmV3IENfTW92YWJsZVBvaW50KCkpLmRlY29kZShqc29uX212cHQpOyBcclxuICAgICAgICAgICAgICAgICB0aGlzLmFsbF9tdnB0W212cHQudWlkKCldID0gbXZwdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgaWYgKHMuYWxsX21hemUgICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxfbWF6ZSA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGpzb25fbWF6ZSBvZiBzLmFsbF9tYXplKSB7XHJcbiAgICAgICAgICAgICAgICAgY29uc3QgbWF6ZSA9IChuZXcgQ19NYXplKCkpLmRlY29kZShqc29uX21hemUpOyBcclxuICAgICAgICAgICAgICAgICB0aGlzLmFsbF9tYXplW21hemUudWlkKCldID0gbWF6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgaWYgKHMuYWxsX3RlYW0gICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxfdGVhbSA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGpzb25fdGVhbSBvZiBzLmFsbF90ZWFtKSB7XHJcbiAgICAgICAgICAgICAgICAgY29uc3QgdGVhbSA9IChuZXcgQ19UZWFtKCkpLmRlY29kZShqc29uX3RlYW0pOyBcclxuICAgICAgICAgICAgICAgICB0aGlzLmFsbF90ZWFtW3RlYW0udWlkKCldID0gdGVhbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgaWYgKHMuYWxsX2d1bGQgICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxfZ3VsZCA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGpzb25fZ3VsZCBvZiBzLmFsbF9ndWxkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBndWxkID0gKG5ldyBDX0d1aWxkKCkpLmRlY29kZShqc29uX2d1bGQpOyBcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsX2d1bGRbZ3VsZC51aWQoKV0gPSBndWxkO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWxlcnQoKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJTYXZlIEluZm86XCIgXHJcbiAgICAgICAgICAgICsgXCJcXG5zYXZlX2lkOiAgICBcIiArICh0aGlzLnNhdmVfaWQgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5wbGF5ZXJfaWQ6ICBcIiArICh0aGlzLnBsYXllcl9pZCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG51bmlxX25vOiAgICBcIiArICh0aGlzLnVuaXFfbm8gICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG50aXRsZTogICAgICBcIiArICh0aGlzLnRpdGxlICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5kZXRhaWw6ICAgICBcIiArICh0aGlzLmRldGFpbCAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5wb2ludDogICAgICBcIiArICh0aGlzLnBvaW50ICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5hdXRvX21vZGU6ICBcIiArICh0aGlzLmF1dG9fbW9kZT8nWSc6J04nKVxyXG4gICAgICAgICAgICArIFwiXFxuaXNfYWN0aXZlOiAgXCIgKyAodGhpcy5pc19hY3RpdmU/J1knOidOJylcclxuICAgICAgICAgICAgKyBcIlxcbmlzX2RlbGV0ZTogIFwiICsgKHRoaXMuaXNfZGVsZXRlPydZJzonTicpXHJcbiAgICAgICAgICAgICsgXCJcXG5tdnB0X2NvdW50OiBcIiArICh0aGlzLmFsbF9tdnB0Py5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubWF6ZV9jb3VudDogXCIgKyAodGhpcy5hbGxfbWF6ZT8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmd1bGRfY291bnQ6IFwiICsgKHRoaXMuYWxsX2d1bGQ/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG50ZWFtX2NvdW50OiBcIiArICh0aGlzLmFsbF90ZWFtPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhbGVydF9kZXRhaWwoKTogdm9pZCB7XHJcbiAgICAgICAgdHJ5IHsgXHJcbi8vICAgICAgICAgICAgYWxlcnQoXCJTYXZlIERldGFpbChtdnB0KTpcIik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWkgaW4gdGhpcy5hbGxfbXZwdCkgdGhpcy5hbGxfbXZwdFtpaV0uYWxlcnQoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHthbGVydCgnYWxlcnQgbXZwdCBlcnJvcjogJyArIGVycil9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHRyeSB7IFxyXG4vLyAgICAgICAgICAgIGFsZXJ0KFwiU2F2ZSBEZXRhaWwodGVhbSk6XCIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHRoaXMuYWxsX3RlYW0pIHRoaXMuYWxsX3RlYW1baWldLmFsZXJ0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7YWxlcnQoJ2FsZXJ0IHRlYW0gZXJyb3I6ICcgKyBlcnIpfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB0cnkgeyBcclxuLy8gICAgICAgICAgICBhbGVydChcIlNhdmUgRGV0YWlsKG1hemUpOlwiKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpaSBpbiB0aGlzLmFsbF9tYXplKSB0aGlzLmFsbF9tYXplW2lpXS5hbGVydCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge2FsZXJ0KCdhbGVydCBtYXplIGVycm9yOiAnICsgZXJyKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgdHJ5IHsgXHJcbi8vICAgICAgICAgICAgYWxlcnQoXCJTYXZlIERldGFpbChndWxkKTpcIik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWkgaW4gdGhpcy5hbGxfZ3VsZCkgdGhpcy5hbGxfZ3VsZFtpaV0uYWxlcnQoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHthbGVydCgnYWxlcnQgZ3VsZCBlcnJvcjogJyArIGVycil9XHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ19Nb3ZhYmxlUG9pbnQsIEpTT05fTW92YWJsZVBvaW50IH0gZnJvbSBcIi4vQ19Nb3ZhYmxlUG9pbnRcIjtcclxuXHJcbi8vIOOCteODvOODkOODvOWBtOOBqOOChOOCiuOBqOOCiuOBmeOCi0pTT07lvaLlvI/jg4fjg7zjgr/jga7jg4bjg7Pjg5fjg6zjg7zjg4hcclxuZXhwb3J0IGludGVyZmFjZSBKU09OX0FueSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnlcclxufVxyXG5cclxuLy8g44K144O844OQ44O85YG044Go44KE44KK44Go44KK44GZ44KL44Kv44Op44K544Gr5b+F6KaB44Gq44Oh44K944OD44OJXHJcbmV4cG9ydCBpbnRlcmZhY2UgSV9KU09OIHtcclxuICAgIGVuY29kZTogKCk9PkpTT05fQW55LFxyXG4gICAgZGVjb2RlOiAoajpKU09OX0FueSk9PklfSlNPTixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJX0pTT05fVW5pcSBleHRlbmRzIElfSlNPTiB7XHJcbiAgICB1aWQ6ICgpPT5zdHJpbmcsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSV9BYnN0cmFjdCB7XHJcbiAgICBuZXdPYmo6IChqPzpKU09OX0FueSk9PklfQWJzdHJhY3R8dW5kZWZpbmVkLFxyXG4gICAgZW5jb2RlOiAoKT0+SlNPTl9BbnksXHJcbi8vICBzdGF0aWMgZGVjb2RlOiAoajpKU09OX0FueSk9PklfSlNPTixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJX0pTT05fQ2xhc3Mge1xyXG4gICAgbmV3OiAoaj86IEpTT05fQW55KT0+SV9KU09OLFxyXG59XHJcblxyXG4vLyDjgrXjg7zjg5Djg7zlgbTjgajjgoTjgorlj5bjgorjgZnjgovpmpvjgavoh6rouqvjgpLmloflrZfliJfljJbjgZnjgovjgq/jg6njgrnjga7jg6Hjgr3jg4Pjg4lcclxuZXhwb3J0IGludGVyZmFjZSBJX0pTT05WYWx1ZSBleHRlbmRzIElfSlNPTntcclxuICAgIGZyb21KU09OOiAoKT0+dm9pZCxcclxuICAgIHRvSlNPTjogICAoKT0+dm9pZCxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX1NhdmVJbmZvIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgc2F2ZV9pZD86ICAgbnVtYmVyLFxyXG4gICAgcGxheWVyX2lkPzogbnVtYmVyLCBcclxuICAgIHVuaXFfbm8/OiAgIG51bWJlcixcclxuICAgIHRpdGxlPzogICAgIHN0cmluZyxcclxuICAgIGRldGFpbD86ICAgIHN0cmluZyxcclxuICAgIHBvaW50PzogICAgIHN0cmluZyxcclxuICAgIGF1dG9fbW9kZT86IHN0cmluZyxcclxuICAgIGlzX2FjdGl2ZT86IHN0cmluZyxcclxuICAgIGlzX2RlbGV0ZT86IHN0cmluZyxcclxuICAgIHNhdmVfdGltZT86IHN0cmluZyxcclxuICAgIG15cG9zPzogICAgIEpTT05fTW92YWJsZVBvaW50LFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfc2F2ZWluZm9faW5mbyhhOiBKU09OX1NhdmVJbmZvfHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoXCJTYXZlIEluZm86XCIgXHJcbiAgICAgICAgKyBcIlxcbnNhdmVfaWQ6ICAgIFwiICsgKGEuc2F2ZV9pZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxucGxheWVyX2lkOiAgXCIgKyAoYS5wbGF5ZXJfaWQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG51bmlxX25vOiAgICBcIiArIChhLnVuaXFfbm8gICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnRpdGxlOiAgICAgIFwiICsgKGEudGl0bGUgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuZGV0YWlsOiAgICAgXCIgKyAoYS5kZXRhaWwgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5wb2ludDogICAgICBcIiArIChhLnBvaW50ICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmF1dG9fbW9kZTogIFwiICsgKGEuYXV0b19tb2RlID8/ICc/JylcclxuICAgICAgICArIFwiXFxuaXNfYWN0aXZlOiAgXCIgKyAoYS5pc19hY3RpdmUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5pc19kZWxldGU6ICBcIiArIChhLmlzX2RlbGV0ZSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNhdmVfdGltZTogIFwiICsgKGEuc2F2ZV90aW1lID8/ICc/JylcclxuICAgICAgICArIFwiXFxubXl1cmw6ICAgICAgXCIgKyAoYS5teXBvcz8uY3VyX3VybCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxudGVhbV91aWQ6ICAgXCIgKyAoYS5teXBvcz8udGVhbV91aWQgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubG9jX2tpbmQ6ICAgXCIgKyAoYS5teXBvcz8ua2luZCAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubG9jX25hbWU6ICAgXCIgKyAoYS5teXBvcz8ubmFtZSAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubG9jX3VpZDogICAgXCIgKyAoYS5teXBvcz8ubG9jX3VpZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1NhdmVJbmZvIGltcGxlbWVudHMgSV9KU09OIHtcclxuICAgIHB1YmxpYyBzYXZlX2lkOiAgIG51bWJlcjtcclxuICAgIHB1YmxpYyBwbGF5ZXJfaWQ6IG51bWJlcjsgXHJcbiAgICBwdWJsaWMgdW5pcV9ubzogICBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGl0bGU6ICAgICBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGV0YWlsOiAgICBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcG9pbnQ6ICAgICBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYXV0b19tb2RlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlzX2FjdGl2ZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc19kZWxldGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgc2F2ZV90aW1lOiBEYXRlO1xyXG4gICAgcHVibGljIG15cG9zOiAgICAgQ19Nb3ZhYmxlUG9pbnQ7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGE/OiBKU09OX1NhdmVJbmZvKSB7XHJcbiAgICAgICAgdGhpcy5zYXZlX2lkICAgPSAtMTtcclxuICAgICAgICB0aGlzLnBsYXllcl9pZCA9IC0xOyBcclxuICAgICAgICB0aGlzLnVuaXFfbm8gICA9IC0xO1xyXG4gICAgICAgIHRoaXMudGl0bGUgICAgID0gJyc7XHJcbiAgICAgICAgdGhpcy5kZXRhaWwgICAgPSAnJztcclxuICAgICAgICB0aGlzLnBvaW50ICAgICA9ICcnO1xyXG4gICAgICAgIHRoaXMuYXV0b19tb2RlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc19hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNfZGVsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zYXZlX3RpbWUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLm15cG9zICAgICA9IG5ldyBDX01vdmFibGVQb2ludCgpO1xyXG5cclxuICAgICAgICBpZiAoYSAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5ldyhhPzogSlNPTl9TYXZlSW5mbyk6IENfU2F2ZUluZm8ge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ19TYXZlSW5mbyhhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fU2F2ZUluZm8ge1xyXG4gICAgICAgIGxldCBzYXZlX2RhdGU6IHN0cmluZztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzYXZlX2RhdGUgPSB0aGlzLnNhdmVfdGltZS50b0lTT1N0cmluZygpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBzYXZlX2RhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2F2ZV9pZDogICB0aGlzLnNhdmVfaWQsIFxyXG4gICAgICAgICAgICAgICAgcGxheWVyX2lkOiB0aGlzLnBsYXllcl9pZCwgIFxyXG4gICAgICAgICAgICAgICAgdW5pcV9ubzogICB0aGlzLnVuaXFfbm8sIFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICAgICB0aGlzLnRpdGxlLCBcclxuICAgICAgICAgICAgICAgIGRldGFpbDogICAgdGhpcy5kZXRhaWwsIFxyXG4gICAgICAgICAgICAgICAgcG9pbnQ6ICAgICB0aGlzLnBvaW50LCBcclxuICAgICAgICAgICAgICAgIGF1dG9fbW9kZTogdGhpcy5hdXRvX21vZGUgPyAnMScgOiAnMCcsIFxyXG4gICAgICAgICAgICAgICAgaXNfYWN0aXZlOiB0aGlzLmlzX2FjdGl2ZSA/ICcxJyA6ICcwJywgXHJcbiAgICAgICAgICAgICAgICBpc19kZWxldGU6IHRoaXMuaXNfZGVsZXRlID8gJzEnIDogJzAnLCBcclxuICAgICAgICAgICAgICAgIHNhdmVfdGltZTogc2F2ZV9kYXRlLCBcclxuICAgICAgICAgICAgICAgIG15cG9zOiAgICAgdGhpcy5teXBvcy5lbmNvZGUoKSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBhbGVydCgnU2F2ZURhdGEgRW5jb2RlIEVycm9yOiAnICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVjb2RlKHM6IEpTT05fU2F2ZUluZm8pOiBDX1NhdmVJbmZvIHtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgICA9IHMuc2F2ZV9pZCAgID8/IHRoaXMuc2F2ZV9pZDtcclxuICAgICAgICB0aGlzLnBsYXllcl9pZCA9IHMucGxheWVyX2lkID8/IHRoaXMucGxheWVyX2lkOyBcclxuICAgICAgICB0aGlzLnVuaXFfbm8gICA9IHMudW5pcV9ubyAgID8/IHRoaXMudW5pcV9ubztcclxuICAgICAgICB0aGlzLnRpdGxlICAgICA9IHMudGl0bGUgICAgID8/IHRoaXMudGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXRhaWwgICAgPSBzLmRldGFpbCAgICA/PyB0aGlzLmRldGFpbDtcclxuICAgICAgICB0aGlzLnBvaW50ICAgICA9IHMucG9pbnQgICAgID8/IHRoaXMucG9pbnQ7XHJcbiAgICAgICAgaWYgKHMuYXV0b19tb2RlID09PSB1bmRlZmluZWQpIHRoaXMuYXV0b19tb2RlOyBlbHNlIHMuYXV0b19tb2RlICE9PSAnMCcgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKHMuaXNfYWN0aXZlID09PSB1bmRlZmluZWQpIHRoaXMuaXNfYWN0aXZlOyBlbHNlIHMuaXNfYWN0aXZlICE9PSAnMCcgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKHMuaXNfZGVsZXRlID09PSB1bmRlZmluZWQpIHRoaXMuaXNfZGVsZXRlOyBlbHNlIHMuaXNfZGVsZXRlICE9PSAnMCcgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKHMuc2F2ZV90aW1lICE9PSB1bmRlZmluZWQpIHRoaXMuc2F2ZV90aW1lID0gbmV3IERhdGUocy5zYXZlX3RpbWUpOyBcclxuXHJcbiAgICAgICAgaWYgKHMubXlwb3MgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlwb3MuZGVjb2RlKHMubXlwb3MpOyBcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIlNhdmVJbmZvIERBVEE6XCIgXHJcbiAgICAgICAgICAgICsgXCJcXG5zYXZlX2lkOiAgICBcIiArICh0aGlzLnNhdmVfaWQgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5wbGF5ZXJfaWQ6ICBcIiArICh0aGlzLnBsYXllcl9pZCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG51bmlxX25vOiAgICBcIiArICh0aGlzLnVuaXFfbm8gICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG50aXRsZTogICAgICBcIiArICh0aGlzLnRpdGxlICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5kZXRhaWw6ICAgICBcIiArICh0aGlzLmRldGFpbCAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5wb2ludDogICAgICBcIiArICh0aGlzLnBvaW50ICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5hdXRvX21vZGU6ICBcIiArICh0aGlzLmF1dG9fbW9kZT8nWSc6J04nKVxyXG4gICAgICAgICAgICArIFwiXFxuaXNfYWN0aXZlOiAgXCIgKyAodGhpcy5pc19hY3RpdmU/J1knOidOJylcclxuICAgICAgICAgICAgKyBcIlxcbmlzX2RlbGV0ZTogIFwiICsgKHRoaXMuaXNfZGVsZXRlPydZJzonTicpXHJcbiAgICAgICAgICAgICsgXCJcXG5teXVybDogICAgICBcIiArICh0aGlzLm15cG9zLnVybCgpICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudGVhbV91aWQ6ICAgXCIgKyAodGhpcy5teXBvcy50aWQoKSAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxvY19raW5kOiAgIFwiICsgKHRoaXMubXlwb3MuZ2V0X2xja2QoKSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sb2NfbmFtZTogICBcIiArICh0aGlzLm15cG9zLmdldF9uYW1lKCkgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubG9jX3VpZDogICAgXCIgKyAodGhpcy5teXBvcy5nZXRfdWlkKCkgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfUG9pbnQgfSAgICAgICAgICAgICAgIGZyb20gXCIuL0NfUG9pbnRcIjtcclxuaW1wb3J0IHsgQ19Qb2ludERpciB9ICAgICAgICAgICAgZnJvbSAnLi9DX1BvaW50RGlyJztcclxuaW1wb3J0IHsgQ19Nb3ZhYmxlUG9pbnQgfSAgICAgICAgZnJvbSBcIi4vQ19Nb3ZhYmxlUG9pbnRcIjtcclxuaW1wb3J0IHsgQ19XYWxrZXIsIEpTT05fV2Fsa2VyIH0gZnJvbSBcIi4vQ19XYWxrZXJcIjtcclxuaW1wb3J0IHsgQ19IZXJvLCBKU09OX0hlcm8gfSAgICAgZnJvbSBcIi4vQ19IZXJvXCI7XHJcbmltcG9ydCB7IElfTWF6ZU9iaiB9ICAgICAgICAgICAgIGZyb20gXCIuL0NfTWF6ZU9ialwiO1xyXG5pbXBvcnQgeyBKU09OX0FueSB9ICAgICAgICAgICAgICBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcbmltcG9ydCB7IENfQ3VycmVudFRlYW1WaWV3IH0gICAgIGZyb20gXCIuL0NfVGVhbVZpZXdcIjtcclxuaW1wb3J0IHsgSV9NYXplT2JqVmlldywgSlNPTl9NYXplT2JqVmlldyB9ICBmcm9tIFwiLi9DX01hemVPYmpWaWV3XCI7XHJcbmltcG9ydCB7IENfR29vZCwgIFRfR29vZEtpbmQgfSAgIGZyb20gXCIuL0NfR29vZFwiO1xyXG5pbXBvcnQgeyBDX0dvb2RzTGlzdCwgSlNPTl9Hb29kc0xpc3QgfSBmcm9tIFwiLi9DX0dvb2RzTGlzdE5HXCI7XHJcbmltcG9ydCB7IF9nZXRfdXVpZCB9ICAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9UZWFtIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgaWQ/OiAgICAgICAgbnVtYmVyLCBcclxuICAgIHVuaXFfaWQ/OiAgIHN0cmluZywgXHJcbiAgICBzYXZlX2lkPzogICBudW1iZXIsIFxyXG4gICAgbmFtZT86ICAgICAgc3RyaW5nLCBcclxuICAgIGxvY2F0ZT86ICAgIEpTT05fV2Fsa2VyLFxyXG4gICAgZ29sZD86ICAgICAgbnVtYmVyLFxyXG4vLyAgICBnb29kcz86ICAgICBKU09OX0dvb2RzTGlzdCxcclxuICAgIGhlcm9lcz86ICAgIEpTT05fSGVyb1tdLCBcclxuICAgIG1vdGlvbj86ICAgIHN0cmluZyxcclxuICAgIHZpZXc/OiAgICAgIEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfdGVhbV9pbmZvKGE6IEpTT05fVGVhbXx1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGFsZXJ0KFwiVGVhbSBJbmZvOlwiIFxyXG4gICAgICAgICsgXCJcXG5pZDogICAgXCIgICAgICsgKGEuaWQgICAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxudW5pcV9pZDogIFwiICArIChhLnVuaXFfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbm5hbWU6ICBcIiAgICAgKyAoYS5uYW1lICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zYXZlX2lkOiBcIiAgICsgKGEuc2F2ZV9pZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxudXJsOiAgXCIgICAgICArIChhLmxvY2F0ZT8uY3VyX3VybCAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxja2Q6IFwiICAgICAgKyAoYS5sb2NhdGU/LmtpbmQgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sY25tOiBcIiAgICAgICsgKGEubG9jYXRlPy5uYW1lICAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubGNpZDogXCIgICAgICArIChhLmxvY2F0ZT8ubG9jX3VpZCAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl94OiBcIiAgICAgKyAoYS5sb2NhdGU/LmxvY19wb3M/LnggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfeTogXCIgICAgICsgKGEubG9jYXRlPy5sb2NfcG9zPy55ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3o6IFwiICAgICArIChhLmxvY2F0ZT8ubG9jX3Bvcz8ueiA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl9kOiBcIiAgICAgKyAoYS5sb2NhdGU/LmxvY19wb3M/LmQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5nb2xkOiBcIiAgICAgICsgKGEuZ29sZCAgICAgID8/ICAwIClcclxuLy8gICAgICAgICsgXCJcXG5nb29kczogXCIgICAgICsgKE9iamVjdC5rZXlzKGEuZ29vZHM/P1tdKS5sZW5ndGgpXHJcbiAgICAgICAgKyBcIlxcbmhlcm9lczogXCIgICAgKyAoYS5oZXJvZXM/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG5cclxuLy8gICAgaWYgKGEuaGVyb2VzICE9PSB1bmRlZmluZWQpIGFsZXJ0X2hlcm9lc19pbmZvKGEuaGVyb2VzKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1RlYW0gaW1wbGVtZW50cyBJX01hemVPYmoge1xyXG4gICAgcHVibGljIHN0YXRpYyBuZXdPYmooaj86IEpTT05fVGVhbSk6IENfVGVhbSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX1RlYW0oaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbmV3T2JqKGo/OiBKU09OX1RlYW0pOiBDX1RlYW0ge3JldHVybiBDX1RlYW0ubmV3T2JqKGopO31cclxuXHJcbiAgICBwcm90ZWN0ZWQgbXlfaWQ6ICAgICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgbXlfbmFtZTogICBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgdW5pcV9pZDogICBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgc2F2ZV9pZDogICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgd2Fsa2VyOiAgICBDX1dhbGtlcjtcclxuICAgIHByb3RlY3RlZCBnb2xkOiAgICAgIG51bWJlcjtcclxuLy8gICAgcHJvdGVjdGVkIGdvb2RzOiAgICAgQ19Hb29kc0xpc3Q7XHJcbiAgICBwcm90ZWN0ZWQgaGVyb2VzOiAgICB7W3VpZDogc3RyaW5nXTogQ19IZXJvfTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgbXlWaWV3OiAgICBJX01hemVPYmpWaWV3fHVuZGVmaW5lZDtcclxuICAgIHByb3RlY3RlZCBob3BlX21vdGlvbjogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9UZWFtKSB7XHJcblxyXG4gICAgICAgIHRoaXMubXlfaWQgICAgID0gIDA7XHJcbiAgICAgICAgdGhpcy5teV9uYW1lICAgPSAnTmVvIFRlYW0/JztcclxuICAgICAgICB0aGlzLnVuaXFfaWQgICA9ICdtYWlfdGVhbSMnICsgX2dldF91dWlkKCk7XHJcbiAgICAgICAgdGhpcy5zYXZlX2lkICAgPSAgMDtcclxuXHJcbiAgICAgICAgdGhpcy5teVZpZXcgPSBuZXcgQ19DdXJyZW50VGVhbVZpZXcodGhpcykgYXMgSV9NYXplT2JqVmlldztcclxuICAgICAgICB0aGlzLndhbGtlciA9IG5ldyBDX1dhbGtlcigpO1xyXG4gICAgICAgIHRoaXMud2Fsa2VyLnNldF90aWQodGhpcy51aWQoKSk7XHJcblxyXG4gICAgICAgIHRoaXMuZ29sZCAgID0gMDtcclxuLy8gICAgICAgIHRoaXMuZ29vZHMgID0gbmV3IENfR29vZHNMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5oZXJvZXMgPSB7fTtcclxuICAgICAgICB0aGlzLmhvcGVfbW90aW9uID0gJ05PUCc7ICAgIFxyXG4gICAgICAgIGlmIChqICE9PSB1bmRlZmluZWQpIHRoaXMuZGVjb2RlKGopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wcnAoYXJnIDogSlNPTl9UZWFtKSB7XHJcbiAgICAgICAgdGhpcy5kZWNvZGUoYXJnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdWlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnVuaXFfaWR9XHJcblxyXG4gICAgcHVibGljIHdpdGhpbihwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgaGVyZSA9IHRoaXMud2Fsa2VyPy5nZXRfcCgpO1xyXG4gICAgICAgIHJldHVybiBoZXJlPy53aXRoaW4ocCkgPz8gZmFsc2U7IFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aWV3KCk6ICBJX01hemVPYmpWaWV3fHVuZGVmaW5lZCB7cmV0dXJuIHRoaXMubXlWaWV3fVxyXG4gICAgcHVibGljIHdhbGsoKTogIENfV2Fsa2VyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53YWxrZXJcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGNhblRocm91Z2goKTogYm9vbGVhbiB7cmV0dXJuIHRydWV9XHJcblxyXG5cclxuICAgIHB1YmxpYyBocmVzKCk6ICBDX0hlcm9bXSB7XHJcbiAgICAgICAgY29uc3QgaHJlczogQ19IZXJvW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpaSBpbiB0aGlzLmhlcm9lcykgaHJlcy5wdXNoKHRoaXMuaGVyb2VzW2lpXSk7XHJcbiAgICAgICAgcmV0dXJuIGhyZXM7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIGNsZWFyX2hyZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZXJvZXMgPSB7fTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhZGRfaGVybyhoZXJvOiBDX0hlcm8pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlcm9lc1toZXJvLnVpZCgpXSA9IGhlcm87XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcm12X2hlcm8oaGVybzogQ19IZXJvKTogdm9pZCB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuaGVyb2VzW2hlcm8udWlkKCldO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRfbG9jKCk6IENfTW92YWJsZVBvaW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy53YWxrZXI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X2xvYyhsb2M6IENfTW92YWJsZVBvaW50KTogdm9pZCB7XHJcbiAgICAgICAgKHRoaXMud2Fsa2VyID8/PSBuZXcgQ19XYWxrZXIoKSkuZGVjb2RlKGxvYy5lbmNvZGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldF9wZCgpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53YWxrZXIuZ2V0X3BkKCk7XHJcbiAgICB9XHJcblxyXG4vKlxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX29ial90b19zdHJpbmcob2E6IENfVGVhbSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9hLCBudWxsLCBcIlxcdFwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9vYmpBcnJheV90b19zdHJpbmcob2FhOiB7W3VpZDogc3RyaW5nXTogQ19UZWFtfSk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3Qgb2EgPSBbXSBhcyBDX1RlYW1bXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGlpIGluIG9hYSkgb2EucHVzaChvYWFbaWldKTtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2EsIG51bGwsIFwiXFx0XCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ190b19vYmoodHh0OiBzdHJpbmcpOiBDX1RlYW0ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGogICA9IEpTT04ucGFyc2UodHh0KSBhcyBDX1RlYW1bXTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDX1RlYW0oaik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ19UZWFtKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdfdG9fb2JqQXJyYXkodHh0OiBzdHJpbmcpOiB7W3VpZDogc3RyaW5nXTogQ19UZWFtfSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaiAgID0gSlNPTi5wYXJzZSh0eHQpIGFzIEpTT05fVGVhbVtdO1xyXG4gICAgICAgICAgICBjb25zdCBtcGEgPSB7fSBhcyB7W2lkOiBzdHJpbmddOiBDX1RlYW19O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGpqIG9mIGopIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFhYSA9IG5ldyBDX1RlYW0oKS5kZWNvZGUoamopO1xyXG4gICAgICAgICAgICAgICAgbXBhW2FhYS51aWQoKV0gPSBhYWE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG1wYTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiovXHJcbiAgICBcclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9UZWFtIHtcclxuICAgICAgICB0aGlzLmdldF9sb2MoKTsgLy8gTG9jYXRpb27mg4XloLHjgpLmnIDmlrDjgavmm7TmlrBcclxuXHJcbiAgICAgICAgY29uc3QganNvbl9oZXJvZXM6IEpTT05fSGVyb1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaWkgaW4gdGhpcy5oZXJvZXMpIGpzb25faGVyb2VzLnB1c2godGhpcy5oZXJvZXNbaWldLmVuY29kZSgpKTsgIFxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogICAgICAgIHRoaXMubXlfaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICAgICAgdGhpcy5teV9uYW1lLFxyXG4gICAgICAgICAgICB1bmlxX2lkOiAgIHRoaXMudW5pcV9pZCxcclxuICAgICAgICAgICAgc2F2ZV9pZDogICB0aGlzLnNhdmVfaWQsXHJcbiAgICAgICAgICAgIGxvY2F0ZTogICAgdGhpcy53YWxrZXIuZW5jb2RlKCksXHJcbiAgICAgICAgICAgIGdvbGQ6ICAgICAgdGhpcy5nb2xkLFxyXG4vLyAgICAgICAgICAgIGdvb2RzOiAgICAgdGhpcy5nb29kcy5lbmNvZGUoKSxcclxuICAgICAgICAgICAgaGVyb2VzOiAgICBqc29uX2hlcm9lcyxcclxuICAgICAgICAgICAgbW90aW9uOiAgICB0aGlzLmhvcGVfbW90aW9uLFxyXG4gICAgICAgICAgICB2aWV3OiAgICAgIHRoaXMubXlWaWV3Py5lbmNvZGUoKSA/PyB7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX1RlYW18dW5kZWZpbmVkKTogQ19UZWFtIHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSAgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChhLmlkICAgIT09IHVuZGVmaW5lZCkgICAgdGhpcy5teV9pZCAgICAgICA9IGEuaWQ7XHJcbiAgICAgICAgaWYgKGEubmFtZSAhPT0gdW5kZWZpbmVkKSAgICB0aGlzLm15X25hbWUgICAgID0gYS5uYW1lO1xyXG4gICAgICAgIGlmIChhLnVuaXFfaWQgIT09IHVuZGVmaW5lZCkgdGhpcy51bmlxX2lkICAgICA9IGEudW5pcV9pZDtcclxuICAgICAgICBpZiAoYS5zYXZlX2lkICE9PSB1bmRlZmluZWQpIHRoaXMuc2F2ZV9pZCAgICAgPSBhLnNhdmVfaWQ7XHJcbiAgICAgICAgaWYgKGEubW90aW9uICE9PSB1bmRlZmluZWQpICB0aGlzLmhvcGVfbW90aW9uID0gYS5tb3Rpb247XHJcblxyXG4gICAgICAgIGlmIChhLmxvY2F0ZSAhPT0gdW5kZWZpbmVkKSAgdGhpcy53YWxrZXIuZGVjb2RlKGEubG9jYXRlKTtcclxuICAgICAgICBpZiAoYS5nb2xkICAgIT09IHVuZGVmaW5lZCkgIHRoaXMuZ29sZCA9IGEuZ29sZDtcclxuLy8gICAgICAgIGlmIChhLmdvb2RzICAhPT0gdW5kZWZpbmVkKSAgdGhpcy5nb29kcy5kZWNvZGUoYS5nb29kcyk7XHJcblxyXG4gICAgICAgIGlmIChhLmhlcm9lcyAhPT0gdW5kZWZpbmVkKSAge1xyXG4gICAgICAgICAgICB0aGlzLmhlcm9lcyA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGpzb25faGVybyBvZiBhLmhlcm9lcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVybyA9IG5ldyBDX0hlcm8oanNvbl9oZXJvKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVyb2VzW2hlcm8udWlkKCldID0gaGVybztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuLypcclxuICAgICAgICBpZiAoYS52aWV3ICAgICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGEudmlldykubGVuZ3RoID4gMCkgdGhpcy5teVZpZXcgPSBDX01hemVPYmpWaWV3Lm5ld09iaihhLnZpZXcpOyBcclxuICAgICAgICAgICAgZWxzZSB0aGlzLm15VmlldyA9IG5ldyBDX0N1cnJlbnRUZWFtVmlldyh0aGlzKSBhcyBJX01hemVPYmpWaWV3OyBcclxuICAgICAgICB9XHJcbiovXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGVuY29kZV9hbGwoYWxsX3RlYW06IENfVGVhbVtdKTogSlNPTl9UZWFtW10ge1xyXG4gICAgICAgIGNvbnN0IGFsbF90ZWFtX2RhdGE6IEpTT05fVGVhbVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgdGVhbSBvZiBhbGxfdGVhbSkge1xyXG4gICAgICAgICAgICBhbGxfdGVhbV9kYXRhLnB1c2godGVhbS5lbmNvZGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxfdGVhbV9kYXRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBkZWNvZGVfYWxsKGFsbF90ZWFtX2RhdGE6IEpTT05fVGVhbVtdKTogQ19UZWFtW10ge1xyXG4gICAgICAgIGNvbnN0IGFsbF90ZWFtOiBDX1RlYW1bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHRlYW1fZGF0YSBvZiBhbGxfdGVhbV9kYXRhKSB7XHJcbiAgICAgICAgICAgIGFsbF90ZWFtLnB1c2goKG5ldyBDX1RlYW0oKSkuZGVjb2RlKHRlYW1fZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsX3RlYW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIlRlYW0gSW5mbzpcIiBcclxuICAgICAgICAgICAgKyBcIlxcbmlkOiAgICBcIiAgICAgKyAodGhpcy5teV9pZCAgICAgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnVuaXFfaWQ6ICBcIiAgKyAodGhpcy51bmlxX2lkICAgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbm5hbWU6ICBcIiAgICAgKyAodGhpcy5teV9uYW1lICAgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNhdmVfaWQ6IFwiICAgKyAodGhpcy5zYXZlX2lkICAgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnVybDogIFwiICAgICAgKyAodGhpcy53YWxrZXIudXJsKCkgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxja2Q6IFwiICAgICAgKyAodGhpcy53YWxrZXIuZ2V0X2xja2Rfc3RyKCkgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubGNubTogXCIgICAgICArICh0aGlzLndhbGtlci5nZXRfbmFtZSgpICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sY2lkOiBcIiAgICAgICsgKHRoaXMud2Fsa2VyLmdldF91aWQoKSAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl94OiBcIiAgICAgKyAodGhpcy53YWxrZXIuZ2V0X3AoKS54ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl95OiBcIiAgICAgKyAodGhpcy53YWxrZXIuZ2V0X3AoKS55ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl96OiBcIiAgICAgKyAodGhpcy53YWxrZXIuZ2V0X3AoKS56ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl9kOiBcIiAgICAgKyAodGhpcy53YWxrZXIuZ2V0X2QoKSAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmdvbGQ6IFwiICAgICAgKyAoT2JqZWN0LmtleXModGhpcy5nb2xkID8/IHt9KS5sZW5ndGgpXHJcbiAgICAgICAgICAgICsgXCJcXG5oZXJvZXM6IFwiICAgICsgKHRoaXMuaGVyb2VzPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFsZXJ0X2hyZXMoKTogdm9pZCB7XHJcbi8vICAgICAgICBhbGVydChcIlRlYW0gSW5mbzpcIik7XHJcbiAgICAgICAgZm9yIChjb25zdCBpaSBpbiB0aGlzLmhlcm9lcykgdGhpcy5oZXJvZXNbaWldLmFsZXJ0KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBUX0RpcmVjdGlvbiB9ICAgICAgIGZyb20gJy4vQ19Qb2ludERpcic7XHJcbmltcG9ydCB7IENfVGVhbSwgSlNPTl9UZWFtIH0gZnJvbSBcIi4vQ19UZWFtXCI7XHJcbmltcG9ydCB7IFRfV2FsbCB9ICAgICAgICAgICAgZnJvbSBcIi4uL2RfbWRsL0NfV2FsbFwiO1xyXG5pbXBvcnQgeyBDX01hemVPYmpWaWV3LCBJX01hemVPYmpWaWV3LCBKU09OX01hemVPYmpWaWV3LCBUX1JlY3QgfSAgZnJvbSBcIi4vQ19NYXplT2JqVmlld1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENfQ3VycmVudFRlYW1WaWV3ICBpbXBsZW1lbnRzIElfTWF6ZU9ialZpZXcge1xyXG4gICAgcHVibGljICBzdGF0aWMgbmV3T2JqKGo/OiBKU09OX1RlYW0pOiBJX01hemVPYmpWaWV3IHtcclxuICAgICAgICBjb25zdCB0ZWFtID0gbmV3IENfVGVhbShqKTtcclxuICAgICAgICByZXR1cm4gbmV3IENfQ3VycmVudFRlYW1WaWV3KHRlYW0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljICBuZXdPYmooaj86IEpTT05fVGVhbSk6IElfTWF6ZU9ialZpZXcge3JldHVybiBDX0N1cnJlbnRUZWFtVmlldy5uZXdPYmooail9XHJcblxyXG4gICAgcHJpdmF0ZSBteV90ZWFtOiBDX1RlYW07XHJcbiAgICBwcml2YXRlIG15X2xheWVyOiAgbnVtYmVyID0gOTk7XHJcbiAgICBwdWJsaWMgIGNvbnN0cnVjdG9yKHRlYW06IENfVGVhbSkge1xyXG4gICAgICAgIHRoaXMubXlfdGVhbSA9IHRlYW07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxheWVyKCk6IG51bWJlciAgICAgICAgIHtyZXR1cm4gdGhpcy5teV9sYXllcjt9XHJcbiAgICBwdWJsaWMgc2V0X2xheWVyKGxheWVyOiBudW1iZXIpOiB2b2lkIHt0aGlzLm15X2xheWVyID0gbGF5ZXI7fVxyXG4gICAgcHVibGljIGxldHRlcigpOiBzdHJpbmd8bnVsbCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLm15X3RlYW0ud2FsaygpLmdldF9kKCkpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiByZXR1cm4gJ+KGkSc7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogcmV0dXJuICfihpInO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6IHJldHVybiAn4oaTJztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiByZXR1cm4gJ+KGkCc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAn8J+MgCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGNhblNob3coKTogYm9vbGVhbntyZXR1cm4gZmFsc2V9XHJcbiAgICBwdWJsaWMgcGFkX3QoKTogICBudW1iZXIge3JldHVybiAwLjB9IFxyXG4gICAgcHVibGljIHBhZF9kKCk6ICAgbnVtYmVyIHtyZXR1cm4gMC4wfSBcclxuICAgIHB1YmxpYyBwYWRfcygpOiAgIG51bWJlciB7cmV0dXJuIDAuMH0gXHJcbiAgICBwdWJsaWMgY29sX2YoKTogICBzdHJpbmd8bnVsbCB7cmV0dXJuIG51bGx9IFxyXG4gICAgcHVibGljIGNvbF9iKCk6ICAgc3RyaW5nfG51bGwge3JldHVybiBudWxsfSBcclxuICAgIHB1YmxpYyBjb2xfcygpOiAgIHN0cmluZ3xudWxsIHtyZXR1cm4gbnVsbH0gXHJcbiAgICBwdWJsaWMgY29sX3QoKTogICBzdHJpbmd8bnVsbCB7cmV0dXJuIG51bGx9IFxyXG4gICAgcHVibGljIGNvbF9kKCk6ICAgc3RyaW5nfG51bGwge3JldHVybiBudWxsfSBcclxuICAgIHB1YmxpYyBjb2xfbCgpOiAgIHN0cmluZ3xudWxsIHtyZXR1cm4gbnVsbH0gXHJcbiAgICBwdWJsaWMgY29sXzIoKTogICBzdHJpbmd8bnVsbCB7cmV0dXJuIG51bGx9IFxyXG5cclxuICAgIHB1YmxpYyBkcm93M0QoZnJvdDogVF9XYWxsLCBiYWNrOiBUX1dhbGwpOiB2b2lkIHt9XHJcblxyXG4gICAgcHVibGljIGRyb3cyRChyOiAgVF9SZWN0KTogdm9pZCB7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbiA9IENfTWF6ZU9ialZpZXcuZ2V0X2NvbnRleHQyRCgpO1xyXG4gICAgICAgIGlmIChjb24gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgY29uLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbi5tb3ZlVG8oci50bC54LCByLnRsLnkpO1xyXG4gICAgICAgIGNvbi5saW5lVG8oci50ci54LCByLnRyLnkpO1xyXG4gICAgICAgIGNvbi5saW5lVG8oci5kci54LCByLmRyLnkpO1xyXG4gICAgICAgIGNvbi5saW5lVG8oci5kbC54LCByLmRsLnkpO1xyXG4gICAgICAgIGNvbi5jbG9zZVBhdGgoKTtcclxuICAgIFxyXG4gICAgICAgIGNvbi5maWxsU3R5bGUgICA9IFwiI2ZmMDAwMFwiO1xyXG4gICAgICAgIGNvbi5maWxsKCk7XHJcblxyXG4gICAgICAgIGNvbi5zdHJva2VTdHlsZSA9IFwiI2ZmOTk5OVwiO1xyXG4gICAgICAgIGNvbi5saW5lV2lkdGggICA9IDM7XHJcbiAgICAgICAgY29uLnN0cm9rZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTWF6ZU9ialZpZXcge3JldHVybiB7Y25hbWU6ICdDdXJyZW50VGVhbVZpZXcnfX1cclxuICAgIHB1YmxpYyBkZWNvZGUoajogSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQpOiBJX01hemVPYmpWaWV3IHtyZXR1cm4gdGhpcyBhcyBJX01hemVPYmpWaWV3fVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ19Qb2ludERpciwgVF9EaXJlY3Rpb24gfSAgICAgICAgICAgZnJvbSBcIi4vQ19Qb2ludERpclwiO1xyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCwgSlNPTl9Nb3ZhYmxlUG9pbnQgfSBmcm9tIFwiLi9DX01vdmFibGVQb2ludFwiO1xyXG5pbXBvcnQgeyBJX0xvY2F0ZSB9ICAgICBmcm9tIFwiLi9DX0xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IElfSG9wZUFjdGlvbiB9IGZyb20gXCIuL0lfQ29tbW9uXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX1dhbGtlciBleHRlbmRzIEpTT05fTW92YWJsZVBvaW50IHtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfV2Fsa2VyIGV4dGVuZHMgQ19Nb3ZhYmxlUG9pbnQge1xyXG4gICAgY29uc3RydWN0b3Ioaj86IEpTT05fV2Fsa2VyKSB7XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3goKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5sb2NfcG9zLnh9XHJcbiAgICBwdWJsaWMgZ2V0X3koKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5sb2NfcG9zLnl9XHJcbiAgICBwdWJsaWMgZ2V0X3ooKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5sb2NfcG9zLnp9XHJcblxyXG4gICAgcHVibGljIHNldF94KHg6IG51bWJlcik6IHZvaWQge3RoaXMubG9jX3Bvcy54ID0geH1cclxuICAgIHB1YmxpYyBzZXRfeSh5OiBudW1iZXIpOiB2b2lkIHt0aGlzLmxvY19wb3MueSA9IHl9XHJcbiAgICBwdWJsaWMgc2V0X3ooejogbnVtYmVyKTogdm9pZCB7dGhpcy5sb2NfcG9zLnogPSB6fVxyXG5cclxuICAgIHB1YmxpYyBzZXRfcGxhY2UoXHJcbiAgICAgICAgcGxhY2U6IElfTG9jYXRlLCBcclxuICAgICAgICB1cmw/OiAgc3RyaW5nLCBcclxuICAgICAgICBwb3M/OiAgQ19Qb2ludERpcikge1xyXG5cclxuICAgICAgICB0aGlzLnNldF91aWQgKHBsYWNlLnVpZCgpKTtcclxuICAgICAgICB0aGlzLnNldF9sY2tkKHBsYWNlLmdldF9sY2tkKCkpO1xyXG4gICAgICAgIHRoaXMuc2V0X25hbWUocGxhY2UuZ2V0X25hbWUoKSk7XHJcblxyXG4gICAgICAgIGlmICh1cmwgIT09IHVuZGVmaW5lZCkgdGhpcy5zZXRfdXJsKHVybCk7XHJcbiAgICAgICAgaWYgKHBvcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0X3BkKHBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIGhvcGVfcF9md2QoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiTW92ZVwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wX2Z3ZCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMuc2V0X3BfZndkKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9wZV9wX2JhaygpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJNb3ZlXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMuZ2V0X3BfYmFrKCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy5zZXRfcF9iYWsoKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGhvcGVfcF9sZnQoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiTW92ZVwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wX2xmdCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMuc2V0X3BfbGZ0KCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9wZV9wX3JndCgpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJNb3ZlXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMuZ2V0X3Bfcmd0KCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy5zZXRfcF9yZ3QoKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBob3BlX3R1cm5fcigpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJUdXJuXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMuZ2V0X3BkKCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy50dXJuX3IoKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBob3BlX3R1cm5fbCgpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJUdXJuXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMuZ2V0X3BkKCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy50dXJuX2woKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaG9wZV9wX3VwKCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIlVwXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMuZ2V0X3BfdXAoKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLm1vdmVfcF91cCgpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhvcGVfcF9kb3duKCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIkRvd25cIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy5nZXRfcF9kb3duKCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy5tb3ZlX3BfZG93bigpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlX3BfdXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRfcF91cCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG1vdmVfcF9kb3duKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3BfZG93bigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc05HKCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldF9wX2Z3ZCgpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX2dldF9wX21vdmUoMSwgMCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BfZndkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3BkKHRoaXMuZ2V0X3BfZndkKCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wX2JhaygpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX2dldF9wX21vdmUoLTEsIDApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wX2JhaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldF9wZCh0aGlzLmdldF9wX2JhaygpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfcF9sZnQoKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19nZXRfcF9tb3ZlKDAsIC0xKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcF9sZnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRfcGQodGhpcy5nZXRfcF9sZnQoKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3Bfcmd0KCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9fZ2V0X3BfbW92ZSgwLCAxKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcF9yZ3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRfcGQodGhpcy5nZXRfcF9yZ3QoKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BfdXAoKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgY29uc3QgcCA9IG5ldyBDX1BvaW50RGlyKHRoaXMubG9jX3Bvcyk7XHJcbiAgICAgICAgcC56LS07XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BfdXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRfcGQodGhpcy5nZXRfcF91cCgpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfcF9kb3duKCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIGNvbnN0IHAgPSBuZXcgQ19Qb2ludERpcih0aGlzLmxvY19wb3MpO1xyXG4gICAgICAgIHAueisrO1xyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wX2Rvd24oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRfcGQodGhpcy5nZXRfcF9kb3duKCkpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9fZ2V0X3BfbW92ZShvZmZzZXRGQjogbnVtYmVyLCBvZmZzZXRMUjogbnVtYmVyKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgY29uc3QgcCA9IG5ldyBDX1BvaW50RGlyKHRoaXMubG9jX3Bvcyk7XHJcbiAgICAgICAgaWYgKG9mZnNldEZCICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5sb2NfcG9zLmQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjogcC55IC09IG9mZnNldEZCO2JyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOiBwLnggKz0gb2Zmc2V0RkI7YnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6IHAueSArPSBvZmZzZXRGQjticmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogcC54IC09IG9mZnNldEZCO2JyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvZmZzZXRMUiAhPT0gMCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMubG9jX3Bvcy5kKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHAueCArPSBvZmZzZXRMUjticmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogcC55ICs9IG9mZnNldExSO2JyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiBwLnggLT0gb2Zmc2V0TFI7YnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHAueSAtPSBvZmZzZXRMUjticmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfYXJvdW5kKGZyb250OiBudW1iZXIsIHJpZ2h0Om51bWJlciwgdXA6IG51bWJlciA9IDApOiBDX1BvaW50RGlyIHtcclxuICAgICAgICB2YXIgdGFyZ2V0X3ggID0gdGhpcy5sb2NfcG9zLng7XHJcbiAgICAgICAgdmFyIHRhcmdldF95ICA9IHRoaXMubG9jX3Bvcy55O1xyXG4gICAgICAgIHZhciB0YXJnZXRfeiAgPSB0aGlzLmxvY19wb3MueiAtIHVwO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5sb2NfcG9zLmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3ggKz0gcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeSAtPSBmcm9udDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeCArPSBmcm9udDtcclxuICAgICAgICAgICAgICAgIHRhcmdldF95ICs9IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzpcclxuICAgICAgICAgICAgICAgIHRhcmdldF94IC09IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3kgKz0gZnJvbnQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3ggLT0gZnJvbnQ7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeSAtPSByaWdodDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IENfUG9pbnREaXIoe3g6IHRhcmdldF94LCB5OiB0YXJnZXRfeSwgejogdGFyZ2V0X3osIGQ6IHRoaXMubG9jX3Bvcy5kfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdHVybl9yKCk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5sb2NfcG9zLmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLkU7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5TO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uVzticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLk47YnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHR1cm5fbCgpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubG9jX3Bvcy5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5XO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uTjticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLkU7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5TO2JyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyB0dXJuX2IoKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmxvY19wb3MuZCkge1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uUzticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLlc7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5OO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uVzticmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fV2Fsa2VyIHtcclxuICAgICAgICBjb25zdCBqID0gc3VwZXIuZW5jb2RlKCkgYXMgSlNPTl9XYWxrZXI7XHJcbiAgICAgICAgcmV0dXJuIGo7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IEpTT05fV2Fsa2VyKTogQ19XYWxrZXIge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHN1cGVyLmRlY29kZShhKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQge1RfTWFrZUVudW1UeXBlfSBmcm9tIFwiLi4vZF91dGwvVF9NYWtlRW51bVR5cGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUX0RpcmVjdGlvbiA9IHtcclxuICAgIE46ICAgMCxcclxuICAgIEU6ICAgMSxcclxuICAgIFM6ICAgMixcclxuICAgIFc6ICAgMyxcclxuICAgIFg6ICA5OSxcclxuICAgIE1BWDogM1xyXG59IGFzIGNvbnN0O1xyXG5leHBvcnQgdHlwZSBUX0RpcmVjdGlvbiA9IFRfTWFrZUVudW1UeXBlPHR5cGVvZiBUX0RpcmVjdGlvbj47XHJcblxyXG5leHBvcnQgdmFyICREaXJlY3Rpb25OYW1lID0ge1xyXG4gICAgMDogICfljJcnLFxyXG4gICAgMTogICfmnbEnLFxyXG4gICAgMjogICfljZcnLFxyXG4gICAgMzogICfopb8nLFxyXG4gICAgOTk6ICforI4nXHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgLy8g5LiA6Iis44Gr5L2/44GI44KL44Om44O844OG44Kj44Oq44OG44Kj44Gq5ZGq5paHXHJcbiAgICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jjgpLliJfmjJnlnovjgajjgZfjgablnovljJbjgZnjgovjga7jgavliKnnlKhcclxuICAgIGltcG9ydCB7VF9NYWtlRW51bVR5cGV9IGZyb20gXCIuLi9kX3V0bC9UX01ha2VFbnVtVHlwZVwiO1xyXG5cclxuICAgIC8vIOODgOODs+OCuOODp+ODs+ODnuODg+ODl+OBruOCu+ODq+OBrueorumhnuOCkuihqOOBmeWIl+aMmeWei1xyXG4gICAgLy8gTm9EZWY6IOacquWumue+qeODu+S4jeaYjlxyXG4gICAgLy8gRmxvb3I6IOW6ilxyXG4gICAgLy8gVW5leHA6IOacqui4j+WcsFxyXG4gICAgLy8gU3RvbmU6IOefs+WjgVxyXG4gICAgLy8gU3RyVXA6IOS4iuOCiumajuautVxyXG4gICAgLy8gU3RyRG46IOS4i+OCiumajuautVxyXG4gICAgLy8gRW1wdHk6IOWIneacn+eKtuaFi+ODu+S9leOCguOBquOBl1xyXG4gICAgLy8gXHJcbiAgICAvLyBmdW5jdGlvbiB0b19pbnQoTXpLaW5kKTogICAgICBpbnQgICAgICAgIOWIl+aMmeWei+OBq+WvvuW/nOOBmeOCi+WApCjmlbTmlbDlgKQp44KS6L+U44GZXHJcbiAgICAvLyBmdW5jdGlvbiBmcm9tX2ludChpbnQpOiAgICAgICBUX016S2luZCAgICAg5pW05pWw5YCk44Gr5a++5b+c44GZ44KL5YiX5oyZ5Z6L44KS6L+U44GZKOOCr+ODqeOCueODoeOCveODg+ODiSlcclxuICAgIC8vIGZ1bmN0aW9uIHRvX2xldHRlcihNektpbmQpOiAgIHN0cmluZyAgICAg5YiX5oyZ5Z6L44Gr5a++5b+c44GZ44KL5paH5a2X44KS6L+U44GZKOODgOODs+OCuOODp+ODs+OBrjJE6KGo56S655SoKVxyXG4gICAgLy8gZnVuY3Rpb24gZnJvbV9sZXR0ZXIoc3RyaW5nKTogVF9NektpbmQgICAgIOaWh+Wtl+OBq+WvvuW/nOOBmeOCi+WIl+aMmeWei+OCkui/lOOBmSjjgq/jg6njgrnjg6Hjgr3jg4Pjg4kpXHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IFRfTXpLaW5kOntba2V5OiBzdHJpbmddOiBudW1iZXJ9ICA9IHtcclxuICAgICAgICBOb0RlZjogICAwLFxyXG4gICAgICAgIEZsb29yOiAgIDEsXHJcbiAgICAgICAgVW5leHA6ICAgMixcclxuICAgICAgICBTdG9uZTogICAzLFxyXG4gICAgICAgIFVua3duOiAgIDQsXHJcbiAgICAgICAgU3RyVXA6ICAgNSxcclxuICAgICAgICBTdHJEbjogICA2LFxyXG4gICAgICAgIFN0clVEOiAgIDcsXHJcbiAgICAgICAgRW1wdHk6IDI1NSxcclxuICAgIH0gYXMgY29uc3Q7XHJcbiAgICBleHBvcnQgdHlwZSBUX016S2luZCAgID0gVF9NYWtlRW51bVR5cGU8dHlwZW9mIFRfTXpLaW5kPjtcclxuXHJcbiAgICBleHBvcnQgY29uc3QgVF9Sdk16S2luZDp7W2tleTogbnVtYmVyXTogVF9NektpbmR9ICA9IHtcclxuICAgICAgICAwOiAgIFRfTXpLaW5kLk5vRGVmLFxyXG4gICAgICAgIDE6ICAgVF9NektpbmQuRmxvb3IsXHJcbiAgICAgICAgMjogICBUX016S2luZC5VbmV4cCxcclxuICAgICAgICAzOiAgIFRfTXpLaW5kLlN0b25lLFxyXG4gICAgICAgIDQ6ICAgVF9NektpbmQuVW5rd24sXHJcbiAgICAgICAgNTogICBUX016S2luZC5TdHJVcCxcclxuICAgICAgICA2OiAgIFRfTXpLaW5kLlN0ckRuLFxyXG4gICAgICAgIDc6ICAgVF9NektpbmQuU3RyVUQsXHJcbiAgICAgICAgMjU1OiBUX016S2luZC5FbXB0eSxcclxuICAgIH0gYXMgY29uc3Q7XHJcbiAgICBleHBvcnQgdHlwZSBUX1J2TXpLaW5kID0gVF9NYWtlRW51bVR5cGU8dHlwZW9mIFRfUnZNektpbmQ+O1xyXG5cclxuIiwiLy8g5Yip55So44Kv44Op44K5562J44Gu6Kqt44G/6L6844G/XHJcbmltcG9ydCBteXNxbCBmcm9tICdteXNxbDIvcHJvbWlzZSc7XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9ICAgICAgICBmcm9tICcuLi9kX3V0bC9DX0RzcE1lc3NhZ2UnOyAvLyDnlLvpnaLjg6Hjg4Pjgrvjg7zjgrjjga7ooajnpLrnlKjjgq/jg6njgrlcclxuaW1wb3J0IHsgQ19HdWlsZCwgSlNPTl9HdWlsZCB9IGZyb20gXCIuLi9kX21kbC9DX0d1aWxkXCI7XHJcbmltcG9ydCB7IENfSGVyb1JEQiB9ICAgICAgICAgICBmcm9tICcuL0NfSGVyb1JEQic7XHJcblxyXG50eXBlIGRiX2Nvbm5lY3QgPSBteXNxbC5Qb29sQ29ubmVjdGlvbjtcclxuaW50ZXJmYWNlIElfdGJsX2d1bGQgZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0IHtcclxuICAgIGlkOiAgICAgIG51bWJlcixcclxuICAgIHNhdmVfaWQ6IG51bWJlcixcclxuICAgIHVuaXFfaWQ6IHN0cmluZyxcclxuICAgIG5hbWU6ICAgIHN0cmluZyxcclxuICAgIGdvbGQ6ICAgIG51bWJlcixcclxuLy8gICAgZ29vZHM6ICAgc3RyaW5nLFxyXG59XHJcbmludGVyZmFjZSBJX2xhc3RJbnNlcnQgZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX0d1aWxkUkRCIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRfZnJvbV9yZGJfYWxsKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlcik6IFByb21pc2U8Q19HdWlsZFtdPiB7XHJcbiAgICAgICAgY29uc3QgZ3VsZF9hcnJheSA9IGF3YWl0IENfR3VpbGRSREIuZ2V0X2Zyb21fdGJsX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGd1bGQgb2YgZ3VsZF9hcnJheSkge1xyXG4gICAgICAgICAgICBjb25zdCBocmVzX2FycmF5ID0gIGF3YWl0IENfSGVyb1JEQi5nZXRfZnJvbV9yZGJfYWxsKGRiX21haSwgbWVzLCBzYXZlX2lkLCBndWxkLnVpZCgpKTtcclxuICAgICAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaGVybyBvZiBocmVzX2FycmF5KSBndWxkLmFkZF9oZXJvKGhlcm8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGd1bGRfYXJyYXk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc2V0X3RvX3JkYihkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIsIGd1bGQ6IENfR3VpbGQpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCBndWxkX2lkID0gYXdhaXQgQ19HdWlsZFJEQi5hZGRfdGJsKGRiX21haSwgbWVzLCBzYXZlX2lkLCBndWxkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBoZXJvIG9mIGd1bGQuaHJlcygpKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IENfSGVyb1JEQi5zZXRfdG9fcmRiKGRiX21haSwgbWVzLCBzYXZlX2lkLCBndWxkLnVpZCgpLCBoZXJvKTtcclxuICAgICAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBcclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdG9fcmRiKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlciwgZ3VsZF91aWQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGF3YWl0IENfSGVyb1JEQi5kZWxfdG9fcmRiKGRiX21haSwgbWVzLCBzYXZlX2lkLCBndWxkX3VpZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IENfR3VpbGRSREIuZGVsX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZlX2lk44Gn5oyH5a6a44GV44KM44GfZ3VsZOODrOOCs+ODvOODieOCu+ODg+ODiOOCkuiqreOBv+i+vOOBv1xyXG4gICAgLy8gR3VpbGTjgq/jg6njgrnjga7phY3liJfjgavjgrvjg4Pjg4jjgZnjgotcclxuICAgIC8vIFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBnZXRfZnJvbV90YmxfYWxsKFxyXG4gICAgICAgIGRiX21haTogIGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgIG1lczogICAgIENfRHNwTWVzc2FnZSwgXHJcbiAgICAgICAgc2F2ZV9pZDogbnVtYmVyLFxyXG4gICAgKTogUHJvbWlzZTxDX0d1aWxkW10+IHtcclxuICAgICAgICBjb25zdCBnZXRfZ3VsZF9TUUwgPSBgXHJcbiAgICAgICAgICAgIFNFTEVDVCBcdGlkLCBzYXZlX2lkLCB1bmlxX2lkLCBuYW1lLCBnb2xkXHJcbiAgICAgICAgICAgIEZST00gICAgdGJsX2d1bGRcclxuICAgICAgICAgICAgV0hFUkUgICBzYXZlX2lkID0gOnNhdmVfaWRcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3Jlc3VsdFJlY29yZFNldF0gPSBhd2FpdCBkYl9tYWkucXVlcnk8SV90YmxfZ3VsZFtdPihnZXRfZ3VsZF9TUUwsIHtzYXZlX2lkOiBzYXZlX2lkfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCA2NzogJHtnZXRfZ3VsZF9TUUx9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGlmIChyZXN1bHRSZWNvcmRTZXQubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGd1bGRfYXJyYXkgPSBbXSBhcyBDX0d1aWxkW107XHJcbiAgICAgICAgZm9yIChjb25zdCByciBvZiByZXN1bHRSZWNvcmRTZXQpIHtcclxuICAgICAgICAgICAgZ3VsZF9hcnJheS5wdXNoKG5ldyBDX0d1aWxkKENfR3VpbGRSREIuZnJvbV9zdHJpbmdBcnJheV90b19KU09OKHJyKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZ3VsZF9hcnJheTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEQuWHpueQhuOAgmd1bGTjg4bjg7zjg5bjg6vjgavoh6rouqvjga7jg4fjg7zjgr/jgpLov73liqAoaW5zZXJ0KeOBl+OBplxyXG4gICAgLy8g44Gd44GuSUQoaWQp44KS6L+U44GZXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgYWRkX3RibChcclxuICAgICAgICBkYl9tYWk6ICBkYl9jb25uZWN0LCBcclxuICAgICAgICBtZXM6ICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgIHNhdmVfaWQ6IG51bWJlcixcclxuICAgICAgICBndWxkOiAgICBDX0d1aWxkXHJcbiAgICApOiBQcm9taXNlPG51bWJlcj4ge1xyXG5cclxuICAgICAgICBjb25zdCBpbnNlcnRfZ3VsZF9TUUwgPWBcclxuICAgICAgICAgICAgSU5TRVJUIElOVE8gdGJsX2d1bGQgKCBzYXZlX2lkLCAgdW5pcV9pZCwgIG5hbWUsICBnb2xkIClcclxuICAgICAgICAgICAgVkFMVUVTICAgICAgICAgICAgICAoIDpzYXZlX2lkLCA6dW5pcV9pZCwgOm5hbWUsIDpnb2xkIClcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgaiA9IGd1bGQuZW5jb2RlKCk7XHJcbiAgICAgICAgYXdhaXQgZGJfbWFpLnF1ZXJ5KGluc2VydF9ndWxkX1NRTCwge1xyXG4gICAgICAgICAgICBzYXZlX2lkOiAgc2F2ZV9pZCwgIFxyXG4gICAgICAgICAgICB1bmlxX2lkOiAgai51bmlxX2lkLCAgXHJcbiAgICAgICAgICAgIG5hbWU6ICAgICBqLm5hbWUsXHJcbiAgICAgICAgICAgIGdvbGQ6ICAgICBqLmdvbGQsXHJcbi8vICAgICAgICAgICAgZ29vZHM6ICAgIEpTT04uc3RyaW5naWZ5KGouZ29vZHMpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgNjE6ICR7aW5zZXJ0X2d1bGRfU1FMfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIENfR3VpbGRSREIubGFzdEluc2VydChkYl9tYWksIG1lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGJsX3RlYW3jgafmnIDlvozjgavov73liqDjgZfjgZ/ooYznlarlj7coc2F2ZV9pZCnjgpLov5TjgZnjgJAx6KGM5oy/5YWl5bCC55So44CRXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGxhc3RJbnNlcnQoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSkgOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGNvbnN0IGxhc3RJbnNlcnRfU1FMID1gXHJcbiAgICAgICAgICAgIFNFTEVDVCBMQVNUX0lOU0VSVF9JRCgpIGFzIGlkIEZST00gdGJsX2d1bGQ7XHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpLnF1ZXJ5PElfbGFzdEluc2VydFtdPihsYXN0SW5zZXJ0X1NRTClcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDUwMDogJHtsYXN0SW5zZXJ0X1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAocmVjb3JkU2V0Lmxlbmd0aCA8IDEpIHJldHVybiAtMTtcclxuICAgICAgICByZXR1cm4gcmVjb3JkU2V0WzBdLmlkO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBEQuWHpueQhuOAgnNhdmVfaWTjgafmjIflrprjgZXjgozjgZ/jg6zjgrPjg7zjg4ko6KSH5pWwKeOCkuWJiumZpChkZWxldGUp44GZ44KLXHJcbiAgICAvLyBcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RibChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCBkZWxldGVfZ3VsZF9TUUwgPSBgXHJcbiAgICAgICAgICAgIERFTEVURSBGUk9NIHRibF9ndWxkIFxyXG4gICAgICAgICAgICBXSEVSRSAgc2F2ZV9pZCA9IDpzYXZlX2lkXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGF3YWl0IGRiX21haS5xdWVyeShkZWxldGVfZ3VsZF9TUUwse3NhdmVfaWQ6IHNhdmVfaWR9KVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgNjg6ICR7ZGVsZXRlX2d1bGRfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fc3RyaW5nQXJyYXlfdG9fSlNPTihqOiBJX3RibF9ndWxkKTogSlNPTl9HdWlsZCB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6ICAgICAgai5pZCxcclxuICAgICAgICAgICAgc2F2ZV9pZDogai5zYXZlX2lkLFxyXG4gICAgICAgICAgICB1bmlxX2lkOiBqLnVuaXFfaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICAgIGoubmFtZSxcclxuICAgICAgICAgICAgZ29sZDogICAgai5nb2xkLFxyXG4vLyAgICAgICAgICAgIGdvb2RzOiAgIEpTT04ucGFyc2Uoai5nb29kcyksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IG15c3FsIGZyb20gJ215c3FsMi9wcm9taXNlJztcclxuaW1wb3J0IHsgQ19Ec3BNZXNzYWdlIH0gIGZyb20gJy4uL2RfdXRsL0NfRHNwTWVzc2FnZSc7IC8vIOeUu+mdouODoeODg+OCu+ODvOOCuOOBruihqOekuueUqOOCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX0hlcm8sIEpTT05fSGVybyB9ICBmcm9tICcuLi9kX21kbC9DX0hlcm8nOyBcclxuXHJcbnR5cGUgZGJfY29ubmVjdCA9IG15c3FsLlBvb2xDb25uZWN0aW9uO1xyXG5cclxuaW50ZXJmYWNlIElfdGJsX2hlcm8gZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0IHtcclxuICAgIGlkOiAgICAgICAgbnVtYmVyO1xyXG4gICAgc2F2ZV9pZDogICBudW1iZXI7XHJcbiAgICB1bmlxX2lkOiAgIHN0cmluZztcclxuICAgIGpvaW5fdWlkOiAgc3RyaW5nOyBcclxuICAgIG5hbWU6ICAgICAgc3RyaW5nO1xyXG4gICAgc2V4OiAgICAgICBudW1iZXI7XHJcbiAgICBhZ2U6ICAgICAgIG51bWJlcjtcclxuICAgIGdvbGQ6ICAgICAgbnVtYmVyO1xyXG4vLyAgICBnb29kczogICAgIHN0cmluZztcclxuICAgIHN0YXRlOiAgICAgbnVtYmVyO1xyXG4gICAgbHY6ICAgICAgICBudW1iZXI7XHJcbiAgICBza3BfdHRsOiAgIHN0cmluZztcclxuICAgIHNrcF9ub3c6ICAgc3RyaW5nO1xyXG4gICAgZXhwX3R0bDogICBzdHJpbmc7XHJcbiAgICBleHBfbm93OiAgIHN0cmluZztcclxuICAgIG54ZTogICAgICAgc3RyaW5nO1xyXG4gICAgYWJpX3BfYnNjOiBzdHJpbmc7XHJcbiAgICBhYmlfbV9ic2M6IHN0cmluZztcclxuICAgIGlzX2FsaXZlOiAgbnVtYmVyO1xyXG59XHJcbmludGVyZmFjZSBJX2xhc3RJbnNlcnQgZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX0hlcm9SREIge1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9IZXJvKSB7fVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fcmRiX2FsbChcclxuICAgICAgICBkYl9tYWk6ICAgZGJfY29ubmVjdCwgXHJcbiAgICAgICAgbWVzOiAgICAgIENfRHNwTWVzc2FnZSwgXHJcbiAgICAgICAgc2F2ZV9pZDogIG51bWJlcixcclxuICAgICAgICBqb2luX3VpZDogc3RyaW5nXHJcbiAgICApOiBQcm9taXNlPENfSGVyb1tdPlxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGhyZXNfYXJyYXkgPSBhd2FpdCBDX0hlcm9SREIuZ2V0X2Zyb21fdGJsX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCwgam9pbl91aWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaHJlc19hcnJheTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzZXRfdG9fcmRiKFxyXG4gICAgICAgIGRiX21haTogICBkYl9jb25uZWN0LCBcclxuICAgICAgICBtZXM6ICAgICAgQ19Ec3BNZXNzYWdlLCBcclxuICAgICAgICBzYXZlX2lkOiAgbnVtYmVyLFxyXG4gICAgICAgIGpvaW5fdWlkOiBzdHJpbmcsXHJcbiAgICAgICAgaGVybzogICAgIENfSGVybyxcclxuICAgICk6IFByb21pc2U8Ym9vbGVhbj4gXHJcbiAgICB7IFxyXG4gICAgICAgIGNvbnN0IGhlcm9faWQgPSBhd2FpdCBDX0hlcm9SREIuYWRkX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCwgam9pbl91aWQsIGhlcm8pO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdG9fcmRiX2FsbChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCByc2x0ID0gYXdhaXQgQ19IZXJvUkRCLmRlbF90YmxfYWxsKGRiX21haSwgbWVzLCBzYXZlX2lkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdG9fcmRiKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlciwgam9pbl91aWQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IHJzbHQgPSBhd2FpdCBDX0hlcm9SREIuZGVsX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCwgam9pbl91aWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICAvLyBEQuWHpueQhuOAgmlk44Gn5oyH5a6a44GV44KM44GfaGVyb+ODrOOCs+ODvOODieOCu+ODg+ODiCjljZjmlbAp44KS6Kqt44G/6L6844G/XHJcbiAgICAvLyBIZXJv44Kv44Op44K544Gu6YWN5YiX44Gr44K744OD44OI44GZ44KLXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fdGJsKFxyXG4gICAgICAgIGRiX21haTogZGJfY29ubmVjdCwgXHJcbiAgICAgICAgbWVzOiAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgIGlkOiAgICAgbnVtYmVyLFxyXG4gICAgKTogUHJvbWlzZTxDX0hlcm98dW5kZWZpbmVkPiB7XHJcbiAgICAgICAgY29uc3QgZ2V0X2hlcm9lc19TUUwgPSBgXHJcbiAgICAgICAgICAgIFNFTEVDVCBcdGlkLCBzYXZlX2lkLCB1bmlxX2lkLCBqb2luX3VpZCwgXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSwgc2V4LCBhZ2UsIGdvbGQsIHN0YXRlLCBsdiwgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNrcF90dGwsIHNrcF9ub3csIGV4cF90dGwsIGV4cF9ub3csIG54ZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgYWJpX3BfYnNjLCBhYmlfbV9ic2MsIGlzX2FsaXZlIFxyXG4gICAgICAgICAgICBGUk9NICAgIHRibF9oZXJvXHJcbiAgICAgICAgICAgIFdIRVJFICAgaWQgPSA6aWRcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3Jlc3VsdFJlY29yZFNldF0gPSBhd2FpdCBkYl9tYWk/LnF1ZXJ5PElfdGJsX2hlcm9bXT4oZ2V0X2hlcm9lc19TUUwsIHtpZDogIGlkfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAzN2E6ICR7Z2V0X2hlcm9lc19TUUx9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdFJlY29yZFNldC5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoXCLjg4fjg7zjgr/jgYzmnInjgorjgb7jgZvjgpMgMzlhOiB7JGdldF9oZXJvZXNfU1FMfVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX0hlcm8oKS5kZWNvZGUoQ19IZXJvUkRCLmZyb21fc3RyaW5nQXJyYXlfdG9fSlNPTihyZXN1bHRSZWNvcmRTZXRbMF0pKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZlX2lk44Goam9pbl91aWTjgafmjIflrprjgZXjgozjgZ9oZXJv44Os44Kz44O844OJ44K744OD44OIKOikh+aVsCnjgpLoqq3jgb/ovrzjgb9cclxuICAgIC8vIEhlcm/jgq/jg6njgrnjga7phY3liJfjgavjgrvjg4Pjg4jjgZnjgotcclxuICAgIC8vIFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBnZXRfZnJvbV90YmxfYWxsKFxyXG4gICAgICAgIGRiX21haTogICBkYl9jb25uZWN0LCBcclxuICAgICAgICBtZXM6ICAgICAgQ19Ec3BNZXNzYWdlLCBcclxuICAgICAgICBzYXZlX2lkOiAgbnVtYmVyLFxyXG4gICAgICAgIGpvaW5fdWlkOiBzdHJpbmcsXHJcbiAgICApOiBQcm9taXNlPENfSGVyb1tdPiB7XHJcbiAgICAgICAgY29uc3QgZ2V0X2hlcm9lc19TUUwgPSBgXHJcbiAgICAgICAgICAgIFNFTEVDVCBcdGlkLCBzYXZlX2lkLCB1bmlxX2lkLCBqb2luX3VpZCwgXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSwgc2V4LCBhZ2UsIGdvbGQsIHN0YXRlLCBsdiwgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNrcF90dGwsIHNrcF9ub3csIGV4cF90dGwsIGV4cF9ub3csIG54ZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgYWJpX3BfYnNjLCBhYmlfbV9ic2MsIGlzX2FsaXZlIFxyXG4gICAgICAgICAgICBGUk9NICAgIHRibF9oZXJvXHJcbiAgICAgICAgICAgIFdIRVJFICAgc2F2ZV9pZCA9IDpzYXZlX2lkIEFORCBqb2luX3VpZCA9IDpqb2luX3VpZFxyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVzdWx0UmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haT8ucXVlcnk8SV90YmxfaGVyb1tdPihnZXRfaGVyb2VzX1NRTCwge3NhdmVfaWQ6IHNhdmVfaWQsIGpvaW5fdWlkOiBqb2luX3VpZH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMzdiOiAke2dldF9oZXJvZXNfU1FMfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHRSZWNvcmRTZXQubGVuZ3RoIDwgMSkge1xyXG4vLyAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoXCLjg4fjg7zjgr/jgYzmnInjgorjgb7jgZvjgpMgMzliOiB7JGdldF9oZXJvZXNfU1FMfVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaHJlc19hcnJheSA9IFtdIGFzIENfSGVyb1tdO1xyXG4gICAgICAgIGZvciAoY29uc3QgcnIgb2YgcmVzdWx0UmVjb3JkU2V0KSB7XHJcbiAgICAgICAgICAgIGhyZXNfYXJyYXkucHVzaCgobmV3IENfSGVybygpKS5kZWNvZGUoQ19IZXJvUkRCLmZyb21fc3RyaW5nQXJyYXlfdG9fSlNPTihycikpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhyZXNfYXJyYXk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIERC5Yem55CG44CCdGVhbeODhuODvOODluODq+OBq+iHqui6q+OBruODh+ODvOOCv+OCkjHku7bov73liqAoaW5zZXJ0KeOBl+OBplxyXG4gICAgLy8g44Gd44GuSUQoaWQp44KS6L+U44GZXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgYWRkX3RibChcclxuICAgICAgICBkYl9tYWk6ICAgZGJfY29ubmVjdCwgXHJcbiAgICAgICAgbWVzOiAgICAgIENfRHNwTWVzc2FnZSwgXHJcbiAgICAgICAgc2F2ZV9pZDogIG51bWJlcixcclxuICAgICAgICBqb2luX3VpZDogc3RyaW5nLFxyXG4gICAgICAgIGhlcm86ICAgICBDX0hlcm8sXHJcbiAgICApOiBQcm9taXNlPG51bWJlcj4ge1xyXG5cclxuICAgICAgICBjb25zdCBpbnNlcnRfaGVyb19TUUwgPSBgXHJcbiAgICAgICAgICAgIElOU0VSVCBJTlRPIHRibF9oZXJvIChcclxuICAgICAgICAgICAgICAgIHNhdmVfaWQsIHVuaXFfaWQsIGpvaW5fdWlkLCBcclxuICAgICAgICAgICAgICAgIG5hbWUsIHNleCwgYWdlLCBnb2xkLCBzdGF0ZSwgbHYsIFxyXG4gICAgICAgICAgICAgICAgc2twX3R0bCwgc2twX25vdywgZXhwX3R0bCwgZXhwX25vdywgbnhlLFxyXG4gICAgICAgICAgICAgICAgYWJpX3BfYnNjLCBhYmlfbV9ic2MsIGlzX2FsaXZlIFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIFZBTFVFUyAoIFxyXG4gICAgICAgICAgICAgICAgOnNhdmVfaWQsIDp1bmlxX2lkLCA6am9pbl91aWQsIFxyXG4gICAgICAgICAgICAgICAgOm5hbWUsIDpzZXgsIDphZ2UsIDpnb2xkLCA6c3RhdGUsIDpsdiwgXHJcbiAgICAgICAgICAgICAgICA6c2twX3R0bCwgOnNrcF9ub3csIDpleHBfdHRsLCA6ZXhwX25vdywgOm54ZSxcclxuICAgICAgICAgICAgICAgIDphYmlfcF9ic2MsIDphYmlfbV9ic2MsIDppc19hbGl2ZSBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBqc29uSGVybyA9IGhlcm8uZW5jb2RlKCk7XHJcbi8vZGVidWdcclxuLypcclxuY29uc29sZS5lcnJvcihcclxuICAgICAnICBzYXZlX2lkPScgICArc2F2ZV9pZCBcclxuICAgICsnLCBqb2luX3VpZD0nICAram9pbl91aWQgXHJcbiAgICArJywgdW5pcV9pZD0nICAgK2pzb25IZXJvLnVuaXFfaWQgXHJcbiAgICArJywgbmFtZT0nICAgICAgK2pzb25IZXJvLm5hbWVcclxuICAgICsnLCBzZXg9JyAgICAgICAranNvbkhlcm8uc2V4XHJcbiAgICArJywgYWdlPScgICAgICAgK2pzb25IZXJvLmFnZVxyXG4gICAgKycsIGdvbGQ9JyAgICAgICtqc29uSGVyby5nb2xkXHJcbiAgICArJywgZ29vZHM9JyAgICAgKyhKU09OLnN0cmluZ2lmeShqc29uSGVybz8uZ29vZHMpPz8nPz8/JylcclxuICAgICsnLCBzdGF0ZT0nICAgICAranNvbkhlcm8uc3RhdGVcclxuICAgICsnLCBsdj0nICAgICAgICAranNvbkhlcm8ubHZcclxuICAgICsnLCBza3BfdHRsPScgICArKGpzb25IZXJvLnZhbD8uc2twPy50dGw/Pyc/Pz8nKVxyXG4gICAgKycsIHNrcF9ub3c9JyAgICsoanNvbkhlcm8udmFsPy5za3A/Lm5vdz8/anNvbkhlcm8udmFsPy5za3A/LnR0bD8/Jz8/PycpXHJcbiAgICArJywgZXhwX3R0bD0nICAgKyhqc29uSGVyby52YWw/LmV4cD8udHRsPz8nPz8/JylcclxuICAgICsnLCBleHBfbm93PScgICArKGpzb25IZXJvLnZhbD8uZXhwPy5ub3c/P2pzb25IZXJvLnZhbD8uZXhwPy50dGw/Pyc/Pz8nKVxyXG4gICAgKycsIG54ZT0nICAgICAgICsoanNvbkhlcm8udmFsPy5ueGU/Py0xKVxyXG4gICAgKycsIGFiaV9wX2JzYz0nICsoSlNPTi5zdHJpbmdpZnkoanNvbkhlcm8uYWJpX3BfYnNjKT8/Jz8/PycpXHJcbiAgICArJywgYWJpX21fYnNjPScgKyhKU09OLnN0cmluZ2lmeShqc29uSGVyby5hYmlfbV9ic2MpPz8nPz8/JylcclxuICAgICsnLCBpc19hbGl2ZT0nICArKGpzb25IZXJvLmlzX2FsaXZlICE9PSAnTicgPyAxIDogMClcclxuKVxyXG4qL1xyXG4gICAgICAgIGF3YWl0IGRiX21haS5xdWVyeShpbnNlcnRfaGVyb19TUUwsIHtcclxuICAgICAgICAgICAgJ3NhdmVfaWQnOiAgIHNhdmVfaWQsIFxyXG4gICAgICAgICAgICAnam9pbl91aWQnOiAgam9pbl91aWQsIFxyXG4gICAgICAgICAgICAndW5pcV9pZCc6ICAganNvbkhlcm8udW5pcV9pZCwgXHJcbiAgICAgICAgICAgICduYW1lJzogICAgICBqc29uSGVyby5uYW1lLFxyXG4gICAgICAgICAgICAnc2V4JzogICAgICAganNvbkhlcm8uc2V4LFxyXG4gICAgICAgICAgICAnYWdlJzogICAgICAganNvbkhlcm8uYWdlLFxyXG4gICAgICAgICAgICAnZ29sZCc6ICAgICAganNvbkhlcm8uZ29sZCxcclxuLy8gICAgICAgICAgICAnZ29vZHMnOiAgICAgSlNPTi5zdHJpbmdpZnkoanNvbkhlcm8uZ29vZHMpLFxyXG4gICAgICAgICAgICAnc3RhdGUnOiAgICAganNvbkhlcm8uc3RhdGUsXHJcbiAgICAgICAgICAgICdsdic6ICAgICAgICBqc29uSGVyby5sdixcclxuICAgICAgICAgICAgJ3NrcF90dGwnOiAgIGpzb25IZXJvLnZhbD8uc2twPy50dGw/PycnLFxyXG4gICAgICAgICAgICAnc2twX25vdyc6ICAganNvbkhlcm8udmFsPy5za3A/Lm5vdz8/anNvbkhlcm8udmFsPy5za3A/LnR0bD8/JycsXHJcbiAgICAgICAgICAgICdleHBfdHRsJzogICBqc29uSGVyby52YWw/LmV4cD8udHRsPz8nJyxcclxuICAgICAgICAgICAgJ2V4cF9ub3cnOiAgIGpzb25IZXJvLnZhbD8uZXhwPy5ub3c/P2pzb25IZXJvLnZhbD8uZXhwPy50dGw/PycnLFxyXG4gICAgICAgICAgICAnbnhlJzogICAgICAganNvbkhlcm8udmFsPy5ueGU/Py0xLFxyXG4gICAgICAgICAgICAnYWJpX3BfYnNjJzogSlNPTi5zdHJpbmdpZnkoanNvbkhlcm8uYWJpX3BfYnNjKT8/JycsXHJcbiAgICAgICAgICAgICdhYmlfbV9ic2MnOiBKU09OLnN0cmluZ2lmeShqc29uSGVyby5hYmlfbV9ic2MpPz8nJyxcclxuICAgICAgICAgICAgJ2lzX2FsaXZlJzogIGpzb25IZXJvLmlzX2FsaXZlICE9PSAnTicgPyAxIDogMCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDM3YjogJHtpbnNlcnRfaGVyb19TUUx9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBDX0hlcm9SREIubGFzdEluc2VydChkYl9tYWksIG1lcyk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAvLyB0YmxfaGVyb+OBp+acgOW+jOOBq+i/veWKoOOBl+OBn+ihjOeVquWPtyhzYXZlX2lkKeOCkui/lOOBmeOAkDHooYzmjL/lhaXlsILnlKjjgJFcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgbGFzdEluc2VydChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlKSA6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgY29uc3QgbGFzdEluc2VydF9TUUwgPWBcclxuICAgICAgICAgICAgU0VMRUNUIExBU1RfSU5TRVJUX0lEKCkgYXMgaWQgRlJPTSB0YmxfaGVybztcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3JlY29yZFNldF0gPSBhd2FpdCBkYl9tYWkucXVlcnk8SV9sYXN0SW5zZXJ0W10+KGxhc3RJbnNlcnRfU1FMKVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgNTAwOiAke2xhc3RJbnNlcnRfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChyZWNvcmRTZXQubGVuZ3RoIDwgMSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiByZWNvcmRTZXRbMF0uaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRELlh6bnkIYo44Kv44Op44K544O744Oh44K944OD44OJKeOAgkhlcm/jgq/jg6njgrnjga7phY3liJfjgpLlj5fjgZHlj5bjgaPjgabjgIFcclxuICAgIC8vIOaMh+WumuOBleOCjOOBn3NhdmVfaWTjgafjgIBoZXJv44OG44O844OW44Or44Gr6L+95YqgKGluc2VydCnjgZfjgaZcclxuICAgIC8vIOOBneOBrklEKGlkKeOBrumFjeWIl+OCkui/lOOBmVxyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGFkZF90YmxfYWxsKFxyXG4gICAgICAgIGRiX21haTogICAgIGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgIG1lczogICAgICAgIENfRHNwTWVzc2FnZSwgXHJcbiAgICAgICAgc2F2ZV9pZDogICAgbnVtYmVyLFxyXG4gICAgICAgIGpvaW5fdWlkOiAgIHN0cmluZyxcclxuICAgICAgICBoZXJvX2FycmF5IDpDX0hlcm9bXSwgXHJcbiAgICApOiBQcm9taXNlPG51bWJlcltdPiBcclxuICAgIHtcclxuICAgICAgICBjb25zdCBoZXJvX2lkX3NldCA9IFtdIGFzIG51bWJlcltdO1xyXG4gICAgICAgIGZvciAoY29uc3QgaGVybyBvZiBoZXJvX2FycmF5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlcm9faWQgPSBhd2FpdCBDX0hlcm9SREIuYWRkX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCwgam9pbl91aWQsIGhlcm8pO1xyXG4gICAgICAgICAgICBpZiAobWVzLmlzX2VycigpKSByZXR1cm4gW107XHJcbiAgICAgICAgICAgIGhlcm9faWRfc2V0LnB1c2goaGVyb19pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoZXJvX2lkX3NldDtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBp+aMh+WumuOBleOCjOOBn+ODrOOCs+ODvOODiSjopIfmlbAp44KS5YmK6ZmkKGRlbGV0ZSnjgZnjgotcclxuICAgIC8vIFxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdGJsX2FsbChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCBkZWxldGVfaGVyb19TUUwgPSBgXHJcbiAgICAgICAgICAgIERFTEVURSBGUk9NIHRibF9oZXJvIFxyXG4gICAgICAgICAgICBXSEVSRSAgc2F2ZV9pZCA9IDpzYXZlX2lkIFxyXG4gICAgICAgIGBcclxuICAgICAgICBhd2FpdCBkYl9tYWkucXVlcnkoZGVsZXRlX2hlcm9fU1FMLHtzYXZlX2lkOiBzYXZlX2lkfSlcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDE3OiAke2RlbGV0ZV9oZXJvX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEQuWHpueQhuOAgnNhdmVfaWTjgahqb2luX3VpZOOBp+aMh+WumuOBleOCjOOBn+ODrOOCs+ODvOODiSjopIfmlbAp44KS5YmK6ZmkKGRlbGV0ZSnjgZnjgotcclxuICAgIC8vIFxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdGJsKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlciwgam9pbl91aWQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZV9oZXJvX1NRTCA9IGBcclxuICAgICAgICAgICAgREVMRVRFIEZST00gdGJsX2hlcm8gXHJcbiAgICAgICAgICAgIFdIRVJFICBzYXZlX2lkID0gOnNhdmVfaWQgQU5EICBqb2luX3VpZCA9IDpqb2luX3VpZFxyXG4gICAgICAgIGBcclxuICAgICAgICBhd2FpdCBkYl9tYWkucXVlcnkoZGVsZXRlX2hlcm9fU1FMLHtzYXZlX2lkOiBzYXZlX2lkLCBqb2luX3VpZDogam9pbl91aWR9KVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMTg6ICR7ZGVsZXRlX2hlcm9fU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ0FycmF5X3RvX0pTT04oajogSV90YmxfaGVybyk6IEpTT05fSGVybyB7XHJcbiAgICAgICAgY29uc3QgYWJpX3AgPSBKU09OLnBhcnNlKGouYWJpX3BfYnNjKTtcclxuICAgICAgICBjb25zdCBhYmlfbSA9IEpTT04ucGFyc2Uoai5hYmlfbV9ic2MpO1xyXG5cclxuICAgICAgICBjb25zdCBqc29uICA9IHtcclxuICAgICAgICAgICAgaWQ6ICAgICAgICBqLmlkLFxyXG4gICAgICAgICAgICBzYXZlX2lkOiAgIGouc2F2ZV9pZCxcclxuICAgICAgICAgICAgdW5pcV9pZDogICBqLnVuaXFfaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICAgICAgai5uYW1lLFxyXG4gICAgICAgICAgICBzZXg6ICAgICAgIGouc2V4LFxyXG4gICAgICAgICAgICBhZ2U6ICAgICAgIGouYWdlLFxyXG4gICAgICAgICAgICBnb2xkOiAgICAgIGouZ29sZCxcclxuLy8gICAgICAgICAgICBnb29kczogICAgIEpTT04ucGFyc2Uoai5nb29kcyksXHJcbiAgICAgICAgICAgIHN0YXRlOiAgICAgai5zdGF0ZSxcclxuICAgICAgICAgICAgbHY6ICAgICAgICBqLmx2LFxyXG4gICAgICAgICAgICB2YWw6IHtcclxuICAgICAgICAgICAgICAgIHNrcDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHR0bDogICBKU09OLnBhcnNlKGouc2twX3R0bCksXHJcbiAgICAgICAgICAgICAgICAgICAgbm93OiAgIEpTT04ucGFyc2Uoai5za3Bfbm93KSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBleHA6IHtcclxuICAgICAgICAgICAgICAgICAgICB0dGw6ICAgSlNPTi5wYXJzZShqLmV4cF90dGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdzogICBKU09OLnBhcnNlKGouZXhwX25vdyksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbnhlOiAgICAgICBKU09OLnBhcnNlKGoubnhlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWJpX3BfYnNjOiAgICAgSlNPTi5wYXJzZShqLmFiaV9wX2JzYyksXHJcbiAgICAgICAgICAgIGFiaV9tX2JzYzogICAgIEpTT04ucGFyc2Uoai5hYmlfbV9ic2MpLFxyXG4vKlxyXG4gICAgICAgICAgICBhYmlfcDoge1xyXG4gICAgICAgICAgICAgICAgYnNjOiBhYmlfcCxcclxuICAgICAgICAgICAgICAgIHR0bDogYWJpX3AsXHJcbiAgICAgICAgICAgICAgICBub3c6IGFiaV9wLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhYmlfbToge1xyXG4gICAgICAgICAgICAgICAgYnNjOiBhYmlfbSxcclxuICAgICAgICAgICAgICAgIHR0bDogYWJpX20sXHJcbiAgICAgICAgICAgICAgICBub3c6IGFiaV9tLFxyXG4gICAgICAgICAgICB9LFxyXG4gKi9cclxuICAgICAgICAgICAgaXNfYWxpdmU6ICBqLmlzX2FsaXZlICE9PSAwID8gXCJZXCIgOiBcIk5cIixcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGpzb247XHJcbiAgICB9XHJcbn1cclxuIiwiLy8g5Yip55So44Kv44Op44K5562J44Gu6Kqt44G/6L6844G/XHJcbmltcG9ydCBteXNxbCBmcm9tICdteXNxbDIvcHJvbWlzZSc7XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9ICAgICAgZnJvbSAnLi4vZF91dGwvQ19Ec3BNZXNzYWdlJzsgLy8g55S76Z2i44Oh44OD44K744O844K444Gu6KGo56S655So44Kv44Op44K5XHJcbmltcG9ydCB7IENfTWF6ZSwgSlNPTl9NYXplIH0gZnJvbSBcIi4uL2RfbWRsL0NfTWF6ZVwiO1xyXG5cclxudHlwZSBkYl9jb25uZWN0ID0gbXlzcWwuUG9vbENvbm5lY3Rpb247XHJcblxyXG5pbnRlcmZhY2UgSV90YmxfbWF6ZSBleHRlbmRzIG15c3FsLlJvd0RhdGFQYWNrZXQge1xyXG4gICAgaWQ6ICAgICAgbnVtYmVyLFxyXG4gICAgc2F2ZV9pZDogbnVtYmVyLFxyXG4gICAgdW5pcV9pZDogc3RyaW5nLFxyXG4gICAgbmFtZTogICAgc3RyaW5nLCBcclxuICAgIHNpemVfeDogIG51bWJlcixcclxuICAgIHNpemVfeTogIG51bWJlcixcclxuICAgIHNpemVfejogIG51bWJlcixcclxuICAgIG1hcHM6ICAgIHN0cmluZyxcclxuICAgIG1hc2s6ICAgIHN0cmluZyxcclxufVxyXG5pbnRlcmZhY2UgSV9sYXN0SW5zZXJ0IGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENfTWF6ZVJEQiB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldF9mcm9tX3JkYl9hbGwoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyKTogUHJvbWlzZTxDX01hemVbXT4ge1xyXG4gICAgICAgIGNvbnN0IG1hemVfYXJyYXkgPSBhd2FpdCBDX01hemVSREIuZ2V0X2Zyb21fdGJsX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXplX2FycmF5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHNldF90b19yZGIoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyLCBtYXplOiBDX01hemUpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCBtYXNlX2lkID0gYXdhaXQgQ19NYXplUkRCLmFkZF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIG1hemUpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RvX3JkYihkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBDX01hemVSREIuZGVsX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZlX2lk44Gn5oyH5a6a44GV44KM44GfbWF6ZeODrOOCs+ODvOODieOCu+ODg+ODiOOCkuiqreOBv+i+vOOBv1xyXG4gICAgLy8gTWF6ZeOCr+ODqeOCueOBrumFjeWIl+OBq+OCu+ODg+ODiOOBmeOCi1xyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGdldF9mcm9tX3RibF9hbGwoXHJcbiAgICAgICAgICAgIGRiX21haTogZGJfY29ubmVjdCwgXHJcbiAgICAgICAgICAgIG1lczogQ19Ec3BNZXNzYWdlLCBcclxuICAgICAgICAgICAgc2F2ZV9pZDogbnVtYmVyXHJcbiAgICApOiBQcm9taXNlPENfTWF6ZVtdPiB7XHJcbiAgICAgICAgY29uc3QgZ2V0X21hemVfU1FMID0gYFxyXG4gICAgICAgICAgICBTRUxFQ1QgXHRpZCwgc2F2ZV9pZCwgdW5pcV9pZCwgbmFtZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZV94LCBzaXplX3ksIHNpemVfeiwgbWFwcywgbWFzayBcclxuICAgICAgICAgICAgRlJPTSB0YmxfbWF6ZVxyXG4gICAgICAgICAgICBXSEVSRSAgIHNhdmVfaWQgPSA6c2F2ZV9pZFxyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVzdWx0UmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haS5xdWVyeTxJX3RibF9tYXplW10+KGdldF9tYXplX1NRTCwge3NhdmVfaWQ6IHNhdmVfaWR9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDMzOiAke2dldF9tYXplX1NRTH1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKHJlc3VsdFJlY29yZFNldC5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWF6ZV9hcnJheSA9IFtdIGFzIENfTWF6ZVtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgcnIgb2YgcmVzdWx0UmVjb3JkU2V0KSB7XHJcbiAgICAgICAgICAgIG1hemVfYXJyYXkucHVzaChuZXcgQ19NYXplKENfTWF6ZVJEQi5mcm9tX3N0cmluZ0FycmF5X3RvX0pTT04ocnIpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXplX2FycmF5O1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJtYXpl44OG44O844OW44Or44Gr6Ieq6Lqr44Gu44OH44O844K/44KS6L+95YqgKGluc2VydCnjgZfjgaZcclxuICAgIC8vIOOBneOBrklEKG1hemVfaWQp44KS6L+U44GZXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgYWRkX3RibChcclxuICAgICAgICAgICAgZGJfbWFpOiAgZGJfY29ubmVjdCwgXHJcbiAgICAgICAgICAgIG1lczogICAgIENfRHNwTWVzc2FnZSwgXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6IG51bWJlcixcclxuICAgICAgICAgICAgbWF6ZTogICAgQ19NYXplXHJcbiAgICAgICAgKTogUHJvbWlzZTxudW1iZXI+IHtcclxuXHJcbiAgICAgICAgY29uc3QgaW5zZXJ0X21hemVfU1FMID0gYFxyXG4gICAgICAgICAgICBJTlNFUlQgSU5UTyB0YmxfbWF6ZSAoXHJcbiAgICAgICAgICAgICAgICBzYXZlX2lkLCB1bmlxX2lkLCBuYW1lLCBcclxuICAgICAgICAgICAgICAgIHNpemVfeCwgc2l6ZV95LCBzaXplX3osIG1hcHMsIG1hc2tcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBWQUxVRVMgKFxyXG4gICAgICAgICAgICAgICAgOnNhdmVfaWQsIDp1bmlxX2lkLCA6bmFtZSwgXHJcbiAgICAgICAgICAgICAgICA6c2l6ZV94LCA6c2l6ZV95LCA6c2l6ZV96LCA6bWFwcywgOm1hc2sgXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgaiA9IG1hemUuZW5jb2RlKCk7XHJcbi8vRGVidWdcclxuLypcclxuY29uc29sZS5lcnJvcihcclxuICAgICAgIFwic2F2ZV9pZD1cIiArIHNhdmVfaWRcclxuICAgICtcIiwgdW5pcV9pZD1cIiArIGoudW5pcV9pZFxyXG4gICAgK1wiLCBuYW1lPVwiICAgICsgai5uYW1lXHJcbiAgICArXCIsIHNpemVfeD1cIiAgKyBqLnNpemVfeFxyXG4gICAgK1wiLCBzaXplX3k9XCIgICsgai5zaXplX3lcclxuICAgICtcIiwgc2l6ZV96PVwiICArIGouc2l6ZV96XHJcbiAgICArXCIsIG1hcHM9XCIgICAgKyBqLm1hemVcclxuICAgICtcIiwgbWFzaz1cIiAgICArIGoubWFza1xyXG4pXHJcbiovXHJcbiAgICAgICAgYXdhaXQgZGJfbWFpLnF1ZXJ5KGluc2VydF9tYXplX1NRTCwge1xyXG4gICAgICAgICAgICBzYXZlX2lkOiBzYXZlX2lkLFxyXG4gICAgICAgICAgICB1bmlxX2lkOiBqLnVuaXFfaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICAgIGoubmFtZSxcclxuICAgICAgICAgICAgc2l6ZV94OiAgai5zaXplX3gsXHJcbiAgICAgICAgICAgIHNpemVfeTogIGouc2l6ZV95LFxyXG4gICAgICAgICAgICBzaXplX3o6ICBqLnNpemVfeixcclxuICAgICAgICAgICAgbWFwczogICAgai5tYXplLFxyXG4gICAgICAgICAgICBtYXNrOiAgICBqLm1hc2ssXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAzOiAke2luc2VydF9tYXplX1NRTH1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBDX01hemVSREIubGFzdEluc2VydChkYl9tYWksIG1lcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIHRibF90ZWFt44Gn5pyA5b6M44Gr6L+95Yqg44GX44Gf6KGM55Wq5Y+3KHNhdmVfaWQp44KS6L+U44GZ44CQMeihjOaMv+WFpeWwgueUqOOAkVxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBsYXN0SW5zZXJ0KGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UpIDogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBjb25zdCBsYXN0SW5zZXJ0X1NRTCA9YFxyXG4gICAgICAgICAgICBTRUxFQ1QgTEFTVF9JTlNFUlRfSUQoKSBhcyBpZCBGUk9NIHRibF9tYXplO1xyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haS5xdWVyeTxJX2xhc3RJbnNlcnRbXT4obGFzdEluc2VydF9TUUwpXHJcbiAgICAgICAgLmNhdGNoICgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCA1MDA6ICR7bGFzdEluc2VydF9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlY29yZFNldC5sZW5ndGggPCAxKSByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIHJlY29yZFNldFswXS5pZDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZlX2lk44Gn5oyH5a6a44GV44KM44Gf44Os44Kz44O844OJKOikh+aVsCnjgpLliYrpmaQoZGVsZXRlKeOBmeOCi1xyXG4gICAgLy8gXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGRlbF90YmwoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlX21hemVfU1FMID0gYFxyXG4gICAgICAgICAgICBERUxFVEUgRlJPTSB0YmxfbWF6ZSBcclxuICAgICAgICAgICAgV0hFUkUgIHNhdmVfaWQgPSA6c2F2ZV9pZFxyXG4gICAgICAgIGBcclxuICAgICAgICBhd2FpdCBkYl9tYWkucXVlcnkoZGVsZXRlX21hemVfU1FMLCB7c2F2ZV9pZDogc2F2ZV9pZH0pXHJcbiAgICAgICAgLmNhdGNoICgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAxMjogJHtkZWxldGVfbWF6ZV9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ0FycmF5X3RvX0pTT04oajogSV90YmxfbWF6ZSk6IEpTT05fTWF6ZSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6ICAgICAgai5pZCxcclxuICAgICAgICAgICAgdW5pcV9pZDogai51bmlxX2lkLFxyXG4gICAgICAgICAgICBzYXZlX2lkOiBqLnNhdmVfaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICAgIGoubmFtZSxcclxuICAgICAgICAgICAgc2l6ZV94OiAgai5zaXplX3gsXHJcbiAgICAgICAgICAgIHNpemVfeTogIGouc2l6ZV95LFxyXG4gICAgICAgICAgICBzaXplX3o6ICBqLnNpemVfeixcclxuICAgICAgICAgICAgbWF6ZTogICAgai5tYXBzLFxyXG4gICAgICAgICAgICBtYXNrOiAgICBqLm1hc2ssXHJcbi8vICAgICAgICAgICAgb2JqczogICAgSlNPTi5wYXJzZShqLm9ianMpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIiwiLy8g5Yip55So44Kv44Op44K5562J44Gu6Kqt44G/6L6844G/XHJcbmltcG9ydCBteXNxbCBmcm9tICdteXNxbDIvcHJvbWlzZSc7XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9ICAgICAgZnJvbSAnLi4vZF91dGwvQ19Ec3BNZXNzYWdlJzsgLy8g55S76Z2i44Oh44OD44K744O844K444Gu6KGo56S655So44Kv44Op44K5XHJcbmltcG9ydCB7IENfTW92YWJsZVBvaW50LCBKU09OX01vdmFibGVQb2ludCB9IGZyb20gJy4uL2RfbWRsL0NfTW92YWJsZVBvaW50JztcclxuXHJcbnR5cGUgZGJfY29ubmVjdCA9IG15c3FsLlBvb2xDb25uZWN0aW9uO1xyXG5cclxuaW50ZXJmYWNlIElfdGJsX212cHQgZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0IHtcclxuICAgIGlkOiAgICAgICAgICBudW1iZXIsXHJcbiAgICBzYXZlX2lkOiAgICAgbnVtYmVyLFxyXG4gICAgdW5pcV9pZDogICAgIHN0cmluZyxcclxuICAgIGN1cl91cmw6ICAgICBzdHJpbmcsXHJcbiAgICB0ZWFtX3VpZDogICAgc3RyaW5nLFxyXG4gICAgbG9jX2tpbmQ6ICAgIHN0cmluZywgLyogVW5rbjowLCBNYXplOjEsIEd1bGQ6MiAqL1xyXG4gICAgbG9jX25hbWU6ICAgIHN0cmluZyxcclxuICAgIGxvY191aWQ6ICAgICBzdHJpbmcsXHJcbiAgICBsb2NfcG9zX3g6ICAgbnVtYmVyLFxyXG4gICAgbG9jX3Bvc195OiAgIG51bWJlcixcclxuICAgIGxvY19wb3NfejogICBudW1iZXIsXHJcbiAgICBsb2NfcG9zX2Q6ICAgbnVtYmVyLCAvKiBOOjAsIEU6MSwgUzoyLCBXOjMgWDo5OSAqL1xyXG4gIH1cclxuaW50ZXJmYWNlIElfbGFzdEluc2VydCBleHRlbmRzIG15c3FsLlJvd0RhdGFQYWNrZXQge1xyXG4gICAgaWQ6IG51bWJlcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDX012cHRSREIge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge31cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRfZnJvbV9yZGJfYWxsKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlcik6IFByb21pc2U8Q19Nb3ZhYmxlUG9pbnRbXT4ge1xyXG4gICAgICAgIGNvbnN0IG12cHRfYXJyYXkgPSBhd2FpdCBDX012cHRSREIuZ2V0X2Zyb21fdGJsX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtdnB0X2FycmF5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHNldF90b19yZGIoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyLCBtdnB0OiBDX01vdmFibGVQb2ludCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IG1hc2VfaWQgPSBhd2FpdCBDX012cHRSREIuYWRkX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCwgbXZwdCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdG9fcmRiKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIENfTXZwdFJEQi5kZWxfdGJsKGRiX21haSwgbWVzLCBzYXZlX2lkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBEQuWHpueQhuOAgnNhdmVfaWTjgafmjIflrprjgZXjgozjgZ9tYXpl44Os44Kz44O844OJ44K744OD44OI44KS6Kqt44G/6L6844G/XHJcbiAgICAvLyBNYXpl44Kv44Op44K544Gu6YWN5YiX44Gr44K744OD44OI44GZ44KLXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fdGJsX2FsbChcclxuICAgICAgICAgICAgZGJfbWFpOiBkYl9jb25uZWN0LCBcclxuICAgICAgICAgICAgbWVzOiBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgICAgICBzYXZlX2lkOiBudW1iZXJcclxuICAgICk6IFByb21pc2U8Q19Nb3ZhYmxlUG9pbnRbXT4ge1xyXG4gICAgICAgIGNvbnN0IGdldF9tdnB0X1NRTCA9IGBcclxuICAgICAgICAgICAgU0VMRUNUIFx0ICAgIGlkLCBzYXZlX2lkLCB1bmlxX2lkLCBjdXJfdXJsLCB0ZWFtX3VpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jX2tpbmQsICBsb2NfbmFtZSwgIGxvY191aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY19wb3NfeCwgbG9jX3Bvc195LCBsb2NfcG9zX3osIGxvY19wb3NfZFxyXG4gICAgICAgICAgICBGUk9NIHRibF9tdnB0XHJcbiAgICAgICAgICAgIFdIRVJFICAgc2F2ZV9pZCA9IDpzYXZlX2lkXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZXN1bHRSZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpLnF1ZXJ5PElfdGJsX212cHRbXT4oZ2V0X212cHRfU1FMLCB7c2F2ZV9pZDogc2F2ZV9pZH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMzM6ICR7Z2V0X212cHRfU1FMfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBpZiAocmVzdWx0UmVjb3JkU2V0Lmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtdnB0X2FycmF5ID0gW10gYXMgQ19Nb3ZhYmxlUG9pbnRbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHJyIG9mIHJlc3VsdFJlY29yZFNldCkge1xyXG4gICAgICAgICAgICBtdnB0X2FycmF5LnB1c2gobmV3IENfTW92YWJsZVBvaW50KENfTXZwdFJEQi5mcm9tX3N0cmluZ0FycmF5X3RvX0pTT04ocnIpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtdnB0X2FycmF5O1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJtYXpl44OG44O844OW44Or44Gr6Ieq6Lqr44Gu44OH44O844K/44KS6L+95YqgKGluc2VydCnjgZfjgaZcclxuICAgIC8vIOOBneOBrklEKG1hemVfaWQp44KS6L+U44GZXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgYWRkX3RibChcclxuICAgICAgICAgICAgZGJfbWFpOiAgZGJfY29ubmVjdCwgXHJcbiAgICAgICAgICAgIG1lczogICAgIENfRHNwTWVzc2FnZSwgXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6IG51bWJlcixcclxuICAgICAgICAgICAgbXZwdDogICAgQ19Nb3ZhYmxlUG9pbnRcclxuICAgICAgICApOiBQcm9taXNlPG51bWJlcj4ge1xyXG5cclxuICAgICAgICBjb25zdCBpbnNlcnRfbXZwdF9TUUwgPSBgXHJcbiAgICAgICAgICAgIElOU0VSVCBJTlRPIHRibF9tdnB0KFxyXG4gICAgICAgICAgICAgICAgc2F2ZV9pZCwgICAgdW5pcV9pZCwgICAgY3VyX3VybCwgICAgdGVhbV91aWQsXHJcbiAgICAgICAgICAgICAgICBsb2Nfa2luZCwgICBsb2NfbmFtZSwgICBsb2NfdWlkLFxyXG4gICAgICAgICAgICAgICAgbG9jX3Bvc194LCAgbG9jX3Bvc195LCAgbG9jX3Bvc196LCAgbG9jX3Bvc19kXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgVkFMVUVTIChcclxuICAgICAgICAgICAgICAgIDpzYXZlX2lkLCAgIDp1bmlxX2lkLCAgIDpjdXJfdXJsLCAgIDp0ZWFtX3VpZCxcclxuICAgICAgICAgICAgICAgIDpsb2Nfa2luZCwgIDpsb2NfbmFtZSwgIDpsb2NfdWlkLFxyXG4gICAgICAgICAgICAgICAgOmxvY19wb3NfeCwgOmxvY19wb3NfeSwgOmxvY19wb3NfeiwgOmxvY19wb3NfZCBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBqID0gbXZwdC5lbmNvZGUoKTtcclxuLy9EZWJ1Z1xyXG4vKlxyXG5jb25zb2xlLmVycm9yKFxyXG4gICAgICAgIFwic2F2ZV9pZD1cIiAgICsgICAgc2F2ZV9pZFxyXG4gICAgKyBcIiwgdW5pcV9pZD1cIiAgICsgICAgai51bmlxX2lkXHJcbiAgICArIFwiLCBjdXJfdXJsPVwiICAgKyAgICBqLmN1cl91cmxcclxuICAgICsgXCIsIHRlYW1fdWlkPVwiICArICAgIGoudGVhbV91aWRcclxuICAgICsgXCIsIGxvY19raW5kPVwiICArICAgIGoua2luZFxyXG4gICAgKyBcIiwgbG9jX25hbWU9XCIgICsgICAgai5uYW1lXHJcbiAgICArIFwiLCBsb2NfdWlkPVwiICAgKyAgICBqLmxvY191aWRcclxuICAgICsgXCIsIGxvY19wb3NfeD1cIiArICAgKGoubG9jX3Bvcz8ueD8/MClcclxuICAgICsgXCIsIGxvY19wb3NfeT1cIiArICAgKGoubG9jX3Bvcz8ueT8/MClcclxuICAgICsgXCIsIGxvY19wb3Nfej1cIiArICAgKGoubG9jX3Bvcz8uej8/MClcclxuICAgICsgXCIsIGxvY19wb3NfZD1cIiArICAgKGoubG9jX3Bvcz8uZD8/MClcclxuKVxyXG4qL1xyXG5hd2FpdCBkYl9tYWkucXVlcnkoaW5zZXJ0X212cHRfU1FMLCB7XHJcbiAgICAgICAgICAgIHNhdmVfaWQ6ICAgICBzYXZlX2lkLFxyXG4gICAgICAgICAgICB1bmlxX2lkOiAgICAgai51bmlxX2lkLFxyXG4gICAgICAgICAgICBjdXJfdXJsOiAgICAgai5jdXJfdXJsLFxyXG4gICAgICAgICAgICB0ZWFtX3VpZDogICAgai50ZWFtX3VpZCxcclxuICAgICAgICAgICAgbG9jX2tpbmQ6ICAgIGoua2luZCxcclxuICAgICAgICAgICAgbG9jX25hbWU6ICAgIGoubmFtZSxcclxuICAgICAgICAgICAgbG9jX3VpZDogICAgIGoubG9jX3VpZCxcclxuICAgICAgICAgICAgbG9jX3Bvc194OiAgIGoubG9jX3Bvcz8ueD8/MCxcclxuICAgICAgICAgICAgbG9jX3Bvc195OiAgIGoubG9jX3Bvcz8ueT8/MCxcclxuICAgICAgICAgICAgbG9jX3Bvc196OiAgIGoubG9jX3Bvcz8uej8/MCxcclxuICAgICAgICAgICAgbG9jX3Bvc19kOiAgIGoubG9jX3Bvcz8uZD8/OTksXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAzOiAke2luc2VydF9tdnB0X1NRTH1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBDX012cHRSREIubGFzdEluc2VydChkYl9tYWksIG1lcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIHRibF90ZWFt44Gn5pyA5b6M44Gr6L+95Yqg44GX44Gf6KGM55Wq5Y+3KHNhdmVfaWQp44KS6L+U44GZ44CQMeihjOaMv+WFpeWwgueUqOOAkVxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBsYXN0SW5zZXJ0KGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UpIDogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBjb25zdCBsYXN0SW5zZXJ0X1NRTCA9YFxyXG4gICAgICAgICAgICBTRUxFQ1QgTEFTVF9JTlNFUlRfSUQoKSBhcyBpZCBGUk9NIHRibF9tdnB0O1xyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haS5xdWVyeTxJX2xhc3RJbnNlcnRbXT4obGFzdEluc2VydF9TUUwpXHJcbiAgICAgICAgLmNhdGNoICgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCA1MDA6ICR7bGFzdEluc2VydF9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlY29yZFNldC5sZW5ndGggPCAxKSByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIHJlY29yZFNldFswXS5pZDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZlX2lk44Gn5oyH5a6a44GV44KM44Gf44Os44Kz44O844OJKOikh+aVsCnjgpLliYrpmaQoZGVsZXRlKeOBmeOCi1xyXG4gICAgLy8gXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGRlbF90YmwoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlX212cHRfU1FMID0gYFxyXG4gICAgICAgICAgICBERUxFVEUgRlJPTSB0YmxfbXZwdCBcclxuICAgICAgICAgICAgV0hFUkUgIHNhdmVfaWQgPSA6c2F2ZV9pZFxyXG4gICAgICAgIGBcclxuICAgICAgICBhd2FpdCBkYl9tYWkucXVlcnkoZGVsZXRlX212cHRfU1FMLCB7c2F2ZV9pZDogc2F2ZV9pZH0pXHJcbiAgICAgICAgLmNhdGNoICgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAxMjogJHtkZWxldGVfbXZwdF9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ0FycmF5X3RvX0pTT04oajogSV90YmxfbXZwdCk6IEpTT05fTW92YWJsZVBvaW50IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1bmlxX2lkOiAgICAgai51bmlxX2lkLFxyXG4gICAgICAgICAgICBjdXJfdXJsOiAgICAgai5jdXJfdXJsLFxyXG4gICAgICAgICAgICB0ZWFtX3VpZDogICAgai50ZWFtX3VpZCxcclxuICAgICAgICAgICAga2luZDogICAgICAgIGoubG9jX2tpbmQsXHJcbiAgICAgICAgICAgIG5hbWU6ICAgICAgICBqLmxvY19uYW1lLFxyXG4gICAgICAgICAgICBsb2NfdWlkOiAgICAgai5sb2NfdWlkLFxyXG4gICAgICAgICAgICBsb2NfcG9zOiB7XHJcbiAgICAgICAgICAgICAgICB4OiAgICAgICBqLmxvY19wb3NfeD8/MCxcclxuICAgICAgICAgICAgICAgIHk6ICAgICAgIGoubG9jX3Bvc195Pz8wLFxyXG4gICAgICAgICAgICAgICAgejogICAgICAgai5sb2NfcG9zX3o/PzAsXHJcbiAgICAgICAgICAgICAgICBkOiAgICAgICBqLmxvY19wb3NfZD8/OTksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG4vLyDliKnnlKjjgq/jg6njgrnnrYnjga7oqq3jgb/ovrzjgb9cclxuaW1wb3J0ICAgbXlzcWwgICAgICAgICAgICBmcm9tIFwibXlzcWwyL3Byb21pc2VcIjtcclxuaW1wb3J0IHsgQ19Ec3BNZXNzYWdlIH0gICBmcm9tICcuLi9kX3V0bC9DX0RzcE1lc3NhZ2UnOyAvLyDnlLvpnaLjg6Hjg4Pjgrvjg7zjgrjjga7ooajnpLrnlKjjgq/jg6njgrlcclxuaW1wb3J0IHsgQ19TYXZlRGF0YSB9ICAgICBmcm9tIFwiLi4vZF9tZGwvQ19TYXZlRGF0YVwiO1xyXG5pbXBvcnQgeyBDX1NhdmVJbmZvIH0gICAgIGZyb20gXCIuLi9kX21kbC9DX1NhdmVJbmZvXCI7XHJcbmltcG9ydCB7IENfTW92YWJsZVBvaW50IH0gZnJvbSBcIi4uL2RfbWRsL0NfTW92YWJsZVBvaW50XCI7XHJcbmltcG9ydCB7IENfVGVhbVJEQiB9ICAgICAgZnJvbSBcIi4vQ19UZWFtUkRCXCI7XHJcbmltcG9ydCB7IENfSGVyb1JEQiB9ICAgICAgZnJvbSBcIi4vQ19IZXJvUkRCXCI7XHJcbmltcG9ydCB7IENfTWF6ZVJEQiB9ICAgICAgZnJvbSBcIi4vQ19NYXplUkRCXCI7XHJcbmltcG9ydCB7IENfR3VpbGRSREIgfSAgICAgZnJvbSBcIi4vQ19HdWlsZFJEQlwiO1xyXG5pbXBvcnQgeyBDX012cHRSREIgfSAgICAgIGZyb20gXCIuL0NfTXZwdFJEQlwiO1xyXG5cclxudHlwZSBkYl9jb25uZWN0ID0gbXlzcWwuUG9vbENvbm5lY3Rpb247XHJcblxyXG5pbnRlcmZhY2UgSV90YmxfU2F2ZUluZm8gZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0IHtcclxuICAgIHNhdmVfaWQ6ICAgbnVtYmVyO1xyXG4gICAgcGxheWVyX2lkOiBudW1iZXI7XHJcbiAgICB1bmlxX25vOiAgIG51bWJlcjsgXHJcbiAgICB0aXRsZTogICAgIHN0cmluZzsgXHJcbiAgICBkZXRhaWw6ICAgIHN0cmluZzsgXHJcbiAgICBwb2ludDogICAgIHN0cmluZzsgXHJcbiAgICBhdXRvX21vZGU6IHN0cmluZzsgXHJcbiAgICBpc19hY3RpdmU6IHN0cmluZzsgXHJcbiAgICBpc19kZWxldGU6IHN0cmluZzsgXHJcbiAgICBtcDogICAgICAgIHN0cmluZzsgIC8vIG15cG9zXHJcbiAgICBzYXZlX3RpbWU6IHN0cmluZztcclxufVxyXG5pbnRlcmZhY2UgSV90YmxfU2F2ZURhdGEgZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0ICB7XHJcbiAgICBzYXZlX2lkOiAgIG51bWJlcjtcclxuICAgIHBsYXllcl9pZDogbnVtYmVyO1xyXG4gICAgdW5pcV9ubzogICBudW1iZXI7IFxyXG4gICAgdGl0bGU6ICAgICBzdHJpbmc7IFxyXG4gICAgZGV0YWlsOiAgICBzdHJpbmc7IFxyXG4gICAgcG9pbnQ6ICAgICBzdHJpbmc7IFxyXG4gICAgYXV0b19tb2RlOiBzdHJpbmc7IFxyXG4gICAgaXNfYWN0aXZlOiBzdHJpbmc7IFxyXG4gICAgaXNfZGVsZXRlOiBzdHJpbmc7IFxyXG4gICAgbXA6ICAgICAgICBzdHJpbmc7ICAvLyBteXBvc1xyXG4gICAgc2F2ZV90aW1lOiBzdHJpbmc7XHJcbi8vICAgIG12cHQ6ICAgICAgc3RyaW5nOyAgLy8gYWxsX212cHRcclxufVxyXG5pbnRlcmZhY2UgSV90YmxfU2F2ZUlkICAgZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0IHtcclxuICAgIHNhdmVfaWQ6IG51bWJlcjtcclxufVxyXG5pbnRlcmZhY2UgSV9sYXN0SW5zZXJ0ICAgZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1NhdmVJbmZvUkRCIHtcclxuICAgIC8vIERC5Yem55CG44CCcGxheWVyX2TjgavoqbLlvZPjgZnjgovjgrvjg7zjg5bjg4fjg7zjgr/jgpJEQuOBi+OCieiqreOBv+i+vOOBv1xyXG4gICAgLy8gU2F2ZUluZm9bXeOBrumFjeWIl+OCkui/lOOBmVxyXG4gICAgLy8g6Z2e5rS75oCn44OH44O844K/44KE5YmK6Zmk5riI44OH44O844K/44Gv44K544Kt44OD44OX44GZ44KLXHJcbiAgICAvLyBcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0X2xpc3RfYnlfcGlkKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHBsYXllcl9pZDogbnVtYmVyKTogUHJvbWlzZTxDX1NhdmVJbmZvW10+IHtcclxuICAgICAgICBjb25zdCBnZXRfc2F2ZV9TUUwgPSBgXHJcbiAgICAgICAgICAgIFNFTEVDVCBzYXZlX2lkLCBwbGF5ZXJfaWQsIHVuaXFfbm8sIHRpdGxlLCBkZXRhaWwsIHBvaW50LCBcclxuICAgICAgICAgICAgICAgICAgICBhdXRvX21vZGUsIGlzX2FjdGl2ZSwgaXNfZGVsZXRlLCBcclxuICAgICAgICAgICAgICAgICAgICBteXBvcyBhcyBtcCwgXHJcbiAgICAgICAgICAgICAgICAgICAgREFURV9GT1JNQVQoc2F2ZV90aW1lLCclWS0lbS0lZFQlSDolaTolcy4lZlonKSBBUyBzYXZlX3RpbWVcclxuICAgICAgICAgICAgRlJPTSAgIHRibF9zYXZlXHJcbiAgICAgICAgICAgIFdIRVJFICBwbGF5ZXJfaWQgPSA6cGxheWVyX2lkIFxyXG4gICAgICAgICAgICBPUkRFUiAgQlkgdGl0bGUgQ09MTEFURSB1dGY4bWI0X3VuaWNvZGVfY2kgQVNDXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpLnF1ZXJ5PElfdGJsX1NhdmVJbmZvW10+KGdldF9zYXZlX1NRTCwge3BsYXllcl9pZDogcGxheWVyX2lkfSlcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDUwOiAke2dldF9zYXZlX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAocmVjb3JkU2V0Lmxlbmd0aCA8IDEpIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2F2ZV9kYXRhX3NldDogQ19TYXZlSW5mb1tdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBpaSBpbiByZWNvcmRTZXQpIHtcclxuICAgICAgICAgICAgaWYgKHJlY29yZFNldFtpaV0uaXNfYWN0aXZlID09ICcwJykgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChyZWNvcmRTZXRbaWldLmlzX2RlbGV0ZSAhPSAnMCcpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2F2ZSA9IG5ldyBDX1NhdmVJbmZvKHJlY29yZFNldFtpaV0pO1xyXG4gICAgICAgICAgICBzYXZlLm15cG9zICAgICA9IENfTW92YWJsZVBvaW50LmZyb21fc3RyaW5nX3RvX29iaihyZWNvcmRTZXRbaWldLm1wKVxyXG4gICAgXHJcbiAgICAgICAgICAgIHNhdmVfZGF0YV9zZXQucHVzaChzYXZlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNhdmVfZGF0YV9zZXQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIERC5Yem55CG44CC44Om44OL44O844Kv44O744OK44Oz44OQ44O844GL44KJc2F2ZV9pZOOCkuW+l+OCi+OAguipsuW9k+OBmeOCi+ODrOOCs+ODvOODieOBjOeEoeOBkeOCjOOBsOaIu+OCiuWApOOBpy0x44KS6L+U44GZXHJcbiAgICAvLyBcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0X3NhdmVfaWRfYXRfdGJsKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHBsYXllcl9pZDogbnVtYmVyLHVuaXFfbm86IG51bWJlcik6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgY29uc3Qgc2Vla19zYXZlX1NRTCA9IGBcclxuICAgICAgICAgICAgU0VMRUNUIHNhdmVfaWRcclxuICAgICAgICAgICAgRlJPTSAgIHRibF9zYXZlXHJcbiAgICAgICAgICAgIFdIRVJFICBwbGF5ZXJfaWQgPSA6cGxheWVyX2lkIEFORCB1bmlxX25vID0gOnVuaXFfbm9cclxuICAgICAgICAgICAgT1JERVIgIEJZIHVuaXFfbm9cclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3JlY29yZFNldF0gPSBhd2FpdCBkYl9tYWkucXVlcnk8SV90YmxfU2F2ZUlkW10+KHNlZWtfc2F2ZV9TUUwsIHtwbGF5ZXJfaWQ6IHBsYXllcl9pZCwgdW5pcV9ubzogdW5pcV9ub30pXHJcbiAgICAgICAgLmNhdGNoICgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAyMDogJHtzZWVrX3NhdmVfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChyZWNvcmRTZXQubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc05hTihyZWNvcmRTZXRbMF0uc2F2ZV9pZCkpIHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgc2F2ZV9pZCDmlbDlgKTjgqjjg6njg7wgMjE6ICR7cmVjb3JkU2V0WzBdLnNhdmVfaWR9IGApO1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBOdW1iZXIocmVjb3JkU2V0WzBdLnNhdmVfaWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1NhdmVEYXRhUkRCIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldF9mcm9tX3JkYihkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPENfU2F2ZURhdGF8dW5kZWZpbmVkPiB7XHJcbi8vZGVidWcgY29uc29sZS5lcnJvcihgcHJlIGdldF9mcm9tIFNhdmVEYXRhUkRCIHNhdmVfaWQ9JHtzYXZlX2lkfWApO1xyXG4gICAgICAgIGNvbnN0IHNhdmVfZGF0YSAgPSBhd2FpdCBDX1NhdmVEYXRhUkRCLmdldF9mcm9tX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKHNhdmVfZGF0YSA9PT0gdW5kZWZpbmVkIHx8IG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4vL2RlYnVnIGNvbnNvbGUuZXJyb3IoYHByZSBnZXRfZnJvbSBNYXplUkRCIHNhdmVfaWQ9JHtzYXZlX2lkfWApO1xyXG4gICAgICAgIGNvbnN0IG1hemVfYXJyYXkgPSBhd2FpdCBDX01hemVSREIuZ2V0X2Zyb21fcmRiX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IG1hemUgb2YgbWF6ZV9hcnJheSkgc2F2ZV9kYXRhLmFsbF9tYXplW21hemUudWlkKCldID0gbWF6ZTtcclxuIFxyXG4vL2RlYnVnIGNvbnNvbGUuZXJyb3IoYHByZSBnZXRfZnJvbSBNdnB0UkRCIHNhdmVfaWQ9JHtzYXZlX2lkfWApO1xyXG4gICAgICAgIGNvbnN0IG12cHRfYXJyYXkgPSBhd2FpdCBDX012cHRSREIuZ2V0X2Zyb21fcmRiX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IG12cHQgb2YgbXZwdF9hcnJheSkgc2F2ZV9kYXRhLmFsbF9tdnB0W212cHQudWlkKCldID0gbXZwdDtcclxuICAgICAgICBcclxuLy9kZWJ1ZyBjb25zb2xlLmVycm9yKGBwcmUgZ2V0X2Zyb20gVGVhbVJEQiBzYXZlX2lkPSR7c2F2ZV9pZH1gKTtcclxuICAgICAgICBjb25zdCB0ZWFtX2FycmF5ID0gYXdhaXQgQ19UZWFtUkRCLmdldF9mcm9tX3JkYl9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgdGVhbSBvZiB0ZWFtX2FycmF5KSBzYXZlX2RhdGEuYWxsX3RlYW1bdGVhbS51aWQoKV0gPSB0ZWFtO1xyXG4gICAgICAgIFxyXG4vL2RlYnVnIGNvbnNvbGUuZXJyb3IoYHByZSBnZXRfZnJvbSBHdWlsZFJEQiBzYXZlX2lkPSR7c2F2ZV9pZH1gKTtcclxuICAgICAgICBjb25zdCBndWxkX2FycmF5ID0gYXdhaXQgQ19HdWlsZFJEQi5nZXRfZnJvbV9yZGJfYWxsKGRiX21haSwgbWVzLCBzYXZlX2lkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGd1bGQgb2YgZ3VsZF9hcnJheSkgc2F2ZV9kYXRhLmFsbF9ndWxkW2d1bGQudWlkKCldID0gZ3VsZDtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gc2F2ZV9kYXRhO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHNldF90b19yZGIoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZTogQ19TYXZlRGF0YXx1bmRlZmluZWQpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBpZiAoc2F2ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc2F2ZV9pZCA9IGF3YWl0IENfU2F2ZURhdGFSREIuYWRkX3RibChkYl9tYWksIG1lcywgc2F2ZSk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4vL2RlYnVnIGNvbnNvbGUuZXJyb3IoYHNhdmVfaWQgPSAke3NhdmVfaWR9YCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBpaSBpbiBzYXZlLmFsbF9tYXplKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IENfTWF6ZVJEQi5zZXRfdG9fcmRiKGRiX21haSwgbWVzLCBzYXZlX2lkLCBzYXZlLmFsbF9tYXplW2lpXSk7XHJcbiAgICAgICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBpaSBpbiBzYXZlLmFsbF9tdnB0KSB7XHJcbi8vZGVidWcgY29uc29sZS5lcnJvcihgc2F2ZV9pZCA9ICR7c2F2ZV9pZH0sIG12cHRbJHtpaX1dID0gJHtzYXZlLmFsbF9tdnB0W2lpXX1gKTtcclxuICAgICAgICAgICAgYXdhaXQgQ19NdnB0UkRCLnNldF90b19yZGIoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIHNhdmUuYWxsX212cHRbaWldKTtcclxuICAgICAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gc2F2ZS5hbGxfdGVhbSkge1xyXG4gICAgICAgICAgICBhd2FpdCBDX1RlYW1SREIuc2V0X3RvX3JkYihkYl9tYWksIG1lcywgc2F2ZV9pZCwgc2F2ZS5hbGxfdGVhbVtpaV0pO1xyXG4gICAgICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChjb25zdCBpaSBpbiBzYXZlLmFsbF9ndWxkKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IENfR3VpbGRSREIuc2V0X3RvX3JkYihkYl9tYWksIG1lcywgc2F2ZV9pZCwgc2F2ZS5hbGxfZ3VsZFtpaV0pO1xyXG4gICAgICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGRlbF90b19yZGIoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgYXdhaXQgQ19IZXJvUkRCLmRlbF90YmxfYWxsKGRiX21haSwgbWVzLCBzYXZlX2lkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IENfR3VpbGRSREIuZGVsX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBDX1RlYW1SREIuZGVsX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBDX012cHRSREIuZGVsX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBDX01hemVSREIuZGVsX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBDX1NhdmVEYXRhUkRCLmRlbF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBp+aMh+WumuOBleOCjOOBn3NhdmXjg6zjgrPjg7zjg4ko5Y2Y5pWwKeOCkuiqreOBv+i+vOOBv1xyXG4gICAgLy8gc2F2ZV9kYXRh44KS6L+U44GZXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fdGJsKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlcik6IFByb21pc2U8Q19TYXZlRGF0YXx1bmRlZmluZWQ+IHtcclxuICAgICAgICBjb25zdCBnZXRfc2F2ZV9TUUwgPSBgXHJcbiAgICAgICAgICAgIFNFTEVDVCAgc2F2ZV9pZCwgcGxheWVyX2lkLCB1bmlxX25vLCB0aXRsZSwgZGV0YWlsLCBwb2ludCwgXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b19tb2RlLCBpc19hY3RpdmUsIGlzX2RlbGV0ZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgbXlwb3MgYXMgbXAsIERBVEVfRk9STUFUKHNhdmVfdGltZSwnJVktJW0tJWRUJUg6JWk6JXMuJWZaJykgQVMgc2F2ZV90aW1lXHJcbiAgICAgICAgICAgIEZST00gICB0Ymxfc2F2ZVxyXG4gICAgICAgICAgICBXSEVSRSAgc2F2ZV9pZCA9IDpzYXZlX2lkXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpLnF1ZXJ5PElfdGJsX1NhdmVEYXRhW10+KGdldF9zYXZlX1NRTCwge3NhdmVfaWQ6IHNhdmVfaWR9KVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMzA6ICR7Z2V0X3NhdmVfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG5cclxuLy9kZWd1YiBcclxuaWYgKHJlY29yZFNldCA9PT0gdW5kZWZpbmVkKSBjb25zb2xlLmVycm9yKGBTYXZlRGF0YVJEQi5nZXRfZnJvbV90YWJsZSBFcnJvcjogdW5kZWZpbmRlISEgc2F2ZV9pZD0ke3NhdmVfaWR9YCk7XHJcbiAgICAgICAgaWYgKHJlY29yZFNldC5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYOipsuW9k+OBmeOCi+ODh+ODvOOCv+OBjOacieOCiuOBvuOBm+OCkzogJHtnZXRfc2F2ZV9TUUx9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzYXZlID0gbmV3IENfU2F2ZURhdGEocmVjb3JkU2V0WzBdKTtcclxuICAgICAgICBzYXZlLm15cG9zICAgICA9IENfTW92YWJsZVBvaW50LmZyb21fc3RyaW5nX3RvX29iaihyZWNvcmRTZXRbMF0ubXApXHJcbi8vICAgICAgICBzYXZlLmFsbF9tdnB0ICA9IENfTW92YWJsZVBvaW50LmZyb21fc3RyaW5nX3RvX29iakFycmF5KHJlY29yZFNldFswXS5tdnB0KTtcclxuLy8gICAgICAgIHNhdmUuYWxsX21hemUgID0gQ19NYXplIC5mcm9tX3N0cmluZ190b19vYmpBcnJheShyZWNvcmRTZXRbMF0ubWF6ZSk7XHJcbi8vICAgICAgICBzYXZlLmFsbF90ZWFtICA9IENfVGVhbSAuZnJvbV9zdHJpbmdfdG9fb2JqQXJyYXkocmVjb3JkU2V0WzBdLnRlYW0pO1xyXG4vLyAgICAgICAgc2F2ZS5hbGxfZ3VsZCAgPSBDX0d1aWxkLmZyb21fc3RyaW5nX3RvX29iakFycmF5KHJlY29yZFNldFswXS5ndWxkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNhdmU7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvLyBEQuWHpueQhuOAgnNhdmXjg4bjg7zjg5bjg6vjgavoh6rouqvjga7jg4fjg7zjgr/jgpLov73liqAoaW5zZXJ0KeOBl+OBplxyXG4gICAgLy8g44Gd44GuSUQoc2F2ZV9pZCnjgpLov5TjgZlcclxuICAgIC8vIFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBhZGRfdGJsKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmU6IENfU2F2ZURhdGEpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGNvbnN0IGF1dG9fbW9kZSA9IHNhdmUuYXV0b19tb2RlID8gJzEnIDogJzAnO1xyXG4gICAgICAgIGNvbnN0IGlzX2FjdGl2ZSA9IHNhdmUuaXNfYWN0aXZlID8gJzEnIDogJzAnO1xyXG4gICAgICAgIGNvbnN0IGlzX2RlbGV0ZSA9IHNhdmUuaXNfZGVsZXRlID8gJzEnIDogJzAnO1xyXG5cclxuICAgICAgICBjb25zdCBpbnNlcnRfc2F2ZV9TUUwgPWBcclxuICAgICAgICAgICAgSU5TRVJUICBJTlRPIHRibF9zYXZlIChcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJfaWQsIHVuaXFfbm8sICAgdGl0bGUsIGRldGFpbCwgcG9pbnQsIFxyXG4gICAgICAgICAgICAgICAgICAgIG15cG9zLCBcclxuICAgICAgICAgICAgICAgICAgICBhdXRvX21vZGUsIGlzX2FjdGl2ZSwgaXNfZGVsZXRlXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIFZBTFVFUyAoIFxyXG4gICAgICAgICAgICAgICAgICAgIDpwbGF5ZXJfaWQsIDp1bmlxX25vLCAgIDp0aXRsZSwgOmRldGFpbCwgOnBvaW50LCBcclxuICAgICAgICAgICAgICAgICAgICA6bXlwb3MsIFxyXG4gICAgICAgICAgICAgICAgICAgIDphdXRvX21vZGUsIDppc19hY3RpdmUsIDppc19kZWxldGUpXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGF3YWl0IGRiX21haS5xdWVyeShpbnNlcnRfc2F2ZV9TUUwsIHtcclxuICAgICAgICAgICAgcGxheWVyX2lkOiBzYXZlLnBsYXllcl9pZCxcclxuICAgICAgICAgICAgdW5pcV9ubzogICBzYXZlLnVuaXFfbm8sXHJcbiAgICAgICAgICAgIHRpdGxlOiAgICAgc2F2ZS50aXRsZSxcclxuICAgICAgICAgICAgZGV0YWlsOiAgICBzYXZlLmRldGFpbCxcclxuICAgICAgICAgICAgcG9pbnQ6ICAgICBzYXZlLnBvaW50LFxyXG4gICAgICAgICAgICBteXBvczogICAgIENfTW92YWJsZVBvaW50LmZyb21fb2JqX3RvX3N0cmluZyhzYXZlLm15cG9zKSxcclxuLy8gICAgICAgICAgICBhbGxfbXZwdDogIENfTW92YWJsZVBvaW50LmZyb21fb2JqQXJyYXlfdG9fc3RyaW5nKHNhdmUuYWxsX212cHQpLFxyXG4gICAgICAgICAgICBhdXRvX21vZGU6IGF1dG9fbW9kZSxcclxuICAgICAgICAgICAgaXNfYWN0aXZlOiBpc19hY3RpdmUsXHJcbiAgICAgICAgICAgIGlzX2RlbGV0ZTogaXNfZGVsZXRlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoICgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAwOiAke2luc2VydF9zYXZlX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiAtMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBDX1NhdmVEYXRhUkRCLmxhc3RJbnNlcnQoZGJfbWFpLCBtZXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyB0Ymxfc2F2ZV9kYXRh44Gn5pyA5b6M44Gr6L+95Yqg44GX44Gf6KGM55Wq5Y+3KHNhdmVfaWQp44KS6L+U44GZ44CQMeihjOaMv+WFpeWwgueUqOOAkVxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBsYXN0SW5zZXJ0KGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UpIDogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBjb25zdCBsYXN0SW5zZXJ0X1NRTCA9YFxyXG4gICAgICAgICAgICBTRUxFQ1QgTEFTVF9JTlNFUlRfSUQoKSBhcyBpZCBGUk9NIHRibF9zYXZlO1xyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haS5xdWVyeTxJX2xhc3RJbnNlcnRbXT4obGFzdEluc2VydF9TUUwpXHJcbiAgICAgICAgLmNhdGNoICgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCA1MDA6ICR7bGFzdEluc2VydF9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlY29yZFNldC5sZW5ndGggPCAxKSByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIHJlY29yZFNldFswXS5pZDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZlX2lk44Gn5oyH5a6a44GV44KM44Gf44Os44Kz44O844OJ44KS5YmK6ZmkKGRlbGV0ZSnjgZnjgotcclxuICAgIC8vIFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBkZWxfdGJsKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZV9zYXZlX1NRTCA9IGBcclxuICAgICAgICAgICAgREVMRVRFIEZST00gdGJsX3NhdmUgXHJcbiAgICAgICAgICAgIFdIRVJFICBzYXZlX2lkID0gOnNhdmVfaWRcclxuICAgICAgICBgXHJcbiAgICAgICAgYXdhaXQgZGJfbWFpLnF1ZXJ5KGRlbGV0ZV9zYXZlX1NRTCwge1xyXG4gICAgICAgICAgICBzYXZlX2lkICA6IHNhdmVfaWQsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDEwOiAke2RlbGV0ZV9zYXZlX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4iLCIvLyDliKnnlKjjgq/jg6njgrnnrYnjga7oqq3jgb/ovrzjgb9cclxuaW1wb3J0IG15c3FsIGZyb20gJ215c3FsMi9wcm9taXNlJztcclxuaW1wb3J0IHsgQ19Ec3BNZXNzYWdlIH0gICAgICAgZnJvbSAnLi4vZF91dGwvQ19Ec3BNZXNzYWdlJzsgLy8g55S76Z2i44Oh44OD44K744O844K444Gu6KGo56S655So44Kv44Op44K5XHJcbmltcG9ydCB7IENfVGVhbSwgSlNPTl9UZWFtIH0gIGZyb20gXCIuLi9kX21kbC9DX1RlYW1cIjtcclxuaW1wb3J0IHsgQ19IZXJvUkRCIH0gICAgICAgICAgZnJvbSAnLi9DX0hlcm9SREInO1xyXG5cclxudHlwZSBkYl9jb25uZWN0ID0gbXlzcWwuUG9vbENvbm5lY3Rpb247XHJcblxyXG5pbnRlcmZhY2UgSV90YmxfdGVhbSBleHRlbmRzIG15c3FsLlJvd0RhdGFQYWNrZXQge1xyXG4gICAgaWQ6IG51bWJlcixcclxuICAgIHNhdmVfaWQ6IG51bWJlcixcclxuICAgIHVuaXFfaWQ6IHN0cmluZyxcclxuICAgIG5hbWU6ICAgIHN0cmluZyxcclxuICAgIGxvY2F0ZTogIHN0cmluZyxcclxuICAgIGdvbGQ6ICAgIG51bWJlcixcclxuLy8gICAgZ29vZHM6ICAgc3RyaW5nLFxyXG59XHJcbmludGVyZmFjZSBJX2xhc3RJbnNlcnQgZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1RlYW1SREIgeyBcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRfZnJvbV9yZGJfYWxsKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlcik6IFByb21pc2U8Q19UZWFtW10+IHtcclxuICAgICAgICBjb25zdCB0ZWFtX2FycmF5ID0gYXdhaXQgQ19UZWFtUkRCLmdldF9mcm9tX3RibF9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IHRlYW0gb2YgdGVhbV9hcnJheSkge1xyXG4gICAgICAgICAgICBjb25zdCBocmVzX2FycmF5ID0gYXdhaXQgQ19IZXJvUkRCLmdldF9mcm9tX3JkYl9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIHRlYW0udWlkKCkpO1xyXG4gICAgICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChjb25zdCBoZXJvIG9mIGhyZXNfYXJyYXkpIHRlYW0uYWRkX2hlcm8oaGVybyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZWFtX2FycmF5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldF9mcm9tX3JkYihkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIsIHRlYW06IENfVGVhbSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IHJzbHQwID0gYXdhaXQgQ19UZWFtUkRCLmdldF9mcm9tX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCwgdGVhbS51aWQoKSk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGhyZXNfYXJyYXkgPSBhd2FpdCBDX0hlcm9SREIuZ2V0X2Zyb21fcmRiX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCwgdGVhbS51aWQoKSk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgaGVybyBvZiBocmVzX2FycmF5KSB0ZWFtLmFkZF9oZXJvKGhlcm8pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHNldF90b19yZGIoXHJcbiAgICAgICAgZGJfbWFpOiAgZGJfY29ubmVjdCxcclxuICAgICAgICBtZXM6ICAgICBDX0RzcE1lc3NhZ2UsXHJcbiAgICAgICAgc2F2ZV9pZDogbnVtYmVyLFxyXG4gICAgICAgIHRlYW06ICAgIENfVGVhbVxyXG4gICAgKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgdGVhbV9pZCA9IGF3YWl0IENfVGVhbVJEQi5hZGRfdGJsKGRiX21haSwgbWVzLCBzYXZlX2lkLCB0ZWFtKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBoZXJvIG9mIHRlYW0uaHJlcygpKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IENfSGVyb1JEQi5zZXRfdG9fcmRiKGRiX21haSwgbWVzLCBzYXZlX2lkLCB0ZWFtLnVpZCgpLCBoZXJvKTtcclxuICAgICAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdG9fcmRiKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlciwgdGVhbV91aWQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGF3YWl0IENfSGVyb1JEQi5kZWxfdG9fcmRiKGRiX21haSwgbWVzLCBzYXZlX2lkLCB0ZWFtX3VpZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IENfVGVhbVJEQi5kZWxfdGJsKGRiX21haSwgbWVzLCBzYXZlX2lkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBEQuWHpueQhuOAgnNhdmVfaWTjgafmjIflrprjgZXjgozjgZ90ZWFt44Os44Kz44O844OJ44K744OD44OI44KS6Kqt44G/6L6844G/XHJcbiAgICAvLyBUZWFt44Kv44Op44K544Gu6YWN5YiX44Gr44K744OD44OI44GZ44KLXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fdGJsX2FsbChcclxuICAgICAgICBkYl9tYWk6ICBkYl9jb25uZWN0LCBcclxuICAgICAgICBtZXM6ICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgIHNhdmVfaWQ6IG51bWJlcixcclxuICAgICk6IFByb21pc2U8Q19UZWFtW10+IHtcclxuICAgICAgICBjb25zdCBnZXRfdGVhbV9TUUwgPWBcclxuICAgICAgICAgICAgU0VMRUNUIFx0aWQsIHNhdmVfaWQsIHVuaXFfaWQsIG5hbWUsIGxvY2F0ZSwgZ29sZFxyXG4gICAgICAgICAgICBGUk9NIHRibF90ZWFtXHJcbiAgICAgICAgICAgIFdIRVJFICAgc2F2ZV9pZCA9IDpzYXZlX2lkXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZXN1bHRSZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpLnF1ZXJ5PElfdGJsX3RlYW1bXT4oZ2V0X3RlYW1fU1FMLCB7c2F2ZV9pZDogc2F2ZV9pZH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMzdhOiAke2dldF90ZWFtX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGlmIChyZXN1bHRSZWNvcmRTZXQubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRlYW1fYXJyYXkgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHJyIG9mIHJlc3VsdFJlY29yZFNldCkge1xyXG4gICAgICAgICAgICB0ZWFtX2FycmF5LnB1c2gobmV3IENfVGVhbShDX1RlYW1SREIuZnJvbV9zdHJpbmdBcnJheV90b19KU09OKHJyKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVhbV9hcnJheTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEQuWHpueQhuOAgnNhdmVfaWTjgajoh6rouqvjga51bmlxX2lk44Gn5oyH5a6a44GV44KM44GfdGVhbeODrOOCs+ODvOODieOCu+ODg+ODiOOCkuiqreOBv+i+vOOCgFxyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGdldF9mcm9tX3RibChcclxuICAgICAgICBkYl9tYWk6ICAgZGJfY29ubmVjdCwgXHJcbiAgICAgICAgbWVzOiAgICAgIENfRHNwTWVzc2FnZSwgXHJcbiAgICAgICAgc2F2ZV9pZDogIG51bWJlcixcclxuICAgICAgICBqb2luX3VpZDogc3RyaW5nLFxyXG4gICAgKTogUHJvbWlzZTxDX1RlYW18dW5kZWZpbmVkPiB7XHJcbiAgICAgICAgY29uc3QgZ2V0X3RlYW1fU1FMID0gYFxyXG4gICAgICAgICAgICBTRUxFQ1QgXHRpZCwgc2F2ZV9pZCwgdW5pcV9pZCwgbmFtZSwgbG9jYXRlLCBnb2xkIFxyXG4gICAgICAgICAgICBGUk9NIHRibF90ZWFtXHJcbiAgICAgICAgICAgIFdIRVJFICAgc2F2ZV9pZCA9IDpzYXZlX2lkICBBTkQgIHVuaXFfaWQgPSA6dW5pcV9pZFxyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVzdWx0UmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haS5xdWVyeTxJX3RibF90ZWFtW10+KGdldF90ZWFtX1NRTCwge3NhdmVfaWQ6IHNhdmVfaWQsIGpvaW5fdWlkOiBqb2luX3VpZH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMzdiOiAke2dldF90ZWFtX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGlmIChyZXN1bHRSZWNvcmRTZXQubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKCdVbmlxX2lk44Gr6Kmy5b2T44GZ44KLVGVhbeODh+ODvOOCv+OBjOacieOCiuOBvuOBm+OCkycpO1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IENfVGVhbShDX1RlYW1SREIuZnJvbV9zdHJpbmdBcnJheV90b19KU09OKHJlc3VsdFJlY29yZFNldFswXSkpXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAvLyBEQuWHpueQhuOAgnRlYW3jg4bjg7zjg5bjg6vjgatDX1RlYW3jga7jg4fjg7zjgr/jgpLov73liqAoaW5zZXJ0KeOBl+OBplxyXG4gICAgLy8g44Gd44GuSUQoaWQp44KS6L+U44GZXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgYWRkX3RibChcclxuICAgICAgICBkYl9tYWk6ICBkYl9jb25uZWN0LCBcclxuICAgICAgICBtZXM6ICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgIHNhdmVfaWQ6IG51bWJlcixcclxuICAgICAgICB0ZWFtOiAgICBDX1RlYW0sXHJcbiAgICApOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGNvbnN0IGluc2VydF90ZWFtX1NRTCA9IGBcclxuICAgICAgICAgICAgSU5TRVJUIElOVE8gdGJsX3RlYW0gKFxyXG4gICAgICAgICAgICAgICAgc2F2ZV9pZCwgdW5pcV9pZCwgbmFtZSwgbG9jYXRlLCBnb2xkXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgVkFMVUVTICggXHJcbiAgICAgICAgICAgICAgICA6c2F2ZV9pZCwgOnVuaXFfaWQsIDpuYW1lLCA6bG9jYXRlLCA6Z29sZFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IGogPSB0ZWFtLmVuY29kZSgpO1xyXG4vL2NvbnNvbGUuZXJyb3IoYCR7c2F2ZV9pZH0sICR7ai51bmlxX2lkfSwgJHtqLm5hbWV9LCAke0pTT04uc3RyaW5naWZ5KGoubG9jYXRlKX0sICR7SlNPTi5zdHJpbmdpZnkoai5nb2xkKX1gKTtcclxuICAgICAgICBhd2FpdCBkYl9tYWkucXVlcnkoaW5zZXJ0X3RlYW1fU1FMLCB7XHJcbiAgICAgICAgICAgIHNhdmVfaWQgOiBzYXZlX2lkLCAgXHJcbiAgICAgICAgICAgIHVuaXFfaWQgOiBqLnVuaXFfaWQsIFxyXG4gICAgICAgICAgICBuYW1lICAgIDogai5uYW1lLCBcclxuICAgICAgICAgICAgbG9jYXRlICA6IEpTT04uc3RyaW5naWZ5KGoubG9jYXRlKSwgXHJcbiAgICAgICAgICAgIGdvbGQgICAgOiBqLmdvbGQsICBcclxuLy8gICAgICAgICAgICBnb29kcyAgIDogSlNPTi5zdHJpbmdpZnkoai5nb29kcyksICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDY6ICR7aW5zZXJ0X3RlYW1fU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gQ19UZWFtUkRCLmxhc3RJbnNlcnQoZGJfbWFpLCBtZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRibF90ZWFt44Gn5pyA5b6M44Gr6L+95Yqg44GX44Gf6KGM55Wq5Y+3KHNhdmVfaWQp44KS6L+U44GZ44CQMeihjOaMv+WFpeWwgueUqOOAkVxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBsYXN0SW5zZXJ0KGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UpIDogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBjb25zdCBsYXN0SW5zZXJ0X1NRTCA9YFxyXG4gICAgICAgICAgICBTRUxFQ1QgTEFTVF9JTlNFUlRfSUQoKSBhcyBpZCBGUk9NIHRibF90ZWFtO1xyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haS5xdWVyeTxJX2xhc3RJbnNlcnRbXT4obGFzdEluc2VydF9TUUwpXHJcbiAgICAgICAgLmNhdGNoICgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCA1MDA6ICR7bGFzdEluc2VydF9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlY29yZFNldC5sZW5ndGggPCAxKSByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIHJlY29yZFNldFswXS5pZDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gRELlh6bnkIYo44Kv44Op44K544O744Oh44K944OD44OJKeOAglRlYW3jgq/jg6njgrnjga7phY3liJfjgpLlj5fjgZHlj5bjgaPjgabjgIFcclxuICAgIC8vIOaMh+WumuOBleOCjOOBn3NhdmVfaWTjgafjgIB0ZWFt44OG44O844OW44Or44Gr6L+95YqgKGluc2VydCnjgZfjgaZcclxuICAgIC8vIOOBneOBrklEKGlkKeOBrumFjeWIl+OCkui/lOOBmVxyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGFkZF90YmxfYWxsKFxyXG4gICAgICAgIGRiX21haTogICAgIGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgIG1lczogICAgICAgIENfRHNwTWVzc2FnZSwgXHJcbiAgICAgICAgc2F2ZV9pZDogICAgbnVtYmVyLFxyXG4gICAgICAgIHRlYW1fYXJyYXk6IENfVGVhbVtdLCBcclxuICAgICk6IFByb21pc2U8bnVtYmVyW10+IFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHRlYW1faWRfc2V0ID0gW10gYXMgbnVtYmVyW107XHJcbiAgICAgICAgZm9yIChjb25zdCB0ZWFtIG9mIHRlYW1fYXJyYXkpIHtcclxuICAgICAgICAgICAgY29uc3QgdGVhbV9pZCA9IGF3YWl0IENfVGVhbVJEQi5hZGRfdGJsKGRiX21haSwgbWVzLCBzYXZlX2lkLCB0ZWFtKTtcclxuICAgICAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICB0ZWFtX2lkX3NldC5wdXNoKHRlYW1faWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVhbV9pZF9zZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZlX2lk44Gn5oyH5a6a44GV44KM44Gf44Os44Kz44O844OJKOikh+aVsCnjgpLliYrpmaQoZGVsZXRlKeOBmeOCi1xyXG4gICAgLy8gXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGRlbF90YmwoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlX3RlYW1fU1FMID0gYFxyXG4gICAgICAgICAgICBERUxFVEUgRlJPTSB0YmxfdGVhbSBcclxuICAgICAgICAgICAgV0hFUkUgIHNhdmVfaWQgPSA6c2F2ZV9pZFxyXG4gICAgICAgIGBcclxuICAgICAgICBhd2FpdCBkYl9tYWkucXVlcnkoZGVsZXRlX3RlYW1fU1FMLCB7c2F2ZV9pZCA6IHNhdmVfaWQsfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAxNTogJHtkZWxldGVfdGVhbV9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdBcnJheV90b19KU09OKGo6IElfdGJsX3RlYW0pOiBKU09OX1RlYW0ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgIGouaWQsXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6IGouc2F2ZV9pZCxcclxuICAgICAgICAgICAgdW5pcV9pZDogai51bmlxX2lkLFxyXG4gICAgICAgICAgICBuYW1lOiAgICBqLm5hbWUsXHJcbiAgICAgICAgICAgIGxvY2F0ZTogIEpTT04ucGFyc2Uoai5sb2NhdGUpLFxyXG4gICAgICAgICAgICBnb2xkOiAgICBqLmdvbGQsXHJcbi8vICAgICAgICAgICAgZ29vZHM6ICAgSlNPTi5wYXJzZShqLmdvb2RzKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIOeUu+mdouihqOekuueUqOODoeODg+OCu+ODvOOCuCjpgJrluLjnlKjjgajjgqjjg6njg7znlKgp44Gu44Kr44OX44K744Or5YyWXHJcbmV4cG9ydCBjbGFzcyBDX0RzcE1lc3NhZ2Uge1xyXG4gICAgcHJpdmF0ZSBpc0hUTUw6IGJvb2xlYW47ICAgICAgIC8vIOihqOekuuWFiOOBjEhUTUzjgYsodHJ1ZSnjgIHjgrPjg7Pjgr3jg7zjg6vjgYsoZmFsc2Up44Gu5oyH5a6aXHJcbiAgICBwcml2YXRlIG5vcl9tZXNzYWdlOiBzdHJpbmdbXTsgLy8g6YCa5bi444Gu44Oh44OD44K744O844K444KS5qC857SN44GZ44KL5paH5a2X5YiX6YWN5YiXXHJcbiAgICBwcml2YXRlIGVycl9tZXNzYWdlOiBzdHJpbmdbXTsgLy8g44Ko44Op44O844Oh44OD44K744O844K444KS5qC857SN44GZ44KL5paH5a2X5YiX6YWN5YiXXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGlzSFRNTDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5pc0hUTUwgICAgICA9IGlzSFRNTDtcclxuICAgICAgICB0aGlzLm5vcl9tZXNzYWdlID0gW107XHJcbiAgICAgICAgdGhpcy5lcnJfbWVzc2FnZSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRfbm9yX21lc3NhZ2UobXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vcl9tZXNzYWdlLnB1c2gobXNnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldF9lcnJfbWVzc2FnZShtc2c6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXJyX21lc3NhZ2UucHVzaChtc2cpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcGxheV9ub3JfbWVzc2FnZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5ub3JfbWVzc2FnZS5sZW5ndGggPCAxKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzSFRNTCkge1xyXG4gICAgICAgICAgICBsZXQgYWxsX21zZyA9IFwiPHAgY2xhc3M9J25vcm1hbF9tZXNzYWdlJz5cXG5cIjtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBtc2cgb2YgdGhpcy5ub3JfbWVzc2FnZSkgYWxsX21zZyArPSBgJHttc2d9PC9icj5cXG5gO1xyXG4gICAgICAgICAgICBhbGxfbXNnICs9ICBcIjwvcD5cXG5cIjtcclxuICAgICAgICAgICAgYWxlcnQoYWxsX21zZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBtc2cgb2YgdGhpcy5ub3JfbWVzc2FnZSkgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwbGF5X2Vycl9tZXNzYWdlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmVycl9tZXNzYWdlLmxlbmd0aCA8IDEpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNIVE1MKSB7XHJcbiAgICAgICAgICAgIGxldCBhbGxfbXNnID0gXCI8cCBjbGFzcz0nZXJyb3JfbWVzc2FnZSc+XFxuXCI7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXNnIG9mIHRoaXMuZXJyX21lc3NhZ2UpIGFsbF9tc2cgKz0gYCR7bXNnfTwvYnI+XFxuYDtcclxuICAgICAgICAgICAgYWxsX21zZyArPSAgXCI8L3A+XFxuXCI7XHJcbiAgICAgICAgICAgIGFsZXJ0KGFsbF9tc2cpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJcXG5cXG5cXG4jIyNcXG4jIyMgRVJST1IgT2NjdWVyZC5cXG4jIyNcXG5cIik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXNnIG9mIHRoaXMuZXJyX21lc3NhZ2UpIGNvbnNvbGUuZXJyb3IoYCMjIyAke21zZ31gKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIiMjI1xcblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIHBkb19lcnJvcihlOiBhbnksIGVycm1zZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZWNvZGUgPSBlPy5nZXRDb2RlKCkgICAgPz8gJzk5OTk5JztcclxuICAgICAgICBjb25zdCBlbWVzcyA9IGU/LmdldE1lc3NhZ2UoKSA/PyAnPz8/JztcclxuICAgICAgICB0aGlzLnNldF9lcnJfbWVzc2FnZShlcnJtc2cpO1xyXG4gICAgICAgIHRoaXMuc2V0X2Vycl9tZXNzYWdlKGBjb2RlOiAke2Vjb2RlfWApO1xyXG4gICAgICAgIHRoaXMuc2V0X2Vycl9tZXNzYWdlKGBtZXNzYWdlOiAke2VtZXNzfWApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldF9ub3JfbWVzc2FnZXMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy5ub3JfbWVzc2FnZV07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X2Vycl9tZXNzYWdlcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLmVycl9tZXNzYWdlXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNfZXJyKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAgdGhpcy5lcnJfbWVzc2FnZS5sZW5ndGggIT09IDA7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8g5pWw5YCk44OB44Kn44OD44KvXHJcbmV4cG9ydCBmdW5jdGlvbiBfaXNOdW0obnVtVmFsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIC8vIOODgeOCp+ODg+OCr+adoeS7tuODkeOCv+ODvOODs1xyXG4gICAgY29uc3QgcGF0dGVybiA9IC9eWy0rXT8oWzEtOV1cXGQqfDApKFxcLlxcZCspPyQvO1xyXG4gICAgLy8g5pWw5YCk44OB44Kn44OD44KvXHJcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KG51bVZhbCk7XHJcbn1cclxuXHJcbi8vIOaVsOWApOWPluOCiuWHuuOBl1xyXG5leHBvcnQgZnVuY3Rpb24gX2dldE51bShudW1WYWw6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAvLyDjg4Hjgqfjg4Pjgq/mnaHku7bjg5Hjgr/jg7zjg7NcclxuLy8gICAgY29uc3QgcGF0dGVybiA9IC9bLV0/KFsxLTldXFxkKnwwKShcXC5cXGQrKT8vO1xyXG4gICAgY29uc3QgcGF0dGVybiA9IC8oW14wLTldKS9nO1xyXG4gICAgY29uc3QgdmFsc3RyICA9IG51bVZhbC5yZXBsYWNlKHBhdHRlcm4sJycpO1xyXG4gICAgLy8g5pWw5YCk44OB44Kn44OD44KvXHJcbiAgICByZXR1cm4gTnVtYmVyKHZhbHN0cik7XHJcbn1cclxuXHJcbi8vIOWbm+aNqOS6lOWFpVxyXG5leHBvcnQgZnVuY3Rpb24gX3JvdW5kKG51bTogbnVtYmVyLCBkaWdpdDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IG11bHRpcGxpZXIgPSBNYXRoLnBvdygxMCwgZGlnaXQpO1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogbXVsdGlwbGllcikgLyBtdWx0aXBsaWVyO1xyXG59XHJcblxyXG4vLyDliIfjgorkuIrjgZJcclxuZXhwb3J0IGZ1bmN0aW9uIF9jZWlsKG51bTogbnVtYmVyLCBkaWdpdDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IG11bHRpcGxpZXIgPSBNYXRoLnBvdygxMCwgZGlnaXQpO1xyXG4gICAgcmV0dXJuIE1hdGguY2VpbChudW0gKiBtdWx0aXBsaWVyKSAvIG11bHRpcGxpZXI7XHJcbn1cclxuXHJcblxyXG4vLyDliIfjgorkuIvjgZJcclxuZXhwb3J0IGZ1bmN0aW9uIF9mbG9vcihudW06IG51bWJlciwgZGlnaXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBtdWx0aXBsaWVyID0gTWF0aC5wb3coMTAsIGRpZ2l0KTtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKG51bSAqIG11bHRpcGxpZXIpIC8gbXVsdGlwbGllcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfbWluKGE6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBhLnJlZHVjZSgobjE6IG51bWJlciwgbjI6IG51bWJlcikgPT4gTWF0aC5taW4objEsIG4yKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfbWF4KGE6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBhLnJlZHVjZSgobjE6IG51bWJlciwgbjI6IG51bWJlcikgPT4gTWF0aC5tYXgobjEsIG4yKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX21heCwgX21pbiwgX3JvdW5kIH0gZnJvbSBcIi4vRl9NYXRoXCI7XHJcblxyXG4vLyDkubHmlbDplqLmlbDlkbzjgbPlh7rjgZfnlKjjga7lnovlrqPoqIBcclxudHlwZSBUX2ZyYW5kID0gKCk9Pm51bWJlclxyXG5jb25zdCBmcmFuZDogVF9mcmFuZCA9ICAoKT0+e3JldHVybiBNYXRoLnJhbmRvbSgpfVxyXG5cclxuLy8g5LiA5qeY5Lmx5pWwKOaVtOaVsClcclxuZXhwb3J0IGZ1bmN0aW9uIF9pcmFuZChtaW46IG51bWJlciA9IDAsIG1heDogbnVtYmVyID0gMSwgcmFuZDogVF9mcmFuZCA9IGZyYW5kKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGZfcmFuZCA9IE1hdGguZmxvb3IocmFuZCgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICAgIHJldHVybiBfcm91bmQoZl9yYW5kLCAwKTtcclxufVxyXG5cclxuLy8g5q2j6KaP5YiG5biD44KC44Gp44GN5Lmx5pWwKOaVtOaVsClcclxuZXhwb3J0IGZ1bmN0aW9uIF9pZ3JhbmQobWluOiBudW1iZXIgPSAwLCBtYXg6IG51bWJlciA9IDEsIHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gX2lyYW5kKG1pbiwgbWF4LCAoKT0+e3JldHVybiBfZ3JhbmQoMCwgMSwgcmFuZCl9KVxyXG59XHJcblxyXG4vLyDmraPopo/liIbluIPjgoLjganjgY3kubHmlbAo5a6f5pWwKVxyXG5leHBvcnQgZnVuY3Rpb24gX2dyYW5kKG1pbjogbnVtYmVyID0gMCwgbWF4OiBudW1iZXIgPSAxLCByYW5kOiBUX2ZyYW5kID0gZnJhbmQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoX19fZ2F1c3NpYW5SYW5kKHJhbmQpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxufVxyXG5mdW5jdGlvbiBfX19nYXVzc2lhblJhbmQocmFuZDogVF9mcmFuZCA9IGZyYW5kKSB7XHJcbiAgICBsZXQgc3VtID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSArPSAxKSB7XHJcbiAgICAgICAgc3VtICs9IHJhbmQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdW0gLyA2O1xyXG59XHJcblxyXG4vLyDlsJHjgZfnnJ/pnaLnm67jgarmraPopo/liIbluIPkubHmlbAo5pW05pWwKVxyXG5leHBvcnQgZnVuY3Rpb24gX2lucmFuZChtaW46IG51bWJlciA9IDAsIG1heDogbnVtYmVyID0gMSwgZGQ6IG51bWJlciA9IDMuMCwgcmFuZDogVF9mcmFuZCA9IGZyYW5kKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKF9ucmFuZChtaW4sIG1heCwgZGQsIHJhbmQpKTtcclxufVxyXG5cclxuLy8g5bCR44GX55yf6Z2i55uu44Gq5q2j6KaP5YiG5biD5Lmx5pWwKOWun+aVsClcclxuLy8g5LiA5qeY56K6546H5aSJ5pWwYSxi44KS5aSJ5pWw6Zai5pWw44KS55So44GE44GmIHg9ZihhLGIpLCB5PWcoYSxiKeOBqOOBl+OBpjLjgaTjga7mraPopo/liIbluIPkubHmlbB4LHnjgpLlvpfjgotcclxuLy8geCA9IGYoYSxiKSA9IHNxcnQoLTIqbG9nKGEpKSAqIHNpbigyKs+AKmIpIFxyXG4vLyB5ID0gZyhhLGIpID0gc3FydCgtMipsb2coYSkpICogY29zKDIqz4AqYikgXHJcbmV4cG9ydCBmdW5jdGlvbiBfbnJhbmQobWluOiBudW1iZXIgPSAwLjAsIG1heDogbnVtYmVyID0gMS4wLCBkZDogbnVtYmVyID0gMy4wLCByYW5kOiBUX2ZyYW5kID0gZnJhbmQpOiBudW1iZXIge1xyXG4gICAgY29uc3QgYXZlID0gMC41O1xyXG4gICAgY29uc3QgYSA9IHJhbmQoKTtcclxuICAgIGNvbnN0IGIgPSByYW5kKCk7XHJcbiAgICBsZXQgeCA9IGF2ZSArIF9mYWIoYSwgYikgLyAoMi4wICogZGQpOyAvLyDjgZPjgZPjgb7jgafjgIFOKDAsMSnjga7mraPopo/liIbluIPkubHmlbDjga7kvZzmiJBcclxuXHJcbiAgICB4ID0gbWluICsgeCAqIChtYXggLSBtaW4pO1xyXG4gICAgeCA9IF9tYXgoW21pbiwgeF0pO1xyXG4gICAgeCA9IF9taW4oW21heCwgeF0pO1xyXG4gICAgcmV0dXJuIHg7XHJcbn1cclxuZnVuY3Rpb24gX2ZhYihhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KC0yLjAgKiBNYXRoLmxvZyhhKSkgKiBNYXRoLnNpbigyLjAgKiBNYXRoLlBJICogYik7XHJcbn1cclxuZnVuY3Rpb24gX2dhYihhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KC0yLjAgKiBNYXRoLmxvZyhhKSkgKiBNYXRoLmNvcygyLjAgKiBNYXRoLlBJICogYik7XHJcbn1cclxuXHJcblxyXG4vLyDjgrfjg7zjg4nlgKTjgpLnlKjjgYTjgZ/kubHmlbBcclxuZXhwb3J0IGNsYXNzIENfU2VlZGVkUmFuZCB7XHJcbiAgICBwcm90ZWN0ZWQgc2VlZDogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIGZpcnN0X3NlZWQ6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc2VlZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZWVkID0gc2VlZDtcclxuICAgICAgICB0aGlzLmZpcnN0X3NlZWQgPSBzZWVkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuc2VlZCA9IHRoaXMuZmlyc3Rfc2VlZDtcclxuICAgIH1cclxuICAgIC8vIOS5seaVsOeUn+aIkOODoeOCveODg+ODiVxyXG4gICAgcHVibGljIHJhbmRvbSgpOiBudW1iZXIge1xyXG4gICAgICAgIHRoaXMuc2VlZCA9ICh0aGlzLnNlZWQgKiA5MzAxICsgNDkyOTcpICUgMjMzMjgwO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlZWQgLyAyMzMyODAuMDtcclxuICAgIH1cclxufVxyXG5cclxuLy/jg6bjg4vjg7zjgq9JRCh1dWlkKeOBrueUn+aIkFxyXG5leHBvcnQgZnVuY3Rpb24gX2dldF91dWlkKGxlbjogbnVtYmVyID0gMjAsIHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBsZnQgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpLnRvU3RyaW5nKDE2KTsgLy8g44Gf44G244KTMTPmoYFcclxuICAgIGNvbnN0IHJndF9sZW4gPSBfbWF4KFtsZW4gLSBsZnQubGVuZ3RoLCAxXSk7XHJcblxyXG4gICAgY29uc3Qgcmd0ID0gTWF0aC5mbG9vcihNYXRoLnBvdygxMCwgcmd0X2xlbikgKiByYW5kKCkpLnRvU3RyaW5nKDE2KTtcclxuICAgIHJldHVybiBsZnQgKyByZ3Q7XHJcbn1cclxuXHJcbi8vIOeiuueOh+OBq+WfuuOBpeOBj+imgee0oOmBuOaKnlxyXG5leHBvcnQgdHlwZSBUX1NlbGVjdEl0ZW0gPSB7XHJcbiAgICByYXRpbzogbnVtYmVyLFxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBfc2VsZWN0SXRlbShpdGVtczogVF9TZWxlY3RJdGVtW10sIHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCk6IFRfU2VsZWN0SXRlbSB8IHVuZGVmaW5lZCB7XHJcbiAgICB2YXIgdHRsOm51bWJlciA9IDA7XHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zKSB0dGwgKz0gaXRlbS5yYXRpbztcclxuXHJcbiAgICBjb25zdCB0YXJnZXQgPSBfaXJhbmQoMCwgdHRsLCByYW5kKTtcclxuICAgIHZhciBzdW0gPSAwO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgICAgc3VtICs9IGl0ZW0ucmF0aW87XHJcbiAgICAgICAgaWYgKHRhcmdldCA8IHN1bSkge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8vIOmFjeWIl+OBruOCt+ODo+ODg+ODleODq1xyXG5leHBvcnQgZnVuY3Rpb24gX3NodWZmbGVBcnJheTxUPihhcnJheTogVFtdLCByYW5kOiBUX2ZyYW5kID0gZnJhbmQpOiBUW10ge1xyXG4gICAgbGV0IHNodWZmbGVkQXJyYXkgPSBbLi4uYXJyYXldOyAvLyDlhYPjga7phY3liJfjgpLlpInmm7TjgZfjgarjgYTjgojjgYbjgavjgrPjg5Tjg7zjgZnjgotcclxuICAgIGZvciAobGV0IGkgPSBzaHVmZmxlZEFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICAvLyDjg6njg7Pjg4Djg6DjgarkvY3nva7jgpLmsbrlrppcclxuICAgICAgICBjb25zdCBqID0gX2lyYW5kKDAsIGksIHJhbmQpO1xyXG4gICAgICAgIC8vIOimgee0oOOBruWFpeOCjOabv+OBiFxyXG4gICAgICAgIFtzaHVmZmxlZEFycmF5W2ldLCBzaHVmZmxlZEFycmF5W2pdXSA9IFtzaHVmZmxlZEFycmF5W2pdLCBzaHVmZmxlZEFycmF5W2ldXTtcclxuICAgIH1cclxuICAgIHJldHVybiBzaHVmZmxlZEFycmF5OyAvLyDjgrfjg6Pjg4Pjg5Xjg6vjgZXjgozjgZ/phY3liJfjgpLov5TjgZlcclxufVxyXG5cclxuLy8g5Lmx5pWw44Gr44KI44KL5paH5a2X5YiX55Sf5oiQXHJcbmV4cG9ydCBmdW5jdGlvbiBfcmFuZG9tX3N0cihsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZXQgc3RyID0gJyc7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBsZW5ndGg7IGkrKykgc3RyICs9IF9yYW5kb21fQ2hhcigpO1xyXG4gICAgcmV0dXJuIHN0cjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gX3JhbmRvbV9VcHBlclN0cihsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZXQgc3RyID0gJyc7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBsZW5ndGg7IGkrKykgc3RyICs9IF9yYW5kb21fVXBwZXJDaGFyKCk7XHJcbiAgICByZXR1cm4gc3RyO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBfcmFuZG9tX0xvd2VyU3RyKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGxldCBzdHIgPSAnJztcclxuICAgIGZvciAobGV0IGk9MDsgaSA8IGxlbmd0aDsgaSsrKSBzdHIgKz0gX3JhbmRvbV9Mb3dlckNoYXIoKTtcclxuICAgIHJldHVybiBzdHI7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fVXBwZXJDaGFyKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB2YWwgPSBfaXJhbmQoMCwyNilcclxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1K3ZhbCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fTG93ZXJDaGFyKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB2YWwgPSBfaXJhbmQoMCwyNilcclxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDk1K3ZhbCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fTnVtQ2hhcigpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdmFsID0gX2lyYW5kKDAsOSlcclxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDQ4K3ZhbCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fQ2hhcigpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdmFsID0gX2lyYW5kKDAsNjEpXHJcbiAgICBpZiAodmFsIDwgMjYpIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1K3ZhbCk7XHJcbiAgICBpZiAodmFsIDwgNTIpIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDk3K3ZhbC0yNik7XHJcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg0OCt2YWwtNTIpO1xyXG59XHJcbiIsImltcG9ydCBleHByZXNzICAgICAgZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IGNyZWF0ZUVycm9yICBmcm9tICdodHRwLWVycm9ycyc7XHJcbmltcG9ydCBwYXRoICAgICAgICAgZnJvbSBcInBhdGhcIjtcclxuXHJcbnZhciB1c2Vyc1JvdXRlciA9IHJlcXVpcmUoJy4vcm91dGVzL3VzZXJzJyk7XHJcbnZhciBtYWlleFJvdXRlciA9IHJlcXVpcmUoJy4vcm91dGVzL21haWV4Jyk7XHJcblxyXG52YXIgY29va2llUGFyc2VyID0gcmVxdWlyZSgnY29va2llLXBhcnNlcicpO1xyXG52YXIgbG9nZ2VyID0gcmVxdWlyZSgnbW9yZ2FuJyk7XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG4vLyB2aWV3IGVuZ2luZSBzZXR1cFxyXG5hcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihfX2Rpcm5hbWUsICd2aWV3cycpKTtcclxuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnZWpzJyk7XHJcblxyXG5hcHAudXNlKGxvZ2dlcignZGV2JykpO1xyXG5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcclxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAncHVibGljJykpKTtcclxuXHJcbi8vYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbi8vYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcclxuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XHJcblxyXG5jb25zdCByb290Um91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxucm9vdFJvdXRlci5nZXQoXHJcbiAgXCIvXCIsXHJcbiAgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIHJlcy5zZW5kKFwiV2VsY29tZSB0byB0aGUgTWFpIHdvcmxkISA6LSlcIik7XHJcbiAgfVxyXG4pO1xyXG5hcHAudXNlKFwiL1wiLCAgICAgIHJvb3RSb3V0ZXIpO1xyXG5hcHAudXNlKFwiL3VzZXJzXCIsIHVzZXJzUm91dGVyKTtcclxuYXBwLnVzZShcIi9tYWlleFwiLCBtYWlleFJvdXRlcik7XHJcblxyXG4vLyBjYXRjaCA0MDQgYW5kIGZvcndhcmQgdG8gZXJyb3IgaGFuZGxlclxyXG5hcHAudXNlKGZ1bmN0aW9uKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSB7XHJcbiAgbmV4dChjcmVhdGVFcnJvcig0MDQpKTtcclxufSk7XHJcblxyXG4vLyBlcnJvciBoYW5kbGVyXHJcbmFwcC51c2UoZnVuY3Rpb24oZXJyOiBhbnksIHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSB7XHJcbiAgLy8gc2V0IGxvY2Fscywgb25seSBwcm92aWRpbmcgZXJyb3IgaW4gZGV2ZWxvcG1lbnRcclxuICByZXMubG9jYWxzLm1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcclxuICByZXMubG9jYWxzLmVycm9yID0gcmVxLmFwcC5nZXQoJ2VudicpID09PSAnZGV2ZWxvcG1lbnQnID8gZXJyIDoge307XHJcblxyXG4gIC8vIHJlbmRlciB0aGUgZXJyb3IgcGFnZVxyXG4gIHJlcy5zdGF0dXMoZXJyLnN0YXR1cyB8fCA1MDApO1xyXG4gIHJlcy5yZW5kZXIoJ2Vycm9yJyk7XHJcbn0pO1xyXG5cclxuY29uc3QgcG9ydCA9IG5vcm1hbGl6ZVBvcnQocHJvY2Vzcy5lbnYuUE9SVCB8fCAnMzAwMCcpO1xyXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBOb3JtYWxpemUgYSBwb3J0IGludG8gYSBudW1iZXIsIHN0cmluZywgb3IgZmFsc2UuXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplUG9ydCh2YWw6IGFueSkge1xyXG4gIHZhciBwb3J0ID0gcGFyc2VJbnQodmFsLCAxMCk7XHJcblxyXG4gIGlmIChpc05hTihwb3J0KSkge1xyXG4gICAgLy8gbmFtZWQgcGlwZVxyXG4gICAgcmV0dXJuIHZhbDtcclxuICB9XHJcblxyXG4gIGlmIChwb3J0ID49IDApIHtcclxuICAgIC8vIHBvcnQgbnVtYmVyXHJcbiAgICByZXR1cm4gcG9ydDtcclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwO1xyXG4iLCJcclxuY29uc3QgZGJfaG9zdCA9ICdzcWwnO1xyXG4vLyDliKnnlKjjgq/jg6njgrnnrYnjga7oqq3jgb/ovrzjgb9cclxuXHJcbi8vIOOCqOODqeODvOODoeODg+OCu+ODvOOCuOetieOCkuS/neWtmOODu+ihqOekuuOBmeOCi+OCr+ODqeOCuVxyXG5pbXBvcnQge0NfRHNwTWVzc2FnZSB9ICAgICBmcm9tICcuLi8uLi8uLi9tYWljbC9zcmMvZF91dGwvQ19Ec3BNZXNzYWdlJztcclxuXHJcbi8vIOS9jee9ruOBqOaWueWQkeOCkuihqOOBmeOCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX1BvaW50RGlyIH0gICAgICBmcm9tICcuLi8uLi8uLi9tYWljbC9zcmMvZF9tZGwvQ19Qb2ludERpcic7XHJcblxyXG4vLyDmu57lnKjkvY3nva7jgpLnpLrjgZnjgq/jg6njgrlcclxuaW1wb3J0IHsgQ19Nb3ZhYmxlUG9pbnQgfSAgZnJvbSAnLi4vLi4vLi4vbWFpY2wvc3JjL2RfbWRsL0NfTW92YWJsZVBvaW50JztcclxuXHJcbi8vIOOCruODq+ODieOCr+ODqeOCueWFqOiIrFxyXG5pbXBvcnQge0NfR3VpbGR9ICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9tYWljbC9zcmMvZF9tZGwvQ19HdWlsZCc7XHJcblxyXG4vLyDjg5Hjg7zjg4bjgqPjg7zjgq/jg6njgrnlhajoiKxcclxuaW1wb3J0IHtDX1RlYW19ICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbWFpY2wvc3JjL2RfbWRsL0NfVGVhbSc7XHJcblxyXG4vLyDjg5Ljg7zjg63jg7zjgq/jg6njgrnlhajoiKxcclxuaW1wb3J0IHtDX0hlcm8sIEpTT05fSGVyb30gZnJvbSAgJy4uLy4uLy4uL21haWNsL3NyYy9kX21kbC9DX0hlcm8nO1xyXG5cclxuLy8g44K744O844OW44OH44O844K/KOOCr+ODqeOCpOOCouODs+ODiOOBqOOBrumAo+aQuinlhajoiKxcclxuaW1wb3J0IHtDX1NhdmVEYXRhLCBKU09OX1NhdmVEYXRhfSBmcm9tICcuLi8uLi8uLi9tYWljbC9zcmMvZF9tZGwvQ19TYXZlRGF0YSc7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Li744CA5Yem44CA55CGICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbnRlcmZhY2UgSV9HbG9iYWxBcmd1bWVudHMge1xyXG4gICAgbW9kZT86IHN0cmluZztcclxuICAgIG5tYnI/OiBudW1iZXI7XHJcbiAgICBwaWQ/OiAgbnVtYmVyO1xyXG4gICAgaHJlc19KU09OPzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSV9SZXR1cm4ge1xyXG4gICAgZWNvZGU6IG51bWJlcjtcclxuICAgIGVtc2c6ICBzdHJpbmc7XHJcbiAgICBzYXZlPzogSlNPTl9TYXZlRGF0YTtcclxuICAgIGRhdGE/OiB7XHJcbiAgICAgICAgaHJlczpKU09OX0hlcm9bXTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gR2V0dGluZyBOZXcgR2FtZSBzdGFydGlpbmcgZnJvbSBHdWxkXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXdHdWxkKGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBJX1JldHVybiB7XHJcbiAgICBpbml0KGFyZyk7XHJcbiAgICBjb25zdCAgZ3VsZCA9IG5ld19ndWxkKCk7XHJcbiAgICBjb25zdCAgdGVhbSA9IG5ld190ZWFtKGd1bGQpO1xyXG4gICAgY29uc3QgIHNhdmUgPSBuZXdfc2F2ZShndWxkLCB0ZWFtKTtcclxuICAgIHJldHVybiBzYXZlX2VuY29kZSgwLCBzYXZlKTtcclxufVxyXG5cclxuLy8gR2V0dGluZyBBbnkgTmV3IEhlb3JlcyBkYXRhXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGxIcmVzKGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBJX1JldHVybiB7XHJcbiAgICBpbml0KGFyZyk7XHJcbiAgICBjb25zdCAgaHJlcyA9IG5ld19ocmVzKCk7XHJcbiAgICByZXR1cm4gaHJlc19lbmNvZGUoMCwgIGhyZXMpO1xyXG59XHJcblxyXG4gXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vICAg44K144OW44Or44O844OB44OzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmZ1bmN0aW9uIGVycl9lbmNvZGUoY29kZTogbnVtYmVyLCBtc2dzOiBzdHJpbmdbXSk6IElfUmV0dXJuIHtcclxuICAgIGNvbnN0IHJldF9hc3NvYzogSV9SZXR1cm4gPSB7ZWNvZGU6Y29kZSwgZW1zZzogJyd9O1xyXG4gICAgZm9yIChjb25zdCBtc2cgb2YgbXNncykgcmV0X2Fzc29jLmVtc2cgKz0gbXNnOyBcclxuICAgIHJldHVybiByZXRfYXNzb2M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVfZW5jb2RlKGNvZGU6IG51bWJlciwgc2F2ZTogQ19TYXZlRGF0YSk6IElfUmV0dXJuIHtcclxuICAgIGNvbnN0IHJldF9hc3NvYzogSV9SZXR1cm4gPSB7ZWNvZGU6MCwgZW1zZzogJyd9O1xyXG5cclxuICAgIGlmIChjb2RlICE9PSAwIHx8IGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIHJldHVybiBlcnJfZW5jb2RlKGNvZGUsIGd2Lm1lcy5nZXRfZXJyX21lc3NhZ2VzKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXRfYXNzb2MuZWNvZGUgPSAwO1xyXG4gICAgICAgIHJldF9hc3NvYy5lbXNnICA9ICdTdGF0dXMgT0snO1xyXG4gICAgICAgIHJldF9hc3NvYy5zYXZlICA9IHNhdmUuZW5jb2RlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJldF9hc3NvYztcclxufVxyXG5cclxuZnVuY3Rpb24gaHJlc19lbmNvZGUoY29kZTogbnVtYmVyLCBocmVzOiBDX0hlcm9bXSk6IElfUmV0dXJuIHtcclxuICAgIGNvbnN0IHJldF9hc3NvYzogSV9SZXR1cm4gPSB7ZWNvZGU6MCwgZW1zZzogJyd9O1xyXG5cclxuICAgIGlmIChjb2RlICE9PSAwIHx8IGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIHJldHVybiBlcnJfZW5jb2RlKGNvZGUsIGd2Lm1lcy5nZXRfZXJyX21lc3NhZ2VzKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXRfYXNzb2MuZWNvZGUgPSAwO1xyXG4gICAgICAgIHJldF9hc3NvYy5lbXNnICA9ICdTdGF0dXMgT0snO1xyXG5cclxuICAgICAgICBjb25zdCBocmVzX2FycmF5OiBKU09OX0hlcm9bXSA9IFtdO1xyXG4gICAgICAgIGZvcihjb25zdCBoZXJvIG9mIGhyZXMpIHtcclxuICAgICAgICAgICAgaHJlc19hcnJheS5wdXNoKGhlcm8uZW5jb2RlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXRfYXNzb2MuZGF0YSAgPSB7aHJlczogaHJlc19hcnJheX07XHJcbiAgICAgICAgcmV0dXJuIHJldF9hc3NvYztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbmV3X2hyZXMoKTogQ19IZXJvW10ge1xyXG4gICAgY29uc3QgaGVyb2VzOiBDX0hlcm9bXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYS5ubWJyOyBpKyspIHtcclxuICAgICAgICBoZXJvZXMucHVzaCgobmV3IENfSGVybygpKS5yYW5kb21fbWFrZSgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBoZXJvZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld19zYXZlKGd1bGQ6IENfR3VpbGQsIHRlYW06IENfVGVhbSk6IENfU2F2ZURhdGEge1xyXG4gICAgcmV0dXJuIG5ldyBDX1NhdmVEYXRhKHtcclxuICAgICAgICBwbGF5ZXJfaWQ6IGdhLnBpZCxcclxuICAgICAgICBhdXRvX21vZGU6ICcwJyxcclxuICAgICAgICBpc19hY3RpdmU6ICcxJyxcclxuICAgICAgICBpc19kZWxldGU6ICcwJyxcclxuXHJcbiAgICAgICAgYWxsX212cHQ6ICAgW10sXHJcbiAgICAgICAgYWxsX21hemU6ICAgW10sXHJcbiAgICAgICAgYWxsX2d1bGQ6ICAgW2d1bGQuZW5jb2RlKCldLCBcclxuICAgICAgICBhbGxfdGVhbTogICBbdGVhbS5lbmNvZGUoKV0sXHJcblxyXG4vL2xvY1xyXG4gICAgICAgIG15cG9zOiAgICAgIHRlYW0uZ2V0X2xvYygpLmVuY29kZSgpLCBcclxufSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld19ndWxkKCk6IENfR3VpbGQge1xyXG4gICAgY29uc3QgZ3VsZCA9IG5ldyBDX0d1aWxkKCk7XHJcbiAgICBndWxkLmRlY29kZSh7bmFtZTogJ+Wni+OBvuOCiuOBruihl+OBruWGkumZuuiAheOCruODq+ODiSd9KTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICBndWxkLmFkZF9oZXJvKChuZXcgQ19IZXJvKCkpLnJhbmRvbV9tYWtlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBndWxkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdfdGVhbShndWxkOiBDX0d1aWxkKTogQ19UZWFtIHtcclxuICAgIGNvbnN0IHRlYW0gPSBuZXcgQ19UZWFtKCk7XHJcbi8vbG9jXHJcbiAgICBjb25zdCBsb2MgPSBuZXcgQ19Nb3ZhYmxlUG9pbnQoKTtcclxuICAgIGxvYy5kZWNvZGUoe1xyXG4gICAgICAgIGtpbmQ6ICAgJ0d1bGQnLFxyXG4gICAgICAgIG5hbWU6ICAgIGd1bGQuZ2V0X25hbWUoKSxcclxuICAgICAgICBsb2NfdWlkOiBndWxkLnVpZCgpLFxyXG4gICAgICAgIGxvY19wb3M6IG5ldyBDX1BvaW50RGlyKHtcclxuICAgICAgICAgICAgJ3gnOiAwLFxyXG4gICAgICAgICAgICAneSc6IDAsXHJcbiAgICAgICAgICAgICd6JzogMCxcclxuICAgICAgICAgICAgJ2QnOiAwLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHRlYW1fdWlkOiB0ZWFtLnVpZCgpLFxyXG4gICAgfSk7XHJcbiAgICB0ZWFtLnNldF9wcnAoe25hbWU6J+OBsuOCiOOBk+OBleOCk+ODgeODvOODoCd9KTtcclxuLy9sb2NcclxuICAgIHRlYW0uc2V0X2xvYyhsb2MpO1xyXG5cclxuICAgIC8vICAgIHRlYW0uc2V0X2xvYygobmV3IENfTW92YWJsZVBvaW50KCkpLmRlY29kZShsb2MuZW5jb2RlKCkpKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTsgaSsrKSB7IFxyXG4gICAgICAgIHRlYW0uYWRkX2hlcm8oKG5ldyBDX0hlcm8oKSkucmFuZG9tX21ha2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRlYW07XHJcbn1cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDliJ3jgIDmnJ/jgIDoqK3jgIDlrpogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmxldCBndjogQ19HbG9iYWxWYXI7XHJcbmxldCBnYTogQ19HbG9iYWxBcmd1bWVudHM7XHJcblxyXG5mdW5jdGlvbiBpbml0KG9iajogSV9HbG9iYWxBcmd1bWVudHMpOiB2b2lkIHtcclxuICAgIGd2ID0gbmV3IENfR2xvYmFsVmFyKCk7XHJcbiAgICBnYSA9IG5ldyBDX0dsb2JhbEFyZ3VtZW50cyhvYmopO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vXHJcbi8vLy8vICAgICDjgq/jg6njgrnlrqPoqIBcclxuLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8g5aSn5Z+f5aSJ5pWw44Gu6Kit5a6aXHJcbmNsYXNzIENfR2xvYmFsVmFyIHtcclxuICAgIHB1YmxpYyBtZXM6IENfRHNwTWVzc2FnZTtcclxuXHJcbiAgICBwdWJsaWMgTWF6ZV9zaXplX3ggPSAyMTtcclxuICAgIHB1YmxpYyBNYXplX3NpemVfeSA9IDIxO1xyXG4gICAgcHVibGljIExpbWl0X29mX3Jvb20gICAgID0gNTtcclxuICAgIHB1YmxpYyBNYXhfc2l6ZV9vZl9yb29tICA9IDM7XHJcbiAgICBwdWJsaWMgTWF4X29mX01hemVfRmxvb3IgPSAzO1xyXG5cclxuICAgIHB1YmxpYyB0ZWFtX2Fzc29jOiBDX1RlYW1bXSAgPSBbXTtcclxuICAgIHB1YmxpYyB0ZWFtOiAgICAgICBDX1RlYW07XHJcbiAgICBwdWJsaWMgZ3VsZF9hc3NvYzogQ19HdWlsZFtdID0gW107XHJcbiAgICBwdWJsaWMgZ3VsZDogICAgICAgQ19HdWlsZDtcclxuICAgIHB1YmxpYyBoZXJvZXM6ICAgICBDX0hlcm9bXSAgPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tZXMgID0gbmV3IENfRHNwTWVzc2FnZSggLyogaXNIVE1MID0gKi8gZmFsc2UpO1xyXG4gICAgICAgIHRoaXMudGVhbSA9IG5ldyBDX1RlYW0oKTtcclxuICAgICAgICB0aGlzLmd1bGQgPSBuZXcgQ19HdWlsZCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBQT1NU5byV5pWw44Gu6Kit5a6aXHJcbmNsYXNzIENfR2xvYmFsQXJndW1lbnRzIHtcclxuICAgIHB1YmxpYyBtb2RlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbm1icjogbnVtYmVyID0gMTtcclxuICAgIHB1YmxpYyBwaWQ6ICBudW1iZXIgPSAxO1xyXG4gICAgcHVibGljIGhyZXNfSlNPTjogc3RyaW5nfHVuZGVmaW5lZCA9ICcnO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvYmo6IElfR2xvYmFsQXJndW1lbnRzfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMubW9kZSA9IG9iaj8ubW9kZSA/PyAndW5rbm93bic7XHJcbiAgICAgICAgdGhpcy5ubWJyID0gb2JqPy5ubWJyICE9PSB1bmRlZmluZWQgJiYgIWlzTmFOKG9iai5ubWJyKSA/IE51bWJlcihvYmoubm1icikgOiAxO1xyXG4gICAgICAgIHRoaXMucGlkICA9IG9iaj8ucGlkICAhPT0gdW5kZWZpbmVkICYmICFpc05hTihvYmoucGlkKSAgPyBOdW1iZXIob2JqLnBpZCkgIDogMTtcclxuICAgICAgICB0aGlzLmhyZXNfSlNPTiA9IG9iaj8uaHJlc19KU09OID8/IHVuZGVmaW5lZDtcclxuLy9kZWJ1ZyAgICAgICAgY29uc29sZS5sb2coYG1vZGU9JHt0aGlzLm1vZGV9LCBubWJyPSR7dGhpcy5ubWJyfSwgcGlkID0gJHt0aGlzLnBpZH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuLypcclxubW9kdWxlLmV4cG9ydHMgPSBuZXdHYW1lO1xyXG5tb2R1bGUuZXhwb3J0cyA9IG5ld0hlcm87XHJcbiovIiwiLy8g5Yip55So44Kv44Op44K5562J44Gu6Kqt44G/6L6844G/XHJcblxyXG4vLyDjgqjjg6njg7zjg6Hjg4Pjgrvjg7zjgrjnrYnjgpLkv53lrZjjg7vooajnpLrjgZnjgovjgq/jg6njgrlcclxuaW1wb3J0IHsgQ19Ec3BNZXNzYWdlIH0gZnJvbSAnLi4vLi4vLi4vbWFpY2wvc3JjL2RfdXRsL0NfRHNwTWVzc2FnZSc7XHJcblxyXG4vLyBNeVNxbOOCkuaJseOBhuOCr+ODqeOCuVxyXG5pbXBvcnQgbXlzcWwgICAgICAgICAgICBmcm9tIFwibXlzcWwyL3Byb21pc2VcIjtcclxuXHJcbi8vIFNhdmUvTG9hZOmWouS/guOCr+ODqeOCueWFqOiIrFxyXG5pbXBvcnQgeyBDX1NhdmVJbmZvLCBKU09OX1NhdmVJbmZvIH0gICAgZnJvbSAnLi4vLi4vLi4vbWFpY2wvc3JjL2RfbWRsL0NfU2F2ZUluZm8nO1xyXG5pbXBvcnQgeyBDX1NhdmVEYXRhLCBKU09OX1NhdmVEYXRhIH0gICAgZnJvbSAnLi4vLi4vLi4vbWFpY2wvc3JjL2RfbWRsL0NfU2F2ZURhdGEnO1xyXG5pbXBvcnQgeyBDX1NhdmVEYXRhUkRCLCBDX1NhdmVJbmZvUkRCIH0gZnJvbSAnLi4vLi4vLi4vbWFpY2wvc3JjL2RfcmRiL0NfU2F2ZURhdGFSREInO1xyXG5cclxudHlwZSBkYl9jb25uZWN0ID0gbXlzcWwuUG9vbENvbm5lY3Rpb247XHJcbmxldCAgZGJfbWFpOiBkYl9jb25uZWN0O1xyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDkuLvjgIDlh6bjgIDnkIYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmludGVyZmFjZSBJX1JldHVybiB7XHJcbiAgICBlY29kZTogICAgICBudW1iZXI7XHJcbiAgICBlbXNnOiAgICAgICBzdHJpbmc7XHJcbiAgICBzYXZlX2luZm8/OiBKU09OX1NhdmVJbmZvW107XHJcbiAgICBzYXZlPzogICAgICBKU09OX1NhdmVEYXRhO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluZm8oYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGF3YWl0IGluaXQoYXJnKTtcclxuXHJcbiAgICBsZXQgICByZXRfdmFsOiBJX1JldHVybjtcclxuICAgIGNvbnN0IHNhdmVfYXJyYXkgPSBhd2FpdCBDX1NhdmVJbmZvUkRCLmdldF9saXN0X2J5X3BpZChkYl9tYWksIGd2Lm1lcywgZ2EucGlkKTtcclxuICAgIGlmIChndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICByZXRfdmFsID0gZXJyX2VuY29kZSg1MDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXRfdmFsID0gYWxsX3NhdmVfaW5mbygwLCBzYXZlX2FycmF5KTtcclxuICAgIH1cclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcblxyXG4vKlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdG1wX2xvYWQoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfbG9hZChnYS5waWQsIDEwMCwgMzMwKTtcclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnN0YW50X2xvYWQoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfbG9hZChnYS5waWQsIDEwMSwgMzEwKTtcclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBVRF9sb2FkKGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBQcm9taXNlPElfUmV0dXJuPiB7XHJcbiAgICBpbml0KGFyZyk7XHJcbiAgICBjb25zdCByZXRfdmFsID0gYXdhaXQgX2xvYWQoZ2EucGlkLCAxMDIsIDM1MCk7XHJcbiAgICBmaW5sKCk7XHJcbiAgICByZXR1cm4gcmV0X3ZhbDtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYmVmb3JlX2xvYWQoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfbG9hZChnYS5waWQsIDEwMywgMzgwKTtcclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmFsX2xvYWQoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfbG9hZChnYS5waWQsIGdhLnVubywgMzApO1xyXG4gICAgZmlubCgpO1xyXG4gICAgcmV0dXJuIHJldF92YWw7XHJcbn1cclxuKi9cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZChhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgYXdhaXQgaW5pdChhcmcpO1xyXG4gICAgY29uc3QgcGlkID0gZ2EucGlkO1xyXG4gICAgbGV0ICAgdW5vOiBudW1iZXI7XHJcbiAgICBsZXQgICBlbm86IG51bWJlcjtcclxuICAgIHN3aXRjaCAoZ2EubW9kZSkge1xyXG4gICAgICAgIGNhc2UgJ3RtcF9sb2FkJzogICAgICB1bm8gPSAxMDA7ICAgIGVubyA9IDMzMDsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnaW5zdGFudF9sb2FkJzogIHVubyA9IDEwMTsgICAgZW5vID0gMzEwOyBicmVhaztcclxuICAgICAgICBjYXNlICdVRF9sb2FkJzogICAgICAgdW5vID0gMTAyOyAgICBlbm8gPSAzNTA7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2JlZm9yZV9sb2FkJzogICB1bm8gPSAxMDM7ICAgIGVubyA9IDM3MDsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZ2VuZXJhbF9sb2FkJzogIHVubyA9IGdhLnVubzsgZW5vID0gMzkwOyBicmVhaztcclxuICAgICAgICBkZWZhdWx0OiAgICAgICAgICAgICAgcmV0dXJuIGVycl9lbmNvZGUoODg4OCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXRfdmFsID0gYXdhaXQgX2xvYWQocGlkLCB1bm8sIGVubyk7XHJcbiAgICBmaW5sKCk7XHJcbiAgICByZXR1cm4gcmV0X3ZhbDtcclxufVxyXG5cclxuXHJcbi8qXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0bXBfc2F2ZShhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgaW5pdChhcmcpO1xyXG4gICAgY29uc3QgcmV0X3ZhbCA9IGF3YWl0IF9zYXZlKGdhLnBpZCwgMTAwLCAnX19UZW1wb3JhcnlTYXZlRGF0YV9fJywgMjMwKTtcclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnN0YW50X3NhdmUoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfc2F2ZShnYS5waWQsIDEwMSwgJ19fSW5zdGFudFNhdmVEYXRhX18nLCAyMTApO1xyXG4gICAgZmlubCgpO1xyXG4gICAgcmV0dXJuIHJldF92YWw7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFVEX3NhdmUoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfc2F2ZShnYS5waWQsIDEwMiwgJ19fVXBEb3duU2F2ZURhdGFfXycsIDI1MCk7XHJcbiAgICBmaW5sKCk7XHJcbiAgICByZXR1cm4gcmV0X3ZhbDtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYmVmb3JlX3NhdmUoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfc2F2ZShnYS5waWQsIDEwMywgJ19fQmVmb3JlVGhlRXZlbnREYXRhX18nLCAyODApO1xyXG4gICAgZmlubCgpO1xyXG4gICAgcmV0dXJuIHJldF92YWw7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYWxfc2F2ZShhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgaW5pdChhcmcpO1xyXG4gICAgY29uc3QgcmV0X3ZhbCA9IGF3YWl0IF9zYXZlKGdhLnBpZCwgZ2Euc2F2ZT8udW5pcV9ubz8/OTksIGdhLnNhdmU/LnRpdGxlPz8nPz8/JywgMjMwKTtcclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcbiovXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmUoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGF3YWl0IGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHBpZCAgPSBnYS5zYXZlPy5wbGF5ZXJfaWQ/Py0yO1xyXG4gICAgbGV0ICAgdW5vOiAgIG51bWJlcjtcclxuICAgIGxldCAgIGVubzogICBudW1iZXI7XHJcbiAgICBsZXQgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgc3dpdGNoIChnYS5tb2RlKSB7XHJcbiAgICAgICAgY2FzZSAndG1wX3NhdmUnOiAgICAgIHVubyA9IDEwMDsgICAgZW5vID0gMjMwOyB0aXRsZT0gJ19fVGVtcG9yYXJ5U2F2ZURhdGFfXyc7ICBicmVhaztcclxuICAgICAgICBjYXNlICdpbnN0YW50X3NhdmUnOiAgdW5vID0gMTAxOyAgICBlbm8gPSAyMTA7IHRpdGxlPSAnX19JbnN0YW50U2F2ZURhdGFfXyc7ICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ1VEX3NhdmUnOiAgICAgICB1bm8gPSAxMDI7ICAgIGVubyA9IDI1MDsgdGl0bGU9ICdfX1VwRG93blNhdmVEYXRhX18nOyAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYmVmb3JlX3NhdmUnOiAgIHVubyA9IDEwMzsgICAgZW5vID0gMjcwOyB0aXRsZT0gJ19fQmVmb3JlVGhlRXZlbnREYXRhX18nOyBicmVhaztcclxuICAgICAgICBjYXNlICdnZW5lcmFsX3NhdmUnOiAgdW5vID0gZ2Euc2F2ZT8udW5pcV9ubz8/OTk7IGVubyA9IDI5MDsgdGl0bGUgPSBnYS5zYXZlPy50aXRsZT8/Jz8/Pyc7ICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OiAgICAgICAgICAgICAgcmV0dXJuIGVycl9lbmNvZGUoOTk5OSk7XHJcbiAgICB9XHJcbi8vICAgIGNvbnNvbGUuZXJyb3IoYHBpZD0ke3BpZH0sIHVubz0ke3Vub30sIHRpdGxlPSR7dGl0bGV9LCBlbm89JHtlbm99YCk7XHJcbiAgICBjb25zdCByZXRfdmFsID0gYXdhaXQgX3NhdmUocGlkLCB1bm8sIHRpdGxlLCBlbm8pO1xyXG4gICAgZmlubCgpO1xyXG4gICAgcmV0dXJuIHJldF92YWw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vICAg44K144OW44Or44O844OB44OzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIF9sb2FkKHBpZDogbnVtYmVyLCB1bm86IG51bWJlciwgZWNvZGU6IG51bWJlcik6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGF3YWl0IHRyX2JlZ2luKGRiX21haSk7XHJcblxyXG4gICAgLy8g44Om44OL44O844Kv44O744OK44Oz44OQ44O844Gnc2F2ZeODh+ODvOOCv+OCkuaOouOBmeOAguimi+OBpOOBi+OCjOOBsHNhdmVfaWTjgavjgrvjg4Pjg4jjgZnjgotcclxuICAgIGNvbnN0IHNhdmVfaWQgPSBhd2FpdCBDX1NhdmVJbmZvUkRCLmdldF9zYXZlX2lkX2F0X3RibChkYl9tYWksIGd2Lm1lcywgcGlkLCB1bm8pO1xyXG4gICAgaWYgKGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIGF3YWl0IHRyX3JvbGxiYWNrKGRiX21haSk7XHJcbiAgICAgICAgcmV0dXJuIGFsbF9zYXZlX2RhdGEoZWNvZGUsIHVuZGVmaW5lZCk7O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG1lemXjgoR0ZWFt562J44Gu6Zai6YCj44GZ44KL44OH44O844K/44KS5Y+N5pig44GZ44KLXHJcbiAgICBjb25zdCBzYXZlX2RhdGEwMiA9IGF3YWl0IENfU2F2ZURhdGFSREIuZ2V0X2Zyb21fcmRiKGRiX21haSwgZ3YubWVzLCBzYXZlX2lkKTtcclxuICAgIGlmIChndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICBhd2FpdCB0cl9yb2xsYmFjayhkYl9tYWkpO1xyXG4gICAgICAgIHJldHVybiBhbGxfc2F2ZV9kYXRhKGVjb2RlLCB1bmRlZmluZWQpOztcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCB0cl9jb21taXQoZGJfbWFpKTtcclxuICAgIHJldHVybiBhbGxfc2F2ZV9kYXRhKDAsIHNhdmVfZGF0YTAyKTtcclxuXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIF9zYXZlKHBpZDogbnVtYmVyLCB1bmlxX25vOiBudW1iZXIsIHRpdGxlOiBzdHJpbmcsIGVjb2RlOiBudW1iZXIpOiBQcm9taXNlPElfUmV0dXJuPiB7XHJcbiAgICBpZiAoZ2Euc2F2ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gYWxsX3NhdmVfZGF0YShlY29kZSwgdW5kZWZpbmVkKTtcclxuICAgIGdhLnNhdmUucGxheWVyX2lkID0gcGlkO1xyXG4gICAgZ2Euc2F2ZS51bmlxX25vICAgPSB1bmlxX25vO1xyXG4gICAgZ2Euc2F2ZS50aXRsZSAgICAgPSB0aXRsZTtcclxuLy9jb25zb2xlLmVycm9yKGBwaWQ9JHtwaWR9LCB1bm89JHt1bmlxX25vfSwgdGl0bGU9JHt0aXRsZX1gKTtcclxuICAgIGF3YWl0IHRyX2JlZ2luKGRiX21haSk7XHJcblxyXG4gICAgLy8g44Om44OL44O844Kv44O744OK44Oz44OQ44O844Gnc2F2ZeODh+ODvOOCv+OCkuaOouOBmeOAglxyXG4gICAgY29uc3Qgc2F2ZV9pZCA9IGF3YWl0IENfU2F2ZUluZm9SREIuZ2V0X3NhdmVfaWRfYXRfdGJsKGRiX21haSwgZ3YubWVzLCBwaWQsIHVuaXFfbm8pO1xyXG4gICAgaWYgKGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIGF3YWl0IHRyX3JvbGxiYWNrKGRiX21haSk7XHJcbiAgICAgICAgcmV0dXJuIGFsbF9zYXZlX2RhdGEoZWNvZGUgKyAxMCwgZ2Euc2F2ZSk7XHJcbiAgICB9XHJcbiAgICAvLyDlkIzjgZhpZOOBruaXouWtmOODh+ODvOOCv+OBjOacieOBo+OBn+OCieS4gOaXpuWJiumZpOOBmeOCi1xyXG4vL2RlYnVnIGNvbnNvbGUuZXJyb3IoYHNhdmVfaWQgPSAke3NhdmVfaWR9YCk7XHJcbiAgICBpZiAoc2F2ZV9pZCA+IDApIHtcclxuICAgICAgICBjb25zdCByc2x0MDEgPSBhd2FpdCBDX1NhdmVEYXRhUkRCLmRlbF90b19yZGIoZGJfbWFpLCBndi5tZXMsIHNhdmVfaWQpOyBcclxuICAgICAgICBpZiAoZ3YubWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRyX3JvbGxiYWNrKGRiX21haSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGxfc2F2ZV9kYXRhKGVjb2RlICsgMzMsIGdhLnNhdmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOaUueOCgeOBpijliKXjga7jg6zjgrPjg7zjg4njgasp44K744O844OW44GZ44KLXHJcbiAgICBjb25zdCByc2x0MDIgPSBhd2FpdCBDX1NhdmVEYXRhUkRCLnNldF90b19yZGIoZGJfbWFpLCBndi5tZXMsIGdhLnNhdmUpO1xyXG4gICAgaWYgKHJzbHQwMiA9PT0gZmFsc2UpIHtcclxuICAgICAgICBhd2FpdCB0cl9yb2xsYmFjayhkYl9tYWkpO1xyXG4gICAgICAgIHJldHVybiBhbGxfc2F2ZV9kYXRhKGVjb2RlICsgMjMsIGdhLnNhdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IHRyX2NvbW1pdChkYl9tYWkpO1xyXG4gICAgcmV0dXJuIGFsbF9zYXZlX2RhdGEoMCwgZ2Euc2F2ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFsbF9zYXZlX2RhdGEoY29kZTogbnVtYmVyLCBzYXZlOiBDX1NhdmVEYXRhfHVuZGVmaW5lZCk6IElfUmV0dXJuIHtcclxuICAgIGxldCByZXRfdmFsOiBJX1JldHVybjtcclxuXHJcbiAgICBpZiAoY29kZSAhPT0gMCB8fCBndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICByZXRfdmFsID0gbmV3IENfRXJyUmV0dXJuKGNvZGUsIGd2Lm1lcy5nZXRfZXJyX21lc3NhZ2VzKCkuam9pbihcIlxcblwiKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldF92YWwgPSBuZXcgQ19Ob3JSZXR1cm4oKTtcclxuICAgICAgICBpZiAoc2F2ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldF92YWwuc2F2ZSA9IHNhdmUuZW5jb2RlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0X3ZhbC5zYXZlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmV0X3ZhbDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWxsX3NhdmVfaW5mbyhjb2RlOiBudW1iZXIsIHNhdmVfbGlzdDogQ19TYXZlSW5mb1tdKTogSV9SZXR1cm4ge1xyXG4gICAgbGV0IHJldF92YWw6IElfUmV0dXJuO1xyXG5cclxuICAgIGlmIChjb2RlICE9PSAwIHx8IGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIHJldF92YWwgPSBuZXcgQ19FcnJSZXR1cm4oY29kZSwgZ3YubWVzLmdldF9lcnJfbWVzc2FnZXMoKS5qb2luKFwiXFxuXCIpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0X3ZhbCA9IG5ldyBDX05vclJldHVybigpO1xyXG4vLyAgICAgICAgcmV0X3ZhbC5zYXZlX2luZm8gPSBzYXZlX2xpc3Q7XHJcbiAgICAgICAgY29uc3QgcmV0X2FycmF5OiBKU09OX1NhdmVEYXRhW10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHNhdmVfZWxtIG9mIHNhdmVfbGlzdCkgcmV0X2FycmF5LnB1c2goc2F2ZV9lbG0uZW5jb2RlKCkpO1xyXG4gICAgICAgIHJldF92YWwuc2F2ZV9pbmZvID0gcmV0X2FycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGVycl9lbmNvZGUoY29kZTogbnVtYmVyKTogSV9SZXR1cm4ge1xyXG4gICAgY29uc3QgcmV0X2Fzc29jOiBJX1JldHVybiA9IHtlY29kZTpjb2RlLCBlbXNnOiAnJ307XHJcbiAgICBmb3IgKGNvbnN0IG1zZyBvZiBndi5tZXMuZ2V0X2Vycl9tZXNzYWdlcygpKSByZXRfYXNzb2MuZW1zZyArPSBtc2cgKyBcIlxcblwiOyBcclxuICAgIHJldHVybiByZXRfYXNzb2M7XHJcbn1cclxuXHJcblxyXG5jbGFzcyBDX05vclJldHVybiBpbXBsZW1lbnRzIElfUmV0dXJuIHtcclxuICAgIHB1YmxpYyBlY29kZTogICBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGVtc2c6ICAgIHN0cmluZyA9ICdTdGF0dXMgT0snO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge31cclxufVxyXG5cclxuY2xhc3MgQ19FcnJSZXR1cm4gaW1wbGVtZW50cyBJX1JldHVybiB7XHJcbiAgICBwdWJsaWMgZWNvZGU6ICAgbnVtYmVyID0gMTAwMDtcclxuICAgIHB1YmxpYyBlbXNnOiAgICBzdHJpbmcgPSAnZXJyb3InO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGVjb2RlOiBudW1iZXIsIGVtc2c6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZWNvZGUgID0gZWNvZGU7XHJcbiAgICAgICAgdGhpcy5lbXNnICAgPSBlbXNnO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDliJ3jgIDmnJ/jgIDoqK3jgIDlrpogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmxldCBndjogQ19HbG9iYWxWYXI7XHJcbmxldCBnYTogQ19HbG9iYWxBcmd1bWVudHM7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbml0KG9iajogSV9HbG9iYWxBcmd1bWVudHMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGd2ID0gICAgIG5ldyBDX0dsb2JhbFZhcigpO1xyXG4gICAgZ2EgPSAgICAgbmV3IENfR2xvYmFsQXJndW1lbnRzKG9iaik7XHJcbiAgICBkYl9tYWkgPSBhd2FpdCBndi5kYl9wb29sLmdldENvbm5lY3Rpb24oKTtcclxuXHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gZmlubCgpOiB2b2lkIHtcclxuICAgIGRiX21haS5yZWxlYXNlKCk7XHJcbiAgICBndi5maW5sKCk7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy9cclxuLy8vLy8gICAgIOOCr+ODqeOCueWuo+iogFxyXG4vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgLy8g5aSn5Z+f5aSJ5pWw44Gu6Kit5a6aXHJcbiAgICBjbGFzcyBDX0dsb2JhbFZhciB7XHJcbiAgICAgICAgcHVibGljIG1lczogQ19Ec3BNZXNzYWdlO1xyXG5cclxuICAgICAgICBwdWJsaWMgZGJfaG9zdDogICBzdHJpbmcgPSBcInNxbFwiO1xyXG4gICAgICAgIHB1YmxpYyBkYl9wb3J0OiAgIG51bWJlciA9ICAzMzA2O1xyXG4gICAgICAgIHB1YmxpYyBkYl9uYW1lOiAgIHN0cmluZyA9IFwiZGJfbWFpXCI7XHJcbiAgICAgICAgcHVibGljIGRiX3VzZXI6ICAgc3RyaW5nID0gXCJpdHNheW5vMzNcIjtcclxuICAgICAgICBwdWJsaWMgZGJfcGFzczogICBzdHJpbmcgPSBcIlBFMzMzODMzXCI7XHJcbiAgICBcclxuICAgICAgICBwdWJsaWMgZGJfcG9vbDogICBteXNxbC5Qb29sO1xyXG4gICAgXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICB0aGlzLm1lcyAgICAgPSBuZXcgQ19Ec3BNZXNzYWdlKCAvKiBpc0hUTUwgPSAqLyBmYWxzZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgdGhpcy5kYl9wb29sID0gbXlzcWwuY3JlYXRlUG9vbCh7XHJcbiAgICAgICAgICAgICAgICBob3N0OiAgICAgIHRoaXMuZGJfaG9zdCxcclxuICAgICAgICAgICAgICAgIHBvcnQ6ICAgICAgdGhpcy5kYl9wb3J0LFxyXG4gICAgICAgICAgICAgICAgdXNlcjogICAgICB0aGlzLmRiX3VzZXIsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogIHRoaXMuZGJfcGFzcyxcclxuICAgICAgICAgICAgICAgIGRhdGFiYXNlOiAgdGhpcy5kYl9uYW1lLFxyXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbkxpbWl0OiAgICAgMTAsIC8vIOaOpee2muOCkuW8teOCiue2muOBkeOCi+aVsFxyXG4gICAgICAgICAgICAgICAgd2FpdEZvckNvbm5lY3Rpb25zOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbmFtZWRQbGFjZWhvbGRlcnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBqc29uU3RyaW5nczogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBmaW5sKCkge1xyXG4gICAgICAgICAgICB0aGlzLmRiX3Bvb2wuZW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbnRlcmZhY2UgSV9HbG9iYWxBcmd1bWVudHMge1xyXG4gICAgICAgIG1vZGU/OiAgICAgICAgc3RyaW5nO1xyXG4gICAgICAgIHBpZD86ICAgICAgICAgbnVtYmVyO1xyXG4gICAgICAgIHVubz86ICAgICAgICAgbnVtYmVyO1xyXG4gICAgICAgIHNhdmVfaWQ/OiAgICAgbnVtYmVyO1xyXG4gICAgICAgIHNhdmVfdGl0bGU/OiAgc3RyaW5nOyBcclxuICAgICAgICBzYXZlX2RldGFpbD86IHN0cmluZzsgXHJcbiAgICAgICAgc2F2ZV9wb2ludD86ICBzdHJpbmc7IFxyXG4gICAgICAgIHNhdmVfdGltZT86ICAgc3RyaW5nOyBcclxuICAgICAgICBzYXZlPzogICAgICAgIHN0cmluZztcclxuICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAvLyBQT1NU5byV5pWw44Gu6Kit5a6aXHJcbiAgICBjbGFzcyBDX0dsb2JhbEFyZ3VtZW50cyB7XHJcbiAgICAgICAgcHVibGljIG1vZGU6ICAgICAgc3RyaW5nICAgICAgICAgID0gJ3Vua25vd24nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBzYXZlX0pTT046IHN0cmluZyAgICAgICAgICA9ICcnO1xyXG4gICAgICAgIHB1YmxpYyBzYXZlOiAgICAgICAgQ19TYXZlRGF0YXx1bmRlZmluZWQgPSB1bmRlZmluZWQ7IFxyXG5cclxuICAgICAgICBwdWJsaWMgcGlkOiAgICAgICAgIG51bWJlciA9ICAxO1xyXG4gICAgICAgIHB1YmxpYyB1bm86ICAgICAgICAgbnVtYmVyID0gLTE7XHJcbiAgICAgICAgcHVibGljIHNhdmVfaWQ6ICAgICBudW1iZXIgPSAtMTtcclxuICAgICAgICBwdWJsaWMgc2F2ZV90aXRsZTogIHN0cmluZyA9ICcnOyBcclxuICAgICAgICBwdWJsaWMgc2F2ZV9kZXRhaWw6IHN0cmluZyA9ICcnOyBcclxuICAgICAgICBwdWJsaWMgc2F2ZV9wb2ludDogIHN0cmluZyA9ICcnOyBcclxuICAgICAgICBwdWJsaWMgc2F2ZV90aW1lOiAgIHN0cmluZyA9ICcnXHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvYmo6IElfR2xvYmFsQXJndW1lbnRzfHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAob2JqID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubW9kZSAgICAgICAgPSBvYmoubW9kZSA/PyB0aGlzLm1vZGU7XHJcbiAgICAgICAgICAgIHRoaXMucGlkICAgICAgICAgPSBvYmoucGlkICA/PyB0aGlzLnBpZDtcclxuICAgICAgICAgICAgdGhpcy51bm8gICAgICAgICA9IG9iai51bm8gID8/IHRoaXMudW5vO1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVfaWQgICAgID0gTnVtYmVyKG9iai5zYXZlX2lkKSAgICAgID8/IHRoaXMuc2F2ZV9pZDtcclxuICAgICAgICAgICAgdGhpcy5zYXZlX3RpdGxlICA9IG9iai5zYXZlX3RpdGxlICAgICAgICAgICA/PyB0aGlzLnNhdmVfdGl0bGU7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZV9kZXRhaWwgPSBvYmouc2F2ZV9kZXRhaWwgICAgICAgICAgPz8gdGhpcy5zYXZlX2RldGFpbDtcclxuICAgICAgICAgICAgdGhpcy5zYXZlX3BvaW50ICA9IG9iai5zYXZlX3BvaW50ICAgICAgICAgICA/PyB0aGlzLnNhdmVfcG9pbnQ7XHJcbiAgICAgICAgICAgIGlmIChvYmouc2F2ZSAhPT0gdW5kZWZpbmVkKSAgICB0aGlzLnNhdmUgICAgPSBuZXcgQ19TYXZlRGF0YShKU09OLnBhcnNlKG9iai5zYXZlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vICAg44OH44O844K/44OZ44O844K56Zai5L+CIFxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAgIFxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiB0cl9iZWdpbihkYl9tYWk6IGRiX2Nvbm5lY3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBkYl9tYWkuYmVnaW5UcmFuc2FjdGlvbigpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBndi5tZXMuc2V0X2Vycl9tZXNzYWdlKFwi44OI44Op44Oz44K244Kv44K344On44Oz44Gu6ZaL5aeL5aSx5pWXOiBcIiArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHRyX2NvbW1pdChkYl9tYWk6IGRiX2Nvbm5lY3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBkYl9tYWkuY29tbWl0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGd2Lm1lcy5zZXRfZXJyX21lc3NhZ2UoXCLjg4jjg6njg7Pjgrbjgq/jgrfjg6fjg7Pjga7jgrPjg5/jg4Pjg4jlpLHmlZdcIiArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHRyX3JvbGxiYWNrKGRiX21haTogZGJfY29ubmVjdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGRiX21haS5yb2xsYmFjaygpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBndi5tZXMuc2V0X2Vycl9tZXNzYWdlKFwi44OI44Op44Oz44K244Kv44K344On44Oz44Gu44Ot44O844Or44OQ44OD44Kv5aSx5pWXXCIgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiIsIlxyXG5jb25zdCBkYl9ob3N0ID0gJ3NxbCc7XHJcbi8vIOWIqeeUqOOCr+ODqeOCueetieOBruiqreOBv+i+vOOBv1xyXG5cclxuLy8g44Ko44Op44O844Oh44OD44K744O844K4562J44KS5L+d5a2Y44O76KGo56S644GZ44KL44Kv44Op44K5XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9ICAgICBmcm9tICcuLi8uLi8uLi9tYWljbC9zcmMvZF91dGwvQ19Ec3BNZXNzYWdlJztcclxuXHJcbi8vIE15U3Fs44KS5omx44GG44Kv44Op44K5XHJcbmltcG9ydCBteXNxbCBmcm9tIFwibXlzcWwyL3Byb21pc2VcIjtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDkuLvjgIDlh6bjgIDnkIYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmludGVyZmFjZSBJX0dsb2JhbEFyZ3VtZW50cyB7XHJcbiAgICBtb2RlPzogc3RyaW5nO1xyXG4gICAgcGlkOiAgIG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIElfUmV0dXJuIHtcclxuICAgIGVjb2RlOiAgIG51bWJlcjtcclxuICAgIGVtc2c6ICAgIHN0cmluZztcclxuICAgIHBpZDogICAgIG51bWJlcjtcclxuICAgIG5hbWU6ICAgIHN0cmluZztcclxuICAgIG1ibmFtZTogIHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgQ19Ob3JSZXR1cm4gaW1wbGVtZW50cyBJX1JldHVybiB7XHJcbiAgICBwdWJsaWMgZWNvZGU6ICAgbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBlbXNnOiAgICBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBwaWQ6ICAgICBudW1iZXIgPSAtMTtcclxuICAgIHB1YmxpYyBuYW1lOiAgICBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBtYm5hbWU6ICBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBtYm5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucGlkICAgID0gcGlkO1xyXG4gICAgICAgIHRoaXMubmFtZSAgID0gbmFtZTtcclxuICAgICAgICB0aGlzLm1ibmFtZSA9IG1ibmFtZTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19FcnJSZXR1cm4gaW1wbGVtZW50cyBJX1JldHVybiB7XHJcbiAgICBwdWJsaWMgZWNvZGU6ICAgbnVtYmVyID0gMTAwMDtcclxuICAgIHB1YmxpYyBlbXNnOiAgICBzdHJpbmcgPSAnZXJyb3InO1xyXG4gICAgcHVibGljIHBpZDogICAgIG51bWJlciA9IC0xO1xyXG4gICAgcHVibGljIG5hbWU6ICAgIHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIG1ibmFtZTogIHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGVjb2RlOiBudW1iZXIsIGVtc2c6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZWNvZGUgID0gZWNvZGU7XHJcbiAgICAgICAgdGhpcy5lbXNnICAgPSBlbXNnO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gR2V0dGluZyBOZXcgR2FtZSBzdGFydGlpbmcgZnJvbSBHdWxkXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0ZXN0KGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBQcm9taXNlPElfUmV0dXJuPiB7XHJcbiAgICBsZXQgcmV0dXJuX3ZhbDogSV9SZXR1cm47XHJcblxyXG4gICAgaW5pdChhcmcpO1xyXG5cclxuICAgIGlmIChndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICBndi5tZXMuZGlzcGxheV9lcnJfbWVzc2FnZSgpO1xyXG4gICAgICAgIHJldHVybl92YWwgPSBuZXcgQ19FcnJSZXR1cm4oMTAwLCAnZGJfbWFpIE9QRU4gRVJST1IgJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybl92YWwgPSBhd2FpdCBnZXRfcGxheWVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlubCgpO1xyXG4gICAgcmV0dXJuIHJldHVybl92YWw7XHJcbn1cclxuXHJcbiBcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8gICDjgrXjg5bjg6vjg7zjg4Hjg7NcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0X3BsYXllcigpOiBQcm9taXNlPElfUmV0dXJuPiB7XHJcbiAgICBpZiAoZ2EucGlkID09PSB1bmRlZmluZWQpIHJldHVybiBuZXcgQ19FcnJSZXR1cm4oOTk5LCAnUGlkIFVuZGVmaW5lZCcpO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RfdXNlcnMoKS50aGVuKHJzbHRfdXNlcnMgPT4ge1xyXG4gICAgICAgIGlmIChyc2x0X3VzZXJzID09PSB1bmRlZmluZWQgfHwgZ3YubWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIGd2Lm1lcy5kaXNwbGF5X2Vycl9tZXNzYWdlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ19FcnJSZXR1cm4oMjAwLCAnU1FMIEVSUk9SICcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocnNsdF91c2Vycy5sZW5ndGggPCAxKSByZXR1cm4gbmV3IENfRXJyUmV0dXJuKDkwMCwgYE5vIGRhdGEgZXhpc3Qgb24gcGlkPSR7Z2EucGlkfWApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IENfTm9yUmV0dXJuKFxyXG4gICAgICAgICAgICByc2x0X3VzZXJzWzBdLmlkLCBcclxuICAgICAgICAgICAgcnNsdF91c2Vyc1swXS5uYW1lLCBcclxuICAgICAgICAgICAgcnNsdF91c2Vyc1swXS5tYm5hbWVcclxuICAgICAgICApO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IENfRXJyUmV0dXJuKDEwMCwgJ1NRTCBFUlJPUjogJyArIGVycik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElfdGJsX3BsYXllciBleHRlbmRzIG15c3FsLlJvd0RhdGFQYWNrZXR7XHJcbiAgICBpZDogICAgICBudW1iZXI7XHJcbiAgICBuYW1lOiAgICBzdHJpbmc7XHJcbiAgICBwYXNzd2Q6ICBzdHJpbmc7XHJcbiAgICBtYm5hbWU6ICBzdHJpbmc7XHJcbiAgICBlbWFpbDogICBzdHJpbmc7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlbGVjdF91c2VycygpOiBQcm9taXNlPElfdGJsX3BsYXllcltdfHVuZGVmaW5lZD4ge1xyXG4gICAgY29uc3Qgc3FsID0gYFxyXG4gICAgICAgIFNFTEVDVCBpZCwgbmFtZSwgcGFzc3dkLCBtYm5hbWUsIGVtYWlsIEZST00gdGJsX3BsYXllclxyXG4gICAgICAgICAgICBXSEVSRSAgaWQgPSA6aWRcclxuICAgIGA7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBbcnNsdFJvd1NldF0gPSBhd2FpdCBndi5kYl9wb29sLnF1ZXJ5PElfdGJsX3BsYXllcltdPihzcWwsIHtpZDogZ2EucGlkfSk7XHJcbiAgICAgICAgcmV0dXJuIHJzbHRSb3dTZXQ7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBndi5tZXMuc2V0X2Vycl9tZXNzYWdlKCdTUUwgRVJST1IgU0VMRUNUIEZST00gdGJsX3BsYXllcjogJyArIGVycik7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWIneOAgOacn+OAgOioreOAgOWumiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxubGV0IGd2OiBDX0dsb2JhbFZhcjtcclxubGV0IGdhOiBDX0dsb2JhbEFyZ3VtZW50cztcclxuXHJcbmZ1bmN0aW9uIGluaXQob2JqOiBJX0dsb2JhbEFyZ3VtZW50cyk6IHZvaWQge1xyXG4gICAgZ3YgPSBuZXcgQ19HbG9iYWxWYXIoKTtcclxuICAgIGdhID0gbmV3IENfR2xvYmFsQXJndW1lbnRzKG9iaik7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gZmlubCgpOiB2b2lkIHtcclxuICAgIGd2LmZpbmwoKTtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vL1xyXG4vLy8vLyAgICAg44Kv44Op44K55a6j6KiAXHJcbi8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIOWkp+Wfn+WkieaVsOOBruioreWumlxyXG5jbGFzcyBDX0dsb2JhbFZhciB7XHJcbiAgICBwdWJsaWMgbWVzOiBDX0RzcE1lc3NhZ2U7XHJcblxyXG4gICAgcHVibGljIGRiX2hvc3Q6ICAgc3RyaW5nID0gXCJzcWxcIjtcclxuICAgIHB1YmxpYyBkYl9wb3J0OiAgIG51bWJlciA9ICAzMzA2O1xyXG4gICAgcHVibGljIGRiX25hbWU6ICAgc3RyaW5nID0gXCJkYl9tYWlcIjtcclxuICAgIHB1YmxpYyBkYl91c2VyOiAgIHN0cmluZyA9IFwiaXRzYXlubzMzXCI7XHJcbiAgICBwdWJsaWMgZGJfcGFzczogICBzdHJpbmcgPSBcIlBFMzMzODMzXCI7XHJcblxyXG4gICAgcHVibGljIGRiX3Bvb2w6ICAgbXlzcWwuUG9vbDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tZXMgICAgID0gbmV3IENfRHNwTWVzc2FnZSggLyogaXNIVE1MID0gKi8gZmFsc2UpO1xyXG5cclxuICAgICAgICB0aGlzLmRiX3Bvb2wgPSBteXNxbC5jcmVhdGVQb29sKHtcclxuICAgICAgICAgICAgaG9zdDogICAgICB0aGlzLmRiX2hvc3QsXHJcbiAgICAgICAgICAgIHBvcnQ6ICAgICAgdGhpcy5kYl9wb3J0LFxyXG4gICAgICAgICAgICB1c2VyOiAgICAgIHRoaXMuZGJfdXNlcixcclxuICAgICAgICAgICAgcGFzc3dvcmQ6ICB0aGlzLmRiX3Bhc3MsXHJcbiAgICAgICAgICAgIGRhdGFiYXNlOiAgdGhpcy5kYl9uYW1lLFxyXG4gICAgICAgICAgICBjb25uZWN0aW9uTGltaXQ6ICAgICAxMCwgLy8g5o6l57aa44KS5by144KK57aa44GR44KL5pWwXHJcbiAgICAgICAgICAgIHdhaXRGb3JDb25uZWN0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgbmFtZWRQbGFjZWhvbGRlcnM6IHRydWUsXHJcbiAgICAgICAgICAgIGpzb25TdHJpbmdzOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZpbmwoKSB7XHJcbiAgICAgICAgdGhpcy5kYl9wb29sLmVuZCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBQT1NU5byV5pWw44Gu6Kit5a6aXHJcbmNsYXNzIENfR2xvYmFsQXJndW1lbnRzIHtcclxuICAgIHB1YmxpYyBtb2RlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGlkOiAgbnVtYmVyID0gLTE7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9iajogSV9HbG9iYWxBcmd1bWVudHN8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlID0gb2JqPy5tb2RlID8/ICd1bmtub3duJztcclxuICAgICAgICB0aGlzLnBpZCAgPSBvYmo/LnBpZCAgIT09IHVuZGVmaW5lZCAmJiAhaXNOYU4ob2JqLnBpZCkgID8gTnVtYmVyKG9iai5waWQpICA6IC0xO1xyXG4vL2RlYnVnICAgICAgICBjb25zb2xlLmxvZyhgbW9kZT0ke3RoaXMubW9kZX0sIHBpZCA9ICR7dGhpcy5waWR9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbm1vZHVsZS5leHBvcnRzID0gbmV3R2FtZTtcclxubW9kdWxlLmV4cG9ydHMgPSBuZXdIZXJvO1xyXG4qLyIsIi8vIOWIqeeUqOOCr+ODqeOCueetieOBruiqreOBv+i+vOOBv1xyXG5cclxuLy8g44Ko44Op44O844Oh44OD44K744O844K4562J44KS5L+d5a2Y44O76KGo56S644GZ44KL44Kv44Op44K5XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9ICAgZnJvbSAnLi4vLi4vLi4vbWFpY2wvc3JjL2RfdXRsL0NfRHNwTWVzc2FnZSc7XHJcblxyXG4vLyDjg4Djg7Pjgrjjg6fjg7Pjg57jg4Pjg5fjga7jgrvjg6vjga7nqK7poZ7jgpLooajjgZnliJfmjJnlnotcclxuaW1wb3J0IHsgVF9NektpbmQgfSAgICAgICBmcm9tICAnLi4vLi4vLi4vbWFpY2wvc3JjL2RfbWRsL1RfTXpLaW5kJztcclxuXHJcbi8vIOaWueWQkeOCkuihqOOBmeOCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX1BvaW50RGlyLCBUX0RpcmVjdGlvbiB9ICAgZnJvbSAgJy4uLy4uLy4uL21haWNsL3NyYy9kX21kbC9DX1BvaW50RGlyJztcclxuXHJcbi8vIOS9jee9ruODu+e1jOi3r+OCkuihqOOBmeOCr+ODqeOCueWFqOiIrFxyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCB9ICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbWFpY2wvc3JjL2RfbWRsL0NfTW92YWJsZVBvaW50JztcclxuXHJcbi8vIE1BWkXplqLkv4Ljgq/jg6njgrnlhajoiKxcclxuaW1wb3J0IHsgQ19NYXplIH0gICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL21haWNsL3NyYy9kX21kbC9DX01hemUnO1xyXG5pbXBvcnQgeyBDX01hemVJbmZvLCBKU09OX01hemVJbmZvIH0gZnJvbSAnLi4vLi4vLi4vbWFpY2wvc3JjL2RfbWRsL0NfTWF6ZUluZm8nOyAvLyBNYXpl5L2c5oiQ44Gu44OG44Oz44OX44Os44O844OI5oOF5aCxXHJcblxyXG4vLyDjg5Hjg7zjg4bjgqPjg7zjgq/jg6njgrnlhajoiKxcclxuaW1wb3J0IHsgQ19UZWFtIH0gICAgICAgICBmcm9tICcuLi8uLi8uLi9tYWljbC9zcmMvZF9tZGwvQ19UZWFtJztcclxuXHJcbi8vIOODkuODvOODreODvOOCr+ODqeOCueWFqOiIrFxyXG5pbXBvcnQgeyBDX0hlcm8gfSAgICAgICAgIGZyb20gJy4uLy4uLy4uL21haWNsL3NyYy9kX21kbC9DX0hlcm8nO1xyXG5cclxuLy8g44K744O844OW44OH44O844K/KOOCr+ODqeOCpOOCouODs+ODiOOBqOOBrumAo+aQuinlhajoiKxcclxuaW1wb3J0IHsgQ19TYXZlRGF0YSwgSlNPTl9TYXZlRGF0YSB9IGZyb20gJy4uLy4uLy4uL21haWNsL3NyYy9kX21kbC9DX1NhdmVEYXRhJztcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDkuLvjgIDlh6bjgIDnkIYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmxldCBndjogQ19HbG9iYWxWYXI7XHJcbmxldCBnYTogQ19HbG9iYWxBcmd1bWVudHM7XHJcblxyXG5pbnRlcmZhY2UgSV9HbG9iYWxBcmd1bWVudHMge1xyXG4gICAgbW9kZT86IHN0cmluZztcclxuICAgIG5tYnI/OiBudW1iZXI7XHJcbiAgICBwaWQ/OiAgbnVtYmVyO1xyXG4gICAgdGVhbT86IHN0cmluZztcclxuICAgIG1hemU/OiBzdHJpbmc7XHJcbiAgICBtYXplX25hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJX1JldHVybiB7XHJcbiAgICBlY29kZTogbnVtYmVyO1xyXG4gICAgZW1zZzogIHN0cmluZztcclxuICAgIHNhdmU/OiBKU09OX1NhdmVEYXRhO1xyXG4gICAgZGF0YT86IG9iamVjdDtcclxufVxyXG5cclxuLy8gR2V0dGluZyBJbmZvcm1hdGlvbiBvZiBBbGwgTWF6ZVxyXG5leHBvcnQgZnVuY3Rpb24gYWxsTWF6ZShvYmo6IElfR2xvYmFsQXJndW1lbnRzKTogSV9SZXR1cm4ge1xyXG4gICAgaW5pdChvYmopO1xyXG5cclxuICAgIGNvbnN0IG1hemVfaW5mb19hcnJheTogSlNPTl9NYXplSW5mb1tdID0gW107XHJcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gZ3YubWF6ZWluZm8pIG1hemVfaW5mb19hcnJheS5wdXNoKGd2Lm1hemVpbmZvW25hbWVdLmVuY29kZSgpKTtcclxuICAgIHJldHVybiBhbGxfZW5jb2RlKFxyXG4gICAgICAgIDAsIFxyXG4gICAgICAgIHttYXplaW5mbzogbWF6ZV9pbmZvX2FycmF5fSxcclxuICAgICk7XHJcbn1cclxuXHJcbi8vIEdldHRpbmcgTmV3IE1hemVcclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1hemUob2JqOiBJX0dsb2JhbEFyZ3VtZW50cyk6IElfUmV0dXJuIHtcclxuICAgIGluaXQob2JqKTtcclxuXHJcbiAgICBjb25zdCBbbmV3X21hemUsIG5ld19wb3NdID0gY3JlYXRlX21hemUoZ2EubWF6ZV9uYW1lKTsgXHJcbiAgICByZXR1cm4gYWxsX2VuY29kZShcclxuICAgICAgICAwLCBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1hemU6IG5ld19tYXplLmVuY29kZSgpLFxyXG4gICAgICAgICAgICBwb3M6ICBuZXdfcG9zLFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG59XHJcblxyXG4vLyBHZXR0aW5nIE5ldyBHYW1lIHN0YXJ0aWluZyBmcm9tIE1hemVcclxuZXhwb3J0IGZ1bmN0aW9uIG5ld01hemUob2JqOiBJX0dsb2JhbEFyZ3VtZW50cyk6IElfUmV0dXJuIHtcclxuICAgIGluaXQob2JqKTtcclxuXHJcbiAgICBjb25zdCBbbmV3X21hemUsIG5ld19wb3NdID0gY3JlYXRlX21hemUoJycpOyBcclxuICAgIGNvbnN0ICBuZXdfdGVhbSA9IGNyZWF0ZV90ZWFtKG5ld19tYXplLCBuZXdfcG9zKTsgXHJcbiAgICBjb25zdCAgbmV3X3NhdmUgPSBjcmVhdGVfc2F2ZShuZXdfbWF6ZSwgbmV3X3RlYW0pO1xyXG4gICAgY29uc3QgIHJldF9KU09OID0gc2F2ZV9lbmNvZGUoMCwgbmV3X3NhdmUpO1xyXG4gICAgcmV0dXJuIHJldF9KU09OO1xyXG59XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8gICDjgrXjg5bjg6vjg7zjg4Hjg7NcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZnVuY3Rpb24gZXJyX2VuY29kZShjb2RlOiBudW1iZXIsIG1zZ3M6IHN0cmluZ1tdKTogSV9SZXR1cm4ge1xyXG4gICAgY29uc3QgcmV0X2Fzc29jOiBJX1JldHVybiA9IHtlY29kZTpjb2RlLCBlbXNnOiAnJ307XHJcbiAgICBmb3IgKGNvbnN0IG1zZyBvZiBtc2dzKSByZXRfYXNzb2MuZW1zZyArPSBtc2c7IFxyXG4gICAgcmV0dXJuIHJldF9hc3NvYztcclxufVxyXG5cclxuZnVuY3Rpb24gYWxsX2VuY29kZShjb2RlOiBudW1iZXIsIGRhdGE6IG9iamVjdCk6IElfUmV0dXJuIHtcclxuICAgIGNvbnN0IHJldF9hc3NvYzogSV9SZXR1cm4gPSB7ZWNvZGU6Y29kZSwgZW1zZzogJyd9O1xyXG5cclxuICAgIHJldF9hc3NvYy5lY29kZSA9IGNvZGU7XHJcbiAgICBpZiAoY29kZSAhPT0gMCB8fCBndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICByZXR1cm4gZXJyX2VuY29kZShjb2RlLCBndi5tZXMuZ2V0X2Vycl9tZXNzYWdlcygpKTtcclxuICAgIH1cclxuICAgIHJldF9hc3NvYy5lbXNnID0gJ1N0YXR1cyBPSyc7XHJcbiAgICByZXRfYXNzb2MuZGF0YSA9ICBkYXRhO1xyXG5cclxuICAgIHJldHVybiByZXRfYXNzb2M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVfZW5jb2RlKGNvZGU6IG51bWJlciwgc2F2ZTogQ19TYXZlRGF0YSk6IElfUmV0dXJuIHtcclxuICAgIGNvbnN0IHJldF9hc3NvYzogSV9SZXR1cm4gPSB7ZWNvZGU6Y29kZSwgZW1zZzogJyd9O1xyXG5cclxuICAgIGlmIChjb2RlICE9PSAwIHx8IGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIHJldHVybiBlcnJfZW5jb2RlKGNvZGUsIGd2Lm1lcy5nZXRfZXJyX21lc3NhZ2VzKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0X2Fzc29jLmVtc2cgPSAnU3RhdHVzIE9LJztcclxuICAgIHJldF9hc3NvYy5zYXZlID0gc2F2ZS5lbmNvZGUoKTtcclxuXHJcbiAgICByZXR1cm4gcmV0X2Fzc29jO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlX3NhdmUobWF6ZTogQ19NYXplLCB0ZWFtOiBDX1RlYW0pOiBDX1NhdmVEYXRhIHtcclxuICAgIHJldHVybiBuZXcgQ19TYXZlRGF0YSh7XHJcbiAgICAgICAgcGxheWVyX2lkOiBnYS5waWQsXHJcbiAgICAgICAgYXV0b19tb2RlOiAnMCcsXHJcbiAgICAgICAgaXNfYWN0aXZlOiAnMScsXHJcbiAgICAgICAgaXNfZGVsZXRlOiAnMCcsXHJcblxyXG4gICAgICAgIGFsbF90ZWFtOiAgW3RlYW0uZW5jb2RlKCldLFxyXG4gICAgICAgIGFsbF9tYXplOiAgW21hemUuZW5jb2RlKCldLFxyXG4gICAgICAgIGFsbF9ndWxkOiAgW10sIFxyXG4gICAgICAgIGFsbF9tdnB0OiAgW10sIFxyXG5cclxuICAgICAgICBteXBvczogICAgIHRlYW0uZ2V0X2xvYygpLmVuY29kZSgpLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZV9tYXplKG1hemVfbmFtZTogc3RyaW5nID0gJycpOiBbQ19NYXplLCBDX1BvaW50RGlyXSB7XHJcbiAgICBsZXQgbWF6ZTogQ19NYXplO1xyXG4gICAgaWYgKG1hemVfbmFtZSA9PSAnJykge1xyXG4gICAgICAgIG1hemUgPSBuZXcgQ19NYXplKHtcclxuICAgICAgICAgICAgJ25hbWUnICA6ICflp4vjgb7jgorjga7ov7flrq4nLCBcclxuICAgICAgICAgICAgJ3NpemVfeCc6IDIxLCBcclxuICAgICAgICAgICAgJ3NpemVfeSc6IDIxLCBcclxuICAgICAgICAgICAgJ3NpemVfeic6IGd2Lk1heF9vZl9NYXplX0Zsb29yXHJcbiAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbWF6ZWluZm8gPSBndi5tYXplaW5mb1ttYXplX25hbWVdO1xyXG4gICAgICAgIG1hemUgPSBuZXcgQ19NYXplKHtcclxuICAgICAgICAgICAgJ25hbWUnOiAgIG1hemVpbmZvLm1ibmFtZSwgXHJcbiAgICAgICAgICAgICdzaXplX3gnOiBtYXplaW5mby5zaXplX3gsIFxyXG4gICAgICAgICAgICAnc2l6ZV95JzogbWF6ZWluZm8uc2l6ZV95LCBcclxuICAgICAgICAgICAgJ3NpemVfeic6IG1hemVpbmZvLnNpemVfelxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXplLmdldF96X21heCgpOyBpKyspIHtcclxuICAgICAgICBtYXplLmNyZWF0ZV9tYXplKGkpO1xyXG4gICAgfSBcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbWF6ZS5nZXRfel9tYXgoKTsgaSsrKSB7XHJcbiAgICAgICAgbWF6ZS5jcmVhdGVfc3RhaXIoaSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwb3MgPSBtYXplLmNyZWF0ZV9zdGFpcigwKTtcclxuICAgIHJldHVybiBbbWF6ZSwgcG9zXTtcclxufVxyXG5cclxuLy8g6L+35a6u5o6i57SiIOaWsOimj+OCsuODvOODoOeUqOOBruaaq+WumueJiOWHpue9ruOAguOBneOBruS6jFxyXG5mdW5jdGlvbiBjcmVhdGVfaHJlcygpOiBDX0hlcm9bXSB7XHJcbiAgICBjb25zdCBocmVzOiBDX0hlcm9bXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMzsgaSsrKSB7XHJcbiAgICAgICAgaHJlcy5wdXNoKG5ldyBDX0hlcm8oKS5yYW5kb21fbWFrZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaHJlcztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlX3RlYW0obWF6ZTogQ19NYXplLCBwb3M6IENfUG9pbnREaXIpOiBDX1RlYW0ge1xyXG4vKlxyXG4gICAgJHggPSAyICogcmFuZG9tX2ludCgwLCAoKCRtYXplLT5nZXRfc2l6ZV94KCkgLSAxKSAvIDIpIC0gMSkgKyAxO1xyXG4gICAgJHkgPSAyICogcmFuZG9tX2ludCgwLCAoKCRtYXplLT5nZXRfc2l6ZV95KCkgLSAxKSAvIDIpIC0gMSkgKyAxO1xyXG4gICAgJHogPSAwOyAgLy8gICAgJHogPSAxICogcmFuZG9tX2ludCgwLCAgKCRndi0+bWF6ZS0+Z2V0X3NpemVfeigpIC0gMSkpO1xyXG5cclxuICAgICRkID0gcmFuZG9tX2ludCgwLCBEaXJlY3Q6Ok1BWCk7XHJcbiovXHJcbmNvbnN0IHRlYW0gPSBuZXcgQ19UZWFtKCk7XHJcbmNvbnN0IGxvYyAgPSBuZXcgQ19Nb3ZhYmxlUG9pbnQoKS5kZWNvZGUoe1xyXG4gICAgICAgICdraW5kJyAgIDogJ01hemUnLFxyXG4gICAgICAgICduYW1lJyAgIDogIG1hemUuZ2V0X25hbWUoKSxcclxuICAgICAgICAnbG9jX3VpZCc6ICBtYXplLnVpZCgpLFxyXG4gICAgICAgICdsb2NfcG9zJzogIHBvcyxcclxuICAgICAgICAndGVhbV91aWQnOiB0ZWFtLnVpZCgpLFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgJ2xvY19wb3MnID0+IFtcclxuICAgICAgICAgICAgJ3gnICAgPT4gJHgsXHJcbiAgICAgICAgICAgICd5JyAgID0+ICR5LFxyXG4gICAgICAgICAgICAneicgICA9PiAkeixcclxuICAgICAgICAgICAgJ2QnICAgPT4gJGQsXHJcbiAgICAgICAgXSxcclxuKi9cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB0ZWFtLnNldF9wcnAoeyduYW1lJzogJ+OBsuOCiOOBk+OBleOCk+ODgeODvOODoCd9KTtcclxuICAgIHRlYW0uc2V0X2xvYyhsb2MpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMzsgaSsrKSB7XHJcbiAgICAgICAgdGVhbS5hZGRfaGVybyhuZXcgQ19IZXJvKCkucmFuZG9tX21ha2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRlYW07XHJcbn1cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDliJ3jgIDmnJ/jgIDoqK3jgIDlrpogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmZ1bmN0aW9uIGluaXQob2JqOiBJX0dsb2JhbEFyZ3VtZW50cyk6IHZvaWQge1xyXG4gICAgZ3YgPSBuZXcgQ19HbG9iYWxWYXIoKTtcclxuICAgIGdhID0gbmV3IENfR2xvYmFsQXJndW1lbnRzKG9iaik7XHJcbiAgICByZXR1cm47XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy9cclxuLy8vLy8gICAgIOOCr+ODqeOCueWuo+iogFxyXG4vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyDlpKfln5/lpInmlbDjga7oqK3lrppcclxuY2xhc3MgQ19HbG9iYWxWYXIge1xyXG4gICAgcHVibGljIG1lczogQ19Ec3BNZXNzYWdlO1xyXG5cclxuICAgIHB1YmxpYyBtYXplaW5mbzoge1ttYXplX25hbWU6IHN0cmluZ106IENfTWF6ZUluZm99ID0ge307XHJcbi8vICAgIHB1YmxpYyBtYXplOiAgICAgQ19NYXplO1xyXG4gICAgcHVibGljIHRlYW06ICAgICBDX1RlYW07XHJcbiAgICBwdWJsaWMgaGVyb2VzOiAgIENfSGVyb1tdID0gW107XHJcblxyXG4gICAgcHVibGljIE1hemVfc2l6ZV94ICAgICAgID0gMjE7XHJcbiAgICBwdWJsaWMgTWF6ZV9zaXplX3kgICAgICAgPSAyMTtcclxuICAgIHB1YmxpYyBMaW1pdF9vZl9yb29tICAgICA9IDU7XHJcbiAgICBwdWJsaWMgTWF4X3NpemVfb2Zfcm9vbSAgPSAzO1xyXG4gICAgcHVibGljIE1heF9vZl9NYXplX0Zsb29yID0gMztcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tZXMgPSBuZXcgQ19Ec3BNZXNzYWdlKCAvKiBpc0hUTUwgPSAqLyBmYWxzZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hemVpbmZvID0gQ19NYXplSW5mby5nZXRfdGJsX2FsbCgpOyBcclxuICAgICAgICBmb3IgKGNvbnN0IG1pIG9mIG1hemVpbmZvKSB0aGlzLm1hemVpbmZvW21pLm5hbWVdID0gbWk7IFxyXG4vKlxyXG4gICAgICAgIGNvbnN0IFtyc2x0LCBtYXplaW5mb10gID0gQ19NYXplSW5mby5nZXRfdGJsX2FsbCgpO1xyXG4gICAgICAgIHRoaXMubWF6ZWluZm8gPSAocnNsdCAhPT0gdW5kZWZpbmVkKSA/IG1hemVpbmZvIDogW107IFxyXG4qL1xyXG4vKlxyXG4gICAgICAgIHRoaXMubWF6ZSAgICAgICAgPSBuZXcgQ19NYXplKCkuY3JlYXRlX21ha2Uoe1xyXG4gICAgICAgICAgICBzaXplX3g6ICAgIHRoaXMuTWF6ZV9zaXplX3gsXHJcbiAgICAgICAgICAgIHNpemVfeTogICAgdGhpcy5NYXplX3NpemVfeSxcclxuICAgICAgICAgICAgc2l6ZV96OiAgICB0aGlzLk1heF9vZl9NYXplX0Zsb29yLCBcclxuICAgICAgICAgICAgZmlsbF9raW5kOiBUX016S2luZC5FbXB0eSxcclxuICAgICAgICAgICAgbWF4X3Jvb206ICB0aGlzLkxpbWl0X29mX3Jvb20sXHJcbiAgICAgICAgICAgIHJvb21fc2l6ZTogdGhpcy5NYXhfc2l6ZV9vZl9yb29tLFxyXG4gICAgfSk7XHJcbiovXHJcbiAgICAgICAgdGhpcy50ZWFtICAgICAgICA9ICBuZXcgQ19UZWFtKHtuYW1lOiAnTmV3IFRlYW0nLCB4OjEsIHk6MSwgejoxLCBkOlRfRGlyZWN0aW9uLk59KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIFBPU1TlvJXmlbDjga7oqK3lrppcclxuY2xhc3MgQ19HbG9iYWxBcmd1bWVudHMge1xyXG4gICAgcHVibGljIG1vZGU6ICAgICAgc3RyaW5nO1xyXG4gICAgcHVibGljIHBpZDogICAgICAgbnVtYmVyICAgPSAgMTtcclxuICAgIHB1YmxpYyBtYXplX25hbWU6IHN0cmluZyAgID0gJyc7XHJcblxyXG4vKlxyXG4gICAgcHVibGljIHRlYW1fSlNPTjogc3RyaW5nICAgPSAnJztcclxuICAgIHB1YmxpYyBtYXplX0pTT046IHN0cmluZyAgID0gJyc7XHJcbiovXHJcblxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvYmo6IElfR2xvYmFsQXJndW1lbnRzKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlICAgICAgPSBvYmo/Lm1vZGUgPz8gJ3Vua25vd24nO1xyXG4gICAgICAgIHRoaXMucGlkICAgICAgID0gb2JqPy5waWQgICE9PSB1bmRlZmluZWQgJiYgIWlzTmFOKG9iai5waWQpID8gTnVtYmVyKG9iai5waWQpIDogMTtcclxuICAgICAgICB0aGlzLm1hemVfbmFtZSA9IG9iaj8ubWF6ZV9uYW1lID8/ICcnO1xyXG4vKlxyXG4gICAgICAgIHRoaXMudGVhbV9KU09OID0gb2JqPy50ZWFtICAgICAgPz8gJyc7XHJcbiAgICAgICAgdGhpcy5tYXplX0pTT04gPSBvYmo/Lm1hemUgICAgICA/PyAnJztcclxuKi9cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbnRlcmZhY2UgfSBmcm9tICdyZWFkbGluZSc7XHJcbmltcG9ydCB7bmV3R3VsZCwgYWxsSHJlc30gZnJvbSAnLi4vbGliL19KU09OX21haV9ndWxkJ1xyXG5pbXBvcnQgY3JlYXRlRXJyb3IgIGZyb20gJ2h0dHAtZXJyb3JzJztcclxuXHJcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG52YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbi8qIEdFVCB1c2VycyBsaXN0aW5nLiAqL1xyXG5yb3V0ZXIuZ2V0ICgnLycsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSBtYWlHdWxkJyk7XHJcbn0pO1xyXG5cclxucm91dGVyLnBvc3QoJy9uZXdHdWxkJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgdHJ5IHtcclxuLy9kZWJ1ZyAgICBmb3IgKGNvbnN0IGtleSBpbiByZXEuYm9keSkgY29uc29sZS5lcnJvcihgcmVxLiR7a2V5fTogJHtyZXEuYm9keVtrZXldfWApO1xyXG5cclxuICAgIGNvbnN0IHJldCA9IG5ld0d1bGQocmVxLmJvZHkpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApO1xyXG4gICAgcmVzLnNlbmQoSlNPTi5zdHJpbmdpZnkocmV0LCBudWxsLCBcIlxcdFwiKSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgbmV3R2FtZSBQT1NUIGVycm9yOiAke2Vycn1gKTtcclxuICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XHJcbiAgfVxyXG59KTtcclxucm91dGVyLmdldCAoJy9uZXdHdWxkJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIE5ldyBHYW1lIFRvIEd1bGQgb2YgbWFpJyk7XHJcbn0pO1xyXG5cclxucm91dGVyLnBvc3QoJy9hbGxIcmVzJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgdHJ5IHtcclxuLy9kZWJ1ZyAgICBmb3IgKGNvbnN0IGtleSBpbiByZXEuYm9keSkgY29uc29sZS5lcnJvcihgcmVxLiR7a2V5fTogJHtyZXEuYm9keVtrZXldfWApO1xyXG5cclxuICAgIGNvbnN0IHJldCA9IGFsbEhyZXMocmVxLmJvZHkpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApO1xyXG4gICAgcmVzLnNlbmQoSlNPTi5zdHJpbmdpZnkocmV0LCBudWxsLCBcIlxcdFwiKSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgbmV3SHJlcyBQT1NUIGVycm9yOiAke2Vycn1gKTtcclxuICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbnJvdXRlci5nZXQgKCcvYWxsSHJlcycsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggR2V0dGluZyBBbGwgSHJlcyBkYXRhIG9mIG1haScpO1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xyXG4iLCJpbXBvcnQgeyBpbmZvLCBsb2FkLCBzYXZlIH0gZnJvbSAnLi4vbGliL19KU09OX21haV9sZHN2J1xyXG5pbXBvcnQgeyB0ZXN0IH0gICAgICAgICAgICAgZnJvbSAnLi4vbGliL19KU09OX21haV9sZHN2X3Rlc3QnXHJcbmltcG9ydCBjcmVhdGVFcnJvciAgICAgICAgICBmcm9tICdodHRwLWVycm9ycyc7XHJcblxyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG4vKiBHRVQgdXNlcnMgbGlzdGluZy4gKi9cclxucm91dGVyLmdldCAoJy8nLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcclxuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgbWFpTG9hZFNhdmUnKTtcclxufSk7XHJcblxyXG4vKlxyXG4qKiAgU2VuZCBTYXZlSW5mb1xyXG4qL1xyXG5yb3V0ZXIucG9zdCgnL19pbmZvJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbi8vZGVidWcgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXEuYm9keSkgY29uc29sZS5lcnJvcihgcmVxLiR7a2V5fTogJHtyZXEuYm9keVtrZXldfWApO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcnNsdCA9IGF3YWl0IGluZm8ocmVxLmJvZHkpO1xyXG4gICAgaWYgKHJzbHQuZWNvZGUgIT09IDApIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgKioqIGVycm9yOiAke3JzbHQuZWNvZGV9OiAke3JzbHQuZW1zZ30gKioqYCk7XHJcbiAgICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XHJcbiAgICB9XHJcbiAgICByZXMuc3RhdHVzKDIwMCk7XHJcbiAgICByZXMuc2VuZChKU09OLnN0cmluZ2lmeShyc2x0LCBudWxsLCBcIlxcdFwiKSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgTGRTdiBpbmZvIFBPU1QgZXJyb3I6ICR7ZXJyfWApO1xyXG4gICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcclxuICB9XHJcbn0pO1xyXG5yb3V0ZXIuZ2V0ICgnL19pbmZvJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIG1haUxkU3YgaW5mbycpO1xyXG59KTtcclxuXHJcblxyXG4vKlxyXG4qKiAgU2VuZCBMYW9kRGF0YVxyXG4qL1xyXG5yb3V0ZXIucG9zdCgnL19sb2FkJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbi8vZGVidWcgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXEuYm9keSkgY29uc29sZS5lcnJvcihgcmVxLiR7a2V5fTogJHtyZXEuYm9keVtrZXldfWApO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcnNsdCA9IGF3YWl0IGxvYWQocmVxLmJvZHkpO1xyXG4gICAgaWYgKHJzbHQuZWNvZGUgIT09IDApIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgKioqIGVycm9yOiAke3JzbHQuZWNvZGV9OiAke3JzbHQuZW1zZ30gKioqYCk7XHJcbiAgICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XHJcbiAgICB9XHJcbiAgICByZXMuc3RhdHVzKDIwMCk7XHJcbiAgICByZXMuc2VuZChKU09OLnN0cmluZ2lmeShyc2x0LCBudWxsLCBcIlxcdFwiKSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgTGRTdiBsb2FkIFBPU1QgZXJyb3I6ICR7ZXJyfWApO1xyXG4gICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcclxuICB9XHJcbn0pO1xyXG5yb3V0ZXIuZ2V0ICgnL19sb2FkJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIG1haUxkU3YgbG9hZCcpO1xyXG59KTtcclxuXHJcblxyXG4vKlxyXG4qKiAgU2VuZCBTYXZlRGF0YVxyXG4qL1xyXG5yb3V0ZXIucG9zdCgnL19zYXZlJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbi8vZGVidWcgICAgZm9yIChjb25zdCBrZXkgaW4gcmVxLmJvZHkpIGNvbnNvbGUuZXJyb3IoYHJlcS4ke2tleX06ICR7cmVxLmJvZHlba2V5XX1gKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJzbHQgPSBhd2FpdCBzYXZlKHJlcS5ib2R5KTtcclxuICAgIGlmIChyc2x0LmVjb2RlICE9PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYCoqKiBlcnJvcjogJHtyc2x0LmVjb2RlfTogJHtyc2x0LmVtc2d9ICoqKmApO1xyXG4gICAgICBuZXh0KGNyZWF0ZUVycm9yKDQwNikpO1xyXG4gICAgfVxyXG4gICAgcmVzLnN0YXR1cygyMDApO1xyXG4gICAgcmVzLnNlbmQoSlNPTi5zdHJpbmdpZnkocnNsdCwgbnVsbCwgXCJcXHRcIikpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coYExkU3Ygc2F2ZSBQT1NUIGVycm9yOiAke2Vycn1gKTtcclxuICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XHJcbiAgfVxyXG59KTtcclxucm91dGVyLmdldCAoJy9fc2F2ZScsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSBtYWlMZFN2IHNhdmUnKTtcclxufSk7XHJcblxyXG5cclxuXHJcbi8qXHJcbioqIEZvciBUZXN0IEZ1bmN0aW9uXHJcbiovXHJcbnJvdXRlci5wb3N0KCcvdGVzdCcsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHRyeSB7XHJcbi8vZGVidWcgICAgZm9yIChjb25zdCBrZXkgaW4gcmVxLmJvZHkpIGNvbnNvbGUuZXJyb3IoYHJlcS4ke2tleX06ICR7cmVxLmJvZHlba2V5XX1gKTtcclxuXHJcbiAgICBjb25zdCByc2x0ID0gYXdhaXQgdGVzdChyZXEuYm9keSk7XHJcbiAgICBpZiAocnNsdC5lY29kZSAhPT0gMCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGAqKiogZXJyb3I6ICR7cnNsdC5lY29kZX06ICR7cnNsdC5lbXNnfSAqKipgKTtcclxuICAgICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXMucmVuZGVyKCdwYWdlcy90ZXN0JywgcnNsdCk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGBuZXdMb2FkIFBPU1QgZXJyb3I6ICR7ZXJyfWApO1xyXG4gICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcclxuICB9XHJcbn0pO1xyXG5yb3V0ZXIuZ2V0ICgnL3Rlc3QnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcclxuICB0cnkge1xyXG4vL2RlYnVnICAgIGZvciAoY29uc3Qga2V5IGluIHJlcS5ib2R5KSBjb25zb2xlLmVycm9yKGByZXEuJHtrZXl9OiAke3JlcS5ib2R5W2tleV19YCk7XHJcblxyXG4gICAgcmVzLnJlbmRlcigncGFnZXMvdGVzdCcse3BpZDogLTF9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGBuZXdMb2FkIFBPU1QgZXJyb3I6ICR7ZXJyfWApO1xyXG4gICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcclxuICB9XHJcbi8vICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgTG9hZCBUZXN0ICBvZiBtYWknKTtcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcclxuIiwiaW1wb3J0IHsgYWxsTWF6ZSwgZ2V0TWF6ZSwgbmV3TWF6ZSB9ICBmcm9tICcuLi9saWIvX0pTT05fbWFpX21hemUnO1xyXG5pbXBvcnQgY3JlYXRlRXJyb3IgIGZyb20gJ2h0dHAtZXJyb3JzJztcclxuXHJcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG52YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbi8qIEdFVCB1c2VycyBsaXN0aW5nLiAqL1xyXG5yb3V0ZXIuZ2V0ICgnLycsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSBtYWlNYXplJyk7XHJcbn0pO1xyXG5cclxucm91dGVyLnBvc3QoJy9uZXdNYXplJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgdHJ5IHtcclxuLy9kZWJ1ZyAgICBmb3IgKGNvbnN0IGtleSBpbiByZXEuYm9keSkgY29uc29sZS5lcnJvcihgcmVxLiR7a2V5fTogJHtyZXEuYm9keVtrZXldfWApO1xyXG5cclxuICAgIGNvbnN0IHJldCA9IG5ld01hemUocmVxLmJvZHkpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApO1xyXG4gICAgcmVzLnNlbmQoSlNPTi5zdHJpbmdpZnkocmV0LCBudWxsLCBcIlxcdFwiKSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgbmV3R2FtZSBQT1NUIGVycm9yOiAke2Vycn1gKTtcclxuICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbnJvdXRlci5nZXQgKCcvbmV3TWF6ZScsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSBOZXcgR2FtZSBUbyBNYXplIG9mIG1haScpO1xyXG59KTtcclxuXHJcbnJvdXRlci5wb3N0KCcvZ2V0TWF6ZScsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHRyeSB7XHJcbi8vZGVidWcgICAgZm9yIChjb25zdCBrZXkgaW4gcmVxLmJvZHkpIGNvbnNvbGUuZXJyb3IoYHJlcS4ke2tleX06ICR7cmVxLmJvZHlba2V5XX1gKTtcclxuXHJcbiAgICBjb25zdCByZXQgPSBnZXRNYXplKHJlcS5ib2R5KTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKTtcclxuICAgIHJlcy5zZW5kKEpTT04uc3RyaW5naWZ5KHJldCwgbnVsbCwgXCJcXHRcIikpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coYG5ld01hemUgUE9TVCBlcnJvcjogJHtlcnJ9YCk7XHJcbiAgICBuZXh0KGNyZWF0ZUVycm9yKDQwNikpO1xyXG4gIH1cclxufSk7XHJcblxyXG5yb3V0ZXIuZ2V0ICgnL2dldE1hemUnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcclxuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIEdldHRpbmcgTmV3IE1hemUgZGF0YSBvZiBtYWknKTtcclxufSk7XHJcblxyXG5cclxucm91dGVyLnBvc3QoJy9hbGxNYXplJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgdHJ5IHtcclxuLy9kZWJ1ZyAgICBmb3IgKGNvbnN0IGtleSBpbiByZXEuYm9keSkgY29uc29sZS5lcnJvcihgcmVxLiR7a2V5fTogJHtyZXEuYm9keVtrZXldfWApO1xyXG5cclxuICAgIGNvbnN0IHJldCA9IGFsbE1hemUocmVxLmJvZHkpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApO1xyXG4gICAgcmVzLnNlbmQoSlNPTi5zdHJpbmdpZnkocmV0LCBudWxsLCBcIlxcdFwiKSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgbWF6ZUluZm8gUE9TVCBlcnJvcjogJHtlcnJ9YCk7XHJcbiAgICBuZXh0KGNyZWF0ZUVycm9yKDQwNikpO1xyXG4gIH1cclxufSk7XHJcblxyXG5yb3V0ZXIuZ2V0ICgnL2FsbE1hemUnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcclxuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIEFsbCBNYXplIEluZm9tYXRpb24gb2YgbWFpJyk7XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5cclxudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbnZhciBtYWlHdWxkUm91dGVyID0gcmVxdWlyZSgnLi9tYWlHdWxkJyk7XHJcbnZhciBtYWlNYXplUm91dGVyID0gcmVxdWlyZSgnLi9tYWlNYXplJyk7XHJcbnZhciBtYWlMZFN2Um91dGVyID0gcmVxdWlyZSgnLi9tYWlMZFN2Jyk7XHJcblxyXG4vLyByb3V0ZXIgc2V0dXBcclxucm91dGVyLnVzZSgnL2d1bGQnLCAgIG1haUd1bGRSb3V0ZXIpO1xyXG5yb3V0ZXIudXNlKCcvbWF6ZScsICAgbWFpTWF6ZVJvdXRlcik7XHJcbnJvdXRlci51c2UoJy9sZHN2JywgICBtYWlMZFN2Um91dGVyKTtcclxuXHJcbi8qIEdFVCB1c2VycyBsaXN0aW5nLiAqL1xyXG5yb3V0ZXIuZ2V0KCcvJywgZnVuY3Rpb24ocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pIHtcclxuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgbWFpZXgnKTtcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbnZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxuLyogR0VUIHVzZXJzIGxpc3RpbmcuICovXHJcbnJvdXRlci5nZXQoJy8nLCBmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xyXG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSB1c2VyIHJlc291cmNlJyk7XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwLWVycm9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXlzcWwyL3Byb21pc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9