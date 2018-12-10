function takeANumber(line, name){
  line.push(name)
  return (`Welcome, ${name}. You are number ${line.length} in line.`)
}

function nowServing(line){
  if(line.length > 0){
    return `Currently serving ${line.shift()}.`
  }
  else return 'There is nobody waiting to be served!'
}

function currentLine(line){
  if(line.length > 0){
    var newLine = ('The line is currently: ')
    for (let i = 0; i < line.length; i ++){
      newLine += (`${i + 1}. ${line[i]}`)
      if (i < line.length - 1){
        newLine += (', ')
      }
    }
    return newLine
  }
  else return 'The line is currently empty.'
}
