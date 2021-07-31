const data = ["a", "b"];

export default data;

export function addData(x: string) {
    data.push(x);
    console.log(data);
}
