/**
 * Used to make colors-only.js data/results from colors.js
 */

import fs from 'fs';

import {flatten} from 'lodash';

import colors from './colors';

let newColors = colors.get().reduce((colorArr, color) => {
  let tints = color.tints.filter((tint) => {
    return tint.name.indexOf('50') === -1;
  }).map((tint) => {
    return {
      name: tint.name,
      value: tint.value,
      category: color.name
    }
  });

  colorArr.push([{
    name: color.name,
    value: color.value,
    category: color.name
  }]);

  colorArr.push(tints);
  return colorArr;
}, []);

newColors = JSON.stringify(flatten(newColors), null, 2);

let template = (data) => {
  return `export default {
    get() {
      return ${data}
    }
  }`;
};


fs.writeFile('colors-only.js', template(newColors), 'utf8', (err) => {
  if (err) throw err;
  console.log('file "colors-only.js" saved');
})
// console.log(JSON.stringify(flatten(newColors), null, 2));
