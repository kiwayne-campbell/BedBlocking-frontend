angular.module('bedBlockingProject')
  .factory('Assessment', Assessment);

Assessment.$inject = ['$resource', 'API_URL'];
function Assessment($resource, API_URL) {
  return new $resource(`${API_URL}/assessments/:id`, { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
