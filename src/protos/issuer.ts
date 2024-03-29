/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "./google/protobuf/timestamp";
import { VersionInfo } from "./versionInfo";
import { PublicKeyInfo } from "./crypto";

export const protobufPackage = "issuer.v1";

/** Object to encapsulate an Issuer entity */
export interface Issuer {
  uuid: string;
  customerUuid: string;
  name: string;
  did: string;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  isAuthorized: boolean;
  apiKey: string;
  url: string;
  versionInfo: VersionInfo[];
  cardImageUrl: string;
}

/** Object to encapsulate an IssuerOptions entity */
export interface IssuerOptions {
  publicKeyInfo: PublicKeyInfo[];
  url: string;
  versionInfo: VersionInfo[];
}

/** Encapsulates Issuer metadata attributes. */
export interface IssuerInfo {
  did: string;
  name: string;
  cardImageUrl: string;
}

const baseIssuer: object = {
  uuid: "",
  customerUuid: "",
  name: "",
  did: "",
  isAuthorized: false,
  apiKey: "",
  url: "",
  cardImageUrl: "",
};

export const Issuer = {
  encode(
    message: Issuer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.customerUuid !== "") {
      writer.uint32(18).string(message.customerUuid);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.did !== "") {
      writer.uint32(34).string(message.did);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.isAuthorized === true) {
      writer.uint32(56).bool(message.isAuthorized);
    }
    if (message.apiKey !== "") {
      writer.uint32(66).string(message.apiKey);
    }
    if (message.url !== "") {
      writer.uint32(74).string(message.url);
    }
    for (const v of message.versionInfo) {
      VersionInfo.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.cardImageUrl !== "") {
      writer.uint32(90).string(message.cardImageUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Issuer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIssuer } as Issuer;
    message.versionInfo = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        case 2:
          message.customerUuid = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.did = reader.string();
          break;
        case 5:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.isAuthorized = reader.bool();
          break;
        case 8:
          message.apiKey = reader.string();
          break;
        case 9:
          message.url = reader.string();
          break;
        case 10:
          message.versionInfo.push(VersionInfo.decode(reader, reader.uint32()));
          break;
        case 11:
          message.cardImageUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Issuer {
    const message = { ...baseIssuer } as Issuer;
    message.versionInfo = [];
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = String(object.uuid);
    } else {
      message.uuid = "";
    }
    if (object.customerUuid !== undefined && object.customerUuid !== null) {
      message.customerUuid = String(object.customerUuid);
    } else {
      message.customerUuid = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.isAuthorized !== undefined && object.isAuthorized !== null) {
      message.isAuthorized = Boolean(object.isAuthorized);
    } else {
      message.isAuthorized = false;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = String(object.apiKey);
    } else {
      message.apiKey = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.versionInfo !== undefined && object.versionInfo !== null) {
      for (const e of object.versionInfo) {
        message.versionInfo.push(VersionInfo.fromJSON(e));
      }
    }
    if (object.cardImageUrl !== undefined && object.cardImageUrl !== null) {
      message.cardImageUrl = String(object.cardImageUrl);
    } else {
      message.cardImageUrl = "";
    }
    return message;
  },

  toJSON(message: Issuer): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.customerUuid !== undefined &&
      (obj.customerUuid = message.customerUuid);
    message.name !== undefined && (obj.name = message.name);
    message.did !== undefined && (obj.did = message.did);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    message.isAuthorized !== undefined &&
      (obj.isAuthorized = message.isAuthorized);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey);
    message.url !== undefined && (obj.url = message.url);
    if (message.versionInfo) {
      obj.versionInfo = message.versionInfo.map((e) =>
        e ? VersionInfo.toJSON(e) : undefined
      );
    } else {
      obj.versionInfo = [];
    }
    message.cardImageUrl !== undefined &&
      (obj.cardImageUrl = message.cardImageUrl);
    return obj;
  },

  fromPartial(object: DeepPartial<Issuer>): Issuer {
    const message = { ...baseIssuer } as Issuer;
    message.versionInfo = [];
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = object.uuid;
    } else {
      message.uuid = "";
    }
    if (object.customerUuid !== undefined && object.customerUuid !== null) {
      message.customerUuid = object.customerUuid;
    } else {
      message.customerUuid = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.isAuthorized !== undefined && object.isAuthorized !== null) {
      message.isAuthorized = object.isAuthorized;
    } else {
      message.isAuthorized = false;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = object.apiKey;
    } else {
      message.apiKey = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.versionInfo !== undefined && object.versionInfo !== null) {
      for (const e of object.versionInfo) {
        message.versionInfo.push(VersionInfo.fromPartial(e));
      }
    }
    if (object.cardImageUrl !== undefined && object.cardImageUrl !== null) {
      message.cardImageUrl = object.cardImageUrl;
    } else {
      message.cardImageUrl = "";
    }
    return message;
  },
};

