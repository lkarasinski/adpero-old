const getLocalStorageData = () => ({
    ...JSON.parse(localStorage.getItem("journeysData") ?? "{}"),
    ...JSON.parse(localStorage.getItem("offlineJourneysData") ?? "{}"),
});

export default getLocalStorageData;
