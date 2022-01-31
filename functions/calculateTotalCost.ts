import { Expense, Journey } from "utils/interfaces";
import axios from "axios";
import { currencies } from "utils/constants";

type ResultType = {
    [key: string]: number;
};
const getExpenseCost = (expense: Expense): ResultType => {
    const details = expense.details;
    const result: ResultType = {};
    for (const detail of details) {
        if (detail.type === "Price") {
            if (typeof detail.value === "string") {
                result[detail.currency] = result[detail.currency]
                    ? result[detail.currency] + Number(detail.value)
                    : Number(detail.value);
            }
        }
    }
    return result;
};

const calculateTotalCost = async (journey: Journey): Promise<number> => {
    const baseCurrency = journey.cost.currency;
    let totalCost = 0;
    if (currencies.includes(baseCurrency)) {
        let currencyRates;
        try {
            const request = await axios.get(
                "https://api.exchangerate.host/latest?base=" + baseCurrency
            );
            currencyRates = request.data.rates;
        } catch (error) {
            console.error(error);
        }

        for (const expense of journey.expenses) {
            const expenseCost = getExpenseCost(expense);
            for (const currency in expenseCost) {
                if (currency === baseCurrency) {
                    totalCost = expenseCost[baseCurrency] + totalCost;
                } else {
                    if (currencies.includes(currency)) {
                        totalCost =
                            Math.round(
                                (expenseCost[currency] /
                                    currencyRates[currency] +
                                    totalCost) *
                                    100
                            ) / 100;
                    }
                }
            }
        }
    } else {
        for (const expense of journey.expenses) {
            const expenseCost = getExpenseCost(expense);
            for (const currency in expenseCost) {
                totalCost = expenseCost[currency] + totalCost;
            }
        }
    }

    return totalCost;
};

export default calculateTotalCost;
