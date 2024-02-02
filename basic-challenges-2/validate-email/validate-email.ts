const validateEmail = (email) => {
    if (email.indexOf("@") === -1) {
        return false;
    }
    const [localpart, domain] = email.split("@");
    if (localpart.length === 0 || domain.length < 3) {
        return false;
    }
    const domainExtension = domain.split(".")
    
    if (domainExtension.length < 2) {
        return false;
    }
    return true;
}
module.exports = validateEmail