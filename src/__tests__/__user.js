import loadUser from '../loadUser';
import httpGet from '../http';
jest.mock('../http');
beforeEach(()=>{
    jest.resetAllMocks();
});
test('should call loadUser once', () =>{
    httpGet.mockReturnValue(JSON.stringify({}));
    loadUser(1); //
    // смотреть https://jestjs.io/docs/expect
    expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
    // toHaveBeenCalledWith(...args) === метод httpGet был вызван с агрументами (...args)
});
