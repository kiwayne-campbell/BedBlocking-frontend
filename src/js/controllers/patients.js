angular.module('bedBlockingProject')
  .controller('PatientsIndexController', PatientsIndexController)
  .controller('PatientsShowController', PatientsShowController)
  .controller('PatientsEditController', PatientsEditController);

PatientsIndexController.$inject = ['Patient', '$state'];
function PatientsIndexController(Patient, $state) {
  const patientsIndex = this;
  patientsIndex.all = Patient.query({ q: $state.params.q });
  patientsIndex.featured = Patient.featured();

}

PatientsShowController.$inject = ['Patient', '$state', 'User'];
function PatientsShowController(Patient, $state, User) {
  const patientsShow = this;

  patientsShow.patient = Patient.get($state.params);

  patientsShow.comment = {
    patient_id: $state.params.id
  };

  function addComment() {
    Comment.save(patientsShow.comment, () => {
      $state.reload();
    });
  }


  patientsShow.add = addComment;


  function favorite() {
    patientsShow.patient.$favorite(() => {
      $state.reload();
    });
  }
  // add main-message- added to favourites!

  patientsShow.favorite = favorite;


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
