type Timestamp = {
    seconds: number;
    nanoseconds: number;
};

type Input = string | Timestamp | Date;

const convertToDate = (input: Input): Date => {
    if (typeof input === "string") return new Date();

    return (input as Timestamp).seconds !== undefined
        ? new Date((input as Timestamp).seconds * 1000)
        : (input as Date);
};

export default convertToDate;
