// Copyright (c) 2013, Web Notes Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt"

wn.module_page["Stock"] = [
	{
		title: wn._("Documents"),
		top: true,
		icon: "icon-copy",
		items: [
			
			{
                                label: wn._("Item"),
                                description: wn._("All Products or Services."),
                                doctype:"Item"
                        },
			{
				label: wn._("Material Request"),
				description: wn._("Requests for items."),
				doctype:"Material Request"
			},
			{
				label: wn._("Stock Entry"),
				description: wn._("Record item movement."),
				doctype:"Stock Entry"
			},
			{
				label: wn._("Delivery Note"),
				description: wn._("Shipments to customers."),
				doctype:"Delivery Note"
			},
			{
				label: wn._("Purchase Receipt"),
				description: wn._("Goods received from Suppliers."),
				doctype:"Purchase Receipt"
			},
		]
	},
	{
		title: wn._("Masters"),
		icon: "icon-book",
		items: [
			{
				label: wn._("Serial No"),
				description: wn._("Single unit of an Item."),
				doctype:"Serial No"
			},
			{
				label: wn._("Batch"),
				description: wn._("Batch (lot) of an Item."),
				doctype:"Batch"
			},
			{
				label: wn._("Warehouse"),
				description: wn._("Where items are stored."),
				doctype:"Warehouse"
			},
		]
	},
	{
		title: wn._("Tools"),
		icon: "icon-wrench",
		items: [
			{
				"doctype":"Stock Reconciliation",
				"label": wn._("Stock Reconciliation"),
				description: wn._("Upload stock balance via csv.")
			},
			{
				"doctype":"Installation Note",
				"label": wn._("Installation Note"),
				description: wn._("Installation record for a Serial No.")
			},
			{
				"label": wn._("Packing Slip"),
				"doctype":"Packing Slip",
				description: wn._("Split Delivery Note into packages.")
			},
			{
				"doctype":"Price List",
				"label": wn._("Price List"),
				"description": wn._("Multiple Price list.")
			},
			{
				"doctype":"Item Price",
				"label": wn._("Item Price"),
				"description": wn._("Multiple Item prices.")
			},
			{
				"doctype":"Quality Inspection",
				"label": wn._("Quality Inspection"),
				description: wn._("Incoming quality inspection.")
			},
			{
				"route":"Form/Landed Cost Wizard/Landed Cost Wizard",
				"label": wn._("Landed Cost Wizard"),
				description: wn._("Distribute transport overhead across items."),
				doctype: "Landed Cost Wizard"
			},
			{
				"route":"Form/Stock UOM Replace Utility/Stock UOM Replace Utility",
				"label": wn._("UOM Replace Utility"),
				description: wn._("Change UOM for an Item."),
				"doctype": "Stock UOM Replace Utility"
			},
		]
	},
	{
		title: wn._("Setup"),
		icon: "icon-cog",
		items: [
			{
				"label": wn._("Stock Settings"),
				"route": "Form/Stock Settings",
				"doctype":"Stock Settings",
				"description": wn._("Settings for Stock Module")
			},
			{
				"route":"Sales Browser/Item Group",
				"label": wn._("Item Group"),
				"doctype": "Item Group",
				"description": wn._("Item classification.")
			},
			{
				"doctype":"UOM",
				"label": wn._("Unit of Measure") + " (UOM)",
				"description": wn._("e.g. Kg, Unit, Nos, m")
			},
			{
				"doctype":"Brand",
				"label": wn._("Brand"),
				"description": wn._("Brand master.")
			}
		]
	},
	{
		title: wn._("Main Reports"),
		right: true,
		icon: "icon-table",
		items: [
			{
				"label":wn._("Stock Ledger"),
				doctype: "Item",
				route: "query-report/Stock Ledger"
			},
			{
				"label":wn._("Stock Balance"),
				page: "stock-balance"
			},
			{
				"label":wn._("Stock Projected Qty"),
				doctype: "Item",
				route: "query-report/Stock Projected Qty"
			},
			{
				"label":wn._("Stock Ageing"),
				doctype: "Item",
				route: "query-report/Stock Ageing"
			},
		]
	},
	{
		title: wn._("Analytics"),
		right: true,
		icon: "icon-bar-chart",
		items: [
			{
				"label":wn._("Stock Analytics"),
				page: "stock-analytics"
			},
		]
	},
	{
		title: wn._("Reports"),
		right: true,
		icon: "icon-list",
		items: [
			{
				"label":wn._("Ordered Items To Be Delivered"),
				route: "query-report/Ordered Items To Be Delivered",
				doctype: "Delivery Note"
			},
			{
				"label":wn._("Purchase Order Items To Be Received"),
				route: "query-report/Purchase Order Items To Be Received",
				doctype: "Purchase Receipt"
			},
			{
				"label":wn._("Item Shortage Report"),
				route: "Report/Bin/Item Shortage Report",
				doctype: "Purchase Receipt"
			},
			{
				"label":wn._("Serial No Service Contract Expiry"),
				route: "Report/Serial No/Serial No Service Contract Expiry",
				doctype: "Serial No"
			},
			{
				"label":wn._("Serial No Status"),
				route: "Report/Serial No/Serial No Status",
				doctype: "Serial No"
			},
			{
				"label":wn._("Serial No Warranty Expiry"),
				route: "Report/Serial No/Serial No Warranty Expiry",
				doctype: "Serial No"
			},
			{
				"label":wn._("Item-wise Price List Rate"),
				route: "Report/Item Price/Item-wise Price List Rate",
				doctype: "Item Price"
			},
			{
				"label":wn._("Purchase In Transit"),
				route: "query-report/Purchase In Transit",
				doctype: "Purchase Order"
			},
			{
				"label":wn._("Requested Items To Be Transferred"),
				route: "query-report/Requested Items To Be Transferred",
				doctype: "Material Request"
			},
			{
				"label":wn._("Batch-Wise Balance History"),
				route: "query-report/Batch-Wise Balance History",
				doctype: "Batch"
			},
			{
				"label":wn._("Warehouse-Wise Stock Balance"),
				route: "query-report/Warehouse-Wise Stock Balance",
				doctype: "Warehouse"
			},
			{
				"label":wn._("Item Prices"),
				route: "query-report/Item Prices",
				doctype: "Price List"
			},
			{
				"label":wn._("Itemwise Recommended Reorder Level"),
				route: "query-report/Itemwise Recommended Reorder Level",
				doctype: "Item"
			},
			{
				"label":wn._("Delivery Note Trends"),
				route: "query-report/Delivery Note Trends",
				doctype: "Delivery Note"
			},
			{
				"label":wn._("Purchase Receipt Trends"),
				route: "query-report/Purchase Receipt Trends",
				doctype: "Purchase Receipt"
			},
		]
	}
]

pscript['onload_stock-home'] = function(wrapper) {
	wn.views.moduleview.make(wrapper, "Stock");
}
