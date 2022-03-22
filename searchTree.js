var TernarySearchTree = require("ternary-search-tree");
var tst = new TernarySearchTree();
tst.add("is");
tst.add("in");
tst.add("it");
tst.add("be");
tst.add("by");
tst.add("he");
tst.add("as");
tst.add("at");
tst.add("on");
tst.add("of");
tst.add("or");
tst.add("to");
tst.add('realme')
tst.add("re");
tst.add("red");

// equivalent: tst.addMany([ 'as', 'at', 'be', 'by', 'he', 'in', 'is', 'it', 'of', 'on', 'or', 'to' ]);
console.log(tst.partialMatch('re'));


