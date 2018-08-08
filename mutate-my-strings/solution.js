function mutateMyStrings(str1, str2) {
  let solution = '';

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) {
      continue;
    } else {
    solution += str2.slice(0, i).concat(str1.slice(i)) + '\n';
    }
  }

  return solution + str2 + '\n';
}