class CreateTestimonials < ActiveRecord::Migration
  def change
    create_table :testimonials do |t|
      t.string :name
      t.datetime :date
      t.text :post

      t.timestamps null: false
    end
  end
end
