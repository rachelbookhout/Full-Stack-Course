class User < ActiveRecord::Base
has_one :profile
has_many :todo_list
has_many :todo_items :through :todo_list
end
