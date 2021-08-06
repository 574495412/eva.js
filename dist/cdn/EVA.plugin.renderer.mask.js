(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@eva/eva.js'), require('@eva/plugin-renderer'), require('@eva/renderer-adapter')) :
    typeof define === 'function' && define.amd ? define(['exports', '@eva/eva.js', '@eva/plugin-renderer', '@eva/renderer-adapter'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.EVA = global.EVA || {}, global.EVA.plugin = global.EVA.plugin || {}, global.EVA.plugin.renderer = global.EVA.plugin.renderer || {}, global.EVA.plugin.renderer.mask = {}), global.EVA, global.EVA.plugin.renderer, global.EVA.rendererAdapter));
}(this, (function (exports, eva_js, pluginRenderer, rendererAdapter) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
<<<<<<< HEAD
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
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
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
=======
>>>>>>> origin/dev
    }

    var global = (typeof global !== "undefined" ? global :
      typeof self !== "undefined" ? self :
      typeof window !== "undefined" ? window : {});

    // shim for using process in browser
    // based off https://github.com/defunctzombie/node-process/blob/master/browser.js

    function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
    }
    function defaultClearTimeout () {
        throw new Error('clearTimeout has not been defined');
    }
    var cachedSetTimeout = defaultSetTimout;
    var cachedClearTimeout = defaultClearTimeout;
    if (typeof global.setTimeout === 'function') {
        cachedSetTimeout = setTimeout;
    }
    if (typeof global.clearTimeout === 'function') {
        cachedClearTimeout = clearTimeout;
    }

    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
        } catch(e){
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return cachedSetTimeout.call(null, fun, 0);
            } catch(e){
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return cachedSetTimeout.call(this, fun, 0);
            }
        }


    }
    function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
        } catch (e){
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return cachedClearTimeout.call(null, marker);
            } catch (e){
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return cachedClearTimeout.call(this, marker);
            }
        }



    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;

    function cleanUpNextTick() {
        if (!draining || !currentQueue) {
            return;
        }
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }

    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while(len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
    }
    function nextTick(fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
        }
    }
    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    var title = 'browser';
    var platform = 'browser';
    var browser = true;
    var env = {};
    var argv = [];
    var version = ''; // empty string to avoid regexp issues
    var versions = {};
    var release = {};
    var config = {};

    function noop() {}

    var on = noop;
    var addListener = noop;
    var once = noop;
    var off = noop;
    var removeListener = noop;
    var removeAllListeners = noop;
    var emit = noop;

    function binding(name) {
        throw new Error('process.binding is not supported');
    }

    function cwd () { return '/' }
    function chdir (dir) {
        throw new Error('process.chdir is not supported');
    }function umask() { return 0; }

    // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
    var performance = global.performance || {};
    var performanceNow =
      performance.now        ||
      performance.mozNow     ||
      performance.msNow      ||
      performance.oNow       ||
      performance.webkitNow  ||
      function(){ return (new Date()).getTime() };

    // generate timestamp or delta
    // see http://nodejs.org/api/process.html#process_process_hrtime
    function hrtime(previousTimestamp){
      var clocktime = performanceNow.call(performance)*1e-3;
      var seconds = Math.floor(clocktime);
      var nanoseconds = Math.floor((clocktime%1)*1e9);
      if (previousTimestamp) {
        seconds = seconds - previousTimestamp[0];
        nanoseconds = nanoseconds - previousTimestamp[1];
        if (nanoseconds<0) {
          seconds--;
          nanoseconds += 1e9;
        }
      }
      return [seconds,nanoseconds]
    }

    var startTime = new Date();
    function uptime() {
      var currentTime = new Date();
      var dif = currentTime - startTime;
      return dif / 1000;
    }

    var browser$1 = {
      nextTick: nextTick,
      title: title,
      browser: browser,
      env: env,
      argv: argv,
      version: version,
      versions: versions,
      on: on,
      addListener: addListener,
      once: once,
      off: off,
      removeListener: removeListener,
      removeAllListeners: removeAllListeners,
      emit: emit,
      binding: binding,
      cwd: cwd,
      chdir: chdir,
      umask: umask,
      hrtime: hrtime,
      platform: platform,
      release: release,
      config: config,
      uptime: uptime
    };

    function createCommonjsModule(fn) {
      var module = { exports: {} };
    	return fn(module, module.exports), module.exports;
    }

    var plugin_cjs_prod = createCommonjsModule(function (module, exports) {
    function t(t,r){return t.constructor.IDEProps||(t.constructor.IDEProps={}),t.constructor.IDEProps[r]||(t.constructor.IDEProps[r]={}),t.constructor.IDEProps[r]}Object.defineProperty(exports,"__esModule",{value:!0}),exports.step=function(r){return function(o,e){t(o,e).step=r;}},exports.type=function(r){return function(o,e){var n=t(o,e);n.key=e,n.type=r;}};
    });

    function getIDEPropsPropertyObj(target, propertyKey) {
        //@ts-ignore
        if (!target.constructor.IDEProps) {
            //@ts-ignore
            target.constructor.IDEProps = {};
        }
        if (!target.constructor.IDEProps[propertyKey]) {
            target.constructor.IDEProps[propertyKey] = {};
        }
        var propertyObj = target.constructor.IDEProps[propertyKey];
        return propertyObj;
    }

    function type(type) {
        return function (target, propertyKey) {
            var prop = getIDEPropsPropertyObj(target, propertyKey);
            //@ts-ignore
            prop.key = propertyKey;
            prop.type = type;
        };
    }

    function step(step) {
        return function (target, propertyKey) {
            var prop = getIDEPropsPropertyObj(target, propertyKey);
            //@ts-ignore
            prop.step = step;
        };
    }

    var step_1 = step;
    var type_1 = type;

    var plugin_cjs = /*#__PURE__*/Object.defineProperty({
    	step: step_1,
    	type: type_1
    }, '__esModule', {value: true});

    var inspectorDecorator = createCommonjsModule(function (module) {

    if (browser$1.env.NODE_ENV === 'production') {
      module.exports = plugin_cjs_prod;
    } else {
      module.exports = plugin_cjs;
    }
    });

    exports.MASK_TYPE = void 0;
    (function (MASK_TYPE) {
        MASK_TYPE["Circle"] = "Circle";
        MASK_TYPE["Ellipse"] = "Ellipse";
        MASK_TYPE["Rect"] = "Rect";
        MASK_TYPE["RoundedRect"] = "RoundedRect";
        MASK_TYPE["Polygon"] = "Polygon";
        MASK_TYPE["Img"] = "Img";
        MASK_TYPE["Sprite"] = "Sprite";
    })(exports.MASK_TYPE || (exports.MASK_TYPE = {}));
    class Mask$2 extends eva_js.Component {
        constructor() {
            super(...arguments);
            this.style = {};
            this.resource = '';
            this.spriteName = '';
        }
        init(obj) {
            Object.assign(this, obj);
<<<<<<< HEAD
        };
        Mask.componentName = 'Mask';
        __decorate([
            inspectorDecorator.type('string')
        ], Mask.prototype, "resource", void 0);
        __decorate([
            inspectorDecorator.type('string')
        ], Mask.prototype, "spriteName", void 0);
        return Mask;
    }(eva_js.Component));
