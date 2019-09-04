const fs = require('fs')
const json2xls = require('json2xls')
const Data = require('../models/Data')

const dataCtrl = {}
const count = []

dataCtrl.index = async (req, res) => {
    const datas = await Data.find()
    let i = datas.length
    count.push(i)
    const xls = json2xls(datas)
    await fs.writeFileSync('src/public/data/data.xlsx', xls, 'binary');
    res.render('user/data.ejs', {
        datas,
        count
    })
}

dataCtrl.newData = (req, res) => {
    res.render('user/new.ejs')
}

dataCtrl.postData = async (req, res) => {
    const { name, email, age, gender } = req.body
    const data = await new Data({ name, email, age, gender })
    await data.save()
    res.redirect('/data')
}

dataCtrl.upgradeDate = async (req, res) => {
    const data = await Data.findById(req.params.id)
    res.render('user/update.ejs', {
        data
    })
}

dataCtrl.updateData = async (req, res) => {
    const { name, email, age, gender } = req.body
    const updateData = { name, email, age, gender }
    await Data.findByIdAndUpdate(req.params.id, updateData)
    console.log('updated')
    res.redirect('/data')
}

dataCtrl.deleteData = async (req, res) => {
    await Data.findByIdAndDelete(req.params.id)
    res.redirect('/data')
}

module.exports = dataCtrl