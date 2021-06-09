/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "./google/protobuf/timestamp";
import { Credential, CredentialRequest } from "./credential";
import { Proof } from "./proof";
import { Struct } from "./google/protobuf/struct";

export const protobufPackage = "presentation.v1";

/** Encapsulates an unsigned presentation attributes. */
export interface UnsignedPresentation {
  context: string[];
  type: string[];
  presentationRequestId: string;
  verifierDid: string;
  verifiableCredential: Credential[];
}

/**
 * Encapsulates addition attributes to the unsigned presentation entity to create a Presentation entity.
 * Tightly coupled with UnsignedPresentation.
 */
export interface Presentation {
  context: string[];
  type: string[];
  presentationRequestId: string;
  verifierDid: string;
  verifiableCredential: Credential[];
  proof: Proof | undefined;
}

/** Encapsulates request attributes for the purposes of requesting presentation of credentials. */
export interface UnsignedPresentationRequest {
  credentialRequests: CredentialRequest[];
  holderAppUuid: string;
  verifier: string;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  expiresAt: Date | undefined;
  /** a string representation of an ambiguous object. Note: the Any type does not work because still needs a scheme (but can be assigned dymanically) */
  metadata: Struct | undefined;
  uuid: string;
  /** an indentifier for related presetnation requests across versions */
  id: string;
}

/**
 * Encapsulates request attributes for the purposes of requesting presentation of credentials with the addition of a proof.
 * Tighting coupled to UnsignedPresentationRequest.
 */
export interface PresentationRequest {
  credentialRequests: CredentialRequest[];
  holderAppUuid: string;
  verifier: string;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  expiresAt: Date | undefined;
  /** a string representation of an ambiguous object. Note: the Any type does not work because still needs a scheme (but can be assigned dymanically) */
  metadata: Struct | undefined;
  uuid: string;
  proof: Proof | undefined;
  /** an indentifier for related presetnation requests across versions */
  id: string;
}

const baseUnsignedPresentation: object = {
  context: "",
  type: "",
  presentationRequestId: "",
  verifierDid: "",
};

