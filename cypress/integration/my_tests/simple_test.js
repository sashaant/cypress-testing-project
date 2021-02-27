describe('My First Test', () => {
  it('True should be true!', () => {
    expect(true).to.equal(true)
  })

  it('5 should be 5!', () => {
    expect(5).to.equal(5)
  })
})

describe('My First Test', () => {
  it('True should be true!', () => {
    expect(true).to.equal(false)
  })
})