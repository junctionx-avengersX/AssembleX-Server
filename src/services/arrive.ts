import * as faker from 'faker'

function postReview(guide_id, rating) {
  return {
    status: 'ARRIVE',
    balance: faker.datatype.number(100000),
  }
}

export { postReview }
