angular.module('bedBlockingProject')
  .factory('User', User);

User.$inject = ['$resource', 'API_URL'];
function User($resource, API_URL) {
  return new $resource(`${API_URL}/users/:id`, { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
