import HttpHelpers from './helpers';
const HomeApiEndpoints = {
  getHeroBanner: () => {
    return HttpHelpers.unAuthenticatedAxios.get('fee177346e7875554413').then(response => response.data);
  },

};

export default HomeApiEndpoints;
