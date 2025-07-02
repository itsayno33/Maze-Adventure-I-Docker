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
    C_Hero.prototype.hero_bonus = function (n) {
        return n * (this.lv + 1);
    };
    C_Hero.prototype.hp_damage = function (dmg) {
        var _a, _b, _c;
        var xp_now = (_a = this.abi_p.now.get('xp')) !== null && _a !== void 0 ? _a : 0;
        var xd_now = (_b = this.abi_p.now.get('xd')) !== null && _b !== void 0 ? _b : 0;
        xd_now += dmg - Math.round(this.hero_bonus(((_c = this.abi_p.now.get('vit')) !== null && _c !== void 0 ? _c : 0) / 10.0));
        var d = xd_now > xp_now ? xp_now : xd_now;
        this.abi_p.now.set('xd', d);
        return d;
    };
    C_Hero.prototype.hp_heal = function (heal) {
        var _a;
        var xd_now = (_a = this.abi_p.now.get('xd')) !== null && _a !== void 0 ? _a : 0;
        if (xd_now <= 0)
            return 0;
        xd_now -= heal;
        var d = xd_now < 0 ? 0 : xd_now;
        this.abi_p.now.set('xd', d);
        return d;
    };
    C_Hero.prototype.hp_auto_heal = function () {
        var _a;
        var heal = Math.ceil(this.hero_bonus(((_a = this.abi_p.now.get('vit')) !== null && _a !== void 0 ? _a : 0) / 10.0));
        return this.hp_heal(heal);
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
var C_Point_1 = __webpack_require__(/*! ./C_Point */ "../maicl/src/d_mdl/C_Point.ts");
var C_Location_1 = __webpack_require__(/*! ./C_Location */ "../maicl/src/d_mdl/C_Location.ts");
var C_Range_1 = __webpack_require__(/*! ./C_Range */ "../maicl/src/d_mdl/C_Range.ts");
var F_Rand_1 = __webpack_require__(/*! ../d_utl/F_Rand */ "../maicl/src/d_utl/F_Rand.ts");
var F_Math_1 = __webpack_require__(/*! ../d_utl/F_Math */ "../maicl/src/d_utl/F_Math.ts");
var C_PointDir_1 = __webpack_require__(/*! ./C_PointDir */ "../maicl/src/d_mdl/C_PointDir.ts");
var T_Direction_1 = __webpack_require__(/*! ./T_Direction */ "../maicl/src/d_mdl/T_Direction.ts");
var C_PointSet2D_1 = __webpack_require__(/*! ./C_PointSet2D */ "../maicl/src/d_mdl/C_PointSet2D.ts");
var C_MazeObjCommon_1 = __webpack_require__(/*! ./C_MazeObjCommon */ "../maicl/src/d_mdl/C_MazeObjCommon.ts");
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
    C_Maze.prototype.get_obj_array = function () {
        var obj_array = [];
        for (var id in this.objs)
            obj_array.push(this.objs[id]);
        return obj_array;
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
                var new_obj = (0, C_MazeObjCommon_1.new_MazeObj)(json_obj);
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
var C_MazeObjCommon_1 = __webpack_require__(/*! ./C_MazeObjCommon */ "../maicl/src/d_mdl/C_MazeObjCommon.ts");
var C_MazeCell = /** @class */ (function () {
    function C_MazeCell(j) {
        var _a, _b, _c;
        var _d;
        (_a = j.obj) !== null && _a !== void 0 ? _a : (j.obj = {});
        (_b = (_d = j.obj).clname) !== null && _b !== void 0 ? _b : (_d.clname = this.constructor.name);
        this.kind = (_c = j.kind) !== null && _c !== void 0 ? _c : T_MzKind_1.T_MzKind.NoDef;
        this.my_obj = (0, C_MazeObjCommon_1.new_MazeObj)(j.obj);
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
        this.stat = {}; // C_MazeObjのサブクラスの初期値を保持する
        this.clname = this.constructor.name;
        this.uniq_id = this.clname + '_' + (0, F_Rand_1._get_uuid)();
        this.pos = new C_PointDir_1.C_PointDir({ x: 0, y: 0, z: 0, d: 0 });
        this.my_view = undefined;
        this.can_thr = true;
        this.h_w_dmg = 0;
        this.stat = {};
        if (j !== undefined)
            this.__init(j);
    }
    C_MazeObj.prototype.__init = function (j) {
        var _a, _b;
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
        if (j.stat !== undefined)
            this.stat = JSON.parse((_b = j.stat) !== null && _b !== void 0 ? _b : '{}');
        return this;
    };
    C_MazeObj.prototype.uid = function () { return this.uniq_id; };
    C_MazeObj.prototype.className = function () { return this.clname; };
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
        var _a, _b, _c;
        return {
            uniq_id: this.uniq_id,
            clname: this.clname,
            pos: this.pos.encode(),
            view: (_b = (_a = this.my_view) === null || _a === void 0 ? void 0 : _a.encode()) !== null && _b !== void 0 ? _b : {},
            can_thr: this.can_thr ? '1' : '0',
            h_w_dmg: this.h_w_dmg,
            stat: JSON.stringify((_c = this.stat) !== null && _c !== void 0 ? _c : {}),
        };
    };
    C_MazeObj.prototype.decode = function (j) {
        return this.__init(j);
    };
    return C_MazeObj;
}());
exports.C_MazeObj = C_MazeObj;


/***/ }),

/***/ "../maicl/src/d_mdl/C_MazeObjCommon.ts":
/*!*********************************************!*\
  !*** ../maicl/src/d_mdl/C_MazeObjCommon.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.new_MazeObj = new_MazeObj;
var C_MazeObj_1 = __webpack_require__(/*! ./C_MazeObj */ "../maicl/src/d_mdl/C_MazeObj.ts");
var C_MazeObjEtc_1 = __webpack_require__(/*! ./C_MazeObjEtc */ "../maicl/src/d_mdl/C_MazeObjEtc.ts");
function new_MazeObj(j) {
    if (j === undefined) {
        return new C_MazeObj_1.C_MazeObj(j);
    }
    switch (j.clname) {
        case 'C_MazeObj':
            return new C_MazeObj_1.C_MazeObj(j);
        case 'C_MazeObjMono':
            return new C_MazeObjEtc_1.C_MazeObjMono(j);
        case 'C_MazeObjShogai':
            return new C_MazeObjEtc_1.C_MazeObjShogai(j);
        default:
            return new C_MazeObj_1.C_MazeObj(j);
    }
}


/***/ }),

/***/ "../maicl/src/d_mdl/C_MazeObjEtc.ts":
/*!******************************************!*\
  !*** ../maicl/src/d_mdl/C_MazeObjEtc.ts ***!
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
exports.C_MazeObjShogai = exports.C_MazeObjMono = void 0;
var C_MazeObj_1 = __webpack_require__(/*! ./C_MazeObj */ "../maicl/src/d_mdl/C_MazeObj.ts");
var C_MazeObjMono = /** @class */ (function (_super) {
    __extends(C_MazeObjMono, _super);
    function C_MazeObjMono(j) {
        var _this = _super.call(this, j) || this;
        var jj = {
            clname: _this.constructor.name,
            can_thr: '1',
            h_w_dmg: 0,
            view: {
                layer: 2,
                letter: '物',
            },
        };
        _this.__init(jj);
        return _this;
    }
    return C_MazeObjMono;
}(C_MazeObj_1.C_MazeObj));
exports.C_MazeObjMono = C_MazeObjMono;
var C_MazeObjShogai = /** @class */ (function (_super) {
    __extends(C_MazeObjShogai, _super);
    function C_MazeObjShogai(j) {
        var _this = _super.call(this, j) || this;
        var jj = {
            clname: _this.constructor.name,
            can_thr: '0',
            h_w_dmg: 100,
            view: {
                layer: 2,
                letter: '障',
                show3D: '1',
                col_2: '#9999cc', col_L: '#6666ff',
            }
        };
        _this.__init(jj);
        return _this;
    }
    return C_MazeObjShogai;
}(C_MazeObj_1.C_MazeObj));
exports.C_MazeObjShogai = C_MazeObjShogai;


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
                        delete_hero_SQL = "\n            DELETE FROM tbl_hero \n            WHERE  save_id = :save_id AND join_uid = :join_uid\n        ";
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

/***/ "../maicl/src/d_rdb/C_MazeObjRDB.ts":
/*!******************************************!*\
  !*** ../maicl/src/d_rdb/C_MazeObjRDB.ts ***!
  \******************************************/
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
exports.C_MazeObjRDB = void 0;
var C_MazeObj_1 = __webpack_require__(/*! ../d_mdl/C_MazeObj */ "../maicl/src/d_mdl/C_MazeObj.ts");
var C_MazeObjRDB = /** @class */ (function () {
    function C_MazeObjRDB() {
    }
    C_MazeObjRDB.get_from_rdb_all = function (db_mai, mes, save_id, join_uid) {
        return __awaiter(this, void 0, void 0, function () {
            var obje_array;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, C_MazeObjRDB.get_from_tbl_all(db_mai, mes, save_id, join_uid)];
                    case 1:
                        obje_array = _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/, obje_array];
                }
            });
        });
    };
    C_MazeObjRDB.set_to_rdb = function (db_mai, mes, save_id, maze_uid, obje) {
        return __awaiter(this, void 0, void 0, function () {
            var mase_id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, C_MazeObjRDB.add_tbl(db_mai, mes, save_id, maze_uid, obje)];
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
    C_MazeObjRDB.del_to_rdb_all = function (db_mai, mes, save_id) {
        return __awaiter(this, void 0, void 0, function () {
            var rslt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, C_MazeObjRDB.del_tbl_all(db_mai, mes, save_id)];
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
    C_MazeObjRDB.del_to_rdb = function (db_mai, mes, save_id, maze_uid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                C_MazeObjRDB.del_tbl(db_mai, mes, save_id, maze_uid);
                if (mes.is_err()) {
                    return [2 /*return*/, false];
                }
                return [2 /*return*/, true];
            });
        });
    };
    // DB処理。save_idで指定されたmazeレコードセットを読み込み
    // MazeObjクラスの配列にセットする
    // 
    C_MazeObjRDB.get_from_tbl_all = function (db_mai, mes, save_id, maze_uid) {
        return __awaiter(this, void 0, void 0, function () {
            var get_obje_SQL, resultRecordSet, obje_array, _i, resultRecordSet_1, rr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        get_obje_SQL = "\n            SELECT \tid,       save_id,  uniq_id, \n                    maze_uid, cls_name, \n                    pos_x,    pos_y,    pos_z,   pos_d, \n                    view,     stat \n            FROM tbl_obje\n            WHERE   save_id = :save_id AND maze_uid = :maze_uid\n        ";
                        return [4 /*yield*/, db_mai.query(get_obje_SQL, { save_id: save_id, maze_uid: maze_uid })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 33: ".concat(get_obje_SQL));
                                return [];
                            })];
                    case 1:
                        resultRecordSet = (_a.sent())[0];
                        if (resultRecordSet.length < 1) {
                            return [2 /*return*/, []];
                        }
                        obje_array = [];
                        for (_i = 0, resultRecordSet_1 = resultRecordSet; _i < resultRecordSet_1.length; _i++) {
                            rr = resultRecordSet_1[_i];
                            obje_array.push(new C_MazeObj_1.C_MazeObj(C_MazeObjRDB.from_stringArray_to_JSON(rr)));
                        }
                        return [2 /*return*/, obje_array];
                }
            });
        });
    };
    // DB処理。mazeテーブルに自身のデータを追加(insert)して
    // そのID(maze_id)を返す
    // 
    C_MazeObjRDB.add_tbl = function (db_mai, mes, save_id, maze_uid, obje) {
        return __awaiter(this, void 0, void 0, function () {
            var insert_obje_SQL, j, stat;
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        insert_obje_SQL = "\n            INSERT INTO tbl_obje(\n                save_id,  uniq_id, maze_uid, cls_name, \n                pos_x,    pos_y,   pos_z,    pos_d, \n                view,     stat \n            )\n            VALUES (\n                :save_id,  :uniq_id, :maze_uid, :cls_name, \n                :pos_x,    :pos_y,   :pos_z,    :pos_d, \n                :view,     :stat \n            )\n        ";
                        j = obje.encode();
                        stat = {
                            can_thr: j.can_thr ? '1' : '0', // C_MazeObjの初期値
                            h_w_dmg: j.h_w_dmg, // C_MazeObjの初期値
                        };
                        return [4 /*yield*/, db_mai.query(insert_obje_SQL, {
                                save_id: save_id,
                                uniq_id: j.uniq_id,
                                maze_uid: maze_uid,
                                cls_name: j.clname,
                                pos_x: (_b = (_a = j.pos) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : 0,
                                pos_y: (_d = (_c = j.pos) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : 0,
                                pos_z: (_f = (_e = j.pos) === null || _e === void 0 ? void 0 : _e.z) !== null && _f !== void 0 ? _f : 0,
                                pos_d: (_h = (_g = j.pos) === null || _g === void 0 ? void 0 : _g.d) !== null && _h !== void 0 ? _h : 0,
                                view: JSON.stringify(j.view),
                                stat: JSON.stringify(stat),
                            })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 3: ".concat(insert_obje_SQL));
                                return [];
                            })];
                    case 1:
                        _j.sent();
                        return [2 /*return*/, C_MazeObjRDB.lastInsert(db_mai, mes)];
                }
            });
        });
    };
    // tbl_teamで最後に追加した行番号(save_id)を返す【1行挿入専用】
    C_MazeObjRDB.lastInsert = function (db_mai, mes) {
        return __awaiter(this, void 0, void 0, function () {
            var lastInsert_SQL, recordSet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lastInsert_SQL = "\n            SELECT LAST_INSERT_ID() as id FROM tbl_obje;\n        ";
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
    C_MazeObjRDB.del_tbl_all = function (db_mai, mes, save_id) {
        return __awaiter(this, void 0, void 0, function () {
            var delete_obje_SQL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        delete_obje_SQL = "\n            DELETE FROM tbl_obje \n            WHERE  save_id = :save_id \n        ";
                        return [4 /*yield*/, db_mai.query(delete_obje_SQL, { save_id: save_id })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 17: ".concat(delete_obje_SQL, " ") + err);
                                return false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    // DB処理。save_idで指定されたレコード(単数)を削除(delete)する
    // 
    C_MazeObjRDB.del_tbl = function (db_mai, mes, save_id, maze_uid) {
        return __awaiter(this, void 0, void 0, function () {
            var delete_obje_SQL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        delete_obje_SQL = "\n            DELETE FROM tbl_obje \n            WHERE  save_id = :save_id AND maze_uid = :maze_uid\n        ";
                        return [4 /*yield*/, db_mai.query(delete_obje_SQL, { save_id: save_id, maze_uid: maze_uid })
                                .catch(function (err) {
                                mes.set_err_message("SQL\u30A8\u30E9\u30FC 12: ".concat(delete_obje_SQL, " ") + err);
                                return false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    C_MazeObjRDB.from_stringArray_to_JSON = function (j) {
        var _a, _b, _c, _d;
        var jj = JSON.parse((_a = j.stat) !== null && _a !== void 0 ? _a : '{}'); // C_MazeObjの初期値
        return {
            clname: j.cls_name,
            uniq_id: j.uniq_id,
            maze_uid: j.maze_uid,
            pos: { x: j.pos_x, y: j.pos_y, z: j.pos_z, d: j.pos_d },
            view: JSON.parse((_b = j.view) !== null && _b !== void 0 ? _b : '{}'), // C_MazeObjViewの初期値
            can_thr: (_c = jj.can_thr) !== null && _c !== void 0 ? _c : '1', // C_MazeObjの初期値
            h_w_dmg: (_d = jj.h_w_dmg) !== null && _d !== void 0 ? _d : 0, // C_MazeObjの初期値
        };
    };
    return C_MazeObjRDB;
}());
exports.C_MazeObjRDB = C_MazeObjRDB;


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
var C_MazeObjRDB_1 = __webpack_require__(/*! ./C_MazeObjRDB */ "../maicl/src/d_rdb/C_MazeObjRDB.ts");
var C_MazeRDB = /** @class */ (function () {
    function C_MazeRDB() {
    }
    C_MazeRDB.get_from_rdb_all = function (db_mai, mes, save_id) {
        return __awaiter(this, void 0, void 0, function () {
            var maze_array, _i, maze_array_1, maze, obje_array, _a, obje_array_1, obje;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, C_MazeRDB.get_from_tbl_all(db_mai, mes, save_id)];
                    case 1:
                        maze_array = _b.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, []];
                        }
                        _i = 0, maze_array_1 = maze_array;
                        _b.label = 2;
                    case 2:
                        if (!(_i < maze_array_1.length)) return [3 /*break*/, 5];
                        maze = maze_array_1[_i];
                        return [4 /*yield*/, C_MazeObjRDB_1.C_MazeObjRDB.get_from_rdb_all(db_mai, mes, save_id, maze.uid())];
                    case 3:
                        obje_array = _b.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, []];
                        }
                        for (_a = 0, obje_array_1 = obje_array; _a < obje_array_1.length; _a++) {
                            obje = obje_array_1[_a];
                            maze.add_obj(obje);
                        }
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, maze_array];
                }
            });
        });
    };
    C_MazeRDB.set_to_rdb = function (db_mai, mes, save_id, maze) {
        return __awaiter(this, void 0, void 0, function () {
            var mase_id, _i, _a, obje;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, C_MazeRDB.add_tbl(db_mai, mes, save_id, maze)];
                    case 1:
                        mase_id = _b.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        _i = 0, _a = maze.get_obj_array();
                        _b.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        obje = _a[_i];
                        return [4 /*yield*/, C_MazeObjRDB_1.C_MazeObjRDB.set_to_rdb(db_mai, mes, save_id, maze.uid(), obje)];
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
    C_MazeRDB.del_to_rdb = function (db_mai, mes, save_id, maze_uid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, C_MazeObjRDB_1.C_MazeObjRDB.del_to_rdb(db_mai, mes, save_id, maze_uid)];
                    case 1:
                        _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        C_MazeRDB.del_tbl(db_mai, mes, save_id);
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
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
var C_MazeObjRDB_1 = __webpack_require__(/*! ./C_MazeObjRDB */ "../maicl/src/d_rdb/C_MazeObjRDB.ts");
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
                        return [4 /*yield*/, C_MazeObjRDB_1.C_MazeObjRDB.del_tbl_all(db_mai, mes, save_id)];
                    case 2:
                        _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, C_GuildRDB_1.C_GuildRDB.del_tbl(db_mai, mes, save_id)];
                    case 3:
                        _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, C_TeamRDB_1.C_TeamRDB.del_tbl(db_mai, mes, save_id)];
                    case 4:
                        _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, C_MvptRDB_1.C_MvptRDB.del_tbl(db_mai, mes, save_id)];
                    case 5:
                        _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, C_MazeRDB_1.C_MazeRDB.del_tbl(db_mai, mes, save_id)];
                    case 6:
                        _a.sent();
                        if (mes.is_err()) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, C_SaveDataRDB.del_tbl(db_mai, mes, save_id)];
                    case 7:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsU0FBUztZQUFFLElBQUksQ0FBQyxFQUFFLEdBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQVMsU0FBUztZQUFFLElBQUksQ0FBQyxJQUFJLEdBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztRQUU3RCxrRUFBa0U7UUFDMUQsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFTLFNBQVMsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUVELElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsQ0FBQyxTQUFTLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsQ0FBQyxTQUFTLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMs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QUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxDQUFDO0lBQzNGLENBQUM7SUFFUywrQkFBTyxHQUFqQjtRQUNJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFJLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUUsQ0FBQztRQUN0RSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBSSxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFFLENBQUM7UUFDdEUsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUksSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxDQUFDO1FBQ3RFLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFJLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFrQixDQUFDLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUUsQ0FBQztJQUMxRSxDQUFDO0lBRU0sbUNBQVcsR0FBbEIsVUFBbUIs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QWQsVUFBZSxDQUE2QjtRQUN4QyxJQUFJLENBQUMsS0FBSyxTQUFTO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFakMsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFNLFNBQVM7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDdkQsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdEQsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFNLFNBQVM7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdEQsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdEQsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFPLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdEQsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFRLFNBQVM7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFLLENBQUMsQ0FBQyxJQUFJLEtBQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNsRixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDLEtBQUssS0FBTSxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDLEtBQUssS0FBTSxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDLEtBQUssS0FBTSxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDLEtBQUssS0FBTSxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDLEtBQUssS0FBTSxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDLEtBQUssS0FBTSxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDLEtBQUssS0FBTSxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQU8sU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDLEtBQUss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S0FBSyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUM7SUFDdkYsSUFBTSxZQUFZLEdBQUcsRUFBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFDO0lBQ3ZGLElBQU0sWUFBWSxHQUFHLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBQztJQUN2RixJQUFNLFlBQVksR0FBRyxFQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUM7SUFFdkYsSUFBTSxZQUFZLEdBQUcsRUFBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFDO0lBQ3ZGLElBQU0sWUFBWSxHQUFHLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBQztJQUN2RixJQUFNLFlBQVksR0FBRyxFQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUM7SUFDdkYsSUFBTSxZQUFZLEdBQUcsRUFBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFDO0lBRXZGLElBQUksR0FBRyxHQUFHLGlCQUFpQixDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakUsSUFBSSxHQUFHLEdBQUcsaUJBQWlCLENB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LFNBQVMsQ0FBQyxLQUFLLEVBQUM7UUFDNUMsRUFBRSxFQUFFLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUM7UUFDNUMsRUFBRSxFQUFFLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUM7UUFDNUMsRUFBRSxFQUFFLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUM7S0FDL0M7SUFDRCxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsQ0FBUyxFQUFFLElBQWlCLEVBQUUsSUFBaUI7SUFDaEUsSUFBTSxHQUFHLEdBQUcsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUcsZ0NBQWdDO0lBQzdFLElBQUksR0FBRyxLQUFLLFNBQVM7UUFBRSxPQUFPO0lBRTlCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoQixHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBRWhCLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2YsR0FBRyxDQUFDLFNBQVMsR0FBSyxJQUFJLENBQUM7UUFDdkIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNELElBQUksSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQyxTQUFTLEdBQUssQ0FBQyxDQUFDO1FBQ3BCLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNqQixDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLENBQVMsRUFBRSxJQUFpQixFQUFFLElBQWlCO0lBQ2hFLElBQU0sR0FBRyxHQUFHLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQyxJQUFJLEdBQUcsS0FBSyxTQUFTO1FBQUUsT0FBTztJQUU5QixHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUVoQixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNmLEdBQUcsQ0FBQyxTQUFTLEdBQUssSUFBSSxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFDRCxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN2QixHQUFHLENBQUMsU0FBUyxHQUFLLENBQUMsQ0FBQztRQUNwQixHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakIsQ0FBQztBQUNMLENBQUM7Ozs7Ozs7Ozs7O0FDOWNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhYiwwQ0FlQztBQTFCRCwrRkFBeUQ7QUFFekQsMEZBQTREO0FBUzVELFNBQWdCLGVBQWUsQ0FBQyxDQUE4Qjs7SUFDMUQsSUFBSSxDQUFDLEtBQUssU0FBUztRQUFFLE9BQU87SUFDNUIsS0FBSyxDQUFDLFlBQVk7VUFDWixjQUFjLEdBQUksQ0FBQyxPQUFDLENBQUMsT0FBTyxtQ0FBTyxHQUFHLENBQUM7VUFDdkMsY0FBYyxHQUFJLENBQUMsT0FBQyxDQUFDLE9BQU8sbUNBQU8sR0FBRyxDQUFDO1VBQ3ZDLGNBQWMsR0FBSSxDQUFDLE9BQUMsQ0FBQyxRQUFRLG1DQUFNLEdBQUcsQ0FBQztVQUN2QyxVQUFVLEdBQVEsQ0FBQyxPQUFDLENBQUMsSUFBSSxtQ0FBVSxHQUFHLENBQUM7VUFDdkMsVUFBVSxHQUFRLENBQUMsT0FBQyxDQUFDLElBQUksbUNBQVUsR0FBRyxDQUFDO1VBQ3ZDLFVBQVUsR0FBUSxDQUFDLE9BQUMsQ0FBQyxPQUFPLG1DQUFPLEdBQUcsQ0FBQztVQUN2QyxXQUFXLEdBQU8sQ0FBQyxhQUFDLENBQUMsT0FBTywwQ0FBRSxDQUFDLG1DQUFJLEdBQUcsQ0FBQztVQUN2QyxXQUFXLEdBQU8sQ0FBQyxhQUFDLENBQUMsT0FBTywwQ0FBRSxDQUFDLG1DQUFJLEdBQUcsQ0FBQztVQUN2QyxXQUFXLEdBQU8sQ0FBQyxhQUFDLENBQUMsT0FBTywwQ0FBRSxDQUFDLG1DQUFJLEdBQUcsQ0FBQztVQUN2QyxXQUFXLEdBQU8sQ0FBQyxhQUFDLENBQUMsT0FBTywwQ0FBRSxDQUFDLG1DQUFJLEdBQUcsQ0FBQztVQUN2QyxJQUFJLENBQ1QsQ0FBQztBQUNOLENBQUM7QUFHRDtJQUFvQyxrQ0FBVTtJQUkxQyx3QkFBbUIsSUFBd0I7UUFDdkMsa0JBQUssWUFBQyxJQUFJLENBQUMsU0FBQztRQUNaLEtBQUksQ0FBQyxPQUFPLEdBQUksVUFBVSxHQUFHLHNCQUFTLEdBQUUsQ0FBQztRQUN6QyxLQUFJLENBQUMsT0FBTyxHQUFJLEVBQUUsQ0FBQztRQUNuQixLQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUUxQixJQUFJLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLElBQUk7WUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDOztJQUMvRCxDQUFDO0lBQ00sNEJBQUcsR0FBVixjQUF1QixPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUM7SUFDcEMsNEJBQUcsR0FBVixjQUF1QixPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUM7SUFDcEMsNEJBQUcsR0FBVixjQUFpQyxPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUM7SUFFL0MsZ0NBQU8sR0FBZCxjQUF3QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsR0FBRyxzQkFBUyxHQUFFLENBQUMsRUFBQztJQUMxRCxnQ0FBTyxHQUFkLFVBQWUsR0FBVyxJQUFVLElBQUksQ0FBQyxPQUFPLEdBQUksR0FBRyxDQUFDLEVBQUM7SUFDbEQsZ0NBQU8sR0FBZCxVQUFlLEdBQVcsSUFBVSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxFQUFDO0lBRWxELDhCQUFLLEdBQVo7UUFDSSxJQUFNLElBQUksR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0saUNBQVEsR0FBZixVQUFnQixHQUFXO1FBQ3ZCLElBQUksQ0FBQztZQUNELElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFzQixDQUFDO1lBQy9DLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNYLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFBQSxDQUFDO0lBQ04sQ0FBQztJQUNNLCtCQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRWEsaUNBQWtCLEdBQWhDLFVBQWlDLEVBQWtCO1FBQy9DLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ2Esc0NBQXVCLEdBQXJDLFVBQXNDLEdBQW9DO1FBQ3RFLElBQU0sRUFBRSxHQUFHLEVBQXlCLENBQUM7UUFDckMsS0FBSyxJQUFNLEVBQUUsSUFBSSxHQUFHO1lBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNoRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNhLGlDQUFrQixHQUFoQyxVQUFpQyxHQUFXO1FBQ3hDLElBQUksQ0FBQztZQUNELElBQU0sQ0FBQyxHQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUF3QixDQUFDO1lBQ25ELE9BQU8sSUFBSSxjQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDWCxPQUFPLElBQUksY0FBYyxFQUFFLENBQUM7UUFDaEMsQ0FBQztRQUFBLENBQUM7SUFDTixDQUFDO0lBQ2Esc0NBQXVCLEdBQXJDLFVBQXNDLEdBQVc7UUFDN0MsSUFBSSxDQUFDO1lBQ0QsSUFBTSxDQUFDLEdBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQXdCLENBQUM7WUFDbkQsSUFBTSxHQUFHLEdBQUcsRUFBb0MsQ0FBQztZQUNqRCxLQUFpQixVQUFDLEVBQUQsT0FBQyxFQUFELGVBQUMsRUFBRCxJQUFDLEVBQUUsQ0FBQztnQkFBaEIsSUFBTSxFQUFFO2dCQUNULElBQU0sR0FBRyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM1QyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3pCLENBQUM7WUFDRCxPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7UUFBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ1gsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDO1FBQUEsQ0FBQztJQUNOLENBQUM7SUFFTSwrQkFBTSxHQUFiOztRQUNJLElBQU0sQ0FBQyxHQUFHLGdCQUFLLENBQUMsTUFBTSxXQUF1QixDQUFDO1FBQzlDLENBQUMsQ0FBQyxPQUFPLEdBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMxQixDQUFDLENBQUMsT0FBTyxHQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDMUIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxVQUFJLENBQUMsUUFBUSxtQ0FBSSxFQUFFLENBQUM7UUFDakMsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ00sK0JBQU0sR0FBYixVQUFjLENBQXFCO1FBQy9CLGdCQUFLLENBQUMsTUFBTSxZQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLFNBQVM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQU0sU0FBUztZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUN4RCxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQU0sU0FBUztZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUN4RCxJQUFJLENBQUMsQ0FBQyxRQUFRLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUV6RCxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQ3BELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSw4QkFBSyxHQUFaOztRQUNJLEtBQUssQ0FBQyxZQUFZO2NBQ1osY0FBYyxHQUFJLENBQUMsVUFBSSxDQUFDLE9BQU8sbUNBQU8sR0FBRyxDQUFDO2NBQzFDLGNBQWMsR0FBSSxDQUFDLFVBQUksQ0FBQyxPQUFPLG1DQUFPLEdBQUcsQ0FBQztjQUMxQyxjQUFjLEdBQUksQ0FBQyxVQUFJLENBQUMsUUFBUSxtQ0FBTSxHQUFHLENBQUM7Y0FDMUMsVUFBVSxHQUFRLENBQUMsVUFBSSxDQUFDLFFBQVEsbUNBQU0sR0FBRyxDQUFDO2NBQzFDLFVBQVUsR0FBUSxDQUFDLFVBQUksQ0FBQyxRQUFRLG1DQUFNLEdBQUcsQ0FBQztjQUMxQyxVQUFVLEdBQVEsQ0FBQyxVQUFJLENBQUMsT0FBTyxtQ0FBTyxHQUFHLENBQUM7Y0FDMUMsV0FBVyxHQUFPLENBQUMsZ0JBQUksQ0FBQyxPQUFPLDBDQUFFLENBQUMsbUNBQUksR0FBRyxDQUFDO2NBQzFDLFdBQVcsR0FBTyxDQUFDLGdCQUFJLENBQUMsT0FBTywwQ0FBRSxDQUFDLG1DQUFJLEdBQUcsQ0FBQztjQUMxQyxXQUFXLEdBQU8sQ0FBQyxnQkFBSSxDQUFDLE9BQU8sMENBQUUsQ0FBQyxtQ0FBSSxHQUFHLENBQUM7Y0FDMUMsV0FBVyxHQUFPLENBQUMsZ0JBQUksQ0FBQyxPQUFPLDBDQUFFLENBQUMsbUNBQUksR0FBRyxDQUFDO2NBQzFDLElBQUksQ0FDVCxDQUFDO0lBQ04sQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxDQXJHbUMsdUJBQVUsR0FxRzdDO0FBckdZLHdDQUFjOzs7Ozs7Ozs7OztBQy9CZDs7O0FBVWI7SUFJSSxpQkFBbUIsQ0FBdUMsRUFBRSxDQUFVLEVBQUUsQ0FBVTtRQUM5RSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUU5QixJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsT0FBTztRQUNYLENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDMUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLE9BQU87UUFDWCxDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsWUFBWSxPQUFPLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLE9BQU87WUFDWCxDQUFDO2lCQUFNLENBQUM7Z0JBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZixPQUFPO1lBQ1gsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5QixPQUFPO0lBQ1gsQ0FBQztJQUVNLHVCQUFLLEdBQVosY0FBeUIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBQztJQUMzQyx1QkFBSyxHQUFaLFVBQWEsQ0FBVTtRQUNuQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLDBCQUFRLEdBQWYsVUFBZ0IsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1FBQzNDLE9BQU8sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDTSx3QkFBTSxHQUFiLFVBQWMsQ0FBVTtRQUNwQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU0sd0JBQU0sR0FBYjtRQUNJLE9BQU8sRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQzdDLENBQUM7SUFDTSx3QkFBTSxHQUFiLFVBQWMsQ0FBYztRQUN4QixJQUFJLENBQUMsS0FBSyxTQUFTO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUM3RSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDO0FBbERZLDBCQUFPOzs7Ozs7Ozs7OztBQ1ZQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QmIsc0NBU0M7QUE5QkQsc0ZBQWdEO0FBR25DLG1CQUFXLEdBQTJCO0lBQy9DLENBQUMsRUFBRSxDQUFDO0lBQ0osQ0FBQyxFQUFFLENBQUM7SUFDSixDQUFDLEVBQUUsQ0FBQztJQUNKLENBQUMsRUFBRSxDQUFDO0lBQ0osQ0FBQyxFQUFFLEVBQUU7Q0FDQyxDQUFDO0FBR1gsU0FBUyxRQUFRLENBQUMsR0FBNEI7O0lBQzFDLE9BQU8sWUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBVyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQUcsSUFBSSwwQkFBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsRUFBeEIsQ0FBd0IsQ0FBQyxtQ0FBSSxNQUFNLENBQUM7QUFDcEYsQ0FBQztBQU9ELFNBQWdCLGFBQWEsQ0FBQyxDQUEwQjs7SUFDcEQsSUFBSSxDQUFDLEtBQUssU0FBUztRQUFFLE9BQU87SUFDNUIsS0FBSyxDQUFDLGlCQUFpQjtVQUNqQixPQUFPLEdBQU8sQ0FBQyxPQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsQ0FBQyxtQ0FBSSxHQUFHLENBQUM7VUFDM0IsT0FBTyxHQUFPLENBQUMsT0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLENBQUMsbUNBQUksR0FBRyxDQUFDO1VBQzNCLE9BQU8sR0FBTyxDQUFDLE9BQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxDQUFDLG1DQUFJLEdBQUcsQ0FBQztVQUMzQixPQUFPLEdBQU8sQ0FBQyxPQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsQ0FBQyxtQ0FBSSxHQUFHLENBQUM7VUFDM0IsSUFBSSxDQUNULENBQUM7QUFDTixDQUFDO0FBRUQ7SUFBaUMsOEJBQU87SUFFcEMsb0JBQW1CLENBQStDO1FBQzlELGtCQUFLLFlBQUMsQ0FBQyxDQUFDLFNBQUM7UUFDVCxLQUFJLENBQUMsQ0FBQyxHQUFHLG1CQUFXLENBQUMsQ0FBQyxDQUFDO1FBRXZCLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRSxDQUFDOztRQUV0QixDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUN4QixLQUFJLENBQUMsQ0FBQyxHQUFHLENBQWdCLENBQUM7O1FBRTlCLENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxZQUFZLFVBQVUsRUFBRSxDQUFDO2dCQUMxQixLQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFnQixDQUFDO1lBQ2hDLENBQUM7aUJBQU0sQ0FBQztnQkFDSixLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLENBQUM7O1FBRUwsQ0FBQztRQUNELEtBQUksQ0FBQyxDQUFDLEdBQUcsbUJBQVcsQ0FBQyxDQUFDLENBQUM7O0lBRTNCLENBQUM7SUFDTSxrQ0FBYSxHQUFwQjtRQUNJLFFBQVEsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2IsS0FBSyxDQUFDLENBQUMsQ0FBRSxPQUFPLEdBQUcsQ0FBQztZQUNwQixLQUFLLENBQUMsQ0FBQyxDQUFFLE9BQU8sR0FBRyxDQUFDO1lBQ3BCLEtBQUssQ0FBQyxDQUFDLENBQUUsT0FBTyxHQUFHLENBQUM7WUFDcEIsS0FBSyxDQUFDLENBQUMsQ0FBRSxPQUFPLEdBQUcsQ0FBQztZQUNwQixPQUFPLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQztRQUN4QixDQUFDO0lBQ0wsQ0FBQztJQUVNLDBCQUFLLEdBQVo7UUFDSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUNNLDBCQUFLLEdBQVosVUFBYSxDQUFjO1FBQ3ZCLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxtQkFBVyxDQUFDO1lBQUUsT0FBTyxTQUFTLENBQUM7UUFDcEQsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ00sMkJBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTSwyQkFBTSxHQUFiLFVBQWMsQ0FBMkI7UUFDckMsSUFBSSxDQUFDLFlBQVksVUFBVSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxtQkFBVyxDQUFDO2dCQUFFLE9BQU8sU0FBUyxDQUFDO1lBQ3RELGdCQUFLLENBQUMsS0FBSyxZQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksbUJBQVcsQ0FBQztZQUFFLE9BQU8sU0FBUyxDQUFDO1FBQ3RELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sMkJBQU0sR0FBYjtRQUNJLElBQU0sQ0FBQyxHQUFHLGdCQUFLLENBQUMsTUFBTSxXQUFtQixDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDLEdBQU8sSUFBSSxDQUFDLENBQVcsQ0FBQztRQUMzQixPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFDTSwyQkFBTSxHQUFiLFVBQWMsQ0FBaUI7UUFDM0IsSUFBSSxDQUFDLEtBQUssU0FBUztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksbUJBQVcsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRWpELGdCQUFLLENBQUMsTUFBTSxZQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQWdCLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLDBCQUFLLEdBQVo7O1FBQ0ksS0FBSyxDQUFDLGlCQUFpQjtjQUNqQixPQUFPLEdBQU8sQ0FBQyxVQUFJLENBQUMsQ0FBQyxtQ0FBSSxHQUFHLENBQUM7Y0FDN0IsT0FBTyxHQUFPLENBQUMsVUFBSSxDQUFDLENBQUMsbUNBQUksR0FBRyxDQUFDO2NBQzdCLE9BQU8sR0FBTyxDQUFDLFVBQUksQ0FBQyxDQUFDLG1DQUFJLEdBQUcsQ0FBQztjQUM3QixPQUFPLEdBQU8sQ0FBQyxVQUFJLENBQUMsQ0FBQyxtQ0FBSSxHQUFHLENBQUM7Y0FDN0IsSUFBSSxDQUNULENBQUM7SUFDTixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLENBaEZnQyxpQkFBTyxHQWdGdkM7QUFoRmEsZ0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEN4QjtJQUdJLG1CQUFtQixDQUFhLEVBQUUsQ0FBYTtRQUE1Qix5QkFBYTtRQUFFLHlCQUFhO1FBRTNDLElBQUksQ0FBQyxDQUFDLEdBQUksQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLENBQUMsR0FBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUNNLDRCQUFRLEdBQWYsVUFBZ0IsQ0FBUyxFQUFFLENBQVM7UUFDaEMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUM7QUFFRDtJQUFtQyxpQ0FBUztJQUV4Qyx1QkFBbUIsQ0FBYSxFQUFFLENBQWEsRUFBRSxFQUFlO1FBQTdDLHlCQUFhO1FBQUUseUJBQWE7UUFBRSwyQkFBYyxDQUFDO1FBRTVELGtCQUFLLFlBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFDO1FBQ1osS0FBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7O0lBQ2pCLENBQUM7SUFDYSxrQkFBSSxHQUFsQixVQUFtQixDQUFzQjtRQUNyQyxJQUFJLEVBQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxDQUFDLE1BQUssU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFDO1FBQ3pDLElBQUksRUFBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLENBQUMsTUFBSyxTQUFTO1lBQUUsT0FBTyxTQUFTLENBQUM7UUFDekMsT0FBTyxDQUFDLFlBQVksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQ0Faa0MsU0FBUyxHQVkzQztBQVpZLHNDQUFhO0FBZTFCO0lBRUk7UUFETyxRQUFHLEdBQWUsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUVoQiwyQkFBSSxHQUFYLFVBQVksQ0FBWTtRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixPQUFPO0lBQ1gsQ0FBQztJQUNNLGdDQUFTLEdBQWhCLFVBQWlCLENBQVMsRUFBRSxDQUFTO1FBQ2pDLEtBQWdCLFVBQVEsRUFBUixTQUFJLENBQUMsR0FBRyxFQUFSLGNBQVEsRUFBUixJQUFRLEVBQUUsQ0FBQztZQUF0QixJQUFNLENBQUM7WUFDUixJQUFJLENBQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFBRSxPQUFPLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUNNLDZCQUFNLEdBQWIsVUFBYyxDQUFZO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsT0FBTztJQUNYLENBQUM7SUFDTSxnQ0FBUyxHQUFoQixVQUFpQixDQUFTLEVBQUUsQ0FBUzs7UUFDakMsS0FBSyxJQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDdkIsSUFBSSxVQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQywwQ0FBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQzlCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLEdBQUcscUJBQU8sSUFBSSxDQUFDLEdBQUcsT0FBQyxDQUFDO2dCQUN6QixNQUFNO1lBQ1YsQ0FBQztRQUNMLENBQUM7UUFDRCxPQUFPO0lBQ1gsQ0FBQztJQUNNLCtCQUFRLEdBQWYsVUFBZ0IsQ0FBUyxFQUFFLENBQVM7UUFDaEMsS0FBZ0IsVUFBUSxFQUFSLFNBQUksQ0FBQyxHQUFHLEVBQVIsY0FBUSxFQUFSLElBQVE7WUFBbkIsSUFBTSxDQUFDO1lBQWMsSUFBSSxDQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQUUsT0FBTyxJQUFJLENBQUM7U0FBQTtRQUM3RCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDO0FBaENZLG9DQUFZO0FBa0N6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9ERTs7Ozs7Ozs7Ozs7QUNsSFc7OztBQUViLDBGQUF1RDtBQUN2RCxzRkFBaUQ7QUFRakQ7SUFHSSxpQkFBbUIsRUFBVyxFQUFFLEVBQVc7UUFDdkMsSUFBSSxDQUFDLEdBQUcsR0FBSSxJQUFJLGlCQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsR0FBRyxHQUFJLElBQUksaUJBQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDUyx1QkFBSyxHQUFmLFVBQWdCLEVBQVcsRUFBRSxFQUFXO1FBQ3BDLElBQU0sS0FBSyxHQUFHLGlCQUFJLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQU0sS0FBSyxHQUFHLGlCQUFJLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWpDLElBQU0sS0FBSyxHQUFHLGlCQUFJLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQU0sS0FBSyxHQUFHLGlCQUFJLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWpDLElBQU0sS0FBSyxHQUFHLGlCQUFJLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQU0sS0FBSyxHQUFHLGlCQUFJLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWpDLElBQUksQ0FBQyxHQUFHLEdBQUksSUFBSSxpQkFBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEdBQUcsR0FBSSxJQUFJLGlCQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUU3QyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sd0JBQU0sR0FBYixVQUFjLENBQXlCLEVBQUUsQ0FBVSxFQUFFLENBQVU7UUFDM0QsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQzFFLElBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQUcsT0FBTyxLQUFLLENBQUM7WUFDckQsSUFBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFBRyxPQUFPLEtBQUssQ0FBQztZQUNyRCxJQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFHLE9BQU8sS0FBSyxDQUFDO1lBQ3JELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsSUFBSSxDQUFDLFlBQVksaUJBQU8sRUFBRSxDQUFDO1lBQ2hELElBQU0sQ0FBQyxHQUFHLENBQVksQ0FBQztZQUN2QixJQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQUcsT0FBTyxLQUFLLENBQUM7WUFDekQsSUFBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFHLE9BQU8sS0FBSyxDQUFDO1lBQ3pELElBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFBRyxPQUFPLEtBQUssQ0FBQztZQUN6RCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksQ0FBQyxZQUFZLE9BQU8sRUFBRSxDQUFDO1lBQ2hELElBQU0sQ0FBQyxHQUFHLENBQVksQ0FBQztZQUN2QixJQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFHLE9BQU8sS0FBSyxDQUFDO1lBQ3JFLElBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQUcsT0FBTyxLQUFLLENBQUM7WUFDckUsSUFBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFBRyxPQUFPLEtBQUssQ0FBQztZQUNyRSxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNNLHVCQUFLLEdBQVosY0FBeUIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDO0lBQ3JDLHVCQUFLLEdBQVosY0FBeUIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDO0lBQ3JDLHVCQUFLLEdBQVosY0FBeUIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDO0lBQ3JDLHVCQUFLLEdBQVosY0FBeUIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDO0lBQ3JDLHVCQUFLLEdBQVosY0FBeUIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDO0lBQ3JDLHVCQUFLLEdBQVosY0FBeUIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDO0lBQ3JDLHdCQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ00sd0JBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDTSx3QkFBTSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNNLDRCQUFVLEdBQWpCLFVBQWtCLEVBQWdEO1FBQzlELEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFHLENBQUM7WUFDN0MsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUcsQ0FBQztnQkFDN0MsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUcsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFBRSxPQUFPLEtBQUssQ0FBQztnQkFDbkMsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNNLDBCQUFRLEdBQWYsVUFBZ0IsRUFBMkI7UUFDdkMsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUcsQ0FBQztZQUM3QyxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRyxDQUFDO2dCQUM3QyxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRyxDQUFDO29CQUM3QyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksaUJBQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUFFLE9BQU8sS0FBSyxDQUFDO2dCQUNoRCxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ00sd0JBQU0sR0FBYjtRQUNJLE9BQU87WUFDSCxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDdEIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO1NBQ3pCO0lBQ0wsQ0FBQztJQUNNLHdCQUFNLEdBQWIsVUFBYyxDQUFhO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLFNBQVM7WUFBTSxPQUFPLElBQUksQ0FBQztRQUNyQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssU0FBUztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxTQUFTO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDckMsSUFBTSxFQUFFLEdBQUcsSUFBSSxpQkFBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFNLEVBQUUsR0FBRyxJQUFJLGlCQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDO0FBaEdZLDBCQUFPOzs7Ozs7Ozs7OztBQ1hQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQmIsMENBa0JDO0FBRUQsOENBc0JDO0FBbEVELG1GQUFnRTtBQUNoRSxzRkFBaUU7QUFDakUsMkdBQXNGO0FBQ3RGLG1GQUFnRTtBQUNoRSwrRkFBMkU7QUFvQjNFLFNBQWdCLGVBQWUsQ0FBQyxDQUEwQjs7SUFDdEQsSUFBSSxDQUFDLEtBQUssU0FBUztRQUFFLE9BQU87SUFDNUIsS0FBSyxDQUFDLFlBQVk7VUFDWixnQkFBZ0IsR0FBRyxDQUFDLE9BQUMsQ0FBQyxPQUFPLG1DQUFNLEdBQUcsQ0FBQztVQUN2QyxnQkFBZ0IsR0FBRyxDQUFDLE9BQUMsQ0FBQyxTQUFTLG1DQUFJLEdBQUcsQ0FBQztVQUN2QyxnQkFBZ0IsR0FBRyxDQUFDLE9BQUMsQ0FBQyxPQUFPLG1DQUFNLEdBQUcsQ0FBQztVQUN2QyxnQkFBZ0IsR0FBRyxDQUFDLE9BQUMsQ0FBQyxLQUFLLG1DQUFRLEdBQUcsQ0FBQztVQUN2QyxnQkFBZ0IsR0FBRyxDQUFDLE9BQUMsQ0FBQyxNQUFNLG1DQUFPLEdBQUcsQ0FBQztVQUN2QyxnQkFBZ0IsR0FBRyxDQUFDLE9BQUMsQ0FBQyxLQUFLLG1DQUFRLEdBQUcsQ0FBQztVQUN2QyxnQkFBZ0IsR0FBRyxDQUFDLE9BQUMsQ0FBQyxTQUFTLG1DQUFJLEdBQUcsQ0FBQztVQUN2QyxnQkFBZ0IsR0FBRyxDQUFDLE9BQUMsQ0FBQyxTQUFTLG1DQUFJLEdBQUcsQ0FBQztVQUN2QyxnQkFBZ0IsR0FBRyxDQUFDLE9BQUMsQ0FBQyxTQUFTLG1DQUFJLEdBQUcsQ0FBQztVQUN2QyxnQkFBZ0IsR0FBRyxDQUFDLGFBQUMsQ0FBQyxRQUFRLDBDQUFFLE1BQU0sbUNBQUksR0FBRyxDQUFDO1VBQzlDLGdCQUFnQixHQUFHLENBQUMsYUFBQyxDQUFDLFFBQVEsMENBQUUsTUFBTSxtQ0FBSSxHQUFHLENBQUM7VUFDOUMsZ0JBQWdCLEdBQUcsQ0FBQyxhQUFDLENBQUMsUUFBUSwwQ0FBRSxNQUFNLG1DQUFJLEdBQUcsQ0FBQztVQUM5QyxnQkFBZ0IsR0FBRyxDQUFDLGFBQUMsQ0FBQyxRQUFRLDBDQUFFLE1BQU0sbUNBQUksR0FBRyxDQUFDO1VBQzlDLElBQUksQ0FDVCxDQUFDO0FBQ04sQ0FBQztBQUVELFNBQWdCLGlCQUFpQixDQUFDLENBQTBCOztJQUN4RCxJQUFJLENBQUMsS0FBSyxTQUFTO1FBQUUsT0FBTztJQUU1QixJQUFJLENBQUM7UUFDVCxzQ0FBc0M7UUFDOUIsS0FBbUIsVUFBYyxFQUFkLFlBQUMsQ0FBQyxRQUFRLG1DQUFFLEVBQUUsRUFBZCxjQUFjLEVBQWQsSUFBYztZQUE1QixJQUFNLElBQUk7WUFBb0Isb0NBQWUsRUFBQyxJQUFJLENBQUMsQ0FBQztTQUFBO0lBQzdELENBQUM7SUFBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQUEsS0FBSyxDQUFDLG9CQUFvQixHQUFHLEdBQUcsQ0FBQztJQUFBLENBQUM7SUFFakQsSUFBSSxDQUFDO1FBQ1Qsc0NBQXNDO1FBQzlCLEtBQW1CLFVBQWMsRUFBZCxZQUFDLENBQUMsUUFBUSxtQ0FBRSxFQUFFLEVBQWQsY0FBYyxFQUFkLElBQWM7WUFBNUIsSUFBTSxJQUFJO1lBQW9CLDRCQUFlLEVBQUMsSUFBSSxDQUFDLENBQUM7U0FBQTtJQUM3RCxDQUFDO0lBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUFBLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLENBQUM7SUFBQSxDQUFDO0lBRWpELElBQUksQ0FBQztRQUNULHNDQUFzQztRQUM5QixLQUFtQixVQUFjLEVBQWQsWUFBQyxDQUFDLFFBQVEsbUNBQUUsRUFBRSxFQUFkLGNBQWMsRUFBZCxJQUFjO1lBQTVCLElBQU0sSUFBSTtZQUFvQiw0QkFBZSxFQUFDLElBQUksQ0FBQyxDQUFDO1NBQUE7SUFDN0QsQ0FBQztJQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFBQSxLQUFLLENBQUMsb0JBQW9CLEdBQUcsR0FBRyxDQUFDO0lBQUEsQ0FBQztJQUVqRCxJQUFJLENBQUM7UUFDVCxzQ0FBc0M7UUFDOUIsS0FBbUIsVUFBYyxFQUFkLFlBQUMsQ0FBQyxRQUFRLG1DQUFFLEVBQUUsRUFBZCxjQUFjLEVBQWQsSUFBYztZQUE1QixJQUFNLElBQUk7WUFBb0IsNkJBQWUsRUFBQyxJQUFJLENBQUMsQ0FBQztTQUFBO0lBQzdELENBQUM7SUFBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQUEsS0FBSyxDQUFDLG9CQUFvQixHQUFHLEdBQUcsQ0FBQztJQUFBLENBQUM7QUFDckQsQ0FBQztBQUdEO0lBQWdDLDhCQUFVO0lBcUJ0QyxvQkFBbUIsQ0FBaUI7UUFDaEMsa0JBQUssWUFBQyxDQUFDLENBQUMsU0FBQztRQUVULEtBQUksQ0FBQyxRQUFRLEdBQUksRUFBRSxDQUFDO1FBQ3BCLEtBQUksQ0FBQyxRQUFRLEdBQUksRUFBRSxDQUFDO1FBQ3BCLEtBQUksQ0FBQyxRQUFRLEdBQUksRUFBRTtRQUNuQixLQUFJLENBQUMsUUFBUSxHQUFJLEVBQUUsQ0FBQztRQUVwQixJQUFJLENBQUMsS0FBSyxTQUFTO1lBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUFDeEMsQ0FBQztJQUVhLGNBQUcsR0FBakIsVUFBa0IsQ0FBaUI7UUFDL0IsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU0sMkJBQU0sR0FBYjtRQUNJLElBQUksU0FBaUIsQ0FBQztRQUN0QixJQUFJLENBQUM7WUFDRCxJQUFNLFNBQVMsR0FBTSxnQkFBSyxDQUFDLE1BQU0sV0FBbUIsQ0FBQztZQUVyRCxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUQsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFELFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxRCxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFMUQsT0FBTyxTQUFTLENBQUM7UUFDckIsQ0FBQztRQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDWCxLQUFLLENBQUMseUJBQXlCLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDdkMsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDO0lBQ0wsQ0FBQztJQUNTLHFDQUFnQixHQUExQixVQUEyQixRQUErQjtRQUN0RCxJQUFNLFFBQVEsR0FBZSxFQUFFLENBQUM7UUFDaEMsS0FBSyxJQUFJLENBQUMsSUFBSSxRQUFRO1lBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUM1RCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRU0sMkJBQU0sR0FBYixVQUFjLENBQWdCO1FBQzFCLGdCQUFLLENBQUMsTUFBTSxZQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhCLElBQUksQ0FBQyxDQUFDLFFBQVEsS0FBTSxTQUFTLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNuQixLQUF3QixVQUFVLEVBQVYsTUFBQyxDQUFDLFFBQVEsRUFBVixjQUFVLEVBQVYsSUFBVSxFQUFFLENBQUM7Z0JBQWhDLElBQU0sU0FBUztnQkFDZixJQUFNLElBQUksR0FBRyxDQUFDLElBQUksK0JBQWMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUN0QyxDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDLFFBQVEsS0FBTSxTQUFTLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNuQixLQUF3QixVQUFVLEVBQVYsTUFBQyxDQUFDLFFBQVEsRUFBVixjQUFVLEVBQVYsSUFBVSxFQUFFLENBQUM7Z0JBQWhDLElBQU0sU0FBUztnQkFDZixJQUFNLElBQUksR0FBRyxDQUFDLElBQUksZUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3RDLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUMsUUFBUSxLQUFNLFNBQVMsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ25CLEtBQXdCLFVBQVUsRUFBVixNQUFDLENBQUMsUUFBUSxFQUFWLGNBQVUsRUFBVixJQUFVLEVBQUUsQ0FBQztnQkFBaEMsSUFBTSxTQUFTO2dCQUNmLElBQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxlQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDdEMsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQyxRQUFRLEtBQU0sU0FBUyxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbkIsS0FBd0IsVUFBVSxFQUFWLE1BQUMsQ0FBQyxRQUFRLEVBQVYsY0FBVSxFQUFWLElBQVUsRUFBRSxDQUFDO2dCQUFoQyxJQUFNLFNBQVM7Z0JBQ2hCLElBQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxpQkFBTyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3RDLENBQUM7UUFDSixDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLDBCQUFLLEdBQVo7O1FBQ0ksS0FBSyxDQUFDLFlBQVk7Y0FDWixnQkFBZ0IsR0FBRyxDQUFDLFVBQUksQ0FBQyxPQUFPLG1DQUFNLEdBQUcsQ0FBQztjQUMxQyxnQkFBZ0IsR0FBRyxDQUFDLFVBQUksQ0FBQyxTQUFTLG1DQUFJLEdBQUcsQ0FBQztjQUMxQyxnQkFBZ0IsR0FBRyxDQUFDLFVBQUksQ0FBQyxPQUFPLG1DQUFNLEdBQUcsQ0FBQztjQUMxQyxnQkFBZ0IsR0FBRyxDQUFDLFVBQUksQ0FBQyxLQUFLLG1DQUFRLEdBQUcsQ0FBQztjQUMxQyxnQkFBZ0IsR0FBRyxDQUFDLFVBQUksQ0FBQyxNQUFNLG1DQUFPLEdBQUcsQ0FBQztjQUMxQyxnQkFBZ0IsR0FBRyxDQUFDLFVBQUksQ0FBQyxLQUFLLG1DQUFRLEdBQUcsQ0FBQztjQUMxQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsSUFBRyxFQUFDLElBQUcsQ0FBQztjQUMzQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsSUFBRyxFQUFDLElBQUcsQ0FBQztjQUMzQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsSUFBRyxFQUFDLElBQUcsQ0FBQztjQUMzQyxnQkFBZ0IsR0FBRyxDQUFDLGdCQUFJLENBQUMsUUFBUSwwQ0FBRSxNQUFNLG1DQUFJLEdBQUcsQ0FBQztjQUNqRCxnQkFBZ0IsR0FBRyxDQUFDLGdCQUFJLENBQUMsUUFBUSwwQ0FBRSxNQUFNLG1DQUFJLEdBQUcsQ0FBQztjQUNqRCxnQkFBZ0IsR0FBRyxDQUFDLGdCQUFJLENBQUMsUUFBUSwwQ0FBRSxNQUFNLG1DQUFJLEdBQUcsQ0FBQztjQUNqRCxnQkFBZ0IsR0FBRyxDQUFDLGdCQUFJLENBQUMsUUFBUSwwQ0FBRSxNQUFNLG1DQUFJLEdBQUcsQ0FBQztjQUNqRCxJQUFJLENBQ1QsQ0FBQztJQUNOLENBQUM7SUFFTSxpQ0FBWSxHQUFuQjtRQUNJLElBQUksQ0FBQztZQUNiLDBDQUEwQztZQUM5QixLQUFLLElBQU0sRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUQsQ0FBQztRQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFBQSxLQUFLLENBQUMsb0JBQW9CLEdBQUcsR0FBRyxDQUFDO1FBQUEsQ0FBQztRQUVqRCxJQUFJLENBQUM7WUFDYiwwQ0FBMEM7WUFDOUIsS0FBSyxJQUFNLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUTtnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlELENBQUM7UUFBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQUEsS0FBSyxDQUFDLG9CQUFvQixHQUFHLEdBQUcsQ0FBQztRQUFBLENBQUM7UUFFakQsSUFBSSxDQUFDO1lBQ2IsMENBQTBDO1lBQzlCLEtBQUssSUFBTSxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVE7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5RCxDQUFDO1FBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUFBLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLENBQUM7UUFBQSxDQUFDO1FBRWpELElBQUksQ0FBQztZQUNiLDBDQUEwQztZQUM5QixLQUFLLElBQU0sRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUQsQ0FBQztRQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFBQSxLQUFLLENBQUMsb0JBQW9CLEdBQUcsR0FBRyxDQUFDO1FBQUEsQ0FBQztJQUVyRCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLENBckkrQix1QkFBVSxHQXFJekM7QUFySVksZ0NBQVU7Ozs7Ozs7Ozs7O0FDdkVWOzs7QUFpRGIsa0RBb0JDO0FBbkVELDJHQUFxRTtBQStDckUsU0FBZ0IsbUJBQW1CLENBQUMsQ0FBMEI7O0lBQzFELElBQUksQ0FBQyxLQUFLLFNBQVM7UUFBRSxPQUFPO0lBQzVCLEtBQUssQ0FBQyxZQUFZO1VBQ1osZ0JBQWdCLEdBQUcsQ0FBQyxPQUFDLENBQUMsT0FBTyxtQ0FBTSxHQUFHLENBQUM7VUFDdkMsZ0JBQWdCLEdBQUcsQ0FBQyxPQUFDLENBQUMsU0FBUyxtQ0FBSSxHQUFHLENBQUM7VUFDdkMsZ0JBQWdCLEdBQUcsQ0FBQyxPQUFDLENBQUMsT0FBTyxtQ0FBTSxHQUFHLENBQUM7VUFDdkMsZ0JBQWdCLEdBQUcsQ0FBQyxPQUFDLENBQUMsS0FBSyxtQ0FBUSxHQUFHLENBQUM7VUFDdkMsZ0JBQWdCLEdBQUcsQ0FBQyxPQUFDLENBQUMsTUFBTSxtQ0FBTyxHQUFHLENBQUM7VUFDdkMsZ0JBQWdCLEdBQUcsQ0FBQyxPQUFDLENBQUMsS0FBSyxtQ0FBUSxHQUFHLENBQUM7VUFDdkMsZ0JBQWdCLEdBQUcsQ0FBQyxPQUFDLENBQUMsU0FBUyxtQ0FBSSxHQUFHLENBQUM7VUFDdkMsZ0JBQWdCLEdBQUcsQ0FBQyxPQUFDLENBQUMsU0FBUyxtQ0FBSSxHQUFHLENBQUM7VUFDdkMsZ0JBQWdCLEdBQUcsQ0FBQyxPQUFDLENBQUMsU0FBUyxtQ0FBSSxHQUFHLENBQUM7VUFDdkMsZ0JBQWdCLEdBQUcsQ0FBQyxPQUFDLENBQUMsU0FBUyxtQ0FBSSxHQUFHLENBQUM7VUFDdkMsZ0JBQWdCLEdBQUcsQ0FBQyxhQUFDLENBQUMsS0FBSywwQ0FBRSxPQUFPLG1DQUFNLEdBQUcsQ0FBQztVQUM5QyxnQkFBZ0IsR0FBRyxDQUFDLGFBQUMsQ0FBQyxLQUFLLDBDQUFFLFFBQVEsbUNBQUssR0FBRyxDQUFDO1VBQzlDLGdCQUFnQixHQUFHLENBQUMsYUFBQyxDQUFDLEtBQUssMENBQUUsSUFBSSxtQ0FBUyxHQUFHLENBQUM7VUFDOUMsZ0JBQWdCLEdBQUcsQ0FBQyxhQUFDLENBQUMsS0FBSywwQ0FBRSxJQUFJLG1DQUFTLEdBQUcsQ0FBQztVQUM5QyxnQkFBZ0IsR0FBRyxDQUFDLGFBQUMsQ0FBQyxLQUFLLDBDQUFFLE9BQU8sbUNBQU0sR0FBRyxDQUFDO1VBQzlDLElBQUksQ0FDVCxDQUFDO0FBQ04sQ0FBQztBQUVEO0lBYUksb0JBQW1CLENBQWlCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUssQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQU8sRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQU0sRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQU8sRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUU1QixJQUFJLENBQUMsS0FBSyxHQUFPLElBQUksK0JBQWMsRUFBRSxDQUFDO1FBRXRDLElBQUksQ0FBQyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFYSxjQUFHLEdBQWpCLFVBQWtCLENBQWlCO1FBQy9CLE9BQU8sSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLDJCQUFNLEdBQWI7UUFDSSxJQUFJLFNBQWlCLENBQUM7UUFDdEIsSUFBSSxDQUFDO1lBQ0QsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0MsQ0FBQztRQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDWCxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN6QyxDQUFDO1FBRUQsSUFBSSxDQUFDO1lBQ0QsT0FBTztnQkFDSCxPQUFPLEVBQUksSUFBSSxDQUFDLE9BQU87Z0JBQ3ZCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDekIsT0FBTyxFQUFJLElBQUksQ0FBQyxPQUFPO2dCQUN2QixLQUFLLEVBQU0sSUFBSSxDQUFDLEtBQUs7Z0JBQ3JCLE1BQU0sRUFBSyxJQUFJLENBQUMsTUFBTTtnQkFDdEIsS0FBSyxFQUFNLElBQUksQ0FBQyxLQUFLO2dCQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHO2dCQUNyQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHO2dCQUNyQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHO2dCQUNyQyxTQUFTLEVBQUUsU0FBUztnQkFDcEIsS0FBSyxFQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO2FBQ2pDO1FBQ0wsQ0FBQztRQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDWCxLQUFLLENBQUMseUJBQXlCLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDdkMsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDO0lBQ0wsQ0FBQztJQUVNLDJCQUFNLEdBQWIsVUFBYyxDQUFnQjs7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBSyxPQUFDLENBQUMsT0FBTyxtQ0FBTSxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBQyxDQUFDLFNBQVMsbUNBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFLLE9BQUMsQ0FBQyxPQUFPLG1DQUFNLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssR0FBTyxPQUFDLENBQUMsS0FBSyxtQ0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLEdBQU0sT0FBQyxDQUFDLE1BQU0sbUNBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QyxJQUFJLENBQUMsS0FBSyxHQUFPLE9BQUMsQ0FBQyxLQUFLLG1DQUFRLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDM0MsSUFBSSxDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDOztZQUFNLENBQUMsQ0FBQyxTQUFTLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN2RixJQUFJLENBQUMsQ0FBQyxTQUFTLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7O1lBQU0sQ0FBQyxDQUFDLFNBQVMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7WUFBTSxDQUFDLENBQUMsU0FBUyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdkYsSUFBSSxDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV0RSxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQVMsU0FBUztZQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUxRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sMEJBQUssR0FBWjs7UUFDSSxLQUFLLENBQUMsZ0JBQWdCO2NBQ2hCLGdCQUFnQixHQUFHLENBQUMsVUFBSSxDQUFDLE9BQU8sbUNBQU0sR0FBRyxDQUFDO2NBQzFDLGdCQUFnQixHQUFHLENBQUMsVUFBSSxDQUFDLFNBQVMsbUNBQUksR0FBRyxDQUFDO2NBQzFDLGdCQUFnQixHQUFHLENBQUMsVUFBSSxDQUFDLE9BQU8sbUNBQU0sR0FBRyxDQUFDO2NBQzFDLGdCQUFnQixHQUFHLENBQUMsVUFBSSxDQUFDLEtBQUssbUNBQVEsR0FBRyxDQUFDO2NBQzFDLGdCQUFnQixHQUFHLENBQUMsVUFBSSxDQUFDLE1BQU0sbUNBQU8sR0FBRyxDQUFDO2NBQzFDLGdCQUFnQixHQUFHLENBQUMsVUFBSSxDQUFDLEtBQUssbUNBQVEsR0FBRyxDQUFDO2NBQzFDLGdCQUFnQixHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFHLEVBQUMsSUFBRyxDQUFDO2NBQzNDLGdCQUFnQixHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFHLEVBQUMsSUFBRyxDQUFDO2NBQzNDLGdCQUFnQixHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFHLEVBQUMsSUFBRyxDQUFDO2NBQzNDLGdCQUFnQixHQUFHLENBQUMsVUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsbUNBQVMsR0FBRyxDQUFDO2NBQ2pELGdCQUFnQixHQUFHLENBQUMsVUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsbUNBQVMsR0FBRyxDQUFDO2NBQ2pELGdCQUFnQixHQUFHLENBQUMsVUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsbUNBQUksR0FBRyxDQUFDO2NBQ2pELGdCQUFnQixHQUFHLENBQUMsVUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsbUNBQUksR0FBRyxDQUFDO2NBQ2pELGdCQUFnQixHQUFHLENBQUMsVUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsbUNBQUssR0FBRyxDQUFDO2NBQ2pELElBQUksQ0FDVCxDQUFDO0lBQ04sQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQztBQWxHWSxnQ0FBVTs7Ozs7Ozs7Ozs7QUN2RVY7OztBQTRCYiwwQ0FzQkM7QUE3Q0QseUZBQW1EO0FBQ25ELG1GQUFpRDtBQUdqRCwrRkFBcUQ7QUFJckQsMEZBQXdEO0FBZXhELFNBQWdCLGVBQWUsQ0FBQyxDQUFzQjs7SUFDbEQsSUFBSSxDQUFDLEtBQUssU0FBUztRQUFFLE9BQU87SUFDNUIsS0FBSyxDQUFDLFlBQVk7VUFDWixXQUFXLEdBQU8sQ0FBQyxPQUFDLENBQUMsRUFBRSxtQ0FBVyxHQUFHLENBQUM7VUFDdEMsY0FBYyxHQUFJLENBQUMsT0FBQyxDQUFDLE9BQU8sbUNBQU0sR0FBRyxDQUFDO1VBQ3RDLFdBQVcsR0FBTyxDQUFDLE9BQUMsQ0FBQyxJQUFJLG1DQUFTLEdBQUcsQ0FBQztVQUN0QyxhQUFhLEdBQUssQ0FBQyxPQUFDLENBQUMsT0FBTyxtQ0FBTSxHQUFHLENBQUM7VUFDdEMsVUFBVSxHQUFRLENBQUMsYUFBQyxDQUFDLE1BQU0sMENBQUUsT0FBTyxtQ0FBTyxHQUFHLENBQUM7VUFDL0MsVUFBVSxHQUFRLENBQUMsYUFBQyxDQUFDLE1BQU0sMENBQUUsSUFBSSxtQ0FBVSxHQUFHLENBQUM7VUFDL0MsVUFBVSxHQUFRLENBQUMsYUFBQyxDQUFDLE1BQU0sMENBQUUsSUFBSSxtQ0FBVSxHQUFHLENBQUM7VUFDL0MsVUFBVSxHQUFRLENBQUMsYUFBQyxDQUFDLE1BQU0sMENBQUUsT0FBTyxtQ0FBTyxHQUFHLENBQUM7VUFDL0MsV0FBVyxHQUFPLENBQUMsbUJBQUMsQ0FBQyxNQUFNLDBDQUFFLE9BQU8sMENBQUUsQ0FBQyxtQ0FBSSxHQUFHLENBQUM7VUFDL0MsV0FBVyxHQUFPLENBQUMsbUJBQUMsQ0FBQyxNQUFNLDBDQUFFLE9BQU8sMENBQUUsQ0FBQyxtQ0FBSSxHQUFHLENBQUM7VUFDL0MsV0FBVyxHQUFPLENBQUMsbUJBQUMsQ0FBQyxNQUFNLDBDQUFFLE9BQU8sMENBQUUsQ0FBQyxtQ0FBSSxHQUFHLENBQUM7VUFDL0MsV0FBVyxHQUFPLENBQUMsbUJBQUMsQ0FBQyxNQUFNLDBDQUFFLE9BQU8sMENBQUUsQ0FBQyxtQ0FBSSxHQUFHLENBQUM7VUFDL0MsVUFBVSxHQUFRLENBQUMsT0FBQyxDQUFDLElBQUksbUNBQVUsQ0FBQyxDQUFFO1FBQ2hELCtEQUErRDtVQUNyRCxZQUFZLEdBQU0sQ0FBQyxhQUFDLENBQUMsTUFBTSwwQ0FBRSxNQUFNLG1DQUFJLEdBQUcsQ0FBQztVQUMzQyxJQUFJLENBQ1QsQ0FBQztJQUVOLDhEQUE4RDtBQUM5RCxDQUFDO0FBR0Q7SUFhSSxnQkFBbUIsQ0FBYTtRQUU1QixJQUFJLENBQUMsS0FBSyxHQUFRLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFLLFdBQVcsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFLLFdBQVcsR0FBRyxzQkFBUyxHQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBTSxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLDhCQUFpQixDQUFDLElBQUksQ0FBa0IsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBRWhDLElBQUksQ0FBQyxJQUFJLEdBQUssQ0FBQyxDQUFDO1FBQ3hCLDBDQUEwQztRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ00sd0JBQU8sR0FBZCxVQUFlLEdBQWU7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRU0sb0JBQUcsR0FBVixjQUF1QixPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUM7SUFFcEMsdUJBQU0sR0FBYixVQUFjLENBQVU7O1FBQ3BCLElBQU0sSUFBSSxHQUFHLFVBQUksQ0FBQyxNQUFNLDBDQUFFLEtBQUssRUFBRSxDQUFDO1FBQ2xDLE9BQU8sVUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsbUNBQUksS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxxQkFBSSxHQUFYLGNBQXlDLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBQztJQUNyRCxxQkFBSSxHQUFYO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTTtJQUN0QixDQUFDO0lBRU0sMkJBQVUsR0FBakIsY0FBOEIsT0FBTyxJQUFJLEdBQUM7SUFDbkMsMkJBQVUsR0FBakIsY0FBOEIsT0FBTyxDQUFDLEdBQUM7SUFFaEMscUJBQUksR0FBWDtRQUNJLElBQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQztRQUMxQixLQUFLLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNNLDJCQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNNLHlCQUFRLEdBQWYsVUFBZ0IsSUFBWTtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBQ00seUJBQVEsR0FBZixVQUFnQixJQUFZO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sd0JBQU8sR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ00sd0JBQU8sR0FBZCxVQUFlLEdBQW1COztRQUM5QixPQUFDLElBQUksQ0FBQyxNQUFNLG9DQUFYLElBQUksQ0FBQyxNQUFNLEdBQUssSUFBSSxtQkFBUSxFQUFFLEVBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLHVCQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUE4QkU7SUFFUyx1QkFBTSxHQUFiOztRQUNJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQjtRQUVuQyxJQUFNLFdBQVcsR0FBZ0IsRUFBRSxDQUFDO1FBQ3BDLEtBQUssSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUV2RSxPQUFPO1lBQ0gsRUFBRSxFQUFTLElBQUksQ0FBQyxLQUFLO1lBQ3JCLElBQUksRUFBTyxJQUFJLENBQUMsT0FBTztZQUN2QixPQUFPLEVBQUksSUFBSSxDQUFDLE9BQU87WUFDdkIsT0FBTyxFQUFJLElBQUksQ0FBQyxPQUFPO1lBQ3ZCLE1BQU0sRUFBSyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUMvQixJQUFJLEVBQU8sSUFBSSxDQUFDLElBQUk7WUFDaEMsNkNBQTZDO1lBQ2pDLE1BQU0sRUFBSyxXQUFXO1lBQ3RCLE1BQU0sRUFBSyxJQUFJLENBQUMsV0FBVztZQUMzQixJQUFJLEVBQU8sZ0JBQUksQ0FBQyxNQUFNLDBDQUFFLE1BQU0sRUFBRSxtQ0FBSSxFQUFFO1NBQ3pDLENBQUM7SUFDTixDQUFDO0lBQ00sdUJBQU0sR0FBYixVQUFjLENBQXNCO1FBQ2hDLElBQUksQ0FBQyxLQUFLLFNBQVM7WUFBRyxPQUFPLElBQUksQ0FBQztRQUVsQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQU8sU0FBUztZQUFLLElBQUksQ0FBQyxLQUFLLEdBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUztZQUFLLElBQUksQ0FBQyxPQUFPLEdBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN2RCxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxPQUFPLEdBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUMxRCxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxPQUFPLEdBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUMxRCxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssU0FBUztZQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUV6RCxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssU0FBUztZQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQU8sU0FBUztZQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN4RCxrRUFBa0U7UUFFMUQsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRyxDQUFDO1lBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLEtBQXdCLFVBQVEsRUFBUixNQUFDLENBQUMsTUFBTSxFQUFSLGNBQVEsRUFBUixJQUFRLEVBQUUsQ0FBQztnQkFBOUIsSUFBTSxTQUFTO2dCQUNoQixJQUFNLElBQUksR0FBRyxJQUFJLGVBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDbkMsQ0FBQztRQUNMLENBQUM7UUFDVDs7Ozs7VUFLRTtRQUNNLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDYSxpQkFBVSxHQUF4QixVQUF5QixRQUFrQjtRQUN2QyxJQUFNLGFBQWEsR0FBZ0IsRUFBRSxDQUFDO1FBQ3RDLEtBQWlCLFVBQVEsRUFBUixxQkFBUSxFQUFSLHNCQUFRLEVBQVIsSUFBUSxFQUFFLENBQUM7WUFBdkIsSUFBSSxJQUFJO1lBQ1QsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsT0FBTyxhQUFhLENBQUM7SUFDekIsQ0FBQztJQUNhLGlCQUFVLEdBQXhCLFVBQXlCLGFBQTBCO1FBQy9DLElBQU0sUUFBUSxHQUFhLEVBQUUsQ0FBQztRQUM5QixLQUFzQixVQUFhLEVBQWIsK0JBQWEsRUFBYiwyQkFBYSxFQUFiLElBQWEsRUFBRSxDQUFDO1lBQWpDLElBQUksU0FBUztZQUNkLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxzQkFBSyxHQUFaOztRQUNJLEtBQUssQ0FBQyxZQUFZO2NBQ1osV0FBVyxHQUFPLENBQUMsVUFBSSxDQUFDLEtBQUssbUNBQWUsR0FBRyxDQUFDO2NBQ2hELGNBQWMsR0FBSSxDQUFDLFVBQUksQ0FBQyxPQUFPLG1DQUFhLEdBQUcsQ0FBQztjQUNoRCxXQUFXLEdBQU8sQ0FBQyxVQUFJLENBQUMsT0FBTyxtQ0FBYSxHQUFHLENBQUM7Y0FDaEQsYUFBYSxHQUFLLENBQUMsVUFBSSxDQUFDLE9BQU8sbUNBQWEsR0FBRyxDQUFDO2NBQ2hELFVBQVUsR0FBUSxDQUFDLFVBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLG1DQUFRLEdBQUcsQ0FBQztjQUNoRCxVQUFVLEdBQVEsQ0FBQyxVQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxtQ0FBSSxHQUFHLENBQUM7Y0FDckQsVUFBVSxHQUFRLENBQUMsVUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsbUNBQVEsR0FBRyxDQUFDO2NBQ3JELFVBQVUsR0FBUSxDQUFDLFVBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLG1DQUFTLEdBQUcsQ0FBQztjQUNyRCxXQUFXLEdBQU8sQ0FBQyxVQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsbUNBQUksR0FBRyxDQUFDO2NBQ2hELFdBQVcsR0FBTyxDQUFDLFVBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxtQ0FBSSxHQUFHLENBQUM7Y0FDaEQsV0FBVyxHQUFPLENBQUMsVUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLG1DQUFJLEdBQUcsQ0FBQztjQUNoRCxXQUFXLEdBQU8sQ0FBQyxVQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxtQ0FBTSxHQUFHLENBQUM7Y0FDaEQsVUFBVSxHQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFJLENBQUMsSUFBSSxtQ0FBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7Y0FDdkQsWUFBWSxHQUFNLENBQUMsZ0JBQUksQ0FBQyxNQUFNLDBDQUFFLE1BQU0sbUNBQUksR0FBRyxDQUFDO2NBQzlDLElBQUksQ0FDVCxDQUFDO0lBQ04sQ0FBQztJQUNNLDJCQUFVLEdBQWpCO1FBQ0osOEJBQThCO1FBQ3RCLEtBQUssSUFBTSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFELENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQztBQWhNWSx3QkFBTTs7Ozs7Ozs7Ozs7QUNyRE47OztBQUViLCtGQUFpRDtBQUNqRCxtRkFBNkM7QUFFN0Msd0dBQTBGO0FBSTFGO0lBU0ksMkJBQW9CLElBQVk7UUFEeEIsYUFBUSxHQUFZLEVBQUUsQ0FBQztRQUUzQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBVmMsd0JBQU0sR0FBckIsVUFBc0IsQ0FBYTtRQUMvQixJQUFNLElBQUksR0FBRyxJQUFJLGVBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixPQUFPLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNPLGtDQUFNLEdBQWQsVUFBZSxDQUFhLElBQWtCLE9BQU8saUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFDO0lBUTFFLGlDQUFLLEdBQVosY0FBZ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUM7SUFDL0MscUNBQVMsR0FBaEIsVUFBaUIsS0FBYSxJQUFTLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLEVBQUM7SUFDdkQsa0NBQU0sR0FBYjtRQUNJLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQ2xDLEtBQUssd0JBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQztZQUMvQixLQUFLLHdCQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUM7WUFDL0IsS0FBSyx3QkFBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDO1lBQy9CLEtBQUssd0JBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQztZQUMvQixPQUFPLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQztRQUN6QixDQUFDO0lBQ0wsQ0FBQztJQUNNLG1DQUFPLEdBQWQsY0FBMEIsT0FBTyxLQUFLLEdBQUM7SUFDaEMsaUNBQUssR0FBWixjQUEwQixPQUFPLEdBQUcsR0FBQztJQUM5QixpQ0FBSyxHQUFaLGNBQTBCLE9BQU8sR0FBRyxHQUFDO0lBQzlCLGlDQUFLLEdBQVosY0FBMEIsT0FBTyxHQUFHLEdBQUM7SUFDOUIsaUNBQUssR0FBWixjQUErQixPQUFPLElBQUksR0FBQztJQUNwQyxpQ0FBSyxHQUFaLGNBQStCLE9BQU8sSUFBSSxHQUFDO0lBQ3BDLGlDQUFLLEdBQVosY0FBK0IsT0FBTyxJQUFJLEdBQUM7SUFDcEMsaUNBQUssR0FBWixjQUErQixPQUFPLElBQUksR0FBQztJQUNwQyxpQ0FBSyxHQUFaLGNBQStCLE9BQU8sSUFBSSxHQUFDO0lBQ3BDLGlDQUFLLEdBQVosY0FBK0IsT0FBTyxJQUFJLEdBQUM7SUFDcEMsaUNBQUssR0FBWixjQUErQixPQUFPLElBQUksR0FBQztJQUNwQyxpQ0FBSyxHQUFaLGNBQStCLE9BQU8sSUFBSSxHQUFDO0lBRXBDLGtDQUFNLEdBQWIsVUFBYyxJQUFZLEVBQUUsSUFBWSxJQUFTLENBQUM7SUFFM0Msa0NBQU0sR0FBYixVQUFjLENBQVU7UUFFcEIsSUFBTSxHQUFHLEdBQUcsNkJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMxQyxJQUFJLEdBQUcsS0FBSyxTQUFTO1lBQUUsT0FBTztRQUU5QixHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVoQixHQUFHLENBQUMsU0FBUyxHQUFLLFNBQVMsQ0FBQztRQUM1QixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFWCxpQkFBaUI7UUFDakIsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDbEMsS0FBSyx3QkFBVyxDQUFDLENBQUMsRUFBRyxJQUFJO2dCQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQUEsTUFBSztZQUMzRSxLQUFLLHdCQUFXLENBQUMsQ0FBQyxFQUFHLElBQUk7Z0JBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFBQSxNQUFNO1lBQzVFLEtBQUssd0JBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSTtnQkFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUFBLE1BQU07WUFDNUUsS0FBSyx3QkFBVyxDQUFDLENBQUMsRUFBRSxJQUFJO2dCQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQUEsTUFBTTtRQUNoRixDQUFDO0lBQ0wsQ0FBQztJQUdPLHdDQUFZLEdBQXBCLFVBQXFCLEdBQVMsRUFBRSxJQUFVLEVBQUUsS0FBVztRQUNuRCxJQUFNLEdBQUcsR0FBRyw2QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzFDLElBQUksR0FBRyxLQUFLLFNBQVM7WUFBRSxPQUFPO1FBRTlCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFaEIsR0FBRyxDQUFDLFNBQVMsR0FBSyxTQUFTLENBQUM7UUFDNUIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRVgsR0FBRyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFDNUIsR0FBRyxDQUFDLFNBQVMsR0FBSyxDQUFDLENBQUM7UUFDcEIsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRWpCLENBQUM7SUFFTSxrQ0FBTSxHQUFiLGNBQW1DLE9BQU8sRUFBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUMsR0FBQztJQUM5RCxrQ0FBTSxHQUFiLFVBQWMsQ0FBNkIsSUFBa0IsT0FBTyxJQUFxQixHQUFDO0lBQzlGLHdCQUFDO0FBQUQsQ0FBQztBQXpGWSw4Q0FBaUI7Ozs7Ozs7Ozs7O0FDVGpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFYiwrRkFBaUU7QUFDakUsMkdBQXFFO0FBUXJFO0lBQThCLDRCQUFjO0lBQ3hDLGtCQUFZLENBQWU7UUFDdkIsYUFBSyxZQUFDLENBQUMsQ0FBQyxTQUFDO0lBQ2IsQ0FBQztJQUNNLHdCQUFLLEdBQVosY0FBd0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBQztJQUN2Qyx3QkFBSyxHQUFaLGNBQXdCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUM7SUFDdkMsd0JBQUssR0FBWixjQUF3QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFDO0lBRXZDLHdCQUFLLEdBQVosVUFBYSxDQUFTLElBQVMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFDO0lBQzNDLHdCQUFLLEdBQVosVUFBYSxDQUFTLElBQVMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFDO0lBQzNDLHdCQUFLLEdBQVosVUFBYSxDQUFTLElBQVMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFDO0lBRTNDLDRCQUFTLEdBQWhCLFVBQ0ksS0FBZSxFQUNmLEdBQWEsRUFDYixHQUFpQjtRQUVqQixJQUFJLENBQUMsT0FBTyxDQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUVoQyxJQUFJLEdBQUcsS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBR00sNkJBQVUsR0FBakI7UUFBQSxpQkFRQztRQVBHLE9BQU87WUFDSCxRQUFRLEVBQUUsSUFBSTtZQUNkLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxFQUFFLGNBQUssS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUM7WUFDN0IsSUFBSSxFQUFFLGNBQUssS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUM7U0FDeEIsQ0FBQztJQUNULENBQUM7SUFDTSw2QkFBVSxHQUFqQjtRQUFBLGlCQVFDO1FBUEcsT0FBTztZQUNILFFBQVEsRUFBRSxJQUFJO1lBQ2QsSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLEVBQUUsY0FBSyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBQztZQUM3QixJQUFJLEVBQUUsY0FBSyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBQztTQUMzQixDQUFDO0lBQ04sQ0FBQztJQUVNLDZCQUFVLEdBQWpCO1FBQUEsaUJBUUM7UUFQRyxPQUFPO1lBQ0gsUUFBUSxFQUFFLElBQUk7WUFDZCxJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUksRUFBRSxjQUFLLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDO1lBQzdCLElBQUksRUFBRSxjQUFLLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFDO1NBQ3hCLENBQUM7SUFDVCxDQUFDO0lBQ00sNkJBQVUsR0FBakI7UUFBQSxpQkFRQztRQVBHLE9BQU87WUFDSCxRQUFRLEVBQUUsSUFBSTtZQUNkLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxFQUFFLGNBQUssS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUM7WUFDN0IsSUFBSSxFQUFFLGNBQUssS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUM7U0FDM0IsQ0FBQztJQUNOLENBQUM7SUFDTSw4QkFBVyxHQUFsQjtRQUFBLGlCQVFDO1FBUEcsT0FBTztZQUNILFFBQVEsRUFBRSxJQUFJO1lBQ2QsSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNuQixJQUFJLEVBQUUsY0FBSyxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBQztZQUMxQixJQUFJLEVBQUUsY0FBSyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBQztTQUMzQixDQUFDO0lBQ04sQ0FBQztJQUNNLDhCQUFXLEdBQWxCO1FBQUEsaUJBUUM7UUFQRyxPQUFPO1lBQ0gsUUFBUSxFQUFFLElBQUk7WUFDZCxJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ25CLElBQUksRUFBRSxjQUFLLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDO1lBQzFCLElBQUksRUFBRSxjQUFLLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFDO1NBQzNCLENBQUM7SUFDTixDQUFDO0lBRU0sNEJBQVMsR0FBaEI7UUFBQSxpQkFRQztRQVBHLE9BQU87WUFDSCxRQUFRLEVBQUUsSUFBSTtZQUNkLElBQUksRUFBRSxJQUFJO1lBQ1YsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDckIsSUFBSSxFQUFFLGNBQUssS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUM7WUFDN0IsSUFBSSxFQUFFLGNBQUssS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUM7U0FDM0IsQ0FBQztJQUNOLENBQUM7SUFDTSw4QkFBVyxHQUFsQjtRQUFBLGlCQVFDO1FBUEcsT0FBTztZQUNILFFBQVEsRUFBRSxJQUFJO1lBQ2QsSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN2QixJQUFJLEVBQUUsY0FBSyxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBQztZQUMvQixJQUFJLEVBQUUsY0FBSyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBQztTQUMzQixDQUFDO0lBQ04sQ0FBQztJQUVNLDRCQUFTLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDTSw4QkFBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU0sdUJBQUksR0FBWDtRQUNJLE9BQU87SUFDWCxDQUFDO0lBR00sNEJBQVMsR0FBaEI7UUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDTSw0QkFBUyxHQUFoQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNNLDRCQUFTLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTSw0QkFBUyxHQUFoQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNNLDRCQUFTLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTSw0QkFBUyxHQUFoQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNNLDRCQUFTLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ00sNEJBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDTSwyQkFBUSxHQUFmO1FBQ0ksSUFBTSxDQUFDLEdBQUcsSUFBSSx1QkFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDTixPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFDTSwyQkFBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ00sNkJBQVUsR0FBakI7UUFDSSxJQUFNLENBQUMsR0FBRyxJQUFJLHVCQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNOLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNNLDZCQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ1MsK0JBQVksR0FBdEIsVUFBdUIsUUFBZ0IsRUFBRSxRQUFnQjtRQUNyRCxJQUFNLENBQUMsR0FBRyxJQUFJLHVCQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksUUFBUSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ2pCLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDckIsS0FBSyx3QkFBVyxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUM7b0JBQUEsTUFBTTtnQkFDMUMsS0FBSyx3QkFBVyxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUM7b0JBQUEsTUFBTTtnQkFDMUMsS0FBSyx3QkFBVyxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUM7b0JBQUEsTUFBTTtnQkFDMUMsS0FBSyx3QkFBVyxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUM7b0JBQUEsTUFBTTtZQUM5QyxDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksUUFBUSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ2pCLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDckIsS0FBSyx3QkFBVyxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUM7b0JBQUEsTUFBTTtnQkFDMUMsS0FBSyx3QkFBVyxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUM7b0JBQUEsTUFBTTtnQkFDMUMsS0FBSyx3QkFBVyxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUM7b0JBQUEsTUFBTTtnQkFDMUMsS0FBSyx3QkFBVyxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUM7b0JBQUEsTUFBTTtZQUM5QyxDQUFDO1FBQ0wsQ0FBQztRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNNLDZCQUFVLEdBQWpCLFVBQWtCLEtBQWEsRUFBRSxLQUFZLEVBQUUsRUFBYztRQUFkLDJCQUFjO1FBQ3pELElBQUksUUFBUSxHQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQy9CLElBQUksUUFBUSxHQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQy9CLElBQUksUUFBUSxHQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNwQyxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDckIsS0FBSyx3QkFBVyxDQUFDLENBQUM7Z0JBQ2QsUUFBUSxJQUFJLEtBQUssQ0FBQztnQkFDbEIsUUFBUSxJQUFJLEtBQUssQ0FBQztnQkFDbEIsTUFBTTtZQUNWLEtBQUssd0JBQVcsQ0FBQyxDQUFDO2dCQUNkLFFBQVEsSUFBSSxLQUFLLENBQUM7Z0JBQ2xCLFFBQVEsSUFBSSxLQUFLLENBQUM7Z0JBQ2xCLE1BQU07WUFDVixLQUFLLHdCQUFXLENBQUMsQ0FBQztnQkFDZCxRQUFRLElBQUksS0FBSyxDQUFDO2dCQUNsQixRQUFRLElBQUksS0FBSyxDQUFDO2dCQUNsQixNQUFNO1lBQ1YsS0FBSyx3QkFBVyxDQUFDLENBQUM7Z0JBQ2QsUUFBUSxJQUFJLEtBQUssQ0FBQztnQkFDbEIsUUFBUSxJQUFJLEtBQUssQ0FBQztnQkFDbEIsTUFBTTtRQUNkLENBQUM7UUFDRCxPQUFPLElBQUksdUJBQVUsQ0FBQyxFQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUNNLHlCQUFNLEdBQWI7UUFDSSxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDckIsS0FBSyx3QkFBVyxDQUFDLENBQUM7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsd0JBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQUEsTUFBTTtZQUN6RCxLQUFLLHdCQUFXLENBQUMsQ0FBQztnQkFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyx3QkFBVyxDQUFDLENBQUMsQ0FBQztnQkFBQSxNQUFNO1lBQ3pELEtBQUssd0JBQVcsQ0FBQyxDQUFDO2dCQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLHdCQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUFBLE1BQU07WUFDekQsS0FBSyx3QkFBVyxDQUFDLENBQUM7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsd0JBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQUEsTUFBTTtRQUM3RCxDQUFDO0lBQ0wsQ0FBQztJQUNNLHlCQUFNLEdBQWI7UUFDSSxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDckIsS0FBSyx3QkFBVyxDQUFDLENBQUM7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsd0JBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQUEsTUFBTTtZQUN6RCxLQUFLLHdCQUFXLENBQUMsQ0FBQztnQkFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyx3QkFBVyxDQUFDLENBQUMsQ0FBQztnQkFBQSxNQUFNO1lBQ3pELEtBQUssd0JBQVcsQ0FBQyxDQUFDO2dCQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLHdCQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUFBLE1BQU07WUFDekQsS0FBSyx3QkFBVyxDQUFDLENBQUM7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsd0JBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQUEsTUFBTTtRQUM3RCxDQUFDO0lBQ0wsQ0FBQztJQUNNLHlCQUFNLEdBQWI7UUFDSSxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDckIsS0FBSyx3QkFBVyxDQUFDLENBQUM7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsd0JBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQUEsTUFBTTtZQUN6RCxLQUFLLHdCQUFXLENBQUMsQ0FBQztnQkFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyx3QkFBVyxDQUFDLENBQUMsQ0FBQztnQkFBQSxNQUFNO1lBQ3pELEtBQUssd0JBQVcsQ0FBQyxDQUFDO2dCQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLHdCQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUFBLE1BQU07WUFDekQsS0FBSyx3QkFBVyxDQUFDLENBQUM7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsd0JBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQUEsTUFBTTtRQUM3RCxDQUFDO0lBQ0wsQ0FBQztJQUNNLHlCQUFNLEdBQWI7UUFDSSxJQUFNLENBQUMsR0FBRyxnQkFBSyxDQUFDLE1BQU0sV0FBaUIsQ0FBQztRQUN4QyxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFDTSx5QkFBTSxHQUFiLFVBQWMsQ0FBYztRQUN4QixJQUFJLENBQUMsS0FBSyxTQUFTO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDakMsZ0JBQUssQ0FBQyxNQUFNLFlBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLENBeE82QiwrQkFBYyxHQXdPM0M7QUF4T1ksNEJBQVE7Ozs7Ozs7Ozs7O0FDWFI7OztBQUlBLG1CQUFXLEdBQUc7SUFDdkIsQ0FBQyxFQUFJLENBQUM7SUFDTixDQUFDLEVBQUksQ0FBQztJQUNOLENBQUMsRUFBSSxDQUFDO0lBQ04sQ0FBQyxFQUFJLENBQUM7SUFDTixDQUFDLEVBQUcsRUFBRTtJQUNOLEdBQUcsRUFBRSxDQUFDO0NBQ0EsQ0FBQztBQUdBLHNCQUFjLEdBQUc7SUFDeEIsQ0FBQyxFQUFHLEdBQUc7SUFDUCxDQUFDLEVBQUcsR0FBRztJQUNQLENBQUMsRUFBRyxHQUFHO0lBQ1AsQ0FBQyxFQUFHLEdBQUc7SUFDUCxFQUFFLEVBQUUsR0FBRztDQUNWOzs7Ozs7Ozs7OztBQ3BCWTs7O0FBTVQsdUJBQXVCO0FBQ3ZCLGdCQUFnQjtBQUNoQixXQUFXO0FBQ1gsYUFBYTtBQUNiLFlBQVk7QUFDWixjQUFjO0FBQ2QsY0FBYztBQUNkLG1CQUFtQjtBQUNuQixHQUFHO0FBQ0gsNkRBQTZEO0FBQzdELHFFQUFxRTtBQUNyRSxzRUFBc0U7QUFDdEUsb0VBQW9FO0FBRXZELGdCQUFRLEdBQTRCO0lBQzdDLEtBQUssRUFBSSxDQUFDO0lBQ1YsS0FBSyxFQUFJLENBQUM7SUFDVixLQUFLLEVBQUksQ0FBQztJQUNWLEtBQUssRUFBSSxDQUFDO0lBQ1YsS0FBSyxFQUFJLENBQUM7SUFDVixLQUFLLEVBQUksQ0FBQztJQUNWLEtBQUssRUFBSSxDQUFDO0lBQ1YsS0FBSyxFQUFJLENBQUM7SUFDVixLQUFLLEVBQUUsR0FBRztDQUNKLENBQUM7QUFHRSxrQkFBVSxHQUE4QjtJQUNqRCxDQUFDLEVBQUksZ0JBQVEsQ0FBQyxLQUFLO0lBQ25CLENBQUMsRUFBSSxnQkFBUSxDQUFDLEtBQUs7SUFDbkIsQ0FBQyxFQUFJLGdCQUFRLENBQUMsS0FBSztJQUNuQixDQUFDLEVBQUksZ0JBQVEsQ0FBQyxLQUFLO0lBQ25CLENBQUMsRUFBSSxnQkFBUSxDQUFDLEtBQUs7SUFDbkIsQ0FBQyxFQUFJLGdCQUFRLENBQUMsS0FBSztJQUNuQixDQUFDLEVBQUksZ0JBQVEsQ0FBQyxLQUFLO0lBQ25CLENBQUMsRUFBSSxnQkFBUSxDQUFDLEtBQUs7SUFDbkIsR0FBRyxFQUFFLGdCQUFRLENBQUMsS0FBSztDQUNiLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENmLDZGQUF1RDtBQUN2RCw0RkFBa0Q7QUFlbEQ7SUFDSTtJQUFzQixDQUFDO0lBRUgsMkJBQWdCLEdBQXBDLFVBQXFDLE1BQWtCLEVBQUUsR0FBaUIsRUFBRSxPQUFlOzs7Ozs0QkFDcEUscUJBQU0sVUFBVSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDOzt3QkFBcEUsVUFBVSxHQUFHLFNBQXVEO3dCQUMxRSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEVBQUUsRUFBQzt3QkFDZCxDQUFDOzhCQUU0QixFQUFWLHlCQUFVOzs7NkJBQVYseUJBQVU7d0JBQWxCLElBQUk7d0JBQ1MscUJBQU0scUJBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7O3dCQUFoRixVQUFVLEdBQUksU0FBa0U7d0JBQ3RGLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7NEJBQ2Ysc0JBQU8sRUFBRSxFQUFDO3dCQUNkLENBQUM7d0JBQ0QsV0FBNkIsRUFBVix5QkFBVSxFQUFWLHdCQUFVLEVBQVYsSUFBVTs0QkFBbEIsSUFBSTs0QkFBZ0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFBQTs7O3dCQUxwQyxJQUFVOzs0QkFRN0Isc0JBQU8sVUFBVSxFQUFDOzs7O0tBQ3JCO0lBR21CLHFCQUFVLEdBQTlCLFVBQStCLE1BQWtCLEVBQUUsR0FBaUIsRUFBRSxPQUFlLEVBQUUsSUFBYTs7Ozs7NEJBQ2hGLHFCQUFNLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDOzt3QkFBOUQsT0FBTyxHQUFHLFNBQW9EO3dCQUNwRSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEtBQUssRUFBQzt3QkFDakIsQ0FBQzs4QkFDNkIsRUFBWCxTQUFJLENBQUMsSUFBSSxFQUFFOzs7NkJBQVgsZUFBVzt3QkFBbkIsSUFBSTt3QkFDWCxxQkFBTSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDOzt3QkFBbEUsU0FBa0UsQ0FBQzt3QkFDbkUsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxLQUFLLEVBQUM7d0JBQ2pCLENBQUM7Ozt3QkFKYyxJQUFXOzs0QkFNOUIsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2Y7SUFHbUIscUJBQVUsR0FBOUIsVUFBK0IsTUFBa0IsRUFBRSxHQUFpQixFQUFFLE9BQWUsRUFBRSxRQUFnQjs7Ozs0QkFDbkcscUJBQU0scUJBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDOzt3QkFBMUQsU0FBMEQsQ0FBQzt3QkFDM0QsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxLQUFLLEVBQUM7d0JBQ2pCLENBQUM7d0JBQ0QscUJBQU0sVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQzs7d0JBQTlDLFNBQThDLENBQUM7d0JBQy9DLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7NEJBQ2Ysc0JBQU8sS0FBSyxFQUFDO3dCQUNqQixDQUFDO3dCQUNELHNCQUFPLElBQUksRUFBQzs7OztLQUNmO0lBSUQscUNBQXFDO0lBQ3JDLG9CQUFvQjtJQUNwQixHQUFHO0lBQ29CLDJCQUFnQixHQUF2QyxVQUNJLE1BQW1CLEVBQ25CLEdBQXFCLEVBQ3JCLE9BQWU7Ozs7Ozt3QkFFVCxZQUFZLEdBQUcseUlBSXBCO3dCQUN5QixxQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFlLFlBQVksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQztpQ0FDM0YsS0FBSyxDQUFDLGFBQUc7Z0NBQ04sR0FBRyxDQUFDLGVBQWUsQ0FBQyxvQ0FBYyxZQUFZLENBQUUsQ0FBQyxDQUFDO2dDQUNsRCxPQUFPLEVBQUUsQ0FBQzs0QkFDZCxDQUFDLENBQUM7O3dCQUpLLGVBQWUsR0FBSSxVQUl4QixJQUpvQjt3QkFNdEIsSUFBSSxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDOzRCQUM3QixzQkFBTyxFQUFFLEVBQUM7d0JBQ2QsQ0FBQzt3QkFDSyxVQUFVLEdBQUcsRUFBZSxDQUFDO3dCQUNuQyxXQUFnQyxFQUFmLG1DQUFlLEVBQWYsNkJBQWUsRUFBZixJQUFlLEVBQUUsQ0FBQzs0QkFBeEIsRUFBRTs0QkFDVCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQU8sQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMxRSxDQUFDO3dCQUNELHNCQUFPLFVBQVUsRUFBQzs7OztLQUNyQjtJQUVELG9DQUFvQztJQUNwQyxjQUFjO0lBQ2QsR0FBRztJQUNvQixrQkFBTyxHQUE5QixVQUNJLE1BQW1CLEVBQ25CLEdBQXFCLEVBQ3JCLE9BQWUsRUFDZixJQUFnQjs7Ozs7O3dCQUdWLGVBQWUsR0FBRSx3SkFHdEI7d0JBQ0ssQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFDeEIscUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUU7Z0NBQ2hDLE9BQU8sRUFBRyxPQUFPO2dDQUNqQixPQUFPLEVBQUcsQ0FBQyxDQUFDLE9BQU87Z0NBQ25CLElBQUksRUFBTSxDQUFDLENBQUMsSUFBSTtnQ0FDaEIsSUFBSSxFQUFNLENBQUMsQ0FBQyxJQUFJO2dDQUM1QixnREFBZ0Q7NkJBQ3ZDLENBQUM7aUNBQ0QsS0FBSyxDQUFDLGFBQUc7Z0NBQ04sR0FBRyxDQUFDLGVBQWUsQ0FBQyxvQ0FBYyxlQUFlLENBQUUsQ0FBQyxDQUFDO2dDQUNyRCxPQUFPLEVBQUUsQ0FBQzs0QkFDZCxDQUFDLENBQUM7O3dCQVZGLFNBVUUsQ0FBQzt3QkFDSCxzQkFBTyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBQzs7OztLQUM3QztJQUVELDBDQUEwQztJQUNuQixxQkFBVSxHQUFqQyxVQUFrQyxNQUFrQixFQUFFLEdBQWlCOzs7Ozs7d0JBQzdELGNBQWMsR0FBRSxzRUFFckI7d0JBQ21CLHFCQUFNLE1BQU0sQ0FBQyxLQUFLLENBQWlCLGNBQWMsQ0FBQztpQ0FDckUsS0FBSyxDQUFFLFVBQUMsR0FBRztnQ0FDUixHQUFHLENBQUMsZUFBZSxDQUFDLHFDQUFlLGNBQWMsTUFBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dDQUM1RCxPQUFPLEVBQUUsQ0FBQzs0QkFDZCxDQUFDLENBQUM7O3dCQUpLLFNBQVMsR0FBSSxVQUlsQixJQUpjO3dCQUtoQixJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQzs0QkFBRSxzQkFBTyxDQUFDLENBQUMsRUFBQzt3QkFDcEMsc0JBQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQzs7OztLQUMxQjtJQUdELDBDQUEwQztJQUMxQyxHQUFHO0lBQ2lCLGtCQUFPLEdBQTNCLFVBQTRCLE1BQWtCLEVBQUUsR0FBaUIsRUFBRSxPQUFlOzs7Ozs7d0JBQ3hFLGVBQWUsR0FBRyxzRkFHdkI7d0JBQ0QscUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7aUNBQ3JELEtBQUssQ0FBRSxVQUFDLEdBQUc7Z0NBQ1IsR0FBRyxDQUFDLGVBQWUsQ0FBQyxvQ0FBYyxlQUFlLE1BQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztnQ0FDNUQsT0FBTyxLQUFLLENBQUM7NEJBQ2pCLENBQUMsQ0FBQzs7d0JBSkYsU0FJRSxDQUFDO3dCQUNILHNCQUFPLElBQUksRUFBQzs7OztLQUNmO0lBR2EsbUNBQXdCLEdBQXRDLFVBQXVDLENBQWE7UUFDaEQsT0FBTztZQUNILEVBQUUsRUFBTyxDQUFDLENBQUMsRUFBRTtZQUNiLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTztZQUNsQixPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU87WUFDbEIsSUFBSSxFQUFLLENBQUMsQ0FBQyxJQUFJO1lBQ2YsSUFBSSxFQUFLLENBQUMsQ0FBQyxJQUFJO1lBQzNCLDJDQUEyQztTQUNsQyxDQUFDO0lBQ04sQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQztBQXJKWSxnQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQnZCLDBGQUFxRDtBQWlDckQ7SUFFSSxtQkFBbUIsQ0FBYTtJQUFHLENBQUM7SUFFaEIsMEJBQWdCLEdBQXBDLFVBQ0ksTUFBb0IsRUFDcEIsR0FBc0IsRUFDdEIsT0FBZ0IsRUFDaEIsUUFBZ0I7Ozs7OzRCQUdHLHFCQUFNLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7O3dCQUE3RSxVQUFVLEdBQUcsU0FBZ0U7d0JBQ25GLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7NEJBQ2Ysc0JBQU8sRUFBRSxFQUFDO3dCQUNkLENBQUM7d0JBQ0Qsc0JBQU8sVUFBVSxFQUFDOzs7O0tBQ3JCO0lBR21CLG9CQUFVLEdBQTlCLFVBQ0ksTUFBb0IsRUFDcEIsR0FBc0IsRUFDdEIsT0FBZ0IsRUFDaEIsUUFBZ0IsRUFDaEIsSUFBZ0I7Ozs7OzRCQUdBLHFCQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQzs7d0JBQXZFLE9BQU8sR0FBRyxTQUE2RDt3QkFDN0UsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxLQUFLLEVBQUM7d0JBQ2pCLENBQUM7d0JBQ0Qsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2Y7SUFHbUIsd0JBQWMsR0FBbEMsVUFBbUMsTUFBa0IsRUFBRSxHQUFpQixFQUFFLE9BQWU7Ozs7OzRCQUN4RSxxQkFBTSxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDOzt3QkFBeEQsSUFBSSxHQUFHLFNBQWlEO3dCQUM5RCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEtBQUssRUFBQzt3QkFDakIsQ0FBQzt3QkFDRCxzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDZjtJQUVtQixvQkFBVSxHQUE5QixVQUErQixNQUFrQixFQUFFLEdBQWlCLEVBQUUsT0FBZSxFQUFFLFFBQWdCOzs7Ozs0QkFDdEYscUJBQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7O3dCQUE5RCxJQUFJLEdBQUcsU0FBdUQ7d0JBQ3BFLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7NEJBQ2Ysc0JBQU8sS0FBSyxFQUFDO3dCQUNqQixDQUFDO3dCQUNELHNCQUFPLElBQUksRUFBQzs7OztLQUNmO0lBSUQsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixHQUFHO0lBQ29CLHNCQUFZLEdBQW5DLFVBQ0ksTUFBa0IsRUFDbEIsR0FBb0IsRUFDcEIsRUFBYzs7Ozs7O3dCQUVSLGNBQWMsR0FBRyx5WEFTdEI7d0JBQ3lCLHFCQUFNLE9BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxLQUFLLENBQWUsY0FBYyxFQUFFLEVBQUMsRUFBRSxFQUFHLEVBQUUsRUFBQyxFQUNwRixLQUFLLENBQUMsYUFBRztnQ0FDTixHQUFHLENBQUMsZUFBZSxDQUFDLHFDQUFlLGNBQWMsQ0FBRSxDQUFDLENBQUM7Z0NBQ3JELE9BQU8sRUFBRSxDQUFDOzRCQUNkLENBQUMsQ0FBQzs7d0JBSkssZUFBZSxHQUFJLFVBSXhCLElBSm9CO3dCQU10QixJQUFJLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7NEJBQzdCLEdBQUcsQ0FBQyxlQUFlLENBQUMsa0NBQWtDLENBQUMsQ0FBQzs0QkFDeEQsc0JBQU8sU0FBUyxFQUFDO3dCQUNyQixDQUFDO3dCQUNELHNCQUFPLElBQUksZUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDOzs7O0tBQ3RGO0lBR0Qsa0RBQWtEO0lBQ2xELG1CQUFtQjtJQUNuQixHQUFHO0lBQ29CLDBCQUFnQixHQUF2QyxVQUNJLE1BQW9CLEVBQ3BCLEdBQXNCLEVBQ3RCLE9BQWdCLEVBQ2hCLFFBQWdCOzs7Ozs7d0JBRVYsY0FBYyxHQUFHLDRaQVN0Qjt3QkFDeUIscUJBQU0sT0FBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLEtBQUssQ0FBZSxjQUFjLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsRUFDakgsS0FBSyxDQUFDLGFBQUc7Z0NBQ04sR0FBRyxDQUFDLGVBQWUsQ0FBQyxxQ0FBZSxjQUFjLENBQUUsQ0FBQyxDQUFDO2dDQUNyRCxPQUFPLEVBQUUsQ0FBQzs0QkFDZCxDQUFDLENBQUM7O3dCQUpLLGVBQWUsR0FBSSxVQUl4QixJQUpvQjt3QkFNdEIsSUFBSSxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDOzRCQUN6QyxzRUFBc0U7NEJBQzFELHNCQUFPLEVBQUUsRUFBQzt3QkFDZCxDQUFDO3dCQUVLLFVBQVUsR0FBRyxFQUFjLENBQUM7d0JBQ2xDLFdBQWdDLEVBQWYsbUNBQWUsRUFBZiw2QkFBZSxFQUFmLElBQWUsRUFBRSxDQUFDOzRCQUF4QixFQUFFOzRCQUNULFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLGVBQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ25GLENBQUM7d0JBQ0Qsc0JBQU8sVUFBVSxFQUFDOzs7O0tBQ3JCO0lBR0Qsc0NBQXNDO0lBQ3RDLGNBQWM7SUFDZCxHQUFHO0lBQ29CLGlCQUFPLEdBQTlCLFVBQ0ksTUFBb0IsRUFDcEIsR0FBc0IsRUFDdEIsT0FBZ0IsRUFDaEIsUUFBZ0IsRUFDaEIsSUFBZ0I7Ozs7Ozs7d0JBR1YsZUFBZSxHQUFHLDZwQkFpQnZCO3dCQUNLLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7d0JBQ3ZDLE9BQU87d0JBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkF3QkU7d0JBQ00scUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUU7Z0NBQ2hDLFNBQVMsRUFBSSxPQUFPO2dDQUNwQixVQUFVLEVBQUcsUUFBUTtnQ0FDckIsU0FBUyxFQUFJLFFBQVEsQ0FBQyxPQUFPO2dDQUM3QixNQUFNLEVBQU8sUUFBUSxDQUFDLElBQUk7Z0NBQzFCLEtBQUssRUFBUSxRQUFRLENBQUMsR0FBRztnQ0FDekIsS0FBSyxFQUFRLFFBQVEsQ0FBQyxHQUFHO2dDQUN6QixNQUFNLEVBQU8sUUFBUSxDQUFDLElBQUk7Z0NBQ3RDLDBEQUEwRDtnQ0FDOUMsT0FBTyxFQUFNLFFBQVEsQ0FBQyxLQUFLO2dDQUMzQixJQUFJLEVBQVMsUUFBUSxDQUFDLEVBQUU7Z0NBQ3hCLFNBQVMsRUFBSSwwQkFBUSxDQUFDLEdBQUcsMENBQUUsR0FBRywwQ0FBRSxHQUFHLG1DQUFFLEVBQUU7Z0NBQ3ZDLFNBQVMsRUFBSSxnQ0FBUSxDQUFDLEdBQUcsMENBQUUsR0FBRywwQ0FBRSxHQUFHLG1DQUFFLG9CQUFRLENBQUMsR0FBRywwQ0FBRSxHQUFHLDBDQUFFLEdBQUcsbUNBQUUsRUFBRTtnQ0FDL0QsU0FBUyxFQUFJLDBCQUFRLENBQUMsR0FBRywwQ0FBRSxHQUFHLDBDQUFFLEdBQUcsbUNBQUUsRUFBRTtnQ0FDdkMsU0FBUyxFQUFJLGdDQUFRLENBQUMsR0FBRywwQ0FBRSxHQUFHLDBDQUFFLEdBQUcsbUNBQUUsb0JBQVEsQ0FBQyxHQUFHLDBDQUFFLEdBQUcsMENBQUUsR0FBRyxtQ0FBRSxFQUFFO2dDQUMvRCxLQUFLLEVBQVEsb0JBQVEsQ0FBQyxHQUFHLDBDQUFFLEdBQUcsbUNBQUUsQ0FBQyxDQUFDO2dDQUNsQyxXQUFXLEVBQUUsVUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLG1DQUFFLEVBQUU7Z0NBQ25ELFdBQVcsRUFBRSxVQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsbUNBQUUsRUFBRTtnQ0FDbkQsV0FBVyxFQUFFLFVBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQ0FBRSxFQUFFO2dDQUNuRCxXQUFXLEVBQUUsVUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLG1DQUFFLEVBQUU7Z0NBQ25ELFdBQVcsRUFBRSxVQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsbUNBQUUsRUFBRTtnQ0FDbkQsV0FBVyxFQUFFLFVBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQ0FBRSxFQUFFOzZCQUN0RCxDQUFDO2lDQUNELEtBQUssQ0FBQyxhQUFHO2dDQUNOLEdBQUcsQ0FBQyxlQUFlLENBQUMscUNBQWUsZUFBZSxDQUFFLENBQUMsQ0FBQztnQ0FDdEQsT0FBTyxFQUFFLENBQUM7NEJBQ2QsQ0FBQyxDQUFDOzt3QkFwRFYsT0FBTzt3QkFDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQXdCRTt3QkFDTSxTQTBCRSxDQUFDO3dCQUdILHNCQUFPLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFDOzs7O0tBQzVDO0lBR0QsMENBQTBDO0lBQ25CLG9CQUFVLEdBQWpDLFVBQWtDLE1BQWtCLEVBQUUsR0FBaUI7Ozs7Ozt3QkFDN0QsY0FBYyxHQUFFLHNFQUVyQjt3QkFDbUIscUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBaUIsY0FBYyxDQUFDO2lDQUNyRSxLQUFLLENBQUUsVUFBQyxHQUFHO2dDQUNSLEdBQUcsQ0FBQyxlQUFlLENBQUMscUNBQWUsY0FBYyxNQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0NBQzVELE9BQU8sRUFBRSxDQUFDOzRCQUNkLENBQUMsQ0FBQzs7d0JBSkssU0FBUyxHQUFJLFVBSWxCLElBSmM7d0JBS2hCLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDOzRCQUFFLHNCQUFPLENBQUMsQ0FBQyxFQUFDO3dCQUNwQyxzQkFBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDOzs7O0tBQzFCO0lBRUQsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0QyxpQkFBaUI7SUFDakIsR0FBRztJQUNvQixxQkFBVyxHQUFsQyxVQUNJLE1BQXNCLEVBQ3RCLEdBQXdCLEVBQ3hCLE9BQWtCLEVBQ2xCLFFBQWtCLEVBQ2xCLFVBQW9COzs7Ozs7d0JBR2QsV0FBVyxHQUFHLEVBQWMsQ0FBQzs4QkFDTixFQUFWLHlCQUFVOzs7NkJBQVYseUJBQVU7d0JBQWxCLElBQUk7d0JBQ0sscUJBQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDOzt3QkFBdkUsT0FBTyxHQUFHLFNBQTZEO3dCQUM3RSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7NEJBQUUsc0JBQU8sRUFBRSxFQUFDO3dCQUM1QixXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7d0JBSFgsSUFBVTs7NEJBSzdCLHNCQUFPLFdBQVcsRUFBQzs7OztLQUN0QjtJQUdELDBDQUEwQztJQUMxQyxHQUFHO0lBQ2lCLHFCQUFXLEdBQS9CLFVBQWdDLE1BQWtCLEVBQUUsR0FBaUIsRUFBRSxPQUFlOzs7Ozs7d0JBQzVFLGVBQWUsR0FBRyx1RkFHdkI7d0JBQ0QscUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7aUNBQ3JELEtBQUssQ0FBRSxVQUFDLEdBQUc7Z0NBQ1IsR0FBRyxDQUFDLGVBQWUsQ0FBQyxvQ0FBYyxlQUFlLE1BQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztnQ0FDNUQsT0FBTyxLQUFLLENBQUM7NEJBQ2pCLENBQUMsQ0FBQzs7d0JBSkYsU0FJRSxDQUFDO3dCQUNILHNCQUFPLElBQUksRUFBQzs7OztLQUNmO0lBRUQsbURBQW1EO0lBQ25ELEdBQUc7SUFDaUIsaUJBQU8sR0FBM0IsVUFBNEIsTUFBa0IsRUFBRSxHQUFpQixFQUFFLE9BQWUsRUFBRSxRQUFnQjs7Ozs7O3dCQUMxRixlQUFlLEdBQUcsK0dBR3ZCO3dCQUNELHFCQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQUM7aUNBQ3pFLEtBQUssQ0FBRSxVQUFDLEdBQUc7Z0NBQ1IsR0FBRyxDQUFDLGVBQWUsQ0FBQyxvQ0FBYyxlQUFlLE1BQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztnQ0FDNUQsT0FBTyxLQUFLLENBQUM7NEJBQ2pCLENBQUMsQ0FBQzs7d0JBSkYsU0FJRSxDQUFDO3dCQUNILHNCQUFPLElBQUksRUFBQzs7OztLQUNmO0lBR2Esa0NBQXdCLEdBQXRDLFVBQXVDLENBQWE7UUFDaEQsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdEMsSUFBTSxJQUFJLEdBQUk7WUFDVixFQUFFLEVBQVMsQ0FBQyxDQUFDLEVBQUU7WUFDZixPQUFPLEVBQUksQ0FBQyxDQUFDLE9BQU87WUFDcEIsT0FBTyxFQUFJLENBQUMsQ0FBQyxPQUFPO1lBQ3BCLElBQUksRUFBTyxDQUFDLENBQUMsSUFBSTtZQUNqQixHQUFHLEVBQVEsQ0FBQyxDQUFDLEdBQUc7WUFDaEIsR0FBRyxFQUFRLENBQUMsQ0FBQyxHQUFHO1lBQ2hCLElBQUksRUFBTyxDQUFDLENBQUMsSUFBSTtZQUM3Qiw2Q0FBNkM7WUFDakMsS0FBSyxFQUFNLENBQUMsQ0FBQyxLQUFLO1lBQ2xCLEVBQUUsRUFBUyxDQUFDLENBQUMsRUFBRTtZQUNmLEdBQUcsRUFBRTtnQkFDRCxHQUFHLEVBQUU7b0JBQ0QsR0FBRyxFQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztvQkFDNUIsR0FBRyxFQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztpQkFDL0I7Z0JBQ0QsR0FBRyxFQUFFO29CQUNELEdBQUcsRUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7b0JBQzVCLEdBQUcsRUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7aUJBQy9CO2dCQUNELEdBQUcsRUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7YUFDL0I7WUFDRCxTQUFTLEVBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ3RDLFNBQVMsRUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDdEMsU0FBUyxFQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUN0QyxTQUFTLEVBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ3RDLFNBQVMsRUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDdEMsU0FBUyxFQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNsRDs7Ozs7Ozs7Ozs7ZUFXRztZQUNILHNEQUFzRDtTQUM3QztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUM7QUF2VVksOEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEN0QixtR0FBZ0Y7QUFzQmhGO0lBQ0k7SUFBc0IsQ0FBQztJQUdILDZCQUFnQixHQUFwQyxVQUNJLE1BQW9CLEVBQ3BCLEdBQXNCLEVBQ3RCLE9BQWdCLEVBQ2hCLFFBQWdCOzs7Ozs0QkFFRyxxQkFBTSxZQUFZLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDOzt3QkFBaEYsVUFBVSxHQUFHLFNBQW1FO3dCQUN0RixJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEVBQUUsRUFBQzt3QkFDZCxDQUFDO3dCQUNELHNCQUFPLFVBQVUsRUFBQzs7OztLQUNyQjtJQUdtQix1QkFBVSxHQUE5QixVQUNJLE1BQWtCLEVBQ2xCLEdBQWlCLEVBQ2pCLE9BQWUsRUFDZixRQUFnQixFQUNoQixJQUFlOzs7Ozs0QkFFQyxxQkFBTSxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUM7O3dCQUExRSxPQUFPLEdBQUcsU0FBZ0U7d0JBQ2hGLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7NEJBQ2Ysc0JBQU8sS0FBSyxFQUFDO3dCQUNqQixDQUFDO3dCQUNELHNCQUFPLElBQUksRUFBQzs7OztLQUNmO0lBR21CLDJCQUFjLEdBQWxDLFVBQW1DLE1BQWtCLEVBQUUsR0FBaUIsRUFBRSxPQUFlOzs7Ozs0QkFDeEUscUJBQU0sWUFBWSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQzs7d0JBQTNELElBQUksR0FBRyxTQUFvRDt3QkFDakUsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxLQUFLLEVBQUM7d0JBQ2pCLENBQUM7d0JBQ0Qsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2Y7SUFHbUIsdUJBQVUsR0FBOUIsVUFBK0IsTUFBa0IsRUFBRSxHQUFpQixFQUFFLE9BQWUsRUFBRSxRQUFnQjs7O2dCQUNuRyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO29CQUNmLHNCQUFPLEtBQUssRUFBQztnQkFDakIsQ0FBQztnQkFDRCxzQkFBTyxJQUFJLEVBQUM7OztLQUNmO0lBR0QscUNBQXFDO0lBQ3JDLHNCQUFzQjtJQUN0QixHQUFHO0lBQ29CLDZCQUFnQixHQUF2QyxVQUNRLE1BQW9CLEVBQ3BCLEdBQXNCLEVBQ3RCLE9BQWdCLEVBQ2hCLFFBQWdCOzs7Ozs7d0JBRWQsWUFBWSxHQUFHLHFTQU9wQjt3QkFDeUIscUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBZSxZQUFZLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQztpQ0FDL0csS0FBSyxDQUFDLGFBQUc7Z0NBQ04sR0FBRyxDQUFDLGVBQWUsQ0FBQyxvQ0FBYyxZQUFZLENBQUUsQ0FBQyxDQUFDO2dDQUNsRCxPQUFPLEVBQUUsQ0FBQzs0QkFDZCxDQUFDLENBQUM7O3dCQUpLLGVBQWUsR0FBSSxVQUl4QixJQUpvQjt3QkFNdEIsSUFBSSxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDOzRCQUM3QixzQkFBTyxFQUFFLEVBQUM7d0JBQ2QsQ0FBQzt3QkFDSyxVQUFVLEdBQUcsRUFBaUIsQ0FBQzt3QkFDckMsV0FBZ0MsRUFBZixtQ0FBZSxFQUFmLDZCQUFlLEVBQWYsSUFBZSxFQUFFLENBQUM7NEJBQXhCLEVBQUU7NEJBQ1QsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLHFCQUFTLENBQUMsWUFBWSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUUsQ0FBQzt3QkFDRCxzQkFBTyxVQUFVLEVBQUM7Ozs7S0FDckI7SUFHRCxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLEdBQUc7SUFDb0Isb0JBQU8sR0FBOUIsVUFDUSxNQUFvQixFQUNwQixHQUFzQixFQUN0QixPQUFnQixFQUNoQixRQUFnQixFQUNoQixJQUFtQjs7Ozs7Ozt3QkFHakIsZUFBZSxHQUFHLDZZQVd2Qjt3QkFDSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQW1CdEIsSUFBSSxHQUFHOzRCQUNULE9BQU8sRUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxnQkFBZ0I7NEJBQ2xELE9BQU8sRUFBSSxDQUFDLENBQUMsT0FBTyxFQUFjLGdCQUFnQjt5QkFDckQ7d0JBRUQscUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUU7Z0NBQzVCLE9BQU8sRUFBTSxPQUFPO2dDQUNwQixPQUFPLEVBQU0sQ0FBQyxDQUFDLE9BQU87Z0NBQ3RCLFFBQVEsRUFBSyxRQUFRO2dDQUNyQixRQUFRLEVBQUssQ0FBQyxDQUFDLE1BQU07Z0NBQ3JCLEtBQUssRUFBUSxhQUFDLENBQUMsR0FBRywwQ0FBRSxDQUFDLG1DQUFFLENBQUM7Z0NBQ3hCLEtBQUssRUFBUSxhQUFDLENBQUMsR0FBRywwQ0FBRSxDQUFDLG1DQUFFLENBQUM7Z0NBQ3hCLEtBQUssRUFBUSxhQUFDLENBQUMsR0FBRywwQ0FBRSxDQUFDLG1DQUFFLENBQUM7Z0NBQ3hCLEtBQUssRUFBUSxhQUFDLENBQUMsR0FBRywwQ0FBRSxDQUFDLG1DQUFFLENBQUM7Z0NBQ3hCLElBQUksRUFBUyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0NBQ25DLElBQUksRUFBUyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzs2QkFDcEMsQ0FBQztpQ0FDRCxLQUFLLENBQUMsYUFBRztnQ0FDTixHQUFHLENBQUMsZUFBZSxDQUFDLG1DQUFhLGVBQWUsQ0FBRSxDQUFDLENBQUM7Z0NBQ3BELE9BQU8sRUFBRSxDQUFDOzRCQUNkLENBQUMsQ0FBQzs7d0JBZk4sU0FlTSxDQUFDO3dCQUNILHNCQUFPLFlBQVksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFDOzs7O0tBQy9DO0lBRUQsMENBQTBDO0lBQ25CLHVCQUFVLEdBQWpDLFVBQWtDLE1BQWtCLEVBQUUsR0FBaUI7Ozs7Ozt3QkFDN0QsY0FBYyxHQUFFLHNFQUVyQjt3QkFDbUIscUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBaUIsY0FBYyxDQUFDO2lDQUNyRSxLQUFLLENBQUUsVUFBQyxHQUFHO2dDQUNSLEdBQUcsQ0FBQyxlQUFlLENBQUMscUNBQWUsY0FBYyxNQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0NBQzVELE9BQU8sRUFBRSxDQUFDOzRCQUNkLENBQUMsQ0FBQzs7d0JBSkssU0FBUyxHQUFJLFVBSWxCLElBSmM7d0JBS2hCLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDOzRCQUFFLHNCQUFPLENBQUMsQ0FBQyxFQUFDO3dCQUNwQyxzQkFBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDOzs7O0tBQzFCO0lBR0wsMENBQTBDO0lBQ3RDLEdBQUc7SUFDaUIsd0JBQVcsR0FBL0IsVUFBZ0MsTUFBa0IsRUFBRSxHQUFpQixFQUFFLE9BQWU7Ozs7Ozt3QkFDNUUsZUFBZSxHQUFHLHVGQUd2Qjt3QkFDRCxxQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQztpQ0FDckQsS0FBSyxDQUFFLFVBQUMsR0FBRztnQ0FDUixHQUFHLENBQUMsZUFBZSxDQUFDLG9DQUFjLGVBQWUsTUFBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dDQUM1RCxPQUFPLEtBQUssQ0FBQzs0QkFDakIsQ0FBQyxDQUFDOzt3QkFKRixTQUlFLENBQUM7d0JBQ0gsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2Y7SUFFRCwwQ0FBMEM7SUFDMUMsR0FBRztJQUNpQixvQkFBTyxHQUEzQixVQUE0QixNQUFrQixFQUFFLEdBQWlCLEVBQUUsT0FBZSxFQUFFLFFBQWdCOzs7Ozs7d0JBQzFGLGVBQWUsR0FBRywrR0FHdkI7d0JBQ0QscUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQztpQ0FDMUUsS0FBSyxDQUFFLFVBQUMsR0FBRztnQ0FDUixHQUFHLENBQUMsZUFBZSxDQUFDLG9DQUFjLGVBQWUsTUFBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dDQUM1RCxPQUFPLEtBQUssQ0FBQzs0QkFDakIsQ0FBQyxDQUFDOzt3QkFKRixTQUlFLENBQUM7d0JBQ0gsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2Y7SUFFYSxxQ0FBd0IsR0FBdEMsVUFBdUMsQ0FBYTs7UUFDaEQsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFDLENBQUMsSUFBSSxtQ0FBRSxJQUFJLENBQVEsQ0FBQyxDQUFDLGdCQUFnQjtRQUM1RCxPQUFPO1lBQ0MsTUFBTSxFQUFLLENBQUMsQ0FBQyxRQUFRO1lBQ3JCLE9BQU8sRUFBSSxDQUFDLENBQUMsT0FBTztZQUNwQixRQUFRLEVBQUcsQ0FBQyxDQUFDLFFBQVE7WUFDckIsR0FBRyxFQUFRLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUM7WUFDM0QsSUFBSSxFQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBQyxDQUFDLElBQUksbUNBQUUsSUFBSSxDQUFRLEVBQUUsb0JBQW9CO1lBQ2hFLE9BQU8sRUFBSSxRQUFFLENBQUMsT0FBTyxtQ0FBSSxHQUFHLEVBQWdCLGdCQUFnQjtZQUM1RCxPQUFPLEVBQUksUUFBRSxDQUFDLE9BQU8sbUNBQUksQ0FBQyxFQUFrQixnQkFBZ0I7U0FDL0QsQ0FBQztJQUNWLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUM7QUFoTlksb0NBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ6QiwwRkFBb0Q7QUFDcEQscUdBQW1EO0FBcUJuRDtJQUNJO0lBQXNCLENBQUM7SUFHSCwwQkFBZ0IsR0FBcEMsVUFBcUMsTUFBa0IsRUFBRSxHQUFpQixFQUFFLE9BQWU7Ozs7OzRCQUNwRSxxQkFBTSxTQUFTLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUM7O3dCQUFuRSxVQUFVLEdBQUcsU0FBc0Q7d0JBQ3pFLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7NEJBQ2Ysc0JBQU8sRUFBRSxFQUFDO3dCQUNkLENBQUM7OEJBRTRCLEVBQVYseUJBQVU7Ozs2QkFBVix5QkFBVTt3QkFBbEIsSUFBSTt3QkFDVSxxQkFBTSwyQkFBWSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7d0JBQW5GLFVBQVUsR0FBSSxTQUFxRTt3QkFDMUYsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxFQUFFLEVBQUM7d0JBQ2QsQ0FBQzt3QkFDRCxXQUE2QixFQUFWLHlCQUFVLEVBQVYsd0JBQVUsRUFBVixJQUFVOzRCQUFsQixJQUFJOzRCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUFBOzs7d0JBTG5DLElBQVU7OzRCQVE3QixzQkFBTyxVQUFVLEVBQUM7Ozs7S0FDckI7SUFHbUIsb0JBQVUsR0FBOUIsVUFBK0IsTUFBa0IsRUFBRSxHQUFpQixFQUFFLE9BQWUsRUFBRSxJQUFZOzs7Ozs0QkFDL0UscUJBQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUM7O3dCQUE3RCxPQUFPLEdBQUcsU0FBbUQ7d0JBQ25FLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7NEJBQ2Ysc0JBQU8sS0FBSyxFQUFDO3dCQUNqQixDQUFDOzhCQUNzQyxFQUFwQixTQUFJLENBQUMsYUFBYSxFQUFFOzs7NkJBQXBCLGVBQW9CO3dCQUE1QixJQUFJO3dCQUNYLHFCQUFNLDJCQUFZLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUM7O3dCQUFyRSxTQUFxRSxDQUFDO3dCQUN0RSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEtBQUssRUFBQzt3QkFDakIsQ0FBQzs7O3dCQUpjLElBQW9COzs0QkFNdkMsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2Y7SUFFbUIsb0JBQVUsR0FBOUIsVUFBK0IsTUFBa0IsRUFBRSxHQUFpQixFQUFFLE9BQWUsRUFBRSxRQUFnQjs7Ozs0QkFDbkcscUJBQU0sMkJBQVksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDOzt3QkFBN0QsU0FBNkQsQ0FBQzt3QkFDOUQsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxLQUFLLEVBQUM7d0JBQ2pCLENBQUM7d0JBQ0QsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO3dCQUN4QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEtBQUssRUFBQzt3QkFDakIsQ0FBQzt3QkFDRCxzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDZjtJQUlELHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsR0FBRztJQUNvQiwwQkFBZ0IsR0FBdkMsVUFDUSxNQUFrQixFQUNsQixHQUFpQixFQUNqQixPQUFlOzs7Ozs7d0JBRWIsWUFBWSxHQUFHLDJMQUtwQjt3QkFDeUIscUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBZSxZQUFZLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7aUNBQzNGLEtBQUssQ0FBQyxhQUFHO2dDQUNOLEdBQUcsQ0FBQyxlQUFlLENBQUMsb0NBQWMsWUFBWSxDQUFFLENBQUMsQ0FBQztnQ0FDbEQsT0FBTyxFQUFFLENBQUM7NEJBQ2QsQ0FBQyxDQUFDOzt3QkFKSyxlQUFlLEdBQUksVUFJeEIsSUFKb0I7d0JBTXRCLElBQUksZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQzs0QkFDN0Isc0JBQU8sRUFBRSxFQUFDO3dCQUNkLENBQUM7d0JBQ0ssVUFBVSxHQUFHLEVBQWMsQ0FBQzt3QkFDbEMsV0FBZ0MsRUFBZixtQ0FBZSxFQUFmLDZCQUFlLEVBQWYsSUFBZSxFQUFFLENBQUM7NEJBQXhCLEVBQUU7NEJBQ1QsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLGVBQU0sQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN4RSxDQUFDO3dCQUNELHNCQUFPLFVBQVUsRUFBQzs7OztLQUNyQjtJQUdELG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsR0FBRztJQUNvQixpQkFBTyxHQUE5QixVQUNRLE1BQW1CLEVBQ25CLEdBQXFCLEVBQ3JCLE9BQWUsRUFDZixJQUFlOzs7Ozs7d0JBR2IsZUFBZSxHQUFHLHlTQVN2Qjt3QkFDSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUNoQyxPQUFPO3dCQUNQOzs7Ozs7Ozs7OzswQkFXRTt3QkFDTSxxQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRTtnQ0FDaEMsT0FBTyxFQUFFLE9BQU87Z0NBQ2hCLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTztnQ0FDbEIsSUFBSSxFQUFLLENBQUMsQ0FBQyxJQUFJO2dDQUNmLE1BQU0sRUFBRyxDQUFDLENBQUMsTUFBTTtnQ0FDakIsTUFBTSxFQUFHLENBQUMsQ0FBQyxNQUFNO2dDQUNqQixNQUFNLEVBQUcsQ0FBQyxDQUFDLE1BQU07Z0NBQ2pCLElBQUksRUFBSyxDQUFDLENBQUMsSUFBSTtnQ0FDZixJQUFJLEVBQUssQ0FBQyxDQUFDLElBQUk7NkJBQ2xCLENBQUM7aUNBQ0QsS0FBSyxDQUFDLGFBQUc7Z0NBQ04sR0FBRyxDQUFDLGVBQWUsQ0FBQyxtQ0FBYSxlQUFlLENBQUUsQ0FBQyxDQUFDO2dDQUNwRCxPQUFPLEVBQUUsQ0FBQzs0QkFDZCxDQUFDLENBQUM7O3dCQTFCVixPQUFPO3dCQUNQOzs7Ozs7Ozs7OzswQkFXRTt3QkFDTSxTQWFFLENBQUM7d0JBQ0gsc0JBQU8sU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUM7Ozs7S0FDNUM7SUFFRCwwQ0FBMEM7SUFDbkIsb0JBQVUsR0FBakMsVUFBa0MsTUFBa0IsRUFBRSxHQUFpQjs7Ozs7O3dCQUM3RCxjQUFjLEdBQUUsc0VBRXJCO3dCQUNtQixxQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFpQixjQUFjLENBQUM7aUNBQ3JFLEtBQUssQ0FBRSxVQUFDLEdBQUc7Z0NBQ1IsR0FBRyxDQUFDLGVBQWUsQ0FBQyxxQ0FBZSxjQUFjLE1BQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztnQ0FDNUQsT0FBTyxFQUFFLENBQUM7NEJBQ2QsQ0FBQyxDQUFDOzt3QkFKSyxTQUFTLEdBQUksVUFJbEIsSUFKYzt3QkFLaEIsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUM7NEJBQUUsc0JBQU8sQ0FBQyxDQUFDLEVBQUM7d0JBQ3BDLHNCQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUM7Ozs7S0FDMUI7SUFHRCwwQ0FBMEM7SUFDMUMsR0FBRztJQUNpQixpQkFBTyxHQUEzQixVQUE0QixNQUFrQixFQUFFLEdBQWlCLEVBQUUsT0FBZTs7Ozs7O3dCQUN4RSxlQUFlLEdBQUcsc0ZBR3ZCO3dCQUNELHFCQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2lDQUN0RCxLQUFLLENBQUUsVUFBQyxHQUFHO2dDQUNSLEdBQUcsQ0FBQyxlQUFlLENBQUMsb0NBQWMsZUFBZSxNQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0NBQzVELE9BQU8sS0FBSyxDQUFDOzRCQUNqQixDQUFDLENBQUM7O3dCQUpGLFNBSUUsQ0FBQzt3QkFDSCxzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDZjtJQUVhLGtDQUF3QixHQUF0QyxVQUF1QyxDQUFhO1FBQ2hELE9BQU87WUFDSCxFQUFFLEVBQU8sQ0FBQyxDQUFDLEVBQUU7WUFDYixPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU87WUFDbEIsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPO1lBQ2xCLElBQUksRUFBSyxDQUFDLENBQUMsSUFBSTtZQUNmLE1BQU0sRUFBRyxDQUFDLENBQUMsTUFBTTtZQUNqQixNQUFNLEVBQUcsQ0FBQyxDQUFDLE1BQU07WUFDakIsTUFBTSxFQUFHLENBQUMsQ0FBQyxNQUFNO1lBQ2pCLElBQUksRUFBSyxDQUFDLENBQUMsSUFBSTtZQUNmLElBQUksRUFBSyxDQUFDLENBQUMsSUFBSTtZQUMzQiwwQ0FBMEM7U0FDakMsQ0FBQztJQUNOLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUM7QUFoTFksOEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ0QixrSEFBNEU7QUF1QjVFO0lBQ0k7SUFBc0IsQ0FBQztJQUdILDBCQUFnQixHQUFwQyxVQUFxQyxNQUFrQixFQUFFLEdBQWlCLEVBQUUsT0FBZTs7Ozs7NEJBQ3BFLHFCQUFNLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQzs7d0JBQW5FLFVBQVUsR0FBRyxTQUFzRDt3QkFDekUsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxFQUFFLEVBQUM7d0JBQ2QsQ0FBQzt3QkFDRCxzQkFBTyxVQUFVLEVBQUM7Ozs7S0FDckI7SUFHbUIsb0JBQVUsR0FBOUIsVUFBK0IsTUFBa0IsRUFBRSxHQUFpQixFQUFFLE9BQWUsRUFBRSxJQUFvQjs7Ozs7NEJBQ3ZGLHFCQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDOzt3QkFBN0QsT0FBTyxHQUFHLFNBQW1EO3dCQUNuRSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEtBQUssRUFBQzt3QkFDakIsQ0FBQzt3QkFDRCxzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDZjtJQUdtQixvQkFBVSxHQUE5QixVQUErQixNQUFrQixFQUFFLEdBQWlCLEVBQUUsT0FBZTs7O2dCQUNqRixTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3hDLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7b0JBQ2Ysc0JBQU8sS0FBSyxFQUFDO2dCQUNqQixDQUFDO2dCQUNELHNCQUFPLElBQUksRUFBQzs7O0tBQ2Y7SUFJRCxxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLEdBQUc7SUFDb0IsMEJBQWdCLEdBQXZDLFVBQ1EsTUFBa0IsRUFDbEIsR0FBaUIsRUFDakIsT0FBZTs7Ozs7O3dCQUViLFlBQVksR0FBRyw4UUFNcEI7d0JBQ3lCLHFCQUFNLE1BQU0sQ0FBQyxLQUFLLENBQWUsWUFBWSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2lDQUMzRixLQUFLLENBQUMsYUFBRztnQ0FDTixHQUFHLENBQUMsZUFBZSxDQUFDLG9DQUFjLFlBQVksQ0FBRSxDQUFDLENBQUM7Z0NBQ2xELE9BQU8sRUFBRSxDQUFDOzRCQUNkLENBQUMsQ0FBQzs7d0JBSkssZUFBZSxHQUFJLFVBSXhCLElBSm9CO3dCQU10QixJQUFJLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7NEJBQzdCLHNCQUFPLEVBQUUsRUFBQzt3QkFDZCxDQUFDO3dCQUNLLFVBQVUsR0FBRyxFQUFzQixDQUFDO3dCQUMxQyxXQUFnQyxFQUFmLG1DQUFlLEVBQWYsNkJBQWUsRUFBZixJQUFlLEVBQUUsQ0FBQzs0QkFBeEIsRUFBRTs0QkFDVCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQWMsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNoRixDQUFDO3dCQUNELHNCQUFPLFVBQVUsRUFBQzs7OztLQUNyQjtJQUdELG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsR0FBRztJQUNvQixpQkFBTyxHQUE5QixVQUNRLE1BQW1CLEVBQ25CLEdBQXFCLEVBQ3JCLE9BQWUsRUFDZixJQUF1Qjs7Ozs7Ozt3QkFHckIsZUFBZSxHQUFHLHVjQVd2Qjt3QkFDSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUNoQyxPQUFPO3dCQUNQOzs7Ozs7Ozs7Ozs7OzswQkFjRTt3QkFDRixxQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRTtnQ0FDeEIsT0FBTyxFQUFNLE9BQU87Z0NBQ3BCLE9BQU8sRUFBTSxDQUFDLENBQUMsT0FBTztnQ0FDdEIsT0FBTyxFQUFNLENBQUMsQ0FBQyxPQUFPO2dDQUN0QixRQUFRLEVBQUssQ0FBQyxDQUFDLFFBQVE7Z0NBQ3ZCLFFBQVEsRUFBSyxDQUFDLENBQUMsSUFBSTtnQ0FDbkIsUUFBUSxFQUFLLENBQUMsQ0FBQyxJQUFJO2dDQUNuQixPQUFPLEVBQU0sQ0FBQyxDQUFDLE9BQU87Z0NBQ3RCLFNBQVMsRUFBSSxhQUFDLENBQUMsT0FBTywwQ0FBRSxDQUFDLG1DQUFFLENBQUM7Z0NBQzVCLFNBQVMsRUFBSSxhQUFDLENBQUMsT0FBTywwQ0FBRSxDQUFDLG1DQUFFLENBQUM7Z0NBQzVCLFNBQVMsRUFBSSxhQUFDLENBQUMsT0FBTywwQ0FBRSxDQUFDLG1DQUFFLENBQUM7Z0NBQzVCLFNBQVMsRUFBSSxhQUFDLENBQUMsT0FBTywwQ0FBRSxDQUFDLG1DQUFFLEVBQUU7NkJBQ2hDLENBQUM7aUNBQ0QsS0FBSyxDQUFDLGFBQUc7Z0NBQ04sR0FBRyxDQUFDLGVBQWUsQ0FBQyxtQ0FBYSxlQUFlLENBQUUsQ0FBQyxDQUFDO2dDQUNwRCxPQUFPLEVBQUUsQ0FBQzs0QkFDZCxDQUFDLENBQUM7O3dCQWhDVixPQUFPO3dCQUNQOzs7Ozs7Ozs7Ozs7OzswQkFjRTt3QkFDRixTQWdCVSxDQUFDO3dCQUNILHNCQUFPLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFDOzs7O0tBQzVDO0lBRUQsMENBQTBDO0lBQ25CLG9CQUFVLEdBQWpDLFVBQWtDLE1BQWtCLEVBQUUsR0FBaUI7Ozs7Ozt3QkFDN0QsY0FBYyxHQUFFLHNFQUVyQjt3QkFDbUIscUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBaUIsY0FBYyxDQUFDO2lDQUNyRSxLQUFLLENBQUUsVUFBQyxHQUFHO2dDQUNSLEdBQUcsQ0FBQyxlQUFlLENBQUMscUNBQWUsY0FBYyxNQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0NBQzVELE9BQU8sRUFBRSxDQUFDOzRCQUNkLENBQUMsQ0FBQzs7d0JBSkssU0FBUyxHQUFJLFVBSWxCLElBSmM7d0JBS2hCLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDOzRCQUFFLHNCQUFPLENBQUMsQ0FBQyxFQUFDO3dCQUNwQyxzQkFBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDOzs7O0tBQzFCO0lBR0QsMENBQTBDO0lBQzFDLEdBQUc7SUFDaUIsaUJBQU8sR0FBM0IsVUFBNEIsTUFBa0IsRUFBRSxHQUFpQixFQUFFLE9BQWU7Ozs7Ozt3QkFDeEUsZUFBZSxHQUFHLHNGQUd2Qjt3QkFDRCxxQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQztpQ0FDdEQsS0FBSyxDQUFFLFVBQUMsR0FBRztnQ0FDUixHQUFHLENBQUMsZUFBZSxDQUFDLG9DQUFjLGVBQWUsTUFBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dDQUM1RCxPQUFPLEtBQUssQ0FBQzs0QkFDakIsQ0FBQyxDQUFDOzt3QkFKRixTQUlFLENBQUM7d0JBQ0gsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2Y7SUFFYSxrQ0FBd0IsR0FBdEMsVUFBdUMsQ0FBYTs7UUFDaEQsT0FBTztZQUNILE9BQU8sRUFBTSxDQUFDLENBQUMsT0FBTztZQUN0QixPQUFPLEVBQU0sQ0FBQyxDQUFDLE9BQU87WUFDdEIsUUFBUSxFQUFLLENBQUMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBUyxDQUFDLENBQUMsUUFBUTtZQUN2QixJQUFJLEVBQVMsQ0FBQyxDQUFDLFFBQVE7WUFDdkIsT0FBTyxFQUFNLENBQUMsQ0FBQyxPQUFPO1lBQ3RCLE9BQU8sRUFBRTtnQkFDTCxDQUFDLEVBQVEsT0FBQyxDQUFDLFNBQVMsbUNBQUUsQ0FBQztnQkFDdkIsQ0FBQyxFQUFRLE9BQUMsQ0FBQyxTQUFTLG1DQUFFLENBQUM7Z0JBQ3ZCLENBQUMsRUFBUSxPQUFDLENBQUMsU0FBUyxtQ0FBRSxDQUFDO2dCQUN2QixDQUFDLEVBQVEsT0FBQyxDQUFDLFNBQVMsbUNBQUUsRUFBRTthQUMzQjtTQUNKLENBQUM7SUFDTixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDO0FBektZLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCdEIsc0dBQXFEO0FBQ3JELHNHQUFxRDtBQUNyRCxrSEFBeUQ7QUFDekQsNEZBQTZDO0FBQzdDLDRGQUE2QztBQUM3Qyw0RkFBNkM7QUFDN0MsK0ZBQThDO0FBQzlDLDRGQUE2QztBQUM3QyxxR0FBOEM7QUFzQzlDO0lBQUE7SUEyREEsQ0FBQztJQTFERyxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixHQUFHO0lBQ2lCLDZCQUFlLEdBQW5DLFVBQW9DLE1BQWtCLEVBQUUsR0FBaUIsRUFBRSxTQUFpQjs7Ozs7O3dCQUNsRixZQUFZLEdBQUcsb1lBUXBCO3dCQUNtQixxQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFtQixZQUFZLEVBQUUsRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFDLENBQUM7aUNBQzdGLEtBQUssQ0FBRSxVQUFDLEdBQUc7Z0NBQ1IsR0FBRyxDQUFDLGVBQWUsQ0FBQyxvQ0FBYyxZQUFZLE1BQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztnQ0FDekQsT0FBTyxFQUFFLENBQUM7NEJBQ2QsQ0FBQyxDQUFDOzt3QkFKSyxTQUFTLEdBQUksVUFJbEIsSUFKYzt3QkFLaEIsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUM7NEJBQUUsc0JBQU8sRUFBRSxFQUFDO3dCQUU5QixhQUFhLEdBQWlCLEVBQUUsQ0FBQzt3QkFDdkMsS0FBVyxFQUFFLElBQUksU0FBUyxFQUFFLENBQUM7NEJBQ3pCLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxHQUFHO2dDQUFFLFNBQVM7NEJBQzdDLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxHQUFHO2dDQUFFLFNBQVM7NEJBRXZDLElBQUksR0FBRyxJQUFJLHVCQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQzNDLElBQUksQ0FBQyxLQUFLLEdBQU8sK0JBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDOzRCQUVwRSxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUM3QixDQUFDO3dCQUNELHNCQUFPLGFBQWEsRUFBQzs7OztLQUN4QjtJQUdELG9EQUFvRDtJQUNwRCxHQUFHO0lBQ2lCLGdDQUFrQixHQUF0QyxVQUF1QyxNQUFrQixFQUFFLEdBQWlCLEVBQUUsU0FBaUIsRUFBQyxPQUFlOzs7Ozs7d0JBQ3JHLGFBQWEsR0FBRyxzS0FLckI7d0JBQ21CLHFCQUFNLE1BQU0sQ0FBQyxLQUFLLENBQWlCLGFBQWEsRUFBRSxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2lDQUM5RyxLQUFLLENBQUUsVUFBQyxHQUFHO2dDQUNSLEdBQUcsQ0FBQyxlQUFlLENBQUMsb0NBQWMsYUFBYSxNQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0NBQzFELE9BQU8sRUFBRSxDQUFDOzRCQUNkLENBQUMsQ0FBQzs7d0JBSkssU0FBUyxHQUFJLFVBSWxCLElBSmM7d0JBS2hCLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQzs0QkFDdkIsc0JBQU8sQ0FBQyxDQUFDLEVBQUM7d0JBQ2QsQ0FBQzt3QkFDRCxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzs0QkFDOUIsR0FBRyxDQUFDLGVBQWUsQ0FBQyxxREFBcUIsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBRyxDQUFDLENBQUM7NEJBQ2xFLHNCQUFPLENBQUMsQ0FBQyxFQUFDO3dCQUNkLENBQUM7d0JBQ0Qsc0JBQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQzs7OztLQUN2QztJQUNMLG9CQUFDO0FBQUQsQ0FBQztBQTNEWSxzQ0FBYTtBQStEMUI7SUFBQTtJQW1PQSxDQUFDO0lBak91QiwwQkFBWSxHQUFoQyxVQUFpQyxNQUFrQixFQUFFLEdBQWlCLEVBQUUsT0FBZTs7Ozs7NEJBRWhFLHFCQUFNLGFBQWEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUM7O3dCQUFuRSxTQUFTLEdBQUksU0FBc0Q7d0JBQ3pFLElBQUksU0FBUyxLQUFLLFNBQVMsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDdEMsc0JBQU8sU0FBUyxFQUFDO3dCQUN6QixDQUFDO3dCQUdrQixxQkFBTSxxQkFBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDOzt3QkFBbkUsVUFBVSxHQUFHLFNBQXNEO3dCQUN6RSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLFNBQVMsRUFBQzt3QkFDckIsQ0FBQzt3QkFDRCxXQUE2QixFQUFWLHlCQUFVLEVBQVYsd0JBQVUsRUFBVixJQUFVOzRCQUFsQixJQUFJOzRCQUFnQixTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQzt5QkFBQTt3QkFHbEQscUJBQU0scUJBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQzs7d0JBQW5FLFVBQVUsR0FBRyxTQUFzRDt3QkFDekUsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxTQUFTLEVBQUM7d0JBQ3JCLENBQUM7d0JBQ0QsV0FBNkIsRUFBVix5QkFBVSxFQUFWLHdCQUFVLEVBQVYsSUFBVTs0QkFBbEIsSUFBSTs0QkFBZ0IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7eUJBQUE7d0JBR2xELHFCQUFNLHFCQUFTLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUM7O3dCQUFuRSxVQUFVLEdBQUcsU0FBc0Q7d0JBQ3pFLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7NEJBQ1gsc0JBQU8sU0FBUyxFQUFDO3dCQUN6QixDQUFDO3dCQUNELFdBQTZCLEVBQVYseUJBQVUsRUFBVix3QkFBVSxFQUFWLElBQVU7NEJBQWxCLElBQUk7NEJBQWdCLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO3lCQUFBO3dCQUdsRCxxQkFBTSx1QkFBVSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDOzt3QkFBcEUsVUFBVSxHQUFHLFNBQXVEO3dCQUMxRSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNYLHNCQUFPLFNBQVMsRUFBQzt3QkFDekIsQ0FBQzt3QkFDRCxXQUE2QixFQUFWLHlCQUFVLEVBQVYsd0JBQVUsRUFBVixJQUFVOzRCQUFsQixJQUFJOzRCQUFnQixTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQzt5QkFBQTt3QkFFckUsc0JBQU8sU0FBUyxFQUFDOzs7O0tBQ3BCO0lBR21CLHdCQUFVLEdBQTlCLFVBQStCLE1BQWtCLEVBQUUsR0FBaUIsRUFBRSxJQUEwQjs7Ozs7O3dCQUM1RixJQUFJLElBQUksS0FBSyxTQUFTOzRCQUFFLHNCQUFPLEtBQUssRUFBQzt3QkFFckIscUJBQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQzs7d0JBQXhELE9BQU8sR0FBRyxTQUE4Qzt3QkFDOUQsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxLQUFLLEVBQUM7d0JBQ2pCLENBQUM7NkJBRWdCLElBQUksQ0FBQyxRQUFROzs7Ozs7Ozs7Ozt3QkFDMUIscUJBQU0scUJBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7d0JBQW5FLFNBQW1FLENBQUM7d0JBQ3BFLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7NEJBQ2Ysc0JBQU8sS0FBSyxFQUFDO3dCQUNqQixDQUFDOzs7Ozs7NkJBR1ksSUFBSSxDQUFDLFFBQVE7Ozs7Ozs7Ozs7O3dCQUN0QyxrRkFBa0Y7d0JBQ3RFLHFCQUFNLHFCQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7O3dCQUQvRSxrRkFBa0Y7d0JBQ3RFLFNBQW1FLENBQUM7d0JBQ3BFLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7NEJBQ2Ysc0JBQU8sS0FBSyxFQUFDO3dCQUNqQixDQUFDOzs7Ozs7NkJBR1ksSUFBSSxDQUFDLFFBQVE7Ozs7Ozs7Ozs7O3dCQUMxQixxQkFBTSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzt3QkFBbkUsU0FBbUUsQ0FBQzt3QkFDcEUsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxLQUFLLEVBQUM7d0JBQ2pCLENBQUM7Ozs7Ozs2QkFHWSxJQUFJLENBQUMsUUFBUTs7Ozs7Ozs7Ozs7d0JBQzFCLHFCQUFNLHVCQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7O3dCQUFwRSxTQUFvRSxDQUFDO3dCQUNyRSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEtBQUssRUFBQzt3QkFDakIsQ0FBQzs7Ozs7NkJBR0wsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2Y7SUFHbUIsd0JBQVUsR0FBOUIsVUFBK0IsTUFBa0IsRUFBRSxHQUFpQixFQUFFLE9BQWU7Ozs7NEJBQ2pGLHFCQUFNLHFCQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDOzt3QkFBakQsU0FBaUQsQ0FBQzt3QkFDbEQsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxLQUFLLEVBQUM7d0JBQ2pCLENBQUM7d0JBRUQscUJBQU0sMkJBQVksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUM7O3dCQUFwRCxTQUFvRCxDQUFDO3dCQUNyRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEtBQUssRUFBQzt3QkFDakIsQ0FBQzt3QkFFRCxxQkFBTSx1QkFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQzs7d0JBQTlDLFNBQThDLENBQUM7d0JBQy9DLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7NEJBQ2Ysc0JBQU8sS0FBSyxFQUFDO3dCQUNqQixDQUFDO3dCQUVELHFCQUFNLHFCQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDOzt3QkFBN0MsU0FBNkMsQ0FBQzt3QkFDOUMsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxLQUFLLEVBQUM7d0JBQ2pCLENBQUM7d0JBRUQscUJBQU0scUJBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUM7O3dCQUE3QyxTQUE2QyxDQUFDO3dCQUM5QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEtBQUssRUFBQzt3QkFDakIsQ0FBQzt3QkFFRCxxQkFBTSxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQzs7d0JBQTdDLFNBQTZDLENBQUM7d0JBQzlDLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7NEJBQ2Ysc0JBQU8sS0FBSyxFQUFDO3dCQUNqQixDQUFDO3dCQUVELHFCQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUM7O3dCQUFqRCxTQUFpRCxDQUFDO3dCQUNsRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEtBQUssRUFBQzt3QkFDakIsQ0FBQzt3QkFFRCxzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDZjtJQUdELHNDQUFzQztJQUN0QyxlQUFlO0lBQ2YsR0FBRztJQUNvQiwwQkFBWSxHQUFuQyxVQUFvQyxNQUFrQixFQUFFLEdBQWlCLEVBQUUsT0FBZTs7Ozs7O3dCQUNoRixZQUFZLEdBQUcsOFNBTXBCO3dCQUNtQixxQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFtQixZQUFZLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7aUNBQ3pGLEtBQUssQ0FBRSxVQUFDLEdBQUc7Z0NBQ1IsR0FBRyxDQUFDLGVBQWUsQ0FBQyxvQ0FBYyxZQUFZLE1BQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztnQ0FDekQsT0FBTyxFQUFFLENBQUM7NEJBQ2QsQ0FBQyxDQUFDOzt3QkFKSyxTQUFTLEdBQUksVUFJbEIsSUFKYzt3QkFNeEIsUUFBUTt3QkFDUixJQUFJLFNBQVMsS0FBSyxTQUFTOzRCQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0VBQXlELE9BQU8sQ0FBRSxDQUFDLENBQUM7d0JBQ3ZHLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQzs0QkFDdkIsR0FBRyxDQUFDLGVBQWUsQ0FBQywwRkFBa0IsWUFBWSxDQUFFLENBQUMsQ0FBQzs0QkFDdEQsc0JBQU8sU0FBUyxFQUFDO3dCQUNyQixDQUFDO3dCQUVLLElBQUksR0FBRyxJQUFJLHVCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzFDLElBQUksQ0FBQyxLQUFLLEdBQU8sK0JBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO3dCQUMzRSxxRkFBcUY7d0JBQ3JGLDhFQUE4RTt3QkFDOUUsOEVBQThFO3dCQUM5RSw4RUFBOEU7d0JBRXRFLHNCQUFPLElBQUksRUFBQzs7OztLQUNmO0lBR0Qsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixHQUFHO0lBQ29CLHFCQUFPLEdBQTlCLFVBQStCLE1BQWtCLEVBQUUsR0FBaUIsRUFBRSxJQUFnQjs7Ozs7O3dCQUM1RSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7d0JBQ3ZDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQzt3QkFDdkMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO3dCQUV2QyxlQUFlLEdBQUUsNllBVXRCO3dCQUNELHFCQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFO2dDQUNoQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7Z0NBQ3pCLE9BQU8sRUFBSSxJQUFJLENBQUMsT0FBTztnQ0FDdkIsS0FBSyxFQUFNLElBQUksQ0FBQyxLQUFLO2dDQUNyQixNQUFNLEVBQUssSUFBSSxDQUFDLE1BQU07Z0NBQ3RCLEtBQUssRUFBTSxJQUFJLENBQUMsS0FBSztnQ0FDckIsS0FBSyxFQUFNLCtCQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQ0FDcEUsK0VBQStFO2dDQUNuRSxTQUFTLEVBQUUsU0FBUztnQ0FDcEIsU0FBUyxFQUFFLFNBQVM7Z0NBQ3BCLFNBQVMsRUFBRSxTQUFTOzZCQUN2QixDQUFDO2lDQUNELEtBQUssQ0FBRSxVQUFDLEdBQUc7Z0NBQ1IsR0FBRyxDQUFDLGVBQWUsQ0FBQyxtQ0FBYSxlQUFlLE1BQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztnQ0FDM0QsT0FBTyxDQUFDLENBQUM7NEJBQ2IsQ0FBQyxDQUFDOzt3QkFmRixTQWVFLENBQUM7d0JBQ0gsc0JBQU8sYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUM7Ozs7S0FDaEQ7SUFHRCwrQ0FBK0M7SUFDeEIsd0JBQVUsR0FBakMsVUFBa0MsTUFBa0IsRUFBRSxHQUFpQjs7Ozs7O3dCQUM3RCxjQUFjLEdBQUUsc0VBRXJCO3dCQUNtQixxQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFpQixjQUFjLENBQUM7aUNBQ3JFLEtBQUssQ0FBRSxVQUFDLEdBQUc7Z0NBQ1IsR0FBRyxDQUFDLGVBQWUsQ0FBQyxxQ0FBZSxjQUFjLE1BQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztnQ0FDNUQsT0FBTyxFQUFFLENBQUM7NEJBQ2QsQ0FBQyxDQUFDOzt3QkFKSyxTQUFTLEdBQUksVUFJbEIsSUFKYzt3QkFLaEIsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUM7NEJBQUUsc0JBQU8sQ0FBQyxDQUFDLEVBQUM7d0JBQ3BDLHNCQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUM7Ozs7S0FDMUI7SUFHRCxzQ0FBc0M7SUFDdEMsR0FBRztJQUNvQixxQkFBTyxHQUE5QixVQUErQixNQUFrQixFQUFFLEdBQWlCLEVBQUUsT0FBZTs7Ozs7O3dCQUMzRSxlQUFlLEdBQUcsc0ZBR3ZCO3dCQUNELHFCQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFO2dDQUNoQyxPQUFPLEVBQUksT0FBTzs2QkFDckIsQ0FBQztpQ0FDRCxLQUFLLENBQUUsVUFBQyxHQUFHO2dDQUNSLEdBQUcsQ0FBQyxlQUFlLENBQUMsb0NBQWMsZUFBZSxNQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0NBQzVELE9BQU8sS0FBSyxDQUFDOzRCQUNqQixDQUFDLENBQUM7O3dCQU5GLFNBTUUsQ0FBQzt3QkFDSCxzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDZjtJQUNMLG9CQUFDO0FBQUQsQ0FBQztBQW5PWSxzQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RzFCLDBGQUFxRDtBQUNyRCw0RkFBaUQ7QUFpQmpEO0lBQ0k7SUFBc0IsQ0FBQztJQUVILDBCQUFnQixHQUFwQyxVQUFxQyxNQUFrQixFQUFFLEdBQWlCLEVBQUUsT0FBZTs7Ozs7NEJBQ3BFLHFCQUFNLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQzs7d0JBQW5FLFVBQVUsR0FBRyxTQUFzRDt3QkFDekUsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxFQUFFLEVBQUM7d0JBQ2QsQ0FBQzs4QkFDNEIsRUFBVix5QkFBVTs7OzZCQUFWLHlCQUFVO3dCQUFsQixJQUFJO3dCQUNRLHFCQUFNLHFCQUFTLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDOzt3QkFBL0UsVUFBVSxHQUFHLFNBQWtFO3dCQUNyRixJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEVBQUUsRUFBQzt3QkFDZCxDQUFDO3dCQUNELFdBQTZCLEVBQVYseUJBQVUsRUFBVix3QkFBVSxFQUFWLElBQVU7NEJBQWxCLElBQUk7NEJBQWdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQUE7Ozt3QkFMcEMsSUFBVTs7NEJBTzdCLHNCQUFPLFVBQVUsRUFBQzs7OztLQUNyQjtJQUdtQixzQkFBWSxHQUFoQyxVQUFpQyxNQUFrQixFQUFFLEdBQWlCLEVBQUUsT0FBZSxFQUFFLElBQVk7Ozs7OzRCQUNuRixxQkFBTSxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7d0JBQXRFLEtBQUssR0FBRyxTQUE4RDt3QkFDNUUsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxLQUFLLEVBQUM7d0JBQ2pCLENBQUM7d0JBQ2tCLHFCQUFNLHFCQUFTLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDOzt3QkFBL0UsVUFBVSxHQUFHLFNBQWtFO3dCQUNyRixJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEtBQUssRUFBQzt3QkFDakIsQ0FBQzt3QkFDRCxXQUE2QixFQUFWLHlCQUFVLEVBQVYsd0JBQVUsRUFBVixJQUFVOzRCQUFsQixJQUFJOzRCQUFnQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUFBO3dCQUNuRCxzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDZjtJQUdtQixvQkFBVSxHQUE5QixVQUNJLE1BQW1CLEVBQ25CLEdBQXFCLEVBQ3JCLE9BQWUsRUFDZixJQUFlOzs7Ozs0QkFFQyxxQkFBTSxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQzs7d0JBQTdELE9BQU8sR0FBRyxTQUFtRDt3QkFDbkUsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs0QkFDZixzQkFBTyxLQUFLLEVBQUM7d0JBQ2pCLENBQUM7OEJBQzZCLEVBQVgsU0FBSSxDQUFDLElBQUksRUFBRTs7OzZCQUFYLGVBQVc7d0JBQW5CLElBQUk7d0JBQ1gscUJBQU0scUJBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQzs7d0JBQWxFLFNBQWtFLENBQUM7d0JBQ25FLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7NEJBQ2Ysc0JBQU8sS0FBSyxFQUFDO3dCQUNqQixDQUFDOzs7d0JBSmMsSUFBVzs7NEJBTTlCLHNCQUFPLElBQUksRUFBQzs7OztLQUNmO0lBR21CLG9CQUFVLEdBQTlCLFVBQStCLE1BQWtCLEVBQUUsR0FBaUIsRUFBRSxPQUFlLEVBQUUsUUFBZ0I7Ozs7NEJBQ25HLHFCQUFNLHFCQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQzs7d0JBQTFELFNBQTBELENBQUM7d0JBQzNELElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7NEJBQ2Ysc0JBQU8sS0FBSyxFQUFDO3dCQUNqQixDQUFDO3dCQUNELHFCQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUM7O3dCQUE3QyxTQUE2QyxDQUFDO3dCQUM5QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzRCQUNmLHNCQUFPLEtBQUssRUFBQzt3QkFDakIsQ0FBQzt3QkFDRCxzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDZjtJQUlELHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsR0FBRztJQUNvQiwwQkFBZ0IsR0FBdkMsVUFDSSxNQUFtQixFQUNuQixHQUFxQixFQUNyQixPQUFlOzs7Ozs7d0JBRVQsWUFBWSxHQUFFLDhJQUluQjt3QkFDeUIscUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBZSxZQUFZLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7aUNBQzNGLEtBQUssQ0FBQyxhQUFHO2dDQUNOLEdBQUcsQ0FBQyxlQUFlLENBQUMscUNBQWUsWUFBWSxNQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0NBQzFELE9BQU8sRUFBRSxDQUFDOzRCQUNkLENBQUMsQ0FBQzs7d0JBSkssZUFBZSxHQUFJLFVBSXhCLElBSm9CO3dCQU10QixJQUFJLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7NEJBQzdCLHNCQUFPLEVBQUUsRUFBQzt3QkFDZCxDQUFDO3dCQUNLLFVBQVUsR0FBRyxFQUFFLENBQUM7d0JBQ3RCLFdBQWdDLEVBQWYsbUNBQWUsRUFBZiw2QkFBZSxFQUFmLElBQWUsRUFBRSxDQUFDOzRCQUF4QixFQUFFOzRCQUNULFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxlQUFNLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDeEUsQ0FBQzt3QkFDRCxzQkFBTyxVQUFVLEVBQUM7Ozs7S0FDckI7SUFFRCxnREFBZ0Q7SUFDaEQsR0FBRztJQUNvQixzQkFBWSxHQUFuQyxVQUNJLE1BQW9CLEVBQ3BCLEdBQXNCLEVBQ3RCLE9BQWdCLEVBQ2hCLFFBQWdCOzs7Ozs7d0JBRVYsWUFBWSxHQUFHLHdLQUlwQjt3QkFDeUIscUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBZSxZQUFZLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQztpQ0FDL0csS0FBSyxDQUFDLGFBQUc7Z0NBQ04sR0FBRyxDQUFDLGVBQWUsQ0FBQyxxQ0FBZSxZQUFZLE1BQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztnQ0FDMUQsT0FBTyxFQUFFLENBQUM7NEJBQ2QsQ0FBQyxDQUFDOzt3QkFKSyxlQUFlLEdBQUksVUFJeEIsSUFKb0I7d0JBTXRCLElBQUksZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQzs0QkFDN0IsR0FBRyxDQUFDLGVBQWUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDOzRCQUNqRCxzQkFBTyxTQUFTLEVBQUM7d0JBQ3JCLENBQUM7d0JBQ0Qsc0JBQU8sSUFBSSxlQUFNLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7O0tBQzVFO0lBR0Qsd0NBQXdDO0lBQ3hDLGNBQWM7SUFDZCxHQUFHO0lBQ29CLGlCQUFPLEdBQTlCLFVBQ0ksTUFBbUIsRUFDbkIsR0FBcUIsRUFDckIsT0FBZSxFQUNmLElBQWU7Ozs7Ozt3QkFFVCxlQUFlLEdBQUcsc05BT3ZCO3dCQUNLLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7d0JBQ2hDLCtHQUErRzt3QkFDdkcscUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUU7Z0NBQ2hDLE9BQU8sRUFBRyxPQUFPO2dDQUNqQixPQUFPLEVBQUcsQ0FBQyxDQUFDLE9BQU87Z0NBQ25CLElBQUksRUFBTSxDQUFDLENBQUMsSUFBSTtnQ0FDaEIsTUFBTSxFQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQ0FDbEMsSUFBSSxFQUFNLENBQUMsQ0FBQyxJQUFJO2dDQUM1QixrREFBa0Q7NkJBQ3pDLENBQUM7aUNBQ0QsS0FBSyxDQUFDLGFBQUc7Z0NBQ04sR0FBRyxDQUFDLGVBQWUsQ0FBQyxtQ0FBYSxlQUFlLE1BQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztnQ0FDM0QsT0FBTyxFQUFFLENBQUM7NEJBQ2QsQ0FBQyxDQUFDOzt3QkFaViwrR0FBK0c7d0JBQ3ZHLFNBV0UsQ0FBQzt3QkFFSCxzQkFBTyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBQzs7OztLQUM1QztJQUVELDBDQUEwQztJQUNuQixvQkFBVSxHQUFqQyxVQUFrQyxNQUFrQixFQUFFLEdBQWlCOzs7Ozs7d0JBQzdELGNBQWMsR0FBRSxzRUFFckI7d0JBQ21CLHFCQUFNLE1BQU0sQ0FBQyxLQUFLLENBQWlCLGNBQWMsQ0FBQztpQ0FDckUsS0FBSyxDQUFFLFVBQUMsR0FBRztnQ0FDUixHQUFHLENBQUMsZUFBZSxDQUFDLHFDQUFlLGNBQWMsTUFBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dDQUM1RCxPQUFPLEVBQUUsQ0FBQzs0QkFDZCxDQUFDLENBQUM7O3dCQUpLLFNBQVMsR0FBSSxVQUlsQixJQUpjO3dCQUtoQixJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQzs0QkFBRSxzQkFBTyxDQUFDLENBQUMsRUFBQzt3QkFDcEMsc0JBQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQzs7OztLQUMxQjtJQUdELG1DQUFtQztJQUNuQyxzQ0FBc0M7SUFDdEMsaUJBQWlCO0lBQ2pCLEdBQUc7SUFDb0IscUJBQVcsR0FBbEMsVUFDSSxNQUFzQixFQUN0QixHQUF3QixFQUN4QixPQUFrQixFQUNsQixVQUFvQjs7Ozs7O3dCQUdkLFdBQVcsR0FBRyxFQUFjLENBQUM7OEJBQ04sRUFBVix5QkFBVTs7OzZCQUFWLHlCQUFVO3dCQUFsQixJQUFJO3dCQUNLLHFCQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDOzt3QkFBN0QsT0FBTyxHQUFHLFNBQW1EO3dCQUNuRSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7NEJBQUUsc0JBQU8sRUFBRSxFQUFDO3dCQUM1QixXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7d0JBSFgsSUFBVTs7NEJBSzdCLHNCQUFPLFdBQVcsRUFBQzs7OztLQUN0QjtJQUVELDBDQUEwQztJQUMxQyxHQUFHO0lBQ2lCLGlCQUFPLEdBQTNCLFVBQTRCLE1BQWtCLEVBQUUsR0FBaUIsRUFBRSxPQUFlOzs7Ozs7d0JBQ3hFLGVBQWUsR0FBRyxzRkFHdkI7d0JBQ0QscUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsRUFBQyxPQUFPLEVBQUcsT0FBTyxHQUFFLENBQUM7aUNBQ3hELEtBQUssQ0FBQyxhQUFHO2dDQUNOLEdBQUcsQ0FBQyxlQUFlLENBQUMsb0NBQWMsZUFBZSxNQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0NBQzVELE9BQU8sS0FBSyxDQUFDOzRCQUNqQixDQUFDLENBQUM7O3dCQUpGLFNBSUUsQ0FBQzt3QkFDSCxzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDZjtJQUdhLGtDQUF3QixHQUF0QyxVQUF1QyxDQUFhO1FBQ2hELE9BQU87WUFDSCxFQUFFLEVBQU8sQ0FBQyxDQUFDLEVBQUU7WUFDYixPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU87WUFDbEIsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPO1lBQ2xCLElBQUksRUFBSyxDQUFDLENBQUMsSUFBSTtZQUNmLE1BQU0sRUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDN0IsSUFBSSxFQUFLLENBQUMsQ0FBQyxJQUFJO1lBQzNCLDJDQUEyQztTQUNsQyxDQUFDO0lBQ04sQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQztBQTVOWSw4QkFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnRCLDZCQUE2QjtBQUM3QjtJQUtJLHNCQUFtQixNQUF1QjtRQUF2Qix1Q0FBdUI7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBUSxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLHNDQUFlLEdBQXRCLFVBQXVCLEdBQVc7UUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsT0FBTztJQUNYLENBQUM7SUFFTSxzQ0FBZSxHQUF0QixVQUF1QixHQUFXO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLE9BQU87SUFDWCxDQUFDO0lBRU0sMENBQW1CLEdBQTFCO1FBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQUUsT0FBTztRQUV4QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNkLElBQUksT0FBTyxHQUFHLDhCQUE4QixDQUFDO1lBQzdDLEtBQWtCLFVBQWdCLEVBQWhCLFNBQUksQ0FBQyxXQUFXLEVBQWhCLGNBQWdCLEVBQWhCLElBQWdCO2dCQUE3QixJQUFNLEdBQUc7Z0JBQXNCLE9BQU8sSUFBSSxVQUFHLEdBQUcsWUFBUyxDQUFDO2FBQUE7WUFDL0QsT0FBTyxJQUFLLFFBQVEsQ0FBQztZQUNyQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkIsQ0FBQzthQUFNLENBQUM7WUFDSixLQUFrQixVQUFnQixFQUFoQixTQUFJLENBQUMsV0FBVyxFQUFoQixjQUFnQixFQUFoQixJQUFnQjtnQkFBN0IsSUFBTSxHQUFHO2dCQUFzQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQUE7UUFDekQsQ0FBQztRQUNELE9BQU87SUFDWCxDQUFDO0lBRU0sMENBQW1CLEdBQTFCO1FBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQUUsT0FBTztRQUV4QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNkLElBQUksT0FBTyxHQUFHLDZCQUE2QixDQUFDO1lBQzVDLEtBQWtCLFVBQWdCLEVBQWhCLFNBQUksQ0FBQyxXQUFXLEVBQWhCLGNBQWdCLEVBQWhCLElBQWdCO2dCQUE3QixJQUFNLEdBQUc7Z0JBQXNCLE9BQU8sSUFBSSxVQUFHLEdBQUcsWUFBUyxDQUFDO2FBQUE7WUFDL0QsT0FBTyxJQUFLLFFBQVEsQ0FBQztZQUNyQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkIsQ0FBQzthQUFNLENBQUM7WUFDSixPQUFPLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7WUFDdEQsS0FBa0IsVUFBZ0IsRUFBaEIsU0FBSSxDQUFDLFdBQVcsRUFBaEIsY0FBZ0IsRUFBaEIsSUFBZ0I7Z0JBQTdCLElBQU0sR0FBRztnQkFBc0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFPLEdBQUcsQ0FBRSxDQUFDLENBQUM7YUFBQTtZQUNoRSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLENBQUM7UUFDRCxPQUFPO0lBQ1gsQ0FBQztJQUdNLGdDQUFTLEdBQWhCLFVBQWlCLENBQU0sRUFBRSxNQUFjOztRQUNuQyxJQUFNLEtBQUssR0FBRyxPQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsT0FBTyxFQUFFLG1DQUFPLE9BQU8sQ0FBQztRQUN6QyxJQUFNLEtBQUssR0FBRyxPQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsVUFBVSxFQUFFLG1DQUFJLEtBQUssQ0FBQztRQUN2QyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQVMsS0FBSyxDQUFFLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFZLEtBQUssQ0FBRSxDQUFDLENBQUM7UUFDMUMsT0FBTztJQUNYLENBQUM7SUFHTSx1Q0FBZ0IsR0FBdkI7UUFDSSx5QkFBVyxJQUFJLENBQUMsV0FBVyxRQUFFO0lBQ2pDLENBQUM7SUFDTSx1Q0FBZ0IsR0FBdkI7UUFDSSx5QkFBVyxJQUFJLENBQUMsV0FBVyxRQUFFO0lBQ2pDLENBQUM7SUFFTSw2QkFBTSxHQUFiO1FBQ0ksT0FBUSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQztBQXhFWSxvQ0FBWTs7Ozs7Ozs7Ozs7OztBQ0F6Qix3QkFLQztBQUdELDBCQU9DO0FBR0Qsd0JBR0M7QUFHRCxzQkFHQztBQUlELHdCQUdDO0FBR0Qsb0JBRUM7QUFFRCxvQkFFQztBQTVDRCxTQUFTO0FBQ1QsU0FBZ0IsTUFBTSxDQUFDLE1BQWM7SUFDakMsYUFBYTtJQUNiLElBQU0sT0FBTyxHQUFHLDZCQUE2QixDQUFDO0lBQzlDLFNBQVM7SUFDVCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQUVELFNBQVM7QUFDVCxTQUFnQixPQUFPLENBQUMsTUFBYztJQUNsQyxhQUFhO0lBQ2pCLGlEQUFpRDtJQUM3QyxJQUFNLE9BQU8sR0FBRyxXQUFXLENBQUM7SUFDNUIsSUFBTSxNQUFNLEdBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0MsU0FBUztJQUNULE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzFCLENBQUM7QUFFRCxPQUFPO0FBQ1AsU0FBZ0IsTUFBTSxDQUFDLEdBQVcsRUFBRSxLQUFhO0lBQzdDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsVUFBVSxDQUFDO0FBQ3JELENBQUM7QUFFRCxPQUFPO0FBQ1AsU0FBZ0IsS0FBSyxDQUFDLEdBQVcsRUFBRSxLQUFhO0lBQzVDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsVUFBVSxDQUFDO0FBQ3BELENBQUM7QUFHRCxPQUFPO0FBQ1AsU0FBZ0IsTUFBTSxDQUFDLEdBQVcsRUFBRSxLQUFhO0lBQzdDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsVUFBVSxDQUFDO0FBQ3JELENBQUM7QUFHRCxTQUFnQixJQUFJLENBQUMsQ0FBVztJQUM1QixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxFQUFVLEVBQUUsRUFBVSxJQUFLLFdBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUM7QUFDbEUsQ0FBQztBQUVELFNBQWdCLElBQUksQ0FBQyxDQUFXO0lBQzVCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEVBQVUsRUFBRSxFQUFVLElBQUssV0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FBQztBQUNsRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDRCx3QkFHQztBQUdELDBCQUVDO0FBR0Qsd0JBRUM7QUFVRCwwQkFFQztBQU1ELHdCQVVDO0FBNkJELDhCQU1DO0FBTUQsa0NBYUM7QUFHRCxzQ0FTQztBQUdELGtDQUlDO0FBQ0QsNENBSUM7QUFDRCw0Q0FJQztBQUNELDhDQUdDO0FBQ0QsOENBR0M7QUFDRCwwQ0FHQztBQUNELG9DQUtDO0FBckpELG1GQUE4QztBQUk5QyxJQUFNLEtBQUssR0FBYSxjQUFLLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDO0FBRWxELFdBQVc7QUFDWCxTQUFnQixNQUFNLENBQUMsR0FBZSxFQUFFLEdBQWUsRUFBRSxJQUFxQjtJQUF2RCw2QkFBZTtJQUFFLDZCQUFlO0lBQUUsbUNBQXFCO0lBQzFFLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQzFELE9BQU8sbUJBQU0sRUFBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0IsQ0FBQztBQUVELGdCQUFnQjtBQUNoQixTQUFnQixPQUFPLENBQUMsR0FBZSxFQUFFLEdBQWUsRUFBRSxJQUFxQjtJQUF2RCw2QkFBZTtJQUFFLDZCQUFlO0lBQUUsbUNBQXFCO0lBQzNFLE9BQU8sTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsY0FBSyxPQUFPLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFDLENBQUM7QUFDNUQsQ0FBQztBQUVELGdCQUFnQjtBQUNoQixTQUFnQixNQUFNLENBQUMsR0FBZSxFQUFFLEdBQWUsRUFBRSxJQUFxQjtJQUF2RCw2QkFBZTtJQUFFLDZCQUFlO0lBQUUsbUNBQXFCO0lBQzFFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ3JFLENBQUM7QUFDRCxTQUFTLGVBQWUsQ0FBQyxJQUFxQjtJQUFyQixtQ0FBcUI7SUFDMUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDNUIsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQUVELG1CQUFtQjtBQUNuQixTQUFnQixPQUFPLENBQUMsR0FBZSxFQUFFLEdBQWUsRUFBRSxFQUFnQixFQUFFLElBQXFCO0lBQXpFLDZCQUFlO0lBQUUsNkJBQWU7SUFBRSw2QkFBZ0I7SUFBRSxtQ0FBcUI7SUFDN0YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFFRCxtQkFBbUI7QUFDbkIsMERBQTBEO0FBQzFELDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsU0FBZ0IsTUFBTSxDQUFDLEdBQWlCLEVBQUUsR0FBaUIsRUFBRSxFQUFnQixFQUFFLElBQXFCO0lBQTdFLCtCQUFpQjtJQUFFLCtCQUFpQjtJQUFFLDZCQUFnQjtJQUFFLG1DQUFxQjtJQUNoRyxJQUFNLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDaEIsSUFBTSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDakIsSUFBTSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyx3QkFBd0I7SUFFL0QsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQyxHQUFHLGlCQUFJLEVBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQixDQUFDLEdBQUcsaUJBQUksRUFBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLE9BQU8sQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQUNELFNBQVMsSUFBSSxDQUFDLENBQVMsRUFBRSxDQUFTO0lBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN2RSxDQUFDO0FBQ0QsU0FBUyxJQUFJLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLENBQUM7QUFHRCxhQUFhO0FBQ2I7SUFJSSxzQkFBbUIsSUFBWTtRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBQ00sNEJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsV0FBVztJQUNKLDZCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ2hELE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQztBQWhCWSxvQ0FBWTtBQWtCekIsaUJBQWlCO0FBQ2pCLFNBQWdCLFNBQVMsQ0FBQyxHQUFnQixFQUFFLElBQXFCO0lBQXZDLDhCQUFnQjtJQUFFLG1DQUFxQjtJQUM3RCxJQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO0lBQzFELElBQU0sT0FBTyxHQUFHLGlCQUFJLEVBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTVDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEUsT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3JCLENBQUM7QUFNRCxTQUFnQixXQUFXLENBQUMsS0FBcUIsRUFBRSxJQUFxQjtJQUFyQixtQ0FBcUI7SUFDcEUsSUFBSSxHQUFHLEdBQVUsQ0FBQyxDQUFDO0lBQ25CLEtBQWlCLFVBQUssRUFBTCxlQUFLLEVBQUwsbUJBQUssRUFBTCxJQUFLO1FBQWpCLElBQUksSUFBSTtRQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQUE7SUFFMUMsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1osS0FBbUIsVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUssRUFBRSxDQUFDO1FBQXRCLElBQU0sSUFBSTtRQUNYLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2xCLElBQUksTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNMLENBQUM7SUFDRCxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDO0FBRUQsV0FBVztBQUNYLFNBQWdCLGFBQWEsQ0FBSSxLQUFVLEVBQUUsSUFBcUI7O0lBQXJCLG1DQUFxQjtJQUM5RCxJQUFJLGFBQWEscUJBQU8sS0FBSyxPQUFDLENBQUMsQ0FBQyxxQkFBcUI7SUFDckQsS0FBSyxJQUFJLENBQUMsR0FBRyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDaEQsYUFBYTtRQUNiLElBQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdCLFVBQVU7UUFDVixLQUF1QyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBMUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxVQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBeUM7SUFDaEYsQ0FBQztJQUNELE9BQU8sYUFBYSxDQUFDLENBQUMsZ0JBQWdCO0FBQzFDLENBQUM7QUFFRCxhQUFhO0FBQ2IsU0FBZ0IsV0FBVyxDQUFDLE1BQWM7SUFDdEMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2IsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUU7UUFBRSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDckQsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBQ0QsU0FBZ0IsZ0JBQWdCLENBQUMsTUFBYztJQUMzQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDYixLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRTtRQUFFLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO0lBQzFELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQUNELFNBQWdCLGdCQUFnQixDQUFDLE1BQWM7SUFDM0MsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2IsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUU7UUFBRSxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztJQUMxRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFDRCxTQUFnQixpQkFBaUI7SUFDN0IsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7SUFDeEIsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBQ0QsU0FBZ0IsaUJBQWlCO0lBQzdCLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO0lBQ3hCLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUNELFNBQWdCLGVBQWU7SUFDM0IsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDdkIsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBQ0QsU0FBZ0IsWUFBWTtJQUN4QixJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztJQUN4QixJQUFJLEdBQUcsR0FBRyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqRCxJQUFJLEdBQUcsR0FBRyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBQyxHQUFHLEdBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEQsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBQyxHQUFHLEdBQUMsRUFBRSxDQUFDLENBQUM7QUFDMUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JKRCwrRUFBbUM7QUFDbkMsMkZBQXVDO0FBQ3ZDLHNFQUFnQztBQUVoQyxJQUFJLFdBQVcsR0FBRyxtQkFBTyxDQUFDLDZDQUFnQixDQUFDLENBQUM7QUFDNUMsSUFBSSxXQUFXLEdBQUcsbUJBQU8sQ0FBQyw2Q0FBZ0IsQ0FBQyxDQUFDO0FBRTVDLElBQUksWUFBWSxHQUFHLG1CQUFPLENBQUMsb0NBQWUsQ0FBQyxDQUFDO0FBQzVDLElBQUksTUFBTSxHQUFHLG1CQUFPLENBQUMsc0JBQVEsQ0FBQyxDQUFDO0FBRS9CLElBQU0sR0FBRyxHQUFHLHFCQUFPLEdBQUUsQ0FBQztBQUV0QixvQkFBb0I7QUFDcEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNoRCxHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUU5QixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztBQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsTUFBTSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUV4RCw2QkFBNkI7QUFDN0Isc0RBQXNEO0FBQ3RELEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRWhELElBQU0sVUFBVSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDcEMsVUFBVSxDQUFDLEdBQUcsQ0FDWixHQUFHLEVBQ0gsVUFBTyxHQUFvQixFQUFFLEdBQXFCOztRQUNoRCxHQUFHLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7OztLQUMzQyxDQUNGLENBQUM7QUFDRixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBTyxVQUFVLENBQUMsQ0FBQztBQUM5QixHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUMvQixHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUUvQix5Q0FBeUM7QUFDekMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFTLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtJQUN0RixJQUFJLENBQUMseUJBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLENBQUMsQ0FBQyxDQUFDO0FBRUgsZ0JBQWdCO0FBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBUyxHQUFRLEVBQUUsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO0lBQ2hHLGtEQUFrRDtJQUNsRCxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ2pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFbkUsd0JBQXdCO0lBQ3hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQztJQUM5QixHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RCLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZELEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBcUIsSUFBSSxDQUFFLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUMsQ0FBQztBQUVIOztHQUVHO0FBRUgsU0FBUyxhQUFhLENBQUMsR0FBUTtJQUM3QixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRTdCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDaEIsYUFBYTtRQUNiLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2QsY0FBYztRQUNkLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVELHFCQUFlLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzdCbkIsMEJBTUM7QUFHRCwwQkFJQztBQTVERCxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDdEIsY0FBYztBQUVkLHVCQUF1QjtBQUN2QiwwR0FBc0Q7QUFFdEQsY0FBYztBQUNkLG9HQUFvRDtBQUVwRCxhQUFhO0FBQ2IsZ0hBQXdEO0FBRXhELFdBQVc7QUFDWCwyRkFBaUQ7QUFFakQsYUFBYTtBQUNiLHdGQUFnRDtBQUVoRCxZQUFZO0FBQ1osd0ZBQWlEO0FBRWpELHVCQUF1QjtBQUN2QixvR0FBNEQ7QUF3QjVELHVDQUF1QztBQUN2QyxTQUFnQixPQUFPLENBQUMsR0FBc0I7SUFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsSUFBTyxJQUFJLEdBQUcsUUFBUSxFQUFFLENBQUM7SUFDekIsSUFBTyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLElBQU8sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkMsT0FBTyxXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFFRCw4QkFBOEI7QUFDOUIsU0FBZ0IsT0FBTyxDQUFDLEdBQXNCO0lBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLElBQU8sSUFBSSxHQUFHLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLE9BQU8sV0FBVyxDQUFDLENBQUMsRUFBRyxJQUFJLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBR0QsOENBQThDO0FBQzlDLFlBQVk7QUFDWiw4Q0FBOEM7QUFFOUMsU0FBUyxVQUFVLENBQUMsSUFBWSxFQUFFLElBQWM7SUFDNUMsSUFBTSxTQUFTLEdBQWEsRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztJQUNuRCxLQUFrQixVQUFJLEVBQUosYUFBSSxFQUFKLGtCQUFJLEVBQUosSUFBSTtRQUFqQixJQUFNLEdBQUc7UUFBVSxTQUFTLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQztLQUFBO0lBQzlDLE9BQU8sU0FBUyxDQUFDO0FBQ3JCLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxJQUFZLEVBQUUsSUFBZ0I7SUFDL0MsSUFBTSxTQUFTLEdBQWEsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztJQUVoRCxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO1FBQ2hDLE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDO1NBQU0sQ0FBQztRQUNKLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLFNBQVMsQ0FBQyxJQUFJLEdBQUksV0FBVyxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxJQUFJLEdBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsSUFBWSxFQUFFLElBQWM7SUFDN0MsSUFBTSxTQUFTLEdBQWEsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztJQUVoRCxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO1FBQ2hDLE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDO1NBQU0sQ0FBQztRQUNKLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLFNBQVMsQ0FBQyxJQUFJLEdBQUksV0FBVyxDQUFDO1FBRTlCLElBQU0sVUFBVSxHQUFnQixFQUFFLENBQUM7UUFDbkMsS0FBa0IsVUFBSSxFQUFKLGFBQUksRUFBSixrQkFBSSxFQUFKLElBQUksRUFBRSxDQUFDO1lBQXJCLElBQU0sSUFBSTtZQUNWLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUNELFNBQVMsQ0FBQyxJQUFJLEdBQUksRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLENBQUM7UUFDckMsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLFFBQVE7SUFDYixJQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7SUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxlQUFNLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFFRCxTQUFTLFFBQVEsQ0FBQyxJQUFhLEVBQUUsSUFBWTtJQUN6QyxPQUFPLElBQUksdUJBQVUsQ0FBQztRQUNsQixTQUFTLEVBQUUsRUFBRSxDQUFDLEdBQUc7UUFDakIsU0FBUyxFQUFFLEdBQUc7UUFDZCxTQUFTLEVBQUUsR0FBRztRQUNkLFNBQVMsRUFBRSxHQUFHO1FBRWQsUUFBUSxFQUFJLEVBQUU7UUFDZCxRQUFRLEVBQUksRUFBRTtRQUNkLFFBQVEsRUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzQixRQUFRLEVBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFbkMsS0FBSztRQUNHLEtBQUssRUFBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFO0tBQzFDLENBQUMsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLFFBQVE7SUFDYixJQUFNLElBQUksR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztJQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBQyxDQUFDLENBQUM7SUFFcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLGVBQU0sRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLElBQWE7SUFDM0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztJQUM5QixLQUFLO0lBQ0QsSUFBTSxHQUFHLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7SUFDakMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUNQLElBQUksRUFBSSxNQUFNO1FBQ2QsSUFBSSxFQUFLLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDeEIsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDbkIsT0FBTyxFQUFFLElBQUksdUJBQVUsQ0FBQztZQUNwQixHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsQ0FBQztTQUNULENBQUM7UUFDRixRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtLQUN2QixDQUFDLENBQUM7SUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7SUFDcEMsS0FBSztJQUNELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFbEIsZ0VBQWdFO0lBQ2hFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxlQUFNLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFHRCxpRkFBaUY7QUFDakYsaUZBQWlGO0FBQ2pGLDJFQUEyRTtBQUMzRSxpRkFBaUY7QUFDakYsaUZBQWlGO0FBRWpGLElBQUksRUFBZSxDQUFDO0FBQ3BCLElBQUksRUFBcUIsQ0FBQztBQUUxQixTQUFTLElBQUksQ0FBQyxHQUFzQjtJQUNoQyxFQUFFLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQUN2QixFQUFFLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxPQUFPO0FBQ1gsQ0FBQztBQUVELDhDQUE4QztBQUM5QyxLQUFLO0FBQ0wsZUFBZTtBQUNmLEtBQUs7QUFDTCw4Q0FBOEM7QUFFOUMsVUFBVTtBQUNWO0lBZUk7UUFaTyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixrQkFBYSxHQUFPLENBQUMsQ0FBQztRQUN0QixxQkFBZ0IsR0FBSSxDQUFDLENBQUM7UUFDdEIsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBRXRCLGVBQVUsR0FBYyxFQUFFLENBQUM7UUFFM0IsZUFBVSxHQUFjLEVBQUUsQ0FBQztRQUUzQixXQUFNLEdBQWtCLEVBQUUsQ0FBQztRQUc5QixJQUFJLENBQUMsR0FBRyxHQUFJLElBQUksMkJBQVksQ0FBRSxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQztBQUVELFlBQVk7QUFDWjtJQU1JLDJCQUFtQixHQUFnQzs7UUFKNUMsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixRQUFHLEdBQVksQ0FBQyxDQUFDO1FBQ2pCLGNBQVMsR0FBcUIsRUFBRSxDQUFDO1FBR3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLElBQUksbUNBQUksU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLElBQUksTUFBSyxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLEdBQUcsR0FBSSxJQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsR0FBRyxNQUFNLFNBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxTQUFTLG1DQUFJLFNBQVMsQ0FBQztRQUNyRCxzRkFBc0Y7SUFDbEYsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQztBQUVEOzs7RUFHRTs7Ozs7Ozs7Ozs7O0FDMU9GLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JkLG9CQVlDO0FBb0NELG9CQWdCQztBQXFDRCxvQkFrQkM7QUFwSkQsdUJBQXVCO0FBQ3ZCLDBHQUFtRDtBQUVuRCxjQUFjO0FBQ2QsNkZBQThDO0FBSTlDLG9HQUFpRTtBQUNqRSw2R0FBb0U7QUFHcEUsSUFBSyxNQUFrQixDQUFDO0FBaUJ4QixTQUFzQixJQUFJLENBQUMsR0FBc0I7Ozs7O3dCQUM3QyxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDOztvQkFBZixTQUFlLENBQUM7b0JBR0cscUJBQU0sNkJBQWEsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQzs7b0JBQXhFLFVBQVUsR0FBRyxTQUEyRDtvQkFDOUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7d0JBQ2xCLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzlCLENBQUM7eUJBQU0sQ0FBQzt3QkFDSixPQUFPLEdBQUcsYUFBYSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztvQkFDM0MsQ0FBQztvQkFDRCxJQUFJLEVBQUUsQ0FBQztvQkFDUCxzQkFBTyxPQUFPLEVBQUM7Ozs7Q0FDbEI7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQStCRTtBQUdGLFNBQXNCLElBQUksQ0FBQyxHQUFzQjs7Ozs7d0JBQzdDLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUM7O29CQUFmLFNBQWUsQ0FBQztvQkFDVixHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztvQkFHbkIsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ2QsS0FBSyxVQUFVOzRCQUFPLEdBQUcsR0FBRyxHQUFHLENBQUM7NEJBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQzs0QkFBQyxNQUFNO3dCQUNyRCxLQUFLLGNBQWM7NEJBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQzs0QkFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDOzRCQUFDLE1BQU07d0JBQ3JELEtBQUssU0FBUzs0QkFBUSxHQUFHLEdBQUcsR0FBRyxDQUFDOzRCQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7NEJBQUMsTUFBTTt3QkFDckQsS0FBSyxhQUFhOzRCQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7NEJBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQzs0QkFBQyxNQUFNO3dCQUNyRCxLQUFLLGNBQWM7NEJBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7NEJBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzs0QkFBQyxNQUFNO3dCQUNyRCxPQUFPLENBQUMsQ0FBYyxzQkFBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUM7b0JBQ2xELENBQUM7b0JBQ2UscUJBQU0sS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDOztvQkFBcEMsT0FBTyxHQUFHLFNBQTBCO29CQUMxQyxJQUFJLEVBQUUsQ0FBQztvQkFDUCxzQkFBTyxPQUFPLEVBQUM7Ozs7Q0FDbEI7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQStCRTtBQUdGLFNBQXNCLElBQUksQ0FBQyxHQUFzQjs7Ozs7O3dCQUM3QyxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDOztvQkFBZixTQUFlLENBQUM7b0JBQ1YsR0FBRyxHQUFJLGNBQUUsQ0FBQyxJQUFJLDBDQUFFLFNBQVMsbUNBQUUsQ0FBQyxDQUFDLENBQUM7b0JBSXBDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUNkLEtBQUssVUFBVTs0QkFBTyxHQUFHLEdBQUcsR0FBRyxDQUFDOzRCQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7NEJBQUMsS0FBSyxHQUFFLHVCQUF1QixDQUFDOzRCQUFFLE1BQU07d0JBQ3RGLEtBQUssY0FBYzs0QkFBRyxHQUFHLEdBQUcsR0FBRyxDQUFDOzRCQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7NEJBQUMsS0FBSyxHQUFFLHFCQUFxQixDQUFDOzRCQUFJLE1BQU07d0JBQ3RGLEtBQUssU0FBUzs0QkFBUSxHQUFHLEdBQUcsR0FBRyxDQUFDOzRCQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7NEJBQUMsS0FBSyxHQUFFLG9CQUFvQixDQUFDOzRCQUFLLE1BQU07d0JBQ3RGLEtBQUssYUFBYTs0QkFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDOzRCQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7NEJBQUMsS0FBSyxHQUFFLHdCQUF3QixDQUFDOzRCQUFDLE1BQU07d0JBQ3RGLEtBQUssY0FBYzs0QkFBRyxHQUFHLEdBQUcsY0FBRSxDQUFDLElBQUksMENBQUUsT0FBTyxtQ0FBRSxFQUFFLENBQUM7NEJBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzs0QkFBQyxLQUFLLEdBQUcsY0FBRSxDQUFDLElBQUksMENBQUUsS0FBSyxtQ0FBRSxLQUFLLENBQUM7NEJBQUUsTUFBTTt3QkFDbkcsT0FBTyxDQUFDLENBQWMsc0JBQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDO29CQUNsRCxDQUFDO29CQUVlLHFCQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUM7O29CQUEzQyxPQUFPLEdBQUcsU0FBaUM7b0JBQ2pELElBQUksRUFBRSxDQUFDO29CQUNQLHNCQUFPLE9BQU8sRUFBQzs7OztDQUNsQjtBQUtELDhDQUE4QztBQUM5QyxZQUFZO0FBQ1osOENBQThDO0FBRTlDLFNBQWUsS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFXLEVBQUUsS0FBYTs7Ozs7d0JBQ3hELHFCQUFNLFFBQVEsQ0FBQyxNQUFNLENBQUM7O29CQUF0QixTQUFzQixDQUFDO29CQUdQLHFCQUFNLDZCQUFhLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQzs7b0JBQTFFLE9BQU8sR0FBRyxTQUFnRTt5QkFDNUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBZix3QkFBZTtvQkFDZixxQkFBTSxXQUFXLENBQUMsTUFBTSxDQUFDOztvQkFBekIsU0FBeUIsQ0FBQztvQkFDMUIsc0JBQU8sYUFBYSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBQzt3QkFJdkIscUJBQU0sNkJBQWEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDOztvQkFBdkUsV0FBVyxHQUFHLFNBQXlEO3lCQUN6RSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFmLHdCQUFlO29CQUNmLHFCQUFNLFdBQVcsQ0FBQyxNQUFNLENBQUM7O29CQUF6QixTQUF5QixDQUFDO29CQUMxQixzQkFBTyxhQUFhLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUFDO3dCQUczQyxxQkFBTSxTQUFTLENBQUMsTUFBTSxDQUFDOztvQkFBdkIsU0FBdUIsQ0FBQztvQkFDeEIsc0JBQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsRUFBQzs7OztDQUV4QztBQUVELFNBQWUsS0FBSyxDQUFDLEdBQVcsRUFBRSxPQUFlLEVBQUUsS0FBYSxFQUFFLEtBQWE7Ozs7OztvQkFDM0UsSUFBSSxFQUFFLENBQUMsSUFBSSxLQUFLLFNBQVM7d0JBQUUsc0JBQU8sYUFBYSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBQztvQkFDbEUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO29CQUN4QixFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBSyxPQUFPLENBQUM7b0JBQzVCLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFPLEtBQUssQ0FBQztvQkFDOUIsOERBQThEO29CQUMxRCxxQkFBTSxRQUFRLENBQUMsTUFBTSxDQUFDOztvQkFEMUIsOERBQThEO29CQUMxRCxTQUFzQixDQUFDO29CQUdQLHFCQUFNLDZCQUFhLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQzs7b0JBQTlFLE9BQU8sR0FBRyxTQUFvRTt5QkFDaEYsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBZix3QkFBZTtvQkFDZixxQkFBTSxXQUFXLENBQUMsTUFBTSxDQUFDOztvQkFBekIsU0FBeUIsQ0FBQztvQkFDMUIsc0JBQU8sYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFDOzt5QkFJMUMsUUFBTyxHQUFHLENBQUMsR0FBWCx3QkFBVztvQkFDSSxxQkFBTSw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7O29CQUFoRSxNQUFNLEdBQUcsU0FBdUQ7eUJBQ2xFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQWYsd0JBQWU7b0JBQ2YscUJBQU0sV0FBVyxDQUFDLE1BQU0sQ0FBQzs7b0JBQXpCLFNBQXlCLENBQUM7b0JBQzFCLHNCQUFPLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBQzt3QkFJbkMscUJBQU0sNkJBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQzs7b0JBQWhFLE1BQU0sR0FBRyxTQUF1RDt5QkFDbEUsT0FBTSxLQUFLLEtBQUssR0FBaEIseUJBQWdCO29CQUNoQixxQkFBTSxXQUFXLENBQUMsTUFBTSxDQUFDOztvQkFBekIsU0FBeUIsQ0FBQztvQkFDMUIsc0JBQU8sYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFDO3lCQUc5QyxxQkFBTSxTQUFTLENBQUMsTUFBTSxDQUFDOztvQkFBdkIsU0FBdUIsQ0FBQztvQkFDeEIsc0JBQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUM7Ozs7Q0FDcEM7QUFFRCxTQUFTLGFBQWEsQ0FBQyxJQUFZLEVBQUUsSUFBMEI7SUFDM0QsSUFBSSxPQUFpQixDQUFDO0lBRXRCLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7UUFDaEMsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztTQUFNLENBQUM7UUFDSixPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUM1QixJQUFJLElBQUksS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUNyQixPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqQyxDQUFDO2FBQU0sQ0FBQztZQUNKLE9BQU8sQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQzdCLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxPQUFPLENBQUM7QUFDbkIsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLElBQVksRUFBRSxTQUF1QjtJQUN4RCxJQUFJLE9BQWlCLENBQUM7SUFFdEIsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztRQUNoQyxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO1NBQU0sQ0FBQztRQUNKLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLHdDQUF3QztRQUNoQyxJQUFNLFNBQVMsR0FBb0IsRUFBRSxDQUFDO1FBQ3RDLEtBQXVCLFVBQVMsRUFBVCx1QkFBUyxFQUFULHVCQUFTLEVBQVQsSUFBUztZQUEzQixJQUFNLFFBQVE7WUFBZSxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUE7UUFDcEUsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDbEMsQ0FBQztJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUM7QUFJRCxTQUFTLFVBQVUsQ0FBQyxJQUFZO0lBQzVCLElBQU0sU0FBUyxHQUFhLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUM7SUFDbkQsS0FBa0IsVUFBeUIsRUFBekIsT0FBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUF6QixjQUF5QixFQUF6QixJQUF5QjtRQUF0QyxJQUFNLEdBQUc7UUFBK0IsU0FBUyxDQUFDLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDO0tBQUE7SUFDMUUsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQztBQUdEO0lBR0k7UUFGTyxVQUFLLEdBQWEsQ0FBQyxDQUFDO1FBQ3BCLFNBQUksR0FBYyxXQUFXLENBQUM7SUFDZixDQUFDO0lBQzNCLGtCQUFDO0FBQUQsQ0FBQztBQUVEO0lBR0kscUJBQW1CLEtBQWEsRUFBRSxJQUFZO1FBRnZDLFVBQUssR0FBYSxJQUFJLENBQUM7UUFDdkIsU0FBSSxHQUFjLE9BQU8sQ0FBQztRQUU3QixJQUFJLENBQUMsS0FBSyxHQUFJLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFLLElBQUksQ0FBQztJQUN2QixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDO0FBRUQsaUZBQWlGO0FBQ2pGLGlGQUFpRjtBQUNqRiwyRUFBMkU7QUFDM0UsaUZBQWlGO0FBQ2pGLGlGQUFpRjtBQUVqRixJQUFJLEVBQWUsQ0FBQztBQUNwQixJQUFJLEVBQXFCLENBQUM7QUFFMUIsU0FBZSxJQUFJLENBQUMsR0FBc0I7Ozs7O29CQUN0QyxFQUFFLEdBQU8sSUFBSSxXQUFXLEVBQUUsQ0FBQztvQkFDM0IsRUFBRSxHQUFPLElBQUksaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzNCLHFCQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFOztvQkFBekMsTUFBTSxHQUFHLFNBQWdDLENBQUM7b0JBRTFDLHNCQUFPOzs7O0NBQ1Y7QUFDRCxTQUFTLElBQUk7SUFDVCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2QsQ0FBQztBQUVELDhDQUE4QztBQUM5QyxLQUFLO0FBQ0wsZUFBZTtBQUNmLEtBQUs7QUFDTCw4Q0FBOEM7QUFFMUMsVUFBVTtBQUNWO0lBV0k7UUFSTyxZQUFPLEdBQWEsS0FBSyxDQUFDO1FBQzFCLFlBQU8sR0FBYyxJQUFJLENBQUM7UUFDMUIsWUFBTyxHQUFhLFFBQVEsQ0FBQztRQUM3QixZQUFPLEdBQWEsV0FBVyxDQUFDO1FBQ2hDLFlBQU8sR0FBYSxVQUFVLENBQUM7UUFLbEMsSUFBSSxDQUFDLEdBQUcsR0FBTyxJQUFJLDJCQUFZLENBQUUsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXZELElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQUssQ0FBQyxVQUFVLENBQUM7WUFDNUIsSUFBSSxFQUFPLElBQUksQ0FBQyxPQUFPO1lBQ3ZCLElBQUksRUFBTyxJQUFJLENBQUMsT0FBTztZQUN2QixJQUFJLEVBQU8sSUFBSSxDQUFDLE9BQU87WUFDdkIsUUFBUSxFQUFHLElBQUksQ0FBQyxPQUFPO1lBQ3ZCLFFBQVEsRUFBRyxJQUFJLENBQUMsT0FBTztZQUN2QixlQUFlLEVBQU0sRUFBRSxFQUFFLFlBQVk7WUFDckMsa0JBQWtCLEVBQUUsSUFBSTtZQUN4QixpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLFdBQVcsRUFBRSxJQUFJO1NBQ3BCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTSwwQkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDO0FBY08sWUFBWTtBQUNwQjtJQWNJLDJCQUFtQixHQUFnQzs7UUFiNUMsU0FBSSxHQUF5QixTQUFTLENBQUM7UUFFdkMsY0FBUyxHQUFvQixFQUFFLENBQUM7UUFDaEMsU0FBSSxHQUFnQyxTQUFTLENBQUM7UUFFOUMsUUFBRyxHQUFvQixDQUFDLENBQUM7UUFDekIsUUFBRyxHQUFtQixDQUFDLENBQUMsQ0FBQztRQUN6QixZQUFPLEdBQWUsQ0FBQyxDQUFDLENBQUM7UUFDekIsZUFBVSxHQUFZLEVBQUUsQ0FBQztRQUN6QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixlQUFVLEdBQVksRUFBRSxDQUFDO1FBQ3pCLGNBQVMsR0FBYSxFQUFFO1FBRzNCLElBQUksR0FBRyxLQUFLLFNBQVM7WUFBRSxPQUFPO1FBRTlCLElBQUksQ0FBQyxJQUFJLEdBQVUsU0FBRyxDQUFDLElBQUksbUNBQUksSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QyxJQUFJLENBQUMsR0FBRyxHQUFXLFNBQUcsQ0FBQyxHQUFHLG1DQUFLLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDeEMsSUFBSSxDQUFDLEdBQUcsR0FBVyxTQUFHLENBQUMsR0FBRyxtQ0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQU8sWUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsbUNBQVMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1RCxJQUFJLENBQUMsVUFBVSxHQUFJLFNBQUcsQ0FBQyxVQUFVLG1DQUFjLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDL0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFHLENBQUMsV0FBVyxtQ0FBYSxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxVQUFVLEdBQUksU0FBRyxDQUFDLFVBQVUsbUNBQWMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMvRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssU0FBUztZQUFLLElBQUksQ0FBQyxJQUFJLEdBQU0sSUFBSSx1QkFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQztBQUVMLCtDQUErQztBQUMvQyxlQUFlO0FBQ2Ysa0RBQWtEO0FBRzlDLFNBQWUsUUFBUSxDQUFDLE1BQWtCOzs7Ozs7O29CQUVsQyxxQkFBTSxNQUFNLENBQUMsZ0JBQWdCLEVBQUU7O29CQUEvQixTQUErQixDQUFDOzs7O29CQUVoQyxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsR0FBRyxLQUFHLENBQUMsQ0FBQztvQkFDaEQsc0JBQU8sS0FBSyxFQUFDO3dCQUVqQixzQkFBTyxJQUFJLEVBQUM7Ozs7Q0FDZjtBQUVELFNBQWUsU0FBUyxDQUFDLE1BQWtCOzs7Ozs7O29CQUVuQyxxQkFBTSxNQUFNLENBQUMsTUFBTSxFQUFFOztvQkFBckIsU0FBcUIsQ0FBQzs7OztvQkFFdEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEdBQUcsS0FBRyxDQUFDLENBQUM7b0JBQ2hELHNCQUFPLEtBQUssRUFBQzt3QkFFakIsc0JBQU8sSUFBSSxFQUFDOzs7O0NBQ2Y7QUFFRCxTQUFlLFdBQVcsQ0FBQyxNQUFrQjs7Ozs7OztvQkFFckMscUJBQU0sTUFBTSxDQUFDLFFBQVEsRUFBRTs7b0JBQXZCLFNBQXVCLENBQUM7Ozs7b0JBRXhCLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLG1CQUFtQixHQUFHLEtBQUcsQ0FBQyxDQUFDO29CQUNsRCxzQkFBTyxLQUFLLEVBQUM7d0JBRWpCLHNCQUFPLElBQUksRUFBQzs7OztDQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1ZMLG9CQWNDO0FBckVELElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQztBQUN0QixjQUFjO0FBRWQsdUJBQXVCO0FBQ3ZCLDBHQUF1RDtBQUV2RCxjQUFjO0FBQ2QsNkZBQW1DO0FBcUJuQztJQU1JLHFCQUFtQixHQUFXLEVBQUUsSUFBWSxFQUFFLE1BQWM7UUFMckQsVUFBSyxHQUFhLENBQUMsQ0FBQztRQUNwQixTQUFJLEdBQWMsRUFBRSxDQUFDO1FBQ3JCLFFBQUcsR0FBZSxDQUFDLENBQUMsQ0FBQztRQUNyQixTQUFJLEdBQWMsRUFBRSxDQUFDO1FBQ3JCLFdBQU0sR0FBWSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLEdBQUcsR0FBTSxHQUFHLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBSyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQztBQUVEO0lBTUkscUJBQW1CLEtBQWEsRUFBRSxJQUFZO1FBTHZDLFVBQUssR0FBYSxJQUFJLENBQUM7UUFDdkIsU0FBSSxHQUFjLE9BQU8sQ0FBQztRQUMxQixRQUFHLEdBQWUsQ0FBQyxDQUFDLENBQUM7UUFDckIsU0FBSSxHQUFjLEVBQUUsQ0FBQztRQUNyQixXQUFNLEdBQVksRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxLQUFLLEdBQUksS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUssSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUM7QUFHRCx1Q0FBdUM7QUFDdkMsU0FBc0IsSUFBSSxDQUFDLEdBQXNCOzs7Ozs7b0JBRzdDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFFTixFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFmLHdCQUFlO29CQUNmLEVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztvQkFDN0IsVUFBVSxHQUFHLElBQUksV0FBVyxDQUFDLEdBQUcsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDOzt3QkFFM0MscUJBQU0sVUFBVSxFQUFFOztvQkFBL0IsVUFBVSxHQUFHLFNBQWtCLENBQUM7OztvQkFHcEMsSUFBSSxFQUFFLENBQUM7b0JBQ1Asc0JBQU8sVUFBVSxFQUFDOzs7O0NBQ3JCO0FBR0QsOENBQThDO0FBQzlDLFlBQVk7QUFDWiw4Q0FBOEM7QUFFOUMsU0FBZSxVQUFVOzs7WUFDckIsSUFBSSxFQUFFLENBQUMsR0FBRyxLQUFLLFNBQVM7Z0JBQUUsc0JBQU8sSUFBSSxXQUFXLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxFQUFDO1lBRXZFLHNCQUFPLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBVTtvQkFDakMsSUFBSSxVQUFVLEtBQUssU0FBUyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzt3QkFDOUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO3dCQUM3QixPQUFPLElBQUksV0FBVyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztvQkFDOUMsQ0FBQztvQkFDRCxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQzt3QkFBRSxPQUFPLElBQUksV0FBVyxDQUFDLEdBQUcsRUFBRSwrQkFBd0IsRUFBRSxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUM7b0JBRXpGLE9BQU8sSUFBSSxXQUFXLENBQ2xCLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQ2hCLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ2xCLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQ3ZCLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQUc7b0JBQ1IsT0FBTyxJQUFJLFdBQVcsQ0FBQyxHQUFHLEVBQUUsYUFBYSxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUNyRCxDQUFDLENBQUMsRUFBQzs7O0NBQ047QUFVRCxTQUFlLFlBQVk7Ozs7OztvQkFDakIsR0FBRyxHQUFHLHFHQUdYLENBQUM7Ozs7b0JBR3VCLHFCQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFpQixHQUFHLEVBQUUsRUFBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBQyxDQUFDOztvQkFBdkUsVUFBVSxHQUFJLFVBQXlELElBQTdEO29CQUNqQixzQkFBTyxVQUFVLEVBQUM7OztvQkFFbEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsb0NBQW9DLEdBQUcsS0FBRyxDQUFDLENBQUM7b0JBQ25FLHNCQUFPLFNBQVMsRUFBQzs7Ozs7Q0FHeEI7QUFFRCxpRkFBaUY7QUFDakYsaUZBQWlGO0FBQ2pGLDJFQUEyRTtBQUMzRSxpRkFBaUY7QUFDakYsaUZBQWlGO0FBRWpGLElBQUksRUFBZSxDQUFDO0FBQ3BCLElBQUksRUFBcUIsQ0FBQztBQUUxQixTQUFTLElBQUksQ0FBQyxHQUFzQjtJQUNoQyxFQUFFLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQUN2QixFQUFFLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxPQUFPO0FBQ1gsQ0FBQztBQUNELFNBQVMsSUFBSTtJQUNULEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNkLENBQUM7QUFFRCw4Q0FBOEM7QUFDOUMsS0FBSztBQUNMLGVBQWU7QUFDZixLQUFLO0FBQ0wsOENBQThDO0FBRTlDLFVBQVU7QUFDVjtJQVdJO1FBUk8sWUFBTyxHQUFhLEtBQUssQ0FBQztRQUMxQixZQUFPLEdBQWMsSUFBSSxDQUFDO1FBQzFCLFlBQU8sR0FBYSxRQUFRLENBQUM7UUFDN0IsWUFBTyxHQUFhLFdBQVcsQ0FBQztRQUNoQyxZQUFPLEdBQWEsVUFBVSxDQUFDO1FBS2xDLElBQUksQ0FBQyxHQUFHLEdBQU8sSUFBSSwyQkFBWSxDQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV2RCxJQUFJLENBQUMsT0FBTyxHQUFHLGlCQUFLLENBQUMsVUFBVSxDQUFDO1lBQzVCLElBQUksRUFBTyxJQUFJLENBQUMsT0FBTztZQUN2QixJQUFJLEVBQU8sSUFBSSxDQUFDLE9BQU87WUFDdkIsSUFBSSxFQUFPLElBQUksQ0FBQyxPQUFPO1lBQ3ZCLFFBQVEsRUFBRyxJQUFJLENBQUMsT0FBTztZQUN2QixRQUFRLEVBQUcsSUFBSSxDQUFDLE9BQU87WUFDdkIsZUFBZSxFQUFNLEVBQUUsRUFBRSxZQUFZO1lBQ3JDLGtCQUFrQixFQUFFLElBQUk7WUFDeEIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixXQUFXLEVBQUUsSUFBSTtTQUNwQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00sMEJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQztBQUVELFlBQVk7QUFDWjtJQUlJLDJCQUFtQixHQUFnQzs7UUFGNUMsUUFBRyxHQUFZLENBQUMsQ0FBQyxDQUFDO1FBR3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLElBQUksbUNBQUksU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxHQUFHLEdBQUksSUFBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLEdBQUcsTUFBTSxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RixtRUFBbUU7SUFDL0QsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQztBQUVEOzs7RUFHRTs7Ozs7Ozs7Ozs7O0FDaE1GLGNBQWM7O0FBcURkLDBCQVNDO0FBR0QsMEJBV0M7QUFHRCwwQkFRQztBQXJGRCx1QkFBdUI7QUFDdkIsMEdBQXFEO0FBS3JELFdBQVc7QUFDWCxvR0FBK0Q7QUFFL0QsZ0JBQWdCO0FBQ2hCLGdIQUFrRTtBQUVsRSxjQUFjO0FBQ2Qsd0ZBQTBEO0FBQzFELG9HQUE4RCxDQUFDLGtCQUFrQjtBQUVqRixhQUFhO0FBQ2Isd0ZBQStDO0FBRS9DLFlBQVk7QUFDWix3RkFBK0M7QUFFL0MsdUJBQXVCO0FBQ3ZCLG9HQUE4RDtBQUU5RCxpRkFBaUY7QUFDakYsaUZBQWlGO0FBQ2pGLDZFQUE2RTtBQUM3RSxpRkFBaUY7QUFDakYsaUZBQWlGO0FBRWpGLElBQUksRUFBZSxDQUFDO0FBQ3BCLElBQUksRUFBcUIsQ0FBQztBQWtCMUIsa0NBQWtDO0FBQ2xDLFNBQWdCLE9BQU8sQ0FBQyxHQUFzQjtJQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFVixJQUFNLGVBQWUsR0FBb0IsRUFBRSxDQUFDO0lBQzVDLEtBQUssSUFBTSxNQUFJLElBQUksRUFBRSxDQUFDLFFBQVE7UUFBRSxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNqRixPQUFPLFVBQVUsQ0FDYixDQUFDLEVBQ0QsRUFBQyxRQUFRLEVBQUUsZUFBZSxFQUFDLENBQzlCLENBQUM7QUFDTixDQUFDO0FBRUQsbUJBQW1CO0FBQ25CLFNBQWdCLE9BQU8sQ0FBQyxHQUFzQjtJQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFSixTQUFzQixXQUFXLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUE5QyxRQUFRLFVBQUUsT0FBTyxRQUE2QixDQUFDO0lBQ3RELE9BQU8sVUFBVSxDQUNiLENBQUMsRUFDRDtRQUNJLElBQUksRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFO1FBQ3ZCLEdBQUcsRUFBRyxPQUFPO0tBQ2hCLENBQ0osQ0FBQztBQUNOLENBQUM7QUFFRCx1Q0FBdUM7QUFDdkMsU0FBZ0IsT0FBTyxDQUFDLEdBQXNCO0lBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVKLFNBQXNCLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBcEMsUUFBUSxVQUFFLE9BQU8sUUFBbUIsQ0FBQztJQUM1QyxJQUFPLFFBQVEsR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELElBQU8sUUFBUSxHQUFHLFdBQVcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEQsSUFBTyxRQUFRLEdBQUcsV0FBVyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzQyxPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDO0FBR0QsOENBQThDO0FBQzlDLFlBQVk7QUFDWiw4Q0FBOEM7QUFFOUMsU0FBUyxVQUFVLENBQUMsSUFBWSxFQUFFLElBQWM7SUFDNUMsSUFBTSxTQUFTLEdBQWEsRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztJQUNuRCxLQUFrQixVQUFJLEVBQUosYUFBSSxFQUFKLGtCQUFJLEVBQUosSUFBSTtRQUFqQixJQUFNLEdBQUc7UUFBVSxTQUFTLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQztLQUFBO0lBQzlDLE9BQU8sU0FBUyxDQUFDO0FBQ3JCLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxJQUFZLEVBQUUsSUFBWTtJQUMxQyxJQUFNLFNBQVMsR0FBYSxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDO0lBRW5ELFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7UUFDaEMsT0FBTyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDRCxTQUFTLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztJQUM3QixTQUFTLENBQUMsSUFBSSxHQUFJLElBQUksQ0FBQztJQUV2QixPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsSUFBWSxFQUFFLElBQWdCO0lBQy9DLElBQU0sU0FBUyxHQUFhLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUM7SUFFbkQsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztRQUNoQyxPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNELFNBQVMsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO0lBQzdCLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRS9CLE9BQU8sU0FBUyxDQUFDO0FBQ3JCLENBQUM7QUFHRCxTQUFTLFdBQVcsQ0FBQyxJQUFZLEVBQUUsSUFBWTtJQUMzQyxPQUFPLElBQUksdUJBQVUsQ0FBQztRQUNsQixTQUFTLEVBQUUsRUFBRSxDQUFDLEdBQUc7UUFDakIsU0FBUyxFQUFFLEdBQUc7UUFDZCxTQUFTLEVBQUUsR0FBRztRQUNkLFNBQVMsRUFBRSxHQUFHO1FBRWQsUUFBUSxFQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFCLFFBQVEsRUFBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQixRQUFRLEVBQUcsRUFBRTtRQUNiLFFBQVEsRUFBRyxFQUFFO1FBRWIsS0FBSyxFQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUU7S0FDckMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLFNBQXNCO0lBQXRCLDBDQUFzQjtJQUN2QyxJQUFJLElBQVksQ0FBQztJQUNqQixJQUFJLFNBQVMsSUFBSSxFQUFFLEVBQUUsQ0FBQztRQUNsQixJQUFJLEdBQUcsSUFBSSxlQUFNLENBQUM7WUFDZCxNQUFNLEVBQUksUUFBUTtZQUNsQixRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxFQUFFO1lBQ1osUUFBUSxFQUFFLEVBQUUsQ0FBQyxpQkFBaUI7U0FDckMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztTQUFNLENBQUM7UUFDSixJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksR0FBRyxJQUFJLGVBQU0sQ0FBQztZQUNkLE1BQU0sRUFBSSxRQUFRLENBQUMsTUFBTTtZQUN6QixRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU07WUFDekIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxNQUFNO1lBQ3pCLFFBQVEsRUFBRSxRQUFRLENBQUMsTUFBTTtTQUM1QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdkIsQ0FBQztBQUVELHdCQUF3QjtBQUN4QixTQUFTLFdBQVc7SUFDaEIsSUFBTSxJQUFJLEdBQWEsRUFBRSxDQUFDO0lBQzFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZUFBTSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLElBQVksRUFBRSxHQUFlO0lBQ2xEOzs7Ozs7TUFNRTtJQUNGLElBQU0sSUFBSSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7SUFDMUIsSUFBTSxHQUFHLEdBQUksSUFBSSwrQkFBYyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2pDLE1BQU0sRUFBSyxNQUFNO1FBQ2pCLE1BQU0sRUFBTSxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQzNCLFNBQVMsRUFBRyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ3RCLFNBQVMsRUFBRyxHQUFHO1FBQ2YsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDdEI7Ozs7Ozs7RUFPTjtLQUNHLENBQUMsQ0FBQztJQUdILElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztJQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksZUFBTSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUdELGlGQUFpRjtBQUNqRixpRkFBaUY7QUFDakYsMkVBQTJFO0FBQzNFLGlGQUFpRjtBQUNqRixpRkFBaUY7QUFFakYsU0FBUyxJQUFJLENBQUMsR0FBc0I7SUFDaEMsRUFBRSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7SUFDdkIsRUFBRSxHQUFHLElBQUksaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsT0FBTztBQUNYLENBQUM7QUFFRCw4Q0FBOEM7QUFDOUMsS0FBSztBQUNMLGVBQWU7QUFDZixLQUFLO0FBQ0wsOENBQThDO0FBRTlDLFVBQVU7QUFDVjtJQWNJO1FBWE8sYUFBUSxHQUFzQyxFQUFFLENBQUM7UUFHakQsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUV4QixnQkFBVyxHQUFTLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFTLEVBQUUsQ0FBQztRQUN2QixrQkFBYSxHQUFPLENBQUMsQ0FBQztRQUN0QixxQkFBZ0IsR0FBSSxDQUFDLENBQUM7UUFDdEIsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBR3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSwyQkFBWSxDQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVuRCxJQUFNLFFBQVEsR0FBRyx1QkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFDLEtBQWlCLFVBQVEsRUFBUixxQkFBUSxFQUFSLHNCQUFRLEVBQVIsSUFBUTtZQUFwQixJQUFNLEVBQUU7WUFBYyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FBQTtRQUMvRDs7O1VBR0U7UUFDRjs7Ozs7Ozs7O1VBU0U7UUFDTSxJQUFJLENBQUMsSUFBSSxHQUFXLElBQUksZUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsd0JBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUM7QUFHRCxZQUFZO0FBQ1o7SUFLQTs7O01BR0U7SUFHRSwyQkFBbUIsR0FBc0I7O1FBVGxDLFFBQUcsR0FBb0IsQ0FBQyxDQUFDO1FBQ3pCLGNBQVMsR0FBYSxFQUFFLENBQUM7UUFTNUIsSUFBSSxDQUFDLElBQUksR0FBUSxTQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsSUFBSSxtQ0FBSSxTQUFTLENBQUM7UUFDeEMsSUFBSSxDQUFDLEdBQUcsR0FBUyxJQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsR0FBRyxNQUFNLFNBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxTQUFTLG1DQUFJLEVBQUUsQ0FBQztRQUM5Qzs7O1VBR0U7SUFDRSxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDclNELHVHQUFzRDtBQUN0RCwyRkFBdUM7QUFFdkMsK0VBQThCO0FBQzlCLElBQUksTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFOUIsd0JBQXdCO0FBQ3hCLE1BQU0sQ0FBQyxHQUFHLENBQUUsR0FBRyxFQUFFLFVBQU8sR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOztRQUM3RixHQUFHLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7OztLQUNwQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7O1FBQ3BHLElBQUksQ0FBQztZQUdHLEdBQUcsR0FBRyw0QkFBTyxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUF1QixHQUFHLENBQUUsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyx5QkFBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekIsQ0FBQzs7O0tBQ0YsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBRSxVQUFVLEVBQUUsVUFBTyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1FBQ3BHLEdBQUcsQ0FBQyxJQUFJLENBQUMsd0NBQXdDLENBQUMsQ0FBQzs7O0tBQ3BELENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQU8sR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOzs7UUFDcEcsSUFBSSxDQUFDO1lBR0csR0FBRyxHQUFHLDRCQUFPLEVBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQXVCLEdBQUcsQ0FBRSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLHlCQUFXLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QixDQUFDOzs7S0FDRixDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsR0FBRyxDQUFFLFVBQVUsRUFBRSxVQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7UUFDcEcsR0FBRyxDQUFDLElBQUksQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDOzs7S0FDdkQsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q3hCLHVHQUF3RDtBQUN4RCxzSEFBNkQ7QUFDN0QsMkZBQStDO0FBRS9DLCtFQUE4QjtBQUM5QixJQUFJLE1BQU0sR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTlCLHdCQUF3QjtBQUN4QixNQUFNLENBQUMsR0FBRyxDQUFFLEdBQUcsRUFBRSxVQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7UUFDN0YsR0FBRyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDOzs7S0FDeEMsQ0FBQyxDQUFDO0FBRUg7O0VBRUU7QUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7Ozs7O2dCQUluRixxQkFBTSx5QkFBSSxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7O2dCQUEzQixJQUFJLEdBQUcsU0FBb0I7Z0JBQ2pDLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUUsQ0FBQztvQkFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQkFBYyxJQUFJLENBQUMsS0FBSyxlQUFLLElBQUksQ0FBQyxJQUFJLFNBQU0sQ0FBQyxDQUFDO29CQUM1RCxJQUFJLENBQUMseUJBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7Ozs7Z0JBRTNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQXlCLEtBQUcsQ0FBRSxDQUFDLENBQUM7Z0JBQzVDLElBQUksQ0FBQyx5QkFBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Ozs7O0tBRTFCLENBQUMsQ0FBQztBQUNILE1BQU0sQ0FBQyxHQUFHLENBQUUsUUFBUSxFQUFFLFVBQU8sR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOztRQUNsRyxHQUFHLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7OztLQUN6QyxDQUFDLENBQUM7QUFHSDs7RUFFRTtBQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQU8sR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOzs7Ozs7Z0JBSW5GLHFCQUFNLHlCQUFJLEVBQUMsR0FBRyxDQUFDLElBQUksQ0FBQzs7Z0JBQTNCLElBQUksR0FBRyxTQUFvQjtnQkFDakMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRSxDQUFDO29CQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFjLElBQUksQ0FBQyxLQUFLLGVBQUssSUFBSSxDQUFDLElBQUksU0FBTSxDQUFDLENBQUM7b0JBQzVELElBQUksQ0FBQyx5QkFBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzs7OztnQkFFM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBeUIsS0FBRyxDQUFFLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLHlCQUFXLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7Ozs7S0FFMUIsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBRSxRQUFRLEVBQUUsVUFBTyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1FBQ2xHLEdBQUcsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQzs7O0tBQ3pDLENBQUMsQ0FBQztBQUdIOztFQUVFO0FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBTyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7Ozs7OztnQkFJbkYscUJBQU0seUJBQUksRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFDOztnQkFBM0IsSUFBSSxHQUFHLFNBQW9CO2dCQUNqQyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFLENBQUM7b0JBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMscUJBQWMsSUFBSSxDQUFDLEtBQUssZUFBSyxJQUFJLENBQUMsSUFBSSxTQUFNLENBQUMsQ0FBQztvQkFDNUQsSUFBSSxDQUFDLHlCQUFXLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7O2dCQUUzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUF5QixLQUFHLENBQUUsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLENBQUMseUJBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7OztLQUUxQixDQUFDLENBQUM7QUFDSCxNQUFNLENBQUMsR0FBRyxDQUFFLFFBQVEsRUFBRSxVQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7UUFDbEcsR0FBRyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDOzs7S0FDekMsQ0FBQyxDQUFDO0FBSUg7O0VBRUU7QUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7Ozs7O2dCQUlsRixxQkFBTSw4QkFBSSxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7O2dCQUEzQixJQUFJLEdBQUcsU0FBb0I7Z0JBQ2pDLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUUsQ0FBQztvQkFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQkFBYyxJQUFJLENBQUMsS0FBSyxlQUFLLElBQUksQ0FBQyxJQUFJLFNBQU0sQ0FBQyxDQUFDO29CQUM1RCxJQUFJLENBQUMseUJBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQUVELEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDOzs7O2dCQUUvQixPQUFPLENBQUMsS0FBSyxDQUFDLDhCQUF1QixLQUFHLENBQUUsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLENBQUMseUJBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7OztLQUUxQixDQUFDLENBQUM7QUFDSCxNQUFNLENBQUMsR0FBRyxDQUFFLE9BQU8sRUFBRSxVQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7UUFDakcsSUFBSSxDQUFDO1lBQ1AscUZBQXFGO1lBRWpGLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQXVCLEdBQUcsQ0FBRSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLHlCQUFXLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QixDQUFDOzs7S0FFRixDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIeEIsdUdBQW1FO0FBQ25FLDJGQUF1QztBQUV2QywrRUFBOEI7QUFDOUIsSUFBSSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU5Qix3QkFBd0I7QUFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsVUFBTyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1FBQzdGLEdBQUcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQzs7O0tBQ3BDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQU8sR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOzs7UUFDcEcsSUFBSSxDQUFDO1lBR0csR0FBRyxHQUFHLDRCQUFPLEVBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQXVCLEdBQUcsQ0FBRSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLHlCQUFXLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QixDQUFDOzs7S0FDRixDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsR0FBRyxDQUFFLFVBQVUsRUFBRSxVQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7UUFDcEcsR0FBRyxDQUFDLElBQUksQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDOzs7S0FDcEQsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBTyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7OztRQUNwRyxJQUFJLENBQUM7WUFHRyxHQUFHLEdBQUcsNEJBQU8sRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBdUIsR0FBRyxDQUFFLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMseUJBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7OztLQUNGLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxHQUFHLENBQUUsVUFBVSxFQUFFLFVBQU8sR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOztRQUNwRyxHQUFHLENBQUMsSUFBSSxDQUFDLDJDQUEyQyxDQUFDLENBQUM7OztLQUN2RCxDQUFDLENBQUM7QUFHSCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7O1FBQ3BHLElBQUksQ0FBQztZQUdHLEdBQUcsR0FBRyw0QkFBTyxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUF3QixHQUFHLENBQUUsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyx5QkFBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekIsQ0FBQzs7O0tBQ0YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLEdBQUcsQ0FBRSxVQUFVLEVBQUUsVUFBTyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1FBQ3BHLEdBQUcsQ0FBQyxJQUFJLENBQUMseUNBQXlDLENBQUMsQ0FBQzs7O0tBQ3JELENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0R4QiwrRUFBOEI7QUFFOUIsSUFBSSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM5QixJQUFJLGFBQWEsR0FBRyxtQkFBTyxDQUFDLDBDQUFXLENBQUMsQ0FBQztBQUN6QyxJQUFJLGFBQWEsR0FBRyxtQkFBTyxDQUFDLDBDQUFXLENBQUMsQ0FBQztBQUN6QyxJQUFJLGFBQWEsR0FBRyxtQkFBTyxDQUFDLDBDQUFXLENBQUMsQ0FBQztBQUV6QyxlQUFlO0FBQ2YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUksYUFBYSxDQUFDLENBQUM7QUFDckMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUksYUFBYSxDQUFDLENBQUM7QUFDckMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUksYUFBYSxDQUFDLENBQUM7QUFFckMsd0JBQXdCO0FBQ3hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO0lBQzlGLEdBQUcsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJ4QiwrRUFBOEI7QUFDOUIsSUFBSSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU5Qix3QkFBd0I7QUFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBUyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Ozs7Ozs7Ozs7O0FDUnhCOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9tZGwvQ19HdWlsZC50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfbWRsL0NfSGVyby50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfbWRsL0NfSGVyb0FiaWxpdHkudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX21kbC9DX0xvY2F0aW9uLnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9tZGwvQ19NYXplLnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9tZGwvQ19NYXplQ2VsbC50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfbWRsL0NfTWF6ZUluZm8udHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX21kbC9DX01hemVPYmoudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX21kbC9DX01hemVPYmpDb21tb24udHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX21kbC9DX01hemVPYmpFdGMudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX21kbC9DX01hemVPYmpWaWV3LnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9tZGwvQ19Nb3ZhYmxlUG9pbnQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX21kbC9DX1BvaW50LnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9tZGwvQ19Qb2ludERpci50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfbWRsL0NfUG9pbnRTZXQyRC50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfbWRsL0NfUmFuZ2UudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX21kbC9DX1NhdmVEYXRhLnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9tZGwvQ19TYXZlSW5mby50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfbWRsL0NfVGVhbS50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfbWRsL0NfVGVhbVZpZXcudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX21kbC9DX1dhbGtlci50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfbWRsL1RfRGlyZWN0aW9uLnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9tZGwvVF9NektpbmQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4uL21haWNsL3NyYy9kX3JkYi9DX0d1aWxkUkRCLnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9yZGIvQ19IZXJvUkRCLnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9yZGIvQ19NYXplT2JqUkRCLnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9yZGIvQ19NYXplUkRCLnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9yZGIvQ19NdnB0UkRCLnRzIiwid2VicGFjazovL21haS8uLi9tYWljbC9zcmMvZF9yZGIvQ19TYXZlRGF0YVJEQi50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfcmRiL0NfVGVhbVJEQi50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfdXRsL0NfRHNwTWVzc2FnZS50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfdXRsL0ZfTWF0aC50cyIsIndlYnBhY2s6Ly9tYWkvLi4vbWFpY2wvc3JjL2RfdXRsL0ZfUmFuZC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL21haS8uL3NyYy9saWIvX0pTT05fbWFpX2d1bGQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2xpYi9fSlNPTl9tYWlfbGRzdi50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvbGliL19KU09OX21haV9sZHN2X3Rlc3QudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2xpYi9fSlNPTl9tYWlfbWF6ZS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvcm91dGVzL21haUd1bGQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL3JvdXRlcy9tYWlMZFN2LnRzIiwid2VicGFjazovL21haS8uL3NyYy9yb3V0ZXMvbWFpTWF6ZS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvcm91dGVzL21haWV4LnRzIiwid2VicGFjazovL21haS8uL3NyYy9yb3V0ZXMvdXNlcnMudHMiLCJ3ZWJwYWNrOi8vbWFpL2V4dGVybmFsIGNvbW1vbmpzIFwiY29va2llLXBhcnNlclwiIiwid2VicGFjazovL21haS9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9tYWkvZXh0ZXJuYWwgY29tbW9uanMgXCJodHRwLWVycm9yc1wiIiwid2VicGFjazovL21haS9leHRlcm5hbCBjb21tb25qcyBcIm1vcmdhblwiIiwid2VicGFjazovL21haS9leHRlcm5hbCBjb21tb25qcyBcIm15c3FsMi9wcm9taXNlXCIiLCJ3ZWJwYWNrOi8vbWFpL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vbWFpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21haS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL21haS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbWFpL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IElfTG9jYXRlLCBUX0xja2QgfSAgICAgIGZyb20gXCIuL0NfTG9jYXRpb25cIjtcclxuaW1wb3J0IHsgSV9KU09OX1VuaXEsIEpTT05fQW55IH0gZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5pbXBvcnQgeyBDX0hlcm8sIEpTT05fSGVybyB9ICAgICBmcm9tIFwiLi9DX0hlcm9cIjtcclxuaW1wb3J0IHsgX2dldF91dWlkIH0gICAgICAgICAgICAgZnJvbSBcIi4uL2RfdXRsL0ZfUmFuZFwiO1xyXG5pbXBvcnQgeyBDX0dvb2RzTGlzdCwgSlNPTl9Hb29kc0xpc3QgfSBmcm9tIFwiLi9DX0dvb2RzTGlzdE5HXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fR3VpbGQgZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBpZD86ICAgICAgIG51bWJlcixcclxuICAgIHVuaXFfaWQ/OiAgc3RyaW5nLFxyXG4gICAgc2F2ZV9pZD86ICBudW1iZXIsXHJcbiAgICBuYW1lPzogICAgIHN0cmluZyxcclxuICAgIGdvbGQ/OiAgICAgbnVtYmVyLFxyXG4gICAgZ29vZHM/OiAgICBKU09OX0dvb2RzTGlzdCxcclxuICAgIGhlcm9lcz86ICAgSlNPTl9IZXJvW10sXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9ndWxkX2luZm8oYTogSlNPTl9HdWlsZHx1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGFsZXJ0KFwiR3VpbGQgSW5mbzpcIiBcclxuICAgICAgICArIFwiXFxuaWQ6ICAgICAgIFwiICsgKGEuaWQgICAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxudW5pcV9pZDogIFwiICsgKGEudW5pcV9pZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2F2ZV9pZDogIFwiICsgKGEuc2F2ZV9pZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubmFtZTogICAgIFwiICsgKGEubmFtZSAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuZ29sZDogICAgIFwiICsgKGEuZ29sZCAgICAgID8/ICAwIClcclxuLy8gICAgICAgICsgXCJcXG5nb29kczogICAgXCIgKyAoT2JqZWN0LmtleXMoYS5nb29kcz8/MCkubGVuZ3RoKVxyXG4gICAgICAgICsgXCJcXG5oZXJvZXM6ICAgXCIgKyAoYS5oZXJvZXM/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19HdWlsZCBpbXBsZW1lbnRzIElfTG9jYXRlLCBJX0pTT05fVW5pcSB7XHJcbiAgICBwcm90ZWN0ZWQgaWQ6ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIHVuaXFfaWQ6ICAgIHN0cmluZztcclxuICAgIHByb3RlY3RlZCBzYXZlX2lkOiAgICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgbmFtZTogICAgICAgc3RyaW5nO1xyXG4gICAgcHVibGljICAgIGdvbGQ6ICAgICAgIG51bWJlcjtcclxuLy8gICAgcHVibGljICAgIGdvb2RzOiAgICAgIENfR29vZHNMaXN0O1xyXG4gICAgcHJvdGVjdGVkIGhlcm9lczogICAgIHtbdWlkOiBzdHJpbmddOiBDX0hlcm99O1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGE/OiBKU09OX0d1aWxkKSB7XHJcbiAgICAgICAgdGhpcy5pZCAgICAgICAgID0gLTE7XHJcbiAgICAgICAgdGhpcy51bmlxX2lkICAgID0gJ21haV9ndWxkIycgKyBfZ2V0X3V1aWQoKTtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgICAgPSAtMTtcclxuICAgICAgICB0aGlzLm5hbWUgICAgICAgPSAnJztcclxuICAgICAgICB0aGlzLmdvbGQgICAgICAgPSAgMDtcclxuLy8gICAgICAgIHRoaXMuZ29vZHMgICAgICA9IG5ldyBDX0dvb2RzTGlzdCgpO1xyXG4gICAgICAgIHRoaXMuaGVyb2VzICAgICA9IHt9O1xyXG4gICAgICAgIGlmIChhICE9PSB1bmRlZmluZWQpIHRoaXMuZGVjb2RlKGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1aWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudW5pcV9pZH1cclxuICAgIHB1YmxpYyBnZXRfbGNrZCgpOiBUX0xja2Qge3JldHVybiBUX0xja2QuTWF6ZX1cclxuICAgIHB1YmxpYyBnZXRfbmFtZSgpOiBzdHJpbmcge3JldHVybiB0aGlzLm5hbWV9XHJcbiAgICBcclxuICAgIHB1YmxpYyBocmVzKCk6ICBDX0hlcm9bXSB7XHJcbiAgICAgICAgY29uc3QgaHJlczogQ19IZXJvW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpaSBpbiB0aGlzLmhlcm9lcykgaHJlcy5wdXNoKHRoaXMuaGVyb2VzW2lpXSk7XHJcbiAgICAgICAgcmV0dXJuIGhyZXM7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIGNsZWFyX2hyZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZXJvZXMgPSB7fTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhZGRfaGVybyhoZXJvOiBDX0hlcm8pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlcm9lc1toZXJvLnVpZCgpXSA9IGhlcm87XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcm12X2hlcm8oaGVybzogQ19IZXJvKTogdm9pZCB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuaGVyb2VzW2hlcm8udWlkKCldO1xyXG4gICAgfVxyXG5cclxuLypcclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9vYmpfdG9fc3RyaW5nKG9hOiBDX0d1aWxkKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2EsIG51bGwsIFwiXFx0XCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX29iakFycmF5X3RvX3N0cmluZyhvYWE6IHtbdWlkOiBzdHJpbmddOiBDX0d1aWxkfSk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3Qgb2EgPSBbXSBhcyBDX0d1aWxkW107XHJcbiAgICAgICAgZm9yIChjb25zdCBpaSBpbiBvYWEpIG9hLnB1c2gob2FhW2lpXSk7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9hLCBudWxsLCBcIlxcdFwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdfdG9fb2JqKHR4dDogc3RyaW5nKTogQ19HdWlsZCB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaiAgID0gSlNPTi5wYXJzZSh0eHQpIGFzIEpTT05fR3VpbGRbXTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDX0d1aWxkKGopO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENfR3VpbGQoKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ190b19vYmpBcnJheSh0eHQ6IHN0cmluZyk6IHtbdWlkOiBzdHJpbmddOiBDX0d1aWxkfSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaiAgID0gSlNPTi5wYXJzZSh0eHQpIGFzIEpTT05fR3VpbGRbXTtcclxuICAgICAgICAgICAgY29uc3QgbXBhID0ge30gYXMge1tpZDogc3RyaW5nXTogQ19HdWlsZH07XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgamogb2Ygaikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWFhID0gbmV3IENfR3VpbGQoKS5kZWNvZGUoamopO1xyXG4gICAgICAgICAgICAgICAgbXBhW2FhYS51aWQoKV0gPSBhYWE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG1wYTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiovXHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX0d1aWxkIHtcclxuICAgICAgICBjb25zdCBqc29uX2hlcm9lczogSlNPTl9IZXJvW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpaSBpbiB0aGlzLmhlcm9lcykganNvbl9oZXJvZXMucHVzaCh0aGlzLmhlcm9lc1tpaV0uZW5jb2RlKCkpOyAgXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgIHRoaXMuaWQsXHJcbiAgICAgICAgICAgIHVuaXFfaWQ6IHRoaXMudW5pcV9pZCxcclxuICAgICAgICAgICAgc2F2ZV9pZDogdGhpcy5zYXZlX2lkLFxyXG4gICAgICAgICAgICBnb2xkOiAgICB0aGlzLmdvbGQsXHJcbi8vICAgICAgICAgICAgZ29vZHM6ICAgdGhpcy5nb29kcy5lbmNvZGUoKSxcclxuICAgICAgICAgICAgaGVyb2VzOiAganNvbl9oZXJvZXMsXHJcbiAgICAgICAgICAgIG5hbWU6ICAgIHRoaXMubmFtZSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IEpTT05fR3VpbGR8dW5kZWZpbmVkKTogQ19HdWlsZCB7XHJcbiAgICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGEuaWQgICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5pZCAgICAgICAgID0gYS5pZDtcclxuICAgICAgICBpZiAoYS51bmlxX2lkICAhPT0gdW5kZWZpbmVkKSB0aGlzLnVuaXFfaWQgICAgPSBhLnVuaXFfaWQ7XHJcbiAgICAgICAgaWYgKGEuc2F2ZV9pZCAgIT09IHVuZGVmaW5lZCkgdGhpcy5zYXZlX2lkICAgID0gYS5zYXZlX2lkO1xyXG4gICAgICAgIGlmIChhLm5hbWUgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubmFtZSAgICAgICA9IGEubmFtZTtcclxuICAgICAgICBpZiAoYS5nb2xkICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmdvbGQ7XHJcbi8vICAgICAgICBpZiAoYS5nb29kcyAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmdvb2RzLmRlY29kZSAoYS5nb29kcyk7XHJcblxyXG4gICAgICAgIGlmIChhLmhlcm9lcyAhPT0gdW5kZWZpbmVkKSAge1xyXG4gICAgICAgICAgICB0aGlzLmhlcm9lcyA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGpzb25faGVybyBvZiBhLmhlcm9lcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVybyA9IG5ldyBDX0hlcm8oanNvbl9oZXJvKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVyb2VzW2hlcm8udWlkKCldID0gaGVybztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZW5jb2RlX2FsbChhbGxfZ3VsZDogQ19HdWlsZFtdKTogSlNPTl9HdWlsZFtdIHtcclxuICAgICAgICBjb25zdCBhbGxfZ3VsZF9kYXRhOiBKU09OX0d1aWxkW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBndWxkIG9mIGFsbF9ndWxkKSB7XHJcbiAgICAgICAgICAgIGFsbF9ndWxkX2RhdGEucHVzaChndWxkLmVuY29kZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbF9ndWxkX2RhdGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZV9hbGwoYWxsX2d1bGRfZGF0YTogSlNPTl9HdWlsZFtdKTogQ19HdWlsZFtdIHtcclxuICAgICAgICBjb25zdCBhbGxfZ3VsZDogQ19HdWlsZFtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgZ3VsZF9kYXRhIG9mIGFsbF9ndWxkX2RhdGEpIHtcclxuICAgICAgICAgICAgYWxsX2d1bGQucHVzaCgobmV3IENfR3VpbGQoKSkuZGVjb2RlKGd1bGRfZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsX2d1bGQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIkd1aWxkIEluZm86XCIgXHJcbiAgICAgICAgICAgICsgXCJcXG5pZDogICAgICAgXCIgKyAodGhpcy5pZCAgICAgICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG51bmlxX2lkOiAgXCIgKyAodGhpcy51bmlxX2lkICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zYXZlX2lkOiAgXCIgKyAodGhpcy5zYXZlX2lkICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5uYW1lOiAgICAgXCIgKyAodGhpcy5uYW1lICAgICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5nb2xkOiAgICAgXCIgKyAodGhpcy5nb2xkICAgICAgICAgICA/PyAgMClcclxuLy8gICAgICAgICAgICArIFwiXFxuZ29vZHM6ICAgIFwiICsgKE9iamVjdC5rZXlzKHRoaXMuZ29vZHM/PzApLmxlbmd0aClcclxuICAgICAgICAgICAgKyBcIlxcbmhlcm9lczogICBcIiArICh0aGlzLmhlcm9lcz8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfSGVyb0FiaWxpdHksIEpTT05fSGVyb19BYmlsaXR5fSBmcm9tIFwiLi9DX0hlcm9BYmlsaXR5XCI7XHJcbmltcG9ydCB7IElfSlNPTl9VbmlxLCAgIEpTT05fQW55IH0gICAgICAgICBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcbmltcG9ydCB7IF9nZXRfdXVpZCwgX2lucmFuZCwgX2lyYW5kLCBfcmFuZG9tX3N0ciB9ICBmcm9tIFwiLi4vZF91dGwvRl9SYW5kXCI7XHJcbmltcG9ydCB7IENfR29vZHNMaXN0LCBKU09OX0dvb2RzTGlzdCB9IGZyb20gXCIuL0NfR29vZHNMaXN0TkdcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9IZXJvIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgaWQ/OiAgICAgICAgbnVtYmVyLCBcclxuICAgIHVuaXFfaWQ/OiAgIHN0cmluZywgXHJcbiAgICBzYXZlX2lkPzogICBudW1iZXIsIFxyXG4gICAgbmFtZT86ICAgICAgc3RyaW5nLCBcclxuICAgIHNleD86ICAgICAgIG51bWJlcjsgXHJcbiAgICBhZ2U/OiAgICAgICBudW1iZXI7IFxyXG4gICAgZ29sZD86ICAgICAgbnVtYmVyOyBcclxuLy8gICAgZ29vZHM/OiAgICAgSlNPTl9Hb29kc0xpc3Q7IFxyXG4gICAgc3RhdGU/OiAgICAgbnVtYmVyOyBcclxuICAgIGx2PzogICAgICAgIG51bWJlcjsgXHJcbiAgICB2YWw/OiAgICAgICBKU09OX0hlcm9fVmFsdWU7XHJcbiAgICBhYmlfcD86ICAgICAgIHtic2M/OiBKU09OX0hlcm9fQWJpbGl0eSwgdHRsPzogSlNPTl9IZXJvX0FiaWxpdHksIG5vdz86IEpTT05fSGVyb19BYmlsaXR5fTtcclxuICAgIGFiaV9tPzogICAgICAge2JzYz86IEpTT05fSGVyb19BYmlsaXR5LCB0dGw/OiBKU09OX0hlcm9fQWJpbGl0eSwgbm93PzogSlNPTl9IZXJvX0FiaWxpdHl9O1xyXG4gICAgaXNfYWxpdmU/OiAgc3RyaW5nfGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9IZXJvX1ZhbHVlIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgc2twPzoge3R0bDogbnVtYmVyLCAgbm93OiBudW1iZXJ9LCBcclxuICAgIGV4cD86IHt0dGw6IG51bWJlciwgIG5vdzogbnVtYmVyfSxcclxuICAgIG54ZT86IG51bWJlciwgICAgICAgICAgICAgICAgICAgLy8g5qyh5Zue44Gu44OS44O844Ot44O844Os44OZ44Or44Ki44OD44OX44Gr5b+F6KaB44Gq57WM6aiT5YCkXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9ocmVzX2luZm8oYTogKEpTT05fSGVyb3x1bmRlZmluZWQpW118dW5kZWZpbmVkKTogdm9pZCB7IFxyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoJ051bWJlciBvZiBIZXJvID0gJyArIGEubGVuZ3RoLnRvU3RyaW5nKCkpO1xyXG4gICAgZm9yICh2YXIgaSBpbiBhKSB7XHJcbiAgICAgICAgaWYgKGFbaV0gPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICAgICAgYWxlcnRfaGVyb19pbmZvKGFbaV0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfaGVyb19pbmZvKGE6IEpTT05fSGVyb3x1bmRlZmluZWQpOiB2b2lkIHsgXHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydChcIkhlcm8gSW5mbzpcXG5cIiBcclxuICAgICAgICArIFwiXFxuaWQ6ICAgICAgIFwiICAgICArIChhPy5pZCAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG51bmlxX2lkICAgXCIgICAgICsgKGE/LnVuaXFfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbm5hbWU6ICAgICBcIiAgICAgKyAoYT8ubmFtZSAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2F2ZV9pZDogIFwiICAgICArIChhPy5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5pc19hbGl2ZTogXCIgICAgICsgKGE/LmlzX2FsaXZlICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19IZXJvIGltcGxlbWVudHMgSV9KU09OX1VuaXEge1xyXG4gICAgcHJvdGVjdGVkIG15X2lkOiAgICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgbXlfbmFtZTogIHN0cmluZztcclxuICAgIHByb3RlY3RlZCB1bmlxX2lkOiAgc3RyaW5nOyBcclxuICAgIHByb3RlY3RlZCBzYXZlX2lkOiAgbnVtYmVyOyBcclxuICAgIHByb3RlY3RlZCBzZXg6ICAgICAgbnVtYmVyOyBcclxuICAgIHByb3RlY3RlZCBhZ2U6ICAgICAgbnVtYmVyOyBcclxuICAgIHByb3RlY3RlZCBzdGF0ZTogICAgbnVtYmVyOyBcclxuICAgIHByb3RlY3RlZCBsdjogICAgICAgbnVtYmVyOyBcclxuICAgIC8vIGJzYyhCYXNpYynjga/lvZPkurrjga7ln7rmnKzlgKTjgIJ0dGwoVG90YWwp44Gv6KOF5YKZ562J44KS5Yqg5rib566X44GX44Gf44KC44Gu44CCbm9344Gv44OQ44OV562J44Gu44K/44O844Oz5Yi244Gu44KC5Yqg5rib566X44GX44Gf44KC44GuXHJcbiAgICBwcm90ZWN0ZWQgZ29sZDogICAgIG51bWJlcjsgXHJcbi8vICAgIHByb3RlY3RlZCBnb29kczogICAgQ19Hb29kc0xpc3Q7IFxyXG4gICAgcHJvdGVjdGVkIHZhbDogICAgICBKU09OX0hlcm9fVmFsdWU7XHJcbiAgICBwcm90ZWN0ZWQgYWJpX3A6ICAgICAge2JzYzogQ19IZXJvQWJpbGl0eSwgdHRsOiBDX0hlcm9BYmlsaXR5LCBub3c6IENfSGVyb0FiaWxpdHl9O1xyXG4gICAgcHJvdGVjdGVkIGFiaV9tOiAgICAgIHtic2M6IENfSGVyb0FiaWxpdHksIHR0bDogQ19IZXJvQWJpbGl0eSwgbm93OiBDX0hlcm9BYmlsaXR5fTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYT86IEpTT05fSGVybykge1xyXG4gICAgICAgIHRoaXMubXlfaWQgICAgICA9IDA7XHJcbiAgICAgICAgdGhpcy5teV9uYW1lICAgID0gJ05vIE5hbWUgSGVybyc7XHJcbiAgICAgICAgdGhpcy51bmlxX2lkICAgID0gJ21haV9oZXJvIycgKyBfZ2V0X3V1aWQoKTtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgICAgPSAwO1xyXG4gICAgICAgIHRoaXMuc2V4ICAgICAgICA9IDA7IFxyXG4gICAgICAgIHRoaXMuYWdlICAgICAgICA9IDA7IFxyXG4gICAgICAgIHRoaXMuZ29sZCAgICAgICA9IDA7IFxyXG4vLyAgICAgICAgdGhpcy5nb29kcyAgICAgID0gbmV3IENfR29vZHNMaXN0KCk7IFxyXG4gICAgICAgIHRoaXMuc3RhdGUgICAgICA9IDA7IFxyXG4gICAgICAgIHRoaXMubHYgICAgICAgICA9IDA7XHJcbiAgICAgICAgdGhpcy52YWwgICAgICAgID0ge307XHJcbiAgICAgICAgdGhpcy5hYmlfcCAgICAgID0ge2JzYzogbmV3IENfSGVyb0FiaWxpdHkoKSwgdHRsOiBuZXcgQ19IZXJvQWJpbGl0eSgpLCBub3c6IG5ldyBDX0hlcm9BYmlsaXR5KCl9O1xyXG4gICAgICAgIHRoaXMuYWJpX20gICAgICA9IHtic2M6IG5ldyBDX0hlcm9BYmlsaXR5KCksIHR0bDogbmV3IENfSGVyb0FiaWxpdHkoKSwgbm93OiBuZXcgQ19IZXJvQWJpbGl0eSgpfTtcclxuLy8gICAgICAgIHRoaXMuaXNfYWxpdmUgICA9IHRydWU7XHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldF9wcnAoYXJnIDogSlNPTl9IZXJvKSB7XHJcbiAgICAgICAgdGhpcy5kZWNvZGUoYXJnKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfdW5pcV9pZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy51bmlxX2lkfVxyXG5cclxuICAgIHB1YmxpYyBpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnSGVyb18nICsgdGhpcy5teV9pZC50b1N0cmluZygxNikucGFkU3RhcnQoNSwgJzAnKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB1aWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudW5pcV9pZDt9XHJcbiAgICBwdWJsaWMgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm15X25hbWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X25hbWUobmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5teV9uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGlzX2FsaXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGhwID0gdGhpcy5hYmlfcC5ub3cuZ2V0KCd4cCcpID8/IDA7XHJcbiAgICAgICAgY29uc3QgaGQgPSB0aGlzLmFiaV9wLm5vdy5nZXQoJ3hkJykgPz8gMDtcclxuICAgICAgICByZXR1cm4gaHAgLSBoZCA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhlcm9fYm9udXMobjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gbiAqICggdGhpcy5sdiArIDEgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaHBfZGFtYWdlKGRtZzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCB4cF9ub3cgID0gdGhpcy5hYmlfcC5ub3cuZ2V0KCd4cCcpID8/IDA7XHJcbiAgICAgICAgbGV0ICAgeGRfbm93ICA9IHRoaXMuYWJpX3Aubm93LmdldCgneGQnKSA/PyAwO1xyXG5cclxuICAgICAgICB4ZF9ub3cgKz0gZG1nIC0gTWF0aC5yb3VuZCggdGhpcy5oZXJvX2JvbnVzKCh0aGlzLmFiaV9wLm5vdy5nZXQoJ3ZpdCcpID8/IDApIC8gMTAuMCkgKTtcclxuXHJcbiAgICAgICAgY29uc3QgZCA9IHhkX25vdyA+IHhwX25vdyA/IHhwX25vdyA6IHhkX25vdztcclxuICAgICAgICB0aGlzLmFiaV9wLm5vdy5zZXQoJ3hkJywgZCk7XHJcbiAgICAgICAgcmV0dXJuIGQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaHBfaGVhbChoZWFsOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCAgIHhkX25vdyA9IHRoaXMuYWJpX3Aubm93LmdldCgneGQnKSA/PyAwO1xyXG4gICAgICAgIGlmICh4ZF9ub3cgPD0gMCkgcmV0dXJuIDA7XHJcblxyXG4gICAgICAgIHhkX25vdyAtPSBoZWFsO1xyXG5cclxuICAgICAgICBjb25zdCBkID0geGRfbm93IDwgMCA/IDAgOiB4ZF9ub3c7XHJcbiAgICAgICAgdGhpcy5hYmlfcC5ub3cuc2V0KCd4ZCcsIGQpO1xyXG4gICAgICAgIHJldHVybiBkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhwX2F1dG9faGVhbCgpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGhlYWwgPSBNYXRoLmNlaWwoIHRoaXMuaGVyb19ib251cygodGhpcy5hYmlfcC5ub3cuZ2V0KCd2aXQnKSA/PyAwKSAvIDEwLjApICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHBfaGVhbChoZWFsKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHByb3RlY3RlZCBjb3B5X2JzY190b190dGwoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hYmlfcC50dGwuZGVjb2RlKHRoaXMuYWJpX3AuYnNjLmVuY29kZSgpKTtcclxuICAgICAgICB0aGlzLmFiaV9tLnR0bC5kZWNvZGUodGhpcy5hYmlfbS5ic2MuZW5jb2RlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjb3B5X3R0bF90b19ub3coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hYmlfcC5ub3cuZGVjb2RlKHRoaXMuYWJpX3AudHRsLmVuY29kZSgpKTtcclxuICAgICAgICB0aGlzLmFiaV9tLm5vdy5kZWNvZGUodGhpcy5hYmlfbS50dGwuZW5jb2RlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByYW5kb21fbWFrZShoZWxvX2xldmVsOiBudW1iZXIgPSAwKTogQ19IZXJvIHtcclxuICAgICAgICB0aGlzLm15X2lkICAgID0gMDsgLy8gLS1IZXJvOjokbWF4X2lkO1xyXG4gICAgICAgIHRoaXMubXlfbmFtZSAgPSBcIuWGkumZuuiAhSBcIiArIF9yYW5kb21fc3RyKDUpO1xyXG4gICAgICAgIHRoaXMuc2V4ICAgICAgPSBfaXJhbmQoIDAsICAgICAxKTsgXHJcbiAgICAgICAgdGhpcy5hZ2UgICAgICA9IF9pcmFuZCggMTUsICAgMjUpOyBcclxuICAgICAgICB0aGlzLnN0YXRlICAgID0gMDsgXHJcbiAgICAgICAgdGhpcy5sdiAgICAgICA9IGhlbG9fbGV2ZWw7IFxyXG4gICAgICAgIHRoaXMuZ29sZCAgICAgPSBfaXJhbmQoIDUwMCwgMTAwMCk7IFxyXG4gICAgICAgIHRoaXMudmFsICAgICAgPSB7XHJcbiAgICAgICAgICAgIHNrcDoge3R0bDogMCwgbm93OiAwfSwgXHJcbiAgICAgICAgICAgIGV4cDoge3R0bDogMCwgbm93OiAwfSxcclxuICAgICAgICAgICAgJ254ZSc6IDEwMDBcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgYWJpX3BfYnNjID0gdGhpcy5hYmlfcC5ic2M7XHJcbiAgICAgICAgYWJpX3BfYnNjLnJhbmRvbV9tYWtlKGhlbG9fbGV2ZWwpO1xyXG5cclxuICAgICAgICBjb25zdCBhYmlfbV9ic2MgPSB0aGlzLmFiaV9tLmJzYztcclxuICAgICAgICBhYmlfbV9ic2MucmFuZG9tX21ha2UoaGVsb19sZXZlbCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29weV9ic2NfdG9fdHRsKCk7XHJcbiAgICAgICAgdGhpcy5jb3B5X3R0bF90b19ub3coKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX0hlcm8ge1xyXG4gICAgICAgIGNvbnN0IHJldDogSlNPTl9IZXJvID0ge1xyXG4gICAgICAgICAgICBpZDogICAgICAgIHRoaXMubXlfaWQsXHJcbiAgICAgICAgICAgIHVuaXFfaWQ6ICAgdGhpcy51bmlxX2lkLFxyXG4gICAgICAgICAgICBuYW1lOiAgICAgIHRoaXMubXlfbmFtZSxcclxuICAgICAgICAgICAgc2F2ZV9pZDogICB0aGlzLnNhdmVfaWQsXHJcbiAgICAgICAgICAgIHNleDogICAgICAgdGhpcy5zZXgsIFxyXG4gICAgICAgICAgICBhZ2U6ICAgICAgIHRoaXMuYWdlLCBcclxuICAgICAgICAgICAgc3RhdGU6ICAgICB0aGlzLnN0YXRlLCBcclxuICAgICAgICAgICAgbHY6ICAgICAgICB0aGlzLmx2LCBcclxuICAgICAgICAgICAgZ29sZDogICAgICB0aGlzLmdvbGQsIFxyXG4vLyAgICAgICAgICAgIGdvb2RzOiAgICAgdGhpcy5nb29kcy5lbmNvZGUoKSwgXHJcbiAgICAgICAgICAgIHZhbDogICAgICAgdGhpcy52YWwsXHJcbiAgICAgICAgICAgIGFiaV9wX2JzYzogdGhpcy5hYmlfcC5ic2MuZW5jb2RlKCksXHJcbiAgICAgICAgICAgIGFiaV9tX2JzYzogdGhpcy5hYmlfbS5ic2MuZW5jb2RlKCksXHJcbiAgICAgICAgICAgIGFiaV9wX3R0bDogdGhpcy5hYmlfcC50dGwuZW5jb2RlKCksXHJcbiAgICAgICAgICAgIGFiaV9tX3R0bDogdGhpcy5hYmlfbS50dGwuZW5jb2RlKCksXHJcbiAgICAgICAgICAgIGFiaV9wX25vdzogdGhpcy5hYmlfcC5ub3cuZW5jb2RlKCksXHJcbiAgICAgICAgICAgIGFiaV9tX25vdzogdGhpcy5hYmlfbS5ub3cuZW5jb2RlKCksXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IEpTT05fSGVyb3x1bmRlZmluZWQpOiBDX0hlcm8ge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChhLmlkICAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfaWQgICAgPSBhLmlkO1xyXG4gICAgICAgIGlmIChhLm5hbWUgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfbmFtZSAgPSBhLm5hbWU7XHJcbiAgICAgICAgaWYgKGEudW5pcV9pZCAgIT09IHVuZGVmaW5lZCkgdGhpcy51bmlxX2lkICA9IGEudW5pcV9pZDtcclxuICAgICAgICBpZiAoYS5zYXZlX2lkICAhPT0gdW5kZWZpbmVkKSB0aGlzLnNhdmVfaWQgID0gYS5zYXZlX2lkO1xyXG4gICAgICAgIGlmIChhLnNleCAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMuc2V4ICAgICAgPSBhLnNleDtcclxuICAgICAgICBpZiAoYS5hZ2UgICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmFnZSAgICAgID0gYS5hZ2U7XHJcbiAgICAgICAgaWYgKGEuc3RhdGUgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5zdGF0ZSAgICA9IGEuc3RhdGU7XHJcbiAgICAgICAgaWYgKGEubHYgICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5sdiAgICAgICA9IGEubHY7XHJcbiAgICAgICAgaWYgKGEuZ29sZCAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5nb2xkICAgICA9IGEuZ29sZDtcclxuXHJcbi8vICAgICAgICBpZiAoYS5nb29kcyAgICE9PSB1bmRlZmluZWQpIHRoaXMuZ29vZHMuZGVjb2RlKGEuZ29vZHMpO1xyXG4gICAgICAgIGlmIChhLnZhbCAgICAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9fZGVjb2RlX3ZhbCh0aGlzLnZhbCwgYS52YWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGEuYWJpX3BfYnNjICE9PSB1bmRlZmluZWQpIHRoaXMuYWJpX3AuYnNjLmRlY29kZShhLmFiaV9wX2JzYyk7XHJcbiAgICAgICAgaWYgKGEuYWJpX21fYnNjICE9PSB1bmRlZmluZWQpIHRoaXMuYWJpX20uYnNjLmRlY29kZShhLmFiaV9tX2JzYyk7XHJcbiAgICAgICAgaWYgKGEuYWJpX3BfdHRsICE9PSB1bmRlZmluZWQpIHRoaXMuYWJpX3AudHRsLmRlY29kZShhLmFiaV9wX3R0bCk7XHJcbiAgICAgICAgaWYgKGEuYWJpX21fdHRsICE9PSB1bmRlZmluZWQpIHRoaXMuYWJpX20udHRsLmRlY29kZShhLmFiaV9tX3R0bCk7XHJcbiAgICAgICAgaWYgKGEuYWJpX3Bfbm93ICE9PSB1bmRlZmluZWQpIHRoaXMuYWJpX3Aubm93LmRlY29kZShhLmFiaV9wX25vdyk7XHJcbiAgICAgICAgaWYgKGEuYWJpX21fbm93ICE9PSB1bmRlZmluZWQpIHRoaXMuYWJpX20ubm93LmRlY29kZShhLmFiaV9tX25vdyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfX2RlY29kZV92YWwoZDogSlNPTl9IZXJvX1ZhbHVlLCBzOiBKU09OX0hlcm9fVmFsdWUpOiB2b2lkIHtcclxuICAgICAgICBpZiAocy5za3AgIT09IHVuZGVmaW5lZCkgZC5za3AgPSB0aGlzLl9fZGVjb2RlX3NrZXgoZC5za3AsIHMuc2twKTtcclxuICAgICAgICBpZiAocy5leHAgIT09IHVuZGVmaW5lZCkgZC5leHAgPSB0aGlzLl9fZGVjb2RlX3NrZXgoZC5leHAsIHMuZXhwKTtcclxuICAgICAgICBpZiAocy5ueGUgIT09IHVuZGVmaW5lZCkgZC5ueGUgPSBzLm54ZTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2RlY29kZV9za2V4KGE6IHt0dGw/OiBudW1iZXIsIG5vdz86IG51bWJlcn0gfCB1bmRlZmluZWQsIHM6IHt0dGw/OiBudW1iZXIsIG5vdz86IG51bWJlcn0pOiB7dHRsOiBudW1iZXIsIG5vdzogbnVtYmVyfSB7XHJcbiAgICAgICAgdmFyIGQ6IHt0dGw6IG51bWJlciwgbm93OiBudW1iZXJ9O1xyXG4gICAgICAgIGlmICAgICAoYSA9PT0gdW5kZWZpbmVkKSBkID0ge3R0bDogMCwgbm93OiAwfTtcclxuICAgICAgICBlbHNlICAgIGQgPSB7dHRsOiBhPy50dGwgPz8gMCwgbm93OiBhPy5ub3cgPz8gMH07XHJcblxyXG4gICAgICAgIGQudHRsID0gcy50dGwgPz8gZC50dGw7XHJcbiAgICAgICAgZC5ub3cgPSBzLm5vdyA/PyBzLnR0bCA/PyBkLm5vdztcclxuICAgICAgICByZXR1cm4gZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGVuY29kZV9oZXJvZXMoaGVyb2VzOiBDX0hlcm9bXSk6IEpTT05fSGVyb1tdIHtcclxuICAgICAgICBjb25zdCBoZXJvZXNfZGF0YSA9IFtdIGFzIEpTT05fSGVyb1tdO1xyXG4gICAgICAgIGZvciAodmFyIGhlcm8gb2YgaGVyb2VzKSB7XHJcbiAgICAgICAgICAgIGhlcm9lc19kYXRhLnB1c2goaGVyby5lbmNvZGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoZXJvZXNfZGF0YTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVjb2RlX2hlcm9lcyhoZXJvZXNfZGF0YTogKEpTT05fSGVyb3x1bmRlZmluZWQpW118dW5kZWZpbmVkKTogQ19IZXJvW10ge1xyXG4gICAgICAgIGNvbnN0IGhlcm9lcyA9IFtdIGFzIENfSGVyb1tdO1xyXG4gICAgICAgIGlmIChoZXJvZXNfZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGhlcm9fZGF0YSBvZiBoZXJvZXNfZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhlcm9fZGF0YSAhPT0gdW5kZWZpbmVkKSBoZXJvZXMucHVzaChuZXcgQ19IZXJvKCkuZGVjb2RlKGhlcm9fZGF0YSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoZXJvZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFsZXJ0KCk6IHZvaWQgeyBcclxuICAgICAgICBhbGVydChcIkhlcm8gSW5mbzpcXG5cIiBcclxuICAgICAgICAgICAgKyBcIlxcbmlkOiAgICAgICBcIiAgICAgKyAodGhpcy5pZCAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudW5pcV9pZCAgIFwiICAgICArICh0aGlzLnVuaXFfaWQgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5uYW1lOiAgICAgXCIgICAgICsgKHRoaXMubmFtZSAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNhdmVfaWQ6ICBcIiAgICAgKyAodGhpcy5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuaXNfYWxpdmU6IFwiICAgICArICh0aGlzLmlzX2FsaXZlICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGFsZXJ0X2hyZXMoYTogKENfSGVyb3x1bmRlZmluZWQpW118dW5kZWZpbmVkKTogdm9pZCB7IFxyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICBhbGVydCgnTnVtYmVyIG9mIEhlcm8gPSAnICsgYS5sZW5ndGgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBhKSBhW2ldPy5hbGVydCgpO1xyXG4gICAgfVxyXG59IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBJX0pTT04sIEpTT05fQW55IH0gZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5pbXBvcnQgeyBfcm91bmQgfSAgICAgICAgICAgZnJvbSBcIi4uL2RfdXRsL0ZfTWF0aFwiO1xyXG5pbXBvcnQgeyBfaW5yYW5kIH0gZnJvbSBcIi4uL2RfdXRsL0ZfUmFuZFwiO1xyXG5cclxuLy8g5LiA6Iis44Gr5L2/44GI44KL44Om44O844OG44Kj44Oq44OG44Kj44Gq5ZGq5paHXHJcbi8vIOOCquODluOCuOOCp+OCr+ODiOOCkuWIl+aMmeWei+OBqOOBl+OBpuWei+WMluOBmeOCi+OBruOBq+WIqeeUqFxyXG50eXBlIFRfSGVyb0FiaWxpdHkgPSB7W2tleTogc3RyaW5nXTogbnVtYmVyfTtcclxuZXhwb3J0IGludGVyZmFjZSBKU09OX0hlcm9fQWJpbGl0eSBleHRlbmRzIEpTT05fQW55IHtba2V5OiBzdHJpbmddOiBudW1iZXJ9XHJcblxyXG5leHBvcnQgY2xhc3MgQ19IZXJvQWJpbGl0eSBpbXBsZW1lbnRzIElfSlNPTiB7XHJcbiAgICBwcm90ZWN0ZWQgdjogVF9IZXJvQWJpbGl0eSA9IHtcclxuICAgICAgICB4cDogIDAsICAvLyBwOkhQ44CBbTpNUFxyXG4gICAgICAgIHhkOiAgMCwgIC8vIOS4iuiomOOBruODgOODoeODvOOCuOmHj1xyXG5cclxuICAgICAgICAvLyDku6XkuIvjgIHmiKbpl5jog73lipvjga7ln7rmnKzlgKQocDrniannkIbjgIFtOumtlOazlSnjgILjg5Ljg7zjg63jg7zjg6zjg5njg6vjgoTjgrnjg4bjg7zjgr/jgrnjgqLjg4Pjg5fjgafliqDnrpcgXHJcbiAgICAgICAgYXRrOiAwLCAgLy8g5pS75pKD5YCkXHJcbiAgICAgICAgZGVmOiAwLCAgLy8g6Ziy5b6h5YCkXHJcbiAgICAgICAgcXVjOiAwLCAgLy8g556s55m65YqbXHJcbiAgICAgICAgY25jOiAwLCAgLy8g5qmf6YGL5YCkKOODgeODo+ODs+OCuSlcclxuICAgIFxyXG4gICAgICAgIC8vIOS7peS4i+OAgeOBhOOCj+OChuOCi+OCueODhuODvOOCv+OCueOAguS4iuiomOOBruioiOeul+OBq+W9semfv+OAguODkuODvOODreODvOODrOODmeODq+OChOOCueODhuODvOOCv+OCueOCouODg+ODl+OBp+WKoOeul1xyXG4gICAgICAgIHN0cjogMCwgIC8vIOagueaAp+OAguaUu+aSgy/pmLLlvqHlipvjgavjgoLlvbHpn7/jgIJIUC9NUOWbnuW+qeOChOOCouOCpOODhuODoOOBruacgOWkp+aJgOaMgemHjemHj+OBq+ODnOODvOODiuOCuVxyXG4gICAgICAgIHB3cjogMCwgIC8vIOWfuuacrOeahOW8t+OBleOAguaUu+aSg+WKm+OBq+W9semfv1xyXG4gICAgICAgIHZpdDogMCwgIC8vIOiAkOS5heWKm+OAgkhQL01Q44Gu5pyA5aSn5YCk44KE6Ziy5b6h5Yqb44CB5Zue5b6p5YCk44Gr5b2x6Z+/44KS5LiO44GI44KLXHJcbiAgICAgICAgZGV4OiAwLCAgLy8g5Zmo55So44GV44CC5ZG95Lit546H44Gr5b2x6Z+/44KS5LiO44GI44KL44CC6aOb44Gz6YGT5YW344KE6ZW36Led6Zui6a2U5rOV44Gn44Gv54m544Gr5b2x6Z+/44CC572g6Kej6Zmk44Gr44KC5b2x6Z+/XHJcbiAgICAgICAgYWdpOiAwLCAgLy8g57Sg5pep44GV44CC6KGM5YuV6YCf5bqm44KE5Zue6YG/546H44Gr5b2x6Z+/44KS5LiO44GI44KL44CC5ZG95Lit546H44Gr44KC5b2x6Z+/XHJcbiAgICAgICAgdGVjOiAwLCAgLy8g5oqA6KGT5Yqb44CC57WM6aiT44Gn5ZCR5LiK44GX44Gm6IO95Yqb5YCkKHF1Yy9jbmMp44Gr44Oc44O844OK44K544KS5LiO44GI44KLXHJcbiAgICAgICAgbHVrOiAwLCAgLy8g5bm46YGL5YCk44CCY25j44Gr5aSn44GN44GP5b2x6Z+/44GZ44KLXHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihhPzogSlNPTl9IZXJvX0FiaWxpdHkpIHtcclxuICAgICAgICBmb3IgKGxldCBpZHggaW4gdGhpcy52KSB7dGhpcy52W2lkeF0gPSAwO31cclxuICAgICAgICBpZiAoYSAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAoIShrZXkgaW4gdGhpcy52KSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gdGhpcy52W2tleV07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCB2YWw6IG51bWJlcik6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKCEoa2V5IGluIHRoaXMudikpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy52W2tleV0gPSB2YWw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudltrZXldO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldEFueShrZXk6IHN0cmluZywgczogSlNPTl9IZXJvX0FiaWxpdHkpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpZHggaW4gcykge1xyXG4gICAgICAgICAgICBpZiAoIShpZHggaW4gdGhpcy52KSkgY29udGludWU7XHJcbiAgICAgICAgICAgIHRoaXMudltrZXldID0gc1trZXldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKGE6IEpTT05fSGVyb19BYmlsaXR5KTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGEpIHtcclxuICAgICAgICAgICAgdGhpcy52W2tleV0gKz0gYVtrZXldO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBjYWxjX3hwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudi54cCAgPSAgTWF0aC5jZWlsKCAyMCp0aGlzLnYuc3RyICsgMjAqdGhpcy52LnZpdCArIDUqdGhpcy52LnRlYyArIDUqdGhpcy52Lmx1ayApO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjYWxjX2VsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudi5hdGsgPSAgTWF0aC5jZWlsKCAyKnRoaXMudi5zdHIgKyAyKnRoaXMudi5wd3IgKyAxKnRoaXMudi50ZWMgKTtcclxuICAgICAgICB0aGlzLnYuZGVmID0gIE1hdGguY2VpbCggMip0aGlzLnYuc3RyICsgMip0aGlzLnYudml0ICsgMSp0aGlzLnYudGVjICk7XHJcbiAgICAgICAgdGhpcy52LnF1YyA9ICBNYXRoLmNlaWwoIDIqdGhpcy52LmRleCArIDIqdGhpcy52LmFnaSArIDEqdGhpcy52LnRlYyApO1xyXG4gICAgICAgIHRoaXMudi5jbmMgPSAgTWF0aC5jZWlsKCAzKnRoaXMudi5sdWsgICAgICAgICAgICAgICAgKyAyKnRoaXMudi50ZWMgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmFuZG9tX21ha2UoaGVsb19sZXZlbDogbnVtYmVyID0gMCk6IENfSGVyb0FiaWxpdHkge1xyXG5cclxuICAgICAgICBjb25zdCBobCAgID0gaGVsb19sZXZlbCArIDE7IC8vIOODkuODvOODreODvOODrOODmeODq+OBruWIneacn+WApFxyXG5cclxuICAgICAgICB0aGlzLnYuc3RyID0gIF9pbnJhbmQoNSwgICAyMCwgMi4wKSAqIGhsO1xyXG4gICAgICAgIHRoaXMudi5wd3IgPSAgX2lucmFuZCg1LCAgIDIwLCAyLjApICogaGw7XHJcbiAgICAgICAgdGhpcy52LnZpdCA9ICBfaW5yYW5kKDUsICAgMjAsIDIuMCkgKiBobDtcclxuICAgICAgICB0aGlzLnYuZGV4ID0gIF9pbnJhbmQoNSwgICAyMCwgMi4wKSAqIGhsO1xyXG4gICAgICAgIHRoaXMudi5hZ2kgPSAgX2lucmFuZCg1LCAgIDIwLCAyLjApICogaGw7XHJcbiAgICAgICAgdGhpcy52LnRlYyA9ICBfaW5yYW5kKDUsICAgMjAsIDIuMCkgKiBobDtcclxuICAgICAgICB0aGlzLnYubHVrID0gIF9pbnJhbmQoNSwgICAyMCwgMi4wKSAqIGhsO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnYueGQgID0gIDA7XHJcblxyXG4gICAgICAgIHRoaXMuY2FsY194cCgpO1xyXG4gICAgICAgIHRoaXMuY2FsY19lbCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fSGVyb19BYmlsaXR5IHtcclxuICAgICAgICBjb25zdCBhOiBKU09OX0hlcm9fQWJpbGl0eSA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnYpIGFba2V5XSA9IHRoaXMudltrZXldO1xyXG4gICAgICAgIHJldHVybiBhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX0hlcm9fQWJpbGl0eSk6IENfSGVyb0FiaWxpdHkge1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgaW4gdGhpcy52ICYmIGFba2V5XSAhPT0gdW5kZWZpbmVkKSB0aGlzLnZba2V5XSA9IGFba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjbG9uZShzOiBDX0hlcm9BYmlsaXR5KTogQ19IZXJvQWJpbGl0eSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX0hlcm9BYmlsaXR5KHMuZW5jb2RlKCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX1BvaW50IH0gICAgICAgICAgICAgICAgICAgZnJvbSAnLi9DX1BvaW50JztcclxuaW1wb3J0IHsgQ19Qb2ludERpciwgSlNPTl9Qb2ludERpciB9IGZyb20gJy4vQ19Qb2ludERpcic7XHJcbmltcG9ydCB7IFRfRGlyZWN0aW9uIH0gICAgICAgICAgICAgICBmcm9tICcuL0NfUG9pbnREaXInO1xyXG5pbXBvcnQgeyBJX0pTT04sIEpTT05fQW55IH0gICAgICAgICAgZnJvbSAnLi9DX1NhdmVJbmZvJztcclxuaW1wb3J0IHsgVF9NYWtlRW51bVR5cGUgfSAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9UX01ha2VFbnVtVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRfTGNrZDp7W2xja2Q6IHN0cmluZ106IG51bWJlcn0gID0ge1xyXG4gICAgVW5rbjogMCxcclxuICAgIE1hemU6IDEsXHJcbiAgICBHdWxkOiAyLFxyXG59IGFzIGNvbnN0O1xyXG5leHBvcnQgdHlwZSBUX0xja2QgICA9IFRfTWFrZUVudW1UeXBlPHR5cGVvZiBUX0xja2Q+O1xyXG5cclxuZnVuY3Rpb24gX2xja2Rfa2V5KGxja2Q6IFRfTGNrZCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoVF9MY2tkKS5maW5kKGtleSA9PiBUX0xja2Rba2V5XSA9PT0gbGNrZCkgPz8gXCI/Pz8/XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9Mb2NhdGlvbiBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGtpbmQ/OiAgICBzdHJpbmcsXHJcbiAgICBuYW1lPzogICAgc3RyaW5nLFxyXG4gICAgbG9jX3VpZD86IHN0cmluZyxcclxuICAgIGxvY19wb3M/OiBKU09OX1BvaW50RGlyLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElfTG9jYXRlIHtcclxuICAgIHVpZDogICAgICAoKT0+c3RyaW5nO1xyXG4gICAgZ2V0X2xja2Q6ICgpPT5UX0xja2Q7XHJcbiAgICBnZXRfbmFtZTogKCk9PnN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfTG9jYXRpb24gaW1wbGVtZW50cyBJX0pTT04ge1xyXG4gICAgcHJvdGVjdGVkIGxvY19raW5kOiBUX0xja2QgPSBUX0xja2QuVW5rbjtcclxuICAgIHByb3RlY3RlZCBsb2NfbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBwcm90ZWN0ZWQgbG9jX3VpZDogIHN0cmluZyA9ICcnO1xyXG4gICAgcHJvdGVjdGVkIGxvY19wb3M6ICBDX1BvaW50RGlyID0gbmV3IENfUG9pbnREaXIoKTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoanNvbj86IEpTT05fTG9jYXRpb24pIHtcclxuICAgICAgICBpZiAoanNvbiAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShqc29uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X2xja2Rfc3RyKCk6IHN0cmluZyAge3JldHVybiBfbGNrZF9rZXkodGhpcy5sb2Nfa2luZCk7fVxyXG4gICAgcHVibGljIGdldF9sY2tkKCk6IFRfTGNrZCAgICAgIHtyZXR1cm4gdGhpcy5sb2Nfa2luZDt9XHJcbiAgICBwdWJsaWMgZ2V0X25hbWUoKTogc3RyaW5nICAgICAge3JldHVybiB0aGlzLmxvY19uYW1lO31cclxuICAgIHB1YmxpYyBnZXRfdWlkKCk6ICBzdHJpbmcgICAgICB7cmV0dXJuIHRoaXMubG9jX3VpZDt9XHJcblxyXG4gICAgcHVibGljIHNldF9sY2tkKGxja2Q6IFRfTGNrZCk6IENfTG9jYXRpb258dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAoIShfbGNrZF9rZXkobGNrZCkgaW4gVF9MY2tkKSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmxvY19raW5kID0gbGNrZDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfbmFtZShuYW1lOiBzdHJpbmcpOiAgIHZvaWQge3RoaXMubG9jX25hbWUgPSBuYW1lO31cclxuICAgIHB1YmxpYyBzZXRfdWlkICh1aWQ6IHN0cmluZyk6ICAgIHZvaWQge3RoaXMubG9jX3VpZCAgPSB1aWQ7fVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc2V0X2xja2Rfc3RyKGxja2Q6IHN0cmluZyk6IENfTG9jYXRpb258dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAoIShsY2tkIGluIFRfTGNrZCkpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5sb2Nfa2luZCA9IFRfTGNrZFtsY2tkXTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldF9wKCk6IENfUG9pbnQgICAgIHtcclxuLy8gICAgICAgIGlmICh0aGlzLmxvY19raW5kICE9IFRfTGNrZC5NYXplKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY19wb3MuZ2V0X3AoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfZCgpOiBUX0RpcmVjdGlvbiB7XHJcbi8vICAgICAgICBpZiAodGhpcy5sb2Nfa2luZCAhPSBUX0xja2QuTWF6ZSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NfcG9zLmdldF9kKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BkKCk6IENfUG9pbnREaXIge1xyXG4vLyAgICAgICAgaWYgKHRoaXMubG9jX2tpbmQgIT0gVF9MY2tkLk1hemUpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jX3Bvcy5nZXRfcGQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0X3AgICAocDogQ19Qb2ludERpcik6IENfUG9pbnREaXJ8dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAodGhpcy5sb2Nfa2luZCAhPT0gVF9MY2tkLk1hemUpICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAodGhpcy5sb2NfcG9zLnNldF9wKHApID09PSB1bmRlZmluZWQpICByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NfcG9zO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9kICAgKGQ6IFRfRGlyZWN0aW9uKTogVF9EaXJlY3Rpb258dW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAodGhpcy5sb2Nfa2luZCAhPT0gVF9MY2tkLk1hemUpICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAodGhpcy5sb2NfcG9zLnNldF9kKGQpID09PSB1bmRlZmluZWQpICByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NfcG9zLmQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BkICAocGQ6IENfUG9pbnREaXIpOiBDX1BvaW50RGlyfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jX2tpbmQgIT09IFRfTGNrZC5NYXplKSAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICh0aGlzLmxvY19wb3Muc2V0X3BkKHBkKSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NfcG9zO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTG9jYXRpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGtpbmQ6ICAgICBfbGNrZF9rZXkodGhpcy5sb2Nfa2luZCksXHJcbiAgICAgICAgICAgIG5hbWU6ICAgICB0aGlzLmxvY19uYW1lLFxyXG4gICAgICAgICAgICBsb2NfdWlkOiAgdGhpcy5sb2NfdWlkLFxyXG4gICAgICAgICAgICBsb2NfcG9zOiAgdGhpcy5sb2NfcG9zLmVuY29kZSgpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo/OiBKU09OX0xvY2F0aW9uKTogQ19Mb2NhdGlvbiB7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKGoua2luZCA9PT0gdW5kZWZpbmVkIHx8ICEoai5raW5kIGluIFRfTGNrZCkpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoai5raW5kICAgICE9PSB1bmRlZmluZWQpIHRoaXMubG9jX2tpbmQgPSBUX0xja2Rbai5raW5kXTtcclxuICAgICAgICBpZiAoai5uYW1lICAgICE9PSB1bmRlZmluZWQpIHRoaXMubG9jX25hbWUgPSBqLm5hbWU7XHJcbiAgICAgICAgaWYgKGoubG9jX3VpZCAhPT0gdW5kZWZpbmVkKSB0aGlzLmxvY191aWQgID0gai5sb2NfdWlkO1xyXG4gICAgICAgIGlmIChqLmxvY19wb3MgIT09IHVuZGVmaW5lZCkgdGhpcy5sb2NfcG9zLmRlY29kZShqLmxvY19wb3MpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IFRfTXpLaW5kIH0gICAgICAgICAgICAgIGZyb20gXCIuL1RfTXpLaW5kXCI7XHJcbmltcG9ydCB7IENfTWF6ZUNlbGwgfSAgICAgICAgICAgIGZyb20gXCIuL0NfTWF6ZUNlbGxcIjtcclxuaW1wb3J0IHsgQ19NYXplT2JqLCBJX01hemVPYmosIEpTT05fTWF6ZU9iaiB9IGZyb20gXCIuL0NfTWF6ZU9ialwiO1xyXG5pbXBvcnQgeyBDX1BvaW50IH0gICAgICAgICAgICAgICBmcm9tIFwiLi9DX1BvaW50XCI7XHJcbmltcG9ydCB7IElfTG9jYXRlLCBUX0xja2QgfSAgICAgIGZyb20gXCIuL0NfTG9jYXRpb25cIjtcclxuaW1wb3J0IHsgQ19SYW5nZSB9ICAgICAgICAgICAgICAgZnJvbSBcIi4vQ19SYW5nZVwiO1xyXG5pbXBvcnQgeyBDX1RlYW0sIEpTT05fVGVhbSB9ICAgICBmcm9tIFwiLi9DX1RlYW1cIjtcclxuaW1wb3J0IHsgSV9KU09OX1VuaXEsIEpTT05fQW55IH0gZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5pbXBvcnQgeyBfZ2V0X3V1aWQsIF9pZ3JhbmQsIF9pcmFuZCB9ICAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuaW1wb3J0IHsgX21pbiB9IGZyb20gXCIuLi9kX3V0bC9GX01hdGhcIjtcclxuaW1wb3J0IHsgQ19Qb2ludERpciB9IGZyb20gXCIuL0NfUG9pbnREaXJcIjtcclxuaW1wb3J0IHsgVF9EaXJlY3Rpb24gfSBmcm9tIFwiLi9UX0RpcmVjdGlvblwiO1xyXG5pbXBvcnQgeyBDX1BvaW50TGluazJELCBDX1BvaW50U2V0MkQgfSBmcm9tIFwiLi9DX1BvaW50U2V0MkRcIjtcclxuaW1wb3J0IHsgbmV3X01hemVPYmogfSBmcm9tIFwiLi9DX01hemVPYmpDb21tb25cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9NYXplIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgaWQ/OiAgICAgIG51bWJlcixcclxuICAgIHVuaXFfaWQ/OiBzdHJpbmcsXHJcbiAgICBzYXZlX2lkPzogbnVtYmVyLFxyXG4gICAgZmxvb3I/OiAgIG51bWJlcixcclxuICAgIG5hbWU/OiAgICBzdHJpbmcsXHJcbiAgICBzaXplX3g/OiAgbnVtYmVyLFxyXG4gICAgc2l6ZV95PzogIG51bWJlcixcclxuICAgIHNpemVfej86ICBudW1iZXIsXHJcbiAgICBtYXplPzogICAgc3RyaW5nLCBcclxuICAgIG1hc2s/OiAgICBzdHJpbmcsIFxyXG4gICAgbXl0ZWFtPzogIEpTT05fVGVhbSwgXHJcbiAgICBvYmpzPzogICAgSlNPTl9NYXplT2JqW10sXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfbWF6ZV9pbmZvKGE6IEpTT05fTWF6ZXx1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICBhbGVydChcIk1hemUgSW5mbzpcIlxyXG4gICAgICAgICsgXCJcXG5tYXplIGlkIDpcIiArIChhLmlkICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5mbG9vcjogXCIgICArIChhLmZsb29yICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG51bmlxIGlkIDpcIiArIChhLnVuaXFfaWQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zYXZlIGlkIDpcIiArIChhLnNhdmVfaWQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5uYW1lOiAgIFwiICArIChhLm5hbWUgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3g6IFwiICArIChhLnNpemVfeCAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3k6IFwiICArIChhLnNpemVfeSAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3o6IFwiICArIChhLnNpemVfeiAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJtYXplOlxcblwiICAgICArIChhLm1hemUgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJtYXNrOlxcblwiICAgICArIChhLm1hc2sgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbnR5cGUgX2luaXRfYXJnID0ge1xyXG4gICAgbWF6ZV9pZD86IG51bWJlcixcclxuICAgIHNhdmVfaWQ/OiBudW1iZXIsXHJcbiAgICBmbG9vcj86ICAgbnVtYmVyLFxyXG4gICAgbmFtZT86ICAgIHN0cmluZyxcclxuICAgIHNpemVfeD86ICBudW1iZXIsXHJcbiAgICBzaXplX3k/OiAgbnVtYmVyLFxyXG4gICAgc2l6ZV96PzogIG51bWJlcixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfTWF6ZSBpbXBsZW1lbnRzIElfTG9jYXRlLCBJX0pTT05fVW5pcSB7XHJcbiAgICBwcm90ZWN0ZWQgbWF6ZV9pZDogIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCB1bmlxX2lkOiAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHNhdmVfaWQ6ICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgZmxvb3I6ICAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBuYW1lOiAgICAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIG15X2xheWVyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJvdGVjdGVkIHNpemU6ICAgICBDX1JhbmdlO1xyXG4gICAgcHJvdGVjdGVkIGNlbGxzOiAgICBDX01hemVDZWxsW11bXVtdO1xyXG4gICAgcHJvdGVjdGVkIG1hc2tzOiAgICBib29sZWFuW11bXVtdO1xyXG4gICAgcHJvdGVjdGVkIHVuY2xlYXI6ICBudW1iZXJbXTtcclxuICAgIHByb3RlY3RlZCBvYmpzOiAgICAge1t1aWQ6IHN0cmluZ106IElfTWF6ZU9ian07XHJcbiAgICBwcm90ZWN0ZWQgbnVtX29mX3Jvb206ICAgICAgbnVtYmVyID0gNTsgLyog44Op44Oz44OA44Og55Sf5oiQ44Gu6Zqb44Gu6YOo5bGL44Gu5pWw44Gu5pyA5aSn5pWwICovXHJcbiAgICBwcm90ZWN0ZWQgbWF4X3NpemVfb2Zfcm9vbTogbnVtYmVyID0gMzsgLyog44Op44Oz44OA44Og55Sf5oiQ44Gu6Zqb44Gu6YOo5bGL44Gu5aSn44GN44GVICovXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGE/OiBfaW5pdF9hcmcpIHtcclxuICAgICAgICB0aGlzLm1hemVfaWQgPSAtMTtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgPSAtMTtcclxuICAgICAgICB0aGlzLnVuaXFfaWQgPSAnbWFpX21hemUjJyArIF9nZXRfdXVpZCgpO1xyXG4gICAgICAgIHRoaXMuZmxvb3IgICA9IDA7XHJcbiAgICAgICAgdGhpcy5uYW1lICAgID0gJyc7XHJcbiAgICAgICAgdGhpcy5zaXplICAgID0gbmV3IENfUmFuZ2UoXHJcbiAgICAgICAgICAgIG5ldyBDX1BvaW50KDAsIDAsIDApLCBcclxuICAgICAgICAgICAgbmV3IENfUG9pbnQoMiwgMiwgMikpO1xyXG4gICAgICAgIHRoaXMuY2VsbHMgICA9IHRoaXMuX19pbml0X21hemUoVF9NektpbmQuU3RvbmUpO1xyXG5cclxuICAgICAgICB0aGlzLm1hc2tzICAgPSB0aGlzLl9faW5pdF9tYXNrKHRydWUpO1xyXG4gICAgICAgIHRoaXMudW5jbGVhciA9IFtdO1xyXG4gICAgICAgIHRoaXMuX19pbml0X3VuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5vYmpzICAgID0ge307XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgdGhpcy5kZWNvZGUoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9faW5pdF9tYXplKGtpbmQ6IFRfTXpLaW5kID0gVF9NektpbmQuU3RvbmUpOiBDX01hemVDZWxsW11bXVtdIHtcclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeiA9IHRoaXMuc2l6ZS5zaXplX3ooKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2VsbHM6IENfTWF6ZUNlbGxbXVtdW10gPSBBcnJheShzaXplX3opIGFzIENfTWF6ZUNlbGxbXVtdW107XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBzaXplX3o7IHorKykge1xyXG4gICAgICAgICAgICBjZWxsc1t6XSA9IEFycmF5KHNpemVfeSkgYXMgQ19NYXplQ2VsbFtdW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGNlbGxzW3pdW3ldICA9IEFycmF5KHNpemVfeCkgYXMgQ19NYXplQ2VsbFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxzW3pdW3ldW3hdID0gQ19NYXplQ2VsbC5uZXdPYmooe2tpbmQ6a2luZCwgcG9zOiB7eDp4LCB5OnksIHo6en19KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2VsbHM7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX19pbml0X21hc2soWU46IGJvb2xlYW4pOiBib29sZWFuW11bXVtdIHtcclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeiA9IHRoaXMuc2l6ZS5zaXplX3ooKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXNrcyAgID0gQXJyYXkoc2l6ZV96KSBhcyBib29sZWFuW11bXVtdO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgdGhpcy5tYXNrc1t6XSA9IEFycmF5KHNpemVfeSkgYXMgYm9vbGVhbltdW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFza3Nbel1beV0gID0gQXJyYXkoc2l6ZV94KSBhcyBib29sZWFuW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrc1t6XVt5XVt4XSA9IFlOO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLm1hc2tzO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9faW5pdF91bmNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgICAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV96ID0gdGhpcy5zaXplLnNpemVfeigpO1xyXG5cclxuICAgICAgICB0aGlzLnVuY2xlYXIgPSBBcnJheShzaXplX3opO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgdGhpcy51bmNsZWFyW3pdPTA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXNrc1t6XVt5XVt4XSkgdGhpcy51bmNsZWFyW3pdKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHVpZCgpOiBzdHJpbmcgICAgICB7cmV0dXJuIHRoaXMudW5pcV9pZH1cclxuICAgIHB1YmxpYyBnZXRfbGNrZCgpOiBUX0xja2Qge3JldHVybiBUX0xja2QuTWF6ZX1cclxuICAgIHB1YmxpYyBnZXRfbmFtZSgpOiBzdHJpbmcge3JldHVybiB0aGlzLm5hbWV9XHJcblxyXG4gICAgcHVibGljIHdpdGhpbihwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZS53aXRoaW4ocCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIOODoeOCpOOCuuWGheOBruOCquODluOCuOOCp+OCr+ODiOOChOODouODs+OCueOCv+ODvOetieOBrumFjee9rlxyXG4gICAgcHVibGljIGFkZF9vYmoob2JqOiBJX01hemVPYmopOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9ianNbb2JqLnVpZCgpXSA9IG9iajtcclxuICAgIH1cclxuICAgIHB1YmxpYyBybXZfb2JqKG9iajogSV9NYXplT2JqKTogdm9pZCB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMub2Jqc1tvYmoudWlkKCldO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9vYmpfYXJyYXkoKTogSV9NYXplT2JqW10ge1xyXG4gICAgICAgIGNvbnN0IG9ial9hcnJheTogSV9NYXplT2JqW10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGlkIGluIHRoaXMub2JqcykgIG9ial9hcnJheS5wdXNoKHRoaXMub2Jqc1tpZF0pO1xyXG4gICAgICAgIHJldHVybiBvYmpfYXJyYXk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X29ial94eXooeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcik6IElfTWF6ZU9ianxudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRfb2JqKG5ldyBDX1BvaW50KHgsIHksIHopKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfb2JqKHA6IENfUG9pbnQpOiBJX01hemVPYmp8bnVsbCB7XHJcbiAgICAgICAgdmFyIGxheWVyID0gLTE7XHJcbiAgICAgICAgdmFyIG9iajogSV9NYXplT2JqfG51bGwgICA9IG51bGw7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgaWQgaW4gdGhpcy5vYmpzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0ID0gdGhpcy5vYmpzW2lkXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChleGlzdC52aWV3KCkgPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChleGlzdC53aXRoaW4ocCkgJiYgZXhpc3QudmlldygpPy5sZXR0ZXIoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RfbGF5ZXIgPSBleGlzdC52aWV3KCk/LmxheWVyKCk/Py05OTtcclxuICAgICAgICAgICAgICAgIGlmIChleGlzdF9sYXllciA+IGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXIgPSBleGlzdF9sYXllcjtcclxuICAgICAgICAgICAgICAgICAgICBvYmogICA9IGV4aXN0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGV4aXN0X29iaihwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpZCBpbiB0aGlzLm9ianMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3QgPSB0aGlzLm9ianNbaWRdO1xyXG4gICAgICAgICAgICBpZiAoZXhpc3Qud2l0aGluKHApICYmIGV4aXN0LnZpZXcoKT8ubGV0dGVyKCkgIT09IG51bGwpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGVhbeOBjOadpeOBn+ODneOCpOODs+ODiOOBjOacqui4j+WcsOOBoOOBo+OBn+OCieOBn+OBoOOBruW6iuOBq+WkieOBiOOCi1xyXG4gICAgcHVibGljIGNoYW5nZV91bmV4cF90b19mbG9vcihwOiBDX1BvaW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0X2tpbmQocCkgPT0gVF9NektpbmQuVW5leHApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRfY2VsbChwLCBUX016S2luZC5GbG9vcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIDJE44Oe44OD44OX44Gu44Oe44K544Kv5aSW44GX6Zai6YCjXHJcbiAgICBwdWJsaWMgY2xlYXJfbWFza19hcm91bmRfdGhlX3RlYW0odGVhbTogQ19UZWFtKTogdm9pZCB7XHJcbiAgICAgICAgLy8g54++5Zyo5Zyw44Go55yf5qiq44Gv6Ieq5YuV55qE44Gr6KaL44GI44KLXHJcbiAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZCgwLCAtMSkpO1xyXG4gICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoMCwgIDApKTtcclxuICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayh0ZWFtLndhbGsoKS5nZXRfYXJvdW5kKDAsICAxKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlcHRoICAgPSAgNTsgLy8gMkTjg57jg4Pjg5fnlKjjga7lpaXooYzjgY3pmZDnlYxcclxuXHJcbiAgICAgICAgLy8g5YmN5pa544Gu6KaL6YCa44GX44KS44OB44Kn44OD44Kv44GX44Gq44GM44KJ6KaL44GI44KL44Go44GT44KN44Gv6Kej5pS+44GZ44KLXHJcbiAgICAgICAgZm9yICh2YXIgZCA9IDE7IGQgPCBkZXB0aDsgZCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyb250X3BvcyA9IHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgMClcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNfbW92YWJsZShmcm9udF9wb3MpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmraPpnaLjgavpmpzlrrPnianjgYznhKHjgZHjgozjgbDjgIHjgZ3jga7kuKHlgbTjgoLopovjgYjjgotcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgLTEpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgIDApKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKHRlYW0ud2FsaygpLmdldF9hcm91bmQoZCwgIDEpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOato+mdouOBjOmanOWus+eJqeOBp+OCguOBneOBruaJi+WJjeOBvuOBp+imi+OBiOOBpuOBn+OBquOCieOAgeOBneOBruWjgeOBqOS4oeWBtOOBr+imi+OBiOOCi1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAtMSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAgMCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2sodGVhbS53YWxrKCkuZ2V0X2Fyb3VuZChkLCAgMSkpO1xyXG4gICAgICAgICAgICAgICAgLy8g5q2j6Z2i44Gr6Zqc5a6z54mp44GM5pyJ44Gj44Gf44KJ44Gd44Gu5aWl44Gv6KaL44GI44Gq44GE44Gu44Gn5o6i57Si57WC5LqGXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2NsZWFyX21hc2soY2xyX3BvczogQ19Qb2ludCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5zaXplLndpdGhpbihjbHJfcG9zKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tYXNrc1tjbHJfcG9zLnpdW2Nscl9wb3MueV1bY2xyX3Bvcy54XSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hc2tzW2Nscl9wb3Muel1bY2xyX3Bvcy55XVtjbHJfcG9zLnhdID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudW5jbGVhcltjbHJfcG9zLnpdLS07XHJcbiAgICAgICAgfSAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNfZmxvb3JfY2xlYXJlZChjbHJfcG9zOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudW5jbGVhcltjbHJfcG9zLnpdIDwgMTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNfbWF6ZV9jbGVhcmVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgY2xyIG9mIHRoaXMudW5jbGVhcikgaWYgKGNsciA+IDApIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNfbWFza2VkKHA6IENfUG9pbnQpOiBib29sZWFuIHtyZXR1cm4gdGhpcy5pc19tYXNrZWRfeHl6KHAueCwgcC55LCBwLnopfVxyXG4gICAgcHVibGljIGlzX21hc2tlZF94eXooeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hc2tzW3pdW3ldW3hdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc19tb3ZhYmxlKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2l6ZS53aXRoaW4ocCkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZ2V0X2tpbmQocCkpIHtcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5GbG9vcjpcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5VbmV4cDpcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVcDpcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJEbjpcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVRDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIHB1YmxpYyBnZXRfeF9tYXgoKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5zaXplLnNpemVfeCgpO31cclxuICAgIHB1YmxpYyBnZXRfeV9tYXgoKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5zaXplLnNpemVfeSgpO31cclxuICAgIHB1YmxpYyBnZXRfel9tYXgoKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5zaXplLnNpemVfeigpO31cclxuICAgIHB1YmxpYyBnZXRfa2luZCAocDogQ19Qb2ludCk6IFRfTXpLaW5kIHtcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbihwKSkgcmV0dXJuIHRoaXMuY2VsbHNbcC56XVtwLnldW3AueF0uZ2V0S2luZCgpO1xyXG4gICAgICAgIHJldHVybiBUX016S2luZC5Ob0RlZjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfa2luZF94eXogKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpOiBUX016S2luZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2l6ZS53aXRoaW4oeCwgeSwgeikpIHJldHVybiB0aGlzLmNlbGxzW3pdW3ldW3hdLmdldEtpbmQoKTtcclxuICAgICAgICByZXR1cm4gVF9NektpbmQuTm9EZWY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldF9jZWxsX3h5eiAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcik6IENfTWF6ZUNlbGx8dW5kZWZpbmVkIHsgXHJcbiAgICAgICAgaWYgKHRoaXMuc2l6ZS53aXRoaW4oeCwgeSwgeikpIHJldHVybiB0aGlzLmNlbGxzW3pdW3ldW3hdO1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X2NlbGwgKHA6IENfUG9pbnQpOiBDX01hemVDZWxsfHVuZGVmaW5lZCB7IFxyXG4gICAgICAgIGlmICh0aGlzLnNpemUud2l0aGluKHApKSByZXR1cm4gdGhpcy5jZWxsc1twLnpdW3AueV1bcC54XTtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9jZWxsKHA6IENfUG9pbnQsIGs6IFRfTXpLaW5kKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2l6ZS53aXRoaW4ocCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jZWxsc1twLnpdW3AueV1bcC54XSA9IENfTWF6ZUNlbGwubmV3T2JqKHtraW5kOiBrLCBwb3M6IHB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X2NlbGxfeHl6KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIGs6IFRfTXpLaW5kKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2l6ZS53aXRoaW4oeCwgeSwgeikpIHtcclxuICAgICAgICAgICAgdGhpcy5jZWxsc1t6XVt5XVt4XSA9IENfTWF6ZUNlbGwubmV3T2JqKHtraW5kOiBrLCBwb3M6IHt4OngsIHk6eSwgejp6fX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBjYW5fbW92ZShwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZS53aXRoaW4ocCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2FuX1VEKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc19tb3ZhYmxlKHApO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5wdWJsaWMgZmlsbF9jZWxsKGtpbmQ6IFRfTXpLaW5kLCBmbG9vcjpudW1iZXIpOiB2b2lkIHtcclxuICAgIGZvciAobGV0IGggPSAwOyBoIDwgdGhpcy5zaXplLnNpemVfeSgpOyBoKyspXHJcbiAgICBmb3IgKGxldCB3ID0gMDsgdyA8IHRoaXMuc2l6ZS5zaXplX3goKTsgdysrKVxyXG4gICAgICAgIHRoaXMuc2V0X2NlbGxfeHl6KHcsIGgsIGZsb29yLCBraW5kKTtcclxuICAgIHJldHVybjtcclxufVxyXG5cclxucHVibGljIHNldF9ib3goa2luZDogVF9NektpbmQsIHRvcF94Om51bWJlciwgdG9wX3k6IG51bWJlciwgc2l6ZV94OiBudW1iZXIsIHNpemVfeTogbnVtYmVyLCBmbG9vcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAodG9wX3ggKyBzaXplX3ggPiB0aGlzLnNpemUuc2l6ZV94KCkpIHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKSAtIHRvcF94ICsgMTsgXHJcbiAgICBpZiAodG9wX3kgKyBzaXplX3kgPiB0aGlzLnNpemUuc2l6ZV95KCkpIHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKSAtIHRvcF95ICsgMTtcclxuICAgIFxyXG4gICAgY29uc3QgdG9wID0gdG9wX3k7XHJcbiAgICBjb25zdCBidG0gPSB0b3AgICAgKyBzaXplX3kgLSAxO1xyXG4gICAgY29uc3QgbGZ0ID0gdG9wX3g7XHJcbiAgICBjb25zdCByZ3QgPSBsZnQgICAgKyBzaXplX3ggLSAxO1xyXG4gICAgXHJcbiAgICAvLyDljJflgbQo5LiKKeOBqOWNl+WBtCjkuIsp44KS55+z5aOB44GrXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgdGhpcy5zZXRfY2VsbF94eXooeCwgdG9wLCBmbG9vciwga2luZCk7XHJcbiAgICAgICAgdGhpcy5zZXRfY2VsbF94eXooeCwgYnRtLCBmbG9vciwga2luZCk7XHJcbiAgICB9XHJcbiAgICAvLyDmnbHlgbQo5Y+zKeOBqOilv+WBtCjlt6Yp44KS55+z5aOB44GrXHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKSB7XHJcbiAgICAgICAgdGhpcy5zZXRfY2VsbF94eXoobGZ0LCB5LCBmbG9vciwga2luZCk7XHJcbiAgICAgICAgdGhpcy5zZXRfY2VsbF94eXoocmd0LCB5LCBmbG9vciwga2luZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuXHJcbi8vIOmajuS4iuOBqOmajuS4i+OBq+majuauteOCkuioree9ruOBmeOCi1xyXG5wdWJsaWMgY3JlYXRlX3N0YWlyKGZsb29yOm51bWJlcik6IENfUG9pbnREaXIge1xyXG4gICAgY29uc3QgSF9zaXplX3ggPSAodGhpcy5zaXplLnNpemVfeCgpIC0gMSkgLyAyO1xyXG4gICAgY29uc3QgSF9zaXplX3kgPSAodGhpcy5zaXplLnNpemVfeSgpIC0gMSkgLyAyO1xyXG4gICAgY29uc3QgcG9zX3ggICAgPSAyICogX2lyYW5kKDAsIEhfc2l6ZV94IC0gMSkgKyAxO1xyXG4gICAgY29uc3QgcG9zX3kgICAgPSAyICogX2lyYW5kKDAsIEhfc2l6ZV95IC0gMSkgKyAxO1xyXG4gICAgY29uc3QgcG9zX2QgICAgPSAxICogX2lyYW5kKDAsIFRfRGlyZWN0aW9uLk1BWCk7XHJcblxyXG4gICAgLy8g5Lmx5pWw44Gn5b6X44Gf5bqn5qiZ44Gr6ZqO5q6144KS572u44GPXHJcbiAgICBpZiAoZmxvb3IgPj0gMSkge1xyXG4gICAgICAgIGlmICh0aGlzLmdldF9jZWxsX3h5eihwb3NfeCwgcG9zX3ksIGZsb29yIC0gMSk/LmdldEtpbmQoKSAhPT0gVF9NektpbmQuU3RyVXApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRfY2VsbF94eXoocG9zX3gsIHBvc195LCBmbG9vciAtIDEsICBUX016S2luZC5TdHJEbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRfY2VsbF94eXoocG9zX3gsIHBvc195LCBmbG9vciAtIDEsICBUX016S2luZC5TdHJVRCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZ2V0X2NlbGxfeHl6KHBvc194LCBwb3NfeSwgZmxvb3IpPy5nZXRLaW5kKCkgIT09IFRfTXpLaW5kLlN0ckRuKSB7XHJcbiAgICAgICAgdGhpcy5zZXRfY2VsbF94eXoocG9zX3gsIHBvc195LCBmbG9vciwgIFRfTXpLaW5kLlN0clVwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRfY2VsbF94eXoocG9zX3gsIHBvc195LCBmbG9vciwgIFRfTXpLaW5kLlN0clVEKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IENfUG9pbnREaXIoe3g6IHBvc194LCB5OiBwb3NfeSwgejogZmxvb3IsIGQ6IHBvc19kfSk7XHJcbn1cclxuXHJcbnB1YmxpYyBjcmVhdGVfbWF6ZShmbG9vcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcblxyXG5cclxuICAgIC8vIOODgOODs+OCuOODp+ODs+OBpyRmbG9vcuOBp+aMh+WumuOBleOCjOOBn+majuOCkuacqui4j+WcsOOBq+OBmeOCiyBcclxuICAgIHRoaXMuZmlsbF9jZWxsKFRfTXpLaW5kLlVuZXhwLCBmbG9vcik7XHJcblxyXG4gICAgLy8g44OA44Oz44K444On44Oz44Gu6Lyq6YOt44KS55+z5aOB44Gr44GZ44KLXHJcbiAgICB0aGlzLnNldF9ib3goVF9NektpbmQuU3RvbmUsIDAsIDAsIHNpemVfeCwgc2l6ZV95LCBmbG9vcik7XHJcblxyXG4gICAgLy8g6YCa6Lev44Gr5LiA44Gk572u44GN44Gr5aOB44GM5oiQ6ZW344GZ44KL44Od44Kk44Oz44OI44KS6Kit5a6a44GZ44KLXHJcbiAgICAvLyDjg53jgqTjg7Pjg4jjgYvjgonlo4HjgpLkvLjjgbDjgZnmlrnlkJHjgpLjg6njg7Pjg4Djg6DjgavmsbrjgoHjgotcclxuICAgIGNvbnN0IHBvaW50cyA9IG5ldyBDX1BvaW50U2V0MkQoKTtcclxuICAgIGZvciAobGV0IGggPSAyOyBoIDwgc2l6ZV95IC0gMjsgaCArPSAyKXtcclxuICAgICAgICBmb3IgKGxldCB3ID0gMjsgdyA8IHNpemVfeCAtIDI7IHcgKz0gMil7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpID0gX2lyYW5kKDAsIFRfRGlyZWN0aW9uLk1BWCk7XHJcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKG5ldyBDX1BvaW50TGluazJEKHcsIGgsIGRpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOS5seaVsOOBp+OBhOOBj+OBpOOBi+mDqOWxi+OCkuS9nOOCi1xyXG4gICAgY29uc3Qgcm9vbXNfYXJyYXkgPSBbXTtcclxuICAgIGNvbnN0IG51bV9vZl9yb29tID0gX2lyYW5kKDAsIHRoaXMubnVtX29mX3Jvb20pO1xyXG4gICAgZm9yIChsZXQgY250ID0gMDsgY250IDwgbnVtX29mX3Jvb207IGNudCsrKSB7XHJcbiAgICAgICAgY29uc3QgbGVuZ194ID0gX2lyYW5kKDEsICB0aGlzLm1heF9zaXplX29mX3Jvb20pICogMiArIDE7XHJcbiAgICAgICAgY29uc3QgbGVuZ195ID0gX2lyYW5kKDEsICB0aGlzLm1heF9zaXplX29mX3Jvb20pICogMiArIDE7XHJcbiAgICAgICAgY29uc3Qgcm9vbV94ID0gX2lyYW5kKDAsIChzaXplX3ggLSBsZW5nX3gpIC8gMikgKiAyO1xyXG4gICAgICAgIGNvbnN0IHJvb21feSA9IF9pcmFuZCgwLCAoc2l6ZV95IC0gbGVuZ195KSAvIDIpICogMjtcclxuICAgICAgICByb29tc19hcnJheS5wdXNoKHt0eDogcm9vbV94LCB0eTogcm9vbV95LCBzeDogbGVuZ194LCBzeTogbGVuZ195fSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6YOo5bGL44Gu5Lit44Gu44Od44Kk44Oz44OI44KS5YmK6Zmk44GZ44KLXHJcbiAgICBmb3IgKGNvbnN0IHJvb20gb2Ygcm9vbXNfYXJyYXkpIHtcclxuICAgICAgICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgcG9pbnRzLnNldC5sZW5ndGg7IGlpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcCA9ICBwb2ludHMuc2V0W2lpXTtcclxuICAgICAgICAgICAgaWYgKHAgPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoICAgIChwLnggPj0gcm9vbS50eCkgXHJcbiAgICAgICAgICAgICAgICAmJiAgKHAueCA8PSByb29tLnR4ICsgcm9vbS5zeClcclxuICAgICAgICAgICAgICAgICYmICAocC55ID49IHJvb20udHkpXHJcbiAgICAgICAgICAgICAgICAmJiAgKHAueSA8PSByb29tLnR5ICsgcm9vbS5zeSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb2ludHMucmVtb3ZlKHApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8g44Od44Kk44Oz44OI44GL44KJ5aOB44KS5oiQ6ZW344GV44Gb44Gm6L+36Lev44KS5L2c44KLXHJcbiAgICBmb3IgKGNvbnN0IHAgb2YgcG9pbnRzLnNldCkge1xyXG4gICAgICAgIGlmIChwID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOODneOCpOODs+ODiOOBruS9jee9ruOBq+efs+WjgeOCkue9ruOBj1xyXG4gICAgICAgIHRoaXMuc2V0X2NlbGxfeHl6KHAueCwgcC55LCBmbG9vciwgVF9NektpbmQuU3RvbmUpO1xyXG5cclxuICAgICAgICAvLyDmn7Hjga7mnbHopb/ljZfljJfjga7jgYTjgZrjgozjgYvjgavjgoLnn7Plo4HjgpLnva7jgY9cclxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBbMCwgMCwgMCwgMF07XHJcbiAgICAgICAgY29uc3QgZGkgPSBDX1BvaW50TGluazJELmNhc3QocCk/LmRpID8/IFRfRGlyZWN0aW9uLlg7XHJcbiAgICAgICAgaWYgKGRpID09PSBUX0RpcmVjdGlvbi5YKSBjb250aW51ZTtcclxuICAgICAgICBkaXJlY3Rpb25bZGldID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRfY2VsbF94eXooXHJcbiAgICAgICAgICAgIHAueCAtIGRpcmVjdGlvbltUX0RpcmVjdGlvbi5XXSArIGRpcmVjdGlvbltUX0RpcmVjdGlvbi5FXSwgXHJcbiAgICAgICAgICAgIHAueSAtIGRpcmVjdGlvbltUX0RpcmVjdGlvbi5OXSArIGRpcmVjdGlvbltUX0RpcmVjdGlvbi5TXSwgXHJcbiAgICAgICAgICAgIGZsb29yLFxyXG4gICAgICAgICAgICBUX016S2luZC5TdG9uZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8g6ZaJ6Y6W56m66ZaT44GM5Ye65p2l44Gm44GE44Gf44KJ5Ye65Y+j44KS5L2c44KLXHJcbiAgICAvLyDjg53jgqTjg7Pjg4jjgpLjg4jjg6zjg7zjgrnjgZfjgabjgIHml6Llh7rjga7jg53jgqTjg7Pjg4jjgavnuYvjgYzjgaPjgabjgYTjgZ/jgonplonpjpbnqbrplpNcclxuICAgIGZvciAoY29uc3Qgc2V0IG9mIHBvaW50cy5zZXQpIHtcclxuICAgICAgICBpZiAoc2V0ID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICBjb25zdCBbeW4sIHRyYWNlX3NldF0gPSB0aGlzLmNoZWNrX2Nsb3NlKHNldC54LCBzZXQueSwgcG9pbnRzLCBuZXcgQ19Qb2ludFNldDJEKCkpO1xyXG4gICAgICAgIGlmICh5bikge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5fZXhpdCh0cmFjZV9zZXQsIFRfTXpLaW5kLlVuZXhwLCBmbG9vcik7XHJcbiAgICAgICAgICAgIGlmICh0cmFjZV9zZXQgIT09IHVuZGVmaW5lZCkgZm9yIChjb25zdCB0IG9mIHRyYWNlX3NldC5zZXQpIHBvaW50cy5yZW1vdmUodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG59XHJcblxyXG5wcm90ZWN0ZWQgY2hlY2tfY2xvc2UoeDogbnVtYmVyLCB5OiBudW1iZXIsIHBvaW50X3NldDogQ19Qb2ludFNldDJELCB0cmFjZV9zZXQ6IENfUG9pbnRTZXQyRHx1bmRlZmluZWQpOiBbYm9vbGVhbiwgQ19Qb2ludFNldDJEfHVuZGVmaW5lZF0ge1xyXG4gICAgaWYgKHggPCAyIHx8IHkgPCAyIHx8IHggPiB0aGlzLnNpemUuc2l6ZV94KCkgLSAyIHx8IHkgPiB0aGlzLnNpemUuc2l6ZV95KCkgLSAyKSByZXR1cm4gW2ZhbHNlLCB1bmRlZmluZWRdO1xyXG5cclxuICAgIGlmIChwb2ludF9zZXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIFtmYWxzZSwgdW5kZWZpbmVkXTtcclxuICAgIGlmIChwb2ludF9zZXQ/LmlzX2V4aXN0KHgsIHkpID09PSBmYWxzZSkgcmV0dXJuIFtmYWxzZSwgdW5kZWZpbmVkXTtcclxuXHJcbiAgICBpZiAodHJhY2Vfc2V0ICE9PSB1bmRlZmluZWQgJiYgdHJhY2Vfc2V0Py5pc19leGlzdCh4LCB5KSA9PT0gdHJ1ZSkgIHJldHVybiBbdHJ1ZSwgIHRyYWNlX3NldF07XHJcblxyXG4gICAgY29uc3QgcCA9IHBvaW50X3NldC5nZXRfcG9pbnQoeCwgeSk7XHJcbiAgICB0cmFjZV9zZXQgPz89IG5ldyBDX1BvaW50U2V0MkQoKTtcclxuICAgIHRyYWNlX3NldD8ucHVzaChuZXcgQ19Qb2ludExpbmsyRCh4LCB5LCBDX1BvaW50TGluazJELmNhc3QocCk/LmRpKSk7XHJcblxyXG4gICAgbGV0IG5leHRfeDogbnVtYmVyID0gMCwgbmV4dF95OiBudW1iZXIgPSAwO1xyXG4gICAgc3dpdGNoIChDX1BvaW50TGluazJELmNhc3QocCk/LmRpKSB7XHJcbiAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiAgLy8g5YyXXHJcbiAgICAgICAgICAgIG5leHRfeCA9IHg7XHJcbiAgICAgICAgICAgIG5leHRfeSA9IHkgLSAyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6ICAvLyDmnbFcclxuICAgICAgICAgICAgbmV4dF94ID0geCArIDI7XHJcbiAgICAgICAgICAgIG5leHRfeSA9IHk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogIC8vIOWNl1xyXG4gICAgICAgICAgICBuZXh0X3ggPSB4O1xyXG4gICAgICAgICAgICBuZXh0X3kgPSB5ICsgMjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiAgLy8g6KW/XHJcbiAgICAgICAgICAgIG5leHRfeCA9IHggLSAyO1xyXG4gICAgICAgICAgICBuZXh0X3kgPSB5O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tfY2xvc2UobmV4dF94LCBuZXh0X3ksIHBvaW50X3NldCwgdHJhY2Vfc2V0KTtcclxufVxyXG5cclxucHJvdGVjdGVkIG9wZW5fZXhpdChwOiBDX1BvaW50U2V0MkR8dW5kZWZpbmVkLCBraW5kOiBUX016S2luZCwgZmxvb3I6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKHAgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGNudCA9IF9pcmFuZCgwLCBwLnNldC5sZW5ndGggLSAxKTtcclxuICAgIGNvbnN0IHBwICA9ICBwLnNldFtjbnRdO1xyXG5cclxuICAgIGxldCBkaXJlY3Rpb24gPSBbMCwgMCwgMCwgMF07XHJcbiAgICBjb25zdCBkaSA9IENfUG9pbnRMaW5rMkQuY2FzdChwcCk/LmRpID8/IFRfRGlyZWN0aW9uLk5cclxuICAgIGRpcmVjdGlvbltkaV0gPSAxO1xyXG5cclxuICAgIHRoaXMuc2V0X2NlbGxfeHl6KFxyXG4gICAgICAgIHBwLnggLSBkaXJlY3Rpb25bVF9EaXJlY3Rpb24uV10gKyBkaXJlY3Rpb25bVF9EaXJlY3Rpb24uRV0sIFxyXG4gICAgICAgIHBwLnkgLSBkaXJlY3Rpb25bVF9EaXJlY3Rpb24uTl0gKyBkaXJlY3Rpb25bVF9EaXJlY3Rpb24uU10sIFxyXG4gICAgICAgIGZsb29yLFxyXG4gICAgICAgIGtpbmQgXHJcbiAgICApO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxyXG4vKlxyXG5wdWJsaWMgc3RhdGljIGZyb21fb2JqX3RvX3N0cmluZyhvYTogQ19NYXplKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYSwgbnVsbCwgXCJcXHRcIik7XHJcbn1cclxucHVibGljIHN0YXRpYyBmcm9tX29iakFycmF5X3RvX3N0cmluZyhvYWE6IHtbdWlkOiBzdHJpbmddOiBDX01hemV9KTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG9hID0gW10gYXMgQ19NYXplW107XHJcbiAgICBmb3IgKGNvbnN0IGlpIGluIG9hYSkgb2EucHVzaChvYWFbaWldKTtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYSwgbnVsbCwgXCJcXHRcIik7XHJcbn1cclxucHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ190b19vYmoodHh0OiBzdHJpbmcpOiBDX01hemUge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBqICAgPSBKU09OLnBhcnNlKHR4dCkgYXMgSlNPTl9NYXplW107XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX01hemUoKS5kZWNvZGUoaik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IENfTWF6ZSgpO1xyXG4gICAgfTtcclxufVxyXG5wdWJsaWMgc3RhdGljIGZyb21fc3RyaW5nX3RvX29iakFycmF5KHR4dDogc3RyaW5nKToge1t1aWQ6IHN0cmluZ106IENfTWF6ZX0ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBqICAgPSBKU09OLnBhcnNlKHR4dCkgYXMgSlNPTl9NYXplW107XHJcbiAgICAgICAgY29uc3QgbXBhID0ge30gYXMge1tpZDogc3RyaW5nXTogQ19NYXplfTtcclxuICAgICAgICBmb3IgKGNvbnN0IGpqIG9mIGopIHtcclxuICAgICAgICAgICAgY29uc3QgYWFhID0gbmV3IENfTWF6ZSgpLmRlY29kZShqaik7XHJcbiAgICAgICAgICAgIG1wYVthYWEudWlkKCldID0gYWFhO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbXBhO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfTtcclxufVxyXG4qL1xyXG5cclxuICAgIHB1YmxpYyB0b19sZXR0ZXIocDogQ19Qb2ludCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2VsbHNbcC56XVtwLnldW3AueF0udG9fbGV0dGVyKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdG9fc3RyaW5nKGZsb29yOiBudW1iZXIgPSAwLCBkZWJ1Z19tb2RlOiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgICAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcblxyXG4gICAgICAgIHZhciByZXRfc3RyOiBzdHJpbmcgPSAnJztcclxuICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHRoaXMuZ2V0X29ial94eXooeCwgeSwgZmxvb3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkZWJ1Z19tb2RlICYmIHRoaXMubWFza3NbZmxvb3JdW3ldW3hdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0X3N0ciArPSAn77y4JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqX2MgPSBvYmo/LnZpZXcoKT8ubGV0dGVyKCkgPz8gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqID09PSBudWxsIHx8IG9ial9jID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldF9zdHIgKz0gdGhpcy5jZWxsc1tmbG9vcl1beV1beF0udG9fbGV0dGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0X3N0ciArPSBvYmpfYztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0X3N0ciArPSBcIlxcblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0X3N0cjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9NYXplIHtcclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeiA9IHRoaXMuc2l6ZS5zaXplX3ooKTtcclxuXHJcbiAgICAgICAgdmFyIHpfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBzaXplX3o7IHorKykge1xyXG4gICAgICAgICAgICB2YXIgeV9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBzaXplX3k7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHhfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeF9hcnJheS5wdXNoKHRoaXMuY2VsbHNbel1beV1beF0uZW5jb2RlKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeV9hcnJheS5wdXNoKHhfYXJyYXkuam9pbignWCcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB6X2FycmF5LnB1c2goeV9hcnJheS5qb2luKCdZJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtYXplX3N0ciA9IHpfYXJyYXkuam9pbignWicpO1xyXG5cclxuICAgICAgICB2YXIgel9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHNpemVfejsgeisrKSB7XHJcbiAgICAgICAgICAgIHZhciB5X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeF9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICB4X2FycmF5LnB1c2godGhpcy5tYXNrc1t6XVt5XVt4XSA/ICcxJyA6ICcwJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB5X2FycmF5LnB1c2goeF9hcnJheS5qb2luKCdYJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHpfYXJyYXkucHVzaCh5X2FycmF5LmpvaW4oJ1knKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1hc2tfc3RyID0gel9hcnJheS5qb2luKCdaJyk7XHJcblxyXG4gICAgICAgIGxldCBvYmpzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBpaSBpbiB0aGlzLm9ianMpIG9ianMucHVzaCh0aGlzLm9ianNbaWldLmVuY29kZSgpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6ICAgICAgdGhpcy5tYXplX2lkLFxyXG4gICAgICAgICAgICB1bmlxX2lkOiB0aGlzLnVuaXFfaWQsXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6IHRoaXMuc2F2ZV9pZCxcclxuICAgICAgICAgICAgZmxvb3I6ICAgdGhpcy5mbG9vcixcclxuICAgICAgICAgICAgbmFtZTogICAgdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICBvYmpzOiAgICBvYmpzLFxyXG4gICAgICAgICAgICBzaXplX3g6ICB0aGlzLnNpemUuc2l6ZV94KCksXHJcbiAgICAgICAgICAgIHNpemVfeTogIHRoaXMuc2l6ZS5zaXplX3koKSxcclxuICAgICAgICAgICAgc2l6ZV96OiAgdGhpcy5zaXplLnNpemVfeigpLFxyXG4gICAgICAgICAgICBtYXplOiAgICBtYXplX3N0cixcclxuICAgICAgICAgICAgbWFzazogICAgbWFza19zdHIsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX01hemV8dW5kZWZpbmVkKTogQ19NYXplIHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGEuaWQgICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm1hemVfaWQgPSBhLmlkO1xyXG4gICAgICAgIGlmIChhLnVuaXFfaWQgIT09IHVuZGVmaW5lZCkgdGhpcy51bmlxX2lkID0gYS51bmlxX2lkO1xyXG4gICAgICAgIGlmIChhLnNhdmVfaWQgIT09IHVuZGVmaW5lZCkgdGhpcy5zYXZlX2lkID0gYS5zYXZlX2lkO1xyXG4gICAgICAgIGlmIChhLmZsb29yICAgIT09IHVuZGVmaW5lZCkgdGhpcy5mbG9vciAgID0gYS5mbG9vcjtcclxuICAgICAgICBpZiAoYS5uYW1lICAgICE9PSB1bmRlZmluZWQpIHRoaXMubmFtZSAgICA9IGEubmFtZTtcclxuXHJcbiAgICAgICAgaWYgKGEub2JqcyAgICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqcyA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGpzb25fb2JqIG9mIGEub2Jqcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3X29iaiA9IG5ld19NYXplT2JqKGpzb25fb2JqKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub2Jqc1tuZXdfb2JqLnVpZCgpXSA9IG5ld19vYmo7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhLnNpemVfeCAhPT0gdW5kZWZpbmVkICYmIGEuc2l6ZV95ICE9PSB1bmRlZmluZWQgJiYgYS5zaXplX3ogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNpemUgID0gbmV3IENfUmFuZ2UoXHJcbiAgICAgICAgICAgICAgICBuZXcgQ19Qb2ludCgwLCAwLCAwKSwgXHJcbiAgICAgICAgICAgICAgICBuZXcgQ19Qb2ludChhLnNpemVfeCAtIDEsIGEuc2l6ZV95IC0gMSwgYS5zaXplX3ogLSAxKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5jZWxscyAgID0gdGhpcy5fX2luaXRfbWF6ZShUX016S2luZC5TdG9uZSk7XHJcbiAgICAgICAgICAgIHRoaXMubWFza3MgICA9IHRoaXMuX19pbml0X21hc2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX19pbml0X3VuY2xlYXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgICAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV96ID0gdGhpcy5zaXplLnNpemVfeigpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGEubWF6ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbi8qXHJcbiAgICAgICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspXHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspXHJcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbel1beV1beF0uc2V0KFRfTXpLaW5kLlN0b25lKTtcclxuICAgICAgICAgICAgfVxyXG4qL1xyXG4gICAgICAgICAgICBjb25zdCB6X2FycmF5OiBzdHJpbmdbXSA9IGEubWF6ZS5zcGxpdCgnWicpO1xyXG4gICAgICAgICAgICBjb25zdCB6X21heCA9IF9taW4oW3NpemVfeiwgel9hcnJheS5sZW5ndGhdKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCB6X21heDsgeisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5X2FycmF5OiBzdHJpbmdbXSA9IHpfYXJyYXlbel0uc3BsaXQoJ1knKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHlfbWF4ID0gIF9taW4oW3NpemVfeSwgeV9hcnJheS5sZW5ndGhdKTsgXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHlfbWF4OyB5KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4X2FycmF5OiBzdHJpbmdbXSA9IHlfYXJyYXlbeV0uc3BsaXQoJ1gnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4X21heCA9ICBfbWluKFtzaXplX3gsIHhfYXJyYXkubGVuZ3RoXSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgeF9tYXg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga2luZCA9IHBhcnNlSW50KHhfYXJyYXlbeF0sIDE2KTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbel1beV1beF0gPSBDX01hemVDZWxsLm5ld09iaih7a2luZDoga2luZCwgcG9zOiB7eDp4LCB5OnksIHo6en19KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYS5tYXNrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fX2luaXRfbWFzayh0cnVlKTtcclxuICAgICAgICAgICAgY29uc3Qgel9hcnJheTogc3RyaW5nW10gPSBhLm1hc2suc3BsaXQoJ1onKTtcclxuICAgICAgICAgICAgY29uc3Qgel9tYXggPSBfbWluKFtzaXplX3osIHpfYXJyYXkubGVuZ3RoXSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgel9tYXg7IHorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeV9hcnJheTogc3RyaW5nW10gPSB6X2FycmF5W3pdLnNwbGl0KCdZJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5X21heCA9ICBfbWluKFtzaXplX3ksIHlfYXJyYXkubGVuZ3RoXSk7IFxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB5X21heDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeF9hcnJheTogc3RyaW5nW10gPSB5X2FycmF5W3ldLnNwbGl0KCdYJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeF9tYXggPSAgX21pbihbc2l6ZV94LCB4X2FycmF5Lmxlbmd0aF0pOyBcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHhfbWF4OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhfYXJyYXlbeF0gIT09ICcwJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrc1t6XVt5XVt4XSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc2tzW3pdW3ldW3hdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fX2luaXRfdW5jbGVhcigpOyAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZW5jb2RlX2FsbChhbGxfbWF6ZTogQ19NYXplW10pOiBKU09OX01hemVbXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX21hemVfZGF0YTogSlNPTl9NYXplW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBtYXplIG9mIGFsbF9tYXplKSB7XHJcbiAgICAgICAgICAgIGFsbF9tYXplX2RhdGEucHVzaChtYXplLmVuY29kZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbF9tYXplX2RhdGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZV9hbGwoYWxsX21hemVfZGF0YTogSlNPTl9NYXplW10pOiBDX01hemVbXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX21hemU6IENfTWF6ZVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgbWF6ZV9kYXRhIG9mIGFsbF9tYXplX2RhdGEpIHtcclxuICAgICAgICAgICAgYWxsX21hemUucHVzaCgobmV3IENfTWF6ZSh7fSkpLmRlY29kZShtYXplX2RhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbF9tYXplO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWxlcnQoKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJNYXplIEluZm86XCJcclxuICAgICAgICAgICAgKyBcIlxcbm1hemUgaWQgOlwiICsgKHRoaXMubWF6ZV9pZCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5mbG9vcjogXCIgICArICh0aGlzLmZsb29yICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudW5pcSBpZCA6XCIgKyAodGhpcy51bmlxX2lkID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNhdmUgaWQgOlwiICsgKHRoaXMuc2F2ZV9pZCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5uYW1lOiAgIFwiICArICh0aGlzLm5hbWUgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2l6ZV94OiBcIiAgKyAodGhpcy5zaXplLnNpemVfeCgpID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNpemVfeTogXCIgICsgKHRoaXMuc2l6ZS5zaXplX3koKSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zaXplX3o6IFwiICArICh0aGlzLnNpemUuc2l6ZV96KCkgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFsZXJ0X21hemUoZmxvb3I6IG51bWJlciA9IDApOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIk1hemUgTWFwOlwiXHJcbiAgICAgICAgICAgICsgXCJtYXplOlxcblwiICAgICArICh0aGlzLnRvX3N0cmluZyhmbG9vciwgdHJ1ZSkgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhbGVydF9tYXNrKGZsb29yOiBudW1iZXIgPSAwKTogdm9pZCB7XHJcbiAgICAgICAgYWxlcnQoXCJNYXNrIE1hcDpcIlxyXG4gICAgICAgICAgICArIFwibWFzazpcXG5cIiAgICAgKyAodGhpcy50b19zdHJpbmcoZmxvb3IsIGZhbHNlKSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBfZ2V0X3V1aWQgfSBmcm9tIFwiLi4vZF91dGwvRl9SYW5kXCI7XHJcbmltcG9ydCB7IFRfTXpLaW5kIH0gIGZyb20gXCIuL1RfTXpLaW5kXCI7XHJcbmltcG9ydCB7IEpTT05fQW55IH0gIGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuaW1wb3J0IHsgQ19NYXplT2JqLCBJX01hemVPYmosIEpTT05fTWF6ZU9iaiB9IGZyb20gXCIuL0NfTWF6ZU9ialwiO1xyXG5pbXBvcnQgeyBUX1dhbGwgfSAgICBmcm9tICcuL0NfV2FsbCc7XHJcbmltcG9ydCB7IFRfUmVjdCB9IGZyb20gXCIuL0NfTWF6ZU9ialZpZXdcIjtcclxuaW1wb3J0IHsgbmV3X01hemVPYmogfSBmcm9tIFwiLi9DX01hemVPYmpDb21tb25cIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fTWF6ZUNlbGwgZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICBraW5kPzogVF9NektpbmRcclxuICAgIG9iaj86ICBKU09OX01hemVPYmosXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX01hemVDZWxsICB7XHJcbiAgICBwcm90ZWN0ZWQga2luZDogICBUX016S2luZDtcclxuICAgIHByb3RlY3RlZCBteV9vYmo6IElfTWF6ZU9iajtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5ld09iaihqOiBKU09OX01hemVDZWxsKTogQ19NYXplQ2VsbCB7XHJcbiAgICAgICAgc3dpdGNoIChqLmtpbmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5Ob0RlZjogcmV0dXJuIG5ldyBDX01hemVDZWxsTm9EZWYoaik7IFxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlVua3duOiByZXR1cm4gbmV3IENfTWF6ZUNlbGxVbmt3bihqKTsgXHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuRW1wdHk6IHJldHVybiBuZXcgQ19NYXplQ2VsbEVtcHR5KGopOyBcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5GbG9vcjogcmV0dXJuIG5ldyBDX01hemVDZWxsRmxvb3Ioaik7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuVW5leHA6IHJldHVybiBuZXcgQ19NYXplQ2VsbFVuZXhwKGopO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0b25lOiByZXR1cm4gbmV3IENfTWF6ZUNlbGxTdG9uZShqKTtcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVcDogcmV0dXJuIG5ldyBDX01hemVDZWxsU3RyVXAoaik7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyRG46IHJldHVybiBuZXcgQ19NYXplQ2VsbFN0ckRuKGopOyBcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVRDogcmV0dXJuIG5ldyBDX01hemVDZWxsU3RyVUQoaik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQ19NYXplQ2VsbE5vRGVmKGopO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihqOiBKU09OX01hemVDZWxsKSB7XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG4gICAgICAgIGoub2JqLmNsbmFtZSA/Pz0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG5cclxuICAgICAgICB0aGlzLmtpbmQgICA9IGoua2luZCA/PyBUX016S2luZC5Ob0RlZjtcclxuICAgICAgICB0aGlzLm15X29iaiA9IG5ld19NYXplT2JqKGoub2JqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRPYmooKTogIElfTWF6ZU9iaiB7cmV0dXJuIHRoaXMubXlfb2JqfVxyXG4gICAgcHVibGljIGdldEtpbmQoKTogVF9NektpbmQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtpbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvX2xldHRlcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm15X29iai52aWV3KCk/LmxldHRlcigpID8/ICfvvLgnO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX2xldHRlcihsZXR0ZXI6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoVF9NektpbmQpKSB7XHJcbiAgICAgICAgICAgIGlmIChsZXR0ZXIgPT09IGtleSkgcmV0dXJuIFRfTXpLaW5kW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBUX016S2luZC5Ob0RlZjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJvdzJEKHJlY3Q6IFRfUmVjdCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubXlfb2JqLnZpZXcoKT8uZHJvdzJEKHJlY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcm93M0QoZnJvdDogVF9XYWxsLCBiYWNrOiBUX1dhbGwpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm15X29iai52aWV3KCk/LmRyb3czRChmcm90LCBiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2luZC50b1N0cmluZygxNikucGFkU3RhcnQoMixcIjBcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZShzdHI6IHN0cmluZywgaj86IEpTT05fTWF6ZUNlbGwpOiBDX01hemVDZWxsfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgIGNvbnN0IGtpbmQgPSBwYXJzZUludChzdHIsIDE2KSBhcyBUX016S2luZDtcclxuICAgICAgICAgcmV0dXJuIENfTWF6ZUNlbGwubmV3T2JqKHtraW5kOiBraW5kLCBwb3M6IGo/LnBvc30pO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsTm9EZWYgZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuTm9EZWZ9O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcwJztcclxuICAgICAgICBqLm9iai5oX3dfZG1nID0gIDEwMDtcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn55aRJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcwJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcnLCBjb2xfZDogJycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJycsIGNvbF8yOiAnJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsVW5rd24gZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuVW5rd259O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcwJztcclxuICAgICAgICBqLm9iai5oX3dfZG1nID0gIDEwMDtcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn6KyOJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcwJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcnLCBjb2xfZDogJycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJycsIGNvbF8yOiAnJywgY29sX0w6ICcnLCAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbEVtcHR5IGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLkVtcHR5fTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMSc7XHJcbiAgICAgICAgai5vYmouaF93X2RtZyA9ICAwO1xyXG4gICAgICAgIGoub2JqLnBvcyAgICAgPSB7eDpqLngsIHk6ai55LCB6Omouen07XHJcbiAgICAgICAgai5vYmoudmlldyAgICA9ICB7XHJcbiAgICAgICAgICAgIGxheWVyOiAwLCBsZXR0ZXI6ICfnhKEnLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgJzAnLFxyXG4gICAgICAgICAgICBwYWRfdDogMC4wLCBwYWRfZDogMC4wLCBwYWRfczogMC4wLFxyXG4gICAgICAgICAgICBjb2xfZjogJycsIGNvbF9iOiAnJywgY29sX3M6ICcnLCBjb2xfdDogJycsIGNvbF9kOiAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnJywgY29sXzI6ICcnLCBjb2xfTDogJycsIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGxGbG9vciBleHRlbmRzIENfTWF6ZUNlbGwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVDZWxsfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGogPz89IHtraW5kOiBUX016S2luZC5GbG9vcn07XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG5cclxuICAgICAgICBqLm9iai5jYW5fdGhyID0gJzEnO1xyXG4gICAgICAgIGoub2JqLmhfd19kbWcgPSAgMDtcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn44CAJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcxJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcjNjY2NmZmJywgY29sX2Q6ICcnLCBcclxuICAgICAgICAgICAgY29sX2w6ICcjOTk5OWZmJywgY29sXzI6ICcjMzMzM2ZmJywgY29sX0w6ICcjNjY2NmZmJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsVW5leHAgZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuVW5leHB9O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcxJztcclxuICAgICAgICBqLm9iai5oX3dfZG1nID0gIDA7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ+ODuycsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMScsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbiAgICAgICAgICAgIGNvbF9mOiAnJywgY29sX2I6ICcnLCBjb2xfczogJycsIGNvbF90OiAnIzY2ZmZmZicsIGNvbF9kOiAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnIzk5OTlmZicsIGNvbF8yOiAnIzY2ZmZmZicsIGNvbF9MOiAnIzY2NjZmZicsIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbFN0b25lIGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLlN0b25lfTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMCc7XHJcbiAgICAgICAgai5vYmouaF93X2RtZyA9ICAxMDtcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn77yDJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcxJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcjMDBmZjAwJywgY29sX2I6ICcnLCBjb2xfczogJyMwMGVlMDAnLCBjb2xfdDogJycsIGNvbF9kOiAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAnIzAwMDBmZicsIGNvbF8yOiAnIzAwY2MwMCcsIGNvbF9MOiAnIzY2NjZmZicsIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlcihqKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbFN0clVwIGV4dGVuZHMgQ19NYXplQ2VsbCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZUNlbGx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaiA/Pz0ge2tpbmQ6IFRfTXpLaW5kLlN0clVwfTtcclxuICAgICAgICBqLm9iaiA/Pz0ge307XHJcblxyXG4gICAgICAgIGoub2JqLmNhbl90aHIgPSAnMSc7XHJcbiAgICAgICAgai5vYmouaF93X2RtZyA9ICAwO1xyXG4gICAgICAgIGoub2JqLnBvcyAgICAgPSB7eDpqLngsIHk6ai55LCB6Omouen07XHJcbiAgICAgICAgai5vYmoudmlldyAgICA9ICB7XHJcbiAgICAgICAgICAgIGxheWVyOiAwLCBsZXR0ZXI6ICfkuIonLCBcclxuICAgICAgICAgICAgc2hvdzNEOiAgJzEnLFxyXG4gICAgICAgICAgICBwYWRfdDogMC4wLCBwYWRfZDogMC4wLCBwYWRfczogMC4wLFxyXG4gICAgICAgICAgICBjb2xfZjogJycsIGNvbF9iOiAnJywgY29sX3M6ICcnLCBjb2xfdDogJycsIGNvbF9kOiAnI2ZmZmZjYycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJyMwMDAwZmYnLCBjb2xfMjogJyNmZmZmNjYnLCBjb2xfTDogJyM2NjY2ZmYnLCBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGxTdHJEbiBleHRlbmRzIENfTWF6ZUNlbGwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVDZWxsfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGogPz89IHtraW5kOiBUX016S2luZC5TdHJEbn07XHJcbiAgICAgICAgai5vYmogPz89IHt9O1xyXG5cclxuICAgICAgICBqLm9iai5jYW5fdGhyID0gJzEnO1xyXG4gICAgICAgIGoub2JqLmhfd19kbWcgPSAgMDtcclxuICAgICAgICBqLm9iai5wb3MgICAgID0ge3g6ai54LCB5OmoueSwgejpqLnp9O1xyXG4gICAgICAgIGoub2JqLnZpZXcgICAgPSAge1xyXG4gICAgICAgICAgICBsYXllcjogMCwgbGV0dGVyOiAn5LiLJywgXHJcbiAgICAgICAgICAgIHNob3czRDogICcxJyxcclxuICAgICAgICAgICAgcGFkX3Q6IDAuMCwgcGFkX2Q6IDAuMCwgcGFkX3M6IDAuMCxcclxuICAgICAgICAgICAgY29sX2Y6ICcnLCBjb2xfYjogJycsIGNvbF9zOiAnJywgY29sX3Q6ICcjZmZmZmNjJywgY29sX2Q6ICcnLCBcclxuICAgICAgICAgICAgY29sX2w6ICcjMDAwMGZmJywgY29sXzI6ICcjZmZmZjY2JywgY29sX0w6ICcjNjY2NmZmJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDX01hemVDZWxsU3RyVUQgZXh0ZW5kcyBDX01hemVDZWxsIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplQ2VsbHx1bmRlZmluZWQpIHtcclxuICAgICAgICBqID8/PSB7a2luZDogVF9NektpbmQuU3RyVUR9O1xyXG4gICAgICAgIGoub2JqID8/PSB7fTtcclxuXHJcbiAgICAgICAgai5vYmouY2FuX3RociA9ICcxJztcclxuICAgICAgICBqLm9iai5oX3dfZG1nID0gIDA7XHJcbiAgICAgICAgai5vYmoucG9zICAgICA9IHt4OmoueCwgeTpqLnksIHo6ai56fTtcclxuICAgICAgICBqLm9iai52aWV3ICAgID0gIHtcclxuICAgICAgICAgICAgbGF5ZXI6IDAsIGxldHRlcjogJ+autScsIFxyXG4gICAgICAgICAgICBzaG93M0Q6ICAnMScsXHJcbiAgICAgICAgICAgIHBhZF90OiAwLjAsIHBhZF9kOiAwLjAsIHBhZF9zOiAwLjAsXHJcbiAgICAgICAgICAgIGNvbF9mOiAnJywgY29sX2I6ICcnLCBjb2xfczogJycsIGNvbF90OiAnI2ZmZmZjYycsIGNvbF9kOiAnI2ZmZmZjYycsIFxyXG4gICAgICAgICAgICBjb2xfbDogJyMwMDAwZmYnLCBjb2xfMjogJyNmZmZmNjYnLCBjb2xfTDogJyM2NjY2ZmYnLCBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBfYWxlcnQgfSBmcm9tIFwiLi4vZF9jbW4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9IGZyb20gXCIuLi9kX3V0bC9DX0RzcE1lc3NhZ2VcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9NYXplSW5mbyB7XHJcbiAgICBuYW1lOiAgICAgIHN0cmluZztcclxuICAgIG1ibmFtZTogICAgc3RyaW5nO1xyXG4gICAgbHY6ICAgICAgICBudW1iZXI7XHJcbiAgICBzaXplX3g6ICAgIG51bWJlcjtcclxuICAgIHNpemVfeTogICAgbnVtYmVyO1xyXG4gICAgc2l6ZV96OiAgICBudW1iZXI7XHJcbiAgICBtYXhfcm9vbTogIG51bWJlcjtcclxuICAgIHJvb21fc2l6ZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfbWF6ZWluZm9faW5mbyhhPzogSlNPTl9NYXplSW5mbyk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgIGFsZXJ0KFwiTWF6ZUluZm8gRGF0YTpcIlxyXG4gICAgICAgICsgXCJcXG5uYW1lIDogXCIgICAgICAgKyAoYS5uYW1lICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5tYm5hbWU6IFwiICAgICAgKyAoYS5tYm5hbWUgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sdiA6XCIgICAgICAgICAgKyAoYS5sdiAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3g6IFwiICAgICAgKyAoYS5zaXplX3ggICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3k6IFwiICAgICAgKyAoYS5zaXplX3kgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3o6IFwiICAgICAgKyAoYS5zaXplX3ogICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5tYXhfb2Zfcm9vbTogXCIgKyAoYS5tYXhfcm9vbSAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5yb29tX3NpemU6IFwiICAgKyAoYS5yb29tX3NpemUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfTWF6ZUluZm8ge1xyXG4gICAgcHVibGljIG5hbWU6ICAgICAgc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgbWJuYW1lOiAgICBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBsdjogICAgICAgIG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc2l6ZV94OiAgICBudW1iZXIgPSAzO1xyXG4gICAgcHVibGljIHNpemVfeTogICAgbnVtYmVyID0gMztcclxuICAgIHB1YmxpYyBzaXplX3o6ICAgIG51bWJlciA9IDM7XHJcbiAgICBwdWJsaWMgbWF4X3Jvb206ICBudW1iZXIgPSAxO1xyXG4gICAgcHVibGljIHJvb21fc2l6ZTogbnVtYmVyID0gMTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0X3RibF9hbGwoKTogQ19NYXplSW5mb1tdIHtcclxuICAgICAgICBjb25zdCBtYXplaW5mbzogQ19NYXplSW5mb1tdID0gW107XHJcbiAgICAgICAgbWF6ZWluZm8ucHVzaChcclxuICAgICAgICAgICAgbmV3IENfTWF6ZUluZm8oKS5kZWNvZGUoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogICBcdCdtYXplMDEwJywgXHJcbiAgICAgICAgICAgICAgICBtYm5hbWU6IFx0J+aVmee3tOWgtCcsIFxyXG4gICAgICAgICAgICAgICAgbHY6ICAgICBcdCAxLCBcclxuICAgICAgICAgICAgICAgIHNpemVfeDogXHQxMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3k6IFx0MTEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV96OiBcdCAzLCBcclxuICAgICAgICAgICAgICAgIG1heF9yb29tOiBcdCAyLCBcclxuICAgICAgICAgICAgICAgIHJvb21fc2l6ZTogXHQgMyBcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBtYXplaW5mby5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgQ19NYXplSW5mbygpLmRlY29kZSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAgIFx0J21hemUwMTEnLCBcclxuICAgICAgICAgICAgICAgIG1ibmFtZTogXHQn5aeL44G+44KK44Gu6L+35a6uJywgXHJcbiAgICAgICAgICAgICAgICBsdjogICAgIFx0IDEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV94OiBcdDIxLCBcclxuICAgICAgICAgICAgICAgIHNpemVfeTogXHQyMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3o6IFx0IDUsIFxyXG4gICAgICAgICAgICAgICAgbWF4X3Jvb206IFx0IDMsIFxyXG4gICAgICAgICAgICAgICAgcm9vbV9zaXplOiBcdCAzIFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1hemVpbmZvLnB1c2goXHJcbiAgICAgICAgICAgIG5ldyBDX01hemVJbmZvKCkuZGVjb2RlKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICAgXHQnbWF6ZTAxMicsIFxyXG4gICAgICAgICAgICAgICAgbWJuYW1lOiBcdCfmmpfjgY3mo67jga7ov7flrq4nLCBcclxuICAgICAgICAgICAgICAgIGx2OiAgICAgXHQgMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3g6IFx0MjUsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV95OiBcdDI1LCBcclxuICAgICAgICAgICAgICAgIHNpemVfejogXHQgNywgXHJcbiAgICAgICAgICAgICAgICBtYXhfcm9vbTogXHQgNSwgXHJcbiAgICAgICAgICAgICAgICByb29tX3NpemU6IFx0IDMgXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIClcclxuICAgICAgICBtYXplaW5mby5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgQ19NYXplSW5mbygpLmRlY29kZSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAgIFx0J21hemUwMTMnLCBcclxuICAgICAgICAgICAgICAgIG1ibmFtZTogXHQn6buS6a2U44Gu5Zyw5LiL5aKT5ZywJywgXHJcbiAgICAgICAgICAgICAgICBsdjogICAgIFx0IDEsIFxyXG4gICAgICAgICAgICAgICAgc2l6ZV94OiBcdDMxLCBcclxuICAgICAgICAgICAgICAgIHNpemVfeTogXHQzMSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3o6IFx0MTAsIFxyXG4gICAgICAgICAgICAgICAgbWF4X3Jvb206IFx0IDUsIFxyXG4gICAgICAgICAgICAgICAgcm9vbV9zaXplOiBcdCA1IFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHJldHVybiBtYXplaW5mbztcclxuICAgIH1cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoaj86IEpTT05fTWF6ZUluZm8pIHtcclxuICAgICAgICBpZiAoaiAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9NYXplSW5mbyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogICAgICB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIG1ibmFtZTogICAgdGhpcy5tYm5hbWUsXHJcbiAgICAgICAgICAgIGx2OiAgICAgICAgdGhpcy5sdixcclxuICAgICAgICAgICAgc2l6ZV94OiAgICB0aGlzLnNpemVfeCxcclxuICAgICAgICAgICAgc2l6ZV95OiAgICB0aGlzLnNpemVfeSxcclxuICAgICAgICAgICAgc2l6ZV96OiAgICB0aGlzLnNpemVfeixcclxuICAgICAgICAgICAgbWF4X3Jvb206ICB0aGlzLm1heF9yb29tLFxyXG4gICAgICAgICAgICByb29tX3NpemU6IHRoaXMucm9vbV9zaXplLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoaj86IEpTT05fTWF6ZUluZm8pOiBDX01hemVJbmZvIHtcclxuICAgICAgICBpZiAoaiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGoubmFtZSAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubmFtZSAgICAgID0gai5uYW1lO1xyXG4gICAgICAgIGlmIChqLm1ibmFtZSAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm1ibmFtZSAgICA9IGoubWJuYW1lO1xyXG4gICAgICAgIGlmIChqLmx2ICAgICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmx2ICAgICAgICA9IGoubHY7XHJcbiAgICAgICAgaWYgKGouc2l6ZV94ICAgICE9PSB1bmRlZmluZWQpIHRoaXMuc2l6ZV94ICAgID0gai5zaXplX3g7XHJcbiAgICAgICAgaWYgKGouc2l6ZV95ICAgICE9PSB1bmRlZmluZWQpIHRoaXMuc2l6ZV95ICAgID0gai5zaXplX3k7XHJcbiAgICAgICAgaWYgKGouc2l6ZV96ICAgICE9PSB1bmRlZmluZWQpIHRoaXMuc2l6ZV96ICAgID0gai5zaXplX3o7XHJcbiAgICAgICAgaWYgKGoubWF4X3Jvb20gICE9PSB1bmRlZmluZWQpIHRoaXMubWF4X3Jvb20gID0gai5tYXhfcm9vbTtcclxuICAgICAgICBpZiAoai5yb29tX3NpemUgIT09IHVuZGVmaW5lZCkgdGhpcy5yb29tX3NpemUgPSBqLnJvb21fc2l6ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIk1hemVJbmZvIERhdGE6XCJcclxuICAgICAgICAgICAgKyBcIlxcbm5hbWUgOiBcIiAgICAgICArICh0aGlzLm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5tYm5hbWU6IFwiICAgICAgKyAodGhpcy5tYm5hbWUgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubHYgOlwiICAgICAgICAgICsgKHRoaXMubHYgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNpemVfeDogXCIgICAgICArICh0aGlzLnNpemVfeCAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zaXplX3k6IFwiICAgICAgKyAodGhpcy5zaXplX3kgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2l6ZV96OiBcIiAgICAgICsgKHRoaXMuc2l6ZV96ICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbm1heF9vZl9yb29tOiBcIiArICh0aGlzLm1heF9yb29tICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5yb29tX3NpemU6IFwiICAgKyAodGhpcy5yb29tX3NpemUgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX1BvaW50IH0gICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vQ19Qb2ludFwiO1xyXG5pbXBvcnQgeyBDX1BvaW50RGlyLCBKU09OX1BvaW50RGlyIH0gZnJvbSBcIi4vQ19Qb2ludERpclwiO1xyXG5pbXBvcnQgeyBJX0Fic3RyYWN0LCBJX0pTT05fVW5pcSwgSlNPTl9BbnkgfSAgICAgZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5pbXBvcnQgeyBfZ2V0X3V1aWQgfSAgICAgICAgICAgICAgICAgZnJvbSBcIi4uL2RfdXRsL0ZfUmFuZFwiO1xyXG5pbXBvcnQgeyBcclxuICAgIENfTWF6ZU9ialZpZXcsIFxyXG4gICAgSV9NYXplT2JqVmlldywgXHJcbiAgICBKU09OX01hemVPYmpWaWV3IFxyXG59IGZyb20gXCIuL0NfTWF6ZU9ialZpZXdcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fTWF6ZU9iaiBleHRlbmRzIEpTT05fQW55IHtcclxuICAgIGNsbmFtZT86ICAgIHN0cmluZyxcclxuICAgIHVuaXFfaWQ/OiAgIHN0cmluZywgXHJcbiAgICBwb3M/OiAgICAgICBKU09OX1BvaW50RGlyLFxyXG4gICAgdmlldz86ICAgICAgSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQsXHJcbiAgICBjYW5fdGhyPzogICBzdHJpbmcsIFxyXG4gICAgaF93X2RtZz86ICAgbnVtYmVyLFxyXG4gICAgc3RhdD86ICAgICAgc3RyaW5nLCAvLyBDX01hemVPYmrjga7jgrXjg5bjgq/jg6njgrnjga7liJ3mnJ/lgKTjgpLkv53mjIHjgZnjgosgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElfTWF6ZU9iaiBleHRlbmRzIElfSlNPTl9VbmlxLCBJX0Fic3RyYWN0IHtcclxuICAgIGdldF9wZDogICAgICgpPT5DX1BvaW50RGlyO1xyXG4gICAgd2l0aGluOiAgICAgKHA6IENfUG9pbnQpPT5ib29sZWFuO1xyXG4gICAgdmlldzogICAgICAgKCk9PklfTWF6ZU9ialZpZXd8dW5kZWZpbmVkO1xyXG4gICAgY2FuVGhyb3VnaDogKCk9PmJvb2xlYW47XHJcbiAgICBoaXRXYWxsRG1nOiAoKT0+bnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19NYXplT2JqIGltcGxlbWVudHMgSV9NYXplT2JqIHtcclxuICAgIHByb3RlY3RlZCBjbG5hbWU6ICAgIHN0cmluZyA9ICdDX01hemVPYmonO1xyXG5cclxuICAgIHByaXZhdGUgICB1bmlxX2lkOiAgIHN0cmluZztcclxuICAgIHByb3RlY3RlZCBwb3M6ICAgICAgIENfUG9pbnREaXI7XHJcbiAgICBwcm90ZWN0ZWQgbXlfdmlldzogICBJX01hemVPYmpWaWV3fHVuZGVmaW5lZDtcclxuICAgIHByb3RlY3RlZCBjYW5fdGhyOiAgIGJvb2xlYW47XHJcbiAgICBwcm90ZWN0ZWQgaF93X2RtZzogICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdDogICAgICBPYmplY3QgPSB7fTsgLy8gQ19NYXplT2Jq44Gu44K144OW44Kv44Op44K544Gu5Yid5pyf5YCk44KS5L+d5oyB44GZ44KLXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX01hemVPYmp8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5jbG5hbWUgICAgID0gIHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuICAgICAgICB0aGlzLnVuaXFfaWQgICAgPSAgdGhpcy5jbG5hbWUgKyAnXycgKyBfZ2V0X3V1aWQoKTtcclxuICAgICAgICB0aGlzLnBvcyAgICAgICAgPSAgbmV3IENfUG9pbnREaXIoe3g6MCwgeTowLCB6OjAsIGQ6MH0pO1xyXG4gICAgICAgIHRoaXMubXlfdmlldyAgICA9ICB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5jYW5fdGhyICAgID0gIHRydWU7XHJcbiAgICAgICAgdGhpcy5oX3dfZG1nICAgID0gIDA7XHJcbiAgICAgICAgdGhpcy5zdGF0ICAgICAgID0gIHt9O1xyXG5cclxuICAgICAgICBpZiAoaiAhPT0gdW5kZWZpbmVkKSB0aGlzLl9faW5pdChqKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX19pbml0KGo6IEpTT05fTWF6ZU9ianx1bmRlZmluZWQpOiBDX01hemVPYmoge1xyXG4gICAgICAgIGlmIChqID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoai51bmlxX2lkICE9PSB1bmRlZmluZWQpIHRoaXMudW5pcV9pZCAgID0gai51bmlxX2lkO1xyXG4gICAgICAgIGlmIChqLmNsbmFtZSAgIT09IHVuZGVmaW5lZCkgdGhpcy5jbG5hbWUgICAgPSBqLmNsbmFtZTtcclxuICAgICAgICBpZiAoai5wb3MgICAgICE9PSB1bmRlZmluZWQpIHRoaXMucG9zLmRlY29kZShqLnBvcyk7XHJcbiAgICAgICAgaWYgKGoudmlldyAgICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhqLnZpZXcpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubXlfdmlldyA/Pz0gQ19NYXplT2JqVmlldy5uZXdPYmooai52aWV3KTsgXHJcbiAgICAgICAgICAgIH0gZWxzZSB0aGlzLm15X3ZpZXcgID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoai5jYW5fdGhyICE9PSB1bmRlZmluZWQpIHRoaXMuY2FuX3RociA9IGouY2FuX3RociAhPT0gJzAnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGlmIChqLmhfd19kbWcgIT09IHVuZGVmaW5lZCkgdGhpcy5oX3dfZG1nID0gai5oX3dfZG1nO1xyXG4gICAgICAgIGlmIChqLnN0YXQgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5zdGF0ICAgID0gSlNPTi5wYXJzZShqLnN0YXQ/Pyd7fScpIGFzIE9iamVjdDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxufVxyXG5cclxuICAgIHB1YmxpYyB1aWQoKTogc3RyaW5nIHtyZXR1cm4gdGhpcy51bmlxX2lkfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzc05hbWUoKTogc3RyaW5nIHtyZXR1cm4gdGhpcy5jbG5hbWV9XHJcblxyXG4gICAgcHVibGljIHZpZXcoKTogSV9NYXplT2JqVmlld3x1bmRlZmluZWQge3JldHVybiB0aGlzLm15X3ZpZXd9XHJcbiAgICBwdWJsaWMgc2V0Vmlldyh2aWV3OiBJX01hemVPYmpWaWV3fHVuZGVmaW5lZCk6IHZvaWQge3RoaXMubXlfdmlldyA9IHZpZXd9XHJcblxyXG4gICAgcHVibGljIGNhblRocm91Z2goKTogYm9vbGVhbiB7cmV0dXJuIHRoaXMuY2FuX3Rocn1cclxuICAgIHB1YmxpYyBzZXRUaHJvdWdoKHRocjogYm9vbGVhbik6IGJvb2xlYW4ge3JldHVybiB0aGlzLmNhbl90aHIgPSB0aHJ9XHJcblxyXG4gICAgcHVibGljIGdldF9wZCgpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICByZXR1cm4gbmV3IENfUG9pbnREaXIodGhpcy5wb3MpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wZChwOiBDX1BvaW50RGlyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBwO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHdpdGhpbihwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zLndpdGhpbihwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGl0V2FsbERtZygpIDpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhfd19kbWc7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTWF6ZU9iaiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdW5pcV9pZDogdGhpcy51bmlxX2lkLFxyXG4gICAgICAgICAgICBjbG5hbWU6ICB0aGlzLmNsbmFtZSxcclxuICAgICAgICAgICAgcG9zOiAgICAgdGhpcy5wb3MuZW5jb2RlKCksXHJcbiAgICAgICAgICAgIHZpZXc6ICAgIHRoaXMubXlfdmlldz8uZW5jb2RlKCkgPz8ge30sXHJcbiAgICAgICAgICAgIGNhbl90aHI6IHRoaXMuY2FuX3RociA/ICcxJyA6ICcwJyxcclxuICAgICAgICAgICAgaF93X2RtZzogdGhpcy5oX3dfZG1nLFxyXG4gICAgICAgICAgICBzdGF0OiAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXQ/P3t9KSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlY29kZShqPzogSlNPTl9NYXplT2JqfHVuZGVmaW5lZCk6IElfTWF6ZU9iaiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19pbml0KGopO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfTWF6ZU9iaiwgSV9NYXplT2JqLCBKU09OX01hemVPYmogfSBmcm9tICcuL0NfTWF6ZU9iaic7XHJcbmltcG9ydCB7IENfTWF6ZU9iak1vbm8sIENfTWF6ZU9ialNob2dhaSwgSlNPTl9NYXplT2JqTW9ubywgSlNPTl9NYXplT2JqU2hvZ2FpIH0gZnJvbSAnLi9DX01hemVPYmpFdGMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5ld19NYXplT2JqKGo6IEpTT05fTWF6ZU9ianx1bmRlZmluZWQpOiBJX01hemVPYmoge1xyXG4gICAgaWYgKGogPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ19NYXplT2JqKGopO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoIChqLmNsbmFtZSkge1xyXG4gICAgICAgIGNhc2UgJ0NfTWF6ZU9iaic6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ19NYXplT2JqKGopO1xyXG4gICAgICAgIGNhc2UgJ0NfTWF6ZU9iak1vbm8nOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENfTWF6ZU9iak1vbm8oaiBhcyBKU09OX01hemVPYmpNb25vKTtcclxuICAgICAgICBjYXNlICdDX01hemVPYmpTaG9nYWknOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENfTWF6ZU9ialNob2dhaShqIGFzIEpTT05fTWF6ZU9ialNob2dhaSk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDX01hemVPYmooaik7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDX01hemVPYmosIElfTWF6ZU9iaiwgSlNPTl9NYXplT2JqIH0gZnJvbSBcIi4vQ19NYXplT2JqXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fTWF6ZU9iak1vbm8gZXh0ZW5kcyBKU09OX01hemVPYmoge1xyXG4gICAgcG9zOiAgIHt4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyLCBkOiBudW1iZXJ9LFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fTWF6ZU9ialNob2dhaSBleHRlbmRzIEpTT05fTWF6ZU9iaiB7XHJcbiAgICBwb3M6ICAge3g6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIGQ6IG51bWJlcn0sXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX01hemVPYmpNb25vIGV4dGVuZHMgQ19NYXplT2JqIGltcGxlbWVudHMgSV9NYXplT2JqIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplT2JqTW9ubykge1xyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgICAgIGNvbnN0IGpqID0ge1xyXG4gICAgICAgICAgICBjbG5hbWU6ICB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXHJcbiAgICAgICAgICAgIGNhbl90aHI6ICcxJyxcclxuICAgICAgICAgICAgaF93X2RtZzogIDAsXHJcbiAgICAgICAgICAgIHZpZXc6IHtcclxuICAgICAgICAgICAgICAgIGxheWVyOiAgIDIsXHJcbiAgICAgICAgICAgICAgICBsZXR0ZXI6ICfniaknLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9faW5pdChqaik7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ19NYXplT2JqU2hvZ2FpIGV4dGVuZHMgQ19NYXplT2JqIGltcGxlbWVudHMgSV9NYXplT2JqIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihqPzogSlNPTl9NYXplT2JqU2hvZ2FpKSB7XHJcbiAgICAgICAgc3VwZXIoaik7XHJcbiAgICAgICAgY29uc3QgamogPSB7XHJcbiAgICAgICAgICAgIGNsbmFtZTogIHRoaXMuY29uc3RydWN0b3IubmFtZSxcclxuICAgICAgICAgICAgY2FuX3RocjogJzAnLFxyXG4gICAgICAgICAgICBoX3dfZG1nOiAgMTAwLFxyXG4gICAgICAgICAgICB2aWV3OiB7XHJcbiAgICAgICAgICAgICAgICBsYXllcjogICAyLFxyXG4gICAgICAgICAgICAgICAgbGV0dGVyOiAn6ZqcJyxcclxuICAgICAgICAgICAgICAgIHNob3czRDogICcxJyxcclxuICAgICAgICAgICAgICAgIGNvbF8yOiAnIzk5OTljYycsIGNvbF9MOiAnIzY2NjZmZicsIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX19pbml0KGpqKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IElfQWJzdHJhY3QsIEpTT05fQW55IH0gZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5pbXBvcnQgeyBUX1dhbGwgfSAgICAgICAgICAgICAgIGZyb20gXCIuLi9kX21kbC9DX1dhbGxcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElfTWF6ZU9ialZpZXcgZXh0ZW5kcyBJX0Fic3RyYWN0IHtcclxuICAgIC8vIOihqOekuumWouS/gigyRHByZSkuL0NfV2FsbFxyXG4gICAgbGF5ZXI6ICAgKCk9Pm51bWJlcjtcclxuICAgIGxldHRlcjogICgpPT5zdHJpbmd8bnVsbDsgLy8gbnVsbDog6KaL44GI44Gq44GE44CB5L2V44KC44Gq44GEXHJcblxyXG4gICAgLy8g6KGo56S66Zai5L+CKDNEKVxyXG4gICAgY2FuU2hvdzogKCk9PmJvb2xlYW47XHJcbiAgICBkcm93MkQ6ICAoZmxvb3I6IFRfUmVjdCk9PnZvaWQ7XHJcbiAgICBkcm93M0Q6ICAoZnJvdDogIFRfV2FsbCwgYmFjazogVF9XYWxsKT0+dm9pZDtcclxuXHJcbiAgICBwYWRfdDogICAoKT0+bnVtYmVyOyAvL+S4iuWBtOOBruepuuOBjSjlibLlkIg6IDDjgYvjgokxKSBcclxuICAgIHBhZF9kOiAgICgpPT5udW1iZXI7IC8v5bqK5YG044Gu56m644GNKOWJsuWQiDogMOOBi+OCiTEpIFxyXG4gICAgcGFkX3M6ICAgKCk9Pm51bWJlcjsgLy/mqKrlgbTjga7nqbrjgY0o5Ymy5ZCIOiAw44GL44KJMSkgXHJcbiAgICBjb2xfZjogICAoKT0+c3RyaW5nfG51bGw7IC8v5q2j6Z2i44Gu6ImyKENTU+OCq+ODqeODvCnjgIJudWxs44Gv6YCP5piOXHJcbiAgICBjb2xfYjogICAoKT0+c3RyaW5nfG51bGw7IC8v6IOM6Z2i44Gu6ImyKENTU+OCq+ODqeODvCnjgIJudWxs44Gv6YCP5piOXHJcbiAgICBjb2xfczogICAoKT0+c3RyaW5nfG51bGw7IC8v5qiq5YG044Gu6ImyKENTU+OCq+ODqeODvCnjgIJudWxs44Gv6YCP5piOXHJcbiAgICBjb2xfdDogICAoKT0+c3RyaW5nfG51bGw7IC8v5LiK6YOo44Gu6ImyKENTU+OCq+ODqeODvCnjgIJudWxs44Gv6YCP5piO44CC44KE44KE44GT44GX44GE44GM44CB54mp5L2T44Gu5bqV6Z2i44Gr5b2T44Gf44KLXHJcbiAgICBjb2xfZDogICAoKT0+c3RyaW5nfG51bGw7IC8v5LiL6YOo44Gu6ImyKENTU+OCq+ODqeODvCnjgIJudWxs44Gv6YCP5piO44CC44KE44KE44GT44GX44GE44GM44CB54mp5L2T44Gu5aSp5LqV44Gr5b2T44Gf44KLXHJcbiAgICBjb2xfbDogICAoKT0+c3RyaW5nfG51bGw7IC8v44Op44Kk44Oz44Gu6ImyKENTU+OCq+ODqeODvClcclxuXHJcbiAgICBjb2xfMjogICAoKT0+c3RyaW5nfG51bGw7IC8vMkTjg57jg4Pjg5fjga7oibIoQ1NT44Kr44Op44O8KVxyXG4gICAgY29sX0w6ICAgKCk9PnN0cmluZ3xudWxsOyAvLzJE44Oe44OD44OX44Gu57ea44Gu6ImyKENTU+OCq+ODqeODvClcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX01hemVPYmpWaWV3IGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgY2xuYW1lPzogc3RyaW5nLFxyXG4gICAgbGF5ZXI/OiAgbnVtYmVyLFxyXG4gICAgbGV0dGVyPzogc3RyaW5nLFxyXG4gICAgc2hvdz86ICAgc3RyaW5nLFxyXG4gICAgcGFkX3Q/OiAgbnVtYmVyLCAvLyDjgqrjg5bjgrjjgqfjgq/jg4jkuIrpg6jjga7pmpnplpPjga7libLlkIgoMC4wIOOBi+OCiSAxLjApIFxyXG4gICAgcGFkX2Q/OiAgbnVtYmVyLCAvLyDjgqrjg5bjgrjjgqfjgq/jg4jkuIvpg6jjga7pmpnplpPjga7libLlkIgoMC4wIOOBi+OCiSAxLjApIFxyXG4gICAgcGFkX3M/OiAgbnVtYmVyLCAvLyDjgqrjg5bjgrjjgqfjgq/jg4jlkajlm7Ljga7pmpnplpPjga7libLlkIgoMC4wIOOBi+OCiSAxLjApIFxyXG4gICAgY29sX2Y/OiAgc3RyaW5nfG51bGwsIC8vIOOCquODluOCuOOCp+OCr+ODiOato+mdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIGNvbF9iPzogIHN0cmluZ3xudWxsLCAvLyDjgqrjg5bjgrjjgqfjgq/jg4jmraPpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBjb2xfcz86ICBzdHJpbmd8bnVsbCwgLy8g44Kq44OW44K444Kn44Kv44OI5YG06Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgY29sX3Q/OiAgc3RyaW5nfG51bGwsIC8vIOOCquODluOCuOOCp+OCr+ODiOS4iumdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIGNvbF9kPzogIHN0cmluZ3xudWxsLCAvLyDjgqrjg5bjgrjjgqfjgq/jg4jlupXpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBjb2xfbD86ICBzdHJpbmd8bnVsbCwgLy8g44Kq44OW44K444Kn44Kv44OI44Gu57ea44GuQ1NT44Kr44Op44O8IFxyXG4gICAgY29sXzI/OiAgc3RyaW5nfG51bGwsIC8vIDJE44Oe44OD44OX44Gu6Z2i44GuQ1NT44Kr44Op44O8XHJcbiAgICBjb2xfTD86ICBzdHJpbmd8bnVsbCwgLy8gMkTjg57jg4Pjg5fjga7nt5rjga5DU1Pjgqvjg6njg7xcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVF94eSAgID0ge3g6IG51bWJlciwgeTogbnVtYmVyfVxyXG5leHBvcnQgdHlwZSBUX1JlY3QgPSB7dGw6IFRfeHksIHRyOiBUX3h5LCBkbDogVF94eSwgZHI6IFRfeHl9O1xyXG5cclxuZXhwb3J0IGNsYXNzIENfTWF6ZU9ialZpZXcgaW1wbGVtZW50cyBJX01hemVPYmpWaWV3IHtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgY29uM0Q6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRHx1bmRlZmluZWQ7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldF9jb250ZXh0M0QoKTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfHVuZGVmaW5lZCB7cmV0dXJuIHRoaXM/LmNvbjNEfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRfY29udGV4dDNEKGNvbjNEPzogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7dGhpcy5jb24zRCA9IGNvbjNEfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgY29uMkQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRHx1bmRlZmluZWQ7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldF9jb250ZXh0MkQoKTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfHVuZGVmaW5lZCB7cmV0dXJuIHRoaXM/LmNvbjJEfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRfY29udGV4dDJEKGNvbjJEPzogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7dGhpcy5jb24yRCA9IGNvbjJEfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbmV3T2JqKGo/OiBKU09OX01hemVPYmpWaWV3fHVuZGVmaW5lZCk6IElfTWF6ZU9ialZpZXcge1xyXG4gICAgICAgIGogPz89IHt9O1xyXG4gICAgICAgIGouY2xuYW1lID8/PSBDX01hemVPYmpWaWV3LmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICAgICAgc3dpdGNoIChqLmNsbmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIENfTWF6ZU9ialZpZXcuY29uc3RydWN0b3IubmFtZTogICAgIHJldHVybiBuZXcgQ19NYXplT2JqVmlldyhqKTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybiBuZXcgQ19NYXplT2JqVmlldyhqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBuZXdPYmooaj86IEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkKTogSV9NYXplT2JqVmlldyB7XHJcbiAgICAgICAgcmV0dXJuIENfTWF6ZU9ialZpZXcubmV3T2JqKGopO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNsbmFtZTogICAgc3RyaW5nID0gJ0NfTWF6ZU9ialZpZXcnO1xyXG5cclxuICAgIHByaXZhdGUgbXlfbGF5ZXI6ICBudW1iZXI7ICAgICAgLy8gMkTooajnpLrjga7mmYLjga5DU1Pjg6zjgqTjg6Tjg7zjgILlkIzkvY3nva7jga7jgqrjg5bjgrjjgqfjga7lhoXjgZPjga7lgKTjgYzlpKfjgY3jgYTnianjgYzooajnpLrjgZXjgozjgotcclxuICAgIHByaXZhdGUgbXlfbGV0dGVyOiBzdHJpbmd8bnVsbDsgLy8gMkTooajnpLrjga7mmYLjga7lhajop5LmloflrZfjgIJudWxs44Gq44KJ6YCP5piOXHJcblxyXG4gICAgcHJpdmF0ZSBteV9zaG93OiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBteV9wYWRfdDogIG51bWJlcjsgLy8g44Kq44OW44K444Kn44Kv44OI5LiK6YOo44Gu6ZqZ6ZaT44Gu5Ymy5ZCIKDAuMCDjgYvjgokgMS4wKSBcclxuICAgIHByaXZhdGUgbXlfcGFkX2Q6ICBudW1iZXI7IC8vIOOCquODluOCuOOCp+OCr+ODiOS4i+mDqOOBrumamemWk+OBruWJsuWQiCgwLjAg44GL44KJIDEuMCkgXHJcbiAgICBwcml2YXRlIG15X3BhZF9zOiAgbnVtYmVyOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jlkajlm7Ljga7pmpnplpPjga7libLlkIgoMC4wIOOBi+OCiSAxLjApIFxyXG5cclxuICAgIHByaXZhdGUgbXlfY29sX2Y6ICBzdHJpbmd8bnVsbDsgLy8g44Kq44OW44K444Kn44Kv44OI5q2j6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgcHJpdmF0ZSBteV9jb2xfYjogIHN0cmluZ3xudWxsOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jmraPpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBwcml2YXRlIG15X2NvbF9zOiAgc3RyaW5nfG51bGw7IC8vIOOCquODluOCuOOCp+OCr+ODiOWBtOmdouOBrkNTU+OCq+ODqeODvCBcclxuICAgIHByaXZhdGUgbXlfY29sX3Q6ICBzdHJpbmd8bnVsbDsgLy8g44Kq44OW44K444Kn44Kv44OI5LiK6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgcHJpdmF0ZSBteV9jb2xfZDogIHN0cmluZ3xudWxsOyAvLyDjgqrjg5bjgrjjgqfjgq/jg4jlupXpnaLjga5DU1Pjgqvjg6njg7wgXHJcbiAgICBwcml2YXRlIG15X2NvbF9sOiAgc3RyaW5nfG51bGw7IC8vIOOCquODluOCuOOCp+OCr+ODiOOBrue3muOBrkNTU+OCq+ODqeODvCBcclxuXHJcbiAgICBwcml2YXRlIG15X2NvbF8yOiAgc3RyaW5nfG51bGw7IC8vIDJE44Oe44OD44OX44Gu6Z2i44GuQ1NT44Kr44Op44O8IFxyXG4gICAgcHJpdmF0ZSBteV9jb2xfTDogIHN0cmluZ3xudWxsOyAvLyAyROODnuODg+ODl+OBrue3muOBrkNTU+OCq+ODqeODvCBcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3Ioaj86IEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5jbG5hbWUgICAgID0gIHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5teV9sYXllciAgID0gIC0yO1xyXG4gICAgICAgIHRoaXMubXlfbGV0dGVyICA9ICBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLm15X3BhZF90ICAgPSAgMC4wO1xyXG4gICAgICAgIHRoaXMubXlfcGFkX2QgICA9ICAwLjA7XHJcbiAgICAgICAgdGhpcy5teV9wYWRfcyAgID0gIDAuMDtcclxuXHJcbiAgICAgICAgdGhpcy5teV9zaG93ICAgID0gIHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMubXlfY29sX2YgICA9ICcjZjhmOGY4JzsgXHJcbiAgICAgICAgdGhpcy5teV9jb2xfYiAgID0gJyNhYWFhYWEnOyBcclxuICAgICAgICB0aGlzLm15X2NvbF9zICAgPSAnI2RkZGRkZCc7IFxyXG4gICAgICAgIHRoaXMubXlfY29sX3QgICA9ICcjZmZmZmZmJzsgXHJcbiAgICAgICAgdGhpcy5teV9jb2xfZCAgID0gJyNjY2NjY2MnOyBcclxuICAgICAgICB0aGlzLm15X2NvbF9sICAgPSAnIzMzMzMzMyc7IFxyXG5cclxuICAgICAgICB0aGlzLm15X2NvbF8yICAgPSAnI2NjY2NjYyc7IFxyXG4gICAgICAgIHRoaXMubXlfY29sX0wgICA9ICcjOTk5OWZmJzsgXHJcblxyXG4gICAgICAgIGlmIChqICE9PSB1bmRlZmluZWQpIHRoaXMuX19pbml0KGopO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfX2luaXQoajogSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQpOiBJX01hemVPYmpWaWV3IHtcclxuICAgICAgICBpZiAoaiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGouY2xuYW1lICAhPT0gdW5kZWZpbmVkKSB0aGlzLmNsbmFtZSAgICA9IGouY2xuYW1lO1xyXG4gICAgICAgIGlmIChqLmxheWVyICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9sYXllciAgPSBqLmxheWVyO1xyXG4gICAgICAgIGlmIChqLmxldHRlciAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9sZXR0ZXIgPSBqLmxldHRlciAhPT0gJycgID8gai5sZXR0ZXIgOiBudWxsOyBcclxuICAgICAgICBpZiAoai5wYWRfdCAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfcGFkX3QgID0gai5wYWRfdDsgXHJcbiAgICAgICAgaWYgKGoucGFkX2QgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X3BhZF9kICA9IGoucGFkX2Q7IFxyXG4gICAgICAgIGlmIChqLnBhZF9zICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9wYWRfcyAgPSBqLnBhZF9zOyBcclxuICAgICAgICBpZiAoai5zaG93ICAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfc2hvdyAgID0gai5zaG93ICAgIT09ICcwJyA/IHRydWUgICAgIDogZmFsc2U7IFxyXG4gICAgICAgIGlmIChqLmNvbF9mICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9jb2xfZiAgPSBqLmNvbF9mICAhPT0gJycgID8gai5jb2xfZiAgOiBudWxsOyBcclxuICAgICAgICBpZiAoai5jb2xfYiAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfY29sX2IgID0gai5jb2xfYiAgIT09ICcnICA/IGouY29sX2IgIDogbnVsbDsgXHJcbiAgICAgICAgaWYgKGouY29sX3MgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2NvbF9zICA9IGouY29sX3MgICE9PSAnJyAgPyBqLmNvbF9zICA6IG51bGw7IFxyXG4gICAgICAgIGlmIChqLmNvbF90ICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9jb2xfdCAgPSBqLmNvbF90ICAhPT0gJycgID8gai5jb2xfdCAgOiBudWxsOyBcclxuICAgICAgICBpZiAoai5jb2xfZCAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfY29sX2QgID0gai5jb2xfZCAgIT09ICcnICA/IGouY29sX2QgIDogbnVsbDsgXHJcbiAgICAgICAgaWYgKGouY29sX2wgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2NvbF9sICA9IGouY29sX2wgICE9PSAnJyAgPyBqLmNvbF9sICA6IG51bGw7IFxyXG4gICAgICAgIGlmIChqLmNvbF8yICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9jb2xfMiAgPSBqLmNvbF8yICAhPT0gJycgID8gai5jb2xfMiAgOiBudWxsOyBcclxuICAgICAgICBpZiAoai5jb2xfTCAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfY29sX0wgID0gai5jb2xfTCAgIT09ICcnICA/IGouY29sX0wgIDogbnVsbDsgXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsYXllcigpOiBudW1iZXIge3JldHVybiB0aGlzLm15X2xheWVyO31cclxuICAgIHB1YmxpYyBzZXRfbGF5ZXIobGF5ZXI6IG51bWJlcikge3RoaXMubXlfbGF5ZXIgPSBsYXllcn1cclxuXHJcbiAgICBwdWJsaWMgbGV0dGVyKCk6ICBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfbGV0dGVyfVxyXG4gICAgcHVibGljIHNldF9sZXR0ZXIobGV0dGVyOiBzdHJpbmd8bnVsbCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9sZXR0ZXIgPSBsZXR0ZXJ9XHJcblxyXG4gICAgcHVibGljIGNhblNob3coKTogYm9vbGVhbiB7cmV0dXJuIHRoaXMubXlfc2hvd307XHJcbiAgICBwdWJsaWMgc2V0U2hvdyhjYW5fc2hvdzogYm9vbGVhbik6IGJvb2xlYW4ge3JldHVybiB0aGlzLm15X3Nob3cgPSBjYW5fc2hvd307XHJcblxyXG4gICAgcHVibGljIHBhZF90KCk6ICBudW1iZXIge3JldHVybiB0aGlzLm15X3BhZF90fVxyXG4gICAgcHVibGljIHBhZF9kKCk6ICBudW1iZXIge3JldHVybiB0aGlzLm15X3BhZF9kfVxyXG4gICAgcHVibGljIHBhZF9zKCk6ICBudW1iZXIge3JldHVybiB0aGlzLm15X3BhZF9zfVxyXG4gICAgcHVibGljIHNldF9wYWRfdChwYWRfdDogbnVtYmVyKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5teV9wYWRfdCA9IHRoaXMubXlfcGFkX2QgKyBwYWRfdCA8IDEuMCA/IHBhZF90IDogMC45OSAtIHRoaXMubXlfcGFkX2R9XHJcbiAgICBwdWJsaWMgc2V0X3BhZF9kKHBhZF9kOiBudW1iZXIpOiBudW1iZXIge3JldHVybiB0aGlzLm15X3BhZF9kID0gdGhpcy5teV9wYWRfdCArIHBhZF9kIDwgMS4wID8gcGFkX2QgOiAwLjk5IC0gdGhpcy5teV9wYWRfdH1cclxuICAgIHB1YmxpYyBzZXRfcGFkX3MocGFkX3M6IG51bWJlcik6IG51bWJlciB7cmV0dXJuIHRoaXMubXlfcGFkX3MgPSBwYWRfc31cclxuXHJcbiAgICBwdWJsaWMgY29sX2YoKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9mfSBcclxuICAgIHB1YmxpYyBjb2xfYigpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX2J9IFxyXG4gICAgcHVibGljIGNvbF9zKCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfc30gXHJcbiAgICBwdWJsaWMgY29sX3QoKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF90fSBcclxuICAgIHB1YmxpYyBjb2xfZCgpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX2R9IFxyXG4gICAgcHVibGljIGNvbF9sKCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfbH0gXHJcbiAgICBwdWJsaWMgc2V0X2NvbF9mKGNvbF9mOiBzdHJpbmd8bnVsbCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfZiA9IGNvbF9mfSBcclxuICAgIHB1YmxpYyBzZXRfY29sX2IoY29sX2I6IHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9iID0gY29sX2J9IFxyXG4gICAgcHVibGljIHNldF9jb2xfcyhjb2xfczogc3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX3MgPSBjb2xfc30gXHJcbiAgICBwdWJsaWMgc2V0X2NvbF90KGNvbF90OiBzdHJpbmd8bnVsbCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfdCA9IGNvbF90fSBcclxuICAgIHB1YmxpYyBzZXRfY29sX2QoY29sX2Q6IHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9kID0gY29sX2R9IFxyXG4gICAgcHVibGljIHNldF9jb2xfbChjb2xfbDogc3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX2wgPSBjb2xfbH0gXHJcblxyXG4gICAgcHVibGljIGNvbF8yKCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfMn1cclxuICAgIHB1YmxpYyBjb2xfTCgpOiBzdHJpbmd8bnVsbCB7cmV0dXJuIHRoaXMubXlfY29sX0x9XHJcbiAgICBwdWJsaWMgc2V0X2NvbF8yKGNvbF8yOiBzdHJpbmd8bnVsbCk6IHN0cmluZ3xudWxsIHtyZXR1cm4gdGhpcy5teV9jb2xfMiA9IGNvbF8yfSBcclxuICAgIHB1YmxpYyBzZXRfY29sX0woY29sX0w6IHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGwge3JldHVybiB0aGlzLm15X2NvbF9MID0gY29sX0x9IFxyXG5cclxuICAgIHB1YmxpYyBkcm93MkQocmVjdDogVF9SZWN0KTogdm9pZCB7XHJcbiAgICAgICAgZHJvdzJEX2NlbGwocmVjdCwgdGhpcy5jb2xfMigpID8/ICcjY2NjY2NjJywgdGhpcy5jb2xfTCgpID8/ICcjOTk5OWZmJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyb3czRChmcm90OiBUX1dhbGwsIGJhY2s6IFRfV2FsbCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZHJvdzNEX29ial9iYWNrICAgICAgKGZyb3QsIGJhY2spO1xyXG4gICAgICAgIHRoaXMuZHJvdzNEX29ial9kb3duICAgICAgKGZyb3QsIGJhY2spO1xyXG4gICAgICAgIHRoaXMuZHJvdzNEX29ial90b3AgICAgICAgKGZyb3QsIGJhY2spO1xyXG4gICAgICAgIHRoaXMuZHJvdzNEX29ial9yaWdodF9zaWRlKGZyb3QsIGJhY2spO1xyXG4gICAgICAgIHRoaXMuZHJvdzNEX29ial9sZWZ0X3NpZGUgKGZyb3QsIGJhY2spO1xyXG4gICAgICAgIHRoaXMuZHJvdzNEX29ial9mcm9udCAgICAgKGZyb3QsIGJhY2spO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkcm93M0Rfb2JqX2Rvd24oXHJcbiAgICAgICAgZnJvdDogIFRfV2FsbCwgXHJcbiAgICAgICAgYmFjazogIFRfV2FsbCwgXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuU2hvdygpIHx8IHRoaXMuY29sX3QoKSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnBhZF9zKCkgPD0gMC4wICYmIHRoaXMucGFkX3QoKSA+PSAxLjApIHtcclxuICAgICAgICAgICAgZHJvdzNEX2NlbGxfZmxvb3IoZnJvdCwgYmFjaywgdGhpcy5jb2xfdCgpID8/ICcjNjY2NmZmJywgdGhpcy5jb2xfbCgpID8/ICcjOTk5OWZmJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjb25zdCBvID0gX19jYWxjX3BhZGRpbmdfb2JqKHRoaXMsIGZyb3QsIGJhY2spO1xyXG4gICAgICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICAgICAgdGw6IG8uZmRsLFxyXG4gICAgICAgICAgICB0cjogby5mZHIsXHJcbiAgICAgICAgICAgIGRyOiBvLmJkcixcclxuICAgICAgICAgICAgZGw6IG8uYmRsLFxyXG4gICAgICAgIH1cclxuICAgICAgICBkcm93M0RfY2VsbChyZWN0LCB0aGlzLmNvbF90KCksIHRoaXMuY29sX2woKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcm93M0Rfb2JqX3RvcChcclxuICAgICAgICBmcm90OiAgVF9XYWxsLCBcclxuICAgICAgICBiYWNrOiAgVF9XYWxsLCBcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5TaG93KCkgfHwgdGhpcy5jb2xfZCgpID09PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMucGFkX3MoKSA8PSAwLjAgJiYgdGhpcy5wYWRfZCgpID49IDEuMCkge1xyXG4gICAgICAgICAgICBkcm93M0RfY2VsbF9jZWlsaW5nKGZyb3QsIGJhY2ssIHRoaXMuY29sX2QoKSA/PyAnI2FhYWFhYScsIHRoaXMuY29sX2woKSA/PyAnIzk5OTlmZicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbyA9IF9fY2FsY19wYWRkaW5nX29iaih0aGlzLCBmcm90LCBiYWNrKTtcclxuICAgICAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgICAgIHRsOiBvLmZ0bCxcclxuICAgICAgICAgICAgdHI6IG8uZnRyLFxyXG4gICAgICAgICAgICBkcjogby5idHIsXHJcbiAgICAgICAgICAgIGRsOiBvLmJ0bCxcclxuICAgICAgICB9XHJcbiAgICAgICAgZHJvdzNEX2NlbGwocmVjdCwgdGhpcy5jb2xfZCgpLCB0aGlzLmNvbF9sKCkpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkcm93M0Rfb2JqX2Zyb250KFxyXG4gICAgICAgIGZyb3Q6ICBUX1dhbGwsIFxyXG4gICAgICAgIGJhY2s6ICBUX1dhbGwsIFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblNob3coKSB8fCB0aGlzLmNvbF9mKCkgPT09IG51bGwpIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IG8gPSBfX2NhbGNfcGFkZGluZ19vYmoodGhpcywgZnJvdCwgYmFjayk7XHJcbiAgICAgICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgICAgICB0bDogby5mdGwsIFxyXG4gICAgICAgICAgICB0cjogby5mdHIsIFxyXG4gICAgICAgICAgICBkcjogby5mZHIsIFxyXG4gICAgICAgICAgICBkbDogby5mZGwsIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGRyb3czRF9jZWxsKHJlY3QsIHRoaXMuY29sX2YoKSwgdGhpcy5jb2xfbCgpKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZHJvdzNEX29ial9iYWNrKFxyXG4gICAgICAgIGZyb3Q6ICBUX1dhbGwsIFxyXG4gICAgICAgIGJhY2s6ICBUX1dhbGwsIFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblNob3coKSB8fCB0aGlzLmNvbF9iKCkgPT09IG51bGwpIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IG8gPSBfX2NhbGNfcGFkZGluZ19vYmoodGhpcywgZnJvdCwgYmFjayk7XHJcbiAgICAgICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgICAgICB0bDogby5idGwsIFxyXG4gICAgICAgICAgICB0cjogby5idHIsIFxyXG4gICAgICAgICAgICBkcjogby5iZHIsIFxyXG4gICAgICAgICAgICBkbDogby5iZGwsIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGRyb3czRF9jZWxsKHJlY3QsIHRoaXMuY29sX2IoKSwgdGhpcy5jb2xfbCgpKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZHJvdzNEX29ial9sZWZ0X3NpZGUoXHJcbiAgICAgICAgZnJvdDogIFRfV2FsbCwgXHJcbiAgICAgICAgYmFjazogIFRfV2FsbCwgXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuU2hvdygpIHx8IHRoaXMuY29sX3MoKSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbyA9IF9fY2FsY19wYWRkaW5nX29iaih0aGlzLCBmcm90LCBiYWNrKTtcclxuICAgICAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgICAgIHRsOiBvLmJ0bCxcclxuICAgICAgICAgICAgdHI6IG8uZnRsLFxyXG4gICAgICAgICAgICBkcjogby5mZGwsXHJcbiAgICAgICAgICAgIGRsOiBvLmJkbCxcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBkcm93M0RfY2VsbChyZWN0LCB0aGlzLmNvbF9zKCksIHRoaXMuY29sX2woKSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRyb3czRF9vYmpfcmlnaHRfc2lkZShcclxuICAgICAgICBmcm90OiAgVF9XYWxsLCBcclxuICAgICAgICBiYWNrOiAgVF9XYWxsLCBcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5TaG93KCkgfHwgdGhpcy5jb2xfcygpID09PSBudWxsKSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBjb25zdCBvID0gX19jYWxjX3BhZGRpbmdfb2JqKHRoaXMsIGZyb3QsIGJhY2spO1xyXG4gICAgICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICAgICAgdGw6IG8uZnRyLFxyXG4gICAgICAgICAgICB0cjogby5idHIsXHJcbiAgICAgICAgICAgIGRyOiBvLmJkcixcclxuICAgICAgICAgICAgZGw6IG8uZmRyLFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGRyb3czRF9jZWxsKHJlY3QsIHRoaXMuY29sX3MoKSwgdGhpcy5jb2xfbCgpKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9NYXplT2JqVmlldyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY25hbWU6ICAgdGhpcy5jbG5hbWUsXHJcbiAgICAgICAgICAgIGxheWVyOiAgIHRoaXMubXlfbGF5ZXIsXHJcbiAgICAgICAgICAgIGxldHRlcjogIHRoaXMubXlfbGV0dGVyID8/ICcnLFxyXG4gICAgICAgICAgICBwYWRfdDogICB0aGlzLm15X3BhZF90LCBcclxuICAgICAgICAgICAgcGFkX2Q6ICAgdGhpcy5teV9wYWRfZCwgXHJcbiAgICAgICAgICAgIHBhZF9zOiAgIHRoaXMubXlfcGFkX3MsIFxyXG4gICAgICAgICAgICBzaG93OiAgICB0aGlzLmNhblNob3coKSA/ICcxJyA6ICcwJyxcclxuICAgICAgICAgICAgY29sX2Y6ICAgdGhpcy5teV9jb2xfZiA/PyAnJywgIFxyXG4gICAgICAgICAgICBjb2xfYjogICB0aGlzLm15X2NvbF9iID8/ICcnLCAgXHJcbiAgICAgICAgICAgIGNvbF9zOiAgIHRoaXMubXlfY29sX3MgPz8gJycsIFxyXG4gICAgICAgICAgICBjb2xfdDogICB0aGlzLm15X2NvbF90ID8/ICcnLCBcclxuICAgICAgICAgICAgY29sX2Q6ICAgdGhpcy5teV9jb2xfZCA/PyAnJywgXHJcbiAgICAgICAgICAgIGNvbF9sOiAgIHRoaXMubXlfY29sX2wgPz8gJycsIFxyXG4gICAgICAgICAgICBjb2xfMjogICB0aGlzLm15X2NvbF8yID8/ICcnLCBcclxuICAgICAgICAgICAgY29sX0w6ICAgdGhpcy5teV9jb2xfTCA/PyAnJywgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShqOiBKU09OX01hemVPYmpWaWV3fHVuZGVmaW5lZCk6IElfTWF6ZU9ialZpZXcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9faW5pdChqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVjb2RlKGo6IEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkKTogSV9NYXplT2JqVmlldyB7XHJcbiAgICAgICAgcmV0dXJuIENfTWF6ZU9ialZpZXcubmV3T2JqKGopO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIF9fY2FsY19wYWRkaW5nX29iaihcclxuICAgIG9iajogICBJX01hemVPYmpWaWV3LFxyXG4gICAgZnJvdDogIFRfV2FsbCwgXHJcbiAgICBiYWNrOiAgVF9XYWxsLCBcclxuKToge1xyXG4gICAgLy8g6K2Y5Yil5a2Q44Gu5oSP5ZGzXHJcbiAgICAvLyDlt6bnq6/vvJrliY3lvozjga7ljLrliKXjgIBmOuWJjemdouOAgGI66IOM6Z2iXHJcbiAgICAvLyDkuK3lpK7vvJrkuIrkuIvjga7ljLrliKXjgIB0OuS4iui+uuOAgGQ65LiL6L66XHJcbiAgICAvLyDlj7Pnq6/vvJrlt6blj7Pjga7ljLrliKXjgIBsOuW3puWBtOOAgHI65Y+z5YG0XHJcbiAgICBmdGw6VF94eSwgZnRyOlRfeHksIGZkcjpUX3h5LCBmZGw6VF94eSwgXHJcbiAgICBidGw6VF94eSwgYnRyOlRfeHksIGJkcjpUX3h5LCBiZGw6VF94eSwgXHJcbn0ge1xyXG4gICAgY29uc3QgcmVjdF9mcm90ID0gZnJvdDtcclxuICAgIGNvbnN0IHJlY3RfYmFjayA9IGJhY2s7XHJcblxyXG4gICAgY29uc3QgcmF0aW9fWCAgID0gb2JqLnBhZF9zKCkgLyAyLjA7XHJcbiAgICBjb25zdCByYXRpb19UICAgPSBvYmoucGFkX3QoKTtcclxuICAgIGNvbnN0IHJhdGlvX0QgICA9IG9iai5wYWRfZCgpO1xyXG5cclxuICAgIGNvbnN0IGZyb3RfcGFkX1ggID0gTWF0aC5hYnMocmVjdF9mcm90Lm1heF94IC0gcmVjdF9mcm90Lm1pbl94KSAqIHJhdGlvX1g7XHJcbiAgICBjb25zdCBiYWNrX3BhZF9YICA9IE1hdGguYWJzKHJlY3RfYmFjay5tYXhfeCAtIHJlY3RfYmFjay5taW5feCkgKiByYXRpb19YO1xyXG5cclxuICAgIGNvbnN0IGZyb3RfcGFkX1QgID0gTWF0aC5hYnMocmVjdF9mcm90Lm1heF95IC0gcmVjdF9mcm90Lm1pbl95KSAqIHJhdGlvX1Q7XHJcbiAgICBjb25zdCBiYWNrX3BhZF9UICA9IE1hdGguYWJzKHJlY3RfYmFjay5tYXhfeSAtIHJlY3RfYmFjay5taW5feSkgKiByYXRpb19UO1xyXG5cclxuICAgIGNvbnN0IGZyb3RfcGFkX0QgID0gTWF0aC5hYnMocmVjdF9mcm90Lm1heF95IC0gcmVjdF9mcm90Lm1pbl95KSAqIHJhdGlvX0Q7XHJcbiAgICBjb25zdCBiYWNrX3BhZF9EICA9IE1hdGguYWJzKHJlY3RfYmFjay5tYXhfeSAtIHJlY3RfYmFjay5taW5feSkgKiByYXRpb19EO1xyXG5cclxuICAgIC8vIOODkeODh+OCo+ODs+OCsOioreWumuW+jOOBrlhZ5bqn5qiZ44KS6KiI566X44GZ44KL44Gf44KB44GrXHJcbiAgICAvLyDlv4XopoHjgarnt5rliIbjga7kvY3nva7msbrjgoHjgpLjgZnjgotcclxuICAgIGNvbnN0IGZyb3RfdG9wX2xmdCA9IHt4OiByZWN0X2Zyb3QubWluX3ggKyBmcm90X3BhZF9YLCB5OiByZWN0X2Zyb3QubWluX3kgKyBmcm90X3BhZF9UfVxyXG4gICAgY29uc3QgZnJvdF90b3Bfcmd0ID0ge3g6IHJlY3RfZnJvdC5tYXhfeCAtIGZyb3RfcGFkX1gsIHk6IHJlY3RfZnJvdC5taW5feSArIGZyb3RfcGFkX1R9XHJcbiAgICBjb25zdCBmcm90X2R3bl9sZnQgPSB7eDogcmVjdF9mcm90Lm1pbl94ICsgZnJvdF9wYWRfWCwgeTogcmVjdF9mcm90Lm1heF95IC0gZnJvdF9wYWRfRH1cclxuICAgIGNvbnN0IGZyb3RfZHduX3JndCA9IHt4OiByZWN0X2Zyb3QubWF4X3ggLSBmcm90X3BhZF9YLCB5OiByZWN0X2Zyb3QubWF4X3kgLSBmcm90X3BhZF9EfVxyXG5cclxuICAgIGNvbnN0IGJhY2tfdG9wX2xmdCA9IHt4OiByZWN0X2JhY2subWluX3ggKyBiYWNrX3BhZF9YLCB5OiByZWN0X2JhY2subWluX3kgKyBiYWNrX3BhZF9UfVxyXG4gICAgY29uc3QgYmFja190b3Bfcmd0ID0ge3g6IHJlY3RfYmFjay5tYXhfeCAtIGJhY2tfcGFkX1gsIHk6IHJlY3RfYmFjay5taW5feSArIGJhY2tfcGFkX1R9XHJcbiAgICBjb25zdCBiYWNrX2R3bl9sZnQgPSB7eDogcmVjdF9iYWNrLm1pbl94ICsgYmFja19wYWRfWCwgeTogcmVjdF9iYWNrLm1heF95IC0gYmFja19wYWRfRH1cclxuICAgIGNvbnN0IGJhY2tfZHduX3JndCA9IHt4OiByZWN0X2JhY2subWF4X3ggLSBiYWNrX3BhZF9YLCB5OiByZWN0X2JhY2subWF4X3kgLSBiYWNrX3BhZF9EfVxyXG5cclxuICAgIGxldCBmdGwgPSBfX2NhbGNfcGFkZGluZ194eShmcm90X3RvcF9sZnQsIGJhY2tfdG9wX2xmdCwgcmF0aW9fWCk7XHJcbiAgICBsZXQgZnRyID0gX19jYWxjX3BhZGRpbmdfeHkoZnJvdF90b3Bfcmd0LCBiYWNrX3RvcF9yZ3QsIHJhdGlvX1gpO1xyXG4gICAgbGV0IGZkbCA9IF9fY2FsY19wYWRkaW5nX3h5KGZyb3RfZHduX2xmdCwgYmFja19kd25fbGZ0LCByYXRpb19YKTtcclxuICAgIGxldCBmZHIgPSBfX2NhbGNfcGFkZGluZ194eShmcm90X2R3bl9yZ3QsIGJhY2tfZHduX3JndCwgcmF0aW9fWCk7XHJcblxyXG4gICAgbGV0IGJ0bCA9IF9fY2FsY19wYWRkaW5nX3h5KGJhY2tfdG9wX2xmdCwgZnJvdF90b3BfbGZ0LCByYXRpb19YKTtcclxuICAgIGxldCBidHIgPSBfX2NhbGNfcGFkZGluZ194eShiYWNrX3RvcF9yZ3QsIGZyb3RfdG9wX3JndCwgcmF0aW9fWCk7XHJcbiAgICBsZXQgYmRsID0gX19jYWxjX3BhZGRpbmdfeHkoYmFja19kd25fbGZ0LCBmcm90X2R3bl9sZnQsIHJhdGlvX1gpO1xyXG4gICAgbGV0IGJkciA9IF9fY2FsY19wYWRkaW5nX3h5KGJhY2tfZHduX3JndCwgZnJvdF9kd25fcmd0LCByYXRpb19YKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZ0bDogZnRsLCBmdHI6IGZ0cixcclxuICAgICAgICBmZGw6IGZkbCwgZmRyOiBmZHIsXHJcbiAgICAgICAgYnRsOiBidGwsIGJ0cjogYnRyLFxyXG4gICAgICAgIGJkbDogYmRsLCBiZHI6IGJkcixcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBfX2NhbGNfcGFkZGluZ194eShmcm90OiBUX3h5LCBiYWNrOiBUX3h5LCByYXRpbzogbnVtYmVyKTogVF94eSB7XHJcbiAgICAgICAgLy8g57ea5YiGKEF4ICsgQiA9IHkp44Gu5pa556iL5byP44Gu5L+C5pWw44KS5rGC44KB44KLXHJcbiAgICAgICAgY29uc3QgQSA9IChmcm90LnkgLSBiYWNrLnkpIC8gKGZyb3QueCAtIGJhY2sueCk7XHJcbiAgICAgICAgY29uc3QgQiA9ICBmcm90LnkgLSBBICogZnJvdC54O1xyXG4gICAgXHJcbiAgICAgICAgLy8g44OR44OH44Kj44Oz44Kw6Kq/5pW05b6M44GuWFnluqfmqJnjga7oqIjnrpdcclxuICAgICAgICBjb25zdCBwX2Zyb3RfeCA9IGZyb3QueCArIChiYWNrLnggLSBmcm90LngpICogcmF0aW87XHJcbiAgICAgICAgY29uc3QgcF9mcm90X3kgPSBBICogcF9mcm90X3ggKyBCO1xyXG5cclxuICAgICAgICByZXR1cm4ge3g6IHBfZnJvdF94LCB5OiBwX2Zyb3RfeX07XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkcm93M0RfY2VsbF9mbG9vcihcclxuICAgICAgICByZWN0X2Zyb3Q6IFRfV2FsbCwgXHJcbiAgICAgICAgcmVjdF9iYWNrOiBUX1dhbGwsIFxyXG4gICAgICAgIGZpbGw6IHN0cmluZyA9ICcjNjY2NmZmJywgXHJcbiAgICAgICAgbGluZTogc3RyaW5nID0gJyM5OTk5ZmYnXHJcbiAgICApOiB2b2lkIHtcclxuXHJcbiAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgdGw6IHt4OiByZWN0X2Zyb3QubWluX3gsIHk6IHJlY3RfZnJvdC5tYXhfeX0sXHJcbiAgICAgICAgdHI6IHt4OiByZWN0X2Zyb3QubWF4X3gsIHk6IHJlY3RfZnJvdC5tYXhfeX0sXHJcbiAgICAgICAgZHI6IHt4OiByZWN0X2JhY2subWF4X3gsIHk6IHJlY3RfYmFjay5tYXhfeX0sXHJcbiAgICAgICAgZGw6IHt4OiByZWN0X2JhY2subWluX3gsIHk6IHJlY3RfYmFjay5tYXhfeX1cclxuICAgIH1cclxuICAgIGRyb3czRF9jZWxsKHJlY3QsIGZpbGwsIGxpbmUpO1xyXG59XHJcbmZ1bmN0aW9uIGRyb3czRF9jZWxsX2NlaWxpbmcoXHJcbiAgICAgICAgcmVjdF9mcm90OiBUX1dhbGwsIFxyXG4gICAgICAgIHJlY3RfYmFjazogVF9XYWxsLCBcclxuICAgICAgICBmaWxsOiBzdHJpbmcgPSAnI2FhYWFhYScsIFxyXG4gICAgICAgIGxpbmU6IHN0cmluZyA9ICcjOTk5OWZmJ1xyXG4gICAgKTogdm9pZCB7XHJcblxyXG4gICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgIHRsOiB7eDogcmVjdF9mcm90Lm1pbl94LCB5OiByZWN0X2Zyb3QubWluX3l9LFxyXG4gICAgICAgIHRyOiB7eDogcmVjdF9mcm90Lm1heF94LCB5OiByZWN0X2Zyb3QubWluX3l9LFxyXG4gICAgICAgIGRyOiB7eDogcmVjdF9iYWNrLm1heF94LCB5OiByZWN0X2JhY2subWluX3l9LFxyXG4gICAgICAgIGRsOiB7eDogcmVjdF9iYWNrLm1pbl94LCB5OiByZWN0X2JhY2subWluX3l9XHJcbiAgICB9XHJcbiAgICBkcm93M0RfY2VsbChyZWN0LCBmaWxsLCBsaW5lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJvdzJEX2NlbGwocjogVF9SZWN0LCBmaWxsOiBzdHJpbmd8bnVsbCwgbGluZTogc3RyaW5nfG51bGwpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbiA9IENfTWF6ZU9ialZpZXcuZ2V0X2NvbnRleHQyRCgpOyAgIC8vISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXHJcbiAgICBpZiAoY29uID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICBjb24uYmVnaW5QYXRoKCk7XHJcbiAgICBjb24ubW92ZVRvKHIudGwueCwgci50bC55KTtcclxuICAgIGNvbi5saW5lVG8oci50ci54LCByLnRyLnkpO1xyXG4gICAgY29uLmxpbmVUbyhyLmRyLngsIHIuZHIueSk7XHJcbiAgICBjb24ubGluZVRvKHIuZGwueCwgci5kbC55KTtcclxuICAgIGNvbi5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICBpZiAoZmlsbCAhPSBudWxsKSB7XHJcbiAgICAgICAgY29uLmZpbGxTdHlsZSAgID0gZmlsbDtcclxuICAgICAgICBjb24uZmlsbCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxpbmUgIT09IG51bGwpIHtcclxuICAgICAgICBjb24uc3Ryb2tlU3R5bGUgPSBsaW5lO1xyXG4gICAgICAgIGNvbi5saW5lV2lkdGggICA9IDE7XHJcbiAgICAgICAgY29uLnN0cm9rZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkcm93M0RfY2VsbChyOiBUX1JlY3QsIGZpbGw6IHN0cmluZ3xudWxsLCBsaW5lOiBzdHJpbmd8bnVsbCk6IHZvaWQge1xyXG4gICAgY29uc3QgY29uID0gQ19NYXplT2JqVmlldy5nZXRfY29udGV4dDNEKCk7XHJcbiAgICBpZiAoY29uID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICBjb24uYmVnaW5QYXRoKCk7XHJcbiAgICBjb24ubW92ZVRvKHIudGwueCwgci50bC55KTtcclxuICAgIGNvbi5saW5lVG8oci50ci54LCByLnRyLnkpO1xyXG4gICAgY29uLmxpbmVUbyhyLmRyLngsIHIuZHIueSk7XHJcbiAgICBjb24ubGluZVRvKHIuZGwueCwgci5kbC55KTtcclxuICAgIGNvbi5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICBpZiAoZmlsbCAhPSBudWxsKSB7XHJcbiAgICAgICAgY29uLmZpbGxTdHlsZSAgID0gZmlsbDtcclxuICAgICAgICBjb24uZmlsbCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxpbmUgIT09IG51bGwpIHtcclxuICAgICAgICBjb24uc3Ryb2tlU3R5bGUgPSBsaW5lO1xyXG4gICAgICAgIGNvbi5saW5lV2lkdGggICA9IDE7XHJcbiAgICAgICAgY29uLnN0cm9rZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ19Mb2NhdGlvbiwgSlNPTl9Mb2NhdGlvbiB9IGZyb20gXCIuL0NfTG9jYXRpb25cIjtcclxuaW1wb3J0IHsgSV9KU09OX1VuaXEgfSAgICAgICAgICAgICAgIGZyb20gXCIuL0NfU2F2ZUluZm9cIjtcclxuaW1wb3J0IHsgX2dldF91dWlkIH0gICAgICAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9Nb3ZhYmxlUG9pbnQgZXh0ZW5kcyBKU09OX0xvY2F0aW9uIHtcclxuICAgIHVuaXFfaWQ/OiAgc3RyaW5nLFxyXG4gICAgY3VyX3VybD86ICBzdHJpbmcsXHJcbiAgICB0ZWFtX3VpZD86IHN0cmluZyxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9tdnB0X2luZm8oYTogSlNPTl9Nb3ZhYmxlUG9pbnR8dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydChcIk12UHQgSW5mbzpcIiBcclxuICAgICAgICArIFwiXFxudW5pcV9pZDogIFwiICArIChhLnVuaXFfaWQgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfdXJsOiAgXCIgICsgKGEuY3VyX3VybCAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnRlYW1fdWlkOiBcIiAgKyAoYS50ZWFtX3VpZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubGNrZDogXCIgICAgICArIChhLmtpbmQgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sY25tOiBcIiAgICAgICsgKGEubmFtZSAgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxjaWQ6IFwiICAgICAgKyAoYS5sb2NfdWlkICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3g6IFwiICAgICArIChhLmxvY19wb3M/LnggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfeTogXCIgICAgICsgKGEubG9jX3Bvcz8ueSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl96OiBcIiAgICAgKyAoYS5sb2NfcG9zPy56ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX2Q6IFwiICAgICArIChhLmxvY19wb3M/LmQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDX01vdmFibGVQb2ludCBleHRlbmRzIENfTG9jYXRpb24gaW1wbGVtZW50cyBJX0pTT05fVW5pcSB7XHJcbiAgICBwcm90ZWN0ZWQgdW5pcV9pZDogIHN0cmluZztcclxuICAgIHByb3RlY3RlZCBjdXJfdXJsOiAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHRlYW1fdWlkOiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGpzb24/OiBKU09OX01vdmFibGVQb2ludCkge1xyXG4gICAgICAgIHN1cGVyKGpzb24pO1xyXG4gICAgICAgIHRoaXMudW5pcV9pZCAgPSAnTXZQb2ludCMnICsgX2dldF91dWlkKCk7XHJcbiAgICAgICAgdGhpcy5jdXJfdXJsICA9ICcnO1xyXG4gICAgICAgIHRoaXMudGVhbV91aWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmIChqc29uICE9PSB1bmRlZmluZWQgJiYganNvbiAhPT0gbnVsbCkgdGhpcy5kZWNvZGUoanNvbik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdWlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnVuaXFfaWR9XHJcbiAgICBwdWJsaWMgdXJsKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmN1cl91cmx9XHJcbiAgICBwdWJsaWMgdGlkKCk6IHN0cmluZ3x1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50ZWFtX3VpZH1cclxuXHJcbiAgICBwdWJsaWMgbmV3X3VpZCgpOiB2b2lkIHt0aGlzLnVuaXFfaWQgPSAnTXZQb2ludCMnICsgX2dldF91dWlkKCk7fVxyXG4gICAgcHVibGljIHNldF91cmwodXJsOiBzdHJpbmcpOiB2b2lkIHsgdGhpcy5jdXJfdXJsICA9IHVybDt9XHJcbiAgICBwdWJsaWMgc2V0X3RpZCh0aWQ6IHN0cmluZyk6IHZvaWQgeyB0aGlzLnRlYW1fdWlkID0gdGlkO31cclxuXHJcbiAgICBwdWJsaWMgY2xvbmUoKTogQ19Nb3ZhYmxlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0IG12cHQgPSBuZXcgQ19Nb3ZhYmxlUG9pbnQodGhpcy5lbmNvZGUoKSk7XHJcbiAgICAgICAgbXZwdC5uZXdfdWlkKCk7XHJcbiAgICAgICAgcmV0dXJuIG12cHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZyb21KU09OKHR4dDogc3RyaW5nKTogQ19Nb3ZhYmxlUG9pbnQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGogPSBKU09OLnBhcnNlKHR4dCkgYXMgSlNPTl9Nb3ZhYmxlUG9pbnQ7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlY29kZShqKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB0b0pTT04oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5lbmNvZGUoKSwgbnVsbCwgXCJcXHRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX29ial90b19zdHJpbmcob2E6IENfTW92YWJsZVBvaW50KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2EuZW5jb2RlKCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX29iakFycmF5X3RvX3N0cmluZyhvYWE6IHtbdWlkOiBzdHJpbmddOiBDX01vdmFibGVQb2ludH0pOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IG9hID0gW10gYXMgSlNPTl9Nb3ZhYmxlUG9pbnRbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGlpIGluIG9hYSkgb2EucHVzaChvYWFbaWldLmVuY29kZSgpKTtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2EpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ190b19vYmoodHh0OiBzdHJpbmcpOiBDX01vdmFibGVQb2ludCB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaiAgID0gSlNPTi5wYXJzZSh0eHQpIGFzIEpTT05fTW92YWJsZVBvaW50W107XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ19Nb3ZhYmxlUG9pbnQoKS5kZWNvZGUoaik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ19Nb3ZhYmxlUG9pbnQoKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ190b19vYmpBcnJheSh0eHQ6IHN0cmluZyk6IHtbdWlkOiBzdHJpbmddOiBDX01vdmFibGVQb2ludH0ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGogICA9IEpTT04ucGFyc2UodHh0KSBhcyBKU09OX01vdmFibGVQb2ludFtdO1xyXG4gICAgICAgICAgICBjb25zdCBtcGEgPSB7fSBhcyB7W2lkOiBzdHJpbmddOiBDX01vdmFibGVQb2ludH07XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgamogb2Ygaikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWFhID0gbmV3IENfTW92YWJsZVBvaW50KCkuZGVjb2RlKGpqKTtcclxuICAgICAgICAgICAgICAgIG1wYVthYWEudWlkKCldID0gYWFhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtcGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9Nb3ZhYmxlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0IGogPSBzdXBlci5lbmNvZGUoKSBhcyBKU09OX01vdmFibGVQb2ludDtcclxuICAgICAgICBqLnVuaXFfaWQgID0gdGhpcy51bmlxX2lkO1xyXG4gICAgICAgIGouY3VyX3VybCAgPSB0aGlzLmN1cl91cmw7XHJcbiAgICAgICAgai50ZWFtX3VpZCA9IHRoaXMudGVhbV91aWQgPz8gJyc7XHJcbiAgICAgICAgcmV0dXJuIGo7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo/OiBKU09OX01vdmFibGVQb2ludCk6IENfTW92YWJsZVBvaW50IHtcclxuICAgICAgICBzdXBlci5kZWNvZGUoaik7XHJcbiAgICAgICAgaWYgKGogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKGoudW5pcV9pZCAgIT09IHVuZGVmaW5lZCkgdGhpcy51bmlxX2lkICA9IGoudW5pcV9pZDtcclxuICAgICAgICBpZiAoai5jdXJfdXJsICAhPT0gdW5kZWZpbmVkKSB0aGlzLmN1cl91cmwgID0gai5jdXJfdXJsO1xyXG4gICAgICAgIGlmIChqLnRlYW1fdWlkICE9PSB1bmRlZmluZWQpIHRoaXMudGVhbV91aWQgPSBqLnRlYW1fdWlkO1xyXG5cclxuICAgICAgICBpZiAodGhpcy50ZWFtX3VpZCA9PT0gJycpIHRoaXMudGVhbV91aWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIk12UHQgSW5mbzpcIiBcclxuICAgICAgICAgICAgKyBcIlxcbnVuaXFfaWQ6ICBcIiAgKyAodGhpcy51bmlxX2lkICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl91cmw6ICBcIiAgKyAodGhpcy5jdXJfdXJsICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnRlYW1fdWlkOiBcIiAgKyAodGhpcy50ZWFtX3VpZCAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxja2Q6IFwiICAgICAgKyAodGhpcy5sb2Nfa2luZCAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxjbm06IFwiICAgICAgKyAodGhpcy5sb2NfbmFtZSAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxjaWQ6IFwiICAgICAgKyAodGhpcy5sb2NfdWlkICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl94OiBcIiAgICAgKyAodGhpcy5sb2NfcG9zPy54ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl95OiBcIiAgICAgKyAodGhpcy5sb2NfcG9zPy55ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl96OiBcIiAgICAgKyAodGhpcy5sb2NfcG9zPy56ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmN1cl9kOiBcIiAgICAgKyAodGhpcy5sb2NfcG9zPy5kID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IElfSlNPTiwgSlNPTl9BbnkgfSBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fUG9pbnQgZXh0ZW5kcyBKU09OX0FueSB7XHJcbiAgICB4PzogbnVtYmVyLFxyXG4gICAgeT86IG51bWJlcixcclxuICAgIHo/OiBudW1iZXIsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1BvaW50IGltcGxlbWVudHMgSV9KU09Oe1xyXG4gICAgcHVibGljIHg6IG51bWJlcjtcclxuICAgIHB1YmxpYyB5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgejogbnVtYmVyO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg/OiBudW1iZXJ8Q19Qb2ludHxKU09OX1BvaW50fHVuZGVmaW5lZCwgeT86IG51bWJlciwgej86IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHRoaXMueSA9IHRoaXMueiA9IC0zO1xyXG5cclxuICAgICAgICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IDA7IHRoaXMueSA9IDA7IHRoaXMueiA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB5ID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB6ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHg7IHRoaXMueSA9IHk7IHRoaXMueiA9IHo7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcIm9iamVjdFwiKSB7IFxyXG4gICAgICAgICAgICBpZiAoeCBpbnN0YW5jZW9mIENfUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMueCA9IHgueDsgdGhpcy55ID0geC55OyB0aGlzLnogPSB4Lno7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlY29kZSh4KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnggPSB0aGlzLnkgPSB0aGlzLnogPSAtMjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldF9wKCk6IENfUG9pbnQge3JldHVybiBuZXcgQ19Qb2ludCh0aGlzKX0gXHJcbiAgICBwdWJsaWMgc2V0X3AocDogQ19Qb2ludCk6IENfUG9pbnR8dW5kZWZpbmVkIHtcclxuICAgICAgICB0aGlzLnggPSBwLng7IHRoaXMueSA9IHAueTsgdGhpcy56ID0gcC56O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc19leGlzdCh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICh4ID09IHRoaXMueCAmJiB5ID09IHRoaXMueSAmJiB6ID09IHRoaXMueik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgd2l0aGluKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHAueCA9PSB0aGlzLnggJiYgcC55ID09IHRoaXMueSAmJiBwLnogPT0gdGhpcy56KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1BvaW50IHtcclxuICAgICAgICByZXR1cm4ge3g6IHRoaXMueCwgeTogdGhpcy55LCB6OiB0aGlzLnp9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhPzogSlNPTl9Qb2ludCk6IENfUG9pbnQge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChhLnggPT09IHVuZGVmaW5lZCB8fCBhLnkgPT09IHVuZGVmaW5lZCB8fCBhLnogPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgdGhpcy54ID0gYS54OyB0aGlzLnkgPSBhLnk7IHRoaXMueiA9IGEuejtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfUG9pbnQsIEpTT05fUG9pbnQgfSBmcm9tICcuL0NfUG9pbnQnO1xyXG5pbXBvcnQge1RfTWFrZUVudW1UeXBlfSAgICAgICAgZnJvbSBcIi4uL2RfdXRsL1RfTWFrZUVudW1UeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVF9EaXJlY3Rpb246e1tkaXI6IHN0cmluZ106IG51bWJlcn0gPSB7XHJcbiAgICBOOiAwLFxyXG4gICAgRTogMSxcclxuICAgIFM6IDIsXHJcbiAgICBXOiAzLFxyXG4gICAgWDogOTlcclxufSBhcyBjb25zdDtcclxuZXhwb3J0IHR5cGUgVF9EaXJlY3Rpb24gPSBUX01ha2VFbnVtVHlwZTx0eXBlb2YgVF9EaXJlY3Rpb24+O1xyXG5cclxuZnVuY3Rpb24gX2Rpcl9rZXkoZGlyOiBUX0RpcmVjdGlvbiB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoVF9EaXJlY3Rpb24pLmZpbmQoa2V5ID0+IFRfRGlyZWN0aW9uW2tleV0gPT09IGRpcikgPz8gXCI/Pz8/XCI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fUG9pbnREaXIgZXh0ZW5kcyBKU09OX1BvaW50IHtcclxuICAgIGQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9QRF9pbmZvKGE6IEpTT05fUG9pbnREaXJ8dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydChcIlBvaW50RGF0YSBJbmZvOlwiIFxyXG4gICAgICAgICsgXCJcXG54OiBcIiAgICAgKyAoYT8ueCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnk6IFwiICAgICArIChhPy55ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuejogXCIgICAgICsgKGE/LnogPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5kOiBcIiAgICAgKyAoYT8uZCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgIENfUG9pbnREaXIgZXh0ZW5kcyBDX1BvaW50IHtcclxuICAgIHB1YmxpYyBkOiBUX0RpcmVjdGlvbjtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihkPzogbnVtYmVyfFRfRGlyZWN0aW9ufENfUG9pbnREaXJ8SlNPTl9Qb2ludERpcikge1xyXG4gICAgICAgIHN1cGVyKGQpO1xyXG4gICAgICAgIHRoaXMuZCA9IFRfRGlyZWN0aW9uLlg7XHJcblxyXG4gICAgICAgIGlmIChkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGQgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5kID0gZCBhcyBUX0RpcmVjdGlvbjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGQgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgaWYgKGQgaW5zdGFuY2VvZiBDX1BvaW50RGlyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmQgPSBkLmQgYXMgVF9EaXJlY3Rpb247XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlY29kZShkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZCA9IFRfRGlyZWN0aW9uLlg7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9kX21iX25hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6ICByZXR1cm4gJ+WMlyc7XHJcbiAgICAgICAgICAgIGNhc2UgMTogIHJldHVybiAn5p2xJztcclxuICAgICAgICAgICAgY2FzZSAyOiAgcmV0dXJuICfljZcnO1xyXG4gICAgICAgICAgICBjYXNlIDM6ICByZXR1cm4gJ+ilvyc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAn6KyOJztcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X2QoKTogVF9EaXJlY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X2QoZDogVF9EaXJlY3Rpb24pOiBDX1BvaW50RGlyfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKCEoX2Rpcl9rZXkoZCkgaW4gVF9EaXJlY3Rpb24pKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZCA9IGQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BkKCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wZChkOiBDX1BvaW50RGlyfEpTT05fUG9pbnREaXIpOiBDX1BvaW50RGlyfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKGQgaW5zdGFuY2VvZiBDX1BvaW50RGlyKSB7XHJcbiAgICAgICAgICAgIGlmICghKF9kaXJfa2V5KGQuZCkgaW4gVF9EaXJlY3Rpb24pKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBzdXBlci5zZXRfcChkKTtcclxuICAgICAgICAgICAgdGhpcy5kID0gZC5kO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEoX2Rpcl9rZXkoZC5kKSBpbiBUX0RpcmVjdGlvbikpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5kZWNvZGUoZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1BvaW50RGlyIHtcclxuICAgICAgICBjb25zdCBqID0gc3VwZXIuZW5jb2RlKCkgYXMgSlNPTl9Qb2ludERpcjtcclxuICAgICAgICBqLmQgICAgID0gdGhpcy5kIGFzIG51bWJlcjtcclxuICAgICAgICByZXR1cm4gajtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoaj86IEpTT05fUG9pbnREaXIpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICBpZiAoaiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAoIShfZGlyX2tleShqLmQpIGluIFRfRGlyZWN0aW9uKSkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIHN1cGVyLmRlY29kZShqKTtcclxuICAgICAgICB0aGlzLmQgPSBqLmQgYXMgVF9EaXJlY3Rpb247XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIlBvaW50RGF0YSBJbmZvOlwiIFxyXG4gICAgICAgICAgICArIFwiXFxueDogXCIgICAgICsgKHRoaXMueCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG55OiBcIiAgICAgKyAodGhpcy55ID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbno6IFwiICAgICArICh0aGlzLnogPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuZDogXCIgICAgICsgKHRoaXMuZCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiY2xhc3MgQ19Qb2ludDJEIHtcclxuICAgIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54ICA9IHg7XHJcbiAgICAgICAgdGhpcy55ICA9IHk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaXNfZXhpc3QoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMueCA9PSB4KSAmJiAodGhpcy55ID09IHkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19Qb2ludExpbmsyRCBleHRlbmRzIENfUG9pbnQyRCB7XHJcbiAgICBwdWJsaWMgZGk6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBkaTogbnVtYmVyID0gLTEpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSk7XHJcbiAgICAgICAgdGhpcy5kaSA9IGRpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBjYXN0KHA6IENfUG9pbnQyRHx1bmRlZmluZWQpOiBDX1BvaW50TGluazJEfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKHA/LnggPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAocD8ueSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybiBwIGluc3RhbmNlb2YgQ19Qb2ludExpbmsyRCA/IHAgOiBuZXcgQ19Qb2ludExpbmsyRChwLngsIHAueSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ19Qb2ludFNldDJEIHtcclxuICAgIHB1YmxpYyBzZXQ6IENfUG9pbnQyRFtdID1bXTtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgcHVibGljIHB1c2gocDogQ19Qb2ludDJEKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXQucHVzaChwKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BvaW50KHg6IG51bWJlciwgeTogbnVtYmVyKTogQ19Qb2ludDJEfHVuZGVmaW5lZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwIG9mIHRoaXMuc2V0KSB7XHJcbiAgICAgICAgICAgIGlmIChwPy5pc19leGlzdCh4LCB5KSkgcmV0dXJuIHA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7ICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVtb3ZlKHA6IENfUG9pbnQyRCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlX3h5KHAueCwgcC55KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVtb3ZlX3h5KHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpIGluIHRoaXMuc2V0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNldFtpXT8uaXNfZXhpc3QoeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNldFtpXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0ID0gWy4uLnRoaXMuc2V0XTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBpc19leGlzdCh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgcCBvZiB0aGlzLnNldCkgaWYgKHA/LmlzX2V4aXN0KHgsIHkpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbmNsYXNzIFBvaW50M0Qge1xyXG4gICAgcHVibGljIGludCAkeDtcclxuICAgIHB1YmxpYyBpbnQgJHk7XHJcbiAgICBwdWJsaWMgaW50ICR6O1xyXG4gICAgcHVibGljIGZ1bmN0aW9uIF9fY29uc3RydWN0KGludCAkeCA9IDAsIGludCAkeSA9IDAsIGludCAkeiA9IDApXHJcbiAgICB7XHJcbiAgICAgICAgJHRoaXMtPnggID0gJHg7XHJcbiAgICAgICAgJHRoaXMtPnkgID0gJHk7XHJcbiAgICAgICAgJHRoaXMtPnogID0gJHo7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZnVuY3Rpb24gaXNfZXhpc3QoaW50ICR4LCBpbnQgJHksIGludCAkeik6IGJvb2wge1xyXG4gICAgICAgIHJldHVybiAoJHRoaXMtPnggPT0gJHgpICYmICgkdGhpcy0+eSA9PSAkeSkgJiYgKCR0aGlzLT56ID09ICR6KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBmdW5jdGlvbiB3aXRoaW4oUG9pbnQzRCAkcCk6IGJvb2wge1xyXG4gICAgICAgIHJldHVybiAkdGhpcy0+aXNfZXhpc3QoJHAtPngsICRwLT55LCAkcC0+eik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZnVuY3Rpb24gZW5jb2RlKCk6IGFycmF5IHtcclxuICAgICAgICAkYSA9IFtdO1xyXG4gICAgICAgICRhWyd4J10gPSAkdGhpcy0+eDtcclxuICAgICAgICAkYVsneSddID0gJHRoaXMtPnk7XHJcbiAgICAgICAgJGFbJ3onXSA9ICR0aGlzLT56O1xyXG5cclxuICAgICAgICByZXR1cm4gJGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZnVuY3Rpb24gZGVjb2RlKGFycmF5ICRhKTogUG9pbnQzRCB7XHJcbiAgICAgICAgaWYgKCFpc19udWxsKCRhKSAmJiBpc19hcnJheSgkYSkpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgYXJyYXlfa2V5X2V4aXN0cygneCcsICRhKSAmJiAoaXNfbnVtZXJpYygkYVsneCddKSAmJiAkYVsneCddID4gIDApXHJcbiAgICAgICAgICAgICYmICBhcnJheV9rZXlfZXhpc3RzKCd5JywgJGEpICYmIChpc19udW1lcmljKCRhWyd5J10pICYmICRhWyd5J10gPiAgMClcclxuICAgICAgICAgICAgJiYgIGFycmF5X2tleV9leGlzdHMoJ3onLCAkYSkgJiYgKGlzX251bWVyaWMoJGFbJ3onXSkgJiYgJGFbJ3onXSA+PSAwKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICR0aGlzLT54ID0gJGFbJ3gnXTtcclxuICAgICAgICAgICAgICAgICR0aGlzLT55ID0gJGFbJ3knXTtcclxuICAgICAgICAgICAgICAgICR0aGlzLT56ID0gJGFbJ3onXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJHRoaXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGZ1bmN0aW9uIGRlY29kZV9hbmRfbmV3KGFycmF5ICRhKTogUG9pbnQzRCB7XHJcbiAgICAgICAgaWYgKCFpc19udWxsKCRhKSAmJiBpc19hcnJheSgkYSkpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgYXJyYXlfa2V5X2V4aXN0cygneCcsICRhKSAmJiAoaXNfbnVtZXJpYygkYVsneCddKSAmJiAkYVsneCddID4gIDApXHJcbiAgICAgICAgICAgICYmICBhcnJheV9rZXlfZXhpc3RzKCd5JywgJGEpICYmIChpc19udW1lcmljKCRhWyd5J10pICYmICRhWyd5J10gPiAgMClcclxuICAgICAgICAgICAgJiYgIGFycmF5X2tleV9leGlzdHMoJ3onLCAkYSkgJiYgKGlzX251bWVyaWMoJGFbJ3onXSkgJiYgJGFbJ3onXSA+PSAwKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQzRCgkYVsneCddLCAkYVsneSddLCAkYVsneiddKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFBvaW50M0QoLTEsIC0xLCAtMSk7XHJcbiAgICB9XHJcbn1cclxuKi9cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBfbWF4LCBfbWluIH0gICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX01hdGhcIjtcclxuaW1wb3J0IHsgQ19Qb2ludCwgSlNPTl9Qb2ludCB9ICBmcm9tIFwiLi9DX1BvaW50XCI7XHJcbmltcG9ydCB7IEpTT05fQW55IH0gICAgICAgICAgICAgZnJvbSBcIi4vQ19TYXZlSW5mb1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX1JhbmdlIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgbWluPzogICBKU09OX1BvaW50LCBcclxuICAgIG1heD86ICAgSlNPTl9Qb2ludCwgXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1JhbmdlIHtcclxuICAgIHByb3RlY3RlZCBtaW46IENfUG9pbnQ7XHJcbiAgICBwcm90ZWN0ZWQgbWF4OiBDX1BvaW50O1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHAxOiBDX1BvaW50LCBwMjogQ19Qb2ludCkge1xyXG4gICAgICAgIHRoaXMubWluICA9IG5ldyBDX1BvaW50KDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMubWF4ICA9IG5ldyBDX1BvaW50KDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuX2luaXQocDEsIHAyKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfaW5pdChwMTogQ19Qb2ludCwgcDI6IENfUG9pbnQpOiBDX1JhbmdlIHtcclxuICAgICAgICBjb25zdCBtaW5feCA9IF9taW4oW3AxLngsIHAyLnhdKTtcclxuICAgICAgICBjb25zdCBtYXhfeCA9IF9tYXgoW3AxLngsIHAyLnhdKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWluX3kgPSBfbWluKFtwMS55LCBwMi55XSk7XHJcbiAgICAgICAgY29uc3QgbWF4X3kgPSBfbWF4KFtwMS55LCBwMi55XSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1pbl96ID0gX21pbihbcDEueiwgcDIuel0pO1xyXG4gICAgICAgIGNvbnN0IG1heF96ID0gX21heChbcDEueiwgcDIuel0pO1xyXG5cclxuICAgICAgICB0aGlzLm1pbiAgPSBuZXcgQ19Qb2ludChtaW5feCwgbWluX3ksIG1pbl96KTtcclxuICAgICAgICB0aGlzLm1heCAgPSBuZXcgQ19Qb2ludChtYXhfeCwgbWF4X3ksIG1heF96KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdpdGhpbihhOiBDX1JhbmdlfENfUG9pbnR8bnVtYmVyLCB5PzogbnVtYmVyLCB6PzogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB5ID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB6ID09PSBcIm51bWJlclwiKSB7IFxyXG4gICAgICAgICAgICBpZiAoIGEgPCB0aGlzLm1pbi54IHx8IGEgPiB0aGlzLm1heC54ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIHkgPCB0aGlzLm1pbi55IHx8IHkgPiB0aGlzLm1heC55ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIHogPCB0aGlzLm1pbi56IHx8IHogPiB0aGlzLm1heC56ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhID09PSBcIm9iamVjdFwiICYmIGEgaW5zdGFuY2VvZiBDX1BvaW50KSB7IFxyXG4gICAgICAgICAgICBjb25zdCBwID0gYSBhcyBDX1BvaW50O1xyXG4gICAgICAgICAgICBpZiAoIHAueCA8IHRoaXMubWluLnggfHwgcC54ID4gdGhpcy5tYXgueCApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCBwLnkgPCB0aGlzLm1pbi55IHx8IHAueSA+IHRoaXMubWF4LnkgKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggcC56IDwgdGhpcy5taW4ueiB8fCBwLnogPiB0aGlzLm1heC56ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhID09PSBcIm9iamVjdFwiICYmIGEgaW5zdGFuY2VvZiBDX1JhbmdlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBhIGFzIENfUmFuZ2U7XHJcbiAgICAgICAgICAgIGlmICggcC5taW5feCgpIDwgdGhpcy5taW4ueCB8fCBwLm1heF94KCkgPiB0aGlzLm1heC54ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIHAubWluX3koKSA8IHRoaXMubWluLnkgfHwgcC5tYXhfeSgpID4gdGhpcy5tYXgueSApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCBwLm1pbl96KCkgPCB0aGlzLm1pbi56IHx8IHAubWF4X3ooKSA+IHRoaXMubWF4LnogKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbWluX3goKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWluLng7fVxyXG4gICAgcHVibGljIG1heF94KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1heC54O31cclxuICAgIHB1YmxpYyBtaW5feSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5taW4ueTt9XHJcbiAgICBwdWJsaWMgbWF4X3koKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWF4Lnk7fVxyXG4gICAgcHVibGljIG1pbl96KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1pbi56O31cclxuICAgIHB1YmxpYyBtYXhfeigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tYXguejt9XHJcbiAgICBwdWJsaWMgc2l6ZV94KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4LnggLSB0aGlzLm1pbi54ICsgMTtcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgc2l6ZV95KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4LnkgLSB0aGlzLm1pbi55ICsgMTtcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgc2l6ZV96KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4LnogLSB0aGlzLm1pbi56ICsgMTtcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgZG9fYWxsX3h5eihmbjogKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpID0+IGJvb2xlYW4pIHtcclxuICAgICAgICBmb3IgKHZhciB6ID0gdGhpcy5taW4uejsgeiA8PSB0aGlzLm1heC56OyB6KysgKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSB0aGlzLm1pbi55OyB5IDw9IHRoaXMubWF4Lnk7IHkrKyApIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSB0aGlzLm1pbi54OyB5IDw9IHRoaXMubWF4Lng7IHgrKyApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZuKHgsIHksIHopKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZG9fYWxsX3AoZm46IChwOiBDX1BvaW50KSA9PiBib29sZWFuKSB7XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IHRoaXMubWluLno7IHogPD0gdGhpcy5tYXguejsgeisrICkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gdGhpcy5taW4ueTsgeSA8PSB0aGlzLm1heC55OyB5KysgKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gdGhpcy5taW4ueDsgeSA8PSB0aGlzLm1heC54OyB4KysgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmbihuZXcgQ19Qb2ludCh4LCB5LCB6KSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9SYW5nZSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbWluOiB0aGlzLm1pbi5lbmNvZGUoKSxcclxuICAgICAgICAgICAgbWF4OiB0aGlzLm1pbi5lbmNvZGUoKSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGo6IEpTT05fUmFuZ2UpOiBDX1JhbmdlIHtcclxuICAgICAgICBpZiAoaiA9PT0gdW5kZWZpbmVkKSAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKGoubWluID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChqLm1heCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBjb25zdCBwMSA9IG5ldyBDX1BvaW50KGoubWluKTtcclxuICAgICAgICBjb25zdCBwMiA9IG5ldyBDX1BvaW50KGoubWF4KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5pdChwMSwgcDIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfTWF6ZSwgSlNPTl9NYXplLCBhbGVydF9tYXplX2luZm8gIH0gIGZyb20gXCIuL0NfTWF6ZVwiO1xyXG5pbXBvcnQgeyBDX0d1aWxkLCBKU09OX0d1aWxkLCBhbGVydF9ndWxkX2luZm8gfSBmcm9tIFwiLi9DX0d1aWxkXCI7XHJcbmltcG9ydCB7IENfTW92YWJsZVBvaW50LCBKU09OX01vdmFibGVQb2ludCwgYWxlcnRfbXZwdF9pbmZvIH0gZnJvbSBcIi4vQ19Nb3ZhYmxlUG9pbnRcIjtcclxuaW1wb3J0IHsgQ19UZWFtLCBKU09OX1RlYW0sIGFsZXJ0X3RlYW1faW5mbyAgfSAgZnJvbSBcIi4vQ19UZWFtXCI7XHJcbmltcG9ydCB7IENfU2F2ZUluZm8sIElfSlNPTiwgSlNPTl9BbnksIEpTT05fU2F2ZUluZm8gfSBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpTT05fU2F2ZURhdGEgZXh0ZW5kcyBKU09OX1NhdmVJbmZvIHtcclxuICAgIHNhdmVfaWQ/OiAgIG51bWJlcixcclxuICAgIHBsYXllcl9pZD86IG51bWJlciwgXHJcbiAgICB1bmlxX25vPzogICBudW1iZXIsXHJcbiAgICB0aXRsZT86ICAgICBzdHJpbmcsXHJcbiAgICBkZXRhaWw/OiAgICBzdHJpbmcsXHJcbiAgICBwb2ludD86ICAgICBzdHJpbmcsXHJcbiAgICBhdXRvX21vZGU/OiBzdHJpbmcsXHJcbiAgICBpc19hY3RpdmU/OiBzdHJpbmcsXHJcbiAgICBpc19kZWxldGU/OiBzdHJpbmcsXHJcbiAgICBzYXZlX3RpbWU/OiBzdHJpbmcsXHJcblxyXG4gICAgYWxsX212cHQ/OiAgSlNPTl9Nb3ZhYmxlUG9pbnRbXSxcclxuICAgIGFsbF9tYXplPzogIEpTT05fTWF6ZVtdLFxyXG4gICAgYWxsX3RlYW0/OiAgSlNPTl9UZWFtW10sXHJcbiAgICBhbGxfZ3VsZD86ICBKU09OX0d1aWxkW10sXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9zYXZlX2luZm8oYTogSlNPTl9TYXZlRGF0YXx1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGFsZXJ0KFwiU2F2ZSBJbmZvOlwiIFxyXG4gICAgICAgICsgXCJcXG5zYXZlX2lkOiAgICBcIiArIChhLnNhdmVfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnBsYXllcl9pZDogIFwiICsgKGEucGxheWVyX2lkID8/ICc/JylcclxuICAgICAgICArIFwiXFxudW5pcV9ubzogICAgXCIgKyAoYS51bmlxX25vICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG50aXRsZTogICAgICBcIiArIChhLnRpdGxlICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmRldGFpbDogICAgIFwiICsgKGEuZGV0YWlsICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxucG9pbnQ6ICAgICAgXCIgKyAoYS5wb2ludCAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5hdXRvX21vZGU6ICBcIiArIChhLmF1dG9fbW9kZSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmlzX2FjdGl2ZTogIFwiICsgKGEuaXNfYWN0aXZlID8/ICc/JylcclxuICAgICAgICArIFwiXFxuaXNfZGVsZXRlOiAgXCIgKyAoYS5pc19kZWxldGUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5tdnB0X2NvdW50OiBcIiArIChhLmFsbF9tdnB0Py5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5tYXplX2NvdW50OiBcIiArIChhLmFsbF9tYXplPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5ndWxkX2NvdW50OiBcIiArIChhLmFsbF9ndWxkPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG50ZWFtX2NvdW50OiBcIiArIChhLmFsbF90ZWFtPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X3NhdmVfZGV0YWlsKGE6IEpTT05fU2F2ZURhdGF8dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgdHJ5IHsgXHJcbi8vICAgICAgICBhbGVydChcIlNhdmUgRGV0YWlsKG12cHQpOlwiKTtcclxuICAgICAgICBmb3IgKGNvbnN0IG12cHQgb2YgYS5hbGxfbXZwdD8/W10pIGFsZXJ0X212cHRfaW5mbyhtdnB0KTtcclxuICAgIH0gY2F0Y2ggKGVycikge2FsZXJ0KCdhbGVydCBtdnB0IGVycm9yOiAnICsgZXJyKX1cclxuXHJcbiAgICB0cnkgeyBcclxuLy8gICAgICAgIGFsZXJ0KFwiU2F2ZSBEZXRhaWwodGVhbSk6XCIpO1xyXG4gICAgICAgIGZvciAoY29uc3QgdGVhbSBvZiBhLmFsbF90ZWFtPz9bXSkgYWxlcnRfdGVhbV9pbmZvKHRlYW0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7YWxlcnQoJ2FsZXJ0IHRlYW0gZXJyb3I6ICcgKyBlcnIpfVxyXG5cclxuICAgIHRyeSB7IFxyXG4vLyAgICAgICAgYWxlcnQoXCJTYXZlIERldGFpbChtYXplKTpcIik7XHJcbiAgICAgICAgZm9yIChjb25zdCBtYXplIG9mIGEuYWxsX21hemU/P1tdKSBhbGVydF9tYXplX2luZm8obWF6ZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHthbGVydCgnYWxlcnQgbWF6ZSBlcnJvcjogJyArIGVycil9XHJcblxyXG4gICAgdHJ5IHsgXHJcbi8vICAgICAgICBhbGVydChcIlNhdmUgRGV0YWlsKGd1bGQpOlwiKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGd1bGQgb2YgYS5hbGxfZ3VsZD8/W10pIGFsZXJ0X2d1bGRfaW5mbyhndWxkKTtcclxuICAgIH0gY2F0Y2ggKGVycikge2FsZXJ0KCdhbGVydCBndWxkIGVycm9yOiAnICsgZXJyKX1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1NhdmVEYXRhIGV4dGVuZHMgQ19TYXZlSW5mbyBpbXBsZW1lbnRzIElfSlNPTiB7XHJcblxyXG4vKlxyXG4gICAgcHVibGljIHNhdmVfaWQ6ICAgbnVtYmVyO1xyXG4gICAgcHVibGljIHBsYXllcl9pZDogbnVtYmVyOyBcclxuICAgIHB1YmxpYyB1bmlxX25vOiAgIG51bWJlcjtcclxuICAgIHB1YmxpYyB0aXRsZTogICAgIHN0cmluZztcclxuICAgIHB1YmxpYyBkZXRhaWw6ICAgIHN0cmluZztcclxuICAgIHB1YmxpYyBwb2ludDogICAgIHN0cmluZztcclxuICAgIHB1YmxpYyBhdXRvX21vZGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaXNfYWN0aXZlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlzX2RlbGV0ZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBzYXZlX3RpbWU6IERhdGU7XHJcbiAgICBwdWJsaWMgbXlwb3M6ICAgICBDX01vdmFibGVQb2ludDtcclxuKi9cclxuXHJcbiAgICBwdWJsaWMgYWxsX212cHQ6ICB7W3VpZDogc3RyaW5nXTogQ19Nb3ZhYmxlUG9pbnR9O1xyXG4gICAgcHVibGljIGFsbF9tYXplOiAge1t1aWQ6IHN0cmluZ106IENfTWF6ZX07XHJcbiAgICBwdWJsaWMgYWxsX3RlYW06ICB7W3VpZDogc3RyaW5nXTogQ19UZWFtfTtcclxuICAgIHB1YmxpYyBhbGxfZ3VsZDogIHtbdWlkOiBzdHJpbmddOiBDX0d1aWxkfTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYT86IEpTT05fU2F2ZURhdGEpIHtcclxuICAgICAgICBzdXBlcihhKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbGxfbXZwdCAgPSB7fTtcclxuICAgICAgICB0aGlzLmFsbF9tYXplICA9IHt9O1xyXG4gICAgICAgIHRoaXMuYWxsX3RlYW0gID0ge31cclxuICAgICAgICB0aGlzLmFsbF9ndWxkICA9IHt9O1xyXG5cclxuICAgICAgICBpZiAoYSAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5ldyhhPzogSlNPTl9TYXZlRGF0YSk6IENfU2F2ZURhdGEge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ19TYXZlRGF0YShhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fU2F2ZURhdGEge1xyXG4gICAgICAgIGxldCBzYXZlX2RhdGU6IHN0cmluZztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBzYXZlX2RhdGEgICAgPSBzdXBlci5lbmNvZGUoKSBhcyBKU09OX1NhdmVEYXRhO1xyXG5cclxuICAgICAgICAgICAgc2F2ZV9kYXRhLmFsbF9tdnB0ID0gdGhpcy5fZW5jb2RlX2FsbF9kYXRhKHRoaXMuYWxsX212cHQpOyBcclxuICAgICAgICAgICAgc2F2ZV9kYXRhLmFsbF9tYXplID0gdGhpcy5fZW5jb2RlX2FsbF9kYXRhKHRoaXMuYWxsX21hemUpOyBcclxuICAgICAgICAgICAgc2F2ZV9kYXRhLmFsbF90ZWFtID0gdGhpcy5fZW5jb2RlX2FsbF9kYXRhKHRoaXMuYWxsX3RlYW0pOyBcclxuICAgICAgICAgICAgc2F2ZV9kYXRhLmFsbF9ndWxkID0gdGhpcy5fZW5jb2RlX2FsbF9kYXRhKHRoaXMuYWxsX2d1bGQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNhdmVfZGF0YTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1NhdmVEYXRhIEVuY29kZSBFcnJvcjogJyArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX2VuY29kZV9hbGxfZGF0YShhbGxfZGF0YToge1t1aWQ6c3RyaW5nXTpJX0pTT059KTogSlNPTl9BbnlbXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX0pTT046IEpTT05fQW55W10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIGFsbF9kYXRhKSBhbGxfSlNPTi5wdXNoKGFsbF9kYXRhW2ldLmVuY29kZSgpKTtcclxuICAgICAgICByZXR1cm4gYWxsX0pTT047XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlY29kZShzOiBKU09OX1NhdmVEYXRhKTogQ19TYXZlRGF0YSB7XHJcbiAgICAgICAgc3VwZXIuZGVjb2RlKHMpO1xyXG5cclxuICAgICAgICBpZiAocy5hbGxfbXZwdCAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsbF9tdnB0ID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl9tdnB0IG9mIHMuYWxsX212cHQpIHtcclxuICAgICAgICAgICAgICAgICBjb25zdCBtdnB0ID0gKG5ldyBDX01vdmFibGVQb2ludCgpKS5kZWNvZGUoanNvbl9tdnB0KTsgXHJcbiAgICAgICAgICAgICAgICAgdGhpcy5hbGxfbXZwdFttdnB0LnVpZCgpXSA9IG12cHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIGlmIChzLmFsbF9tYXplICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsX21hemUgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqc29uX21hemUgb2Ygcy5hbGxfbWF6ZSkge1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IG1hemUgPSAobmV3IENfTWF6ZSgpKS5kZWNvZGUoanNvbl9tYXplKTsgXHJcbiAgICAgICAgICAgICAgICAgdGhpcy5hbGxfbWF6ZVttYXplLnVpZCgpXSA9IG1hemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIGlmIChzLmFsbF90ZWFtICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsX3RlYW0gPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqc29uX3RlYW0gb2Ygcy5hbGxfdGVhbSkge1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IHRlYW0gPSAobmV3IENfVGVhbSgpKS5kZWNvZGUoanNvbl90ZWFtKTsgXHJcbiAgICAgICAgICAgICAgICAgdGhpcy5hbGxfdGVhbVt0ZWFtLnVpZCgpXSA9IHRlYW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIGlmIChzLmFsbF9ndWxkICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsX2d1bGQgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBqc29uX2d1bGQgb2Ygcy5hbGxfZ3VsZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3VsZCA9IChuZXcgQ19HdWlsZCgpKS5kZWNvZGUoanNvbl9ndWxkKTsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbF9ndWxkW2d1bGQudWlkKCldID0gZ3VsZDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGFsZXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiU2F2ZSBJbmZvOlwiIFxyXG4gICAgICAgICAgICArIFwiXFxuc2F2ZV9pZDogICAgXCIgKyAodGhpcy5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxucGxheWVyX2lkOiAgXCIgKyAodGhpcy5wbGF5ZXJfaWQgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudW5pcV9ubzogICAgXCIgKyAodGhpcy51bmlxX25vICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudGl0bGU6ICAgICAgXCIgKyAodGhpcy50aXRsZSAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuZGV0YWlsOiAgICAgXCIgKyAodGhpcy5kZXRhaWwgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxucG9pbnQ6ICAgICAgXCIgKyAodGhpcy5wb2ludCAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuYXV0b19tb2RlOiAgXCIgKyAodGhpcy5hdXRvX21vZGU/J1knOidOJylcclxuICAgICAgICAgICAgKyBcIlxcbmlzX2FjdGl2ZTogIFwiICsgKHRoaXMuaXNfYWN0aXZlPydZJzonTicpXHJcbiAgICAgICAgICAgICsgXCJcXG5pc19kZWxldGU6ICBcIiArICh0aGlzLmlzX2RlbGV0ZT8nWSc6J04nKVxyXG4gICAgICAgICAgICArIFwiXFxubXZwdF9jb3VudDogXCIgKyAodGhpcy5hbGxfbXZwdD8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbm1hemVfY291bnQ6IFwiICsgKHRoaXMuYWxsX21hemU/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5ndWxkX2NvdW50OiBcIiArICh0aGlzLmFsbF9ndWxkPy5sZW5ndGggPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudGVhbV9jb3VudDogXCIgKyAodGhpcy5hbGxfdGVhbT8ubGVuZ3RoID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWxlcnRfZGV0YWlsKCk6IHZvaWQge1xyXG4gICAgICAgIHRyeSB7IFxyXG4vLyAgICAgICAgICAgIGFsZXJ0KFwiU2F2ZSBEZXRhaWwobXZwdCk6XCIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHRoaXMuYWxsX212cHQpIHRoaXMuYWxsX212cHRbaWldLmFsZXJ0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7YWxlcnQoJ2FsZXJ0IG12cHQgZXJyb3I6ICcgKyBlcnIpfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB0cnkgeyBcclxuLy8gICAgICAgICAgICBhbGVydChcIlNhdmUgRGV0YWlsKHRlYW0pOlwiKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpaSBpbiB0aGlzLmFsbF90ZWFtKSB0aGlzLmFsbF90ZWFtW2lpXS5hbGVydCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge2FsZXJ0KCdhbGVydCB0ZWFtIGVycm9yOiAnICsgZXJyKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgdHJ5IHsgXHJcbi8vICAgICAgICAgICAgYWxlcnQoXCJTYXZlIERldGFpbChtYXplKTpcIik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWkgaW4gdGhpcy5hbGxfbWF6ZSkgdGhpcy5hbGxfbWF6ZVtpaV0uYWxlcnQoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHthbGVydCgnYWxlcnQgbWF6ZSBlcnJvcjogJyArIGVycil9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHRyeSB7IFxyXG4vLyAgICAgICAgICAgIGFsZXJ0KFwiU2F2ZSBEZXRhaWwoZ3VsZCk6XCIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHRoaXMuYWxsX2d1bGQpIHRoaXMuYWxsX2d1bGRbaWldLmFsZXJ0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7YWxlcnQoJ2FsZXJ0IGd1bGQgZXJyb3I6ICcgKyBlcnIpfVxyXG4gICAgICAgICAgICBcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfTW92YWJsZVBvaW50LCBKU09OX01vdmFibGVQb2ludCB9IGZyb20gXCIuL0NfTW92YWJsZVBvaW50XCI7XHJcblxyXG4vLyDjgrXjg7zjg5Djg7zlgbTjgajjgoTjgorjgajjgorjgZnjgotKU09O5b2i5byP44OH44O844K/44Gu44OG44Oz44OX44Os44O844OIXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9Bbnkge1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55XHJcbn1cclxuXHJcbi8vIOOCteODvOODkOODvOWBtOOBqOOChOOCiuOBqOOCiuOBmeOCi+OCr+ODqeOCueOBq+W/heimgeOBquODoeOCveODg+ODiVxyXG5leHBvcnQgaW50ZXJmYWNlIElfSlNPTiB7XHJcbiAgICBlbmNvZGU6ICgpPT5KU09OX0FueSxcclxuICAgIGRlY29kZTogKGo6SlNPTl9BbnkpPT5JX0pTT04sXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSV9KU09OX1VuaXEgZXh0ZW5kcyBJX0pTT04ge1xyXG4gICAgdWlkOiAoKT0+c3RyaW5nLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElfQWJzdHJhY3Qge1xyXG4gICAgbmV3T2JqPzogKGo/OkpTT05fQW55KT0+SV9BYnN0cmFjdHx1bmRlZmluZWQsXHJcbiAgICBlbmNvZGU6ICAoKT0+SlNPTl9BbnksXHJcbi8vICBzdGF0aWMgZGVjb2RlOiAoajpKU09OX0FueSk9PklfSlNPTixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJX0pTT05fQ2xhc3Mge1xyXG4gICAgbmV3OiAoaj86IEpTT05fQW55KT0+SV9KU09OLFxyXG59XHJcblxyXG4vLyDjgrXjg7zjg5Djg7zlgbTjgajjgoTjgorlj5bjgorjgZnjgovpmpvjgavoh6rouqvjgpLmloflrZfliJfljJbjgZnjgovjgq/jg6njgrnjga7jg6Hjgr3jg4Pjg4lcclxuZXhwb3J0IGludGVyZmFjZSBJX0pTT05WYWx1ZSBleHRlbmRzIElfSlNPTntcclxuICAgIGZyb21KU09OOiAoKT0+dm9pZCxcclxuICAgIHRvSlNPTjogICAoKT0+dm9pZCxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKU09OX1NhdmVJbmZvIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgc2F2ZV9pZD86ICAgbnVtYmVyLFxyXG4gICAgcGxheWVyX2lkPzogbnVtYmVyLCBcclxuICAgIHVuaXFfbm8/OiAgIG51bWJlcixcclxuICAgIHRpdGxlPzogICAgIHN0cmluZyxcclxuICAgIGRldGFpbD86ICAgIHN0cmluZyxcclxuICAgIHBvaW50PzogICAgIHN0cmluZyxcclxuICAgIGF1dG9fbW9kZT86IHN0cmluZyxcclxuICAgIGlzX2FjdGl2ZT86IHN0cmluZyxcclxuICAgIGlzX2RlbGV0ZT86IHN0cmluZyxcclxuICAgIHNhdmVfdGltZT86IHN0cmluZyxcclxuICAgIG15cG9zPzogICAgIEpTT05fTW92YWJsZVBvaW50LFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfc2F2ZWluZm9faW5mbyhhOiBKU09OX1NhdmVJbmZvfHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoXCJTYXZlIEluZm86XCIgXHJcbiAgICAgICAgKyBcIlxcbnNhdmVfaWQ6ICAgIFwiICsgKGEuc2F2ZV9pZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxucGxheWVyX2lkOiAgXCIgKyAoYS5wbGF5ZXJfaWQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG51bmlxX25vOiAgICBcIiArIChhLnVuaXFfbm8gICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnRpdGxlOiAgICAgIFwiICsgKGEudGl0bGUgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuZGV0YWlsOiAgICAgXCIgKyAoYS5kZXRhaWwgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5wb2ludDogICAgICBcIiArIChhLnBvaW50ICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmF1dG9fbW9kZTogIFwiICsgKGEuYXV0b19tb2RlID8/ICc/JylcclxuICAgICAgICArIFwiXFxuaXNfYWN0aXZlOiAgXCIgKyAoYS5pc19hY3RpdmUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5pc19kZWxldGU6ICBcIiArIChhLmlzX2RlbGV0ZSA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNhdmVfdGltZTogIFwiICsgKGEuc2F2ZV90aW1lID8/ICc/JylcclxuICAgICAgICArIFwiXFxubXl1cmw6ICAgICAgXCIgKyAoYS5teXBvcz8uY3VyX3VybCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxudGVhbV91aWQ6ICAgXCIgKyAoYS5teXBvcz8udGVhbV91aWQgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubG9jX2tpbmQ6ICAgXCIgKyAoYS5teXBvcz8ua2luZCAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubG9jX25hbWU6ICAgXCIgKyAoYS5teXBvcz8ubmFtZSAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubG9jX3VpZDogICAgXCIgKyAoYS5teXBvcz8ubG9jX3VpZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1NhdmVJbmZvIGltcGxlbWVudHMgSV9KU09OIHtcclxuICAgIHB1YmxpYyBzYXZlX2lkOiAgIG51bWJlcjtcclxuICAgIHB1YmxpYyBwbGF5ZXJfaWQ6IG51bWJlcjsgXHJcbiAgICBwdWJsaWMgdW5pcV9ubzogICBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGl0bGU6ICAgICBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGV0YWlsOiAgICBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcG9pbnQ6ICAgICBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYXV0b19tb2RlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlzX2FjdGl2ZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc19kZWxldGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgc2F2ZV90aW1lOiBEYXRlO1xyXG4gICAgcHVibGljIG15cG9zOiAgICAgQ19Nb3ZhYmxlUG9pbnQ7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGE/OiBKU09OX1NhdmVJbmZvKSB7XHJcbiAgICAgICAgdGhpcy5zYXZlX2lkICAgPSAtMTtcclxuICAgICAgICB0aGlzLnBsYXllcl9pZCA9IC0xOyBcclxuICAgICAgICB0aGlzLnVuaXFfbm8gICA9IC0xO1xyXG4gICAgICAgIHRoaXMudGl0bGUgICAgID0gJyc7XHJcbiAgICAgICAgdGhpcy5kZXRhaWwgICAgPSAnJztcclxuICAgICAgICB0aGlzLnBvaW50ICAgICA9ICcnO1xyXG4gICAgICAgIHRoaXMuYXV0b19tb2RlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc19hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNfZGVsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zYXZlX3RpbWUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLm15cG9zICAgICA9IG5ldyBDX01vdmFibGVQb2ludCgpO1xyXG5cclxuICAgICAgICBpZiAoYSAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5ldyhhPzogSlNPTl9TYXZlSW5mbyk6IENfU2F2ZUluZm8ge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ19TYXZlSW5mbyhhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fU2F2ZUluZm8ge1xyXG4gICAgICAgIGxldCBzYXZlX2RhdGU6IHN0cmluZztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzYXZlX2RhdGUgPSB0aGlzLnNhdmVfdGltZS50b0lTT1N0cmluZygpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBzYXZlX2RhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2F2ZV9pZDogICB0aGlzLnNhdmVfaWQsIFxyXG4gICAgICAgICAgICAgICAgcGxheWVyX2lkOiB0aGlzLnBsYXllcl9pZCwgIFxyXG4gICAgICAgICAgICAgICAgdW5pcV9ubzogICB0aGlzLnVuaXFfbm8sIFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICAgICB0aGlzLnRpdGxlLCBcclxuICAgICAgICAgICAgICAgIGRldGFpbDogICAgdGhpcy5kZXRhaWwsIFxyXG4gICAgICAgICAgICAgICAgcG9pbnQ6ICAgICB0aGlzLnBvaW50LCBcclxuICAgICAgICAgICAgICAgIGF1dG9fbW9kZTogdGhpcy5hdXRvX21vZGUgPyAnMScgOiAnMCcsIFxyXG4gICAgICAgICAgICAgICAgaXNfYWN0aXZlOiB0aGlzLmlzX2FjdGl2ZSA/ICcxJyA6ICcwJywgXHJcbiAgICAgICAgICAgICAgICBpc19kZWxldGU6IHRoaXMuaXNfZGVsZXRlID8gJzEnIDogJzAnLCBcclxuICAgICAgICAgICAgICAgIHNhdmVfdGltZTogc2F2ZV9kYXRlLCBcclxuICAgICAgICAgICAgICAgIG15cG9zOiAgICAgdGhpcy5teXBvcy5lbmNvZGUoKSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBhbGVydCgnU2F2ZURhdGEgRW5jb2RlIEVycm9yOiAnICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVjb2RlKHM6IEpTT05fU2F2ZUluZm8pOiBDX1NhdmVJbmZvIHtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgICA9IHMuc2F2ZV9pZCAgID8/IHRoaXMuc2F2ZV9pZDtcclxuICAgICAgICB0aGlzLnBsYXllcl9pZCA9IHMucGxheWVyX2lkID8/IHRoaXMucGxheWVyX2lkOyBcclxuICAgICAgICB0aGlzLnVuaXFfbm8gICA9IHMudW5pcV9ubyAgID8/IHRoaXMudW5pcV9ubztcclxuICAgICAgICB0aGlzLnRpdGxlICAgICA9IHMudGl0bGUgICAgID8/IHRoaXMudGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXRhaWwgICAgPSBzLmRldGFpbCAgICA/PyB0aGlzLmRldGFpbDtcclxuICAgICAgICB0aGlzLnBvaW50ICAgICA9IHMucG9pbnQgICAgID8/IHRoaXMucG9pbnQ7XHJcbiAgICAgICAgaWYgKHMuYXV0b19tb2RlID09PSB1bmRlZmluZWQpIHRoaXMuYXV0b19tb2RlOyBlbHNlIHMuYXV0b19tb2RlICE9PSAnMCcgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKHMuaXNfYWN0aXZlID09PSB1bmRlZmluZWQpIHRoaXMuaXNfYWN0aXZlOyBlbHNlIHMuaXNfYWN0aXZlICE9PSAnMCcgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKHMuaXNfZGVsZXRlID09PSB1bmRlZmluZWQpIHRoaXMuaXNfZGVsZXRlOyBlbHNlIHMuaXNfZGVsZXRlICE9PSAnMCcgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKHMuc2F2ZV90aW1lICE9PSB1bmRlZmluZWQpIHRoaXMuc2F2ZV90aW1lID0gbmV3IERhdGUocy5zYXZlX3RpbWUpOyBcclxuXHJcbiAgICAgICAgaWYgKHMubXlwb3MgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlwb3MuZGVjb2RlKHMubXlwb3MpOyBcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbGVydCgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIlNhdmVJbmZvIERBVEE6XCIgXHJcbiAgICAgICAgICAgICsgXCJcXG5zYXZlX2lkOiAgICBcIiArICh0aGlzLnNhdmVfaWQgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5wbGF5ZXJfaWQ6ICBcIiArICh0aGlzLnBsYXllcl9pZCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG51bmlxX25vOiAgICBcIiArICh0aGlzLnVuaXFfbm8gICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG50aXRsZTogICAgICBcIiArICh0aGlzLnRpdGxlICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5kZXRhaWw6ICAgICBcIiArICh0aGlzLmRldGFpbCAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5wb2ludDogICAgICBcIiArICh0aGlzLnBvaW50ICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5hdXRvX21vZGU6ICBcIiArICh0aGlzLmF1dG9fbW9kZT8nWSc6J04nKVxyXG4gICAgICAgICAgICArIFwiXFxuaXNfYWN0aXZlOiAgXCIgKyAodGhpcy5pc19hY3RpdmU/J1knOidOJylcclxuICAgICAgICAgICAgKyBcIlxcbmlzX2RlbGV0ZTogIFwiICsgKHRoaXMuaXNfZGVsZXRlPydZJzonTicpXHJcbiAgICAgICAgICAgICsgXCJcXG5teXVybDogICAgICBcIiArICh0aGlzLm15cG9zLnVybCgpICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudGVhbV91aWQ6ICAgXCIgKyAodGhpcy5teXBvcy50aWQoKSAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxvY19raW5kOiAgIFwiICsgKHRoaXMubXlwb3MuZ2V0X2xja2QoKSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sb2NfbmFtZTogICBcIiArICh0aGlzLm15cG9zLmdldF9uYW1lKCkgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubG9jX3VpZDogICAgXCIgKyAodGhpcy5teXBvcy5nZXRfdWlkKCkgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENfUG9pbnQgfSAgICAgICAgICAgICAgIGZyb20gXCIuL0NfUG9pbnRcIjtcclxuaW1wb3J0IHsgQ19Qb2ludERpciB9ICAgICAgICAgICAgZnJvbSAnLi9DX1BvaW50RGlyJztcclxuaW1wb3J0IHsgQ19Nb3ZhYmxlUG9pbnQgfSAgICAgICAgZnJvbSBcIi4vQ19Nb3ZhYmxlUG9pbnRcIjtcclxuaW1wb3J0IHsgQ19XYWxrZXIsIEpTT05fV2Fsa2VyIH0gZnJvbSBcIi4vQ19XYWxrZXJcIjtcclxuaW1wb3J0IHsgQ19IZXJvLCBKU09OX0hlcm8gfSAgICAgZnJvbSBcIi4vQ19IZXJvXCI7XHJcbmltcG9ydCB7IElfTWF6ZU9iaiB9ICAgICAgICAgICAgIGZyb20gXCIuL0NfTWF6ZU9ialwiO1xyXG5pbXBvcnQgeyBKU09OX0FueSB9ICAgICAgICAgICAgICBmcm9tIFwiLi9DX1NhdmVJbmZvXCI7XHJcbmltcG9ydCB7IENfQ3VycmVudFRlYW1WaWV3IH0gICAgIGZyb20gXCIuL0NfVGVhbVZpZXdcIjtcclxuaW1wb3J0IHsgSV9NYXplT2JqVmlldywgSlNPTl9NYXplT2JqVmlldyB9ICBmcm9tIFwiLi9DX01hemVPYmpWaWV3XCI7XHJcbmltcG9ydCB7IENfR29vZCwgIFRfR29vZEtpbmQgfSAgIGZyb20gXCIuL0NfR29vZFwiO1xyXG5pbXBvcnQgeyBDX0dvb2RzTGlzdCwgSlNPTl9Hb29kc0xpc3QgfSBmcm9tIFwiLi9DX0dvb2RzTGlzdE5HXCI7XHJcbmltcG9ydCB7IF9nZXRfdXVpZCB9ICAgICAgICAgICAgIGZyb20gXCIuLi9kX3V0bC9GX1JhbmRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9UZWFtIGV4dGVuZHMgSlNPTl9Bbnkge1xyXG4gICAgaWQ/OiAgICAgICAgbnVtYmVyLCBcclxuICAgIHVuaXFfaWQ/OiAgIHN0cmluZywgXHJcbiAgICBzYXZlX2lkPzogICBudW1iZXIsIFxyXG4gICAgbmFtZT86ICAgICAgc3RyaW5nLCBcclxuICAgIGxvY2F0ZT86ICAgIEpTT05fV2Fsa2VyLFxyXG4gICAgZ29sZD86ICAgICAgbnVtYmVyLFxyXG4vLyAgICBnb29kcz86ICAgICBKU09OX0dvb2RzTGlzdCxcclxuICAgIGhlcm9lcz86ICAgIEpTT05fSGVyb1tdLCBcclxuICAgIG1vdGlvbj86ICAgIHN0cmluZyxcclxuICAgIHZpZXc/OiAgICAgIEpTT05fTWF6ZU9ialZpZXd8dW5kZWZpbmVkLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfdGVhbV9pbmZvKGE6IEpTT05fVGVhbXx1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGFsZXJ0KFwiVGVhbSBJbmZvOlwiIFxyXG4gICAgICAgICsgXCJcXG5pZDogICAgXCIgICAgICsgKGEuaWQgICAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxudW5pcV9pZDogIFwiICArIChhLnVuaXFfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbm5hbWU6ICBcIiAgICAgKyAoYS5uYW1lICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zYXZlX2lkOiBcIiAgICsgKGEuc2F2ZV9pZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxudXJsOiAgXCIgICAgICArIChhLmxvY2F0ZT8uY3VyX3VybCAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmxja2Q6IFwiICAgICAgKyAoYS5sb2NhdGU/LmtpbmQgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5sY25tOiBcIiAgICAgICsgKGEubG9jYXRlPy5uYW1lICAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubGNpZDogXCIgICAgICArIChhLmxvY2F0ZT8ubG9jX3VpZCAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl94OiBcIiAgICAgKyAoYS5sb2NhdGU/LmxvY19wb3M/LnggPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfeTogXCIgICAgICsgKGEubG9jYXRlPy5sb2NfcG9zPy55ID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3o6IFwiICAgICArIChhLmxvY2F0ZT8ubG9jX3Bvcz8ueiA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl9kOiBcIiAgICAgKyAoYS5sb2NhdGU/LmxvY19wb3M/LmQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5nb2xkOiBcIiAgICAgICsgKGEuZ29sZCAgICAgID8/ICAwIClcclxuLy8gICAgICAgICsgXCJcXG5nb29kczogXCIgICAgICsgKE9iamVjdC5rZXlzKGEuZ29vZHM/P1tdKS5sZW5ndGgpXHJcbiAgICAgICAgKyBcIlxcbmhlcm9lczogXCIgICAgKyAoYS5oZXJvZXM/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG5cclxuLy8gICAgaWYgKGEuaGVyb2VzICE9PSB1bmRlZmluZWQpIGFsZXJ0X2hlcm9lc19pbmZvKGEuaGVyb2VzKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1RlYW0gaW1wbGVtZW50cyBJX01hemVPYmoge1xyXG4gICAgcHJvdGVjdGVkIG15X2lkOiAgICAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIG15X25hbWU6ICAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHVuaXFfaWQ6ICAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHNhdmVfaWQ6ICAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIHdhbGtlcjogICAgQ19XYWxrZXI7XHJcbiAgICBwcm90ZWN0ZWQgZ29sZDogICAgICBudW1iZXI7XHJcbi8vICAgIHByb3RlY3RlZCBnb29kczogICAgIENfR29vZHNMaXN0O1xyXG4gICAgcHJvdGVjdGVkIGhlcm9lczogICAge1t1aWQ6IHN0cmluZ106IENfSGVyb307XHJcblxyXG4gICAgcHJvdGVjdGVkIG15VmlldzogICAgSV9NYXplT2JqVmlld3x1bmRlZmluZWQ7XHJcbiAgICBwcm90ZWN0ZWQgaG9wZV9tb3Rpb246IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioaj86IEpTT05fVGVhbSkge1xyXG5cclxuICAgICAgICB0aGlzLm15X2lkICAgICA9ICAwO1xyXG4gICAgICAgIHRoaXMubXlfbmFtZSAgID0gJ05lbyBUZWFtPyc7XHJcbiAgICAgICAgdGhpcy51bmlxX2lkICAgPSAnbWFpX3RlYW0jJyArIF9nZXRfdXVpZCgpO1xyXG4gICAgICAgIHRoaXMuc2F2ZV9pZCAgID0gIDA7XHJcblxyXG4gICAgICAgIHRoaXMubXlWaWV3ID0gbmV3IENfQ3VycmVudFRlYW1WaWV3KHRoaXMpIGFzIElfTWF6ZU9ialZpZXc7XHJcbiAgICAgICAgdGhpcy53YWxrZXIgPSBuZXcgQ19XYWxrZXIoKTtcclxuICAgICAgICB0aGlzLndhbGtlci5zZXRfdGlkKHRoaXMudWlkKCkpO1xyXG5cclxuICAgICAgICB0aGlzLmdvbGQgICA9IDA7XHJcbi8vICAgICAgICB0aGlzLmdvb2RzICA9IG5ldyBDX0dvb2RzTGlzdCgpO1xyXG4gICAgICAgIHRoaXMuaGVyb2VzID0ge307XHJcbiAgICAgICAgdGhpcy5ob3BlX21vdGlvbiA9ICdOT1AnOyAgICBcclxuICAgICAgICBpZiAoaiAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlY29kZShqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcHJwKGFyZyA6IEpTT05fVGVhbSkge1xyXG4gICAgICAgIHRoaXMuZGVjb2RlKGFyZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy51bmlxX2lkfVxyXG5cclxuICAgIHB1YmxpYyB3aXRoaW4ocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGhlcmUgPSB0aGlzLndhbGtlcj8uZ2V0X3AoKTtcclxuICAgICAgICByZXR1cm4gaGVyZT8ud2l0aGluKHApID8/IGZhbHNlOyBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlldygpOiAgSV9NYXplT2JqVmlld3x1bmRlZmluZWQge3JldHVybiB0aGlzLm15Vmlld31cclxuICAgIHB1YmxpYyB3YWxrKCk6ICBDX1dhbGtlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2Fsa2VyXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBjYW5UaHJvdWdoKCk6IGJvb2xlYW4ge3JldHVybiB0cnVlfVxyXG4gICAgcHVibGljIGhpdFdhbGxEbWcoKTogbnVtYmVyICB7cmV0dXJuIDB9XHJcblxyXG4gICAgcHVibGljIGhyZXMoKTogIENfSGVyb1tdIHtcclxuICAgICAgICBjb25zdCBocmVzOiBDX0hlcm9bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGlpIGluIHRoaXMuaGVyb2VzKSBocmVzLnB1c2godGhpcy5oZXJvZXNbaWldKTtcclxuICAgICAgICByZXR1cm4gaHJlcztcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgY2xlYXJfaHJlcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlcm9lcyA9IHt9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFkZF9oZXJvKGhlcm86IENfSGVybyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGVyb2VzW2hlcm8udWlkKCldID0gaGVybztcclxuICAgIH1cclxuICAgIHB1YmxpYyBybXZfaGVybyhoZXJvOiBDX0hlcm8pOiB2b2lkIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5oZXJvZXNbaGVyby51aWQoKV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldF9sb2MoKTogQ19Nb3ZhYmxlUG9pbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndhbGtlcjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfbG9jKGxvYzogQ19Nb3ZhYmxlUG9pbnQpOiB2b2lkIHtcclxuICAgICAgICAodGhpcy53YWxrZXIgPz89IG5ldyBDX1dhbGtlcigpKS5kZWNvZGUobG9jLmVuY29kZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X3BkKCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndhbGtlci5nZXRfcGQoKTtcclxuICAgIH1cclxuXHJcbi8qXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fb2JqX3RvX3N0cmluZyhvYTogQ19UZWFtKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2EsIG51bGwsIFwiXFx0XCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX29iakFycmF5X3RvX3N0cmluZyhvYWE6IHtbdWlkOiBzdHJpbmddOiBDX1RlYW19KTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBvYSA9IFtdIGFzIENfVGVhbVtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgaWkgaW4gb2FhKSBvYS5wdXNoKG9hYVtpaV0pO1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYSwgbnVsbCwgXCJcXHRcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fc3RyaW5nX3RvX29iaih0eHQ6IHN0cmluZyk6IENfVGVhbSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaiAgID0gSlNPTi5wYXJzZSh0eHQpIGFzIENfVGVhbVtdO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENfVGVhbShqKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDX1RlYW0oKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ190b19vYmpBcnJheSh0eHQ6IHN0cmluZyk6IHtbdWlkOiBzdHJpbmddOiBDX1RlYW19IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqICAgPSBKU09OLnBhcnNlKHR4dCkgYXMgSlNPTl9UZWFtW107XHJcbiAgICAgICAgICAgIGNvbnN0IG1wYSA9IHt9IGFzIHtbaWQ6IHN0cmluZ106IENfVGVhbX07XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgamogb2Ygaikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWFhID0gbmV3IENfVGVhbSgpLmRlY29kZShqaik7XHJcbiAgICAgICAgICAgICAgICBtcGFbYWFhLnVpZCgpXSA9IGFhYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbXBhO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuKi9cclxuICAgIFxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1RlYW0ge1xyXG4gICAgICAgIHRoaXMuZ2V0X2xvYygpOyAvLyBMb2NhdGlvbuaDheWgseOCkuacgOaWsOOBq+abtOaWsFxyXG5cclxuICAgICAgICBjb25zdCBqc29uX2hlcm9lczogSlNPTl9IZXJvW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpaSBpbiB0aGlzLmhlcm9lcykganNvbl9oZXJvZXMucHVzaCh0aGlzLmhlcm9lc1tpaV0uZW5jb2RlKCkpOyAgXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgICAgdGhpcy5teV9pZCxcclxuICAgICAgICAgICAgbmFtZTogICAgICB0aGlzLm15X25hbWUsXHJcbiAgICAgICAgICAgIHVuaXFfaWQ6ICAgdGhpcy51bmlxX2lkLFxyXG4gICAgICAgICAgICBzYXZlX2lkOiAgIHRoaXMuc2F2ZV9pZCxcclxuICAgICAgICAgICAgbG9jYXRlOiAgICB0aGlzLndhbGtlci5lbmNvZGUoKSxcclxuICAgICAgICAgICAgZ29sZDogICAgICB0aGlzLmdvbGQsXHJcbi8vICAgICAgICAgICAgZ29vZHM6ICAgICB0aGlzLmdvb2RzLmVuY29kZSgpLFxyXG4gICAgICAgICAgICBoZXJvZXM6ICAgIGpzb25faGVyb2VzLFxyXG4gICAgICAgICAgICBtb3Rpb246ICAgIHRoaXMuaG9wZV9tb3Rpb24sXHJcbiAgICAgICAgICAgIHZpZXc6ICAgICAgdGhpcy5teVZpZXc/LmVuY29kZSgpID8/IHt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IEpTT05fVGVhbXx1bmRlZmluZWQpOiBDX1RlYW0ge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpICByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGEuaWQgICAhPT0gdW5kZWZpbmVkKSAgICB0aGlzLm15X2lkICAgICAgID0gYS5pZDtcclxuICAgICAgICBpZiAoYS5uYW1lICE9PSB1bmRlZmluZWQpICAgIHRoaXMubXlfbmFtZSAgICAgPSBhLm5hbWU7XHJcbiAgICAgICAgaWYgKGEudW5pcV9pZCAhPT0gdW5kZWZpbmVkKSB0aGlzLnVuaXFfaWQgICAgID0gYS51bmlxX2lkO1xyXG4gICAgICAgIGlmIChhLnNhdmVfaWQgIT09IHVuZGVmaW5lZCkgdGhpcy5zYXZlX2lkICAgICA9IGEuc2F2ZV9pZDtcclxuICAgICAgICBpZiAoYS5tb3Rpb24gIT09IHVuZGVmaW5lZCkgIHRoaXMuaG9wZV9tb3Rpb24gPSBhLm1vdGlvbjtcclxuXHJcbiAgICAgICAgaWYgKGEubG9jYXRlICE9PSB1bmRlZmluZWQpICB0aGlzLndhbGtlci5kZWNvZGUoYS5sb2NhdGUpO1xyXG4gICAgICAgIGlmIChhLmdvbGQgICAhPT0gdW5kZWZpbmVkKSAgdGhpcy5nb2xkID0gYS5nb2xkO1xyXG4vLyAgICAgICAgaWYgKGEuZ29vZHMgICE9PSB1bmRlZmluZWQpICB0aGlzLmdvb2RzLmRlY29kZShhLmdvb2RzKTtcclxuXHJcbiAgICAgICAgaWYgKGEuaGVyb2VzICE9PSB1bmRlZmluZWQpICB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVyb2VzID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QganNvbl9oZXJvIG9mIGEuaGVyb2VzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZXJvID0gbmV3IENfSGVybyhqc29uX2hlcm8pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZXJvZXNbaGVyby51aWQoKV0gPSBoZXJvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4vKlxyXG4gICAgICAgIGlmIChhLnZpZXcgICAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoYS52aWV3KS5sZW5ndGggPiAwKSB0aGlzLm15VmlldyA9IENfTWF6ZU9ialZpZXcubmV3T2JqKGEudmlldyk7IFxyXG4gICAgICAgICAgICBlbHNlIHRoaXMubXlWaWV3ID0gbmV3IENfQ3VycmVudFRlYW1WaWV3KHRoaXMpIGFzIElfTWF6ZU9ialZpZXc7IFxyXG4gICAgICAgIH1cclxuKi9cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZW5jb2RlX2FsbChhbGxfdGVhbTogQ19UZWFtW10pOiBKU09OX1RlYW1bXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX3RlYW1fZGF0YTogSlNPTl9UZWFtW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB0ZWFtIG9mIGFsbF90ZWFtKSB7XHJcbiAgICAgICAgICAgIGFsbF90ZWFtX2RhdGEucHVzaCh0ZWFtLmVuY29kZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbF90ZWFtX2RhdGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZV9hbGwoYWxsX3RlYW1fZGF0YTogSlNPTl9UZWFtW10pOiBDX1RlYW1bXSB7XHJcbiAgICAgICAgY29uc3QgYWxsX3RlYW06IENfVGVhbVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgdGVhbV9kYXRhIG9mIGFsbF90ZWFtX2RhdGEpIHtcclxuICAgICAgICAgICAgYWxsX3RlYW0ucHVzaCgobmV3IENfVGVhbSgpKS5kZWNvZGUodGVhbV9kYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxfdGVhbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGFsZXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGFsZXJ0KFwiVGVhbSBJbmZvOlwiIFxyXG4gICAgICAgICAgICArIFwiXFxuaWQ6ICAgIFwiICAgICArICh0aGlzLm15X2lkICAgICAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudW5pcV9pZDogIFwiICArICh0aGlzLnVuaXFfaWQgICAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubmFtZTogIFwiICAgICArICh0aGlzLm15X25hbWUgICAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2F2ZV9pZDogXCIgICArICh0aGlzLnNhdmVfaWQgICAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudXJsOiAgXCIgICAgICArICh0aGlzLndhbGtlci51cmwoKSAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubGNrZDogXCIgICAgICArICh0aGlzLndhbGtlci5nZXRfbGNrZF9zdHIoKSA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5sY25tOiBcIiAgICAgICsgKHRoaXMud2Fsa2VyLmdldF9uYW1lKCkgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmxjaWQ6IFwiICAgICAgKyAodGhpcy53YWxrZXIuZ2V0X3VpZCgpICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuY3VyX3g6IFwiICAgICArICh0aGlzLndhbGtlci5nZXRfcCgpLnggPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuY3VyX3k6IFwiICAgICArICh0aGlzLndhbGtlci5nZXRfcCgpLnkgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuY3VyX3o6IFwiICAgICArICh0aGlzLndhbGtlci5nZXRfcCgpLnogPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuY3VyX2Q6IFwiICAgICArICh0aGlzLndhbGtlci5nZXRfZCgpICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuZ29sZDogXCIgICAgICArIChPYmplY3Qua2V5cyh0aGlzLmdvbGQgPz8ge30pLmxlbmd0aClcclxuICAgICAgICAgICAgKyBcIlxcbmhlcm9lczogXCIgICAgKyAodGhpcy5oZXJvZXM/Lmxlbmd0aCA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWxlcnRfaHJlcygpOiB2b2lkIHtcclxuLy8gICAgICAgIGFsZXJ0KFwiVGVhbSBJbmZvOlwiKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHRoaXMuaGVyb2VzKSB0aGlzLmhlcm9lc1tpaV0uYWxlcnQoKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IFRfRGlyZWN0aW9uIH0gICAgICAgZnJvbSAnLi9DX1BvaW50RGlyJztcclxuaW1wb3J0IHsgQ19UZWFtLCBKU09OX1RlYW0gfSBmcm9tIFwiLi9DX1RlYW1cIjtcclxuaW1wb3J0IHsgVF9XYWxsIH0gICAgICAgICAgICBmcm9tIFwiLi4vZF9tZGwvQ19XYWxsXCI7XHJcbmltcG9ydCB7IENfTWF6ZU9ialZpZXcsIElfTWF6ZU9ialZpZXcsIEpTT05fTWF6ZU9ialZpZXcsIFRfUmVjdCB9ICBmcm9tIFwiLi9DX01hemVPYmpWaWV3XCI7XHJcblxyXG50eXBlIFRfeHkgPSB7eDogbnVtYmVyLCB5OiBudW1iZXJ9O1xyXG5cclxuZXhwb3J0IGNsYXNzIENfQ3VycmVudFRlYW1WaWV3ICBpbXBsZW1lbnRzIElfTWF6ZU9ialZpZXcge1xyXG4gICAgcHVibGljICBzdGF0aWMgbmV3T2JqKGo/OiBKU09OX1RlYW0pOiBJX01hemVPYmpWaWV3IHtcclxuICAgICAgICBjb25zdCB0ZWFtID0gbmV3IENfVGVhbShqKTtcclxuICAgICAgICByZXR1cm4gbmV3IENfQ3VycmVudFRlYW1WaWV3KHRlYW0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljICBuZXdPYmooaj86IEpTT05fVGVhbSk6IElfTWF6ZU9ialZpZXcge3JldHVybiBDX0N1cnJlbnRUZWFtVmlldy5uZXdPYmooail9XHJcblxyXG4gICAgcHJpdmF0ZSBteV90ZWFtOiBDX1RlYW07XHJcbiAgICBwcml2YXRlIG15X2xheWVyOiAgbnVtYmVyID0gOTk7XHJcbiAgICBwdWJsaWMgIGNvbnN0cnVjdG9yKHRlYW06IENfVGVhbSkge1xyXG4gICAgICAgIHRoaXMubXlfdGVhbSA9IHRlYW07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxheWVyKCk6IG51bWJlciAgICAgICAgIHtyZXR1cm4gdGhpcy5teV9sYXllcjt9XHJcbiAgICBwdWJsaWMgc2V0X2xheWVyKGxheWVyOiBudW1iZXIpOiB2b2lkIHt0aGlzLm15X2xheWVyID0gbGF5ZXI7fVxyXG4gICAgcHVibGljIGxldHRlcigpOiBzdHJpbmd8bnVsbCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLm15X3RlYW0ud2FsaygpLmdldF9kKCkpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiByZXR1cm4gJ+KGkSc7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogcmV0dXJuICfihpInO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6IHJldHVybiAn4oaTJztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiByZXR1cm4gJ+KGkCc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAn8J+MgCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGNhblNob3coKTogYm9vbGVhbntyZXR1cm4gZmFsc2V9XHJcbiAgICBwdWJsaWMgcGFkX3QoKTogICBudW1iZXIge3JldHVybiAwLjB9IFxyXG4gICAgcHVibGljIHBhZF9kKCk6ICAgbnVtYmVyIHtyZXR1cm4gMC4wfSBcclxuICAgIHB1YmxpYyBwYWRfcygpOiAgIG51bWJlciB7cmV0dXJuIDAuMH0gXHJcbiAgICBwdWJsaWMgY29sX2YoKTogICBzdHJpbmd8bnVsbCB7cmV0dXJuIG51bGx9IFxyXG4gICAgcHVibGljIGNvbF9iKCk6ICAgc3RyaW5nfG51bGwge3JldHVybiBudWxsfSBcclxuICAgIHB1YmxpYyBjb2xfcygpOiAgIHN0cmluZ3xudWxsIHtyZXR1cm4gbnVsbH0gXHJcbiAgICBwdWJsaWMgY29sX3QoKTogICBzdHJpbmd8bnVsbCB7cmV0dXJuIG51bGx9IFxyXG4gICAgcHVibGljIGNvbF9kKCk6ICAgc3RyaW5nfG51bGwge3JldHVybiBudWxsfSBcclxuICAgIHB1YmxpYyBjb2xfbCgpOiAgIHN0cmluZ3xudWxsIHtyZXR1cm4gbnVsbH0gXHJcbiAgICBwdWJsaWMgY29sXzIoKTogICBzdHJpbmd8bnVsbCB7cmV0dXJuIG51bGx9IFxyXG4gICAgcHVibGljIGNvbF9MKCk6ICAgc3RyaW5nfG51bGwge3JldHVybiBudWxsfSBcclxuXHJcbiAgICBwdWJsaWMgZHJvdzNEKGZyb3Q6IFRfV2FsbCwgYmFjazogVF9XYWxsKTogdm9pZCB7fVxyXG5cclxuICAgIHB1YmxpYyBkcm93MkQocjogIFRfUmVjdCk6IHZvaWQge1xyXG5cclxuICAgICAgICBjb25zdCBjb24gPSBDX01hemVPYmpWaWV3LmdldF9jb250ZXh0MkQoKTtcclxuICAgICAgICBpZiAoY29uID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgIGNvbi5iZWdpblBhdGgoKTtcclxuICAgICAgICBjb24ubW92ZVRvKHIudGwueCwgci50bC55KTtcclxuICAgICAgICBjb24ubGluZVRvKHIudHIueCwgci50ci55KTtcclxuICAgICAgICBjb24ubGluZVRvKHIuZHIueCwgci5kci55KTtcclxuICAgICAgICBjb24ubGluZVRvKHIuZGwueCwgci5kbC55KTtcclxuICAgICAgICBjb24uY2xvc2VQYXRoKCk7XHJcbiAgICBcclxuICAgICAgICBjb24uZmlsbFN0eWxlICAgPSBcIiNmZjMzMzNcIjtcclxuICAgICAgICBjb24uZmlsbCgpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gRHJhdyB0aGUgYXJyb3dcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubXlfdGVhbS53YWxrKCkuZ2V0X2QoKSkge1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46ICAvLyDihpFcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJvdzJEX2Fycm93KHt4OiAoci50bC54ICsgci50ci54KS8yLCB5OnIudGwueX0sIHIuZGwsIHIuZHIpO2JyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogIC8vIOKGklxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcm93MkRfYXJyb3coe3k6IChyLnRyLnkgKyByLmRyLnkpLzIsIHg6ci50ci54fSwgci50bCwgci5kbCk7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogLy8g4oaTXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3cyRF9hcnJvdyh7eDogKHIuZGwueCArIHIuZHIueCkvMiwgeTpyLmRsLnl9LCByLnRyLCByLnRsKTticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiAvLyDihpBcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJvdzJEX2Fycm93KHt5OiAoci50bC55ICsgci5kbC55KS8yLCB4OnIudGwueH0sIHIuZHIsIHIudHIpO2JyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBkcm93MkRfYXJyb3codG9wOiBUX3h5LCBsZWZ0OiBUX3h5LCByaWdodDogVF94eSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNvbiA9IENfTWF6ZU9ialZpZXcuZ2V0X2NvbnRleHQyRCgpO1xyXG4gICAgICAgIGlmIChjb24gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb24uYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY29uLm1vdmVUbyh0b3AueCwgdG9wLnkpO1xyXG4gICAgICAgIGNvbi5saW5lVG8ocmlnaHQueCwgcmlnaHQueSk7XHJcbiAgICAgICAgY29uLmxpbmVUbyhsZWZ0LngsIGxlZnQueSk7XHJcbiAgICAgICAgY29uLmNsb3NlUGF0aCgpO1xyXG5cclxuICAgICAgICBjb24uZmlsbFN0eWxlICAgPSBcIiNmZjY2NjZcIjtcclxuICAgICAgICBjb24uZmlsbCgpO1xyXG5cclxuICAgICAgICBjb24uc3Ryb2tlU3R5bGUgPSBcIiNmZjk5OTlcIjtcclxuICAgICAgICBjb24ubGluZVdpZHRoICAgPSAzO1xyXG4gICAgICAgIGNvbi5zdHJva2UoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTWF6ZU9ialZpZXcge3JldHVybiB7Y25hbWU6ICdDdXJyZW50VGVhbVZpZXcnfX1cclxuICAgIHB1YmxpYyBkZWNvZGUoajogSlNPTl9NYXplT2JqVmlld3x1bmRlZmluZWQpOiBJX01hemVPYmpWaWV3IHtyZXR1cm4gdGhpcyBhcyBJX01hemVPYmpWaWV3fVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ19Qb2ludERpciwgVF9EaXJlY3Rpb24gfSAgICAgICAgICAgZnJvbSBcIi4vQ19Qb2ludERpclwiO1xyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCwgSlNPTl9Nb3ZhYmxlUG9pbnQgfSBmcm9tIFwiLi9DX01vdmFibGVQb2ludFwiO1xyXG5pbXBvcnQgeyBJX0xvY2F0ZSB9ICAgICBmcm9tIFwiLi9DX0xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IElfSG9wZUFjdGlvbiB9IGZyb20gXCIuL0lfSG9wZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSlNPTl9XYWxrZXIgZXh0ZW5kcyBKU09OX01vdmFibGVQb2ludCB7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1dhbGtlciBleHRlbmRzIENfTW92YWJsZVBvaW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGo/OiBKU09OX1dhbGtlcikge1xyXG4gICAgICAgIHN1cGVyKGopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF94KCk6IG51bWJlciB7cmV0dXJuIHRoaXMubG9jX3Bvcy54fVxyXG4gICAgcHVibGljIGdldF95KCk6IG51bWJlciB7cmV0dXJuIHRoaXMubG9jX3Bvcy55fVxyXG4gICAgcHVibGljIGdldF96KCk6IG51bWJlciB7cmV0dXJuIHRoaXMubG9jX3Bvcy56fVxyXG5cclxuICAgIHB1YmxpYyBzZXRfeCh4OiBudW1iZXIpOiB2b2lkIHt0aGlzLmxvY19wb3MueCA9IHh9XHJcbiAgICBwdWJsaWMgc2V0X3koeTogbnVtYmVyKTogdm9pZCB7dGhpcy5sb2NfcG9zLnkgPSB5fVxyXG4gICAgcHVibGljIHNldF96KHo6IG51bWJlcik6IHZvaWQge3RoaXMubG9jX3Bvcy56ID0gen1cclxuXHJcbiAgICBwdWJsaWMgc2V0X3BsYWNlKFxyXG4gICAgICAgIHBsYWNlOiBJX0xvY2F0ZSwgXHJcbiAgICAgICAgdXJsPzogIHN0cmluZywgXHJcbiAgICAgICAgcG9zPzogIENfUG9pbnREaXIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRfdWlkIChwbGFjZS51aWQoKSk7XHJcbiAgICAgICAgdGhpcy5zZXRfbGNrZChwbGFjZS5nZXRfbGNrZCgpKTtcclxuICAgICAgICB0aGlzLnNldF9uYW1lKHBsYWNlLmdldF9uYW1lKCkpO1xyXG5cclxuICAgICAgICBpZiAodXJsICE9PSB1bmRlZmluZWQpIHRoaXMuc2V0X3VybCh1cmwpO1xyXG4gICAgICAgIGlmIChwb3MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldF9wZChwb3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBob3BlX3BfZndkKCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIk1vdmVcIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy5nZXRfcF9md2QoKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLnNldF9wX2Z3ZCgpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhvcGVfcF9iYWsoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiTW92ZVwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wX2JhaygpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMuc2V0X3BfYmFrKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBob3BlX3BfbGZ0KCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIk1vdmVcIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy5nZXRfcF9sZnQoKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLnNldF9wX2xmdCgpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhvcGVfcF9yZ3QoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiTW92ZVwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wX3JndCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMuc2V0X3Bfcmd0KCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9wZV90dXJuX3IoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiVHVyblwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wZCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMudHVybl9yKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9wZV90dXJuX2woKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiVHVyblwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wZCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMudHVybl9sKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhvcGVfcF91cCgpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJVcFwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLmdldF9wX3VwKCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy5tb3ZlX3BfdXAoKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBob3BlX3BfZG93bigpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJEb3duXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMuZ2V0X3BfZG93bigpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMubW92ZV9wX2Rvd24oKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZV9wX3VwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3BfdXAoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBtb3ZlX3BfZG93bigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldF9wX2Rvd24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNORygpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXRfcF9md2QoKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19nZXRfcF9tb3ZlKDEsIDApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wX2Z3ZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldF9wZCh0aGlzLmdldF9wX2Z3ZCgpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfcF9iYWsoKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19nZXRfcF9tb3ZlKC0xLCAwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcF9iYWsoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRfcGQodGhpcy5nZXRfcF9iYWsoKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BfbGZ0KCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9fZ2V0X3BfbW92ZSgwLCAtMSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BfbGZ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3BkKHRoaXMuZ2V0X3BfbGZ0KCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wX3JndCgpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX2dldF9wX21vdmUoMCwgMSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3Bfcmd0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3BkKHRoaXMuZ2V0X3Bfcmd0KCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wX3VwKCk6IENfUG9pbnREaXIge1xyXG4gICAgICAgIGNvbnN0IHAgPSBuZXcgQ19Qb2ludERpcih0aGlzLmxvY19wb3MpO1xyXG4gICAgICAgIHAuei0tO1xyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wX3VwKCkge1xyXG4gICAgICAgIHRoaXMuc2V0X3BkKHRoaXMuZ2V0X3BfdXAoKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BfZG93bigpOiBDX1BvaW50RGlyIHtcclxuICAgICAgICBjb25zdCBwID0gbmV3IENfUG9pbnREaXIodGhpcy5sb2NfcG9zKTtcclxuICAgICAgICBwLnorKztcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcF9kb3duKCkge1xyXG4gICAgICAgIHRoaXMuc2V0X3BkKHRoaXMuZ2V0X3BfZG93bigpKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2dldF9wX21vdmUob2Zmc2V0RkI6IG51bWJlciwgb2Zmc2V0TFI6IG51bWJlcik6IENfUG9pbnREaXIge1xyXG4gICAgICAgIGNvbnN0IHAgPSBuZXcgQ19Qb2ludERpcih0aGlzLmxvY19wb3MpO1xyXG4gICAgICAgIGlmIChvZmZzZXRGQiAhPT0gMCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMubG9jX3Bvcy5kKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHAueSAtPSBvZmZzZXRGQjticmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogcC54ICs9IG9mZnNldEZCO2JyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiBwLnkgKz0gb2Zmc2V0RkI7YnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHAueCAtPSBvZmZzZXRGQjticmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2Zmc2V0TFIgIT09IDApIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmxvY19wb3MuZCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiBwLnggKz0gb2Zmc2V0TFI7YnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHAueSArPSBvZmZzZXRMUjticmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogcC54IC09IG9mZnNldExSO2JyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiBwLnkgLT0gb2Zmc2V0TFI7YnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X2Fyb3VuZChmcm9udDogbnVtYmVyLCByaWdodDpudW1iZXIsIHVwOiBudW1iZXIgPSAwKTogQ19Qb2ludERpciB7XHJcbiAgICAgICAgdmFyIHRhcmdldF94ICA9IHRoaXMubG9jX3Bvcy54O1xyXG4gICAgICAgIHZhciB0YXJnZXRfeSAgPSB0aGlzLmxvY19wb3MueTtcclxuICAgICAgICB2YXIgdGFyZ2V0X3ogID0gdGhpcy5sb2NfcG9zLnogLSB1cDtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubG9jX3Bvcy5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjpcclxuICAgICAgICAgICAgICAgIHRhcmdldF94ICs9IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3kgLT0gZnJvbnQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3ggKz0gZnJvbnQ7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeSArPSByaWdodDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeCAtPSByaWdodDtcclxuICAgICAgICAgICAgICAgIHRhcmdldF95ICs9IGZyb250O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzpcclxuICAgICAgICAgICAgICAgIHRhcmdldF94IC09IGZyb250O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3kgLT0gcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX1BvaW50RGlyKHt4OiB0YXJnZXRfeCwgeTogdGFyZ2V0X3ksIHo6IHRhcmdldF96LCBkOiB0aGlzLmxvY19wb3MuZH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHR1cm5fcigpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubG9jX3Bvcy5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5FO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uUzticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLlc7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5OO2JyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyB0dXJuX2woKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmxvY19wb3MuZCkge1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uVzticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLk47YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5FO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uUzticmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdHVybl9iKCk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5sb2NfcG9zLmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLlM7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogdGhpcy5sb2NfcG9zLmQgPSBUX0RpcmVjdGlvbi5XO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6IHRoaXMubG9jX3Bvcy5kID0gVF9EaXJlY3Rpb24uTjticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiB0aGlzLmxvY19wb3MuZCA9IFRfRGlyZWN0aW9uLlc7YnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1dhbGtlciB7XHJcbiAgICAgICAgY29uc3QgaiA9IHN1cGVyLmVuY29kZSgpIGFzIEpTT05fV2Fsa2VyO1xyXG4gICAgICAgIHJldHVybiBqO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX1dhbGtlcik6IENfV2Fsa2VyIHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBzdXBlci5kZWNvZGUoYSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHtUX01ha2VFbnVtVHlwZX0gZnJvbSBcIi4uL2RfdXRsL1RfTWFrZUVudW1UeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVF9EaXJlY3Rpb24gPSB7XHJcbiAgICBOOiAgIDAsXHJcbiAgICBFOiAgIDEsXHJcbiAgICBTOiAgIDIsXHJcbiAgICBXOiAgIDMsXHJcbiAgICBYOiAgOTksXHJcbiAgICBNQVg6IDNcclxufSBhcyBjb25zdDtcclxuZXhwb3J0IHR5cGUgVF9EaXJlY3Rpb24gPSBUX01ha2VFbnVtVHlwZTx0eXBlb2YgVF9EaXJlY3Rpb24+O1xyXG5cclxuZXhwb3J0IHZhciAkRGlyZWN0aW9uTmFtZSA9IHtcclxuICAgIDA6ICAn5YyXJyxcclxuICAgIDE6ICAn5p2xJyxcclxuICAgIDI6ICAn5Y2XJyxcclxuICAgIDM6ICAn6KW/JyxcclxuICAgIDk5OiAn6KyOJ1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIC8vIOS4gOiIrOOBq+S9v+OBiOOCi+ODpuODvOODhuOCo+ODquODhuOCo+OBquWRquaWh1xyXG4gICAgLy8g44Kq44OW44K444Kn44Kv44OI44KS5YiX5oyZ5Z6L44Go44GX44Gm5Z6L5YyW44GZ44KL44Gu44Gr5Yip55SoXHJcbiAgICBpbXBvcnQge1RfTWFrZUVudW1UeXBlfSBmcm9tIFwiLi4vZF91dGwvVF9NYWtlRW51bVR5cGVcIjtcclxuXHJcbiAgICAvLyDjg4Djg7Pjgrjjg6fjg7Pjg57jg4Pjg5fjga7jgrvjg6vjga7nqK7poZ7jgpLooajjgZnliJfmjJnlnotcclxuICAgIC8vIE5vRGVmOiDmnKrlrprnvqnjg7vkuI3mmI5cclxuICAgIC8vIEZsb29yOiDluopcclxuICAgIC8vIFVuZXhwOiDmnKrouI/lnLBcclxuICAgIC8vIFN0b25lOiDnn7Plo4FcclxuICAgIC8vIFN0clVwOiDkuIrjgorpmo7mrrVcclxuICAgIC8vIFN0ckRuOiDkuIvjgorpmo7mrrVcclxuICAgIC8vIEVtcHR5OiDliJ3mnJ/nirbmhYvjg7vkvZXjgoLjgarjgZdcclxuICAgIC8vIFxyXG4gICAgLy8gZnVuY3Rpb24gdG9faW50KE16S2luZCk6ICAgICAgaW50ICAgICAgICDliJfmjJnlnovjgavlr77lv5zjgZnjgovlgKQo5pW05pWw5YCkKeOCkui/lOOBmVxyXG4gICAgLy8gZnVuY3Rpb24gZnJvbV9pbnQoaW50KTogICAgICAgVF9NektpbmQgICAgIOaVtOaVsOWApOOBq+WvvuW/nOOBmeOCi+WIl+aMmeWei+OCkui/lOOBmSjjgq/jg6njgrnjg6Hjgr3jg4Pjg4kpXHJcbiAgICAvLyBmdW5jdGlvbiB0b19sZXR0ZXIoTXpLaW5kKTogICBzdHJpbmcgICAgIOWIl+aMmeWei+OBq+WvvuW/nOOBmeOCi+aWh+Wtl+OCkui/lOOBmSjjg4Djg7Pjgrjjg6fjg7Pjga4yROihqOekuueUqClcclxuICAgIC8vIGZ1bmN0aW9uIGZyb21fbGV0dGVyKHN0cmluZyk6IFRfTXpLaW5kICAgICDmloflrZfjgavlr77lv5zjgZnjgovliJfmjJnlnovjgpLov5TjgZko44Kv44Op44K544Oh44K944OD44OJKVxyXG5cclxuICAgIGV4cG9ydCBjb25zdCBUX016S2luZDp7W2tleTogc3RyaW5nXTogbnVtYmVyfSAgPSB7XHJcbiAgICAgICAgTm9EZWY6ICAgMCxcclxuICAgICAgICBGbG9vcjogICAxLFxyXG4gICAgICAgIFVuZXhwOiAgIDIsXHJcbiAgICAgICAgU3RvbmU6ICAgMyxcclxuICAgICAgICBVbmt3bjogICA0LFxyXG4gICAgICAgIFN0clVwOiAgIDUsXHJcbiAgICAgICAgU3RyRG46ICAgNixcclxuICAgICAgICBTdHJVRDogICA3LFxyXG4gICAgICAgIEVtcHR5OiAyNTUsXHJcbiAgICB9IGFzIGNvbnN0O1xyXG4gICAgZXhwb3J0IHR5cGUgVF9NektpbmQgICA9IFRfTWFrZUVudW1UeXBlPHR5cGVvZiBUX016S2luZD47XHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IFRfUnZNektpbmQ6e1trZXk6IG51bWJlcl06IFRfTXpLaW5kfSAgPSB7XHJcbiAgICAgICAgMDogICBUX016S2luZC5Ob0RlZixcclxuICAgICAgICAxOiAgIFRfTXpLaW5kLkZsb29yLFxyXG4gICAgICAgIDI6ICAgVF9NektpbmQuVW5leHAsXHJcbiAgICAgICAgMzogICBUX016S2luZC5TdG9uZSxcclxuICAgICAgICA0OiAgIFRfTXpLaW5kLlVua3duLFxyXG4gICAgICAgIDU6ICAgVF9NektpbmQuU3RyVXAsXHJcbiAgICAgICAgNjogICBUX016S2luZC5TdHJEbixcclxuICAgICAgICA3OiAgIFRfTXpLaW5kLlN0clVELFxyXG4gICAgICAgIDI1NTogVF9NektpbmQuRW1wdHksXHJcbiAgICB9IGFzIGNvbnN0O1xyXG4gICAgZXhwb3J0IHR5cGUgVF9Sdk16S2luZCA9IFRfTWFrZUVudW1UeXBlPHR5cGVvZiBUX1J2TXpLaW5kPjtcclxuXHJcbiIsIi8vIOWIqeeUqOOCr+ODqeOCueetieOBruiqreOBv+i+vOOBv1xyXG5pbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xyXG5pbXBvcnQgeyBDX0RzcE1lc3NhZ2UgfSAgICAgICAgZnJvbSAnLi4vZF91dGwvQ19Ec3BNZXNzYWdlJzsgLy8g55S76Z2i44Oh44OD44K744O844K444Gu6KGo56S655So44Kv44Op44K5XHJcbmltcG9ydCB7IENfR3VpbGQsIEpTT05fR3VpbGQgfSBmcm9tIFwiLi4vZF9tZGwvQ19HdWlsZFwiO1xyXG5pbXBvcnQgeyBDX0hlcm9SREIgfSAgICAgICAgICAgZnJvbSAnLi9DX0hlcm9SREInO1xyXG5cclxudHlwZSBkYl9jb25uZWN0ID0gbXlzcWwuUG9vbENvbm5lY3Rpb247XHJcbmludGVyZmFjZSBJX3RibF9ndWxkIGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBpZDogICAgICBudW1iZXIsXHJcbiAgICBzYXZlX2lkOiBudW1iZXIsXHJcbiAgICB1bmlxX2lkOiBzdHJpbmcsXHJcbiAgICBuYW1lOiAgICBzdHJpbmcsXHJcbiAgICBnb2xkOiAgICBudW1iZXIsXHJcbi8vICAgIGdvb2RzOiAgIHN0cmluZyxcclxufVxyXG5pbnRlcmZhY2UgSV9sYXN0SW5zZXJ0IGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19HdWlsZFJEQiB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fcmRiX2FsbChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPENfR3VpbGRbXT4ge1xyXG4gICAgICAgIGNvbnN0IGd1bGRfYXJyYXkgPSBhd2FpdCBDX0d1aWxkUkRCLmdldF9mcm9tX3RibF9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBndWxkIG9mIGd1bGRfYXJyYXkpIHtcclxuICAgICAgICAgICAgY29uc3QgaHJlc19hcnJheSA9ICBhd2FpdCBDX0hlcm9SREIuZ2V0X2Zyb21fcmRiX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCwgZ3VsZC51aWQoKSk7XHJcbiAgICAgICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGhlcm8gb2YgaHJlc19hcnJheSkgZ3VsZC5hZGRfaGVybyhoZXJvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBndWxkX2FycmF5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHNldF90b19yZGIoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyLCBndWxkOiBDX0d1aWxkKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgZ3VsZF9pZCA9IGF3YWl0IENfR3VpbGRSREIuYWRkX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCwgZ3VsZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgaGVybyBvZiBndWxkLmhyZXMoKSkge1xyXG4gICAgICAgICAgICBhd2FpdCBDX0hlcm9SREIuc2V0X3RvX3JkYihkYl9tYWksIG1lcywgc2F2ZV9pZCwgZ3VsZC51aWQoKSwgaGVybyk7XHJcbiAgICAgICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gXHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RvX3JkYihkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIsIGd1bGRfdWlkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBhd2FpdCBDX0hlcm9SREIuZGVsX3RvX3JkYihkYl9tYWksIG1lcywgc2F2ZV9pZCwgZ3VsZF91aWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBDX0d1aWxkUkRCLmRlbF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBp+aMh+WumuOBleOCjOOBn2d1bGTjg6zjgrPjg7zjg4njgrvjg4Pjg4jjgpLoqq3jgb/ovrzjgb9cclxuICAgIC8vIEd1aWxk44Kv44Op44K544Gu6YWN5YiX44Gr44K744OD44OI44GZ44KLXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fdGJsX2FsbChcclxuICAgICAgICBkYl9tYWk6ICBkYl9jb25uZWN0LCBcclxuICAgICAgICBtZXM6ICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgIHNhdmVfaWQ6IG51bWJlcixcclxuICAgICk6IFByb21pc2U8Q19HdWlsZFtdPiB7XHJcbiAgICAgICAgY29uc3QgZ2V0X2d1bGRfU1FMID0gYFxyXG4gICAgICAgICAgICBTRUxFQ1QgXHRpZCwgc2F2ZV9pZCwgdW5pcV9pZCwgbmFtZSwgZ29sZFxyXG4gICAgICAgICAgICBGUk9NICAgIHRibF9ndWxkXHJcbiAgICAgICAgICAgIFdIRVJFICAgc2F2ZV9pZCA9IDpzYXZlX2lkXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZXN1bHRSZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpLnF1ZXJ5PElfdGJsX2d1bGRbXT4oZ2V0X2d1bGRfU1FMLCB7c2F2ZV9pZDogc2F2ZV9pZH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgNjc6ICR7Z2V0X2d1bGRfU1FMfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBpZiAocmVzdWx0UmVjb3JkU2V0Lmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBndWxkX2FycmF5ID0gW10gYXMgQ19HdWlsZFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgcnIgb2YgcmVzdWx0UmVjb3JkU2V0KSB7XHJcbiAgICAgICAgICAgIGd1bGRfYXJyYXkucHVzaChuZXcgQ19HdWlsZChDX0d1aWxkUkRCLmZyb21fc3RyaW5nQXJyYXlfdG9fSlNPTihycikpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGd1bGRfYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJndWxk44OG44O844OW44Or44Gr6Ieq6Lqr44Gu44OH44O844K/44KS6L+95YqgKGluc2VydCnjgZfjgaZcclxuICAgIC8vIOOBneOBrklEKGlkKeOCkui/lOOBmVxyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGFkZF90YmwoXHJcbiAgICAgICAgZGJfbWFpOiAgZGJfY29ubmVjdCwgXHJcbiAgICAgICAgbWVzOiAgICAgQ19Ec3BNZXNzYWdlLCBcclxuICAgICAgICBzYXZlX2lkOiBudW1iZXIsXHJcbiAgICAgICAgZ3VsZDogICAgQ19HdWlsZFxyXG4gICAgKTogUHJvbWlzZTxudW1iZXI+IHtcclxuXHJcbiAgICAgICAgY29uc3QgaW5zZXJ0X2d1bGRfU1FMID1gXHJcbiAgICAgICAgICAgIElOU0VSVCBJTlRPIHRibF9ndWxkICggc2F2ZV9pZCwgIHVuaXFfaWQsICBuYW1lLCAgZ29sZCApXHJcbiAgICAgICAgICAgIFZBTFVFUyAgICAgICAgICAgICAgKCA6c2F2ZV9pZCwgOnVuaXFfaWQsIDpuYW1lLCA6Z29sZCApXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IGogPSBndWxkLmVuY29kZSgpO1xyXG4gICAgICAgIGF3YWl0IGRiX21haS5xdWVyeShpbnNlcnRfZ3VsZF9TUUwsIHtcclxuICAgICAgICAgICAgc2F2ZV9pZDogIHNhdmVfaWQsICBcclxuICAgICAgICAgICAgdW5pcV9pZDogIGoudW5pcV9pZCwgIFxyXG4gICAgICAgICAgICBuYW1lOiAgICAgai5uYW1lLFxyXG4gICAgICAgICAgICBnb2xkOiAgICAgai5nb2xkLFxyXG4vLyAgICAgICAgICAgIGdvb2RzOiAgICBKU09OLnN0cmluZ2lmeShqLmdvb2RzKSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDYxOiAke2luc2VydF9ndWxkX1NRTH1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBDX0d1aWxkUkRCLmxhc3RJbnNlcnQoZGJfbWFpLCBtZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRibF90ZWFt44Gn5pyA5b6M44Gr6L+95Yqg44GX44Gf6KGM55Wq5Y+3KHNhdmVfaWQp44KS6L+U44GZ44CQMeihjOaMv+WFpeWwgueUqOOAkVxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBsYXN0SW5zZXJ0KGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UpIDogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBjb25zdCBsYXN0SW5zZXJ0X1NRTCA9YFxyXG4gICAgICAgICAgICBTRUxFQ1QgTEFTVF9JTlNFUlRfSUQoKSBhcyBpZCBGUk9NIHRibF9ndWxkO1xyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haS5xdWVyeTxJX2xhc3RJbnNlcnRbXT4obGFzdEluc2VydF9TUUwpXHJcbiAgICAgICAgLmNhdGNoICgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCA1MDA6ICR7bGFzdEluc2VydF9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlY29yZFNldC5sZW5ndGggPCAxKSByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIHJlY29yZFNldFswXS5pZDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZlX2lk44Gn5oyH5a6a44GV44KM44Gf44Os44Kz44O844OJKOikh+aVsCnjgpLliYrpmaQoZGVsZXRlKeOBmeOCi1xyXG4gICAgLy8gXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGRlbF90YmwoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlX2d1bGRfU1FMID0gYFxyXG4gICAgICAgICAgICBERUxFVEUgRlJPTSB0YmxfZ3VsZCBcclxuICAgICAgICAgICAgV0hFUkUgIHNhdmVfaWQgPSA6c2F2ZV9pZFxyXG4gICAgICAgIGBcclxuICAgICAgICBhd2FpdCBkYl9tYWkucXVlcnkoZGVsZXRlX2d1bGRfU1FMLHtzYXZlX2lkOiBzYXZlX2lkfSlcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDY4OiAke2RlbGV0ZV9ndWxkX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX3N0cmluZ0FycmF5X3RvX0pTT04oajogSV90YmxfZ3VsZCk6IEpTT05fR3VpbGQge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgIGouaWQsXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6IGouc2F2ZV9pZCxcclxuICAgICAgICAgICAgdW5pcV9pZDogai51bmlxX2lkLFxyXG4gICAgICAgICAgICBuYW1lOiAgICBqLm5hbWUsXHJcbiAgICAgICAgICAgIGdvbGQ6ICAgIGouZ29sZCxcclxuLy8gICAgICAgICAgICBnb29kczogICBKU09OLnBhcnNlKGouZ29vZHMpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCBteXNxbCBmcm9tICdteXNxbDIvcHJvbWlzZSc7XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9ICBmcm9tICcuLi9kX3V0bC9DX0RzcE1lc3NhZ2UnOyAvLyDnlLvpnaLjg6Hjg4Pjgrvjg7zjgrjjga7ooajnpLrnlKjjgq/jg6njgrlcclxuaW1wb3J0IHsgQ19IZXJvLCBKU09OX0hlcm8gfSAgZnJvbSAnLi4vZF9tZGwvQ19IZXJvJzsgXHJcblxyXG50eXBlIGRiX2Nvbm5lY3QgPSBteXNxbC5Qb29sQ29ubmVjdGlvbjtcclxuXHJcbmludGVyZmFjZSBJX3RibF9oZXJvIGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBpZDogICAgICAgIG51bWJlcjtcclxuICAgIHNhdmVfaWQ6ICAgbnVtYmVyO1xyXG4gICAgdW5pcV9pZDogICBzdHJpbmc7XHJcbiAgICBqb2luX3VpZDogIHN0cmluZzsgXHJcbiAgICBuYW1lOiAgICAgIHN0cmluZztcclxuICAgIHNleDogICAgICAgbnVtYmVyO1xyXG4gICAgYWdlOiAgICAgICBudW1iZXI7XHJcbiAgICBnb2xkOiAgICAgIG51bWJlcjtcclxuLy8gICAgZ29vZHM6ICAgICBzdHJpbmc7XHJcbiAgICBzdGF0ZTogICAgIG51bWJlcjtcclxuICAgIGx2OiAgICAgICAgbnVtYmVyO1xyXG4gICAgc2twX3R0bDogICBzdHJpbmc7XHJcbiAgICBza3Bfbm93OiAgIHN0cmluZztcclxuICAgIGV4cF90dGw6ICAgc3RyaW5nO1xyXG4gICAgZXhwX25vdzogICBzdHJpbmc7XHJcbiAgICBueGU6ICAgICAgIHN0cmluZztcclxuICAgIGFiaV9wX2JzYzogc3RyaW5nO1xyXG4gICAgYWJpX21fYnNjOiBzdHJpbmc7XHJcbiAgICBhYmlfcF90dGw6IHN0cmluZztcclxuICAgIGFiaV9tX3R0bDogc3RyaW5nO1xyXG4gICAgYWJpX3Bfbm93OiBzdHJpbmc7XHJcbiAgICBhYmlfbV9ub3c6IHN0cmluZztcclxuLy8gICAgaXNfYWxpdmU6ICBudW1iZXI7XHJcbn1cclxuaW50ZXJmYWNlIElfbGFzdEluc2VydCBleHRlbmRzIG15c3FsLlJvd0RhdGFQYWNrZXQge1xyXG4gICAgaWQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfSGVyb1JEQiB7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGo/OiBKU09OX0hlcm8pIHt9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRfZnJvbV9yZGJfYWxsKFxyXG4gICAgICAgIGRiX21haTogICBkYl9jb25uZWN0LCBcclxuICAgICAgICBtZXM6ICAgICAgQ19Ec3BNZXNzYWdlLCBcclxuICAgICAgICBzYXZlX2lkOiAgbnVtYmVyLFxyXG4gICAgICAgIGpvaW5fdWlkOiBzdHJpbmdcclxuICAgICk6IFByb21pc2U8Q19IZXJvW10+XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaHJlc19hcnJheSA9IGF3YWl0IENfSGVyb1JEQi5nZXRfZnJvbV90YmxfYWxsKGRiX21haSwgbWVzLCBzYXZlX2lkLCBqb2luX3VpZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBocmVzX2FycmF5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHNldF90b19yZGIoXHJcbiAgICAgICAgZGJfbWFpOiAgIGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgIG1lczogICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgIHNhdmVfaWQ6ICBudW1iZXIsXHJcbiAgICAgICAgam9pbl91aWQ6IHN0cmluZyxcclxuICAgICAgICBoZXJvOiAgICAgQ19IZXJvLFxyXG4gICAgKTogUHJvbWlzZTxib29sZWFuPiBcclxuICAgIHsgXHJcbiAgICAgICAgY29uc3QgaGVyb19pZCA9IGF3YWl0IENfSGVyb1JEQi5hZGRfdGJsKGRiX21haSwgbWVzLCBzYXZlX2lkLCBqb2luX3VpZCwgaGVybyk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGRlbF90b19yZGJfYWxsKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IHJzbHQgPSBhd2FpdCBDX0hlcm9SREIuZGVsX3RibF9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGRlbF90b19yZGIoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyLCBqb2luX3VpZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgcnNsdCA9IGF3YWl0IENfSGVyb1JEQi5kZWxfdGJsKGRiX21haSwgbWVzLCBzYXZlX2lkLCBqb2luX3VpZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIC8vIERC5Yem55CG44CCaWTjgafmjIflrprjgZXjgozjgZ9oZXJv44Os44Kz44O844OJ44K744OD44OIKOWNmOaVsCnjgpLoqq3jgb/ovrzjgb9cclxuICAgIC8vIEhlcm/jgq/jg6njgrnjga7phY3liJfjgavjgrvjg4Pjg4jjgZnjgotcclxuICAgIC8vIFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBnZXRfZnJvbV90YmwoXHJcbiAgICAgICAgZGJfbWFpOiBkYl9jb25uZWN0LCBcclxuICAgICAgICBtZXM6ICAgIENfRHNwTWVzc2FnZSwgXHJcbiAgICAgICAgaWQ6ICAgICBudW1iZXIsXHJcbiAgICApOiBQcm9taXNlPENfSGVyb3x1bmRlZmluZWQ+IHtcclxuICAgICAgICBjb25zdCBnZXRfaGVyb2VzX1NRTCA9IGBcclxuICAgICAgICAgICAgU0VMRUNUIFx0aWQsIHNhdmVfaWQsIHVuaXFfaWQsIGpvaW5fdWlkLCBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lLCBzZXgsIGFnZSwgZ29sZCwgc3RhdGUsIGx2LCAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2twX3R0bCwgc2twX25vdywgZXhwX3R0bCwgZXhwX25vdywgbnhlLCBcclxuICAgICAgICAgICAgICAgICAgICBhYmlfcF9ic2MsIGFiaV9tX2JzYywgXHJcbiAgICAgICAgICAgICAgICAgICAgYWJpX3BfdHRsLCBhYmlfbV90dGwsIFxyXG4gICAgICAgICAgICAgICAgICAgIGFiaV9wX25vdywgYWJpX21fbm93IFxyXG4gICAgICAgICAgICBGUk9NICAgIHRibF9oZXJvXHJcbiAgICAgICAgICAgIFdIRVJFICAgaWQgPSA6aWRcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3Jlc3VsdFJlY29yZFNldF0gPSBhd2FpdCBkYl9tYWk/LnF1ZXJ5PElfdGJsX2hlcm9bXT4oZ2V0X2hlcm9lc19TUUwsIHtpZDogIGlkfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAzN2E6ICR7Z2V0X2hlcm9lc19TUUx9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdFJlY29yZFNldC5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoXCLjg4fjg7zjgr/jgYzmnInjgorjgb7jgZvjgpMgMzlhOiB7JGdldF9oZXJvZXNfU1FMfVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX0hlcm8oKS5kZWNvZGUoQ19IZXJvUkRCLmZyb21fc3RyaW5nQXJyYXlfdG9fSlNPTihyZXN1bHRSZWNvcmRTZXRbMF0pKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZlX2lk44Goam9pbl91aWTjgafmjIflrprjgZXjgozjgZ9oZXJv44Os44Kz44O844OJ44K744OD44OIKOikh+aVsCnjgpLoqq3jgb/ovrzjgb9cclxuICAgIC8vIEhlcm/jgq/jg6njgrnjga7phY3liJfjgavjgrvjg4Pjg4jjgZnjgotcclxuICAgIC8vIFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBnZXRfZnJvbV90YmxfYWxsKFxyXG4gICAgICAgIGRiX21haTogICBkYl9jb25uZWN0LCBcclxuICAgICAgICBtZXM6ICAgICAgQ19Ec3BNZXNzYWdlLCBcclxuICAgICAgICBzYXZlX2lkOiAgbnVtYmVyLFxyXG4gICAgICAgIGpvaW5fdWlkOiBzdHJpbmcsXHJcbiAgICApOiBQcm9taXNlPENfSGVyb1tdPiB7XHJcbiAgICAgICAgY29uc3QgZ2V0X2hlcm9lc19TUUwgPSBgXHJcbiAgICAgICAgICAgIFNFTEVDVCBcdGlkLCBzYXZlX2lkLCB1bmlxX2lkLCBqb2luX3VpZCwgXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSwgc2V4LCBhZ2UsIGdvbGQsIHN0YXRlLCBsdiwgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNrcF90dGwsIHNrcF9ub3csIGV4cF90dGwsIGV4cF9ub3csIG54ZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgYWJpX3BfYnNjLCBhYmlfbV9ic2MsIFxyXG4gICAgICAgICAgICAgICAgICAgIGFiaV9wX3R0bCwgYWJpX21fdHRsLCBcclxuICAgICAgICAgICAgICAgICAgICBhYmlfcF9ub3csIGFiaV9tX25vdyBcclxuICAgICAgICAgICAgRlJPTSAgICB0YmxfaGVyb1xyXG4gICAgICAgICAgICBXSEVSRSAgIHNhdmVfaWQgPSA6c2F2ZV9pZCBBTkQgam9pbl91aWQgPSA6am9pbl91aWRcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3Jlc3VsdFJlY29yZFNldF0gPSBhd2FpdCBkYl9tYWk/LnF1ZXJ5PElfdGJsX2hlcm9bXT4oZ2V0X2hlcm9lc19TUUwsIHtzYXZlX2lkOiBzYXZlX2lkLCBqb2luX3VpZDogam9pbl91aWR9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDM3YjogJHtnZXRfaGVyb2VzX1NRTH1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0UmVjb3JkU2V0Lmxlbmd0aCA8IDEpIHtcclxuLy8gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKFwi44OH44O844K/44GM5pyJ44KK44G+44Gb44KTIDM5YjogeyRnZXRfaGVyb2VzX1NRTH1cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhyZXNfYXJyYXkgPSBbXSBhcyBDX0hlcm9bXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHJyIG9mIHJlc3VsdFJlY29yZFNldCkge1xyXG4gICAgICAgICAgICBocmVzX2FycmF5LnB1c2goKG5ldyBDX0hlcm8oKSkuZGVjb2RlKENfSGVyb1JEQi5mcm9tX3N0cmluZ0FycmF5X3RvX0pTT04ocnIpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBocmVzX2FycmF5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBEQuWHpueQhuOAgnRlYW3jg4bjg7zjg5bjg6vjgavoh6rouqvjga7jg4fjg7zjgr/jgpIx5Lu26L+95YqgKGluc2VydCnjgZfjgaZcclxuICAgIC8vIOOBneOBrklEKGlkKeOCkui/lOOBmVxyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGFkZF90YmwoXHJcbiAgICAgICAgZGJfbWFpOiAgIGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgIG1lczogICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgIHNhdmVfaWQ6ICBudW1iZXIsXHJcbiAgICAgICAgam9pbl91aWQ6IHN0cmluZyxcclxuICAgICAgICBoZXJvOiAgICAgQ19IZXJvLFxyXG4gICAgKTogUHJvbWlzZTxudW1iZXI+IHtcclxuXHJcbiAgICAgICAgY29uc3QgaW5zZXJ0X2hlcm9fU1FMID0gYFxyXG4gICAgICAgICAgICBJTlNFUlQgSU5UTyB0YmxfaGVybyAoXHJcbiAgICAgICAgICAgICAgICBzYXZlX2lkLCB1bmlxX2lkLCBqb2luX3VpZCwgXHJcbiAgICAgICAgICAgICAgICBuYW1lLCBzZXgsIGFnZSwgZ29sZCwgc3RhdGUsIGx2LCBcclxuICAgICAgICAgICAgICAgIHNrcF90dGwsIHNrcF9ub3csIGV4cF90dGwsIGV4cF9ub3csIG54ZSxcclxuICAgICAgICAgICAgICAgIGFiaV9wX2JzYywgYWJpX21fYnNjLCBcclxuICAgICAgICAgICAgICAgIGFiaV9wX3R0bCwgYWJpX21fdHRsLCBcclxuICAgICAgICAgICAgICAgIGFiaV9wX25vdywgYWJpX21fbm93IFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIFZBTFVFUyAoIFxyXG4gICAgICAgICAgICAgICAgOnNhdmVfaWQsIDp1bmlxX2lkLCA6am9pbl91aWQsIFxyXG4gICAgICAgICAgICAgICAgOm5hbWUsIDpzZXgsIDphZ2UsIDpnb2xkLCA6c3RhdGUsIDpsdiwgXHJcbiAgICAgICAgICAgICAgICA6c2twX3R0bCwgOnNrcF9ub3csIDpleHBfdHRsLCA6ZXhwX25vdywgOm54ZSxcclxuICAgICAgICAgICAgICAgIDphYmlfcF9ic2MsIDphYmlfbV9ic2MsIFxyXG4gICAgICAgICAgICAgICAgOmFiaV9wX3R0bCwgOmFiaV9tX3R0bCwgXHJcbiAgICAgICAgICAgICAgICA6YWJpX3Bfbm93LCA6YWJpX21fbm93IFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IGpzb25IZXJvID0gaGVyby5lbmNvZGUoKTtcclxuLy9kZWJ1Z1xyXG4vKlxyXG5jb25zb2xlLmVycm9yKFxyXG4gICAgICcgIHNhdmVfaWQ9JyAgICtzYXZlX2lkIFxyXG4gICAgKycsIGpvaW5fdWlkPScgICtqb2luX3VpZCBcclxuICAgICsnLCB1bmlxX2lkPScgICAranNvbkhlcm8udW5pcV9pZCBcclxuICAgICsnLCBuYW1lPScgICAgICAranNvbkhlcm8ubmFtZVxyXG4gICAgKycsIHNleD0nICAgICAgICtqc29uSGVyby5zZXhcclxuICAgICsnLCBhZ2U9JyAgICAgICAranNvbkhlcm8uYWdlXHJcbiAgICArJywgZ29sZD0nICAgICAgK2pzb25IZXJvLmdvbGRcclxuICAgICsnLCBnb29kcz0nICAgICArKEpTT04uc3RyaW5naWZ5KGpzb25IZXJvPy5nb29kcyk/Pyc/Pz8nKVxyXG4gICAgKycsIHN0YXRlPScgICAgICtqc29uSGVyby5zdGF0ZVxyXG4gICAgKycsIGx2PScgICAgICAgICtqc29uSGVyby5sdlxyXG4gICAgKycsIHNrcF90dGw9JyAgICsoanNvbkhlcm8udmFsPy5za3A/LnR0bD8/Jz8/PycpXHJcbiAgICArJywgc2twX25vdz0nICAgKyhqc29uSGVyby52YWw/LnNrcD8ubm93Pz9qc29uSGVyby52YWw/LnNrcD8udHRsPz8nPz8/JylcclxuICAgICsnLCBleHBfdHRsPScgICArKGpzb25IZXJvLnZhbD8uZXhwPy50dGw/Pyc/Pz8nKVxyXG4gICAgKycsIGV4cF9ub3c9JyAgICsoanNvbkhlcm8udmFsPy5leHA/Lm5vdz8/anNvbkhlcm8udmFsPy5leHA/LnR0bD8/Jz8/PycpXHJcbiAgICArJywgbnhlPScgICAgICAgKyhqc29uSGVyby52YWw/Lm54ZT8/LTEpXHJcbiAgICArJywgYWJpX3BfYnNjPScgKyhKU09OLnN0cmluZ2lmeShqc29uSGVyby5hYmlfcF9ic2MpPz8nPz8/JylcclxuICAgICsnLCBhYmlfbV9ic2M9JyArKEpTT04uc3RyaW5naWZ5KGpzb25IZXJvLmFiaV9tX2JzYyk/Pyc/Pz8nKVxyXG4gICAgKycsIGFiaV9wX3R0bD0nICsoSlNPTi5zdHJpbmdpZnkoanNvbkhlcm8uYWJpX3BfdHRsKT8/Jz8/PycpXHJcbiAgICArJywgYWJpX21fdHRsPScgKyhKU09OLnN0cmluZ2lmeShqc29uSGVyby5hYmlfbV90dGwpPz8nPz8/JylcclxuICAgICsnLCBhYmlfcF9ub3c9JyArKEpTT04uc3RyaW5naWZ5KGpzb25IZXJvLmFiaV9wX25vdyk/Pyc/Pz8nKVxyXG4gICAgKycsIGFiaV9tX25vdz0nICsoSlNPTi5zdHJpbmdpZnkoanNvbkhlcm8uYWJpX21fbm93KT8/Jz8/PycpXHJcbilcclxuKi9cclxuICAgICAgICBhd2FpdCBkYl9tYWkucXVlcnkoaW5zZXJ0X2hlcm9fU1FMLCB7XHJcbiAgICAgICAgICAgICdzYXZlX2lkJzogICBzYXZlX2lkLCBcclxuICAgICAgICAgICAgJ2pvaW5fdWlkJzogIGpvaW5fdWlkLCBcclxuICAgICAgICAgICAgJ3VuaXFfaWQnOiAgIGpzb25IZXJvLnVuaXFfaWQsIFxyXG4gICAgICAgICAgICAnbmFtZSc6ICAgICAganNvbkhlcm8ubmFtZSxcclxuICAgICAgICAgICAgJ3NleCc6ICAgICAgIGpzb25IZXJvLnNleCxcclxuICAgICAgICAgICAgJ2FnZSc6ICAgICAgIGpzb25IZXJvLmFnZSxcclxuICAgICAgICAgICAgJ2dvbGQnOiAgICAgIGpzb25IZXJvLmdvbGQsXHJcbi8vICAgICAgICAgICAgJ2dvb2RzJzogICAgIEpTT04uc3RyaW5naWZ5KGpzb25IZXJvLmdvb2RzKSxcclxuICAgICAgICAgICAgJ3N0YXRlJzogICAgIGpzb25IZXJvLnN0YXRlLFxyXG4gICAgICAgICAgICAnbHYnOiAgICAgICAganNvbkhlcm8ubHYsXHJcbiAgICAgICAgICAgICdza3BfdHRsJzogICBqc29uSGVyby52YWw/LnNrcD8udHRsPz8nJyxcclxuICAgICAgICAgICAgJ3NrcF9ub3cnOiAgIGpzb25IZXJvLnZhbD8uc2twPy5ub3c/P2pzb25IZXJvLnZhbD8uc2twPy50dGw/PycnLFxyXG4gICAgICAgICAgICAnZXhwX3R0bCc6ICAganNvbkhlcm8udmFsPy5leHA/LnR0bD8/JycsXHJcbiAgICAgICAgICAgICdleHBfbm93JzogICBqc29uSGVyby52YWw/LmV4cD8ubm93Pz9qc29uSGVyby52YWw/LmV4cD8udHRsPz8nJyxcclxuICAgICAgICAgICAgJ254ZSc6ICAgICAgIGpzb25IZXJvLnZhbD8ubnhlPz8tMSxcclxuICAgICAgICAgICAgJ2FiaV9wX2JzYyc6IEpTT04uc3RyaW5naWZ5KGpzb25IZXJvLmFiaV9wX2JzYyk/PycnLFxyXG4gICAgICAgICAgICAnYWJpX21fYnNjJzogSlNPTi5zdHJpbmdpZnkoanNvbkhlcm8uYWJpX21fYnNjKT8/JycsXHJcbiAgICAgICAgICAgICdhYmlfcF90dGwnOiBKU09OLnN0cmluZ2lmeShqc29uSGVyby5hYmlfcF90dGwpPz8nJyxcclxuICAgICAgICAgICAgJ2FiaV9tX3R0bCc6IEpTT04uc3RyaW5naWZ5KGpzb25IZXJvLmFiaV9tX3R0bCk/PycnLFxyXG4gICAgICAgICAgICAnYWJpX3Bfbm93JzogSlNPTi5zdHJpbmdpZnkoanNvbkhlcm8uYWJpX3Bfbm93KT8/JycsXHJcbiAgICAgICAgICAgICdhYmlfbV9ub3cnOiBKU09OLnN0cmluZ2lmeShqc29uSGVyby5hYmlfbV9ub3cpPz8nJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDM3YjogJHtpbnNlcnRfaGVyb19TUUx9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBDX0hlcm9SREIubGFzdEluc2VydChkYl9tYWksIG1lcyk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAvLyB0YmxfaGVyb+OBp+acgOW+jOOBq+i/veWKoOOBl+OBn+ihjOeVquWPtyhzYXZlX2lkKeOCkui/lOOBmeOAkDHooYzmjL/lhaXlsILnlKjjgJFcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgbGFzdEluc2VydChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlKSA6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgY29uc3QgbGFzdEluc2VydF9TUUwgPWBcclxuICAgICAgICAgICAgU0VMRUNUIExBU1RfSU5TRVJUX0lEKCkgYXMgaWQgRlJPTSB0YmxfaGVybztcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3JlY29yZFNldF0gPSBhd2FpdCBkYl9tYWkucXVlcnk8SV9sYXN0SW5zZXJ0W10+KGxhc3RJbnNlcnRfU1FMKVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgNTAwOiAke2xhc3RJbnNlcnRfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChyZWNvcmRTZXQubGVuZ3RoIDwgMSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiByZWNvcmRTZXRbMF0uaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRELlh6bnkIYo44Kv44Op44K544O744Oh44K944OD44OJKeOAgkhlcm/jgq/jg6njgrnjga7phY3liJfjgpLlj5fjgZHlj5bjgaPjgabjgIFcclxuICAgIC8vIOaMh+WumuOBleOCjOOBn3NhdmVfaWTjgafjgIBoZXJv44OG44O844OW44Or44Gr6L+95YqgKGluc2VydCnjgZfjgaZcclxuICAgIC8vIOOBneOBrklEKGlkKeOBrumFjeWIl+OCkui/lOOBmVxyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGFkZF90YmxfYWxsKFxyXG4gICAgICAgIGRiX21haTogICAgIGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgIG1lczogICAgICAgIENfRHNwTWVzc2FnZSwgXHJcbiAgICAgICAgc2F2ZV9pZDogICAgbnVtYmVyLFxyXG4gICAgICAgIGpvaW5fdWlkOiAgIHN0cmluZyxcclxuICAgICAgICBoZXJvX2FycmF5IDpDX0hlcm9bXSwgXHJcbiAgICApOiBQcm9taXNlPG51bWJlcltdPiBcclxuICAgIHtcclxuICAgICAgICBjb25zdCBoZXJvX2lkX3NldCA9IFtdIGFzIG51bWJlcltdO1xyXG4gICAgICAgIGZvciAoY29uc3QgaGVybyBvZiBoZXJvX2FycmF5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlcm9faWQgPSBhd2FpdCBDX0hlcm9SREIuYWRkX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCwgam9pbl91aWQsIGhlcm8pO1xyXG4gICAgICAgICAgICBpZiAobWVzLmlzX2VycigpKSByZXR1cm4gW107XHJcbiAgICAgICAgICAgIGhlcm9faWRfc2V0LnB1c2goaGVyb19pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoZXJvX2lkX3NldDtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBp+aMh+WumuOBleOCjOOBn+ODrOOCs+ODvOODiSjopIfmlbAp44KS5YmK6ZmkKGRlbGV0ZSnjgZnjgotcclxuICAgIC8vIFxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdGJsX2FsbChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCBkZWxldGVfaGVyb19TUUwgPSBgXHJcbiAgICAgICAgICAgIERFTEVURSBGUk9NIHRibF9oZXJvIFxyXG4gICAgICAgICAgICBXSEVSRSAgc2F2ZV9pZCA9IDpzYXZlX2lkIFxyXG4gICAgICAgIGBcclxuICAgICAgICBhd2FpdCBkYl9tYWkucXVlcnkoZGVsZXRlX2hlcm9fU1FMLHtzYXZlX2lkOiBzYXZlX2lkfSlcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDE3OiAke2RlbGV0ZV9oZXJvX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEQuWHpueQhuOAgnNhdmVfaWTjgahqb2luX3VpZOOBp+aMh+WumuOBleOCjOOBn+ODrOOCs+ODvOODiSjopIfmlbAp44KS5YmK6ZmkKGRlbGV0ZSnjgZnjgotcclxuICAgIC8vIFxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdGJsKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlciwgam9pbl91aWQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZV9oZXJvX1NRTCA9IGBcclxuICAgICAgICAgICAgREVMRVRFIEZST00gdGJsX2hlcm8gXHJcbiAgICAgICAgICAgIFdIRVJFICBzYXZlX2lkID0gOnNhdmVfaWQgQU5EIGpvaW5fdWlkID0gOmpvaW5fdWlkXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGF3YWl0IGRiX21haS5xdWVyeShkZWxldGVfaGVyb19TUUwse3NhdmVfaWQ6IHNhdmVfaWQsIGpvaW5fdWlkOiBqb2luX3VpZH0pXHJcbiAgICAgICAgLmNhdGNoICgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAxODogJHtkZWxldGVfaGVyb19TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fc3RyaW5nQXJyYXlfdG9fSlNPTihqOiBJX3RibF9oZXJvKTogSlNPTl9IZXJvIHtcclxuICAgICAgICBjb25zdCBhYmlfcCA9IEpTT04ucGFyc2Uoai5hYmlfcF9ic2MpO1xyXG4gICAgICAgIGNvbnN0IGFiaV9tID0gSlNPTi5wYXJzZShqLmFiaV9tX2JzYyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGpzb24gID0ge1xyXG4gICAgICAgICAgICBpZDogICAgICAgIGouaWQsXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6ICAgai5zYXZlX2lkLFxyXG4gICAgICAgICAgICB1bmlxX2lkOiAgIGoudW5pcV9pZCxcclxuICAgICAgICAgICAgbmFtZTogICAgICBqLm5hbWUsXHJcbiAgICAgICAgICAgIHNleDogICAgICAgai5zZXgsXHJcbiAgICAgICAgICAgIGFnZTogICAgICAgai5hZ2UsXHJcbiAgICAgICAgICAgIGdvbGQ6ICAgICAgai5nb2xkLFxyXG4vLyAgICAgICAgICAgIGdvb2RzOiAgICAgSlNPTi5wYXJzZShqLmdvb2RzKSxcclxuICAgICAgICAgICAgc3RhdGU6ICAgICBqLnN0YXRlLFxyXG4gICAgICAgICAgICBsdjogICAgICAgIGoubHYsXHJcbiAgICAgICAgICAgIHZhbDoge1xyXG4gICAgICAgICAgICAgICAgc2twOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHRsOiAgIEpTT04ucGFyc2Uoai5za3BfdHRsKSxcclxuICAgICAgICAgICAgICAgICAgICBub3c6ICAgSlNPTi5wYXJzZShqLnNrcF9ub3cpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGV4cDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHR0bDogICBKU09OLnBhcnNlKGouZXhwX3R0bCksXHJcbiAgICAgICAgICAgICAgICAgICAgbm93OiAgIEpTT04ucGFyc2Uoai5leHBfbm93KSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBueGU6ICAgICAgIEpTT04ucGFyc2Uoai5ueGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhYmlfcF9ic2M6ICAgICBKU09OLnBhcnNlKGouYWJpX3BfYnNjKSxcclxuICAgICAgICAgICAgYWJpX21fYnNjOiAgICAgSlNPTi5wYXJzZShqLmFiaV9tX2JzYyksXHJcbiAgICAgICAgICAgIGFiaV9wX3R0bDogICAgIEpTT04ucGFyc2Uoai5hYmlfcF90dGwpLFxyXG4gICAgICAgICAgICBhYmlfbV90dGw6ICAgICBKU09OLnBhcnNlKGouYWJpX21fdHRsKSxcclxuICAgICAgICAgICAgYWJpX3Bfbm93OiAgICAgSlNPTi5wYXJzZShqLmFiaV9wX25vdyksXHJcbiAgICAgICAgICAgIGFiaV9tX25vdzogICAgIEpTT04ucGFyc2Uoai5hYmlfbV9ub3cpLFxyXG4vKlxyXG4gICAgICAgICAgICBhYmlfcDoge1xyXG4gICAgICAgICAgICAgICAgYnNjOiBhYmlfcCxcclxuICAgICAgICAgICAgICAgIHR0bDogYWJpX3AsXHJcbiAgICAgICAgICAgICAgICBub3c6IGFiaV9wLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhYmlfbToge1xyXG4gICAgICAgICAgICAgICAgYnNjOiBhYmlfbSxcclxuICAgICAgICAgICAgICAgIHR0bDogYWJpX20sXHJcbiAgICAgICAgICAgICAgICBub3c6IGFiaV9tLFxyXG4gICAgICAgICAgICB9LFxyXG4gKi9cclxuLy8gICAgICAgICAgICBpc19hbGl2ZTogIGouaXNfYWxpdmUgIT09IDAgPyBcIllcIiA6IFwiTlwiLFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ganNvbjtcclxuICAgIH1cclxufVxyXG4iLCIvLyDliKnnlKjjgq/jg6njgrnnrYnjga7oqq3jgb/ovrzjgb9cclxuaW1wb3J0IG15c3FsIGZyb20gJ215c3FsMi9wcm9taXNlJztcclxuaW1wb3J0IHsgQ19Ec3BNZXNzYWdlIH0gICAgICBmcm9tICcuLi9kX3V0bC9DX0RzcE1lc3NhZ2UnOyAvLyDnlLvpnaLjg6Hjg4Pjgrvjg7zjgrjjga7ooajnpLrnlKjjgq/jg6njgrlcclxuaW1wb3J0IHsgQ19NYXplT2JqLCBJX01hemVPYmosIEpTT05fTWF6ZU9iaiB9ICAgICAgICAgZnJvbSAnLi4vZF9tZGwvQ19NYXplT2JqJztcclxuXHJcbnR5cGUgZGJfY29ubmVjdCA9IG15c3FsLlBvb2xDb25uZWN0aW9uO1xyXG5cclxuaW50ZXJmYWNlIElfdGJsX29iamUgZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0IHtcclxuICAgIGlkOiAgICAgICAgICBudW1iZXIsXHJcbiAgICBzYXZlX2lkOiAgICAgbnVtYmVyLFxyXG4gICAgdW5pcV9pZDogICAgIHN0cmluZyxcclxuICAgIG1hemVfdWlkOiAgICBzdHJpbmcsICAvLyDjg57jg4Pjg5fjga7jg6bjg4vjg7zjgq9JRFxyXG4gICAgY2xzX25hbWU6ICAgIHN0cmluZywgIC8vIOOCr+ODqeOCueWQjVxyXG4gICAgcG9zX3g6ICAgICAgIG51bWJlciwgIC8vIFjluqfmqJlcclxuICAgIHBvc195OiAgICAgICBudW1iZXIsICAvLyB55bqn5qiZXHJcbiAgICBwb3NfejogICAgICAgbnVtYmVyLCAgLy8geuW6p+aomVxyXG4gICAgcG9zX2Q6ICAgICAgIG51bWJlciwgIC8vIOWQkeOBjSgwOk4sIDE6RSwgMjpTLCAzOlcsIDk5OlgpXHJcbiAgICB2aWV3OiAgICAgICAgc3RyaW5nLCAgLy8gQ19NYXplT2JqVmlld+OCr+ODqeOCueOBruWIneacn+WApFxyXG4gICAgc3RhdDogICAgICAgIHN0cmluZywgIC8vIENfTWF6ZU9iauOCr+ODqeOCueOBruWIneacn+WApFxyXG4gIH1cclxuaW50ZXJmYWNlIElfbGFzdEluc2VydCBleHRlbmRzIG15c3FsLlJvd0RhdGFQYWNrZXQge1xyXG4gICAgaWQ6IG51bWJlcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDX01hemVPYmpSREIge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge31cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRfZnJvbV9yZGJfYWxsKFxyXG4gICAgICAgIGRiX21haTogICBkYl9jb25uZWN0LFxyXG4gICAgICAgIG1lczogICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgIHNhdmVfaWQ6ICBudW1iZXIsXHJcbiAgICAgICAgam9pbl91aWQ6IHN0cmluZ1xyXG4gICAgKTogUHJvbWlzZTxDX01hemVPYmpbXT4ge1xyXG4gICAgICAgIGNvbnN0IG9iamVfYXJyYXkgPSBhd2FpdCBDX01hemVPYmpSREIuZ2V0X2Zyb21fdGJsX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCwgam9pbl91aWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqZV9hcnJheTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzZXRfdG9fcmRiKFxyXG4gICAgICAgIGRiX21haTogZGJfY29ubmVjdCwgXHJcbiAgICAgICAgbWVzOiBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgIHNhdmVfaWQ6IG51bWJlciwgXHJcbiAgICAgICAgbWF6ZV91aWQ6IHN0cmluZywgXHJcbiAgICAgICAgb2JqZTogSV9NYXplT2JqXHJcbiAgICApOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCBtYXNlX2lkID0gYXdhaXQgQ19NYXplT2JqUkRCLmFkZF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIG1hemVfdWlkLCBvYmplKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RvX3JkYl9hbGwoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgcnNsdCA9IGF3YWl0IENfTWF6ZU9ialJEQi5kZWxfdGJsX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdG9fcmRiKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlciwgbWF6ZV91aWQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIENfTWF6ZU9ialJEQi5kZWxfdGJsKGRiX21haSwgbWVzLCBzYXZlX2lkLCBtYXplX3VpZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZlX2lk44Gn5oyH5a6a44GV44KM44GfbWF6ZeODrOOCs+ODvOODieOCu+ODg+ODiOOCkuiqreOBv+i+vOOBv1xyXG4gICAgLy8gTWF6ZU9iauOCr+ODqeOCueOBrumFjeWIl+OBq+OCu+ODg+ODiOOBmeOCi1xyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGdldF9mcm9tX3RibF9hbGwoXHJcbiAgICAgICAgICAgIGRiX21haTogICBkYl9jb25uZWN0LCBcclxuICAgICAgICAgICAgbWVzOiAgICAgIENfRHNwTWVzc2FnZSwgXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6ICBudW1iZXIsXHJcbiAgICAgICAgICAgIG1hemVfdWlkOiBzdHJpbmdcclxuICAgICk6IFByb21pc2U8Q19NYXplT2JqW10+IHtcclxuICAgICAgICBjb25zdCBnZXRfb2JqZV9TUUwgPSBgXHJcbiAgICAgICAgICAgIFNFTEVDVCBcdGlkLCAgICAgICBzYXZlX2lkLCAgdW5pcV9pZCwgXHJcbiAgICAgICAgICAgICAgICAgICAgbWF6ZV91aWQsIGNsc19uYW1lLCBcclxuICAgICAgICAgICAgICAgICAgICBwb3NfeCwgICAgcG9zX3ksICAgIHBvc196LCAgIHBvc19kLCBcclxuICAgICAgICAgICAgICAgICAgICB2aWV3LCAgICAgc3RhdCBcclxuICAgICAgICAgICAgRlJPTSB0Ymxfb2JqZVxyXG4gICAgICAgICAgICBXSEVSRSAgIHNhdmVfaWQgPSA6c2F2ZV9pZCBBTkQgbWF6ZV91aWQgPSA6bWF6ZV91aWRcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3Jlc3VsdFJlY29yZFNldF0gPSBhd2FpdCBkYl9tYWkucXVlcnk8SV90Ymxfb2JqZVtdPihnZXRfb2JqZV9TUUwsIHtzYXZlX2lkOiBzYXZlX2lkLCBtYXplX3VpZDogbWF6ZV91aWR9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDMzOiAke2dldF9vYmplX1NRTH1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKHJlc3VsdFJlY29yZFNldC5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgb2JqZV9hcnJheSA9IFtdIGFzIENfTWF6ZU9ialtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgcnIgb2YgcmVzdWx0UmVjb3JkU2V0KSB7XHJcbiAgICAgICAgICAgIG9iamVfYXJyYXkucHVzaChuZXcgQ19NYXplT2JqKENfTWF6ZU9ialJEQi5mcm9tX3N0cmluZ0FycmF5X3RvX0pTT04ocnIpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmplX2FycmF5O1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJtYXpl44OG44O844OW44Or44Gr6Ieq6Lqr44Gu44OH44O844K/44KS6L+95YqgKGluc2VydCnjgZfjgaZcclxuICAgIC8vIOOBneOBrklEKG1hemVfaWQp44KS6L+U44GZXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgYWRkX3RibChcclxuICAgICAgICAgICAgZGJfbWFpOiAgIGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgICAgICBtZXM6ICAgICAgQ19Ec3BNZXNzYWdlLCBcclxuICAgICAgICAgICAgc2F2ZV9pZDogIG51bWJlcixcclxuICAgICAgICAgICAgbWF6ZV91aWQ6IHN0cmluZyxcclxuICAgICAgICAgICAgb2JqZTogICAgIElfTWF6ZU9ialxyXG4gICAgICAgICk6IFByb21pc2U8bnVtYmVyPiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGluc2VydF9vYmplX1NRTCA9IGBcclxuICAgICAgICAgICAgSU5TRVJUIElOVE8gdGJsX29iamUoXHJcbiAgICAgICAgICAgICAgICBzYXZlX2lkLCAgdW5pcV9pZCwgbWF6ZV91aWQsIGNsc19uYW1lLCBcclxuICAgICAgICAgICAgICAgIHBvc194LCAgICBwb3NfeSwgICBwb3NfeiwgICAgcG9zX2QsIFxyXG4gICAgICAgICAgICAgICAgdmlldywgICAgIHN0YXQgXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgVkFMVUVTIChcclxuICAgICAgICAgICAgICAgIDpzYXZlX2lkLCAgOnVuaXFfaWQsIDptYXplX3VpZCwgOmNsc19uYW1lLCBcclxuICAgICAgICAgICAgICAgIDpwb3NfeCwgICAgOnBvc195LCAgIDpwb3NfeiwgICAgOnBvc19kLCBcclxuICAgICAgICAgICAgICAgIDp2aWV3LCAgICAgOnN0YXQgXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgaiA9IG9iamUuZW5jb2RlKCk7XHJcblxyXG4gICAgICAgIC8vRGVidWdcclxuLypcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICAgIFwic2F2ZV9pZD1cIiAgICsgICAgc2F2ZV9pZFxyXG4gICAgICAgICsgXCIsIHVuaXFfaWQ9XCIgICArICAgIGoudW5pcV9pZFxyXG4gICAgICAgICsgXCIsIG1hemVfdWlkPVwiICArICAgIG1hemVfdWlkXHJcbiAgICAgICAgKyBcIiwgY2xzX25hbWU9XCIgICsgICAgai5jbG5hbWVcclxuICAgICAgICArIFwiLCBwb3NfeD1cIiAgICAgKyAgIChqLnBvcz8ueClcclxuICAgICAgICArIFwiLCBwb3NfeT1cIiAgICAgKyAgIChqLnBvcz8ueSlcclxuICAgICAgICArIFwiLCBwb3Nfej1cIiAgICAgKyAgIChqLnBvcz8ueilcclxuICAgICAgICArIFwiLCBwb3NfZD1cIiAgICAgKyAgIChqLnBvcz8uZClcclxuICAgICAgICArIFwiLCB2aWV3PVwiICAgICAgKyAgICBKU09OLnN0cmluZ2lmeShqLnZpZXc/P3tFUlJPUjonTk9ORSd9KVxyXG4gICAgICAgICsgXCIsIHN0YXQ9XCIgICAgICArICAgIEpTT04uc3RyaW5naWZ5KGouc3RhdD8/e0VSUk9SOidOT05FJ30pXHJcbiAgICApXHJcbiovXHJcblxyXG4gICAgLy8gU1FM44Gr44K744OD44OI44GZ44KL5YCk44KS5oyH5a6aXHJcbiAgICBjb25zdCBzdGF0ID0ge1xyXG4gICAgICAgIGNhbl90aHI6ICAgai5jYW5fdGhyID8gJzEnIDogJzAnLCAvLyBDX01hemVPYmrjga7liJ3mnJ/lgKRcclxuICAgICAgICBoX3dfZG1nOiAgIGouaF93X2RtZywgICAgICAgICAgICAgLy8gQ19NYXplT2Jq44Gu5Yid5pyf5YCkXHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgZGJfbWFpLnF1ZXJ5KGluc2VydF9vYmplX1NRTCwge1xyXG4gICAgICAgICAgICBzYXZlX2lkOiAgICAgc2F2ZV9pZCxcclxuICAgICAgICAgICAgdW5pcV9pZDogICAgIGoudW5pcV9pZCxcclxuICAgICAgICAgICAgbWF6ZV91aWQ6ICAgIG1hemVfdWlkLFxyXG4gICAgICAgICAgICBjbHNfbmFtZTogICAgai5jbG5hbWUsXHJcbiAgICAgICAgICAgIHBvc194OiAgICAgICBqLnBvcz8ueD8/MCxcclxuICAgICAgICAgICAgcG9zX3k6ICAgICAgIGoucG9zPy55Pz8wLFxyXG4gICAgICAgICAgICBwb3NfejogICAgICAgai5wb3M/Lno/PzAsXHJcbiAgICAgICAgICAgIHBvc19kOiAgICAgICBqLnBvcz8uZD8/MCxcclxuICAgICAgICAgICAgdmlldzogICAgICAgIEpTT04uc3RyaW5naWZ5KGoudmlldyksXHJcbiAgICAgICAgICAgIHN0YXQ6ICAgICAgICBKU09OLnN0cmluZ2lmeShzdGF0KSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDM6ICR7aW5zZXJ0X29iamVfU1FMfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIENfTWF6ZU9ialJEQi5sYXN0SW5zZXJ0KGRiX21haSwgbWVzKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gdGJsX3RlYW3jgafmnIDlvozjgavov73liqDjgZfjgZ/ooYznlarlj7coc2F2ZV9pZCnjgpLov5TjgZnjgJAx6KGM5oy/5YWl5bCC55So44CRXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGxhc3RJbnNlcnQoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSkgOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGNvbnN0IGxhc3RJbnNlcnRfU1FMID1gXHJcbiAgICAgICAgICAgIFNFTEVDVCBMQVNUX0lOU0VSVF9JRCgpIGFzIGlkIEZST00gdGJsX29iamU7XHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpLnF1ZXJ5PElfbGFzdEluc2VydFtdPihsYXN0SW5zZXJ0X1NRTClcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDUwMDogJHtsYXN0SW5zZXJ0X1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAocmVjb3JkU2V0Lmxlbmd0aCA8IDEpIHJldHVybiAtMTtcclxuICAgICAgICByZXR1cm4gcmVjb3JkU2V0WzBdLmlkO1xyXG4gICAgfVxyXG5cclxuXHJcbi8vIERC5Yem55CG44CCc2F2ZV9pZOOBp+aMh+WumuOBleOCjOOBn+ODrOOCs+ODvOODiSjopIfmlbAp44KS5YmK6ZmkKGRlbGV0ZSnjgZnjgotcclxuICAgIC8vIFxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdGJsX2FsbChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCBkZWxldGVfb2JqZV9TUUwgPSBgXHJcbiAgICAgICAgICAgIERFTEVURSBGUk9NIHRibF9vYmplIFxyXG4gICAgICAgICAgICBXSEVSRSAgc2F2ZV9pZCA9IDpzYXZlX2lkIFxyXG4gICAgICAgIGBcclxuICAgICAgICBhd2FpdCBkYl9tYWkucXVlcnkoZGVsZXRlX29iamVfU1FMLHtzYXZlX2lkOiBzYXZlX2lkfSlcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDE3OiAke2RlbGV0ZV9vYmplX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEQuWHpueQhuOAgnNhdmVfaWTjgafmjIflrprjgZXjgozjgZ/jg6zjgrPjg7zjg4ko5Y2Y5pWwKeOCkuWJiumZpChkZWxldGUp44GZ44KLXHJcbiAgICAvLyBcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RibChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIsIG1hemVfdWlkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCBkZWxldGVfb2JqZV9TUUwgPSBgXHJcbiAgICAgICAgICAgIERFTEVURSBGUk9NIHRibF9vYmplIFxyXG4gICAgICAgICAgICBXSEVSRSAgc2F2ZV9pZCA9IDpzYXZlX2lkIEFORCBtYXplX3VpZCA9IDptYXplX3VpZFxyXG4gICAgICAgIGBcclxuICAgICAgICBhd2FpdCBkYl9tYWkucXVlcnkoZGVsZXRlX29iamVfU1FMLCB7c2F2ZV9pZDogc2F2ZV9pZCwgbWF6ZV91aWQ6IG1hemVfdWlkfSlcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDEyOiAke2RlbGV0ZV9vYmplX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fc3RyaW5nQXJyYXlfdG9fSlNPTihqOiBJX3RibF9vYmplKTogSlNPTl9NYXplT2JqIHtcclxuICAgICAgICBjb25zdCBqaiA9IEpTT04ucGFyc2Uoai5zdGF0Pz8ne30nKSBhcyBhbnk7IC8vIENfTWF6ZU9iauOBruWIneacn+WApFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjbG5hbWU6ICAgIGouY2xzX25hbWUsXHJcbiAgICAgICAgICAgICAgICB1bmlxX2lkOiAgIGoudW5pcV9pZCwgXHJcbiAgICAgICAgICAgICAgICBtYXplX3VpZDogIGoubWF6ZV91aWQsXHJcbiAgICAgICAgICAgICAgICBwb3M6ICAgICAgIHt4OiBqLnBvc194LCB5OiBqLnBvc195LCB6OiBqLnBvc196LCBkOiBqLnBvc19kfSxcclxuICAgICAgICAgICAgICAgIHZpZXc6ICAgICAgSlNPTi5wYXJzZShqLnZpZXc/Pyd7fScpIGFzIGFueSwgLy8gQ19NYXplT2JqVmlld+OBruWIneacn+WApFxyXG4gICAgICAgICAgICAgICAgY2FuX3RocjogICBqai5jYW5fdGhyID8/ICcxJywgICAgICAgICAgICAgICAvLyBDX01hemVPYmrjga7liJ3mnJ/lgKRcclxuICAgICAgICAgICAgICAgIGhfd19kbWc6ICAgamouaF93X2RtZyA/PyAwLCAgICAgICAgICAgICAgICAgLy8gQ19NYXplT2Jq44Gu5Yid5pyf5YCkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIiwiLy8g5Yip55So44Kv44Op44K5562J44Gu6Kqt44G/6L6844G/XHJcbmltcG9ydCBteXNxbCBmcm9tICdteXNxbDIvcHJvbWlzZSc7XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9ICAgICAgZnJvbSAnLi4vZF91dGwvQ19Ec3BNZXNzYWdlJzsgLy8g55S76Z2i44Oh44OD44K744O844K444Gu6KGo56S655So44Kv44Op44K5XHJcbmltcG9ydCB7IENfTWF6ZSwgSlNPTl9NYXplIH0gZnJvbSBcIi4uL2RfbWRsL0NfTWF6ZVwiO1xyXG5pbXBvcnQgeyBDX01hemVPYmpSREIgfSAgICAgIGZyb20gJy4vQ19NYXplT2JqUkRCJztcclxuaW1wb3J0IHsgQ19NYXplT2JqIH0gICAgICAgICBmcm9tICcuLi9kX21kbC9DX01hemVPYmonO1xyXG5cclxudHlwZSBkYl9jb25uZWN0ID0gbXlzcWwuUG9vbENvbm5lY3Rpb247XHJcblxyXG5pbnRlcmZhY2UgSV90YmxfbWF6ZSBleHRlbmRzIG15c3FsLlJvd0RhdGFQYWNrZXQge1xyXG4gICAgaWQ6ICAgICAgbnVtYmVyLFxyXG4gICAgc2F2ZV9pZDogbnVtYmVyLFxyXG4gICAgdW5pcV9pZDogc3RyaW5nLFxyXG4gICAgbmFtZTogICAgc3RyaW5nLCBcclxuICAgIHNpemVfeDogIG51bWJlcixcclxuICAgIHNpemVfeTogIG51bWJlcixcclxuICAgIHNpemVfejogIG51bWJlcixcclxuICAgIG1hcHM6ICAgIHN0cmluZyxcclxuICAgIG1hc2s6ICAgIHN0cmluZyxcclxufVxyXG5pbnRlcmZhY2UgSV9sYXN0SW5zZXJ0IGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENfTWF6ZVJEQiB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldF9mcm9tX3JkYl9hbGwoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyKTogUHJvbWlzZTxDX01hemVbXT4ge1xyXG4gICAgICAgIGNvbnN0IG1hemVfYXJyYXkgPSBhd2FpdCBDX01hemVSREIuZ2V0X2Zyb21fdGJsX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IG1hemUgb2YgbWF6ZV9hcnJheSkge1xyXG4gICAgICAgICAgICBjb25zdCAgb2JqZV9hcnJheSA9ICBhd2FpdCBDX01hemVPYmpSREIuZ2V0X2Zyb21fcmRiX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCwgbWF6ZS51aWQoKSk7XHJcbiAgICAgICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG9iamUgb2Ygb2JqZV9hcnJheSkgbWF6ZS5hZGRfb2JqKG9iamUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1hemVfYXJyYXk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc2V0X3RvX3JkYihkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIsIG1hemU6IENfTWF6ZSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IG1hc2VfaWQgPSBhd2FpdCBDX01hemVSREIuYWRkX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCwgbWF6ZSk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3Qgb2JqZSBvZiBtYXplLmdldF9vYmpfYXJyYXkoKSkge1xyXG4gICAgICAgICAgICBhd2FpdCBDX01hemVPYmpSREIuc2V0X3RvX3JkYihkYl9tYWksIG1lcywgc2F2ZV9pZCwgbWF6ZS51aWQoKSwgb2JqZSk7XHJcbiAgICAgICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGRlbF90b19yZGIoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyLCBtYXplX3VpZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgYXdhaXQgQ19NYXplT2JqUkRCLmRlbF90b19yZGIoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIG1hemVfdWlkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQ19NYXplUkRCLmRlbF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBp+aMh+WumuOBleOCjOOBn21hemXjg6zjgrPjg7zjg4njgrvjg4Pjg4jjgpLoqq3jgb/ovrzjgb9cclxuICAgIC8vIE1hemXjgq/jg6njgrnjga7phY3liJfjgavjgrvjg4Pjg4jjgZnjgotcclxuICAgIC8vIFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBnZXRfZnJvbV90YmxfYWxsKFxyXG4gICAgICAgICAgICBkYl9tYWk6IGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgICAgICBtZXM6IENfRHNwTWVzc2FnZSwgXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6IG51bWJlclxyXG4gICAgKTogUHJvbWlzZTxDX01hemVbXT4ge1xyXG4gICAgICAgIGNvbnN0IGdldF9tYXplX1NRTCA9IGBcclxuICAgICAgICAgICAgU0VMRUNUIFx0aWQsIHNhdmVfaWQsIHVuaXFfaWQsIG5hbWUsIFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemVfeCwgc2l6ZV95LCBzaXplX3osIG1hcHMsIG1hc2sgXHJcbiAgICAgICAgICAgIEZST00gdGJsX21hemVcclxuICAgICAgICAgICAgV0hFUkUgICBzYXZlX2lkID0gOnNhdmVfaWRcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3Jlc3VsdFJlY29yZFNldF0gPSBhd2FpdCBkYl9tYWkucXVlcnk8SV90YmxfbWF6ZVtdPihnZXRfbWF6ZV9TUUwsIHtzYXZlX2lkOiBzYXZlX2lkfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAzMzogJHtnZXRfbWF6ZV9TUUx9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGlmIChyZXN1bHRSZWNvcmRTZXQubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1hemVfYXJyYXkgPSBbXSBhcyBDX01hemVbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHJyIG9mIHJlc3VsdFJlY29yZFNldCkge1xyXG4gICAgICAgICAgICBtYXplX2FycmF5LnB1c2gobmV3IENfTWF6ZShDX01hemVSREIuZnJvbV9zdHJpbmdBcnJheV90b19KU09OKHJyKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF6ZV9hcnJheTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC8vIERC5Yem55CG44CCbWF6ZeODhuODvOODluODq+OBq+iHqui6q+OBruODh+ODvOOCv+OCkui/veWKoChpbnNlcnQp44GX44GmXHJcbiAgICAvLyDjgZ3jga5JRChtYXplX2lkKeOCkui/lOOBmVxyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGFkZF90YmwoXHJcbiAgICAgICAgICAgIGRiX21haTogIGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgICAgICBtZXM6ICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgICAgICBzYXZlX2lkOiBudW1iZXIsXHJcbiAgICAgICAgICAgIG1hemU6ICAgIENfTWF6ZVxyXG4gICAgICAgICk6IFByb21pc2U8bnVtYmVyPiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGluc2VydF9tYXplX1NRTCA9IGBcclxuICAgICAgICAgICAgSU5TRVJUIElOVE8gdGJsX21hemUgKFxyXG4gICAgICAgICAgICAgICAgc2F2ZV9pZCwgdW5pcV9pZCwgbmFtZSwgXHJcbiAgICAgICAgICAgICAgICBzaXplX3gsIHNpemVfeSwgc2l6ZV96LCBtYXBzLCBtYXNrXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgVkFMVUVTIChcclxuICAgICAgICAgICAgICAgIDpzYXZlX2lkLCA6dW5pcV9pZCwgOm5hbWUsIFxyXG4gICAgICAgICAgICAgICAgOnNpemVfeCwgOnNpemVfeSwgOnNpemVfeiwgOm1hcHMsIDptYXNrIFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IGogPSBtYXplLmVuY29kZSgpO1xyXG4vL0RlYnVnXHJcbi8qXHJcbmNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICBcInNhdmVfaWQ9XCIgKyBzYXZlX2lkXHJcbiAgICArXCIsIHVuaXFfaWQ9XCIgKyBqLnVuaXFfaWRcclxuICAgICtcIiwgbmFtZT1cIiAgICArIGoubmFtZVxyXG4gICAgK1wiLCBzaXplX3g9XCIgICsgai5zaXplX3hcclxuICAgICtcIiwgc2l6ZV95PVwiICArIGouc2l6ZV95XHJcbiAgICArXCIsIHNpemVfej1cIiAgKyBqLnNpemVfelxyXG4gICAgK1wiLCBtYXBzPVwiICAgICsgai5tYXplXHJcbiAgICArXCIsIG1hc2s9XCIgICAgKyBqLm1hc2tcclxuKVxyXG4qL1xyXG4gICAgICAgIGF3YWl0IGRiX21haS5xdWVyeShpbnNlcnRfbWF6ZV9TUUwsIHtcclxuICAgICAgICAgICAgc2F2ZV9pZDogc2F2ZV9pZCxcclxuICAgICAgICAgICAgdW5pcV9pZDogai51bmlxX2lkLFxyXG4gICAgICAgICAgICBuYW1lOiAgICBqLm5hbWUsXHJcbiAgICAgICAgICAgIHNpemVfeDogIGouc2l6ZV94LFxyXG4gICAgICAgICAgICBzaXplX3k6ICBqLnNpemVfeSxcclxuICAgICAgICAgICAgc2l6ZV96OiAgai5zaXplX3osXHJcbiAgICAgICAgICAgIG1hcHM6ICAgIGoubWF6ZSxcclxuICAgICAgICAgICAgbWFzazogICAgai5tYXNrLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMzogJHtpbnNlcnRfbWF6ZV9TUUx9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gQ19NYXplUkRCLmxhc3RJbnNlcnQoZGJfbWFpLCBtZXMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyB0YmxfdGVhbeOBp+acgOW+jOOBq+i/veWKoOOBl+OBn+ihjOeVquWPtyhzYXZlX2lkKeOCkui/lOOBmeOAkDHooYzmjL/lhaXlsILnlKjjgJFcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgbGFzdEluc2VydChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlKSA6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgY29uc3QgbGFzdEluc2VydF9TUUwgPWBcclxuICAgICAgICAgICAgU0VMRUNUIExBU1RfSU5TRVJUX0lEKCkgYXMgaWQgRlJPTSB0YmxfbWF6ZTtcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3JlY29yZFNldF0gPSBhd2FpdCBkYl9tYWkucXVlcnk8SV9sYXN0SW5zZXJ0W10+KGxhc3RJbnNlcnRfU1FMKVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgNTAwOiAke2xhc3RJbnNlcnRfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChyZWNvcmRTZXQubGVuZ3RoIDwgMSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiByZWNvcmRTZXRbMF0uaWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBp+aMh+WumuOBleOCjOOBn+ODrOOCs+ODvOODiSjopIfmlbAp44KS5YmK6ZmkKGRlbGV0ZSnjgZnjgotcclxuICAgIC8vIFxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdGJsKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZV9tYXplX1NRTCA9IGBcclxuICAgICAgICAgICAgREVMRVRFIEZST00gdGJsX21hemUgXHJcbiAgICAgICAgICAgIFdIRVJFICBzYXZlX2lkID0gOnNhdmVfaWRcclxuICAgICAgICBgXHJcbiAgICAgICAgYXdhaXQgZGJfbWFpLnF1ZXJ5KGRlbGV0ZV9tYXplX1NRTCwge3NhdmVfaWQ6IHNhdmVfaWR9KVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMTI6ICR7ZGVsZXRlX21hemVfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdBcnJheV90b19KU09OKGo6IElfdGJsX21hemUpOiBKU09OX01hemUge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgIGouaWQsXHJcbiAgICAgICAgICAgIHVuaXFfaWQ6IGoudW5pcV9pZCxcclxuICAgICAgICAgICAgc2F2ZV9pZDogai5zYXZlX2lkLFxyXG4gICAgICAgICAgICBuYW1lOiAgICBqLm5hbWUsXHJcbiAgICAgICAgICAgIHNpemVfeDogIGouc2l6ZV94LFxyXG4gICAgICAgICAgICBzaXplX3k6ICBqLnNpemVfeSxcclxuICAgICAgICAgICAgc2l6ZV96OiAgai5zaXplX3osXHJcbiAgICAgICAgICAgIG1hemU6ICAgIGoubWFwcyxcclxuICAgICAgICAgICAgbWFzazogICAgai5tYXNrLFxyXG4vLyAgICAgICAgICAgIG9ianM6ICAgIEpTT04ucGFyc2Uoai5vYmpzKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIOWIqeeUqOOCr+ODqeOCueetieOBruiqreOBv+i+vOOBv1xyXG5pbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xyXG5pbXBvcnQgeyBDX0RzcE1lc3NhZ2UgfSAgICAgIGZyb20gJy4uL2RfdXRsL0NfRHNwTWVzc2FnZSc7IC8vIOeUu+mdouODoeODg+OCu+ODvOOCuOOBruihqOekuueUqOOCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCwgSlNPTl9Nb3ZhYmxlUG9pbnQgfSBmcm9tICcuLi9kX21kbC9DX01vdmFibGVQb2ludCc7XHJcblxyXG50eXBlIGRiX2Nvbm5lY3QgPSBteXNxbC5Qb29sQ29ubmVjdGlvbjtcclxuXHJcbmludGVyZmFjZSBJX3RibF9tdnB0IGV4dGVuZHMgbXlzcWwuUm93RGF0YVBhY2tldCB7XHJcbiAgICBpZDogICAgICAgICAgbnVtYmVyLFxyXG4gICAgc2F2ZV9pZDogICAgIG51bWJlcixcclxuICAgIHVuaXFfaWQ6ICAgICBzdHJpbmcsXHJcbiAgICBjdXJfdXJsOiAgICAgc3RyaW5nLFxyXG4gICAgdGVhbV91aWQ6ICAgIHN0cmluZyxcclxuICAgIGxvY19raW5kOiAgICBzdHJpbmcsIC8qIFVua246MCwgTWF6ZToxLCBHdWxkOjIgKi9cclxuICAgIGxvY19uYW1lOiAgICBzdHJpbmcsXHJcbiAgICBsb2NfdWlkOiAgICAgc3RyaW5nLFxyXG4gICAgbG9jX3Bvc194OiAgIG51bWJlcixcclxuICAgIGxvY19wb3NfeTogICBudW1iZXIsXHJcbiAgICBsb2NfcG9zX3o6ICAgbnVtYmVyLFxyXG4gICAgbG9jX3Bvc19kOiAgIG51bWJlciwgLyogTjowLCBFOjEsIFM6MiwgVzozIFg6OTkgKi9cclxuICB9XHJcbmludGVyZmFjZSBJX2xhc3RJbnNlcnQgZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ19NdnB0UkRCIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fcmRiX2FsbChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPENfTW92YWJsZVBvaW50W10+IHtcclxuICAgICAgICBjb25zdCBtdnB0X2FycmF5ID0gYXdhaXQgQ19NdnB0UkRCLmdldF9mcm9tX3RibF9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbXZwdF9hcnJheTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzZXRfdG9fcmRiKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlciwgbXZwdDogQ19Nb3ZhYmxlUG9pbnQpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCBtYXNlX2lkID0gYXdhaXQgQ19NdnB0UkRCLmFkZF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIG12cHQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RvX3JkYihkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBDX012cHRSREIuZGVsX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZlX2lk44Gn5oyH5a6a44GV44KM44GfbWF6ZeODrOOCs+ODvOODieOCu+ODg+ODiOOCkuiqreOBv+i+vOOBv1xyXG4gICAgLy8gTWF6ZeOCr+ODqeOCueOBrumFjeWIl+OBq+OCu+ODg+ODiOOBmeOCi1xyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGdldF9mcm9tX3RibF9hbGwoXHJcbiAgICAgICAgICAgIGRiX21haTogZGJfY29ubmVjdCwgXHJcbiAgICAgICAgICAgIG1lczogQ19Ec3BNZXNzYWdlLCBcclxuICAgICAgICAgICAgc2F2ZV9pZDogbnVtYmVyXHJcbiAgICApOiBQcm9taXNlPENfTW92YWJsZVBvaW50W10+IHtcclxuICAgICAgICBjb25zdCBnZXRfbXZwdF9TUUwgPSBgXHJcbiAgICAgICAgICAgIFNFTEVDVCBcdCAgICBpZCwgc2F2ZV9pZCwgdW5pcV9pZCwgY3VyX3VybCwgdGVhbV91aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY19raW5kLCAgbG9jX25hbWUsICBsb2NfdWlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NfcG9zX3gsIGxvY19wb3NfeSwgbG9jX3Bvc196LCBsb2NfcG9zX2RcclxuICAgICAgICAgICAgRlJPTSB0YmxfbXZwdFxyXG4gICAgICAgICAgICBXSEVSRSAgIHNhdmVfaWQgPSA6c2F2ZV9pZFxyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVzdWx0UmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haS5xdWVyeTxJX3RibF9tdnB0W10+KGdldF9tdnB0X1NRTCwge3NhdmVfaWQ6IHNhdmVfaWR9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDMzOiAke2dldF9tdnB0X1NRTH1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKHJlc3VsdFJlY29yZFNldC5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbXZwdF9hcnJheSA9IFtdIGFzIENfTW92YWJsZVBvaW50W107XHJcbiAgICAgICAgZm9yIChjb25zdCByciBvZiByZXN1bHRSZWNvcmRTZXQpIHtcclxuICAgICAgICAgICAgbXZwdF9hcnJheS5wdXNoKG5ldyBDX01vdmFibGVQb2ludChDX012cHRSREIuZnJvbV9zdHJpbmdBcnJheV90b19KU09OKHJyKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbXZwdF9hcnJheTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC8vIERC5Yem55CG44CCbWF6ZeODhuODvOODluODq+OBq+iHqui6q+OBruODh+ODvOOCv+OCkui/veWKoChpbnNlcnQp44GX44GmXHJcbiAgICAvLyDjgZ3jga5JRChtYXplX2lkKeOCkui/lOOBmVxyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGFkZF90YmwoXHJcbiAgICAgICAgICAgIGRiX21haTogIGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgICAgICBtZXM6ICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgICAgICBzYXZlX2lkOiBudW1iZXIsXHJcbiAgICAgICAgICAgIG12cHQ6ICAgIENfTW92YWJsZVBvaW50XHJcbiAgICAgICAgKTogUHJvbWlzZTxudW1iZXI+IHtcclxuXHJcbiAgICAgICAgY29uc3QgaW5zZXJ0X212cHRfU1FMID0gYFxyXG4gICAgICAgICAgICBJTlNFUlQgSU5UTyB0YmxfbXZwdChcclxuICAgICAgICAgICAgICAgIHNhdmVfaWQsICAgIHVuaXFfaWQsICAgIGN1cl91cmwsICAgIHRlYW1fdWlkLFxyXG4gICAgICAgICAgICAgICAgbG9jX2tpbmQsICAgbG9jX25hbWUsICAgbG9jX3VpZCxcclxuICAgICAgICAgICAgICAgIGxvY19wb3NfeCwgIGxvY19wb3NfeSwgIGxvY19wb3NfeiwgIGxvY19wb3NfZFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIFZBTFVFUyAoXHJcbiAgICAgICAgICAgICAgICA6c2F2ZV9pZCwgICA6dW5pcV9pZCwgICA6Y3VyX3VybCwgICA6dGVhbV91aWQsXHJcbiAgICAgICAgICAgICAgICA6bG9jX2tpbmQsICA6bG9jX25hbWUsICA6bG9jX3VpZCxcclxuICAgICAgICAgICAgICAgIDpsb2NfcG9zX3gsIDpsb2NfcG9zX3ksIDpsb2NfcG9zX3osIDpsb2NfcG9zX2QgXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgaiA9IG12cHQuZW5jb2RlKCk7XHJcbi8vRGVidWdcclxuLypcclxuY29uc29sZS5lcnJvcihcclxuICAgICAgICBcInNhdmVfaWQ9XCIgICArICAgIHNhdmVfaWRcclxuICAgICsgXCIsIHVuaXFfaWQ9XCIgICArICAgIGoudW5pcV9pZFxyXG4gICAgKyBcIiwgY3VyX3VybD1cIiAgICsgICAgai5jdXJfdXJsXHJcbiAgICArIFwiLCB0ZWFtX3VpZD1cIiAgKyAgICBqLnRlYW1fdWlkXHJcbiAgICArIFwiLCBsb2Nfa2luZD1cIiAgKyAgICBqLmtpbmRcclxuICAgICsgXCIsIGxvY19uYW1lPVwiICArICAgIGoubmFtZVxyXG4gICAgKyBcIiwgbG9jX3VpZD1cIiAgICsgICAgai5sb2NfdWlkXHJcbiAgICArIFwiLCBsb2NfcG9zX3g9XCIgKyAgIChqLmxvY19wb3M/Lng/PzApXHJcbiAgICArIFwiLCBsb2NfcG9zX3k9XCIgKyAgIChqLmxvY19wb3M/Lnk/PzApXHJcbiAgICArIFwiLCBsb2NfcG9zX3o9XCIgKyAgIChqLmxvY19wb3M/Lno/PzApXHJcbiAgICArIFwiLCBsb2NfcG9zX2Q9XCIgKyAgIChqLmxvY19wb3M/LmQ/PzApXHJcbilcclxuKi9cclxuYXdhaXQgZGJfbWFpLnF1ZXJ5KGluc2VydF9tdnB0X1NRTCwge1xyXG4gICAgICAgICAgICBzYXZlX2lkOiAgICAgc2F2ZV9pZCxcclxuICAgICAgICAgICAgdW5pcV9pZDogICAgIGoudW5pcV9pZCxcclxuICAgICAgICAgICAgY3VyX3VybDogICAgIGouY3VyX3VybCxcclxuICAgICAgICAgICAgdGVhbV91aWQ6ICAgIGoudGVhbV91aWQsXHJcbiAgICAgICAgICAgIGxvY19raW5kOiAgICBqLmtpbmQsXHJcbiAgICAgICAgICAgIGxvY19uYW1lOiAgICBqLm5hbWUsXHJcbiAgICAgICAgICAgIGxvY191aWQ6ICAgICBqLmxvY191aWQsXHJcbiAgICAgICAgICAgIGxvY19wb3NfeDogICBqLmxvY19wb3M/Lng/PzAsXHJcbiAgICAgICAgICAgIGxvY19wb3NfeTogICBqLmxvY19wb3M/Lnk/PzAsXHJcbiAgICAgICAgICAgIGxvY19wb3NfejogICBqLmxvY19wb3M/Lno/PzAsXHJcbiAgICAgICAgICAgIGxvY19wb3NfZDogICBqLmxvY19wb3M/LmQ/Pzk5LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMzogJHtpbnNlcnRfbXZwdF9TUUx9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gQ19NdnB0UkRCLmxhc3RJbnNlcnQoZGJfbWFpLCBtZXMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyB0YmxfdGVhbeOBp+acgOW+jOOBq+i/veWKoOOBl+OBn+ihjOeVquWPtyhzYXZlX2lkKeOCkui/lOOBmeOAkDHooYzmjL/lhaXlsILnlKjjgJFcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgbGFzdEluc2VydChkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlKSA6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgY29uc3QgbGFzdEluc2VydF9TUUwgPWBcclxuICAgICAgICAgICAgU0VMRUNUIExBU1RfSU5TRVJUX0lEKCkgYXMgaWQgRlJPTSB0YmxfbXZwdDtcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3JlY29yZFNldF0gPSBhd2FpdCBkYl9tYWkucXVlcnk8SV9sYXN0SW5zZXJ0W10+KGxhc3RJbnNlcnRfU1FMKVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgNTAwOiAke2xhc3RJbnNlcnRfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChyZWNvcmRTZXQubGVuZ3RoIDwgMSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiByZWNvcmRTZXRbMF0uaWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBp+aMh+WumuOBleOCjOOBn+ODrOOCs+ODvOODiSjopIfmlbAp44KS5YmK6ZmkKGRlbGV0ZSnjgZnjgotcclxuICAgIC8vIFxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdGJsKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZV9tdnB0X1NRTCA9IGBcclxuICAgICAgICAgICAgREVMRVRFIEZST00gdGJsX212cHQgXHJcbiAgICAgICAgICAgIFdIRVJFICBzYXZlX2lkID0gOnNhdmVfaWRcclxuICAgICAgICBgXHJcbiAgICAgICAgYXdhaXQgZGJfbWFpLnF1ZXJ5KGRlbGV0ZV9tdnB0X1NRTCwge3NhdmVfaWQ6IHNhdmVfaWR9KVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMTI6ICR7ZGVsZXRlX212cHRfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdBcnJheV90b19KU09OKGo6IElfdGJsX212cHQpOiBKU09OX01vdmFibGVQb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdW5pcV9pZDogICAgIGoudW5pcV9pZCxcclxuICAgICAgICAgICAgY3VyX3VybDogICAgIGouY3VyX3VybCxcclxuICAgICAgICAgICAgdGVhbV91aWQ6ICAgIGoudGVhbV91aWQsXHJcbiAgICAgICAgICAgIGtpbmQ6ICAgICAgICBqLmxvY19raW5kLFxyXG4gICAgICAgICAgICBuYW1lOiAgICAgICAgai5sb2NfbmFtZSxcclxuICAgICAgICAgICAgbG9jX3VpZDogICAgIGoubG9jX3VpZCxcclxuICAgICAgICAgICAgbG9jX3Bvczoge1xyXG4gICAgICAgICAgICAgICAgeDogICAgICAgai5sb2NfcG9zX3g/PzAsXHJcbiAgICAgICAgICAgICAgICB5OiAgICAgICBqLmxvY19wb3NfeT8/MCxcclxuICAgICAgICAgICAgICAgIHo6ICAgICAgIGoubG9jX3Bvc196Pz8wLFxyXG4gICAgICAgICAgICAgICAgZDogICAgICAgai5sb2NfcG9zX2Q/Pzk5LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iLCJcclxuLy8g5Yip55So44Kv44Op44K5562J44Gu6Kqt44G/6L6844G/XHJcbmltcG9ydCAgIG15c3FsICAgICAgICAgICAgZnJvbSBcIm15c3FsMi9wcm9taXNlXCI7XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9ICAgZnJvbSAnLi4vZF91dGwvQ19Ec3BNZXNzYWdlJzsgLy8g55S76Z2i44Oh44OD44K744O844K444Gu6KGo56S655So44Kv44Op44K5XHJcbmltcG9ydCB7IENfU2F2ZURhdGEgfSAgICAgZnJvbSBcIi4uL2RfbWRsL0NfU2F2ZURhdGFcIjtcclxuaW1wb3J0IHsgQ19TYXZlSW5mbyB9ICAgICBmcm9tIFwiLi4vZF9tZGwvQ19TYXZlSW5mb1wiO1xyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCB9IGZyb20gXCIuLi9kX21kbC9DX01vdmFibGVQb2ludFwiO1xyXG5pbXBvcnQgeyBDX1RlYW1SREIgfSAgICAgIGZyb20gXCIuL0NfVGVhbVJEQlwiO1xyXG5pbXBvcnQgeyBDX0hlcm9SREIgfSAgICAgIGZyb20gXCIuL0NfSGVyb1JEQlwiO1xyXG5pbXBvcnQgeyBDX01hemVSREIgfSAgICAgIGZyb20gXCIuL0NfTWF6ZVJEQlwiO1xyXG5pbXBvcnQgeyBDX0d1aWxkUkRCIH0gICAgIGZyb20gXCIuL0NfR3VpbGRSREJcIjtcclxuaW1wb3J0IHsgQ19NdnB0UkRCIH0gICAgICBmcm9tIFwiLi9DX012cHRSREJcIjtcclxuaW1wb3J0IHsgQ19NYXplT2JqUkRCIH0gZnJvbSBcIi4vQ19NYXplT2JqUkRCXCI7XHJcblxyXG50eXBlIGRiX2Nvbm5lY3QgPSBteXNxbC5Qb29sQ29ubmVjdGlvbjtcclxuXHJcbmludGVyZmFjZSBJX3RibF9TYXZlSW5mbyBleHRlbmRzIG15c3FsLlJvd0RhdGFQYWNrZXQge1xyXG4gICAgc2F2ZV9pZDogICBudW1iZXI7XHJcbiAgICBwbGF5ZXJfaWQ6IG51bWJlcjtcclxuICAgIHVuaXFfbm86ICAgbnVtYmVyOyBcclxuICAgIHRpdGxlOiAgICAgc3RyaW5nOyBcclxuICAgIGRldGFpbDogICAgc3RyaW5nOyBcclxuICAgIHBvaW50OiAgICAgc3RyaW5nOyBcclxuICAgIGF1dG9fbW9kZTogc3RyaW5nOyBcclxuICAgIGlzX2FjdGl2ZTogc3RyaW5nOyBcclxuICAgIGlzX2RlbGV0ZTogc3RyaW5nOyBcclxuICAgIG1wOiAgICAgICAgc3RyaW5nOyAgLy8gbXlwb3NcclxuICAgIHNhdmVfdGltZTogc3RyaW5nO1xyXG59XHJcbmludGVyZmFjZSBJX3RibF9TYXZlRGF0YSBleHRlbmRzIG15c3FsLlJvd0RhdGFQYWNrZXQgIHtcclxuICAgIHNhdmVfaWQ6ICAgbnVtYmVyO1xyXG4gICAgcGxheWVyX2lkOiBudW1iZXI7XHJcbiAgICB1bmlxX25vOiAgIG51bWJlcjsgXHJcbiAgICB0aXRsZTogICAgIHN0cmluZzsgXHJcbiAgICBkZXRhaWw6ICAgIHN0cmluZzsgXHJcbiAgICBwb2ludDogICAgIHN0cmluZzsgXHJcbiAgICBhdXRvX21vZGU6IHN0cmluZzsgXHJcbiAgICBpc19hY3RpdmU6IHN0cmluZzsgXHJcbiAgICBpc19kZWxldGU6IHN0cmluZzsgXHJcbiAgICBtcDogICAgICAgIHN0cmluZzsgIC8vIG15cG9zXHJcbiAgICBzYXZlX3RpbWU6IHN0cmluZztcclxuLy8gICAgbXZwdDogICAgICBzdHJpbmc7ICAvLyBhbGxfbXZwdFxyXG59XHJcbmludGVyZmFjZSBJX3RibF9TYXZlSWQgICBleHRlbmRzIG15c3FsLlJvd0RhdGFQYWNrZXQge1xyXG4gICAgc2F2ZV9pZDogbnVtYmVyO1xyXG59XHJcbmludGVyZmFjZSBJX2xhc3RJbnNlcnQgICBleHRlbmRzIG15c3FsLlJvd0RhdGFQYWNrZXQge1xyXG4gICAgaWQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfU2F2ZUluZm9SREIge1xyXG4gICAgLy8gRELlh6bnkIbjgIJwbGF5ZXJfZOOBq+ipsuW9k+OBmeOCi+OCu+ODvOODluODh+ODvOOCv+OCkkRC44GL44KJ6Kqt44G/6L6844G/XHJcbiAgICAvLyBTYXZlSW5mb1td44Gu6YWN5YiX44KS6L+U44GZXHJcbiAgICAvLyDpnZ7mtLvmgKfjg4fjg7zjgr/jgoTliYrpmaTmuIjjg4fjg7zjgr/jga/jgrnjgq3jg4Pjg5fjgZnjgotcclxuICAgIC8vIFxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRfbGlzdF9ieV9waWQoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgcGxheWVyX2lkOiBudW1iZXIpOiBQcm9taXNlPENfU2F2ZUluZm9bXT4ge1xyXG4gICAgICAgIGNvbnN0IGdldF9zYXZlX1NRTCA9IGBcclxuICAgICAgICAgICAgU0VMRUNUIHNhdmVfaWQsIHBsYXllcl9pZCwgdW5pcV9ubywgdGl0bGUsIGRldGFpbCwgcG9pbnQsIFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9fbW9kZSwgaXNfYWN0aXZlLCBpc19kZWxldGUsIFxyXG4gICAgICAgICAgICAgICAgICAgIG15cG9zIGFzIG1wLCBcclxuICAgICAgICAgICAgICAgICAgICBEQVRFX0ZPUk1BVChzYXZlX3RpbWUsJyVZLSVtLSVkVCVIOiVpOiVzLiVmWicpIEFTIHNhdmVfdGltZVxyXG4gICAgICAgICAgICBGUk9NICAgdGJsX3NhdmVcclxuICAgICAgICAgICAgV0hFUkUgIHBsYXllcl9pZCA9IDpwbGF5ZXJfaWQgXHJcbiAgICAgICAgICAgIE9SREVSICBCWSB0aXRsZSBDT0xMQVRFIHV0ZjhtYjRfdW5pY29kZV9jaSBBU0NcclxuICAgICAgICBgXHJcbiAgICAgICAgY29uc3QgW3JlY29yZFNldF0gPSBhd2FpdCBkYl9tYWkucXVlcnk8SV90YmxfU2F2ZUluZm9bXT4oZ2V0X3NhdmVfU1FMLCB7cGxheWVyX2lkOiBwbGF5ZXJfaWR9KVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgNTA6ICR7Z2V0X3NhdmVfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChyZWNvcmRTZXQubGVuZ3RoIDwgMSkgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICBjb25zdCBzYXZlX2RhdGFfc2V0OiBDX1NhdmVJbmZvW10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHJlY29yZFNldCkge1xyXG4gICAgICAgICAgICBpZiAocmVjb3JkU2V0W2lpXS5pc19hY3RpdmUgPT0gJzAnKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKHJlY29yZFNldFtpaV0uaXNfZGVsZXRlICE9ICcwJykgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzYXZlID0gbmV3IENfU2F2ZUluZm8ocmVjb3JkU2V0W2lpXSk7XHJcbiAgICAgICAgICAgIHNhdmUubXlwb3MgICAgID0gQ19Nb3ZhYmxlUG9pbnQuZnJvbV9zdHJpbmdfdG9fb2JqKHJlY29yZFNldFtpaV0ubXApXHJcbiAgICBcclxuICAgICAgICAgICAgc2F2ZV9kYXRhX3NldC5wdXNoKHNhdmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2F2ZV9kYXRhX3NldDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgILjg6bjg4vjg7zjgq/jg7vjg4rjg7Pjg5Djg7zjgYvjgolzYXZlX2lk44KS5b6X44KL44CC6Kmy5b2T44GZ44KL44Os44Kz44O844OJ44GM54Sh44GR44KM44Gw5oi744KK5YCk44GnLTHjgpLov5TjgZlcclxuICAgIC8vIFxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRfc2F2ZV9pZF9hdF90YmwoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgcGxheWVyX2lkOiBudW1iZXIsdW5pcV9ubzogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBjb25zdCBzZWVrX3NhdmVfU1FMID0gYFxyXG4gICAgICAgICAgICBTRUxFQ1Qgc2F2ZV9pZFxyXG4gICAgICAgICAgICBGUk9NICAgdGJsX3NhdmVcclxuICAgICAgICAgICAgV0hFUkUgIHBsYXllcl9pZCA9IDpwbGF5ZXJfaWQgQU5EIHVuaXFfbm8gPSA6dW5pcV9ub1xyXG4gICAgICAgICAgICBPUkRFUiAgQlkgdW5pcV9ub1xyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haS5xdWVyeTxJX3RibF9TYXZlSWRbXT4oc2Vla19zYXZlX1NRTCwge3BsYXllcl9pZDogcGxheWVyX2lkLCB1bmlxX25vOiB1bmlxX25vfSlcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDIwOiAke3NlZWtfc2F2ZV9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlY29yZFNldC5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTmFOKHJlY29yZFNldFswXS5zYXZlX2lkKSkge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBzYXZlX2lkIOaVsOWApOOCqOODqeODvCAyMTogJHtyZWNvcmRTZXRbMF0uc2F2ZV9pZH0gYCk7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE51bWJlcihyZWNvcmRTZXRbMF0uc2F2ZV9pZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENfU2F2ZURhdGFSREIge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fcmRiKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlcik6IFByb21pc2U8Q19TYXZlRGF0YXx1bmRlZmluZWQ+IHtcclxuLy9kZWJ1ZyBjb25zb2xlLmVycm9yKGBwcmUgZ2V0X2Zyb20gU2F2ZURhdGFSREIgc2F2ZV9pZD0ke3NhdmVfaWR9YCk7XHJcbiAgICAgICAgY29uc3Qgc2F2ZV9kYXRhICA9IGF3YWl0IENfU2F2ZURhdGFSREIuZ2V0X2Zyb21fdGJsKGRiX21haSwgbWVzLCBzYXZlX2lkKTtcclxuICAgICAgICBpZiAoc2F2ZV9kYXRhID09PSB1bmRlZmluZWQgfHwgbWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuXHJcbi8vZGVidWcgY29uc29sZS5lcnJvcihgcHJlIGdldF9mcm9tIE1hemVSREIgc2F2ZV9pZD0ke3NhdmVfaWR9YCk7XHJcbiAgICAgICAgY29uc3QgbWF6ZV9hcnJheSA9IGF3YWl0IENfTWF6ZVJEQi5nZXRfZnJvbV9yZGJfYWxsKGRiX21haSwgbWVzLCBzYXZlX2lkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgbWF6ZSBvZiBtYXplX2FycmF5KSBzYXZlX2RhdGEuYWxsX21hemVbbWF6ZS51aWQoKV0gPSBtYXplO1xyXG4gXHJcbi8vZGVidWcgY29uc29sZS5lcnJvcihgcHJlIGdldF9mcm9tIE12cHRSREIgc2F2ZV9pZD0ke3NhdmVfaWR9YCk7XHJcbiAgICAgICAgY29uc3QgbXZwdF9hcnJheSA9IGF3YWl0IENfTXZwdFJEQi5nZXRfZnJvbV9yZGJfYWxsKGRiX21haSwgbWVzLCBzYXZlX2lkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgbXZwdCBvZiBtdnB0X2FycmF5KSBzYXZlX2RhdGEuYWxsX212cHRbbXZwdC51aWQoKV0gPSBtdnB0O1xyXG4gICAgICAgIFxyXG4vL2RlYnVnIGNvbnNvbGUuZXJyb3IoYHByZSBnZXRfZnJvbSBUZWFtUkRCIHNhdmVfaWQ9JHtzYXZlX2lkfWApO1xyXG4gICAgICAgIGNvbnN0IHRlYW1fYXJyYXkgPSBhd2FpdCBDX1RlYW1SREIuZ2V0X2Zyb21fcmRiX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCB0ZWFtIG9mIHRlYW1fYXJyYXkpIHNhdmVfZGF0YS5hbGxfdGVhbVt0ZWFtLnVpZCgpXSA9IHRlYW07XHJcbiAgICAgICAgXHJcbi8vZGVidWcgY29uc29sZS5lcnJvcihgcHJlIGdldF9mcm9tIEd1aWxkUkRCIHNhdmVfaWQ9JHtzYXZlX2lkfWApO1xyXG4gICAgICAgIGNvbnN0IGd1bGRfYXJyYXkgPSBhd2FpdCBDX0d1aWxkUkRCLmdldF9mcm9tX3JkYl9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgZ3VsZCBvZiBndWxkX2FycmF5KSBzYXZlX2RhdGEuYWxsX2d1bGRbZ3VsZC51aWQoKV0gPSBndWxkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBzYXZlX2RhdGE7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc2V0X3RvX3JkYihkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlOiBDX1NhdmVEYXRhfHVuZGVmaW5lZCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGlmIChzYXZlID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzYXZlX2lkID0gYXdhaXQgQ19TYXZlRGF0YVJEQi5hZGRfdGJsKGRiX21haSwgbWVzLCBzYXZlKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbi8vZGVidWcgY29uc29sZS5lcnJvcihgc2F2ZV9pZCA9ICR7c2F2ZV9pZH1gKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHNhdmUuYWxsX21hemUpIHtcclxuICAgICAgICAgICAgYXdhaXQgQ19NYXplUkRCLnNldF90b19yZGIoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIHNhdmUuYWxsX21hemVbaWldKTtcclxuICAgICAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHNhdmUuYWxsX212cHQpIHtcclxuLy9kZWJ1ZyBjb25zb2xlLmVycm9yKGBzYXZlX2lkID0gJHtzYXZlX2lkfSwgbXZwdFske2lpfV0gPSAke3NhdmUuYWxsX212cHRbaWldfWApO1xyXG4gICAgICAgICAgICBhd2FpdCBDX012cHRSREIuc2V0X3RvX3JkYihkYl9tYWksIG1lcywgc2F2ZV9pZCwgc2F2ZS5hbGxfbXZwdFtpaV0pO1xyXG4gICAgICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChjb25zdCBpaSBpbiBzYXZlLmFsbF90ZWFtKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IENfVGVhbVJEQi5zZXRfdG9fcmRiKGRiX21haSwgbWVzLCBzYXZlX2lkLCBzYXZlLmFsbF90ZWFtW2lpXSk7XHJcbiAgICAgICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGNvbnN0IGlpIGluIHNhdmUuYWxsX2d1bGQpIHtcclxuICAgICAgICAgICAgYXdhaXQgQ19HdWlsZFJEQi5zZXRfdG9fcmRiKGRiX21haSwgbWVzLCBzYXZlX2lkLCBzYXZlLmFsbF9ndWxkW2lpXSk7XHJcbiAgICAgICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsX3RvX3JkYihkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBhd2FpdCBDX0hlcm9SREIuZGVsX3RibF9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgQ19NYXplT2JqUkRCLmRlbF90YmxfYWxsKGRiX21haSwgbWVzLCBzYXZlX2lkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IENfR3VpbGRSREIuZGVsX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBDX1RlYW1SREIuZGVsX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBDX012cHRSREIuZGVsX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBDX01hemVSREIuZGVsX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBDX1NhdmVEYXRhUkRCLmRlbF90YmwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIERC5Yem55CG44CCc2F2ZV9pZOOBp+aMh+WumuOBleOCjOOBn3NhdmXjg6zjgrPjg7zjg4ko5Y2Y5pWwKeOCkuiqreOBv+i+vOOBv1xyXG4gICAgLy8gc2F2ZV9kYXRh44KS6L+U44GZXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fdGJsKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlcik6IFByb21pc2U8Q19TYXZlRGF0YXx1bmRlZmluZWQ+IHtcclxuICAgICAgICBjb25zdCBnZXRfc2F2ZV9TUUwgPSBgXHJcbiAgICAgICAgICAgIFNFTEVDVCAgc2F2ZV9pZCwgcGxheWVyX2lkLCB1bmlxX25vLCB0aXRsZSwgZGV0YWlsLCBwb2ludCwgXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b19tb2RlLCBpc19hY3RpdmUsIGlzX2RlbGV0ZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgbXlwb3MgYXMgbXAsIERBVEVfRk9STUFUKHNhdmVfdGltZSwnJVktJW0tJWRUJUg6JWk6JXMuJWZaJykgQVMgc2F2ZV90aW1lXHJcbiAgICAgICAgICAgIEZST00gICB0Ymxfc2F2ZVxyXG4gICAgICAgICAgICBXSEVSRSAgc2F2ZV9pZCA9IDpzYXZlX2lkXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpLnF1ZXJ5PElfdGJsX1NhdmVEYXRhW10+KGdldF9zYXZlX1NRTCwge3NhdmVfaWQ6IHNhdmVfaWR9KVxyXG4gICAgICAgIC5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMzA6ICR7Z2V0X3NhdmVfU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG5cclxuLy9kZWd1YiBcclxuaWYgKHJlY29yZFNldCA9PT0gdW5kZWZpbmVkKSBjb25zb2xlLmVycm9yKGBTYXZlRGF0YVJEQi5nZXRfZnJvbV90YWJsZSBFcnJvcjogdW5kZWZpbmRlISEgc2F2ZV9pZD0ke3NhdmVfaWR9YCk7XHJcbiAgICAgICAgaWYgKHJlY29yZFNldC5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYOipsuW9k+OBmeOCi+ODh+ODvOOCv+OBjOacieOCiuOBvuOBm+OCkzogJHtnZXRfc2F2ZV9TUUx9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzYXZlID0gbmV3IENfU2F2ZURhdGEocmVjb3JkU2V0WzBdKTtcclxuICAgICAgICBzYXZlLm15cG9zICAgICA9IENfTW92YWJsZVBvaW50LmZyb21fc3RyaW5nX3RvX29iaihyZWNvcmRTZXRbMF0ubXApXHJcbi8vICAgICAgICBzYXZlLmFsbF9tdnB0ICA9IENfTW92YWJsZVBvaW50LmZyb21fc3RyaW5nX3RvX29iakFycmF5KHJlY29yZFNldFswXS5tdnB0KTtcclxuLy8gICAgICAgIHNhdmUuYWxsX21hemUgID0gQ19NYXplIC5mcm9tX3N0cmluZ190b19vYmpBcnJheShyZWNvcmRTZXRbMF0ubWF6ZSk7XHJcbi8vICAgICAgICBzYXZlLmFsbF90ZWFtICA9IENfVGVhbSAuZnJvbV9zdHJpbmdfdG9fb2JqQXJyYXkocmVjb3JkU2V0WzBdLnRlYW0pO1xyXG4vLyAgICAgICAgc2F2ZS5hbGxfZ3VsZCAgPSBDX0d1aWxkLmZyb21fc3RyaW5nX3RvX29iakFycmF5KHJlY29yZFNldFswXS5ndWxkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNhdmU7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvLyBEQuWHpueQhuOAgnNhdmXjg4bjg7zjg5bjg6vjgavoh6rouqvjga7jg4fjg7zjgr/jgpLov73liqAoaW5zZXJ0KeOBl+OBplxyXG4gICAgLy8g44Gd44GuSUQoc2F2ZV9pZCnjgpLov5TjgZlcclxuICAgIC8vIFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBhZGRfdGJsKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmU6IENfU2F2ZURhdGEpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGNvbnN0IGF1dG9fbW9kZSA9IHNhdmUuYXV0b19tb2RlID8gJzEnIDogJzAnO1xyXG4gICAgICAgIGNvbnN0IGlzX2FjdGl2ZSA9IHNhdmUuaXNfYWN0aXZlID8gJzEnIDogJzAnO1xyXG4gICAgICAgIGNvbnN0IGlzX2RlbGV0ZSA9IHNhdmUuaXNfZGVsZXRlID8gJzEnIDogJzAnO1xyXG5cclxuICAgICAgICBjb25zdCBpbnNlcnRfc2F2ZV9TUUwgPWBcclxuICAgICAgICAgICAgSU5TRVJUICBJTlRPIHRibF9zYXZlIChcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJfaWQsIHVuaXFfbm8sICAgdGl0bGUsIGRldGFpbCwgcG9pbnQsIFxyXG4gICAgICAgICAgICAgICAgICAgIG15cG9zLCBcclxuICAgICAgICAgICAgICAgICAgICBhdXRvX21vZGUsIGlzX2FjdGl2ZSwgaXNfZGVsZXRlXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIFZBTFVFUyAoIFxyXG4gICAgICAgICAgICAgICAgICAgIDpwbGF5ZXJfaWQsIDp1bmlxX25vLCAgIDp0aXRsZSwgOmRldGFpbCwgOnBvaW50LCBcclxuICAgICAgICAgICAgICAgICAgICA6bXlwb3MsIFxyXG4gICAgICAgICAgICAgICAgICAgIDphdXRvX21vZGUsIDppc19hY3RpdmUsIDppc19kZWxldGUpXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGF3YWl0IGRiX21haS5xdWVyeShpbnNlcnRfc2F2ZV9TUUwsIHtcclxuICAgICAgICAgICAgcGxheWVyX2lkOiBzYXZlLnBsYXllcl9pZCxcclxuICAgICAgICAgICAgdW5pcV9ubzogICBzYXZlLnVuaXFfbm8sXHJcbiAgICAgICAgICAgIHRpdGxlOiAgICAgc2F2ZS50aXRsZSxcclxuICAgICAgICAgICAgZGV0YWlsOiAgICBzYXZlLmRldGFpbCxcclxuICAgICAgICAgICAgcG9pbnQ6ICAgICBzYXZlLnBvaW50LFxyXG4gICAgICAgICAgICBteXBvczogICAgIENfTW92YWJsZVBvaW50LmZyb21fb2JqX3RvX3N0cmluZyhzYXZlLm15cG9zKSxcclxuLy8gICAgICAgICAgICBhbGxfbXZwdDogIENfTW92YWJsZVBvaW50LmZyb21fb2JqQXJyYXlfdG9fc3RyaW5nKHNhdmUuYWxsX212cHQpLFxyXG4gICAgICAgICAgICBhdXRvX21vZGU6IGF1dG9fbW9kZSxcclxuICAgICAgICAgICAgaXNfYWN0aXZlOiBpc19hY3RpdmUsXHJcbiAgICAgICAgICAgIGlzX2RlbGV0ZTogaXNfZGVsZXRlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoICgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAwOiAke2luc2VydF9zYXZlX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiAtMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBDX1NhdmVEYXRhUkRCLmxhc3RJbnNlcnQoZGJfbWFpLCBtZXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyB0Ymxfc2F2ZV9kYXRh44Gn5pyA5b6M44Gr6L+95Yqg44GX44Gf6KGM55Wq5Y+3KHNhdmVfaWQp44KS6L+U44GZ44CQMeihjOaMv+WFpeWwgueUqOOAkVxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBsYXN0SW5zZXJ0KGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UpIDogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBjb25zdCBsYXN0SW5zZXJ0X1NRTCA9YFxyXG4gICAgICAgICAgICBTRUxFQ1QgTEFTVF9JTlNFUlRfSUQoKSBhcyBpZCBGUk9NIHRibF9zYXZlO1xyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haS5xdWVyeTxJX2xhc3RJbnNlcnRbXT4obGFzdEluc2VydF9TUUwpXHJcbiAgICAgICAgLmNhdGNoICgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCA1MDA6ICR7bGFzdEluc2VydF9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlY29yZFNldC5sZW5ndGggPCAxKSByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIHJlY29yZFNldFswXS5pZDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZlX2lk44Gn5oyH5a6a44GV44KM44Gf44Os44Kz44O844OJ44KS5YmK6ZmkKGRlbGV0ZSnjgZnjgotcclxuICAgIC8vIFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBkZWxfdGJsKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZV9zYXZlX1NRTCA9IGBcclxuICAgICAgICAgICAgREVMRVRFIEZST00gdGJsX3NhdmUgXHJcbiAgICAgICAgICAgIFdIRVJFICBzYXZlX2lkID0gOnNhdmVfaWRcclxuICAgICAgICBgXHJcbiAgICAgICAgYXdhaXQgZGJfbWFpLnF1ZXJ5KGRlbGV0ZV9zYXZlX1NRTCwge1xyXG4gICAgICAgICAgICBzYXZlX2lkICA6IHNhdmVfaWQsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2ggKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDEwOiAke2RlbGV0ZV9zYXZlX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4iLCIvLyDliKnnlKjjgq/jg6njgrnnrYnjga7oqq3jgb/ovrzjgb9cclxuaW1wb3J0IG15c3FsIGZyb20gJ215c3FsMi9wcm9taXNlJztcclxuaW1wb3J0IHsgQ19Ec3BNZXNzYWdlIH0gICAgICAgZnJvbSAnLi4vZF91dGwvQ19Ec3BNZXNzYWdlJzsgLy8g55S76Z2i44Oh44OD44K744O844K444Gu6KGo56S655So44Kv44Op44K5XHJcbmltcG9ydCB7IENfVGVhbSwgSlNPTl9UZWFtIH0gIGZyb20gXCIuLi9kX21kbC9DX1RlYW1cIjtcclxuaW1wb3J0IHsgQ19IZXJvUkRCIH0gICAgICAgICAgZnJvbSAnLi9DX0hlcm9SREInO1xyXG5cclxudHlwZSBkYl9jb25uZWN0ID0gbXlzcWwuUG9vbENvbm5lY3Rpb247XHJcblxyXG5pbnRlcmZhY2UgSV90YmxfdGVhbSBleHRlbmRzIG15c3FsLlJvd0RhdGFQYWNrZXQge1xyXG4gICAgaWQ6IG51bWJlcixcclxuICAgIHNhdmVfaWQ6IG51bWJlcixcclxuICAgIHVuaXFfaWQ6IHN0cmluZyxcclxuICAgIG5hbWU6ICAgIHN0cmluZyxcclxuICAgIGxvY2F0ZTogIHN0cmluZyxcclxuICAgIGdvbGQ6ICAgIG51bWJlcixcclxuLy8gICAgZ29vZHM6ICAgc3RyaW5nLFxyXG59XHJcbmludGVyZmFjZSBJX2xhc3RJbnNlcnQgZXh0ZW5kcyBteXNxbC5Sb3dEYXRhUGFja2V0IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1RlYW1SREIgeyBcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRfZnJvbV9yZGJfYWxsKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlcik6IFByb21pc2U8Q19UZWFtW10+IHtcclxuICAgICAgICBjb25zdCB0ZWFtX2FycmF5ID0gYXdhaXQgQ19UZWFtUkRCLmdldF9mcm9tX3RibF9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQpO1xyXG4gICAgICAgIGlmIChtZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IHRlYW0gb2YgdGVhbV9hcnJheSkge1xyXG4gICAgICAgICAgICBjb25zdCBocmVzX2FycmF5ID0gYXdhaXQgQ19IZXJvUkRCLmdldF9mcm9tX3JkYl9hbGwoZGJfbWFpLCBtZXMsIHNhdmVfaWQsIHRlYW0udWlkKCkpO1xyXG4gICAgICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChjb25zdCBoZXJvIG9mIGhyZXNfYXJyYXkpIHRlYW0uYWRkX2hlcm8oaGVybyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZWFtX2FycmF5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldF9mcm9tX3JkYihkYl9tYWk6IGRiX2Nvbm5lY3QsIG1lczogQ19Ec3BNZXNzYWdlLCBzYXZlX2lkOiBudW1iZXIsIHRlYW06IENfVGVhbSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IHJzbHQwID0gYXdhaXQgQ19UZWFtUkRCLmdldF9mcm9tX3RibChkYl9tYWksIG1lcywgc2F2ZV9pZCwgdGVhbS51aWQoKSk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGhyZXNfYXJyYXkgPSBhd2FpdCBDX0hlcm9SREIuZ2V0X2Zyb21fcmRiX2FsbChkYl9tYWksIG1lcywgc2F2ZV9pZCwgdGVhbS51aWQoKSk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgaGVybyBvZiBocmVzX2FycmF5KSB0ZWFtLmFkZF9oZXJvKGhlcm8pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHNldF90b19yZGIoXHJcbiAgICAgICAgZGJfbWFpOiAgZGJfY29ubmVjdCxcclxuICAgICAgICBtZXM6ICAgICBDX0RzcE1lc3NhZ2UsXHJcbiAgICAgICAgc2F2ZV9pZDogbnVtYmVyLFxyXG4gICAgICAgIHRlYW06ICAgIENfVGVhbVxyXG4gICAgKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgdGVhbV9pZCA9IGF3YWl0IENfVGVhbVJEQi5hZGRfdGJsKGRiX21haSwgbWVzLCBzYXZlX2lkLCB0ZWFtKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBoZXJvIG9mIHRlYW0uaHJlcygpKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IENfSGVyb1JEQi5zZXRfdG9fcmRiKGRiX21haSwgbWVzLCBzYXZlX2lkLCB0ZWFtLnVpZCgpLCBoZXJvKTtcclxuICAgICAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxfdG9fcmRiKGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UsIHNhdmVfaWQ6IG51bWJlciwgdGVhbV91aWQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGF3YWl0IENfSGVyb1JEQi5kZWxfdG9fcmRiKGRiX21haSwgbWVzLCBzYXZlX2lkLCB0ZWFtX3VpZCk7XHJcbiAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IENfVGVhbVJEQi5kZWxfdGJsKGRiX21haSwgbWVzLCBzYXZlX2lkKTtcclxuICAgICAgICBpZiAobWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBEQuWHpueQhuOAgnNhdmVfaWTjgafmjIflrprjgZXjgozjgZ90ZWFt44Os44Kz44O844OJ44K744OD44OI44KS6Kqt44G/6L6844G/XHJcbiAgICAvLyBUZWFt44Kv44Op44K544Gu6YWN5YiX44Gr44K744OD44OI44GZ44KLXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgZ2V0X2Zyb21fdGJsX2FsbChcclxuICAgICAgICBkYl9tYWk6ICBkYl9jb25uZWN0LCBcclxuICAgICAgICBtZXM6ICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgIHNhdmVfaWQ6IG51bWJlcixcclxuICAgICk6IFByb21pc2U8Q19UZWFtW10+IHtcclxuICAgICAgICBjb25zdCBnZXRfdGVhbV9TUUwgPWBcclxuICAgICAgICAgICAgU0VMRUNUIFx0aWQsIHNhdmVfaWQsIHVuaXFfaWQsIG5hbWUsIGxvY2F0ZSwgZ29sZFxyXG4gICAgICAgICAgICBGUk9NIHRibF90ZWFtXHJcbiAgICAgICAgICAgIFdIRVJFICAgc2F2ZV9pZCA9IDpzYXZlX2lkXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IFtyZXN1bHRSZWNvcmRTZXRdID0gYXdhaXQgZGJfbWFpLnF1ZXJ5PElfdGJsX3RlYW1bXT4oZ2V0X3RlYW1fU1FMLCB7c2F2ZV9pZDogc2F2ZV9pZH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMzdhOiAke2dldF90ZWFtX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGlmIChyZXN1bHRSZWNvcmRTZXQubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRlYW1fYXJyYXkgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHJyIG9mIHJlc3VsdFJlY29yZFNldCkge1xyXG4gICAgICAgICAgICB0ZWFtX2FycmF5LnB1c2gobmV3IENfVGVhbShDX1RlYW1SREIuZnJvbV9zdHJpbmdBcnJheV90b19KU09OKHJyKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVhbV9hcnJheTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEQuWHpueQhuOAgnNhdmVfaWTjgajoh6rouqvjga51bmlxX2lk44Gn5oyH5a6a44GV44KM44GfdGVhbeODrOOCs+ODvOODieOCu+ODg+ODiOOCkuiqreOBv+i+vOOCgFxyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGdldF9mcm9tX3RibChcclxuICAgICAgICBkYl9tYWk6ICAgZGJfY29ubmVjdCwgXHJcbiAgICAgICAgbWVzOiAgICAgIENfRHNwTWVzc2FnZSwgXHJcbiAgICAgICAgc2F2ZV9pZDogIG51bWJlcixcclxuICAgICAgICBqb2luX3VpZDogc3RyaW5nLFxyXG4gICAgKTogUHJvbWlzZTxDX1RlYW18dW5kZWZpbmVkPiB7XHJcbiAgICAgICAgY29uc3QgZ2V0X3RlYW1fU1FMID0gYFxyXG4gICAgICAgICAgICBTRUxFQ1QgXHRpZCwgc2F2ZV9pZCwgdW5pcV9pZCwgbmFtZSwgbG9jYXRlLCBnb2xkIFxyXG4gICAgICAgICAgICBGUk9NIHRibF90ZWFtXHJcbiAgICAgICAgICAgIFdIRVJFICAgc2F2ZV9pZCA9IDpzYXZlX2lkICBBTkQgIHVuaXFfaWQgPSA6dW5pcV9pZFxyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVzdWx0UmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haS5xdWVyeTxJX3RibF90ZWFtW10+KGdldF90ZWFtX1NRTCwge3NhdmVfaWQ6IHNhdmVfaWQsIGpvaW5fdWlkOiBqb2luX3VpZH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKGBTUUzjgqjjg6njg7wgMzdiOiAke2dldF90ZWFtX1NRTH0gYCArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGlmIChyZXN1bHRSZWNvcmRTZXQubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICBtZXMuc2V0X2Vycl9tZXNzYWdlKCdVbmlxX2lk44Gr6Kmy5b2T44GZ44KLVGVhbeODh+ODvOOCv+OBjOacieOCiuOBvuOBm+OCkycpO1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IENfVGVhbShDX1RlYW1SREIuZnJvbV9zdHJpbmdBcnJheV90b19KU09OKHJlc3VsdFJlY29yZFNldFswXSkpXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAvLyBEQuWHpueQhuOAgnRlYW3jg4bjg7zjg5bjg6vjgatDX1RlYW3jga7jg4fjg7zjgr/jgpLov73liqAoaW5zZXJ0KeOBl+OBplxyXG4gICAgLy8g44Gd44GuSUQoaWQp44KS6L+U44GZXHJcbiAgICAvLyBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgYXN5bmMgYWRkX3RibChcclxuICAgICAgICBkYl9tYWk6ICBkYl9jb25uZWN0LCBcclxuICAgICAgICBtZXM6ICAgICBDX0RzcE1lc3NhZ2UsIFxyXG4gICAgICAgIHNhdmVfaWQ6IG51bWJlcixcclxuICAgICAgICB0ZWFtOiAgICBDX1RlYW0sXHJcbiAgICApOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGNvbnN0IGluc2VydF90ZWFtX1NRTCA9IGBcclxuICAgICAgICAgICAgSU5TRVJUIElOVE8gdGJsX3RlYW0gKFxyXG4gICAgICAgICAgICAgICAgc2F2ZV9pZCwgdW5pcV9pZCwgbmFtZSwgbG9jYXRlLCBnb2xkXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgVkFMVUVTICggXHJcbiAgICAgICAgICAgICAgICA6c2F2ZV9pZCwgOnVuaXFfaWQsIDpuYW1lLCA6bG9jYXRlLCA6Z29sZFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnN0IGogPSB0ZWFtLmVuY29kZSgpO1xyXG4vL2NvbnNvbGUuZXJyb3IoYCR7c2F2ZV9pZH0sICR7ai51bmlxX2lkfSwgJHtqLm5hbWV9LCAke0pTT04uc3RyaW5naWZ5KGoubG9jYXRlKX0sICR7SlNPTi5zdHJpbmdpZnkoai5nb2xkKX1gKTtcclxuICAgICAgICBhd2FpdCBkYl9tYWkucXVlcnkoaW5zZXJ0X3RlYW1fU1FMLCB7XHJcbiAgICAgICAgICAgIHNhdmVfaWQgOiBzYXZlX2lkLCAgXHJcbiAgICAgICAgICAgIHVuaXFfaWQgOiBqLnVuaXFfaWQsIFxyXG4gICAgICAgICAgICBuYW1lICAgIDogai5uYW1lLCBcclxuICAgICAgICAgICAgbG9jYXRlICA6IEpTT04uc3RyaW5naWZ5KGoubG9jYXRlKSwgXHJcbiAgICAgICAgICAgIGdvbGQgICAgOiBqLmdvbGQsICBcclxuLy8gICAgICAgICAgICBnb29kcyAgIDogSlNPTi5zdHJpbmdpZnkoai5nb29kcyksICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgbWVzLnNldF9lcnJfbWVzc2FnZShgU1FM44Ko44Op44O8IDY6ICR7aW5zZXJ0X3RlYW1fU1FMfSBgICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gQ19UZWFtUkRCLmxhc3RJbnNlcnQoZGJfbWFpLCBtZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRibF90ZWFt44Gn5pyA5b6M44Gr6L+95Yqg44GX44Gf6KGM55Wq5Y+3KHNhdmVfaWQp44KS6L+U44GZ44CQMeihjOaMv+WFpeWwgueUqOOAkVxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBhc3luYyBsYXN0SW5zZXJ0KGRiX21haTogZGJfY29ubmVjdCwgbWVzOiBDX0RzcE1lc3NhZ2UpIDogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBjb25zdCBsYXN0SW5zZXJ0X1NRTCA9YFxyXG4gICAgICAgICAgICBTRUxFQ1QgTEFTVF9JTlNFUlRfSUQoKSBhcyBpZCBGUk9NIHRibF90ZWFtO1xyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBbcmVjb3JkU2V0XSA9IGF3YWl0IGRiX21haS5xdWVyeTxJX2xhc3RJbnNlcnRbXT4obGFzdEluc2VydF9TUUwpXHJcbiAgICAgICAgLmNhdGNoICgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCA1MDA6ICR7bGFzdEluc2VydF9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlY29yZFNldC5sZW5ndGggPCAxKSByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIHJlY29yZFNldFswXS5pZDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gRELlh6bnkIYo44Kv44Op44K544O744Oh44K944OD44OJKeOAglRlYW3jgq/jg6njgrnjga7phY3liJfjgpLlj5fjgZHlj5bjgaPjgabjgIFcclxuICAgIC8vIOaMh+WumuOBleOCjOOBn3NhdmVfaWTjgafjgIB0ZWFt44OG44O844OW44Or44Gr6L+95YqgKGluc2VydCnjgZfjgaZcclxuICAgIC8vIOOBneOBrklEKGlkKeOBrumFjeWIl+OCkui/lOOBmVxyXG4gICAgLy8gXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGFzeW5jIGFkZF90YmxfYWxsKFxyXG4gICAgICAgIGRiX21haTogICAgIGRiX2Nvbm5lY3QsIFxyXG4gICAgICAgIG1lczogICAgICAgIENfRHNwTWVzc2FnZSwgXHJcbiAgICAgICAgc2F2ZV9pZDogICAgbnVtYmVyLFxyXG4gICAgICAgIHRlYW1fYXJyYXk6IENfVGVhbVtdLCBcclxuICAgICk6IFByb21pc2U8bnVtYmVyW10+IFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHRlYW1faWRfc2V0ID0gW10gYXMgbnVtYmVyW107XHJcbiAgICAgICAgZm9yIChjb25zdCB0ZWFtIG9mIHRlYW1fYXJyYXkpIHtcclxuICAgICAgICAgICAgY29uc3QgdGVhbV9pZCA9IGF3YWl0IENfVGVhbVJEQi5hZGRfdGJsKGRiX21haSwgbWVzLCBzYXZlX2lkLCB0ZWFtKTtcclxuICAgICAgICAgICAgaWYgKG1lcy5pc19lcnIoKSkgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICB0ZWFtX2lkX3NldC5wdXNoKHRlYW1faWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVhbV9pZF9zZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRELlh6bnkIbjgIJzYXZlX2lk44Gn5oyH5a6a44GV44KM44Gf44Os44Kz44O844OJKOikh+aVsCnjgpLliYrpmaQoZGVsZXRlKeOBmeOCi1xyXG4gICAgLy8gXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGRlbF90YmwoZGJfbWFpOiBkYl9jb25uZWN0LCBtZXM6IENfRHNwTWVzc2FnZSwgc2F2ZV9pZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlX3RlYW1fU1FMID0gYFxyXG4gICAgICAgICAgICBERUxFVEUgRlJPTSB0YmxfdGVhbSBcclxuICAgICAgICAgICAgV0hFUkUgIHNhdmVfaWQgPSA6c2F2ZV9pZFxyXG4gICAgICAgIGBcclxuICAgICAgICBhd2FpdCBkYl9tYWkucXVlcnkoZGVsZXRlX3RlYW1fU1FMLCB7c2F2ZV9pZCA6IHNhdmVfaWQsfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgIG1lcy5zZXRfZXJyX21lc3NhZ2UoYFNRTOOCqOODqeODvCAxNTogJHtkZWxldGVfdGVhbV9TUUx9IGAgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9zdHJpbmdBcnJheV90b19KU09OKGo6IElfdGJsX3RlYW0pOiBKU09OX1RlYW0ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgIGouaWQsXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6IGouc2F2ZV9pZCxcclxuICAgICAgICAgICAgdW5pcV9pZDogai51bmlxX2lkLFxyXG4gICAgICAgICAgICBuYW1lOiAgICBqLm5hbWUsXHJcbiAgICAgICAgICAgIGxvY2F0ZTogIEpTT04ucGFyc2Uoai5sb2NhdGUpLFxyXG4gICAgICAgICAgICBnb2xkOiAgICBqLmdvbGQsXHJcbi8vICAgICAgICAgICAgZ29vZHM6ICAgSlNPTi5wYXJzZShqLmdvb2RzKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIOeUu+mdouihqOekuueUqOODoeODg+OCu+ODvOOCuCjpgJrluLjnlKjjgajjgqjjg6njg7znlKgp44Gu44Kr44OX44K744Or5YyWXHJcbmV4cG9ydCBjbGFzcyBDX0RzcE1lc3NhZ2Uge1xyXG4gICAgcHJpdmF0ZSBpc0hUTUw6IGJvb2xlYW47ICAgICAgIC8vIOihqOekuuWFiOOBjEhUTUzjgYsodHJ1ZSnjgIHjgrPjg7Pjgr3jg7zjg6vjgYsoZmFsc2Up44Gu5oyH5a6aXHJcbiAgICBwcml2YXRlIG5vcl9tZXNzYWdlOiBzdHJpbmdbXTsgLy8g6YCa5bi444Gu44Oh44OD44K744O844K444KS5qC857SN44GZ44KL5paH5a2X5YiX6YWN5YiXXHJcbiAgICBwcml2YXRlIGVycl9tZXNzYWdlOiBzdHJpbmdbXTsgLy8g44Ko44Op44O844Oh44OD44K744O844K444KS5qC857SN44GZ44KL5paH5a2X5YiX6YWN5YiXXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGlzSFRNTDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5pc0hUTUwgICAgICA9IGlzSFRNTDtcclxuICAgICAgICB0aGlzLm5vcl9tZXNzYWdlID0gW107XHJcbiAgICAgICAgdGhpcy5lcnJfbWVzc2FnZSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRfbm9yX21lc3NhZ2UobXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vcl9tZXNzYWdlLnB1c2gobXNnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldF9lcnJfbWVzc2FnZShtc2c6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXJyX21lc3NhZ2UucHVzaChtc2cpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcGxheV9ub3JfbWVzc2FnZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5ub3JfbWVzc2FnZS5sZW5ndGggPCAxKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzSFRNTCkge1xyXG4gICAgICAgICAgICBsZXQgYWxsX21zZyA9IFwiPHAgY2xhc3M9J25vcm1hbF9tZXNzYWdlJz5cXG5cIjtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBtc2cgb2YgdGhpcy5ub3JfbWVzc2FnZSkgYWxsX21zZyArPSBgJHttc2d9PC9icj5cXG5gO1xyXG4gICAgICAgICAgICBhbGxfbXNnICs9ICBcIjwvcD5cXG5cIjtcclxuICAgICAgICAgICAgYWxlcnQoYWxsX21zZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBtc2cgb2YgdGhpcy5ub3JfbWVzc2FnZSkgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwbGF5X2Vycl9tZXNzYWdlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmVycl9tZXNzYWdlLmxlbmd0aCA8IDEpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNIVE1MKSB7XHJcbiAgICAgICAgICAgIGxldCBhbGxfbXNnID0gXCI8cCBjbGFzcz0nZXJyb3JfbWVzc2FnZSc+XFxuXCI7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXNnIG9mIHRoaXMuZXJyX21lc3NhZ2UpIGFsbF9tc2cgKz0gYCR7bXNnfTwvYnI+XFxuYDtcclxuICAgICAgICAgICAgYWxsX21zZyArPSAgXCI8L3A+XFxuXCI7XHJcbiAgICAgICAgICAgIGFsZXJ0KGFsbF9tc2cpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJcXG5cXG5cXG4jIyNcXG4jIyMgRVJST1IgT2NjdWVyZC5cXG4jIyNcXG5cIik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXNnIG9mIHRoaXMuZXJyX21lc3NhZ2UpIGNvbnNvbGUuZXJyb3IoYCMjIyAke21zZ31gKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIiMjI1xcblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIHBkb19lcnJvcihlOiBhbnksIGVycm1zZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZWNvZGUgPSBlPy5nZXRDb2RlKCkgICAgPz8gJzk5OTk5JztcclxuICAgICAgICBjb25zdCBlbWVzcyA9IGU/LmdldE1lc3NhZ2UoKSA/PyAnPz8/JztcclxuICAgICAgICB0aGlzLnNldF9lcnJfbWVzc2FnZShlcnJtc2cpO1xyXG4gICAgICAgIHRoaXMuc2V0X2Vycl9tZXNzYWdlKGBjb2RlOiAke2Vjb2RlfWApO1xyXG4gICAgICAgIHRoaXMuc2V0X2Vycl9tZXNzYWdlKGBtZXNzYWdlOiAke2VtZXNzfWApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldF9ub3JfbWVzc2FnZXMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy5ub3JfbWVzc2FnZV07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X2Vycl9tZXNzYWdlcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLmVycl9tZXNzYWdlXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNfZXJyKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAgdGhpcy5lcnJfbWVzc2FnZS5sZW5ndGggIT09IDA7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8g5pWw5YCk44OB44Kn44OD44KvXHJcbmV4cG9ydCBmdW5jdGlvbiBfaXNOdW0obnVtVmFsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIC8vIOODgeOCp+ODg+OCr+adoeS7tuODkeOCv+ODvOODs1xyXG4gICAgY29uc3QgcGF0dGVybiA9IC9eWy0rXT8oWzEtOV1cXGQqfDApKFxcLlxcZCspPyQvO1xyXG4gICAgLy8g5pWw5YCk44OB44Kn44OD44KvXHJcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KG51bVZhbCk7XHJcbn1cclxuXHJcbi8vIOaVsOWApOWPluOCiuWHuuOBl1xyXG5leHBvcnQgZnVuY3Rpb24gX2dldE51bShudW1WYWw6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAvLyDjg4Hjgqfjg4Pjgq/mnaHku7bjg5Hjgr/jg7zjg7NcclxuLy8gICAgY29uc3QgcGF0dGVybiA9IC9bLV0/KFsxLTldXFxkKnwwKShcXC5cXGQrKT8vO1xyXG4gICAgY29uc3QgcGF0dGVybiA9IC8oW14wLTldKS9nO1xyXG4gICAgY29uc3QgdmFsc3RyICA9IG51bVZhbC5yZXBsYWNlKHBhdHRlcm4sJycpO1xyXG4gICAgLy8g5pWw5YCk44OB44Kn44OD44KvXHJcbiAgICByZXR1cm4gTnVtYmVyKHZhbHN0cik7XHJcbn1cclxuXHJcbi8vIOWbm+aNqOS6lOWFpVxyXG5leHBvcnQgZnVuY3Rpb24gX3JvdW5kKG51bTogbnVtYmVyLCBkaWdpdDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IG11bHRpcGxpZXIgPSBNYXRoLnBvdygxMCwgZGlnaXQpO1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogbXVsdGlwbGllcikgLyBtdWx0aXBsaWVyO1xyXG59XHJcblxyXG4vLyDliIfjgorkuIrjgZJcclxuZXhwb3J0IGZ1bmN0aW9uIF9jZWlsKG51bTogbnVtYmVyLCBkaWdpdDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IG11bHRpcGxpZXIgPSBNYXRoLnBvdygxMCwgZGlnaXQpO1xyXG4gICAgcmV0dXJuIE1hdGguY2VpbChudW0gKiBtdWx0aXBsaWVyKSAvIG11bHRpcGxpZXI7XHJcbn1cclxuXHJcblxyXG4vLyDliIfjgorkuIvjgZJcclxuZXhwb3J0IGZ1bmN0aW9uIF9mbG9vcihudW06IG51bWJlciwgZGlnaXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBtdWx0aXBsaWVyID0gTWF0aC5wb3coMTAsIGRpZ2l0KTtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKG51bSAqIG11bHRpcGxpZXIpIC8gbXVsdGlwbGllcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfbWluKGE6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBhLnJlZHVjZSgobjE6IG51bWJlciwgbjI6IG51bWJlcikgPT4gTWF0aC5taW4objEsIG4yKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfbWF4KGE6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBhLnJlZHVjZSgobjE6IG51bWJlciwgbjI6IG51bWJlcikgPT4gTWF0aC5tYXgobjEsIG4yKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX21heCwgX21pbiwgX3JvdW5kIH0gZnJvbSBcIi4vRl9NYXRoXCI7XHJcblxyXG4vLyDkubHmlbDplqLmlbDlkbzjgbPlh7rjgZfnlKjjga7lnovlrqPoqIBcclxudHlwZSBUX2ZyYW5kID0gKCk9Pm51bWJlclxyXG5jb25zdCBmcmFuZDogVF9mcmFuZCA9ICAoKT0+e3JldHVybiBNYXRoLnJhbmRvbSgpfVxyXG5cclxuLy8g5LiA5qeY5Lmx5pWwKOaVtOaVsClcclxuZXhwb3J0IGZ1bmN0aW9uIF9pcmFuZChtaW46IG51bWJlciA9IDAsIG1heDogbnVtYmVyID0gMSwgcmFuZDogVF9mcmFuZCA9IGZyYW5kKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGZfcmFuZCA9IE1hdGguZmxvb3IocmFuZCgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICAgIHJldHVybiBfcm91bmQoZl9yYW5kLCAwKTtcclxufVxyXG5cclxuLy8g5q2j6KaP5YiG5biD44KC44Gp44GN5Lmx5pWwKOaVtOaVsClcclxuZXhwb3J0IGZ1bmN0aW9uIF9pZ3JhbmQobWluOiBudW1iZXIgPSAwLCBtYXg6IG51bWJlciA9IDEsIHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gX2lyYW5kKG1pbiwgbWF4LCAoKT0+e3JldHVybiBfZ3JhbmQoMCwgMSwgcmFuZCl9KVxyXG59XHJcblxyXG4vLyDmraPopo/liIbluIPjgoLjganjgY3kubHmlbAo5a6f5pWwKVxyXG5leHBvcnQgZnVuY3Rpb24gX2dyYW5kKG1pbjogbnVtYmVyID0gMCwgbWF4OiBudW1iZXIgPSAxLCByYW5kOiBUX2ZyYW5kID0gZnJhbmQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoX19fZ2F1c3NpYW5SYW5kKHJhbmQpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxufVxyXG5mdW5jdGlvbiBfX19nYXVzc2lhblJhbmQocmFuZDogVF9mcmFuZCA9IGZyYW5kKSB7XHJcbiAgICBsZXQgc3VtID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSArPSAxKSB7XHJcbiAgICAgICAgc3VtICs9IHJhbmQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdW0gLyA2O1xyXG59XHJcblxyXG4vLyDlsJHjgZfnnJ/pnaLnm67jgarmraPopo/liIbluIPkubHmlbAo5pW05pWwKVxyXG5leHBvcnQgZnVuY3Rpb24gX2lucmFuZChtaW46IG51bWJlciA9IDAsIG1heDogbnVtYmVyID0gMSwgZGQ6IG51bWJlciA9IDMuMCwgcmFuZDogVF9mcmFuZCA9IGZyYW5kKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKF9ucmFuZChtaW4sIG1heCwgZGQsIHJhbmQpKTtcclxufVxyXG5cclxuLy8g5bCR44GX55yf6Z2i55uu44Gq5q2j6KaP5YiG5biD5Lmx5pWwKOWun+aVsClcclxuLy8g5LiA5qeY56K6546H5aSJ5pWwYSxi44KS5aSJ5pWw6Zai5pWw44KS55So44GE44GmIHg9ZihhLGIpLCB5PWcoYSxiKeOBqOOBl+OBpjLjgaTjga7mraPopo/liIbluIPkubHmlbB4LHnjgpLlvpfjgotcclxuLy8geCA9IGYoYSxiKSA9IHNxcnQoLTIqbG9nKGEpKSAqIHNpbigyKs+AKmIpIFxyXG4vLyB5ID0gZyhhLGIpID0gc3FydCgtMipsb2coYSkpICogY29zKDIqz4AqYikgXHJcbmV4cG9ydCBmdW5jdGlvbiBfbnJhbmQobWluOiBudW1iZXIgPSAwLjAsIG1heDogbnVtYmVyID0gMS4wLCBkZDogbnVtYmVyID0gMy4wLCByYW5kOiBUX2ZyYW5kID0gZnJhbmQpOiBudW1iZXIge1xyXG4gICAgY29uc3QgYXZlID0gMC41O1xyXG4gICAgY29uc3QgYSA9IHJhbmQoKTtcclxuICAgIGNvbnN0IGIgPSByYW5kKCk7XHJcbiAgICBsZXQgeCA9IGF2ZSArIF9mYWIoYSwgYikgLyAoMi4wICogZGQpOyAvLyDjgZPjgZPjgb7jgafjgIFOKDAsMSnjga7mraPopo/liIbluIPkubHmlbDjga7kvZzmiJBcclxuXHJcbiAgICB4ID0gbWluICsgeCAqIChtYXggLSBtaW4pO1xyXG4gICAgeCA9IF9tYXgoW21pbiwgeF0pO1xyXG4gICAgeCA9IF9taW4oW21heCwgeF0pO1xyXG4gICAgcmV0dXJuIHg7XHJcbn1cclxuZnVuY3Rpb24gX2ZhYihhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KC0yLjAgKiBNYXRoLmxvZyhhKSkgKiBNYXRoLnNpbigyLjAgKiBNYXRoLlBJICogYik7XHJcbn1cclxuZnVuY3Rpb24gX2dhYihhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KC0yLjAgKiBNYXRoLmxvZyhhKSkgKiBNYXRoLmNvcygyLjAgKiBNYXRoLlBJICogYik7XHJcbn1cclxuXHJcblxyXG4vLyDjgrfjg7zjg4nlgKTjgpLnlKjjgYTjgZ/kubHmlbBcclxuZXhwb3J0IGNsYXNzIENfU2VlZGVkUmFuZCB7XHJcbiAgICBwcm90ZWN0ZWQgc2VlZDogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIGZpcnN0X3NlZWQ6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc2VlZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZWVkID0gc2VlZDtcclxuICAgICAgICB0aGlzLmZpcnN0X3NlZWQgPSBzZWVkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuc2VlZCA9IHRoaXMuZmlyc3Rfc2VlZDtcclxuICAgIH1cclxuICAgIC8vIOS5seaVsOeUn+aIkOODoeOCveODg+ODiVxyXG4gICAgcHVibGljIHJhbmRvbSgpOiBudW1iZXIge1xyXG4gICAgICAgIHRoaXMuc2VlZCA9ICh0aGlzLnNlZWQgKiA5MzAxICsgNDkyOTcpICUgMjMzMjgwO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlZWQgLyAyMzMyODAuMDtcclxuICAgIH1cclxufVxyXG5cclxuLy/jg6bjg4vjg7zjgq9JRCh1dWlkKeOBrueUn+aIkFxyXG5leHBvcnQgZnVuY3Rpb24gX2dldF91dWlkKGxlbjogbnVtYmVyID0gMjAsIHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBsZnQgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpLnRvU3RyaW5nKDE2KTsgLy8g44Gf44G244KTMTPmoYFcclxuICAgIGNvbnN0IHJndF9sZW4gPSBfbWF4KFtsZW4gLSBsZnQubGVuZ3RoLCAxXSk7XHJcblxyXG4gICAgY29uc3Qgcmd0ID0gTWF0aC5mbG9vcihNYXRoLnBvdygxMCwgcmd0X2xlbikgKiByYW5kKCkpLnRvU3RyaW5nKDE2KTtcclxuICAgIHJldHVybiBsZnQgKyByZ3Q7XHJcbn1cclxuXHJcbi8vIOeiuueOh+OBq+WfuuOBpeOBj+imgee0oOmBuOaKnlxyXG5leHBvcnQgdHlwZSBUX1NlbGVjdEl0ZW0gPSB7XHJcbiAgICByYXRpbzogbnVtYmVyLFxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBfc2VsZWN0SXRlbShpdGVtczogVF9TZWxlY3RJdGVtW10sIHJhbmQ6IFRfZnJhbmQgPSBmcmFuZCk6IFRfU2VsZWN0SXRlbSB8IHVuZGVmaW5lZCB7XHJcbiAgICB2YXIgdHRsOm51bWJlciA9IDA7XHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zKSB0dGwgKz0gaXRlbS5yYXRpbztcclxuXHJcbiAgICBjb25zdCB0YXJnZXQgPSBfaXJhbmQoMCwgdHRsLCByYW5kKTtcclxuICAgIHZhciBzdW0gPSAwO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgICAgc3VtICs9IGl0ZW0ucmF0aW87XHJcbiAgICAgICAgaWYgKHRhcmdldCA8IHN1bSkge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8vIOmFjeWIl+OBruOCt+ODo+ODg+ODleODq1xyXG5leHBvcnQgZnVuY3Rpb24gX3NodWZmbGVBcnJheTxUPihhcnJheTogVFtdLCByYW5kOiBUX2ZyYW5kID0gZnJhbmQpOiBUW10ge1xyXG4gICAgbGV0IHNodWZmbGVkQXJyYXkgPSBbLi4uYXJyYXldOyAvLyDlhYPjga7phY3liJfjgpLlpInmm7TjgZfjgarjgYTjgojjgYbjgavjgrPjg5Tjg7zjgZnjgotcclxuICAgIGZvciAobGV0IGkgPSBzaHVmZmxlZEFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICAvLyDjg6njg7Pjg4Djg6DjgarkvY3nva7jgpLmsbrlrppcclxuICAgICAgICBjb25zdCBqID0gX2lyYW5kKDAsIGksIHJhbmQpO1xyXG4gICAgICAgIC8vIOimgee0oOOBruWFpeOCjOabv+OBiFxyXG4gICAgICAgIFtzaHVmZmxlZEFycmF5W2ldLCBzaHVmZmxlZEFycmF5W2pdXSA9IFtzaHVmZmxlZEFycmF5W2pdLCBzaHVmZmxlZEFycmF5W2ldXTtcclxuICAgIH1cclxuICAgIHJldHVybiBzaHVmZmxlZEFycmF5OyAvLyDjgrfjg6Pjg4Pjg5Xjg6vjgZXjgozjgZ/phY3liJfjgpLov5TjgZlcclxufVxyXG5cclxuLy8g5Lmx5pWw44Gr44KI44KL5paH5a2X5YiX55Sf5oiQXHJcbmV4cG9ydCBmdW5jdGlvbiBfcmFuZG9tX3N0cihsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZXQgc3RyID0gJyc7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBsZW5ndGg7IGkrKykgc3RyICs9IF9yYW5kb21fQ2hhcigpO1xyXG4gICAgcmV0dXJuIHN0cjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gX3JhbmRvbV9VcHBlclN0cihsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZXQgc3RyID0gJyc7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBsZW5ndGg7IGkrKykgc3RyICs9IF9yYW5kb21fVXBwZXJDaGFyKCk7XHJcbiAgICByZXR1cm4gc3RyO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBfcmFuZG9tX0xvd2VyU3RyKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGxldCBzdHIgPSAnJztcclxuICAgIGZvciAobGV0IGk9MDsgaSA8IGxlbmd0aDsgaSsrKSBzdHIgKz0gX3JhbmRvbV9Mb3dlckNoYXIoKTtcclxuICAgIHJldHVybiBzdHI7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fVXBwZXJDaGFyKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB2YWwgPSBfaXJhbmQoMCwyNilcclxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1K3ZhbCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fTG93ZXJDaGFyKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB2YWwgPSBfaXJhbmQoMCwyNilcclxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDk1K3ZhbCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fTnVtQ2hhcigpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdmFsID0gX2lyYW5kKDAsOSlcclxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDQ4K3ZhbCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIF9yYW5kb21fQ2hhcigpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdmFsID0gX2lyYW5kKDAsNjEpXHJcbiAgICBpZiAodmFsIDwgMjYpIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1K3ZhbCk7XHJcbiAgICBpZiAodmFsIDwgNTIpIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDk3K3ZhbC0yNik7XHJcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg0OCt2YWwtNTIpO1xyXG59XHJcbiIsImltcG9ydCBleHByZXNzICAgICAgZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IGNyZWF0ZUVycm9yICBmcm9tICdodHRwLWVycm9ycyc7XHJcbmltcG9ydCBwYXRoICAgICAgICAgZnJvbSBcInBhdGhcIjtcclxuXHJcbnZhciB1c2Vyc1JvdXRlciA9IHJlcXVpcmUoJy4vcm91dGVzL3VzZXJzJyk7XHJcbnZhciBtYWlleFJvdXRlciA9IHJlcXVpcmUoJy4vcm91dGVzL21haWV4Jyk7XHJcblxyXG52YXIgY29va2llUGFyc2VyID0gcmVxdWlyZSgnY29va2llLXBhcnNlcicpO1xyXG52YXIgbG9nZ2VyID0gcmVxdWlyZSgnbW9yZ2FuJyk7XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG4vLyB2aWV3IGVuZ2luZSBzZXR1cFxyXG5hcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihfX2Rpcm5hbWUsICd2aWV3cycpKTtcclxuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnZWpzJyk7XHJcblxyXG5hcHAudXNlKGxvZ2dlcignZGV2JykpO1xyXG5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcclxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAncHVibGljJykpKTtcclxuXHJcbi8vYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbi8vYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcclxuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XHJcblxyXG5jb25zdCByb290Um91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxucm9vdFJvdXRlci5nZXQoXHJcbiAgXCIvXCIsXHJcbiAgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIHJlcy5zZW5kKFwiV2VsY29tZSB0byB0aGUgTWFpIHdvcmxkISA6LSlcIik7XHJcbiAgfVxyXG4pO1xyXG5hcHAudXNlKFwiL1wiLCAgICAgIHJvb3RSb3V0ZXIpO1xyXG5hcHAudXNlKFwiL3VzZXJzXCIsIHVzZXJzUm91dGVyKTtcclxuYXBwLnVzZShcIi9tYWlleFwiLCBtYWlleFJvdXRlcik7XHJcblxyXG4vLyBjYXRjaCA0MDQgYW5kIGZvcndhcmQgdG8gZXJyb3IgaGFuZGxlclxyXG5hcHAudXNlKGZ1bmN0aW9uKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSB7XHJcbiAgbmV4dChjcmVhdGVFcnJvcig0MDQpKTtcclxufSk7XHJcblxyXG4vLyBlcnJvciBoYW5kbGVyXHJcbmFwcC51c2UoZnVuY3Rpb24oZXJyOiBhbnksIHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSB7XHJcbiAgLy8gc2V0IGxvY2Fscywgb25seSBwcm92aWRpbmcgZXJyb3IgaW4gZGV2ZWxvcG1lbnRcclxuICByZXMubG9jYWxzLm1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcclxuICByZXMubG9jYWxzLmVycm9yID0gcmVxLmFwcC5nZXQoJ2VudicpID09PSAnZGV2ZWxvcG1lbnQnID8gZXJyIDoge307XHJcblxyXG4gIC8vIHJlbmRlciB0aGUgZXJyb3IgcGFnZVxyXG4gIHJlcy5zdGF0dXMoZXJyLnN0YXR1cyB8fCA1MDApO1xyXG4gIHJlcy5yZW5kZXIoJ2Vycm9yJyk7XHJcbn0pO1xyXG5cclxuY29uc3QgcG9ydCA9IG5vcm1hbGl6ZVBvcnQocHJvY2Vzcy5lbnYuUE9SVCB8fCAnMzAwMCcpO1xyXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBOb3JtYWxpemUgYSBwb3J0IGludG8gYSBudW1iZXIsIHN0cmluZywgb3IgZmFsc2UuXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplUG9ydCh2YWw6IGFueSkge1xyXG4gIHZhciBwb3J0ID0gcGFyc2VJbnQodmFsLCAxMCk7XHJcblxyXG4gIGlmIChpc05hTihwb3J0KSkge1xyXG4gICAgLy8gbmFtZWQgcGlwZVxyXG4gICAgcmV0dXJuIHZhbDtcclxuICB9XHJcblxyXG4gIGlmIChwb3J0ID49IDApIHtcclxuICAgIC8vIHBvcnQgbnVtYmVyXHJcbiAgICByZXR1cm4gcG9ydDtcclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwO1xyXG4iLCJcclxuY29uc3QgZGJfaG9zdCA9ICdzcWwnO1xyXG4vLyDliKnnlKjjgq/jg6njgrnnrYnjga7oqq3jgb/ovrzjgb9cclxuXHJcbi8vIOOCqOODqeODvOODoeODg+OCu+ODvOOCuOetieOCkuS/neWtmOODu+ihqOekuuOBmeOCi+OCr+ODqeOCuVxyXG5pbXBvcnQge0NfRHNwTWVzc2FnZSB9ICAgICBmcm9tICdAZF91dGwvQ19Ec3BNZXNzYWdlJztcclxuXHJcbi8vIOS9jee9ruOBqOaWueWQkeOCkuihqOOBmeOCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX1BvaW50RGlyIH0gICAgICBmcm9tICdAZF9tZGwvQ19Qb2ludERpcic7XHJcblxyXG4vLyDmu57lnKjkvY3nva7jgpLnpLrjgZnjgq/jg6njgrlcclxuaW1wb3J0IHsgQ19Nb3ZhYmxlUG9pbnQgfSAgZnJvbSAnQGRfbWRsL0NfTW92YWJsZVBvaW50JztcclxuXHJcbi8vIOOCruODq+ODieOCr+ODqeOCueWFqOiIrFxyXG5pbXBvcnQge0NfR3VpbGR9ICAgICAgICAgICBmcm9tICdAZF9tZGwvQ19HdWlsZCc7XHJcblxyXG4vLyDjg5Hjg7zjg4bjgqPjg7zjgq/jg6njgrnlhajoiKxcclxuaW1wb3J0IHtDX1RlYW19ICAgICAgICAgICAgZnJvbSAnQGRfbWRsL0NfVGVhbSc7XHJcblxyXG4vLyDjg5Ljg7zjg63jg7zjgq/jg6njgrnlhajoiKxcclxuaW1wb3J0IHtDX0hlcm8sIEpTT05fSGVyb30gZnJvbSAgJ0BkX21kbC9DX0hlcm8nO1xyXG5cclxuLy8g44K744O844OW44OH44O844K/KOOCr+ODqeOCpOOCouODs+ODiOOBqOOBrumAo+aQuinlhajoiKxcclxuaW1wb3J0IHtDX1NhdmVEYXRhLCBKU09OX1NhdmVEYXRhfSBmcm9tICdAZF9tZGwvQ19TYXZlRGF0YSc7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Li744CA5Yem44CA55CGICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbnRlcmZhY2UgSV9HbG9iYWxBcmd1bWVudHMge1xyXG4gICAgbW9kZT86IHN0cmluZztcclxuICAgIG5tYnI/OiBudW1iZXI7XHJcbiAgICBwaWQ/OiAgbnVtYmVyO1xyXG4gICAgaHJlc19KU09OPzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSV9SZXR1cm4ge1xyXG4gICAgZWNvZGU6IG51bWJlcjtcclxuICAgIGVtc2c6ICBzdHJpbmc7XHJcbiAgICBzYXZlPzogSlNPTl9TYXZlRGF0YTtcclxuICAgIGRhdGE/OiB7XHJcbiAgICAgICAgaHJlczpKU09OX0hlcm9bXTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gR2V0dGluZyBOZXcgR2FtZSBzdGFydGlpbmcgZnJvbSBHdWxkXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXdHdWxkKGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBJX1JldHVybiB7XHJcbiAgICBpbml0KGFyZyk7XHJcbiAgICBjb25zdCAgZ3VsZCA9IG5ld19ndWxkKCk7XHJcbiAgICBjb25zdCAgdGVhbSA9IG5ld190ZWFtKGd1bGQpO1xyXG4gICAgY29uc3QgIHNhdmUgPSBuZXdfc2F2ZShndWxkLCB0ZWFtKTtcclxuICAgIHJldHVybiBzYXZlX2VuY29kZSgwLCBzYXZlKTtcclxufVxyXG5cclxuLy8gR2V0dGluZyBBbnkgTmV3IEhlb3JlcyBkYXRhXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGxIcmVzKGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBJX1JldHVybiB7XHJcbiAgICBpbml0KGFyZyk7XHJcbiAgICBjb25zdCAgaHJlcyA9IG5ld19ocmVzKCk7XHJcbiAgICByZXR1cm4gaHJlc19lbmNvZGUoMCwgIGhyZXMpO1xyXG59XHJcblxyXG4gXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vICAg44K144OW44Or44O844OB44OzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmZ1bmN0aW9uIGVycl9lbmNvZGUoY29kZTogbnVtYmVyLCBtc2dzOiBzdHJpbmdbXSk6IElfUmV0dXJuIHtcclxuICAgIGNvbnN0IHJldF9hc3NvYzogSV9SZXR1cm4gPSB7ZWNvZGU6Y29kZSwgZW1zZzogJyd9O1xyXG4gICAgZm9yIChjb25zdCBtc2cgb2YgbXNncykgcmV0X2Fzc29jLmVtc2cgKz0gbXNnOyBcclxuICAgIHJldHVybiByZXRfYXNzb2M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVfZW5jb2RlKGNvZGU6IG51bWJlciwgc2F2ZTogQ19TYXZlRGF0YSk6IElfUmV0dXJuIHtcclxuICAgIGNvbnN0IHJldF9hc3NvYzogSV9SZXR1cm4gPSB7ZWNvZGU6MCwgZW1zZzogJyd9O1xyXG5cclxuICAgIGlmIChjb2RlICE9PSAwIHx8IGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIHJldHVybiBlcnJfZW5jb2RlKGNvZGUsIGd2Lm1lcy5nZXRfZXJyX21lc3NhZ2VzKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXRfYXNzb2MuZWNvZGUgPSAwO1xyXG4gICAgICAgIHJldF9hc3NvYy5lbXNnICA9ICdTdGF0dXMgT0snO1xyXG4gICAgICAgIHJldF9hc3NvYy5zYXZlICA9IHNhdmUuZW5jb2RlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJldF9hc3NvYztcclxufVxyXG5cclxuZnVuY3Rpb24gaHJlc19lbmNvZGUoY29kZTogbnVtYmVyLCBocmVzOiBDX0hlcm9bXSk6IElfUmV0dXJuIHtcclxuICAgIGNvbnN0IHJldF9hc3NvYzogSV9SZXR1cm4gPSB7ZWNvZGU6MCwgZW1zZzogJyd9O1xyXG5cclxuICAgIGlmIChjb2RlICE9PSAwIHx8IGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIHJldHVybiBlcnJfZW5jb2RlKGNvZGUsIGd2Lm1lcy5nZXRfZXJyX21lc3NhZ2VzKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXRfYXNzb2MuZWNvZGUgPSAwO1xyXG4gICAgICAgIHJldF9hc3NvYy5lbXNnICA9ICdTdGF0dXMgT0snO1xyXG5cclxuICAgICAgICBjb25zdCBocmVzX2FycmF5OiBKU09OX0hlcm9bXSA9IFtdO1xyXG4gICAgICAgIGZvcihjb25zdCBoZXJvIG9mIGhyZXMpIHtcclxuICAgICAgICAgICAgaHJlc19hcnJheS5wdXNoKGhlcm8uZW5jb2RlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXRfYXNzb2MuZGF0YSAgPSB7aHJlczogaHJlc19hcnJheX07XHJcbiAgICAgICAgcmV0dXJuIHJldF9hc3NvYztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbmV3X2hyZXMoKTogQ19IZXJvW10ge1xyXG4gICAgY29uc3QgaGVyb2VzOiBDX0hlcm9bXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYS5ubWJyOyBpKyspIHtcclxuICAgICAgICBoZXJvZXMucHVzaCgobmV3IENfSGVybygpKS5yYW5kb21fbWFrZSgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBoZXJvZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld19zYXZlKGd1bGQ6IENfR3VpbGQsIHRlYW06IENfVGVhbSk6IENfU2F2ZURhdGEge1xyXG4gICAgcmV0dXJuIG5ldyBDX1NhdmVEYXRhKHtcclxuICAgICAgICBwbGF5ZXJfaWQ6IGdhLnBpZCxcclxuICAgICAgICBhdXRvX21vZGU6ICcwJyxcclxuICAgICAgICBpc19hY3RpdmU6ICcxJyxcclxuICAgICAgICBpc19kZWxldGU6ICcwJyxcclxuXHJcbiAgICAgICAgYWxsX212cHQ6ICAgW10sXHJcbiAgICAgICAgYWxsX21hemU6ICAgW10sXHJcbiAgICAgICAgYWxsX2d1bGQ6ICAgW2d1bGQuZW5jb2RlKCldLCBcclxuICAgICAgICBhbGxfdGVhbTogICBbdGVhbS5lbmNvZGUoKV0sXHJcblxyXG4vL2xvY1xyXG4gICAgICAgIG15cG9zOiAgICAgIHRlYW0uZ2V0X2xvYygpLmVuY29kZSgpLCBcclxufSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld19ndWxkKCk6IENfR3VpbGQge1xyXG4gICAgY29uc3QgZ3VsZCA9IG5ldyBDX0d1aWxkKCk7XHJcbiAgICBndWxkLmRlY29kZSh7bmFtZTogJ+Wni+OBvuOCiuOBruihl+OBruWGkumZuuiAheOCruODq+ODiSd9KTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICBndWxkLmFkZF9oZXJvKChuZXcgQ19IZXJvKCkpLnJhbmRvbV9tYWtlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBndWxkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdfdGVhbShndWxkOiBDX0d1aWxkKTogQ19UZWFtIHtcclxuICAgIGNvbnN0IHRlYW0gPSBuZXcgQ19UZWFtKCk7XHJcbi8vbG9jXHJcbiAgICBjb25zdCBsb2MgPSBuZXcgQ19Nb3ZhYmxlUG9pbnQoKTtcclxuICAgIGxvYy5kZWNvZGUoe1xyXG4gICAgICAgIGtpbmQ6ICAgJ0d1bGQnLFxyXG4gICAgICAgIG5hbWU6ICAgIGd1bGQuZ2V0X25hbWUoKSxcclxuICAgICAgICBsb2NfdWlkOiBndWxkLnVpZCgpLFxyXG4gICAgICAgIGxvY19wb3M6IG5ldyBDX1BvaW50RGlyKHtcclxuICAgICAgICAgICAgJ3gnOiAwLFxyXG4gICAgICAgICAgICAneSc6IDAsXHJcbiAgICAgICAgICAgICd6JzogMCxcclxuICAgICAgICAgICAgJ2QnOiAwLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHRlYW1fdWlkOiB0ZWFtLnVpZCgpLFxyXG4gICAgfSk7XHJcbiAgICB0ZWFtLnNldF9wcnAoe25hbWU6J+OBsuOCiOOBk+OBleOCk+ODgeODvOODoCd9KTtcclxuLy9sb2NcclxuICAgIHRlYW0uc2V0X2xvYyhsb2MpO1xyXG5cclxuICAgIC8vICAgIHRlYW0uc2V0X2xvYygobmV3IENfTW92YWJsZVBvaW50KCkpLmRlY29kZShsb2MuZW5jb2RlKCkpKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTsgaSsrKSB7IFxyXG4gICAgICAgIHRlYW0uYWRkX2hlcm8oKG5ldyBDX0hlcm8oKSkucmFuZG9tX21ha2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRlYW07XHJcbn1cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDliJ3jgIDmnJ/jgIDoqK3jgIDlrpogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmxldCBndjogQ19HbG9iYWxWYXI7XHJcbmxldCBnYTogQ19HbG9iYWxBcmd1bWVudHM7XHJcblxyXG5mdW5jdGlvbiBpbml0KG9iajogSV9HbG9iYWxBcmd1bWVudHMpOiB2b2lkIHtcclxuICAgIGd2ID0gbmV3IENfR2xvYmFsVmFyKCk7XHJcbiAgICBnYSA9IG5ldyBDX0dsb2JhbEFyZ3VtZW50cyhvYmopO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vXHJcbi8vLy8vICAgICDjgq/jg6njgrnlrqPoqIBcclxuLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8g5aSn5Z+f5aSJ5pWw44Gu6Kit5a6aXHJcbmNsYXNzIENfR2xvYmFsVmFyIHtcclxuICAgIHB1YmxpYyBtZXM6IENfRHNwTWVzc2FnZTtcclxuXHJcbiAgICBwdWJsaWMgTWF6ZV9zaXplX3ggPSAyMTtcclxuICAgIHB1YmxpYyBNYXplX3NpemVfeSA9IDIxO1xyXG4gICAgcHVibGljIExpbWl0X29mX3Jvb20gICAgID0gNTtcclxuICAgIHB1YmxpYyBNYXhfc2l6ZV9vZl9yb29tICA9IDM7XHJcbiAgICBwdWJsaWMgTWF4X29mX01hemVfRmxvb3IgPSAzO1xyXG5cclxuICAgIHB1YmxpYyB0ZWFtX2Fzc29jOiBDX1RlYW1bXSAgPSBbXTtcclxuICAgIHB1YmxpYyB0ZWFtOiAgICAgICBDX1RlYW07XHJcbiAgICBwdWJsaWMgZ3VsZF9hc3NvYzogQ19HdWlsZFtdID0gW107XHJcbiAgICBwdWJsaWMgZ3VsZDogICAgICAgQ19HdWlsZDtcclxuICAgIHB1YmxpYyBoZXJvZXM6ICAgICBDX0hlcm9bXSAgPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tZXMgID0gbmV3IENfRHNwTWVzc2FnZSggLyogaXNIVE1MID0gKi8gZmFsc2UpO1xyXG4gICAgICAgIHRoaXMudGVhbSA9IG5ldyBDX1RlYW0oKTtcclxuICAgICAgICB0aGlzLmd1bGQgPSBuZXcgQ19HdWlsZCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBQT1NU5byV5pWw44Gu6Kit5a6aXHJcbmNsYXNzIENfR2xvYmFsQXJndW1lbnRzIHtcclxuICAgIHB1YmxpYyBtb2RlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbm1icjogbnVtYmVyID0gMTtcclxuICAgIHB1YmxpYyBwaWQ6ICBudW1iZXIgPSAxO1xyXG4gICAgcHVibGljIGhyZXNfSlNPTjogc3RyaW5nfHVuZGVmaW5lZCA9ICcnO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvYmo6IElfR2xvYmFsQXJndW1lbnRzfHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMubW9kZSA9IG9iaj8ubW9kZSA/PyAndW5rbm93bic7XHJcbiAgICAgICAgdGhpcy5ubWJyID0gb2JqPy5ubWJyICE9PSB1bmRlZmluZWQgJiYgIWlzTmFOKG9iai5ubWJyKSA/IE51bWJlcihvYmoubm1icikgOiAxO1xyXG4gICAgICAgIHRoaXMucGlkICA9IG9iaj8ucGlkICAhPT0gdW5kZWZpbmVkICYmICFpc05hTihvYmoucGlkKSAgPyBOdW1iZXIob2JqLnBpZCkgIDogMTtcclxuICAgICAgICB0aGlzLmhyZXNfSlNPTiA9IG9iaj8uaHJlc19KU09OID8/IHVuZGVmaW5lZDtcclxuLy9kZWJ1ZyAgICAgICAgY29uc29sZS5sb2coYG1vZGU9JHt0aGlzLm1vZGV9LCBubWJyPSR7dGhpcy5ubWJyfSwgcGlkID0gJHt0aGlzLnBpZH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuLypcclxubW9kdWxlLmV4cG9ydHMgPSBuZXdHYW1lO1xyXG5tb2R1bGUuZXhwb3J0cyA9IG5ld0hlcm87XHJcbiovIiwiLy8g5Yip55So44Kv44Op44K5562J44Gu6Kqt44G/6L6844G/XHJcblxyXG4vLyDjgqjjg6njg7zjg6Hjg4Pjgrvjg7zjgrjnrYnjgpLkv53lrZjjg7vooajnpLrjgZnjgovjgq/jg6njgrlcclxuaW1wb3J0IHsgQ19Ec3BNZXNzYWdlIH0gZnJvbSAnQGRfdXRsL0NfRHNwTWVzc2FnZSc7XHJcblxyXG4vLyBNeVNxbOOCkuaJseOBhuOCr+ODqeOCuVxyXG5pbXBvcnQgbXlzcWwgICAgICAgICAgICBmcm9tIFwibXlzcWwyL3Byb21pc2VcIjtcclxuXHJcbi8vIFNhdmUvTG9hZOmWouS/guOCr+ODqeOCueWFqOiIrFxyXG5pbXBvcnQgeyBDX1NhdmVJbmZvLCBKU09OX1NhdmVJbmZvIH0gICAgZnJvbSAnQGRfbWRsL0NfU2F2ZUluZm8nO1xyXG5pbXBvcnQgeyBDX1NhdmVEYXRhLCBKU09OX1NhdmVEYXRhIH0gICAgZnJvbSAnQGRfbWRsL0NfU2F2ZURhdGEnO1xyXG5pbXBvcnQgeyBDX1NhdmVEYXRhUkRCLCBDX1NhdmVJbmZvUkRCIH0gZnJvbSAnQGRfcmRiL0NfU2F2ZURhdGFSREInO1xyXG5cclxudHlwZSBkYl9jb25uZWN0ID0gbXlzcWwuUG9vbENvbm5lY3Rpb247XHJcbmxldCAgZGJfbWFpOiBkYl9jb25uZWN0O1xyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDkuLvjgIDlh6bjgIDnkIYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmludGVyZmFjZSBJX1JldHVybiB7XHJcbiAgICBlY29kZTogICAgICBudW1iZXI7XHJcbiAgICBlbXNnOiAgICAgICBzdHJpbmc7XHJcbiAgICBzYXZlX2luZm8/OiBKU09OX1NhdmVJbmZvW107XHJcbiAgICBzYXZlPzogICAgICBKU09OX1NhdmVEYXRhO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluZm8oYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGF3YWl0IGluaXQoYXJnKTtcclxuXHJcbiAgICBsZXQgICByZXRfdmFsOiBJX1JldHVybjtcclxuICAgIGNvbnN0IHNhdmVfYXJyYXkgPSBhd2FpdCBDX1NhdmVJbmZvUkRCLmdldF9saXN0X2J5X3BpZChkYl9tYWksIGd2Lm1lcywgZ2EucGlkKTtcclxuICAgIGlmIChndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICByZXRfdmFsID0gZXJyX2VuY29kZSg1MDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXRfdmFsID0gYWxsX3NhdmVfaW5mbygwLCBzYXZlX2FycmF5KTtcclxuICAgIH1cclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcblxyXG4vKlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdG1wX2xvYWQoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfbG9hZChnYS5waWQsIDEwMCwgMzMwKTtcclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnN0YW50X2xvYWQoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfbG9hZChnYS5waWQsIDEwMSwgMzEwKTtcclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBVRF9sb2FkKGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBQcm9taXNlPElfUmV0dXJuPiB7XHJcbiAgICBpbml0KGFyZyk7XHJcbiAgICBjb25zdCByZXRfdmFsID0gYXdhaXQgX2xvYWQoZ2EucGlkLCAxMDIsIDM1MCk7XHJcbiAgICBmaW5sKCk7XHJcbiAgICByZXR1cm4gcmV0X3ZhbDtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYmVmb3JlX2xvYWQoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfbG9hZChnYS5waWQsIDEwMywgMzgwKTtcclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmFsX2xvYWQoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfbG9hZChnYS5waWQsIGdhLnVubywgMzApO1xyXG4gICAgZmlubCgpO1xyXG4gICAgcmV0dXJuIHJldF92YWw7XHJcbn1cclxuKi9cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZChhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgYXdhaXQgaW5pdChhcmcpO1xyXG4gICAgY29uc3QgcGlkID0gZ2EucGlkO1xyXG4gICAgbGV0ICAgdW5vOiBudW1iZXI7XHJcbiAgICBsZXQgICBlbm86IG51bWJlcjtcclxuICAgIHN3aXRjaCAoZ2EubW9kZSkge1xyXG4gICAgICAgIGNhc2UgJ3RtcF9sb2FkJzogICAgICB1bm8gPSAxMDA7ICAgIGVubyA9IDMzMDsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnaW5zdGFudF9sb2FkJzogIHVubyA9IDEwMTsgICAgZW5vID0gMzEwOyBicmVhaztcclxuICAgICAgICBjYXNlICdVRF9sb2FkJzogICAgICAgdW5vID0gMTAyOyAgICBlbm8gPSAzNTA7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2JlZm9yZV9sb2FkJzogICB1bm8gPSAxMDM7ICAgIGVubyA9IDM3MDsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZ2VuZXJhbF9sb2FkJzogIHVubyA9IGdhLnVubzsgZW5vID0gMzkwOyBicmVhaztcclxuICAgICAgICBkZWZhdWx0OiAgICAgICAgICAgICAgcmV0dXJuIGVycl9lbmNvZGUoODg4OCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXRfdmFsID0gYXdhaXQgX2xvYWQocGlkLCB1bm8sIGVubyk7XHJcbiAgICBmaW5sKCk7XHJcbiAgICByZXR1cm4gcmV0X3ZhbDtcclxufVxyXG5cclxuXHJcbi8qXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0bXBfc2F2ZShhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgaW5pdChhcmcpO1xyXG4gICAgY29uc3QgcmV0X3ZhbCA9IGF3YWl0IF9zYXZlKGdhLnBpZCwgMTAwLCAnX19UZW1wb3JhcnlTYXZlRGF0YV9fJywgMjMwKTtcclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnN0YW50X3NhdmUoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfc2F2ZShnYS5waWQsIDEwMSwgJ19fSW5zdGFudFNhdmVEYXRhX18nLCAyMTApO1xyXG4gICAgZmlubCgpO1xyXG4gICAgcmV0dXJuIHJldF92YWw7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFVEX3NhdmUoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfc2F2ZShnYS5waWQsIDEwMiwgJ19fVXBEb3duU2F2ZURhdGFfXycsIDI1MCk7XHJcbiAgICBmaW5sKCk7XHJcbiAgICByZXR1cm4gcmV0X3ZhbDtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYmVmb3JlX3NhdmUoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHJldF92YWwgPSBhd2FpdCBfc2F2ZShnYS5waWQsIDEwMywgJ19fQmVmb3JlVGhlRXZlbnREYXRhX18nLCAyODApO1xyXG4gICAgZmlubCgpO1xyXG4gICAgcmV0dXJuIHJldF92YWw7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYWxfc2F2ZShhcmc6IElfR2xvYmFsQXJndW1lbnRzKTogUHJvbWlzZTxJX1JldHVybj4ge1xyXG4gICAgaW5pdChhcmcpO1xyXG4gICAgY29uc3QgcmV0X3ZhbCA9IGF3YWl0IF9zYXZlKGdhLnBpZCwgZ2Euc2F2ZT8udW5pcV9ubz8/OTksIGdhLnNhdmU/LnRpdGxlPz8nPz8/JywgMjMwKTtcclxuICAgIGZpbmwoKTtcclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcbiovXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmUoYXJnOiBJX0dsb2JhbEFyZ3VtZW50cyk6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGF3YWl0IGluaXQoYXJnKTtcclxuICAgIGNvbnN0IHBpZCAgPSBnYS5zYXZlPy5wbGF5ZXJfaWQ/Py0yO1xyXG4gICAgbGV0ICAgdW5vOiAgIG51bWJlcjtcclxuICAgIGxldCAgIGVubzogICBudW1iZXI7XHJcbiAgICBsZXQgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgc3dpdGNoIChnYS5tb2RlKSB7XHJcbiAgICAgICAgY2FzZSAndG1wX3NhdmUnOiAgICAgIHVubyA9IDEwMDsgICAgZW5vID0gMjMwOyB0aXRsZT0gJ19fVGVtcG9yYXJ5U2F2ZURhdGFfXyc7ICBicmVhaztcclxuICAgICAgICBjYXNlICdpbnN0YW50X3NhdmUnOiAgdW5vID0gMTAxOyAgICBlbm8gPSAyMTA7IHRpdGxlPSAnX19JbnN0YW50U2F2ZURhdGFfXyc7ICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ1VEX3NhdmUnOiAgICAgICB1bm8gPSAxMDI7ICAgIGVubyA9IDI1MDsgdGl0bGU9ICdfX1VwRG93blNhdmVEYXRhX18nOyAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYmVmb3JlX3NhdmUnOiAgIHVubyA9IDEwMzsgICAgZW5vID0gMjcwOyB0aXRsZT0gJ19fQmVmb3JlVGhlRXZlbnREYXRhX18nOyBicmVhaztcclxuICAgICAgICBjYXNlICdnZW5lcmFsX3NhdmUnOiAgdW5vID0gZ2Euc2F2ZT8udW5pcV9ubz8/OTk7IGVubyA9IDI5MDsgdGl0bGUgPSBnYS5zYXZlPy50aXRsZT8/Jz8/Pyc7ICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OiAgICAgICAgICAgICAgcmV0dXJuIGVycl9lbmNvZGUoOTk5OSk7XHJcbiAgICB9XHJcbi8vICAgIGNvbnNvbGUuZXJyb3IoYHBpZD0ke3BpZH0sIHVubz0ke3Vub30sIHRpdGxlPSR7dGl0bGV9LCBlbm89JHtlbm99YCk7XHJcbiAgICBjb25zdCByZXRfdmFsID0gYXdhaXQgX3NhdmUocGlkLCB1bm8sIHRpdGxlLCBlbm8pO1xyXG4gICAgZmlubCgpO1xyXG4gICAgcmV0dXJuIHJldF92YWw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vICAg44K144OW44Or44O844OB44OzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIF9sb2FkKHBpZDogbnVtYmVyLCB1bm86IG51bWJlciwgZWNvZGU6IG51bWJlcik6IFByb21pc2U8SV9SZXR1cm4+IHtcclxuICAgIGF3YWl0IHRyX2JlZ2luKGRiX21haSk7XHJcblxyXG4gICAgLy8g44Om44OL44O844Kv44O744OK44Oz44OQ44O844Gnc2F2ZeODh+ODvOOCv+OCkuaOouOBmeOAguimi+OBpOOBi+OCjOOBsHNhdmVfaWTjgavjgrvjg4Pjg4jjgZnjgotcclxuICAgIGNvbnN0IHNhdmVfaWQgPSBhd2FpdCBDX1NhdmVJbmZvUkRCLmdldF9zYXZlX2lkX2F0X3RibChkYl9tYWksIGd2Lm1lcywgcGlkLCB1bm8pO1xyXG4gICAgaWYgKGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIGF3YWl0IHRyX3JvbGxiYWNrKGRiX21haSk7XHJcbiAgICAgICAgcmV0dXJuIGFsbF9zYXZlX2RhdGEoZWNvZGUsIHVuZGVmaW5lZCk7O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG1lemXjgoR0ZWFt562J44Gu6Zai6YCj44GZ44KL44OH44O844K/44KS5Y+N5pig44GZ44KLXHJcbiAgICBjb25zdCBzYXZlX2RhdGEwMiA9IGF3YWl0IENfU2F2ZURhdGFSREIuZ2V0X2Zyb21fcmRiKGRiX21haSwgZ3YubWVzLCBzYXZlX2lkKTtcclxuICAgIGlmIChndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICBhd2FpdCB0cl9yb2xsYmFjayhkYl9tYWkpO1xyXG4gICAgICAgIHJldHVybiBhbGxfc2F2ZV9kYXRhKGVjb2RlLCB1bmRlZmluZWQpOztcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCB0cl9jb21taXQoZGJfbWFpKTtcclxuICAgIHJldHVybiBhbGxfc2F2ZV9kYXRhKDAsIHNhdmVfZGF0YTAyKTtcclxuXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIF9zYXZlKHBpZDogbnVtYmVyLCB1bmlxX25vOiBudW1iZXIsIHRpdGxlOiBzdHJpbmcsIGVjb2RlOiBudW1iZXIpOiBQcm9taXNlPElfUmV0dXJuPiB7XHJcbiAgICBpZiAoZ2Euc2F2ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gYWxsX3NhdmVfZGF0YShlY29kZSwgdW5kZWZpbmVkKTtcclxuICAgIGdhLnNhdmUucGxheWVyX2lkID0gcGlkO1xyXG4gICAgZ2Euc2F2ZS51bmlxX25vICAgPSB1bmlxX25vO1xyXG4gICAgZ2Euc2F2ZS50aXRsZSAgICAgPSB0aXRsZTtcclxuLy9jb25zb2xlLmVycm9yKGBwaWQ9JHtwaWR9LCB1bm89JHt1bmlxX25vfSwgdGl0bGU9JHt0aXRsZX1gKTtcclxuICAgIGF3YWl0IHRyX2JlZ2luKGRiX21haSk7XHJcblxyXG4gICAgLy8g44Om44OL44O844Kv44O744OK44Oz44OQ44O844Gnc2F2ZeODh+ODvOOCv+OCkuaOouOBmeOAglxyXG4gICAgY29uc3Qgc2F2ZV9pZCA9IGF3YWl0IENfU2F2ZUluZm9SREIuZ2V0X3NhdmVfaWRfYXRfdGJsKGRiX21haSwgZ3YubWVzLCBwaWQsIHVuaXFfbm8pO1xyXG4gICAgaWYgKGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIGF3YWl0IHRyX3JvbGxiYWNrKGRiX21haSk7XHJcbiAgICAgICAgcmV0dXJuIGFsbF9zYXZlX2RhdGEoZWNvZGUgKyAxMCwgZ2Euc2F2ZSk7XHJcbiAgICB9XHJcbiAgICAvLyDlkIzjgZhpZOOBruaXouWtmOODh+ODvOOCv+OBjOacieOBo+OBn+OCieS4gOaXpuWJiumZpOOBmeOCi1xyXG4vL2RlYnVnIGNvbnNvbGUuZXJyb3IoYHNhdmVfaWQgPSAke3NhdmVfaWR9YCk7XHJcbiAgICBpZiAoc2F2ZV9pZCA+IDApIHtcclxuICAgICAgICBjb25zdCByc2x0MDEgPSBhd2FpdCBDX1NhdmVEYXRhUkRCLmRlbF90b19yZGIoZGJfbWFpLCBndi5tZXMsIHNhdmVfaWQpOyBcclxuICAgICAgICBpZiAoZ3YubWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRyX3JvbGxiYWNrKGRiX21haSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGxfc2F2ZV9kYXRhKGVjb2RlICsgMzMsIGdhLnNhdmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOaUueOCgeOBpijliKXjga7jg6zjgrPjg7zjg4njgasp44K744O844OW44GZ44KLXHJcbiAgICBjb25zdCByc2x0MDIgPSBhd2FpdCBDX1NhdmVEYXRhUkRCLnNldF90b19yZGIoZGJfbWFpLCBndi5tZXMsIGdhLnNhdmUpO1xyXG4gICAgaWYgKHJzbHQwMiA9PT0gZmFsc2UpIHtcclxuICAgICAgICBhd2FpdCB0cl9yb2xsYmFjayhkYl9tYWkpO1xyXG4gICAgICAgIHJldHVybiBhbGxfc2F2ZV9kYXRhKGVjb2RlICsgMjMsIGdhLnNhdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IHRyX2NvbW1pdChkYl9tYWkpO1xyXG4gICAgcmV0dXJuIGFsbF9zYXZlX2RhdGEoMCwgZ2Euc2F2ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFsbF9zYXZlX2RhdGEoY29kZTogbnVtYmVyLCBzYXZlOiBDX1NhdmVEYXRhfHVuZGVmaW5lZCk6IElfUmV0dXJuIHtcclxuICAgIGxldCByZXRfdmFsOiBJX1JldHVybjtcclxuXHJcbiAgICBpZiAoY29kZSAhPT0gMCB8fCBndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICByZXRfdmFsID0gbmV3IENfRXJyUmV0dXJuKGNvZGUsIGd2Lm1lcy5nZXRfZXJyX21lc3NhZ2VzKCkuam9pbihcIlxcblwiKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldF92YWwgPSBuZXcgQ19Ob3JSZXR1cm4oKTtcclxuICAgICAgICBpZiAoc2F2ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldF92YWwuc2F2ZSA9IHNhdmUuZW5jb2RlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0X3ZhbC5zYXZlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmV0X3ZhbDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWxsX3NhdmVfaW5mbyhjb2RlOiBudW1iZXIsIHNhdmVfbGlzdDogQ19TYXZlSW5mb1tdKTogSV9SZXR1cm4ge1xyXG4gICAgbGV0IHJldF92YWw6IElfUmV0dXJuO1xyXG5cclxuICAgIGlmIChjb2RlICE9PSAwIHx8IGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIHJldF92YWwgPSBuZXcgQ19FcnJSZXR1cm4oY29kZSwgZ3YubWVzLmdldF9lcnJfbWVzc2FnZXMoKS5qb2luKFwiXFxuXCIpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0X3ZhbCA9IG5ldyBDX05vclJldHVybigpO1xyXG4vLyAgICAgICAgcmV0X3ZhbC5zYXZlX2luZm8gPSBzYXZlX2xpc3Q7XHJcbiAgICAgICAgY29uc3QgcmV0X2FycmF5OiBKU09OX1NhdmVEYXRhW10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHNhdmVfZWxtIG9mIHNhdmVfbGlzdCkgcmV0X2FycmF5LnB1c2goc2F2ZV9lbG0uZW5jb2RlKCkpO1xyXG4gICAgICAgIHJldF92YWwuc2F2ZV9pbmZvID0gcmV0X2FycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXRfdmFsO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGVycl9lbmNvZGUoY29kZTogbnVtYmVyKTogSV9SZXR1cm4ge1xyXG4gICAgY29uc3QgcmV0X2Fzc29jOiBJX1JldHVybiA9IHtlY29kZTpjb2RlLCBlbXNnOiAnJ307XHJcbiAgICBmb3IgKGNvbnN0IG1zZyBvZiBndi5tZXMuZ2V0X2Vycl9tZXNzYWdlcygpKSByZXRfYXNzb2MuZW1zZyArPSBtc2cgKyBcIlxcblwiOyBcclxuICAgIHJldHVybiByZXRfYXNzb2M7XHJcbn1cclxuXHJcblxyXG5jbGFzcyBDX05vclJldHVybiBpbXBsZW1lbnRzIElfUmV0dXJuIHtcclxuICAgIHB1YmxpYyBlY29kZTogICBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGVtc2c6ICAgIHN0cmluZyA9ICdTdGF0dXMgT0snO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge31cclxufVxyXG5cclxuY2xhc3MgQ19FcnJSZXR1cm4gaW1wbGVtZW50cyBJX1JldHVybiB7XHJcbiAgICBwdWJsaWMgZWNvZGU6ICAgbnVtYmVyID0gMTAwMDtcclxuICAgIHB1YmxpYyBlbXNnOiAgICBzdHJpbmcgPSAnZXJyb3InO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGVjb2RlOiBudW1iZXIsIGVtc2c6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZWNvZGUgID0gZWNvZGU7XHJcbiAgICAgICAgdGhpcy5lbXNnICAgPSBlbXNnO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDliJ3jgIDmnJ/jgIDoqK3jgIDlrpogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmxldCBndjogQ19HbG9iYWxWYXI7XHJcbmxldCBnYTogQ19HbG9iYWxBcmd1bWVudHM7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbml0KG9iajogSV9HbG9iYWxBcmd1bWVudHMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGd2ID0gICAgIG5ldyBDX0dsb2JhbFZhcigpO1xyXG4gICAgZ2EgPSAgICAgbmV3IENfR2xvYmFsQXJndW1lbnRzKG9iaik7XHJcbiAgICBkYl9tYWkgPSBhd2FpdCBndi5kYl9wb29sLmdldENvbm5lY3Rpb24oKTtcclxuXHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gZmlubCgpOiB2b2lkIHtcclxuICAgIGRiX21haS5yZWxlYXNlKCk7XHJcbiAgICBndi5maW5sKCk7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy9cclxuLy8vLy8gICAgIOOCr+ODqeOCueWuo+iogFxyXG4vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgLy8g5aSn5Z+f5aSJ5pWw44Gu6Kit5a6aXHJcbiAgICBjbGFzcyBDX0dsb2JhbFZhciB7XHJcbiAgICAgICAgcHVibGljIG1lczogQ19Ec3BNZXNzYWdlO1xyXG5cclxuICAgICAgICBwdWJsaWMgZGJfaG9zdDogICBzdHJpbmcgPSBcInNxbFwiO1xyXG4gICAgICAgIHB1YmxpYyBkYl9wb3J0OiAgIG51bWJlciA9ICAzMzA2O1xyXG4gICAgICAgIHB1YmxpYyBkYl9uYW1lOiAgIHN0cmluZyA9IFwiZGJfbWFpXCI7XHJcbiAgICAgICAgcHVibGljIGRiX3VzZXI6ICAgc3RyaW5nID0gXCJpdHNheW5vMzNcIjtcclxuICAgICAgICBwdWJsaWMgZGJfcGFzczogICBzdHJpbmcgPSBcIlBFMzMzODMzXCI7XHJcbiAgICBcclxuICAgICAgICBwdWJsaWMgZGJfcG9vbDogICBteXNxbC5Qb29sO1xyXG4gICAgXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICB0aGlzLm1lcyAgICAgPSBuZXcgQ19Ec3BNZXNzYWdlKCAvKiBpc0hUTUwgPSAqLyBmYWxzZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgdGhpcy5kYl9wb29sID0gbXlzcWwuY3JlYXRlUG9vbCh7XHJcbiAgICAgICAgICAgICAgICBob3N0OiAgICAgIHRoaXMuZGJfaG9zdCxcclxuICAgICAgICAgICAgICAgIHBvcnQ6ICAgICAgdGhpcy5kYl9wb3J0LFxyXG4gICAgICAgICAgICAgICAgdXNlcjogICAgICB0aGlzLmRiX3VzZXIsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogIHRoaXMuZGJfcGFzcyxcclxuICAgICAgICAgICAgICAgIGRhdGFiYXNlOiAgdGhpcy5kYl9uYW1lLFxyXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbkxpbWl0OiAgICAgMTAsIC8vIOaOpee2muOCkuW8teOCiue2muOBkeOCi+aVsFxyXG4gICAgICAgICAgICAgICAgd2FpdEZvckNvbm5lY3Rpb25zOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbmFtZWRQbGFjZWhvbGRlcnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBqc29uU3RyaW5nczogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBmaW5sKCkge1xyXG4gICAgICAgICAgICB0aGlzLmRiX3Bvb2wuZW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbnRlcmZhY2UgSV9HbG9iYWxBcmd1bWVudHMge1xyXG4gICAgICAgIG1vZGU/OiAgICAgICAgc3RyaW5nO1xyXG4gICAgICAgIHBpZD86ICAgICAgICAgbnVtYmVyO1xyXG4gICAgICAgIHVubz86ICAgICAgICAgbnVtYmVyO1xyXG4gICAgICAgIHNhdmVfaWQ/OiAgICAgbnVtYmVyO1xyXG4gICAgICAgIHNhdmVfdGl0bGU/OiAgc3RyaW5nOyBcclxuICAgICAgICBzYXZlX2RldGFpbD86IHN0cmluZzsgXHJcbiAgICAgICAgc2F2ZV9wb2ludD86ICBzdHJpbmc7IFxyXG4gICAgICAgIHNhdmVfdGltZT86ICAgc3RyaW5nOyBcclxuICAgICAgICBzYXZlPzogICAgICAgIHN0cmluZztcclxuICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAvLyBQT1NU5byV5pWw44Gu6Kit5a6aXHJcbiAgICBjbGFzcyBDX0dsb2JhbEFyZ3VtZW50cyB7XHJcbiAgICAgICAgcHVibGljIG1vZGU6ICAgICAgc3RyaW5nICAgICAgICAgID0gJ3Vua25vd24nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBzYXZlX0pTT046IHN0cmluZyAgICAgICAgICA9ICcnO1xyXG4gICAgICAgIHB1YmxpYyBzYXZlOiAgICAgICAgQ19TYXZlRGF0YXx1bmRlZmluZWQgPSB1bmRlZmluZWQ7IFxyXG5cclxuICAgICAgICBwdWJsaWMgcGlkOiAgICAgICAgIG51bWJlciA9ICAxO1xyXG4gICAgICAgIHB1YmxpYyB1bm86ICAgICAgICAgbnVtYmVyID0gLTE7XHJcbiAgICAgICAgcHVibGljIHNhdmVfaWQ6ICAgICBudW1iZXIgPSAtMTtcclxuICAgICAgICBwdWJsaWMgc2F2ZV90aXRsZTogIHN0cmluZyA9ICcnOyBcclxuICAgICAgICBwdWJsaWMgc2F2ZV9kZXRhaWw6IHN0cmluZyA9ICcnOyBcclxuICAgICAgICBwdWJsaWMgc2F2ZV9wb2ludDogIHN0cmluZyA9ICcnOyBcclxuICAgICAgICBwdWJsaWMgc2F2ZV90aW1lOiAgIHN0cmluZyA9ICcnXHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvYmo6IElfR2xvYmFsQXJndW1lbnRzfHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAob2JqID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubW9kZSAgICAgICAgPSBvYmoubW9kZSA/PyB0aGlzLm1vZGU7XHJcbiAgICAgICAgICAgIHRoaXMucGlkICAgICAgICAgPSBvYmoucGlkICA/PyB0aGlzLnBpZDtcclxuICAgICAgICAgICAgdGhpcy51bm8gICAgICAgICA9IG9iai51bm8gID8/IHRoaXMudW5vO1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVfaWQgICAgID0gTnVtYmVyKG9iai5zYXZlX2lkKSAgICAgID8/IHRoaXMuc2F2ZV9pZDtcclxuICAgICAgICAgICAgdGhpcy5zYXZlX3RpdGxlICA9IG9iai5zYXZlX3RpdGxlICAgICAgICAgICA/PyB0aGlzLnNhdmVfdGl0bGU7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZV9kZXRhaWwgPSBvYmouc2F2ZV9kZXRhaWwgICAgICAgICAgPz8gdGhpcy5zYXZlX2RldGFpbDtcclxuICAgICAgICAgICAgdGhpcy5zYXZlX3BvaW50ICA9IG9iai5zYXZlX3BvaW50ICAgICAgICAgICA/PyB0aGlzLnNhdmVfcG9pbnQ7XHJcbiAgICAgICAgICAgIGlmIChvYmouc2F2ZSAhPT0gdW5kZWZpbmVkKSAgICB0aGlzLnNhdmUgICAgPSBuZXcgQ19TYXZlRGF0YShKU09OLnBhcnNlKG9iai5zYXZlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vICAg44OH44O844K/44OZ44O844K56Zai5L+CIFxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAgIFxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiB0cl9iZWdpbihkYl9tYWk6IGRiX2Nvbm5lY3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBkYl9tYWkuYmVnaW5UcmFuc2FjdGlvbigpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBndi5tZXMuc2V0X2Vycl9tZXNzYWdlKFwi44OI44Op44Oz44K244Kv44K344On44Oz44Gu6ZaL5aeL5aSx5pWXOiBcIiArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHRyX2NvbW1pdChkYl9tYWk6IGRiX2Nvbm5lY3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBkYl9tYWkuY29tbWl0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGd2Lm1lcy5zZXRfZXJyX21lc3NhZ2UoXCLjg4jjg6njg7Pjgrbjgq/jgrfjg6fjg7Pjga7jgrPjg5/jg4Pjg4jlpLHmlZdcIiArIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHRyX3JvbGxiYWNrKGRiX21haTogZGJfY29ubmVjdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGRiX21haS5yb2xsYmFjaygpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBndi5tZXMuc2V0X2Vycl9tZXNzYWdlKFwi44OI44Op44Oz44K244Kv44K344On44Oz44Gu44Ot44O844Or44OQ44OD44Kv5aSx5pWXXCIgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiIsIlxyXG5jb25zdCBkYl9ob3N0ID0gJ3NxbCc7XHJcbi8vIOWIqeeUqOOCr+ODqeOCueetieOBruiqreOBv+i+vOOBv1xyXG5cclxuLy8g44Ko44Op44O844Oh44OD44K744O844K4562J44KS5L+d5a2Y44O76KGo56S644GZ44KL44Kv44Op44K5XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9ICAgICBmcm9tICdAZF91dGwvQ19Ec3BNZXNzYWdlJztcclxuXHJcbi8vIE15U3Fs44KS5omx44GG44Kv44Op44K5XHJcbmltcG9ydCBteXNxbCBmcm9tIFwibXlzcWwyL3Byb21pc2VcIjtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDkuLvjgIDlh6bjgIDnkIYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmludGVyZmFjZSBJX0dsb2JhbEFyZ3VtZW50cyB7XHJcbiAgICBtb2RlPzogc3RyaW5nO1xyXG4gICAgcGlkOiAgIG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIElfUmV0dXJuIHtcclxuICAgIGVjb2RlOiAgIG51bWJlcjtcclxuICAgIGVtc2c6ICAgIHN0cmluZztcclxuICAgIHBpZDogICAgIG51bWJlcjtcclxuICAgIG5hbWU6ICAgIHN0cmluZztcclxuICAgIG1ibmFtZTogIHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgQ19Ob3JSZXR1cm4gaW1wbGVtZW50cyBJX1JldHVybiB7XHJcbiAgICBwdWJsaWMgZWNvZGU6ICAgbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBlbXNnOiAgICBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBwaWQ6ICAgICBudW1iZXIgPSAtMTtcclxuICAgIHB1YmxpYyBuYW1lOiAgICBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBtYm5hbWU6ICBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBtYm5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucGlkICAgID0gcGlkO1xyXG4gICAgICAgIHRoaXMubmFtZSAgID0gbmFtZTtcclxuICAgICAgICB0aGlzLm1ibmFtZSA9IG1ibmFtZTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ19FcnJSZXR1cm4gaW1wbGVtZW50cyBJX1JldHVybiB7XHJcbiAgICBwdWJsaWMgZWNvZGU6ICAgbnVtYmVyID0gMTAwMDtcclxuICAgIHB1YmxpYyBlbXNnOiAgICBzdHJpbmcgPSAnZXJyb3InO1xyXG4gICAgcHVibGljIHBpZDogICAgIG51bWJlciA9IC0xO1xyXG4gICAgcHVibGljIG5hbWU6ICAgIHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIG1ibmFtZTogIHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGVjb2RlOiBudW1iZXIsIGVtc2c6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZWNvZGUgID0gZWNvZGU7XHJcbiAgICAgICAgdGhpcy5lbXNnICAgPSBlbXNnO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gR2V0dGluZyBOZXcgR2FtZSBzdGFydGlpbmcgZnJvbSBHdWxkXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0ZXN0KGFyZzogSV9HbG9iYWxBcmd1bWVudHMpOiBQcm9taXNlPElfUmV0dXJuPiB7XHJcbiAgICBsZXQgcmV0dXJuX3ZhbDogSV9SZXR1cm47XHJcblxyXG4gICAgaW5pdChhcmcpO1xyXG5cclxuICAgIGlmIChndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICBndi5tZXMuZGlzcGxheV9lcnJfbWVzc2FnZSgpO1xyXG4gICAgICAgIHJldHVybl92YWwgPSBuZXcgQ19FcnJSZXR1cm4oMTAwLCAnZGJfbWFpIE9QRU4gRVJST1IgJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybl92YWwgPSBhd2FpdCBnZXRfcGxheWVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlubCgpO1xyXG4gICAgcmV0dXJuIHJldHVybl92YWw7XHJcbn1cclxuXHJcbiBcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8gICDjgrXjg5bjg6vjg7zjg4Hjg7NcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0X3BsYXllcigpOiBQcm9taXNlPElfUmV0dXJuPiB7XHJcbiAgICBpZiAoZ2EucGlkID09PSB1bmRlZmluZWQpIHJldHVybiBuZXcgQ19FcnJSZXR1cm4oOTk5LCAnUGlkIFVuZGVmaW5lZCcpO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RfdXNlcnMoKS50aGVuKHJzbHRfdXNlcnMgPT4ge1xyXG4gICAgICAgIGlmIChyc2x0X3VzZXJzID09PSB1bmRlZmluZWQgfHwgZ3YubWVzLmlzX2VycigpKSB7XHJcbiAgICAgICAgICAgIGd2Lm1lcy5kaXNwbGF5X2Vycl9tZXNzYWdlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ19FcnJSZXR1cm4oMjAwLCAnU1FMIEVSUk9SICcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocnNsdF91c2Vycy5sZW5ndGggPCAxKSByZXR1cm4gbmV3IENfRXJyUmV0dXJuKDkwMCwgYE5vIGRhdGEgZXhpc3Qgb24gcGlkPSR7Z2EucGlkfWApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IENfTm9yUmV0dXJuKFxyXG4gICAgICAgICAgICByc2x0X3VzZXJzWzBdLmlkLCBcclxuICAgICAgICAgICAgcnNsdF91c2Vyc1swXS5uYW1lLCBcclxuICAgICAgICAgICAgcnNsdF91c2Vyc1swXS5tYm5hbWVcclxuICAgICAgICApO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IENfRXJyUmV0dXJuKDEwMCwgJ1NRTCBFUlJPUjogJyArIGVycik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElfdGJsX3BsYXllciBleHRlbmRzIG15c3FsLlJvd0RhdGFQYWNrZXR7XHJcbiAgICBpZDogICAgICBudW1iZXI7XHJcbiAgICBuYW1lOiAgICBzdHJpbmc7XHJcbiAgICBwYXNzd2Q6ICBzdHJpbmc7XHJcbiAgICBtYm5hbWU6ICBzdHJpbmc7XHJcbiAgICBlbWFpbDogICBzdHJpbmc7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlbGVjdF91c2VycygpOiBQcm9taXNlPElfdGJsX3BsYXllcltdfHVuZGVmaW5lZD4ge1xyXG4gICAgY29uc3Qgc3FsID0gYFxyXG4gICAgICAgIFNFTEVDVCBpZCwgbmFtZSwgcGFzc3dkLCBtYm5hbWUsIGVtYWlsIEZST00gdGJsX3BsYXllclxyXG4gICAgICAgICAgICBXSEVSRSAgaWQgPSA6aWRcclxuICAgIGA7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBbcnNsdFJvd1NldF0gPSBhd2FpdCBndi5kYl9wb29sLnF1ZXJ5PElfdGJsX3BsYXllcltdPihzcWwsIHtpZDogZ2EucGlkfSk7XHJcbiAgICAgICAgcmV0dXJuIHJzbHRSb3dTZXQ7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBndi5tZXMuc2V0X2Vycl9tZXNzYWdlKCdTUUwgRVJST1IgU0VMRUNUIEZST00gdGJsX3BsYXllcjogJyArIGVycik7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWIneOAgOacn+OAgOioreOAgOWumiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxubGV0IGd2OiBDX0dsb2JhbFZhcjtcclxubGV0IGdhOiBDX0dsb2JhbEFyZ3VtZW50cztcclxuXHJcbmZ1bmN0aW9uIGluaXQob2JqOiBJX0dsb2JhbEFyZ3VtZW50cyk6IHZvaWQge1xyXG4gICAgZ3YgPSBuZXcgQ19HbG9iYWxWYXIoKTtcclxuICAgIGdhID0gbmV3IENfR2xvYmFsQXJndW1lbnRzKG9iaik7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gZmlubCgpOiB2b2lkIHtcclxuICAgIGd2LmZpbmwoKTtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vL1xyXG4vLy8vLyAgICAg44Kv44Op44K55a6j6KiAXHJcbi8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIOWkp+Wfn+WkieaVsOOBruioreWumlxyXG5jbGFzcyBDX0dsb2JhbFZhciB7XHJcbiAgICBwdWJsaWMgbWVzOiBDX0RzcE1lc3NhZ2U7XHJcblxyXG4gICAgcHVibGljIGRiX2hvc3Q6ICAgc3RyaW5nID0gXCJzcWxcIjtcclxuICAgIHB1YmxpYyBkYl9wb3J0OiAgIG51bWJlciA9ICAzMzA2O1xyXG4gICAgcHVibGljIGRiX25hbWU6ICAgc3RyaW5nID0gXCJkYl9tYWlcIjtcclxuICAgIHB1YmxpYyBkYl91c2VyOiAgIHN0cmluZyA9IFwiaXRzYXlubzMzXCI7XHJcbiAgICBwdWJsaWMgZGJfcGFzczogICBzdHJpbmcgPSBcIlBFMzMzODMzXCI7XHJcblxyXG4gICAgcHVibGljIGRiX3Bvb2w6ICAgbXlzcWwuUG9vbDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tZXMgICAgID0gbmV3IENfRHNwTWVzc2FnZSggLyogaXNIVE1MID0gKi8gZmFsc2UpO1xyXG5cclxuICAgICAgICB0aGlzLmRiX3Bvb2wgPSBteXNxbC5jcmVhdGVQb29sKHtcclxuICAgICAgICAgICAgaG9zdDogICAgICB0aGlzLmRiX2hvc3QsXHJcbiAgICAgICAgICAgIHBvcnQ6ICAgICAgdGhpcy5kYl9wb3J0LFxyXG4gICAgICAgICAgICB1c2VyOiAgICAgIHRoaXMuZGJfdXNlcixcclxuICAgICAgICAgICAgcGFzc3dvcmQ6ICB0aGlzLmRiX3Bhc3MsXHJcbiAgICAgICAgICAgIGRhdGFiYXNlOiAgdGhpcy5kYl9uYW1lLFxyXG4gICAgICAgICAgICBjb25uZWN0aW9uTGltaXQ6ICAgICAxMCwgLy8g5o6l57aa44KS5by144KK57aa44GR44KL5pWwXHJcbiAgICAgICAgICAgIHdhaXRGb3JDb25uZWN0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgbmFtZWRQbGFjZWhvbGRlcnM6IHRydWUsXHJcbiAgICAgICAgICAgIGpzb25TdHJpbmdzOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZpbmwoKSB7XHJcbiAgICAgICAgdGhpcy5kYl9wb29sLmVuZCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBQT1NU5byV5pWw44Gu6Kit5a6aXHJcbmNsYXNzIENfR2xvYmFsQXJndW1lbnRzIHtcclxuICAgIHB1YmxpYyBtb2RlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGlkOiAgbnVtYmVyID0gLTE7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9iajogSV9HbG9iYWxBcmd1bWVudHN8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlID0gb2JqPy5tb2RlID8/ICd1bmtub3duJztcclxuICAgICAgICB0aGlzLnBpZCAgPSBvYmo/LnBpZCAgIT09IHVuZGVmaW5lZCAmJiAhaXNOYU4ob2JqLnBpZCkgID8gTnVtYmVyKG9iai5waWQpICA6IC0xO1xyXG4vL2RlYnVnICAgICAgICBjb25zb2xlLmxvZyhgbW9kZT0ke3RoaXMubW9kZX0sIHBpZCA9ICR7dGhpcy5waWR9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbm1vZHVsZS5leHBvcnRzID0gbmV3R2FtZTtcclxubW9kdWxlLmV4cG9ydHMgPSBuZXdIZXJvO1xyXG4qLyIsIi8vIOWIqeeUqOOCr+ODqeOCueetieOBruiqreOBv+i+vOOBv1xyXG5cclxuLy8g44Ko44Op44O844Oh44OD44K744O844K4562J44KS5L+d5a2Y44O76KGo56S644GZ44KL44Kv44Op44K5XHJcbmltcG9ydCB7IENfRHNwTWVzc2FnZSB9ICAgZnJvbSAnQGRfdXRsL0NfRHNwTWVzc2FnZSc7XHJcblxyXG4vLyDjg4Djg7Pjgrjjg6fjg7Pjg57jg4Pjg5fjga7jgrvjg6vjga7nqK7poZ7jgpLooajjgZnliJfmjJnlnotcclxuaW1wb3J0IHsgVF9NektpbmQgfSAgICAgICBmcm9tICAnQGRfbWRsL1RfTXpLaW5kJztcclxuXHJcbi8vIOaWueWQkeOCkuihqOOBmeOCr+ODqeOCuVxyXG5pbXBvcnQgeyBDX1BvaW50RGlyLCBUX0RpcmVjdGlvbiB9ICAgZnJvbSAgJ0BkX21kbC9DX1BvaW50RGlyJztcclxuXHJcbi8vIOS9jee9ruODu+e1jOi3r+OCkuihqOOBmeOCr+ODqeOCueWFqOiIrFxyXG5pbXBvcnQgeyBDX01vdmFibGVQb2ludCB9ICAgICAgICAgICAgZnJvbSAnQGRfbWRsL0NfTW92YWJsZVBvaW50JztcclxuXHJcbi8vIE1BWkXplqLkv4Ljgq/jg6njgrnlhajoiKxcclxuaW1wb3J0IHsgQ19NYXplIH0gICAgICAgICAgICAgICAgICAgIGZyb20gJ0BkX21kbC9DX01hemUnO1xyXG5pbXBvcnQgeyBDX01hemVJbmZvLCBKU09OX01hemVJbmZvIH0gZnJvbSAnQGRfbWRsL0NfTWF6ZUluZm8nOyAvLyBNYXpl5L2c5oiQ44Gu44OG44Oz44OX44Os44O844OI5oOF5aCxXHJcblxyXG4vLyDjg5Hjg7zjg4bjgqPjg7zjgq/jg6njgrnlhajoiKxcclxuaW1wb3J0IHsgQ19UZWFtIH0gICAgICAgICBmcm9tICdAZF9tZGwvQ19UZWFtJztcclxuXHJcbi8vIOODkuODvOODreODvOOCr+ODqeOCueWFqOiIrFxyXG5pbXBvcnQgeyBDX0hlcm8gfSAgICAgICAgIGZyb20gJ0BkX21kbC9DX0hlcm8nO1xyXG5cclxuLy8g44K744O844OW44OH44O844K/KOOCr+ODqeOCpOOCouODs+ODiOOBqOOBrumAo+aQuinlhajoiKxcclxuaW1wb3J0IHsgQ19TYXZlRGF0YSwgSlNPTl9TYXZlRGF0YSB9IGZyb20gJ0BkX21kbC9DX1NhdmVEYXRhJztcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDkuLvjgIDlh6bjgIDnkIYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmxldCBndjogQ19HbG9iYWxWYXI7XHJcbmxldCBnYTogQ19HbG9iYWxBcmd1bWVudHM7XHJcblxyXG5pbnRlcmZhY2UgSV9HbG9iYWxBcmd1bWVudHMge1xyXG4gICAgbW9kZT86IHN0cmluZztcclxuICAgIG5tYnI/OiBudW1iZXI7XHJcbiAgICBwaWQ/OiAgbnVtYmVyO1xyXG4gICAgdGVhbT86IHN0cmluZztcclxuICAgIG1hemU/OiBzdHJpbmc7XHJcbiAgICBtYXplX25hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJX1JldHVybiB7XHJcbiAgICBlY29kZTogbnVtYmVyO1xyXG4gICAgZW1zZzogIHN0cmluZztcclxuICAgIHNhdmU/OiBKU09OX1NhdmVEYXRhO1xyXG4gICAgZGF0YT86IG9iamVjdDtcclxufVxyXG5cclxuLy8gR2V0dGluZyBJbmZvcm1hdGlvbiBvZiBBbGwgTWF6ZVxyXG5leHBvcnQgZnVuY3Rpb24gYWxsTWF6ZShvYmo6IElfR2xvYmFsQXJndW1lbnRzKTogSV9SZXR1cm4ge1xyXG4gICAgaW5pdChvYmopO1xyXG5cclxuICAgIGNvbnN0IG1hemVfaW5mb19hcnJheTogSlNPTl9NYXplSW5mb1tdID0gW107XHJcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gZ3YubWF6ZWluZm8pIG1hemVfaW5mb19hcnJheS5wdXNoKGd2Lm1hemVpbmZvW25hbWVdLmVuY29kZSgpKTtcclxuICAgIHJldHVybiBhbGxfZW5jb2RlKFxyXG4gICAgICAgIDAsIFxyXG4gICAgICAgIHttYXplaW5mbzogbWF6ZV9pbmZvX2FycmF5fSxcclxuICAgICk7XHJcbn1cclxuXHJcbi8vIEdldHRpbmcgTmV3IE1hemVcclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1hemUob2JqOiBJX0dsb2JhbEFyZ3VtZW50cyk6IElfUmV0dXJuIHtcclxuICAgIGluaXQob2JqKTtcclxuXHJcbiAgICBjb25zdCBbbmV3X21hemUsIG5ld19wb3NdID0gY3JlYXRlX21hemUoZ2EubWF6ZV9uYW1lKTsgXHJcbiAgICByZXR1cm4gYWxsX2VuY29kZShcclxuICAgICAgICAwLCBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1hemU6IG5ld19tYXplLmVuY29kZSgpLFxyXG4gICAgICAgICAgICBwb3M6ICBuZXdfcG9zLFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG59XHJcblxyXG4vLyBHZXR0aW5nIE5ldyBHYW1lIHN0YXJ0aWluZyBmcm9tIE1hemVcclxuZXhwb3J0IGZ1bmN0aW9uIG5ld01hemUob2JqOiBJX0dsb2JhbEFyZ3VtZW50cyk6IElfUmV0dXJuIHtcclxuICAgIGluaXQob2JqKTtcclxuXHJcbiAgICBjb25zdCBbbmV3X21hemUsIG5ld19wb3NdID0gY3JlYXRlX21hemUoJycpOyBcclxuICAgIGNvbnN0ICBuZXdfdGVhbSA9IGNyZWF0ZV90ZWFtKG5ld19tYXplLCBuZXdfcG9zKTsgXHJcbiAgICBjb25zdCAgbmV3X3NhdmUgPSBjcmVhdGVfc2F2ZShuZXdfbWF6ZSwgbmV3X3RlYW0pO1xyXG4gICAgY29uc3QgIHJldF9KU09OID0gc2F2ZV9lbmNvZGUoMCwgbmV3X3NhdmUpO1xyXG4gICAgcmV0dXJuIHJldF9KU09OO1xyXG59XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8gICDjgrXjg5bjg6vjg7zjg4Hjg7NcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZnVuY3Rpb24gZXJyX2VuY29kZShjb2RlOiBudW1iZXIsIG1zZ3M6IHN0cmluZ1tdKTogSV9SZXR1cm4ge1xyXG4gICAgY29uc3QgcmV0X2Fzc29jOiBJX1JldHVybiA9IHtlY29kZTpjb2RlLCBlbXNnOiAnJ307XHJcbiAgICBmb3IgKGNvbnN0IG1zZyBvZiBtc2dzKSByZXRfYXNzb2MuZW1zZyArPSBtc2c7IFxyXG4gICAgcmV0dXJuIHJldF9hc3NvYztcclxufVxyXG5cclxuZnVuY3Rpb24gYWxsX2VuY29kZShjb2RlOiBudW1iZXIsIGRhdGE6IG9iamVjdCk6IElfUmV0dXJuIHtcclxuICAgIGNvbnN0IHJldF9hc3NvYzogSV9SZXR1cm4gPSB7ZWNvZGU6Y29kZSwgZW1zZzogJyd9O1xyXG5cclxuICAgIHJldF9hc3NvYy5lY29kZSA9IGNvZGU7XHJcbiAgICBpZiAoY29kZSAhPT0gMCB8fCBndi5tZXMuaXNfZXJyKCkpIHtcclxuICAgICAgICByZXR1cm4gZXJyX2VuY29kZShjb2RlLCBndi5tZXMuZ2V0X2Vycl9tZXNzYWdlcygpKTtcclxuICAgIH1cclxuICAgIHJldF9hc3NvYy5lbXNnID0gJ1N0YXR1cyBPSyc7XHJcbiAgICByZXRfYXNzb2MuZGF0YSA9ICBkYXRhO1xyXG5cclxuICAgIHJldHVybiByZXRfYXNzb2M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVfZW5jb2RlKGNvZGU6IG51bWJlciwgc2F2ZTogQ19TYXZlRGF0YSk6IElfUmV0dXJuIHtcclxuICAgIGNvbnN0IHJldF9hc3NvYzogSV9SZXR1cm4gPSB7ZWNvZGU6Y29kZSwgZW1zZzogJyd9O1xyXG5cclxuICAgIGlmIChjb2RlICE9PSAwIHx8IGd2Lm1lcy5pc19lcnIoKSkge1xyXG4gICAgICAgIHJldHVybiBlcnJfZW5jb2RlKGNvZGUsIGd2Lm1lcy5nZXRfZXJyX21lc3NhZ2VzKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0X2Fzc29jLmVtc2cgPSAnU3RhdHVzIE9LJztcclxuICAgIHJldF9hc3NvYy5zYXZlID0gc2F2ZS5lbmNvZGUoKTtcclxuXHJcbiAgICByZXR1cm4gcmV0X2Fzc29jO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlX3NhdmUobWF6ZTogQ19NYXplLCB0ZWFtOiBDX1RlYW0pOiBDX1NhdmVEYXRhIHtcclxuICAgIHJldHVybiBuZXcgQ19TYXZlRGF0YSh7XHJcbiAgICAgICAgcGxheWVyX2lkOiBnYS5waWQsXHJcbiAgICAgICAgYXV0b19tb2RlOiAnMCcsXHJcbiAgICAgICAgaXNfYWN0aXZlOiAnMScsXHJcbiAgICAgICAgaXNfZGVsZXRlOiAnMCcsXHJcblxyXG4gICAgICAgIGFsbF90ZWFtOiAgW3RlYW0uZW5jb2RlKCldLFxyXG4gICAgICAgIGFsbF9tYXplOiAgW21hemUuZW5jb2RlKCldLFxyXG4gICAgICAgIGFsbF9ndWxkOiAgW10sIFxyXG4gICAgICAgIGFsbF9tdnB0OiAgW10sIFxyXG5cclxuICAgICAgICBteXBvczogICAgIHRlYW0uZ2V0X2xvYygpLmVuY29kZSgpLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZV9tYXplKG1hemVfbmFtZTogc3RyaW5nID0gJycpOiBbQ19NYXplLCBDX1BvaW50RGlyXSB7XHJcbiAgICBsZXQgbWF6ZTogQ19NYXplO1xyXG4gICAgaWYgKG1hemVfbmFtZSA9PSAnJykge1xyXG4gICAgICAgIG1hemUgPSBuZXcgQ19NYXplKHtcclxuICAgICAgICAgICAgJ25hbWUnICA6ICflp4vjgb7jgorjga7ov7flrq4nLCBcclxuICAgICAgICAgICAgJ3NpemVfeCc6IDIxLCBcclxuICAgICAgICAgICAgJ3NpemVfeSc6IDIxLCBcclxuICAgICAgICAgICAgJ3NpemVfeic6IGd2Lk1heF9vZl9NYXplX0Zsb29yXHJcbiAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbWF6ZWluZm8gPSBndi5tYXplaW5mb1ttYXplX25hbWVdO1xyXG4gICAgICAgIG1hemUgPSBuZXcgQ19NYXplKHtcclxuICAgICAgICAgICAgJ25hbWUnOiAgIG1hemVpbmZvLm1ibmFtZSwgXHJcbiAgICAgICAgICAgICdzaXplX3gnOiBtYXplaW5mby5zaXplX3gsIFxyXG4gICAgICAgICAgICAnc2l6ZV95JzogbWF6ZWluZm8uc2l6ZV95LCBcclxuICAgICAgICAgICAgJ3NpemVfeic6IG1hemVpbmZvLnNpemVfelxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXplLmdldF96X21heCgpOyBpKyspIHtcclxuICAgICAgICBtYXplLmNyZWF0ZV9tYXplKGkpO1xyXG4gICAgfSBcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbWF6ZS5nZXRfel9tYXgoKTsgaSsrKSB7XHJcbiAgICAgICAgbWF6ZS5jcmVhdGVfc3RhaXIoaSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwb3MgPSBtYXplLmNyZWF0ZV9zdGFpcigwKTtcclxuICAgIHJldHVybiBbbWF6ZSwgcG9zXTtcclxufVxyXG5cclxuLy8g6L+35a6u5o6i57SiIOaWsOimj+OCsuODvOODoOeUqOOBruaaq+WumueJiOWHpue9ruOAguOBneOBruS6jFxyXG5mdW5jdGlvbiBjcmVhdGVfaHJlcygpOiBDX0hlcm9bXSB7XHJcbiAgICBjb25zdCBocmVzOiBDX0hlcm9bXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMzsgaSsrKSB7XHJcbiAgICAgICAgaHJlcy5wdXNoKG5ldyBDX0hlcm8oKS5yYW5kb21fbWFrZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaHJlcztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlX3RlYW0obWF6ZTogQ19NYXplLCBwb3M6IENfUG9pbnREaXIpOiBDX1RlYW0ge1xyXG4vKlxyXG4gICAgJHggPSAyICogcmFuZG9tX2ludCgwLCAoKCRtYXplLT5nZXRfc2l6ZV94KCkgLSAxKSAvIDIpIC0gMSkgKyAxO1xyXG4gICAgJHkgPSAyICogcmFuZG9tX2ludCgwLCAoKCRtYXplLT5nZXRfc2l6ZV95KCkgLSAxKSAvIDIpIC0gMSkgKyAxO1xyXG4gICAgJHogPSAwOyAgLy8gICAgJHogPSAxICogcmFuZG9tX2ludCgwLCAgKCRndi0+bWF6ZS0+Z2V0X3NpemVfeigpIC0gMSkpO1xyXG5cclxuICAgICRkID0gcmFuZG9tX2ludCgwLCBEaXJlY3Q6Ok1BWCk7XHJcbiovXHJcbmNvbnN0IHRlYW0gPSBuZXcgQ19UZWFtKCk7XHJcbmNvbnN0IGxvYyAgPSBuZXcgQ19Nb3ZhYmxlUG9pbnQoKS5kZWNvZGUoe1xyXG4gICAgICAgICdraW5kJyAgIDogJ01hemUnLFxyXG4gICAgICAgICduYW1lJyAgIDogIG1hemUuZ2V0X25hbWUoKSxcclxuICAgICAgICAnbG9jX3VpZCc6ICBtYXplLnVpZCgpLFxyXG4gICAgICAgICdsb2NfcG9zJzogIHBvcyxcclxuICAgICAgICAndGVhbV91aWQnOiB0ZWFtLnVpZCgpLFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgJ2xvY19wb3MnID0+IFtcclxuICAgICAgICAgICAgJ3gnICAgPT4gJHgsXHJcbiAgICAgICAgICAgICd5JyAgID0+ICR5LFxyXG4gICAgICAgICAgICAneicgICA9PiAkeixcclxuICAgICAgICAgICAgJ2QnICAgPT4gJGQsXHJcbiAgICAgICAgXSxcclxuKi9cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB0ZWFtLnNldF9wcnAoeyduYW1lJzogJ+OBsuOCiOOBk+OBleOCk+ODgeODvOODoCd9KTtcclxuICAgIHRlYW0uc2V0X2xvYyhsb2MpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMzsgaSsrKSB7XHJcbiAgICAgICAgdGVhbS5hZGRfaGVybyhuZXcgQ19IZXJvKCkucmFuZG9tX21ha2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRlYW07XHJcbn1cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDliJ3jgIDmnJ/jgIDoqK3jgIDlrpogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmZ1bmN0aW9uIGluaXQob2JqOiBJX0dsb2JhbEFyZ3VtZW50cyk6IHZvaWQge1xyXG4gICAgZ3YgPSBuZXcgQ19HbG9iYWxWYXIoKTtcclxuICAgIGdhID0gbmV3IENfR2xvYmFsQXJndW1lbnRzKG9iaik7XHJcbiAgICByZXR1cm47XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy9cclxuLy8vLy8gICAgIOOCr+ODqeOCueWuo+iogFxyXG4vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyDlpKfln5/lpInmlbDjga7oqK3lrppcclxuY2xhc3MgQ19HbG9iYWxWYXIge1xyXG4gICAgcHVibGljIG1lczogQ19Ec3BNZXNzYWdlO1xyXG5cclxuICAgIHB1YmxpYyBtYXplaW5mbzoge1ttYXplX25hbWU6IHN0cmluZ106IENfTWF6ZUluZm99ID0ge307XHJcbi8vICAgIHB1YmxpYyBtYXplOiAgICAgQ19NYXplO1xyXG4gICAgcHVibGljIHRlYW06ICAgICBDX1RlYW07XHJcbiAgICBwdWJsaWMgaGVyb2VzOiAgIENfSGVyb1tdID0gW107XHJcblxyXG4gICAgcHVibGljIE1hemVfc2l6ZV94ICAgICAgID0gMjE7XHJcbiAgICBwdWJsaWMgTWF6ZV9zaXplX3kgICAgICAgPSAyMTtcclxuICAgIHB1YmxpYyBMaW1pdF9vZl9yb29tICAgICA9IDU7XHJcbiAgICBwdWJsaWMgTWF4X3NpemVfb2Zfcm9vbSAgPSAzO1xyXG4gICAgcHVibGljIE1heF9vZl9NYXplX0Zsb29yID0gMztcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tZXMgPSBuZXcgQ19Ec3BNZXNzYWdlKCAvKiBpc0hUTUwgPSAqLyBmYWxzZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hemVpbmZvID0gQ19NYXplSW5mby5nZXRfdGJsX2FsbCgpOyBcclxuICAgICAgICBmb3IgKGNvbnN0IG1pIG9mIG1hemVpbmZvKSB0aGlzLm1hemVpbmZvW21pLm5hbWVdID0gbWk7IFxyXG4vKlxyXG4gICAgICAgIGNvbnN0IFtyc2x0LCBtYXplaW5mb10gID0gQ19NYXplSW5mby5nZXRfdGJsX2FsbCgpO1xyXG4gICAgICAgIHRoaXMubWF6ZWluZm8gPSAocnNsdCAhPT0gdW5kZWZpbmVkKSA/IG1hemVpbmZvIDogW107IFxyXG4qL1xyXG4vKlxyXG4gICAgICAgIHRoaXMubWF6ZSAgICAgICAgPSBuZXcgQ19NYXplKCkuY3JlYXRlX21ha2Uoe1xyXG4gICAgICAgICAgICBzaXplX3g6ICAgIHRoaXMuTWF6ZV9zaXplX3gsXHJcbiAgICAgICAgICAgIHNpemVfeTogICAgdGhpcy5NYXplX3NpemVfeSxcclxuICAgICAgICAgICAgc2l6ZV96OiAgICB0aGlzLk1heF9vZl9NYXplX0Zsb29yLCBcclxuICAgICAgICAgICAgZmlsbF9raW5kOiBUX016S2luZC5FbXB0eSxcclxuICAgICAgICAgICAgbWF4X3Jvb206ICB0aGlzLkxpbWl0X29mX3Jvb20sXHJcbiAgICAgICAgICAgIHJvb21fc2l6ZTogdGhpcy5NYXhfc2l6ZV9vZl9yb29tLFxyXG4gICAgfSk7XHJcbiovXHJcbiAgICAgICAgdGhpcy50ZWFtICAgICAgICA9ICBuZXcgQ19UZWFtKHtuYW1lOiAnTmV3IFRlYW0nLCB4OjEsIHk6MSwgejoxLCBkOlRfRGlyZWN0aW9uLk59KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIFBPU1TlvJXmlbDjga7oqK3lrppcclxuY2xhc3MgQ19HbG9iYWxBcmd1bWVudHMge1xyXG4gICAgcHVibGljIG1vZGU6ICAgICAgc3RyaW5nO1xyXG4gICAgcHVibGljIHBpZDogICAgICAgbnVtYmVyICAgPSAgMTtcclxuICAgIHB1YmxpYyBtYXplX25hbWU6IHN0cmluZyAgID0gJyc7XHJcblxyXG4vKlxyXG4gICAgcHVibGljIHRlYW1fSlNPTjogc3RyaW5nICAgPSAnJztcclxuICAgIHB1YmxpYyBtYXplX0pTT046IHN0cmluZyAgID0gJyc7XHJcbiovXHJcblxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvYmo6IElfR2xvYmFsQXJndW1lbnRzKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlICAgICAgPSBvYmo/Lm1vZGUgPz8gJ3Vua25vd24nO1xyXG4gICAgICAgIHRoaXMucGlkICAgICAgID0gb2JqPy5waWQgICE9PSB1bmRlZmluZWQgJiYgIWlzTmFOKG9iai5waWQpID8gTnVtYmVyKG9iai5waWQpIDogMTtcclxuICAgICAgICB0aGlzLm1hemVfbmFtZSA9IG9iaj8ubWF6ZV9uYW1lID8/ICcnO1xyXG4vKlxyXG4gICAgICAgIHRoaXMudGVhbV9KU09OID0gb2JqPy50ZWFtICAgICAgPz8gJyc7XHJcbiAgICAgICAgdGhpcy5tYXplX0pTT04gPSBvYmo/Lm1hemUgICAgICA/PyAnJztcclxuKi9cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbnRlcmZhY2UgfSBmcm9tICdyZWFkbGluZSc7XHJcbmltcG9ydCB7bmV3R3VsZCwgYWxsSHJlc30gZnJvbSAnLi4vbGliL19KU09OX21haV9ndWxkJ1xyXG5pbXBvcnQgY3JlYXRlRXJyb3IgIGZyb20gJ2h0dHAtZXJyb3JzJztcclxuXHJcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG52YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbi8qIEdFVCB1c2VycyBsaXN0aW5nLiAqL1xyXG5yb3V0ZXIuZ2V0ICgnLycsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSBtYWlHdWxkJyk7XHJcbn0pO1xyXG5cclxucm91dGVyLnBvc3QoJy9uZXdHdWxkJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgdHJ5IHtcclxuLy9kZWJ1ZyAgICBmb3IgKGNvbnN0IGtleSBpbiByZXEuYm9keSkgY29uc29sZS5lcnJvcihgcmVxLiR7a2V5fTogJHtyZXEuYm9keVtrZXldfWApO1xyXG5cclxuICAgIGNvbnN0IHJldCA9IG5ld0d1bGQocmVxLmJvZHkpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApO1xyXG4gICAgcmVzLnNlbmQoSlNPTi5zdHJpbmdpZnkocmV0LCBudWxsLCBcIlxcdFwiKSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgbmV3R2FtZSBQT1NUIGVycm9yOiAke2Vycn1gKTtcclxuICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XHJcbiAgfVxyXG59KTtcclxucm91dGVyLmdldCAoJy9uZXdHdWxkJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIE5ldyBHYW1lIFRvIEd1bGQgb2YgbWFpJyk7XHJcbn0pO1xyXG5cclxucm91dGVyLnBvc3QoJy9hbGxIcmVzJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgdHJ5IHtcclxuLy9kZWJ1ZyAgICBmb3IgKGNvbnN0IGtleSBpbiByZXEuYm9keSkgY29uc29sZS5lcnJvcihgcmVxLiR7a2V5fTogJHtyZXEuYm9keVtrZXldfWApO1xyXG5cclxuICAgIGNvbnN0IHJldCA9IGFsbEhyZXMocmVxLmJvZHkpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApO1xyXG4gICAgcmVzLnNlbmQoSlNPTi5zdHJpbmdpZnkocmV0LCBudWxsLCBcIlxcdFwiKSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgbmV3SHJlcyBQT1NUIGVycm9yOiAke2Vycn1gKTtcclxuICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbnJvdXRlci5nZXQgKCcvYWxsSHJlcycsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggR2V0dGluZyBBbGwgSHJlcyBkYXRhIG9mIG1haScpO1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xyXG4iLCJpbXBvcnQgeyBpbmZvLCBsb2FkLCBzYXZlIH0gZnJvbSAnLi4vbGliL19KU09OX21haV9sZHN2J1xyXG5pbXBvcnQgeyB0ZXN0IH0gICAgICAgICAgICAgZnJvbSAnLi4vbGliL19KU09OX21haV9sZHN2X3Rlc3QnXHJcbmltcG9ydCBjcmVhdGVFcnJvciAgICAgICAgICBmcm9tICdodHRwLWVycm9ycyc7XHJcblxyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG4vKiBHRVQgdXNlcnMgbGlzdGluZy4gKi9cclxucm91dGVyLmdldCAoJy8nLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcclxuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgbWFpTG9hZFNhdmUnKTtcclxufSk7XHJcblxyXG4vKlxyXG4qKiAgU2VuZCBTYXZlSW5mb1xyXG4qL1xyXG5yb3V0ZXIucG9zdCgnL19pbmZvJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbi8vZGVidWcgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXEuYm9keSkgY29uc29sZS5lcnJvcihgcmVxLiR7a2V5fTogJHtyZXEuYm9keVtrZXldfWApO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcnNsdCA9IGF3YWl0IGluZm8ocmVxLmJvZHkpO1xyXG4gICAgaWYgKHJzbHQuZWNvZGUgIT09IDApIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgKioqIGVycm9yOiAke3JzbHQuZWNvZGV9OiAke3JzbHQuZW1zZ30gKioqYCk7XHJcbiAgICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XHJcbiAgICB9XHJcbiAgICByZXMuc3RhdHVzKDIwMCk7XHJcbiAgICByZXMuc2VuZChKU09OLnN0cmluZ2lmeShyc2x0LCBudWxsLCBcIlxcdFwiKSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgTGRTdiBpbmZvIFBPU1QgZXJyb3I6ICR7ZXJyfWApO1xyXG4gICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcclxuICB9XHJcbn0pO1xyXG5yb3V0ZXIuZ2V0ICgnL19pbmZvJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIG1haUxkU3YgaW5mbycpO1xyXG59KTtcclxuXHJcblxyXG4vKlxyXG4qKiAgU2VuZCBMYW9kRGF0YVxyXG4qL1xyXG5yb3V0ZXIucG9zdCgnL19sb2FkJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbi8vZGVidWcgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXEuYm9keSkgY29uc29sZS5lcnJvcihgcmVxLiR7a2V5fTogJHtyZXEuYm9keVtrZXldfWApO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcnNsdCA9IGF3YWl0IGxvYWQocmVxLmJvZHkpO1xyXG4gICAgaWYgKHJzbHQuZWNvZGUgIT09IDApIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgKioqIGVycm9yOiAke3JzbHQuZWNvZGV9OiAke3JzbHQuZW1zZ30gKioqYCk7XHJcbiAgICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XHJcbiAgICB9XHJcbiAgICByZXMuc3RhdHVzKDIwMCk7XHJcbiAgICByZXMuc2VuZChKU09OLnN0cmluZ2lmeShyc2x0LCBudWxsLCBcIlxcdFwiKSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgTGRTdiBsb2FkIFBPU1QgZXJyb3I6ICR7ZXJyfWApO1xyXG4gICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcclxuICB9XHJcbn0pO1xyXG5yb3V0ZXIuZ2V0ICgnL19sb2FkJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIG1haUxkU3YgbG9hZCcpO1xyXG59KTtcclxuXHJcblxyXG4vKlxyXG4qKiAgU2VuZCBTYXZlRGF0YVxyXG4qL1xyXG5yb3V0ZXIucG9zdCgnL19zYXZlJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbi8vZGVidWcgICAgZm9yIChjb25zdCBrZXkgaW4gcmVxLmJvZHkpIGNvbnNvbGUuZXJyb3IoYHJlcS4ke2tleX06ICR7cmVxLmJvZHlba2V5XX1gKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJzbHQgPSBhd2FpdCBzYXZlKHJlcS5ib2R5KTtcclxuICAgIGlmIChyc2x0LmVjb2RlICE9PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYCoqKiBlcnJvcjogJHtyc2x0LmVjb2RlfTogJHtyc2x0LmVtc2d9ICoqKmApO1xyXG4gICAgICBuZXh0KGNyZWF0ZUVycm9yKDQwNikpO1xyXG4gICAgfVxyXG4gICAgcmVzLnN0YXR1cygyMDApO1xyXG4gICAgcmVzLnNlbmQoSlNPTi5zdHJpbmdpZnkocnNsdCwgbnVsbCwgXCJcXHRcIikpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coYExkU3Ygc2F2ZSBQT1NUIGVycm9yOiAke2Vycn1gKTtcclxuICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XHJcbiAgfVxyXG59KTtcclxucm91dGVyLmdldCAoJy9fc2F2ZScsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSBtYWlMZFN2IHNhdmUnKTtcclxufSk7XHJcblxyXG5cclxuXHJcbi8qXHJcbioqIEZvciBUZXN0IEZ1bmN0aW9uXHJcbiovXHJcbnJvdXRlci5wb3N0KCcvdGVzdCcsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHRyeSB7XHJcbi8vZGVidWcgICAgZm9yIChjb25zdCBrZXkgaW4gcmVxLmJvZHkpIGNvbnNvbGUuZXJyb3IoYHJlcS4ke2tleX06ICR7cmVxLmJvZHlba2V5XX1gKTtcclxuXHJcbiAgICBjb25zdCByc2x0ID0gYXdhaXQgdGVzdChyZXEuYm9keSk7XHJcbiAgICBpZiAocnNsdC5lY29kZSAhPT0gMCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGAqKiogZXJyb3I6ICR7cnNsdC5lY29kZX06ICR7cnNsdC5lbXNnfSAqKipgKTtcclxuICAgICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXMucmVuZGVyKCdwYWdlcy90ZXN0JywgcnNsdCk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGBuZXdMb2FkIFBPU1QgZXJyb3I6ICR7ZXJyfWApO1xyXG4gICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcclxuICB9XHJcbn0pO1xyXG5yb3V0ZXIuZ2V0ICgnL3Rlc3QnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcclxuICB0cnkge1xyXG4vL2RlYnVnICAgIGZvciAoY29uc3Qga2V5IGluIHJlcS5ib2R5KSBjb25zb2xlLmVycm9yKGByZXEuJHtrZXl9OiAke3JlcS5ib2R5W2tleV19YCk7XHJcblxyXG4gICAgcmVzLnJlbmRlcigncGFnZXMvdGVzdCcse3BpZDogLTF9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGBuZXdMb2FkIFBPU1QgZXJyb3I6ICR7ZXJyfWApO1xyXG4gICAgbmV4dChjcmVhdGVFcnJvcig0MDYpKTtcclxuICB9XHJcbi8vICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgTG9hZCBUZXN0ICBvZiBtYWknKTtcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcclxuIiwiaW1wb3J0IHsgYWxsTWF6ZSwgZ2V0TWF6ZSwgbmV3TWF6ZSB9ICBmcm9tICcuLi9saWIvX0pTT05fbWFpX21hemUnO1xyXG5pbXBvcnQgY3JlYXRlRXJyb3IgIGZyb20gJ2h0dHAtZXJyb3JzJztcclxuXHJcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG52YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbi8qIEdFVCB1c2VycyBsaXN0aW5nLiAqL1xyXG5yb3V0ZXIuZ2V0ICgnLycsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSBtYWlNYXplJyk7XHJcbn0pO1xyXG5cclxucm91dGVyLnBvc3QoJy9uZXdNYXplJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgdHJ5IHtcclxuLy9kZWJ1ZyAgICBmb3IgKGNvbnN0IGtleSBpbiByZXEuYm9keSkgY29uc29sZS5lcnJvcihgcmVxLiR7a2V5fTogJHtyZXEuYm9keVtrZXldfWApO1xyXG5cclxuICAgIGNvbnN0IHJldCA9IG5ld01hemUocmVxLmJvZHkpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApO1xyXG4gICAgcmVzLnNlbmQoSlNPTi5zdHJpbmdpZnkocmV0LCBudWxsLCBcIlxcdFwiKSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgbmV3R2FtZSBQT1NUIGVycm9yOiAke2Vycn1gKTtcclxuICAgIG5leHQoY3JlYXRlRXJyb3IoNDA2KSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbnJvdXRlci5nZXQgKCcvbmV3TWF6ZScsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSBOZXcgR2FtZSBUbyBNYXplIG9mIG1haScpO1xyXG59KTtcclxuXHJcbnJvdXRlci5wb3N0KCcvZ2V0TWF6ZScsIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHRyeSB7XHJcbi8vZGVidWcgICAgZm9yIChjb25zdCBrZXkgaW4gcmVxLmJvZHkpIGNvbnNvbGUuZXJyb3IoYHJlcS4ke2tleX06ICR7cmVxLmJvZHlba2V5XX1gKTtcclxuXHJcbiAgICBjb25zdCByZXQgPSBnZXRNYXplKHJlcS5ib2R5KTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKTtcclxuICAgIHJlcy5zZW5kKEpTT04uc3RyaW5naWZ5KHJldCwgbnVsbCwgXCJcXHRcIikpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coYG5ld01hemUgUE9TVCBlcnJvcjogJHtlcnJ9YCk7XHJcbiAgICBuZXh0KGNyZWF0ZUVycm9yKDQwNikpO1xyXG4gIH1cclxufSk7XHJcblxyXG5yb3V0ZXIuZ2V0ICgnL2dldE1hemUnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcclxuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIEdldHRpbmcgTmV3IE1hemUgZGF0YSBvZiBtYWknKTtcclxufSk7XHJcblxyXG5cclxucm91dGVyLnBvc3QoJy9hbGxNYXplJywgYXN5bmMgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgdHJ5IHtcclxuLy9kZWJ1ZyAgICBmb3IgKGNvbnN0IGtleSBpbiByZXEuYm9keSkgY29uc29sZS5lcnJvcihgcmVxLiR7a2V5fTogJHtyZXEuYm9keVtrZXldfWApO1xyXG5cclxuICAgIGNvbnN0IHJldCA9IGFsbE1hemUocmVxLmJvZHkpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApO1xyXG4gICAgcmVzLnNlbmQoSlNPTi5zdHJpbmdpZnkocmV0LCBudWxsLCBcIlxcdFwiKSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgbWF6ZUluZm8gUE9TVCBlcnJvcjogJHtlcnJ9YCk7XHJcbiAgICBuZXh0KGNyZWF0ZUVycm9yKDQwNikpO1xyXG4gIH1cclxufSk7XHJcblxyXG5yb3V0ZXIuZ2V0ICgnL2FsbE1hemUnLCBhc3luYyAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcclxuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIEFsbCBNYXplIEluZm9tYXRpb24gb2YgbWFpJyk7XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5cclxudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbnZhciBtYWlHdWxkUm91dGVyID0gcmVxdWlyZSgnLi9tYWlHdWxkJyk7XHJcbnZhciBtYWlNYXplUm91dGVyID0gcmVxdWlyZSgnLi9tYWlNYXplJyk7XHJcbnZhciBtYWlMZFN2Um91dGVyID0gcmVxdWlyZSgnLi9tYWlMZFN2Jyk7XHJcblxyXG4vLyByb3V0ZXIgc2V0dXBcclxucm91dGVyLnVzZSgnL2d1bGQnLCAgIG1haUd1bGRSb3V0ZXIpO1xyXG5yb3V0ZXIudXNlKCcvbWF6ZScsICAgbWFpTWF6ZVJvdXRlcik7XHJcbnJvdXRlci51c2UoJy9sZHN2JywgICBtYWlMZFN2Um91dGVyKTtcclxuXHJcbi8qIEdFVCB1c2VycyBsaXN0aW5nLiAqL1xyXG5yb3V0ZXIuZ2V0KCcvJywgZnVuY3Rpb24ocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pIHtcclxuICByZXMuc2VuZCgncmVzcG9uZCB3aXRoIGEgbWFpZXgnKTtcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbnZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxuLyogR0VUIHVzZXJzIGxpc3RpbmcuICovXHJcbnJvdXRlci5nZXQoJy8nLCBmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xyXG4gIHJlcy5zZW5kKCdyZXNwb25kIHdpdGggYSB1c2VyIHJlc291cmNlJyk7XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwLWVycm9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXlzcWwyL3Byb21pc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9