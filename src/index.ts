function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || typeof toUpper === "undefined") {
    return input.toUpperCase();
  }
  return input.toLowerCase();
}

// console.log(formatString("Hello"));
// console.log(formatString("Hello", true));
// console.log(formatString("Hello", false));

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filteredItems = items.filter((item) => item.rating >= 4);
  return filteredItems;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

// console.log(filterByRating(books));

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const flatArray: T[] = arrays.reduce((resultedArr: T[], arr: T[]) => {
    resultedArr.push(...arr);
    return resultedArr;
  }, []);
  return flatArray;
}

// console.log(concatenateArrays(["a", "b"], ["c"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());
// console.log(myCar.getModel());

function processValue(value: string | number): number {
  if (typeof value === "string") return value.length;
  if (typeof value === "number") return value * 2;
  return 0;
}

// console.log(processValue("hello"));
// console.log(processValue(10));

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (!products.length) return null;
  const mostExpensiveProduct = products.reduce((result, product) => {
    if (result.price < product.price) {
      return product;
    } else {
      return result;
    }
  });

  return mostExpensiveProduct;
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

// console.log(getMostExpensiveProduct(products));
// Output: { name: "Bag", price: 50 }

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Sunday) return "Weekend";
  return "Weekday";
}

// console.log(getDayType(Day.Monday));
// console.log(getDayType(Day.Sunday));

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject("Negative number not allowed");
    }
    setTimeout(() => {
      resolve(n * n);
    }, 1000);
  });
}

// squareAsync(4).then(console.log); // Output after 1s: 16
// squareAsync(-3).catch(console.error); // Output: Error: Negative number not allowed