=======
        }
    }
    Mask$2.componentName = 'Mask';
    __decorate([
        eva_js.decorators.IDEProp
    ], Mask$2.prototype, "type", void 0);
    __decorate([
        eva_js.decorators.IDEProp
    ], Mask$2.prototype, "style", void 0);
    __decorate([
        eva_js.decorators.IDEProp
    ], Mask$2.prototype, "resource", void 0);
    __decorate([
        eva_js.decorators.IDEProp
    ], Mask$2.prototype, "spriteName", void 0);
>>>>>>> origin/dev

    const resourceKeySplit = '_s|r|c_';
    const propertyForGraphics = {
        Circle: ['x', 'y', 'radius'],
        Ellipse: ['x', 'y', 'width', 'height'],
        Rect: ['x', 'y', 'width', 'height'],
        RoundedRect: ['x', 'y', 'width', 'height', 'radius'],
        Polygon: ['paths'],
    };
    const functionForGraphics = {
        Circle: 'drawCircle',
        Ellipse: 'drawEllipse',
        Rect: 'drawRect',
        RoundedRect: 'drawRoundedRect',
        Polygon: 'drawPolygon',
    };
    var MASK_TYPE;
    (function (MASK_TYPE) {
        MASK_TYPE["Circle"] = "Circle";
        MASK_TYPE["Ellipse"] = "Ellipse";
        MASK_TYPE["Rect"] = "Rect";
        MASK_TYPE["RoundedRect"] = "RoundedRect";
        MASK_TYPE["Polygon"] = "Polygon";
        MASK_TYPE["Img"] = "Img";
        MASK_TYPE["Sprite"] = "Sprite";
    })(MASK_TYPE || (MASK_TYPE = {}));
    let Mask = class Mask extends pluginRenderer.Renderer {
        constructor() {
            super(...arguments);
            this.name = 'Mask';
            this.changedCache = {};
            this.maskSpriteCache = {};
        }
        init() {
            this.renderSystem = this.game.getSystem(pluginRenderer.RendererSystem);
            this.renderSystem.rendererManager.register(this);
        }
        rendererUpdate() {
            this.changedCache = {};
        }
        componentChanged(changed) {
            if (changed.component.name !== 'Mask')
                return;
            switch (changed.type) {
                case eva_js.OBSERVER_TYPE.ADD:
                    this.add(changed);
                    break;
                case eva_js.OBSERVER_TYPE.REMOVE:
                    this.remove(changed);
                    break;
                case eva_js.OBSERVER_TYPE.CHANGE:
                    this.change(changed);
                    break;
            }
        }
        add(changed) {
            const component = changed.component;
            if (!(component.type in MASK_TYPE)) {
                throw new Error('no have Mask type: ' + component.type);
            }
            if (!component.style) {
                throw new Error('no have Mask style: ' + component.type);
            }
            let mask;
            switch (component.type) {
                case MASK_TYPE.Circle:
                    mask = this.createGraphics(component);
                    break;
                case MASK_TYPE.Ellipse:
                    mask = this.createGraphics(component);
                    break;
                case MASK_TYPE.Rect:
                    mask = this.createGraphics(component);
                    break;
                case MASK_TYPE.RoundedRect:
                    mask = this.createGraphics(component);
                    break;
                case MASK_TYPE.Polygon:
                    mask = this.createGraphics(component);
                    break;
                case MASK_TYPE.Img:
                    mask = this.createSprite(component);
                    break;
                case MASK_TYPE.Sprite:
                    mask = this.createSprite(component);
                    break;
            }
            if (!mask) {
                throw new Error('no have mask instance, check your mask params: ' + component.type);
            }
            const container = this.containerManager.getContainer(changed.gameObject.id);
            container.mask = mask;
            container.addChild(mask);
        }
        remove(changed) {
            const container = this.containerManager.getContainer(changed.gameObject.id);
            container.removeChild(container.mask);
            container.mask.destroy(true);
            container.mask = null;
            delete this.maskSpriteCache[changed.component.gameObject.id];
        }
        change(changed) {
            if (this.changedCache[changed.gameObject.id])
                return;
            const component = changed.component;
            if (changed.prop.prop[0] === 'type') {
                this.changedCache[changed.gameObject.id] = true;
                if ([MASK_TYPE.Sprite, MASK_TYPE.Img].indexOf(component.type) > -1) {
                    this.remove(changed);
                    this.add(changed);
                }
                else {
                    this.redrawGraphics(changed);
                }
            }
            else if (changed.prop.prop[0] === 'style') {
                if ([MASK_TYPE.Sprite, MASK_TYPE.Img].indexOf(component.type) > -1) {
                    this.changeSpriteStyle(component);
                }
                else {
                    this.redrawGraphics(changed);
                }
            }
            else if (changed.prop.prop[0] === 'resource') {
                this.changedCache[changed.gameObject.id] = true;
                this.changeSprite(component);
            }
            else if (changed.prop.prop[0] === 'spriteName') {
                this.changedCache[changed.gameObject.id] = true;
                this.changeSprite(component);
            }
        }
        createGraphics(component) {
            const graphics = new rendererAdapter.Graphics();
            this.draw(graphics, component);
            return graphics;
        }
        redrawGraphics(changed) {
            const container = this.containerManager.getContainer(changed.gameObject.id);
            const graphics = container.mask;
            graphics.clear();
            this.draw(graphics, changed.component);
        }
        draw(graphics, component) {
            const params = [];
            for (const key of propertyForGraphics[component.type]) {
                params.push(component.style[key]);
            }
            graphics.beginFill(0x000000, 1);
            graphics[functionForGraphics[component.type]](...params);
            graphics.endFill();
        }
        createSprite(component) {
            const sprite = new rendererAdapter.Sprite(null);
            this.maskSpriteCache[component.gameObject.id] = sprite;
            this.setSprite(component, sprite);
            return sprite.sprite;
        }
        changeSpriteStyle(component) {
            const sprite = this.maskSpriteCache[component.gameObject.id];
            sprite.sprite.width = component.style.width;
            sprite.sprite.height = component.style.height;
            sprite.sprite.position.x = component.style.x;
            sprite.sprite.position.y = component.style.y;
        }
        changeSprite(component) {
            const sprite = this.maskSpriteCache[component.gameObject.id];
            this.setSprite(component, sprite);
        }
        setSprite(component, sprite) {
            return __awaiter(this, void 0, void 0, function* () {
                let res;
                try {
                    res = yield eva_js.resource.getResource(component.resource);
                }
                catch (e) {
                    throw new Error('mask resource load error');
                }
                if (component.type === MASK_TYPE.Sprite) {
                    const img = component.resource + resourceKeySplit + component.spriteName;
                    const texture = res.instance[img];
                    sprite.image = texture;
                }
                else {
                    sprite.image = res.data.image;
                }
                sprite.sprite.width = component.style.width;
                sprite.sprite.height = component.style.height;
                sprite.sprite.position.x = component.style.x;
                sprite.sprite.position.y = component.style.y;
            });
        }
    };
    Mask.systemName = 'Mask';
    Mask = __decorate([
        eva_js.decorators.componentObserver({
            Mask: ['type', { prop: ['style'], deep: true }, 'resource', 'spriteName'],
        })
    ], Mask);
    var Mask$1 = Mask;

    exports.Mask = Mask$2;
    exports.MaskSystem = Mask$1;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
