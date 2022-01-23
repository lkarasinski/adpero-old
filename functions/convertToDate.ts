type Timestamp = {
    seconds: number;
    nanoseconds: number;
};

type Input = string | Timestamp | Date | undefined | null;

const convertToDate = (input: Input): Date => {
    input = JSON.parse(JSON.stringify(input));

    if (input === undefined || input === null) {
        console.error('Input is undefined');
        return new Date();
    }
    if (typeof input === 'string') return new Date();

    return (input as Timestamp).seconds !== undefined
        ? new Date((input as Timestamp).seconds * 1000)
        : (input as Date);
};

export default convertToDate;
