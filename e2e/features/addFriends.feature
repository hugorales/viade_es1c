Feature: Add a Friend

	Scenario: We want to add a friend 
		Given The friends page on the application
		And Click in the NavBar to friends
		When We enter a WebId
		And We click the Add button
		Then I expect the WebId to appear on the friends list
		And I delete my new friend
		