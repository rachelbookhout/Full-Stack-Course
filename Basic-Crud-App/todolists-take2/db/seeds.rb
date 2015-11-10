# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Profile.destroy_all
Todo_List.destroy_all
Todo_Item.destroy_all

due_date = Date.Today + 1.year

User.create![{username: "cfiorina", password_digest:"womenrule"},
  {username: "dtrump", password_digest:"irule"},
  {username: "bcarson", password_digest:"iamgod"},
  {username: "hclinton", password_digest:"president"}]
Profile.create!
[{gender:"female", birth_year: 1954, first_name: "Carly" , last_name: "Fiorina" , user_id: 1 },
  {gender:"male", birth_year: 1946, first_name: "Donald" , last_name: "Trump", user_id: 2},
  {gender:"male", birth_year: 1951, first_name: "Ben", last_name: "Carson" , user_id: 3},
  {gender:"female", birth_year: 1947, first_name: "Hillary" , last_name: "Clinton" , user_id: 4}]

Todo_List.create!
[{list_name: "Carly's List", list_due_date: due_date, user_id:1},
  {list_name: "Donald's List", list_due_date:due_date, user_id:2},
  {list_name: "Ben's List",list_due_date:due_date, user_id:3},
  {list_name: "Hillary's List", list_due_date:due_date, user_id: 4}]

Todo_Item.create![
  {title:"Item 1a", description:"1a", completed: false, due_date: due_date ,todoList_id:1 },
  {title:"Item 1b", description:"1b", completed: false, due_date: due_date ,todoList_id:1 },
  {title:"Item 1c", description:"1c", completed: false, due_date: due_date ,todoList_id:1 },
  {title:"Item 1d", description:"1d", completed: false, due_date: due_date ,todoList_id:1 },
  {title:"Item 1e", description:"1e", completed: false, due_date: due_date ,todoList_id:1 },
  {title:"Item 2a", description:"2a", completed: false, due_date: due_date ,todoList_id:2 },
  {title:"Item 2b", description:"2b", completed: false, due_date: due_date ,todoList_id:2 },
  {title:"Item 2c", description:"2c", completed: false, due_date: due_date ,todoList_id:2 },
  {title:"Item 2d", description:"2d", completed: false, due_date: due_date ,todoList_id:2 },
  {title:"Item 2e", description:"2e", completed: false, due_date: due_date ,todoList_id:2 },
  {title:"Item 3a", description:"3a", completed: false, due_date: due_date ,todoList_id:2},
  {title:"Item 3b", description:"3b", completed: false, due_date: due_date ,todoList_id:3 },
  {title:"Item 3c", description:"3c", completed: false, due_date: due_date ,todoList_id:3 },
  {title:"Item 3d", description:"3d", completed: false, due_date: due_date ,todoList_id:3 },
  {title:"Item 3e", description:"3e", completed: false, due_date: due_date ,todoList_id:3 },
  {title:"Item 4a", description:"4a", completed: false, due_date: due_date ,todoList_id:3 },
  {title:"Item 4b", description:"4b", completed: false, due_date: due_date ,todoList_id:3 },
  {title:"Item 4c", description:"4c", completed: false, due_date: due_date ,todoList_id:4 },
  {title:"Item 4d", description:"4d", completed: false, due_date: due_date ,todoList_id:4 },
  {title:"Item 4e", description:"4e", completed: false, due_date: due_date ,todoList_id:4 },
  {title:"Item 5a", description:"5a", completed: false, due_date: due_date ,todoList_id:4 },
  {title:"Item 5b", description:"5b", completed: false, due_date: due_date ,todoList_id:4 }]
