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
        //        this.is_alive   = true;
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
    C_Hero.prototype.is_alive = function () {
        var _a, _b;
        var hp = (_a = this.abi_p.now.get('xp')) !== null && _a !== void 0 ? _a : 0;
        var hd = (_b = this.abi_p.now.get('xd')) !== null && _b !== void 0 ? _b : 0;
        return hp - hd > 0;
    };
    C_Hero.prototype.hp_damage = function (dmg) {
        var _a, _b;
        var xp_now = (_a = this.abi_p.now.get('xp')) !== null && _a !== void 0 ? _a : 0;
        var xd_now = (_b = this.abi_p.now.get('xd')) !== null && _b !== void 0 ? _b : 0;
        xd_now += dmg;
        var d = xd_now > xp_now ? xp_now : xd_now;
        this.abi_p.now.set('xd', d);
        return d;
    };
    C_Hero.prototype.hp_heal = function (heal) {
        var _a;
        var xd_now = (_a = this.abi_p.now.get('xd')) !== null && _a !== void 0 ? _a : 0;
        xd_now -= heal;
        var d = xd_now < 0 ? 0 : xd_now;
        this.abi_p.now.set('xd', d);
        return d;
    };
    C_Hero.prototype.copy_bsc_to_ttl = function () {
        this.abi_p.ttl.decode(this.abi_p.bsc.encode());
        this.abi_m.ttl.decode(this.abi_m.bsc.encode());
    };
    C_Hero.prototype.copy_ttl_to_now = function () {
        this.abi_p.now.decode(this.abi_p.ttl.encode());
        this.abi_m.now.decode(this.abi_m.ttl.encode());
    };
    C_Hero.prototype.random_make = function (helo_level) {
        if (helo_level === void 0) { helo_level = 0; }
        this.my_id = 0; // --Hero::$max_id;
        this.my_name = "冒険者 " + (0, F_Rand_1._random_str)(5);
        this.sex = (0, F_Rand_1._irand)(0, 1);
        this.age = (0, F_Rand_1._irand)(15, 25);
        this.state = 0;
        this.lv = helo_level;
        this.gold = (0, F_Rand_1._irand)(500, 1000);
        this.val = {
            skp: { ttl: 0, now: 0 },
            exp: { ttl: 0, now: 0 },
            'nxe': 1000
        };
        var abi_p_bsc = this.abi_p.bsc;
        abi_p_bsc.random_make(helo_level);
        var abi_m_bsc = this.abi_m.bsc;
        abi_m_bsc.random_make(helo_level);
        this.copy_bsc_to_ttl();
        this.copy_ttl_to_now();
        return this;
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
            abi_p_ttl: this.abi_p.ttl.encode(),
            abi_m_ttl: this.abi_m.ttl.encode(),
            abi_p_now: this.abi_p.now.encode(),
            abi_m_now: this.abi_m.now.encode(),
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
        //        if (a.goods   !== undefined) this.goods.decode(a.goods);
        if (a.val !== undefined) {
            this.__decode_val(this.val, a.val);
        }
        if (a.abi_p_bsc !== undefined)
            this.abi_p.bsc.decode(a.abi_p_bsc);
        if (a.abi_m_bsc !== undefined)
            this.abi_m.bsc.decode(a.abi_m_bsc);
        if (a.abi_p_ttl !== undefined)
            this.abi_p.ttl.decode(a.abi_p_ttl);
        if (a.abi_m_ttl !== undefined)
            this.abi_m.ttl.decode(a.abi_m_ttl);
        if (a.abi_p_now !== undefined)
            this.abi_p.now.decode(a.abi_p_now);
        if (a.abi_m_now !== undefined)
            this.abi_m.now.decode(a.abi_m_now);
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
var F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "../maicl/src/d_utl/F_Rand.ts");
var C_HeroAbility = /** @class */ (function () {
    function C_HeroAbility(a) {
        this.v = {
            xp: 0, // p:HP、m:MP
            xd: 0, // 上記のダメージ量
            // 以下、戦闘能力の基本値(p:物理、m:魔法)。ヒーローレベルやステータスアップで加算 
            atk: 0, // 攻撃値
            def: 0, // 防御値
            quc: 0, // 瞬発力
            cnc: 0, // 機運値(チャンス)
            // 以下、いわゆるステータス。上記の計算に影響。ヒーローレベルやステータスアップで加算
            str: 0, // 根性。攻撃/防御力にも影響。HP/MP回復やアイテムの最大所持重量にボーナス
            pwr: 0, // 基本的強さ。攻撃力に影響
            vit: 0, // 耐久力。HP/MPの最大値や防御力、回復値に影響を与える
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
    C_HeroAbility.prototype.get = function (key) {
        if (!(key in this.v))
            return undefined;
        return this.v[key];
    };
    C_HeroAbility.prototype.set = function (key, val) {
        if (!(key in this.v))
            return undefined;
        this.v[key] = val;
        return this.v[key];
    };
    C_HeroAbility.prototype.setAny = function (key, s) {
        for (var idx in s) {
            if (!(idx in this.v))
                continue;
            this.v[key] = s[key];
        }
    };
    C_HeroAbility.prototype.add = function (a) {
        for (var key in a) {
            this.v[key] += a[key];
        }
    };
    C_HeroAbility.prototype.calc_xp = function () {
        this.v.xp = Math.ceil(20 * this.v.str + 20 * this.v.vit + 5 * this.v.tec + 5 * this.v.luk);
    };
    C_HeroAbility.prototype.calc_el = function () {
        this.v.atk = Math.ceil(2 * this.v.str + 2 * this.v.pwr + 1 * this.v.tec);
        this.v.def = Math.ceil(2 * this.v.str + 2 * this.v.vit + 1 * this.v.tec);
        this.v.quc = Math.ceil(2 * this.v.dex + 2 * this.v.agi + 1 * this.v.tec);
        this.v.cnc = Math.ceil(3 * this.v.luk + 2 * this.v.tec);
    };
    C_HeroAbility.prototype.random_make = function (helo_level) {
        if (helo_level === void 0) { helo_level = 0; }
        var hl = helo_level + 1; // ヒーローレベルの初期値
        this.v.str = (0, F_Rand_1._inrand)(5, 20, 2.0) * hl;
        this.v.pwr = (0, F_Rand_1._inrand)(5, 20, 2.0) * hl;
        this.v.vit = (0, F_Rand_1._inrand)(5, 20, 2.0) * hl;
        this.v.dex = (0, F_Rand_1._inrand)(5, 20, 2.0) * hl;
        this.v.agi = (0, F_Rand_1._inrand)(5, 20, 2.0) * hl;
        this.v.tec = (0, F_Rand_1._inrand)(5, 20, 2.0) * hl;
        this.v.luk = (0, F_Rand_1._inrand)(5, 20, 2.0) * hl;
        this.v.xd = 0;
        this.calc_xp();
        this.calc_el();
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
        var _a, _b, _c;
        var layer = -1;
        var obj = null;
        for (var id in this.objs) {
            var exist = this.objs[id];
            if (exist.view() === undefined)
                continue;
            if (exist.within(p) && ((_a = exist.view()) === null || _a === void 0 ? void 0 : _a.letter()) !== null) {
                var exist_layer = (_c = (_b = exist.view()) === null || _b === void 0 ? void 0 : _b.layer()) !== null && _c !== void 0 ? _c : -99;
                if (exist_layer > layer) {
                    layer = exist_layer;
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
    C_Maze.prototype.is_floor_cleared = function (clr_pos) {
        return this.unclear[clr_pos.z] < 1;
    };
    C_Maze.prototype.is_maze_cleared = function () {
        for (var _i = 0, _a = this.unclear; _i < _a.length; _i++) {
            var clr = _a[_i];
            if (clr > 0)
                return false;
        }
        return true;
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
    C_MazeCell.prototype.drow2D = function (rect) {
        var _a;
        (_a = this.my_obj.view()) === null || _a === void 0 ? void 0 : _a.drow2D(rect);
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
        j.obj.h_w_dmg = 100;
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
        j.obj.h_w_dmg = 100;
        j.obj.pos = { x: j.x, y: j.y, z: j.z };
        j.obj.view = {
            layer: 0, letter: '謎',
            show3D: '0',
            pad_t: 0.0, pad_d: 0.0, pad_s: 0.0,
            col_f: '', col_b: '', col_s: '', col_t: '', col_d: '',
            col_l: '', col_2: '', col_L: '',
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
        j.obj.h_w_dmg = 0;
        j.obj.pos = { x: j.x, y: j.y, z: j.z };
        j.obj.view = {
            layer: 0, letter: '無',
            show3D: '0',
            pad_t: 0.0, pad_d: 0.0, pad_s: 0.0,
            col_f: '', col_b: '', col_s: '', col_t: '', col_d: '',
            col_l: '', col_2: '', col_L: '',
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
        j.obj.h_w_dmg = 0;
        j.obj.pos = { x: j.x, y: j.y, z: j.z };
        j.obj.view = {
            layer: 0, letter: '　',
            show3D: '1',
            pad_t: 0.0, pad_d: 0.0, pad_s: 0.0,
            col_f: '', col_b: '', col_s: '', col_t: '#6666ff', col_d: '',
            col_l: '#9999ff', col_2: '#3333ff', col_L: '#6666ff',
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
        j.obj.h_w_dmg = 0;
        j.obj.pos = { x: j.x, y: j.y, z: j.z };
        j.obj.view = {
            layer: 0, letter: '・',
            show3D: '1',
            pad_t: 0.0, pad_d: 0.0, pad_s: 0.0,
            col_f: '', col_b: '', col_s: '', col_t: '#66ffff', col_d: '',
            col_l: '#9999ff', col_2: '#66ffff', col_L: '#6666ff',
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
        j.obj.h_w_dmg = 10;
        j.obj.pos = { x: j.x, y: j.y, z: j.z };
        j.obj.view = {
            layer: 0, letter: '＃',
            show3D: '1',
            pad_t: 0.0, pad_d: 0.0, pad_s: 0.0,
            col_f: '#00ff00', col_b: '', col_s: '#00ee00', col_t: '', col_d: '',
            col_l: '#0000ff', col_2: '#00cc00', col_L: '#6666ff',
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
        j.obj.h_w_dmg = 0;
        j.obj.pos = { x: j.x, y: j.y, z: j.z };
        j.obj.view = {
            layer: 0, letter: '上',
            show3D: '1',
            pad_t: 0.0, pad_d: 0.0, pad_s: 0.0,
            col_f: '', col_b: '', col_s: '', col_t: '', col_d: '#ffffcc',
            col_l: '#0000ff', col_2: '#ffff66', col_L: '#6666ff',
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
        j.obj.h_w_dmg = 0;
        j.obj.pos = { x: j.x, y: j.y, z: j.z };
        j.obj.view = {
            layer: 0, letter: '下',
            show3D: '1',
            pad_t: 0.0, pad_d: 0.0, pad_s: 0.0,
            col_f: '', col_b: '', col_s: '', col_t: '#ffffcc', col_d: '',
            col_l: '#0000ff', col_2: '#ffff66', col_L: '#6666ff',
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
        j.obj.h_w_dmg = 0;
        j.obj.pos = { x: j.x, y: j.y, z: j.z };
        j.obj.view = {
            layer: 0, letter: '段',
            show3D: '1',
            pad_t: 0.0, pad_d: 0.0, pad_s: 0.0,
            col_f: '', col_b: '', col_s: '', col_t: '#ffffcc', col_d: '#ffffcc',
            col_l: '#0000ff', col_2: '#ffff66', col_L: '#6666ff',
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
        this.h_w_dmg = 0;
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
        if (j.h_w_dmg !== undefined)
            this.h_w_dmg = j.h_w_dmg;
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
    C_MazeObj.prototype.hitWallDmg = function () {
        return this.h_w_dmg;
    };
    C_MazeObj.prototype.encode = function () {
        var _a, _b;
        return {
            uniq_id: this.uniq_id,
            clname: this.clname,
            pos: this.pos.encode(),
            view: (_b = (_a = this.my_view) === null || _a === void 0 ? void 0 : _a.encode()) !== null && _b !== void 0 ? _b : {},
            can_thr: this.can_thr ? '1' : '0',
            h_w_dmg: this.h_w_dmg,
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
        this.my_col_L = '#9999ff';
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
        if (j.col_L !== undefined)
            this.my_col_L = j.col_L !== '' ? j.col_L : null;
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
    C_MazeObjView.prototype.col_L = function () { return this.my_col_L; };
    C_MazeObjView.prototype.set_col_2 = function (col_2) { return this.my_col_2 = col_2; };
    C_MazeObjView.prototype.set_col_L = function (col_L) { return this.my_col_L = col_L; };
    C_MazeObjView.prototype.drow2D = function (rect) {
        var _a, _b;
        drow2D_cell(rect, (_a = this.col_2()) !== null && _a !== void 0 ? _a : '#cccccc', (_b = this.col_L()) !== null && _b !== void 0 ? _b : '#9999ff');
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
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
            col_L: (_j = this.my_col_L) !== null && _j !== void 0 ? _j : '',
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
    var con = C_MazeObjView.get_context2D(); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
    C_Team.prototype.hitWallDmg = function () { return 0; };
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
    C_CurrentTeamView.prototype.col_L = function () { return null; };
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
        con.fillStyle = "#ff3333";
        con.fill();
        // Draw the arrow
        switch (this.my_team.walk().get_d()) {
            case C_PointDir_1.T_Direction.N: // ↑
                this.drow2D_arrow({ x: (r.tl.x + r.tr.x) / 2, y: r.tl.y }, r.dl, r.dr);
                break;
            case C_PointDir_1.T_Direction.E: // →
                this.drow2D_arrow({ y: (r.tr.y + r.dr.y) / 2, x: r.tr.x }, r.tl, r.dl);
                break;
            case C_PointDir_1.T_Direction.S: // ↓
                this.drow2D_arrow({ x: (r.dl.x + r.dr.x) / 2, y: r.dl.y }, r.tr, r.tl);
                break;
            case C_PointDir_1.T_Direction.W: // ←
                this.drow2D_arrow({ y: (r.tl.y + r.dl.y) / 2, x: r.tl.x }, r.dr, r.tr);
                break;
        }
    };
    C_CurrentTeamView.prototype.drow2D_arrow = function (top, left, right) {
        var con = C_MazeObjView_1.C_MazeObjView.get_context2D();
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
                        get_heroes_SQL = "\n            SELECT \tid, save_id, uniq_id, join_uid, \n                    name, sex, age, gold, state, lv,  \n                    skp_ttl, skp_now, exp_ttl, exp_now, nxe, \n                    abi_p_bsc, abi_m_bsc, \n                    abi_p_ttl, abi_m_ttl, \n                    abi_p_now, abi_m_now \n            FROM    tbl_hero\n            WHERE   id = :id\n        ";
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
                        get_heroes_SQL = "\n            SELECT \tid, save_id, uniq_id, join_uid, \n                    name, sex, age, gold, state, lv,  \n                    skp_ttl, skp_now, exp_ttl, exp_now, nxe, \n                    abi_p_bsc, abi_m_bsc, \n                    abi_p_ttl, abi_m_ttl, \n                    abi_p_now, abi_m_now \n            FROM    tbl_hero\n            WHERE   save_id = :save_id AND join_uid = :join_uid\n        ";
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
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
            return __generator(this, function (_2) {
                switch (_2.label) {
                    case 0:
                        insert_hero_SQL = "\n            INSERT INTO tbl_hero (\n                save_id, uniq_id, join_uid, \n                name, sex, age, gold, state, lv, \n                skp_ttl, skp_now, exp_ttl, exp_now, nxe,\n                abi_p_bsc, abi_m_bsc, \n                abi_p_ttl, abi_m_ttl, \n                abi_p_now, abi_m_now \n            )\n            VALUES ( \n                :save_id, :uniq_id, :join_uid, \n                :name, :sex, :age, :gold, :state, :lv, \n                :skp_ttl, :skp_now, :exp_ttl, :exp_now, :nxe,\n                :abi_p_bsc, :abi_m_bsc, \n                :abi_p_ttl, :abi_m_ttl, \n                :abi_p_now, :abi_m_now \n            )\n        ";
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
                            +', abi_p_ttl=' +(JSON.stringify(jsonHero.abi_p_ttl)??'???')
                            +', abi_m_ttl=' +(JSON.stringify(jsonHero.abi_m_ttl)??'???')
                            +', abi_p_now=' +(JSON.stringify(jsonHero.abi_p_now)??'???')
                            +', abi_m_now=' +(JSON.stringify(jsonHero.abi_m_now)??'???')
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
                                'abi_p_ttl': (_y = JSON.stringify(jsonHero.abi_p_ttl)) !== null && _y !== void 0 ? _y : '',
                                'abi_m_ttl': (_z = JSON.stringify(jsonHero.abi_m_ttl)) !== null && _z !== void 0 ? _z : '',
                                'abi_p_now': (_0 = JSON.stringify(jsonHero.abi_p_now)) !== null && _0 !== void 0 ? _0 : '',
                                'abi_m_now': (_1 = JSON.stringify(jsonHero.abi_m_now)) !== null && _1 !== void 0 ? _1 : '',
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
                            +', abi_p_ttl=' +(JSON.stringify(jsonHero.abi_p_ttl)??'???')
                            +', abi_m_ttl=' +(JSON.stringify(jsonHero.abi_m_ttl)??'???')
                            +', abi_p_now=' +(JSON.stringify(jsonHero.abi_p_now)??'???')
                            +', abi_m_now=' +(JSON.stringify(jsonHero.abi_m_now)??'???')
                        )
                        */
                        _2.sent();
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
            abi_p_ttl: JSON.parse(j.abi_p_ttl),
            abi_m_ttl: JSON.parse(j.abi_m_ttl),
            abi_p_now: JSON.parse(j.abi_p_now),
            abi_m_now: JSON.parse(j.abi_m_now),
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
            //            is_alive:  j.is_alive !== 0 ? "Y" : "N",
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
var C_DspMessage_1 = __webpack_require__(/*! @d_utl/C_DspMessage */ "../maicl/src/d_utl/C_DspMessage.ts");
// 位置と方向を表すクラス
var C_PointDir_1 = __webpack_require__(/*! @d_mdl/C_PointDir */ "../maicl/src/d_mdl/C_PointDir.ts");
// 滞在位置を示すクラス
var C_MovablePoint_1 = __webpack_require__(/*! @d_mdl/C_MovablePoint */ "../maicl/src/d_mdl/C_MovablePoint.ts");
// ギルドクラス全般
var C_Guild_1 = __webpack_require__(/*! @d_mdl/C_Guild */ "../maicl/src/d_mdl/C_Guild.ts");
// パーティークラス全般
var C_Team_1 = __webpack_require__(/*! @d_mdl/C_Team */ "../maicl/src/d_mdl/C_Team.ts");
// ヒーロークラス全般
var C_Hero_1 = __webpack_require__(/*! @d_mdl/C_Hero */ "../maicl/src/d_mdl/C_Hero.ts");
// セーブデータ(クライアントとの連携)全般
var C_SaveData_1 = __webpack_require__(/*! @d_mdl/C_SaveData */ "../maicl/src/d_mdl/C_SaveData.ts");
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
var C_DspMessage_1 = __webpack_require__(/*! @d_utl/C_DspMessage */ "../maicl/src/d_utl/C_DspMessage.ts");
// MySqlを扱うクラス
var promise_1 = __importDefault(__webpack_require__(/*! mysql2/promise */ "mysql2/promise"));
var C_SaveData_1 = __webpack_require__(/*! @d_mdl/C_SaveData */ "../maicl/src/d_mdl/C_SaveData.ts");
var C_SaveDataRDB_1 = __webpack_require__(/*! @d_rdb/C_SaveDataRDB */ "../maicl/src/d_rdb/C_SaveDataRDB.ts");
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
var C_DspMessage_1 = __webpack_require__(/*! @d_utl/C_DspMessage */ "../maicl/src/d_utl/C_DspMessage.ts");
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
var C_DspMessage_1 = __webpack_require__(/*! @d_utl/C_DspMessage */ "../maicl/src/d_utl/C_DspMessage.ts");
// 方向を表すクラス
var C_PointDir_1 = __webpack_require__(/*! @d_mdl/C_PointDir */ "../maicl/src/d_mdl/C_PointDir.ts");
// 位置・経路を表すクラス全般
var C_MovablePoint_1 = __webpack_require__(/*! @d_mdl/C_MovablePoint */ "../maicl/src/d_mdl/C_MovablePoint.ts");
// MAZE関係クラス全般
var C_Maze_1 = __webpack_require__(/*! @d_mdl/C_Maze */ "../maicl/src/d_mdl/C_Maze.ts");
var C_MazeInfo_1 = __webpack_require__(/*! @d_mdl/C_MazeInfo */ "../maicl/src/d_mdl/C_MazeInfo.ts"); // Maze作成のテンプレート情報
// パーティークラス全般
var C_Team_1 = __webpack_require__(/*! @d_mdl/C_Team */ "../maicl/src/d_mdl/C_Team.ts");
// ヒーロークラス全般
var C_Hero_1 = __webpack_require__(/*! @d_mdl/C_Hero */ "../maicl/src/d_mdl/C_Hero.ts");
// セーブデータ(クライアントとの連携)全般
var C_SaveData_1 = __webpack_require__(/*! @d_mdl/C_SaveData */ "../maicl/src/d_mdl/C_SaveData.ts");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7O0FBa0JiLDBDQVlDO0FBNUJELCtGQUFxRDtBQUVyRCxtRkFBaUQ7QUFDakQsMEZBQXdEO0FBYXhELFNBQWdCLGVBQWUsQ0FBQyxDQUF1Qjs7SUFDbkQsSUFBSSxDQUFDLEtBQUssU0FBUztRQUFFLE9BQU87SUFDNUIsS0FBSyxDQUFDLGFBQWE7VUFDYixjQUFjLEdBQUcsQ0FBQyxPQUFDLENBQUMsRUFBRSxtQ0FBVyxHQUFHLENBQUM7VUFDckMsY0FBYyxHQUFHLENBQUMsT0FBQyxDQUFDLE9BQU8sbUNBQU0sR0FBRyxDQUFDO1VBQ3JDLGNBQWMsR0FBRyxDQUFDLE9BQUMsQ0FBQyxPQUFPLG1DQUFNLEdBQUcsQ0FBQztVQUNyQyxjQUFjLEdBQUcsQ0FBQyxPQUFDLENBQUMsSUFBSSxtQ0FBUyxHQUFHLENBQUM7VUFDckMsY0FBYyxHQUFHLENBQUMsT0FBQyxDQUFDLElBQUksbUNBQVUsQ0FBQyxDQUFFO1FBQy9DLDZEQUE2RDtVQUNuRCxjQUFjLEdBQUcsQ0FBQyxhQUFDLENBQUMsTUFBTSwwQ0FBRSxNQUFNLG1DQUFJLEdBQUcsQ0FBQztVQUMxQyxJQUFJLENBQ1QsQ0FBQztBQUNOLENBQUM7QUFFRDtJQVFJLGlCQUFtQixDQUFjO1FBQzdCLElBQUksQ0FBQyxFQUFFLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBTSxXQUFXLEdBQUcsc0JBQVMsR0FBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQU0sQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBUyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBVSxDQUFDLENBQUM7UUFDN0IsOENBQThDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQU8sRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxxQkFBRyxHQUFWLGNBQXVCLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBQztJQUNwQywwQkFBUSxHQUFmLGNBQTJCLE9BQU8sbUJBQU0sQ0FBQyxJQUFJLEdBQUM7SUFDdkMsMEJBQVEsR0FBZixjQUEyQixPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUM7SUFFckMsc0JBQUksR0FBWDtRQUNJLElBQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQztRQUMxQixLQUFLLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNNLDRCQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNNLDBCQUFRLEdBQWYsVUFBZ0IsSUFBWTtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBQ00sMEJBQVEsR0FBZixVQUFnQixJQUFZO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQThCRTtJQUVTLHdCQUFNLEdBQWI7UUFDSSxJQUFNLFdBQVcsR0FBZ0IsRUFBRSxDQUFDO1FBQ3BDLEtBQUssSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUV2RSxPQUFPO1lBQ0gsRUFBRSxFQUFPLElBQUksQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsSUFBSSxFQUFLLElBQUksQ0FBQyxJQUFJO1lBQzlCLDJDQUEyQztZQUMvQixNQUFNLEVBQUcsV0FBVztZQUNwQixJQUFJLEVBQUssSUFBSSxDQUFDLElBQUk7U0FDckI7SUFDTCxDQUFDO0lBQ00sd0JBQU0sR0FBYixVQUFjLENBQXVCO1FBQ2pDLElBQUksQ0FBQyxLQUFLLFNBQVM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUVqQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQVcsU0FBUztZQUFFLElBQUksQ0FBQyxFQUFFLEdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQU0sU0FBUztZQUFFLElBQUksQ0FBQyxPQUFPLEdBQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUMxRCxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQU0sU0FBUztZQUFFLElBQUksQ0FBQyxPQUFPLEdBQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUMxRCxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQVMsU0FBUztZQUFFLElBQUksQ0FBQyxJQUFJLEdBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN2RCxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQVMsU0FBUztZQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDaEQsb0VBQW9FO1FBRTVELElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUcsQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNqQixLQUF3QixVQUFRLEVBQVIsTUFBQyxDQUFDLE1BQU0sRUFBUixjQUFRLEVBQVIsSUFBUSxFQUFFLENBQUM7Z0JBQTlCLElBQU0sU0FBUztnQkFDaEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxlQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ25DLENBQUM7UUFDTCxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNhLGtCQUFVLEdBQXhCLFVBQXlCLFFBQW1CO1FBQ3hDLElBQU0sYUFBYSxHQUFpQixFQUFFLENBQUM7UUFDdkMsS0FBaUIsVUFBUSxFQUFSLHFCQUFRLEVBQVIsc0JBQVEsRUFBUixJQUFRLEVBQUUsQ0FBQztZQUF2QixJQUFJLElBQUk7WUFDVCxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFDRCxPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDO0lBQ2Esa0JBQVUsR0FBeEIsVUFBeUIsYUFBMkI7UUFDaEQsSUFBTSxRQUFRLEdBQWMsRUFBRSxDQUFDO1FBQy9CLEtBQXNCLFVBQWEsRUFBYiwrQkFBYSxFQUFiLDJCQUFhLEVBQWIsSUFBYSxFQUFFLENBQUM7WUFBakMsSUFBSSxTQUFTO1lBQ2QsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVNLHVCQUFLLEdBQVo7O1FBQ0ksS0FBSyxDQUFDLGFBQWE7Y0FDYixjQUFjLEdBQUcsQ0FBQyxVQUFJLENBQUMsRUFBRSxtQ0FBZ0IsR0FBRyxDQUFDO2NBQzdDLGNBQWMsR0FBRyxDQUFDLFVBQUksQ0FBQyxPQUFPLG1DQUFXLEdBQUcsQ0FBQztjQUM3QyxjQUFjLEdBQUcsQ0FBQyxVQUFJLENBQUMsT0FBTyxtQ0FBVyxHQUFHLENBQUM7Y0FDN0MsY0FBYyxHQUFHLENBQUMsVUFBSSxDQUFDLElBQUksbUNBQWMsR0FBRyxDQUFDO2NBQzdDLGNBQWMsR0FBRyxDQUFDLFVBQUksQ0FBQyxJQUFJLG1DQUFlLENBQUMsQ0FBQztZQUMxRCxvRUFBb0U7Y0FDdEQsY0FBYyxHQUFHLENBQUMsZ0JBQUksQ0FBQyxNQUFNLDBDQUFFLE1BQU0sbUNBQUksR0FBRyxDQUFDO2NBQzdDLElBQUksQ0FDVCxDQUFDO0lBQ04sQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDO0FBbElZLDBCQUFPOzs7Ozs7Ozs7OztBQ2hDUDs7O0FBOEJiLDBDQU9DO0FBRUQsMENBVUM7QUEvQ0Qsd0dBQWtFO0FBRWxFLDBGQUEyRTtBQTBCM0UsU0FBZ0IsZUFBZSxDQUFDLENBQW9DO0lBQ2hFLElBQUksQ0FBQyxLQUFLLFNBQVM7UUFBRSxPQUFPO0lBQzVCLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVM7WUFBRSxTQUFTO1FBQ2pDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQWdCLGVBQWUsQ0FBQyxDQUFzQjs7SUFDbEQsSUFBSSxDQUFDLEtBQUssU0FBUztRQUFFLE9BQU87SUFDNUIsS0FBSyxDQUFDLGNBQWM7VUFDZCxjQUFjLEdBQU8sQ0FBQyxPQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsRUFBRSxtQ0FBVyxHQUFHLENBQUM7VUFDMUMsY0FBYyxHQUFPLENBQUMsT0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLE9BQU8sbUNBQU0sR0FBRyxDQUFDO1VBQzFDLGNBQWMsR0FBTyxDQUFDLE9BQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxJQUFJLG1DQUFTLEdBQUcsQ0FBQztVQUMxQyxjQUFjLEdBQU8sQ0FBQyxPQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsT0FBTyxtQ0FBTSxHQUFHLENBQUM7VUFDMUMsY0FBYyxHQUFPLENBQUMsT0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLFFBQVEsbUNBQUssR0FBRyxDQUFDO1VBQzFDLElBQUksQ0FDVCxDQUFDO0FBQ04sQ0FBQztBQUVEO0lBZ0JJLGdCQUFtQixDQUFhO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQVEsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQU0sY0FBYyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQU0sV0FBVyxHQUFHLHNCQUFTLEdBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxHQUFVLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxHQUFVLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFTLENBQUMsQ0FBQztRQUM1QiwrQ0FBK0M7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBUSxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLEVBQUUsR0FBVyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBVSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBUSxFQUFDLEdBQUcsRUFBRSxJQUFJLDZCQUFhLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSw2QkFBYSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksNkJBQWEsRUFBRSxFQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLEtBQUssR0FBUSxFQUFDLEdBQUcsRUFBRSxJQUFJLDZCQUFhLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSw2QkFBYSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksNkJBQWEsRUFBRSxFQUFDLENBQUM7UUFDekcsaUNBQWlDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSx3QkFBTyxHQUFkLFVBQWUsR0FBZTtRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDTSw0QkFBVyxHQUFsQixjQUErQixPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUM7SUFFNUMsbUJBQUUsR0FBVDtRQUNJLE9BQU8sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUNNLG9CQUFHLEdBQVYsY0FBdUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUM7SUFDckMscUJBQUksR0FBWDtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQ00seUJBQVEsR0FBZixVQUFnQixJQUFZO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFHTSx5QkFBUSxHQUFmOztRQUNJLElBQU0sRUFBRSxHQUFHLFVBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUNBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQU0sRUFBRSxHQUFHLFVBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUNBQUksQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUdNLDBCQUFTLEdBQWhCLFVBQWlCLEdBQVc7O1FBQ3hCLElBQU0sTUFBTSxHQUFHLFVBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUNBQUksQ0FBQyxDQUFDO1FBQzdDLElBQU0sTUFBTSxHQUFHLFVBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUNBQUksQ0FBQyxDQUFDO1FBQzdDLE1BQU0sSUFBSSxHQUFHLENBQUM7UUFFZCxJQUFNLENBQUMsR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNNLHdCQUFPLEdBQWQsVUFBZSxJQUFZOztRQUN2QixJQUFNLE1BQU0sR0FBRyxVQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1DQUFJLENBQUMsQ0FBQztRQUM3QyxNQUFNLElBQUksSUFBSSxDQUFDO1FBRWYsSUFBTSxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFHUyxnQ0FBZSxHQUF6QjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFUyxnQ0FBZSxHQUF6QjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTSw0QkFBVyxHQUFsQixVQUFtQixVQUFzQjtRQUF0QiwyQ0FBc0I7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBTSxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBSSxNQUFNLEdBQUcsd0JBQVcsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRyxHQUFRLG1CQUFNLEVBQUUsQ0FBQyxFQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxHQUFHLEdBQVEsbUJBQU0sRUFBRSxFQUFFLEVBQUksRUFBRSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBTSxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLEVBQUUsR0FBUyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBTyxtQkFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsR0FBRyxHQUFRO1lBQ1osR0FBRyxFQUFFLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFDO1lBQ3JCLEdBQUcsRUFBRSxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQztZQUNyQixLQUFLLEVBQUUsSUFBSTtTQUNkLENBQUM7UUFHRixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNqQyxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWxDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ2pDLFNBQVMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFbEMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV2QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBSU0sdUJBQU0sR0FBYjtRQUNJLElBQU0sR0FBRyxHQUFjO1lBQ25CLEVBQUUsRUFBUyxJQUFJLENBQUMsS0FBSztZQUNyQixPQUFPLEVBQUksSUFBSSxDQUFDLE9BQU87WUFDdkIsSUFBSSxFQUFPLElBQUksQ0FBQyxPQUFPO1lBQ3ZCLE9BQU8sRUFBSSxJQUFJLENBQUMsT0FBTztZQUN2QixHQUFHLEVBQVEsSUFBSSxDQUFDLEdBQUc7WUFDbkIsR0FBRyxFQUFRLElBQUksQ0FBQyxHQUFHO1lBQ25CLEtBQUssRUFBTSxJQUFJLENBQUMsS0FBSztZQUNyQixFQUFFLEVBQVMsSUFBSSxDQUFDLEVBQUU7WUFDbEIsSUFBSSxFQUFPLElBQUksQ0FBQyxJQUFJO1lBQ2hDLDhDQUE4QztZQUNsQyxHQUFHLEVBQVEsSUFBSSxDQUFDLEdBQUc7WUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNsQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ2xDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDbEMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNsQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ2xDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7U0FDckM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFDTSx1QkFBTSxHQUFiLFVBQWMsQ0FBc0I7UUFDaEMsSUFBSSxDQUFDLEtBQUssU0FBUztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBVyxTQUFTO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBTSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxDQUFDLElBQUksS0FBUyxTQUFTO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBTSxTQUFTO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBSSxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3hELElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBTSxTQUFTO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBSSxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3hELElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBVSxTQUFTO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBUSxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3BELElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBVSxTQUFTO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBUSxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3BELElBQUksQ0FBQyxDQUFDLEtBQUssS0FBUSxTQUFTO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBTSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3RELElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBVyxTQUFTO1lBQUUsSUFBSSxDQUFDLEVBQUUsR0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxDQUFDLElBQUksS0FBUyxTQUFTO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRTdELGtFQUFrRTtRQUMxRCxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQVMsU0FBUyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBRUQsSUFBSSxDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsQ0FBQyxTQUFTLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsQ0FBQyxTQUFTLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbEUsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVTLDZCQUFZLEdBQXRCLFVBQXVCLENBQWtCLEVBQUUsQ0FBa0I7UUFDekQsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLFNBQVM7WUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLFNBQVM7WUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLFNBQVM7WUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDM0MsQ0FBQztJQUNTLDhCQUFhLEdBQXZCLFVBQXdCLENBQTJDLEVBQUUsQ0FBK0I7O1FBQ2hHLElBQUksQ0FBNkIsQ0FBQztRQUNsQyxJQUFRLENBQUMsS0FBSyxTQUFT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QyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU0sRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU0sRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU0sRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU0sRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU0sRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU0sRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakYsSUFBSSxD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QUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCeEIsK0VBQThCO0FBQzlCLElBQUksTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFOUIsd0JBQXdCO0FBQ3hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBQ3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOzs7Ozs7Ozs7OztBQ1J4Qjs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfbWRsL0NfR3VpbGQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX21kbC9DX0hlcm8udHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX21kbC9DX0hlcm9BYmlsaXR5LnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9tZGwvQ19Mb2NhdGlvbi50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfbWRsL0NfTWF6ZS50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfbWRsL0NfTWF6ZUNlbGwudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX21kbC9DX01hemVJbmZvLnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9tZGwvQ19NYXplT2JqLnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9tZGwvQ19NYXplT2JqVmlldy50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfbWRsL0NfTW92YWJsZVBvaW50LnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9tZGwvQ19Qb2ludC50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfbWRsL0NfUG9pbnREaXIudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX21kbC9DX1BvaW50U2V0MkQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX21kbC9DX1JhbmdlLnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9tZGwvQ19TYXZlRGF0YS50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfbWRsL0NfU2F2ZUluZm8udHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX21kbC9DX1RlYW0udHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX21kbC9DX1RlYW1WaWV3LnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9tZGwvQ19XYWxrZXIudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX21kbC9UX0RpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfbWRsL1RfTXpLaW5kLnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9yZGIvQ19HdWlsZFJEQi50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfcmRiL0NfSGVyb1JEQi50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfcmRiL0NfTWF6ZVJEQi50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfcmRiL0NfTXZwdFJEQi50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfcmRiL0NfU2F2ZURhdGFSREIudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX3JkYi9DX1RlYW1SREIudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX3V0bC9DX0RzcE1lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX3V0bC9GX01hdGgudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX3V0bC9GX1JhbmQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvbGliL19KU09OX21haV9ndWxkLnRzIiwid2VicGFjazovL21haS8uL3NyYy9saWIvX0pTT05fbWFpX2xkc3YudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2xpYi9fSlNPTl9tYWlfbGRzdl90ZXN0LnRzIiwid2VicGFjazovL21haS8uL3NyYy9saWIvX0pTT05fbWFpX21hemUudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL3JvdXRlcy9tYWlHdWxkLnRzIiwid2VicGFjazovL21haS8uL3NyYy9yb3V0ZXMvbWFpTGRTdi50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvcm91dGVzL21haU1hemUudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL3JvdXRlcy9tYWlleC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvcm91dGVzL3VzZXJzLnRzIiwid2VicGFjazovL21haS9leHRlcm5hbCBjb21tb25qcyBcImNvb2tpZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9tYWkvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vbWFpL2V4dGVybmFsIGNvbW1vbmpzIFwiaHR0cC1lcnJvcnNcIiIsIndlYnBhY2s6Ly9tYWkvZXh0ZXJuYWwgY29tbW9uanMgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly9tYWkvZXh0ZXJuYWwgY29tbW9uanMgXCJteXNxbDIvcHJvbWlzZVwiIiwid2VicGFjazovL21haS9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL21haS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYWkvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9tYWkvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL21haS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBJX0xvY2F0ZSwgVF9MY2tkIH0gICAgICBmcm9tIFwiLi9DX0xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IElfSlNPTl9VbmlxLCBKU09OX0FueSB9IGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuaW1wb3J0IHsgQ19IZXJvLCBKU09OX0hlcm8gfSAgICAgZnJvbSBcIi4vQ19IZXJvXCI7XHJcbmltcG9ydCB7IF9nZXRfdXVpZCB9ICAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuaW1wb3J0IHsgQ19Hb29kc0xpc3QsIEpTT05fR29vZHNMaXN0IH0gZnJvbSBcIi4vQ19Hb29kc0xpc3ROR1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX0d1aWxkIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgaWQ/OiAgICAgICBudW1iZXIsXHJcbiAgICB1bmlxX2lkPzogIHN0cmluZyxcclxuICAgIHNhdmVfaWQ/OiAgbnVtYmVyLFxyXG4gICAgbmFtZT86ICAgICBzdHJpbmcsXHJcbiAgICBnb2xkPzogICAgIG51bWJlcixcclxuICAgIGdvb2RzPzogICAgSlNPTl9Hb29kc0xpc3QsXHJcbiAgICBoZXJvZXM/OiAgIEpTT05fSGVyb1tdLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfZ3VsZF9pbmZvKGE6IEpTT05fR3VpbGR8dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydChcIkd1aWxkIEluZm86XCIgXHJcbiAgICAgICAgKyBcIlxcbmlkOiAgICAgICBcIiArIChhLmlkICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnVuaXFfaWQ6ICBcIiArIChhLnVuaXFfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNhdmVfaWQ6ICBcIiArIChhLnNhdmVfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbm5hbWU6ICAgICBcIiArIChhLm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmdvbGQ6ICAgICBcIiArIChhLmdvbGQgICAgICA/PyAgMCApXHJcbi8vICAgICAgICArIFwiXFxuZ29vZHM6ICAgIFwiICsgKE9iamVjdC5rZXlzKGEuZ29vZHM/PzApLmxlbmd0aClcclxuICAgICAgICArIFwiXFxuaGVyb2VzOiAgIFwiICsgKGEuaGVyb2VzPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfR3VpbGQgaW1wbGVtZW50cyBJX0xvY2F0ZSwgSV9KU09OX1VuaXEge1xyXG4gICAgcHJvdGVjdGVkIGlkOiAgICAgICAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCB1bmlxX2lkOiAgICBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgc2F2ZV9pZDogICAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIG5hbWU6ICAgICAgIHN0cmluZztcclxuICAgIHB1YmxpYyAgICBnb2xkOiAgICAgICBudW1iZXI7XHJcbi8vICAgIHB1YmxpYyAgICBnb29kczogICAgICBDX0dvb2RzTGlzdDtcclxuICAgIHByb3RlY3RlZCBoZXJvZXM6ICAgICB7W3VpZDogc3RyaW5nXTogQ19IZXJvfTtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihhPzogSlNPTl9HdWlsZCkge1xyXG4gICAgICAgIHRoaXMuaWQgICAgICAgICA9IC0xO1xyXG4gICAgICAgIHRoaXMudW5pcV9pZCAgICA9ICdtYWlfZ3VsZCMnICsgX2dldF91dWlkKCk7XHJcbiAgICAgICAgdGhpcy5zYXZlX2lkICAgID0gLTE7XHJcbiAgICAgICAgdGhpcy5uYW1lICAgICAgID0gJyc7XHJcbiAgICAgICAgdGhpcy5nb2xkICAgICAgID0gIDA7XHJcbi8vICAgICAgICB0aGlzLmdvb2RzICAgICAgPSBuZXcgQ19Hb29kc0xpc3QoKTtcclxuICAgICAgICB0aGlzLmhlcm9lcyAgICAgPSB7fTtcclxuICAgICAgICBpZiAoYSAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdWlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnVuaXFfaWR9XHJcbiAgICBwdWJsaWMgZ2V0X2xja2QoKTogVF9MY2tkIHtyZXR1cm4gVF9MY2tkLk1hemV9XHJcbiAgICBwdWJsaWMgZ2V0X25hbWUoKTogc3RyaW5nIHtyZXR1cm4gdGhpcy5uYW1lfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgaHJlcygpOiAgQ19IZXJvW10ge1xyXG4gICAgICAgIGNvbnN0IGhyZXM6IENfSGVyb1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaWkgaW4gdGhpcy5oZXJvZXMpIGhyZXMucHVzaCh0aGlzLmhlcm9lc1tpaV0pO1xyXG4gICAgICAgIHJldHVybiBocmVzO1xyXG4gICAgfSBcclxuICAgIHB1YmxpYyBjbGVhcl9ocmVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGVyb2VzID0ge307XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRkX2hlcm8oaGVybzogQ19IZXJvKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZXJvZXNbaGVyby51aWQoKV0gPSBoZXJvO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJtdl9oZXJvKGhlcm86IENfSGVybyk6IHZvaWQge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmhlcm9lc1toZXJvLnVpZCgpXTtcclxuICAgIH1cclxuXHJcbi8qXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fb2JqX3RvX3N0cmluZyhvYTogQ19HdWlsZCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9hLCBudWxsLCBcIlxcdFwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9vYmpBcnJheV90b19zdHJpbmcob2FhOiB7W3VpZDogc3RyaW5nXTogQ19HdWlsZH0pOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IG9hID0gW10gYXMgQ19HdWlsZFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gb2FhKSBvYS5wdXNoKG9hYVtpaV0pO1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYSwgbnVsbCwgXCJcXHRcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fc3RyaW5nX3RvX29iaih0eHQ6IHN0cmluZyk6IENfR3VpbGQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGogICA9IEpTT04ucGFyc2UodHh0KSBhcyBKU09OX0d1aWxkW107XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ19HdWlsZChqKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDX0d1aWxkKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdfdG9fb2JqQXJyYXkodHh0OiBzdHJpbmcpOiB7W3VpZDogc3RyaW5nXTogQ19HdWlsZH0ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGogICA9IEpTT04ucGFyc2UodHh0KSBhcyBKU09OX0d1aWxkW107XHJcbiAgICAgICAgICAgIGNvbnN0IG1wYSA9IHt9IGFzIHtbaWQ6IHN0cmluZ106IENfR3VpbGR9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGpqIG9mIGopIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFhYSA9IG5ldyBDX0d1aWxkKCkuZGVjb2RlKGpqKTtcclxuICAgICAgICAgICAgICAgIG1wYVthYWEudWlkKCldID0gYWFhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtcGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4qL1xyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9HdWlsZCB7XHJcbiAgICAgICAgY29uc3QganNvbl9oZXJvZXM6IEpTT05fSGVyb1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaWkgaW4gdGhpcy5oZXJvZXMpIGpzb25faGVyb2VzLnB1c2godGhpcy5oZXJvZXNbaWldLmVuY29kZSgpKTsgIFxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogICAgICB0aGlzLmlkLFxyXG4gICAgICAgICAgICB1bmlxX2lkOiB0aGlzLnVuaXFfaWQsXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6IHRoaXMuc2F2ZV9pZCxcclxuICAgICAgICAgICAgZ29sZDogICAgdGhpcy5nb2xkLFxyXG4vLyAgICAgICAgICAgIGdvb2RzOiAgIHRoaXMuZ29vZHMuZW5jb2RlKCksXHJcbiAgICAgICAgICAgIGhlcm9lczogIGpzb25faGVyb2VzLFxyXG4gICAgICAgICAgICBuYW1lOiAgICB0aGlzLm5hbWUsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX0d1aWxkfHVuZGVmaW5lZCk6IENfR3VpbGQge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChhLmlkICAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMuaWQgICAgICAgICA9IGEuaWQ7XHJcbiAgICAgICAgaWYgKGEudW5pcV9pZCAgIT09IHVuZGVmaW5lZCkgdGhpcy51bmlxX2lkICAgID0gYS51bmlxX2lkO1xyXG4gICAgICAgIGlmIChhLnNhdmVfaWQgICE9PSB1bmRlZmluZWQpIHRoaXMuc2F2ZV9pZCAgICA9IGEuc2F2ZV9pZDtcclxuICAgICAgICBpZiAoYS5uYW1lICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm5hbWUgICAgICAgPSBhLm5hbWU7XHJcbiAgICAgICAgaWYgKGEuZ29sZCAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5nb2xkO1xyXG4vLyAgICAgICAgaWYgKGEuZ29vZHMgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5nb29kcy5kZWNvZGUgKGEuZ29vZHMpO1xyXG5cclxuICAgICAgICBpZiAoYS5oZXJvZXMgIT09IHVuZGVmaW5lZCkgIHtcclxuICAgICAgICAgICAgdGhpcy5oZXJvZXMgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqc29uX2hlcm8gb2YgYS5oZXJvZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlcm8gPSBuZXcgQ19IZXJvKGpzb25faGVybyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlcm9lc1toZXJvLnVpZCgpXSA9IGhlcm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGVuY29kZV9hbGwoYWxsX2d1bGQ6IENfR3VpbGRbXSk6IEpTT05fR3VpbGRbXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX2d1bGRfZGF0YTogSlNPTl9HdWlsZFtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgZ3VsZCBvZiBhbGxfZ3VsZCkge1xyXG4gICAgICAgICAgICBhbGxfZ3VsZF9kYXRhLnB1c2goZ3VsZC5lbmNvZGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxfZ3VsZF9kYXRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBkZWNvZGVfYWxsKGFsbF9ndWxkX2RhdGE6IEpTT05fR3VpbGRbXSk6IENfR3VpbGRbXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX2d1bGQ6IENfR3VpbGRbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGd1bGRfZGF0YSBvZiBhbGxfZ3VsZF9kYXRhKSB7XHJcbiAgICAgICAgICAgIGFsbF9ndWxkLnB1c2goKG5ldyBDX0d1aWxkKCkpLmRlY29kZShndWxkX2RhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbF9ndWxkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWxlcnQoKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJHdWlsZCBJbmZvOlwiIFxyXG4gICAgICAgICAgICArIFwiXFxuaWQ6ICAgICAgIFwiICsgKHRoaXMuaWQgICAgICAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudW5pcV9pZDogIFwiICsgKHRoaXMudW5pcV9pZCAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2F2ZV9pZDogIFwiICsgKHRoaXMuc2F2ZV9pZCAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubmFtZTogICAgIFwiICsgKHRoaXMubmFtZSAgICAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuZ29sZDogICAgIFwiICsgKHRoaXMuZ29sZCAgICAgICAgICAgPz8gIDApXHJcbi8vICAgICAgICAgICAgKyBcIlxcbmdvb2RzOiAgICBcIiArIChPYmplY3Qua2V5cyh0aGlzLmdvb2RzPz8wKS5sZW5ndGgpXHJcbiAgICAgICAgICAgICsgXCJcXG5oZXJvZXM6ICAgXCIgKyAodGhpcy5oZXJvZXM/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX0hlcm9BYmlsaXR5LCBKU09OX0hlcm9fQWJpbGl0eX0gZnJvbSBcIi4vQ19IZXJvQWJpbGl0eVwiO1xyXG5pbXBvcnQgeyBJX0pTT05fVW5pcSwgICBKU09OX0FueSB9ICAgICAgICAgZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5pbXBvcnQgeyBfZ2V0X3V1aWQsIF9pbnJhbmQsIF9pcmFuZCwgX3JhbmRvbV9zdHIgfSAgZnJvbSBcIi4uL2RfdXRsL0ZfUmFuZFwiO1xyXG5pbXBvcnQgeyBDX0dvb2RzTGlzdCwgSlNPTl9Hb29kc0xpc3QgfSBmcm9tIFwiLi9DX0dvb2RzTGlzdE5HXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fSGVybyBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGlkPzogICAgICAgIG51bWJlciwgXHJcbiAgICB1bmlxX2lkPzogICBzdHJpbmcsIFxyXG4gICAgc2F2ZV9pZD86ICAgbnVtYmVyLCBcclxuICAgIG5hbWU/OiAgICAgIHN0cmluZywgXHJcbiAgICBzZXg/OiAgICAgICBudW1iZXI7IFxyXG4gICAgYWdlPzogICAgICAgbnVtYmVyOyBcclxuICAgIGdvbGQ/OiAgICAgIG51bWJlcjsgXHJcbi8vICAgIGdvb2RzPzogICAgIEpTT05fR29vZHNMaXN0OyBcclxuICAgIHN0YXRlPzogICAgIG51bWJlcjsgXHJcbiAgICBsdj86ICAgICAgICBudW1iZXI7IFxyXG4gICAgdmFsPzogICAgICAgSlNPTl9IZXJvX1ZhbHVlO1xyXG4gICAgYWJpX3A/OiAgICAgICB7YnNjPzogSlNPTl9IZXJvX0FiaWxpdHksIHR0bD86IEpTT05fSGVyb19BYmlsaXR5LCBub3c/OiBKU09OX0hlcm9fQWJpbGl0eX07XHJcbiAgICBhYmlfbT86ICAgICAgIHtic2M/OiBKU09OX0hlcm9fQWJpbGl0eSwgdHRsPzogSlNPTl9IZXJvX0FiaWxpdHksIG5vdz86IEpTT05fSGVyb19BYmlsaXR5fTtcclxuICAgIGlzX2FsaXZlPzogIHN0cmluZ3xib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fSGVyb19WYWx1ZSBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIHNrcD86IHt0dGw6IG51bWJlciwgIG5vdzogbnVtYmVyfSwgXHJcbiAgICBleHA/OiB7dHRsOiBudW1iZXIsICBub3c6IG51bWJlcn0sXHJcbiAgICBueGU/OiBudW1iZXIsICAgICAgICAgICAgICAgICAgIC8vIOasoeWbnuOBruODkuODvOODreODvOODrOODmeODq+OCouODg+ODl+OBq+W/heimgeOBque1jOmok+WApFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfaHJlc19pbmZvKGE6IChKU09OX0hlcm98dW5kZWZpbmVkKVtdfHVuZGVmaW5lZCk6IHZvaWQgeyBcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGFsZXJ0KCdOdW1iZXIgb2YgSGVybyA9ICcgKyBhLmxlbmd0aC50b1N0cmluZygpKTtcclxuICAgIGZvciAodmFyIGkgaW4gYSkge1xyXG4gICAgICAgIGlmIChhW2ldID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG4gICAgICAgIGFsZXJ0X2hlcm9faW5mbyhhW2ldKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X2hlcm9faW5mbyhhOiBKU09OX0hlcm98dW5kZWZpbmVkKTogdm9pZCB7IFxyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoXCJIZXJvIEluZm86XFxuXCIgXHJcbiAgICAgICAgKyBcIlxcbmlkOiAgICAgICBcIiAgICAgKyAoYT8uaWQgICAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxudW5pcV9pZCAgIFwiICAgICArIChhPy51bmlxX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5uYW1lOiAgICAgXCIgICAgICsgKGE/Lm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNhdmVfaWQ6ICBcIiAgICAgKyAoYT8uc2F2ZV9pZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuaXNfYWxpdmU6IFwiICAgICArIChhPy5pc19hbGl2ZSAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfSGVybyBpbXBsZW1lbnRzIElfSlNPTl9VbmlxIHtcclxuICAgIHByb3RlY3RlZCBteV9pZDogICAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIG15X25hbWU6ICBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgdW5pcV9pZDogIHN0cmluZzsgXHJcbiAgICBwcm90ZWN0ZWQgc2F2ZV9pZDogIG51bWJlcjsgXHJcbiAgICBwcm90ZWN0ZWQgc2V4OiAgICAgIG51bWJlcjsgXHJcbiAgICBwcm90ZWN0ZWQgYWdlOiAgICAgIG51bWJlcjsgXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGU6ICAgIG51bWJlcjsgXHJcbiAgICBwcm90ZWN0ZWQgbHY6ICAgICAgIG51bWJlcjsgXHJcbiAgICAvLyBic2MoQmFzaWMp44Gv5b2T5Lq644Gu5Z+65pys5YCk44CCdHRsKFRvdGFsKeOBr+ijheWCmeetieOCkuWKoOa4m+eul+OBl+OBn+OCguOBruOAgm5vd+OBr+ODkOODleetieOBruOCv+ODvOODs+WItuOBruOCguWKoOa4m+eul+OBl+OBn+OCguOBrlxyXG4gICAgcHJvdGVjdGVkIGdvbGQ6ICAgICBudW1iZXI7IFxyXG4vLyAgICBwcm90ZWN0ZWQgZ29vZHM6ICAgIENfR29vZHNMaXN0OyBcclxuICAgIHByb3RlY3RlZCB2YWw6ICAgICAgSlNPTl9IZXJvX1ZhbHVlO1xyXG4gICAgcHJvdGVjdGVkIGFiaV9wOiAgICAgIHtic2M6IENfSGVyb0FiaWxpdHksIHR0bDogQ19IZXJvQWJpbGl0eSwgbm93OiBDX0hlcm9BYmlsaXR5fTtcclxuICAgIHByb3RlY3RlZCBhYmlfbTogICAgICB7YnNjOiBDX0hlcm9BYmlsaXR5LCB0dGw6IENfSGVyb0FiaWxpdHksIG5vdzogQ19IZXJvQWJpbGl0eX07XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGE/OiBKU09OX0hlcm8pIHtcclxuICAgICAgICB0aGlzLm15X2lkICAgICAgPSAwO1xyXG4gICAgICAgIHRoaXMubXlfbmFtZSAgICA9ICdObyBOYW1lIEhlcm8nO1xyXG4gICAgICAgIHRoaXMudW5pcV9pZCAgICA9ICdtYWlfaGVybyMnICsgX2dldF91dWlkKCk7XHJcbiAgICAgICAgdGhpcy5zYXZlX2lkICAgID0gMDtcclxuICAgICAgICB0aGlzLnNleCAgICAgICAgPSAwOyBcclxuICAgICAgICB0aGlzLmFnZSAgICAgICAgPSAwOyBcclxuICAgICAgICB0aGlzLmdvbGQgICAgICAgPSAwOyBcclxuLy8gICAgICAgIHRoaXMuZ29vZHMgICAgICA9IG5ldyBDX0dvb2RzTGlzdCgpOyBcclxuICAgICAgICB0aGlzLnN0YXRlICAgICAgPSAwOyBcclxuICAgICAgICB0aGlzLmx2ICAgICAgICAgPSAwO1xyXG4gICAgICAgIHRoaXMudmFsICAgICAgICA9IHt9O1xyXG4gICAgICAgIHRoaXMuYWJpX3AgICAgICA9IHtic2M6IG5ldyBDX0hlcm9BYmlsaXR5KCksIHR0bDogbmV3IENfSGVyb0FiaWxpdHkoKSwgbm93OiBuZXcgQ19IZXJvQWJpbGl0eSgpfTtcclxuICAgICAgICB0aGlzLmFiaV9tICAgICAgPSB7YnNjOiBuZXcgQ19IZXJvQWJpbGl0eSgpLCB0dGw6IG5ldyBDX0hlcm9BYmlsaXR5KCksIG5vdzogbmV3IENfSGVyb0FiaWxpdHkoKX07XHJcbi8vICAgICAgICB0aGlzLmlzX2FsaXZlICAgPSB0cnVlO1xyXG4gICAgICAgIGlmIChhICE9PSB1bmRlZmluZWQpIHRoaXMuZGVjb2RlKGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRfcHJwKGFyZyA6IEpTT05fSGVybykge1xyXG4gICAgICAgIHRoaXMuZGVjb2RlKGFyZyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3VuaXFfaWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudW5pcV9pZH1cclxuXHJcbiAgICBwdWJsaWMgaWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0hlcm9fJyArIHRoaXMubXlfaWQudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDUsICcwJyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdWlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnVuaXFfaWQ7fVxyXG4gICAgcHVibGljIG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5teV9uYW1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9uYW1lKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubXlfbmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBpc19hbGl2ZSgpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBocCA9IHRoaXMuYWJpX3Aubm93LmdldCgneHAnKSA/PyAwO1xyXG4gICAgICAgIGNvbnN0IGhkID0gdGhpcy5hYmlfcC5ub3cuZ2V0KCd4ZCcpID8/IDA7XHJcbiAgICAgICAgcmV0dXJuIGhwIC0gaGQgPiAwO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaHBfZGFtYWdlKGRtZzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCB4cF9ub3cgPSB0aGlzLmFiaV9wLm5vdy5nZXQoJ3hwJykgPz8gMDtcclxuICAgICAgICBsZXQgICB4ZF9ub3cgPSB0aGlzLmFiaV9wLm5vdy5nZXQoJ3hkJykgPz8gMDtcclxuICAgICAgICB4ZF9ub3cgKz0gZG1nO1xyXG5cclxuICAgICAgICBjb25zdCBkID0geGRfbm93ID4geHBfbm93ID8geHBfbm93IDogeGRfbm93O1xyXG4gICAgICAgIHRoaXMuYWJpX3Aubm93LnNldCgneGQnLCBkKTtcclxuICAgICAgICByZXR1cm4gZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBocF9oZWFsKGhlYWw6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0ICAgeGRfbm93ID0gdGhpcy5hYmlfcC5ub3cuZ2V0KCd4ZCcpID8/IDA7XHJcbiAgICAgICAgeGRfbm93IC09IGhlYWw7XHJcblxyXG4gICAgICAgIGNvbnN0IGQgPSB4ZF9ub3cgPCAwID8gMCA6IHhkX25vdztcclxuICAgICAgICB0aGlzLmFiaV9wLm5vdy5zZXQoJ3hkJywgZCk7XHJcbiAgICAgICAgcmV0dXJuIGQ7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwcm90ZWN0ZWQgY29weV9ic2NfdG9fdHRsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWJpX3AudHRsLmRlY29kZSh0aGlzLmFiaV9wLmJzYy5lbmNvZGUoKSk7XHJcbiAgICAgICAgdGhpcy5hYmlfbS50dGwuZGVjb2RlKHRoaXMuYWJpX20uYnNjLmVuY29kZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY29weV90dGxfdG9fbm93KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWJpX3Aubm93LmRlY29kZSh0aGlzLmFiaV9wLnR0bC5lbmNvZGUoKSk7XHJcbiAgICAgICAgdGhpcy5hYmlfbS5ub3cuZGVjb2RlKHRoaXMuYWJpX20udHRsLmVuY29kZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmFuZG9tX21ha2UoaGVsb19sZXZlbDogbnVtYmVyID0gMCk6IENfSGVybyB7XHJcbiAgICAgICAgdGhpcy5teV9pZCAgICA9IDA7IC8vIC0tSGVybzo6JG1heF9pZDtcclxuICAgICAgICB0aGlzLm15X25hbWUgID0gXCLlhpLpmbrogIUgXCIgKyBfcmFuZG9tX3N0cig1KTtcclxuICAgICAgICB0aGlzLnNleCAgICAgID0gX2lyYW5kKCAwLCAgICAgMSk7IFxyXG4gICAgICAgIHRoaXMuYWdlICAgICAgPSBfaXJhbmQoIDE1LCAgIDI1KTsgXHJcbiAgICAgICAgdGhpcy5zdGF0ZSAgICA9IDA7IFxyXG4gICAgICAgIHRoaXMubHYgICAgICAgPSBoZWxvX2xldmVsOyBcclxuICAgICAgICB0aGlzLmdvbGQgICAgID0gX2lyYW5kKCA1MDAsIDEwMDApOyBcclxuICAgICAgICB0aGlzLnZhbCAgICAgID0ge1xyXG4gICAgICAgICAgICBza3A6IHt0dGw6IDAsIG5vdzogMH0sIFxyXG4gICAgICAgICAgICBleHA6IHt0dGw6IDAsIG5vdzogMH0sXHJcbiAgICAgICAgICAgICdueGUnOiAxMDAwXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGFiaV9wX2JzYyA9IHRoaXMuYWJpX3AuYnNjO1xyXG4gICAgICAgIGFiaV9wX2JzYy5yYW5kb21fbWFrZShoZWxvX2xldmVsKTtcclxuXHJcbiAgICAgICAgY29uc3QgYWJpX21fYnNjID0gdGhpcy5hYmlfbS5ic2M7XHJcbiAgICAgICAgYWJpX21fYnNjLnJhbmRvbV9tYWtlKGhlbG9fbGV2ZWwpO1xyXG5cclxuICAgICAgICB0aGlzLmNvcHlfYnNjX3RvX3R0bCgpO1xyXG4gICAgICAgIHRoaXMuY29weV90dGxfdG9fbm93KCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9IZXJvIHtcclxuICAgICAgICBjb25zdCByZXQ6IEpTT05fSGVybyA9IHtcclxuICAgICAgICAgICAgaWQ6ICAgICAgICB0aGlzLm15X2lkLFxyXG4gICAgICAgICAgICB1bmlxX2lkOiAgIHRoaXMudW5pcV9pZCxcclxuICAgICAgICAgICAgbmFtZTogICAgICB0aGlzLm15X25hbWUsXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6ICAgdGhpcy5zYXZlX2lkLFxyXG4gICAgICAgICAgICBzZXg6ICAgICAgIHRoaXMuc2V4LCBcclxuICAgICAgICAgICAgYWdlOiAgICAgICB0aGlzLmFnZSwgXHJcbiAgICAgICAgICAgIHN0YXRlOiAgICAgdGhpcy5zdGF0ZSwgXHJcbiAgICAgICAgICAgIGx2OiAgICAgICAgdGhpcy5sdiwgXHJcbiAgICAgICAgICAgIGdvbGQ6ICAgICAgdGhpcy5nb2xkLCBcclxuLy8gICAgICAgICAgICBnb29kczogICAgIHRoaXMuZ29vZHMuZW5jb2RlKCksIFxyXG4gICAgICAgICAgICB2YWw6ICAgICAgIHRoaXMudmFsLFxyXG4gICAgICAgICAgICBhYmlfcF9ic2M6IHRoaXMuYWJpX3AuYnNjLmVuY29kZSgpLFxyXG4gICAgICAgICAgICBhYmlfbV9ic2M6IHRoaXMuYWJpX20uYnNjLmVuY29kZSgpLFxyXG4gICAgICAgICAgICBhYmlfcF90dGw6IHRoaXMuYWJpX3AudHRsLmVuY29kZSgpLFxyXG4gICAgICAgICAgICBhYmlfbV90dGw6IHRoaXMuYWJpX20udHRsLmVuY29kZSgpLFxyXG4gICAgICAgICAgICBhYmlfcF9ub3c6IHRoaXMuYWJpX3Aubm93LmVuY29kZSgpLFxyXG4gICAgICAgICAgICBhYmlfbV9ub3c6IHRoaXMuYWJpX20ubm93LmVuY29kZSgpLFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX0hlcm98dW5kZWZpbmVkKTogQ19IZXJvIHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAoYS5pZCAgICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2lkICAgID0gYS5pZDtcclxuICAgICAgICBpZiAoYS5uYW1lICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X25hbWUgID0gYS5uYW1lO1xyXG4gICAgICAgIGlmIChhLnVuaXFfaWQgICE9PSB1bmRlZmluZWQpIHRoaXMudW5pcV9pZCAgPSBhLnVuaXFfaWQ7XHJcbiAgICAgICAgaWYgKGEuc2F2ZV9pZCAgIT09IHVuZGVmaW5lZCkgdGhpcy5zYXZlX2lkICA9IGEuc2F2ZV9pZDtcclxuICAgICAgICBpZiAoYS5zZXggICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLnNleCAgICAgID0gYS5zZXg7XHJcbiAgICAgICAgaWYgKGEuYWdlICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5hZ2UgICAgICA9IGEuYWdlO1xyXG4gICAgICAgIGlmIChhLnN0YXRlICAgICE9PSB1bmRlZmluZWQpIHRoaXMuc3RhdGUgICAgPSBhLnN0YXRlO1xyXG4gICAgICAgIGlmIChhLmx2ICAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubHYgICAgICAgPSBhLmx2O1xyXG4gICAgICAgIGlmIChhLmdvbGQgICAgICE9PSB1bmRlZmluZWQpIHRoaXMuZ29sZCAgICAgPSBhLmdvbGQ7XHJcblxyXG4vLyAgICAgICAgaWYgKGEuZ29vZHMgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmdvb2RzLmRlY29kZShhLmdvb2RzKTtcclxuICAgICAgICBpZiAoYS52YWwgICAgICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fX2RlY29kZV92YWwodGhpcy52YWwsIGEudmFsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhLmFiaV9wX2JzYyAhPT0gdW5kZWZpbmVkKSB0aGlzLmFiaV9wLmJzYy5kZWNvZGUoYS5hYmlfcF9ic2MpO1xyXG4gICAgICAgIGlmIChhLmFiaV9tX2JzYyAhPT0gdW5kZWZpbmVkKSB0aGlzLmFiaV9tLmJzYy5kZWNvZGUoYS5hYmlfbV9ic2MpO1xyXG4gICAgICAgIGlmIChhLmFiaV9wX3R0bCAhPT0gdW5kZWZpbmVkKSB0aGlzLmFiaV9wLnR0bC5kZWNvZGUoYS5hYmlfcF90dGwpO1xyXG4gICAgICAgIGlmIChhLmFiaV9tX3R0bCAhPT0gdW5kZWZpbmVkKSB0aGlzLmFiaV9tLnR0bC5kZWNvZGUoYS5hYmlfbV90dGwpO1xyXG4gICAgICAgIGlmIChhLmFiaV9wX25vdyAhPT0gdW5kZWZpbmVkKSB0aGlzLmFiaV9wLm5vdy5kZWNvZGUoYS5hYmlfcF9ub3cpO1xyXG4gICAgICAgIGlmIChhLmFiaV9tX25vdyAhPT0gdW5kZWZpbmVkKSB0aGlzLmFiaV9tLm5vdy5kZWNvZGUoYS5hYmlfbV9ub3cpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX19kZWNvZGVfdmFsKGQ6IEpTT05fSGVyb19WYWx1ZSwgczogSlNPTl9IZXJvX1ZhbHVlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHMuc2twICE9PSB1bmRlZmluZWQpIGQuc2twID0gdGhpcy5fX2RlY29kZV9za2V4KGQuc2twLCBzLnNrcCk7XHJcbiAgICAgICAgaWYgKHMuZXhwICE9PSB1bmRlZmluZWQpIGQuZXhwID0gdGhpcy5fX2RlY29kZV9za2V4KGQuZXhwLCBzLmV4cCk7XHJcbiAgICAgICAgaWYgKHMubnhlICE9PSB1bmRlZmluZWQpIGQubnhlID0gcy5ueGU7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX19kZWNvZGVfc2tleChhOiB7dHRsPzogbnVtYmVyLCBub3c/OiBudW1iZXJ9IHwgdW5kZWZpbmVkLCBzOiB7dHRsPzogbnVtYmVyLCBub3c/OiBudW1iZXJ9KToge3R0bDogbnVtYmVyLCBub3c6IG51bWJlcn0ge1xyXG4gICAgICAgIHZhciBkOiB7dHRsOiBudW1iZXIsIG5vdzogbnVtYmVyfTtcclxuICAgICAgICBpZiAgICAgKGEgPT09IHVuZGVmaW5lZCkgZCA9IHt0dGw6IDAsIG5vdzogMH07XHJcbiAgICAgICAgZWxzZSAgICBkID0ge3R0bDogYT8udHRsID8/IDAsIG5vdzogYT8ubm93ID8/IDB9O1xyXG5cclxuICAgICAgICBkLnR0bCA9IHMudHRsID8/IGQudHRsO1xyXG4gICAgICAgIGQubm93ID0gcy5ub3cgPz8gcy50dGwgPz8gZC5ub3c7XHJcbiAgICAgICAgcmV0dXJuIGQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBlbmNvZGVfaGVyb2VzKGhlcm9lczogQ19IZXJvW10pOiBKU09OX0hlcm9bXSB7XHJcbiAgICAgICAgY29uc3QgaGVyb2VzX2RhdGEgPSBbXSBhcyBKU09OX0hlcm9bXTtcclxuICAgICAgICBmb3IgKHZhciBoZXJvIG9mIGhlcm9lcykge1xyXG4gICAgICAgICAgICBoZXJvZXNfZGF0YS5wdXNoKGhlcm8uZW5jb2RlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGVyb2VzX2RhdGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZV9oZXJvZXMoaGVyb2VzX2RhdGE6IChKU09OX0hlcm98dW5kZWZpbmVkKVtdfHVuZGVmaW5lZCk6IENfSGVyb1tdIHtcclxuICAgICAgICBjb25zdCBoZXJvZXMgPSBbXSBhcyBDX0hlcm9bXTtcclxuICAgICAgICBpZiAoaGVyb2VzX2RhdGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBoZXJvX2RhdGEgb2YgaGVyb2VzX2RhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoZXJvX2RhdGEgIT09IHVuZGVmaW5lZCkgaGVyb2VzLnB1c2gobmV3IENfSGVybygpLmRlY29kZShoZXJvX2RhdGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGVyb2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHsgXHJcbiAgICAgICAgYWxlcnQoXCJIZXJvIEluZm86XFxuXCIgXHJcbiAgICAgICAgICAgICsgXCJcXG5pZDogICAgICAgXCIgICAgICsgKHRoaXMuaWQgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnVuaXFfaWQgICBcIiAgICAgKyAodGhpcy51bmlxX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubmFtZTogICAgIFwiICAgICArICh0aGlzLm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zYXZlX2lkOiAgXCIgICAgICsgKHRoaXMuc2F2ZV9pZCAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmlzX2FsaXZlOiBcIiAgICAgKyAodGhpcy5pc19hbGl2ZSAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBhbGVydF9ocmVzKGE6IChDX0hlcm98dW5kZWZpbmVkKVtdfHVuZGVmaW5lZCk6IHZvaWQgeyBcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgYWxlcnQoJ051bWJlciBvZiBIZXJvID0gJyArIGEubGVuZ3RoLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gYSkgYVtpXT8uYWxlcnQoKTtcclxuICAgIH1cclxufSIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgSV9KU09OLCBKU09OX0FueSB9IGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuaW1wb3J0IHsgX3JvdW5kIH0gICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX01hdGhcIjtcclxuaW1wb3J0IHsgX2lucmFuZCB9IGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuXHJcbi8vIOS4gOiIrOOBq+S9v+OBiOOCi+ODpuODvOODhuOCo+ODquODhuOCo+OBquWRquaWh1xyXG4vLyDjgqrjg5bjgrjjgqfjgq/jg4jjgpLliJfmjJnlnovjgajjgZfjgablnovljJbjgZnjgovjga7jgavliKnnlKhcclxudHlwZSBUX0hlcm9BYmlsaXR5ID0ge1trZXk6IHN0cmluZ106IG51bWJlcn07XHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9IZXJvX0FiaWxpdHkgZXh0ZW5kcyBKU09OX0FueSB7W2tleTogc3RyaW5nXTogbnVtYmVyfVxyXG5cclxuZXhwb3J0IGNsYXNzIENfSGVyb0FiaWxpdHkgaW1wbGVtZW50cyBJX0pTT04ge1xyXG4gICAgcHJvdGVjdGVkIHY6IFRfSGVyb0FiaWxpdHkgPSB7XHJcbiAgICAgICAgeHA6ICAwLCAgLy8gcDpIUOOAgW06TVBcclxuICAgICAgICB4ZDogIDAsICAvLyDkuIroqJjjga7jg4Djg6Hjg7zjgrjph49cclxuXHJcbiAgICAgICAgLy8g5Lul5LiL44CB5oim6ZeY6IO95Yqb44Gu5Z+65pys5YCkKHA654mp55CG44CBbTrprZTms5Up44CC44OS44O844Ot44O844Os44OZ44Or44KE44K544OG44O844K/44K544Ki44OD44OX44Gn5Yqg566XIFxyXG4gICAgICAgIGF0azogMCwgIC8vIOaUu+aSg+WApFxyXG4gICAgICAgIGRlZjogMCwgIC8vIOmYsuW+oeWApFxyXG4gICAgICAgIHF1YzogMCwgIC8vIOeerOeZuuWKm1xyXG4gICAgICAgIGNuYzogMCwgIC8vIOapn+mBi+WApCjjg4Hjg6Pjg7PjgrkpXHJcbiAgICBcclxuICAgICAgICAvLyDku6XkuIvjgIHjgYTjgo/jgobjgovjgrnjg4bjg7zjgr/jgrnjgILkuIroqJjjga7oqIjnrpfjgavlvbHpn7/jgILjg5Ljg7zjg63jg7zjg6zjg5njg6vjgoTjgrnjg4bjg7zjgr/jgrnjgqLjg4Pjg5fjgafliqDnrpdcclxuICAgICAgICBzdHI6IDAsICAvLyDmoLnmgKfjgILmlLvmkoMv6Ziy5b6h5Yqb44Gr44KC5b2x6Z+/44CCSFAvTVDlm57lvqnjgoTjgqLjgqTjg4bjg6Djga7mnIDlpKfmiYDmjIHph43ph4/jgavjg5zjg7zjg4rjgrlcclxuICAgICAgICBwd3I6IDAsICAvLyDln7rmnKznmoTlvLfjgZXjgILmlLvmkoPlipvjgavlvbHpn79cclxuICAgICAgICB2aXQ6IDAsICAvLyDogJDkuYXlipvjgIJIUC9NUOOBruacgOWkp+WApOOChOmYsuW+oeWKm+OAgeWbnuW+qeWApOOBq+W9semfv+OCkuS4juOBiOOCi1xyXG4gICAgICAgIGRleDogMCwgIC8vIOWZqOeUqOOBleOAguWRveS4reeOh+OBq+W9semfv+OCkuS4juOBiOOCi+OAgumjm+OBs+mBk+WFt+OChOmVt+i3nemboumtlOazleOBp+OBr+eJueOBq+W9semfv+OAgue9oOino+mZpOOBq+OCguW9semfv1xyXG4gICAgICAgIGFnaTogMCwgIC8vIOe0oOaXqeOBleOAguihjOWLlemAn+W6puOChOWbnumBv+eOh+OBq+W9semfv+OCkuS4juOBiOOCi+OAguWRveS4reeOh+OBq+OCguW9semfv1xyXG4gICAgICAgIHRlYzogMCwgIC8vIOaKgOihk+WKm+OAgue1jOmok+OBp+WQkeS4iuOBl+OBpuiDveWKm+WApChxdWMvY25jKeOBq+ODnOODvOODiuOCueOCkuS4juOBiOOCi1xyXG4gICAgICAgIGx1azogMCwgIC8vIOW5uOmBi+WApOOAgmNuY+OBq+Wkp+OBjeOBj+W9semfv+OBmeOCi1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYT86IEpTT05fSGVyb19BYmlsaXR5KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaWR4IGluIHRoaXMudikge3RoaXMudltpZHhdID0gMDt9XHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChrZXk6IHN0cmluZyk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKCEoa2V5IGluIHRoaXMudikpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudltrZXldO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldChrZXk6IHN0cmluZywgdmFsOiBudW1iZXIpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICghKGtleSBpbiB0aGlzLnYpKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMudltrZXldID0gdmFsO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZba2V5XTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRBbnkoa2V5OiBzdHJpbmcsIHM6IEpTT05fSGVyb19BYmlsaXR5KTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaWR4IGluIHMpIHtcclxuICAgICAgICAgICAgaWYgKCEoaWR4IGluIHRoaXMudikpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB0aGlzLnZba2V5XSA9IHNba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZChhOiBKU09OX0hlcm9fQWJpbGl0eSk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhKSB7XHJcbiAgICAgICAgICAgIHRoaXMudltrZXldICs9IGFba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgY2FsY194cCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnYueHAgID0gIE1hdGguY2VpbCggMjAqdGhpcy52LnN0ciArIDIwKnRoaXMudi52aXQgKyA1KnRoaXMudi50ZWMgKyA1KnRoaXMudi5sdWsgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY2FsY19lbCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnYuYXRrID0gIE1hdGguY2VpbCggMip0aGlzLnYuc3RyICsgMip0aGlzLnYucHdyICsgMSp0aGlzLnYudGVjICk7XHJcbiAgICAgICAgdGhpcy52LmRlZiA9ICBNYXRoLmNlaWwoIDIqdGhpcy52LnN0ciArIDIqdGhpcy52LnZpdCArIDEqdGhpcy52LnRlYyApO1xyXG4gICAgICAgIHRoaXMudi5xdWMgPSAgTWF0aC5jZWlsKCAyKnRoaXMudi5kZXggKyAyKnRoaXMudi5hZ2kgKyAxKnRoaXMudi50ZWMgKTtcclxuICAgICAgICB0aGlzLnYuY25jID0gIE1hdGguY2VpbCggMyp0aGlzLnYubHVrICAgICAgICAgICAgICAgICsgMip0aGlzLnYudGVjICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJhbmRvbV9tYWtlKGhlbG9fbGV2ZWw6IG51bWJlciA9IDApOiBDX0hlcm9BYmlsaXR5IHtcclxuXHJcbiAgICAgICAgY29uc3QgaGwgICA9IGhlbG9fbGV2ZWwgKyAxOyAvLyDjg5Ljg7zjg63jg7zjg6zjg5njg6vjga7liJ3mnJ/lgKRcclxuXHJcbiAgICAgICAgdGhpcy52LnN0ciA9ICBfaW5yYW5kKDUsICAgMjAsIDIuMCkgKiBobDtcclxuICAgICAgICB0aGlzLnYucHdyID0gIF9pbnJhbmQoNSwgICAyMCwgMi4wKSAqIGhsO1xyXG4gICAgICAgIHRoaXMudi52aXQgPSAgX2lucmFuZCg1LCAgIDIwLCAyLjApICogaGw7XHJcbiAgICAgICAgdGhpcy52LmRleCA9ICBfaW5yYW5kKDUsICAgMjAsIDIuMCkgKiBobDtcclxuICAgICAgICB0aGlzLnYuYWdpID0gIF9pbnJhbmQoNSwgICAyMCwgMi4wKSAqIGhsO1xyXG4gICAgICAgIHRoaXMudi50ZWMgPSAgX2lucmFuZCg1LCAgIDIwLCAyLjApICogaGw7XHJcbiAgICAgICAgdGhpcy52Lmx1ayA9ICBfaW5yYW5kKDUsICAgMjAsIDIuMCkgKiBobDtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy52LnhkICA9ICAwO1xyXG5cclxuICAgICAgICB0aGlzLmNhbGNfeHAoKTtcclxuICAgICAgICB0aGlzLmNhbGNfZWwoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX0hlcm9fQWJpbGl0eSB7XHJcbiAgICAgICAgY29uc3QgYTogSlNPTl9IZXJvX0FiaWxpdHkgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy52KSBhW2tleV0gPSB0aGlzLnZba2V5XTtcclxuICAgICAgICByZXR1cm4gYTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoYTogSlNPTl9IZXJvX0FiaWxpdHkpOiBDX0hlcm9BYmlsaXR5IHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYSkge1xyXG4gICAgICAgICAgICBpZiAoa2V5IGluIHRoaXMudiAmJiBhW2tleV0gIT09IHVuZGVmaW5lZCkgdGhpcy52W2tleV0gPSBhW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2xvbmUoczogQ19IZXJvQWJpbGl0eSk6IENfSGVyb0FiaWxpdHkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ19IZXJvQWJpbGl0eShzLmVuY29kZSgpKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ19Qb2ludCB9ICAgICAgICAgICAgICAgICAgIGZyb20gJy4vQ19Qb2ludCc7XHJcbmltcG9ydCB7IENfUG9pbnREaXIsIEpTT05fUG9pbnREaXIgfSBmcm9tICcuL0NfUG9pbnREaXInO1xyXG5pbXBvcnQgeyBUX0RpcmVjdGlvbiB9ICAgICAgICAgICAgICAgZnJvbSAnLi9DX1BvaW50RGlyJztcclxuaW1wb3J0IHsgSV9KU09OLCBKU09OX0FueSB9ICAgICAgICAgIGZyb20gJy4vQ19TYXZlSW5mbyc7XHJcbmltcG9ydCB7IFRfTWFrZUVudW1UeXBlIH0gICAgICAgICAgICBmcm9tIFwiLi4vZF91dGwvVF9NYWtlRW51bVR5cGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUX0xja2Q6e1tsY2tkOiBzdHJpbmddOiBudW1iZXJ9ICA9IHtcclxuICAgIFVua246IDAsXHJcbiAgICBNYXplOiAxLFxyXG4gICAgR3VsZDogMixcclxufSBhcyBjb25zdDtcclxuZXhwb3J0IHR5cGUgVF9MY2tkICAgPSBUX01ha2VFbnVtVHlwZTx0eXBlb2YgVF9MY2tkPjtcclxuXHJcbmZ1bmN0aW9uIF9sY2tkX2tleShsY2tkOiBUX0xja2QpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKFRfTGNrZCkuZmluZChrZXkgPT4gVF9MY2tkW2tleV0gPT09IGxja2QpID8/IFwiPz8/P1wiO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fTG9jYXRpb24gZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBraW5kPzogICAgc3RyaW5nLFxyXG4gICAgbmFtZT86ICAgIHN0cmluZyxcclxuICAgIGxvY191aWQ/OiBzdHJpbmcsXHJcbiAgICBsb2NfcG9zPzogSlNPTl9Qb2ludERpcixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJX0xvY2F0ZSB7XHJcbiAgICB1aWQ6ICAgICAgKCk9PnN0cmluZztcclxuICAgIGdldF9sY2tkOiAoKT0+VF9MY2tkO1xyXG4gICAgZ2V0X25hbWU6ICgpPT5zdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX0xvY2F0aW9uIGltcGxlbWVudHMgSV9KU09OIHtcclxuICAgIHByb3RlY3RlZCBsb2Nfa2luZDogVF9MY2tkID0gVF9MY2tkLlVua247XHJcbiAgICBwcm90ZWN0ZWQgbG9jX25hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgcHJvdGVjdGVkIGxvY191aWQ6ICBzdHJpbmcgPSAnJztcclxuICAgIHByb3RlY3RlZCBsb2NfcG9zOiAgQ19Qb2ludERpciA9IG5ldyBDX1BvaW50RGlyKCk7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGpzb24/OiBKU09OX0xvY2F0aW9uKSB7XHJcbiAgICAgICAgaWYgKGpzb24gIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoanNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldF9sY2tkX3N0cigpOiBzdHJpbmcgIHtyZXR1cm4gX2xja2Rfa2V5KHRoaXMubG9jX2tpbmQpO31cclxuICAgIHB1YmxpYyBnZXRfbGNrZCgpOiBUX0xja2QgICAgICB7cmV0dXJuIHRoaXMubG9jX2tpbmQ7fVxyXG4gICAgcHVibGljIGdldF9uYW1lKCk6IHN0cmluZyAgICAgIHtyZXR1cm4gdGhpcy5sb2NfbmFtZTt9XHJcbiAgICBwdWJsaWMgZ2V0X3VpZCgpOiAgc3RyaW5nICAgICAge3JldHVybiB0aGlzLmxvY191aWQ7fVxyXG5cclxuICAgIHB1YmxpYyBzZXRfbGNrZChsY2tkOiBUX0xja2QpOiBDX0xvY2F0aW9ufHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKCEoX2xja2Rfa2V5KGxja2QpIGluIFRfTGNrZCkpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5sb2Nfa2luZCA9IGxja2Q7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X25hbWUobmFtZTogc3RyaW5nKTogICB2b2lkIHt0aGlzLmxvY19uYW1lID0gbmFtZTt9XHJcbiAgICBwdWJsaWMgc2V0X3VpZCAodWlkOiBzdHJpbmcpOiAgICB2b2lkIHt0aGlzLmxvY191aWQgID0gdWlkO31cclxuICAgIFxyXG4gICAgcHVibGljIHNldF9sY2tkX3N0cihsY2tkOiBzdHJpbmcpOiBDX0xvY2F0aW9ufHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKCEobGNrZCBpbiBUX0xja2QpKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMubG9jX2tpbmQgPSBUX0xja2RbbGNrZF07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXRfcCgpOiBDX1BvaW50ICAgICB7XHJcbi8vICAgICAgICBpZiAodGhpcy5sb2Nfa2luZCAhPSBUX0xja2QuTWF6ZSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NfcG9zLmdldF9wKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X2QoKTogVF9EaXJlY3Rpb24ge1xyXG4vLyAgICAgICAgaWYgKHRoaXMubG9jX2tpbmQgIT0gVF9MY2tkLk1hemUpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jX3Bvcy5nZXRfZCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wZCgpOiBDX1BvaW50RGlyIHtcclxuLy8gICAgICAgIGlmICh0aGlzLmxvY19raW5kICE9IFRfTGNrZC5NYXplKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY19wb3MuZ2V0X3BkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldF9wICAgKHA6IENfUG9pbnREaXIpOiBDX1BvaW50RGlyfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jX2tpbmQgIT09IFRfTGNrZC5NYXplKSAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jX3Bvcy5zZXRfcChwKSA9PT0gdW5kZWZpbmVkKSAgcmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jX3BvcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfZCAgIChkOiBUX0RpcmVjdGlvbik6IFRfRGlyZWN0aW9ufHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jX2tpbmQgIT09IFRfTGNrZC5NYXplKSAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jX3Bvcy5zZXRfZChkKSA9PT0gdW5kZWZpbmVkKSAgcmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jX3Bvcy5kO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wZCAgKHBkOiBDX1BvaW50RGlyKTogQ19Qb2ludERpcnx1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY19raW5kICE9PSBUX0xja2QuTWF6ZSkgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAodGhpcy5sb2NfcG9zLnNldF9wZChwZCkgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jX3BvcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX0xvY2F0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBraW5kOiAgICAgX2xja2Rfa2V5KHRoaXMubG9jX2tpbmQpLFxyXG4gICAgICAgICAgICBuYW1lOiAgICAgdGhpcy5sb2NfbmFtZSxcclxuICAgICAgICAgICAgbG9jX3VpZDogIHRoaXMubG9jX3VpZCxcclxuICAgICAgICAgICAgbG9jX3BvczogIHRoaXMubG9jX3Bvcy5lbmNvZGUoKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShqPzogSlNPTl9Mb2NhdGlvbik6IENfTG9jYXRpb24ge1xyXG4gICAgICAgIGlmIChqID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChqLmtpbmQgPT09IHVuZGVmaW5lZCB8fCAhKGoua2luZCBpbiBUX0xja2QpKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGoua2luZCAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmxvY19raW5kID0gVF9MY2tkW2oua2luZF07XHJcbiAgICAgICAgaWYgKGoubmFtZSAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmxvY19uYW1lID0gai5uYW1lO1xyXG4gICAgICAgIGlmIChqLmxvY191aWQgIT09IHVuZGVmaW5lZCkgdGhpcy5sb2NfdWlkICA9IGoubG9jX3VpZDtcclxuICAgICAgICBpZiAoai5sb2NfcG9zICE9PSB1bmRlZmluZWQpIHRoaXMubG9jX3Bvcy5kZWNvZGUoai5sb2NfcG9zKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBUX016S2luZCB9ICAgICAgICAgICAgICBmcm9tIFwiLi9UX016S2luZFwiO1xyXG5pbXBvcnQgeyBDX01hemVDZWxsIH0gICAgICAgICAgICBmcm9tIFwiLi9DX01hemVDZWxsXCI7XHJcbmltcG9ydCB7IENfTWF6ZU9iaiwgSV9NYXplT2JqLCBKU09OX01hemVPYmogfSBmcm9tIFwiLi9DX01hemVPYmpcIjtcclxuaW1wb3J0IHsgQ19Qb2ludCB9ICAgICAgICAgICAgICAgZnJvbSBcIi4vQ19Qb2ludFwiO1xyXG5pbXBvcnQgeyBJX0xvY2F0ZSwgVF9MY2tkIH0gICAgICBmcm9tIFwiLi9DX0xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IENfUmFuZ2UgfSAgICAgICAgICAgICAgIGZyb20gXCIuL0NfUmFuZ2VcIjtcclxuaW1wb3J0IHsgQ19UZWFtLCBKU09OX1RlYW0gfSAgICAgZnJvbSBcIi4vQ19UZWFtXCI7XHJcbmltcG9ydCB7IElfSlNPTl9VbmlxLCBKU09OX0FueSB9IGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuaW1wb3J0IHsgX2dldF91dWlkLCBfaWdyYW5kLCBfaXJhbmQgfSAgICAgICAgICAgICBmcm9tIFwiLi4vZF91dGwvRl9SYW5kXCI7XHJcbmltcG9ydCB7IF9taW4gfSBmcm9tIFwiLi4vZF91dGwvRl9NYXRoXCI7XHJcbmltcG9ydCB7IENfUG9pbnREaXIgfSBmcm9tIFwiLi9DX1BvaW50RGlyXCI7XHJcbmltcG9ydCB7IFRfRGlyZWN0aW9uIH0gZnJvbSBcIi4vVF9EaXJlY3Rpb25cIjtcclxuaW1wb3J0IHsgQ19Qb2ludExpbmsyRCwgQ19Qb2ludFNldDJEIH0gZnJvbSBcIi4vQ19Qb2ludFNldDJEXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fTWF6ZSBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGlkPzogICAgICBudW1iZXIsXHJcbiAgICB1bmlxX2lkPzogc3RyaW5nLFxyXG4gICAgc2F2ZV9pZD86IG51bWJlcixcclxuICAgIGZsb29yPzogICBudW1iZXIsXHJcbiAgICBuYW1lPzogICAgc3RyaW5nLFxyXG4gICAgc2l6ZV94PzogIG51bWJlcixcclxuICAgIHNpemVfeT86ICBudW1iZXIsXHJcbiAgICBzaXplX3o/OiAgbnVtYmVyLFxyXG4gICAgbWF6ZT86ICAgIHN0cmluZywgXHJcbiAgICBtYXNrPzogICAgc3RyaW5nLCBcclxuICAgIG15dGVhbT86ICBKU09OX1RlYW0sIFxyXG4gICAgb2Jqcz86ICAgIEpTT05fTWF6ZU9ialtdLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X21hemVfaW5mbyhhOiBKU09OX01hemV8dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgYWxlcnQoXCJNYXplIEluZm86XCJcclxuICAgICAgICArIFwiXFxubWF6ZSBpZCA6XCIgKyAoYS5pZCAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuZmxvb3I6IFwiICAgKyAoYS5mbG9vciAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxudW5pcSBpZCA6XCIgKyAoYS51bmlxX2lkID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2F2ZSBpZCA6XCIgKyAoYS5zYXZlX2lkID8/ICc/JylcclxuICAgICAgICArIFwiXFxubmFtZTogICBcIiAgKyAoYS5uYW1lICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2l6ZV94OiBcIiAgKyAoYS5zaXplX3ggID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2l6ZV95OiBcIiAgKyAoYS5zaXplX3kgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2l6ZV96OiBcIiAgKyAoYS5zaXplX3ogID8/ICc/JylcclxuICAgICAgICArIFwibWF6ZTpcXG5cIiAgICAgKyAoYS5tYXplICAgID8/ICc/JylcclxuICAgICAgICArIFwibWFzazpcXG5cIiAgICAgKyAoYS5tYXNrICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcbn1cclxuXHJcblxyXG50eXBlIF9pbml0X2FyZyA9IHtcclxuICAgIG1hemVfaWQ/OiBudW1iZXIsXHJcbiAgICBzYXZlX2lkPzogbnVtYmVyLFxyXG4gICAgZmxvb3I/OiAgIG51bWJlcixcclxuICAgIG5hbWU/OiAgICBzdHJpbmcsXHJcbiAgICBzaXplX3g/OiAgbnVtYmVyLFxyXG4gICAgc2l6ZV95PzogIG51bWJlcixcclxuICAgIHNpemVfej86ICBudW1iZXIsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX01hemUgaW1wbGVtZW50cyBJX0xvY2F0ZSwgSV9KU09OX1VuaXEge1xyXG4gICAgcHJvdGVjdGVkIG1hemVfaWQ6ICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgdW5pcV9pZDogIHN0cmluZztcclxuICAgIHByb3RlY3RlZCBzYXZlX2lkOiAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIGZsb29yOiAgICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgbmFtZTogICAgIHN0cmluZztcclxuICAgIHByb3RlY3RlZCBteV9sYXllcjogbnVtYmVyID0gMDtcclxuICAgIHByb3RlY3RlZCBzaXplOiAgICAgQ19SYW5nZTtcclxuICAgIHByb3RlY3RlZCBjZWxsczogICAgQ19NYXplQ2VsbFtdW11bXTtcclxuICAgIHByb3RlY3RlZCBtYXNrczogICAgYm9vbGVhbltdW11bXTtcclxuICAgIHByb3RlY3RlZCB1bmNsZWFyOiAgbnVtYmVyW107XHJcbiAgICBwcm90ZWN0ZWQgb2JqczogICAgIHtbdWlkOiBzdHJpbmddOiBJX01hemVPYmp9O1xyXG4gICAgcHJvdGVjdGVkIG51bV9vZl9yb29tOiAgICAgIG51bWJlciA9IDU7IC8qIOODqeODs+ODgOODoOeUn+aIkOOBrumam+OBrumDqOWxi+OBruaVsOOBruacgOWkp+aVsCAqL1xyXG4gICAgcHJvdGVjdGVkIG1heF9zaXplX29mX3Jvb206IG51bWJlciA9IDM7IC8qIOODqeODs+ODgOODoOeUn+aIkOOBrumam+OBrumDqOWxi+OBruWkp+OBjeOBlSAqL1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihhPzogX2luaXRfYXJnKSB7XHJcbiAgICAgICAgdGhpcy5tYXplX2lkID0gLTE7XHJcbiAgICAgICAgdGhpcy5zYXZlX2lkID0gLTE7XHJcbiAgICAgICAgdGhpcy51bmlxX2lkID0gJ21haV9tYXplIycgKyBfZ2V0X3V1aWQoKTtcclxuICAgICAgICB0aGlzLmZsb29yICAgPSAwO1xyXG4gICAgICAgIHRoaXMubmFtZSAgICA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2l6ZSAgICA9IG5ldyBDX1JhbmdlKFxyXG4gICAgICAgICAgICBuZXcgQ19Qb2ludCgwLCAwLCAwKSwgXHJcbiAgICAgICAgICAgIG5ldyBDX1BvaW50KDIsIDIsIDIpKTtcclxuICAgICAgICB0aGlzLmNlbGxzICAgPSB0aGlzLl9faW5pdF9tYXplKFRfTXpLaW5kLlN0b25lKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXNrcyAgID0gdGhpcy5fX2luaXRfbWFzayh0cnVlKTtcclxuICAgICAgICB0aGlzLnVuY2xlYXIgPSBbXTtcclxuICAgICAgICB0aGlzLl9faW5pdF91bmNsZWFyKCk7XHJcblxyXG4gICAgICAgIHRoaXMub2JqcyAgICA9IHt9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChhICE9PSB1bmRlZmluZWQpIHRoaXMuZGVjb2RlKGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfX2luaXRfbWF6ZShraW5kOiBUX016S2luZCA9IFRfTXpLaW5kLlN0b25lKTogQ19NYXplQ2VsbFtdW11bXSB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKTtcclxuICAgICAgICBjb25zdCBzaXplX3ogPSB0aGlzLnNpemUuc2l6ZV96KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNlbGxzOiBDX01hemVDZWxsW11bXVtdID0gQXJyYXkoc2l6ZV96KSBhcyBDX01hemVDZWxsW11bXVtdO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgY2VsbHNbel0gPSBBcnJheShzaXplX3kpIGFzIENfTWF6ZUNlbGxbXVtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsc1t6XVt5XSAgPSBBcnJheShzaXplX3gpIGFzIENfTWF6ZUNlbGxbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsc1t6XVt5XVt4XSA9IENfTWF6ZUNlbGwubmV3T2JqKHtraW5kOmtpbmQsIHBvczoge3g6eCwgeTp5LCB6Onp9fSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNlbGxzO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9faW5pdF9tYXNrKFlOOiBib29sZWFuKTogYm9vbGVhbltdW11bXSB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKTtcclxuICAgICAgICBjb25zdCBzaXplX3ogPSB0aGlzLnNpemUuc2l6ZV96KCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFza3MgICA9IEFycmF5KHNpemVfeikgYXMgYm9vbGVhbltdW11bXTtcclxuICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHNpemVfejsgeisrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFza3Nbel0gPSBBcnJheShzaXplX3kpIGFzIGJvb2xlYW5bXVtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hc2tzW3pdW3ldICA9IEFycmF5KHNpemVfeCkgYXMgYm9vbGVhbltdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFza3Nbel1beV1beF0gPSBZTjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5tYXNrcztcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2luaXRfdW5jbGVhcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeiA9IHRoaXMuc2l6ZS5zaXplX3ooKTtcclxuXHJcbiAgICAgICAgdGhpcy51bmNsZWFyID0gQXJyYXkoc2l6ZV96KTtcclxuICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHNpemVfejsgeisrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5jbGVhclt6XT0wO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFza3Nbel1beV1beF0pIHRoaXMudW5jbGVhclt6XSsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHB1YmxpYyB1aWQoKTogc3RyaW5nICAgICAge3JldHVybiB0aGlzLnVuaXFfaWR9XHJcbiAgICBwdWJsaWMgZ2V0X2xja2QoKTogVF9MY2tkIHtyZXR1cm4gVF9MY2tkLk1hemV9XHJcbiAgICBwdWJsaWMgZ2V0X25hbWUoKTogc3RyaW5nIHtyZXR1cm4gdGhpcy5uYW1lfVxyXG5cclxuICAgIHB1YmxpYyB3aXRoaW4ocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemUud2l0aGluKHApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyDjg6HjgqTjgrrlhoXjga7jgqrjg5bjgrjjgqfjgq/jg4jjgoTjg6Ljg7Pjgrnjgr/jg7znrYnjga7phY3nva5cclxuICAgIHB1YmxpYyBhZGRfb2JqKG9iajogSV9NYXplT2JqKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vYmpzW29iai51aWQoKV0gPSBvYmo7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcm12X29iaihvYmo6IElfTWF6ZU9iaik6IHZvaWQge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLm9ianNbb2JqLnVpZCgpXTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfb2JqX3h5eih4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKTogSV9NYXplT2JqfG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldF9vYmoobmV3IENfUG9pbnQoeCwgeSwgeikpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9vYmoocDogQ19Qb2ludCk6IElfTWF6ZU9ianxudWxsIHtcclxuICAgICAgICB2YXIgbGF5ZXIgPSAtMTtcclxuICAgICAgICB2YXIgb2JqOiBJX01hemVPYmp8bnVsbCAgID0gbnVsbDtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBpZCBpbiB0aGlzLm9ianMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3QgPSB0aGlzLm9ianNbaWRdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGV4aXN0LnZpZXcoKSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKGV4aXN0LndpdGhpbihwKSAmJiBleGlzdC52aWV3KCk/LmxldHRlcigpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdF9sYXllciA9IGV4aXN0LnZpZXcoKT8ubGF5ZXIoKT8/LTk5O1xyXG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0X2xheWVyID4gbGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXllciA9IGV4aXN0X2xheWVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iaiAgID0gZXhpc3Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZXhpc3Rfb2JqKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGlkIGluIHRoaXMub2Jqcykge1xyXG4gICAgICAgICAgICBjb25zdCBleGlzdCA9IHRoaXMub2Jqc1tpZF07XHJcbiAgICAgICAgICAgIGlmIChleGlzdC53aXRoaW4ocCkgJiYgZXhpc3QudmlldygpPy5sZXR0ZXIoKSAhPT0gbnVsbCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUZWFt44GM5p2l44Gf44Od44Kk44Oz44OI44GM5pyq6LiP5Zyw44Gg44Gj44Gf44KJ44Gf44Gg44Gu5bqK44Gr5aSJ44GI44KLXHJcbiAgICBwdWJsaWMgY2hhbmdlX3VuZXhwX3RvX2Zsb29yKHA6IENfUG9pbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRfa2luZChwKSA9PSBUX016S2luZC5VbmV4cCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldF9jZWxsKHAsIFRfTXpLaW5kLkZsb29yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMkTjg57jg4Pjg5fjga7jg57jgrnjgq/lpJbjgZfplqLpgKNcclxuICAgIHB1YmxpYyBjbGVhcl9tYXNrX2Fyb3VuZF90aGVfdGVhbSh0ZWFtOiBDX1RlYW0pOiB2b2lkIHtcclxuICAgICAgICAvLyDnj77lnKjlnLDjgajnnJ/mqKrjga/oh6rli5XnmoTjgavopovjgYjjgotcclxuICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayh0ZWFtLndhbGsoKS5nZXRfYXJvdW5kKDAsIC0xKSk7XHJcbiAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZCgwLCAgMCkpO1xyXG4gICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoMCwgIDEpKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVwdGggICA9ICA1OyAvLyAyROODnuODg+ODl+eUqOOBruWlpeihjOOBjemZkOeVjFxyXG5cclxuICAgICAgICAvLyDliY3mlrnjga7opovpgJrjgZfjgpLjg4Hjgqfjg4Pjgq/jgZfjgarjgYzjgonopovjgYjjgovjgajjgZPjgo3jga/op6PmlL7jgZnjgotcclxuICAgICAgICBmb3IgKHZhciBkID0gMTsgZCA8IGRlcHRoOyBkKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZnJvbnRfcG9zID0gdGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAwKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc19tb3ZhYmxlKGZyb250X3BvcykpIHtcclxuICAgICAgICAgICAgICAgIC8vIOato+mdouOBq+manOWus+eJqeOBjOeEoeOBkeOCjOOBsOOAgeOBneOBruS4oeWBtOOCguimi+OBiOOCi1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAtMSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAgMCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAgMSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8g5q2j6Z2i44GM6Zqc5a6z54mp44Gn44KC44Gd44Gu5omL5YmN44G+44Gn6KaL44GI44Gm44Gf44Gq44KJ44CB44Gd44Gu5aOB44Go5Lih5YG044Gv6KaL44GI44KLXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayh0ZWFtLndhbGsoKS5nZXRfYXJvdW5kKGQsIC0xKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayh0ZWFtLndhbGsoKS5nZXRfYXJvdW5kKGQsICAwKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayh0ZWFtLndhbGsoKS5nZXRfYXJvdW5kKGQsICAxKSk7XHJcbiAgICAgICAgICAgICAgICAvLyDmraPpnaLjgavpmpzlrrPnianjgYzmnInjgaPjgZ/jgonjgZ3jga7lpaXjga/opovjgYjjgarjgYTjga7jgafmjqLntKLntYLkuoZcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9fY2xlYXJfbWFzayhjbHJfcG9zOiBDX1BvaW50KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNpemUud2l0aGluKGNscl9wb3MpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1hc2tzW2Nscl9wb3Muel1bY2xyX3Bvcy55XVtjbHJfcG9zLnhdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFza3NbY2xyX3Bvcy56XVtjbHJfcG9zLnldW2Nscl9wb3MueF0gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy51bmNsZWFyW2Nscl9wb3Muel0tLTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc19mbG9vcl9jbGVhcmVkKGNscl9wb3M6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51bmNsZWFyW2Nscl9wb3Muel0gPCAxO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc19tYXplX2NsZWFyZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjbHIgb2YgdGhpcy51bmNsZWFyKSBpZiAoY2xyID4gMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc19tYXNrZWQocDogQ19Qb2ludCk6IGJvb2xlYW4ge3JldHVybiB0aGlzLmlzX21hc2tlZF94eXoocC54LCBwLnksIHAueil9XHJcbiAgICBwdWJsaWMgaXNfbWFza2VkX3h5eih4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFza3Nbel1beV1beF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzX21vdmFibGUocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghdGhpcy5zaXplLndpdGhpbihwKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5nZXRfa2luZChwKSkge1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLkZsb29yOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlVuZXhwOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVwOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0ckRuOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVEOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gICAgXHJcblxyXG4gICAgcHVibGljIGdldF94X21heCgpOiBudW1iZXIge3JldHVybiB0aGlzLnNpemUuc2l6ZV94KCk7fVxyXG4gICAgcHVibGljIGdldF95X21heCgpOiBudW1iZXIge3JldHVybiB0aGlzLnNpemUuc2l6ZV95KCk7fVxyXG4gICAgcHVibGljIGdldF96X21heCgpOiBudW1iZXIge3JldHVybiB0aGlzLnNpemUuc2l6ZV96KCk7fVxyXG4gICAgcHVibGljIGdldF9raW5kIChwOiBDX1BvaW50KTogVF9NektpbmQge1xyXG4gICAgICAgIGlmICh0aGlzLnNpemUud2l0aGluKHApKSByZXR1cm4gdGhpcy5jZWxsc1twLnpdW3AueV1bcC54XS5nZXRLaW5kKCk7XHJcbiAgICAgICAgcmV0dXJuIFRfTXpLaW5kLk5vRGVmO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9raW5kX3h5eiAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcik6IFRfTXpLaW5kIHtcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbih4LCB5LCB6KSkgcmV0dXJuIHRoaXMuY2VsbHNbel1beV1beF0uZ2V0S2luZCgpO1xyXG4gICAgICAgIHJldHVybiBUX016S2luZC5Ob0RlZjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X2NlbGxfeHl6ICh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKTogQ19NYXplQ2VsbHx1bmRlZmluZWQgeyBcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbih4LCB5LCB6KSkgcmV0dXJuIHRoaXMuY2VsbHNbel1beV1beF07XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfY2VsbCAocDogQ19Qb2ludCk6IENfTWF6ZUNlbGx8dW5kZWZpbmVkIHsgXHJcbiAgICAgICAgaWYgKHRoaXMuc2l6ZS53aXRoaW4ocCkpIHJldHVybiB0aGlzLmNlbGxzW3Auel1bcC55XVtwLnhdO1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X2NlbGwocDogQ19Qb2ludCwgazogVF9NektpbmQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbihwKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNlbGxzW3Auel1bcC55XVtwLnhdID0gQ19NYXplQ2VsbC5uZXdPYmooe2tpbmQ6IGssIHBvczogcH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfY2VsbF94eXooeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgazogVF9NektpbmQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbih4LCB5LCB6KSkge1xyXG4gICAgICAgICAgICB0aGlzLmNlbGxzW3pdW3ldW3hdID0gQ19NYXplQ2VsbC5uZXdPYmooe2tpbmQ6IGssIHBvczoge3g6eCwgeTp5LCB6Onp9fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGNhbl9tb3ZlKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaXplLndpdGhpbihwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjYW5fVUQocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzX21vdmFibGUocCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbnB1YmxpYyBmaWxsX2NlbGwoa2luZDogVF9NektpbmQsIGZsb29yOm51bWJlcik6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgaCA9IDA7IGggPCB0aGlzLnNpemUuc2l6ZV95KCk7IGgrKylcclxuICAgIGZvciAobGV0IHcgPSAwOyB3IDwgdGhpcy5zaXplLnNpemVfeCgpOyB3KyspXHJcbiAgICAgICAgdGhpcy5zZXRfY2VsbF94eXoodywgaCwgZmxvb3IsIGtpbmQpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxyXG5wdWJsaWMgc2V0X2JveChraW5kOiBUX016S2luZCwgdG9wX3g6bnVtYmVyLCB0b3BfeTogbnVtYmVyLCBzaXplX3g6IG51bWJlciwgc2l6ZV95OiBudW1iZXIsIGZsb29yOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICh0b3BfeCArIHNpemVfeCA+IHRoaXMuc2l6ZS5zaXplX3goKSkgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpIC0gdG9wX3ggKyAxOyBcclxuICAgIGlmICh0b3BfeSArIHNpemVfeSA+IHRoaXMuc2l6ZS5zaXplX3koKSkgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpIC0gdG9wX3kgKyAxO1xyXG4gICAgXHJcbiAgICBjb25zdCB0b3AgPSB0b3BfeTtcclxuICAgIGNvbnN0IGJ0bSA9IHRvcCAgICArIHNpemVfeSAtIDE7XHJcbiAgICBjb25zdCBsZnQgPSB0b3BfeDtcclxuICAgIGNvbnN0IHJndCA9IGxmdCAgICArIHNpemVfeCAtIDE7XHJcbiAgICBcclxuICAgIC8vIOWMl+WBtCjkuIop44Go5Y2X5YG0KOS4iynjgpLnn7Plo4HjgatcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eih4LCB0b3AsIGZsb29yLCBraW5kKTtcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eih4LCBidG0sIGZsb29yLCBraW5kKTtcclxuICAgIH1cclxuICAgIC8vIOadseWBtCjlj7Mp44Go6KW/5YG0KOW3pinjgpLnn7Plo4HjgatcclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihsZnQsIHksIGZsb29yLCBraW5kKTtcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihyZ3QsIHksIGZsb29yLCBraW5kKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5cclxuLy8g6ZqO5LiK44Go6ZqO5LiL44Gr6ZqO5q6144KS6Kit572u44GZ44KLXHJcbnB1YmxpYyBjcmVhdGVfc3RhaXIoZmxvb3I6bnVtYmVyKTogQ19Qb2ludERpciB7XHJcbiAgICBjb25zdCBIX3NpemVfeCA9ICh0aGlzLnNpemUuc2l6ZV94KCkgLSAxKSAvIDI7XHJcbiAgICBjb25zdCBIX3NpemVfeSA9ICh0aGlzLnNpemUuc2l6ZV95KCkgLSAxKSAvIDI7XHJcbiAgICBjb25zdCBwb3NfeCAgICA9IDIgKiBfaXJhbmQoMCwgSF9zaXplX3ggLSAxKSArIDE7XHJcbiAgICBjb25zdCBwb3NfeSAgICA9IDIgKiBfaXJhbmQoMCwgSF9zaXplX3kgLSAxKSArIDE7XHJcbiAgICBjb25zdCBwb3NfZCAgICA9IDEgKiBfaXJhbmQoMCwgVF9EaXJlY3Rpb24uTUFYKTtcclxuXHJcbiAgICAvLyDkubHmlbDjgaflvpfjgZ/luqfmqJnjgavpmo7mrrXjgpLnva7jgY9cclxuICAgIGlmIChmbG9vciA+PSAxKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0X2NlbGxfeHl6KHBvc194LCBwb3NfeSwgZmxvb3IgLSAxKT8uZ2V0S2luZCgpICE9PSBUX016S2luZC5TdHJVcCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihwb3NfeCwgcG9zX3ksIGZsb29yIC0gMSwgIFRfTXpLaW5kLlN0ckRuKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihwb3NfeCwgcG9zX3ksIGZsb29yIC0gMSwgIFRfTXpLaW5kLlN0clVEKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5nZXRfY2VsbF94eXoocG9zX3gsIHBvc195LCBmbG9vcik/LmdldEtpbmQoKSAhPT0gVF9NektpbmQuU3RyRG4pIHtcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihwb3NfeCwgcG9zX3ksIGZsb29yLCAgVF9NektpbmQuU3RyVXApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihwb3NfeCwgcG9zX3ksIGZsb29yLCAgVF9NektpbmQuU3RyVUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgQ19Qb2ludERpcih7eDogcG9zX3gsIHk6IHBvc195LCB6OiBmbG9vciwgZDogcG9zX2R9KTtcclxufVxyXG5cclxucHVibGljIGNyZWF0ZV9tYXplKGZsb29yOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgIGNvbnN0IHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKTtcclxuXHJcblxyXG4gICAgLy8g44OA44Oz44K444On44Oz44GnJGZsb29y44Gn5oyH5a6a44GV44KM44Gf6ZqO44KS5pyq6LiP5Zyw44Gr44GZ44KLIFxyXG4gICAgdGhpcy5maWxsX2NlbGwoVF9NektpbmQuVW5leHAsIGZsb29yKTtcclxuXHJcbiAgICAvLyDjg4Djg7Pjgrjjg6fjg7Pjga7ovKrpg63jgpLnn7Plo4HjgavjgZnjgotcclxuICAgIHRoaXMuc2V0X2JveChUX016S2luZC5TdG9uZSwgMCwgMCwgc2l6ZV94LCBzaXplX3ksIGZsb29yKTtcclxuXHJcbiAgICAvLyDpgJrot6/jgavkuIDjgaTnva7jgY3jgavlo4HjgYzmiJDplbfjgZnjgovjg53jgqTjg7Pjg4jjgpLoqK3lrprjgZnjgotcclxuICAgIC8vIOODneOCpOODs+ODiOOBi+OCieWjgeOCkuS8uOOBsOOBmeaWueWQkeOCkuODqeODs+ODgOODoOOBq+axuuOCgeOCi1xyXG4gICAgY29uc3QgcG9pbnRzID0gbmV3IENfUG9pbnRTZXQyRCgpO1xyXG4gICAgZm9yIChsZXQgaCA9IDI7IGggPCBzaXplX3kgLSAyOyBoICs9IDIpe1xyXG4gICAgICAgIGZvciAobGV0IHcgPSAyOyB3IDwgc2l6ZV94IC0gMjsgdyArPSAyKXtcclxuICAgICAgICAgICAgY29uc3QgZGkgPSBfaXJhbmQoMCwgVF9EaXJlY3Rpb24uTUFYKTtcclxuICAgICAgICAgICAgcG9pbnRzLnB1c2gobmV3IENfUG9pbnRMaW5rMkQodywgaCwgZGkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Lmx5pWw44Gn44GE44GP44Gk44GL6YOo5bGL44KS5L2c44KLXHJcbiAgICBjb25zdCByb29tc19hcnJheSA9IFtdO1xyXG4gICAgY29uc3QgbnVtX29mX3Jvb20gPSBfaXJhbmQoMCwgdGhpcy5udW1fb2Zfcm9vbSk7XHJcbiAgICBmb3IgKGxldCBjbnQgPSAwOyBjbnQgPCBudW1fb2Zfcm9vbTsgY250KyspIHtcclxuICAgICAgICBjb25zdCBsZW5nX3ggPSBfaXJhbmQoMSwgIHRoaXMubWF4X3NpemVfb2Zfcm9vbSkgKiAyICsgMTtcclxuICAgICAgICBjb25zdCBsZW5nX3kgPSBfaXJhbmQoMSwgIHRoaXMubWF4X3NpemVfb2Zfcm9vbSkgKiAyICsgMTtcclxuICAgICAgICBjb25zdCByb29tX3ggPSBfaXJhbmQoMCwgKHNpemVfeCAtIGxlbmdfeCkgLyAyKSAqIDI7XHJcbiAgICAgICAgY29uc3Qgcm9vbV95ID0gX2lyYW5kKDAsIChzaXplX3kgLSBsZW5nX3kpIC8gMikgKiAyO1xyXG4gICAgICAgIHJvb21zX2FycmF5LnB1c2goe3R4OiByb29tX3gsIHR5OiByb29tX3ksIHN4OiBsZW5nX3gsIHN5OiBsZW5nX3l9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDpg6jlsYvjga7kuK3jga7jg53jgqTjg7Pjg4jjgpLliYrpmaTjgZnjgotcclxuICAgIGZvciAoY29uc3Qgcm9vbSBvZiByb29tc19hcnJheSkge1xyXG4gICAgICAgIGZvciAobGV0IGlpID0gMDsgaWkgPCBwb2ludHMuc2V0Lmxlbmd0aDsgaWkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBwID0gIHBvaW50cy5zZXRbaWldO1xyXG4gICAgICAgICAgICBpZiAocCA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGlmICggICAgKHAueCA+PSByb29tLnR4KSBcclxuICAgICAgICAgICAgICAgICYmICAocC54IDw9IHJvb20udHggKyByb29tLnN4KVxyXG4gICAgICAgICAgICAgICAgJiYgIChwLnkgPj0gcm9vbS50eSlcclxuICAgICAgICAgICAgICAgICYmICAocC55IDw9IHJvb20udHkgKyByb29tLnN5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50cy5yZW1vdmUocCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyDjg53jgqTjg7Pjg4jjgYvjgonlo4HjgpLmiJDplbfjgZXjgZvjgabov7fot6/jgpLkvZzjgotcclxuICAgIGZvciAoY29uc3QgcCBvZiBwb2ludHMuc2V0KSB7XHJcbiAgICAgICAgaWYgKHAgPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g44Od44Kk44Oz44OI44Gu5L2N572u44Gr55+z5aOB44KS572u44GPXHJcbiAgICAgICAgdGhpcy5zZXRfY2VsbF94eXoocC54LCBwLnksIGZsb29yLCBUX016S2luZC5TdG9uZSk7XHJcblxyXG4gICAgICAgIC8vIOafseOBruadseilv+WNl+WMl+OBruOBhOOBmuOCjOOBi+OBq+OCguefs+WjgeOCkue9ruOBj1xyXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IFswLCAwLCAwLCAwXTtcclxuICAgICAgICBjb25zdCBkaSA9IENfUG9pbnRMaW5rMkQuY2FzdChwKT8uZGkgPz8gVF9EaXJlY3Rpb24uWDtcclxuICAgICAgICBpZiAoZGkgPT09IFRfRGlyZWN0aW9uLlgpIGNvbnRpbnVlO1xyXG4gICAgICAgIGRpcmVjdGlvbltkaV0gPSAxO1xyXG5cclxuICAgICAgICB0aGlzLnNldF9jZWxsX3h5eihcclxuICAgICAgICAgICAgcC54IC0gZGlyZWN0aW9uW1RfRGlyZWN0aW9uLlddICsgZGlyZWN0aW9uW1RfRGlyZWN0aW9uLkVdLCBcclxuICAgICAgICAgICAgcC55IC0gZGlyZWN0aW9uW1RfRGlyZWN0aW9uLk5dICsgZGlyZWN0aW9uW1RfRGlyZWN0aW9uLlNdLCBcclxuICAgICAgICAgICAgZmxvb3IsXHJcbiAgICAgICAgICAgIFRfTXpLaW5kLlN0b25lXHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyDplonpjpbnqbrplpPjgYzlh7rmnaXjgabjgYTjgZ/jgonlh7rlj6PjgpLkvZzjgotcclxuICAgIC8vIOODneOCpOODs+ODiOOCkuODiOODrOODvOOCueOBl+OBpuOAgeaXouWHuuOBruODneOCpOODs+ODiOOBq+e5i+OBjOOBo+OBpuOBhOOBn+OCiemWiemOluepuumWk1xyXG4gICAgZm9yIChjb25zdCBzZXQgb2YgcG9pbnRzLnNldCkge1xyXG4gICAgICAgIGlmIChzZXQgPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcblxyXG4gICAgICAgIGNvbnN0IFt5biwgdHJhY2Vfc2V0XSA9IHRoaXMuY2hlY2tfY2xvc2Uoc2V0LngsIHNldC55LCBwb2ludHMsIG5ldyBDX1BvaW50U2V0MkQoKSk7XHJcbiAgICAgICAgaWYgKHluKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3Blbl9leGl0KHRyYWNlX3NldCwgVF9NektpbmQuVW5leHAsIGZsb29yKTtcclxuICAgICAgICAgICAgaWYgKHRyYWNlX3NldCAhPT0gdW5kZWZpbmVkKSBmb3IgKGNvbnN0IHQgb2YgdHJhY2Vfc2V0LnNldCkgcG9pbnRzLnJlbW92ZSh0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuXHJcbnByb3RlY3RlZCBjaGVja19jbG9zZSh4OiBudW1iZXIsIHk6IG51bWJlciwgcG9pbnRfc2V0OiBDX1BvaW50U2V0MkQsIHRyYWNlX3NldDogQ19Qb2ludFNldDJEfHVuZGVmaW5lZCk6IFtib29sZWFuLCBDX1BvaW50U2V0MkR8dW5kZWZpbmVkXSB7XHJcbiAgICBpZiAoeCA8IDIgfHwgeSA8IDIgfHwgeCA+IHRoaXMuc2l6ZS5zaXplX3goKSAtIDIgfHwgeSA+IHRoaXMuc2l6ZS5zaXplX3koKSAtIDIpIHJldHVybiBbZmFsc2UsIHVuZGVmaW5lZF07XHJcblxyXG4gICAgaWYgKHBvaW50X3NldCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gW2ZhbHNlLCB1bmRlZmluZWRdO1xyXG4gICAgaWYgKHBvaW50X3NldD8uaXNfZXhpc3QoeCwgeSkgPT09IGZhbHNlKSByZXR1cm4gW2ZhbHNlLCB1bmRlZmluZWRdO1xyXG5cclxuICAgIGlmICh0cmFjZV9zZXQgIT09IHVuZGVmaW5lZCAmJiB0cmFjZV9zZXQ/LmlzX2V4aXN0KHgsIHkpID09PSB0cnVlKSAgcmV0dXJuIFt0cnVlLCAgdHJhY2Vfc2V0XTtcclxuXHJcbiAgICBjb25zdCBwID0gcG9pbnRfc2V0LmdldF9wb2ludCh4LCB5KTtcclxuICAgIHRyYWNlX3NldCA/Pz0gbmV3IENfUG9pbnRTZXQyRCgpO1xyXG4gICAgdHJhY2Vfc2V0Py5wdXNoKG5ldyBDX1BvaW50TGluazJEKHgsIHksIENfUG9pbnRMaW5rMkQuY2FzdChwKT8uZGkpKTtcclxuXHJcbiAgICBsZXQgbmV4dF94OiBudW1iZXIgPSAwLCBuZXh0X3k6IG51bWJlciA9IDA7XHJcbiAgICBzd2l0Y2ggKENfUG9pbnRMaW5rMkQuY2FzdChwKT8uZGkpIHtcclxuICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46ICAvLyDljJdcclxuICAgICAgICAgICAgbmV4dF94ID0geDtcclxuICAgICAgICAgICAgbmV4dF95ID0geSAtIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogIC8vIOadsVxyXG4gICAgICAgICAgICBuZXh0X3ggPSB4ICsgMjtcclxuICAgICAgICAgICAgbmV4dF95ID0geTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiAgLy8g5Y2XXHJcbiAgICAgICAgICAgIG5leHRfeCA9IHg7XHJcbiAgICAgICAgICAgIG5leHRfeSA9IHkgKyAyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6ICAvLyDopb9cclxuICAgICAgICAgICAgbmV4dF94ID0geCAtIDI7XHJcbiAgICAgICAgICAgIG5leHRfeSA9IHk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja19jbG9zZShuZXh0X3gsIG5leHRfeSwgcG9pbnRfc2V0LCB0cmFjZV9zZXQpO1xyXG59XHJcblxyXG5wcm90ZWN0ZWQgb3Blbl9leGl0KHA6IENfUG9pbnRTZXQyRHx1bmRlZmluZWQsIGtpbmQ6IFRfTXpLaW5kLCBmbG9vcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAocCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgY250ID0gX2lyYW5kKDAsIHAuc2V0Lmxlbmd0aCAtIDEpO1xyXG4gICAgY29uc3QgcHAgID0gIHAuc2V0W2NudF07XHJcblxyXG4gICAgbGV0IGRpcmVjdGlvbiA9IFswLCAwLCAwLCAwXTtcclxuICAgIGNvbnN0IGRpID0gQ19Qb2ludExpbmsyRC5jYXN0KHBwKT8uZGkgPz8gVF9EaXJlY3Rpb24uTlxyXG4gICAgZGlyZWN0aW9uW2RpXSA9IDE7XHJcblxyXG4gICAgdGhpcy5zZXRfY2VsbF94eXooXHJcbiAgICAgICAgcHAueCAtIGRpcmVjdGlvbltUX0RpcmVjdGlvbi5XXSArIGRpcmVjdGlvbltUX0RpcmVjdGlvbi5FXSwgXHJcbiAgICAgICAgcHAueSAtIGRpcmVjdGlvbltUX0RpcmVjdGlvbi5OXSArIGRpcmVjdGlvbltUX0RpcmVjdGlvbi5TXSwgXHJcbiAgICAgICAgZmxvb3IsXHJcbiAgICAgICAga2luZCBcclxuICAgICk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuXHJcbi8qXHJcbnB1YmxpYyBzdGF0aWMgZnJvbV9vYmpfdG9fc3RyaW5nKG9hOiBDX01hemUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9hLCBudWxsLCBcIlxcdFwiKTtcclxufVxyXG5wdWJsaWMgc3RhdGljIGZyb21fb2JqQXJyYXlfdG9fc3RyaW5nKG9hYToge1t1aWQ6IHN0cmluZ106IENfTWF6ZX0pOiBzdHJpbmcge1xyXG4gICAgY29uc3Qgb2EgPSBbXSBhcyBDX01hemVbXTtcclxuICAgIGZvciAoY29uc3QgaWkgaW4gb2FhKSBvYS5wdXNoKG9hYVtpaV0pO1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9hLCBudWxsLCBcIlxcdFwiKTtcclxufVxyXG5wdWJsaWMgc3RhdGljIGZyb21fc3RyaW5nX3RvX29iaih0eHQ6IHN0cmluZyk6IENfTWF6ZSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGogICA9IEpTT04ucGFyc2UodHh0KSBhcyBKU09OX01hemVbXTtcclxuICAgICAgICByZXR1cm4gbmV3IENfTWF6ZSgpLmRlY29kZShqKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ19NYXplKCk7XHJcbiAgICB9O1xyXG59XHJcbnB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdfdG9fb2JqQXJyYXkodHh0OiBzdHJpbmcpOiB7W3VpZDogc3RyaW5nXTogQ19NYXplfSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGogICA9IEpTT04ucGFyc2UodHh0KSBhcyBKU09OX01hemVbXTtcclxuICAgICAgICBjb25zdCBtcGEgPSB7fSBhcyB7W2lkOiBzdHJpbmddOiBDX01hemV9O1xyXG4gICAgICAgIGZvciAoY29uc3Qgamogb2Ygaikge1xyXG4gICAgICAgICAgICBjb25zdCBhYWEgPSBuZXcgQ19NYXplKCkuZGVjb2RlKGpqKTtcclxuICAgICAgICAgICAgbXBhW2FhYS51aWQoKV0gPSBhYWE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtcGE7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9O1xyXG59XHJcbiovXHJcblxyXG4gICAgcHVibGljIHRvX2xldHRlcihwOiBDX1BvaW50KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jZWxsc1twLnpdW3AueV1bcC54XS50b19sZXR0ZXIoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB0b19zdHJpbmcoZmxvb3I6IG51bWJlciA9IDAsIGRlYnVnX21vZGU6IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKTtcclxuXHJcbiAgICAgICAgdmFyIHJldF9zdHI6IHN0cmluZyA9ICcnO1xyXG4gICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqID0gdGhpcy5nZXRfb2JqX3h5eih4LCB5LCBmbG9vcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRlYnVnX21vZGUgJiYgdGhpcy5tYXNrc1tmbG9vcl1beV1beF0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXRfc3RyICs9ICfvvLgnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmpfYyA9IG9iaj8udmlldygpPy5sZXR0ZXIoKSA/PyBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmogPT09IG51bGwgfHwgb2JqX2MgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0X3N0ciArPSB0aGlzLmNlbGxzW2Zsb29yXVt5XVt4XS50b19sZXR0ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRfc3RyICs9IG9ial9jO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXRfc3RyICs9IFwiXFxuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXRfc3RyO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX01hemUge1xyXG4gICAgICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgICAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV96ID0gdGhpcy5zaXplLnNpemVfeigpO1xyXG5cclxuICAgICAgICB2YXIgel9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHNpemVfejsgeisrKSB7XHJcbiAgICAgICAgICAgIHZhciB5X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeF9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICB4X2FycmF5LnB1c2godGhpcy5jZWxsc1t6XVt5XVt4XS5lbmNvZGUoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB5X2FycmF5LnB1c2goeF9hcnJheS5qb2luKCdYJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHpfYXJyYXkucHVzaCh5X2FycmF5LmpvaW4oJ1knKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1hemVfc3RyID0gel9hcnJheS5qb2luKCdaJyk7XHJcblxyXG4gICAgICAgIHZhciB6X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgdmFyIHlfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIHZhciB4X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHhfYXJyYXkucHVzaCh0aGlzLm1hc2tzW3pdW3ldW3hdID8gJzEnIDogJzAnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHlfYXJyYXkucHVzaCh4X2FycmF5LmpvaW4oJ1gnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgel9hcnJheS5wdXNoKHlfYXJyYXkuam9pbignWScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWFza19zdHIgPSB6X2FycmF5LmpvaW4oJ1onKTtcclxuXHJcbiAgICAgICAgbGV0IG9ianMgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHRoaXMub2Jqcykgb2Jqcy5wdXNoKHRoaXMub2Jqc1tpaV0uZW5jb2RlKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogICAgICB0aGlzLm1hemVfaWQsXHJcbiAgICAgICAgICAgIHVuaXFfaWQ6IHRoaXMudW5pcV9pZCxcclxuICAgICAgICAgICAgc2F2ZV9pZDogdGhpcy5zYXZlX2lkLFxyXG4gICAgICAgICAgICBmbG9vcjogICB0aGlzLmZsb29yLFxyXG4gICAgICAgICAgICBuYW1lOiAgICB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIG9ianM6ICAgIG9ianMsXHJcbiAgICAgICAgICAgIHNpemVfeDogIHRoaXMuc2l6ZS5zaXplX3goKSxcclxuICAgICAgICAgICAgc2l6ZV95OiAgdGhpcy5zaXplLnNpemVfeSgpLFxyXG4gICAgICAgICAgICBzaXplX3o6ICB0aGlzLnNpemUuc2l6ZV96KCksXHJcbiAgICAgICAgICAgIG1hemU6ICAgIG1hemVfc3RyLFxyXG4gICAgICAgICAgICBtYXNrOiAgICBtYXNrX3N0cixcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IEpTT05fTWF6ZXx1bmRlZmluZWQpOiBDX01hemUge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoYS5pZCAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubWF6ZV9pZCA9IGEuaWQ7XHJcbiAgICAgICAgaWYgKGEudW5pcV9pZCAhPT0gdW5kZWZpbmVkKSB0aGlzLnVuaXFfaWQgPSBhLnVuaXFfaWQ7XHJcbiAgICAgICAgaWYgKGEuc2F2ZV9pZCAhPT0gdW5kZWZpbmVkKSB0aGlzLnNhdmVfaWQgPSBhLnNhdmVfaWQ7XHJcbiAgICAgICAgaWYgKGEuZmxvb3IgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmZsb29yICAgPSBhLmZsb29yO1xyXG4gICAgICAgIGlmIChhLm5hbWUgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5uYW1lICAgID0gYS5uYW1lO1xyXG5cclxuICAgICAgICBpZiAoYS5vYmpzICAgICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5vYmpzID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl9vYmogb2YgYS5vYmpzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdfb2JqID0gQ19NYXplT2JqLm5ld09iaihqc29uX29iaik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ianNbbmV3X29iai51aWQoKV0gPSBuZXdfb2JqO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYS5zaXplX3ggIT09IHVuZGVmaW5lZCAmJiBhLnNpemVfeSAhPT0gdW5kZWZpbmVkICYmIGEuc2l6ZV96ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaXplICA9IG5ldyBDX1JhbmdlKFxyXG4gICAgICAgICAgICAgICAgbmV3IENfUG9pbnQoMCwgMCwgMCksIFxyXG4gICAgICAgICAgICAgICAgbmV3IENfUG9pbnQoYS5zaXplX3ggLSAxLCBhLnNpemVfeSAtIDEsIGEuc2l6ZV96IC0gMSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuY2VsbHMgICA9IHRoaXMuX19pbml0X21hemUoVF9NektpbmQuU3RvbmUpO1xyXG4gICAgICAgICAgICB0aGlzLm1hc2tzICAgPSB0aGlzLl9faW5pdF9tYXNrKHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9faW5pdF91bmNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeiA9IHRoaXMuc2l6ZS5zaXplX3ooKTtcclxuXHJcblxyXG4gICAgICAgIGlmIChhLm1hemUgIT09IHVuZGVmaW5lZCkge1xyXG4vKlxyXG4gICAgICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHNpemVfejsgeisrKVxyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKVxyXG4gICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxzW3pdW3ldW3hdLnNldChUX016S2luZC5TdG9uZSk7XHJcbiAgICAgICAgICAgIH1cclxuKi9cclxuICAgICAgICAgICAgY29uc3Qgel9hcnJheTogc3RyaW5nW10gPSBhLm1hemUuc3BsaXQoJ1onKTtcclxuICAgICAgICAgICAgY29uc3Qgel9tYXggPSBfbWluKFtzaXplX3osIHpfYXJyYXkubGVuZ3RoXSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgel9tYXg7IHorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeV9hcnJheTogc3RyaW5nW10gPSB6X2FycmF5W3pdLnNwbGl0KCdZJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5X21heCA9ICBfbWluKFtzaXplX3ksIHlfYXJyYXkubGVuZ3RoXSk7IFxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB5X21heDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeF9hcnJheTogc3RyaW5nW10gPSB5X2FycmF5W3ldLnNwbGl0KCdYJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeF9tYXggPSAgX21pbihbc2l6ZV94LCB4X2FycmF5Lmxlbmd0aF0pOyBcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHhfbWF4OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtpbmQgPSBwYXJzZUludCh4X2FycmF5W3hdLCAxNik7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbGxzW3pdW3ldW3hdID0gQ19NYXplQ2VsbC5uZXdPYmooe2tpbmQ6IGtpbmQsIHBvczoge3g6eCwgeTp5LCB6Onp9fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEubWFzayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19pbml0X21hc2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHpfYXJyYXk6IHN0cmluZ1tdID0gYS5tYXNrLnNwbGl0KCdaJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHpfbWF4ID0gX21pbihbc2l6ZV96LCB6X2FycmF5Lmxlbmd0aF0pO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHpfbWF4OyB6KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHlfYXJyYXk6IHN0cmluZ1tdID0gel9hcnJheVt6XS5zcGxpdCgnWScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeV9tYXggPSAgX21pbihbc2l6ZV95LCB5X2FycmF5Lmxlbmd0aF0pOyBcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgeV9tYXg7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhfYXJyYXk6IHN0cmluZ1tdID0geV9hcnJheVt5XS5zcGxpdCgnWCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhfbWF4ID0gIF9taW4oW3NpemVfeCwgeF9hcnJheS5sZW5ndGhdKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB4X21heDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4X2FycmF5W3hdICE9PSAnMCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFza3Nbel1beV1beF0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrc1t6XVt5XVt4XSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX19pbml0X3VuY2xlYXIoKTsgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGVuY29kZV9hbGwoYWxsX21hemU6IENfTWF6ZVtdKTogSlNPTl9NYXplW10ge1xyXG4gICAgICAgIGNvbnN0IGFsbF9tYXplX2RhdGE6IEpTT05fTWF6ZVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgbWF6ZSBvZiBhbGxfbWF6ZSkge1xyXG4gICAgICAgICAgICBhbGxfbWF6ZV9kYXRhLnB1c2gobWF6ZS5lbmNvZGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxfbWF6ZV9kYXRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBkZWNvZGVfYWxsKGFsbF9tYXplX2RhdGE6IEpTT05fTWF6ZVtdKTogQ19NYXplW10ge1xyXG4gICAgICAgIGNvbnN0IGFsbF9tYXplOiBDX01hemVbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IG1hemVfZGF0YSBvZiBhbGxfbWF6ZV9kYXRhKSB7XHJcbiAgICAgICAgICAgIGFsbF9tYXplLnB1c2goKG5ldyBDX01hemUoe30pKS5kZWNvZGUobWF6ZV9kYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxfbWF6ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGFsZXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiTWF6ZSBJbmZvOlwiXHJcbiAgICAgICAgICAgICsgXCJcXG5tYXplIGlkIDpcIiArICh0aGlzLm1hemVfaWQgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuZmxvb3I6IFwiICAgKyAodGhpcy5mbG9vciAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnVuaXEgaWQgOlwiICsgKHRoaXMudW5pcV9pZCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zYXZlIGlkIDpcIiArICh0aGlzLnNhdmVfaWQgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubmFtZTogICBcIiAgKyAodGhpcy5uYW1lICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNpemVfeDogXCIgICsgKHRoaXMuc2l6ZS5zaXplX3goKSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zaXplX3k6IFwiICArICh0aGlzLnNpemUuc2l6ZV95KCkgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2l6ZV96OiBcIiAgKyAodGhpcy5zaXplLnNpemVfeigpID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhbGVydF9tYXplKGZsb29yOiBudW1iZXIgPSAwKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJNYXplIE1hcDpcIlxyXG4gICAgICAgICAgICArIFwibWF6ZTpcXG5cIiAgICAgKyAodGhpcy50b19zdHJpbmcoZmxvb3IsIHRydWUpICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWxlcnRfbWFzayhmbG9vcjogbnVtYmVyID0gMCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiTWFzayBNYXA6XCJcclxuICAgICAgICAgICAgKyBcIm1hc2s6XFxuXCIgICAgICsgKHRoaXMudG9fc3RyaW5nKGZsb29yLCBmYWxzZSkgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgX2dldF91dWlkIH0gZnJvbSBcIi4uL2RfdXRsL0ZfUmFuZFwiO1xyXG5pbXBvcnQgeyBUX016S2luZCB9ICBmcm9tIFwiLi9UX016S2luZFwiO1xyXG5pbXBvcnQgeyBKU09OX0FueSB9ICBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcbmltcG9ydCB7IENfTWF6ZU9iaiwgSV9NYXplT2JqLCBKU09OX01hemVPYmogfSBmcm9tIFwiLi9DX01hemVPYmpcIjtcclxuaW1wb3J0IHsgVF9XYWxsIH0gICAgZnJvbSAnLi9DX1dhbGwnO1xyXG5pbXBvcnQgeyBUX1JlY3QgfSBmcm9tIFwiLi9DX01hemVPYmpWaWV3XCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX01hemVDZWxsIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAga2luZD86IFRfTXpLaW5kXHJcbiAgICBvYmo/OiAgSlNPTl9NYXplT2JqLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19NYXplQ2VsbCAge1xyXG4gICAgcHJvdGVjdGVkIGtpbmQ6ICAgVF9NektpbmQ7XHJcbiAgICBwcm90ZWN0ZWQgbXlfb2JqOiBJX01hemVPYmo7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBuZXdPYmooajogSlNPTl9NYXplQ2VsbCk6IENfTWF6ZUNlbGwge1xyXG4gICAgICAgIHN3aXRjaCAoai5raW5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuTm9EZWY6IHJldHVybiBuZXcgQ19NYXplQ2VsbE5vRGVmKGopOyBcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5Vbmt3bjogcmV0dXJuIG5ldyBDX01hemVDZWxsVW5rd24oaik7IFxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLkVtcHR5OiByZXR1cm4gbmV3IENfTWF6ZUNlbGxFbXB0eShqKTsgXHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuRmxvb3I6IHJldHVybiBuZXcgQ19NYXplQ2VsbEZsb29yKGopO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlVuZXhwOiByZXR1cm4gbmV3IENfTWF6ZUNlbGxVbmV4cChqKTtcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdG9uZTogcmV0dXJuIG5ldyBDX01hemVDZWxsU3RvbmUoaik7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyVXA6IHJldHVybiBuZXcgQ19NYXplQ2VsbFN0clVwKGopO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0ckRuOiByZXR1cm4gbmV3IENfTWF6ZUNlbGxTdHJEbihqKTsgXHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyVUQ6IHJldHVybiBuZXcgQ19NYXplQ2VsbFN0clVEKGopO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IENfTWF6ZUNlbGxOb0RlZihqKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoajogSlNPTl9NYXplQ2VsbCkge1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuICAgICAgICBqLm9iai5jbG5hbWUgPz89IHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5raW5kICAgPSBqLmtpbmQgPz8gVF9NektpbmQuTm9EZWY7XHJcbiAgICAgICAgdGhpcy5teV9vYmogPSBDX01hemVPYmoubmV3T2JqKGoub2JqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRPYmooKTogIElfTWF6ZU9iaiB7cmV0dXJuIHRoaXMubXlfb2JqfVxyXG4gICAgcHVibGljIGdldEtpbmQoKTogVF9NektpbmQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtpbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvX2xldHRlcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm15X29iai52aWV3KCk/LmxldHRlcigpID8/ICfvvLgnO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX2xldHRlcihsZXR0ZXI6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoVF9NektpbmQpKSB7XHJcbiAgICAgICAgICAgIGlmIChsZXR0ZXIgPT09IGtleSkgcmV0dXJuIFRfTXpLaW5kW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBUX016S2luZC5Ob0RlZjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJvdzJEKHJlY3Q6IFRfUmVjdCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubXlfb2JqLnZpZXcoKT8uZHJvdzJEKHJlY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcm93M0QoZnJvdDogVF9XYWxsLCBiYWNrOiBUX1dhbGwpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm15X29iai52aWV3KCk/LmRyb3czRChmcm90LCBiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2luZC50b1N0cmluZygxNikucGFkU3RhcnQoMixcIjBcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZShzdHI6IHN0cmluZywgaj86IEpTT05fTWF6ZUNlbGwpOiBDX01hemVDZWxsfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgIGNvbnN0IGtpbmQgPSBwYXJzZUludChzdHIsIDE2KSBhcyBUX016S2luZDtcclxuICAgICAgICAgcmV0dXJuIENfTWF6ZUNlbGwubmV3T2JqKHtraW5kOiBraW5kLCBwb3M6IGo/LnBvc30pO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsTm9EZWYgZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuTm9EZWZ9O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcwJztcclxuICAgICAgICBqLm9iai5oX3dfZG1nID0gIDEwMDtcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn55aRJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcwJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcnLCBjb2xfZDogJycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJycsIGNvbF8yOiAnJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsVW5rd24gZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuVW5rd259O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcwJztcclxuICAgICAgICBqLm9iai5oX3dfZG1nID0gIDEwMDtcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn6KyOJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcwJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcnLCBjb2xfZDogJycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJycsIGNvbF8yOiAnJywgY29sX0w6ICcnLCAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbEVtcHR5IGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLkVtcHR5fTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMSc7XHJcbiAgICAgICAgai5vYmouaF93X2RtZyA9ICAwO1xyXG4gICAgICAgIGoub2JqLnBvcyAgICAgPSB7eDpqLngsIHk6ai55LCB6Omouen07XHJcbiAgICAgICAgai5vYmoudmlldyAgICA9ICB7XHJcbiAgICAgICAgICAgIGxheWVyOiAwLCBsZXR0ZXI6ICfnhKEnLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgJzAnLFxyXG4gICAgICAgICAgICBwYWRfdDogMC4wLCBwYWRfZDogMC4wLCBwYWRfczogMC4wLFxyXG4gICAgICAgICAgICBjb2xfZjogJycsIGNvbF9iOiAnJywgY29sX3M6ICcnLCBjb2xfdDogJycsIGNvbF9kOiAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnJywgY29sXzI6ICcnLCBjb2xfTDogJycsIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGxGbG9vciBleHRlbmRzIENfTWF6ZUNlbGwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVDZWxsfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGogPz89IHtraW5kOiBUX016S2luZC5GbG9vcn07XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG5cclxuICAgICAgICBqLm9iai5jYW5fdGhyID0gJzEnO1xyXG4gICAgICAgIGoub2JqLmhfd19kbWcgPSAgMDtcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn44CAJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcxJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcjNjY2NmZmJywgY29sX2Q6ICcnLCBcclxuICAgICAgICAgICAgY29sX2w6ICcjOTk5OWZmJywgY29sXzI6ICcjMzMzM2ZmJywgY29sX0w6ICcjNjY2NmZmJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsVW5leHAgZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuVW5leHB9O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcxJztcclxuICAgICAgICBqLm9iai5oX3dfZG1nID0gIDA7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ+ODuycsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMScsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbiAgICAgICAgICAgIGNvbF9mOiAnJywgY29sX2I6ICcnLCBjb2xfczogJycsIGNvbF90OiAnIzY2ZmZmZicsIGNvbF9kOiAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnIzk5OTlmZicsIGNvbF8yOiAnIzY2ZmZmZicsIGNvbF9MOiAnIzY2NjZmZicsIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbFN0b25lIGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLlN0b25lfTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMCc7XHJcbiAgICAgICAgai5vYmouaF93X2RtZyA9ICAxMDtcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn77yDJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcxJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcjMDBmZjAwJywgY29sX2I6ICcnLCBjb2xfczogJyMwMGVlMDAnLCBjb2xfdDogJycsIGNvbF9kOiAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnIzAwMDBmZicsIGNvbF8yOiAnIzAwY2MwMCcsIGNvbF9MOiAnIzY2NjZmZicsIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbFN0clVwIGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLlN0clVwfTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMSc7XHJcbiAgICAgICAgai5vYmouaF93X2RtZyA9ICAwO1xyXG4gICAgICAgIGoub2JqLnBvcyAgICAgPSB7eDpqLngsIHk6ai55LCB6Omouen07XHJcbiAgICAgICAgai5vYmoudmlldyAgICA9ICB7XHJcbiAgICAgICAgICAgIGxheWVyOiAwLCBsZXR0ZXI6ICfkuIonLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgJzEnLFxyXG4gICAgICAgICAgICBwYWRfdDogMC4wLCBwYWRfZDogMC4wLCBwYWRfczogMC4wLFxyXG4gICAgICAgICAgICBjb2xfZjogJycsIGNvbF9iOiAnJywgY29sX3M6ICcnLCBjb2xfdDogJycsIGNvbF9kOiAnI2ZmZmZjYycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJyMwMDAwZmYnLCBjb2xfMjogJyNmZmZmNjYnLCBjb2xfTDogJyM2NjY2ZmYnLCBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGxTdHJEbiBleHRlbmRzIENfTWF6ZUNlbGwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVDZWxsfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGogPz89IHtraW5kOiBUX016S2luZC5TdHJEbn07XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG5cclxuICAgICAgICBqLm9iai5jYW5fdGhyID0gJzEnO1xyXG4gICAgICAgIGoub2JqLmhfd19kbWcgPSAgMDtcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn5LiLJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcxJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcjZmZmZmNjJywgY29sX2Q6ICcnLCBcclxuICAgICAgICAgICAgY29sX2w6ICcjMDAwMGZmJywgY29sXzI6ICcjZmZmZjY2JywgY29sX0w6ICcjNjY2NmZmJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsU3RyVUQgZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuU3RyVUR9O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcxJztcclxuICAgICAgICBqLm9iai5oX3dfZG1nID0gIDA7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ+autScsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMScsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbiAgICAgICAgICAgIGNvbF9mOiAnJywgY29sX2I6ICcnLCBjb2xfczogJycsIGNvbF90OiAnI2ZmZmZjYycsIGNvbF9kOiAnI2ZmZmZjYycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJyMwMDAwZmYnLCBjb2xfMjogJyNmZmZmNjYnLCBjb2xfTDogJyM2NjY2ZmYnLCBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBfYWxlcnQgfSBmcm9tIFwiLi4vZF9jbW4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9IGZyb20gXCIuLi9kX3V0bC9DX0RzcE1lc3NhZ2VcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9NYXplSW5mbyB7XHJcbiAgICBuYW1lOiAgICAgIHN0cmluZztcclxuICAgIG1ibmFtZTogICAgc3RyaW5nO1xyXG4gICAgbHY6ICAgICAgICBudW1iZXI7XHJcbiAgICBzaXplX3g6ICAgIG51bWJlcjtcclxuICAgIHNpemVfeTogICAgbnVtYmVyO1xyXG4gICAgc2l6ZV96OiAgICBudW1iZXI7XHJcbiAgICBtYXhfcm9vbTogIG51bWJlcjtcclxuICAgIHJvb21fc2l6ZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfbWF6ZWluZm9faW5mbyhhPzogSlNPTl9NYXplSW5mbyk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgIGFsZXJ0KFwiTWF6ZUluZm8gRGF0YTpcIlxyXG4gICAgICAgICsgXCJcXG5uYW1lIDogXCIgICAgICAgKyAoYS5uYW1lICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5tYm5hbWU6IFwiICAgICAgKyAoYS5tYm5hbWUgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sdiA6XCIgICAgICAgICAgKyAoYS5sdiAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3g6IFwiICAgICAgKyAoYS5zaXplX3ggICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3k6IFwiICAgICAgKyAoYS5zaXplX3kgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3o6IFwiICAgICAgKyAoYS5zaXplX3ogICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5tYXhfb2Zfcm9vbTogXCIgKyAoYS5tYXhfcm9vbSAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5yb29tX3NpemU6IFwiICAgKyAoYS5yb29tX3NpemUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfTWF6ZUluZm8ge1xyXG4gICAgcHVibGljIG5hbWU6ICAgICAgc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgbWJuYW1lOiAgICBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBsdjogICAgICAgIG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc2l6ZV94OiAgICBudW1iZXIgPSAzO1xyXG4gICAgcHVibGljIHNpemVfeTogICAgbnVtYmVyID0gMztcclxuICAgIHB1YmxpYyBzaXplX3o6ICAgIG51bWJlciA9IDM7XHJcbiAgICBwdWJsaWMgbWF4X3Jvb206ICBudW1iZXIgPSAxO1xyXG4gICAgcHVibGljIHJvb21fc2l6ZTogbnVtYmVyID0gMTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0X3RibF9hbGwoKTogQ19NYXplSW5mb1tdIHtcclxuICAgICAgICBjb25zdCBtYXplaW5mbzogQ19NYXplSW5mb1tdID0gW107XHJcbiAgICAgICAgbWF6ZWluZm8ucHVzaChcclxuICAgICAgICAgICAgbmV3IENfTWF6ZUluZm8oKS5kZWNvZGUoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogICBcdCdtYXplMDEwJywgXHJcbiAgICAgICAgICAgICAgICBtYm5hbWU6IFx0J+aVmee3tOWgtCcsIFxyXG4gICAgICAgICAgICAgICAgbHY6ICAgICBcdCAxLCBcclxuICAgICAgICAgICAgICAgIHNpemVfeDogXHQxMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3k6IFx0MTEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV96OiBcdCAzLCBcclxuICAgICAgICAgICAgICAgIG1heF9yb29tOiBcdCAyLCBcclxuICAgICAgICAgICAgICAgIHJvb21fc2l6ZTogXHQgMyBcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBtYXplaW5mby5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgQ19NYXplSW5mbygpLmRlY29kZSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAgIFx0J21hemUwMTEnLCBcclxuICAgICAgICAgICAgICAgIG1ibmFtZTogXHQn5aeL44G+44KK44Gu6L+35a6uJywgXHJcbiAgICAgICAgICAgICAgICBsdjogICAgIFx0IDEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV94OiBcdDIxLCBcclxuICAgICAgICAgICAgICAgIHNpemVfeTogXHQyMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3o6IFx0IDUsIFxyXG4gICAgICAgICAgICAgICAgbWF4X3Jvb206IFx0IDMsIFxyXG4gICAgICAgICAgICAgICAgcm9vbV9zaXplOiBcdCAzIFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1hemVpbmZvLnB1c2goXHJcbiAgICAgICAgICAgIG5ldyBDX01hemVJbmZvKCkuZGVjb2RlKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICAgXHQnbWF6ZTAxMicsIFxyXG4gICAgICAgICAgICAgICAgbWJuYW1lOiBcdCfmmpfjgY3mo67jga7ov7flrq4nLCBcclxuICAgICAgICAgICAgICAgIGx2OiAgICAgXHQgMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3g6IFx0MjUsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV95OiBcdDI1LCBcclxuICAgICAgICAgICAgICAgIHNpemVfejogXHQgNywgXHJcbiAgICAgICAgICAgICAgICBtYXhfcm9vbTogXHQgNSwgXHJcbiAgICAgICAgICAgICAgICByb29tX3NpemU6IFx0IDMgXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIClcclxuICAgICAgICBtYXplaW5mby5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgQ19NYXplSW5mbygpLmRlY29kZSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAgIFx0J21hemUwMTMnLCBcclxuICAgICAgICAgICAgICAgIG1ibmFtZTogXHQn6buS6a2U44Gu5Zyw5LiL5aKT5ZywJywgXHJcbiAgICAgICAgICAgICAgICBsdjogICAgIFx0IDEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV94OiBcdDMxLCBcclxuICAgICAgICAgICAgICAgIHNpemVfeTogXHQzMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3o6IFx0MTAsIFxyXG4gICAgICAgICAgICAgICAgbWF4X3Jvb206IFx0IDUsIFxyXG4gICAgICAgICAgICAgICAgcm9vbV9zaXplOiBcdCA1IFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHJldHVybiBtYXplaW5mbztcclxuICAgIH1cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoaj86IEpTT05fTWF6ZUluZm8pIHtcclxuICAgICAgICBpZiAoaiAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9NYXplSW5mbyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogICAgICB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIG1ibmFtZTogICAgdGhpcy5tYm5hbWUsXHJcbiAgICAgICAgICAgIGx2OiAgICAgICAgdGhpcy5sdixcclxuICAgICAgICAgICAgc2l6ZV94OiAgICB0aGlzLnNpemVfeCxcclxuICAgICAgICAgICAgc2l6ZV95OiAgICB0aGlzLnNpemVfeSxcclxuICAgICAgICAgICAgc2l6ZV96OiAgICB0aGlzLnNpemVfeixcclxuICAgICAgICAgICAgbWF4X3Jvb206ICB0aGlzLm1heF9yb29tLFxyXG4gICAgICAgICAgICByb29tX3NpemU6IHRoaXMucm9vbV9zaXplLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoaj86IEpTT05fTWF6ZUluZm8pOiBDX01hemVJbmZvIHtcclxuICAgICAgICBpZiAoaiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGoubmFtZSAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubmFtZSAgICAgID0gai5uYW1lO1xyXG4gICAgICAgIGlmIChqLm1ibmFtZSAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm1ibmFtZSAgICA9IGoubWJuYW1lO1xyXG4gICAgICAgIGlmIChqLmx2ICAgICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmx2ICAgICAgICA9IGoubHY7XHJcbiAgICAgICAgaWYgKGouc2l6ZV94ICAgICE9PSB1bmRlZmluZWQpIHRoaXMuc2l6ZV94ICAgID0gai5zaXplX3g7XHJcbiAgICAgICAgaWYgKGouc2l6ZV95ICAgICE9PSB1bmRlZmluZWQpIHRoaXMuc2l6ZV95ICAgID0gai5zaXplX3k7XHJcbiAgICAgICAgaWYgKGouc2l6ZV96ICAgICE9PSB1bmRlZmluZWQpIHRoaXMuc2l6ZV96ICAgID0gai5zaXplX3o7XHJcbiAgICAgICAgaWYgKGoubWF4X3Jvb20gICE9PSB1bmRlZmluZWQpIHRoaXMubWF4X3Jvb20gID0gai5tYXhfcm9vbTtcclxuICAgICAgICBpZiAoai5yb29tX3NpemUgIT09IHVuZGVmaW5lZCkgdGhpcy5yb29tX3NpemUgPSBqLnJvb21fc2l6ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIk1hemVJbmZvIERhdGE6XCJcclxuICAgICAgICAgICAgKyBcIlxcbm5hbWUgOiBcIiAgICAgICArICh0aGlzLm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5tYm5hbWU6IFwiICAgICAgKyAodGhpcy5tYm5hbWUgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubHYgOlwiICAgICAgICAgICsgKHRoaXMubHYgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNpemVfeDogXCIgICAgICArICh0aGlzLnNpemVfeCAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zaXplX3k6IFwiICAgICAgKyAodGhpcy5zaXplX3kgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2l6ZV96OiBcIiAgICAgICsgKHRoaXMuc2l6ZV96ICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbm1heF9vZl9yb29tOiBcIiArICh0aGlzLm1heF9yb29tICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5yb29tX3NpemU6IFwiICAgKyAodGhpcy5yb29tX3NpemUgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX1BvaW50IH0gICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vQ19Qb2ludFwiO1xyXG5pbXBvcnQgeyBDX1BvaW50RGlyLCBKU09OX1BvaW50RGlyIH0gZnJvbSBcIi4vQ19Qb2ludERpclwiO1xyXG5pbXBvcnQgeyBJX0Fic3RyYWN0LCBJX0pTT05fVW5pcSwgSlNPTl9BbnkgfSAgICAgZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5pbXBvcnQgeyBfZ2V0X3V1aWQgfSAgICAgICAgICAgICAgICAgZnJvbSBcIi4uL2RfdXRsL0ZfUmFuZFwiO1xyXG5pbXBvcnQgeyBcclxuICAgIENfTWF6ZU9ialZpZXcsIFxyXG4gICAgSV9NYXplT2JqVmlldywgXHJcbiAgICBKU09OX01hemVPYmpWaWV3IFxyXG59IGZyb20gXCIuL0NfTWF6ZU9ialZpZXdcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fTWF6ZU9iaiBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGNsbmFtZT86ICAgIHN0cmluZyxcclxuICAgIHVuaXFfaWQ/OiAgIHN0cmluZywgXHJcbiAgICBwb3M/OiAgICAgICBKU09OX1BvaW50RGlyLFxyXG4gICAgdmlldz86ICAgICAgSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQsXHJcbiAgICBjYW5fdGhyPzogICBzdHJpbmcsIFxyXG4gICAgaF93X2RtZz86ICAgbnVtYmVyLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJX01hemVPYmogZXh0ZW5kcyBJX0pTT05fVW5pcSwgSV9BYnN0cmFjdCB7XHJcbiAgICBnZXRfcGQ6ICAgICAoKT0+Q19Qb2ludERpcjtcclxuICAgIHdpdGhpbjogICAgIChwOiBDX1BvaW50KT0+Ym9vbGVhbjtcclxuICAgIHZpZXc6ICAgICAgICgpPT5JX01hemVPYmpWaWV3fHVuZGVmaW5lZDtcclxuICAgIGNhblRocm91Z2g6ICgpPT5ib29sZWFuO1xyXG4gICAgaGl0V2FsbERtZzogKCk9Pm51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfTWF6ZU9iaiBpbXBsZW1lbnRzIElfTWF6ZU9iaiB7XHJcbiAgICBwcm90ZWN0ZWQgY2xuYW1lOiAgICBzdHJpbmcgPSAnQ19NYXplT2JqJztcclxuXHJcbiAgICBwcml2YXRlICAgdW5pcV9pZDogICBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgcG9zOiAgICAgICBDX1BvaW50RGlyO1xyXG4gICAgcHJvdGVjdGVkIG15X3ZpZXc6ICAgSV9NYXplT2JqVmlld3x1bmRlZmluZWQ7XHJcbiAgICBwcm90ZWN0ZWQgY2FuX3RocjogICBib29sZWFuO1xyXG4gICAgcHJvdGVjdGVkIGhfd19kbWc6ICAgbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbmV3T2JqKGo/OiBKU09OX01hemVPYmp8dW5kZWZpbmVkKTogSV9NYXplT2JqIHtcclxuICAgICAgICBqID8/PSB7fTtcclxuICAgICAgICBqLmNsbmFtZSA/Pz0gQ19NYXplT2JqLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICAgICAgc3dpdGNoIChqLmNsbmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIENfTWF6ZU9iai5jb25zdHJ1Y3Rvci5uYW1lOiByZXR1cm4gbmV3IENfTWF6ZU9iaihqKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX01hemVPYmooaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbmV3T2JqKGo/OiBKU09OX01hemVPYmp8dW5kZWZpbmVkKTogSV9NYXplT2JqIHtcclxuICAgICAgICByZXR1cm4gQ19NYXplT2JqLm5ld09iaihqKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZU9ianx1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnVuaXFfaWQgICAgPSAnbWF6ZW9ial8nICsgX2dldF91dWlkKCk7XHJcbiAgICAgICAgdGhpcy5jbG5hbWUgICAgID0gIENfTWF6ZU9iai5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgICAgIHRoaXMucG9zICAgICAgICA9ICBuZXcgQ19Qb2ludERpcih7eDowLCB5OjAsIHo6MCwgZDowfSk7XHJcbiAgICAgICAgdGhpcy5teV92aWV3ICAgID0gIHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmNhbl90aHIgICAgPSAgdHJ1ZTtcclxuICAgICAgICB0aGlzLmhfd19kbWcgICAgPSAgMDtcclxuXHJcbiAgICAgICAgaWYgKGogIT09IHVuZGVmaW5lZCkgdGhpcy5fX2luaXQoaik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfX2luaXQoajogSlNPTl9NYXplT2JqfHVuZGVmaW5lZCk6IENfTWF6ZU9iaiB7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChqLnVuaXFfaWQgIT09IHVuZGVmaW5lZCkgdGhpcy51bmlxX2lkICAgPSBqLnVuaXFfaWQ7XHJcbiAgICAgICAgaWYgKGouY2xuYW1lICAhPT0gdW5kZWZpbmVkKSB0aGlzLmNsbmFtZSAgICA9IGouY2xuYW1lO1xyXG4gICAgICAgIGlmIChqLnBvcyAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5wb3MuZGVjb2RlKGoucG9zKTtcclxuICAgICAgICBpZiAoai52aWV3ICAgICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGoudmlldykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5teV92aWV3ID8/PSBDX01hemVPYmpWaWV3Lm5ld09iaihqLnZpZXcpOyBcclxuICAgICAgICAgICAgfSBlbHNlIHRoaXMubXlfdmlldyAgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChqLmNhbl90aHIgIT09IHVuZGVmaW5lZCkgdGhpcy5jYW5fdGhyID0gai5jYW5fdGhyICE9PSAnMCcgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKGouaF93X2RtZyAhPT0gdW5kZWZpbmVkKSB0aGlzLmhfd19kbWcgPSBqLmhfd19kbWc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcbiAgICBwdWJsaWMgdWlkKCk6IHN0cmluZyB7cmV0dXJuIHRoaXMudW5pcV9pZH1cclxuXHJcbiAgICBwdWJsaWMgdmlldygpOiBJX01hemVPYmpWaWV3fHVuZGVmaW5lZCB7cmV0dXJuIHRoaXMubXlfdmlld31cclxuICAgIHB1YmxpYyBzZXRWaWV3KHZpZXc6IElfTWF6ZU9ialZpZXd8dW5kZWZpbmVkKTogdm9pZCB7dGhpcy5teV92aWV3ID0gdmlld31cclxuXHJcbiAgICBwdWJsaWMgY2FuVGhyb3VnaCgpOiBib29sZWFuIHtyZXR1cm4gdGhpcy5jYW5fdGhyfVxyXG4gICAgcHVibGljIHNldFRocm91Z2godGhyOiBib29sZWFuKTogYm9vbGVhbiB7cmV0dXJuIHRoaXMuY2FuX3RociA9IHRocn1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X3BkKCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ19Qb2ludERpcih0aGlzLnBvcyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BkKHA6IENfUG9pbnREaXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBvcyA9IHA7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgd2l0aGluKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3Mud2l0aGluKHApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoaXRXYWxsRG1nKCkgOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaF93X2RtZztcclxuICAgIH1cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9NYXplT2JqIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1bmlxX2lkOiB0aGlzLnVuaXFfaWQsXHJcbiAgICAgICAgICAgIGNsbmFtZTogIHRoaXMuY2xuYW1lLFxyXG4gICAgICAgICAgICBwb3M6ICAgICB0aGlzLnBvcy5lbmNvZGUoKSxcclxuICAgICAgICAgICAgdmlldzogICAgdGhpcy5teV92aWV3Py5lbmNvZGUoKSA/PyB7fSxcclxuICAgICAgICAgICAgY2FuX3RocjogdGhpcy5jYW5fdGhyID8gJzEnIDogJzAnLFxyXG4gICAgICAgICAgICBoX3dfZG1nOiB0aGlzLmhfd19kbWcsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWNvZGUoaj86IEpTT05fTWF6ZU9ianx1bmRlZmluZWQpOiBJX01hemVPYmoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9faW5pdChqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVjb2RlKGo/OiBKU09OX01hemVPYmp8dW5kZWZpbmVkKTogSV9NYXplT2JqIHtcclxuICAgICAgICByZXR1cm4gQ19NYXplT2JqLm5ld09iaihqKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBJX0Fic3RyYWN0LCBKU09OX0FueSB9IGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuaW1wb3J0IHsgVF9XYWxsIH0gICAgICAgICAgICAgICBmcm9tIFwiLi4vZF9tZGwvQ19XYWxsXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJX01hemVPYmpWaWV3IGV4dGVuZHMgSV9BYnN0cmFjdCB7XHJcbiAgICAvLyDooajnpLrplqLkv4IoMkRwcmUpLi9DX1dhbGxcclxuICAgIGxheWVyOiAgICgpPT5udW1iZXI7XHJcbiAgICBsZXR0ZXI6ICAoKT0+c3RyaW5nfG51bGw7IC8vIG51bGw6IOimi+OBiOOBquOBhOOAgeS9leOCguOBquOBhFxyXG5cclxuICAgIC8vIOihqOekuumWouS/gigzRClcclxuICAgIGNhblNob3c6ICgpPT5ib29sZWFuO1xyXG4gICAgZHJvdzJEOiAgKGZsb29yOiBUX1JlY3QpPT52b2lkO1xyXG4gICAgZHJvdzNEOiAgKGZyb3Q6ICBUX1dhbGwsIGJhY2s6IFRfV2FsbCk9PnZvaWQ7XHJcblxyXG4gICAgcGFkX3Q6ICAgKCk9Pm51bWJlcjsgLy/kuIrlgbTjga7nqbrjgY0o5Ymy5ZCIOiAw44GL44KJMSkgXHJcbiAgICBwYWRfZDogICAoKT0+bnVtYmVyOyAvL+W6iuWBtOOBruepuuOBjSjlibLlkIg6IDDjgYvjgokxKSBcclxuICAgIHBhZF9zOiAgICgpPT5udW1iZXI7IC8v5qiq5YG044Gu56m644GNKOWJsuWQiDogMOOBi+OCiTEpIFxyXG4gICAgY29sX2Y6ICAgKCk9PnN0cmluZ3xudWxsOyAvL+ato+mdouOBruiJsihDU1Pjgqvjg6njg7wp44CCbnVsbOOBr+mAj+aYjlxyXG4gICAgY29sX2I6ICAgKCk9PnN0cmluZ3xudWxsOyAvL+iDjOmdouOBruiJsihDU1Pjgqvjg6njg7wp44CCbnVsbOOBr+mAj+aYjlxyXG4gICAgY29sX3M6ICAgKCk9PnN0cmluZ3xudWxsOyAvL+aoquWBtOOBruiJsihDU1Pjgqvjg6njg7wp44CCbnVsbOOBr+mAj+aYjlxyXG4gICAgY29sX3Q6ICAgKCk9PnN0cmluZ3xudWxsOyAvL+S4iumDqOOBruiJsihDU1Pjgqvjg6njg7wp44CCbnVsbOOBr+mAj+aYjuOAguOChOOChOOBk+OBl+OBhOOBjOOAgeeJqeS9k+OBruW6lemdouOBq+W9k+OBn+OCi1xyXG4gICAgY29sX2Q6ICAgKCk9PnN0cmluZ3xudWxsOyAvL+S4i+mDqOOBruiJsihDU1Pjgqvjg6njg7wp44CCbnVsbOOBr+mAj+aYjuOAguOChOOChOOBk+OBl+OBhOOBjOOAgeeJqeS9k+OBruWkqeS6leOBq+W9k+OBn+OCi1xyXG4gICAgY29sX2w6ICAgKCk9PnN0cmluZ3xudWxsOyAvL+ODqeOCpOODs+OBruiJsihDU1Pjgqvjg6njg7wpXHJcblxyXG4gICAgY29sXzI6ICAgKCk9PnN0cmluZ3xudWxsOyAvLzJE44Oe44OD44OX44Gu6ImyKENTU+OCq+ODqeODvClcclxuICAgIGNvbF9MOiAgICgpPT5zdHJpbmd8bnVsbDsgLy8yROODnuODg+ODl+OBrue3muOBruiJsihDU1Pjgqvjg6njg7wpXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9NYXplT2JqVmlldyBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGNsbmFtZT86IHN0cmluZyxcclxuICAgIGxheWVyPzogIG51bWJlcixcclxuICAgIGxldHRlcj86IHN0cmluZyxcclxuICAgIHNob3c/OiAgIHN0cmluZyxcclxuICAgIHBhZF90PzogIG51bWJlciwgLy8g44Kq44OW44K444Kn44Kv44OI5LiK6YOo44Gu6ZqZ6ZaT44Gu5Ymy5ZCIKDAuMCDjgYvjgokgMS4wKSBcclxuICAgIHBhZF9kPzogIG51bWJlciwgLy8g44Kq44OW44K444Kn44Kv44OI5LiL6YOo44Gu6ZqZ6ZaT44Gu5Ymy5ZCIKDAuMCDjgYvjgokgMS4wKSBcclxuICAgIHBhZF9zPzogIG51bWJlciwgLy8g44Kq44OW44K444Kn44Kv44OI5ZGo5Zuy44Gu6ZqZ6ZaT44Gu5Ymy5ZCIKDAuMCDjgYvjgokgMS4wKSBcclxuICAgIGNvbF9mPzogIHN0cmluZ3xudWxsLCAvLyDjgqrjg5bjgrjjgqfjgq/jg4jmraPpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBjb2xfYj86ICBzdHJpbmd8bnVsbCwgLy8g44Kq44OW44K444Kn44Kv44OI5q2j6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgY29sX3M/OiAgc3RyaW5nfG51bGwsIC8vIOOCquODluOCuOOCp+OCr+ODiOWBtOmdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIGNvbF90PzogIHN0cmluZ3xudWxsLCAvLyDjgqrjg5bjgrjjgqfjgq/jg4jkuIrpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBjb2xfZD86ICBzdHJpbmd8bnVsbCwgLy8g44Kq44OW44K444Kn44Kv44OI5bqV6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgY29sX2w/OiAgc3RyaW5nfG51bGwsIC8vIOOCquODluOCuOOCp+OCr+ODiOOBrue3muOBrkNTU+OCq+ODqeODvCBcclxuICAgIGNvbF8yPzogIHN0cmluZ3xudWxsLCAvLyAyROODnuODg+ODl+OBrumdouOBrkNTU+OCq+ODqeODvFxyXG4gICAgY29sX0w/OiAgc3RyaW5nfG51bGwsIC8vIDJE44Oe44OD44OX44Gu57ea44GuQ1NT44Kr44Op44O8XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFRfeHkgICA9IHt4OiBudW1iZXIsIHk6IG51bWJlcn1cclxuZXhwb3J0IHR5cGUgVF9SZWN0ID0ge3RsOiBUX3h5LCB0cjogVF94eSwgZGw6IFRfeHksIGRyOiBUX3h5fTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDX01hemVPYmpWaWV3IGltcGxlbWVudHMgSV9NYXplT2JqVmlldyB7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGNvbjNEOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR8dW5kZWZpbmVkO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRfY29udGV4dDNEKCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRHx1bmRlZmluZWQge3JldHVybiB0aGlzPy5jb24zRH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0X2NvbnRleHQzRChjb24zRD86IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge3RoaXMuY29uM0QgPSBjb24zRH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGNvbjJEOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR8dW5kZWZpbmVkO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRfY29udGV4dDJEKCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRHx1bmRlZmluZWQge3JldHVybiB0aGlzPy5jb24yRH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0X2NvbnRleHQyRChjb24yRD86IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge3RoaXMuY29uMkQgPSBjb24yRH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5ld09iaihqPzogSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQpOiBJX01hemVPYmpWaWV3IHtcclxuICAgICAgICBqID8/PSB7fTtcclxuICAgICAgICBqLmNsbmFtZSA/Pz0gQ19NYXplT2JqVmlldy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgICAgIHN3aXRjaCAoai5jbG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBDX01hemVPYmpWaWV3LmNvbnN0cnVjdG9yLm5hbWU6ICAgICByZXR1cm4gbmV3IENfTWF6ZU9ialZpZXcoaik7XHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm4gbmV3IENfTWF6ZU9ialZpZXcoaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbmV3T2JqKGo/OiBKU09OX01hemVPYmpWaWV3fHVuZGVmaW5lZCk6IElfTWF6ZU9ialZpZXcge1xyXG4gICAgICAgIHJldHVybiBDX01hemVPYmpWaWV3Lm5ld09iaihqKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjbG5hbWU6ICAgIHN0cmluZyA9ICdDX01hemVPYmpWaWV3JztcclxuXHJcbiAgICBwcml2YXRlIG15X2xheWVyOiAgbnVtYmVyOyAgICAgIC8vIDJE6KGo56S644Gu5pmC44GuQ1NT44Os44Kk44Ok44O844CC5ZCM5L2N572u44Gu44Kq44OW44K444Kn44Gu5YaF44GT44Gu5YCk44GM5aSn44GN44GE54mp44GM6KGo56S644GV44KM44KLXHJcbiAgICBwcml2YXRlIG15X2xldHRlcjogc3RyaW5nfG51bGw7IC8vIDJE6KGo56S644Gu5pmC44Gu5YWo6KeS5paH5a2X44CCbnVsbOOBquOCiemAj+aYjlxyXG5cclxuICAgIHByaXZhdGUgbXlfc2hvdzogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgbXlfcGFkX3Q6ICBudW1iZXI7IC8vIOOCquODluOCuOOCp+OCr+ODiOS4iumDqOOBrumamemWk+OBruWJsuWQiCgwLjAg44GL44KJIDEuMCkgXHJcbiAgICBwcml2YXRlIG15X3BhZF9kOiAgbnVtYmVyOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jkuIvpg6jjga7pmpnplpPjga7libLlkIgoMC4wIOOBi+OCiSAxLjApIFxyXG4gICAgcHJpdmF0ZSBteV9wYWRfczogIG51bWJlcjsgLy8g44Kq44OW44K444Kn44Kv44OI5ZGo5Zuy44Gu6ZqZ6ZaT44Gu5Ymy5ZCIKDAuMCDjgYvjgokgMS4wKSBcclxuXHJcbiAgICBwcml2YXRlIG15X2NvbF9mOiAgc3RyaW5nfG51bGw7IC8vIOOCquODluOCuOOCp+OCr+ODiOato+mdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIHByaXZhdGUgbXlfY29sX2I6ICBzdHJpbmd8bnVsbDsgLy8g44Kq44OW44K444Kn44Kv44OI5q2j6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgcHJpdmF0ZSBteV9jb2xfczogIHN0cmluZ3xudWxsOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jlgbTpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBwcml2YXRlIG15X2NvbF90OiAgc3RyaW5nfG51bGw7IC8vIOOCquODluOCuOOCp+OCr+ODiOS4iumdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIHByaXZhdGUgbXlfY29sX2Q6ICBzdHJpbmd8bnVsbDsgLy8g44Kq44OW44K444Kn44Kv44OI5bqV6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgcHJpdmF0ZSBteV9jb2xfbDogIHN0cmluZ3xudWxsOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jjga7nt5rjga5DU1Pjgqvjg6njg7wgXHJcblxyXG4gICAgcHJpdmF0ZSBteV9jb2xfMjogIHN0cmluZ3xudWxsOyAvLyAyROODnuODg+ODl+OBrumdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIHByaXZhdGUgbXlfY29sX0w6ICBzdHJpbmd8bnVsbDsgLy8gMkTjg57jg4Pjg5fjga7nt5rjga5DU1Pjgqvjg6njg7wgXHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVPYmpWaWV3fHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuY2xuYW1lICAgICA9ICB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMubXlfbGF5ZXIgICA9ICAtMjtcclxuICAgICAgICB0aGlzLm15X2xldHRlciAgPSAgbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5teV9wYWRfdCAgID0gIDAuMDtcclxuICAgICAgICB0aGlzLm15X3BhZF9kICAgPSAgMC4wO1xyXG4gICAgICAgIHRoaXMubXlfcGFkX3MgICA9ICAwLjA7XHJcblxyXG4gICAgICAgIHRoaXMubXlfc2hvdyAgICA9ICB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLm15X2NvbF9mICAgPSAnI2Y4ZjhmOCc7IFxyXG4gICAgICAgIHRoaXMubXlfY29sX2IgICA9ICcjYWFhYWFhJzsgXHJcbiAgICAgICAgdGhpcy5teV9jb2xfcyAgID0gJyNkZGRkZGQnOyBcclxuICAgICAgICB0aGlzLm15X2NvbF90ICAgPSAnI2ZmZmZmZic7IFxyXG4gICAgICAgIHRoaXMubXlfY29sX2QgICA9ICcjY2NjY2NjJzsgXHJcbiAgICAgICAgdGhpcy5teV9jb2xfbCAgID0gJyMzMzMzMzMnOyBcclxuXHJcbiAgICAgICAgdGhpcy5teV9jb2xfMiAgID0gJyNjY2NjY2MnOyBcclxuICAgICAgICB0aGlzLm15X2NvbF9MICAgPSAnIzk5OTlmZic7IFxyXG5cclxuICAgICAgICBpZiAoaiAhPT0gdW5kZWZpbmVkKSB0aGlzLl9faW5pdChqKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX19pbml0KGo6IEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkKTogSV9NYXplT2JqVmlldyB7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChqLmNsbmFtZSAgIT09IHVuZGVmaW5lZCkgdGhpcy5jbG5hbWUgICAgPSBqLmNsbmFtZTtcclxuICAgICAgICBpZiAoai5sYXllciAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfbGF5ZXIgID0gai5sYXllcjtcclxuICAgICAgICBpZiAoai5sZXR0ZXIgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfbGV0dGVyID0gai5sZXR0ZXIgIT09ICcnICA/IGoubGV0dGVyIDogbnVsbDsgXHJcbiAgICAgICAgaWYgKGoucGFkX3QgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X3BhZF90ICA9IGoucGFkX3Q7IFxyXG4gICAgICAgIGlmIChqLnBhZF9kICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9wYWRfZCAgPSBqLnBhZF9kOyBcclxuICAgICAgICBpZiAoai5wYWRfcyAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfcGFkX3MgID0gai5wYWRfczsgXHJcbiAgICAgICAgaWYgKGouc2hvdyAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X3Nob3cgICA9IGouc2hvdyAgICE9PSAnMCcgPyB0cnVlICAgICA6IGZhbHNlOyBcclxuICAgICAgICBpZiAoai5jb2xfZiAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfY29sX2YgID0gai5jb2xfZiAgIT09ICcnICA/IGouY29sX2YgIDogbnVsbDsgXHJcbiAgICAgICAgaWYgKGouY29sX2IgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2NvbF9iICA9IGouY29sX2IgICE9PSAnJyAgPyBqLmNvbF9iICA6IG51bGw7IFxyXG4gICAgICAgIGlmIChqLmNvbF9zICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9jb2xfcyAgPSBqLmNvbF9zICAhPT0gJycgID8gai5jb2xfcyAgOiBudWxsOyBcclxuICAgICAgICBpZiAoai5jb2xfdCAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfY29sX3QgID0gai5jb2xfdCAgIT09ICcnICA/IGouY29sX3QgIDogbnVsbDsgXHJcbiAgICAgICAgaWYgKGouY29sX2QgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2NvbF9kICA9IGouY29sX2QgICE9PSAnJyAgPyBqLmNvbF9kICA6IG51bGw7IFxyXG4gICAgICAgIGlmIChqLmNvbF9sICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9jb2xfbCAgPSBqLmNvbF9sICAhPT0gJycgID8gai5jb2xfbCAgOiBudWxsOyBcclxuICAgICAgICBpZiAoai5jb2xfMiAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfY29sXzIgID0gai5jb2xfMiAgIT09ICcnICA/IGouY29sXzIgIDogbnVsbDsgXHJcbiAgICAgICAgaWYgKGouY29sX0wgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2NvbF9MICA9IGouY29sX0wgICE9PSAnJyAgPyBqLmNvbF9MICA6IG51bGw7IFxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGF5ZXIoKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5teV9sYXllcjt9XHJcbiAgICBwdWJsaWMgc2V0X2xheWVyKGxheWVyOiBudW1iZXIpIHt0aGlzLm15X2xheWVyID0gbGF5ZXJ9XHJcblxyXG4gICAgcHVibGljIGxldHRlcigpOiAgc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2xldHRlcn1cclxuICAgIHB1YmxpYyBzZXRfbGV0dGVyKGxldHRlcjogc3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfbGV0dGVyID0gbGV0dGVyfVxyXG5cclxuICAgIHB1YmxpYyBjYW5TaG93KCk6IGJvb2xlYW4ge3JldHVybiB0aGlzLm15X3Nob3d9O1xyXG4gICAgcHVibGljIHNldFNob3coY2FuX3Nob3c6IGJvb2xlYW4pOiBib29sZWFuIHtyZXR1cm4gdGhpcy5teV9zaG93ID0gY2FuX3Nob3d9O1xyXG5cclxuICAgIHB1YmxpYyBwYWRfdCgpOiAgbnVtYmVyIHtyZXR1cm4gdGhpcy5teV9wYWRfdH1cclxuICAgIHB1YmxpYyBwYWRfZCgpOiAgbnVtYmVyIHtyZXR1cm4gdGhpcy5teV9wYWRfZH1cclxuICAgIHB1YmxpYyBwYWRfcygpOiAgbnVtYmVyIHtyZXR1cm4gdGhpcy5teV9wYWRfc31cclxuICAgIHB1YmxpYyBzZXRfcGFkX3QocGFkX3Q6IG51bWJlcik6IG51bWJlciB7cmV0dXJuIHRoaXMubXlfcGFkX3QgPSB0aGlzLm15X3BhZF9kICsgcGFkX3QgPCAxLjAgPyBwYWRfdCA6IDAuOTkgLSB0aGlzLm15X3BhZF9kfVxyXG4gICAgcHVibGljIHNldF9wYWRfZChwYWRfZDogbnVtYmVyKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5teV9wYWRfZCA9IHRoaXMubXlfcGFkX3QgKyBwYWRfZCA8IDEuMCA/IHBhZF9kIDogMC45OSAtIHRoaXMubXlfcGFkX3R9XHJcbiAgICBwdWJsaWMgc2V0X3BhZF9zKHBhZF9zOiBudW1iZXIpOiBudW1iZXIge3JldHVybiB0aGlzLm15X3BhZF9zID0gcGFkX3N9XHJcblxyXG4gICAgcHVibGljIGNvbF9mKCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfZn0gXHJcbiAgICBwdWJsaWMgY29sX2IoKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9ifSBcclxuICAgIHB1YmxpYyBjb2xfcygpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX3N9IFxyXG4gICAgcHVibGljIGNvbF90KCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfdH0gXHJcbiAgICBwdWJsaWMgY29sX2QoKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9kfSBcclxuICAgIHB1YmxpYyBjb2xfbCgpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX2x9IFxyXG4gICAgcHVibGljIHNldF9jb2xfZihjb2xfZjogc3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX2YgPSBjb2xfZn0gXHJcbiAgICBwdWJsaWMgc2V0X2NvbF9iKGNvbF9iOiBzdHJpbmd8bnVsbCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfYiA9IGNvbF9ifSBcclxuICAgIHB1YmxpYyBzZXRfY29sX3MoY29sX3M6IHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9zID0gY29sX3N9IFxyXG4gICAgcHVibGljIHNldF9jb2xfdChjb2xfdDogc3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX3QgPSBjb2xfdH0gXHJcbiAgICBwdWJsaWMgc2V0X2NvbF9kKGNvbF9kOiBzdHJpbmd8bnVsbCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfZCA9IGNvbF9kfSBcclxuICAgIHB1YmxpYyBzZXRfY29sX2woY29sX2w6IHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9sID0gY29sX2x9IFxyXG5cclxuICAgIHB1YmxpYyBjb2xfMigpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sXzJ9XHJcbiAgICBwdWJsaWMgY29sX0woKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9MfVxyXG4gICAgcHVibGljIHNldF9jb2xfMihjb2xfMjogc3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sXzIgPSBjb2xfMn0gXHJcbiAgICBwdWJsaWMgc2V0X2NvbF9MKGNvbF9MOiBzdHJpbmd8bnVsbCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfTCA9IGNvbF9MfSBcclxuXHJcbiAgICBwdWJsaWMgZHJvdzJEKHJlY3Q6IFRfUmVjdCk6IHZvaWQge1xyXG4gICAgICAgIGRyb3cyRF9jZWxsKHJlY3QsIHRoaXMuY29sXzIoKSA/PyAnI2NjY2NjYycsIHRoaXMuY29sX0woKSA/PyAnIzk5OTlmZicpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcm93M0QoZnJvdDogVF9XYWxsLCBiYWNrOiBUX1dhbGwpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRyb3czRF9vYmpfYmFjayAgICAgIChmcm90LCBiYWNrKTtcclxuICAgICAgICB0aGlzLmRyb3czRF9vYmpfZG93biAgICAgIChmcm90LCBiYWNrKTtcclxuICAgICAgICB0aGlzLmRyb3czRF9vYmpfdG9wICAgICAgIChmcm90LCBiYWNrKTtcclxuICAgICAgICB0aGlzLmRyb3czRF9vYmpfcmlnaHRfc2lkZShmcm90LCBiYWNrKTtcclxuICAgICAgICB0aGlzLmRyb3czRF9vYmpfbGVmdF9zaWRlIChmcm90LCBiYWNrKTtcclxuICAgICAgICB0aGlzLmRyb3czRF9vYmpfZnJvbnQgICAgIChmcm90LCBiYWNrKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZHJvdzNEX29ial9kb3duKFxyXG4gICAgICAgIGZyb3Q6ICBUX1dhbGwsIFxyXG4gICAgICAgIGJhY2s6ICBUX1dhbGwsIFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblNob3coKSB8fCB0aGlzLmNvbF90KCkgPT09IG51bGwpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5wYWRfcygpIDw9IDAuMCAmJiB0aGlzLnBhZF90KCkgPj0gMS4wKSB7XHJcbiAgICAgICAgICAgIGRyb3czRF9jZWxsX2Zsb29yKGZyb3QsIGJhY2ssIHRoaXMuY29sX3QoKSA/PyAnIzY2NjZmZicsIHRoaXMuY29sX2woKSA/PyAnIzk5OTlmZicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbyA9IF9fY2FsY19wYWRkaW5nX29iaih0aGlzLCBmcm90LCBiYWNrKTtcclxuICAgICAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgICAgIHRsOiBvLmZkbCxcclxuICAgICAgICAgICAgdHI6IG8uZmRyLFxyXG4gICAgICAgICAgICBkcjogby5iZHIsXHJcbiAgICAgICAgICAgIGRsOiBvLmJkbCxcclxuICAgICAgICB9XHJcbiAgICAgICAgZHJvdzNEX2NlbGwocmVjdCwgdGhpcy5jb2xfdCgpLCB0aGlzLmNvbF9sKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJvdzNEX29ial90b3AoXHJcbiAgICAgICAgZnJvdDogIFRfV2FsbCwgXHJcbiAgICAgICAgYmFjazogIFRfV2FsbCwgXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuU2hvdygpIHx8IHRoaXMuY29sX2QoKSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnBhZF9zKCkgPD0gMC4wICYmIHRoaXMucGFkX2QoKSA+PSAxLjApIHtcclxuICAgICAgICAgICAgZHJvdzNEX2NlbGxfY2VpbGluZyhmcm90LCBiYWNrLCB0aGlzLmNvbF9kKCkgPz8gJyNhYWFhYWEnLCB0aGlzLmNvbF9sKCkgPz8gJyM5OTk5ZmYnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IG8gPSBfX2NhbGNfcGFkZGluZ19vYmoodGhpcywgZnJvdCwgYmFjayk7XHJcbiAgICAgICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgICAgICB0bDogby5mdGwsXHJcbiAgICAgICAgICAgIHRyOiBvLmZ0cixcclxuICAgICAgICAgICAgZHI6IG8uYnRyLFxyXG4gICAgICAgICAgICBkbDogby5idGwsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRyb3czRF9jZWxsKHJlY3QsIHRoaXMuY29sX2QoKSwgdGhpcy5jb2xfbCgpKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZHJvdzNEX29ial9mcm9udChcclxuICAgICAgICBmcm90OiAgVF9XYWxsLCBcclxuICAgICAgICBiYWNrOiAgVF9XYWxsLCBcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5TaG93KCkgfHwgdGhpcy5jb2xfZigpID09PSBudWxsKSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBjb25zdCBvID0gX19jYWxjX3BhZGRpbmdfb2JqKHRoaXMsIGZyb3QsIGJhY2spO1xyXG4gICAgICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICAgICAgdGw6IG8uZnRsLCBcclxuICAgICAgICAgICAgdHI6IG8uZnRyLCBcclxuICAgICAgICAgICAgZHI6IG8uZmRyLCBcclxuICAgICAgICAgICAgZGw6IG8uZmRsLCBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBkcm93M0RfY2VsbChyZWN0LCB0aGlzLmNvbF9mKCksIHRoaXMuY29sX2woKSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRyb3czRF9vYmpfYmFjayhcclxuICAgICAgICBmcm90OiAgVF9XYWxsLCBcclxuICAgICAgICBiYWNrOiAgVF9XYWxsLCBcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5TaG93KCkgfHwgdGhpcy5jb2xfYigpID09PSBudWxsKSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBjb25zdCBvID0gX19jYWxjX3BhZGRpbmdfb2JqKHRoaXMsIGZyb3QsIGJhY2spO1xyXG4gICAgICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICAgICAgdGw6IG8uYnRsLCBcclxuICAgICAgICAgICAgdHI6IG8uYnRyLCBcclxuICAgICAgICAgICAgZHI6IG8uYmRyLCBcclxuICAgICAgICAgICAgZGw6IG8uYmRsLCBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBkcm93M0RfY2VsbChyZWN0LCB0aGlzLmNvbF9iKCksIHRoaXMuY29sX2woKSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRyb3czRF9vYmpfbGVmdF9zaWRlKFxyXG4gICAgICAgIGZyb3Q6ICBUX1dhbGwsIFxyXG4gICAgICAgIGJhY2s6ICBUX1dhbGwsIFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblNob3coKSB8fCB0aGlzLmNvbF9zKCkgPT09IG51bGwpIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IG8gPSBfX2NhbGNfcGFkZGluZ19vYmoodGhpcywgZnJvdCwgYmFjayk7XHJcbiAgICAgICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgICAgICB0bDogby5idGwsXHJcbiAgICAgICAgICAgIHRyOiBvLmZ0bCxcclxuICAgICAgICAgICAgZHI6IG8uZmRsLFxyXG4gICAgICAgICAgICBkbDogby5iZGwsXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZHJvdzNEX2NlbGwocmVjdCwgdGhpcy5jb2xfcygpLCB0aGlzLmNvbF9sKCkpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkcm93M0Rfb2JqX3JpZ2h0X3NpZGUoXHJcbiAgICAgICAgZnJvdDogIFRfV2FsbCwgXHJcbiAgICAgICAgYmFjazogIFRfV2FsbCwgXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuU2hvdygpIHx8IHRoaXMuY29sX3MoKSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbyA9IF9fY2FsY19wYWRkaW5nX29iaih0aGlzLCBmcm90LCBiYWNrKTtcclxuICAgICAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgICAgIHRsOiBvLmZ0cixcclxuICAgICAgICAgICAgdHI6IG8uYnRyLFxyXG4gICAgICAgICAgICBkcjogby5iZHIsXHJcbiAgICAgICAgICAgIGRsOiBvLmZkcixcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBkcm93M0RfY2VsbChyZWN0LCB0aGlzLmNvbF9zKCksIHRoaXMuY29sX2woKSk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTWF6ZU9ialZpZXcge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNuYW1lOiAgIHRoaXMuY2xuYW1lLFxyXG4gICAgICAgICAgICBsYXllcjogICB0aGlzLm15X2xheWVyLFxyXG4gICAgICAgICAgICBsZXR0ZXI6ICB0aGlzLm15X2xldHRlciA/PyAnJyxcclxuICAgICAgICAgICAgcGFkX3Q6ICAgdGhpcy5teV9wYWRfdCwgXHJcbiAgICAgICAgICAgIHBhZF9kOiAgIHRoaXMubXlfcGFkX2QsIFxyXG4gICAgICAgICAgICBwYWRfczogICB0aGlzLm15X3BhZF9zLCBcclxuICAgICAgICAgICAgc2hvdzogICAgdGhpcy5jYW5TaG93KCkgPyAnMScgOiAnMCcsXHJcbiAgICAgICAgICAgIGNvbF9mOiAgIHRoaXMubXlfY29sX2YgPz8gJycsICBcclxuICAgICAgICAgICAgY29sX2I6ICAgdGhpcy5teV9jb2xfYiA/PyAnJywgIFxyXG4gICAgICAgICAgICBjb2xfczogICB0aGlzLm15X2NvbF9zID8/ICcnLCBcclxuICAgICAgICAgICAgY29sX3Q6ICAgdGhpcy5teV9jb2xfdCA/PyAnJywgXHJcbiAgICAgICAgICAgIGNvbF9kOiAgIHRoaXMubXlfY29sX2QgPz8gJycsIFxyXG4gICAgICAgICAgICBjb2xfbDogICB0aGlzLm15X2NvbF9sID8/ICcnLCBcclxuICAgICAgICAgICAgY29sXzI6ICAgdGhpcy5teV9jb2xfMiA/PyAnJywgXHJcbiAgICAgICAgICAgIGNvbF9MOiAgIHRoaXMubXlfY29sX0wgPz8gJycsIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoajogSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQpOiBJX01hemVPYmpWaWV3IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX2luaXQoaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZShqOiBKU09OX01hemVPYmpWaWV3fHVuZGVmaW5lZCk6IElfTWF6ZU9ialZpZXcge1xyXG4gICAgICAgIHJldHVybiBDX01hemVPYmpWaWV3Lm5ld09iaihqKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBfX2NhbGNfcGFkZGluZ19vYmooXHJcbiAgICBvYmo6ICAgSV9NYXplT2JqVmlldyxcclxuICAgIGZyb3Q6ICBUX1dhbGwsIFxyXG4gICAgYmFjazogIFRfV2FsbCwgXHJcbik6IHtcclxuICAgIC8vIOitmOWIpeWtkOOBruaEj+WRs1xyXG4gICAgLy8g5bem56uv77ya5YmN5b6M44Gu5Yy65Yil44CAZjrliY3pnaLjgIBiOuiDjOmdolxyXG4gICAgLy8g5Lit5aSu77ya5LiK5LiL44Gu5Yy65Yil44CAdDrkuIrovrrjgIBkOuS4i+i+ulxyXG4gICAgLy8g5Y+z56uv77ya5bem5Y+z44Gu5Yy65Yil44CAbDrlt6blgbTjgIByOuWPs+WBtFxyXG4gICAgZnRsOlRfeHksIGZ0cjpUX3h5LCBmZHI6VF94eSwgZmRsOlRfeHksIFxyXG4gICAgYnRsOlRfeHksIGJ0cjpUX3h5LCBiZHI6VF94eSwgYmRsOlRfeHksIFxyXG59IHtcclxuICAgIGNvbnN0IHJlY3RfZnJvdCA9IGZyb3Q7XHJcbiAgICBjb25zdCByZWN0X2JhY2sgPSBiYWNrO1xyXG5cclxuICAgIGNvbnN0IHJhdGlvX1ggICA9IG9iai5wYWRfcygpIC8gMi4wO1xyXG4gICAgY29uc3QgcmF0aW9fVCAgID0gb2JqLnBhZF90KCk7XHJcbiAgICBjb25zdCByYXRpb19EICAgPSBvYmoucGFkX2QoKTtcclxuXHJcbiAgICBjb25zdCBmcm90X3BhZF9YICA9IE1hdGguYWJzKHJlY3RfZnJvdC5tYXhfeCAtIHJlY3RfZnJvdC5taW5feCkgKiByYXRpb19YO1xyXG4gICAgY29uc3QgYmFja19wYWRfWCAgPSBNYXRoLmFicyhyZWN0X2JhY2subWF4X3ggLSByZWN0X2JhY2subWluX3gpICogcmF0aW9fWDtcclxuXHJcbiAgICBjb25zdCBmcm90X3BhZF9UICA9IE1hdGguYWJzKHJlY3RfZnJvdC5tYXhfeSAtIHJlY3RfZnJvdC5taW5feSkgKiByYXRpb19UO1xyXG4gICAgY29uc3QgYmFja19wYWRfVCAgPSBNYXRoLmFicyhyZWN0X2JhY2subWF4X3kgLSByZWN0X2JhY2subWluX3kpICogcmF0aW9fVDtcclxuXHJcbiAgICBjb25zdCBmcm90X3BhZF9EICA9IE1hdGguYWJzKHJlY3RfZnJvdC5tYXhfeSAtIHJlY3RfZnJvdC5taW5feSkgKiByYXRpb19EO1xyXG4gICAgY29uc3QgYmFja19wYWRfRCAgPSBNYXRoLmFicyhyZWN0X2JhY2subWF4X3kgLSByZWN0X2JhY2subWluX3kpICogcmF0aW9fRDtcclxuXHJcbiAgICAvLyDjg5Hjg4fjgqPjg7PjgrDoqK3lrprlvozjga5YWeW6p+aomeOCkuioiOeul+OBmeOCi+OBn+OCgeOBq1xyXG4gICAgLy8g5b+F6KaB44Gq57ea5YiG44Gu5L2N572u5rG644KB44KS44GZ44KLXHJcbiAgICBjb25zdCBmcm90X3RvcF9sZnQgPSB7eDogcmVjdF9mcm90Lm1pbl94ICsgZnJvdF9wYWRfWCwgeTogcmVjdF9mcm90Lm1pbl95ICsgZnJvdF9wYWRfVH1cclxuICAgIGNvbnN0IGZyb3RfdG9wX3JndCA9IHt4OiByZWN0X2Zyb3QubWF4X3ggLSBmcm90X3BhZF9YLCB5OiByZWN0X2Zyb3QubWluX3kgKyBmcm90X3BhZF9UfVxyXG4gICAgY29uc3QgZnJvdF9kd25fbGZ0ID0ge3g6IHJlY3RfZnJvdC5taW5feCArIGZyb3RfcGFkX1gsIHk6IHJlY3RfZnJvdC5tYXhfeSAtIGZyb3RfcGFkX0R9XHJcbiAgICBjb25zdCBmcm90X2R3bl9yZ3QgPSB7eDogcmVjdF9mcm90Lm1heF94IC0gZnJvdF9wYWRfWCwgeTogcmVjdF9mcm90Lm1heF95IC0gZnJvdF9wYWRfRH1cclxuXHJcbiAgICBjb25zdCBiYWNrX3RvcF9sZnQgPSB7eDogcmVjdF9iYWNrLm1pbl94ICsgYmFja19wYWRfWCwgeTogcmVjdF9iYWNrLm1pbl95ICsgYmFja19wYWRfVH1cclxuICAgIGNvbnN0IGJhY2tfdG9wX3JndCA9IHt4OiByZWN0X2JhY2subWF4X3ggLSBiYWNrX3BhZF9YLCB5OiByZWN0X2JhY2subWluX3kgKyBiYWNrX3BhZF9UfVxyXG4gICAgY29uc3QgYmFja19kd25fbGZ0ID0ge3g6IHJlY3RfYmFjay5taW5feCArIGJhY2tfcGFkX1gsIHk6IHJlY3RfYmFjay5tYXhfeSAtIGJhY2tfcGFkX0R9XHJcbiAgICBjb25zdCBiYWNrX2R3bl9yZ3QgPSB7eDogcmVjdF9iYWNrLm1heF94IC0gYmFja19wYWRfWCwgeTogcmVjdF9iYWNrLm1heF95IC0gYmFja19wYWRfRH1cclxuXHJcbiAgICBsZXQgZnRsID0gX19jYWxjX3BhZGRpbmdfeHkoZnJvdF90b3BfbGZ0LCBiYWNrX3RvcF9sZnQsIHJhdGlvX1gpO1xyXG4gICAgbGV0IGZ0ciA9IF9fY2FsY19wYWRkaW5nX3h5KGZyb3RfdG9wX3JndCwgYmFja190b3Bfcmd0LCByYXRpb19YKTtcclxuICAgIGxldCBmZGwgPSBfX2NhbGNfcGFkZGluZ194eShmcm90X2R3bl9sZnQsIGJhY2tfZHduX2xmdCwgcmF0aW9fWCk7XHJcbiAgICBsZXQgZmRyID0gX19jYWxjX3BhZGRpbmdfeHkoZnJvdF9kd25fcmd0LCBiYWNrX2R3bl9yZ3QsIHJhdGlvX1gpO1xyXG5cclxuICAgIGxldCBidGwgPSBfX2NhbGNfcGFkZGluZ194eShiYWNrX3RvcF9sZnQsIGZyb3RfdG9wX2xmdCwgcmF0aW9fWCk7XHJcbiAgICBsZXQgYnRyID0gX19jYWxjX3BhZGRpbmdfeHkoYmFja190b3Bfcmd0LCBmcm90X3RvcF9yZ3QsIHJhdGlvX1gpO1xyXG4gICAgbGV0IGJkbCA9IF9fY2FsY19wYWRkaW5nX3h5KGJhY2tfZHduX2xmdCwgZnJvdF9kd25fbGZ0LCByYXRpb19YKTtcclxuICAgIGxldCBiZHIgPSBfX2NhbGNfcGFkZGluZ194eShiYWNrX2R3bl9yZ3QsIGZyb3RfZHduX3JndCwgcmF0aW9fWCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmdGw6IGZ0bCwgZnRyOiBmdHIsXHJcbiAgICAgICAgZmRsOiBmZGwsIGZkcjogZmRyLFxyXG4gICAgICAgIGJ0bDogYnRsLCBidHI6IGJ0cixcclxuICAgICAgICBiZGw6IGJkbCwgYmRyOiBiZHIsXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gX19jYWxjX3BhZGRpbmdfeHkoZnJvdDogVF94eSwgYmFjazogVF94eSwgcmF0aW86IG51bWJlcik6IFRfeHkge1xyXG4gICAgICAgIC8vIOe3muWIhihBeCArIEIgPSB5KeOBruaWueeoi+W8j+OBruS/guaVsOOCkuaxguOCgeOCi1xyXG4gICAgICAgIGNvbnN0IEEgPSAoZnJvdC55IC0gYmFjay55KSAvIChmcm90LnggLSBiYWNrLngpO1xyXG4gICAgICAgIGNvbnN0IEIgPSAgZnJvdC55IC0gQSAqIGZyb3QueDtcclxuICAgIFxyXG4gICAgICAgIC8vIOODkeODh+OCo+ODs+OCsOiqv+aVtOW+jOOBrlhZ5bqn5qiZ44Gu6KiI566XXHJcbiAgICAgICAgY29uc3QgcF9mcm90X3ggPSBmcm90LnggKyAoYmFjay54IC0gZnJvdC54KSAqIHJhdGlvO1xyXG4gICAgICAgIGNvbnN0IHBfZnJvdF95ID0gQSAqIHBfZnJvdF94ICsgQjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHt4OiBwX2Zyb3RfeCwgeTogcF9mcm90X3l9O1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZHJvdzNEX2NlbGxfZmxvb3IoXHJcbiAgICAgICAgcmVjdF9mcm90OiBUX1dhbGwsIFxyXG4gICAgICAgIHJlY3RfYmFjazogVF9XYWxsLCBcclxuICAgICAgICBmaWxsOiBzdHJpbmcgPSAnIzY2NjZmZicsIFxyXG4gICAgICAgIGxpbmU6IHN0cmluZyA9ICcjOTk5OWZmJ1xyXG4gICAgKTogdm9pZCB7XHJcblxyXG4gICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgIHRsOiB7eDogcmVjdF9mcm90Lm1pbl94LCB5OiByZWN0X2Zyb3QubWF4X3l9LFxyXG4gICAgICAgIHRyOiB7eDogcmVjdF9mcm90Lm1heF94LCB5OiByZWN0X2Zyb3QubWF4X3l9LFxyXG4gICAgICAgIGRyOiB7eDogcmVjdF9iYWNrLm1heF94LCB5OiByZWN0X2JhY2subWF4X3l9LFxyXG4gICAgICAgIGRsOiB7eDogcmVjdF9iYWNrLm1pbl94LCB5OiByZWN0X2JhY2subWF4X3l9XHJcbiAgICB9XHJcbiAgICBkcm93M0RfY2VsbChyZWN0LCBmaWxsLCBsaW5lKTtcclxufVxyXG5mdW5jdGlvbiBkcm93M0RfY2VsbF9jZWlsaW5nKFxyXG4gICAgICAgIHJlY3RfZnJvdDogVF9XYWxsLCBcclxuICAgICAgICByZWN0X2JhY2s6IFRfV2FsbCwgXHJcbiAgICAgICAgZmlsbDogc3RyaW5nID0gJyNhYWFhYWEnLCBcclxuICAgICAgICBsaW5lOiBzdHJpbmcgPSAnIzk5OTlmZidcclxuICAgICk6IHZvaWQge1xyXG5cclxuICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICB0bDoge3g6IHJlY3RfZnJvdC5taW5feCwgeTogcmVjdF9mcm90Lm1pbl95fSxcclxuICAgICAgICB0cjoge3g6IHJlY3RfZnJvdC5tYXhfeCwgeTogcmVjdF9mcm90Lm1pbl95fSxcclxuICAgICAgICBkcjoge3g6IHJlY3RfYmFjay5tYXhfeCwgeTogcmVjdF9iYWNrLm1pbl95fSxcclxuICAgICAgICBkbDoge3g6IHJlY3RfYmFjay5taW5feCwgeTogcmVjdF9iYWNrLm1pbl95fVxyXG4gICAgfVxyXG4gICAgZHJvdzNEX2NlbGwocmVjdCwgZmlsbCwgbGluZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyb3cyRF9jZWxsKHI6IFRfUmVjdCwgZmlsbDogc3RyaW5nfG51bGwsIGxpbmU6IHN0cmluZ3xudWxsKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb24gPSBDX01hemVPYmpWaWV3LmdldF9jb250ZXh0MkQoKTsgICAvLyEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxyXG4gICAgaWYgKGNvbiA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgY29uLmJlZ2luUGF0aCgpO1xyXG4gICAgY29uLm1vdmVUbyhyLnRsLngsIHIudGwueSk7XHJcbiAgICBjb24ubGluZVRvKHIudHIueCwgci50ci55KTtcclxuICAgIGNvbi5saW5lVG8oci5kci54LCByLmRyLnkpO1xyXG4gICAgY29uLmxpbmVUbyhyLmRsLngsIHIuZGwueSk7XHJcbiAgICBjb24uY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgaWYgKGZpbGwgIT0gbnVsbCkge1xyXG4gICAgICAgIGNvbi5maWxsU3R5bGUgICA9IGZpbGw7XHJcbiAgICAgICAgY29uLmZpbGwoKTtcclxuICAgIH1cclxuICAgIGlmIChsaW5lICE9PSBudWxsKSB7XHJcbiAgICAgICAgY29uLnN0cm9rZVN0eWxlID0gbGluZTtcclxuICAgICAgICBjb24ubGluZVdpZHRoICAgPSAxO1xyXG4gICAgICAgIGNvbi5zdHJva2UoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJvdzNEX2NlbGwocjogVF9SZWN0LCBmaWxsOiBzdHJpbmd8bnVsbCwgbGluZTogc3RyaW5nfG51bGwpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbiA9IENfTWF6ZU9ialZpZXcuZ2V0X2NvbnRleHQzRCgpO1xyXG4gICAgaWYgKGNvbiA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgY29uLmJlZ2luUGF0aCgpO1xyXG4gICAgY29uLm1vdmVUbyhyLnRsLngsIHIudGwueSk7XHJcbiAgICBjb24ubGluZVRvKHIudHIueCwgci50ci55KTtcclxuICAgIGNvbi5saW5lVG8oci5kci54LCByLmRyLnkpO1xyXG4gICAgY29uLmxpbmVUbyhyLmRsLngsIHIuZGwueSk7XHJcbiAgICBjb24uY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgaWYgKGZpbGwgIT0gbnVsbCkge1xyXG4gICAgICAgIGNvbi5maWxsU3R5bGUgICA9IGZpbGw7XHJcbiAgICAgICAgY29uLmZpbGwoKTtcclxuICAgIH1cclxuICAgIGlmIChsaW5lICE9PSBudWxsKSB7XHJcbiAgICAgICAgY29uLnN0cm9rZVN0eWxlID0gbGluZTtcclxuICAgICAgICBjb24ubGluZVdpZHRoICAgPSAxO1xyXG4gICAgICAgIGNvbi5zdHJva2UoKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfTG9jYXRpb24sIEpTT05fTG9jYXRpb24gfSBmcm9tIFwiLi9DX0xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IElfSlNPTl9VbmlxIH0gICAgICAgICAgICAgICBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcbmltcG9ydCB7IF9nZXRfdXVpZCB9ICAgICAgICAgICAgICAgICBmcm9tIFwiLi4vZF91dGwvRl9SYW5kXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fTW92YWJsZVBvaW50IGV4dGVuZHMgSlNPTl9Mb2NhdGlvbiB7XHJcbiAgICB1bmlxX2lkPzogIHN0cmluZyxcclxuICAgIGN1cl91cmw/OiAgc3RyaW5nLFxyXG4gICAgdGVhbV91aWQ/OiBzdHJpbmcsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfbXZwdF9pbmZvKGE6IEpTT05fTW92YWJsZVBvaW50fHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoXCJNdlB0IEluZm86XCIgXHJcbiAgICAgICAgKyBcIlxcbnVuaXFfaWQ6ICBcIiAgKyAoYS51bmlxX2lkICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3VybDogIFwiICArIChhLmN1cl91cmwgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG50ZWFtX3VpZDogXCIgICsgKGEudGVhbV91aWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxja2Q6IFwiICAgICAgKyAoYS5raW5kICAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubGNubTogXCIgICAgICArIChhLm5hbWUgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sY2lkOiBcIiAgICAgICsgKGEubG9jX3VpZCAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl94OiBcIiAgICAgKyAoYS5sb2NfcG9zPy54ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3k6IFwiICAgICArIChhLmxvY19wb3M/LnkgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfejogXCIgICAgICsgKGEubG9jX3Bvcz8ueiA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl9kOiBcIiAgICAgKyAoYS5sb2NfcG9zPy5kID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ19Nb3ZhYmxlUG9pbnQgZXh0ZW5kcyBDX0xvY2F0aW9uIGltcGxlbWVudHMgSV9KU09OX1VuaXEge1xyXG4gICAgcHJvdGVjdGVkIHVuaXFfaWQ6ICBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgY3VyX3VybDogIHN0cmluZztcclxuICAgIHByb3RlY3RlZCB0ZWFtX3VpZDogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihqc29uPzogSlNPTl9Nb3ZhYmxlUG9pbnQpIHtcclxuICAgICAgICBzdXBlcihqc29uKTtcclxuICAgICAgICB0aGlzLnVuaXFfaWQgID0gJ012UG9pbnQjJyArIF9nZXRfdXVpZCgpO1xyXG4gICAgICAgIHRoaXMuY3VyX3VybCAgPSAnJztcclxuICAgICAgICB0aGlzLnRlYW1fdWlkID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBpZiAoanNvbiAhPT0gdW5kZWZpbmVkICYmIGpzb24gIT09IG51bGwpIHRoaXMuZGVjb2RlKGpzb24pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHVpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy51bmlxX2lkfVxyXG4gICAgcHVibGljIHVybCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5jdXJfdXJsfVxyXG4gICAgcHVibGljIHRpZCgpOiBzdHJpbmd8dW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudGVhbV91aWR9XHJcblxyXG4gICAgcHVibGljIG5ld191aWQoKTogdm9pZCB7dGhpcy51bmlxX2lkID0gJ012UG9pbnQjJyArIF9nZXRfdXVpZCgpO31cclxuICAgIHB1YmxpYyBzZXRfdXJsKHVybDogc3RyaW5nKTogdm9pZCB7IHRoaXMuY3VyX3VybCAgPSB1cmw7fVxyXG4gICAgcHVibGljIHNldF90aWQodGlkOiBzdHJpbmcpOiB2b2lkIHsgdGhpcy50ZWFtX3VpZCA9IHRpZDt9XHJcblxyXG4gICAgcHVibGljIGNsb25lKCk6IENfTW92YWJsZVBvaW50IHtcclxuICAgICAgICBjb25zdCBtdnB0ID0gbmV3IENfTW92YWJsZVBvaW50KHRoaXMuZW5jb2RlKCkpO1xyXG4gICAgICAgIG12cHQubmV3X3VpZCgpO1xyXG4gICAgICAgIHJldHVybiBtdnB0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmcm9tSlNPTih0eHQ6IHN0cmluZyk6IENfTW92YWJsZVBvaW50IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqID0gSlNPTi5wYXJzZSh0eHQpIGFzIEpTT05fTW92YWJsZVBvaW50O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGUoaik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdG9KU09OKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuZW5jb2RlKCksIG51bGwsIFwiXFx0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9vYmpfdG9fc3RyaW5nKG9hOiBDX01vdmFibGVQb2ludCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9hLmVuY29kZSgpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9vYmpBcnJheV90b19zdHJpbmcob2FhOiB7W3VpZDogc3RyaW5nXTogQ19Nb3ZhYmxlUG9pbnR9KTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBvYSA9IFtdIGFzIEpTT05fTW92YWJsZVBvaW50W107XHJcbiAgICAgICAgZm9yIChjb25zdCBpaSBpbiBvYWEpIG9hLnB1c2gob2FhW2lpXS5lbmNvZGUoKSk7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9hKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdfdG9fb2JqKHR4dDogc3RyaW5nKTogQ19Nb3ZhYmxlUG9pbnQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGogICA9IEpTT04ucGFyc2UodHh0KSBhcyBKU09OX01vdmFibGVQb2ludFtdO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENfTW92YWJsZVBvaW50KCkuZGVjb2RlKGopO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENfTW92YWJsZVBvaW50KCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdfdG9fb2JqQXJyYXkodHh0OiBzdHJpbmcpOiB7W3VpZDogc3RyaW5nXTogQ19Nb3ZhYmxlUG9pbnR9IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqICAgPSBKU09OLnBhcnNlKHR4dCkgYXMgSlNPTl9Nb3ZhYmxlUG9pbnRbXTtcclxuICAgICAgICAgICAgY29uc3QgbXBhID0ge30gYXMge1tpZDogc3RyaW5nXTogQ19Nb3ZhYmxlUG9pbnR9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGpqIG9mIGopIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFhYSA9IG5ldyBDX01vdmFibGVQb2ludCgpLmRlY29kZShqaik7XHJcbiAgICAgICAgICAgICAgICBtcGFbYWFhLnVpZCgpXSA9IGFhYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbXBhO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTW92YWJsZVBvaW50IHtcclxuICAgICAgICBjb25zdCBqID0gc3VwZXIuZW5jb2RlKCkgYXMgSlNPTl9Nb3ZhYmxlUG9pbnQ7XHJcbiAgICAgICAgai51bmlxX2lkICA9IHRoaXMudW5pcV9pZDtcclxuICAgICAgICBqLmN1cl91cmwgID0gdGhpcy5jdXJfdXJsO1xyXG4gICAgICAgIGoudGVhbV91aWQgPSB0aGlzLnRlYW1fdWlkID8/ICcnO1xyXG4gICAgICAgIHJldHVybiBqO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShqPzogSlNPTl9Nb3ZhYmxlUG9pbnQpOiBDX01vdmFibGVQb2ludCB7XHJcbiAgICAgICAgc3VwZXIuZGVjb2RlKGopO1xyXG4gICAgICAgIGlmIChqID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChqLnVuaXFfaWQgICE9PSB1bmRlZmluZWQpIHRoaXMudW5pcV9pZCAgPSBqLnVuaXFfaWQ7XHJcbiAgICAgICAgaWYgKGouY3VyX3VybCAgIT09IHVuZGVmaW5lZCkgdGhpcy5jdXJfdXJsICA9IGouY3VyX3VybDtcclxuICAgICAgICBpZiAoai50ZWFtX3VpZCAhPT0gdW5kZWZpbmVkKSB0aGlzLnRlYW1fdWlkID0gai50ZWFtX3VpZDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudGVhbV91aWQgPT09ICcnKSB0aGlzLnRlYW1fdWlkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWxlcnQoKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJNdlB0IEluZm86XCIgXHJcbiAgICAgICAgICAgICsgXCJcXG51bmlxX2lkOiAgXCIgICsgKHRoaXMudW5pcV9pZCAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfdXJsOiAgXCIgICsgKHRoaXMuY3VyX3VybCAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG50ZWFtX3VpZDogXCIgICsgKHRoaXMudGVhbV91aWQgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sY2tkOiBcIiAgICAgICsgKHRoaXMubG9jX2tpbmQgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sY25tOiBcIiAgICAgICsgKHRoaXMubG9jX25hbWUgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sY2lkOiBcIiAgICAgICsgKHRoaXMubG9jX3VpZCAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfeDogXCIgICAgICsgKHRoaXMubG9jX3Bvcz8ueCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfeTogXCIgICAgICsgKHRoaXMubG9jX3Bvcz8ueSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfejogXCIgICAgICsgKHRoaXMubG9jX3Bvcz8ueiA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5jdXJfZDogXCIgICAgICsgKHRoaXMubG9jX3Bvcz8uZCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBJX0pTT04sIEpTT05fQW55IH0gZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX1BvaW50IGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgeD86IG51bWJlcixcclxuICAgIHk/OiBudW1iZXIsXHJcbiAgICB6PzogbnVtYmVyLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19Qb2ludCBpbXBsZW1lbnRzIElfSlNPTntcclxuICAgIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xyXG4gICAgcHVibGljIHo6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4PzogbnVtYmVyfENfUG9pbnR8SlNPTl9Qb2ludHx1bmRlZmluZWQsIHk/OiBudW1iZXIsIHo/OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB0aGlzLnkgPSB0aGlzLnogPSAtMztcclxuXHJcbiAgICAgICAgaWYgKHggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnggPSAwOyB0aGlzLnkgPSAwOyB0aGlzLnogPSAwO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgeSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgeiA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB4OyB0aGlzLnkgPSB5OyB0aGlzLnogPSB6O1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJvYmplY3RcIikgeyBcclxuICAgICAgICAgICAgaWYgKHggaW5zdGFuY2VvZiBDX1BvaW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSB4Lng7IHRoaXMueSA9IHgueTsgdGhpcy56ID0geC56O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWNvZGUoeCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy55ID0gdGhpcy56ID0gLTI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRfcCgpOiBDX1BvaW50IHtyZXR1cm4gbmV3IENfUG9pbnQodGhpcyl9IFxyXG4gICAgcHVibGljIHNldF9wKHA6IENfUG9pbnQpOiBDX1BvaW50fHVuZGVmaW5lZCB7XHJcbiAgICAgICAgdGhpcy54ID0gcC54OyB0aGlzLnkgPSBwLnk7IHRoaXMueiA9IHAuejtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNfZXhpc3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoeCA9PSB0aGlzLnggJiYgeSA9PSB0aGlzLnkgJiYgeiA9PSB0aGlzLnopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHdpdGhpbihwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChwLnggPT0gdGhpcy54ICYmIHAueSA9PSB0aGlzLnkgJiYgcC56ID09IHRoaXMueik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9Qb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHt4OiB0aGlzLngsIHk6IHRoaXMueSwgejogdGhpcy56fTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoYT86IEpTT05fUG9pbnQpOiBDX1BvaW50IHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAoYS54ID09PSB1bmRlZmluZWQgfHwgYS55ID09PSB1bmRlZmluZWQgfHwgYS56ID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHRoaXMueCA9IGEueDsgdGhpcy55ID0gYS55OyB0aGlzLnogPSBhLno7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX1BvaW50LCBKU09OX1BvaW50IH0gZnJvbSAnLi9DX1BvaW50JztcclxuaW1wb3J0IHtUX01ha2VFbnVtVHlwZX0gICAgICAgIGZyb20gXCIuLi9kX3V0bC9UX01ha2VFbnVtVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRfRGlyZWN0aW9uOntbZGlyOiBzdHJpbmddOiBudW1iZXJ9ID0ge1xyXG4gICAgTjogMCxcclxuICAgIEU6IDEsXHJcbiAgICBTOiAyLFxyXG4gICAgVzogMyxcclxuICAgIFg6IDk5XHJcbn0gYXMgY29uc3Q7XHJcbmV4cG9ydCB0eXBlIFRfRGlyZWN0aW9uID0gVF9NYWtlRW51bVR5cGU8dHlwZW9mIFRfRGlyZWN0aW9uPjtcclxuXHJcbmZ1bmN0aW9uIF9kaXJfa2V5KGRpcjogVF9EaXJlY3Rpb24gfCB1bmRlZmluZWQpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKFRfRGlyZWN0aW9uKS5maW5kKGtleSA9PiBUX0RpcmVjdGlvbltrZXldID09PSBkaXIpID8/IFwiPz8/P1wiO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX1BvaW50RGlyIGV4dGVuZHMgSlNPTl9Qb2ludCB7XHJcbiAgICBkPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfUERfaW5mbyhhOiBKU09OX1BvaW50RGlyfHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoXCJQb2ludERhdGEgSW5mbzpcIiBcclxuICAgICAgICArIFwiXFxueDogXCIgICAgICsgKGE/LnggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG55OiBcIiAgICAgKyAoYT8ueSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbno6IFwiICAgICArIChhPy56ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuZDogXCIgICAgICsgKGE/LmQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzICBDX1BvaW50RGlyIGV4dGVuZHMgQ19Qb2ludCB7XHJcbiAgICBwdWJsaWMgZDogVF9EaXJlY3Rpb247XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZD86IG51bWJlcnxUX0RpcmVjdGlvbnxDX1BvaW50RGlyfEpTT05fUG9pbnREaXIpIHtcclxuICAgICAgICBzdXBlcihkKTtcclxuICAgICAgICB0aGlzLmQgPSBUX0RpcmVjdGlvbi5YO1xyXG5cclxuICAgICAgICBpZiAoZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZCA9IGQgYXMgVF9EaXJlY3Rpb247XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChkIGluc3RhbmNlb2YgQ19Qb2ludERpcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kID0gZC5kIGFzIFRfRGlyZWN0aW9uO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWNvZGUoZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmQgPSBUX0RpcmVjdGlvbi5YO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfZF9tYl9uYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmQpIHtcclxuICAgICAgICAgICAgY2FzZSAwOiAgcmV0dXJuICfljJcnO1xyXG4gICAgICAgICAgICBjYXNlIDE6ICByZXR1cm4gJ+adsSc7XHJcbiAgICAgICAgICAgIGNhc2UgMjogIHJldHVybiAn5Y2XJztcclxuICAgICAgICAgICAgY2FzZSAzOiAgcmV0dXJuICfopb8nO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gJ+isjic7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldF9kKCk6IFRfRGlyZWN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9kKGQ6IFRfRGlyZWN0aW9uKTogQ19Qb2ludERpcnx1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICghKF9kaXJfa2V5KGQpIGluIFRfRGlyZWN0aW9uKSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmQgPSBkO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wZCgpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcGQoZDogQ19Qb2ludERpcnxKU09OX1BvaW50RGlyKTogQ19Qb2ludERpcnx1bmRlZmluZWQge1xyXG4gICAgICAgIGlmIChkIGluc3RhbmNlb2YgQ19Qb2ludERpcikge1xyXG4gICAgICAgICAgICBpZiAoIShfZGlyX2tleShkLmQpIGluIFRfRGlyZWN0aW9uKSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgc3VwZXIuc2V0X3AoZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZCA9IGQuZDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghKF9kaXJfa2V5KGQuZCkgaW4gVF9EaXJlY3Rpb24pKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZGVjb2RlKGQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9Qb2ludERpciB7XHJcbiAgICAgICAgY29uc3QgaiA9IHN1cGVyLmVuY29kZSgpIGFzIEpTT05fUG9pbnREaXI7XHJcbiAgICAgICAgai5kICAgICA9IHRoaXMuZCBhcyBudW1iZXI7XHJcbiAgICAgICAgcmV0dXJuIGo7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo/OiBKU09OX1BvaW50RGlyKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKCEoX2Rpcl9rZXkoai5kKSBpbiBUX0RpcmVjdGlvbikpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICBzdXBlci5kZWNvZGUoaik7XHJcbiAgICAgICAgdGhpcy5kID0gai5kIGFzIFRfRGlyZWN0aW9uO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWxlcnQoKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJQb2ludERhdGEgSW5mbzpcIiBcclxuICAgICAgICAgICAgKyBcIlxcbng6IFwiICAgICArICh0aGlzLnggPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxueTogXCIgICAgICsgKHRoaXMueSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG56OiBcIiAgICAgKyAodGhpcy56ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmQ6IFwiICAgICArICh0aGlzLmQgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImNsYXNzIENfUG9pbnQyRCB7XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gICAgcHVibGljIHk6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMueCAgPSB4O1xyXG4gICAgICAgIHRoaXMueSAgPSB5O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGlzX2V4aXN0KHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnggPT0geCkgJiYgKHRoaXMueSA9PSB5KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfUG9pbnRMaW5rMkQgZXh0ZW5kcyBDX1BvaW50MkQge1xyXG4gICAgcHVibGljIGRpOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgZGk6IG51bWJlciA9IC0xKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKHgsIHkpO1xyXG4gICAgICAgIHRoaXMuZGkgPSBkaTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgY2FzdChwOiBDX1BvaW50MkR8dW5kZWZpbmVkKTogQ19Qb2ludExpbmsyRHx1bmRlZmluZWQge1xyXG4gICAgICAgIGlmIChwPy54ID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKHA/LnkgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gcCBpbnN0YW5jZW9mIENfUG9pbnRMaW5rMkQgPyBwIDogbmV3IENfUG9pbnRMaW5rMkQocC54LCBwLnkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENfUG9pbnRTZXQyRCB7XHJcbiAgICBwdWJsaWMgc2V0OiBDX1BvaW50MkRbXSA9W107XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHB1YmxpYyBwdXNoKHA6IENfUG9pbnQyRCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0LnB1c2gocCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wb2ludCh4OiBudW1iZXIsIHk6IG51bWJlcik6IENfUG9pbnQyRHx1bmRlZmluZWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgcCBvZiB0aGlzLnNldCkge1xyXG4gICAgICAgICAgICBpZiAocD8uaXNfZXhpc3QoeCwgeSkpIHJldHVybiBwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkOyAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbW92ZShwOiBDX1BvaW50MkQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlbW92ZV94eShwLngsIHAueSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbW92ZV94eSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLnNldCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXRbaV0/LmlzX2V4aXN0KHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5zZXRbaV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldCA9IFsuLi50aGlzLnNldF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaXNfZXhpc3QoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHAgb2YgdGhpcy5zZXQpIGlmIChwPy5pc19leGlzdCh4LCB5KSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKlxyXG5jbGFzcyBQb2ludDNEIHtcclxuICAgIHB1YmxpYyBpbnQgJHg7XHJcbiAgICBwdWJsaWMgaW50ICR5O1xyXG4gICAgcHVibGljIGludCAkejtcclxuICAgIHB1YmxpYyBmdW5jdGlvbiBfX2NvbnN0cnVjdChpbnQgJHggPSAwLCBpbnQgJHkgPSAwLCBpbnQgJHogPSAwKVxyXG4gICAge1xyXG4gICAgICAgICR0aGlzLT54ICA9ICR4O1xyXG4gICAgICAgICR0aGlzLT55ICA9ICR5O1xyXG4gICAgICAgICR0aGlzLT56ICA9ICR6O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZ1bmN0aW9uIGlzX2V4aXN0KGludCAkeCwgaW50ICR5LCBpbnQgJHopOiBib29sIHtcclxuICAgICAgICByZXR1cm4gKCR0aGlzLT54ID09ICR4KSAmJiAoJHRoaXMtPnkgPT0gJHkpICYmICgkdGhpcy0+eiA9PSAkeik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZnVuY3Rpb24gd2l0aGluKFBvaW50M0QgJHApOiBib29sIHtcclxuICAgICAgICByZXR1cm4gJHRoaXMtPmlzX2V4aXN0KCRwLT54LCAkcC0+eSwgJHAtPnopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZ1bmN0aW9uIGVuY29kZSgpOiBhcnJheSB7XHJcbiAgICAgICAgJGEgPSBbXTtcclxuICAgICAgICAkYVsneCddID0gJHRoaXMtPng7XHJcbiAgICAgICAgJGFbJ3knXSA9ICR0aGlzLT55O1xyXG4gICAgICAgICRhWyd6J10gPSAkdGhpcy0+ejtcclxuXHJcbiAgICAgICAgcmV0dXJuICRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZ1bmN0aW9uIGRlY29kZShhcnJheSAkYSk6IFBvaW50M0Qge1xyXG4gICAgICAgIGlmICghaXNfbnVsbCgkYSkgJiYgaXNfYXJyYXkoJGEpKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGFycmF5X2tleV9leGlzdHMoJ3gnLCAkYSkgJiYgKGlzX251bWVyaWMoJGFbJ3gnXSkgJiYgJGFbJ3gnXSA+ICAwKVxyXG4gICAgICAgICAgICAmJiAgYXJyYXlfa2V5X2V4aXN0cygneScsICRhKSAmJiAoaXNfbnVtZXJpYygkYVsneSddKSAmJiAkYVsneSddID4gIDApXHJcbiAgICAgICAgICAgICYmICBhcnJheV9rZXlfZXhpc3RzKCd6JywgJGEpICYmIChpc19udW1lcmljKCRhWyd6J10pICYmICRhWyd6J10gPj0gMClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy0+eCA9ICRhWyd4J107XHJcbiAgICAgICAgICAgICAgICAkdGhpcy0+eSA9ICRhWyd5J107XHJcbiAgICAgICAgICAgICAgICAkdGhpcy0+eiA9ICRhWyd6J107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICR0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmdW5jdGlvbiBkZWNvZGVfYW5kX25ldyhhcnJheSAkYSk6IFBvaW50M0Qge1xyXG4gICAgICAgIGlmICghaXNfbnVsbCgkYSkgJiYgaXNfYXJyYXkoJGEpKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGFycmF5X2tleV9leGlzdHMoJ3gnLCAkYSkgJiYgKGlzX251bWVyaWMoJGFbJ3gnXSkgJiYgJGFbJ3gnXSA+ICAwKVxyXG4gICAgICAgICAgICAmJiAgYXJyYXlfa2V5X2V4aXN0cygneScsICRhKSAmJiAoaXNfbnVtZXJpYygkYVsneSddKSAmJiAkYVsneSddID4gIDApXHJcbiAgICAgICAgICAgICYmICBhcnJheV9rZXlfZXhpc3RzKCd6JywgJGEpICYmIChpc19udW1lcmljKCRhWyd6J10pICYmICRhWyd6J10gPj0gMClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50M0QoJGFbJ3gnXSwgJGFbJ3knXSwgJGFbJ3onXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludDNEKC0xLCAtMSwgLTEpO1xyXG4gICAgfVxyXG59XHJcbiovXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgX21heCwgX21pbiB9ICAgICAgICAgICBmcm9tIFwiLi4vZF91dGwvRl9NYXRoXCI7XHJcbmltcG9ydCB7IENfUG9pbnQsIEpTT05fUG9pbnQgfSAgZnJvbSBcIi4vQ19Qb2ludFwiO1xyXG5pbXBvcnQgeyBKU09OX0FueSB9ICAgICAgICAgICAgIGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9SYW5nZSBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIG1pbj86ICAgSlNPTl9Qb2ludCwgXHJcbiAgICBtYXg/OiAgIEpTT05fUG9pbnQsIFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19SYW5nZSB7XHJcbiAgICBwcm90ZWN0ZWQgbWluOiBDX1BvaW50O1xyXG4gICAgcHJvdGVjdGVkIG1heDogQ19Qb2ludDtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwMTogQ19Qb2ludCwgcDI6IENfUG9pbnQpIHtcclxuICAgICAgICB0aGlzLm1pbiAgPSBuZXcgQ19Qb2ludCgwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLm1heCAgPSBuZXcgQ19Qb2ludCgwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLl9pbml0KHAxLCBwMik7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX2luaXQocDE6IENfUG9pbnQsIHAyOiBDX1BvaW50KTogQ19SYW5nZSB7XHJcbiAgICAgICAgY29uc3QgbWluX3ggPSBfbWluKFtwMS54LCBwMi54XSk7XHJcbiAgICAgICAgY29uc3QgbWF4X3ggPSBfbWF4KFtwMS54LCBwMi54XSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1pbl95ID0gX21pbihbcDEueSwgcDIueV0pO1xyXG4gICAgICAgIGNvbnN0IG1heF95ID0gX21heChbcDEueSwgcDIueV0pO1xyXG5cclxuICAgICAgICBjb25zdCBtaW5feiA9IF9taW4oW3AxLnosIHAyLnpdKTtcclxuICAgICAgICBjb25zdCBtYXhfeiA9IF9tYXgoW3AxLnosIHAyLnpdKTtcclxuXHJcbiAgICAgICAgdGhpcy5taW4gID0gbmV3IENfUG9pbnQobWluX3gsIG1pbl95LCBtaW5feik7XHJcbiAgICAgICAgdGhpcy5tYXggID0gbmV3IENfUG9pbnQobWF4X3gsIG1heF95LCBtYXhfeik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3aXRoaW4oYTogQ19SYW5nZXxDX1BvaW50fG51bWJlciwgeT86IG51bWJlciwgej86IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgeSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgeiA9PT0gXCJudW1iZXJcIikgeyBcclxuICAgICAgICAgICAgaWYgKCBhIDwgdGhpcy5taW4ueCB8fCBhID4gdGhpcy5tYXgueCApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCB5IDwgdGhpcy5taW4ueSB8fCB5ID4gdGhpcy5tYXgueSApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCB6IDwgdGhpcy5taW4ueiB8fCB6ID4gdGhpcy5tYXgueiApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJvYmplY3RcIiAmJiBhIGluc3RhbmNlb2YgQ19Qb2ludCkgeyBcclxuICAgICAgICAgICAgY29uc3QgcCA9IGEgYXMgQ19Qb2ludDtcclxuICAgICAgICAgICAgaWYgKCBwLnggPCB0aGlzLm1pbi54IHx8IHAueCA+IHRoaXMubWF4LnggKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggcC55IDwgdGhpcy5taW4ueSB8fCBwLnkgPiB0aGlzLm1heC55ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIHAueiA8IHRoaXMubWluLnogfHwgcC56ID4gdGhpcy5tYXgueiApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJvYmplY3RcIiAmJiBhIGluc3RhbmNlb2YgQ19SYW5nZSkge1xyXG4gICAgICAgICAgICBjb25zdCBwID0gYSBhcyBDX1JhbmdlO1xyXG4gICAgICAgICAgICBpZiAoIHAubWluX3goKSA8IHRoaXMubWluLnggfHwgcC5tYXhfeCgpID4gdGhpcy5tYXgueCApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCBwLm1pbl95KCkgPCB0aGlzLm1pbi55IHx8IHAubWF4X3koKSA+IHRoaXMubWF4LnkgKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggcC5taW5feigpIDwgdGhpcy5taW4ueiB8fCBwLm1heF96KCkgPiB0aGlzLm1heC56ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG1pbl94KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1pbi54O31cclxuICAgIHB1YmxpYyBtYXhfeCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tYXgueDt9XHJcbiAgICBwdWJsaWMgbWluX3koKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWluLnk7fVxyXG4gICAgcHVibGljIG1heF95KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1heC55O31cclxuICAgIHB1YmxpYyBtaW5feigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5taW4uejt9XHJcbiAgICBwdWJsaWMgbWF4X3ooKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWF4Lno7fVxyXG4gICAgcHVibGljIHNpemVfeCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heC54IC0gdGhpcy5taW4ueCArIDE7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIHNpemVfeSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heC55IC0gdGhpcy5taW4ueSArIDE7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIHNpemVfeigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heC56IC0gdGhpcy5taW4ueiArIDE7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIGRvX2FsbF94eXooZm46ICh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKSA9PiBib29sZWFuKSB7XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IHRoaXMubWluLno7IHogPD0gdGhpcy5tYXguejsgeisrICkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gdGhpcy5taW4ueTsgeSA8PSB0aGlzLm1heC55OyB5KysgKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gdGhpcy5taW4ueDsgeSA8PSB0aGlzLm1heC54OyB4KysgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmbih4LCB5LCB6KSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRvX2FsbF9wKGZuOiAocDogQ19Qb2ludCkgPT4gYm9vbGVhbikge1xyXG4gICAgICAgIGZvciAodmFyIHogPSB0aGlzLm1pbi56OyB6IDw9IHRoaXMubWF4Lno7IHorKyApIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IHRoaXMubWluLnk7IHkgPD0gdGhpcy5tYXgueTsgeSsrICkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IHRoaXMubWluLng7IHkgPD0gdGhpcy5tYXgueDsgeCsrICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZm4obmV3IENfUG9pbnQoeCwgeSwgeikpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fUmFuZ2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1pbjogdGhpcy5taW4uZW5jb2RlKCksXHJcbiAgICAgICAgICAgIG1heDogdGhpcy5taW4uZW5jb2RlKCksXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShqOiBKU09OX1JhbmdlKTogQ19SYW5nZSB7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChqLm1pbiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAoai5tYXggPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgY29uc3QgcDEgPSBuZXcgQ19Qb2ludChqLm1pbik7XHJcbiAgICAgICAgY29uc3QgcDIgPSBuZXcgQ19Qb2ludChqLm1heCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luaXQocDEsIHAyKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX01hemUsIEpTT05fTWF6ZSwgYWxlcnRfbWF6ZV9pbmZvICB9ICBmcm9tIFwiLi9DX01hemVcIjtcclxuaW1wb3J0IHsgQ19HdWlsZCwgSlNPTl9HdWlsZCwgYWxlcnRfZ3VsZF9pbmZvIH0gZnJvbSBcIi4vQ19HdWlsZFwiO1xyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCwgSlNPTl9Nb3ZhYmxlUG9pbnQsIGFsZXJ0X212cHRfaW5mbyB9IGZyb20gXCIuL0NfTW92YWJsZVBvaW50XCI7XHJcbmltcG9ydCB7IENfVGVhbSwgSlNPTl9UZWFtLCBhbGVydF90ZWFtX2luZm8gIH0gIGZyb20gXCIuL0NfVGVhbVwiO1xyXG5pbXBvcnQgeyBDX1NhdmVJbmZvLCBJX0pTT04sIEpTT05fQW55LCBKU09OX1NhdmVJbmZvIH0gZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX1NhdmVEYXRhIGV4dGVuZHMgSlNPTl9TYXZlSW5mbyB7XHJcbiAgICBzYXZlX2lkPzogICBudW1iZXIsXHJcbiAgICBwbGF5ZXJfaWQ/OiBudW1iZXIsIFxyXG4gICAgdW5pcV9ubz86ICAgbnVtYmVyLFxyXG4gICAgdGl0bGU/OiAgICAgc3RyaW5nLFxyXG4gICAgZGV0YWlsPzogICAgc3RyaW5nLFxyXG4gICAgcG9pbnQ/OiAgICAgc3RyaW5nLFxyXG4gICAgYXV0b19tb2RlPzogc3RyaW5nLFxyXG4gICAgaXNfYWN0aXZlPzogc3RyaW5nLFxyXG4gICAgaXNfZGVsZXRlPzogc3RyaW5nLFxyXG4gICAgc2F2ZV90aW1lPzogc3RyaW5nLFxyXG5cclxuICAgIGFsbF9tdnB0PzogIEpTT05fTW92YWJsZVBvaW50W10sXHJcbiAgICBhbGxfbWF6ZT86ICBKU09OX01hemVbXSxcclxuICAgIGFsbF90ZWFtPzogIEpTT05fVGVhbVtdLFxyXG4gICAgYWxsX2d1bGQ/OiAgSlNPTl9HdWlsZFtdLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfc2F2ZV9pbmZvKGE6IEpTT05fU2F2ZURhdGF8dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydChcIlNhdmUgSW5mbzpcIiBcclxuICAgICAgICArIFwiXFxuc2F2ZV9pZDogICAgXCIgKyAoYS5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5wbGF5ZXJfaWQ6ICBcIiArIChhLnBsYXllcl9pZCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnVuaXFfbm86ICAgIFwiICsgKGEudW5pcV9ubyAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxudGl0bGU6ICAgICAgXCIgKyAoYS50aXRsZSAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5kZXRhaWw6ICAgICBcIiArIChhLmRldGFpbCAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnBvaW50OiAgICAgIFwiICsgKGEucG9pbnQgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuYXV0b19tb2RlOiAgXCIgKyAoYS5hdXRvX21vZGUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5pc19hY3RpdmU6ICBcIiArIChhLmlzX2FjdGl2ZSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmlzX2RlbGV0ZTogIFwiICsgKGEuaXNfZGVsZXRlID8/ICc/JylcclxuICAgICAgICArIFwiXFxubXZwdF9jb3VudDogXCIgKyAoYS5hbGxfbXZwdD8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICArIFwiXFxubWF6ZV9jb3VudDogXCIgKyAoYS5hbGxfbWF6ZT8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICArIFwiXFxuZ3VsZF9jb3VudDogXCIgKyAoYS5hbGxfZ3VsZD8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICArIFwiXFxudGVhbV9jb3VudDogXCIgKyAoYS5hbGxfdGVhbT8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9zYXZlX2RldGFpbChhOiBKU09OX1NhdmVEYXRhfHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgIHRyeSB7IFxyXG4vLyAgICAgICAgYWxlcnQoXCJTYXZlIERldGFpbChtdnB0KTpcIik7XHJcbiAgICAgICAgZm9yIChjb25zdCBtdnB0IG9mIGEuYWxsX212cHQ/P1tdKSBhbGVydF9tdnB0X2luZm8obXZwdCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHthbGVydCgnYWxlcnQgbXZwdCBlcnJvcjogJyArIGVycil9XHJcblxyXG4gICAgdHJ5IHsgXHJcbi8vICAgICAgICBhbGVydChcIlNhdmUgRGV0YWlsKHRlYW0pOlwiKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHRlYW0gb2YgYS5hbGxfdGVhbT8/W10pIGFsZXJ0X3RlYW1faW5mbyh0ZWFtKTtcclxuICAgIH0gY2F0Y2ggKGVycikge2FsZXJ0KCdhbGVydCB0ZWFtIGVycm9yOiAnICsgZXJyKX1cclxuXHJcbiAgICB0cnkgeyBcclxuLy8gICAgICAgIGFsZXJ0KFwiU2F2ZSBEZXRhaWwobWF6ZSk6XCIpO1xyXG4gICAgICAgIGZvciAoY29uc3QgbWF6ZSBvZiBhLmFsbF9tYXplPz9bXSkgYWxlcnRfbWF6ZV9pbmZvKG1hemUpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7YWxlcnQoJ2FsZXJ0IG1hemUgZXJyb3I6ICcgKyBlcnIpfVxyXG5cclxuICAgIHRyeSB7IFxyXG4vLyAgICAgICAgYWxlcnQoXCJTYXZlIERldGFpbChndWxkKTpcIik7XHJcbiAgICAgICAgZm9yIChjb25zdCBndWxkIG9mIGEuYWxsX2d1bGQ/P1tdKSBhbGVydF9ndWxkX2luZm8oZ3VsZCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHthbGVydCgnYWxlcnQgZ3VsZCBlcnJvcjogJyArIGVycil9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ19TYXZlRGF0YSBleHRlbmRzIENfU2F2ZUluZm8gaW1wbGVtZW50cyBJX0pTT04ge1xyXG5cclxuLypcclxuICAgIHB1YmxpYyBzYXZlX2lkOiAgIG51bWJlcjtcclxuICAgIHB1YmxpYyBwbGF5ZXJfaWQ6IG51bWJlcjsgXHJcbiAgICBwdWJsaWMgdW5pcV9ubzogICBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGl0bGU6ICAgICBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGV0YWlsOiAgICBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcG9pbnQ6ICAgICBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYXV0b19tb2RlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlzX2FjdGl2ZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc19kZWxldGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgc2F2ZV90aW1lOiBEYXRlO1xyXG4gICAgcHVibGljIG15cG9zOiAgICAgQ19Nb3ZhYmxlUG9pbnQ7XHJcbiovXHJcblxyXG4gICAgcHVibGljIGFsbF9tdnB0OiAge1t1aWQ6IHN0cmluZ106IENfTW92YWJsZVBvaW50fTtcclxuICAgIHB1YmxpYyBhbGxfbWF6ZTogIHtbdWlkOiBzdHJpbmddOiBDX01hemV9O1xyXG4gICAgcHVibGljIGFsbF90ZWFtOiAge1t1aWQ6IHN0cmluZ106IENfVGVhbX07XHJcbiAgICBwdWJsaWMgYWxsX2d1bGQ6ICB7W3VpZDogc3RyaW5nXTogQ19HdWlsZH07XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGE/OiBKU09OX1NhdmVEYXRhKSB7XHJcbiAgICAgICAgc3VwZXIoYSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWxsX212cHQgID0ge307XHJcbiAgICAgICAgdGhpcy5hbGxfbWF6ZSAgPSB7fTtcclxuICAgICAgICB0aGlzLmFsbF90ZWFtICA9IHt9XHJcbiAgICAgICAgdGhpcy5hbGxfZ3VsZCAgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBuZXcoYT86IEpTT05fU2F2ZURhdGEpOiBDX1NhdmVEYXRhIHtcclxuICAgICAgICByZXR1cm4gbmV3IENfU2F2ZURhdGEoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1NhdmVEYXRhIHtcclxuICAgICAgICBsZXQgc2F2ZV9kYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3Qgc2F2ZV9kYXRhICAgID0gc3VwZXIuZW5jb2RlKCkgYXMgSlNPTl9TYXZlRGF0YTtcclxuXHJcbiAgICAgICAgICAgIHNhdmVfZGF0YS5hbGxfbXZwdCA9IHRoaXMuX2VuY29kZV9hbGxfZGF0YSh0aGlzLmFsbF9tdnB0KTsgXHJcbiAgICAgICAgICAgIHNhdmVfZGF0YS5hbGxfbWF6ZSA9IHRoaXMuX2VuY29kZV9hbGxfZGF0YSh0aGlzLmFsbF9tYXplKTsgXHJcbiAgICAgICAgICAgIHNhdmVfZGF0YS5hbGxfdGVhbSA9IHRoaXMuX2VuY29kZV9hbGxfZGF0YSh0aGlzLmFsbF90ZWFtKTsgXHJcbiAgICAgICAgICAgIHNhdmVfZGF0YS5hbGxfZ3VsZCA9IHRoaXMuX2VuY29kZV9hbGxfZGF0YSh0aGlzLmFsbF9ndWxkKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzYXZlX2RhdGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdTYXZlRGF0YSBFbmNvZGUgRXJyb3I6ICcgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9lbmNvZGVfYWxsX2RhdGEoYWxsX2RhdGE6IHtbdWlkOnN0cmluZ106SV9KU09OfSk6IEpTT05fQW55W10ge1xyXG4gICAgICAgIGNvbnN0IGFsbF9KU09OOiBKU09OX0FueVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBhbGxfZGF0YSkgYWxsX0pTT04ucHVzaChhbGxfZGF0YVtpXS5lbmNvZGUoKSk7XHJcbiAgICAgICAgcmV0dXJuIGFsbF9KU09OO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWNvZGUoczogSlNPTl9TYXZlRGF0YSk6IENfU2F2ZURhdGEge1xyXG4gICAgICAgIHN1cGVyLmRlY29kZShzKTtcclxuXHJcbiAgICAgICAgaWYgKHMuYWxsX212cHQgICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxfbXZwdCA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGpzb25fbXZwdCBvZiBzLmFsbF9tdnB0KSB7XHJcbiAgICAgICAgICAgICAgICAgY29uc3QgbXZwdCA9IChuZXcgQ19Nb3ZhYmxlUG9pbnQoKSkuZGVjb2RlKGpzb25fbXZwdCk7IFxyXG4gICAgICAgICAgICAgICAgIHRoaXMuYWxsX212cHRbbXZwdC51aWQoKV0gPSBtdnB0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZiAocy5hbGxfbWF6ZSAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsbF9tYXplID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl9tYXplIG9mIHMuYWxsX21hemUpIHtcclxuICAgICAgICAgICAgICAgICBjb25zdCBtYXplID0gKG5ldyBDX01hemUoKSkuZGVjb2RlKGpzb25fbWF6ZSk7IFxyXG4gICAgICAgICAgICAgICAgIHRoaXMuYWxsX21hemVbbWF6ZS51aWQoKV0gPSBtYXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZiAocy5hbGxfdGVhbSAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsbF90ZWFtID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl90ZWFtIG9mIHMuYWxsX3RlYW0pIHtcclxuICAgICAgICAgICAgICAgICBjb25zdCB0ZWFtID0gKG5ldyBDX1RlYW0oKSkuZGVjb2RlKGpzb25fdGVhbSk7IFxyXG4gICAgICAgICAgICAgICAgIHRoaXMuYWxsX3RlYW1bdGVhbS51aWQoKV0gPSB0ZWFtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZiAocy5hbGxfZ3VsZCAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsbF9ndWxkID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl9ndWxkIG9mIHMuYWxsX2d1bGQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGd1bGQgPSAobmV3IENfR3VpbGQoKSkuZGVjb2RlKGpzb25fZ3VsZCk7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxfZ3VsZFtndWxkLnVpZCgpXSA9IGd1bGQ7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIlNhdmUgSW5mbzpcIiBcclxuICAgICAgICAgICAgKyBcIlxcbnNhdmVfaWQ6ICAgIFwiICsgKHRoaXMuc2F2ZV9pZCAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnBsYXllcl9pZDogIFwiICsgKHRoaXMucGxheWVyX2lkID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnVuaXFfbm86ICAgIFwiICsgKHRoaXMudW5pcV9ubyAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnRpdGxlOiAgICAgIFwiICsgKHRoaXMudGl0bGUgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmRldGFpbDogICAgIFwiICsgKHRoaXMuZGV0YWlsICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnBvaW50OiAgICAgIFwiICsgKHRoaXMucG9pbnQgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmF1dG9fbW9kZTogIFwiICsgKHRoaXMuYXV0b19tb2RlPydZJzonTicpXHJcbiAgICAgICAgICAgICsgXCJcXG5pc19hY3RpdmU6ICBcIiArICh0aGlzLmlzX2FjdGl2ZT8nWSc6J04nKVxyXG4gICAgICAgICAgICArIFwiXFxuaXNfZGVsZXRlOiAgXCIgKyAodGhpcy5pc19kZWxldGU/J1knOidOJylcclxuICAgICAgICAgICAgKyBcIlxcbm12cHRfY291bnQ6IFwiICsgKHRoaXMuYWxsX212cHQ/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5tYXplX2NvdW50OiBcIiArICh0aGlzLmFsbF9tYXplPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuZ3VsZF9jb3VudDogXCIgKyAodGhpcy5hbGxfZ3VsZD8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnRlYW1fY291bnQ6IFwiICsgKHRoaXMuYWxsX3RlYW0/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFsZXJ0X2RldGFpbCgpOiB2b2lkIHtcclxuICAgICAgICB0cnkgeyBcclxuLy8gICAgICAgICAgICBhbGVydChcIlNhdmUgRGV0YWlsKG12cHQpOlwiKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpaSBpbiB0aGlzLmFsbF9tdnB0KSB0aGlzLmFsbF9tdnB0W2lpXS5hbGVydCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge2FsZXJ0KCdhbGVydCBtdnB0IGVycm9yOiAnICsgZXJyKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgdHJ5IHsgXHJcbi8vICAgICAgICAgICAgYWxlcnQoXCJTYXZlIERldGFpbCh0ZWFtKTpcIik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWkgaW4gdGhpcy5hbGxfdGVhbSkgdGhpcy5hbGxfdGVhbVtpaV0uYWxlcnQoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHthbGVydCgnYWxlcnQgdGVhbSBlcnJvcjogJyArIGVycil9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHRyeSB7IFxyXG4vLyAgICAgICAgICAgIGFsZXJ0KFwiU2F2ZSBEZXRhaWwobWF6ZSk6XCIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHRoaXMuYWxsX21hemUpIHRoaXMuYWxsX21hemVbaWldLmFsZXJ0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7YWxlcnQoJ2FsZXJ0IG1hemUgZXJyb3I6ICcgKyBlcnIpfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB0cnkgeyBcclxuLy8gICAgICAgICAgICBhbGVydChcIlNhdmUgRGV0YWlsKGd1bGQpOlwiKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpaSBpbiB0aGlzLmFsbF9ndWxkKSB0aGlzLmFsbF9ndWxkW2lpXS5hbGVydCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge2FsZXJ0KCdhbGVydCBndWxkIGVycm9yOiAnICsgZXJyKX1cclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCwgSlNPTl9Nb3ZhYmxlUG9pbnQgfSBmcm9tIFwiLi9DX01vdmFibGVQb2ludFwiO1xyXG5cclxuLy8g44K144O844OQ44O85YG044Go44KE44KK44Go44KK44GZ44KLSlNPTuW9ouW8j+ODh+ODvOOCv+OBruODhuODs+ODl+ODrOODvOODiFxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fQW55IHtcclxuICAgIFtrZXk6IHN0cmluZ106IGFueVxyXG59XHJcblxyXG4vLyDjgrXjg7zjg5Djg7zlgbTjgajjgoTjgorjgajjgorjgZnjgovjgq/jg6njgrnjgavlv4XopoHjgarjg6Hjgr3jg4Pjg4lcclxuZXhwb3J0IGludGVyZmFjZSBJX0pTT04ge1xyXG4gICAgZW5jb2RlOiAoKT0+SlNPTl9BbnksXHJcbiAgICBkZWNvZGU6IChqOkpTT05fQW55KT0+SV9KU09OLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElfSlNPTl9VbmlxIGV4dGVuZHMgSV9KU09OIHtcclxuICAgIHVpZDogKCk9PnN0cmluZyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJX0Fic3RyYWN0IHtcclxuICAgIG5ld09iajogKGo/OkpTT05fQW55KT0+SV9BYnN0cmFjdHx1bmRlZmluZWQsXHJcbiAgICBlbmNvZGU6ICgpPT5KU09OX0FueSxcclxuLy8gIHN0YXRpYyBkZWNvZGU6IChqOkpTT05fQW55KT0+SV9KU09OLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElfSlNPTl9DbGFzcyB7XHJcbiAgICBuZXc6IChqPzogSlNPTl9BbnkpPT5JX0pTT04sXHJcbn1cclxuXHJcbi8vIOOCteODvOODkOODvOWBtOOBqOOChOOCiuWPluOCiuOBmeOCi+mam+OBq+iHqui6q+OCkuaWh+Wtl+WIl+WMluOBmeOCi+OCr+ODqeOCueOBruODoeOCveODg+ODiVxyXG5leHBvcnQgaW50ZXJmYWNlIElfSlNPTlZhbHVlIGV4dGVuZHMgSV9KU09Oe1xyXG4gICAgZnJvbUpTT046ICgpPT52b2lkLFxyXG4gICAgdG9KU09OOiAgICgpPT52b2lkLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fU2F2ZUluZm8gZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBzYXZlX2lkPzogICBudW1iZXIsXHJcbiAgICBwbGF5ZXJfaWQ/OiBudW1iZXIsIFxyXG4gICAgdW5pcV9ubz86ICAgbnVtYmVyLFxyXG4gICAgdGl0bGU/OiAgICAgc3RyaW5nLFxyXG4gICAgZGV0YWlsPzogICAgc3RyaW5nLFxyXG4gICAgcG9pbnQ/OiAgICAgc3RyaW5nLFxyXG4gICAgYXV0b19tb2RlPzogc3RyaW5nLFxyXG4gICAgaXNfYWN0aXZlPzogc3RyaW5nLFxyXG4gICAgaXNfZGVsZXRlPzogc3RyaW5nLFxyXG4gICAgc2F2ZV90aW1lPzogc3RyaW5nLFxyXG4gICAgbXlwb3M/OiAgICAgSlNPTl9Nb3ZhYmxlUG9pbnQsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9zYXZlaW5mb19pbmZvKGE6IEpTT05fU2F2ZUluZm98dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydChcIlNhdmUgSW5mbzpcIiBcclxuICAgICAgICArIFwiXFxuc2F2ZV9pZDogICAgXCIgKyAoYS5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5wbGF5ZXJfaWQ6ICBcIiArIChhLnBsYXllcl9pZCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnVuaXFfbm86ICAgIFwiICsgKGEudW5pcV9ubyAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxudGl0bGU6ICAgICAgXCIgKyAoYS50aXRsZSAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5kZXRhaWw6ICAgICBcIiArIChhLmRldGFpbCAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnBvaW50OiAgICAgIFwiICsgKGEucG9pbnQgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuYXV0b19tb2RlOiAgXCIgKyAoYS5hdXRvX21vZGUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5pc19hY3RpdmU6ICBcIiArIChhLmlzX2FjdGl2ZSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmlzX2RlbGV0ZTogIFwiICsgKGEuaXNfZGVsZXRlID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2F2ZV90aW1lOiAgXCIgKyAoYS5zYXZlX3RpbWUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5teXVybDogICAgICBcIiArIChhLm15cG9zPy5jdXJfdXJsICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG50ZWFtX3VpZDogICBcIiArIChhLm15cG9zPy50ZWFtX3VpZCAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sb2Nfa2luZDogICBcIiArIChhLm15cG9zPy5raW5kICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sb2NfbmFtZTogICBcIiArIChhLm15cG9zPy5uYW1lICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sb2NfdWlkOiAgICBcIiArIChhLm15cG9zPy5sb2NfdWlkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfU2F2ZUluZm8gaW1wbGVtZW50cyBJX0pTT04ge1xyXG4gICAgcHVibGljIHNhdmVfaWQ6ICAgbnVtYmVyO1xyXG4gICAgcHVibGljIHBsYXllcl9pZDogbnVtYmVyOyBcclxuICAgIHB1YmxpYyB1bmlxX25vOiAgIG51bWJlcjtcclxuICAgIHB1YmxpYyB0aXRsZTogICAgIHN0cmluZztcclxuICAgIHB1YmxpYyBkZXRhaWw6ICAgIHN0cmluZztcclxuICAgIHB1YmxpYyBwb2ludDogICAgIHN0cmluZztcclxuICAgIHB1YmxpYyBhdXRvX21vZGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaXNfYWN0aXZlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlzX2RlbGV0ZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBzYXZlX3RpbWU6IERhdGU7XHJcbiAgICBwdWJsaWMgbXlwb3M6ICAgICBDX01vdmFibGVQb2ludDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYT86IEpTT05fU2F2ZUluZm8pIHtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgICA9IC0xO1xyXG4gICAgICAgIHRoaXMucGxheWVyX2lkID0gLTE7IFxyXG4gICAgICAgIHRoaXMudW5pcV9ubyAgID0gLTE7XHJcbiAgICAgICAgdGhpcy50aXRsZSAgICAgPSAnJztcclxuICAgICAgICB0aGlzLmRldGFpbCAgICA9ICcnO1xyXG4gICAgICAgIHRoaXMucG9pbnQgICAgID0gJyc7XHJcbiAgICAgICAgdGhpcy5hdXRvX21vZGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzX2FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc19kZWxldGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNhdmVfdGltZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMubXlwb3MgICAgID0gbmV3IENfTW92YWJsZVBvaW50KCk7XHJcblxyXG4gICAgICAgIGlmIChhICE9PSB1bmRlZmluZWQpIHRoaXMuZGVjb2RlKGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbmV3KGE/OiBKU09OX1NhdmVJbmZvKTogQ19TYXZlSW5mbyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX1NhdmVJbmZvKGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9TYXZlSW5mbyB7XHJcbiAgICAgICAgbGV0IHNhdmVfZGF0ZTogc3RyaW5nO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHNhdmVfZGF0ZSA9IHRoaXMuc2F2ZV90aW1lLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHNhdmVfZGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzYXZlX2lkOiAgIHRoaXMuc2F2ZV9pZCwgXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJfaWQ6IHRoaXMucGxheWVyX2lkLCAgXHJcbiAgICAgICAgICAgICAgICB1bmlxX25vOiAgIHRoaXMudW5pcV9ubywgXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogICAgIHRoaXMudGl0bGUsIFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiAgICB0aGlzLmRldGFpbCwgXHJcbiAgICAgICAgICAgICAgICBwb2ludDogICAgIHRoaXMucG9pbnQsIFxyXG4gICAgICAgICAgICAgICAgYXV0b19tb2RlOiB0aGlzLmF1dG9fbW9kZSA/ICcxJyA6ICcwJywgXHJcbiAgICAgICAgICAgICAgICBpc19hY3RpdmU6IHRoaXMuaXNfYWN0aXZlID8gJzEnIDogJzAnLCBcclxuICAgICAgICAgICAgICAgIGlzX2RlbGV0ZTogdGhpcy5pc19kZWxldGUgPyAnMScgOiAnMCcsIFxyXG4gICAgICAgICAgICAgICAgc2F2ZV90aW1lOiBzYXZlX2RhdGUsIFxyXG4gICAgICAgICAgICAgICAgbXlwb3M6ICAgICB0aGlzLm15cG9zLmVuY29kZSgpLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdTYXZlRGF0YSBFbmNvZGUgRXJyb3I6ICcgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWNvZGUoczogSlNPTl9TYXZlSW5mbyk6IENfU2F2ZUluZm8ge1xyXG4gICAgICAgIHRoaXMuc2F2ZV9pZCAgID0gcy5zYXZlX2lkICAgPz8gdGhpcy5zYXZlX2lkO1xyXG4gICAgICAgIHRoaXMucGxheWVyX2lkID0gcy5wbGF5ZXJfaWQgPz8gdGhpcy5wbGF5ZXJfaWQ7IFxyXG4gICAgICAgIHRoaXMudW5pcV9ubyAgID0gcy51bmlxX25vICAgPz8gdGhpcy51bmlxX25vO1xyXG4gICAgICAgIHRoaXMudGl0bGUgICAgID0gcy50aXRsZSAgICAgPz8gdGhpcy50aXRsZTtcclxuICAgICAgICB0aGlzLmRldGFpbCAgICA9IHMuZGV0YWlsICAgID8/IHRoaXMuZGV0YWlsO1xyXG4gICAgICAgIHRoaXMucG9pbnQgICAgID0gcy5wb2ludCAgICAgPz8gdGhpcy5wb2ludDtcclxuICAgICAgICBpZiAocy5hdXRvX21vZGUgPT09IHVuZGVmaW5lZCkgdGhpcy5hdXRvX21vZGU7IGVsc2Ugcy5hdXRvX21vZGUgIT09ICcwJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBpZiAocy5pc19hY3RpdmUgPT09IHVuZGVmaW5lZCkgdGhpcy5pc19hY3RpdmU7IGVsc2Ugcy5pc19hY3RpdmUgIT09ICcwJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBpZiAocy5pc19kZWxldGUgPT09IHVuZGVmaW5lZCkgdGhpcy5pc19kZWxldGU7IGVsc2Ugcy5pc19kZWxldGUgIT09ICcwJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBpZiAocy5zYXZlX3RpbWUgIT09IHVuZGVmaW5lZCkgdGhpcy5zYXZlX3RpbWUgPSBuZXcgRGF0ZShzLnNhdmVfdGltZSk7IFxyXG5cclxuICAgICAgICBpZiAocy5teXBvcyAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teXBvcy5kZWNvZGUocy5teXBvcyk7IFxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGFsZXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiU2F2ZUluZm8gREFUQTpcIiBcclxuICAgICAgICAgICAgKyBcIlxcbnNhdmVfaWQ6ICAgIFwiICsgKHRoaXMuc2F2ZV9pZCAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnBsYXllcl9pZDogIFwiICsgKHRoaXMucGxheWVyX2lkID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnVuaXFfbm86ICAgIFwiICsgKHRoaXMudW5pcV9ubyAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnRpdGxlOiAgICAgIFwiICsgKHRoaXMudGl0bGUgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmRldGFpbDogICAgIFwiICsgKHRoaXMuZGV0YWlsICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnBvaW50OiAgICAgIFwiICsgKHRoaXMucG9pbnQgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmF1dG9fbW9kZTogIFwiICsgKHRoaXMuYXV0b19tb2RlPydZJzonTicpXHJcbiAgICAgICAgICAgICsgXCJcXG5pc19hY3RpdmU6ICBcIiArICh0aGlzLmlzX2FjdGl2ZT8nWSc6J04nKVxyXG4gICAgICAgICAgICArIFwiXFxuaXNfZGVsZXRlOiAgXCIgKyAodGhpcy5pc19kZWxldGU/J1knOidOJylcclxuICAgICAgICAgICAgKyBcIlxcbm15dXJsOiAgICAgIFwiICsgKHRoaXMubXlwb3MudXJsKCkgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG50ZWFtX3VpZDogICBcIiArICh0aGlzLm15cG9zLnRpZCgpICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubG9jX2tpbmQ6ICAgXCIgKyAodGhpcy5teXBvcy5nZXRfbGNrZCgpID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxvY19uYW1lOiAgIFwiICsgKHRoaXMubXlwb3MuZ2V0X25hbWUoKSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sb2NfdWlkOiAgICBcIiArICh0aGlzLm15cG9zLmdldF91aWQoKSAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ19Qb2ludCB9ICAgICAgICAgICAgICAgZnJvbSBcIi4vQ19Qb2ludFwiO1xyXG5pbXBvcnQgeyBDX1BvaW50RGlyIH0gICAgICAgICAgICBmcm9tICcuL0NfUG9pbnREaXInO1xyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCB9ICAgICAgICBmcm9tIFwiLi9DX01vdmFibGVQb2ludFwiO1xyXG5pbXBvcnQgeyBDX1dhbGtlciwgSlNPTl9XYWxrZXIgfSBmcm9tIFwiLi9DX1dhbGtlclwiO1xyXG5pbXBvcnQgeyBDX0hlcm8sIEpTT05fSGVybyB9ICAgICBmcm9tIFwiLi9DX0hlcm9cIjtcclxuaW1wb3J0IHsgSV9NYXplT2JqIH0gICAgICAgICAgICAgZnJvbSBcIi4vQ19NYXplT2JqXCI7XHJcbmltcG9ydCB7IEpTT05fQW55IH0gICAgICAgICAgICAgIGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuaW1wb3J0IHsgQ19DdXJyZW50VGVhbVZpZXcgfSAgICAgZnJvbSBcIi4vQ19UZWFtVmlld1wiO1xyXG5pbXBvcnQgeyBJX01hemVPYmpWaWV3LCBKU09OX01hemVPYmpWaWV3IH0gIGZyb20gXCIuL0NfTWF6ZU9ialZpZXdcIjtcclxuaW1wb3J0IHsgQ19Hb29kLCAgVF9Hb29kS2luZCB9ICAgZnJvbSBcIi4vQ19Hb29kXCI7XHJcbmltcG9ydCB7IENfR29vZHNMaXN0LCBKU09OX0dvb2RzTGlzdCB9IGZyb20gXCIuL0NfR29vZHNMaXN0TkdcIjtcclxuaW1wb3J0IHsgX2dldF91dWlkIH0gICAgICAgICAgICAgZnJvbSBcIi4uL2RfdXRsL0ZfUmFuZFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX1RlYW0gZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBpZD86ICAgICAgICBudW1iZXIsIFxyXG4gICAgdW5pcV9pZD86ICAgc3RyaW5nLCBcclxuICAgIHNhdmVfaWQ/OiAgIG51bWJlciwgXHJcbiAgICBuYW1lPzogICAgICBzdHJpbmcsIFxyXG4gICAgbG9jYXRlPzogICAgSlNPTl9XYWxrZXIsXHJcbiAgICBnb2xkPzogICAgICBudW1iZXIsXHJcbi8vICAgIGdvb2RzPzogICAgIEpTT05fR29vZHNMaXN0LFxyXG4gICAgaGVyb2VzPzogICAgSlNPTl9IZXJvW10sIFxyXG4gICAgbW90aW9uPzogICAgc3RyaW5nLFxyXG4gICAgdmlldz86ICAgICAgSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF90ZWFtX2luZm8oYTogSlNPTl9UZWFtfHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoXCJUZWFtIEluZm86XCIgXHJcbiAgICAgICAgKyBcIlxcbmlkOiAgICBcIiAgICAgKyAoYS5pZCAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG51bmlxX2lkOiAgXCIgICsgKGEudW5pcV9pZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubmFtZTogIFwiICAgICArIChhLm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNhdmVfaWQ6IFwiICAgKyAoYS5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG51cmw6ICBcIiAgICAgICsgKGEubG9jYXRlPy5jdXJfdXJsICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubGNrZDogXCIgICAgICArIChhLmxvY2F0ZT8ua2luZCAgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxjbm06IFwiICAgICAgKyAoYS5sb2NhdGU/Lm5hbWUgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sY2lkOiBcIiAgICAgICsgKGEubG9jYXRlPy5sb2NfdWlkICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3g6IFwiICAgICArIChhLmxvY2F0ZT8ubG9jX3Bvcz8ueCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl95OiBcIiAgICAgKyAoYS5sb2NhdGU/LmxvY19wb3M/LnkgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfejogXCIgICAgICsgKGEubG9jYXRlPy5sb2NfcG9zPy56ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX2Q6IFwiICAgICArIChhLmxvY2F0ZT8ubG9jX3Bvcz8uZCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmdvbGQ6IFwiICAgICAgKyAoYS5nb2xkICAgICAgPz8gIDAgKVxyXG4vLyAgICAgICAgKyBcIlxcbmdvb2RzOiBcIiAgICAgKyAoT2JqZWN0LmtleXMoYS5nb29kcz8/W10pLmxlbmd0aClcclxuICAgICAgICArIFwiXFxuaGVyb2VzOiBcIiAgICArIChhLmhlcm9lcz8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcblxyXG4vLyAgICBpZiAoYS5oZXJvZXMgIT09IHVuZGVmaW5lZCkgYWxlcnRfaGVyb2VzX2luZm8oYS5oZXJvZXMpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENfVGVhbSBpbXBsZW1lbnRzIElfTWF6ZU9iaiB7XHJcbiAgICBwdWJsaWMgc3RhdGljIG5ld09iaihqPzogSlNPTl9UZWFtKTogQ19UZWFtIHtcclxuICAgICAgICByZXR1cm4gbmV3IENfVGVhbShqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBuZXdPYmooaj86IEpTT05fVGVhbSk6IENfVGVhbSB7cmV0dXJuIENfVGVhbS5uZXdPYmooaik7fVxyXG5cclxuICAgIHByb3RlY3RlZCBteV9pZDogICAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBteV9uYW1lOiAgIHN0cmluZztcclxuICAgIHByb3RlY3RlZCB1bmlxX2lkOiAgIHN0cmluZztcclxuICAgIHByb3RlY3RlZCBzYXZlX2lkOiAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCB3YWxrZXI6ICAgIENfV2Fsa2VyO1xyXG4gICAgcHJvdGVjdGVkIGdvbGQ6ICAgICAgbnVtYmVyO1xyXG4vLyAgICBwcm90ZWN0ZWQgZ29vZHM6ICAgICBDX0dvb2RzTGlzdDtcclxuICAgIHByb3RlY3RlZCBoZXJvZXM6ICAgIHtbdWlkOiBzdHJpbmddOiBDX0hlcm99O1xyXG5cclxuICAgIHByb3RlY3RlZCBteVZpZXc6ICAgIElfTWF6ZU9ialZpZXd8dW5kZWZpbmVkO1xyXG4gICAgcHJvdGVjdGVkIGhvcGVfbW90aW9uOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX1RlYW0pIHtcclxuXHJcbiAgICAgICAgdGhpcy5teV9pZCAgICAgPSAgMDtcclxuICAgICAgICB0aGlzLm15X25hbWUgICA9ICdOZW8gVGVhbT8nO1xyXG4gICAgICAgIHRoaXMudW5pcV9pZCAgID0gJ21haV90ZWFtIycgKyBfZ2V0X3V1aWQoKTtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgICA9ICAwO1xyXG5cclxuICAgICAgICB0aGlzLm15VmlldyA9IG5ldyBDX0N1cnJlbnRUZWFtVmlldyh0aGlzKSBhcyBJX01hemVPYmpWaWV3O1xyXG4gICAgICAgIHRoaXMud2Fsa2VyID0gbmV3IENfV2Fsa2VyKCk7XHJcbiAgICAgICAgdGhpcy53YWxrZXIuc2V0X3RpZCh0aGlzLnVpZCgpKTtcclxuXHJcbiAgICAgICAgdGhpcy5nb2xkICAgPSAwO1xyXG4vLyAgICAgICAgdGhpcy5nb29kcyAgPSBuZXcgQ19Hb29kc0xpc3QoKTtcclxuICAgICAgICB0aGlzLmhlcm9lcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuaG9wZV9tb3Rpb24gPSAnTk9QJzsgICAgXHJcbiAgICAgICAgaWYgKGogIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BycChhcmcgOiBKU09OX1RlYW0pIHtcclxuICAgICAgICB0aGlzLmRlY29kZShhcmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1aWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudW5pcV9pZH1cclxuXHJcbiAgICBwdWJsaWMgd2l0aGluKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBoZXJlID0gdGhpcy53YWxrZXI/LmdldF9wKCk7XHJcbiAgICAgICAgcmV0dXJuIGhlcmU/LndpdGhpbihwKSA/PyBmYWxzZTsgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpZXcoKTogIElfTWF6ZU9ialZpZXd8dW5kZWZpbmVkIHtyZXR1cm4gdGhpcy5teVZpZXd9XHJcbiAgICBwdWJsaWMgd2FsaygpOiAgQ19XYWxrZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndhbGtlclxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgY2FuVGhyb3VnaCgpOiBib29sZWFuIHtyZXR1cm4gdHJ1ZX1cclxuICAgIHB1YmxpYyBoaXRXYWxsRG1nKCk6IG51bWJlciAge3JldHVybiAwfVxyXG5cclxuICAgIHB1YmxpYyBocmVzKCk6ICBDX0hlcm9bXSB7XHJcbiAgICAgICAgY29uc3QgaHJlczogQ19IZXJvW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpaSBpbiB0aGlzLmhlcm9lcykgaHJlcy5wdXNoKHRoaXMuaGVyb2VzW2lpXSk7XHJcbiAgICAgICAgcmV0dXJuIGhyZXM7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIGNsZWFyX2hyZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZXJvZXMgPSB7fTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhZGRfaGVybyhoZXJvOiBDX0hlcm8pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlcm9lc1toZXJvLnVpZCgpXSA9IGhlcm87XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcm12X2hlcm8oaGVybzogQ19IZXJvKTogdm9pZCB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuaGVyb2VzW2hlcm8udWlkKCldO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRfbG9jKCk6IENfTW92YWJsZVBvaW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy53YWxrZXI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X2xvYyhsb2M6IENfTW92YWJsZVBvaW50KTogdm9pZCB7XHJcbiAgICAgICAgKHRoaXMud2Fsa2VyID8/PSBuZXcgQ19XYWxrZXIoKSkuZGVjb2RlKGxvYy5lbmNvZGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldF9wZCgpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53YWxrZXIuZ2V0X3BkKCk7XHJcbiAgICB9XHJcblxyXG4vKlxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX29ial90b19zdHJpbmcob2E6IENfVGVhbSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9hLCBudWxsLCBcIlxcdFwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9vYmpBcnJheV90b19zdHJpbmcob2FhOiB7W3VpZDogc3RyaW5nXTogQ19UZWFtfSk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3Qgb2EgPSBbXSBhcyBDX1RlYW1bXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGlpIGluIG9hYSkgb2EucHVzaChvYWFbaWldKTtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2EsIG51bGwsIFwiXFx0XCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ190b19vYmoodHh0OiBzdHJpbmcpOiBDX1RlYW0ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGogICA9IEpTT04ucGFyc2UodHh0KSBhcyBDX1RlYW1bXTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDX1RlYW0oaik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ19UZWFtKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdfdG9fb2JqQXJyYXkodHh0OiBzdHJpbmcpOiB7W3VpZDogc3RyaW5nXTogQ19UZWFtfSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaiAgID0gSlNPTi5wYXJzZSh0eHQpIGFzIEpTT05fVGVhbVtdO1xyXG4gICAgICAgICAgICBjb25zdCBtcGEgPSB7fSBhcyB7W2lkOiBzdHJpbmddOiBDX1RlYW19O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGpqIG9mIGopIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFhYSA9IG5ldyBDX1RlYW0oKS5kZWNvZGUoamopO1xyXG4gICAgICAgICAgICAgICAgbXBhW2FhYS51aWQoKV0gPSBhYWE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG1wYTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiovXHJcbiAgICBcclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9UZWFtIHtcclxuICAgICAgICB0aGlzLmdldF9sb2MoKTsgLy8gTG9jYXRpb27mg4XloLHjgpLmnIDmlrDjgavmm7TmlrBcclxuXHJcbiAgICAgICAgY29uc3QganNvbl9oZXJvZXM6IEpTT05fSGVyb1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaWkgaW4gdGhpcy5oZXJvZXMpIGpzb25faGVyb2VzLnB1c2godGhpcy5oZXJvZXNbaWldLmVuY29kZSgpKTsgIFxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogICAgICAgIHRoaXMubXlfaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICAgICAgdGhpcy5teV9uYW1lLFxyXG4gICAgICAgICAgICB1bmlxX2lkOiAgIHRoaXMudW5pcV9pZCxcclxuICAgICAgICAgICAgc2F2ZV9pZDogICB0aGlzLnNhdmVfaWQsXHJcbiAgICAgICAgICAgIGxvY2F0ZTogICAgdGhpcy53YWxrZXIuZW5jb2RlKCksXHJcbiAgICAgICAgICAgIGdvbGQ6ICAgICAgdGhpcy5nb2xkLFxyXG4vLyAgICAgICAgICAgIGdvb2RzOiAgICAgdGhpcy5nb29kcy5lbmNvZGUoKSxcclxuICAgICAgICAgICAgaGVyb2VzOiAgICBqc29uX2hlcm9lcyxcclxuICAgICAgICAgICAgbW90aW9uOiAgICB0aGlzLmhvcGVfbW90aW9uLFxyXG4gICAgICAgICAgICB2aWV3OiAgICAgIHRoaXMubXlWaWV3Py5lbmNvZGUoKSA/PyB7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX1RlYW18dW5kZWZpbmVkKTogQ19UZWFtIHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSAgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChhLmlkICAgIT09IHVuZGVmaW5lZCkgICAgdGhpcy5teV9pZCAgICAgICA9IGEuaWQ7XHJcbiAgICAgICAgaWYgKGEubmFtZSAhPT0gdW5kZWZpbmVkKSAgICB0aGlzLm15X25hbWUgICAgID0gYS5uYW1lO1xyXG4gICAgICAgIGlmIChhLnVuaXFfaWQgIT09IHVuZGVmaW5lZCkgdGhpcy51bmlxX2lkICAgICA9IGEudW5pcV9pZDtcclxuICAgICAgICBpZiAoYS5zYXZlX2lkICE9PSB1bmRlZmluZWQpIHRoaXMuc2F2ZV9pZCAgICAgPSBhLnNhdmVfaWQ7XHJcbiAgICAgICAgaWYgKGEubW90aW9uICE9PSB1bmRlZmluZWQpICB0aGlzLmhvcGVfbW90aW9uID0gYS5tb3Rpb247XHJcblxyXG4gICAgICAgIGlmIChhLmxvY2F0ZSAhPT0gdW5kZWZpbmVkKSAgdGhpcy53YWxrZXIuZGVjb2RlKGEubG9jYXRlKTtcclxuICAgICAgICBpZiAoYS5nb2xkICAgIT09IHVuZGVmaW5lZCkgIHRoaXMuZ29sZCA9IGEuZ29sZDtcclxuLy8gICAgICAgIGlmIChhLmdvb2RzICAhPT0gdW5kZWZpbmVkKSAgdGhpcy5nb29kcy5kZWNvZGUoYS5nb29kcyk7XHJcblxyXG4gICAgICAgIGlmIChhLmhlcm9lcyAhPT0gdW5kZWZpbmVkKSAge1xyXG4gICAgICAgICAgICB0aGlzLmhlcm9lcyA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGpzb25faGVybyBvZiBhLmhlcm9lcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVybyA9IG5ldyBDX0hlcm8oanNvbl9oZXJvKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVyb2VzW2hlcm8udWlkKCldID0gaGVybztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuLypcclxuICAgICAgICBpZiAoYS52aWV3ICAgICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGEudmlldykubGVuZ3RoID4gMCkgdGhpcy5teVZpZXcgPSBDX01hemVPYmpWaWV3Lm5ld09iaihhLnZpZXcpOyBcclxuICAgICAgICAgICAgZWxzZSB0aGlzLm15VmlldyA9IG5ldyBDX0N1cnJlbnRUZWFtVmlldyh0aGlzKSBhcyBJX01hemVPYmpWaWV3OyBcclxuICAgICAgICB9XHJcbiovXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGVuY29kZV9hbGwoYWxsX3RlYW06IENfVGVhbVtdKTogSlNPTl9UZWFtW10ge1xyXG4gICAgICAgIGNvbnN0IGFsbF90ZWFtX2RhdGE6IEpTT05fVGVhbVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgdGVhbSBvZiBhbGxfdGVhbSkge1xyXG4gICAgICAgICAgICBhbGxfdGVhbV9kYXRhLnB1c2godGVhbS5lbmNvZGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxfdGVhbV9kYXRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBkZWNvZGVfYWxsKGFsbF90ZWFtX2RhdGE6IEpTT05fVGVhbVtdKTogQ19UZWFtW10ge1xyXG4gICAgICAgIGNvbnN0IGFsbF90ZWFtOiBDX1RlYW1bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHRlYW1fZGF0YSBvZiBhbGxfdGVhbV9kYXRhKSB7XHJcbiAgICAgICAgICAgIGFsbF90ZWFtLnB1c2goKG5ldyBDX1RlYW0oKSkuZGVjb2RlKHRlYW1fZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsX3RlYW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIlRlYW0gSW5mbzpcIiBcclxuICAgICAgICAgICAgKyBcIlxcbmlkOiAgICBcIiAgICAgKyAodGhpcy5teV9pZCAgICAgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnVuaXFfaWQ6ICBcIiAgKyAodGhpcy51bmlxX2lkICAgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbm5hbWU6ICBcIiAgICAgKyAodGhpcy5teV9uYW1lICAgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNhdmVfaWQ6IFwiICAgKyAodGhpcy5zYXZlX2lkICAgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnVybDogIFwiICAgICAgKyAodGhpcy53YWxrZXIudXJsKCkgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxja2Q6IFwiICAgICAgKyAodGhpcy53YWxrZXIuZ2V0X2xja2Rfc3RyKCkgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubGNubTogXCIgICAgICArICh0aGlzLndhbGtlci5nZXRfbmFtZSgpICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sY2lkOiBcIiAgICAgICsgKHRoaXMud2Fsa2VyLmdldF91aWQoKSAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl94OiBcIiAgICAgKyAodGhpcy53YWxrZXIuZ2V0X3AoKS54ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl95OiBcIiAgICAgKyAodGhpcy53YWxrZXIuZ2V0X3AoKS55ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl96OiBcIiAgICAgKyAodGhpcy53YWxrZXIuZ2V0X3AoKS56ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl9kOiBcIiAgICAgKyAodGhpcy53YWxrZXIuZ2V0X2QoKSAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmdvbGQ6IFwiICAgICAgKyAoT2JqZWN0LmtleXModGhpcy5nb2xkID8/IHt9KS5sZW5ndGgpXHJcbiAgICAgICAgICAgICsgXCJcXG5oZXJvZXM6IFwiICAgICsgKHRoaXMuaGVyb2VzPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFsZXJ0X2hyZXMoKTogdm9pZCB7XHJcbi8vICAgICAgICBhbGVydChcIlRlYW0gSW5mbzpcIik7XHJcbiAgICAgICAgZm9yIChjb25zdCBpaSBpbiB0aGlzLmhlcm9lcykgdGhpcy5oZXJvZXNbaWldLmFsZXJ0KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBUX0RpcmVjdGlvbiB9ICAgICAgIGZyb20gJy4vQ19Qb2ludERpcic7XHJcbmltcG9ydCB7IENfVGVhbSwgSlNPTl9UZWFtIH0gZnJvbSBcIi4vQ19UZWFtXCI7XHJcbmltcG9ydCB7IFRfV2FsbCB9ICAgICAgICAgICAgZnJvbSBcIi4uL2RfbWRsL0NfV2FsbFwiO1xyXG5pbXBvcnQgeyBDX01hemVPYmpWaWV3LCBJX01hemVPYmpWaWV3LCBKU09OX01hemVPYmpWaWV3LCBUX1JlY3QgfSAgZnJvbSBcIi4vQ19NYXplT2JqVmlld1wiO1xyXG5cclxudHlwZSBUX3h5ID0ge3g6IG51bWJlciwgeTogbnVtYmVyfTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDX0N1cnJlbnRUZWFtVmlldyAgaW1wbGVtZW50cyBJX01hemVPYmpWaWV3IHtcclxuICAgIHB1YmxpYyAgc3RhdGljIG5ld09iaihqPzogSlNPTl9UZWFtKTogSV9NYXplT2JqVmlldyB7XHJcbiAgICAgICAgY29uc3QgdGVhbSA9IG5ldyBDX1RlYW0oaik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX0N1cnJlbnRUZWFtVmlldyh0ZWFtKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyAgbmV3T2JqKGo/OiBKU09OX1RlYW0pOiBJX01hemVPYmpWaWV3IHtyZXR1cm4gQ19DdXJyZW50VGVhbVZpZXcubmV3T2JqKGopfVxyXG5cclxuICAgIHByaXZhdGUgbXlfdGVhbTogQ19UZWFtO1xyXG4gICAgcHJpdmF0ZSBteV9sYXllcjogIG51bWJlciA9IDk5O1xyXG4gICAgcHVibGljICBjb25zdHJ1Y3Rvcih0ZWFtOiBDX1RlYW0pIHtcclxuICAgICAgICB0aGlzLm15X3RlYW0gPSB0ZWFtO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsYXllcigpOiBudW1iZXIgICAgICAgICB7cmV0dXJuIHRoaXMubXlfbGF5ZXI7fVxyXG4gICAgcHVibGljIHNldF9sYXllcihsYXllcjogbnVtYmVyKTogdm9pZCB7dGhpcy5teV9sYXllciA9IGxheWVyO31cclxuICAgIHB1YmxpYyBsZXR0ZXIoKTogc3RyaW5nfG51bGwge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5teV90ZWFtLndhbGsoKS5nZXRfZCgpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjogcmV0dXJuICfihpEnO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHJldHVybiAn4oaSJztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiByZXR1cm4gJ+KGkyc7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogcmV0dXJuICfihpAnO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gJ/CfjIAnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBjYW5TaG93KCk6IGJvb2xlYW57cmV0dXJuIGZhbHNlfVxyXG4gICAgcHVibGljIHBhZF90KCk6ICAgbnVtYmVyIHtyZXR1cm4gMC4wfSBcclxuICAgIHB1YmxpYyBwYWRfZCgpOiAgIG51bWJlciB7cmV0dXJuIDAuMH0gXHJcbiAgICBwdWJsaWMgcGFkX3MoKTogICBudW1iZXIge3JldHVybiAwLjB9IFxyXG4gICAgcHVibGljIGNvbF9mKCk6ICAgc3RyaW5nfG51bGwge3JldHVybiBudWxsfSBcclxuICAgIHB1YmxpYyBjb2xfYigpOiAgIHN0cmluZ3xudWxsIHtyZXR1cm4gbnVsbH0gXHJcbiAgICBwdWJsaWMgY29sX3MoKTogICBzdHJpbmd8bnVsbCB7cmV0dXJuIG51bGx9IFxyXG4gICAgcHVibGljIGNvbF90KCk6ICAgc3RyaW5nfG51bGwge3JldHVybiBudWxsfSBcclxuICAgIHB1YmxpYyBjb2xfZCgpOiAgIHN0cmluZ3xudWxsIHtyZXR1cm4gbnVsbH0gXHJcbiAgICBwdWJsaWMgY29sX2woKTogICBzdHJpbmd8bnVsbCB7cmV0dXJuIG51bGx9IFxyXG4gICAgcHVibGljIGNvbF8yKCk6ICAgc3RyaW5nfG51bGwge3JldHVybiBudWxsfSBcclxuICAgIHB1YmxpYyBjb2xfTCgpOiAgIHN0cmluZ3xudWxsIHtyZXR1cm4gbnVsbH0gXHJcblxyXG4gICAgcHVibGljIGRyb3czRChmcm90OiBUX1dhbGwsIGJhY2s6IFRfV2FsbCk6IHZvaWQge31cclxuXHJcbiAgICBwdWJsaWMgZHJvdzJEKHI6ICBUX1JlY3QpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3QgY29uID0gQ19NYXplT2JqVmlldy5nZXRfY29udGV4dDJEKCk7XHJcbiAgICAgICAgaWYgKGNvbiA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBjb24uYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY29uLm1vdmVUbyhyLnRsLngsIHIudGwueSk7XHJcbiAgICAgICAgY29uLmxpbmVUbyhyLnRyLngsIHIudHIueSk7XHJcbiAgICAgICAgY29uLmxpbmVUbyhyLmRyLngsIHIuZHIueSk7XHJcbiAgICAgICAgY29uLmxpbmVUbyhyLmRsLngsIHIuZGwueSk7XHJcbiAgICAgICAgY29uLmNsb3NlUGF0aCgpO1xyXG4gICAgXHJcbiAgICAgICAgY29uLmZpbGxTdHlsZSAgID0gXCIjZmYzMzMzXCI7XHJcbiAgICAgICAgY29uLmZpbGwoKTtcclxuICAgIFxyXG4gICAgICAgIC8vIERyYXcgdGhlIGFycm93XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLm15X3RlYW0ud2FsaygpLmdldF9kKCkpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiAgLy8g4oaRXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3cyRF9hcnJvdyh7eDogKHIudGwueCArIHIudHIueCkvMiwgeTpyLnRsLnl9LCByLmRsLCByLmRyKTticmVha1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6ICAvLyDihpJcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJvdzJEX2Fycm93KHt5OiAoci50ci55ICsgci5kci55KS8yLCB4OnIudHIueH0sIHIudGwsIHIuZGwpO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6IC8vIOKGk1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcm93MkRfYXJyb3coe3g6IChyLmRsLnggKyByLmRyLngpLzIsIHk6ci5kbC55fSwgci50ciwgci50bCk7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogLy8g4oaQXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3cyRF9hcnJvdyh7eTogKHIudGwueSArIHIuZGwueSkvMiwgeDpyLnRsLnh9LCByLmRyLCByLnRyKTticmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgZHJvdzJEX2Fycm93KHRvcDogVF94eSwgbGVmdDogVF94eSwgcmlnaHQ6IFRfeHkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjb24gPSBDX01hemVPYmpWaWV3LmdldF9jb250ZXh0MkQoKTtcclxuICAgICAgICBpZiAoY29uID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbi5tb3ZlVG8odG9wLngsIHRvcC55KTtcclxuICAgICAgICBjb24ubGluZVRvKHJpZ2h0LngsIHJpZ2h0LnkpO1xyXG4gICAgICAgIGNvbi5saW5lVG8obGVmdC54LCBsZWZ0LnkpO1xyXG4gICAgICAgIGNvbi5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgY29uLmZpbGxTdHlsZSAgID0gXCIjZmY2NjY2XCI7XHJcbiAgICAgICAgY29uLmZpbGwoKTtcclxuXHJcbiAgICAgICAgY29uLnN0cm9rZVN0eWxlID0gXCIjZmY5OTk5XCI7XHJcbiAgICAgICAgY29uLmxpbmVXaWR0aCAgID0gMztcclxuICAgICAgICBjb24uc3Ryb2tlKCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX01hemVPYmpWaWV3IHtyZXR1cm4ge2NuYW1lOiAnQ3VycmVudFRlYW1WaWV3J319XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo6IEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkKTogSV9NYXplT2JqVmlldyB7cmV0dXJuIHRoaXMgYXMgSV9NYXplT2JqVmlld31cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfUG9pbnREaXIsIFRfRGlyZWN0aW9uIH0gICAgICAgICAgIGZyb20gXCIuL0NfUG9pbnREaXJcIjtcclxuaW1wb3J0IHsgQ19Nb3ZhYmxlUG9pbnQsIEpTT05fTW92YWJsZVBvaW50IH0gZnJvbSBcIi4vQ19Nb3ZhYmxlUG9pbnRcIjtcclxuaW1wb3J0IHsgSV9Mb2NhdGUgfSAgICAgZnJvbSBcIi4vQ19Mb2NhdGlvblwiO1xyXG5pbXBvcnQgeyBJX0hvcGVBY3Rpb24gfSBmcm9tIFwiLi9JX0hvcGVcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fV2Fsa2VyIGV4dGVuZHMgSlNPTl9Nb3ZhYmxlUG9pbnQge1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19XYWxrZXIgZXh0ZW5kcyBDX01vdmFibGVQb2ludCB7XHJcbiAgICBjb25zdHJ1Y3RvcihqPzogSlNPTl9XYWxrZXIpIHtcclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfeCgpOiBudW1iZXIge3JldHVybiB0aGlzLmxvY19wb3MueH1cclxuICAgIHB1YmxpYyBnZXRfeSgpOiBudW1iZXIge3JldHVybiB0aGlzLmxvY19wb3MueX1cclxuICAgIHB1YmxpYyBnZXRfeigpOiBudW1iZXIge3JldHVybiB0aGlzLmxvY19wb3Muen1cclxuXHJcbiAgICBwdWJsaWMgc2V0X3goeDogbnVtYmVyKTogdm9pZCB7dGhpcy5sb2NfcG9zLnggPSB4fVxyXG4gICAgcHVibGljIHNldF95KHk6IG51bWJlcik6IHZvaWQge3RoaXMubG9jX3Bvcy55ID0geX1cclxuICAgIHB1YmxpYyBzZXRfeih6OiBudW1iZXIpOiB2b2lkIHt0aGlzLmxvY19wb3MueiA9IHp9XHJcblxyXG4gICAgcHVibGljIHNldF9wbGFjZShcclxuICAgICAgICBwbGFjZTogSV9Mb2NhdGUsIFxyXG4gICAgICAgIHVybD86ICBzdHJpbmcsIFxyXG4gICAgICAgIHBvcz86ICBDX1BvaW50RGlyKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0X3VpZCAocGxhY2UudWlkKCkpO1xyXG4gICAgICAgIHRoaXMuc2V0X2xja2QocGxhY2UuZ2V0X2xja2QoKSk7XHJcbiAgICAgICAgdGhpcy5zZXRfbmFtZShwbGFjZS5nZXRfbmFtZSgpKTtcclxuXHJcbiAgICAgICAgaWYgKHVybCAhPT0gdW5kZWZpbmVkKSB0aGlzLnNldF91cmwodXJsKTtcclxuICAgICAgICBpZiAocG9zICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRfcGQocG9zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwdWJsaWMgaG9wZV9wX2Z3ZCgpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJNb3ZlXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMuZ2V0X3BfZndkKCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy5zZXRfcF9md2QoKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBob3BlX3BfYmFrKCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIk1vdmVcIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy5nZXRfcF9iYWsoKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLnNldF9wX2JhaygpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgaG9wZV9wX2xmdCgpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJNb3ZlXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMuZ2V0X3BfbGZ0KCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy5zZXRfcF9sZnQoKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBob3BlX3Bfcmd0KCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIk1vdmVcIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy5nZXRfcF9yZ3QoKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLnNldF9wX3JndCgpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhvcGVfdHVybl9yKCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIlR1cm5cIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy5nZXRfcGQoKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLnR1cm5fcigpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhvcGVfdHVybl9sKCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIlR1cm5cIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy5nZXRfcGQoKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLnR1cm5fbCgpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBob3BlX3BfdXAoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiVXBcIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy5nZXRfcF91cCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMubW92ZV9wX3VwKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9wZV9wX2Rvd24oKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiRG93blwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wX2Rvd24oKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLm1vdmVfcF9kb3duKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmVfcF91cCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldF9wX3VwKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbW92ZV9wX2Rvd24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRfcF9kb3duKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzTkcoKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0X3BfZndkKCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9fZ2V0X3BfbW92ZSgxLCAwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcF9md2QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRfcGQodGhpcy5nZXRfcF9md2QoKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BfYmFrKCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9fZ2V0X3BfbW92ZSgtMSwgMCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BfYmFrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3BkKHRoaXMuZ2V0X3BfYmFrKCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wX2xmdCgpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX2dldF9wX21vdmUoMCwgLTEpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wX2xmdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldF9wZCh0aGlzLmdldF9wX2xmdCgpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfcF9yZ3QoKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19nZXRfcF9tb3ZlKDAsIDEpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wX3JndCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldF9wZCh0aGlzLmdldF9wX3JndCgpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfcF91cCgpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICBjb25zdCBwID0gbmV3IENfUG9pbnREaXIodGhpcy5sb2NfcG9zKTtcclxuICAgICAgICBwLnotLTtcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcF91cCgpIHtcclxuICAgICAgICB0aGlzLnNldF9wZCh0aGlzLmdldF9wX3VwKCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wX2Rvd24oKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgY29uc3QgcCA9IG5ldyBDX1BvaW50RGlyKHRoaXMubG9jX3Bvcyk7XHJcbiAgICAgICAgcC56Kys7XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BfZG93bigpIHtcclxuICAgICAgICB0aGlzLnNldF9wZCh0aGlzLmdldF9wX2Rvd24oKSk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX19nZXRfcF9tb3ZlKG9mZnNldEZCOiBudW1iZXIsIG9mZnNldExSOiBudW1iZXIpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICBjb25zdCBwID0gbmV3IENfUG9pbnREaXIodGhpcy5sb2NfcG9zKTtcclxuICAgICAgICBpZiAob2Zmc2V0RkIgIT09IDApIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmxvY19wb3MuZCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiBwLnkgLT0gb2Zmc2V0RkI7YnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHAueCArPSBvZmZzZXRGQjticmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogcC55ICs9IG9mZnNldEZCO2JyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiBwLnggLT0gb2Zmc2V0RkI7YnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9mZnNldExSICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5sb2NfcG9zLmQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjogcC54ICs9IG9mZnNldExSO2JyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOiBwLnkgKz0gb2Zmc2V0TFI7YnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6IHAueCAtPSBvZmZzZXRMUjticmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogcC55IC09IG9mZnNldExSO2JyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9hcm91bmQoZnJvbnQ6IG51bWJlciwgcmlnaHQ6bnVtYmVyLCB1cDogbnVtYmVyID0gMCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIHZhciB0YXJnZXRfeCAgPSB0aGlzLmxvY19wb3MueDtcclxuICAgICAgICB2YXIgdGFyZ2V0X3kgID0gdGhpcy5sb2NfcG9zLnk7XHJcbiAgICAgICAgdmFyIHRhcmdldF96ICA9IHRoaXMubG9jX3Bvcy56IC0gdXA7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmxvY19wb3MuZCkge1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeCArPSByaWdodDtcclxuICAgICAgICAgICAgICAgIHRhcmdldF95IC09IGZyb250O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTpcclxuICAgICAgICAgICAgICAgIHRhcmdldF94ICs9IGZyb250O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3kgKz0gcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3ggLT0gcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeSArPSBmcm9udDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeCAtPSBmcm9udDtcclxuICAgICAgICAgICAgICAgIHRhcmdldF95IC09IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQ19Qb2ludERpcih7eDogdGFyZ2V0X3gsIHk6IHRhcmdldF95LCB6OiB0YXJnZXRfeiwgZDogdGhpcy5sb2NfcG9zLmR9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB0dXJuX3IoKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmxvY19wb3MuZCkge1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uRTticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLlM7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5XO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uTjticmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdHVybl9sKCk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5sb2NfcG9zLmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLlc7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5OO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uRTticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLlM7YnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHR1cm5fYigpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubG9jX3Bvcy5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5TO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uVzticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLk47YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5XO2JyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9XYWxrZXIge1xyXG4gICAgICAgIGNvbnN0IGogPSBzdXBlci5lbmNvZGUoKSBhcyBKU09OX1dhbGtlcjtcclxuICAgICAgICByZXR1cm4gajtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoYTogSlNPTl9XYWxrZXIpOiBDX1dhbGtlciB7XHJcbiAgICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgc3VwZXIuZGVjb2RlKGEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7VF9NYWtlRW51bVR5cGV9IGZyb20gXCIuLi9kX3V0bC9UX01ha2VFbnVtVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRfRGlyZWN0aW9uID0ge1xyXG4gICAgTjogICAwLFxyXG4gICAgRTogICAxLFxyXG4gICAgUzogICAyLFxyXG4gICAgVzogICAzLFxyXG4gICAgWDogIDk5LFxyXG4gICAgTUFYOiAzXHJcbn0gYXMgY29uc3Q7XHJcbmV4cG9ydCB0eXBlIFRfRGlyZWN0aW9uID0gVF9NYWtlRW51bVR5cGU8dHlwZW9mIFRfRGlyZWN0aW9uPjtcclxuXHJcbmV4cG9ydCB2YXIgJERpcmVjdGlvbk5hbWUgPSB7XHJcbiAgICAwOiAgJ+WMlycsXHJcbiAgICAxOiAgJ+adsScsXHJcbiAgICAyOiAgJ+WNlycsXHJcbiAgICAzOiAgJ+ilvycsXHJcbiAgICA5OTogJ+isjidcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAvLyDkuIDoiKzjgavkvb/jgYjjgovjg6bjg7zjg4bjgqPjg6rjg4bjgqPjgarlkarmlodcclxuICAgIC8vIOOCquODluOCuOOCp+OCr+ODiOOCkuWIl+aMmeWei+OBqOOBl+OBpuWei+WMluOBmeOCi+OBruOBq+WIqeeUqFxyXG4gICAgaW1wb3J0IHtUX01ha2VFbnVtVHlwZX0gZnJvbSBcIi4uL2RfdXRsL1RfTWFrZUVudW1UeXBlXCI7XHJcblxyXG4gICAgLy8g44OA44Oz44K444On44Oz44Oe44OD44OX44Gu44K744Or44Gu56iu6aGe44KS6KGo44GZ5YiX5oyZ5Z6LXHJcbiAgICAvLyBOb0RlZjog5pyq5a6a576p44O75LiN5piOXHJcbiAgICAvLyBGbG9vcjog5bqKXHJcbiAgICAvLyBVbmV4cDog5pyq6LiP5ZywXHJcbiAgICAvLyBTdG9uZTog55+z5aOBXHJcbiAgICAvLyBTdHJVcDog5LiK44KK6ZqO5q61XHJcbiAgICAvLyBTdHJEbjog5LiL44KK6ZqO5q61XHJcbiAgICAvLyBFbXB0eTog5Yid5pyf54q25oWL44O75L2V44KC44Gq44GXXHJcbiAgICAvLyBcclxuICAgIC8vIGZ1bmN0aW9uIHRvX2ludChNektpbmQpOiAgICAgIGludCAgICAgICAg5YiX5oyZ5Z6L44Gr5a++5b+c44GZ44KL5YCkKOaVtOaVsOWApCnjgpLov5TjgZlcclxuICAgIC8vIGZ1bmN0aW9uIGZyb21faW50KGludCk6ICAgICAgIFRfTXpLaW5kICAgICDmlbTmlbDlgKTjgavlr77lv5zjgZnjgovliJfmjJnlnovjgpLov5TjgZko44Kv44Op44K544Oh44K944OD44OJKVxyXG4gICAgLy8gZnVuY3Rpb24gdG9fbGV0dGVyKE16S2luZCk6ICAgc3RyaW5nICAgICDliJfmjJnlnovjgavlr77lv5zjgZnjgovmloflrZfjgpLov5TjgZko44OA44Oz44K444On44Oz44GuMkTooajnpLrnlKgpXHJcbiAgICAvLyBmdW5jdGlvbiBmcm9tX2xldHRlcihzdHJpbmcpOiBUX016S2luZCAgICAg5paH5a2X44Gr5a++5b+c44GZ44KL5YiX5oyZ5Z6L44KS6L+U44GZKOOCr+ODqeOCueODoeOCveODg+ODiSlcclxuXHJcbiAgICBleHBvcnQgY29uc3QgVF9NektpbmQ6e1trZXk6IHN0cmluZ106IG51bWJlcn0gID0ge1xyXG4gICAgICAgIE5vRGVmOiAgIDAsXHJcbiAgICAgICAgRmxvb3I6ICAgMSxcclxuICAgICAgICBVbmV4cDogICAyLFxyXG4gICAgICAgIFN0b25lOiAgIDMsXHJcbiAgICAgICAgVW5rd246ICAgNCxcclxuICAgICAgICBTdHJVcDogICA1LFxyXG4gICAgICAgIFN0ckRuOiAgIDYsXHJcbiAgICAgICAgU3RyVUQ6ICAgNyxcclxuICAgICAgICBFbXB0eTogMjU1LFxyXG4gICAgfSBhcyBjb25zdDtcclxuICAgIGV4cG9ydCB0eXBlIFRfTXpLaW5kICAgPSBUX01ha2VFbnVtVHlwZTx0eXBlb2YgVF9NektpbmQ+O1xyXG5cclxuICAgIGV4cG9ydCBjb25zdCBUX1J2TXpLaW5kOntba2V5OiBudW1iZXJdOiBUX016S2luZH0gID0ge1xyXG4gICAgICAgIDA6ICAgVF9NektpbmQuTm9EZWYsXHJcbiAgICAgICAgMTogICBUX016S2luZC5GbG9vcixcclxuICAgICAgICAyOiAgIFRfTXpLaW5kLlVuZXhwLFxyXG4gICAgICAgIDM6ICAgVF9NektpbmQuU3RvbmUsXHJcbiAgICAgICAgNDogICBUX016S2luZC5Vbmt3bixcclxuICAgICAgICA1OiAgIFRfTXpLaW5kLlN0clVwLFxyXG4gICAgICAgIDY6ICAgVF9NektpbmQuU3RyRG4sXHJcbiAgICAgICAgNzogICBUX016S2luZC5TdHJVRCxcclxuICAgICAgICAyNTU6IFRfTXpLaW5kLkVtcHR5LFxyXG4gICAgfSBhcyBjb25zdDtcclxuICAgIGV4cG9ydCB0eXBlIFRfUnZNektpbmQgPSBUX01ha2VFbnVtVHlwZTx0eXBlb2YgVF9Sdk16S2luZD47XHJcblxyXG4iLCIvLyDliKnnlKjjgq/jg6njgrnnrYnjga7oqq3jgb/ovrzjgb9cclxuaW1wb3J0IG15c3FsIGZyb20gJ215c3FsMi9wcm9taXNlJztcclxuaW1wb3J0IHsgQ19Ec3BNZXNzYWdlIH0gICAgICAgIGZyb20gJy4uL2RfdXRsL0NfRHNwTWVzc2FnZSc7IC8vIOeUu+mdouODoeODg+OCu+ODvOOCuOOBruihqOekuueUqOOCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX0d1aWxkLCBKU09OX0d1aWxkIH0gZnJvbSBcIi4uL2RfbWRsL0NfR3VpbGRcIjtcclxuaW1wb3J0IHsgQ19IZXJvUkRCIH0gICAgICAgICAgIGZyb20gJy4vQ19IZXJvUkRCJztcclxuXHJcbnR5cGUgZGJfY29ubmVjdCA9IG15c3FsLlBvb2xDb25uZWN0aW9uO1xyXG5pbnRlcmZhY2UgSV90YmxfZ3VsZCBleHRlbmRzIG15c3FsLlJvd0RhdGFQYWNrZXQge1xyXG4gICAgaWQ6ICAgICAgbnVtYmVyLFxyXG4gICAgc2F2ZV9pZDogbnVtYmVyLFxyXG4gICAgdW5pcV9pZDogc3RyaW5nLFxyXG4gICAgbmFtZTogICAgc3RyaW5nLFxyXG4gICAgZ29sZDogICAgbnVtYmVyLFxyXG4vLyAgICBnb29kczogICBzdHJpbmcsXHJcbn1cclxuaW50ZXJmYWNlIElfbGFzdEluc2VydCBleHRlbmRzIG15c3FsLlJvd0RhdGFQYWNrZXQge1xyXG4gICAgaWQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfR3VpbGRSREIge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldF9mcm9tX3JkYl9hbGwoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyKTogUHJvbWlzZTxDX0d1aWxkW10+IHtcclxuICAgICAgICBjb25zdCBndWxkX2FycmF5ID0gYXdhaXQgQ19HdWlsZFJEQi5nZXRfZnJvbV90YmxfYWxsKGRiX21haSwgbWVzLCBzYXZlX2lkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZ3VsZCBvZiBndWxkX2FycmF5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhyZXNfYXJyYXkgPSAgYXdhaXQgQ19IZXJvUkRCLmdldF9mcm9tX3JkYl9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIGd1bGQudWlkKCkpO1xyXG4gICAgICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChjb25zdCBoZXJvIG9mIGhyZXNfYXJyYXkpIGd1bGQuYWRkX2hlcm8oaGVybyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZ3VsZF9hcnJheTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzZXRfdG9fcmRiKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlciwgZ3VsZDogQ19HdWlsZCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IGd1bGRfaWQgPSBhd2FpdCBDX0d1aWxkUkRCLmFkZF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIGd1bGQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGhlcm8gb2YgZ3VsZC5ocmVzKCkpIHtcclxuICAgICAgICAgICAgYXdhaXQgQ19IZXJvUkRCLnNldF90b19yZGIoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIGd1bGQudWlkKCksIGhlcm8pO1xyXG4gICAgICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IFxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGRlbF90b19yZGIoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyLCBndWxkX3VpZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgYXdhaXQgQ19IZXJvUkRCLmRlbF90b19yZGIoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIGd1bGRfdWlkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgQ19HdWlsZFJEQi5kZWxfdGJsKGRiX21haSwgbWVzLCBzYXZlX2lkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBEQuWHpueQhuOAgnNhdmVfaWTjgafmjIflrprjgZXjgozjgZ9ndWxk44Os44Kz44O844OJ44K744OD44OI44KS6Kqt44G/6L6844G/XHJcbiAgICAvLyBHdWlsZOOCr+ODqeOCueOBrumFjeWIl+OBq+OCu+ODg+ODiOOBmeOCi1xyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGdldF9mcm9tX3RibF9hbGwoXHJcbiAgICAgICAgZGJfbWFpOiAgZGJfY29ubmVjdCwgXHJcbiAgICAgICAgbWVzOiAgICAgQ19Ec3BNZXNzYWdlLCBcclxuICAgICAgICBzYXZlX2lkOiBudW1iZXIsXHJcbiAgICApOiBQcm9taXNlPENfR3VpbGRbXT4ge1xyXG4gICAgICAgIGNvbnN0IGdldF9ndWxkX1NRTCA9IGBcclxuICAgICAgICAgICAgU0VMRUNUIFx0aWQsIHNhdmVfaWQsIHVuaXFfaWQsIG5hbWUsIGdvbGRcclxuICAgICAgICAgICAgRlJPTSAgICB0YmxfZ3VsZFxyXG4gICAgICAgICAgICBXSEVSRSAgIHNhdmVfaWQgPSA6c2F2ZV9pZFxyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVzdWx0UmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haS5xdWVyeTxJX3RibF9ndWxkW10+KGdldF9ndWxkX1NRTCwge3NhdmVfaWQ6IHNhdmVfaWR9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDY3OiAke2dldF9ndWxkX1NRTH1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKHJlc3VsdFJlY29yZFNldC5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZ3VsZF9hcnJheSA9IFtdIGFzIENfR3VpbGRbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHJyIG9mIHJlc3VsdFJlY29yZFNldCkge1xyXG4gICAgICAgICAgICBndWxkX2FycmF5LnB1c2gobmV3IENfR3VpbGQoQ19HdWlsZFJEQi5mcm9tX3N0cmluZ0FycmF5X3RvX0pTT04ocnIpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBndWxkX2FycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERC5Yem55CG44CCZ3VsZOODhuODvOODluODq+OBq+iHqui6q+OBruODh+ODvOOCv+OCkui/veWKoChpbnNlcnQp44GX44GmXHJcbiAgICAvLyDjgZ3jga5JRChpZCnjgpLov5TjgZlcclxuICAgIC8vIFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBhZGRfdGJsKFxyXG4gICAgICAgIGRiX21haTogIGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgIG1lczogICAgIENfRHNwTWVzc2FnZSwgXHJcbiAgICAgICAgc2F2ZV9pZDogbnVtYmVyLFxyXG4gICAgICAgIGd1bGQ6ICAgIENfR3VpbGRcclxuICAgICk6IFByb21pc2U8bnVtYmVyPiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGluc2VydF9ndWxkX1NRTCA9YFxyXG4gICAgICAgICAgICBJTlNFUlQgSU5UTyB0YmxfZ3VsZCAoIHNhdmVfaWQsICB1bmlxX2lkLCAgbmFtZSwgIGdvbGQgKVxyXG4gICAgICAgICAgICBWQUxVRVMgICAgICAgICAgICAgICggOnNhdmVfaWQsIDp1bmlxX2lkLCA6bmFtZSwgOmdvbGQgKVxyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBqID0gZ3VsZC5lbmNvZGUoKTtcclxuICAgICAgICBhd2FpdCBkYl9tYWkucXVlcnkoaW5zZXJ0X2d1bGRfU1FMLCB7XHJcbiAgICAgICAgICAgIHNhdmVfaWQ6ICBzYXZlX2lkLCAgXHJcbiAgICAgICAgICAgIHVuaXFfaWQ6ICBqLnVuaXFfaWQsICBcclxuICAgICAgICAgICAgbmFtZTogICAgIGoubmFtZSxcclxuICAgICAgICAgICAgZ29sZDogICAgIGouZ29sZCxcclxuLy8gICAgICAgICAgICBnb29kczogICAgSlNPTi5zdHJpbmdpZnkoai5nb29kcyksXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCA2MTogJHtpbnNlcnRfZ3VsZF9TUUx9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gQ19HdWlsZFJEQi5sYXN0SW5zZXJ0KGRiX21haSwgbWVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YmxfdGVhbeOBp+acgOW+jOOBq+i/veWKoOOBl+OBn+ihjOeVquWPtyhzYXZlX2lkKeOCkui/lOOBmeOAkDHooYzmjL/lhaXlsILnlKjjgJFcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgbGFzdEluc2VydChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlKSA6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgY29uc3QgbGFzdEluc2VydF9TUUwgPWBcclxuICAgICAgICAgICAgU0VMRUNUIExBU1RfSU5TRVJUX0lEKCkgYXMgaWQgRlJPTSB0YmxfZ3VsZDtcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3JlY29yZFNldF0gPSBhd2FpdCBkYl9tYWkucXVlcnk8SV9sYXN0SW5zZXJ0W10+KGxhc3RJbnNlcnRfU1FMKVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgNTAwOiAke2xhc3RJbnNlcnRfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChyZWNvcmRTZXQubGVuZ3RoIDwgMSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiByZWNvcmRTZXRbMF0uaWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBp+aMh+WumuOBleOCjOOBn+ODrOOCs+ODvOODiSjopIfmlbAp44KS5YmK6ZmkKGRlbGV0ZSnjgZnjgotcclxuICAgIC8vIFxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdGJsKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZV9ndWxkX1NRTCA9IGBcclxuICAgICAgICAgICAgREVMRVRFIEZST00gdGJsX2d1bGQgXHJcbiAgICAgICAgICAgIFdIRVJFICBzYXZlX2lkID0gOnNhdmVfaWRcclxuICAgICAgICBgXHJcbiAgICAgICAgYXdhaXQgZGJfbWFpLnF1ZXJ5KGRlbGV0ZV9ndWxkX1NRTCx7c2F2ZV9pZDogc2F2ZV9pZH0pXHJcbiAgICAgICAgLmNhdGNoICgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCA2ODogJHtkZWxldGVfZ3VsZF9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdBcnJheV90b19KU09OKGo6IElfdGJsX2d1bGQpOiBKU09OX0d1aWxkIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogICAgICBqLmlkLFxyXG4gICAgICAgICAgICBzYXZlX2lkOiBqLnNhdmVfaWQsXHJcbiAgICAgICAgICAgIHVuaXFfaWQ6IGoudW5pcV9pZCxcclxuICAgICAgICAgICAgbmFtZTogICAgai5uYW1lLFxyXG4gICAgICAgICAgICBnb2xkOiAgICBqLmdvbGQsXHJcbi8vICAgICAgICAgICAgZ29vZHM6ICAgSlNPTi5wYXJzZShqLmdvb2RzKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xyXG5pbXBvcnQgeyBDX0RzcE1lc3NhZ2UgfSAgZnJvbSAnLi4vZF91dGwvQ19Ec3BNZXNzYWdlJzsgLy8g55S76Z2i44Oh44OD44K744O844K444Gu6KGo56S655So44Kv44Op44K5XHJcbmltcG9ydCB7IENfSGVybywgSlNPTl9IZXJvIH0gIGZyb20gJy4uL2RfbWRsL0NfSGVybyc7IFxyXG5cclxudHlwZSBkYl9jb25uZWN0ID0gbXlzcWwuUG9vbENvbm5lY3Rpb247XHJcblxyXG5pbnRlcmZhY2UgSV90YmxfaGVybyBleHRlbmRzIG15c3FsLlJvd0RhdGFQYWNrZXQge1xyXG4gICAgaWQ6ICAgICAgICBudW1iZXI7XHJcbiAgICBzYXZlX2lkOiAgIG51bWJlcjtcclxuICAgIHVuaXFfaWQ6ICAgc3RyaW5nO1xyXG4gICAgam9pbl91aWQ6ICBzdHJpbmc7IFxyXG4gICAgbmFtZTogICAgICBzdHJpbmc7XHJcbiAgICBzZXg6ICAgICAgIG51bWJlcjtcclxuICAgIGFnZTogICAgICAgbnVtYmVyO1xyXG4gICAgZ29sZDogICAgICBudW1iZXI7XHJcbi8vICAgIGdvb2RzOiAgICAgc3RyaW5nO1xyXG4gICAgc3RhdGU6ICAgICBudW1iZXI7XHJcbiAgICBsdjogICAgICAgIG51bWJlcjtcclxuICAgIHNrcF90dGw6ICAgc3RyaW5nO1xyXG4gICAgc2twX25vdzogICBzdHJpbmc7XHJcbiAgICBleHBfdHRsOiAgIHN0cmluZztcclxuICAgIGV4cF9ub3c6ICAgc3RyaW5nO1xyXG4gICAgbnhlOiAgICAgICBzdHJpbmc7XHJcbiAgICBhYmlfcF9ic2M6IHN0cmluZztcclxuICAgIGFiaV9tX2JzYzogc3RyaW5nO1xyXG4gICAgYWJpX3BfdHRsOiBzdHJpbmc7XHJcbiAgICBhYmlfbV90dGw6IHN0cmluZztcclxuICAgIGFiaV9wX25vdzogc3RyaW5nO1xyXG4gICAgYWJpX21fbm93OiBzdHJpbmc7XHJcbi8vICAgIGlzX2FsaXZlOiAgbnVtYmVyO1xyXG59XHJcbmludGVyZmFjZSBJX2xhc3RJbnNlcnQgZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX0hlcm9SREIge1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9IZXJvKSB7fVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fcmRiX2FsbChcclxuICAgICAgICBkYl9tYWk6ICAgZGJfY29ubmVjdCwgXHJcbiAgICAgICAgbWVzOiAgICAgIENfRHNwTWVzc2FnZSwgXHJcbiAgICAgICAgc2F2ZV9pZDogIG51bWJlcixcclxuICAgICAgICBqb2luX3VpZDogc3RyaW5nXHJcbiAgICApOiBQcm9taXNlPENfSGVyb1tdPlxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGhyZXNfYXJyYXkgPSBhd2FpdCBDX0hlcm9SREIuZ2V0X2Zyb21fdGJsX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCwgam9pbl91aWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaHJlc19hcnJheTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzZXRfdG9fcmRiKFxyXG4gICAgICAgIGRiX21haTogICBkYl9jb25uZWN0LCBcclxuICAgICAgICBtZXM6ICAgICAgQ19Ec3BNZXNzYWdlLCBcclxuICAgICAgICBzYXZlX2lkOiAgbnVtYmVyLFxyXG4gICAgICAgIGpvaW5fdWlkOiBzdHJpbmcsXHJcbiAgICAgICAgaGVybzogICAgIENfSGVybyxcclxuICAgICk6IFByb21pc2U8Ym9vbGVhbj4gXHJcbiAgICB7IFxyXG4gICAgICAgIGNvbnN0IGhlcm9faWQgPSBhd2FpdCBDX0hlcm9SREIuYWRkX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCwgam9pbl91aWQsIGhlcm8pO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdG9fcmRiX2FsbChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCByc2x0ID0gYXdhaXQgQ19IZXJvUkRCLmRlbF90YmxfYWxsKGRiX21haSwgbWVzLCBzYXZlX2lkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdG9fcmRiKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlciwgam9pbl91aWQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IHJzbHQgPSBhd2FpdCBDX0hlcm9SREIuZGVsX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCwgam9pbl91aWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICAvLyBEQuWHpueQhuOAgmlk44Gn5oyH5a6a44GV44KM44GfaGVyb+ODrOOCs+ODvOODieOCu+ODg+ODiCjljZjmlbAp44KS6Kqt44G/6L6844G/XHJcbiAgICAvLyBIZXJv44Kv44Op44K544Gu6YWN5YiX44Gr44K744OD44OI44GZ44KLXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fdGJsKFxyXG4gICAgICAgIGRiX21haTogZGJfY29ubmVjdCwgXHJcbiAgICAgICAgbWVzOiAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgIGlkOiAgICAgbnVtYmVyLFxyXG4gICAgKTogUHJvbWlzZTxDX0hlcm98dW5kZWZpbmVkPiB7XHJcbiAgICAgICAgY29uc3QgZ2V0X2hlcm9lc19TUUwgPSBgXHJcbiAgICAgICAgICAgIFNFTEVDVCBcdGlkLCBzYXZlX2lkLCB1bmlxX2lkLCBqb2luX3VpZCwgXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSwgc2V4LCBhZ2UsIGdvbGQsIHN0YXRlLCBsdiwgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNrcF90dGwsIHNrcF9ub3csIGV4cF90dGwsIGV4cF9ub3csIG54ZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgYWJpX3BfYnNjLCBhYmlfbV9ic2MsIFxyXG4gICAgICAgICAgICAgICAgICAgIGFiaV9wX3R0bCwgYWJpX21fdHRsLCBcclxuICAgICAgICAgICAgICAgICAgICBhYmlfcF9ub3csIGFiaV9tX25vdyBcclxuICAgICAgICAgICAgRlJPTSAgICB0YmxfaGVyb1xyXG4gICAgICAgICAgICBXSEVSRSAgIGlkID0gOmlkXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZXN1bHRSZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpPy5xdWVyeTxJX3RibF9oZXJvW10+KGdldF9oZXJvZXNfU1FMLCB7aWQ6ICBpZH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMzdhOiAke2dldF9oZXJvZXNfU1FMfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHRSZWNvcmRTZXQubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKFwi44OH44O844K/44GM5pyJ44KK44G+44Gb44KTIDM5YTogeyRnZXRfaGVyb2VzX1NRTH1cIik7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQ19IZXJvKCkuZGVjb2RlKENfSGVyb1JEQi5mcm9tX3N0cmluZ0FycmF5X3RvX0pTT04ocmVzdWx0UmVjb3JkU2V0WzBdKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBqGpvaW5fdWlk44Gn5oyH5a6a44GV44KM44GfaGVyb+ODrOOCs+ODvOODieOCu+ODg+ODiCjopIfmlbAp44KS6Kqt44G/6L6844G/XHJcbiAgICAvLyBIZXJv44Kv44Op44K544Gu6YWN5YiX44Gr44K744OD44OI44GZ44KLXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fdGJsX2FsbChcclxuICAgICAgICBkYl9tYWk6ICAgZGJfY29ubmVjdCwgXHJcbiAgICAgICAgbWVzOiAgICAgIENfRHNwTWVzc2FnZSwgXHJcbiAgICAgICAgc2F2ZV9pZDogIG51bWJlcixcclxuICAgICAgICBqb2luX3VpZDogc3RyaW5nLFxyXG4gICAgKTogUHJvbWlzZTxDX0hlcm9bXT4ge1xyXG4gICAgICAgIGNvbnN0IGdldF9oZXJvZXNfU1FMID0gYFxyXG4gICAgICAgICAgICBTRUxFQ1QgXHRpZCwgc2F2ZV9pZCwgdW5pcV9pZCwgam9pbl91aWQsIFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsIHNleCwgYWdlLCBnb2xkLCBzdGF0ZSwgbHYsICBcclxuICAgICAgICAgICAgICAgICAgICBza3BfdHRsLCBza3Bfbm93LCBleHBfdHRsLCBleHBfbm93LCBueGUsIFxyXG4gICAgICAgICAgICAgICAgICAgIGFiaV9wX2JzYywgYWJpX21fYnNjLCBcclxuICAgICAgICAgICAgICAgICAgICBhYmlfcF90dGwsIGFiaV9tX3R0bCwgXHJcbiAgICAgICAgICAgICAgICAgICAgYWJpX3Bfbm93LCBhYmlfbV9ub3cgXHJcbiAgICAgICAgICAgIEZST00gICAgdGJsX2hlcm9cclxuICAgICAgICAgICAgV0hFUkUgICBzYXZlX2lkID0gOnNhdmVfaWQgQU5EIGpvaW5fdWlkID0gOmpvaW5fdWlkXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZXN1bHRSZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpPy5xdWVyeTxJX3RibF9oZXJvW10+KGdldF9oZXJvZXNfU1FMLCB7c2F2ZV9pZDogc2F2ZV9pZCwgam9pbl91aWQ6IGpvaW5fdWlkfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAzN2I6ICR7Z2V0X2hlcm9lc19TUUx9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdFJlY29yZFNldC5sZW5ndGggPCAxKSB7XHJcbi8vICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShcIuODh+ODvOOCv+OBjOacieOCiuOBvuOBm+OCkyAzOWI6IHskZ2V0X2hlcm9lc19TUUx9XCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBocmVzX2FycmF5ID0gW10gYXMgQ19IZXJvW107XHJcbiAgICAgICAgZm9yIChjb25zdCByciBvZiByZXN1bHRSZWNvcmRTZXQpIHtcclxuICAgICAgICAgICAgaHJlc19hcnJheS5wdXNoKChuZXcgQ19IZXJvKCkpLmRlY29kZShDX0hlcm9SREIuZnJvbV9zdHJpbmdBcnJheV90b19KU09OKHJyKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaHJlc19hcnJheTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJ0ZWFt44OG44O844OW44Or44Gr6Ieq6Lqr44Gu44OH44O844K/44KSMeS7tui/veWKoChpbnNlcnQp44GX44GmXHJcbiAgICAvLyDjgZ3jga5JRChpZCnjgpLov5TjgZlcclxuICAgIC8vIFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBhZGRfdGJsKFxyXG4gICAgICAgIGRiX21haTogICBkYl9jb25uZWN0LCBcclxuICAgICAgICBtZXM6ICAgICAgQ19Ec3BNZXNzYWdlLCBcclxuICAgICAgICBzYXZlX2lkOiAgbnVtYmVyLFxyXG4gICAgICAgIGpvaW5fdWlkOiBzdHJpbmcsXHJcbiAgICAgICAgaGVybzogICAgIENfSGVybyxcclxuICAgICk6IFByb21pc2U8bnVtYmVyPiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGluc2VydF9oZXJvX1NRTCA9IGBcclxuICAgICAgICAgICAgSU5TRVJUIElOVE8gdGJsX2hlcm8gKFxyXG4gICAgICAgICAgICAgICAgc2F2ZV9pZCwgdW5pcV9pZCwgam9pbl91aWQsIFxyXG4gICAgICAgICAgICAgICAgbmFtZSwgc2V4LCBhZ2UsIGdvbGQsIHN0YXRlLCBsdiwgXHJcbiAgICAgICAgICAgICAgICBza3BfdHRsLCBza3Bfbm93LCBleHBfdHRsLCBleHBfbm93LCBueGUsXHJcbiAgICAgICAgICAgICAgICBhYmlfcF9ic2MsIGFiaV9tX2JzYywgXHJcbiAgICAgICAgICAgICAgICBhYmlfcF90dGwsIGFiaV9tX3R0bCwgXHJcbiAgICAgICAgICAgICAgICBhYmlfcF9ub3csIGFiaV9tX25vdyBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBWQUxVRVMgKCBcclxuICAgICAgICAgICAgICAgIDpzYXZlX2lkLCA6dW5pcV9pZCwgOmpvaW5fdWlkLCBcclxuICAgICAgICAgICAgICAgIDpuYW1lLCA6c2V4LCA6YWdlLCA6Z29sZCwgOnN0YXRlLCA6bHYsIFxyXG4gICAgICAgICAgICAgICAgOnNrcF90dGwsIDpza3Bfbm93LCA6ZXhwX3R0bCwgOmV4cF9ub3csIDpueGUsXHJcbiAgICAgICAgICAgICAgICA6YWJpX3BfYnNjLCA6YWJpX21fYnNjLCBcclxuICAgICAgICAgICAgICAgIDphYmlfcF90dGwsIDphYmlfbV90dGwsIFxyXG4gICAgICAgICAgICAgICAgOmFiaV9wX25vdywgOmFiaV9tX25vdyBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBqc29uSGVybyA9IGhlcm8uZW5jb2RlKCk7XHJcbi8vZGVidWdcclxuLypcclxuY29uc29sZS5lcnJvcihcclxuICAgICAnICBzYXZlX2lkPScgICArc2F2ZV9pZCBcclxuICAgICsnLCBqb2luX3VpZD0nICAram9pbl91aWQgXHJcbiAgICArJywgdW5pcV9pZD0nICAgK2pzb25IZXJvLnVuaXFfaWQgXHJcbiAgICArJywgbmFtZT0nICAgICAgK2pzb25IZXJvLm5hbWVcclxuICAgICsnLCBzZXg9JyAgICAgICAranNvbkhlcm8uc2V4XHJcbiAgICArJywgYWdlPScgICAgICAgK2pzb25IZXJvLmFnZVxyXG4gICAgKycsIGdvbGQ9JyAgICAgICtqc29uSGVyby5nb2xkXHJcbiAgICArJywgZ29vZHM9JyAgICAgKyhKU09OLnN0cmluZ2lmeShqc29uSGVybz8uZ29vZHMpPz8nPz8/JylcclxuICAgICsnLCBzdGF0ZT0nICAgICAranNvbkhlcm8uc3RhdGVcclxuICAgICsnLCBsdj0nICAgICAgICAranNvbkhlcm8ubHZcclxuICAgICsnLCBza3BfdHRsPScgICArKGpzb25IZXJvLnZhbD8uc2twPy50dGw/Pyc/Pz8nKVxyXG4gICAgKycsIHNrcF9ub3c9JyAgICsoanNvbkhlcm8udmFsPy5za3A/Lm5vdz8/anNvbkhlcm8udmFsPy5za3A/LnR0bD8/Jz8/PycpXHJcbiAgICArJywgZXhwX3R0bD0nICAgKyhqc29uSGVyby52YWw/LmV4cD8udHRsPz8nPz8/JylcclxuICAgICsnLCBleHBfbm93PScgICArKGpzb25IZXJvLnZhbD8uZXhwPy5ub3c/P2pzb25IZXJvLnZhbD8uZXhwPy50dGw/Pyc/Pz8nKVxyXG4gICAgKycsIG54ZT0nICAgICAgICsoanNvbkhlcm8udmFsPy5ueGU/Py0xKVxyXG4gICAgKycsIGFiaV9wX2JzYz0nICsoSlNPTi5zdHJpbmdpZnkoanNvbkhlcm8uYWJpX3BfYnNjKT8/Jz8/PycpXHJcbiAgICArJywgYWJpX21fYnNjPScgKyhKU09OLnN0cmluZ2lmeShqc29uSGVyby5hYmlfbV9ic2MpPz8nPz8/JylcclxuICAgICsnLCBhYmlfcF90dGw9JyArKEpTT04uc3RyaW5naWZ5KGpzb25IZXJvLmFiaV9wX3R0bCk/Pyc/Pz8nKVxyXG4gICAgKycsIGFiaV9tX3R0bD0nICsoSlNPTi5zdHJpbmdpZnkoanNvbkhlcm8uYWJpX21fdHRsKT8/Jz8/PycpXHJcbiAgICArJywgYWJpX3Bfbm93PScgKyhKU09OLnN0cmluZ2lmeShqc29uSGVyby5hYmlfcF9ub3cpPz8nPz8/JylcclxuICAgICsnLCBhYmlfbV9ub3c9JyArKEpTT04uc3RyaW5naWZ5KGpzb25IZXJvLmFiaV9tX25vdyk/Pyc/Pz8nKVxyXG4pXHJcbiovXHJcbiAgICAgICAgYXdhaXQgZGJfbWFpLnF1ZXJ5KGluc2VydF9oZXJvX1NRTCwge1xyXG4gICAgICAgICAgICAnc2F2ZV9pZCc6ICAgc2F2ZV9pZCwgXHJcbiAgICAgICAgICAgICdqb2luX3VpZCc6ICBqb2luX3VpZCwgXHJcbiAgICAgICAgICAgICd1bmlxX2lkJzogICBqc29uSGVyby51bmlxX2lkLCBcclxuICAgICAgICAgICAgJ25hbWUnOiAgICAgIGpzb25IZXJvLm5hbWUsXHJcbiAgICAgICAgICAgICdzZXgnOiAgICAgICBqc29uSGVyby5zZXgsXHJcbiAgICAgICAgICAgICdhZ2UnOiAgICAgICBqc29uSGVyby5hZ2UsXHJcbiAgICAgICAgICAgICdnb2xkJzogICAgICBqc29uSGVyby5nb2xkLFxyXG4vLyAgICAgICAgICAgICdnb29kcyc6ICAgICBKU09OLnN0cmluZ2lmeShqc29uSGVyby5nb29kcyksXHJcbiAgICAgICAgICAgICdzdGF0ZSc6ICAgICBqc29uSGVyby5zdGF0ZSxcclxuICAgICAgICAgICAgJ2x2JzogICAgICAgIGpzb25IZXJvLmx2LFxyXG4gICAgICAgICAgICAnc2twX3R0bCc6ICAganNvbkhlcm8udmFsPy5za3A/LnR0bD8/JycsXHJcbiAgICAgICAgICAgICdza3Bfbm93JzogICBqc29uSGVyby52YWw/LnNrcD8ubm93Pz9qc29uSGVyby52YWw/LnNrcD8udHRsPz8nJyxcclxuICAgICAgICAgICAgJ2V4cF90dGwnOiAgIGpzb25IZXJvLnZhbD8uZXhwPy50dGw/PycnLFxyXG4gICAgICAgICAgICAnZXhwX25vdyc6ICAganNvbkhlcm8udmFsPy5leHA/Lm5vdz8/anNvbkhlcm8udmFsPy5leHA/LnR0bD8/JycsXHJcbiAgICAgICAgICAgICdueGUnOiAgICAgICBqc29uSGVyby52YWw/Lm54ZT8/LTEsXHJcbiAgICAgICAgICAgICdhYmlfcF9ic2MnOiBKU09OLnN0cmluZ2lmeShqc29uSGVyby5hYmlfcF9ic2MpPz8nJyxcclxuICAgICAgICAgICAgJ2FiaV9tX2JzYyc6IEpTT04uc3RyaW5naWZ5KGpzb25IZXJvLmFiaV9tX2JzYyk/PycnLFxyXG4gICAgICAgICAgICAnYWJpX3BfdHRsJzogSlNPTi5zdHJpbmdpZnkoanNvbkhlcm8uYWJpX3BfdHRsKT8/JycsXHJcbiAgICAgICAgICAgICdhYmlfbV90dGwnOiBKU09OLnN0cmluZ2lmeShqc29uSGVyby5hYmlfbV90dGwpPz8nJyxcclxuICAgICAgICAgICAgJ2FiaV9wX25vdyc6IEpTT04uc3RyaW5naWZ5KGpzb25IZXJvLmFiaV9wX25vdyk/PycnLFxyXG4gICAgICAgICAgICAnYWJpX21fbm93JzogSlNPTi5zdHJpbmdpZnkoanNvbkhlcm8uYWJpX21fbm93KT8/JycsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAzN2I6ICR7aW5zZXJ0X2hlcm9fU1FMfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gQ19IZXJvUkRCLmxhc3RJbnNlcnQoZGJfbWFpLCBtZXMpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgLy8gdGJsX2hlcm/jgafmnIDlvozjgavov73liqDjgZfjgZ/ooYznlarlj7coc2F2ZV9pZCnjgpLov5TjgZnjgJAx6KGM5oy/5YWl5bCC55So44CRXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGxhc3RJbnNlcnQoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSkgOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGNvbnN0IGxhc3RJbnNlcnRfU1FMID1gXHJcbiAgICAgICAgICAgIFNFTEVDVCBMQVNUX0lOU0VSVF9JRCgpIGFzIGlkIEZST00gdGJsX2hlcm87XHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpLnF1ZXJ5PElfbGFzdEluc2VydFtdPihsYXN0SW5zZXJ0X1NRTClcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDUwMDogJHtsYXN0SW5zZXJ0X1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAocmVjb3JkU2V0Lmxlbmd0aCA8IDEpIHJldHVybiAtMTtcclxuICAgICAgICByZXR1cm4gcmVjb3JkU2V0WzBdLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERC5Yem55CGKOOCr+ODqeOCueODu+ODoeOCveODg+ODiSnjgIJIZXJv44Kv44Op44K544Gu6YWN5YiX44KS5Y+X44GR5Y+W44Gj44Gm44CBXHJcbiAgICAvLyDmjIflrprjgZXjgozjgZ9zYXZlX2lk44Gn44CAaGVyb+ODhuODvOODluODq+OBq+i/veWKoChpbnNlcnQp44GX44GmXHJcbiAgICAvLyDjgZ3jga5JRChpZCnjga7phY3liJfjgpLov5TjgZlcclxuICAgIC8vIFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBhZGRfdGJsX2FsbChcclxuICAgICAgICBkYl9tYWk6ICAgICBkYl9jb25uZWN0LCBcclxuICAgICAgICBtZXM6ICAgICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgIHNhdmVfaWQ6ICAgIG51bWJlcixcclxuICAgICAgICBqb2luX3VpZDogICBzdHJpbmcsXHJcbiAgICAgICAgaGVyb19hcnJheSA6Q19IZXJvW10sIFxyXG4gICAgKTogUHJvbWlzZTxudW1iZXJbXT4gXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaGVyb19pZF9zZXQgPSBbXSBhcyBudW1iZXJbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGhlcm8gb2YgaGVyb19hcnJheSkge1xyXG4gICAgICAgICAgICBjb25zdCBoZXJvX2lkID0gYXdhaXQgQ19IZXJvUkRCLmFkZF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIGpvaW5fdWlkLCBoZXJvKTtcclxuICAgICAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICBoZXJvX2lkX3NldC5wdXNoKGhlcm9faWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGVyb19pZF9zZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvLyBEQuWHpueQhuOAgnNhdmVfaWTjgafmjIflrprjgZXjgozjgZ/jg6zjgrPjg7zjg4ko6KSH5pWwKeOCkuWJiumZpChkZWxldGUp44GZ44KLXHJcbiAgICAvLyBcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RibF9hbGwoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlX2hlcm9fU1FMID0gYFxyXG4gICAgICAgICAgICBERUxFVEUgRlJPTSB0YmxfaGVybyBcclxuICAgICAgICAgICAgV0hFUkUgIHNhdmVfaWQgPSA6c2F2ZV9pZCBcclxuICAgICAgICBgXHJcbiAgICAgICAgYXdhaXQgZGJfbWFpLnF1ZXJ5KGRlbGV0ZV9oZXJvX1NRTCx7c2F2ZV9pZDogc2F2ZV9pZH0pXHJcbiAgICAgICAgLmNhdGNoICgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAxNzogJHtkZWxldGVfaGVyb19TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZlX2lk44Goam9pbl91aWTjgafmjIflrprjgZXjgozjgZ/jg6zjgrPjg7zjg4ko6KSH5pWwKeOCkuWJiumZpChkZWxldGUp44GZ44KLXHJcbiAgICAvLyBcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RibChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIsIGpvaW5fdWlkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCBkZWxldGVfaGVyb19TUUwgPSBgXHJcbiAgICAgICAgICAgIERFTEVURSBGUk9NIHRibF9oZXJvIFxyXG4gICAgICAgICAgICBXSEVSRSAgc2F2ZV9pZCA9IDpzYXZlX2lkIEFORCAgam9pbl91aWQgPSA6am9pbl91aWRcclxuICAgICAgICBgXHJcbiAgICAgICAgYXdhaXQgZGJfbWFpLnF1ZXJ5KGRlbGV0ZV9oZXJvX1NRTCx7c2F2ZV9pZDogc2F2ZV9pZCwgam9pbl91aWQ6IGpvaW5fdWlkfSlcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDE4OiAke2RlbGV0ZV9oZXJvX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdBcnJheV90b19KU09OKGo6IElfdGJsX2hlcm8pOiBKU09OX0hlcm8ge1xyXG4gICAgICAgIGNvbnN0IGFiaV9wID0gSlNPTi5wYXJzZShqLmFiaV9wX2JzYyk7XHJcbiAgICAgICAgY29uc3QgYWJpX20gPSBKU09OLnBhcnNlKGouYWJpX21fYnNjKTtcclxuXHJcbiAgICAgICAgY29uc3QganNvbiAgPSB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgICAgai5pZCxcclxuICAgICAgICAgICAgc2F2ZV9pZDogICBqLnNhdmVfaWQsXHJcbiAgICAgICAgICAgIHVuaXFfaWQ6ICAgai51bmlxX2lkLFxyXG4gICAgICAgICAgICBuYW1lOiAgICAgIGoubmFtZSxcclxuICAgICAgICAgICAgc2V4OiAgICAgICBqLnNleCxcclxuICAgICAgICAgICAgYWdlOiAgICAgICBqLmFnZSxcclxuICAgICAgICAgICAgZ29sZDogICAgICBqLmdvbGQsXHJcbi8vICAgICAgICAgICAgZ29vZHM6ICAgICBKU09OLnBhcnNlKGouZ29vZHMpLFxyXG4gICAgICAgICAgICBzdGF0ZTogICAgIGouc3RhdGUsXHJcbiAgICAgICAgICAgIGx2OiAgICAgICAgai5sdixcclxuICAgICAgICAgICAgdmFsOiB7XHJcbiAgICAgICAgICAgICAgICBza3A6IHtcclxuICAgICAgICAgICAgICAgICAgICB0dGw6ICAgSlNPTi5wYXJzZShqLnNrcF90dGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdzogICBKU09OLnBhcnNlKGouc2twX25vdyksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXhwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHRsOiAgIEpTT04ucGFyc2Uoai5leHBfdHRsKSxcclxuICAgICAgICAgICAgICAgICAgICBub3c6ICAgSlNPTi5wYXJzZShqLmV4cF9ub3cpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG54ZTogICAgICAgSlNPTi5wYXJzZShqLm54ZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFiaV9wX2JzYzogICAgIEpTT04ucGFyc2Uoai5hYmlfcF9ic2MpLFxyXG4gICAgICAgICAgICBhYmlfbV9ic2M6ICAgICBKU09OLnBhcnNlKGouYWJpX21fYnNjKSxcclxuICAgICAgICAgICAgYWJpX3BfdHRsOiAgICAgSlNPTi5wYXJzZShqLmFiaV9wX3R0bCksXHJcbiAgICAgICAgICAgIGFiaV9tX3R0bDogICAgIEpTT04ucGFyc2Uoai5hYmlfbV90dGwpLFxyXG4gICAgICAgICAgICBhYmlfcF9ub3c6ICAgICBKU09OLnBhcnNlKGouYWJpX3Bfbm93KSxcclxuICAgICAgICAgICAgYWJpX21fbm93OiAgICAgSlNPTi5wYXJzZShqLmFiaV9tX25vdyksXHJcbi8qXHJcbiAgICAgICAgICAgIGFiaV9wOiB7XHJcbiAgICAgICAgICAgICAgICBic2M6IGFiaV9wLFxyXG4gICAgICAgICAgICAgICAgdHRsOiBhYmlfcCxcclxuICAgICAgICAgICAgICAgIG5vdzogYWJpX3AsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFiaV9tOiB7XHJcbiAgICAgICAgICAgICAgICBic2M6IGFiaV9tLFxyXG4gICAgICAgICAgICAgICAgdHRsOiBhYmlfbSxcclxuICAgICAgICAgICAgICAgIG5vdzogYWJpX20sXHJcbiAgICAgICAgICAgIH0sXHJcbiAqL1xyXG4vLyAgICAgICAgICAgIGlzX2FsaXZlOiAgai5pc19hbGl2ZSAhPT0gMCA/IFwiWVwiIDogXCJOXCIsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIOWIqeeUqOOCr+ODqeOCueetieOBruiqreOBv+i+vOOBv1xyXG5pbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xyXG5pbXBvcnQgeyBDX0RzcE1lc3NhZ2UgfSAgICAgIGZyb20gJy4uL2RfdXRsL0NfRHNwTWVzc2FnZSc7IC8vIOeUu+mdouODoeODg+OCu+ODvOOCuOOBruihqOekuueUqOOCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX01hemUsIEpTT05fTWF6ZSB9IGZyb20gXCIuLi9kX21kbC9DX01hemVcIjtcclxuXHJcbnR5cGUgZGJfY29ubmVjdCA9IG15c3FsLlBvb2xDb25uZWN0aW9uO1xyXG5cclxuaW50ZXJmYWNlIElfdGJsX21hemUgZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0IHtcclxuICAgIGlkOiAgICAgIG51bWJlcixcclxuICAgIHNhdmVfaWQ6IG51bWJlcixcclxuICAgIHVuaXFfaWQ6IHN0cmluZyxcclxuICAgIG5hbWU6ICAgIHN0cmluZywgXHJcbiAgICBzaXplX3g6ICBudW1iZXIsXHJcbiAgICBzaXplX3k6ICBudW1iZXIsXHJcbiAgICBzaXplX3o6ICBudW1iZXIsXHJcbiAgICBtYXBzOiAgICBzdHJpbmcsXHJcbiAgICBtYXNrOiAgICBzdHJpbmcsXHJcbn1cclxuaW50ZXJmYWNlIElfbGFzdEluc2VydCBleHRlbmRzIG15c3FsLlJvd0RhdGFQYWNrZXQge1xyXG4gICAgaWQ6IG51bWJlcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDX01hemVSREIge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge31cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRfZnJvbV9yZGJfYWxsKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlcik6IFByb21pc2U8Q19NYXplW10+IHtcclxuICAgICAgICBjb25zdCBtYXplX2FycmF5ID0gYXdhaXQgQ19NYXplUkRCLmdldF9mcm9tX3RibF9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF6ZV9hcnJheTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzZXRfdG9fcmRiKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlciwgbWF6ZTogQ19NYXplKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgbWFzZV9pZCA9IGF3YWl0IENfTWF6ZVJEQi5hZGRfdGJsKGRiX21haSwgbWVzLCBzYXZlX2lkLCBtYXplKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGRlbF90b19yZGIoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgQ19NYXplUkRCLmRlbF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBp+aMh+WumuOBleOCjOOBn21hemXjg6zjgrPjg7zjg4njgrvjg4Pjg4jjgpLoqq3jgb/ovrzjgb9cclxuICAgIC8vIE1hemXjgq/jg6njgrnjga7phY3liJfjgavjgrvjg4Pjg4jjgZnjgotcclxuICAgIC8vIFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBnZXRfZnJvbV90YmxfYWxsKFxyXG4gICAgICAgICAgICBkYl9tYWk6IGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgICAgICBtZXM6IENfRHNwTWVzc2FnZSwgXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6IG51bWJlclxyXG4gICAgKTogUHJvbWlzZTxDX01hemVbXT4ge1xyXG4gICAgICAgIGNvbnN0IGdldF9tYXplX1NRTCA9IGBcclxuICAgICAgICAgICAgU0VMRUNUIFx0aWQsIHNhdmVfaWQsIHVuaXFfaWQsIG5hbWUsIFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemVfeCwgc2l6ZV95LCBzaXplX3osIG1hcHMsIG1hc2sgXHJcbiAgICAgICAgICAgIEZST00gdGJsX21hemVcclxuICAgICAgICAgICAgV0hFUkUgICBzYXZlX2lkID0gOnNhdmVfaWRcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3Jlc3VsdFJlY29yZFNldF0gPSBhd2FpdCBkYl9tYWkucXVlcnk8SV90YmxfbWF6ZVtdPihnZXRfbWF6ZV9TUUwsIHtzYXZlX2lkOiBzYXZlX2lkfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAzMzogJHtnZXRfbWF6ZV9TUUx9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGlmIChyZXN1bHRSZWNvcmRTZXQubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1hemVfYXJyYXkgPSBbXSBhcyBDX01hemVbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHJyIG9mIHJlc3VsdFJlY29yZFNldCkge1xyXG4gICAgICAgICAgICBtYXplX2FycmF5LnB1c2gobmV3IENfTWF6ZShDX01hemVSREIuZnJvbV9zdHJpbmdBcnJheV90b19KU09OKHJyKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF6ZV9hcnJheTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC8vIERC5Yem55CG44CCbWF6ZeODhuODvOODluODq+OBq+iHqui6q+OBruODh+ODvOOCv+OCkui/veWKoChpbnNlcnQp44GX44GmXHJcbiAgICAvLyDjgZ3jga5JRChtYXplX2lkKeOCkui/lOOBmVxyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGFkZF90YmwoXHJcbiAgICAgICAgICAgIGRiX21haTogIGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgICAgICBtZXM6ICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgICAgICBzYXZlX2lkOiBudW1iZXIsXHJcbiAgICAgICAgICAgIG1hemU6ICAgIENfTWF6ZVxyXG4gICAgICAgICk6IFByb21pc2U8bnVtYmVyPiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGluc2VydF9tYXplX1NRTCA9IGBcclxuICAgICAgICAgICAgSU5TRVJUIElOVE8gdGJsX21hemUgKFxyXG4gICAgICAgICAgICAgICAgc2F2ZV9pZCwgdW5pcV9pZCwgbmFtZSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3gsIHNpemVfeSwgc2l6ZV96LCBtYXBzLCBtYXNrXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgVkFMVUVTIChcclxuICAgICAgICAgICAgICAgIDpzYXZlX2lkLCA6dW5pcV9pZCwgOm5hbWUsIFxyXG4gICAgICAgICAgICAgICAgOnNpemVfeCwgOnNpemVfeSwgOnNpemVfeiwgOm1hcHMsIDptYXNrIFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IGogPSBtYXplLmVuY29kZSgpO1xyXG4vL0RlYnVnXHJcbi8qXHJcbmNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICBcInNhdmVfaWQ9XCIgKyBzYXZlX2lkXHJcbiAgICArXCIsIHVuaXFfaWQ9XCIgKyBqLnVuaXFfaWRcclxuICAgICtcIiwgbmFtZT1cIiAgICArIGoubmFtZVxyXG4gICAgK1wiLCBzaXplX3g9XCIgICsgai5zaXplX3hcclxuICAgICtcIiwgc2l6ZV95PVwiICArIGouc2l6ZV95XHJcbiAgICArXCIsIHNpemVfej1cIiAgKyBqLnNpemVfelxyXG4gICAgK1wiLCBtYXBzPVwiICAgICsgai5tYXplXHJcbiAgICArXCIsIG1hc2s9XCIgICAgKyBqLm1hc2tcclxuKVxyXG4qL1xyXG4gICAgICAgIGF3YWl0IGRiX21haS5xdWVyeShpbnNlcnRfbWF6ZV9TUUwsIHtcclxuICAgICAgICAgICAgc2F2ZV9pZDogc2F2ZV9pZCxcclxuICAgICAgICAgICAgdW5pcV9pZDogai51bmlxX2lkLFxyXG4gICAgICAgICAgICBuYW1lOiAgICBqLm5hbWUsXHJcbiAgICAgICAgICAgIHNpemVfeDogIGouc2l6ZV94LFxyXG4gICAgICAgICAgICBzaXplX3k6ICBqLnNpemVfeSxcclxuICAgICAgICAgICAgc2l6ZV96OiAgai5zaXplX3osXHJcbiAgICAgICAgICAgIG1hcHM6ICAgIGoubWF6ZSxcclxuICAgICAgICAgICAgbWFzazogICAgai5tYXNrLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMzogJHtpbnNlcnRfbWF6ZV9TUUx9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gQ19NYXplUkRCLmxhc3RJbnNlcnQoZGJfbWFpLCBtZXMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyB0YmxfdGVhbeOBp+acgOW+jOOBq+i/veWKoOOBl+OBn+ihjOeVquWPtyhzYXZlX2lkKeOCkui/lOOBmeOAkDHooYzmjL/lhaXlsILnlKjjgJFcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgbGFzdEluc2VydChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlKSA6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgY29uc3QgbGFzdEluc2VydF9TUUwgPWBcclxuICAgICAgICAgICAgU0VMRUNUIExBU1RfSU5TRVJUX0lEKCkgYXMgaWQgRlJPTSB0YmxfbWF6ZTtcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3JlY29yZFNldF0gPSBhd2FpdCBkYl9tYWkucXVlcnk8SV9sYXN0SW5zZXJ0W10+KGxhc3RJbnNlcnRfU1FMKVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgNTAwOiAke2xhc3RJbnNlcnRfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChyZWNvcmRTZXQubGVuZ3RoIDwgMSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiByZWNvcmRTZXRbMF0uaWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBp+aMh+WumuOBleOCjOOBn+ODrOOCs+ODvOODiSjopIfmlbAp44KS5YmK6ZmkKGRlbGV0ZSnjgZnjgotcclxuICAgIC8vIFxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdGJsKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZV9tYXplX1NRTCA9IGBcclxuICAgICAgICAgICAgREVMRVRFIEZST00gdGJsX21hemUgXHJcbiAgICAgICAgICAgIFdIRVJFICBzYXZlX2lkID0gOnNhdmVfaWRcclxuICAgICAgICBgXHJcbiAgICAgICAgYXdhaXQgZGJfbWFpLnF1ZXJ5KGRlbGV0ZV9tYXplX1NRTCwge3NhdmVfaWQ6IHNhdmVfaWR9KVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMTI6ICR7ZGVsZXRlX21hemVfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdBcnJheV90b19KU09OKGo6IElfdGJsX21hemUpOiBKU09OX01hemUge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgIGouaWQsXHJcbiAgICAgICAgICAgIHVuaXFfaWQ6IGoudW5pcV9pZCxcclxuICAgICAgICAgICAgc2F2ZV9pZDogai5zYXZlX2lkLFxyXG4gICAgICAgICAgICBuYW1lOiAgICBqLm5hbWUsXHJcbiAgICAgICAgICAgIHNpemVfeDogIGouc2l6ZV94LFxyXG4gICAgICAgICAgICBzaXplX3k6ICBqLnNpemVfeSxcclxuICAgICAgICAgICAgc2l6ZV96OiAgai5zaXplX3osXHJcbiAgICAgICAgICAgIG1hemU6ICAgIGoubWFwcyxcclxuICAgICAgICAgICAgbWFzazogICAgai5tYXNrLFxyXG4vLyAgICAgICAgICAgIG9ianM6ICAgIEpTT04ucGFyc2Uoai5vYmpzKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIOWIqeeUqOOCr+ODqeOCueetieOBruiqreOBv+i+vOOBv1xyXG5pbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xyXG5pbXBvcnQgeyBDX0RzcE1lc3NhZ2UgfSAgICAgIGZyb20gJy4uL2RfdXRsL0NfRHNwTWVzc2FnZSc7IC8vIOeUu+mdouODoeODg+OCu+ODvOOCuOOBruihqOekuueUqOOCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCwgSlNPTl9Nb3ZhYmxlUG9pbnQgfSBmcm9tICcuLi9kX21kbC9DX01vdmFibGVQb2ludCc7XHJcblxyXG50eXBlIGRiX2Nvbm5lY3QgPSBteXNxbC5Qb29sQ29ubmVjdGlvbjtcclxuXHJcbmludGVyZmFjZSBJX3RibF9tdnB0IGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBpZDogICAgICAgICAgbnVtYmVyLFxyXG4gICAgc2F2ZV9pZDogICAgIG51bWJlcixcclxuICAgIHVuaXFfaWQ6ICAgICBzdHJpbmcsXHJcbiAgICBjdXJfdXJsOiAgICAgc3RyaW5nLFxyXG4gICAgdGVhbV91aWQ6ICAgIHN0cmluZyxcclxuICAgIGxvY19raW5kOiAgICBzdHJpbmcsIC8qIFVua246MCwgTWF6ZToxLCBHdWxkOjIgKi9cclxuICAgIGxvY19uYW1lOiAgICBzdHJpbmcsXHJcbiAgICBsb2NfdWlkOiAgICAgc3RyaW5nLFxyXG4gICAgbG9jX3Bvc194OiAgIG51bWJlcixcclxuICAgIGxvY19wb3NfeTogICBudW1iZXIsXHJcbiAgICBsb2NfcG9zX3o6ICAgbnVtYmVyLFxyXG4gICAgbG9jX3Bvc19kOiAgIG51bWJlciwgLyogTjowLCBFOjEsIFM6MiwgVzozIFg6OTkgKi9cclxuICB9XHJcbmludGVyZmFjZSBJX2xhc3RJbnNlcnQgZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ19NdnB0UkRCIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fcmRiX2FsbChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPENfTW92YWJsZVBvaW50W10+IHtcclxuICAgICAgICBjb25zdCBtdnB0X2FycmF5ID0gYXdhaXQgQ19NdnB0UkRCLmdldF9mcm9tX3RibF9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbXZwdF9hcnJheTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzZXRfdG9fcmRiKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlciwgbXZwdDogQ19Nb3ZhYmxlUG9pbnQpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCBtYXNlX2lkID0gYXdhaXQgQ19NdnB0UkRCLmFkZF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIG12cHQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RvX3JkYihkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBDX012cHRSREIuZGVsX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZlX2lk44Gn5oyH5a6a44GV44KM44GfbWF6ZeODrOOCs+ODvOODieOCu+ODg+ODiOOCkuiqreOBv+i+vOOBv1xyXG4gICAgLy8gTWF6ZeOCr+ODqeOCueOBrumFjeWIl+OBq+OCu+ODg+ODiOOBmeOCi1xyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGdldF9mcm9tX3RibF9hbGwoXHJcbiAgICAgICAgICAgIGRiX21haTogZGJfY29ubmVjdCwgXHJcbiAgICAgICAgICAgIG1lczogQ19Ec3BNZXNzYWdlLCBcclxuICAgICAgICAgICAgc2F2ZV9pZDogbnVtYmVyXHJcbiAgICApOiBQcm9taXNlPENfTW92YWJsZVBvaW50W10+IHtcclxuICAgICAgICBjb25zdCBnZXRfbXZwdF9TUUwgPSBgXHJcbiAgICAgICAgICAgIFNFTEVDVCBcdCAgICBpZCwgc2F2ZV9pZCwgdW5pcV9pZCwgY3VyX3VybCwgdGVhbV91aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY19raW5kLCAgbG9jX25hbWUsICBsb2NfdWlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NfcG9zX3gsIGxvY19wb3NfeSwgbG9jX3Bvc196LCBsb2NfcG9zX2RcclxuICAgICAgICAgICAgRlJPTSB0YmxfbXZwdFxyXG4gICAgICAgICAgICBXSEVSRSAgIHNhdmVfaWQgPSA6c2F2ZV9pZFxyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVzdWx0UmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haS5xdWVyeTxJX3RibF9tdnB0W10+KGdldF9tdnB0X1NRTCwge3NhdmVfaWQ6IHNhdmVfaWR9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDMzOiAke2dldF9tdnB0X1NRTH1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKHJlc3VsdFJlY29yZFNldC5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbXZwdF9hcnJheSA9IFtdIGFzIENfTW92YWJsZVBvaW50W107XHJcbiAgICAgICAgZm9yIChjb25zdCByciBvZiByZXN1bHRSZWNvcmRTZXQpIHtcclxuICAgICAgICAgICAgbXZwdF9hcnJheS5wdXNoKG5ldyBDX01vdmFibGVQb2ludChDX012cHRSREIuZnJvbV9zdHJpbmdBcnJheV90b19KU09OKHJyKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbXZwdF9hcnJheTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC8vIERC5Yem55CG44CCbWF6ZeODhuODvOODluODq+OBq+iHqui6q+OBruODh+ODvOOCv+OCkui/veWKoChpbnNlcnQp44GX44GmXHJcbiAgICAvLyDjgZ3jga5JRChtYXplX2lkKeOCkui/lOOBmVxyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGFkZF90YmwoXHJcbiAgICAgICAgICAgIGRiX21haTogIGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgICAgICBtZXM6ICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgICAgICBzYXZlX2lkOiBudW1iZXIsXHJcbiAgICAgICAgICAgIG12cHQ6ICAgIENfTW92YWJsZVBvaW50XHJcbiAgICAgICAgKTogUHJvbWlzZTxudW1iZXI+IHtcclxuXHJcbiAgICAgICAgY29uc3QgaW5zZXJ0X212cHRfU1FMID0gYFxyXG4gICAgICAgICAgICBJTlNFUlQgSU5UTyB0YmxfbXZwdChcclxuICAgICAgICAgICAgICAgIHNhdmVfaWQsICAgIHVuaXFfaWQsICAgIGN1cl91cmwsICAgIHRlYW1fdWlkLFxyXG4gICAgICAgICAgICAgICAgbG9jX2tpbmQsICAgbG9jX25hbWUsICAgbG9jX3VpZCxcclxuICAgICAgICAgICAgICAgIGxvY19wb3NfeCwgIGxvY19wb3NfeSwgIGxvY19wb3NfeiwgIGxvY19wb3NfZFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIFZBTFVFUyAoXHJcbiAgICAgICAgICAgICAgICA6c2F2ZV9pZCwgICA6dW5pcV9pZCwgICA6Y3VyX3VybCwgICA6dGVhbV91aWQsXHJcbiAgICAgICAgICAgICAgICA6bG9jX2tpbmQsICA6bG9jX25hbWUsICA6bG9jX3VpZCxcclxuICAgICAgICAgICAgICAgIDpsb2NfcG9zX3gsIDpsb2NfcG9zX3ksIDpsb2NfcG9zX3osIDpsb2NfcG9zX2QgXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgaiA9IG12cHQuZW5jb2RlKCk7XHJcbi8vRGVidWdcclxuLypcclxuY29uc29sZS5lcnJvcihcclxuICAgICAgICBcInNhdmVfaWQ9XCIgICArICAgIHNhdmVfaWRcclxuICAgICsgXCIsIHVuaXFfaWQ9XCIgICArICAgIGoudW5pcV9pZFxyXG4gICAgKyBcIiwgY3VyX3VybD1cIiAgICsgICAgai5jdXJfdXJsXHJcbiAgICArIFwiLCB0ZWFtX3VpZD1cIiAgKyAgICBqLnRlYW1fdWlkXHJcbiAgICArIFwiLCBsb2Nfa2luZD1cIiAgKyAgICBqLmtpbmRcclxuICAgICsgXCIsIGxvY19uYW1lPVwiICArICAgIGoubmFtZVxyXG4gICAgKyBcIiwgbG9jX3VpZD1cIiAgICsgICAgai5sb2NfdWlkXHJcbiAgICArIFwiLCBsb2NfcG9zX3g9XCIgKyAgIChqLmxvY19wb3M/Lng/PzApXHJcbiAgICArIFwiLCBsb2NfcG9zX3k9XCIgKyAgIChqLmxvY19wb3M/Lnk/PzApXHJcbiAgICArIFwiLCBsb2NfcG9zX3o9XCIgKyAgIChqLmxvY19wb3M/Lno/PzApXHJcbiAgICArIFwiLCBsb2NfcG9zX2Q9XCIgKyAgIChqLmxvY19wb3M/LmQ/PzApXHJcbilcclxuKi9cclxuYXdhaXQgZGJfbWFpLnF1ZXJ5KGluc2VydF9tdnB0X1NRTCwge1xyXG4gICAgICAgICAgICBzYXZlX2lkOiAgICAgc2F2ZV9pZCxcclxuICAgICAgICAgICAgdW5pcV9pZDogICAgIGoudW5pcV9pZCxcclxuICAgICAgICAgICAgY3VyX3VybDogICAgIGouY3VyX3VybCxcclxuICAgICAgICAgICAgdGVhbV91aWQ6ICAgIGoudGVhbV91aWQsXHJcbiAgICAgICAgICAgIGxvY19raW5kOiAgICBqLmtpbmQsXHJcbiAgICAgICAgICAgIGxvY19uYW1lOiAgICBqLm5hbWUsXHJcbiAgICAgICAgICAgIGxvY191aWQ6ICAgICBqLmxvY191aWQsXHJcbiAgICAgICAgICAgIGxvY19wb3NfeDogICBqLmxvY19wb3M/Lng/PzAsXHJcbiAgICAgICAgICAgIGxvY19wb3NfeTogICBqLmxvY19wb3M/Lnk/PzAsXHJcbiAgICAgICAgICAgIGxvY19wb3NfejogICBqLmxvY19wb3M/Lno/PzAsXHJcbiAgICAgICAgICAgIGxvY19wb3NfZDogICBqLmxvY19wb3M/LmQ/Pzk5LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMzogJHtpbnNlcnRfbXZwdF9TUUx9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gQ19NdnB0UkRCLmxhc3RJbnNlcnQoZGJfbWFpLCBtZXMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyB0YmxfdGVhbeOBp+acgOW+jOOBq+i/veWKoOOBl+OBn+ihjOeVquWPtyhzYXZlX2lkKeOCkui/lOOBmeOAkDHooYzmjL/lhaXlsILnlKjjgJFcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgbGFzdEluc2VydChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlKSA6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgY29uc3QgbGFzdEluc2VydF9TUUwgPWBcclxuICAgICAgICAgICAgU0VMRUNUIExBU1RfSU5TRVJUX0lEKCkgYXMgaWQgRlJPTSB0YmxfbXZwdDtcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3JlY29yZFNldF0gPSBhd2FpdCBkYl9tYWkucXVlcnk8SV9sYXN0SW5zZXJ0W10+KGxhc3RJbnNlcnRfU1FMKVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgNTAwOiAke2xhc3RJbnNlcnRfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChyZWNvcmRTZXQubGVuZ3RoIDwgMSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiByZWNvcmRTZXRbMF0uaWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBp+aMh+WumuOBleOCjOOBn+ODrOOCs+ODvOODiSjopIfmlbAp44KS5YmK6ZmkKGRlbGV0ZSnjgZnjgotcclxuICAgIC8vIFxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdGJsKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZV9tdnB0X1NRTCA9IGBcclxuICAgICAgICAgICAgREVMRVRFIEZST00gdGJsX212cHQgXHJcbiAgICAgICAgICAgIFdIRVJFICBzYXZlX2lkID0gOnNhdmVfaWRcclxuICAgICAgICBgXHJcbiAgICAgICAgYXdhaXQgZGJfbWFpLnF1ZXJ5KGRlbGV0ZV9tdnB0X1NRTCwge3NhdmVfaWQ6IHNhdmVfaWR9KVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMTI6ICR7ZGVsZXRlX212cHRfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdBcnJheV90b19KU09OKGo6IElfdGJsX212cHQpOiBKU09OX01vdmFibGVQb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdW5pcV9pZDogICAgIGoudW5pcV9pZCxcclxuICAgICAgICAgICAgY3VyX3VybDogICAgIGouY3VyX3VybCxcclxuICAgICAgICAgICAgdGVhbV91aWQ6ICAgIGoudGVhbV91aWQsXHJcbiAgICAgICAgICAgIGtpbmQ6ICAgICAgICBqLmxvY19raW5kLFxyXG4gICAgICAgICAgICBuYW1lOiAgICAgICAgai5sb2NfbmFtZSxcclxuICAgICAgICAgICAgbG9jX3VpZDogICAgIGoubG9jX3VpZCxcclxuICAgICAgICAgICAgbG9jX3Bvczoge1xyXG4gICAgICAgICAgICAgICAgeDogICAgICAgai5sb2NfcG9zX3g/PzAsXHJcbiAgICAgICAgICAgICAgICB5OiAgICAgICBqLmxvY19wb3NfeT8/MCxcclxuICAgICAgICAgICAgICAgIHo6ICAgICAgIGoubG9jX3Bvc196Pz8wLFxyXG4gICAgICAgICAgICAgICAgZDogICAgICAgai5sb2NfcG9zX2Q/Pzk5LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iLCJcclxuLy8g5Yip55So44Kv44Op44K5562J44Gu6Kqt44G/6L6844G/XHJcbmltcG9ydCAgIG15c3FsICAgICAgICAgICAgZnJvbSBcIm15c3FsMi9wcm9taXNlXCI7XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9ICAgZnJvbSAnLi4vZF91dGwvQ19Ec3BNZXNzYWdlJzsgLy8g55S76Z2i44Oh44OD44K744O844K444Gu6KGo56S655So44Kv44Op44K5XHJcbmltcG9ydCB7IENfU2F2ZURhdGEgfSAgICAgZnJvbSBcIi4uL2RfbWRsL0NfU2F2ZURhdGFcIjtcclxuaW1wb3J0IHsgQ19TYXZlSW5mbyB9ICAgICBmcm9tIFwiLi4vZF9tZGwvQ19TYXZlSW5mb1wiO1xyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCB9IGZyb20gXCIuLi9kX21kbC9DX01vdmFibGVQb2ludFwiO1xyXG5pbXBvcnQgeyBDX1RlYW1SREIgfSAgICAgIGZyb20gXCIuL0NfVGVhbVJEQlwiO1xyXG5pbXBvcnQgeyBDX0hlcm9SREIgfSAgICAgIGZyb20gXCIuL0NfSGVyb1JEQlwiO1xyXG5pbXBvcnQgeyBDX01hemVSREIgfSAgICAgIGZyb20gXCIuL0NfTWF6ZVJEQlwiO1xyXG5pbXBvcnQgeyBDX0d1aWxkUkRCIH0gICAgIGZyb20gXCIuL0NfR3VpbGRSREJcIjtcclxuaW1wb3J0IHsgQ19NdnB0UkRCIH0gICAgICBmcm9tIFwiLi9DX012cHRSREJcIjtcclxuXHJcbnR5cGUgZGJfY29ubmVjdCA9IG15c3FsLlBvb2xDb25uZWN0aW9uO1xyXG5cclxuaW50ZXJmYWNlIElfdGJsX1NhdmVJbmZvIGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBzYXZlX2lkOiAgIG51bWJlcjtcclxuICAgIHBsYXllcl9pZDogbnVtYmVyO1xyXG4gICAgdW5pcV9ubzogICBudW1iZXI7IFxyXG4gICAgdGl0bGU6ICAgICBzdHJpbmc7IFxyXG4gICAgZGV0YWlsOiAgICBzdHJpbmc7IFxyXG4gICAgcG9pbnQ6ICAgICBzdHJpbmc7IFxyXG4gICAgYXV0b19tb2RlOiBzdHJpbmc7IFxyXG4gICAgaXNfYWN0aXZlOiBzdHJpbmc7IFxyXG4gICAgaXNfZGVsZXRlOiBzdHJpbmc7IFxyXG4gICAgbXA6ICAgICAgICBzdHJpbmc7ICAvLyBteXBvc1xyXG4gICAgc2F2ZV90aW1lOiBzdHJpbmc7XHJcbn1cclxuaW50ZXJmYWNlIElfdGJsX1NhdmVEYXRhIGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCAge1xyXG4gICAgc2F2ZV9pZDogICBudW1iZXI7XHJcbiAgICBwbGF5ZXJfaWQ6IG51bWJlcjtcclxuICAgIHVuaXFfbm86ICAgbnVtYmVyOyBcclxuICAgIHRpdGxlOiAgICAgc3RyaW5nOyBcclxuICAgIGRldGFpbDogICAgc3RyaW5nOyBcclxuICAgIHBvaW50OiAgICAgc3RyaW5nOyBcclxuICAgIGF1dG9fbW9kZTogc3RyaW5nOyBcclxuICAgIGlzX2FjdGl2ZTogc3RyaW5nOyBcclxuICAgIGlzX2RlbGV0ZTogc3RyaW5nOyBcclxuICAgIG1wOiAgICAgICAgc3RyaW5nOyAgLy8gbXlwb3NcclxuICAgIHNhdmVfdGltZTogc3RyaW5nO1xyXG4vLyAgICBtdnB0OiAgICAgIHN0cmluZzsgIC8vIGFsbF9tdnB0XHJcbn1cclxuaW50ZXJmYWNlIElfdGJsX1NhdmVJZCAgIGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBzYXZlX2lkOiBudW1iZXI7XHJcbn1cclxuaW50ZXJmYWNlIElfbGFzdEluc2VydCAgIGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19TYXZlSW5mb1JEQiB7XHJcbiAgICAvLyBEQuWHpueQhuOAgnBsYXllcl9k44Gr6Kmy5b2T44GZ44KL44K744O844OW44OH44O844K/44KSRELjgYvjgonoqq3jgb/ovrzjgb9cclxuICAgIC8vIFNhdmVJbmZvW13jga7phY3liJfjgpLov5TjgZlcclxuICAgIC8vIOmdnua0u+aAp+ODh+ODvOOCv+OChOWJiumZpOa4iOODh+ODvOOCv+OBr+OCueOCreODg+ODl+OBmeOCi1xyXG4gICAgLy8gXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldF9saXN0X2J5X3BpZChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBwbGF5ZXJfaWQ6IG51bWJlcik6IFByb21pc2U8Q19TYXZlSW5mb1tdPiB7XHJcbiAgICAgICAgY29uc3QgZ2V0X3NhdmVfU1FMID0gYFxyXG4gICAgICAgICAgICBTRUxFQ1Qgc2F2ZV9pZCwgcGxheWVyX2lkLCB1bmlxX25vLCB0aXRsZSwgZGV0YWlsLCBwb2ludCwgXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b19tb2RlLCBpc19hY3RpdmUsIGlzX2RlbGV0ZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgbXlwb3MgYXMgbXAsIFxyXG4gICAgICAgICAgICAgICAgICAgIERBVEVfRk9STUFUKHNhdmVfdGltZSwnJVktJW0tJWRUJUg6JWk6JXMuJWZaJykgQVMgc2F2ZV90aW1lXHJcbiAgICAgICAgICAgIEZST00gICB0Ymxfc2F2ZVxyXG4gICAgICAgICAgICBXSEVSRSAgcGxheWVyX2lkID0gOnBsYXllcl9pZCBcclxuICAgICAgICAgICAgT1JERVIgIEJZIHRpdGxlIENPTExBVEUgdXRmOG1iNF91bmljb2RlX2NpIEFTQ1xyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haS5xdWVyeTxJX3RibF9TYXZlSW5mb1tdPihnZXRfc2F2ZV9TUUwsIHtwbGF5ZXJfaWQ6IHBsYXllcl9pZH0pXHJcbiAgICAgICAgLmNhdGNoICgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCA1MDogJHtnZXRfc2F2ZV9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlY29yZFNldC5sZW5ndGggPCAxKSByZXR1cm4gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHNhdmVfZGF0YV9zZXQ6IENfU2F2ZUluZm9bXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gcmVjb3JkU2V0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZWNvcmRTZXRbaWldLmlzX2FjdGl2ZSA9PSAnMCcpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAocmVjb3JkU2V0W2lpXS5pc19kZWxldGUgIT0gJzAnKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNhdmUgPSBuZXcgQ19TYXZlSW5mbyhyZWNvcmRTZXRbaWldKTtcclxuICAgICAgICAgICAgc2F2ZS5teXBvcyAgICAgPSBDX01vdmFibGVQb2ludC5mcm9tX3N0cmluZ190b19vYmoocmVjb3JkU2V0W2lpXS5tcClcclxuICAgIFxyXG4gICAgICAgICAgICBzYXZlX2RhdGFfc2V0LnB1c2goc2F2ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzYXZlX2RhdGFfc2V0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBEQuWHpueQhuOAguODpuODi+ODvOOCr+ODu+ODiuODs+ODkOODvOOBi+OCiXNhdmVfaWTjgpLlvpfjgovjgILoqbLlvZPjgZnjgovjg6zjgrPjg7zjg4njgYznhKHjgZHjgozjgbDmiLvjgorlgKTjgactMeOCkui/lOOBmVxyXG4gICAgLy8gXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldF9zYXZlX2lkX2F0X3RibChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBwbGF5ZXJfaWQ6IG51bWJlcix1bmlxX25vOiBudW1iZXIpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGNvbnN0IHNlZWtfc2F2ZV9TUUwgPSBgXHJcbiAgICAgICAgICAgIFNFTEVDVCBzYXZlX2lkXHJcbiAgICAgICAgICAgIEZST00gICB0Ymxfc2F2ZVxyXG4gICAgICAgICAgICBXSEVSRSAgcGxheWVyX2lkID0gOnBsYXllcl9pZCBBTkQgdW5pcV9ubyA9IDp1bmlxX25vXHJcbiAgICAgICAgICAgIE9SREVSICBCWSB1bmlxX25vXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpLnF1ZXJ5PElfdGJsX1NhdmVJZFtdPihzZWVrX3NhdmVfU1FMLCB7cGxheWVyX2lkOiBwbGF5ZXJfaWQsIHVuaXFfbm86IHVuaXFfbm99KVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMjA6ICR7c2Vla19zYXZlX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAocmVjb3JkU2V0Lmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNOYU4ocmVjb3JkU2V0WzBdLnNhdmVfaWQpKSB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYHNhdmVfaWQg5pWw5YCk44Ko44Op44O8IDIxOiAke3JlY29yZFNldFswXS5zYXZlX2lkfSBgKTtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTnVtYmVyKHJlY29yZFNldFswXS5zYXZlX2lkKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ19TYXZlRGF0YVJEQiB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRfZnJvbV9yZGIoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyKTogUHJvbWlzZTxDX1NhdmVEYXRhfHVuZGVmaW5lZD4ge1xyXG4vL2RlYnVnIGNvbnNvbGUuZXJyb3IoYHByZSBnZXRfZnJvbSBTYXZlRGF0YVJEQiBzYXZlX2lkPSR7c2F2ZV9pZH1gKTtcclxuICAgICAgICBjb25zdCBzYXZlX2RhdGEgID0gYXdhaXQgQ19TYXZlRGF0YVJEQi5nZXRfZnJvbV90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChzYXZlX2RhdGEgPT09IHVuZGVmaW5lZCB8fCBtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuLy9kZWJ1ZyBjb25zb2xlLmVycm9yKGBwcmUgZ2V0X2Zyb20gTWF6ZVJEQiBzYXZlX2lkPSR7c2F2ZV9pZH1gKTtcclxuICAgICAgICBjb25zdCBtYXplX2FycmF5ID0gYXdhaXQgQ19NYXplUkRCLmdldF9mcm9tX3JkYl9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBtYXplIG9mIG1hemVfYXJyYXkpIHNhdmVfZGF0YS5hbGxfbWF6ZVttYXplLnVpZCgpXSA9IG1hemU7XHJcbiBcclxuLy9kZWJ1ZyBjb25zb2xlLmVycm9yKGBwcmUgZ2V0X2Zyb20gTXZwdFJEQiBzYXZlX2lkPSR7c2F2ZV9pZH1gKTtcclxuICAgICAgICBjb25zdCBtdnB0X2FycmF5ID0gYXdhaXQgQ19NdnB0UkRCLmdldF9mcm9tX3JkYl9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBtdnB0IG9mIG12cHRfYXJyYXkpIHNhdmVfZGF0YS5hbGxfbXZwdFttdnB0LnVpZCgpXSA9IG12cHQ7XHJcbiAgICAgICAgXHJcbi8vZGVidWcgY29uc29sZS5lcnJvcihgcHJlIGdldF9mcm9tIFRlYW1SREIgc2F2ZV9pZD0ke3NhdmVfaWR9YCk7XHJcbiAgICAgICAgY29uc3QgdGVhbV9hcnJheSA9IGF3YWl0IENfVGVhbVJEQi5nZXRfZnJvbV9yZGJfYWxsKGRiX21haSwgbWVzLCBzYXZlX2lkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IHRlYW0gb2YgdGVhbV9hcnJheSkgc2F2ZV9kYXRhLmFsbF90ZWFtW3RlYW0udWlkKCldID0gdGVhbTtcclxuICAgICAgICBcclxuLy9kZWJ1ZyBjb25zb2xlLmVycm9yKGBwcmUgZ2V0X2Zyb20gR3VpbGRSREIgc2F2ZV9pZD0ke3NhdmVfaWR9YCk7XHJcbiAgICAgICAgY29uc3QgZ3VsZF9hcnJheSA9IGF3YWl0IENfR3VpbGRSREIuZ2V0X2Zyb21fcmRiX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBndWxkIG9mIGd1bGRfYXJyYXkpIHNhdmVfZGF0YS5hbGxfZ3VsZFtndWxkLnVpZCgpXSA9IGd1bGQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHNhdmVfZGF0YTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzZXRfdG9fcmRiKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmU6IENfU2F2ZURhdGF8dW5kZWZpbmVkKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgaWYgKHNhdmUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNhdmVfaWQgPSBhd2FpdCBDX1NhdmVEYXRhUkRCLmFkZF90YmwoZGJfbWFpLCBtZXMsIHNhdmUpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuLy9kZWJ1ZyBjb25zb2xlLmVycm9yKGBzYXZlX2lkID0gJHtzYXZlX2lkfWApO1xyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gc2F2ZS5hbGxfbWF6ZSkge1xyXG4gICAgICAgICAgICBhd2FpdCBDX01hemVSREIuc2V0X3RvX3JkYihkYl9tYWksIG1lcywgc2F2ZV9pZCwgc2F2ZS5hbGxfbWF6ZVtpaV0pO1xyXG4gICAgICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gc2F2ZS5hbGxfbXZwdCkge1xyXG4vL2RlYnVnIGNvbnNvbGUuZXJyb3IoYHNhdmVfaWQgPSAke3NhdmVfaWR9LCBtdnB0WyR7aWl9XSA9ICR7c2F2ZS5hbGxfbXZwdFtpaV19YCk7XHJcbiAgICAgICAgICAgIGF3YWl0IENfTXZwdFJEQi5zZXRfdG9fcmRiKGRiX21haSwgbWVzLCBzYXZlX2lkLCBzYXZlLmFsbF9tdnB0W2lpXSk7XHJcbiAgICAgICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHNhdmUuYWxsX3RlYW0pIHtcclxuICAgICAgICAgICAgYXdhaXQgQ19UZWFtUkRCLnNldF90b19yZGIoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIHNhdmUuYWxsX3RlYW1baWldKTtcclxuICAgICAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gc2F2ZS5hbGxfZ3VsZCkge1xyXG4gICAgICAgICAgICBhd2FpdCBDX0d1aWxkUkRCLnNldF90b19yZGIoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIHNhdmUuYWxsX2d1bGRbaWldKTtcclxuICAgICAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdG9fcmRiKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGF3YWl0IENfSGVyb1JEQi5kZWxfdGJsX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBDX0d1aWxkUkRCLmRlbF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgQ19UZWFtUkRCLmRlbF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgQ19NdnB0UkRCLmRlbF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgQ19NYXplUkRCLmRlbF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgQ19TYXZlRGF0YVJEQi5kZWxfdGJsKGRiX21haSwgbWVzLCBzYXZlX2lkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBEQuWHpueQhuOAgnNhdmVfaWTjgafmjIflrprjgZXjgozjgZ9zYXZl44Os44Kz44O844OJKOWNmOaVsCnjgpLoqq3jgb/ovrzjgb9cclxuICAgIC8vIHNhdmVfZGF0YeOCkui/lOOBmVxyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGdldF9mcm9tX3RibChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPENfU2F2ZURhdGF8dW5kZWZpbmVkPiB7XHJcbiAgICAgICAgY29uc3QgZ2V0X3NhdmVfU1FMID0gYFxyXG4gICAgICAgICAgICBTRUxFQ1QgIHNhdmVfaWQsIHBsYXllcl9pZCwgdW5pcV9ubywgdGl0bGUsIGRldGFpbCwgcG9pbnQsIFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9fbW9kZSwgaXNfYWN0aXZlLCBpc19kZWxldGUsIFxyXG4gICAgICAgICAgICAgICAgICAgIG15cG9zIGFzIG1wLCBEQVRFX0ZPUk1BVChzYXZlX3RpbWUsJyVZLSVtLSVkVCVIOiVpOiVzLiVmWicpIEFTIHNhdmVfdGltZVxyXG4gICAgICAgICAgICBGUk9NICAgdGJsX3NhdmVcclxuICAgICAgICAgICAgV0hFUkUgIHNhdmVfaWQgPSA6c2F2ZV9pZFxyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haS5xdWVyeTxJX3RibF9TYXZlRGF0YVtdPihnZXRfc2F2ZV9TUUwsIHtzYXZlX2lkOiBzYXZlX2lkfSlcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDMwOiAke2dldF9zYXZlX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuXHJcbi8vZGVndWIgXHJcbmlmIChyZWNvcmRTZXQgPT09IHVuZGVmaW5lZCkgY29uc29sZS5lcnJvcihgU2F2ZURhdGFSREIuZ2V0X2Zyb21fdGFibGUgRXJyb3I6IHVuZGVmaW5kZSEhIHNhdmVfaWQ9JHtzYXZlX2lkfWApO1xyXG4gICAgICAgIGlmIChyZWNvcmRTZXQubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGDoqbLlvZPjgZnjgovjg4fjg7zjgr/jgYzmnInjgorjgb7jgZvjgpM6ICR7Z2V0X3NhdmVfU1FMfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2F2ZSA9IG5ldyBDX1NhdmVEYXRhKHJlY29yZFNldFswXSk7XHJcbiAgICAgICAgc2F2ZS5teXBvcyAgICAgPSBDX01vdmFibGVQb2ludC5mcm9tX3N0cmluZ190b19vYmoocmVjb3JkU2V0WzBdLm1wKVxyXG4vLyAgICAgICAgc2F2ZS5hbGxfbXZwdCAgPSBDX01vdmFibGVQb2ludC5mcm9tX3N0cmluZ190b19vYmpBcnJheShyZWNvcmRTZXRbMF0ubXZwdCk7XHJcbi8vICAgICAgICBzYXZlLmFsbF9tYXplICA9IENfTWF6ZSAuZnJvbV9zdHJpbmdfdG9fb2JqQXJyYXkocmVjb3JkU2V0WzBdLm1hemUpO1xyXG4vLyAgICAgICAgc2F2ZS5hbGxfdGVhbSAgPSBDX1RlYW0gLmZyb21fc3RyaW5nX3RvX29iakFycmF5KHJlY29yZFNldFswXS50ZWFtKTtcclxuLy8gICAgICAgIHNhdmUuYWxsX2d1bGQgID0gQ19HdWlsZC5mcm9tX3N0cmluZ190b19vYmpBcnJheShyZWNvcmRTZXRbMF0uZ3VsZCk7XHJcblxyXG4gICAgICAgIHJldHVybiBzYXZlO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZl44OG44O844OW44Or44Gr6Ieq6Lqr44Gu44OH44O844K/44KS6L+95YqgKGluc2VydCnjgZfjgaZcclxuICAgIC8vIOOBneOBrklEKHNhdmVfaWQp44KS6L+U44GZXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgYWRkX3RibChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlOiBDX1NhdmVEYXRhKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBjb25zdCBhdXRvX21vZGUgPSBzYXZlLmF1dG9fbW9kZSA/ICcxJyA6ICcwJztcclxuICAgICAgICBjb25zdCBpc19hY3RpdmUgPSBzYXZlLmlzX2FjdGl2ZSA/ICcxJyA6ICcwJztcclxuICAgICAgICBjb25zdCBpc19kZWxldGUgPSBzYXZlLmlzX2RlbGV0ZSA/ICcxJyA6ICcwJztcclxuXHJcbiAgICAgICAgY29uc3QgaW5zZXJ0X3NhdmVfU1FMID1gXHJcbiAgICAgICAgICAgIElOU0VSVCAgSU5UTyB0Ymxfc2F2ZSAoXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyX2lkLCB1bmlxX25vLCAgIHRpdGxlLCBkZXRhaWwsIHBvaW50LCBcclxuICAgICAgICAgICAgICAgICAgICBteXBvcywgXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b19tb2RlLCBpc19hY3RpdmUsIGlzX2RlbGV0ZVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBWQUxVRVMgKCBcclxuICAgICAgICAgICAgICAgICAgICA6cGxheWVyX2lkLCA6dW5pcV9ubywgICA6dGl0bGUsIDpkZXRhaWwsIDpwb2ludCwgXHJcbiAgICAgICAgICAgICAgICAgICAgOm15cG9zLCBcclxuICAgICAgICAgICAgICAgICAgICA6YXV0b19tb2RlLCA6aXNfYWN0aXZlLCA6aXNfZGVsZXRlKVxyXG4gICAgICAgIGBcclxuICAgICAgICBhd2FpdCBkYl9tYWkucXVlcnkoaW5zZXJ0X3NhdmVfU1FMLCB7XHJcbiAgICAgICAgICAgIHBsYXllcl9pZDogc2F2ZS5wbGF5ZXJfaWQsXHJcbiAgICAgICAgICAgIHVuaXFfbm86ICAgc2F2ZS51bmlxX25vLFxyXG4gICAgICAgICAgICB0aXRsZTogICAgIHNhdmUudGl0bGUsXHJcbiAgICAgICAgICAgIGRldGFpbDogICAgc2F2ZS5kZXRhaWwsXHJcbiAgICAgICAgICAgIHBvaW50OiAgICAgc2F2ZS5wb2ludCxcclxuICAgICAgICAgICAgbXlwb3M6ICAgICBDX01vdmFibGVQb2ludC5mcm9tX29ial90b19zdHJpbmcoc2F2ZS5teXBvcyksXHJcbi8vICAgICAgICAgICAgYWxsX212cHQ6ICBDX01vdmFibGVQb2ludC5mcm9tX29iakFycmF5X3RvX3N0cmluZyhzYXZlLmFsbF9tdnB0KSxcclxuICAgICAgICAgICAgYXV0b19tb2RlOiBhdXRvX21vZGUsXHJcbiAgICAgICAgICAgIGlzX2FjdGl2ZTogaXNfYWN0aXZlLFxyXG4gICAgICAgICAgICBpc19kZWxldGU6IGlzX2RlbGV0ZSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMDogJHtpbnNlcnRfc2F2ZV9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gLTFcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gQ19TYXZlRGF0YVJEQi5sYXN0SW5zZXJ0KGRiX21haSwgbWVzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gdGJsX3NhdmVfZGF0YeOBp+acgOW+jOOBq+i/veWKoOOBl+OBn+ihjOeVquWPtyhzYXZlX2lkKeOCkui/lOOBmeOAkDHooYzmjL/lhaXlsILnlKjjgJFcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgbGFzdEluc2VydChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlKSA6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgY29uc3QgbGFzdEluc2VydF9TUUwgPWBcclxuICAgICAgICAgICAgU0VMRUNUIExBU1RfSU5TRVJUX0lEKCkgYXMgaWQgRlJPTSB0Ymxfc2F2ZTtcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3JlY29yZFNldF0gPSBhd2FpdCBkYl9tYWkucXVlcnk8SV9sYXN0SW5zZXJ0W10+KGxhc3RJbnNlcnRfU1FMKVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgNTAwOiAke2xhc3RJbnNlcnRfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChyZWNvcmRTZXQubGVuZ3RoIDwgMSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiByZWNvcmRTZXRbMF0uaWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBp+aMh+WumuOBleOCjOOBn+ODrOOCs+ODvOODieOCkuWJiumZpChkZWxldGUp44GZ44KLXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgZGVsX3RibChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCBkZWxldGVfc2F2ZV9TUUwgPSBgXHJcbiAgICAgICAgICAgIERFTEVURSBGUk9NIHRibF9zYXZlIFxyXG4gICAgICAgICAgICBXSEVSRSAgc2F2ZV9pZCA9IDpzYXZlX2lkXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGF3YWl0IGRiX21haS5xdWVyeShkZWxldGVfc2F2ZV9TUUwsIHtcclxuICAgICAgICAgICAgc2F2ZV9pZCAgOiBzYXZlX2lkLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoICgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAxMDogJHtkZWxldGVfc2F2ZV9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8g5Yip55So44Kv44Op44K5562J44Gu6Kqt44G/6L6844G/XHJcbmltcG9ydCBteXNxbCBmcm9tICdteXNxbDIvcHJvbWlzZSc7XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9ICAgICAgIGZyb20gJy4uL2RfdXRsL0NfRHNwTWVzc2FnZSc7IC8vIOeUu+mdouODoeODg+OCu+ODvOOCuOOBruihqOekuueUqOOCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX1RlYW0sIEpTT05fVGVhbSB9ICBmcm9tIFwiLi4vZF9tZGwvQ19UZWFtXCI7XHJcbmltcG9ydCB7IENfSGVyb1JEQiB9ICAgICAgICAgIGZyb20gJy4vQ19IZXJvUkRCJztcclxuXHJcbnR5cGUgZGJfY29ubmVjdCA9IG15c3FsLlBvb2xDb25uZWN0aW9uO1xyXG5cclxuaW50ZXJmYWNlIElfdGJsX3RlYW0gZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0IHtcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICBzYXZlX2lkOiBudW1iZXIsXHJcbiAgICB1bmlxX2lkOiBzdHJpbmcsXHJcbiAgICBuYW1lOiAgICBzdHJpbmcsXHJcbiAgICBsb2NhdGU6ICBzdHJpbmcsXHJcbiAgICBnb2xkOiAgICBudW1iZXIsXHJcbi8vICAgIGdvb2RzOiAgIHN0cmluZyxcclxufVxyXG5pbnRlcmZhY2UgSV9sYXN0SW5zZXJ0IGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19UZWFtUkRCIHsgXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fcmRiX2FsbChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPENfVGVhbVtdPiB7XHJcbiAgICAgICAgY29uc3QgdGVhbV9hcnJheSA9IGF3YWl0IENfVGVhbVJEQi5nZXRfZnJvbV90YmxfYWxsKGRiX21haSwgbWVzLCBzYXZlX2lkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCB0ZWFtIG9mIHRlYW1fYXJyYXkpIHtcclxuICAgICAgICAgICAgY29uc3QgaHJlc19hcnJheSA9IGF3YWl0IENfSGVyb1JEQi5nZXRfZnJvbV9yZGJfYWxsKGRiX21haSwgbWVzLCBzYXZlX2lkLCB0ZWFtLnVpZCgpKTtcclxuICAgICAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaGVybyBvZiBocmVzX2FycmF5KSB0ZWFtLmFkZF9oZXJvKGhlcm8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVhbV9hcnJheTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRfZnJvbV9yZGIoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyLCB0ZWFtOiBDX1RlYW0pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCByc2x0MCA9IGF3YWl0IENfVGVhbVJEQi5nZXRfZnJvbV90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIHRlYW0udWlkKCkpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBocmVzX2FycmF5ID0gYXdhaXQgQ19IZXJvUkRCLmdldF9mcm9tX3JkYl9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIHRlYW0udWlkKCkpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGhlcm8gb2YgaHJlc19hcnJheSkgdGVhbS5hZGRfaGVybyhoZXJvKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzZXRfdG9fcmRiKFxyXG4gICAgICAgIGRiX21haTogIGRiX2Nvbm5lY3QsXHJcbiAgICAgICAgbWVzOiAgICAgQ19Ec3BNZXNzYWdlLFxyXG4gICAgICAgIHNhdmVfaWQ6IG51bWJlcixcclxuICAgICAgICB0ZWFtOiAgICBDX1RlYW1cclxuICAgICk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IHRlYW1faWQgPSBhd2FpdCBDX1RlYW1SREIuYWRkX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCwgdGVhbSk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgaGVybyBvZiB0ZWFtLmhyZXMoKSkge1xyXG4gICAgICAgICAgICBhd2FpdCBDX0hlcm9SREIuc2V0X3RvX3JkYihkYl9tYWksIG1lcywgc2F2ZV9pZCwgdGVhbS51aWQoKSwgaGVybyk7XHJcbiAgICAgICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RvX3JkYihkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIsIHRlYW1fdWlkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBhd2FpdCBDX0hlcm9SREIuZGVsX3RvX3JkYihkYl9tYWksIG1lcywgc2F2ZV9pZCwgdGVhbV91aWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBDX1RlYW1SREIuZGVsX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZlX2lk44Gn5oyH5a6a44GV44KM44GfdGVhbeODrOOCs+ODvOODieOCu+ODg+ODiOOCkuiqreOBv+i+vOOBv1xyXG4gICAgLy8gVGVhbeOCr+ODqeOCueOBrumFjeWIl+OBq+OCu+ODg+ODiOOBmeOCi1xyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGdldF9mcm9tX3RibF9hbGwoXHJcbiAgICAgICAgZGJfbWFpOiAgZGJfY29ubmVjdCwgXHJcbiAgICAgICAgbWVzOiAgICAgQ19Ec3BNZXNzYWdlLCBcclxuICAgICAgICBzYXZlX2lkOiBudW1iZXIsXHJcbiAgICApOiBQcm9taXNlPENfVGVhbVtdPiB7XHJcbiAgICAgICAgY29uc3QgZ2V0X3RlYW1fU1FMID1gXHJcbiAgICAgICAgICAgIFNFTEVDVCBcdGlkLCBzYXZlX2lkLCB1bmlxX2lkLCBuYW1lLCBsb2NhdGUsIGdvbGRcclxuICAgICAgICAgICAgRlJPTSB0YmxfdGVhbVxyXG4gICAgICAgICAgICBXSEVSRSAgIHNhdmVfaWQgPSA6c2F2ZV9pZFxyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVzdWx0UmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haS5xdWVyeTxJX3RibF90ZWFtW10+KGdldF90ZWFtX1NRTCwge3NhdmVfaWQ6IHNhdmVfaWR9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDM3YTogJHtnZXRfdGVhbV9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBpZiAocmVzdWx0UmVjb3JkU2V0Lmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0ZWFtX2FycmF5ID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCByciBvZiByZXN1bHRSZWNvcmRTZXQpIHtcclxuICAgICAgICAgICAgdGVhbV9hcnJheS5wdXNoKG5ldyBDX1RlYW0oQ19UZWFtUkRCLmZyb21fc3RyaW5nQXJyYXlfdG9fSlNPTihycikpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRlYW1fYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZlX2lk44Go6Ieq6Lqr44GudW5pcV9pZOOBp+aMh+WumuOBleOCjOOBn3RlYW3jg6zjgrPjg7zjg4njgrvjg4Pjg4jjgpLoqq3jgb/ovrzjgoBcclxuICAgIC8vIFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBnZXRfZnJvbV90YmwoXHJcbiAgICAgICAgZGJfbWFpOiAgIGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgIG1lczogICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgIHNhdmVfaWQ6ICBudW1iZXIsXHJcbiAgICAgICAgam9pbl91aWQ6IHN0cmluZyxcclxuICAgICk6IFByb21pc2U8Q19UZWFtfHVuZGVmaW5lZD4ge1xyXG4gICAgICAgIGNvbnN0IGdldF90ZWFtX1NRTCA9IGBcclxuICAgICAgICAgICAgU0VMRUNUIFx0aWQsIHNhdmVfaWQsIHVuaXFfaWQsIG5hbWUsIGxvY2F0ZSwgZ29sZCBcclxuICAgICAgICAgICAgRlJPTSB0YmxfdGVhbVxyXG4gICAgICAgICAgICBXSEVSRSAgIHNhdmVfaWQgPSA6c2F2ZV9pZCAgQU5EICB1bmlxX2lkID0gOnVuaXFfaWRcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3Jlc3VsdFJlY29yZFNldF0gPSBhd2FpdCBkYl9tYWkucXVlcnk8SV90YmxfdGVhbVtdPihnZXRfdGVhbV9TUUwsIHtzYXZlX2lkOiBzYXZlX2lkLCBqb2luX3VpZDogam9pbl91aWR9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDM3YjogJHtnZXRfdGVhbV9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBpZiAocmVzdWx0UmVjb3JkU2V0Lmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZSgnVW5pcV9pZOOBq+ipsuW9k+OBmeOCi1RlYW3jg4fjg7zjgr/jgYzmnInjgorjgb7jgZvjgpMnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX1RlYW0oQ19UZWFtUkRCLmZyb21fc3RyaW5nQXJyYXlfdG9fSlNPTihyZXN1bHRSZWNvcmRTZXRbMF0pKVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJ0ZWFt44OG44O844OW44Or44GrQ19UZWFt44Gu44OH44O844K/44KS6L+95YqgKGluc2VydCnjgZfjgaZcclxuICAgIC8vIOOBneOBrklEKGlkKeOCkui/lOOBmVxyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGFkZF90YmwoXHJcbiAgICAgICAgZGJfbWFpOiAgZGJfY29ubmVjdCwgXHJcbiAgICAgICAgbWVzOiAgICAgQ19Ec3BNZXNzYWdlLCBcclxuICAgICAgICBzYXZlX2lkOiBudW1iZXIsXHJcbiAgICAgICAgdGVhbTogICAgQ19UZWFtLFxyXG4gICAgKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBjb25zdCBpbnNlcnRfdGVhbV9TUUwgPSBgXHJcbiAgICAgICAgICAgIElOU0VSVCBJTlRPIHRibF90ZWFtIChcclxuICAgICAgICAgICAgICAgIHNhdmVfaWQsIHVuaXFfaWQsIG5hbWUsIGxvY2F0ZSwgZ29sZFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIFZBTFVFUyAoIFxyXG4gICAgICAgICAgICAgICAgOnNhdmVfaWQsIDp1bmlxX2lkLCA6bmFtZSwgOmxvY2F0ZSwgOmdvbGRcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBqID0gdGVhbS5lbmNvZGUoKTtcclxuLy9jb25zb2xlLmVycm9yKGAke3NhdmVfaWR9LCAke2oudW5pcV9pZH0sICR7ai5uYW1lfSwgJHtKU09OLnN0cmluZ2lmeShqLmxvY2F0ZSl9LCAke0pTT04uc3RyaW5naWZ5KGouZ29sZCl9YCk7XHJcbiAgICAgICAgYXdhaXQgZGJfbWFpLnF1ZXJ5KGluc2VydF90ZWFtX1NRTCwge1xyXG4gICAgICAgICAgICBzYXZlX2lkIDogc2F2ZV9pZCwgIFxyXG4gICAgICAgICAgICB1bmlxX2lkIDogai51bmlxX2lkLCBcclxuICAgICAgICAgICAgbmFtZSAgICA6IGoubmFtZSwgXHJcbiAgICAgICAgICAgIGxvY2F0ZSAgOiBKU09OLnN0cmluZ2lmeShqLmxvY2F0ZSksIFxyXG4gICAgICAgICAgICBnb2xkICAgIDogai5nb2xkLCAgXHJcbi8vICAgICAgICAgICAgZ29vZHMgICA6IEpTT04uc3RyaW5naWZ5KGouZ29vZHMpLCAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCA2OiAke2luc2VydF90ZWFtX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIENfVGVhbVJEQi5sYXN0SW5zZXJ0KGRiX21haSwgbWVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YmxfdGVhbeOBp+acgOW+jOOBq+i/veWKoOOBl+OBn+ihjOeVquWPtyhzYXZlX2lkKeOCkui/lOOBmeOAkDHooYzmjL/lhaXlsILnlKjjgJFcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgbGFzdEluc2VydChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlKSA6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgY29uc3QgbGFzdEluc2VydF9TUUwgPWBcclxuICAgICAgICAgICAgU0VMRUNUIExBU1RfSU5TRVJUX0lEKCkgYXMgaWQgRlJPTSB0YmxfdGVhbTtcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3JlY29yZFNldF0gPSBhd2FpdCBkYl9tYWkucXVlcnk8SV9sYXN0SW5zZXJ0W10+KGxhc3RJbnNlcnRfU1FMKVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgNTAwOiAke2xhc3RJbnNlcnRfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChyZWNvcmRTZXQubGVuZ3RoIDwgMSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiByZWNvcmRTZXRbMF0uaWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIERC5Yem55CGKOOCr+ODqeOCueODu+ODoeOCveODg+ODiSnjgIJUZWFt44Kv44Op44K544Gu6YWN5YiX44KS5Y+X44GR5Y+W44Gj44Gm44CBXHJcbiAgICAvLyDmjIflrprjgZXjgozjgZ9zYXZlX2lk44Gn44CAdGVhbeODhuODvOODluODq+OBq+i/veWKoChpbnNlcnQp44GX44GmXHJcbiAgICAvLyDjgZ3jga5JRChpZCnjga7phY3liJfjgpLov5TjgZlcclxuICAgIC8vIFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBhZGRfdGJsX2FsbChcclxuICAgICAgICBkYl9tYWk6ICAgICBkYl9jb25uZWN0LCBcclxuICAgICAgICBtZXM6ICAgICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgIHNhdmVfaWQ6ICAgIG51bWJlcixcclxuICAgICAgICB0ZWFtX2FycmF5OiBDX1RlYW1bXSwgXHJcbiAgICApOiBQcm9taXNlPG51bWJlcltdPiBcclxuICAgIHtcclxuICAgICAgICBjb25zdCB0ZWFtX2lkX3NldCA9IFtdIGFzIG51bWJlcltdO1xyXG4gICAgICAgIGZvciAoY29uc3QgdGVhbSBvZiB0ZWFtX2FycmF5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlYW1faWQgPSBhd2FpdCBDX1RlYW1SREIuYWRkX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCwgdGVhbSk7XHJcbiAgICAgICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHJldHVybiBbXTtcclxuICAgICAgICAgICAgdGVhbV9pZF9zZXQucHVzaCh0ZWFtX2lkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRlYW1faWRfc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBp+aMh+WumuOBleOCjOOBn+ODrOOCs+ODvOODiSjopIfmlbAp44KS5YmK6ZmkKGRlbGV0ZSnjgZnjgotcclxuICAgIC8vIFxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdGJsKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZV90ZWFtX1NRTCA9IGBcclxuICAgICAgICAgICAgREVMRVRFIEZST00gdGJsX3RlYW0gXHJcbiAgICAgICAgICAgIFdIRVJFICBzYXZlX2lkID0gOnNhdmVfaWRcclxuICAgICAgICBgXHJcbiAgICAgICAgYXdhaXQgZGJfbWFpLnF1ZXJ5KGRlbGV0ZV90ZWFtX1NRTCwge3NhdmVfaWQgOiBzYXZlX2lkLH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMTU6ICR7ZGVsZXRlX3RlYW1fU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fc3RyaW5nQXJyYXlfdG9fSlNPTihqOiBJX3RibF90ZWFtKTogSlNPTl9UZWFtIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogICAgICBqLmlkLFxyXG4gICAgICAgICAgICBzYXZlX2lkOiBqLnNhdmVfaWQsXHJcbiAgICAgICAgICAgIHVuaXFfaWQ6IGoudW5pcV9pZCxcclxuICAgICAgICAgICAgbmFtZTogICAgai5uYW1lLFxyXG4gICAgICAgICAgICBsb2NhdGU6ICBKU09OLnBhcnNlKGoubG9jYXRlKSxcclxuICAgICAgICAgICAgZ29sZDogICAgai5nb2xkLFxyXG4vLyAgICAgICAgICAgIGdvb2RzOiAgIEpTT04ucGFyc2Uoai5nb29kcyksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iLCIvLyDnlLvpnaLooajnpLrnlKjjg6Hjg4Pjgrvjg7zjgrgo6YCa5bi455So44Go44Ko44Op44O855SoKeOBruOCq+ODl+OCu+ODq+WMllxyXG5leHBvcnQgY2xhc3MgQ19Ec3BNZXNzYWdlIHtcclxuICAgIHByaXZhdGUgaXNIVE1MOiBib29sZWFuOyAgICAgICAvLyDooajnpLrlhYjjgYxIVE1M44GLKHRydWUp44CB44Kz44Oz44K944O844Or44GLKGZhbHNlKeOBruaMh+WumlxyXG4gICAgcHJpdmF0ZSBub3JfbWVzc2FnZTogc3RyaW5nW107IC8vIOmAmuW4uOOBruODoeODg+OCu+ODvOOCuOOCkuagvOe0jeOBmeOCi+aWh+Wtl+WIl+mFjeWIl1xyXG4gICAgcHJpdmF0ZSBlcnJfbWVzc2FnZTogc3RyaW5nW107IC8vIOOCqOODqeODvOODoeODg+OCu+ODvOOCuOOCkuagvOe0jeOBmeOCi+aWh+Wtl+WIl+mFjeWIl1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihpc0hUTUw6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuaXNIVE1MICAgICAgPSBpc0hUTUw7XHJcbiAgICAgICAgdGhpcy5ub3JfbWVzc2FnZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXJyX21lc3NhZ2UgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0X25vcl9tZXNzYWdlKG1zZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub3JfbWVzc2FnZS5wdXNoKG1zZyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRfZXJyX21lc3NhZ2UobXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVycl9tZXNzYWdlLnB1c2gobXNnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3BsYXlfbm9yX21lc3NhZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubm9yX21lc3NhZ2UubGVuZ3RoIDwgMSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0hUTUwpIHtcclxuICAgICAgICAgICAgbGV0IGFsbF9tc2cgPSBcIjxwIGNsYXNzPSdub3JtYWxfbWVzc2FnZSc+XFxuXCI7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXNnIG9mIHRoaXMubm9yX21lc3NhZ2UpIGFsbF9tc2cgKz0gYCR7bXNnfTwvYnI+XFxuYDtcclxuICAgICAgICAgICAgYWxsX21zZyArPSAgXCI8L3A+XFxuXCI7XHJcbiAgICAgICAgICAgIGFsZXJ0KGFsbF9tc2cpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXNnIG9mIHRoaXMubm9yX21lc3NhZ2UpIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcGxheV9lcnJfbWVzc2FnZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5lcnJfbWVzc2FnZS5sZW5ndGggPCAxKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzSFRNTCkge1xyXG4gICAgICAgICAgICBsZXQgYWxsX21zZyA9IFwiPHAgY2xhc3M9J2Vycm9yX21lc3NhZ2UnPlxcblwiO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1zZyBvZiB0aGlzLmVycl9tZXNzYWdlKSBhbGxfbXNnICs9IGAke21zZ308L2JyPlxcbmA7XHJcbiAgICAgICAgICAgIGFsbF9tc2cgKz0gIFwiPC9wPlxcblwiO1xyXG4gICAgICAgICAgICBhbGVydChhbGxfbXNnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiXFxuXFxuXFxuIyMjXFxuIyMjIEVSUk9SIE9jY3VlcmQuXFxuIyMjXFxuXCIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1zZyBvZiB0aGlzLmVycl9tZXNzYWdlKSBjb25zb2xlLmVycm9yKGAjIyMgJHttc2d9YCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCIjIyNcXG5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBwZG9fZXJyb3IoZTogYW55LCBlcnJtc2c6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGVjb2RlID0gZT8uZ2V0Q29kZSgpICAgID8/ICc5OTk5OSc7XHJcbiAgICAgICAgY29uc3QgZW1lc3MgPSBlPy5nZXRNZXNzYWdlKCkgPz8gJz8/Pyc7XHJcbiAgICAgICAgdGhpcy5zZXRfZXJyX21lc3NhZ2UoZXJybXNnKTtcclxuICAgICAgICB0aGlzLnNldF9lcnJfbWVzc2FnZShgY29kZTogJHtlY29kZX1gKTtcclxuICAgICAgICB0aGlzLnNldF9lcnJfbWVzc2FnZShgbWVzc2FnZTogJHtlbWVzc31gKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXRfbm9yX21lc3NhZ2VzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gWy4uLnRoaXMubm9yX21lc3NhZ2VdO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9lcnJfbWVzc2FnZXMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy5lcnJfbWVzc2FnZV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzX2VycigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gIHRoaXMuZXJyX21lc3NhZ2UubGVuZ3RoICE9PSAwO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIOaVsOWApOODgeOCp+ODg+OCr1xyXG5leHBvcnQgZnVuY3Rpb24gX2lzTnVtKG51bVZhbDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAvLyDjg4Hjgqfjg4Pjgq/mnaHku7bjg5Hjgr/jg7zjg7NcclxuICAgIGNvbnN0IHBhdHRlcm4gPSAvXlstK10/KFsxLTldXFxkKnwwKShcXC5cXGQrKT8kLztcclxuICAgIC8vIOaVsOWApOODgeOCp+ODg+OCr1xyXG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChudW1WYWwpO1xyXG59XHJcblxyXG4vLyDmlbDlgKTlj5bjgorlh7rjgZdcclxuZXhwb3J0IGZ1bmN0aW9uIF9nZXROdW0obnVtVmFsOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgLy8g44OB44Kn44OD44Kv5p2h5Lu244OR44K/44O844OzXHJcbi8vICAgIGNvbnN0IHBhdHRlcm4gPSAvWy1dPyhbMS05XVxcZCp8MCkoXFwuXFxkKyk/LztcclxuICAgIGNvbnN0IHBhdHRlcm4gPSAvKFteMC05XSkvZztcclxuICAgIGNvbnN0IHZhbHN0ciAgPSBudW1WYWwucmVwbGFjZShwYXR0ZXJuLCcnKTtcclxuICAgIC8vIOaVsOWApOODgeOCp+ODg+OCr1xyXG4gICAgcmV0dXJuIE51bWJlcih2YWxzdHIpO1xyXG59XHJcblxyXG4vLyDlm5vmjajkupTlhaVcclxuZXhwb3J0IGZ1bmN0aW9uIF9yb3VuZChudW06IG51bWJlciwgZGlnaXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBtdWx0aXBsaWVyID0gTWF0aC5wb3coMTAsIGRpZ2l0KTtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIG11bHRpcGxpZXIpIC8gbXVsdGlwbGllcjtcclxufVxyXG5cclxuLy8g5YiH44KK5LiK44GSXHJcbmV4cG9ydCBmdW5jdGlvbiBfY2VpbChudW06IG51bWJlciwgZGlnaXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBtdWx0aXBsaWVyID0gTWF0aC5wb3coMTAsIGRpZ2l0KTtcclxuICAgIHJldHVybiBNYXRoLmNlaWwobnVtICogbXVsdGlwbGllcikgLyBtdWx0aXBsaWVyO1xyXG59XHJcblxyXG5cclxuLy8g5YiH44KK5LiL44GSXHJcbmV4cG9ydCBmdW5jdGlvbiBfZmxvb3IobnVtOiBudW1iZXIsIGRpZ2l0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgbXVsdGlwbGllciA9IE1hdGgucG93KDEwLCBkaWdpdCk7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihudW0gKiBtdWx0aXBsaWVyKSAvIG11bHRpcGxpZXI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX21pbihhOiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gYS5yZWR1Y2UoKG4xOiBudW1iZXIsIG4yOiBudW1iZXIpID0+IE1hdGgubWluKG4xLCBuMikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX21heChhOiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gYS5yZWR1Y2UoKG4xOiBudW1iZXIsIG4yOiBudW1iZXIpID0+IE1hdGgubWF4KG4xLCBuMikpO1xyXG59XHJcbiIsImltcG9ydCB7IF9tYXgsIF9taW4sIF9yb3VuZCB9IGZyb20gXCIuL0ZfTWF0aFwiO1xyXG5cclxuLy8g5Lmx5pWw6Zai5pWw5ZG844Gz5Ye644GX55So44Gu5Z6L5a6j6KiAXHJcbnR5cGUgVF9mcmFuZCA9ICgpPT5udW1iZXJcclxuY29uc3QgZnJhbmQ6IFRfZnJhbmQgPSAgKCk9PntyZXR1cm4gTWF0aC5yYW5kb20oKX1cclxuXHJcbi8vIOS4gOanmOS5seaVsCjmlbTmlbApXHJcbmV4cG9ydCBmdW5jdGlvbiBfaXJhbmQobWluOiBudW1iZXIgPSAwLCBtYXg6IG51bWJlciA9IDEsIHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCk6IG51bWJlciB7XHJcbiAgICBjb25zdCBmX3JhbmQgPSBNYXRoLmZsb29yKHJhbmQoKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XHJcbiAgICByZXR1cm4gX3JvdW5kKGZfcmFuZCwgMCk7XHJcbn1cclxuXHJcbi8vIOato+imj+WIhuW4g+OCguOBqeOBjeS5seaVsCjmlbTmlbApXHJcbmV4cG9ydCBmdW5jdGlvbiBfaWdyYW5kKG1pbjogbnVtYmVyID0gMCwgbWF4OiBudW1iZXIgPSAxLCByYW5kOiBUX2ZyYW5kID0gZnJhbmQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIF9pcmFuZChtaW4sIG1heCwgKCk9PntyZXR1cm4gX2dyYW5kKDAsIDEsIHJhbmQpfSlcclxufVxyXG5cclxuLy8g5q2j6KaP5YiG5biD44KC44Gp44GN5Lmx5pWwKOWun+aVsClcclxuZXhwb3J0IGZ1bmN0aW9uIF9ncmFuZChtaW46IG51bWJlciA9IDAsIG1heDogbnVtYmVyID0gMSwgcmFuZDogVF9mcmFuZCA9IGZyYW5kKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKF9fX2dhdXNzaWFuUmFuZChyYW5kKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XHJcbn1cclxuZnVuY3Rpb24gX19fZ2F1c3NpYW5SYW5kKHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCkge1xyXG4gICAgbGV0IHN1bSA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkgKz0gMSkge1xyXG4gICAgICAgIHN1bSArPSByYW5kKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3VtIC8gNjtcclxufVxyXG5cclxuLy8g5bCR44GX55yf6Z2i55uu44Gq5q2j6KaP5YiG5biD5Lmx5pWwKOaVtOaVsClcclxuZXhwb3J0IGZ1bmN0aW9uIF9pbnJhbmQobWluOiBudW1iZXIgPSAwLCBtYXg6IG51bWJlciA9IDEsIGRkOiBudW1iZXIgPSAzLjAsIHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihfbnJhbmQobWluLCBtYXgsIGRkLCByYW5kKSk7XHJcbn1cclxuXHJcbi8vIOWwkeOBl+ecn+mdouebruOBquato+imj+WIhuW4g+S5seaVsCjlrp/mlbApXHJcbi8vIOS4gOanmOeiuueOh+WkieaVsGEsYuOCkuWkieaVsOmWouaVsOOCkueUqOOBhOOBpiB4PWYoYSxiKSwgeT1nKGEsYinjgajjgZfjgaYy44Gk44Gu5q2j6KaP5YiG5biD5Lmx5pWweCx544KS5b6X44KLXHJcbi8vIHggPSBmKGEsYikgPSBzcXJ0KC0yKmxvZyhhKSkgKiBzaW4oMirPgCpiKSBcclxuLy8geSA9IGcoYSxiKSA9IHNxcnQoLTIqbG9nKGEpKSAqIGNvcygyKs+AKmIpIFxyXG5leHBvcnQgZnVuY3Rpb24gX25yYW5kKG1pbjogbnVtYmVyID0gMC4wLCBtYXg6IG51bWJlciA9IDEuMCwgZGQ6IG51bWJlciA9IDMuMCwgcmFuZDogVF9mcmFuZCA9IGZyYW5kKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGF2ZSA9IDAuNTtcclxuICAgIGNvbnN0IGEgPSByYW5kKCk7XHJcbiAgICBjb25zdCBiID0gcmFuZCgpO1xyXG4gICAgbGV0IHggPSBhdmUgKyBfZmFiKGEsIGIpIC8gKDIuMCAqIGRkKTsgLy8g44GT44GT44G+44Gn44CBTigwLDEp44Gu5q2j6KaP5YiG5biD5Lmx5pWw44Gu5L2c5oiQXHJcblxyXG4gICAgeCA9IG1pbiArIHggKiAobWF4IC0gbWluKTtcclxuICAgIHggPSBfbWF4KFttaW4sIHhdKTtcclxuICAgIHggPSBfbWluKFttYXgsIHhdKTtcclxuICAgIHJldHVybiB4O1xyXG59XHJcbmZ1bmN0aW9uIF9mYWIoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydCgtMi4wICogTWF0aC5sb2coYSkpICogTWF0aC5zaW4oMi4wICogTWF0aC5QSSAqIGIpO1xyXG59XHJcbmZ1bmN0aW9uIF9nYWIoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydCgtMi4wICogTWF0aC5sb2coYSkpICogTWF0aC5jb3MoMi4wICogTWF0aC5QSSAqIGIpO1xyXG59XHJcblxyXG5cclxuLy8g44K344O844OJ5YCk44KS55So44GE44Gf5Lmx5pWwXHJcbmV4cG9ydCBjbGFzcyBDX1NlZWRlZFJhbmQge1xyXG4gICAgcHJvdGVjdGVkIHNlZWQ6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBmaXJzdF9zZWVkOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHNlZWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2VlZCA9IHNlZWQ7XHJcbiAgICAgICAgdGhpcy5maXJzdF9zZWVkID0gc2VlZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZXNldCgpIHtcclxuICAgICAgICB0aGlzLnNlZWQgPSB0aGlzLmZpcnN0X3NlZWQ7XHJcbiAgICB9XHJcbiAgICAvLyDkubHmlbDnlJ/miJDjg6Hjgr3jg4Pjg4lcclxuICAgIHB1YmxpYyByYW5kb20oKTogbnVtYmVyIHtcclxuICAgICAgICB0aGlzLnNlZWQgPSAodGhpcy5zZWVkICogOTMwMSArIDQ5Mjk3KSAlIDIzMzI4MDtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWVkIC8gMjMzMjgwLjA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v44Om44OL44O844KvSUQodXVpZCnjga7nlJ/miJBcclxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRfdXVpZChsZW46IG51bWJlciA9IDIwLCByYW5kOiBUX2ZyYW5kID0gZnJhbmQpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbGZ0ID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKS50b1N0cmluZygxNik7IC8vIOOBn+OBtuOCkzEz5qGBXHJcbiAgICBjb25zdCByZ3RfbGVuID0gX21heChbbGVuIC0gbGZ0Lmxlbmd0aCwgMV0pO1xyXG5cclxuICAgIGNvbnN0IHJndCA9IE1hdGguZmxvb3IoTWF0aC5wb3coMTAsIHJndF9sZW4pICogcmFuZCgpKS50b1N0cmluZygxNik7XHJcbiAgICByZXR1cm4gbGZ0ICsgcmd0O1xyXG59XHJcblxyXG4vLyDnorrnjofjgavln7rjgaXjgY/opoHntKDpgbjmip5cclxuZXhwb3J0IHR5cGUgVF9TZWxlY3RJdGVtID0ge1xyXG4gICAgcmF0aW86IG51bWJlcixcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gX3NlbGVjdEl0ZW0oaXRlbXM6IFRfU2VsZWN0SXRlbVtdLCByYW5kOiBUX2ZyYW5kID0gZnJhbmQpOiBUX1NlbGVjdEl0ZW0gfCB1bmRlZmluZWQge1xyXG4gICAgdmFyIHR0bDpudW1iZXIgPSAwO1xyXG4gICAgZm9yIChsZXQgaXRlbSBvZiBpdGVtcykgdHRsICs9IGl0ZW0ucmF0aW87XHJcblxyXG4gICAgY29uc3QgdGFyZ2V0ID0gX2lyYW5kKDAsIHR0bCwgcmFuZCk7XHJcbiAgICB2YXIgc3VtID0gMDtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xyXG4gICAgICAgIHN1bSArPSBpdGVtLnJhdGlvO1xyXG4gICAgICAgIGlmICh0YXJnZXQgPCBzdW0pIHtcclxuICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG4vLyDphY3liJfjga7jgrfjg6Pjg4Pjg5Xjg6tcclxuZXhwb3J0IGZ1bmN0aW9uIF9zaHVmZmxlQXJyYXk8VD4oYXJyYXk6IFRbXSwgcmFuZDogVF9mcmFuZCA9IGZyYW5kKTogVFtdIHtcclxuICAgIGxldCBzaHVmZmxlZEFycmF5ID0gWy4uLmFycmF5XTsgLy8g5YWD44Gu6YWN5YiX44KS5aSJ5pu044GX44Gq44GE44KI44GG44Gr44Kz44OU44O844GZ44KLXHJcbiAgICBmb3IgKGxldCBpID0gc2h1ZmZsZWRBcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgLy8g44Op44Oz44OA44Og44Gq5L2N572u44KS5rG65a6aXHJcbiAgICAgICAgY29uc3QgaiA9IF9pcmFuZCgwLCBpLCByYW5kKTtcclxuICAgICAgICAvLyDopoHntKDjga7lhaXjgozmm7/jgYhcclxuICAgICAgICBbc2h1ZmZsZWRBcnJheVtpXSwgc2h1ZmZsZWRBcnJheVtqXV0gPSBbc2h1ZmZsZWRBcnJheVtqXSwgc2h1ZmZsZWRBcnJheVtpXV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2h1ZmZsZWRBcnJheTsgLy8g44K344Oj44OD44OV44Or44GV44KM44Gf6YWN5YiX44KS6L+U44GZXHJcbn1cclxuXHJcbi8vIOS5seaVsOOBq+OCiOOCi+aWh+Wtl+WIl+eUn+aIkFxyXG5leHBvcnQgZnVuY3Rpb24gX3JhbmRvbV9zdHIobGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgbGVuZ3RoOyBpKyspIHN0ciArPSBfcmFuZG9tX0NoYXIoKTtcclxuICAgIHJldHVybiBzdHI7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fVXBwZXJTdHIobGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgbGVuZ3RoOyBpKyspIHN0ciArPSBfcmFuZG9tX1VwcGVyQ2hhcigpO1xyXG4gICAgcmV0dXJuIHN0cjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gX3JhbmRvbV9Mb3dlclN0cihsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZXQgc3RyID0gJyc7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBsZW5ndGg7IGkrKykgc3RyICs9IF9yYW5kb21fTG93ZXJDaGFyKCk7XHJcbiAgICByZXR1cm4gc3RyO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBfcmFuZG9tX1VwcGVyQ2hhcigpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdmFsID0gX2lyYW5kKDAsMjYpXHJcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSt2YWwpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBfcmFuZG9tX0xvd2VyQ2hhcigpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdmFsID0gX2lyYW5kKDAsMjYpXHJcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg5NSt2YWwpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBfcmFuZG9tX051bUNoYXIoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHZhbCA9IF9pcmFuZCgwLDkpXHJcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg0OCt2YWwpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBfcmFuZG9tX0NoYXIoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHZhbCA9IF9pcmFuZCgwLDYxKVxyXG4gICAgaWYgKHZhbCA8IDI2KSByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSt2YWwpO1xyXG4gICAgaWYgKHZhbCA8IDUyKSByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg5Nyt2YWwtMjYpO1xyXG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoNDgrdmFsLTUyKTtcclxufVxyXG4iLCJpbXBvcnQgZXhwcmVzcyAgICAgIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCBjcmVhdGVFcnJvciAgZnJvbSAnaHR0cC1lcnJvcnMnO1xyXG5pbXBvcnQgcGF0aCAgICAgICAgIGZyb20gXCJwYXRoXCI7XHJcblxyXG52YXIgdXNlcnNSb3V0ZXIgPSByZXF1aXJlKCcuL3JvdXRlcy91c2VycycpO1xyXG52YXIgbWFpZXhSb3V0ZXIgPSByZXF1aXJlKCcuL3JvdXRlcy9tYWlleCcpO1xyXG5cclxudmFyIGNvb2tpZVBhcnNlciA9IHJlcXVpcmUoJ2Nvb2tpZS1wYXJzZXInKTtcclxudmFyIGxvZ2dlciA9IHJlcXVpcmUoJ21vcmdhbicpO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuLy8gdmlldyBlbmdpbmUgc2V0dXBcclxuYXBwLnNldCgndmlld3MnLCBwYXRoLmpvaW4oX19kaXJuYW1lLCAndmlld3MnKSk7XHJcbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2VqcycpO1xyXG5cclxuYXBwLnVzZShsb2dnZXIoJ2RldicpKTtcclxuYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJ3B1YmxpYycpKSk7XHJcblxyXG4vL2FwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG4vL2FwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcclxuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XHJcbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xyXG5cclxuY29uc3Qgcm9vdFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbnJvb3RSb3V0ZXIuZ2V0KFxyXG4gIFwiL1wiLFxyXG4gIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICByZXMuc2VuZChcIldlbGNvbWUgdG8gdGhlIE1haSB3b3JsZCEgOi0pXCIpO1xyXG4gIH1cclxuKTtcclxuYXBwLnVzZShcIi9cIiwgICAgICByb290Um91dGVyKTtcclxuYXBwLnVzZShcIi91c2Vyc1wiLCB1c2Vyc1JvdXRlcik7XHJcbmFwcC51c2UoXCIvbWFpZXhcIiwgbWFpZXhSb3V0ZXIpO1xyXG5cclxuLy8gY2F0Y2ggNDA0IGFuZCBmb3J3YXJkIHRvIGVycm9yIGhhbmRsZXJcclxuYXBwLnVzZShmdW5jdGlvbihyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikge1xyXG4gIG5leHQoY3JlYXRlRXJyb3IoNDA0KSk7XHJcbn0pO1xyXG5cclxuLy8gZXJyb3IgaGFuZGxlclxyXG5hcHAudXNlKGZ1bmN0aW9uKGVycjogYW55LCByZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikge1xyXG4gIC8vIHNldCBsb2NhbHMsIG9ubHkgcHJvdmlkaW5nIGVycm9yIGluIGRldmVsb3BtZW50XHJcbiAgcmVzLmxvY2Fscy5tZXNzYWdlID0gZXJyLm1lc3NhZ2U7XHJcbiAgcmVzLmxvY2Fscy5lcnJvciA9IHJlcS5hcHAuZ2V0KCdlbnYnKSA9PT0gJ2RldmVsb3BtZW50JyA/IGVyciA6IHt9O1xyXG5cclxuICAvLyByZW5kZXIgdGhlIGVycm9yIHBhZ2VcclxuICByZXMuc3RhdHVzKGVyci5zdGF0dXMgfHwgNTAwKTtcclxuICByZXMucmVuZGVyKCdlcnJvcicpO1xyXG59KTtcclxuXHJcbmNvbnN0IHBvcnQgPSBub3JtYWxpemVQb3J0KHByb2Nlc3MuZW52LlBPUlQgfHwgJzMwMDAnKTtcclxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcclxufSk7XHJcblxyXG4vKipcclxuICogTm9ybWFsaXplIGEgcG9ydCBpbnRvIGEgbnVtYmVyLCBzdHJpbmcsIG9yIGZhbHNlLlxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVBvcnQodmFsOiBhbnkpIHtcclxuICB2YXIgcG9ydCA9IHBhcnNlSW50KHZhbCwgMTApO1xyXG5cclxuICBpZiAoaXNOYU4ocG9ydCkpIHtcclxuICAgIC8vIG5hbWVkIHBpcGVcclxuICAgIHJldHVybiB2YWw7XHJcbiAgfVxyXG5cclxuICBpZiAocG9ydCA+PSAwKSB7XHJcbiAgICAvLyBwb3J0IG51bWJlclxyXG4gICAgcmV0dXJuIHBvcnQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcDtcclxuIiwiXHJcbmNvbnN0IGRiX2hvc3QgPSAnc3FsJztcclxuLy8g5Yip55So44Kv44Op44K5562J44Gu6Kqt44G/6L6844G/XHJcblxyXG4vLyDjgqjjg6njg7zjg6Hjg4Pjgrvjg7zjgrjnrYnjgpLkv53lrZjjg7vooajnpLrjgZnjgovjgq/jg6njgrlcclxuaW1wb3J0IHtDX0RzcE1lc3NhZ2UgfSAgICAgZnJvbSAnQGRfdXRsL0NfRHNwTWVzc2FnZSc7XHJcblxyXG4vLyDkvY3nva7jgajmlrnlkJHjgpLooajjgZnjgq/jg6njgrlcclxuaW1wb3J0IHsgQ19Qb2ludERpciB9ICAgICAgZnJvbSAnQGRfbWRsL0NfUG9pbnREaXInO1xyXG5cclxuLy8g5rue5Zyo5L2N572u44KS56S644GZ44Kv44Op44K5XHJcbmltcG9ydCB7IENfTW92YWJsZVBvaW50IH0gIGZyb20gJ0BkX21kbC9DX01vdmFibGVQb2ludCc7XHJcblxyXG4vLyDjgq7jg6vjg4njgq/jg6njgrnlhajoiKxcclxuaW1wb3J0IHtDX0d1aWxkfSAgICAgICAgICAgZnJvbSAnQGRfbWRsL0NfR3VpbGQnO1xyXG5cclxuLy8g44OR44O844OG44Kj44O844Kv44Op44K55YWo6IisXHJcbmltcG9ydCB7Q19UZWFtfSAgICAgICAgICAgIGZyb20gJ0BkX21kbC9DX1RlYW0nO1xyXG5cclxuLy8g44OS44O844Ot44O844Kv44Op44K55YWo6IisXHJcbmltcG9ydCB7Q19IZXJvLCBKU09OX0hlcm99IGZyb20gICdAZF9tZGwvQ19IZXJvJztcclxuXHJcbi8vIOOCu+ODvOODluODh+ODvOOCvyjjgq/jg6njgqTjgqLjg7Pjg4jjgajjga7pgKPmkLop5YWo6IisXHJcbmltcG9ydCB7Q19TYXZlRGF0YSwgSlNPTl9TYXZlRGF0YX0gZnJvbSAnQGRfbWRsL0NfU2F2ZURhdGEnO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOS4u+OAgOWHpuOAgOeQhiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuaW50ZXJmYWNlIElfR2xvYmFsQXJndW1lbnRzIHtcclxuICAgIG1vZGU/OiBzdHJpbmc7XHJcbiAgICBubWJyPzogbnVtYmVyO1xyXG4gICAgcGlkPzogIG51bWJlcjtcclxuICAgIGhyZXNfSlNPTj86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIElfUmV0dXJuIHtcclxuICAgIGVjb2RlOiBudW1iZXI7XHJcbiAgICBlbXNnOiAgc3RyaW5nO1xyXG4gICAgc2F2ZT86IEpTT05fU2F2ZURhdGE7XHJcbiAgICBkYXRhPzoge1xyXG4gICAgICAgIGhyZXM6SlNPTl9IZXJvW107XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEdldHRpbmcgTmV3IEdhbWUgc3RhcnRpaW5nIGZyb20gR3VsZFxyXG5leHBvcnQgZnVuY3Rpb24gbmV3R3VsZChhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogSV9SZXR1cm4ge1xyXG4gICAgaW5pdChhcmcpO1xyXG4gICAgY29uc3QgIGd1bGQgPSBuZXdfZ3VsZCgpO1xyXG4gICAgY29uc3QgIHRlYW0gPSBuZXdfdGVhbShndWxkKTtcclxuICAgIGNvbnN0ICBzYXZlID0gbmV3X3NhdmUoZ3VsZCwgdGVhbSk7XHJcbiAgICByZXR1cm4gc2F2ZV9lbmNvZGUoMCwgc2F2ZSk7XHJcbn1cclxuXHJcbi8vIEdldHRpbmcgQW55IE5ldyBIZW9yZXMgZGF0YVxyXG5leHBvcnQgZnVuY3Rpb24gYWxsSHJlcyhhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogSV9SZXR1cm4ge1xyXG4gICAgaW5pdChhcmcpO1xyXG4gICAgY29uc3QgIGhyZXMgPSBuZXdfaHJlcygpO1xyXG4gICAgcmV0dXJuIGhyZXNfZW5jb2RlKDAsICBocmVzKTtcclxufVxyXG5cclxuIFxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLyAgIOOCteODluODq+ODvOODgeODs1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5mdW5jdGlvbiBlcnJfZW5jb2RlKGNvZGU6IG51bWJlciwgbXNnczogc3RyaW5nW10pOiBJX1JldHVybiB7XHJcbiAgICBjb25zdCByZXRfYXNzb2M6IElfUmV0dXJuID0ge2Vjb2RlOmNvZGUsIGVtc2c6ICcnfTtcclxuICAgIGZvciAoY29uc3QgbXNnIG9mIG1zZ3MpIHJldF9hc3NvYy5lbXNnICs9IG1zZzsgXHJcbiAgICByZXR1cm4gcmV0X2Fzc29jO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlX2VuY29kZShjb2RlOiBudW1iZXIsIHNhdmU6IENfU2F2ZURhdGEpOiBJX1JldHVybiB7XHJcbiAgICBjb25zdCByZXRfYXNzb2M6IElfUmV0dXJuID0ge2Vjb2RlOjAsIGVtc2c6ICcnfTtcclxuXHJcbiAgICBpZiAoY29kZSAhPT0gMCB8fCBndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICByZXR1cm4gZXJyX2VuY29kZShjb2RlLCBndi5tZXMuZ2V0X2Vycl9tZXNzYWdlcygpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0X2Fzc29jLmVjb2RlID0gMDtcclxuICAgICAgICByZXRfYXNzb2MuZW1zZyAgPSAnU3RhdHVzIE9LJztcclxuICAgICAgICByZXRfYXNzb2Muc2F2ZSAgPSBzYXZlLmVuY29kZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXRfYXNzb2M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhyZXNfZW5jb2RlKGNvZGU6IG51bWJlciwgaHJlczogQ19IZXJvW10pOiBJX1JldHVybiB7XHJcbiAgICBjb25zdCByZXRfYXNzb2M6IElfUmV0dXJuID0ge2Vjb2RlOjAsIGVtc2c6ICcnfTtcclxuXHJcbiAgICBpZiAoY29kZSAhPT0gMCB8fCBndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICByZXR1cm4gZXJyX2VuY29kZShjb2RlLCBndi5tZXMuZ2V0X2Vycl9tZXNzYWdlcygpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0X2Fzc29jLmVjb2RlID0gMDtcclxuICAgICAgICByZXRfYXNzb2MuZW1zZyAgPSAnU3RhdHVzIE9LJztcclxuXHJcbiAgICAgICAgY29uc3QgaHJlc19hcnJheTogSlNPTl9IZXJvW10gPSBbXTtcclxuICAgICAgICBmb3IoY29uc3QgaGVybyBvZiBocmVzKSB7XHJcbiAgICAgICAgICAgIGhyZXNfYXJyYXkucHVzaChoZXJvLmVuY29kZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0X2Fzc29jLmRhdGEgID0ge2hyZXM6IGhyZXNfYXJyYXl9O1xyXG4gICAgICAgIHJldHVybiByZXRfYXNzb2M7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld19ocmVzKCk6IENfSGVyb1tdIHtcclxuICAgIGNvbnN0IGhlcm9lczogQ19IZXJvW10gPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2Eubm1icjsgaSsrKSB7XHJcbiAgICAgICAgaGVyb2VzLnB1c2goKG5ldyBDX0hlcm8oKSkucmFuZG9tX21ha2UoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGVyb2VzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdfc2F2ZShndWxkOiBDX0d1aWxkLCB0ZWFtOiBDX1RlYW0pOiBDX1NhdmVEYXRhIHtcclxuICAgIHJldHVybiBuZXcgQ19TYXZlRGF0YSh7XHJcbiAgICAgICAgcGxheWVyX2lkOiBnYS5waWQsXHJcbiAgICAgICAgYXV0b19tb2RlOiAnMCcsXHJcbiAgICAgICAgaXNfYWN0aXZlOiAnMScsXHJcbiAgICAgICAgaXNfZGVsZXRlOiAnMCcsXHJcblxyXG4gICAgICAgIGFsbF9tdnB0OiAgIFtdLFxyXG4gICAgICAgIGFsbF9tYXplOiAgIFtdLFxyXG4gICAgICAgIGFsbF9ndWxkOiAgIFtndWxkLmVuY29kZSgpXSwgXHJcbiAgICAgICAgYWxsX3RlYW06ICAgW3RlYW0uZW5jb2RlKCldLFxyXG5cclxuLy9sb2NcclxuICAgICAgICBteXBvczogICAgICB0ZWFtLmdldF9sb2MoKS5lbmNvZGUoKSwgXHJcbn0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdfZ3VsZCgpOiBDX0d1aWxkIHtcclxuICAgIGNvbnN0IGd1bGQgPSBuZXcgQ19HdWlsZCgpO1xyXG4gICAgZ3VsZC5kZWNvZGUoe25hbWU6ICflp4vjgb7jgorjga7ooZfjga7lhpLpmbrogIXjgq7jg6vjg4knfSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgICAgZ3VsZC5hZGRfaGVybygobmV3IENfSGVybygpKS5yYW5kb21fbWFrZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZ3VsZDtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV3X3RlYW0oZ3VsZDogQ19HdWlsZCk6IENfVGVhbSB7XHJcbiAgICBjb25zdCB0ZWFtID0gbmV3IENfVGVhbSgpO1xyXG4vL2xvY1xyXG4gICAgY29uc3QgbG9jID0gbmV3IENfTW92YWJsZVBvaW50KCk7XHJcbiAgICBsb2MuZGVjb2RlKHtcclxuICAgICAgICBraW5kOiAgICdHdWxkJyxcclxuICAgICAgICBuYW1lOiAgICBndWxkLmdldF9uYW1lKCksXHJcbiAgICAgICAgbG9jX3VpZDogZ3VsZC51aWQoKSxcclxuICAgICAgICBsb2NfcG9zOiBuZXcgQ19Qb2ludERpcih7XHJcbiAgICAgICAgICAgICd4JzogMCxcclxuICAgICAgICAgICAgJ3knOiAwLFxyXG4gICAgICAgICAgICAneic6IDAsXHJcbiAgICAgICAgICAgICdkJzogMCxcclxuICAgICAgICB9KSxcclxuICAgICAgICB0ZWFtX3VpZDogdGVhbS51aWQoKSxcclxuICAgIH0pO1xyXG4gICAgdGVhbS5zZXRfcHJwKHtuYW1lOifjgbLjgojjgZPjgZXjgpPjg4Hjg7zjg6AnfSk7XHJcbi8vbG9jXHJcbiAgICB0ZWFtLnNldF9sb2MobG9jKTtcclxuXHJcbiAgICAvLyAgICB0ZWFtLnNldF9sb2MoKG5ldyBDX01vdmFibGVQb2ludCgpKS5kZWNvZGUobG9jLmVuY29kZSgpKSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE7IGkrKykgeyBcclxuICAgICAgICB0ZWFtLmFkZF9oZXJvKChuZXcgQ19IZXJvKCkpLnJhbmRvbV9tYWtlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZWFtO1xyXG59XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Yid44CA5pyf44CA6Kit44CA5a6aICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5sZXQgZ3Y6IENfR2xvYmFsVmFyO1xyXG5sZXQgZ2E6IENfR2xvYmFsQXJndW1lbnRzO1xyXG5cclxuZnVuY3Rpb24gaW5pdChvYmo6IElfR2xvYmFsQXJndW1lbnRzKTogdm9pZCB7XHJcbiAgICBndiA9IG5ldyBDX0dsb2JhbFZhcigpO1xyXG4gICAgZ2EgPSBuZXcgQ19HbG9iYWxBcmd1bWVudHMob2JqKTtcclxuICAgIHJldHVybjtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vL1xyXG4vLy8vLyAgICAg44Kv44Op44K55a6j6KiAXHJcbi8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIOWkp+Wfn+WkieaVsOOBruioreWumlxyXG5jbGFzcyBDX0dsb2JhbFZhciB7XHJcbiAgICBwdWJsaWMgbWVzOiBDX0RzcE1lc3NhZ2U7XHJcblxyXG4gICAgcHVibGljIE1hemVfc2l6ZV94ID0gMjE7XHJcbiAgICBwdWJsaWMgTWF6ZV9zaXplX3kgPSAyMTtcclxuICAgIHB1YmxpYyBMaW1pdF9vZl9yb29tICAgICA9IDU7XHJcbiAgICBwdWJsaWMgTWF4X3NpemVfb2Zfcm9vbSAgPSAzO1xyXG4gICAgcHVibGljIE1heF9vZl9NYXplX0Zsb29yID0gMztcclxuXHJcbiAgICBwdWJsaWMgdGVhbV9hc3NvYzogQ19UZWFtW10gID0gW107XHJcbiAgICBwdWJsaWMgdGVhbTogICAgICAgQ19UZWFtO1xyXG4gICAgcHVibGljIGd1bGRfYXNzb2M6IENfR3VpbGRbXSA9IFtdO1xyXG4gICAgcHVibGljIGd1bGQ6ICAgICAgIENfR3VpbGQ7XHJcbiAgICBwdWJsaWMgaGVyb2VzOiAgICAgQ19IZXJvW10gID0gW107XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubWVzICA9IG5ldyBDX0RzcE1lc3NhZ2UoIC8qIGlzSFRNTCA9ICovIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnRlYW0gPSBuZXcgQ19UZWFtKCk7XHJcbiAgICAgICAgdGhpcy5ndWxkID0gbmV3IENfR3VpbGQoKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gUE9TVOW8leaVsOOBruioreWumlxyXG5jbGFzcyBDX0dsb2JhbEFyZ3VtZW50cyB7XHJcbiAgICBwdWJsaWMgbW9kZTogc3RyaW5nO1xyXG4gICAgcHVibGljIG5tYnI6IG51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgcGlkOiAgbnVtYmVyID0gMTtcclxuICAgIHB1YmxpYyBocmVzX0pTT046IHN0cmluZ3x1bmRlZmluZWQgPSAnJztcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob2JqOiBJX0dsb2JhbEFyZ3VtZW50c3x1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLm1vZGUgPSBvYmo/Lm1vZGUgPz8gJ3Vua25vd24nO1xyXG4gICAgICAgIHRoaXMubm1iciA9IG9iaj8ubm1iciAhPT0gdW5kZWZpbmVkICYmICFpc05hTihvYmoubm1icikgPyBOdW1iZXIob2JqLm5tYnIpIDogMTtcclxuICAgICAgICB0aGlzLnBpZCAgPSBvYmo/LnBpZCAgIT09IHVuZGVmaW5lZCAmJiAhaXNOYU4ob2JqLnBpZCkgID8gTnVtYmVyKG9iai5waWQpICA6IDE7XHJcbiAgICAgICAgdGhpcy5ocmVzX0pTT04gPSBvYmo/LmhyZXNfSlNPTiA/PyB1bmRlZmluZWQ7XHJcbi8vZGVidWcgICAgICAgIGNvbnNvbGUubG9nKGBtb2RlPSR7dGhpcy5tb2RlfSwgbm1icj0ke3RoaXMubm1icn0sIHBpZCA9ICR7dGhpcy5waWR9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbm1vZHVsZS5leHBvcnRzID0gbmV3R2FtZTtcclxubW9kdWxlLmV4cG9ydHMgPSBuZXdIZXJvO1xyXG4qLyIsIi8vIOWIqeeUqOOCr+ODqeOCueetieOBruiqreOBv+i+vOOBv1xyXG5cclxuLy8g44Ko44Op44O844Oh44OD44K744O844K4562J44KS5L+d5a2Y44O76KGo56S644GZ44KL44Kv44Op44K5XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9IGZyb20gJ0BkX3V0bC9DX0RzcE1lc3NhZ2UnO1xyXG5cclxuLy8gTXlTcWzjgpLmibHjgYbjgq/jg6njgrlcclxuaW1wb3J0IG15c3FsICAgICAgICAgICAgZnJvbSBcIm15c3FsMi9wcm9taXNlXCI7XHJcblxyXG4vLyBTYXZlL0xvYWTplqLkv4Ljgq/jg6njgrnlhajoiKxcclxuaW1wb3J0IHsgQ19TYXZlSW5mbywgSlNPTl9TYXZlSW5mbyB9ICAgIGZyb20gJ0BkX21kbC9DX1NhdmVJbmZvJztcclxuaW1wb3J0IHsgQ19TYXZlRGF0YSwgSlNPTl9TYXZlRGF0YSB9ICAgIGZyb20gJ0BkX21kbC9DX1NhdmVEYXRhJztcclxuaW1wb3J0IHsgQ19TYXZlRGF0YVJEQiwgQ19TYXZlSW5mb1JEQiB9IGZyb20gJ0BkX3JkYi9DX1NhdmVEYXRhUkRCJztcclxuXHJcbnR5cGUgZGJfY29ubmVjdCA9IG15c3FsLlBvb2xDb25uZWN0aW9uO1xyXG5sZXQgIGRiX21haTogZGJfY29ubmVjdDtcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Li744CA5Yem44CA55CGICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbnRlcmZhY2UgSV9SZXR1cm4ge1xyXG4gICAgZWNvZGU6ICAgICAgbnVtYmVyO1xyXG4gICAgZW1zZzogICAgICAgc3RyaW5nO1xyXG4gICAgc2F2ZV9pbmZvPzogSlNPTl9TYXZlSW5mb1tdO1xyXG4gICAgc2F2ZT86ICAgICAgSlNPTl9TYXZlRGF0YTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbmZvKGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBQcm9taXNlPElfUmV0dXJuPiB7XHJcbiAgICBhd2FpdCBpbml0KGFyZyk7XHJcblxyXG4gICAgbGV0ICAgcmV0X3ZhbDogSV9SZXR1cm47XHJcbiAgICBjb25zdCBzYXZlX2FycmF5ID0gYXdhaXQgQ19TYXZlSW5mb1JEQi5nZXRfbGlzdF9ieV9waWQoZGJfbWFpLCBndi5tZXMsIGdhLnBpZCk7XHJcbiAgICBpZiAoZ3YubWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgcmV0X3ZhbCA9IGVycl9lbmNvZGUoNTAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0X3ZhbCA9IGFsbF9zYXZlX2luZm8oMCwgc2F2ZV9hcnJheSk7XHJcbiAgICB9XHJcbiAgICBmaW5sKCk7XHJcbiAgICByZXR1cm4gcmV0X3ZhbDtcclxufVxyXG5cclxuLypcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRtcF9sb2FkKGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBQcm9taXNlPElfUmV0dXJuPiB7XHJcbiAgICBpbml0KGFyZyk7XHJcbiAgICBjb25zdCByZXRfdmFsID0gYXdhaXQgX2xvYWQoZ2EucGlkLCAxMDAsIDMzMCk7XHJcbiAgICBmaW5sKCk7XHJcbiAgICByZXR1cm4gcmV0X3ZhbDtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5zdGFudF9sb2FkKGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBQcm9taXNlPElfUmV0dXJuPiB7XHJcbiAgICBpbml0KGFyZyk7XHJcbiAgICBjb25zdCByZXRfdmFsID0gYXdhaXQgX2xvYWQoZ2EucGlkLCAxMDEsIDMxMCk7XHJcbiAgICBmaW5sKCk7XHJcbiAgICByZXR1cm4gcmV0X3ZhbDtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gVURfbG9hZChhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgaW5pdChhcmcpO1xyXG4gICAgY29uc3QgcmV0X3ZhbCA9IGF3YWl0IF9sb2FkKGdhLnBpZCwgMTAyLCAzNTApO1xyXG4gICAgZmlubCgpO1xyXG4gICAgcmV0dXJuIHJldF92YWw7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJlZm9yZV9sb2FkKGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBQcm9taXNlPElfUmV0dXJuPiB7XHJcbiAgICBpbml0KGFyZyk7XHJcbiAgICBjb25zdCByZXRfdmFsID0gYXdhaXQgX2xvYWQoZ2EucGlkLCAxMDMsIDM4MCk7XHJcbiAgICBmaW5sKCk7XHJcbiAgICByZXR1cm4gcmV0X3ZhbDtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhbF9sb2FkKGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBQcm9taXNlPElfUmV0dXJuPiB7XHJcbiAgICBpbml0KGFyZyk7XHJcbiAgICBjb25zdCByZXRfdmFsID0gYXdhaXQgX2xvYWQoZ2EucGlkLCBnYS51bm8sIDMwKTtcclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcbiovXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWQoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGF3YWl0IGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHBpZCA9IGdhLnBpZDtcclxuICAgIGxldCAgIHVubzogbnVtYmVyO1xyXG4gICAgbGV0ICAgZW5vOiBudW1iZXI7XHJcbiAgICBzd2l0Y2ggKGdhLm1vZGUpIHtcclxuICAgICAgICBjYXNlICd0bXBfbG9hZCc6ICAgICAgdW5vID0gMTAwOyAgICBlbm8gPSAzMzA7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2luc3RhbnRfbG9hZCc6ICB1bm8gPSAxMDE7ICAgIGVubyA9IDMxMDsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnVURfbG9hZCc6ICAgICAgIHVubyA9IDEwMjsgICAgZW5vID0gMzUwOyBicmVhaztcclxuICAgICAgICBjYXNlICdiZWZvcmVfbG9hZCc6ICAgdW5vID0gMTAzOyAgICBlbm8gPSAzNzA7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2dlbmVyYWxfbG9hZCc6ICB1bm8gPSBnYS51bm87IGVubyA9IDM5MDsgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDogICAgICAgICAgICAgIHJldHVybiBlcnJfZW5jb2RlKDg4ODgpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmV0X3ZhbCA9IGF3YWl0IF9sb2FkKHBpZCwgdW5vLCBlbm8pO1xyXG4gICAgZmlubCgpO1xyXG4gICAgcmV0dXJuIHJldF92YWw7XHJcbn1cclxuXHJcblxyXG4vKlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdG1wX3NhdmUoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfc2F2ZShnYS5waWQsIDEwMCwgJ19fVGVtcG9yYXJ5U2F2ZURhdGFfXycsIDIzMCk7XHJcbiAgICBmaW5sKCk7XHJcbiAgICByZXR1cm4gcmV0X3ZhbDtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5zdGFudF9zYXZlKGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBQcm9taXNlPElfUmV0dXJuPiB7XHJcbiAgICBpbml0KGFyZyk7XHJcbiAgICBjb25zdCByZXRfdmFsID0gYXdhaXQgX3NhdmUoZ2EucGlkLCAxMDEsICdfX0luc3RhbnRTYXZlRGF0YV9fJywgMjEwKTtcclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBVRF9zYXZlKGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBQcm9taXNlPElfUmV0dXJuPiB7XHJcbiAgICBpbml0KGFyZyk7XHJcbiAgICBjb25zdCByZXRfdmFsID0gYXdhaXQgX3NhdmUoZ2EucGlkLCAxMDIsICdfX1VwRG93blNhdmVEYXRhX18nLCAyNTApO1xyXG4gICAgZmlubCgpO1xyXG4gICAgcmV0dXJuIHJldF92YWw7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJlZm9yZV9zYXZlKGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBQcm9taXNlPElfUmV0dXJuPiB7XHJcbiAgICBpbml0KGFyZyk7XHJcbiAgICBjb25zdCByZXRfdmFsID0gYXdhaXQgX3NhdmUoZ2EucGlkLCAxMDMsICdfX0JlZm9yZVRoZUV2ZW50RGF0YV9fJywgMjgwKTtcclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmFsX3NhdmUoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfc2F2ZShnYS5waWQsIGdhLnNhdmU/LnVuaXFfbm8/Pzk5LCBnYS5zYXZlPy50aXRsZT8/Jz8/PycsIDIzMCk7XHJcbiAgICBmaW5sKCk7XHJcbiAgICByZXR1cm4gcmV0X3ZhbDtcclxufVxyXG4qL1xyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlKGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBQcm9taXNlPElfUmV0dXJuPiB7XHJcbiAgICBhd2FpdCBpbml0KGFyZyk7XHJcbiAgICBjb25zdCBwaWQgID0gZ2Euc2F2ZT8ucGxheWVyX2lkPz8tMjtcclxuICAgIGxldCAgIHVubzogICBudW1iZXI7XHJcbiAgICBsZXQgICBlbm86ICAgbnVtYmVyO1xyXG4gICAgbGV0ICAgdGl0bGU6IHN0cmluZztcclxuICAgIHN3aXRjaCAoZ2EubW9kZSkge1xyXG4gICAgICAgIGNhc2UgJ3RtcF9zYXZlJzogICAgICB1bm8gPSAxMDA7ICAgIGVubyA9IDIzMDsgdGl0bGU9ICdfX1RlbXBvcmFyeVNhdmVEYXRhX18nOyAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnaW5zdGFudF9zYXZlJzogIHVubyA9IDEwMTsgICAgZW5vID0gMjEwOyB0aXRsZT0gJ19fSW5zdGFudFNhdmVEYXRhX18nOyAgICBicmVhaztcclxuICAgICAgICBjYXNlICdVRF9zYXZlJzogICAgICAgdW5vID0gMTAyOyAgICBlbm8gPSAyNTA7IHRpdGxlPSAnX19VcERvd25TYXZlRGF0YV9fJzsgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2JlZm9yZV9zYXZlJzogICB1bm8gPSAxMDM7ICAgIGVubyA9IDI3MDsgdGl0bGU9ICdfX0JlZm9yZVRoZUV2ZW50RGF0YV9fJzsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZ2VuZXJhbF9zYXZlJzogIHVubyA9IGdhLnNhdmU/LnVuaXFfbm8/Pzk5OyBlbm8gPSAyOTA7IHRpdGxlID0gZ2Euc2F2ZT8udGl0bGU/Pyc/Pz8nOyAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDogICAgICAgICAgICAgIHJldHVybiBlcnJfZW5jb2RlKDk5OTkpO1xyXG4gICAgfVxyXG4vLyAgICBjb25zb2xlLmVycm9yKGBwaWQ9JHtwaWR9LCB1bm89JHt1bm99LCB0aXRsZT0ke3RpdGxlfSwgZW5vPSR7ZW5vfWApO1xyXG4gICAgY29uc3QgcmV0X3ZhbCA9IGF3YWl0IF9zYXZlKHBpZCwgdW5vLCB0aXRsZSwgZW5vKTtcclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLyAgIOOCteODluODq+ODvOODgeODs1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5hc3luYyBmdW5jdGlvbiBfbG9hZChwaWQ6IG51bWJlciwgdW5vOiBudW1iZXIsIGVjb2RlOiBudW1iZXIpOiBQcm9taXNlPElfUmV0dXJuPiB7XHJcbiAgICBhd2FpdCB0cl9iZWdpbihkYl9tYWkpO1xyXG5cclxuICAgIC8vIOODpuODi+ODvOOCr+ODu+ODiuODs+ODkOODvOOBp3NhdmXjg4fjg7zjgr/jgpLmjqLjgZnjgILopovjgaTjgYvjgozjgbBzYXZlX2lk44Gr44K744OD44OI44GZ44KLXHJcbiAgICBjb25zdCBzYXZlX2lkID0gYXdhaXQgQ19TYXZlSW5mb1JEQi5nZXRfc2F2ZV9pZF9hdF90YmwoZGJfbWFpLCBndi5tZXMsIHBpZCwgdW5vKTtcclxuICAgIGlmIChndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICBhd2FpdCB0cl9yb2xsYmFjayhkYl9tYWkpO1xyXG4gICAgICAgIHJldHVybiBhbGxfc2F2ZV9kYXRhKGVjb2RlLCB1bmRlZmluZWQpOztcclxuICAgIH1cclxuXHJcbiAgICAvLyBtZXpl44KEdGVhbeetieOBrumWoumAo+OBmeOCi+ODh+ODvOOCv+OCkuWPjeaYoOOBmeOCi1xyXG4gICAgY29uc3Qgc2F2ZV9kYXRhMDIgPSBhd2FpdCBDX1NhdmVEYXRhUkRCLmdldF9mcm9tX3JkYihkYl9tYWksIGd2Lm1lcywgc2F2ZV9pZCk7XHJcbiAgICBpZiAoZ3YubWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgYXdhaXQgdHJfcm9sbGJhY2soZGJfbWFpKTtcclxuICAgICAgICByZXR1cm4gYWxsX3NhdmVfZGF0YShlY29kZSwgdW5kZWZpbmVkKTs7XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgdHJfY29tbWl0KGRiX21haSk7XHJcbiAgICByZXR1cm4gYWxsX3NhdmVfZGF0YSgwLCBzYXZlX2RhdGEwMik7XHJcblxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBfc2F2ZShwaWQ6IG51bWJlciwgdW5pcV9ubzogbnVtYmVyLCB0aXRsZTogc3RyaW5nLCBlY29kZTogbnVtYmVyKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgaWYgKGdhLnNhdmUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGFsbF9zYXZlX2RhdGEoZWNvZGUsIHVuZGVmaW5lZCk7XHJcbiAgICBnYS5zYXZlLnBsYXllcl9pZCA9IHBpZDtcclxuICAgIGdhLnNhdmUudW5pcV9ubyAgID0gdW5pcV9ubztcclxuICAgIGdhLnNhdmUudGl0bGUgICAgID0gdGl0bGU7XHJcbi8vY29uc29sZS5lcnJvcihgcGlkPSR7cGlkfSwgdW5vPSR7dW5pcV9ub30sIHRpdGxlPSR7dGl0bGV9YCk7XHJcbiAgICBhd2FpdCB0cl9iZWdpbihkYl9tYWkpO1xyXG5cclxuICAgIC8vIOODpuODi+ODvOOCr+ODu+ODiuODs+ODkOODvOOBp3NhdmXjg4fjg7zjgr/jgpLmjqLjgZnjgIJcclxuICAgIGNvbnN0IHNhdmVfaWQgPSBhd2FpdCBDX1NhdmVJbmZvUkRCLmdldF9zYXZlX2lkX2F0X3RibChkYl9tYWksIGd2Lm1lcywgcGlkLCB1bmlxX25vKTtcclxuICAgIGlmIChndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICBhd2FpdCB0cl9yb2xsYmFjayhkYl9tYWkpO1xyXG4gICAgICAgIHJldHVybiBhbGxfc2F2ZV9kYXRhKGVjb2RlICsgMTAsIGdhLnNhdmUpO1xyXG4gICAgfVxyXG4gICAgLy8g5ZCM44GYaWTjga7ml6LlrZjjg4fjg7zjgr/jgYzmnInjgaPjgZ/jgonkuIDml6bliYrpmaTjgZnjgotcclxuLy9kZWJ1ZyBjb25zb2xlLmVycm9yKGBzYXZlX2lkID0gJHtzYXZlX2lkfWApO1xyXG4gICAgaWYgKHNhdmVfaWQgPiAwKSB7XHJcbiAgICAgICAgY29uc3QgcnNsdDAxID0gYXdhaXQgQ19TYXZlRGF0YVJEQi5kZWxfdG9fcmRiKGRiX21haSwgZ3YubWVzLCBzYXZlX2lkKTsgXHJcbiAgICAgICAgaWYgKGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICBhd2FpdCB0cl9yb2xsYmFjayhkYl9tYWkpO1xyXG4gICAgICAgICAgICByZXR1cm4gYWxsX3NhdmVfZGF0YShlY29kZSArIDMzLCBnYS5zYXZlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDmlLnjgoHjgaYo5Yil44Gu44Os44Kz44O844OJ44GrKeOCu+ODvOODluOBmeOCi1xyXG4gICAgY29uc3QgcnNsdDAyID0gYXdhaXQgQ19TYXZlRGF0YVJEQi5zZXRfdG9fcmRiKGRiX21haSwgZ3YubWVzLCBnYS5zYXZlKTtcclxuICAgIGlmIChyc2x0MDIgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgYXdhaXQgdHJfcm9sbGJhY2soZGJfbWFpKTtcclxuICAgICAgICByZXR1cm4gYWxsX3NhdmVfZGF0YShlY29kZSArIDIzLCBnYS5zYXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCB0cl9jb21taXQoZGJfbWFpKTtcclxuICAgIHJldHVybiBhbGxfc2F2ZV9kYXRhKDAsIGdhLnNhdmUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbGxfc2F2ZV9kYXRhKGNvZGU6IG51bWJlciwgc2F2ZTogQ19TYXZlRGF0YXx1bmRlZmluZWQpOiBJX1JldHVybiB7XHJcbiAgICBsZXQgcmV0X3ZhbDogSV9SZXR1cm47XHJcblxyXG4gICAgaWYgKGNvZGUgIT09IDAgfHwgZ3YubWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgcmV0X3ZhbCA9IG5ldyBDX0VyclJldHVybihjb2RlLCBndi5tZXMuZ2V0X2Vycl9tZXNzYWdlcygpLmpvaW4oXCJcXG5cIikpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXRfdmFsID0gbmV3IENfTm9yUmV0dXJuKCk7XHJcbiAgICAgICAgaWYgKHNhdmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXRfdmFsLnNhdmUgPSBzYXZlLmVuY29kZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldF92YWwuc2F2ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJldF92YWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFsbF9zYXZlX2luZm8oY29kZTogbnVtYmVyLCBzYXZlX2xpc3Q6IENfU2F2ZUluZm9bXSk6IElfUmV0dXJuIHtcclxuICAgIGxldCByZXRfdmFsOiBJX1JldHVybjtcclxuXHJcbiAgICBpZiAoY29kZSAhPT0gMCB8fCBndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICByZXRfdmFsID0gbmV3IENfRXJyUmV0dXJuKGNvZGUsIGd2Lm1lcy5nZXRfZXJyX21lc3NhZ2VzKCkuam9pbihcIlxcblwiKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldF92YWwgPSBuZXcgQ19Ob3JSZXR1cm4oKTtcclxuLy8gICAgICAgIHJldF92YWwuc2F2ZV9pbmZvID0gc2F2ZV9saXN0O1xyXG4gICAgICAgIGNvbnN0IHJldF9hcnJheTogSlNPTl9TYXZlRGF0YVtdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBzYXZlX2VsbSBvZiBzYXZlX2xpc3QpIHJldF9hcnJheS5wdXNoKHNhdmVfZWxtLmVuY29kZSgpKTtcclxuICAgICAgICByZXRfdmFsLnNhdmVfaW5mbyA9IHJldF9hcnJheTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmV0X3ZhbDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBlcnJfZW5jb2RlKGNvZGU6IG51bWJlcik6IElfUmV0dXJuIHtcclxuICAgIGNvbnN0IHJldF9hc3NvYzogSV9SZXR1cm4gPSB7ZWNvZGU6Y29kZSwgZW1zZzogJyd9O1xyXG4gICAgZm9yIChjb25zdCBtc2cgb2YgZ3YubWVzLmdldF9lcnJfbWVzc2FnZXMoKSkgcmV0X2Fzc29jLmVtc2cgKz0gbXNnICsgXCJcXG5cIjsgXHJcbiAgICByZXR1cm4gcmV0X2Fzc29jO1xyXG59XHJcblxyXG5cclxuY2xhc3MgQ19Ob3JSZXR1cm4gaW1wbGVtZW50cyBJX1JldHVybiB7XHJcbiAgICBwdWJsaWMgZWNvZGU6ICAgbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBlbXNnOiAgICBzdHJpbmcgPSAnU3RhdHVzIE9LJztcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuXHJcbmNsYXNzIENfRXJyUmV0dXJuIGltcGxlbWVudHMgSV9SZXR1cm4ge1xyXG4gICAgcHVibGljIGVjb2RlOiAgIG51bWJlciA9IDEwMDA7XHJcbiAgICBwdWJsaWMgZW1zZzogICAgc3RyaW5nID0gJ2Vycm9yJztcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihlY29kZTogbnVtYmVyLCBlbXNnOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVjb2RlICA9IGVjb2RlO1xyXG4gICAgICAgIHRoaXMuZW1zZyAgID0gZW1zZztcclxuICAgIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Yid44CA5pyf44CA6Kit44CA5a6aICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5sZXQgZ3Y6IENfR2xvYmFsVmFyO1xyXG5sZXQgZ2E6IENfR2xvYmFsQXJndW1lbnRzO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW5pdChvYmo6IElfR2xvYmFsQXJndW1lbnRzKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBndiA9ICAgICBuZXcgQ19HbG9iYWxWYXIoKTtcclxuICAgIGdhID0gICAgIG5ldyBDX0dsb2JhbEFyZ3VtZW50cyhvYmopO1xyXG4gICAgZGJfbWFpID0gYXdhaXQgZ3YuZGJfcG9vbC5nZXRDb25uZWN0aW9uKCk7XHJcblxyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIGZpbmwoKTogdm9pZCB7XHJcbiAgICBkYl9tYWkucmVsZWFzZSgpO1xyXG4gICAgZ3YuZmlubCgpO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vXHJcbi8vLy8vICAgICDjgq/jg6njgrnlrqPoqIBcclxuLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIC8vIOWkp+Wfn+WkieaVsOOBruioreWumlxyXG4gICAgY2xhc3MgQ19HbG9iYWxWYXIge1xyXG4gICAgICAgIHB1YmxpYyBtZXM6IENfRHNwTWVzc2FnZTtcclxuXHJcbiAgICAgICAgcHVibGljIGRiX2hvc3Q6ICAgc3RyaW5nID0gXCJzcWxcIjtcclxuICAgICAgICBwdWJsaWMgZGJfcG9ydDogICBudW1iZXIgPSAgMzMwNjtcclxuICAgICAgICBwdWJsaWMgZGJfbmFtZTogICBzdHJpbmcgPSBcImRiX21haVwiO1xyXG4gICAgICAgIHB1YmxpYyBkYl91c2VyOiAgIHN0cmluZyA9IFwiaXRzYXlubzMzXCI7XHJcbiAgICAgICAgcHVibGljIGRiX3Bhc3M6ICAgc3RyaW5nID0gXCJQRTMzMzgzM1wiO1xyXG4gICAgXHJcbiAgICAgICAgcHVibGljIGRiX3Bvb2w6ICAgbXlzcWwuUG9vbDtcclxuICAgIFxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgdGhpcy5tZXMgICAgID0gbmV3IENfRHNwTWVzc2FnZSggLyogaXNIVE1MID0gKi8gZmFsc2UpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMuZGJfcG9vbCA9IG15c3FsLmNyZWF0ZVBvb2woe1xyXG4gICAgICAgICAgICAgICAgaG9zdDogICAgICB0aGlzLmRiX2hvc3QsXHJcbiAgICAgICAgICAgICAgICBwb3J0OiAgICAgIHRoaXMuZGJfcG9ydCxcclxuICAgICAgICAgICAgICAgIHVzZXI6ICAgICAgdGhpcy5kYl91c2VyLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICB0aGlzLmRiX3Bhc3MsXHJcbiAgICAgICAgICAgICAgICBkYXRhYmFzZTogIHRoaXMuZGJfbmFtZSxcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25MaW1pdDogICAgIDEwLCAvLyDmjqXntprjgpLlvLXjgorntprjgZHjgovmlbBcclxuICAgICAgICAgICAgICAgIHdhaXRGb3JDb25uZWN0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG5hbWVkUGxhY2Vob2xkZXJzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAganNvblN0cmluZ3M6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgZmlubCgpIHtcclxuICAgICAgICAgICAgdGhpcy5kYl9wb29sLmVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaW50ZXJmYWNlIElfR2xvYmFsQXJndW1lbnRzIHtcclxuICAgICAgICBtb2RlPzogICAgICAgIHN0cmluZztcclxuICAgICAgICBwaWQ/OiAgICAgICAgIG51bWJlcjtcclxuICAgICAgICB1bm8/OiAgICAgICAgIG51bWJlcjtcclxuICAgICAgICBzYXZlX2lkPzogICAgIG51bWJlcjtcclxuICAgICAgICBzYXZlX3RpdGxlPzogIHN0cmluZzsgXHJcbiAgICAgICAgc2F2ZV9kZXRhaWw/OiBzdHJpbmc7IFxyXG4gICAgICAgIHNhdmVfcG9pbnQ/OiAgc3RyaW5nOyBcclxuICAgICAgICBzYXZlX3RpbWU/OiAgIHN0cmluZzsgXHJcbiAgICAgICAgc2F2ZT86ICAgICAgICBzdHJpbmc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gUE9TVOW8leaVsOOBruioreWumlxyXG4gICAgY2xhc3MgQ19HbG9iYWxBcmd1bWVudHMge1xyXG4gICAgICAgIHB1YmxpYyBtb2RlOiAgICAgIHN0cmluZyAgICAgICAgICA9ICd1bmtub3duJztcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgc2F2ZV9KU09OOiBzdHJpbmcgICAgICAgICAgPSAnJztcclxuICAgICAgICBwdWJsaWMgc2F2ZTogICAgICAgIENfU2F2ZURhdGF8dW5kZWZpbmVkID0gdW5kZWZpbmVkOyBcclxuXHJcbiAgICAgICAgcHVibGljIHBpZDogICAgICAgICBudW1iZXIgPSAgMTtcclxuICAgICAgICBwdWJsaWMgdW5vOiAgICAgICAgIG51bWJlciA9IC0xO1xyXG4gICAgICAgIHB1YmxpYyBzYXZlX2lkOiAgICAgbnVtYmVyID0gLTE7XHJcbiAgICAgICAgcHVibGljIHNhdmVfdGl0bGU6ICBzdHJpbmcgPSAnJzsgXHJcbiAgICAgICAgcHVibGljIHNhdmVfZGV0YWlsOiBzdHJpbmcgPSAnJzsgXHJcbiAgICAgICAgcHVibGljIHNhdmVfcG9pbnQ6ICBzdHJpbmcgPSAnJzsgXHJcbiAgICAgICAgcHVibGljIHNhdmVfdGltZTogICBzdHJpbmcgPSAnJ1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3Iob2JqOiBJX0dsb2JhbEFyZ3VtZW50c3x1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKG9iaiA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1vZGUgICAgICAgID0gb2JqLm1vZGUgPz8gdGhpcy5tb2RlO1xyXG4gICAgICAgICAgICB0aGlzLnBpZCAgICAgICAgID0gb2JqLnBpZCAgPz8gdGhpcy5waWQ7XHJcbiAgICAgICAgICAgIHRoaXMudW5vICAgICAgICAgPSBvYmoudW5vICA/PyB0aGlzLnVubztcclxuICAgICAgICAgICAgdGhpcy5zYXZlX2lkICAgICA9IE51bWJlcihvYmouc2F2ZV9pZCkgICAgICA/PyB0aGlzLnNhdmVfaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZV90aXRsZSAgPSBvYmouc2F2ZV90aXRsZSAgICAgICAgICAgPz8gdGhpcy5zYXZlX3RpdGxlO1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVfZGV0YWlsID0gb2JqLnNhdmVfZGV0YWlsICAgICAgICAgID8/IHRoaXMuc2F2ZV9kZXRhaWw7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZV9wb2ludCAgPSBvYmouc2F2ZV9wb2ludCAgICAgICAgICAgPz8gdGhpcy5zYXZlX3BvaW50O1xyXG4gICAgICAgICAgICBpZiAob2JqLnNhdmUgIT09IHVuZGVmaW5lZCkgICAgdGhpcy5zYXZlICAgID0gbmV3IENfU2F2ZURhdGEoSlNPTi5wYXJzZShvYmouc2F2ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLyAgIOODh+ODvOOCv+ODmeODvOOCuemWouS/giBcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gICBcclxuXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gdHJfYmVnaW4oZGJfbWFpOiBkYl9jb25uZWN0KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgZGJfbWFpLmJlZ2luVHJhbnNhY3Rpb24oKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgZ3YubWVzLnNldF9lcnJfbWVzc2FnZShcIuODiOODqeODs+OCtuOCr+OCt+ODp+ODs+OBrumWi+Wni+WkseaVlzogXCIgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiB0cl9jb21taXQoZGJfbWFpOiBkYl9jb25uZWN0KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgZGJfbWFpLmNvbW1pdCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBndi5tZXMuc2V0X2Vycl9tZXNzYWdlKFwi44OI44Op44Oz44K244Kv44K344On44Oz44Gu44Kz44Of44OD44OI5aSx5pWXXCIgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiB0cl9yb2xsYmFjayhkYl9tYWk6IGRiX2Nvbm5lY3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBkYl9tYWkucm9sbGJhY2soKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgZ3YubWVzLnNldF9lcnJfbWVzc2FnZShcIuODiOODqeODs+OCtuOCr+OCt+ODp+ODs+OBruODreODvOODq+ODkOODg+OCr+WkseaVl1wiICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4iLCJcclxuY29uc3QgZGJfaG9zdCA9ICdzcWwnO1xyXG4vLyDliKnnlKjjgq/jg6njgrnnrYnjga7oqq3jgb/ovrzjgb9cclxuXHJcbi8vIOOCqOODqeODvOODoeODg+OCu+ODvOOCuOetieOCkuS/neWtmOODu+ihqOekuuOBmeOCi+OCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX0RzcE1lc3NhZ2UgfSAgICAgZnJvbSAnQGRfdXRsL0NfRHNwTWVzc2FnZSc7XHJcblxyXG4vLyBNeVNxbOOCkuaJseOBhuOCr+ODqeOCuVxyXG5pbXBvcnQgbXlzcWwgZnJvbSBcIm15c3FsMi9wcm9taXNlXCI7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Li744CA5Yem44CA55CGICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbnRlcmZhY2UgSV9HbG9iYWxBcmd1bWVudHMge1xyXG4gICAgbW9kZT86IHN0cmluZztcclxuICAgIHBpZDogICBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJX1JldHVybiB7XHJcbiAgICBlY29kZTogICBudW1iZXI7XHJcbiAgICBlbXNnOiAgICBzdHJpbmc7XHJcbiAgICBwaWQ6ICAgICBudW1iZXI7XHJcbiAgICBuYW1lOiAgICBzdHJpbmc7XHJcbiAgICBtYm5hbWU6ICBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIENfTm9yUmV0dXJuIGltcGxlbWVudHMgSV9SZXR1cm4ge1xyXG4gICAgcHVibGljIGVjb2RlOiAgIG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgZW1zZzogICAgc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgcGlkOiAgICAgbnVtYmVyID0gLTE7XHJcbiAgICBwdWJsaWMgbmFtZTogICAgc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgbWJuYW1lOiAgc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgbWJuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnBpZCAgICA9IHBpZDtcclxuICAgICAgICB0aGlzLm5hbWUgICA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5tYm5hbWUgPSBtYm5hbWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfRXJyUmV0dXJuIGltcGxlbWVudHMgSV9SZXR1cm4ge1xyXG4gICAgcHVibGljIGVjb2RlOiAgIG51bWJlciA9IDEwMDA7XHJcbiAgICBwdWJsaWMgZW1zZzogICAgc3RyaW5nID0gJ2Vycm9yJztcclxuICAgIHB1YmxpYyBwaWQ6ICAgICBudW1iZXIgPSAtMTtcclxuICAgIHB1YmxpYyBuYW1lOiAgICBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBtYm5hbWU6ICBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihlY29kZTogbnVtYmVyLCBlbXNnOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVjb2RlICA9IGVjb2RlO1xyXG4gICAgICAgIHRoaXMuZW1zZyAgID0gZW1zZztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIEdldHRpbmcgTmV3IEdhbWUgc3RhcnRpaW5nIGZyb20gR3VsZFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdGVzdChhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgbGV0IHJldHVybl92YWw6IElfUmV0dXJuO1xyXG5cclxuICAgIGluaXQoYXJnKTtcclxuXHJcbiAgICBpZiAoZ3YubWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgZ3YubWVzLmRpc3BsYXlfZXJyX21lc3NhZ2UoKTtcclxuICAgICAgICByZXR1cm5fdmFsID0gbmV3IENfRXJyUmV0dXJuKDEwMCwgJ2RiX21haSBPUEVOIEVSUk9SICcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm5fdmFsID0gYXdhaXQgZ2V0X3BsYXllcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXR1cm5fdmFsO1xyXG59XHJcblxyXG4gXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vICAg44K144OW44Or44O844OB44OzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldF9wbGF5ZXIoKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgaWYgKGdhLnBpZCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbmV3IENfRXJyUmV0dXJuKDk5OSwgJ1BpZCBVbmRlZmluZWQnKTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0X3VzZXJzKCkudGhlbihyc2x0X3VzZXJzID0+IHtcclxuICAgICAgICBpZiAocnNsdF91c2VycyA9PT0gdW5kZWZpbmVkIHx8IGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICBndi5tZXMuZGlzcGxheV9lcnJfbWVzc2FnZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENfRXJyUmV0dXJuKDIwMCwgJ1NRTCBFUlJPUiAnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJzbHRfdXNlcnMubGVuZ3RoIDwgMSkgcmV0dXJuIG5ldyBDX0VyclJldHVybig5MDAsIGBObyBkYXRhIGV4aXN0IG9uIHBpZD0ke2dhLnBpZH1gKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX05vclJldHVybihcclxuICAgICAgICAgICAgcnNsdF91c2Vyc1swXS5pZCwgXHJcbiAgICAgICAgICAgIHJzbHRfdXNlcnNbMF0ubmFtZSwgXHJcbiAgICAgICAgICAgIHJzbHRfdXNlcnNbMF0ubWJuYW1lXHJcbiAgICAgICAgKTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX0VyclJldHVybigxMDAsICdTUUwgRVJST1I6ICcgKyBlcnIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJX3RibF9wbGF5ZXIgZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0e1xyXG4gICAgaWQ6ICAgICAgbnVtYmVyO1xyXG4gICAgbmFtZTogICAgc3RyaW5nO1xyXG4gICAgcGFzc3dkOiAgc3RyaW5nO1xyXG4gICAgbWJuYW1lOiAgc3RyaW5nO1xyXG4gICAgZW1haWw6ICAgc3RyaW5nO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZWxlY3RfdXNlcnMoKTogUHJvbWlzZTxJX3RibF9wbGF5ZXJbXXx1bmRlZmluZWQ+IHtcclxuICAgIGNvbnN0IHNxbCA9IGBcclxuICAgICAgICBTRUxFQ1QgaWQsIG5hbWUsIHBhc3N3ZCwgbWJuYW1lLCBlbWFpbCBGUk9NIHRibF9wbGF5ZXJcclxuICAgICAgICAgICAgV0hFUkUgIGlkID0gOmlkXHJcbiAgICBgO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgW3JzbHRSb3dTZXRdID0gYXdhaXQgZ3YuZGJfcG9vbC5xdWVyeTxJX3RibF9wbGF5ZXJbXT4oc3FsLCB7aWQ6IGdhLnBpZH0pO1xyXG4gICAgICAgIHJldHVybiByc2x0Um93U2V0O1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgZ3YubWVzLnNldF9lcnJfbWVzc2FnZSgnU1FMIEVSUk9SIFNFTEVDVCBGUk9NIHRibF9wbGF5ZXI6ICcgKyBlcnIpO1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDliJ3jgIDmnJ/jgIDoqK3jgIDlrpogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmxldCBndjogQ19HbG9iYWxWYXI7XHJcbmxldCBnYTogQ19HbG9iYWxBcmd1bWVudHM7XHJcblxyXG5mdW5jdGlvbiBpbml0KG9iajogSV9HbG9iYWxBcmd1bWVudHMpOiB2b2lkIHtcclxuICAgIGd2ID0gbmV3IENfR2xvYmFsVmFyKCk7XHJcbiAgICBnYSA9IG5ldyBDX0dsb2JhbEFyZ3VtZW50cyhvYmopO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIGZpbmwoKTogdm9pZCB7XHJcbiAgICBndi5maW5sKCk7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy9cclxuLy8vLy8gICAgIOOCr+ODqeOCueWuo+iogFxyXG4vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyDlpKfln5/lpInmlbDjga7oqK3lrppcclxuY2xhc3MgQ19HbG9iYWxWYXIge1xyXG4gICAgcHVibGljIG1lczogQ19Ec3BNZXNzYWdlO1xyXG5cclxuICAgIHB1YmxpYyBkYl9ob3N0OiAgIHN0cmluZyA9IFwic3FsXCI7XHJcbiAgICBwdWJsaWMgZGJfcG9ydDogICBudW1iZXIgPSAgMzMwNjtcclxuICAgIHB1YmxpYyBkYl9uYW1lOiAgIHN0cmluZyA9IFwiZGJfbWFpXCI7XHJcbiAgICBwdWJsaWMgZGJfdXNlcjogICBzdHJpbmcgPSBcIml0c2F5bm8zM1wiO1xyXG4gICAgcHVibGljIGRiX3Bhc3M6ICAgc3RyaW5nID0gXCJQRTMzMzgzM1wiO1xyXG5cclxuICAgIHB1YmxpYyBkYl9wb29sOiAgIG15c3FsLlBvb2w7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubWVzICAgICA9IG5ldyBDX0RzcE1lc3NhZ2UoIC8qIGlzSFRNTCA9ICovIGZhbHNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYl9wb29sID0gbXlzcWwuY3JlYXRlUG9vbCh7XHJcbiAgICAgICAgICAgIGhvc3Q6ICAgICAgdGhpcy5kYl9ob3N0LFxyXG4gICAgICAgICAgICBwb3J0OiAgICAgIHRoaXMuZGJfcG9ydCxcclxuICAgICAgICAgICAgdXNlcjogICAgICB0aGlzLmRiX3VzZXIsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAgdGhpcy5kYl9wYXNzLFxyXG4gICAgICAgICAgICBkYXRhYmFzZTogIHRoaXMuZGJfbmFtZSxcclxuICAgICAgICAgICAgY29ubmVjdGlvbkxpbWl0OiAgICAgMTAsIC8vIOaOpee2muOCkuW8teOCiue2muOBkeOCi+aVsFxyXG4gICAgICAgICAgICB3YWl0Rm9yQ29ubmVjdGlvbnM6IHRydWUsXHJcbiAgICAgICAgICAgIG5hbWVkUGxhY2Vob2xkZXJzOiB0cnVlLFxyXG4gICAgICAgICAgICBqc29uU3RyaW5nczogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBmaW5sKCkge1xyXG4gICAgICAgIHRoaXMuZGJfcG9vbC5lbmQoKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gUE9TVOW8leaVsOOBruioreWumlxyXG5jbGFzcyBDX0dsb2JhbEFyZ3VtZW50cyB7XHJcbiAgICBwdWJsaWMgbW9kZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHBpZDogIG51bWJlciA9IC0xO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvYmo6IElfR2xvYmFsQXJndW1lbnRzfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMubW9kZSA9IG9iaj8ubW9kZSA/PyAndW5rbm93bic7XHJcbiAgICAgICAgdGhpcy5waWQgID0gb2JqPy5waWQgICE9PSB1bmRlZmluZWQgJiYgIWlzTmFOKG9iai5waWQpICA/IE51bWJlcihvYmoucGlkKSAgOiAtMTtcclxuLy9kZWJ1ZyAgICAgICAgY29uc29sZS5sb2coYG1vZGU9JHt0aGlzLm1vZGV9LCBwaWQgPSAke3RoaXMucGlkfWApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKlxyXG5tb2R1bGUuZXhwb3J0cyA9IG5ld0dhbWU7XHJcbm1vZHVsZS5leHBvcnRzID0gbmV3SGVybztcclxuKi8iLCIvLyDliKnnlKjjgq/jg6njgrnnrYnjga7oqq3jgb/ovrzjgb9cclxuXHJcbi8vIOOCqOODqeODvOODoeODg+OCu+ODvOOCuOetieOCkuS/neWtmOODu+ihqOekuuOBmeOCi+OCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX0RzcE1lc3NhZ2UgfSAgIGZyb20gJ0BkX3V0bC9DX0RzcE1lc3NhZ2UnO1xyXG5cclxuLy8g44OA44Oz44K444On44Oz44Oe44OD44OX44Gu44K744Or44Gu56iu6aGe44KS6KGo44GZ5YiX5oyZ5Z6LXHJcbmltcG9ydCB7IFRfTXpLaW5kIH0gICAgICAgZnJvbSAgJ0BkX21kbC9UX016S2luZCc7XHJcblxyXG4vLyDmlrnlkJHjgpLooajjgZnjgq/jg6njgrlcclxuaW1wb3J0IHsgQ19Qb2ludERpciwgVF9EaXJlY3Rpb24gfSAgIGZyb20gICdAZF9tZGwvQ19Qb2ludERpcic7XHJcblxyXG4vLyDkvY3nva7jg7vntYzot6/jgpLooajjgZnjgq/jg6njgrnlhajoiKxcclxuaW1wb3J0IHsgQ19Nb3ZhYmxlUG9pbnQgfSAgICAgICAgICAgIGZyb20gJ0BkX21kbC9DX01vdmFibGVQb2ludCc7XHJcblxyXG4vLyBNQVpF6Zai5L+C44Kv44Op44K55YWo6IisXHJcbmltcG9ydCB7IENfTWF6ZSB9ICAgICAgICAgICAgICAgICAgICBmcm9tICdAZF9tZGwvQ19NYXplJztcclxuaW1wb3J0IHsgQ19NYXplSW5mbywgSlNPTl9NYXplSW5mbyB9IGZyb20gJ0BkX21kbC9DX01hemVJbmZvJzsgLy8gTWF6ZeS9nOaIkOOBruODhuODs+ODl+ODrOODvOODiOaDheWgsVxyXG5cclxuLy8g44OR44O844OG44Kj44O844Kv44Op44K55YWo6IisXHJcbmltcG9ydCB7IENfVGVhbSB9ICAgICAgICAgZnJvbSAnQGRfbWRsL0NfVGVhbSc7XHJcblxyXG4vLyDjg5Ljg7zjg63jg7zjgq/jg6njgrnlhajoiKxcclxuaW1wb3J0IHsgQ19IZXJvIH0gICAgICAgICBmcm9tICdAZF9tZGwvQ19IZXJvJztcclxuXHJcbi8vIOOCu+ODvOODluODh+ODvOOCvyjjgq/jg6njgqTjgqLjg7Pjg4jjgajjga7pgKPmkLop5YWo6IisXHJcbmltcG9ydCB7IENfU2F2ZURhdGEsIEpTT05fU2F2ZURhdGEgfSBmcm9tICdAZF9tZGwvQ19TYXZlRGF0YSc7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Li744CA5Yem44CA55CGICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5sZXQgZ3Y6IENfR2xvYmFsVmFyO1xyXG5sZXQgZ2E6IENfR2xvYmFsQXJndW1lbnRzO1xyXG5cclxuaW50ZXJmYWNlIElfR2xvYmFsQXJndW1lbnRzIHtcclxuICAgIG1vZGU/OiBzdHJpbmc7XHJcbiAgICBubWJyPzogbnVtYmVyO1xyXG4gICAgcGlkPzogIG51bWJlcjtcclxuICAgIHRlYW0/OiBzdHJpbmc7XHJcbiAgICBtYXplPzogc3RyaW5nO1xyXG4gICAgbWF6ZV9uYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSV9SZXR1cm4ge1xyXG4gICAgZWNvZGU6IG51bWJlcjtcclxuICAgIGVtc2c6ICBzdHJpbmc7XHJcbiAgICBzYXZlPzogSlNPTl9TYXZlRGF0YTtcclxuICAgIGRhdGE/OiBvYmplY3Q7XHJcbn1cclxuXHJcbi8vIEdldHRpbmcgSW5mb3JtYXRpb24gb2YgQWxsIE1hemVcclxuZXhwb3J0IGZ1bmN0aW9uIGFsbE1hemUob2JqOiBJX0dsb2JhbEFyZ3VtZW50cyk6IElfUmV0dXJuIHtcclxuICAgIGluaXQob2JqKTtcclxuXHJcbiAgICBjb25zdCBtYXplX2luZm9fYXJyYXk6IEpTT05fTWF6ZUluZm9bXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBuYW1lIGluIGd2Lm1hemVpbmZvKSBtYXplX2luZm9fYXJyYXkucHVzaChndi5tYXplaW5mb1tuYW1lXS5lbmNvZGUoKSk7XHJcbiAgICByZXR1cm4gYWxsX2VuY29kZShcclxuICAgICAgICAwLCBcclxuICAgICAgICB7bWF6ZWluZm86IG1hemVfaW5mb19hcnJheX0sXHJcbiAgICApO1xyXG59XHJcblxyXG4vLyBHZXR0aW5nIE5ldyBNYXplXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXplKG9iajogSV9HbG9iYWxBcmd1bWVudHMpOiBJX1JldHVybiB7XHJcbiAgICBpbml0KG9iaik7XHJcblxyXG4gICAgY29uc3QgW25ld19tYXplLCBuZXdfcG9zXSA9IGNyZWF0ZV9tYXplKGdhLm1hemVfbmFtZSk7IFxyXG4gICAgcmV0dXJuIGFsbF9lbmNvZGUoXHJcbiAgICAgICAgMCwgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtYXplOiBuZXdfbWF6ZS5lbmNvZGUoKSxcclxuICAgICAgICAgICAgcG9zOiAgbmV3X3BvcyxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxufVxyXG5cclxuLy8gR2V0dGluZyBOZXcgR2FtZSBzdGFydGlpbmcgZnJvbSBNYXplXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXdNYXplKG9iajogSV9HbG9iYWxBcmd1bWVudHMpOiBJX1JldHVybiB7XHJcbiAgICBpbml0KG9iaik7XHJcblxyXG4gICAgY29uc3QgW25ld19tYXplLCBuZXdfcG9zXSA9IGNyZWF0ZV9tYXplKCcnKTsgXHJcbiAgICBjb25zdCAgbmV3X3RlYW0gPSBjcmVhdGVfdGVhbShuZXdfbWF6ZSwgbmV3X3Bvcyk7IFxyXG4gICAgY29uc3QgIG5ld19zYXZlID0gY3JlYXRlX3NhdmUobmV3X21hemUsIG5ld190ZWFtKTtcclxuICAgIGNvbnN0ICByZXRfSlNPTiA9IHNhdmVfZW5jb2RlKDAsIG5ld19zYXZlKTtcclxuICAgIHJldHVybiByZXRfSlNPTjtcclxufVxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vICAg44K144OW44Or44O844OB44OzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmZ1bmN0aW9uIGVycl9lbmNvZGUoY29kZTogbnVtYmVyLCBtc2dzOiBzdHJpbmdbXSk6IElfUmV0dXJuIHtcclxuICAgIGNvbnN0IHJldF9hc3NvYzogSV9SZXR1cm4gPSB7ZWNvZGU6Y29kZSwgZW1zZzogJyd9O1xyXG4gICAgZm9yIChjb25zdCBtc2cgb2YgbXNncykgcmV0X2Fzc29jLmVtc2cgKz0gbXNnOyBcclxuICAgIHJldHVybiByZXRfYXNzb2M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFsbF9lbmNvZGUoY29kZTogbnVtYmVyLCBkYXRhOiBvYmplY3QpOiBJX1JldHVybiB7XHJcbiAgICBjb25zdCByZXRfYXNzb2M6IElfUmV0dXJuID0ge2Vjb2RlOmNvZGUsIGVtc2c6ICcnfTtcclxuXHJcbiAgICByZXRfYXNzb2MuZWNvZGUgPSBjb2RlO1xyXG4gICAgaWYgKGNvZGUgIT09IDAgfHwgZ3YubWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgcmV0dXJuIGVycl9lbmNvZGUoY29kZSwgZ3YubWVzLmdldF9lcnJfbWVzc2FnZXMoKSk7XHJcbiAgICB9XHJcbiAgICByZXRfYXNzb2MuZW1zZyA9ICdTdGF0dXMgT0snO1xyXG4gICAgcmV0X2Fzc29jLmRhdGEgPSAgZGF0YTtcclxuXHJcbiAgICByZXR1cm4gcmV0X2Fzc29jO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlX2VuY29kZShjb2RlOiBudW1iZXIsIHNhdmU6IENfU2F2ZURhdGEpOiBJX1JldHVybiB7XHJcbiAgICBjb25zdCByZXRfYXNzb2M6IElfUmV0dXJuID0ge2Vjb2RlOmNvZGUsIGVtc2c6ICcnfTtcclxuXHJcbiAgICBpZiAoY29kZSAhPT0gMCB8fCBndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICByZXR1cm4gZXJyX2VuY29kZShjb2RlLCBndi5tZXMuZ2V0X2Vycl9tZXNzYWdlcygpKTtcclxuICAgIH1cclxuICAgIHJldF9hc3NvYy5lbXNnID0gJ1N0YXR1cyBPSyc7XHJcbiAgICByZXRfYXNzb2Muc2F2ZSA9IHNhdmUuZW5jb2RlKCk7XHJcblxyXG4gICAgcmV0dXJuIHJldF9hc3NvYztcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZV9zYXZlKG1hemU6IENfTWF6ZSwgdGVhbTogQ19UZWFtKTogQ19TYXZlRGF0YSB7XHJcbiAgICByZXR1cm4gbmV3IENfU2F2ZURhdGEoe1xyXG4gICAgICAgIHBsYXllcl9pZDogZ2EucGlkLFxyXG4gICAgICAgIGF1dG9fbW9kZTogJzAnLFxyXG4gICAgICAgIGlzX2FjdGl2ZTogJzEnLFxyXG4gICAgICAgIGlzX2RlbGV0ZTogJzAnLFxyXG5cclxuICAgICAgICBhbGxfdGVhbTogIFt0ZWFtLmVuY29kZSgpXSxcclxuICAgICAgICBhbGxfbWF6ZTogIFttYXplLmVuY29kZSgpXSxcclxuICAgICAgICBhbGxfZ3VsZDogIFtdLCBcclxuICAgICAgICBhbGxfbXZwdDogIFtdLCBcclxuXHJcbiAgICAgICAgbXlwb3M6ICAgICB0ZWFtLmdldF9sb2MoKS5lbmNvZGUoKSxcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVfbWF6ZShtYXplX25hbWU6IHN0cmluZyA9ICcnKTogW0NfTWF6ZSwgQ19Qb2ludERpcl0ge1xyXG4gICAgbGV0IG1hemU6IENfTWF6ZTtcclxuICAgIGlmIChtYXplX25hbWUgPT0gJycpIHtcclxuICAgICAgICBtYXplID0gbmV3IENfTWF6ZSh7XHJcbiAgICAgICAgICAgICduYW1lJyAgOiAn5aeL44G+44KK44Gu6L+35a6uJywgXHJcbiAgICAgICAgICAgICdzaXplX3gnOiAyMSwgXHJcbiAgICAgICAgICAgICdzaXplX3knOiAyMSwgXHJcbiAgICAgICAgICAgICdzaXplX3onOiBndi5NYXhfb2ZfTWF6ZV9GbG9vclxyXG4gICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG1hemVpbmZvID0gZ3YubWF6ZWluZm9bbWF6ZV9uYW1lXTtcclxuICAgICAgICBtYXplID0gbmV3IENfTWF6ZSh7XHJcbiAgICAgICAgICAgICduYW1lJzogICBtYXplaW5mby5tYm5hbWUsIFxyXG4gICAgICAgICAgICAnc2l6ZV94JzogbWF6ZWluZm8uc2l6ZV94LCBcclxuICAgICAgICAgICAgJ3NpemVfeSc6IG1hemVpbmZvLnNpemVfeSwgXHJcbiAgICAgICAgICAgICdzaXplX3onOiBtYXplaW5mby5zaXplX3pcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF6ZS5nZXRfel9tYXgoKTsgaSsrKSB7XHJcbiAgICAgICAgbWF6ZS5jcmVhdGVfbWF6ZShpKTtcclxuICAgIH0gXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG1hemUuZ2V0X3pfbWF4KCk7IGkrKykge1xyXG4gICAgICAgIG1hemUuY3JlYXRlX3N0YWlyKGkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcG9zID0gbWF6ZS5jcmVhdGVfc3RhaXIoMCk7XHJcbiAgICByZXR1cm4gW21hemUsIHBvc107XHJcbn1cclxuXHJcbi8vIOi/t+WuruaOoue0oiDmlrDopo/jgrLjg7zjg6DnlKjjga7mmqvlrprniYjlh6bnva7jgILjgZ3jga7kuoxcclxuZnVuY3Rpb24gY3JlYXRlX2hyZXMoKTogQ19IZXJvW10ge1xyXG4gICAgY29uc3QgaHJlczogQ19IZXJvW10gPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDM7IGkrKykge1xyXG4gICAgICAgIGhyZXMucHVzaChuZXcgQ19IZXJvKCkucmFuZG9tX21ha2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhyZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZV90ZWFtKG1hemU6IENfTWF6ZSwgcG9zOiBDX1BvaW50RGlyKTogQ19UZWFtIHtcclxuLypcclxuICAgICR4ID0gMiAqIHJhbmRvbV9pbnQoMCwgKCgkbWF6ZS0+Z2V0X3NpemVfeCgpIC0gMSkgLyAyKSAtIDEpICsgMTtcclxuICAgICR5ID0gMiAqIHJhbmRvbV9pbnQoMCwgKCgkbWF6ZS0+Z2V0X3NpemVfeSgpIC0gMSkgLyAyKSAtIDEpICsgMTtcclxuICAgICR6ID0gMDsgIC8vICAgICR6ID0gMSAqIHJhbmRvbV9pbnQoMCwgICgkZ3YtPm1hemUtPmdldF9zaXplX3ooKSAtIDEpKTtcclxuXHJcbiAgICAkZCA9IHJhbmRvbV9pbnQoMCwgRGlyZWN0OjpNQVgpO1xyXG4qL1xyXG5jb25zdCB0ZWFtID0gbmV3IENfVGVhbSgpO1xyXG5jb25zdCBsb2MgID0gbmV3IENfTW92YWJsZVBvaW50KCkuZGVjb2RlKHtcclxuICAgICAgICAna2luZCcgICA6ICdNYXplJyxcclxuICAgICAgICAnbmFtZScgICA6ICBtYXplLmdldF9uYW1lKCksXHJcbiAgICAgICAgJ2xvY191aWQnOiAgbWF6ZS51aWQoKSxcclxuICAgICAgICAnbG9jX3Bvcyc6ICBwb3MsXHJcbiAgICAgICAgJ3RlYW1fdWlkJzogdGVhbS51aWQoKSxcclxuICAgICAgICAvKlxyXG4gICAgICAgICdsb2NfcG9zJyA9PiBbXHJcbiAgICAgICAgICAgICd4JyAgID0+ICR4LFxyXG4gICAgICAgICAgICAneScgICA9PiAkeSxcclxuICAgICAgICAgICAgJ3onICAgPT4gJHosXHJcbiAgICAgICAgICAgICdkJyAgID0+ICRkLFxyXG4gICAgICAgIF0sXHJcbiovXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdGVhbS5zZXRfcHJwKHsnbmFtZSc6ICfjgbLjgojjgZPjgZXjgpPjg4Hjg7zjg6AnfSk7XHJcbiAgICB0ZWFtLnNldF9sb2MobG9jKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDM7IGkrKykge1xyXG4gICAgICAgIHRlYW0uYWRkX2hlcm8obmV3IENfSGVybygpLnJhbmRvbV9tYWtlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZWFtO1xyXG59XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Yid44CA5pyf44CA6Kit44CA5a6aICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5mdW5jdGlvbiBpbml0KG9iajogSV9HbG9iYWxBcmd1bWVudHMpOiB2b2lkIHtcclxuICAgIGd2ID0gbmV3IENfR2xvYmFsVmFyKCk7XHJcbiAgICBnYSA9IG5ldyBDX0dsb2JhbEFyZ3VtZW50cyhvYmopO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vXHJcbi8vLy8vICAgICDjgq/jg6njgrnlrqPoqIBcclxuLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8g5aSn5Z+f5aSJ5pWw44Gu6Kit5a6aXHJcbmNsYXNzIENfR2xvYmFsVmFyIHtcclxuICAgIHB1YmxpYyBtZXM6IENfRHNwTWVzc2FnZTtcclxuXHJcbiAgICBwdWJsaWMgbWF6ZWluZm86IHtbbWF6ZV9uYW1lOiBzdHJpbmddOiBDX01hemVJbmZvfSA9IHt9O1xyXG4vLyAgICBwdWJsaWMgbWF6ZTogICAgIENfTWF6ZTtcclxuICAgIHB1YmxpYyB0ZWFtOiAgICAgQ19UZWFtO1xyXG4gICAgcHVibGljIGhlcm9lczogICBDX0hlcm9bXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBNYXplX3NpemVfeCAgICAgICA9IDIxO1xyXG4gICAgcHVibGljIE1hemVfc2l6ZV95ICAgICAgID0gMjE7XHJcbiAgICBwdWJsaWMgTGltaXRfb2Zfcm9vbSAgICAgPSA1O1xyXG4gICAgcHVibGljIE1heF9zaXplX29mX3Jvb20gID0gMztcclxuICAgIHB1YmxpYyBNYXhfb2ZfTWF6ZV9GbG9vciA9IDM7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubWVzID0gbmV3IENfRHNwTWVzc2FnZSggLyogaXNIVE1MID0gKi8gZmFsc2UpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXplaW5mbyA9IENfTWF6ZUluZm8uZ2V0X3RibF9hbGwoKTsgXHJcbiAgICAgICAgZm9yIChjb25zdCBtaSBvZiBtYXplaW5mbykgdGhpcy5tYXplaW5mb1ttaS5uYW1lXSA9IG1pOyBcclxuLypcclxuICAgICAgICBjb25zdCBbcnNsdCwgbWF6ZWluZm9dICA9IENfTWF6ZUluZm8uZ2V0X3RibF9hbGwoKTtcclxuICAgICAgICB0aGlzLm1hemVpbmZvID0gKHJzbHQgIT09IHVuZGVmaW5lZCkgPyBtYXplaW5mbyA6IFtdOyBcclxuKi9cclxuLypcclxuICAgICAgICB0aGlzLm1hemUgICAgICAgID0gbmV3IENfTWF6ZSgpLmNyZWF0ZV9tYWtlKHtcclxuICAgICAgICAgICAgc2l6ZV94OiAgICB0aGlzLk1hemVfc2l6ZV94LFxyXG4gICAgICAgICAgICBzaXplX3k6ICAgIHRoaXMuTWF6ZV9zaXplX3ksXHJcbiAgICAgICAgICAgIHNpemVfejogICAgdGhpcy5NYXhfb2ZfTWF6ZV9GbG9vciwgXHJcbiAgICAgICAgICAgIGZpbGxfa2luZDogVF9NektpbmQuRW1wdHksXHJcbiAgICAgICAgICAgIG1heF9yb29tOiAgdGhpcy5MaW1pdF9vZl9yb29tLFxyXG4gICAgICAgICAgICByb29tX3NpemU6IHRoaXMuTWF4X3NpemVfb2Zfcm9vbSxcclxuICAgIH0pO1xyXG4qL1xyXG4gICAgICAgIHRoaXMudGVhbSAgICAgICAgPSAgbmV3IENfVGVhbSh7bmFtZTogJ05ldyBUZWFtJywgeDoxLCB5OjEsIHo6MSwgZDpUX0RpcmVjdGlvbi5OfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBQT1NU5byV5pWw44Gu6Kit5a6aXHJcbmNsYXNzIENfR2xvYmFsQXJndW1lbnRzIHtcclxuICAgIHB1YmxpYyBtb2RlOiAgICAgIHN0cmluZztcclxuICAgIHB1YmxpYyBwaWQ6ICAgICAgIG51bWJlciAgID0gIDE7XHJcbiAgICBwdWJsaWMgbWF6ZV9uYW1lOiBzdHJpbmcgICA9ICcnO1xyXG5cclxuLypcclxuICAgIHB1YmxpYyB0ZWFtX0pTT046IHN0cmluZyAgID0gJyc7XHJcbiAgICBwdWJsaWMgbWF6ZV9KU09OOiBzdHJpbmcgICA9ICcnO1xyXG4qL1xyXG5cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob2JqOiBJX0dsb2JhbEFyZ3VtZW50cykge1xyXG4gICAgICAgIHRoaXMubW9kZSAgICAgID0gb2JqPy5tb2RlID8/ICd1bmtub3duJztcclxuICAgICAgICB0aGlzLnBpZCAgICAgICA9IG9iaj8ucGlkICAhPT0gdW5kZWZpbmVkICYmICFpc05hTihvYmoucGlkKSA/IE51bWJlcihvYmoucGlkKSA6IDE7XHJcbiAgICAgICAgdGhpcy5tYXplX25hbWUgPSBvYmo/Lm1hemVfbmFtZSA/PyAnJztcclxuLypcclxuICAgICAgICB0aGlzLnRlYW1fSlNPTiA9IG9iaj8udGVhbSAgICAgID8/ICcnO1xyXG4gICAgICAgIHRoaXMubWF6ZV9KU09OID0gb2JqPy5tYXplICAgICAgPz8gJyc7XHJcbiovXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW50ZXJmYWNlIH0gZnJvbSAncmVhZGxpbmUnO1xyXG5pbXBvcnQge25ld0d1bGQsIGFsbEhyZXN9IGZyb20gJy4uL2xpYi9fSlNPTl9tYWlfZ3VsZCdcclxuaW1wb3J0IGNyZWF0ZUVycm9yICBmcm9tICdodHRwLWVycm9ycyc7XHJcblxyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG4vKiBHRVQgdXNlcnMgbGlzdGluZy4gKi9cclxucm91dGVyLmdldCAoJy8nLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcclxuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgbWFpR3VsZCcpO1xyXG59KTtcclxuXHJcbnJvdXRlci5wb3N0KCcvbmV3R3VsZCcsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHRyeSB7XHJcbi8vZGVidWcgICAgZm9yIChjb25zdCBrZXkgaW4gcmVxLmJvZHkpIGNvbnNvbGUuZXJyb3IoYHJlcS4ke2tleX06ICR7cmVxLmJvZHlba2V5XX1gKTtcclxuXHJcbiAgICBjb25zdCByZXQgPSBuZXdHdWxkKHJlcS5ib2R5KTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKTtcclxuICAgIHJlcy5zZW5kKEpTT04uc3RyaW5naWZ5KHJldCwgbnVsbCwgXCJcXHRcIikpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coYG5ld0dhbWUgUE9TVCBlcnJvcjogJHtlcnJ9YCk7XHJcbiAgICBuZXh0KGNyZWF0ZUVycm9yKDQwNikpO1xyXG4gIH1cclxufSk7XHJcbnJvdXRlci5nZXQgKCcvbmV3R3VsZCcsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSBOZXcgR2FtZSBUbyBHdWxkIG9mIG1haScpO1xyXG59KTtcclxuXHJcbnJvdXRlci5wb3N0KCcvYWxsSHJlcycsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHRyeSB7XHJcbi8vZGVidWcgICAgZm9yIChjb25zdCBrZXkgaW4gcmVxLmJvZHkpIGNvbnNvbGUuZXJyb3IoYHJlcS4ke2tleX06ICR7cmVxLmJvZHlba2V5XX1gKTtcclxuXHJcbiAgICBjb25zdCByZXQgPSBhbGxIcmVzKHJlcS5ib2R5KTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKTtcclxuICAgIHJlcy5zZW5kKEpTT04uc3RyaW5naWZ5KHJldCwgbnVsbCwgXCJcXHRcIikpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coYG5ld0hyZXMgUE9TVCBlcnJvcjogJHtlcnJ9YCk7XHJcbiAgICBuZXh0KGNyZWF0ZUVycm9yKDQwNikpO1xyXG4gIH1cclxufSk7XHJcblxyXG5yb3V0ZXIuZ2V0ICgnL2FsbEhyZXMnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcclxuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIEdldHRpbmcgQWxsIEhyZXMgZGF0YSBvZiBtYWknKTtcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcclxuIiwiaW1wb3J0IHsgaW5mbywgbG9hZCwgc2F2ZSB9IGZyb20gJy4uL2xpYi9fSlNPTl9tYWlfbGRzdidcclxuaW1wb3J0IHsgdGVzdCB9ICAgICAgICAgICAgIGZyb20gJy4uL2xpYi9fSlNPTl9tYWlfbGRzdl90ZXN0J1xyXG5pbXBvcnQgY3JlYXRlRXJyb3IgICAgICAgICAgZnJvbSAnaHR0cC1lcnJvcnMnO1xyXG5cclxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbnZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxuLyogR0VUIHVzZXJzIGxpc3RpbmcuICovXHJcbnJvdXRlci5nZXQgKCcvJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIG1haUxvYWRTYXZlJyk7XHJcbn0pO1xyXG5cclxuLypcclxuKiogIFNlbmQgU2F2ZUluZm9cclxuKi9cclxucm91dGVyLnBvc3QoJy9faW5mbycsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4vL2RlYnVnICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVxLmJvZHkpIGNvbnNvbGUuZXJyb3IoYHJlcS4ke2tleX06ICR7cmVxLmJvZHlba2V5XX1gKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJzbHQgPSBhd2FpdCBpbmZvKHJlcS5ib2R5KTtcclxuICAgIGlmIChyc2x0LmVjb2RlICE9PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYCoqKiBlcnJvcjogJHtyc2x0LmVjb2RlfTogJHtyc2x0LmVtc2d9ICoqKmApO1xyXG4gICAgICBuZXh0KGNyZWF0ZUVycm9yKDQwNikpO1xyXG4gICAgfVxyXG4gICAgcmVzLnN0YXR1cygyMDApO1xyXG4gICAgcmVzLnNlbmQoSlNPTi5zdHJpbmdpZnkocnNsdCwgbnVsbCwgXCJcXHRcIikpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coYExkU3YgaW5mbyBQT1NUIGVycm9yOiAke2Vycn1gKTtcclxuICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XHJcbiAgfVxyXG59KTtcclxucm91dGVyLmdldCAoJy9faW5mbycsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSBtYWlMZFN2IGluZm8nKTtcclxufSk7XHJcblxyXG5cclxuLypcclxuKiogIFNlbmQgTGFvZERhdGFcclxuKi9cclxucm91dGVyLnBvc3QoJy9fbG9hZCcsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4vL2RlYnVnICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVxLmJvZHkpIGNvbnNvbGUuZXJyb3IoYHJlcS4ke2tleX06ICR7cmVxLmJvZHlba2V5XX1gKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJzbHQgPSBhd2FpdCBsb2FkKHJlcS5ib2R5KTtcclxuICAgIGlmIChyc2x0LmVjb2RlICE9PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYCoqKiBlcnJvcjogJHtyc2x0LmVjb2RlfTogJHtyc2x0LmVtc2d9ICoqKmApO1xyXG4gICAgICBuZXh0KGNyZWF0ZUVycm9yKDQwNikpO1xyXG4gICAgfVxyXG4gICAgcmVzLnN0YXR1cygyMDApO1xyXG4gICAgcmVzLnNlbmQoSlNPTi5zdHJpbmdpZnkocnNsdCwgbnVsbCwgXCJcXHRcIikpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coYExkU3YgbG9hZCBQT1NUIGVycm9yOiAke2Vycn1gKTtcclxuICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XHJcbiAgfVxyXG59KTtcclxucm91dGVyLmdldCAoJy9fbG9hZCcsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSBtYWlMZFN2IGxvYWQnKTtcclxufSk7XHJcblxyXG5cclxuLypcclxuKiogIFNlbmQgU2F2ZURhdGFcclxuKi9cclxucm91dGVyLnBvc3QoJy9fc2F2ZScsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4vL2RlYnVnICAgIGZvciAoY29uc3Qga2V5IGluIHJlcS5ib2R5KSBjb25zb2xlLmVycm9yKGByZXEuJHtrZXl9OiAke3JlcS5ib2R5W2tleV19YCk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByc2x0ID0gYXdhaXQgc2F2ZShyZXEuYm9keSk7XHJcbiAgICBpZiAocnNsdC5lY29kZSAhPT0gMCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGAqKiogZXJyb3I6ICR7cnNsdC5lY29kZX06ICR7cnNsdC5lbXNnfSAqKipgKTtcclxuICAgICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcclxuICAgIH1cclxuICAgIHJlcy5zdGF0dXMoMjAwKTtcclxuICAgIHJlcy5zZW5kKEpTT04uc3RyaW5naWZ5KHJzbHQsIG51bGwsIFwiXFx0XCIpKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGBMZFN2IHNhdmUgUE9TVCBlcnJvcjogJHtlcnJ9YCk7XHJcbiAgICBuZXh0KGNyZWF0ZUVycm9yKDQwNikpO1xyXG4gIH1cclxufSk7XHJcbnJvdXRlci5nZXQgKCcvX3NhdmUnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcclxuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgbWFpTGRTdiBzYXZlJyk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vKlxyXG4qKiBGb3IgVGVzdCBGdW5jdGlvblxyXG4qL1xyXG5yb3V0ZXIucG9zdCgnL3Rlc3QnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcclxuICB0cnkge1xyXG4vL2RlYnVnICAgIGZvciAoY29uc3Qga2V5IGluIHJlcS5ib2R5KSBjb25zb2xlLmVycm9yKGByZXEuJHtrZXl9OiAke3JlcS5ib2R5W2tleV19YCk7XHJcblxyXG4gICAgY29uc3QgcnNsdCA9IGF3YWl0IHRlc3QocmVxLmJvZHkpO1xyXG4gICAgaWYgKHJzbHQuZWNvZGUgIT09IDApIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgKioqIGVycm9yOiAke3JzbHQuZWNvZGV9OiAke3JzbHQuZW1zZ30gKioqYCk7XHJcbiAgICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzLnJlbmRlcigncGFnZXMvdGVzdCcsIHJzbHQpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihgbmV3TG9hZCBQT1NUIGVycm9yOiAke2Vycn1gKTtcclxuICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XHJcbiAgfVxyXG59KTtcclxucm91dGVyLmdldCAoJy90ZXN0JywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgdHJ5IHtcclxuLy9kZWJ1ZyAgICBmb3IgKGNvbnN0IGtleSBpbiByZXEuYm9keSkgY29uc29sZS5lcnJvcihgcmVxLiR7a2V5fTogJHtyZXEuYm9keVtrZXldfWApO1xyXG5cclxuICAgIHJlcy5yZW5kZXIoJ3BhZ2VzL3Rlc3QnLHtwaWQ6IC0xfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgbmV3TG9hZCBQT1NUIGVycm9yOiAke2Vycn1gKTtcclxuICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XHJcbiAgfVxyXG4vLyAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIExvYWQgVGVzdCAgb2YgbWFpJyk7XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XHJcbiIsImltcG9ydCB7IGFsbE1hemUsIGdldE1hemUsIG5ld01hemUgfSAgZnJvbSAnLi4vbGliL19KU09OX21haV9tYXplJztcclxuaW1wb3J0IGNyZWF0ZUVycm9yICBmcm9tICdodHRwLWVycm9ycyc7XHJcblxyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG4vKiBHRVQgdXNlcnMgbGlzdGluZy4gKi9cclxucm91dGVyLmdldCAoJy8nLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcclxuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgbWFpTWF6ZScpO1xyXG59KTtcclxuXHJcbnJvdXRlci5wb3N0KCcvbmV3TWF6ZScsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHRyeSB7XHJcbi8vZGVidWcgICAgZm9yIChjb25zdCBrZXkgaW4gcmVxLmJvZHkpIGNvbnNvbGUuZXJyb3IoYHJlcS4ke2tleX06ICR7cmVxLmJvZHlba2V5XX1gKTtcclxuXHJcbiAgICBjb25zdCByZXQgPSBuZXdNYXplKHJlcS5ib2R5KTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKTtcclxuICAgIHJlcy5zZW5kKEpTT04uc3RyaW5naWZ5KHJldCwgbnVsbCwgXCJcXHRcIikpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coYG5ld0dhbWUgUE9TVCBlcnJvcjogJHtlcnJ9YCk7XHJcbiAgICBuZXh0KGNyZWF0ZUVycm9yKDQwNikpO1xyXG4gIH1cclxufSk7XHJcblxyXG5yb3V0ZXIuZ2V0ICgnL25ld01hemUnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcclxuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgTmV3IEdhbWUgVG8gTWF6ZSBvZiBtYWknKTtcclxufSk7XHJcblxyXG5yb3V0ZXIucG9zdCgnL2dldE1hemUnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcclxuICB0cnkge1xyXG4vL2RlYnVnICAgIGZvciAoY29uc3Qga2V5IGluIHJlcS5ib2R5KSBjb25zb2xlLmVycm9yKGByZXEuJHtrZXl9OiAke3JlcS5ib2R5W2tleV19YCk7XHJcblxyXG4gICAgY29uc3QgcmV0ID0gZ2V0TWF6ZShyZXEuYm9keSk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCk7XHJcbiAgICByZXMuc2VuZChKU09OLnN0cmluZ2lmeShyZXQsIG51bGwsIFwiXFx0XCIpKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGBuZXdNYXplIFBPU1QgZXJyb3I6ICR7ZXJyfWApO1xyXG4gICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcclxuICB9XHJcbn0pO1xyXG5cclxucm91dGVyLmdldCAoJy9nZXRNYXplJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBHZXR0aW5nIE5ldyBNYXplIGRhdGEgb2YgbWFpJyk7XHJcbn0pO1xyXG5cclxuXHJcbnJvdXRlci5wb3N0KCcvYWxsTWF6ZScsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHRyeSB7XHJcbi8vZGVidWcgICAgZm9yIChjb25zdCBrZXkgaW4gcmVxLmJvZHkpIGNvbnNvbGUuZXJyb3IoYHJlcS4ke2tleX06ICR7cmVxLmJvZHlba2V5XX1gKTtcclxuXHJcbiAgICBjb25zdCByZXQgPSBhbGxNYXplKHJlcS5ib2R5KTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKTtcclxuICAgIHJlcy5zZW5kKEpTT04uc3RyaW5naWZ5KHJldCwgbnVsbCwgXCJcXHRcIikpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coYG1hemVJbmZvIFBPU1QgZXJyb3I6ICR7ZXJyfWApO1xyXG4gICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcclxuICB9XHJcbn0pO1xyXG5cclxucm91dGVyLmdldCAoJy9hbGxNYXplJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBBbGwgTWF6ZSBJbmZvbWF0aW9uIG9mIG1haScpO1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xyXG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuXHJcbnZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG52YXIgbWFpR3VsZFJvdXRlciA9IHJlcXVpcmUoJy4vbWFpR3VsZCcpO1xyXG52YXIgbWFpTWF6ZVJvdXRlciA9IHJlcXVpcmUoJy4vbWFpTWF6ZScpO1xyXG52YXIgbWFpTGRTdlJvdXRlciA9IHJlcXVpcmUoJy4vbWFpTGRTdicpO1xyXG5cclxuLy8gcm91dGVyIHNldHVwXHJcbnJvdXRlci51c2UoJy9ndWxkJywgICBtYWlHdWxkUm91dGVyKTtcclxucm91dGVyLnVzZSgnL21hemUnLCAgIG1haU1hemVSb3V0ZXIpO1xyXG5yb3V0ZXIudXNlKCcvbGRzdicsICAgbWFpTGRTdlJvdXRlcik7XHJcblxyXG4vKiBHRVQgdXNlcnMgbGlzdGluZy4gKi9cclxucm91dGVyLmdldCgnLycsIGZ1bmN0aW9uKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSB7XHJcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIG1haWV4Jyk7XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG52YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbi8qIEdFVCB1c2VycyBsaXN0aW5nLiAqL1xyXG5yb3V0ZXIuZ2V0KCcvJywgZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcclxuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgdXNlciByZXNvdXJjZScpO1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWUtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cC1lcnJvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm15c3FsMi9wcm9taXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==