const _ = require('lodash')
const app = require('express')()
const async = require('async')
const chalk = require('chalk')
const { Sequelize } = require('sequelize')

const end = (message: string) => console.log(chalk.bold.green(message))
const info = (message: string) => console.log(chalk.bold.blue(message))
const start = (message: string) => console.log(chalk.bold.yellow(message))
const error = (message: string) => {
    console.log(chalk.bold.red(message))

    process.exit()
}

export {
    _,
    app,
    async,
    chalk,
    Sequelize,
    end,
    info,
    start,
    error
}