const baseIssuerOptions: object = { url: "" };

export const IssuerOptions = {
  encode(
    message: IssuerOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.publicKeyInfo) {
      PublicKeyInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    for (const v of message.versionInfo) {
      VersionInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IssuerOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIssuerOptions } as IssuerOptions;
    message.publicKeyInfo = [];
    message.versionInfo = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publicKeyInfo.push(
            PublicKeyInfo.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.versionInfo.push(VersionInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IssuerOptions {
    const message = { ...baseIssuerOptions } as IssuerOptions;
    message.publicKeyInfo = [];
    message.versionInfo = [];
    if (object.publicKeyInfo !== undefined && object.publicKeyInfo !== null) {
      for (const e of object.publicKeyInfo) {
        message.publicKeyInfo.push(PublicKeyInfo.fromJSON(e));
      }
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.versionInfo !== undefined && object.versionInfo !== null) {
      for (const e of object.versionInfo) {
        message.versionInfo.push(VersionInfo.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: IssuerOptions): unknown {
    const obj: any = {};
    if (message.publicKeyInfo) {
      obj.publicKeyInfo = message.publicKeyInfo.map((e) =>
        e ? PublicKeyInfo.toJSON(e) : undefined
      );
    } else {
      obj.publicKeyInfo = [];
    }
    message.url !== undefined && (obj.url = message.url);
    if (message.versionInfo) {
      obj.versionInfo = message.versionInfo.map((e) =>
        e ? VersionInfo.toJSON(e) : undefined
      );
    } else {
      obj.versionInfo = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<IssuerOptions>): IssuerOptions {
    const message = { ...baseIssuerOptions } as IssuerOptions;
    message.publicKeyInfo = [];
    message.versionInfo = [];
    if (object.publicKeyInfo !== undefined && object.publicKeyInfo !== null) {
      for (const e of object.publicKeyInfo) {
        message.publicKeyInfo.push(PublicKeyInfo.fromPartial(e));
      }
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.versionInfo !== undefined && object.versionInfo !== null) {
      for (const e of object.versionInfo) {
        message.versionInfo.push(VersionInfo.fromPartial(e));
      }
    }
    return message;
  },
};

const baseIssuerInfo: object = { did: "", name: "", cardImageUrl: "" };

export const IssuerInfo = {
  encode(
    message: IssuerInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.cardImageUrl !== "") {
      writer.uint32(26).string(message.cardImageUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IssuerInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIssuerInfo } as IssuerInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.cardImageUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IssuerInfo {
    const message = { ...baseIssuerInfo } as IssuerInfo;
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.cardImageUrl !== undefined && object.cardImageUrl !== null) {
      message.cardImageUrl = String(object.cardImageUrl);
    } else {
      message.cardImageUrl = "";
    }
    return message;
  },

  toJSON(message: IssuerInfo): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    message.name !== undefined && (obj.name = message.name);
    message.cardImageUrl !== undefined &&
      (obj.cardImageUrl = message.cardImageUrl);
    return obj;
  },

  fromPartial(object: DeepPartial<IssuerInfo>): IssuerInfo {
    const message = { ...baseIssuerInfo } as IssuerInfo;
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.cardImageUrl !== undefined && object.cardImageUrl !== null) {
      message.cardImageUrl = object.cardImageUrl;
    } else {
      message.cardImageUrl = "";
    }
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
