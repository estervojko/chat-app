class User < ApplicationRecord
  has_secure_password
  has_many :messages, dependent: :nullify
  has_many :chatrooms, through: :messages
  validates :email, presence: true, uniqueness: true

  def to_token_payload
    {
        sub: id,
        email: email,
        name: name,
        profile_pic: profile_pic
    }
  end
end
