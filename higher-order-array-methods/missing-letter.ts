const getMissingLetter=(arr:string[])=>{
    let start=arr[0].charCodeAt(0);

    const missingCharCode=arr.map((char:string)=>char.charCodeAt(0)).find((curr:number)=>{
        if(curr-start>1){
            return true
        }
        start=curr;
        return false
    });

return missingCharCode? String.fromCharCode(missingCharCode-1):"";
}

console.log(getMissingLetter(["a","b","c","e"]))
console.log(getMissingLetter(["X","Z"]))