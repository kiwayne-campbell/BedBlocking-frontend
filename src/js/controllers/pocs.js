angular.module('bedBlockingProject')
  .controller('PocsIndexController', PocsIndexController)
  .controller('PocsShowController', PocsShowController)
  .controller('PocsNewController', PocsNewController)
  .controller('PocsEditController', PocsEditController);

PocsIndexController.$inject = ['Poc'];
function PocsIndexController(Poc) {
  const pocsIndex = this;
  pocsIndex.all = Poc.query();
}

PocsShowController.$inject = ['Poc', '$state', 'User', 'Patient'];
function PocsShowController(Poc, $state, User, Patient) {
  const pocsShow = this;

  pocsShow.poc = Poc.get($state.params);

  pocsShow.comment = {
    poc_id: $state.params.id
  };

  function addComment() {
    Comment.save(pocsShow.comment, () => {
      $state.reload();
    });
  }


  pocsShow.add = addComment;


  function favorite() {
    pocsShow.poc.$favorite(() => {
      $state.reload();
    });
  }
  // add main-message- added to favourites!

  pocsShow.favorite = favorite;


  function deletePoc() {
    pocsShow.poc.$remove(() => {
      $state.go('pocsIndex');
    });
  }

  pocsShow.delete = deletePoc;
}


PocsEditController.$inject = ['Poc', '$state'];
function PocsEditController(Poc, $state) {
  const pocsEdit = this;

  pocsEdit.poc = Poc.get($state.params);

  function update() {
    pocsEdit.poc.$update(() => {
      $state.go('pocsShow', $state.params);
    });
  }

  this.update = update;

}


PocsNewController.$inject = ['Poc', '$state', '$auth'];

function PocsNewController(Poc, $state, $auth) {

  const pocsNew = this;
  // console.log(patientsNew);
  const currentUser = $auth.getPayload().id;
  pocsNew.poc = {};

  pocsNew.poc.user = currentUser;

  function createPoc() {

    // get userId from payload
    pocsNew.poc.user = $auth.getPayload().id;
    // console.log(patientsNew.patient.user)

    Poc.save(pocsNew.poc, (poc) => {
      $state.go('pocsShow', { id: poc.id });
    });
  }
  pocsNew.createPoc = createPoc;
}
