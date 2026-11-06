"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('SetInboxThreadLabelsResponseSuccessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RESEND_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ResendSDK.test();
        const ent = testsdk.SetInboxThreadLabelsResponseSuccess();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RESEND_TEST_LIVE;
        for (const op of ['update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'set_inbox_thread_labels_response_success.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "data": { "a": true, "h": "Data", "n": "data", "r": true, "sh": "Every label on the thread after the change.", "t": "`$ARRAY`", "key$": "data", "index$": 0 }, "labels": { "a": true, "h": "Labels", "n": "labels", "r": true, "sh": "The IDs of the labels the thread carries after the change.", "t": "`$ARRAY`", "key$": "labels", "index$": 1 }, "object": { "a": true, "h": "Object", "n": "object", "r": true, "sh": "Type of the response object.", "t": "`$STRING`", "key$": "object", "index$": 2 } }, "name": "set_inbox_thread_labels_response_success", "op": { "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /inboxes/{inbox_id}/threads/{thread_id}/labels", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1", "k": "param", "n": "inbox_id", "or": "inbox_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "thread_id", "or": "thread_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/inboxes/{inbox_id}/threads/{thread_id}/labels", "q": { "exist": ["inbox_id", "thread_id"] }, "r": {}, "s": [{ "lit": "inboxes" }, { "var": "inbox_id" }, { "lit": "threads" }, { "var": "thread_id" }, { "lit": "labels" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.inbox"]] }, "key$": "set_inbox_thread_labels_response_success", "name__orig": "set_inbox_thread_labels_response_success", "Name": "SetInboxThreadLabelsResponseSuccess", "name_": "set_inbox_thread_labels_response_success", "name-": "set-inbox-thread-labels-response-success", "NAME": "SET_INBOX_THREAD_LABELS_RESPONSE_SUCCESS", "index$": 59 }, { "active": true, "entity": "set_inbox_thread_labels_response_success", "key$": "BasicSetInboxThreadLabelsResponseSuccessFlow", "kind": "basic", "name": "BasicSetInboxThreadLabelsResponseSuccessFlow", "param": {}, "step": [{ "a": true, "d": { "inbox_id": "inbox01" }, "i": { "ref": "set_inbox_thread_labels_response_success_ref01", "srcdatavar": "set_inbox_thread_labels_response_success_ref01_data", "suffix": "_up0", "textfield": "object" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-set_inbox_thread_labels_response_success_ref01" } }], "v": [] }] }, 'SetInboxThreadLabelsResponseSuccess', { "PUT /inboxes/{inbox_id}/threads/{thread_id}/labels": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["labels"], "properties": { "labels": { "type": "array", "maxItems": 100, "items": { "type": "string", "format": "uuid" }, "description": "The IDs of the labels the thread carries after the change. Up to 100 IDs, each a label of the inbox. Pass an empty array to take every label off the thread.", "example": ["7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34"], "key$": "labels" } }, "x-ref": "#/components/schemas/SetInboxThreadLabelsOptions", "index$": 1 } } } }, "parameters": [{ "in": "path", "name": "inbox_id", "required": true, "schema": { "type": "string" }, "description": "The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.", "example": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1", "x-ref": "#/components/parameters/InboxIdOrEmailAddress", "index$": 0 }, { "name": "thread_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The Thread ID.", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let set_inbox_thread_labels_response_success_ref01_data = Object.values(setup.data.existing.set_inbox_thread_labels_response_success)[0];
        // UPDATE
        const set_inbox_thread_labels_response_success_ref01_ent = client.SetInboxThreadLabelsResponseSuccess();
        const set_inbox_thread_labels_response_success_ref01_data_up0 = {};
        set_inbox_thread_labels_response_success_ref01_data_up0['inbox_id'] = setup.idmap['inbox_id'];
        const set_inbox_thread_labels_response_success_ref01_markdef_up0 = { name: 'object', value: 'Mark01-set_inbox_thread_labels_response_success_ref01_' + setup.now };
        set_inbox_thread_labels_response_success_ref01_data_up0[set_inbox_thread_labels_response_success_ref01_markdef_up0.name] = set_inbox_thread_labels_response_success_ref01_markdef_up0.value;
        const set_inbox_thread_labels_response_success_ref01_resdata_up0 = (await set_inbox_thread_labels_response_success_ref01_ent.update(set_inbox_thread_labels_response_success_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != set_inbox_thread_labels_response_success_ref01_resdata_up0);
        (0, node_assert_1.default)(set_inbox_thread_labels_response_success_ref01_resdata_up0[set_inbox_thread_labels_response_success_ref01_markdef_up0.name] === set_inbox_thread_labels_response_success_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/set_inbox_thread_labels_response_success/SetInboxThreadLabelsResponseSuccessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ResendSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['set_inbox_thread_labels_response_success01', 'set_inbox_thread_labels_response_success02', 'set_inbox_thread_labels_response_success03', 'inbox01', 'inbox02', 'inbox03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RESEND_TEST_SET_INBOX_THREAD_LABELS_RESPONSE_SUCCESS_ENTID': idmap,
        'RESEND_TEST_LIVE': 'FALSE',
        'RESEND_TEST_EXPLAIN': 'FALSE',
        'RESEND_APIKEY': '',
    });
    idmap = env['RESEND_TEST_SET_INBOX_THREAD_LABELS_RESPONSE_SUCCESS_ENTID'];
    const live = 'TRUE' === env.RESEND_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RESEND_TEST_SET_INBOX_THREAD_LABELS_RESPONSE_SUCCESS_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.ResendSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.RESEND_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.RESEND_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=SetInboxThreadLabelsResponseSuccessEntity.test.js.map