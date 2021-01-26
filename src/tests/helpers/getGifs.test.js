import { getGifs } from "../../helpers/getGifs"

describe('preubas con getGifs Fetch', () => {
    test('debe de traer 10 elemetnso', async() => {
      const gifs = await getGifs('One Punch');
      expect(gifs.length).toBe(10);
    })
    test('debe de traer 10 elemetnso', async() => {
      const gifs = await getGifs('');
      expect(gifs.length).toBe(0);
    })
    
})
