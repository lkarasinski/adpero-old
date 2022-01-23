import convertToDate from './convertToDate';

const formatDate = (date: Date): string => {
    const convertedDate = convertToDate(date);
    return convertedDate.toLocaleDateString().replaceAll('/', '.');
};

export default formatDate;
