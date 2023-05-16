/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { IdRegistryEvent } from './id_registry_event';
import { FarcasterNetwork, farcasterNetworkFromJSON, farcasterNetworkToJSON, Message } from './message';

export enum GossipVersion {
  V1 = 0,
  V1_1 = 1,
}

export function gossipVersionFromJSON(object: any): GossipVersion {
  switch (object) {
    case 0:
    case 'GOSSIP_VERSION_V1':
      return GossipVersion.V1;
    case 1:
    case 'GOSSIP_VERSION_V1_1':
      return GossipVersion.V1_1;
    default:
      throw new tsProtoGlobalThis.Error('Unrecognized enum value ' + object + ' for enum GossipVersion');
  }
}

export function gossipVersionToJSON(object: GossipVersion): string {
  switch (object) {
    case GossipVersion.V1:
      return 'GOSSIP_VERSION_V1';
    case GossipVersion.V1_1:
      return 'GOSSIP_VERSION_V1_1';
    default:
      throw new tsProtoGlobalThis.Error('Unrecognized enum value ' + object + ' for enum GossipVersion');
  }
}

export enum NetworkLatencyMessageType {
  NETWORK_LATENCY_MESSAGE_NONE = 0,
  /** NETWORK_LATENCY_MESSAGE_PING - Ping sent from hub measuring network latency */
  NETWORK_LATENCY_MESSAGE_PING = 1,
  /** NETWORK_LATENCY_MESSAGE_ACK - Acknowledgement sent from hub receiving a ping message */
  NETWORK_LATENCY_MESSAGE_ACK = 2,
}

export function networkLatencyMessageTypeFromJSON(object: any): NetworkLatencyMessageType {
  switch (object) {
    case 0:
    case 'NETWORK_LATENCY_MESSAGE_NONE':
      return NetworkLatencyMessageType.NETWORK_LATENCY_MESSAGE_NONE;
    case 1:
    case 'NETWORK_LATENCY_MESSAGE_PING':
      return NetworkLatencyMessageType.NETWORK_LATENCY_MESSAGE_PING;
    case 2:
    case 'NETWORK_LATENCY_MESSAGE_ACK':
      return NetworkLatencyMessageType.NETWORK_LATENCY_MESSAGE_ACK;
    default:
      throw new tsProtoGlobalThis.Error('Unrecognized enum value ' + object + ' for enum NetworkLatencyMessageType');
  }
}

export function networkLatencyMessageTypeToJSON(object: NetworkLatencyMessageType): string {
  switch (object) {
    case NetworkLatencyMessageType.NETWORK_LATENCY_MESSAGE_NONE:
      return 'NETWORK_LATENCY_MESSAGE_NONE';
    case NetworkLatencyMessageType.NETWORK_LATENCY_MESSAGE_PING:
      return 'NETWORK_LATENCY_MESSAGE_PING';
    case NetworkLatencyMessageType.NETWORK_LATENCY_MESSAGE_ACK:
      return 'NETWORK_LATENCY_MESSAGE_ACK';
    default:
      throw new tsProtoGlobalThis.Error('Unrecognized enum value ' + object + ' for enum NetworkLatencyMessageType');
  }
}

export interface GossipAddressInfo {
  address: string;
  family: number;
  port: number;
  dnsName: string;
}

export interface ContactInfoContent {
  gossipAddress: GossipAddressInfo | undefined;
  rpcAddress: GossipAddressInfo | undefined;
  excludedHashes: string[];
  count: number;
  hubVersion: string;
  network: FarcasterNetwork;
}

export interface PingMessageBody {
  pingTimestamp: number;
}

export interface AckMessageBody {
  pingTimestamp: number;
  ackTimestamp: number;
}

export interface NetworkLatencyMessage {
  messageType: NetworkLatencyMessageType;
  pingMessage?: PingMessageBody | undefined;
  ackMessage?: AckMessageBody | undefined;
}

export interface GossipMessage {
  message?: Message | undefined;
  idRegistryEvent?: IdRegistryEvent | undefined;
  contactInfoContent?: ContactInfoContent | undefined;
  networkLatencyMessage?: NetworkLatencyMessage | undefined;
  topics: string[];
  peerId: Uint8Array;
  version: GossipVersion;
}

function createBaseGossipAddressInfo(): GossipAddressInfo {
  return { address: '', family: 0, port: 0, dnsName: '' };
}

