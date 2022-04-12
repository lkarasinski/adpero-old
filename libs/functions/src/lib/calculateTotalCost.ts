import { Category, Journey } from "@adpero/interfaces";
import axios from "axios";
import { currencies } from "@adpero/constants";

type ResultType = {
    [key: string]: number;
};
const getCategoryCost = (category: Category): ResultType => {
    const details = category.details;
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

export const calculateTotalCost = async (journey: Journey): Promise<number> => {
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

        for (const category of journey.categories) {
            const categoryCost = getCategoryCost(category);
            for (const currency in categoryCost) {
                if (currency === baseCurrency) {
                    totalCost = categoryCost[baseCurrency] + totalCost;
                } else {
                    if (currencies.includes(currency)) {
                        totalCost =
                            Math.round(
                                (categoryCost[currency] /
                                    currencyRates[currency] +
                                    totalCost) *
                                    100
                            ) / 100;
                    }
                }
            }
        }
    } else {
        for (const category of journey.categories) {
            const categoryCost = getCategoryCost(category);
            for (const currency in categoryCost) {
                totalCost = categoryCost[currency] + totalCost;
            }
        }
    }

    return totalCost;
};

export default calculateTotalCost;
