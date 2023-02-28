
const chalk = require ('chalk')
const yargs = require ('yargs')
const notes = require('./notes.js')

// Customize Yargs version
yargs.version('1.1.0')

// create add command
yargs.command({
    command: 'add',
    desc: 'Add a new note',
    builder: {
        title: {
            desc: 'Note title',
            demandOption:true,
            type: 'string'
        },
        body: {
            desc: 'Note body',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    desc: 'Remove a  note',
    builder: {
        title: {
            desc: 'Note title',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    desc: 'List the notes',
    handler(){
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    desc: 'Read a note',
    builder: {
        title: {
            desc: 'Note title',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})
yargs.parse()

// add, remove, read, list
// console.log(yargs.argv);