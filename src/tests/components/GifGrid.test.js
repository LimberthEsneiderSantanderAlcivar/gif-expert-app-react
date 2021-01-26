import {shallow} from 'enzyme'
import GifGrid from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('preubas del componente GifGrid', () => {
    const category = 'Shingeky No Kyojin';


    test('debe hacer match con el snapshot', () => {
        useFetchGifs.mockReturnValue({
            data:[],
            loading:false
        })
        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot();
    });
    
    
    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        const gifs =[{
            id:'abc',
            url: 'https://asdas.com',
            title:'cualquier cosa'
        }]
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        })
        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);                
    })
    
})
