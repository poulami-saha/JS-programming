const formatPhoneNumber = (num) => {
    if (num.length < 10) return "Invalid phone number";
    
    const areacode = num.slice(0, 3).join("");
    const prefix=num.slice(3,6).join("");
    const lineNumber=num.slice(6).join("");

    return `(${areacode}) ${prefix}-${lineNumber}`
}
module.exports = formatPhoneNumber;