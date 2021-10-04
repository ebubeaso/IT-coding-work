-- This will the query from CarPreferences into JSON

-- select JSON_ARRAY('CarType', CarType, 'Likes', Likes) from CarPreferences
select JSON_OBJECT(
    'id', id,
    'CarType', CarType,
    'Likes', Likes
) from CarPreferences;