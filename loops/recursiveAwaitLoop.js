const chunkSize = 2;

export const getData = async (chunkSize, lastId) => {
    return db.execute(`SELECT * FROM some_table WHERE id > ${lastId} ORDER BY id LIMIT ${chunkSize}`);
    // return query.where('param', param).where('id', '>' lastId).orderBy('id').limit(chunkSize);
};

try {
    const exportChunk = async (lastId = 0) => {
        const data = await getData(chunkSize, lastId);

        if (data.length) {
            // SOME LOGIC HERE...

            if (data.length >= chunkSize) {
                await exportChunk(data[data.length - 1].id);
            }
        }
    };

    await exportChunk(0);

    return { processed: true };
} catch (err) {
    return Promise.reject(err);
}
