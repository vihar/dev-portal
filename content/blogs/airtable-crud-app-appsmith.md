---
title: 'Build a CRUD App with an Airtable Database'
date: '2022-12-1'
updated: '2022-12-1'
categories:
  - 'airtable'
  - 'appsmith'
coverImage: '/images/appsmith-arirtable-cover.jpg'
coverWidth: 16
coverHeight: 9
excerpt: Learn to build a CRUD App with Airtable and Appsmith
---

When building web applications, developers spend a lot of time on backend architecture and building their own database. It is not uncommon to spend a lot of time thinking about the database and how to structure it because ultimately, this is what ensures that the data that’s stored is easily retrieved. This is a time-consuming process, especially when you have to make changes to the database and your data model is not very flexible. The good news is that there are a lot of tools out there that allow you to easily build web applications without having to spend a lot of time on the backend. One of these tools is Airtable, which is a database created by designers for designers and developers. Airtable is a database that you can build on your own, by defining your own structure.

With Appsmith, it’s possible to create a fully functional and custom frontend on the Airtable database in minutes. A vast array of pre-built UI components that is widgets are available to help you build good-looking applications. Connecting data sources with Appsmith takes a few minutes, and you can quickly build tools on top of the database of your choice.

In this blog, I will teach you how to build a frontend that can connect to Airtable as a datasource.

### Connecting Airtable on Appsmith

On Appsmith, it’s pretty straightforward to establish a connection with any datasource, including Airtable. We need to make the connection to the endpoint, database name, and user credentials. With this in mind, let’s get started.

