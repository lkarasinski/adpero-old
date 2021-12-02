const formatDate = (date: Date): string =>
    new Date(date).toLocaleDateString().replaceAll("/", ".");

export default formatDate;
