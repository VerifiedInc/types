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
exports.SubjectCredentialIssuerInfoDto = exports.SubjectCredentialsAbsentDto = exports.SubjectAbsentCredentials = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var issuer_1 = require("./issuer");
exports.protobufPackage = "subject.v1";
var baseSubjectAbsentCredentials = { types: "", issuer: "" };
exports.SubjectAbsentCredentials = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.types; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        if (message.issuer !== "") {
            writer.uint32(18).string(message.issuer);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseSubjectAbsentCredentials);
        message.types = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.types.push(reader.string());
                    break;
                case 2:
                    message.issuer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseSubjectAbsentCredentials);
        message.types = [];
        if (object.types !== undefined && object.types !== null) {
            for (var _i = 0, _a = object.types; _i < _a.length; _i++) {
                var e = _a[_i];
                message.types.push(String(e));
            }
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = String(object.issuer);
        }
        else {
            message.issuer = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.types) {
            obj.types = message.types.map(function (e) { return e; });
        }
        else {
            obj.types = [];
        }
        message.issuer !== undefined && (obj.issuer = message.issuer);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseSubjectAbsentCredentials);
        message.types = [];
        if (object.types !== undefined && object.types !== null) {
            for (var _i = 0, _a = object.types; _i < _a.length; _i++) {
                var e = _a[_i];
                message.types.push(e);
            }
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        else {
            message.issuer = "";
        }
        return message;
    },
};
var baseSubjectCredentialsAbsentDto = {};
exports.SubjectCredentialsAbsentDto = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.subjectCredentialsAbsent; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SubjectAbsentCredentials.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseSubjectCredentialsAbsentDto);
        message.subjectCredentialsAbsent = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectCredentialsAbsent.push(exports.SubjectAbsentCredentials.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseSubjectCredentialsAbsentDto);
        message.subjectCredentialsAbsent = [];
        if (object.subjectCredentialsAbsent !== undefined &&
            object.subjectCredentialsAbsent !== null) {
            for (var _i = 0, _a = object.subjectCredentialsAbsent; _i < _a.length; _i++) {
                var e = _a[_i];
                message.subjectCredentialsAbsent.push(exports.SubjectAbsentCredentials.fromJSON(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.subjectCredentialsAbsent) {
            obj.subjectCredentialsAbsent = message.subjectCredentialsAbsent.map(function (e) {
                return e ? exports.SubjectAbsentCredentials.toJSON(e) : undefined;
            });
        }
        else {
            obj.subjectCredentialsAbsent = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseSubjectCredentialsAbsentDto);
        message.subjectCredentialsAbsent = [];
        if (object.subjectCredentialsAbsent !== undefined &&
            object.subjectCredentialsAbsent !== null) {
            for (var _i = 0, _a = object.subjectCredentialsAbsent; _i < _a.length; _i++) {
                var e = _a[_i];
                message.subjectCredentialsAbsent.push(exports.SubjectAbsentCredentials.fromPartial(e));
            }
        }
        return message;
    },
};
var baseSubjectCredentialIssuerInfoDto = {};
exports.SubjectCredentialIssuerInfoDto = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.issuerInfo; _i < _a.length; _i++) {
            var v = _a[_i];
            issuer_1.IssuerInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseSubjectCredentialIssuerInfoDto);
        message.issuerInfo = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.issuerInfo.push(issuer_1.IssuerInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseSubjectCredentialIssuerInfoDto);
        message.issuerInfo = [];
        if (object.issuerInfo !== undefined && object.issuerInfo !== null) {
            for (var _i = 0, _a = object.issuerInfo; _i < _a.length; _i++) {
                var e = _a[_i];
                message.issuerInfo.push(issuer_1.IssuerInfo.fromJSON(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.issuerInfo) {
            obj.issuerInfo = message.issuerInfo.map(function (e) {
                return e ? issuer_1.IssuerInfo.toJSON(e) : undefined;
            });
        }
        else {
            obj.issuerInfo = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseSubjectCredentialIssuerInfoDto);
        message.issuerInfo = [];
        if (object.issuerInfo !== undefined && object.issuerInfo !== null) {
            for (var _i = 0, _a = object.issuerInfo; _i < _a.length; _i++) {
                var e = _a[_i];
                message.issuerInfo.push(issuer_1.IssuerInfo.fromPartial(e));
            }
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=subject.js.map