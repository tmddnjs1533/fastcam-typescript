type HelloFunctionGeneric1 = <T>(message: T) => T;

const helloFuction1:HelloFunctionGeneric1 = <T>(message: T): T => {
    return message
};

interface HelloFunctionGeneric2 {
    <T>(message: T): T
}

const helloFucntion2: HelloFunctionGeneric2 = <T>(message: T): T => {
    return message
};