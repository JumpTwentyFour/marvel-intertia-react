import { marvelImageUrl } from '../../helpers/marvelImageUrl'

describe('Image Url Generator', () => {
  test('Should return a combined string', async () => {
    const imageUrl = 'https://www.tester.com/image'
    const extension = 'jpg'

    const testImage = marvelImageUrl(imageUrl, extension)
    expect(testImage).toBe(`${imageUrl}.${extension}`)
  })
})
