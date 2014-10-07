angular.module('MaishaCareApp.services', []) 
.factory('maishaAPIService', function($http) {

	var host = location.hostname;
	var maishaAPI = {};

	maishaAPI.getDoctors = function(accessToken, page, offset) {
		return $http({
			method: 'JSONP',
			url: 'http://' + host + ':8383/maisha-api/api/doctors?accessToken=' + accessToken + 
				'&page=' + page + '&offset=' + offset + '&callback=JSON_CALLBACK'
		});
	}

	maishaAPI.getNurses = function(accessToken, page, offset) {
                return $http({
                        method: 'JSONP',
                        url: 'http://' + host + ':8383/maisha-api/api/nurses?accessToken=' + accessToken +
                                '&page=' + page + '&offset=' + offset + '&callback=JSON_CALLBACK'
                });
        }

	maishaAPI.getPersonalTrainers = function(accessToken, page, offset) {
                return $http({
                        method: 'JSONP',
                        url: 'http://' + host + ':8383/maisha-api/api/personalTrainers?accessToken=' + accessToken +
                                '&page=' + page + '&offset=' + offset + '&callback=JSON_CALLBACK'
                });
        }

	maishaAPI.getNutritionists = function(accessToken, page, offset) {
                return $http({
                        method: 'JSONP',
                        url: 'http://' + host + ':8383/maisha-api/api/nutritionists?accessToken=' + accessToken +
                                '&page=' + page + '&offset=' + offset + '&callback=JSON_CALLBACK'
                });
	}
        

	maishaAPI.getHospitals = function(accessToken, page, offset) {
		return $http({
                        method: 'JSONP',
                        url: 'http://' + host + ':8383/maisha-api/api/hospitals?accessToken=' + accessToken +
                                '&page=' + page + '&offset=' + offset + '&callback=JSON_CALLBACK'
                });
	}

	maishaAPI.getHealthClubs = function(accessToken, page, offset) {
                return $http({
                        method: 'JSONP',
                        url: 'http://' + host + ':8383/maisha-api/api/healthClubs?accessToken=' + accessToken +
                                '&page=' + page + '&offset=' + offset + '&callback=JSON_CALLBACK'
                });
        }

	maishaAPI.getInsuranceCompanies = function(accessToken, page, offset) {
		return $http({
                        method: 'JSONP',
                        url: 'http://' + host + ':8383/maisha-api/api/insuranceCompanies?accessToken=' + accessToken +
                                '&page=' + page + '&offset=' + offset + '&callback=JSON_CALLBACK'
                });
	}

	maishaAPI.getInsuranceCoverageHospitals = function(accessToken, page, offset) {
                return $http({
                        method: 'JSONP',
                        url: 'http://' + host + ':8383/maisha-api/api/insuranceCoverageHospitals?accessToken=' + accessToken +
                                '&page=' + page + '&offset=' + offset + '&callback=JSON_CALLBACK'
                });
        }

	maishaAPI.getInsuranceCoverageDoctors = function(accessToken, page, offset) {
                return $http({
                        method: 'JSONP',
                        url: 'http://' + host + ':8383/maisha-api/api/insuranceCoverageDoctors?accessToken=' + accessToken +
                                '&page=' + page + '&offset=' + offset + '&callback=JSON_CALLBACK'
                });
        }

	maishaAPI.getDrugs = function(accessToken, page, offset) {
                return $http({
                        method: 'JSONP',
                        url: 'http://' + host + ':8383/maisha-api/api/drugs?accessToken=' + accessToken +
                                '&page=' + page + '&offset=' + offset + '&callback=JSON_CALLBACK'
                });
        }

	maishaAPI.getDiseases = function(accessToken, page, offset) {
                return $http({
                        method: 'JSONP',
                        url: 'http://' + host + ':8383/maisha-api/api/diseases?accessToken=' + accessToken +
                                '&page=' + page + '&offset=' + offset + '&callback=JSON_CALLBACK'
                });
        }

	maishaAPI.getArticles = function() {
		return $http({
			method: 'JSONP',
			url: 'http://' + host + ':8383/maisha-api/api/articles?callback=JSON_CALLBACK'
		});
	}

	maishaAPI.getProfessionalDetails = function(id) {
		return $http({
			method: 'JSONP',
			url: 'http://' + host + ':8383/maisha-api/api/doctors/' + id + '?callback=JSON_CALLBACK'
		});
	}

	maishaAPI.getFacilityDetails = function(id) {
		return $http({
			method: 'JSONP',
			url: 'http://' + host + ':8383/maisha-api/api/facilities/' + id + '?callback=JSON_CALLBACK'
		});
	}

	maishaAPI.getInsuranceCompanyDetails = function(id) {
		return $http({
			method: 'JSONP',
			url: 'http://' + host + ':8383/maisha-api/api/insuranceCompanies/' + id + '?callback=JSON_CALLBACK'
		});
	}

	return maishaAPI;
})

/* LOGIN */
.factory('authenticationService', function($http, $q, $window) {
	var userInfo;
	var host = location.hostname;

	function login(username, password) {
		var deferred = $q.defer();
	
		$http({
                        method: 'JSONP',
                        url: 'http://' + host + ':8383/maisha-api/api/login?username=' + username + 
				'&password=' + password + '&callback=JSON_CALLBACK'

                }).then(function(result) {
			if(result.data.code == '200') { 
		
                        	userInfo = {
                                	username: result.data.user.details.username,
                                	accessToken: result.data.user.access.token

                        	};

                        	$window.sessionStorage['userInfo'] = JSON.stringify(userInfo);
                        	deferred.resolve(userInfo);
			} else {
				$window.alert("Invalid credentials!");
			}
	
                }, function(error) {
                        deferred.reject(error);
                });

                return deferred.promise;
	}

	function logout() {
		var deferred = $q.defer();
		
		$http({
                        method: 'JSONP',
                        url: 'http://' + host + ':8383/maisha-api/api/logout?accessToken=' + userInfo.accessToken + '&callback=JSON_CALLBACK'

                }).then(function(result) {
			userInfo = null;
			$window.sessionStorage['userInfo'] = null;
			deferred.resolve(result);
		}, function(error) {
			deferred.reject(error);
		});

		return deferred.promise;
	}

	function getUserInfo() {
		return userInfo;
	}

	function init() {
		if($window.sessionStorage['userInfo']) {
			userInfo = JSON.parse($window.sessionStorage['userInfo']);
		}
	}

	init();

	return {
		login: login,
		logout: logout,
		getUserInfo: getUserInfo
	};

});
