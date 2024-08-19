import HttpHelpers from './helpers';

const NewsApiEndpoints = {
  getNewsCategories: () => {
    return HttpHelpers.unAuthenticatedAxios.get('91298d970c27e9a06518').then(response => response.data);
  },

  getNewsListing: () => {
    return HttpHelpers.unAuthenticatedAxios.get('d275425a434e02acf2f7').then(response => response.data);
  },

};

export default NewsApiEndpoints;
