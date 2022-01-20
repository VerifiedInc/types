import _m0 from "protobufjs/minimal";
import { PublicKeyInfo } from "./crypto";
import { Proof } from "./proof";
export declare const protobufPackage = "didDocument.v1";
/** Object to encapsulate a DID document object from the saas. */
export interface DidDocument {
    context: string;
    id: string;
    created: Date | undefined;
    updated: Date | undefined;
    publicKey: PublicKeyInfo[];
    service: DidDocumentService[];
}
/** Object to encapsulate a DID document service info. */
export interface DidDocumentService {
    id: string;
    serviceEndpoint: string;
    type: string;
}
/**
 * Object to encapsulate a signed DidDocument.
 * Note: it breaks the name convention of the singed type counterpart being the simpler name of the two, however because the unsigned DidDocument definition was claimed first, this is an exception to the rule.
 */
export interface SignedDidDocument {
    context: string;
    id: string;
    created: Date | undefined;
    updated: Date | undefined;
    publicKey: PublicKeyInfo[];
    service: DidDocumentService[];
    proof: Proof | undefined;
}
/**
 * Object to encapsulate an unsigned Decenterlized ID.
 * Currently only used in subjectCredentialRequest flow.
 */
export interface unsignedDID {
    id: string;
}
/**
 * Object to encapsulate an signed Decenterlized ID.
 * Currently only used in subjectCredentialRequest flow.
 */
export interface DID {
    id: string;
    proof: Proof | undefined;
}
export declare const DidDocument: {
    encode(message: DidDocument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DidDocument;
    fromJSON(object: any): DidDocument;
    toJSON(message: DidDocument): unknown;
    fromPartial(object: DeepPartial<DidDocument>): DidDocument;
};
export declare const DidDocumentService: {
    encode(message: DidDocumentService, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DidDocumentService;
    fromJSON(object: any): DidDocumentService;
    toJSON(message: DidDocumentService): unknown;
    fromPartial(object: DeepPartial<DidDocumentService>): DidDocumentService;
};
export declare const SignedDidDocument: {
    encode(message: SignedDidDocument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignedDidDocument;
    fromJSON(object: any): SignedDidDocument;
    toJSON(message: SignedDidDocument): unknown;
    fromPartial(object: DeepPartial<SignedDidDocument>): SignedDidDocument;
};
export declare const unsignedDID: {
    encode(message: unsignedDID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): unsignedDID;
    fromJSON(object: any): unsignedDID;
    toJSON(message: unsignedDID): unknown;
    fromPartial(object: DeepPartial<unsignedDID>): unsignedDID;
};
export declare const DID: {
    encode(message: DID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DID;
    fromJSON(object: any): DID;
    toJSON(message: DID): unknown;
    fromPartial(object: DeepPartial<DID>): DID;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=didDocument.d.ts.map