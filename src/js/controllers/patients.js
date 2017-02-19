angular.module('bedBlockingProject')
  .controller('PatientsIndexController', PatientsIndexController)
  .controller('PatientsShowController', PatientsShowController)
  .controller('PatientsEditController', PatientsEditController)
  .controller('PatientsNewController', PatientsNewController);

PatientsIndexController.$inject = ['Patient', '$state'];
function PatientsIndexController(Patient, $state) {
  const patientsIndex = this;
  patientsIndex.all = Patient.query({ q: $state.params.q });
}

PatientsShowController.$inject = ['Patient', '$state', 'User'];
function PatientsShowController(Patient, $state, User) {
  const patientsShow = this;

  patientsShow.patient = Patient.get($state.params);


  function deletePatient() {
    patientsShow.patient.$remove(() => {
      $state.go('patientsIndex');
    });
  }

  patientsShow.delete = deletePatient;
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
  // console.log(patientsNew);
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
