import {shallow} from 'enzyme'
import GifGridItem from '../../components/GifGridItem';

describe('tests para el componente de', () => {
    const title = 'shingeki No Kyojin';
    const url = 'https://localhost/algomas/algo.coms';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);


    test('debe renderizar el componente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    

    test('debe de tener un parrafo con el titulo', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })


    test('debe de tener una imagen igual al url igual al de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })
    
    test('debe tener la clase animate fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    })
    
})
