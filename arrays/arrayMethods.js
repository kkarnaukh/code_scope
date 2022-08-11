const getData = async () => {
    return fetch('https://jsonplaceholder.typicode.com/photos').then(response => response.json());
}

const arrayMethodsCompare = async () => {
    const data = await getData();

    // forEach performance
    const forEachStart = performance.now();
    data.forEach(x => {
        console.log(x);
    });
    const forEachEnd = performance.now();

    // map performance
    const mapStart = performance.now();
    const mapResult = data.map(x => {
        return x;
    });
    const mapEnd = performance.now();

    // reduce performance
    const reduceStart = performance.now();
    const reduceResult = data.reduce((acc, curr) => {
        acc.push(curr)
        return acc;
    }, []);
    const reduceEnd = performance.now();

    const forEachTime = forEachEnd - forEachStart;
    const mapTime = mapEnd - mapStart;
    const reduceTime = reduceEnd - reduceStart;

    console.log(`forEach method time: ${forEachTime}`);
    console.log(`map method time ${mapTime}`);
    console.log(`reduce method time ${reduceTime}`);
}

arrayMethodsCompare();