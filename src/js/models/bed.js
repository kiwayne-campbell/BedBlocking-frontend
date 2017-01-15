angular.module('finalProject')
  .factory('Bed', Bed);

Bed.$inject = ['$resource', 'API_URL'];
function Bed($resource, API_URL) {
  return new $resource(`${API_URL}/beds/:id`, { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
