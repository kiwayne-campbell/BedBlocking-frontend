angular.module('finalProject')
  .factory('Assessment', Assessment);

Assessment.$inject = ['$resource', 'API_URL'];
function Assessment($resource, API_URL) {
  return new $resource(`${API_URL}/assesments/:id`, { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
