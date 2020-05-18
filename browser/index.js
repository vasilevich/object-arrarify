var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var objectArrayToolsfunctions = function (inputObject) {
    if (inputObject === void 0) { inputObject = {}; }
    return ({
        filter: function (filterFunction) {
            var output = {};
            var keys = Object.keys(inputObject).reverse();
            var nameIndex = keys.length;
            while (nameIndex--) {
                if (filterFunction(inputObject[keys[nameIndex]], keys[nameIndex], nameIndex)) {
                    output[keys[nameIndex]] = inputObject[keys[nameIndex]];
                }
            }
            return objectArrayTools(output);
        },
        find: function (filterFunction) {
            var keys = Object.keys(inputObject).reverse();
            var nameIndex = keys.length;
            while (nameIndex--) {
                if (filterFunction(inputObject[keys[nameIndex]], keys[nameIndex], nameIndex)) {
                    return inputObject[keys[nameIndex]];
                }
            }
            return undefined;
        },
        findKey: function (filterFunction) {
            var keys = Object.keys(inputObject).reverse();
            var nameIndex = keys.length;
            while (nameIndex--) {
                if (filterFunction(inputObject[keys[nameIndex]], keys[nameIndex], nameIndex)) {
                    return keys[nameIndex];
                }
            }
            return undefined;
        },
        map: function (mapFunction) {
            var output = {};
            var keys = Object.keys(inputObject).reverse();
            var nameIndex = keys.length;
            while (nameIndex--) {
                output[keys[nameIndex]] = mapFunction(inputObject[keys[nameIndex]], keys[nameIndex], nameIndex);
            }
            return objectArrayTools(output);
        },
        mapKeys: function (mapFunction) {
            var output = {};
            var keys = Object.keys(inputObject).reverse();
            var nameIndex = keys.length;
            while (nameIndex--) {
                output[mapFunction(inputObject[keys[nameIndex]], keys[nameIndex], nameIndex)] = inputObject[keys[nameIndex]];
            }
            return objectArrayTools(output);
        },
        forEach: function (eachFunction) {
            var output = {};
            var keys = Object.keys(inputObject).reverse();
            var nameIndex = keys.length;
            while (nameIndex--) {
                output[keys[nameIndex]] = eachFunction(inputObject[keys[nameIndex]], keys[nameIndex], nameIndex);
            }
        },
        mapToArray: function (mapFunction) {
            var output = [];
            var keys = Object.keys(inputObject).reverse();
            var nameIndex = keys.length;
            var cnt = 0;
            while (nameIndex--) {
                output[cnt++] = mapFunction(inputObject[keys[nameIndex]], keys[nameIndex], nameIndex);
            }
            return output;
        },
        toNormalObject: function () {
            return __assign({}, inputObject);
        },
        length: Object.keys(inputObject).length,
    });
};
var objectArrayTools = function (input) {
    var newInput = __assign({}, input);
    var f = objectArrayToolsfunctions(input);
    var keys = Object.keys(f);
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        Object.defineProperty(newInput, key, {
            enumerable: false,
            value: f[key],
        });
    }
    return newInput;
};
