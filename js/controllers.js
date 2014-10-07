angular.module('MaishaCareApp.controllers', []).

controller('MaishaCareCtrl', ["$rootScope", "$scope", "$location", "$window", "maishaAPIService", "auth", function($rootScope, $scope, $location, $window, maishaAPIService, auth) {
	$rootScope.userInfo = auth;
	$scope.doctorsList = null;
	$scope.personalTrainersList = null;
	$scope.nursesList = null;
	$scope.nutritionistsList = null;
	$scope.hospitalsList = null;
	$scope.healthClubsList = null;
	$scope.insuranceCompaniesList = null;
	$scope.insuranceCoverageHospitalsList = null;
	$scope.insuranceCoverageDoctorssList = null;
	$scope.drugsList = null;
	$scope.diseasesList = null;
	
	var accessToken = $rootScope.userInfo.accessToken;

	maishaAPIService.getDoctors(accessToken, 1, 50).success(function(response) {
        	$scope.doctorsList = response.doctors;
	});
	
	maishaAPIService.getNurses(accessToken, 1, 50).success(function(response) {
                $scope.nursesList = response.nurses;
        });

	maishaAPIService.getPersonalTrainers(accessToken, 1, 50).success(function(response) {
                $scope.personalTrainersList = response.personalTrainers;
        });

	maishaAPIService.getNutritionists(accessToken, 1, 50).success(function(response) {
                $scope.nutritionistsList = response.nutritionists;
        });

	maishaAPIService.getHospitals(accessToken, 1, 50).success(function(response) {
                $scope.hospitalsList = response.hospitals;
        });

	maishaAPIService.getHealthClubs(accessToken, 1, 50).success(function(response) {
                $scope.healthClubsList = response.healthClubs;
        });

	maishaAPIService.getInsuranceCompanies(accessToken, 1, 50).success(function(response) {
                $scope.insuranceCompaniesList = response.insuranceCompanies;
        });

	maishaAPIService.getInsuranceCoverageHospitals(accessToken, 1, 50).success(function(response) {
                $scope.insuranceCoverageHospitalsList = response.coverageHospitals;
        });

	maishaAPIService.getInsuranceCoverageDoctors(accessToken, 1, 50).success(function(response) {
                $scope.insuranceCoverageDoctorsList = response.coverageDoctors;
        });

	maishaAPIService.getDrugs(accessToken, 1, 50).success(function(response) {
                $scope.drugsList = response.drugs;
        });

	maishaAPIService.getDiseases(accessToken, 1, 50).success(function(response) {
                $scope.diseasesList = response.diseases;
                console.log($scope.diseasesList);
        });

	
}]).

controller('LoginCtrl', function($scope, $location, $window, authenticationService) {
	$scope.userInfo = null;
	$scope.login = function() {
		console.log('Logging in ');
		
		authenticationService.login($scope.username, $scope.password)
		.then(function(result) {
			$scope.userInfo = result;
			$location.path('/appointments');
			console.log('Logged in.');

		}, function(error) {
			$window.alert('Invalid credentials');
			console.log('Login failed');
			console.log(error);
		});

	};

	$scope.logout = function() {
                console.log('Logging out...');
                authenticationService.logout()
                .then(function(result) {
                        $scope.userInfo = null;
                        $location.path('/login');
			$window.location.reload();

                }, function(error) {
                        console.log(error);
                });
        };

	$scope.cancel = function() {
		$scope.username = '';
		$scope.password = '';
	};
});

