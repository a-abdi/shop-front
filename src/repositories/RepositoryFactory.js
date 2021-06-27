import ProductRepository from './ProductRepository';
// import UserRepository from './UserRepository';

const repositories = {
    'products': ProductRepository,
    // 'users': UserRepository
}
export default {
    get: name => repositories[name]
};