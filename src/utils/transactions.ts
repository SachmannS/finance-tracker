import { faker } from "@faker-js/faker";

export type Transaction = {
  date: string;
  description: string;
  type: "Credit" | "Debit";
  category: string;
  amount: number;
};

const categories = ["Food", "Transport", "Utilities", "Entertainment", "Income", "Salary"];

export function generateTransactions(count: number = 20): Transaction[] {
  return Array.from({ length: count }, () => {
    const type = faker.helpers.arrayElement<Transaction["type"]>(["Credit", "Debit"]);
    const category = faker.helpers.arrayElement(categories);
    return {
      date: faker.date.recent().toISOString().split("T")[0],
      description: faker.commerce.productName(),
      type,
      category,
      amount: faker.number.int({ min: 100, max: 5000 }),
    };
  });
}

export const categoryOptions = categories;
