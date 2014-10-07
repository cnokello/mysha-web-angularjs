angular.module('MaishaCareApp', [
	'MaishaCareApp.services',
	'MaishaCareApp.controllers',
	'ngRoute'
]).config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when("/doctors", {templateUrl: "partials/doctors.html", controller: "MaishaCareCtrl", resolve: {
			auth: function($q, authenticationService) {
				var userInfo = authenticationService.getUserInfo();
				if(userInfo) {
					console.log(userInfo);
					return $q.when(userInfo);
				} else {
					return $q.reject({ authenticated: false });
				}
			}
		}}).

		when("/nurses", {templateUrl: "partials/nurses.html", controller: "MaishaCareCtrl", resolve: {
                        auth: function($q, authenticationService) {
                                var userInfo = authenticationService.getUserInfo();
                                if(userInfo) {
                                        return $q.when(userInfo);
                                } else {
                                        return $q.reject({ authenticated: false });
                                }
                        }
                }}).

		when("/personalTrainers", {templateUrl: "partials/personal_trainers.html", controller: "MaishaCareCtrl", resolve: {
                        auth: function($q, authenticationService) {
                                var userInfo = authenticationService.getUserInfo();
                                if(userInfo) {
                                        return $q.when(userInfo);
                                } else {
                                        return $q.reject({ authenticated: false });
                                }
                        }
                }}).

		when("/nutritionists", {templateUrl: "partials/nutritionists.html", controller: "MaishaCareCtrl", resolve: {
                        auth: function($q, authenticationService) {
                                var userInfo = authenticationService.getUserInfo();
                                if(userInfo) {
                                        return $q.when(userInfo);
                                } else {
                                        return $q.reject({ authenticated: false });
                                }
                        }
                }}).

		when("/hospitals", {templateUrl: "partials/hospitals.html", controller: "MaishaCareCtrl", resolve: {
                        auth: function($q, authenticationService) {
                                var userInfo = authenticationService.getUserInfo();
                                if(userInfo) {
                                        return $q.when(userInfo);
                                } else {
                                        return $q.reject({ authenticated: false });
                                }
                        }
                }}).

		when("/clubs", {templateUrl: "partials/clubs.html", controller: "MaishaCareCtrl", resolve: {
                        auth: function($q, authenticationService) {
                                var userInfo = authenticationService.getUserInfo();
                                if(userInfo) {
                                        return $q.when(userInfo);
                                } else {
                                        return $q.reject({ authenticated: false });
                                }
                        }
                }}).

		when("/equipment", {templateUrl: "partials/equipment.html", controller: "MaishaCareCtrl", resolve: {
                        auth: function($q, authenticationService) {
                                var userInfo = authenticationService.getUserInfo();
                                if(userInfo) {
                                        return $q.when(userInfo);
                                } else {
                                        return $q.reject({ authenticated: false });
                                }
                        }
                }}).

		when("/insuranceCompanies", {templateUrl: "partials/insurance_companies.html", controller: "MaishaCareCtrl", resolve: {
                        auth: function($q, authenticationService) {
                                var userInfo = authenticationService.getUserInfo();
                                if(userInfo) {
                                        return $q.when(userInfo);
                                } else {
                                        return $q.reject({ authenticated: false });
                                }
                        }
                }}).

		when("/institutionProviders", {templateUrl: "partials/covered_institutions.html", controller: "MaishaCareCtrl", resolve: {
                        auth: function($q, authenticationService) {
                                var userInfo = authenticationService.getUserInfo();
                                if(userInfo) {
                                        return $q.when(userInfo);
                                } else {
                                        return $q.reject({ authenticated: false });
                                }
                        }
                }}).

		when("/individualProviders", {templateUrl: "partials/covered_doctors.html", controller: "MaishaCareCtrl", resolve: {
                        auth: function($q, authenticationService) {
                                var userInfo = authenticationService.getUserInfo();
                                if(userInfo) {
                                        return $q.when(userInfo);
                                } else {
                                        return $q.reject({ authenticated: false });
                                }
                        }
                }}).

		when("/drugs", {templateUrl: "partials/drugs.html", controller: "MaishaCareCtrl", resolve: {
                        auth: function($q, authenticationService) {
                                var userInfo = authenticationService.getUserInfo();
                                if(userInfo) {
                                        return $q.when(userInfo);
                                } else {
                                        return $q.reject({ authenticated: false });
                                }
                        }
                }}).

		when("/drugStores", {templateUrl: "partials/drug_stores.html", controller: "MaishaCareCtrl", resolve: {
                        auth: function($q, authenticationService) {
                                var userInfo = authenticationService.getUserInfo();
                                if(userInfo) {
                                        return $q.when(userInfo);
                                } else {
                                        return $q.reject({ authenticated: false });
                                }
                        }
                }}).

		when("/counterfeitDrugs", {templateUrl: "partials/counterfeit_drugs.html", controller: "MaishaCareCtrl", resolve: {
                        auth: function($q, authenticationService) {
                                var userInfo = authenticationService.getUserInfo();
                                if(userInfo) {
                                        return $q.when(userInfo);
                                } else {
                                        return $q.reject({ authenticated: false });
                                }
                        }
                }}).

		when("/appointments", {templateUrl: "partials/appointments.html", controller: "MaishaCareCtrl", resolve: {
                        auth: function($q, authenticationService) {
                                var userInfo = authenticationService.getUserInfo();
                                if(userInfo) {
                                        return $q.when(userInfo);
                                } else {
                                        return $q.reject({ authenticated: false });
                                }
                        }
                }}).

		when("/exercises", {templateUrl: "partials/exercises.html", controller: "MaishaCareCtrl", resolve: {
                        auth: function($q, authenticationService) {
                                var userInfo = authenticationService.getUserInfo();
                                if(userInfo) {
                                        return $q.when(userInfo);
                                } else {
                                        return $q.reject({ authenticated: false });
                                }
                        }
                }}).

		when("/dosages", {templateUrl: "partials/dosages.html", controller: "MaishaCareCtrl", resolve: {
                        auth: function($q, authenticationService) {
                                var userInfo = authenticationService.getUserInfo();
                                if(userInfo) {
                                        return $q.when(userInfo);
                                } else {
                                        return $q.reject({ authenticated: false });
                                }
                        }
                }}).

		when("/nutritions", {templateUrl: "partials/nutritions.html", controller: "MaishaCareCtrl", resolve: {
                        auth: function($q, authenticationService) {
                                var userInfo = authenticationService.getUserInfo();
                                if(userInfo) {
                                        return $q.when(userInfo);
                                } else {
                                        return $q.reject({ authenticated: false });
                                }
                        }
                }}).

		when("/diseases", {templateUrl: "partials/diseases.html", controller: "MaishaCareCtrl", resolve: {
                        auth: function($q, authenticationService) {
                                var userInfo = authenticationService.getUserInfo();
                                if(userInfo) {
                                        return $q.when(userInfo);
                                } else {
                                        return $q.reject({ authenticated: false });
                                }
                        }
                }}).

		when("/healthCalendar", {templateUrl: "partials/health_calendar.html", controller: "MaishaCareCtrl", resolve: {
                        auth: function($q, authenticationService) {
                                var userInfo = authenticationService.getUserInfo();
                                if(userInfo) {
                                        return $q.when(userInfo);
                                } else {
                                        return $q.reject({ authenticated: false });
                                }
                        }
                }}).
		
		 when("/register", {templateUrl: "partials/register.html", controller: "MaishaCareCtrl", resolve: {
                        auth: function($q, authenticationService) {
                                var userInfo = authenticationService.getUserInfo();
                                if(userInfo) {
                                        return $q.when(userInfo);
                                } else {
                                        return $q.reject({ authenticated: false });
                                }
                        }
                }}).

		 when("/login", {templateUrl: "partials/login.html", controller: "LoginCtrl"}).

		 /* when("/logout", {templateUrl: "partials/login.html", controller: "MaishaCareCtrl"}). */
		 when("/profile/:id", {templateUrl: "partials/profile.html", controller: "MaishaCareCtrl", resolve: {
                        auth: function($q, authenticationService) {
                                var userInfo = authenticationService.getUserInfo();
                                if(userInfo) {
                                        return $q.when(userInfo);
                                } else {
                                        return $q.reject({ authenticated: false });
                                }
                        }
                }}).

		otherwise({redirectTo: "/appointments"});

}]).run(['$rootScope', '$location', function($rootScope, $location) {
	$rootScope.$on('$routeChangeSuccess', function(userInfo) {
		console.log(userInfo);
	});

	$rootScope.$on('$routeChangeError', function(event, current, previous, eventObj) {
		if(eventObj.authenticated === false) {
			$location.path('/login');
		}
	});
}]);
