const homeCtrl = {}

homeCtrl.index = (req, res) => {
    res.render('home.ejs')
}

module.exports = homeCtrl