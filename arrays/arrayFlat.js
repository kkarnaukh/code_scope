const data = {
    id: 1,
    items: [
        {
            type: 'car',
            tags: [
                {
                    type: 1,
                    title: 'audi'
                },
                {
                    type: 1,
                    title: 'vw'
                }
            ]
        },
        {
            type: 'vehicle',
            tags: [
                {
                    type: 1,
                    title: 'renault'
                },
                {
                    type: 1,
                    title: 'peugeot'
                }
            ]
        },
        {
            type: 'eliteCar',
            tags: [
                {
                    type: 1,
                    title: 'audi'
                },
                {
                    type: 1,
                    title: 'mercedes'
                }
            ]
        },
        {
            type: 'sportCar',
            tags: [
                {
                    type: 1,
                    title: 'bmw'
                },
                {
                    type: 1,
                    title: 'audi'
                }
            ]
        }
    ]
};


const getTitles = () => {
    const titles = [...new Set(data.items.map(i => i.tags.map(tag => tag.title)).flat())];

    console.log('UNIQUE TITLES LIST: ', titles);
}

getTitles();