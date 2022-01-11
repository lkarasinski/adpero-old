type editLocalStorage = (ID: string, newValues: any, key: string) => void;

const editLocalStorage: editLocalStorage = (ID, newValues, key) => {
    const localStorageData = JSON.parse(localStorage.getItem(key) ?? "{}");
    localStorageData[ID] = { ...newValues };
    localStorage.setItem(key, `${JSON.stringify(localStorageData)}`);
};

export default editLocalStorage;
