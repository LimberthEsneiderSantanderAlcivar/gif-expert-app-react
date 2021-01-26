import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('preubas del componetne GifExpertApp', () => {
    test('debe mostrar el compoennte corectamente', () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar una liusta de categorias', () => {
        const categories = ['one punch', 'dragon ball'];

        const wrapper = shallow (<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
    
})
