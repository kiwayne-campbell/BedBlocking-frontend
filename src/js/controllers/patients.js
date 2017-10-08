angular.module('bedBlockingProject')
  .controller('PatientsIndexController', PatientsIndexController)
  .controller('PatientsShowController', PatientsShowController)
  .controller('PatientsEditController', PatientsEditController)
  .controller('PatientsNewController', PatientsNewController);

PatientsIndexController.$inject = ['Patient', '$state', 'User'];
function PatientsIndexController(Patient, $state, User) {
  const patientsIndex = this;
  patientsIndex.all = Patient.query({ q: $state.params.q });
}

PatientsShowController.$inject = ['Patient', '$state', 'User', '$stateParams', '$location'];
function PatientsShowController(Patient, $state, User, $stateParams, $location) {
  const patientsShow = this;

  patientsShow.patient = Patient.get($state.params);

  var urlRoute = $stateParams.id;
  var urlCheck = $location.path();

  patientsShow.id = {
   id: $state.params.id
  };

  patientsShow.addPatient = function() {
    patientsShow.patient.$addPatient(() => {
      console.log('click');
      $state.go('usersIndex');
    });
  }
}

PatientsEditController.$inject = ['Patient', '$state'];
function PatientsEditController(Patient, $state) {
  const patientsEdit = this;

  patientsEdit.patient = Patient.get($state.params);

  function update() {
    patientsEdit.patient.$update(() => {
      $state.go('patientsShow', $state.params);
    });
  }

  this.update = update;

}


PatientsNewController.$inject = ['Patient', '$state', '$auth'];

function PatientsNewController(Patient, $state, $auth) {

  const patientsNew = this;
  const currentUser = $auth.getPayload().id;
  patientsNew.patient = {};

  patientsNew.patient.user = currentUser;

  function createPatient() {

    // get userId from payload
    patientsNew.patient.user = $auth.getPayload().id;

    Patient.save(patientsNew.patient, (patient) => {
      $state.go('patientsShow', { id: patient.id });
    });
  }
  patientsNew.createPatient = createPatient;
}
