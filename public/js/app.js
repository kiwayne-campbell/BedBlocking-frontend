"use strict";function Auth(e,t){e.loginUrl=t+"/login",e.signupUrl=t+"/register",e.tokenPrefix=""}function Assessment(e,t){return new e(t+"/assessments/:id",{id:"@_id"},{update:{method:"PUT"}})}function AssessmentsIndexController(e){this.all=e.query()}function AssessmentsShowController(e,t,o,n){function r(){Comment.save(i.comment,function(){t.reload()})}function s(){i.assessment.$favorite(function(){t.reload()})}function l(){i.assessment.$remove(function(){t.go("assessmentsIndex")})}var i=this;i.assessment=e.get(t.params),i.comment={assessment_id:t.params.id},i.add=r,i.favorite=s,i.delete=l}function AssessmentsEditController(e,t){function o(){n.assessment.$update(function(){t.go("assessmentsShow",t.params)})}var n=this;n.assessment=e.get(t.params),this.update=o}function RegisterController(e,t){function o(){e.signup(n.user).then(function(){t.go("login")})}var n=this;n.user={},n.submit=o}function LoginController(e,t){function o(){e.login(n.credentials).then(function(){t.go("home")})}var n=this;n.credentials={},n.submit=o}function Bed(e,t){return new e(t+"/beds/:id",{id:"@_id"},{update:{method:"PUT"}})}function BedsIndexController(e){this.all=e.query()}function BedsShowController(e,t,o,n){function r(){Comment.save(i.comment,function(){t.reload()})}function s(){i.bed.$favorite(function(){t.reload()})}function l(){i.bed.$remove(function(){t.go("bedsIndex")})}var i=this;i.bed=e.get(t.params),i.comment={bed_id:t.params.id},i.add=r,i.favorite=s,i.delete=l}function BedsEditController(e,t){function o(){n.bed.$update(function(){t.go("bedsShow",t.params)})}var n=this;n.bed=e.get(t.params),this.update=o}function MainController(e,t,o){function n(){e.logout().then(function(){t.go("home")})}function r(o,n){s.message=null,s.stateName=n.name,!e.isAuthenticated()&&l.includes(n.name)&&(o.preventDefault(),t.go("login"),s.message="You must be logged in to go there!"),e.isAuthenticated()&&(s.currentUserId=e.getPayload().id)}var s=this;s.isLoggedIn=e.isAuthenticated,console.log(s.userId),s.logout=n,s.message=null;var l=["usersEdit","usersNew","usersShow"];o.$on("$stateChangeStart",r)}function Patient(e,t){return new e(t+"/patients/:id",{id:"@_id"},{update:{method:"PUT"},addPatient:{method:"POST",url:t+"/patients/:id"},removePatient:{method:"POST",url:t+"/users/:id"}})}function PatientsIndexController(e,t,o){this.all=e.query({q:t.params.q})}function PatientsShowController(e,t,o,n,r){var s=this;s.patient=e.get(t.params);var l=n.id,i=r.path();s.id={id:t.params.id},console.log(s.id),console.log(s.url),console.log(s.patient),console.log(l),console.log(i),s.addPatient=function(){s.patient.$addPatient(function(){console.log("click"),t.go("usersShow")}),console.log("click")}}function PatientsEditController(e,t){function o(){n.patient.$update(function(){t.go("patientsShow",t.params)})}var n=this;n.patient=e.get(t.params),this.update=o}function PatientsNewController(e,t,o){function n(){r.patient.user=o.getPayload().id,e.save(r.patient,function(e){t.go("patientsShow",{id:e.id})})}var r=this,s=o.getPayload().id;r.patient={},r.patient.user=s,r.createPatient=n}function Poc(e,t){return new e(t+"/pocs/:id",{id:"@_id"},{update:{method:"PUT"}})}function PocsIndexController(e){this.all=e.query()}function PocsShowController(e,t,o,n){function r(){Comment.save(i.comment,function(){t.reload()})}function s(){i.poc.$favorite(function(){t.reload()})}function l(){i.poc.$remove(function(){t.go("pocsIndex")})}var i=this;i.poc=e.get(t.params),i.comment={poc_id:t.params.id},i.add=r,i.favorite=s,i.delete=l}function PocsEditController(e,t){function o(){n.poc.$update(function(){t.go("pocsShow",t.params)})}var n=this;n.poc=e.get(t.params),this.update=o}function PocsNewController(e,t,o){function n(){r.poc.user=o.getPayload().id,e.save(r.poc,function(e){t.go("pocsShow",{id:e.id})})}var r=this,s=o.getPayload().id;r.poc={},r.poc.user=s,r.createPoc=n}function Router(e,t){e.state("usersIndex",{url:"/users",templateUrl:"/templates/usersIndex.html",controller:"UsersIndexController as usersIndex"}).state("usersShow",{url:"/users/:id",templateUrl:"/templates/usersShow.html",controller:"UsersShowController as usersShow"}).state("usersEdit",{url:"/users/:id/edit",templateUrl:"/templates/usersEdit.html",controller:"UsersEditController as usersEdit"}).state("bedsIndex",{url:"/beds",templateUrl:"/templates/bedsIndex.html",controller:"BedsIndexController as bedsIndex"}).state("pocsIndex",{url:"/pocs",templateUrl:"/templates/pocsIndex.html",controller:"PocsIndexController as pocsIndex"}).state("assessmentsIndex",{url:"/assessments",templateUrl:"/templates/assessmentsIndex.html",controller:"AssessmentsIndexController as assessmentsIndex"}).state("patientsIndex",{url:"/patients?q",templateUrl:"/templates/patientsIndex.html",controller:"PatientsIndexController as patientsIndex"}).state("patientsNew",{url:"/patients/new",templateUrl:"/templates/patientsNew.html",controller:"PatientsNewController as patientsNew"}).state("patientsShow",{url:"/patients/:id",templateUrl:"/templates/patientsShow.html",controller:"PatientsShowController as patientsShow"}).state("patientsSearch",{url:"/search",templateUrl:"/templates/patientsSearch.html",controller:"PatientsIndexController as patientsIndex"}).state("register",{url:"/register",templateUrl:"/templates/register.html",controller:"RegisterController as register"}).state("login",{url:"/login",templateUrl:"/templates/login.html",controller:"LoginController as login"}).state("home",{url:"/home",templateUrl:"/templates/home.html",controller:"PatientsIndexController as patientsIndex"}),t.otherwise("/home")}function User(e,t){return new e(t+"/users/:id",{id:"@_id"},{update:{method:"PUT"}})}function UsersIndexController(e){this.all=e.query()}function UsersShowController(e,t,o,n,r){function s(){return o.getPayload().id===parseFloat(t.params.id)}function l(){i.user.$remove(function(){t.go("usersIndex")})}var i=this;i.isCurrentUser=s,console.log(s),i.user=e.get(t.params),console.log(i.user),i.delete=l,console.log(),i.removePatient=function(){console.log("click"),console.log(this.user.patient_ids)};var a=i.user.patients;i.getPatient=function(){console.log("click"),console.log(a)}}function UsersEditController(e,t){function o(){n.user.$update(function(){t.go("usersShow",t.params)})}var n=this;n.user=e.get(t.params),this.update=o}angular.module("bedBlockingProject",["ngResource","ui.router","satellizer"]).constant("API_URL","http://localhost:3000/api").config(Auth),Auth.$inject=["$authProvider","API_URL"],angular.module("bedBlockingProject").factory("Assessment",Assessment),Assessment.$inject=["$resource","API_URL"],angular.module("bedBlockingProject").controller("AssessmentsIndexController",AssessmentsIndexController).controller("AssessmentsShowController",AssessmentsShowController).controller("AssessmentsEditController",AssessmentsEditController),AssessmentsIndexController.$inject=["Assessment"],AssessmentsShowController.$inject=["Assessment","$state","User","Patient"],AssessmentsEditController.$inject=["Assessment","$state"],angular.module("bedBlockingProject").controller("RegisterController",RegisterController).controller("LoginController",LoginController),RegisterController.$inject=["$auth","$state"],LoginController.$inject=["$auth","$state"],angular.module("bedBlockingProject").factory("Bed",Bed),Bed.$inject=["$resource","API_URL"],angular.module("bedBlockingProject").controller("BedsIndexController",BedsIndexController).controller("BedsShowController",BedsShowController).controller("BedsEditController",BedsEditController),BedsIndexController.$inject=["Bed"],BedsShowController.$inject=["Bed","$state","User","Patient"],BedsEditController.$inject=["Bed","$state"],angular.module("bedBlockingProject").controller("MainController",MainController),MainController.$inject=["$auth","$state","$rootScope"],angular.module("bedBlockingProject").factory("Patient",Patient),Patient.$inject=["$resource","API_URL"],angular.module("bedBlockingProject").controller("PatientsIndexController",PatientsIndexController).controller("PatientsShowController",PatientsShowController).controller("PatientsEditController",PatientsEditController).controller("PatientsNewController",PatientsNewController),PatientsIndexController.$inject=["Patient","$state","User"],PatientsShowController.$inject=["Patient","$state","User","$stateParams","$location"],PatientsEditController.$inject=["Patient","$state"],PatientsNewController.$inject=["Patient","$state","$auth"],angular.module("bedBlockingProject").factory("Poc",Poc),Poc.$inject=["$resource","API_URL"],angular.module("bedBlockingProject").controller("PocsIndexController",PocsIndexController).controller("PocsShowController",PocsShowController).controller("PocsNewController",PocsNewController).controller("PocsEditController",PocsEditController),PocsIndexController.$inject=["Poc"],PocsShowController.$inject=["Poc","$state","User","Patient"],PocsEditController.$inject=["Poc","$state"],PocsNewController.$inject=["Poc","$state","$auth"],angular.module("bedBlockingProject").config(Router),Router.$inject=["$stateProvider","$urlRouterProvider"],angular.module("bedBlockingProject").factory("User",User),User.$inject=["$resource","API_URL"],angular.module("bedBlockingProject").controller("UsersIndexController",UsersIndexController).controller("UsersShowController",UsersShowController).controller("UsersEditController",UsersEditController),UsersIndexController.$inject=["User"],UsersShowController.$inject=["User","$state","$auth","API_URL","Patient"],UsersEditController.$inject=["User","$state"];
//# sourceMappingURL=app.js.map
