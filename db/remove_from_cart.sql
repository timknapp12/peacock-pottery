UPDATE cart SET product_list = array_remove(product_list, $1)
where user_id = $2
returning *;