# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


12.times do 
  HomepageThumbnail.create(
    video_url: "https://vimeo.com/181320359",
    image_url: "http://www.conburch.com/wp-content/uploads/2014/06/16-9-dummy-image2-889x500.jpg",
    caption: "Caption"
  )
end

User.create(
  email: "admin@example.com",
  password: "password"
)
