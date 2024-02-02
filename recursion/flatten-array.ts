const flattenArray=(arr:any[]):any[] => {
    let result: any[] = []
    for (const item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item));
        } else
            result.push(item);
    }
    return result;
}

console.log(flattenArray([1,2,3,[4,5],[6,[7,8]]]))