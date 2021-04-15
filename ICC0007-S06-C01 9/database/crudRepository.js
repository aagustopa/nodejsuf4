module.exports.save = async(obj) => {
    const response = { status: false };
    try {
        const doc = await obj.save();
        response.status = true;
        response.result = doc;
    } catch (error) {
        response.error = error;
        console.log(`ERROR-crudRepository-save ${error}`)
    }
}