json.companies do |json|
  json.array!(@companies) do |company|
    json.id company.id
    json.name company.name
    json.likes company.likes.count
    json.products company.products.collect { |product| product.name}
    # json.products(company.products) do |product|
    #   json.name product.name
    # end
  end
end
