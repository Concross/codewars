function abbrevName(name){

  // capitalize and join first char of each name with a dot
  return name.split(' ').map(x => x[0].toUpperCase()).join('.');

}