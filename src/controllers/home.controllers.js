const homeCtrl = {}

homeCtrl.index = (req, res) => {
    res.render('home.ejs')
}

homeCtrl.about = (req, res) => {
    res.render('about.ejs')
}

module.exports = homeCtrl