# Adventure Part 1

This project is a little different than previous projects in that there aren't explicity directions on what to do.  In order to figure out what each class needs to have, you need to both scour the existing files as well as the mocha output from `npm test`.

One suggestion to make this more encapsulated (OOP concept) is to try to write your code to not access data directly that lives in another class.  For example, if I want to modify the items in the Room class, maybe adding or removing an item, I want to do that through the class interface (i.e. class methods).  I needed to add the additional `addItem` and `removeItem` methods to accomplish that.
