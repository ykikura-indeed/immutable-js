/**
 *  Copyright (c) 2014, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */
function t(){function t(t,e,r,n){var i;if(n){var u=n.prototype;i=ie.create(u)}else i=t.prototype;return ie.keys(e).forEach(function(t){i[t]=e[t]}),ie.keys(r).forEach(function(e){t[e]=r[e]}),i.constructor=t,t.prototype=i,t}function e(t,e,r,n){return ie.getPrototypeOf(e)[r].apply(t,n)}function r(t,r,n){e(t,r,"constructor",n)}function n(){return Object.create(he)}function i(t){var e=Object.create(fe);return e.__reversedIndices=t?t.__reversedIndices:!1,e}function u(t,e,r,n){var i=t.get?t.get(e[n],ye):ye;return i===ye?r:++n===e.length?i:u(i,e,r,n)}function s(t,e,r){return(0===t||null!=r&&-r>=t)&&(null==e||null!=r&&e>=r)}function a(t,e){return 0>t?Math.max(0,e+t):e?Math.min(e,t):t}function h(t,e){return null==t?e:0>t?Math.max(0,e+t):e?Math.min(e,t):t}function o(t){return t}function c(t,e){return[e,t]}function f(){return!0}function l(){return this}function _(t){return(t||0)+1}function v(t,e,r,n,i){var u=t.__makeSequence();return u.__iterateUncached=function(u,s,a){var h=0,o=t.__iterate(function(t,i,s){if(e.call(r,t,i,s)){if(u(t,n?i:h,s)===!1)return!1;h++}},s,a);return i?o:h},u}function g(t){return function(){return!t.apply(this,arguments)}}function p(t){return"string"==typeof t?JSON.stringify(t):t}function m(t,e){for(var r="";e;)1&e&&(r+=t),(e>>=1)&&(t+=t);return r}function d(t,e){return t>e?1:e>t?-1:0}function y(t){I(1/0!==t,"Cannot perform this action with an infinite sequence.")}function w(t,e){return t===e?0!==t||0!==e||1/t===1/e:t!==t?e!==e:t instanceof se?t.equals(e):!1}function I(t,e){if(!t)throw Error(e)}function D(t,e,r){var n=t._rootData.updateIn(t._keyPath,e),i=t._keyPath||[];return t._onChange&&t._onChange.call(void 0,n,t._rootData,r?i.concat(r):i),new ve(n,t._keyPath,t._onChange)}function O(){}function b(t){for(var e=t.length,r=Array(e),n=0;e>n;n++)r[n]=t[n];return r}function M(t){return qe.value=t,qe}function k(t,e,r){var n=Object.create(De);return n.length=t,n._root=e,n.__ownerID=r,n}function S(t,e,r){var n=M(),i=x(t._root,t.__ownerID,0,L(e),e,r,n),u=t.length+(n.value?r===ye?-1:1:0);return t.__ownerID?(t.length=u,t._root=i,t):i?i===t._root?t:k(u,i):we.empty()
}function x(t,e,r,n,i,u,s){return t?t.update(e,r,n,i,u,s):u===ye?t:(s&&(s.value=!0),new Ce(e,n,[i,u]))}function C(t){return t.constructor===Ce||t.constructor===Se}function E(t,e,r,n,i){if(t.hash===n)return new Se(e,n,[t.entry,i]);var u,s=t.hash>>>r&de,a=n>>>r&de,h=s===a?[E(t,e,r+pe,n,i)]:(u=new Ce(e,n,i),a>s?[t,u]:[u,t]);return new Oe(e,1<<s|1<<a,h)}function A(t,e,r,n){for(var i=0,u=0,s=Array(r),a=0,h=1,o=e.length;o>a;a++,h<<=1){var c=e[a];null!=c&&a!==n&&(i|=h,s[u++]=c)}return new Oe(t,i,s)}function q(t,e,r,n,i){for(var u=0,s=Array(me),a=0;0!==r;a++,r>>>=1)s[a]=1&r?e[u++]:null;return s[n]=i,new Me(t,u+1,s)}function j(t,e,r){for(var n=[],i=0;r.length>i;i++){var u=r[i];u&&n.push(Array.isArray(u)?se(u).fromEntries():se(u))}return W(t,e,n)}function U(t){return function(e,r){return e&&e.mergeDeepWith?e.mergeDeepWith(t,r):t?t(e,r):r}}function W(t,e,r){if(0===r.length)return t;for(var n=!1,i=t.asMutable(),u=function(t,r){var u=i.get(r,ye);e&&u!==ye&&(t=e(u,t)),u!==t&&(n=!0,i.set(r,t))},s=0;r.length>s;s++)r[s].forEach(u);return n?i.__ensureOwner(t.__ownerID):t}function R(t,e,r,n){var i=e[n],u=t.get?t.get(i,ye):ye;return u===ye&&(u=we.empty()),I(t.set,"updateIn with invalid keyPath"),t.set(i,++n===e.length?r(u):R(u,e,r,n))}function P(t){return t-=t>>1&1431655765,t=(858993459&t)+(t>>2&858993459),t=t+(t>>4)&252645135,t+=t>>8,t+=t>>16,127&t}function z(t,e,r,n){var i=n?t:b(t);return i[e]=r,i}function J(t,e,r,n){var i=t.length+1;if(n&&e+1===i)return t[e]=r,t;for(var u=Array(i),s=0,a=0;i>a;a++)a===e?(u[a]=r,s=-1):u[a]=t[a+s];return u}function B(t,e,r){var n=t.length-1;if(r&&e===n)return t.pop(),t;for(var i=Array(n),u=0,s=0;n>s;s++)s===e&&(u=1),i[s]=t[s+u];return i}function L(t){if(!t)return 0;if(t===!0)return 1;var e=typeof t;if("number"===e){if((0|t)===t)return t&je;t=""+t,e="string"}if("string"===e)return t.length>Ue?V(t):K(t);if(t.hashCode&&"function"==typeof t.hashCode)return t.hashCode();throw Error("Unable to hash: "+t)}function V(t){var e=Pe[t];return null==e&&(e=K(t),Re===We&&(Re=0,Pe={}),Re++,Pe[t]=e),e}function K(t){for(var e=0,r=0;t.length>r;r++)e=31*e+t.charCodeAt(r)&je;
return e}function N(t,e,r,n,i){return{array:t,level:e,offset:r,max:n,__prev:i}}function F(t,e,r,n,i,u){var s=Object.create(Ve);return s.length=e-t,s._origin=t,s._size=e,s._level=r,s._root=n,s._tail=i,s.__ownerID=u,s}function G(t,e,r){var n=r===ye;if(!n&&e>=t.length)return t.withMutations(function(t){return Q(t,0,e+1).set(e,r)});if(t.get(e,ye)===r)return t;var i=Y(t._size);if(e=X(e,t._origin),e>=i){var u=t._tail.ensureOwner(t.__ownerID);return n?delete u.array[e&de]:u.array[e&de]=r,t.__ownerID?(t._tail=u,t):F(t._origin,t._size,t._level,t._root,u)}for(var s=t._root.ensureOwner(t.__ownerID),a=s,h=t._level;h>0;h-=pe){var o=e>>>h&de;a=a.array[o]=a.array[o]?a.array[o].ensureOwner(t.__ownerID):new Ke([],t.__ownerID)}return n?delete a.array[e&de]:a.array[e&de]=r,t.__ownerID?(t._root=s,t):F(t._origin,t._size,t._level,s,t._tail)}function H(t,e){if(e>=Y(t._size))return t._tail;if(1<<t._level+pe>e){for(var r=t._root,n=t._level;r&&n>0;)r=r.array[e>>>n&de],n-=pe;return r}}function Q(t,e,r){var n=t.__ownerID||new O,i=t._origin,u=t._size,s=i+e,a=null==r?u:0>r?u+r:i+r;if(s===i&&a===u)return t;if(s>=a)return t.clear();for(var h=t._level,o=t._root,c=0;0>s+c;)o=new Ke(o.array.length?[null,o]:[],n),h+=pe,c+=1<<h;c&&(s+=c,i+=c,a+=c,u+=c);for(var f=Y(u),l=Y(a);l>=1<<h+pe;)o=new Ke(o.array.length?[o]:[],n),h+=pe;var _=t._tail,v=f>l?H(t,a-1):l>f?new Ke([],n):_;if(l>f&&u>s&&_.array.length){o=o.ensureOwner(n);for(var g=o,p=h;p>pe;p-=pe){var m=f>>>p&de;g=g.array[m]=g.array[m]?g.array[m].ensureOwner(n):new Ke([],n)}g.array[f>>>pe&de]=_}if(u>a&&(v=v.removeAfter(n,0,a)),s>=l)s-=l,a-=l,h=pe,o=He,v=v.removeBefore(n,0,s);else if(s>i||f>l){var d,y;c=0;do d=s>>>h&de,y=l-1>>>h&de,d===y&&(d&&(c+=(1<<h)*d),h-=pe,o=o&&o.array[d]);while(o&&d===y);o&&s>i&&(o=o.removeBefore(n,h,s-c)),o&&f>l&&(o=o.removeAfter(n,h,l-c)),c&&(s-=c,a-=c),o=o||He}return t.__ownerID?(t.length=a-s,t._origin=s,t._size=a,t._level=h,t._root=o,t._tail=v,t):F(s,a,h,o,v)}function T(t,e,r){for(var n=[],i=0;r.length>i;i++){var u=r[i];u&&n.push(se(u))}var s=Math.max.apply(null,n.map(function(t){return t.length||0
}));return s>t.length&&(t=t.setLength(s)),W(t,e,n)}function X(t,e){return I(t>=0,"Index out of bounds"),t+e}function Y(t){return me>t?0:t-1>>>pe<<pe}function Z(t,e){var r=Object.create(Xe);return r.length=t?t.length:0,r._map=t,r.__ownerID=e,r}function $(t,e,r){var n=Object.create(Ze.prototype);return n.length=t?t.length:0,n._map=t,n._vector=e,n.__ownerID=r,n}function te(t,e,r){var n=Object.create(Object.getPrototypeOf(t));return n._map=e,n.__ownerID=r,n}function ee(t,e){return e?re(e,t,"",{"":t}):ne(t)}function re(t,e,r,n){return e&&(Array.isArray(e)||e.constructor===Object)?t.call(n,r,se(e).map(function(r,n){return re(t,r,n,e)})):e}function ne(t){if(t){if(Array.isArray(t))return se(t).map(ne).toVector();if(t.constructor===Object)return se(t).map(ne).toMap()}return t}var ie=Object,ue={};ue.createClass=t,ue.superCall=e,ue.defaultSuperCall=r;var se=function(t){return ae.from(1===arguments.length?t:Array.prototype.slice.call(arguments))},ae=se;ue.createClass(se,{toString:function(){return this.__toString("Seq {","}")},__toString:function(t,e){return 0===this.length?t+e:t+" "+this.map(this.__toStringMapper).join(", ")+" "+e},__toStringMapper:function(t,e){return e+": "+p(t)},toJS:function(){return this.map(function(t){return t instanceof ae?t.toJS():t}).__toJS()},toArray:function(){y(this.length);var t=Array(this.length||0);return this.values().forEach(function(e,r){t[r]=e}),t},toObject:function(){y(this.length);var t={};return this.forEach(function(e,r){t[r]=e}),t},toVector:function(){return y(this.length),Be.from(this)},toMap:function(){return y(this.length),we.from(this)},toOrderedMap:function(){return y(this.length),Ze.from(this)},toSet:function(){return y(this.length),Qe.from(this)},equals:function(t){if(this===t)return!0;if(!(t instanceof ae))return!1;if(null!=this.length&&null!=t.length){if(this.length!==t.length)return!1;if(0===this.length&&0===t.length)return!0}return this.__deepEquals(t)},__deepEquals:function(t){var e=this.cacheResult().entries().toArray(),r=0;return t.every(function(t,n){var i=e[r++];return w(n,i[0])&&w(t,i[1])
})},join:function(t){t=t||",";var e="",r=!0;return this.forEach(function(n){r?(r=!1,e+=n):e+=t+n}),e},count:function(t,e){return t?this.filter(t,e).count():(null==this.length&&(this.length=this.forEach(f)),this.length)},countBy:function(t){var e=this;return Ze.empty().withMutations(function(r){e.forEach(function(e,n,i){r.update(t(e,n,i),_)})})},concat:function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];var r=[this].concat(t.map(function(t){return ae(t)})),n=this.__makeSequence();return n.length=r.reduce(function(t,e){return null!=t&&null!=e.length?t+e.length:void 0},0),n.__iterateUncached=function(t,e){for(var n,i=0,u=r.length-1,s=0;u>=s&&!n;s++){var a=r[e?u-s:s];i+=a.__iterate(function(e,r,i){return t(e,r,i)===!1?(n=!0,!1):void 0},e)}return i},n},reverse:function(){var t=this,e=t.__makeSequence();return e.length=t.length,e.__iterateUncached=function(e,r){return t.__iterate(e,!r)},e.reverse=function(){return t},e},keys:function(){return this.flip().values()},values:function(){var t=this,e=i(t);return e.length=t.length,e.values=l,e.__iterateUncached=function(e,r,n){if(n&&null==this.length)return this.cacheResult().__iterate(e,r,n);var i,u=0;return n?(u=this.length-1,i=function(t,r,n){return e(t,u--,n)!==!1}):i=function(t,r,n){return e(t,u++,n)!==!1},t.__iterate(i,r),n?this.length:u},e},entries:function(){var t=this;if(t._cache)return ae(t._cache);var e=t.map(c).values();return e.fromEntries=function(){return t},e},forEach:function(t,e){return this.__iterate(e?t.bind(e):t)},reduce:function(t,e,r){var n=e;return this.forEach(function(e,i,u){n=t.call(r,n,e,i,u)}),n},reduceRight:function(t,e,r){return this.reverse(!0).reduce(t,e,r)},every:function(t,e){var r=!0;return this.forEach(function(n,i,u){return t.call(e,n,i,u)?void 0:(r=!1,!1)}),r},some:function(t,e){return!this.every(g(t),e)},first:function(){return this.find(f)},last:function(){return this.findLast(f)},rest:function(){return this.slice(1)},butLast:function(){return this.slice(0,-1)},has:function(t){return this.get(t,ye)!==ye},get:function(t,e){return this.find(function(e,r){return w(r,t)
},null,e)},getIn:function(t,e){return t&&0!==t.length?u(this,t,e,0):this},contains:function(t){return this.find(function(e){return w(e,t)},null,ye)!==ye},find:function(t,e,r){var n=r;return this.forEach(function(r,i,u){return t.call(e,r,i,u)?(n=r,!1):void 0}),n},findKey:function(t,e){var r;return this.forEach(function(n,i,u){return t.call(e,n,i,u)?(r=i,!1):void 0}),r},findLast:function(t,e,r){return this.reverse(!0).find(t,e,r)},findLastKey:function(t,e){return this.reverse(!0).findKey(t,e)},flip:function(){var t=this,e=n();return e.length=t.length,e.flip=function(){return t},e.__iterateUncached=function(e,r){return t.__iterate(function(t,r,n){return e(r,t,n)!==!1},r)},e},map:function(t,e){var r=this,n=r.__makeSequence();return n.length=r.length,n.__iterateUncached=function(n,i){return r.__iterate(function(r,i,u){return n(t.call(e,r,i,u),i,u)!==!1},i)},n},mapKeys:function(t,e){var r=this,n=r.__makeSequence();return n.length=r.length,n.__iterateUncached=function(n,i){return r.__iterate(function(r,i,u){return n(r,t.call(e,i,r,u),u)!==!1},i)},n},filter:function(t,e){return v(this,t,e,!0,!1)},slice:function(t,e){if(s(t,e,this.length))return this;var r=a(t,this.length),n=h(e,this.length);if(r!==r||n!==n)return this.entries().slice(t,e).fromEntries();var i=0===r?this:this.skip(r);return null==n||n===this.length?i:i.take(n-r)},take:function(t){var e=0,r=this.takeWhile(function(){return e++<t});return r.length=this.length&&Math.min(this.length,t),r},takeLast:function(t,e){return this.reverse(e).take(t).reverse(e)},takeWhile:function(t,e){var r=this,n=r.__makeSequence();return n.__iterateUncached=function(n,i,u){if(i)return this.cacheResult().__iterate(n,i,u);var s=0;return r.__iterate(function(r,i,u){return t.call(e,r,i,u)&&n(r,i,u)!==!1?void s++:!1},i,u),s},n},takeUntil:function(t,e,r){return this.takeWhile(g(t),e,r)},skip:function(t,e){if(0===t)return this;var r=0,n=this.skipWhile(function(){return r++<t},null,e);return n.length=this.length&&Math.max(0,this.length-t),n},skipLast:function(t,e){return this.reverse(e).skip(t).reverse(e)
},skipWhile:function(t,e){var r=this,n=r.__makeSequence();return n.__iterateUncached=function(n,i,u){if(i)return this.cacheResult().__iterate(n,i,u);var s=!0,a=0;return r.__iterate(function(r,i,u){if(!s||!(s=t.call(e,r,i,u))){if(n(r,i,u)===!1)return!1;a++}},i,u),a},n},skipUntil:function(t,e,r){return this.skipWhile(g(t),e,r)},groupBy:function(t){var e=this,r=Ze.empty().withMutations(function(r){e.forEach(function(e,n,i){var u=t(e,n,i),s=r.get(u,ye);s===ye&&(s=[],r.set(u,s)),s.push([n,e])})});return r.map(function(t){return ae(t).fromEntries()})},sort:function(t,e){return this.sortBy(o,t,e)},sortBy:function(t,e){e=e||d;var r=this;return ae(this.entries().entries().toArray().sort(function(n,i){return e(t(n[1][1],n[1][0],r),t(i[1][1],i[1][0],r))||n[0]-i[0]})).fromEntries().values().fromEntries()},cacheResult:function(){return!this._cache&&this.__iterateUncached&&(y(this.length),this._cache=this.entries().toArray(),null==this.length&&(this.length=this._cache.length)),this},__iterate:function(t,e,r){if(!this._cache)return this.__iterateUncached(t,e,r);var n=this.length-1,i=this._cache,u=this;if(e)for(var s=i.length-1;s>=0;s--){var a=i[s];if(t(a[1],r?a[0]:n-a[0],u)===!1)break}else i.every(r?function(e){return t(e[1],n-e[0],u)!==!1}:function(e){return t(e[1],e[0],u)!==!1});return this.length},__makeSequence:function(){return n()}},{from:function(t){if(t instanceof ae)return t;if(!Array.isArray(t)){if(t&&t.constructor===Object)return new le(t);t=[t]}return new _e(t)}});var he=se.prototype;he.toJSON=he.toJS,he.__toJS=he.toObject,he.inspect=he.toSource=function(){return""+this};var oe=function(){ue.defaultSuperCall(this,ce.prototype,arguments)},ce=oe;ue.createClass(oe,{toString:function(){return this.__toString("Seq [","]")},toArray:function(){y(this.length);var t=Array(this.length||0);return t.length=this.forEach(function(e,r){t[r]=e}),t},fromEntries:function(){var t=this,e=n();return e.length=t.length,e.entries=function(){return t},e.__iterateUncached=function(e,r,n){return t.__iterate(function(t,r,n){return e(t[1],t[0],n)
},r,n)},e},join:function(t){t=t||",";var e="",r=0;return this.forEach(function(n,i){var u=i-r;r=i,e+=(1===u?t:m(t,u))+n}),this.length&&this.length-1>r&&(e+=m(t,this.length-1-r)),e},concat:function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];var r=[this].concat(t).map(function(t){return se(t)}),n=this.__makeSequence();return n.length=r.reduce(function(t,e){return null!=t&&null!=e.length?t+e.length:void 0},0),n.__iterateUncached=function(t,e,n){if(n&&!this.length)return this.cacheResult().__iterate(t,e,n);for(var i,u=0,s=n&&this.length-1,a=r.length-1,h=0;a>=h&&!i;h++){var o=r[e?a-h:h];o instanceof ce||(o=o.values()),u+=o.__iterate(function(e,r,a){return r+=u,t(e,n?s-r:r,a)===!1?(i=!0,!1):void 0},e)}return u},n},reverse:function(t){var e=this,r=e.__makeSequence();return r.length=e.length,r.__reversedIndices=!!(t^e.__reversedIndices),r.__iterateUncached=function(r,n,i){return e.__iterate(r,!n,i^t)},r.reverse=function(r){return t===r?e:fe.reverse.call(this,r)},r},values:function(){var t=ue.superCall(this,ce.prototype,"values",[]);return t.length=void 0,t},filter:function(t,e,r){var n=v(this,t,e,r,r);return r&&(n.length=this.length),n},indexOf:function(t){return this.findIndex(function(e){return w(e,t)})},lastIndexOf:function(t){return this.reverse(!0).indexOf(t)},findIndex:function(t,e){var r=this.findKey(t,e);return null==r?-1:r},findLastIndex:function(t,e){return this.reverse(!0).findIndex(t,e)},slice:function(t,e,r){var n=this;if(s(t,e,n.length))return n;var i=n.__makeSequence(),u=a(t,n.length),o=h(e,n.length);return i.length=n.length&&(r?n.length:o-u),i.__reversedIndices=n.__reversedIndices,i.__iterateUncached=function(i,s,c){if(s)return this.cacheResult().__iterate(i,s,c);var f=this.__reversedIndices^c;if(u!==u||o!==o||f&&null==n.length){var l=n.count();u=a(t,l),o=h(e,l)}var _=f?n.length-o:u,v=f?n.length-u:o,g=n.__iterate(function(t,e,n){return f?null!=v&&e>=v||e>=_&&i(t,r?e:e-_,n)!==!1:_>e||(null==v||v>e)&&i(t,r?e:e-_,n)!==!1},s,c);return null!=this.length?this.length:r?g:Math.max(0,g-_)},i},splice:function(t,e){for(var r=[],n=2;arguments.length>n;n++)r[n-2]=arguments[n];
return 0===e&&0===r.length?this:this.slice(0,t).concat(r,this.slice(t+e))},takeWhile:function(t,e,r){var n=this,i=n.__makeSequence();return i.__iterateUncached=function(u,s,a){if(s)return this.cacheResult().__iterate(u,s,a);var h=0,o=!0,c=n.__iterate(function(r,n,i){return t.call(e,r,n,i)&&u(r,n,i)!==!1?void(h=n):(o=!1,!1)},s,a);return r?i.length:o?c:h+1},r&&(i.length=this.length),i},skipWhile:function(t,e,r){var n=this,i=n.__makeSequence();return r&&(i.length=this.length),i.__iterateUncached=function(i,u,s){if(u)return this.cacheResult().__iterate(i,u,s);var a=n.__reversedIndices^s,h=!0,o=0,c=n.__iterate(function(n,u,a){return h&&(h=t.call(e,n,u,a),h||(o=u)),h||i(n,s||r?u:u-o,a)!==!1},u,s);return r?c:a?o+1:c-o},i},groupBy:function(t,e,r){var n=this,i=Ze.empty().withMutations(function(e){n.forEach(function(i,u,s){var a=t(i,u,s),h=e.get(a,ye);h===ye&&(h=Array(r?n.length:0),e.set(a,h)),r?h[u]=i:h.push(i)})});return i.map(function(t){return se(t)})},sortBy:function(t,e,r){var n=ue.superCall(this,ce.prototype,"sortBy",[t,e]);return r||(n=n.values()),n.length=this.length,n},__makeSequence:function(){return i(this)}},{},se);var fe=oe.prototype;fe.__toJS=fe.toArray,fe.__toStringMapper=p;var le=function(t){var e=Object.keys(t);this._object=t,this._keys=e,this.length=e.length};ue.createClass(le,{toObject:function(){return this._object},get:function(t,e){return void 0===e||this.has(t)?this._object[t]:e},has:function(t){return this._object.hasOwnProperty(t)},__iterate:function(t,e){for(var r=this._object,n=this._keys,i=n.length-1,u=0;i>=u;u++){var s=e?i-u:u;if(t(r[n[s]],n[s],r)===!1)break}return u}},{},se);var _e=function(t){this._array=t,this.length=t.length};ue.createClass(_e,{toArray:function(){return this._array},__iterate:function(t,e,r){var n=this._array,i=n.length-1,u=-1;if(e){for(var s=i;s>=0;s--){if(n.hasOwnProperty(s)&&t(n[s],r?s:i-s,n)===!1)return u+1;u=s}return n.length}var a=n.every(function(e,s){return t(e,r?i-s:s,n)===!1?!1:(u=s,!0)});return a?n.length:u+1}},{},oe),_e.prototype.get=le.prototype.get,_e.prototype.has=le.prototype.has;
var ve=function(t,e,r){this._rootData=t,this._keyPath=e,this._onChange=r},ge=ve;ue.createClass(ve,{get:function(t,e){var r=this._rootData.getIn(this._keyPath,we.empty());return t?r.get(t,e):r},set:function(t,e){return D(this,function(r){return r.set(t,e)},t)},"delete":function(t){return D(this,function(e){return e.delete(t)},t)},update:function(t,e){var r;return"function"==typeof t?(r=t,t=void 0):r=function(r){return r.update(t,e)},D(this,r,t)},cursor:function(t){return t&&!Array.isArray(t)&&(t=[t]),t&&0!==t.length?new ge(this._rootData,this._keyPath?this._keyPath.concat(t):t,this._onChange):this}},{});var pe=5,me=1<<pe,de=me-1,ye={},we=function(t){var e=Ie.empty();return t?t.constructor===Ie?t:e.merge(t):e},Ie=we;ue.createClass(we,{toString:function(){return this.__toString("Map {","}")},get:function(t,e){return this._root?this._root.get(0,L(t),t,e):e},set:function(t,e){return S(this,t,e)},"delete":function(t){return S(this,t,ye)},update:function(t,e){return this.set(t,e(this.get(t)))},clear:function(){return this.__ownerID?(this.length=0,this._root=null,this):Ie.empty()},merge:function(){return j(this,null,arguments)},mergeWith:function(t){for(var e=[],r=1;arguments.length>r;r++)e[r-1]=arguments[r];return j(this,t,e)},mergeDeep:function(){return j(this,U(null),arguments)},mergeDeepWith:function(t){for(var e=[],r=1;arguments.length>r;r++)e[r-1]=arguments[r];return j(this,U(t),e)},updateIn:function(t,e){return t&&0!==t.length?R(this,t,e,0):e(this)},cursor:function(t,e){return e||"function"!=typeof t||(e=t,t=null),t&&!Array.isArray(t)&&(t=[t]),new ve(this,t,e)},withMutations:function(t){var e=this.asMutable();return t(e),e.__ensureOwner(this.__ownerID)},asMutable:function(){return this.__ownerID?this:this.__ensureOwner(new O)},asImmutable:function(){return this.__ensureOwner()},__iterate:function(t,e){var r=this;if(!r._root)return 0;var n=0;return this._root.iterate(function(e){return t(e[1],e[0],r)===!1?!1:void n++},e),n},__deepEqual:function(t){var e=this;return t.every(function(t,r){return w(e.get(r,ye),t)})},__ensureOwner:function(t){return t===this.__ownerID?this:t?k(this.length,this._root,t):(this.__ownerID=t,this)
}},{empty:function(){return Ae||(Ae=k(0))}},se);var De=we.prototype;we.from=we;var Oe=function(t,e,r){this.ownerID=t,this.bitmap=e,this.nodes=r},be=Oe;ue.createClass(Oe,{get:function(t,e,r,n){var i=1<<(e>>>t&de),u=this.bitmap;return 0===(u&i)?n:this.nodes[P(u&i-1)].get(t+pe,e,r,n)},update:function(t,e,r,n,i,u){var s=r>>>e&de,a=1<<s,h=this.bitmap,o=0!==(h&a);if(!o&&i===ye)return this;var c=P(h&a-1),f=this.nodes,l=o?f[c]:null,_=x(l,t,e+pe,r,n,i,u);if(_===l)return this;if(!o&&_&&f.length>=ze)return q(t,f,h,c,_);if(o&&!_&&2===f.length&&C(f[1^c]))return f[1^c];if(o&&_&&1===f.length&&C(_))return _;var v=t&&t===this.ownerID,g=o?_?h:h^a:h|a,p=o?_?z(f,c,_,v):B(f,c,v):J(f,c,_,v);return v?(this.bitmap=g,this.nodes=p,this):new be(t,g,p)},iterate:function(t,e){for(var r=this.nodes,n=0,i=r.length-1;i>=n;n++)if(r[e?i-n:n].iterate(t,e)===!1)return!1}},{});var Me=function(t,e,r){this.ownerID=t,this.count=e,this.nodes=r},ke=Me;ue.createClass(Me,{get:function(t,e,r,n){var i=e>>>t&de,u=this.nodes[i];return u?u.get(t+pe,e,r,n):n},update:function(t,e,r,n,i,u){var s=r>>>e&de,a=i===ye,h=this.nodes,o=h[s];if(a&&!o)return this;var c=x(o,t,e+pe,r,n,i,u);if(c===o)return this;var f=this.count;if(o){if(!c&&(f--,Je>f))return A(t,h,f,s)}else f++;var l=t&&t===this.ownerID,_=z(h,s,c,l);return l?(this.count=f,this.nodes=_,this):new ke(t,f,_)},iterate:function(t,e){for(var r=this.nodes,n=0,i=r.length-1;i>=n;n++){var u=r[e?i-n:n];if(u&&u.iterate(t,e)===!1)return!1}}},{});var Se=function(t,e,r){this.ownerID=t,this.hash=e,this.entries=r},xe=Se;ue.createClass(Se,{get:function(t,e,r,n){for(var i=this.entries,u=0,s=i.length;s>u;u++)if(w(r,i[u][0]))return i[u][1];return n},update:function(t,e,r,n,i,u){var s=i===ye;if(r!==this.hash)return s?this:(u&&(u.value=!0),E(this,t,e,r,[n,i]));for(var a=this.entries,h=0,o=a.length;o>h&&!w(n,a[h][0]);h++);var c=o>h;if(s&&!c)return this;if((s||!c)&&u&&(u.value=!0),s&&2===o)return new Ce(t,this.hash,a[1^h]);var f=t&&t===this.ownerID,l=f?a:b(a);return c?s?h===o-1?l.pop():l[h]=l.pop():l[h]=[n,i]:l.push([n,i]),f?(this.entries=l,this):new xe(t,this.hash,l)
},iterate:function(t,e){for(var r=this.entries,n=0,i=r.length-1;i>=n;n++)if(t(r[e?i-n:n])===!1)return!1}},{});var Ce=function(t,e,r){this.ownerID=t,this.hash=e,this.entry=r},Ee=Ce;ue.createClass(Ce,{get:function(t,e,r,n){return w(r,this.entry[0])?this.entry[1]:n},update:function(t,e,r,n,i,u){var s=w(n,this.entry[0]);return i===ye?(s&&u&&(u.value=!0),s?null:this):s?i===this.entry[1]?this:t&&t===this.ownerID?(this.entry[1]=i,this):new Ee(t,r,[n,i]):(u&&(u.value=!0),E(this,t,e,r,[n,i]))},iterate:function(t){return t(this.entry)}},{});var Ae,qe={value:!1},je=2147483647,Ue=16,We=255,Re=0,Pe={},ze=me/2,Je=me/4,Be=function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];return Le.from(t)},Le=Be;ue.createClass(Be,{toString:function(){return this.__toString("Vector [","]")},get:function(t,e){if(t=X(t,this._origin),t>=this._size)return e;var r=H(this,t),n=t&de;return r&&(void 0===e||r.array.hasOwnProperty(n))?r.array[n]:e},first:function(){return this.get(0)},last:function(){return this.get(this.length?this.length-1:0)},set:function(t,e){return G(this,t,e)},"delete":function(t){return G(this,t,ye)},clear:function(){return this.__ownerID?(this.length=this._origin=this._size=0,this._level=pe,this._root=this._tail=He,this):Le.empty()},push:function(){var t=arguments,e=this.length;return this.withMutations(function(r){Q(r,0,e+t.length);for(var n=0;t.length>n;n++)r.set(e+n,t[n])})},pop:function(){return Q(this,0,-1)},unshift:function(){var t=arguments;return this.withMutations(function(e){Q(e,-t.length);for(var r=0;t.length>r;r++)e.set(r,t[r])})},shift:function(){return Q(this,1)},merge:function(){return T(this,null,arguments)},mergeWith:function(t){for(var e=[],r=1;arguments.length>r;r++)e[r-1]=arguments[r];return T(this,t,e)},mergeDeep:function(){return T(this,U(null),arguments)},mergeDeepWith:function(t){for(var e=[],r=1;arguments.length>r;r++)e[r-1]=arguments[r];return T(this,U(t),e)},setLength:function(t){return Q(this,0,t)},slice:function(t,e,r){var n=ue.superCall(this,Le.prototype,"slice",[t,e,r]);if(!r&&n!==this){var i=this,u=i.length;
n.toVector=function(){return Q(i,0>t?Math.max(0,u+t):u?Math.min(u,t):t,null==e?u:0>e?Math.max(0,u+e):u?Math.min(u,e):e)}}return n},iterator:function(){return new Fe(this,this._origin,this._size,this._level,this._root,this._tail)},__iterate:function(t,e,r){var n=this,i=0,u=n.length-1;r^=e;var s,a=function(e,s){return t(e,r?u-s:s,n)===!1?!1:(i=s,!0)},h=Y(this._size);return s=e?this._tail.iterate(0,h-this._origin,this._size-this._origin,a,e)&&this._root.iterate(this._level,-this._origin,h-this._origin,a,e):this._root.iterate(this._level,-this._origin,h-this._origin,a,e)&&this._tail.iterate(0,h-this._origin,this._size-this._origin,a,e),(s?u:e?u-i:i)+1},__deepEquals:function(t){var e=this.iterator();return t.every(function(t,r){var n=e.next().value;return n&&r===n[0]&&w(t,n[1])})},__ensureOwner:function(t){return t===this.__ownerID?this:t?F(this._origin,this._size,this._level,this._root,this._tail,t):(this.__ownerID=t,this)}},{empty:function(){return Ge||(Ge=F(0,0,pe,He,He))},from:function(t){if(!t||0===t.length)return Le.empty();if(t.constructor===Le)return t;var e=Array.isArray(t);return t.length>0&&me>t.length?F(0,t.length,pe,He,new Ke(e?b(t):se(t).toArray())):(e||(t=se(t),t instanceof oe||(t=t.values())),Le.empty().merge(t))}},oe);var Ve=Be.prototype;Ve["@@iterator"]=Ve.iterator,Ve.update=De.update,Ve.updateIn=De.updateIn,Ve.cursor=De.cursor,Ve.withMutations=De.withMutations,Ve.asMutable=De.asMutable,Ve.asImmutable=De.asImmutable;var Ke=function(t,e){this.array=t,this.ownerID=e},Ne=Ke;ue.createClass(Ke,{ensureOwner:function(t){return t&&t===this.ownerID?this:new Ne(this.array.slice(),t)},removeBefore:function(t,e,r){if(r===e?1<<e:0||0===this.array.length)return this;var n=r>>>e&de;if(n>=this.array.length)return new Ne([],t);var i,u=0===n;if(e>0){var s=this.array[n];if(i=s&&s.removeBefore(t,e-pe,r),i===s&&u)return this}if(u&&!i)return this;var a=this.ensureOwner();if(!u)for(var h=0;n>h;h++)delete a.array[h];return i&&(a.array[n]=i),a},removeAfter:function(t,e,r){if(r===e?1<<e:0||0===this.array.length)return this;var n=r-1>>>e&de;
if(n>=this.array.length)return this;var i,u=n===this.array.length-1;if(e>0){var s=this.array[n];if(i=s&&s.removeAfter(t,e-pe,r),i===s&&u)return this}if(u&&!i)return this;var a=this.ensureOwner();return u||(a.array.length=n+1),i&&(a.array[n]=i),a},iterate:function(t,e,r,n,i){var u,s=this.array,a=s.length-1;if(0===t)for(u=0;a>=u;u++){var h=i?a-u:u;if(s.hasOwnProperty(h)){var o=h+e;if(o>=0&&r>o&&n(s[h],o)===!1)return!1}}else{var c=1<<t,f=t-pe;for(u=0;a>=u;u++){var l=i?a-u:u,_=e+l*c;if(r>_&&_+c>0){var v=s[l];if(v&&!v.iterate(f,_,r,n,i))return!1}}}return!0}},{});var Fe=function(t,e,r,n,i,u){var s=Y(r);this._stack=N(i.array,n,-e,s-e,N(u.array,0,s-e,r-e))};ue.createClass(Fe,{next:function(){var t=this._stack;t:for(;t;){if(0===t.level)for(t.rawIndex||(t.rawIndex=0);t.array.length>t.rawIndex;){var e=t.rawIndex+t.offset;if(e>=0&&t.max>e&&t.array.hasOwnProperty(t.rawIndex)){var r=t.array[t.rawIndex];return t.rawIndex++,{value:[e,r],done:!1}}t.rawIndex++}else{var n=1<<t.level;for(t.levelIndex||(t.levelIndex=0);t.array.length>t.levelIndex;){var i=t.offset+t.levelIndex*n;if(i+n>0&&t.max>i){var u=t.array[t.levelIndex];if(u){t.levelIndex++,t=this._stack=N(u.array,t.level-pe,i,t.max,t);continue t}}t.levelIndex++}}t=this._stack=this._stack.__prev}return{value:void 0,done:!0}}},{});var Ge,He=new Ke([]),Qe=function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];return Te.from(t)},Te=Qe;ue.createClass(Qe,{toString:function(){return this.__toString("Set {","}")},has:function(t){return this._map?this._map.has(t):!1},get:function(t,e){return this.has(t)?t:e},add:function(t){var e=this._map;return e||(e=we.empty().__ensureOwner(this.__ownerID)),e=e.set(t,null),this.__ownerID?(this.length=e.length,this._map=e,this):e===this._map?this:Z(e)},"delete":function(t){if(null==this._map)return this;var e=this._map.delete(t);return 0===e.length?this.clear():this.__ownerID?(this.length=e.length,this._map=e,this):e===this._map?this:Z(e)},clear:function(){return this.__ownerID?(this.length=0,this._map=null,this):Te.empty()},union:function(){var t=arguments;
if(0===t.length)return this;for(var e=!1,r=this.asMutable(),n=function(t){r.has(t)||(e=!0,r.add(t))},i=0;t.length>i;i++){var u=t[i];u&&se(u).forEach(n)}return e?r.__ensureOwner(this.__ownerID):this},intersect:function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];if(0===t.length)return this;t=t.map(function(t){return se(t)});var r=this;return this.withMutations(function(e){r.forEach(function(r){t.every(function(t){return t.contains(r)})||e.delete(r)})})},subtract:function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];if(0===t.length)return this;t=t.map(function(t){return se(t)});var r=this;return this.withMutations(function(e){r.forEach(function(r){t.some(function(t){return t.contains(r)})&&e.delete(r)})})},isSubset:function(t){return t=se(t),this.every(function(e){return t.contains(e)})},isSuperset:function(t){var e=this;return t=se(t),t.every(function(t){return e.contains(t)})},__iterate:function(t,e){var r=this;return this._map?this._map.__iterate(function(e,n){return t(n,n,r)},e):0},__deepEquals:function(t){return!(this._map||t._map)||this._map.equals(t._map)},__ensureOwner:function(t){if(t===this.__ownerID)return this;var e=this._map&&this._map.__ensureOwner(t);return t?Z(e,t):(this.__ownerID=t,this._map=e,this)}},{empty:function(){return Ye||(Ye=Z())},from:function(t){var e=Te.empty();return t?t.constructor===Te?t:e.union(t):e},fromKeys:function(t){return Te.from(se(t).flip())}},se);var Xe=Qe.prototype;Xe.contains=Xe.has,Xe.mergeDeep=Xe.merge=Xe.union,Xe.mergeDeepWith=Xe.mergeWith=function(){for(var t=[],e=1;arguments.length>e;e++)t[e-1]=arguments[e];return this.merge.apply(this,t)},Xe.withMutations=De.withMutations,Xe.asMutable=De.asMutable,Xe.asImmutable=De.asImmutable,Xe.__toJS=fe.__toJS,Xe.__toStringMapper=fe.__toStringMapper;var Ye,Ze=function(t){var e=$e.empty();return t?t.constructor===$e?t:e.merge(t):e},$e=Ze;ue.createClass(Ze,{toString:function(){return this.__toString("OrderedMap {","}")},get:function(t,e){if(null!=t&&this._map){var r=this._map.get(t);if(null!=r)return this._vector.get(r)[1]
}return e},clear:function(){return this.__ownerID?(this.length=0,this._map=this._vector=null,this):$e.empty()},set:function(t,e){if(null==t)return this;var r=this._map,n=this._vector;if(r){var i=r.get(t);null==i?(r=r.set(t,n.length),n=n.push([t,e])):n.get(i)[1]!==e&&(n=n.set(i,[t,e]))}else n=Be.empty().__ensureOwner(this.__ownerID).set(0,[t,e]),r=we.empty().__ensureOwner(this.__ownerID).set(t,0);return this.__ownerID?(this.length=r.length,this._map=r,this._vector=n,this):n===this._vector?this:$(r,n)},"delete":function(t){if(null==t||null==this._map)return this;var e=this._map.get(t);if(null==e)return this;var r=this._map.delete(t),n=this._vector.delete(e);return 0===r.length?this.clear():this.__ownerID?(this.length=r.length,this._map=r,this._vector=n,this):r===this._map?this:$(r,n)},__iterate:function(t,e){return this._vector?this._vector.fromEntries().__iterate(t,e):0},__deepEqual:function(t){var e=this._vector.iterator();return t.every(function(t,r){var n=e.next().value;return n&&(n=n[1]),n&&w(r,n[0])&&w(t,n[1])})},__ensureOwner:function(t){if(t===this.__ownerID)return this;var e=this._map&&this._map.__ensureOwner(t),r=this._vector&&this._vector.__ensureOwner(t);return t?$(e,r,t):(this.__ownerID=t,this._map=e,this._vector=r,this)}},{empty:function(){return tr||(tr=$())}},we),Ze.from=Ze;var tr,er=function(t,e){var r=function(t){this._map=we(t)};t=se(t);var n=r.prototype=Object.create(nr);n.constructor=r,n._name=e,n._defaultValues=t;var i=Object.keys(t);return r.prototype.length=i.length,Object.defineProperty&&t.forEach(function(t,e){Object.defineProperty(r.prototype,e,{get:function(){return this.get(e)},set:function(t){I(this.__ownerID,"Cannot set on an immutable record."),this.set(e,t)}})}),r},rr=er;ue.createClass(er,{toString:function(){return this.__toString((this._name||"Record")+" {","}")},has:function(t){return this._defaultValues.has(t)},get:function(t,e){return void 0===e||this.has(t)?this._map.get(t,this._defaultValues.get(t)):e},clear:function(){if(this.__ownerID)return this._map.clear(),this;Object.getPrototypeOf(this).constructor;
return rr._empty||(rr._empty=te(this,we.empty()))},set:function(t,e){if(null==t||!this.has(t))return this;var r=this._map.set(t,e);return this.__ownerID||r===this._map?this:te(this,r)},"delete":function(t){if(null==t||!this.has(t))return this;var e=this._map.delete(t);return this.__ownerID||e===this._map?this:te(this,e)},__iterate:function(t,e){var r=this;return this._defaultValues.map(function(t,e){return r.get(e)}).__iterate(t,e)},__ensureOwner:function(t){if(t===this.__ownerID)return this;var e=this._map&&this._map.__ensureOwner(t);return t?te(this,e,t):(this.__ownerID=t,this._map=e,this)}},{},se);var nr=er.prototype;nr.__deepEqual=De.__deepEqual,nr.merge=De.merge,nr.mergeWith=De.mergeWith,nr.mergeDeep=De.mergeDeep,nr.mergeDeepWith=De.mergeDeepWith,nr.update=De.update,nr.updateIn=De.updateIn,nr.cursor=De.cursor,nr.withMutations=De.withMutations,nr.asMutable=De.asMutable,nr.asImmutable=De.asImmutable;var ir=function(t,e,r){return this instanceof ur?(I(0!==r,"Cannot step a Range by 0"),t=t||0,null==e&&(e=1/0),t===e&&ar?ar:(r=null==r?1:Math.abs(r),t>e&&(r=-r),this._start=t,this._end=e,this._step=r,void(this.length=Math.max(0,Math.ceil((e-t)/r-1)+1)))):new ur(t,e,r)},ur=ir;ue.createClass(ir,{toString:function(){return 0===this.length?"Range []":"Range [ "+this._start+"..."+this._end+(this._step>1?" by "+this._step:"")+" ]"},has:function(t){return I(t>=0,"Index out of bounds"),this.length>t},get:function(t,e){return I(t>=0,"Index out of bounds"),1/0===this.length||this.length>t?this._start+t*this._step:e},contains:function(t){var e=(t-this._start)/this._step;return e>=0&&this.length>e&&e===Math.floor(e)},slice:function(t,e,r){return s(t,e,this.length)?this:r?ue.superCall(this,ur.prototype,"slice",[t,e,r]):(t=a(t,this.length),e=h(e,this.length),t>=e?ar:new ur(this.get(t,this._end),this.get(e,this._end),this._step))},indexOf:function(t){var e=t-this._start;if(e%this._step===0){var r=e/this._step;if(r>=0&&this.length>r)return r}return-1},lastIndexOf:function(t){return this.indexOf(t)},take:function(t){return this.slice(0,t)
},skip:function(t,e){return e?ue.superCall(this,ur.prototype,"skip",[t]):this.slice(t)},__iterate:function(t,e,r){for(var n=e^r,i=this.length-1,u=this._step,s=e?this._start+i*u:this._start,a=0;i>=a&&t(s,n?i-a:a,this)!==!1;a++)s+=e?-u:u;return n?this.length:a},__deepEquals:function(t){return this._start===t._start&&this._end===t._end&&this._step===t._step}},{},oe);var sr=ir.prototype;sr.__toJS=sr.toArray,sr.first=Ve.first,sr.last=Ve.last;var ar=ir(0,0),hr=function(t,e){return 0===e&&fr?fr:this instanceof or?(this._value=t,void(this.length=null==e?1/0:Math.max(0,e))):new or(t,e)},or=hr;ue.createClass(hr,{toString:function(){return 0===this.length?"Repeat []":"Repeat [ "+this._value+" "+this.length+" times ]"},get:function(t,e){return I(t>=0,"Index out of bounds"),1/0===this.length||this.length>t?this._value:e},first:function(){return this._value},contains:function(t){return w(this._value,t)},slice:function(t,e,r){if(r)return ue.superCall(this,or.prototype,"slice",[t,e,r]);var n=this.length;return t=0>t?Math.max(0,n+t):Math.min(n,t),e=null==e?n:e>0?Math.min(n,e):Math.max(0,n+e),e>t?new or(this._value,e-t):fr},reverse:function(t){return t?ue.superCall(this,or.prototype,"reverse",[t]):this},indexOf:function(t){return w(this._value,t)?0:-1},lastIndexOf:function(t){return w(this._value,t)?this.length:-1},__iterate:function(t,e,r){var n=e^r;I(!n||1/0>this.length,"Cannot access end of infinite range.");for(var i=this.length-1,u=0;i>=u&&t(this._value,n?i-u:u,this)!==!1;u++);return n?this.length:u},__deepEquals:function(t){return w(this._value,t._value)}},{},oe);var cr=hr.prototype;cr.last=cr.first,cr.has=sr.has,cr.take=sr.take,cr.skip=sr.skip,cr.__toJS=sr.__toJS;var fr=new hr(void 0,0),lr={Sequence:se,Map:we,Vector:Be,Set:Qe,OrderedMap:Ze,Record:er,Range:ir,Repeat:hr,is:w,fromJS:ee};return lr}"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(t):Immutable=t();