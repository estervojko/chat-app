class Message < ApplicationRecord
  belongs_to :user
  beloongs_to :chatroom
end
