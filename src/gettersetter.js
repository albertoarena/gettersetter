/**
 * Getter/Setter
 *
 * @author Alberto Arena <arena.alberto@gmail.com>
 * @licence MIT https://github.com/albertoarena/gettersetter/blob/master/LICENSE-MIT
 *
 */
define([], function () {
    return function (initValue, callback) {
        var val = initValue;
        if (typeof callback != 'function') {
            callback = null;
        }
        return function (v) {
            if (v !== undefined) {
                val = v;
                if (callback) {
                    callback(v);
                }
            }
            return val;
        };
    };
});
