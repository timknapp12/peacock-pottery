UPDATE cart SET product_list = array_append(product_list,'product_id')
WHERE product_id = $1
returning *;
