import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory"

describe('preubas en el componebnete <AddCategoy/> ', () => {

    const setcategories =jest.fn();
    let wrapper = shallow(<AddCategory setcategories={setcategories}/>)
    
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setcategories={setcategories}/>)

    });
    
    test('debe mostrar el componente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    
    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target:{value} });
        expect(wrapper.find('p').text().trim()).toBe(value);
    })
    
    
    test('no debe de postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault:()=>{} });
        
        
        expect(setcategories).not.toHaveBeenCalled();
    })
    
    test('debe de llamar el setcategories y limpiuar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target:{value} });
        wrapper.find('form').simulate('submit', {preventDefault:()=>{} });
        expect(setcategories).toHaveBeenCalled();
        expect(wrapper.find('p').text().trim()).toBe('');
        
    })
    
    
})
