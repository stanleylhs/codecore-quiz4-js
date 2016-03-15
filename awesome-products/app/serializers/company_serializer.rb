class CompanySerializer < ActiveModel::Serializer
  attributes :name, :products

  def products
    object.products.map(&:name)
  end
end
