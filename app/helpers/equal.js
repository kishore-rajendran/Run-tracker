import { helper } from '@ember/component/helper';

export default helper(function equal(params) {
  if (params[0] == params[1]) return true;
  return false;
});
