"use strict";(self.webpackChunkaleo_website=self.webpackChunkaleo_website||[]).push([[884],{1884:function(n,t,e){e.a(n,(async function(n,r){try{e.r(t),e.d(t,{PrivateKey:function(){return _._q},__wbg_buffer_34f5ec9f8a838ba0:function(){return _.eA},__wbg_call_33d7bcddbbfa394a:function(){return _.Jm},__wbg_crypto_b95d7173266618a9:function(){return _.CU},__wbg_error_09919627ac0992f5:function(){return _.gk},__wbg_getRandomValues_b14734aa289bc356:function(){return _.cA},__wbg_globalThis_3348936ac49df00a:function(){return _.lH},__wbg_global_67175caf56f55ca9:function(){return _.qN},__wbg_length_51f19f73d6d9eff3:function(){return _.Yw},__wbg_msCrypto_5a86d77a66230f81:function(){return _.Vz},__wbg_new_693216e109162396:function(){return _.Ih},__wbg_new_cda198d9dbc6d7ea:function(){return _.G0},__wbg_newnoargs_971e9a5abe185139:function(){return _._f},__wbg_newwithlength_66e5530e7079ea1b:function(){return _._J},__wbg_node_0dd25d832e4785d5:function(){return _.z1},__wbg_process_e56fd54cf6319b6c:function(){return _.SH},__wbg_randomFillSync_91e2b39becca6147:function(){return _.wF},__wbg_require_0db1598d9ccecb30:function(){return _.hF},__wbg_self_fd00a1ef86d1b2ed:function(){return _.At},__wbg_set_1a930cfcda1a8067:function(){return _.FS},__wbg_stack_0ddaca5d1abfb52f:function(){return _.yq},__wbg_static_accessor_NODE_MODULE_26b231378c1be7dd:function(){return _.Z5},__wbg_subarray_270ff8dd5582c1ac:function(){return _.Km},__wbg_versions_77e21455908dad33:function(){return _._d},__wbg_window_6f6e346d8bbd61d7:function(){return _.Hc},__wbindgen_is_object:function(){return _.Wl},__wbindgen_is_string:function(){return _.eY},__wbindgen_is_undefined:function(){return _.XP},__wbindgen_memory:function(){return _.oH},__wbindgen_object_clone_ref:function(){return _.m_},__wbindgen_object_drop_ref:function(){return _.ug},__wbindgen_throw:function(){return _.Or}});var _=e(9519),u=n([_]);_=(u.then?(await u)():u)[0],r()}catch(n){r(n)}}))},9519:function(n,t,e){e.a(n,(async function(r,_){try{e.d(t,{_q:function(){return F},Ih:function(){return H},yq:function(){return T},gk:function(){return j},ug:function(){return C},wF:function(){return E},cA:function(){return O},SH:function(){return S},Wl:function(){return U},_d:function(){return x},z1:function(){return D},eY:function(){return I},Z5:function(){return z},hF:function(){return J},CU:function(){return V},Vz:function(){return Y},_f:function(){return N},Jm:function(){return K},m_:function(){return L},At:function(){return P},Hc:function(){return G},lH:function(){return M},qN:function(){return R},XP:function(){return W},eA:function(){return X},G0:function(){return Z},FS:function(){return B},Yw:function(){return Q},_J:function(){return $},Km:function(){return nn},Or:function(){return tn},oH:function(){return en}});var u=e(9346);n=e.hmd(n);var c=r([u]);u=(c.then?(await c)():c)[0];const o=new Array(32).fill(void 0);function i(n){return o[n]}o.push(void 0,null,!0,!1);let f=o.length;function a(n){n<36||(o[n]=f,f=n)}function d(n){const t=i(n);return a(n),t}function b(n){f===o.length&&o.push(o.length+1);const t=f;return f=o[t],o[t]=n,t}let w=new("undefined"==typeof TextDecoder?(0,n.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});w.decode();let g=new Uint8Array;function s(){return 0===g.byteLength&&(g=new Uint8Array(u.memory.buffer)),g}function l(n,t){return w.decode(s().subarray(n,n+t))}let y=0,h=new("undefined"==typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder)("utf-8");const p="function"==typeof h.encodeInto?function(n,t){return h.encodeInto(n,t)}:function(n,t){const e=h.encode(n);return t.set(e),{read:n.length,written:e.length}};function m(n,t,e){if(void 0===e){const e=h.encode(n),r=t(e.length);return s().subarray(r,r+e.length).set(e),y=e.length,r}let r=n.length,_=t(r);const u=s();let c=0;for(;c<r;c++){const t=n.charCodeAt(c);if(t>127)break;u[_+c]=t}if(c!==r){0!==c&&(n=n.slice(c)),_=e(_,r,r=c+3*n.length);const t=s().subarray(_+c,_+r);c+=p(n,t).written}return y=c,_}let k=new Int32Array;function v(){return 0===k.byteLength&&(k=new Int32Array(u.memory.buffer)),k}function A(n,t){try{return n.apply(this,t)}catch(n){u.__wbindgen_exn_store(b(n))}}function q(n,t){return s().subarray(n/1,n/1+t)}class F{static __wrap(n){const t=Object.create(F.prototype);return t.ptr=n,t}__destroy_into_raw(){const n=this.ptr;return this.ptr=0,n}free(){const n=this.__destroy_into_raw();u.__wbg_privatekey_free(n)}constructor(){const n=u.privatekey_new();return F.__wrap(n)}static from_string(n){const t=m(n,u.__wbindgen_malloc,u.__wbindgen_realloc),e=y,r=u.privatekey_from_string(t,e);return F.__wrap(r)}to_string(){try{const e=u.__wbindgen_add_to_stack_pointer(-16);u.privatekey_to_string(e,this.ptr);var n=v()[e/4+0],t=v()[e/4+1];return l(n,t)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_free(n,t)}}to_view_key(){try{const e=u.__wbindgen_add_to_stack_pointer(-16);u.privatekey_to_view_key(e,this.ptr);var n=v()[e/4+0],t=v()[e/4+1];return l(n,t)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_free(n,t)}}to_address(){try{const e=u.__wbindgen_add_to_stack_pointer(-16);u.privatekey_to_address(e,this.ptr);var n=v()[e/4+0],t=v()[e/4+1];return l(n,t)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_free(n,t)}}}function H(){return b(new Error)}function T(n,t){const e=m(i(t).stack,u.__wbindgen_malloc,u.__wbindgen_realloc),r=y;v()[n/4+1]=r,v()[n/4+0]=e}function j(n,t){try{console.error(l(n,t))}finally{u.__wbindgen_free(n,t)}}function C(n){d(n)}function E(){return A((function(n,t,e){i(n).randomFillSync(q(t,e))}),arguments)}function O(){return A((function(n,t){i(n).getRandomValues(i(t))}),arguments)}function S(n){return b(i(n).process)}function U(n){const t=i(n);return"object"==typeof t&&null!==t}function x(n){return b(i(n).versions)}function D(n){return b(i(n).node)}function I(n){return"string"==typeof i(n)}function z(){return b(n)}function J(){return A((function(n,t,e){return b(i(n).require(l(t,e)))}),arguments)}function V(n){return b(i(n).crypto)}function Y(n){return b(i(n).msCrypto)}function N(n,t){return b(new Function(l(n,t)))}function K(){return A((function(n,t){return b(i(n).call(i(t)))}),arguments)}function L(n){return b(i(n))}function P(){return A((function(){return b(self.self)}),arguments)}function G(){return A((function(){return b(window.window)}),arguments)}function M(){return A((function(){return b(globalThis.globalThis)}),arguments)}function R(){return A((function(){return b(e.g.global)}),arguments)}function W(n){return void 0===i(n)}function X(n){return b(i(n).buffer)}function Z(n){return b(new Uint8Array(i(n)))}function B(n,t,e){i(n).set(i(t),e>>>0)}function Q(n){return i(n).length}function $(n){return b(new Uint8Array(n>>>0))}function nn(n,t,e){return b(i(n).subarray(t>>>0,e>>>0))}function tn(n,t){throw new Error(l(n,t))}function en(){return b(u.memory)}_()}catch(n){_(n)}}))},9346:function(n,t,e){e.a(n,(async function(r,_){try{var u,c=r([u=e(9519)]),[u]=c.then?(await c)():c;await e.v(t,n.id,"cfa25ce289e164cede26",{"./sdk_bg.js":{__wbg_new_693216e109162396:u.Ih,__wbg_stack_0ddaca5d1abfb52f:u.yq,__wbg_error_09919627ac0992f5:u.gk,__wbindgen_object_drop_ref:u.ug,__wbg_randomFillSync_91e2b39becca6147:u.wF,__wbg_getRandomValues_b14734aa289bc356:u.cA,__wbg_process_e56fd54cf6319b6c:u.SH,__wbindgen_is_object:u.Wl,__wbg_versions_77e21455908dad33:u._d,__wbg_node_0dd25d832e4785d5:u.z1,__wbindgen_is_string:u.eY,__wbg_static_accessor_NODE_MODULE_26b231378c1be7dd:u.Z5,__wbg_require_0db1598d9ccecb30:u.hF,__wbg_crypto_b95d7173266618a9:u.CU,__wbg_msCrypto_5a86d77a66230f81:u.Vz,__wbg_newnoargs_971e9a5abe185139:u._f,__wbg_call_33d7bcddbbfa394a:u.Jm,__wbindgen_object_clone_ref:u.m_,__wbg_self_fd00a1ef86d1b2ed:u.At,__wbg_window_6f6e346d8bbd61d7:u.Hc,__wbg_globalThis_3348936ac49df00a:u.lH,__wbg_global_67175caf56f55ca9:u.qN,__wbindgen_is_undefined:u.XP,__wbg_buffer_34f5ec9f8a838ba0:u.eA,__wbg_new_cda198d9dbc6d7ea:u.G0,__wbg_set_1a930cfcda1a8067:u.FS,__wbg_length_51f19f73d6d9eff3:u.Yw,__wbg_newwithlength_66e5530e7079ea1b:u._J,__wbg_subarray_270ff8dd5582c1ac:u.Km,__wbindgen_throw:u.Or,__wbindgen_memory:u.oH}}),_()}catch(n){_(n)}}),1)}}]);