import { faker } from "@faker-js/faker";
import type { StatCardData } from "../types/StatCardData";

export const generateMockStats = (count = 3): StatCardData[] => {
    const data: StatCardData[] = [];
    const list_of_labels: string[] = ['Total Account Balance', 'Monthly Income', 'Monthly Expenses', 'Savings Ratio']
    for (let i = 0; i < count; i++) {
        const value = parseFloat(faker.finance.amount({ min: 5000, max: 200000, dec: 2 }));
        const change = parseFloat(faker.finance.amount({ min: -10, max: 10, dec: 1 }));
        const isPositive = change >= 0;

        data.push({
            label: list_of_labels[i],
            value: value,
            currency: 'INR',
            change: change,
            isPositive: isPositive,
            helpText: ""
        })
    }
    return data;
}