import { toType } from "./toType.js";
import { isWindow } from "../var/isWindow.js";

// Added documentation and spacing for clarity
/**
 * Checks if an object is array-like.
 * 
 * @param {any} obj The object to test.
 * @returns {boolean} True if array-like, false otherwise.
 */
export function isArrayLike( obj ) {

    var length = !!obj && obj.length,
        type = toType( obj );

// Checks if 'obj' is a function or the global window object
    if ( typeof obj === "function" || isWindow( obj ) ) {
        return false;
    }

// Ensures the object is an array, empty, or has a valid numeric length
    return type === "array" || length === 0 ||
        typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