- Create a new account on [Appsmith](https://appsmith.com) (it’s free!), if you are an existing user, log in to your Appsmith account.
- Create a new application under the dashboard under your preferred organization.
- On your Appsmith application, click on the `+` icon next to Datasources on the left navigation bar under Page1
- Next, click on the Now, navigate to the Create New tab and choose Airtable datasource; you’ll see the following screenshot:

![CleanShot 2022-03-09 at 13.07.13@2x.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1647243087147/VIJBtEV4S.png)

- All these details can be found under the settings on Airtable.

![CleanShot 2022-03-09 at 13.11.43@2x.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1647243125646/501gUrmQ0.png)

- Rename the Datasource to **Airtable** **CRUD** by double-clicking on the existing one.
- Next, click on the `Test` button at the bottom right of the screen. This will help you with understanding whether your configuration is valid or not. Hit the ‘Save’ button to establish a secure connection between Appsmith and Airtable if it returns a successful message.

Here’s what the configuration would look like:

![CleanShot 2022-03-09 at 13.12.32@2x.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1647243142923/U9sU2dqET.png)

### Adding Seed Data on Airtable

The basic configuration is complete, so now, we will now use the seed data already loaded on the Airtable Templates.

As an example, we’ll be building a Bug Tracker Admin panel on Appsmith. Note that, this application can be extended in different ways, you can connect it to GitHub/Bit Bucket to make it more robust. We’ve copied some data from the Bug Tracker template to showcase different functionalities on Appsmith.

[https://www.airtable.com/templates/featured/expOzMycWirMsUOTL/bug-tracke](https://www.airtable.com/templates/featured/expOzMycWirMsUOTL/bug-tracker)

Here’s how the base looks after the SEED data is copied.

![CleanShot 2022-03-09 at 13.16.22@2x.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1647243171741/wYVXnfnVA.png)

Now, let’s use the table to build our CRUD APP!

### CRUD on Airtable with Appsmith

##### Implementing the Read Operation

First, let’s read our data from the database and display it on a beautiful table widget. Follow the below steps:

- Click on the `+` icon next to the datasources and click on create New + from the Airtable CRUD datasource.
- Rename the query to **_getData_**
- Now set the query to **List Records**

Add the Base ID and Table Name (In our case, it’s Table 1) and hit RUN.

Note: You can find the Base ID from the URL or the settings page.

![CleanShot 2022-03-09 at 13.19.04@2x.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1647243196537/ABcb35VDj.png)

- This simple query returns all the bug details present in the Airtable base. Hit the RUN button to view all the results.

![CleanShot 2022-03-09 at 13.20.50@2x.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1647243234834/TXA3vWOvp.png)

We now have our query; let's bind this onto the table widget; for this, follow the below steps:

- Click the `+` icon next to widgets on the sidebar, search for the table widget, and drag and drop it onto the canvas.
- You can make any configurations to any widget via the property pane. Click on the table widget on the canvas; you will see the property pane docked to the sidebar on the right. Now, under the Table Data property, use the moustache syntax to bind the query:

```plaintext
{{
getData.data.records.map(item => Object.assign({id: item.id}, item.fields))
}}
```

With this, we should see all the data displayed on the table. The column names can be configured and re-organized under the property pane.

Note: We’ve added some JS to flatten the data from the Airtable API.

![CleanShot 2022-03-09 at 13.22.57@2x.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1647243280492/QxHeV61LZ.png)

##### **Implementing the Create Operation**

To add the create operation on Airtable, let’s make UI.

- Drag and drop a button widget onto the canvas. Open its property pane, set the onClick property to `Open a New Modal,` and choose `Create New.`
- This will open up a new modal now; let’s drag and drop a few widgets to create a form that we can use to add new **_Bugs_** into our database.

![CleanShot 2022-03-09 at 13.23.39@2x.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1647243308579/fx7ZKCkhq.png)

Here, we have four inputs to add to our bugs. We can configure the default values, labels, and placeholders by selecting the respective property panes. Now, let’s write the query to create a new bug on Airtable.

Follow the steps below:

- Click on the `+` icon next to the datasources and choose to Create New + from the Airtable CRUD datasource
- Rename the query to `addData`
- Set the Commands to `Create Record`
- Copy the Base ID, and Table Name from the previous query.
- Now under Records, paste the following:

```plaintext
[{
"fields": {
"Name":"{{Input1.text}}",
"Notes":"{{Input2.text}}",
"Status":"{{Select1.selectedOptionValue}}",
"Description":"{{RichTextEditor1.text}}",
}
}]
```

Here, we have an insert query that collects all the data from the form widgets we've created. Note that we use the moustache syntax to bind the data from the widgets onto the query body.

Lastly, we’ll need to configure the submit button; for this, go back to the modal and set the button’s `onClick` property to execute a query and choose `addData` under the events property:

![CleanShot 2022-03-09 at 13.26.34@2x.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1647243338805/jxUK-Ggfd.png)

##### Implementing the Update Operation

The Update operation is quite similar to the create operation. First, let’s build UI by creating a new custom column on the table by clicking on `ADD A NEW COLUMN` under the columns property.

Now, rename the column to Edit Bug, and click on the cog icon next to it, to configure column settings. Under this, we’ll see column-type properties set to a Button type. A modal should open up with the necessary fields to update the item when clicked.

Now, copy-paste Modal1, rename it to Modal2 and set the onClick property of the Edit Bug button to open Modal2. Here, in the form, we can set the default value to show existing information; to display this, use the **_selectedRow_** property from the table widget.

![CleanShot 2022-03-09 at 13.33.21@2x.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1647243357303/AdQX4Na3I.png)

Let’s write the Edit query:

- Click on the `+` icon next to the datasources and choose to Create New + from the Airtable CRUD datasource
- Rename the query to **_editData_**
- Set the commands to `Update Records`
- Copy the Base ID, and Table Name from the previous query.
- Update the Records field to the following:

```js
[
	{
		fields: {
			Name: '{{Input1Copy.text}}',
			Notes: '{{Input2Copy.text}}',
			Status: '{{Select1Copy.selectedOptionValue}}',
			Description: '{{RichTextEditor1Copy.text}}'
		}
	}
];
```

Here, we have an edit query that collects all the data from the form widgets on Modal2. Note that we use the moustache syntax to bind the data from the widgets onto the query body.

We’ll now need to configure the submit button; for this, go back to Modal2 and set the button’s onClick property to execute a query and choose `_editData_` under the events property:

![CleanShot 2022-03-09 at 14.06.34@2x.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1647243394498/kFYO1WLEA.png)

##### **Implementing the Delete Operation**

The delete operation is pretty straightforward with the Table’s selectedRow property; before we dive into it, let’s create a new column on the table and set it to the button. For this:

- Create a new custom column on the table by clicking on `Add a New Column` under the columns property.
- Now, rename this column to Close Bug, and click on the cog icon next to it, to configure column settings. Under this, we’ll see column-type properties set to a button type.
- Click on the `+` icon next to the data sources and choose the Create New + from the Airtable CRUD datasource
- Rename the query to **deleteData**
- Set the commands to Delete Record
- Copy the Base ID, and Table Name from the previous query.
- Update the Records ID to the following:

```js
{
	{
		Table1.selectedRow.id;
	}
}
```

Set the Close Bug button’s onClick property to run the **deleteData** query.

With these four operations configured, you will be able to read and analyze information from your database, edit the data, add or delete information and update records.

---

If you’re interested in using a database not listed on our website as an integration, please let us know about it by raising a PR on [Github](https://github.com/appsmithorg/appsmith), and we will do our best to include it at the earliest.

Join our growing community on [Discord](https://discord.com/invite/rBTTVJp), and follow us on [Youtube](https://www.youtube.com/c/Appsmith) and [Twitter](https://twitter.com/theappsmith) to stay up to date.
