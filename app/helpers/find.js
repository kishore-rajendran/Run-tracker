import { helper } from '@ember/component/helper';

export default helper(function find(data) {
  let id = data[1];
  let val;
  if (typeof (data[0]) == "string") val = JSON.parse(data[0]);
  else val = data[0];
  let bool = val.find((val) => {
    return val == id;
  })
  if (bool) return true;
  return false;
});
