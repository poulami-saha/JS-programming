const reverseStatement=(string:String)=>{
    const newArr= string.trim().split(" ").filter(elem=>elem!=="")
    return newArr.reverse().join(" ");
}
console.log(reverseStatement("A black fox"))