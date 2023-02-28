const fs = require ('fs')
const chalk = require ('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote) {
        notes.push( {
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New note was added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }

}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.find((notes) => notes.title !== title)
    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed'));
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found'));
    }
  
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e) {
        return []
    }

}
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Here is your note list'));
    notes.forEach(note => {
        console.log(note.title);        
    });
}

const readNotes = (title) => {
    const notes = loadNotes()
    const notesToRead = notes.find((notes) => notes.title === title)
    if(notesToRead) {
        console.log(chalk.white.inverse('There is your note '));
        console.log('Title: ' +  notesToRead.title );
        console.log('Body: ' + notesToRead.body );
    } else {
        console.log(chalk.red.inverse('No note found'));
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}