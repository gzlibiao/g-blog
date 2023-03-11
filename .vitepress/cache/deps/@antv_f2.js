import {
  __assign,
  __extends,
  __spreadArrays,
  _typeof
} from "./chunk-E7FFEZEH.js";
import {
  __commonJS,
  __export,
  __toESM
} from "./chunk-4EOJPDL2.js";

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
    function _typeof2(obj) {
      "@babel/helpers - typeof";
      return module.exports = _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof2(obj);
    }
    module.exports = _typeof2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var require_regeneratorRuntime = __commonJS({
  "node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/regeneratorRuntime.js"(exports, module) {
    var _typeof2 = require_typeof()["default"];
    function _regeneratorRuntime2() {
      "use strict";
      module.exports = _regeneratorRuntime2 = function _regeneratorRuntime3() {
        return exports2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      var exports2 = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
      }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
      function define(obj, key, value) {
        return Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        }), obj[key];
      }
      try {
        define({}, "");
      } catch (err) {
        define = function define2(obj, key, value) {
          return obj[key] = value;
        };
      }
      function wrap(innerFn, outerFn, self, tryLocsList) {
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
        return defineProperty(generator, "_invoke", {
          value: makeInvokeMethod(innerFn, self, context)
        }), generator;
      }
      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }
      exports2.wrap = wrap;
      var ContinueSentinel = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      var IteratorPrototype = {};
      define(IteratorPrototype, iteratorSymbol, function() {
        return this;
      });
      var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values2([])));
      NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function(method) {
          define(prototype, method, function(arg) {
            return this._invoke(method, arg);
          });
        });
      }
      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);
          if ("throw" !== record.type) {
            var result = record.arg, value = result.value;
            return value && "object" == _typeof2(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value2) {
              invoke("next", value2, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            }) : PromiseImpl.resolve(value).then(function(unwrapped) {
              result.value = unwrapped, resolve(result);
            }, function(error) {
              return invoke("throw", error, resolve, reject);
            });
          }
          reject(record.arg);
        }
        var previousPromise;
        defineProperty(this, "_invoke", {
          value: function value(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new PromiseImpl(function(resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }
            return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          }
        });
      }
      function makeInvokeMethod(innerFn, self, context) {
        var state = "suspendedStart";
        return function(method, arg) {
          if ("executing" === state)
            throw new Error("Generator is already running");
          if ("completed" === state) {
            if ("throw" === method)
              throw arg;
            return doneResult();
          }
          for (context.method = method, context.arg = arg; ; ) {
            var delegate = context.delegate;
            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);
              if (delegateResult) {
                if (delegateResult === ContinueSentinel)
                  continue;
                return delegateResult;
              }
            }
            if ("next" === context.method)
              context.sent = context._sent = context.arg;
            else if ("throw" === context.method) {
              if ("suspendedStart" === state)
                throw state = "completed", context.arg;
              context.dispatchException(context.arg);
            } else
              "return" === context.method && context.abrupt("return", context.arg);
            state = "executing";
            var record = tryCatch(innerFn, self, context);
            if ("normal" === record.type) {
              if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel)
                continue;
              return {
                value: record.arg,
                done: context.done
              };
            }
            "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
          }
        };
      }
      function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method, method = delegate.iterator[methodName];
        if (void 0 === method)
          return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = void 0, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
        var record = tryCatch(method, delegate.iterator, context.arg);
        if ("throw" === record.type)
          return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
        var info = record.arg;
        return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = void 0), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
      }
      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };
        1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
      }
      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal", delete record.arg, entry.completion = record;
      }
      function Context(tryLocsList) {
        this.tryEntries = [{
          tryLoc: "root"
        }], tryLocsList.forEach(pushTryEntry, this), this.reset(true);
      }
      function values2(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];
          if (iteratorMethod)
            return iteratorMethod.call(iterable);
          if ("function" == typeof iterable.next)
            return iterable;
          if (!isNaN(iterable.length)) {
            var i = -1, next = function next2() {
              for (; ++i < iterable.length; )
                if (hasOwn.call(iterable, i))
                  return next2.value = iterable[i], next2.done = false, next2;
              return next2.value = void 0, next2.done = true, next2;
            };
            return next.next = next;
          }
        }
        return {
          next: doneResult
        };
      }
      function doneResult() {
        return {
          value: void 0,
          done: true
        };
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
      }), defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
      }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports2.isGeneratorFunction = function(genFun) {
        var ctor = "function" == typeof genFun && genFun.constructor;
        return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
      }, exports2.mark = function(genFun) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
      }, exports2.awrap = function(arg) {
        return {
          __await: arg
        };
      }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
      }), exports2.AsyncIterator = AsyncIterator, exports2.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        void 0 === PromiseImpl && (PromiseImpl = Promise);
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports2.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
      }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function() {
        return this;
      }), define(Gp, "toString", function() {
        return "[object Generator]";
      }), exports2.keys = function(val) {
        var object = Object(val), keys2 = [];
        for (var key in object)
          keys2.push(key);
        return keys2.reverse(), function next() {
          for (; keys2.length; ) {
            var key2 = keys2.pop();
            if (key2 in object)
              return next.value = key2, next.done = false, next;
          }
          return next.done = true, next;
        };
      }, exports2.values = values2, Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), !skipTempReset)
            for (var name in this)
              "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = void 0);
        },
        stop: function stop() {
          this.done = true;
          var rootRecord = this.tryEntries[0].completion;
          if ("throw" === rootRecord.type)
            throw rootRecord.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done)
            throw exception;
          var context = this;
          function handle(loc, caught) {
            return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = void 0), !!caught;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i], record = entry.completion;
            if ("root" === entry.tryLoc)
              return handle("end");
            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc)
                  return handle(entry.catchLoc, true);
                if (this.prev < entry.finallyLoc)
                  return handle(entry.finallyLoc);
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc)
                  return handle(entry.catchLoc, true);
              } else {
                if (!hasFinally)
                  throw new Error("try statement without catch or finally");
                if (this.prev < entry.finallyLoc)
                  return handle(entry.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }
          finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
          var record = finallyEntry ? finallyEntry.completion : {};
          return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
        },
        complete: function complete(record, afterLoc) {
          if ("throw" === record.type)
            throw record.arg;
          return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.finallyLoc === finallyLoc)
              return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
          }
        },
        "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;
              if ("throw" === record.type) {
                var thrown = record.arg;
                resetTryEntry(entry);
              }
              return thrown;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          return this.delegate = {
            iterator: values2(iterable),
            resultName,
            nextLoc
          }, "next" === this.method && (this.arg = void 0), ContinueSentinel;
        }
      }, exports2;
    }
    module.exports = _regeneratorRuntime2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/regenerator/index.js
var require_regenerator = __commonJS({
  "node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/regenerator/index.js"(exports, module) {
    var runtime = require_regeneratorRuntime()();
    module.exports = runtime;
    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      if (typeof globalThis === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  }
});

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/is-array-like.js
var isArrayLike = function(value) {
  return value !== null && typeof value !== "function" && isFinite(value.length);
};
var is_array_like_default = isArrayLike;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/filter.js
var filter = function(arr, func) {
  if (!is_array_like_default(arr)) {
    return arr;
  }
  var result = [];
  for (var index = 0; index < arr.length; index++) {
    var value = arr[index];
    if (func(value, index)) {
      result.push(value);
    }
  }
  return result;
};
var filter_default = filter;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/is-type.js
var toString = {}.toString;
var isType = function(value, type) {
  return toString.call(value) === "[object " + type + "]";
};
var is_type_default = isType;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/is-function.js
var is_function_default = function(value) {
  return is_type_default(value, "Function");
};

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/is-nil.js
var isNil = function(value) {
  return value === null || value === void 0;
};
var is_nil_default = isNil;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/is-array.js
var is_array_default = function(value) {
  return Array.isArray ? Array.isArray(value) : is_type_default(value, "Array");
};

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/is-object.js
var is_object_default = function(value) {
  var type = typeof value;
  return value !== null && type === "object" || type === "function";
};

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/each.js
function each(elements, func) {
  if (!elements) {
    return;
  }
  var rst;
  if (is_array_default(elements)) {
    for (var i = 0, len = elements.length; i < len; i++) {
      rst = func(elements[i], i);
      if (rst === false) {
        break;
      }
    }
  } else if (is_object_default(elements)) {
    for (var k in elements) {
      if (elements.hasOwnProperty(k)) {
        rst = func(elements[k], k);
        if (rst === false) {
          break;
        }
      }
    }
  }
}
var each_default = each;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/keys.js
var keys = Object.keys ? function(obj) {
  return Object.keys(obj);
} : function(obj) {
  var result = [];
  each_default(obj, function(value, key) {
    if (!(is_function_default(obj) && key === "prototype")) {
      result.push(key);
    }
  });
  return result;
};
var keys_default = keys;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/is-match.js
function isMatch(obj, attrs) {
  var _keys = keys_default(attrs);
  var length2 = _keys.length;
  if (is_nil_default(obj))
    return !length2;
  for (var i = 0; i < length2; i += 1) {
    var key = _keys[i];
    if (attrs[key] !== obj[key] || !(key in obj)) {
      return false;
    }
  }
  return true;
}
var is_match_default = isMatch;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/is-object-like.js
var isObjectLike = function(value) {
  return typeof value === "object" && value !== null;
};
var is_object_like_default = isObjectLike;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/is-plain-object.js
var isPlainObject = function(value) {
  if (!is_object_like_default(value) || !is_type_default(value, "Object")) {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  var proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
};
var is_plain_object_default = isPlainObject;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/find.js
function find(arr, predicate) {
  if (!is_array_default(arr))
    return null;
  var _predicate;
  if (is_function_default(predicate)) {
    _predicate = predicate;
  }
  if (is_plain_object_default(predicate)) {
    _predicate = function(a) {
      return is_match_default(a, predicate);
    };
  }
  if (_predicate) {
    for (var i = 0; i < arr.length; i += 1) {
      if (_predicate(arr[i])) {
        return arr[i];
      }
    }
  }
  return null;
}
var find_default = find;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/find-index.js
function findIndex(arr, predicate, fromIndex) {
  if (fromIndex === void 0) {
    fromIndex = 0;
  }
  for (var i = fromIndex; i < arr.length; i++) {
    if (predicate(arr[i], i)) {
      return i;
    }
  }
  return -1;
}
var find_index_default = findIndex;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/flatten.js
var flatten = function(arr) {
  if (!is_array_default(arr)) {
    return [];
  }
  var rst = [];
  for (var i = 0; i < arr.length; i++) {
    rst = rst.concat(arr[i]);
  }
  return rst;
};
var flatten_default = flatten;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/max.js
var max_default = function(arr) {
  if (!is_array_default(arr)) {
    return void 0;
  }
  return arr.reduce(function(prev, curr) {
    return Math.max(prev, curr);
  }, arr[0]);
};

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/min.js
var min_default = function(arr) {
  if (!is_array_default(arr)) {
    return void 0;
  }
  return arr.reduce(function(prev, curr) {
    return Math.min(prev, curr);
  }, arr[0]);
};

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/get-range.js
var getRange = function(values2) {
  var filterValues = values2.filter(function(v) {
    return !isNaN(v);
  });
  if (!filterValues.length) {
    return {
      min: 0,
      max: 0
    };
  }
  if (is_array_default(values2[0])) {
    var tmp = [];
    for (var i = 0; i < values2.length; i++) {
      tmp = tmp.concat(values2[i]);
    }
    filterValues = tmp;
  }
  var max2 = max_default(filterValues);
  var min2 = min_default(filterValues);
  return {
    min: min2,
    max: max2
  };
};
var get_range_default = getRange;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/pull.js
var arrPrototype = Array.prototype;
var splice = arrPrototype.splice;
var indexOf = arrPrototype.indexOf;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/pull-at.js
var splice2 = Array.prototype.splice;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/reduce.js
var reduce = function(arr, fn, init) {
  if (!is_array_default(arr) && !is_plain_object_default(arr)) {
    return arr;
  }
  var result = init;
  each_default(arr, function(data, i) {
    result = fn(result, data, i);
  });
  return result;
};
var reduce_default = reduce;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/is-string.js
var is_string_default = function(str) {
  return is_type_default(str, "String");
};

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/values-of-key.js
var values_of_key_default = function(data, name) {
  var rst = [];
  var tmpMap = {};
  for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    var value = obj[name];
    if (!is_nil_default(value)) {
      if (!is_array_default(value)) {
        value = [value];
      }
      for (var j = 0; j < value.length; j++) {
        var val = value[j];
        if (!tmpMap[val]) {
          rst.push(val);
          tmpMap[val] = true;
        }
      }
    }
  }
  return rst;
};

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/head.js
function head(o) {
  if (is_array_like_default(o)) {
    return o[0];
  }
  return void 0;
}

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/last.js
function last(o) {
  if (is_array_like_default(o)) {
    var arr = o;
    return arr[arr.length - 1];
  }
  return void 0;
}

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/group-by.js
var hasOwnProperty = Object.prototype.hasOwnProperty;
function groupBy(data, condition) {
  if (!condition || !is_array_default(data)) {
    return {};
  }
  var result = {};
  var predicate = is_function_default(condition) ? condition : function(item2) {
    return item2[condition];
  };
  var key;
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    key = predicate(item);
    if (hasOwnProperty.call(result, key)) {
      result[key].push(item);
    } else {
      result[key] = [item];
    }
  }
  return result;
}
var group_by_default = groupBy;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/group-to-map.js
function groupToMap(data, condition) {
  if (!condition) {
    return {
      0: data
    };
  }
  if (!is_function_default(condition)) {
    var paramscondition_1 = is_array_default(condition) ? condition : condition.replace(/\s+/g, "").split("*");
    condition = function(row) {
      var unique = "_";
      for (var i = 0, l = paramscondition_1.length; i < l; i++) {
        unique += row[paramscondition_1[i]] && row[paramscondition_1[i]].toString();
      }
      return unique;
    };
  }
  return group_by_default(data, condition);
}

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/group.js
var group_default = function(data, condition) {
  if (!condition) {
    return [data];
  }
  var groups = groupToMap(data, condition);
  var array = [];
  for (var i in groups) {
    array.push(groups[i]);
  }
  return array;
};

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/fixed-base.js
var fixedBase = function(v, base) {
  var str = base.toString();
  var index = str.indexOf(".");
  if (index === -1) {
    return Math.round(v);
  }
  var length2 = str.substr(index + 1).length;
  if (length2 > 20) {
    length2 = 20;
  }
  return parseFloat(v.toFixed(length2));
};
var fixed_base_default = fixedBase;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/is-number.js
var isNumber = function(value) {
  return is_type_default(value, "Number");
};
var is_number_default = isNumber;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/is-integer.js
var isInteger = Number.isInteger ? Number.isInteger : function(num) {
  return is_number_default(num) && num % 1 === 0;
};

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/is-number-equal.js
var PRECISION = 1e-5;
function isNumberEqual(a, b, precision) {
  if (precision === void 0) {
    precision = PRECISION;
  }
  return Math.abs(a - b) < precision;
}

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/to-degree.js
var DEGREE = 180 / Math.PI;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/to-radian.js
var RADIAN = Math.PI / 180;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/values.js
var values = Object.values ? function(obj) {
  return Object.values(obj);
} : function(obj) {
  var result = [];
  each_default(obj, function(value, key) {
    if (!(is_function_default(obj) && key === "prototype")) {
      result.push(value);
    }
  });
  return result;
};
var values_default = values;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/to-string.js
var to_string_default = function(value) {
  if (is_nil_default(value))
    return "";
  return value.toString();
};

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/substitute.js
function substitute(str, o) {
  if (!str || !o) {
    return str;
  }
  return str.replace(/\\?\{([^{}]+)\}/g, function(match, name) {
    if (match.charAt(0) === "\\") {
      return match.slice(1);
    }
    return o[name] === void 0 ? "" : o[name];
  });
}
var substitute_default = substitute;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/upper-first.js
var upperFirst = function(value) {
  var str = to_string_default(value);
  return str.charAt(0).toUpperCase() + str.substring(1);
};
var upper_first_default = upperFirst;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/get-type.js
var toString2 = {}.toString;
var getType = function(value) {
  return toString2.call(value).replace(/^\[object /, "").replace(/]$/, "");
};
var get_type_default = getType;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/is-boolean.js
var isBoolean = function(value) {
  return is_type_default(value, "Boolean");
};
var is_boolean_default = isBoolean;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/is-date.js
var isDate = function(value) {
  return is_type_default(value, "Date");
};
var is_date_default = isDate;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/is-prototype.js
var objectProto = Object.prototype;
var isPrototype = function(value) {
  var Ctor = value && value.constructor;
  var proto = typeof Ctor === "function" && Ctor.prototype || objectProto;
  return value === proto;
};
var is_prototype_default = isPrototype;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/is-undefined.js
var isUndefined = function(value) {
  return value === void 0;
};
var is_undefined_default = isUndefined;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/mix.js
function _mix(dist, obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key) && key !== "constructor" && obj[key] !== void 0) {
      dist[key] = obj[key];
    }
  }
}
function mix(dist, src1, src2, src3) {
  if (src1)
    _mix(dist, src1);
  if (src2)
    _mix(dist, src2);
  if (src3)
    _mix(dist, src3);
  return dist;
}

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/clone.js
var clone = function(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  var rst;
  if (is_array_default(obj)) {
    rst = [];
    for (var i = 0, l = obj.length; i < l; i++) {
      if (typeof obj[i] === "object" && obj[i] != null) {
        rst[i] = clone(obj[i]);
      } else {
        rst[i] = obj[i];
      }
    }
  } else {
    rst = {};
    for (var k in obj) {
      if (typeof obj[k] === "object" && obj[k] != null) {
        rst[k] = clone(obj[k]);
      } else {
        rst[k] = obj[k];
      }
    }
  }
  return rst;
};
var clone_default = clone;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/memoize.js
var memoize_default = function(f, resolver) {
  if (!is_function_default(f)) {
    throw new TypeError("Expected a function");
  }
  var memoized = function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var key = resolver ? resolver.apply(this, args) : args[0];
    var cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = f.apply(this, args);
    cache.set(key, result);
    return result;
  };
  memoized.cache = /* @__PURE__ */ new Map();
  return memoized;
};

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/deep-mix.js
var MAX_MIX_LEVEL = 5;
function _deepMix(dist, src, level, maxLevel) {
  level = level || 0;
  maxLevel = maxLevel || MAX_MIX_LEVEL;
  for (var key in src) {
    if (src.hasOwnProperty(key)) {
      var value = src[key];
      if (value !== null && is_plain_object_default(value)) {
        if (!is_plain_object_default(dist[key])) {
          dist[key] = {};
        }
        if (level < maxLevel) {
          _deepMix(dist[key], value, level + 1, maxLevel);
        } else {
          dist[key] = src[key];
        }
      } else if (is_array_default(value)) {
        dist[key] = [];
        dist[key] = dist[key].concat(value);
      } else if (value !== void 0) {
        dist[key] = value;
      }
    }
  }
}
var deepMix = function(rst) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  for (var i = 0; i < args.length; i += 1) {
    _deepMix(rst, args[i]);
  }
  return rst;
};
var deep_mix_default = deepMix;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/index-of.js
var indexOf2 = function(arr, obj) {
  if (!is_array_like_default(arr)) {
    return -1;
  }
  var m = Array.prototype.indexOf;
  if (m) {
    return m.call(arr, obj);
  }
  var index = -1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === obj) {
      index = i;
      break;
    }
  }
  return index;
};
var index_of_default = indexOf2;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/is-empty.js
var hasOwnProperty2 = Object.prototype.hasOwnProperty;
function isEmpty(value) {
  if (is_nil_default(value)) {
    return true;
  }
  if (is_array_like_default(value)) {
    return !value.length;
  }
  var type = get_type_default(value);
  if (type === "Map" || type === "Set") {
    return !value.size;
  }
  if (is_prototype_default(value)) {
    return !Object.keys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty2.call(value, key)) {
      return false;
    }
  }
  return true;
}
var is_empty_default = isEmpty;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/map.js
var map = function(arr, func) {
  if (!is_array_like_default(arr)) {
    return arr;
  }
  var result = [];
  for (var index = 0; index < arr.length; index++) {
    var value = arr[index];
    result.push(func(value, index));
  }
  return result;
};
var map_default = map;

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/map-values.js
var identity = function(v) {
  return v;
};
var map_values_default = function(object, func) {
  if (func === void 0) {
    func = identity;
  }
  var r = {};
  if (is_object_default(object) && !is_nil_default(object)) {
    Object.keys(object).forEach(function(key) {
      r[key] = func(object[key], key);
    });
  }
  return r;
};

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/get.js
var get_default = function(obj, key, defaultValue) {
  var p = 0;
  var keyArr = is_string_default(key) ? key.split(".") : key;
  while (obj && p < keyArr.length) {
    obj = obj[keyArr[p++]];
  }
  return obj === void 0 || p < keyArr.length ? defaultValue : obj;
};

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/pick.js
var hasOwnProperty3 = Object.prototype.hasOwnProperty;
var pick_default = function(object, keys2) {
  if (object === null || !is_plain_object_default(object)) {
    return {};
  }
  var result = {};
  each_default(keys2, function(key) {
    if (hasOwnProperty3.call(object, key)) {
      result[key] = object[key];
    }
  });
  return result;
};

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/omit.js
var omit_default = function(obj, keys2) {
  return reduce_default(obj, function(r, curr, key) {
    if (!keys2.includes(key)) {
      r[key] = curr;
    }
    return r;
  }, {});
};

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/size.js
function size(o) {
  if (is_nil_default(o)) {
    return 0;
  }
  if (is_array_like_default(o)) {
    return o.length;
  }
  return Object.keys(o).length;
}

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/measure-text-width.js
var ctx;
var measure_text_width_default = memoize_default(function(text, font) {
  if (font === void 0) {
    font = {};
  }
  var fontSize = font.fontSize, fontFamily = font.fontFamily, fontWeight = font.fontWeight, fontStyle = font.fontStyle, fontVariant = font.fontVariant;
  if (!ctx) {
    ctx = document.createElement("canvas").getContext("2d");
  }
  ctx.font = [fontStyle, fontVariant, fontWeight, fontSize + "px", fontFamily].join(" ");
  return ctx.measureText(is_string_default(text) ? text : "").width;
}, function(text, font) {
  if (font === void 0) {
    font = {};
  }
  return __spreadArrays([text], values_default(font)).join("");
});

// node_modules/.pnpm/@antv+util@2.0.17/node_modules/@antv/util/esm/cache.js
var default_1 = (
  /** @class */
  function() {
    function default_12() {
      this.map = {};
    }
    default_12.prototype.has = function(key) {
      return this.map[key] !== void 0;
    };
    default_12.prototype.get = function(key, def) {
      var v = this.map[key];
      return v === void 0 ? def : v;
    };
    default_12.prototype.set = function(key, value) {
      this.map[key] = value;
    };
    default_12.prototype.clear = function() {
      this.map = {};
    };
    default_12.prototype.delete = function(key) {
      delete this.map[key];
    };
    default_12.prototype.size = function() {
      return Object.keys(this.map).length;
    };
    return default_12;
  }()
);
var cache_default = default_1;

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/children.js
function cloneElement(element, props) {
  if (!element)
    return element;
  return _objectSpread2(_objectSpread2({}, element), {}, {
    props: _objectSpread2(_objectSpread2({}, element.props), props)
  });
}
function map2(children, fn) {
  if (!children) {
    return fn(children);
  }
  if (is_array_default(children)) {
    return children.map(function(child) {
      return map2(child, fn);
    });
  }
  return fn(children);
}
function compareArray(nextElements, lastElements, callback) {
  var keyed = {};
  var nextLength = nextElements.length;
  var lastLength = lastElements.length;
  for (var i = 0, len = lastLength; i < len; i++) {
    var element = lastElements[i];
    if (element && !is_nil_default(element.key)) {
      var key = element.key;
      keyed[key] = element;
    }
  }
  for (var _i = 0, _len = Math.max(nextLength, lastLength); _i < _len; _i++) {
    var _element = nextElements[_i];
    if (!_element) {
      compare(_element, lastElements[_i], callback);
      continue;
    }
    var _key = _element.key;
    if (!is_nil_default(_element.key)) {
      var lastElement = keyed[_key];
      if (lastElement)
        delete keyed[_key];
      compare(_element, lastElement, callback);
      continue;
    }
    compare(_element, lastElements[_i], callback);
  }
  Object.keys(keyed).forEach(function(key2) {
    compare(null, keyed[key2], callback);
  });
}
function compare(nextElement, lastElement, callback) {
  if (!nextElement || !lastElement) {
    callback(nextElement, lastElement);
    return;
  }
  if (is_array_default(nextElement) || is_array_default(lastElement)) {
    var nextElementArray = is_array_default(nextElement) ? nextElement : [nextElement];
    var lastElementArray = is_array_default(lastElement) ? lastElement : [lastElement];
    compareArray(nextElementArray, lastElementArray, callback);
    return;
  }
  callback(nextElement, lastElement);
}
function toArray(element) {
  if (!element) {
    return element;
  }
  if (!is_array_default(element)) {
    return [element];
  }
  var newArray = [];
  for (var i = 0, len = element.length; i < len; i++) {
    var item = element[i];
    if (is_array_default(item)) {
      newArray = newArray.concat(toArray(item));
    } else {
      newArray.push(item);
    }
  }
  return newArray;
}
var Children = {
  cloneElement,
  map: map2,
  toArray,
  compare
};
var children_default = Children;

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/base/component.js
var Component = function() {
  function Component2(props, context, updater) {
    _classCallCheck(this, Component2);
    this.destroyed = false;
    this.props = props;
    this.state = {};
    this.context = context;
    this.updater = updater;
  }
  _createClass(Component2, [{
    key: "willMount",
    value: function willMount() {
    }
  }, {
    key: "didMount",
    value: function didMount() {
    }
  }, {
    key: "willReceiveProps",
    value: function willReceiveProps(_props, context) {
    }
  }, {
    key: "willUpdate",
    value: function willUpdate() {
    }
  }, {
    key: "didUpdate",
    value: function didUpdate() {
    }
  }, {
    key: "render",
    value: function render2() {
      return null;
    }
  }, {
    key: "didUnmount",
    value: function didUnmount() {
    }
  }, {
    key: "setState",
    value: function setState(partialState, callback) {
      this.updater.enqueueSetState(this, partialState, callback);
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate(callback) {
      this.updater.enqueueForceUpdate(this, {}, callback);
    }
  }, {
    key: "setAnimate",
    value: function setAnimate(animate) {
      this.animate = animate;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.destroyed = true;
    }
  }]);
  return Component2;
}();
Component.prototype.isF2Component = true;
var component_default = Component;

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/inherits.js
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/createSuper.js
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/timeline.js
var Timeline = function(_Component) {
  _inherits(Timeline3, _Component);
  var _super = _createSuper(Timeline3);
  function Timeline3(props) {
    var _this;
    _classCallCheck(this, Timeline3);
    _this = _super.call(this, props);
    _this.next = function() {
      var _assertThisInitialize = _assertThisInitialized(_this), state = _assertThisInitialize.state, props2 = _assertThisInitialize.props;
      var index = state.index, count3 = state.count, delay2 = state.delay;
      var loop = props2.loop;
      var next = loop ? (index + 1) % count3 : index + 1;
      if (next < count3) {
        setTimeout(function() {
          _this.setState({
            index: next
          });
        }, delay2 || 0);
      }
    };
    var delay = props.delay, _props$start = props.start, start2 = _props$start === void 0 ? 0 : _props$start, children = props.children;
    var count2 = children_default.toArray(children).length;
    _this.state = {
      delay,
      count: count2,
      index: start2
    };
    return _this;
  }
  _createClass(Timeline3, [{
    key: "didMount",
    value: function didMount() {
      var context = this.context;
      var root = context.root;
      root.on("animationEnd", this.next);
    }
  }, {
    key: "didUnmount",
    value: function didUnmount() {
      var context = this.context;
      var root = context.root;
      root.off("animationEnd", this.next);
    }
  }, {
    key: "render",
    value: function render2() {
      var state = this.state, props = this.props;
      var children = props.children;
      var index = state.index;
      var childrenArray = children_default.toArray(children);
      return childrenArray[index];
    }
  }]);
  return Timeline3;
}(component_default);
var timeline_default = Timeline;

// node_modules/.pnpm/@antv+event-emitter@0.1.3/node_modules/@antv/event-emitter/esm/index.js
var WILDCARD = "*";
var EventEmitter = (
  /** @class */
  function() {
    function EventEmitter2() {
      this._events = {};
    }
    EventEmitter2.prototype.on = function(evt, callback, once) {
      if (!this._events[evt]) {
        this._events[evt] = [];
      }
      this._events[evt].push({
        callback,
        once: !!once
      });
      return this;
    };
    EventEmitter2.prototype.once = function(evt, callback) {
      return this.on(evt, callback, true);
    };
    EventEmitter2.prototype.emit = function(evt) {
      var _this = this;
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      var events = this._events[evt] || [];
      var wildcardEvents = this._events[WILDCARD] || [];
      var doEmit = function(es) {
        var length2 = es.length;
        for (var i = 0; i < length2; i++) {
          if (!es[i]) {
            continue;
          }
          var _a = es[i], callback = _a.callback, once = _a.once;
          if (once) {
            es.splice(i, 1);
            if (es.length === 0) {
              delete _this._events[evt];
            }
            length2--;
            i--;
          }
          callback.apply(_this, args);
        }
      };
      doEmit(events);
      doEmit(wildcardEvents);
    };
    EventEmitter2.prototype.off = function(evt, callback) {
      if (!evt) {
        this._events = {};
      } else {
        if (!callback) {
          delete this._events[evt];
        } else {
          var events = this._events[evt] || [];
          var length_1 = events.length;
          for (var i = 0; i < length_1; i++) {
            if (events[i].callback === callback) {
              events.splice(i, 1);
              length_1--;
              i--;
            }
          }
          if (events.length === 0) {
            delete this._events[evt];
          }
        }
      }
      return this;
    };
    EventEmitter2.prototype.getEvents = function() {
      return this._events;
    };
    return EventEmitter2;
  }()
);
var esm_default = EventEmitter;

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/util/matrix.js
var Matrix = {
  generateDefault: function generateDefault() {
    return [1, 0, 0, 1, 0, 0];
  },
  isChanged: function isChanged(m) {
    return m[0] !== 1 || m[1] !== 0 || m[2] !== 0 || m[3] !== 1 || m[4] !== 0 || m[5] !== 0;
  },
  multiply: function multiply(m1, m2) {
    var m11 = m1[0] * m2[0] + m1[2] * m2[1];
    var m12 = m1[1] * m2[0] + m1[3] * m2[1];
    var m21 = m1[0] * m2[2] + m1[2] * m2[3];
    var m22 = m1[1] * m2[2] + m1[3] * m2[3];
    var dx = m1[0] * m2[4] + m1[2] * m2[5] + m1[4];
    var dy = m1[1] * m2[4] + m1[3] * m2[5] + m1[5];
    return [m11, m12, m21, m22, dx, dy];
  },
  scale: function scale(out, m, v) {
    out[0] = m[0] * v[0];
    out[1] = m[1] * v[0];
    out[2] = m[2] * v[1];
    out[3] = m[3] * v[1];
    out[4] = m[4];
    out[5] = m[5];
    return out;
  },
  rotate: function rotate(out, m, radian) {
    var c = Math.cos(radian);
    var s = Math.sin(radian);
    var m11 = m[0] * c + m[2] * s;
    var m12 = m[1] * c + m[3] * s;
    var m21 = m[0] * -s + m[2] * c;
    var m22 = m[1] * -s + m[3] * c;
    out[0] = m11;
    out[1] = m12;
    out[2] = m21;
    out[3] = m22;
    out[4] = m[4];
    out[5] = m[5];
    return out;
  },
  translate: function translate(out, m, v) {
    out[0] = m[0];
    out[1] = m[1];
    out[2] = m[2];
    out[3] = m[3];
    out[4] = m[4] + m[0] * v[0] + m[2] * v[1];
    out[5] = m[5] + m[1] * v[0] + m[3] * v[1];
    return out;
  },
  transform: function transform(m, actions) {
    var out = [].concat(m);
    for (var i = 0, len = actions.length; i < len; i++) {
      var action = actions[i];
      switch (action[0]) {
        case "t":
          Matrix.translate(out, out, [action[1], action[2]]);
          break;
        case "s":
          Matrix.scale(out, out, [action[1], action[2]]);
          break;
        case "r":
          Matrix.rotate(out, out, action[1]);
          break;
        default:
          break;
      }
    }
    return out;
  }
};
var matrix_default = Matrix;

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/util/vector2.js
var vector2_default = {
  /**
   * Creates a new, empty vector2
   *
   * @return {vector2} a new 2D vector
   */
  create: function create() {
    return [0, 0];
  },
  /**
   * Calculates the length of a vector2
   *
   * @param {vector2} v vector to calculate length of
   * @return {Number} length of v
   */
  length: function length(v) {
    var x = v[0];
    var y = v[1];
    return Math.sqrt(x * x + y * y);
  },
  /**
   * Normalize a vector2
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v vector to normalize
   * @return {vector2} out
   */
  normalize: function normalize(out, v) {
    var len = this.length(v);
    if (len === 0) {
      out[0] = 0;
      out[1] = 0;
    } else {
      out[0] = v[0] / len;
      out[1] = v[1] / len;
    }
    return out;
  },
  /**
   * Adds two vector2's
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {vector2} out
   */
  add: function add(out, v1, v2) {
    out[0] = v1[0] + v2[0];
    out[1] = v1[1] + v2[1];
    return out;
  },
  /**
   * Subtracts vector v2 from vector v1
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {vector2} out
   */
  sub: function sub(out, v1, v2) {
    out[0] = v1[0] - v2[0];
    out[1] = v1[1] - v2[1];
    return out;
  },
  /**
   * Scales a vector2 by a scalar number
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v the vector to scale
   * @param {Number} s amount to scale the vector by
   * @return {vector2} out
   */
  scale: function scale2(out, v, s) {
    out[0] = v[0] * s;
    out[1] = v[1] * s;
    return out;
  },
  /**
   * Calculates the dot product of two vector2's
   *
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {Number} dot product of v1 and v2
   */
  dot: function dot(v1, v2) {
    return v1[0] * v2[0] + v1[1] * v2[1];
  },
  /**
   * Calculates the direction of two vector2's
   *
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {Boolean} the direction of v1 and v2
   */
  direction: function direction(v1, v2) {
    return v1[0] * v2[1] - v2[0] * v1[1];
  },
  /**
   * Calculates the angle of two vector2's
   *
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {Number} angle of v1 and v2
   */
  angle: function angle(v1, v2) {
    var theta = this.dot(v1, v2) / (this.length(v1) * this.length(v2));
    return Math.acos(theta);
  },
  /**
   * Calculates the angle of two vector2's with direction
   *
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @param {Boolean} direction the direction of two vector2's
   * @return {Number} angle of v1 and v2
   */
  angleTo: function angleTo(v1, v2, direction2) {
    var angle2 = this.angle(v1, v2);
    var angleLargeThanPI = this.direction(v1, v2) >= 0;
    if (direction2) {
      if (angleLargeThanPI) {
        return Math.PI * 2 - angle2;
      }
      return angle2;
    }
    if (angleLargeThanPI) {
      return angle2;
    }
    return Math.PI * 2 - angle2;
  },
  /**
   * whether a vector2 is zero vector
   *
   * @param  {vector2} v vector to calculate
   * @return {Boolean}   is or not a zero vector
   */
  zero: function zero(v) {
    return v[0] === 0 && v[1] === 0;
  },
  /**
   * Calculates the euclidian distance between two vector2's
   *
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {Number} distance between a and b
   */
  distance: function distance(v1, v2) {
    var x = v2[0] - v1[0];
    var y = v2[1] - v1[1];
    return Math.sqrt(x * x + y * y);
  },
  /**
   * Creates a new vector2 initialized with values from an existing vector
   *
   * @param {vector2} v vector to clone
   * @return {Array} a new 2D vector
   */
  clone: function clone2(v) {
    return [v[0], v[1]];
  },
  /**
   * Return the minimum of two vector2's
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {vector2} out
   */
  min: function min(out, v1, v2) {
    out[0] = Math.min(v1[0], v2[0]);
    out[1] = Math.min(v1[1], v2[1]);
    return out;
  },
  /**
   * Return the maximum of two vector2's
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {vector2} out
   */
  max: function max(out, v1, v2) {
    out[0] = Math.max(v1[0], v2[0]);
    out[1] = Math.max(v1[1], v2[1]);
    return out;
  },
  /**
   * Transforms the vector2 with a mat2d
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v the vector to transform
   * @param {mat2d} m matrix to transform with
   * @return {vector2} out
   */
  transformMat2d: function transformMat2d(out, v, m) {
    var x = v[0];
    var y = v[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
  }
};

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/util/smooth.js
var smooth_exports = {};
__export(smooth_exports, {
  smooth: () => catmullRom2bezier
});
function getPoint(v) {
  return [v.x, v.y];
}
function smoothBezier(points, smooth, isLoop, constraint) {
  var cps = [];
  var prevPoint;
  var nextPoint;
  var hasConstraint = !!constraint;
  var min2;
  var max2;
  var point;
  var len;
  var l;
  var i;
  if (hasConstraint) {
    min2 = [Infinity, Infinity];
    max2 = [-Infinity, -Infinity];
    for (i = 0, l = points.length; i < l; i++) {
      point = getPoint(points[i]);
      vector2_default.min(min2, min2, point);
      vector2_default.max(max2, max2, point);
    }
    vector2_default.min(min2, min2, constraint[0]);
    vector2_default.max(max2, max2, constraint[1]);
  }
  for (i = 0, len = points.length; i < len; i++) {
    point = getPoint(points[i]);
    if (isLoop) {
      prevPoint = getPoint(points[i ? i - 1 : len - 1]);
      nextPoint = getPoint(points[(i + 1) % len]);
    } else {
      if (i === 0 || i === len - 1) {
        cps.push([point[0], point[1]]);
        continue;
      } else {
        prevPoint = getPoint(points[i - 1]);
        nextPoint = getPoint(points[i + 1]);
      }
    }
    var v = vector2_default.sub([], nextPoint, prevPoint);
    vector2_default.scale(v, v, smooth);
    var d0 = vector2_default.distance(point, prevPoint);
    var d1 = vector2_default.distance(point, nextPoint);
    var sum = d0 + d1;
    if (sum !== 0) {
      d0 /= sum;
      d1 /= sum;
    }
    var v1 = vector2_default.scale([], v, -d0);
    var v2 = vector2_default.scale([], v, d1);
    var cp0 = vector2_default.add([], point, v1);
    var cp1 = vector2_default.add([], point, v2);
    if (hasConstraint) {
      vector2_default.max(cp0, cp0, min2);
      vector2_default.min(cp0, cp0, max2);
      vector2_default.max(cp1, cp1, min2);
      vector2_default.min(cp1, cp1, max2);
    }
    cps.push([cp0[0], cp0[1]]);
    cps.push([cp1[0], cp1[1]]);
  }
  if (isLoop) {
    cps.push(cps.shift());
  }
  return cps;
}
function catmullRom2bezier(pointList, z, constraint) {
  var isLoop = !!z;
  var controlPointList = smoothBezier(pointList, 0.4, isLoop, constraint);
  var len = pointList.length;
  var d1 = [];
  var cp1;
  var cp2;
  var p;
  for (var i = 0; i < len - 1; i++) {
    cp1 = controlPointList[i * 2];
    cp2 = controlPointList[i * 2 + 1];
    p = pointList[i + 1];
    d1.push(["C", cp1[0], cp1[1], cp2[0], cp2[1], p.x, p.y]);
  }
  if (isLoop) {
    cp1 = controlPointList[len];
    cp2 = controlPointList[len + 1];
    p = pointList[0];
    d1.push(["C", cp1[0], cp1[1], cp2[0], cp2[1], p.x, p.y]);
  }
  return d1;
}

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/util/bbox.js
var bbox_exports = {};
__export(bbox_exports, {
  getBBoxFromArc: () => getBBoxFromArc,
  getBBoxFromBezierGroup: () => getBBoxFromBezierGroup,
  getBBoxFromLine: () => getBBoxFromLine,
  getBBoxFromPoints: () => getBBoxFromPoints
});
var start = vector2_default.create();
var end = vector2_default.create();
var extremity = vector2_default.create();
function getCubicBezierXYatT(startPt, controlPt1, controlPt2, endPt, T) {
  var x = CubicN(T, startPt.x, controlPt1.x, controlPt2.x, endPt.x);
  var y = CubicN(T, startPt.y, controlPt1.y, controlPt2.y, endPt.y);
  return {
    x,
    y
  };
}
function CubicN(T, a, b, c, d) {
  var t22 = T * T;
  var t32 = t22 * T;
  return a + (-a * 3 + T * (3 * a - a * T)) * T + (3 * b + T * (-6 * b + b * 3 * T)) * T + (c * 3 - c * 3 * T) * t22 + d * t32;
}
function cubicBezierBounds(c) {
  var minX = Infinity;
  var maxX = -Infinity;
  var minY = Infinity;
  var maxY = -Infinity;
  var s = {
    x: c[0],
    y: c[1]
  };
  var c1 = {
    x: c[2],
    y: c[3]
  };
  var c2 = {
    x: c[4],
    y: c[5]
  };
  var e = {
    x: c[6],
    y: c[7]
  };
  for (var t = 0; t < 100; t++) {
    var pt = getCubicBezierXYatT(s, c1, c2, e, t / 100);
    if (pt.x < minX) {
      minX = pt.x;
    }
    if (pt.x > maxX) {
      maxX = pt.x;
    }
    if (pt.y < minY) {
      minY = pt.y;
    }
    if (pt.y > maxY) {
      maxY = pt.y;
    }
  }
  return {
    minX,
    minY,
    maxX,
    maxY
  };
}
function getBBoxFromPoints(points, lineWidth) {
  if (points.length === 0) {
    return;
  }
  var p = points[0];
  var left = p.x;
  var right = p.x;
  var top = p.y;
  var bottom = p.y;
  var len = points.length;
  for (var i = 1; i < len; i++) {
    p = points[i];
    left = Math.min(left, p.x);
    right = Math.max(right, p.x);
    top = Math.min(top, p.y);
    bottom = Math.max(bottom, p.y);
  }
  lineWidth = lineWidth / 2 || 0;
  return {
    minX: left - lineWidth,
    minY: top - lineWidth,
    maxX: right + lineWidth,
    maxY: bottom + lineWidth
  };
}
function getBBoxFromLine(x0, y0, x1, y1, lineWidth) {
  lineWidth = lineWidth / 2 || 0;
  return {
    minX: Math.min(x0, x1) - lineWidth,
    minY: Math.min(y0, y1) - lineWidth,
    maxX: Math.max(x0, x1) + lineWidth,
    maxY: Math.max(y0, y1) + lineWidth
  };
}
function getBBoxFromArc(x, y, r, startAngle, endAngle, anticlockwise) {
  var diff2 = Math.abs(startAngle - endAngle);
  if (diff2 % (Math.PI * 2) < 1e-4 && diff2 > 1e-4) {
    return {
      minX: x - r,
      minY: y - r,
      maxX: x + r,
      maxY: y + r
    };
  }
  start[0] = Math.cos(startAngle) * r + x;
  start[1] = Math.sin(startAngle) * r + y;
  end[0] = Math.cos(endAngle) * r + x;
  end[1] = Math.sin(endAngle) * r + y;
  var min2 = [0, 0];
  var max2 = [0, 0];
  vector2_default.min(min2, start, end);
  vector2_default.max(max2, start, end);
  startAngle = startAngle % (Math.PI * 2);
  if (startAngle < 0) {
    startAngle = startAngle + Math.PI * 2;
  }
  endAngle = endAngle % (Math.PI * 2);
  if (endAngle < 0) {
    endAngle = endAngle + Math.PI * 2;
  }
  if (startAngle > endAngle && !anticlockwise) {
    endAngle += Math.PI * 2;
  } else if (startAngle < endAngle && anticlockwise) {
    startAngle += Math.PI * 2;
  }
  if (anticlockwise) {
    var tmp = endAngle;
    endAngle = startAngle;
    startAngle = tmp;
  }
  for (var angle2 = 0; angle2 < endAngle; angle2 += Math.PI / 2) {
    if (angle2 > startAngle) {
      extremity[0] = Math.cos(angle2) * r + x;
      extremity[1] = Math.sin(angle2) * r + y;
      vector2_default.min(min2, extremity, min2);
      vector2_default.max(max2, extremity, max2);
    }
  }
  return {
    minX: min2[0],
    minY: min2[1],
    maxX: max2[0],
    maxY: max2[1]
  };
}
function getBBoxFromBezierGroup(points, lineWidth) {
  var minX = Infinity;
  var maxX = -Infinity;
  var minY = Infinity;
  var maxY = -Infinity;
  for (var i = 0, len = points.length; i < len; i++) {
    var bbox = cubicBezierBounds(points[i]);
    if (bbox.minX < minX) {
      minX = bbox.minX;
    }
    if (bbox.maxX > maxX) {
      maxX = bbox.maxX;
    }
    if (bbox.minY < minY) {
      minY = bbox.minY;
    }
    if (bbox.maxY > maxY) {
      maxY = bbox.maxY;
    }
  }
  lineWidth = lineWidth / 2 || 0;
  return {
    minX: minX - lineWidth,
    minY: minY - lineWidth,
    maxX: maxX + lineWidth,
    maxY: maxY + lineWidth
  };
}

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/event/emit.js
var TYPE_SEP = " ";
var EventEmit = function() {
  function EventEmit2() {
    _classCallCheck(this, EventEmit2);
    this.__events = {};
  }
  _createClass(EventEmit2, [{
    key: "on",
    value: function on(type, listener) {
      var _this = this;
      if (!type || !listener) {
        return;
      }
      type.split(TYPE_SEP).forEach(function(item) {
        var events = _this.__events[item] || [];
        events.push(listener);
        _this.__events[item] = events;
      });
    }
  }, {
    key: "emit",
    value: function emit(type, e) {
      var _this2 = this;
      if (is_object_default(type)) {
        e = type;
        type = e && e.type;
      }
      if (!type) {
        return;
      }
      var events = this.__events[type];
      if (!events || !events.length) {
        return;
      }
      events.forEach(function(listener) {
        listener.call(_this2, e);
      });
    }
  }, {
    key: "off",
    value: function off(type, listener) {
      var __events = this.__events;
      type.split(TYPE_SEP).forEach(function(item) {
        var events = __events[item];
        if (!events || !events.length) {
          return;
        }
        if (!listener) {
          delete __events[item];
          return;
        }
        for (var i = 0, len = events.length; i < len; i++) {
          if (events[i] === listener) {
            events.splice(i, 1);
            i--;
          }
        }
      });
    }
  }]);
  return EventEmit2;
}();
var emit_default = EventEmit;

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/util/dom.js
var supportsEventListenerOptions = function() {
  var supports = false;
  try {
    var options = Object.defineProperty({}, "passive", {
      get: function get() {
        supports = true;
      }
    });
    window.addEventListener("e", null, options);
  } catch (e) {
  }
  return supports;
}();
var isWx = (typeof wx === "undefined" ? "undefined" : _typeof(wx)) === "object" && typeof wx.getSystemInfoSync === "function";
var isMy = (typeof my === "undefined" ? "undefined" : _typeof(my)) === "object" && typeof my.getSystemInfoSync === "function";
var isNode = (typeof global === "undefined" ? "undefined" : _typeof(global)) && !(typeof window === "undefined" ? "undefined" : _typeof(window));
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.sessionStorage !== "undefined";
function isCanvasElement(el) {
  if (!el || _typeof(el) !== "object")
    return false;
  if (el.nodeType === 1 && el.nodeName) {
    return true;
  }
  return !!el.isCanvasElement;
}
function getPixelRatio() {
  return window && window.devicePixelRatio || 1;
}
function getStyle(el, property) {
  return el.currentStyle ? el.currentStyle[property] : document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
}
function getWidth(el) {
  var width = getStyle(el, "width");
  if (width === "auto") {
    width = el.offsetWidth;
  }
  return parseFloat(width);
}
function getHeight(el) {
  var height = getStyle(el, "height");
  if (height === "auto") {
    height = el.offsetHeight;
  }
  return parseFloat(height);
}
function getDomById(id) {
  if (!id) {
    return null;
  }
  return document.getElementById(id);
}
function getRelativePosition(point, canvas) {
  var canvasDom = canvas.get("el");
  if (!canvasDom)
    return point;
  var _canvasDom$getBoundin = canvasDom.getBoundingClientRect(), top = _canvasDom$getBoundin.top, left = _canvasDom$getBoundin.left;
  var paddingLeft = parseFloat(getStyle(canvasDom, "padding-left"));
  var paddingTop = parseFloat(getStyle(canvasDom, "padding-top"));
  var mouseX = point.x - left - paddingLeft;
  var mouseY = point.y - top - paddingTop;
  return {
    x: mouseX,
    y: mouseY
  };
}
function landscapePoint(point, canvas) {
  var landscape = canvas.get("landscape");
  if (!landscape) {
    return point;
  }
  if (is_function_default(landscape)) {
    return landscape(point, canvas);
  }
  var height = canvas.get("height");
  var x = point.y;
  var y = height - point.x;
  return {
    x,
    y
  };
}
function convertPoints(ev, canvas) {
  var touches = ev.touches;
  if (!touches) {
    var point = getRelativePosition({
      x: ev.clientX,
      y: ev.clientY
    }, canvas);
    return [landscapePoint(point, canvas)];
  }
  if (!touches.length) {
    touches = ev.changedTouches || [];
  }
  var points = [];
  for (var i = 0, len = touches.length; i < len; i++) {
    var touch = touches[i];
    var x = touch.x, y = touch.y, clientX = touch.clientX, clientY = touch.clientY;
    var _point = void 0;
    if (is_number_default(x) || is_number_default(y)) {
      _point = {
        x,
        y
      };
    } else {
      _point = getRelativePosition({
        x: clientX,
        y: clientY
      }, canvas);
    }
    points.push(landscapePoint(_point, canvas));
  }
  return points;
}
function measureText(text, font, ctx2) {
  if (!ctx2) {
    ctx2 = document.createElement("canvas").getContext("2d");
  }
  ctx2.font = font || "12px sans-serif";
  return ctx2.measureText(text);
}

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/event/controller.js
var convertPoints2 = convertPoints;
var calcDirection = function calcDirection2(start2, end2) {
  var xDistance = end2.x - start2.x;
  var yDistance = end2.y - start2.y;
  if (Math.abs(xDistance) > Math.abs(yDistance)) {
    return xDistance > 0 ? "right" : "left";
  }
  return yDistance > 0 ? "down" : "up";
};
var calcDistance = function calcDistance2(point1, point2) {
  var xDistance = Math.abs(point2.x - point1.x);
  var yDistance = Math.abs(point2.y - point1.y);
  return Math.sqrt(xDistance * xDistance + yDistance * yDistance);
};
var getCenter = function getCenter2(point1, point2) {
  var x = point1.x + (point2.x - point1.x) / 2;
  var y = point1.y + (point2.y - point1.y) / 2;
  return {
    x,
    y
  };
};
var PRESS_DELAY = 250;
var EventController = function() {
  function EventController2(_ref) {
    var _this = this;
    var canvas = _ref.canvas, el = _ref.el;
    _classCallCheck(this, EventController2);
    this._click = function(ev) {
      var points = convertPoints2(ev, _this.canvas);
      ev.points = points;
      _this.emitEvent("click", ev);
    };
    this._start = function(ev) {
      var points = convertPoints2(ev, _this.canvas);
      if (!points) {
        return;
      }
      ev.points = points;
      _this.emitEvent("touchstart", ev);
      _this.reset();
      _this.startTime = Date.now();
      _this.startPoints = points;
      if (points.length > 1) {
        _this.startDistance = calcDistance(points[0], points[1]);
        _this.center = getCenter(points[0], points[1]);
      } else {
        _this.pressTimeout = setTimeout(function() {
          var eventType = "press";
          var direction2 = "none";
          ev.direction = direction2;
          _this.emitStart(eventType, ev);
          _this.emitEvent(eventType, ev);
          _this.eventType = eventType;
          _this.direction = direction2;
        }, PRESS_DELAY);
      }
    };
    this._move = function(ev) {
      var points = convertPoints2(ev, _this.canvas);
      if (!points)
        return;
      _this.clearPressTimeout();
      ev.points = points;
      _this.emitEvent("touchmove", ev);
      var startPoints = _this.startPoints;
      if (!startPoints)
        return;
      if (points.length > 1) {
        var startDistance = _this.startDistance;
        var currentDistance = calcDistance(points[0], points[1]);
        ev.zoom = currentDistance / startDistance;
        ev.center = _this.center;
        _this.emitStart("pinch", ev);
        _this.emitEvent("pinch", ev);
      } else {
        var deltaX = points[0].x - startPoints[0].x;
        var deltaY = points[0].y - startPoints[0].y;
        var direction2 = _this.direction || calcDirection(startPoints[0], points[0]);
        _this.direction = direction2;
        var eventType = _this.getEventType(points);
        ev.direction = direction2;
        ev.deltaX = deltaX;
        ev.deltaY = deltaY;
        _this.emitStart(eventType, ev);
        _this.emitEvent(eventType, ev);
        var prevMoveTime = _this.lastMoveTime;
        var now = Date.now();
        if (now - prevMoveTime > 0) {
          _this.prevMoveTime = prevMoveTime;
          _this.prevMovePoints = _this.lastMovePoints;
          _this.lastMoveTime = now;
          _this.lastMovePoints = points;
        }
      }
    };
    this._end = function(ev) {
      var points = convertPoints2(ev, _this.canvas);
      ev.points = points;
      _this.emitEnd(ev);
      _this.emitEvent("touchend", ev);
      var lastMoveTime = _this.lastMoveTime;
      var now = Date.now();
      if (now - lastMoveTime < 100) {
        var prevMoveTime = _this.prevMoveTime || _this.startTime;
        var intervalTime = lastMoveTime - prevMoveTime;
        if (intervalTime > 0) {
          var prevMovePoints = _this.prevMovePoints || _this.startPoints;
          var lastMovePoints = _this.lastMovePoints;
          var velocity = calcDistance(prevMovePoints[0], lastMovePoints[0]) / intervalTime;
          if (velocity > 0.3) {
            ev.velocity = velocity;
            ev.direction = calcDirection(prevMovePoints[0], lastMovePoints[0]);
            ev.velocityX = (lastMovePoints[0].x - prevMovePoints[0].x) / intervalTime;
            ev.velocityY = (lastMovePoints[0].y - prevMovePoints[0].y) / intervalTime;
            _this.emitEvent("swipe", ev);
          }
        }
      }
      _this.reset();
      var touches = ev.touches;
      if (touches && touches.length > 0) {
        _this._start(ev);
      }
    };
    this._cancel = function(ev) {
      _this.emitEvent("touchcancel", ev);
      _this.reset();
    };
    this.canvas = canvas;
    this.delegateEvent(el);
    this.processEvent = {};
  }
  _createClass(EventController2, [{
    key: "delegateEvent",
    value: function delegateEvent(canvasEl) {
      canvasEl.addEventListener("click", this._click);
      canvasEl.addEventListener("touchstart", this._start);
      canvasEl.addEventListener("touchmove", this._move);
      canvasEl.addEventListener("touchend", this._end);
      canvasEl.addEventListener("touchcancel", this._cancel);
    }
  }, {
    key: "emitEvent",
    value: function emitEvent(type, ev) {
      var canvas = this.canvas;
      canvas.emit(type, ev);
    }
  }, {
    key: "getEventType",
    value: function getEventType(points) {
      var eventType = this.eventType, canvas = this.canvas, startTime = this.startTime, startPoints = this.startPoints;
      if (eventType) {
        return eventType;
      }
      var type;
      var panEventListeners = canvas.__events.pan;
      if (!panEventListeners || !panEventListeners.length) {
        type = "press";
      } else {
        var now = Date.now();
        if (now - startTime > PRESS_DELAY && calcDistance(startPoints[0], points[0]) < 10) {
          type = "press";
        } else {
          type = "pan";
        }
      }
      this.eventType = type;
      return type;
    }
  }, {
    key: "enable",
    value: function enable(eventType) {
      this.processEvent[eventType] = true;
    }
    // 是否进行中的事件
  }, {
    key: "isProcess",
    value: function isProcess(eventType) {
      return this.processEvent[eventType];
    }
    // 触发start事件
  }, {
    key: "emitStart",
    value: function emitStart(type, ev) {
      if (this.isProcess(type)) {
        return;
      }
      this.enable(type);
      this.emitEvent("".concat(type, "start"), ev);
    }
    // 触发end事件
  }, {
    key: "emitEnd",
    value: function emitEnd(ev) {
      var _this2 = this;
      var processEvent = this.processEvent;
      Object.keys(processEvent).forEach(function(type) {
        _this2.emitEvent("".concat(type, "end"), ev);
        delete processEvent[type];
      });
    }
  }, {
    key: "clearPressTimeout",
    value: function clearPressTimeout() {
      if (this.pressTimeout) {
        clearTimeout(this.pressTimeout);
        this.pressTimeout = null;
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.clearPressTimeout();
      this.startTime = 0;
      this.startPoints = null;
      this.startDistance = 0;
      this.direction = null;
      this.eventType = null;
      this.pinch = false;
      this.prevMoveTime = 0;
      this.prevMovePoints = null;
      this.lastMoveTime = 0;
      this.lastMovePoints = null;
    }
  }]);
  return EventController2;
}();
var controller_default = EventController;

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/engine/canvas-element.js
var CanvasElement = function(_EventEmit) {
  _inherits(CanvasElement2, _EventEmit);
  var _super = _createSuper(CanvasElement2);
  function CanvasElement2(ctx2) {
    var _this;
    _classCallCheck(this, CanvasElement2);
    _this = _super.call(this);
    _this.context = ctx2;
    var canvas = ctx2.canvas || {};
    _this.width = canvas.width || 0;
    _this.height = canvas.height || 0;
    _this.style = {};
    _this.currentStyle = {};
    _this.attrs = {};
    _this.isCanvasElement = true;
    return _this;
  }
  _createClass(CanvasElement2, [{
    key: "getContext",
    value: function getContext() {
      return this.context;
    }
  }, {
    key: "getBoundingClientRect",
    value: function getBoundingClientRect() {
      var width = this.width;
      var height = this.height;
      return {
        top: 0,
        right: width,
        bottom: height,
        left: 0
      };
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(key, value) {
      this.attrs[key] = value;
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(type, listener) {
      this.on(type, listener);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, listener) {
      this.off(type, listener);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(type, e) {
      this.emit(type, e);
    }
  }]);
  return CanvasElement2;
}(emit_default);
function supportEventListener(canvas) {
  if (!canvas) {
    return false;
  }
  if (canvas.nodeType !== 1 || !canvas.nodeName || canvas.nodeName.toLowerCase() !== "canvas") {
    return false;
  }
  var support = false;
  try {
    canvas.addEventListener("eventTest", function() {
      support = true;
    });
    canvas.dispatchEvent(new Event("eventTest"));
  } catch (error) {
    support = false;
  }
  return support;
}
var canvas_element_default = {
  create: function create2(ctx2) {
    if (!ctx2) {
      return null;
    }
    if (supportEventListener(ctx2.canvas)) {
      return ctx2.canvas;
    }
    return new CanvasElement(ctx2);
  }
};

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/util/array.js
function remove(arr, obj) {
  if (!arr) {
    return;
  }
  var index = arr.indexOf(obj);
  if (index !== -1) {
    arr.splice(index, 1);
  }
}

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/util/style-parse.js
function _mod(n, m) {
  return (n % m + m) % m;
}
function _addStop(steps, gradient) {
  each_default(steps, function(item) {
    item = item.split(":");
    gradient.addColorStop(Number(item[0]), item[1]);
  });
}
function _parseLineGradient(color2, shape, context) {
  var arr = color2.split(" ");
  var angle2 = arr[0].slice(2, arr[0].length - 1);
  angle2 = _mod(parseFloat(angle2) * Math.PI / 180, Math.PI * 2);
  var steps = arr.slice(1);
  var _shape$getBBox = shape.getBBox(), minX = _shape$getBBox.minX, minY = _shape$getBBox.minY, maxX = _shape$getBBox.maxX, maxY = _shape$getBBox.maxY;
  var start2;
  var end2;
  if (angle2 >= 0 && angle2 < 0.5 * Math.PI) {
    start2 = {
      x: minX,
      y: minY
    };
    end2 = {
      x: maxX,
      y: maxY
    };
  } else if (0.5 * Math.PI <= angle2 && angle2 < Math.PI) {
    start2 = {
      x: maxX,
      y: minY
    };
    end2 = {
      x: minX,
      y: maxY
    };
  } else if (Math.PI <= angle2 && angle2 < 1.5 * Math.PI) {
    start2 = {
      x: maxX,
      y: maxY
    };
    end2 = {
      x: minX,
      y: minY
    };
  } else {
    start2 = {
      x: minX,
      y: maxY
    };
    end2 = {
      x: maxX,
      y: minY
    };
  }
  var tanTheta = Math.tan(angle2);
  var tanTheta2 = tanTheta * tanTheta;
  var x = (end2.x - start2.x + tanTheta * (end2.y - start2.y)) / (tanTheta2 + 1) + start2.x;
  var y = tanTheta * (end2.x - start2.x + tanTheta * (end2.y - start2.y)) / (tanTheta2 + 1) + start2.y;
  var gradient = context.createLinearGradient(start2.x, start2.y, x, y);
  _addStop(steps, gradient);
  return gradient;
}
function _parseRadialGradient(color2, shape, context) {
  var arr = color2.split(" ");
  var circleCfg = arr[0].slice(2, arr[0].length - 1);
  circleCfg = circleCfg.split(",");
  var fx = parseFloat(circleCfg[0]);
  var fy = parseFloat(circleCfg[1]);
  var fr = parseFloat(circleCfg[2]);
  var steps = arr.slice(1);
  if (fr === 0) {
    var _color = steps[steps.length - 1];
    return _color.split(":")[1];
  }
  var _shape$getBBox2 = shape.getBBox(), width = _shape$getBBox2.width, height = _shape$getBBox2.height, minX = _shape$getBBox2.minX, minY = _shape$getBBox2.minY;
  var r = Math.sqrt(width * width + height * height) / 2;
  var gradient = context.createRadialGradient(minX + width * fx, minY + height * fy, fr * r, minX + width / 2, minY + height / 2, r);
  _addStop(steps, gradient);
  return gradient;
}
function parseStyle(color2, shape, context) {
  if (color2[1] === "(") {
    try {
      var firstCode = color2[0];
      if (firstCode === "l") {
        return _parseLineGradient(color2, shape, context);
      } else if (firstCode === "r") {
        return _parseRadialGradient(color2, shape, context);
      }
    } catch (ev) {
      console.error("error in parsing gradient string, please check if there are any extra whitespaces.");
      console.error(ev);
    }
  }
  return color2;
}

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/engine/element.js
var ALIAS_ATTRS_MAP = {
  stroke: "strokeStyle",
  fill: "fillStyle",
  opacity: "globalAlpha"
};
var SHAPE_ATTRS = [
  "fillStyle",
  "font",
  "globalAlpha",
  "lineCap",
  "lineWidth",
  "lineJoin",
  "miterLimit",
  "shadowBlur",
  "shadowColor",
  "shadowOffsetX",
  "shadowOffsetY",
  "strokeStyle",
  "textAlign",
  "textBaseline",
  "lineDash",
  "shadow"
  // 兼容支付宝小程序
];
var CLIP_SHAPES = ["circle", "sector", "polygon", "rect", "polyline", "custom"];
var Element2 = function() {
  function Element3(cfg) {
    _classCallCheck(this, Element3);
    this._initProperties();
    mix(this._attrs, cfg);
    var attrs = this._attrs.attrs;
    if (attrs) {
      this.initAttrs(attrs);
    }
    this.initTransform();
  }
  _createClass(Element3, [{
    key: "_initProperties",
    value: function _initProperties() {
      this._attrs = _objectSpread2(_objectSpread2({}, this._attrs), {}, {
        zIndex: 0,
        visible: true,
        destroyed: false
      });
    }
  }, {
    key: "get",
    value: function get(name) {
      return this._attrs[name];
    }
  }, {
    key: "set",
    value: function set(name, value) {
      this._attrs[name] = value;
    }
  }, {
    key: "isGroup",
    value: function isGroup() {
      return this.get("isGroup");
    }
  }, {
    key: "isShape",
    value: function isShape() {
      return this.get("isShape");
    }
  }, {
    key: "initAttrs",
    value: function initAttrs(attrs) {
      this.attr(mix(this.getDefaultAttrs(), attrs));
    }
  }, {
    key: "getDefaultAttrs",
    value: function getDefaultAttrs() {
      return {};
    }
  }, {
    key: "_setAttr",
    value: function _setAttr(name, value) {
      var attrs = this._attrs.attrs;
      if (name === "clip") {
        value = this._setAttrClip(value);
      } else {
        var alias = ALIAS_ATTRS_MAP[name];
        if (alias) {
          attrs[alias] = value;
        }
      }
      attrs[name] = value;
    }
  }, {
    key: "_getAttr",
    value: function _getAttr(name) {
      var _this$_attrs, _this$_attrs$attrs;
      return (_this$_attrs = this._attrs) === null || _this$_attrs === void 0 ? void 0 : (_this$_attrs$attrs = _this$_attrs.attrs) === null || _this$_attrs$attrs === void 0 ? void 0 : _this$_attrs$attrs[name];
    }
  }, {
    key: "_afterAttrsSet",
    value: function _afterAttrsSet() {
    }
  }, {
    key: "_setAttrClip",
    value: function _setAttrClip(clip) {
      if (clip && CLIP_SHAPES.indexOf(clip._attrs.type) > -1) {
        if (clip.get("canvas") === null) {
          clip = _objectSpread2({}, clip);
        }
        clip.set("parent", this.get("parent"));
        clip.set("context", this.get("context"));
        return clip;
      }
      return null;
    }
  }, {
    key: "attr",
    value: function attr(name, value) {
      if (this.get("destroyed"))
        return null;
      var argumentsLen = arguments.length;
      if (argumentsLen === 0) {
        return this._attrs.attrs;
      }
      if (is_object_default(name)) {
        this._attrs.bbox = null;
        for (var k in name) {
          this._setAttr(k, name[k]);
        }
        if (this._afterAttrsSet) {
          this._afterAttrsSet();
        }
        return this;
      }
      if (argumentsLen === 2) {
        this._attrs.bbox = null;
        this._setAttr(name, value);
        if (this._afterAttrsSet) {
          this._afterAttrsSet();
        }
        return this;
      }
      return this._getAttr(name);
    }
  }, {
    key: "getParent",
    value: function getParent() {
      return this.get("parent");
    }
  }, {
    key: "draw",
    value: function draw(context) {
      if (this.get("destroyed")) {
        return;
      }
      if (this.get("visible")) {
        this.setContext(context);
        this.drawInner(context);
        this.restoreContext(context);
      }
    }
  }, {
    key: "setContext",
    value: function setContext(context) {
      var clip = this._attrs.attrs.clip;
      context.save();
      if (clip && !clip._attrs.destroyed) {
        clip.resetTransform(context);
        clip.createPath(context);
        context.clip();
      }
      this.resetContext(context);
      this.resetTransform(context);
    }
  }, {
    key: "restoreContext",
    value: function restoreContext(context) {
      context.restore();
    }
  }, {
    key: "resetContext",
    value: function resetContext(context) {
      var elAttrs = this._attrs.attrs;
      for (var k in elAttrs) {
        if (SHAPE_ATTRS.indexOf(k) > -1) {
          var v = elAttrs[k];
          if ((k === "fillStyle" || k === "strokeStyle") && v) {
            v = parseStyle(v, this, context);
          }
          if (k === "lineDash" && context.setLineDash && is_array_default(v)) {
            context.setLineDash(v);
          } else {
            context[k] = v;
          }
        }
      }
    }
  }, {
    key: "hasFill",
    value: function hasFill() {
      return this.get("canFill") && this._attrs.attrs.fillStyle;
    }
  }, {
    key: "hasStroke",
    value: function hasStroke() {
      return this.get("canStroke") && this._attrs.attrs.strokeStyle;
    }
  }, {
    key: "drawInner",
    value: function drawInner(_context) {
    }
  }, {
    key: "show",
    value: function show() {
      this.set("visible", true);
      return this;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.set("visible", false);
      return this;
    }
  }, {
    key: "isVisible",
    value: function isVisible() {
      return this.get("visible");
    }
  }, {
    key: "getAriaLabel",
    value: function getAriaLabel() {
      var _this$_attrs2 = this._attrs, destroyed = _this$_attrs2.destroyed, visible = _this$_attrs2.visible, isShape = _this$_attrs2.isShape, aria = _this$_attrs2.aria;
      if (destroyed || !visible || isShape && !aria) {
        return;
      }
      return this._getAriaLabel();
    }
  }, {
    key: "_getAriaLabel",
    value: function _getAriaLabel2() {
      return this._attrs.ariaLabel;
    }
  }, {
    key: "_removeFromParent",
    value: function _removeFromParent() {
      var parent = this.get("parent");
      if (parent) {
        var children = parent.get("children");
        remove(children, this);
      }
      return this;
    }
  }, {
    key: "remove",
    value: function remove2(destroy) {
      if (destroy) {
        this.destroy();
      } else {
        this._removeFromParent();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var destroyed = this.get("destroyed");
      if (destroyed) {
        return null;
      }
      this._removeFromParent();
      var attrs = this._attrs.attrs;
      this._attrs = {
        attrs
      };
      this.set("destroyed", true);
    }
  }, {
    key: "getBBox",
    value: function getBBox() {
      return {
        minX: 0,
        maxX: 0,
        minY: 0,
        maxY: 0,
        width: 0,
        height: 0
      };
    }
  }, {
    key: "initTransform",
    value: function initTransform() {
      var attrs = this._attrs.attrs;
      if (!attrs) {
        attrs = {};
      }
      if (!attrs.matrix) {
        attrs.matrix = [1, 0, 0, 1, 0, 0];
      }
      this._attrs.attrs = attrs;
    }
  }, {
    key: "getMatrix",
    value: function getMatrix() {
      return this._attrs.attrs.matrix;
    }
  }, {
    key: "setMatrix",
    value: function setMatrix(m) {
      this._attrs.attrs.matrix = [m[0], m[1], m[2], m[3], m[4], m[5]];
    }
  }, {
    key: "transform",
    value: function transform2(actions) {
      var matrix = this._attrs.attrs.matrix;
      this._attrs.attrs.matrix = matrix_default.transform(matrix, actions);
      return this;
    }
  }, {
    key: "setTransform",
    value: function setTransform(actions) {
      this._attrs.attrs.matrix = [1, 0, 0, 1, 0, 0];
      return this.transform(actions);
    }
  }, {
    key: "translate",
    value: function translate2(x, y) {
      var matrix = this._attrs.attrs.matrix;
      matrix_default.translate(matrix, matrix, [x, y]);
    }
  }, {
    key: "rotate",
    value: function rotate2(rad) {
      var matrix = this._attrs.attrs.matrix;
      matrix_default.rotate(matrix, matrix, rad);
    }
  }, {
    key: "scale",
    value: function scale3(sx, sy) {
      var matrix = this._attrs.attrs.matrix;
      matrix_default.scale(matrix, matrix, [sx, sy]);
    }
  }, {
    key: "moveTo",
    value: function moveTo(x, y) {
      var cx = this._attrs.x || 0;
      var cy = this._attrs.y || 0;
      this.translate(x - cx, y - cy);
      this.set("x", x);
      this.set("y", y);
    }
  }, {
    key: "apply",
    value: function apply(v) {
      var m = this._attrs.attrs.matrix;
      vector2_default.transformMat2d(v, v, m);
      return this;
    }
  }, {
    key: "resetTransform",
    value: function resetTransform(context) {
      var mo = this._attrs.attrs.matrix;
      if (matrix_default.isChanged(mo)) {
        context.transform(mo[0], mo[1], mo[2], mo[3], mo[4], mo[5]);
      }
    }
  }, {
    key: "isDestroyed",
    value: function isDestroyed() {
      return this.get("destroyed");
    }
  }]);
  return Element3;
}();
var element_default = Element2;

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/engine/shape/shape.js
var Shape = function(_Element) {
  _inherits(Shape2, _Element);
  var _super = _createSuper(Shape2);
  function Shape2() {
    _classCallCheck(this, Shape2);
    return _super.apply(this, arguments);
  }
  _createClass(Shape2, [{
    key: "_initProperties",
    value: (
      /* eslint-enable */
      function _initProperties() {
        this._attrs = _objectSpread2(_objectSpread2({}, this._attrs), {}, {
          zIndex: 0,
          visible: true,
          destroyed: false,
          isShape: true,
          attrs: {}
        });
      }
    )
  }, {
    key: "getType",
    value: function getType2() {
      return this._attrs.type;
    }
  }, {
    key: "drawInner",
    value: function drawInner(context) {
      var attrs = this.get("attrs");
      this.createPath(context);
      var originOpacity = context.globalAlpha;
      if (this.hasFill()) {
        var fillOpacity = attrs.fillOpacity;
        if (!is_nil_default(fillOpacity) && fillOpacity !== 1) {
          context.globalAlpha = fillOpacity;
          context.fill();
          context.globalAlpha = originOpacity;
        } else {
          context.fill();
        }
      }
      if (this.hasStroke()) {
        var lineWidth = attrs.lineWidth;
        if (lineWidth > 0) {
          var strokeOpacity = attrs.strokeOpacity;
          if (!is_nil_default(strokeOpacity) && strokeOpacity !== 1) {
            context.globalAlpha = strokeOpacity;
          }
          context.stroke();
        }
      }
    }
  }, {
    key: "getBBox",
    value: function getBBox() {
      var bbox = this._attrs.bbox;
      if (!bbox) {
        bbox = this.calculateBox();
        if (bbox) {
          bbox.x = bbox.minX;
          bbox.y = bbox.minY;
          bbox.width = bbox.maxX - bbox.minX;
          bbox.height = bbox.maxY - bbox.minY;
        }
        this._attrs.bbox = bbox;
      }
      return bbox;
    }
  }, {
    key: "calculateBox",
    value: function calculateBox() {
      return null;
    }
  }, {
    key: "createPath",
    value: function createPath(_context) {
    }
  }]);
  return Shape2;
}(element_default);
var shape_default = Shape;

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/superPropBase.js
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null)
      break;
  }
  return object;
}

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/get.js
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get2(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base)
        return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/engine/shape/rect.js
function parsePadding(padding) {
  var top = 0;
  var right = 0;
  var bottom = 0;
  var left = 0;
  if (is_number_default(padding)) {
    top = bottom = left = right = padding;
  } else if (is_array_default(padding)) {
    top = padding[0];
    right = !is_nil_default(padding[1]) ? padding[1] : padding[0];
    bottom = !is_nil_default(padding[2]) ? padding[2] : padding[0];
    left = !is_nil_default(padding[3]) ? padding[3] : right;
  }
  return [top, right, bottom, left];
}
function parseRadius(radius, width, height) {
  radius = parsePadding(radius);
  if (!radius[0] && !radius[1] && !radius[2] && !radius[3]) {
    return radius;
  }
  var minWidth = Math.max(radius[0] + radius[1], radius[2] + radius[3]);
  var minHeight = Math.max(radius[0] + radius[3], radius[1] + radius[2]);
  var scale3 = Math.min(width / minWidth, height / minHeight);
  if (scale3 < 1) {
    return radius.map(function(r) {
      return r * scale3;
    });
  }
  return radius;
}
var Rect = function(_Shape) {
  _inherits(Rect4, _Shape);
  var _super = _createSuper(Rect4);
  function Rect4() {
    _classCallCheck(this, Rect4);
    return _super.apply(this, arguments);
  }
  _createClass(Rect4, [{
    key: "_initProperties",
    value: function _initProperties() {
      _get(_getPrototypeOf(Rect4.prototype), "_initProperties", this).call(this);
      this._attrs.canFill = true;
      this._attrs.canStroke = true;
      this._attrs.type = "rect";
    }
  }, {
    key: "getDefaultAttrs",
    value: function getDefaultAttrs() {
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        radius: 0,
        lineWidth: 0
      };
    }
  }, {
    key: "createRadiusPath",
    value: function createRadiusPath(context, x, y, width, height, radius) {
      radius = parseRadius(radius, width, height);
      context.moveTo(x + radius[0], y);
      context.lineTo(x + width - radius[1], y);
      context.arc(x + width - radius[1], y + radius[1], radius[1], -Math.PI / 2, 0, false);
      context.lineTo(x + width, y + height - radius[2]);
      context.arc(x + width - radius[2], y + height - radius[2], radius[2], 0, Math.PI / 2, false);
      context.lineTo(x + radius[3], y + height);
      context.arc(x + radius[3], y + height - radius[3], radius[3], Math.PI / 2, Math.PI, false);
      context.lineTo(x, y + radius[0]);
      context.arc(x + radius[0], y + radius[0], radius[0], Math.PI, Math.PI * 3 / 2, false);
      context.closePath();
    }
  }, {
    key: "createPath",
    value: function createPath(context) {
      var attrs = this.get("attrs");
      var x = attrs.x, y = attrs.y, width = attrs.width, height = attrs.height, radius = attrs.radius;
      context.beginPath();
      if (!radius || !(width * height)) {
        context.rect(x, y, width, height);
      } else {
        this.createRadiusPath(context, x, y, width, height, radius);
      }
    }
  }, {
    key: "calculateBox",
    value: function calculateBox() {
      var attrs = this.get("attrs");
      var x = attrs.x, y = attrs.y, width = attrs.width, height = attrs.height;
      return {
        minX: x,
        minY: y,
        maxX: x + width,
        maxY: y + height
      };
    }
  }]);
  return Rect4;
}(shape_default);
var rect_default = Rect;

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/engine/shape/image.js
var imageCaches = {};
var ImageShape = function(_Rect) {
  _inherits(ImageShape2, _Rect);
  var _super = _createSuper(ImageShape2);
  function ImageShape2() {
    _classCallCheck(this, ImageShape2);
    return _super.apply(this, arguments);
  }
  _createClass(ImageShape2, [{
    key: "_initProperties",
    value: function _initProperties() {
      _get(_getPrototypeOf(ImageShape2.prototype), "_initProperties", this).call(this);
      this._attrs.canFill = false;
      this._attrs.canStroke = false;
      this._attrs.loading = false;
      this._attrs.image = null;
      this._attrs.type = "image";
    }
  }, {
    key: "draw",
    value: function draw(context) {
      var _this = this;
      if (this.get("loading")) {
        return;
      }
      var image = this.get("image");
      if (image) {
        _get(_getPrototypeOf(ImageShape2.prototype), "draw", this).call(this, context);
        return;
      }
      var attrs = this.get("attrs");
      var src = attrs.src;
      if (src) {
        var cacheImage = this.get("cacheImage");
        if (cacheImage && imageCaches[src]) {
          this.set("image", imageCaches[src]);
          this.draw(context);
          return;
        }
        var _image = null;
        var canvas = this.get("canvas");
        if (canvas && canvas.get("createImage")) {
          var createImage = canvas.get("createImage");
          _image = createImage();
        } else if (window.Image) {
          _image = new Image();
        }
        if (_image) {
          this.set("loading", true);
          _image.crossOrigin = "";
          _image.onload = function() {
            _this.set("loading", false);
            _this.set("image", _image);
            canvas.draw();
          };
          _image.src = src;
          if (cacheImage) {
            imageCaches[src] = _image;
          }
        }
      }
    }
  }, {
    key: "createPath",
    value: function createPath(context) {
      var image = this.get("image");
      this.drawImage(context, image);
    }
  }, {
    key: "drawImage",
    value: function drawImage(context, image) {
      var _this$_attrs = this._attrs, attrs = _this$_attrs.attrs, destroyed = _this$_attrs.destroyed;
      if (destroyed) {
        return;
      }
      var x = attrs.x, y = attrs.y, width = attrs.width, height = attrs.height, sx = attrs.sx, sy = attrs.sy, swidth = attrs.swidth, sheight = attrs.sheight, radius = attrs.radius, fillOpacity = attrs.fillOpacity;
      if (radius) {
        context.save();
        this.createRadiusPath(context, x, y, width, height, radius);
        context.clip();
      }
      var originOpacity = context.globalAlpha;
      if (!is_nil_default(fillOpacity)) {
        context.globalAlpha = fillOpacity;
      }
      if (!is_nil_default(sx) && !is_nil_default(sy) && !is_nil_default(swidth) && !is_nil_default(sheight)) {
        context.drawImage(image, sx, sy, swidth, sheight, x, y, width, height);
      } else {
        context.drawImage(image, x, y, width, height);
      }
      context.globalAlpha = originOpacity;
      if (radius) {
        context.restore();
      }
    }
  }]);
  return ImageShape2;
}(rect_default);
var image_default = ImageShape;

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/engine/shape/circle.js
var Circle = function(_Shape) {
  _inherits(Circle2, _Shape);
  var _super = _createSuper(Circle2);
  function Circle2() {
    _classCallCheck(this, Circle2);
    return _super.apply(this, arguments);
  }
  _createClass(Circle2, [{
    key: "_initProperties",
    value: function _initProperties() {
      _get(_getPrototypeOf(Circle2.prototype), "_initProperties", this).call(this);
      this._attrs.canFill = true;
      this._attrs.canStroke = true;
      this._attrs.type = "circle";
    }
  }, {
    key: "getDefaultAttrs",
    value: function getDefaultAttrs() {
      return {
        x: 0,
        y: 0,
        r: 0,
        lineWidth: 0
      };
    }
  }, {
    key: "createPath",
    value: function createPath(context) {
      var attrs = this.get("attrs");
      var x = attrs.x, y = attrs.y, r = attrs.r;
      context.beginPath();
      context.arc(x, y, r, 0, Math.PI * 2, false);
      context.closePath();
    }
  }, {
    key: "calculateBox",
    value: function calculateBox() {
      var attrs = this.get("attrs");
      var x = attrs.x, y = attrs.y, r = attrs.r;
      return {
        minX: x - r,
        maxX: x + r,
        minY: y - r,
        maxY: y + r
      };
    }
  }]);
  return Circle2;
}(shape_default);
var circle_default = Circle;

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/engine/shape/line.js
var Line = function(_Shape) {
  _inherits(Line4, _Shape);
  var _super = _createSuper(Line4);
  function Line4() {
    _classCallCheck(this, Line4);
    return _super.apply(this, arguments);
  }
  _createClass(Line4, [{
    key: "_initProperties",
    value: function _initProperties() {
      _get(_getPrototypeOf(Line4.prototype), "_initProperties", this).call(this);
      this._attrs.canStroke = true;
      this._attrs.type = "line";
    }
  }, {
    key: "getDefaultAttrs",
    value: function getDefaultAttrs() {
      return {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        lineWidth: 1
      };
    }
  }, {
    key: "createPath",
    value: function createPath(context) {
      var attrs = this.get("attrs");
      var x1 = attrs.x1, y1 = attrs.y1, x2 = attrs.x2, y2 = attrs.y2;
      context.beginPath();
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
    }
  }, {
    key: "calculateBox",
    value: function calculateBox() {
      var attrs = this.get("attrs");
      var x1 = attrs.x1, y1 = attrs.y1, x2 = attrs.x2, y2 = attrs.y2, lineWidth = attrs.lineWidth;
      return getBBoxFromLine(x1, y1, x2, y2, lineWidth);
    }
  }]);
  return Line4;
}(shape_default);
var line_default = Line;

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/engine/shape/polygon.js
var Polygon = function(_Shape) {
  _inherits(Polygon2, _Shape);
  var _super = _createSuper(Polygon2);
  function Polygon2() {
    _classCallCheck(this, Polygon2);
    return _super.apply(this, arguments);
  }
  _createClass(Polygon2, [{
    key: "_initProperties",
    value: function _initProperties() {
      _get(_getPrototypeOf(Polygon2.prototype), "_initProperties", this).call(this);
      this._attrs.canFill = true;
      this._attrs.canStroke = true;
      this._attrs.type = "polygon";
    }
  }, {
    key: "getDefaultAttrs",
    value: function getDefaultAttrs() {
      return {
        points: null,
        lineWidth: 0
      };
    }
  }, {
    key: "createPath",
    value: function createPath(context) {
      var attrs = this.get("attrs");
      var points = attrs.points;
      context.beginPath();
      for (var i = 0, len = points.length; i < len; i++) {
        var point = points[i];
        if (i === 0) {
          context.moveTo(point.x, point.y);
        } else {
          context.lineTo(point.x, point.y);
        }
      }
      context.closePath();
    }
  }, {
    key: "calculateBox",
    value: function calculateBox() {
      var attrs = this.get("attrs");
      var points = attrs.points;
      return getBBoxFromPoints(points);
    }
  }]);
  return Polygon2;
}(shape_default);
var polygon_default = Polygon;

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/engine/shape/polyline.js
function _filterPoints(points) {
  var filteredPoints = [];
  for (var i = 0, len = points.length; i < len; i++) {
    var point = points[i];
    if (!isNaN(point.x) && !isNaN(point.y)) {
      filteredPoints.push(point);
    }
  }
  return filteredPoints;
}
var Polyline = function(_Shape) {
  _inherits(Polyline2, _Shape);
  var _super = _createSuper(Polyline2);
  function Polyline2() {
    _classCallCheck(this, Polyline2);
    return _super.apply(this, arguments);
  }
  _createClass(Polyline2, [{
    key: "_initProperties",
    value: function _initProperties() {
      _get(_getPrototypeOf(Polyline2.prototype), "_initProperties", this).call(this);
      this._attrs.canFill = true;
      this._attrs.canStroke = true;
      this._attrs.type = "polyline";
    }
  }, {
    key: "getDefaultAttrs",
    value: function getDefaultAttrs() {
      return {
        points: null,
        lineWidth: 1,
        smooth: false
      };
    }
  }, {
    key: "createPath",
    value: function createPath(context) {
      var attrs = this.get("attrs");
      var points = attrs.points, smooth = attrs.smooth;
      var filteredPoints = _filterPoints(points);
      context.beginPath();
      if (filteredPoints.length) {
        context.moveTo(filteredPoints[0].x, filteredPoints[0].y);
        if (smooth) {
          var constaint = [[0, 0], [1, 1]];
          var sps = catmullRom2bezier(filteredPoints, false, constaint);
          for (var i = 0, n = sps.length; i < n; i++) {
            var sp = sps[i];
            context.bezierCurveTo(sp[1], sp[2], sp[3], sp[4], sp[5], sp[6]);
          }
        } else {
          var _i;
          var l;
          for (_i = 1, l = filteredPoints.length - 1; _i < l; _i++) {
            context.lineTo(filteredPoints[_i].x, filteredPoints[_i].y);
          }
          context.lineTo(filteredPoints[l].x, filteredPoints[l].y);
        }
      }
    }
  }, {
    key: "calculateBox",
    value: function calculateBox() {
      var attrs = this.get("attrs");
      var points = attrs.points, smooth = attrs.smooth, lineWidth = attrs.lineWidth;
      var filteredPoints = _filterPoints(points);
      if (smooth) {
        var newPoints = [];
        var constaint = [[0, 0], [1, 1]];
        var sps = catmullRom2bezier(filteredPoints, false, constaint);
        for (var i = 0, n = sps.length; i < n; i++) {
          var sp = sps[i];
          if (i === 0) {
            newPoints.push([filteredPoints[0].x, filteredPoints[0].y, sp[1], sp[2], sp[3], sp[4], sp[5], sp[6]]);
          } else {
            var lastPoint = sps[i - 1];
            newPoints.push([lastPoint[5], lastPoint[6], sp[1], sp[2], sp[3], sp[4], sp[5], sp[6]]);
          }
        }
        return getBBoxFromBezierGroup(newPoints, lineWidth);
      }
      return getBBoxFromPoints(filteredPoints, lineWidth);
    }
  }]);
  return Polyline2;
}(shape_default);
var polyline_default = Polyline;

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/engine/shape/arc.js
var Arc = function(_Shape) {
  _inherits(Arc2, _Shape);
  var _super = _createSuper(Arc2);
  function Arc2() {
    _classCallCheck(this, Arc2);
    return _super.apply(this, arguments);
  }
  _createClass(Arc2, [{
    key: "_initProperties",
    value: function _initProperties() {
      _get(_getPrototypeOf(Arc2.prototype), "_initProperties", this).call(this);
      this._attrs.canStroke = true;
      this._attrs.canFill = true;
      this._attrs.type = "arc";
    }
  }, {
    key: "getDefaultAttrs",
    value: function getDefaultAttrs() {
      return {
        x: 0,
        y: 0,
        r: 0,
        startAngle: 0,
        endAngle: Math.PI * 2,
        anticlockwise: false,
        lineWidth: 1
      };
    }
  }, {
    key: "createPath",
    value: function createPath(context) {
      var attrs = this.get("attrs");
      var x = attrs.x, y = attrs.y, r = attrs.r, startAngle = attrs.startAngle, endAngle = attrs.endAngle, anticlockwise = attrs.anticlockwise;
      context.beginPath();
      if (startAngle !== endAngle) {
        context.arc(x, y, r, startAngle, endAngle, anticlockwise);
      }
    }
  }, {
    key: "calculateBox",
    value: function calculateBox() {
      var attrs = this.get("attrs");
      var x = attrs.x, y = attrs.y, r = attrs.r, startAngle = attrs.startAngle, endAngle = attrs.endAngle, anticlockwise = attrs.anticlockwise;
      return getBBoxFromArc(x, y, r, startAngle, endAngle, anticlockwise);
    }
  }]);
  return Arc2;
}(shape_default);
var arc_default = Arc;

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/engine/shape/sector.js
var Sector = function(_Shape) {
  _inherits(Sector2, _Shape);
  var _super = _createSuper(Sector2);
  function Sector2() {
    _classCallCheck(this, Sector2);
    return _super.apply(this, arguments);
  }
  _createClass(Sector2, [{
    key: "_initProperties",
    value: function _initProperties() {
      _get(_getPrototypeOf(Sector2.prototype), "_initProperties", this).call(this);
      this._attrs.canFill = true;
      this._attrs.canStroke = true;
      this._attrs.type = "sector";
    }
  }, {
    key: "getDefaultAttrs",
    value: function getDefaultAttrs() {
      return {
        x: 0,
        y: 0,
        lineWidth: 0,
        r: 0,
        r0: 0,
        startAngle: 0,
        endAngle: Math.PI * 2,
        anticlockwise: false
      };
    }
  }, {
    key: "createPath",
    value: function createPath(context) {
      var attrs = this.get("attrs");
      var x = attrs.x, y = attrs.y, startAngle = attrs.startAngle, r = attrs.r, r0 = attrs.r0, anticlockwise = attrs.anticlockwise;
      var endAngle = Math.min(attrs.endAngle, startAngle + Math.PI * 2);
      context.beginPath();
      var unitX = Math.cos(startAngle);
      var unitY = Math.sin(startAngle);
      context.moveTo(unitX * r0 + x, unitY * r0 + y);
      context.lineTo(unitX * r + x, unitY * r + y);
      if (Math.abs(endAngle - startAngle) > 1e-4 || startAngle === 0 && endAngle < 0) {
        context.arc(x, y, r, startAngle, endAngle, anticlockwise);
        context.lineTo(Math.cos(endAngle) * r0 + x, Math.sin(endAngle) * r0 + y);
        if (r0 !== 0) {
          context.arc(x, y, r0, endAngle, startAngle, !anticlockwise);
        }
      }
      context.closePath();
    }
  }, {
    key: "calculateBox",
    value: function calculateBox() {
      var attrs = this.get("attrs");
      var x = attrs.x, y = attrs.y, r = attrs.r, r0 = attrs.r0, startAngle = attrs.startAngle, endAngle = attrs.endAngle, anticlockwise = attrs.anticlockwise;
      var outerBBox = getBBoxFromArc(x, y, r, startAngle, endAngle, anticlockwise);
      var innerBBox = getBBoxFromArc(x, y, r0, startAngle, endAngle, anticlockwise);
      return {
        minX: Math.min(outerBBox.minX, innerBBox.minX),
        minY: Math.min(outerBBox.minY, innerBBox.minY),
        maxX: Math.max(outerBBox.maxX, innerBBox.maxX),
        maxY: Math.max(outerBBox.maxY, innerBBox.maxY)
      };
    }
  }]);
  return Sector2;
}(shape_default);
var sector_default = Sector;

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/util/rect.js
var Rect2 = {
  calcRotatedBox: function calcRotatedBox(_ref) {
    var width = _ref.width, height = _ref.height, rotate2 = _ref.rotate;
    var absRotate = Math.abs(rotate2);
    return {
      width: Math.abs(width * Math.cos(absRotate) + height * Math.sin(absRotate)),
      height: Math.abs(height * Math.cos(absRotate) + width * Math.sin(absRotate))
    };
  }
};
var rect_default2 = Rect2;

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/engine/shape/text.js
var measureText2 = measureText;
var textWidthCacheCounter = 0;
var textWidthCache = {};
var TEXT_CACHE_MAX = 5e3;
var Text = function(_Shape) {
  _inherits(Text2, _Shape);
  var _super = _createSuper(Text2);
  function Text2() {
    _classCallCheck(this, Text2);
    return _super.apply(this, arguments);
  }
  _createClass(Text2, [{
    key: "_initProperties",
    value: function _initProperties() {
      _get(_getPrototypeOf(Text2.prototype), "_initProperties", this).call(this);
      this._attrs.canFill = true;
      this._attrs.canStroke = true;
      this._attrs.type = "text";
    }
  }, {
    key: "getDefaultAttrs",
    value: function getDefaultAttrs() {
      return {
        lineWidth: 0,
        lineCount: 1,
        fontSize: 12,
        fontFamily: "",
        fontStyle: "normal",
        fontWeight: "normal",
        fontVariant: "normal",
        textAlign: "start",
        textBaseline: "bottom",
        lineHeight: null,
        textArr: null
      };
    }
  }, {
    key: "_getFontStyle",
    value: function _getFontStyle() {
      var attrs = this._attrs.attrs;
      var fontSize = attrs.fontSize, fontFamily = attrs.fontFamily, fontWeight = attrs.fontWeight, fontStyle = attrs.fontStyle, fontVariant = attrs.fontVariant;
      return "".concat(fontStyle, " ").concat(fontVariant, " ").concat(fontWeight, " ").concat(fontSize, "px ").concat(fontFamily);
    }
  }, {
    key: "_afterAttrsSet",
    value: function _afterAttrsSet() {
      var attrs = this._attrs.attrs;
      attrs.font = this._getFontStyle();
      if (attrs.text) {
        var text = attrs.text;
        var textArr = null;
        var lineCount = 1;
        if (is_string_default(text) && text.indexOf("\n") !== -1) {
          textArr = text.split("\n");
          lineCount = textArr.length;
        }
        attrs.lineCount = lineCount;
        attrs.textArr = textArr;
      }
      this.set("attrs", attrs);
    }
  }, {
    key: "_getTextHeight",
    value: function _getTextHeight() {
      var attrs = this._attrs.attrs;
      if (attrs.height) {
        return attrs.height;
      }
      var lineCount = attrs.lineCount;
      var fontSize = attrs.fontSize * 1;
      if (lineCount > 1) {
        var spaceingY = this._getSpaceingY();
        return fontSize * lineCount + spaceingY * (lineCount - 1);
      }
      return fontSize;
    }
  }, {
    key: "_getSpaceingY",
    value: function _getSpaceingY() {
      var attrs = this._attrs.attrs;
      var lineHeight = attrs.lineHeight;
      var fontSize = attrs.fontSize * 1;
      return lineHeight ? lineHeight - fontSize : fontSize * 0.14;
    }
  }, {
    key: "drawInner",
    value: function drawInner(context) {
      var attrs = this._attrs.attrs;
      var text = attrs.text;
      var x = attrs.x;
      var y = attrs.y;
      if (is_nil_default(text) || isNaN(x) || isNaN(y)) {
        return;
      }
      var textArr = attrs.textArr;
      var fontSize = attrs.fontSize * 1;
      var spaceingY = this._getSpaceingY();
      if (attrs.rotate) {
        context.translate(x, y);
        context.rotate(attrs.rotate);
        x = 0;
        y = 0;
      }
      var textBaseline = attrs.textBaseline;
      var height;
      if (textArr) {
        height = this._getTextHeight();
      }
      var subY;
      if (this.hasFill()) {
        var fillOpacity = attrs.fillOpacity;
        if (!is_nil_default(fillOpacity) && fillOpacity !== 1) {
          context.globalAlpha = fillOpacity;
        }
        if (textArr) {
          for (var i = 0, len = textArr.length; i < len; i++) {
            var subText = textArr[i];
            subY = y + i * (spaceingY + fontSize) - height + fontSize;
            if (textBaseline === "middle") {
              subY += height - fontSize - (height - fontSize) / 2;
            }
            if (textBaseline === "top") {
              subY += height - fontSize;
            }
            context.fillText(subText, x, subY);
          }
        } else {
          context.fillText(text, x, y);
        }
      }
      if (this.hasStroke()) {
        if (textArr) {
          for (var _i = 0, _len = textArr.length; _i < _len; _i++) {
            var _subText = textArr[_i];
            subY = y + _i * (spaceingY + fontSize) - height + fontSize;
            if (textBaseline === "middle") {
              subY += height - fontSize - (height - fontSize) / 2;
            }
            if (textBaseline === "top") {
              subY += height - fontSize;
            }
            context.strokeText(_subText, x, subY);
          }
        } else {
          context.strokeText(text, x, y);
        }
      }
    }
  }, {
    key: "_getAriaLabel",
    value: function _getAriaLabel2() {
      return this._attrs.attrs.text;
    }
  }, {
    key: "calculateBox",
    value: function calculateBox() {
      var attrs = this._attrs.attrs;
      var x = attrs.x, y = attrs.y, textAlign = attrs.textAlign, textBaseline = attrs.textBaseline;
      var width = this._getTextWidth();
      if (!width) {
        return {
          minX: x,
          minY: y,
          maxX: x,
          maxY: y
        };
      }
      var height = this._getTextHeight();
      if (attrs.rotate) {
        var rotatedBox = rect_default2.calcRotatedBox({
          width,
          height,
          rotate: attrs.rotate
        });
        width = rotatedBox.width;
        height = rotatedBox.height;
      }
      var point = {
        x,
        y: y - height
      };
      if (textAlign) {
        if (textAlign === "end" || textAlign === "right") {
          point.x -= width;
        } else if (textAlign === "center") {
          point.x -= width / 2;
        }
      }
      if (textBaseline) {
        if (textBaseline === "top") {
          point.y += height;
        } else if (textBaseline === "middle") {
          point.y += height / 2;
        }
      }
      return {
        minX: point.x,
        minY: point.y,
        maxX: point.x + width,
        maxY: point.y + height
      };
    }
  }, {
    key: "_getTextWidth",
    value: function _getTextWidth() {
      var attrs = this._attrs.attrs;
      if (attrs.width) {
        return attrs.width;
      }
      var text = attrs.text;
      var context = this.get("context");
      if (is_nil_default(text))
        return void 0;
      var font = attrs.font;
      var textArr = attrs.textArr;
      var key = text + "" + font;
      if (textWidthCache[key]) {
        return textWidthCache[key];
      }
      var width = 0;
      if (textArr) {
        for (var i = 0, length2 = textArr.length; i < length2; i++) {
          var subText = textArr[i];
          width = Math.max(width, measureText2(subText, font, context).width);
        }
      } else {
        width = measureText2(text, font, context).width;
      }
      if (textWidthCacheCounter > TEXT_CACHE_MAX) {
        textWidthCacheCounter = 0;
        textWidthCache = {};
      }
      textWidthCacheCounter++;
      textWidthCache[key] = width;
      return width;
    }
  }]);
  return Text2;
}(shape_default);
var text_default = Text;

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/engine/shape/custom.js
var Custom = function(_Shape) {
  _inherits(Custom2, _Shape);
  var _super = _createSuper(Custom2);
  function Custom2() {
    _classCallCheck(this, Custom2);
    return _super.apply(this, arguments);
  }
  _createClass(Custom2, [{
    key: "_initProperties",
    value: function _initProperties() {
      _get(_getPrototypeOf(Custom2.prototype), "_initProperties", this).call(this);
      this._attrs.canFill = true;
      this._attrs.canStroke = true;
      this._attrs.createPath = null;
      this._attrs.type = "custom";
    }
  }, {
    key: "createPath",
    value: function createPath(context) {
      var createPath2 = this.get("createPath");
      createPath2 && createPath2.call(this, context);
    }
  }, {
    key: "calculateBox",
    value: function calculateBox() {
      var calculateBox2 = this.get("calculateBox");
      return calculateBox2 && calculateBox2.call(this);
    }
  }]);
  return Custom2;
}(shape_default);
var custom_default = Custom;

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/engine/shape/marker.js
var SYMBOLS = {
  circle: function circle(x, y, r, ctx2) {
    ctx2.arc(x, y, r, 0, Math.PI * 2, false);
  },
  square: function square(x, y, r, ctx2) {
    ctx2.moveTo(x - r, y - r);
    ctx2.lineTo(x + r, y - r);
    ctx2.lineTo(x + r, y + r);
    ctx2.lineTo(x - r, y + r);
    ctx2.closePath();
  }
};
var Marker = function(_Shape) {
  _inherits(Marker4, _Shape);
  var _super = _createSuper(Marker4);
  function Marker4() {
    _classCallCheck(this, Marker4);
    return _super.apply(this, arguments);
  }
  _createClass(Marker4, [{
    key: "_initProperties",
    value: function _initProperties() {
      _get(_getPrototypeOf(Marker4.prototype), "_initProperties", this).call(this);
      this._attrs.canFill = true;
      this._attrs.canStroke = true;
      this._attrs.type = "marker";
    }
  }, {
    key: "getDefaultAttrs",
    value: function getDefaultAttrs() {
      return {
        x: 0,
        y: 0,
        lineWidth: 0
      };
    }
  }, {
    key: "createPath",
    value: function createPath(context) {
      var attrs = this.get("attrs");
      var x = attrs.x, y = attrs.y, radius = attrs.radius;
      var symbol = attrs.symbol || "circle";
      var method;
      if (is_function_default(symbol)) {
        method = symbol;
      } else {
        method = SYMBOLS[symbol];
      }
      context.beginPath();
      method(x, y, radius, context, this);
    }
  }, {
    key: "calculateBox",
    value: function calculateBox() {
      var attrs = this.get("attrs");
      var x = attrs.x, y = attrs.y, radius = attrs.radius;
      return {
        minX: x - radius,
        minY: y - radius,
        maxX: x + radius,
        maxY: y + radius
      };
    }
  }]);
  return Marker4;
}(shape_default);
var marker_default = Marker;

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/engine/shape/index.js
shape_default.Rect = rect_default;
shape_default.Image = image_default;
shape_default.Circle = circle_default;
shape_default.Line = line_default;
shape_default.Polygon = polygon_default;
shape_default.Polyline = polyline_default;
shape_default.Arc = arc_default;
shape_default.Sector = sector_default;
shape_default.Text = text_default;
shape_default.Custom = custom_default;
shape_default.Marker = marker_default;
var shape_default2 = shape_default;

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/engine/container.js
var SHAPE_MAP = {};
var INDEX = "_INDEX";
function getComparer(compare2) {
  return function(left, right) {
    var result = compare2(left, right);
    return result === 0 ? left[INDEX] - right[INDEX] : result;
  };
}
var container_default = {
  getGroupClass: function getGroupClass() {
  },
  getChildren: function getChildren() {
    return this.get("children");
  },
  addShape: function addShape(type) {
    var cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var shapeType = SHAPE_MAP[type];
    if (!shapeType) {
      shapeType = upper_first_default(type);
      SHAPE_MAP[type] = shapeType;
    }
    var shape = new shape_default2[shapeType](cfg);
    this.add(shape);
    return shape;
  },
  addGroup: function addGroup(cfg) {
    var groupClass = this.getGroupClass();
    var rst = new groupClass(cfg);
    this.add(rst);
    return rst;
  },
  contain: function contain(item) {
    var children = this.get("children");
    return children.indexOf(item) > -1;
  },
  sort: function sort() {
    var children = this.get("children");
    for (var i = 0, len = children.length; i < len; i++) {
      var child = children[i];
      child[INDEX] = i;
    }
    children.sort(getComparer(function(obj1, obj2) {
      return obj1.get("zIndex") - obj2.get("zIndex");
    }));
    return this;
  },
  drawChildren: function drawChildren(context) {
    this.sort();
    var children = this.get("children");
    for (var i = 0, len = children.length; i < len; i++) {
      var child = children[i];
      child.draw(context);
    }
    return this;
  },
  clear: function clear() {
    var children = this.get("children") || [];
    while (children.length !== 0) {
      children[children.length - 1].remove(true);
    }
    return this;
  },
  add: function add2(items) {
    var children = this.get("children");
    if (!children) {
      children = [];
      this.set("children", children);
    }
    if (!is_array_default(items)) {
      items = [items];
    }
    for (var i = 0, len = items.length; i < len; i++) {
      var item = items[i];
      var parent = item.get("parent");
      if (parent) {
        var descendants = parent.get("children");
        remove(descendants, item);
      }
      this._setEvn(item);
      children.push(item);
    }
    return this;
  },
  _setEvn: function _setEvn(item) {
    var _item$_attrs$attrs, _item$_attrs$attrs2;
    var _this$_attrs = this._attrs, context = _this$_attrs.context, canvas = _this$_attrs.canvas, aria = _this$_attrs.aria;
    var _item$_attrs = item._attrs, isGroup = _item$_attrs.isGroup, type = _item$_attrs.type;
    item._attrs.parent = this;
    item._attrs.context = context;
    item._attrs.canvas = canvas;
    if (aria && item._attrs.aria !== false) {
      item._attrs.aria = aria;
    }
    if (type === "text" && canvas && canvas.get("fontFamily") && !((_item$_attrs$attrs = item._attrs.attrs) === null || _item$_attrs$attrs === void 0 ? void 0 : _item$_attrs$attrs.fontFamily)) {
      item.attr("fontFamily", canvas.get("fontFamily"));
    }
    var clip = (_item$_attrs$attrs2 = item._attrs.attrs) === null || _item$_attrs$attrs2 === void 0 ? void 0 : _item$_attrs$attrs2.clip;
    if (clip) {
      clip._attrs.parent = this;
      clip._attrs.context = context;
      clip._attrs.canvas = canvas;
    }
    if (isGroup) {
      var children = item._attrs.children;
      for (var i = 0, len = children.length; i < len; i++) {
        item._setEvn(children[i]);
      }
    }
  },
  _getAriaLabel: function _getAriaLabel() {
    var _this$_attrs2 = this._attrs, aria = _this$_attrs2.aria, ariaLabel = _this$_attrs2.ariaLabel, children = _this$_attrs2.children;
    if (!aria)
      return;
    var childAriaLabels = [];
    if (children && children.length) {
      for (var i = 0, len = children.length; i < len; i++) {
        var _childAriaLabel = children[i].getAriaLabel();
        if (_childAriaLabel) {
          childAriaLabels.push(_childAriaLabel);
        }
      }
    }
    var childAriaLabel = childAriaLabels.join(" ");
    if (ariaLabel && childAriaLabel) {
      return "".concat(ariaLabel, " ").concat(childAriaLabel, " ");
    }
    return ariaLabel || childAriaLabel;
  }
};

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/engine/group.js
var Group = function(_Rect) {
  _inherits(Group2, _Rect);
  var _super = _createSuper(Group2);
  function Group2() {
    _classCallCheck(this, Group2);
    return _super.apply(this, arguments);
  }
  _createClass(Group2, [{
    key: "_initProperties",
    value: (
      /* eslint-enable */
      function _initProperties() {
        this._attrs = {
          type: "group",
          zIndex: 0,
          visible: true,
          destroyed: false,
          isGroup: true,
          canFill: true,
          canStroke: true,
          children: [],
          attrs: {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            radius: 0,
            lineWidth: 0
          }
        };
      }
    )
  }, {
    key: "getBBox",
    value: function getBBox() {
      var minX = Infinity;
      var maxX = -Infinity;
      var minY = Infinity;
      var maxY = -Infinity;
      var children = this.get("children");
      for (var i = 0, length2 = children.length; i < length2; i++) {
        var child = children[i];
        if (child.get("visible")) {
          var box = child.getBBox();
          if (!box) {
            continue;
          }
          var leftTop = [box.minX, box.minY];
          var leftBottom = [box.minX, box.maxY];
          var rightTop = [box.maxX, box.minY];
          var rightBottom = [box.maxX, box.maxY];
          var matrix = child.attr("matrix");
          vector2_default.transformMat2d(leftTop, leftTop, matrix);
          vector2_default.transformMat2d(leftBottom, leftBottom, matrix);
          vector2_default.transformMat2d(rightTop, rightTop, matrix);
          vector2_default.transformMat2d(rightBottom, rightBottom, matrix);
          minX = Math.min(leftTop[0], leftBottom[0], rightTop[0], rightBottom[0], minX);
          maxX = Math.max(leftTop[0], leftBottom[0], rightTop[0], rightBottom[0], maxX);
          minY = Math.min(leftTop[1], leftBottom[1], rightTop[1], rightBottom[1], minY);
          maxY = Math.max(leftTop[1], leftBottom[1], rightTop[1], rightBottom[1], maxY);
        }
      }
      return {
        minX,
        minY,
        maxX,
        maxY,
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
      };
    }
  }, {
    key: "createPath",
    value: function createPath(context) {
      var attrs = this.get("attrs");
      if (!attrs.fillStyle && !attrs.strokeStyle) {
        return;
      }
      _get(_getPrototypeOf(Group2.prototype), "createPath", this).call(this, context);
    }
  }, {
    key: "drawInner",
    value: function drawInner(context) {
      _get(_getPrototypeOf(Group2.prototype), "drawInner", this).call(this, context);
      this.drawChildren(context);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.get("destroyed")) {
        return;
      }
      this.clear();
      _get(_getPrototypeOf(Group2.prototype), "destroy", this).call(this);
    }
  }]);
  return Group2;
}(rect_default);
mix(Group.prototype, container_default, {
  getGroupClass: function getGroupClass2() {
    return Group;
  }
});
var group_default2 = Group;

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/util/requestAnimationFrame.js
var requestAnimationFrame3 = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.requestAnimationFrame ? window.requestAnimationFrame : function(fn) {
  return setTimeout(fn, 16);
};

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/engine/lang.js
var lang_default = {
  general: {
    title: "这是一个图表，",
    withTitle: "这是一个关于“{title}”的图表。"
  },
  coord: {
    cartesian: "X轴是{xLabel}Y轴是{yLabel}"
    // polar: '弧度是{xLabel}半径是{yLabel}'
  },
  scale: {
    linear: "数值型，数据最小值为{min}，最大值为{max}；",
    cat: "分类型, 分类类型有：{values}；",
    timeCat: "时间型，时间范围从{start}到{end}；"
  },
  geometry: {
    prefix: "共有{count}种分类组成，",
    oneData: "第{index}类是{name}，数据是{values};",
    partData: "第{index}类是{name}，共有{count}项数据，前{part}项是{values};",
    allData: "第{index}类是{name}，有{count}项数据，分别是{values};"
  },
  legend: {
    prefix: "图例分类有："
  }
};

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/engine/canvas.js
var getPixelRatio2 = getPixelRatio;
var getDomById2 = getDomById;
var getWidth2 = getWidth;
var getHeight2 = getHeight;
var isCanvasElement2 = isCanvasElement;
var Canvas = function(_EventEmit) {
  _inherits(Canvas3, _EventEmit);
  var _super = _createSuper(Canvas3);
  function Canvas3(cfg) {
    var _this;
    _classCallCheck(this, Canvas3);
    _this = _super.call(this);
    var title = cfg.title;
    var ariaLabel = title ? substitute_default(lang_default.general.withTitle, {
      title
    }) : lang_default.general.title;
    _this._attrs = mix({
      type: "canvas",
      children: [],
      ariaLabel
    }, cfg);
    _this._initPixelRatio();
    _this._initCanvas();
    return _this;
  }
  _createClass(Canvas3, [{
    key: "get",
    value: (
      /* eslint-enable */
      function get(name) {
        return this._attrs[name];
      }
    )
  }, {
    key: "set",
    value: function set(name, value) {
      this._attrs[name] = value;
    }
  }, {
    key: "_initPixelRatio",
    value: function _initPixelRatio() {
      var pixelRatio = this.get("pixelRatio");
      if (!pixelRatio) {
        this.set("pixelRatio", getPixelRatio2());
      }
    }
  }, {
    key: "beforeDraw",
    value: function beforeDraw() {
      var context = this._attrs.context;
      var el = this._attrs.el;
      context && context.clearRect && context.clearRect(0, 0, el.width, el.height);
    }
  }, {
    key: "_initCanvas",
    value: function _initCanvas() {
      var el = this.get("el");
      var context = this.get("context");
      if (!el && !context) {
        throw new Error("Please specify the id, el or context of the chart!");
      }
      var canvas;
      if (el) {
        canvas = is_string_default(el) ? getDomById2(el) : el;
      } else {
        canvas = canvas_element_default.create(context);
      }
      if (context && canvas && !canvas.getContext) {
        canvas.getContext = function() {
          return context;
        };
      }
      var width = this.get("width") || getWidth2(canvas) || canvas.width;
      var height = this.get("height") || getHeight2(canvas) || canvas.height;
      this.set("canvas", this);
      this.set("el", canvas);
      this.set("context", context || canvas.getContext("2d"));
      this.changeSize(width, height);
      var eventController = new controller_default({
        canvas: this,
        el: canvas
      });
      this.set("eventController", eventController);
    }
  }, {
    key: "changeSize",
    value: function changeSize(width, height) {
      var pixelRatio = this.get("pixelRatio");
      var canvasDOM = this.get("el");
      if (canvasDOM.style) {
        canvasDOM.style.width = width + "px";
        canvasDOM.style.height = height + "px";
      }
      if (isCanvasElement2(canvasDOM)) {
        canvasDOM.width = width * pixelRatio;
        canvasDOM.height = height * pixelRatio;
        if (pixelRatio !== 1) {
          var ctx2 = this.get("context");
          ctx2.scale(pixelRatio, pixelRatio);
        }
      }
      this.set("width", width);
      this.set("height", height);
    }
  }, {
    key: "getWidth",
    value: function getWidth3() {
      var pixelRatio = this.get("pixelRatio");
      var width = this.get("width");
      return width * pixelRatio;
    }
  }, {
    key: "getHeight",
    value: function getHeight3() {
      var pixelRatio = this.get("pixelRatio");
      var height = this.get("height");
      return height * pixelRatio;
    }
  }, {
    key: "getPointByClient",
    value: function getPointByClient(clientX, clientY) {
      var el = this.get("el");
      var bbox = el.getBoundingClientRect();
      var width = bbox.right - bbox.left;
      var height = bbox.bottom - bbox.top;
      return {
        x: (clientX - bbox.left) * (el.width / width),
        y: (clientY - bbox.top) * (el.height / height)
      };
    }
  }, {
    key: "_beginDraw",
    value: function _beginDraw() {
      this._attrs.toDraw = true;
    }
  }, {
    key: "_endDraw",
    value: function _endDraw() {
      this._attrs.toDraw = false;
      this.emit("afterdraw", {});
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this2 = this;
      var drawInner = function drawInner2() {
        _this2.set("animateHandler", requestAnimationFrame3(function() {
          _this2.set("animateHandler", void 0);
          if (_this2.get("toDraw")) {
            drawInner2();
          }
        }));
        _this2.beforeDraw();
        try {
          var context = _this2._attrs.context;
          _this2.drawChildren(context);
          if (context.draw) {
            context.draw();
          }
          _this2.setAriaLabel();
        } catch (ev) {
          console.warn("error in draw canvas, detail as:");
          console.warn(ev);
          _this2._endDraw();
        }
        _this2._endDraw();
      };
      if (this.get("destroyed")) {
        return;
      }
      if (this.get("animateHandler")) {
        this._beginDraw();
      } else {
        drawInner();
      }
    }
    // 设置无障碍文本
  }, {
    key: "setAriaLabel",
    value: function setAriaLabel() {
      var el = this._attrs.el;
      var ariaLabel = this._getAriaLabel();
      if (ariaLabel && el.setAttribute) {
        el.setAttribute("aria-label", ariaLabel);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.get("destroyed")) {
        return;
      }
      var el = this.get("el");
      el.width = 0;
      el.height = 0;
      this.clear();
      this._attrs = {};
      this.set("destroyed", true);
    }
  }, {
    key: "isDestroyed",
    value: function isDestroyed() {
      return this.get("destroyed");
    }
  }]);
  return Canvas3;
}(emit_default);
mix(Canvas.prototype, container_default, {
  getGroupClass: function getGroupClass3() {
    return group_default2;
  }
});
var canvas_default = Canvas;

// node_modules/.pnpm/@antv+f2-graphic@0.0.13/node_modules/@antv/f2-graphic/es/index.js
var engines = {};
function getEngine(name) {
  var G = engines[name];
  if (G) {
    return G;
  }
  return {
    Canvas: canvas_default,
    Group: group_default2,
    Shape: shape_default2
  };
}
function createCanvas(cfg) {
  var renderer = cfg.renderer;
  var G = getEngine(renderer);
  return new G.Canvas(cfg);
}

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/jsx/jsx-classic.js
var _excluded = ["key", "ref"];
function jsx(type, config) {
  var _ref = config || {}, key = _ref.key, ref = _ref.ref, props = _objectWithoutProperties(_ref, _excluded);
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }
  if (children.length) {
    props.children = children.length === 1 ? children[0] : children;
  }
  return {
    key,
    ref,
    type,
    props,
    // 存储一些过程中的cache值
    _cache: {}
  };
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/jsx/fragment.js
var fragment_default = function(props) {
  return props.children;
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/util/index.js
var ONE_REM;
try {
  ONE_REM = parseInt(document.documentElement.style.fontSize, 10) || 50;
} catch (e) {
  ONE_REM = 50;
}
var SCALE = ONE_REM / 100;
function defaultPx2hd(px) {
  if (!px) {
    return 0;
  }
  return Number((px * SCALE).toFixed(1));
}
function parsePadding2(padding) {
  if (is_number_default(padding)) {
    return [padding, padding, padding, padding];
  }
  var top = padding[0];
  var right = is_number_default(padding[1]) ? padding[1] : padding[0];
  var bottom = is_number_default(padding[2]) ? padding[2] : top;
  var left = is_number_default(padding[3]) ? padding[3] : right;
  return [top, right, bottom, left];
}
function batch2hd(px2hd2) {
  var batchPx2hd = function batchPx2hd2(value) {
    if (is_string_default(value) && /^-?\d+(\.\d+)?px$/.test(value)) {
      var num = value.substr(0, value.length - 2);
      return px2hd2(Number(num));
    }
    if (is_array_default(value)) {
      return value.map(function(v) {
        return batchPx2hd2(v);
      });
    }
    if (is_plain_object_default(value)) {
      var result = {};
      for (var key in value) {
        if (value.hasOwnProperty(key)) {
          var rst = batchPx2hd2(value[key]);
          if (!rst) {
            result[key] = rst;
            continue;
          }
          if (key === "padding" || key === "margin") {
            var paddingArray = parsePadding2(rst);
            result[key] = paddingArray;
            result["".concat(key, "Top")] = paddingArray[0];
            result["".concat(key, "Right")] = paddingArray[1];
            result["".concat(key, "Bottom")] = paddingArray[2];
            result["".concat(key, "Left")] = paddingArray[3];
            continue;
          }
          result[key] = rst;
        }
      }
      return result;
    }
    return value;
  };
  return batchPx2hd;
}
function extendMap(arr, fn) {
  if (!arr) {
    return arr;
  }
  if (!is_array_default(arr)) {
    return [fn(arr)];
  }
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    if (is_array_default(element)) {
      newArray = newArray.concat(extendMap(element, fn));
    } else if (element) {
      newArray.push(fn(element));
    }
  }
  return newArray;
}
function toTimeStamp(value) {
  if (is_string_default(value)) {
    if (value.indexOf("T") > 0) {
      value = new Date(value).getTime();
    } else {
      value = new Date(value.replace(/-/gi, "/")).getTime();
    }
  }
  if (is_date_default(value)) {
    value = value.getTime();
  }
  return value;
}
function isInBBox(bbox, point) {
  var minX = bbox.minX, maxX = bbox.maxX, minY = bbox.minY, maxY = bbox.maxY;
  var x = point.x, y = point.y;
  return minX <= x && maxX >= x && minY <= y && maxY >= y;
}
function getElementsByClassName(className, element) {
  if (!element || !className)
    return [];
  var rst = [];
  if (element.get("className") === className) {
    rst.push(element);
  }
  var children = element.get("children");
  if (children && children.length) {
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      rst = rst.concat(getElementsByClassName(className, child));
    }
  }
  return rst;
}
var px2hd = batch2hd(defaultPx2hd);

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/jsx/css-layout.js
var CSS_UNDEFINED;
var CSS_DIRECTION_INHERIT = "inherit";
var CSS_DIRECTION_LTR = "ltr";
var CSS_DIRECTION_RTL = "rtl";
var CSS_FLEX_DIRECTION_ROW = "row";
var CSS_FLEX_DIRECTION_ROW_REVERSE = "row-reverse";
var CSS_FLEX_DIRECTION_COLUMN = "column";
var CSS_FLEX_DIRECTION_COLUMN_REVERSE = "column-reverse";
var CSS_JUSTIFY_FLEX_START = "flex-start";
var CSS_JUSTIFY_CENTER = "center";
var CSS_JUSTIFY_FLEX_END = "flex-end";
var CSS_JUSTIFY_SPACE_BETWEEN = "space-between";
var CSS_JUSTIFY_SPACE_AROUND = "space-around";
var CSS_ALIGN_FLEX_START = "flex-start";
var CSS_ALIGN_CENTER = "center";
var CSS_ALIGN_FLEX_END = "flex-end";
var CSS_ALIGN_STRETCH = "stretch";
var CSS_POSITION_RELATIVE = "relative";
var CSS_POSITION_ABSOLUTE = "absolute";
var leading = {
  row: "left",
  "row-reverse": "right",
  column: "top",
  "column-reverse": "bottom"
};
var trailing = {
  row: "right",
  "row-reverse": "left",
  column: "bottom",
  "column-reverse": "top"
};
var pos = {
  row: "left",
  "row-reverse": "right",
  column: "top",
  "column-reverse": "bottom"
};
var dim = {
  row: "width",
  "row-reverse": "width",
  column: "height",
  "column-reverse": "height"
};
function fillNodes(node) {
  if (!node.layout || node.isDirty) {
    node.layout = {
      width: void 0,
      height: void 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };
  }
  if (!node.style) {
    node.style = {};
  }
  if (!node.children) {
    node.children = [];
  }
  node.children.forEach(fillNodes);
  return node;
}
function isUndefined2(value) {
  return value === void 0;
}
function isRowDirection(flexDirection) {
  return flexDirection === CSS_FLEX_DIRECTION_ROW || flexDirection === CSS_FLEX_DIRECTION_ROW_REVERSE;
}
function isColumnDirection(flexDirection) {
  return flexDirection === CSS_FLEX_DIRECTION_COLUMN || flexDirection === CSS_FLEX_DIRECTION_COLUMN_REVERSE;
}
function getLeadingMargin(node, axis2) {
  if (node.style.marginStart !== void 0 && isRowDirection(axis2)) {
    return node.style.marginStart;
  }
  var value = null;
  switch (axis2) {
    case "row":
      value = node.style.marginLeft;
      break;
    case "row-reverse":
      value = node.style.marginRight;
      break;
    case "column":
      value = node.style.marginTop;
      break;
    case "column-reverse":
      value = node.style.marginBottom;
      break;
  }
  if (value !== void 0) {
    return value;
  }
  if (node.style.margin !== void 0) {
    return node.style.margin;
  }
  return 0;
}
function getTrailingMargin(node, axis2) {
  if (node.style.marginEnd !== void 0 && isRowDirection(axis2)) {
    return node.style.marginEnd;
  }
  var value = null;
  switch (axis2) {
    case "row":
      value = node.style.marginRight;
      break;
    case "row-reverse":
      value = node.style.marginLeft;
      break;
    case "column":
      value = node.style.marginBottom;
      break;
    case "column-reverse":
      value = node.style.marginTop;
      break;
  }
  if (value != null) {
    return value;
  }
  if (node.style.margin !== void 0) {
    return node.style.margin;
  }
  return 0;
}
function getLeadingPadding(node, axis2) {
  if (node.style.paddingStart !== void 0 && node.style.paddingStart >= 0 && isRowDirection(axis2)) {
    return node.style.paddingStart;
  }
  var value = null;
  switch (axis2) {
    case "row":
      value = node.style.paddingLeft;
      break;
    case "row-reverse":
      value = node.style.paddingRight;
      break;
    case "column":
      value = node.style.paddingTop;
      break;
    case "column-reverse":
      value = node.style.paddingBottom;
      break;
  }
  if (value != null && value >= 0) {
    return value;
  }
  if (node.style.padding !== void 0 && node.style.padding >= 0) {
    return node.style.padding;
  }
  return 0;
}
function getTrailingPadding(node, axis2) {
  if (node.style.paddingEnd !== void 0 && node.style.paddingEnd >= 0 && isRowDirection(axis2)) {
    return node.style.paddingEnd;
  }
  var value = null;
  switch (axis2) {
    case "row":
      value = node.style.paddingRight;
      break;
    case "row-reverse":
      value = node.style.paddingLeft;
      break;
    case "column":
      value = node.style.paddingBottom;
      break;
    case "column-reverse":
      value = node.style.paddingTop;
      break;
  }
  if (value != null && value >= 0) {
    return value;
  }
  if (node.style.padding !== void 0 && node.style.padding >= 0) {
    return node.style.padding;
  }
  return 0;
}
function getLeadingBorder(node, axis2) {
  if (node.style.borderStartWidth !== void 0 && node.style.borderStartWidth >= 0 && isRowDirection(axis2)) {
    return node.style.borderStartWidth;
  }
  var value = null;
  switch (axis2) {
    case "row":
      value = node.style.borderLeftWidth;
      break;
    case "row-reverse":
      value = node.style.borderRightWidth;
      break;
    case "column":
      value = node.style.borderTopWidth;
      break;
    case "column-reverse":
      value = node.style.borderBottomWidth;
      break;
  }
  if (value != null && value >= 0) {
    return value;
  }
  if (node.style.borderWidth !== void 0 && node.style.borderWidth >= 0) {
    return node.style.borderWidth;
  }
  return 0;
}
function getTrailingBorder(node, axis2) {
  if (node.style.borderEndWidth !== void 0 && node.style.borderEndWidth >= 0 && isRowDirection(axis2)) {
    return node.style.borderEndWidth;
  }
  var value = null;
  switch (axis2) {
    case "row":
      value = node.style.borderRightWidth;
      break;
    case "row-reverse":
      value = node.style.borderLeftWidth;
      break;
    case "column":
      value = node.style.borderBottomWidth;
      break;
    case "column-reverse":
      value = node.style.borderTopWidth;
      break;
  }
  if (value != null && value >= 0) {
    return value;
  }
  if (node.style.borderWidth !== void 0 && node.style.borderWidth >= 0) {
    return node.style.borderWidth;
  }
  return 0;
}
function getLeadingPaddingAndBorder(node, axis2) {
  return getLeadingPadding(node, axis2) + getLeadingBorder(node, axis2);
}
function getTrailingPaddingAndBorder(node, axis2) {
  return getTrailingPadding(node, axis2) + getTrailingBorder(node, axis2);
}
function getBorderAxis(node, axis2) {
  return getLeadingBorder(node, axis2) + getTrailingBorder(node, axis2);
}
function getMarginAxis(node, axis2) {
  return getLeadingMargin(node, axis2) + getTrailingMargin(node, axis2);
}
function getPaddingAndBorderAxis(node, axis2) {
  return getLeadingPaddingAndBorder(node, axis2) + getTrailingPaddingAndBorder(node, axis2);
}
function getJustifyContent(node) {
  if (node.style.justifyContent) {
    return node.style.justifyContent;
  }
  return "flex-start";
}
function getAlignContent(node) {
  if (node.style.alignContent) {
    return node.style.alignContent;
  }
  return "flex-start";
}
function getAlignItem(node, child) {
  if (child.style.alignSelf) {
    return child.style.alignSelf;
  }
  if (node.style.alignItems) {
    return node.style.alignItems;
  }
  return "stretch";
}
function resolveAxis(axis2, direction2) {
  if (direction2 === CSS_DIRECTION_RTL) {
    if (axis2 === CSS_FLEX_DIRECTION_ROW) {
      return CSS_FLEX_DIRECTION_ROW_REVERSE;
    } else if (axis2 === CSS_FLEX_DIRECTION_ROW_REVERSE) {
      return CSS_FLEX_DIRECTION_ROW;
    }
  }
  return axis2;
}
function resolveDirection(node, parentDirection) {
  var direction2;
  if (node.style.direction) {
    direction2 = node.style.direction;
  } else {
    direction2 = CSS_DIRECTION_INHERIT;
  }
  if (direction2 === CSS_DIRECTION_INHERIT) {
    direction2 = parentDirection === void 0 ? CSS_DIRECTION_LTR : parentDirection;
  }
  return direction2;
}
function getFlexDirection(node) {
  if (node.style.flexDirection) {
    return node.style.flexDirection;
  }
  return CSS_FLEX_DIRECTION_COLUMN;
}
function getCrossFlexDirection(flexDirection, direction2) {
  if (isColumnDirection(flexDirection)) {
    return resolveAxis(CSS_FLEX_DIRECTION_ROW, direction2);
  } else {
    return CSS_FLEX_DIRECTION_COLUMN;
  }
}
function getPositionType(node) {
  if (node.style.position) {
    return node.style.position;
  }
  return "relative";
}
function isFlex(node) {
  return getPositionType(node) === CSS_POSITION_RELATIVE && node.style.flex > 0;
}
function isFlexWrap(node) {
  return node.style.flexWrap === "wrap";
}
function getDimWithMargin(node, axis2) {
  return node.layout[dim[axis2]] + getMarginAxis(node, axis2);
}
function isDimDefined(node, axis2) {
  return node.style[dim[axis2]] !== void 0 && node.style[dim[axis2]] >= 0;
}
function isPosDefined(node, pos2) {
  return node.style[pos2] !== void 0;
}
function isMeasureDefined(node) {
  return node.style.measure !== void 0;
}
function getPosition(node, pos2) {
  if (node.style[pos2] !== void 0) {
    return node.style[pos2];
  }
  return 0;
}
function boundAxis(node, axis2, value) {
  var min2 = {
    row: node.style.minWidth,
    "row-reverse": node.style.minWidth,
    column: node.style.minHeight,
    "column-reverse": node.style.minHeight
  }[axis2];
  var max2 = {
    row: node.style.maxWidth,
    "row-reverse": node.style.maxWidth,
    column: node.style.maxHeight,
    "column-reverse": node.style.maxHeight
  }[axis2];
  var boundValue = value;
  if (max2 !== void 0 && max2 >= 0 && boundValue > max2) {
    boundValue = max2;
  }
  if (min2 !== void 0 && min2 >= 0 && boundValue < min2) {
    boundValue = min2;
  }
  return boundValue;
}
function fmaxf(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}
function setDimensionFromStyle(node, axis2) {
  if (node.layout[dim[axis2]] !== void 0) {
    return;
  }
  if (!isDimDefined(node, axis2)) {
    return;
  }
  node.layout[dim[axis2]] = fmaxf(boundAxis(node, axis2, node.style[dim[axis2]]), getPaddingAndBorderAxis(node, axis2));
}
function setTrailingPosition(node, child, axis2) {
  child.layout[trailing[axis2]] = node.layout[dim[axis2]] - child.layout[dim[axis2]] - child.layout[pos[axis2]];
}
function getRelativePosition2(node, axis2) {
  if (node.style[leading[axis2]] !== void 0) {
    return getPosition(node, leading[axis2]);
  }
  return -getPosition(node, trailing[axis2]);
}
function layoutNodeImpl(node, parentMaxWidth, parentDirection) {
  var direction2 = resolveDirection(node, parentDirection);
  var mainAxis = resolveAxis(getFlexDirection(node), direction2);
  var crossAxis = getCrossFlexDirection(mainAxis, direction2);
  var resolvedRowAxis = resolveAxis(CSS_FLEX_DIRECTION_ROW, direction2);
  setDimensionFromStyle(node, mainAxis);
  setDimensionFromStyle(node, crossAxis);
  node.layout.direction = direction2;
  node.layout[leading[mainAxis]] += getLeadingMargin(node, mainAxis) + getRelativePosition2(node, mainAxis);
  node.layout[trailing[mainAxis]] += getTrailingMargin(node, mainAxis) + getRelativePosition2(node, mainAxis);
  node.layout[leading[crossAxis]] += getLeadingMargin(node, crossAxis) + getRelativePosition2(node, crossAxis);
  node.layout[trailing[crossAxis]] += getTrailingMargin(node, crossAxis) + getRelativePosition2(node, crossAxis);
  var childCount = node.children.length;
  var paddingAndBorderAxisResolvedRow = getPaddingAndBorderAxis(node, resolvedRowAxis);
  if (isMeasureDefined(node)) {
    var isResolvedRowDimDefined = !isUndefined2(node.layout[dim[resolvedRowAxis]]);
    var width = CSS_UNDEFINED;
    if (isDimDefined(node, resolvedRowAxis)) {
      width = node.style.width;
    } else if (isResolvedRowDimDefined) {
      width = node.layout[dim[resolvedRowAxis]];
    } else {
      width = parentMaxWidth - getMarginAxis(node, resolvedRowAxis);
    }
    width -= paddingAndBorderAxisResolvedRow;
    var isRowUndefined = !isDimDefined(node, resolvedRowAxis) && !isResolvedRowDimDefined;
    var isColumnUndefined = !isDimDefined(node, CSS_FLEX_DIRECTION_COLUMN) && isUndefined2(node.layout[dim[CSS_FLEX_DIRECTION_COLUMN]]);
    if (isRowUndefined || isColumnUndefined) {
      var measureDim = node.style.measure(
        /*(c)!node->context,*/
        /*(java)!layoutContext.measureOutput,*/
        width
      );
      if (isRowUndefined) {
        node.layout.width = measureDim.width + paddingAndBorderAxisResolvedRow;
      }
      if (isColumnUndefined) {
        node.layout.height = measureDim.height + getPaddingAndBorderAxis(node, CSS_FLEX_DIRECTION_COLUMN);
      }
    }
    if (childCount === 0) {
      return;
    }
  }
  var isNodeFlexWrap = isFlexWrap(node);
  var justifyContent = getJustifyContent(node);
  var leadingPaddingAndBorderMain = getLeadingPaddingAndBorder(node, mainAxis);
  var leadingPaddingAndBorderCross = getLeadingPaddingAndBorder(node, crossAxis);
  var paddingAndBorderAxisMain = getPaddingAndBorderAxis(node, mainAxis);
  var paddingAndBorderAxisCross = getPaddingAndBorderAxis(node, crossAxis);
  var isMainDimDefined = !isUndefined2(node.layout[dim[mainAxis]]);
  var isCrossDimDefined = !isUndefined2(node.layout[dim[crossAxis]]);
  var isMainRowDirection = isRowDirection(mainAxis);
  var i;
  var ii;
  var child;
  var axis2;
  var firstAbsoluteChild = null;
  var currentAbsoluteChild = null;
  var definedMainDim = CSS_UNDEFINED;
  if (isMainDimDefined) {
    definedMainDim = node.layout[dim[mainAxis]] - paddingAndBorderAxisMain;
  }
  var startLine = 0;
  var endLine = 0;
  var alreadyComputedNextLayout = 0;
  var linesCrossDim = 0;
  var linesMainDim = 0;
  var linesCount = 0;
  while (endLine < childCount) {
    var mainContentDim = 0;
    var flexibleChildrenCount = 0;
    var totalFlexible = 0;
    var nonFlexibleChildrenCount = 0;
    var isSimpleStackMain = isMainDimDefined && justifyContent === CSS_JUSTIFY_FLEX_START || !isMainDimDefined && justifyContent !== CSS_JUSTIFY_CENTER;
    var firstComplexMain = isSimpleStackMain ? childCount : startLine;
    var isSimpleStackCross = true;
    var firstComplexCross = childCount;
    var firstFlexChild = null;
    var currentFlexChild = null;
    var mainDim = leadingPaddingAndBorderMain;
    var crossDim = 0;
    var maxWidth;
    for (i = startLine; i < childCount; ++i) {
      child = node.children[i];
      child.lineIndex = linesCount;
      child.nextAbsoluteChild = null;
      child.nextFlexChild = null;
      var alignItem = getAlignItem(node, child);
      if (alignItem === CSS_ALIGN_STRETCH && getPositionType(child) === CSS_POSITION_RELATIVE && isCrossDimDefined && !isDimDefined(child, crossAxis)) {
        child.layout[dim[crossAxis]] = fmaxf(
          boundAxis(child, crossAxis, node.layout[dim[crossAxis]] - paddingAndBorderAxisCross - getMarginAxis(child, crossAxis)),
          // You never want to go smaller than padding
          getPaddingAndBorderAxis(child, crossAxis)
        );
      } else if (getPositionType(child) === CSS_POSITION_ABSOLUTE) {
        if (firstAbsoluteChild === null) {
          firstAbsoluteChild = child;
        }
        if (currentAbsoluteChild !== null) {
          currentAbsoluteChild.nextAbsoluteChild = child;
        }
        currentAbsoluteChild = child;
        for (ii = 0; ii < 2; ii++) {
          axis2 = ii !== 0 ? CSS_FLEX_DIRECTION_ROW : CSS_FLEX_DIRECTION_COLUMN;
          if (!isUndefined2(node.layout[dim[axis2]]) && !isDimDefined(child, axis2) && isPosDefined(child, leading[axis2]) && isPosDefined(child, trailing[axis2])) {
            child.layout[dim[axis2]] = fmaxf(
              boundAxis(child, axis2, node.layout[dim[axis2]] - getPaddingAndBorderAxis(node, axis2) - getMarginAxis(child, axis2) - getPosition(child, leading[axis2]) - getPosition(child, trailing[axis2])),
              // You never want to go smaller than padding
              getPaddingAndBorderAxis(child, axis2)
            );
          }
        }
      }
      var nextContentDim = 0;
      if (isMainDimDefined && isFlex(child)) {
        flexibleChildrenCount++;
        totalFlexible += child.style.flex;
        if (firstFlexChild === null) {
          firstFlexChild = child;
        }
        if (currentFlexChild !== null) {
          currentFlexChild.nextFlexChild = child;
        }
        currentFlexChild = child;
        nextContentDim = getPaddingAndBorderAxis(child, mainAxis) + getMarginAxis(child, mainAxis);
      } else {
        maxWidth = CSS_UNDEFINED;
        if (!isMainRowDirection) {
          if (isDimDefined(node, resolvedRowAxis)) {
            maxWidth = node.layout[dim[resolvedRowAxis]] - paddingAndBorderAxisResolvedRow;
          } else {
            maxWidth = parentMaxWidth - getMarginAxis(node, resolvedRowAxis) - paddingAndBorderAxisResolvedRow;
          }
        }
        if (alreadyComputedNextLayout === 0) {
          layoutNode(
            /*(java)!layoutContext, */
            child,
            maxWidth,
            direction2
          );
        }
        if (getPositionType(child) === CSS_POSITION_RELATIVE) {
          nonFlexibleChildrenCount++;
          nextContentDim = getDimWithMargin(child, mainAxis);
        }
      }
      if (isNodeFlexWrap && isMainDimDefined && mainContentDim + nextContentDim > definedMainDim && // If there's only one element, then it's bigger than the content
      // and needs its own line
      i !== startLine) {
        nonFlexibleChildrenCount--;
        alreadyComputedNextLayout = 1;
        break;
      }
      if (isSimpleStackMain && (getPositionType(child) !== CSS_POSITION_RELATIVE || isFlex(child))) {
        isSimpleStackMain = false;
        firstComplexMain = i;
      }
      if (isSimpleStackCross && (getPositionType(child) !== CSS_POSITION_RELATIVE || alignItem !== CSS_ALIGN_STRETCH && alignItem !== CSS_ALIGN_FLEX_START || isUndefined2(child.layout[dim[crossAxis]]))) {
        isSimpleStackCross = false;
        firstComplexCross = i;
      }
      if (isSimpleStackMain) {
        child.layout[pos[mainAxis]] += mainDim;
        if (isMainDimDefined) {
          setTrailingPosition(node, child, mainAxis);
        }
        mainDim += getDimWithMargin(child, mainAxis);
        crossDim = fmaxf(crossDim, boundAxis(child, crossAxis, getDimWithMargin(child, crossAxis)));
      }
      if (isSimpleStackCross) {
        child.layout[pos[crossAxis]] += linesCrossDim + leadingPaddingAndBorderCross;
        if (isCrossDimDefined) {
          setTrailingPosition(node, child, crossAxis);
        }
      }
      alreadyComputedNextLayout = 0;
      mainContentDim += nextContentDim;
      endLine = i + 1;
    }
    var leadingMainDim = 0;
    var betweenMainDim = 0;
    var remainingMainDim = 0;
    if (isMainDimDefined) {
      remainingMainDim = definedMainDim - mainContentDim;
    } else {
      remainingMainDim = fmaxf(mainContentDim, 0) - mainContentDim;
    }
    if (flexibleChildrenCount !== 0) {
      var flexibleMainDim = remainingMainDim / totalFlexible;
      var baseMainDim;
      var boundMainDim;
      currentFlexChild = firstFlexChild;
      while (currentFlexChild !== null) {
        baseMainDim = flexibleMainDim * currentFlexChild.style.flex + getPaddingAndBorderAxis(currentFlexChild, mainAxis);
        boundMainDim = boundAxis(currentFlexChild, mainAxis, baseMainDim);
        if (baseMainDim !== boundMainDim) {
          remainingMainDim -= boundMainDim;
          totalFlexible -= currentFlexChild.style.flex;
        }
        currentFlexChild = currentFlexChild.nextFlexChild;
      }
      flexibleMainDim = remainingMainDim / totalFlexible;
      if (flexibleMainDim < 0) {
        flexibleMainDim = 0;
      }
      currentFlexChild = firstFlexChild;
      while (currentFlexChild !== null) {
        currentFlexChild.layout[dim[mainAxis]] = boundAxis(currentFlexChild, mainAxis, flexibleMainDim * currentFlexChild.style.flex + getPaddingAndBorderAxis(currentFlexChild, mainAxis));
        maxWidth = CSS_UNDEFINED;
        if (isDimDefined(node, resolvedRowAxis)) {
          maxWidth = node.layout[dim[resolvedRowAxis]] - paddingAndBorderAxisResolvedRow;
        } else if (!isMainRowDirection) {
          maxWidth = parentMaxWidth - getMarginAxis(node, resolvedRowAxis) - paddingAndBorderAxisResolvedRow;
        }
        layoutNode(
          /*(java)!layoutContext, */
          currentFlexChild,
          maxWidth,
          direction2
        );
        child = currentFlexChild;
        currentFlexChild = currentFlexChild.nextFlexChild;
        child.nextFlexChild = null;
      }
    } else if (justifyContent !== CSS_JUSTIFY_FLEX_START) {
      if (justifyContent === CSS_JUSTIFY_CENTER) {
        leadingMainDim = remainingMainDim / 2;
      } else if (justifyContent === CSS_JUSTIFY_FLEX_END) {
        leadingMainDim = remainingMainDim;
      } else if (justifyContent === CSS_JUSTIFY_SPACE_BETWEEN) {
        remainingMainDim = fmaxf(remainingMainDim, 0);
        if (flexibleChildrenCount + nonFlexibleChildrenCount - 1 !== 0) {
          betweenMainDim = remainingMainDim / (flexibleChildrenCount + nonFlexibleChildrenCount - 1);
        } else {
          betweenMainDim = 0;
        }
      } else if (justifyContent === CSS_JUSTIFY_SPACE_AROUND) {
        betweenMainDim = remainingMainDim / (flexibleChildrenCount + nonFlexibleChildrenCount);
        leadingMainDim = betweenMainDim / 2;
      }
    }
    mainDim += leadingMainDim;
    for (i = firstComplexMain; i < endLine; ++i) {
      child = node.children[i];
      if (getPositionType(child) === CSS_POSITION_ABSOLUTE && isPosDefined(child, leading[mainAxis])) {
        child.layout[pos[mainAxis]] = getPosition(child, leading[mainAxis]) + getLeadingBorder(node, mainAxis) + getLeadingMargin(child, mainAxis);
      } else {
        child.layout[pos[mainAxis]] += mainDim;
        if (isMainDimDefined) {
          setTrailingPosition(node, child, mainAxis);
        }
        if (getPositionType(child) === CSS_POSITION_RELATIVE) {
          mainDim += betweenMainDim + getDimWithMargin(child, mainAxis);
          crossDim = fmaxf(crossDim, boundAxis(child, crossAxis, getDimWithMargin(child, crossAxis)));
        }
      }
    }
    var containerCrossAxis = node.layout[dim[crossAxis]];
    if (!isCrossDimDefined) {
      containerCrossAxis = fmaxf(
        // For the cross dim, we add both sides at the end because the value
        // is aggregate via a max function. Intermediate negative values
        // can mess this computation otherwise
        boundAxis(node, crossAxis, crossDim + paddingAndBorderAxisCross),
        paddingAndBorderAxisCross
      );
    }
    for (i = firstComplexCross; i < endLine; ++i) {
      child = node.children[i];
      if (getPositionType(child) === CSS_POSITION_ABSOLUTE && isPosDefined(child, leading[crossAxis])) {
        child.layout[pos[crossAxis]] = getPosition(child, leading[crossAxis]) + getLeadingBorder(node, crossAxis) + getLeadingMargin(child, crossAxis);
      } else {
        var leadingCrossDim = leadingPaddingAndBorderCross;
        if (getPositionType(child) === CSS_POSITION_RELATIVE) {
          var alignItem = getAlignItem(node, child);
          if (alignItem === CSS_ALIGN_STRETCH) {
            if (isUndefined2(child.layout[dim[crossAxis]])) {
              child.layout[dim[crossAxis]] = fmaxf(
                boundAxis(child, crossAxis, containerCrossAxis - paddingAndBorderAxisCross - getMarginAxis(child, crossAxis)),
                // You never want to go smaller than padding
                getPaddingAndBorderAxis(child, crossAxis)
              );
            }
          } else if (alignItem !== CSS_ALIGN_FLEX_START) {
            var remainingCrossDim = containerCrossAxis - paddingAndBorderAxisCross - getDimWithMargin(child, crossAxis);
            if (alignItem === CSS_ALIGN_CENTER) {
              leadingCrossDim += remainingCrossDim / 2;
            } else {
              leadingCrossDim += remainingCrossDim;
            }
          }
        }
        child.layout[pos[crossAxis]] += linesCrossDim + leadingCrossDim;
        if (isCrossDimDefined) {
          setTrailingPosition(node, child, crossAxis);
        }
      }
    }
    linesCrossDim += crossDim;
    linesMainDim = fmaxf(linesMainDim, mainDim);
    linesCount += 1;
    startLine = endLine;
  }
  if (linesCount > 1 && isCrossDimDefined) {
    var nodeCrossAxisInnerSize = node.layout[dim[crossAxis]] - paddingAndBorderAxisCross;
    var remainingAlignContentDim = nodeCrossAxisInnerSize - linesCrossDim;
    var crossDimLead = 0;
    var currentLead = leadingPaddingAndBorderCross;
    var alignContent = getAlignContent(node);
    if (alignContent === CSS_ALIGN_FLEX_END) {
      currentLead += remainingAlignContentDim;
    } else if (alignContent === CSS_ALIGN_CENTER) {
      currentLead += remainingAlignContentDim / 2;
    } else if (alignContent === CSS_ALIGN_STRETCH) {
      if (nodeCrossAxisInnerSize > linesCrossDim) {
        crossDimLead = remainingAlignContentDim / linesCount;
      }
    }
    var endIndex = 0;
    for (i = 0; i < linesCount; ++i) {
      var startIndex = endIndex;
      var lineHeight = 0;
      for (ii = startIndex; ii < childCount; ++ii) {
        child = node.children[ii];
        if (getPositionType(child) !== CSS_POSITION_RELATIVE) {
          continue;
        }
        if (child.lineIndex !== i) {
          break;
        }
        if (!isUndefined2(child.layout[dim[crossAxis]])) {
          lineHeight = fmaxf(lineHeight, child.layout[dim[crossAxis]] + getMarginAxis(child, crossAxis));
        }
      }
      endIndex = ii;
      lineHeight += crossDimLead;
      for (ii = startIndex; ii < endIndex; ++ii) {
        child = node.children[ii];
        if (getPositionType(child) !== CSS_POSITION_RELATIVE) {
          continue;
        }
        var alignContentAlignItem = getAlignItem(node, child);
        if (alignContentAlignItem === CSS_ALIGN_FLEX_START) {
          child.layout[pos[crossAxis]] = currentLead + getLeadingMargin(child, crossAxis);
        } else if (alignContentAlignItem === CSS_ALIGN_FLEX_END) {
          child.layout[pos[crossAxis]] = currentLead + lineHeight - getTrailingMargin(child, crossAxis) - child.layout[dim[crossAxis]];
        } else if (alignContentAlignItem === CSS_ALIGN_CENTER) {
          var childHeight = child.layout[dim[crossAxis]];
          child.layout[pos[crossAxis]] = currentLead + (lineHeight - childHeight) / 2;
        } else if (alignContentAlignItem === CSS_ALIGN_STRETCH) {
          child.layout[pos[crossAxis]] = currentLead + getLeadingMargin(child, crossAxis);
        }
      }
      currentLead += lineHeight;
    }
  }
  var needsMainTrailingPos = false;
  var needsCrossTrailingPos = false;
  if (!isMainDimDefined) {
    node.layout[dim[mainAxis]] = fmaxf(
      // We're missing the last padding at this point to get the final
      // dimension
      boundAxis(node, mainAxis, linesMainDim + getTrailingPaddingAndBorder(node, mainAxis)),
      // We can never assign a width smaller than the padding and borders
      paddingAndBorderAxisMain
    );
    if (mainAxis === CSS_FLEX_DIRECTION_ROW_REVERSE || mainAxis === CSS_FLEX_DIRECTION_COLUMN_REVERSE) {
      needsMainTrailingPos = true;
    }
  }
  if (!isCrossDimDefined) {
    node.layout[dim[crossAxis]] = fmaxf(
      // For the cross dim, we add both sides at the end because the value
      // is aggregate via a max function. Intermediate negative values
      // can mess this computation otherwise
      boundAxis(node, crossAxis, linesCrossDim + paddingAndBorderAxisCross),
      paddingAndBorderAxisCross
    );
    if (crossAxis === CSS_FLEX_DIRECTION_ROW_REVERSE || crossAxis === CSS_FLEX_DIRECTION_COLUMN_REVERSE) {
      needsCrossTrailingPos = true;
    }
  }
  if (needsMainTrailingPos || needsCrossTrailingPos) {
    for (i = 0; i < childCount; ++i) {
      child = node.children[i];
      if (needsMainTrailingPos) {
        setTrailingPosition(node, child, mainAxis);
      }
      if (needsCrossTrailingPos) {
        setTrailingPosition(node, child, crossAxis);
      }
    }
  }
  currentAbsoluteChild = firstAbsoluteChild;
  while (currentAbsoluteChild !== null) {
    for (ii = 0; ii < 2; ii++) {
      axis2 = ii !== 0 ? CSS_FLEX_DIRECTION_ROW : CSS_FLEX_DIRECTION_COLUMN;
      if (!isUndefined2(node.layout[dim[axis2]]) && !isDimDefined(currentAbsoluteChild, axis2) && isPosDefined(currentAbsoluteChild, leading[axis2]) && isPosDefined(currentAbsoluteChild, trailing[axis2])) {
        currentAbsoluteChild.layout[dim[axis2]] = fmaxf(
          boundAxis(currentAbsoluteChild, axis2, node.layout[dim[axis2]] - getBorderAxis(node, axis2) - getMarginAxis(currentAbsoluteChild, axis2) - getPosition(currentAbsoluteChild, leading[axis2]) - getPosition(currentAbsoluteChild, trailing[axis2])),
          // You never want to go smaller than padding
          getPaddingAndBorderAxis(currentAbsoluteChild, axis2)
        );
      }
      if (isPosDefined(currentAbsoluteChild, trailing[axis2]) && !isPosDefined(currentAbsoluteChild, leading[axis2])) {
        currentAbsoluteChild.layout[leading[axis2]] = node.layout[dim[axis2]] - currentAbsoluteChild.layout[dim[axis2]] - getPosition(currentAbsoluteChild, trailing[axis2]);
      }
    }
    child = currentAbsoluteChild;
    currentAbsoluteChild = currentAbsoluteChild.nextAbsoluteChild;
    child.nextAbsoluteChild = null;
  }
}
function saveMargin(node) {
  var style = node.style;
  var margin = {};
  [
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft"
    // 只支持marginLeft
  ].forEach(function(key) {
    var value = style[key];
    if (value && /^-?\d+%$/.test(value)) {
      margin[key] = value;
      style[key] = 0;
    }
  });
  node.margin = margin;
}
function percent2Num(value) {
  var percent = Number(value.substr(0, value.length - 1));
  return percent / 100;
}
function layoutMargin(node) {
  var margin = node.margin, layout = node.layout;
  Object.keys(margin).forEach(function(key) {
    var percent = percent2Num(margin[key]);
    if ((key === "marginLeft" || key === "marginRight") && layout.width) {
      layout.left += layout.width * percent;
    } else if ((key === "marginTop" || key === "marginBottom") && layout.height) {
      layout.top += layout.height * percent;
    }
  });
}
function layoutNode(node, parentMaxWidth, parentDirection) {
  node.shouldUpdate = true;
  saveMargin(node);
  var direction2 = node.style.direction || CSS_DIRECTION_LTR;
  var skipLayout = !node.isDirty && node.lastLayout && node.lastLayout.requestedHeight === node.layout.height && node.lastLayout.requestedWidth === node.layout.width && node.lastLayout.parentMaxWidth === parentMaxWidth && node.lastLayout.direction === direction2;
  if (skipLayout) {
    node.layout.width = node.lastLayout.width;
    node.layout.height = node.lastLayout.height;
    node.layout.top = node.lastLayout.top;
    node.layout.left = node.lastLayout.left;
  } else {
    if (!node.lastLayout) {
      node.lastLayout = {};
    }
    node.lastLayout.requestedWidth = node.layout.width;
    node.lastLayout.requestedHeight = node.layout.height;
    node.lastLayout.parentMaxWidth = parentMaxWidth;
    node.lastLayout.direction = direction2;
    node.children.forEach(function(child) {
      child.layout.width = void 0;
      child.layout.height = void 0;
      child.layout.top = 0;
      child.layout.left = 0;
    });
    layoutNodeImpl(node, parentMaxWidth, parentDirection);
    node.lastLayout.width = node.layout.width;
    node.lastLayout.height = node.layout.height;
    node.lastLayout.top = node.layout.top;
    node.lastLayout.left = node.layout.left;
  }
  layoutMargin(node);
}
function computeLayout(node) {
  if (!node)
    return node;
  var style = node.style, children = node.children;
  if (style) {
    fillNodes(node);
    layoutNode(node, null, null);
    return node;
  }
  if (children && children.length) {
    for (var i = 0, len = children.length; i < len; i++) {
      computeLayout(children[i]);
    }
  }
  return node;
}
var css_layout_default = computeLayout;

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/jsx/shape/rect.js
var rect_default3 = function(layout) {
  var left = layout.left, top = layout.top, width = layout.width, height = layout.height;
  return {
    x: left,
    y: top,
    width,
    height
  };
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/jsx/shape/line.js
var line_default2 = function(layout) {
  var left = layout.left, top = layout.top, width = layout.width, height = layout.height;
  return {
    x1: left,
    y1: top,
    x2: left + width,
    y2: top + height
  };
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/jsx/shape/text.js
var text_default2 = function(layout) {
  var height = layout.height, left = layout.left, top = layout.top;
  return {
    x: left,
    y: top + height / 2,
    // 通过middle + top 才能比较好的实现文本对齐
    textBaseline: "middle"
  };
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/jsx/shape/circle.js
var circle_default2 = function(layout) {
  var left = layout.left, top = layout.top, width = layout.width;
  var r = width / 2;
  return {
    x: left + r,
    y: top + r,
    r
  };
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/jsx/shape/marker.js
var marker_default2 = function(layout) {
  var left = layout.left, top = layout.top, width = layout.width;
  var r = width / 2;
  return {
    x: left + r,
    y: top,
    radius: r
  };
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/jsx/shape/index.js
var map3 = {
  rect: rect_default3,
  line: line_default2,
  text: text_default2,
  circle: circle_default2,
  marker: marker_default2,
  group: rect_default3
};
var shape_default3 = function(type, layout) {
  if (!layout)
    return null;
  var fn = map3[type] || rect_default3;
  return fn(layout);
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/jsx/elementStatus.js
var elementStatus_exports = {};
__export(elementStatus_exports, {
  ELEMENT_APPEAR: () => ELEMENT_APPEAR,
  ELEMENT_DELETE: () => ELEMENT_DELETE,
  ELEMENT_UPDATE: () => ELEMENT_UPDATE
});
var ELEMENT_APPEAR = "appear";
var ELEMENT_UPDATE = "update";
var ELEMENT_DELETE = "delete";

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/jsx/createClipElement.js
function createClipElement(type, config) {
  return new shape_default2[upper_first_default(type)](config);
}
var createClipElement_default = createClipElement;

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/jsx/animation/index.js
var animation_default = function(element, animation, nextAttrs, lastAttrs) {
  if (!animation)
    return null;
  var status = element.get("status");
  var clip = animation.clip, start2 = animation.start, end2 = animation.end, easing = animation.easing, delay = animation.delay, duration = animation.duration;
  var clipConfig = is_function_default(clip) ? clip(element._attrs.attrs) : clip;
  if (clipConfig) {
    var type = clipConfig.type, attrs = clipConfig.attrs, clipStart = clipConfig.start;
    var clipElement = createClipElement_default(type, {
      attrs: _objectSpread2(_objectSpread2({}, attrs), clipStart)
    });
    clipConfig.easing = clipConfig.easing || easing;
    clipConfig.delay = typeof clipConfig.delay === "number" ? clipConfig.delay : delay;
    clipConfig.duration = clipConfig.duration || duration;
    clipConfig.element = clipElement;
  }
  var defaultAttrs = element.getDefaultAttrs();
  return _objectSpread2(_objectSpread2({}, animation), {}, {
    clip: clipConfig,
    start: _objectSpread2(_objectSpread2(_objectSpread2({}, defaultAttrs), lastAttrs), start2),
    end: _objectSpread2(_objectSpread2({}, status === ELEMENT_DELETE ? null : nextAttrs), end2)
  });
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/jsx/render.js
function createNodeTree(element, container, px2hd2) {
  var key = element.key, ref = element.ref, _cache = element._cache, type = element.type, props = element.props, status = element.status, animation = element.animation;
  var children = extendMap(props.children, function(child) {
    return createNodeTree(child, container, px2hd2);
  });
  var style = px2hd2(props.style);
  var attrs = px2hd2(props.attrs);
  if (type === "text") {
    var shape = container.addShape(type, {
      attrs: _objectSpread2({
        x: 0,
        y: 0
      }, attrs)
    });
    var _shape$getBBox = shape.getBBox(), width = _shape$getBBox.width, height = _shape$getBBox.height;
    style = _objectSpread2({
      width,
      height
    }, style);
    shape.remove(true);
  }
  return {
    key,
    ref,
    _cache,
    type,
    props,
    children,
    status,
    animation,
    // 处理px2hd之后的配置
    style,
    attrs
  };
}
function mergeLayout(parent, layout) {
  if (!parent || !layout)
    return layout;
  var parentLeft = parent.left, parentTop = parent.top;
  var left = layout.left, top = layout.top;
  return _objectSpread2(_objectSpread2({}, layout), {}, {
    left: parentLeft + left,
    top: parentTop + top
  });
}
function createElement(node, container, parentLayout, animate) {
  var _node$_cache = node._cache, _cache = _node$_cache === void 0 ? {} : _node$_cache, ref = node.ref, type = node.type, props = node.props, attrs = node.attrs, originLayout = node.layout, renderChildren2 = node.renderChildren, nodeChildren = node.children, status = node.status, animation = node.animation;
  var layout = mergeLayout(parentLayout, originLayout);
  var lastAttrs = _cache.attrs;
  var elementAttrs = _objectSpread2(_objectSpread2(_objectSpread2({}, shape_default3(type, layout)), status === ELEMENT_DELETE ? lastAttrs : null), attrs);
  _cache.attrs = elementAttrs;
  if (elementAttrs.clip) {
    var clip = elementAttrs.clip;
    var clipConfig = is_function_default(clip) ? clip(elementAttrs) : clip;
    elementAttrs.clip = createClipElement_default(clipConfig.type, clipConfig);
  }
  var element;
  if (type === "group") {
    element = container.addGroup(_objectSpread2(_objectSpread2({}, omit_default(props, ["children"])), {}, {
      status,
      attrs: elementAttrs
    }));
    var children = renderChildren2 ? renderChildren2 : nodeChildren;
    if (children && children.length) {
      for (var i = 0, len = children.length; i < len; i++) {
        createElement(children[i], element, layout, animate);
      }
    }
  } else {
    element = container.addShape(type, _objectSpread2(_objectSpread2({}, props), {}, {
      status,
      attrs: elementAttrs
    }));
  }
  if (animate !== false) {
    element.set("animation", animation_default(element, animation, elementAttrs, lastAttrs));
  }
  if (ref) {
    ref.current = element;
  }
  return element;
}
function filterDeleteElement(node) {
  var status = node.status, children = node.children;
  if (status === ELEMENT_DELETE) {
    return null;
  }
  if (!children || !children.length) {
    return node;
  }
  var newChildren = children.filter(function(child) {
    return !!filterDeleteElement(child);
  });
  node.children = newChildren;
  node.renderChildren = children;
  return node;
}
function render(element, container, animate) {
  var px2hd2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : px2hd;
  if (!element) {
    return;
  }
  var nodeTree = createNodeTree(element, container, px2hd2);
  var computeLayoutTree = filterDeleteElement(nodeTree);
  css_layout_default(computeLayoutTree);
  return createElement(nodeTree, container, null, animate);
}
var render_default = function(element, container, animate) {
  return render(element, container, animate);
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/jsx/renderJSXElement.js
function renderJSXElement(element, context, updater) {
  if (!element)
    return element;
  var _element = element, type = _element.type, key = _element.key, ref = _element.ref, props = _element.props, _element$_cache = _element._cache, _cache = _element$_cache === void 0 ? {} : _element$_cache;
  var children = children_default.map(props.children, function(child) {
    return renderJSXElement(child, context, updater);
  });
  element = {
    type,
    key,
    ref,
    _cache,
    props: _objectSpread2(_objectSpread2({}, props), {}, {
      children
    })
  };
  if (typeof type === "function") {
    var newElement = type(element.props, context, updater);
    if (!newElement)
      return newElement;
    return renderJSXElement(_objectSpread2(_objectSpread2({}, newElement), {}, {
      // 保留原始的key和ref
      key: key !== void 0 ? key : newElement.key,
      ref: ref !== void 0 ? ref : newElement.ref
    }), context, updater);
  }
  return element;
}
var renderJSXElement_default = function(element, context, updater) {
  return renderJSXElement(element, context, updater);
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/jsx/compareRenderTree.js
var _excluded2 = ["children", "animation"];
var _excluded22 = ["children", "animation"];
var _excluded3 = ["children", "animation"];
var _excluded4 = ["animation"];
var _excluded5 = ["animation"];
function deleteElement(element) {
  var hasElement = false;
  var receiveElement = children_default.map(element, function(item) {
    if (!item)
      return item;
    var ref = item.ref, key = item.key, type = item.type, props = item.props, _cache = item._cache;
    var children = props.children, animation = props.animation, receiveProps = _objectWithoutProperties(props, _excluded2);
    var status = ELEMENT_DELETE;
    var receiveAnimation = animation && animation.leave;
    var receiveChildren = deleteElement(children);
    if (!receiveChildren && !receiveAnimation) {
      return null;
    }
    hasElement = true;
    return {
      ref,
      key,
      type,
      props: _objectSpread2(_objectSpread2({}, receiveProps), {}, {
        children: receiveChildren
      }),
      _cache,
      animation: receiveAnimation,
      status
    };
  });
  if (!hasElement) {
    return null;
  }
  return receiveElement;
}
function appearElement(element) {
  return children_default.map(element, function(item) {
    if (!item)
      return item;
    var ref = item.ref, key = item.key, type = item.type, props = item.props, _cache = item._cache;
    var children = props.children, animation = props.animation, receiveProps = _objectWithoutProperties(props, _excluded22);
    var status = ELEMENT_APPEAR;
    var receiveAnimation = animation && animation.appear;
    var receiveChildren = appearElement(children);
    return {
      ref,
      key,
      type,
      props: _objectSpread2(_objectSpread2({}, receiveProps), {}, {
        children: receiveChildren
      }),
      _cache,
      animation: receiveAnimation,
      status
    };
  });
}
function updateElement(nextElement, lastElement) {
  var ref = nextElement.ref, key = nextElement.key, type = nextElement.type, _nextCache = nextElement._cache, nextProps = nextElement.props;
  var _lastCache = lastElement._cache, lastProps = lastElement.props;
  var nextChildren = nextProps.children, nextAnimation = nextProps.animation, nextReceiveProps = _objectWithoutProperties(nextProps, _excluded3);
  var lastChildren = lastProps.children;
  var children = compareElement(nextChildren, lastChildren);
  var _cache = mix(_nextCache, _lastCache);
  var animation = nextAnimation && nextAnimation.update;
  return {
    ref,
    key,
    type,
    props: _objectSpread2(_objectSpread2({}, nextReceiveProps), {}, {
      children
    }),
    _cache,
    animation,
    status: ELEMENT_UPDATE
  };
}
function morphElement(nextElement, lastElement) {
  return [deleteElement(lastElement), appearElement(nextElement)];
}
function changeTypeToGroup(nextGroupElement, lastShapeElement) {
  var key = nextGroupElement.key, type = nextGroupElement.type, ref = nextGroupElement.ref, groupProps = nextGroupElement.props, _groupCache = nextGroupElement._cache;
  var lastType = lastShapeElement.type, _lastCache = lastShapeElement._cache;
  var groupChildren = groupProps.children;
  var children = children_default.map(groupChildren, function(nextElement) {
    if (!nextElement)
      return nextElement;
    var key2 = nextElement.key, ref2 = nextElement.ref, nextType = nextElement.type, nextProps = nextElement.props, _nextCache = nextElement._cache;
    if (nextType !== lastType) {
      return morphElement(nextElement, lastShapeElement);
    }
    var nextAnimation = nextProps.animation, nextReceiveProps = _objectWithoutProperties(nextProps, _excluded4);
    var animation = nextAnimation && nextAnimation.update;
    return {
      ref: ref2,
      key: key2,
      type: nextType,
      props: nextReceiveProps,
      _cache: mix(_nextCache, _lastCache),
      animation,
      status: ELEMENT_UPDATE
    };
  });
  return {
    key,
    type,
    ref,
    props: _objectSpread2(_objectSpread2({}, groupProps), {}, {
      children
    }),
    _cache: _groupCache,
    status: ELEMENT_UPDATE
  };
}
function changeTypeFromGroup(nextShapeElement, lastGroupElement) {
  var nextRef = nextShapeElement.ref, nextKey = nextShapeElement.key, nextType = nextShapeElement.type, nextShapeProps = nextShapeElement.props, _nextCache = nextShapeElement._cache;
  var lastType = lastGroupElement.type, lastProps = lastGroupElement.props;
  var nextAnimation = nextShapeProps.animation, nextReceiveProps = _objectWithoutProperties(nextShapeProps, _excluded5);
  var groupChildren = lastProps.children;
  var animation = nextAnimation && nextAnimation.update;
  if (!animation) {
    return [deleteElement(lastGroupElement), appearElement[nextShapeElement]];
  }
  var transformChild = null;
  var children = children_default.map(groupChildren, function(child) {
    if (!child)
      return child;
    var childType = child.type, _childCache = child._cache;
    if (childType !== nextType) {
      return deleteElement(child);
    }
    if (!transformChild) {
      transformChild = child;
    }
    return {
      type: nextType,
      props: nextShapeProps,
      _cache: _childCache,
      animation,
      status: ELEMENT_UPDATE
    };
  });
  if (!transformChild) {
    return [deleteElement(lastGroupElement), appearElement(nextShapeElement)];
  }
  var nextElement = {
    ref: nextRef,
    key: nextKey,
    type: nextType,
    props: nextReceiveProps,
    _cache: mix(_nextCache, transformChild._cache),
    animation,
    status: ELEMENT_UPDATE
  };
  return [{
    type: lastType,
    props: _objectSpread2(_objectSpread2({}, lastProps), {}, {
      children
    }),
    status: ELEMENT_DELETE
  }, nextElement];
}
function changeElementType(nextElement, lastElement) {
  var nextType = nextElement.type;
  var lastType = lastElement.type;
  if (nextType === "group") {
    return changeTypeToGroup(nextElement, lastElement);
  }
  if (lastType === "group") {
    return changeTypeFromGroup(nextElement, lastElement);
  }
  return morphElement(nextElement, lastElement);
}
function compareArray2(nextElements, lastElements) {
  var keyed = {};
  var nextLength = nextElements.length;
  var lastLength = lastElements.length;
  for (var i = 0; i < lastLength; i++) {
    var element = lastElements[i];
    if (element && !is_nil_default(element.key)) {
      var key = element.key;
      keyed[key] = element;
    }
  }
  var maxLength = Math.max(nextLength, lastLength);
  var returnElements = [];
  for (var _i = 0; _i < maxLength; _i++) {
    var nextElement = nextElements[_i];
    if (!nextElement) {
      returnElements.push(compareElement(nextElement, lastElements[_i]));
      continue;
    }
    var _key = nextElement.key;
    if (!is_nil_default(_key)) {
      var lastElement = keyed[_key];
      if (lastElement)
        delete keyed[_key];
      returnElements.push(compareElement(nextElement, lastElement));
      continue;
    }
    returnElements.push(compareElement(nextElement, lastElements[_i]));
  }
  Object.keys(keyed).forEach(function(key2) {
    returnElements.push(compareElement(null, keyed[key2]));
  });
  return returnElements;
}
function compareElement(nextElement, lastElement) {
  if (!nextElement && !lastElement) {
    return null;
  }
  if (!lastElement) {
    return appearElement(nextElement);
  }
  if (!nextElement) {
    return deleteElement(lastElement);
  }
  if (is_array_default(nextElement) || is_array_default(lastElement)) {
    var nextElementArray = is_array_default(nextElement) ? nextElement : [nextElement];
    var lastElementArray = is_array_default(lastElement) ? lastElement : [lastElement];
    return compareArray2(nextElementArray, lastElementArray);
  }
  var nextKey = nextElement.key, nextType = nextElement.type;
  var lastKey = lastElement.key, lastType = lastElement.type;
  if (!is_nil_default(nextKey) && nextKey !== lastKey) {
    return [deleteElement(lastElement), appearElement(nextElement)];
  }
  if (nextType !== lastType) {
    return changeElementType(nextElement, lastElement);
  }
  return updateElement(nextElement, lastElement);
}
var compareRenderTree_default = compareElement;

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/base/equal.js
function objToString(obj) {
  return Object.prototype.toString.call(obj);
}
function objectKeys(obj) {
  return Object.keys(obj);
}
function equal(a, b) {
  if (a === b)
    return true;
  if (_typeof(a) !== _typeof(b)) {
    return false;
  }
  if (a == null || b == null) {
    return false;
  }
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  }
  if (objToString(a) !== objToString(b)) {
    return false;
  }
  if (is_function_default(a)) {
    return true;
  }
  if (_typeof(a) !== "object") {
    return false;
  }
  if (is_array_default(a)) {
    if (a.length !== b.length) {
      return false;
    }
    for (var i = a.length - 1; i >= 0; i--) {
      if (!equal(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }
  if (!is_plain_object_default(a)) {
    return false;
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  if (ka.length !== kb.length) {
    return false;
  }
  ka.sort();
  kb.sort();
  for (var _i = ka.length - 1; _i >= 0; _i--) {
    if (ka[_i] != kb[_i]) {
      return false;
    }
  }
  for (var _i2 = ka.length - 1; _i2 >= 0; _i2--) {
    var key = ka[_i2];
    if (!equal(a[key], b[key])) {
      return false;
    }
  }
  return true;
}
var equal_default = equal;

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/base/diff.js
var _excluded6 = ["transformFrom"];
function pickElement(element) {
  if (!element)
    return element;
  return children_default.map(element, function(item) {
    if (!item)
      return item;
    return pick_default(item, ["key", "ref", "type", "props"]);
  });
}
function renderShape(component, children, animate) {
  var container = component.container, context = component.context, updater = component.updater, __lastElement = component.__lastElement, transformFrom = component.transformFrom, componentAnimate = component.animate;
  container.clear();
  animate = is_boolean_default(animate) ? animate : componentAnimate;
  var px2hd2 = context.px2hd;
  var lastElement = __lastElement || transformFrom && transformFrom.__lastElement;
  var shapeElement = renderJSXElement_default(children, context, updater);
  component.__lastElement = shapeElement;
  var renderElement = animate !== false ? compareRenderTree_default(shapeElement, lastElement) : shapeElement;
  if (!renderElement)
    return null;
  if (is_array_default(renderElement)) {
    return renderElement.map(function(element) {
      return render(element, container, animate, px2hd2);
    });
  } else {
    return render(renderElement, container, animate, px2hd2);
  }
}
function setComponentAnimate(child, parent) {
  var parentAnimate = parent.animate;
  if (parentAnimate === false) {
    child.animate = false;
    return;
  }
  var childProps = child.props;
  var childAnimate = childProps.animate;
  child.animate = is_boolean_default(childAnimate) ? childAnimate : parentAnimate;
}
function getTransformComponent(component) {
  if (!component)
    return null;
  var __lastElement = component.__lastElement, children = component.children;
  if (__lastElement) {
    return component;
  }
  if (!children) {
    return null;
  }
  var componentFromChildren = null;
  children_default.map(children, function(item) {
    if (componentFromChildren)
      return;
    if (!item)
      return;
    var component2 = getTransformComponent(item.component);
    if (component2) {
      componentFromChildren = component2;
    }
  });
  return componentFromChildren;
}
function getTransformFromComponentRef(transformFromRef) {
  if (!transformFromRef || !transformFromRef.current) {
    return null;
  }
  var transformFromComponent = transformFromRef.current;
  return getTransformComponent(transformFromComponent);
}
function createComponent(parent, element) {
  var type = element.type, props = element.props, ref = element.ref;
  var container = parent.container, context = parent.context, updater = parent.updater, transformFrom = parent.transformFrom;
  var transformFromRef = props.transformFrom, receiveProps = _objectWithoutProperties(props, _excluded6);
  var component;
  if (type.prototype && type.prototype.isF2Component) {
    component = new type(receiveProps, context, updater);
  } else {
    component = new component_default(receiveProps, context, updater);
    component.render = function() {
      return type(this.props, context, updater);
    };
  }
  if (ref) {
    ref.current = component;
  }
  if (transformFrom) {
    component.transformFrom = transformFrom;
  }
  if (transformFromRef) {
    var transformFromComponent = transformFromRef ? getTransformFromComponentRef(transformFromRef) : null;
    component.transformFrom = transformFromComponent;
  }
  var zIndex = props.zIndex;
  component.container = container.addGroup({
    zIndex
  });
  component.context = context;
  component.updater = updater;
  return component;
}
function renderComponent(component) {
  children_default.map(component, function(item) {
    var lastChildren = item.children;
    var mount = is_undefined_default(lastChildren);
    if (mount) {
      if (item.willMount)
        item.willMount();
    } else if (item.willUpdate) {
      item.willUpdate();
    }
  });
  children_default.map(component, function(item) {
    var lastChildren = item.children;
    var mount = is_undefined_default(lastChildren);
    var newChildren = item.render();
    renderChildren(item, newChildren, lastChildren);
    if (mount) {
      if (item.didMount)
        item.didMount();
    } else if (item.didUpdate) {
      item.didUpdate();
    }
  });
}
function destroyElement(elements) {
  children_default.map(elements, function(element) {
    if (!element)
      return;
    var component = element.component;
    if (!component) {
      return;
    }
    if (component.willUnmount) {
      component.willUnmount();
    }
    destroyElement(component.children);
    var container = component.container;
    container.remove(true);
    if (component.didUnmount) {
      component.didUnmount();
    }
    component.destroy();
  });
}
function diffElement(parent, nextElement, lastElement) {
  if (!nextElement && !lastElement) {
    return null;
  }
  if (!nextElement && lastElement) {
    destroyElement(lastElement);
    return null;
  }
  if (nextElement && !lastElement) {
    return nextElement;
  }
  var nextType = nextElement.type, nextProps = nextElement.props;
  var lastType = lastElement.type, lastProps = lastElement.props, lastComponent = lastElement.component;
  if (nextType !== lastType) {
    destroyElement(lastElement);
    return nextElement;
  }
  nextElement.component = lastComponent;
  if (equal_default(nextProps, lastProps) && lastComponent.context === parent.context) {
    return null;
  }
  return nextElement;
}
function diff(parent, nextChildren, lastChildren) {
  var childrenArray = [];
  children_default.compare(nextChildren, lastChildren, function(next, last2) {
    var element = diffElement(parent, next, last2);
    if (element) {
      childrenArray = childrenArray.concat(children_default.toArray(element).filter(Boolean));
    }
  });
  var shouldProcessChildren = childrenArray.filter(function(element) {
    var component = element.component, props = element.props;
    if (!component)
      return true;
    if (component.shouldUpdate && component.shouldUpdate(props) === false) {
      return false;
    }
    return true;
  });
  var shouldRenderComponent = shouldProcessChildren.map(function(element) {
    var component = element.component;
    if (!component) {
      component = createComponent(parent, element);
    } else {
      var props = element.props;
      if (component.willReceiveProps) {
        component.willReceiveProps(props, parent.context);
      }
      var zIndex = props.zIndex;
      component.container.set("zIndex", zIndex);
      component.props = props;
      component.context = parent.context;
    }
    element.component = component;
    setComponentAnimate(component, parent);
    return component;
  });
  renderComponent(shouldRenderComponent);
  childrenArray.forEach(function(element) {
    var component = element.component;
    var parentGroup = parent.container;
    parentGroup.add(component.container);
  });
  return nextChildren;
}
function isContainer(children) {
  if (!children)
    return false;
  if (!is_array_default(children)) {
    var type = children.type;
    return typeof type === "function";
  }
  for (var i = 0, len = children.length; i < len; i++) {
    if (isContainer(children[i])) {
      return true;
    }
  }
  return false;
}
function renderChildren(parent, nextChildren, lastChildren) {
  nextChildren = pickElement(nextChildren);
  parent.children = nextChildren;
  if (isContainer(nextChildren)) {
    nextChildren = diff(parent, nextChildren, lastChildren);
  } else {
    renderShape(parent, nextChildren);
  }
  return nextChildren;
}

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/base/layout.js
var Layout = function() {
  function Layout2(layout) {
    _classCallCheck(this, Layout2);
    this.left = 0;
    this.top = 0;
    this.width = 0;
    this.height = 0;
    this.update(layout);
  }
  _createClass(Layout2, [{
    key: "update",
    value: function update(layout) {
      mix(this, layout);
      var left = this.left, top = this.top, width = this.width, height = this.height;
      this.right = left + width;
      this.bottom = top + height;
      return this;
    }
  }, {
    key: "padding",
    value: function padding(style) {
      if (!style) {
        return this;
      }
      var _style$top = style.top, paddingTop = _style$top === void 0 ? 0 : _style$top, _style$right = style.right, paddingRight = _style$right === void 0 ? 0 : _style$right, _style$bottom = style.bottom, paddingBottom = _style$bottom === void 0 ? 0 : _style$bottom, _style$left = style.left, paddingLeft = _style$left === void 0 ? 0 : _style$left;
      var top = this.top, right = this.right, bottom = this.bottom, left = this.left;
      this.top = top + paddingTop;
      this.right = right - paddingRight;
      this.bottom = bottom - paddingBottom;
      this.left = left + paddingLeft;
      this.width = this.right - this.left;
      this.height = this.bottom - this.top;
      return this;
    }
  }, {
    key: "clone",
    value: function clone3() {
      var left = this.left, top = this.top, width = this.width, height = this.height;
      return new Layout2({
        left,
        top,
        width,
        height
      });
    }
  }], [{
    key: "fromStyle",
    value: function fromStyle(style) {
      var left = style.left, top = style.top, width = style.width, height = style.height, padding = style.padding;
      var _padding = _slicedToArray(padding, 4), paddingTop = _padding[0], paddingRight = _padding[1], paddingBottom = _padding[2], paddingLeft = _padding[3];
      return new Layout2({
        left: left + paddingLeft,
        top: top + paddingTop,
        width: width - paddingLeft - paddingRight,
        height: height - paddingTop - paddingBottom
      });
    }
  }]);
  return Layout2;
}();
var layout_default = Layout;

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/base/updater.js
function createUpdater(canvas) {
  var setStateQueue = [];
  var renderQueue = [];
  var callbackQueue = [];
  function process() {
    var item;
    while (item = setStateQueue.shift()) {
      var _item = item, state = _item.state, component = _item.component, callback = _item.callback;
      if (component.destroyed) {
        continue;
      }
      if (!component.prevState) {
        component.prevState = Object.assign({}, component.state);
      }
      if (typeof state === "function") {
        Object.assign(component.state, state(component.prevState, component.props));
      } else {
        Object.assign(component.state, state);
      }
      component.prevState = component.state;
      if (typeof callback === "function") {
        callbackQueue.push({
          callback,
          component
        });
      }
    }
    var renderComponents = [].concat(renderQueue);
    canvas.renderComponents(renderComponents);
    commitRenderQueue();
    renderQueue.length = 0;
    callbackQueue.length = 0;
  }
  function enqueueSetState(component, state, callback) {
    if (setStateQueue.length === 0) {
      setTimeout(process, 0);
    }
    setStateQueue.push({
      component,
      state,
      callback
    });
    if (renderQueue.indexOf(component) < 0) {
      renderQueue.push(component);
    }
  }
  function commitRenderQueue() {
    for (var i = 0; i < callbackQueue.length; i++) {
      var _callbackQueue$i = callbackQueue[i], callback = _callbackQueue$i.callback, component = _callbackQueue$i.component;
      callback.call(component);
    }
  }
  var updater = {
    // isMounted: function(publicInstance) {
    //   return false;
    // },
    enqueueForceUpdate: enqueueSetState,
    // enqueueReplaceState: function(publicInstance, completeState) {
    // },
    enqueueSetState
  };
  return updater;
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/theme.js
var axis = {
  labelOffset: "15px",
  line: {
    stroke: "#E8E8E8",
    lineWidth: "1px"
  },
  label: {
    fill: "#808080",
    fontSize: "20px"
  },
  grid: {
    stroke: "#E8E8E8",
    lineWidth: "1px",
    lineDash: ["4px"]
  }
};
var guide = {
  line: {
    style: {
      stroke: "#a3a3a3",
      lineWidth: 1
    },
    offsetX: 0,
    offsetY: 0
  },
  text: {
    style: {
      fill: "#787878",
      // textAlign: 'center',
      textBaseline: "middle"
    },
    offsetX: 0,
    offsetY: 0
  },
  rect: {
    style: {
      fill: "#fafafa"
    }
  },
  arc: {
    style: {
      stroke: "#a3a3a3"
    }
  },
  html: {
    offsetX: 0,
    offsetY: 0,
    alignX: "center",
    alignY: "middle"
  },
  tag: {
    offsetX: 0,
    offsetY: 0,
    side: 4,
    background: {
      padding: 5,
      radius: 2,
      fill: "#1890FF"
    },
    textStyle: {
      fontSize: 12,
      fill: "#fff",
      textAlign: "center",
      textBaseline: "middle"
    }
  },
  point: {
    offsetX: 0,
    offsetY: 0,
    style: {
      fill: "#fff",
      r: 3,
      lineWidth: 2,
      stroke: "#1890ff"
    }
  }
};
var chart = {
  padding: ["30px", "30px", "30px", "30px"]
};
var Theme = {
  fontFamily: '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif',
  pixelRatio: 1,
  padding: [0, 0, 0, 0],
  chart,
  colors: ["#1890FF", "#2FC25B", "#FACC14", "#223273", "#8543E0", "#13C2C2", "#3436C7", "#F04864"],
  shapes: {
    line: ["line", "dash", "smooth"],
    point: ["circle", "hollowCircle", "rect"],
    area: ["area", "smooth"],
    interval: ["rect", "pyramid", "funnel"]
  },
  sizes: ["4px", "6px", "8px", "10px", "12px"],
  shape: {
    line: {
      default: {
        lineWidth: "4px",
        lineJoin: "round",
        lineCap: "round"
      },
      smooth: {
        smooth: true
      },
      dash: {
        lineDash: ["8px", "8px"]
      }
    },
    point: {
      default: {
        size: "6px"
      },
      hollowCircle: {
        lineWidth: "2px"
      }
    },
    area: {
      default: {
        fillOpacity: 0.1
      }
    },
    interval: {
      default: {}
    }
  },
  axis,
  guide
};
var theme_default = Theme;

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/canvas/animation/timelime.js
var requestAnimationFrame4 = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.requestAnimationFrame ? window.requestAnimationFrame : function(fn) {
  return setTimeout(fn, 16);
};
var cancelAnimationFrame3 = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.cancelAnimationFrame ? window.cancelAnimationFrame : function(number) {
  return clearTimeout(number);
};
var clock = (typeof performance === "undefined" ? "undefined" : _typeof(performance)) === "object" && performance.now ? performance : Date;
var Timeline2 = function() {
  function Timeline3() {
    _classCallCheck(this, Timeline3);
    this.playing = false;
    this.paused = false;
    this.pausedTime = 0;
  }
  _createClass(Timeline3, [{
    key: "play",
    value: function play(duration, onUpdate, onEnd) {
      var _this = this;
      if (duration <= 0) {
        onEnd();
        return;
      }
      if (this.playing) {
        return;
      }
      this.duration = duration;
      this.onUpdate = onUpdate;
      this.onEnd = onEnd;
      var paused = this.paused, pausedTime = this.pausedTime;
      this.playing = true;
      var startTime = clock.now();
      if (paused && pausedTime) {
        startTime = startTime - pausedTime;
        this.paused = false;
        this.pausedTime = 0;
      }
      var play2 = function play3() {
        var now = clock.now();
        var time = now - startTime;
        if (time >= duration) {
          onUpdate(duration);
          onEnd();
          _this.playing = false;
          return;
        }
        if (_this.paused) {
          onUpdate(time);
          _this.pausedTime = time;
          _this.playing = false;
          return;
        }
        onUpdate(time);
        _this.animationFrameNumber = requestAnimationFrame4(play3);
      };
      this.animationFrameNumber = requestAnimationFrame4(play2);
    }
  }, {
    key: "pause",
    value: function pause() {
      this.paused = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.playing = false;
    }
  }, {
    key: "end",
    value: function end2() {
      if (!this.playing) {
        return;
      }
      this.abort();
      this.onUpdate(this.duration);
      this.onEnd();
    }
  }, {
    key: "abort",
    value: function abort() {
      if (!this.animationFrameNumber) {
        return;
      }
      cancelAnimationFrame3(this.animationFrameNumber);
      this.playing = false;
      this.animationFrameNumber = null;
    }
  }]);
  return Timeline3;
}();
var timelime_default = Timeline2;

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) {
    prototype[key] = definition[key];
  }
  return prototype;
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-color/src/color.js
function Color() {
}
var _darker = 0.7;
var _brighter = 1 / _darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$");
var reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$");
var reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$");
var reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$");
var reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$");
var reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy: function copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable: function displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format2) {
  var m, l;
  format2 = (format2 + "").trim().toLowerCase();
  return (m = reHex.exec(format2)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format2)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format2)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format2)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format2)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a) {
  if (a <= 0)
    r = g = b = NaN;
  return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define_default(Rgb, rgb, extend(Color, {
  brighter: function brighter(k) {
    k = k == null ? _brighter : Math.pow(_brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function darker(k) {
    k = k == null ? _darker : Math.pow(_darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function rgb2() {
    return this;
  },
  displayable: function displayable2() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}
function rgb_formatRgb() {
  var a = this.opacity;
  a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
}
function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
  if (a <= 0)
    h = s = l = NaN;
  else if (l <= 0 || l >= 1)
    h = s = NaN;
  else if (s <= 0)
    h = NaN;
  return new Hsl(h, s, l, a);
}
function hslConvert(o) {
  if (o instanceof Hsl)
    return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Hsl();
  if (o instanceof Hsl)
    return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min2 = Math.min(r, g, b), max2 = Math.max(r, g, b), h = NaN, s = max2 - min2, l = (max2 + min2) / 2;
  if (s) {
    if (r === max2)
      h = (g - b) / s + (g < b) * 6;
    else if (g === max2)
      h = (b - r) / s + 2;
    else
      h = (r - g) / s + 4;
    s /= l < 0.5 ? max2 + min2 : 2 - max2 - min2;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define_default(Hsl, hsl, extend(Color, {
  brighter: function brighter2(k) {
    k = k == null ? _brighter : Math.pow(_brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function darker2(k) {
    k = k == null ? _darker : Math.pow(_darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function rgb3() {
    var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
  },
  displayable: function displayable3() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl: function formatHsl() {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
  }
}));
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-color/src/math.js
var radians = Math.PI / 180;
var degrees = 180 / Math.PI;

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-color/src/lab.js
var K = 18;
var Xn = 0.96422;
var Yn = 1;
var Zn = 0.82521;
var t0 = 4 / 29;
var t1 = 6 / 29;
var t2 = 3 * t1 * t1;
var t3 = t1 * t1 * t1;
function labConvert(o) {
  if (o instanceof Lab)
    return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl)
    return hcl2lab(o);
  if (!(o instanceof Rgb))
    o = rgbConvert(o);
  var r = rgb2lrgb(o.r), g = rgb2lrgb(o.g), b = rgb2lrgb(o.b), y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
  if (r === g && g === b)
    x = z = y;
  else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}
function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}
function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}
define_default(Lab, lab, extend(Color, {
  brighter: function brighter3(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function darker3(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function rgb4() {
    var y = (this.l + 16) / 116, x = isNaN(this.a) ? y : y + this.a / 500, z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new Rgb(lrgb2rgb(3.1338561 * x - 1.6168667 * y - 0.4906146 * z), lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.033454 * z), lrgb2rgb(0.0719453 * x - 0.2289914 * y + 1.4052427 * z), this.opacity);
  }
}));
function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}
function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}
function lrgb2rgb(x) {
  return 255 * (x <= 31308e-7 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}
function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}
function hclConvert(o) {
  if (o instanceof Hcl)
    return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab))
    o = labConvert(o);
  if (o.a === 0 && o.b === 0)
    return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * degrees;
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}
function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}
function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}
function hcl2lab(o) {
  if (isNaN(o.h))
    return new Lab(o.l, 0, 0, o.opacity);
  var h = o.h * radians;
  return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}
define_default(Hcl, hcl, extend(Color, {
  brighter: function brighter4(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function darker4(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function rgb5() {
    return hcl2lab(this).rgb();
  }
}));

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-color/src/cubehelix.js
var A = -0.14861;
var B = 1.78277;
var C = -0.29227;
var D = -0.90649;
var E = 1.97294;
var ED = E * D;
var EB = E * B;
var BC_DA = B * C - D * A;
function cubehelixConvert(o) {
  if (o instanceof Cubehelix)
    return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Rgb))
    o = rgbConvert(o);
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB), bl = b - l, k = (E * (g - l) - C * bl) / D, s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), h = s ? Math.atan2(k, bl) * degrees - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}
function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}
function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define_default(Cubehelix, cubehelix, extend(Color, {
  brighter: function brighter5(k) {
    k = k == null ? _brighter : Math.pow(_brighter, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function darker5(k) {
    k = k == null ? _darker : Math.pow(_darker, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function rgb6() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * radians, l = +this.l, a = isNaN(this.s) ? 0 : this.s * l * (1 - l), cosh2 = Math.cos(h), sinh2 = Math.sin(h);
    return new Rgb(255 * (l + a * (A * cosh2 + B * sinh2)), 255 * (l + a * (C * cosh2 + D * sinh2)), 255 * (l + a * (E * cosh2)), this.opacity);
  }
}));

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-interpolate/src/basis.js
function basis(t12, v0, v1, v2, v3) {
  var t22 = t12 * t12, t32 = t22 * t12;
  return ((1 - 3 * t12 + 3 * t22 - t32) * v0 + (4 - 6 * t22 + 3 * t32) * v1 + (1 + 3 * t12 + 3 * t22 - 3 * t32) * v2 + t32 * v3) / 6;
}
function basis_default(values2) {
  var n = values2.length - 1;
  return function(t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values2[i], v2 = values2[i + 1], v0 = i > 0 ? values2[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values2[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-interpolate/src/basisClosed.js
function basisClosed_default(values2) {
  var n = values2.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values2[(i + n - 1) % n], v1 = values2[i % n], v2 = values2[(i + 1) % n], v3 = values2[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-interpolate/src/constant.js
var constant_default = function(x) {
  return function() {
    return x;
  };
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-interpolate/src/color.js
function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}
function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}
function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant_default(isNaN(a) ? b : a);
}
function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant_default(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant_default(isNaN(a) ? b : a);
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-interpolate/src/rgb.js
var rgb_default = function rgbGamma(y) {
  var color2 = gamma(y);
  function rgb7(start2, end2) {
    var r = color2((start2 = rgb(start2)).r, (end2 = rgb(end2)).r), g = color2(start2.g, end2.g), b = color2(start2.b, end2.b), opacity = nogamma(start2.opacity, end2.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g(t);
      start2.b = b(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  }
  rgb7.gamma = rgbGamma;
  return rgb7;
}(1);
function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color2;
    for (i = 0; i < n; ++i) {
      color2 = rgb(colors[i]);
      r[i] = color2.r || 0;
      g[i] = color2.g || 0;
      b[i] = color2.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color2.opacity = 1;
    return function(t) {
      color2.r = r(t);
      color2.g = g(t);
      color2.b = b(t);
      return color2 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-interpolate/src/numberArray.js
function numberArray_default(a, b) {
  if (!b)
    b = [];
  var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
  return function(t) {
    for (i = 0; i < n; ++i) {
      c[i] = a[i] * (1 - t) + b[i] * t;
    }
    return c;
  };
}
function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-interpolate/src/array.js
function genericArray(a, b) {
  var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
  for (i = 0; i < na; ++i) {
    x[i] = value_default(a[i], b[i]);
  }
  for (; i < nb; ++i) {
    c[i] = b[i];
  }
  return function(t) {
    for (i = 0; i < na; ++i) {
      c[i] = x[i](t);
    }
    return c;
  };
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-interpolate/src/date.js
function date_default(a, b) {
  var d = new Date();
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-interpolate/src/number.js
function number_default(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-interpolate/src/object.js
function object_default(a, b) {
  var i = {}, c = {}, k;
  if (a === null || _typeof(a) !== "object")
    a = {};
  if (b === null || _typeof(b) !== "object")
    b = {};
  for (k in b) {
    if (k in a) {
      i[k] = value_default(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }
  return function(t) {
    for (k in i) {
      c[k] = i[k](t);
    }
    return c;
  };
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero2(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string_default(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i])
        s[i] += bs;
      else
        s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i])
        s[i] += bm;
      else
        s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({
        i,
        x: number_default(am, bm)
      });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i])
      s[i] += bs;
    else
      s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero2(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2) {
      s[(o = q[i2]).i] = o.x(t);
    }
    return s.join("");
  });
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-interpolate/src/value.js
function value_default(a, b) {
  var t = _typeof(b), c;
  return b == null || t === "boolean" ? constant_default(b) : (t === "number" ? number_default : t === "string" ? (c = color(b)) ? (b = c, rgb_default) : string_default : b instanceof color ? rgb_default : b instanceof Date ? date_default : isNumberArray(b) ? numberArray_default : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object_default : number_default)(a, b);
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-interpolate/src/transform/decompose.js
var degrees2 = 180 / Math.PI;
var identity2 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b))
    a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d)
    c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d))
    c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c)
    a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees2,
    skewX: Math.atan(skewX) * degrees2,
    scaleX,
    scaleY
  };
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-interpolate/src/transform/parse.js
var svgNode;
function parseCss(value) {
  var m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity2 : decompose_default(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
  if (value == null)
    return identity2;
  if (!svgNode)
    svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate()))
    return identity2;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-interpolate/src/transform/index.js
function interpolateTransform(parse2, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }
  function translate2(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({
        i: i - 4,
        x: number_default(xa, xb)
      }, {
        i: i - 2,
        x: number_default(ya, yb)
      });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate2(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180)
        b += 360;
      else if (b - a > 180)
        a += 360;
      q.push({
        i: s.push(pop(s) + "rotate(", null, degParen) - 2,
        x: number_default(a, b)
      });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }
  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({
        i: s.push(pop(s) + "skewX(", null, degParen) - 2,
        x: number_default(a, b)
      });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }
  function scale3(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({
        i: i - 4,
        x: number_default(xa, xb)
      }, {
        i: i - 2,
        x: number_default(ya, yb)
      });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a, b) {
    var s = [], q = [];
    a = parse2(a), b = parse2(b);
    translate2(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate2(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale3(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) {
        s[(o = q[i]).i] = o.x(t);
      }
      return s.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-interpolate/src/zoom.js
var epsilon2 = 1e-12;
function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}
function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}
function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
var zoom_default = function zoomRho(rho, rho2, rho4) {
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function i2(t) {
        return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S)];
      };
    } else {
      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function i2(t) {
        var s = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / cosh(rho * s + r0)];
      };
    }
    i.duration = S * 1e3 * rho / Math.SQRT2;
    return i;
  }
  zoom.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };
  return zoom;
}(Math.SQRT2, 2, 4);

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-interpolate/src/hsl.js
function hsl2(hue2) {
  return function(start2, end2) {
    var h = hue2((start2 = hsl(start2)).h, (end2 = hsl(end2)).h), s = nogamma(start2.s, end2.s), l = nogamma(start2.l, end2.l), opacity = nogamma(start2.opacity, end2.opacity);
    return function(t) {
      start2.h = h(t);
      start2.s = s(t);
      start2.l = l(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  };
}
var hsl_default = hsl2(hue);
var hslLong = hsl2(nogamma);

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-interpolate/src/hcl.js
function hcl2(hue2) {
  return function(start2, end2) {
    var h = hue2((start2 = hcl(start2)).h, (end2 = hcl(end2)).h), c = nogamma(start2.c, end2.c), l = nogamma(start2.l, end2.l), opacity = nogamma(start2.opacity, end2.opacity);
    return function(t) {
      start2.h = h(t);
      start2.c = c(t);
      start2.l = l(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  };
}
var hcl_default = hcl2(hue);
var hclLong = hcl2(nogamma);

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-interpolate/src/cubehelix.js
function cubehelix2(hue2) {
  return function cubehelixGamma(y) {
    y = +y;
    function cubehelix3(start2, end2) {
      var h = hue2((start2 = cubehelix(start2)).h, (end2 = cubehelix(end2)).h), s = nogamma(start2.s, end2.s), l = nogamma(start2.l, end2.l), opacity = nogamma(start2.opacity, end2.opacity);
      return function(t) {
        start2.h = h(t);
        start2.s = s(t);
        start2.l = l(Math.pow(t, y));
        start2.opacity = opacity(t);
        return start2 + "";
      };
    }
    cubehelix3.gamma = cubehelixGamma;
    return cubehelix3;
  }(1);
}
var cubehelix_default = cubehelix2(hue);
var cubehelixLong = cubehelix2(nogamma);

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/canvas/animation/interpolate/interpolateObjectArray.js
function interpolateObjectArray(a, b) {
  var na = a ? a.length : 0;
  var nb = b ? b.length : 0;
  var maxLen = Math.max(nb, na);
  var c = new Array(maxLen);
  var x = new Array(maxLen);
  var i;
  for (i = 0; i < maxLen; i++) {
    var ia = i < na ? (a || [])[i] : (a || [])[na - 1];
    var ib = i < nb ? (b || [])[i] : (b || [])[nb - 1];
    x[i] = object_default(ia, ib);
  }
  return function(t) {
    if (t >= 1) {
      return b;
    }
    for (i = 0; i < maxLen; ++i) {
      c[i] = x[i](t);
    }
    return c;
  };
}
var interpolateObjectArray_default = interpolateObjectArray;

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/canvas/animation/interpolate/index.js
var interpolate_default = function(a, b) {
  if (typeof b === "string") {
    return rgb_default(a, b);
  }
  if (Array.isArray(b)) {
    if (typeof b[0] !== "number") {
      return interpolateObjectArray_default(a, b);
    }
    return numberArray_default(a, b);
  }
  return number_default(a, b);
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/canvas/animation/easing.js
var easing_exports = {};
__export(easing_exports, {
  backIn: () => backIn,
  backInOut: () => backInOut,
  backOut: () => backOut,
  bounceIn: () => bounceIn,
  bounceInOut: () => bounceInOut,
  bounceOut: () => bounceOut,
  cubicIn: () => cubicIn,
  cubicInOut: () => cubicInOut,
  cubicOut: () => cubicOut,
  elasticIn: () => elasticIn,
  elasticInOut: () => elasticInOut,
  elasticOut: () => elasticOut,
  exponentialIn: () => exponentialIn,
  exponentialOut: () => exponentialOut,
  linear: () => linear2,
  quadraticIn: () => quadraticIn,
  quadraticInOut: () => quadraticInOut,
  quadraticOut: () => quadraticOut,
  quarticIn: () => quarticIn,
  quarticInOut: () => quarticInOut,
  quarticOut: () => quarticOut,
  quinticIn: () => quinticIn,
  quinticInOut: () => quinticInOut,
  quinticOut: () => quinticOut
});
function linear2(k) {
  return k;
}
function quadraticIn(k) {
  return k * k;
}
function quadraticOut(k) {
  return k * (2 - k);
}
function quadraticInOut(k) {
  if ((k *= 2) < 1) {
    return 0.5 * k * k;
  }
  return -0.5 * (--k * (k - 2) - 1);
}
function cubicIn(k) {
  return k * k * k;
}
function cubicOut(k) {
  return --k * k * k + 1;
}
function cubicInOut(k) {
  if ((k *= 2) < 1) {
    return 0.5 * k * k * k;
  }
  return 0.5 * ((k -= 2) * k * k + 2);
}
function quarticIn(k) {
  return k * k * k * k;
}
function quarticOut(k) {
  return 1 - k * k * k * k;
}
function quarticInOut(k) {
  if ((k *= 2) < 1) {
    return 0.5 * k * k * k * k;
  }
  return -0.5 * ((k -= 2) * k * k * k - 2);
}
function quinticIn(k) {
  return k * k * k * k * k;
}
function quinticOut(k) {
  return --k * k * k * k * k + 1;
}
function quinticInOut(k) {
  if ((k *= 2) < 1) {
    return 0.5 * k * k * k * k * k;
  }
  return 0.5 * ((k -= 2) * k * k * k * k + 2);
}
function exponentialIn(k) {
  return k === 0 ? 0 : Math.pow(1024, k - 1);
}
function exponentialOut(k) {
  return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
}
function elasticIn(k) {
  var s;
  var a = 0.1;
  var p = 0.4;
  if (k === 0)
    return 0;
  if (k === 1)
    return 1;
  if (!p) {
    p = 0.3;
  }
  if (!a || a < 1) {
    a = 1;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(1 / a);
  }
  return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
}
function elasticOut(k) {
  var s;
  var a = 0.1;
  var p = 0.4;
  if (k === 0)
    return 0;
  if (k === 1)
    return 1;
  if (!p) {
    p = 0.3;
  }
  if (!a || a < 1) {
    a = 1;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(1 / a);
  }
  return a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1;
}
function elasticInOut(k) {
  var s;
  var a = 0.1;
  var p = 0.4;
  if (k === 0)
    return 0;
  if (k === 1)
    return 1;
  if (!p) {
    p = 0.3;
  }
  if (!a || a < 1) {
    a = 1;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(1 / a);
  }
  if ((k *= 2) < 1) {
    return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
  }
  return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
}
function backIn(k) {
  var s = 1.70158;
  return k * k * ((s + 1) * k - s);
}
function backOut(k) {
  var s = 1.70158;
  return (k = k - 1) * k * ((s + 1) * k + s) + 1;
}
function backInOut(k) {
  var s = 1.70158 * 1.525;
  if ((k *= 2) < 1) {
    return 0.5 * (k * k * ((s + 1) * k - s));
  }
  return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
}
function bounceIn(k) {
  return 1 - bounceOut(1 - k);
}
function bounceOut(k) {
  if ((k /= 1) < 1 / 2.75) {
    return 7.5625 * k * k;
  } else if (k < 2 / 2.75) {
    return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
  } else if (k < 2.5 / 2.75) {
    return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
  }
  return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
}
function bounceInOut(k) {
  if (k < 0.5) {
    return bounceIn(k * 2) * 0.5;
  }
  return bounceOut(k * 2 - 1) * 0.5 + 0.5;
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/canvas/animation/animator.js
var Animator = function() {
  function Animator2(element, animation) {
    _classCallCheck(this, Animator2);
    this.isClip = false;
    this.end = false;
    this.element = element;
    this.animation = animation;
    var _animation$property = animation.property, property = _animation$property === void 0 ? [] : _animation$property, easing = animation.easing, duration = animation.duration, _animation$delay = animation.delay, delay = _animation$delay === void 0 ? 0 : _animation$delay, start2 = animation.start, end2 = animation.end, onFrame = animation.onFrame, isClip = animation.isClip;
    var interpolates = property.map(function(name) {
      if (is_string_default(name)) {
        return interpolate_default(start2[name], end2[name]);
      }
      if (name.interpolate) {
        return name.interpolate(start2, end2);
      }
    });
    this.easing = typeof easing === "function" ? easing : easing_exports[easing] || linear2;
    this.property = property;
    this.interpolates = interpolates;
    this.duration = duration;
    this.delay = delay;
    this.onFrame = onFrame;
    this.totalDuration = duration + delay;
    this.isClip = isClip;
    this.update(0, 0);
  }
  _createClass(Animator2, [{
    key: "to",
    value: function to(time) {
      var duration = this.duration, delay = this.delay, totalDuration = this.totalDuration, easing = this.easing, end2 = this.end;
      if (end2) {
        return;
      }
      if (time <= delay || !duration) {
        return;
      }
      var t = time >= totalDuration ? 1 : (time - delay) / duration;
      this.update(easing(t), time);
      if (t === 1) {
        this.onEnd();
      }
    }
  }, {
    key: "update",
    value: function update(t, time) {
      var element = this.element, interpolates = this.interpolates, property = this.property, onFrame = this.onFrame;
      var attrs = {};
      for (var i = property.length - 1; i >= 0; i--) {
        var name = property[i];
        if (is_string_default(name)) {
          attrs[name] = interpolates[i](t);
        } else {
          attrs[name.name] = interpolates[i](t);
        }
      }
      if (onFrame) {
        attrs = _objectSpread2(_objectSpread2({}, attrs), this.onFrame(t, time));
      }
      element.attr(attrs);
    }
  }, {
    key: "onEnd",
    value: function onEnd() {
      var animation = this.animation, isClip = this.isClip, element = this.element;
      var onEnd2 = animation.onEnd;
      onEnd2 && onEnd2.call(this);
      if (isClip) {
        element.remove(true);
      }
      if (element._attrs.status === elementStatus_exports.ELEMENT_DELETE) {
        element.remove(true);
      }
      element.set("animation", null);
      this.end = true;
    }
  }]);
  return Animator2;
}();
var animator_default = Animator;

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/canvas/animation/index.js
function eachElement(element, fn) {
  fn(element);
  var children = element.get("children");
  if (children && children.length) {
    for (var i = 0, len = children.length; i < len; i++) {
      var child = children[i];
      eachElement(child, fn);
    }
  }
}
var Animation = function() {
  function Animation2(canvas) {
    _classCallCheck(this, Animation2);
    this.timeline = new timelime_default();
    this.canvas = canvas;
  }
  _createClass(Animation2, [{
    key: "createAnimator",
    value: function createAnimator(element, animation) {
      var duration = animation.duration, property = animation.property, onFrame = animation.onFrame;
      if (!duration || (!property || !property.length) && !onFrame) {
        return;
      }
      return new animator_default(element, animation);
    }
  }, {
    key: "play",
    value: function play(container, onAnimationEnd) {
      var _this = this;
      var canvas = this.canvas;
      var animators = [];
      var maxDuration = 0;
      var deleteElements = [];
      eachElement(container, function(element2) {
        var _element$_attrs = element2._attrs, animation = _element$_attrs.animation, status = _element$_attrs.status;
        if (!animation) {
          if (status === elementStatus_exports.ELEMENT_DELETE) {
            deleteElements.push(element2);
          }
          return;
        }
        var animator = _this.createAnimator(element2, animation);
        if (animator) {
          maxDuration = Math.max(maxDuration, animator.totalDuration);
          animators.push(animator);
        }
        var clip = animation.clip;
        if (clip) {
          clip.isClip = true;
          var clipElement = clip.element;
          var _animator = _this.createAnimator(clipElement, clip);
          if (_animator) {
            maxDuration = Math.max(maxDuration, _animator.totalDuration);
            element2.attr("clip", clipElement);
            animators.push(_animator);
          }
        }
      });
      for (var i = 0, len = deleteElements.length; i < len; i++) {
        var element = deleteElements[i];
        var children = element._attrs.children;
        if (!children || !children.length) {
          element.remove(true);
        }
      }
      this.timeline.play(maxDuration, function(time) {
        for (var _i = 0, _len = animators.length; _i < _len; _i++) {
          var animator = animators[_i];
          animator.to(time);
        }
        if (time < maxDuration) {
          canvas.draw();
        }
      }, function() {
        for (var _i2 = 0, _len2 = deleteElements.length; _i2 < _len2; _i2++) {
          var _element = deleteElements[_i2];
          _element.remove(true);
        }
        canvas.draw();
        onAnimationEnd && onAnimationEnd();
      });
    }
    // 直接跳到动画最终态
  }, {
    key: "end",
    value: function end2() {
      this.timeline.end();
    }
  }, {
    key: "abort",
    value: function abort() {
      this.timeline.abort();
    }
  }]);
  return Animation2;
}();
var animation_default2 = Animation;

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/canvas/index.js
function measureText3(canvas, px2hd2) {
  return function(text, font) {
    var _ref = font || {}, fontSize = _ref.fontSize, fontFamily = _ref.fontFamily, fontStyle = _ref.fontStyle, fontWeight = _ref.fontWeight, fontVariant = _ref.fontVariant;
    var shape = canvas.addShape("text", {
      attrs: {
        x: 0,
        y: 0,
        fontSize: px2hd2(fontSize),
        fontFamily,
        fontStyle,
        fontWeight,
        fontVariant,
        text
      }
    });
    var _shape$getBBox = shape.getBBox(), width = _shape$getBBox.width, height = _shape$getBBox.height;
    shape.remove(true);
    return {
      width,
      height
    };
  };
}
var Canvas2 = function(_Component) {
  _inherits(Canvas3, _Component);
  var _super = _createSuper(Canvas3);
  function Canvas3(props) {
    var _this;
    _classCallCheck(this, Canvas3);
    _this = _super.call(this, props);
    var context = props.context, pixelRatio = props.pixelRatio, width = props.width, height = props.height, _props$animate = props.animate, animate = _props$animate === void 0 ? true : _props$animate, customPx2hd = props.px2hd, customTheme = props.theme, customStyle = props.style, createImage = props.createImage, landscape = props.landscape;
    var px2hd2 = is_function_default(customPx2hd) ? batch2hd(customPx2hd) : px2hd;
    var theme = px2hd2(deep_mix_default({}, theme_default, customTheme));
    var canvas = createCanvas({
      context,
      pixelRatio,
      fontFamily: theme.fontFamily,
      width,
      height,
      createImage,
      landscape
    });
    var updater = createUpdater(_assertThisInitialized(_this));
    var componentContext = {
      root: _assertThisInitialized(_this),
      canvas,
      theme,
      px2hd: px2hd2,
      measureText: measureText3(canvas, px2hd2)
    };
    var animation = new animation_default2(canvas);
    canvas.on("afterdraw", function() {
      var onAfterDraw = _this.props.onAfterDraw;
      onAfterDraw && onAfterDraw();
    });
    _this.canvas = canvas;
    _this.container = canvas;
    _this.context = componentContext;
    _this.updater = updater;
    _this.animate = animate;
    _this.animation = animation;
    _this.theme = theme;
    _this._ee = new esm_default();
    _this.updateLayout(props);
    return _this;
  }
  _createClass(Canvas3, [{
    key: "renderComponents",
    value: function renderComponents(components) {
      if (!components || !components.length) {
        return;
      }
      renderComponent(components);
      this.draw();
    }
  }, {
    key: "update",
    value: function update(nextProps) {
      var props = this.props;
      if (equal_default(nextProps, props)) {
        return;
      }
      this.props = nextProps;
      this.render();
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      var _this$canvas$_attrs = this.canvas._attrs, canvasWidth = _this$canvas$_attrs.width, canvasHeight = _this$canvas$_attrs.height;
      this.canvas.changeSize(width || canvasWidth, height || canvasHeight);
      this.updateLayout(_objectSpread2(_objectSpread2({}, this.props), {}, {
        width,
        height
      }));
      this.render();
    }
  }, {
    key: "updateLayout",
    value: function updateLayout(props) {
      var _this$canvas$_attrs2 = this.canvas._attrs, canvasWidth = _this$canvas$_attrs2.width, canvasHeight = _this$canvas$_attrs2.height;
      var style = this.context.px2hd(_objectSpread2({
        left: 0,
        top: 0,
        width: (props === null || props === void 0 ? void 0 : props.width) || canvasWidth,
        height: (props === null || props === void 0 ? void 0 : props.height) || canvasHeight,
        padding: this.theme.padding
      }, props.style));
      this.layout = layout_default.fromStyle(style);
      this.context = _objectSpread2(_objectSpread2({}, this.context), {}, {
        left: this.layout.left,
        top: this.layout.top,
        width: this.layout.width,
        height: this.layout.height
      });
    }
  }, {
    key: "draw",
    value: function draw() {
      var canvas = this.canvas, animate = this.animate;
      if (animate === false) {
        canvas.draw();
        return;
      }
      this.play();
    }
  }, {
    key: "play",
    value: function play() {
      var _this2 = this;
      var canvas = this.canvas, animation = this.animation;
      animation.abort();
      animation.play(canvas, function() {
        _this2.emit("animationEnd");
      });
    }
  }, {
    key: "render",
    value: function render2() {
      var lastChildren = this.children, props = this.props;
      var nextChildren = props.children;
      renderChildren(this, nextChildren, lastChildren);
      this.draw();
      return null;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var canvas = this.canvas, children = this.children;
      destroyElement(children);
      canvas.destroy();
    }
  }, {
    key: "on",
    value: function on(type, listener) {
      this._ee.on(type, listener);
    }
  }, {
    key: "emit",
    value: function emit(type, event) {
      this._ee.emit(type, event);
    }
  }, {
    key: "off",
    value: function off(type, listener) {
      this._ee.off(type, listener);
    }
  }]);
  return Canvas3;
}(component_default);
var canvas_default2 = Canvas2;

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/controller/layout.js
var LayoutController = function() {
  function LayoutController2() {
    _classCallCheck(this, LayoutController2);
  }
  _createClass(LayoutController2, [{
    key: "getRectRange",
    value: function getRectRange(style) {
      var left = style.left, top = style.top, width = style.width, height = style.height, padding = style.padding;
      var _padding = _slicedToArray(padding, 4), paddingTop = _padding[0], paddingRight = _padding[1], paddingBottom = _padding[2], paddingLeft = _padding[3];
      return {
        left: left + paddingLeft,
        top: top + paddingTop,
        width: width - paddingLeft - paddingRight,
        height: height - paddingTop - paddingBottom
      };
    }
  }, {
    key: "create",
    value: function create3(style) {
      var rectRange = this.getRectRange(style);
      var layout = new layout_default(rectRange);
      this.layout = layout;
      return layout;
    }
  }, {
    key: "update",
    value: function update(style) {
      var rectRange = this.getRectRange(style);
      var layout = this.layout;
      layout.update(rectRange);
      return layout;
    }
  }]);
  return LayoutController2;
}();
var layout_default2 = LayoutController;

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/coord/base.js
function transposedRect(_ref) {
  var xMin = _ref.xMin, xMax = _ref.xMax, yMin = _ref.yMin, yMax = _ref.yMax;
  return {
    xMin: yMin,
    xMax: yMax,
    yMin: xMin,
    yMax: xMax
  };
}
function _convertRect(_ref2) {
  var x = _ref2.x, y = _ref2.y, size2 = _ref2.size, y0 = _ref2.y0;
  var xMin;
  var xMax;
  if (is_array_default(x)) {
    xMin = x[0];
    xMax = x[1];
  } else {
    xMin = x - size2 / 2;
    xMax = x + size2 / 2;
  }
  var yMin;
  var yMax;
  if (is_array_default(y)) {
    yMin = y[0];
    yMax = y[1];
  } else {
    yMin = Math.min(y0, y);
    yMax = Math.max(y0, y);
  }
  return {
    xMin,
    xMax,
    yMin,
    yMax
  };
}
var Base = function(_Layout) {
  _inherits(Base3, _Layout);
  var _super = _createSuper(Base3);
  function Base3(option) {
    var _this;
    _classCallCheck(this, Base3);
    _this = _super.call(this, option);
    _this.transposed = false;
    _this.x = [0, 1];
    _this.y = [0, 1];
    _this.update(option);
    return _this;
  }
  _createClass(Base3, [{
    key: "update",
    value: function update(option) {
      _get(_getPrototypeOf(Base3.prototype), "update", this).call(this, option);
      var left = this.left, top = this.top, width = this.width, height = this.height;
      this.center = {
        x: left + width / 2,
        y: top + height / 2
      };
      return this;
    }
    // 是循环， 比如极坐标是以 2π 循环的
  }, {
    key: "isCyclic",
    value: function isCyclic() {
      return false;
    }
  }, {
    key: "_zoomVal",
    value: function _zoomVal(val, func) {
      return is_array_default(val) ? val.map(function(v) {
        return func(v);
      }) : func(val);
    }
    /**
     * 把归一后的值映射到对应的定义域
     * @param point
     */
  }, {
    key: "convert",
    value: function convert(point) {
      var transposed = this.transposed, x = this.x, y = this.y;
      var xDim = transposed ? "y" : "x";
      var yDim = transposed ? "x" : "y";
      var pointX = point[xDim];
      var pointY = point[yDim];
      if (pointX < 0 || pointX > 1 || pointY < 0 || pointY > 1) {
        return {
          x: NaN,
          y: NaN
        };
      }
      return {
        x: this._zoomVal(point[xDim], function(v) {
          return x[0] + (x[1] - x[0]) * v;
        }),
        y: this._zoomVal(point[yDim], function(v) {
          return y[0] + (y[1] - y[0]) * v;
        })
      };
    }
    /**
     * convert 的反处理，把定义域的值，反处理到归一的值
     */
  }, {
    key: "invert",
    value: function invert(point) {
      var _ref3;
      var transposed = this.transposed, x = this.x, y = this.y;
      var xDim = transposed ? "y" : "x";
      var yDim = transposed ? "x" : "y";
      return _ref3 = {}, _defineProperty(_ref3, xDim, this._zoomVal(point.x, function(v) {
        return (v - x[0]) / (x[1] - x[0]);
      })), _defineProperty(_ref3, yDim, this._zoomVal(point.y, function(v) {
        return (v - y[0]) / (y[1] - y[0]);
      })), _ref3;
    }
    /**
     * 把归一化的值映射到 canvas 的坐标点
     * @param point
     * @returns
     */
  }, {
    key: "convertPoint",
    value: function convertPoint(point) {
      return this.convert(point);
    }
    /**
     * 把canvas坐标的点位映射回归一的值
     */
  }, {
    key: "invertPoint",
    value: function invertPoint(point) {
      return this.invert(point);
    }
    // 将标准坐标系下的矩形绘制关键点映射成实际绘制的坐标点
  }, {
    key: "convertRect",
    value: function convertRect(rectPoint) {
      var xRange = this.x, yRange = this.y, transposed = this.transposed;
      var _xRange = _slicedToArray(xRange, 2), xStart = _xRange[0], xEnd = _xRange[1];
      var _yRange = _slicedToArray(yRange, 2), yStart = _yRange[0], yEnd = _yRange[1];
      var rect = _convertRect(rectPoint);
      var _ref4 = transposed ? transposedRect(rect) : rect, xMin = _ref4.xMin, xMax = _ref4.xMax, yMin = _ref4.yMin, yMax = _ref4.yMax;
      var x0 = xStart + (xEnd - xStart) * xMin;
      var x1 = xStart + (xEnd - xStart) * xMax;
      var y0 = yStart + (yEnd - yStart) * yMin;
      var y1 = yStart + (yEnd - yStart) * yMax;
      return {
        xMin: Math.min(x0, x1),
        xMax: Math.max(x0, x1),
        yMin: Math.min(y0, y1),
        yMax: Math.max(y0, y1)
      };
    }
    // 将已经映射好的矩形绘制关键点转换成实际绘制的坐标点
  }, {
    key: "transformToRect",
    value: function transformToRect(rectPoint) {
      var x = rectPoint.x, y = rectPoint.y, y0 = rectPoint.y0, size2 = rectPoint.size;
      var coordOrigin = this.convertPoint({
        x: 0,
        y: y0
      });
      var transposed = this.transposed;
      var _rectPoint = {
        size: size2,
        x: transposed ? y : x,
        y: transposed ? x : y,
        y0: transposed ? coordOrigin.x : coordOrigin.y
      };
      var rect = _convertRect(_rectPoint);
      var _ref5 = transposed ? transposedRect(rect) : rect, xMin = _ref5.xMin, xMax = _ref5.xMax, yMin = _ref5.yMin, yMax = _ref5.yMax;
      return {
        xMin,
        xMax,
        yMin,
        yMax
      };
    }
  }]);
  return Base3;
}(layout_default);
var base_default = Base;

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/coord/rect.js
var Rect3 = function(_Base) {
  _inherits(Rect4, _Base);
  var _super = _createSuper(Rect4);
  function Rect4() {
    var _this;
    _classCallCheck(this, Rect4);
    _this = _super.apply(this, arguments);
    _this.type = "rect";
    return _this;
  }
  _createClass(Rect4, [{
    key: "update",
    value: function update(option) {
      _get(_getPrototypeOf(Rect4.prototype), "update", this).call(this, option);
      var left = this.left, top = this.top, right = this.right, bottom = this.bottom;
      var x = [left, right];
      var y = [bottom, top];
      this.x = x;
      this.y = y;
      return this;
    }
  }]);
  return Rect4;
}(base_default);
var rect_default4 = Rect3;

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/coord/polar.js
var Polar = function(_Base) {
  _inherits(Polar2, _Base);
  var _super = _createSuper(Polar2);
  function Polar2() {
    var _this;
    _classCallCheck(this, Polar2);
    _this = _super.apply(this, arguments);
    _this.type = "polar";
    _this.isPolar = true;
    return _this;
  }
  _createClass(Polar2, [{
    key: "update",
    value: function update(option) {
      _get(_getPrototypeOf(Polar2.prototype), "update", this).call(this, option);
      if (!this.option) {
        this.option = option;
      }
      var _this$option = this.option, _this$option$radius = _this$option.radius, radiusRatio = _this$option$radius === void 0 ? 1 : _this$option$radius, _this$option$innerRad = _this$option.innerRadius, innerRadiusRatio = _this$option$innerRad === void 0 ? 0 : _this$option$innerRad;
      var width = this.width, height = this.height, _this$startAngle = this.startAngle, startAngle = _this$startAngle === void 0 ? -Math.PI / 2 : _this$startAngle, _this$endAngle = this.endAngle, endAngle = _this$endAngle === void 0 ? Math.PI * 3 / 2 : _this$endAngle;
      var radius = radiusRatio * (Math.min(width, height) / 2);
      var x = [startAngle, endAngle];
      var y = [innerRadiusRatio * radius, radius];
      this.x = x;
      this.y = y;
      this.startAngle = startAngle;
      this.endAngle = endAngle;
      this.radius = radius;
      this.innnerRadius = innerRadiusRatio * radius;
      return this;
    }
  }, {
    key: "isCyclic",
    value: function isCyclic() {
      var startAngle = this.startAngle, endAngle = this.endAngle;
      if (endAngle - startAngle < Math.PI * 2) {
        return false;
      }
      return true;
    }
  }, {
    key: "convertPoint",
    value: function convertPoint(point) {
      var center = this.center, transposed = this.transposed, x = this.x, y = this.y;
      var xDim = transposed ? "y" : "x";
      var yDim = transposed ? "x" : "y";
      var _x = _slicedToArray(x, 2), xStart = _x[0], xEnd = _x[1];
      var _y = _slicedToArray(y, 2), yStart = _y[0], yEnd = _y[1];
      var angle2 = xStart + (xEnd - xStart) * point[xDim];
      var radius = yStart + (yEnd - yStart) * point[yDim];
      return {
        x: center.x + Math.cos(angle2) * radius,
        y: center.y + Math.sin(angle2) * radius
      };
    }
  }, {
    key: "invertPoint",
    value: function invertPoint(point) {
      var center = this.center, transposed = this.transposed, x = this.x, y = this.y;
      var xDim = transposed ? "y" : "x";
      var yDim = transposed ? "x" : "y";
      var _x2 = _slicedToArray(x, 2), xStart = _x2[0], xEnd = _x2[1];
      var _y2 = _slicedToArray(y, 2), yStart = _y2[0], yEnd = _y2[1];
      var m = [1, 0, 0, 1, 0, 0];
      matrix_default.rotate(m, m, xStart);
      var startV = [1, 0];
      vector2_default.transformMat2d(startV, startV, m);
      startV = [startV[0], startV[1]];
      var pointV = [point.x - center.x, point.y - center.y];
      if (vector2_default.zero(pointV)) {
        return {
          x: 0,
          y: 0
        };
      }
      var theta = vector2_default.angleTo(startV, pointV, xEnd < xStart);
      if (Math.abs(theta - Math.PI * 2) < 1e-3) {
        theta = 0;
      }
      var l = vector2_default.length(pointV);
      var percentX = theta / (xEnd - xStart);
      percentX = xEnd - xStart > 0 ? percentX : -percentX;
      var percentY = (l - yStart) / (yEnd - yStart);
      var rst = {};
      rst[xDim] = percentX;
      rst[yDim] = percentY;
      return rst;
    }
  }]);
  return Polar2;
}(base_default);
var polar_default = Polar;

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/controller/coord.js
var coordMap = {
  rect: rect_default4,
  polar: polar_default
};
var coordController = function() {
  function coordController2() {
    _classCallCheck(this, coordController2);
  }
  _createClass(coordController2, [{
    key: "getOption",
    value: function getOption(cfg) {
      if (is_string_default(cfg)) {
        return {
          type: coordMap[cfg] || rect_default4
        };
      }
      if (is_function_default(cfg)) {
        return {
          type: cfg
        };
      }
      var _ref = cfg || {}, type = _ref.type;
      return _objectSpread2(_objectSpread2({}, cfg), {}, {
        // 默认直角坐标系
        type: is_function_default(type) ? type : coordMap[type] || rect_default4
      });
    }
  }, {
    key: "create",
    value: function create3(cfg, layout) {
      var option = this.getOption(cfg);
      var type = option.type;
      var coord = new type(_objectSpread2(_objectSpread2({}, option), layout));
      this.coord = coord;
      return coord;
    }
  }, {
    key: "updateLayout",
    value: function updateLayout(layout) {
      this.coord.update(layout);
    }
  }, {
    key: "update",
    value: function update() {
    }
  }]);
  return coordController2;
}();
var coord_default = coordController;

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/tick-method/register.js
var methodCache = {};
function getTickMethod(key) {
  return methodCache[key];
}
function registerTickMethod(key, method) {
  methodCache[key] = method;
}

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/base.js
var Scale = (
  /** @class */
  function() {
    function Scale2(cfg) {
      this.type = "base";
      this.isCategory = false;
      this.isLinear = false;
      this.isContinuous = false;
      this.isIdentity = false;
      this.values = [];
      this.range = [0, 1];
      this.ticks = [];
      this.__cfg__ = cfg;
      this.initCfg();
      this.init();
    }
    Scale2.prototype.translate = function(v) {
      return v;
    };
    Scale2.prototype.change = function(cfg) {
      mix(this.__cfg__, cfg);
      this.init();
    };
    Scale2.prototype.clone = function() {
      return this.constructor(this.__cfg__);
    };
    Scale2.prototype.getTicks = function() {
      var _this = this;
      return map_default(this.ticks, function(tick, idx) {
        if (is_object_default(tick)) {
          return tick;
        }
        return {
          text: _this.getText(tick, idx),
          tickValue: tick,
          value: _this.scale(tick)
        };
      });
    };
    Scale2.prototype.getText = function(value, key) {
      var formatter = this.formatter;
      var res = formatter ? formatter(value, key) : value;
      if (is_nil_default(res) || !is_function_default(res.toString)) {
        return "";
      }
      return res.toString();
    };
    Scale2.prototype.getConfig = function(key) {
      return this.__cfg__[key];
    };
    Scale2.prototype.init = function() {
      mix(this, this.__cfg__);
      this.setDomain();
      if (is_empty_default(this.getConfig("ticks"))) {
        this.ticks = this.calculateTicks();
      }
    };
    Scale2.prototype.initCfg = function() {
    };
    Scale2.prototype.setDomain = function() {
    };
    Scale2.prototype.calculateTicks = function() {
      var tickMethod = this.tickMethod;
      var ticks = [];
      if (is_string_default(tickMethod)) {
        var method = getTickMethod(tickMethod);
        if (!method) {
          throw new Error("There is no method to to calculate ticks!");
        }
        ticks = method(this);
      } else if (is_function_default(tickMethod)) {
        ticks = tickMethod(this);
      }
      return ticks;
    };
    Scale2.prototype.rangeMin = function() {
      return this.range[0];
    };
    Scale2.prototype.rangeMax = function() {
      return this.range[1];
    };
    Scale2.prototype.calcPercent = function(value, min2, max2) {
      if (is_number_default(value)) {
        return (value - min2) / (max2 - min2);
      }
      return NaN;
    };
    Scale2.prototype.calcValue = function(percent, min2, max2) {
      return min2 + percent * (max2 - min2);
    };
    return Scale2;
  }()
);
var base_default2 = Scale;

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/category/base.js
var Category = (
  /** @class */
  function(_super) {
    __extends(Category4, _super);
    function Category4() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = "cat";
      _this.isCategory = true;
      return _this;
    }
    Category4.prototype.buildIndexMap = function() {
      if (!this.translateIndexMap) {
        this.translateIndexMap = /* @__PURE__ */ new Map();
        for (var i = 0; i < this.values.length; i++) {
          this.translateIndexMap.set(this.values[i], i);
        }
      }
    };
    Category4.prototype.translate = function(value) {
      this.buildIndexMap();
      var idx = this.translateIndexMap.get(value);
      if (idx === void 0) {
        idx = is_number_default(value) ? value : NaN;
      }
      return idx;
    };
    Category4.prototype.scale = function(value) {
      var order = this.translate(value);
      var percent = this.calcPercent(order, this.min, this.max);
      return this.calcValue(percent, this.rangeMin(), this.rangeMax());
    };
    Category4.prototype.invert = function(scaledValue) {
      var domainRange = this.max - this.min;
      var percent = this.calcPercent(scaledValue, this.rangeMin(), this.rangeMax());
      var idx = Math.round(domainRange * percent) + this.min;
      if (idx < this.min || idx > this.max) {
        return NaN;
      }
      return this.values[idx];
    };
    Category4.prototype.getText = function(value) {
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      var v = value;
      if (is_number_default(value) && !this.values.includes(value)) {
        v = this.values[v];
      }
      return _super.prototype.getText.apply(this, __spreadArrays([v], args));
    };
    Category4.prototype.initCfg = function() {
      this.tickMethod = "cat";
    };
    Category4.prototype.setDomain = function() {
      if (is_nil_default(this.getConfig("min"))) {
        this.min = 0;
      }
      if (is_nil_default(this.getConfig("max"))) {
        var size2 = this.values.length;
        this.max = size2 > 1 ? size2 - 1 : size2;
      }
      if (this.translateIndexMap) {
        this.translateIndexMap = void 0;
      }
    };
    return Category4;
  }(base_default2)
);
var base_default3 = Category;

// node_modules/.pnpm/fecha@4.2.3/node_modules/fecha/lib/fecha.js
var fecha_exports = {};
__export(fecha_exports, {
  assign: () => assign,
  default: () => fecha_default,
  defaultI18n: () => defaultI18n,
  format: () => format,
  parse: () => parse,
  setGlobalDateI18n: () => setGlobalDateI18n,
  setGlobalDateMasks: () => setGlobalDateMasks
});
var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
var twoDigitsOptional = "\\d\\d?";
var twoDigits = "\\d\\d";
var threeDigits = "\\d{3}";
var fourDigits = "\\d{4}";
var word = "[^\\s]+";
var literal = /\[([^]*?)\]/gm;
function shorten(arr, sLen) {
  var newArr = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    newArr.push(arr[i].substr(0, sLen));
  }
  return newArr;
}
var monthUpdate = function(arrName) {
  return function(v, i18n) {
    var lowerCaseArr = i18n[arrName].map(function(v2) {
      return v2.toLowerCase();
    });
    var index = lowerCaseArr.indexOf(v.toLowerCase());
    if (index > -1) {
      return index;
    }
    return null;
  };
};
function assign(origObj) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
    var obj = args_1[_a];
    for (var key in obj) {
      origObj[key] = obj[key];
    }
  }
  return origObj;
}
var dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var monthNamesShort = shorten(monthNames, 3);
var dayNamesShort = shorten(dayNames, 3);
var defaultI18n = {
  dayNamesShort,
  dayNames,
  monthNamesShort,
  monthNames,
  amPm: ["am", "pm"],
  DoFn: function(dayOfMonth) {
    return dayOfMonth + ["th", "st", "nd", "rd"][dayOfMonth % 10 > 3 ? 0 : (dayOfMonth - dayOfMonth % 10 !== 10 ? 1 : 0) * dayOfMonth % 10];
  }
};
var globalI18n = assign({}, defaultI18n);
var setGlobalDateI18n = function(i18n) {
  return globalI18n = assign(globalI18n, i18n);
};
var regexEscape = function(str) {
  return str.replace(/[|\\{()[^$+*?.-]/g, "\\$&");
};
var pad = function(val, len) {
  if (len === void 0) {
    len = 2;
  }
  val = String(val);
  while (val.length < len) {
    val = "0" + val;
  }
  return val;
};
var formatFlags = {
  D: function(dateObj) {
    return String(dateObj.getDate());
  },
  DD: function(dateObj) {
    return pad(dateObj.getDate());
  },
  Do: function(dateObj, i18n) {
    return i18n.DoFn(dateObj.getDate());
  },
  d: function(dateObj) {
    return String(dateObj.getDay());
  },
  dd: function(dateObj) {
    return pad(dateObj.getDay());
  },
  ddd: function(dateObj, i18n) {
    return i18n.dayNamesShort[dateObj.getDay()];
  },
  dddd: function(dateObj, i18n) {
    return i18n.dayNames[dateObj.getDay()];
  },
  M: function(dateObj) {
    return String(dateObj.getMonth() + 1);
  },
  MM: function(dateObj) {
    return pad(dateObj.getMonth() + 1);
  },
  MMM: function(dateObj, i18n) {
    return i18n.monthNamesShort[dateObj.getMonth()];
  },
  MMMM: function(dateObj, i18n) {
    return i18n.monthNames[dateObj.getMonth()];
  },
  YY: function(dateObj) {
    return pad(String(dateObj.getFullYear()), 4).substr(2);
  },
  YYYY: function(dateObj) {
    return pad(dateObj.getFullYear(), 4);
  },
  h: function(dateObj) {
    return String(dateObj.getHours() % 12 || 12);
  },
  hh: function(dateObj) {
    return pad(dateObj.getHours() % 12 || 12);
  },
  H: function(dateObj) {
    return String(dateObj.getHours());
  },
  HH: function(dateObj) {
    return pad(dateObj.getHours());
  },
  m: function(dateObj) {
    return String(dateObj.getMinutes());
  },
  mm: function(dateObj) {
    return pad(dateObj.getMinutes());
  },
  s: function(dateObj) {
    return String(dateObj.getSeconds());
  },
  ss: function(dateObj) {
    return pad(dateObj.getSeconds());
  },
  S: function(dateObj) {
    return String(Math.round(dateObj.getMilliseconds() / 100));
  },
  SS: function(dateObj) {
    return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
  },
  SSS: function(dateObj) {
    return pad(dateObj.getMilliseconds(), 3);
  },
  a: function(dateObj, i18n) {
    return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
  },
  A: function(dateObj, i18n) {
    return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
  },
  ZZ: function(dateObj) {
    var offset = dateObj.getTimezoneOffset();
    return (offset > 0 ? "-" : "+") + pad(Math.floor(Math.abs(offset) / 60) * 100 + Math.abs(offset) % 60, 4);
  },
  Z: function(dateObj) {
    var offset = dateObj.getTimezoneOffset();
    return (offset > 0 ? "-" : "+") + pad(Math.floor(Math.abs(offset) / 60), 2) + ":" + pad(Math.abs(offset) % 60, 2);
  }
};
var monthParse = function(v) {
  return +v - 1;
};
var emptyDigits = [null, twoDigitsOptional];
var emptyWord = [null, word];
var amPm = [
  "isPm",
  word,
  function(v, i18n) {
    var val = v.toLowerCase();
    if (val === i18n.amPm[0]) {
      return 0;
    } else if (val === i18n.amPm[1]) {
      return 1;
    }
    return null;
  }
];
var timezoneOffset = [
  "timezoneOffset",
  "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",
  function(v) {
    var parts = (v + "").match(/([+-]|\d\d)/gi);
    if (parts) {
      var minutes = +parts[1] * 60 + parseInt(parts[2], 10);
      return parts[0] === "+" ? minutes : -minutes;
    }
    return 0;
  }
];
var parseFlags = {
  D: ["day", twoDigitsOptional],
  DD: ["day", twoDigits],
  Do: ["day", twoDigitsOptional + word, function(v) {
    return parseInt(v, 10);
  }],
  M: ["month", twoDigitsOptional, monthParse],
  MM: ["month", twoDigits, monthParse],
  YY: [
    "year",
    twoDigits,
    function(v) {
      var now = new Date();
      var cent = +("" + now.getFullYear()).substr(0, 2);
      return +("" + (+v > 68 ? cent - 1 : cent) + v);
    }
  ],
  h: ["hour", twoDigitsOptional, void 0, "isPm"],
  hh: ["hour", twoDigits, void 0, "isPm"],
  H: ["hour", twoDigitsOptional],
  HH: ["hour", twoDigits],
  m: ["minute", twoDigitsOptional],
  mm: ["minute", twoDigits],
  s: ["second", twoDigitsOptional],
  ss: ["second", twoDigits],
  YYYY: ["year", fourDigits],
  S: ["millisecond", "\\d", function(v) {
    return +v * 100;
  }],
  SS: ["millisecond", twoDigits, function(v) {
    return +v * 10;
  }],
  SSS: ["millisecond", threeDigits],
  d: emptyDigits,
  dd: emptyDigits,
  ddd: emptyWord,
  dddd: emptyWord,
  MMM: ["month", word, monthUpdate("monthNamesShort")],
  MMMM: ["month", word, monthUpdate("monthNames")],
  a: amPm,
  A: amPm,
  ZZ: timezoneOffset,
  Z: timezoneOffset
};
var globalMasks = {
  default: "ddd MMM DD YYYY HH:mm:ss",
  shortDate: "M/D/YY",
  mediumDate: "MMM D, YYYY",
  longDate: "MMMM D, YYYY",
  fullDate: "dddd, MMMM D, YYYY",
  isoDate: "YYYY-MM-DD",
  isoDateTime: "YYYY-MM-DDTHH:mm:ssZ",
  shortTime: "HH:mm",
  mediumTime: "HH:mm:ss",
  longTime: "HH:mm:ss.SSS"
};
var setGlobalDateMasks = function(masks) {
  return assign(globalMasks, masks);
};
var format = function(dateObj, mask, i18n) {
  if (mask === void 0) {
    mask = globalMasks["default"];
  }
  if (i18n === void 0) {
    i18n = {};
  }
  if (typeof dateObj === "number") {
    dateObj = new Date(dateObj);
  }
  if (Object.prototype.toString.call(dateObj) !== "[object Date]" || isNaN(dateObj.getTime())) {
    throw new Error("Invalid Date pass to format");
  }
  mask = globalMasks[mask] || mask;
  var literals = [];
  mask = mask.replace(literal, function($0, $1) {
    literals.push($1);
    return "@@@";
  });
  var combinedI18nSettings = assign(assign({}, globalI18n), i18n);
  mask = mask.replace(token, function($0) {
    return formatFlags[$0](dateObj, combinedI18nSettings);
  });
  return mask.replace(/@@@/g, function() {
    return literals.shift();
  });
};
function parse(dateStr, format2, i18n) {
  if (i18n === void 0) {
    i18n = {};
  }
  if (typeof format2 !== "string") {
    throw new Error("Invalid format in fecha parse");
  }
  format2 = globalMasks[format2] || format2;
  if (dateStr.length > 1e3) {
    return null;
  }
  var today = new Date();
  var dateInfo = {
    year: today.getFullYear(),
    month: 0,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    isPm: null,
    timezoneOffset: null
  };
  var parseInfo = [];
  var literals = [];
  var newFormat = format2.replace(literal, function($0, $1) {
    literals.push(regexEscape($1));
    return "@@@";
  });
  var specifiedFields = {};
  var requiredFields = {};
  newFormat = regexEscape(newFormat).replace(token, function($0) {
    var info = parseFlags[$0];
    var field2 = info[0], regex = info[1], requiredField = info[3];
    if (specifiedFields[field2]) {
      throw new Error("Invalid format. " + field2 + " specified twice in format");
    }
    specifiedFields[field2] = true;
    if (requiredField) {
      requiredFields[requiredField] = true;
    }
    parseInfo.push(info);
    return "(" + regex + ")";
  });
  Object.keys(requiredFields).forEach(function(field2) {
    if (!specifiedFields[field2]) {
      throw new Error("Invalid format. " + field2 + " is required in specified format");
    }
  });
  newFormat = newFormat.replace(/@@@/g, function() {
    return literals.shift();
  });
  var matches = dateStr.match(new RegExp(newFormat, "i"));
  if (!matches) {
    return null;
  }
  var combinedI18nSettings = assign(assign({}, globalI18n), i18n);
  for (var i = 1; i < matches.length; i++) {
    var _a = parseInfo[i - 1], field = _a[0], parser = _a[2];
    var value = parser ? parser(matches[i], combinedI18nSettings) : +matches[i];
    if (value == null) {
      return null;
    }
    dateInfo[field] = value;
  }
  if (dateInfo.isPm === 1 && dateInfo.hour != null && +dateInfo.hour !== 12) {
    dateInfo.hour = +dateInfo.hour + 12;
  } else if (dateInfo.isPm === 0 && +dateInfo.hour === 12) {
    dateInfo.hour = 0;
  }
  var dateTZ;
  if (dateInfo.timezoneOffset == null) {
    dateTZ = new Date(dateInfo.year, dateInfo.month, dateInfo.day, dateInfo.hour, dateInfo.minute, dateInfo.second, dateInfo.millisecond);
    var validateFields = [
      ["month", "getMonth"],
      ["day", "getDate"],
      ["hour", "getHours"],
      ["minute", "getMinutes"],
      ["second", "getSeconds"]
    ];
    for (var i = 0, len = validateFields.length; i < len; i++) {
      if (specifiedFields[validateFields[i][0]] && dateInfo[validateFields[i][0]] !== dateTZ[validateFields[i][1]]()) {
        return null;
      }
    }
  } else {
    dateTZ = new Date(Date.UTC(dateInfo.year, dateInfo.month, dateInfo.day, dateInfo.hour, dateInfo.minute - dateInfo.timezoneOffset, dateInfo.second, dateInfo.millisecond));
    if (dateInfo.month > 11 || dateInfo.month < 0 || dateInfo.day > 31 || dateInfo.day < 1 || dateInfo.hour > 23 || dateInfo.hour < 0 || dateInfo.minute > 59 || dateInfo.minute < 0 || dateInfo.second > 59 || dateInfo.second < 0) {
      return null;
    }
  }
  return dateTZ;
}
var fecha = {
  format,
  parse,
  defaultI18n,
  setGlobalDateI18n,
  setGlobalDateMasks
};
var fecha_default = fecha;

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/util/bisector.js
function bisector_default(getter) {
  return function(a, x, _lo, _hi) {
    var lo = is_nil_default(_lo) ? 0 : _lo;
    var hi = is_nil_default(_hi) ? a.length : _hi;
    while (lo < hi) {
      var mid = lo + hi >>> 1;
      if (getter(a[mid]) > x) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
    return lo;
  };
}

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/util/time.js
var FORMAT_METHOD = "format";
function timeFormat(time, mask) {
  var method = fecha_exports[FORMAT_METHOD] || fecha_default[FORMAT_METHOD];
  return method(time, mask);
}
function toTimeStamp2(value) {
  if (is_string_default(value)) {
    if (value.indexOf("T") > 0) {
      value = new Date(value).getTime();
    } else {
      value = new Date(value.replace(/-/gi, "/")).getTime();
    }
  }
  if (is_date_default(value)) {
    value = value.getTime();
  }
  return value;
}
var SECOND = 1e3;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
var MONTH = DAY * 31;
var YEAR = DAY * 365;
var intervals = [
  ["HH:mm:ss", SECOND],
  ["HH:mm:ss", SECOND * 10],
  ["HH:mm:ss", SECOND * 30],
  ["HH:mm", MINUTE],
  ["HH:mm", MINUTE * 10],
  ["HH:mm", MINUTE * 30],
  ["HH", HOUR],
  ["HH", HOUR * 6],
  ["HH", HOUR * 12],
  ["YYYY-MM-DD", DAY],
  ["YYYY-MM-DD", DAY * 4],
  ["YYYY-WW", DAY * 7],
  ["YYYY-MM", MONTH],
  ["YYYY-MM", MONTH * 4],
  ["YYYY-MM", MONTH * 6],
  ["YYYY", DAY * 380]
];
function getTickInterval(min2, max2, tickCount) {
  var target = (max2 - min2) / tickCount;
  var idx = bisector_default(function(o) {
    return o[1];
  })(intervals, target) - 1;
  var interval = intervals[idx];
  if (idx < 0) {
    interval = intervals[0];
  } else if (idx >= intervals.length) {
    interval = last(intervals);
  }
  return interval;
}

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/category/time.js
var TimeCat = (
  /** @class */
  function(_super) {
    __extends(TimeCat2, _super);
    function TimeCat2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = "timeCat";
      return _this;
    }
    TimeCat2.prototype.translate = function(value) {
      value = toTimeStamp2(value);
      var index = this.values.indexOf(value);
      if (index === -1) {
        if (is_number_default(value) && value < this.values.length) {
          index = value;
        } else {
          index = NaN;
        }
      }
      return index;
    };
    TimeCat2.prototype.getText = function(value, tickIndex) {
      var index = this.translate(value);
      if (index > -1) {
        var result = this.values[index];
        var formatter = this.formatter;
        result = formatter ? formatter(result, tickIndex) : timeFormat(result, this.mask);
        return result;
      }
      return value;
    };
    TimeCat2.prototype.initCfg = function() {
      this.tickMethod = "time-cat";
      this.mask = "YYYY-MM-DD";
      this.tickCount = 7;
    };
    TimeCat2.prototype.setDomain = function() {
      var values2 = this.values;
      each_default(values2, function(v, i) {
        values2[i] = toTimeStamp2(v);
      });
      values2.sort(function(v1, v2) {
        return v1 - v2;
      });
      _super.prototype.setDomain.call(this);
    };
    return TimeCat2;
  }(base_default3)
);
var time_default = TimeCat;

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/continuous/base.js
var Continuous = (
  /** @class */
  function(_super) {
    __extends(Continuous2, _super);
    function Continuous2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.isContinuous = true;
      return _this;
    }
    Continuous2.prototype.scale = function(value) {
      if (is_nil_default(value)) {
        return NaN;
      }
      var rangeMin = this.rangeMin();
      var rangeMax = this.rangeMax();
      var max2 = this.max;
      var min2 = this.min;
      if (max2 === min2) {
        return rangeMin;
      }
      var percent = this.getScalePercent(value);
      return rangeMin + percent * (rangeMax - rangeMin);
    };
    Continuous2.prototype.init = function() {
      _super.prototype.init.call(this);
      var ticks = this.ticks;
      var firstTick = head(ticks);
      var lastTick = last(ticks);
      if (firstTick < this.min) {
        this.min = firstTick;
      }
      if (lastTick > this.max) {
        this.max = lastTick;
      }
      if (!is_nil_default(this.minLimit)) {
        this.min = firstTick;
      }
      if (!is_nil_default(this.maxLimit)) {
        this.max = lastTick;
      }
    };
    Continuous2.prototype.setDomain = function() {
      var _a = get_range_default(this.values), min2 = _a.min, max2 = _a.max;
      if (is_nil_default(this.min)) {
        this.min = min2;
      }
      if (is_nil_default(this.max)) {
        this.max = max2;
      }
      if (this.min > this.max) {
        this.min = min2;
        this.max = max2;
      }
    };
    Continuous2.prototype.calculateTicks = function() {
      var _this = this;
      var ticks = _super.prototype.calculateTicks.call(this);
      if (!this.nice) {
        ticks = filter_default(ticks, function(tick) {
          return tick >= _this.min && tick <= _this.max;
        });
      }
      return ticks;
    };
    Continuous2.prototype.getScalePercent = function(value) {
      var max2 = this.max;
      var min2 = this.min;
      return (value - min2) / (max2 - min2);
    };
    Continuous2.prototype.getInvertPercent = function(value) {
      return (value - this.rangeMin()) / (this.rangeMax() - this.rangeMin());
    };
    return Continuous2;
  }(base_default2)
);
var base_default4 = Continuous;

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/continuous/linear.js
var Linear = (
  /** @class */
  function(_super) {
    __extends(Linear4, _super);
    function Linear4() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = "linear";
      _this.isLinear = true;
      return _this;
    }
    Linear4.prototype.invert = function(value) {
      var percent = this.getInvertPercent(value);
      return this.min + percent * (this.max - this.min);
    };
    Linear4.prototype.initCfg = function() {
      this.tickMethod = "wilkinson-extended";
      this.nice = false;
    };
    return Linear4;
  }(base_default4)
);
var linear_default = Linear;

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/util/math.js
function calBase(a, b) {
  var e = Math.E;
  var value;
  if (b >= 0) {
    value = Math.pow(e, Math.log(b) / a);
  } else {
    value = Math.pow(e, Math.log(-b) / a) * -1;
  }
  return value;
}
function log(a, b) {
  if (a === 1) {
    return 1;
  }
  return Math.log(b) / Math.log(a);
}
function getLogPositiveMin(values2, base, max2) {
  if (is_nil_default(max2)) {
    max2 = Math.max.apply(null, values2);
  }
  var positiveMin = max2;
  each_default(values2, function(value) {
    if (value > 0 && value < positiveMin) {
      positiveMin = value;
    }
  });
  if (positiveMin === max2) {
    positiveMin = max2 / base;
  }
  if (positiveMin > 1) {
    positiveMin = 1;
  }
  return positiveMin;
}

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/continuous/log.js
var Log = (
  /** @class */
  function(_super) {
    __extends(Log2, _super);
    function Log2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = "log";
      return _this;
    }
    Log2.prototype.invert = function(value) {
      var base = this.base;
      var max2 = log(base, this.max);
      var rangeMin = this.rangeMin();
      var range = this.rangeMax() - rangeMin;
      var min2;
      var positiveMin = this.positiveMin;
      if (positiveMin) {
        if (value === 0) {
          return 0;
        }
        min2 = log(base, positiveMin / base);
        var appendPercent = 1 / (max2 - min2) * range;
        if (value < appendPercent) {
          return value / appendPercent * positiveMin;
        }
      } else {
        min2 = log(base, this.min);
      }
      var percent = (value - rangeMin) / range;
      var tmp = percent * (max2 - min2) + min2;
      return Math.pow(base, tmp);
    };
    Log2.prototype.initCfg = function() {
      this.tickMethod = "log";
      this.base = 10;
      this.tickCount = 6;
      this.nice = true;
    };
    Log2.prototype.setDomain = function() {
      _super.prototype.setDomain.call(this);
      var min2 = this.min;
      if (min2 < 0) {
        throw new Error("When you use log scale, the minimum value must be greater than zero!");
      }
      if (min2 === 0) {
        this.positiveMin = getLogPositiveMin(this.values, this.base, this.max);
      }
    };
    Log2.prototype.getScalePercent = function(value) {
      var max2 = this.max;
      var min2 = this.min;
      if (max2 === min2) {
        return 0;
      }
      if (value <= 0) {
        return 0;
      }
      var base = this.base;
      var positiveMin = this.positiveMin;
      if (positiveMin) {
        min2 = positiveMin * 1 / base;
      }
      var percent;
      if (value < positiveMin) {
        percent = value / positiveMin / (log(base, max2) - log(base, min2));
      } else {
        percent = (log(base, value) - log(base, min2)) / (log(base, max2) - log(base, min2));
      }
      return percent;
    };
    return Log2;
  }(base_default4)
);
var log_default = Log;

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/continuous/pow.js
var Pow = (
  /** @class */
  function(_super) {
    __extends(Pow2, _super);
    function Pow2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = "pow";
      return _this;
    }
    Pow2.prototype.invert = function(value) {
      var percent = this.getInvertPercent(value);
      var exponent = this.exponent;
      var max2 = calBase(exponent, this.max);
      var min2 = calBase(exponent, this.min);
      var tmp = percent * (max2 - min2) + min2;
      var factor = tmp >= 0 ? 1 : -1;
      return Math.pow(tmp, exponent) * factor;
    };
    Pow2.prototype.initCfg = function() {
      this.tickMethod = "pow";
      this.exponent = 2;
      this.tickCount = 5;
      this.nice = true;
    };
    Pow2.prototype.getScalePercent = function(value) {
      var max2 = this.max;
      var min2 = this.min;
      if (max2 === min2) {
        return 0;
      }
      var exponent = this.exponent;
      var percent = (calBase(exponent, value) - calBase(exponent, min2)) / (calBase(exponent, max2) - calBase(exponent, min2));
      return percent;
    };
    return Pow2;
  }(base_default4)
);
var pow_default = Pow;

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/continuous/time.js
var Time = (
  /** @class */
  function(_super) {
    __extends(Time2, _super);
    function Time2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = "time";
      return _this;
    }
    Time2.prototype.getText = function(value, index) {
      var numberValue = this.translate(value);
      var formatter = this.formatter;
      return formatter ? formatter(numberValue, index) : timeFormat(numberValue, this.mask);
    };
    Time2.prototype.scale = function(value) {
      var v = value;
      if (is_string_default(v) || is_date_default(v)) {
        v = this.translate(v);
      }
      return _super.prototype.scale.call(this, v);
    };
    Time2.prototype.translate = function(v) {
      return toTimeStamp2(v);
    };
    Time2.prototype.initCfg = function() {
      this.tickMethod = "time-pretty";
      this.mask = "YYYY-MM-DD";
      this.tickCount = 7;
      this.nice = false;
    };
    Time2.prototype.setDomain = function() {
      var values2 = this.values;
      var minConfig = this.getConfig("min");
      var maxConfig = this.getConfig("max");
      if (!is_nil_default(minConfig) || !is_number_default(minConfig)) {
        this.min = this.translate(this.min);
      }
      if (!is_nil_default(maxConfig) || !is_number_default(maxConfig)) {
        this.max = this.translate(this.max);
      }
      if (values2 && values2.length) {
        var timeStamps_1 = [];
        var min_1 = Infinity;
        var secondMin_1 = min_1;
        var max_1 = 0;
        each_default(values2, function(v) {
          var timeStamp = toTimeStamp2(v);
          if (isNaN(timeStamp)) {
            throw new TypeError("Invalid Time: " + v + " in time scale!");
          }
          if (min_1 > timeStamp) {
            secondMin_1 = min_1;
            min_1 = timeStamp;
          } else if (secondMin_1 > timeStamp) {
            secondMin_1 = timeStamp;
          }
          if (max_1 < timeStamp) {
            max_1 = timeStamp;
          }
          timeStamps_1.push(timeStamp);
        });
        if (values2.length > 1) {
          this.minTickInterval = secondMin_1 - min_1;
        }
        if (is_nil_default(minConfig)) {
          this.min = min_1;
        }
        if (is_nil_default(maxConfig)) {
          this.max = max_1;
        }
      }
    };
    return Time2;
  }(linear_default)
);
var time_default2 = Time;

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/continuous/quantize.js
var Quantize = (
  /** @class */
  function(_super) {
    __extends(Quantize2, _super);
    function Quantize2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = "quantize";
      return _this;
    }
    Quantize2.prototype.invert = function(value) {
      var ticks = this.ticks;
      var length2 = ticks.length;
      var percent = this.getInvertPercent(value);
      var minIndex = Math.floor(percent * (length2 - 1));
      if (minIndex >= length2 - 1) {
        return last(ticks);
      }
      if (minIndex < 0) {
        return head(ticks);
      }
      var minTick = ticks[minIndex];
      var nextTick = ticks[minIndex + 1];
      var minIndexPercent = minIndex / (length2 - 1);
      var maxIndexPercent = (minIndex + 1) / (length2 - 1);
      return minTick + (percent - minIndexPercent) / (maxIndexPercent - minIndexPercent) * (nextTick - minTick);
    };
    Quantize2.prototype.initCfg = function() {
      this.tickMethod = "r-pretty";
      this.tickCount = 5;
      this.nice = true;
    };
    Quantize2.prototype.calculateTicks = function() {
      var ticks = _super.prototype.calculateTicks.call(this);
      if (!this.nice) {
        if (last(ticks) !== this.max) {
          ticks.push(this.max);
        }
        if (head(ticks) !== this.min) {
          ticks.unshift(this.min);
        }
      }
      return ticks;
    };
    Quantize2.prototype.getScalePercent = function(value) {
      var ticks = this.ticks;
      if (value < head(ticks)) {
        return 0;
      }
      if (value > last(ticks)) {
        return 1;
      }
      var minIndex = 0;
      each_default(ticks, function(tick, index) {
        if (value >= tick) {
          minIndex = index;
        } else {
          return false;
        }
      });
      return minIndex / (ticks.length - 1);
    };
    return Quantize2;
  }(base_default4)
);
var quantize_default2 = Quantize;

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/continuous/quantile.js
var Quantile = (
  /** @class */
  function(_super) {
    __extends(Quantile2, _super);
    function Quantile2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = "quantile";
      return _this;
    }
    Quantile2.prototype.initCfg = function() {
      this.tickMethod = "quantile";
      this.tickCount = 5;
      this.nice = true;
    };
    return Quantile2;
  }(quantize_default2)
);
var quantile_default = Quantile;

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/factory.js
var map4 = {};
function getClass(key) {
  return map4[key];
}
function registerClass(key, cls) {
  if (getClass(key)) {
    throw new Error("type '" + key + "' existed.");
  }
  map4[key] = cls;
}

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/identity/index.js
var Identity = (
  /** @class */
  function(_super) {
    __extends(Identity4, _super);
    function Identity4() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = "identity";
      _this.isIdentity = true;
      return _this;
    }
    Identity4.prototype.calculateTicks = function() {
      return this.values;
    };
    Identity4.prototype.scale = function(value) {
      if (this.values[0] !== value && is_number_default(value)) {
        return value;
      }
      return this.range[0];
    };
    Identity4.prototype.invert = function(value) {
      var range = this.range;
      if (value < range[0] || value > range[1]) {
        return NaN;
      }
      return this.values[0];
    };
    return Identity4;
  }(base_default2)
);
var identity_default2 = Identity;

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/tick-method/cat.js
function calculateCatTicks(cfg) {
  var values2 = cfg.values, tickInterval = cfg.tickInterval, tickCount = cfg.tickCount, showLast = cfg.showLast;
  if (is_number_default(tickInterval)) {
    var ticks_1 = filter_default(values2, function(__, i2) {
      return i2 % tickInterval === 0;
    });
    var lastValue = last(values2);
    if (showLast && last(ticks_1) !== lastValue) {
      ticks_1.push(lastValue);
    }
    return ticks_1;
  }
  var len = values2.length;
  var min2 = cfg.min, max2 = cfg.max;
  if (is_nil_default(min2)) {
    min2 = 0;
  }
  if (is_nil_default(max2)) {
    max2 = values2.length - 1;
  }
  if (!is_number_default(tickCount) || tickCount >= len)
    return values2.slice(min2, max2 + 1);
  if (tickCount <= 0 || max2 <= 0)
    return [];
  var interval = tickCount === 1 ? len : Math.floor(len / (tickCount - 1));
  var ticks = [];
  var idx = min2;
  for (var i = 0; i < tickCount; i++) {
    if (idx >= max2)
      break;
    idx = Math.min(min2 + i * interval, max2);
    if (i === tickCount - 1 && showLast)
      ticks.push(values2[max2]);
    else
      ticks.push(values2[idx]);
  }
  return ticks;
}

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/util/d3-linear.js
function d3Linear(cfg) {
  var min2 = cfg.min, max2 = cfg.max, nice = cfg.nice, tickCount = cfg.tickCount;
  var linear4 = new D3Linear();
  linear4.domain([min2, max2]);
  if (nice) {
    linear4.nice(tickCount);
  }
  return linear4.ticks(tickCount);
}
var DEFAULT_COUNT = 5;
var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);
var D3Linear = (
  /** @class */
  function() {
    function D3Linear2() {
      this._domain = [0, 1];
    }
    D3Linear2.prototype.domain = function(domain) {
      if (domain) {
        this._domain = Array.from(domain, Number);
        return this;
      }
      return this._domain.slice();
    };
    D3Linear2.prototype.nice = function(count2) {
      var _a, _b;
      if (count2 === void 0) {
        count2 = DEFAULT_COUNT;
      }
      var d = this._domain.slice();
      var i0 = 0;
      var i1 = this._domain.length - 1;
      var start2 = this._domain[i0];
      var stop = this._domain[i1];
      var step;
      if (stop < start2) {
        _a = [stop, start2], start2 = _a[0], stop = _a[1];
        _b = [i1, i0], i0 = _b[0], i1 = _b[1];
      }
      step = tickIncrement(start2, stop, count2);
      if (step > 0) {
        start2 = Math.floor(start2 / step) * step;
        stop = Math.ceil(stop / step) * step;
        step = tickIncrement(start2, stop, count2);
      } else if (step < 0) {
        start2 = Math.ceil(start2 * step) / step;
        stop = Math.floor(stop * step) / step;
        step = tickIncrement(start2, stop, count2);
      }
      if (step > 0) {
        d[i0] = Math.floor(start2 / step) * step;
        d[i1] = Math.ceil(stop / step) * step;
        this.domain(d);
      } else if (step < 0) {
        d[i0] = Math.ceil(start2 * step) / step;
        d[i1] = Math.floor(stop * step) / step;
        this.domain(d);
      }
      return this;
    };
    D3Linear2.prototype.ticks = function(count2) {
      if (count2 === void 0) {
        count2 = DEFAULT_COUNT;
      }
      return d3ArrayTicks(this._domain[0], this._domain[this._domain.length - 1], count2 || DEFAULT_COUNT);
    };
    return D3Linear2;
  }()
);
function d3ArrayTicks(start2, stop, count2) {
  var reverse;
  var i = -1;
  var n;
  var ticks;
  var step;
  stop = +stop, start2 = +start2, count2 = +count2;
  if (start2 === stop && count2 > 0) {
    return [start2];
  }
  if (reverse = stop < start2) {
    n = start2, start2 = stop, stop = n;
  }
  if ((step = tickIncrement(start2, stop, count2)) === 0 || !isFinite(step)) {
    return [];
  }
  if (step > 0) {
    start2 = Math.ceil(start2 / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start2 + 1));
    while (++i < n) {
      ticks[i] = (start2 + i) * step;
    }
  } else {
    start2 = Math.floor(start2 * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start2 - stop + 1));
    while (++i < n) {
      ticks[i] = (start2 - i) / step;
    }
  }
  if (reverse) {
    ticks.reverse();
  }
  return ticks;
}
function tickIncrement(start2, stop, count2) {
  var step = (stop - start2) / Math.max(0, count2);
  var power = Math.floor(Math.log(step) / Math.LN10);
  var error = step / Math.pow(10, power);
  return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/util/interval.js
function snapMultiple(v, base, snapType) {
  var div;
  if (snapType === "ceil") {
    div = Math.ceil(v / base);
  } else if (snapType === "floor") {
    div = Math.floor(v / base);
  } else {
    div = Math.round(v / base);
  }
  return div * base;
}
function intervalTicks(min2, max2, interval) {
  var minTick = snapMultiple(min2, interval, "floor");
  var maxTick = snapMultiple(max2, interval, "ceil");
  minTick = fixed_base_default(minTick, interval);
  maxTick = fixed_base_default(maxTick, interval);
  var ticks = [];
  var availableInterval = Math.max((maxTick - minTick) / (Math.pow(2, 12) - 1), interval);
  for (var i = minTick; i <= maxTick; i = i + availableInterval) {
    var tickValue = fixed_base_default(i, availableInterval);
    ticks.push(tickValue);
  }
  return {
    min: minTick,
    max: maxTick,
    ticks
  };
}

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/util/strict-limit.js
function strictLimit(cfg, defaultMin, defaultMax) {
  var _a;
  var minLimit = cfg.minLimit, maxLimit = cfg.maxLimit, min2 = cfg.min, max2 = cfg.max, _b = cfg.tickCount, tickCount = _b === void 0 ? 5 : _b;
  var tickMin = is_nil_default(minLimit) ? is_nil_default(defaultMin) ? min2 : defaultMin : minLimit;
  var tickMax = is_nil_default(maxLimit) ? is_nil_default(defaultMax) ? max2 : defaultMax : maxLimit;
  if (tickMin > tickMax) {
    _a = [tickMin, tickMax], tickMax = _a[0], tickMin = _a[1];
  }
  if (tickCount <= 2) {
    return [tickMin, tickMax];
  }
  var step = (tickMax - tickMin) / (tickCount - 1);
  var ticks = [];
  for (var i = 0; i < tickCount; i++) {
    ticks.push(tickMin + step * i);
  }
  return ticks;
}

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/tick-method/d3-linear.js
function d3LinearTickMethod(cfg) {
  var min2 = cfg.min, max2 = cfg.max, tickInterval = cfg.tickInterval, minLimit = cfg.minLimit, maxLimit = cfg.maxLimit;
  var ticks = d3Linear(cfg);
  if (!is_nil_default(minLimit) || !is_nil_default(maxLimit)) {
    return strictLimit(cfg, head(ticks), last(ticks));
  }
  if (tickInterval) {
    return intervalTicks(min2, max2, tickInterval).ticks;
  }
  return ticks;
}

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/util/pretty-number.js
function prettyNumber(n) {
  return Math.abs(n) < 1e-15 ? n : parseFloat(n.toFixed(15));
}

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/util/extended.js
var DEFAULT_Q = [1, 5, 2, 2.5, 4, 3];
var eps = Number.EPSILON * 100;
function mod(n, m) {
  return (n % m + m) % m;
}
function round(n) {
  return Math.round(n * 1e12) / 1e12;
}
function simplicity(q, Q, j, lmin, lmax, lstep) {
  var n = size(Q);
  var i = index_of_default(Q, q);
  var v = 0;
  var m = mod(lmin, lstep);
  if ((m < eps || lstep - m < eps) && lmin <= 0 && lmax >= 0) {
    v = 1;
  }
  return 1 - i / (n - 1) - j + v;
}
function simplicityMax(q, Q, j) {
  var n = size(Q);
  var i = index_of_default(Q, q);
  var v = 1;
  return 1 - i / (n - 1) - j + v;
}
function density(k, m, dMin, dMax, lMin, lMax) {
  var r = (k - 1) / (lMax - lMin);
  var rt = (m - 1) / (Math.max(lMax, dMax) - Math.min(dMin, lMin));
  return 2 - Math.max(r / rt, rt / r);
}
function densityMax(k, m) {
  if (k >= m) {
    return 2 - (k - 1) / (m - 1);
  }
  return 1;
}
function coverage(dMin, dMax, lMin, lMax) {
  var range = dMax - dMin;
  return 1 - 0.5 * (Math.pow(dMax - lMax, 2) + Math.pow(dMin - lMin, 2)) / Math.pow(0.1 * range, 2);
}
function coverageMax(dMin, dMax, span) {
  var range = dMax - dMin;
  if (span > range) {
    var half = (span - range) / 2;
    return 1 - Math.pow(half, 2) / Math.pow(0.1 * range, 2);
  }
  return 1;
}
function legibility() {
  return 1;
}
function extended(dMin, dMax, n, onlyLoose, Q, w) {
  if (n === void 0) {
    n = 5;
  }
  if (onlyLoose === void 0) {
    onlyLoose = true;
  }
  if (Q === void 0) {
    Q = DEFAULT_Q;
  }
  if (w === void 0) {
    w = [0.25, 0.2, 0.5, 0.05];
  }
  var m = n < 0 ? 0 : Math.round(n);
  if (Number.isNaN(dMin) || Number.isNaN(dMax) || typeof dMin !== "number" || typeof dMax !== "number" || !m) {
    return {
      min: 0,
      max: 0,
      ticks: []
    };
  }
  if (dMax - dMin < 1e-15 || m === 1) {
    return {
      min: dMin,
      max: dMax,
      ticks: [dMin]
    };
  }
  if (dMax - dMin > 1e148) {
    var count2 = n || 5;
    var step_1 = (dMax - dMin) / count2;
    return {
      min: dMin,
      max: dMax,
      ticks: Array(count2).fill(null).map(function(_, idx) {
        return prettyNumber(dMin + step_1 * idx);
      })
    };
  }
  var best = {
    score: -2,
    lmin: 0,
    lmax: 0,
    lstep: 0
  };
  var j = 1;
  while (j < Infinity) {
    for (var i = 0; i < Q.length; i += 1) {
      var q = Q[i];
      var sm = simplicityMax(q, Q, j);
      if (w[0] * sm + w[1] + w[2] + w[3] < best.score) {
        j = Infinity;
        break;
      }
      var k = 2;
      while (k < Infinity) {
        var dm = densityMax(k, m);
        if (w[0] * sm + w[1] + w[2] * dm + w[3] < best.score) {
          break;
        }
        var delta = (dMax - dMin) / (k + 1) / j / q;
        var z = Math.ceil(Math.log10(delta));
        while (z < Infinity) {
          var step = j * q * Math.pow(10, z);
          var cm = coverageMax(dMin, dMax, step * (k - 1));
          if (w[0] * sm + w[1] * cm + w[2] * dm + w[3] < best.score) {
            break;
          }
          var minStart = Math.floor(dMax / step) * j - (k - 1) * j;
          var maxStart = Math.ceil(dMin / step) * j;
          if (minStart <= maxStart) {
            var count2 = maxStart - minStart;
            for (var i_1 = 0; i_1 <= count2; i_1 += 1) {
              var start2 = minStart + i_1;
              var lMin = start2 * (step / j);
              var lMax = lMin + step * (k - 1);
              var lStep = step;
              var s = simplicity(q, Q, j, lMin, lMax, lStep);
              var c = coverage(dMin, dMax, lMin, lMax);
              var g = density(k, m, dMin, dMax, lMin, lMax);
              var l = legibility();
              var score = w[0] * s + w[1] * c + w[2] * g + w[3] * l;
              if (score > best.score && (!onlyLoose || lMin <= dMin && lMax >= dMax)) {
                best.lmin = lMin;
                best.lmax = lMax;
                best.lstep = lStep;
                best.score = score;
              }
            }
          }
          z += 1;
        }
        k += 1;
      }
    }
    j += 1;
  }
  var lmax = prettyNumber(best.lmax);
  var lmin = prettyNumber(best.lmin);
  var lstep = prettyNumber(best.lstep);
  var tickCount = Math.floor(round((lmax - lmin) / lstep)) + 1;
  var ticks = new Array(tickCount);
  ticks[0] = prettyNumber(lmin);
  for (var i = 1; i < tickCount; i++) {
    ticks[i] = prettyNumber(ticks[i - 1] + lstep);
  }
  return {
    min: Math.min(dMin, head(ticks)),
    max: Math.max(dMax, last(ticks)),
    ticks
  };
}

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/tick-method/linear.js
function linear3(cfg) {
  var min2 = cfg.min, max2 = cfg.max, tickCount = cfg.tickCount, nice = cfg.nice, tickInterval = cfg.tickInterval, minLimit = cfg.minLimit, maxLimit = cfg.maxLimit;
  var ticks = extended(min2, max2, tickCount, nice).ticks;
  if (!is_nil_default(minLimit) || !is_nil_default(maxLimit)) {
    return strictLimit(cfg, head(ticks), last(ticks));
  }
  if (tickInterval) {
    return intervalTicks(min2, max2, tickInterval).ticks;
  }
  return ticks;
}

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/tick-method/log.js
function calculateLogTicks(cfg) {
  var base = cfg.base, tickCount = cfg.tickCount, min2 = cfg.min, max2 = cfg.max, values2 = cfg.values;
  var minTick;
  var maxTick = log(base, max2);
  if (min2 > 0) {
    minTick = Math.floor(log(base, min2));
  } else {
    var positiveMin = getLogPositiveMin(values2, base, max2);
    minTick = Math.floor(log(base, positiveMin));
  }
  var count2 = maxTick - minTick;
  var avg = Math.ceil(count2 / tickCount);
  var ticks = [];
  for (var i = minTick; i < maxTick + avg; i = i + avg) {
    ticks.push(Math.pow(base, i));
  }
  if (min2 <= 0) {
    ticks.unshift(0);
  }
  return ticks;
}

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/util/pretty.js
function pretty(min2, max2, m) {
  if (m === void 0) {
    m = 5;
  }
  if (min2 === max2) {
    return {
      max: max2,
      min: min2,
      ticks: [min2]
    };
  }
  var n = m < 0 ? 0 : Math.round(m);
  if (n === 0)
    return { max: max2, min: min2, ticks: [] };
  var h = 1.5;
  var h5 = 0.5 + 1.5 * h;
  var d = max2 - min2;
  var c = d / n;
  var base = Math.pow(10, Math.floor(Math.log10(c)));
  var unit = base;
  if (2 * base - c < h * (c - unit)) {
    unit = 2 * base;
    if (5 * base - c < h5 * (c - unit)) {
      unit = 5 * base;
      if (10 * base - c < h * (c - unit)) {
        unit = 10 * base;
      }
    }
  }
  var nu = Math.ceil(max2 / unit);
  var ns = Math.floor(min2 / unit);
  var hi = Math.max(nu * unit, max2);
  var lo = Math.min(ns * unit, min2);
  var size2 = Math.floor((hi - lo) / unit) + 1;
  var ticks = new Array(size2);
  for (var i = 0; i < size2; i++) {
    ticks[i] = prettyNumber(lo + i * unit);
  }
  return {
    min: lo,
    max: hi,
    ticks
  };
}

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/tick-method/pow.js
function calculatePowTicks(cfg) {
  var exponent = cfg.exponent, tickCount = cfg.tickCount;
  var max2 = Math.ceil(calBase(exponent, cfg.max));
  var min2 = Math.floor(calBase(exponent, cfg.min));
  var ticks = pretty(min2, max2, tickCount).ticks;
  return ticks.map(function(tick) {
    var factor = tick >= 0 ? 1 : -1;
    return Math.pow(tick, exponent) * factor;
  });
}

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/tick-method/quantile.js
function quantileSorted(x, p) {
  var idx = x.length * p;
  if (p === 1) {
    return x[x.length - 1];
  } else if (p === 0) {
    return x[0];
  } else if (idx % 1 !== 0) {
    return x[Math.ceil(idx) - 1];
  } else if (x.length % 2 === 0) {
    return (x[idx - 1] + x[idx]) / 2;
  } else {
    return x[idx];
  }
}
function calculateTicks(cfg) {
  var tickCount = cfg.tickCount, values2 = cfg.values;
  if (!values2 || !values2.length) {
    return [];
  }
  var sorted = values2.slice().sort(function(a, b) {
    return a - b;
  });
  var ticks = [];
  for (var i = 0; i < tickCount; i++) {
    var p = i / (tickCount - 1);
    ticks.push(quantileSorted(sorted, p));
  }
  return ticks;
}

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/tick-method/r-prettry.js
function linearPretty(cfg) {
  var min2 = cfg.min, max2 = cfg.max, tickCount = cfg.tickCount, tickInterval = cfg.tickInterval, minLimit = cfg.minLimit, maxLimit = cfg.maxLimit;
  var ticks = pretty(min2, max2, tickCount).ticks;
  if (!is_nil_default(minLimit) || !is_nil_default(maxLimit)) {
    return strictLimit(cfg, head(ticks), last(ticks));
  }
  if (tickInterval) {
    return intervalTicks(min2, max2, tickInterval).ticks;
  }
  return ticks;
}

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/tick-method/time.js
function calculateTimeTicks(cfg) {
  var min2 = cfg.min, max2 = cfg.max, minTickInterval = cfg.minTickInterval;
  var tickInterval = cfg.tickInterval;
  var tickCount = cfg.tickCount;
  if (tickInterval) {
    tickCount = Math.ceil((max2 - min2) / tickInterval);
  } else {
    tickInterval = getTickInterval(min2, max2, tickCount)[1];
    var count2 = (max2 - min2) / tickInterval;
    var ratio = count2 / tickCount;
    if (ratio > 1) {
      tickInterval = tickInterval * Math.ceil(ratio);
    }
    if (minTickInterval && tickInterval < minTickInterval) {
      tickInterval = minTickInterval;
    }
  }
  tickInterval = Math.max(Math.floor((max2 - min2) / (Math.pow(2, 12) - 1)), tickInterval);
  var ticks = [];
  for (var i = min2; i < max2 + tickInterval; i += tickInterval) {
    ticks.push(i);
  }
  return ticks;
}

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/tick-method/time-cat.js
function timeCat(cfg) {
  var ticks = calculateCatTicks(__assign({ showLast: true }, cfg));
  return ticks;
}

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/tick-method/time-pretty.js
function getYear(date) {
  return new Date(date).getFullYear();
}
function createYear(year) {
  return new Date(year, 0, 1).getTime();
}
function getMonth(date) {
  return new Date(date).getMonth();
}
function diffMonth(min2, max2) {
  var minYear = getYear(min2);
  var maxYear = getYear(max2);
  var minMonth = getMonth(min2);
  var maxMonth = getMonth(max2);
  return (maxYear - minYear) * 12 + (maxMonth - minMonth) % 12;
}
function creatMonth(year, month) {
  return new Date(year, month, 1).getTime();
}
function diffDay(min2, max2) {
  return Math.ceil((max2 - min2) / DAY);
}
function diffHour(min2, max2) {
  return Math.ceil((max2 - min2) / HOUR);
}
function diffMinus(min2, max2) {
  return Math.ceil((max2 - min2) / (60 * 1e3));
}
function timePretty(cfg) {
  var min2 = cfg.min, max2 = cfg.max, minTickInterval = cfg.minTickInterval, tickCount = cfg.tickCount;
  var tickInterval = cfg.tickInterval;
  var ticks = [];
  if (!tickInterval) {
    tickInterval = (max2 - min2) / tickCount;
    if (minTickInterval && tickInterval < minTickInterval) {
      tickInterval = minTickInterval;
    }
  }
  tickInterval = Math.max(Math.floor((max2 - min2) / (Math.pow(2, 12) - 1)), tickInterval);
  var minYear = getYear(min2);
  if (tickInterval > YEAR) {
    var maxYear = getYear(max2);
    var yearInterval = Math.ceil(tickInterval / YEAR);
    for (var i = minYear; i <= maxYear + yearInterval; i = i + yearInterval) {
      ticks.push(createYear(i));
    }
  } else if (tickInterval > MONTH) {
    var monthInterval = Math.ceil(tickInterval / MONTH);
    var mmMoth = getMonth(min2);
    var dMonths = diffMonth(min2, max2);
    for (var i = 0; i <= dMonths + monthInterval; i = i + monthInterval) {
      ticks.push(creatMonth(minYear, i + mmMoth));
    }
  } else if (tickInterval > DAY) {
    var date = new Date(min2);
    var year = date.getFullYear();
    var month = date.getMonth();
    var mday = date.getDate();
    var day = Math.ceil(tickInterval / DAY);
    var ddays = diffDay(min2, max2);
    for (var i = 0; i < ddays + day; i = i + day) {
      ticks.push(new Date(year, month, mday + i).getTime());
    }
  } else if (tickInterval > HOUR) {
    var date = new Date(min2);
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var hour = date.getHours();
    var hours = Math.ceil(tickInterval / HOUR);
    var dHours = diffHour(min2, max2);
    for (var i = 0; i <= dHours + hours; i = i + hours) {
      ticks.push(new Date(year, month, day, hour + i).getTime());
    }
  } else if (tickInterval > MINUTE) {
    var dMinus = diffMinus(min2, max2);
    var minutes = Math.ceil(tickInterval / MINUTE);
    for (var i = 0; i <= dMinus + minutes; i = i + minutes) {
      ticks.push(min2 + i * MINUTE);
    }
  } else {
    var interval = tickInterval;
    if (interval < SECOND) {
      interval = SECOND;
    }
    var minSecond = Math.floor(min2 / SECOND) * SECOND;
    var dSeconds = Math.ceil((max2 - min2) / SECOND);
    var seconds = Math.ceil(interval / SECOND);
    for (var i = 0; i < dSeconds + seconds; i = i + seconds) {
      ticks.push(minSecond + i * SECOND);
    }
  }
  if (ticks.length >= 512) {
    console.warn("Notice: current ticks length(" + ticks.length + ') >= 512, may cause performance issues, even out of memory. Because of the configure "tickInterval"(in milliseconds, current is ' + tickInterval + ") is too small, increase the value to solve the problem!");
  }
  return ticks;
}

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/tick-method/index.js
registerTickMethod("cat", calculateCatTicks);
registerTickMethod("time-cat", timeCat);
registerTickMethod("wilkinson-extended", linear3);
registerTickMethod("r-pretty", linearPretty);
registerTickMethod("time", calculateTimeTicks);
registerTickMethod("time-pretty", timePretty);
registerTickMethod("log", calculateLogTicks);
registerTickMethod("pow", calculatePowTicks);
registerTickMethod("quantile", calculateTicks);
registerTickMethod("d3-linear", d3LinearTickMethod);

// node_modules/.pnpm/@antv+scale@0.3.18/node_modules/@antv/scale/esm/index.js
registerClass("cat", base_default3);
registerClass("category", base_default3);
registerClass("identity", identity_default2);
registerClass("linear", linear_default);
registerClass("log", log_default);
registerClass("pow", pow_default);
registerClass("time", time_default2);
registerClass("timeCat", time_default);
registerClass("quantize", quantize_default2);
registerClass("quantile", quantile_default);

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/controller/scale/cat-tick.js
var cat_tick_default = function(cfg) {
  var values2 = cfg.values, tickCount = cfg.tickCount;
  if (!tickCount) {
    return values2;
  }
  if (values2.length <= 1) {
    return values2;
  }
  var step = Math.floor(values2.length / (tickCount - 1)) || 1;
  var ticks = [];
  for (var index = 0; index < values2.length; index = index + step) {
    ticks.push(values2[index]);
  }
  var last2 = values2[values2.length - 1];
  if (ticks[ticks.length - 1] !== last2) {
    if (ticks.length >= tickCount) {
      ticks[ticks.length - 1] = last2;
    } else {
      ticks.push(last2);
    }
  }
  return ticks;
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/controller/scale/linear-tick.js
var SNAP_COUNT_ARRAY = [1, 1.2, 1.5, 2, 2.2, 2.4, 2.5, 3, 4, 5, 6, 7.5, 8, 10];
var DEFAULT_COUNT2 = 5;
var linear_tick_default = function(cfg) {
  var _ref = cfg || {}, tickCount = _ref.tickCount, tickInterval = _ref.tickInterval;
  var _ref2 = cfg || {}, min2 = _ref2.min, max2 = _ref2.max;
  min2 = isNaN(min2) ? 0 : min2;
  max2 = isNaN(max2) ? 0 : max2;
  var count2 = tickCount && tickCount >= 2 ? tickCount : DEFAULT_COUNT2;
  var interval = tickInterval || getBestInterval({
    tickCount: count2,
    max: max2,
    min: min2
  });
  var minTick = Math.floor(min2 / interval) * interval;
  if (tickInterval) {
    var intervalCount = Math.abs(Math.ceil((max2 - minTick) / tickInterval)) + 1;
    count2 = Math.max(count2, intervalCount);
  }
  var tickLength = 0;
  var fixedLength = getFixedLength(interval);
  if (min2 < 0 && max2 > 0 && count2 === 2) {
    return [toFixed(minTick, fixedLength), toFixed(Math.ceil(max2 / interval) * interval, fixedLength)];
  }
  var ticks = [];
  while (tickLength < count2) {
    ticks.push(toFixed(minTick + tickLength * interval, fixedLength));
    tickLength++;
  }
  return ticks;
};
var DECIMAL_LENGTH = 12;
function getFactor(number) {
  number = Math.abs(number);
  var factor = 1;
  if (number === 0) {
    return factor;
  }
  if (number < 1) {
    var count2 = 0;
    while (number < 1) {
      factor = factor / 10;
      number = number * 10;
      count2++;
    }
    if (factor.toString().length > DECIMAL_LENGTH) {
      factor = parseFloat(factor.toFixed(count2));
    }
    return factor;
  }
  while (number > 10) {
    factor = factor * 10;
    number = number / 10;
  }
  return factor;
}
function getBestInterval(_ref3) {
  var tickCount = _ref3.tickCount, min2 = _ref3.min, max2 = _ref3.max;
  if (min2 === max2) {
    return 1 * getFactor(max2);
  }
  var avgInterval = (max2 - min2) / (tickCount - 1);
  var factor = getFactor(avgInterval);
  var calInterval = avgInterval / factor;
  var calMax = max2 / factor;
  var calMin = min2 / factor;
  var similarityIndex = 0;
  for (var index = 0; index < SNAP_COUNT_ARRAY.length; index++) {
    var item = SNAP_COUNT_ARRAY[index];
    if (calInterval <= item) {
      similarityIndex = index;
      break;
    }
  }
  var similarityInterval = min2 < 0 && max2 > 0 && tickCount === 2 ? SNAP_COUNT_ARRAY[similarityIndex] : getInterval(similarityIndex, tickCount, calMin, calMax);
  var fixedLength = getFixedLength(similarityInterval) + getFixedLength(factor);
  return toFixed(similarityInterval * factor, fixedLength);
}
function getInterval(startIndex, tickCount, min2, max2) {
  var verify = false;
  var interval = SNAP_COUNT_ARRAY[startIndex];
  for (var i = startIndex; i < SNAP_COUNT_ARRAY.length; i++) {
    if (intervalIsVerify({
      interval: SNAP_COUNT_ARRAY[i],
      tickCount,
      max: max2,
      min: min2
    })) {
      interval = SNAP_COUNT_ARRAY[i];
      verify = true;
      break;
    }
  }
  if (!verify) {
    return 10 * getInterval(0, tickCount, min2 / 10, max2 / 10);
  }
  return interval;
}
function intervalIsVerify(_ref4) {
  var interval = _ref4.interval, tickCount = _ref4.tickCount, max2 = _ref4.max, min2 = _ref4.min;
  var minTick = Math.floor(min2 / interval) * interval;
  if (minTick + (tickCount - 1) * interval >= max2) {
    return true;
  }
  return false;
}
function getFixedLength(num) {
  var str = num.toString();
  var index = str.indexOf(".");
  var indexOfExp = str.indexOf("e-");
  var length2 = indexOfExp >= 0 ? parseInt(str.substr(indexOfExp + 2), 10) : str.substr(index + 1).length;
  if (length2 > 20) {
    length2 = 20;
  }
  return length2;
}
function toFixed(v, length2) {
  return parseFloat(v.toFixed(length2));
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/controller/scale.js
registerTickMethod("cat", cat_tick_default);
registerTickMethod("time-cat", cat_tick_default);
registerTickMethod("wilkinson-extended", linear_tick_default);
var ScaleController = function() {
  function ScaleController2(data) {
    _classCallCheck(this, ScaleController2);
    this.data = data;
    this.options = {};
    this.scales = {};
  }
  _createClass(ScaleController2, [{
    key: "_getType",
    value: function _getType(option) {
      var type = option.type, values2 = option.values, field = option.field;
      if (type) {
        return type;
      }
      if (is_number_default(field) || is_nil_default(values2[0]) && field) {
        return "identity";
      }
      if (typeof values2[0] === "number") {
        return "linear";
      }
      return "cat";
    }
  }, {
    key: "_getOption",
    value: function _getOption(option) {
      var values2 = option.values, field = option.field, justifyContent = option.justifyContent;
      var type = this._getType(option);
      option.type = type;
      if (type === "identity") {
        option.field = field.toString();
        option.values = [field];
        return option;
      }
      if (type === "linear") {
        if (typeof option.nice !== "boolean") {
          option.nice = true;
        }
        var _getRange = get_range_default(values2), min2 = _getRange.min, max2 = _getRange.max;
        if (is_nil_default(option.min)) {
          option.min = min2;
        }
        if (is_nil_default(option.max)) {
          option.max = max2;
        }
        option.values = values2.sort(function(a, b) {
          return a - b;
        });
        return option;
      }
      if (type === "cat" || type === "timeCat") {
        if (option.range) {
          return option;
        }
        var count2 = values2.length;
        var range = [0, 1];
        if (count2 === 1) {
          range = [0.5, 1];
        } else if (justifyContent) {
          var offset = 1 / count2 * 0.5;
          range = [offset, 1 - offset];
        } else {
          var _offset = 1 / count2;
          range = [0, 1 - _offset];
        }
        option.range = range;
      }
      return option;
    }
  }, {
    key: "createScale",
    value: function createScale(option) {
      var type = option.type;
      if (is_function_default(type)) {
        return new type(option);
      }
      var ScaleClass = getClass(type);
      return new ScaleClass(option);
    }
    // 更新或创建scale
  }, {
    key: "setScale",
    value: function setScale(field, option) {
      var options = this.options, scales = this.scales;
      options[field] = mix({}, options[field], option);
      if (scales[field]) {
        delete scales[field];
      }
    }
  }, {
    key: "create",
    value: function create3(options) {
      this.update(options);
    }
  }, {
    key: "update",
    value: function update(options) {
      var _this = this;
      if (!options)
        return;
      each_default(options, function(option, field) {
        _this.setScale(field, option);
      });
      this.scales = _objectSpread2({}, this.scales);
    }
  }, {
    key: "changeData",
    value: function changeData(data) {
      this.data = data;
      this.scales = {};
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.data;
    }
  }, {
    key: "getScale",
    value: function getScale(field) {
      var scales = this.scales, options = this.options, data = this.data;
      var scale3 = scales[field];
      if (scale3) {
        return scale3;
      }
      var option = options[field];
      if (!option) {
        return null;
      }
      var values2 = option.values ? option.values : data ? values_of_key_default(data, field) : [];
      var scaleOption = this._getOption(_objectSpread2(_objectSpread2({}, option), {}, {
        field,
        values: values2
      }));
      var newScale = this.createScale(scaleOption);
      scales[field] = newScale;
      return newScale;
    }
  }, {
    key: "getScales",
    value: function getScales() {
      var _this2 = this;
      var options = this.options, scales = this.scales;
      each_default(options, function(option, field) {
        _this2.getScale(field);
      });
      return scales;
    }
  }, {
    key: "adjustStartZero",
    value: function adjustStartZero(scale3) {
      var options = this.options;
      var field = scale3.field, min2 = scale3.min, max2 = scale3.max;
      var option = options[field];
      if (option && option.min) {
        return;
      }
      if (min2 > 0) {
        scale3.change({
          min: 0
        });
      } else if (max2 < 0) {
        scale3.change({
          max: 0
        });
      }
    }
    // 饼图下的scale调整
  }, {
    key: "adjustPieScale",
    value: function adjustPieScale(scale3) {
      var options = this.options;
      var field = scale3.field;
      var option = options[field];
      if (option && !is_nil_default(option.nice)) {
        return null;
      }
      scale3.change({
        nice: false
      });
    }
    // 获取scale 在 0点对位置的值
  }, {
    key: "getZeroValue",
    value: function getZeroValue(scale3) {
      var min2 = scale3.min, max2 = scale3.max;
      var value;
      if (min2 >= 0) {
        value = min2;
      } else if (max2 <= 0) {
        value = max2;
      } else {
        value = 0;
      }
      return scale3.scale(value);
    }
  }]);
  return ScaleController2;
}();
var scale_default = ScaleController;

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/chart/index.js
var Chart = function(_Component) {
  _inherits(Chart2, _Component);
  var _super = _createSuper(Chart2);
  function Chart2(props, context, updater) {
    var _this;
    _classCallCheck(this, Chart2);
    _this = _super.call(this, props, context, updater);
    _this.componentsPosition = [];
    var data = props.data, coordOption = props.coord, _props$scale = props.scale, scale3 = _props$scale === void 0 ? [] : _props$scale;
    _this.layoutController = new layout_default2();
    _this.coordController = new coord_default();
    _this.scaleController = new scale_default(data);
    _this.scale = _this.scaleController;
    var _assertThisInitialize = _assertThisInitialized(_this), layoutController = _assertThisInitialize.layoutController, coordController2 = _assertThisInitialize.coordController, scaleController = _assertThisInitialize.scaleController;
    var style = _this.getStyle(props, context);
    _this.layout = layoutController.create(style);
    _this.coord = coordController2.create(coordOption, _this.layout);
    scaleController.create(scale3);
    _this.data = data;
    _this.state = {
      filters: {}
    };
    return _this;
  }
  _createClass(Chart2, [{
    key: "willReceiveProps",
    value: function willReceiveProps(nextProps, context) {
      var layoutController = this.layoutController, coordController2 = this.coordController, scaleController = this.scaleController, lastProps = this.props;
      var nextStyle = nextProps.style, nextData = nextProps.data, nextScale = nextProps.scale;
      var lastStyle = lastProps.style, lastData = lastProps.data, lastScale = lastProps.scale;
      if (!equal_default(nextStyle, lastStyle) || context !== this.context) {
        var style = this.getStyle(nextProps, context);
        this.layout = layoutController.create(style);
        coordController2.updateLayout(this.layout);
      }
      if (nextData !== lastData) {
        scaleController.changeData(nextData);
      }
      if (!equal_default(nextScale, lastScale)) {
        scaleController.update(nextScale);
      }
    }
  }, {
    key: "willUpdate",
    value: function willUpdate() {
      var coordController2 = this.coordController, props = this.props;
      this.coord = coordController2.create(props.coord, this.layout);
    }
  }, {
    key: "getStyle",
    value: function getStyle2(props, context) {
      var theme = context.theme, px2hd2 = context.px2hd, left = context.left, top = context.top, width = context.width, height = context.height;
      var style = props.style;
      return px2hd2(_objectSpread2(_objectSpread2({
        left,
        top,
        width,
        height
      }, theme.chart), style));
    }
    // 给需要显示的组件留空
  }, {
    key: "layoutCoord",
    value: function layoutCoord(layout) {
      var coord = this.coord;
      var position = layout.position, boxWidth = layout.width, boxHeight = layout.height;
      var left = coord.left, top = coord.top, width = coord.width, height = coord.height;
      switch (position) {
        case "left":
          left += boxWidth;
          width = Math.max(0, width - boxWidth);
          break;
        case "right":
          width = Math.max(0, width - boxWidth);
          break;
        case "top":
          top += boxHeight;
          height = Math.max(0, height - boxHeight);
          break;
        case "bottom":
          height = Math.max(0, height - boxHeight);
          break;
      }
      coord.update({
        left,
        top,
        width,
        height
      });
    }
  }, {
    key: "resetCoordLayout",
    value: function resetCoordLayout() {
      var coord = this.coord, layout = this.layout;
      coord.update(layout);
    }
  }, {
    key: "updateCoordLayout",
    value: function updateCoordLayout(layout) {
      var _this2 = this;
      if (is_array_default(layout)) {
        layout.forEach(function(item) {
          _this2.layoutCoord(item);
        });
        return;
      }
      this.layoutCoord(layout);
    }
  }, {
    key: "updateCoordFor",
    value: function updateCoordFor(component, layout) {
      var _this3 = this;
      if (!layout)
        return;
      var componentsPosition = this.componentsPosition;
      var componentPosition = {
        component,
        layout
      };
      var existIndex = find_index_default(componentsPosition, function(item) {
        return item.component === component;
      });
      if (existIndex > -1) {
        componentsPosition.splice(existIndex, 1, componentPosition);
        this.resetCoordLayout();
        componentsPosition.forEach(function(componentPosition2) {
          var layout2 = componentPosition2.layout;
          _this3.updateCoordLayout(layout2);
        });
        return;
      }
      componentsPosition.push(componentPosition);
      this.updateCoordLayout(layout);
    }
  }, {
    key: "getGeometrys",
    value: function getGeometrys() {
      var children = this.children;
      var geometrys = [];
      children_default.toArray(children).forEach(function(element) {
        if (!element)
          return false;
        var component = element.component;
        if (component && component.isGeometry) {
          geometrys.push(component);
        }
      });
      return geometrys;
    }
    /**
     * calculate dataset's position on canvas
     * @param  {Object} record the dataset
     * @return {Object} return the position
     */
  }, {
    key: "getPosition",
    value: function getPosition2(record) {
      var coord = this.getCoord();
      var xScale = this.getXScales()[0];
      var xField = xScale.field;
      var yScales = this.getYScales();
      var yScale = yScales[0];
      var yField = yScale.field;
      for (var i = 0, len = yScales.length; i < len; i++) {
        var scale3 = yScales[i];
        var field = scale3.field;
        if (record[field]) {
          yScale = scale3;
          yField = field;
          break;
        }
      }
      var x = xScale.scale(record[xField]);
      var y = yScale.scale(record[yField]);
      return coord.convertPoint({
        x,
        y
      });
    }
  }, {
    key: "getSnapRecords",
    value: function getSnapRecords(point, inCoordRange) {
      var geometrys = this.getGeometrys();
      if (!geometrys.length)
        return;
      return geometrys[0].getSnapRecords(point, inCoordRange);
    }
  }, {
    key: "getLegendItems",
    value: function getLegendItems(point) {
      var geometrys = this.getGeometrys();
      if (!geometrys.length)
        return;
      return geometrys[0].getLegendItems(point);
    }
  }, {
    key: "setScale",
    value: function setScale(field, option) {
      this.scaleController.setScale(field, option);
    }
  }, {
    key: "getScale",
    value: function getScale(field) {
      return this.scaleController.getScale(field);
    }
  }, {
    key: "getScales",
    value: function getScales() {
      return this.scaleController.getScales();
    }
  }, {
    key: "getXScales",
    value: function getXScales() {
      var geometrys = this.getGeometrys();
      return geometrys.map(function(component) {
        return component.getXScale();
      });
    }
  }, {
    key: "getYScales",
    value: function getYScales() {
      var geometrys = this.getGeometrys();
      return geometrys.map(function(component) {
        return component.getYScale();
      });
    }
  }, {
    key: "getCoord",
    value: function getCoord() {
      return this.coord;
    }
  }, {
    key: "filter",
    value: function filter2(field, condition) {
      var filters = this.state.filters;
      this.setState({
        filters: _objectSpread2(_objectSpread2({}, filters), {}, _defineProperty({}, field, condition))
      });
    }
  }, {
    key: "_getRenderData",
    value: function _getRenderData() {
      var props = this.props, state = this.state;
      var data = props.data;
      var filters = state.filters;
      if (!filters || !Object.keys(filters).length) {
        return data;
      }
      var filteredData = data;
      each_default(filters, function(condition, field) {
        if (!condition)
          return;
        filteredData = filteredData.filter(function(record) {
          return condition(record[field], record);
        });
      });
      return filteredData;
    }
  }, {
    key: "render",
    value: function render2() {
      var _this4 = this;
      var props = this.props, layout = this.layout, coord = this.coord;
      var children = props.children, originData = props.data;
      if (!originData)
        return null;
      var data = this._getRenderData();
      return children_default.map(children, function(child) {
        return children_default.cloneElement(child, {
          chart: _this4,
          coord,
          data,
          layout
        });
      });
    }
  }]);
  return Chart2;
}(component_default);
var chart_default = Chart;

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/geometry/selection.js
function isEqual(origin1, origin2, fields) {
  if (origin1 === origin2) {
    return true;
  }
  for (var i = 0, len = fields.length; i < len; i++) {
    var field = fields[i];
    if (origin1[field] !== origin2[field]) {
      return false;
    }
  }
  return true;
}
var Selection = function(_Component) {
  _inherits(Selection2, _Component);
  var _super = _createSuper(Selection2);
  function Selection2(props, context) {
    var _this;
    _classCallCheck(this, Selection2);
    _this = _super.call(this, props, context);
    var selection = props.selection;
    if (!selection)
      return _possibleConstructorReturn(_this);
    var defaultSelected = selection.defaultSelected;
    _this.state.selected = defaultSelected;
    return _this;
  }
  _createClass(Selection2, [{
    key: "didMount",
    value: function didMount() {
      var _this2 = this;
      var props = this.props, state = this.state, container = this.container;
      var canvas = container.get("canvas");
      var selection = props.selection, chart2 = props.chart;
      if (!selection)
        return;
      var _selection$triggerOn = selection.triggerOn, triggerOn = _selection$triggerOn === void 0 ? "click" : _selection$triggerOn;
      canvas.on(triggerOn, function(ev) {
        var points = ev.points;
        var records = _this2.getSnapRecords(points[0]);
        var _selection$type = selection.type, type = _selection$type === void 0 ? "single" : _selection$type, _selection$cancelable = selection.cancelable, cancelable = _selection$cancelable === void 0 ? true : _selection$cancelable;
        if (!records || !records.length) {
          if (cancelable) {
            _this2.setState({
              selected: null
            });
          }
          return;
        }
        var selected = state.selected;
        var origins = records.map(function(record) {
          return record.origin;
        });
        if (!selected || !selected.length) {
          _this2.setState({
            selected: origins
          });
        }
        if (type === "single") {
          if (!cancelable) {
            _this2.setState({
              selected: origins
            });
            return;
          }
          var _newSelected = [];
          records.forEach(function(record) {
            if (!_this2.isSelected(record)) {
              _newSelected.push(record.origin);
            }
          });
          _this2.setState({
            selected: _newSelected
          });
          return;
        }
        var scales = chart2.getScales();
        var fields = Object.keys(scales);
        var selectedMap = {};
        selected.forEach(function(item) {
          var key = fields.map(function(field) {
            return item[field];
          }).join("-");
          selectedMap[key] = item;
        });
        records.forEach(function(record) {
          var origin = record.origin;
          var key = fields.map(function(field) {
            return origin[field];
          }).join("-");
          selectedMap[key] = selectedMap[key] ? null : origin;
        });
        var newSelected = Object.keys(selectedMap).map(function(key) {
          return selectedMap[key];
        }).filter(Boolean);
        _this2.setState({
          selected: newSelected
        });
      });
    }
  }, {
    key: "willReceiveProps",
    value: function willReceiveProps(nextProps) {
      var nextSelection = nextProps.selection;
      var lastSelection = this.props.selection;
      if (!nextSelection || !lastSelection) {
        return;
      }
      var nextDefaultSelected = nextSelection.defaultSelected;
      var lastDefaultSelected = lastSelection.defaultSelected;
      if (!equal_default(nextDefaultSelected, lastDefaultSelected)) {
        this.state.selected = nextDefaultSelected;
      }
    }
  }, {
    key: "getSnapRecords",
    value: function getSnapRecords(_point) {
      return null;
    }
  }, {
    key: "isSelected",
    value: function isSelected(record) {
      var state = this.state, props = this.props;
      var selected = state.selected;
      if (!selected || !selected.length) {
        return false;
      }
      var chart2 = props.chart;
      var scales = chart2.getScales();
      var fields = Object.keys(scales);
      for (var i = 0, len = selected.length; i < len; i++) {
        var item = selected[i];
        if (isEqual(record.origin, item, fields)) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: "getSelectionStyle",
    value: function getSelectionStyle(record) {
      var state = this.state, props = this.props;
      var selected = state.selected;
      if (!selected || !selected.length) {
        return null;
      }
      var selection = props.selection;
      var selectedStyle = selection.selectedStyle, unSelectedStyle = selection.unSelectedStyle;
      var isSelected = this.isSelected(record);
      if (isSelected) {
        return is_function_default(selectedStyle) ? selectedStyle(record) : selectedStyle;
      }
      return is_function_default(unSelectedStyle) ? unSelectedStyle(record) : unSelectedStyle;
    }
  }]);
  return Selection2;
}(component_default);
var selection_default = Selection;

// node_modules/.pnpm/@antv+adjust@0.2.5/node_modules/@antv/adjust/esm/constant.js
var DEFAULT_Y = 0;
var MARGIN_RATIO = 1 / 2;
var DODGE_RATIO = 1 / 2;
var GAP = 0.05;

// node_modules/.pnpm/@antv+adjust@0.2.5/node_modules/@antv/adjust/esm/adjusts/adjust.js
var Adjust = (
  /** @class */
  function() {
    function Adjust2(cfg) {
      var xField = cfg.xField, yField = cfg.yField, _a = cfg.adjustNames, adjustNames = _a === void 0 ? ["x", "y"] : _a, dimValuesMap = cfg.dimValuesMap;
      this.adjustNames = adjustNames;
      this.xField = xField;
      this.yField = yField;
      this.dimValuesMap = dimValuesMap;
    }
    Adjust2.prototype.isAdjust = function(dim2) {
      return this.adjustNames.indexOf(dim2) >= 0;
    };
    Adjust2.prototype.getAdjustRange = function(dim2, dimValue, values2) {
      var yField = this.yField;
      var index = values2.indexOf(dimValue);
      var length2 = values2.length;
      var pre;
      var next;
      if (!yField && this.isAdjust("y")) {
        pre = 0;
        next = 1;
      } else if (length2 > 1) {
        pre = values2[index === 0 ? 0 : index - 1];
        next = values2[index === length2 - 1 ? length2 - 1 : index + 1];
        if (index !== 0) {
          pre += (dimValue - pre) / 2;
        } else {
          pre -= (next - dimValue) / 2;
        }
        if (index !== length2 - 1) {
          next -= (next - dimValue) / 2;
        } else {
          next += (dimValue - values2[length2 - 2]) / 2;
        }
      } else {
        pre = dimValue === 0 ? 0 : dimValue - 0.5;
        next = dimValue === 0 ? 1 : dimValue + 0.5;
      }
      return {
        pre,
        next
      };
    };
    Adjust2.prototype.adjustData = function(groupedDataArray, mergedData) {
      var _this = this;
      var dimValuesMap = this.getDimValues(mergedData);
      each_default(groupedDataArray, function(dataArray, index) {
        each_default(dimValuesMap, function(values2, dim2) {
          _this.adjustDim(dim2, values2, dataArray, index);
        });
      });
    };
    Adjust2.prototype.groupData = function(data, dim2) {
      each_default(data, function(record) {
        if (record[dim2] === void 0) {
          record[dim2] = DEFAULT_Y;
        }
      });
      return group_by_default(data, dim2);
    };
    Adjust2.prototype.adjustDim = function(dim2, values2, data, index) {
    };
    Adjust2.prototype.getDimValues = function(mergedData) {
      var _a = this, xField = _a.xField, yField = _a.yField;
      var dimValuesMap = mix({}, this.dimValuesMap);
      var dims = [];
      if (xField && this.isAdjust("x")) {
        dims.push(xField);
      }
      if (yField && this.isAdjust("y")) {
        dims.push(yField);
      }
      dims.forEach(function(dim3) {
        if (dimValuesMap && dimValuesMap[dim3]) {
          return;
        }
        dimValuesMap[dim3] = values_of_key_default(mergedData, dim3).sort(function(v1, v2) {
          return v1 - v2;
        });
      });
      if (!yField && this.isAdjust("y")) {
        var dim2 = "y";
        dimValuesMap[dim2] = [DEFAULT_Y, 1];
      }
      return dimValuesMap;
    };
    return Adjust2;
  }()
);
var adjust_default = Adjust;

// node_modules/.pnpm/@antv+adjust@0.2.5/node_modules/@antv/adjust/esm/factory.js
var ADJUST_MAP = {};
var getAdjust = function(type) {
  return ADJUST_MAP[type.toLowerCase()];
};
var registerAdjust = function(type, ctor) {
  if (getAdjust(type)) {
    throw new Error("Adjust type '" + type + "' existed.");
  }
  ADJUST_MAP[type.toLowerCase()] = ctor;
};

// node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (b2.hasOwnProperty(p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends2(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign2 = function() {
  __assign2 = Object.assign || function __assign3(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};

// node_modules/.pnpm/@antv+adjust@0.2.5/node_modules/@antv/adjust/esm/adjusts/dodge.js
var Dodge = (
  /** @class */
  function(_super) {
    __extends2(Dodge2, _super);
    function Dodge2(cfg) {
      var _this = _super.call(this, cfg) || this;
      _this.cacheMap = {};
      _this.adjustDataArray = [];
      _this.mergeData = [];
      var _a = cfg.marginRatio, marginRatio = _a === void 0 ? MARGIN_RATIO : _a, _b = cfg.dodgeRatio, dodgeRatio = _b === void 0 ? DODGE_RATIO : _b, dodgeBy = cfg.dodgeBy, intervalPadding = cfg.intervalPadding, dodgePadding = cfg.dodgePadding, xDimensionLength = cfg.xDimensionLength, groupNum = cfg.groupNum, defaultSize = cfg.defaultSize, maxColumnWidth = cfg.maxColumnWidth, minColumnWidth = cfg.minColumnWidth, columnWidthRatio = cfg.columnWidthRatio, customOffset = cfg.customOffset;
      _this.marginRatio = marginRatio;
      _this.dodgeRatio = dodgeRatio;
      _this.dodgeBy = dodgeBy;
      _this.intervalPadding = intervalPadding;
      _this.dodgePadding = dodgePadding;
      _this.xDimensionLegenth = xDimensionLength;
      _this.groupNum = groupNum;
      _this.defaultSize = defaultSize;
      _this.maxColumnWidth = maxColumnWidth;
      _this.minColumnWidth = minColumnWidth;
      _this.columnWidthRatio = columnWidthRatio;
      _this.customOffset = customOffset;
      return _this;
    }
    Dodge2.prototype.process = function(groupDataArray) {
      var groupedDataArray = clone_default(groupDataArray);
      var mergeData = flatten_default(groupedDataArray);
      var dodgeBy = this.dodgeBy;
      var adjustDataArray = dodgeBy ? group_default(mergeData, dodgeBy) : groupedDataArray;
      this.cacheMap = {};
      this.adjustDataArray = adjustDataArray;
      this.mergeData = mergeData;
      this.adjustData(adjustDataArray, mergeData);
      this.adjustDataArray = [];
      this.mergeData = [];
      return groupedDataArray;
    };
    Dodge2.prototype.adjustDim = function(dim2, values2, data, frameIndex) {
      var _this = this;
      var customOffset = this.customOffset;
      var map5 = this.getDistribution(dim2);
      var groupData = this.groupData(data, dim2);
      each_default(groupData, function(group, key) {
        var range;
        if (values2.length === 1) {
          range = {
            pre: values2[0] - 1,
            next: values2[0] + 1
          };
        } else {
          range = _this.getAdjustRange(dim2, parseFloat(key), values2);
        }
        each_default(group, function(d) {
          var value = d[dim2];
          var valueArr = map5[value];
          var valIndex = valueArr.indexOf(frameIndex);
          if (!is_nil_default(customOffset)) {
            var pre = range.pre, next = range.next;
            d[dim2] = is_function_default(customOffset) ? customOffset(d, range) : (pre + next) / 2 + customOffset;
          } else {
            d[dim2] = _this.getDodgeOffset(range, valIndex, valueArr.length);
          }
        });
      });
      return [];
    };
    Dodge2.prototype.getDodgeOffset = function(range, idx, len) {
      var _a = this, dodgeRatio = _a.dodgeRatio, marginRatio = _a.marginRatio, intervalPadding = _a.intervalPadding, dodgePadding = _a.dodgePadding;
      var pre = range.pre, next = range.next;
      var tickLength = next - pre;
      var position;
      if (!is_nil_default(intervalPadding) && is_nil_default(dodgePadding) && intervalPadding >= 0) {
        var offset = this.getIntervalOnlyOffset(len, idx);
        position = pre + offset;
      } else if (!is_nil_default(dodgePadding) && is_nil_default(intervalPadding) && dodgePadding >= 0) {
        var offset = this.getDodgeOnlyOffset(len, idx);
        position = pre + offset;
      } else if (!is_nil_default(intervalPadding) && !is_nil_default(dodgePadding) && intervalPadding >= 0 && dodgePadding >= 0) {
        var offset = this.getIntervalAndDodgeOffset(len, idx);
        position = pre + offset;
      } else {
        var width = tickLength * dodgeRatio / len;
        var margin = marginRatio * width;
        var offset = 1 / 2 * (tickLength - len * width - (len - 1) * margin) + ((idx + 1) * width + idx * margin) - 1 / 2 * width - 1 / 2 * tickLength;
        position = (pre + next) / 2 + offset;
      }
      return position;
    };
    Dodge2.prototype.getIntervalOnlyOffset = function(len, idx) {
      var _a = this, defaultSize = _a.defaultSize, intervalPadding = _a.intervalPadding, xDimensionLegenth = _a.xDimensionLegenth, groupNum = _a.groupNum, dodgeRatio = _a.dodgeRatio, maxColumnWidth = _a.maxColumnWidth, minColumnWidth = _a.minColumnWidth, columnWidthRatio = _a.columnWidthRatio;
      var normalizedIntervalPadding = intervalPadding / xDimensionLegenth;
      var normalizedDodgePadding = (1 - (groupNum - 1) * normalizedIntervalPadding) / groupNum * dodgeRatio / (len - 1);
      var geomWidth = ((1 - normalizedIntervalPadding * (groupNum - 1)) / groupNum - normalizedDodgePadding * (len - 1)) / len;
      geomWidth = !is_nil_default(columnWidthRatio) ? 1 / groupNum / len * columnWidthRatio : geomWidth;
      if (!is_nil_default(maxColumnWidth)) {
        var normalizedMaxWidht = maxColumnWidth / xDimensionLegenth;
        geomWidth = Math.min(geomWidth, normalizedMaxWidht);
      }
      if (!is_nil_default(minColumnWidth)) {
        var normalizedMinWidht = minColumnWidth / xDimensionLegenth;
        geomWidth = Math.max(geomWidth, normalizedMinWidht);
      }
      geomWidth = defaultSize ? defaultSize / xDimensionLegenth : geomWidth;
      normalizedDodgePadding = ((1 - (groupNum - 1) * normalizedIntervalPadding) / groupNum - len * geomWidth) / (len - 1);
      var offset = ((1 / 2 + idx) * geomWidth + idx * normalizedDodgePadding + 1 / 2 * normalizedIntervalPadding) * groupNum - normalizedIntervalPadding / 2;
      return offset;
    };
    Dodge2.prototype.getDodgeOnlyOffset = function(len, idx) {
      var _a = this, defaultSize = _a.defaultSize, dodgePadding = _a.dodgePadding, xDimensionLegenth = _a.xDimensionLegenth, groupNum = _a.groupNum, marginRatio = _a.marginRatio, maxColumnWidth = _a.maxColumnWidth, minColumnWidth = _a.minColumnWidth, columnWidthRatio = _a.columnWidthRatio;
      var normalizedDodgePadding = dodgePadding / xDimensionLegenth;
      var normalizedIntervalPadding = 1 * marginRatio / (groupNum - 1);
      var geomWidth = ((1 - normalizedIntervalPadding * (groupNum - 1)) / groupNum - normalizedDodgePadding * (len - 1)) / len;
      geomWidth = columnWidthRatio ? 1 / groupNum / len * columnWidthRatio : geomWidth;
      if (!is_nil_default(maxColumnWidth)) {
        var normalizedMaxWidht = maxColumnWidth / xDimensionLegenth;
        geomWidth = Math.min(geomWidth, normalizedMaxWidht);
      }
      if (!is_nil_default(minColumnWidth)) {
        var normalizedMinWidht = minColumnWidth / xDimensionLegenth;
        geomWidth = Math.max(geomWidth, normalizedMinWidht);
      }
      geomWidth = defaultSize ? defaultSize / xDimensionLegenth : geomWidth;
      normalizedIntervalPadding = (1 - (geomWidth * len + normalizedDodgePadding * (len - 1)) * groupNum) / (groupNum - 1);
      var offset = ((1 / 2 + idx) * geomWidth + idx * normalizedDodgePadding + 1 / 2 * normalizedIntervalPadding) * groupNum - normalizedIntervalPadding / 2;
      return offset;
    };
    Dodge2.prototype.getIntervalAndDodgeOffset = function(len, idx) {
      var _a = this, intervalPadding = _a.intervalPadding, dodgePadding = _a.dodgePadding, xDimensionLegenth = _a.xDimensionLegenth, groupNum = _a.groupNum;
      var normalizedIntervalPadding = intervalPadding / xDimensionLegenth;
      var normalizedDodgePadding = dodgePadding / xDimensionLegenth;
      var geomWidth = ((1 - normalizedIntervalPadding * (groupNum - 1)) / groupNum - normalizedDodgePadding * (len - 1)) / len;
      var offset = ((1 / 2 + idx) * geomWidth + idx * normalizedDodgePadding + 1 / 2 * normalizedIntervalPadding) * groupNum - normalizedIntervalPadding / 2;
      return offset;
    };
    Dodge2.prototype.getDistribution = function(dim2) {
      var groupedDataArray = this.adjustDataArray;
      var cacheMap = this.cacheMap;
      var map5 = cacheMap[dim2];
      if (!map5) {
        map5 = {};
        each_default(groupedDataArray, function(data, index) {
          var values2 = values_of_key_default(data, dim2);
          if (!values2.length) {
            values2.push(0);
          }
          each_default(values2, function(val) {
            if (!map5[val]) {
              map5[val] = [];
            }
            map5[val].push(index);
          });
        });
        cacheMap[dim2] = map5;
      }
      return map5;
    };
    return Dodge2;
  }(adjust_default)
);
var dodge_default = Dodge;

// node_modules/.pnpm/@antv+adjust@0.2.5/node_modules/@antv/adjust/esm/adjusts/jitter.js
function randomNumber(min2, max2) {
  return (max2 - min2) * Math.random() + min2;
}
var Jitter = (
  /** @class */
  function(_super) {
    __extends2(Jitter2, _super);
    function Jitter2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    Jitter2.prototype.process = function(groupDataArray) {
      var groupedDataArray = clone_default(groupDataArray);
      var mergeData = flatten_default(groupedDataArray);
      this.adjustData(groupedDataArray, mergeData);
      return groupedDataArray;
    };
    Jitter2.prototype.adjustDim = function(dim2, values2, dataArray) {
      var _this = this;
      var groupDataArray = this.groupData(dataArray, dim2);
      return each_default(groupDataArray, function(data, dimValue) {
        return _this.adjustGroup(data, dim2, parseFloat(dimValue), values2);
      });
    };
    Jitter2.prototype.getAdjustOffset = function(range) {
      var pre = range.pre, next = range.next;
      var margin = (next - pre) * GAP;
      return randomNumber(pre + margin, next - margin);
    };
    Jitter2.prototype.adjustGroup = function(group, dim2, dimValue, values2) {
      var _this = this;
      var range = this.getAdjustRange(dim2, dimValue, values2);
      each_default(group, function(data) {
        data[dim2] = _this.getAdjustOffset(range);
      });
      return group;
    };
    return Jitter2;
  }(adjust_default)
);
var jitter_default = Jitter;

// node_modules/.pnpm/@antv+adjust@0.2.5/node_modules/@antv/adjust/esm/adjusts/stack.js
var Cache = cache_default;
var Stack = (
  /** @class */
  function(_super) {
    __extends2(Stack2, _super);
    function Stack2(cfg) {
      var _this = _super.call(this, cfg) || this;
      var _a = cfg.adjustNames, adjustNames = _a === void 0 ? ["y"] : _a, _b = cfg.height, height = _b === void 0 ? NaN : _b, _c = cfg.size, size2 = _c === void 0 ? 10 : _c, _d = cfg.reverseOrder, reverseOrder = _d === void 0 ? false : _d;
      _this.adjustNames = adjustNames;
      _this.height = height;
      _this.size = size2;
      _this.reverseOrder = reverseOrder;
      return _this;
    }
    Stack2.prototype.process = function(groupDataArray) {
      var _a = this, yField = _a.yField, reverseOrder = _a.reverseOrder;
      var d = yField ? this.processStack(groupDataArray) : this.processOneDimStack(groupDataArray);
      return reverseOrder ? this.reverse(d) : d;
    };
    Stack2.prototype.reverse = function(groupedDataArray) {
      return groupedDataArray.slice(0).reverse();
    };
    Stack2.prototype.processStack = function(groupDataArray) {
      var _a = this, xField = _a.xField, yField = _a.yField, reverseOrder = _a.reverseOrder;
      var groupedDataArray = reverseOrder ? this.reverse(groupDataArray) : groupDataArray;
      var positive = new Cache();
      var negative = new Cache();
      return groupedDataArray.map(function(dataArray) {
        return dataArray.map(function(data) {
          var _a2;
          var x = get_default(data, xField, 0);
          var y = get_default(data, [yField]);
          var xKey = x.toString();
          y = is_array_default(y) ? y[1] : y;
          if (!is_nil_default(y)) {
            var cache = y >= 0 ? positive : negative;
            if (!cache.has(xKey)) {
              cache.set(xKey, 0);
            }
            var xValue = cache.get(xKey);
            var newXValue = y + xValue;
            cache.set(xKey, newXValue);
            return __assign2(__assign2({}, data), (_a2 = {}, _a2[yField] = [xValue, newXValue], _a2));
          }
          return data;
        });
      });
    };
    Stack2.prototype.processOneDimStack = function(groupDataArray) {
      var _this = this;
      var _a = this, xField = _a.xField, height = _a.height, reverseOrder = _a.reverseOrder;
      var yField = "y";
      var groupedDataArray = reverseOrder ? this.reverse(groupDataArray) : groupDataArray;
      var cache = new Cache();
      return groupedDataArray.map(function(dataArray) {
        return dataArray.map(function(data) {
          var _a2;
          var size2 = _this.size;
          var xValue = data[xField];
          var stackHeight = size2 * 2 / height;
          if (!cache.has(xValue)) {
            cache.set(xValue, stackHeight / 2);
          }
          var stackValue = cache.get(xValue);
          cache.set(xValue, stackValue + stackHeight);
          return __assign2(__assign2({}, data), (_a2 = {}, _a2[yField] = stackValue, _a2));
        });
      });
    };
    return Stack2;
  }(adjust_default)
);
var stack_default = Stack;

// node_modules/.pnpm/@antv+adjust@0.2.5/node_modules/@antv/adjust/esm/adjusts/symmetric.js
var Symmetric = (
  /** @class */
  function(_super) {
    __extends2(Symmetric2, _super);
    function Symmetric2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    Symmetric2.prototype.process = function(groupDataArray) {
      var mergeData = flatten_default(groupDataArray);
      var _a = this, xField = _a.xField, yField = _a.yField;
      var cache = this.getXValuesMaxMap(mergeData);
      var max2 = Math.max.apply(Math, Object.keys(cache).map(function(key) {
        return cache[key];
      }));
      return map_default(groupDataArray, function(dataArray) {
        return map_default(dataArray, function(data) {
          var _a2, _b;
          var yValue = data[yField];
          var xValue = data[xField];
          if (is_array_default(yValue)) {
            var off_1 = (max2 - cache[xValue]) / 2;
            return __assign2(__assign2({}, data), (_a2 = {}, _a2[yField] = map_default(yValue, function(y) {
              return off_1 + y;
            }), _a2));
          }
          var offset = (max2 - yValue) / 2;
          return __assign2(__assign2({}, data), (_b = {}, _b[yField] = [offset, yValue + offset], _b));
        });
      });
    };
    Symmetric2.prototype.getXValuesMaxMap = function(mergeData) {
      var _this = this;
      var _a = this, xField = _a.xField, yField = _a.yField;
      var groupDataArray = group_by_default(mergeData, function(data) {
        return data[xField];
      });
      return map_values_default(groupDataArray, function(dataArray) {
        return _this.getDimMaxValue(dataArray, yField);
      });
    };
    Symmetric2.prototype.getDimMaxValue = function(mergeData, dim2) {
      var dimValues = map_default(mergeData, function(data) {
        return get_default(data, dim2, []);
      });
      var flattenValues = flatten_default(dimValues);
      return Math.max.apply(Math, flattenValues);
    };
    return Symmetric2;
  }(adjust_default)
);
var symmetric_default = Symmetric;

// node_modules/.pnpm/@antv+adjust@0.2.5/node_modules/@antv/adjust/esm/index.js
registerAdjust("Dodge", dodge_default);
registerAdjust("Jitter", jitter_default);
registerAdjust("Stack", stack_default);
registerAdjust("Symmetric", symmetric_default);

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/attr/index.js
var attr_exports = {};
__export(attr_exports, {
  Attr: () => base_default5,
  Category: () => category_default,
  Identity: () => identity_default3,
  Linear: () => linear_default2
});

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/attr/base.js
var Base2 = function() {
  function Base3(options) {
    _classCallCheck(this, Base3);
    mix(this, options);
    var scale3 = this.scale, field = this.field, data = this.data;
    if (!scale3 && data) {
      var values2 = values_of_key_default(data, field);
      this.scale = this.createScale({
        values: values2,
        field
      });
    }
  }
  _createClass(Base3, [{
    key: "createScale",
    value: function createScale(_scaleConfig) {
      return null;
    }
    // 数据映射方法
  }, {
    key: "_mapping",
    value: function _mapping(value) {
      return value;
    }
  }, {
    key: "update",
    value: function update(options) {
      mix(this, options);
    }
  }, {
    key: "setRange",
    value: function setRange(range) {
      this.range = range;
    }
    // 归一化，参数是原始数据，返回是归一化的数据
  }, {
    key: "normalize",
    value: function normalize2(value) {
      var scale3 = this.scale;
      if (is_array_default(value)) {
        return value.map(function(v) {
          return scale3.scale(v);
        });
      }
      return scale3.scale(value);
    }
    // convert 参数是归一化的数据，返回定义域的值
  }, {
    key: "convert",
    value: function convert(value) {
      return value;
    }
    // 等于 normalize + convert， 参数是原始数据，返回是定义域的值
  }, {
    key: "mapping",
    value: function mapping(value) {
      var child = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      var rst = is_function_default(this.callback) ? this.callback(value, child) : null;
      if (!is_nil_default(rst)) {
        return rst;
      }
      return this._mapping(value);
    }
  }]);
  return Base3;
}();
var base_default5 = Base2;

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/attr/linear.js
var Linear2 = function(_Base) {
  _inherits(Linear4, _Base);
  var _super = _createSuper(Linear4);
  function Linear4(options) {
    var _this;
    _classCallCheck(this, Linear4);
    _this = _super.call(this, options);
    _this._updateInterpolate();
    return _this;
  }
  _createClass(Linear4, [{
    key: "createScale",
    value: function createScale(scaleConfig) {
      return new linear_default(scaleConfig);
    }
  }, {
    key: "_updateInterpolate",
    value: function _updateInterpolate() {
      var _this$range = _slicedToArray(this.range, 2), min2 = _this$range[0], max2 = _this$range[1];
      this.interpolate = value_default(min2, max2);
    }
  }, {
    key: "update",
    value: function update(options) {
      _get(_getPrototypeOf(Linear4.prototype), "update", this).call(this, options);
      this._updateInterpolate();
    }
  }, {
    key: "_mapping",
    value: function _mapping(value) {
      var scale3 = this.scale, interpolate = this.interpolate;
      if (is_array_default(value)) {
        return value.map(function(v) {
          return interpolate(scale3.scale(v));
        });
      }
      return interpolate(scale3.scale(value));
    }
  }, {
    key: "normalize",
    value: function normalize2(value) {
      var scale3 = this.scale;
      if (is_array_default(value)) {
        return value.map(function(v) {
          return scale3.scale(v);
        });
      }
      return scale3.scale(value);
    }
  }, {
    key: "convert",
    value: function convert(value) {
      var range = this.range;
      var _range = _slicedToArray(range, 2), min2 = _range[0], max2 = _range[1];
      if (is_array_default(value)) {
        return value.map(function(v) {
          return min2 + (max2 - min2) * v;
        });
      }
      return min2 + (max2 - min2) * value;
    }
  }]);
  return Linear4;
}(base_default5);
var linear_default2 = Linear2;

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/attr/category.js
var Category2 = function(_Base) {
  _inherits(Category4, _Base);
  var _super = _createSuper(Category4);
  function Category4() {
    _classCallCheck(this, Category4);
    return _super.apply(this, arguments);
  }
  _createClass(Category4, [{
    key: "createScale",
    value: function createScale(scaleConfig) {
      return new base_default3(scaleConfig);
    }
  }, {
    key: "_mapping",
    value: function _mapping(value) {
      var scale3 = this.scale, range = this.range;
      if (scale3.type === "cat") {
        var _index = scale3.translate(value);
        return range[_index % range.length];
      }
      var normalizeValue = scale3.scale(value);
      var index = Math.round(normalizeValue * (range.length - 1));
      return range[index];
    }
  }]);
  return Category4;
}(base_default5);
var category_default = Category2;

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/attr/identity.js
var Identity2 = function(_Base) {
  _inherits(Identity4, _Base);
  var _super = _createSuper(Identity4);
  function Identity4() {
    _classCallCheck(this, Identity4);
    return _super.apply(this, arguments);
  }
  _createClass(Identity4, [{
    key: "createScale",
    value: function createScale(scaleConfig) {
      return new identity_default2(scaleConfig);
    }
  }, {
    key: "_mapping",
    value: function _mapping() {
      var field = this.field, range = this.range;
      return field || range && range[0];
    }
  }]);
  return Identity4;
}(base_default5);
var identity_default3 = Identity2;

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/controller/attr.js
var Identity3 = identity_default3;
var Linear3 = linear_default2;
var Category3 = category_default;
var ATTRS = ["x", "y", "color", "size", "shape"];
var GROUP_ATTRS = ["color", "size", "shape"];
function cloneScale(scale3, scaleConfig) {
  return new scale3.constructor(_objectSpread2(_objectSpread2({}, scale3.__cfg__), scaleConfig));
}
var AttrController = function() {
  function AttrController2(scaleController, attrsRange) {
    _classCallCheck(this, AttrController2);
    this.scaleController = scaleController;
    this.attrsRange = attrsRange;
    this.options = {};
    this.attrs = {};
  }
  _createClass(AttrController2, [{
    key: "parseOption",
    value: function parseOption(option, attrName) {
      if (!option) {
        return {
          type: "identity"
        };
      }
      if (is_string_default(option)) {
        return {
          field: option,
          type: "category"
        };
      }
      if (is_number_default(option)) {
        if (attrName === "size") {
          return {
            type: "identity",
            field: option
          };
        }
      }
      if (is_array_default(option)) {
        return {
          field: option[0],
          range: option[1]
        };
      }
      return option;
    }
  }, {
    key: "getAttrOptions",
    value: function getAttrOptions(props, justifyContentCenter) {
      var _this = this;
      if (!props.x || !props.y) {
        throw new Error("x, y are required !");
      }
      var options = {};
      var ranges = this.attrsRange;
      ATTRS.forEach(function(attrName) {
        if (!props[attrName])
          return;
        var option = _this.parseOption(props[attrName], attrName);
        if (!option.range) {
          option.range = ranges[attrName];
        }
        options[attrName] = option;
      });
      var x = options.x, y = options.y;
      x.justifyContent = justifyContentCenter;
      x.type = Linear3;
      y.type = Linear3;
      return options;
    }
  }, {
    key: "getDefaultAttrValues",
    value: function getDefaultAttrValues() {
      var _this$attrsRange = this.attrsRange, color2 = _this$attrsRange.color, shape = _this$attrsRange.shape;
      return {
        color: color2[0],
        shape: shape && shape[0]
      };
    }
  }, {
    key: "getGroupScales",
    value: function getGroupScales() {
      var attrs = this.attrs;
      var scales = [];
      each_default(GROUP_ATTRS, function(attrName) {
        var attr = attrs[attrName];
        if (!attr) {
          return;
        }
        var scale3 = attr.scale;
        if (scale3 && scale3.isCategory && scales.indexOf(scale3) === -1) {
          scales.push(scale3);
        }
      });
      return scales;
    }
  }, {
    key: "createAttr",
    value: function createAttr(option) {
      var type = option.type, field = option.field, scaleConfig = option.scale;
      if (is_nil_default(field) || type === Identity3) {
        return new Identity3(option);
      }
      var scale3 = this.scaleController.getScale(field);
      var attrOption = _objectSpread2(_objectSpread2({}, option), {}, {
        data: this.scaleController.getData(),
        // scaleConfig 只在属性映射中生效
        scale: scaleConfig ? cloneScale(scale3, scaleConfig) : scale3
      });
      if (scale3 && scale3.type === "identity") {
        return new Identity3(attrOption);
      }
      var AttrConstructor = scale3.isLinear ? Linear3 : Category3;
      if (is_function_default(type)) {
        AttrConstructor = type;
      }
      if (is_string_default(type) && attr_exports[upper_first_default(type)]) {
        AttrConstructor = attr_exports[upper_first_default(type)];
      }
      return new AttrConstructor(attrOption);
    }
  }, {
    key: "create",
    value: function create3(options) {
      this.update(options);
    }
  }, {
    key: "update",
    value: function update(nextOptions) {
      var scaleController = this.scaleController, lastOptions = this.options, lastAttrs = this.attrs;
      var nextAttrs = {};
      each_default(nextOptions, function(nextOption, attrName) {
        var lastOption = lastOptions[attrName];
        if (equal_default(nextOption, lastOption)) {
          nextAttrs[attrName] = lastAttrs[attrName];
        }
        var field = nextOption.field, justifyContent = nextOption.justifyContent;
        if (field) {
          scaleController.setScale(field, {
            justifyContent
          });
        }
      });
      this.options = nextOptions;
      this.attrs = nextAttrs;
    }
  }, {
    key: "getAttr",
    value: function getAttr(attrName) {
      var attrs = this.attrs, options = this.options;
      var attr = attrs[attrName];
      if (attr) {
        return attr;
      }
      var option = options[attrName];
      if (!option) {
        return null;
      }
      var newAttr = this.createAttr(option);
      attrs[attrName] = newAttr;
      return newAttr;
    }
  }, {
    key: "getAttrs",
    value: function getAttrs() {
      var _this2 = this;
      var options = this.options, attrs = this.attrs;
      each_default(options, function(option, attrName) {
        _this2.getAttr(attrName);
      });
      return attrs;
    }
  }, {
    key: "isGroupAttr",
    value: function isGroupAttr(attrName) {
      return GROUP_ATTRS.indexOf(attrName) !== -1;
    }
  }, {
    key: "getAttrsByLinear",
    value: function getAttrsByLinear() {
      var attrs = this.attrs;
      var attrNames = Object.keys(attrs);
      var linearAttrs = [];
      var nonlinearAttrs = [];
      attrNames.forEach(function(attrName) {
        if (attrName === "x" || attrName === "y") {
          linearAttrs.push(attrName);
          return;
        }
        var scale3 = attrs[attrName].scale;
        if (scale3 && scale3.type === "linear") {
          linearAttrs.push(attrName);
        } else {
          nonlinearAttrs.push(attrName);
        }
      });
      return {
        linearAttrs,
        nonlinearAttrs
      };
    }
  }]);
  return AttrController2;
}();
var attr_default = AttrController;

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/geometry/index.js
var _excluded7 = ["field"];
var FIELD_ORIGIN = "origin";
var Geometry = function(_Selection) {
  _inherits(Geometry2, _Selection);
  var _super = _createSuper(Geometry2);
  function Geometry2(props, context) {
    var _this;
    _classCallCheck(this, Geometry2);
    _this = _super.call(this, props, context);
    _this.isGeometry = true;
    _this.justifyContent = false;
    _this.startOnZero = false;
    _this.connectNulls = false;
    _this.sortable = false;
    mix(_assertThisInitialized(_this), _this.getDefaultCfg());
    var chart2 = props.chart, coord = props.coord;
    var attrsRange = _this._getThemeAttrsRange();
    _this.attrController = new attr_default(chart2.scale, attrsRange);
    var _assertThisInitialize = _assertThisInitialized(_this), attrController = _assertThisInitialize.attrController, justifyContent = _assertThisInitialize.justifyContent;
    var attrOptions = attrController.getAttrOptions(props, !coord.isCyclic() || justifyContent);
    attrController.create(attrOptions);
    return _this;
  }
  _createClass(Geometry2, [{
    key: "getDefaultCfg",
    value: function getDefaultCfg() {
      return {};
    }
  }, {
    key: "willReceiveProps",
    value: function willReceiveProps(nextProps) {
      _get(_getPrototypeOf(Geometry2.prototype), "willReceiveProps", this).call(this, nextProps);
      var lastProps = this.props, attrController = this.attrController, justifyContent = this.justifyContent;
      var nextData = nextProps.data, nextAdjust = nextProps.adjust, nextZoomRange = nextProps.zoomRange, coord = nextProps.coord;
      var lastData = lastProps.data, lastAdjust = lastProps.adjust, lastZoomRange = lastProps.zoomRange;
      var justifyContentCenter = !coord.isCyclic() || justifyContent;
      var nextAttrOptions = attrController.getAttrOptions(nextProps, justifyContentCenter);
      var lastAttrOptions = attrController.getAttrOptions(lastProps, justifyContentCenter);
      if (!equal_default(nextAttrOptions, lastAttrOptions)) {
        attrController.update(nextAttrOptions);
        this.records = null;
      }
      if (nextData !== lastData) {
        this.records = null;
      }
      if (nextAdjust !== lastAdjust) {
        this.records = null;
      }
      if (!equal_default(nextZoomRange, lastZoomRange)) {
        this.records = null;
      }
    }
  }, {
    key: "willMount",
    value: function willMount() {
      this._createAttrs();
      if (!this.records) {
        this._processData();
      }
    }
  }, {
    key: "willUpdate",
    value: function willUpdate() {
      this._createAttrs();
      if (!this.records) {
        this._processData();
      }
    }
  }, {
    key: "didMount",
    value: function didMount() {
      _get(_getPrototypeOf(Geometry2.prototype), "didMount", this).call(this);
      this._initEvent();
    }
  }, {
    key: "_createAttrs",
    value: function _createAttrs() {
      var attrController = this.attrController;
      attrController.attrs = {};
      this.attrs = attrController.getAttrs();
    }
  }, {
    key: "_getThemeAttrsRange",
    value: function _getThemeAttrsRange() {
      var context = this.context, props = this.props, geomType = this.geomType;
      var coord = props.coord;
      var theme = context.theme;
      var colors = theme.colors, sizes = theme.sizes, shapes = theme.shapes;
      return {
        x: coord.x,
        y: coord.y,
        color: colors,
        size: sizes,
        shape: shapes[geomType]
      };
    }
  }, {
    key: "_adjustScales",
    value: function _adjustScales() {
      var attrs = this.attrs, props = this.props, defaultStartOnZero = this.startOnZero;
      var chart2 = props.chart, _props$startOnZero = props.startOnZero, startOnZero = _props$startOnZero === void 0 ? defaultStartOnZero : _props$startOnZero, coord = props.coord, adjust = props.adjust;
      var isPolar2 = coord.isPolar, transposed = coord.transposed;
      var y = attrs.y;
      var yField = y.field;
      if (startOnZero) {
        var _y = attrs.y;
        chart2.scale.adjustStartZero(_y.scale);
      }
      if (isPolar2 && transposed && (adjust === "stack" || (adjust === null || adjust === void 0 ? void 0 : adjust.type) === "stack")) {
        var _y2 = attrs.y;
        chart2.scale.adjustPieScale(_y2.scale);
      }
      if (adjust === "stack" || (adjust === null || adjust === void 0 ? void 0 : adjust.type) === "stack") {
        this._updateStackRange(yField, y.scale, this.dataArray);
      }
    }
  }, {
    key: "_groupData",
    value: function _groupData(data) {
      var attrController = this.attrController;
      var groupScales = attrController.getGroupScales();
      if (!groupScales.length) {
        return [{
          children: data
        }];
      }
      var names = [];
      groupScales.forEach(function(scale3) {
        var field = scale3.field;
        names.push(field);
      });
      var groups = groupToMap(data, names);
      var records = [];
      for (var key in groups) {
        records.push({
          key: key.replace(/^_/, ""),
          children: groups[key]
        });
      }
      return records;
    }
  }, {
    key: "_saveOrigin",
    value: function _saveOrigin(originData) {
      var len = originData.length;
      var data = new Array(len);
      for (var i = 0; i < len; i++) {
        var record = originData[i];
        data[i] = _objectSpread2(_objectSpread2({}, record), {}, _defineProperty({}, FIELD_ORIGIN, record));
      }
      return data;
    }
  }, {
    key: "_numberic",
    value: function _numberic(data) {
      var attrs = this.attrs;
      var scales = [attrs.x.scale, attrs.y.scale];
      for (var j = 0, len = data.length; j < len; j++) {
        var obj = data[j];
        var count2 = scales.length;
        for (var i = 0; i < count2; i++) {
          var scale3 = scales[i];
          if (scale3.isCategory) {
            var field = scale3.field;
            obj[field] = scale3.translate(obj[field]);
          }
        }
      }
    }
  }, {
    key: "_adjustData",
    value: function _adjustData(records) {
      var attrs = this.attrs, props = this.props;
      var adjust = props.adjust;
      var groupedArray = records.map(function(record) {
        return record.children;
      });
      if (!adjust) {
        return groupedArray;
      }
      var adjustCfg = typeof adjust === "string" ? {
        type: adjust
      } : adjust;
      var adjustType = upper_first_default(adjustCfg.type);
      var AdjustConstructor = getAdjust(adjustType);
      if (!AdjustConstructor) {
        throw new Error("not support such adjust : " + adjust);
      }
      if (adjustType === "Dodge") {
        for (var i = 0, len = groupedArray.length; i < len; i++) {
          this._numberic(groupedArray[i]);
        }
        adjustCfg.adjustNames = ["x"];
      }
      var x = attrs.x, y = attrs.y;
      adjustCfg.xField = x.field;
      adjustCfg.yField = y.field;
      var adjustInstance = new AdjustConstructor(adjustCfg);
      var adjustData = adjustInstance.process(groupedArray);
      this.adjust = {
        type: adjustCfg.type,
        adjust: adjustInstance
      };
      records.forEach(function(record, index) {
        record.children = adjustData[index];
      });
      return adjustData;
    }
  }, {
    key: "_updateStackRange",
    value: function _updateStackRange(field, scale3, dataArray) {
      var flattenArray = flatten_default(dataArray);
      var min2 = Infinity;
      var max2 = -Infinity;
      for (var i = 0, len = flattenArray.length; i < len; i++) {
        var obj = flattenArray[i];
        var tmpMin = Math.min.apply(null, obj[field]);
        var tmpMax = Math.max.apply(null, obj[field]);
        if (tmpMin < min2) {
          min2 = tmpMin;
        }
        if (tmpMax > max2) {
          max2 = tmpMax;
        }
      }
      if (min2 !== scale3.min || max2 !== scale3.max) {
        scale3.change({
          min: min2,
          max: max2
        });
      }
    }
  }, {
    key: "_processData",
    value: function _processData() {
      var props = this.props;
      var originData = props.data;
      var data = this._saveOrigin(originData);
      var records = this._groupData(data);
      var dataArray = this._adjustData(records);
      this.dataArray = dataArray;
      this._adjustScales();
      if (this.sortable) {
        this._sortData(records);
      }
      this.records = records;
    }
  }, {
    key: "_sortData",
    value: function _sortData(records) {
      var xScale = this.getXScale();
      var field = xScale.field, type = xScale.type;
      if (type !== "identity" && xScale.values.length > 1) {
        each_default(records, function(_ref) {
          var children = _ref.children;
          children.sort(function(record1, record2) {
            if (type === "timeCat") {
              return toTimeStamp(record1[FIELD_ORIGIN][field]) - toTimeStamp(record2[FIELD_ORIGIN][field]);
            }
            return xScale.translate(record1[FIELD_ORIGIN][field]) - xScale.translate(record2[FIELD_ORIGIN][field]);
          });
        });
      }
    }
  }, {
    key: "_initEvent",
    value: function _initEvent() {
      var _this2 = this;
      var container = this.container, props = this.props;
      var canvas = container.get("canvas");
      ["onPressStart", "onPress", "onPressEnd", "onPan", "onPanStart", "onPanEnd"].forEach(function(eventName) {
        if (props[eventName]) {
          canvas.on(eventName.substr(2).toLowerCase(), function(ev) {
            ev.geometry = _this2;
            props[eventName](ev);
          });
        }
      });
    }
  }, {
    key: "getY0Value",
    value: function getY0Value() {
      var attrs = this.attrs, props = this.props;
      var chart2 = props.chart;
      var field = attrs.y.field;
      var scale3 = chart2.getScale(field);
      return chart2.scale.getZeroValue(scale3);
    }
    // 根据各属性映射的值域来获取真正的绘图属性
  }, {
    key: "_getShapeStyle",
    value: function _getShapeStyle(shape, origin) {
      var context = this.context, props = this.props, geomType = this.geomType;
      var theme = context.theme;
      var shapeTheme = theme.shape[geomType] || {};
      var defaultShapeStyle = shapeTheme.default;
      var shapeThemeStyle = shapeTheme[shape];
      var style = props.style;
      var shapeStyle = _objectSpread2(_objectSpread2({}, defaultShapeStyle), shapeThemeStyle);
      if (!style || !is_object_default(style)) {
        return shapeStyle;
      }
      var field = style.field, styles = _objectWithoutProperties(style, _excluded7);
      var value = field ? origin[field] : origin;
      each_default(styles, function(attr, key) {
        if (is_function_default(attr)) {
          shapeStyle[key] = attr(value);
        } else {
          shapeStyle[key] = attr;
        }
      });
      return shapeStyle;
    }
    /**
     * 数据映射到视图属性核心逻辑
     * x、y 每个元素走 normalize 然后 convertPoint
     * color、size、shape
     *  如果是Linear，则每个元素 走 mapping
     *  如果是Category/Identity 则第一个元素走 mapping
     */
  }, {
    key: "_mapping",
    value: function _mapping(records) {
      var attrs = this.attrs, props = this.props, attrController = this.attrController;
      var coord = props.coord;
      var _attrController$getAt = attrController.getAttrsByLinear(), linearAttrs = _attrController$getAt.linearAttrs, nonlinearAttrs = _attrController$getAt.nonlinearAttrs;
      var defaultAttrValues = attrController.getDefaultAttrValues();
      for (var i = 0, len = records.length; i < len; i++) {
        var record = records[i];
        var children = record.children;
        var attrValues = _objectSpread2({}, defaultAttrValues);
        var firstChild = children[0];
        if (children.length === 0) {
          continue;
        }
        for (var k = 0, _len = nonlinearAttrs.length; k < _len; k++) {
          var attrName = nonlinearAttrs[k];
          var attr = attrs[attrName];
          attrValues[attrName] = attr.mapping(firstChild[attr.field]);
        }
        for (var j = 0, childrenLen = children.length; j < childrenLen; j++) {
          var child = children[j];
          var normalized = {};
          for (var _k = 0; _k < linearAttrs.length; _k++) {
            var _attrName = linearAttrs[_k];
            var _attr = attrs[_attrName];
            if (attrController.isGroupAttr(_attrName)) {
              attrValues[_attrName] = _attr.mapping(child[_attr.field], child);
            } else {
              normalized[_attrName] = _attr.normalize(child[_attr.field]);
            }
          }
          var _coord$convertPoint = coord.convertPoint({
            x: normalized.x,
            y: normalized.y
          }), x = _coord$convertPoint.x, y = _coord$convertPoint.y;
          var shapeName = attrValues.shape;
          var shape = this._getShapeStyle(shapeName, child.origin);
          var selected = this.isSelected(child);
          mix(child, attrValues, {
            normalized,
            x,
            y,
            shapeName,
            shape,
            selected
          });
        }
      }
      return records;
    }
    // 数据映射
  }, {
    key: "mapping",
    value: function mapping() {
      var records = this.records;
      this._mapping(records);
      return records;
    }
  }, {
    key: "getClip",
    value: function getClip() {
      var _this$props = this.props, coord = _this$props.coord, viewClip = _this$props.viewClip;
      var contentWidth = coord.width, contentHeight = coord.height, left = coord.left, top = coord.top;
      if (viewClip) {
        return {
          type: "rect",
          attrs: {
            x: left,
            y: top,
            width: contentWidth,
            height: contentHeight
          }
        };
      }
      return null;
    }
  }, {
    key: "getAttr",
    value: function getAttr(attrName) {
      return this.attrController.getAttr(attrName);
    }
  }, {
    key: "getXScale",
    value: function getXScale() {
      return this.getAttr("x").scale;
    }
  }, {
    key: "getYScale",
    value: function getYScale() {
      return this.getAttr("y").scale;
    }
  }, {
    key: "_getXSnap",
    value: function _getXSnap(invertPointX) {
      var xScale = this.getXScale();
      if (xScale.isCategory) {
        return xScale.invert(invertPointX);
      }
      var invertValue = xScale.invert(invertPointX);
      var values2 = xScale.values;
      var len = values2.length;
      if (len === 1) {
        return values2[0];
      }
      if ((values2[0] + values2[1]) / 2 > invertValue) {
        return values2[0];
      }
      if ((values2[len - 2] + values2[len - 1]) / 2 <= invertValue) {
        return values2[len - 1];
      }
      for (var i = 1; i < len; i++) {
        if ((values2[i - 1] + values2[i]) / 2 <= invertValue && (values2[i + 1] + values2[i]) / 2 > invertValue) {
          return values2[i];
        }
      }
      return null;
    }
  }, {
    key: "_getYSnapRecords",
    value: function _getYSnapRecords(invertPointY, records) {
      var yScale = this.getYScale();
      var yField = yScale.field;
      var yValue = yScale.invert(invertPointY);
      if (yScale.isCategory) {
        return records.filter(function(record) {
          return record[FIELD_ORIGIN][yField] === yValue;
        });
      }
      return records.filter(function(record) {
        var rangeY = record[yField];
        if (rangeY[0] <= yValue && rangeY[1] >= yValue) {
          return true;
        }
        return false;
      });
    }
    // 把 records 拍平
  }, {
    key: "flatRecords",
    value: function flatRecords() {
      var records = this.records;
      return records.reduce(function(prevRecords, record) {
        return prevRecords.concat(record.children);
      }, []);
    }
  }, {
    key: "getSnapRecords",
    value: function getSnapRecords(point, inCoordRange) {
      var props = this.props;
      var coord = props.coord, adjust = props.adjust;
      var invertPoint = coord.invertPoint(point);
      var xScale = this.getXScale();
      var yScale = this.getYScale();
      if (inCoordRange) {
        var xRange = xScale.range;
        var yRange = yScale.range;
        invertPoint.x = Math.min(Math.max(invertPoint.x, xRange[0]), xRange[1]);
        invertPoint.y = Math.min(Math.max(invertPoint.y, yRange[0]), yRange[1]);
      }
      var records = this.flatRecords();
      if (adjust === "stack" && coord.isPolar && coord.transposed) {
        if (invertPoint.x >= 0 && invertPoint.x <= 1) {
          var snapRecords = this._getYSnapRecords(invertPoint.y, records);
          return snapRecords;
        }
      }
      var rst = [];
      var value = this._getXSnap(invertPoint.x);
      if (!value) {
        return rst;
      }
      var xField = xScale.field;
      var yField = yScale.field;
      for (var i = 0, len = records.length; i < len; i++) {
        var record = _objectSpread2(_objectSpread2({}, records[i]), {}, {
          xField,
          yField
        });
        var originValue = record[FIELD_ORIGIN][xField];
        if (xScale.type === "timeCat" && toTimeStamp(originValue) === value) {
          rst.push(record);
        } else if (originValue === value) {
          rst.push(record);
        }
      }
      return rst;
    }
  }, {
    key: "getLegendItems",
    value: function getLegendItems() {
      var attrController = this.attrController;
      var colorAttr = attrController.getAttr("color");
      if (!colorAttr)
        return null;
      var scale3 = colorAttr.scale;
      if (!scale3.isCategory)
        return null;
      var ticks = scale3.getTicks();
      var items = ticks.map(function(tick) {
        var text = tick.text, tickValue = tick.tickValue;
        var color2 = colorAttr.mapping(tickValue);
        return {
          field: scale3.field,
          color: color2,
          name: text,
          tickValue
        };
      });
      return items;
    }
  }]);
  return Geometry2;
}(selection_default);
var geometry_default = Geometry;

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/line/withLine.js
var withLine_default = function(View) {
  return function(_Geometry) {
    _inherits(Line4, _Geometry);
    var _super = _createSuper(Line4);
    function Line4() {
      _classCallCheck(this, Line4);
      return _super.apply(this, arguments);
    }
    _createClass(Line4, [{
      key: "getDefaultCfg",
      value: function getDefaultCfg() {
        return {
          geomType: "line",
          sortable: true
        };
      }
    }, {
      key: "splitPoints",
      value: function splitPoints(points) {
        var topPoints = [];
        var bottomPoints = [];
        for (var i = 0, len = points.length; i < len; i++) {
          var point = points[i];
          var x = point.x, y = point.y;
          topPoints.push(_objectSpread2(_objectSpread2({}, point), {}, {
            x,
            y: y[1]
          }));
          bottomPoints.push(_objectSpread2(_objectSpread2({}, point), {}, {
            x,
            y: y[0]
          }));
        }
        return [topPoints, bottomPoints];
      }
    }, {
      key: "splitNulls",
      value: function splitNulls(points, connectNulls) {
        if (connectNulls) {
          var _tmpPoints = [];
          for (var i = 0, len = points.length; i < len; i++) {
            var point = points[i];
            var y = point.y;
            if (is_array_default(y)) {
              if (isNaN(y[0])) {
                continue;
              }
              _tmpPoints.push(point);
              continue;
            }
            if (isNaN(y)) {
              continue;
            }
            _tmpPoints.push(point);
          }
          if (_tmpPoints.length) {
            return [_tmpPoints];
          }
          return [];
        }
        var result = [];
        var tmpPoints = [];
        for (var _i = 0, _len = points.length; _i < _len; _i++) {
          var _point = points[_i];
          var _y = _point.y;
          if (is_array_default(_y)) {
            if (isNaN(_y[0])) {
              if (tmpPoints.length) {
                result.push(tmpPoints);
                tmpPoints = [];
              }
              continue;
            }
            tmpPoints.push(_point);
            continue;
          }
          if (isNaN(_y)) {
            if (tmpPoints.length) {
              result.push(tmpPoints);
              tmpPoints = [];
            }
            continue;
          }
          tmpPoints.push(_point);
        }
        if (tmpPoints.length) {
          result.push(tmpPoints);
        }
        return result;
      }
    }, {
      key: "mapping",
      value: function mapping() {
        var _this = this;
        var records = _get(_getPrototypeOf(Line4.prototype), "mapping", this).call(this);
        var props = this.props, defaultConnectNulls = this.connectNulls;
        var coord = props.coord, _props$connectNulls = props.connectNulls, connectNulls = _props$connectNulls === void 0 ? defaultConnectNulls : _props$connectNulls;
        return records.map(function(record) {
          var children = record.children;
          var _ref = children[0] || {}, size2 = _ref.size, color2 = _ref.color, shape = _ref.shape, y = _ref.y;
          var points = coord.isPolar ? [].concat(_toConsumableArray(children), [children[0]]) : children;
          var splitPoints = _this.splitNulls(points, connectNulls);
          var newChildren = splitPoints.map(function(points2) {
            var _ref2 = is_array_default(y) ? _this.splitPoints(points2) : [points2, void 0], _ref3 = _slicedToArray(_ref2, 2), topPoints = _ref3[0], bottomPoints = _ref3[1];
            return {
              size: size2,
              color: color2,
              shape,
              points: topPoints,
              bottomPoints
            };
          });
          return _objectSpread2(_objectSpread2({}, record), {}, {
            children: newChildren
          });
        });
      }
    }, {
      key: "render",
      value: function render2() {
        var props = this.props;
        var coord = props.coord;
        var records = this.mapping();
        var clip = this.getClip();
        return jsx(View, _objectSpread2(_objectSpread2({}, props), {}, {
          coord,
          records,
          clip
        }));
      }
    }]);
    return Line4;
  }(geometry_default);
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/line/lineView.js
function concatPoints(children) {
  var result = [];
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    result = result.concat(child.points);
  }
  return result;
}
function formatPoint(point) {
  var y = point.y;
  return {
    x: point.x,
    y: is_array_default(y) ? y[1] : y
  };
}
function getPoint2(points, t) {
  var formatedPoints = points.map(function(p) {
    return formatPoint(p);
  });
  var firstPoint = formatedPoints[0];
  var lastPoint = formatedPoints[formatedPoints.length - 1];
  var xOffset = lastPoint.x - firstPoint.x;
  var x = firstPoint.x + xOffset * t;
  for (var i = 1; i < formatedPoints.length; i++) {
    var point = formatedPoints[i];
    var prevPoint = formatedPoints[i - 1];
    if (x >= prevPoint.x && x <= point.x) {
      var ratio = (x - prevPoint.x) / (point.x - prevPoint.x);
      return {
        x,
        y: prevPoint.y + (point.y - prevPoint.y) * ratio
      };
    }
  }
}
function AnimationEndView(props) {
  var record = props.record, appear = props.appear, EndView = props.EndView;
  var children = record.children;
  var points = concatPoints(children);
  var origin = points[0].origin;
  return jsx("group", {
    animation: {
      appear: {
        easing: appear.easing,
        duration: appear.duration,
        onFrame: function onFrame(t) {
          var element = this.element;
          var children2 = element.get("children");
          var point = getPoint2(points, t);
          children2.forEach(function(child) {
            child.moveTo(point.x, point.y);
          });
        }
      }
    }
  }, jsx(EndView, {
    origin
  }));
}
var lineView_default = function(props) {
  var records = props.records, coord = props.coord, animation = props.animation, EndView = props.endView, clip = props.clip;
  var left = coord.left, top = coord.top, width = coord.width, height = coord.height, center = coord.center, startAngle = coord.startAngle, endAngle = coord.endAngle, radius = coord.radius;
  var appear = coord.isPolar ? {
    easing: "quadraticOut",
    duration: 450,
    clip: {
      type: "sector",
      property: ["endAngle"],
      attrs: {
        x: center.x,
        y: center.y,
        startAngle,
        r: radius
      },
      start: {
        endAngle: startAngle
      },
      end: {
        endAngle
      }
    }
  } : {
    easing: "quadraticOut",
    duration: 450,
    clip: {
      type: "rect",
      property: ["width"],
      attrs: {
        x: left,
        y: top,
        height
      },
      start: {
        width: 0
      },
      end: {
        width
      }
    }
  };
  return jsx("group", {
    attrs: {
      clip
    }
  }, records.map(function(record) {
    var key = record.key, children = record.children;
    return jsx("group", {
      key
    }, children.map(function(child) {
      var points = child.points, color2 = child.color, size2 = child.size, shape = child.shape;
      return jsx("polyline", {
        attrs: _objectSpread2(_objectSpread2({
          points: points.map(function(point) {
            return {
              x: point.x,
              y: point.y
            };
          }),
          stroke: color2
        }, shape), {}, {
          lineWidth: size2 || shape.lineWidth
        }),
        animation: deep_mix_default({
          update: {
            easing: "linear",
            duration: 450,
            property: ["points"]
          },
          appear
        }, animation)
      });
    }), EndView ? jsx(AnimationEndView, {
      record,
      EndView,
      appear
    }) : null);
  }));
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/line/index.js
var line_default3 = withLine_default(lineView_default);

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/area/withArea.js
var withArea_default = function(View) {
  return function(_withLine) {
    _inherits(Area, _withLine);
    var _super = _createSuper(Area);
    function Area() {
      _classCallCheck(this, Area);
      return _super.apply(this, arguments);
    }
    _createClass(Area, [{
      key: "getDefaultCfg",
      value: function getDefaultCfg() {
        return {
          geomType: "area",
          // 面积图默认设为从0开始
          startOnZero: true,
          // 点需要排序
          sortable: true
        };
      }
    }, {
      key: "mapping",
      value: function mapping() {
        var records = _get(_getPrototypeOf(Area.prototype), "mapping", this).call(this);
        var y0 = this.getY0Value();
        var props = this.props, defaultStartOnZero = this.startOnZero;
        var coord = props.coord, _props$startOnZero = props.startOnZero, startOnZero = _props$startOnZero === void 0 ? defaultStartOnZero : _props$startOnZero;
        var baseY = coord.y[0];
        if (startOnZero) {
          var originCoord = coord.convertPoint({
            x: 0,
            y: y0
          });
          baseY = originCoord.y;
        }
        for (var i = 0, len = records.length; i < len; i++) {
          var record = records[i];
          var children = record.children;
          for (var j = 0, _len = children.length; j < _len; j++) {
            var child = children[j];
            var points = child.points, bottomPoints = child.bottomPoints;
            if (bottomPoints && bottomPoints.length) {
              bottomPoints.reverse();
              child.points = points.concat(bottomPoints);
            } else {
              points.push({
                x: points[points.length - 1].x,
                y: baseY
              });
              points.push({
                x: points[0].x,
                y: baseY
              });
            }
          }
        }
        return records;
      }
    }]);
    return Area;
  }(withLine_default(View));
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/area/areaView.js
var areaView_default = function(props) {
  var coord = props.coord, records = props.records, shape = props.shape, animation = props.animation;
  var isSmooth = shape === "smooth";
  var left = coord.left, top = coord.top, width = coord.width, height = coord.height, center = coord.center, startAngle = coord.startAngle, endAngle = coord.endAngle, radius = coord.radius;
  var appear = coord.isPolar ? {
    easing: "quadraticOut",
    duration: 450,
    clip: {
      type: "sector",
      property: ["endAngle"],
      attrs: {
        x: center.x,
        y: center.y,
        startAngle,
        r: radius
      },
      start: {
        endAngle: startAngle
      },
      end: {
        endAngle
      }
    }
  } : {
    easing: "quadraticOut",
    duration: 450,
    clip: {
      type: "rect",
      property: ["width"],
      attrs: {
        x: left,
        y: top,
        height
      },
      start: {
        width: 0
      },
      end: {
        width
      }
    }
  };
  return jsx("group", null, records.map(function(record) {
    var key = record.key, children = record.children;
    return jsx("group", {
      key
    }, children.map(function(child) {
      var points = child.points, bottomPoints = child.bottomPoints, color2 = child.color, shape2 = child.shape;
      if (isSmooth) {
        return jsx("custom", {
          attrs: _objectSpread2({
            points,
            lineWidth: "2px",
            fill: color2
          }, shape2),
          createPath: function createPath(context) {
            var constaint = [[0, 0], [1, 1]];
            var bottomPointsLen = (bottomPoints === null || bottomPoints === void 0 ? void 0 : bottomPoints.length) || 0;
            var topPoints = points.slice(0, points.length - bottomPointsLen);
            var topSps = smooth_exports.smooth(topPoints, false, constaint);
            context.beginPath();
            context.moveTo(topPoints[0].x, topPoints[0].y);
            for (var i = 0, n = topSps.length; i < n; i++) {
              var sp = topSps[i];
              context.bezierCurveTo(sp[1], sp[2], sp[3], sp[4], sp[5], sp[6]);
            }
            if (bottomPointsLen) {
              var bottomSps = smooth_exports.smooth(bottomPoints, false, constaint);
              context.lineTo(bottomPoints[0].x, bottomPoints[0].y);
              for (var _i = 0, _n = bottomSps.length; _i < _n; _i++) {
                var _sp = bottomSps[_i];
                context.bezierCurveTo(_sp[1], _sp[2], _sp[3], _sp[4], _sp[5], _sp[6]);
              }
            }
            context.closePath();
          },
          calculateBox: function calculateBox() {
            return bbox_exports.getBBoxFromPoints(points);
          }
        });
      }
      return jsx("polygon", {
        attrs: _objectSpread2({
          points,
          lineWidth: "2px",
          fill: color2
        }, shape2),
        animation: deep_mix_default({
          appear,
          update: {
            easing: "linear",
            duration: 450,
            property: ["points"]
          }
        }, animation)
      });
    }));
  }));
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/area/index.js
var area_default = withArea_default(areaView_default);

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/interval/label/index.js
var label_exports = {};
__export(label_exports, {
  funnel: () => LabelView,
  pyramid: () => LabelView
});

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/util/coord.js
function getMiddlePoint(start2, end2) {
  var x = (end2.x - start2.x) / 2 + start2.x;
  var y = (end2.y - start2.y) / 2 + start2.y;
  return {
    x,
    y
  };
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/interval/label/polygonLabel.js
var DEFAULT_LABEL_CFG = {
  textBaseline: "middle",
  fill: "#808080"
};
function LabelView(props) {
  var record = props.record, offsetX = props.offsetX, offsetY = props.offsetY, points = props.points, label = props.label, guide2 = props.guide;
  var origin = record.origin, color2 = record.color;
  var labelAttrs, guideAttrs;
  if (is_function_default(label)) {
    var point = points.length === 4 ? getMiddlePoint(points[1], points[2]) : getMiddlePoint(points[0], points[1]);
    labelAttrs = mix({
      x: point.x + offsetX,
      y: point.y + offsetY
    }, DEFAULT_LABEL_CFG, label(origin, color2));
  }
  if (is_function_default(guide2)) {
    var _points$;
    var _point = getMiddlePoint(points.length === 4 ? getMiddlePoint(points[0], points[1]) : points[0], getMiddlePoint(points[2], (_points$ = points[3]) !== null && _points$ !== void 0 ? _points$ : points[1]));
    guideAttrs = mix({
      x: _point.x,
      y: _point.y,
      textBaseline: "middle",
      textAlign: "center"
    }, DEFAULT_LABEL_CFG, guide2(origin, color2));
  }
  return jsx("group", null, labelAttrs && jsx("text", {
    attrs: labelAttrs
  }), guideAttrs && jsx("text", {
    attrs: guideAttrs
  }));
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/interval/withInterval.js
var withInterval_default = function(Views) {
  return function(_Geometry) {
    _inherits(Interval, _Geometry);
    var _super = _createSuper(Interval);
    function Interval() {
      _classCallCheck(this, Interval);
      return _super.apply(this, arguments);
    }
    _createClass(Interval, [{
      key: "getDefaultCfg",
      value: function getDefaultCfg() {
        return {
          geomType: "interval",
          justifyContent: true,
          startOnZero: true
        };
      }
    }, {
      key: "getDefaultSize",
      value: function getDefaultSize() {
        var attrs = this.attrs, props = this.props, adjust = this.adjust, records = this.records;
        var coord = props.coord, sizeRatio = props.sizeRatio;
        var x = attrs.x;
        var scale3 = x.scale;
        var values2 = scale3.values;
        if (sizeRatio) {
          return 1 / values2.length * sizeRatio;
        }
        var defaultWithRatio = {
          column: 1 / 2,
          rose: 0.999999,
          multiplePie: 3 / 4
          // 多饼图
        };
        var count2 = values2.length;
        var ratio;
        if (coord.isPolar) {
          if (coord.transposed && count2 > 1) {
            ratio = defaultWithRatio.multiplePie;
          } else {
            ratio = defaultWithRatio.rose;
          }
        } else {
          ratio = defaultWithRatio.column;
        }
        var size2 = 1 / values2.length * ratio;
        if (adjust && adjust.type === "dodge") {
          return size2 / records.length;
        }
        return size2;
      }
    }, {
      key: "mapping",
      value: function mapping() {
        var records = _get(_getPrototypeOf(Interval.prototype), "mapping", this).call(this);
        var props = this.props;
        var coord = props.coord;
        var y0 = this.getY0Value();
        var defaultSize = this.getDefaultSize();
        for (var i = 0, len = records.length; i < len; i++) {
          var record = records[i];
          var children = record.children;
          for (var j = 0, _len = children.length; j < _len; j++) {
            var child = children[j];
            var normalized = child.normalized, mappedSize = child.size;
            if (is_nil_default(mappedSize)) {
              var x = normalized.x, y = normalized.y, _normalized$size = normalized.size, size2 = _normalized$size === void 0 ? defaultSize : _normalized$size;
              mix(child, coord.convertRect({
                x,
                y,
                y0,
                size: size2
              }));
            } else {
              var _child = child, _x = _child.x, _y = _child.y;
              var rect = {
                size: mappedSize,
                x: _x,
                y: _y,
                y0
              };
              mix(child, coord.transformToRect(rect));
            }
            mix(child.shape, this.getSelectionStyle(child));
          }
        }
        return records;
      }
      // 获取Y轴坐标零点的画布位置
    }, {
      key: "getPointY0",
      value: function getPointY0() {
        var props = this.props;
        var coord = props.coord;
        var y0 = this.getY0Value();
        var y0Point = coord.convertPoint({
          y: y0,
          x: 0
        });
        return y0Point === null || y0Point === void 0 ? void 0 : y0Point.y;
      }
    }, {
      key: "render",
      value: function render2() {
        var props = this.props, state = this.state, container = this.container;
        var coord = props.coord, _props$shape = props.shape, shape = _props$shape === void 0 ? "rect" : _props$shape, animation = props.animation, showLabel = props.showLabel, customLabelCfg = props.labelCfg;
        var View = is_function_default(Views) ? Views : Views[shape];
        var LabelView2 = label_exports[shape];
        var labelCfg = deep_mix_default({
          label: null,
          offsetX: 0,
          offsetY: 0
        }, customLabelCfg);
        if (!View)
          return null;
        var selected = state.selected;
        var records = this.mapping();
        var pointY0 = this.getPointY0();
        var clip = this.getClip();
        return jsx(View, {
          coord,
          records,
          selected,
          shape,
          animation,
          showLabel,
          labelCfg,
          LabelView: LabelView2,
          y0: pointY0,
          clip
        });
      }
    }]);
    return Interval;
  }(geometry_default);
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/interval/view/index.js
var view_exports = {};
__export(view_exports, {
  funnel: () => polygonView_default,
  pyramid: () => polygonView_default,
  rect: () => intervalView_default
});

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/interval/view/rect.js
var rect_default5 = function(props) {
  var records = props.records, animation = props.animation, y0 = props.y0, clip = props.clip;
  return jsx("group", {
    attrs: {
      clip
    }
  }, records.map(function(record) {
    var key = record.key, children = record.children;
    return jsx("group", {
      key
    }, children.map(function(item) {
      var key2 = item.key, xMin = item.xMin, xMax = item.xMax, yMin = item.yMin, yMax = item.yMax, color2 = item.color, shape = item.shape;
      if (isNaN(xMin) || isNaN(xMax) || isNaN(yMin) || isNaN(yMax)) {
        return null;
      }
      return jsx("rect", {
        key: key2,
        attrs: _objectSpread2({
          x: xMin,
          y: yMin,
          width: xMax - xMin,
          height: yMax - yMin,
          fill: color2
        }, shape),
        animation: deep_mix_default({
          appear: {
            easing: "linear",
            duration: 450,
            property: ["y", "height"],
            start: {
              y: y0,
              height: 0
            }
          },
          update: {
            easing: "linear",
            duration: 450,
            property: ["x", "y", "width", "height"]
          }
        }, animation)
      });
    }));
  }));
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/interval/view/polar.js
var polar_default2 = function(props) {
  var coord = props.coord, records = props.records, animation = props.animation;
  var center = coord.center, startAngle = coord.startAngle, endAngle = coord.endAngle, radius = coord.radius;
  return jsx("group", {
    animation: {
      appear: _objectSpread2(_objectSpread2({
        easing: "quadraticOut",
        duration: 450
      }, animation && animation.appear), {}, {
        clip: {
          type: "sector",
          property: ["endAngle"],
          attrs: {
            x: center.x,
            y: center.y,
            startAngle,
            r: radius
          },
          start: {
            endAngle: startAngle
          },
          end: {
            endAngle
          }
        }
      })
    }
  }, records.map(function(record) {
    var key = record.key, children = record.children;
    return jsx("group", {
      key
    }, children.map(function(item) {
      var key2 = item.key, xMin = item.xMin, xMax = item.xMax, yMin = item.yMin, yMax = item.yMax, color2 = item.color, shape = item.shape;
      return jsx("sector", {
        key: key2,
        attrs: _objectSpread2({
          x: center.x,
          y: center.y,
          fill: color2,
          startAngle: xMin,
          endAngle: xMax,
          r0: yMin,
          r: yMax
        }, shape),
        animation: deep_mix_default({
          update: {
            easing: "linear",
            duration: 450,
            property: ["x", "y", "startAngle", "endAngle", "r0", "r"]
          }
        }, animation)
      });
    }));
  }));
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/interval/view/intervalView.js
var intervalView_default = function(props) {
  var coord = props.coord;
  var coordType = coord.type;
  if (coordType === "rect") {
    return jsx(rect_default5, _objectSpread2({}, props));
  }
  return jsx(polar_default2, _objectSpread2({}, props));
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/interval/util.js
function convertToPoints(_ref) {
  var xMin = _ref.xMin, xMax = _ref.xMax, yMin = _ref.yMin, yMax = _ref.yMax;
  return [
    {
      x: xMin,
      y: yMin
    },
    {
      x: xMax,
      y: yMin
    },
    {
      x: xMax,
      y: yMax
    },
    {
      x: xMin,
      y: yMax
    }
    // bl
  ];
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/interval/view/polygonView.js
var polygonView_default = function(props) {
  var records = props.records, shape = props.shape, showLabel = props.showLabel, labelCfg = props.labelCfg, LabelView2 = props.LabelView;
  var overturn = false;
  return jsx("group", null, records.map(function(record, index) {
    var key = record.key, children = record.children;
    var isLastRecord = index === records.length - 1;
    var nextRecord = isLastRecord ? record : records[index + 1];
    var nextChildren = nextRecord.children;
    var nextFirstPoint = convertToPoints(nextChildren[0]);
    var nextLastPoints = convertToPoints(nextChildren[nextChildren.length - 1]);
    if (!overturn) {
      overturn = nextChildren[0].yMax > children[0].yMax;
    }
    if (overturn) {
      nextFirstPoint.reverse();
      nextLastPoints.reverse();
    }
    var polygonPoints = children.map(function(child, childIndex) {
      var points = convertToPoints(child);
      if (overturn) {
        points.reverse();
      }
      if (isLastRecord) {
        if (shape === "pyramid") {
          points = [getMiddlePoint(points[0], points[1]), points[2], points[3]];
        }
      } else {
        if (childIndex === 0) {
          points[0] = nextFirstPoint[3];
        }
        if (childIndex === children.length - 1) {
          points[1] = nextLastPoints[2];
        }
      }
      return _objectSpread2(_objectSpread2({}, child), {}, {
        points
      });
    });
    return jsx("group", {
      key
    }, polygonPoints.map(function(child) {
      var points = child.points, color2 = child.color, shape2 = child.shape;
      return jsx("group", null, jsx("polygon", {
        attrs: _objectSpread2({
          points,
          fill: color2
        }, shape2)
      }), showLabel && LabelView2 ? jsx(LabelView2, _objectSpread2({
        record: child,
        points
      }, labelCfg)) : null);
    }));
  }));
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/interval/index.js
var interval_default = withInterval_default(view_exports);

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/point/withPoint.js
var withPoint_default = function(View) {
  return function(_Geometry) {
    _inherits(Point, _Geometry);
    var _super = _createSuper(Point);
    function Point() {
      _classCallCheck(this, Point);
      return _super.apply(this, arguments);
    }
    _createClass(Point, [{
      key: "getDefaultCfg",
      value: function getDefaultCfg() {
        return {
          geomType: "point"
        };
      }
    }, {
      key: "render",
      value: function render2() {
        var props = this.props, container = this.container;
        var coord = props.coord;
        var records = this.mapping();
        var clip = this.getClip();
        return jsx(View, _objectSpread2(_objectSpread2({}, props), {}, {
          coord,
          records,
          clip
        }));
      }
    }]);
    return Point;
  }(geometry_default);
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/point/pointView.js
var pointView_default = function(props) {
  var records = props.records, animation = props.animation, clip = props.clip;
  return jsx("group", {
    attrs: {
      clip
    }
  }, records.map(function(record) {
    var key = record.key, children = record.children;
    return jsx("group", {
      key
    }, children.map(function(item) {
      var x = item.x, y = item.y, size2 = item.size, color2 = item.color, shapeName = item.shapeName, shape = item.shape;
      if (isNaN(x) || isNaN(y)) {
        return null;
      }
      if (shapeName === "rect") {
        var rectSize = is_nil_default(size2) ? shape.size : size2;
        return jsx("rect", {
          attrs: _objectSpread2(_objectSpread2({
            x: x - rectSize,
            y: y - rectSize,
            fill: color2,
            stroke: color2
          }, shape), {}, {
            width: rectSize * 2,
            height: rectSize * 2
          }),
          animation: deep_mix_default({
            appear: {
              easing: "linear",
              duration: 450
            },
            update: {
              easing: "linear",
              duration: 450,
              property: ["x", "y", "width", "height", "fill"]
            }
          }, animation)
        });
      }
      return jsx("circle", {
        attrs: _objectSpread2(_objectSpread2({
          x,
          y,
          fill: shapeName === "circle" ? color2 : null,
          stroke: shapeName === "hollowCircle" ? color2 : null
        }, shape), {}, {
          r: is_nil_default(size2) ? shape.size : size2
        }),
        animation: deep_mix_default({
          appear: {
            easing: "linear",
            duration: 450
          },
          update: {
            easing: "linear",
            duration: 450,
            property: ["x", "y", "r", "fill"]
          }
        }, animation)
      });
    }));
  }));
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/point/index.js
var point_default = withPoint_default(pointView_default);

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/axis/withAxis.js
var withAxis_default = function(View) {
  return function(_Component) {
    _inherits(Axis, _Component);
    var _super = _createSuper(Axis);
    function Axis(props) {
      var _this;
      _classCallCheck(this, Axis);
      _this = _super.call(this, props);
      _this.style = {};
      var _this$props = _this.props, chart2 = _this$props.chart, field = _this$props.field;
      var scaleOption = _this.getScaleOption(props);
      chart2.setScale(field, scaleOption);
      return _this;
    }
    _createClass(Axis, [{
      key: "willReceiveProps",
      value: function willReceiveProps(nextProps) {
        var lastProps = this.props;
        var chart2 = nextProps.chart, field = nextProps.field;
        var nextScaleOption = this.getScaleOption(nextProps);
        var lastScaleOption = this.getScaleOption(lastProps);
        if (!equal_default(nextScaleOption, lastScaleOption)) {
          chart2.setScale(field, nextScaleOption);
        }
      }
    }, {
      key: "willMount",
      value: function willMount() {
        this.updateCoord();
      }
    }, {
      key: "willUpdate",
      value: function willUpdate() {
        this.updateCoord();
      }
    }, {
      key: "getScaleOption",
      value: function getScaleOption(props) {
        var type = props.type, tickCount = props.tickCount, range = props.range, mask = props.mask, formatter = props.formatter, ticks = props.ticks, min2 = props.min, max2 = props.max, nice = props.nice;
        return {
          type,
          tickCount,
          range,
          mask,
          formatter,
          min: min2,
          max: max2,
          nice,
          ticks
        };
      }
    }, {
      key: "_getDimType",
      value: function _getDimType() {
        var props = this.props;
        var field = props.field, chart2 = props.chart;
        var xScales = chart2.getXScales();
        var scales = xScales.filter(function(scale3) {
          return scale3.field === field;
        });
        return scales.length > 0 ? "x" : "y";
      }
      // 获取ticks最大的宽高
    }, {
      key: "getMaxBBox",
      value: function getMaxBBox(ticks, style) {
        var context = this.context;
        var measureText4 = context.measureText;
        var label = style.label, labelOffset = style.labelOffset;
        var width = 0;
        var height = 0;
        ticks.forEach(function(tick) {
          if (!label)
            return;
          var _tick$labelStyle = tick.labelStyle, labelStyle = _tick$labelStyle === void 0 ? {} : _tick$labelStyle, text = tick.text;
          var bbox2 = measureText4(labelStyle.text || text, _objectSpread2(_objectSpread2({}, label), labelStyle));
          width = Math.max(width, bbox2.width);
          height = Math.max(height, bbox2.height);
        });
        if (!width && !height) {
          return {
            width,
            height
          };
        }
        var bbox = {
          width: width + labelOffset,
          height: height + labelOffset
        };
        return bbox;
      }
    }, {
      key: "_getPosition",
      value: function _getPosition() {
        var props = this.props;
        var position = props.position, coord = props.coord;
        if (position) {
          return position;
        }
        var dimType = this._getDimType();
        if (coord.transposed) {
          return dimType === "x" ? "left" : "bottom";
        }
        return dimType === "x" ? "bottom" : "left";
      }
    }, {
      key: "getTicks",
      value: function getTicks3() {
        var props = this.props;
        var field = props.field, chart2 = props.chart;
        var scale3 = chart2.getScale(field);
        var ticks = scale3.getTicks();
        ticks = this._setTicksStyle(ticks);
        ticks = this._generateGridPoints(ticks);
        return ticks;
      }
      /**
       * 生成极坐标下网格线的交叉点
       * @param ticks
       * @returns
       */
    }, {
      key: "_generateGridPoints",
      value: function _generateGridPoints(ticks) {
        var props = this.props;
        var chart2 = props.chart, coord = props.coord;
        if (!coord.isPolar) {
          return ticks;
        }
        var dimType = this._getDimType();
        if (dimType !== "y") {
          return ticks;
        }
        var xScale = chart2.getXScales()[0];
        var xTicks = xScale.getTicks();
        ticks.forEach(function(tick) {
          var gridPoints = xTicks.map(function(xTick) {
            return coord.convertPoint({
              x: xTick.value,
              y: tick.value
            });
          });
          gridPoints.push(gridPoints[0]);
          tick.gridPoints = gridPoints;
        });
        return ticks;
      }
    }, {
      key: "_setTicksStyle",
      value: function _setTicksStyle(ticks) {
        var _this2 = this;
        var props = this.props, context = this.context;
        var theme = context.theme, px2hd2 = context.px2hd;
        var _props$style = props.style, style = _props$style === void 0 ? {} : _props$style;
        var themeAxis = theme.axis;
        each_default(themeAxis, function(value, key) {
          if (style[key] === null) {
            return;
          }
          var styleValue = is_function_default(style[key]) ? void 0 : style[key];
          if (is_string_default(value) || is_number_default(value)) {
            _this2.style[key] = px2hd2(styleValue) || value;
          } else {
            _this2.style[key] = px2hd2(deep_mix_default(clone_default(value), styleValue));
          }
        });
        return ticks.map(function(tick, index) {
          var label = style.label, grid = style.grid;
          var defaultLabelStyle = themeAxis.label, defaultGridStyle = themeAxis.grid;
          if (is_function_default(label)) {
            tick.labelStyle = px2hd2(mix({}, defaultLabelStyle, label(tick.text, index, ticks)));
          }
          if (is_function_default(grid)) {
            tick.gridStyle = px2hd2(mix({}, defaultGridStyle, grid(tick.text, index, ticks.length)));
          }
          return tick;
        });
      }
    }, {
      key: "convertTicks",
      value: function convertTicks(ticks) {
        var props = this.props;
        var coord = props.coord;
        var dimType = this._getDimType();
        var otherDim = dimType === "x" ? "y" : "x";
        return ticks.map(function(tick) {
          var _coord$convertPoint, _coord$convertPoint2;
          var start2 = coord.convertPoint((_coord$convertPoint = {}, _defineProperty(_coord$convertPoint, dimType, tick.value), _defineProperty(_coord$convertPoint, otherDim, 0), _coord$convertPoint));
          var end2 = coord.convertPoint((_coord$convertPoint2 = {}, _defineProperty(_coord$convertPoint2, dimType, tick.value), _defineProperty(_coord$convertPoint2, otherDim, 1), _coord$convertPoint2));
          return _objectSpread2(_objectSpread2({}, tick), {}, {
            points: [start2, end2]
          });
        });
      }
    }, {
      key: "measureLayout",
      value: function measureLayout() {
        var props = this.props;
        var visible = props.visible, coord = props.coord;
        if (visible === false) {
          return null;
        }
        var ticks = this.getTicks();
        var bbox = this.getMaxBBox(ticks, this.style);
        var isPolar2 = coord.isPolar;
        var dimType = this._getDimType();
        var width = bbox.width, height = bbox.height;
        if (isPolar2) {
          if (dimType === "y") {
            return null;
          }
          return ["top", "right", "bottom", "left"].map(function(position2) {
            return {
              position: position2,
              width,
              height
            };
          });
        }
        var position = this._getPosition();
        return {
          position,
          width,
          height
        };
      }
      // 主要是计算coord的布局
    }, {
      key: "updateCoord",
      value: function updateCoord() {
        var props = this.props;
        var chart2 = props.chart;
        var layout = this.measureLayout();
        chart2.updateCoordFor(this, layout);
      }
    }, {
      key: "render",
      value: function render2() {
        var props = this.props, style = this.style;
        var visible = props.visible, coord = props.coord;
        if (visible === false) {
          return null;
        }
        var ticks = this.getTicks();
        var position = this._getPosition();
        var dimType = this._getDimType();
        return jsx(View, _objectSpread2(_objectSpread2({}, props), {}, {
          style,
          ticks: this.convertTicks(ticks),
          coord,
          position,
          dimType
        }));
      }
    }]);
    return Axis;
  }(component_default);
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/axis/polar/polar-x.js
function getOffsetPoint(center, point, offset) {
  var vectorX = point.x - center.x;
  var vectorY = point.y - center.y;
  var vector = [vectorX, vectorY];
  var vectorLength = vector2_default.length(vector);
  var offsetLength = vectorLength + offset;
  var x = vectorX / vectorLength * offsetLength;
  var y = vectorY / vectorLength * offsetLength;
  return {
    x: center.x + x,
    y: center.y + y
  };
}
function getTextAlignInfo(center, point) {
  var vector = [point.x - center.x, point.y - center.y];
  var align;
  var baseLine;
  if (vector[0] > 0) {
    align = "left";
  } else if (vector[0] < 0) {
    align = "right";
  } else {
    align = "center";
  }
  if (vector[1] > 0) {
    baseLine = "top";
  } else if (vector[1] < 0) {
    baseLine = "bottom";
  } else {
    baseLine = "middle";
  }
  return {
    textAlign: align,
    textBaseline: baseLine
  };
}
var Line2 = function Line3(props) {
  var line = props.line, gridType = props.gridType, center = props.center, radius = props.radius, ticks = props.ticks;
  if (!line)
    return null;
  if (gridType !== "line") {
    return jsx("arc", {
      attrs: _objectSpread2({
        x: center.x,
        y: center.y,
        r: radius
      }, line)
    });
  }
  var points = ticks.map(function(tick) {
    var points2 = tick.points;
    return points2[points2.length - 1];
  });
  points.push(points[0]);
  return jsx("polyline", {
    attrs: _objectSpread2({
      points
    }, line)
  });
};
var polar_x_default = function(props) {
  var ticks = props.ticks, coord = props.coord, style = props.style, gridType = props.grid;
  var center = coord.center;
  var grid = style.grid, tickLine = style.tickLine, line = style.line, labelOffset = style.labelOffset, label = style.label;
  var firstTicks = ticks[0];
  var points = firstTicks.points;
  var end2 = points[points.length - 1];
  var radius = vector2_default.length([end2.x - center.x, end2.y - center.y]);
  return jsx("group", null, grid ? ticks.map(function(tick) {
    var points2 = tick.points, gridStyle = tick.gridStyle;
    var end3 = points2[points2.length - 1];
    return jsx("line", {
      attrs: _objectSpread2(_objectSpread2({
        x1: center.x,
        y1: center.y,
        x2: end3.x,
        y2: end3.y
      }, grid), gridStyle)
    });
  }) : null, tickLine && tickLine.length ? ticks.map(function(tick) {
    var points2 = tick.points;
    var end3 = points2[points2.length - 1];
    var offsetPoint = getOffsetPoint(center, end3, tickLine.length);
    return jsx("line", {
      attrs: _objectSpread2({
        x1: end3.x,
        y1: end3.y,
        x2: offsetPoint.x,
        y2: offsetPoint.y
      }, tickLine)
    });
  }) : null, jsx(Line2, {
    line,
    gridType,
    center,
    radius,
    ticks
  }), label ? ticks.map(function(tick) {
    var points2 = tick.points, text = tick.text, labelStyle = tick.labelStyle;
    var end3 = points2[points2.length - 1];
    var offsetPoint = getOffsetPoint(center, end3, labelOffset);
    return jsx("text", {
      attrs: _objectSpread2(_objectSpread2(_objectSpread2({
        x: offsetPoint.x,
        y: offsetPoint.y,
        text
      }, getTextAlignInfo(center, end3)), label), labelStyle)
    });
  }) : null);
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/axis/polar/polar-y.js
var polar_y_default = function(props) {
  var ticks = props.ticks, coord = props.coord, style = props.style, gridType = props.grid;
  var center = coord.center;
  var grid = style.grid, tickLine = style.tickLine, line = style.line, labelOffset = style.labelOffset, label = style.label;
  return jsx("group", null, grid ? ticks.map(function(tick) {
    var points = tick.points, gridStyle = tick.gridStyle, gridPoints = tick.gridPoints;
    var end2 = points[points.length - 1];
    if (gridType !== "line") {
      return jsx("arc", {
        attrs: _objectSpread2(_objectSpread2({
          x: center.x,
          y: center.y,
          r: vector2_default.length([end2.x - center.x, end2.y - center.y])
        }, grid), gridStyle)
      });
    }
    return jsx("polyline", {
      attrs: _objectSpread2(_objectSpread2({
        points: gridPoints
      }, grid), gridStyle)
    });
  }) : null, tickLine && tickLine.length ? ticks.map(function(tick) {
    var points = tick.points;
    var end2 = points[points.length - 1];
    return jsx("line", {
      attrs: _objectSpread2({
        x1: end2.x,
        y1: end2.y,
        x2: end2.x - tickLine.length,
        y2: end2.y
      }, tickLine)
    });
  }) : null, line ? jsx("line", {
    attrs: _objectSpread2({
      x1: ticks[0].points[0].x,
      y1: ticks[0].points[0].y,
      x2: ticks[ticks.length - 1].points[0].x,
      y2: ticks[ticks.length - 1].points[0].y
    }, line)
  }) : null, label ? ticks.map(function(tick) {
    var points = tick.points, text = tick.text, labelStyle = tick.labelStyle;
    var end2 = points[points.length - 1];
    return jsx("text", {
      attrs: _objectSpread2(_objectSpread2({
        x: end2.x - labelOffset,
        y: end2.y,
        text,
        textAlign: "right",
        textBaseline: "middle"
      }, label), labelStyle)
    });
  }) : null);
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/axis/rect/top.js
var top_default = function(props) {
  var ticks = props.ticks, coord = props.coord, style = props.style;
  var left = coord.left, top = coord.top, right = coord.right;
  var grid = style.grid, tickLine = style.tickLine, line = style.line, labelOffset = style.labelOffset, label = style.label;
  return jsx("group", null, grid ? ticks.map(function(tick) {
    var points = tick.points, gridStyle = tick.gridStyle;
    var start2 = points[0];
    var end2 = points[points.length - 1];
    return jsx("line", {
      attrs: _objectSpread2(_objectSpread2({
        x1: start2.x,
        y1: start2.y,
        x2: end2.x,
        y2: end2.y
      }, grid), gridStyle)
    });
  }) : null, tickLine && tickLine.length ? ticks.map(function(tick) {
    var points = tick.points;
    var end2 = points[points.length - 1];
    return jsx("line", {
      attrs: _objectSpread2({
        x1: end2.x,
        y1: end2.y,
        x2: end2.x,
        y2: end2.y - tickLine.length
      }, tickLine)
    });
  }) : null, line ? jsx("line", {
    attrs: _objectSpread2({
      x1: left,
      y1: top,
      x2: right,
      y2: top
    }, line)
  }) : null, label ? ticks.map(function(tick, _index) {
    var points = tick.points, text = tick.text, labelStyle = tick.labelStyle;
    var end2 = points[points.length - 1];
    return jsx("text", {
      attrs: _objectSpread2(_objectSpread2({
        x: end2.x,
        y: end2.y - labelOffset,
        textAlign: "center",
        textBaseline: "bottom",
        text
      }, label), labelStyle)
    });
  }) : null);
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/axis/rect/bottom.js
var bottom_default = function(props, context) {
  var ticks = props.ticks, coord = props.coord, style = props.style, animation = props.animation;
  var px2hd2 = context.px2hd;
  var left = coord.left, right = coord.right, bottom = coord.bottom;
  var grid = style.grid, tickLine = style.tickLine, line = style.line, labelOffset = style.labelOffset, label = style.label;
  return jsx("group", null, grid ? ticks.map(function(tick) {
    var points = tick.points, tickValue = tick.tickValue, gridStyle = tick.gridStyle;
    var start2 = points[0];
    var end2 = points[points.length - 1];
    return jsx("line", {
      key: tickValue,
      attrs: _objectSpread2(_objectSpread2({
        x1: start2.x,
        y1: start2.y,
        x2: end2.x,
        y2: end2.y
      }, grid), gridStyle)
    });
  }) : null, tickLine && tickLine.length ? ticks.map(function(tick) {
    var points = tick.points, tickValue = tick.tickValue;
    var start2 = points[0];
    return jsx("line", {
      key: tickValue,
      attrs: _objectSpread2({
        x1: start2.x,
        y1: start2.y,
        x2: start2.x,
        y2: start2.y + px2hd2(tickLine.length)
      }, tickLine)
    });
  }) : null, line ? jsx("line", {
    attrs: _objectSpread2({
      x1: left,
      y1: bottom,
      x2: right,
      y2: bottom
    }, line)
  }) : null, label ? ticks.map(function(tick, index) {
    var points = tick.points, text = tick.text, tickValue = tick.tickValue, labelStyle = tick.labelStyle;
    var start2 = points[0];
    var _ref = labelStyle || label || {}, _ref$align = _ref.align, align = _ref$align === void 0 ? "center" : _ref$align;
    var textAttrs = _objectSpread2(_objectSpread2({
      x: start2.x,
      y: start2.y + labelOffset,
      textBaseline: "top",
      text
    }, label), labelStyle);
    if (align === "between") {
      if (index === 0) {
        textAttrs.textAlign = "start";
      } else if (index === ticks.length - 1) {
        textAttrs.textAlign = "end";
      } else {
        textAttrs.textAlign = "center";
      }
    } else {
      textAttrs.textAlign = align;
    }
    return jsx("text", {
      key: tickValue,
      attrs: textAttrs,
      animation: animation || {
        appear: {
          easing: "linear",
          duration: 300,
          delay: 0,
          property: ["fillOpacity"],
          start: {
            fillOpacity: 0
          },
          end: {
            fillOpacity: 1
          }
        },
        update: {
          easing: "linear",
          duration: 450,
          delay: 0,
          property: ["x", "y"]
        },
        leave: {
          easing: "linear",
          duration: 450,
          delay: 0,
          property: ["fillOpacity"],
          start: {
            fillOpacity: 1
          },
          end: {
            fillOpacity: 0
          }
        }
      }
    });
  }) : null);
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/axis/rect/right.js
var right_default = function(props) {
  var ticks = props.ticks, coord = props.coord, style = props.style;
  var top = coord.top, right = coord.right, bottom = coord.bottom;
  var grid = style.grid, tickLine = style.tickLine, line = style.line, labelOffset = style.labelOffset, label = style.label;
  return jsx("group", null, grid ? ticks.map(function(tick) {
    var points = tick.points, gridStyle = tick.gridStyle;
    var start2 = points[0];
    var end2 = points[points.length - 1];
    return jsx("line", {
      attrs: _objectSpread2(_objectSpread2({
        x1: start2.x,
        y1: start2.y,
        x2: end2.x,
        y2: end2.y
      }, grid), gridStyle)
    });
  }) : null, tickLine && tickLine.length ? ticks.map(function(tick) {
    var points = tick.points;
    var end2 = points[points.length - 1];
    return jsx("line", {
      attrs: _objectSpread2({
        x1: end2.x,
        y1: end2.y,
        x2: end2.x + tickLine.length,
        y2: end2.y
      }, tickLine)
    });
  }) : null, line ? jsx("line", {
    attrs: _objectSpread2({
      x1: right,
      y1: top,
      x2: right,
      y2: bottom
    }, line)
  }) : null, label ? ticks.map(function(tick, _index) {
    var points = tick.points, text = tick.text, labelStyle = tick.labelStyle;
    var end2 = points[points.length - 1];
    return jsx("text", {
      attrs: _objectSpread2(_objectSpread2({
        x: end2.x + labelOffset,
        y: end2.y,
        textAlign: "left",
        textBaseline: "middle",
        text
      }, label), labelStyle)
    });
  }) : null);
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/axis/rect/left.js
var left_default = function(props) {
  var ticks = props.ticks, coord = props.coord, style = props.style, animation = props.animation;
  var left = coord.left, top = coord.top, bottom = coord.bottom;
  var grid = style.grid, tickLine = style.tickLine, line = style.line, labelOffset = style.labelOffset, label = style.label;
  return jsx("group", null, grid ? ticks.map(function(tick) {
    var points = tick.points, tickValue = tick.tickValue, gridStyle = tick.gridStyle;
    var start2 = points[0];
    var end2 = points[points.length - 1];
    return jsx("line", {
      key: tickValue,
      attrs: _objectSpread2(_objectSpread2({
        x1: start2.x,
        y1: start2.y,
        x2: end2.x,
        y2: end2.y
      }, grid), gridStyle)
    });
  }) : null, tickLine && tickLine.length ? ticks.map(function(tick) {
    var points = tick.points, tickValue = tick.tickValue;
    var start2 = points[0];
    return jsx("line", {
      key: tickValue,
      attrs: _objectSpread2({
        x1: start2.x,
        y1: start2.y,
        x2: start2.x - tickLine.length,
        y2: start2.y
      }, tickLine)
    });
  }) : null, line ? jsx("line", {
    attrs: _objectSpread2({
      x1: left,
      y1: top,
      x2: left,
      y2: bottom
    }, line)
  }) : null, label ? ticks.map(function(tick, _index) {
    var tickValue = tick.tickValue, points = tick.points, text = tick.text, labelStyle = tick.labelStyle;
    var start2 = points[0];
    return jsx("text", {
      key: tickValue,
      attrs: _objectSpread2(_objectSpread2({
        x: start2.x - labelOffset,
        y: start2.y,
        textAlign: "right",
        textBaseline: "middle",
        text
      }, label), labelStyle),
      animation: animation || {
        appear: {
          easing: "linear",
          duration: 300,
          delay: 0,
          property: ["fillOpacity"],
          start: {
            fillOpacity: 0
          },
          end: {
            fillOpacity: 1
          }
        },
        update: {
          easing: "linear",
          duration: 450,
          delay: 0,
          property: ["x", "y"]
        },
        leave: {
          easing: "linear",
          duration: 450,
          delay: 0,
          property: ["fillOpacity"],
          start: {
            fillOpacity: 1
          },
          end: {
            fillOpacity: 0
          }
        }
      }
    });
  }) : null);
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/axis/axisView.js
function isPolar(props) {
  return props.coord.isPolar;
}
var axisView_default = function(props) {
  if (isPolar(props)) {
    var dimType = props.dimType;
    if (dimType === "x") {
      return jsx(polar_x_default, _objectSpread2({}, props));
    }
    return jsx(polar_y_default, _objectSpread2({}, props));
  }
  var position = props.position;
  if (position === "right") {
    return jsx(right_default, _objectSpread2({}, props));
  }
  if (position === "left") {
    return jsx(left_default, _objectSpread2({}, props));
  }
  if (position === "top") {
    return jsx(top_default, _objectSpread2({}, props));
  }
  return jsx(bottom_default, _objectSpread2({}, props));
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/axis/index.js
var axis_default = withAxis_default(axisView_default);

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/legend/withLegend.js
var withLegend_default = function(View) {
  return function(_Component) {
    _inherits(Legend, _Component);
    var _super = _createSuper(Legend);
    function Legend(props) {
      var _this;
      _classCallCheck(this, Legend);
      _this = _super.call(this, props);
      _this.state = {
        filtered: {},
        items: []
      };
      return _this;
    }
    _createClass(Legend, [{
      key: "getOriginItems",
      value: function getOriginItems() {
        var chart2 = this.props.chart;
        return chart2.getLegendItems();
      }
    }, {
      key: "getItems",
      value: function getItems() {
        var _props$items;
        var props = this.props, state = this.state;
        var filtered = state.filtered;
        var renderItems = ((_props$items = props.items) === null || _props$items === void 0 ? void 0 : _props$items.length) ? props.items : this.getOriginItems();
        if (!renderItems)
          return null;
        return renderItems.map(function(item) {
          var tickValue = item.tickValue;
          return _objectSpread2(_objectSpread2({}, item), {}, {
            filtered: filtered[tickValue]
          });
        });
      }
    }, {
      key: "setItems",
      value: function setItems(items) {
        this.setState({
          items
        });
      }
    }, {
      key: "getMaxItemBox",
      value: function getMaxItemBox(legendShape) {
        var maxItemWidth = 0;
        var maxItemHeight = 0;
        (legendShape.get("children") || []).forEach(function(child) {
          var _child$get = child.get("attrs"), width = _child$get.width, height = _child$get.height;
          maxItemWidth = Math.max(maxItemWidth, width);
          maxItemHeight = Math.max(maxItemHeight, height);
        });
        return {
          width: maxItemWidth,
          height: maxItemHeight
        };
      }
      // 计算 legend 的位置
    }, {
      key: "_init",
      value: function _init() {
        var props = this.props, context = this.context;
        var parentLayout = props.layout, customWidth = props.width, customHeight = props.height, _props$position = props.position, position = _props$position === void 0 ? "top" : _props$position;
        var items = this.getItems();
        if (!items || !items.length)
          return;
        var left = parentLayout.left, top = parentLayout.top, right = parentLayout.right, bottom = parentLayout.bottom, layoutWidth = parentLayout.width, layoutHeight = parentLayout.height;
        var width = context.px2hd(customWidth) || layoutWidth;
        var shape = renderShape(this, this.render(), false);
        var _this$getMaxItemBox = this.getMaxItemBox(shape), itemMaxWidth = _this$getMaxItemBox.width, itemMaxHeight = _this$getMaxItemBox.height;
        var lineMaxCount = Math.floor(width / itemMaxWidth);
        var itemCount = items.length;
        var lineCount = Math.ceil(itemCount / lineMaxCount);
        var itemWidth = width / lineMaxCount;
        var autoHeight = itemMaxHeight * lineCount;
        var style = {
          left,
          top,
          width,
          // height 默认自适应
          height: void 0,
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "flex-start"
        };
        if (lineCount === 1) {
          style.justifyContent = "space-between";
        }
        if (position === "top") {
          style.height = customHeight ? customHeight : autoHeight;
        }
        if (position === "left") {
          style.flexDirection = "column";
          style.justifyContent = "center";
          style.width = itemMaxWidth;
          style.height = customHeight ? customHeight : layoutHeight;
        }
        if (position === "right") {
          style.flexDirection = "column";
          style.alignItems = "flex-start";
          style.justifyContent = "center";
          style.width = itemMaxWidth;
          style.height = customHeight ? customHeight : layoutHeight;
          style.left = right - itemMaxWidth;
        }
        if (position === "bottom") {
          style.top = bottom - autoHeight;
          style.height = customHeight ? customHeight : autoHeight;
        }
        this.itemWidth = itemWidth;
        this.style = style;
        shape.remove();
      }
    }, {
      key: "updateCoord",
      value: function updateCoord() {
        var context = this.context, props = this.props, style = this.style;
        var _props$position2 = props.position, position = _props$position2 === void 0 ? "top" : _props$position2, _props$margin = props.margin, margin = _props$margin === void 0 ? "30px" : _props$margin, chart2 = props.chart;
        var width = style.width, height = style.height;
        var marginNumber = context.px2hd(margin);
        chart2.updateCoordFor(this, {
          position,
          width: width + marginNumber,
          height: height + marginNumber
        });
      }
    }, {
      key: "willMount",
      value: function willMount() {
        var items = this.getItems();
        if (!items || !items.length)
          return;
        this._init();
        this.updateCoord();
      }
    }, {
      key: "didMount",
      value: function didMount() {
        this._initEvent();
      }
    }, {
      key: "willUpdate",
      value: function willUpdate() {
        var items = this.getItems();
        if (!items || !items.length)
          return;
        this.updateCoord();
      }
    }, {
      key: "_initEvent",
      value: function _initEvent() {
        var _this2 = this;
        var context = this.context, props = this.props, container = this.container;
        var canvas = context.canvas;
        var chart2 = props.chart, _props$clickable = props.clickable, clickable = _props$clickable === void 0 ? true : _props$clickable, onClick = props.onClick;
        if (!clickable)
          return;
        canvas.on("click", function(ev) {
          var points = ev.points;
          var point = points[0];
          var bbox = container.getBBox();
          if (!isInBBox(bbox, point)) {
            return;
          }
          var legendItems = getElementsByClassName("legend-item", container);
          if (!legendItems.length) {
            return;
          }
          var clickItem = find_default(legendItems, function(item) {
            var itemBBox = item.getBBox();
            return isInBBox(itemBBox, point);
          });
          if (!clickItem) {
            return;
          }
          var dataItem = clickItem.get("data-item");
          if (!dataItem) {
            return;
          }
          if (is_function_default(onClick)) {
            onClick(dataItem);
          }
          var field = dataItem.field, tickValue = dataItem.tickValue;
          var prevFiltered = _this2.state.filtered;
          var filtered = _objectSpread2(_objectSpread2({}, prevFiltered), {}, _defineProperty({}, tickValue, !prevFiltered[tickValue]));
          _this2.setState({
            filtered
          });
          chart2.filter(field, function(value) {
            return !filtered[value];
          });
        });
      }
    }, {
      key: "render",
      value: function render2() {
        var props = this.props, itemWidth = this.itemWidth, style = this.style;
        var items = this.getItems();
        if (!items || !items.length) {
          return null;
        }
        return jsx(View, _objectSpread2(_objectSpread2({}, props), {}, {
          items,
          itemWidth,
          style: _objectSpread2(_objectSpread2({}, style), props.style)
        }));
      }
    }]);
    return Legend;
  }(component_default);
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/legend/legendView.js
var Marker2 = function Marker3(_ref) {
  var type = _ref.type, color2 = _ref.color;
  if (type === "square") {
    return jsx("rect", {
      style: {
        width: "12px",
        height: "12px",
        marginRight: "10px"
      },
      attrs: {
        fill: color2
      }
    });
  }
  if (type === "line") {
    return jsx("line", {
      style: {
        width: "19px",
        marginRight: "10px"
      },
      attrs: {
        strokeStyle: color2,
        lineCap: "round",
        lineWidth: "4px"
      }
    });
  }
  return jsx("circle", {
    style: {
      width: "12px",
      height: "12px",
      marginRight: "10px"
    },
    attrs: {
      fill: color2
    }
  });
};
var legendView_default = function(props) {
  var items = props.items, itemWidth = props.itemWidth, itemFormatter = props.itemFormatter, style = props.style, _props$marker = props.marker, marker = _props$marker === void 0 ? "circle" : _props$marker, itemStyle = props.itemStyle, nameStyle = props.nameStyle, valueStyle = props.valueStyle, valuePrefix = props.valuePrefix;
  var formatValue = function formatValue2(value) {
    var valuePrefix2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ": ";
    return "".concat(valuePrefix2).concat(value);
  };
  return jsx("group", {
    style
  }, items.map(function(item) {
    var color2 = item.color, name = item.name, value = item.value, filtered = item.filtered, tickValue = item.tickValue;
    var valueText = is_function_default(itemFormatter) ? itemFormatter(value, tickValue) : value;
    return jsx("group", {
      className: "legend-item",
      style: _objectSpread2({
        width: itemWidth,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: ["6px", "6px", "6px", 0]
      }, itemStyle),
      "data-item": item
    }, jsx(Marker2, {
      color: filtered ? "#bfbfbf" : color2,
      type: marker
    }), jsx("text", {
      attrs: _objectSpread2({
        fill: filtered ? "#bfbfbf" : "#808080",
        text: name
      }, nameStyle)
    }), valueText ? jsx("text", {
      attrs: _objectSpread2({
        fill: "#808080",
        text: formatValue(valueText, valuePrefix)
      }, valueStyle)
    }) : null);
  }));
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/legend/index.js
var legend_default = withLegend_default(legendView_default);

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/guide/withGuide.js
function isInBBox2(bbox, point) {
  var minX = bbox.minX, maxX = bbox.maxX, minY = bbox.minY, maxY = bbox.maxY;
  var x = point.x, y = point.y;
  return minX <= x && maxX >= x && minY <= y && maxY >= y;
}
var withGuide_default = function(View) {
  return function(_Component) {
    _inherits(Guide, _Component);
    var _super = _createSuper(Guide);
    function Guide(props) {
      var _this;
      _classCallCheck(this, Guide);
      _this = _super.call(this, props);
      _this.triggerRef = {};
      _this.state = {};
      return _this;
    }
    _createClass(Guide, [{
      key: "willMount",
      value: function willMount() {
        _get(_getPrototypeOf(Guide.prototype), "willMount", this).call(this);
        this.getGuideBBox();
      }
    }, {
      key: "didMount",
      value: function didMount() {
        var _this2 = this;
        var context = this.context, props = this.props;
        var canvas = context.canvas;
        var onClick = props.onClick;
        canvas.on("click", function(ev) {
          var points = ev.points;
          var shape = _this2.triggerRef.current;
          if (!shape || shape.isDestroyed())
            return;
          var bbox = shape.getBBox();
          if (isInBBox2(bbox, points[0])) {
            ev.shape = shape;
            onClick && onClick(ev);
          }
        });
      }
    }, {
      key: "didUpdate",
      value: function didUpdate() {
        _get(_getPrototypeOf(Guide.prototype), "didUpdate", this).call(this);
        var shape = this.triggerRef.current;
        if (!shape || shape.isDestroyed())
          return;
        var _shape$get = shape.get("attrs"), x = _shape$get.x, y = _shape$get.y, width = _shape$get.width, height = _shape$get.height;
        var bbox = {
          minX: x,
          minY: y,
          maxX: x + width,
          maxY: y + height,
          width,
          height
        };
        this.setState({
          guideBBox: bbox
        });
      }
    }, {
      key: "getGuideBBox",
      value: function getGuideBBox() {
        var shape = renderShape(this, this.render(), false);
        var _shape$get2 = shape.get("attrs"), x = _shape$get2.x, y = _shape$get2.y, width = _shape$get2.width, height = _shape$get2.height;
        var bbox = {
          minX: x,
          minY: y,
          maxX: x + width,
          maxY: y + height,
          width,
          height
        };
        this.setState({
          guideBBox: bbox
        });
        shape.destroy();
      }
      // 解析record里的模板字符串，如min、max、50%...
    }, {
      key: "parseReplaceStr",
      value: function parseReplaceStr(value, scale3) {
        var replaceMap = {
          min: 0,
          max: 1,
          median: 0.5
        };
        if (!is_nil_default(replaceMap[value])) {
          return replaceMap[value];
        }
        if (is_string_default(value) && value.indexOf("%") != -1 && !isNaN(Number(value.slice(0, -1)))) {
          var rateValue = Number(value.slice(0, -1));
          var percent = rateValue / 100;
          return percent;
        }
        return scale3.scale(value);
      }
    }, {
      key: "parsePoint",
      value: function parsePoint(record) {
        var props = this.props;
        var chart2 = props.chart, coord = props.coord;
        var xScale = chart2.getXScales()[0];
        var yScale = chart2.getYScales()[0];
        var x = this.parseReplaceStr(record[xScale.field], xScale);
        var y = this.parseReplaceStr(record[yScale.field], yScale);
        return coord.convertPoint({
          x,
          y
        });
      }
    }, {
      key: "convertPoints",
      value: function convertPoints3(records) {
        var _this3 = this;
        return records.map(function(record) {
          return _this3.parsePoint(record);
        });
      }
    }, {
      key: "getGuideTheme",
      value: function getGuideTheme() {
        var context = this.context;
        var theme = context.theme;
        return theme.guide;
      }
    }, {
      key: "render",
      value: function render2() {
        var props = this.props, context = this.context;
        var coord = props.coord, _props$records = props.records, records = _props$records === void 0 ? [] : _props$records, animation = props.animation, chart2 = props.chart;
        var width = context.width, height = context.height;
        var points = this.convertPoints(records);
        var theme = this.getGuideTheme();
        var guideBBox = this.state.guideBBox;
        var animationCfg = animation;
        if (is_function_default(animation)) {
          animationCfg = animation(points, chart2);
        }
        return jsx(View, _objectSpread2(_objectSpread2({
          triggerRef: this.triggerRef,
          points,
          theme,
          coord
        }, props), {}, {
          canvasWidth: width,
          canvasHeight: height,
          guideBBox,
          animation: animationCfg
        }));
      }
    }]);
    return Guide;
  }(component_default);
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/guide/views/Text.js
var Text_default = function(props, context) {
  var _props$theme = props.theme, theme = _props$theme === void 0 ? {} : _props$theme;
  var _deepMix2 = deep_mix_default(_objectSpread2({}, theme.text), props), points = _deepMix2.points, style = _deepMix2.style, offsetX = _deepMix2.offsetX, offsetY = _deepMix2.offsetY, content = _deepMix2.content, animation = _deepMix2.animation;
  var _ref = points[0] || {}, x = _ref.x, y = _ref.y;
  var offsetXNum = context.px2hd(offsetX);
  var offsetYNum = context.px2hd(offsetY);
  var posX = x + (offsetXNum || 0);
  var posY = y + (offsetYNum || 0);
  return jsx("text", {
    attrs: _objectSpread2({
      text: content,
      x: posX,
      y: posY
    }, style),
    animation: deep_mix_default({
      update: {
        easing: "linear",
        duration: 450,
        property: ["x", "y"]
      }
    }, animation)
  });
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/guide/views/Point.js
var Point_default = function(props, context) {
  var theme = props.theme;
  var _deepMix2 = deep_mix_default(_objectSpread2({}, theme.point), props), points = _deepMix2.points, style = _deepMix2.style, offsetX = _deepMix2.offsetX, offsetY = _deepMix2.offsetY, animation = _deepMix2.animation;
  var _ref = points[0] || {}, x = _ref.x, y = _ref.y;
  var offsetXNum = context.px2hd(offsetX);
  var offsetYNum = context.px2hd(offsetY);
  var posX = x + (offsetXNum || 0);
  var posY = y + (offsetYNum || 0);
  return jsx("group", null, jsx("circle", {
    attrs: _objectSpread2({
      x: posX,
      y: posY
    }, style),
    animation
  }));
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/guide/views/Line.js
var Line_default = function(props, context) {
  var _props$theme = props.theme, theme = _props$theme === void 0 ? {} : _props$theme;
  var _deepMix2 = deep_mix_default(_objectSpread2({}, theme.line), props), points = _deepMix2.points, style = _deepMix2.style, offsetX = _deepMix2.offsetX, offsetY = _deepMix2.offsetY, animation = _deepMix2.animation;
  var _ref = points[0] || {}, x1 = _ref.x, y1 = _ref.y;
  var _ref2 = points[1] || {}, x2 = _ref2.x, y2 = _ref2.y;
  var offsetXNum = context.px2hd(offsetX);
  var offsetYNum = context.px2hd(offsetY);
  var posX1 = x1 + (is_array_default(offsetXNum) ? offsetXNum[0] || 0 : offsetXNum || 0);
  var posY1 = y1 + (is_array_default(offsetYNum) ? offsetYNum[0] || 0 : offsetYNum || 0);
  var posX2 = x2 + (is_array_default(offsetXNum) ? offsetXNum[1] || 0 : offsetXNum || 0);
  var posY2 = y2 + (is_array_default(offsetYNum) ? offsetYNum[1] || 0 : offsetYNum || 0);
  return jsx("group", null, jsx("line", {
    attrs: _objectSpread2({
      x1: posX1,
      y1: posY1,
      x2: posX2,
      y2: posY2
    }, style),
    animation
  }));
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/guide/views/Arc.js
var Arc_default = function(props) {
  var _props$theme = props.theme, theme = _props$theme === void 0 ? {} : _props$theme;
  var _deepMix2 = deep_mix_default(_objectSpread2({}, theme.line), props), coord = _deepMix2.coord, points = _deepMix2.points, style = _deepMix2.style, animation = _deepMix2.animation;
  var start2 = points[0] || {};
  var end2 = points[1] || {};
  var coordCenter = coord.center;
  var radius = Math.sqrt((start2.x - coordCenter.x) * (start2.x - coordCenter.x) + (start2.y - coordCenter.y) * (start2.y - coordCenter.y));
  var startAngle = Math.atan2(start2.y - coordCenter.y, start2.x - coordCenter.x);
  var endAngle = Math.atan2(end2.y - coordCenter.y, end2.x - coordCenter.x);
  return jsx("group", null, jsx("arc", {
    attrs: _objectSpread2({
      x: coordCenter.x,
      y: coordCenter.y,
      r: radius,
      startAngle,
      endAngle
    }, style),
    animation
  }));
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/guide/views/Rect.js
var Rect_default = function(props) {
  var _props$theme = props.theme, theme = _props$theme === void 0 ? {} : _props$theme;
  var _deepMix2 = deep_mix_default(_objectSpread2({}, theme.rect), props), points = _deepMix2.points, style = _deepMix2.style, animation = _deepMix2.animation;
  var start2 = points[0] || {};
  var end2 = points[1] || {};
  return jsx("group", null, jsx("rect", {
    attrs: _objectSpread2({
      x: Math.min(start2.x, end2.x),
      y: Math.min(start2.y, end2.y),
      width: Math.abs(end2.x - start2.x),
      height: Math.abs(start2.y - end2.y)
    }, style),
    animation
  }));
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/guide/views/Image.js
var defaultProps = {
  offsetX: 0,
  offsetY: 0,
  points: [],
  src: ""
};
var baseAttrs = {
  height: "20px",
  width: "20px"
};
var Image_default = function(props, context) {
  var cfg = deep_mix_default({}, defaultProps, props);
  var points = cfg.points, style = cfg.style, attrs = cfg.attrs, offsetX = cfg.offsetX, offsetY = cfg.offsetY, src = cfg.src, animation = cfg.animation;
  var _ref = points[0] || {}, x = _ref.x, y = _ref.y;
  var _attrs$height = attrs.height, height = _attrs$height === void 0 ? 0 : _attrs$height, _attrs$width = attrs.width, width = _attrs$width === void 0 ? 0 : _attrs$width;
  var heightNum = context.px2hd(height + "px");
  var widthNum = context.px2hd(width + "px");
  var offsetXNum = context.px2hd(offsetX);
  var offsetYNum = context.px2hd(offsetY);
  var posX = x + (offsetXNum || 0) - widthNum / 2;
  var posY = y + (offsetYNum || 0) - heightNum / 2;
  return jsx("group", {
    style
  }, jsx("image", {
    attrs: _objectSpread2(_objectSpread2(_objectSpread2({}, baseAttrs), attrs), {}, {
      height: heightNum,
      width: widthNum,
      x: posX,
      y: posY,
      src
    }),
    cacheImage: true,
    animation: deep_mix_default({
      update: {
        easing: "linear",
        duration: 450,
        property: ["x", "y"]
      }
    }, animation)
  }));
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/guide/views/Tag.js
var defaultProps2 = {
  offsetX: 0,
  offsetY: 0,
  points: [],
  direct: "tl",
  side: 6,
  autoAdjust: true
};
var defaultStyle = {
  container: {
    fill: "#1677FF",
    radius: 2,
    padding: [3, 5]
  },
  text: {
    fontSize: "22px",
    fill: "#fff"
  },
  arrow: {
    fill: "#1677FF"
  }
};
var Tag_default = function(props, context) {
  var cfg = _objectSpread2(_objectSpread2({}, defaultProps2), props);
  var points = cfg.points, content = cfg.content, offsetX = cfg.offsetX, offsetY = cfg.offsetY, direct = cfg.direct, side = cfg.side, autoAdjust = cfg.autoAdjust, canvasWidth = cfg.canvasWidth, canvasHeight = cfg.canvasHeight, guideBBox = cfg.guideBBox, background = cfg.background, textStyle = cfg.textStyle, triggerRef = cfg.triggerRef;
  var _ref = points[0] || {}, x = _ref.x, y = _ref.y;
  var _ref2 = guideBBox || {}, guideWidth = _ref2.width, guideHeight = _ref2.height;
  var offsetXNum = context.px2hd(offsetX);
  var offsetYNum = context.px2hd(offsetY);
  var posX = x + (offsetXNum || 0);
  var posY = y + (offsetYNum || 0);
  var _getDirect = function _getDirect2(point) {
    var newDirect = direct;
    var x2 = point.x, y2 = point.y;
    var vertical = newDirect[0];
    var horizontal = newDirect[1];
    if (vertical === "t" && y2 - side - guideHeight < 0) {
      vertical = "b";
    } else if (vertical === "b" && y2 + side + guideHeight > canvasHeight) {
      vertical = "t";
    }
    var diff2 = vertical === "c" ? side : 0;
    if (horizontal === "l" && x2 - diff2 - guideWidth < 0) {
      horizontal = "r";
    } else if (horizontal === "r" && x2 + diff2 + guideWidth > canvasWidth) {
      horizontal = "l";
    } else if (horizontal === "c") {
      if (guideWidth / 2 + x2 + diff2 > canvasWidth) {
        horizontal = "l";
      } else if (x2 - guideWidth / 2 - diff2 < 0) {
        horizontal = "r";
      }
    }
    newDirect = vertical + horizontal;
    return newDirect;
  };
  var _getArrowPoints = function _getArrowPoints2(direct2) {
    var arrowPoints2 = [];
    if (direct2 === "tl") {
      arrowPoints2 = [{
        x: posX,
        y: posY - side - 1
      }, {
        x: posX,
        y: posY
      }, {
        x: posX - side,
        y: posY - side - 1
      }];
      posX -= guideWidth || 0;
      posY = posY - (guideHeight || 0) - side;
    } else if (direct2 === "cl") {
      arrowPoints2 = [{
        x: posX - side - 1,
        y: posY - side
      }, {
        x: posX - side - 1,
        y: posY + side
      }, {
        x: posX,
        y: posY
      }];
      posX = posX - (guideWidth || 0) - side;
      posY -= guideHeight / 2 || 0;
    } else if (direct2 === "bl") {
      arrowPoints2 = [{
        x: posX,
        y: posY
      }, {
        x: posX,
        y: posY + side + 1
      }, {
        x: posX - side,
        y: posY + side + 1
      }];
      posX = posX - (guideWidth || 0);
      posY += side;
    } else if (direct2 === "bc") {
      arrowPoints2 = [{
        x: posX,
        y: posY
      }, {
        x: posX - side,
        y: posY + side + 1
      }, {
        x: posX + side,
        y: posY + side + 1
      }];
      posX = posX - (guideWidth / 2 || 0);
      posY = posY + side;
    } else if (direct2 === "br") {
      arrowPoints2 = [{
        x: posX,
        y: posY
      }, {
        x: posX,
        y: posY + side + 1
      }, {
        x: posX + side,
        y: posY + side + 1
      }];
      posY += side;
    } else if (direct2 === "cr") {
      arrowPoints2 = [{
        x: posX,
        y: posY
      }, {
        x: posX + side,
        y: posY - side
      }, {
        x: posX + side,
        y: posY + side
      }];
      posX += side;
      posY -= guideHeight / 2 || 0;
    } else if (direct2 === "tr") {
      arrowPoints2 = [{
        x: posX,
        y: posY
      }, {
        x: posX,
        y: posY - side - 1
      }, {
        x: posX + side,
        y: posY - side - 1
      }];
      posY = posY - (guideHeight || 0) - side;
    } else if (direct2 === "tc") {
      arrowPoints2 = [{
        x: posX,
        y: posY
      }, {
        x: posX - side,
        y: posY - side - 1
      }, {
        x: posX + side,
        y: posY - side - 1
      }];
      posX -= guideWidth / 2 || 0;
      posY = posY - (guideHeight || 0) - side;
    }
    return arrowPoints2;
  };
  var dr = autoAdjust ? _getDirect(points[0]) : direct;
  var arrowPoints = _getArrowPoints(dr);
  return jsx("group", {
    attrs: _objectSpread2({
      fill: defaultStyle.container.fill,
      radius: defaultStyle.container.radius
    }, background),
    style: _objectSpread2({
      left: posX,
      top: posY,
      padding: defaultStyle.container.padding
    }, background),
    ref: triggerRef
  }, jsx("text", {
    attrs: _objectSpread2({
      text: content,
      fontSize: defaultStyle.text.fontSize,
      fill: defaultStyle.text.fill
    }, textStyle)
  }), guideBBox && jsx("polygon", {
    attrs: {
      points: arrowPoints,
      fill: (background === null || background === void 0 ? void 0 : background.fill) || defaultStyle.arrow.fill
    }
  }));
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/guide/index.js
var DefaultGuideView = function DefaultGuideView2() {
  return null;
};
var TextGuide = withGuide_default(Text_default);
var PointGuide = withGuide_default(Point_default);
var LineGuide = withGuide_default(Line_default);
var ArcGuide = withGuide_default(Arc_default);
var RectGuide = withGuide_default(Rect_default);
var ImageGuide = withGuide_default(Image_default);
var TagGuide = withGuide_default(Tag_default);
var guide_default = withGuide_default(DefaultGuideView);

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/tooltip/withTooltip.js
var withTooltip_default = function(View) {
  return function(_Component) {
    _inherits(Tooltip, _Component);
    var _super = _createSuper(Tooltip);
    function Tooltip(props) {
      var _this;
      _classCallCheck(this, Tooltip);
      _this = _super.call(this, props);
      _this._triggerOn = function(ev) {
        var points = ev.points;
        _this.show(points[0], ev);
      };
      _this._triggerOff = function() {
        var _assertThisInitialize = _assertThisInitialized(_this), _assertThisInitialize2 = _assertThisInitialize.props.alwaysShow, alwaysShow = _assertThisInitialize2 === void 0 ? false : _assertThisInitialize2;
        if (!alwaysShow) {
          _this.hide();
        }
      };
      _this.state = {
        records: null
      };
      return _this;
    }
    _createClass(Tooltip, [{
      key: "updateCoord",
      value: function updateCoord() {
        var props = this.props, context = this.context;
        var _props$padding = props.padding, padding = _props$padding === void 0 ? "10px" : _props$padding, chart2 = props.chart;
        chart2.updateCoordFor(this, {
          position: "top",
          width: 0,
          height: context.px2hd(padding)
        });
      }
    }, {
      key: "willMount",
      value: function willMount() {
        this.updateCoord();
      }
    }, {
      key: "didMount",
      value: function didMount() {
        this._initShow();
        this._initEvent();
      }
    }, {
      key: "willReceiveProps",
      value: function willReceiveProps(nextProps) {
        var nextDefaultItem = nextProps.defaultItem, nextCoord = nextProps.coord;
        var _this$props = this.props, lastDefaultItem = _this$props.defaultItem, lastCoord = _this$props.coord;
        if (!equal_default(nextDefaultItem, lastDefaultItem) || !equal_default(nextCoord, lastCoord)) {
          this._showByData(nextDefaultItem);
        }
      }
    }, {
      key: "_initShow",
      value: function _initShow() {
        var props = this.props;
        var defaultItem = props.defaultItem;
        this._showByData(defaultItem);
      }
    }, {
      key: "_showByData",
      value: function _showByData(dataItem) {
        var _this2 = this;
        if (!dataItem)
          return;
        var props = this.props;
        var chart2 = props.chart;
        setTimeout(function() {
          var point = chart2.getPosition(dataItem);
          _this2.show(point);
        }, 0);
      }
    }, {
      key: "_initEvent",
      value: function _initEvent() {
        var context = this.context, props = this.props;
        var canvas = context.canvas;
        var _props$triggerOn = props.triggerOn, triggerOn = _props$triggerOn === void 0 ? "press" : _props$triggerOn, _props$triggerOff = props.triggerOff, triggerOff = _props$triggerOff === void 0 ? "pressend" : _props$triggerOff;
        canvas.on(triggerOn, this._triggerOn);
        canvas.on(triggerOff, this._triggerOff);
      }
    }, {
      key: "didUnmount",
      value: function didUnmount() {
        this._clearEvents();
      }
    }, {
      key: "_clearEvents",
      value: function _clearEvents() {
        var context = this.context, props = this.props;
        var canvas = context.canvas;
        var _props$triggerOn2 = props.triggerOn, triggerOn = _props$triggerOn2 === void 0 ? "press" : _props$triggerOn2, _props$triggerOff2 = props.triggerOff, triggerOff = _props$triggerOff2 === void 0 ? "pressend" : _props$triggerOff2;
        canvas.off(triggerOn, this._triggerOn);
        canvas.off(triggerOff, this._triggerOff);
      }
    }, {
      key: "show",
      value: function show(point, _ev) {
        var props = this.props;
        var chart2 = props.chart, onChange = props.onChange;
        var snapRecords = chart2.getSnapRecords(point, true);
        if (!snapRecords || !snapRecords.length)
          return;
        var legendItems = chart2.getLegendItems();
        var _snapRecords$ = snapRecords[0], xField = _snapRecords$.xField, yField = _snapRecords$.yField;
        var xScale = chart2.getScale(xField);
        var yScale = chart2.getScale(yField);
        var records = snapRecords.map(function(record) {
          var origin = record.origin, xField2 = record.xField, yField2 = record.yField;
          var value = yScale.getText(origin[yField2]);
          var name = yScale.alias;
          if (!name) {
            name = xScale.getText(origin[xField2]);
            if (legendItems && legendItems.length) {
              var item = find_default(legendItems, function(item2) {
                var field = item2.field, tickValue = item2.tickValue;
                return origin[field] === tickValue;
              });
              if (item && item.name) {
                name = item.name;
              }
            }
          }
          return _objectSpread2(_objectSpread2({}, record), {}, {
            name,
            value
          });
        });
        if (!is_array_default(records) || !records.length) {
          return;
        }
        this.setState({
          records
        });
        if (is_function_default(onChange)) {
          onChange(records);
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        this.setState({
          records: null
        });
      }
    }, {
      key: "render",
      value: function render2() {
        var props = this.props, state = this.state;
        var visible = props.visible;
        if (visible === false) {
          return null;
        }
        var records = state.records;
        if (!records || !records.length)
          return null;
        return jsx(View, _objectSpread2(_objectSpread2({}, props), {}, {
          records
        }));
      }
    }]);
    return Tooltip;
  }(component_default);
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/createRef.js
function createRef() {
  var ref = {
    current: null
  };
  return ref;
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/tooltip/tooltipView.js
var defaultStyle2 = {
  showTitle: false,
  showCrosshairs: false,
  crosshairsType: "y",
  crosshairsStyle: {
    stroke: "rgba(0, 0, 0, 0.25)",
    lineWidth: "2px"
  },
  showTooltipMarker: false,
  markerBackgroundStyle: {
    fill: "#CCD6EC",
    opacity: 0.3,
    padding: "6px"
  },
  tooltipMarkerStyle: {
    fill: "#fff",
    lineWidth: "3px"
  },
  background: {
    radius: "4px",
    fill: "rgba(0, 0, 0, 0.65)",
    padding: ["6px", "10px"]
  },
  titleStyle: {
    fontSize: "24px",
    fill: "#fff",
    textAlign: "start",
    textBaseline: "top"
  },
  nameStyle: {
    fontSize: "24px",
    fill: "rgba(255, 255, 255, 0.65)",
    textAlign: "start",
    textBaseline: "middle"
  },
  valueStyle: {
    fontSize: "24px",
    fill: "#fff",
    textAlign: "start",
    textBaseline: "middle"
  },
  joinString: ": ",
  showItemMarker: true,
  itemMarkerStyle: {
    width: "12px",
    radius: "6px",
    symbol: "circle",
    lineWidth: "2px",
    stroke: "#fff"
  },
  layout: "horizontal",
  snap: false,
  xTipTextStyle: {
    fontSize: "24px",
    fill: "#fff"
  },
  yTipTextStyle: {
    fontSize: "24px",
    fill: "#fff"
  },
  xTipBackground: {
    radius: "4px",
    fill: "rgba(0, 0, 0, 0.65)",
    padding: ["6px", "10px"],
    marginLeft: "-50%",
    marginTop: "6px"
  },
  yTipBackground: {
    radius: "4px",
    fill: "rgba(0, 0, 0, 0.65)",
    padding: ["6px", "10px"],
    marginLeft: "-100%",
    marginTop: "-50%"
  }
};
function directionEnabled(mode, dir) {
  if (mode === void 0) {
    return true;
  } else if (typeof mode === "string") {
    return mode.indexOf(dir) !== -1;
  }
  return false;
}
var RenderItemMarker = function RenderItemMarker2(props) {
  var records = props.records, coord = props.coord, context = props.context, markerBackgroundStyle = props.markerBackgroundStyle;
  var point = coord.convertPoint({
    x: 1,
    y: 1
  });
  var padding = context.px2hd(markerBackgroundStyle.padding || "6px");
  var xPoints = [].concat(_toConsumableArray(records.map(function(record) {
    return record.xMin;
  })), _toConsumableArray(records.map(function(record) {
    return record.xMax;
  })));
  var yPoints = [].concat(_toConsumableArray(records.map(function(record) {
    return record.yMin;
  })), _toConsumableArray(records.map(function(record) {
    return record.yMax;
  })));
  if (coord.transposed) {
    xPoints.push(point.x);
  } else {
    yPoints.push(point.y);
  }
  var xMin = Math.min.apply(null, xPoints);
  var xMax = Math.max.apply(null, xPoints);
  var yMin = Math.min.apply(null, yPoints);
  var yMax = Math.max.apply(null, yPoints);
  var x = coord.transposed ? xMin : xMin - padding;
  var y = coord.transposed ? yMin - padding : yMin;
  var width = coord.transposed ? xMax - xMin : xMax - xMin + 2 * padding;
  var height = coord.transposed ? yMax - yMin + 2 * padding : yMax - yMin;
  return jsx("rect", {
    attrs: _objectSpread2({
      x,
      y,
      width,
      height
    }, markerBackgroundStyle)
  });
};
var RenderCrosshairs = function RenderCrosshairs2(props) {
  var records = props.records, coord = props.coord, chart2 = props.chart, crosshairsType = props.crosshairsType, crosshairsStyle = props.crosshairsStyle;
  var coordLeft = coord.left, coordTop = coord.top, coordRight = coord.right, coordBottom = coord.bottom, center = coord.center;
  var firstRecord = records[0];
  var x = firstRecord.x, y = firstRecord.y, origin = firstRecord.origin, xField = firstRecord.xField;
  if (coord.isPolar) {
    var xScale = chart2.getScale(xField);
    var ticks = xScale.getTicks();
    var tick = find_default(ticks, function(tick2) {
      return origin[xField] === tick2.tickValue;
    });
    var end2 = coord.convertPoint({
      x: tick.value,
      y: 1
    });
    return jsx("line", {
      attrs: _objectSpread2({
        x1: center.x,
        y1: center.y,
        x2: end2.x,
        y2: end2.y
      }, crosshairsStyle)
    });
  }
  return jsx("group", null, directionEnabled(crosshairsType, "x") ? jsx("line", {
    attrs: _objectSpread2({
      x1: coordLeft,
      y1: y,
      x2: coordRight,
      y2: y
    }, crosshairsStyle)
  }) : null, directionEnabled(crosshairsType, "y") ? jsx("line", {
    attrs: _objectSpread2({
      x1: x,
      y1: coordTop,
      x2: x,
      y2: coordBottom
    }, crosshairsStyle)
  }) : null);
};
var TooltipView = function(_Component) {
  _inherits(TooltipView2, _Component);
  var _super = _createSuper(TooltipView2);
  function TooltipView2(props) {
    var _this;
    _classCallCheck(this, TooltipView2);
    _this = _super.call(this, props);
    _this.rootRef = createRef();
    _this.arrowRef = createRef();
    return _this;
  }
  _createClass(TooltipView2, [{
    key: "_position",
    value: function _position() {
      var props = this.props, context = this.context, rootRef = this.rootRef, arrowRef = this.arrowRef;
      var group = rootRef.current;
      if (!group) {
        return;
      }
      var records = props.records, coord = props.coord;
      var arrowWidth = context.px2hd("6px");
      var record = records[0];
      var x = record.x;
      var coordLeft = coord.left, coordWidth = coord.width;
      var _group$get = group.get("attrs"), y = _group$get.y, width = _group$get.width, height = _group$get.height, radius = _group$get.radius;
      var halfWidth = width / 2;
      var offsetX = Math.min(Math.max(x - coordLeft - halfWidth, -arrowWidth - radius), coordWidth - width + arrowWidth + radius);
      var offset = Math.min(y, height + arrowWidth);
      group.moveTo(offsetX, -offset);
      arrowRef.current.moveTo(0, height - offset);
    }
  }, {
    key: "didMount",
    value: function didMount() {
      this._position();
    }
  }, {
    key: "didUpdate",
    value: function didUpdate() {
      this._position();
    }
  }, {
    key: "render",
    value: function render2() {
      var props = this.props, context = this.context;
      var records = props.records, coord = props.coord;
      var coordLeft = coord.left, coordTop = coord.top, coordBottom = coord.bottom;
      var firstRecord = records[0];
      var x = firstRecord.x, y = firstRecord.y;
      var xFirstText = firstRecord.name, yFirstText = firstRecord.value;
      var chart2 = props.chart, customBackground = props.background, _props$showTooltipMar = props.showTooltipMarker, showTooltipMarker = _props$showTooltipMar === void 0 ? defaultStyle2.showTooltipMarker : _props$showTooltipMar, _props$markerBackgrou = props.markerBackgroundStyle, markerBackgroundStyle = _props$markerBackgrou === void 0 ? defaultStyle2.markerBackgroundStyle : _props$markerBackgrou, _props$showItemMarker = props.showItemMarker, showItemMarker = _props$showItemMarker === void 0 ? defaultStyle2.showItemMarker : _props$showItemMarker, customItemMarkerStyle = props.itemMarkerStyle, nameStyle = props.nameStyle, valueStyle = props.valueStyle, _props$joinString = props.joinString, joinString = _props$joinString === void 0 ? defaultStyle2.joinString : _props$joinString, _props$showCrosshairs = props.showCrosshairs, showCrosshairs = _props$showCrosshairs === void 0 ? defaultStyle2.showCrosshairs : _props$showCrosshairs, crosshairsStyle = props.crosshairsStyle, _props$crosshairsType = props.crosshairsType, crosshairsType = _props$crosshairsType === void 0 ? defaultStyle2.crosshairsType : _props$crosshairsType, _props$snap = props.snap, snap = _props$snap === void 0 ? defaultStyle2.snap : _props$snap, _props$tooltipMarkerS = props.tooltipMarkerStyle, tooltipMarkerStyle = _props$tooltipMarkerS === void 0 ? defaultStyle2.tooltipMarkerStyle : _props$tooltipMarkerS, showXTip = props.showXTip, showYTip = props.showYTip, xTip = props.xTip, yTip = props.yTip, _props$xTipTextStyle = props.xTipTextStyle, xTipTextStyle = _props$xTipTextStyle === void 0 ? defaultStyle2.xTipTextStyle : _props$xTipTextStyle, _props$yTipTextStyle = props.yTipTextStyle, yTipTextStyle = _props$yTipTextStyle === void 0 ? defaultStyle2.yTipTextStyle : _props$yTipTextStyle, _props$xTipBackground = props.xTipBackground, xTipBackground = _props$xTipBackground === void 0 ? defaultStyle2.xTipBackground : _props$xTipBackground, _props$yTipBackground = props.yTipBackground, yTipBackground = _props$yTipBackground === void 0 ? defaultStyle2.yTipBackground : _props$yTipBackground, _props$custom = props.custom, custom3 = _props$custom === void 0 ? false : _props$custom, customText = props.customText;
      var itemMarkerStyle = _objectSpread2(_objectSpread2({}, customItemMarkerStyle), defaultStyle2.itemMarkerStyle);
      var background = _objectSpread2(_objectSpread2({}, defaultStyle2.background), customBackground);
      var arrowWidth = context.px2hd("6px");
      return jsx("group", null, jsx("group", {
        style: {
          left: coordLeft,
          top: coordTop
        }
      }, !custom3 && jsx("group", null, jsx("group", {
        ref: this.rootRef,
        style: background,
        attrs: background
      }, jsx("group", {
        style: {
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: [0, 0, 0, "6px"]
        }
      }, records.map(function(record) {
        var name = record.name, value = record.value;
        return jsx("group", {
          style: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: [0, "6px", 0, 0]
          }
        }, showItemMarker ? jsx("marker", {
          style: {
            width: itemMarkerStyle.width,
            marginRight: "6px"
          },
          attrs: _objectSpread2(_objectSpread2({}, itemMarkerStyle), {}, {
            fill: record.color
          })
        }) : null, customText && is_function_default(customText) ? customText(record) : jsx("group", {
          style: {
            display: "flex",
            flexDirection: "row"
          }
        }, jsx("text", {
          attrs: _objectSpread2(_objectSpread2(_objectSpread2({}, defaultStyle2.nameStyle), nameStyle), {}, {
            text: value ? "".concat(name).concat(joinString) : name
          })
        }), jsx("text", {
          attrs: _objectSpread2(_objectSpread2(_objectSpread2({}, defaultStyle2.valueStyle), valueStyle), {}, {
            text: value
          })
        })));
      }))), jsx("polygon", {
        ref: this.arrowRef,
        attrs: {
          points: [{
            x: x - arrowWidth,
            y: coordTop
          }, {
            x: x + arrowWidth,
            y: coordTop
          }, {
            x,
            y: coordTop + arrowWidth
          }],
          fill: background.fill
        }
      })), showTooltipMarker ? jsx(RenderItemMarker, {
        coord,
        context,
        records,
        markerBackgroundStyle
      }) : null, showCrosshairs ? jsx(RenderCrosshairs, {
        chart: chart2,
        coord,
        records,
        crosshairsType,
        crosshairsStyle: _objectSpread2(_objectSpread2({}, defaultStyle2.crosshairsStyle), crosshairsStyle)
      }) : null, snap ? records.map(function(item) {
        var x2 = item.x, y2 = item.y, color2 = item.color, shape = item.shape;
        return jsx("circle", {
          attrs: _objectSpread2(_objectSpread2({
            x: x2,
            y: y2,
            r: "6px",
            stroke: color2,
            fill: color2
          }, shape), tooltipMarkerStyle)
        });
      }) : null), showXTip && jsx("group", {
        style: _objectSpread2(_objectSpread2({
          left: x,
          top: coordBottom
        }, defaultStyle2.xTipBackground), xTipBackground),
        attrs: _objectSpread2(_objectSpread2({}, defaultStyle2.xTipBackground), xTipBackground)
      }, jsx("text", {
        attrs: _objectSpread2(_objectSpread2(_objectSpread2({}, defaultStyle2.xTipTextStyle), xTipTextStyle), {}, {
          text: is_function_default(xTip) ? xTip(xFirstText) : xFirstText
        })
      })), showYTip && jsx("group", {
        style: _objectSpread2(_objectSpread2({
          left: coordLeft,
          top: y
        }, defaultStyle2.yTipBackground), yTipBackground),
        attrs: _objectSpread2(_objectSpread2({}, defaultStyle2.yTipBackground), yTipBackground)
      }, jsx("text", {
        attrs: _objectSpread2(_objectSpread2(_objectSpread2({}, defaultStyle2.yTipTextStyle), yTipTextStyle), {}, {
          text: is_function_default(yTip) ? yTip(yFirstText) : yFirstText
        })
      })));
    }
  }]);
  return TooltipView2;
}(component_default);

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/tooltip/index.js
var tooltip_default = withTooltip_default(TooltipView);

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-hierarchy/src/hierarchy/count.js
function count(node) {
  var sum = 0, children = node.children, i = children && children.length;
  if (!i)
    sum = 1;
  else
    while (--i >= 0) {
      sum += children[i].value;
    }
  node.value = sum;
}
function count_default() {
  return this.eachAfter(count);
}

// node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return {
        s: F,
        n: function n() {
          if (i >= o.length)
            return {
              done: true
            };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null)
          it["return"]();
      } finally {
        if (didErr)
          throw err;
      }
    }
  };
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-hierarchy/src/hierarchy/each.js
function each_default2(callback, that) {
  var index = -1;
  var _iterator = _createForOfIteratorHelper(this), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var node = _step.value;
      callback.call(that, node, ++index, this);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return this;
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-hierarchy/src/hierarchy/eachBefore.js
function eachBefore_default(callback, that) {
  var node = this, nodes = [node], children, i, index = -1;
  while (node = nodes.pop()) {
    callback.call(that, node, ++index, this);
    if (children = node.children) {
      for (i = children.length - 1; i >= 0; --i) {
        nodes.push(children[i]);
      }
    }
  }
  return this;
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-hierarchy/src/hierarchy/eachAfter.js
function eachAfter_default(callback, that) {
  var node = this, nodes = [node], next = [], children, i, n, index = -1;
  while (node = nodes.pop()) {
    next.push(node);
    if (children = node.children) {
      for (i = 0, n = children.length; i < n; ++i) {
        nodes.push(children[i]);
      }
    }
  }
  while (node = next.pop()) {
    callback.call(that, node, ++index, this);
  }
  return this;
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-hierarchy/src/hierarchy/find.js
function find_default2(callback, that) {
  var index = -1;
  var _iterator = _createForOfIteratorHelper(this), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var node = _step.value;
      if (callback.call(that, node, ++index, this)) {
        return node;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-hierarchy/src/hierarchy/sum.js
function sum_default(value) {
  return this.eachAfter(function(node) {
    var sum = +value(node.data) || 0, children = node.children, i = children && children.length;
    while (--i >= 0) {
      sum += children[i].value;
    }
    node.value = sum;
  });
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-hierarchy/src/hierarchy/sort.js
function sort_default(compare2) {
  return this.eachBefore(function(node) {
    if (node.children) {
      node.children.sort(compare2);
    }
  });
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-hierarchy/src/hierarchy/path.js
function path_default(end2) {
  var start2 = this, ancestor = leastCommonAncestor(start2, end2), nodes = [start2];
  while (start2 !== ancestor) {
    start2 = start2.parent;
    nodes.push(start2);
  }
  var k = nodes.length;
  while (end2 !== ancestor) {
    nodes.splice(k, 0, end2);
    end2 = end2.parent;
  }
  return nodes;
}
function leastCommonAncestor(a, b) {
  if (a === b)
    return a;
  var aNodes = a.ancestors(), bNodes = b.ancestors(), c = null;
  a = aNodes.pop();
  b = bNodes.pop();
  while (a === b) {
    c = a;
    a = aNodes.pop();
    b = bNodes.pop();
  }
  return c;
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-hierarchy/src/hierarchy/ancestors.js
function ancestors_default() {
  var node = this, nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-hierarchy/src/hierarchy/descendants.js
function descendants_default() {
  return Array.from(this);
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-hierarchy/src/hierarchy/leaves.js
function leaves_default() {
  var leaves = [];
  this.eachBefore(function(node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-hierarchy/src/hierarchy/links.js
function links_default() {
  var root = this, links = [];
  root.each(function(node) {
    if (node !== root) {
      links.push({
        source: node.parent,
        target: node
      });
    }
  });
  return links;
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-hierarchy/src/hierarchy/iterator.js
var import_regenerator = __toESM(require_regenerator());
var _marked = import_regenerator.default.mark(_callee);
function _callee() {
  var node, current, next, children, i, n;
  return import_regenerator.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          node = this, next = [node];
        case 1:
          current = next.reverse(), next = [];
        case 2:
          if (!(node = current.pop())) {
            _context.next = 8;
            break;
          }
          _context.next = 5;
          return node;
        case 5:
          if (children = node.children) {
            for (i = 0, n = children.length; i < n; ++i) {
              next.push(children[i]);
            }
          }
          _context.next = 2;
          break;
        case 8:
          if (next.length) {
            _context.next = 1;
            break;
          }
        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-hierarchy/src/hierarchy/index.js
function hierarchy(data, children) {
  if (data instanceof Map) {
    data = [void 0, data];
    if (children === void 0)
      children = mapChildren;
  } else if (children === void 0) {
    children = objectChildren;
  }
  var root = new Node(data), node, nodes = [root], child, childs, i, n;
  while (node = nodes.pop()) {
    if ((childs = children(node.data)) && (n = (childs = Array.from(childs)).length)) {
      node.children = childs;
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = childs[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }
  return root.eachBefore(computeHeight);
}
function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}
function objectChildren(d) {
  return d.children;
}
function mapChildren(d) {
  return Array.isArray(d) ? d[1] : null;
}
function copyData(node) {
  if (node.data.value !== void 0)
    node.value = node.data.value;
  node.data = node.data.data;
}
function computeHeight(node) {
  var height = 0;
  do {
    node.height = height;
  } while ((node = node.parent) && node.height < ++height);
}
function Node(data) {
  this.data = data;
  this.depth = this.height = 0;
  this.parent = null;
}
Node.prototype = hierarchy.prototype = _defineProperty({
  constructor: Node,
  count: count_default,
  each: each_default2,
  eachAfter: eachAfter_default,
  eachBefore: eachBefore_default,
  find: find_default2,
  sum: sum_default,
  sort: sort_default,
  path: path_default,
  ancestors: ancestors_default,
  descendants: descendants_default,
  leaves: leaves_default,
  links: links_default,
  copy: node_copy
}, Symbol.iterator, _callee);

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-hierarchy/src/accessors.js
function required(f) {
  if (typeof f !== "function")
    throw new Error();
  return f;
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-hierarchy/src/constant.js
function constantZero() {
  return 0;
}
function constant_default2(x) {
  return function() {
    return x;
  };
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-hierarchy/src/treemap/round.js
function round_default2(node) {
  node.x0 = Math.round(node.x0);
  node.y0 = Math.round(node.y0);
  node.x1 = Math.round(node.x1);
  node.y1 = Math.round(node.y1);
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-hierarchy/src/treemap/dice.js
function dice_default(parent, x0, y0, x1, y1) {
  var nodes = parent.children, node, i = -1, n = nodes.length, k = parent.value && (x1 - x0) / parent.value;
  while (++i < n) {
    node = nodes[i], node.y0 = y0, node.y1 = y1;
    node.x0 = x0, node.x1 = x0 += node.value * k;
  }
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-hierarchy/src/partition.js
function partition_default() {
  var dx = 1, dy = 1, padding = 0, round2 = false;
  function partition(root) {
    var n = root.height + 1;
    root.x0 = root.y0 = padding;
    root.x1 = dx;
    root.y1 = dy / n;
    root.eachBefore(positionNode(dy, n));
    if (round2)
      root.eachBefore(round_default2);
    return root;
  }
  function positionNode(dy2, n) {
    return function(node) {
      if (node.children) {
        dice_default(node, node.x0, dy2 * (node.depth + 1) / n, node.x1, dy2 * (node.depth + 2) / n);
      }
      var x0 = node.x0, y0 = node.y0, x1 = node.x1 - padding, y1 = node.y1 - padding;
      if (x1 < x0)
        x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0)
        y0 = y1 = (y0 + y1) / 2;
      node.x0 = x0;
      node.y0 = y0;
      node.x1 = x1;
      node.y1 = y1;
    };
  }
  partition.round = function(x) {
    return arguments.length ? (round2 = !!x, partition) : round2;
  };
  partition.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], partition) : [dx, dy];
  };
  partition.padding = function(x) {
    return arguments.length ? (padding = +x, partition) : padding;
  };
  return partition;
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-hierarchy/src/tree.js
function TreeNode(node, i) {
  this._ = node;
  this.parent = null;
  this.children = null;
  this.A = null;
  this.a = this;
  this.z = 0;
  this.m = 0;
  this.c = 0;
  this.s = 0;
  this.t = null;
  this.i = i;
}
TreeNode.prototype = Object.create(Node.prototype);

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-hierarchy/src/treemap/slice.js
function slice_default(parent, x0, y0, x1, y1) {
  var nodes = parent.children, node, i = -1, n = nodes.length, k = parent.value && (y1 - y0) / parent.value;
  while (++i < n) {
    node = nodes[i], node.x0 = x0, node.x1 = x1;
    node.y0 = y0, node.y1 = y0 += node.value * k;
  }
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-hierarchy/src/treemap/squarify.js
var phi = (1 + Math.sqrt(5)) / 2;
function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
  var rows = [], nodes = parent.children, row, nodeValue, i0 = 0, i1 = 0, n = nodes.length, dx, dy, value = parent.value, sumValue, minValue, maxValue, newRatio, minRatio, alpha, beta;
  while (i0 < n) {
    dx = x1 - x0, dy = y1 - y0;
    do {
      sumValue = nodes[i1++].value;
    } while (!sumValue && i1 < n);
    minValue = maxValue = sumValue;
    alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
    beta = sumValue * sumValue * alpha;
    minRatio = Math.max(maxValue / beta, beta / minValue);
    for (; i1 < n; ++i1) {
      sumValue += nodeValue = nodes[i1].value;
      if (nodeValue < minValue)
        minValue = nodeValue;
      if (nodeValue > maxValue)
        maxValue = nodeValue;
      beta = sumValue * sumValue * alpha;
      newRatio = Math.max(maxValue / beta, beta / minValue);
      if (newRatio > minRatio) {
        sumValue -= nodeValue;
        break;
      }
      minRatio = newRatio;
    }
    rows.push(row = {
      value: sumValue,
      dice: dx < dy,
      children: nodes.slice(i0, i1)
    });
    if (row.dice)
      dice_default(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);
    else
      slice_default(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
    value -= sumValue, i0 = i1;
  }
  return rows;
}
var squarify_default = function custom(ratio) {
  function squarify(parent, x0, y0, x1, y1) {
    squarifyRatio(ratio, parent, x0, y0, x1, y1);
  }
  squarify.ratio = function(x) {
    return custom((x = +x) > 1 ? x : 1);
  };
  return squarify;
}(phi);

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-hierarchy/src/treemap/index.js
function treemap_default() {
  var tile = squarify_default, round2 = false, dx = 1, dy = 1, paddingStack = [0], paddingInner = constantZero, paddingTop = constantZero, paddingRight = constantZero, paddingBottom = constantZero, paddingLeft = constantZero;
  function treemap(root) {
    root.x0 = root.y0 = 0;
    root.x1 = dx;
    root.y1 = dy;
    root.eachBefore(positionNode);
    paddingStack = [0];
    if (round2)
      root.eachBefore(round_default2);
    return root;
  }
  function positionNode(node) {
    var p = paddingStack[node.depth], x0 = node.x0 + p, y0 = node.y0 + p, x1 = node.x1 - p, y1 = node.y1 - p;
    if (x1 < x0)
      x0 = x1 = (x0 + x1) / 2;
    if (y1 < y0)
      y0 = y1 = (y0 + y1) / 2;
    node.x0 = x0;
    node.y0 = y0;
    node.x1 = x1;
    node.y1 = y1;
    if (node.children) {
      p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
      x0 += paddingLeft(node) - p;
      y0 += paddingTop(node) - p;
      x1 -= paddingRight(node) - p;
      y1 -= paddingBottom(node) - p;
      if (x1 < x0)
        x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0)
        y0 = y1 = (y0 + y1) / 2;
      tile(node, x0, y0, x1, y1);
    }
  }
  treemap.round = function(x) {
    return arguments.length ? (round2 = !!x, treemap) : round2;
  };
  treemap.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [dx, dy];
  };
  treemap.tile = function(x) {
    return arguments.length ? (tile = required(x), treemap) : tile;
  };
  treemap.padding = function(x) {
    return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
  };
  treemap.paddingInner = function(x) {
    return arguments.length ? (paddingInner = typeof x === "function" ? x : constant_default2(+x), treemap) : paddingInner;
  };
  treemap.paddingOuter = function(x) {
    return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
  };
  treemap.paddingTop = function(x) {
    return arguments.length ? (paddingTop = typeof x === "function" ? x : constant_default2(+x), treemap) : paddingTop;
  };
  treemap.paddingRight = function(x) {
    return arguments.length ? (paddingRight = typeof x === "function" ? x : constant_default2(+x), treemap) : paddingRight;
  };
  treemap.paddingBottom = function(x) {
    return arguments.length ? (paddingBottom = typeof x === "function" ? x : constant_default2(+x), treemap) : paddingBottom;
  };
  treemap.paddingLeft = function(x) {
    return arguments.length ? (paddingLeft = typeof x === "function" ? x : constant_default2(+x), treemap) : paddingLeft;
  };
  return treemap;
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-hierarchy/src/treemap/binary.js
function binary_default(parent, x0, y0, x1, y1) {
  var nodes = parent.children, i, n = nodes.length, sum, sums = new Array(n + 1);
  for (sums[0] = sum = i = 0; i < n; ++i) {
    sums[i + 1] = sum += nodes[i].value;
  }
  partition(0, n, parent.value, x0, y0, x1, y1);
  function partition(i2, j, value, x02, y02, x12, y12) {
    if (i2 >= j - 1) {
      var node = nodes[i2];
      node.x0 = x02, node.y0 = y02;
      node.x1 = x12, node.y1 = y12;
      return;
    }
    var valueOffset = sums[i2], valueTarget = value / 2 + valueOffset, k = i2 + 1, hi = j - 1;
    while (k < hi) {
      var mid = k + hi >>> 1;
      if (sums[mid] < valueTarget)
        k = mid + 1;
      else
        hi = mid;
    }
    if (valueTarget - sums[k - 1] < sums[k] - valueTarget && i2 + 1 < k)
      --k;
    var valueLeft = sums[k] - valueOffset, valueRight = value - valueLeft;
    if (x12 - x02 > y12 - y02) {
      var xk = value ? (x02 * valueRight + x12 * valueLeft) / value : x12;
      partition(i2, k, valueLeft, x02, y02, xk, y12);
      partition(k, j, valueRight, xk, y02, x12, y12);
    } else {
      var yk = value ? (y02 * valueRight + y12 * valueLeft) / value : y12;
      partition(i2, k, valueLeft, x02, y02, x12, yk);
      partition(k, j, valueRight, x02, yk, x12, y12);
    }
  }
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/deps/d3-hierarchy/src/treemap/resquarify.js
var resquarify_default = function custom2(ratio) {
  function resquarify(parent, x0, y0, x1, y1) {
    if ((rows = parent._squarify) && rows.ratio === ratio) {
      var rows, row, nodes, i, j = -1, n, m = rows.length, value = parent.value;
      while (++j < m) {
        row = rows[j], nodes = row.children;
        for (i = row.value = 0, n = nodes.length; i < n; ++i) {
          row.value += nodes[i].value;
        }
        if (row.dice)
          dice_default(row, x0, y0, x1, value ? y0 += (y1 - y0) * row.value / value : y1);
        else
          slice_default(row, x0, y0, value ? x0 += (x1 - x0) * row.value / value : x1, y1);
        value -= row.value;
      }
    } else {
      parent._squarify = rows = squarifyRatio(ratio, parent, x0, y0, x1, y1);
      rows.ratio = ratio;
    }
  }
  resquarify.ratio = function(x) {
    return custom2((x = +x) > 1 ? x : 1);
  };
  return resquarify;
}(phi);

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/treemap/withTreemap.js
var withTreemap_default = function(View) {
  return function(_Component) {
    _inherits(Treemap, _Component);
    var _super = _createSuper(Treemap);
    function Treemap(props, context, updater) {
      var _this;
      _classCallCheck(this, Treemap);
      _this = _super.call(this, props, context, updater);
      var coord = props.coord, color2 = props.color, data = props.data;
      var width = context.width, height = context.height, theme = context.theme;
      _this.coordController = new coord_default();
      var _assertThisInitialize = _assertThisInitialized(_this), coordController2 = _assertThisInitialize.coordController;
      _this.coord = coordController2.create(coord, {
        width,
        height
      });
      _this.color = new category_default(_objectSpread2(_objectSpread2({
        range: theme.colors
      }, color2), {}, {
        data
      }));
      return _this;
    }
    _createClass(Treemap, [{
      key: "treemapLayout",
      value: function treemapLayout() {
        var props = this.props, coord = this.coord, colorAttr = this.color;
        var data = props.data, value = props.value;
        var root = hierarchy({
          children: data
        }).sum(function(d) {
          return d[value];
        }).sort(function(a, b) {
          return b[value] - a[value];
        });
        var treemapLayout2 = treemap_default().tile(binary_default).round(false);
        var nodes = treemapLayout2(root);
        return nodes.children.map(function(item) {
          var data2 = item.data, x0 = item.x0, y0 = item.y0, x1 = item.x1, y1 = item.y1;
          var color2 = colorAttr.mapping(data2[colorAttr.field]);
          var rect = coord.convertRect({
            x: [x0, x1],
            y: [y0, y1]
          });
          return _objectSpread2({
            key: data2.key,
            origin: data2,
            color: color2
          }, rect);
        });
      }
    }, {
      key: "render",
      value: function render2() {
        var nodes = this.treemapLayout();
        var props = this.props, coord = this.coord;
        return jsx(View, _objectSpread2(_objectSpread2({
          nodes
        }, props), {}, {
          coord
        }));
      }
    }]);
    return Treemap;
  }(component_default);
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/treemap/treemapView.js
var treemapView_default = function(props) {
  var nodes = props.nodes, coord = props.coord;
  if (coord.isPolar) {
    var center = coord.center;
    var x = center.x, y = center.y;
    return jsx("group", null, nodes.map(function(node) {
      var xMin = node.xMin, xMax = node.xMax, yMin = node.yMin, yMax = node.yMax, color2 = node.color;
      return jsx("sector", {
        attrs: {
          x,
          y,
          lineWidth: "1px",
          stroke: "#fff",
          startAngle: xMin,
          endAngle: xMax,
          r0: yMin,
          r: yMax,
          anticlockwise: false,
          fill: color2
        }
      });
    }));
  }
  return jsx("group", null, nodes.map(function(node) {
    var key = node.key, xMin = node.xMin, xMax = node.xMax, yMin = node.yMin, yMax = node.yMax, color2 = node.color;
    return jsx("rect", {
      key,
      attrs: {
        x: xMin,
        y: yMin,
        width: xMax - xMin,
        height: yMax - yMin,
        fill: color2,
        lineWidth: "4px",
        stroke: "#fff",
        radius: "8px"
      },
      animation: {
        appear: {
          easing: "linear",
          duration: 450,
          property: ["fillOpacity", "strokeOpacity"],
          start: {
            fillOpacity: 0,
            strokeOpacity: 0
          },
          end: {
            fillOpacity: 1,
            strokeOpacity: 1
          }
        },
        update: {
          easing: "linear",
          duration: 450,
          property: ["x", "y", "width", "height", "radius", "lineWidth"]
        }
      }
    });
  }));
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/treemap/index.js
var treemap_default2 = withTreemap_default(treemapView_default);

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/sunburst/withSunburst.js
function rootParent(data) {
  var d = data;
  while (d.depth > 1) {
    d = d.parent;
  }
  return d;
}
var withSunburst_default = function(View) {
  return function(_Component) {
    _inherits(Sunburst, _Component);
    var _super = _createSuper(Sunburst);
    function Sunburst(props, context) {
      var _this;
      _classCallCheck(this, Sunburst);
      _this = _super.call(this, props, context);
      var coord = props.coord, color2 = props.color, data = props.data;
      var width = context.width, height = context.height, theme = context.theme;
      _this.coordController = new coord_default();
      var _assertThisInitialize = _assertThisInitialized(_this), coordController2 = _assertThisInitialize.coordController;
      _this.coord = coordController2.create(coord, {
        width,
        height
      });
      _this.color = new category_default(_objectSpread2(_objectSpread2({
        range: theme.colors
      }, color2), {}, {
        data
      }));
      return _this;
    }
    _createClass(Sunburst, [{
      key: "didMount",
      value: function didMount() {
        var _this2 = this;
        var props = this.props, container = this.container;
        var onClick = props.onClick;
        var canvas = container.get("canvas");
        this.triggerRef = [];
        canvas.on("click", function(ev) {
          var points = ev.points;
          var shape = _this2.triggerRef.find(function(ref) {
            return isInBBox(ref.current.getBBox(), points[0]);
          });
          if (shape) {
            ev.shape = shape;
            ev.payload = shape.payload;
            onClick && onClick(ev);
          }
        });
      }
    }, {
      key: "_mapping",
      value: function _mapping(children) {
        var colorAttr = this.color, coord = this.coord;
        for (var i = 0, len = children.length; i < len; i++) {
          var node = children[i];
          var root = rootParent(node);
          var color2 = colorAttr.mapping(root.data[colorAttr.field]);
          node.color = color2;
          var x0 = node.x0, x1 = node.x1, y0 = node.y0, y1 = node.y1;
          var rect = coord.convertRect({
            x: [x0, x1],
            y: [y0, y1]
          });
          mix(node, rect);
          if (node.children && node.children.length) {
            this._mapping(node.children);
          }
        }
      }
    }, {
      key: "sunburst",
      value: function sunburst() {
        var props = this.props;
        var data = props.data, value = props.value, _props$sort = props.sort, sort2 = _props$sort === void 0 ? true : _props$sort;
        var root = hierarchy({
          children: data
        }).sum(function(d) {
          return d[value];
        });
        if (sort2 === true || is_function_default(sort2)) {
          var sortFn = is_function_default(sort2) ? sort2 : function(a, b) {
            return b[value] - a[value];
          };
          root.sort(sortFn);
        }
        var nodes = partition_default()(root);
        var children = nodes.children;
        this._mapping(children);
        return nodes;
      }
    }, {
      key: "render",
      value: function render2() {
        var node = this.sunburst();
        var coord = this.coord, props = this.props;
        return jsx(View, _objectSpread2(_objectSpread2({}, props), {}, {
          coord,
          node,
          triggerRef: this.triggerRef
        }));
      }
    }]);
    return Sunburst;
  }(component_default);
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/sunburst/sunburstView.js
var sunburstView_default = function(props) {
  var coord = props.coord, node = props.node;
  var children = node.children;
  var _coord$center = coord.center, x = _coord$center.x, y = _coord$center.y;
  var renderNodes = function renderNodes2(nodes) {
    return jsx("group", null, nodes.map(function(node2) {
      var xMin = node2.xMin, xMax = node2.xMax, yMin = node2.yMin, yMax = node2.yMax, color2 = node2.color, children2 = node2.children;
      return jsx("group", null, jsx("sector", {
        attrs: {
          x,
          y,
          lineWidth: "1px",
          stroke: "#fff",
          startAngle: xMin,
          endAngle: xMax,
          r0: yMin,
          r: yMax,
          anticlockwise: false,
          fill: color2
        }
      }), children2 && children2.length ? renderNodes2(children2) : null);
    }));
  };
  return renderNodes(children);
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/sunburst/icicleView.js
var icicleView_default = function(props) {
  var node = props.node;
  var children = node.children;
  var renderNodes = function renderNodes2(nodes) {
    return jsx("group", null, nodes.map(function(node2) {
      var xMin = node2.xMin, xMax = node2.xMax, yMin = node2.yMin, yMax = node2.yMax, color2 = node2.color, children2 = node2.children;
      return jsx("group", null, jsx("rect", {
        attrs: {
          x: xMin,
          y: yMin,
          width: xMax - xMin,
          height: yMax - yMin,
          lineWidth: "1px",
          stroke: "#fff",
          fill: color2
        }
      }), children2 && children2.length ? renderNodes2(children2) : null);
    }));
  };
  return renderNodes(children);
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/sunburst/view.js
var view_default = function(props) {
  var coord = props.coord;
  if (coord.type === "polar") {
    return jsx(sunburstView_default, _objectSpread2({}, props));
  }
  return jsx(icicleView_default, _objectSpread2({}, props));
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/sunburst/index.js
var sunburst_default = withSunburst_default(view_default);

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/pieLabel/withPieLabel.js
var DEFAULT_CONFIG = {
  anchorOffset: "10px",
  inflectionOffset: "30px",
  sidePadding: "15px",
  height: "64px",
  adjustOffset: "30",
  triggerOn: "click",
  // activeShape: false, // 当有图形被选中的时候，是否激活图形
  // activeStyle: {
  //   offset: '1px',
  //   appendRadius: '8px',
  //   fillOpacity: 0.5,
  // },
  label1OffsetY: "-4px",
  label2OffsetY: "4px"
};
function getEndPoint(center, angle2, r) {
  return {
    x: center.x + r * Math.cos(angle2),
    y: center.y + r * Math.sin(angle2)
  };
}
function getMiddleAngle(startAngle, endAngle) {
  if (endAngle < startAngle) {
    endAngle += Math.PI * 2;
  }
  return (endAngle + startAngle) / 2;
}
function move(from, to, count2, center) {
  var x = center.x;
  var sort2 = from.sort(function(a, b) {
    var aDistance = Math.abs(a.x - x);
    var bDistance = Math.abs(b.x - x);
    return bDistance - aDistance;
  });
  return [sort2.slice(0, sort2.length - count2), sort2.slice(sort2.length - count2).concat(to)];
}
function isFirstQuadrant(angle2) {
  return angle2 >= -Math.PI / 2 && angle2 < 0;
}
function isSecondQuadrant(angle2) {
  return angle2 >= 0 && angle2 < Math.PI / 2;
}
function isThirdQuadrant(angle2) {
  return angle2 >= Math.PI / 2 && angle2 < Math.PI;
}
function isFourthQuadrant(angle2) {
  return angle2 >= Math.PI && angle2 < Math.PI * 3 / 2;
}
function findShapeByClassName(shape, point, className) {
  var targetShapes = getElementsByClassName(className, shape);
  for (var i = 0, len = targetShapes.length; i < len; i++) {
    var _shape = targetShapes[i];
    if (isInBBox(_shape.getBBox(), point)) {
      return _shape;
    }
  }
}
var withPieLabel_default = function(View) {
  return function(_Component) {
    _inherits(PieLabel, _Component);
    var _super = _createSuper(PieLabel);
    function PieLabel(props) {
      var _this;
      _classCallCheck(this, PieLabel);
      _this = _super.call(this, props);
      _this._handleEvent = function(ev) {
        var _this$props = _this.props, chart2 = _this$props.chart, onClick = _this$props.onClick;
        var ele = _this.triggerRef.current;
        var point = ev.points[0];
        var shape = findShapeByClassName(ele, point, "click");
        var pieData = chart2.getSnapRecords(point);
        if (typeof onClick === "function") {
          if (shape) {
            onClick(shape.get("data"));
          } else if (is_array_default(pieData) && pieData.length > 0) {
            onClick(pieData);
          }
        }
      };
      _this.triggerRef = {};
      return _this;
    }
    _createClass(PieLabel, [{
      key: "willMount",
      value: function willMount() {
      }
      /**
       * 绑定事件
       */
    }, {
      key: "didMount",
      value: function didMount() {
        this._initEvent();
      }
    }, {
      key: "getLabels",
      value: function getLabels(props) {
        var chart2 = props.chart, coord = props.coord, anchorOffset = props.anchorOffset, inflectionOffset = props.inflectionOffset, label1 = props.label1, label2 = props.label2, itemHeight = props.height, sidePadding = props.sidePadding;
        var center = coord.center, radius = coord.radius, coordWidth = coord.width, coordHeight = coord.height, coordLeft = coord.left, coordRight = coord.right, coordTop = coord.top;
        var maxCountForOneSide = Math.floor(coordHeight / itemHeight);
        var maxCount = maxCountForOneSide * 2;
        var geometry = chart2.getGeometrys()[0];
        var records = geometry.flatRecords().sort(function(a, b) {
          var angle1 = a.xMax - a.xMin;
          var angle2 = b.xMax - b.xMin;
          return angle2 - angle1;
        }).slice(0, maxCount);
        var halves = [
          [],
          []
          // right
        ];
        records.forEach(function(record) {
          var xMin = record.xMin, xMax = record.xMax, color2 = record.color, origin = record.origin;
          var anchorAngle = getMiddleAngle(xMin, xMax);
          var anchorPoint = getEndPoint(center, anchorAngle, radius + anchorOffset);
          var inflectionPoint = getEndPoint(center, anchorAngle, radius + inflectionOffset);
          var side = anchorPoint.x < center.x ? "left" : "right";
          var label = {
            origin,
            angle: anchorAngle,
            anchor: anchorPoint,
            inflection: inflectionPoint,
            side,
            x: inflectionPoint.x,
            y: inflectionPoint.y,
            r: radius + inflectionOffset,
            color: color2,
            label1: is_function_default(label1) ? label1(origin, record) : label1,
            label2: is_function_default(label2) ? label2(origin, record) : label2
          };
          if (side === "left") {
            halves[0].push(label);
          } else {
            halves[1].push(label);
          }
        });
        if (halves[0].length > maxCountForOneSide) {
          halves = move(halves[0], halves[1], halves[0].length - maxCountForOneSide, center);
        } else if (halves[1].length > maxCountForOneSide) {
          var _move = move(halves[1], halves[0], halves[1].length - maxCountForOneSide, center), _move2 = _slicedToArray(_move, 2), right = _move2[0], left = _move2[1];
          halves = [left, right];
        }
        var labelWidth = coordWidth / 2 - radius - anchorOffset - inflectionOffset - 2 * sidePadding;
        var labels = [];
        halves.forEach(function(half, index) {
          var showSide = index === 0 ? "left" : "right";
          half.sort(function(a, b) {
            var aAngle = a.angle;
            var bAngle = b.angle;
            if (showSide === "left") {
              aAngle = isFirstQuadrant(aAngle) ? aAngle + Math.PI * 2 : aAngle;
              bAngle = isFirstQuadrant(bAngle) ? bAngle + Math.PI * 2 : bAngle;
              return bAngle - aAngle;
            } else {
              aAngle = isFourthQuadrant(aAngle) ? aAngle - Math.PI * 2 : aAngle;
              bAngle = isFourthQuadrant(bAngle) ? bAngle - Math.PI * 2 : bAngle;
              return aAngle - bAngle;
            }
          });
          var pointsY = half.map(function(label) {
            return label.y;
          });
          var maxY = Math.max.apply(null, pointsY);
          var minY = Math.min.apply(null, pointsY);
          var labelCount = half.length;
          var labelHeight = coordHeight / labelCount;
          var halfLabelHeight = labelHeight / 2;
          var lineInterval = 2;
          if (showSide === "left") {
            half.forEach(function(label, index2) {
              var anchor = label.anchor, inflection = label.inflection, angle2 = label.angle, x = label.x, y = label.y;
              var points = [anchor, inflection];
              var endX = coordLeft + sidePadding;
              var endY = coordTop + halfLabelHeight + labelHeight * index2;
              var labelStart = {
                x: endX + labelWidth + lineInterval * index2,
                y: endY
              };
              var labelEnd = {
                x: endX,
                y: endY
              };
              if (isFirstQuadrant(angle2)) {
                var pointY = minY - lineInterval * (labelCount - index2);
                points.push({
                  x,
                  y: pointY
                });
                points.push({
                  x: labelStart.x,
                  y: pointY
                });
              } else if (isThirdQuadrant(angle2) || isFourthQuadrant(angle2)) {
                points.push({
                  x: labelStart.x,
                  y
                });
              } else if (isSecondQuadrant(angle2)) {
                var _pointY = maxY + lineInterval * index2;
                points.push({
                  x,
                  y: _pointY
                });
                points.push({
                  x: labelStart.x,
                  y: _pointY
                });
              }
              points.push(labelStart);
              points.push(labelEnd);
              label.points = points;
              label.side = showSide;
              labels.push(label);
            });
          } else {
            half.forEach(function(label, index2) {
              var anchor = label.anchor, inflection = label.inflection, angle2 = label.angle, x = label.x, y = label.y;
              var points = [anchor, inflection];
              var endX = coordRight - sidePadding;
              var endY = coordTop + halfLabelHeight + labelHeight * index2;
              var labelStart = {
                x: endX - labelWidth - lineInterval * index2,
                y: endY
              };
              var labelEnd = {
                x: endX,
                y: endY
              };
              if (isFourthQuadrant(angle2)) {
                var pointY = minY - lineInterval * (labelCount - index2);
                points.push({
                  x,
                  y: pointY
                });
                points.push({
                  x: labelStart.x,
                  y: pointY
                });
              } else if (isFirstQuadrant(angle2) || isSecondQuadrant(angle2)) {
                points.push({
                  x: labelStart.x,
                  y
                });
              } else if (isThirdQuadrant(angle2)) {
                var _pointY2 = maxY + lineInterval * index2;
                points.push({
                  x,
                  y: _pointY2
                });
                points.push({
                  x: labelStart.x,
                  y: _pointY2
                });
              }
              points.push(labelStart);
              points.push(labelEnd);
              label.points = points;
              label.side = showSide;
              labels.push(label);
            });
          }
        });
        return labels;
      }
    }, {
      key: "_initEvent",
      value: function _initEvent() {
        var context = this.context, props = this.props;
        var canvas = context.canvas;
        var _props$triggerOn = props.triggerOn, triggerOn = _props$triggerOn === void 0 ? DEFAULT_CONFIG.triggerOn : _props$triggerOn;
        canvas.on(triggerOn, this._handleEvent);
      }
    }, {
      key: "render",
      value: function render2() {
        var context = this.context;
        var props = context.px2hd(deep_mix_default({}, DEFAULT_CONFIG, this.props));
        var labels = this.getLabels(props);
        return jsx(View, _objectSpread2(_objectSpread2({
          labels
        }, props), {}, {
          triggerRef: this.triggerRef
        }));
      }
    }]);
    return PieLabel;
  }(component_default);
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/pieLabel/pieLabeView.js
var pieLabeView_default = function(props) {
  var lineStyle = props.lineStyle, anchorStyle = props.anchorStyle, labels = props.labels, label1OffsetY = props.label1OffsetY, label2OffsetY = props.label2OffsetY, triggerRef = props.triggerRef;
  return jsx("group", {
    ref: triggerRef
  }, labels.map(function(label) {
    var origin = label.origin, anchor = label.anchor, side = label.side, color2 = label.color, label1 = label.label1, label2 = label.label2, points = label.points;
    var end2 = points[points.length - 1];
    return jsx("group", null, jsx("circle", {
      attrs: _objectSpread2({
        r: "4px",
        x: anchor.x,
        y: anchor.y,
        fill: color2
      }, anchorStyle)
    }), jsx("polyline", {
      attrs: _objectSpread2({
        points,
        lineWidth: "2px",
        stroke: color2
      }, lineStyle)
    }), jsx("text", {
      className: "click",
      attrs: _objectSpread2({
        x: end2.x,
        y: end2.y + label1OffsetY,
        fontSize: "24px",
        lineHeight: "24px",
        fill: color2,
        textBaseline: "bottom",
        textAlign: side === "left" ? "left" : "right"
      }, label1),
      data: origin
    }), jsx("text", {
      className: "click",
      attrs: _objectSpread2({
        x: end2.x,
        y: end2.y + label2OffsetY,
        fontSize: "24px",
        lineHeight: "24px",
        fill: "#808080",
        textBaseline: "top",
        textAlign: side === "left" ? "left" : "right"
      }, label2),
      data: origin
    }));
  }));
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/pieLabel/index.js
var pieLabel_default = withPieLabel_default(pieLabeView_default);

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/gauge/withGauge.js
var getPoint3 = function getPoint4(cener, angle2, r) {
  var x = cener.x + Math.cos(angle2) * r;
  var y = cener.y + Math.sin(angle2) * r;
  return {
    x,
    y
  };
};
var getTicks = function getTicks2(start2, end2, tickCount, center, r, tickOffset, tickLength) {
  var ticks = [];
  var diff2 = end2 - start2;
  for (var i = 0; i <= tickCount; i++) {
    var tickValue = start2 + diff2 * i / tickCount;
    var startPoint = getPoint3(center, tickValue, r + tickOffset - tickLength);
    var endPoint = getPoint3(center, tickValue, r + tickOffset);
    ticks.push({
      tickValue,
      start: startPoint,
      end: endPoint
    });
  }
  return ticks;
};
var withGauge_default = function(View) {
  return function(_Component) {
    _inherits(Guage, _Component);
    var _super = _createSuper(Guage);
    function Guage() {
      _classCallCheck(this, Guage);
      return _super.apply(this, arguments);
    }
    _createClass(Guage, [{
      key: "render",
      value: function render2() {
        var props = this.props, context = this.context;
        var startAngle = props.startAngle, endAngle = props.endAngle, tickCount = props.tickCount, center = props.center, r = props.r, tickOffset = props.tickOffset, tickLength = props.tickLength;
        var ticks = getTicks(startAngle, endAngle, tickCount, center, context.px2hd(r), context.px2hd(tickOffset), context.px2hd(tickLength));
        return jsx(View, _objectSpread2(_objectSpread2({}, props), {}, {
          ticks
        }));
      }
    }]);
    return Guage;
  }(component_default);
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/gauge/gaugeView.js
var gaugeView_default = function(props) {
  var center = props.center, startAngle = props.startAngle, endAngle = props.endAngle, r = props.r, percent = props.percent, ticks = props.ticks;
  var x = center.x, y = center.y;
  var diff2 = endAngle - startAngle;
  return jsx("group", null, jsx("arc", {
    attrs: {
      x,
      y,
      r,
      startAngle,
      endAngle,
      lineWidth: "20px",
      lineCap: "round",
      stroke: "#e7e7e7"
    }
  }), jsx("arc", {
    attrs: {
      x,
      y,
      r,
      startAngle,
      endAngle: startAngle,
      lineWidth: "40px",
      lineCap: "round",
      stroke: "#0075ff"
    },
    animation: {
      appear: {
        easing: "linear",
        duration: 500,
        property: ["endAngle"],
        start: {
          endAngle: startAngle
        },
        end: {
          endAngle: startAngle + diff2 * percent
        }
      }
    }
  }), ticks.map(function(tick) {
    var start2 = tick.start, end2 = tick.end;
    return jsx("line", {
      attrs: {
        x1: start2.x,
        y1: start2.y,
        x2: end2.x,
        y2: end2.y,
        lineWidth: "6px",
        lineCap: "round",
        stroke: "#e7e7e7"
      }
    });
  }));
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/gauge/index.js
var gauge_default = withGauge_default(gaugeView_default);

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/zoom/zoomUtil.js
function isValuesEqual(values2, newValues) {
  if (values2.length !== newValues.length) {
    return false;
  }
  var lastIndex = values2.length - 1;
  return values2[0] === newValues[0] && values2[lastIndex] === newValues[lastIndex];
}
function updateCategoryRange(scale3, originScale, range) {
  var currentValues = scale3.values, currentTicks = scale3.ticks, tickMethod = scale3.tickMethod, tickCount = scale3.tickCount;
  var originValues = originScale.values;
  var _range = _slicedToArray(range, 2), start2 = _range[0], end2 = _range[1];
  var len = originValues.length;
  var valueStart = start2 * len;
  var valueEnd = end2 * len;
  var count2 = Math.round(valueEnd - valueStart);
  var sliceSatrt = Math.round(valueStart);
  var newValues = originValues.slice(sliceSatrt, sliceSatrt + count2);
  var newTickCount = Math.round(tickCount * originValues.length / newValues.length);
  var catTicks = getTickMethod(tickMethod);
  var newTicks = catTicks({
    tickCount: newTickCount,
    values: originValues
  });
  if (isValuesEqual(currentValues, newValues) && isValuesEqual(currentTicks, newTicks)) {
    return;
  }
  scale3.change({
    values: newValues,
    ticks: newTicks
  });
  return scale3;
}
function updateLinearRange(scale3, originScale, range) {
  var min2 = originScale.min, max2 = originScale.max;
  var _range2 = _slicedToArray(range, 2), start2 = _range2[0], end2 = _range2[1];
  var newMin = min2 + (max2 - min2) * start2;
  var newMax = min2 + (max2 - min2) * end2;
  scale3.change({
    min: newMin,
    max: newMax,
    nice: false
  });
}
function updateScale(scale3, values2) {
  var isLinear = scale3.isLinear;
  if (isLinear) {
    var _getRange = get_range_default(values2), min2 = _getRange.min, max2 = _getRange.max;
    return scale3.change({
      min: min2,
      max: max2,
      nice: true
    });
  }
}
function updateRange(scale3, originScale, range) {
  var isCategory = scale3.isCategory, isLinear = scale3.isLinear;
  if (isCategory) {
    return updateCategoryRange(scale3, originScale, range);
  }
  if (isLinear) {
    return updateLinearRange(scale3, originScale, range);
  }
}
function updateFollow(scales, mainScale, data) {
  var mainField = mainScale.field, mainType = mainScale.type, mainValues = mainScale.values;
  var mainValuesMap = {};
  mainValues.forEach(function(item) {
    mainValuesMap[item] = true;
  });
  return scales.map(function(scale3) {
    var followField = scale3.field;
    var values2 = [];
    data.forEach(function(item) {
      var value = mainType === "timeCat" ? toTimeStamp(item[mainField]) : item[mainField];
      if (mainValuesMap[value]) {
        values2.push(item[followField]);
      }
    });
    return updateScale(scale3, values2);
  });
}

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/zoom/index.js
function lerp(min2, max2, fraction) {
  return (max2 - min2) * fraction + min2;
}
function isEqual2(aRange, bRange) {
  for (var i in aRange) {
    if (!isNumberEqual(aRange[i], bRange[i]))
      return false;
  }
  return true;
}
function cloneScale2(scale3, scaleConfig) {
  return new scale3.constructor(_objectSpread2(_objectSpread2({}, scale3.__cfg__), scaleConfig));
}
var Zoom = function(_Component) {
  _inherits(Zoom2, _Component);
  var _super = _createSuper(Zoom2);
  function Zoom2(props) {
    var _this;
    _classCallCheck(this, Zoom2);
    var defaultProps3 = {
      onPanStart: function onPanStart() {
      },
      onPinchStart: function onPinchStart() {
      },
      onPan: function onPan() {
      },
      onPinch: function onPinch() {
      },
      onInit: function onInit() {
      },
      onPanEnd: function onPanEnd() {
      },
      onPinchEnd: function onPinchEnd() {
      },
      minCount: 10
    };
    _this = _super.call(this, _objectSpread2(_objectSpread2({}, defaultProps3), props));
    _this.scale = {};
    _this.originScale = {};
    _this.swipeEnd = {
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0
    };
    _this.onStart = function() {
      var _assertThisInitialize = _assertThisInitialized(_this), state = _assertThisInitialize.state;
      var range2 = state.range;
      _this.startRange = range2;
      _this.loop && cancelAnimationFrame(_this.loop);
    };
    _this.onPan = function(ev) {
      var _assertThisInitialize2 = _assertThisInitialized(_this), dims = _assertThisInitialize2.dims;
      var range2 = {};
      each_default(dims, function(dim2) {
        if (dim2 === "x") {
          range2["x"] = _this._doXPan(ev);
          return;
        }
        if (dim2 === "y") {
          range2["y"] = _this._doYPan(ev);
          return;
        }
      });
      if (isEqual2(range2, _this.state.range))
        return;
      _this.setState({
        range: range2
      });
    };
    _this.onSwipe = function(ev) {
      var swipe = _this.props.swipe;
      if (_this.props.mode.length < 2 || !swipe)
        return;
      var _ev$velocityX = ev.velocityX, velocityX = _ev$velocityX === void 0 ? 0 : _ev$velocityX, _ev$velocityY = ev.velocityY, velocityY = _ev$velocityY === void 0 ? 0 : _ev$velocityY, points = ev.points;
      var range2 = _this.state.range;
      var _points$ = points[0], x = _points$.x, y = _points$.y;
      if (Math.abs((range2 === null || range2 === void 0 ? void 0 : range2.x[0]) - 0) < 5e-4 && velocityX > 0)
        return;
      if (Math.abs((range2 === null || range2 === void 0 ? void 0 : range2.x[1]) - 1) < 5e-4 && velocityX < 0)
        return;
      if (Math.abs((range2 === null || range2 === void 0 ? void 0 : range2.y[0]) - 0) < 5e-4 && velocityY < 0)
        return;
      if (Math.abs((range2 === null || range2 === void 0 ? void 0 : range2.x[1]) - 1) < 5e-4 && velocityY > 0)
        return;
      _this.swipeEnd = {
        startX: x,
        startY: y,
        endX: x + velocityX * 50,
        endY: y - velocityY * 50
      };
      _this.onStart();
      _this.update();
    };
    _this.onPinch = function(ev) {
      var _assertThisInitialize3 = _assertThisInitialized(_this), dims = _assertThisInitialize3.dims;
      var range2 = {};
      each_default(dims, function(dim2) {
        if (dim2 === "x") {
          range2["x"] = _this._doXPinch(ev);
          return;
        }
        if (dim2 === "y") {
          range2["y"] = _this._doYPinch(ev);
          return;
        }
      });
      if (isEqual2(range2, _this.state.range))
        return;
      _this.setState({
        range: range2
      });
    };
    _this.onEnd = function() {
      _this.startRange = null;
    };
    var _props$range = props.range, range = _props$range === void 0 ? [0, 1] : _props$range, mode = props.mode;
    _this.dims = mode instanceof Array ? mode : [mode];
    return _this;
  }
  _createClass(Zoom2, [{
    key: "didMount",
    value: function didMount() {
      this._bindEvents();
    }
  }, {
    key: "willReceiveProps",
    value: function willReceiveProps(nextProps) {
      var nextRange = nextProps.range;
      var lastRange = this.props.range;
      if (!equal_default(nextRange, lastRange)) {
        var cacheRange = {};
        each_default(this.dims, function(dim2) {
          cacheRange[dim2] = nextRange;
        });
        this.state = {
          range: cacheRange
        };
      }
    }
  }, {
    key: "willMount",
    value: function willMount() {
      var _this2 = this;
      var props = this.props, dims = this.dims, state = this.state;
      var minCount = props.minCount, range = props.range;
      var valueLength = Number.MIN_VALUE;
      var cacheRange = {};
      each_default(dims, function(dim2) {
        var scale3 = _this2._getScale(dim2);
        var values2 = scale3.values;
        valueLength = values2.length > valueLength ? values2.length : valueLength;
        _this2.scale[dim2] = scale3;
        _this2.originScale[dim2] = cloneScale2(scale3);
        _this2.updateRange(range, dim2);
        cacheRange[dim2] = range;
      });
      this.minScale = minCount / valueLength;
      this.state = {
        range: cacheRange
      };
    }
  }, {
    key: "didUnmount",
    value: function didUnmount() {
      this.loop && cancelAnimationFrame(this.loop);
      this._clearEvents();
    }
  }, {
    key: "update",
    value: function update() {
      var _this3 = this;
      var _this$swipeEnd = this.swipeEnd, startX = _this$swipeEnd.startX, startY = _this$swipeEnd.startY, endX = _this$swipeEnd.endX, endY = _this$swipeEnd.endY;
      var x = lerp(startX, endX, 0.05);
      var y = lerp(startY, endY, 0.05);
      this.swipeEnd = {
        startX: x,
        startY: y,
        endX,
        endY
      };
      var props = this.props;
      var coord = props.coord;
      var coordWidth = coord.width, coordHeight = coord.height;
      var range = {};
      range["x"] = this._doPan((x - startX) / coordWidth, "x");
      range["y"] = this._doPan((y - startY) / coordHeight, "y");
      this.setState({
        range
      });
      this.startRange = range;
      this.loop = requestAnimationFrame(function() {
        return _this3.update();
      });
      if (Math.abs(x - endX) < 5e-4 && Math.abs(y - endY) < 5e-4) {
        this.onEnd();
        cancelAnimationFrame(this.loop);
      }
    }
  }, {
    key: "_doXPan",
    value: function _doXPan(ev) {
      var direction2 = ev.direction, deltaX = ev.deltaX;
      if (this.props.mode.length === 1 && (direction2 === "up" || direction2 === "down")) {
        return this.state.range["x"];
      }
      ev.preventDefault && ev.preventDefault();
      var props = this.props;
      var coord = props.coord, _props$panSensitive = props.panSensitive, panSensitive = _props$panSensitive === void 0 ? 1 : _props$panSensitive;
      var coordWidth = coord.width;
      var ratio = deltaX / coordWidth * panSensitive;
      var newRange = this._doPan(ratio, "x");
      return newRange;
    }
  }, {
    key: "_doYPan",
    value: function _doYPan(ev) {
      var direction2 = ev.direction, deltaY = ev.deltaY;
      if (this.props.mode.length === 1 && (direction2 === "left" || direction2 === "right")) {
        return this.state.range["y"];
      }
      ev.preventDefault && ev.preventDefault();
      var props = this.props;
      var coord = props.coord, _props$panSensitive2 = props.panSensitive, panSensitive = _props$panSensitive2 === void 0 ? 1 : _props$panSensitive2;
      var coordHeight = coord.height;
      var ratio = -deltaY / coordHeight * panSensitive;
      var newRange = this._doPan(ratio, "y");
      return newRange;
    }
  }, {
    key: "_doPan",
    value: function _doPan(ratio, dim2) {
      var startRange = this.startRange;
      var _startRange$dim = _slicedToArray(startRange[dim2], 2), start2 = _startRange$dim[0], end2 = _startRange$dim[1];
      var rangeLen = end2 - start2;
      var rangeOffset = rangeLen * ratio;
      var newStart = start2 - rangeOffset;
      var newEnd = end2 - rangeOffset;
      var newRange = this.updateRange([newStart, newEnd], dim2);
      return newRange;
    }
  }, {
    key: "_doXPinch",
    value: function _doXPinch(ev) {
      ev.preventDefault && ev.preventDefault();
      var zoom = ev.zoom, center = ev.center;
      var props = this.props;
      var coord = props.coord;
      var coordWidth = coord.width, left = coord.left, right = coord.right;
      var leftLen = Math.abs(center.x - left);
      var rightLen = Math.abs(right - center.x);
      var leftZoom = leftLen / coordWidth;
      var rightZoom = rightLen / coordWidth;
      var newRange = this._doPinch(leftZoom, rightZoom, zoom, "x");
      return newRange;
    }
  }, {
    key: "_doYPinch",
    value: function _doYPinch(ev) {
      ev.preventDefault && ev.preventDefault();
      var zoom = ev.zoom, center = ev.center;
      var props = this.props;
      var coord = props.coord;
      var coordHeight = coord.height, top = coord.top, bottom = coord.bottom;
      var topLen = Math.abs(center.y - top);
      var bottomLen = Math.abs(bottom - center.y);
      var topZoom = topLen / coordHeight;
      var bottomZoom = bottomLen / coordHeight;
      var newRange = this._doPinch(topZoom, bottomZoom, zoom, "y");
      return newRange;
    }
  }, {
    key: "_doPinch",
    value: function _doPinch(startRatio, endRatio, zoom, dim2) {
      var startRange = this.startRange, minScale = this.minScale, props = this.props;
      var _props$pinchSensitive = props.pinchSensitive, pinchSensitive = _props$pinchSensitive === void 0 ? 1 : _props$pinchSensitive;
      var _startRange$dim2 = _slicedToArray(startRange[dim2], 2), start2 = _startRange$dim2[0], end2 = _startRange$dim2[1];
      var zoomOffset = zoom < 1 ? (1 / zoom - 1) * pinchSensitive : (1 - zoom) * pinchSensitive;
      var rangeLen = end2 - start2;
      var rangeOffset = rangeLen * zoomOffset;
      var startOffset = rangeOffset * startRatio;
      var endOffset = rangeOffset * endRatio;
      var newStart = Math.max(0, start2 - startOffset);
      var newEnd = Math.min(1, end2 + endOffset);
      var newRange = [newStart, newEnd];
      if (newEnd - newStart < minScale) {
        return this.state.range[dim2];
      }
      return this.updateRange(newRange, dim2);
    }
  }, {
    key: "updateRange",
    value: function updateRange2(originalRange, dim2) {
      if (!originalRange)
        return;
      var _originalRange = _slicedToArray(originalRange, 2), start2 = _originalRange[0], end2 = _originalRange[1];
      var rangeLength = end2 - start2;
      var newRange;
      if (start2 < 0) {
        newRange = [0, rangeLength];
      } else if (end2 > 1) {
        newRange = [1 - rangeLength, 1];
      } else {
        newRange = originalRange;
      }
      var props = this.props, scale3 = this.scale, originScale = this.originScale, state = this.state;
      var chart2 = props.chart, data = props.data, autoFit = props.autoFit;
      var range = state.range;
      if (range && isEqual2(newRange, range[dim2]))
        return newRange;
      updateRange(scale3[dim2], originScale[dim2], newRange);
      if (autoFit) {
        var followScale = this._getFollowScales(dim2);
        this.updateFollow(followScale, scale3[dim2], data);
      }
      var animate = chart2.animate;
      chart2.setAnimate(false);
      chart2.forceUpdate(function() {
        chart2.setAnimate(animate);
      });
      return newRange;
    }
  }, {
    key: "updateFollow",
    value: function updateFollow2(scales, mainScale, data) {
      updateFollow(scales, mainScale, data);
    }
  }, {
    key: "_getScale",
    value: function _getScale(dim2) {
      var _this$props = this.props, coord = _this$props.coord, chart2 = _this$props.chart;
      if (dim2 === "x") {
        return coord.transposed ? chart2.getYScales()[0] : chart2.getXScales()[0];
      } else {
        return coord.transposed ? chart2.getXScales()[0] : chart2.getYScales()[0];
      }
    }
  }, {
    key: "_getFollowScales",
    value: function _getFollowScales(dim2) {
      var _this$props2 = this.props, coord = _this$props2.coord, chart2 = _this$props2.chart;
      if (dim2 === "x") {
        return coord.transposed ? chart2.getXScales() : chart2.getYScales();
      }
      if (dim2 === "y") {
        return coord.transposed ? chart2.getYScales() : chart2.getXScales();
      }
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      var _this4 = this;
      var context = this.context, props = this.props, scale3 = this.scale;
      var canvas = context.canvas;
      var onPinchStart = props.onPinchStart, onPanStart = props.onPanStart, onPanEnd = props.onPanEnd, pan = props.pan, pinch = props.pinch, swipe = props.swipe, onInit = props.onInit, onPan = props.onPan, onPinch = props.onPinch, onPinchEnd = props.onPinchEnd;
      if (pan !== false) {
        canvas.on("panstart", function() {
          _this4.onStart();
          onPanStart({
            scale: scale3
          });
        });
        canvas.on("pan", function(ev) {
          _this4.onPan(ev);
          onPan(ev);
        });
        canvas.on("panend", function() {
          _this4.onEnd();
          onPanEnd({
            scale: scale3
          });
        });
      }
      if (pinch !== false) {
        canvas.on("pinchstart", function() {
          _this4.onStart();
          onPinchStart();
        });
        canvas.on("pinch", function(ev) {
          _this4.onPinch(ev);
          onPinch(ev);
        });
        canvas.on("pinchend", function() {
          _this4.onEnd();
          onPinchEnd({
            scale: scale3
          });
        });
      }
      if (swipe !== false) {
        canvas.on("swipe", this.onSwipe);
      }
      onInit({
        scale: scale3
      });
    }
  }, {
    key: "_clearEvents",
    value: function _clearEvents() {
      var _this5 = this;
      var context = this.context, props = this.props, scale3 = this.scale;
      var canvas = context.canvas;
      var onPinchEnd = props.onPinchEnd, onPanEnd = props.onPanEnd, onPinchStart = props.onPinchStart, pan = props.pan, pinch = props.pinch, onPan = props.onPan, onPinch = props.onPinch, swipe = props.swipe;
      if (pan !== false) {
        canvas.off("panstart", function() {
          _this5.onStart();
          onPinchStart();
        });
        canvas.off("pan", function(ev) {
          _this5.onPan(ev);
          onPan(ev);
        });
        canvas.off("panend", function() {
          _this5.onEnd();
          onPanEnd({
            scale: scale3
          });
        });
      }
      if (pinch !== false) {
        canvas.off("pinchstart", function() {
          _this5.onStart();
          onPinchStart();
        });
        canvas.off("pinch", function(ev) {
          _this5.onPinch(ev);
          onPinch(ev);
        });
        canvas.off("pinchend", function() {
          _this5.onEnd();
          onPinchEnd({
            scale: scale3
          });
        });
      }
      if (swipe !== false) {
        canvas.off("swipe", this.onSwipe);
      }
    }
  }]);
  return Zoom2;
}(component_default);
var zoom_default2 = Zoom;

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/scrollBar/withScrollBar.js
var withScrollBar_default = function(View) {
  return function(_Zoom) {
    _inherits(ScrollBar, _Zoom);
    var _super = _createSuper(ScrollBar);
    function ScrollBar() {
      _classCallCheck(this, ScrollBar);
      return _super.apply(this, arguments);
    }
    _createClass(ScrollBar, [{
      key: "willMount",
      value: function willMount() {
        _get(_getPrototypeOf(ScrollBar.prototype), "willMount", this).call(this);
        var context = this.context, props = this.props;
        var visible = props.visible, _props$position = props.position, position = _props$position === void 0 ? "bottom" : _props$position, _props$margin = props.margin, margin = _props$margin === void 0 ? "16px" : _props$margin, chart2 = props.chart;
        var marginNumber = context.px2hd(margin);
        if (visible === false) {
          return null;
        }
        chart2.updateCoordFor(this, {
          position,
          width: position === "left" || position === "right" ? marginNumber : 0,
          height: position === "bottom" || position === "top" ? marginNumber : 0
        });
      }
    }, {
      key: "render",
      value: function render2() {
        var props = this.props, state = this.state;
        var visible = props.visible;
        if (visible === false) {
          return null;
        }
        return jsx(View, _objectSpread2(_objectSpread2({
          position: "bottom"
        }, props), state));
      }
    }]);
    return ScrollBar;
  }(zoom_default2);
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/scrollBar/horizontal.js
var horizontal_default = function(props, context) {
  var coord = props.coord, range = props.range, position = props.position, layout = props.layout;
  var left = coord.left, width = coord.width;
  var top = layout.top, height = layout.height;
  var _ref = (range === null || range === void 0 ? void 0 : range.x) || (range === null || range === void 0 ? void 0 : range.y), _ref2 = _slicedToArray(_ref, 2), start2 = _ref2[0], end2 = _ref2[1];
  var barLeft = width * start2;
  var barWidth = width * (end2 - start2);
  return jsx("group", {
    style: {
      left,
      top: position === "top" ? top - context.px2hd("8px") : top + height
    }
  }, jsx("line", {
    style: {
      position: "absolute",
      left: 0,
      width,
      height: 0
    },
    attrs: {
      stroke: "rgba(202, 215, 239, .2)",
      lineCap: "round",
      lineWidth: "8px"
    }
  }), jsx("line", {
    style: {
      position: "absolute",
      left: barLeft,
      width: barWidth,
      height: 0
    },
    attrs: {
      stroke: "rgba(202, 215, 239, .5)",
      lineCap: "round",
      lineWidth: "8px"
    }
  }));
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/scrollBar/vertical.js
var vertical_default = function(props, context) {
  var coord = props.coord, range = props.range, position = props.position, layout = props.layout;
  var top = coord.top, height = coord.height;
  var left = layout.left, width = layout.width;
  var _ref = (range === null || range === void 0 ? void 0 : range.y) || (range === null || range === void 0 ? void 0 : range.x), _ref2 = _slicedToArray(_ref, 2), start2 = _ref2[0], end2 = _ref2[1];
  var barTop = height * start2;
  var barHeight = height * (end2 - start2);
  return jsx("group", {
    style: {
      top,
      left: position === "left" ? left - context.px2hd("8px") : left + width
    }
  }, jsx("line", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: 0,
      height
    },
    attrs: {
      stroke: "rgba(202, 215, 239, .2)",
      lineCap: "round",
      lineWidth: "8px"
    }
  }), jsx("line", {
    style: {
      position: "absolute",
      top: barTop,
      width: 0,
      height: barHeight
    },
    attrs: {
      stroke: "rgba(202, 215, 239, .5)",
      lineCap: "round",
      lineWidth: "8px"
    }
  }));
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/scrollBar/scrollBarView.js
var scrollBarView_default = function(props) {
  var position = props.position, mode = props.mode;
  if (mode.length > 1) {
    return jsx("group", null, jsx(vertical_default, _objectSpread2({}, props)), jsx(horizontal_default, _objectSpread2({}, props)));
  }
  if (position === "left" || position === "right") {
    return jsx(vertical_default, _objectSpread2({}, props));
  }
  return jsx(horizontal_default, _objectSpread2({}, props));
};

// node_modules/.pnpm/@antv+f2@4.0.41/node_modules/@antv/f2/es/components/scrollBar/index.js
var scrollBar_default = withScrollBar_default(scrollBarView_default);
export {
  ArcGuide,
  area_default as Area,
  areaView_default as AreaView,
  axis_default as Axis,
  axisView_default as AxisView,
  canvas_default2 as Canvas,
  chart_default as Chart,
  children_default as Children,
  component_default as Component,
  fragment_default as Fragment,
  gauge_default as Gauge,
  gaugeView_default as GaugeView,
  geometry_default as Geometry,
  guide_default as Guide,
  ImageGuide,
  interval_default as Interval,
  intervalView_default as IntervalView,
  legend_default as Legend,
  legendView_default as LegendView,
  line_default3 as Line,
  LineGuide,
  lineView_default as LineView,
  pieLabel_default as PieLabel,
  pieLabeView_default as PieLabelView,
  point_default as Point,
  PointGuide,
  pointView_default as PointView,
  RectGuide,
  scrollBar_default as ScrollBar,
  scrollBarView_default as ScrollBarView,
  sunburst_default as Sunburst,
  sunburstView_default as SunburstView,
  TagGuide,
  TextGuide,
  timeline_default as Timeline,
  tooltip_default as Tooltip,
  TooltipView,
  treemap_default2 as Treemap,
  treemapView_default as TreemapView,
  zoom_default2 as Zoom,
  jsx as createElement,
  createRef,
  jsx,
  render_default as render,
  renderShape,
  withArea_default as withArea,
  withAxis_default as withAxis,
  withGauge_default as withGauge,
  withGuide_default as withGuide,
  withInterval_default as withInterval,
  withLegend_default as withLegend,
  withLine_default as withLine,
  withPieLabel_default as withPieLabel,
  withPoint_default as withPoint,
  withScrollBar_default as withScrollBar,
  withSunburst_default as withSunburst,
  withTooltip_default as withTooltip,
  withTreemap_default as withTreemap
};
/*! Bundled license information:

@babel/runtime/helpers/regeneratorRuntime.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=@antv_f2.js.map
