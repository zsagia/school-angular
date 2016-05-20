(function() {
	var matches = [
		{
			id: 7111,
			attendance: 42200,
			awayClub: 'Manchester United',
			goals: {
				awayGoals: {
					firstHalf: [
						{29: 'Mata J.) Januzaj A.'}
					],
					secondHalf: []
				},
				homeGoals: {
					firstHalf: [],
					secondHalf: []
				}
			},
			homeClub: 'Aston Villa',
			matchDate: 1439581500000,
			round: 2,
			referee: 'Mike Dean',
			location: {id: 6003, name: 'Villa Park'},
			type: {id: 1001, name: 'Premiere League'}
		},{
			id: 7112,
			attendance: 36004,
			awayClub: 'Stoke City',
			goals: {
				awayGoals: {
					firstHalf: [],
					secondHalf: [
						{78: '(Penalty) Arnautovic M.'},
						{83: '(Ireland S.) Diouf M.'}
					]
				},
				homeGoals: {
					firstHalf: [
						{19: 'Dier E. (Eriksen C.)'},
						{47: 'Chadli N. (Davies B.)'}],
					secondHalf: []
				}
			},
			homeClub: 'Tottenham Hotspurs',
			matchDate: 1439650800000,
			round: 2,
			referee: 'Robert Madley',
			location: {id: 6017, name: 'White Hart Lane'},
			type: {id: 1001, name: 'Premiere League'}
		},
		{
			id: 7113,
			attendance: 41379,
			awayClub: 'Norwich City',
			goals: {
				awayGoals: {
					firstHalf: [
						{26: 'Martin R.'},
						{37: '(Hoolahan W.) Whittaker S.'}],
					secondHalf: [
						{57: '(Hoolahan W.) Redmond N.'}
					]
				},
				homeGoals: {
					firstHalf: [],
					secondHalf: [
						{88: 'Watmore D.'}
					]
				}
			},
			homeClub: 'Sunderland AFC',
			matchDate: 1439650800000,
			round: 2,
			referee: 'Kevin Friend',
			location: {id: 6015, name: 'Stadium of Light'},
			type: {id: 1001, name: 'Premiere League'}
		},
		{
			id: 7114,
			attendance: 20678,
			awayClub: 'Newcastle United',
			goals: {
				awayGoals: {
					firstHalf: [],
					secondHalf: []
				},
				homeGoals: {
					firstHalf: [
						{9: 'Gomis B. (Shelvey J.)'}
					],
					secondHalf: [
						{52: 'Ayew A. (Montero J.)'}
					]
				}
			},
			homeClub: 'Swansea City',
			matchDate: 1439650800000,
			round: 2,
			referee: 'Mike Jones',
			location: {id: 6016, name: 'Liberty Stadium'},
			type: {id: 1001, name: 'Premiere League'}
		},
		{
			id: 7115,
			attendance: 34857,
			awayClub: 'Leicester City',
			goals: {
				awayGoals: {
					firstHalf: [
						{27: 'Okazaki S.'},
						{38: '(Albrighton M.) Mahrez R.'}],
					secondHalf: []
				},
				homeGoals: {
					firstHalf: [],
					secondHalf: [
						{55: 'Payet D. (Kouyate C.)'}
					]
				}
			},
			homeClub: 'West Ham',
			matchDate: 1439650800000,
			round: 2,
			referee: 'Anthony Taylor',
			location: {id: 6020, name: 'Boleyn Ground'},
			type: {id: 1001, name: 'Premiere League'}
		},
		{
			id: 7116,
			attendance: 20011,
			awayClub: 'West Brom',
			goals: {
				awayGoals: {
					firstHalf: [],
					secondHalf: []
				},
				homeGoals: {
					firstHalf: [],
					secondHalf: []
				}
			},
			homeClub: 'Watford FC',
			matchDate: 1439650800000,
			round: 2,
			referee: 'Paul Tierney',
			location: {id: 6018, name: 'Vicarage Road'},
			type: {id: 1001, name: 'Premiere League'}
		},
		{
			id: 7117,
			attendance: 30966,
			awayClub: 'Everton',
			goals: {
				awayGoals: {
					firstHalf: [],
					secondHalf: []
				},
				homeGoals: {
					firstHalf: [
						{22: '(Kone A.) Lukaku R.'},
						{45: '(Barkley R.) Lukaku R.'}
					],
					secondHalf: [
						{84: '(Coleman S.) Barkley R.'}
					]
				}
			},
			homeClub: 'Southampton',
			matchDate: 1439642700000,
			round: 2,
			referee: 'Michael Oliver',
			location: {id: 6013, name: 'St. Marys Stadium'},
			type: {id: 1001, name: 'Premiere League'}
		}
	];

	var round = {
		id: 301,
		competition: {
			id: 201,
			country: 'United Kingdom',
			sport: {id: 100, title: 'Football'},
			season: {id: 80001, title: '2015-16'},
			title: 'Barclays Premier League'
		},
		num: 2
	};

	var app = angular.module('zsfootball', []);

	app.controller('RoundController', function() {
		this.matches = matches;
		this.round = round;

		this.getAwayGoals = function(match) {
			var goals = match.goals.awayGoals;

			return goals.firstHalf.length + goals.secondHalf.length;
		};

		this.getHomeGoals = function(match) {
			var goals = match.goals.homeGoals;

			return goals.firstHalf.length + goals.secondHalf.length;
		};
	});
})();