

const initialState = [
    {
    category : "mobile",
    brand : "Vivo",
    title : "vivo V1"},

    {
    category : "laptop",
    brand : "Asus",
    title : "Asus 3152"},
    {
    category : "mobile",
    brand : "Oppo",
    title : "f11"},
    {
    category : "laptop",
    brand : "Lenovo",
    title : "lenovo 51ACL"}
                
]
const mobiledata = initialState.filter(s => s.category === "mobile")

console.log(mobiledata)