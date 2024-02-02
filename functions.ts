//Demonstrating Functions
function func(userWord: string):number{
    return userWord.length;
}

function func2(str1: string): number{
    return str1.replace(" ", "").length;
}

function func3(str2: string, spaces?: boolean): number{
    
    if(spaces = true)
    {
        return str2.replace(" ", "").length;
    }
    return str2.length;
}

console.log(func("Test"));
console.log(func2("Testing "));
console.log(func3("Final", false));