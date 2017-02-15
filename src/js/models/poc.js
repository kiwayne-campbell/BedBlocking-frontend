angular.module('bedBlockingProject')
  .factory('Poc', Poc);

Poc.$inject = ['$resource', 'API_URL'];
function Poc($resource, API_URL) {
  return new $resource(`${API_URL}/pocs/:id`, { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
