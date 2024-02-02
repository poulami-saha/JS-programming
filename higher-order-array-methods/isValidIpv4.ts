const isValidIp = (ip: string) => {
    const octets = ip.split(".")
    if (octets.length != 4) {
        return false
    }
    return octets.every((octet: string) => +octet >= 0 && +octet <= 255)
}

console.log(isValidIp("1.2.3.4"))
console.log(isValidIp("122.290.3.4"))
console.log(isValidIp("0.222.255.255"))
console.log(isValidIp("1.2.3.4.5"))