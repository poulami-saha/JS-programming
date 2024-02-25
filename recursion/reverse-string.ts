const reverse = (str: string): string => {
    // if (str === "") {
    //     return ""
    // }
    // return reverse(str.substring(1))+str.charAt(0)

    return str !== "" ? reverse(str.substring(1)) + str.charAt(0) : ""
}


console.log(reverse("hello"))