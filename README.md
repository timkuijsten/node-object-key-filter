# object-key-filter

Filter certain keys from an object without side-effects, optionally recurse.

## Example

Remove the key `baz` from an object:

    var assert = require('assert');
    var filter = require('object-key-filter');

    var obj = {
      foo: 'bar',
      baz: { foo: 'quz' }
    };

    var obj2 = filter(obj, ['baz']);
    assert.deepEqual(obj2, { foo: 'bar' });

Remove the key `foo` recursively:

    var obj3 = filter(obj, ['foo'], true);
    assert.deepEqual(obj3, { baz: {} });

## Installation

    $ npm install object-key-filter

## API

### filter(obj, keys, [recurse])
* obj {Object} object to filter keys from
* keys {Array} array of key names to filter
* recurse {Boolean, default: false} whether or not to recurse
* @return {Object} object same as input but without the specified keys

Filter certain keys from an object without side-effects, optionally recurse.

## Tests

    $ npm test

## License

ISC

Copyright (c) 2014 Tim Kuijsten

Permission to use, copy, modify, and distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