export const GossipAddressInfo = {
  encode(message: GossipAddressInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    if (message.family !== 0) {
      writer.uint32(16).uint32(message.family);
    }
    if (message.port !== 0) {
      writer.uint32(24).uint32(message.port);
    }
    if (message.dnsName !== '') {
      writer.uint32(34).string(message.dnsName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GossipAddressInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGossipAddressInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.family = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.port = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.dnsName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GossipAddressInfo {
    return {
      address: isSet(object.address) ? String(object.address) : '',
      family: isSet(object.family) ? Number(object.family) : 0,
      port: isSet(object.port) ? Number(object.port) : 0,
      dnsName: isSet(object.dnsName) ? String(object.dnsName) : '',
    };
  },

  toJSON(message: GossipAddressInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.family !== undefined && (obj.family = Math.round(message.family));
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.dnsName !== undefined && (obj.dnsName = message.dnsName);
    return obj;
  },

  create<I extends Exact<DeepPartial<GossipAddressInfo>, I>>(base?: I): GossipAddressInfo {
    return GossipAddressInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GossipAddressInfo>, I>>(object: I): GossipAddressInfo {
    const message = createBaseGossipAddressInfo();
    message.address = object.address ?? '';
    message.family = object.family ?? 0;
    message.port = object.port ?? 0;
    message.dnsName = object.dnsName ?? '';
    return message;
  },
};

function createBaseContactInfoContent(): ContactInfoContent {
  return { gossipAddress: undefined, rpcAddress: undefined, excludedHashes: [], count: 0, hubVersion: '', network: 0 };
}

export const ContactInfoContent = {
  encode(message: ContactInfoContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gossipAddress !== undefined) {
      GossipAddressInfo.encode(message.gossipAddress, writer.uint32(10).fork()).ldelim();
    }
    if (message.rpcAddress !== undefined) {
      GossipAddressInfo.encode(message.rpcAddress, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.excludedHashes) {
      writer.uint32(26).string(v!);
    }
    if (message.count !== 0) {
      writer.uint32(32).uint32(message.count);
    }
    if (message.hubVersion !== '') {
      writer.uint32(42).string(message.hubVersion);
    }
    if (message.network !== 0) {
      writer.uint32(48).int32(message.network);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContactInfoContent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContactInfoContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.gossipAddress = GossipAddressInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.rpcAddress = GossipAddressInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.excludedHashes.push(reader.string());
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.count = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.hubVersion = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.network = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContactInfoContent {
    return {
      gossipAddress: isSet(object.gossipAddress) ? GossipAddressInfo.fromJSON(object.gossipAddress) : undefined,
      rpcAddress: isSet(object.rpcAddress) ? GossipAddressInfo.fromJSON(object.rpcAddress) : undefined,
      excludedHashes: Array.isArray(object?.excludedHashes) ? object.excludedHashes.map((e: any) => String(e)) : [],
      count: isSet(object.count) ? Number(object.count) : 0,
      hubVersion: isSet(object.hubVersion) ? String(object.hubVersion) : '',
      network: isSet(object.network) ? farcasterNetworkFromJSON(object.network) : 0,
    };
  },

  toJSON(message: ContactInfoContent): unknown {
    const obj: any = {};
    message.gossipAddress !== undefined &&
      (obj.gossipAddress = message.gossipAddress ? GossipAddressInfo.toJSON(message.gossipAddress) : undefined);
    message.rpcAddress !== undefined &&
      (obj.rpcAddress = message.rpcAddress ? GossipAddressInfo.toJSON(message.rpcAddress) : undefined);
    if (message.excludedHashes) {
      obj.excludedHashes = message.excludedHashes.map((e) => e);
    } else {
      obj.excludedHashes = [];
    }
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.hubVersion !== undefined && (obj.hubVersion = message.hubVersion);
    message.network !== undefined && (obj.network = farcasterNetworkToJSON(message.network));
    return obj;
  },

  create<I extends Exact<DeepPartial<ContactInfoContent>, I>>(base?: I): ContactInfoContent {
    return ContactInfoContent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ContactInfoContent>, I>>(object: I): ContactInfoContent {
    const message = createBaseContactInfoContent();
    message.gossipAddress =
      object.gossipAddress !== undefined && object.gossipAddress !== null
        ? GossipAddressInfo.fromPartial(object.gossipAddress)
        : undefined;
    message.rpcAddress =
      object.rpcAddress !== undefined && object.rpcAddress !== null
        ? GossipAddressInfo.fromPartial(object.rpcAddress)
        : undefined;
    message.excludedHashes = object.excludedHashes?.map((e) => e) || [];
    message.count = object.count ?? 0;
    message.hubVersion = object.hubVersion ?? '';
    message.network = object.network ?? 0;
    return message;
  },
};

function createBasePingMessageBody(): PingMessageBody {
  return { pingTimestamp: 0 };
}

export const PingMessageBody = {
  encode(message: PingMessageBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pingTimestamp !== 0) {
      writer.uint32(8).uint32(message.pingTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingMessageBody {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePingMessageBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.pingTimestamp = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PingMessageBody {
    return { pingTimestamp: isSet(object.pingTimestamp) ? Number(object.pingTimestamp) : 0 };
  },

  toJSON(message: PingMessageBody): unknown {
    const obj: any = {};
    message.pingTimestamp !== undefined && (obj.pingTimestamp = Math.round(message.pingTimestamp));
    return obj;
  },

  create<I extends Exact<DeepPartial<PingMessageBody>, I>>(base?: I): PingMessageBody {
    return PingMessageBody.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PingMessageBody>, I>>(object: I): PingMessageBody {
    const message = createBasePingMessageBody();
    message.pingTimestamp = object.pingTimestamp ?? 0;
    return message;
  },
};

function createBaseAckMessageBody(): AckMessageBody {
  return { pingTimestamp: 0, ackTimestamp: 0 };
}

export const AckMessageBody = {
  encode(message: AckMessageBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pingTimestamp !== 0) {
      writer.uint32(8).uint32(message.pingTimestamp);
    }
    if (message.ackTimestamp !== 0) {
      writer.uint32(16).uint32(message.ackTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AckMessageBody {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAckMessageBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.pingTimestamp = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.ackTimestamp = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AckMessageBody {
    return {
      pingTimestamp: isSet(object.pingTimestamp) ? Number(object.pingTimestamp) : 0,
      ackTimestamp: isSet(object.ackTimestamp) ? Number(object.ackTimestamp) : 0,
    };
  },

  toJSON(message: AckMessageBody): unknown {
    const obj: any = {};
    message.pingTimestamp !== undefined && (obj.pingTimestamp = Math.round(message.pingTimestamp));
    message.ackTimestamp !== undefined && (obj.ackTimestamp = Math.round(message.ackTimestamp));
    return obj;
  },

  create<I extends Exact<DeepPartial<AckMessageBody>, I>>(base?: I): AckMessageBody {
    return AckMessageBody.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AckMessageBody>, I>>(object: I): AckMessageBody {
    const message = createBaseAckMessageBody();
    message.pingTimestamp = object.pingTimestamp ?? 0;
    message.ackTimestamp = object.ackTimestamp ?? 0;
    return message;
  },
};

function createBaseNetworkLatencyMessage(): NetworkLatencyMessage {
  return { messageType: 0, pingMessage: undefined, ackMessage: undefined };
}

export const NetworkLatencyMessage = {
  encode(message: NetworkLatencyMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageType !== 0) {
      writer.uint32(8).int32(message.messageType);
    }
    if (message.pingMessage !== undefined) {
      PingMessageBody.encode(message.pingMessage, writer.uint32(18).fork()).ldelim();
    }
    if (message.ackMessage !== undefined) {
      AckMessageBody.encode(message.ackMessage, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkLatencyMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkLatencyMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.messageType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.pingMessage = PingMessageBody.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.ackMessage = AckMessageBody.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkLatencyMessage {
    return {
      messageType: isSet(object.messageType) ? networkLatencyMessageTypeFromJSON(object.messageType) : 0,
      pingMessage: isSet(object.pingMessage) ? PingMessageBody.fromJSON(object.pingMessage) : undefined,
      ackMessage: isSet(object.ackMessage) ? AckMessageBody.fromJSON(object.ackMessage) : undefined,
    };
  },

  toJSON(message: NetworkLatencyMessage): unknown {
    const obj: any = {};
    message.messageType !== undefined && (obj.messageType = networkLatencyMessageTypeToJSON(message.messageType));
    message.pingMessage !== undefined &&
      (obj.pingMessage = message.pingMessage ? PingMessageBody.toJSON(message.pingMessage) : undefined);
    message.ackMessage !== undefined &&
      (obj.ackMessage = message.ackMessage ? AckMessageBody.toJSON(message.ackMessage) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkLatencyMessage>, I>>(base?: I): NetworkLatencyMessage {
    return NetworkLatencyMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NetworkLatencyMessage>, I>>(object: I): NetworkLatencyMessage {
    const message = createBaseNetworkLatencyMessage();
    message.messageType = object.messageType ?? 0;
    message.pingMessage =
      object.pingMessage !== undefined && object.pingMessage !== null
        ? PingMessageBody.fromPartial(object.pingMessage)
        : undefined;
    message.ackMessage =
      object.ackMessage !== undefined && object.ackMessage !== null
        ? AckMessageBody.fromPartial(object.ackMessage)
        : undefined;
    return message;
  },
};

function createBaseGossipMessage(): GossipMessage {
  return {
    message: undefined,
    idRegistryEvent: undefined,
    contactInfoContent: undefined,
    networkLatencyMessage: undefined,
    topics: [],
    peerId: new Uint8Array(),
    version: 0,
  };
}

export const GossipMessage = {
  encode(message: GossipMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== undefined) {
      Message.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    if (message.idRegistryEvent !== undefined) {
      IdRegistryEvent.encode(message.idRegistryEvent, writer.uint32(18).fork()).ldelim();
    }
    if (message.contactInfoContent !== undefined) {
      ContactInfoContent.encode(message.contactInfoContent, writer.uint32(26).fork()).ldelim();
    }
    if (message.networkLatencyMessage !== undefined) {
      NetworkLatencyMessage.encode(message.networkLatencyMessage, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.topics) {
      writer.uint32(34).string(v!);
    }
    if (message.peerId.length !== 0) {
      writer.uint32(42).bytes(message.peerId);
    }
    if (message.version !== 0) {
      writer.uint32(48).int32(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GossipMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGossipMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.message = Message.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.idRegistryEvent = IdRegistryEvent.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.contactInfoContent = ContactInfoContent.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.networkLatencyMessage = NetworkLatencyMessage.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.topics.push(reader.string());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.peerId = reader.bytes();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.version = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GossipMessage {
    return {
      message: isSet(object.message) ? Message.fromJSON(object.message) : undefined,
      idRegistryEvent: isSet(object.idRegistryEvent) ? IdRegistryEvent.fromJSON(object.idRegistryEvent) : undefined,
      contactInfoContent: isSet(object.contactInfoContent)
        ? ContactInfoContent.fromJSON(object.contactInfoContent)
        : undefined,
      networkLatencyMessage: isSet(object.networkLatencyMessage)
        ? NetworkLatencyMessage.fromJSON(object.networkLatencyMessage)
        : undefined,
      topics: Array.isArray(object?.topics) ? object.topics.map((e: any) => String(e)) : [],
      peerId: isSet(object.peerId) ? bytesFromBase64(object.peerId) : new Uint8Array(),
      version: isSet(object.version) ? gossipVersionFromJSON(object.version) : 0,
    };
  },

  toJSON(message: GossipMessage): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message ? Message.toJSON(message.message) : undefined);
    message.idRegistryEvent !== undefined &&
      (obj.idRegistryEvent = message.idRegistryEvent ? IdRegistryEvent.toJSON(message.idRegistryEvent) : undefined);
    message.contactInfoContent !== undefined &&
      (obj.contactInfoContent = message.contactInfoContent
        ? ContactInfoContent.toJSON(message.contactInfoContent)
        : undefined);
    message.networkLatencyMessage !== undefined &&
      (obj.networkLatencyMessage = message.networkLatencyMessage
        ? NetworkLatencyMessage.toJSON(message.networkLatencyMessage)
        : undefined);
    if (message.topics) {
      obj.topics = message.topics.map((e) => e);
    } else {
      obj.topics = [];
    }
    message.peerId !== undefined &&
      (obj.peerId = base64FromBytes(message.peerId !== undefined ? message.peerId : new Uint8Array()));
    message.version !== undefined && (obj.version = gossipVersionToJSON(message.version));
    return obj;
  },

  create<I extends Exact<DeepPartial<GossipMessage>, I>>(base?: I): GossipMessage {
    return GossipMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GossipMessage>, I>>(object: I): GossipMessage {
    const message = createBaseGossipMessage();
    message.message =
      object.message !== undefined && object.message !== null ? Message.fromPartial(object.message) : undefined;
    message.idRegistryEvent =
      object.idRegistryEvent !== undefined && object.idRegistryEvent !== null
        ? IdRegistryEvent.fromPartial(object.idRegistryEvent)
        : undefined;
    message.contactInfoContent =
      object.contactInfoContent !== undefined && object.contactInfoContent !== null
        ? ContactInfoContent.fromPartial(object.contactInfoContent)
        : undefined;
    message.networkLatencyMessage =
      object.networkLatencyMessage !== undefined && object.networkLatencyMessage !== null
        ? NetworkLatencyMessage.fromPartial(object.networkLatencyMessage)
        : undefined;
    message.topics = object.topics?.map((e) => e) || [];
    message.peerId = object.peerId ?? new Uint8Array();
    message.version = object.version ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  }
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw 'Unable to locate global object';
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, 'base64'));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString('base64');
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(''));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
