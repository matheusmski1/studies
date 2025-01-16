interface Strategy {
    execute(a, b): any
}

class AddStrategy implements Strategy {
    execute(a: any, b: any) {
        return a+b
    }
}

class SubtractStrategy implements Strategy {
    execute(a: any, b: any) {
        return a-b
    }
}

class MultiplyStrategy implements Strategy {
    execute(a: any, b: any) {
        return a*b
    }
}

const strategies: { [key: string]: Strategy } = {
    "+": new AddStrategy(), //examples
    "-": new SubtractStrategy(),
    "*": new MultiplyStrategy(), // add metodos e fodase
};

const operation = "+"; // Input do cliente
const strategy = strategies[operation]; // define a operação com a interface do cliente

if (!strategy) {
    throw new Error("Operação inválida.");
}

const result = strategy.execute(5, 3); // chamo só a interface com os dados 
console.log(result);