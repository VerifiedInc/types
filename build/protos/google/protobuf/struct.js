"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListValue = exports.Value = exports.Struct_FieldsEntry = exports.Struct = exports.nullValueToJSON = exports.nullValueFromJSON = exports.NullValue = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "google.protobuf";
/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 *  The JSON representation for `NullValue` is JSON `null`.
 */
var NullValue;
(function (NullValue) {
    /** NULL_VALUE - Null value. */
    NullValue[NullValue["NULL_VALUE"] = 0] = "NULL_VALUE";
    NullValue[NullValue["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NullValue = exports.NullValue || (exports.NullValue = {}));
function nullValueFromJSON(object) {
    switch (object) {
        case 0:
        case "NULL_VALUE":
            return NullValue.NULL_VALUE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return NullValue.UNRECOGNIZED;
    }
}
exports.nullValueFromJSON = nullValueFromJSON;
function nullValueToJSON(object) {
    switch (object) {
        case NullValue.NULL_VALUE:
            return "NULL_VALUE";
        default:
            return "UNKNOWN";
    }
}
exports.nullValueToJSON = nullValueToJSON;
var baseStruct = {};
exports.Struct = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        Object.entries(message.fields).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.Struct_FieldsEntry.encode({ key: key, value: value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseStruct);
        message.fields = {};
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    var entry1 = exports.Struct_FieldsEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.fields[entry1.key] = entry1.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseStruct);
        message.fields = {};
        if (object.fields !== undefined && object.fields !== null) {
            Object.entries(object.fields).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.fields[key] = exports.Value.fromJSON(value);
            });
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        obj.fields = {};
        if (message.fields) {
            Object.entries(message.fields).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.fields[k] = exports.Value.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseStruct);
        message.fields = {};
        if (object.fields !== undefined && object.fields !== null) {
            Object.entries(object.fields).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.fields[key] = exports.Value.fromPartial(value);
                }
            });
        }
        return message;
    },
};
var baseStruct_FieldsEntry = { key: "" };
exports.Struct_FieldsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.Value.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseStruct_FieldsEntry);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.Value.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseStruct_FieldsEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.Value.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? exports.Value.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseStruct_FieldsEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.Value.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
};
var baseValue = {};
exports.Value = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.nullValue !== undefined) {
            writer.uint32(8).int32(message.nullValue);
        }
        if (message.numberValue !== undefined) {
            writer.uint32(17).double(message.numberValue);
        }
        if (message.stringValue !== undefined) {
            writer.uint32(26).string(message.stringValue);
        }
        if (message.boolValue !== undefined) {
            writer.uint32(32).bool(message.boolValue);
        }
        if (message.structValue !== undefined) {
            exports.Struct.encode(message.structValue, writer.uint32(42).fork()).ldelim();
        }
        if (message.listValue !== undefined) {
            exports.ListValue.encode(message.listValue, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseValue);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nullValue = reader.int32();
                    break;
                case 2:
                    message.numberValue = reader.double();
                    break;
                case 3:
                    message.stringValue = reader.string();
                    break;
                case 4:
                    message.boolValue = reader.bool();
                    break;
                case 5:
                    message.structValue = exports.Struct.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.listValue = exports.ListValue.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseValue);
        if (object.nullValue !== undefined && object.nullValue !== null) {
            message.nullValue = nullValueFromJSON(object.nullValue);
        }
        else {
            message.nullValue = undefined;
        }
        if (object.numberValue !== undefined && object.numberValue !== null) {
            message.numberValue = Number(object.numberValue);
        }
        else {
            message.numberValue = undefined;
        }
        if (object.stringValue !== undefined && object.stringValue !== null) {
            message.stringValue = String(object.stringValue);
        }
        else {
            message.stringValue = undefined;
        }
        if (object.boolValue !== undefined && object.boolValue !== null) {
            message.boolValue = Boolean(object.boolValue);
        }
        else {
            message.boolValue = undefined;
        }
        if (object.structValue !== undefined && object.structValue !== null) {
            message.structValue = exports.Struct.fromJSON(object.structValue);
        }
        else {
            message.structValue = undefined;
        }
        if (object.listValue !== undefined && object.listValue !== null) {
            message.listValue = exports.ListValue.fromJSON(object.listValue);
        }
        else {
            message.listValue = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.nullValue !== undefined &&
            (obj.nullValue =
                message.nullValue !== undefined
                    ? nullValueToJSON(message.nullValue)
                    : undefined);
        message.numberValue !== undefined &&
            (obj.numberValue = message.numberValue);
        message.stringValue !== undefined &&
            (obj.stringValue = message.stringValue);
        message.boolValue !== undefined && (obj.boolValue = message.boolValue);
        message.structValue !== undefined &&
            (obj.structValue = message.structValue
                ? exports.Struct.toJSON(message.structValue)
                : undefined);
        message.listValue !== undefined &&
            (obj.listValue = message.listValue
                ? exports.ListValue.toJSON(message.listValue)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseValue);
        if (object.nullValue !== undefined && object.nullValue !== null) {
            message.nullValue = object.nullValue;
        }
        else {
            message.nullValue = undefined;
        }
        if (object.numberValue !== undefined && object.numberValue !== null) {
            message.numberValue = object.numberValue;
        }
        else {
            message.numberValue = undefined;
        }
        if (object.stringValue !== undefined && object.stringValue !== null) {
            message.stringValue = object.stringValue;
        }
        else {
            message.stringValue = undefined;
        }
        if (object.boolValue !== undefined && object.boolValue !== null) {
            message.boolValue = object.boolValue;
        }
        else {
            message.boolValue = undefined;
        }
        if (object.structValue !== undefined && object.structValue !== null) {
            message.structValue = exports.Struct.fromPartial(object.structValue);
        }
        else {
            message.structValue = undefined;
        }
        if (object.listValue !== undefined && object.listValue !== null) {
            message.listValue = exports.ListValue.fromPartial(object.listValue);
        }
        else {
            message.listValue = undefined;
        }
        return message;
    },
};
var baseListValue = {};
exports.ListValue = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.values; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Value.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseListValue);
        message.values = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.values.push(exports.Value.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseListValue);
        message.values = [];
        if (object.values !== undefined && object.values !== null) {
            for (var _i = 0, _a = object.values; _i < _a.length; _i++) {
                var e = _a[_i];
                message.values.push(exports.Value.fromJSON(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.values) {
            obj.values = message.values.map(function (e) { return (e ? exports.Value.toJSON(e) : undefined); });
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseListValue);
        message.values = [];
        if (object.values !== undefined && object.values !== null) {
            for (var _i = 0, _a = object.values; _i < _a.length; _i++) {
                var e = _a[_i];
                message.values.push(exports.Value.fromPartial(e));
            }
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=struct.js.map