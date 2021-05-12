function helloString(message: string):string {
    return message;
}
function helloNumber(message: number):number {
    return message;
}

// 반복....

function hello(message: any): any {
    return message;
}

console.log(hello("Mark").length)
console.log(hello(39).length)

function helloGeneric<T>(message: T): T {
    return message;
}

console.log(helloGeneric('Mark').length) // function helloGeneric<"Mark">(message: "Mark"): "Mark"
console.log(helloGeneric(39)) // .length error
console.log(helloGeneric(true)) // function helloGeneric<true>(message: true): true

// Generic 의 기본 문법
function helloBasic<T>(message: T): T {
    return message;
}

helloBasic<string>('Mark'); // function helloBasic<string>(message: string): string
helloBasic(39); // function helloBasic<39>(message: 39): 39

function helloBasic2<T, U>(message: T, comment: U): T {
    return message;
}

helloBasic2<string,number>('mark', 39);
/*
    function helloBasic2<string, number>(
        message: string,
        comment: number): string
 */
helloBasic2(39,37);
/*
    function helloBasic2<39, number>(
        message: 39,
        comment: number): 39
 */