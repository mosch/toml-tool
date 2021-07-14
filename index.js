#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const fs = require('fs')
const toml = require('@iarna/toml')
const merge = require('deepmerge')
const get = require('lodash.get')

yargs(hideBin(process.argv)).command(
  'get <file> <path>',
  '',
  (yargs) => {
    return yargs.positional('file', {
      describe: 'path to toml file',
      require: true,
    }).positional('path', {
      describe: 'path to value',
      require: true,
    })
  },
  ({ file, path }) => {
    try {
      console.log(get(toml.parse(fs.readFileSync(file, 'utf8')), path)) 
    } catch (e) {
      console.log('Could not parse provided file')
      console.log(e)
    }
  },
)
  .command(
    'set <file>',
    '--category.value="hello"',
    (yargs) => {
      return yargs.positional('file', {
        describe: 'path to toml file',
        require: true,
      })
    },
    ({file, write, _, $0, ...argv}) => {
      const updates = Object.entries(argv)

      try {
        const data = toml.parse(fs.readFileSync(file, 'utf8'))
        const newObject = merge(data, Object.fromEntries(updates))

        if (write) {
          fs.writeFileSync(file, toml.stringify(newObject), 'utf8')
        } else {
          console.log(toml.stringify(newObject))
        }
      } catch (e) {
        console.log('Could not parse provided file')
        console.log(e)
      }
    },
  )
  .option('write', {
    alias: 'w',
    type: 'boolean',
    description: 'Write changes back to file',
  }).argv
