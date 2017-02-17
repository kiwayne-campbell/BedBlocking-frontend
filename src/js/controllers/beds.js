angular.module('bedBlockingProject')
  .controller('BedsIndexController', BedsIndexController)
  .controller('BedsShowController', BedsShowController)
  .controller('BedsEditController', BedsEditController);

BedsIndexController.$inject = ['Bed'];
function BedsIndexController(Bed) {
  const bedsIndex = this;
  bedsIndex.all = Bed.query();
}

BedsShowController.$inject = ['Bed', '$state', 'User', 'Patient'];
function BedsShowController(Bed, $state, User, Patient) {
  const bedsShow = this;

  bedsShow.bed = Bed.get($state.params);

  bedsShow.comment = {
    bed_id: $state.params.id
  };

  function addComment() {
    Comment.save(bedsShow.comment, () => {
      $state.reload();
    });
  }


  bedsShow.add = addComment;


  function favorite() {
    bedsShow.bed.$favorite(() => {
      $state.reload();
    });
  }
  // add main-message- added to favourites!

  bedsShow.favorite = favorite;


  function deleteBed() {
    bedsShow.bed.$remove(() => {
      $state.go('bedsIndex');
    });
  }

  bedsShow.delete = deleteBed;
}


BedsEditController.$inject = ['Bed', '$state'];
function BedsEditController(Bed, $state) {
  const bedsEdit = this;

  bedsEdit.bed = Bed.get($state.params);

  function update() {
    bedsEdit.bed.$update(() => {
      $state.go('bedsShow', $state.params);
    });
  }

  this.update = update;

}
