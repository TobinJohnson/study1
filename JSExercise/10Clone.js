const a = {
    Parent:
    {
        Student: {
            Name: "Virat",
            Age: 24,
            Rollno: 34,
            marks: [{ English: 85 }, { Science: 75 }]
        },
        MobileNos: ["1234567890", "9087654321"]
    }
};
const b = Object.assign({}, a, {
    Parent: Object.assign({}, a.Parent, {
        Student: Object.assign({}, a.Parent.Student, {
            marks: a.Parent.Student.marks.map(mark => ({ ...mark }))
        }), MobileNos: [...a.Parent.MobileNos]
    }),
})
const c = { ...a }
console.log(b);
b.Parent.Student.name = "Tobin"
b.Parent.MobileNos.push("102012021")
b.Parent.Student.marks[0].English = 25
console.log(b);
console.log(a);
console.log(c);