class CreateTodoItems < ActiveRecord::Migration
  def change
    create_table :todo_items do |t|
      t.datetime :due_date
      t.string :title
      t.string :description
      t.boolean :completed

      t.timestamps null: false
    end
  end
end
