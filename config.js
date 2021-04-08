const apiUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000/api' // development api
    : 'http://localhost:3000/api'; // production api

export {
    apiUrl
};