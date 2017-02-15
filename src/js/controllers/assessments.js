angular.module('bedBlockingProject')
  .controller('AssessmentsIndexController', AssessmentsIndexController)
  .controller('AssessmentsShowController', AssessmentsShowController)
  .controller('AssessmentsEditController', AssessmentsEditController);

AssessmentsIndexController.$inject = ['Assessment', '$state'];
function AssessmentsIndexController(Assessment, $state) {
  const assessmentsIndex = this;
  assessmentsIndex.all = Assessment.query({ q: $state.params.q });
  assessmentsIndex.featured = Assessment.featured();

}

AssessmentsShowController.$inject = ['Assessment', '$state', 'User', 'Patient'];
function AssessmentsShowController(Assessment, $state, User, Patient) {
  const assessmentsShow = this;

  assessmentsShow.assessment = Assessment.get($state.params);

  assessmentsShow.comment = {
    assessment_id: $state.params.id
  };

  function addComment() {
    Comment.save(assessmentsShow.comment, () => {
      $state.reload();
    });
  }


  assessmentsShow.add = addComment;


  function favorite() {
    assessmentsShow.assessment.$favorite(() => {
      $state.reload();
    });
  }
  // add main-message- added to favourites!

  assessmentsShow.favorite = favorite;


  function deleteAssessment() {
    assessmentsShow.assessment.$remove(() => {
      $state.go('assessmentsIndex');
    });
  }

  assessmentsShow.delete = deleteAssessment;
}


AssessmentsEditController.$inject = ['Assessment', '$state'];
function AssessmentsEditController(Assessment, $state) {
  const assessmentsEdit = this;

  assessmentsEdit.assessment = Assessment.get($state.params);

  function update() {
    assessmentsEdit.assessment.$update(() => {
      $state.go('assessmentsShow', $state.params);
    });
  }

  this.update = update;

}
