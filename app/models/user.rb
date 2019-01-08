class User < ApplicationRecord
  has_many :messages, dependent: :nullify
  has_secure_password
  validates :email, presence: true, uniqueness: true

  def to_token_payload
    {
        sub: id,
        email: email,
        profile_pic: profile_pic
    }
  end
end
