const validation = {

  isValidLength(string, length) {
    if(string.length <= length) return true;
    return false;
  }

}

module.exports = validation;
