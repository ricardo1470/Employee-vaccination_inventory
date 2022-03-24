const getInit = (req, res, next) => {
    res.render(
        '../views/index.html',
        {
            title: 'Vaccination inventory',
            message: 'this will be the Index for the API of Vaccination inventory'
        }
    );
    console.log('getInit');
    next();
};

module.exports = {
    getInit
}
