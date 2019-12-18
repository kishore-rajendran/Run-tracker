import { helper } from '@ember/component/helper';

export default helper(function follow(params) {
  let follow = false;
  params[1].forEach((friend) => {
    if (friend.id === params[0]) {
      follow = true;
    }
  })

  return follow;
});
