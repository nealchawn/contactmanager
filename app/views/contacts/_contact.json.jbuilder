json.extract! contact, :id, :fist_name, :last_name, :phone, :email, :created_at, :updated_at
json.url contact_url(contact, format: :json)
