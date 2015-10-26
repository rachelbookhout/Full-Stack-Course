require 'httparty'

class Recipe
# The Recipe class should

# be implemented in a file called module3_1_assignment.rb. The unit tests will expect a file by that name.
# import the HTTParty mixin
include HTTParty
# define a base_uri to use http://food2fork.com/api
base_uri 'http://food2fork.com/api'
# define a default query param of key for all HTTP GET requests whose value is equal to value of the environment variable FOOD2FORK_KEY.
default_params fields:
# specify the desired format as json
format :json
# specify all the above using legal Ruby syntax
# The Recipe class must have a for class method that
def for
end
# accepts a keyword for a search term
# issues an HTTP GET request using the HTTParty gem
# the HTTP GET request must have the "q=keyword" query argument and query "/search" route
# returns the JSON payload document supplied in the recipes element of the hash returned by HTTParty
end