export const UnsignedPresentation = {
  encode(
    message: UnsignedPresentation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.context) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.type) {
      writer.uint32(18).string(v!);
    }
    if (message.presentationRequestId !== "") {
      writer.uint32(26).string(message.presentationRequestId);
    }
    if (message.verifierDid !== "") {
      writer.uint32(34).string(message.verifierDid);
    }
    for (const v of message.verifiableCredential) {
      Credential.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UnsignedPresentation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUnsignedPresentation } as UnsignedPresentation;
    message.context = [];
    message.type = [];
    message.verifiableCredential = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.context.push(reader.string());
          break;
        case 2:
          message.type.push(reader.string());
          break;
        case 3:
          message.presentationRequestId = reader.string();
          break;
        case 4:
          message.verifierDid = reader.string();
          break;
        case 5:
          message.verifiableCredential.push(
            Credential.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnsignedPresentation {
    const message = { ...baseUnsignedPresentation } as UnsignedPresentation;
    message.context = [];
    message.type = [];
    message.verifiableCredential = [];
    if (object.context !== undefined && object.context !== null) {
      for (const e of object.context) {
        message.context.push(String(e));
      }
    }
    if (object.type !== undefined && object.type !== null) {
      for (const e of object.type) {
        message.type.push(String(e));
      }
    }
    if (
      object.presentationRequestId !== undefined &&
      object.presentationRequestId !== null
    ) {
      message.presentationRequestId = String(object.presentationRequestId);
    } else {
      message.presentationRequestId = "";
    }
    if (object.verifierDid !== undefined && object.verifierDid !== null) {
      message.verifierDid = String(object.verifierDid);
    } else {
      message.verifierDid = "";
    }
    if (
      object.verifiableCredential !== undefined &&
      object.verifiableCredential !== null
    ) {
      for (const e of object.verifiableCredential) {
        message.verifiableCredential.push(Credential.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: UnsignedPresentation): unknown {
    const obj: any = {};
    if (message.context) {
      obj.context = message.context.map((e) => e);
    } else {
      obj.context = [];
    }
    if (message.type) {
      obj.type = message.type.map((e) => e);
    } else {
      obj.type = [];
    }
    message.presentationRequestId !== undefined &&
      (obj.presentationRequestId = message.presentationRequestId);
    message.verifierDid !== undefined &&
      (obj.verifierDid = message.verifierDid);
    if (message.verifiableCredential) {
      obj.verifiableCredential = message.verifiableCredential.map((e) =>
        e ? Credential.toJSON(e) : undefined
      );
    } else {
      obj.verifiableCredential = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<UnsignedPresentation>): UnsignedPresentation {
    const message = { ...baseUnsignedPresentation } as UnsignedPresentation;
    message.context = [];
    message.type = [];
    message.verifiableCredential = [];
    if (object.context !== undefined && object.context !== null) {
      for (const e of object.context) {
        message.context.push(e);
      }
    }
    if (object.type !== undefined && object.type !== null) {
      for (const e of object.type) {
        message.type.push(e);
      }
    }
    if (
      object.presentationRequestId !== undefined &&
      object.presentationRequestId !== null
    ) {
      message.presentationRequestId = object.presentationRequestId;
    } else {
      message.presentationRequestId = "";
    }
    if (object.verifierDid !== undefined && object.verifierDid !== null) {
      message.verifierDid = object.verifierDid;
    } else {
      message.verifierDid = "";
    }
    if (
      object.verifiableCredential !== undefined &&
      object.verifiableCredential !== null
    ) {
      for (const e of object.verifiableCredential) {
        message.verifiableCredential.push(Credential.fromPartial(e));
      }
    }
    return message;
  },
};

const basePresentation: object = {
  context: "",
  type: "",
  presentationRequestId: "",
  verifierDid: "",
};

export const Presentation = {
  encode(
    message: Presentation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.context) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.type) {
      writer.uint32(18).string(v!);
    }
    if (message.presentationRequestId !== "") {
      writer.uint32(26).string(message.presentationRequestId);
    }
    if (message.verifierDid !== "") {
      writer.uint32(34).string(message.verifierDid);
    }
    for (const v of message.verifiableCredential) {
      Credential.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Presentation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePresentation } as Presentation;
    message.context = [];
    message.type = [];
    message.verifiableCredential = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.context.push(reader.string());
          break;
        case 2:
          message.type.push(reader.string());
          break;
        case 3:
          message.presentationRequestId = reader.string();
          break;
        case 4:
          message.verifierDid = reader.string();
          break;
        case 5:
          message.verifiableCredential.push(
            Credential.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Presentation {
    const message = { ...basePresentation } as Presentation;
    message.context = [];
    message.type = [];
    message.verifiableCredential = [];
    if (object.context !== undefined && object.context !== null) {
      for (const e of object.context) {
        message.context.push(String(e));
      }
    }
    if (object.type !== undefined && object.type !== null) {
      for (const e of object.type) {
        message.type.push(String(e));
      }
    }
    if (
      object.presentationRequestId !== undefined &&
      object.presentationRequestId !== null
    ) {
      message.presentationRequestId = String(object.presentationRequestId);
    } else {
      message.presentationRequestId = "";
    }
    if (object.verifierDid !== undefined && object.verifierDid !== null) {
      message.verifierDid = String(object.verifierDid);
    } else {
      message.verifierDid = "";
    }
    if (
      object.verifiableCredential !== undefined &&
      object.verifiableCredential !== null
    ) {
      for (const e of object.verifiableCredential) {
        message.verifiableCredential.push(Credential.fromJSON(e));
      }
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromJSON(object.proof);
    } else {
      message.proof = undefined;
    }
    return message;
  },

  toJSON(message: Presentation): unknown {
    const obj: any = {};
    if (message.context) {
      obj.context = message.context.map((e) => e);
    } else {
      obj.context = [];
    }
    if (message.type) {
      obj.type = message.type.map((e) => e);
    } else {
      obj.type = [];
    }
    message.presentationRequestId !== undefined &&
      (obj.presentationRequestId = message.presentationRequestId);
    message.verifierDid !== undefined &&
      (obj.verifierDid = message.verifierDid);
    if (message.verifiableCredential) {
      obj.verifiableCredential = message.verifiableCredential.map((e) =>
        e ? Credential.toJSON(e) : undefined
      );
    } else {
      obj.verifiableCredential = [];
    }
    message.proof !== undefined &&
      (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Presentation>): Presentation {
    const message = { ...basePresentation } as Presentation;
    message.context = [];
    message.type = [];
    message.verifiableCredential = [];
    if (object.context !== undefined && object.context !== null) {
      for (const e of object.context) {
        message.context.push(e);
      }
    }
    if (object.type !== undefined && object.type !== null) {
      for (const e of object.type) {
        message.type.push(e);
      }
    }
    if (
      object.presentationRequestId !== undefined &&
      object.presentationRequestId !== null
    ) {
      message.presentationRequestId = object.presentationRequestId;
    } else {
      message.presentationRequestId = "";
    }
    if (object.verifierDid !== undefined && object.verifierDid !== null) {
      message.verifierDid = object.verifierDid;
    } else {
      message.verifierDid = "";
    }
    if (
      object.verifiableCredential !== undefined &&
      object.verifiableCredential !== null
    ) {
      for (const e of object.verifiableCredential) {
        message.verifiableCredential.push(Credential.fromPartial(e));
      }
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromPartial(object.proof);
    } else {
      message.proof = undefined;
    }
    return message;
  },
};

const baseUnsignedPresentationRequest: object = {
  holderAppUuid: "",
  verifier: "",
  uuid: "",
  id: "",
};

export const UnsignedPresentationRequest = {
  encode(
    message: UnsignedPresentationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.credentialRequests) {
      CredentialRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.holderAppUuid !== "") {
      writer.uint32(18).string(message.holderAppUuid);
    }
    if (message.verifier !== "") {
      writer.uint32(26).string(message.verifier);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiresAt),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.metadata !== undefined) {
      Struct.encode(message.metadata, writer.uint32(58).fork()).ldelim();
    }
    if (message.uuid !== "") {
      writer.uint32(66).string(message.uuid);
    }
    if (message.id !== "") {
      writer.uint32(74).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UnsignedPresentationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUnsignedPresentationRequest,
    } as UnsignedPresentationRequest;
    message.credentialRequests = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.credentialRequests.push(
            CredentialRequest.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.holderAppUuid = reader.string();
          break;
        case 3:
          message.verifier = reader.string();
          break;
        case 4:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.expiresAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.metadata = Struct.decode(reader, reader.uint32());
          break;
        case 8:
          message.uuid = reader.string();
          break;
        case 9:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnsignedPresentationRequest {
    const message = {
      ...baseUnsignedPresentationRequest,
    } as UnsignedPresentationRequest;
    message.credentialRequests = [];
    if (
      object.credentialRequests !== undefined &&
      object.credentialRequests !== null
    ) {
      for (const e of object.credentialRequests) {
        message.credentialRequests.push(CredentialRequest.fromJSON(e));
      }
    }
    if (object.holderAppUuid !== undefined && object.holderAppUuid !== null) {
      message.holderAppUuid = String(object.holderAppUuid);
    } else {
      message.holderAppUuid = "";
    }
    if (object.verifier !== undefined && object.verifier !== null) {
      message.verifier = String(object.verifier);
    } else {
      message.verifier = "";
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
    if (object.expiresAt !== undefined && object.expiresAt !== null) {
      message.expiresAt = fromJsonTimestamp(object.expiresAt);
    } else {
      message.expiresAt = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Struct.fromJSON(object.metadata);
    } else {
      message.metadata = undefined;
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = String(object.uuid);
    } else {
      message.uuid = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: UnsignedPresentationRequest): unknown {
    const obj: any = {};
    if (message.credentialRequests) {
      obj.credentialRequests = message.credentialRequests.map((e) =>
        e ? CredentialRequest.toJSON(e) : undefined
      );
    } else {
      obj.credentialRequests = [];
    }
    message.holderAppUuid !== undefined &&
      (obj.holderAppUuid = message.holderAppUuid);
    message.verifier !== undefined && (obj.verifier = message.verifier);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    message.expiresAt !== undefined &&
      (obj.expiresAt = message.expiresAt.toISOString());
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? Struct.toJSON(message.metadata)
        : undefined);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UnsignedPresentationRequest>
  ): UnsignedPresentationRequest {
    const message = {
      ...baseUnsignedPresentationRequest,
    } as UnsignedPresentationRequest;
    message.credentialRequests = [];
    if (
      object.credentialRequests !== undefined &&
      object.credentialRequests !== null
    ) {
      for (const e of object.credentialRequests) {
        message.credentialRequests.push(CredentialRequest.fromPartial(e));
      }
    }
    if (object.holderAppUuid !== undefined && object.holderAppUuid !== null) {
      message.holderAppUuid = object.holderAppUuid;
    } else {
      message.holderAppUuid = "";
    }
    if (object.verifier !== undefined && object.verifier !== null) {
      message.verifier = object.verifier;
    } else {
      message.verifier = "";
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
    if (object.expiresAt !== undefined && object.expiresAt !== null) {
      message.expiresAt = object.expiresAt;
    } else {
      message.expiresAt = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Struct.fromPartial(object.metadata);
    } else {
      message.metadata = undefined;
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = object.uuid;
    } else {
      message.uuid = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const basePresentationRequest: object = {
  holderAppUuid: "",
  verifier: "",
  uuid: "",
  id: "",
};

export const PresentationRequest = {
  encode(
    message: PresentationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.credentialRequests) {
      CredentialRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.holderAppUuid !== "") {
      writer.uint32(18).string(message.holderAppUuid);
    }
    if (message.verifier !== "") {
      writer.uint32(26).string(message.verifier);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiresAt),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.metadata !== undefined) {
      Struct.encode(message.metadata, writer.uint32(58).fork()).ldelim();
    }
    if (message.uuid !== "") {
      writer.uint32(66).string(message.uuid);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(74).fork()).ldelim();
    }
    if (message.id !== "") {
      writer.uint32(82).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PresentationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePresentationRequest } as PresentationRequest;
    message.credentialRequests = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.credentialRequests.push(
            CredentialRequest.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.holderAppUuid = reader.string();
          break;
        case 3:
          message.verifier = reader.string();
          break;
        case 4:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.expiresAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.metadata = Struct.decode(reader, reader.uint32());
          break;
        case 8:
          message.uuid = reader.string();
          break;
        case 9:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        case 10:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PresentationRequest {
    const message = { ...basePresentationRequest } as PresentationRequest;
    message.credentialRequests = [];
    if (
      object.credentialRequests !== undefined &&
      object.credentialRequests !== null
    ) {
      for (const e of object.credentialRequests) {
        message.credentialRequests.push(CredentialRequest.fromJSON(e));
      }
    }
    if (object.holderAppUuid !== undefined && object.holderAppUuid !== null) {
      message.holderAppUuid = String(object.holderAppUuid);
    } else {
      message.holderAppUuid = "";
    }
    if (object.verifier !== undefined && object.verifier !== null) {
      message.verifier = String(object.verifier);
    } else {
      message.verifier = "";
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
    if (object.expiresAt !== undefined && object.expiresAt !== null) {
      message.expiresAt = fromJsonTimestamp(object.expiresAt);
    } else {
      message.expiresAt = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Struct.fromJSON(object.metadata);
    } else {
      message.metadata = undefined;
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = String(object.uuid);
    } else {
      message.uuid = "";
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromJSON(object.proof);
    } else {
      message.proof = undefined;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: PresentationRequest): unknown {
    const obj: any = {};
    if (message.credentialRequests) {
      obj.credentialRequests = message.credentialRequests.map((e) =>
        e ? CredentialRequest.toJSON(e) : undefined
      );
    } else {
      obj.credentialRequests = [];
    }
    message.holderAppUuid !== undefined &&
      (obj.holderAppUuid = message.holderAppUuid);
    message.verifier !== undefined && (obj.verifier = message.verifier);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    message.expiresAt !== undefined &&
      (obj.expiresAt = message.expiresAt.toISOString());
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? Struct.toJSON(message.metadata)
        : undefined);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.proof !== undefined &&
      (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<PresentationRequest>): PresentationRequest {
    const message = { ...basePresentationRequest } as PresentationRequest;
    message.credentialRequests = [];
    if (
      object.credentialRequests !== undefined &&
      object.credentialRequests !== null
    ) {
      for (const e of object.credentialRequests) {
        message.credentialRequests.push(CredentialRequest.fromPartial(e));
      }
    }
    if (object.holderAppUuid !== undefined && object.holderAppUuid !== null) {
      message.holderAppUuid = object.holderAppUuid;
    } else {
      message.holderAppUuid = "";
    }
    if (object.verifier !== undefined && object.verifier !== null) {
      message.verifier = object.verifier;
    } else {
      message.verifier = "";
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
    if (object.expiresAt !== undefined && object.expiresAt !== null) {
      message.expiresAt = object.expiresAt;
    } else {
      message.expiresAt = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Struct.fromPartial(object.metadata);
    } else {
      message.metadata = undefined;
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = object.uuid;
    } else {
      message.uuid = "";
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromPartial(object.proof);
    } else {
      message.proof = undefined;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
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
