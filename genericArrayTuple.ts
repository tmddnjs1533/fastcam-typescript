function helloArray<T>(message: T[]): T {
    return message[0]
}

helloArray(['Hello','World']);
/*
function helloArray<string>(
    message: string[]): string
 */

helloArray(['Hello', 5])
/*
function helloArray<string | number>(
     message: (string | number)[]): string | number
 */

function helloTuple<T, K>(message: [T, K]): T {
    return message[0]
}

helloTuple(['Hello','World'])
/*
function helloTuple<string, string>(
     message: [string, string]): string
 */
helloTuple(['Hello', 5])
/*
function helloTuple<string, number>(
     message: [string, number]): string
 */