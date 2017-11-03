UPDATE cart SET product_list = array_append(product_list, $1)
WHERE user_id = $2
returning *;
