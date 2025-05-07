## Qus 1. What are some differences between interfaces and types in TypeScript?

**Ans:** Both type alias and interfaces are defining types in TypeScript. We create types using these to add those types into various variables/functions/objects to reduce duplication.

Though both types and interfaces are used to create types, there are some major differences between these two:

1. We can use type alias to create types for both **primitive and object-type variables**, but we can use interfaces only to create types **object-type variables**.
**Example:** We can use with type alias:
```ts
type StringType = string;
```
But we can't do this with Interface.

2. Creating actual object types is easy & identical for both type alias and interface:
```ts
// Using type alias
type User1 = {
    name: string;
    age: number;
};

// Using interface
interface User12 {
    name: string;
    age: number;
};
```

But Creating arrays and functions are easier & more developer-friendly with type alias:
```ts
// Array types using type alias
type Friends1 = string[];

// Array types using interface
interface Friends2 {
    [index: number]: string;
};

// Function types using type alias
type Sum1 = (num1: number, num2: number) => number;

// Function types using interface
interface Sum2 {
    (num1: number, num2: number): number
};
```

3. We can use extends keyword while creating an interface to extend an existing type alias/interface, but we can't use extend keyword while creating a new type alias.

## Qus 2. What is the use of the keyof keyword in TypeScript? Provide an example.

**Ans:** The **keyof** keyword is used to get the keys from a Type or Interface and those keywords are used as union types of any other Type.

**Example:**
```ts
type Student = {
    id: number;
    name: string;
    age: number;
}

type StudentKeys = keysof Student; // "id" | "name" | "age"

const getStudentProperty = (student: Student; key: StudentKey) => {
    return student[key];
}
```