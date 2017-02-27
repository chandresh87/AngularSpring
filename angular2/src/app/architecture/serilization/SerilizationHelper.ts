import {
	IJsonMetaData
} from './JsonMetaData';

export class SerilizationHelper {
	public static jsonMetadataKey = "JsonProperty";

	/*check whether object is  Primitive*/
	static isPrimitive(obj) {
		switch (typeof obj) {
			case "string":
			case "number":
			case "boolean":
				return true;
		}
		return !!(obj instanceof String || obj === String ||
			obj instanceof Number || obj === Number ||
			obj instanceof Boolean || obj === Boolean);
	}
	/*check whether object is  Array*/
	static isArray(object) {
		if (object === Array) {
			return true;
		} else if (typeof Array.isArray === "function") {
			return Array.isArray(object);
		} else {
			return !!(object instanceof Array);
		}
	}

	/*Returns the class of object*/
	static getClazz(target: any, propertyKey: string): any {
		return Reflect.getMetadata("design:type", target, propertyKey)
	}

	/*Returns the MetaData atatched with the individual elements of class object*/
	static getJsonProperty<T>(target: any, propertyKey: string): IJsonMetaData<T> {

		return Reflect.getMetadata(SerilizationHelper.jsonMetadataKey, target, propertyKey);
	}

	/*Returns the deserialized object from JSON*/
	static deserialize<T>(clazz: { new (): T }, jsonObject) {

		if ((clazz === undefined) || (jsonObject === undefined)) return undefined;

		//Creates the object of given type in the Argument
		let obj = new clazz();

		// Iterate over the object elemements and populate it from given JSON 
		Object.keys(obj).forEach((key) => {

			// If property have  metaData attached in form of name and class of element,then it would be considered while settinf the property in the object
			let propertyMetadataFn: (IJsonMetaData) => any = (propertyMetadata) => {
				let propertyName = propertyMetadata.name || key;
				let innerJson = jsonObject ? jsonObject[propertyName] : undefined;
				let clazz = SerilizationHelper.getClazz(obj, key);

				// If Json element is Array
				if (SerilizationHelper.isArray(clazz)) {

					let metadata = SerilizationHelper.getJsonProperty(obj, key);
					var t = Reflect.getMetadata("design:type", obj, key);

					// metadata.clazz=undefined;
					if (metadata.clazz || SerilizationHelper.isPrimitive(clazz)) {

						if (innerJson && SerilizationHelper.isArray(innerJson)) {

							return innerJson.map(
								(item) => SerilizationHelper.deserialize(metadata.clazz, item));
						} else {
							return undefined;
						}
					} else {

						return innerJson;
					}

				}
				// If Json element is not a Primitive type
				else if (!SerilizationHelper.isPrimitive(clazz)) {
					return SerilizationHelper.deserialize(clazz, innerJson);
				}
				// If Json element is Primitive type
				else {

					return jsonObject ? jsonObject[propertyName] : undefined;
				}
			};

			let propertyMetadata = SerilizationHelper.getJsonProperty(obj, key);


			if (propertyMetadata) {
				obj[key] = propertyMetadataFn(propertyMetadata);
			} else {
				if (jsonObject && jsonObject[key] !== undefined) {
					obj[key] = jsonObject[key];
				}
			}
		});
		return obj;
	}

	/*Returns the Serialized JSON String from Object*/
	public static Serilize(obj): string {
		var t = typeof (obj);
		if (t != "object" || obj === null) {

			// simple data type
			if (t == "string") obj = '"' + obj + '"';

			return String(obj);

		} else {

			// recurse array or object
			var n, v, json = [],
				arr = (obj && obj.constructor == Array);
			var check = false;
			for (n in obj) {
				check = true;
				v = obj[n];
				t = typeof (v);

				if (t == "string") v = '"' + v + '"';
				//Ignore the funtion in the class object
				else if (t == "function") {
					check = false;
					continue;

				} else if (t == "object" && v !== null && check) v = SerilizationHelper.Serilize(v);

				json.push((arr ? "" : '"' + n + '":') + String(v));


			}

			var returnedJson = (arr ? "[" : "{") + String(json) + (arr ? "]" : "}")

			return returnedJson;
		}
	}
}