var getCurrentModelFromId = function (collection, modelId) {
	var i = 0;
			id = parseInt(modelId)
			models = collection.models;

	for ( ; i < models.length; i += 1) {
		if (models[i].id === id) {
			return models[i];
		} else {
			continue;
		}
	}
}

var getCurrentProjectModelFromFormAttributes = function (collection, title) {
	var i = 0,
			title = $.trim(title),
			models = collection.models;

			for ( ; i < models.length; i += 1) {
				if (models[i].attributes.title === title) {
					return models[i];
				} else {
					continue;
				}
			}
}