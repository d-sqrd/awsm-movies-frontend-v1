import axios from 'axios';

// use only for local development
// export default axios.create({
//     baseURL: 'https://6859-2405-201-1018-b02d-b40f-40c9-57c9-4b22.in.ngrok.io',
//     headers: {'ngrok-skip-browser-warning':'true'}
// });


export default axios.create({
    baseURL: 'http://awsmmovies-env.eba-xwb8zmby.ap-south-1.elasticbeanstalk.com/',
});