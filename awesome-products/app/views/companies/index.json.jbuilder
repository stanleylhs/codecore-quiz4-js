json.companies do |json|
  json.array!(@companies) do |company|
    json.name company.name
    # json.url company_url(company, format: :json)
    json.products company.products.collect { |product| product.name}
    # json.products(company.products) do |product|
    #   json.name product.name
    # end
  end
end
