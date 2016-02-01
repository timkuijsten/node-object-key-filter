/**
 * Copyright (c) 2014, 2015, 2016 Tim Kuijsten
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

'use strict';

/**
 * Filter certain keys from an object without side-effects, optionally recurse.
 *
 * @param {Object|Array} obj  object to filter keys from
 * @param {Array} keys  array of key names to filter
 * @param {Boolean, default: false} recurse  whether or not to recurse
 * @return {Object} object same as input but without the specified keys
 */
function filter(obj, keys, recurse) {
  if (typeof obj !== 'object') { throw new TypeError('obj must be an object'); }
  if (!Array.isArray(keys)) { throw new TypeError('keys must be an array'); }

  if (recurse == null) {
    recurse = false;
  }
  if (typeof recurse !== 'boolean') { throw new TypeError('recurse must be a boolean'); }

  var result;
  if (Array.isArray(obj)) {
    result = [];
  } else {
    result = {};
  }

  Object.keys(obj).forEach(function(key) {
    if (~keys.indexOf(key)) { return; }

    // recurse if requested and possible
    if (recurse && obj[key] != null && typeof obj[key] === 'object' && Object.keys(obj[key]).length) {
      result[key] = filter(obj[key], keys, recurse);
    } else {
      result[key] = obj[key];
    }
  });

  return result;
}

module.exports = filter;
