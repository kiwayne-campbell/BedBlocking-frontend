angular.module('bedBlockingProject')
  .factory('Patient', Patient);

Patient.$inject = ['$resource', 'API_URL'];
function Patient($resource, API_URL) {
  return new $resource(`${API_URL}/patients/:id`, { id: '@_id' }, {
    update: { method: 'PUT' },
    addPatient: { method: 'POST', url: `${API_URL}/patients/:id` },
    removePatient: { method: 'POST', url: `${API_URL}/users/:id` },
  });
}
