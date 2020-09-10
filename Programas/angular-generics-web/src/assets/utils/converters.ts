export function objectToMap(object: any): Map<any, any> {
    const mp = new Map();
    Object.keys(object).forEach(k => { mp.set(k, object[k]); } );
    return mp;
}
