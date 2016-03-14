json.array!(@products) do |product|
  json.extract! product, :id, :name, :company
  #json.url product_url(product, format: :json)
end
