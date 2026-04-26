define("Yacht_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Yacht"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "Yacht"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_Name",
							"caption": "#ResourceString(PDS_Name)#",
							"dataValueType": 1
						},
						{
							"id": "49d3247b-7820-5fb4-e33b-59e03ca112d9",
							"code": "PDS_Price",
							"path": "Price",
							"caption": "#ResourceString(PDS_Price)#",
							"dataValueType": 32
						},
						{
							"id": "01c2eaf9-334d-c007-bd82-d2b32ce41a4e",
							"code": "PDS_DriveType",
							"path": "DriveType",
							"caption": "#ResourceString(PDS_DriveType)#",
							"dataValueType": 10,
							"referenceSchemaName": "YachtDriveType"
						},
						{
							"id": "9e74bf59-ce7a-a13c-d80d-5589448e3599",
							"code": "PDS_Status",
							"path": "Status",
							"caption": "#ResourceString(PDS_Status)#",
							"dataValueType": 10,
							"referenceSchemaName": "YachtStatus"
						},
						{
							"id": "77730d29-ce59-81b7-6dd5-d450e43877e8",
							"code": "PDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						}
					]
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_Name": {
						"modelConfig": {
							"path": "PDS.Name"
						}
					},
					"PDS_Price": {
						"modelConfig": {
							"path": "PDS.Price"
						}
					},
					"PDS_DriveType": {
						"modelConfig": {
							"path": "PDS.DriveType"
						}
					},
					"PDS_Status": {
						"modelConfig": {
							"path": "PDS.Status"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "desc",
							"columnName": "CreatedOn"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "Yacht",
					"attributes": {
						"Name": {
							"path": "Name"
						},
						"Price": {
							"path": "Price"
						},
						"DriveType": {
							"path": "DriveType"
						},
						"Status": {
							"path": "Status"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});