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

  console.log(patientsShow.id);
  console.log(patientsShow.url);
  console.log(patientsShow.patient);
  console.log(urlRoute);
  console.log(urlCheck);

  patientsShow.addPatient = function() {
    patientsShow.patient.$addPatient(() => {
      console.log('click');
      $state.go('usersShow');
    });
    // patientsShow.patient.addPatient = addPatient;
    console.log('click');

  }

  // patientsShow.patient.addPatient = addPatient;


  // function removePatient() {
  //   patientsShow.patient.$removePatient(() => {
  //     $state.go('usersShow');
  //   });
  // }

  // patientsShow.delete = removePatient;
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
    // console.log(patientsNew.patient.user)

    Patient.save(patientsNew.patient, (patient) => {
      $state.go('patientsShow', { id: patient.id });
    });
  }
  patientsNew.createPatient = createPatient;
}
