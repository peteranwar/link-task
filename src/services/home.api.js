import HttpHelpers from './helpers';
// https://api.npoint.io/fee177346e7875554413
const HomeApiEndpoints = {
  getHeroBanner: () => {
    return HttpHelpers.unAuthenticatedAxios.get('fee177346e7875554413').then(response => response.data);
  },


  // getDistricts: id => {
  //   return HttpHelpers.unAuthenticatedAxios
  //     .get(`districts/${id}`)
  //     .then(response => response.data);
  // },
};

export default HomeApiEndpoints;
